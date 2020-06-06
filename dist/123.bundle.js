(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[123],{

/***/ "./dev/js/components/commons/Home/HomeChatView.js":
/*!********************************************************!*\
  !*** ./dev/js/components/commons/Home/HomeChatView.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

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

var _HomePageWidget = __webpack_require__(/*! ./HomePageWidget */ "./dev/js/components/commons/Home/HomePageWidget.js");

var _HomePageWidget2 = _interopRequireDefault(_HomePageWidget);

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

var _HomePageTopHospitals = __webpack_require__(/*! ./HomePageTopHospitals.js */ "./dev/js/components/commons/Home/HomePageTopHospitals.js");

var _HomePageTopHospitals2 = _interopRequireDefault(_HomePageTopHospitals);

var _HomePageProcedureWidgets = __webpack_require__(/*! ./HomePageProcedureWidgets.js */ "./dev/js/components/commons/Home/HomePageProcedureWidgets.js");

var _HomePageProcedureWidgets2 = _interopRequireDefault(_HomePageProcedureWidgets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");


var GENDER = {
	"m": "Male",
	"f": "Female",
	"o": "Other"
};

var HomeChatView = function (_React$Component) {
	_inherits(HomeChatView, _React$Component);

	function HomeChatView(props) {
		_classCallCheck(this, HomeChatView);

		// let footerData = null
		// if (this.props.initialServerData) {
		// 	footerData = this.props.initialServerData.footerData
		// }
		var _this = _possibleConstructorReturn(this, (HomeChatView.__proto__ || Object.getPrototypeOf(HomeChatView)).call(this, props));

		_this.state = {
			specialityFooterData: _this.props.static_footer_data
		};
		return _this;
	}

	_createClass(HomeChatView, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (window) {
				window.scrollTo(0, 0);
			}

			// this.props.getSpecialityFooterData((cb) => {
			// 	this.setState({ specialityFooterData: cb });
			// });

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
	}, {
		key: 'navigateTo',
		value: function navigateTo(where, type, data, e) {
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
	}, {
		key: 'getAge',
		value: function getAge(birthday) {
			birthday = new Date(birthday);
			var ageDifMs = Date.now() - birthday.getTime();
			var ageDate = new Date(ageDifMs); // miliseconds from epoch
			return Math.abs(ageDate.getUTCFullYear() - 1970);
		}
	}, {
		key: 'searchLab',
		value: function searchLab(test) {
			var _this2 = this;

			var isPackage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var data = void 0;
			if (isPackage) {
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

			if (isPackage) {
				setTimeout(function () {
					_this2.props.history.push('/searchpackages');
				}, 100);
			} else {
				setTimeout(function () {
					_this2.props.history.push('/lab/searchresults');
				}, 100);
			}
		}
	}, {
		key: 'searchDoctor',
		value: function searchDoctor(speciality) {
			var _this3 = this;

			if (speciality.url) {
				this.props.history.push('/' + speciality.url);
			} else {
				speciality.type = 'speciality';
				this.props.toggleOPDCriteria('speciality', speciality, true);
				setTimeout(function () {
					_this3.props.history.push('/opd/searchresults');
				}, 100);
			}
			var data = {
				'Category': 'ConsumerApp', 'Action': 'SelectedDoctorSpecializations', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'selected-doctor-specializations', 'selected': speciality.name || '', 'selectedId': speciality.id || ''
			};
			_gtm2.default.sendEvent({ data: data });
		}
	}, {
		key: 'gotToSignup',
		value: function gotToSignup() {
			var data = {
				'Category': 'ConsumerApp', 'Action': 'HomepageBannerSignupClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'homepage-banner-signup-clicked'
			};
			_gtm2.default.sendEvent({ data: data });
			this.props.history.push('/user?ref=home');
		}
	}, {
		key: 'gotToDoctorSignup',
		value: function gotToDoctorSignup(isLab) {
			var data = void 0;
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
	}, {
		key: 'getTopList',
		value: function getTopList(list) {
			var topList = [];
			if (list.length > 5) {
				topList = list.slice(0, 5);
			} else {
				topList = list;
			}
			return topList;
		}
	}, {
		key: 'render',
		value: function render() {

			var topSpecializations = [];
			if (this.props.specializations && this.props.specializations.length) {
				topSpecializations = this.getTopList(this.props.specializations);
			}

			var topTests = [];
			if (this.props.common_tests && this.props.common_tests.length) {
				topTests = this.getTopList(this.props.common_tests);
			}

			var topPackages = [];
			if (this.props.common_package && this.props.common_package.length) {
				topPackages = this.getTopList(this.props.common_package);
			}

			var profileData = this.props.profiles[this.props.selectedProfile];
			var articles = this.props.articles || [];
			var parsed = queryString.parse(this.props.location.search);
			var SlabSequence = 0;
			if (parsed) {
				if (parsed.journey_type == 'doctor') {
					SlabSequence = 1;
				} else if (parsed.journey_type == 'lab') {
					SlabSequence = 2;
				}
			}

			var showPackageStrip = this.props.compare_packages && this.props.compare_packages.length > 0 && !this.props.isPackage;

			var slabOrder = [];
			if (this.props.device_info != "desktop" && SlabSequence) {

				slabOrder.push(_react2.default.createElement(_ChatPanel2.default, { key: '1', homePage: true, chatPage: true, offerList: this.props.offerList, webChatPage: true }));
				/*slabOrder.push(
    	<div key="2" className="col-md-5">
    		<div className="right-card-container">
    			<UpComingAppointmentView {...this.props} />
    			<HomePageWidget
    				heading="Find a Doctor"
    				discount="50%"
    				list={topSpecializations}
    				searchFunc={(sp) => this.searchDoctor(sp)}
    				searchType="specializations"
    				{...this.props}
    				navTo="/search?from=home"
    				type="opd"
    			/>
    				{
    				this.props.offerList && this.props.offerList.filter(x => x.slider_location === 'online_consultation').length ?
    					<BannerCarousel {...this.props} hideClass="d-md-none" sliderLocation="online_consultation" /> : ''
    			}
    				<div className="fw-500 doc-lap-link d-md-none">
    				<span className="top-head-link card-lab-link" onClick={() => this.props.history.push('/doctorsignup')}>Register your clinic or Hospital <img width="18px" src={ASSETS_BASE_URL + "/img/arrow-link.svg"} /></span>
    			</div>
    		</div>
    	</div>)*/

				/*slabOrder.push(
    	<div key="3" className="col-md-5">
    		<div className="right-card-container">
    			<UpComingAppointmentView {...this.props} />
    			<HomePageWidget
    				heading="Book a Test"
    				discount="50%"
    				list={topTests}
    				searchFunc={(ct) => this.searchLab(ct, false)}
    				searchType="tests"
    				{...this.props}
    				navTo="/search?from=home"
    				type="lab"
    			/>
    				{
    				this.props.common_package && this.props.common_package.length ?
    					<HomePagePackageWidget
    						heading="Health Packages"
    						discount="50%"
    						list={topPackages}
    						searchFunc={(ct) => this.searchLab(ct, true)}
    						type="package"
    						searchType="packages"
    						{...this.props}
    						linkTo="/full-body-checkup-health-packages?from=home"
    						// navTo="/health-package-advisor"
    						navTo="/searchpackages"
    					/> : ""
    			}
    				{
    				this.props.ipd_procedures && this.props.ipd_procedures.length ?
    					<HomePageTopProcedures {...this.props} top_data={this.props.ipd_procedures} />
    					: ''
    			}
    				{
    				this.props.top_hospitals && this.props.top_hospitals.length ?
    					<HomePageTopHospitals {...this.props} top_data={this.props.top_hospitals} />
    					: ''
    			}
    			</div>
    	</div>)
    	let temp
    for (var j = SlabSequence; j > 0; j--) {
    	temp = slabOrder[j]
    	slabOrder[j] = slabOrder[j - 1]
    	slabOrder[j - 1] = temp
    }*/
			} else {

				slabOrder.push(_react2.default.createElement(_ChatPanel2.default, { key: '12', homePage: true, chatPage: true, offerList: this.props.offerList, webChatPage: true }));
				//slabOrder.push(
				{/*<div key="22" className="col-md-5">*/}
				{/*<div className="right-card-container">*/}
				{/*<UpComingAppointmentView {...this.props} />*/}
				{/* {
                          !!!profileData ?
                              <div className="home-signup-banner" onClick={this.gotToSignup.bind(this)}>
                                  <div className="banner-content-home">
                                      <div className="banner-lft-content">
                                          <span className="bn-up-txt">
                                              Get extra
                                       </span>
                                          <p className="sign-up-offer">
                                              ₹ 300 OFF
                                          </p>
                                          <span className="bn-down-offer">
                                              on bookings
                                       </span>
                                      </div>
                                      <button className="signup-btn-banner">
                                          Signup Now <img className="img-arwp" src={ASSETS_BASE_URL + "/img/rgtarw.png"} />
                                      </button>
                                  </div>
                              </div> : ''
     } */}

				{
					/*this.props.top_hospitals && this.props.top_hospitals.length ?
     	<HomePageTopHospitals {...this.props} top_data={this.props.top_hospitals} />
     	: ''*/
				}

				{
					/*this.props.ipd_procedures && this.props.ipd_procedures.length ?
     	<HomePageTopProcedures {...this.props} top_data={this.props.ipd_procedures} />
     	: ''*/
				}

				{
					/*this.props.common_package && this.props.common_package.length ?
     	<HomePagePackageWidget
     		heading="Health Packages"
     		discount="50%"
     		list={topPackages}
     		searchFunc={(ct) => this.searchLab(ct, true)}
     		type="package"
     		searchType="packages"
     		{...this.props}
     		linkTo="/full-body-checkup-health-packages?from=home"
     		// navTo="/health-package-advisor"
     		navTo="/searchpackages"
     	/> : ""*/
				}

				{/* x ray landing page cards */}
				{/* <div className="xray-container">
     <h1 className="xray-heading">Chest X-rays</h1>
     <div className="xray-cards">
     	<div className="row no-gutters">
     		<div className="col-7">
     			<p className="xrayCardMainHeading">AP & LAT  View</p>
     			<p className="xrayCardSubHeading">Available in 224 Labs </p>
     		</div>
     		<div className="col-5 text-right">
     			<p className="xray-strtng">Starting at</p>
     			<p className="xray-pffer">Save upto 40% <span className="xray-price">₹ 700</span></p>
     			<button className="xrayBtn">Select Lab</button>
     		</div>
     	</div>
     </div>
     </div> */}
				{/* x ray landing page cards */}

				{/*<div className="banner-cont-height home-page-banner-div">
     <div className="hidderBanner banner-carousel-div d-md-none">
     	<div className="divHeight"></div>
     </div>
     {
     	this.props.offerList && this.props.offerList.filter(x => x.slider_location === 'online_consultation').length ?
     		<BannerCarousel {...this.props} hideClass="d-md-none" sliderLocation="online_consultation" /> : ''
     }
     </div>*/}

				{/* <div className="fw-500 doc-lap-link" onClick={this.gotToDoctorSignup.bind(this, false)}>
     <p className="top-head-link card-lab-link">Run a clinic? Increase your<span>reach & brand NOW!</span> </p>
     <button className="lap-doc-btn" >Join us <img className="img-arwp" src={ASSETS_BASE_URL + "/img/rgtarw.png"} /> </button>
     </div> */}

				{/*<HomePageWidget
     heading="Book Doctor Appointment"
     discount="50%"
     list={topSpecializations}
     searchFunc={(sp) => this.searchDoctor(sp)}
     searchType="specializations"
     {...this.props}
     navTo="/search?from=home"
     type="opd"
     />*/}

				{/* <div className="fw-500 doc-lap-link" onClick={this.gotToDoctorSignup.bind(this, true)}>
     <p className="top-head-link card-lab-link">Run a lab? Reach more<span>customers near you</span></p>
     <button className="lap-doc-btn">Join us <img className="img-arwp" src={ASSETS_BASE_URL + "/img/rgtarw.png"} /> </button>
     </div> */}

				{} /*<HomePageWidget
       heading="Book a Test"
       discount="50%"
       list={topTests}
       searchFunc={(ct) => this.searchLab(ct, false)}
       searchType="tests"
       {...this.props}
       navTo="/search?from=home"
       type="lab"
       />*/

				/*</div>
    </div>*/
				//)
			}

			return _react2.default.createElement(
				'div',
				{ className: 'profile-body-wrap' },
				_react2.default.createElement(_HelmetTags2.default, { tagsData: {
						canonicalUrl: '' + _config2.default.API_BASE_URL + this.props.match.url,
						ogUrl: 'https://docprime.com',
						ogType: 'website',
						ogTitle: 'Book Doctor Online | 50% Off on Doctor Appointment & Lab Tests',
						ogDescription: 'Book Doctor Appointment at Docprime & get 50% off. Find & Book Doctor online, find & Book best Labs, and & Hospitals.',
						ogImage: 'https://cdn.docprime.com/media/banner/images/1200X628.png'
					}, setDefault: true }),
				_react2.default.createElement(_DesktopProfileHeader2.default, { homePage: true, chatPage: true, showSearch: true, showPackageStrip: showPackageStrip }),
				_react2.default.createElement(
					'div',
					{ className: 'chat-main-container' },
					_react2.default.createElement(
						'div',
						{ className: 'container' },
						_react2.default.createElement(
							'div',
							{ className: 'row justify-content-center' },
							slabOrder
						)
					)
				)
			);
		}
	}]);

	return HomeChatView;
}(_react2.default.Component);

exports.default = HomeChatView;

/***/ }),

/***/ "./dev/js/components/commons/Home/HomePageWidget.js":
/*!**********************************************************!*\
  !*** ./dev/js/components/commons/Home/HomePageWidget.js ***!
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePageWidget = function (_React$PureComponent) {
    _inherits(HomePageWidget, _React$PureComponent);

    function HomePageWidget(props) {
        _classCallCheck(this, HomePageWidget);

        var _this = _possibleConstructorReturn(this, (HomePageWidget.__proto__ || Object.getPrototypeOf(HomePageWidget)).call(this, props));

        _this.navigateTo = function (where, e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }

            if (_this.props.type) {
                _this.props.selectSearchType(_this.props.type);
            }
            _this.props.historyObj.push(where);
        };

        _this.state = {};
        return _this;
    }

    _createClass(HomePageWidget, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    "div",
                    { className: "card cstm-card mb-3" },
                    _react2.default.createElement("a", { className: "anchor-link", id: "" + this.props.type }),
                    _react2.default.createElement(
                        "div",
                        { className: "card-header", style: { justifyContent: 'normal' } },
                        this.props.type === 'opd' ? _react2.default.createElement(
                            "h1",
                            null,
                            this.props.heading
                        ) : this.props.searchType && this.props.searchType === 'packages' ? _react2.default.createElement(
                            "a",
                            { style: { cursor: 'pointer' }, title: "Full Body Checkup Packages", href: "/full-body-checkup-health-packages",
                                onClick: function onClick(e) {
                                    e.preventDefault();
                                    _this2.navigateTo(_this2.props.linkTo);
                                }
                            },
                            _react2.default.createElement(
                                "h2",
                                { className: "home-widget-heading" },
                                this.props.heading
                            )
                        ) : _react2.default.createElement(
                            "h2",
                            null,
                            this.props.heading
                        ),
                        _react2.default.createElement(
                            "span",
                            { className: "ofr-ribbon home-ofr-ribbon" },
                            "Upto ",
                            this.props.discount,
                            " Off"
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "card-body" },
                        _react2.default.createElement(
                            "div",
                            { className: "row mb-2 d-flex" },
                            this.props.list.slice(0, 9).map(function (listItem, i) {
                                return _react2.default.createElement(
                                    "div",
                                    { className: "col-4 home-card-col search-icon-col md-list-hide", key: i, onClick: function onClick() {
                                            return _this2.props.searchFunc(listItem);
                                        } },
                                    _react2.default.createElement(
                                        "div",
                                        { className: "grid-img-cnt" },
                                        listItem.url ? _react2.default.createElement(
                                            "a",
                                            { href: "/" + listItem.url, onClick: function onClick(e) {
                                                    return e.preventDefault();
                                                } },
                                            _react2.default.createElement("img", { className: "img-fluid", src: listItem.svg_icon ? listItem.svg_icon : listItem.icon }),
                                            _react2.default.createElement(
                                                "span",
                                                null,
                                                listItem.name
                                            )
                                        ) : _react2.default.createElement(
                                            "a",
                                            { href: "javascript:void(0);" },
                                            _react2.default.createElement("img", { className: "img-fluid", src: listItem.svg_icon ? listItem.svg_icon : listItem.icon }),
                                            _react2.default.createElement(
                                                "span",
                                                null,
                                                listItem.name
                                            )
                                        )
                                    )
                                );
                            }),
                            this.props.searchType ? _react2.default.createElement(
                                "div",
                                { className: "col-4 home-card-col search-icon-col", key: "search" + this.props.searchType },
                                _react2.default.createElement(
                                    "div",
                                    { className: "grid-img-cnt" },
                                    _react2.default.createElement(
                                        "a",
                                        { href: "javascript:void(0);", onClick: function onClick() {
                                                return _this2.navigateTo(_this2.props.navTo);
                                            } },
                                        _react2.default.createElement("img", { className: "img-fluid", src: "/assets" + "/images/vall.png" }),
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "Search more ",
                                            _react2.default.createElement("br", null),
                                            " ",
                                            this.props.searchType
                                        )
                                    )
                                )
                            ) : ''
                        )
                    )
                )
            );
        }
    }]);

    return HomePageWidget;
}(_react2.default.PureComponent);

exports.default = HomePageWidget;

/***/ }),

/***/ "./dev/js/containers/commons/HomeChat.js":
/*!***********************************************!*\
  !*** ./dev/js/containers/commons/HomeChat.js ***!
  \***********************************************/
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

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _HomeChatView = __webpack_require__(/*! ../../components/commons/Home/HomeChatView.js */ "./dev/js/components/commons/Home/HomeChatView.js");

var _HomeChatView2 = _interopRequireDefault(_HomeChatView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeChat = function (_React$Component) {
    _inherits(HomeChat, _React$Component);

    function HomeChat(props) {
        _classCallCheck(this, HomeChat);

        var _this = _possibleConstructorReturn(this, (HomeChat.__proto__ || Object.getPrototypeOf(HomeChat)).call(this, props));

        _this.state = {
            mergeState: false
        };
        return _this;
    }

    _createClass(HomeChat, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (_storage2.default.checkAuth()) {
                this.props.getUserProfile();
                this.props.getUpComingAppointment();
            }

            // this.props.fetchHeatlhTip()
            // this.props.fetchArticles()
            if (!this.props.common_tests.length || !this.props.common_package.length || !this.props.specializations.length || this.props.selectedLocation && this.props.selectedLocation.locality) {

                this.props.loadLabCommonCriterias();
                // this.props.loadOPDInsurance(this.props.selectedLocation)
            }
            this.props.loadOPDCommonCriteria(this.props.selectedLocation);

            this.props.resetFilters();
            this.props.clearExtraTests();
            setTimeout(function () {
                _this2.setState({ mergeState: true });
            }, 100);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_HomeChatView2.default, _extends({}, this.props, this.state));
        }
    }], [{
        key: 'loadData',
        value: function loadData(store, match) {
            return new Promise(function (resolve, reject) {
                Promise.all([store.dispatch((0, _index.loadOPDCommonCriteria)()), store.dispatch((0, _index.loadLabCommonCriterias)())]).then(function () {
                    resolve({});
                }).catch(function (e) {
                    reject();
                });
            });
        }
    }]);

    return HomeChat;
}(_react2.default.Component);

HomeChat.contextTypes = {
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
        selectedProfile = _state$USER.selectedProfile,
        newNotification = _state$USER.newNotification,
        notifications = _state$USER.notifications,
        articles = _state$USER.articles,
        healthTips = _state$USER.healthTips,
        device_info = _state$USER.device_info,
        offerList = _state$USER.offerList,
        upcoming_appointments = _state$USER.upcoming_appointments,
        is_ipd_form_submitted = _state$USER.is_ipd_form_submitted;
    var _state$SEARCH_CRITERI = state.SEARCH_CRITERIA_LABS,
        LOADED_SEARCH_CRITERIA_LAB = _state$SEARCH_CRITERI.LOADED_SEARCH_CRITERIA_LAB,
        common_tests = _state$SEARCH_CRITERI.common_tests,
        common_package = _state$SEARCH_CRITERI.common_package,
        selectedLocation = _state$SEARCH_CRITERI.selectedLocation,
        compare_packages = _state$SEARCH_CRITERI.compare_packages;

    var filterCriteria_lab = state.SEARCH_CRITERIA_LABS.filterCriteria;

    var _state$SEARCH_CRITERI2 = state.SEARCH_CRITERIA_OPD,
        LOADED_SEARCH_CRITERIA_OPD = _state$SEARCH_CRITERI2.LOADED_SEARCH_CRITERIA_OPD,
        specializations = _state$SEARCH_CRITERI2.specializations,
        ipd_procedures = _state$SEARCH_CRITERI2.ipd_procedures,
        top_hospitals = _state$SEARCH_CRITERI2.top_hospitals,
        common_settings = _state$SEARCH_CRITERI2.common_settings;


    var filterCriteria_opd = state.SEARCH_CRITERIA_OPD.filterCriteria;

    var static_footer_data = state.DOCTOR_SEARCH.static_footer_data;


    return {
        profiles: profiles, selectedProfile: selectedProfile, newNotification: newNotification, notifications: notifications, articles: articles, healthTips: healthTips, common_tests: common_tests || [], specializations: specializations || [], selectedLocation: selectedLocation, filterCriteria_lab: filterCriteria_lab, filterCriteria_opd: filterCriteria_opd, device_info: device_info, common_package: common_package || [], initialServerData: initialServerData, offerList: offerList, upcoming_appointments: upcoming_appointments, compare_packages: compare_packages, ipd_procedures: ipd_procedures, top_hospitals: top_hospitals, common_settings: common_settings, is_ipd_form_submitted: is_ipd_form_submitted, static_footer_data: static_footer_data
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        loadLabCommonCriterias: function loadLabCommonCriterias() {
            return dispatch((0, _index.loadLabCommonCriterias)());
        },
        loadOPDCommonCriteria: function loadOPDCommonCriteria(city) {
            return dispatch((0, _index.loadOPDCommonCriteria)(city));
        },
        toggleOPDCriteria: function toggleOPDCriteria(type, criteria, forceAdd, filters) {
            return dispatch((0, _index.toggleOPDCriteria)(type, criteria, forceAdd, filters));
        },
        toggleDiagnosisCriteria: function toggleDiagnosisCriteria(type, criteria, forceAdd, filters) {
            return dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd, filters));
        },
        getUserProfile: function getUserProfile() {
            return dispatch((0, _index.getUserProfile)());
        },
        fetchHeatlhTip: function fetchHeatlhTip() {
            return dispatch((0, _index.fetchHeatlhTip)());
        },
        fetchArticles: function fetchArticles() {
            return dispatch((0, _index.fetchArticles)());
        },
        resetFilters: function resetFilters() {
            return dispatch((0, _index.resetFilters)());
        },
        clearExtraTests: function clearExtraTests() {
            return dispatch((0, _index.clearExtraTests)());
        },
        getSpecialityFooterData: function getSpecialityFooterData(cb) {
            return dispatch((0, _index.getSpecialityFooterData)(cb));
        },
        selectSearchType: function selectSearchType(type) {
            return dispatch((0, _index.selectSearchType)(type));
        },
        getOfferList: function getOfferList(lat, long) {
            return dispatch((0, _index.getOfferList)(lat, long));
        },
        clearAllTests: function clearAllTests() {
            return dispatch((0, _index.clearAllTests)());
        },
        setPackageId: function setPackageId(package_id, isHomePage) {
            return dispatch((0, _index.setPackageId)(package_id, isHomePage));
        },
        getUpComingAppointment: function getUpComingAppointment() {
            return dispatch((0, _index.getUpComingAppointment)());
        },
        resetPkgCompare: function resetPkgCompare() {
            return dispatch((0, _index.resetPkgCompare)());
        },
        toggleIPDCriteria: function toggleIPDCriteria(criteria, forceAdd) {
            return dispatch((0, _index.toggleIPDCriteria)(criteria, forceAdd));
        },
        loadOPDInsurance: function loadOPDInsurance(city) {
            return dispatch((0, _index.loadOPDInsurance)(city));
        },
        clearVipSelectedPlan: function clearVipSelectedPlan() {
            return dispatch((0, _index.clearVipSelectedPlan)());
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HomeChat);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvSG9tZUNoYXRWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvSG9tZS9Ib21lUGFnZVdpZGdldC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9jb21tb25zL0hvbWVDaGF0LmpzIl0sIm5hbWVzIjpbInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIkdFTkRFUiIsIkhvbWVDaGF0VmlldyIsInByb3BzIiwic3RhdGUiLCJzcGVjaWFsaXR5Rm9vdGVyRGF0YSIsInN0YXRpY19mb290ZXJfZGF0YSIsIndpbmRvdyIsInNjcm9sbFRvIiwic2VsZWN0ZWRMb2NhdGlvbiIsImxhdCIsImxvbmciLCJnZW9tZXRyeSIsImxvY2F0aW9uIiwibG5nIiwiZ2V0T2ZmZXJMaXN0Iiwid2hlcmUiLCJ0eXBlIiwiZGF0YSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInNlbGVjdFNlYXJjaFR5cGUiLCJoaXN0b3J5IiwicHVzaCIsImJpcnRoZGF5IiwiRGF0ZSIsImFnZURpZk1zIiwibm93IiwiZ2V0VGltZSIsImFnZURhdGUiLCJNYXRoIiwiYWJzIiwiZ2V0VVRDRnVsbFllYXIiLCJ0ZXN0IiwiaXNQYWNrYWdlIiwic2V0UGFja2FnZUlkIiwiaWQiLCJHVE0iLCJnZXRVc2VySWQiLCJuYW1lIiwidG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEiLCJzZW5kRXZlbnQiLCJzZXRUaW1lb3V0Iiwic3BlY2lhbGl0eSIsInVybCIsInRvZ2dsZU9QRENyaXRlcmlhIiwiaXNMYWIiLCJsaXN0IiwidG9wTGlzdCIsImxlbmd0aCIsInNsaWNlIiwidG9wU3BlY2lhbGl6YXRpb25zIiwic3BlY2lhbGl6YXRpb25zIiwiZ2V0VG9wTGlzdCIsInRvcFRlc3RzIiwiY29tbW9uX3Rlc3RzIiwidG9wUGFja2FnZXMiLCJjb21tb25fcGFja2FnZSIsInByb2ZpbGVEYXRhIiwicHJvZmlsZXMiLCJzZWxlY3RlZFByb2ZpbGUiLCJhcnRpY2xlcyIsInBhcnNlZCIsInBhcnNlIiwic2VhcmNoIiwiU2xhYlNlcXVlbmNlIiwiam91cm5leV90eXBlIiwic2hvd1BhY2thZ2VTdHJpcCIsImNvbXBhcmVfcGFja2FnZXMiLCJzbGFiT3JkZXIiLCJkZXZpY2VfaW5mbyIsIm9mZmVyTGlzdCIsImNhbm9uaWNhbFVybCIsIkNPTkZJRyIsIkFQSV9CQVNFX1VSTCIsIm1hdGNoIiwib2dVcmwiLCJvZ1R5cGUiLCJvZ1RpdGxlIiwib2dEZXNjcmlwdGlvbiIsIm9nSW1hZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkhvbWVQYWdlV2lkZ2V0IiwibmF2aWdhdGVUbyIsImhpc3RvcnlPYmoiLCJqdXN0aWZ5Q29udGVudCIsImhlYWRpbmciLCJzZWFyY2hUeXBlIiwiY3Vyc29yIiwibGlua1RvIiwiZGlzY291bnQiLCJtYXAiLCJsaXN0SXRlbSIsImkiLCJzZWFyY2hGdW5jIiwic3ZnX2ljb24iLCJpY29uIiwibmF2VG8iLCJBU1NFVFNfQkFTRV9VUkwiLCJQdXJlQ29tcG9uZW50IiwiSG9tZUNoYXQiLCJtZXJnZVN0YXRlIiwiU1RPUkFHRSIsImNoZWNrQXV0aCIsImdldFVzZXJQcm9maWxlIiwiZ2V0VXBDb21pbmdBcHBvaW50bWVudCIsImxvY2FsaXR5IiwibG9hZExhYkNvbW1vbkNyaXRlcmlhcyIsImxvYWRPUERDb21tb25Dcml0ZXJpYSIsInJlc2V0RmlsdGVycyIsImNsZWFyRXh0cmFUZXN0cyIsInNldFN0YXRlIiwic3RvcmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImFsbCIsImRpc3BhdGNoIiwidGhlbiIsImNhdGNoIiwiY29udGV4dFR5cGVzIiwicm91dGVyIiwibWFwU3RhdGVUb1Byb3BzIiwicGFzc2VkUHJvcHMiLCJpbml0aWFsU2VydmVyRGF0YSIsInN0YXRpY0NvbnRleHQiLCJVU0VSIiwibmV3Tm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9ucyIsImhlYWx0aFRpcHMiLCJ1cGNvbWluZ19hcHBvaW50bWVudHMiLCJpc19pcGRfZm9ybV9zdWJtaXR0ZWQiLCJTRUFSQ0hfQ1JJVEVSSUFfTEFCUyIsIkxPQURFRF9TRUFSQ0hfQ1JJVEVSSUFfTEFCIiwiZmlsdGVyQ3JpdGVyaWFfbGFiIiwiZmlsdGVyQ3JpdGVyaWEiLCJTRUFSQ0hfQ1JJVEVSSUFfT1BEIiwiTE9BREVEX1NFQVJDSF9DUklURVJJQV9PUEQiLCJpcGRfcHJvY2VkdXJlcyIsInRvcF9ob3NwaXRhbHMiLCJjb21tb25fc2V0dGluZ3MiLCJmaWx0ZXJDcml0ZXJpYV9vcGQiLCJET0NUT1JfU0VBUkNIIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY2l0eSIsImNyaXRlcmlhIiwiZm9yY2VBZGQiLCJmaWx0ZXJzIiwiZmV0Y2hIZWF0bGhUaXAiLCJmZXRjaEFydGljbGVzIiwiZ2V0U3BlY2lhbGl0eUZvb3RlckRhdGEiLCJjYiIsImNsZWFyQWxsVGVzdHMiLCJwYWNrYWdlX2lkIiwiaXNIb21lUGFnZSIsInJlc2V0UGtnQ29tcGFyZSIsInRvZ2dsZUlQRENyaXRlcmlhIiwibG9hZE9QREluc3VyYW5jZSIsImNsZWFyVmlwU2VsZWN0ZWRQbGFuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRkEsSUFBTUEsY0FBY0MsbUJBQU9BLENBQUMsMERBQVIsQ0FBcEI7OztBQUlBLElBQU1DLFNBQVM7QUFDZCxNQUFLLE1BRFM7QUFFZCxNQUFLLFFBRlM7QUFHZCxNQUFLO0FBSFMsQ0FBZjs7SUFNTUMsWTs7O0FBQ0wsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFMa0IsMEhBQ1pBLEtBRFk7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QUQ7QUFBQSxtQkFBVTNCLFNBQVMsNkJBQWlCMkIsSUFBakIsQ0FBVCxDQUFWO0FBQUEsU0FsQmY7QUFtQkhjLDhCQUFxQjtBQUFBLG1CQUFNekMsU0FBUyxrQ0FBVCxDQUFOO0FBQUE7QUFuQmxCLEtBQVA7QUFxQkgsQ0F0QkQ7O2tCQXlCZSx5QkFBUUssZUFBUixFQUF5QnFCLGtCQUF6QixFQUE2QzNDLFFBQTdDLEMiLCJmaWxlIjoiMTIzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3RlcidcbmltcG9ydCBDaGF0UGFuZWwgZnJvbSAnLi4vQ2hhdFBhbmVsJ1xuaW1wb3J0IEhlbG1ldFRhZ3MgZnJvbSAnLi4vSGVsbWV0VGFncydcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uLy4uL2NvbmZpZydcbmltcG9ydCBIb21lUGFnZVdpZGdldCBmcm9tICcuL0hvbWVQYWdlV2lkZ2V0J1xuaW1wb3J0IEFjY29yZGlhbiBmcm9tICcuL0FjY29yZGlhbidcbmltcG9ydCBGaXhlZE1vYmlsZUZvb3RlciBmcm9tICcuL0ZpeGVkTW9iaWxlRm9vdGVyJ1xuaW1wb3J0IEJhbm5lckNhcm91c2VsIGZyb20gJy4vYmFubmVyQ2Fyb3VzZWwnO1xuaW1wb3J0IFVwQ29taW5nQXBwb2ludG1lbnRWaWV3IGZyb20gJy4vdXBDb21pbmdBcHBvaW50bWVudC5qcydcbmltcG9ydCBQYWNrYWdlQ29tcGFyZVN0cmlwIGZyb20gJy4uLy4uL2RpYWdub3Npcy9zZWFyY2hQYWNrYWdlcy9wYWNrYWdlQ29tcGFyZS9wYWNrYWdlQ29tcGFyZVN0cmlwLmpzJ1xuaW1wb3J0IEhvbWVQYWdlUGFja2FnZVdpZGdldCBmcm9tICcuL0hvbWVQYWdlUGFja2FnZVdpZGdldC5qcydcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5pbXBvcnQgSG9tZVBhZ2VUb3BIb3NwaXRhbHMgZnJvbSAnLi9Ib21lUGFnZVRvcEhvc3BpdGFscy5qcydcbmltcG9ydCBIb21lUGFnZVRvcFByb2NlZHVyZXMgZnJvbSAnLi9Ib21lUGFnZVByb2NlZHVyZVdpZGdldHMuanMnXG5cbmNvbnN0IEdFTkRFUiA9IHtcblx0XCJtXCI6IFwiTWFsZVwiLFxuXHRcImZcIjogXCJGZW1hbGVcIixcblx0XCJvXCI6IFwiT3RoZXJcIlxufVxuXG5jbGFzcyBIb21lQ2hhdFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHQvLyBsZXQgZm9vdGVyRGF0YSA9IG51bGxcblx0XHQvLyBpZiAodGhpcy5wcm9wcy5pbml0aWFsU2VydmVyRGF0YSkge1xuXHRcdC8vIFx0Zm9vdGVyRGF0YSA9IHRoaXMucHJvcHMuaW5pdGlhbFNlcnZlckRhdGEuZm9vdGVyRGF0YVxuXHRcdC8vIH1cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c3BlY2lhbGl0eUZvb3RlckRhdGE6IHRoaXMucHJvcHMuc3RhdGljX2Zvb3Rlcl9kYXRhXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0aWYgKHdpbmRvdykge1xuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIDApXG5cdFx0fVxuXG5cdFx0Ly8gdGhpcy5wcm9wcy5nZXRTcGVjaWFsaXR5Rm9vdGVyRGF0YSgoY2IpID0+IHtcblx0XHQvLyBcdHRoaXMuc2V0U3RhdGUoeyBzcGVjaWFsaXR5Rm9vdGVyRGF0YTogY2IgfSk7XG5cdFx0Ly8gfSk7XG5cblx0XHRsZXQgc2VsZWN0ZWRMb2NhdGlvbiA9ICcnXG5cdFx0bGV0IGxhdCA9IDI4LjY0NDgwMFxuXHRcdGxldCBsb25nID0gNzcuMjE2NzIxXG5cdFx0aWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbikge1xuXHRcdFx0c2VsZWN0ZWRMb2NhdGlvbiA9IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbjtcblx0XHRcdGxhdCA9IHNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubGF0XG5cdFx0XHRsb25nID0gc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sbmdcblx0XHRcdGlmICh0eXBlb2YgbGF0ID09PSAnZnVuY3Rpb24nKSBsYXQgPSBsYXQoKVxuXHRcdFx0aWYgKHR5cGVvZiBsb25nID09PSAnZnVuY3Rpb24nKSBsb25nID0gbG9uZygpXG5cdFx0fVxuXG5cdFx0dGhpcy5wcm9wcy5nZXRPZmZlckxpc3QobGF0LCBsb25nKTtcblxuXHR9XG5cblxuXHRuYXZpZ2F0ZVRvKHdoZXJlLCB0eXBlLCBkYXRhLCBlKSB7XG5cdFx0aWYgKGUpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxuXHRcdH1cblx0XHRpZiAodHlwZSkge1xuXHRcdFx0dGhpcy5wcm9wcy5zZWxlY3RTZWFyY2hUeXBlKHR5cGUpXG5cdFx0fVxuXHRcdGlmICh3aGVyZSA9PSAnL2NoYXQnKSB7XG5cdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCh3aGVyZSwgZGF0YSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2god2hlcmUpXG5cdFx0fVxuXHR9XG5cblx0Z2V0QWdlKGJpcnRoZGF5KSB7XG5cdFx0YmlydGhkYXkgPSBuZXcgRGF0ZShiaXJ0aGRheSlcblx0XHR2YXIgYWdlRGlmTXMgPSBEYXRlLm5vdygpIC0gYmlydGhkYXkuZ2V0VGltZSgpO1xuXHRcdHZhciBhZ2VEYXRlID0gbmV3IERhdGUoYWdlRGlmTXMpOyAvLyBtaWxpc2Vjb25kcyBmcm9tIGVwb2NoXG5cdFx0cmV0dXJuIE1hdGguYWJzKGFnZURhdGUuZ2V0VVRDRnVsbFllYXIoKSAtIDE5NzApO1xuXHR9XG5cblx0c2VhcmNoTGFiKHRlc3QsIGlzUGFja2FnZSA9IGZhbHNlKSB7XG5cdFx0bGV0IGRhdGFcblx0XHRpZiAoaXNQYWNrYWdlKSB7XG5cdFx0XHR0ZXN0LnR5cGUgPSAncGFja2FnZSdcblx0XHRcdHRoaXMucHJvcHMuc2V0UGFja2FnZUlkKHRlc3QuaWQsIHRydWUpXG5cdFx0XHRkYXRhID0ge1xuXHRcdFx0XHQnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1NlbGVjdGVkSGVhbHRoUGFja2FnZScsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3NlbGVjdGVkLWhlYWx0aC1wYWNrYWdlJywgJ3NlbGVjdGVkJzogdGVzdC5uYW1lIHx8ICcnLCAnc2VsZWN0ZWRJZCc6IHRlc3QuaWQgfHwgJydcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGVzdC50eXBlID0gJ3Rlc3QnXG5cdFx0XHR0aGlzLnByb3BzLnRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKCd0ZXN0JywgdGVzdCwgdHJ1ZSlcblx0XHRcdGRhdGEgPSB7XG5cdFx0XHRcdCdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnU2VsZWN0ZWRCb29rVGVzdCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3NlbGVjdGVkLWJvb2stdGVzdCcsICdzZWxlY3RlZCc6IHRlc3QubmFtZSB8fCAnJywgJ3NlbGVjdGVkSWQnOiB0ZXN0LmlkIHx8ICcnXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuXHRcdGlmIChpc1BhY2thZ2UpIHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3NlYXJjaHBhY2thZ2VzJylcblx0XHRcdH0sIDEwMClcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbGFiL3NlYXJjaHJlc3VsdHMnKVxuXHRcdFx0fSwgMTAwKVxuXHRcdH1cblx0fVxuXG5cdHNlYXJjaERvY3RvcihzcGVjaWFsaXR5KSB7XG5cdFx0aWYgKHNwZWNpYWxpdHkudXJsKSB7XG5cdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgLyR7c3BlY2lhbGl0eS51cmx9YClcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRzcGVjaWFsaXR5LnR5cGUgPSAnc3BlY2lhbGl0eSdcblx0XHRcdHRoaXMucHJvcHMudG9nZ2xlT1BEQ3JpdGVyaWEoJ3NwZWNpYWxpdHknLCBzcGVjaWFsaXR5LCB0cnVlKVxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvb3BkL3NlYXJjaHJlc3VsdHMnKVxuXHRcdFx0fSwgMTAwKVxuXHRcdH1cblx0XHRsZXQgZGF0YSA9IHtcblx0XHRcdCdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnU2VsZWN0ZWREb2N0b3JTcGVjaWFsaXphdGlvbnMnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdzZWxlY3RlZC1kb2N0b3Itc3BlY2lhbGl6YXRpb25zJywgJ3NlbGVjdGVkJzogc3BlY2lhbGl0eS5uYW1lIHx8ICcnLCAnc2VsZWN0ZWRJZCc6IHNwZWNpYWxpdHkuaWQgfHwgJydcblx0XHR9XG5cdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblx0fVxuXG5cdGdvdFRvU2lnbnVwKCkge1xuXHRcdGxldCBkYXRhID0ge1xuXHRcdFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdIb21lcGFnZUJhbm5lclNpZ251cENsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdob21lcGFnZS1iYW5uZXItc2lnbnVwLWNsaWNrZWQnXG5cdFx0fVxuXHRcdEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy91c2VyP3JlZj1ob21lJylcblx0fVxuXG5cdGdvdFRvRG9jdG9yU2lnbnVwKGlzTGFiKSB7XG5cdFx0bGV0IGRhdGFcblx0XHRpZiAoaXNMYWIpIHtcblx0XHRcdGRhdGEgPSB7XG5cdFx0XHRcdCdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnUnVuTGFiQmFubmVyQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3J1bi1sYWItYmFubmVyLWNsaWNrZWQnXG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRhdGEgPSB7XG5cdFx0XHRcdCdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnUnVuQ2xpbmljQmFubmVyQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3J1bi1jbGluaWMtYmFubmVyLWNsaWNrZWQnXG5cdFx0XHR9XG5cdFx0fVxuXHRcdEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9kb2N0b3JzaWdudXAnKVxuXHR9XG5cblx0Z2V0VG9wTGlzdChsaXN0KSB7XG5cdFx0bGV0IHRvcExpc3QgPSBbXVxuXHRcdGlmIChsaXN0Lmxlbmd0aCA+IDUpIHtcblx0XHRcdHRvcExpc3QgPSBsaXN0LnNsaWNlKDAsIDUpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRvcExpc3QgPSBsaXN0XG5cdFx0fVxuXHRcdHJldHVybiB0b3BMaXN0XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRsZXQgdG9wU3BlY2lhbGl6YXRpb25zID0gW11cblx0XHRpZiAodGhpcy5wcm9wcy5zcGVjaWFsaXphdGlvbnMgJiYgdGhpcy5wcm9wcy5zcGVjaWFsaXphdGlvbnMubGVuZ3RoKSB7XG5cdFx0XHR0b3BTcGVjaWFsaXphdGlvbnMgPSB0aGlzLmdldFRvcExpc3QodGhpcy5wcm9wcy5zcGVjaWFsaXphdGlvbnMpXG5cdFx0fVxuXG5cdFx0bGV0IHRvcFRlc3RzID0gW11cblx0XHRpZiAodGhpcy5wcm9wcy5jb21tb25fdGVzdHMgJiYgdGhpcy5wcm9wcy5jb21tb25fdGVzdHMubGVuZ3RoKSB7XG5cdFx0XHR0b3BUZXN0cyA9IHRoaXMuZ2V0VG9wTGlzdCh0aGlzLnByb3BzLmNvbW1vbl90ZXN0cylcblx0XHR9XG5cblx0XHRsZXQgdG9wUGFja2FnZXMgPSBbXVxuXHRcdGlmICh0aGlzLnByb3BzLmNvbW1vbl9wYWNrYWdlICYmIHRoaXMucHJvcHMuY29tbW9uX3BhY2thZ2UubGVuZ3RoKSB7XG5cdFx0XHR0b3BQYWNrYWdlcyA9IHRoaXMuZ2V0VG9wTGlzdCh0aGlzLnByb3BzLmNvbW1vbl9wYWNrYWdlKVxuXHRcdH1cblxuXHRcdGxldCBwcm9maWxlRGF0YSA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdXG5cdFx0bGV0IGFydGljbGVzID0gdGhpcy5wcm9wcy5hcnRpY2xlcyB8fCBbXVxuXHRcdGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXHRcdGxldCBTbGFiU2VxdWVuY2UgPSAwXG5cdFx0aWYgKHBhcnNlZCkge1xuXHRcdFx0aWYgKHBhcnNlZC5qb3VybmV5X3R5cGUgPT0gJ2RvY3RvcicpIHtcblx0XHRcdFx0U2xhYlNlcXVlbmNlID0gMVxuXHRcdFx0fSBlbHNlIGlmIChwYXJzZWQuam91cm5leV90eXBlID09ICdsYWInKSB7XG5cdFx0XHRcdFNsYWJTZXF1ZW5jZSA9IDJcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgc2hvd1BhY2thZ2VTdHJpcCA9IHRoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcyAmJiB0aGlzLnByb3BzLmNvbXBhcmVfcGFja2FnZXMubGVuZ3RoID4gMCAmJiAhdGhpcy5wcm9wcy5pc1BhY2thZ2VcblxuXHRcdGxldCBzbGFiT3JkZXIgPSBbXVxuXHRcdGlmICh0aGlzLnByb3BzLmRldmljZV9pbmZvICE9IFwiZGVza3RvcFwiICYmIFNsYWJTZXF1ZW5jZSkge1xuXG5cdFx0XHRzbGFiT3JkZXIucHVzaCg8Q2hhdFBhbmVsIGtleT1cIjFcIiBob21lUGFnZT17dHJ1ZX0gY2hhdFBhZ2U9e3RydWV9IG9mZmVyTGlzdD17dGhpcy5wcm9wcy5vZmZlckxpc3R9IHdlYkNoYXRQYWdlPXt0cnVlfS8+KVxuXHRcdFx0LypzbGFiT3JkZXIucHVzaChcblx0XHRcdFx0PGRpdiBrZXk9XCIyXCIgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWNhcmQtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8VXBDb21pbmdBcHBvaW50bWVudFZpZXcgey4uLnRoaXMucHJvcHN9IC8+XG5cdFx0XHRcdFx0XHQ8SG9tZVBhZ2VXaWRnZXRcblx0XHRcdFx0XHRcdFx0aGVhZGluZz1cIkZpbmQgYSBEb2N0b3JcIlxuXHRcdFx0XHRcdFx0XHRkaXNjb3VudD1cIjUwJVwiXG5cdFx0XHRcdFx0XHRcdGxpc3Q9e3RvcFNwZWNpYWxpemF0aW9uc31cblx0XHRcdFx0XHRcdFx0c2VhcmNoRnVuYz17KHNwKSA9PiB0aGlzLnNlYXJjaERvY3RvcihzcCl9XG5cdFx0XHRcdFx0XHRcdHNlYXJjaFR5cGU9XCJzcGVjaWFsaXphdGlvbnNcIlxuXHRcdFx0XHRcdFx0XHR7Li4udGhpcy5wcm9wc31cblx0XHRcdFx0XHRcdFx0bmF2VG89XCIvc2VhcmNoP2Zyb209aG9tZVwiXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJvcGRcIlxuXHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLm9mZmVyTGlzdCAmJiB0aGlzLnByb3BzLm9mZmVyTGlzdC5maWx0ZXIoeCA9PiB4LnNsaWRlcl9sb2NhdGlvbiA9PT0gJ29ubGluZV9jb25zdWx0YXRpb24nKS5sZW5ndGggP1xuXHRcdFx0XHRcdFx0XHRcdDxCYW5uZXJDYXJvdXNlbCB7Li4udGhpcy5wcm9wc30gaGlkZUNsYXNzPVwiZC1tZC1ub25lXCIgc2xpZGVyTG9jYXRpb249XCJvbmxpbmVfY29uc3VsdGF0aW9uXCIgLz4gOiAnJ1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZ3LTUwMCBkb2MtbGFwLWxpbmsgZC1tZC1ub25lXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRvcC1oZWFkLWxpbmsgY2FyZC1sYWItbGlua1wiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvZG9jdG9yc2lnbnVwJyl9PlJlZ2lzdGVyIHlvdXIgY2xpbmljIG9yIEhvc3BpdGFsIDxpbWcgd2lkdGg9XCIxOHB4XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvYXJyb3ctbGluay5zdmdcIn0gLz48L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+KSovXG5cblx0XHRcdC8qc2xhYk9yZGVyLnB1c2goXG5cdFx0XHRcdDxkaXYga2V5PVwiM1wiIGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyaWdodC1jYXJkLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PFVwQ29taW5nQXBwb2ludG1lbnRWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuXHRcdFx0XHRcdFx0PEhvbWVQYWdlV2lkZ2V0XG5cdFx0XHRcdFx0XHRcdGhlYWRpbmc9XCJCb29rIGEgVGVzdFwiXG5cdFx0XHRcdFx0XHRcdGRpc2NvdW50PVwiNTAlXCJcblx0XHRcdFx0XHRcdFx0bGlzdD17dG9wVGVzdHN9XG5cdFx0XHRcdFx0XHRcdHNlYXJjaEZ1bmM9eyhjdCkgPT4gdGhpcy5zZWFyY2hMYWIoY3QsIGZhbHNlKX1cblx0XHRcdFx0XHRcdFx0c2VhcmNoVHlwZT1cInRlc3RzXCJcblx0XHRcdFx0XHRcdFx0ey4uLnRoaXMucHJvcHN9XG5cdFx0XHRcdFx0XHRcdG5hdlRvPVwiL3NlYXJjaD9mcm9tPWhvbWVcIlxuXHRcdFx0XHRcdFx0XHR0eXBlPVwibGFiXCJcblx0XHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5jb21tb25fcGFja2FnZSAmJiB0aGlzLnByb3BzLmNvbW1vbl9wYWNrYWdlLmxlbmd0aCA/XG5cdFx0XHRcdFx0XHRcdFx0PEhvbWVQYWdlUGFja2FnZVdpZGdldFxuXHRcdFx0XHRcdFx0XHRcdFx0aGVhZGluZz1cIkhlYWx0aCBQYWNrYWdlc1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNjb3VudD1cIjUwJVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRsaXN0PXt0b3BQYWNrYWdlc31cblx0XHRcdFx0XHRcdFx0XHRcdHNlYXJjaEZ1bmM9eyhjdCkgPT4gdGhpcy5zZWFyY2hMYWIoY3QsIHRydWUpfVxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInBhY2thZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0c2VhcmNoVHlwZT1cInBhY2thZ2VzXCJcblx0XHRcdFx0XHRcdFx0XHRcdHsuLi50aGlzLnByb3BzfVxuXHRcdFx0XHRcdFx0XHRcdFx0bGlua1RvPVwiL2Z1bGwtYm9keS1jaGVja3VwLWhlYWx0aC1wYWNrYWdlcz9mcm9tPWhvbWVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gbmF2VG89XCIvaGVhbHRoLXBhY2thZ2UtYWR2aXNvclwiXG5cdFx0XHRcdFx0XHRcdFx0XHRuYXZUbz1cIi9zZWFyY2hwYWNrYWdlc1wiXG5cdFx0XHRcdFx0XHRcdFx0Lz4gOiBcIlwiXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5pcGRfcHJvY2VkdXJlcyAmJiB0aGlzLnByb3BzLmlwZF9wcm9jZWR1cmVzLmxlbmd0aCA/XG5cdFx0XHRcdFx0XHRcdFx0PEhvbWVQYWdlVG9wUHJvY2VkdXJlcyB7Li4udGhpcy5wcm9wc30gdG9wX2RhdGE9e3RoaXMucHJvcHMuaXBkX3Byb2NlZHVyZXN9IC8+XG5cdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudG9wX2hvc3BpdGFscyAmJiB0aGlzLnByb3BzLnRvcF9ob3NwaXRhbHMubGVuZ3RoID9cblx0XHRcdFx0XHRcdFx0XHQ8SG9tZVBhZ2VUb3BIb3NwaXRhbHMgey4uLnRoaXMucHJvcHN9IHRvcF9kYXRhPXt0aGlzLnByb3BzLnRvcF9ob3NwaXRhbHN9IC8+XG5cdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PilcblxuXHRcdFx0bGV0IHRlbXBcblx0XHRcdGZvciAodmFyIGogPSBTbGFiU2VxdWVuY2U7IGogPiAwOyBqLS0pIHtcblx0XHRcdFx0dGVtcCA9IHNsYWJPcmRlcltqXVxuXHRcdFx0XHRzbGFiT3JkZXJbal0gPSBzbGFiT3JkZXJbaiAtIDFdXG5cdFx0XHRcdHNsYWJPcmRlcltqIC0gMV0gPSB0ZW1wXG5cdFx0XHR9Ki9cblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdHNsYWJPcmRlci5wdXNoKDxDaGF0UGFuZWwga2V5PVwiMTJcIiBob21lUGFnZT17dHJ1ZX0gY2hhdFBhZ2U9e3RydWV9IG9mZmVyTGlzdD17dGhpcy5wcm9wcy5vZmZlckxpc3R9IHdlYkNoYXRQYWdlPXt0cnVlfSAvPilcblx0XHRcdC8vc2xhYk9yZGVyLnB1c2goXG5cdFx0XHRcdHsvKjxkaXYga2V5PVwiMjJcIiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPiovfVxuXHRcdFx0XHRcdHsvKjxkaXYgY2xhc3NOYW1lPVwicmlnaHQtY2FyZC1jb250YWluZXJcIj4qL31cblx0XHRcdFx0XHRcdHsvKjxVcENvbWluZ0FwcG9pbnRtZW50VmlldyB7Li4udGhpcy5wcm9wc30gLz4qL31cblx0XHRcdFx0XHRcdHsvKiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgISEhcHJvZmlsZURhdGEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtc2lnbnVwLWJhbm5lclwiIG9uQ2xpY2s9e3RoaXMuZ290VG9TaWdudXAuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1jb250ZW50LWhvbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1sZnQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibi11cC10eHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdldCBleHRyYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNpZ24tdXAtb2ZmZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKCuSAzMDAgT0ZGXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYm4tZG93bi1vZmZlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb24gYm9va2luZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2lnbnVwLWJ0bi1iYW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbnVwIE5vdyA8aW1nIGNsYXNzTmFtZT1cImltZy1hcndwXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcmd0YXJ3LnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG5cdFx0XHRcdFx0XHR9ICovfVxuXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdC8qdGhpcy5wcm9wcy50b3BfaG9zcGl0YWxzICYmIHRoaXMucHJvcHMudG9wX2hvc3BpdGFscy5sZW5ndGggP1xuXHRcdFx0XHRcdFx0XHRcdDxIb21lUGFnZVRvcEhvc3BpdGFscyB7Li4udGhpcy5wcm9wc30gdG9wX2RhdGE9e3RoaXMucHJvcHMudG9wX2hvc3BpdGFsc30gLz5cblx0XHRcdFx0XHRcdFx0XHQ6ICcnKi9cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHQvKnRoaXMucHJvcHMuaXBkX3Byb2NlZHVyZXMgJiYgdGhpcy5wcm9wcy5pcGRfcHJvY2VkdXJlcy5sZW5ndGggP1xuXHRcdFx0XHRcdFx0XHRcdDxIb21lUGFnZVRvcFByb2NlZHVyZXMgey4uLnRoaXMucHJvcHN9IHRvcF9kYXRhPXt0aGlzLnByb3BzLmlwZF9wcm9jZWR1cmVzfSAvPlxuXHRcdFx0XHRcdFx0XHRcdDogJycqL1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdC8qdGhpcy5wcm9wcy5jb21tb25fcGFja2FnZSAmJiB0aGlzLnByb3BzLmNvbW1vbl9wYWNrYWdlLmxlbmd0aCA/XG5cdFx0XHRcdFx0XHRcdFx0PEhvbWVQYWdlUGFja2FnZVdpZGdldFxuXHRcdFx0XHRcdFx0XHRcdFx0aGVhZGluZz1cIkhlYWx0aCBQYWNrYWdlc1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNjb3VudD1cIjUwJVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRsaXN0PXt0b3BQYWNrYWdlc31cblx0XHRcdFx0XHRcdFx0XHRcdHNlYXJjaEZ1bmM9eyhjdCkgPT4gdGhpcy5zZWFyY2hMYWIoY3QsIHRydWUpfVxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInBhY2thZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0c2VhcmNoVHlwZT1cInBhY2thZ2VzXCJcblx0XHRcdFx0XHRcdFx0XHRcdHsuLi50aGlzLnByb3BzfVxuXHRcdFx0XHRcdFx0XHRcdFx0bGlua1RvPVwiL2Z1bGwtYm9keS1jaGVja3VwLWhlYWx0aC1wYWNrYWdlcz9mcm9tPWhvbWVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gbmF2VG89XCIvaGVhbHRoLXBhY2thZ2UtYWR2aXNvclwiXG5cdFx0XHRcdFx0XHRcdFx0XHRuYXZUbz1cIi9zZWFyY2hwYWNrYWdlc1wiXG5cdFx0XHRcdFx0XHRcdFx0Lz4gOiBcIlwiKi9cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0ey8qIHggcmF5IGxhbmRpbmcgcGFnZSBjYXJkcyAqL31cblx0XHRcdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT1cInhyYXktY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ4cmF5LWhlYWRpbmdcIj5DaGVzdCBYLXJheXM8L2gxPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhyYXktY2FyZHNcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC03XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInhyYXlDYXJkTWFpbkhlYWRpbmdcIj5BUCAmIExBVCAgVmlldzwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwieHJheUNhcmRTdWJIZWFkaW5nXCI+QXZhaWxhYmxlIGluIDIyNCBMYWJzIDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtNSB0ZXh0LXJpZ2h0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInhyYXktc3RydG5nXCI+U3RhcnRpbmcgYXQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInhyYXktcGZmZXJcIj5TYXZlIHVwdG8gNDAlIDxzcGFuIGNsYXNzTmFtZT1cInhyYXktcHJpY2VcIj7igrkgNzAwPC9zcGFuPjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJ4cmF5QnRuXCI+U2VsZWN0IExhYjwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+ICovfVxuXHRcdFx0XHRcdFx0ey8qIHggcmF5IGxhbmRpbmcgcGFnZSBjYXJkcyAqL31cblxuXHRcdFx0XHRcdFx0ey8qPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItY29udC1oZWlnaHQgaG9tZS1wYWdlLWJhbm5lci1kaXZcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoaWRkZXJCYW5uZXIgYmFubmVyLWNhcm91c2VsLWRpdiBkLW1kLW5vbmVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRpdkhlaWdodFwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMub2ZmZXJMaXN0ICYmIHRoaXMucHJvcHMub2ZmZXJMaXN0LmZpbHRlcih4ID0+IHguc2xpZGVyX2xvY2F0aW9uID09PSAnb25saW5lX2NvbnN1bHRhdGlvbicpLmxlbmd0aCA/XG5cdFx0XHRcdFx0XHRcdFx0XHQ8QmFubmVyQ2Fyb3VzZWwgey4uLnRoaXMucHJvcHN9IGhpZGVDbGFzcz1cImQtbWQtbm9uZVwiIHNsaWRlckxvY2F0aW9uPVwib25saW5lX2NvbnN1bHRhdGlvblwiIC8+IDogJydcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9kaXY+Ki99XG5cblx0XHRcdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZ3LTUwMCBkb2MtbGFwLWxpbmtcIiBvbkNsaWNrPXt0aGlzLmdvdFRvRG9jdG9yU2lnbnVwLmJpbmQodGhpcywgZmFsc2UpfT5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidG9wLWhlYWQtbGluayBjYXJkLWxhYi1saW5rXCI+UnVuIGEgY2xpbmljPyBJbmNyZWFzZSB5b3VyPHNwYW4+cmVhY2ggJiBicmFuZCBOT1chPC9zcGFuPiA8L3A+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwibGFwLWRvYy1idG5cIiA+Sm9pbiB1cyA8aW1nIGNsYXNzTmFtZT1cImltZy1hcndwXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcmd0YXJ3LnBuZ1wifSAvPiA8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PiAqL31cblxuXHRcdFx0XHRcdFx0ey8qPEhvbWVQYWdlV2lkZ2V0XG5cdFx0XHRcdFx0XHRcdGhlYWRpbmc9XCJCb29rIERvY3RvciBBcHBvaW50bWVudFwiXG5cdFx0XHRcdFx0XHRcdGRpc2NvdW50PVwiNTAlXCJcblx0XHRcdFx0XHRcdFx0bGlzdD17dG9wU3BlY2lhbGl6YXRpb25zfVxuXHRcdFx0XHRcdFx0XHRzZWFyY2hGdW5jPXsoc3ApID0+IHRoaXMuc2VhcmNoRG9jdG9yKHNwKX1cblx0XHRcdFx0XHRcdFx0c2VhcmNoVHlwZT1cInNwZWNpYWxpemF0aW9uc1wiXG5cdFx0XHRcdFx0XHRcdHsuLi50aGlzLnByb3BzfVxuXHRcdFx0XHRcdFx0XHRuYXZUbz1cIi9zZWFyY2g/ZnJvbT1ob21lXCJcblx0XHRcdFx0XHRcdFx0dHlwZT1cIm9wZFwiXG5cdFx0XHRcdFx0XHQvPiovfVxuXG5cdFx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJmdy01MDAgZG9jLWxhcC1saW5rXCIgb25DbGljaz17dGhpcy5nb3RUb0RvY3RvclNpZ251cC5iaW5kKHRoaXMsIHRydWUpfT5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidG9wLWhlYWQtbGluayBjYXJkLWxhYi1saW5rXCI+UnVuIGEgbGFiPyBSZWFjaCBtb3JlPHNwYW4+Y3VzdG9tZXJzIG5lYXIgeW91PC9zcGFuPjwvcD5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJsYXAtZG9jLWJ0blwiPkpvaW4gdXMgPGltZyBjbGFzc05hbWU9XCJpbWctYXJ3cFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3JndGFydy5wbmdcIn0gLz4gPC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj4gKi99XG5cblx0XHRcdFx0XHRcdHsvKjxIb21lUGFnZVdpZGdldFxuXHRcdFx0XHRcdFx0XHRoZWFkaW5nPVwiQm9vayBhIFRlc3RcIlxuXHRcdFx0XHRcdFx0XHRkaXNjb3VudD1cIjUwJVwiXG5cdFx0XHRcdFx0XHRcdGxpc3Q9e3RvcFRlc3RzfVxuXHRcdFx0XHRcdFx0XHRzZWFyY2hGdW5jPXsoY3QpID0+IHRoaXMuc2VhcmNoTGFiKGN0LCBmYWxzZSl9XG5cdFx0XHRcdFx0XHRcdHNlYXJjaFR5cGU9XCJ0ZXN0c1wiXG5cdFx0XHRcdFx0XHRcdHsuLi50aGlzLnByb3BzfVxuXHRcdFx0XHRcdFx0XHRuYXZUbz1cIi9zZWFyY2g/ZnJvbT1ob21lXCJcblx0XHRcdFx0XHRcdFx0dHlwZT1cImxhYlwiXG5cdFx0XHRcdFx0XHQvPiovfVxuXG5cdFx0XHRcdFx0Lyo8L2Rpdj5cblx0XHRcdFx0PC9kaXY+Ki9cblx0XHRcdFx0Ly8pXG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cblxuXHRcdFx0XHQ8SGVsbWV0VGFncyB0YWdzRGF0YT17e1xuXHRcdFx0XHRcdGNhbm9uaWNhbFVybDogYCR7Q09ORklHLkFQSV9CQVNFX1VSTH0ke3RoaXMucHJvcHMubWF0Y2gudXJsfWAsXG5cdFx0XHRcdFx0b2dVcmw6ICdodHRwczovL2RvY3ByaW1lLmNvbScsXG5cdFx0XHRcdFx0b2dUeXBlOiAnd2Vic2l0ZScsXG5cdFx0XHRcdFx0b2dUaXRsZTogJ0Jvb2sgRG9jdG9yIE9ubGluZSB8IDUwJSBPZmYgb24gRG9jdG9yIEFwcG9pbnRtZW50ICYgTGFiIFRlc3RzJyxcblx0XHRcdFx0XHRvZ0Rlc2NyaXB0aW9uOiAnQm9vayBEb2N0b3IgQXBwb2ludG1lbnQgYXQgRG9jcHJpbWUgJiBnZXQgNTAlIG9mZi4gRmluZCAmIEJvb2sgRG9jdG9yIG9ubGluZSwgZmluZCAmIEJvb2sgYmVzdCBMYWJzLCBhbmQgJiBIb3NwaXRhbHMuJyxcblx0XHRcdFx0XHRvZ0ltYWdlOiAnaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL21lZGlhL2Jhbm5lci9pbWFnZXMvMTIwMFg2MjgucG5nJ1xuXHRcdFx0XHR9fSBzZXREZWZhdWx0PXt0cnVlfSAvPlxuXG5cdFx0XHRcdDxQcm9maWxlSGVhZGVyIGhvbWVQYWdlPXt0cnVlfSBjaGF0UGFnZT17dHJ1ZX0gc2hvd1NlYXJjaD17dHJ1ZX0gc2hvd1BhY2thZ2VTdHJpcD17c2hvd1BhY2thZ2VTdHJpcH0gLz5cblxuXHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJzdWItaGVhZGVyIG1yZy10b3BcIj48L2Rpdj4gKi99XG5cdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclN1YkxpbmtDb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkX3RleHRfY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIvdmlwLWNsdWItZGV0YWlsc1wiIG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0bGV0IGRhdGEgPSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ3ZpcENsaWNrU3ViaGVhZGVyJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAndmlwLWNsaWNrLXN1YmhlYWRlcidcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5jbGVhclZpcFNlbGVjdGVkUGxhbigpXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5uYXZpZ2F0ZVRvKFwiL3ZpcC1nb2xkLWRldGFpbHM/aXNfZ29sZD10cnVlJnNvdXJjZT1tb2JpbGUtbGVmdG1lbnUtZ29sZC1jbGlja2VkJmxlYWRfc291cmNlPURvY3ByaW1lXCIsICdvcGQnKVxuXHRcdFx0XHRcdFx0XHR9fT5Eb2NwcmltZSA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZ29sZC1sZy5wbmcnfSBzdHlsZT17eyB3aWR0aDogMzUsIG1hcmdpbkxlZnQ6IDIsIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnIH19IC8+PHNwYW4gY2xhc3NOYW1lPVwib3BkTmV3SGVhZGVyT2ZyXCI+TmV3PC9zcGFuPjwvYT5cblxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiL3NlYXJjaFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMubmF2aWdhdGVUbyhcIi9zZWFyY2hcIiwgJ29wZCcpXG5cdFx0XHRcdFx0XHRcdH19PkZpbmQgYSBEb2N0b3I8L2E+XG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIvc2VhcmNoXCIgb25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5uYXZpZ2F0ZVRvKFwiL3NlYXJjaFwiLCAnbGFiJylcblx0XHRcdFx0XHRcdFx0fX0+TGFiIFRlc3RzPC9hPlxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiL2Z1bGwtYm9keS1jaGVja3VwLWhlYWx0aC1wYWNrYWdlc1wiIG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMubmF2aWdhdGVUbygnL2Z1bGwtYm9keS1jaGVja3VwLWhlYWx0aC1wYWNrYWdlcycpXG5cdFx0XHRcdFx0XHRcdH19PkhlYWx0aCBQYWNrYWdlczwvYT5cblx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIi9vbmxpbmUtY29uc3VsdGF0aW9uXCIgb25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5uYXZpZ2F0ZVRvKCcvb25saW5lLWNvbnN1bHRhdGlvbicpXG5cdFx0XHRcdFx0XHRcdH19Pk9ubGluZSBEb2N0b3IgQ29uc3VsdGF0aW9uPC9hPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PiAqL31cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjaGF0LW1haW4tY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0e3NsYWJPcmRlcn1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0ey8qPEFjY29yZGlhbiAvPiovfVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdC8qc2hvd1BhY2thZ2VTdHJpcCA/XG5cdFx0XHRcdFx0XHRcdDxQYWNrYWdlQ29tcGFyZVN0cmlwIHsuLi50aGlzLnByb3BzfSAvPlxuXHRcdFx0XHRcdFx0XHQ6XG5cdFx0XHRcdFx0XHRcdDxGaXhlZE1vYmlsZUZvb3RlciB7Li4udGhpcy5wcm9wc30gLz4qL1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0ey8qPEZvb3RlciBzcGVjaWFsaXR5Rm9vdGVyRGF0YT17dGhpcy5zdGF0ZS5zcGVjaWFsaXR5Rm9vdGVyRGF0YX0gLz4qL31cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZUNoYXRWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgSG9tZVBhZ2VXaWRnZXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5hdmlnYXRlVG8gPSAod2hlcmUsIGUpID0+e1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy50eXBlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdFNlYXJjaFR5cGUodGhpcy5wcm9wcy50eXBlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeU9iai5wdXNoKHdoZXJlKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjc3RtLWNhcmQgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhbmNob3ItbGlua1wiIGlkPXtgJHt0aGlzLnByb3BzLnR5cGV9YH0+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCIgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdub3JtYWwnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudHlwZSA9PT0gJ29wZCcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e3RoaXMucHJvcHMuaGVhZGluZ308L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMucHJvcHMuc2VhcmNoVHlwZSAmJiB0aGlzLnByb3BzLnNlYXJjaFR5cGUgPT09ICdwYWNrYWdlcycgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gdGl0bGU9XCJGdWxsIEJvZHkgQ2hlY2t1cCBQYWNrYWdlc1wiIGhyZWY9XCIvZnVsbC1ib2R5LWNoZWNrdXAtaGVhbHRoLXBhY2thZ2VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbyh0aGlzLnByb3BzLmxpbmtUbylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJob21lLXdpZGdldC1oZWFkaW5nXCI+e3RoaXMucHJvcHMuaGVhZGluZ308L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8aDI+e3RoaXMucHJvcHMuaGVhZGluZ308L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib2ZyLXJpYmJvbiBob21lLW9mci1yaWJib25cIj5VcHRvIHt0aGlzLnByb3BzLmRpc2NvdW50fSBPZmY8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItMiBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubGlzdC5zbGljZSgwLDkpLm1hcCgobGlzdEl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbC00IGhvbWUtY2FyZC1jb2wgc2VhcmNoLWljb24tY29sIG1kLWxpc3QtaGlkZVwiIGtleT17aX0gb25DbGljaz17KCk9PnRoaXMucHJvcHMuc2VhcmNoRnVuYyhsaXN0SXRlbSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pbWctY250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtLnVybCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC8ke2xpc3RJdGVtLnVybH1gfSBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e2xpc3RJdGVtLnN2Z19pY29uP2xpc3RJdGVtLnN2Z19pY29uOmxpc3RJdGVtLmljb259Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2xpc3RJdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e2xpc3RJdGVtLnN2Z19pY29uP2xpc3RJdGVtLnN2Z19pY29uOmxpc3RJdGVtLmljb259Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2xpc3RJdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWFyY2hUeXBlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgaG9tZS1jYXJkLWNvbCBzZWFyY2gtaWNvbi1jb2xcIiBrZXk9e2BzZWFyY2gke3RoaXMucHJvcHMuc2VhcmNoVHlwZX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaW1nLWNudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIG9uQ2xpY2s9eygpPT50aGlzLm5hdmlnYXRlVG8odGhpcy5wcm9wcy5uYXZUbyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltYWdlcy92YWxsLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2VhcmNoIG1vcmUgPGJyLz4ge3RoaXMucHJvcHMuc2VhcmNoVHlwZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VXaWRnZXQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgY2xlYXJBbGxUZXN0cywgdG9nZ2xlT1BEQ3JpdGVyaWEsIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhLCByZXNldEZpbHRlcnMsIGdldFVzZXJQcm9maWxlLCBmZXRjaEFydGljbGVzLCBmZXRjaEhlYXRsaFRpcCwgbG9hZE9QRENvbW1vbkNyaXRlcmlhLCBsb2FkTGFiQ29tbW9uQ3JpdGVyaWFzLCBjbGVhckV4dHJhVGVzdHMsIGdldFNwZWNpYWxpdHlGb290ZXJEYXRhLCBzZWxlY3RTZWFyY2hUeXBlLCBnZXRPZmZlckxpc3QsIHNldFBhY2thZ2VJZCwgZ2V0VXBDb21pbmdBcHBvaW50bWVudCwgcmVzZXRQa2dDb21wYXJlLCB0b2dnbGVJUERDcml0ZXJpYSwgbG9hZE9QREluc3VyYW5jZSwgY2xlYXJWaXBTZWxlY3RlZFBsYW4gfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5pbXBvcnQgSG9tZUNoYXRWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9Ib21lL0hvbWVDaGF0Vmlldy5qcyc7XG5cbmNsYXNzIEhvbWVDaGF0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG1lcmdlU3RhdGU6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZERhdGEoc3RvcmUsIG1hdGNoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChbc3RvcmUuZGlzcGF0Y2gobG9hZE9QRENvbW1vbkNyaXRlcmlhKCkpLCBzdG9yZS5kaXNwYXRjaChsb2FkTGFiQ29tbW9uQ3JpdGVyaWFzKCkpXSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7IH0pXG4gICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogKCkgPT4gbnVsbFxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAoU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRVc2VyUHJvZmlsZSgpXG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldFVwQ29taW5nQXBwb2ludG1lbnQoKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcy5wcm9wcy5mZXRjaEhlYXRsaFRpcCgpXG4gICAgICAgIC8vIHRoaXMucHJvcHMuZmV0Y2hBcnRpY2xlcygpXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5jb21tb25fdGVzdHMubGVuZ3RoIHx8ICF0aGlzLnByb3BzLmNvbW1vbl9wYWNrYWdlLmxlbmd0aCB8fCAhdGhpcy5wcm9wcy5zcGVjaWFsaXphdGlvbnMubGVuZ3RoIHx8ICh0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmxvY2FsaXR5KSkge1xuXG4gICAgICAgICAgICB0aGlzLnByb3BzLmxvYWRMYWJDb21tb25Dcml0ZXJpYXMoKVxuICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5sb2FkT1BESW5zdXJhbmNlKHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbilcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLmxvYWRPUERDb21tb25Dcml0ZXJpYSh0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pXG5cbiAgICAgICAgdGhpcy5wcm9wcy5yZXNldEZpbHRlcnMoKVxuICAgICAgICB0aGlzLnByb3BzLmNsZWFyRXh0cmFUZXN0cygpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lcmdlU3RhdGU6IHRydWUgfSlcbiAgICAgICAgfSwgMTAwKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxIb21lQ2hhdFZpZXcgey4uLnRoaXMucHJvcHN9IHsuLi50aGlzLnN0YXRlfSAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwYXNzZWRQcm9wcykgPT4ge1xuICAgIC8qKlxuICAgICAqIGluaXRpYWxTZXJ2ZXJEYXRhIGlzIHNlcnZlciByZW5kZXJlZCBhc3luYyBkYXRhIHJlcXVpcmVkIGJ1aWxkIGh0bWwgb24gc2VydmVyLiBcbiAgICAgKi9cbiAgICBsZXQgaW5pdGlhbFNlcnZlckRhdGEgPSBudWxsXG4gICAgbGV0IHsgc3RhdGljQ29udGV4dCB9ID0gcGFzc2VkUHJvcHNcbiAgICBpZiAoc3RhdGljQ29udGV4dCAmJiBzdGF0aWNDb250ZXh0LmRhdGEpIHtcbiAgICAgICAgaW5pdGlhbFNlcnZlckRhdGEgPSBzdGF0aWNDb250ZXh0LmRhdGFcbiAgICB9XG5cbiAgICBsZXQge1xuICAgICAgICBwcm9maWxlcywgc2VsZWN0ZWRQcm9maWxlLCBuZXdOb3RpZmljYXRpb24sIG5vdGlmaWNhdGlvbnMsIGFydGljbGVzLCBoZWFsdGhUaXBzLCBkZXZpY2VfaW5mbywgb2ZmZXJMaXN0LCB1cGNvbWluZ19hcHBvaW50bWVudHMsIGlzX2lwZF9mb3JtX3N1Ym1pdHRlZFxuICAgIH0gPSBzdGF0ZS5VU0VSXG5cbiAgICBjb25zdCB7XG4gICAgICAgIExPQURFRF9TRUFSQ0hfQ1JJVEVSSUFfTEFCLFxuICAgICAgICBjb21tb25fdGVzdHMsXG4gICAgICAgIGNvbW1vbl9wYWNrYWdlLFxuICAgICAgICBzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICBjb21wYXJlX3BhY2thZ2VzXG4gICAgfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9MQUJTXG4gICAgbGV0IGZpbHRlckNyaXRlcmlhX2xhYiA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9MQUJTLmZpbHRlckNyaXRlcmlhXG5cbiAgICBjb25zdCB7XG4gICAgICAgIExPQURFRF9TRUFSQ0hfQ1JJVEVSSUFfT1BELFxuICAgICAgICBzcGVjaWFsaXphdGlvbnMsXG4gICAgICAgIGlwZF9wcm9jZWR1cmVzLFxuICAgICAgICB0b3BfaG9zcGl0YWxzLFxuICAgICAgICBjb21tb25fc2V0dGluZ3NcbiAgICB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX09QRFxuXG4gICAgbGV0IGZpbHRlckNyaXRlcmlhX29wZCA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9PUEQuZmlsdGVyQ3JpdGVyaWFcblxuICAgIGxldCB7XG4gICAgICAgIHN0YXRpY19mb290ZXJfZGF0YVxuICAgIH0gPSBzdGF0ZS5ET0NUT1JfU0VBUkNIXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9maWxlcywgc2VsZWN0ZWRQcm9maWxlLCBuZXdOb3RpZmljYXRpb24sIG5vdGlmaWNhdGlvbnMsIGFydGljbGVzLCBoZWFsdGhUaXBzLCBjb21tb25fdGVzdHM6IGNvbW1vbl90ZXN0cyB8fCBbXSwgc3BlY2lhbGl6YXRpb25zOiBzcGVjaWFsaXphdGlvbnMgfHwgW10sIHNlbGVjdGVkTG9jYXRpb24sIGZpbHRlckNyaXRlcmlhX2xhYiwgZmlsdGVyQ3JpdGVyaWFfb3BkLCBkZXZpY2VfaW5mbywgY29tbW9uX3BhY2thZ2U6IGNvbW1vbl9wYWNrYWdlIHx8IFtdLCBpbml0aWFsU2VydmVyRGF0YSwgb2ZmZXJMaXN0LCB1cGNvbWluZ19hcHBvaW50bWVudHMsIGNvbXBhcmVfcGFja2FnZXMsIGlwZF9wcm9jZWR1cmVzLCB0b3BfaG9zcGl0YWxzLCBjb21tb25fc2V0dGluZ3MsIGlzX2lwZF9mb3JtX3N1Ym1pdHRlZCwgc3RhdGljX2Zvb3Rlcl9kYXRhXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBsb2FkTGFiQ29tbW9uQ3JpdGVyaWFzOiAoKSA9PiBkaXNwYXRjaChsb2FkTGFiQ29tbW9uQ3JpdGVyaWFzKCkpLFxuICAgICAgICBsb2FkT1BEQ29tbW9uQ3JpdGVyaWE6IChjaXR5KSA9PiBkaXNwYXRjaChsb2FkT1BEQ29tbW9uQ3JpdGVyaWEoY2l0eSkpLFxuICAgICAgICB0b2dnbGVPUERDcml0ZXJpYTogKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCwgZmlsdGVycykgPT4gZGlzcGF0Y2godG9nZ2xlT1BEQ3JpdGVyaWEodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkLCBmaWx0ZXJzKSksXG4gICAgICAgIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhOiAodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkLCBmaWx0ZXJzKSA9PiBkaXNwYXRjaCh0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQsIGZpbHRlcnMpKSxcbiAgICAgICAgZ2V0VXNlclByb2ZpbGU6ICgpID0+IGRpc3BhdGNoKGdldFVzZXJQcm9maWxlKCkpLFxuICAgICAgICBmZXRjaEhlYXRsaFRpcDogKCkgPT4gZGlzcGF0Y2goZmV0Y2hIZWF0bGhUaXAoKSksXG4gICAgICAgIGZldGNoQXJ0aWNsZXM6ICgpID0+IGRpc3BhdGNoKGZldGNoQXJ0aWNsZXMoKSksXG4gICAgICAgIHJlc2V0RmlsdGVyczogKCkgPT4gZGlzcGF0Y2gocmVzZXRGaWx0ZXJzKCkpLFxuICAgICAgICBjbGVhckV4dHJhVGVzdHM6ICgpID0+IGRpc3BhdGNoKGNsZWFyRXh0cmFUZXN0cygpKSxcbiAgICAgICAgZ2V0U3BlY2lhbGl0eUZvb3RlckRhdGE6IChjYikgPT4gZGlzcGF0Y2goZ2V0U3BlY2lhbGl0eUZvb3RlckRhdGEoY2IpKSxcbiAgICAgICAgc2VsZWN0U2VhcmNoVHlwZTogKHR5cGUpID0+IGRpc3BhdGNoKHNlbGVjdFNlYXJjaFR5cGUodHlwZSkpLFxuICAgICAgICBnZXRPZmZlckxpc3Q6IChsYXQsIGxvbmcpID0+IGRpc3BhdGNoKGdldE9mZmVyTGlzdChsYXQsIGxvbmcpKSxcbiAgICAgICAgY2xlYXJBbGxUZXN0czogKCkgPT4gZGlzcGF0Y2goY2xlYXJBbGxUZXN0cygpKSxcbiAgICAgICAgc2V0UGFja2FnZUlkOiAocGFja2FnZV9pZCwgaXNIb21lUGFnZSkgPT4gZGlzcGF0Y2goc2V0UGFja2FnZUlkKHBhY2thZ2VfaWQsIGlzSG9tZVBhZ2UpKSxcbiAgICAgICAgZ2V0VXBDb21pbmdBcHBvaW50bWVudDogKCkgPT4gZGlzcGF0Y2goZ2V0VXBDb21pbmdBcHBvaW50bWVudCgpKSxcbiAgICAgICAgcmVzZXRQa2dDb21wYXJlOiAoKSA9PiBkaXNwYXRjaChyZXNldFBrZ0NvbXBhcmUoKSksXG4gICAgICAgIHRvZ2dsZUlQRENyaXRlcmlhOiAoY3JpdGVyaWEsIGZvcmNlQWRkKSA9PiBkaXNwYXRjaCh0b2dnbGVJUERDcml0ZXJpYShjcml0ZXJpYSwgZm9yY2VBZGQpKSxcbiAgICAgICAgbG9hZE9QREluc3VyYW5jZTogKGNpdHkpID0+IGRpc3BhdGNoKGxvYWRPUERJbnN1cmFuY2UoY2l0eSkpLFxuICAgICAgICBjbGVhclZpcFNlbGVjdGVkUGxhbjooKSA9PiBkaXNwYXRjaChjbGVhclZpcFNlbGVjdGVkUGxhbigpKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShIb21lQ2hhdCk7XG4iXSwic291cmNlUm9vdCI6IiJ9