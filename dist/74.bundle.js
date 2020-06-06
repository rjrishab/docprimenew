(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./dev/js/components/commons/Home/staticDisclaimer.js":
/*!************************************************************!*\
  !*** ./dev/js/components/commons/Home/staticDisclaimer.js ***!
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
    var isVip = _ref.isVip;

    return _react2.default.createElement(
        'div',
        { className: 'dsclmer-ftr ' + (isVip ? 'margin-bottom-55' : '') },
        _react2.default.createElement(
            'p',
            { className: 'fw-500 mrt-20', style: { color: '#8a8a8a', fontSize: 10 } },
            'The Website is not intended to be used in case of a medical emergency and/ or critical care and the user should directly contact his/ her medical service provider for Physical Examination. Docprime is solely a technology partner.'
        ),
        _react2.default.createElement(
            'div',
            { className: 'col-12 footer-new-copyrght', style: { paddingBottom: 5 } },
            _react2.default.createElement(
                'p',
                null,
                'Docprime.com Copyright \xA9 2020.'
            ),
            _react2.default.createElement(
                'p',
                null,
                'All rights reserved.'
            ),
            _react2.default.createElement(
                'p',
                null,
                'DOCPRIME TECHNOLOGIES PRIVATE LIMITED'
            ),
            _react2.default.createElement(
                'p',
                null,
                'CIN : U74999HR2016PTC064312'
            )
        )
    );
};

/***/ }),

/***/ "./dev/js/components/opd/searchResults/carouselView.js":
/*!*************************************************************!*\
  !*** ./dev/js/components/opd/searchResults/carouselView.js ***!
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

var CarouselView = function (_React$Component) {
				_inherits(CarouselView, _React$Component);

				function CarouselView() {
								_classCallCheck(this, CarouselView);

								return _possibleConstructorReturn(this, (CarouselView.__proto__ || Object.getPrototypeOf(CarouselView)).apply(this, arguments));
				}

				_createClass(CarouselView, [{
								key: 'scroll',
								value: function scroll(type) {
												var elmnt = document.getElementById('top_' + this.props.dataType);

												if (elmnt && document.getElementsByClassName('top_' + this.props.dataType + '_list') && document.getElementById('leftArrow_' + this.props.dataType) && document.getElementById('RightArrow_' + this.props.dataType)) {

																var outerDivWidth = elmnt.offsetWidth;
																var childDivWidth = document.getElementsByClassName('top_' + this.props.dataType + '_list')[0].offsetWidth;
																var cardCount = document.getElementsByClassName('top_' + this.props.dataType + '_list')[0].childElementCount;
																var cardWidth = Math.ceil(childDivWidth / cardCount);

																var leftScroll = elmnt.scrollLeft;
																var scrollVal = Math.floor(outerDivWidth / cardWidth) * cardWidth;
																var cardEnd = cardCount * cardWidth;

																if (type == 'right') {
																				elmnt.scroll({ left: leftScroll + scrollVal, behavior: 'smooth' });
																				if (cardEnd <= leftScroll + scrollVal + outerDivWidth) {
																								document.getElementById('leftArrow_' + this.props.dataType).classList.add("d-none");
																				}
																				document.getElementById('RightArrow_' + this.props.dataType).classList.remove("d-none");
																} else {
																				elmnt.scroll({ left: leftScroll - scrollVal, behavior: 'smooth' });
																				if (leftScroll - scrollVal <= 0) {
																								document.getElementById('RightArrow_' + this.props.dataType).classList.add("d-none");
																				}
																				document.getElementById('leftArrow_' + this.props.dataType).classList.remove("d-none");
																}
												}
								}
				}, {
								key: 'render',
								value: function render() {
												var _this2 = this;

												var _props = this.props,
												    topHeading = _props.topHeading,
												    dataList = _props.dataList,
												    dataType = _props.dataType,
												    topHospital = _props.topHospital,
												    extraHeading = _props.extraHeading,
												    viewAll = _props.viewAll;

												return _react2.default.createElement(
																'div',
																{ className: 'pakg-slider-container mt-10 mb-10 pkg-ntwk-mrgn' },
																_react2.default.createElement(
																				'div',
																				{ className: 'pkgSliderHeading pl-1' },
																				_react2.default.createElement(
																								'h5',
																								null,
																								topHeading || ''
																				),
																				extraHeading && (viewAll || dataList.length >= 20) && _react2.default.createElement(
																								'span',
																								{ onClick: function onClick() {
																																return _this2.props.navigateTo();
																												} },
																								extraHeading
																				)
																),
																_react2.default.createElement(
																				'div',
																				{ className: 'pkgSliderContainer network-slider', id: 'top_' + this.props.dataType },
																				_react2.default.createElement(
																								'div',
																								{ className: 'pkgCardsList d-inline-flex sub-wd-cards top_' + this.props.dataType + '_list' },
																								dataList.map(function (data, key) {
																												return _react2.default.createElement(
																																'a',
																																{ key: key + '_' + data.id, href: '', className: 'pkgcustCards', onClick: function onClick() {
																																								return _this2.props.carouselCardClicked(data, topHospital ? true : false);
																																				} },
																																_react2.default.createElement(
																																				'div',
																																				{ className: 'pkgcardImgCont' },
																																				data.logo && _react2.default.createElement('img', { style: { width: '82px' }, className: 'img-fluid', src: data.logo })
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
																				{ className: 'pkglftRhtbtncont netwrk-btns' },
																				_react2.default.createElement(
																								'div',
																								{ className: 'pkg-btnlft d-none', id: 'RightArrow_' + dataType, onClick: this.scroll.bind(this, 'left') },
																								_react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
																				),
																				_react2.default.createElement(
																								'div',
																								{ className: 'pkg-btnrgt', id: 'leftArrow_' + dataType, onClick: this.scroll.bind(this, 'right') },
																								_react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
																				)
																)
												);
								}
				}]);

				return CarouselView;
}(_react2.default.Component);

exports.default = CarouselView;

/***/ }),

/***/ "./dev/js/components/vipClub/vipClubView.js":
/*!**************************************************!*\
  !*** ./dev/js/components/vipClub/vipClubView.js ***!
  \**************************************************/
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

var _LeftBar = __webpack_require__(/*! ../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _config = __webpack_require__(/*! ../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _HelmetTags = __webpack_require__(/*! ../commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _gtm = __webpack_require__(/*! ../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _vipClubPopup = __webpack_require__(/*! ./vipClubPopup.js */ "./dev/js/components/vipClub/vipClubPopup.js");

var _vipClubPopup2 = _interopRequireDefault(_vipClubPopup);

var _staticDisclaimer = __webpack_require__(/*! ../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

var _carouselView = __webpack_require__(/*! ../opd/searchResults/carouselView.js */ "./dev/js/components/opd/searchResults/carouselView.js");

var _carouselView2 = _interopRequireDefault(_carouselView);

var _vipPlanView = __webpack_require__(/*! ./vipPlanView.js */ "./dev/js/components/vipClub/vipPlanView.js");

var _vipPlanView2 = _interopRequireDefault(_vipPlanView);

var _vipGoldView = __webpack_require__(/*! ./vipGoldView.js */ "./dev/js/components/vipClub/vipGoldView.js");

var _vipGoldView2 = _interopRequireDefault(_vipGoldView);

var _vipTncView = __webpack_require__(/*! ./vipTncView.js */ "./dev/js/components/vipClub/vipTncView.js");

var _vipTncView2 = _interopRequireDefault(_vipTncView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var VipClubView = function (_React$Component) {
    _inherits(VipClubView, _React$Component);

    function VipClubView(props) {
        _classCallCheck(this, VipClubView);

        var _this = _possibleConstructorReturn(this, (VipClubView.__proto__ || Object.getPrototypeOf(VipClubView)).call(this, props));

        _this.hospitalCardClicked = function (data) {
            var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            var gtmData = {};
            if (top) {
                gtmData = {
                    'Category': 'ConsumerApp', 'Action': 'vip-nearby-hospitals-clicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'vip-nearby-hospitals-clicked'
                };
            } else {
                gtmData = {
                    'Category': 'ConsumerApp', 'Action': 'vip-tophospitalsClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'vip-top-hospitals-clicked'
                };
            }
            _gtm2.default.sendEvent({ data: gtmData });
            var redirectUrl = '';

            if (data.url) {
                redirectUrl = '/' + data.url + '?showPopup=true';
            } else {
                redirectUrl = '/ipd/hospital/' + data.id + '?showPopup=true';
            }
            _this.props.history.push(redirectUrl);
        };

        _this.state = {
            selected_plan_data: _this.props.selected_plan ? _this.props.selected_plan : '',
            showPopup: false,
            isLead: '',
            selected_plan_id: _this.props.selected_plan && Object.keys(_this.props.selected_plan).length ? _this.props.selected_plan.id : '',
            toggleTabType: false,
            is_gold_clicked: _this.props.is_vip_gold ? _this.props.is_vip_gold : false,
            openMedlifeTnC: false,
            is_lead_enabled: false
        };
        return _this;
    }

    _createClass(VipClubView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var plan = [];
            if (!this.props.is_gold && this.props.selected_vip_plan && this.props.vipClubList && (this.props.vipClubList.plans && this.props.vipClubList.plans.length > 0 || this.props.vipClubList.gold_plans && this.props.vipClubList.gold_plans.length > 0)) {
                var resp = this.props.selected_vip_plan;
                this.setState({ selected_plan_data: resp, selected_plan_id: resp.id });
            }

            var loginUser = void 0;
            var lead_data = queryString.parse(this.props.location.search);
            var extraParams = {};
            if (this.props.common_utm_tags && this.props.common_utm_tags.length > 0) {
                extraParams = this.props.common_utm_tags.filter(function (x) {
                    return x.type == "common_xtra_tags";
                })[0].utm_tags;
            }
            var visitor_info = _gtm2.default.getVisitorInfo();
            if (visitor_info && visitor_info.visit_id) {
                lead_data.visit_id = visitor_info.visit_id;
                lead_data.visitor_id = visitor_info.visitor_id;
            }
            if (_storage2.default.checkAuth() && !this.props.isSalesAgent && !this.props.isAgent && !_storage2.default.isAgent()) {
                if (this.props.USER && Object.keys(this.props.USER.profiles).length > 0 && this.props.USER.defaultProfile) {
                    loginUser = this.props.USER.profiles[this.props.USER.defaultProfile];
                    if (Object.keys(loginUser).length > 0) {
                        if (this.props.common_utm_tags && this.props.common_utm_tags.length > 0) {
                            extraParams = this.props.common_utm_tags.filter(function (x) {
                                return x.type == "common_xtra_tags";
                            })[0].utm_tags;
                        }
                        var _visitor_info = _gtm2.default.getVisitorInfo();
                        if (_visitor_info && _visitor_info.visit_id) {
                            lead_data.visit_id = _visitor_info.visit_id;
                            lead_data.visitor_id = _visitor_info.visitor_id;
                        }
                        if (this.state.is_lead_enabled) {
                            /*this.setState({is_lead_enabled:false})
                            this.props.generateVipClubLead({selectedPlan:this.props.selected_vip_plan ? this.props.selected_vip_plan.id : '', number:loginUser.phone_number, lead_data:lead_data, selectedLocation:this.props.selectedLocation, user_name:loginUser.name, extraParams:extraParams,
                                cb: (resp) => {
                                    let LeadIdData = {
                                    'Category': 'ConsumerApp', 'Action': 'VipAutoLeadClicked', 'CustomerID': GTM.getUserId() || '', 'leadid': resp.lead_id ? resp.lead_id : 0, 'event': 'vip-auto-lead-clicked', 'source': lead_data.source || ''
                                    }
                                    GTM.sendEvent({ data: LeadIdData })
                                }
                            })
                            setTimeout(() => {
                             this.setState({is_lead_enabled:true})
                            }, 5000)*/
                        }
                    }
                }
            }
            if (!_storage2.default.checkAuth() && this.props.user_loggedIn_number && !this.props.is_from_organic && this.state.is_lead_enabled) {
                /*this.props.generateVipClubLead({selectedPlan:this.props.selected_vip_plan ? this.props.selected_vip_plan.id : '', number:this.props.user_loggedIn_number, lead_data:lead_data, selectedLocation:this.props.selectedLocation, user_name:'', extraParams:extraParams,
                    cb: (resp) => {
                        let LeadIdData = {
                        'Category': 'ConsumerApp', 'Action': 'VipAutoLeadClicked', 'CustomerID': GTM.getUserId() || '', 'leadid': resp.lead_id ? resp.lead_id : 0, 'event': 'vip-auto-lead-clicked', 'source': lead_data.source || ''
                        }
                        GTM.sendEvent({ data: LeadIdData })
                    }
                })
                setTimeout(() => {
                     this.setState({is_lead_enabled:true})
                }, 5000)*/
            }

            var self = this;
            if (window && document) {
                window.onscroll = function () {
                    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

                    if (self.refs['vipHeaderBar']) {

                        if (scrollPosition > 10) {
                            self.setState({ toggleTabType: true });
                        } else {
                            self.setState({ toggleTabType: false });
                        }
                    }
                };
            }
        }
    }, {
        key: 'selectPlan',
        value: function selectPlan(plan_to_toggle) {
            var _this2 = this;

            this.setState({ is_gold_clicked: false });
            var plan = plan_to_toggle;
            plan.isForceUpdate = false;
            this.props.selectVipClubPlan('plan', plan, function (resp) {
                // toggle/select vip plan
                _this2.setState({ selected_plan_data: resp, selected_plan_id: resp.id });
            });
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            this.setState({ openMedlifeTnC: true });
        }
    }, {
        key: 'closeTncPopup',
        value: function closeTncPopup() {
            this.setState({ openMedlifeTnC: false });
        }
    }, {
        key: 'selectGoldPlan',
        value: function selectGoldPlan(plan_to_toggle, isHeader, is_desktop_view) {
            var _this3 = this;

            this.setState({ is_gold_clicked: true });
            var plan = void 0;
            if (isHeader && this.props.vipClubList && this.props.vipClubList.gold_plans && this.props.vipClubList.gold_plans.length > 0) {
                plan = this.props.vipClubList.gold_plans.filter(function (x) {
                    return x.is_selected;
                })[0];
            } else {
                plan = plan_to_toggle;
            }
            plan.isForceUpdate = false;
            this.props.selectVipClubPlan('plan', plan, function (resp) {
                // toggle/select gold plan
                _this3.setState({ selected_plan_data: resp, selected_plan_id: resp.id });
                if (is_desktop_view) {
                    _this3.proceed();
                }
            });
        }
    }, {
        key: 'hideLoginPopup',
        value: function hideLoginPopup() {
            this.setState({ showPopup: false });
        }
    }, {
        key: 'closeLeadPopup',
        value: function closeLeadPopup() {
            this.setState({ showPopup: false });
        }
    }, {
        key: 'proceed',
        value: function proceed() {
            _nodeSnackbar2.default.show({ pos: 'bottom-center', text: 'We have currently stopped Gold subscriptions for new users. Sorry for the inconvenience caused.' });
            return;
            var loginUser = void 0;
            var lead_data = queryString.parse(this.props.location.search);
            var gtmData = {
                'Category': 'ConsumerApp', 'Action': 'VipClubBuyNowClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'vip-buynow-clicked', 'selected': ''
            };
            _gtm2.default.sendEvent({ data: gtmData });

            if (_storage2.default.checkAuth()) {
                if (this.props.USER && Object.keys(this.props.USER.profiles).length > 0 && this.props.USER.defaultProfile) {
                    loginUser = this.props.USER.profiles[this.props.USER.defaultProfile];
                    var extraParams = {};
                    if (this.props.common_utm_tags && this.props.common_utm_tags.length > 0) {
                        extraParams = this.props.common_utm_tags.filter(function (x) {
                            return x.type == "common_xtra_tags";
                        })[0].utm_tags;
                    }
                    if (Object.keys(loginUser).length > 0 && !_storage2.default.isAgent()) {

                        // to create vip or gold member lead for matrix
                        var visitor_info = _gtm2.default.getVisitorInfo();
                        if (visitor_info && visitor_info.visit_id) {
                            lead_data.visit_id = visitor_info.visit_id;
                            lead_data.visitor_id = visitor_info.visitor_id;
                        }
                        if (this.state.is_lead_enabled) {
                            /*this.setState({is_lead_enabled:false})
                            this.props.generateVipClubLead({selectedPlan:this.props.selected_vip_plan ? this.props.selected_vip_plan.id : '', number:loginUser.phone_number, lead_data:lead_data, selectedLocation:this.props.selectedLocation, user_name:loginUser.name, extraParams:extraParams,
                                cb: (resp) => {
                                    let LeadIdData = {
                                    'Category': 'ConsumerApp', 'Action': 'VipLeadClicked', 'CustomerID': GTM.getUserId() || '', 'leadid': resp.lead_id ? resp.lead_id : 0, 'event': 'vip-lead-clicked', 'source': lead_data.source || ''
                                    }
                                    GTM.sendEvent({ data: LeadIdData })
                                }
                            })
                            setTimeout(() => {
                                // this.setState({is_lead_enabled:true})
                            }, 5000)*/
                        }
                    }
                    var url = '/vip-club-member-details?isDummy=true';
                    if (lead_data.utm_source) {
                        url += '&utm_source=' + lead_data.utm_source;
                    }
                    if (lead_data.utm_term) {
                        url += '&utm_term=' + lead_data.utm_term;
                    }
                    if (lead_data.utm_campaign) {
                        url += '&utm_campaign=' + lead_data.utm_campaign;
                    }
                    if (lead_data.utm_medium) {
                        url += '&utm_medium=' + lead_data.utm_medium;
                    }
                    if (lead_data.is_agent) {
                        url += '&is_agent=' + lead_data.is_agent;
                    }
                    if (lead_data.is_gold) {
                        url += '&is_gold=' + lead_data.is_gold;
                    }
                    this.props.history.push(url);
                    // this.props.history.push('/vip-club-member-details')
                }
            } else {
                this.props.citiesData();
                this.setState({ showPopup: true });
            }
        }
    }, {
        key: 'navigateTo',
        value: function navigateTo(data, e) {
            e.preventDefault();
            e.stopPropagation();
            var gtmData = {
                'Category': 'ConsumerApp', 'Action': 'VipClubWidgetHospitalClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'vip-widget-hospital-clicked', 'selected': '', 'selectedId': data.id || ''
            };
            _gtm2.default.sendEvent({ data: gtmData });
            var redirectUrl = '';

            if (data.url) {
                redirectUrl = '/' + data.url + '?showPopup=true';
            } else {
                redirectUrl = '/ipd/hospital/' + data.id + '?showPopup=true';
            }

            this.props.history.push(redirectUrl);
        }
    }, {
        key: 'viewDocprimeNetworkClicked',
        value: function viewDocprimeNetworkClicked() {
            var gold = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var is_gold = this.props.is_gold || this.state.is_gold_clicked || gold;
            var gtmData = {
                'Category': 'ConsumerApp', 'Action': 'Vip' + (is_gold ? 'gold' : '') + 'DoctorNetworkClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'vip-' + (is_gold ? 'gold-' : '') + 'doctor-network-clicked'
            };
            _gtm2.default.sendEvent({ data: gtmData });
            var url = '/opd/searchresults?fromVip=true';
            if (is_gold) {
                url = '/opd/searchresults?fromGoldVip=true';
            }
            this.props.history.push(url);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var self = this;
            return this.props.vipClubList && Object.keys(this.props.vipClubList).length > 0 && this.state.selected_plan_data && Object.keys(this.state.selected_plan_data).length > 0 ? _react2.default.createElement(
                'div',
                { className: 'profile-body-wrap', style: { background: "" } },
                _react2.default.createElement(_DesktopProfileHeader2.default, { bookingPage: true }),
                _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                        canonicalUrl: '' + _config2.default.API_BASE_URL + this.props.location.pathname,
                        title: '' + ('Docprime Vip' || false)
                        // description: `${this.props.data.description || ''}`
                    }, noIndex: false }),
                _react2.default.createElement(
                    'div',
                    { className: 'vipHeaderBar ' + (this.state.toggleTabType ? 'hed-curv-rmove' : '') + ' d-none', ref: 'vipHeaderBar' },
                    this.props.isSalesAgent && this.props.isAgent ? '' : this.props.source == 'doctorlisting' || this.props.source == 'bookingpage' ? _react2.default.createElement(
                        'div',
                        { className: 'vipBackIco', onClick: function onClick() {
                                return _this4.props.history.go(-1);
                            } },
                        _react2.default.createElement('img', { src: "/assets" + "/img/careleft-arrow.svg" })
                    ) : _react2.default.createElement(
                        'div',
                        { className: 'vipBackIco', onClick: function onClick() {
                                return _this4.props.history.push('/');
                            } },
                        _react2.default.createElement('img', { src: "/assets" + "/img/vip-home.svg" })
                    ),
                    this.props.is_gold ? _react2.default.createElement(
                        'div',
                        { className: 'vip-logo-cont d-none ' + (this.state.toggleTabType ? 'header-scroll-change' : ''), ref: '' },
                        _react2.default.createElement('img', { className: 'vipLogiImg', src: "/assets" + "/img/docgold.png" }),
                        _react2.default.createElement(
                            'p',
                            { className: 'scrl-cont-dat gld-hd-txt-algn' },
                            'Membership plan for '
                        ),
                        _react2.default.createElement(
                            'h1',
                            { className: 'scrl-cont-dat' },
                            'exclusive discounts'
                        )
                    ) : _react2.default.createElement(
                        'div',
                        { className: 'vip-logo-cont d-none ' + (this.state.toggleTabType ? 'header-scroll-change' : ''), ref: '' },
                        _react2.default.createElement('img', { className: 'vipLogiImg', src: "/assets" + "/img/vip-logo.png" }),
                        _react2.default.createElement(
                            'p',
                            { className: 'scrl-cont-dat' },
                            'Save 70% on your family\'s medical bills'
                        ),
                        _react2.default.createElement(
                            'h1',
                            { className: 'scrl-cont-dat' },
                            'for just ',
                            _react2.default.createElement(
                                'span',
                                { className: 'vip-prc-cut' },
                                '\u20B9',
                                this.state.selected_plan_data.mrp
                            ),
                            ' ',
                            _react2.default.createElement(
                                'span',
                                { className: 'vip-main-price' },
                                '\u20B9',
                                this.state.selected_plan_data.deal_price
                            ),
                            '  '
                        )
                    )
                ),
                this.state.showPopup ? _react2.default.createElement(_vipClubPopup2.default, _extends({}, this.props, { selected_plan: this.state.selected_plan_data, hideLoginPopup: this.hideLoginPopup.bind(this), isLead: this.state.isLead, closeLeadPopup: this.closeLeadPopup.bind(this), is_see_more: false })) : '',
                !this.props.is_gold && !this.state.is_gold_clicked ? _react2.default.createElement(_vipPlanView2.default, _extends({}, this.props, {
                    isSalesAgent: this.props.isSalesAgent,
                    isAgent: this.props.isAgent,
                    source: this.props.source,
                    is_gold: this.props.is_gold,
                    is_vip_gold: this.props.is_vip_gold,
                    selectPlan: this.selectPlan.bind(this),
                    proceed: this.proceed.bind(this),
                    selected_plan_id: this.state.selected_plan_id,
                    selected_plan_data: this.state.selected_plan_data,
                    viewDocprimeNetworkClicked: function viewDocprimeNetworkClicked(data) {
                        return _this4.viewDocprimeNetworkClicked(data, _this4);
                    },
                    hospitalCardClicked: this.hospitalCardClicked,
                    toggleTabType: this.state.toggleTabType,
                    selectGoldPlan: this.selectGoldPlan.bind(this),
                    toggle: this.toggle.bind(this)
                })) : '',
                this.props.is_gold || this.state.is_gold_clicked ? _react2.default.createElement(_vipGoldView2.default, _extends({}, this.props, {
                    isSalesAgent: this.props.isSalesAgent,
                    isAgent: this.props.isAgent,
                    source: this.props.source,
                    is_gold: this.props.is_gold,
                    is_vip_gold: this.props.is_vip_gold,
                    selectPlan: this.selectPlan.bind(this),
                    proceed: this.proceed.bind(this),
                    selected_plan_id: this.state.selected_plan_id,
                    selected_plan_data: this.state.selected_plan_data,
                    viewDocprimeNetworkClicked: function viewDocprimeNetworkClicked() {
                        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                        return _this4.viewDocprimeNetworkClicked(data, _this4);
                    },
                    hospitalCardClicked: this.hospitalCardClicked,
                    toggleTabType: this.state.toggleTabType,
                    selectGoldPlan: this.selectGoldPlan.bind(this),
                    toggle: this.toggle.bind(this)
                })) : '',
                this.state.openMedlifeTnC ? _react2.default.createElement(_vipTncView2.default, { props: this.props, toggle: this.closeTncPopup.bind(this), is_insurance_applicable: false }) : "",
                _react2.default.createElement(_staticDisclaimer2.default, { isVip: true })
            ) : _react2.default.createElement('div', null);
        }
    }]);

    return VipClubView;
}(_react2.default.Component);

exports.default = VipClubView;

/***/ }),

/***/ "./dev/js/components/vipClub/vipGoldView.js":
/*!**************************************************!*\
  !*** ./dev/js/components/vipClub/vipGoldView.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _LeftBar = __webpack_require__(/*! ../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _config = __webpack_require__(/*! ../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _HelmetTags = __webpack_require__(/*! ../commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _gtm = __webpack_require__(/*! ../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _vipClubPopup = __webpack_require__(/*! ./vipClubPopup.js */ "./dev/js/components/vipClub/vipClubPopup.js");

var _vipClubPopup2 = _interopRequireDefault(_vipClubPopup);

var _staticDisclaimer = __webpack_require__(/*! ../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

var _carouselView = __webpack_require__(/*! ../opd/searchResults/carouselView.js */ "./dev/js/components/opd/searchResults/carouselView.js");

var _carouselView2 = _interopRequireDefault(_carouselView);

var _vipReviewSection = __webpack_require__(/*! ./vipReviewSection.js */ "./dev/js/components/vipClub/vipReviewSection.js");

var _vipReviewSection2 = _interopRequireDefault(_vipReviewSection);

var _HomePageWidget = __webpack_require__(/*! ../commons/HomeNewView/HomePageWidget.js */ "./dev/js/components/commons/HomeNewView/HomePageWidget.js");

var _HomePageWidget2 = _interopRequireDefault(_HomePageWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var VipGoldView = function (_React$Component) {
    _inherits(VipGoldView, _React$Component);

    function VipGoldView(props) {
        _classCallCheck(this, VipGoldView);

        var _this = _possibleConstructorReturn(this, (VipGoldView.__proto__ || Object.getPrototypeOf(VipGoldView)).call(this, props));

        _this.playVideo = function () {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'goldVideoClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'gold-video-clicked'
            };
            _gtm2.default.sendEvent({ data: data });
            var frameVideo = document.getElementById("goldVideo");
            var playIcon = document.getElementById('player-icon');
            frameVideo.ontimeupdate = function () {
                videoTimer();
            };
            function videoTimer() {
                var t = frameVideo.currentTime;
                vidTimer.innerHTML = Math.round(t) + 's';
            }
            var vidTimer = document.getElementById('video-time');
            vidTimer.style.display = "block";
            document.addEventListener('scroll', function () {
                frameVideo.pause();
                playIcon.style.opacity = 1;
            });
            frameVideo.addEventListener('ended', function () {
                playIcon.style.opacity = 1;
            });
            if (frameVideo.paused) {
                frameVideo.play();
                playIcon.style.opacity = 0;
            } else {
                frameVideo.pause();
                playIcon.style.opacity = 1;
            }
        };

        _this.sendPageUrl = function () {
            var data = {
                callback: window.location.pathname.split('/')[1] + window.location.search.replace(/&/g, '*'),
                template: 'gold_template_1'
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

        _this.state = {
            tabsValue: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            showPopup: false
        };
        return _this;
    }

    _createClass(VipGoldView, [{
        key: 'ButtonHandler',
        value: function ButtonHandler(field, event) {
            var tabs = [].concat(this.state.tabsValue);
            var self = this;
            var found = false;
            tabs = tabs.filter(function (x) {
                if (x == field) {
                    found = true;
                    return false;
                }
                return true;
            });
            if (!found) {
                tabs.push(field);
            }

            self.setState({ tabsValue: tabs });
        }
    }, {
        key: 'goBack',
        value: function goBack() {
            var parsed = queryString.parse(this.props.location.search);
            var selectPlan = this.props.selected_plan_data && this.props.selected_plan_data.id;
            if (selectPlan) {

                var plan = [];
                if (this.props.is_booking_page == 'opd' && this.props.odpGoldPredictedPrice && this.props.odpGoldPredictedPrice.length) {
                    plan = this.props.odpGoldPredictedPrice.filter(function (x) {
                        return x.id == selectPlan;
                    });
                } else if (this.props.is_booking_page == 'lab' && this.props.labGoldPredictedPrice && this.props.labGoldPredictedPrice.length) {
                    plan = this.props.labGoldPredictedPrice.filter(function (x) {
                        return x.id == selectPlan;
                    });
                }

                if (plan && plan.length) {
                    this.props.selectVipClubPlan('', plan[0]); // toggle/select gold plan
                }
            }
            if (this.props.is_from_organic) {
                var url = void 0;
                if (parsed.callBackUrl) {
                    url = parsed.callBackUrl;
                    if (parsed.hospital_id && !url.includes('hospital_id')) {
                        url += '?hospital_id=' + parsed.hospital_id;
                    }
                    if (parsed.doctor_id) {
                        url += '&doctor_id=' + parsed.doctor_id;
                    }
                    this.props.history.push(url);
                }
            } else {
                this.props.history.go(-1);
            }
        }
    }, {
        key: 'closeLeadPopup',
        value: function closeLeadPopup() {
            this.setState({ showPopup: false });
        }

        //this function is linked video player iframe

    }, {
        key: 'scroll',
        value: function scroll(type) {
            var dataType = 'static_review_blck';
            var elmnt = document.getElementById(dataType);

            if (elmnt) {
                var outerDivWidth = elmnt.offsetWidth;
                var cardCount = elmnt.children && elmnt.children.length ? elmnt.children.length : 6;
                var childDivWidth = elmnt.scrollWidth ? elmnt.scrollWidth : 3000;
                var cardWidth = Math.ceil(childDivWidth / cardCount);

                var leftScroll = elmnt.scrollLeft;

                if (type == 'right') {
                    elmnt.scroll({ left: leftScroll + outerDivWidth, behavior: 'smooth' });
                    if (childDivWidth <= leftScroll + 2 * outerDivWidth) {
                        document.getElementById(dataType + '_leftArrow_hsptl').classList.add("d-none");
                    }
                    document.getElementById(dataType + '_RightArrow_hsptl').classList.remove("d-none");
                } else {
                    elmnt.scroll({ left: leftScroll - outerDivWidth, behavior: 'smooth' });
                    if (leftScroll - outerDivWidth <= 0) {
                        document.getElementById(dataType + '_RightArrow_hsptl').classList.add("d-none");
                    }
                    document.getElementById(dataType + '_leftArrow_hsptl').classList.remove("d-none");
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var self = this;

            var is_gold_selected = false;
            {
                this.props.selected_plan_data && Object.keys(this.props.selected_plan_data).length > 0 ? Object.entries(this.props.vipClubList.gold_plans).map(function (_ref) {
                    var _ref2 = _slicedToArray(_ref, 2),
                        key = _ref2[0],
                        value = _ref2[1];

                    if (parseInt(value.id) == parseInt(self.props.selected_plan_data.id)) {
                        is_gold_selected = true;
                    }
                }) : '';
            }

            return this.props.vipClubList && Object.keys(this.props.vipClubList).length > 0 && this.props.selected_plan_data && Object.keys(this.props.selected_plan_data).length > 0 ? _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.state.showPopup ? _react2.default.createElement(_vipClubPopup2.default, _extends({}, this.props, { closeLeadPopup: this.closeLeadPopup.bind(this), is_see_more: true })) : '',
                _react2.default.createElement(
                    'section',
                    { className: 'container container-top-margin sub-pdng-add d-none ' + (this.props.toggleTabType ? 'sub-pdng-rmv' : '') },
                    _react2.default.createElement(
                        'div',
                        { className: 'row main-row parent-section-row' },
                        _react2.default.createElement(_LeftBar2.default, null),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12 center-column' },
                            _react2.default.createElement(
                                'div',
                                { className: 'container-fluid ' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'vip-new-container font-analyze' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'vip-tabs-container' },
                                        this.props.selected_plan_data && Object.keys(this.props.selected_plan_data).length > 0 && this.props.is_vip_gold && this.props.vipClubList && this.props.vipClubList.gold_plans && this.props.vipClubList.gold_plans.length > 0 ? _react2.default.createElement(
                                            'p',
                                            { onClick: this.props.selectGoldPlan.bind(this, true), className: 'vp-sb-txt ' + (is_gold_selected ? 'vp-act' : '') },
                                            'Gold ',
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                '(\u20B9 ' + this.props.selected_plan_data.deal_price + ')'
                                            )
                                        ) : '',
                                        this.props.is_vip_gold && this.props.vipClubList && this.props.vipClubList.plans && this.props.vipClubList.plans.length > 0 ? Object.entries(this.props.vipClubList.plans).map(function (_ref3) {
                                            var _ref4 = _slicedToArray(_ref3, 2),
                                                key = _ref4[0],
                                                value = _ref4[1];

                                            return _react2.default.createElement(
                                                'p',
                                                { onClick: self.props.selectPlan.bind(self, value), key: key, className: 'vp-sb-txt ' + (value.id == self.props.selected_plan_id ? 'vp-act' : '') },
                                                value.plan_name,
                                                ' ',
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    '(\u20B9 ' + value.deal_price + ')'
                                                )
                                            );
                                        }) : ''
                                    ),
                                    this.props.is_pb ? _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement('img', { src: 'https://cdn.docprime.com/media/web/custom_images/Pb_banner_exclusive_-min.png', className: 'pb-gold-banner' })
                                    ) : '',
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'gold-white-bg-container mb-24' },
                                        _react2.default.createElement(
                                            'h4',
                                            { className: 'vip-card-heading' },
                                            'Gold Benefits'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'gold-benifi-cards-cont' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'gold-benifi-cards' },
                                                _react2.default.createElement('img', { src: "/assets" + '/img/gl1.png' }),
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'Exclusive prices on ',
                                                    _react2.default.createElement('br', null),
                                                    _react2.default.createElement(
                                                        'strong',
                                                        null,
                                                        '30,000 '
                                                    ),
                                                    ' Doctors'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'gold-benifi-cards' },
                                                _react2.default.createElement('img', { src: "/assets" + '/img/med-report.svg' }),
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'Big Discounts on ',
                                                    _react2.default.createElement('br', null),
                                                    _react2.default.createElement(
                                                        'strong',
                                                        null,
                                                        '5,000 '
                                                    ),
                                                    ' Labs'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'gold-benifi-cards' },
                                                _react2.default.createElement('img', { src: "/assets" + '/img/medlife-med.png' }),
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'Save ',
                                                    _react2.default.createElement(
                                                        'strong',
                                                        null,
                                                        '23% '
                                                    ),
                                                    ' ',
                                                    _react2.default.createElement('br', null),
                                                    ' on Medicines '
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'mb-24' },
                                        _react2.default.createElement(
                                            'h4',
                                            { className: 'vip-card-heading' },
                                            'Select Your Plan'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'vip-offer-cards p-12' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'gold-offer-cont' },
                                                _react2.default.createElement(
                                                    'h4',
                                                    { className: 'gold-ofr-hdng' },
                                                    'LIMITED PERIOD OFFER'
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'gold-list-container' },
                                                    this.props.vipClubList && this.props.vipClubList.gold_plans && this.props.vipClubList.gold_plans.length > 0 ? Object.entries(this.props.vipClubList.gold_plans).map(function (_ref5) {
                                                        var _ref6 = _slicedToArray(_ref5, 2),
                                                            key = _ref6[0],
                                                            value = _ref6[1];

                                                        return _react2.default.createElement(
                                                            'div',
                                                            { key: key, className: 'gold-ofr-lising ' + (value.id == self.props.selected_plan_id ? 'gold-select' : ''), onClick: self.props.selectGoldPlan.bind(self, value, false) },
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'gold-mnthplan' },
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    { className: 'mnth-plan-gld' },
                                                                    'Coverage: ',
                                                                    value.total_allowed_members,
                                                                    ' ',
                                                                    parseInt(value.total_allowed_members) > 1 ? 'Members' : 'Member'
                                                                ),
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    { className: 'gld-cvr-txt' },
                                                                    'Valid for ',
                                                                    value.tenure,
                                                                    ' Months ',
                                                                    value.is_selected ? _react2.default.createElement(
                                                                        'span',
                                                                        null,
                                                                        'POPULAR'
                                                                    ) : ''
                                                                )
                                                            ),
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'gold-price' },
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    { className: 'gld-prc' },
                                                                    _react2.default.createElement(
                                                                        'span',
                                                                        { className: 'gold-prc-cut' },
                                                                        '\u20B9',
                                                                        value.mrp
                                                                    ),
                                                                    ' \u20B9',
                                                                    value.deal_price
                                                                ),
                                                                _react2.default.createElement(
                                                                    'div',
                                                                    { className: 'gold-pln-slct-radio' },
                                                                    _react2.default.createElement('div', { className: 'gd-rdio-gray' }),
                                                                    _react2.default.createElement('img', { className: 'gd-rdio-chk', src: "/assets" + '/img/vip-chk.svg' })
                                                                )
                                                            )
                                                        );
                                                    }) : ''
                                                ),
                                                this.props.selected_plan_data && Object.keys(this.props.selected_plan_data).length > 0 && this.props.is_vip_gold && this.props.vipClubList && this.props.vipClubList.gold_plans && this.props.vipClubList.gold_plans.length > 0 && this.props.selected_plan_data.show_consultation_text ? _react2.default.createElement(
                                                    'p',
                                                    { className: 'gld-lst-foot-txt' },
                                                    'Includes Unlimited Online Consultation ',
                                                    _react2.default.createElement(
                                                        'span',
                                                        null,
                                                        '(General Physician)'
                                                    )
                                                ) : ''
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'gold-white-bg-container' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'gold-slider-container' },
                                            this.props.topHospitals && this.props.topHospitals.top_hospitals && this.props.topHospitals.top_hospitals.length > 0 && _react2.default.createElement(
                                                'div',
                                                { className: 'pakg-slider-container mb-10' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'pkgSliderHeading' },
                                                    _react2.default.createElement(
                                                        'h5',
                                                        { style: { fontSize: '14px' } },
                                                        'Key Hospital Partners'
                                                    ),
                                                    _react2.default.createElement(
                                                        'span',
                                                        { style: { fontSize: '13px' }, onClick: function onClick() {
                                                                return _this2.props.viewDocprimeNetworkClicked();
                                                            } },
                                                        'View Docprime Gold Network'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'pkgSliderContainer' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'pkgCardsList d-inline-flex sub-wd-cards home_top_hsptl_list' },
                                                        this.props.topHospitals.top_hospitals.map(function (data, key) {
                                                            return _react2.default.createElement(
                                                                'a',
                                                                { key: key + '_' + data.id, href: data.url ? data.url : data.id, className: 'pkgcustCards', onClick: function onClick(e) {
                                                                        e.preventDefault();
                                                                        _this2.props.hospitalCardClicked(true, data);
                                                                    } },
                                                                _react2.default.createElement(
                                                                    'div',
                                                                    { className: 'pkgcardImgCont' },
                                                                    data.logo && _react2.default.createElement('img', { style: { width: '82px' }, className: 'img-fluid', src: data.logo })
                                                                ),
                                                                data.vip_percentage ? _react2.default.createElement(
                                                                    'p',
                                                                    { className: 'gold-upto-offer' },
                                                                    'Upto ',
                                                                    parseInt(data.vip_percentage),
                                                                    '% OFF'
                                                                ) : ''
                                                            );
                                                        })
                                                    )
                                                )
                                            ),
                                            this.props.nearbyHospitals && this.props.nearbyHospitals.hospitals && this.props.nearbyHospitals.hospitals.length > 0 && _react2.default.createElement(
                                                'div',
                                                { className: 'pakg-slider-container mb-10' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'pkgSliderHeading' },
                                                    _react2.default.createElement(
                                                        'h5',
                                                        null,
                                                        'Hospitals Near You'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'pkgSliderContainer' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'pkgCardsList d-inline-flex sub-wd-cards home_top_hsptl_list' },
                                                        this.props.nearbyHospitals.hospitals.map(function (data, key) {
                                                            return _react2.default.createElement(
                                                                'a',
                                                                { key: key + '_' + data.id, href: data.url ? data.url : data.id, className: 'pkgcustCards', onClick: function onClick(e) {
                                                                        e.preventDefault();
                                                                        _this2.props.hospitalCardClicked(false, data);
                                                                    } },
                                                                _react2.default.createElement(
                                                                    'div',
                                                                    { className: 'pkgcardImgCont' },
                                                                    data.logo && _react2.default.createElement('img', { style: { width: '82px' }, className: 'img-fluid', src: data.logo })
                                                                ),
                                                                data.vip_percentage ? _react2.default.createElement(
                                                                    'p',
                                                                    { className: 'gold-upto-offer' },
                                                                    'Upto ',
                                                                    parseInt(data.vip_percentage),
                                                                    '% OFF'
                                                                ) : ''
                                                            );
                                                        })
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'pakg-slider-container mb-10' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'pkgSliderHeading' },
                                                    _react2.default.createElement(
                                                        'h5',
                                                        null,
                                                        'Top Labs'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'pkgSliderContainer' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'pkgCardsList d-inline-flex sub-wd-cards home_top_hsptl_list' },
                                                        _react2.default.createElement(
                                                            'a',
                                                            { className: 'pkgcustCards' },
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'pkgcardImgCont' },
                                                                _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/diagnostic/common_package_icons/Thyrocare_JthRqFf.png', style: { width: '82px' } })
                                                            ),
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'gold-upto-offer' },
                                                                'Upto 50% OFF'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'a',
                                                            { className: 'pkgcustCards' },
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'pkgcardImgCont' },
                                                                _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/lab/images/90x60/9be7c3c53ed30877c1433bf6d9f7d916_GjgCeik.jpg', style: { width: '82px' } })
                                                            ),
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'gold-upto-offer' },
                                                                'Upto 50% OFF'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'a',
                                                            { className: 'pkgcustCards' },
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'pkgcardImgCont' },
                                                                _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/diagnostic/common_package_icons/medlife_hDQxilJ.png', style: { width: '82px' } })
                                                            ),
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'gold-upto-offer' },
                                                                'Upto 70% OFF'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'a',
                                                            { className: 'pkgcustCards' },
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'pkgcardImgCont' },
                                                                _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/lab/images/90x60/2c25c272c61b8b646301741f1c980387.jpg', style: { width: '82px' } })
                                                            ),
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'gold-upto-offer' },
                                                                'Upto 20% OFF'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'a',
                                                            { className: 'pkgcustCards' },
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'pkgcardImgCont' },
                                                                _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/lab/images/90x60/45ae4aff8b1b9bf6d1dff2e86e97400a.jpg', style: { width: '82px' } })
                                                            ),
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'gold-upto-offer' },
                                                                'Upto 50% OFF'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'a',
                                                            { className: 'pkgcustCards' },
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'pkgcardImgCont' },
                                                                _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/lab/images/90x60/da7ccb6125dda7b3eba1c38d7bd9c0b9_Zp0O1EX.jpg', style: { width: '82px' } })
                                                            ),
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'gold-upto-offer' },
                                                                'Upto 70% OFF'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'a',
                                                            { className: 'pkgcustCards' },
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'pkgcardImgCont' },
                                                                _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/diagnostic/common_package_icons/healtiens.png', style: { width: '82px' } })
                                                            ),
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'gold-upto-offer' },
                                                                'Upto 18% OFF'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'a',
                                                            { className: 'pkgcustCards' },
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'pkgcardImgCont' },
                                                                _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/lab/images/90x60/c2748b2e22e2f8e3ed90cb3ca5ea29be_i3PE0Ya.jpg', style: { width: '82px' } })
                                                            ),
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'gold-upto-offer' },
                                                                'Upto 40% OFF'
                                                            )
                                                        )
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'vip-offer-cards mb-24' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'vip-free-doc vip-medlife-bg' },
                                                    _react2.default.createElement(
                                                        'h4',
                                                        { className: 'vip-card-heading' },
                                                        'Flat 23% Discounts on Medicines ',
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'medlife-col' },
                                                            _react2.default.createElement(
                                                                'span',
                                                                { className: 'powered-col text-left' },
                                                                'Powered By'
                                                            ),
                                                            _react2.default.createElement('img', { src: 'https://cdn.docprime.com/media/diagnostic/common_package_icons/medlife_hDQxilJ.png' })
                                                        ),
                                                        ' '
                                                    ),
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'vip-card-list' },
                                                        _react2.default.createElement('img', { src: "/assets" + '/img/vip-chk.svg' }),
                                                        'Exclusive for Gold members'
                                                    ),
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'vip-card-list' },
                                                        _react2.default.createElement('img', { src: "/assets" + '/img/vip-chk.svg' }),
                                                        'No minimum order values '
                                                    ),
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'vip-card-list' },
                                                        _react2.default.createElement('img', { src: "/assets" + '/img/vip-chk.svg' }),
                                                        'Unlimited usage with no maximum cap '
                                                    ),
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'text-left' },
                                                        _react2.default.createElement(
                                                            'a',
                                                            { className: 'tc-apply', onClick: this.props.toggle.bind(this, true) },
                                                            'T&C Apply'
                                                        )
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(_vipReviewSection2.default, null)
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'container-fluid gold-new-view' },
                    _react2.default.createElement(
                        'section',
                        { className: 'heading-section d-flex align-items-baseline flex-column justify-content-center' },
                        _react2.default.createElement(
                            'h3',
                            { className: 'd-inline-block' },
                            _react2.default.createElement(
                                'span',
                                { className: 'fw-500 pr-2 heading-name d-flex align-items-center' },
                                'Docprime',
                                _react2.default.createElement('img', { style: { marginTop: 4 }, src: "/assets" + "/img/gold-lg.png", width: '35' })
                            )
                        ),
                        _react2.default.createElement(
                            'h4',
                            null,
                            'Membership Plan For ',
                            _react2.default.createElement('br', null),
                            'Exclusive Discounts'
                        )
                    ),
                    _react2.default.createElement(
                        'section',
                        { className: 'gold-view-main-container d-none' },
                        this.props.vipClubList && this.props.vipClubList.gold_plans && this.props.vipClubList.gold_plans.length > 0 ? _react2.default.createElement(
                            'div',
                            { className: 'row m-0 pricing-row' },
                            _react2.default.createElement(
                                'h3',
                                { className: 'text-center' },
                                'Select your plan'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'row m-0 desktop-view-pricing-table', style: { width: '100%' } },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-sm-3' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'price-card-list' },
                                        _react2.default.createElement(
                                            'h5',
                                            null,
                                            '\xA0'
                                        ),
                                        _react2.default.createElement(
                                            'ul',
                                            null,
                                            _react2.default.createElement(
                                                'li',
                                                null,
                                                'Price'
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                null,
                                                'Coverage'
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                null,
                                                ' Validity'
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                null,
                                                'Unlimited ',
                                                _react2.default.createElement('br', null),
                                                ' Online Consultation'
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-sm-9' },
                                    Object.entries(this.props.vipClubList.gold_plans).map(function (_ref7) {
                                        var _ref8 = _slicedToArray(_ref7, 2),
                                            key = _ref8[0],
                                            value = _ref8[1];

                                        return _react2.default.createElement(
                                            'div',
                                            { className: (self.props.vipClubList.gold_plans && self.props.vipClubList.gold_plans.length < 4 ? 'col-4' : 'col-3') + ' pricing-card' },
                                            _react2.default.createElement(
                                                'h5',
                                                null,
                                                value.internal_name
                                            ),
                                            _react2.default.createElement(
                                                'ul',
                                                null,
                                                _react2.default.createElement(
                                                    'li',
                                                    { className: 'buy-price' },
                                                    '\u20B9 ',
                                                    value.deal_price,
                                                    _react2.default.createElement('br', null),
                                                    value.is_selected ? _react2.default.createElement(
                                                        'span',
                                                        { className: 'popular-col d-inline-block' },
                                                        'POPULAR'
                                                    ) : _react2.default.createElement(
                                                        'span',
                                                        { style: { opacity: 0 }, className: 'popular-col d-inline-block' },
                                                        '\xA0'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    value.total_allowed_members,
                                                    ' ',
                                                    parseInt(value.total_allowed_members) > 1 ? 'Members' : 'Member'
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    ' ',
                                                    value.tenure,
                                                    ' months'
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    { className: 'times-icon-list' },
                                                    _react2.default.createElement(
                                                        'span',
                                                        { style: { fontSize: 16, position: 'relative', top: 6, fontWeight: 500 } },
                                                        value.chat_plan_description ? value.chat_plan_description : '-'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'button',
                                                        { className: 'cstm-book-btn', onClick: self.props.selectGoldPlan.bind(self, value, false, true) },
                                                        'Buy'
                                                    )
                                                )
                                            )
                                        );
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'row m-0 mbl-view-pricing-table', style: { width: '100%' } },
                                Object.entries(this.props.vipClubList.gold_plans).map(function (_ref9) {
                                    var _ref10 = _slicedToArray(_ref9, 2),
                                        key = _ref10[0],
                                        value = _ref10[1];

                                    return _react2.default.createElement(
                                        'div',
                                        { className: (self.props.vipClubList.gold_plans && self.props.vipClubList.gold_plans.length < 4 ? 'col-4' : 'col-3') + ' price-table d-flex justify-content-center align-items-center flex-column ' + (value.id == self.props.selected_plan_id ? 'active' : ''), onClick: self.props.selectGoldPlan.bind(self, value, false, false) },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'shadow-box' },
                                            '\xA0'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'indicator-box d-flex justify-content-center align-items-center' },
                                            _react2.default.createElement('img', { width: '12', src: "/assets" + '/img/white-check.svg' })
                                        ),
                                        _react2.default.createElement(
                                            'h4',
                                            { className: 'm-0' },
                                            value.is_selected ? _react2.default.createElement(
                                                'span',
                                                { className: 'popular-col' },
                                                'popular'
                                            ) : _react2.default.createElement(
                                                'span',
                                                { style: { opacity: 0 }, className: 'popular-col d-inline-block' },
                                                '\xA0'
                                            ),
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                value.internal_name
                                            ),
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'price-text' },
                                                '\u20B9 ',
                                                value.deal_price
                                            )
                                        ),
                                        key == 0 ? _react2.default.createElement(
                                            _react2.default.Fragment,
                                            null,
                                            _react2.default.createElement(
                                                'h3',
                                                null,
                                                'COVERAGE (Members)'
                                            ),
                                            _react2.default.createElement(
                                                'h3',
                                                { style: { top: '13.3rem' } },
                                                'VALIDITY (Months)'
                                            ),
                                            _react2.default.createElement(
                                                'h3',
                                                { style: { top: '18.8rem' } },
                                                'UNLIMITED ONLINE CONSULTATION'
                                            )
                                        ) : '',
                                        _react2.default.createElement('hr', { style: { width: '100%', background: 'rgba(112, 112, 112, 0.2)' } }),
                                        _react2.default.createElement(
                                            'h4',
                                            { className: 'member-count' },
                                            value.total_allowed_members
                                        ),
                                        _react2.default.createElement('hr', { style: { width: '100%', background: 'rgba(112, 112, 112, 0.2)' } }),
                                        _react2.default.createElement(
                                            'h4',
                                            null,
                                            value.tenure
                                        ),
                                        _react2.default.createElement('hr', { style: { width: '100%', background: 'rgba(112, 112, 112, 0.2)' } }),
                                        _react2.default.createElement(
                                            'h4',
                                            null,
                                            value.chat_plan_description ? _react2.default.createElement(
                                                'span',
                                                null,
                                                value.chat_plan_description
                                            ) : _react2.default.createElement(
                                                'span',
                                                { className: 'dashRotate' },
                                                '|'
                                            )
                                        )
                                    );
                                })
                            )
                        ) : ''
                    ),
                    _react2.default.createElement(
                        'section',
                        { className: 'gold-view-main-container' },
                        _react2.default.createElement(
                            'h3',
                            { className: 'mt-10 gldhdng' },
                            'Gold plan'
                        ),
                        Object.entries(this.props.vipClubList.gold_plans).map(function (_ref11) {
                            var _ref12 = _slicedToArray(_ref11, 2),
                                key = _ref12[0],
                                value = _ref12[1];

                            return _react2.default.createElement(
                                'div',
                                { className: 'gold-pln-cont' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'goldPlanSec' },
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        ' ',
                                        'Coverage: ' + value.total_allowed_members + ' Member',
                                        ' '
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        ' ',
                                        'Valid for ' + value.tenure + ' Month'
                                    )
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'goldPrices' },
                                    '\u20B9',
                                    value.deal_price
                                )
                            );
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'card-block-widget' },
                        this.props.topHospitals && this.props.topHospitals.top_hospitals && this.props.topHospitals.top_hospitals.length > 0 ? _react2.default.createElement(_HomePageWidget2.default, {
                            heading: 'Key Hospital Partner',
                            list: this.props.topHospitals.top_hospitals,
                            topHospitals: true,
                            dataType: 'home_top_hsptl',
                            historyObj: this.props.history,
                            searchFunc: this.props.hospitalCardClicked,
                            goldNetwork: this.props.viewDocprimeNetworkClicked.bind(),
                            fromGold: true
                        }) : '',
                        this.props.selected_plan && Object.keys(this.props.selected_plan).length ? _react2.default.createElement(
                            'div',
                            { className: 'fixed p-0 v-btn  btn-lg horizontal bottom no-round text-lg buttons-addcart-container' },
                            this.props.is_booking_page !== '' && (this.props.is_booking_page == 'opd' || this.props.is_booking_page == 'lab') ? _react2.default.createElement(
                                'button',
                                { className: 'v-btn-primary book-btn-mrgn-adjust desk-cont-btn', onClick: this.goBack.bind(this) },
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'Continue Booking'
                                )
                            ) : this.props.is_from_organic ? _react2.default.createElement(
                                'button',
                                { className: 'desk-cont-btn', onClick: this.goBack.bind(this) },
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'Continue Booking'
                                )
                            ) : _react2.default.createElement(
                                'button',
                                { className: 'v-btn-primary book-btn-mrgn-adjust ', style: { background: '#1b97fd', borderColor: "#1b97fd" }, onClick: this.props.proceed.bind(this) },
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'Continue with ',
                                    this.props.selected_plan.internal_name + ' \u20B9 ' + this.props.selected_plan.deal_price
                                )
                            ),
                            _storage2.default.isAgent() ? _react2.default.createElement(
                                'button',
                                { className: 'add-shpng-cart-btn', style: { borderColor: "#1b97fd", color: "#1b97fd" }, onClick: this.sendPageUrl },
                                _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/wa-logo-sm.png' }),
                                'Send on Whatsapp'
                            ) : ''
                        ) : ''
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'card-block-widget pt-0' },
                        _react2.default.createElement(
                            'section',
                            { className: 'card-block-row' },
                            _react2.default.createElement(
                                'div',
                                { className: 'top-card-row' },
                                _react2.default.createElement(
                                    'h6',
                                    null,
                                    'Top Labs'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'card-slider-container' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'slider-card-column', id: 'cardBlock' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'slide-img-col d-flex justify-content-center align-item-center' },
                                        _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/diagnostic/common_package_icons/Thyrocare_JthRqFf.png', alt: 'Partners' })
                                    ),
                                    _react2.default.createElement(
                                        'h5',
                                        { className: 'off-txt', style: { position: 'relative', bottom: 0 } },
                                        ' Upto 50% OFF'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'slider-card-column', id: 'cardBlock' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'slide-img-col d-flex justify-content-center align-item-center' },
                                        _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/lab/images/90x60/9be7c3c53ed30877c1433bf6d9f7d916_GjgCeik.jpg', alt: 'Partners' })
                                    ),
                                    _react2.default.createElement(
                                        'h5',
                                        { className: 'off-txt', style: { position: 'relative', bottom: 0 } },
                                        ' Upto 50% OFF'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'slider-card-column', id: 'cardBlock' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'slide-img-col d-flex justify-content-center align-item-center' },
                                        _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/diagnostic/common_package_icons/medlife_hDQxilJ.png', alt: 'Partners' })
                                    ),
                                    _react2.default.createElement(
                                        'h5',
                                        { className: 'off-txt', style: { position: 'relative', bottom: 0 } },
                                        ' Upto 70% OFF'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'slider-card-column', id: 'cardBlock' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'slide-img-col d-flex justify-content-center align-item-center' },
                                        _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/lab/images/90x60/2c25c272c61b8b646301741f1c980387.jpg', alt: 'Partners' })
                                    ),
                                    _react2.default.createElement(
                                        'h5',
                                        { className: 'off-txt', style: { position: 'relative', bottom: 0 } },
                                        ' Upto 20% OFF'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'slider-card-column', id: 'cardBlock' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'slide-img-col d-flex justify-content-center align-item-center' },
                                        _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/lab/images/90x60/45ae4aff8b1b9bf6d1dff2e86e97400a.jpg', alt: 'Partners' })
                                    ),
                                    _react2.default.createElement(
                                        'h5',
                                        { className: 'off-txt', style: { position: 'relative', bottom: 0 } },
                                        ' Upto 50% OFF'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'slider-card-column', id: 'cardBlock' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'slide-img-col d-flex justify-content-center align-item-center' },
                                        _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/lab/images/90x60/da7ccb6125dda7b3eba1c38d7bd9c0b9_Zp0O1EX.jpg', alt: 'Partners' })
                                    ),
                                    _react2.default.createElement(
                                        'h5',
                                        { className: 'off-txt', style: { position: 'relative', bottom: 0 } },
                                        ' Upto 70% OFF'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'slider-card-column', id: 'cardBlock' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'slide-img-col d-flex justify-content-center align-item-center' },
                                        _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/diagnostic/common_package_icons/healtiens.png', alt: 'Partners' })
                                    ),
                                    _react2.default.createElement(
                                        'h5',
                                        { className: 'off-txt', style: { position: 'relative', bottom: 0 } },
                                        ' Upto 18% OFF'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'slider-card-column', id: 'cardBlock' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'slide-img-col d-flex justify-content-center align-item-center' },
                                        _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/lab/images/90x60/c2748b2e22e2f8e3ed90cb3ca5ea29be_i3PE0Ya.jpg', alt: 'Partners' })
                                    ),
                                    _react2.default.createElement(
                                        'h5',
                                        { className: 'off-txt', style: { position: 'relative', bottom: 0 } },
                                        ' Upto 40% OFF'
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'card-block-widget pt-0' },
                        _react2.default.createElement(
                            'section',
                            { className: 'card-block-row' },
                            _react2.default.createElement(
                                'h6',
                                { className: 'fw-500', style: { fontSize: 14, paddingBottom: 5 } },
                                'Our Happy Gold Customers'
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
                                            'KP'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'h3',
                                        null,
                                        'Kritika Pandey'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'text-center mb-2' },
                                        'Can you imagine having a discount on doctor\'s fee. Yeah, I was surprised too. But with Docprime Gold membership, i got heavy discounts on doctor fees, lab tests and full-body health packages. Definitely saved some good money here.'
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
                                            'AS'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'h3',
                                        null,
                                        'Akash Saini'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'text-center mb-2' },
                                        'I didn\u2019t believe in the Gold membership product at first. I was happy with discounts but was suspecting the network of hospitals & labs. I am happy that I took this chance and booked the membership. Docprime has partnered with most of the top hospitals and labs. I recently got a discount on Medanta\u2019s Doctor fee.'
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
                                        'Sonam Sinha'
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
                                { className: 'pkg-btnlft d-none', id: 'static_review_blck_RightArrow_hsptl', onClick: this.scroll.bind(this, 'left') },
                                _react2.default.createElement('img', { height: '12', src: "/assets" + "/img/color-chev.svg", alt: 'chev-left' })
                            ),
                            _react2.default.createElement(
                                'a',
                                { className: 'pkg-btnrgt', id: 'static_review_blck_leftArrow_hsptl', onClick: this.scroll.bind(this, 'right') },
                                _react2.default.createElement('img', { height: '12', src: "/assets" + "/img/color-chev.svg", alt: 'chev-right' })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'section',
                        { className: 'faq-row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'gold-acrd-main' },
                            _react2.default.createElement(
                                'div',
                                { className: 'acdn-title d-flex align-items-center justify-content-between', onClick: this.ButtonHandler.bind(this, 0) },
                                _react2.default.createElement(
                                    'h3',
                                    { className: 'fw-700', style: { fontSize: '15px' } },
                                    'Frequently asked questions'
                                ),
                                _react2.default.createElement('img', { className: ' ' + (this.state.tabsValue.indexOf(0) > -1 ? '' : 'acdn-up'), src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'inneracord-container ' + (this.state.tabsValue.indexOf(0) > -1 ? 'd-none' : '') },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'gold-sub-acrd', onClick: this.ButtonHandler.bind(this, 1) },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'acdn-title' },
                                        _react2.default.createElement(
                                            'h2',
                                            { className: 'fw-500' },
                                            'What are the benefits of being a gold member? '
                                        ),
                                        _react2.default.createElement('img', { className: 'acdn-arrow  ' + (this.state.tabsValue.indexOf(1) > -1 ? '' : 'acdn-arrow-up'), src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'gold-sub-acrd-content ' + (this.state.tabsValue.indexOf(1) > -1 ? 'd-none' : '') },
                                        'You can avail exclusive discounts on Doctor and Lab test appointments for the covered members in the plan. The membership will last till the duration of the plan.'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'gold-sub-acrd', onClick: this.ButtonHandler.bind(this, 3) },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'acdn-title' },
                                        _react2.default.createElement(
                                            'h2',
                                            { className: 'fw-500' },
                                            'Whom can I add members under the plan? '
                                        ),
                                        _react2.default.createElement('img', { className: 'acdn-arrow  ' + (this.state.tabsValue.indexOf(3) > -1 ? '' : 'acdn-arrow-up'), src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'gold-sub-acrd-content ' + (this.state.tabsValue.indexOf(3) > -1 ? 'd-none' : '') },
                                        'You can add your family, extended family or friends under the plan'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'gold-sub-acrd', onClick: this.ButtonHandler.bind(this, 5) },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'acdn-title' },
                                        _react2.default.createElement(
                                            'h2',
                                            { className: 'fw-500' },
                                            'Is the fee recurring? '
                                        ),
                                        _react2.default.createElement('img', { className: 'acdn-arrow  ' + (this.state.tabsValue.indexOf(5) > -1 ? '' : 'acdn-arrow-up'), src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'gold-sub-acrd-content ' + (this.state.tabsValue.indexOf(5) > -1 ? 'd-none' : '') },
                                        'It is a one-time fee plan and the fee is not recurring. Post the expiry of the plan, you can renew or buy another plan'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'gold-sub-acrd', onClick: this.ButtonHandler.bind(this, 6) },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'acdn-title' },
                                        _react2.default.createElement(
                                            'h2',
                                            { className: 'fw-500' },
                                            'Once I become a gold member, will I get discounts on all Doctor and Lab appointments? '
                                        ),
                                        _react2.default.createElement('img', { className: 'acdn-arrow  ' + (this.state.tabsValue.indexOf(6) > -1 ? '' : 'acdn-arrow-up'), src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'gold-sub-acrd-content ' + (this.state.tabsValue.indexOf(6) > -1 ? 'd-none' : '') },
                                        'You can get discounts on all the labs and hospitals which are part of the gold network. Please note that the Gold network is dynamic in nature and might change from time to time. To view gold network, ',
                                        _react2.default.createElement(
                                            'span',
                                            { style: { color: '#f78631', cursor: 'pointer' }, onClick: function onClick() {
                                                    return _this2.props.viewDocprimeNetworkClicked();
                                                } },
                                            'click here'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'gold-sub-acrd', onClick: this.ButtonHandler.bind(this, 7) },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'acdn-title' },
                                        _react2.default.createElement(
                                            'h2',
                                            { className: 'fw-500' },
                                            'Can I use the gold plan benefit against any profile from my account?  '
                                        ),
                                        _react2.default.createElement('img', { className: 'acdn-arrow  ' + (this.state.tabsValue.indexOf(7) > -1 ? '' : 'acdn-arrow-up'), src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'gold-sub-acrd-content ' + (this.state.tabsValue.indexOf(7) > -1 ? 'd-none' : '') },
                                        'Different gold plans are valid for different number of users.  You can avail the benefits for only the users added against the purchased plan. While booking the new appointment, the patient profile should be one of the profiles added against the Gold plan to avail the benefit'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'gold-sub-acrd', onClick: this.ButtonHandler.bind(this, 8) },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'acdn-title' },
                                        _react2.default.createElement(
                                            'h2',
                                            { className: 'fw-500' },
                                            'What is the maximum number of appointments that I can make with the gold membership? '
                                        ),
                                        _react2.default.createElement('img', { className: 'acdn-arrow  ' + (this.state.tabsValue.indexOf(8) > -1 ? '' : 'acdn-arrow-up'), src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'gold-sub-acrd-content ' + (this.state.tabsValue.indexOf(8) > -1 ? 'd-none' : '') },
                                        'Once you become a gold member, you will be able to avail discounts on all labs and hospitals which are part of the Gold network. There is no upper cap on the number of discounted appointments if all are made within the Gold network'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'gold-sub-acrd', onClick: this.ButtonHandler.bind(this, 9) },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'acdn-title' },
                                        _react2.default.createElement(
                                            'h2',
                                            { className: 'fw-500' },
                                            'Can I use gold membership to Pay at Clinic ? '
                                        ),
                                        _react2.default.createElement('img', { className: 'acdn-arrow  ' + (this.state.tabsValue.indexOf(9) > -1 ? '' : 'acdn-arrow-up'), src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'gold-sub-acrd-content ' + (this.state.tabsValue.indexOf(9) > -1 ? 'd-none' : '') },
                                        'No, you can enjoy the special discounts through gold membership only on prepaid appointments booked under Docprime\u2019s gold network'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'gold-sub-acrd', onClick: this.ButtonHandler.bind(this, 10) },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'acdn-title' },
                                        _react2.default.createElement(
                                            'h2',
                                            { className: 'fw-500' },
                                            'Can I use Docprime\u2019s wallet promotional balance to buy gold plan? '
                                        ),
                                        _react2.default.createElement('img', { className: 'acdn-arrow  ' + (this.state.tabsValue.indexOf(10) > -1 ? '' : 'acdn-arrow-up'), src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'gold-sub-acrd-content ' + (this.state.tabsValue.indexOf(10) > -1 ? 'd-none' : '') },
                                        'No, you can\u2019t pay for membership fee using Docprime\u2019s wallet promotional balance'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'gold-sub-acrd', onClick: this.ButtonHandler.bind(this, 12) },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'acdn-title' },
                                        _react2.default.createElement(
                                            'h2',
                                            { className: 'fw-500' },
                                            'Will I get any tax benefit? '
                                        ),
                                        _react2.default.createElement('img', { className: 'acdn-arrow  ' + (this.state.tabsValue.indexOf(12) > -1 ? '' : 'acdn-arrow-up'), src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'gold-sub-acrd-content ' + (this.state.tabsValue.indexOf(12) > -1 ? 'd-none' : '') },
                                        'No, there is no tax benefit on Gold plans purchase'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'gold-sub-acrd', onClick: this.ButtonHandler.bind(this, 13) },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'acdn-title' },
                                        _react2.default.createElement(
                                            'h2',
                                            { className: 'fw-500' },
                                            'Is Gold an insurance plan? '
                                        ),
                                        _react2.default.createElement('img', { className: 'acdn-arrow  ' + (this.state.tabsValue.indexOf(13) > -1 ? '' : 'acdn-arrow-up'), src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'gold-sub-acrd-content ' + (this.state.tabsValue.indexOf(13) > -1 ? 'd-none' : '') },
                                        'No, Gold plans are not insurance products. It is membership to get discounts on doctor and lab appointments that will help you reduce your healthcare expenses.'
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'gold-trms-cnd gold-tnc', onClick: function onClick() {
                                return _this2.props.history.push('/terms');
                            } },
                        'Terms of Use'
                    )
                )
            ) : _react2.default.createElement('div', null);
        }
    }]);

    return VipGoldView;
}(_react2.default.Component);

exports.default = VipGoldView;

/***/ }),

/***/ "./dev/js/components/vipClub/vipPlanView.js":
/*!**************************************************!*\
  !*** ./dev/js/components/vipClub/vipPlanView.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _LeftBar = __webpack_require__(/*! ../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _config = __webpack_require__(/*! ../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _HelmetTags = __webpack_require__(/*! ../commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _gtm = __webpack_require__(/*! ../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _vipClubPopup = __webpack_require__(/*! ./vipClubPopup.js */ "./dev/js/components/vipClub/vipClubPopup.js");

var _vipClubPopup2 = _interopRequireDefault(_vipClubPopup);

var _staticDisclaimer = __webpack_require__(/*! ../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

var _carouselView = __webpack_require__(/*! ../opd/searchResults/carouselView.js */ "./dev/js/components/opd/searchResults/carouselView.js");

var _carouselView2 = _interopRequireDefault(_carouselView);

var _vipReviewSection = __webpack_require__(/*! ./vipReviewSection.js */ "./dev/js/components/vipClub/vipReviewSection.js");

var _vipReviewSection2 = _interopRequireDefault(_vipReviewSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var VipPlanView = function (_React$Component) {
    _inherits(VipPlanView, _React$Component);

    function VipPlanView(props) {
        _classCallCheck(this, VipPlanView);

        var _this = _possibleConstructorReturn(this, (VipPlanView.__proto__ || Object.getPrototypeOf(VipPlanView)).call(this, props));

        _this.state = {
            // selected_plan_data: this.props.selected_plan ? this.props.selected_plan : '',
        };
        return _this;
    }

    _createClass(VipPlanView, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var self = this;
            var is_gold_selected = false;
            var selected_gold_plan_price = void 0;
            {
                this.props.selected_plan_data && Object.keys(this.props.selected_plan_data).length > 0 && this.props.vipClubList.gold_plans && this.props.vipClubList.gold_plans.length ? Object.entries(this.props.vipClubList.gold_plans).map(function (_ref) {
                    var _ref2 = _slicedToArray(_ref, 2),
                        key = _ref2[0],
                        value = _ref2[1];

                    if (value.is_selected) {
                        selected_gold_plan_price = value.deal_price;
                    }
                    if (parseInt(value.id) == parseInt(self.props.selected_plan_data.id)) {
                        is_gold_selected = true;
                    }
                }) : '';
            }

            return this.props.vipClubList && Object.keys(this.props.vipClubList).length > 0 && this.props.selected_plan_data && Object.keys(this.props.selected_plan_data).length > 0 ? _react2.default.createElement(
                'section',
                { className: 'container container-top-margin  ' + (this.props.toggleTabType ? '' : '') },
                _react2.default.createElement(
                    'div',
                    { className: 'row main-row parent-section-row' },
                    _react2.default.createElement(_LeftBar2.default, null),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 center-column' },
                        _react2.default.createElement(
                            'div',
                            { className: 'container-fluid ' },
                            _react2.default.createElement(
                                'div',
                                { className: 'vip-new-container font-analyze' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'vip-tabs-container' },
                                    this.props.selected_plan_data && Object.keys(this.props.selected_plan_data).length > 0 && this.props.is_vip_gold && this.props.vipClubList && this.props.vipClubList.gold_plans && this.props.vipClubList.gold_plans.length > 0 ? _react2.default.createElement(
                                        'p',
                                        { onClick: this.props.selectGoldPlan.bind(this, true), className: 'vp-sb-txt ' + (is_gold_selected ? 'vp-act' : '') },
                                        'Gold',
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            ' ',
                                            '(\u20B9 ' + selected_gold_plan_price + ')'
                                        )
                                    ) : '',
                                    this.props.vipClubList && this.props.vipClubList.plans && this.props.vipClubList.plans.length > 0 ? Object.entries(this.props.vipClubList.plans).map(function (_ref3) {
                                        var _ref4 = _slicedToArray(_ref3, 2),
                                            key = _ref4[0],
                                            value = _ref4[1];

                                        return _react2.default.createElement(
                                            'p',
                                            { onClick: self.props.selectPlan.bind(self, value), key: key, className: 'vp-sb-txt ' + (value.id == self.props.selected_plan_id ? 'vp-act' : '') },
                                            value.plan_name,
                                            ' ',
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                '(\u20B9 ' + value.deal_price + ')'
                                            )
                                        );
                                    }) : ''
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'mb-24' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'vip-cvpmem-main' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'vip-cvpmem' },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'vip-vld' },
                                                _react2.default.createElement('img', { src: "/assets" + '/img/vipcal.svg' }),
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    'Validity: ',
                                                    _react2.default.createElement(
                                                        'b',
                                                        null,
                                                        '365 Days'
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'vip-vld' },
                                                _react2.default.createElement('img', { src: "/assets" + '/img/vipuser.svg' }),
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    'Covers upto: ',
                                                    _react2.default.createElement(
                                                        'b',
                                                        null,
                                                        '4 Members'
                                                    )
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'cpm-lst' },
                                        _react2.default.createElement(
                                            'ul',
                                            { className: 'lst-vpp' },
                                            Object.keys(this.props.selected_plan_data.worth).length > 0 && this.props.selected_plan_data.worth.doctor_consult_amount != '' ? _react2.default.createElement(
                                                'li',
                                                null,
                                                'In-Clinic Consults: \u20B9',
                                                this.props.selected_plan_data.worth.doctor_consult_amount,
                                                '  '
                                            ) : '',
                                            Object.keys(this.props.selected_plan_data.worth).length > 0 && this.props.selected_plan_data.worth.health_checkups_amount != '' ? _react2.default.createElement(
                                                'li',
                                                null,
                                                'Health Checkups: \u20B9',
                                                this.props.selected_plan_data.worth.health_checkups_amount
                                            ) : ''
                                        ),
                                        _react2.default.createElement(
                                            'ul',
                                            { className: 'lst-vpp' },
                                            Object.keys(this.props.selected_plan_data.worth).length > 0 && this.props.selected_plan_data.worth.online_chat_amount != '' ? _react2.default.createElement(
                                                'li',
                                                null,
                                                'Unlimited Online Consult: \u20B9',
                                                this.props.selected_plan_data.worth.online_chat_amount
                                            ) : '',
                                            Object.keys(this.props.selected_plan_data.worth).length > 0 && this.props.selected_plan_data.worth.tax_rebate != '' ? _react2.default.createElement(
                                                'li',
                                                null,
                                                'Tax Benefit (80D): \u20B9',
                                                this.props.selected_plan_data.worth.tax_rebate
                                            ) : ''
                                        )
                                    )
                                ),
                                this.props.selected_plan_data && this.props.selected_plan_data.worth && Object.keys(this.props.selected_plan_data.worth).length > 0 && this.props.selected_plan_data.worth.doctor_consult_amount != '' ? _react2.default.createElement(
                                    'div',
                                    { className: 'vip-offer-cards mb-24' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'vip-free-doc vip-docbg' },
                                        _react2.default.createElement(
                                            'h4',
                                            { className: 'vip-card-heading' },
                                            'In-Clinic Doctor Consultations'
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'vip-card-list' },
                                            _react2.default.createElement('img', { src: "/assets" + '/img/vip-chk.svg' }),
                                            '30,000 + associated doctors '
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'vip-card-list' },
                                            _react2.default.createElement('img', { src: "/assets" + '/img/vip-chk.svg' }),
                                            'All specializations included '
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'vip-card-tag' },
                                        'Worth \u20B9 ',
                                        this.props.selected_plan_data.worth.doctor_consult_amount,
                                        '  '
                                    )
                                ) : '',
                                this.props.topHospitals && this.props.topHospitals.top_hospitals && this.props.topHospitals.top_hospitals.length > 0 && _react2.default.createElement(
                                    'div',
                                    { className: 'pakg-slider-container mb-24' },
                                    _react2.default.createElement(_carouselView2.default, { topHeading: 'Key Hospital Partners', dataList: this.props.topHospitals.top_hospitals, dataType: 'top_vip_Hospitals', carouselCardClicked: function carouselCardClicked(data, top) {
                                            return _this2.props.hospitalCardClicked(data, top);
                                        }, topHospital: true, extraHeading: 'View Docprime Network', navigateTo: function navigateTo() {
                                            return _this2.props.viewDocprimeNetworkClicked(is_gold_selected);
                                        }, viewAll: true })
                                ),
                                this.props.nearbyHospitals && this.props.nearbyHospitals.hospitals && this.props.nearbyHospitals.hospitals.length > 0 && _react2.default.createElement(
                                    'div',
                                    { className: 'pakg-slider-container mb-24' },
                                    _react2.default.createElement(_carouselView2.default, { topHeading: 'Hospitals Near You', dataList: this.props.nearbyHospitals.hospitals, dataType: 'nearby_vip_Hospitals', carouselCardClicked: function carouselCardClicked(top, data) {
                                            return _this2.props.hospitalCardClicked(top, data);
                                        } })
                                ),
                                this.props.selected_plan_data && this.props.selected_plan_data.worth && Object.keys(this.props.selected_plan_data.worth).length > 0 && this.props.selected_plan_data.worth.online_chat_amount != '' ? _react2.default.createElement(
                                    'div',
                                    { className: 'vip-offer-cards mb-24' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'vip-free-doc vip-mem-bg' },
                                        _react2.default.createElement(
                                            'h4',
                                            { className: 'vip-card-heading' },
                                            'Docprime Care Membership  '
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'vip-card-list' },
                                            _react2.default.createElement('img', { src: "/assets" + '/img/vip-chk.svg' }),
                                            'Unlimited online consult ',
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                ' (General Physician)'
                                            ),
                                            ' '
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'vip-card-list' },
                                            _react2.default.createElement('img', { src: "/assets" + '/img/vip-chk.svg' }),
                                            'Priority Queue '
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'vip-card-tag' },
                                        'Worth \u20B9',
                                        this.props.selected_plan_data.worth.online_chat_amount,
                                        '  '
                                    )
                                ) : '',
                                this.props.selected_plan_data && this.props.selected_plan_data.worth && Object.keys(this.props.selected_plan_data.worth).length > 0 && this.props.selected_plan_data.worth.health_checkups_amount != '' ? _react2.default.createElement(
                                    'div',
                                    { className: 'vip-offer-cards mb-24' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'vip-free-doc vip-chek-bg' },
                                        _react2.default.createElement(
                                            'h4',
                                            { className: 'vip-card-heading' },
                                            'Full Body Preventive Health Checkup '
                                        ),
                                        this.props.selected_plan_data && this.props.selected_plan_data.worth && Object.keys(this.props.selected_plan_data.worth).length > 0 && this.props.selected_plan_data.worth.members_covered_in_package ? _react2.default.createElement(
                                            'p',
                                            { className: 'vip-card-list' },
                                            _react2.default.createElement('img', { src: "/assets" + '/img/vip-chk.svg' }),
                                            this.props.selected_plan_data.worth.members_covered_in_package,
                                            ' ',
                                            this.props.selected_plan_data.worth.members_covered_in_package == 1 ? 'member' : 'members',
                                            ' covered'
                                        ) : '',
                                        this.props.selected_plan_data && this.props.selected_plan_data.worth && Object.keys(this.props.selected_plan_data.worth).length > 0 && this.props.selected_plan_data.worth.total_test_covered_in_package ? _react2.default.createElement(
                                            'p',
                                            { className: 'vip-card-list' },
                                            _react2.default.createElement('img', { src: "/assets" + '/img/vip-chk.svg' }),
                                            this.props.selected_plan_data.worth.total_test_covered_in_package,
                                            ' tests included '
                                        ) : ''
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'vip-card-tag' },
                                        'Worth \u20B9',
                                        this.props.selected_plan_data.worth.health_checkups_amount,
                                        '  '
                                    )
                                ) : '',
                                _react2.default.createElement(
                                    'div',
                                    { className: 'vip-ins-act-cont mb-24' },
                                    _react2.default.createElement(
                                        'h4',
                                        { className: 'ins-dcnt-hdng' },
                                        _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + "/img/vip-ins-act.png" }),
                                        'Instant Activation'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'ins-dc-lstng' },
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'vip-card-list' },
                                            _react2.default.createElement('img', { src: "/assets" + '/img/vip-chk.svg' }),
                                            'Pre-existing diseases covered'
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'vip-card-list' },
                                            _react2.default.createElement('img', { src: "/assets" + '/img/vip-chk.svg' }),
                                            'No medical tests required for plan activation '
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'vip-offer-cards mb-24' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'vip-free-doc vip-bkdiscount-bg' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'bkdiscount-text' },
                                            _react2.default.createElement(
                                                'h4',
                                                { className: 'vip-card-heading' },
                                                'Flat 25% discount on lab bookings '
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Maximum discount of \u20B91000 per booking'
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'vip-offer-cards mb-24' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'vip-free-doc vip-medlife-bg' },
                                        _react2.default.createElement(
                                            'h4',
                                            { className: 'vip-card-heading' },
                                            'Flat 23% Discounts on Medicines ',
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'medlife-col' },
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'powered-col text-left' },
                                                    'Powered By'
                                                ),
                                                _react2.default.createElement('img', { src: 'https://cdn.docprime.com/media/diagnostic/common_package_icons/medlife_hDQxilJ.png' })
                                            ),
                                            ' '
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'vip-card-list' },
                                            _react2.default.createElement('img', { src: "/assets" + '/img/vip-chk.svg' }),
                                            'Exclusive for Gold members'
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'vip-card-list' },
                                            _react2.default.createElement('img', { src: "/assets" + '/img/vip-chk.svg' }),
                                            'No minimum order values '
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'vip-card-list' },
                                            _react2.default.createElement('img', { src: "/assets" + '/img/vip-chk.svg' }),
                                            'Unlimited usage with no maximum cap '
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'text-left' },
                                            _react2.default.createElement(
                                                'a',
                                                { className: 'tc-apply', onClick: this.props.toggle.bind(this, true) },
                                                'T&C Apply'
                                            )
                                        )
                                    )
                                ),
                                this.props.selected_plan_data && this.props.selected_plan_data.worth && Object.keys(this.props.selected_plan_data.worth).length > 0 && this.props.selected_plan_data.worth.tax_rebate != '' ? _react2.default.createElement(
                                    'div',
                                    { className: 'vip-offer-cards mb-24' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'vip-free-doc vip-benft-bg' },
                                        _react2.default.createElement(
                                            'h4',
                                            { className: 'vip-card-heading' },
                                            'Tax Benefits '
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'vip-card-list' },
                                            _react2.default.createElement('img', { src: "/assets" + '/img/vip-chk.svg' }),
                                            'Cover under section 80D'
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'vip-card-list' },
                                            _react2.default.createElement('img', { src: "/assets" + '/img/vip-chk.svg' }),
                                            'Tax proof certificate will be provided '
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'vip-card-tag' },
                                        'Worth \u20B9',
                                        this.props.selected_plan_data.worth.tax_rebate,
                                        '  '
                                    )
                                ) : '',
                                this.props.selected_plan_data && this.props.selected_plan_data.you_get && Object.keys(this.props.selected_plan_data.you_get).length > 0 && this.props.selected_plan_data.you_pay && Object.keys(this.props.selected_plan_data.you_pay).length > 0 ? _react2.default.createElement(
                                    'div',
                                    { className: 'vip-price-summery mb-24' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'vip-prc-summry-hdng' },
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'Price Summary'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'vip-prc-cards-cont' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'vip-prc-cards' },
                                            _react2.default.createElement(
                                                'h5',
                                                { className: 'vip-prc-hdng' },
                                                'You Get'
                                            ),
                                            _react2.default.createElement(
                                                'ul',
                                                { className: 'vip-prc-lst' },
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        'In-Clinic Consult: ',
                                                        _react2.default.createElement(
                                                            'span',
                                                            null,
                                                            '\u20B9',
                                                            this.props.selected_plan_data.you_get.doctor_consult_amount
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        'Online Consult: ',
                                                        _react2.default.createElement(
                                                            'span',
                                                            null,
                                                            '\u20B9',
                                                            this.props.selected_plan_data.you_get.online_chat_amount
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        'Health Checkup: ',
                                                        _react2.default.createElement(
                                                            'span',
                                                            null,
                                                            '\u20B9',
                                                            this.props.selected_plan_data.you_get.health_checkups_amount
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    { className: 'ttl-benft' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        'Benefits Worth: ',
                                                        _react2.default.createElement(
                                                            'span',
                                                            null,
                                                            '\u20B9',
                                                            this.props.selected_plan_data.you_get.effective_price
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'vip-prc-cards' },
                                            _react2.default.createElement(
                                                'h5',
                                                { className: 'vip-prc-hdng' },
                                                'You Pay'
                                            ),
                                            _react2.default.createElement(
                                                'ul',
                                                { className: 'vip-prc-lst' },
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        'Plan Price: ',
                                                        _react2.default.createElement(
                                                            'span',
                                                            null,
                                                            '\u20B9',
                                                            this.props.selected_plan_data.you_pay.mrp
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        'Offer Price: ',
                                                        _react2.default.createElement(
                                                            'span',
                                                            null,
                                                            '\u20B9',
                                                            this.props.selected_plan_data.you_pay.deal_price
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        'Tax Rebate (80D): ',
                                                        _react2.default.createElement(
                                                            'span',
                                                            null,
                                                            '\u20B9',
                                                            this.props.selected_plan_data.you_pay.tax_rebate
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    { className: 'effective-prc' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        'Effective Price: ',
                                                        _react2.default.createElement(
                                                            'span',
                                                            null,
                                                            '\u20B9',
                                                            this.props.selected_plan_data.you_pay.effective_price
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'vip-no-cost' },
                                        _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + "/img/coinico.png" }),
                                        ' No Cost EMI Starts @ ',
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            '  \u20B9',
                                            Math.round(parseInt(this.props.selected_plan_data.deal_price) / 12)
                                        )
                                    )
                                ) : '',
                                _react2.default.createElement(_vipReviewSection2.default, null),
                                this.props.selected_plan_data && this.props.selected_plan_data.content && Object.keys(this.props.selected_plan_data.content).length > 0 && this.props.selected_plan_data.content.salient_features && this.props.selected_plan_data.content.salient_features.length > 0 ? _react2.default.createElement(
                                    'div',
                                    { className: 'vip-note-lst' },
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'A few things to note... '
                                    ),
                                    _react2.default.createElement(
                                        'ul',
                                        null,
                                        Object.entries(this.props.selected_plan_data.content.salient_features).map(function (_ref5) {
                                            var _ref6 = _slicedToArray(_ref5, 2),
                                                key = _ref6[0],
                                                value = _ref6[1];

                                            return _react2.default.createElement(
                                                'li',
                                                { key: key },
                                                value
                                            );
                                        })
                                    )
                                ) : ''
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'button',
                    { className: 'vip-foot-btn', onClick: this.props.proceed.bind(this) },
                    _react2.default.createElement(
                        'p',
                        null,
                        'Buy Now @ \u20B9',
                        this.props.selected_plan_data.deal_price
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'vipbtn-sub-txt' },
                        'Inclusive of GST'
                    )
                )
            ) : _react2.default.createElement('div', null);
        }
    }]);

    return VipPlanView;
}(_react2.default.Component);

exports.default = VipPlanView;

/***/ }),

/***/ "./dev/js/components/vipClub/vipReviewSection.js":
/*!*******************************************************!*\
  !*** ./dev/js/components/vipClub/vipReviewSection.js ***!
  \*******************************************************/
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
        { className: "pakg-slider-container mb-24" },
        _react2.default.createElement(
            "div",
            { className: "pkgSliderHeading" },
            _react2.default.createElement(
                "h5",
                null,
                "Our Happy Gold Customers"
            )
        ),
        _react2.default.createElement(
            "div",
            { className: "pkgSliderContainer" },
            _react2.default.createElement(
                "div",
                { className: "pkgCardsList d-flex sub-wd-cards top_pkgCat" },
                _react2.default.createElement(
                    "div",
                    { className: "pkgcustCards vip-cmmnt-card" },
                    _react2.default.createElement(
                        "div",
                        { className: "vip-sld-content" },
                        _react2.default.createElement("img", { src: "/assets" + '/img/nwdpsmile.png' }),
                        _react2.default.createElement(
                            "h4",
                            null,
                            "Kritika Pandey"
                        ),
                        _react2.default.createElement(
                            "p",
                            null,
                            " Can you imagine having a discount on doctor's fee. Yeah, I was surprised too. But with Docprime Gold membership, i got heavy discounts on doctor fees, lab tests and full-body health packages. Definitely saved some good money here."
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "pkgcustCards vip-cmmnt-card" },
                    _react2.default.createElement(
                        "div",
                        { className: "vip-sld-content" },
                        _react2.default.createElement("img", { src: "/assets" + '/img/nwdpsmile.png' }),
                        _react2.default.createElement(
                            "h4",
                            null,
                            "Purnima Singla"
                        ),
                        _react2.default.createElement(
                            "p",
                            null,
                            "I have booked 3 full body health packages for my family. After receiving the report, I got a call from a doctor who explained each and every element of the report to me and my family. He even prescribed some medicines to my mother and directed us to take some multivitamins. I truly loved the service."
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "pkgcustCards vip-cmmnt-card" },
                    _react2.default.createElement(
                        "div",
                        { className: "vip-sld-content" },
                        _react2.default.createElement("img", { src: "/assets" + '/img/nwdpsmile.png' }),
                        _react2.default.createElement(
                            "h4",
                            null,
                            "Akash Saini"
                        ),
                        _react2.default.createElement(
                            "p",
                            null,
                            "I didn\u2019t believe in the Gold membership product at first. I was happy with discounts but was suspecting the network of hospitals & labs. I am happy that I took this chance and booked the membership. Docprime has partnered with most of the top hospitals and labs. I recently got a discount on Medanta\u2019s Doctor fee."
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "pkgcustCards vip-cmmnt-card" },
                    _react2.default.createElement(
                        "div",
                        { className: "vip-sld-content" },
                        _react2.default.createElement("img", { src: "/assets" + '/img/nwdpsmile.png' }),
                        _react2.default.createElement(
                            "h4",
                            null,
                            "Sonam Sinha"
                        ),
                        _react2.default.createElement(
                            "p",
                            null,
                            "I booked preventive health packages for my parents living in Delhi. I am so glad that I can take care of their health by sitting in Bangalore. They collected the blood sample from my parent's home and sent the report on email which was reviewed by their Doctor. He prescribed some medicines to my parents and I got 23% off on medicine online delivery. Had an overall amazing experience!"
                        )
                    )
                )
            )
        )
    );
};

/***/ }),

/***/ "./dev/js/components/vipClub/vipTncView.js":
/*!*************************************************!*\
  !*** ./dev/js/components/vipClub/vipTncView.js ***!
  \*************************************************/
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
        props = _ref.props,
        is_insurance_applicable = _ref.is_insurance_applicable;

    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement("div", { className: "cancel-overlay cancel-overlay-zindex", onClick: toggle }),
        _react2.default.createElement(
            "div",
            { className: "widget cancel-appointment-div cancel-popup no-overflow" },
            _react2.default.createElement(
                "div",
                { className: "widget-header tnc-header text-center action-screen-header" },
                _react2.default.createElement(
                    "p",
                    { className: "fw-500 cancel-appointment-head" },
                    "Terms & Conditions"
                ),
                _react2.default.createElement("img", { src: "/assets" + "/img/icons/close.png", className: "close-modal", onClick: toggle }),
                _react2.default.createElement("hr", null)
            ),
            _react2.default.createElement(
                "div",
                { className: "tnc-column" },
                _react2.default.createElement(
                    "h3",
                    { className: "mb-24" },
                    _react2.default.createElement(
                        "strong",
                        null,
                        "Medlife TnC"
                    )
                ),
                _react2.default.createElement(
                    "h5",
                    null,
                    _react2.default.createElement(
                        "strong",
                        null,
                        "Offer Terms:"
                    )
                ),
                _react2.default.createElement(
                    "ul",
                    { className: "offer-terms-column" },
                    _react2.default.createElement(
                        "li",
                        null,
                        "Save 23% on all prescribed medicines exclusively for ",
                        _react2.default.createElement(
                            "strong",
                            null,
                            "Docprime Gold / VIP users"
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "No minimum order value required to avail discount."
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Visit ",
                        _react2.default.createElement(
                            "a",
                            { href: "https://www.medlife.com/" },
                            "Medlife.com"
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Upload prescription & select medicines."
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Enter promo in the order checkout page. Complete payment via any mode. **Promo not applicable on OTC products"
                    )
                ),
                _react2.default.createElement(
                    "h5",
                    null,
                    _react2.default.createElement(
                        "strong",
                        null,
                        "T&C Pharmacy: "
                    )
                ),
                _react2.default.createElement(
                    "ul",
                    { className: "offer-terms-column" },
                    _react2.default.createElement(
                        "li",
                        null,
                        "Offer Valid on Prescription Drugs"
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Promo code can be used Multiple times during the offer period. Customers can avail this promo code by calling customer support (1860-1234-1234) or by booking online through landing page link. "
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "span",
                            null,
                            "Discount on Selected Products: Discounts provided on the website/mobile application are on selected products. Discounts are not applicable on the following products and on any products so mentioned elsewhere on the website/mobile application:"
                        ),
                        _react2.default.createElement(
                            "ul",
                            { className: "child-list-item pd-12" },
                            _react2.default.createElement(
                                "li",
                                null,
                                "All Baby foods viz Ceralac, Lactogen, Nanpro etc."
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                "All Health Supplements viz Pediasure, Proteinex, Proteinules, Threptin etc"
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                "Over the counter (OTC) products \u2013 Benadryl Cough Syrup, Crocin, Saridon, all Dettol, Savlon products, medicated soaps etc."
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                "All Cosmetic products"
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Offer Validity \u2013 1 year "
                    )
                )
            )
        )
    );
};

/***/ }),

/***/ "./dev/js/containers/vipClub/VipClub.js":
/*!**********************************************!*\
  !*** ./dev/js/containers/vipClub/VipClub.js ***!
  \**********************************************/
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

var _vipClubView = __webpack_require__(/*! ../../components/vipClub/vipClubView.js */ "./dev/js/components/vipClub/vipClubView.js");

var _vipClubView2 = _interopRequireDefault(_vipClubView);

var _Loader = __webpack_require__(/*! ../../components/commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _DesktopProfileHeader = __webpack_require__(/*! ../../components/commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import VipGoldView from '../../components/vipClub/vipGoldView.js'


var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var VipClub = function (_React$Component) {
    _inherits(VipClub, _React$Component);

    function VipClub(props) {
        _classCallCheck(this, VipClub);

        var _this = _possibleConstructorReturn(this, (VipClub.__proto__ || Object.getPrototypeOf(VipClub)).call(this, props));

        var parsed = queryString.parse(_this.props.location.search);
        _this.state = {
            isSalesAgent: parsed.utm_source,
            isAgent: parsed.is_agent ? parsed.is_agent : false,
            source: parsed.source,
            // is_gold:parsed.is_gold?parsed.is_gold:false,
            is_gold: _this.props.match.url.includes('vip-gold-details'),
            is_vip_gold: parsed.is_vip_gold ? parsed.is_vip_gold : false,
            is_booking_page: parsed.booking_page ? parsed.booking_page : null,
            is_from_organic: parsed.fromOrganic,
            is_pb: parsed.utm_source ? parsed.utm_source && parsed.utm_source.includes('policybazaar.com') : false
        };
        return _this;
    }

    _createClass(VipClub, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            if (_storage2.default.checkAuth()) {
                this.props.getUserProfile(); // to get loggedIn user profile
            }
            if (window) {
                window.scrollTo(0, 0);
            }
            var extraData = {
                selectedLocation: this.props.selectedLocation,
                from_vip: true,
                type: this.state.is_gold ? 'is_gold' : 'is_vip'
            };
            this.props.getNearbyHospitals(extraData); // to get near by hospitals covered under gold or vip or near by location
            this.props.getTopHospitals(extraData); // to get near by  top hospitals covered under gold or vip or near by location
            var data = {};
            data.selectedLocation = this.props.selectedLocation;
            data.isSalesAgent = this.state.isSalesAgent;
            data.isAgent = this.state.isAgent;
            data.is_gold = this.state.is_gold;
            data.all = this.state.is_vip_gold;
            data.fromWhere = null;
            this.props.getVipList(false, data); // to get vip plan list
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.LOAD_VIP_CLUB && this.props.selected_vip_plan && Object.keys(this.props.selected_vip_plan).length > 0) {
                return _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(_vipClubView2.default, _extends({}, this.props, { isSalesAgent: this.state.isSalesAgent, isAgent: this.state.isAgent, source: this.state.source, is_gold: this.state.is_gold, is_vip_gold: this.state.is_vip_gold, selected_plan: this.props.selected_vip_plan, is_booking_page: this.state.is_booking_page, is_from_organic: this.state.is_from_organic, is_pb: this.state.is_pb }))
                );
            } else {
                if (this.props.vipClubList.certificate && _storage2.default.checkAuth()) {
                    // if already gold or vip user redirect to dashboard
                    this.props.history.replace('/vip-club-activated-details');
                }
                if (this.state.isSalesAgent && this.state.isAgent) {
                    return _react2.default.createElement(
                        'div',
                        { className: 'profile-body-wrap' },
                        _react2.default.createElement(_Loader2.default, null)
                    );
                } else {
                    return _react2.default.createElement(
                        'div',
                        { className: 'profile-body-wrap' },
                        _react2.default.createElement(_DesktopProfileHeader2.default, { showPackageStrip: true }),
                        _react2.default.createElement(_Loader2.default, null)
                    );
                }
            }
        }
    }]);

    return VipClub;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    var USER = state.USER;
    var _state$USER = state.USER,
        user_cities = _state$USER.user_cities,
        common_utm_tags = _state$USER.common_utm_tags,
        user_loggedIn_number = _state$USER.user_loggedIn_number;
    var _state$VIPCLUB = state.VIPCLUB,
        LOAD_VIP_CLUB = _state$VIPCLUB.LOAD_VIP_CLUB,
        vipClubList = _state$VIPCLUB.vipClubList,
        selected_vip_plan = _state$VIPCLUB.selected_vip_plan,
        odpGoldPredictedPrice = _state$VIPCLUB.odpGoldPredictedPrice,
        labGoldPredictedPrice = _state$VIPCLUB.labGoldPredictedPrice;
    var _state$SEARCH_CRITERI = state.SEARCH_CRITERIA_OPD,
        selectedLocation = _state$SEARCH_CRITERI.selectedLocation,
        topHospitals = _state$SEARCH_CRITERI.topHospitals,
        nearbyHospitals = _state$SEARCH_CRITERI.nearbyHospitals;

    return {
        USER: USER, selectedLocation: selectedLocation, LOAD_VIP_CLUB: LOAD_VIP_CLUB, vipClubList: vipClubList, selected_vip_plan: selected_vip_plan, user_cities: user_cities, topHospitals: topHospitals, nearbyHospitals: nearbyHospitals, odpGoldPredictedPrice: odpGoldPredictedPrice, labGoldPredictedPrice: labGoldPredictedPrice, common_utm_tags: common_utm_tags, user_loggedIn_number: user_loggedIn_number
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        getVipList: function getVipList(is_endorsement, data, callback) {
            return dispatch((0, _index.getVipList)(is_endorsement, data, callback));
        },
        selectVipClubPlan: function selectVipClubPlan(plan, criteria, callback) {
            return dispatch((0, _index.selectVipClubPlan)(plan, criteria, callback));
        },
        getUserProfile: function getUserProfile() {
            return dispatch((0, _index.getUserProfile)());
        },
        generateVipClubLead: function generateVipClubLead(data) {
            return dispatch((0, _index.generateVipClubLead)(data));
        },
        sendOTP: function sendOTP(number, viaSms, viaWhatsapp, message_type, cb) {
            return dispatch((0, _index.sendOTP)(number, viaSms, viaWhatsapp, message_type, cb));
        },
        submitOTP: function submitOTP(number, otp, extraParamsData, cb) {
            return dispatch((0, _index.submitOTP)(number, otp, extraParamsData, cb));
        },
        resetAuth: function resetAuth() {
            return dispatch((0, _index.resetAuth)());
        },
        citiesData: function citiesData() {
            return dispatch((0, _index.citiesData)());
        },
        vipPlusLead: function vipPlusLead(data) {
            return dispatch((0, _index.vipPlusLead)(data));
        },
        getNearbyHospitals: function getNearbyHospitals(params, cb) {
            return dispatch((0, _index.getNearbyHospitals)(params, cb));
        },
        toggleIPDCriteria: function toggleIPDCriteria(criteria, forceAdd) {
            return dispatch((0, _index.toggleIPDCriteria)(criteria, forceAdd));
        },
        getTopHospitals: function getTopHospitals(dataParams, cb) {
            return dispatch((0, _index.getTopHospitals)(dataParams, cb));
        },
        sendAgentWhatsupPageURL: function sendAgentWhatsupPageURL(dataParams, cb) {
            return dispatch((0, _index.sendAgentWhatsupPageURL)(dataParams, cb));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(VipClub);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvc2VhcmNoUmVzdWx0cy9jYXJvdXNlbFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvdmlwQ2x1Yi92aXBDbHViVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy92aXBDbHViL3ZpcEdvbGRWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL3ZpcENsdWIvdmlwUGxhblZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvdmlwQ2x1Yi92aXBSZXZpZXdTZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL3ZpcENsdWIvdmlwVG5jVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy92aXBDbHViL1ZpcENsdWIuanMiXSwibmFtZXMiOlsiaXNWaXAiLCJjb2xvciIsImZvbnRTaXplIiwicGFkZGluZ0JvdHRvbSIsIkNhcm91c2VsVmlldyIsInR5cGUiLCJlbG1udCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcm9wcyIsImRhdGFUeXBlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm91dGVyRGl2V2lkdGgiLCJvZmZzZXRXaWR0aCIsImNoaWxkRGl2V2lkdGgiLCJjYXJkQ291bnQiLCJjaGlsZEVsZW1lbnRDb3VudCIsImNhcmRXaWR0aCIsIk1hdGgiLCJjZWlsIiwibGVmdFNjcm9sbCIsInNjcm9sbExlZnQiLCJzY3JvbGxWYWwiLCJmbG9vciIsImNhcmRFbmQiLCJzY3JvbGwiLCJsZWZ0IiwiYmVoYXZpb3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ0b3BIZWFkaW5nIiwiZGF0YUxpc3QiLCJ0b3BIb3NwaXRhbCIsImV4dHJhSGVhZGluZyIsInZpZXdBbGwiLCJsZW5ndGgiLCJuYXZpZ2F0ZVRvIiwibWFwIiwiZGF0YSIsImtleSIsImlkIiwiY2Fyb3VzZWxDYXJkQ2xpY2tlZCIsImxvZ28iLCJ3aWR0aCIsIm5hbWUiLCJiaW5kIiwiQVNTRVRTX0JBU0VfVVJMIiwiUmVhY3QiLCJDb21wb25lbnQiLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJWaXBDbHViVmlldyIsImhvc3BpdGFsQ2FyZENsaWNrZWQiLCJ0b3AiLCJndG1EYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VuZEV2ZW50IiwicmVkaXJlY3RVcmwiLCJ1cmwiLCJoaXN0b3J5IiwicHVzaCIsInN0YXRlIiwic2VsZWN0ZWRfcGxhbl9kYXRhIiwic2VsZWN0ZWRfcGxhbiIsInNob3dQb3B1cCIsImlzTGVhZCIsInNlbGVjdGVkX3BsYW5faWQiLCJPYmplY3QiLCJrZXlzIiwidG9nZ2xlVGFiVHlwZSIsImlzX2dvbGRfY2xpY2tlZCIsImlzX3ZpcF9nb2xkIiwib3Blbk1lZGxpZmVUbkMiLCJpc19sZWFkX2VuYWJsZWQiLCJwbGFuIiwiaXNfZ29sZCIsInNlbGVjdGVkX3ZpcF9wbGFuIiwidmlwQ2x1Ykxpc3QiLCJwbGFucyIsImdvbGRfcGxhbnMiLCJyZXNwIiwic2V0U3RhdGUiLCJsb2dpblVzZXIiLCJsZWFkX2RhdGEiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwiZXh0cmFQYXJhbXMiLCJjb21tb25fdXRtX3RhZ3MiLCJmaWx0ZXIiLCJ4IiwidXRtX3RhZ3MiLCJ2aXNpdG9yX2luZm8iLCJnZXRWaXNpdG9ySW5mbyIsInZpc2l0X2lkIiwidmlzaXRvcl9pZCIsIlNUT1JBR0UiLCJjaGVja0F1dGgiLCJpc1NhbGVzQWdlbnQiLCJpc0FnZW50IiwiVVNFUiIsInByb2ZpbGVzIiwiZGVmYXVsdFByb2ZpbGUiLCJ1c2VyX2xvZ2dlZEluX251bWJlciIsImlzX2Zyb21fb3JnYW5pYyIsInNlbGYiLCJ3aW5kb3ciLCJvbnNjcm9sbCIsInNjcm9sbFBvc2l0aW9uIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwiYm9keSIsInJlZnMiLCJwbGFuX3RvX3RvZ2dsZSIsImlzRm9yY2VVcGRhdGUiLCJzZWxlY3RWaXBDbHViUGxhbiIsImlzSGVhZGVyIiwiaXNfZGVza3RvcF92aWV3IiwiaXNfc2VsZWN0ZWQiLCJwcm9jZWVkIiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwidGV4dCIsInV0bV9zb3VyY2UiLCJ1dG1fdGVybSIsInV0bV9jYW1wYWlnbiIsInV0bV9tZWRpdW0iLCJpc19hZ2VudCIsImNpdGllc0RhdGEiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJnb2xkIiwiYmFja2dyb3VuZCIsImNhbm9uaWNhbFVybCIsIkNPTkZJRyIsIkFQSV9CQVNFX1VSTCIsInBhdGhuYW1lIiwidGl0bGUiLCJzb3VyY2UiLCJnbyIsIm1ycCIsImRlYWxfcHJpY2UiLCJoaWRlTG9naW5Qb3B1cCIsImNsb3NlTGVhZFBvcHVwIiwic2VsZWN0UGxhbiIsInZpZXdEb2NwcmltZU5ldHdvcmtDbGlja2VkIiwic2VsZWN0R29sZFBsYW4iLCJ0b2dnbGUiLCJjbG9zZVRuY1BvcHVwIiwiVmlwR29sZFZpZXciLCJwbGF5VmlkZW8iLCJmcmFtZVZpZGVvIiwicGxheUljb24iLCJvbnRpbWV1cGRhdGUiLCJ2aWRlb1RpbWVyIiwidCIsImN1cnJlbnRUaW1lIiwidmlkVGltZXIiLCJpbm5lckhUTUwiLCJyb3VuZCIsInN0eWxlIiwiZGlzcGxheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXVzZSIsIm9wYWNpdHkiLCJwYXVzZWQiLCJwbGF5Iiwic2VuZFBhZ2VVcmwiLCJjYWxsYmFjayIsInNwbGl0IiwicmVwbGFjZSIsInRlbXBsYXRlIiwic2VuZEFnZW50V2hhdHN1cFBhZ2VVUkwiLCJ0aGVuIiwic2V0VGltZW91dCIsImNhdGNoIiwidGFic1ZhbHVlIiwiZmllbGQiLCJldmVudCIsInRhYnMiLCJjb25jYXQiLCJmb3VuZCIsInBhcnNlZCIsImlzX2Jvb2tpbmdfcGFnZSIsIm9kcEdvbGRQcmVkaWN0ZWRQcmljZSIsImxhYkdvbGRQcmVkaWN0ZWRQcmljZSIsImNhbGxCYWNrVXJsIiwiaG9zcGl0YWxfaWQiLCJpbmNsdWRlcyIsImRvY3Rvcl9pZCIsImNoaWxkcmVuIiwic2Nyb2xsV2lkdGgiLCJpc19nb2xkX3NlbGVjdGVkIiwiZW50cmllcyIsInZhbHVlIiwicGFyc2VJbnQiLCJwbGFuX25hbWUiLCJpc19wYiIsInRvdGFsX2FsbG93ZWRfbWVtYmVycyIsInRlbnVyZSIsInNob3dfY29uc3VsdGF0aW9uX3RleHQiLCJ0b3BIb3NwaXRhbHMiLCJ0b3BfaG9zcGl0YWxzIiwidmlwX3BlcmNlbnRhZ2UiLCJuZWFyYnlIb3NwaXRhbHMiLCJob3NwaXRhbHMiLCJtYXJnaW5Ub3AiLCJpbnRlcm5hbF9uYW1lIiwicG9zaXRpb24iLCJmb250V2VpZ2h0IiwiY2hhdF9wbGFuX2Rlc2NyaXB0aW9uIiwiZ29CYWNrIiwiYm9yZGVyQ29sb3IiLCJib3R0b20iLCJCdXR0b25IYW5kbGVyIiwiaW5kZXhPZiIsImN1cnNvciIsIlZpcFBsYW5WaWV3Iiwic2VsZWN0ZWRfZ29sZF9wbGFuX3ByaWNlIiwid29ydGgiLCJkb2N0b3JfY29uc3VsdF9hbW91bnQiLCJoZWFsdGhfY2hlY2t1cHNfYW1vdW50Iiwib25saW5lX2NoYXRfYW1vdW50IiwidGF4X3JlYmF0ZSIsIm1lbWJlcnNfY292ZXJlZF9pbl9wYWNrYWdlIiwidG90YWxfdGVzdF9jb3ZlcmVkX2luX3BhY2thZ2UiLCJ5b3VfZ2V0IiwieW91X3BheSIsImVmZmVjdGl2ZV9wcmljZSIsImNvbnRlbnQiLCJzYWxpZW50X2ZlYXR1cmVzIiwiaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUiLCJWaXBDbHViIiwibWF0Y2giLCJib29raW5nX3BhZ2UiLCJmcm9tT3JnYW5pYyIsImdldFVzZXJQcm9maWxlIiwic2Nyb2xsVG8iLCJleHRyYURhdGEiLCJzZWxlY3RlZExvY2F0aW9uIiwiZnJvbV92aXAiLCJnZXROZWFyYnlIb3NwaXRhbHMiLCJnZXRUb3BIb3NwaXRhbHMiLCJhbGwiLCJmcm9tV2hlcmUiLCJnZXRWaXBMaXN0IiwiTE9BRF9WSVBfQ0xVQiIsImNlcnRpZmljYXRlIiwibWFwU3RhdGVUb1Byb3BzIiwidXNlcl9jaXRpZXMiLCJWSVBDTFVCIiwiU0VBUkNIX0NSSVRFUklBX09QRCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiaXNfZW5kb3JzZW1lbnQiLCJjcml0ZXJpYSIsImdlbmVyYXRlVmlwQ2x1YkxlYWQiLCJzZW5kT1RQIiwibnVtYmVyIiwidmlhU21zIiwidmlhV2hhdHNhcHAiLCJtZXNzYWdlX3R5cGUiLCJjYiIsInN1Ym1pdE9UUCIsIm90cCIsImV4dHJhUGFyYW1zRGF0YSIsInJlc2V0QXV0aCIsInZpcFBsdXNMZWFkIiwicGFyYW1zIiwidG9nZ2xlSVBEQ3JpdGVyaWEiLCJmb3JjZUFkZCIsImRhdGFQYXJhbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O2tCQUNlLGdCQUFlO0FBQUEsUUFBWkEsS0FBWSxRQUFaQSxLQUFZOztBQUM3QixXQUFRO0FBQUE7QUFBQSxVQUFLLDZCQUEwQkEsUUFBTSxrQkFBTixHQUF5QixFQUFuRCxDQUFMO0FBQ087QUFBQTtBQUFBLGNBQUcsV0FBVSxlQUFiLEVBQTZCLE9BQU8sRUFBRUMsT0FBTyxTQUFULEVBQW9CQyxVQUFVLEVBQTlCLEVBQXBDO0FBQUE7QUFBQSxTQURQO0FBRU87QUFBQTtBQUFBLGNBQUssV0FBVSw0QkFBZixFQUE0QyxPQUFPLEVBQUVDLGVBQWUsQ0FBakIsRUFBbkQ7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEo7QUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFGUCxLQUFSO0FBU0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYRDs7Ozs7Ozs7Ozs7O0lBRU1DLFk7Ozs7Ozs7Ozs7OytCQUVFQyxJLEVBQU07QUFDTixnQkFBSUMsUUFBUUMsU0FBU0MsY0FBVCxVQUErQixLQUFLQyxLQUFMLENBQVdDLFFBQTFDLENBQVo7O0FBRUEsZ0JBQUdKLFNBQVNDLFNBQVNJLHNCQUFULFVBQXVDLEtBQUtGLEtBQUwsQ0FBV0MsUUFBbEQsV0FBVCxJQUErRUgsU0FBU0MsY0FBVCxnQkFBcUMsS0FBS0MsS0FBTCxDQUFXQyxRQUFoRCxDQUEvRSxJQUE4SUgsU0FBU0MsY0FBVCxpQkFBc0MsS0FBS0MsS0FBTCxDQUFXQyxRQUFqRCxDQUFqSixFQUErTTs7QUFFOU0sb0JBQUlFLGdCQUFnQk4sTUFBTU8sV0FBMUI7QUFDQSxvQkFBSUMsZ0JBQWdCUCxTQUFTSSxzQkFBVCxVQUF1QyxLQUFLRixLQUFMLENBQVdDLFFBQWxELFlBQW1FLENBQW5FLEVBQXNFRyxXQUExRjtBQUNBLG9CQUFJRSxZQUFZUixTQUFTSSxzQkFBVCxVQUF1QyxLQUFLRixLQUFMLENBQVdDLFFBQWxELFlBQW1FLENBQW5FLEVBQXNFTSxpQkFBdEY7QUFDQSxvQkFBSUMsWUFBWUMsS0FBS0MsSUFBTCxDQUFVTCxnQkFBZ0JDLFNBQTFCLENBQWhCOztBQUVBLG9CQUFJSyxhQUFhZCxNQUFNZSxVQUF2QjtBQUNBLG9CQUFJQyxZQUFZSixLQUFLSyxLQUFMLENBQVdYLGdCQUFnQkssU0FBM0IsSUFBd0NBLFNBQXhEO0FBQ0Esb0JBQUlPLFVBQVVULFlBQVlFLFNBQTFCOztBQUVBLG9CQUFJWixRQUFRLE9BQVosRUFBcUI7QUFDakJDLDBCQUFNbUIsTUFBTixDQUFhLEVBQUVDLE1BQU1OLGFBQWFFLFNBQXJCLEVBQWdDSyxVQUFVLFFBQTFDLEVBQWI7QUFDQSx3QkFBSUgsV0FBV0osYUFBYUUsU0FBYixHQUF5QlYsYUFBeEMsRUFBdUQ7QUFDbkRMLGlDQUFTQyxjQUFULGdCQUFxQyxLQUFLQyxLQUFMLENBQVdDLFFBQWhELEVBQTREa0IsU0FBNUQsQ0FBc0VDLEdBQXRFLENBQTBFLFFBQTFFO0FBQ0g7QUFDRHRCLDZCQUFTQyxjQUFULGlCQUFzQyxLQUFLQyxLQUFMLENBQVdDLFFBQWpELEVBQTZEa0IsU0FBN0QsQ0FBdUVFLE1BQXZFLENBQThFLFFBQTlFO0FBQ0gsaUJBTkQsTUFNTztBQUNIeEIsMEJBQU1tQixNQUFOLENBQWEsRUFBRUMsTUFBTU4sYUFBYUUsU0FBckIsRUFBZ0NLLFVBQVUsUUFBMUMsRUFBYjtBQUNBLHdCQUFJUCxhQUFhRSxTQUFiLElBQTBCLENBQTlCLEVBQWlDO0FBQzdCZixpQ0FBU0MsY0FBVCxpQkFBc0MsS0FBS0MsS0FBTCxDQUFXQyxRQUFqRCxFQUE2RGtCLFNBQTdELENBQXVFQyxHQUF2RSxDQUEyRSxRQUEzRTtBQUNIO0FBQ0R0Qiw2QkFBU0MsY0FBVCxnQkFBcUMsS0FBS0MsS0FBTCxDQUFXQyxRQUFoRCxFQUE0RGtCLFNBQTVELENBQXNFRSxNQUF0RSxDQUE2RSxRQUE3RTtBQUNIO0FBQ0Q7QUFDSjs7O2lDQUVJO0FBQUE7O0FBQUEseUJBRXNFLEtBQUtyQixLQUYzRTtBQUFBLGdCQUVEc0IsVUFGQyxVQUVEQSxVQUZDO0FBQUEsZ0JBRVdDLFFBRlgsVUFFV0EsUUFGWDtBQUFBLGdCQUVxQnRCLFFBRnJCLFVBRXFCQSxRQUZyQjtBQUFBLGdCQUUrQnVCLFdBRi9CLFVBRStCQSxXQUYvQjtBQUFBLGdCQUU0Q0MsWUFGNUMsVUFFNENBLFlBRjVDO0FBQUEsZ0JBRTBEQyxPQUYxRCxVQUUwREEsT0FGMUQ7O0FBR1AsbUJBQ0M7QUFBQTtBQUFBLGtCQUFLLFdBQVUsaURBQWY7QUFDYTtBQUFBO0FBQUEsc0JBQUssV0FBVSx1QkFBZjtBQUNJO0FBQUE7QUFBQTtBQUFLSixzQ0FBWTtBQUFqQixxQkFESjtBQUVLRyxxQ0FBaUJDLFdBQVdILFNBQVNJLE1BQVQsSUFBa0IsRUFBOUMsS0FBcUQ7QUFBQTtBQUFBLDBCQUFNLFNBQVM7QUFBQSx1Q0FBTSxPQUFLM0IsS0FBTCxDQUFXNEIsVUFBWCxFQUFOO0FBQUEsNkJBQWY7QUFBK0NIO0FBQS9DO0FBRjFELGlCQURiO0FBTWE7QUFBQTtBQUFBLHNCQUFLLFdBQVUsbUNBQWYsRUFBbUQsYUFBVyxLQUFLekIsS0FBTCxDQUFXQyxRQUF6RTtBQUNJO0FBQUE7QUFBQSwwQkFBSyw0REFBMEQsS0FBS0QsS0FBTCxDQUFXQyxRQUFyRSxVQUFMO0FBRUVzQixpQ0FBU00sR0FBVCxDQUFhLFVBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFhO0FBQzdCLG1DQUFPO0FBQUE7QUFBQSxrQ0FBRyxLQUFRQSxHQUFSLFNBQWVELEtBQUtFLEVBQXZCLEVBQTZCLE1BQUssRUFBbEMsRUFBcUMsV0FBVSxjQUEvQyxFQUErRCxTQUFTO0FBQUEsK0NBQUksT0FBS2hDLEtBQUwsQ0FBV2lDLG1CQUFYLENBQStCSCxJQUEvQixFQUFvQ04sY0FBWSxJQUFaLEdBQWlCLEtBQXJELENBQUo7QUFBQSxxQ0FBeEU7QUFDRztBQUFBO0FBQUEsc0NBQUssV0FBVSxnQkFBZjtBQUVFTSx5Q0FBS0ksSUFBTCxJQUFhLHVDQUFLLE9BQU8sRUFBQ0MsT0FBTyxNQUFSLEVBQVosRUFBNkIsV0FBVSxXQUF2QyxFQUFtRCxLQUFLTCxLQUFLSSxJQUE3RDtBQUZmLGlDQURIO0FBTUc7QUFBQTtBQUFBLHNDQUFHLFdBQVUsd0JBQWI7QUFDS0oseUNBQUtNO0FBRFY7QUFOSCw2QkFBUDtBQVVJLHlCQVhEO0FBRkY7QUFESixpQkFOYjtBQXdCYTtBQUFBO0FBQUEsc0JBQUssV0FBVSw4QkFBZjtBQUNJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLG1CQUFmLEVBQW1DLG9CQUFrQm5DLFFBQXJELEVBQWlFLFNBQVMsS0FBS2UsTUFBTCxDQUFZcUIsSUFBWixDQUFpQixJQUFqQixFQUF1QixNQUF2QixDQUExRTtBQUEwRywrREFBSyxLQUFLQyxTQUFlQSxHQUFHLHdDQUE1QjtBQUExRyxxQkFESjtBQUVJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFlBQWYsRUFBNEIsbUJBQWlCckMsUUFBN0MsRUFBeUQsU0FBUyxLQUFLZSxNQUFMLENBQVlxQixJQUFaLENBQWlCLElBQWpCLEVBQXVCLE9BQXZCLENBQWxFO0FBQW1HLCtEQUFLLEtBQUtDLFNBQWVBLEdBQUcsd0NBQTVCO0FBQW5HO0FBRko7QUF4QmIsYUFERDtBQStCQTs7OztFQWxFeUJDLGdCQUFNQyxTOztrQkFxRWxCN0MsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFZjs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFMQSxJQUFNOEMsY0FBY0MsbUJBQU9BLENBQUMsMERBQVIsQ0FBcEI7O0lBT01DLFc7OztBQUNGLHlCQUFZM0MsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhIQUNUQSxLQURTOztBQUFBLGNBNE5uQjRDLG1CQTVObUIsR0E0TkcsVUFBQ2QsSUFBRCxFQUFxQjtBQUFBLGdCQUFmZSxHQUFlLHVFQUFULElBQVM7O0FBQ3ZDLGdCQUFJQyxVQUFVLEVBQWQ7QUFDQSxnQkFBSUQsR0FBSixFQUFTO0FBQ0xDLDBCQUFVO0FBQ04sZ0NBQVksYUFETixFQUNxQixVQUFVLDhCQUQvQixFQUMrRCxjQUFjQyxjQUFJQyxTQUFKLE1BQW1CLEVBRGhHLEVBQ29HLFVBQVUsQ0FEOUcsRUFDaUgsU0FBUztBQUQxSCxpQkFBVjtBQUlILGFBTEQsTUFLTztBQUNIRiwwQkFBVTtBQUNOLGdDQUFZLGFBRE4sRUFDcUIsVUFBVSx5QkFEL0IsRUFDMEQsY0FBY0MsY0FBSUMsU0FBSixNQUFtQixFQUQzRixFQUMrRixVQUFVLENBRHpHLEVBQzRHLFNBQVM7QUFEckgsaUJBQVY7QUFHSDtBQUNERCwwQkFBSUUsU0FBSixDQUFjLEVBQUVuQixNQUFNZ0IsT0FBUixFQUFkO0FBQ0EsZ0JBQUlJLGNBQWMsRUFBbEI7O0FBRUEsZ0JBQUlwQixLQUFLcUIsR0FBVCxFQUFjO0FBQ1ZELG9DQUFrQnBCLEtBQUtxQixHQUF2QjtBQUNILGFBRkQsTUFFTztBQUNIRCxpREFBK0JwQixLQUFLRSxFQUFwQztBQUNIO0FBQ0Qsa0JBQUtoQyxLQUFMLENBQVdvRCxPQUFYLENBQW1CQyxJQUFuQixDQUF3QkgsV0FBeEI7QUFDSCxTQWpQa0I7O0FBRWYsY0FBS0ksS0FBTCxHQUFhO0FBQ1RDLGdDQUFvQixNQUFLdkQsS0FBTCxDQUFXd0QsYUFBWCxHQUEyQixNQUFLeEQsS0FBTCxDQUFXd0QsYUFBdEMsR0FBc0QsRUFEakU7QUFFVEMsdUJBQVcsS0FGRjtBQUdUQyxvQkFBUSxFQUhDO0FBSVRDLDhCQUFrQixNQUFLM0QsS0FBTCxDQUFXd0QsYUFBWCxJQUE0QkksT0FBT0MsSUFBUCxDQUFZLE1BQUs3RCxLQUFMLENBQVd3RCxhQUF2QixFQUFzQzdCLE1BQWxFLEdBQTJFLE1BQUszQixLQUFMLENBQVd3RCxhQUFYLENBQXlCeEIsRUFBcEcsR0FBdUcsRUFKaEg7QUFLVDhCLDJCQUFlLEtBTE47QUFNVEMsNkJBQWdCLE1BQUsvRCxLQUFMLENBQVdnRSxXQUFYLEdBQXVCLE1BQUtoRSxLQUFMLENBQVdnRSxXQUFsQyxHQUE4QyxLQU5yRDtBQU9UQyw0QkFBZSxLQVBOO0FBUVRDLDZCQUFnQjtBQVJQLFNBQWI7QUFGZTtBQVlsQjs7Ozs0Q0FFbUI7QUFDaEIsZ0JBQUlDLE9BQU8sRUFBWDtBQUNBLGdCQUFJLENBQUMsS0FBS25FLEtBQUwsQ0FBV29FLE9BQVosSUFBdUIsS0FBS3BFLEtBQUwsQ0FBV3FFLGlCQUFsQyxJQUF1RCxLQUFLckUsS0FBTCxDQUFXc0UsV0FBbEUsS0FBbUYsS0FBS3RFLEtBQUwsQ0FBV3NFLFdBQVgsQ0FBdUJDLEtBQXZCLElBQWdDLEtBQUt2RSxLQUFMLENBQVdzRSxXQUFYLENBQXVCQyxLQUF2QixDQUE2QjVDLE1BQTdCLEdBQXNDLENBQXZFLElBQThFLEtBQUszQixLQUFMLENBQVdzRSxXQUFYLENBQXVCRSxVQUF2QixJQUFxQyxLQUFLeEUsS0FBTCxDQUFXc0UsV0FBWCxDQUF1QkUsVUFBdkIsQ0FBa0M3QyxNQUFsQyxHQUEyQyxDQUFoUCxDQUFKLEVBQXlQO0FBQ3JQLG9CQUFJOEMsT0FBTyxLQUFLekUsS0FBTCxDQUFXcUUsaUJBQXRCO0FBQ0EscUJBQUtLLFFBQUwsQ0FBYyxFQUFFbkIsb0JBQW9Ca0IsSUFBdEIsRUFBNEJkLGtCQUFrQmMsS0FBS3pDLEVBQW5ELEVBQWQ7QUFDSDs7QUFFRCxnQkFBSTJDLGtCQUFKO0FBQ0EsZ0JBQUlDLFlBQVluQyxZQUFZb0MsS0FBWixDQUFrQixLQUFLN0UsS0FBTCxDQUFXOEUsUUFBWCxDQUFvQkMsTUFBdEMsQ0FBaEI7QUFDQSxnQkFBSUMsY0FBYyxFQUFsQjtBQUNBLGdCQUFHLEtBQUtoRixLQUFMLENBQVdpRixlQUFYLElBQThCLEtBQUtqRixLQUFMLENBQVdpRixlQUFYLENBQTJCdEQsTUFBM0IsR0FBbUMsQ0FBcEUsRUFBc0U7QUFDbEVxRCw4QkFBYyxLQUFLaEYsS0FBTCxDQUFXaUYsZUFBWCxDQUEyQkMsTUFBM0IsQ0FBa0M7QUFBQSwyQkFBR0MsRUFBRXZGLElBQUYsSUFBVSxrQkFBYjtBQUFBLGlCQUFsQyxFQUFtRSxDQUFuRSxFQUFzRXdGLFFBQXBGO0FBQ0g7QUFDRCxnQkFBSUMsZUFBZXRDLGNBQUl1QyxjQUFKLEVBQW5CO0FBQ0ksZ0JBQUdELGdCQUFnQkEsYUFBYUUsUUFBaEMsRUFBeUM7QUFDckNYLDBCQUFVVyxRQUFWLEdBQXFCRixhQUFhRSxRQUFsQztBQUNBWCwwQkFBVVksVUFBVixHQUF1QkgsYUFBYUcsVUFBcEM7QUFDSDtBQUNMLGdCQUFJQyxrQkFBUUMsU0FBUixNQUF1QixDQUFDLEtBQUsxRixLQUFMLENBQVcyRixZQUFuQyxJQUFtRCxDQUFDLEtBQUszRixLQUFMLENBQVc0RixPQUEvRCxJQUEwRSxDQUFDSCxrQkFBUUcsT0FBUixFQUEvRSxFQUFrRztBQUM5RixvQkFBSSxLQUFLNUYsS0FBTCxDQUFXNkYsSUFBWCxJQUFtQmpDLE9BQU9DLElBQVAsQ0FBWSxLQUFLN0QsS0FBTCxDQUFXNkYsSUFBWCxDQUFnQkMsUUFBNUIsRUFBc0NuRSxNQUF0QyxHQUErQyxDQUFsRSxJQUF1RSxLQUFLM0IsS0FBTCxDQUFXNkYsSUFBWCxDQUFnQkUsY0FBM0YsRUFBMkc7QUFDdkdwQixnQ0FBWSxLQUFLM0UsS0FBTCxDQUFXNkYsSUFBWCxDQUFnQkMsUUFBaEIsQ0FBeUIsS0FBSzlGLEtBQUwsQ0FBVzZGLElBQVgsQ0FBZ0JFLGNBQXpDLENBQVo7QUFDQSx3QkFBSW5DLE9BQU9DLElBQVAsQ0FBWWMsU0FBWixFQUF1QmhELE1BQXZCLEdBQWdDLENBQXBDLEVBQXVDO0FBQ25DLDRCQUFHLEtBQUszQixLQUFMLENBQVdpRixlQUFYLElBQThCLEtBQUtqRixLQUFMLENBQVdpRixlQUFYLENBQTJCdEQsTUFBM0IsR0FBbUMsQ0FBcEUsRUFBc0U7QUFDbEVxRCwwQ0FBYyxLQUFLaEYsS0FBTCxDQUFXaUYsZUFBWCxDQUEyQkMsTUFBM0IsQ0FBa0M7QUFBQSx1Q0FBR0MsRUFBRXZGLElBQUYsSUFBVSxrQkFBYjtBQUFBLDZCQUFsQyxFQUFtRSxDQUFuRSxFQUFzRXdGLFFBQXBGO0FBQ0g7QUFDRCw0QkFBSUMsZ0JBQWV0QyxjQUFJdUMsY0FBSixFQUFuQjtBQUNJLDRCQUFHRCxpQkFBZ0JBLGNBQWFFLFFBQWhDLEVBQXlDO0FBQ3JDWCxzQ0FBVVcsUUFBVixHQUFxQkYsY0FBYUUsUUFBbEM7QUFDQVgsc0NBQVVZLFVBQVYsR0FBdUJILGNBQWFHLFVBQXBDO0FBQ0g7QUFDTCw0QkFBRyxLQUFLbEMsS0FBTCxDQUFXWSxlQUFkLEVBQThCO0FBQzFCOzs7Ozs7Ozs7Ozs7QUFZSDtBQUNKO0FBQ0o7QUFDSjtBQUNELGdCQUFHLENBQUN1QixrQkFBUUMsU0FBUixFQUFELElBQXdCLEtBQUsxRixLQUFMLENBQVdnRyxvQkFBbkMsSUFBMkQsQ0FBQyxLQUFLaEcsS0FBTCxDQUFXaUcsZUFBdkUsSUFBMEYsS0FBSzNDLEtBQUwsQ0FBV1ksZUFBeEcsRUFBd0g7QUFDcEg7Ozs7Ozs7Ozs7O0FBV0g7O0FBRUQsZ0JBQUlnQyxPQUFPLElBQVg7QUFDQSxnQkFBSUMsVUFBVXJHLFFBQWQsRUFBd0I7QUFDcEJxRyx1QkFBT0MsUUFBUCxHQUFrQixZQUFZO0FBQzFCLHdCQUFJQyxpQkFBaUJ2RyxTQUFTd0csZUFBVCxDQUF5QkMsU0FBekIsSUFBc0N6RyxTQUFTMEcsSUFBVCxDQUFjRCxTQUF6RTs7QUFFQSx3QkFBSUwsS0FBS08sSUFBTCxDQUFVLGNBQVYsQ0FBSixFQUErQjs7QUFFM0IsNEJBQUlKLGlCQUFpQixFQUFyQixFQUF5QjtBQUNyQkgsaUNBQUt4QixRQUFMLENBQWMsRUFBRVosZUFBZSxJQUFqQixFQUFkO0FBQ0gseUJBRkQsTUFFTztBQUNIb0MsaUNBQUt4QixRQUFMLENBQWMsRUFBRVosZUFBZSxLQUFqQixFQUFkO0FBQ0g7QUFDSjtBQUNKLGlCQVhEO0FBWUg7QUFDSjs7O21DQUVVNEMsYyxFQUFnQjtBQUFBOztBQUN2QixpQkFBS2hDLFFBQUwsQ0FBYyxFQUFDWCxpQkFBZ0IsS0FBakIsRUFBZDtBQUNBLGdCQUFJSSxPQUFPdUMsY0FBWDtBQUNBdkMsaUJBQUt3QyxhQUFMLEdBQXFCLEtBQXJCO0FBQ0EsaUJBQUszRyxLQUFMLENBQVc0RyxpQkFBWCxDQUE2QixNQUE3QixFQUFxQ3pDLElBQXJDLEVBQTJDLFVBQUNNLElBQUQsRUFBVTtBQUFFO0FBQ25ELHVCQUFLQyxRQUFMLENBQWMsRUFBRW5CLG9CQUFvQmtCLElBQXRCLEVBQTRCZCxrQkFBa0JjLEtBQUt6QyxFQUFuRCxFQUFkO0FBQ0gsYUFGRDtBQUdIOzs7aUNBRU87QUFDSixpQkFBSzBDLFFBQUwsQ0FBYyxFQUFDVCxnQkFBZSxJQUFoQixFQUFkO0FBQ0g7Ozt3Q0FFYztBQUNaLGlCQUFLUyxRQUFMLENBQWMsRUFBQ1QsZ0JBQWUsS0FBaEIsRUFBZDtBQUNGOzs7dUNBRWN5QyxjLEVBQWVHLFEsRUFBU0MsZSxFQUFpQjtBQUFBOztBQUNwRCxpQkFBS3BDLFFBQUwsQ0FBYyxFQUFDWCxpQkFBZ0IsSUFBakIsRUFBZDtBQUNBLGdCQUFJSSxhQUFKO0FBQ0EsZ0JBQUcwQyxZQUFZLEtBQUs3RyxLQUFMLENBQVdzRSxXQUF2QixJQUFzQyxLQUFLdEUsS0FBTCxDQUFXc0UsV0FBWCxDQUF1QkUsVUFBN0QsSUFBMkUsS0FBS3hFLEtBQUwsQ0FBV3NFLFdBQVgsQ0FBdUJFLFVBQXZCLENBQWtDN0MsTUFBbEMsR0FBMkMsQ0FBekgsRUFBMkg7QUFDdkh3Qyx1QkFBUSxLQUFLbkUsS0FBTCxDQUFXc0UsV0FBWCxDQUF1QkUsVUFBdkIsQ0FBa0NVLE1BQWxDLENBQTBDO0FBQUEsMkJBQUtDLEVBQUU0QixXQUFQO0FBQUEsaUJBQTFDLEVBQStELENBQS9ELENBQVI7QUFDSCxhQUZELE1BRUs7QUFDRDVDLHVCQUFPdUMsY0FBUDtBQUNIO0FBQ0R2QyxpQkFBS3dDLGFBQUwsR0FBcUIsS0FBckI7QUFDQSxpQkFBSzNHLEtBQUwsQ0FBVzRHLGlCQUFYLENBQTZCLE1BQTdCLEVBQXFDekMsSUFBckMsRUFBMkMsVUFBQ00sSUFBRCxFQUFVO0FBQUU7QUFDbkQsdUJBQUtDLFFBQUwsQ0FBYyxFQUFFbkIsb0JBQW9Ca0IsSUFBdEIsRUFBNEJkLGtCQUFrQmMsS0FBS3pDLEVBQW5ELEVBQWQ7QUFDQSxvQkFBRzhFLGVBQUgsRUFBbUI7QUFDZiwyQkFBS0UsT0FBTDtBQUNIO0FBQ0osYUFMRDtBQU1IOzs7eUNBRWdCO0FBQ2IsaUJBQUt0QyxRQUFMLENBQWMsRUFBRWpCLFdBQVcsS0FBYixFQUFkO0FBQ0g7Ozt5Q0FFZ0I7QUFDYixpQkFBS2lCLFFBQUwsQ0FBYyxFQUFFakIsV0FBVyxLQUFiLEVBQWQ7QUFDSDs7O2tDQUVTO0FBQ053RCxtQ0FBU0MsSUFBVCxDQUFjLEVBQUVDLEtBQUssZUFBUCxFQUF3QkMsTUFBTSxpR0FBOUIsRUFBZDtBQUNBO0FBQ0EsZ0JBQUl6QyxrQkFBSjtBQUNBLGdCQUFJQyxZQUFZbkMsWUFBWW9DLEtBQVosQ0FBa0IsS0FBSzdFLEtBQUwsQ0FBVzhFLFFBQVgsQ0FBb0JDLE1BQXRDLENBQWhCO0FBQ0EsZ0JBQUlqQyxVQUFVO0FBQ1YsNEJBQVksYUFERixFQUNpQixVQUFVLHNCQUQzQixFQUNtRCxjQUFjQyxjQUFJQyxTQUFKLE1BQW1CLEVBRHBGLEVBQ3dGLFVBQVUsQ0FEbEcsRUFDcUcsU0FBUyxvQkFEOUcsRUFDb0ksWUFBWTtBQURoSixhQUFkO0FBR0FELDBCQUFJRSxTQUFKLENBQWMsRUFBRW5CLE1BQU1nQixPQUFSLEVBQWQ7O0FBRUEsZ0JBQUkyQyxrQkFBUUMsU0FBUixFQUFKLEVBQXlCO0FBQ3JCLG9CQUFJLEtBQUsxRixLQUFMLENBQVc2RixJQUFYLElBQW1CakMsT0FBT0MsSUFBUCxDQUFZLEtBQUs3RCxLQUFMLENBQVc2RixJQUFYLENBQWdCQyxRQUE1QixFQUFzQ25FLE1BQXRDLEdBQStDLENBQWxFLElBQXVFLEtBQUszQixLQUFMLENBQVc2RixJQUFYLENBQWdCRSxjQUEzRixFQUEyRztBQUN2R3BCLGdDQUFZLEtBQUszRSxLQUFMLENBQVc2RixJQUFYLENBQWdCQyxRQUFoQixDQUF5QixLQUFLOUYsS0FBTCxDQUFXNkYsSUFBWCxDQUFnQkUsY0FBekMsQ0FBWjtBQUNBLHdCQUFJZixjQUFjLEVBQWxCO0FBQ0Esd0JBQUcsS0FBS2hGLEtBQUwsQ0FBV2lGLGVBQVgsSUFBOEIsS0FBS2pGLEtBQUwsQ0FBV2lGLGVBQVgsQ0FBMkJ0RCxNQUEzQixHQUFtQyxDQUFwRSxFQUFzRTtBQUNsRXFELHNDQUFjLEtBQUtoRixLQUFMLENBQVdpRixlQUFYLENBQTJCQyxNQUEzQixDQUFrQztBQUFBLG1DQUFHQyxFQUFFdkYsSUFBRixJQUFVLGtCQUFiO0FBQUEseUJBQWxDLEVBQW1FLENBQW5FLEVBQXNFd0YsUUFBcEY7QUFDSDtBQUNELHdCQUFJeEIsT0FBT0MsSUFBUCxDQUFZYyxTQUFaLEVBQXVCaEQsTUFBdkIsR0FBZ0MsQ0FBaEMsSUFBcUMsQ0FBQzhELGtCQUFRRyxPQUFSLEVBQTFDLEVBQTZEOztBQUV6RDtBQUNBLDRCQUFJUCxlQUFldEMsY0FBSXVDLGNBQUosRUFBbkI7QUFDSSw0QkFBR0QsZ0JBQWdCQSxhQUFhRSxRQUFoQyxFQUF5QztBQUNyQ1gsc0NBQVVXLFFBQVYsR0FBcUJGLGFBQWFFLFFBQWxDO0FBQ0FYLHNDQUFVWSxVQUFWLEdBQXVCSCxhQUFhRyxVQUFwQztBQUNIO0FBQ0wsNEJBQUcsS0FBS2xDLEtBQUwsQ0FBV1ksZUFBZCxFQUE4QjtBQUMxQjs7Ozs7Ozs7Ozs7O0FBWUg7QUFDSjtBQUNELHdCQUFJZixNQUFNLHVDQUFWO0FBQ0Esd0JBQUl5QixVQUFVeUMsVUFBZCxFQUEwQjtBQUN0QmxFLCtCQUFPLGlCQUFpQnlCLFVBQVV5QyxVQUFsQztBQUNIO0FBQ0Qsd0JBQUl6QyxVQUFVMEMsUUFBZCxFQUF3QjtBQUNwQm5FLCtCQUFPLGVBQWV5QixVQUFVMEMsUUFBaEM7QUFDSDtBQUNELHdCQUFJMUMsVUFBVTJDLFlBQWQsRUFBNEI7QUFDeEJwRSwrQkFBTyxtQkFBbUJ5QixVQUFVMkMsWUFBcEM7QUFDSDtBQUNELHdCQUFJM0MsVUFBVTRDLFVBQWQsRUFBMEI7QUFDdEJyRSwrQkFBTyxpQkFBaUJ5QixVQUFVNEMsVUFBbEM7QUFDSDtBQUNELHdCQUFJNUMsVUFBVTZDLFFBQWQsRUFBd0I7QUFDcEJ0RSwrQkFBTyxlQUFleUIsVUFBVTZDLFFBQWhDO0FBQ0g7QUFDRCx3QkFBSTdDLFVBQVVSLE9BQWQsRUFBdUI7QUFDbkJqQiwrQkFBTyxjQUFjeUIsVUFBVVIsT0FBL0I7QUFDSDtBQUNELHlCQUFLcEUsS0FBTCxDQUFXb0QsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0JGLEdBQXhCO0FBQ0E7QUFDSDtBQUNKLGFBcERELE1Bb0RPO0FBQ0gscUJBQUtuRCxLQUFMLENBQVcwSCxVQUFYO0FBQ0EscUJBQUtoRCxRQUFMLENBQWMsRUFBRWpCLFdBQVcsSUFBYixFQUFkO0FBQ0g7QUFDSjs7O21DQUVVM0IsSSxFQUFNNkYsQyxFQUFHO0FBQ2hCQSxjQUFFQyxjQUFGO0FBQ0FELGNBQUVFLGVBQUY7QUFDQSxnQkFBSS9FLFVBQVU7QUFDViw0QkFBWSxhQURGLEVBQ2lCLFVBQVUsOEJBRDNCLEVBQzJELGNBQWNDLGNBQUlDLFNBQUosTUFBbUIsRUFENUYsRUFDZ0csVUFBVSxDQUQxRyxFQUM2RyxTQUFTLDZCQUR0SCxFQUNxSixZQUFZLEVBRGpLLEVBQ3FLLGNBQWNsQixLQUFLRSxFQUFMLElBQVc7QUFEOUwsYUFBZDtBQUdBZSwwQkFBSUUsU0FBSixDQUFjLEVBQUVuQixNQUFNZ0IsT0FBUixFQUFkO0FBQ0EsZ0JBQUlJLGNBQWMsRUFBbEI7O0FBRUEsZ0JBQUlwQixLQUFLcUIsR0FBVCxFQUFjO0FBQ1ZELG9DQUFrQnBCLEtBQUtxQixHQUF2QjtBQUNILGFBRkQsTUFFTztBQUNIRCxpREFBK0JwQixLQUFLRSxFQUFwQztBQUNIOztBQUVELGlCQUFLaEMsS0FBTCxDQUFXb0QsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0JILFdBQXhCO0FBQ0g7OztxREF5QnFDO0FBQUEsZ0JBQVg0RSxJQUFXLHVFQUFOLEtBQU07O0FBQ2xDLGdCQUFJMUQsVUFBVSxLQUFLcEUsS0FBTCxDQUFXb0UsT0FBWCxJQUFzQixLQUFLZCxLQUFMLENBQVdTLGVBQWpDLElBQW9EK0QsSUFBbEU7QUFDQSxnQkFBSWhGLFVBQVU7QUFDViw0QkFBWSxhQURGLEVBQ2lCLG1CQUFnQnNCLFVBQVEsTUFBUixHQUFlLEVBQS9CLDBCQURqQixFQUMwRSxjQUFjckIsY0FBSUMsU0FBSixNQUFtQixFQUQzRyxFQUMrRyxVQUFVLENBRHpILEVBQzRILG1CQUFnQm9CLFVBQVEsT0FBUixHQUFnQixFQUFoQztBQUQ1SCxhQUFkO0FBR0FyQiwwQkFBSUUsU0FBSixDQUFjLEVBQUVuQixNQUFNZ0IsT0FBUixFQUFkO0FBQ0EsZ0JBQUlLLE1BQU0saUNBQVY7QUFDQSxnQkFBR2lCLE9BQUgsRUFBVztBQUNQakIsc0JBQU0scUNBQU47QUFDSDtBQUNELGlCQUFLbkQsS0FBTCxDQUFXb0QsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0JGLEdBQXhCO0FBQ0g7OztpQ0FFUTtBQUFBOztBQUNMLGdCQUFJK0MsT0FBTyxJQUFYO0FBQ0EsbUJBRUksS0FBS2xHLEtBQUwsQ0FBV3NFLFdBQVgsSUFBMEJWLE9BQU9DLElBQVAsQ0FBWSxLQUFLN0QsS0FBTCxDQUFXc0UsV0FBdkIsRUFBb0MzQyxNQUFwQyxHQUE2QyxDQUF2RSxJQUE0RSxLQUFLMkIsS0FBTCxDQUFXQyxrQkFBdkYsSUFBNkdLLE9BQU9DLElBQVAsQ0FBWSxLQUFLUCxLQUFMLENBQVdDLGtCQUF2QixFQUEyQzVCLE1BQTNDLEdBQW9ELENBQWpLLEdBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsbUJBQWYsRUFBbUMsT0FBTyxFQUFFb0csWUFBWSxFQUFkLEVBQTFDO0FBQ0ksOENBQUMsOEJBQUQsSUFBZSxhQUFhLElBQTVCLEdBREo7QUFFSSw4Q0FBQyxvQkFBRCxJQUFZLFVBQVU7QUFDbEJDLDJDQUFpQkMsaUJBQU9DLFlBQXhCLEdBQXVDLEtBQUtsSSxLQUFMLENBQVc4RSxRQUFYLENBQW9CcUQsUUFEekM7QUFFbEJDLHFDQUFVLGtCQUFrQixLQUE1QjtBQUNBO0FBSGtCLHFCQUF0QixFQUlHLFNBQVMsS0FKWixHQUZKO0FBT0k7QUFBQTtBQUFBLHNCQUFLLDhCQUEyQixLQUFLOUUsS0FBTCxDQUFXUSxhQUFYLEdBQTJCLGdCQUEzQixHQUE4QyxFQUF6RSxhQUFMLEVBQTJGLEtBQUksY0FBL0Y7QUFFUSx5QkFBSzlELEtBQUwsQ0FBVzJGLFlBQVgsSUFBMkIsS0FBSzNGLEtBQUwsQ0FBVzRGLE9BQXRDLEdBQWdELEVBQWhELEdBQ0ksS0FBSzVGLEtBQUwsQ0FBV3FJLE1BQVgsSUFBcUIsZUFBckIsSUFBd0MsS0FBS3JJLEtBQUwsQ0FBV3FJLE1BQVgsSUFBcUIsYUFBN0QsR0FDTTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmLEVBQTRCLFNBQVM7QUFBQSx1Q0FBTSxPQUFLckksS0FBTCxDQUFXb0QsT0FBWCxDQUFtQmtGLEVBQW5CLENBQXNCLENBQUMsQ0FBdkIsQ0FBTjtBQUFBLDZCQUFyQztBQUNFLCtEQUFLLEtBQUtoRyxTQUFlQSxHQUFHLHlCQUE1QjtBQURGLHFCQUROLEdBSU07QUFBQTtBQUFBLDBCQUFLLFdBQVUsWUFBZixFQUE0QixTQUFTO0FBQUEsdUNBQU0sT0FBS3RDLEtBQUwsQ0FBV29ELE9BQVgsQ0FBbUJDLElBQW5CLENBQXdCLEdBQXhCLENBQU47QUFBQSw2QkFBckM7QUFDRSwrREFBSyxLQUFLZixTQUFlQSxHQUFHLG1CQUE1QjtBQURGLHFCQVBsQjtBQVlRLHlCQUFLdEMsS0FBTCxDQUFXb0UsT0FBWCxHQUNJO0FBQUE7QUFBQSwwQkFBSyxzQ0FBbUMsS0FBS2QsS0FBTCxDQUFXUSxhQUFYLEdBQTJCLHNCQUEzQixHQUFvRCxFQUF2RixDQUFMLEVBQWtHLEtBQUksRUFBdEc7QUFDSSwrREFBSyxXQUFVLFlBQWYsRUFBNEIsS0FBS3hCLFNBQWVBLEdBQUcsa0JBQW5ELEdBREo7QUFFSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSwrQkFBYjtBQUFBO0FBQUEseUJBRko7QUFHSTtBQUFBO0FBQUEsOEJBQUksV0FBVSxlQUFkO0FBQUE7QUFBQTtBQUhKLHFCQURKLEdBUUk7QUFBQTtBQUFBLDBCQUFLLHNDQUFtQyxLQUFLZ0IsS0FBTCxDQUFXUSxhQUFYLEdBQTJCLHNCQUEzQixHQUFvRCxFQUF2RixDQUFMLEVBQWtHLEtBQUksRUFBdEc7QUFDSSwrREFBSyxXQUFVLFlBQWYsRUFBNEIsS0FBS3hCLFNBQWVBLEdBQUcsbUJBQW5ELEdBREo7QUFFSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSxlQUFiO0FBQUE7QUFBQSx5QkFGSjtBQUdJO0FBQUE7QUFBQSw4QkFBSSxXQUFVLGVBQWQ7QUFBQTtBQUF1QztBQUFBO0FBQUEsa0NBQU0sV0FBVSxhQUFoQjtBQUFBO0FBQWdDLHFDQUFLZ0IsS0FBTCxDQUFXQyxrQkFBWCxDQUE4QmdGO0FBQTlELDZCQUF2QztBQUFBO0FBQWlIO0FBQUE7QUFBQSxrQ0FBTSxXQUFVLGdCQUFoQjtBQUFBO0FBQW1DLHFDQUFLakYsS0FBTCxDQUFXQyxrQkFBWCxDQUE4QmlGO0FBQWpFLDZCQUFqSDtBQUFBO0FBQUE7QUFISjtBQXBCWixpQkFQSjtBQW9DUSxxQkFBS2xGLEtBQUwsQ0FBV0csU0FBWCxHQUNJLDhCQUFDLHNCQUFELGVBQW1CLEtBQUt6RCxLQUF4QixJQUErQixlQUFlLEtBQUtzRCxLQUFMLENBQVdDLGtCQUF6RCxFQUE2RSxnQkFBZ0IsS0FBS2tGLGNBQUwsQ0FBb0JwRyxJQUFwQixDQUF5QixJQUF6QixDQUE3RixFQUE2SCxRQUFRLEtBQUtpQixLQUFMLENBQVdJLE1BQWhKLEVBQXdKLGdCQUFnQixLQUFLZ0YsY0FBTCxDQUFvQnJHLElBQXBCLENBQXlCLElBQXpCLENBQXhLLEVBQXdNLGFBQWEsS0FBck4sSUFESixHQUNvTyxFQXJDNU87QUF1Q0ssaUJBQUMsS0FBS3JDLEtBQUwsQ0FBV29FLE9BQVosSUFBdUIsQ0FBQyxLQUFLZCxLQUFMLENBQVdTLGVBQW5DLEdBQ0ksOEJBQUMscUJBQUQsZUFBaUIsS0FBSy9ELEtBQXRCO0FBQ0csa0NBQWMsS0FBS0EsS0FBTCxDQUFXMkYsWUFENUI7QUFFRyw2QkFBUyxLQUFLM0YsS0FBTCxDQUFXNEYsT0FGdkI7QUFHRyw0QkFBUSxLQUFLNUYsS0FBTCxDQUFXcUksTUFIdEI7QUFJRyw2QkFBUyxLQUFLckksS0FBTCxDQUFXb0UsT0FKdkI7QUFLRyxpQ0FBYSxLQUFLcEUsS0FBTCxDQUFXZ0UsV0FMM0I7QUFNRyxnQ0FBWSxLQUFLMkUsVUFBTCxDQUFnQnRHLElBQWhCLENBQXFCLElBQXJCLENBTmY7QUFPRyw2QkFBUyxLQUFLMkUsT0FBTCxDQUFhM0UsSUFBYixDQUFrQixJQUFsQixDQVBaO0FBUUcsc0NBQWtCLEtBQUtpQixLQUFMLENBQVdLLGdCQVJoQztBQVNHLHdDQUFvQixLQUFLTCxLQUFMLENBQVdDLGtCQVRsQztBQVVHLGdEQUE0QixvQ0FBQ3pCLElBQUQ7QUFBQSwrQkFBUSxPQUFLOEcsMEJBQUwsQ0FBZ0M5RyxJQUFoQyxFQUFxQyxNQUFyQyxDQUFSO0FBQUEscUJBVi9CO0FBV0cseUNBQXFCLEtBQUtjLG1CQVg3QjtBQVlHLG1DQUFlLEtBQUtVLEtBQUwsQ0FBV1EsYUFaN0I7QUFhRyxvQ0FBZ0IsS0FBSytFLGNBQUwsQ0FBb0J4RyxJQUFwQixDQUF5QixJQUF6QixDQWJuQjtBQWNHLDRCQUFVLEtBQUt5RyxNQUFMLENBQVl6RyxJQUFaLENBQWlCLElBQWpCO0FBZGIsbUJBREosR0FpQkksRUF4RFQ7QUEwREsscUJBQUtyQyxLQUFMLENBQVdvRSxPQUFYLElBQXNCLEtBQUtkLEtBQUwsQ0FBV1MsZUFBakMsR0FDRyw4QkFBQyxxQkFBRCxlQUFpQixLQUFLL0QsS0FBdEI7QUFDSSxrQ0FBYyxLQUFLQSxLQUFMLENBQVcyRixZQUQ3QjtBQUVJLDZCQUFTLEtBQUszRixLQUFMLENBQVc0RixPQUZ4QjtBQUdJLDRCQUFRLEtBQUs1RixLQUFMLENBQVdxSSxNQUh2QjtBQUlJLDZCQUFTLEtBQUtySSxLQUFMLENBQVdvRSxPQUp4QjtBQUtJLGlDQUFhLEtBQUtwRSxLQUFMLENBQVdnRSxXQUw1QjtBQU1JLGdDQUFZLEtBQUsyRSxVQUFMLENBQWdCdEcsSUFBaEIsQ0FBcUIsSUFBckIsQ0FOaEI7QUFPSSw2QkFBUyxLQUFLMkUsT0FBTCxDQUFhM0UsSUFBYixDQUFrQixJQUFsQixDQVBiO0FBUUksc0NBQWtCLEtBQUtpQixLQUFMLENBQVdLLGdCQVJqQztBQVNJLHdDQUFvQixLQUFLTCxLQUFMLENBQVdDLGtCQVRuQztBQVVJLGdEQUE0QjtBQUFBLDRCQUFDekIsSUFBRCx1RUFBTSxLQUFOO0FBQUEsK0JBQWMsT0FBSzhHLDBCQUFMLENBQWdDOUcsSUFBaEMsRUFBcUMsTUFBckMsQ0FBZDtBQUFBLHFCQVZoQztBQVdJLHlDQUFxQixLQUFLYyxtQkFYOUI7QUFZSSxtQ0FBZSxLQUFLVSxLQUFMLENBQVdRLGFBWjlCO0FBYUksb0NBQWdCLEtBQUsrRSxjQUFMLENBQW9CeEcsSUFBcEIsQ0FBeUIsSUFBekIsQ0FicEI7QUFjSSw0QkFBVSxLQUFLeUcsTUFBTCxDQUFZekcsSUFBWixDQUFpQixJQUFqQjtBQWRkLG1CQURILEdBaUJJLEVBM0VUO0FBOEVRLHFCQUFLaUIsS0FBTCxDQUFXVyxjQUFYLEdBQTRCLDhCQUFDLG9CQUFELElBQVEsT0FBTyxLQUFLakUsS0FBcEIsRUFBMkIsUUFBUSxLQUFLK0ksYUFBTCxDQUFtQjFHLElBQW5CLENBQXdCLElBQXhCLENBQW5DLEVBQWtFLHlCQUF5QixLQUEzRixHQUE1QixHQUFrSSxFQTlFMUk7QUFnRkksOENBQUMsMEJBQUQsSUFBWSxPQUFPLElBQW5CO0FBaEZKLGFBREosR0FtRk0sMENBckZWO0FBdUZIOzs7O0VBMVZxQkUsZ0JBQU1DLFM7O2tCQTZWakJHLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlXZjs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBSkEsSUFBTUYsY0FBY0MsbUJBQU9BLENBQUMsMERBQVIsQ0FBcEI7O0lBTU1zRyxXOzs7QUFDRix5QkFBWWhKLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4SEFDVEEsS0FEUzs7QUFBQSxjQWlFbkJpSixTQWpFbUIsR0FpRVAsWUFBTTtBQUNkLGdCQUFJbkgsT0FBTztBQUNQLDRCQUFZLGFBREwsRUFDb0IsVUFBVSxrQkFEOUIsRUFDa0QsY0FBY2lCLGNBQUlDLFNBQUosTUFBbUIsRUFEbkYsRUFDdUYsVUFBVSxDQURqRyxFQUNvRyxTQUFTO0FBRDdHLGFBQVg7QUFHQUQsMEJBQUlFLFNBQUosQ0FBYyxFQUFFbkIsTUFBTUEsSUFBUixFQUFkO0FBQ0EsZ0JBQU1vSCxhQUFhcEosU0FBU0MsY0FBVCxDQUF3QixXQUF4QixDQUFuQjtBQUNBLGdCQUFNb0osV0FBV3JKLFNBQVNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBakI7QUFDQW1KLHVCQUFXRSxZQUFYLEdBQTBCLFlBQU07QUFDNUJDO0FBQ0gsYUFGRDtBQUdBLHFCQUFTQSxVQUFULEdBQXNCO0FBQ2xCLG9CQUFJQyxJQUFJSixXQUFXSyxXQUFuQjtBQUNBQyx5QkFBU0MsU0FBVCxHQUFxQmhKLEtBQUtpSixLQUFMLENBQVdKLENBQVgsSUFBZ0IsR0FBckM7QUFDSDtBQUNELGdCQUFJRSxXQUFXMUosU0FBU0MsY0FBVCxDQUF3QixZQUF4QixDQUFmO0FBQ0F5SixxQkFBU0csS0FBVCxDQUFlQyxPQUFmLEdBQXlCLE9BQXpCO0FBQ0E5SixxQkFBUytKLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLFlBQU07QUFDdENYLDJCQUFXWSxLQUFYO0FBQ0FYLHlCQUFTUSxLQUFULENBQWVJLE9BQWYsR0FBeUIsQ0FBekI7QUFFSCxhQUpEO0FBS0FiLHVCQUFXVyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxZQUFNO0FBQ3ZDVix5QkFBU1EsS0FBVCxDQUFlSSxPQUFmLEdBQXlCLENBQXpCO0FBRUgsYUFIRDtBQUlBLGdCQUFJYixXQUFXYyxNQUFmLEVBQXVCO0FBQ25CZCwyQkFBV2UsSUFBWDtBQUNBZCx5QkFBU1EsS0FBVCxDQUFlSSxPQUFmLEdBQXlCLENBQXpCO0FBQ0gsYUFIRCxNQUdPO0FBQ0hiLDJCQUFXWSxLQUFYO0FBQ0FYLHlCQUFTUSxLQUFULENBQWVJLE9BQWYsR0FBeUIsQ0FBekI7QUFDSDtBQUNKLFNBakdrQjs7QUFBQSxjQW1HbkJHLFdBbkdtQixHQW1HTCxZQUFNO0FBQ2hCLGdCQUFJcEksT0FBTztBQUNQcUksMEJBQVVoRSxPQUFPckIsUUFBUCxDQUFnQnFELFFBQWhCLENBQXlCaUMsS0FBekIsQ0FBK0IsR0FBL0IsRUFBb0MsQ0FBcEMsSUFBeUNqRSxPQUFPckIsUUFBUCxDQUFnQkMsTUFBaEIsQ0FBdUJzRixPQUF2QixDQUErQixJQUEvQixFQUFxQyxHQUFyQyxDQUQ1QztBQUVQQywwQkFBVTtBQUZILGFBQVg7QUFJQSxrQkFBS3RLLEtBQUwsQ0FBV3VLLHVCQUFYLENBQW1DekksSUFBbkMsRUFBeUMwSSxJQUF6QyxDQUE4QyxVQUFDL0YsSUFBRCxFQUFVO0FBQ3BEZ0csMkJBQVcsWUFBTTtBQUNieEQsMkNBQVNDLElBQVQsQ0FBYyxFQUFFQyxLQUFLLGVBQVAsRUFBd0JDLE1BQU0sbUJBQTlCLEVBQWQ7QUFDSCxpQkFGRCxFQUVHLEdBRkg7QUFHSCxhQUpELEVBSUdzRCxLQUpILENBSVMsVUFBQy9DLENBQUQsRUFBTztBQUNaOEMsMkJBQVcsWUFBTTtBQUNieEQsMkNBQVNDLElBQVQsQ0FBYyxFQUFFQyxLQUFLLGVBQVAsRUFBd0JDLE1BQU0sWUFBOUIsRUFBZDtBQUNILGlCQUZELEVBRUcsR0FGSDtBQUdILGFBUkQ7QUFTSCxTQWpIa0I7O0FBRWYsY0FBSzlELEtBQUwsR0FBYTtBQUNUcUgsdUJBQVcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixFQUEvQixFQUFtQyxFQUFuQyxFQUF1QyxFQUF2QyxFQUEyQyxFQUEzQyxFQUErQyxFQUEvQyxFQUFtRCxFQUFuRCxDQURGO0FBRVRsSCx1QkFBVztBQUZGLFNBQWI7QUFGZTtBQU1sQjs7OztzQ0FFYW1ILEssRUFBT0MsSyxFQUFPO0FBQ3hCLGdCQUFJQyxPQUFPLEdBQUdDLE1BQUgsQ0FBVSxLQUFLekgsS0FBTCxDQUFXcUgsU0FBckIsQ0FBWDtBQUNBLGdCQUFJekUsT0FBTyxJQUFYO0FBQ0EsZ0JBQUk4RSxRQUFRLEtBQVo7QUFDQUYsbUJBQU9BLEtBQUs1RixNQUFMLENBQVksVUFBQ0MsQ0FBRCxFQUFPO0FBQ3RCLG9CQUFJQSxLQUFLeUYsS0FBVCxFQUFnQjtBQUNaSSw0QkFBUSxJQUFSO0FBQ0EsMkJBQU8sS0FBUDtBQUNIO0FBQ0QsdUJBQU8sSUFBUDtBQUNILGFBTk0sQ0FBUDtBQU9BLGdCQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNSRixxQkFBS3pILElBQUwsQ0FBVXVILEtBQVY7QUFDSDs7QUFFRDFFLGlCQUFLeEIsUUFBTCxDQUFjLEVBQUVpRyxXQUFXRyxJQUFiLEVBQWQ7QUFDSDs7O2lDQUNRO0FBQ0wsZ0JBQU1HLFNBQVN4SSxZQUFZb0MsS0FBWixDQUFrQixLQUFLN0UsS0FBTCxDQUFXOEUsUUFBWCxDQUFvQkMsTUFBdEMsQ0FBZjtBQUNBLGdCQUFJNEQsYUFBYSxLQUFLM0ksS0FBTCxDQUFXdUQsa0JBQVgsSUFBaUMsS0FBS3ZELEtBQUwsQ0FBV3VELGtCQUFYLENBQThCdkIsRUFBaEY7QUFDQSxnQkFBSTJHLFVBQUosRUFBZ0I7O0FBRVosb0JBQUl4RSxPQUFPLEVBQVg7QUFDQSxvQkFBSSxLQUFLbkUsS0FBTCxDQUFXa0wsZUFBWCxJQUE4QixLQUE5QixJQUF1QyxLQUFLbEwsS0FBTCxDQUFXbUwscUJBQWxELElBQTJFLEtBQUtuTCxLQUFMLENBQVdtTCxxQkFBWCxDQUFpQ3hKLE1BQWhILEVBQXdIO0FBQ3BId0MsMkJBQU8sS0FBS25FLEtBQUwsQ0FBV21MLHFCQUFYLENBQWlDakcsTUFBakMsQ0FBd0M7QUFBQSwrQkFBS0MsRUFBRW5ELEVBQUYsSUFBUTJHLFVBQWI7QUFBQSxxQkFBeEMsQ0FBUDtBQUVILGlCQUhELE1BR08sSUFBSSxLQUFLM0ksS0FBTCxDQUFXa0wsZUFBWCxJQUE4QixLQUE5QixJQUF1QyxLQUFLbEwsS0FBTCxDQUFXb0wscUJBQWxELElBQTJFLEtBQUtwTCxLQUFMLENBQVdvTCxxQkFBWCxDQUFpQ3pKLE1BQWhILEVBQXdIO0FBQzNId0MsMkJBQU8sS0FBS25FLEtBQUwsQ0FBV29MLHFCQUFYLENBQWlDbEcsTUFBakMsQ0FBd0M7QUFBQSwrQkFBS0MsRUFBRW5ELEVBQUYsSUFBUTJHLFVBQWI7QUFBQSxxQkFBeEMsQ0FBUDtBQUNIOztBQUVELG9CQUFJeEUsUUFBUUEsS0FBS3hDLE1BQWpCLEVBQXlCO0FBQ3JCLHlCQUFLM0IsS0FBTCxDQUFXNEcsaUJBQVgsQ0FBNkIsRUFBN0IsRUFBaUN6QyxLQUFLLENBQUwsQ0FBakMsRUFEcUIsQ0FDcUI7QUFDN0M7QUFFSjtBQUNELGdCQUFJLEtBQUtuRSxLQUFMLENBQVdpRyxlQUFmLEVBQWdDO0FBQzVCLG9CQUFJOUMsWUFBSjtBQUNBLG9CQUFJOEgsT0FBT0ksV0FBWCxFQUF3QjtBQUNwQmxJLDBCQUFNOEgsT0FBT0ksV0FBYjtBQUNBLHdCQUFJSixPQUFPSyxXQUFQLElBQXNCLENBQUNuSSxJQUFJb0ksUUFBSixDQUFhLGFBQWIsQ0FBM0IsRUFBd0Q7QUFDcERwSSxpREFBdUI4SCxPQUFPSyxXQUE5QjtBQUNIO0FBQ0Qsd0JBQUlMLE9BQU9PLFNBQVgsRUFBc0I7QUFDbEJySSwrQ0FBcUI4SCxPQUFPTyxTQUE1QjtBQUNIO0FBQ0QseUJBQUt4TCxLQUFMLENBQVdvRCxPQUFYLENBQW1CQyxJQUFuQixDQUF3QkYsR0FBeEI7QUFDSDtBQUNKLGFBWkQsTUFZTztBQUNILHFCQUFLbkQsS0FBTCxDQUFXb0QsT0FBWCxDQUFtQmtGLEVBQW5CLENBQXNCLENBQUMsQ0FBdkI7QUFDSDtBQUNKOzs7eUNBRWdCO0FBQ2IsaUJBQUs1RCxRQUFMLENBQWMsRUFBRWpCLFdBQVcsS0FBYixFQUFkO0FBQ0g7O0FBRUQ7Ozs7K0JBbURPN0QsSSxFQUFNO0FBQ1QsZ0JBQUlLLFdBQVcsb0JBQWY7QUFDQSxnQkFBSUosUUFBUUMsU0FBU0MsY0FBVCxDQUF3QkUsUUFBeEIsQ0FBWjs7QUFFQSxnQkFBSUosS0FBSixFQUFXO0FBQ1Asb0JBQUlNLGdCQUFnQk4sTUFBTU8sV0FBMUI7QUFDQSxvQkFBSUUsWUFBWVQsTUFBTTRMLFFBQU4sSUFBa0I1TCxNQUFNNEwsUUFBTixDQUFlOUosTUFBakMsR0FBMEM5QixNQUFNNEwsUUFBTixDQUFlOUosTUFBekQsR0FBa0UsQ0FBbEY7QUFDQSxvQkFBSXRCLGdCQUFnQlIsTUFBTTZMLFdBQU4sR0FBb0I3TCxNQUFNNkwsV0FBMUIsR0FBd0MsSUFBNUQ7QUFDQSxvQkFBSWxMLFlBQVlDLEtBQUtDLElBQUwsQ0FBVUwsZ0JBQWdCQyxTQUExQixDQUFoQjs7QUFFQSxvQkFBSUssYUFBYWQsTUFBTWUsVUFBdkI7O0FBRUEsb0JBQUloQixRQUFRLE9BQVosRUFBcUI7QUFDakJDLDBCQUFNbUIsTUFBTixDQUFhLEVBQUVDLE1BQU1OLGFBQWFSLGFBQXJCLEVBQW9DZSxVQUFVLFFBQTlDLEVBQWI7QUFDQSx3QkFBSWIsaUJBQWtCTSxhQUFhLElBQUlSLGFBQXZDLEVBQXVEO0FBQ25ETCxpQ0FBU0MsY0FBVCxDQUEyQkUsUUFBM0IsdUJBQXVEa0IsU0FBdkQsQ0FBaUVDLEdBQWpFLENBQXFFLFFBQXJFO0FBQ0g7QUFDRHRCLDZCQUFTQyxjQUFULENBQTJCRSxRQUEzQix3QkFBd0RrQixTQUF4RCxDQUFrRUUsTUFBbEUsQ0FBeUUsUUFBekU7QUFDSCxpQkFORCxNQU1PO0FBQ0h4QiwwQkFBTW1CLE1BQU4sQ0FBYSxFQUFFQyxNQUFNTixhQUFhUixhQUFyQixFQUFvQ2UsVUFBVSxRQUE5QyxFQUFiO0FBQ0Esd0JBQUlQLGFBQWFSLGFBQWIsSUFBOEIsQ0FBbEMsRUFBcUM7QUFDakNMLGlDQUFTQyxjQUFULENBQTJCRSxRQUEzQix3QkFBd0RrQixTQUF4RCxDQUFrRUMsR0FBbEUsQ0FBc0UsUUFBdEU7QUFDSDtBQUNEdEIsNkJBQVNDLGNBQVQsQ0FBMkJFLFFBQTNCLHVCQUF1RGtCLFNBQXZELENBQWlFRSxNQUFqRSxDQUF3RSxRQUF4RTtBQUNIO0FBQ0o7QUFDSjs7O2lDQUdRO0FBQUE7O0FBQ0wsZ0JBQUk2RSxPQUFPLElBQVg7O0FBRUEsZ0JBQUl5RixtQkFBbUIsS0FBdkI7QUFDQTtBQUNJLHFCQUFLM0wsS0FBTCxDQUFXdUQsa0JBQVgsSUFBaUNLLE9BQU9DLElBQVAsQ0FBWSxLQUFLN0QsS0FBTCxDQUFXdUQsa0JBQXZCLEVBQTJDNUIsTUFBM0MsR0FBb0QsQ0FBckYsR0FDSWlDLE9BQU9nSSxPQUFQLENBQWUsS0FBSzVMLEtBQUwsQ0FBV3NFLFdBQVgsQ0FBdUJFLFVBQXRDLEVBQWtEM0MsR0FBbEQsQ0FBc0QsZ0JBQXdCO0FBQUE7QUFBQSx3QkFBYkUsR0FBYTtBQUFBLHdCQUFSOEosS0FBUTs7QUFDMUUsd0JBQUlDLFNBQVNELE1BQU03SixFQUFmLEtBQXNCOEosU0FBUzVGLEtBQUtsRyxLQUFMLENBQVd1RCxrQkFBWCxDQUE4QnZCLEVBQXZDLENBQTFCLEVBQXNFO0FBQ2xFMkosMkNBQW1CLElBQW5CO0FBQ0g7QUFDSixpQkFKRCxDQURKLEdBTU0sRUFOTjtBQU9IOztBQUVELG1CQUVJLEtBQUszTCxLQUFMLENBQVdzRSxXQUFYLElBQTBCVixPQUFPQyxJQUFQLENBQVksS0FBSzdELEtBQUwsQ0FBV3NFLFdBQXZCLEVBQW9DM0MsTUFBcEMsR0FBNkMsQ0FBdkUsSUFBNEUsS0FBSzNCLEtBQUwsQ0FBV3VELGtCQUF2RixJQUE2R0ssT0FBT0MsSUFBUCxDQUFZLEtBQUs3RCxLQUFMLENBQVd1RCxrQkFBdkIsRUFBMkM1QixNQUEzQyxHQUFvRCxDQUFqSyxHQUNJO0FBQUMsK0JBQUQsQ0FBTyxRQUFQO0FBQUE7QUFFUSxxQkFBSzJCLEtBQUwsQ0FBV0csU0FBWCxHQUNJLDhCQUFDLHNCQUFELGVBQW1CLEtBQUt6RCxLQUF4QixJQUErQixnQkFBZ0IsS0FBSzBJLGNBQUwsQ0FBb0JyRyxJQUFwQixDQUF5QixJQUF6QixDQUEvQyxFQUErRSxhQUFhLElBQTVGLElBREosR0FDMkcsRUFIbkg7QUFNSTtBQUFBO0FBQUEsc0JBQVMsb0VBQWlFLEtBQUtyQyxLQUFMLENBQVc4RCxhQUFYLEdBQTJCLGNBQTNCLEdBQTRDLEVBQTdHLENBQVQ7QUFDSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxpQ0FBZjtBQUNJLHNEQUFDLGlCQUFELE9BREo7QUFFSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxzQkFBZjtBQUNJO0FBQUE7QUFBQSxrQ0FBSyxXQUFVLGtCQUFmO0FBQ0k7QUFBQTtBQUFBLHNDQUFLLFdBQVUsZ0NBQWY7QUFDSTtBQUFBO0FBQUEsMENBQUssV0FBVSxvQkFBZjtBQUVRLDZDQUFLOUQsS0FBTCxDQUFXdUQsa0JBQVgsSUFBaUNLLE9BQU9DLElBQVAsQ0FBWSxLQUFLN0QsS0FBTCxDQUFXdUQsa0JBQXZCLEVBQTJDNUIsTUFBM0MsR0FBb0QsQ0FBckYsSUFBMEYsS0FBSzNCLEtBQUwsQ0FBV2dFLFdBQXJHLElBQW9ILEtBQUtoRSxLQUFMLENBQVdzRSxXQUEvSCxJQUE4SSxLQUFLdEUsS0FBTCxDQUFXc0UsV0FBWCxDQUF1QkUsVUFBckssSUFBbUwsS0FBS3hFLEtBQUwsQ0FBV3NFLFdBQVgsQ0FBdUJFLFVBQXZCLENBQWtDN0MsTUFBbEMsR0FBMkMsQ0FBOU4sR0FDSTtBQUFBO0FBQUEsOENBQUcsU0FBUyxLQUFLM0IsS0FBTCxDQUFXNkksY0FBWCxDQUEwQnhHLElBQTFCLENBQStCLElBQS9CLEVBQXFDLElBQXJDLENBQVosRUFBd0QsMkJBQXdCc0osbUJBQW1CLFFBQW5CLEdBQThCLEVBQXRELENBQXhEO0FBQUE7QUFBeUg7QUFBQTtBQUFBO0FBQUEsNkRBQzlHLEtBQUszTCxLQUFMLENBQVd1RCxrQkFBWCxDQUE4QmlGLFVBRGdGO0FBQUE7QUFBekgseUNBREosR0FJTSxFQU5kO0FBU1EsNkNBQUt4SSxLQUFMLENBQVdnRSxXQUFYLElBQTBCLEtBQUtoRSxLQUFMLENBQVdzRSxXQUFyQyxJQUFvRCxLQUFLdEUsS0FBTCxDQUFXc0UsV0FBWCxDQUF1QkMsS0FBM0UsSUFBb0YsS0FBS3ZFLEtBQUwsQ0FBV3NFLFdBQVgsQ0FBdUJDLEtBQXZCLENBQTZCNUMsTUFBN0IsR0FBc0MsQ0FBMUgsR0FFSWlDLE9BQU9nSSxPQUFQLENBQWUsS0FBSzVMLEtBQUwsQ0FBV3NFLFdBQVgsQ0FBdUJDLEtBQXRDLEVBQTZDMUMsR0FBN0MsQ0FBaUQsaUJBQXdCO0FBQUE7QUFBQSxnREFBYkUsR0FBYTtBQUFBLGdEQUFSOEosS0FBUTs7QUFDckUsbURBQU87QUFBQTtBQUFBLGtEQUFHLFNBQVMzRixLQUFLbEcsS0FBTCxDQUFXMkksVUFBWCxDQUFzQnRHLElBQXRCLENBQTJCNkQsSUFBM0IsRUFBaUMyRixLQUFqQyxDQUFaLEVBQXFELEtBQUs5SixHQUExRCxFQUErRCwyQkFBd0I4SixNQUFNN0osRUFBTixJQUFZa0UsS0FBS2xHLEtBQUwsQ0FBVzJELGdCQUF2QixHQUEwQyxRQUExQyxHQUFxRCxFQUE3RSxDQUEvRDtBQUFtSmtJLHNEQUFNRSxTQUF6SjtBQUFBO0FBQW9LO0FBQUE7QUFBQTtBQUFBLGlFQUNoS0YsTUFBTXJELFVBRDBKO0FBQUE7QUFBcEssNkNBQVA7QUFLSCx5Q0FORCxDQUZKLEdBU007QUFsQmQscUNBREo7QUF3QlEseUNBQUt4SSxLQUFMLENBQVdnTSxLQUFYLEdBQ0k7QUFBQTtBQUFBO0FBQ0ksK0VBQUssS0FBSSwrRUFBVCxFQUF5RixXQUFVLGdCQUFuRztBQURKLHFDQURKLEdBSU0sRUE1QmQ7QUE4Qkk7QUFBQTtBQUFBLDBDQUFLLFdBQVUsK0JBQWY7QUFDSTtBQUFBO0FBQUEsOENBQUksV0FBVSxrQkFBZDtBQUFBO0FBQUEseUNBREo7QUFFSTtBQUFBO0FBQUEsOENBQUssV0FBVSx3QkFBZjtBQUNJO0FBQUE7QUFBQSxrREFBSyxXQUFVLG1CQUFmO0FBQ0ksdUZBQUssS0FBSzFKLFNBQWVBLEdBQUcsY0FBNUIsR0FESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQXVCLDZGQUF2QjtBQUE2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQUE3QjtBQUFBO0FBQUE7QUFGSiw2Q0FESjtBQUtJO0FBQUE7QUFBQSxrREFBSyxXQUFVLG1CQUFmO0FBQ0ksdUZBQUssS0FBS0EsU0FBZUEsR0FBRyxxQkFBNUIsR0FESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQW9CLDZGQUFwQjtBQUEwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQUExQjtBQUFBO0FBQUE7QUFGSiw2Q0FMSjtBQVNJO0FBQUE7QUFBQSxrREFBSyxXQUFVLG1CQUFmO0FBQ0ksdUZBQUssS0FBS0EsU0FBZUEsR0FBRyxzQkFBNUIsR0FESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxREFBUjtBQUFBO0FBQThCLDZGQUE5QjtBQUFBO0FBQUE7QUFGSjtBQVRKO0FBRkoscUNBOUJKO0FBa0RJO0FBQUE7QUFBQSwwQ0FBSyxXQUFVLE9BQWY7QUFDSTtBQUFBO0FBQUEsOENBQUksV0FBVSxrQkFBZDtBQUFBO0FBQUEseUNBREo7QUFFSTtBQUFBO0FBQUEsOENBQUssV0FBVSxzQkFBZjtBQUNJO0FBQUE7QUFBQSxrREFBSyxXQUFVLGlCQUFmO0FBQ0k7QUFBQTtBQUFBLHNEQUFJLFdBQVUsZUFBZDtBQUFBO0FBQUEsaURBREo7QUFFSTtBQUFBO0FBQUEsc0RBQUssV0FBVSxxQkFBZjtBQUNLLHlEQUFLdEMsS0FBTCxDQUFXc0UsV0FBWCxJQUEwQixLQUFLdEUsS0FBTCxDQUFXc0UsV0FBWCxDQUF1QkUsVUFBakQsSUFBK0QsS0FBS3hFLEtBQUwsQ0FBV3NFLFdBQVgsQ0FBdUJFLFVBQXZCLENBQWtDN0MsTUFBbEMsR0FBMkMsQ0FBMUcsR0FDR2lDLE9BQU9nSSxPQUFQLENBQWUsS0FBSzVMLEtBQUwsQ0FBV3NFLFdBQVgsQ0FBdUJFLFVBQXRDLEVBQWtEM0MsR0FBbEQsQ0FBc0QsaUJBQXdCO0FBQUE7QUFBQSw0REFBYkUsR0FBYTtBQUFBLDREQUFSOEosS0FBUTs7QUFDMUUsK0RBQU87QUFBQTtBQUFBLDhEQUFLLEtBQUs5SixHQUFWLEVBQWUsaUNBQThCOEosTUFBTTdKLEVBQU4sSUFBWWtFLEtBQUtsRyxLQUFMLENBQVcyRCxnQkFBdkIsR0FBMEMsYUFBMUMsR0FBMEQsRUFBeEYsQ0FBZixFQUE2RyxTQUFTdUMsS0FBS2xHLEtBQUwsQ0FBVzZJLGNBQVgsQ0FBMEJ4RyxJQUExQixDQUErQjZELElBQS9CLEVBQXFDMkYsS0FBckMsRUFBNEMsS0FBNUMsQ0FBdEg7QUFDSDtBQUFBO0FBQUEsa0VBQUssV0FBVSxlQUFmO0FBQ0k7QUFBQTtBQUFBLHNFQUFHLFdBQVUsZUFBYjtBQUFBO0FBQ2VBLDBFQUFNSSxxQkFEckI7QUFBQTtBQUM2Q0gsNkVBQVNELE1BQU1JLHFCQUFmLElBQXdDLENBQXhDLEdBQTRDLFNBQTVDLEdBQXdEO0FBRHJHLGlFQURKO0FBSUk7QUFBQTtBQUFBLHNFQUFHLFdBQVUsYUFBYjtBQUFBO0FBQXNDSiwwRUFBTUssTUFBNUM7QUFBQTtBQUE0REwsMEVBQU05RSxXQUFOLEdBQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUEscUVBQXBCLEdBQTJDO0FBQXZHO0FBSkosNkRBREc7QUFPSDtBQUFBO0FBQUEsa0VBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLHNFQUFHLFdBQVUsU0FBYjtBQUF1QjtBQUFBO0FBQUEsMEVBQU0sV0FBVSxjQUFoQjtBQUFBO0FBQWlDOEUsOEVBQU10RDtBQUF2QyxxRUFBdkI7QUFBQTtBQUE0RXNELDBFQUFNckQ7QUFBbEYsaUVBREo7QUFFSTtBQUFBO0FBQUEsc0VBQUssV0FBVSxxQkFBZjtBQUNJLDJHQUFLLFdBQVUsY0FBZixHQURKO0FBRUksMkdBQUssV0FBVSxhQUFmLEVBQTZCLEtBQUtsRyxTQUFlQSxHQUFHLGtCQUFwRDtBQUZKO0FBRko7QUFQRyx5REFBUDtBQWVILHFEQWhCRCxDQURILEdBa0JLO0FBbkJWLGlEQUZKO0FBeUJRLHFEQUFLdEMsS0FBTCxDQUFXdUQsa0JBQVgsSUFBaUNLLE9BQU9DLElBQVAsQ0FBWSxLQUFLN0QsS0FBTCxDQUFXdUQsa0JBQXZCLEVBQTJDNUIsTUFBM0MsR0FBb0QsQ0FBckYsSUFBMEYsS0FBSzNCLEtBQUwsQ0FBV2dFLFdBQXJHLElBQW9ILEtBQUtoRSxLQUFMLENBQVdzRSxXQUEvSCxJQUE4SSxLQUFLdEUsS0FBTCxDQUFXc0UsV0FBWCxDQUF1QkUsVUFBckssSUFBbUwsS0FBS3hFLEtBQUwsQ0FBV3NFLFdBQVgsQ0FBdUJFLFVBQXZCLENBQWtDN0MsTUFBbEMsR0FBMkMsQ0FBOU4sSUFBbU8sS0FBSzNCLEtBQUwsQ0FBV3VELGtCQUFYLENBQThCNEksc0JBQWpRLEdBQ0k7QUFBQTtBQUFBLHNEQUFHLFdBQVUsa0JBQWI7QUFBQTtBQUF1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXZFLGlEQURKLEdBR007QUE1QmQ7QUFESjtBQUZKLHFDQWxESjtBQTJGSTtBQUFBO0FBQUEsMENBQUssV0FBVSx5QkFBZjtBQUNJO0FBQUE7QUFBQSw4Q0FBSyxXQUFVLHVCQUFmO0FBRVEsaURBQUtuTSxLQUFMLENBQVdvTSxZQUFYLElBQTJCLEtBQUtwTSxLQUFMLENBQVdvTSxZQUFYLENBQXdCQyxhQUFuRCxJQUFvRSxLQUFLck0sS0FBTCxDQUFXb00sWUFBWCxDQUF3QkMsYUFBeEIsQ0FBc0MxSyxNQUF0QyxHQUErQyxDQUFuSCxJQUNBO0FBQUE7QUFBQSxrREFBSyxXQUFVLDZCQUFmO0FBQ0k7QUFBQTtBQUFBLHNEQUFLLFdBQVUsa0JBQWY7QUFDSTtBQUFBO0FBQUEsMERBQUksT0FBTyxFQUFFbEMsVUFBVSxNQUFaLEVBQVg7QUFBQTtBQUFBLHFEQURKO0FBRUk7QUFBQTtBQUFBLDBEQUFNLE9BQU8sRUFBRUEsVUFBVSxNQUFaLEVBQWIsRUFBbUMsU0FBUztBQUFBLHVFQUFNLE9BQUtPLEtBQUwsQ0FBVzRJLDBCQUFYLEVBQU47QUFBQSw2REFBNUM7QUFBQTtBQUFBO0FBRkosaURBREo7QUFLSTtBQUFBO0FBQUEsc0RBQUssV0FBVSxvQkFBZjtBQUNJO0FBQUE7QUFBQSwwREFBSyxXQUFVLDZEQUFmO0FBRVEsNkRBQUs1SSxLQUFMLENBQVdvTSxZQUFYLENBQXdCQyxhQUF4QixDQUFzQ3hLLEdBQXRDLENBQTBDLFVBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFlO0FBQ3JELG1FQUFPO0FBQUE7QUFBQSxrRUFBRyxLQUFRQSxHQUFSLFNBQWVELEtBQUtFLEVBQXZCLEVBQTZCLE1BQU1GLEtBQUtxQixHQUFMLEdBQVdyQixLQUFLcUIsR0FBaEIsR0FBc0JyQixLQUFLRSxFQUE5RCxFQUFrRSxXQUFVLGNBQTVFLEVBQTJGLFNBQVMsaUJBQUMyRixDQUFELEVBQU87QUFDOUdBLDBFQUFFQyxjQUFGO0FBQ0EsK0VBQUs1SCxLQUFMLENBQVc0QyxtQkFBWCxDQUErQixJQUEvQixFQUFxQ2QsSUFBckM7QUFDSCxxRUFITTtBQUlIO0FBQUE7QUFBQSxzRUFBSyxXQUFVLGdCQUFmO0FBRVFBLHlFQUFLSSxJQUFMLElBQWEsdUNBQUssT0FBTyxFQUFFQyxPQUFPLE1BQVQsRUFBWixFQUErQixXQUFVLFdBQXpDLEVBQXFELEtBQUtMLEtBQUtJLElBQS9EO0FBRnJCLGlFQUpHO0FBVUNKLHFFQUFLd0ssY0FBTCxHQUNJO0FBQUE7QUFBQSxzRUFBRyxXQUFVLGlCQUFiO0FBQUE7QUFBcUNSLDZFQUFTaEssS0FBS3dLLGNBQWQsQ0FBckM7QUFBQTtBQUFBLGlFQURKLEdBQ21GO0FBWHBGLDZEQUFQO0FBY0gseURBZkQ7QUFGUjtBQURKO0FBTEosNkNBSFI7QUFvQ1EsaURBQUt0TSxLQUFMLENBQVd1TSxlQUFYLElBQThCLEtBQUt2TSxLQUFMLENBQVd1TSxlQUFYLENBQTJCQyxTQUF6RCxJQUFzRSxLQUFLeE0sS0FBTCxDQUFXdU0sZUFBWCxDQUEyQkMsU0FBM0IsQ0FBcUM3SyxNQUFyQyxHQUE4QyxDQUFwSCxJQUNBO0FBQUE7QUFBQSxrREFBSyxXQUFVLDZCQUFmO0FBQ0k7QUFBQTtBQUFBLHNEQUFLLFdBQVUsa0JBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosaURBREo7QUFJSTtBQUFBO0FBQUEsc0RBQUssV0FBVSxvQkFBZjtBQUNJO0FBQUE7QUFBQSwwREFBSyxXQUFVLDZEQUFmO0FBRVEsNkRBQUszQixLQUFMLENBQVd1TSxlQUFYLENBQTJCQyxTQUEzQixDQUFxQzNLLEdBQXJDLENBQXlDLFVBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFlO0FBQ3BELG1FQUFPO0FBQUE7QUFBQSxrRUFBRyxLQUFRQSxHQUFSLFNBQWVELEtBQUtFLEVBQXZCLEVBQTZCLE1BQU1GLEtBQUtxQixHQUFMLEdBQVdyQixLQUFLcUIsR0FBaEIsR0FBc0JyQixLQUFLRSxFQUE5RCxFQUFrRSxXQUFVLGNBQTVFLEVBQTJGLFNBQVMsaUJBQUMyRixDQUFELEVBQU87QUFDOUdBLDBFQUFFQyxjQUFGO0FBQ0EsK0VBQUs1SCxLQUFMLENBQVc0QyxtQkFBWCxDQUErQixLQUEvQixFQUFzQ2QsSUFBdEM7QUFDSCxxRUFITTtBQUlIO0FBQUE7QUFBQSxzRUFBSyxXQUFVLGdCQUFmO0FBRVFBLHlFQUFLSSxJQUFMLElBQWEsdUNBQUssT0FBTyxFQUFFQyxPQUFPLE1BQVQsRUFBWixFQUErQixXQUFVLFdBQXpDLEVBQXFELEtBQUtMLEtBQUtJLElBQS9EO0FBRnJCLGlFQUpHO0FBVUNKLHFFQUFLd0ssY0FBTCxHQUNJO0FBQUE7QUFBQSxzRUFBRyxXQUFVLGlCQUFiO0FBQUE7QUFBcUNSLDZFQUFTaEssS0FBS3dLLGNBQWQsQ0FBckM7QUFBQTtBQUFBLGlFQURKLEdBQ21GO0FBWHBGLDZEQUFQO0FBY0gseURBZkQ7QUFGUjtBQURKO0FBSkosNkNBckNSO0FBa0VJO0FBQUE7QUFBQSxrREFBSyxXQUFVLDZCQUFmO0FBQ0k7QUFBQTtBQUFBLHNEQUFLLFdBQVUsa0JBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosaURBREo7QUFJSTtBQUFBO0FBQUEsc0RBQUssV0FBVSxvQkFBZjtBQUNJO0FBQUE7QUFBQSwwREFBSyxXQUFVLDZEQUFmO0FBQ0k7QUFBQTtBQUFBLDhEQUFHLFdBQVUsY0FBYjtBQUNJO0FBQUE7QUFBQSxrRUFBSyxXQUFVLGdCQUFmO0FBQ0ksdUdBQUssV0FBVSxXQUFmLEVBQTJCLEtBQUksc0ZBQS9CLEVBQXNILE9BQU8sRUFBRW5LLE9BQU8sTUFBVCxFQUE3SDtBQURKLDZEQURKO0FBSUk7QUFBQTtBQUFBLGtFQUFHLFdBQVUsaUJBQWI7QUFBQTtBQUFBO0FBSkoseURBREo7QUFRSTtBQUFBO0FBQUEsOERBQUcsV0FBVSxjQUFiO0FBQ0k7QUFBQTtBQUFBLGtFQUFLLFdBQVUsZ0JBQWY7QUFDSSx1R0FBSyxXQUFVLFdBQWYsRUFBMkIsS0FBSSw4RkFBL0IsRUFBOEgsT0FBTyxFQUFFQSxPQUFPLE1BQVQsRUFBckk7QUFESiw2REFESjtBQUlJO0FBQUE7QUFBQSxrRUFBRyxXQUFVLGlCQUFiO0FBQUE7QUFBQTtBQUpKLHlEQVJKO0FBY0k7QUFBQTtBQUFBLDhEQUFHLFdBQVUsY0FBYjtBQUNJO0FBQUE7QUFBQSxrRUFBSyxXQUFVLGdCQUFmO0FBQ0ksdUdBQUssV0FBVSxXQUFmLEVBQTJCLEtBQUksb0ZBQS9CLEVBQW9ILE9BQU8sRUFBRUEsT0FBTyxNQUFULEVBQTNIO0FBREosNkRBREo7QUFJSTtBQUFBO0FBQUEsa0VBQUcsV0FBVSxpQkFBYjtBQUFBO0FBQUE7QUFKSix5REFkSjtBQW9CSTtBQUFBO0FBQUEsOERBQUcsV0FBVSxjQUFiO0FBQ0k7QUFBQTtBQUFBLGtFQUFLLFdBQVUsZ0JBQWY7QUFDSSx1R0FBSyxXQUFVLFdBQWYsRUFBMkIsS0FBSSxzRkFBL0IsRUFBc0gsT0FBTyxFQUFFQSxPQUFPLE1BQVQsRUFBN0g7QUFESiw2REFESjtBQUlJO0FBQUE7QUFBQSxrRUFBRyxXQUFVLGlCQUFiO0FBQUE7QUFBQTtBQUpKLHlEQXBCSjtBQTBCSTtBQUFBO0FBQUEsOERBQUcsV0FBVSxjQUFiO0FBQ0k7QUFBQTtBQUFBLGtFQUFLLFdBQVUsZ0JBQWY7QUFDSSx1R0FBSyxXQUFVLFdBQWYsRUFBMkIsS0FBSSxzRkFBL0IsRUFBc0gsT0FBTyxFQUFFQSxPQUFPLE1BQVQsRUFBN0g7QUFESiw2REFESjtBQUlJO0FBQUE7QUFBQSxrRUFBRyxXQUFVLGlCQUFiO0FBQUE7QUFBQTtBQUpKLHlEQTFCSjtBQWdDSTtBQUFBO0FBQUEsOERBQUcsV0FBVSxjQUFiO0FBQ0k7QUFBQTtBQUFBLGtFQUFLLFdBQVUsZ0JBQWY7QUFDSSx1R0FBSyxXQUFVLFdBQWYsRUFBMkIsS0FBSSw4RkFBL0IsRUFBOEgsT0FBTyxFQUFFQSxPQUFPLE1BQVQsRUFBckk7QUFESiw2REFESjtBQUlJO0FBQUE7QUFBQSxrRUFBRyxXQUFVLGlCQUFiO0FBQUE7QUFBQTtBQUpKLHlEQWhDSjtBQXVDSTtBQUFBO0FBQUEsOERBQUcsV0FBVSxjQUFiO0FBQ0k7QUFBQTtBQUFBLGtFQUFLLFdBQVUsZ0JBQWY7QUFDSSx1R0FBSyxXQUFVLFdBQWYsRUFBMkIsS0FBSSw4RUFBL0IsRUFBOEcsT0FBTyxFQUFFQSxPQUFPLE1BQVQsRUFBckg7QUFESiw2REFESjtBQUlJO0FBQUE7QUFBQSxrRUFBRyxXQUFVLGlCQUFiO0FBQUE7QUFBQTtBQUpKLHlEQXZDSjtBQTZDSTtBQUFBO0FBQUEsOERBQUcsV0FBVSxjQUFiO0FBQ0k7QUFBQTtBQUFBLGtFQUFLLFdBQVUsZ0JBQWY7QUFDSSx1R0FBSyxXQUFVLFdBQWYsRUFBMkIsS0FBSSw4RkFBL0IsRUFBOEgsT0FBTyxFQUFFQSxPQUFPLE1BQVQsRUFBckk7QUFESiw2REFESjtBQUlJO0FBQUE7QUFBQSxrRUFBRyxXQUFVLGlCQUFiO0FBQUE7QUFBQTtBQUpKO0FBN0NKO0FBREo7QUFKSiw2Q0FsRUo7QUE4SEk7QUFBQTtBQUFBLGtEQUFLLFdBQVUsdUJBQWY7QUFDSTtBQUFBO0FBQUEsc0RBQUssV0FBVSw2QkFBZjtBQUNJO0FBQUE7QUFBQSwwREFBSSxXQUFVLGtCQUFkO0FBQUE7QUFBaUU7QUFBQTtBQUFBLDhEQUFNLFdBQVUsYUFBaEI7QUFBOEI7QUFBQTtBQUFBLGtFQUFNLFdBQVUsdUJBQWhCO0FBQUE7QUFBQSw2REFBOUI7QUFBdUYsbUdBQUssS0FBSSxvRkFBVDtBQUF2Rix5REFBakU7QUFBQTtBQUFBLHFEQURKO0FBRUk7QUFBQTtBQUFBLDBEQUFHLFdBQVUsZUFBYjtBQUE2QiwrRkFBSyxLQUFLRyxTQUFlQSxHQUFHLGtCQUE1QixHQUE3QjtBQUFBO0FBQUEscURBRko7QUFHSTtBQUFBO0FBQUEsMERBQUcsV0FBVSxlQUFiO0FBQTZCLCtGQUFLLEtBQUtBLFNBQWVBLEdBQUcsa0JBQTVCLEdBQTdCO0FBQUE7QUFBQSxxREFISjtBQUlJO0FBQUE7QUFBQSwwREFBRyxXQUFVLGVBQWI7QUFBNkIsK0ZBQUssS0FBS0EsU0FBZUEsR0FBRyxrQkFBNUIsR0FBN0I7QUFBQTtBQUFBLHFEQUpKO0FBS0k7QUFBQTtBQUFBLDBEQUFHLFdBQVUsV0FBYjtBQUF5QjtBQUFBO0FBQUEsOERBQUcsV0FBVSxVQUFiLEVBQXdCLFNBQVMsS0FBS3RDLEtBQUwsQ0FBVzhJLE1BQVgsQ0FBa0J6RyxJQUFsQixDQUF1QixJQUF2QixFQUE2QixJQUE3QixDQUFqQztBQUFBO0FBQUE7QUFBekI7QUFMSjtBQURKLDZDQTlISjtBQXNKSSwwRUFBQywwQkFBRDtBQXRKSjtBQURKO0FBM0ZKO0FBREo7QUFESjtBQUZKO0FBREosaUJBTko7QUE4UUk7QUFBQTtBQUFBLHNCQUFLLFdBQVUsK0JBQWY7QUFFSTtBQUFBO0FBQUEsMEJBQVMsV0FBVSxnRkFBbkI7QUFDSTtBQUFBO0FBQUEsOEJBQUksV0FBVSxnQkFBZDtBQUNJO0FBQUE7QUFBQSxrQ0FBTSxXQUFVLG9EQUFoQjtBQUFBO0FBQ0ksdUVBQUssT0FBTyxFQUFFb0ssV0FBVyxDQUFiLEVBQVosRUFBOEIsS0FBS25LLFNBQWVBLEdBQUcsa0JBQXJELEVBQXlFLE9BQU0sSUFBL0U7QUFESjtBQURKLHlCQURKO0FBTUk7QUFBQTtBQUFBO0FBQUE7QUFBd0IscUVBQXhCO0FBQUE7QUFBQTtBQU5KLHFCQUZKO0FBWUk7QUFBQTtBQUFBLDBCQUFTLFdBQVUsaUNBQW5CO0FBMEJLLDZCQUFLdEMsS0FBTCxDQUFXc0UsV0FBWCxJQUEwQixLQUFLdEUsS0FBTCxDQUFXc0UsV0FBWCxDQUF1QkUsVUFBakQsSUFBK0QsS0FBS3hFLEtBQUwsQ0FBV3NFLFdBQVgsQ0FBdUJFLFVBQXZCLENBQWtDN0MsTUFBbEMsR0FBMkMsQ0FBMUcsR0FDRztBQUFBO0FBQUEsOEJBQUssV0FBVSxxQkFBZjtBQUNJO0FBQUE7QUFBQSxrQ0FBSSxXQUFVLGFBQWQ7QUFBQTtBQUFBLDZCQURKO0FBRUk7QUFBQTtBQUFBLGtDQUFLLFdBQVUsb0NBQWYsRUFBb0QsT0FBTyxFQUFFUSxPQUFPLE1BQVQsRUFBM0Q7QUFDSTtBQUFBO0FBQUEsc0NBQUssV0FBVSxVQUFmO0FBQ0k7QUFBQTtBQUFBLDBDQUFLLFdBQVUsaUJBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlDQURKO0FBRUk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQUhKO0FBSUk7QUFBQTtBQUFBO0FBQUE7QUFBYyx5RkFBZDtBQUFBO0FBQUE7QUFKSjtBQUZKO0FBREosaUNBREo7QUFZSTtBQUFBO0FBQUEsc0NBQUssV0FBVSxVQUFmO0FBRVF5QiwyQ0FBT2dJLE9BQVAsQ0FBZSxLQUFLNUwsS0FBTCxDQUFXc0UsV0FBWCxDQUF1QkUsVUFBdEMsRUFBa0QzQyxHQUFsRCxDQUFzRCxpQkFBd0I7QUFBQTtBQUFBLDRDQUFiRSxHQUFhO0FBQUEsNENBQVI4SixLQUFROztBQUMxRSwrQ0FBTztBQUFBO0FBQUEsOENBQUssWUFBYzNGLEtBQUtsRyxLQUFMLENBQVdzRSxXQUFYLENBQXVCRSxVQUF2QixJQUFxQzBCLEtBQUtsRyxLQUFMLENBQVdzRSxXQUFYLENBQXVCRSxVQUF2QixDQUFrQzdDLE1BQWxDLEdBQTJDLENBQWhGLEdBQW9GLE9BQXBGLEdBQThGLE9BQTVHLG1CQUFMO0FBQ0g7QUFBQTtBQUFBO0FBQUtrSyxzREFBTWE7QUFBWCw2Q0FERztBQUVIO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxzREFBSSxXQUFVLFdBQWQ7QUFBQTtBQUE2QmIsMERBQU1yRCxVQUFuQztBQUE4Qyw2RkFBOUM7QUFDS3FELDBEQUFNOUUsV0FBTixHQUNHO0FBQUE7QUFBQSwwREFBTSxXQUFVLDRCQUFoQjtBQUFBO0FBQUEscURBREgsR0FFSztBQUFBO0FBQUEsMERBQU0sT0FBTyxFQUFFZ0QsU0FBUyxDQUFYLEVBQWIsRUFBNkIsV0FBVSw0QkFBdkM7QUFBQTtBQUFBO0FBSFYsaURBREo7QUFPSTtBQUFBO0FBQUE7QUFBSzhCLDBEQUFNSSxxQkFBWDtBQUFBO0FBQW1DSCw2REFBU0QsTUFBTUkscUJBQWYsSUFBd0MsQ0FBeEMsR0FBNEMsU0FBNUMsR0FBd0Q7QUFBM0YsaURBUEo7QUFRSTtBQUFBO0FBQUE7QUFBQTtBQUFNSiwwREFBTUssTUFBWjtBQUFBO0FBQUEsaURBUko7QUFTSTtBQUFBO0FBQUEsc0RBQUksV0FBVSxpQkFBZDtBQUNJO0FBQUE7QUFBQSwwREFBTSxPQUFPLEVBQUV6TSxVQUFVLEVBQVosRUFBZ0JrTixVQUFVLFVBQTFCLEVBQXNDOUosS0FBSyxDQUEzQyxFQUE4QytKLFlBQVksR0FBMUQsRUFBYjtBQUFnRmYsOERBQU1nQixxQkFBTixHQUE4QmhCLE1BQU1nQixxQkFBcEMsR0FBNEQ7QUFBNUk7QUFESixpREFUSjtBQVlJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSwwREFBUSxXQUFVLGVBQWxCLEVBQWtDLFNBQVMzRyxLQUFLbEcsS0FBTCxDQUFXNkksY0FBWCxDQUEwQnhHLElBQTFCLENBQStCNkQsSUFBL0IsRUFBcUMyRixLQUFyQyxFQUE0QyxLQUE1QyxFQUFtRCxJQUFuRCxDQUEzQztBQUFBO0FBQUE7QUFESjtBQVpKO0FBRkcseUNBQVA7QUFtQkgscUNBcEJEO0FBRlI7QUFaSiw2QkFGSjtBQXdDSTtBQUFBO0FBQUEsa0NBQUssV0FBVSxnQ0FBZixFQUFnRCxPQUFPLEVBQUUxSixPQUFPLE1BQVQsRUFBdkQ7QUFFUXlCLHVDQUFPZ0ksT0FBUCxDQUFlLEtBQUs1TCxLQUFMLENBQVdzRSxXQUFYLENBQXVCRSxVQUF0QyxFQUFrRDNDLEdBQWxELENBQXNELGlCQUF3QjtBQUFBO0FBQUEsd0NBQWJFLEdBQWE7QUFBQSx3Q0FBUjhKLEtBQVE7O0FBQzFFLDJDQUFPO0FBQUE7QUFBQSwwQ0FBSyxZQUFjM0YsS0FBS2xHLEtBQUwsQ0FBV3NFLFdBQVgsQ0FBdUJFLFVBQXZCLElBQXFDMEIsS0FBS2xHLEtBQUwsQ0FBV3NFLFdBQVgsQ0FBdUJFLFVBQXZCLENBQWtDN0MsTUFBbEMsR0FBMkMsQ0FBaEYsR0FBb0YsT0FBcEYsR0FBOEYsT0FBNUcsb0ZBQWdNa0ssTUFBTTdKLEVBQU4sSUFBWWtFLEtBQUtsRyxLQUFMLENBQVcyRCxnQkFBdkIsR0FBMEMsUUFBMUMsR0FBcUQsRUFBclAsQ0FBTCxFQUFnUSxTQUFTdUMsS0FBS2xHLEtBQUwsQ0FBVzZJLGNBQVgsQ0FBMEJ4RyxJQUExQixDQUErQjZELElBQS9CLEVBQXFDMkYsS0FBckMsRUFBNEMsS0FBNUMsRUFBbUQsS0FBbkQsQ0FBelE7QUFDSDtBQUFBO0FBQUEsOENBQUssV0FBVSxZQUFmO0FBQUE7QUFBQSx5Q0FERztBQUVIO0FBQUE7QUFBQSw4Q0FBSyxXQUFVLGdFQUFmO0FBQ0ksbUZBQUssT0FBTSxJQUFYLEVBQWdCLEtBQUt2SixTQUFlQSxHQUFHLHNCQUF2QztBQURKLHlDQUZHO0FBS0g7QUFBQTtBQUFBLDhDQUFJLFdBQVUsS0FBZDtBQUNLdUosa0RBQU05RSxXQUFOLEdBQ0c7QUFBQTtBQUFBLGtEQUFNLFdBQVUsYUFBaEI7QUFBQTtBQUFBLDZDQURILEdBRUs7QUFBQTtBQUFBLGtEQUFNLE9BQU8sRUFBRWdELFNBQVMsQ0FBWCxFQUFiLEVBQTZCLFdBQVUsNEJBQXZDO0FBQUE7QUFBQSw2Q0FIVjtBQUtJO0FBQUE7QUFBQTtBQUFPOEIsc0RBQU1hO0FBQWIsNkNBTEo7QUFNSTtBQUFBO0FBQUEsa0RBQU0sV0FBVSxZQUFoQjtBQUFBO0FBQWdDYixzREFBTXJEO0FBQXRDO0FBTkoseUNBTEc7QUFhRnpHLCtDQUFPLENBQVAsR0FDRztBQUFDLDJEQUFELENBQU8sUUFBUDtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FESjtBQUVJO0FBQUE7QUFBQSxrREFBSSxPQUFPLEVBQUVjLEtBQUssU0FBUCxFQUFYO0FBQUE7QUFBQSw2Q0FGSjtBQUdJO0FBQUE7QUFBQSxrREFBSSxPQUFPLEVBQUVBLEtBQUssU0FBUCxFQUFYO0FBQUE7QUFBQTtBQUhKLHlDQURILEdBTUssRUFuQkg7QUFvQkgsOEVBQUksT0FBTyxFQUFFVixPQUFPLE1BQVQsRUFBaUI0RixZQUFZLDBCQUE3QixFQUFYLEdBcEJHO0FBcUJIO0FBQUE7QUFBQSw4Q0FBSSxXQUFVLGNBQWQ7QUFBOEI4RCxrREFBTUk7QUFBcEMseUNBckJHO0FBc0JILDhFQUFJLE9BQU8sRUFBRTlKLE9BQU8sTUFBVCxFQUFpQjRGLFlBQVksMEJBQTdCLEVBQVgsR0F0Qkc7QUF1Qkg7QUFBQTtBQUFBO0FBQUs4RCxrREFBTUs7QUFBWCx5Q0F2Qkc7QUF3QkgsOEVBQUksT0FBTyxFQUFFL0osT0FBTyxNQUFULEVBQWlCNEYsWUFBWSwwQkFBN0IsRUFBWCxHQXhCRztBQXlCSDtBQUFBO0FBQUE7QUFFUThELGtEQUFNZ0IscUJBQU4sR0FDSTtBQUFBO0FBQUE7QUFBT2hCLHNEQUFNZ0I7QUFBYiw2Q0FESixHQUVNO0FBQUE7QUFBQSxrREFBTSxXQUFVLFlBQWhCO0FBQUE7QUFBQTtBQUpkO0FBekJHLHFDQUFQO0FBaUNILGlDQWxDRDtBQUZSO0FBeENKLHlCQURILEdBa0ZLO0FBNUdWLHFCQVpKO0FBMk1JO0FBQUE7QUFBQSwwQkFBUyxXQUFVLDBCQUFuQjtBQUNJO0FBQUE7QUFBQSw4QkFBSSxXQUFVLGVBQWQ7QUFBQTtBQUFBLHlCQURKO0FBR1lqSiwrQkFBT2dJLE9BQVAsQ0FBZSxLQUFLNUwsS0FBTCxDQUFXc0UsV0FBWCxDQUF1QkUsVUFBdEMsRUFBa0QzQyxHQUFsRCxDQUFzRCxrQkFBd0I7QUFBQTtBQUFBLGdDQUFiRSxHQUFhO0FBQUEsZ0NBQVI4SixLQUFROztBQUN0RSxtQ0FBTztBQUFBO0FBQUEsa0NBQUssV0FBVSxlQUFmO0FBQ0g7QUFBQTtBQUFBLHNDQUFLLFdBQVUsYUFBZjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsdURBQWtCQSxNQUFNSSxxQkFBeEI7QUFBQTtBQUFBLHFDQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSx1REFBcUJKLE1BQU1LLE1BQTNCO0FBQUE7QUFGSixpQ0FERztBQUtIO0FBQUE7QUFBQSxzQ0FBRyxXQUFVLFlBQWI7QUFBQTtBQUE0QkwsMENBQU1yRDtBQUFsQztBQUxHLDZCQUFQO0FBT1AseUJBUkQ7QUFIWixxQkEzTUo7QUF5Tkk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsbUJBQWY7QUFFUSw2QkFBS3hJLEtBQUwsQ0FBV29NLFlBQVgsSUFBMkIsS0FBS3BNLEtBQUwsQ0FBV29NLFlBQVgsQ0FBd0JDLGFBQW5ELElBQW9FLEtBQUtyTSxLQUFMLENBQVdvTSxZQUFYLENBQXdCQyxhQUF4QixDQUFzQzFLLE1BQXRDLEdBQStDLENBQW5ILEdBQ0ksOEJBQUMsd0JBQUQ7QUFDSSxxQ0FBUSxzQkFEWjtBQUVJLGtDQUFNLEtBQUszQixLQUFMLENBQVdvTSxZQUFYLENBQXdCQyxhQUZsQztBQUdJLDBDQUFjLElBSGxCO0FBSUksc0NBQVMsZ0JBSmI7QUFLSSx3Q0FBWSxLQUFLck0sS0FBTCxDQUFXb0QsT0FMM0I7QUFNSSx3Q0FBWSxLQUFLcEQsS0FBTCxDQUFXNEMsbUJBTjNCO0FBT0kseUNBQWEsS0FBSzVDLEtBQUwsQ0FBVzRJLDBCQUFYLENBQXNDdkcsSUFBdEMsRUFQakI7QUFRSSxzQ0FBVTtBQVJkLDBCQURKLEdBV00sRUFiZDtBQWdCUSw2QkFBS3JDLEtBQUwsQ0FBV3dELGFBQVgsSUFBNEJJLE9BQU9DLElBQVAsQ0FBWSxLQUFLN0QsS0FBTCxDQUFXd0QsYUFBdkIsRUFBc0M3QixNQUFsRSxHQUNJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLHNGQUFmO0FBRVEsaUNBQUszQixLQUFMLENBQVdrTCxlQUFYLEtBQStCLEVBQS9CLEtBQXNDLEtBQUtsTCxLQUFMLENBQVdrTCxlQUFYLElBQThCLEtBQTlCLElBQXVDLEtBQUtsTCxLQUFMLENBQVdrTCxlQUFYLElBQThCLEtBQTNHLElBQ0k7QUFBQTtBQUFBLGtDQUFRLFdBQVUsa0RBQWxCLEVBQXFFLFNBQVMsS0FBSzRCLE1BQUwsQ0FBWXpLLElBQVosQ0FBaUIsSUFBakIsQ0FBOUU7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosNkJBREosR0FJTSxLQUFLckMsS0FBTCxDQUFXaUcsZUFBWCxHQUNFO0FBQUE7QUFBQSxrQ0FBUSxXQUFVLGVBQWxCLEVBQWtDLFNBQVMsS0FBSzZHLE1BQUwsQ0FBWXpLLElBQVosQ0FBaUIsSUFBakIsQ0FBM0M7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosNkJBREYsR0FJSTtBQUFBO0FBQUEsa0NBQVEsV0FBVSxxQ0FBbEIsRUFBd0QsT0FBTyxFQUFFMEYsWUFBWSxTQUFkLEVBQXlCZ0YsYUFBYSxTQUF0QyxFQUEvRCxFQUFrSCxTQUFTLEtBQUsvTSxLQUFMLENBQVdnSCxPQUFYLENBQW1CM0UsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBM0g7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFxQix5Q0FBS3JDLEtBQUwsQ0FBV3dELGFBQVgsQ0FBeUJrSixhQUE5QyxnQkFBaUUsS0FBSzFNLEtBQUwsQ0FBV3dELGFBQVgsQ0FBeUJnRjtBQUExRjtBQURGLDZCQVZsQjtBQWVRL0MsOENBQVFHLE9BQVIsS0FBb0I7QUFBQTtBQUFBLGtDQUFRLFdBQVUsb0JBQWxCLEVBQXVDLE9BQU8sRUFBRW1ILGFBQWEsU0FBZixFQUEwQnZOLE9BQU8sU0FBakMsRUFBOUMsRUFBNEYsU0FBUyxLQUFLMEssV0FBMUc7QUFBdUgsdUVBQUssV0FBVSxXQUFmLEVBQTJCLEtBQUs1SCxTQUFlQSxHQUFHLHFCQUFsRCxHQUF2SDtBQUFBO0FBQUEsNkJBQXBCLEdBQWtQO0FBZjFQLHlCQURKLEdBbUJNO0FBbkNkLHFCQXpOSjtBQThQSTtBQUFBO0FBQUEsMEJBQUssV0FBVSx3QkFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBUyxXQUFVLGdCQUFuQjtBQUNJO0FBQUE7QUFBQSxrQ0FBSyxXQUFVLGNBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosNkJBREo7QUFLSTtBQUFBO0FBQUEsa0NBQUssV0FBVSx1QkFBZjtBQUNJO0FBQUE7QUFBQSxzQ0FBSyxXQUFVLG9CQUFmLEVBQW9DLElBQUcsV0FBdkM7QUFDSTtBQUFBO0FBQUEsMENBQUssV0FBVSwrREFBZjtBQUNJLCtFQUFLLFdBQVUsV0FBZixFQUEyQixLQUFJLHNGQUEvQixFQUFzSCxLQUFJLFVBQTFIO0FBREoscUNBREo7QUFJSTtBQUFBO0FBQUEsMENBQUksV0FBVSxTQUFkLEVBQXdCLE9BQU8sRUFBRXFLLFVBQVUsVUFBWixFQUF3QkssUUFBUSxDQUFoQyxFQUEvQjtBQUFBO0FBQUE7QUFKSixpQ0FESjtBQU9JO0FBQUE7QUFBQSxzQ0FBSyxXQUFVLG9CQUFmLEVBQW9DLElBQUcsV0FBdkM7QUFDSTtBQUFBO0FBQUEsMENBQUssV0FBVSwrREFBZjtBQUNJLCtFQUFLLFdBQVUsV0FBZixFQUEyQixLQUFJLDhGQUEvQixFQUE4SCxLQUFJLFVBQWxJO0FBREoscUNBREo7QUFJSTtBQUFBO0FBQUEsMENBQUksV0FBVSxTQUFkLEVBQXdCLE9BQU8sRUFBRUwsVUFBVSxVQUFaLEVBQXdCSyxRQUFRLENBQWhDLEVBQS9CO0FBQUE7QUFBQTtBQUpKLGlDQVBKO0FBYUk7QUFBQTtBQUFBLHNDQUFLLFdBQVUsb0JBQWYsRUFBb0MsSUFBRyxXQUF2QztBQUNJO0FBQUE7QUFBQSwwQ0FBSyxXQUFVLCtEQUFmO0FBQ0ksK0VBQUssV0FBVSxXQUFmLEVBQTJCLEtBQUksb0ZBQS9CLEVBQW9ILEtBQUksVUFBeEg7QUFESixxQ0FESjtBQUlJO0FBQUE7QUFBQSwwQ0FBSSxXQUFVLFNBQWQsRUFBd0IsT0FBTyxFQUFFTCxVQUFVLFVBQVosRUFBd0JLLFFBQVEsQ0FBaEMsRUFBL0I7QUFBQTtBQUFBO0FBSkosaUNBYko7QUFtQkk7QUFBQTtBQUFBLHNDQUFLLFdBQVUsb0JBQWYsRUFBb0MsSUFBRyxXQUF2QztBQUNJO0FBQUE7QUFBQSwwQ0FBSyxXQUFVLCtEQUFmO0FBQ0ksK0VBQUssV0FBVSxXQUFmLEVBQTJCLEtBQUksc0ZBQS9CLEVBQXNILEtBQUksVUFBMUg7QUFESixxQ0FESjtBQUlJO0FBQUE7QUFBQSwwQ0FBSSxXQUFVLFNBQWQsRUFBd0IsT0FBTyxFQUFFTCxVQUFVLFVBQVosRUFBd0JLLFFBQVEsQ0FBaEMsRUFBL0I7QUFBQTtBQUFBO0FBSkosaUNBbkJKO0FBeUJJO0FBQUE7QUFBQSxzQ0FBSyxXQUFVLG9CQUFmLEVBQW9DLElBQUcsV0FBdkM7QUFDSTtBQUFBO0FBQUEsMENBQUssV0FBVSwrREFBZjtBQUNJLCtFQUFLLFdBQVUsV0FBZixFQUEyQixLQUFJLHNGQUEvQixFQUFzSCxLQUFJLFVBQTFIO0FBREoscUNBREo7QUFJSTtBQUFBO0FBQUEsMENBQUksV0FBVSxTQUFkLEVBQXdCLE9BQU8sRUFBRUwsVUFBVSxVQUFaLEVBQXdCSyxRQUFRLENBQWhDLEVBQS9CO0FBQUE7QUFBQTtBQUpKLGlDQXpCSjtBQStCSTtBQUFBO0FBQUEsc0NBQUssV0FBVSxvQkFBZixFQUFvQyxJQUFHLFdBQXZDO0FBQ0k7QUFBQTtBQUFBLDBDQUFLLFdBQVUsK0RBQWY7QUFDSSwrRUFBSyxXQUFVLFdBQWYsRUFBMkIsS0FBSSw4RkFBL0IsRUFBOEgsS0FBSSxVQUFsSTtBQURKLHFDQURKO0FBSUk7QUFBQTtBQUFBLDBDQUFJLFdBQVUsU0FBZCxFQUF3QixPQUFPLEVBQUVMLFVBQVUsVUFBWixFQUF3QkssUUFBUSxDQUFoQyxFQUEvQjtBQUFBO0FBQUE7QUFKSixpQ0EvQko7QUFxQ0k7QUFBQTtBQUFBLHNDQUFLLFdBQVUsb0JBQWYsRUFBb0MsSUFBRyxXQUF2QztBQUNJO0FBQUE7QUFBQSwwQ0FBSyxXQUFVLCtEQUFmO0FBQ0ksK0VBQUssV0FBVSxXQUFmLEVBQTJCLEtBQUksOEVBQS9CLEVBQThHLEtBQUksVUFBbEg7QUFESixxQ0FESjtBQUlJO0FBQUE7QUFBQSwwQ0FBSSxXQUFVLFNBQWQsRUFBd0IsT0FBTyxFQUFFTCxVQUFVLFVBQVosRUFBd0JLLFFBQVEsQ0FBaEMsRUFBL0I7QUFBQTtBQUFBO0FBSkosaUNBckNKO0FBMkNJO0FBQUE7QUFBQSxzQ0FBSyxXQUFVLG9CQUFmLEVBQW9DLElBQUcsV0FBdkM7QUFDSTtBQUFBO0FBQUEsMENBQUssV0FBVSwrREFBZjtBQUNJLCtFQUFLLFdBQVUsV0FBZixFQUEyQixLQUFJLDhGQUEvQixFQUE4SCxLQUFJLFVBQWxJO0FBREoscUNBREo7QUFJSTtBQUFBO0FBQUEsMENBQUksV0FBVSxTQUFkLEVBQXdCLE9BQU8sRUFBRUwsVUFBVSxVQUFaLEVBQXdCSyxRQUFRLENBQWhDLEVBQS9CO0FBQUE7QUFBQTtBQUpKO0FBM0NKO0FBTEo7QUFESixxQkE5UEo7QUF5VEk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsd0JBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQVMsV0FBVSxnQkFBbkI7QUFDSTtBQUFBO0FBQUEsa0NBQUksV0FBVSxRQUFkLEVBQXVCLE9BQU8sRUFBRXZOLFVBQVUsRUFBWixFQUFnQkMsZUFBZSxDQUEvQixFQUE5QjtBQUFBO0FBQUEsNkJBREo7QUFFSTtBQUFBO0FBQUEsa0NBQUssV0FBVSxvRkFBZixFQUFvRyxJQUFHLG9CQUF2RztBQUNJO0FBQUE7QUFBQSxzQ0FBSyxXQUFVLDZCQUFmO0FBQ0k7QUFBQTtBQUFBLDBDQUFLLFdBQVUsd0VBQWY7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkoscUNBREo7QUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQUxKO0FBTUk7QUFBQTtBQUFBLDBDQUFHLFdBQVUsa0JBQWI7QUFBQTtBQUFBO0FBTkosaUNBREo7QUFVSTtBQUFBO0FBQUEsc0NBQUssV0FBVSw2QkFBZjtBQUNJO0FBQUE7QUFBQSwwQ0FBSyxXQUFVLHdFQUFmO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKLHFDQURKO0FBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FMSjtBQU1JO0FBQUE7QUFBQSwwQ0FBRyxXQUFVLGtCQUFiO0FBQUE7QUFBQTtBQU5KLGlDQVZKO0FBbUJJO0FBQUE7QUFBQSxzQ0FBSyxXQUFVLDZCQUFmO0FBQ0k7QUFBQTtBQUFBLDBDQUFLLFdBQVUsd0VBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoscUNBREo7QUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQUpKO0FBS0k7QUFBQTtBQUFBLDBDQUFHLFdBQVUsa0JBQWI7QUFBQTtBQUFBO0FBTEosaUNBbkJKO0FBMEJJO0FBQUE7QUFBQSxzQ0FBSyxXQUFVLDZCQUFmO0FBQ0k7QUFBQTtBQUFBLDBDQUFLLFdBQVUsd0VBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoscUNBREo7QUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQUpKO0FBS0k7QUFBQTtBQUFBLDBDQUFHLFdBQVUsa0JBQWI7QUFBQTtBQUFBO0FBTEo7QUExQkosNkJBRko7QUFxQ0k7QUFBQTtBQUFBLGtDQUFHLFdBQVUsbUJBQWIsRUFBaUMseUNBQWpDLEVBQTRFLFNBQVMsS0FBS3NCLE1BQUwsQ0FBWXFCLElBQVosQ0FBaUIsSUFBakIsRUFBdUIsTUFBdkIsQ0FBckY7QUFDSSx1RUFBSyxRQUFPLElBQVosRUFBaUIsS0FBS0MsU0FBZUEsR0FBRyxxQkFBeEMsRUFBK0QsS0FBSSxXQUFuRTtBQURKLDZCQXJDSjtBQXdDSTtBQUFBO0FBQUEsa0NBQUcsV0FBVSxZQUFiLEVBQTBCLHdDQUExQixFQUFvRSxTQUFTLEtBQUt0QixNQUFMLENBQVlxQixJQUFaLENBQWlCLElBQWpCLEVBQXVCLE9BQXZCLENBQTdFO0FBQ0ksdUVBQUssUUFBTyxJQUFaLEVBQWlCLEtBQUtDLFNBQWVBLEdBQUcscUJBQXhDLEVBQStELEtBQUksWUFBbkU7QUFESjtBQXhDSjtBQURKLHFCQXpUSjtBQXlXSTtBQUFBO0FBQUEsMEJBQVMsV0FBVSxTQUFuQjtBQUNJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLGdCQUFmO0FBQ0k7QUFBQTtBQUFBLGtDQUFLLFdBQVUsOERBQWYsRUFBOEUsU0FBUyxLQUFLMkssYUFBTCxDQUFtQjVLLElBQW5CLENBQXdCLElBQXhCLEVBQThCLENBQTlCLENBQXZGO0FBQ0k7QUFBQTtBQUFBLHNDQUFJLFdBQVUsUUFBZCxFQUF1QixPQUFPLEVBQUU1QyxVQUFVLE1BQVosRUFBOUI7QUFBQTtBQUFBLGlDQURKO0FBRUksdUVBQUssa0JBQWUsS0FBSzZELEtBQUwsQ0FBV3FILFNBQVgsQ0FBcUJ1QyxPQUFyQixDQUE2QixDQUE3QixJQUFrQyxDQUFDLENBQW5DLEdBQXVDLEVBQXZDLEdBQTRDLFNBQTNELENBQUwsRUFBNkUsS0FBSzVLLFNBQWVBLEdBQUcsd0NBQXBHO0FBRkosNkJBREo7QUFNSTtBQUFBO0FBQUEsa0NBQUssc0NBQW1DLEtBQUtnQixLQUFMLENBQVdxSCxTQUFYLENBQXFCdUMsT0FBckIsQ0FBNkIsQ0FBN0IsSUFBa0MsQ0FBQyxDQUFuQyxHQUF1QyxRQUF2QyxHQUFrRCxFQUFyRixDQUFMO0FBQ0k7QUFBQTtBQUFBLHNDQUFLLFdBQVUsZUFBZixFQUErQixTQUFTLEtBQUtELGFBQUwsQ0FBbUI1SyxJQUFuQixDQUF3QixJQUF4QixFQUE4QixDQUE5QixDQUF4QztBQUNJO0FBQUE7QUFBQSwwQ0FBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUEsOENBQUksV0FBVSxRQUFkO0FBQUE7QUFBQSx5Q0FESjtBQUVJLCtFQUFLLDZCQUEwQixLQUFLaUIsS0FBTCxDQUFXcUgsU0FBWCxDQUFxQnVDLE9BQXJCLENBQTZCLENBQTdCLElBQWtDLENBQUMsQ0FBbkMsR0FBdUMsRUFBdkMsR0FBNEMsZUFBdEUsQ0FBTCxFQUE4RixLQUFLNUssU0FBZUEsR0FBRyx3Q0FBckg7QUFGSixxQ0FESjtBQUtJO0FBQUE7QUFBQSwwQ0FBRyx1Q0FBb0MsS0FBS2dCLEtBQUwsQ0FBV3FILFNBQVgsQ0FBcUJ1QyxPQUFyQixDQUE2QixDQUE3QixJQUFrQyxDQUFDLENBQW5DLEdBQXVDLFFBQXZDLEdBQWtELEVBQXRGLENBQUg7QUFBQTtBQUFBO0FBTEosaUNBREo7QUFxQkk7QUFBQTtBQUFBLHNDQUFLLFdBQVUsZUFBZixFQUErQixTQUFTLEtBQUtELGFBQUwsQ0FBbUI1SyxJQUFuQixDQUF3QixJQUF4QixFQUE4QixDQUE5QixDQUF4QztBQUNJO0FBQUE7QUFBQSwwQ0FBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUEsOENBQUksV0FBVSxRQUFkO0FBQUE7QUFBQSx5Q0FESjtBQUVJLCtFQUFLLDZCQUEwQixLQUFLaUIsS0FBTCxDQUFXcUgsU0FBWCxDQUFxQnVDLE9BQXJCLENBQTZCLENBQTdCLElBQWtDLENBQUMsQ0FBbkMsR0FBdUMsRUFBdkMsR0FBNEMsZUFBdEUsQ0FBTCxFQUE4RixLQUFLNUssU0FBZUEsR0FBRyx3Q0FBckg7QUFGSixxQ0FESjtBQUtJO0FBQUE7QUFBQSwwQ0FBRyx1Q0FBb0MsS0FBS2dCLEtBQUwsQ0FBV3FILFNBQVgsQ0FBcUJ1QyxPQUFyQixDQUE2QixDQUE3QixJQUFrQyxDQUFDLENBQW5DLEdBQXVDLFFBQXZDLEdBQWtELEVBQXRGLENBQUg7QUFBQTtBQUFBO0FBTEosaUNBckJKO0FBMENJO0FBQUE7QUFBQSxzQ0FBSyxXQUFVLGVBQWYsRUFBK0IsU0FBUyxLQUFLRCxhQUFMLENBQW1CNUssSUFBbkIsQ0FBd0IsSUFBeEIsRUFBOEIsQ0FBOUIsQ0FBeEM7QUFDSTtBQUFBO0FBQUEsMENBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhDQUFJLFdBQVUsUUFBZDtBQUFBO0FBQUEseUNBREo7QUFFSSwrRUFBSyw2QkFBMEIsS0FBS2lCLEtBQUwsQ0FBV3FILFNBQVgsQ0FBcUJ1QyxPQUFyQixDQUE2QixDQUE3QixJQUFrQyxDQUFDLENBQW5DLEdBQXVDLEVBQXZDLEdBQTRDLGVBQXRFLENBQUwsRUFBOEYsS0FBSzVLLFNBQWVBLEdBQUcsd0NBQXJIO0FBRkoscUNBREo7QUFLSTtBQUFBO0FBQUEsMENBQUcsdUNBQW9DLEtBQUtnQixLQUFMLENBQVdxSCxTQUFYLENBQXFCdUMsT0FBckIsQ0FBNkIsQ0FBN0IsSUFBa0MsQ0FBQyxDQUFuQyxHQUF1QyxRQUF2QyxHQUFrRCxFQUF0RixDQUFIO0FBQUE7QUFBQTtBQUxKLGlDQTFDSjtBQW1ESTtBQUFBO0FBQUEsc0NBQUssV0FBVSxlQUFmLEVBQStCLFNBQVMsS0FBS0QsYUFBTCxDQUFtQjVLLElBQW5CLENBQXdCLElBQXhCLEVBQThCLENBQTlCLENBQXhDO0FBQ0k7QUFBQTtBQUFBLDBDQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSw4Q0FBSSxXQUFVLFFBQWQ7QUFBQTtBQUFBLHlDQURKO0FBRUksK0VBQUssNkJBQTBCLEtBQUtpQixLQUFMLENBQVdxSCxTQUFYLENBQXFCdUMsT0FBckIsQ0FBNkIsQ0FBN0IsSUFBa0MsQ0FBQyxDQUFuQyxHQUF1QyxFQUF2QyxHQUE0QyxlQUF0RSxDQUFMLEVBQThGLEtBQUs1SyxTQUFlQSxHQUFHLHdDQUFySDtBQUZKLHFDQURKO0FBS0k7QUFBQTtBQUFBLDBDQUFHLHVDQUFvQyxLQUFLZ0IsS0FBTCxDQUFXcUgsU0FBWCxDQUFxQnVDLE9BQXJCLENBQTZCLENBQTdCLElBQWtDLENBQUMsQ0FBbkMsR0FBdUMsUUFBdkMsR0FBa0QsRUFBdEYsQ0FBSDtBQUFBO0FBQzZNO0FBQUE7QUFBQSw4Q0FBTSxPQUFPLEVBQUUxTixPQUFPLFNBQVQsRUFBb0IyTixRQUFRLFNBQTVCLEVBQWIsRUFBc0QsU0FBUztBQUFBLDJEQUFNLE9BQUtuTixLQUFMLENBQVc0SSwwQkFBWCxFQUFOO0FBQUEsaURBQS9EO0FBQUE7QUFBQTtBQUQ3TTtBQUxKLGlDQW5ESjtBQTRESTtBQUFBO0FBQUEsc0NBQUssV0FBVSxlQUFmLEVBQStCLFNBQVMsS0FBS3FFLGFBQUwsQ0FBbUI1SyxJQUFuQixDQUF3QixJQUF4QixFQUE4QixDQUE5QixDQUF4QztBQUNJO0FBQUE7QUFBQSwwQ0FBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUEsOENBQUksV0FBVSxRQUFkO0FBQUE7QUFBQSx5Q0FESjtBQUVJLCtFQUFLLDZCQUEwQixLQUFLaUIsS0FBTCxDQUFXcUgsU0FBWCxDQUFxQnVDLE9BQXJCLENBQTZCLENBQTdCLElBQWtDLENBQUMsQ0FBbkMsR0FBdUMsRUFBdkMsR0FBNEMsZUFBdEUsQ0FBTCxFQUE4RixLQUFLNUssU0FBZUEsR0FBRyx3Q0FBckg7QUFGSixxQ0FESjtBQUtJO0FBQUE7QUFBQSwwQ0FBRyx1Q0FBb0MsS0FBS2dCLEtBQUwsQ0FBV3FILFNBQVgsQ0FBcUJ1QyxPQUFyQixDQUE2QixDQUE3QixJQUFrQyxDQUFDLENBQW5DLEdBQXVDLFFBQXZDLEdBQWtELEVBQXRGLENBQUg7QUFBQTtBQUFBO0FBTEosaUNBNURKO0FBcUVJO0FBQUE7QUFBQSxzQ0FBSyxXQUFVLGVBQWYsRUFBK0IsU0FBUyxLQUFLRCxhQUFMLENBQW1CNUssSUFBbkIsQ0FBd0IsSUFBeEIsRUFBOEIsQ0FBOUIsQ0FBeEM7QUFDSTtBQUFBO0FBQUEsMENBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhDQUFJLFdBQVUsUUFBZDtBQUFBO0FBQUEseUNBREo7QUFFSSwrRUFBSyw2QkFBMEIsS0FBS2lCLEtBQUwsQ0FBV3FILFNBQVgsQ0FBcUJ1QyxPQUFyQixDQUE2QixDQUE3QixJQUFrQyxDQUFDLENBQW5DLEdBQXVDLEVBQXZDLEdBQTRDLGVBQXRFLENBQUwsRUFBOEYsS0FBSzVLLFNBQWVBLEdBQUcsd0NBQXJIO0FBRkoscUNBREo7QUFLSTtBQUFBO0FBQUEsMENBQUcsdUNBQW9DLEtBQUtnQixLQUFMLENBQVdxSCxTQUFYLENBQXFCdUMsT0FBckIsQ0FBNkIsQ0FBN0IsSUFBa0MsQ0FBQyxDQUFuQyxHQUF1QyxRQUF2QyxHQUFrRCxFQUF0RixDQUFIO0FBQUE7QUFBQTtBQUxKLGlDQXJFSjtBQThFSTtBQUFBO0FBQUEsc0NBQUssV0FBVSxlQUFmLEVBQStCLFNBQVMsS0FBS0QsYUFBTCxDQUFtQjVLLElBQW5CLENBQXdCLElBQXhCLEVBQThCLENBQTlCLENBQXhDO0FBQ0k7QUFBQTtBQUFBLDBDQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSw4Q0FBSSxXQUFVLFFBQWQ7QUFBQTtBQUFBLHlDQURKO0FBRUksK0VBQUssNkJBQTBCLEtBQUtpQixLQUFMLENBQVdxSCxTQUFYLENBQXFCdUMsT0FBckIsQ0FBNkIsQ0FBN0IsSUFBa0MsQ0FBQyxDQUFuQyxHQUF1QyxFQUF2QyxHQUE0QyxlQUF0RSxDQUFMLEVBQThGLEtBQUs1SyxTQUFlQSxHQUFHLHdDQUFySDtBQUZKLHFDQURKO0FBS0k7QUFBQTtBQUFBLDBDQUFHLHVDQUFvQyxLQUFLZ0IsS0FBTCxDQUFXcUgsU0FBWCxDQUFxQnVDLE9BQXJCLENBQTZCLENBQTdCLElBQWtDLENBQUMsQ0FBbkMsR0FBdUMsUUFBdkMsR0FBa0QsRUFBdEYsQ0FBSDtBQUFBO0FBQUE7QUFMSixpQ0E5RUo7QUF1Rkk7QUFBQTtBQUFBLHNDQUFLLFdBQVUsZUFBZixFQUErQixTQUFTLEtBQUtELGFBQUwsQ0FBbUI1SyxJQUFuQixDQUF3QixJQUF4QixFQUE4QixFQUE5QixDQUF4QztBQUNJO0FBQUE7QUFBQSwwQ0FBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUEsOENBQUksV0FBVSxRQUFkO0FBQUE7QUFBQSx5Q0FESjtBQUVJLCtFQUFLLDZCQUEwQixLQUFLaUIsS0FBTCxDQUFXcUgsU0FBWCxDQUFxQnVDLE9BQXJCLENBQTZCLEVBQTdCLElBQW1DLENBQUMsQ0FBcEMsR0FBd0MsRUFBeEMsR0FBNkMsZUFBdkUsQ0FBTCxFQUErRixLQUFLNUssU0FBZUEsR0FBRyx3Q0FBdEg7QUFGSixxQ0FESjtBQUtJO0FBQUE7QUFBQSwwQ0FBRyx1Q0FBb0MsS0FBS2dCLEtBQUwsQ0FBV3FILFNBQVgsQ0FBcUJ1QyxPQUFyQixDQUE2QixFQUE3QixJQUFtQyxDQUFDLENBQXBDLEdBQXdDLFFBQXhDLEdBQW1ELEVBQXZGLENBQUg7QUFBQTtBQUFBO0FBTEosaUNBdkZKO0FBMkdJO0FBQUE7QUFBQSxzQ0FBSyxXQUFVLGVBQWYsRUFBK0IsU0FBUyxLQUFLRCxhQUFMLENBQW1CNUssSUFBbkIsQ0FBd0IsSUFBeEIsRUFBOEIsRUFBOUIsQ0FBeEM7QUFDSTtBQUFBO0FBQUEsMENBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhDQUFJLFdBQVUsUUFBZDtBQUFBO0FBQUEseUNBREo7QUFFSSwrRUFBSyw2QkFBMEIsS0FBS2lCLEtBQUwsQ0FBV3FILFNBQVgsQ0FBcUJ1QyxPQUFyQixDQUE2QixFQUE3QixJQUFtQyxDQUFDLENBQXBDLEdBQXdDLEVBQXhDLEdBQTZDLGVBQXZFLENBQUwsRUFBK0YsS0FBSzVLLFNBQWVBLEdBQUcsd0NBQXRIO0FBRkoscUNBREo7QUFLSTtBQUFBO0FBQUEsMENBQUcsdUNBQW9DLEtBQUtnQixLQUFMLENBQVdxSCxTQUFYLENBQXFCdUMsT0FBckIsQ0FBNkIsRUFBN0IsSUFBbUMsQ0FBQyxDQUFwQyxHQUF3QyxRQUF4QyxHQUFtRCxFQUF2RixDQUFIO0FBQUE7QUFBQTtBQUxKLGlDQTNHSjtBQW9ISTtBQUFBO0FBQUEsc0NBQUssV0FBVSxlQUFmLEVBQStCLFNBQVMsS0FBS0QsYUFBTCxDQUFtQjVLLElBQW5CLENBQXdCLElBQXhCLEVBQThCLEVBQTlCLENBQXhDO0FBQ0k7QUFBQTtBQUFBLDBDQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSw4Q0FBSSxXQUFVLFFBQWQ7QUFBQTtBQUFBLHlDQURKO0FBRUksK0VBQUssNkJBQTBCLEtBQUtpQixLQUFMLENBQVdxSCxTQUFYLENBQXFCdUMsT0FBckIsQ0FBNkIsRUFBN0IsSUFBbUMsQ0FBQyxDQUFwQyxHQUF3QyxFQUF4QyxHQUE2QyxlQUF2RSxDQUFMLEVBQStGLEtBQUs1SyxTQUFlQSxHQUFHLHdDQUF0SDtBQUZKLHFDQURKO0FBS0k7QUFBQTtBQUFBLDBDQUFHLHVDQUFvQyxLQUFLZ0IsS0FBTCxDQUFXcUgsU0FBWCxDQUFxQnVDLE9BQXJCLENBQTZCLEVBQTdCLElBQW1DLENBQUMsQ0FBcEMsR0FBd0MsUUFBeEMsR0FBbUQsRUFBdkYsQ0FBSDtBQUFBO0FBQUE7QUFMSjtBQXBISjtBQU5KO0FBREoscUJBeldKO0FBdWdCSTtBQUFBO0FBQUEsMEJBQUcsV0FBVSx3QkFBYixFQUFzQyxTQUFTO0FBQUEsdUNBQU0sT0FBS2xOLEtBQUwsQ0FBV29ELE9BQVgsQ0FBbUJDLElBQW5CLENBQXdCLFFBQXhCLENBQU47QUFBQSw2QkFBL0M7QUFBQTtBQUFBO0FBdmdCSjtBQTlRSixhQURKLEdBMnhCTSwwQ0E3eEJWO0FBK3hCSDs7OztFQTk3QnFCZCxnQkFBTUMsUzs7a0JBaThCakJ3RyxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDajlCZjs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUhBLElBQU12RyxjQUFjQyxtQkFBT0EsQ0FBQywwREFBUixDQUFwQjs7SUFLTTBLLFc7OztBQUNGLHlCQUFZcE4sS0FBWixFQUFtQjtBQUFBOztBQUFBLDhIQUNUQSxLQURTOztBQUVmLGNBQUtzRCxLQUFMLEdBQWE7QUFDVDtBQURTLFNBQWI7QUFGZTtBQUtsQjs7OztpQ0FFUTtBQUFBOztBQUNMLGdCQUFJNEMsT0FBTyxJQUFYO0FBQ0EsZ0JBQUl5RixtQkFBbUIsS0FBdkI7QUFDQSxnQkFBSTBCLGlDQUFKO0FBQ0k7QUFDSSxxQkFBS3JOLEtBQUwsQ0FBV3VELGtCQUFYLElBQWlDSyxPQUFPQyxJQUFQLENBQVksS0FBSzdELEtBQUwsQ0FBV3VELGtCQUF2QixFQUEyQzVCLE1BQTNDLEdBQW9ELENBQXJGLElBQTBGLEtBQUszQixLQUFMLENBQVdzRSxXQUFYLENBQXVCRSxVQUFqSCxJQUErSCxLQUFLeEUsS0FBTCxDQUFXc0UsV0FBWCxDQUF1QkUsVUFBdkIsQ0FBa0M3QyxNQUFqSyxHQUNBaUMsT0FBT2dJLE9BQVAsQ0FBZSxLQUFLNUwsS0FBTCxDQUFXc0UsV0FBWCxDQUF1QkUsVUFBdEMsRUFBa0QzQyxHQUFsRCxDQUFzRCxnQkFBd0I7QUFBQTtBQUFBLHdCQUFiRSxHQUFhO0FBQUEsd0JBQVI4SixLQUFROztBQUMxRSx3QkFBR0EsTUFBTTlFLFdBQVQsRUFBcUI7QUFDakJzRyxtREFBMkJ4QixNQUFNckQsVUFBakM7QUFDSDtBQUNELHdCQUFHc0QsU0FBU0QsTUFBTTdKLEVBQWYsS0FBc0I4SixTQUFTNUYsS0FBS2xHLEtBQUwsQ0FBV3VELGtCQUFYLENBQThCdkIsRUFBdkMsQ0FBekIsRUFBb0U7QUFDaEUySiwyQ0FBbUIsSUFBbkI7QUFDSDtBQUNKLGlCQVBELENBREEsR0FTQyxFQVREO0FBVUg7O0FBRUwsbUJBRUksS0FBSzNMLEtBQUwsQ0FBV3NFLFdBQVgsSUFBMEJWLE9BQU9DLElBQVAsQ0FBWSxLQUFLN0QsS0FBTCxDQUFXc0UsV0FBdkIsRUFBb0MzQyxNQUFwQyxHQUE2QyxDQUF2RSxJQUE0RSxLQUFLM0IsS0FBTCxDQUFXdUQsa0JBQXZGLElBQTZHSyxPQUFPQyxJQUFQLENBQVksS0FBSzdELEtBQUwsQ0FBV3VELGtCQUF2QixFQUEyQzVCLE1BQTNDLEdBQW9ELENBQWpLLEdBRVE7QUFBQTtBQUFBLGtCQUFTLGlEQUE4QyxLQUFLM0IsS0FBTCxDQUFXOEQsYUFBWCxHQUEyQixFQUEzQixHQUFnQyxFQUE5RSxDQUFUO0FBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsaUNBQWY7QUFDSSxrREFBQyxpQkFBRCxPQURKO0FBRUk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsc0JBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxrQkFBZjtBQUNJO0FBQUE7QUFBQSxrQ0FBSyxXQUFVLGdDQUFmO0FBQ0k7QUFBQTtBQUFBLHNDQUFLLFdBQVUsb0JBQWY7QUFFUSx5Q0FBSzlELEtBQUwsQ0FBV3VELGtCQUFYLElBQWlDSyxPQUFPQyxJQUFQLENBQVksS0FBSzdELEtBQUwsQ0FBV3VELGtCQUF2QixFQUEyQzVCLE1BQTNDLEdBQW9ELENBQXJGLElBQTBGLEtBQUszQixLQUFMLENBQVdnRSxXQUFyRyxJQUFvSCxLQUFLaEUsS0FBTCxDQUFXc0UsV0FBL0gsSUFBOEksS0FBS3RFLEtBQUwsQ0FBV3NFLFdBQVgsQ0FBdUJFLFVBQXJLLElBQW1MLEtBQUt4RSxLQUFMLENBQVdzRSxXQUFYLENBQXVCRSxVQUF2QixDQUFrQzdDLE1BQWxDLEdBQTJDLENBQTlOLEdBQ0k7QUFBQTtBQUFBLDBDQUFHLFNBQVMsS0FBSzNCLEtBQUwsQ0FBVzZJLGNBQVgsQ0FBMEJ4RyxJQUExQixDQUErQixJQUEvQixFQUFvQyxJQUFwQyxDQUFaLEVBQXVELDJCQUF3QnNKLG1CQUFtQixRQUFuQixHQUE4QixFQUF0RCxDQUF2RDtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSx5REFBYzBCLHdCQUFkO0FBQUE7QUFESixxQ0FESixHQUlFLEVBTlY7QUFTUSx5Q0FBS3JOLEtBQUwsQ0FBV3NFLFdBQVgsSUFBMEIsS0FBS3RFLEtBQUwsQ0FBV3NFLFdBQVgsQ0FBdUJDLEtBQWpELElBQTBELEtBQUt2RSxLQUFMLENBQVdzRSxXQUFYLENBQXVCQyxLQUF2QixDQUE2QjVDLE1BQTdCLEdBQXNDLENBQWhHLEdBQ0lpQyxPQUFPZ0ksT0FBUCxDQUFlLEtBQUs1TCxLQUFMLENBQVdzRSxXQUFYLENBQXVCQyxLQUF0QyxFQUE2QzFDLEdBQTdDLENBQWlELGlCQUF3QjtBQUFBO0FBQUEsNENBQWJFLEdBQWE7QUFBQSw0Q0FBUjhKLEtBQVE7O0FBRXJFLCtDQUFPO0FBQUE7QUFBQSw4Q0FBRyxTQUFTM0YsS0FBS2xHLEtBQUwsQ0FBVzJJLFVBQVgsQ0FBc0J0RyxJQUF0QixDQUEyQjZELElBQTNCLEVBQWlDMkYsS0FBakMsQ0FBWixFQUFxRCxLQUFLOUosR0FBMUQsRUFBK0QsMkJBQXdCOEosTUFBTTdKLEVBQU4sSUFBWWtFLEtBQUtsRyxLQUFMLENBQVcyRCxnQkFBdkIsR0FBMEMsUUFBMUMsR0FBcUQsRUFBN0UsQ0FBL0Q7QUFBbUprSSxrREFBTUUsU0FBeko7QUFBQTtBQUFvSztBQUFBO0FBQUE7QUFBQSw2REFDaEtGLE1BQU1yRCxVQUQwSjtBQUFBO0FBQXBLLHlDQUFQO0FBS0gscUNBUEQsQ0FESixHQVNFO0FBbEJWLGlDQURKO0FBc0JJO0FBQUE7QUFBQSxzQ0FBSyxXQUFVLE9BQWY7QUFDSTtBQUFBO0FBQUEsMENBQUssV0FBVSxpQkFBZjtBQUNJO0FBQUE7QUFBQSw4Q0FBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUEsa0RBQUcsV0FBVSxTQUFiO0FBQ0ksdUZBQUssS0FBS2xHLFNBQWVBLEdBQUcsaUJBQTVCLEdBREo7QUFDcUQ7QUFBQTtBQUFBO0FBQUE7QUFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFoQjtBQURyRCw2Q0FESjtBQUlJO0FBQUE7QUFBQSxrREFBRyxXQUFVLFNBQWI7QUFDSSx1RkFBSyxLQUFLQSxTQUFlQSxHQUFHLGtCQUE1QixHQURKO0FBQ3NEO0FBQUE7QUFBQTtBQUFBO0FBQW1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbkI7QUFEdEQ7QUFKSjtBQURKLHFDQURKO0FBV0k7QUFBQTtBQUFBLDBDQUFLLFdBQVUsU0FBZjtBQUNJO0FBQUE7QUFBQSw4Q0FBSSxXQUFVLFNBQWQ7QUFFUXNCLG1EQUFPQyxJQUFQLENBQVksS0FBSzdELEtBQUwsQ0FBV3VELGtCQUFYLENBQThCK0osS0FBMUMsRUFBaUQzTCxNQUFqRCxHQUEwRCxDQUExRCxJQUErRCxLQUFLM0IsS0FBTCxDQUFXdUQsa0JBQVgsQ0FBOEIrSixLQUE5QixDQUFvQ0MscUJBQXBDLElBQTZELEVBQTVILEdBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBMEIscURBQUt2TixLQUFMLENBQVd1RCxrQkFBWCxDQUE4QitKLEtBQTlCLENBQW9DQyxxQkFBOUQ7QUFBQTtBQUFBLDZDQURKLEdBRU0sRUFKZDtBQU9RM0osbURBQU9DLElBQVAsQ0FBWSxLQUFLN0QsS0FBTCxDQUFXdUQsa0JBQVgsQ0FBOEIrSixLQUExQyxFQUFpRDNMLE1BQWpELEdBQTBELENBQTFELElBQStELEtBQUszQixLQUFMLENBQVd1RCxrQkFBWCxDQUE4QitKLEtBQTlCLENBQW9DRSxzQkFBcEMsSUFBOEQsRUFBN0gsR0FDSTtBQUFBO0FBQUE7QUFBQTtBQUF1QixxREFBS3hOLEtBQUwsQ0FBV3VELGtCQUFYLENBQThCK0osS0FBOUIsQ0FBb0NFO0FBQTNELDZDQURKLEdBRU07QUFUZCx5Q0FESjtBQWFJO0FBQUE7QUFBQSw4Q0FBSSxXQUFVLFNBQWQ7QUFFUTVKLG1EQUFPQyxJQUFQLENBQVksS0FBSzdELEtBQUwsQ0FBV3VELGtCQUFYLENBQThCK0osS0FBMUMsRUFBaUQzTCxNQUFqRCxHQUEwRCxDQUExRCxJQUErRCxLQUFLM0IsS0FBTCxDQUFXdUQsa0JBQVgsQ0FBOEIrSixLQUE5QixDQUFvQ0csa0JBQXBDLElBQTBELEVBQXpILEdBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBZ0MscURBQUt6TixLQUFMLENBQVd1RCxrQkFBWCxDQUE4QitKLEtBQTlCLENBQW9DRztBQUFwRSw2Q0FESixHQUVNLEVBSmQ7QUFPUTdKLG1EQUFPQyxJQUFQLENBQVksS0FBSzdELEtBQUwsQ0FBV3VELGtCQUFYLENBQThCK0osS0FBMUMsRUFBaUQzTCxNQUFqRCxHQUEwRCxDQUExRCxJQUErRCxLQUFLM0IsS0FBTCxDQUFXdUQsa0JBQVgsQ0FBOEIrSixLQUE5QixDQUFvQ0ksVUFBcEMsSUFBa0QsRUFBakgsR0FDSTtBQUFBO0FBQUE7QUFBQTtBQUF5QixxREFBSzFOLEtBQUwsQ0FBV3VELGtCQUFYLENBQThCK0osS0FBOUIsQ0FBb0NJO0FBQTdELDZDQURKLEdBRU07QUFUZDtBQWJKO0FBWEosaUNBdEJKO0FBK0RRLHFDQUFLMU4sS0FBTCxDQUFXdUQsa0JBQVgsSUFBaUMsS0FBS3ZELEtBQUwsQ0FBV3VELGtCQUFYLENBQThCK0osS0FBL0QsSUFBd0UxSixPQUFPQyxJQUFQLENBQVksS0FBSzdELEtBQUwsQ0FBV3VELGtCQUFYLENBQThCK0osS0FBMUMsRUFBaUQzTCxNQUFqRCxHQUEwRCxDQUFsSSxJQUF1SSxLQUFLM0IsS0FBTCxDQUFXdUQsa0JBQVgsQ0FBOEIrSixLQUE5QixDQUFvQ0MscUJBQXBDLElBQTZELEVBQXBNLEdBQ0k7QUFBQTtBQUFBLHNDQUFLLFdBQVUsdUJBQWY7QUFDSTtBQUFBO0FBQUEsMENBQUssV0FBVSx3QkFBZjtBQUNJO0FBQUE7QUFBQSw4Q0FBSSxXQUFVLGtCQUFkO0FBQUE7QUFBQSx5Q0FESjtBQUVJO0FBQUE7QUFBQSw4Q0FBRyxXQUFVLGVBQWI7QUFBNkIsbUZBQUssS0FBS2pMLFNBQWVBLEdBQUcsa0JBQTVCLEdBQTdCO0FBQUE7QUFBQSx5Q0FGSjtBQUdJO0FBQUE7QUFBQSw4Q0FBRyxXQUFVLGVBQWI7QUFBNkIsbUZBQUssS0FBS0EsU0FBZUEsR0FBRyxrQkFBNUIsR0FBN0I7QUFBQTtBQUFBO0FBSEoscUNBREo7QUFNSTtBQUFBO0FBQUEsMENBQU0sV0FBVSxjQUFoQjtBQUFBO0FBQXdDLDZDQUFLdEMsS0FBTCxDQUFXdUQsa0JBQVgsQ0FBOEIrSixLQUE5QixDQUFvQ0MscUJBQTVFO0FBQUE7QUFBQTtBQU5KLGlDQURKLEdBU00sRUF4RWQ7QUEyRVEscUNBQUt2TixLQUFMLENBQVdvTSxZQUFYLElBQTJCLEtBQUtwTSxLQUFMLENBQVdvTSxZQUFYLENBQXdCQyxhQUFuRCxJQUFvRSxLQUFLck0sS0FBTCxDQUFXb00sWUFBWCxDQUF3QkMsYUFBeEIsQ0FBc0MxSyxNQUF0QyxHQUErQyxDQUFuSCxJQUNBO0FBQUE7QUFBQSxzQ0FBSyxXQUFVLDZCQUFmO0FBQ1Esa0VBQUMsc0JBQUQsSUFBYyxZQUFXLHVCQUF6QixFQUFpRCxVQUFVLEtBQUszQixLQUFMLENBQVdvTSxZQUFYLENBQXdCQyxhQUFuRixFQUFrRyxVQUFTLG1CQUEzRyxFQUErSCxxQkFBcUIsNkJBQUN2SyxJQUFELEVBQU1lLEdBQU47QUFBQSxtREFBYyxPQUFLN0MsS0FBTCxDQUFXNEMsbUJBQVgsQ0FBK0JkLElBQS9CLEVBQW9DZSxHQUFwQyxDQUFkO0FBQUEseUNBQXBKLEVBQTRNLGFBQWEsSUFBek4sRUFBK04sY0FBYSx1QkFBNU8sRUFBb1EsWUFBYTtBQUFBLG1EQUFJLE9BQUs3QyxLQUFMLENBQVc0SSwwQkFBWCxDQUFzQytDLGdCQUF0QyxDQUFKO0FBQUEseUNBQWpSLEVBQThVLFNBQVMsSUFBdlY7QUFEUixpQ0E1RVI7QUFpRlEscUNBQUszTCxLQUFMLENBQVd1TSxlQUFYLElBQThCLEtBQUt2TSxLQUFMLENBQVd1TSxlQUFYLENBQTJCQyxTQUF6RCxJQUFzRSxLQUFLeE0sS0FBTCxDQUFXdU0sZUFBWCxDQUEyQkMsU0FBM0IsQ0FBcUM3SyxNQUFyQyxHQUE4QyxDQUFwSCxJQUNBO0FBQUE7QUFBQSxzQ0FBSyxXQUFVLDZCQUFmO0FBQ1Esa0VBQUMsc0JBQUQsSUFBYyxZQUFXLG9CQUF6QixFQUE4QyxVQUFVLEtBQUszQixLQUFMLENBQVd1TSxlQUFYLENBQTJCQyxTQUFuRixFQUE4RixVQUFTLHNCQUF2RyxFQUE4SCxxQkFBcUIsNkJBQUMzSixHQUFELEVBQU1mLElBQU47QUFBQSxtREFBZSxPQUFLOUIsS0FBTCxDQUFXNEMsbUJBQVgsQ0FBK0JDLEdBQS9CLEVBQW9DZixJQUFwQyxDQUFmO0FBQUEseUNBQW5KO0FBRFIsaUNBbEZSO0FBd0ZRLHFDQUFLOUIsS0FBTCxDQUFXdUQsa0JBQVgsSUFBaUMsS0FBS3ZELEtBQUwsQ0FBV3VELGtCQUFYLENBQThCK0osS0FBL0QsSUFBd0UxSixPQUFPQyxJQUFQLENBQVksS0FBSzdELEtBQUwsQ0FBV3VELGtCQUFYLENBQThCK0osS0FBMUMsRUFBaUQzTCxNQUFqRCxHQUEwRCxDQUFsSSxJQUF1SSxLQUFLM0IsS0FBTCxDQUFXdUQsa0JBQVgsQ0FBOEIrSixLQUE5QixDQUFvQ0csa0JBQXBDLElBQTBELEVBQWpNLEdBQ0k7QUFBQTtBQUFBLHNDQUFLLFdBQVUsdUJBQWY7QUFDSTtBQUFBO0FBQUEsMENBQUssV0FBVSx5QkFBZjtBQUNJO0FBQUE7QUFBQSw4Q0FBSSxXQUFVLGtCQUFkO0FBQUE7QUFBQSx5Q0FESjtBQUVJO0FBQUE7QUFBQSw4Q0FBRyxXQUFVLGVBQWI7QUFBNkIsbUZBQUssS0FBS25MLFNBQWVBLEdBQUcsa0JBQTVCLEdBQTdCO0FBQUE7QUFBd0c7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FBeEc7QUFBQTtBQUFBLHlDQUZKO0FBR0k7QUFBQTtBQUFBLDhDQUFHLFdBQVUsZUFBYjtBQUE2QixtRkFBSyxLQUFLQSxTQUFlQSxHQUFHLGtCQUE1QixHQUE3QjtBQUFBO0FBQUE7QUFISixxQ0FESjtBQU1JO0FBQUE7QUFBQSwwQ0FBTSxXQUFVLGNBQWhCO0FBQUE7QUFBdUMsNkNBQUt0QyxLQUFMLENBQVd1RCxrQkFBWCxDQUE4QitKLEtBQTlCLENBQW9DRyxrQkFBM0U7QUFBQTtBQUFBO0FBTkosaUNBREosR0FTTSxFQWpHZDtBQW9HUSxxQ0FBS3pOLEtBQUwsQ0FBV3VELGtCQUFYLElBQWlDLEtBQUt2RCxLQUFMLENBQVd1RCxrQkFBWCxDQUE4QitKLEtBQS9ELElBQXdFMUosT0FBT0MsSUFBUCxDQUFZLEtBQUs3RCxLQUFMLENBQVd1RCxrQkFBWCxDQUE4QitKLEtBQTFDLEVBQWlEM0wsTUFBakQsR0FBMEQsQ0FBbEksSUFBdUksS0FBSzNCLEtBQUwsQ0FBV3VELGtCQUFYLENBQThCK0osS0FBOUIsQ0FBb0NFLHNCQUFwQyxJQUE4RCxFQUFyTSxHQUNJO0FBQUE7QUFBQSxzQ0FBSyxXQUFVLHVCQUFmO0FBQ0k7QUFBQTtBQUFBLDBDQUFLLFdBQVUsMEJBQWY7QUFDSTtBQUFBO0FBQUEsOENBQUksV0FBVSxrQkFBZDtBQUFBO0FBQUEseUNBREo7QUFHUSw2Q0FBS3hOLEtBQUwsQ0FBV3VELGtCQUFYLElBQWlDLEtBQUt2RCxLQUFMLENBQVd1RCxrQkFBWCxDQUE4QitKLEtBQS9ELElBQXdFMUosT0FBT0MsSUFBUCxDQUFZLEtBQUs3RCxLQUFMLENBQVd1RCxrQkFBWCxDQUE4QitKLEtBQTFDLEVBQWlEM0wsTUFBakQsR0FBMEQsQ0FBbEksSUFBdUksS0FBSzNCLEtBQUwsQ0FBV3VELGtCQUFYLENBQThCK0osS0FBOUIsQ0FBb0NLLDBCQUEzSyxHQUNJO0FBQUE7QUFBQSw4Q0FBRyxXQUFVLGVBQWI7QUFBNkIsbUZBQUssS0FBS3JMLFNBQWVBLEdBQUcsa0JBQTVCLEdBQTdCO0FBQWdGLGlEQUFLdEMsS0FBTCxDQUFXdUQsa0JBQVgsQ0FBOEIrSixLQUE5QixDQUFvQ0ssMEJBQXBIO0FBQUE7QUFBaUosaURBQUszTixLQUFMLENBQVd1RCxrQkFBWCxDQUE4QitKLEtBQTlCLENBQW9DSywwQkFBcEMsSUFBa0UsQ0FBbEUsR0FBc0UsUUFBdEUsR0FBaUYsU0FBbE87QUFBQTtBQUFBLHlDQURKLEdBRU0sRUFMZDtBQVFRLDZDQUFLM04sS0FBTCxDQUFXdUQsa0JBQVgsSUFBaUMsS0FBS3ZELEtBQUwsQ0FBV3VELGtCQUFYLENBQThCK0osS0FBL0QsSUFBd0UxSixPQUFPQyxJQUFQLENBQVksS0FBSzdELEtBQUwsQ0FBV3VELGtCQUFYLENBQThCK0osS0FBMUMsRUFBaUQzTCxNQUFqRCxHQUEwRCxDQUFsSSxJQUF1SSxLQUFLM0IsS0FBTCxDQUFXdUQsa0JBQVgsQ0FBOEIrSixLQUE5QixDQUFvQ00sNkJBQTNLLEdBQ0k7QUFBQTtBQUFBLDhDQUFHLFdBQVUsZUFBYjtBQUE2QixtRkFBSyxLQUFLdEwsU0FBZUEsR0FBRyxrQkFBNUIsR0FBN0I7QUFBZ0YsaURBQUt0QyxLQUFMLENBQVd1RCxrQkFBWCxDQUE4QitKLEtBQTlCLENBQW9DTSw2QkFBcEg7QUFBQTtBQUFBLHlDQURKLEdBRU07QUFWZCxxQ0FESjtBQWNJO0FBQUE7QUFBQSwwQ0FBTSxXQUFVLGNBQWhCO0FBQUE7QUFBdUMsNkNBQUs1TixLQUFMLENBQVd1RCxrQkFBWCxDQUE4QitKLEtBQTlCLENBQW9DRSxzQkFBM0U7QUFBQTtBQUFBO0FBZEosaUNBREosR0FpQk0sRUFySGQ7QUF1SEk7QUFBQTtBQUFBLHNDQUFLLFdBQVUsd0JBQWY7QUFDSTtBQUFBO0FBQUEsMENBQUksV0FBVSxlQUFkO0FBQThCLCtFQUFLLFdBQVUsV0FBZixFQUEyQixLQUFLbEwsU0FBZUEsR0FBRyxzQkFBbEQsR0FBOUI7QUFBQTtBQUFBLHFDQURKO0FBRUk7QUFBQTtBQUFBLDBDQUFLLFdBQVUsY0FBZjtBQUNJO0FBQUE7QUFBQSw4Q0FBRyxXQUFVLGVBQWI7QUFBNkIsbUZBQUssS0FBS0EsU0FBZUEsR0FBRyxrQkFBNUIsR0FBN0I7QUFBQTtBQUFBLHlDQURKO0FBRUk7QUFBQTtBQUFBLDhDQUFHLFdBQVUsZUFBYjtBQUE2QixtRkFBSyxLQUFLQSxTQUFlQSxHQUFHLGtCQUE1QixHQUE3QjtBQUFBO0FBQUE7QUFGSjtBQUZKLGlDQXZISjtBQStISTtBQUFBO0FBQUEsc0NBQUssV0FBVSx1QkFBZjtBQUNJO0FBQUE7QUFBQSwwQ0FBSyxXQUFVLGdDQUFmO0FBQ0k7QUFBQTtBQUFBLDhDQUFLLFdBQVUsaUJBQWY7QUFDSTtBQUFBO0FBQUEsa0RBQUksV0FBVSxrQkFBZDtBQUFBO0FBQUEsNkNBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFESjtBQURKLGlDQS9ISjtBQXVJSTtBQUFBO0FBQUEsc0NBQUssV0FBVSx1QkFBZjtBQUNJO0FBQUE7QUFBQSwwQ0FBSyxXQUFVLDZCQUFmO0FBQ0k7QUFBQTtBQUFBLDhDQUFJLFdBQVUsa0JBQWQ7QUFBQTtBQUFpRTtBQUFBO0FBQUEsa0RBQU0sV0FBVSxhQUFoQjtBQUE4QjtBQUFBO0FBQUEsc0RBQU0sV0FBVSx1QkFBaEI7QUFBQTtBQUFBLGlEQUE5QjtBQUF1Rix1RkFBSyxLQUFJLG9GQUFUO0FBQXZGLDZDQUFqRTtBQUFBO0FBQUEseUNBREo7QUFFSTtBQUFBO0FBQUEsOENBQUcsV0FBVSxlQUFiO0FBQTZCLG1GQUFLLEtBQUtBLFNBQWVBLEdBQUcsa0JBQTVCLEdBQTdCO0FBQUE7QUFBQSx5Q0FGSjtBQUdJO0FBQUE7QUFBQSw4Q0FBRyxXQUFVLGVBQWI7QUFBNkIsbUZBQUssS0FBS0EsU0FBZUEsR0FBRyxrQkFBNUIsR0FBN0I7QUFBQTtBQUFBLHlDQUhKO0FBSUk7QUFBQTtBQUFBLDhDQUFHLFdBQVUsZUFBYjtBQUE2QixtRkFBSyxLQUFLQSxTQUFlQSxHQUFHLGtCQUE1QixHQUE3QjtBQUFBO0FBQUEseUNBSko7QUFLSTtBQUFBO0FBQUEsOENBQUcsV0FBVSxXQUFiO0FBQXlCO0FBQUE7QUFBQSxrREFBRyxXQUFVLFVBQWIsRUFBd0IsU0FBUyxLQUFLdEMsS0FBTCxDQUFXOEksTUFBWCxDQUFrQnpHLElBQWxCLENBQXVCLElBQXZCLEVBQTRCLElBQTVCLENBQWpDO0FBQUE7QUFBQTtBQUF6QjtBQUxKO0FBREosaUNBdklKO0FBaUpRLHFDQUFLckMsS0FBTCxDQUFXdUQsa0JBQVgsSUFBaUMsS0FBS3ZELEtBQUwsQ0FBV3VELGtCQUFYLENBQThCK0osS0FBL0QsSUFBd0UxSixPQUFPQyxJQUFQLENBQVksS0FBSzdELEtBQUwsQ0FBV3VELGtCQUFYLENBQThCK0osS0FBMUMsRUFBaUQzTCxNQUFqRCxHQUEwRCxDQUFsSSxJQUF1SSxLQUFLM0IsS0FBTCxDQUFXdUQsa0JBQVgsQ0FBOEIrSixLQUE5QixDQUFvQ0ksVUFBcEMsSUFBa0QsRUFBekwsR0FDSTtBQUFBO0FBQUEsc0NBQUssV0FBVSx1QkFBZjtBQUNJO0FBQUE7QUFBQSwwQ0FBSyxXQUFVLDJCQUFmO0FBQ0k7QUFBQTtBQUFBLDhDQUFJLFdBQVUsa0JBQWQ7QUFBQTtBQUFBLHlDQURKO0FBRUk7QUFBQTtBQUFBLDhDQUFHLFdBQVUsZUFBYjtBQUE2QixtRkFBSyxLQUFLcEwsU0FBZUEsR0FBRyxrQkFBNUIsR0FBN0I7QUFBQTtBQUFBLHlDQUZKO0FBR0k7QUFBQTtBQUFBLDhDQUFHLFdBQVUsZUFBYjtBQUE2QixtRkFBSyxLQUFLQSxTQUFlQSxHQUFHLGtCQUE1QixHQUE3QjtBQUFBO0FBQUE7QUFISixxQ0FESjtBQU1JO0FBQUE7QUFBQSwwQ0FBTSxXQUFVLGNBQWhCO0FBQUE7QUFBdUMsNkNBQUt0QyxLQUFMLENBQVd1RCxrQkFBWCxDQUE4QitKLEtBQTlCLENBQW9DSSxVQUEzRTtBQUFBO0FBQUE7QUFOSixpQ0FESixHQVNNLEVBMUpkO0FBOEpRLHFDQUFLMU4sS0FBTCxDQUFXdUQsa0JBQVgsSUFBaUMsS0FBS3ZELEtBQUwsQ0FBV3VELGtCQUFYLENBQThCc0ssT0FBL0QsSUFBMEVqSyxPQUFPQyxJQUFQLENBQVksS0FBSzdELEtBQUwsQ0FBV3VELGtCQUFYLENBQThCc0ssT0FBMUMsRUFBbURsTSxNQUFuRCxHQUE0RCxDQUF0SSxJQUEySSxLQUFLM0IsS0FBTCxDQUFXdUQsa0JBQVgsQ0FBOEJ1SyxPQUF6SyxJQUFvTGxLLE9BQU9DLElBQVAsQ0FBWSxLQUFLN0QsS0FBTCxDQUFXdUQsa0JBQVgsQ0FBOEJ1SyxPQUExQyxFQUFtRG5NLE1BQW5ELEdBQTRELENBQWhQLEdBQ0k7QUFBQTtBQUFBLHNDQUFLLFdBQVUseUJBQWY7QUFDSTtBQUFBO0FBQUEsMENBQUssV0FBVSxxQkFBZjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixxQ0FESjtBQUlJO0FBQUE7QUFBQSwwQ0FBSyxXQUFVLG9CQUFmO0FBQ0k7QUFBQTtBQUFBLDhDQUFLLFdBQVUsZUFBZjtBQUNJO0FBQUE7QUFBQSxrREFBSSxXQUFVLGNBQWQ7QUFBQTtBQUFBLDZDQURKO0FBRUk7QUFBQTtBQUFBLGtEQUFJLFdBQVUsYUFBZDtBQUNJO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQXNCO0FBQUE7QUFBQTtBQUFBO0FBQVEsaUVBQUszQixLQUFMLENBQVd1RCxrQkFBWCxDQUE4QnNLLE9BQTlCLENBQXNDTjtBQUE5QztBQUF0QjtBQUFKLGlEQURKO0FBRUk7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBbUI7QUFBQTtBQUFBO0FBQUE7QUFBUSxpRUFBS3ZOLEtBQUwsQ0FBV3VELGtCQUFYLENBQThCc0ssT0FBOUIsQ0FBc0NKO0FBQTlDO0FBQW5CO0FBQUosaURBRko7QUFHSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFtQjtBQUFBO0FBQUE7QUFBQTtBQUFRLGlFQUFLek4sS0FBTCxDQUFXdUQsa0JBQVgsQ0FBOEJzSyxPQUE5QixDQUFzQ0w7QUFBOUM7QUFBbkI7QUFBSixpREFISjtBQUlJO0FBQUE7QUFBQSxzREFBSSxXQUFVLFdBQWQ7QUFBMEI7QUFBQTtBQUFBO0FBQUE7QUFBbUI7QUFBQTtBQUFBO0FBQUE7QUFBUSxpRUFBS3hOLEtBQUwsQ0FBV3VELGtCQUFYLENBQThCc0ssT0FBOUIsQ0FBc0NFO0FBQTlDO0FBQW5CO0FBQTFCO0FBSko7QUFGSix5Q0FESjtBQVVJO0FBQUE7QUFBQSw4Q0FBSyxXQUFVLGVBQWY7QUFDSTtBQUFBO0FBQUEsa0RBQUksV0FBVSxjQUFkO0FBQUE7QUFBQSw2Q0FESjtBQUVJO0FBQUE7QUFBQSxrREFBSSxXQUFVLGFBQWQ7QUFDSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFlO0FBQUE7QUFBQTtBQUFBO0FBQVEsaUVBQUsvTixLQUFMLENBQVd1RCxrQkFBWCxDQUE4QnVLLE9BQTlCLENBQXNDdkY7QUFBOUM7QUFBZjtBQUFKLGlEQURKO0FBRUk7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBUSxpRUFBS3ZJLEtBQUwsQ0FBV3VELGtCQUFYLENBQThCdUssT0FBOUIsQ0FBc0N0RjtBQUE5QztBQUFoQjtBQUFKLGlEQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBcUI7QUFBQTtBQUFBO0FBQUE7QUFBUSxpRUFBS3hJLEtBQUwsQ0FBV3VELGtCQUFYLENBQThCdUssT0FBOUIsQ0FBc0NKO0FBQTlDO0FBQXJCO0FBQUosaURBSEo7QUFJSTtBQUFBO0FBQUEsc0RBQUksV0FBVSxlQUFkO0FBQThCO0FBQUE7QUFBQTtBQUFBO0FBQW9CO0FBQUE7QUFBQTtBQUFBO0FBQVEsaUVBQUsxTixLQUFMLENBQVd1RCxrQkFBWCxDQUE4QnVLLE9BQTlCLENBQXNDQztBQUE5QztBQUFwQjtBQUE5QjtBQUpKO0FBRko7QUFWSixxQ0FKSjtBQXlCSTtBQUFBO0FBQUEsMENBQUcsV0FBVSxhQUFiO0FBQTJCLCtFQUFLLFdBQVUsV0FBZixFQUEyQixLQUFLekwsU0FBZUEsR0FBRyxrQkFBbEQsR0FBM0I7QUFBQTtBQUF5SDtBQUFBO0FBQUE7QUFBQTtBQUFVN0IsaURBQUtpSixLQUFMLENBQVdvQyxTQUFTLEtBQUs5TCxLQUFMLENBQVd1RCxrQkFBWCxDQUE4QmlGLFVBQXZDLElBQXFELEVBQWhFO0FBQVY7QUFBekg7QUF6QkosaUNBREosR0E0Qk0sRUExTGQ7QUE0TEksOERBQUMsMEJBQUQsT0E1TEo7QUE4TFEscUNBQUt4SSxLQUFMLENBQVd1RCxrQkFBWCxJQUFpQyxLQUFLdkQsS0FBTCxDQUFXdUQsa0JBQVgsQ0FBOEJ5SyxPQUEvRCxJQUEwRXBLLE9BQU9DLElBQVAsQ0FBWSxLQUFLN0QsS0FBTCxDQUFXdUQsa0JBQVgsQ0FBOEJ5SyxPQUExQyxFQUFtRHJNLE1BQW5ELEdBQTRELENBQXRJLElBQTJJLEtBQUszQixLQUFMLENBQVd1RCxrQkFBWCxDQUE4QnlLLE9BQTlCLENBQXNDQyxnQkFBakwsSUFBcU0sS0FBS2pPLEtBQUwsQ0FBV3VELGtCQUFYLENBQThCeUssT0FBOUIsQ0FBc0NDLGdCQUF0QyxDQUF1RHRNLE1BQXZELEdBQWdFLENBQXJRLEdBQ0k7QUFBQTtBQUFBLHNDQUFLLFdBQVUsY0FBZjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBREo7QUFFSTtBQUFBO0FBQUE7QUFFUWlDLCtDQUFPZ0ksT0FBUCxDQUFlLEtBQUs1TCxLQUFMLENBQVd1RCxrQkFBWCxDQUE4QnlLLE9BQTlCLENBQXNDQyxnQkFBckQsRUFBdUVwTSxHQUF2RSxDQUEyRSxpQkFBd0I7QUFBQTtBQUFBLGdEQUFiRSxHQUFhO0FBQUEsZ0RBQVI4SixLQUFROztBQUMvRixtREFBTztBQUFBO0FBQUEsa0RBQUksS0FBSzlKLEdBQVQ7QUFBZThKO0FBQWYsNkNBQVA7QUFDSCx5Q0FGRDtBQUZSO0FBRkosaUNBREosR0FVYTtBQXhNckI7QUFESjtBQURKO0FBRkosaUJBREo7QUFtTkk7QUFBQTtBQUFBLHNCQUFRLFdBQVUsY0FBbEIsRUFBaUMsU0FBUyxLQUFLN0wsS0FBTCxDQUFXZ0gsT0FBWCxDQUFtQjNFLElBQW5CLENBQXdCLElBQXhCLENBQTFDO0FBQXlFO0FBQUE7QUFBQTtBQUFBO0FBQWUsNkJBQUtyQyxLQUFMLENBQVd1RCxrQkFBWCxDQUE4QmlGO0FBQTdDLHFCQUF6RTtBQUNJO0FBQUE7QUFBQSwwQkFBRyxXQUFVLGdCQUFiO0FBQUE7QUFBQTtBQURKO0FBbk5KLGFBRlIsR0F5Tk0sMENBM05WO0FBNk5IOzs7O0VBdFBxQmpHLGdCQUFNQyxTOztrQkF5UGpCNEssVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeFFmOzs7Ozs7a0JBRWUsVUFBQ3BOLEtBQUQsRUFBVzs7QUFFdEIsV0FDSTtBQUFBO0FBQUEsVUFBSyxXQUFVLDZCQUFmO0FBQ29DO0FBQUE7QUFBQSxjQUFLLFdBQVUsa0JBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosU0FEcEM7QUFJb0M7QUFBQTtBQUFBLGNBQUssV0FBVSxvQkFBZjtBQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLDZDQUFmO0FBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsNkJBQWY7QUFDRztBQUFBO0FBQUEsMEJBQUssV0FBVSxpQkFBZjtBQUNJLCtEQUFLLEtBQUtzQyxTQUFlQSxHQUFFLG9CQUEzQixHQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGSjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISjtBQURILGlCQURKO0FBUUk7QUFBQTtBQUFBLHNCQUFLLFdBQVUsNkJBQWY7QUFDRztBQUFBO0FBQUEsMEJBQUssV0FBVSxpQkFBZjtBQUNJLCtEQUFLLEtBQUtBLFNBQWVBLEdBQUUsb0JBQTNCLEdBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKO0FBREgsaUJBUko7QUFlSTtBQUFBO0FBQUEsc0JBQUssV0FBVSw2QkFBZjtBQUNHO0FBQUE7QUFBQSwwQkFBSyxXQUFVLGlCQUFmO0FBQ0ksK0RBQUssS0FBS0EsU0FBZUEsR0FBRSxvQkFBM0IsR0FESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEo7QUFESCxpQkFmSjtBQXNCSTtBQUFBO0FBQUEsc0JBQUssV0FBVSw2QkFBZjtBQUNHO0FBQUE7QUFBQSwwQkFBSyxXQUFVLGlCQUFmO0FBQ0ksK0RBQUssS0FBS0EsU0FBZUEsR0FBRSxvQkFBM0IsR0FESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEo7QUFESDtBQXRCSjtBQURKO0FBSnBDLEtBREo7QUF3Q0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNEOzs7Ozs7a0JBRWUsZ0JBQThDO0FBQUEsUUFBM0N3RyxNQUEyQyxRQUEzQ0EsTUFBMkM7QUFBQSxRQUFwQzlJLEtBQW9DLFFBQXBDQSxLQUFvQztBQUFBLFFBQTlCa08sdUJBQThCLFFBQTlCQSx1QkFBOEI7O0FBQ3pELFdBQU87QUFBQTtBQUFBO0FBQ0gsK0NBQUssV0FBVSxzQ0FBZixFQUFzRCxTQUFTcEYsTUFBL0QsR0FERztBQUVIO0FBQUE7QUFBQSxjQUFLLFdBQVUsd0RBQWY7QUFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVSwyREFBZjtBQUNJO0FBQUE7QUFBQSxzQkFBRyxXQUFVLGdDQUFiO0FBQUE7QUFBQSxpQkFESjtBQUVJLHVEQUFLLEtBQUt4RyxTQUFlQSxHQUFHLHNCQUE1QixFQUFvRCxXQUFVLGFBQTlELEVBQTRFLFNBQVN3RyxNQUFyRixHQUZKO0FBR0k7QUFISixhQURKO0FBTUk7QUFBQTtBQUFBLGtCQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSxzQkFBSSxXQUFVLE9BQWQ7QUFBc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QixpQkFESjtBQUVJO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSixpQkFGSjtBQUdJO0FBQUE7QUFBQSxzQkFBSSxXQUFVLG9CQUFkO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBeUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF6RCxxQkFESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFVO0FBQUE7QUFBQSw4QkFBRyxNQUFLLDBCQUFSO0FBQUE7QUFBQTtBQUFWLHFCQUhKO0FBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSjtBQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMSixpQkFISjtBQVVJO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSixpQkFWSjtBQVdJO0FBQUE7QUFBQSxzQkFBSSxXQUFVLG9CQUFkO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFHSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKO0FBRUk7QUFBQTtBQUFBLDhCQUFJLFdBQVUsdUJBQWQ7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFGSjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSEo7QUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFGSixxQkFISjtBQVlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaSjtBQVhKO0FBTko7QUFGRyxLQUFQO0FBb0NILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0Q7Ozs7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFIQTs7O0FBSUEsSUFBTXJHLGNBQWNDLG1CQUFPQSxDQUFDLDBEQUFSLENBQXBCOztJQUVNeUwsTzs7O0FBRUYscUJBQVluTyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0hBQ1RBLEtBRFM7O0FBRWYsWUFBTWlMLFNBQVN4SSxZQUFZb0MsS0FBWixDQUFrQixNQUFLN0UsS0FBTCxDQUFXOEUsUUFBWCxDQUFvQkMsTUFBdEMsQ0FBZjtBQUNBLGNBQUt6QixLQUFMLEdBQVc7QUFDUHFDLDBCQUFhc0YsT0FBTzVELFVBRGI7QUFFUHpCLHFCQUFRcUYsT0FBT3hELFFBQVAsR0FBaUJ3RCxPQUFPeEQsUUFBeEIsR0FBaUMsS0FGbEM7QUFHUFksb0JBQU80QyxPQUFPNUMsTUFIUDtBQUlQO0FBQ0FqRSxxQkFBUSxNQUFLcEUsS0FBTCxDQUFXb08sS0FBWCxDQUFpQmpMLEdBQWpCLENBQXFCb0ksUUFBckIsQ0FBOEIsa0JBQTlCLENBTEQ7QUFNUHZILHlCQUFZaUgsT0FBT2pILFdBQVAsR0FBbUJpSCxPQUFPakgsV0FBMUIsR0FBc0MsS0FOM0M7QUFPUGtILDZCQUFnQkQsT0FBT29ELFlBQVAsR0FBb0JwRCxPQUFPb0QsWUFBM0IsR0FBd0MsSUFQakQ7QUFRUHBJLDZCQUFnQmdGLE9BQU9xRCxXQVJoQjtBQVNQdEMsbUJBQU1mLE9BQU81RCxVQUFQLEdBQWtCNEQsT0FBTzVELFVBQVAsSUFBcUI0RCxPQUFPNUQsVUFBUCxDQUFrQmtFLFFBQWxCLENBQTJCLGtCQUEzQixDQUF2QyxHQUFzRjtBQVRyRixTQUFYO0FBSGU7QUFjbEI7Ozs7NENBRW1COztBQUVoQixnQkFBSTlGLGtCQUFRQyxTQUFSLEVBQUosRUFBeUI7QUFDckIscUJBQUsxRixLQUFMLENBQVd1TyxjQUFYLEdBRHFCLENBQ087QUFDL0I7QUFDRCxnQkFBSXBJLE1BQUosRUFBWTtBQUNSQSx1QkFBT3FJLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDSDtBQUNELGdCQUFJQyxZQUFZO0FBQ1pDLGtDQUFrQixLQUFLMU8sS0FBTCxDQUFXME8sZ0JBRGpCO0FBRVpDLDBCQUFTLElBRkc7QUFHWi9PLHNCQUFLLEtBQUswRCxLQUFMLENBQVdjLE9BQVgsR0FBbUIsU0FBbkIsR0FBNkI7QUFIdEIsYUFBaEI7QUFLQSxpQkFBS3BFLEtBQUwsQ0FBVzRPLGtCQUFYLENBQThCSCxTQUE5QixFQWJnQixDQWEwQjtBQUMxQyxpQkFBS3pPLEtBQUwsQ0FBVzZPLGVBQVgsQ0FBMkJKLFNBQTNCLEVBZGdCLENBY3NCO0FBQ3RDLGdCQUFJM00sT0FBSyxFQUFUO0FBQ0FBLGlCQUFLNE0sZ0JBQUwsR0FBd0IsS0FBSzFPLEtBQUwsQ0FBVzBPLGdCQUFuQztBQUNBNU0saUJBQUs2RCxZQUFMLEdBQW9CLEtBQUtyQyxLQUFMLENBQVdxQyxZQUEvQjtBQUNBN0QsaUJBQUs4RCxPQUFMLEdBQWUsS0FBS3RDLEtBQUwsQ0FBV3NDLE9BQTFCO0FBQ0E5RCxpQkFBS3NDLE9BQUwsR0FBZSxLQUFLZCxLQUFMLENBQVdjLE9BQTFCO0FBQ0F0QyxpQkFBS2dOLEdBQUwsR0FBVyxLQUFLeEwsS0FBTCxDQUFXVSxXQUF0QjtBQUNBbEMsaUJBQUtpTixTQUFMLEdBQWlCLElBQWpCO0FBQ0EsaUJBQUsvTyxLQUFMLENBQVdnUCxVQUFYLENBQXNCLEtBQXRCLEVBQTRCbE4sSUFBNUIsRUF0QmdCLENBc0JrQjtBQUVyQzs7O2lDQUNPO0FBQ0osZ0JBQUcsS0FBSzlCLEtBQUwsQ0FBV2lQLGFBQVgsSUFBNkIsS0FBS2pQLEtBQUwsQ0FBV3FFLGlCQUF4QyxJQUE2RFQsT0FBT0MsSUFBUCxDQUFZLEtBQUs3RCxLQUFMLENBQVdxRSxpQkFBdkIsRUFBMEMxQyxNQUExQyxHQUFtRCxDQUFuSCxFQUFxSDtBQUNqSCx1QkFBTztBQUFDLG1DQUFELENBQU8sUUFBUDtBQUFBO0FBSUgsa0RBQUMscUJBQUQsZUFBaUIsS0FBSzNCLEtBQXRCLElBQTZCLGNBQWMsS0FBS3NELEtBQUwsQ0FBV3FDLFlBQXRELEVBQW9FLFNBQVMsS0FBS3JDLEtBQUwsQ0FBV3NDLE9BQXhGLEVBQWlHLFFBQVEsS0FBS3RDLEtBQUwsQ0FBVytFLE1BQXBILEVBQTRILFNBQVMsS0FBSy9FLEtBQUwsQ0FBV2MsT0FBaEosRUFBeUosYUFBYSxLQUFLZCxLQUFMLENBQVdVLFdBQWpMLEVBQThMLGVBQWUsS0FBS2hFLEtBQUwsQ0FBV3FFLGlCQUF4TixFQUEyTyxpQkFBaUIsS0FBS2YsS0FBTCxDQUFXNEgsZUFBdlEsRUFBd1IsaUJBQWlCLEtBQUs1SCxLQUFMLENBQVcyQyxlQUFwVCxFQUFxVSxPQUFPLEtBQUszQyxLQUFMLENBQVcwSSxLQUF2VjtBQUpHLGlCQUFQO0FBT0gsYUFSRCxNQVFLO0FBQ0Qsb0JBQUcsS0FBS2hNLEtBQUwsQ0FBV3NFLFdBQVgsQ0FBdUI0SyxXQUF2QixJQUFzQ3pKLGtCQUFRQyxTQUFSLEVBQXpDLEVBQTZEO0FBQUU7QUFDM0QseUJBQUsxRixLQUFMLENBQVdvRCxPQUFYLENBQW1CaUgsT0FBbkIsQ0FBMkIsNkJBQTNCO0FBQ0g7QUFDRCxvQkFBRyxLQUFLL0csS0FBTCxDQUFXcUMsWUFBWCxJQUEyQixLQUFLckMsS0FBTCxDQUFXc0MsT0FBekMsRUFBaUQ7QUFDN0MsMkJBQU87QUFBQTtBQUFBLDBCQUFLLFdBQVUsbUJBQWY7QUFDQyxzREFBQyxnQkFBRDtBQURELHFCQUFQO0FBR0gsaUJBSkQsTUFJSztBQUNELDJCQUFPO0FBQUE7QUFBQSwwQkFBSyxXQUFVLG1CQUFmO0FBQ0gsc0RBQUMsOEJBQUQsSUFBZSxrQkFBa0IsSUFBakMsR0FERztBQUVILHNEQUFDLGdCQUFEO0FBRkcscUJBQVA7QUFJSDtBQUNKO0FBQ0o7Ozs7RUFuRWlCckQsZ0JBQU1DLFM7O0FBc0U1QixJQUFNMk0sa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDN0wsS0FBRCxFQUFXO0FBQy9CLFFBQU11QyxPQUFPdkMsTUFBTXVDLElBQW5CO0FBRCtCLHNCQUU4QnZDLE1BQU11QyxJQUZwQztBQUFBLFFBRXpCdUosV0FGeUIsZUFFekJBLFdBRnlCO0FBQUEsUUFFWm5LLGVBRlksZUFFWkEsZUFGWTtBQUFBLFFBRUtlLG9CQUZMLGVBRUtBLG9CQUZMO0FBQUEseUJBR3VFMUMsTUFBTStMLE9BSDdFO0FBQUEsUUFHekJKLGFBSHlCLGtCQUd6QkEsYUFIeUI7QUFBQSxRQUdWM0ssV0FIVSxrQkFHVkEsV0FIVTtBQUFBLFFBR0dELGlCQUhILGtCQUdHQSxpQkFISDtBQUFBLFFBR3NCOEcscUJBSHRCLGtCQUdzQkEscUJBSHRCO0FBQUEsUUFHNkNDLHFCQUg3QyxrQkFHNkNBLHFCQUg3QztBQUFBLGdDQVEzQjlILE1BQU1nTSxtQkFScUI7QUFBQSxRQUszQlosZ0JBTDJCLHlCQUszQkEsZ0JBTDJCO0FBQUEsUUFNM0J0QyxZQU4yQix5QkFNM0JBLFlBTjJCO0FBQUEsUUFPM0JHLGVBUDJCLHlCQU8zQkEsZUFQMkI7O0FBUy9CLFdBQU87QUFDSDFHLGtCQURHLEVBQ0c2SSxrQ0FESCxFQUNvQk8sNEJBRHBCLEVBQ21DM0ssd0JBRG5DLEVBQ2dERCxvQ0FEaEQsRUFDbUUrSyx3QkFEbkUsRUFDZ0ZoRCwwQkFEaEYsRUFDOEZHLGdDQUQ5RixFQUMrR3BCLDRDQUQvRyxFQUNzSUMsNENBRHRJLEVBQzZKbkcsZ0NBRDdKLEVBQzhLZTtBQUQ5SyxLQUFQO0FBR0gsQ0FaRDs7QUFjQSxJQUFNdUoscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3JDLFdBQU87QUFDSFIsb0JBQVksb0JBQUNTLGNBQUQsRUFBZ0IzTixJQUFoQixFQUFxQnFJLFFBQXJCO0FBQUEsbUJBQWtDcUYsU0FBUyx1QkFBV0MsY0FBWCxFQUEwQjNOLElBQTFCLEVBQStCcUksUUFBL0IsQ0FBVCxDQUFsQztBQUFBLFNBRFQ7QUFFSHZELDJCQUFtQiwyQkFBQ3pDLElBQUQsRUFBTXVMLFFBQU4sRUFBZ0J2RixRQUFoQjtBQUFBLG1CQUE2QnFGLFNBQVMsOEJBQWtCckwsSUFBbEIsRUFBdUJ1TCxRQUF2QixFQUFpQ3ZGLFFBQWpDLENBQVQsQ0FBN0I7QUFBQSxTQUZoQjtBQUdIb0Usd0JBQWdCO0FBQUEsbUJBQU1pQixTQUFTLDRCQUFULENBQU47QUFBQSxTQUhiO0FBSUhHLDZCQUFvQiw2QkFBQzdOLElBQUQ7QUFBQSxtQkFBUzBOLFNBQVMsZ0NBQW9CMU4sSUFBcEIsQ0FBVCxDQUFUO0FBQUEsU0FKakI7QUFLSDhOLGlCQUFTLGlCQUFDQyxNQUFELEVBQVFDLE1BQVIsRUFBZUMsV0FBZixFQUEyQkMsWUFBM0IsRUFBeUNDLEVBQXpDO0FBQUEsbUJBQWdEVCxTQUFTLG9CQUFRSyxNQUFSLEVBQWVDLE1BQWYsRUFBc0JDLFdBQXRCLEVBQWtDQyxZQUFsQyxFQUFnREMsRUFBaEQsQ0FBVCxDQUFoRDtBQUFBLFNBTE47QUFNSEMsbUJBQVcsbUJBQUNMLE1BQUQsRUFBU00sR0FBVCxFQUFjQyxlQUFkLEVBQThCSCxFQUE5QjtBQUFBLG1CQUFxQ1QsU0FBUyxzQkFBVUssTUFBVixFQUFrQk0sR0FBbEIsRUFBc0JDLGVBQXRCLEVBQXVDSCxFQUF2QyxDQUFULENBQXJDO0FBQUEsU0FOUjtBQU9ISSxtQkFBVztBQUFBLG1CQUFNYixTQUFTLHVCQUFULENBQU47QUFBQSxTQVBSO0FBUUg5SCxvQkFBWTtBQUFBLG1CQUFNOEgsU0FBUyx3QkFBVCxDQUFOO0FBQUEsU0FSVDtBQVNIYyxxQkFBYSxxQkFBQ3hPLElBQUQ7QUFBQSxtQkFBVTBOLFNBQVMsd0JBQVkxTixJQUFaLENBQVQsQ0FBVjtBQUFBLFNBVFY7QUFVSDhNLDRCQUFvQiw0QkFBQzJCLE1BQUQsRUFBU04sRUFBVDtBQUFBLG1CQUFnQlQsU0FBUywrQkFBbUJlLE1BQW5CLEVBQTJCTixFQUEzQixDQUFULENBQWhCO0FBQUEsU0FWakI7QUFXSE8sMkJBQW1CLDJCQUFDZCxRQUFELEVBQVdlLFFBQVg7QUFBQSxtQkFBd0JqQixTQUFTLDhCQUFrQkUsUUFBbEIsRUFBNEJlLFFBQTVCLENBQVQsQ0FBeEI7QUFBQSxTQVhoQjtBQVlINUIseUJBQWlCLHlCQUFDNkIsVUFBRCxFQUFhVCxFQUFiO0FBQUEsbUJBQW9CVCxTQUFTLDRCQUFnQmtCLFVBQWhCLEVBQTRCVCxFQUE1QixDQUFULENBQXBCO0FBQUEsU0FaZDtBQWFIMUYsaUNBQXlCLGlDQUFDbUcsVUFBRCxFQUFhVCxFQUFiO0FBQUEsbUJBQW9CVCxTQUFTLG9DQUF3QmtCLFVBQXhCLEVBQW9DVCxFQUFwQyxDQUFULENBQXBCO0FBQUE7QUFidEIsS0FBUDtBQWVILENBaEJEOztrQkFvQmUseUJBQVFkLGVBQVIsRUFBMEJJLGtCQUExQixFQUE4Q3BCLE9BQTlDLEMiLCJmaWxlIjoiNzQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuZXhwb3J0IGRlZmF1bHQgKHsgaXNWaXAgfSkgPT4ge1xuXHRyZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtgZHNjbG1lci1mdHIgJHtpc1ZpcD8nbWFyZ2luLWJvdHRvbS01NSc6Jyd9YH0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0yMFwiIHN0eWxlPXt7IGNvbG9yOiAnIzhhOGE4YScsIGZvbnRTaXplOiAxMCB9fSA+VGhlIFdlYnNpdGUgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgaW4gY2FzZSBvZiBhIG1lZGljYWwgZW1lcmdlbmN5IGFuZC8gb3IgY3JpdGljYWwgY2FyZSBhbmQgdGhlIHVzZXIgc2hvdWxkIGRpcmVjdGx5IGNvbnRhY3QgaGlzLyBoZXIgbWVkaWNhbCBzZXJ2aWNlIHByb3ZpZGVyIGZvciBQaHlzaWNhbCBFeGFtaW5hdGlvbi4gRG9jcHJpbWUgaXMgc29sZWx5IGEgdGVjaG5vbG9neSBwYXJ0bmVyLjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBmb290ZXItbmV3LWNvcHlyZ2h0XCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogNSB9fSA+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRvY3ByaW1lLmNvbSBDb3B5cmlnaHQgJmNvcHk7IDIwMjAuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5BbGwgcmlnaHRzIHJlc2VydmVkLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+RE9DUFJJTUUgVEVDSE5PTE9HSUVTIFBSSVZBVEUgTElNSVRFRDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+Q0lOIDogVTc0OTk5SFIyMDE2UFRDMDY0MzEyPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+KVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgQ2Fyb3VzZWxWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRzY3JvbGwodHlwZSkge1xuICAgICAgICB2YXIgZWxtbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdG9wXyR7dGhpcy5wcm9wcy5kYXRhVHlwZX1gKVxuXG4gICAgICAgIGlmKGVsbW50ICYmIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYHRvcF8ke3RoaXMucHJvcHMuZGF0YVR5cGV9X2xpc3RgKSAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbGVmdEFycm93XyR7dGhpcy5wcm9wcy5kYXRhVHlwZX1gKSAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgUmlnaHRBcnJvd18ke3RoaXMucHJvcHMuZGF0YVR5cGV9YCkpIHtcblxuICAgICAgICBcdGxldCBvdXRlckRpdldpZHRoID0gZWxtbnQub2Zmc2V0V2lkdGhcblx0ICAgICAgICBsZXQgY2hpbGREaXZXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYHRvcF8ke3RoaXMucHJvcHMuZGF0YVR5cGV9X2xpc3RgKVswXS5vZmZzZXRXaWR0aFxuXHQgICAgICAgIGxldCBjYXJkQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGB0b3BfJHt0aGlzLnByb3BzLmRhdGFUeXBlfV9saXN0YClbMF0uY2hpbGRFbGVtZW50Q291bnRcblx0ICAgICAgICBsZXQgY2FyZFdpZHRoID0gTWF0aC5jZWlsKGNoaWxkRGl2V2lkdGggLyBjYXJkQ291bnQpXG5cblx0ICAgICAgICBsZXQgbGVmdFNjcm9sbCA9IGVsbW50LnNjcm9sbExlZnRcblx0ICAgICAgICBsZXQgc2Nyb2xsVmFsID0gTWF0aC5mbG9vcihvdXRlckRpdldpZHRoIC8gY2FyZFdpZHRoKSAqIGNhcmRXaWR0aFxuXHQgICAgICAgIGxldCBjYXJkRW5kID0gY2FyZENvdW50ICogY2FyZFdpZHRoXG5cblx0ICAgICAgICBpZiAodHlwZSA9PSAncmlnaHQnKSB7XG5cdCAgICAgICAgICAgIGVsbW50LnNjcm9sbCh7IGxlZnQ6IGxlZnRTY3JvbGwgKyBzY3JvbGxWYWwsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuXHQgICAgICAgICAgICBpZiAoY2FyZEVuZCA8PSBsZWZ0U2Nyb2xsICsgc2Nyb2xsVmFsICsgb3V0ZXJEaXZXaWR0aCkge1xuXHQgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGxlZnRBcnJvd18ke3RoaXMucHJvcHMuZGF0YVR5cGV9YCkuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBSaWdodEFycm93XyR7dGhpcy5wcm9wcy5kYXRhVHlwZX1gKS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgZWxtbnQuc2Nyb2xsKHsgbGVmdDogbGVmdFNjcm9sbCAtIHNjcm9sbFZhbCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG5cdCAgICAgICAgICAgIGlmIChsZWZ0U2Nyb2xsIC0gc2Nyb2xsVmFsIDw9IDApIHtcblx0ICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBSaWdodEFycm93XyR7dGhpcy5wcm9wcy5kYXRhVHlwZX1gKS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGxlZnRBcnJvd18ke3RoaXMucHJvcHMuZGF0YVR5cGV9YCkuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKVxuXHQgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXHRyZW5kZXIoKXtcblxuXHRcdGxldCB7IHRvcEhlYWRpbmcsIGRhdGFMaXN0LCBkYXRhVHlwZSwgdG9wSG9zcGl0YWwsIGV4dHJhSGVhZGluZywgdmlld0FsbCB9ID0gdGhpcy5wcm9wc1xuXHRcdHJldHVybihcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFrZy1zbGlkZXItY29udGFpbmVyIG10LTEwIG1iLTEwIHBrZy1udHdrLW1yZ25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ1NsaWRlckhlYWRpbmcgcGwtMVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDU+e3RvcEhlYWRpbmd8fCcnfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIHtleHRyYUhlYWRpbmcgJiYgKHZpZXdBbGwgfHwgZGF0YUxpc3QubGVuZ3RoPj0gMjApICYmIDxzcGFuIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMubmF2aWdhdGVUbygpfT57ZXh0cmFIZWFkaW5nfTwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgIHsvKjxzcGFuPlZpZXcgQWxsPC9zcGFuPiovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnU2xpZGVyQ29udGFpbmVyIG5ldHdvcmstc2xpZGVyXCIgaWQ9e2B0b3BfJHt0aGlzLnByb3BzLmRhdGFUeXBlfWB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBrZ0NhcmRzTGlzdCBkLWlubGluZS1mbGV4IHN1Yi13ZC1jYXJkcyB0b3BfJHt0aGlzLnByb3BzLmRhdGFUeXBlfV9saXN0YH0+XG4gICAgICAgICAgICAgICAgICAgIFx0e1xuICAgICAgICAgICAgICAgICAgICBcdFx0ZGF0YUxpc3QubWFwKChkYXRhLCBrZXkpPT57XG4gICAgICAgICAgICAgICAgXHRcdFx0cmV0dXJuIDxhIGtleT17YCR7a2V5fV8ke2RhdGEuaWR9YH0gaHJlZj0nJyBjbGFzc05hbWU9XCJwa2djdXN0Q2FyZHNcIiAgb25DbGljaz17KCk9PnRoaXMucHJvcHMuY2Fyb3VzZWxDYXJkQ2xpY2tlZChkYXRhLHRvcEhvc3BpdGFsP3RydWU6ZmFsc2UpfT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnY2FyZEltZ0NvbnRcIj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0e1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdGRhdGEubG9nbyAmJiA8aW1nIHN0eWxlPXt7d2lkdGg6ICc4MnB4J319IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17ZGF0YS5sb2dvfSAvPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHR9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBrZ3RzdE5hbWUgcHJjZC1oZWlnaHRcIj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5uYW1lfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIFx0XHR9KVxuICAgICAgICAgICAgICAgICAgICBcdH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2dsZnRSaHRidG5jb250IG5ldHdyay1idG5zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnLWJ0bmxmdCBkLW5vbmVcIiBpZD17YFJpZ2h0QXJyb3dfJHtkYXRhVHlwZX1gfSBvbkNsaWNrPXt0aGlzLnNjcm9sbC5iaW5kKHRoaXMsICdsZWZ0Jyl9PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnLWJ0bnJndFwiIGlkPXtgbGVmdEFycm93XyR7ZGF0YVR5cGV9YH0gb25DbGljaz17dGhpcy5zY3JvbGwuYmluZCh0aGlzLCAncmlnaHQnKX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsVmlldzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi9jb21tb25zL0xlZnRCYXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi9jb25maWcnXG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi9jb21tb25zL0hlbG1ldFRhZ3MnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uL2hlbHBlcnMvZ3RtJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vaGVscGVycy9zdG9yYWdlJztcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuaW1wb3J0IFZpcExvZ2luUG9wdXAgZnJvbSAnLi92aXBDbHViUG9wdXAuanMnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuaW1wb3J0IERpc2NsYWltZXIgZnJvbSAnLi4vY29tbW9ucy9Ib21lL3N0YXRpY0Rpc2NsYWltZXIuanMnXG5pbXBvcnQgQ2Fyb3VzZWxWaWV3IGZyb20gJy4uL29wZC9zZWFyY2hSZXN1bHRzL2Nhcm91c2VsVmlldy5qcydcbmltcG9ydCBWaXBQbGFuVmlldyBmcm9tICcuL3ZpcFBsYW5WaWV3LmpzJ1xuaW1wb3J0IFZpcEdvbGRWaWV3IGZyb20gJy4vdmlwR29sZFZpZXcuanMnXG5pbXBvcnQgVmlwVG5DIGZyb20gJy4vdmlwVG5jVmlldy5qcydcblxuY2xhc3MgVmlwQ2x1YlZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWRfcGxhbl9kYXRhOiB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4gPyB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4gOiAnJyxcbiAgICAgICAgICAgIHNob3dQb3B1cDogZmFsc2UsXG4gICAgICAgICAgICBpc0xlYWQ6ICcnLFxuICAgICAgICAgICAgc2VsZWN0ZWRfcGxhbl9pZDogdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbikubGVuZ3RoID8gdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLmlkOicnLFxuICAgICAgICAgICAgdG9nZ2xlVGFiVHlwZTogZmFsc2UsXG4gICAgICAgICAgICBpc19nb2xkX2NsaWNrZWQ6dGhpcy5wcm9wcy5pc192aXBfZ29sZD90aGlzLnByb3BzLmlzX3ZpcF9nb2xkOmZhbHNlLFxuICAgICAgICAgICAgb3Blbk1lZGxpZmVUbkM6ZmFsc2UsXG4gICAgICAgICAgICBpc19sZWFkX2VuYWJsZWQ6ZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgcGxhbiA9IFtdXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5pc19nb2xkICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4gJiYgdGhpcy5wcm9wcy52aXBDbHViTGlzdCAmJiAoKHRoaXMucHJvcHMudmlwQ2x1Ykxpc3QucGxhbnMgJiYgdGhpcy5wcm9wcy52aXBDbHViTGlzdC5wbGFucy5sZW5ndGggPiAwKSB8fCAodGhpcy5wcm9wcy52aXBDbHViTGlzdC5nb2xkX3BsYW5zICYmIHRoaXMucHJvcHMudmlwQ2x1Ykxpc3QuZ29sZF9wbGFucy5sZW5ndGggPiAwKSkpIHtcbiAgICAgICAgICAgIGxldCByZXNwID0gdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkX3BsYW5fZGF0YTogcmVzcCwgc2VsZWN0ZWRfcGxhbl9pZDogcmVzcC5pZCB9KVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxvZ2luVXNlclxuICAgICAgICBsZXQgbGVhZF9kYXRhID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBleHRyYVBhcmFtcyA9IHt9XG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzICYmIHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmxlbmd0aCA+MCl7XG4gICAgICAgICAgICBleHRyYVBhcmFtcyA9IHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmZpbHRlcih4PT54LnR5cGUgPT0gXCJjb21tb25feHRyYV90YWdzXCIpWzBdLnV0bV90YWdzXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHZpc2l0b3JfaW5mbyA9IEdUTS5nZXRWaXNpdG9ySW5mbygpXG4gICAgICAgICAgICBpZih2aXNpdG9yX2luZm8gJiYgdmlzaXRvcl9pbmZvLnZpc2l0X2lkKXtcbiAgICAgICAgICAgICAgICBsZWFkX2RhdGEudmlzaXRfaWQgPSB2aXNpdG9yX2luZm8udmlzaXRfaWRcbiAgICAgICAgICAgICAgICBsZWFkX2RhdGEudmlzaXRvcl9pZCA9IHZpc2l0b3JfaW5mby52aXNpdG9yX2lkXG4gICAgICAgICAgICB9XG4gICAgICAgIGlmIChTVE9SQUdFLmNoZWNrQXV0aCgpICYmICF0aGlzLnByb3BzLmlzU2FsZXNBZ2VudCAmJiAhdGhpcy5wcm9wcy5pc0FnZW50ICYmICFTVE9SQUdFLmlzQWdlbnQoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuVVNFUiAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMpLmxlbmd0aCA+IDAgJiYgdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlKSB7XG4gICAgICAgICAgICAgICAgbG9naW5Vc2VyID0gdGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzW3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV1cbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMobG9naW5Vc2VyKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzICYmIHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmxlbmd0aCA+MCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYVBhcmFtcyA9IHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmZpbHRlcih4PT54LnR5cGUgPT0gXCJjb21tb25feHRyYV90YWdzXCIpWzBdLnV0bV90YWdzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IHZpc2l0b3JfaW5mbyA9IEdUTS5nZXRWaXNpdG9ySW5mbygpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2aXNpdG9yX2luZm8gJiYgdmlzaXRvcl9pbmZvLnZpc2l0X2lkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWFkX2RhdGEudmlzaXRfaWQgPSB2aXNpdG9yX2luZm8udmlzaXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWFkX2RhdGEudmlzaXRvcl9pZCA9IHZpc2l0b3JfaW5mby52aXNpdG9yX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuaXNfbGVhZF9lbmFibGVkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qdGhpcy5zZXRTdGF0ZSh7aXNfbGVhZF9lbmFibGVkOmZhbHNlfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ2VuZXJhdGVWaXBDbHViTGVhZCh7c2VsZWN0ZWRQbGFuOnRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4gPyB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmlkIDogJycsIG51bWJlcjpsb2dpblVzZXIucGhvbmVfbnVtYmVyLCBsZWFkX2RhdGE6bGVhZF9kYXRhLCBzZWxlY3RlZExvY2F0aW9uOnRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiwgdXNlcl9uYW1lOmxvZ2luVXNlci5uYW1lLCBleHRyYVBhcmFtczpleHRyYVBhcmFtcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYjogKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IExlYWRJZERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnVmlwQXV0b0xlYWRDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiByZXNwLmxlYWRfaWQgPyByZXNwLmxlYWRfaWQgOiAwLCAnZXZlbnQnOiAndmlwLWF1dG8tbGVhZC1jbGlja2VkJywgJ3NvdXJjZSc6IGxlYWRfZGF0YS5zb3VyY2UgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogTGVhZElkRGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc19sZWFkX2VuYWJsZWQ6dHJ1ZX0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDAwKSovXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoIVNUT1JBR0UuY2hlY2tBdXRoKCkgJiYgdGhpcy5wcm9wcy51c2VyX2xvZ2dlZEluX251bWJlciAmJiAhdGhpcy5wcm9wcy5pc19mcm9tX29yZ2FuaWMgJiYgdGhpcy5zdGF0ZS5pc19sZWFkX2VuYWJsZWQpe1xuICAgICAgICAgICAgLyp0aGlzLnByb3BzLmdlbmVyYXRlVmlwQ2x1YkxlYWQoe3NlbGVjdGVkUGxhbjp0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuID8gdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5pZCA6ICcnLCBudW1iZXI6dGhpcy5wcm9wcy51c2VyX2xvZ2dlZEluX251bWJlciwgbGVhZF9kYXRhOmxlYWRfZGF0YSwgc2VsZWN0ZWRMb2NhdGlvbjp0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24sIHVzZXJfbmFtZTonJywgZXh0cmFQYXJhbXM6ZXh0cmFQYXJhbXMsXG4gICAgICAgICAgICAgICAgY2I6IChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBMZWFkSWREYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1ZpcEF1dG9MZWFkQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogcmVzcC5sZWFkX2lkID8gcmVzcC5sZWFkX2lkIDogMCwgJ2V2ZW50JzogJ3ZpcC1hdXRvLWxlYWQtY2xpY2tlZCcsICdzb3VyY2UnOiBsZWFkX2RhdGEuc291cmNlIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IExlYWRJZERhdGEgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzX2xlYWRfZW5hYmxlZDp0cnVlfSlcbiAgICAgICAgICAgIH0sIDUwMDApKi9cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBpZiAod2luZG93ICYmIGRvY3VtZW50KSB7XG4gICAgICAgICAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYucmVmc1sndmlwSGVhZGVyQmFyJ10pIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsUG9zaXRpb24gPiAxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7IHRvZ2dsZVRhYlR5cGU6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoeyB0b2dnbGVUYWJUeXBlOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0UGxhbihwbGFuX3RvX3RvZ2dsZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc19nb2xkX2NsaWNrZWQ6ZmFsc2V9KVxuICAgICAgICBsZXQgcGxhbiA9IHBsYW5fdG9fdG9nZ2xlXG4gICAgICAgIHBsYW4uaXNGb3JjZVVwZGF0ZSA9IGZhbHNlXG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWN0VmlwQ2x1YlBsYW4oJ3BsYW4nLCBwbGFuLCAocmVzcCkgPT4geyAvLyB0b2dnbGUvc2VsZWN0IHZpcCBwbGFuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRfcGxhbl9kYXRhOiByZXNwLCBzZWxlY3RlZF9wbGFuX2lkOiByZXNwLmlkIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdG9nZ2xlKCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5NZWRsaWZlVG5DOnRydWV9KVxuICAgIH1cblxuICAgIGNsb3NlVG5jUG9wdXAoKXtcbiAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuTWVkbGlmZVRuQzpmYWxzZX0pIFxuICAgIH1cblxuICAgIHNlbGVjdEdvbGRQbGFuKHBsYW5fdG9fdG9nZ2xlLGlzSGVhZGVyLGlzX2Rlc2t0b3Bfdmlldykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc19nb2xkX2NsaWNrZWQ6dHJ1ZX0pXG4gICAgICAgIGxldCBwbGFuXG4gICAgICAgIGlmKGlzSGVhZGVyICYmIHRoaXMucHJvcHMudmlwQ2x1Ykxpc3QgJiYgdGhpcy5wcm9wcy52aXBDbHViTGlzdC5nb2xkX3BsYW5zICYmIHRoaXMucHJvcHMudmlwQ2x1Ykxpc3QuZ29sZF9wbGFucy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIHBsYW4gPSAgdGhpcy5wcm9wcy52aXBDbHViTGlzdC5nb2xkX3BsYW5zLmZpbHRlcigoeCA9PiB4LmlzX3NlbGVjdGVkKSlbMF1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBwbGFuID0gcGxhbl90b190b2dnbGVcbiAgICAgICAgfVxuICAgICAgICBwbGFuLmlzRm9yY2VVcGRhdGUgPSBmYWxzZVxuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdFZpcENsdWJQbGFuKCdwbGFuJywgcGxhbiwgKHJlc3ApID0+IHsgLy8gdG9nZ2xlL3NlbGVjdCBnb2xkIHBsYW5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZF9wbGFuX2RhdGE6IHJlc3AsIHNlbGVjdGVkX3BsYW5faWQ6IHJlc3AuaWQgfSlcbiAgICAgICAgICAgIGlmKGlzX2Rlc2t0b3Bfdmlldyl7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZWVkKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoaWRlTG9naW5Qb3B1cCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dQb3B1cDogZmFsc2UgfSlcbiAgICB9XG5cbiAgICBjbG9zZUxlYWRQb3B1cCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dQb3B1cDogZmFsc2UgfSlcbiAgICB9XG5cbiAgICBwcm9jZWVkKCkge1xuICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6ICdXZSBoYXZlIGN1cnJlbnRseSBzdG9wcGVkIEdvbGQgc3Vic2NyaXB0aW9ucyBmb3IgbmV3IHVzZXJzLiBTb3JyeSBmb3IgdGhlIGluY29udmVuaWVuY2UgY2F1c2VkLicgfSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgbG9naW5Vc2VyXG4gICAgICAgIGxldCBsZWFkX2RhdGEgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IGd0bURhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1ZpcENsdWJCdXlOb3dDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAndmlwLWJ1eW5vdy1jbGlja2VkJywgJ3NlbGVjdGVkJzogJydcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuICAgICAgICAgICAgXG4gICAgICAgIGlmIChTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5VU0VSICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuVVNFUi5wcm9maWxlcykubGVuZ3RoID4gMCAmJiB0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGUpIHtcbiAgICAgICAgICAgICAgICBsb2dpblVzZXIgPSB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXVxuICAgICAgICAgICAgICAgIGxldCBleHRyYVBhcmFtcyA9IHt9XG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MgJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MubGVuZ3RoID4wKXtcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFQYXJhbXMgPSB0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncy5maWx0ZXIoeD0+eC50eXBlID09IFwiY29tbW9uX3h0cmFfdGFnc1wiKVswXS51dG1fdGFnc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMobG9naW5Vc2VyKS5sZW5ndGggPiAwICYmICFTVE9SQUdFLmlzQWdlbnQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyB0byBjcmVhdGUgdmlwIG9yIGdvbGQgbWVtYmVyIGxlYWQgZm9yIG1hdHJpeFxuICAgICAgICAgICAgICAgICAgICBsZXQgdmlzaXRvcl9pbmZvID0gR1RNLmdldFZpc2l0b3JJbmZvKClcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHZpc2l0b3JfaW5mbyAmJiB2aXNpdG9yX2luZm8udmlzaXRfaWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYWRfZGF0YS52aXNpdF9pZCA9IHZpc2l0b3JfaW5mby52aXNpdF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYWRfZGF0YS52aXNpdG9yX2lkID0gdmlzaXRvcl9pbmZvLnZpc2l0b3JfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5pc19sZWFkX2VuYWJsZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgLyp0aGlzLnNldFN0YXRlKHtpc19sZWFkX2VuYWJsZWQ6ZmFsc2V9KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZW5lcmF0ZVZpcENsdWJMZWFkKHtzZWxlY3RlZFBsYW46dGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbiA/IHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4uaWQgOiAnJywgbnVtYmVyOmxvZ2luVXNlci5waG9uZV9udW1iZXIsIGxlYWRfZGF0YTpsZWFkX2RhdGEsIHNlbGVjdGVkTG9jYXRpb246dGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLCB1c2VyX25hbWU6bG9naW5Vc2VyLm5hbWUsIGV4dHJhUGFyYW1zOmV4dHJhUGFyYW1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiOiAocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgTGVhZElkRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdWaXBMZWFkQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogcmVzcC5sZWFkX2lkID8gcmVzcC5sZWFkX2lkIDogMCwgJ2V2ZW50JzogJ3ZpcC1sZWFkLWNsaWNrZWQnLCAnc291cmNlJzogbGVhZF9kYXRhLnNvdXJjZSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBMZWFkSWREYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe2lzX2xlYWRfZW5hYmxlZDp0cnVlfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMDApKi9cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgdXJsID0gJy92aXAtY2x1Yi1tZW1iZXItZGV0YWlscz9pc0R1bW15PXRydWUnXG4gICAgICAgICAgICAgICAgaWYgKGxlYWRfZGF0YS51dG1fc291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCArPSAnJnV0bV9zb3VyY2U9JyArIGxlYWRfZGF0YS51dG1fc291cmNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsZWFkX2RhdGEudXRtX3Rlcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcmdXRtX3Rlcm09JyArIGxlYWRfZGF0YS51dG1fdGVybVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobGVhZF9kYXRhLnV0bV9jYW1wYWlnbikge1xuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gJyZ1dG1fY2FtcGFpZ249JyArIGxlYWRfZGF0YS51dG1fY2FtcGFpZ25cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxlYWRfZGF0YS51dG1fbWVkaXVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCArPSAnJnV0bV9tZWRpdW09JyArIGxlYWRfZGF0YS51dG1fbWVkaXVtXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsZWFkX2RhdGEuaXNfYWdlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcmaXNfYWdlbnQ9JyArIGxlYWRfZGF0YS5pc19hZ2VudFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobGVhZF9kYXRhLmlzX2dvbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcmaXNfZ29sZD0nICsgbGVhZF9kYXRhLmlzX2dvbGRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2godXJsKVxuICAgICAgICAgICAgICAgIC8vIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdmlwLWNsdWItbWVtYmVyLWRldGFpbHMnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaXRpZXNEYXRhKClcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93UG9wdXA6IHRydWUgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5hdmlnYXRlVG8oZGF0YSwgZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBsZXQgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnVmlwQ2x1YldpZGdldEhvc3BpdGFsQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3ZpcC13aWRnZXQtaG9zcGl0YWwtY2xpY2tlZCcsICdzZWxlY3RlZCc6ICcnLCAnc2VsZWN0ZWRJZCc6IGRhdGEuaWQgfHwgJydcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuICAgICAgICBsZXQgcmVkaXJlY3RVcmwgPSAnJ1xuXG4gICAgICAgIGlmIChkYXRhLnVybCkge1xuICAgICAgICAgICAgcmVkaXJlY3RVcmwgPSBgLyR7ZGF0YS51cmx9P3Nob3dQb3B1cD10cnVlYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVkaXJlY3RVcmwgPSBgL2lwZC9ob3NwaXRhbC8ke2RhdGEuaWR9P3Nob3dQb3B1cD10cnVlYFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2gocmVkaXJlY3RVcmwpXG4gICAgfVxuXG4gICAgaG9zcGl0YWxDYXJkQ2xpY2tlZCA9IChkYXRhLHRvcCA9IHRydWUpID0+IHsgICAgXG4gICAgICAgIGxldCBndG1EYXRhID0ge31cbiAgICAgICAgaWYgKHRvcCkge1xuICAgICAgICAgICAgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ3ZpcC1uZWFyYnktaG9zcGl0YWxzLWNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICd2aXAtbmVhcmJ5LWhvc3BpdGFscy1jbGlja2VkJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBndG1EYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAndmlwLXRvcGhvc3BpdGFsc0NsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICd2aXAtdG9wLWhvc3BpdGFscy1jbGlja2VkJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG4gICAgICAgIGxldCByZWRpcmVjdFVybCA9ICcnXG5cbiAgICAgICAgaWYgKGRhdGEudXJsKSB7XG4gICAgICAgICAgICByZWRpcmVjdFVybCA9IGAvJHtkYXRhLnVybH0/c2hvd1BvcHVwPXRydWVgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWRpcmVjdFVybCA9IGAvaXBkL2hvc3BpdGFsLyR7ZGF0YS5pZH0/c2hvd1BvcHVwPXRydWVgXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2gocmVkaXJlY3RVcmwpXG4gICAgfVxuXG4gICAgdmlld0RvY3ByaW1lTmV0d29ya0NsaWNrZWQoZ29sZD1mYWxzZSl7XG4gICAgICAgIGxldCBpc19nb2xkID0gdGhpcy5wcm9wcy5pc19nb2xkIHx8IHRoaXMuc3RhdGUuaXNfZ29sZF9jbGlja2VkIHx8IGdvbGRcbiAgICAgICAgbGV0IGd0bURhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogYFZpcCR7aXNfZ29sZD8nZ29sZCc6Jyd9RG9jdG9yTmV0d29ya0NsaWNrZWRgLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6IGB2aXAtJHtpc19nb2xkPydnb2xkLSc6Jyd9ZG9jdG9yLW5ldHdvcmstY2xpY2tlZGBcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuICAgICAgICBsZXQgdXJsID0gJy9vcGQvc2VhcmNocmVzdWx0cz9mcm9tVmlwPXRydWUnXG4gICAgICAgIGlmKGlzX2dvbGQpe1xuICAgICAgICAgICAgdXJsID0gJy9vcGQvc2VhcmNocmVzdWx0cz9mcm9tR29sZFZpcD10cnVlJ1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHVybClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICB0aGlzLnByb3BzLnZpcENsdWJMaXN0ICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMudmlwQ2x1Ykxpc3QpLmxlbmd0aCA+IDAgJiYgdGhpcy5zdGF0ZS5zZWxlY3RlZF9wbGFuX2RhdGEgJiYgT2JqZWN0LmtleXModGhpcy5zdGF0ZS5zZWxlY3RlZF9wbGFuX2RhdGEpLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIlwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciBib29raW5nUGFnZT17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEhlbG1ldFRhZ3MgdGFnc0RhdGE9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbm9uaWNhbFVybDogYCR7Q09ORklHLkFQSV9CQVNFX1VSTH0ke3RoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWV9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBgJHsnRG9jcHJpbWUgVmlwJyB8fCAnJ31gLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVzY3JpcHRpb246IGAke3RoaXMucHJvcHMuZGF0YS5kZXNjcmlwdGlvbiB8fCAnJ31gXG4gICAgICAgICAgICAgICAgICAgIH19IG5vSW5kZXg9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHZpcEhlYWRlckJhciAke3RoaXMuc3RhdGUudG9nZ2xlVGFiVHlwZSA/ICdoZWQtY3Vydi1ybW92ZScgOiAnJ30gZC1ub25lYH0gcmVmPVwidmlwSGVhZGVyQmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pc1NhbGVzQWdlbnQgJiYgdGhpcy5wcm9wcy5pc0FnZW50ID8gJycgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNvdXJjZSA9PSAnZG9jdG9ybGlzdGluZycgfHwgdGhpcy5wcm9wcy5zb3VyY2UgPT0gJ2Jvb2tpbmdwYWdlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cInZpcEJhY2tJY29cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmhpc3RvcnkuZ28oLTEpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NhcmVsZWZ0LWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPVwidmlwQmFja0ljb1wiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvdmlwLWhvbWUuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlzX2dvbGQ/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdmlwLWxvZ28tY29udCBkLW5vbmUgJHt0aGlzLnN0YXRlLnRvZ2dsZVRhYlR5cGUgPyAnaGVhZGVyLXNjcm9sbC1jaGFuZ2UnIDogJyd9YH0gcmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInZpcExvZ2lJbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9kb2Nnb2xkLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2NybC1jb250LWRhdCBnbGQtaGQtdHh0LWFsZ25cIj5NZW1iZXJzaGlwIHBsYW4gZm9yIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzY3JsLWNvbnQtZGF0XCI+ZXhjbHVzaXZlIGRpc2NvdW50czwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHZpcC1sb2dvLWNvbnQgZC1ub25lICR7dGhpcy5zdGF0ZS50b2dnbGVUYWJUeXBlID8gJ2hlYWRlci1zY3JvbGwtY2hhbmdlJyA6ICcnfWB9IHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ2aXBMb2dpSW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvdmlwLWxvZ28ucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzY3JsLWNvbnQtZGF0XCI+U2F2ZSA3MCUgb24geW91ciBmYW1pbHkncyBtZWRpY2FsIGJpbGxzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNjcmwtY29udC1kYXRcIj5mb3IganVzdCA8c3BhbiBjbGFzc05hbWU9XCJ2aXAtcHJjLWN1dFwiPuKCuXt0aGlzLnN0YXRlLnNlbGVjdGVkX3BsYW5fZGF0YS5tcnB9PC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJ2aXAtbWFpbi1wcmljZVwiPuKCuXt0aGlzLnN0YXRlLnNlbGVjdGVkX3BsYW5fZGF0YS5kZWFsX3ByaWNlfTwvc3Bhbj4gIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dQb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpcExvZ2luUG9wdXAgey4uLnRoaXMucHJvcHN9IHNlbGVjdGVkX3BsYW49e3RoaXMuc3RhdGUuc2VsZWN0ZWRfcGxhbl9kYXRhfSBoaWRlTG9naW5Qb3B1cD17dGhpcy5oaWRlTG9naW5Qb3B1cC5iaW5kKHRoaXMpfSBpc0xlYWQ9e3RoaXMuc3RhdGUuaXNMZWFkfSBjbG9zZUxlYWRQb3B1cD17dGhpcy5jbG9zZUxlYWRQb3B1cC5iaW5kKHRoaXMpfSBpc19zZWVfbW9yZT17ZmFsc2V9Lz4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHshdGhpcy5wcm9wcy5pc19nb2xkICYmICF0aGlzLnN0YXRlLmlzX2dvbGRfY2xpY2tlZD9cbiAgICAgICAgICAgICAgICAgICAgICAgICA8VmlwUGxhblZpZXcgey4uLnRoaXMucHJvcHN9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2FsZXNBZ2VudD17dGhpcy5wcm9wcy5pc1NhbGVzQWdlbnR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWdlbnQ9e3RoaXMucHJvcHMuaXNBZ2VudH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlPXt0aGlzLnByb3BzLnNvdXJjZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfZ29sZD17dGhpcy5wcm9wcy5pc19nb2xkfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc192aXBfZ29sZD17dGhpcy5wcm9wcy5pc192aXBfZ29sZH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0UGxhbj17dGhpcy5zZWxlY3RQbGFuLmJpbmQodGhpcyl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2NlZWQ9e3RoaXMucHJvY2VlZC5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZF9wbGFuX2lkPXt0aGlzLnN0YXRlLnNlbGVjdGVkX3BsYW5faWR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkX3BsYW5fZGF0YT17dGhpcy5zdGF0ZS5zZWxlY3RlZF9wbGFuX2RhdGF9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdEb2NwcmltZU5ldHdvcmtDbGlja2VkPXsoZGF0YSk9PnRoaXMudmlld0RvY3ByaW1lTmV0d29ya0NsaWNrZWQoZGF0YSx0aGlzKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWxDYXJkQ2xpY2tlZD17dGhpcy5ob3NwaXRhbENhcmRDbGlja2VkfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVUYWJUeXBlPXt0aGlzLnN0YXRlLnRvZ2dsZVRhYlR5cGV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdEdvbGRQbGFuPXt0aGlzLnNlbGVjdEdvbGRQbGFuLmJpbmQodGhpcyl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZSA9IHt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6Jyd9XG5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaXNfZ29sZCB8fCB0aGlzLnN0YXRlLmlzX2dvbGRfY2xpY2tlZD9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaXBHb2xkVmlldyB7Li4udGhpcy5wcm9wc30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTYWxlc0FnZW50PXt0aGlzLnByb3BzLmlzU2FsZXNBZ2VudH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBZ2VudD17dGhpcy5wcm9wcy5pc0FnZW50fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e3RoaXMucHJvcHMuc291cmNlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19nb2xkPXt0aGlzLnByb3BzLmlzX2dvbGR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX3ZpcF9nb2xkPXt0aGlzLnByb3BzLmlzX3ZpcF9nb2xkfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RQbGFuPXt0aGlzLnNlbGVjdFBsYW4uYmluZCh0aGlzKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2VlZD17dGhpcy5wcm9jZWVkLmJpbmQodGhpcyl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkX3BsYW5faWQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWRfcGxhbl9pZH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfcGxhbl9kYXRhPXt0aGlzLnN0YXRlLnNlbGVjdGVkX3BsYW5fZGF0YX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0RvY3ByaW1lTmV0d29ya0NsaWNrZWQ9eyhkYXRhPWZhbHNlKT0+dGhpcy52aWV3RG9jcHJpbWVOZXR3b3JrQ2xpY2tlZChkYXRhLHRoaXMpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3NwaXRhbENhcmRDbGlja2VkPXt0aGlzLmhvc3BpdGFsQ2FyZENsaWNrZWR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRhYlR5cGU9e3RoaXMuc3RhdGUudG9nZ2xlVGFiVHlwZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0R29sZFBsYW49e3RoaXMuc2VsZWN0R29sZFBsYW4uYmluZCh0aGlzKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlID0ge3RoaXMudG9nZ2xlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUub3Blbk1lZGxpZmVUbkMgPyA8VmlwVG5DIHByb3BzPXt0aGlzLnByb3BzfSB0b2dnbGU9e3RoaXMuY2xvc2VUbmNQb3B1cC5iaW5kKHRoaXMpfSBpc19pbnN1cmFuY2VfYXBwbGljYWJsZT17ZmFsc2V9Lz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPERpc2NsYWltZXIgaXNWaXA9e3RydWV9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA6IDxkaXY+PC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaXBDbHViVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBMZWZ0QmFyIGZyb20gJy4uL2NvbW1vbnMvTGVmdEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uL2NvbmZpZydcbmltcG9ydCBIZWxtZXRUYWdzIGZyb20gJy4uL2NvbW1vbnMvSGVsbWV0VGFncydcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vaGVscGVycy9ndG0nXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2UnO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgVmlwTG9naW5Qb3B1cCBmcm9tICcuL3ZpcENsdWJQb3B1cC5qcydcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5pbXBvcnQgRGlzY2xhaW1lciBmcm9tICcuLi9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcydcbmltcG9ydCBDYXJvdXNlbFZpZXcgZnJvbSAnLi4vb3BkL3NlYXJjaFJlc3VsdHMvY2Fyb3VzZWxWaWV3LmpzJ1xuaW1wb3J0IFZpcFJldmlld1NlY3Rpb24gZnJvbSAnLi92aXBSZXZpZXdTZWN0aW9uLmpzJ1xuaW1wb3J0IEhvbWVQYWdlV2lkZ2V0IGZyb20gJy4uL2NvbW1vbnMvSG9tZU5ld1ZpZXcvSG9tZVBhZ2VXaWRnZXQuanMnXG5cbmNsYXNzIFZpcEdvbGRWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRhYnNWYWx1ZTogWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTVdLFxuICAgICAgICAgICAgc2hvd1BvcHVwOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQnV0dG9uSGFuZGxlcihmaWVsZCwgZXZlbnQpIHtcbiAgICAgICAgbGV0IHRhYnMgPSBbXS5jb25jYXQodGhpcy5zdGF0ZS50YWJzVmFsdWUpXG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBsZXQgZm91bmQgPSBmYWxzZVxuICAgICAgICB0YWJzID0gdGFicy5maWx0ZXIoKHgpID0+IHtcbiAgICAgICAgICAgIGlmICh4ID09IGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICB0YWJzLnB1c2goZmllbGQpXG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLnNldFN0YXRlKHsgdGFic1ZhbHVlOiB0YWJzIH0pXG4gICAgfVxuICAgIGdvQmFjaygpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBzZWxlY3RQbGFuID0gdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuX2RhdGEgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuX2RhdGEuaWRcbiAgICAgICAgaWYgKHNlbGVjdFBsYW4pIHtcblxuICAgICAgICAgICAgbGV0IHBsYW4gPSBbXVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNfYm9va2luZ19wYWdlID09ICdvcGQnICYmIHRoaXMucHJvcHMub2RwR29sZFByZWRpY3RlZFByaWNlICYmIHRoaXMucHJvcHMub2RwR29sZFByZWRpY3RlZFByaWNlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHBsYW4gPSB0aGlzLnByb3BzLm9kcEdvbGRQcmVkaWN0ZWRQcmljZS5maWx0ZXIoeCA9PiB4LmlkID09IHNlbGVjdFBsYW4pXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5pc19ib29raW5nX3BhZ2UgPT0gJ2xhYicgJiYgdGhpcy5wcm9wcy5sYWJHb2xkUHJlZGljdGVkUHJpY2UgJiYgdGhpcy5wcm9wcy5sYWJHb2xkUHJlZGljdGVkUHJpY2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcGxhbiA9IHRoaXMucHJvcHMubGFiR29sZFByZWRpY3RlZFByaWNlLmZpbHRlcih4ID0+IHguaWQgPT0gc2VsZWN0UGxhbilcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBsYW4gJiYgcGxhbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdFZpcENsdWJQbGFuKCcnLCBwbGFuWzBdKSAvLyB0b2dnbGUvc2VsZWN0IGdvbGQgcGxhblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNfZnJvbV9vcmdhbmljKSB7XG4gICAgICAgICAgICBsZXQgdXJsXG4gICAgICAgICAgICBpZiAocGFyc2VkLmNhbGxCYWNrVXJsKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gcGFyc2VkLmNhbGxCYWNrVXJsXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5ob3NwaXRhbF9pZCAmJiAhdXJsLmluY2x1ZGVzKCdob3NwaXRhbF9pZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCArPSBgP2hvc3BpdGFsX2lkPSR7cGFyc2VkLmhvc3BpdGFsX2lkfWBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5kb2N0b3JfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9IGAmZG9jdG9yX2lkPSR7cGFyc2VkLmRvY3Rvcl9pZH1gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHVybClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5nbygtMSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsb3NlTGVhZFBvcHVwKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1BvcHVwOiBmYWxzZSB9KVxuICAgIH1cblxuICAgIC8vdGhpcyBmdW5jdGlvbiBpcyBsaW5rZWQgdmlkZW8gcGxheWVyIGlmcmFtZVxuICAgIHBsYXlWaWRlbyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ2dvbGRWaWRlb0NsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdnb2xkLXZpZGVvLWNsaWNrZWQnXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSk7XG4gICAgICAgIGNvbnN0IGZyYW1lVmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdvbGRWaWRlb1wiKTtcbiAgICAgICAgY29uc3QgcGxheUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLWljb24nKTtcbiAgICAgICAgZnJhbWVWaWRlby5vbnRpbWV1cGRhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICB2aWRlb1RpbWVyKClcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB2aWRlb1RpbWVyKCkge1xuICAgICAgICAgICAgbGV0IHQgPSBmcmFtZVZpZGVvLmN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgdmlkVGltZXIuaW5uZXJIVE1MID0gTWF0aC5yb3VuZCh0KSArICdzJztcbiAgICAgICAgfVxuICAgICAgICBsZXQgdmlkVGltZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW8tdGltZScpO1xuICAgICAgICB2aWRUaW1lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgICAgICBmcmFtZVZpZGVvLnBhdXNlKCk7XG4gICAgICAgICAgICBwbGF5SWNvbi5zdHlsZS5vcGFjaXR5ID0gMTtcblxuICAgICAgICB9KVxuICAgICAgICBmcmFtZVZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgcGxheUljb24uc3R5bGUub3BhY2l0eSA9IDE7XG5cbiAgICAgICAgfSlcbiAgICAgICAgaWYgKGZyYW1lVmlkZW8ucGF1c2VkKSB7XG4gICAgICAgICAgICBmcmFtZVZpZGVvLnBsYXkoKTtcbiAgICAgICAgICAgIHBsYXlJY29uLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnJhbWVWaWRlby5wYXVzZSgpO1xuICAgICAgICAgICAgcGxheUljb24uc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZW5kUGFnZVVybCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBjYWxsYmFjazogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJylbMV0gKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoLyYvZywgJyonKSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnZ29sZF90ZW1wbGF0ZV8xJ1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuc2VuZEFnZW50V2hhdHN1cFBhZ2VVUkwoZGF0YSkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlNlbnQgU3VjY2Vzc2Z1bGx5XCIgfSlcbiAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJUcnkgYWdhaW4hXCIgfSlcbiAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzY3JvbGwodHlwZSkge1xuICAgICAgICBsZXQgZGF0YVR5cGUgPSAnc3RhdGljX3Jldmlld19ibGNrJ1xuICAgICAgICB2YXIgZWxtbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhVHlwZSlcblxuICAgICAgICBpZiAoZWxtbnQpIHtcbiAgICAgICAgICAgIGxldCBvdXRlckRpdldpZHRoID0gZWxtbnQub2Zmc2V0V2lkdGhcbiAgICAgICAgICAgIGxldCBjYXJkQ291bnQgPSBlbG1udC5jaGlsZHJlbiAmJiBlbG1udC5jaGlsZHJlbi5sZW5ndGggPyBlbG1udC5jaGlsZHJlbi5sZW5ndGggOiA2O1xuICAgICAgICAgICAgbGV0IGNoaWxkRGl2V2lkdGggPSBlbG1udC5zY3JvbGxXaWR0aCA/IGVsbW50LnNjcm9sbFdpZHRoIDogMzAwMDtcbiAgICAgICAgICAgIGxldCBjYXJkV2lkdGggPSBNYXRoLmNlaWwoY2hpbGREaXZXaWR0aCAvIGNhcmRDb3VudClcblxuICAgICAgICAgICAgbGV0IGxlZnRTY3JvbGwgPSBlbG1udC5zY3JvbGxMZWZ0XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09ICdyaWdodCcpIHtcbiAgICAgICAgICAgICAgICBlbG1udC5zY3JvbGwoeyBsZWZ0OiBsZWZ0U2Nyb2xsICsgb3V0ZXJEaXZXaWR0aCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkRGl2V2lkdGggPD0gKGxlZnRTY3JvbGwgKyAyICogb3V0ZXJEaXZXaWR0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZGF0YVR5cGV9X2xlZnRBcnJvd19oc3B0bGApLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZGF0YVR5cGV9X1JpZ2h0QXJyb3dfaHNwdGxgKS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsbW50LnNjcm9sbCh7IGxlZnQ6IGxlZnRTY3JvbGwgLSBvdXRlckRpdldpZHRoLCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgICAgICAgICBpZiAobGVmdFNjcm9sbCAtIG91dGVyRGl2V2lkdGggPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtkYXRhVHlwZX1fUmlnaHRBcnJvd19oc3B0bGApLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZGF0YVR5cGV9X2xlZnRBcnJvd19oc3B0bGApLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcblxuICAgICAgICBsZXQgaXNfZ29sZF9zZWxlY3RlZCA9IGZhbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhKS5sZW5ndGggPiAwID9cbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLnZpcENsdWJMaXN0LmdvbGRfcGxhbnMpLm1hcChmdW5jdGlvbiAoW2tleSwgdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCh2YWx1ZS5pZCkgPT0gcGFyc2VJbnQoc2VsZi5wcm9wcy5zZWxlY3RlZF9wbGFuX2RhdGEuaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc19nb2xkX3NlbGVjdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICB0aGlzLnByb3BzLnZpcENsdWJMaXN0ICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMudmlwQ2x1Ykxpc3QpLmxlbmd0aCA+IDAgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuX2RhdGEgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuX2RhdGEpLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93UG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaXBMb2dpblBvcHVwIHsuLi50aGlzLnByb3BzfSBjbG9zZUxlYWRQb3B1cD17dGhpcy5jbG9zZUxlYWRQb3B1cC5iaW5kKHRoaXMpfSBpc19zZWVfbW9yZT17dHJ1ZX0gLz4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHsvKm9sZCBWaWV3IFN0YXJ0cyovfVxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Bjb250YWluZXIgY29udGFpbmVyLXRvcC1tYXJnaW4gc3ViLXBkbmctYWRkIGQtbm9uZSAke3RoaXMucHJvcHMudG9nZ2xlVGFiVHlwZSA/ICdzdWItcGRuZy1ybXYnIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGVmdEJhciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1uZXctY29udGFpbmVyIGZvbnQtYW5hbHl6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLXRhYnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhKS5sZW5ndGggPiAwICYmIHRoaXMucHJvcHMuaXNfdmlwX2dvbGQgJiYgdGhpcy5wcm9wcy52aXBDbHViTGlzdCAmJiB0aGlzLnByb3BzLnZpcENsdWJMaXN0LmdvbGRfcGxhbnMgJiYgdGhpcy5wcm9wcy52aXBDbHViTGlzdC5nb2xkX3BsYW5zLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9e3RoaXMucHJvcHMuc2VsZWN0R29sZFBsYW4uYmluZCh0aGlzLCB0cnVlKX0gY2xhc3NOYW1lPXtgdnAtc2ItdHh0ICR7aXNfZ29sZF9zZWxlY3RlZCA/ICd2cC1hY3QnIDogJyd9YH0+R29sZCA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ao4oK5ICR7dGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuX2RhdGEuZGVhbF9wcmljZX0pYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlzX3ZpcF9nb2xkICYmIHRoaXMucHJvcHMudmlwQ2x1Ykxpc3QgJiYgdGhpcy5wcm9wcy52aXBDbHViTGlzdC5wbGFucyAmJiB0aGlzLnByb3BzLnZpcENsdWJMaXN0LnBsYW5zLmxlbmd0aCA+IDAgP1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy52aXBDbHViTGlzdC5wbGFucykubWFwKGZ1bmN0aW9uIChba2V5LCB2YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxwIG9uQ2xpY2s9e3NlbGYucHJvcHMuc2VsZWN0UGxhbi5iaW5kKHNlbGYsIHZhbHVlKX0ga2V5PXtrZXl9IGNsYXNzTmFtZT17YHZwLXNiLXR4dCAke3ZhbHVlLmlkID09IHNlbGYucHJvcHMuc2VsZWN0ZWRfcGxhbl9pZCA/ICd2cC1hY3QnIDogJyd9YH0+e3ZhbHVlLnBsYW5fbmFtZX0gPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCjigrkgJHt2YWx1ZS5kZWFsX3ByaWNlfSlgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyp2YWx1ZS5pc19zZWxlY3RlZCA/IDxiIGNsYXNzTmFtZT1cInZpcC1wb3BsdWVyXCI+UE9QVUxBUjwvYj4gOiAnJyovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pc19wYiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL21lZGlhL3dlYi9jdXN0b21faW1hZ2VzL1BiX2Jhbm5lcl9leGNsdXNpdmVfLW1pbi5wbmdcIiBjbGFzc05hbWU9XCJwYi1nb2xkLWJhbm5lclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qID09PT09PT09PT09PT09PT09PSBnb2xkIGJlbmlmaXRzICA9PT09PT09PT09PT09PT09PT0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2xkLXdoaXRlLWJnLWNvbnRhaW5lciBtYi0yNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidmlwLWNhcmQtaGVhZGluZ1wiPkdvbGQgQmVuZWZpdHM8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvbGQtYmVuaWZpLWNhcmRzLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1iZW5pZmktY2FyZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZ2wxLnBuZyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RXhjbHVzaXZlIHByaWNlcyBvbiA8YnIgLz48c3Ryb25nPjMwLDAwMCA8L3N0cm9uZz4gRG9jdG9yczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2xkLWJlbmlmaS1jYXJkc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9tZWQtcmVwb3J0LnN2Zyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QmlnIERpc2NvdW50cyBvbiA8YnIgLz48c3Ryb25nPjUsMDAwIDwvc3Ryb25nPiBMYWJzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvbGQtYmVuaWZpLWNhcmRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL21lZGxpZmUtbWVkLnBuZyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2F2ZSA8c3Ryb25nPjIzJSA8L3N0cm9uZz4gPGJyIC8+IG9uIE1lZGljaW5lcyA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09IGdvbGQgYmVuaWZpdHMgID09PT09PT09PT09PT09PT09PSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09IGdvbGQgSFRNTCBzZWxlY3QgID09PT09PT09PT09PT09PT09PSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ2aXAtY2FyZC1oZWFkaW5nXCI+U2VsZWN0IFlvdXIgUGxhbjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLW9mZmVyLWNhcmRzIHAtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1vZmZlci1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImdvbGQtb2ZyLWhkbmdcIj5MSU1JVEVEIFBFUklPRCBPRkZFUjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2xkLWxpc3QtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnZpcENsdWJMaXN0ICYmIHRoaXMucHJvcHMudmlwQ2x1Ykxpc3QuZ29sZF9wbGFucyAmJiB0aGlzLnByb3BzLnZpcENsdWJMaXN0LmdvbGRfcGxhbnMubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLnZpcENsdWJMaXN0LmdvbGRfcGxhbnMpLm1hcChmdW5jdGlvbiAoW2tleSwgdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT17YGdvbGQtb2ZyLWxpc2luZyAke3ZhbHVlLmlkID09IHNlbGYucHJvcHMuc2VsZWN0ZWRfcGxhbl9pZCA/ICdnb2xkLXNlbGVjdCcgOiAnJ31gfSBvbkNsaWNrPXtzZWxmLnByb3BzLnNlbGVjdEdvbGRQbGFuLmJpbmQoc2VsZiwgdmFsdWUsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1tbnRocGxhblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibW50aC1wbGFuLWdsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvdmVyYWdlOiB7dmFsdWUudG90YWxfYWxsb3dlZF9tZW1iZXJzfSB7cGFyc2VJbnQodmFsdWUudG90YWxfYWxsb3dlZF9tZW1iZXJzKSA+IDEgPyAnTWVtYmVycycgOiAnTWVtYmVyJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdsZC1jdnItdHh0XCI+VmFsaWQgZm9yIHt2YWx1ZS50ZW51cmV9IE1vbnRocyB7dmFsdWUuaXNfc2VsZWN0ZWQgPyA8c3Bhbj5QT1BVTEFSPC9zcGFuPiA6ICcnfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1wcmljZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ2xkLXByY1wiPjxzcGFuIGNsYXNzTmFtZT1cImdvbGQtcHJjLWN1dFwiPuKCuXt2YWx1ZS5tcnB9PC9zcGFuPiDigrl7dmFsdWUuZGVhbF9wcmljZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvbGQtcGxuLXNsY3QtcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdkLXJkaW8tZ3JheVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ2QtcmRpby1jaGtcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1jaGsuc3ZnJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW5fZGF0YSAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW5fZGF0YSkubGVuZ3RoID4gMCAmJiB0aGlzLnByb3BzLmlzX3ZpcF9nb2xkICYmIHRoaXMucHJvcHMudmlwQ2x1Ykxpc3QgJiYgdGhpcy5wcm9wcy52aXBDbHViTGlzdC5nb2xkX3BsYW5zICYmIHRoaXMucHJvcHMudmlwQ2x1Ykxpc3QuZ29sZF9wbGFucy5sZW5ndGggPiAwICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhLnNob3dfY29uc3VsdGF0aW9uX3RleHQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ2xkLWxzdC1mb290LXR4dFwiPkluY2x1ZGVzIFVubGltaXRlZCBPbmxpbmUgQ29uc3VsdGF0aW9uIDxzcGFuPihHZW5lcmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQaHlzaWNpYW4pPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJnb2xkLWZvb3QtYm90dG9tXCI+WW91IGNhbiBjYW5jZWwgYW55dGltZSB3aXRoaW4gMzAgZGF5czwvcD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09PT0gZ29sZCBIVE1MIHNlbGVjdCAgPT09PT09PT09PT09PT09PT09ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09PT0gZ29sZCBzbGlkZXIgPT09PT09PT09PT09PT09PT09ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC13aGl0ZS1iZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2xkLXNsaWRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvcEhvc3BpdGFscyAmJiB0aGlzLnByb3BzLnRvcEhvc3BpdGFscy50b3BfaG9zcGl0YWxzICYmIHRoaXMucHJvcHMudG9wSG9zcGl0YWxzLnRvcF9ob3NwaXRhbHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFrZy1zbGlkZXItY29udGFpbmVyIG1iLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnU2xpZGVySGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGZvbnRTaXplOiAnMTRweCcgfX0+S2V5IEhvc3BpdGFsIFBhcnRuZXJzPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTNweCcgfX0gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy52aWV3RG9jcHJpbWVOZXR3b3JrQ2xpY2tlZCgpfT5WaWV3IERvY3ByaW1lIEdvbGQgTmV0d29yazwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnU2xpZGVyQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ0NhcmRzTGlzdCBkLWlubGluZS1mbGV4IHN1Yi13ZC1jYXJkcyBob21lX3RvcF9oc3B0bF9saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvcEhvc3BpdGFscy50b3BfaG9zcGl0YWxzLm1hcCgoZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGEga2V5PXtgJHtrZXl9XyR7ZGF0YS5pZH1gfSBocmVmPXtkYXRhLnVybCA/IGRhdGEudXJsIDogZGF0YS5pZH0gY2xhc3NOYW1lPVwicGtnY3VzdENhcmRzXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ob3NwaXRhbENhcmRDbGlja2VkKHRydWUsIGRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ2NhcmRJbWdDb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEubG9nbyAmJiA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnODJweCcgfX0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtkYXRhLmxvZ299IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudmlwX3BlcmNlbnRhZ2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ29sZC11cHRvLW9mZmVyXCI+VXB0byB7cGFyc2VJbnQoZGF0YS52aXBfcGVyY2VudGFnZSl9JSBPRkY8L3A+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubmVhcmJ5SG9zcGl0YWxzICYmIHRoaXMucHJvcHMubmVhcmJ5SG9zcGl0YWxzLmhvc3BpdGFscyAmJiB0aGlzLnByb3BzLm5lYXJieUhvc3BpdGFscy5ob3NwaXRhbHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFrZy1zbGlkZXItY29udGFpbmVyIG1iLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnU2xpZGVySGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pkhvc3BpdGFscyBOZWFyIFlvdTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ1NsaWRlckNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2dDYXJkc0xpc3QgZC1pbmxpbmUtZmxleCBzdWItd2QtY2FyZHMgaG9tZV90b3BfaHNwdGxfbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5uZWFyYnlIb3NwaXRhbHMuaG9zcGl0YWxzLm1hcCgoZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGEga2V5PXtgJHtrZXl9XyR7ZGF0YS5pZH1gfSBocmVmPXtkYXRhLnVybCA/IGRhdGEudXJsIDogZGF0YS5pZH0gY2xhc3NOYW1lPVwicGtnY3VzdENhcmRzXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ob3NwaXRhbENhcmRDbGlja2VkKGZhbHNlLCBkYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2djYXJkSW1nQ29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmxvZ28gJiYgPGltZyBzdHlsZT17eyB3aWR0aDogJzgycHgnIH19IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17ZGF0YS5sb2dvfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnZpcF9wZXJjZW50YWdlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdvbGQtdXB0by1vZmZlclwiPlVwdG8ge3BhcnNlSW50KGRhdGEudmlwX3BlcmNlbnRhZ2UpfSUgT0ZGPC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09PT0gZ29sZCBiZW5pZml0cyAgPT09PT09PT09PT09PT09PT09ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWtnLXNsaWRlci1jb250YWluZXIgbWItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ1NsaWRlckhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlRvcCBMYWJzPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ1NsaWRlckNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ0NhcmRzTGlzdCBkLWlubGluZS1mbGV4IHN1Yi13ZC1jYXJkcyBob21lX3RvcF9oc3B0bF9saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwa2djdXN0Q2FyZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ2NhcmRJbWdDb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL21lZGlhL2RpYWdub3N0aWMvY29tbW9uX3BhY2thZ2VfaWNvbnMvVGh5cm9jYXJlX0p0aFJxRmYucG5nXCIgc3R5bGU9e3sgd2lkdGg6ICc4MnB4JyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdvbGQtdXB0by1vZmZlclwiPlVwdG8gNTAlIE9GRjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGtnY3VzdENhcmRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2djYXJkSW1nQ29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9tZWRpYS9sYWIvaW1hZ2VzLzkweDYwLzliZTdjM2M1M2VkMzA4NzdjMTQzM2JmNmQ5ZjdkOTE2X0dqZ0NlaWsuanBnXCIgc3R5bGU9e3sgd2lkdGg6ICc4MnB4JyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdvbGQtdXB0by1vZmZlclwiPlVwdG8gNTAlIE9GRjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBrZ2N1c3RDYXJkc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnY2FyZEltZ0NvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvZGlhZ25vc3RpYy9jb21tb25fcGFja2FnZV9pY29ucy9tZWRsaWZlX2hEUXhpbEoucG5nXCIgc3R5bGU9e3sgd2lkdGg6ICc4MnB4JyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdvbGQtdXB0by1vZmZlclwiPlVwdG8gNzAlIE9GRjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBrZ2N1c3RDYXJkc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnY2FyZEltZ0NvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvbGFiL2ltYWdlcy85MHg2MC8yYzI1YzI3MmM2MWI4YjY0NjMwMTc0MWYxYzk4MDM4Ny5qcGdcIiBzdHlsZT17eyB3aWR0aDogJzgycHgnIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ29sZC11cHRvLW9mZmVyXCI+VXB0byAyMCUgT0ZGPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGtnY3VzdENhcmRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2djYXJkSW1nQ29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9tZWRpYS9sYWIvaW1hZ2VzLzkweDYwLzQ1YWU0YWZmOGIxYjliZjZkMWRmZjJlODZlOTc0MDBhLmpwZ1wiIHN0eWxlPXt7IHdpZHRoOiAnODJweCcgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJnb2xkLXVwdG8tb2ZmZXJcIj5VcHRvIDUwJSBPRkY8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwa2djdXN0Q2FyZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ2NhcmRJbWdDb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL21lZGlhL2xhYi9pbWFnZXMvOTB4NjAvZGE3Y2NiNjEyNWRkYTdiM2ViYTFjMzhkN2JkOWMwYjlfWnAwTzFFWC5qcGdcIiBzdHlsZT17eyB3aWR0aDogJzgycHgnIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ29sZC11cHRvLW9mZmVyXCI+VXB0byA3MCUgT0ZGPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwa2djdXN0Q2FyZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ2NhcmRJbWdDb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL21lZGlhL2RpYWdub3N0aWMvY29tbW9uX3BhY2thZ2VfaWNvbnMvaGVhbHRpZW5zLnBuZ1wiIHN0eWxlPXt7IHdpZHRoOiAnODJweCcgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJnb2xkLXVwdG8tb2ZmZXJcIj5VcHRvIDE4JSBPRkY8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwa2djdXN0Q2FyZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ2NhcmRJbWdDb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL21lZGlhL2xhYi9pbWFnZXMvOTB4NjAvYzI3NDhiMmUyMmUyZjhlM2VkOTBjYjNjYTVlYTI5YmVfaTNQRTBZYS5qcGdcIiBzdHlsZT17eyB3aWR0aDogJzgycHgnIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ29sZC11cHRvLW9mZmVyXCI+VXB0byA0MCUgT0ZGPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1vZmZlci1jYXJkcyBtYi0yNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLWZyZWUtZG9jIHZpcC1tZWRsaWZlLWJnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ2aXAtY2FyZC1oZWFkaW5nXCI+RmxhdCAyMyUgRGlzY291bnRzIG9uIE1lZGljaW5lcyA8c3BhbiBjbGFzc05hbWU9XCJtZWRsaWZlLWNvbFwiPjxzcGFuIGNsYXNzTmFtZT1cInBvd2VyZWQtY29sIHRleHQtbGVmdFwiPlBvd2VyZWQgQnk8L3NwYW4+PGltZyBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvZGlhZ25vc3RpYy9jb21tb25fcGFja2FnZV9pY29ucy9tZWRsaWZlX2hEUXhpbEoucG5nXCIgLz48L3NwYW4+IDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZpcC1jYXJkLWxpc3RcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwLWNoay5zdmcnfSAvPkV4Y2x1c2l2ZSBmb3IgR29sZCBtZW1iZXJzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ2aXAtY2FyZC1saXN0XCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1jaGsuc3ZnJ30gLz5ObyBtaW5pbXVtIG9yZGVyIHZhbHVlcyA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZpcC1jYXJkLWxpc3RcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwLWNoay5zdmcnfSAvPlVubGltaXRlZCB1c2FnZSB3aXRoIG5vIG1heGltdW0gY2FwIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZWZ0XCI+PGEgY2xhc3NOYW1lPVwidGMtYXBwbHlcIiBvbkNsaWNrPXt0aGlzLnByb3BzLnRvZ2dsZS5iaW5kKHRoaXMsIHRydWUpfT5UJmFtcDtDIEFwcGx5PC9hPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qID09PT09PT09PT09PT09PT09PSBnb2xkIGJlbmlmaXRzICA9PT09PT09PT09PT09PT09PT0gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09PT0gZ29sZCBiZW5lZml0IHZpZGVvIHNlY3Rpb24gID09PT09PT09PT09PT09PT09PSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBwLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidmlwLWNhcmQtaGVhZGluZyBtYi0yNFwiPldoeSBEb2NwcmltZSBHb2xkID88L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLW9mZmVyLWNhcmRzIG1iLTI0XCIgc3R5bGU9e3sgcGFkZGluZzogNSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZpZGVvIGlkPVwiZ29sZFZpZGVvXCIgaGVpZ2h0PVwiYXV0b1wiIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9tZWRpYS93ZWIvY3VzdG9tX2ltYWdlcy9Hb2xkX2FkLm1wNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ2aWRlby1wbGF5ZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbS1jZW50ZXJcIiBvbkNsaWNrPXt0aGlzLnBsYXlWaWRlb30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwicGxheWVyLWljb25cIiB3aWR0aD1cIjg1XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9wbGF5LnN2Zyd9IGFsdD1cIlBsYXkgVmlkZW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBpZD1cInZpZGVvLXRpbWVcIiBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1jZW50ZXJcIj48L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qID09PT09PT09PT09PT09PT09PSBnb2xkIGJlbmVmaXQgUmV2aWV3IHN0YXJ0cyA9PT09PT09PT09PT09PT09PT0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlwUmV2aWV3U2VjdGlvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qID09PT09PT09PT09PT09PT09PSBnb2xkIGJlbmVmaXQgUmV2aWV3IEVuZCA9PT09PT09PT09PT09PT09PT0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09IGdvbGQgYmVuZWZpdCB2aWRlbyBzZWN0aW9uIGVuZHMgPT09PT09PT09PT09PT09PT09ICovfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qID09PT09PT09PT09PT09PT09PSBnb2xkIHNsaWRlciA9PT09PT09PT09PT09PT09PT0gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIHsvKm9sZCBWaWV3IEVuZHMqL31cblxuICAgICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09IG5ldyBnb2xkIHBhZ2UgdmlldyA9PT09PT09PT09PT09PT09PT0gKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGdvbGQtbmV3LXZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09PT0gSGVhZGluZyBzZWN0aW9uID09PT09PT09PT09PT09PT09PSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlYWRpbmctc2VjdGlvbiBkLWZsZXggYWxpZ24taXRlbXMtYmFzZWxpbmUgZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDAgcHItMiBoZWFkaW5nLW5hbWUgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPkRvY3ByaW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IG1hcmdpblRvcDogNCB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9nb2xkLWxnLnBuZ1wifSB3aWR0aD1cIjM1XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pk1lbWJlcnNoaXAgUGxhbiBGb3IgPGJyIC8+RXhjbHVzaXZlIERpc2NvdW50czwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09IEhlYWRpbmcgc2VjdGlvbiA9PT09PT09PT09PT09PT09PT0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09IEdvbGQgVmlldyBNYWluIGNvbnRhaW5lciA9PT09PT09PT09PT09PT09PT0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJnb2xkLXZpZXctbWFpbi1jb250YWluZXIgZC1ub25lXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09IERpc2NvdW50IExpc3RpbmcgdmlldyA9PT09PT09PT09PT09PT09PT0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJyb3cgbS0wIGRpc2NvdW50LWxpc3Rpbmctdmlld1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0zIGNvbC00IGRpc2NvdW50LWxpc3QtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBoZWlnaHQ9XCI1M1wiICBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY28tMS5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtbC0zIGZ3LTUwMFwiPkV4Y2x1c2l2ZSBEaXNjb3VudHMgPGJyLz4gT24gMzAsMDAwKyBEb2N0b3JzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmdy01MDBcIj5FeGNsdXNpdmUgUHJpY2VzIE9uIERvY3RvcnMgJmFtcDsgTGFiczwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0zIGNvbC00IGRpc2NvdW50LWxpc3QtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBoZWlnaHQ9XCI1M1wiICBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY28tMy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtbC0zIGZ3LTUwMFwiPkZsYXQgMjMlIE9GRiA8YnIvPm9uIE1lZGljaW5lczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZnctNTAwXCI+RmxhdCAyMyUgT0ZGIE9uIE1lZGljaW5lczwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0zIGNvbC00IGRpc2NvdW50LWxpc3QtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBoZWlnaHQ9XCI1M1wiICBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY28tNC5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtbC0zIGZ3LTUwMFwiPlVubGltaXRlZCBBdWRpbyA8YnIvPiZhbXA7IENoYXQgQ29uc3VsdGF0aW9uPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmdy01MDBcIj5VbmxpbWl0ZWQgVGVsZSBDb25zdWx0YXRpb25zPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTMgY29sLTQgZGlzY291bnQtbGlzdC1pdGVtIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW0tY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGhlaWdodD1cIjUzXCIgIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ljby0yLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1sLTMgZnctNTAwXCI+RGlzY291bnRzIG9uIDxici8+NSwwMDAgTGFiczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09PT0gRGlzY291bnQgTGlzdGluZyB2aWV3ID09PT09PT09PT09PT09PT09PSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09IFByaWNpbmcgdGFibGUgPT09PT09PT09PT09PT09PT09ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnZpcENsdWJMaXN0ICYmIHRoaXMucHJvcHMudmlwQ2x1Ykxpc3QuZ29sZF9wbGFucyAmJiB0aGlzLnByb3BzLnZpcENsdWJMaXN0LmdvbGRfcGxhbnMubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG0tMCBwcmljaW5nLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+U2VsZWN0IHlvdXIgcGxhbjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtLTAgZGVza3RvcC12aWV3LXByaWNpbmctdGFibGVcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZS1jYXJkLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT4mbmJzcDs8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5QcmljZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvdmVyYWdlPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+IFZhbGlkaXR5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+VW5saW1pdGVkIDxiciAvPiBPbmxpbmUgQ29uc3VsdGF0aW9uPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy52aXBDbHViTGlzdC5nb2xkX3BsYW5zKS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YCR7c2VsZi5wcm9wcy52aXBDbHViTGlzdC5nb2xkX3BsYW5zICYmIHNlbGYucHJvcHMudmlwQ2x1Ykxpc3QuZ29sZF9wbGFucy5sZW5ndGggPCA0ID8gJ2NvbC00JyA6ICdjb2wtMyd9IHByaWNpbmctY2FyZGB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e3ZhbHVlLmludGVybmFsX25hbWV9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJ1eS1wcmljZVwiPuKCuSB7dmFsdWUuZGVhbF9wcmljZX08YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUuaXNfc2VsZWN0ZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3B1bGFyLWNvbCBkLWlubGluZS1ibG9ja1wiPlBPUFVMQVI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHNwYW4gc3R5bGU9e3sgb3BhY2l0eTogMCB9fSBjbGFzc05hbWU9XCJwb3B1bGFyLWNvbCBkLWlubGluZS1ibG9ja1wiPiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnt2YWx1ZS50b3RhbF9hbGxvd2VkX21lbWJlcnN9IHtwYXJzZUludCh2YWx1ZS50b3RhbF9hbGxvd2VkX21lbWJlcnMpID4gMSA/ICdNZW1iZXJzJyA6ICdNZW1iZXInfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+IHt2YWx1ZS50ZW51cmV9IG1vbnRoczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGltZXMtaWNvbi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDE2LCBwb3NpdGlvbjogJ3JlbGF0aXZlJywgdG9wOiA2LCBmb250V2VpZ2h0OiA1MDAgfX0gPnt2YWx1ZS5jaGF0X3BsYW5fZGVzY3JpcHRpb24gPyB2YWx1ZS5jaGF0X3BsYW5fZGVzY3JpcHRpb24gOiAnLSd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNzdG0tYm9vay1idG5cIiBvbkNsaWNrPXtzZWxmLnByb3BzLnNlbGVjdEdvbGRQbGFuLmJpbmQoc2VsZiwgdmFsdWUsIGZhbHNlLCB0cnVlKX0+QnV5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtLTAgbWJsLXZpZXctcHJpY2luZy10YWJsZVwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLnZpcENsdWJMaXN0LmdvbGRfcGxhbnMpLm1hcChmdW5jdGlvbiAoW2tleSwgdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2Ake3NlbGYucHJvcHMudmlwQ2x1Ykxpc3QuZ29sZF9wbGFucyAmJiBzZWxmLnByb3BzLnZpcENsdWJMaXN0LmdvbGRfcGxhbnMubGVuZ3RoIDwgNCA/ICdjb2wtNCcgOiAnY29sLTMnfSBwcmljZS10YWJsZSBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC1jb2x1bW4gJHt2YWx1ZS5pZCA9PSBzZWxmLnByb3BzLnNlbGVjdGVkX3BsYW5faWQgPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9e3NlbGYucHJvcHMuc2VsZWN0R29sZFBsYW4uYmluZChzZWxmLCB2YWx1ZSwgZmFsc2UsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctYm94XCI+Jm5ic3A7PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRpY2F0b3ItYm94IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMTJcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3doaXRlLWNoZWNrLnN2Zyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm0tMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUuaXNfc2VsZWN0ZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9wdWxhci1jb2xcIj5wb3B1bGFyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8c3BhbiBzdHlsZT17eyBvcGFjaXR5OiAwIH19IGNsYXNzTmFtZT1cInBvcHVsYXItY29sIGQtaW5saW5lLWJsb2NrXCI+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt2YWx1ZS5pbnRlcm5hbF9uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2UtdGV4dFwiPuKCuSB7dmFsdWUuZGVhbF9wcmljZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7a2V5ID09IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q09WRVJBR0UgKE1lbWJlcnMpPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyB0b3A6ICcxMy4zcmVtJyB9fT5WQUxJRElUWSAoTW9udGhzKTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgdG9wOiAnMTguOHJlbScgfX0+VU5MSU1JVEVEIE9OTElORSBDT05TVUxUQVRJT048L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kOiAncmdiYSgxMTIsIDExMiwgMTEyLCAwLjIpJyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtZW1iZXItY291bnRcIj57dmFsdWUudG90YWxfYWxsb3dlZF9tZW1iZXJzfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmQ6ICdyZ2JhKDExMiwgMTEyLCAxMTIsIDAuMiknIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pnt2YWx1ZS50ZW51cmV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZDogJ3JnYmEoMTEyLCAxMTIsIDExMiwgMC4yKScgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmNoYXRfcGxhbl9kZXNjcmlwdGlvbiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3ZhbHVlLmNoYXRfcGxhbl9kZXNjcmlwdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8c3BhbiBjbGFzc05hbWU9XCJkYXNoUm90YXRlXCI+fDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09IFByaWNpbmcgdGFibGUgPT09PT09PT09PT09PT09PT09ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09PT0gbGlzdCAmIGdvbGQgdmlkZW8gd2lkZ2V0ID09PT09PT09PT09PT09PT09PSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cInJvdyBtLTAgZC1mbGV4IGZsZXgtY29sdW1uIHZpZGVvLWJsb2NrLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZ29sZC1saXN0LXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgY29sLTEyIGdvbGQtdmlkZW8tY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ2aXAtY2FyZC1oZWFkaW5nIHAtMFwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAxMCxtYXJnaW5Ub3A6IDEwfX0+R29sZCBNZW1iZXJzaGlwIEJlbmVmaXRzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtb2ZmZXItY2FyZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2aWRlbyBpZD1cImdvbGRWaWRlb1wiIGhlaWdodD1cImF1dG9cIiBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvd2ViL2N1c3RvbV9pbWFnZXMvR29sZF9hZC5tcDRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdmlkZW8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ2aWRlby1wbGF5ZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbS1jZW50ZXJcIiBvbkNsaWNrPXt0aGlzLnBsYXlWaWRlb30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cInBsYXllci1pY29uXCIgd2lkdGg9XCI4NVwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvcGxheS5zdmcnfSBhbHQ9XCJQbGF5IFZpZGVvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBpZD1cInZpZGVvLXRpbWVcIiBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1jZW50ZXJcIj48L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02IGNvbC0xMiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2xkLWdybnRlZS1jYXJkLWNvbnRhaW5lciBtLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1ncm50ZWUtY2FyZCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZC1pbWctZ2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwicnVwZWVkb3duXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9ydXBlZHduMS5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1ncm50ZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND4xMDAlIFNhdGlzZmFjdGlvbiBHdWFyYW50ZWU8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DYW5jZWwgYW55dGltZSB3aXRoaW4gYSB5ZWFyIGFuZCBnZXQgZnVsbCByZWZ1bmQuIE5vIHF1ZXN0aW9ucyBhc2tlZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2xkLWdybnRlZS1jYXJkIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kLWltZy1nbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJycgfX0gYWx0PVwicnVwZWVkb3duXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9ncmVlbnJwLnN2Zyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2xkLWdybnRlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlBvdGVudGlhbCBzYXZpbmdzIG9mIOKCuTYwMDAveWVhciBvbiBPUEQsIEhlYWx0aCBjaGVjay11cHMgYW5kIE1lZGljaW5lczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdsZC1zZWUtbW9yZSBwLTBcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdnb2xkU2VlSG93Q2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdnb2xkLXNlZS1ob3ctY2xpY2snXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93UG9wdXA6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PlNlZSBob3cgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2ljb25zL2JhY2stb3JhbmdlLnN2Zyd9IC8+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvbGQtZ3JudGVlLWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kLWltZy1nbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9XCJydXBlZWRvd25cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2NvbnN1bHQtcmVwb3J0LnN2Zyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2xkLWdybnRlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkZyZWUgRG9jdG9yIENvbnN1bHRhdGlvbiBhZnRlciBldmVyeSBMYWIgYXBwb2ludG1lbnQ8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgY29sLTEyXCIgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXggOiAxfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLW9mZmVyLWNhcmRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1mcmVlLWRvY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ2aXAtY2FyZC1oZWFkaW5nXCI+RmxhdCAyMyUgRGlzY291bnRzIG9uIE1lZGljaW5lcyA8c3BhbiBjbGFzc05hbWU9XCJtZWRsaWZlLWNvbFwiPjxzcGFuIGNsYXNzTmFtZT1cInBvd2VyZWQtY29sIHRleHQtbGVmdFwiPlBvd2VyZWQgQnk8L3NwYW4+PGltZyBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvZGlhZ25vc3RpYy9jb21tb25fcGFja2FnZV9pY29ucy9tZWRsaWZlX2hEUXhpbEoucG5nXCIgLz48L3NwYW4+IDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidmlwLWNhcmQtbGlzdFwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jaGstMi5zdmcnfSAvPkV4Y2x1c2l2ZSBmb3IgR29sZCBtZW1iZXJzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZpcC1jYXJkLWxpc3RcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY2hrLTIuc3ZnJ30gLz5ObyBtaW5pbXVtIG9yZGVyIHZhbHVlcyA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidmlwLWNhcmQtbGlzdFwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jaGstMi5zdmcnfSAvPlVubGltaXRlZCB1c2FnZSB3aXRoIG5vIG1heGltdW0gY2FwIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj48YSBjbGFzc05hbWU9XCJ0Yy1hcHBseVwiIG9uQ2xpY2s9e3RoaXMucHJvcHMudG9nZ2xlLmJpbmQodGhpcywgdHJ1ZSl9PlQmYW1wO0MgQXBwbHk8L2E+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgY29sLTEyIGQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1vZmZlci1jYXJkc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtZnJlZS1kb2NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidmlwLWNhcmQtaGVhZGluZ1wiPk9ubGluZSBEb2N0b3IgQ29uc3VsdGF0aW9uczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidmlwLWNhcmQtbGlzdFwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jaGstMi5zdmcnfSAvPk9ubGluZSBEb2N0b3IgQ29uc3VsdGF0aW9uczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ2aXAtY2FyZC1saXN0XCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2Noay0yLnN2Zyd9IC8+VW5saW1pdGVkIG9ubGluZSBjb25zdWx0YXRpb25zIGZvciBmdWxsIGZhbWlseTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ2aXAtY2FyZC1saXN0XCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2Noay0yLnN2Zyd9IC8+SW5zdGFudCBjb25uZWN0IG92ZXIgQ2hhdCAmYW1wOyBDYWxsPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09PT0gTWVkbGlmZSAmIGNvbnN1bGF0YWlvbiB3aWRnZXQgPT09PT09PT09PT09PT09PT09ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtZWQtYmxvY2tzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09IE1lZGxpZmUgJiBjb25zdWxhdGFpb24gd2lkZ2V0ID09PT09PT09PT09PT09PT09PSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09IGxpc3QgJiBnb2xkIHZpZGVvIHdpZGdldCA9PT09PT09PT09PT09PT09PT0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJnb2xkLXZpZXctbWFpbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXQtMTAgZ2xkaGRuZ1wiPkdvbGQgcGxhbjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy52aXBDbHViTGlzdC5nb2xkX3BsYW5zKS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJnb2xkLXBsbi1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvbGRQbGFuU2VjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IHtgQ292ZXJhZ2U6ICR7dmFsdWUudG90YWxfYWxsb3dlZF9tZW1iZXJzfSBNZW1iZXJgfSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IHtgVmFsaWQgZm9yICR7dmFsdWUudGVudXJlfSBNb250aGB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJnb2xkUHJpY2VzXCI+4oK5e3ZhbHVlLmRlYWxfcHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYmxvY2std2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvcEhvc3BpdGFscyAmJiB0aGlzLnByb3BzLnRvcEhvc3BpdGFscy50b3BfaG9zcGl0YWxzICYmIHRoaXMucHJvcHMudG9wSG9zcGl0YWxzLnRvcF9ob3NwaXRhbHMubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SG9tZVBhZ2VXaWRnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPVwiS2V5IEhvc3BpdGFsIFBhcnRuZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q9e3RoaXMucHJvcHMudG9wSG9zcGl0YWxzLnRvcF9ob3NwaXRhbHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wSG9zcGl0YWxzPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlPSdob21lX3RvcF9oc3B0bCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5T2JqPXt0aGlzLnByb3BzLmhpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoRnVuYz17dGhpcy5wcm9wcy5ob3NwaXRhbENhcmRDbGlja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvbGROZXR3b3JrPXt0aGlzLnByb3BzLnZpZXdEb2NwcmltZU5ldHdvcmtDbGlja2VkLmJpbmQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tR29sZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbikubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgcC0wIHYtYnRuICBidG4tbGcgaG9yaXpvbnRhbCBib3R0b20gbm8tcm91bmQgdGV4dC1sZyBidXR0b25zLWFkZGNhcnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlzX2Jvb2tpbmdfcGFnZSAhPT0gJycgJiYgKHRoaXMucHJvcHMuaXNfYm9va2luZ19wYWdlID09ICdvcGQnIHx8IHRoaXMucHJvcHMuaXNfYm9va2luZ19wYWdlID09ICdsYWInKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInYtYnRuLXByaW1hcnkgYm9vay1idG4tbXJnbi1hZGp1c3QgZGVzay1jb250LWJ0blwiIG9uQ2xpY2s9e3RoaXMuZ29CYWNrLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNvbnRpbnVlIEJvb2tpbmc8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wcy5pc19mcm9tX29yZ2FuaWMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGVzay1jb250LWJ0blwiIG9uQ2xpY2s9e3RoaXMuZ29CYWNrLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Db250aW51ZSBCb29raW5nPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGJ1dHRvbiBjbGFzc05hbWU9XCJ2LWJ0bi1wcmltYXJ5IGJvb2stYnRuLW1yZ24tYWRqdXN0IFwiIHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjMWI5N2ZkJywgYm9yZGVyQ29sb3I6IFwiIzFiOTdmZFwiIH19IG9uQ2xpY2s9e3RoaXMucHJvcHMucHJvY2VlZC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q29udGludWUgd2l0aCB7YCR7dGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLmludGVybmFsX25hbWV9IOKCuSAke3RoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi5kZWFsX3ByaWNlfWB9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNUT1JBR0UuaXNBZ2VudCgpID8gPGJ1dHRvbiBjbGFzc05hbWU9XCJhZGQtc2hwbmctY2FydC1idG5cIiBzdHlsZT17eyBib3JkZXJDb2xvcjogXCIjMWI5N2ZkXCIsIGNvbG9yOiBcIiMxYjk3ZmRcIiB9fSBvbkNsaWNrPXt0aGlzLnNlbmRQYWdlVXJsfT48aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvd2EtbG9nby1zbS5wbmcnfSAvPlNlbmQgb24gV2hhdHNhcHA8L2J1dHRvbj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJsb2NrLXdpZGdldCBwdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZC1ibG9jay1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtY2FyZC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5Ub3AgTGFiczwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogY2FyZCBzbGlkZXIgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1zbGlkZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci1jYXJkLWNvbHVtblwiIGlkPVwiY2FyZEJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1pbWctY29sIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW0tY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL21lZGlhL2RpYWdub3N0aWMvY29tbW9uX3BhY2thZ2VfaWNvbnMvVGh5cm9jYXJlX0p0aFJxRmYucG5nXCIgYWx0PVwiUGFydG5lcnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJvZmYtdHh0XCIgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGJvdHRvbTogMCB9fT4gVXB0byA1MCUgT0ZGPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItY2FyZC1jb2x1bW5cIiBpZD1cImNhcmRCbG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaW1nLWNvbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9tZWRpYS9sYWIvaW1hZ2VzLzkweDYwLzliZTdjM2M1M2VkMzA4NzdjMTQzM2JmNmQ5ZjdkOTE2X0dqZ0NlaWsuanBnXCIgYWx0PVwiUGFydG5lcnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJvZmYtdHh0XCIgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGJvdHRvbTogMCB9fT4gVXB0byA1MCUgT0ZGPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItY2FyZC1jb2x1bW5cIiBpZD1cImNhcmRCbG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaW1nLWNvbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9tZWRpYS9kaWFnbm9zdGljL2NvbW1vbl9wYWNrYWdlX2ljb25zL21lZGxpZmVfaERReGlsSi5wbmdcIiBhbHQ9XCJQYXJ0bmVyc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm9mZi10eHRcIiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgYm90dG9tOiAwIH19PiBVcHRvIDcwJSBPRkY8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci1jYXJkLWNvbHVtblwiIGlkPVwiY2FyZEJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1pbWctY29sIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW0tY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL21lZGlhL2xhYi9pbWFnZXMvOTB4NjAvMmMyNWMyNzJjNjFiOGI2NDYzMDE3NDFmMWM5ODAzODcuanBnXCIgYWx0PVwiUGFydG5lcnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJvZmYtdHh0XCIgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGJvdHRvbTogMCB9fT4gVXB0byAyMCUgT0ZGPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItY2FyZC1jb2x1bW5cIiBpZD1cImNhcmRCbG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaW1nLWNvbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9tZWRpYS9sYWIvaW1hZ2VzLzkweDYwLzQ1YWU0YWZmOGIxYjliZjZkMWRmZjJlODZlOTc0MDBhLmpwZ1wiIGFsdD1cIlBhcnRuZXJzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwib2ZmLXR4dFwiIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBib3R0b206IDAgfX0+IFVwdG8gNTAlIE9GRjwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyLWNhcmQtY29sdW1uXCIgaWQ9XCJjYXJkQmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWltZy1jb2wgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvbGFiL2ltYWdlcy85MHg2MC9kYTdjY2I2MTI1ZGRhN2IzZWJhMWMzOGQ3YmQ5YzBiOV9acDBPMUVYLmpwZ1wiIGFsdD1cIlBhcnRuZXJzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwib2ZmLXR4dFwiIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBib3R0b206IDAgfX0+IFVwdG8gNzAlIE9GRjwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyLWNhcmQtY29sdW1uXCIgaWQ9XCJjYXJkQmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWltZy1jb2wgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvZGlhZ25vc3RpYy9jb21tb25fcGFja2FnZV9pY29ucy9oZWFsdGllbnMucG5nXCIgYWx0PVwiUGFydG5lcnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJvZmYtdHh0XCIgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGJvdHRvbTogMCB9fT4gVXB0byAxOCUgT0ZGPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItY2FyZC1jb2x1bW5cIiBpZD1cImNhcmRCbG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaW1nLWNvbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9tZWRpYS9sYWIvaW1hZ2VzLzkweDYwL2MyNzQ4YjJlMjJlMmY4ZTNlZDkwY2IzY2E1ZWEyOWJlX2kzUEUwWWEuanBnXCIgYWx0PVwiUGFydG5lcnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJvZmYtdHh0XCIgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGJvdHRvbTogMCB9fT4gVXB0byA0MCUgT0ZGPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKioqKioqICBjdXN0b21lciByZXZpZXcgKioqKioqKioqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ibG9jay13aWRnZXQgcHQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhcmQtYmxvY2stcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJmdy01MDBcIiBzdHlsZT17eyBmb250U2l6ZTogMTQsIHBhZGRpbmdCb3R0b206IDUgfX0+T3VyIEhhcHB5IEdvbGQgQ3VzdG9tZXJzPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXNsaWRlci1jb250YWluZXIgY3VzdC1yZXZpZXcgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGN1c3QtZmVlZGJhY2stY29sXCIgaWQ9XCJzdGF0aWNfcmV2aWV3X2JsY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIGNvbC1zbS00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0LWltZy1ibG9jayBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgZnctNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3Byb2ZpbGUtaW1nLnBuZ1wifSBhbHQ9XCJuYW1lXCIvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+S1A8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPktyaXRpa2EgUGFuZGV5PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0yXCI+Q2FuIHlvdSBpbWFnaW5lIGhhdmluZyBhIGRpc2NvdW50IG9uIGRvY3RvcidzIGZlZS4gWWVhaCwgSSB3YXMgc3VycHJpc2VkIHRvby4gQnV0IHdpdGggRG9jcHJpbWUgR29sZCBtZW1iZXJzaGlwLCBpIGdvdCBoZWF2eSBkaXNjb3VudHMgb24gZG9jdG9yIGZlZXMsIGxhYiB0ZXN0cyBhbmQgZnVsbC1ib2R5IGhlYWx0aCBwYWNrYWdlcy4gRGVmaW5pdGVseSBzYXZlZCBzb21lIGdvb2QgbW9uZXkgaGVyZS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgaGVpZ2h0PVwiMjBcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9nLXBsYXkucG5nXCJ9IGFsdD1cImdvb2dsZS1wbGF5XCIvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgY29sLXNtLTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3QtaW1nLWJsb2NrIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBmdy01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcHJvZmlsZS1pbWcucG5nXCJ9IGFsdD1cIm5hbWVcIi8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QUzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+UHVybmltYSBTaW5nbGE8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTJcIj5JIGhhdmUgYm9va2VkIDMgZnVsbCBib2R5IGhlYWx0aCBwYWNrYWdlcyBmb3IgbXkgZmFtaWx5LiBBZnRlciByZWNlaXZpbmcgdGhlIHJlcG9ydCwgSSBnb3QgYSBjYWxsIGZyb20gYSBkb2N0b3Igd2hvIGV4cGxhaW5lZCBlYWNoIGFuZCBldmVyeSBlbGVtZW50IG9mIHRoZSByZXBvcnQgdG8gbWUgYW5kIG15IGZhbWlseS4gSGUgZXZlbiBwcmVzY3JpYmVkIHNvbWUgbWVkaWNpbmVzIHRvIG15IG1vdGhlciBhbmQgZGlyZWN0ZWQgdXMgdG8gdGFrZSBzb21lIG11bHRpdml0YW1pbnMuIEkgdHJ1bHkgbG92ZWQgdGhlIHNlcnZpY2UuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIGhlaWdodD1cIjIwXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvZy1wbGF5LnBuZ1wifSBhbHQ9XCJnb29nbGUtcGxheVwiLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIGNvbC1zbS00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0LWltZy1ibG9jayBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgZnctNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFTPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Ba2FzaCBTYWluaTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMlwiPkkgZGlkbuKAmXQgYmVsaWV2ZSBpbiB0aGUgR29sZCBtZW1iZXJzaGlwIHByb2R1Y3QgYXQgZmlyc3QuIEkgd2FzIGhhcHB5IHdpdGggZGlzY291bnRzIGJ1dCB3YXMgc3VzcGVjdGluZyB0aGUgbmV0d29yayBvZiBob3NwaXRhbHMgJiBsYWJzLiBJIGFtIGhhcHB5IHRoYXQgSSB0b29rIHRoaXMgY2hhbmNlIGFuZCBib29rZWQgdGhlIG1lbWJlcnNoaXAuIERvY3ByaW1lIGhhcyBwYXJ0bmVyZWQgd2l0aCBtb3N0IG9mIHRoZSB0b3AgaG9zcGl0YWxzIGFuZCBsYWJzLiBJIHJlY2VudGx5IGdvdCBhIGRpc2NvdW50IG9uIE1lZGFudGHigJlzIERvY3RvciBmZWUuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBjb2wtc20tNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdC1pbWctYmxvY2sgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGZ3LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TUzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+U29uYW0gU2luaGE8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTJcIj5JIGJvb2tlZCBwcmV2ZW50aXZlIGhlYWx0aCBwYWNrYWdlcyBmb3IgbXkgcGFyZW50cyBsaXZpbmcgaW4gRGVsaGkuIEkgYW0gc28gZ2xhZCB0aGF0IEkgY2FuIHRha2UgY2FyZSBvZiB0aGVpciBoZWFsdGggYnkgc2l0dGluZyBpbiBCYW5nYWxvcmUuIFRoZXkgY29sbGVjdGVkIHRoZSBibG9vZCBzYW1wbGUgZnJvbSBteSBwYXJlbnQncyBob21lIGFuZCBzZW50IHRoZSByZXBvcnQgb24gZW1haWwgd2hpY2ggd2FzIHJldmlld2VkIGJ5IHRoZWlyIERvY3Rvci4gSGUgcHJlc2NyaWJlZCBzb21lIG1lZGljaW5lcyB0byBteSBwYXJlbnRzIGFuZCBJIGdvdCAyMyUgb2ZmIG9uIG1lZGljaW5lIG9ubGluZSBkZWxpdmVyeS4gSGFkIGFuIG92ZXJhbGwgYW1hemluZyBleHBlcmllbmNlITwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHNsaWRlciBidXR0b25zICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwa2ctYnRubGZ0IGQtbm9uZVwiIGlkPXtgc3RhdGljX3Jldmlld19ibGNrX1JpZ2h0QXJyb3dfaHNwdGxgfSBvbkNsaWNrPXt0aGlzLnNjcm9sbC5iaW5kKHRoaXMsICdsZWZ0Jyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBoZWlnaHQ9XCIxMlwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NvbG9yLWNoZXYuc3ZnXCJ9IGFsdD1cImNoZXYtbGVmdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGtnLWJ0bnJndFwiIGlkPXtgc3RhdGljX3Jldmlld19ibGNrX2xlZnRBcnJvd19oc3B0bGB9IG9uQ2xpY2s9e3RoaXMuc2Nyb2xsLmJpbmQodGhpcywgJ3JpZ2h0Jyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBoZWlnaHQ9XCIxMlwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NvbG9yLWNoZXYuc3ZnXCJ9IGFsdD1cImNoZXYtcmlnaHRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyoqKioqKiAgY3VzdG9tZXIgcmV2aWV3ICoqKioqKioqKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09IEZyZXF1ZW50bHkgYXNrZWQgcXVlc3Rpb24gd2lkZ2V0ID09PT09PT09PT09PT09PT09PSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZhcS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvbGQtYWNyZC1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNkbi10aXRsZSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgb25DbGljaz17dGhpcy5CdXR0b25IYW5kbGVyLmJpbmQodGhpcywgMCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZ3LTcwMFwiIHN0eWxlPXt7IGZvbnRTaXplOiAnMTVweCcgfX0+RnJlcXVlbnRseSBhc2tlZCBxdWVzdGlvbnM8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2AgJHt0aGlzLnN0YXRlLnRhYnNWYWx1ZS5pbmRleE9mKDApID4gLTEgPyAnJyA6ICdhY2RuLXVwJ31gfSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09PT09aW5uZXIgYWNjb3JkaW9uIGNvbnRhaW5lcj09PT09PT09PT09PT09PT09PT0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaW5uZXJhY29yZC1jb250YWluZXIgJHt0aGlzLnN0YXRlLnRhYnNWYWx1ZS5pbmRleE9mKDApID4gLTEgPyAnZC1ub25lJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2xkLXN1Yi1hY3JkXCIgb25DbGljaz17dGhpcy5CdXR0b25IYW5kbGVyLmJpbmQodGhpcywgMSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNkbi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZnctNTAwXCI+V2hhdCBhcmUgdGhlIGJlbmVmaXRzIG9mIGJlaW5nIGEgZ29sZCBtZW1iZXI/IDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtgYWNkbi1hcnJvdyAgJHt0aGlzLnN0YXRlLnRhYnNWYWx1ZS5pbmRleE9mKDEpID4gLTEgPyAnJyA6ICdhY2RuLWFycm93LXVwJ31gfSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Bnb2xkLXN1Yi1hY3JkLWNvbnRlbnQgJHt0aGlzLnN0YXRlLnRhYnNWYWx1ZS5pbmRleE9mKDEpID4gLTEgPyAnZC1ub25lJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3UgY2FuIGF2YWlsIGV4Y2x1c2l2ZSBkaXNjb3VudHMgb24gRG9jdG9yIGFuZCBMYWIgdGVzdCBhcHBvaW50bWVudHMgZm9yIHRoZSBjb3ZlcmVkIG1lbWJlcnMgaW4gdGhlIHBsYW4uIFRoZSBtZW1iZXJzaGlwIHdpbGwgbGFzdCB0aWxsIHRoZSBkdXJhdGlvbiBvZiB0aGUgcGxhbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiZ29sZC1zdWItYWNyZFwiIG9uQ2xpY2s9e3RoaXMuQnV0dG9uSGFuZGxlci5iaW5kKHRoaXMsIDIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjZG4tdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZ3LTUwMFwiPkhvdyBjYW4gSSBhdmFpbCBkaXNjb3VudHMgb24gbWVkaWNpbmVzPyA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17YGFjZG4tYXJyb3cgICR7dGhpcy5zdGF0ZS50YWJzVmFsdWUuaW5kZXhPZigyKSA+IC0xID8gJycgOiAnYWNkbi1hcnJvdy11cCd9YH0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgZ29sZC1zdWItYWNyZC1jb250ZW50ICR7dGhpcy5zdGF0ZS50YWJzVmFsdWUuaW5kZXhPZigyKSA+IC0xID8gJ2Qtbm9uZScgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IGNhbiB2aXNpdCA8YSBzdHlsZT17eyBjb2xvcjogJyNmNzg2MzEnLCBjdXJzb3I6ICdwb2ludGVyJyB9fSBocmVmPVwiaHR0cHM6Ly93d3cubWVkbGlmZS5jb20vXCI+IHd3dy5tZWRsaWZlLmNvbTwvYT4gd2Vic2l0ZSBvciBtb2JpbGUgYXBwbGljYXRpb24gYW5kIHVzZSB0aGUgZXhjbHVzaXZlIGNvdXBvbiBjb2RlIHByb3ZpZGVkIHRvIHlvdSBvbmNlIHlvdSBiZWNvbWUgYSBnb2xkIG1lbWJlci4gWW91IHdpbGwgZ2V0IGZsYXQgMjMlIGRpc2NvdW50IG9uIHByZXNjcmlwdGlvbiBkcnVncy4gUHJvbW8gY29kZSBjYW4gYmUgdXNlZCBtdWx0aXBsZSB0aW1lcyBmb3IgMSB5ZWFyIHdpdGhvdXQgYW55IG1pbmltdW0gb3JkZXIgdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBGb3IgbW9yZSBkZXRhaWxzICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJyNmNzg2MzEnLCBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXt0aGlzLnByb3BzLnRvZ2dsZS5iaW5kKHRoaXMsIHRydWUpfT5jbGljayBoZXJlPC9zcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1zdWItYWNyZFwiIG9uQ2xpY2s9e3RoaXMuQnV0dG9uSGFuZGxlci5iaW5kKHRoaXMsIDMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjZG4tdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZ3LTUwMFwiPldob20gY2FuIEkgYWRkIG1lbWJlcnMgdW5kZXIgdGhlIHBsYW4/IDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtgYWNkbi1hcnJvdyAgJHt0aGlzLnN0YXRlLnRhYnNWYWx1ZS5pbmRleE9mKDMpID4gLTEgPyAnJyA6ICdhY2RuLWFycm93LXVwJ31gfSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Bnb2xkLXN1Yi1hY3JkLWNvbnRlbnQgJHt0aGlzLnN0YXRlLnRhYnNWYWx1ZS5pbmRleE9mKDMpID4gLTEgPyAnZC1ub25lJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3UgY2FuIGFkZCB5b3VyIGZhbWlseSwgZXh0ZW5kZWQgZmFtaWx5IG9yIGZyaWVuZHMgdW5kZXIgdGhlIHBsYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1zdWItYWNyZFwiIG9uQ2xpY2s9e3RoaXMuQnV0dG9uSGFuZGxlci5iaW5kKHRoaXMsIDQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjZG4tdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZ3LTUwMFwiPkhvdyBjYW4gSSBhdmFpbCBmcmVlIGRvY3RvciBjb25zdWx0YXRpb25zIGZvciBsYWIgYXBwb2ludG1lbnQ/PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2BhY2RuLWFycm93ICAke3RoaXMuc3RhdGUudGFic1ZhbHVlLmluZGV4T2YoNCkgPiAtMSA/ICcnIDogJ2FjZG4tYXJyb3ctdXAnfWB9IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YGdvbGQtc3ViLWFjcmQtY29udGVudCAke3RoaXMuc3RhdGUudGFic1ZhbHVlLmluZGV4T2YoNCkgPiAtMSA/ICdkLW5vbmUnIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFmdGVyIGNvbXBsZXRpb24gb2YgYSBwYXRob2xvZ3kgbGFiIGFwcG9pbnRtZW50LCB5b3Ugd2lsbCBoYXZlIHRoZSBvcHRpb24gdG8gY29uc3VsdCB3aXRoIG91ciBwYW5lbCBvZiBkb2N0b3JzIGZvciBmcmVlICYgZ2V0IHlvdXIgbGFiIHJlcG9ydCByZXZpZXdlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1zdWItYWNyZFwiIG9uQ2xpY2s9e3RoaXMuQnV0dG9uSGFuZGxlci5iaW5kKHRoaXMsIDUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjZG4tdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZ3LTUwMFwiPklzIHRoZSBmZWUgcmVjdXJyaW5nPyA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17YGFjZG4tYXJyb3cgICR7dGhpcy5zdGF0ZS50YWJzVmFsdWUuaW5kZXhPZig1KSA+IC0xID8gJycgOiAnYWNkbi1hcnJvdy11cCd9YH0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgZ29sZC1zdWItYWNyZC1jb250ZW50ICR7dGhpcy5zdGF0ZS50YWJzVmFsdWUuaW5kZXhPZig1KSA+IC0xID8gJ2Qtbm9uZScgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXQgaXMgYSBvbmUtdGltZSBmZWUgcGxhbiBhbmQgdGhlIGZlZSBpcyBub3QgcmVjdXJyaW5nLiBQb3N0IHRoZSBleHBpcnkgb2YgdGhlIHBsYW4sIHlvdSBjYW4gcmVuZXcgb3IgYnV5IGFub3RoZXIgcGxhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2xkLXN1Yi1hY3JkXCIgb25DbGljaz17dGhpcy5CdXR0b25IYW5kbGVyLmJpbmQodGhpcywgNil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNkbi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZnctNTAwXCI+T25jZSBJIGJlY29tZSBhIGdvbGQgbWVtYmVyLCB3aWxsIEkgZ2V0IGRpc2NvdW50cyBvbiBhbGwgRG9jdG9yIGFuZCBMYWIgYXBwb2ludG1lbnRzPyA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17YGFjZG4tYXJyb3cgICR7dGhpcy5zdGF0ZS50YWJzVmFsdWUuaW5kZXhPZig2KSA+IC0xID8gJycgOiAnYWNkbi1hcnJvdy11cCd9YH0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgZ29sZC1zdWItYWNyZC1jb250ZW50ICR7dGhpcy5zdGF0ZS50YWJzVmFsdWUuaW5kZXhPZig2KSA+IC0xID8gJ2Qtbm9uZScgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IGNhbiBnZXQgZGlzY291bnRzIG9uIGFsbCB0aGUgbGFicyBhbmQgaG9zcGl0YWxzIHdoaWNoIGFyZSBwYXJ0IG9mIHRoZSBnb2xkIG5ldHdvcmsuIFBsZWFzZSBub3RlIHRoYXQgdGhlIEdvbGQgbmV0d29yayBpcyBkeW5hbWljIGluIG5hdHVyZSBhbmQgbWlnaHQgY2hhbmdlIGZyb20gdGltZSB0byB0aW1lLiBUbyB2aWV3IGdvbGQgbmV0d29yaywgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjZjc4NjMxJywgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy52aWV3RG9jcHJpbWVOZXR3b3JrQ2xpY2tlZCgpfT5jbGljayBoZXJlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2xkLXN1Yi1hY3JkXCIgb25DbGljaz17dGhpcy5CdXR0b25IYW5kbGVyLmJpbmQodGhpcywgNyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNkbi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZnctNTAwXCI+Q2FuIEkgdXNlIHRoZSBnb2xkIHBsYW4gYmVuZWZpdCBhZ2FpbnN0IGFueSBwcm9maWxlIGZyb20gbXkgYWNjb3VudD8gIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtgYWNkbi1hcnJvdyAgJHt0aGlzLnN0YXRlLnRhYnNWYWx1ZS5pbmRleE9mKDcpID4gLTEgPyAnJyA6ICdhY2RuLWFycm93LXVwJ31gfSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Bnb2xkLXN1Yi1hY3JkLWNvbnRlbnQgJHt0aGlzLnN0YXRlLnRhYnNWYWx1ZS5pbmRleE9mKDcpID4gLTEgPyAnZC1ub25lJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaWZmZXJlbnQgZ29sZCBwbGFucyBhcmUgdmFsaWQgZm9yIGRpZmZlcmVudCBudW1iZXIgb2YgdXNlcnMuICBZb3UgY2FuIGF2YWlsIHRoZSBiZW5lZml0cyBmb3Igb25seSB0aGUgdXNlcnMgYWRkZWQgYWdhaW5zdCB0aGUgcHVyY2hhc2VkIHBsYW4uIFdoaWxlIGJvb2tpbmcgdGhlIG5ldyBhcHBvaW50bWVudCwgdGhlIHBhdGllbnQgcHJvZmlsZSBzaG91bGQgYmUgb25lIG9mIHRoZSBwcm9maWxlcyBhZGRlZCBhZ2FpbnN0IHRoZSBHb2xkIHBsYW4gdG8gYXZhaWwgdGhlIGJlbmVmaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1zdWItYWNyZFwiIG9uQ2xpY2s9e3RoaXMuQnV0dG9uSGFuZGxlci5iaW5kKHRoaXMsIDgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjZG4tdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZ3LTUwMFwiPldoYXQgaXMgdGhlIG1heGltdW0gbnVtYmVyIG9mIGFwcG9pbnRtZW50cyB0aGF0IEkgY2FuIG1ha2Ugd2l0aCB0aGUgZ29sZCBtZW1iZXJzaGlwPyA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17YGFjZG4tYXJyb3cgICR7dGhpcy5zdGF0ZS50YWJzVmFsdWUuaW5kZXhPZig4KSA+IC0xID8gJycgOiAnYWNkbi1hcnJvdy11cCd9YH0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgZ29sZC1zdWItYWNyZC1jb250ZW50ICR7dGhpcy5zdGF0ZS50YWJzVmFsdWUuaW5kZXhPZig4KSA+IC0xID8gJ2Qtbm9uZScgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT25jZSB5b3UgYmVjb21lIGEgZ29sZCBtZW1iZXIsIHlvdSB3aWxsIGJlIGFibGUgdG8gYXZhaWwgZGlzY291bnRzIG9uIGFsbCBsYWJzIGFuZCBob3NwaXRhbHMgd2hpY2ggYXJlIHBhcnQgb2YgdGhlIEdvbGQgbmV0d29yay4gVGhlcmUgaXMgbm8gdXBwZXIgY2FwIG9uIHRoZSBudW1iZXIgb2YgZGlzY291bnRlZCBhcHBvaW50bWVudHMgaWYgYWxsIGFyZSBtYWRlIHdpdGhpbiB0aGUgR29sZCBuZXR3b3JrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvbGQtc3ViLWFjcmRcIiBvbkNsaWNrPXt0aGlzLkJ1dHRvbkhhbmRsZXIuYmluZCh0aGlzLCA5KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2RuLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmdy01MDBcIj5DYW4gSSB1c2UgZ29sZCBtZW1iZXJzaGlwIHRvIFBheSBhdCBDbGluaWMgPyA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17YGFjZG4tYXJyb3cgICR7dGhpcy5zdGF0ZS50YWJzVmFsdWUuaW5kZXhPZig5KSA+IC0xID8gJycgOiAnYWNkbi1hcnJvdy11cCd9YH0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgZ29sZC1zdWItYWNyZC1jb250ZW50ICR7dGhpcy5zdGF0ZS50YWJzVmFsdWUuaW5kZXhPZig5KSA+IC0xID8gJ2Qtbm9uZScgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm8sIHlvdSBjYW4gZW5qb3kgdGhlIHNwZWNpYWwgZGlzY291bnRzIHRocm91Z2ggZ29sZCBtZW1iZXJzaGlwIG9ubHkgb24gcHJlcGFpZCBhcHBvaW50bWVudHMgYm9va2VkIHVuZGVyIERvY3ByaW1l4oCZcyBnb2xkIG5ldHdvcmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1zdWItYWNyZFwiIG9uQ2xpY2s9e3RoaXMuQnV0dG9uSGFuZGxlci5iaW5kKHRoaXMsIDEwKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2RuLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmdy01MDBcIj5DYW4gSSB1c2UgRG9jcHJpbWXigJlzIHdhbGxldCBwcm9tb3Rpb25hbCBiYWxhbmNlIHRvIGJ1eSBnb2xkIHBsYW4/IDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtgYWNkbi1hcnJvdyAgJHt0aGlzLnN0YXRlLnRhYnNWYWx1ZS5pbmRleE9mKDEwKSA+IC0xID8gJycgOiAnYWNkbi1hcnJvdy11cCd9YH0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgZ29sZC1zdWItYWNyZC1jb250ZW50ICR7dGhpcy5zdGF0ZS50YWJzVmFsdWUuaW5kZXhPZigxMCkgPiAtMSA/ICdkLW5vbmUnIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vLCB5b3UgY2Fu4oCZdCBwYXkgZm9yIG1lbWJlcnNoaXAgZmVlIHVzaW5nIERvY3ByaW1l4oCZcyB3YWxsZXQgcHJvbW90aW9uYWwgYmFsYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qXG48ZGl2IGNsYXNzTmFtZT1cImdvbGQtc3ViLWFjcmRcIiBvbkNsaWNrPXt0aGlzLkJ1dHRvbkhhbmRsZXIuYmluZCh0aGlzLCAxMSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNkbi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZnctNTAwXCI+SG93IGNhbiBJIGNhbmNlbCBteSBnb2xkIG1lbWJlcnNoaXAgYW5kIGdldCByZWZ1bmQgZm9yIHRoZSBzYW1lPyA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17YGFjZG4tYXJyb3cgICR7dGhpcy5zdGF0ZS50YWJzVmFsdWUuaW5kZXhPZigxMSkgPiAtMSA/ICcnIDogJ2FjZG4tYXJyb3ctdXAnfWB9IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YGdvbGQtc3ViLWFjcmQtY29udGVudCAke3RoaXMuc3RhdGUudGFic1ZhbHVlLmluZGV4T2YoMTEpID4gLTEgPyAnZC1ub25lJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZSBhc3N1cmUgeW91IHRoZSBiZXN0IGRpc2NvdW50cyBhbmQgc2VydmljZSBxdWFsaXR5IG9uIERvY3ByaW1lIGZvciBmdWxsIHllYXIuIEhvd2V2ZXIsIGlmIHlvdSBhcmUgc3RpbGwgbm90IHNhdGlzZmllZCBmb3IgYW55IHJlYXNvbiwgeW91IGNhbiBwbGFjZSBhIDEwMCUgcmVmdW5kIHJlcXVlc3QgYnkgc2VuZGluZyBhbiBlbWFpbCBhdCBjdXN0b21lcmNhcmVAZG9jcHJpbWUuY29tIHdpdGggeW91ciBjb250YWN0IG5vLiBUaGUgcmVmdW5kIHdpbGwgYmUgY3JlZGl0ZWQgaW4gdGhlIG9yaWdpbmFsIHBheW1lbnQgbW9kZSB3aXRoaW4gNS0gNyB3b3JraW5nIGRheXMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1zdWItYWNyZFwiIG9uQ2xpY2s9e3RoaXMuQnV0dG9uSGFuZGxlci5iaW5kKHRoaXMsIDEyKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2RuLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmdy01MDBcIj5XaWxsIEkgZ2V0IGFueSB0YXggYmVuZWZpdD8gPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2BhY2RuLWFycm93ICAke3RoaXMuc3RhdGUudGFic1ZhbHVlLmluZGV4T2YoMTIpID4gLTEgPyAnJyA6ICdhY2RuLWFycm93LXVwJ31gfSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Bnb2xkLXN1Yi1hY3JkLWNvbnRlbnQgJHt0aGlzLnN0YXRlLnRhYnNWYWx1ZS5pbmRleE9mKDEyKSA+IC0xID8gJ2Qtbm9uZScgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm8sIHRoZXJlIGlzIG5vIHRheCBiZW5lZml0IG9uIEdvbGQgcGxhbnMgcHVyY2hhc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1zdWItYWNyZFwiIG9uQ2xpY2s9e3RoaXMuQnV0dG9uSGFuZGxlci5iaW5kKHRoaXMsIDEzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2RuLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmdy01MDBcIj5JcyBHb2xkIGFuIGluc3VyYW5jZSBwbGFuPyA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17YGFjZG4tYXJyb3cgICR7dGhpcy5zdGF0ZS50YWJzVmFsdWUuaW5kZXhPZigxMykgPiAtMSA/ICcnIDogJ2FjZG4tYXJyb3ctdXAnfWB9IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YGdvbGQtc3ViLWFjcmQtY29udGVudCAke3RoaXMuc3RhdGUudGFic1ZhbHVlLmluZGV4T2YoMTMpID4gLTEgPyAnZC1ub25lJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBObywgR29sZCBwbGFucyBhcmUgbm90IGluc3VyYW5jZSBwcm9kdWN0cy4gSXQgaXMgbWVtYmVyc2hpcCB0byBnZXQgZGlzY291bnRzIG9uIGRvY3RvciBhbmQgbGFiIGFwcG9pbnRtZW50cyB0aGF0IHdpbGwgaGVscCB5b3UgcmVkdWNlIHlvdXIgaGVhbHRoY2FyZSBleHBlbnNlcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiZ29sZC1zdWItYWNyZFwiIG9uQ2xpY2s9e3RoaXMuQnV0dG9uSGFuZGxlci5iaW5kKHRoaXMsIDE0KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2RuLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmdy01MDBcIj4gSG93IHRvIHVzZSBvbmxpbmUgY29uc3VsdGF0aW9uPyA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17YGFjZG4tYXJyb3cgICR7dGhpcy5zdGF0ZS50YWJzVmFsdWUuaW5kZXhPZigxNCkgPiAtMSA/ICcnIDogJ2FjZG4tYXJyb3ctdXAnfWB9IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YGdvbGQtc3ViLWFjcmQtY29udGVudCAke3RoaXMuc3RhdGUudGFic1ZhbHVlLmluZGV4T2YoMTQpID4gLTEgPyAnZC1ub25lJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydCBieSBjbGlja2luZyBvbiAnT25saW5lIENvbnN1bHRhdGlvbicgYXQgdGhlIGJvdHRvbSBvZiB0aGUgd2Vic2l0ZS9hcHAgYW5kIHdoZW4gcHJvbXB0ZWQgcHJvdmlkZSB0aGUgcHJpbWFyeSBtb2JpbGUgbnVtYmVyIHJlZ2lzdGVyZWQgd2l0aCBEb2NwcmltZSBHb2xkIGFuZCB5b3VyIGNvbnN1bHRhdGlvbiB3aWxsIGJlIGFic29sdXRlbHkgZnJlZS4gSG93ZXZlciwgaXQgaXMgbm90IGZvciBlbWVyZ2VuY2llcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1zdWItYWNyZFwiIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJ25vbmUnIH19IG9uQ2xpY2s9e3RoaXMuQnV0dG9uSGFuZGxlci5iaW5kKHRoaXMsIDE1KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2RuLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmdy01MDAgbS0wXCI+IEhvdyB3aWxsIG9ubGluZSBkb2N0b3Igc29sdmUgbXkgbWVkaWNhbCBpc3N1ZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2BhY2RuLWFycm93ICAke3RoaXMuc3RhdGUudGFic1ZhbHVlLmluZGV4T2YoMTUpID4gLTEgPyAnJyA6ICdhY2RuLWFycm93LXVwJ31gfSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Bnb2xkLXN1Yi1hY3JkLWNvbnRlbnQgJHt0aGlzLnN0YXRlLnRhYnNWYWx1ZS5pbmRleE9mKDE1KSA+IC0xID8gJ2Qtbm9uZScgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgaGF2ZSBidWlsdCBmZWF0dXJlcyBsaWtlIGltYWdlIHNoYXJpbmcgYW5kIGF1ZGlvIGNhbGxpbmcgYWxvbmcgd2l0aCBjaGF0IHRvIGVuc3VyZSBkb2N0b3JzIGNhbiBnZXQgYWxsIHRoZSByZXF1aXJlZCBpbmZvcm1hdGlvbiBmb3IgZGlhZ25vc2lzLiBZb3UganVzdCBuZWVkIHRvIGFuc3dlciBhIGZldyBxdWVzdGlvbnMgYW5kIG91ciBkb2N0b3JzIHdpbGwgZ2l2ZSB5b3UgcXVhbGlmaWVkIG1lZGljYWwgYWR2aWNlIG9uIHlvdXIgaGVhbHRoIGlzc3Vlcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09PT09aW5uZXIgYWNjb3JkaW9uIGNvbnRhaW5lcj09PT09PT09PT09PT09PT09PT0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09IEZyZXF1ZW50bHkgYXNrZWQgcXVlc3Rpb24gd2lkZ2V0ID09PT09PT09PT09PT09PT09PSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdvbGQtdHJtcy1jbmQgZ29sZC10bmNcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3Rlcm1zJyl9PlRlcm1zIG9mIFVzZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09PT0gR29sZCBWaWV3IE1haW4gY29udGFpbmVyID09PT09PT09PT09PT09PT09PSAqL31cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDogPGRpdj48L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpcEdvbGRWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vY29tbW9ucy9MZWZ0QmFyJ1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vY29uZmlnJ1xuaW1wb3J0IEhlbG1ldFRhZ3MgZnJvbSAnLi4vY29tbW9ucy9IZWxtZXRUYWdzJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi9oZWxwZXJzL2d0bSdcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSc7XG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBWaXBMb2dpblBvcHVwIGZyb20gJy4vdmlwQ2x1YlBvcHVwLmpzJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcbmltcG9ydCBEaXNjbGFpbWVyIGZyb20gJy4uL2NvbW1vbnMvSG9tZS9zdGF0aWNEaXNjbGFpbWVyLmpzJ1xuaW1wb3J0IENhcm91c2VsVmlldyBmcm9tICcuLi9vcGQvc2VhcmNoUmVzdWx0cy9jYXJvdXNlbFZpZXcuanMnXG5pbXBvcnQgVmlwUmV2aWV3U2VjdGlvbiBmcm9tICcuL3ZpcFJldmlld1NlY3Rpb24uanMnXG5cbmNsYXNzIFZpcFBsYW5WaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIC8vIHNlbGVjdGVkX3BsYW5fZGF0YTogdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuID8gdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuIDogJycsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBsZXQgaXNfZ29sZF9zZWxlY3RlZCA9IGZhbHNlXG4gICAgICAgIGxldCBzZWxlY3RlZF9nb2xkX3BsYW5fcHJpY2UgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuX2RhdGEgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuX2RhdGEpLmxlbmd0aCA+IDAgJiYgdGhpcy5wcm9wcy52aXBDbHViTGlzdC5nb2xkX3BsYW5zICYmIHRoaXMucHJvcHMudmlwQ2x1Ykxpc3QuZ29sZF9wbGFucy5sZW5ndGg/XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy52aXBDbHViTGlzdC5nb2xkX3BsYW5zKS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlXSkge1xuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZS5pc19zZWxlY3RlZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZF9nb2xkX3BsYW5fcHJpY2UgPSB2YWx1ZS5kZWFsX3ByaWNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYocGFyc2VJbnQodmFsdWUuaWQpID09IHBhcnNlSW50KHNlbGYucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhLmlkKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc19nb2xkX3NlbGVjdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICB0aGlzLnByb3BzLnZpcENsdWJMaXN0ICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMudmlwQ2x1Ykxpc3QpLmxlbmd0aCA+IDAgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuX2RhdGEgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuX2RhdGEpLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgY29udGFpbmVyIGNvbnRhaW5lci10b3AtbWFyZ2luICAke3RoaXMucHJvcHMudG9nZ2xlVGFiVHlwZSA/ICcnIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGVmdEJhciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1uZXctY29udGFpbmVyIGZvbnQtYW5hbHl6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLXRhYnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhKS5sZW5ndGggPiAwICYmIHRoaXMucHJvcHMuaXNfdmlwX2dvbGQgJiYgdGhpcy5wcm9wcy52aXBDbHViTGlzdCAmJiB0aGlzLnByb3BzLnZpcENsdWJMaXN0LmdvbGRfcGxhbnMgJiYgdGhpcy5wcm9wcy52aXBDbHViTGlzdC5nb2xkX3BsYW5zLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9e3RoaXMucHJvcHMuc2VsZWN0R29sZFBsYW4uYmluZCh0aGlzLHRydWUpfSBjbGFzc05hbWU9e2B2cC1zYi10eHQgJHtpc19nb2xkX3NlbGVjdGVkID8gJ3ZwLWFjdCcgOiAnJ31gfT5Hb2xkIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ge2Ao4oK5ICR7c2VsZWN0ZWRfZ29sZF9wbGFuX3ByaWNlfSlgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy52aXBDbHViTGlzdCAmJiB0aGlzLnByb3BzLnZpcENsdWJMaXN0LnBsYW5zICYmIHRoaXMucHJvcHMudmlwQ2x1Ykxpc3QucGxhbnMubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy52aXBDbHViTGlzdC5wbGFucykubWFwKGZ1bmN0aW9uIChba2V5LCB2YWx1ZV0pIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHAgb25DbGljaz17c2VsZi5wcm9wcy5zZWxlY3RQbGFuLmJpbmQoc2VsZiwgdmFsdWUpfSBrZXk9e2tleX0gY2xhc3NOYW1lPXtgdnAtc2ItdHh0ICR7dmFsdWUuaWQgPT0gc2VsZi5wcm9wcy5zZWxlY3RlZF9wbGFuX2lkID8gJ3ZwLWFjdCcgOiAnJ31gfT57dmFsdWUucGxhbl9uYW1lfSA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgKOKCuSAke3ZhbHVlLmRlYWxfcHJpY2V9KWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKnZhbHVlLmlzX3NlbGVjdGVkID8gPGIgY2xhc3NOYW1lPVwidmlwLXBvcGx1ZXJcIj5QT1BVTEFSPC9iPiA6ICcnKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1jdnBtZW0tbWFpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtY3ZwbWVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidmlwLXZsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwY2FsLnN2Zyd9IC8+PHNwYW4+VmFsaWRpdHk6IDxiPjM2NSBEYXlzPC9iPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidmlwLXZsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwdXNlci5zdmcnfSAvPjxzcGFuPkNvdmVycyB1cHRvOiA8Yj40IE1lbWJlcnM8L2I+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcG0tbHN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibHN0LXZwcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuX2RhdGEud29ydGgpLmxlbmd0aCA+IDAgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuX2RhdGEud29ydGguZG9jdG9yX2NvbnN1bHRfYW1vdW50ICE9ICcnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Jbi1DbGluaWMgQ29uc3VsdHM6IOKCuXt0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW5fZGF0YS53b3J0aC5kb2N0b3JfY29uc3VsdF9hbW91bnR9ICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhLndvcnRoKS5sZW5ndGggPiAwICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhLndvcnRoLmhlYWx0aF9jaGVja3Vwc19hbW91bnQgIT0gJycgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkhlYWx0aCBDaGVja3Vwczog4oK5e3RoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhLndvcnRoLmhlYWx0aF9jaGVja3Vwc19hbW91bnR9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxzdC12cHBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhLndvcnRoKS5sZW5ndGggPiAwICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhLndvcnRoLm9ubGluZV9jaGF0X2Ftb3VudCAhPSAnJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+VW5saW1pdGVkIE9ubGluZSBDb25zdWx0OiDigrl7dGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuX2RhdGEud29ydGgub25saW5lX2NoYXRfYW1vdW50fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuX2RhdGEud29ydGgpLmxlbmd0aCA+IDAgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuX2RhdGEud29ydGgudGF4X3JlYmF0ZSAhPSAnJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+VGF4IEJlbmVmaXQgKDgwRCk6IOKCuXt0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW5fZGF0YS53b3J0aC50YXhfcmViYXRlfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuX2RhdGEgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuX2RhdGEud29ydGggJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuX2RhdGEud29ydGgpLmxlbmd0aCA+IDAgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuX2RhdGEud29ydGguZG9jdG9yX2NvbnN1bHRfYW1vdW50ICE9ICcnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLW9mZmVyLWNhcmRzIG1iLTI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtZnJlZS1kb2MgdmlwLWRvY2JnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ2aXAtY2FyZC1oZWFkaW5nXCI+SW4tQ2xpbmljIERvY3RvciBDb25zdWx0YXRpb25zPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidmlwLWNhcmQtbGlzdFwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXAtY2hrLnN2Zyd9IC8+MzAsMDAwICsgYXNzb2NpYXRlZCBkb2N0b3JzIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidmlwLWNhcmQtbGlzdFwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXAtY2hrLnN2Zyd9IC8+QWxsIHNwZWNpYWxpemF0aW9ucyBpbmNsdWRlZCA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmlwLWNhcmQtdGFnXCI+V29ydGgg4oK5IHt0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW5fZGF0YS53b3J0aC5kb2N0b3JfY29uc3VsdF9hbW91bnR9ICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvcEhvc3BpdGFscyAmJiB0aGlzLnByb3BzLnRvcEhvc3BpdGFscy50b3BfaG9zcGl0YWxzICYmIHRoaXMucHJvcHMudG9wSG9zcGl0YWxzLnRvcF9ob3NwaXRhbHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBha2ctc2xpZGVyLWNvbnRhaW5lciBtYi0yNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbFZpZXcgdG9wSGVhZGluZz0nS2V5IEhvc3BpdGFsIFBhcnRuZXJzJyBkYXRhTGlzdD17dGhpcy5wcm9wcy50b3BIb3NwaXRhbHMudG9wX2hvc3BpdGFsc30gZGF0YVR5cGU9J3RvcF92aXBfSG9zcGl0YWxzJyBjYXJvdXNlbENhcmRDbGlja2VkPXsoZGF0YSx0b3ApID0+IHRoaXMucHJvcHMuaG9zcGl0YWxDYXJkQ2xpY2tlZChkYXRhLHRvcCl9IHRvcEhvc3BpdGFsPXt0cnVlfSBleHRyYUhlYWRpbmc9J1ZpZXcgRG9jcHJpbWUgTmV0d29yaycgbmF2aWdhdGVUbz0geygpPT50aGlzLnByb3BzLnZpZXdEb2NwcmltZU5ldHdvcmtDbGlja2VkKGlzX2dvbGRfc2VsZWN0ZWQpfSB2aWV3QWxsPXt0cnVlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubmVhcmJ5SG9zcGl0YWxzICYmIHRoaXMucHJvcHMubmVhcmJ5SG9zcGl0YWxzLmhvc3BpdGFscyAmJiB0aGlzLnByb3BzLm5lYXJieUhvc3BpdGFscy5ob3NwaXRhbHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBha2ctc2xpZGVyLWNvbnRhaW5lciBtYi0yNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbFZpZXcgdG9wSGVhZGluZz0nSG9zcGl0YWxzIE5lYXIgWW91JyBkYXRhTGlzdD17dGhpcy5wcm9wcy5uZWFyYnlIb3NwaXRhbHMuaG9zcGl0YWxzfSBkYXRhVHlwZT0nbmVhcmJ5X3ZpcF9Ib3NwaXRhbHMnIGNhcm91c2VsQ2FyZENsaWNrZWQ9eyh0b3AsIGRhdGEpID0+IHRoaXMucHJvcHMuaG9zcGl0YWxDYXJkQ2xpY2tlZCh0b3AsIGRhdGEpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhLndvcnRoICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhLndvcnRoKS5sZW5ndGggPiAwICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhLndvcnRoLm9ubGluZV9jaGF0X2Ftb3VudCAhPSAnJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1vZmZlci1jYXJkcyBtYi0yNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLWZyZWUtZG9jIHZpcC1tZW0tYmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInZpcC1jYXJkLWhlYWRpbmdcIj5Eb2NwcmltZSBDYXJlIE1lbWJlcnNoaXAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZpcC1jYXJkLWxpc3RcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwLWNoay5zdmcnfSAvPlVubGltaXRlZCBvbmxpbmUgY29uc3VsdCA8c3Bhbj4gKEdlbmVyYWwgUGh5c2ljaWFuKTwvc3Bhbj4gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ2aXAtY2FyZC1saXN0XCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1jaGsuc3ZnJ30gLz5Qcmlvcml0eSBRdWV1ZSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmlwLWNhcmQtdGFnXCI+V29ydGgg4oK5e3RoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhLndvcnRoLm9ubGluZV9jaGF0X2Ftb3VudH0gIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhLndvcnRoICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhLndvcnRoKS5sZW5ndGggPiAwICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhLndvcnRoLmhlYWx0aF9jaGVja3Vwc19hbW91bnQgIT0gJycgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtb2ZmZXItY2FyZHMgbWItMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1mcmVlLWRvYyB2aXAtY2hlay1iZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidmlwLWNhcmQtaGVhZGluZ1wiPkZ1bGwgQm9keSBQcmV2ZW50aXZlIEhlYWx0aCBDaGVja3VwIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhLndvcnRoICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhLndvcnRoKS5sZW5ndGggPiAwICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhLndvcnRoLm1lbWJlcnNfY292ZXJlZF9pbl9wYWNrYWdlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ2aXAtY2FyZC1saXN0XCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1jaGsuc3ZnJ30gLz57dGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuX2RhdGEud29ydGgubWVtYmVyc19jb3ZlcmVkX2luX3BhY2thZ2V9IHt0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW5fZGF0YS53b3J0aC5tZW1iZXJzX2NvdmVyZWRfaW5fcGFja2FnZSA9PSAxID8gJ21lbWJlcicgOiAnbWVtYmVycyd9IGNvdmVyZWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhLndvcnRoICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhLndvcnRoKS5sZW5ndGggPiAwICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhLndvcnRoLnRvdGFsX3Rlc3RfY292ZXJlZF9pbl9wYWNrYWdlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ2aXAtY2FyZC1saXN0XCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1jaGsuc3ZnJ30gLz57dGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuX2RhdGEud29ydGgudG90YWxfdGVzdF9jb3ZlcmVkX2luX3BhY2thZ2V9IHRlc3RzIGluY2x1ZGVkIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2aXAtY2FyZC10YWdcIj5Xb3J0aCDigrl7dGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuX2RhdGEud29ydGguaGVhbHRoX2NoZWNrdXBzX2Ftb3VudH0gIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1pbnMtYWN0LWNvbnQgbWItMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImlucy1kY250LWhkbmdcIj48aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3ZpcC1pbnMtYWN0LnBuZ1wifSAvPkluc3RhbnQgQWN0aXZhdGlvbjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLWRjLWxzdG5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ2aXAtY2FyZC1saXN0XCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1jaGsuc3ZnJ30gLz5QcmUtZXhpc3RpbmcgZGlzZWFzZXMgY292ZXJlZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZpcC1jYXJkLWxpc3RcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwLWNoay5zdmcnfSAvPk5vIG1lZGljYWwgdGVzdHMgcmVxdWlyZWQgZm9yIHBsYW4gYWN0aXZhdGlvbiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtb2ZmZXItY2FyZHMgbWItMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtZnJlZS1kb2MgdmlwLWJrZGlzY291bnQtYmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmtkaXNjb3VudC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInZpcC1jYXJkLWhlYWRpbmdcIj5GbGF0IDI1JSBkaXNjb3VudCBvbiBsYWIgYm9va2luZ3MgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5NYXhpbXVtIGRpc2NvdW50IG9mIOKCuTEwMDAgcGVyIGJvb2tpbmc8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtb2ZmZXItY2FyZHMgbWItMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtZnJlZS1kb2MgdmlwLW1lZGxpZmUtYmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ2aXAtY2FyZC1oZWFkaW5nXCI+RmxhdCAyMyUgRGlzY291bnRzIG9uIE1lZGljaW5lcyA8c3BhbiBjbGFzc05hbWU9XCJtZWRsaWZlLWNvbFwiPjxzcGFuIGNsYXNzTmFtZT1cInBvd2VyZWQtY29sIHRleHQtbGVmdFwiPlBvd2VyZWQgQnk8L3NwYW4+PGltZyBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvZGlhZ25vc3RpYy9jb21tb25fcGFja2FnZV9pY29ucy9tZWRsaWZlX2hEUXhpbEoucG5nXCIgLz48L3NwYW4+IDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ2aXAtY2FyZC1saXN0XCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1jaGsuc3ZnJ30gLz5FeGNsdXNpdmUgZm9yIEdvbGQgbWVtYmVyczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZpcC1jYXJkLWxpc3RcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwLWNoay5zdmcnfSAvPk5vIG1pbmltdW0gb3JkZXIgdmFsdWVzIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZpcC1jYXJkLWxpc3RcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwLWNoay5zdmcnfSAvPlVubGltaXRlZCB1c2FnZSB3aXRoIG5vIG1heGltdW0gY2FwIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGVmdFwiPjxhIGNsYXNzTmFtZT1cInRjLWFwcGx5XCIgb25DbGljaz17dGhpcy5wcm9wcy50b2dnbGUuYmluZCh0aGlzLHRydWUpfT5UJmFtcDtDIEFwcGx5PC9hPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW5fZGF0YSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW5fZGF0YS53b3J0aCAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW5fZGF0YS53b3J0aCkubGVuZ3RoID4gMCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW5fZGF0YS53b3J0aC50YXhfcmViYXRlICE9ICcnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLW9mZmVyLWNhcmRzIG1iLTI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtZnJlZS1kb2MgdmlwLWJlbmZ0LWJnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ2aXAtY2FyZC1oZWFkaW5nXCI+VGF4IEJlbmVmaXRzIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZpcC1jYXJkLWxpc3RcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwLWNoay5zdmcnfSAvPkNvdmVyIHVuZGVyIHNlY3Rpb24gODBEPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ2aXAtY2FyZC1saXN0XCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1jaGsuc3ZnJ30gLz5UYXggcHJvb2YgY2VydGlmaWNhdGUgd2lsbCBiZSBwcm92aWRlZCA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmlwLWNhcmQtdGFnXCI+V29ydGgg4oK5e3RoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhLndvcnRoLnRheF9yZWJhdGV9ICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhLnlvdV9nZXQgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuX2RhdGEueW91X2dldCkubGVuZ3RoID4gMCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW5fZGF0YS55b3VfcGF5ICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhLnlvdV9wYXkpLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtcHJpY2Utc3VtbWVyeSBtYi0yNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLXByYy1zdW1tcnktaGRuZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QcmljZSBTdW1tYXJ5PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLXByYy1jYXJkcy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLXByYy1jYXJkc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInZpcC1wcmMtaGRuZ1wiPllvdSBHZXQ8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInZpcC1wcmMtbHN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkluLUNsaW5pYyBDb25zdWx0OiA8c3Bhbj7igrl7dGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuX2RhdGEueW91X2dldC5kb2N0b3JfY29uc3VsdF9hbW91bnR9PC9zcGFuPjwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5PbmxpbmUgQ29uc3VsdDogPHNwYW4+4oK5e3RoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhLnlvdV9nZXQub25saW5lX2NoYXRfYW1vdW50fTwvc3Bhbj48L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+SGVhbHRoIENoZWNrdXA6IDxzcGFuPuKCuXt0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW5fZGF0YS55b3VfZ2V0LmhlYWx0aF9jaGVja3Vwc19hbW91bnR9PC9zcGFuPjwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0dGwtYmVuZnRcIj48cD5CZW5lZml0cyBXb3J0aDogPHNwYW4+4oK5e3RoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhLnlvdV9nZXQuZWZmZWN0aXZlX3ByaWNlfTwvc3Bhbj48L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1wcmMtY2FyZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ2aXAtcHJjLWhkbmdcIj5Zb3UgUGF5PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ2aXAtcHJjLWxzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5QbGFuIFByaWNlOiA8c3Bhbj7igrl7dGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuX2RhdGEueW91X3BheS5tcnB9PC9zcGFuPjwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5PZmZlciBQcmljZTogPHNwYW4+4oK5e3RoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhLnlvdV9wYXkuZGVhbF9wcmljZX08L3NwYW4+PC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRheCBSZWJhdGUgKDgwRCk6IDxzcGFuPuKCuXt0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW5fZGF0YS55b3VfcGF5LnRheF9yZWJhdGV9PC9zcGFuPjwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJlZmZlY3RpdmUtcHJjXCI+PHA+RWZmZWN0aXZlIFByaWNlOiA8c3Bhbj7igrl7dGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuX2RhdGEueW91X3BheS5lZmZlY3RpdmVfcHJpY2V9PC9zcGFuPjwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ2aXAtbm8tY29zdFwiPjxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY29pbmljby5wbmdcIn0gLz4gTm8gQ29zdCBFTUkgU3RhcnRzIEAgPHNwYW4+ICDigrl7TWF0aC5yb3VuZChwYXJzZUludCh0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW5fZGF0YS5kZWFsX3ByaWNlKSAvIDEyKX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaXBSZXZpZXdTZWN0aW9uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW5fZGF0YSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW5fZGF0YS5jb250ZW50ICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhLmNvbnRlbnQpLmxlbmd0aCA+IDAgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuX2RhdGEuY29udGVudC5zYWxpZW50X2ZlYXR1cmVzICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhLmNvbnRlbnQuc2FsaWVudF9mZWF0dXJlcy5sZW5ndGggPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLW5vdGUtbHN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QSBmZXcgdGhpbmdzIHRvIG5vdGUuLi4gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuX2RhdGEuY29udGVudC5zYWxpZW50X2ZlYXR1cmVzKS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtrZXl9Pnt2YWx1ZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ2aXAtZm9vdC1idG5cIiBvbkNsaWNrPXt0aGlzLnByb3BzLnByb2NlZWQuYmluZCh0aGlzKX0+PHA+QnV5IE5vdyBAIOKCuXt0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW5fZGF0YS5kZWFsX3ByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ2aXBidG4tc3ViLXR4dFwiPkluY2x1c2l2ZSBvZiBHU1Q8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDogPGRpdj48L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpcFBsYW5WaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBha2ctc2xpZGVyLWNvbnRhaW5lciBtYi0yNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ1NsaWRlckhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5PdXIgSGFwcHkgR29sZCBDdXN0b21lcnM8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2dTbGlkZXJDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnQ2FyZHNMaXN0IGQtZmxleCBzdWItd2QtY2FyZHMgdG9wX3BrZ0NhdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnY3VzdENhcmRzIHZpcC1jbW1udC1jYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtc2xkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArJy9pbWcvbndkcHNtaWxlLnBuZyd9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PktyaXRpa2EgUGFuZGV5PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IENhbiB5b3UgaW1hZ2luZSBoYXZpbmcgYSBkaXNjb3VudCBvbiBkb2N0b3IncyBmZWUuIFllYWgsIEkgd2FzIHN1cnByaXNlZCB0b28uIEJ1dCB3aXRoIERvY3ByaW1lIEdvbGQgbWVtYmVyc2hpcCwgaSBnb3QgaGVhdnkgZGlzY291bnRzIG9uIGRvY3RvciBmZWVzLCBsYWIgdGVzdHMgYW5kIGZ1bGwtYm9keSBoZWFsdGggcGFja2FnZXMuIERlZmluaXRlbHkgc2F2ZWQgc29tZSBnb29kIG1vbmV5IGhlcmUuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnY3VzdENhcmRzIHZpcC1jbW1udC1jYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtc2xkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArJy9pbWcvbndkcHNtaWxlLnBuZyd9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlB1cm5pbWEgU2luZ2xhPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SSBoYXZlIGJvb2tlZCAzIGZ1bGwgYm9keSBoZWFsdGggcGFja2FnZXMgZm9yIG15IGZhbWlseS4gQWZ0ZXIgcmVjZWl2aW5nIHRoZSByZXBvcnQsIEkgZ290IGEgY2FsbCBmcm9tIGEgZG9jdG9yIHdobyBleHBsYWluZWQgZWFjaCBhbmQgZXZlcnkgZWxlbWVudCBvZiB0aGUgcmVwb3J0IHRvIG1lIGFuZCBteSBmYW1pbHkuIEhlIGV2ZW4gcHJlc2NyaWJlZCBzb21lIG1lZGljaW5lcyB0byBteSBtb3RoZXIgYW5kIGRpcmVjdGVkIHVzIHRvIHRha2Ugc29tZSBtdWx0aXZpdGFtaW5zLiBJIHRydWx5IGxvdmVkIHRoZSBzZXJ2aWNlLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ2N1c3RDYXJkcyB2aXAtY21tbnQtY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLXNsZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKycvaW1nL253ZHBzbWlsZS5wbmcnfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Ba2FzaCBTYWluaTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkkgZGlkbuKAmXQgYmVsaWV2ZSBpbiB0aGUgR29sZCBtZW1iZXJzaGlwIHByb2R1Y3QgYXQgZmlyc3QuIEkgd2FzIGhhcHB5IHdpdGggZGlzY291bnRzIGJ1dCB3YXMgc3VzcGVjdGluZyB0aGUgbmV0d29yayBvZiBob3NwaXRhbHMgJiBsYWJzLiBJIGFtIGhhcHB5IHRoYXQgSSB0b29rIHRoaXMgY2hhbmNlIGFuZCBib29rZWQgdGhlIG1lbWJlcnNoaXAuIERvY3ByaW1lIGhhcyBwYXJ0bmVyZWQgd2l0aCBtb3N0IG9mIHRoZSB0b3AgaG9zcGl0YWxzIGFuZCBsYWJzLiBJIHJlY2VudGx5IGdvdCBhIGRpc2NvdW50IG9uIE1lZGFudGHigJlzIERvY3RvciBmZWUuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnY3VzdENhcmRzIHZpcC1jbW1udC1jYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtc2xkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArJy9pbWcvbndkcHNtaWxlLnBuZyd9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlNvbmFtIFNpbmhhPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SSBib29rZWQgcHJldmVudGl2ZSBoZWFsdGggcGFja2FnZXMgZm9yIG15IHBhcmVudHMgbGl2aW5nIGluIERlbGhpLiBJIGFtIHNvIGdsYWQgdGhhdCBJIGNhbiB0YWtlIGNhcmUgb2YgdGhlaXIgaGVhbHRoIGJ5IHNpdHRpbmcgaW4gQmFuZ2Fsb3JlLiBUaGV5IGNvbGxlY3RlZCB0aGUgYmxvb2Qgc2FtcGxlIGZyb20gbXkgcGFyZW50J3MgaG9tZSBhbmQgc2VudCB0aGUgcmVwb3J0IG9uIGVtYWlsIHdoaWNoIHdhcyByZXZpZXdlZCBieSB0aGVpciBEb2N0b3IuIEhlIHByZXNjcmliZWQgc29tZSBtZWRpY2luZXMgdG8gbXkgcGFyZW50cyBhbmQgSSBnb3QgMjMlIG9mZiBvbiBtZWRpY2luZSBvbmxpbmUgZGVsaXZlcnkuIEhhZCBhbiBvdmVyYWxsIGFtYXppbmcgZXhwZXJpZW5jZSE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgKVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHRvZ2dsZSxwcm9wcyxpc19pbnN1cmFuY2VfYXBwbGljYWJsZSB9KSA9PiB7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLW92ZXJsYXkgY2FuY2VsLW92ZXJsYXktemluZGV4XCIgb25DbGljaz17dG9nZ2xlfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgY2FuY2VsLWFwcG9pbnRtZW50LWRpdiBjYW5jZWwtcG9wdXAgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWhlYWRlciB0bmMtaGVhZGVyIHRleHQtY2VudGVyIGFjdGlvbi1zY3JlZW4taGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGNhbmNlbC1hcHBvaW50bWVudC1oZWFkXCI+VGVybXMgJmFtcDsgQ29uZGl0aW9uczwvcD5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ljb25zL2Nsb3NlLnBuZ1wifSBjbGFzc05hbWU9XCJjbG9zZS1tb2RhbFwiIG9uQ2xpY2s9e3RvZ2dsZX0gLz5cbiAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bmMtY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTI0XCI+PHN0cm9uZz5NZWRsaWZlIFRuQzwvc3Ryb25nPjwvaDM+XG4gICAgICAgICAgICAgICAgPGg1PjxzdHJvbmc+T2ZmZXIgVGVybXM6PC9zdHJvbmc+PC9oNT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwib2ZmZXItdGVybXMtY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5TYXZlIDIzJSBvbiBhbGwgcHJlc2NyaWJlZCBtZWRpY2luZXMgZXhjbHVzaXZlbHkgZm9yIDxzdHJvbmc+RG9jcHJpbWUgR29sZCAvIFZJUCB1c2Vyczwvc3Ryb25nPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5ObyBtaW5pbXVtIG9yZGVyIHZhbHVlIHJlcXVpcmVkIHRvIGF2YWlsIGRpc2NvdW50LjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5WaXNpdCA8YSBocmVmPVwiaHR0cHM6Ly93d3cubWVkbGlmZS5jb20vXCI+TWVkbGlmZS5jb208L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlVwbG9hZCBwcmVzY3JpcHRpb24gJmFtcDsgc2VsZWN0IG1lZGljaW5lcy48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+RW50ZXIgcHJvbW8gaW4gdGhlIG9yZGVyIGNoZWNrb3V0IHBhZ2UuIENvbXBsZXRlIHBheW1lbnQgdmlhIGFueSBtb2RlLiAqKlByb21vIG5vdCBhcHBsaWNhYmxlIG9uIE9UQyBwcm9kdWN0czwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8aDU+PHN0cm9uZz5UJmFtcDtDIFBoYXJtYWN5OiA8L3N0cm9uZz48L2g1PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJvZmZlci10ZXJtcy1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPk9mZmVyIFZhbGlkIG9uIFByZXNjcmlwdGlvbiBEcnVnczwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5Qcm9tbyBjb2RlIGNhbiBiZSB1c2VkIE11bHRpcGxlIHRpbWVzIGR1cmluZyB0aGUgb2ZmZXIgcGVyaW9kLiBDdXN0b21lcnMgY2FuIGF2YWlsIHRoaXMgcHJvbW8gY29kZSBieSBjYWxsaW5nIGN1c3RvbWVyIHN1cHBvcnQgKDE4NjAtMTIzNC0xMjM0KSBvciBieSBib29raW5nIG9ubGluZSB0aHJvdWdoIGxhbmRpbmcgcGFnZSBsaW5rLiA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EaXNjb3VudCBvbiBTZWxlY3RlZCBQcm9kdWN0czogRGlzY291bnRzIHByb3ZpZGVkIG9uIHRoZSB3ZWJzaXRlL21vYmlsZSBhcHBsaWNhdGlvbiBhcmUgb24gc2VsZWN0ZWQgcHJvZHVjdHMuIERpc2NvdW50cyBhcmUgbm90IGFwcGxpY2FibGUgb24gdGhlIGZvbGxvd2luZyBwcm9kdWN0cyBhbmQgb24gYW55IHByb2R1Y3RzIHNvIG1lbnRpb25lZCBlbHNld2hlcmUgb24gdGhlIHdlYnNpdGUvbW9iaWxlIGFwcGxpY2F0aW9uOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjaGlsZC1saXN0LWl0ZW0gcGQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QWxsIEJhYnkgZm9vZHMgdml6IENlcmFsYWMsIExhY3RvZ2VuLCBOYW5wcm8gZXRjLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFsbCBIZWFsdGggU3VwcGxlbWVudHMgdml6IFBlZGlhc3VyZSwgUHJvdGVpbmV4LCBQcm90ZWludWxlcywgVGhyZXB0aW4gZXRjPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+T3ZlciB0aGUgY291bnRlciAoT1RDKSBwcm9kdWN0cyDigJMgQmVuYWRyeWwgQ291Z2ggU3lydXAsIENyb2NpbiwgU2FyaWRvbiwgYWxsIERldHRvbCwgU2F2bG9uIHByb2R1Y3RzLCBtZWRpY2F0ZWQgc29hcHMgZXRjLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFsbCBDb3NtZXRpYyBwcm9kdWN0czwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+T2ZmZXIgVmFsaWRpdHkg4oCTIDEgeWVhciA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgc2VuZE9UUCwgc3VibWl0T1RQLCByZXNldEF1dGgsIGdldFVzZXJQcm9maWxlLCBnZXRWaXBMaXN0LCBzZWxlY3RWaXBDbHViUGxhbiwgZ2VuZXJhdGVWaXBDbHViTGVhZCwgY2l0aWVzRGF0YSwgdmlwUGx1c0xlYWQsIGdldE5lYXJieUhvc3BpdGFscywgdG9nZ2xlSVBEQ3JpdGVyaWEsIGdldFRvcEhvc3BpdGFscywgc2VuZEFnZW50V2hhdHN1cFBhZ2VVUkxcbiB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgVmlwQ2x1YlZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy92aXBDbHViL3ZpcENsdWJWaWV3LmpzJ1xuLy8gaW1wb3J0IFZpcEdvbGRWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdmlwQ2x1Yi92aXBHb2xkVmlldy5qcydcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0xvYWRlcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbmNsYXNzIFZpcENsdWIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgICAgaXNTYWxlc0FnZW50OnBhcnNlZC51dG1fc291cmNlLFxuICAgICAgICAgICAgaXNBZ2VudDpwYXJzZWQuaXNfYWdlbnQgP3BhcnNlZC5pc19hZ2VudDpmYWxzZSxcbiAgICAgICAgICAgIHNvdXJjZTpwYXJzZWQuc291cmNlLFxuICAgICAgICAgICAgLy8gaXNfZ29sZDpwYXJzZWQuaXNfZ29sZD9wYXJzZWQuaXNfZ29sZDpmYWxzZSxcbiAgICAgICAgICAgIGlzX2dvbGQ6dGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoJ3ZpcC1nb2xkLWRldGFpbHMnKSxcbiAgICAgICAgICAgIGlzX3ZpcF9nb2xkOnBhcnNlZC5pc192aXBfZ29sZD9wYXJzZWQuaXNfdmlwX2dvbGQ6ZmFsc2UsXG4gICAgICAgICAgICBpc19ib29raW5nX3BhZ2U6cGFyc2VkLmJvb2tpbmdfcGFnZT9wYXJzZWQuYm9va2luZ19wYWdlOm51bGwsXG4gICAgICAgICAgICBpc19mcm9tX29yZ2FuaWM6cGFyc2VkLmZyb21PcmdhbmljLFxuICAgICAgICAgICAgaXNfcGI6cGFyc2VkLnV0bV9zb3VyY2U/cGFyc2VkLnV0bV9zb3VyY2UgJiYgcGFyc2VkLnV0bV9zb3VyY2UuaW5jbHVkZXMoJ3BvbGljeWJhemFhci5jb20nKTpmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRVc2VyUHJvZmlsZSgpIC8vIHRvIGdldCBsb2dnZWRJbiB1c2VyIHByb2ZpbGVcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgICAgICBsZXQgZXh0cmFEYXRhID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbjogdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICAgICAgZnJvbV92aXA6dHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6dGhpcy5zdGF0ZS5pc19nb2xkPydpc19nb2xkJzonaXNfdmlwJ1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuZ2V0TmVhcmJ5SG9zcGl0YWxzKGV4dHJhRGF0YSk7IC8vIHRvIGdldCBuZWFyIGJ5IGhvc3BpdGFscyBjb3ZlcmVkIHVuZGVyIGdvbGQgb3IgdmlwIG9yIG5lYXIgYnkgbG9jYXRpb25cbiAgICAgICAgdGhpcy5wcm9wcy5nZXRUb3BIb3NwaXRhbHMoZXh0cmFEYXRhKTsvLyB0byBnZXQgbmVhciBieSAgdG9wIGhvc3BpdGFscyBjb3ZlcmVkIHVuZGVyIGdvbGQgb3IgdmlwIG9yIG5lYXIgYnkgbG9jYXRpb25cbiAgICAgICAgbGV0IGRhdGE9e31cbiAgICAgICAgZGF0YS5zZWxlY3RlZExvY2F0aW9uID0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uXG4gICAgICAgIGRhdGEuaXNTYWxlc0FnZW50ID0gdGhpcy5zdGF0ZS5pc1NhbGVzQWdlbnRcbiAgICAgICAgZGF0YS5pc0FnZW50ID0gdGhpcy5zdGF0ZS5pc0FnZW50XG4gICAgICAgIGRhdGEuaXNfZ29sZCA9IHRoaXMuc3RhdGUuaXNfZ29sZFxuICAgICAgICBkYXRhLmFsbCA9IHRoaXMuc3RhdGUuaXNfdmlwX2dvbGRcbiAgICAgICAgZGF0YS5mcm9tV2hlcmUgPSBudWxsXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0VmlwTGlzdChmYWxzZSxkYXRhKSAvLyB0byBnZXQgdmlwIHBsYW4gbGlzdFxuXG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICBpZih0aGlzLnByb3BzLkxPQURfVklQX0NMVUIgICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4gJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbikubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgey8qPFZpcEdvbGRWaWV3IHsuLi50aGlzLnByb3BzfSBpc1NhbGVzQWdlbnQ9e3RoaXMuc3RhdGUuaXNTYWxlc0FnZW50fSBpc0FnZW50PXt0aGlzLnN0YXRlLmlzQWdlbnR9IHNvdXJjZT17dGhpcy5zdGF0ZS5zb3VyY2V9IGlzX2dvbGQ9e3RoaXMuc3RhdGUuaXNfZ29sZH0gaXNfdmlwX2dvbGQ9e3RoaXMuc3RhdGUuaXNfdmlwX2dvbGR9Lz4qL31cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxWaXBDbHViVmlldyB7Li4udGhpcy5wcm9wc30gaXNTYWxlc0FnZW50PXt0aGlzLnN0YXRlLmlzU2FsZXNBZ2VudH0gaXNBZ2VudD17dGhpcy5zdGF0ZS5pc0FnZW50fSBzb3VyY2U9e3RoaXMuc3RhdGUuc291cmNlfSBpc19nb2xkPXt0aGlzLnN0YXRlLmlzX2dvbGR9IGlzX3ZpcF9nb2xkPXt0aGlzLnN0YXRlLmlzX3ZpcF9nb2xkfSBzZWxlY3RlZF9wbGFuPXt0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFufSBpc19ib29raW5nX3BhZ2U9e3RoaXMuc3RhdGUuaXNfYm9va2luZ19wYWdlfSBpc19mcm9tX29yZ2FuaWM9e3RoaXMuc3RhdGUuaXNfZnJvbV9vcmdhbmljfSBpc19wYj17dGhpcy5zdGF0ZS5pc19wYn0vPlxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy52aXBDbHViTGlzdC5jZXJ0aWZpY2F0ZSAmJiBTVE9SQUdFLmNoZWNrQXV0aCgpKXsgLy8gaWYgYWxyZWFkeSBnb2xkIG9yIHZpcCB1c2VyIHJlZGlyZWN0IHRvIGRhc2hib2FyZFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKCcvdmlwLWNsdWItYWN0aXZhdGVkLWRldGFpbHMnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5pc1NhbGVzQWdlbnQgJiYgdGhpcy5zdGF0ZS5pc0FnZW50KXtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciBzaG93UGFja2FnZVN0cmlwPXt0cnVlfS8+XG4gICAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3QgVVNFUiA9IHN0YXRlLlVTRVJcbiAgICBsZXQgeyB1c2VyX2NpdGllcywgY29tbW9uX3V0bV90YWdzLCB1c2VyX2xvZ2dlZEluX251bWJlciB9ID0gc3RhdGUuVVNFUlxuICAgIGxldCB7IExPQURfVklQX0NMVUIsIHZpcENsdWJMaXN0LCBzZWxlY3RlZF92aXBfcGxhbiwgb2RwR29sZFByZWRpY3RlZFByaWNlLCBsYWJHb2xkUHJlZGljdGVkUHJpY2UgfSA9IHN0YXRlLlZJUENMVUJcbiAgICBjb25zdCB7XG4gICAgICAgIHNlbGVjdGVkTG9jYXRpb24sXG4gICAgICAgIHRvcEhvc3BpdGFscyxcbiAgICAgICAgbmVhcmJ5SG9zcGl0YWxzXG4gICAgfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9PUERcbiAgICByZXR1cm4ge1xuICAgICAgICBVU0VSLCBzZWxlY3RlZExvY2F0aW9uLExPQURfVklQX0NMVUIsIHZpcENsdWJMaXN0LCBzZWxlY3RlZF92aXBfcGxhbiwgdXNlcl9jaXRpZXMsIHRvcEhvc3BpdGFscywgbmVhcmJ5SG9zcGl0YWxzLCBvZHBHb2xkUHJlZGljdGVkUHJpY2UsIGxhYkdvbGRQcmVkaWN0ZWRQcmljZSwgY29tbW9uX3V0bV90YWdzLCB1c2VyX2xvZ2dlZEluX251bWJlclxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0VmlwTGlzdDogKGlzX2VuZG9yc2VtZW50LGRhdGEsY2FsbGJhY2spID0+IGRpc3BhdGNoKGdldFZpcExpc3QoaXNfZW5kb3JzZW1lbnQsZGF0YSxjYWxsYmFjaykpLFxuICAgICAgICBzZWxlY3RWaXBDbHViUGxhbjogKHBsYW4sY3JpdGVyaWEsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChzZWxlY3RWaXBDbHViUGxhbihwbGFuLGNyaXRlcmlhLCBjYWxsYmFjaykpLFxuICAgICAgICBnZXRVc2VyUHJvZmlsZTogKCkgPT4gZGlzcGF0Y2goZ2V0VXNlclByb2ZpbGUoKSksXG4gICAgICAgIGdlbmVyYXRlVmlwQ2x1YkxlYWQ6KGRhdGEpID0+ZGlzcGF0Y2goZ2VuZXJhdGVWaXBDbHViTGVhZChkYXRhKSksXG4gICAgICAgIHNlbmRPVFA6IChudW1iZXIsdmlhU21zLHZpYVdoYXRzYXBwLG1lc3NhZ2VfdHlwZSwgY2IpID0+IGRpc3BhdGNoKHNlbmRPVFAobnVtYmVyLHZpYVNtcyx2aWFXaGF0c2FwcCxtZXNzYWdlX3R5cGUsIGNiKSksXG4gICAgICAgIHN1Ym1pdE9UUDogKG51bWJlciwgb3RwLCBleHRyYVBhcmFtc0RhdGEsY2IpID0+IGRpc3BhdGNoKHN1Ym1pdE9UUChudW1iZXIsIG90cCxleHRyYVBhcmFtc0RhdGEsIGNiKSksXG4gICAgICAgIHJlc2V0QXV0aDogKCkgPT4gZGlzcGF0Y2gocmVzZXRBdXRoKCkpLFxuICAgICAgICBjaXRpZXNEYXRhOiAoKSA9PiBkaXNwYXRjaChjaXRpZXNEYXRhKCkpLFxuICAgICAgICB2aXBQbHVzTGVhZDogKGRhdGEpID0+IGRpc3BhdGNoKHZpcFBsdXNMZWFkKGRhdGEpKSxcbiAgICAgICAgZ2V0TmVhcmJ5SG9zcGl0YWxzOiAocGFyYW1zLCBjYikgPT4gZGlzcGF0Y2goZ2V0TmVhcmJ5SG9zcGl0YWxzKHBhcmFtcywgY2IpKSxcbiAgICAgICAgdG9nZ2xlSVBEQ3JpdGVyaWE6IChjcml0ZXJpYSwgZm9yY2VBZGQpID0+IGRpc3BhdGNoKHRvZ2dsZUlQRENyaXRlcmlhKGNyaXRlcmlhLCBmb3JjZUFkZCkpLFxuICAgICAgICBnZXRUb3BIb3NwaXRhbHM6IChkYXRhUGFyYW1zLCBjYikgPT4gZGlzcGF0Y2goZ2V0VG9wSG9zcGl0YWxzKGRhdGFQYXJhbXMsIGNiKSksXG4gICAgICAgIHNlbmRBZ2VudFdoYXRzdXBQYWdlVVJMOiAoZGF0YVBhcmFtcywgY2IpID0+IGRpc3BhdGNoKHNlbmRBZ2VudFdoYXRzdXBQYWdlVVJMKGRhdGFQYXJhbXMsIGNiKSlcbiAgICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyAsIG1hcERpc3BhdGNoVG9Qcm9wcykoVmlwQ2x1YikiXSwic291cmNlUm9vdCI6IiJ9