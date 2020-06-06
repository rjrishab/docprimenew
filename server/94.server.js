exports.ids = [94];
exports.modules = {

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

const queryString = __webpack_require__(/*! query-string */ "query-string");


const GENDER = {
	"m": "Male",
	"f": "Female",
	"o": "Other"
};

class HomeChatView extends _react2.default.Component {
	constructor(props) {
		super(props);
		// let footerData = null
		// if (this.props.initialServerData) {
		// 	footerData = this.props.initialServerData.footerData
		// }
		this.state = {
			specialityFooterData: this.props.static_footer_data
		};
	}

	componentDidMount() {
		if (window) {
			window.scrollTo(0, 0);
		}

		// this.props.getSpecialityFooterData((cb) => {
		// 	this.setState({ specialityFooterData: cb });
		// });

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

	searchLab(test, isPackage = false) {
		let data;
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
			setTimeout(() => {
				this.props.history.push('/searchpackages');
			}, 100);
		} else {
			setTimeout(() => {
				this.props.history.push('/lab/searchresults');
			}, 100);
		}
	}

	searchDoctor(speciality) {
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

	render() {

		let topSpecializations = [];
		if (this.props.specializations && this.props.specializations.length) {
			topSpecializations = this.getTopList(this.props.specializations);
		}

		let topTests = [];
		if (this.props.common_tests && this.props.common_tests.length) {
			topTests = this.getTopList(this.props.common_tests);
		}

		let topPackages = [];
		if (this.props.common_package && this.props.common_package.length) {
			topPackages = this.getTopList(this.props.common_package);
		}

		let profileData = this.props.profiles[this.props.selectedProfile];
		let articles = this.props.articles || [];
		const parsed = queryString.parse(this.props.location.search);
		let SlabSequence = 0;
		if (parsed) {
			if (parsed.journey_type == 'doctor') {
				SlabSequence = 1;
			} else if (parsed.journey_type == 'lab') {
				SlabSequence = 2;
			}
		}

		let showPackageStrip = this.props.compare_packages && this.props.compare_packages.length > 0 && !this.props.isPackage;

		let slabOrder = [];
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
					canonicalUrl: `${_config2.default.API_BASE_URL}${this.props.match.url}`,
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HomePageWidget extends _react2.default.PureComponent {
    constructor(props) {
        super(props);

        this.navigateTo = (where, e) => {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }

            if (this.props.type) {
                this.props.selectSearchType(this.props.type);
            }
            this.props.historyObj.push(where);
        };

        this.state = {};
    }

    render() {

        return _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(
                "div",
                { className: "card cstm-card mb-3" },
                _react2.default.createElement("a", { className: "anchor-link", id: `${this.props.type}` }),
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
                            onClick: e => {
                                e.preventDefault();
                                this.navigateTo(this.props.linkTo);
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
                        this.props.list.slice(0, 9).map((listItem, i) => {
                            return _react2.default.createElement(
                                "div",
                                { className: "col-4 home-card-col search-icon-col md-list-hide", key: i, onClick: () => this.props.searchFunc(listItem) },
                                _react2.default.createElement(
                                    "div",
                                    { className: "grid-img-cnt" },
                                    listItem.url ? _react2.default.createElement(
                                        "a",
                                        { href: `/${listItem.url}`, onClick: e => e.preventDefault() },
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
                            { className: "col-4 home-card-col search-icon-col", key: `search${this.props.searchType}` },
                            _react2.default.createElement(
                                "div",
                                { className: "grid-img-cnt" },
                                _react2.default.createElement(
                                    "a",
                                    { href: "javascript:void(0);", onClick: () => this.navigateTo(this.props.navTo) },
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _HomeChatView = __webpack_require__(/*! ../../components/commons/Home/HomeChatView.js */ "./dev/js/components/commons/Home/HomeChatView.js");

var _HomeChatView2 = _interopRequireDefault(_HomeChatView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HomeChat extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            mergeState: false
        };
    }

    static loadData(store, match) {
        return new Promise((resolve, reject) => {
            Promise.all([store.dispatch((0, _index.loadOPDCommonCriteria)()), store.dispatch((0, _index.loadLabCommonCriterias)())]).then(() => {
                resolve({});
            }).catch(e => {
                reject();
            });
        });
    }

    componentDidMount() {
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
        setTimeout(() => {
            this.setState({ mergeState: true });
        }, 100);
    }

    render() {
        return _react2.default.createElement(_HomeChatView2.default, _extends({}, this.props, this.state));
    }
}

HomeChat.contextTypes = {
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
        profiles, selectedProfile, newNotification, notifications, articles, healthTips, device_info, offerList, upcoming_appointments, is_ipd_form_submitted
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
        common_settings
    } = state.SEARCH_CRITERIA_OPD;

    let filterCriteria_opd = state.SEARCH_CRITERIA_OPD.filterCriteria;

    let {
        static_footer_data
    } = state.DOCTOR_SEARCH;

    return {
        profiles, selectedProfile, newNotification, notifications, articles, healthTips, common_tests: common_tests || [], specializations: specializations || [], selectedLocation, filterCriteria_lab, filterCriteria_opd, device_info, common_package: common_package || [], initialServerData, offerList, upcoming_appointments, compare_packages, ipd_procedures, top_hospitals, common_settings, is_ipd_form_submitted, static_footer_data
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
        clearVipSelectedPlan: () => dispatch((0, _index.clearVipSelectedPlan)())
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HomeChat);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvSG9tZUNoYXRWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvSG9tZS9Ib21lUGFnZVdpZGdldC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9jb21tb25zL0hvbWVDaGF0LmpzIl0sIm5hbWVzIjpbInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIkdFTkRFUiIsIkhvbWVDaGF0VmlldyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwic3BlY2lhbGl0eUZvb3RlckRhdGEiLCJzdGF0aWNfZm9vdGVyX2RhdGEiLCJjb21wb25lbnREaWRNb3VudCIsIndpbmRvdyIsInNjcm9sbFRvIiwic2VsZWN0ZWRMb2NhdGlvbiIsImxhdCIsImxvbmciLCJnZW9tZXRyeSIsImxvY2F0aW9uIiwibG5nIiwiZ2V0T2ZmZXJMaXN0IiwibmF2aWdhdGVUbyIsIndoZXJlIiwidHlwZSIsImRhdGEiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJzZWxlY3RTZWFyY2hUeXBlIiwiaGlzdG9yeSIsInB1c2giLCJnZXRBZ2UiLCJiaXJ0aGRheSIsIkRhdGUiLCJhZ2VEaWZNcyIsIm5vdyIsImdldFRpbWUiLCJhZ2VEYXRlIiwiTWF0aCIsImFicyIsImdldFVUQ0Z1bGxZZWFyIiwic2VhcmNoTGFiIiwidGVzdCIsImlzUGFja2FnZSIsInNldFBhY2thZ2VJZCIsImlkIiwiR1RNIiwiZ2V0VXNlcklkIiwibmFtZSIsInRvZ2dsZURpYWdub3Npc0NyaXRlcmlhIiwic2VuZEV2ZW50Iiwic2V0VGltZW91dCIsInNlYXJjaERvY3RvciIsInNwZWNpYWxpdHkiLCJ1cmwiLCJ0b2dnbGVPUERDcml0ZXJpYSIsImdvdFRvU2lnbnVwIiwiZ290VG9Eb2N0b3JTaWdudXAiLCJpc0xhYiIsImdldFRvcExpc3QiLCJsaXN0IiwidG9wTGlzdCIsImxlbmd0aCIsInNsaWNlIiwicmVuZGVyIiwidG9wU3BlY2lhbGl6YXRpb25zIiwic3BlY2lhbGl6YXRpb25zIiwidG9wVGVzdHMiLCJjb21tb25fdGVzdHMiLCJ0b3BQYWNrYWdlcyIsImNvbW1vbl9wYWNrYWdlIiwicHJvZmlsZURhdGEiLCJwcm9maWxlcyIsInNlbGVjdGVkUHJvZmlsZSIsImFydGljbGVzIiwicGFyc2VkIiwicGFyc2UiLCJzZWFyY2giLCJTbGFiU2VxdWVuY2UiLCJqb3VybmV5X3R5cGUiLCJzaG93UGFja2FnZVN0cmlwIiwiY29tcGFyZV9wYWNrYWdlcyIsInNsYWJPcmRlciIsImRldmljZV9pbmZvIiwib2ZmZXJMaXN0IiwiY2Fub25pY2FsVXJsIiwiQ09ORklHIiwiQVBJX0JBU0VfVVJMIiwibWF0Y2giLCJvZ1VybCIsIm9nVHlwZSIsIm9nVGl0bGUiLCJvZ0Rlc2NyaXB0aW9uIiwib2dJbWFnZSIsIkhvbWVQYWdlV2lkZ2V0IiwiUHVyZUNvbXBvbmVudCIsImhpc3RvcnlPYmoiLCJqdXN0aWZ5Q29udGVudCIsImhlYWRpbmciLCJzZWFyY2hUeXBlIiwiY3Vyc29yIiwibGlua1RvIiwiZGlzY291bnQiLCJtYXAiLCJsaXN0SXRlbSIsImkiLCJzZWFyY2hGdW5jIiwic3ZnX2ljb24iLCJpY29uIiwibmF2VG8iLCJBU1NFVFNfQkFTRV9VUkwiLCJIb21lQ2hhdCIsIm1lcmdlU3RhdGUiLCJsb2FkRGF0YSIsInN0b3JlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhbGwiLCJkaXNwYXRjaCIsInRoZW4iLCJjYXRjaCIsIlNUT1JBR0UiLCJjaGVja0F1dGgiLCJnZXRVc2VyUHJvZmlsZSIsImdldFVwQ29taW5nQXBwb2ludG1lbnQiLCJsb2NhbGl0eSIsImxvYWRMYWJDb21tb25Dcml0ZXJpYXMiLCJsb2FkT1BEQ29tbW9uQ3JpdGVyaWEiLCJyZXNldEZpbHRlcnMiLCJjbGVhckV4dHJhVGVzdHMiLCJzZXRTdGF0ZSIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsInBhc3NlZFByb3BzIiwiaW5pdGlhbFNlcnZlckRhdGEiLCJzdGF0aWNDb250ZXh0IiwibmV3Tm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9ucyIsImhlYWx0aFRpcHMiLCJ1cGNvbWluZ19hcHBvaW50bWVudHMiLCJpc19pcGRfZm9ybV9zdWJtaXR0ZWQiLCJVU0VSIiwiTE9BREVEX1NFQVJDSF9DUklURVJJQV9MQUIiLCJTRUFSQ0hfQ1JJVEVSSUFfTEFCUyIsImZpbHRlckNyaXRlcmlhX2xhYiIsImZpbHRlckNyaXRlcmlhIiwiTE9BREVEX1NFQVJDSF9DUklURVJJQV9PUEQiLCJpcGRfcHJvY2VkdXJlcyIsInRvcF9ob3NwaXRhbHMiLCJjb21tb25fc2V0dGluZ3MiLCJTRUFSQ0hfQ1JJVEVSSUFfT1BEIiwiZmlsdGVyQ3JpdGVyaWFfb3BkIiwiRE9DVE9SX1NFQVJDSCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNpdHkiLCJjcml0ZXJpYSIsImZvcmNlQWRkIiwiZmlsdGVycyIsImZldGNoSGVhdGxoVGlwIiwiZmV0Y2hBcnRpY2xlcyIsImdldFNwZWNpYWxpdHlGb290ZXJEYXRhIiwiY2IiLCJjbGVhckFsbFRlc3RzIiwicGFja2FnZV9pZCIsImlzSG9tZVBhZ2UiLCJyZXNldFBrZ0NvbXBhcmUiLCJ0b2dnbGVJUERDcml0ZXJpYSIsImxvYWRPUERJbnN1cmFuY2UiLCJjbGVhclZpcFNlbGVjdGVkUGxhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRkEsTUFBTUEsY0FBY0MsbUJBQU9BLENBQUMsa0NBQVIsQ0FBcEI7OztBQUlBLE1BQU1DLFNBQVM7QUFDZCxNQUFLLE1B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eUgsVUFBRCxFQUFhQyxVQUFiLEtBQTRCL0MsU0FBUyx5QkFBYThDLFVBQWIsRUFBeUJDLFVBQXpCLENBQVQsQ0FkdkM7QUFlSHpDLGdDQUF3QixNQUFNTixTQUFTLG9DQUFULENBZjNCO0FBZ0JIZ0QseUJBQWlCLE1BQU1oRCxTQUFTLDZCQUFULENBaEJwQjtBQWlCSGlELDJCQUFtQixDQUFDWCxRQUFELEVBQVdDLFFBQVgsS0FBd0J2QyxTQUFTLDhCQUFrQnNDLFFBQWxCLEVBQTRCQyxRQUE1QixDQUFULENBakJ4QztBQWtCSFcsMEJBQW1CYixJQUFELElBQVVyQyxTQUFTLDZCQUFpQnFDLElBQWpCLENBQVQsQ0FsQnpCO0FBbUJIYyw4QkFBcUIsTUFBTW5ELFNBQVMsa0NBQVQ7QUFuQnhCLEtBQVA7QUFxQkgsQ0F0QkQ7O2tCQXlCZSx5QkFBUWUsZUFBUixFQUF5QnFCLGtCQUF6QixFQUE2QzVDLFFBQTdDLEMiLCJmaWxlIjoiOTQuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJ1xuaW1wb3J0IENoYXRQYW5lbCBmcm9tICcuLi9DaGF0UGFuZWwnXG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi9IZWxtZXRUYWdzJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vLi4vY29uZmlnJ1xuaW1wb3J0IEhvbWVQYWdlV2lkZ2V0IGZyb20gJy4vSG9tZVBhZ2VXaWRnZXQnXG5pbXBvcnQgQWNjb3JkaWFuIGZyb20gJy4vQWNjb3JkaWFuJ1xuaW1wb3J0IEZpeGVkTW9iaWxlRm9vdGVyIGZyb20gJy4vRml4ZWRNb2JpbGVGb290ZXInXG5pbXBvcnQgQmFubmVyQ2Fyb3VzZWwgZnJvbSAnLi9iYW5uZXJDYXJvdXNlbCc7XG5pbXBvcnQgVXBDb21pbmdBcHBvaW50bWVudFZpZXcgZnJvbSAnLi91cENvbWluZ0FwcG9pbnRtZW50LmpzJ1xuaW1wb3J0IFBhY2thZ2VDb21wYXJlU3RyaXAgZnJvbSAnLi4vLi4vZGlhZ25vc2lzL3NlYXJjaFBhY2thZ2VzL3BhY2thZ2VDb21wYXJlL3BhY2thZ2VDb21wYXJlU3RyaXAuanMnXG5pbXBvcnQgSG9tZVBhZ2VQYWNrYWdlV2lkZ2V0IGZyb20gJy4vSG9tZVBhZ2VQYWNrYWdlV2lkZ2V0LmpzJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcbmltcG9ydCBIb21lUGFnZVRvcEhvc3BpdGFscyBmcm9tICcuL0hvbWVQYWdlVG9wSG9zcGl0YWxzLmpzJ1xuaW1wb3J0IEhvbWVQYWdlVG9wUHJvY2VkdXJlcyBmcm9tICcuL0hvbWVQYWdlUHJvY2VkdXJlV2lkZ2V0cy5qcydcblxuY29uc3QgR0VOREVSID0ge1xuXHRcIm1cIjogXCJNYWxlXCIsXG5cdFwiZlwiOiBcIkZlbWFsZVwiLFxuXHRcIm9cIjogXCJPdGhlclwiXG59XG5cbmNsYXNzIEhvbWVDaGF0VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdC8vIGxldCBmb290ZXJEYXRhID0gbnVsbFxuXHRcdC8vIGlmICh0aGlzLnByb3BzLmluaXRpYWxTZXJ2ZXJEYXRhKSB7XG5cdFx0Ly8gXHRmb290ZXJEYXRhID0gdGhpcy5wcm9wcy5pbml0aWFsU2VydmVyRGF0YS5mb290ZXJEYXRhXG5cdFx0Ly8gfVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzcGVjaWFsaXR5Rm9vdGVyRGF0YTogdGhpcy5wcm9wcy5zdGF0aWNfZm9vdGVyX2RhdGFcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRpZiAod2luZG93KSB7XG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgMClcblx0XHR9XG5cblx0XHQvLyB0aGlzLnByb3BzLmdldFNwZWNpYWxpdHlGb290ZXJEYXRhKChjYikgPT4ge1xuXHRcdC8vIFx0dGhpcy5zZXRTdGF0ZSh7IHNwZWNpYWxpdHlGb290ZXJEYXRhOiBjYiB9KTtcblx0XHQvLyB9KTtcblxuXHRcdGxldCBzZWxlY3RlZExvY2F0aW9uID0gJydcblx0XHRsZXQgbGF0ID0gMjguNjQ0ODAwXG5cdFx0bGV0IGxvbmcgPSA3Ny4yMTY3MjFcblx0XHRpZiAodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKSB7XG5cdFx0XHRzZWxlY3RlZExvY2F0aW9uID0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uO1xuXHRcdFx0bGF0ID0gc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sYXRcblx0XHRcdGxvbmcgPSBzZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ1xuXHRcdFx0aWYgKHR5cGVvZiBsYXQgPT09ICdmdW5jdGlvbicpIGxhdCA9IGxhdCgpXG5cdFx0XHRpZiAodHlwZW9mIGxvbmcgPT09ICdmdW5jdGlvbicpIGxvbmcgPSBsb25nKClcblx0XHR9XG5cblx0XHR0aGlzLnByb3BzLmdldE9mZmVyTGlzdChsYXQsIGxvbmcpO1xuXG5cdH1cblxuXG5cdG5hdmlnYXRlVG8od2hlcmUsIHR5cGUsIGRhdGEsIGUpIHtcblx0XHRpZiAoZSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpXG5cdFx0fVxuXHRcdGlmICh0eXBlKSB7XG5cdFx0XHR0aGlzLnByb3BzLnNlbGVjdFNlYXJjaFR5cGUodHlwZSlcblx0XHR9XG5cdFx0aWYgKHdoZXJlID09ICcvY2hhdCcpIHtcblx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHdoZXJlLCBkYXRhKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCh3aGVyZSlcblx0XHR9XG5cdH1cblxuXHRnZXRBZ2UoYmlydGhkYXkpIHtcblx0XHRiaXJ0aGRheSA9IG5ldyBEYXRlKGJpcnRoZGF5KVxuXHRcdHZhciBhZ2VEaWZNcyA9IERhdGUubm93KCkgLSBiaXJ0aGRheS5nZXRUaW1lKCk7XG5cdFx0dmFyIGFnZURhdGUgPSBuZXcgRGF0ZShhZ2VEaWZNcyk7IC8vIG1pbGlzZWNvbmRzIGZyb20gZXBvY2hcblx0XHRyZXR1cm4gTWF0aC5hYnMoYWdlRGF0ZS5nZXRVVENGdWxsWWVhcigpIC0gMTk3MCk7XG5cdH1cblxuXHRzZWFyY2hMYWIodGVzdCwgaXNQYWNrYWdlID0gZmFsc2UpIHtcblx0XHRsZXQgZGF0YVxuXHRcdGlmIChpc1BhY2thZ2UpIHtcblx0XHRcdHRlc3QudHlwZSA9ICdwYWNrYWdlJ1xuXHRcdFx0dGhpcy5wcm9wcy5zZXRQYWNrYWdlSWQodGVzdC5pZCwgdHJ1ZSlcblx0XHRcdGRhdGEgPSB7XG5cdFx0XHRcdCdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnU2VsZWN0ZWRIZWFsdGhQYWNrYWdlJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnc2VsZWN0ZWQtaGVhbHRoLXBhY2thZ2UnLCAnc2VsZWN0ZWQnOiB0ZXN0Lm5hbWUgfHwgJycsICdzZWxlY3RlZElkJzogdGVzdC5pZCB8fCAnJ1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0ZXN0LnR5cGUgPSAndGVzdCdcblx0XHRcdHRoaXMucHJvcHMudG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEoJ3Rlc3QnLCB0ZXN0LCB0cnVlKVxuXHRcdFx0ZGF0YSA9IHtcblx0XHRcdFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdTZWxlY3RlZEJvb2tUZXN0JywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnc2VsZWN0ZWQtYm9vay10ZXN0JywgJ3NlbGVjdGVkJzogdGVzdC5uYW1lIHx8ICcnLCAnc2VsZWN0ZWRJZCc6IHRlc3QuaWQgfHwgJydcblx0XHRcdH1cblx0XHR9XG5cblx0XHRHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG5cdFx0aWYgKGlzUGFja2FnZSkge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvc2VhcmNocGFja2FnZXMnKVxuXHRcdFx0fSwgMTAwKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9sYWIvc2VhcmNocmVzdWx0cycpXG5cdFx0XHR9LCAxMDApXG5cdFx0fVxuXHR9XG5cblx0c2VhcmNoRG9jdG9yKHNwZWNpYWxpdHkpIHtcblx0XHRpZiAoc3BlY2lhbGl0eS51cmwpIHtcblx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHtzcGVjaWFsaXR5LnVybH1gKVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHNwZWNpYWxpdHkudHlwZSA9ICdzcGVjaWFsaXR5J1xuXHRcdFx0dGhpcy5wcm9wcy50b2dnbGVPUERDcml0ZXJpYSgnc3BlY2lhbGl0eScsIHNwZWNpYWxpdHksIHRydWUpXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9vcGQvc2VhcmNocmVzdWx0cycpXG5cdFx0XHR9LCAxMDApXG5cdFx0fVxuXHRcdGxldCBkYXRhID0ge1xuXHRcdFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdTZWxlY3RlZERvY3RvclNwZWNpYWxpemF0aW9ucycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3NlbGVjdGVkLWRvY3Rvci1zcGVjaWFsaXphdGlvbnMnLCAnc2VsZWN0ZWQnOiBzcGVjaWFsaXR5Lm5hbWUgfHwgJycsICdzZWxlY3RlZElkJzogc3BlY2lhbGl0eS5pZCB8fCAnJ1xuXHRcdH1cblx0XHRHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXHR9XG5cblx0Z290VG9TaWdudXAoKSB7XG5cdFx0bGV0IGRhdGEgPSB7XG5cdFx0XHQnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0hvbWVwYWdlQmFubmVyU2lnbnVwQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2hvbWVwYWdlLWJhbm5lci1zaWdudXAtY2xpY2tlZCdcblx0XHR9XG5cdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3VzZXI/cmVmPWhvbWUnKVxuXHR9XG5cblx0Z290VG9Eb2N0b3JTaWdudXAoaXNMYWIpIHtcblx0XHRsZXQgZGF0YVxuXHRcdGlmIChpc0xhYikge1xuXHRcdFx0ZGF0YSA9IHtcblx0XHRcdFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdSdW5MYWJCYW5uZXJDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAncnVuLWxhYi1iYW5uZXItY2xpY2tlZCdcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGF0YSA9IHtcblx0XHRcdFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdSdW5DbGluaWNCYW5uZXJDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAncnVuLWNsaW5pYy1iYW5uZXItY2xpY2tlZCdcblx0XHRcdH1cblx0XHR9XG5cdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2RvY3RvcnNpZ251cCcpXG5cdH1cblxuXHRnZXRUb3BMaXN0KGxpc3QpIHtcblx0XHRsZXQgdG9wTGlzdCA9IFtdXG5cdFx0aWYgKGxpc3QubGVuZ3RoID4gNSkge1xuXHRcdFx0dG9wTGlzdCA9IGxpc3Quc2xpY2UoMCwgNSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dG9wTGlzdCA9IGxpc3Rcblx0XHR9XG5cdFx0cmV0dXJuIHRvcExpc3Rcblx0fVxuXG5cdHJlbmRlcigpIHtcblxuXHRcdGxldCB0b3BTcGVjaWFsaXphdGlvbnMgPSBbXVxuXHRcdGlmICh0aGlzLnByb3BzLnNwZWNpYWxpemF0aW9ucyAmJiB0aGlzLnByb3BzLnNwZWNpYWxpemF0aW9ucy5sZW5ndGgpIHtcblx0XHRcdHRvcFNwZWNpYWxpemF0aW9ucyA9IHRoaXMuZ2V0VG9wTGlzdCh0aGlzLnByb3BzLnNwZWNpYWxpemF0aW9ucylcblx0XHR9XG5cblx0XHRsZXQgdG9wVGVzdHMgPSBbXVxuXHRcdGlmICh0aGlzLnByb3BzLmNvbW1vbl90ZXN0cyAmJiB0aGlzLnByb3BzLmNvbW1vbl90ZXN0cy5sZW5ndGgpIHtcblx0XHRcdHRvcFRlc3RzID0gdGhpcy5nZXRUb3BMaXN0KHRoaXMucHJvcHMuY29tbW9uX3Rlc3RzKVxuXHRcdH1cblxuXHRcdGxldCB0b3BQYWNrYWdlcyA9IFtdXG5cdFx0aWYgKHRoaXMucHJvcHMuY29tbW9uX3BhY2thZ2UgJiYgdGhpcy5wcm9wcy5jb21tb25fcGFja2FnZS5sZW5ndGgpIHtcblx0XHRcdHRvcFBhY2thZ2VzID0gdGhpcy5nZXRUb3BMaXN0KHRoaXMucHJvcHMuY29tbW9uX3BhY2thZ2UpXG5cdFx0fVxuXG5cdFx0bGV0IHByb2ZpbGVEYXRhID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV1cblx0XHRsZXQgYXJ0aWNsZXMgPSB0aGlzLnByb3BzLmFydGljbGVzIHx8IFtdXG5cdFx0Y29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cdFx0bGV0IFNsYWJTZXF1ZW5jZSA9IDBcblx0XHRpZiAocGFyc2VkKSB7XG5cdFx0XHRpZiAocGFyc2VkLmpvdXJuZXlfdHlwZSA9PSAnZG9jdG9yJykge1xuXHRcdFx0XHRTbGFiU2VxdWVuY2UgPSAxXG5cdFx0XHR9IGVsc2UgaWYgKHBhcnNlZC5qb3VybmV5X3R5cGUgPT0gJ2xhYicpIHtcblx0XHRcdFx0U2xhYlNlcXVlbmNlID0gMlxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCBzaG93UGFja2FnZVN0cmlwID0gdGhpcy5wcm9wcy5jb21wYXJlX3BhY2thZ2VzICYmIHRoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcy5sZW5ndGggPiAwICYmICF0aGlzLnByb3BzLmlzUGFja2FnZVxuXG5cdFx0bGV0IHNsYWJPcmRlciA9IFtdXG5cdFx0aWYgKHRoaXMucHJvcHMuZGV2aWNlX2luZm8gIT0gXCJkZXNrdG9wXCIgJiYgU2xhYlNlcXVlbmNlKSB7XG5cblx0XHRcdHNsYWJPcmRlci5wdXNoKDxDaGF0UGFuZWwga2V5PVwiMVwiIGhvbWVQYWdlPXt0cnVlfSBjaGF0UGFnZT17dHJ1ZX0gb2ZmZXJMaXN0PXt0aGlzLnByb3BzLm9mZmVyTGlzdH0gd2ViQ2hhdFBhZ2U9e3RydWV9Lz4pXG5cdFx0XHQvKnNsYWJPcmRlci5wdXNoKFxuXHRcdFx0XHQ8ZGl2IGtleT1cIjJcIiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtY2FyZC1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxVcENvbWluZ0FwcG9pbnRtZW50VmlldyB7Li4udGhpcy5wcm9wc30gLz5cblx0XHRcdFx0XHRcdDxIb21lUGFnZVdpZGdldFxuXHRcdFx0XHRcdFx0XHRoZWFkaW5nPVwiRmluZCBhIERvY3RvclwiXG5cdFx0XHRcdFx0XHRcdGRpc2NvdW50PVwiNTAlXCJcblx0XHRcdFx0XHRcdFx0bGlzdD17dG9wU3BlY2lhbGl6YXRpb25zfVxuXHRcdFx0XHRcdFx0XHRzZWFyY2hGdW5jPXsoc3ApID0+IHRoaXMuc2VhcmNoRG9jdG9yKHNwKX1cblx0XHRcdFx0XHRcdFx0c2VhcmNoVHlwZT1cInNwZWNpYWxpemF0aW9uc1wiXG5cdFx0XHRcdFx0XHRcdHsuLi50aGlzLnByb3BzfVxuXHRcdFx0XHRcdFx0XHRuYXZUbz1cIi9zZWFyY2g/ZnJvbT1ob21lXCJcblx0XHRcdFx0XHRcdFx0dHlwZT1cIm9wZFwiXG5cdFx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMub2ZmZXJMaXN0ICYmIHRoaXMucHJvcHMub2ZmZXJMaXN0LmZpbHRlcih4ID0+IHguc2xpZGVyX2xvY2F0aW9uID09PSAnb25saW5lX2NvbnN1bHRhdGlvbicpLmxlbmd0aCA/XG5cdFx0XHRcdFx0XHRcdFx0PEJhbm5lckNhcm91c2VsIHsuLi50aGlzLnByb3BzfSBoaWRlQ2xhc3M9XCJkLW1kLW5vbmVcIiBzbGlkZXJMb2NhdGlvbj1cIm9ubGluZV9jb25zdWx0YXRpb25cIiAvPiA6ICcnXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZnctNTAwIGRvYy1sYXAtbGluayBkLW1kLW5vbmVcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidG9wLWhlYWQtbGluayBjYXJkLWxhYi1saW5rXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9kb2N0b3JzaWdudXAnKX0+UmVnaXN0ZXIgeW91ciBjbGluaWMgb3IgSG9zcGl0YWwgPGltZyB3aWR0aD1cIjE4cHhcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9hcnJvdy1saW5rLnN2Z1wifSAvPjwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj4pKi9cblxuXHRcdFx0LypzbGFiT3JkZXIucHVzaChcblx0XHRcdFx0PGRpdiBrZXk9XCIzXCIgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWNhcmQtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8VXBDb21pbmdBcHBvaW50bWVudFZpZXcgey4uLnRoaXMucHJvcHN9IC8+XG5cdFx0XHRcdFx0XHQ8SG9tZVBhZ2VXaWRnZXRcblx0XHRcdFx0XHRcdFx0aGVhZGluZz1cIkJvb2sgYSBUZXN0XCJcblx0XHRcdFx0XHRcdFx0ZGlzY291bnQ9XCI1MCVcIlxuXHRcdFx0XHRcdFx0XHRsaXN0PXt0b3BUZXN0c31cblx0XHRcdFx0XHRcdFx0c2VhcmNoRnVuYz17KGN0KSA9PiB0aGlzLnNlYXJjaExhYihjdCwgZmFsc2UpfVxuXHRcdFx0XHRcdFx0XHRzZWFyY2hUeXBlPVwidGVzdHNcIlxuXHRcdFx0XHRcdFx0XHR7Li4udGhpcy5wcm9wc31cblx0XHRcdFx0XHRcdFx0bmF2VG89XCIvc2VhcmNoP2Zyb209aG9tZVwiXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJsYWJcIlxuXHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmNvbW1vbl9wYWNrYWdlICYmIHRoaXMucHJvcHMuY29tbW9uX3BhY2thZ2UubGVuZ3RoID9cblx0XHRcdFx0XHRcdFx0XHQ8SG9tZVBhZ2VQYWNrYWdlV2lkZ2V0XG5cdFx0XHRcdFx0XHRcdFx0XHRoZWFkaW5nPVwiSGVhbHRoIFBhY2thZ2VzXCJcblx0XHRcdFx0XHRcdFx0XHRcdGRpc2NvdW50PVwiNTAlXCJcblx0XHRcdFx0XHRcdFx0XHRcdGxpc3Q9e3RvcFBhY2thZ2VzfVxuXHRcdFx0XHRcdFx0XHRcdFx0c2VhcmNoRnVuYz17KGN0KSA9PiB0aGlzLnNlYXJjaExhYihjdCwgdHJ1ZSl9XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwicGFja2FnZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRzZWFyY2hUeXBlPVwicGFja2FnZXNcIlxuXHRcdFx0XHRcdFx0XHRcdFx0ey4uLnRoaXMucHJvcHN9XG5cdFx0XHRcdFx0XHRcdFx0XHRsaW5rVG89XCIvZnVsbC1ib2R5LWNoZWNrdXAtaGVhbHRoLXBhY2thZ2VzP2Zyb209aG9tZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBuYXZUbz1cIi9oZWFsdGgtcGFja2FnZS1hZHZpc29yXCJcblx0XHRcdFx0XHRcdFx0XHRcdG5hdlRvPVwiL3NlYXJjaHBhY2thZ2VzXCJcblx0XHRcdFx0XHRcdFx0XHQvPiA6IFwiXCJcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlwZF9wcm9jZWR1cmVzICYmIHRoaXMucHJvcHMuaXBkX3Byb2NlZHVyZXMubGVuZ3RoID9cblx0XHRcdFx0XHRcdFx0XHQ8SG9tZVBhZ2VUb3BQcm9jZWR1cmVzIHsuLi50aGlzLnByb3BzfSB0b3BfZGF0YT17dGhpcy5wcm9wcy5pcGRfcHJvY2VkdXJlc30gLz5cblx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy50b3BfaG9zcGl0YWxzICYmIHRoaXMucHJvcHMudG9wX2hvc3BpdGFscy5sZW5ndGggP1xuXHRcdFx0XHRcdFx0XHRcdDxIb21lUGFnZVRvcEhvc3BpdGFscyB7Li4udGhpcy5wcm9wc30gdG9wX2RhdGE9e3RoaXMucHJvcHMudG9wX2hvc3BpdGFsc30gLz5cblx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+KVxuXG5cdFx0XHRsZXQgdGVtcFxuXHRcdFx0Zm9yICh2YXIgaiA9IFNsYWJTZXF1ZW5jZTsgaiA+IDA7IGotLSkge1xuXHRcdFx0XHR0ZW1wID0gc2xhYk9yZGVyW2pdXG5cdFx0XHRcdHNsYWJPcmRlcltqXSA9IHNsYWJPcmRlcltqIC0gMV1cblx0XHRcdFx0c2xhYk9yZGVyW2ogLSAxXSA9IHRlbXBcblx0XHRcdH0qL1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0c2xhYk9yZGVyLnB1c2goPENoYXRQYW5lbCBrZXk9XCIxMlwiIGhvbWVQYWdlPXt0cnVlfSBjaGF0UGFnZT17dHJ1ZX0gb2ZmZXJMaXN0PXt0aGlzLnByb3BzLm9mZmVyTGlzdH0gd2ViQ2hhdFBhZ2U9e3RydWV9IC8+KVxuXHRcdFx0Ly9zbGFiT3JkZXIucHVzaChcblx0XHRcdFx0ey8qPGRpdiBrZXk9XCIyMlwiIGNsYXNzTmFtZT1cImNvbC1tZC01XCI+Ki99XG5cdFx0XHRcdFx0ey8qPGRpdiBjbGFzc05hbWU9XCJyaWdodC1jYXJkLWNvbnRhaW5lclwiPiovfVxuXHRcdFx0XHRcdFx0ey8qPFVwQ29taW5nQXBwb2ludG1lbnRWaWV3IHsuLi50aGlzLnByb3BzfSAvPiovfVxuXHRcdFx0XHRcdFx0ey8qIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhISFwcm9maWxlRGF0YSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1zaWdudXAtYmFubmVyXCIgb25DbGljaz17dGhpcy5nb3RUb1NpZ251cC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWNvbnRlbnQtaG9tZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWxmdC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJuLXVwLXR4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2V0IGV4dHJhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2lnbi11cC1vZmZlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oK5IDMwMCBPRkZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibi1kb3duLW9mZmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbiBib29raW5nc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzaWdudXAtYnRuLWJhbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWdudXAgTm93IDxpbWcgY2xhc3NOYW1lPVwiaW1nLWFyd3BcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9yZ3RhcncucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcblx0XHRcdFx0XHRcdH0gKi99XG5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0Lyp0aGlzLnByb3BzLnRvcF9ob3NwaXRhbHMgJiYgdGhpcy5wcm9wcy50b3BfaG9zcGl0YWxzLmxlbmd0aCA/XG5cdFx0XHRcdFx0XHRcdFx0PEhvbWVQYWdlVG9wSG9zcGl0YWxzIHsuLi50aGlzLnByb3BzfSB0b3BfZGF0YT17dGhpcy5wcm9wcy50b3BfaG9zcGl0YWxzfSAvPlxuXHRcdFx0XHRcdFx0XHRcdDogJycqL1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdC8qdGhpcy5wcm9wcy5pcGRfcHJvY2VkdXJlcyAmJiB0aGlzLnByb3BzLmlwZF9wcm9jZWR1cmVzLmxlbmd0aCA/XG5cdFx0XHRcdFx0XHRcdFx0PEhvbWVQYWdlVG9wUHJvY2VkdXJlcyB7Li4udGhpcy5wcm9wc30gdG9wX2RhdGE9e3RoaXMucHJvcHMuaXBkX3Byb2NlZHVyZXN9IC8+XG5cdFx0XHRcdFx0XHRcdFx0OiAnJyovXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0Lyp0aGlzLnByb3BzLmNvbW1vbl9wYWNrYWdlICYmIHRoaXMucHJvcHMuY29tbW9uX3BhY2thZ2UubGVuZ3RoID9cblx0XHRcdFx0XHRcdFx0XHQ8SG9tZVBhZ2VQYWNrYWdlV2lkZ2V0XG5cdFx0XHRcdFx0XHRcdFx0XHRoZWFkaW5nPVwiSGVhbHRoIFBhY2thZ2VzXCJcblx0XHRcdFx0XHRcdFx0XHRcdGRpc2NvdW50PVwiNTAlXCJcblx0XHRcdFx0XHRcdFx0XHRcdGxpc3Q9e3RvcFBhY2thZ2VzfVxuXHRcdFx0XHRcdFx0XHRcdFx0c2VhcmNoRnVuYz17KGN0KSA9PiB0aGlzLnNlYXJjaExhYihjdCwgdHJ1ZSl9XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwicGFja2FnZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRzZWFyY2hUeXBlPVwicGFja2FnZXNcIlxuXHRcdFx0XHRcdFx0XHRcdFx0ey4uLnRoaXMucHJvcHN9XG5cdFx0XHRcdFx0XHRcdFx0XHRsaW5rVG89XCIvZnVsbC1ib2R5LWNoZWNrdXAtaGVhbHRoLXBhY2thZ2VzP2Zyb209aG9tZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBuYXZUbz1cIi9oZWFsdGgtcGFja2FnZS1hZHZpc29yXCJcblx0XHRcdFx0XHRcdFx0XHRcdG5hdlRvPVwiL3NlYXJjaHBhY2thZ2VzXCJcblx0XHRcdFx0XHRcdFx0XHQvPiA6IFwiXCIqL1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR7LyogeCByYXkgbGFuZGluZyBwYWdlIGNhcmRzICovfVxuXHRcdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwieHJheS1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInhyYXktaGVhZGluZ1wiPkNoZXN0IFgtcmF5czwvaDE+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwieHJheS1jYXJkc1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTdcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwieHJheUNhcmRNYWluSGVhZGluZ1wiPkFQICYgTEFUICBWaWV3PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ4cmF5Q2FyZFN1YkhlYWRpbmdcIj5BdmFpbGFibGUgaW4gMjI0IExhYnMgPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC01IHRleHQtcmlnaHRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwieHJheS1zdHJ0bmdcIj5TdGFydGluZyBhdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwieHJheS1wZmZlclwiPlNhdmUgdXB0byA0MCUgPHNwYW4gY2xhc3NOYW1lPVwieHJheS1wcmljZVwiPuKCuSA3MDA8L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cInhyYXlCdG5cIj5TZWxlY3QgTGFiPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj4gKi99XG5cdFx0XHRcdFx0XHR7LyogeCByYXkgbGFuZGluZyBwYWdlIGNhcmRzICovfVxuXG5cdFx0XHRcdFx0XHR7Lyo8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1jb250LWhlaWdodCBob21lLXBhZ2UtYmFubmVyLWRpdlwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhpZGRlckJhbm5lciBiYW5uZXItY2Fyb3VzZWwtZGl2IGQtbWQtbm9uZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGl2SGVpZ2h0XCI+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5vZmZlckxpc3QgJiYgdGhpcy5wcm9wcy5vZmZlckxpc3QuZmlsdGVyKHggPT4geC5zbGlkZXJfbG9jYXRpb24gPT09ICdvbmxpbmVfY29uc3VsdGF0aW9uJykubGVuZ3RoID9cblx0XHRcdFx0XHRcdFx0XHRcdDxCYW5uZXJDYXJvdXNlbCB7Li4udGhpcy5wcm9wc30gaGlkZUNsYXNzPVwiZC1tZC1ub25lXCIgc2xpZGVyTG9jYXRpb249XCJvbmxpbmVfY29uc3VsdGF0aW9uXCIgLz4gOiAnJ1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8L2Rpdj4qL31cblxuXHRcdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwiZnctNTAwIGRvYy1sYXAtbGlua1wiIG9uQ2xpY2s9e3RoaXMuZ290VG9Eb2N0b3JTaWdudXAuYmluZCh0aGlzLCBmYWxzZSl9PlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0b3AtaGVhZC1saW5rIGNhcmQtbGFiLWxpbmtcIj5SdW4gYSBjbGluaWM/IEluY3JlYXNlIHlvdXI8c3Bhbj5yZWFjaCAmIGJyYW5kIE5PVyE8L3NwYW4+IDwvcD5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJsYXAtZG9jLWJ0blwiID5Kb2luIHVzIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWFyd3BcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9yZ3RhcncucG5nXCJ9IC8+IDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+ICovfVxuXG5cdFx0XHRcdFx0XHR7Lyo8SG9tZVBhZ2VXaWRnZXRcblx0XHRcdFx0XHRcdFx0aGVhZGluZz1cIkJvb2sgRG9jdG9yIEFwcG9pbnRtZW50XCJcblx0XHRcdFx0XHRcdFx0ZGlzY291bnQ9XCI1MCVcIlxuXHRcdFx0XHRcdFx0XHRsaXN0PXt0b3BTcGVjaWFsaXphdGlvbnN9XG5cdFx0XHRcdFx0XHRcdHNlYXJjaEZ1bmM9eyhzcCkgPT4gdGhpcy5zZWFyY2hEb2N0b3Ioc3ApfVxuXHRcdFx0XHRcdFx0XHRzZWFyY2hUeXBlPVwic3BlY2lhbGl6YXRpb25zXCJcblx0XHRcdFx0XHRcdFx0ey4uLnRoaXMucHJvcHN9XG5cdFx0XHRcdFx0XHRcdG5hdlRvPVwiL3NlYXJjaD9mcm9tPWhvbWVcIlxuXHRcdFx0XHRcdFx0XHR0eXBlPVwib3BkXCJcblx0XHRcdFx0XHRcdC8+Ki99XG5cblx0XHRcdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZ3LTUwMCBkb2MtbGFwLWxpbmtcIiBvbkNsaWNrPXt0aGlzLmdvdFRvRG9jdG9yU2lnbnVwLmJpbmQodGhpcywgdHJ1ZSl9PlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0b3AtaGVhZC1saW5rIGNhcmQtbGFiLWxpbmtcIj5SdW4gYSBsYWI/IFJlYWNoIG1vcmU8c3Bhbj5jdXN0b21lcnMgbmVhciB5b3U8L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImxhcC1kb2MtYnRuXCI+Sm9pbiB1cyA8aW1nIGNsYXNzTmFtZT1cImltZy1hcndwXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcmd0YXJ3LnBuZ1wifSAvPiA8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PiAqL31cblxuXHRcdFx0XHRcdFx0ey8qPEhvbWVQYWdlV2lkZ2V0XG5cdFx0XHRcdFx0XHRcdGhlYWRpbmc9XCJCb29rIGEgVGVzdFwiXG5cdFx0XHRcdFx0XHRcdGRpc2NvdW50PVwiNTAlXCJcblx0XHRcdFx0XHRcdFx0bGlzdD17dG9wVGVzdHN9XG5cdFx0XHRcdFx0XHRcdHNlYXJjaEZ1bmM9eyhjdCkgPT4gdGhpcy5zZWFyY2hMYWIoY3QsIGZhbHNlKX1cblx0XHRcdFx0XHRcdFx0c2VhcmNoVHlwZT1cInRlc3RzXCJcblx0XHRcdFx0XHRcdFx0ey4uLnRoaXMucHJvcHN9XG5cdFx0XHRcdFx0XHRcdG5hdlRvPVwiL3NlYXJjaD9mcm9tPWhvbWVcIlxuXHRcdFx0XHRcdFx0XHR0eXBlPVwibGFiXCJcblx0XHRcdFx0XHRcdC8+Ki99XG5cblx0XHRcdFx0XHQvKjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj4qL1xuXHRcdFx0XHQvLylcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuXG5cdFx0XHRcdDxIZWxtZXRUYWdzIHRhZ3NEYXRhPXt7XG5cdFx0XHRcdFx0Y2Fub25pY2FsVXJsOiBgJHtDT05GSUcuQVBJX0JBU0VfVVJMfSR7dGhpcy5wcm9wcy5tYXRjaC51cmx9YCxcblx0XHRcdFx0XHRvZ1VybDogJ2h0dHBzOi8vZG9jcHJpbWUuY29tJyxcblx0XHRcdFx0XHRvZ1R5cGU6ICd3ZWJzaXRlJyxcblx0XHRcdFx0XHRvZ1RpdGxlOiAnQm9vayBEb2N0b3IgT25saW5lIHwgNTAlIE9mZiBvbiBEb2N0b3IgQXBwb2ludG1lbnQgJiBMYWIgVGVzdHMnLFxuXHRcdFx0XHRcdG9nRGVzY3JpcHRpb246ICdCb29rIERvY3RvciBBcHBvaW50bWVudCBhdCBEb2NwcmltZSAmIGdldCA1MCUgb2ZmLiBGaW5kICYgQm9vayBEb2N0b3Igb25saW5lLCBmaW5kICYgQm9vayBiZXN0IExhYnMsIGFuZCAmIEhvc3BpdGFscy4nLFxuXHRcdFx0XHRcdG9nSW1hZ2U6ICdodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvYmFubmVyL2ltYWdlcy8xMjAwWDYyOC5wbmcnXG5cdFx0XHRcdH19IHNldERlZmF1bHQ9e3RydWV9IC8+XG5cblx0XHRcdFx0PFByb2ZpbGVIZWFkZXIgaG9tZVBhZ2U9e3RydWV9IGNoYXRQYWdlPXt0cnVlfSBzaG93U2VhcmNoPXt0cnVlfSBzaG93UGFja2FnZVN0cmlwPXtzaG93UGFja2FnZVN0cmlwfSAvPlxuXG5cdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1oZWFkZXIgbXJnLXRvcFwiPjwvZGl2PiAqL31cblx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyU3ViTGlua0NvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRfdGV4dF9jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIi92aXAtY2x1Yi1kZXRhaWxzXCIgb25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHtcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAndmlwQ2xpY2tTdWJoZWFkZXInLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICd2aXAtY2xpY2stc3ViaGVhZGVyJ1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmNsZWFyVmlwU2VsZWN0ZWRQbGFuKClcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm5hdmlnYXRlVG8oXCIvdmlwLWdvbGQtZGV0YWlscz9pc19nb2xkPXRydWUmc291cmNlPW1vYmlsZS1sZWZ0bWVudS1nb2xkLWNsaWNrZWQmbGVhZF9zb3VyY2U9RG9jcHJpbWVcIiwgJ29wZCcpXG5cdFx0XHRcdFx0XHRcdH19PkRvY3ByaW1lIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9nb2xkLWxnLnBuZyd9IHN0eWxlPXt7IHdpZHRoOiAzNSwgbWFyZ2luTGVmdDogMiwgdmVydGljYWxBbGlnbjogJ21pZGRsZScgfX0gLz48c3BhbiBjbGFzc05hbWU9XCJvcGROZXdIZWFkZXJPZnJcIj5OZXc8L3NwYW4+PC9hPlxuXG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIvc2VhcmNoXCIgb25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5uYXZpZ2F0ZVRvKFwiL3NlYXJjaFwiLCAnb3BkJylcblx0XHRcdFx0XHRcdFx0fX0+RmluZCBhIERvY3RvcjwvYT5cblx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIi9zZWFyY2hcIiBvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm5hdmlnYXRlVG8oXCIvc2VhcmNoXCIsICdsYWInKVxuXHRcdFx0XHRcdFx0XHR9fT5MYWIgVGVzdHM8L2E+XG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIvZnVsbC1ib2R5LWNoZWNrdXAtaGVhbHRoLXBhY2thZ2VzXCIgb25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5uYXZpZ2F0ZVRvKCcvZnVsbC1ib2R5LWNoZWNrdXAtaGVhbHRoLXBhY2thZ2VzJylcblx0XHRcdFx0XHRcdFx0fX0+SGVhbHRoIFBhY2thZ2VzPC9hPlxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiL29ubGluZS1jb25zdWx0YXRpb25cIiBvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm5hdmlnYXRlVG8oJy9vbmxpbmUtY29uc3VsdGF0aW9uJylcblx0XHRcdFx0XHRcdFx0fX0+T25saW5lIERvY3RvciBDb25zdWx0YXRpb248L2E+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+ICovfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNoYXQtbWFpbi1jb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHR7c2xhYk9yZGVyfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHR7Lyo8QWNjb3JkaWFuIC8+Ki99XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0LypzaG93UGFja2FnZVN0cmlwID9cblx0XHRcdFx0XHRcdFx0PFBhY2thZ2VDb21wYXJlU3RyaXAgey4uLnRoaXMucHJvcHN9IC8+XG5cdFx0XHRcdFx0XHRcdDpcblx0XHRcdFx0XHRcdFx0PEZpeGVkTW9iaWxlRm9vdGVyIHsuLi50aGlzLnByb3BzfSAvPiovXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7Lyo8Rm9vdGVyIHNwZWNpYWxpdHlGb290ZXJEYXRhPXt0aGlzLnN0YXRlLnNwZWNpYWxpdHlGb290ZXJEYXRhfSAvPiovfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lQ2hhdFZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBIb21lUGFnZVdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmF2aWdhdGVUbyA9ICh3aGVyZSwgZSkgPT57XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0U2VhcmNoVHlwZSh0aGlzLnByb3BzLnR5cGUpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5T2JqLnB1c2god2hlcmUpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNzdG0tY2FyZCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFuY2hvci1saW5rXCIgaWQ9e2Ake3RoaXMucHJvcHMudHlwZX1gfT48L2E+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ25vcm1hbCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50eXBlID09PSAnb3BkJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5oZWFkaW5nfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wcy5zZWFyY2hUeXBlICYmIHRoaXMucHJvcHMuc2VhcmNoVHlwZSA9PT0gJ3BhY2thZ2VzJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSB0aXRsZT1cIkZ1bGwgQm9keSBDaGVja3VwIFBhY2thZ2VzXCIgaHJlZj1cIi9mdWxsLWJvZHktY2hlY2t1cC1oZWFsdGgtcGFja2FnZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKHRoaXMucHJvcHMubGlua1RvKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhvbWUtd2lkZ2V0LWhlYWRpbmdcIj57dGhpcy5wcm9wcy5oZWFkaW5nfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxoMj57dGhpcy5wcm9wcy5oZWFkaW5nfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvZnItcmliYm9uIGhvbWUtb2ZyLXJpYmJvblwiPlVwdG8ge3RoaXMucHJvcHMuZGlzY291bnR9IE9mZjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0yIGQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5saXN0LnNsaWNlKDAsOSkubWFwKChsaXN0SXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgaG9tZS1jYXJkLWNvbCBzZWFyY2gtaWNvbi1jb2wgbWQtbGlzdC1oaWRlXCIga2V5PXtpfSBvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy5zZWFyY2hGdW5jKGxpc3RJdGVtKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWltZy1jbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0udXJsID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgLyR7bGlzdEl0ZW0udXJsfWB9IG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17bGlzdEl0ZW0uc3ZnX2ljb24/bGlzdEl0ZW0uc3ZnX2ljb246bGlzdEl0ZW0uaWNvbn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bGlzdEl0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17bGlzdEl0ZW0uc3ZnX2ljb24/bGlzdEl0ZW0uc3ZnX2ljb246bGlzdEl0ZW0uaWNvbn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bGlzdEl0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlYXJjaFR5cGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNCBob21lLWNhcmQtY29sIHNlYXJjaC1pY29uLWNvbFwiIGtleT17YHNlYXJjaCR7dGhpcy5wcm9wcy5zZWFyY2hUeXBlfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pbWctY250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgb25DbGljaz17KCk9PnRoaXMubmF2aWdhdGVUbyh0aGlzLnByb3BzLm5hdlRvKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1hZ2VzL3ZhbGwucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TZWFyY2ggbW9yZSA8YnIvPiB7dGhpcy5wcm9wcy5zZWFyY2hUeXBlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVdpZGdldCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBjbGVhckFsbFRlc3RzLCB0b2dnbGVPUERDcml0ZXJpYSwgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEsIHJlc2V0RmlsdGVycywgZ2V0VXNlclByb2ZpbGUsIGZldGNoQXJ0aWNsZXMsIGZldGNoSGVhdGxoVGlwLCBsb2FkT1BEQ29tbW9uQ3JpdGVyaWEsIGxvYWRMYWJDb21tb25Dcml0ZXJpYXMsIGNsZWFyRXh0cmFUZXN0cywgZ2V0U3BlY2lhbGl0eUZvb3RlckRhdGEsIHNlbGVjdFNlYXJjaFR5cGUsIGdldE9mZmVyTGlzdCwgc2V0UGFja2FnZUlkLCBnZXRVcENvbWluZ0FwcG9pbnRtZW50LCByZXNldFBrZ0NvbXBhcmUsIHRvZ2dsZUlQRENyaXRlcmlhLCBsb2FkT1BESW5zdXJhbmNlLCBjbGVhclZpcFNlbGVjdGVkUGxhbiB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5cbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmltcG9ydCBIb21lQ2hhdFZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0hvbWUvSG9tZUNoYXRWaWV3LmpzJztcblxuY2xhc3MgSG9tZUNoYXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbWVyZ2VTdGF0ZTogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkRGF0YShzdG9yZSwgbWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtzdG9yZS5kaXNwYXRjaChsb2FkT1BEQ29tbW9uQ3JpdGVyaWEoKSksIHN0b3JlLmRpc3BhdGNoKGxvYWRMYWJDb21tb25Dcml0ZXJpYXMoKSldKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHsgfSlcbiAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcm91dGVyOiAoKSA9PiBudWxsXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmIChTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldFVzZXJQcm9maWxlKClcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0VXBDb21pbmdBcHBvaW50bWVudCgpXG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzLnByb3BzLmZldGNoSGVhdGxoVGlwKClcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5mZXRjaEFydGljbGVzKClcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmNvbW1vbl90ZXN0cy5sZW5ndGggfHwgIXRoaXMucHJvcHMuY29tbW9uX3BhY2thZ2UubGVuZ3RoIHx8ICF0aGlzLnByb3BzLnNwZWNpYWxpemF0aW9ucy5sZW5ndGggfHwgKHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24ubG9jYWxpdHkpKSB7XG5cbiAgICAgICAgICAgIHRoaXMucHJvcHMubG9hZExhYkNvbW1vbkNyaXRlcmlhcygpXG4gICAgICAgICAgICAvLyB0aGlzLnByb3BzLmxvYWRPUERJbnN1cmFuY2UodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMubG9hZE9QRENvbW1vbkNyaXRlcmlhKHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbilcblxuICAgICAgICB0aGlzLnByb3BzLnJlc2V0RmlsdGVycygpXG4gICAgICAgIHRoaXMucHJvcHMuY2xlYXJFeHRyYVRlc3RzKClcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVyZ2VTdGF0ZTogdHJ1ZSB9KVxuICAgICAgICB9LCAxMDApXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEhvbWVDaGF0VmlldyB7Li4udGhpcy5wcm9wc30gey4uLnRoaXMuc3RhdGV9IC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHBhc3NlZFByb3BzKSA9PiB7XG4gICAgLyoqXG4gICAgICogaW5pdGlhbFNlcnZlckRhdGEgaXMgc2VydmVyIHJlbmRlcmVkIGFzeW5jIGRhdGEgcmVxdWlyZWQgYnVpbGQgaHRtbCBvbiBzZXJ2ZXIuIFxuICAgICAqL1xuICAgIGxldCBpbml0aWFsU2VydmVyRGF0YSA9IG51bGxcbiAgICBsZXQgeyBzdGF0aWNDb250ZXh0IH0gPSBwYXNzZWRQcm9wc1xuICAgIGlmIChzdGF0aWNDb250ZXh0ICYmIHN0YXRpY0NvbnRleHQuZGF0YSkge1xuICAgICAgICBpbml0aWFsU2VydmVyRGF0YSA9IHN0YXRpY0NvbnRleHQuZGF0YVxuICAgIH1cblxuICAgIGxldCB7XG4gICAgICAgIHByb2ZpbGVzLCBzZWxlY3RlZFByb2ZpbGUsIG5ld05vdGlmaWNhdGlvbiwgbm90aWZpY2F0aW9ucywgYXJ0aWNsZXMsIGhlYWx0aFRpcHMsIGRldmljZV9pbmZvLCBvZmZlckxpc3QsIHVwY29taW5nX2FwcG9pbnRtZW50cywgaXNfaXBkX2Zvcm1fc3VibWl0dGVkXG4gICAgfSA9IHN0YXRlLlVTRVJcblxuICAgIGNvbnN0IHtcbiAgICAgICAgTE9BREVEX1NFQVJDSF9DUklURVJJQV9MQUIsXG4gICAgICAgIGNvbW1vbl90ZXN0cyxcbiAgICAgICAgY29tbW9uX3BhY2thZ2UsXG4gICAgICAgIHNlbGVjdGVkTG9jYXRpb24sXG4gICAgICAgIGNvbXBhcmVfcGFja2FnZXNcbiAgICB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX0xBQlNcbiAgICBsZXQgZmlsdGVyQ3JpdGVyaWFfbGFiID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX0xBQlMuZmlsdGVyQ3JpdGVyaWFcblxuICAgIGNvbnN0IHtcbiAgICAgICAgTE9BREVEX1NFQVJDSF9DUklURVJJQV9PUEQsXG4gICAgICAgIHNwZWNpYWxpemF0aW9ucyxcbiAgICAgICAgaXBkX3Byb2NlZHVyZXMsXG4gICAgICAgIHRvcF9ob3NwaXRhbHMsXG4gICAgICAgIGNvbW1vbl9zZXR0aW5nc1xuICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfT1BEXG5cbiAgICBsZXQgZmlsdGVyQ3JpdGVyaWFfb3BkID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX09QRC5maWx0ZXJDcml0ZXJpYVxuXG4gICAgbGV0IHtcbiAgICAgICAgc3RhdGljX2Zvb3Rlcl9kYXRhXG4gICAgfSA9IHN0YXRlLkRPQ1RPUl9TRUFSQ0hcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb2ZpbGVzLCBzZWxlY3RlZFByb2ZpbGUsIG5ld05vdGlmaWNhdGlvbiwgbm90aWZpY2F0aW9ucywgYXJ0aWNsZXMsIGhlYWx0aFRpcHMsIGNvbW1vbl90ZXN0czogY29tbW9uX3Rlc3RzIHx8IFtdLCBzcGVjaWFsaXphdGlvbnM6IHNwZWNpYWxpemF0aW9ucyB8fCBbXSwgc2VsZWN0ZWRMb2NhdGlvbiwgZmlsdGVyQ3JpdGVyaWFfbGFiLCBmaWx0ZXJDcml0ZXJpYV9vcGQsIGRldmljZV9pbmZvLCBjb21tb25fcGFja2FnZTogY29tbW9uX3BhY2thZ2UgfHwgW10sIGluaXRpYWxTZXJ2ZXJEYXRhLCBvZmZlckxpc3QsIHVwY29taW5nX2FwcG9pbnRtZW50cywgY29tcGFyZV9wYWNrYWdlcywgaXBkX3Byb2NlZHVyZXMsIHRvcF9ob3NwaXRhbHMsIGNvbW1vbl9zZXR0aW5ncywgaXNfaXBkX2Zvcm1fc3VibWl0dGVkLCBzdGF0aWNfZm9vdGVyX2RhdGFcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxvYWRMYWJDb21tb25Dcml0ZXJpYXM6ICgpID0+IGRpc3BhdGNoKGxvYWRMYWJDb21tb25Dcml0ZXJpYXMoKSksXG4gICAgICAgIGxvYWRPUERDb21tb25Dcml0ZXJpYTogKGNpdHkpID0+IGRpc3BhdGNoKGxvYWRPUERDb21tb25Dcml0ZXJpYShjaXR5KSksXG4gICAgICAgIHRvZ2dsZU9QRENyaXRlcmlhOiAodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkLCBmaWx0ZXJzKSA9PiBkaXNwYXRjaCh0b2dnbGVPUERDcml0ZXJpYSh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQsIGZpbHRlcnMpKSxcbiAgICAgICAgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWE6ICh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQsIGZpbHRlcnMpID0+IGRpc3BhdGNoKHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCwgZmlsdGVycykpLFxuICAgICAgICBnZXRVc2VyUHJvZmlsZTogKCkgPT4gZGlzcGF0Y2goZ2V0VXNlclByb2ZpbGUoKSksXG4gICAgICAgIGZldGNoSGVhdGxoVGlwOiAoKSA9PiBkaXNwYXRjaChmZXRjaEhlYXRsaFRpcCgpKSxcbiAgICAgICAgZmV0Y2hBcnRpY2xlczogKCkgPT4gZGlzcGF0Y2goZmV0Y2hBcnRpY2xlcygpKSxcbiAgICAgICAgcmVzZXRGaWx0ZXJzOiAoKSA9PiBkaXNwYXRjaChyZXNldEZpbHRlcnMoKSksXG4gICAgICAgIGNsZWFyRXh0cmFUZXN0czogKCkgPT4gZGlzcGF0Y2goY2xlYXJFeHRyYVRlc3RzKCkpLFxuICAgICAgICBnZXRTcGVjaWFsaXR5Rm9vdGVyRGF0YTogKGNiKSA9PiBkaXNwYXRjaChnZXRTcGVjaWFsaXR5Rm9vdGVyRGF0YShjYikpLFxuICAgICAgICBzZWxlY3RTZWFyY2hUeXBlOiAodHlwZSkgPT4gZGlzcGF0Y2goc2VsZWN0U2VhcmNoVHlwZSh0eXBlKSksXG4gICAgICAgIGdldE9mZmVyTGlzdDogKGxhdCwgbG9uZykgPT4gZGlzcGF0Y2goZ2V0T2ZmZXJMaXN0KGxhdCwgbG9uZykpLFxuICAgICAgICBjbGVhckFsbFRlc3RzOiAoKSA9PiBkaXNwYXRjaChjbGVhckFsbFRlc3RzKCkpLFxuICAgICAgICBzZXRQYWNrYWdlSWQ6IChwYWNrYWdlX2lkLCBpc0hvbWVQYWdlKSA9PiBkaXNwYXRjaChzZXRQYWNrYWdlSWQocGFja2FnZV9pZCwgaXNIb21lUGFnZSkpLFxuICAgICAgICBnZXRVcENvbWluZ0FwcG9pbnRtZW50OiAoKSA9PiBkaXNwYXRjaChnZXRVcENvbWluZ0FwcG9pbnRtZW50KCkpLFxuICAgICAgICByZXNldFBrZ0NvbXBhcmU6ICgpID0+IGRpc3BhdGNoKHJlc2V0UGtnQ29tcGFyZSgpKSxcbiAgICAgICAgdG9nZ2xlSVBEQ3JpdGVyaWE6IChjcml0ZXJpYSwgZm9yY2VBZGQpID0+IGRpc3BhdGNoKHRvZ2dsZUlQRENyaXRlcmlhKGNyaXRlcmlhLCBmb3JjZUFkZCkpLFxuICAgICAgICBsb2FkT1BESW5zdXJhbmNlOiAoY2l0eSkgPT4gZGlzcGF0Y2gobG9hZE9QREluc3VyYW5jZShjaXR5KSksXG4gICAgICAgIGNsZWFyVmlwU2VsZWN0ZWRQbGFuOigpID0+IGRpc3BhdGNoKGNsZWFyVmlwU2VsZWN0ZWRQbGFuKCkpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEhvbWVDaGF0KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=