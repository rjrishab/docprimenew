exports.ids = [55];
exports.modules = {

/***/ "./dev/js/components/ipd/DoctorCarouselList.js":
/*!*****************************************************!*\
  !*** ./dev/js/components/ipd/DoctorCarouselList.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _initialsPicture = __webpack_require__(/*! ../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DoctorCarouselList extends _react2.default.Component {

    navigateToDoctor(doctor, e) {
        e.preventDefault();
        if (doctor.url) {
            this.props.history.push(doctor.url);
        } else {
            this.props.history.push(`/opd/doctor/${doctor.id}?hide_search_data=true`);
        }

        let data = {
            'Category': 'ConsumerApp', 'Action': 'recommendedDoctorClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'recommended-doctor-click', 'DoctorID': doctor.doctor_id
        };
        _gtm2.default.sendEvent({ data: data });
    }

    render() {
        let { doctorCardData } = this.props;
        return _react2.default.createElement(
            'div',
            { className: 'widge-content ct-profile pd-0' },
            _react2.default.createElement(
                'div',
                { className: 'widget-panel' },
                _react2.default.createElement(
                    'div',
                    { className: 'panel-content pd-0 border-bottom-panel' },
                    _react2.default.createElement(
                        'div',
                        { className: 'docScrollSliderContainer', style: { background: 'transparent' } },
                        doctorCardData && doctorCardData.length ? doctorCardData.map((doctor, id) => {
                            return _react2.default.createElement(
                                'a',
                                { href: `/${doctor.url ? doctor.url : `opd/doctor/${doctor.id}?hide_search_data=true`}`, className: 'docSlideCard', key: id, onClick: e => this.navigateToDoctor(doctor, e) },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'docSlideHead' },
                                    _react2.default.createElement(
                                        _initialsPicture2.default,
                                        { name: doctor.name, has_image: !!doctor.thumbnail, className: 'initialsPicture-ds slideDocMainImg', style: { width: 60, height: 60, fontSize: '2rem' } },
                                        _react2.default.createElement('img', { className: 'fltr-usr-image img-round slideDocMainImg', src: doctor.thumbnail, alt: doctor.display_name, title: doctor.display_name })
                                    ),
                                    doctorCardData.average_rating ? _react2.default.createElement(
                                        'span',
                                        { className: 'rating-s-tar' },
                                        doctorCardData.average_rating,
                                        ' ',
                                        _react2.default.createElement('img', { src: "/assets" + "/images/star.png", className: 'star-img' })
                                    ) : ''
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'slideDocContent' },
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'slideDocName' },
                                        doctor.display_name
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'slideDocExp' },
                                        doctor.experience_years,
                                        ' Years of Experience'
                                    ),
                                    doctor.qualifications && doctor.qualifications.length ? _react2.default.createElement(
                                        'p',
                                        { className: 'slideDocdeg' },
                                        doctor.qualifications.map((qualification, index) => {
                                            return _react2.default.createElement(
                                                'span',
                                                { key: index },
                                                qualification.qualification
                                            );
                                        })
                                    ) : '',
                                    doctor.hospitals && doctor.hospitals.length ? _react2.default.createElement(
                                        'p',
                                        { className: 'slideDocExp', style: { marginTop: 5 } },
                                        doctor.hospitals[0].hospital_name
                                    ) : '',
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'slideDocPrice' },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'slideNamePrc' },
                                            '\u20B9 ',
                                            doctor.deal_price
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'slideCutPrc' },
                                            '\u20B9 ',
                                            doctor.mrp
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'slidBookBtn' },
                                        _react2.default.createElement(
                                            'button',
                                            null,
                                            'Book Now'
                                        )
                                    )
                                )
                            );
                        }) : ''
                    )
                )
            )
        );
    }
}

exports.default = DoctorCarouselList;

/***/ }),

/***/ "./dev/js/components/ipd/ExpansionPanelIpd.js":
/*!****************************************************!*\
  !*** ./dev/js/components/ipd/ExpansionPanelIpd.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _DoctorCarouselList = __webpack_require__(/*! ./DoctorCarouselList.js */ "./dev/js/components/ipd/DoctorCarouselList.js");

var _DoctorCarouselList2 = _interopRequireDefault(_DoctorCarouselList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ExpansionPanelIPD extends _react2.default.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: this.props.id == 0 ? true : false
        };
    }

    toggleOpen() {
        this.setState({ open: !this.state.open });
    }

    render() {

        let { data } = this.props;

        return _react2.default.createElement(
            'li',
            { className: 'expansion-panel-list-item', style: { listStyle: 'none', cursor: 'pointer' } },
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'title', onClick: this.toggleOpen.bind(this), style: { marginBottom: 0, fontSize: 15, fontWeight: 500, paddingRight: 30, position: 'relative' } },
                    data.name,
                    this.state.open ? _react2.default.createElement('img', { className: 'titlearrow-up', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" }) : _react2.default.createElement('img', { className: 'titlearrow', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                ),
                this.state.open ? _react2.default.createElement(
                    'div',
                    { className: 'more-content mr-content' },
                    data.value ? _react2.default.createElement('span', { className: 'pkg-content ulListing-stl', dangerouslySetInnerHTML: { __html: data.value } }) : '',
                    data.show_doctors && data.doctors && data.doctors.result ? _react2.default.createElement(_DoctorCarouselList2.default, _extends({ doctorCardData: data.doctors.result }, this.props)) : ''
                ) : ""
            )
        );
    }
}

exports.default = ExpansionPanelIPD;

/***/ }),

/***/ "./dev/js/components/ipd/HospitalList.js":
/*!***********************************************!*\
  !*** ./dev/js/components/ipd/HospitalList.js ***!
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

var _HospitalCard = __webpack_require__(/*! ./HospitalCard.js */ "./dev/js/components/ipd/HospitalCard.js");

var _HospitalCard2 = _interopRequireDefault(_HospitalCard);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HospitalListView extends _react2.default.Component {

	constructor(props) {
		super(props);
		this.state = {
			toggleFilterPopup: false,
			health_insurance_provider: []
		};
	}

	toggleProviderFilter(data = []) {

		this.setState({ toggleFilterPopup: !this.state.toggleFilterPopup, health_insurance_provider: data });
	}

	getCostEstimateClicked(hospitalId) {
		if (this.props.commonSelectedCriterias.length) {
			let ipd_id = this.props.commonSelectedCriterias[0].id;

			let gtmData = {
				'Category': 'ConsumerApp', 'Action': 'IpdGetCostEstimateClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-get-cost-estimate-clicked', 'selectedId': ipd_id || '', 'hospitalId': hospitalId
			};
			_gtm2.default.sendEvent({ data: gtmData });
			this.props.history.push(`/ipd/${ipd_id}/getPriceEstimate?hospital_id=${hospitalId}`);
		}
	}

	getHospitalDetailPage(hospitalId, url = null) {
		let gtmData = {
			'Category': 'ConsumerApp', 'Action': 'HospitalDetailClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'hospital-detail-clicked', 'selectedId': hospitalId || ''
		};
		_gtm2.default.sendEvent({ data: gtmData });

		if (url) {
			this.props.history.push(`/${url}?fromProcedure=true`);
		} else {
			this.props.history.push(`/ipd/hospital/${hospitalId}?fromProcedure=true`);
		}
	}

	render() {
		let { hospitalList, ipd_info } = this.props;
		return _react2.default.createElement(
			'div',
			null,
			ipd_info && ipd_info.about && ipd_info.about.name ? _react2.default.createElement(
				'h2',
				{ className: 'section-heading hd-mrgn-top' },
				`Best ${ipd_info.about.name} Hospitals ${ipd_info.seo ? `in ${this.props.ipd_info.seo.location}` : ''}`
			) : '',
			_react2.default.createElement(
				'ul',
				null,
				hospitalList && hospitalList.result ? hospitalList.result.map((hospital, i) => {
					return _react2.default.createElement(_HospitalCard2.default, _extends({ key: i, data: hospital, getCostEstimateClicked: this.getCostEstimateClicked.bind(this), getHospitalDetailPage: this.getHospitalDetailPage.bind(this), toggleProviderFilter: this.toggleProviderFilter.bind(this) }, this.props));
				}) : ''
			),
			this.state.toggleFilterPopup ? _react2.default.createElement(
				'div',
				{ className: 'ipd-section' },
				_react2.default.createElement('div', { className: 'custom-overlay', onClick: this.toggleProviderFilter.bind(this) }),
				_react2.default.createElement(
					'div',
					{ className: 'custom-popup hlth-ins-pop ins-pop' },
					_react2.default.createElement(
						'div',
						{ className: 'cross-btn' },
						_react2.default.createElement('img', { src: 'https://cdn.docprime.com/cp/assets/img/icons/close.png', alt: '', onClick: this.toggleProviderFilter.bind(this) })
					),
					this.state.health_insurance_provider.length ? _react2.default.createElement(
						'div',
						{ className: 'pop-head text-center' },
						'Health Insurance Providers'
					) : '',
					this.state.health_insurance_provider.length ? _react2.default.createElement(
						'div',
						{ className: 'ins-listing' },
						_react2.default.createElement(
							'div',
							{ className: 'pop-head' },
							'Health Insurance Providers'
						),
						_react2.default.createElement(
							'ul',
							{ className: 'range-slider-ul' },
							this.state.health_insurance_provider.map((provider, i) => {

								return _react2.default.createElement(
									'li',
									{ key: i },
									provider
								);
							})
						)
					) : ''
				)
			) : ''
		);
	}
}

exports.default = HospitalListView;

/***/ }),

/***/ "./dev/js/components/ipd/IpdAboutUs.js":
/*!*********************************************!*\
  !*** ./dev/js/components/ipd/IpdAboutUs.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _ExpansionPanelIpd = __webpack_require__(/*! ./ExpansionPanelIpd.js */ "./dev/js/components/ipd/ExpansionPanelIpd.js");

var _ExpansionPanelIpd2 = _interopRequireDefault(_ExpansionPanelIpd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class IPDAboutUsView extends _react2.default.Component {

	constructor(props) {
		super(props);
		this.state = {
			toggleReadMore: false
		};
	}
	render() {
		let { ipd_info } = this.props;

		return _react2.default.createElement(
			'div',
			{ className: 'tab-pane fade show active', id: 'nav-overview' },
			ipd_info && ipd_info.about && ipd_info.about.all_details && ipd_info.about.all_details.length ? _react2.default.createElement(
				'h4',
				{ className: 'section-heading' },
				`About ${ipd_info.about ? ipd_info.about.name : 'Treatment'}`,
				' '
			) : '',
			ipd_info && ipd_info.about && ipd_info.about.all_details && ipd_info.about.all_details.length ? _react2.default.createElement(
				'ul',
				{ className: 'widget' },
				ipd_info.about.all_details.map((ipdInfo, key) => {

					return _react2.default.createElement(_ExpansionPanelIpd2.default, _extends({ data: ipdInfo, key: key }, this.props, { id: key }));
				})
			) : ''
		);
	}
}

exports.default = IPDAboutUsView;

/***/ }),

/***/ "./dev/js/components/ipd/IpdInfo.js":
/*!******************************************!*\
  !*** ./dev/js/components/ipd/IpdInfo.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _aboutIPD = __webpack_require__(/*! ./aboutIPD.js */ "./dev/js/components/ipd/aboutIPD.js");

var _aboutIPD2 = _interopRequireDefault(_aboutIPD);

var _IpdAboutUs = __webpack_require__(/*! ./IpdAboutUs.js */ "./dev/js/components/ipd/IpdAboutUs.js");

var _IpdAboutUs2 = _interopRequireDefault(_IpdAboutUs);

var _HospitalList = __webpack_require__(/*! ./HospitalList.js */ "./dev/js/components/ipd/HospitalList.js");

var _HospitalList2 = _interopRequireDefault(_HospitalList);

var _doctorResultCard = __webpack_require__(/*! ../opd/commons/doctorResultCard */ "./dev/js/components/opd/commons/doctorResultCard/index.js");

var _doctorResultCard2 = _interopRequireDefault(_doctorResultCard);

var _Loader = __webpack_require__(/*! ../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _HelmetTags = __webpack_require__(/*! ../commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _config = __webpack_require__(/*! ../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _breadCrumb = __webpack_require__(/*! ./breadCrumb.js */ "./dev/js/components/ipd/breadCrumb.js");

var _breadCrumb2 = _interopRequireDefault(_breadCrumb);

var _IpdForm = __webpack_require__(/*! ../../containers/ipd/IpdForm.js */ "./dev/js/containers/ipd/IpdForm.js");

var _IpdForm2 = _interopRequireDefault(_IpdForm);

var _ipdLeadForm = __webpack_require__(/*! ../../containers/ipd/ipdLeadForm.js */ "./dev/js/containers/ipd/ipdLeadForm.js");

var _ipdLeadForm2 = _interopRequireDefault(_ipdLeadForm);

var _IpdOffersPage = __webpack_require__(/*! ./IpdOffersPage.js */ "./dev/js/components/ipd/IpdOffersPage.js");

var _IpdOffersPage2 = _interopRequireDefault(_IpdOffersPage);

var _bannerCarousel = __webpack_require__(/*! ../commons/Home/bannerCarousel */ "./dev/js/components/commons/Home/bannerCarousel.js");

var _bannerCarousel2 = _interopRequireDefault(_bannerCarousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


class IpdView extends _react2.default.Component {

	constructor(props) {
		super(props);
		this.state = {
			toggleTabType: 'aboutTab',
			toggleReadMore: false,
			seoFriendly: this.props.match.url.includes('-ipdp'),
			showLeadForm: true
		};
	}

	componentDidMount() {
		if (window) {
			window.scrollTo(0, 0);
		}

		var section = document.querySelectorAll(".nav_top_bar");
		var sections = {};
		var i = 0;

		let headerHeight = 0;

		Object.keys(this.refs).forEach((prp, i) => {

			if (document.getElementsByClassName('stickyBar') && document.getElementsByClassName('stickyBar')[0]) {
				headerHeight = document.getElementsByClassName('stickyBar')[0].offsetTop - 100;
			}
			sections[prp] = this.refs[prp].offsetTop + headerHeight;
		});
		//if there is any tab name in landing url then we scroll to that tab position
		let self = this;
		if (window && document) {
			window.onscroll = function () {
				var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
				for (i in sections) {
					if (self.refs[i]) {

						if (i.includes('readMoreView')) {
							if (scrollPosition > self.refs['readMoreView'].offsetTop + headerHeight) {
								self.setState({ toggleTabType: '' });
							}
						} else {

							if (self.refs[i].offsetTop + headerHeight <= scrollPosition) {
								self.setState({ toggleTabType: i });
							}
						}
					}
				}
			};
		}
	}

	toggleTabs(type) {
		//tabs in ipd info page
		if (document.getElementById(type)) {
			let gtmData = {
				'Category': 'ConsumerApp', 'Action': 'IpdTabClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-tab-clicked', selectedId: this.props.ipd_id || '', type: type
			};
			_gtm2.default.sendEvent({ data: gtmData });

			var elmnt = document.getElementById(type);

			let headerHeight = 0;
			if (document.getElementsByClassName('stickyBar') && document.getElementsByClassName('stickyBar')[0]) {
				headerHeight = this.refs[type].offsetTop - 45;
			}
			this.setState({ toggleTabType: type });
			window.scrollTo(0, headerHeight);
		}
	}

	viewHospitalsClicked() {
		let gtmData = {
			'Category': 'ConsumerApp', 'Action': 'IpdViewAllHospitalClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-view-all-hospital-clicked', selectedId: this.props.ipd_id || ''
		};
		_gtm2.default.sendEvent({ data: gtmData });
		this.props.mergeIpdCriteria({
			commonSelectedCriterias: this.props.commonSelectedCriterias,
			nextSelectedCriterias: this.props.commonSelectedCriterias
		});

		if (this.props.ipd_info && this.props.ipd_info.hospitals && this.props.ipd_info.hospitals.canonical_url) {

			this.props.history.push(`/${this.props.ipd_info.hospitals.canonical_url}`);
		} else {

			this.props.history.push(`/ipd/searchHospitals`);
		}
	}

	viewDoctorsClicked() {
		if (this.props.commonSelectedCriterias && this.props.commonSelectedCriterias.length) {

			let gtmData = {
				'Category': 'ConsumerApp', 'Action': 'IpdViewAllDoctorClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-view-all-doctor-clicked', selectedId: this.props.commonSelectedCriterias[0].id || ''
			};
			_gtm2.default.sendEvent({ data: gtmData });

			let criteria = {};
			criteria.id = this.props.commonSelectedCriterias[0].id;
			criteria.name = this.props.commonSelectedCriterias[0].name;
			criteria.type = 'ipd';
			this.props.cloneCommonSelectedCriterias(criteria);

			if (this.props.ipd_info && this.props.ipd_info.doctors && this.props.ipd_info.doctors.canonical_url) {

				this.props.history.push(`/${this.props.ipd_info.doctors.canonical_url}`);
			} else {

				this.props.history.push(`/opd/searchresults`);
			}
		}
	}

	getCostEstimateClicked() {
		let gtmData = {
			'Category': 'ConsumerApp', 'Action': 'IpdGetCostEstimateClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-get-cost-estimate-clicked', selectedId: this.props.ipd_id || ''
		};
		_gtm2.default.sendEvent({ data: gtmData });
		this.props.history.push(`/ipd/${this.props.ipd_id}/getPriceEstimate`);
	}

	readMoreClicked() {
		this.setState({ toggleReadMore: true });
		if (this.refs['readMoreView']) {
			let headerHeight = this.refs['readMoreView'].offsetTop - 45;
			window.scrollTo(0, headerHeight);
		}
	}

	getMetaTagsData(seoData) {
		let title = "IPD Procedure Page";
		if (this.state.seoFriendly) {
			title = "";
		}
		let description = "";
		if (seoData) {
			title = seoData.title || "";
			description = seoData.description || "";
		}
		return { title, description };
	}

	submitLeadFormGeneration(ipdFormParams) {
		if (ipdFormParams) {
			let gtmData = {
				'Category': 'ConsumerApp', 'Action': 'IpdProcedurePageFormClosed', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-procedure-page-form-closed'
			};
			_gtm2.default.sendEvent({ data: gtmData });
		}
		let ipd_data = {
			showChat: true,
			ipdFormParams: ipdFormParams
		};

		this.setState({ showLeadForm: false, ipdFormParams: ipdFormParams }, () => {

			this.props.checkIpdChatAgentStatus(response => {
				if (response && response.users && response.users.length) {

					// this.props.ipdChatView({showIpdChat:true, ipdForm: ipdFormParams, showMinimize: true})
				}
			});
		});
	}

	render() {

		const parsed = queryString.parse(this.props.location.search);

		let showPopup =  false && false;

		return _react2.default.createElement(
			'div',
			{ className: 'ipd-section ipdSection cardMainPaddingRmv' },
			showPopup ? _react2.default.createElement(_ipdLeadForm2.default, _extends({ submitLeadFormGeneration: this.submitLeadFormGeneration.bind(this) }, this.props, { hospital_name: null, hospital_id: null, formSource: 'ipdProcedurePopup', procedure_id: this.props.ipd_info && this.props.ipd_info.about ? this.props.ipd_info.about.id : '', procedure_name: this.props.ipd_info && this.props.ipd_info.about ? this.props.ipd_info.about.name : '' })) : '',
			_react2.default.createElement(_HelmetTags2.default, { tagsData: {
					canonicalUrl: `${_config2.default.API_BASE_URL}${this.props.match.url}`,
					title: this.getMetaTagsData(this.props.ipd_info.seo).title,
					description: this.getMetaTagsData(this.props.ipd_info.seo).description
				}, noIndex: !this.state.seoFriendly }),
			this.props.offerList && this.props.offerList.filter(x => x.slider_location === 'ipd_procedure_page').length ? _react2.default.createElement(_bannerCarousel2.default, _extends({}, this.props, { a: 'ipd_procedure_page', sliderLocation: 'ipd_procedure_page', ipd: true })) : '',
			this.props.ipd_info && this.props.ipd_info.breadcrumb ? _react2.default.createElement(_breadCrumb2.default, _extends({ breadcrumb: this.props.ipd_info.breadcrumb }, this.props)) : '',
			_react2.default.createElement(
				'h1',
				{ className: 'section-heading top-sc-head pt-0' },
				' ',
				_react2.default.createElement(
					'span',
					{ className: 'about-head' },
					' ',
					`${this.props.ipd_info && Object.keys(this.props.ipd_info).length ? `${this.props.ipd_info.about.name} Cost ${this.props.ipd_info && this.props.ipd_info.seo && this.props.ipd_info.seo.location ? `in ${this.props.ipd_info.seo.location}` : ''}  ` : ''}`,
					' '
				)
			),
			_react2.default.createElement(
				'div',
				{ className: 'full-widget mrg-b0 stickyBar' },
				_react2.default.createElement(
					'nav',
					{ className: 'tab-head' },
					_react2.default.createElement(
						'div',
						{ className: '' },
						_react2.default.createElement(
							'div',
							{ className: 'nav nav-tabs nav-top-head ', id: 'nav-tab', role: 'tablist' },
							_react2.default.createElement(
								'a',
								{ className: `nav-item nav-link ${this.state.toggleTabType == 'aboutTab' ? 'active' : ''}`, 'data-toggle': 'tab', href: 'javascript:void(0);', role: 'tab', onClick: this.toggleTabs.bind(this, 'aboutTab') },
								'Overview'
							),
							this.props.ipd_info && this.props.ipd_info.hospitals && this.props.ipd_info.hospitals.result && this.props.ipd_info.hospitals.result.length ? _react2.default.createElement(
								'a',
								{ className: `nav-item nav-link ${this.state.toggleTabType == 'hospitalTab' ? 'active' : ''}`, 'data-toggle': 'tab', href: 'javascript:void(0);', role: 'tab', onClick: this.toggleTabs.bind(this, 'hospitalTab') },
								'Hospitals'
							) : '',
							this.props.ipd_info && this.props.ipd_info.doctors && this.props.ipd_info.doctors.result && this.props.ipd_info.doctors.result.length ? _react2.default.createElement(
								'a',
								{ className: `nav-item nav-link ${this.state.toggleTabType == 'doctorTab' ? 'active' : ''}`, 'data-toggle': 'tab', href: 'javascript:void(0);', role: 'tab', onClick: this.toggleTabs.bind(this, 'doctorTab') },
								'Doctors'
							) : '',
							this.props.ipd_info && this.props.ipd_info.about && this.props.ipd_info.about.offers && this.props.ipd_info.about.offers.length ? _react2.default.createElement(
								'a',
								{ className: `nav-item nav-link ${this.state.toggleTabType == 'offersTab' ? 'active' : ''}`, 'data-toggle': 'tab', href: 'javascript:void(0);', role: 'tab', onClick: this.toggleTabs.bind(this, 'offersTab') },
								'Offers'
							) : ''
						)
					)
				)
			),
			_react2.default.createElement(
				'div',
				{ className: 'tab-content' },
				_react2.default.createElement(
					'div',
					{ id: 'aboutTab', ref: 'aboutTab', className: 'nav_top_bar' },
					_react2.default.createElement(_aboutIPD2.default, _extends({}, this.props, { id: 'aboutTab', readMoreClicked: this.readMoreClicked.bind(this) }))
				),
				_react2.default.createElement(
					'div',
					{ id: 'hospitalTab', ref: 'hospitalTab', className: 'tab-pane fade', className: 'nav_top_bar' },
					this.props.ipd_info && this.props.ipd_info.hospitals && this.props.ipd_info.hospitals.result && this.props.ipd_info.hospitals.result.length ? _react2.default.createElement(_HospitalList2.default, _extends({}, this.props, { hospitalList: this.props.ipd_info && this.props.ipd_info.hospitals ? this.props.ipd_info.hospitals : [] })) : '',
					this.props.ipd_info && this.props.ipd_info.hospitals && this.props.ipd_info.hospitals.result && this.props.ipd_info.hospitals.result.length < this.props.ipd_info.hospitals.count ? _react2.default.createElement(
						'a',
						{ href: 'javascript:void(0);', className: 'btn-view-hospital', onClick: this.viewHospitalsClicked.bind(this) },
						`View all ${this.props.ipd_info.hospitals.count} Hospitals`
					) : ''
				),
				_react2.default.createElement(
					'div',
					{ id: 'doctorTab', ref: 'doctorTab', className: 'tab-pane fade nav_top_bar' },
					this.props.ipd_info && this.props.ipd_info.doctors && this.props.ipd_info.doctors.result && this.props.ipd_info.doctors.result.length && this.props.ipd_info.about && this.props.ipd_info.about.name ? _react2.default.createElement(
						'h2',
						{ className: 'section-heading hd-mrgn-top' },
						`Best ${this.props.ipd_info.about.name} Doctors ${this.props.ipd_info.seo && this.props.ipd_info.seo.location ? `in ${this.props.ipd_info.seo.location}` : ''} `
					) : '',
					this.props.ipd_info && this.props.ipd_info.doctors ? this.props.ipd_info.doctors.result.map((doctorCard, i) => {
						return _react2.default.createElement(_doctorResultCard2.default, _extends({ details: doctorCard, key: i, rank: i, seoFriendly: this.props.ipd_info.doctors.seo }, this.props));
					}) : '',
					this.props.ipd_info && this.props.ipd_info.doctors && this.props.ipd_info.doctors.result && this.props.ipd_info.doctors.result.length < this.props.ipd_info.doctors.count ? _react2.default.createElement(
						'a',
						{ href: 'javascript:void(0);', className: 'btn-view-hospital', onClick: this.viewDoctorsClicked.bind(this) },
						`View all ${this.props.ipd_info.doctors.count} Doctors`
					) : ''
				),
				this.props.ipd_info && this.props.ipd_info.about && this.props.ipd_info.about.offers && this.props.ipd_info.about.offers.length ? _react2.default.createElement(
					'div',
					{ id: 'offersTab', ref: 'offersTab' },
					_react2.default.createElement(_IpdOffersPage2.default, { offers: this.props.ipd_info.about.offers })
				) : '',
				_react2.default.createElement(
					'div',
					{ ref: 'readMoreView', className: 'tab-pane fade nav_top_bar' },
					_react2.default.createElement(_IpdAboutUs2.default, this.props)
				)
			),
			_react2.default.createElement(
				'div',
				{ className: 'btn-search-div btn-apply-div btn-sbmt' },
				_react2.default.createElement(
					'a',
					{ href: 'javascript:void(0);', style: { margin: 0 }, onClick: this.getCostEstimateClicked.bind(this), className: 'btn-search' },
					'Get Cost Estimate'
				)
			)
		);
	}
}

exports.default = IpdView;

/***/ }),

/***/ "./dev/js/components/ipd/IpdInfoView.js":
/*!**********************************************!*\
  !*** ./dev/js/components/ipd/IpdInfoView.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _LeftBar = __webpack_require__(/*! ../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _Loader = __webpack_require__(/*! ../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _footer = __webpack_require__(/*! ../commons/Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _IpdInfo = __webpack_require__(/*! ./IpdInfo.js */ "./dev/js/components/ipd/IpdInfo.js");

var _IpdInfo2 = _interopRequireDefault(_IpdInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class InfoView extends _react2.default.Component {

	render() {

		return _react2.default.createElement(
			'div',
			{ className: 'profile-body-wrap' },
			_react2.default.createElement(_DesktopProfileHeader2.default, { showSearch: true, new_fixed_header: 1 }),
			_react2.default.createElement(
				'section',
				{ className: 'container parent-section book-appointment-section breadcrumb-mrgn hospital-view-section' },
				_react2.default.createElement(
					'div',
					{ className: 'row main-row parent-section-row' },
					_react2.default.createElement(_LeftBar2.default, null),
					_react2.default.createElement(
						'div',
						{ className: 'col-12 col-md-7 col-lg-7 center-column' },
						this.props.IPD_INFO_LOADED || this.props.ipd_info && this.props.ipd_info.about && this.props.ipd_info.about.id == this.props.ipd_id ? _react2.default.createElement(_IpdInfo2.default, this.props) : _react2.default.createElement(_Loader2.default, null)
					),
					_react2.default.createElement(_RightBar2.default, { extraClass: ' chat-float-btn-2', showDesktopIpd: true, msgTemplate: 'gold_general_template' })
				)
			),
			_react2.default.createElement(_footer2.default, null)
		);
	}
}

exports.default = InfoView;

/***/ }),

/***/ "./dev/js/components/ipd/IpdOffersPage.js":
/*!************************************************!*\
  !*** ./dev/js/components/ipd/IpdOffersPage.js ***!
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

class IpdOffers extends _react2.default.Component {

	constructor(props) {
		super(props);
		this.state = {
			showTnc: false
		};
	}

	toggleTnC(id) {

		if (this.state.showTnc && document.getElementById(id)) {
			let height = document.getElementById(id).offsetHeight || 0;
			window.scrollTo(0, height);
		}
		this.setState({ showTnc: !this.state.showTnc });
	}

	render() {

		return _react2.default.createElement(
			"div",
			{ className: "hs-card" },
			_react2.default.createElement(
				"div",
				{ className: "ipd-ofr-cont" },
				_react2.default.createElement(
					"div",
					{ className: "widget-content" },
					_react2.default.createElement(
						"h4",
						{ className: "hs-ofr-heading" },
						_react2.default.createElement("img", { src: "/assets" + '/img/ipd-ofr.svg' }),
						"Offers Available"
					),
					this.props.offers.map((offer, i) => {
						return _react2.default.createElement(
							"div",
							{ className: "ipd-ofr-main", id: `${i}_offer`, key: i },
							_react2.default.createElement(
								"div",
								{ className: "hs-offerCard" },
								_react2.default.createElement(
									"div",
									{ className: "hs-ofr-crdHeading" },
									_react2.default.createElement(
										"div",
										{ className: "hs-ofr-contnn" },
										_react2.default.createElement("img", { src: "/assets" + '/img/ipd-cpn.svg' }),
										_react2.default.createElement(
											"p",
											null,
											offer.hospital ? _react2.default.createElement(
												"span",
												{ className: "offr-grn-cd" },
												offer.hospital
											) : '',
											offer.title
										)
									)
								),
								_react2.default.createElement(
									"div",
									{ className: "hs-ofr-card-content" },
									offer.coupon ? _react2.default.createElement(
										"div",
										{ className: "cpn-rqrd" },
										_react2.default.createElement(
											"p",
											null,
											"User Promo code :  ",
											_react2.default.createElement(
												"span",
												null,
												offer.coupon
											)
										)
									) : '',
									_react2.default.createElement(
										"p",
										null,
										offer.description
									),
									!offer.coupon ? _react2.default.createElement(
										"p",
										{ className: "no-cpn-rqrd" },
										"No Coupon Required"
									) : ''
								),
								offer.show_tnc && this.state.showTnc ? _react2.default.createElement(
									"div",
									{ className: "offer-hide-content" },
									_react2.default.createElement("div", { className: "custom-li-style", dangerouslySetInnerHTML: { __html: offer.tnc } })
								) : '',
								offer.show_tnc ? _react2.default.createElement(
									"div",
									{ className: "hs-offer-footer" },
									_react2.default.createElement(
										"p",
										{ className: "tc_cont" },
										"T&C Apply"
									),
									this.state.showTnc ? _react2.default.createElement(
										"p",
										{ className: "show-hide-offr cursor-pntr", onClick: this.toggleTnC.bind(this, `${i}_offer`) },
										"Hide Details ",
										_react2.default.createElement("img", { className: "offshowIcon ofhideIcon ", style: { width: '7px', marginLeft: '5px' }, src: "/assets" + '/img/right-sc.svg' })
									) : _react2.default.createElement(
										"p",
										{ className: "show-hide-offr cursor-pntr", onClick: this.toggleTnC.bind(this, `${i}_offer`) },
										"Show Details ",
										_react2.default.createElement("img", { className: "", style: { width: '7px', marginLeft: '5px' }, src: "/assets" + '/img/right-sc.svg' })
									)
								) : ''
							)
						);
					})
				)
			)
		);
	}
}

exports.default = IpdOffers;

/***/ }),

/***/ "./dev/js/components/ipd/aboutIPD.js":
/*!*******************************************!*\
  !*** ./dev/js/components/ipd/aboutIPD.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _HospitalList = __webpack_require__(/*! ./HospitalList.js */ "./dev/js/components/ipd/HospitalList.js");

var _HospitalList2 = _interopRequireDefault(_HospitalList);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class IPDAboutUs extends _react2.default.Component {

	constructor(props) {
		super(props);
		this.state = {
			toggleReadMore: false
		};
	}
	render() {
		let { ipd_info } = this.props;

		let aboutText = null;
		if (ipd_info && ipd_info.about && ipd_info.about.show_about) {

			aboutText = ipd_info.about.about;
		}

		return _react2.default.createElement(
			'div',
			{ className: 'tab-pane fade show active', id: 'nav-overview' },
			_react2.default.createElement(
				'ul',
				null,
				ipd_info.about && ipd_info.about.features ? ipd_info.about.features.map((ipd, i) => {
					return _react2.default.createElement(
						'li',
						{ key: i, className: 'widget pat-info' },
						_react2.default.createElement('img', { src: ipd.icon, alt: '', className: 'img-list' }),
						_react2.default.createElement(
							'div',
							null,
							`${ipd.name}:`,
							'  ',
							_react2.default.createElement(
								'span',
								null,
								ipd.value
							)
						)
					);
				}) : ''
			),
			aboutText ? _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h4',
					{ className: 'section-heading' },
					`About ${ipd_info.about ? ipd_info.about.name : ''}`,
					' '
				),
				_react2.default.createElement('div', { className: 'widget custom-li-style pb-30', style: { textAlign: 'justify' }, dangerouslySetInnerHTML: { __html: aboutText } })
			) : '',
			aboutText ? this.state.toggleReadMore ? _react2.default.createElement(
				'a',
				{ href: 'javascript:void(0);', className: 'read-more-btn', onClick: () => {
						let gtmData = {
							'Category': 'ConsumerApp', 'Action': 'IpdInfoReadLessClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-info-read-less-clicked', selectedId: this.props.ipd_id || ''
						};
						_gtm2.default.sendEvent({ data: gtmData });
						this.setState({ toggleReadMore: !this.state.toggleReadMore });
					} },
				'Read Less'
			) : _react2.default.createElement(
				'a',
				{ href: 'javascript:void(0);', className: 'read-more-btn', onClick: () => {
						let gtmData = {
							'Category': 'ConsumerApp', 'Action': 'IpdInfoReadMoreClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-info-read-more-clicked', selectedId: this.props.ipd_id || ''
						};
						_gtm2.default.sendEvent({ data: gtmData });
						this.props.readMoreClicked();
						//this.props.history.push(`/ipd/${this.props.ipd_id}/detail`)
					} },
				'Read More'
			) : ''
		);
	}
}

exports.default = IPDAboutUs;

/***/ }),

/***/ "./dev/js/containers/ipd/IpdInfo.js":
/*!******************************************!*\
  !*** ./dev/js/containers/ipd/IpdInfo.js ***!
  \******************************************/
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

var _IpdInfoView = __webpack_require__(/*! ../../components/ipd/IpdInfoView.js */ "./dev/js/components/ipd/IpdInfoView.js");

var _IpdInfoView2 = _interopRequireDefault(_IpdInfoView);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


class IpdInfoContainer extends _react2.default.Component {

	constructor(props) {
		super(props);
		this.state = {
			ipd_id: '',
			seoUrl: false
		};
	}

	static loadData(store, match, query) {

		let search_by_url = null;
		if (query.ipd_id) {} else {

			let title = match.url;
			search_by_url = title.substring(1, title.length).toLowerCase();
		}

		let ipd_id = query && query.ipd_id ? query.ipd_id : '';

		let selectedLocation = null;
		if (query.lat && query.long) {
			selectedLocation = { geometry: { location: { lat: query.lat, lng: query.long } }, place_id: query.place_id || '', formatted_address: "Delhi", sub_locality: query.sub_locality || '', locality: query.locality || '' };
		}

		return store.dispatch((0, _index.getIpdInfo)(ipd_id, selectedLocation, search_by_url));
	}

	componentDidMount() {
		const parsed = queryString.parse(this.props.location.search);
		let ipd_id = '';
		let search_by_url = null;
		if (parsed.ipd_id) {
			this.setState({ ipd_id: parsed.ipd_id });
			ipd_id = parsed.ipd_id;
			this.props.getIpdInfo(parsed.ipd_id, this.props.selectedLocation);

			let gtmData = {
				'Category': 'ConsumerApp', 'Action': 'IPDInfoPageLanded', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-info-page-landed', selectedId: parsed.ipd_id || ''
			};
			_gtm2.default.sendEvent({ data: gtmData });
		} else {
			let title = this.props.match.url;
			this.setState({ seoUrl: true });
			search_by_url = title.substring(1, title.length).toLowerCase();
			this.props.getIpdInfo('', this.props.selectedLocation, search_by_url, resp => {
				if (resp) {
					if (resp.about && resp.about.id) {
						this.setState({ ipd_id: resp.about.id });

						let gtmData = {
							'Category': 'ConsumerApp', 'Action': 'IPDInfoPageLanded', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-info-page-landed', selectedId: resp.about.id || ''
						};
						_gtm2.default.sendEvent({ data: gtmData });
					}
				}
			});
		}
		/*else if(this.props.commonSelectedCriterias.length){
  	this.setState({ipd_id: this.props.commonSelectedCriterias[0].id})
  	ipd_id = this.props.commonSelectedCriterias[0].id
  	this.props.getIpdInfo(this.props.commonSelectedCriterias[0].id, this.props.selectedLocation)	
  }*/
		if (window) {
			window.scrollTo(0, 0);
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

		if (!search_by_url) {
			let new_url = this.buildUrl(this.props);
			this.props.history.replace(new_url);
		}
	}

	buildUrl(props) {
		//build url for ipd procedure info
		let lat = 28.644800;
		let long = 77.216721;
		let place_id = "";
		let locality = 'Delhi';
		let sub_locality = '';

		const parsed = queryString.parse(this.props.location.search);

		if (props.selectedLocation) {
			place_id = props.selectedLocation.place_id || "";
			lat = props.selectedLocation.geometry.location.lat;
			long = props.selectedLocation.geometry.location.lng;
			if (typeof lat === 'function') lat = lat();
			if (typeof long === 'function') long = long();

			lat = parseFloat(parseFloat(lat).toFixed(6));
			long = parseFloat(parseFloat(long).toFixed(6));

			locality = props.selectedLocation.locality || '';
			sub_locality = props.selectedLocation.sub_locality || '';
		}

		let new_url = `${window.location.pathname}?ipd_id=${parsed.ipd_id}&place_id=${place_id}&lat=${lat}&long=${long}&locality=${locality}&sub_locality=${sub_locality}&showPopup=true`;

		if (parsed.utm_source) {
			new_url += `&utm_source=${parsed.utm_source || ''}`;
		}

		if (parsed.utm_medium) {
			new_url += `&utm_medium=${parsed.utm_medium || ''}`;
		}

		if (parsed.utm_campaign) {
			new_url += `&utm_campaign=${parsed.utm_campaign || ''}`;
		}

		if (this.props.is_ipd_form_submitted) {} else if (parsed && parsed.get_feedback == '1') {
			new_url += '&get_feedback=1';
		}

		if (parsed && parsed.type) {
			new_url += `&type=${parsed.type}`;
		}

		return new_url;
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.locationFetched != nextProps.locationFetched) {

			const parsed = queryString.parse(nextProps.location.search);
			let search_by_url = null;

			if (parsed.ipd_id) {
				this.setState({ ipd_id: parsed.ipd_id });
				this.props.getIpdInfo(parsed.ipd_id, nextProps.selectedLocation);
			} else {

				let title = this.props.match.url;
				this.setState({ seoUrl: true });
				search_by_url = title.substring(1, title.length).toLowerCase();
				this.props.getIpdInfo('', nextProps.selectedLocation, search_by_url, resp => {

					if (resp) {
						if (resp.about && resp.about.id) {
							this.setState({ ipd_id: resp.about.id });
						}
					}
				});
			} /*else if(nextProps.commonSelectedCriterias.length){
     this.setState({ipd_id: nextProps.commonSelectedCriterias[0].id})
     this.props.getIpdInfo(nextProps.commonSelectedCriterias[0].id, nextProps.selectedLocation)	
     }*/
			if (window) {
				window.scrollTo(0, 0);
			}
		}
	}

	render() {

		return _react2.default.createElement(_IpdInfoView2.default, _extends({}, this.props, this.state));
	}
}

IpdInfoContainer.contextTypes = {
	router: () => null
};
const mapStateToProps = state => {

	const {
		selectedLocation
	} = state.SEARCH_CRITERIA_OPD;

	const {
		selectedCriterias,
		ipd_info,
		IPD_INFO_LOADED,
		commonSelectedCriterias,
		locationFetched
	} = state.SEARCH_CRITERIA_IPD;

	const {
		ipd_chat,
		offerList,
		is_ipd_form_submitted
	} = state.USER;

	return {
		selectedLocation, selectedCriterias, ipd_info, IPD_INFO_LOADED, commonSelectedCriterias, locationFetched, ipd_chat, offerList,
		is_ipd_form_submitted
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getIpdInfo: (ipd_id, selectedLocation, search_by_url, cb) => dispatch((0, _index.getIpdInfo)(ipd_id, selectedLocation, search_by_url, cb)),
		saveProfileProcedures: (doctor_id, clinic_id, procedure_ids, forceAdd) => dispatch((0, _index.saveProfileProcedures)(doctor_id, clinic_id, procedure_ids, forceAdd)),
		selectOpdTimeSLot: (slot, reschedule, appointmentId) => dispatch((0, _index.selectOpdTimeSLot)(slot, reschedule, appointmentId)),
		cloneCommonSelectedCriterias: selectedCriterias => dispatch((0, _index.cloneCommonSelectedCriterias)(selectedCriterias)),
		mergeIpdCriteria: filterCriteria => dispatch((0, _index.mergeIpdCriteria)(filterCriteria)),
		ipdChatView: data => dispatch((0, _index.ipdChatView)(data)),
		checkIpdChatAgentStatus: cb => dispatch((0, _index.checkIpdChatAgentStatus)(cb)),
		getOfferList: (lat, long) => dispatch((0, _index.getOfferList)(lat, long))
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(IpdInfoContainer);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pcGQvRG9jdG9yQ2Fyb3VzZWxMaXN0LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2lwZC9FeHBhbnNpb25QYW5lbElwZC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pcGQvSG9zcGl0YWxMaXN0LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2lwZC9JcGRBYm91dFVzLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2lwZC9JcGRJbmZvLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2lwZC9JcGRJbmZvVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pcGQvSXBkT2ZmZXJzUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pcGQvYWJvdXRJUEQuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvaXBkL0lwZEluZm8uanMiXSwibmFtZXMiOlsiRG9jdG9yQ2Fyb3VzZWxMaXN0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJuYXZpZ2F0ZVRvRG9jdG9yIiwiZG9jdG9yIiwiZSIsInByZXZlbnREZWZhdWx0IiwidXJsIiwicHJvcHMiLCJoaXN0b3J5IiwicHVzaCIsImlkIiwiZGF0YSIsIkdUTSIsImdldFVzZXJJZCIsImRvY3Rvcl9pZCIsInNlbmRFdmVudCIsInJlbmRlciIsImRvY3RvckNhcmREYXRhIiwiYmFja2dyb3VuZCIsImxlbmd0aCIsIm1hcCIsIm5hbWUiLCJ0aHVtYm5haWwiLCJ3aWR0aCIsImhlaWdodCIsImZvbnRTaXplIiwiZGlzcGxheV9uYW1lIiwiYXZlcmFnZV9yYXRpbmciLCJBU1NFVFNfQkFTRV9VUkwiLCJleHBlcmllbmNlX3llYXJzIiwicXVhbGlmaWNhdGlvbnMiLCJxdWFsaWZpY2F0aW9uIiwiaW5kZXgiLCJob3NwaXRhbHMiLCJtYXJnaW5Ub3AiLCJob3NwaXRhbF9uYW1lIiwiZGVhbF9wcmljZSIsIm1ycCIsIkV4cGFuc2lvblBhbmVsSVBEIiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsIm9wZW4iLCJ0b2dnbGVPcGVuIiwic2V0U3RhdGUiLCJsaXN0U3R5bGUiLCJjdXJzb3IiLCJiaW5kIiwibWFyZ2luQm90dG9tIiwiZm9udFdlaWdodCIsInBhZGRpbmdSaWdodCIsInBvc2l0aW9uIiwidmFsdWUiLCJfX2h0bWwiLCJzaG93X2RvY3RvcnMiLCJkb2N0b3JzIiwicmVzdWx0IiwiSG9zcGl0YWxMaXN0VmlldyIsInRvZ2dsZUZpbHRlclBvcHVwIiwiaGVhbHRoX2luc3VyYW5jZV9wcm92aWRlciIsInRvZ2dsZVByb3ZpZGVyRmlsdGVyIiwiZ2V0Q29zdEVzdGltYXRlQ2xpY2tlZCIsImhvc3BpdGFsSWQiLCJjb21tb25TZWxlY3RlZENyaXRlcmlhcyIsImlwZF9pZCIsImd0bURhdGEiLCJnZXRIb3NwaXRhbERldGFpbFBhZ2UiLCJob3NwaXRhbExpc3QiLCJpcGRfaW5mbyIsImFib3V0Iiwic2VvIiwibG9jYXRpb24iLCJob3NwaXRhbCIsImkiLCJwcm92aWRlciIsIklQREFib3V0VXNWaWV3IiwidG9nZ2xlUmVhZE1vcmUiLCJhbGxfZGV0YWlscyIsImlwZEluZm8iLCJrZXkiLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJJcGRWaWV3IiwidG9nZ2xlVGFiVHlwZSIsInNlb0ZyaWVuZGx5IiwibWF0Y2giLCJpbmNsdWRlcyIsInNob3dMZWFkRm9ybSIsImNvbXBvbmVudERpZE1vdW50Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJzZWN0aW9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2VjdGlvbnMiLCJoZWFkZXJIZWlnaHQiLCJPYmplY3QiLCJrZXlzIiwicmVmcyIsImZvckVhY2giLCJwcnAiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib2Zmc2V0VG9wIiwic2VsZiIsIm9uc2Nyb2xsIiwic2Nyb2xsUG9zaXRpb24iLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJib2R5IiwidG9nZ2xlVGFicyIsInR5cGUiLCJnZXRFbGVtZW50QnlJZCIsInNlbGVjdGVkSWQiLCJlbG1udCIsInZpZXdIb3NwaXRhbHNDbGlja2VkIiwibWVyZ2VJcGRDcml0ZXJpYSIsIm5leHRTZWxlY3RlZENyaXRlcmlhcyIsImNhbm9uaWNhbF91cmwiLCJ2aWV3RG9jdG9yc0NsaWNrZWQiLCJjcml0ZXJpYSIsImNsb25lQ29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMiLCJyZWFkTW9yZUNsaWNrZWQiLCJnZXRNZXRhVGFnc0RhdGEiLCJzZW9EYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN1Ym1pdExlYWRGb3JtR2VuZXJhdGlvbiIsImlwZEZvcm1QYXJhbXMiLCJpcGRfZGF0YSIsInNob3dDaGF0IiwiY2hlY2tJcGRDaGF0QWdlbnRTdGF0dXMiLCJyZXNwb25zZSIsInVzZXJzIiwicGFyc2VkIiwicGFyc2UiLCJzZWFyY2giLCJzaG93UG9wdXAiLCJjYW5vbmljYWxVcmwiLCJDT05GSUciLCJBUElfQkFTRV9VUkwiLCJvZmZlckxpc3QiLCJmaWx0ZXIiLCJ4Iiwic2xpZGVyX2xvY2F0aW9uIiwiYnJlYWRjcnVtYiIsIm9mZmVycyIsImNvdW50IiwiZG9jdG9yQ2FyZCIsIm1hcmdpbiIsIkluZm9WaWV3IiwiSVBEX0lORk9fTE9BREVEIiwiSXBkT2ZmZXJzIiwic2hvd1RuYyIsInRvZ2dsZVRuQyIsIm9mZnNldEhlaWdodCIsIm9mZmVyIiwiY291cG9uIiwic2hvd190bmMiLCJ0bmMiLCJtYXJnaW5MZWZ0IiwiSVBEQWJvdXRVcyIsImFib3V0VGV4dCIsInNob3dfYWJvdXQiLCJmZWF0dXJlcyIsImlwZCIsImljb24iLCJ0ZXh0QWxpZ24iLCJJcGRJbmZvQ29udGFpbmVyIiwic2VvVXJsIiwibG9hZERhdGEiLCJzdG9yZSIsInF1ZXJ5Iiwic2VhcmNoX2J5X3VybCIsInN1YnN0cmluZyIsInRvTG93ZXJDYXNlIiwic2VsZWN0ZWRMb2NhdGlvbiIsImxhdCIsImxvbmciLCJnZW9tZXRyeSIsImxuZyIsInBsYWNlX2lkIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJzdWJfbG9jYWxpdHkiLCJsb2NhbGl0eSIsImRpc3BhdGNoIiwiZ2V0SXBkSW5mbyIsInJlc3AiLCJnZXRPZmZlckxpc3QiLCJuZXdfdXJsIiwiYnVpbGRVcmwiLCJyZXBsYWNlIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJwYXRobmFtZSIsInV0bV9zb3VyY2UiLCJ1dG1fbWVkaXVtIiwidXRtX2NhbXBhaWduIiwiaXNfaXBkX2Zvcm1fc3VibWl0dGVkIiwiZ2V0X2ZlZWRiYWNrIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsImxvY2F0aW9uRmV0Y2hlZCIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsIlNFQVJDSF9DUklURVJJQV9PUEQiLCJzZWxlY3RlZENyaXRlcmlhcyIsIlNFQVJDSF9DUklURVJJQV9JUEQiLCJpcGRfY2hhdCIsIlVTRVIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjYiIsInNhdmVQcm9maWxlUHJvY2VkdXJlcyIsImNsaW5pY19pZCIsInByb2NlZHVyZV9pZHMiLCJmb3JjZUFkZCIsInNlbGVjdE9wZFRpbWVTTG90Iiwic2xvdCIsInJlc2NoZWR1bGUiLCJhcHBvaW50bWVudElkIiwiZmlsdGVyQ3JpdGVyaWEiLCJpcGRDaGF0VmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLE1BQU1BLGtCQUFOLFNBQWlDQyxnQkFBTUMsU0FBdkMsQ0FBaUQ7O0FBRTdDQyxxQkFBaUJDLE1BQWpCLEVBQXlCQyxDQUF6QixFQUE0QjtBQUN4QkEsVUFBRUMsY0FBRjtBQUNBLFlBQUdGLE9BQU9HLEdBQVYsRUFBYztBQUNWLGlCQUFLQyxLQUFMLENBQVdDLE9BQVgsQ0FBbUJDLElBQW5CLENBQXdCTixPQUFPRyxHQUEvQjtBQUNI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RUFBdUJDLGFBQXZCLEVBQXNDQyxRQUF0QyxLQUFtRC9CLFNBQVMsa0NBQXNCekssU0FBdEIsRUFBaUNzTSxTQUFqQyxFQUE0Q0MsYUFBNUMsRUFBMkRDLFFBQTNELENBQVQsQ0FGcEU7QUFHTkMscUJBQW1CLENBQUNDLElBQUQsRUFBT0MsVUFBUCxFQUFtQkMsYUFBbkIsS0FBcUNuQyxTQUFTLDhCQUFrQmlDLElBQWxCLEVBQXdCQyxVQUF4QixFQUFvQ0MsYUFBcEMsQ0FBVCxDQUhsRDtBQUlObkcsZ0NBQStCc0YsaUJBQUQsSUFBdUJ0QixTQUFTLHlDQUE2QnNCLGlCQUE3QixDQUFULENBSi9DO0FBS04zRixvQkFBbUJ5RyxjQUFELElBQW1CcEMsU0FBUyw2QkFBaUJvQyxjQUFqQixDQUFULENBTC9CO0FBTU5DLGVBQWNqTixJQUFELElBQVU0SyxTQUFTLHdCQUFZNUssSUFBWixDQUFULENBTmpCO0FBT05zSCwyQkFBMEJpRixFQUFELElBQVEzQixTQUFTLG9DQUF3QjJCLEVBQXhCLENBQVQsQ0FQM0I7QUFRTnhCLGdCQUFjLENBQUNYLEdBQUQsRUFBS0MsSUFBTCxLQUFjTyxTQUFTLHlCQUFhUixHQUFiLEVBQWlCQyxJQUFqQixDQUFUO0FBUnRCLEVBQVA7QUFVQSxDQVhEOztrQkFhZSx5QkFBUTJCLGVBQVIsRUFBeUJNLGtCQUF6QixFQUE2QzNDLGdCQUE3QyxDIiwiZmlsZSI6IjU1LnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJbml0aWFsc1BpY3R1cmUgZnJvbSAnLi4vY29tbW9ucy9pbml0aWFsc1BpY3R1cmUnO1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuY2xhc3MgRG9jdG9yQ2Fyb3VzZWxMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIG5hdmlnYXRlVG9Eb2N0b3IoZG9jdG9yLCBlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBpZihkb2N0b3IudXJsKXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGRvY3Rvci51cmwpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvb3BkL2RvY3Rvci8ke2RvY3Rvci5pZH0/aGlkZV9zZWFyY2hfZGF0YT10cnVlYClcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAncmVjb21tZW5kZWREb2N0b3JDbGljaycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3JlY29tbWVuZGVkLWRvY3Rvci1jbGljaycsICdEb2N0b3JJRCc6IGRvY3Rvci5kb2N0b3JfaWRcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgIH1cblxuXHRyZW5kZXIoKXtcbiAgICAgICAgbGV0IHsgZG9jdG9yQ2FyZERhdGEgfSA9IHRoaXMucHJvcHNcblx0XHRyZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdlLWNvbnRlbnQgY3QtcHJvZmlsZSBwZC0wXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtcGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1jb250ZW50IHBkLTAgYm9yZGVyLWJvdHRvbS1wYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2NTY3JvbGxTbGlkZXJDb250YWluZXJcIiBzdHlsZT17e2JhY2tncm91bmQ6ICd0cmFuc3BhcmVudCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3RvckNhcmREYXRhICYmIGRvY3RvckNhcmREYXRhLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3JDYXJkRGF0YS5tYXAoKGRvY3RvciwgaWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGEgaHJlZj17YC8ke2RvY3Rvci51cmw/ZG9jdG9yLnVybDpgb3BkL2RvY3Rvci8ke2RvY3Rvci5pZH0/aGlkZV9zZWFyY2hfZGF0YT10cnVlYH1gfSBjbGFzc05hbWU9XCJkb2NTbGlkZUNhcmRcIiBrZXk9e2lkfSBvbkNsaWNrPXsoZSkgPT4gdGhpcy5uYXZpZ2F0ZVRvRG9jdG9yKGRvY3RvciwgZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY1NsaWRlSGVhZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluaXRpYWxzUGljdHVyZSBuYW1lPXtkb2N0b3IubmFtZX0gaGFzX2ltYWdlPXshIWRvY3Rvci50aHVtYm5haWx9IGNsYXNzTmFtZT1cImluaXRpYWxzUGljdHVyZS1kcyBzbGlkZURvY01haW5JbWdcIiBzdHlsZT17eyB3aWR0aDogNjAsIGhlaWdodDogNjAsIGZvbnRTaXplOiAnMnJlbScgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmx0ci11c3ItaW1hZ2UgaW1nLXJvdW5kIHNsaWRlRG9jTWFpbkltZ1wiIHNyYz17ZG9jdG9yLnRodW1ibmFpbH0gYWx0PXtkb2N0b3IuZGlzcGxheV9uYW1lfSB0aXRsZT17ZG9jdG9yLmRpc3BsYXlfbmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5pdGlhbHNQaWN0dXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3RvckNhcmREYXRhLmF2ZXJhZ2VfcmF0aW5nP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJhdGluZy1zLXRhclwiPntkb2N0b3JDYXJkRGF0YS5hdmVyYWdlX3JhdGluZ30gPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltYWdlcy9zdGFyLnBuZ1wifSBjbGFzc05hbWU9XCJzdGFyLWltZ1wiIC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZURvY0NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNsaWRlRG9jTmFtZVwiPntkb2N0b3IuZGlzcGxheV9uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNsaWRlRG9jRXhwXCI+e2RvY3Rvci5leHBlcmllbmNlX3llYXJzfSBZZWFycyBvZiBFeHBlcmllbmNlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvci5xdWFsaWZpY2F0aW9ucyAmJiBkb2N0b3IucXVhbGlmaWNhdGlvbnMubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2xpZGVEb2NkZWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IucXVhbGlmaWNhdGlvbnMubWFwKChxdWFsaWZpY2F0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtpbmRleH0+e3F1YWxpZmljYXRpb24ucXVhbGlmaWNhdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yLmhvc3BpdGFscyAmJiBkb2N0b3IuaG9zcGl0YWxzLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNsaWRlRG9jRXhwXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiA1IH19ID57ZG9jdG9yLmhvc3BpdGFsc1swXS5ob3NwaXRhbF9uYW1lfTwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZURvY1ByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGVOYW1lUHJjXCI+4oK5IHtkb2N0b3IuZGVhbF9wcmljZX08L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwic2xpZGVDdXRQcmNcIj7igrkge2RvY3Rvci5tcnB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRCb29rQnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5Cb29rIE5vdzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4pXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9jdG9yQ2Fyb3VzZWxMaXN0IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IERvY3RvckNhcm91c2VsTGlzdCBmcm9tICcuL0RvY3RvckNhcm91c2VsTGlzdC5qcydcblxuY2xhc3MgRXhwYW5zaW9uUGFuZWxJUEQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcGVuOiB0aGlzLnByb3BzLmlkPT0wP3RydWU6ZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZU9wZW4oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiAhdGhpcy5zdGF0ZS5vcGVuIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCB7IGRhdGEgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZXhwYW5zaW9uLXBhbmVsLWxpc3QtaXRlbVwiIHN0eWxlPXt7IGxpc3RTdHlsZTogJ25vbmUnLCBjdXJzb3I6ICdwb2ludGVyJyB9fSA+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlJyBvbkNsaWNrPXt0aGlzLnRvZ2dsZU9wZW4uYmluZCh0aGlzKX0gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwLCBmb250U2l6ZTogMTUsIGZvbnRXZWlnaHQ6IDUwMCwgcGFkZGluZ1JpZ2h0OiAzMCwgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm9wZW4gPyA8aW1nIGNsYXNzTmFtZT1cInRpdGxlYXJyb3ctdXBcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz4gOiA8aW1nIGNsYXNzTmFtZT1cInRpdGxlYXJyb3dcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUub3BlbiA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3JlLWNvbnRlbnQgbXItY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS52YWx1ZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwa2ctY29udGVudCB1bExpc3Rpbmctc3RsXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkYXRhLnZhbHVlIH19Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnNob3dfZG9jdG9ycyAmJiBkYXRhLmRvY3RvcnMgJiYgZGF0YS5kb2N0b3JzLnJlc3VsdD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERvY3RvckNhcm91c2VsTGlzdCBkb2N0b3JDYXJkRGF0YSA9IHtkYXRhLmRvY3RvcnMucmVzdWx0fSB7Li4udGhpcy5wcm9wc30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEV4cGFuc2lvblBhbmVsSVBEXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSG9zcGl0YWxDYXJkIGZyb20gJy4vSG9zcGl0YWxDYXJkLmpzJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuY2xhc3MgSG9zcGl0YWxMaXN0VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgc3VwZXIocHJvcHMpXG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgdG9nZ2xlRmlsdGVyUG9wdXA6IGZhbHNlLFxuICAgICAgICAgaGVhbHRoX2luc3VyYW5jZV9wcm92aWRlcjogW11cbiAgICAgIH1cbiAgIFx0fVxuXG4gICBcdHRvZ2dsZVByb3ZpZGVyRmlsdGVyKGRhdGE9W10pe1xuXG4gICBcdFx0dGhpcy5zZXRTdGF0ZSh7dG9nZ2xlRmlsdGVyUG9wdXA6ICF0aGlzLnN0YXRlLnRvZ2dsZUZpbHRlclBvcHVwLCBoZWFsdGhfaW5zdXJhbmNlX3Byb3ZpZGVyOiBkYXRhfSlcbiAgIFx0fVxuXG5cdGdldENvc3RFc3RpbWF0ZUNsaWNrZWQoaG9zcGl0YWxJZCl7XG5cdFx0aWYodGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcy5sZW5ndGgpe1xuXHRcdFx0bGV0IGlwZF9pZCA9IHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXNbMF0uaWRcblxuXHRcdFx0bGV0IGd0bURhdGEgPSB7XG5cdFx0ICAgIFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdJcGRHZXRDb3N0RXN0aW1hdGVDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaXBkLWdldC1jb3N0LWVzdGltYXRlLWNsaWNrZWQnLCAnc2VsZWN0ZWRJZCc6IGlwZF9pZCB8fCAnJywgJ2hvc3BpdGFsSWQnOiBob3NwaXRhbElkXG5cdFx0XHR9XG5cdFx0XHRHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVx0XHRcdFxuXHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9pcGQvJHtpcGRfaWR9L2dldFByaWNlRXN0aW1hdGU/aG9zcGl0YWxfaWQ9JHtob3NwaXRhbElkfWApXHRcdFxuXHRcdH1cbiAgICAgIFxuICAgXHR9XG5cbiAgIFx0Z2V0SG9zcGl0YWxEZXRhaWxQYWdlKGhvc3BpdGFsSWQsIHVybD1udWxsKXtcbiAgIFx0XHRsZXQgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSG9zcGl0YWxEZXRhaWxDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaG9zcGl0YWwtZGV0YWlsLWNsaWNrZWQnLCAnc2VsZWN0ZWRJZCc6IGhvc3BpdGFsSWQgfHwgJydcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuICAgICAgICBcbiAgICAgICAgaWYodXJsKXtcbiAgICAgICAgXHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgLyR7dXJsfT9mcm9tUHJvY2VkdXJlPXRydWVgKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgXHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2lwZC9ob3NwaXRhbC8ke2hvc3BpdGFsSWR9P2Zyb21Qcm9jZWR1cmU9dHJ1ZWApXG4gICAgICAgIH1cbiAgIFx0XHRcdFxuICAgXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0bGV0IHsgaG9zcGl0YWxMaXN0LCBpcGRfaW5mbyB9ID0gdGhpcy5wcm9wc1xuXHRcdHJldHVybihcblx0XHRcdDxkaXY+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpcGRfaW5mbyAmJiBpcGRfaW5mby5hYm91dCAmJiBpcGRfaW5mby5hYm91dC5uYW1lP1xuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRpbmcgaGQtbXJnbi10b3BcIj57YEJlc3QgJHtpcGRfaW5mby5hYm91dC5uYW1lfSBIb3NwaXRhbHMgJHtpcGRfaW5mby5zZW8/YGluICR7dGhpcy5wcm9wcy5pcGRfaW5mby5zZW8ubG9jYXRpb259YDonJ31gfTwvaDI+XG5cdFx0XHRcdFx0OicnXHRcblx0XHRcdFx0fVxuXHRcdFx0XHQ8dWw+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRob3NwaXRhbExpc3QgJiYgaG9zcGl0YWxMaXN0LnJlc3VsdD9cblx0XHRcdFx0XHRob3NwaXRhbExpc3QucmVzdWx0Lm1hcCgoaG9zcGl0YWwsIGkpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiA8SG9zcGl0YWxDYXJkIGtleT17aX0gZGF0YT17aG9zcGl0YWx9IGdldENvc3RFc3RpbWF0ZUNsaWNrZWQ9e3RoaXMuZ2V0Q29zdEVzdGltYXRlQ2xpY2tlZC5iaW5kKHRoaXMpfSBnZXRIb3NwaXRhbERldGFpbFBhZ2U9e3RoaXMuZ2V0SG9zcGl0YWxEZXRhaWxQYWdlLmJpbmQodGhpcyl9IHRvZ2dsZVByb3ZpZGVyRmlsdGVyPXt0aGlzLnRvZ2dsZVByb3ZpZGVyRmlsdGVyLmJpbmQodGhpcyl9IHsuLi50aGlzLnByb3BzfS8+XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQ6Jydcblx0XHRcdFx0fVxuXHRcdFx0XHQ8L3VsPlxuXG5cdFx0XHRcdHtcblx0XHQgICAgICAgIFx0dGhpcy5zdGF0ZS50b2dnbGVGaWx0ZXJQb3B1cD9cblx0XHQgICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJpcGQtc2VjdGlvblwiPlxuXHRcdFx0ICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLW92ZXJsYXlcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVByb3ZpZGVyRmlsdGVyLmJpbmQodGhpcyl9PjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLXBvcHVwIGhsdGgtaW5zLXBvcCBpbnMtcG9wXCI+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcm9zcy1idG5cIj48aW1nIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9jcC9hc3NldHMvaW1nL2ljb25zL2Nsb3NlLnBuZ1wiIGFsdD1cIlwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlUHJvdmlkZXJGaWx0ZXIuYmluZCh0aGlzKX0vPjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgICAgIHtcblx0XHQgICAgICAgICAgICAgICAgICAgICAgIFx0dGhpcy5zdGF0ZS5oZWFsdGhfaW5zdXJhbmNlX3Byb3ZpZGVyLmxlbmd0aD9cblx0XHQgICAgICAgICAgICAgICAgICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJwb3AtaGVhZCB0ZXh0LWNlbnRlclwiPkhlYWx0aCBJbnN1cmFuY2UgUHJvdmlkZXJzPC9kaXY+XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICBcdDonJ1xuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgXHRcdFxuXHQgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgICAgICAgICB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgXHR0aGlzLnN0YXRlLmhlYWx0aF9pbnN1cmFuY2VfcHJvdmlkZXIubGVuZ3RoP1xuXHQgICAgICAgICAgICAgICAgICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtbGlzdGluZ1wiPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wLWhlYWRcIj5IZWFsdGggSW5zdXJhbmNlIFByb3ZpZGVyczwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJyYW5nZS1zbGlkZXItdWxcIj5cblx0ICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHR7XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgXHR0aGlzLnN0YXRlLmhlYWx0aF9pbnN1cmFuY2VfcHJvdmlkZXIubWFwKChwcm92aWRlciwgaSkgPT4ge1xuXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0cmV0dXJuIDxsaSBrZXk9e2l9Pntwcm92aWRlcn1cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHR9KVxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICBcdH0gICAgICAgICAgXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0ICAgICAgICAgICAgICAgICAgICA6Jydcblx0ICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA6Jydcblx0XHQgICAgICAgIH1cblx0XHRcdDwvZGl2Plx0XG4gICAgICAgICAgIFxuXHRcdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvc3BpdGFsTGlzdFZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IEV4cGFuc2lvblBhbmVsSXBkIGZyb20gJy4vRXhwYW5zaW9uUGFuZWxJcGQuanMnXG5cblxuY2xhc3MgSVBEQWJvdXRVc1ZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dG9nZ2xlUmVhZE1vcmU6IGZhbHNlXG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpe1xuXHRcdGxldCB7IGlwZF9pbmZvIH0gPSB0aGlzLnByb3BzXG5cdFx0XG5cdFx0cmV0dXJuKFxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZVwiIGlkPVwibmF2LW92ZXJ2aWV3XCI+XG4gICAgICAgICAgICAgXHR7XG4gICAgICAgICAgICAgXHRcdGlwZF9pbmZvICYmIGlwZF9pbmZvLmFib3V0ICYmIGlwZF9pbmZvLmFib3V0LmFsbF9kZXRhaWxzICYmIGlwZF9pbmZvLmFib3V0LmFsbF9kZXRhaWxzLmxlbmd0aD9cbiAgICAgICAgICAgICBcdFx0PGg0IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGluZ1wiPntgQWJvdXQgJHtpcGRfaW5mby5hYm91dD9pcGRfaW5mby5hYm91dC5uYW1lOidUcmVhdG1lbnQnfWB9IDwvaDQ+XG5cdFx0XHRcdFx0OicnXHRcdFxuICAgICAgICAgICAgIFx0fVxuICAgICAgICAgICAgIFx0XG4gICAgICAgICAgICAgICAge1xuXHRcdFx0XHRcdGlwZF9pbmZvICYmIGlwZF9pbmZvLmFib3V0ICYmIGlwZF9pbmZvLmFib3V0LmFsbF9kZXRhaWxzICYmIGlwZF9pbmZvLmFib3V0LmFsbF9kZXRhaWxzLmxlbmd0aD9cblx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0aXBkX2luZm8uYWJvdXQuYWxsX2RldGFpbHMubWFwKChpcGRJbmZvLCBrZXkpPT4ge1xuXG5cdFx0XHRcdFx0XHRcdHJldHVybiA8RXhwYW5zaW9uUGFuZWxJcGQgZGF0YT17aXBkSW5mb30ga2V5PXtrZXl9IHsuLi50aGlzLnByb3BzfSBpZD17a2V5fS8+XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDonJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElQREFib3V0VXNWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IElwZEFib3V0VXMgZnJvbSAnLi9hYm91dElQRC5qcydcbmltcG9ydCBJcGRJbmZvVmlld01vcmUgZnJvbSAnLi9JcGRBYm91dFVzLmpzJ1xuaW1wb3J0IEhvc3BpdGFsTGlzdCBmcm9tICcuL0hvc3BpdGFsTGlzdC5qcydcbmltcG9ydCBEb2N0b3JSZXN1bHRDYXJkIGZyb20gJy4uL29wZC9jb21tb25zL2RvY3RvclJlc3VsdENhcmQnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2NvbW1vbnMvTG9hZGVyJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBIZWxtZXRUYWdzIGZyb20gJy4uL2NvbW1vbnMvSGVsbWV0VGFncydcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vY29uZmlnJ1xuaW1wb3J0IEJyZWFkQ3J1bWJWaWV3IGZyb20gJy4vYnJlYWRDcnVtYi5qcydcbmltcG9ydCBJcGRGb3JtVmlldyBmcm9tICcuLi8uLi9jb250YWluZXJzL2lwZC9JcGRGb3JtLmpzJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKVxuaW1wb3J0IElwZExlYWRGb3JtIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvaXBkL2lwZExlYWRGb3JtLmpzJ1xuaW1wb3J0IElwZE9mZmVyc1BhZ2UgZnJvbSAnLi9JcGRPZmZlcnNQYWdlLmpzJ1xuaW1wb3J0IEJhbm5lckNhcm91c2VsIGZyb20gJy4uL2NvbW1vbnMvSG9tZS9iYW5uZXJDYXJvdXNlbCc7XG5cbmNsYXNzIElwZFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dG9nZ2xlVGFiVHlwZTogJ2Fib3V0VGFiJyxcblx0XHRcdHRvZ2dsZVJlYWRNb3JlOiBmYWxzZSxcblx0XHRcdHNlb0ZyaWVuZGx5OiB0aGlzLnByb3BzLm1hdGNoLnVybC5pbmNsdWRlcygnLWlwZHAnKSxcblx0XHRcdHNob3dMZWFkRm9ybTp0cnVlXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHRpZih3aW5kb3cpe1xuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsMClcblx0XHR9XG5cblx0XHR2YXIgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2X3RvcF9iYXJcIik7XG5cdFx0dmFyIHNlY3Rpb25zID0ge307XG5cdFx0dmFyIGkgPSAwXG5cblx0XHRsZXQgaGVhZGVySGVpZ2h0ID0gMFx0ICAgICAgICBcblxuXHRcdE9iamVjdC5rZXlzKHRoaXMucmVmcykuZm9yRWFjaCgocHJwLCBpKSA9PiB7XG5cdFx0XHRcblx0XHRcdGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0aWNreUJhcicpICYmIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0aWNreUJhcicpWzBdKXtcblx0XHRcdFx0aGVhZGVySGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RpY2t5QmFyJylbMF0ub2Zmc2V0VG9wIC0gMTAwXG5cdFx0XHR9XG5cdFx0XHRzZWN0aW9uc1twcnBdID0gdGhpcy5yZWZzW3BycF0ub2Zmc2V0VG9wICsgaGVhZGVySGVpZ2h0XHRcdFx0XHRcdFx0XG5cblx0XHR9KVxuXHRcdC8vaWYgdGhlcmUgaXMgYW55IHRhYiBuYW1lIGluIGxhbmRpbmcgdXJsIHRoZW4gd2Ugc2Nyb2xsIHRvIHRoYXQgdGFiIHBvc2l0aW9uXG5cdFx0bGV0IHNlbGYgPSB0aGlzXG5cdFx0aWYod2luZG93ICYmIGRvY3VtZW50KXtcblx0XHRcdHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuXHRcdCAgICB2YXIgc2Nyb2xsUG9zaXRpb24gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG5cdFx0ICAgIGZvciAoaSBpbiBzZWN0aW9ucykge1xuXHRcdCAgICBcdGlmKHNlbGYucmVmc1tpXSl7XG5cblx0XHQgICAgXHRcdGlmKGkuaW5jbHVkZXMoJ3JlYWRNb3JlVmlldycpKXtcblx0XHQgICAgXHRcdFx0aWYoc2Nyb2xsUG9zaXRpb24gPiAoc2VsZi5yZWZzWydyZWFkTW9yZVZpZXcnXS5vZmZzZXRUb3AgKyAgaGVhZGVySGVpZ2h0ICkpe1xuXHRcdFx0XHRcdCAgICBcdHNlbGYuc2V0U3RhdGUoe3RvZ2dsZVRhYlR5cGU6ICcnfSlcblx0XHRcdFx0XHQgICAgfVxuXHRcdCAgICBcdFx0fWVsc2V7XG5cblx0XHQgICAgXHRcdFx0aWYgKChzZWxmLnJlZnNbaV0ub2Zmc2V0VG9wICsgIGhlYWRlckhlaWdodCApPD0gc2Nyb2xsUG9zaXRpb24pIHtcblx0XHRcdFx0XHQgICAgICBcdHNlbGYuc2V0U3RhdGUoe3RvZ2dsZVRhYlR5cGU6IGl9KVxuXHRcdFx0XHRcdCAgICB9XHRcblx0XHQgICAgXHRcdH1cblx0XHQgICAgXHRcdFxuXHRcdCAgICBcdH1cblx0XHQgICAgfVxuXHRcdCAgfVx0XG5cdFx0fVxuXHR9XG5cblx0dG9nZ2xlVGFicyh0eXBlKXtcblx0XHQvL3RhYnMgaW4gaXBkIGluZm8gcGFnZVxuXHRcdGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHR5cGUpKXtcblx0XHRcdGxldCBndG1EYXRhID0ge1xuXHQgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0lwZFRhYkNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdpcGQtdGFiLWNsaWNrZWQnLCBzZWxlY3RlZElkOiB0aGlzLnByb3BzLmlwZF9pZCB8fCAnJywgdHlwZTogdHlwZVxuXHQgICAgICAgIH1cblx0ICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuXG5cdFx0XHR2YXIgZWxtbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0eXBlKVxuXHRcdFx0XG5cdFx0XHRsZXQgaGVhZGVySGVpZ2h0ID0gMFxuXHRcdFx0aWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RpY2t5QmFyJykgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RpY2t5QmFyJylbMF0pe1xuXHRcdFx0XHRoZWFkZXJIZWlnaHQgPSB0aGlzLnJlZnNbdHlwZV0ub2Zmc2V0VG9wIC00NVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7dG9nZ2xlVGFiVHlwZTogdHlwZX0pXG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCxoZWFkZXJIZWlnaHQpXG5cblx0XHR9XG5cdH1cblxuXHR2aWV3SG9zcGl0YWxzQ2xpY2tlZCgpe1xuXHRcdGxldCBndG1EYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdJcGRWaWV3QWxsSG9zcGl0YWxDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaXBkLXZpZXctYWxsLWhvc3BpdGFsLWNsaWNrZWQnLCBzZWxlY3RlZElkOiB0aGlzLnByb3BzLmlwZF9pZCB8fCAnJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG5cdFx0dGhpcy5wcm9wcy5tZXJnZUlwZENyaXRlcmlhKHtcblx0XHRcdGNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzOiB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLFxuXHRcdFx0bmV4dFNlbGVjdGVkQ3JpdGVyaWFzOiB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzXG5cdFx0fSlcblxuXHRcdGlmKHRoaXMucHJvcHMuaXBkX2luZm8gJiYgdGhpcy5wcm9wcy5pcGRfaW5mby5ob3NwaXRhbHMgJiYgdGhpcy5wcm9wcy5pcGRfaW5mby5ob3NwaXRhbHMuY2Fub25pY2FsX3VybCl7XG5cblx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHt0aGlzLnByb3BzLmlwZF9pbmZvLmhvc3BpdGFscy5jYW5vbmljYWxfdXJsfWApXG5cdFx0fWVsc2V7XG5cblx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvaXBkL3NlYXJjaEhvc3BpdGFsc2ApXG5cdFx0fVxuXHRcdFxuXHR9XG5cblx0dmlld0RvY3RvcnNDbGlja2VkKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcyAmJiB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLmxlbmd0aCl7XG5cblxuXHRcdFx0bGV0IGd0bURhdGEgPSB7XG5cdCAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSXBkVmlld0FsbERvY3RvckNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdpcGQtdmlldy1hbGwtZG9jdG9yLWNsaWNrZWQnLCBzZWxlY3RlZElkOiB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzWzBdLmlkIHx8ICcnXG5cdCAgICAgICAgfVxuXHQgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG5cblx0XHRcdGxldCBjcml0ZXJpYSA9IHt9XG5cdFx0XHRjcml0ZXJpYS5pZCA9IHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXNbMF0uaWRcblx0XHRcdGNyaXRlcmlhLm5hbWUgPSB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzWzBdLm5hbWVcblx0XHRcdGNyaXRlcmlhLnR5cGUgPSAnaXBkJyBcblx0XHRcdHRoaXMucHJvcHMuY2xvbmVDb21tb25TZWxlY3RlZENyaXRlcmlhcyhjcml0ZXJpYSlcblxuXHRcdFx0aWYodGhpcy5wcm9wcy5pcGRfaW5mbyAmJiB0aGlzLnByb3BzLmlwZF9pbmZvLmRvY3RvcnMgJiYgdGhpcy5wcm9wcy5pcGRfaW5mby5kb2N0b3JzLmNhbm9uaWNhbF91cmwpe1xuXG5cdFx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHt0aGlzLnByb3BzLmlwZF9pbmZvLmRvY3RvcnMuY2Fub25pY2FsX3VybH1gKVxuXHRcdFx0fWVsc2V7XG5cblx0XHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9vcGQvc2VhcmNocmVzdWx0c2ApXG5cdFx0XHR9XG5cdFx0XHRcdFxuXHRcdH1cblx0XHRcblx0fVxuXG5cdGdldENvc3RFc3RpbWF0ZUNsaWNrZWQoKXtcblx0XHRsZXQgZ3RtRGF0YSA9IHtcblx0ICAgIFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdJcGRHZXRDb3N0RXN0aW1hdGVDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaXBkLWdldC1jb3N0LWVzdGltYXRlLWNsaWNrZWQnLCBzZWxlY3RlZElkOiB0aGlzLnByb3BzLmlwZF9pZCB8fCAnJ1xuXHRcdH1cblx0XHRHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuXHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvaXBkLyR7dGhpcy5wcm9wcy5pcGRfaWR9L2dldFByaWNlRXN0aW1hdGVgKVxuXHR9XG5cblx0cmVhZE1vcmVDbGlja2VkKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7dG9nZ2xlUmVhZE1vcmU6IHRydWV9KVxuXHRcdGlmKHRoaXMucmVmc1sncmVhZE1vcmVWaWV3J10pe1xuXHRcdFx0bGV0IGhlYWRlckhlaWdodCA9IHRoaXMucmVmc1sncmVhZE1vcmVWaWV3J10ub2Zmc2V0VG9wIC00NVxuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsaGVhZGVySGVpZ2h0KVx0XG5cdFx0fVxuXHR9XG5cblx0Z2V0TWV0YVRhZ3NEYXRhKHNlb0RhdGEpIHtcbiAgICAgICAgbGV0IHRpdGxlID0gXCJJUEQgUHJvY2VkdXJlIFBhZ2VcIlxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zZW9GcmllbmRseSkge1xuICAgICAgICAgICAgdGl0bGUgPSBcIlwiXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gXCJcIlxuICAgICAgICBpZiAoc2VvRGF0YSkge1xuICAgICAgICAgICAgdGl0bGUgPSBzZW9EYXRhLnRpdGxlIHx8IFwiXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gc2VvRGF0YS5kZXNjcmlwdGlvbiB8fCBcIlwiXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uIH1cbiAgICB9XG5cbiAgICBzdWJtaXRMZWFkRm9ybUdlbmVyYXRpb24oaXBkRm9ybVBhcmFtcykge1xuXHRcdGlmIChpcGRGb3JtUGFyYW1zKSB7XG5cdFx0XHRsZXQgZ3RtRGF0YSA9IHtcblx0XHRcdFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdJcGRQcm9jZWR1cmVQYWdlRm9ybUNsb3NlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2lwZC1wcm9jZWR1cmUtcGFnZS1mb3JtLWNsb3NlZCdcblx0XHRcdH1cblx0XHRcdEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG5cdFx0fVxuXHRcdGxldCBpcGRfZGF0YSA9IHtcblx0XHRcdHNob3dDaGF0OiB0cnVlLFxuXHRcdFx0aXBkRm9ybVBhcmFtczogaXBkRm9ybVBhcmFtc1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd0xlYWRGb3JtOiBmYWxzZSwgaXBkRm9ybVBhcmFtczogaXBkRm9ybVBhcmFtcyB9LCAoKT0+e1xuXG5cdFx0XHR0aGlzLnByb3BzLmNoZWNrSXBkQ2hhdEFnZW50U3RhdHVzKChyZXNwb25zZSk9Pntcblx0XHRcdFx0aWYocmVzcG9uc2UgJiYgcmVzcG9uc2UudXNlcnMgJiYgcmVzcG9uc2UudXNlcnMubGVuZ3RoKSB7XG5cblx0XHRcdFx0XHQvLyB0aGlzLnByb3BzLmlwZENoYXRWaWV3KHtzaG93SXBkQ2hhdDp0cnVlLCBpcGRGb3JtOiBpcGRGb3JtUGFyYW1zLCBzaG93TWluaW1pemU6IHRydWV9KVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHRyZW5kZXIoKXtcblxuXHRcdGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG5cdFx0bGV0IHNob3dQb3B1cCA9IGZhbHNlICYmIHRoaXMuc3RhdGUuc2hvd0xlYWRGb3JtICYmIHRoaXMucHJvcHMuaXBkX2luZm8gJiYgdGhpcy5wcm9wcy5pcGRfaW5mby5hYm91dFxuXG5cdFx0cmV0dXJuKCAgICAgICAgICAgICAgICAgIFx0XHRcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwiaXBkLXNlY3Rpb24gaXBkU2VjdGlvbiBjYXJkTWFpblBhZGRpbmdSbXZcIj5cbiAgICAgICAgICAgXHQgIFx0e1xuXHRcdFx0XHRcdHNob3dQb3B1cCA/XG5cdFx0XHRcdFx0XHQ8SXBkTGVhZEZvcm0gc3VibWl0TGVhZEZvcm1HZW5lcmF0aW9uPXt0aGlzLnN1Ym1pdExlYWRGb3JtR2VuZXJhdGlvbi5iaW5kKHRoaXMpfSB7Li4udGhpcy5wcm9wc30gaG9zcGl0YWxfbmFtZT17bnVsbH0gaG9zcGl0YWxfaWQ9e251bGx9IGZvcm1Tb3VyY2U9J2lwZFByb2NlZHVyZVBvcHVwJyBwcm9jZWR1cmVfaWQ9e3RoaXMucHJvcHMuaXBkX2luZm8gJiYgdGhpcy5wcm9wcy5pcGRfaW5mby5hYm91dD90aGlzLnByb3BzLmlwZF9pbmZvLmFib3V0LmlkOicnfSBwcm9jZWR1cmVfbmFtZT17dGhpcy5wcm9wcy5pcGRfaW5mbyAmJiB0aGlzLnByb3BzLmlwZF9pbmZvLmFib3V0P3RoaXMucHJvcHMuaXBkX2luZm8uYWJvdXQubmFtZTonJ30vPlxuXHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHR9XG4gICAgICAgICAgIFx0ICA8SGVsbWV0VGFncyB0YWdzRGF0YT17e1xuICAgICAgICAgICAgICAgICAgICBjYW5vbmljYWxVcmw6IGAke0NPTkZJRy5BUElfQkFTRV9VUkx9JHt0aGlzLnByb3BzLm1hdGNoLnVybH1gLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5nZXRNZXRhVGFnc0RhdGEodGhpcy5wcm9wcy5pcGRfaW5mby5zZW8pLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5nZXRNZXRhVGFnc0RhdGEodGhpcy5wcm9wcy5pcGRfaW5mby5zZW8pLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgfX0gbm9JbmRleD17IXRoaXMuc3RhdGUuc2VvRnJpZW5kbHl9IC8+XG5cbiAgICAgICAgICAgICAgICB7Lyo8dWwgY2xhc3NOYW1lPVwibXJiLTEwIG1ydC0yMCBicmVhZGNydW1iLWxpc3RcIiBzdHlsZT17eyB3b3JkQnJlYWs6ICdicmVhay13b3JkJyB9fT5cblx0ICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWxpc3QtaXRlbVwiPlxuXHQgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgb25DbGljaz17KGUpID0+IHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJylcblx0ICAgICAgICAgICAgICAgICAgICB9fT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwIGJyZWFkY3J1bWItdGl0bGUgYnJlYWRjcnVtYi1jb2xvcmVkLXRpdGxlXCI+SG9tZTwvc3Bhbj5cblx0ICAgICAgICAgICAgICAgICAgICA8L2E+XG5cdCAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1hcnJvd1wiPiZndDs8L3NwYW4+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItbGlzdC1pdGVtXCI+XG5cdCAgICAgICAgICAgICAgICBcdDxhIGhyZWY9XCIvXCIgb25DbGljaz17KGUpID0+IHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvcHJvY2VkdXJlcycpXG5cdCAgICAgICAgICAgICAgICAgICAgfX0+XG5cdCAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwIGJyZWFkY3J1bWItdGl0bGUgIGJyZWFkY3J1bWItY29sb3JlZC10aXRsZVwiPkFsbCBQcm9jZWR1cmVzPC9zcGFuPlxuXHQgICAgICAgICAgICAgICAgICAgIDwvYT5cblx0ICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmVhZGNydW1iLWFycm93XCI+Jmd0Ozwvc3Bhbj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1saXN0LWl0ZW1cIj5cblx0ICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDAgYnJlYWRjcnVtYi10aXRsZVwiPnt0aGlzLnByb3BzLmlwZF9pbmZvP2Ake3RoaXMucHJvcHMuaXBkX2luZm8uYWJvdXQubmFtZX1gOicnfTwvc3Bhbj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIDwvdWw+Ki99XG5cblx0ICAgICAgICAgICAge1xuXHQgICAgICAgICAgICBcdHRoaXMucHJvcHMub2ZmZXJMaXN0ICYmIHRoaXMucHJvcHMub2ZmZXJMaXN0LmZpbHRlcih4ID0+IHguc2xpZGVyX2xvY2F0aW9uID09PSAnaXBkX3Byb2NlZHVyZV9wYWdlJykubGVuZ3RoP1xuXHQgICAgICAgICAgICBcdDxCYW5uZXJDYXJvdXNlbCB7Li4udGhpcy5wcm9wc30gYT1cImlwZF9wcm9jZWR1cmVfcGFnZVwiIHNsaWRlckxvY2F0aW9uPVwiaXBkX3Byb2NlZHVyZV9wYWdlXCIgaXBkPXt0cnVlfS8+XG5cdCAgICAgICAgICAgIFx0OicnXG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICB7XG5cdCAgICAgICAgICAgIFx0dGhpcy5wcm9wcy5pcGRfaW5mbyAmJiB0aGlzLnByb3BzLmlwZF9pbmZvLmJyZWFkY3J1bWI/XG5cdCAgICAgICAgICAgIFx0PEJyZWFkQ3J1bWJWaWV3IGJyZWFkY3J1bWI9e3RoaXMucHJvcHMuaXBkX2luZm8uYnJlYWRjcnVtYn0gey4uLnRoaXMucHJvcHN9Lz5cblx0ICAgICAgICAgICAgXHQ6Jydcblx0ICAgICAgICAgICAgfVxuXHRcdFx0XHRcbiAgICAgICAgICAgXHQgIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRpbmcgdG9wLXNjLWhlYWQgcHQtMFwiPiA8c3BhbiBjbGFzc05hbWU9XCJhYm91dC1oZWFkXCI+IHtgJHt0aGlzLnByb3BzLmlwZF9pbmZvICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuaXBkX2luZm8pLmxlbmd0aD9gJHt0aGlzLnByb3BzLmlwZF9pbmZvLmFib3V0Lm5hbWV9IENvc3QgJHt0aGlzLnByb3BzLmlwZF9pbmZvICYmIHRoaXMucHJvcHMuaXBkX2luZm8uc2VvICYmIHRoaXMucHJvcHMuaXBkX2luZm8uc2VvLmxvY2F0aW9uP2BpbiAke3RoaXMucHJvcHMuaXBkX2luZm8uc2VvLmxvY2F0aW9ufWA6Jyd9ICBgOicnfWB9IDwvc3Bhbj5cblx0XHRcdFx0XHQ8L2gxPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bGwtd2lkZ2V0IG1yZy1iMCBzdGlja3lCYXJcIj5cbiAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJ0YWItaGVhZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFicyBuYXYtdG9wLWhlYWQgXCIgaWQ9XCJuYXYtdGFiXCIgcm9sZT1cInRhYmxpc3RcIj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgbmF2LWl0ZW0gbmF2LWxpbmsgJHt0aGlzLnN0YXRlLnRvZ2dsZVRhYlR5cGU9PSdhYm91dFRhYic/J2FjdGl2ZSc6Jyd9YH0gZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIHJvbGU9XCJ0YWJcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVRhYnMuYmluZCh0aGlzLCdhYm91dFRhYicpfT5PdmVydmlld1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxhIGNsYXNzTmFtZT17YG5hdi1pdGVtIG5hdi1saW5rICR7dGhpcy5zdGF0ZS50b2dnbGVUYWJUeXBlPT0nYm9va05vdyc/J2FjdGl2ZSc6Jyd9YH0gZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIHJvbGU9XCJ0YWJcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVRhYnMuYmluZCh0aGlzLCdib29rTm93Jyl9PkJvb2sgTm93XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT4qL31cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdHRoaXMucHJvcHMuaXBkX2luZm8gJiYgdGhpcy5wcm9wcy5pcGRfaW5mby5ob3NwaXRhbHMgJiYgdGhpcy5wcm9wcy5pcGRfaW5mby5ob3NwaXRhbHMucmVzdWx0ICYmIHRoaXMucHJvcHMuaXBkX2luZm8uaG9zcGl0YWxzLnJlc3VsdC5sZW5ndGg/XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0PGEgY2xhc3NOYW1lPXtgbmF2LWl0ZW0gbmF2LWxpbmsgJHt0aGlzLnN0YXRlLnRvZ2dsZVRhYlR5cGU9PSdob3NwaXRhbFRhYic/J2FjdGl2ZSc6Jyd9YH0gZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIHJvbGU9XCJ0YWJcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVRhYnMuYmluZCh0aGlzLCdob3NwaXRhbFRhYicpfT5Ib3NwaXRhbHNcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHQ8L2E+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0OicnXHRcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdHRoaXMucHJvcHMuaXBkX2luZm8gJiYgdGhpcy5wcm9wcy5pcGRfaW5mby5kb2N0b3JzICYmIHRoaXMucHJvcHMuaXBkX2luZm8uZG9jdG9ycy5yZXN1bHQgICYmIHRoaXMucHJvcHMuaXBkX2luZm8uZG9jdG9ycy5yZXN1bHQubGVuZ3RoP1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdDxhIGNsYXNzTmFtZT17YG5hdi1pdGVtIG5hdi1saW5rICR7dGhpcy5zdGF0ZS50b2dnbGVUYWJUeXBlPT0nZG9jdG9yVGFiJz8nYWN0aXZlJzonJ31gfSBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgcm9sZT1cInRhYlwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlVGFicy5iaW5kKHRoaXMsJ2RvY3RvclRhYicpfT5Eb2N0b3JzXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0PC9hPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdDonJ1x0XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHR0aGlzLnByb3BzLmlwZF9pbmZvICYmIHRoaXMucHJvcHMuaXBkX2luZm8uYWJvdXQgJiYgdGhpcy5wcm9wcy5pcGRfaW5mby5hYm91dC5vZmZlcnMgJiYgdGhpcy5wcm9wcy5pcGRfaW5mby5hYm91dC5vZmZlcnMubGVuZ3RoP1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdDxhIGNsYXNzTmFtZT17YG5hdi1pdGVtIG5hdi1saW5rICR7dGhpcy5zdGF0ZS50b2dnbGVUYWJUeXBlPT0nb2ZmZXJzVGFiJz8nYWN0aXZlJzonJ31gfSBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgcm9sZT1cInRhYlwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlVGFicy5iaW5kKHRoaXMsJ29mZmVyc1RhYicpfT5PZmZlcnNcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHQ8L2E+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0OicnXHRcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiID5cbiAgICAgICAgICAgICAgIFx0XHQ8ZGl2IGlkPVwiYWJvdXRUYWJcIiByZWY9XCJhYm91dFRhYlwiIGNsYXNzTmFtZT1cIm5hdl90b3BfYmFyXCI+XG4gICAgICAgICAgICAgICBcdFx0XHQ8SXBkQWJvdXRVcyB7Li4udGhpcy5wcm9wc30gaWQ9XCJhYm91dFRhYlwiIHJlYWRNb3JlQ2xpY2tlZD17dGhpcy5yZWFkTW9yZUNsaWNrZWQuYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgICAgXHRcdDwvZGl2PiBcblxuey8qICAgICAgICAgICAgICAgXHRcdDxkaXYgaWQ9XCJib29rTm93XCIgcmVmPVwiYm9va05vd1wiIGNsYXNzTmFtZT1cIm5hdl90b3BfYmFyXCI+XG4gICAgICAgICAgICAgICBcdFx0XHQ8SXBkRm9ybVZpZXcgey4uLnRoaXMucHJvcHN9IHRhYlZpZXc9e3RydWV9IGZvcm1Tb3VyY2U9J0lwZEluZm9QYWdlJy8+XG4gICAgICAgICAgICAgICBcdFx0PC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgIFx0XG5cdFx0ICAgICAgICAgICAgPGRpdiBpZD1cImhvc3BpdGFsVGFiXCIgcmVmPVwiaG9zcGl0YWxUYWJcIiBjbGFzc05hbWU9XCJ0YWItcGFuZSBmYWRlXCIgY2xhc3NOYW1lPVwibmF2X3RvcF9iYXJcIj5cblx0XHQgICAgICAgICAgICBcdHtcblx0XHQgICAgICAgICAgICBcdFx0dGhpcy5wcm9wcy5pcGRfaW5mbyAmJiB0aGlzLnByb3BzLmlwZF9pbmZvLmhvc3BpdGFscyAmJiB0aGlzLnByb3BzLmlwZF9pbmZvLmhvc3BpdGFscy5yZXN1bHQgJiYgdGhpcy5wcm9wcy5pcGRfaW5mby5ob3NwaXRhbHMucmVzdWx0Lmxlbmd0aD9cblx0XHQgICAgICAgICAgICBcdFx0PEhvc3BpdGFsTGlzdCB7Li4udGhpcy5wcm9wc30gaG9zcGl0YWxMaXN0ID0ge3RoaXMucHJvcHMuaXBkX2luZm8gJiYgdGhpcy5wcm9wcy5pcGRfaW5mby5ob3NwaXRhbHM/dGhpcy5wcm9wcy5pcGRfaW5mby5ob3NwaXRhbHM6W119Lz5cblx0XHQgICAgICAgICAgICBcdFx0OicnXHRcblx0XHQgICAgICAgICAgICBcdH1cblx0XHQgICAgICAgICAgICBcdFxuXHRcdCAgICAgICAgICAgIFx0e1xuXHRcdCAgICAgICAgICAgIFx0XHR0aGlzLnByb3BzLmlwZF9pbmZvICYmIHRoaXMucHJvcHMuaXBkX2luZm8uaG9zcGl0YWxzICYmIHRoaXMucHJvcHMuaXBkX2luZm8uaG9zcGl0YWxzLnJlc3VsdCAmJiB0aGlzLnByb3BzLmlwZF9pbmZvLmhvc3BpdGFscy5yZXN1bHQubGVuZ3RoPHRoaXMucHJvcHMuaXBkX2luZm8uaG9zcGl0YWxzLmNvdW50P1xuXHRcdFx0XHQgICBcdFx0XHRcdDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3NOYW1lPVwiYnRuLXZpZXctaG9zcGl0YWxcIiBvbkNsaWNrPXt0aGlzLnZpZXdIb3NwaXRhbHNDbGlja2VkLmJpbmQodGhpcyl9PntgVmlldyBhbGwgJHt0aGlzLnByb3BzLmlwZF9pbmZvLmhvc3BpdGFscy5jb3VudH0gSG9zcGl0YWxzYH08L2E+XG5cdFx0XHRcdCAgIFx0XHRcdFx0OicnXG5cdFx0ICAgICAgICAgICAgXHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2IGlkPVwiZG9jdG9yVGFiXCIgcmVmPVwiZG9jdG9yVGFiXCIgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZSBuYXZfdG9wX2JhclwiPlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlwZF9pbmZvICYmIHRoaXMucHJvcHMuaXBkX2luZm8uZG9jdG9ycyAmJiB0aGlzLnByb3BzLmlwZF9pbmZvLmRvY3RvcnMucmVzdWx0ICAmJiB0aGlzLnByb3BzLmlwZF9pbmZvLmRvY3RvcnMucmVzdWx0Lmxlbmd0aCAmJiB0aGlzLnByb3BzLmlwZF9pbmZvLmFib3V0ICYmIHRoaXMucHJvcHMuaXBkX2luZm8uYWJvdXQubmFtZT9cblx0XHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGluZyBoZC1tcmduLXRvcFwiPntgQmVzdCAke3RoaXMucHJvcHMuaXBkX2luZm8uYWJvdXQubmFtZX0gRG9jdG9ycyAke3RoaXMucHJvcHMuaXBkX2luZm8uc2VvICYmIHRoaXMucHJvcHMuaXBkX2luZm8uc2VvLmxvY2F0aW9uP2BpbiAke3RoaXMucHJvcHMuaXBkX2luZm8uc2VvLmxvY2F0aW9ufWA6Jyd9IGB9PC9oMj5cblx0XHRcdFx0XHRcdFx0OicnXHRcblx0XHRcdFx0XHRcdH1cblx0ICAgICAgICAgICAgICAgICAgICB7XG5cdCAgICAgICAgICAgICAgICAgICAgXHR0aGlzLnByb3BzLmlwZF9pbmZvICYmIHRoaXMucHJvcHMuaXBkX2luZm8uZG9jdG9ycz9cblx0XHQgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaXBkX2luZm8uZG9jdG9ycy5yZXN1bHQubWFwKChkb2N0b3JDYXJkLCBpKSA9PiB7XG5cdFx0ICAgICAgICAgICAgICAgICAgICBcdHJldHVybiA8RG9jdG9yUmVzdWx0Q2FyZCBkZXRhaWxzPXtkb2N0b3JDYXJkfSBrZXk9e2l9IHJhbms9e2l9IHNlb0ZyaWVuZGx5PXt0aGlzLnByb3BzLmlwZF9pbmZvLmRvY3RvcnMuc2VvfSB7Li4udGhpcy5wcm9wc30vPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgfSlcdFxuXHRcdCAgICAgICAgICAgICAgICAgICAgOicnXG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgIHtcblx0ICAgICAgICAgICAgICAgICAgICBcdHRoaXMucHJvcHMuaXBkX2luZm8gJiYgdGhpcy5wcm9wcy5pcGRfaW5mby5kb2N0b3JzICYmIHRoaXMucHJvcHMuaXBkX2luZm8uZG9jdG9ycy5yZXN1bHQgJiYgdGhpcy5wcm9wcy5pcGRfaW5mby5kb2N0b3JzLnJlc3VsdC5sZW5ndGg8dGhpcy5wcm9wcy5pcGRfaW5mby5kb2N0b3JzLmNvdW50P1xuXHQgICAgICAgICAgICAgICAgICAgIFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzc05hbWU9XCJidG4tdmlldy1ob3NwaXRhbFwiIG9uQ2xpY2s9e3RoaXMudmlld0RvY3RvcnNDbGlja2VkLmJpbmQodGhpcyl9PntgVmlldyBhbGwgJHt0aGlzLnByb3BzLmlwZF9pbmZvLmRvY3RvcnMuY291bnR9IERvY3RvcnNgfTwvYT5cblx0ICAgICAgICAgICAgICAgICAgICBcdDonJ1x0XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgPC9kaXY+XG5cblx0ICAgICAgICAgICAgICAgIHtcblx0ICAgICAgICAgICAgICAgIFx0dGhpcy5wcm9wcy5pcGRfaW5mbyAmJiB0aGlzLnByb3BzLmlwZF9pbmZvLmFib3V0ICYmIHRoaXMucHJvcHMuaXBkX2luZm8uYWJvdXQub2ZmZXJzICYmIHRoaXMucHJvcHMuaXBkX2luZm8uYWJvdXQub2ZmZXJzLmxlbmd0aD9cblx0ICAgICAgICAgICAgICAgIFx0PGRpdiBpZD1cIm9mZmVyc1RhYlwiIHJlZj1cIm9mZmVyc1RhYlwiPlxuXHRcdCAgICAgICAgICAgICAgICBcdDxJcGRPZmZlcnNQYWdlIG9mZmVycz17dGhpcy5wcm9wcy5pcGRfaW5mby5hYm91dC5vZmZlcnN9IC8+XG5cdFx0ICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdCAgICAgICAgICAgICAgICA6Jydcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgPGRpdiByZWY9XCJyZWFkTW9yZVZpZXdcIiBjbGFzc05hbWU9XCJ0YWItcGFuZSBmYWRlIG5hdl90b3BfYmFyXCI+XG5cdCAgICAgICAgICAgICAgICBcdDxJcGRJbmZvVmlld01vcmUgey4uLnRoaXMucHJvcHN9Lz5cblx0ICAgICAgICAgICAgICAgXHQ8L2Rpdj5cblx0ICAgICAgICAgICAgPC9kaXY+XG5cdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLXNlYXJjaC1kaXYgYnRuLWFwcGx5LWRpdiBidG4tc2JtdFwiPlxuICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBzdHlsZT17e21hcmdpbjowfX0gb25DbGljaz17dGhpcy5nZXRDb3N0RXN0aW1hdGVDbGlja2VkLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImJ0bi1zZWFyY2hcIj5HZXQgQ29zdCBFc3RpbWF0ZTwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElwZFZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi9jb21tb25zL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vY29tbW9ucy9SaWdodEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2NvbW1vbnMvTG9hZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21tb25zL0hvbWUvZm9vdGVyJ1xuaW1wb3J0IElwZFZpZXcgZnJvbSAnLi9JcGRJbmZvLmpzJ1xuXG5jbGFzcyBJbmZvVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0XG5cdHJlbmRlcigpe1xuXG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIHNob3dTZWFyY2g9e3RydWV9IG5ld19maXhlZF9oZWFkZXI9ezF9Lz5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgcGFyZW50LXNlY3Rpb24gYm9vay1hcHBvaW50bWVudC1zZWN0aW9uIGJyZWFkY3J1bWItbXJnbiBob3NwaXRhbC12aWV3LXNlY3Rpb25cIj5cblxuXHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG5cdCAgICAgICAgICAgICAgICAgICAgPExlZnRCYXIgLz5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBjZW50ZXItY29sdW1uXCI+XG5cdCAgICAgICAgICAgICAgICAgICAgXHR7XG5cdCAgICAgICAgICAgICAgICAgICAgXHRcdHRoaXMucHJvcHMuSVBEX0lORk9fTE9BREVEIHx8ICh0aGlzLnByb3BzLmlwZF9pbmZvICYmIHRoaXMucHJvcHMuaXBkX2luZm8uYWJvdXQgJiYgdGhpcy5wcm9wcy5pcGRfaW5mby5hYm91dC5pZCA9PSB0aGlzLnByb3BzLmlwZF9pZCk/XG5cdCAgICAgICAgICAgICAgICAgICAgXHRcdDxJcGRWaWV3IHsuLi50aGlzLnByb3BzfS8+XG5cdCAgICAgICAgICAgICAgICAgICAgXHRcdDo8TG9hZGVyLz5cblx0ICAgICAgICAgICAgICAgICAgICBcdH1cblx0XHRcdCAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0ICAgICAgICAgICAgPFJpZ2h0QmFyIGV4dHJhQ2xhc3M9XCIgY2hhdC1mbG9hdC1idG4tMlwiIHNob3dEZXNrdG9wSXBkPXt0cnVlfSBtc2dUZW1wbGF0ZT1cImdvbGRfZ2VuZXJhbF90ZW1wbGF0ZVwiLz5cblx0XHRcdCAgICAgICAgPC9kaXY+XG5cdFx0XHQgICAgPC9zZWN0aW9uPlxuXHRcdFx0ICAgIDxGb290ZXIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZm9WaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBJcGRPZmZlcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNob3dUbmM6IGZhbHNlXG5cdFx0fVxuXHR9XG5cblx0dG9nZ2xlVG5DKGlkKSB7XG5cblx0XHRpZiAodGhpcy5zdGF0ZS5zaG93VG5jICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSkge1xuXHRcdFx0bGV0IGhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5vZmZzZXRIZWlnaHQgfHwgMFxuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIGhlaWdodClcblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dUbmM6ICF0aGlzLnN0YXRlLnNob3dUbmMgfSlcblxuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaHMtY2FyZFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlwZC1vZnItY29udFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJocy1vZnItaGVhZGluZ1wiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9pcGQtb2ZyLnN2Zyd9IC8+T2ZmZXJzIEF2YWlsYWJsZTwvaDQ+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMub2ZmZXJzLm1hcCgob2ZmZXIsIGkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJpcGQtb2ZyLW1haW5cIiBpZD17YCR7aX1fb2ZmZXJgfSBrZXk9e2l9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJocy1vZmZlckNhcmRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJocy1vZnItY3JkSGVhZGluZ1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaHMtb2ZyLWNvbnRublwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2lwZC1jcG4uc3ZnJ30gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b2ZmZXIuaG9zcGl0YWwgPyA8c3BhbiBjbGFzc05hbWU9XCJvZmZyLWdybi1jZFwiPntvZmZlci5ob3NwaXRhbH08L3NwYW4+IDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7b2ZmZXIudGl0bGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Lyo8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvaXBkLXNoYXJlLnN2Zyd9IC8+Ki99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhzLW9mci1jYXJkLWNvbnRlbnRcIj5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9mZmVyLmNvdXBvbiA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3BuLXJxcmRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD5Vc2VyIFByb21vIGNvZGUgOiAgPHNwYW4+e29mZmVyLmNvdXBvbn08L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD57b2ZmZXIuZGVzY3JpcHRpb259PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCFvZmZlci5jb3Vwb24gP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuby1jcG4tcnFyZFwiPk5vIENvdXBvbiBSZXF1aXJlZDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9mZmVyLnNob3dfdG5jICYmIHRoaXMuc3RhdGUuc2hvd1RuYyA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9mZmVyLWhpZGUtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1saS1zdHlsZVwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogb2ZmZXIudG5jIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9mZmVyLnNob3dfdG5jID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaHMtb2ZmZXItZm9vdGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRjX2NvbnRcIj5UJkMgQXBwbHk8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLnNob3dUbmMgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic2hvdy1oaWRlLW9mZnIgY3Vyc29yLXBudHJcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVRuQy5iaW5kKHRoaXMsIGAke2l9X29mZmVyYCl9ID5IaWRlIERldGFpbHMgPGltZyBjbGFzc05hbWU9XCJvZmZzaG93SWNvbiBvZmhpZGVJY29uIFwiIHN0eWxlPXt7IHdpZHRoOiAnN3B4JywgbWFyZ2luTGVmdDogJzVweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9yaWdodC1zYy5zdmcnfSAvPjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogPHAgY2xhc3NOYW1lPVwic2hvdy1oaWRlLW9mZnIgY3Vyc29yLXBudHJcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVRuQy5iaW5kKHRoaXMsIGAke2l9X29mZmVyYCl9ID5TaG93IERldGFpbHMgPGltZyBjbGFzc05hbWU9XCJcIiBzdHlsZT17eyB3aWR0aDogJzdweCcsIG1hcmdpbkxlZnQ6ICc1cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvcmlnaHQtc2Muc3ZnJ30gLz48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHsvKjxwIGNsYXNzTmFtZT1cIm9mci12dy1tb3JlXCI+VmlldyA2IG1vcmUgb2ZmZXJzPC9wPiovfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBJcGRPZmZlcnMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSG9zcGl0YWxMaXN0IGZyb20gJy4vSG9zcGl0YWxMaXN0LmpzJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuXG5jbGFzcyBJUERBYm91dFVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHRvZ2dsZVJlYWRNb3JlOiBmYWxzZVxuXHRcdH1cblx0fVxuXHRyZW5kZXIoKXtcblx0XHRsZXQgeyBpcGRfaW5mbyB9ID0gdGhpcy5wcm9wc1xuXG5cdFx0bGV0IGFib3V0VGV4dCA9bnVsbFxuXHRcdGlmKGlwZF9pbmZvICAmJiBpcGRfaW5mby5hYm91dCYmIGlwZF9pbmZvLmFib3V0LnNob3dfYWJvdXQpe1xuXHRcdFx0XG5cdFx0XHRhYm91dFRleHQgPSBpcGRfaW5mby5hYm91dC5hYm91dFxuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4oXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItcGFuZSBmYWRlIHNob3cgYWN0aXZlXCIgaWQ9XCJuYXYtb3ZlcnZpZXdcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7PHVsPlxuICAgICAgICAgICAgICAgIFx0e1xuICAgICAgICAgICAgICAgIFx0XHRpcGRfaW5mby5hYm91dCAmJiBpcGRfaW5mby5hYm91dC5mZWF0dXJlcz9cbiAgICAgICAgICAgICAgICBcdFx0aXBkX2luZm8uYWJvdXQuZmVhdHVyZXMubWFwKChpcGQsIGkpID0+e1xuICAgICAgICAgICAgICAgIFx0XHRcdHJldHVybiA8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJ3aWRnZXQgcGF0LWluZm9cIj5cblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpcGQuaWNvbn0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWxpc3RcIiAvPlxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgPGRpdj57YCR7aXBkLm5hbWV9OmB9ICA8c3Bhbj57aXBkLnZhbHVlfTwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgXHRcdH0pXG4gICAgICAgICAgICAgICAgXHRcdDonJ1xuICAgICAgICAgICAgICAgIFx0fVxuICAgICAgICAgICAgICAgIDwvdWw+fVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcdGFib3V0VGV4dD9cbiAgICAgICAgICAgICAgICBcdDxkaXY+XG4gICAgICAgICAgICAgICAgXHRcdDxoNCBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRpbmdcIj57YEFib3V0ICR7aXBkX2luZm8uYWJvdXQ/aXBkX2luZm8uYWJvdXQubmFtZTonJ31gfSA8L2g0PlxuXHRcdCAgICAgICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgY3VzdG9tLWxpLXN0eWxlIHBiLTMwXCIgc3R5bGU9e3t0ZXh0QWxpZ246J2p1c3RpZnknfX0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBhYm91dFRleHR9fT5cblx0XHRcdCAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFx0PC9kaXY+XG4gICAgICAgICAgICAgICAgXHQ6JydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXHR7XHRhYm91dFRleHQ/XG5cdCAgICAgICAgICAgICAgICBcdFx0dGhpcy5zdGF0ZS50b2dnbGVSZWFkTW9yZT9cblx0ICAgICAgICAgICAgICAgIFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzTmFtZT1cInJlYWQtbW9yZS1idG5cIiBvbkNsaWNrPXsoKT0+e1xuXHQgICAgICAgICAgICAgICAgXHRcdFx0bGV0IGd0bURhdGEgPSB7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0lwZEluZm9SZWFkTGVzc0NsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdpcGQtaW5mby1yZWFkLWxlc3MtY2xpY2tlZCcsIHNlbGVjdGVkSWQ6IHRoaXMucHJvcHMuaXBkX2lkIHx8ICcnXG5cdFx0XHRcdFx0XHQgICAgICAgIH1cblx0XHRcdFx0XHRcdCAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcblx0ICAgICAgICAgICAgICAgIFx0XHRcdHRoaXMuc2V0U3RhdGUoe3RvZ2dsZVJlYWRNb3JlOiAhdGhpcy5zdGF0ZS50b2dnbGVSZWFkTW9yZX0pXG5cdCAgICAgICAgICAgICAgICBcdFx0fX0gPlJlYWQgTGVzczwvYT5cblx0XHRcdCAgICAgICAgICAgICAgICA6PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtYnRuXCIgb25DbGljaz17KCk9Pntcblx0XHRcdCAgICAgICAgICAgICAgICBcdGxldCBndG1EYXRhID0ge1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdJcGRJbmZvUmVhZE1vcmVDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaXBkLWluZm8tcmVhZC1tb3JlLWNsaWNrZWQnLCBzZWxlY3RlZElkOiB0aGlzLnByb3BzLmlwZF9pZCB8fCAnJ1xuXHRcdFx0XHRcdFx0ICAgICAgICB9XG5cdFx0XHRcdFx0XHQgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG5cdFx0XHRcdFx0XHQgICAgICAgIHRoaXMucHJvcHMucmVhZE1vcmVDbGlja2VkKClcblx0XHRcdCAgICAgICAgICAgICAgICBcdC8vdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9pcGQvJHt0aGlzLnByb3BzLmlwZF9pZH0vZGV0YWlsYClcblx0XHRcdCAgICAgICAgICAgICAgICB9fSA+UmVhZCBNb3JlPC9hPlxuICAgICAgICAgICAgICAgIFx0XHQ6JydcbiAgICAgICAgICAgICAgICBcdH1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElQREFib3V0VXMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZ2V0SXBkSW5mbywgc2VsZWN0T3BkVGltZVNMb3QsIHNhdmVQcm9maWxlUHJvY2VkdXJlcywgY2xvbmVDb21tb25TZWxlY3RlZENyaXRlcmlhcywgbWVyZ2VJcGRDcml0ZXJpYSwgaXBkQ2hhdFZpZXcsIGNoZWNrSXBkQ2hhdEFnZW50U3RhdHVzLCBnZXRPZmZlckxpc3QgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IElwZEluZm9WaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaXBkL0lwZEluZm9WaWV3LmpzJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKVxuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuXG5jbGFzcyBJcGRJbmZvQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aXBkX2lkOiAnJyxcblx0XHRcdHNlb1VybDogZmFsc2Vcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgbG9hZERhdGEoc3RvcmUsIG1hdGNoLCBxdWVyeSkge1xuXG5cdFx0bGV0IHNlYXJjaF9ieV91cmwgPSBudWxsXG5cdFx0aWYocXVlcnkuaXBkX2lkKSB7XG5cdFx0XHRcblx0XHR9ZWxzZXtcblxuXHRcdFx0bGV0IHRpdGxlID0gbWF0Y2gudXJsXG5cdFx0XHRzZWFyY2hfYnlfdXJsID0gdGl0bGUuc3Vic3RyaW5nKDEsIHRpdGxlLmxlbmd0aCkudG9Mb3dlckNhc2UoKVxuXHRcdH1cblxuICAgICAgICBsZXQgaXBkX2lkID0gcXVlcnkgJiYgcXVlcnkuaXBkX2lkP3F1ZXJ5LmlwZF9pZDonJ1xuXG4gICAgICAgIGxldCBzZWxlY3RlZExvY2F0aW9uID0gbnVsbFxuICAgICAgICBpZiAocXVlcnkubGF0ICYmIHF1ZXJ5LmxvbmcpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb24gPSB7IGdlb21ldHJ5OiB7IGxvY2F0aW9uOiB7IGxhdDogcXVlcnkubGF0LCBsbmc6IHF1ZXJ5LmxvbmcgfSB9LCBwbGFjZV9pZDogcXVlcnkucGxhY2VfaWR8fCcnLCBmb3JtYXR0ZWRfYWRkcmVzczogXCJEZWxoaVwiLCBzdWJfbG9jYWxpdHk6IHF1ZXJ5LnN1Yl9sb2NhbGl0eSB8fCcnLCBsb2NhbGl0eTogcXVlcnkubG9jYWxpdHkgfHwgJyd9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZ2V0SXBkSW5mbyhpcGRfaWQsIHNlbGVjdGVkTG9jYXRpb24sIHNlYXJjaF9ieV91cmwpKVxuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogKCkgPT4gbnVsbFxuICAgIH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXHRcdGxldCBpcGRfaWQgPSAnJ1xuXHRcdGxldCBzZWFyY2hfYnlfdXJsID0gbnVsbFxuXHRcdGlmKHBhcnNlZC5pcGRfaWQpe1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7aXBkX2lkOiBwYXJzZWQuaXBkX2lkfSlcblx0XHRcdGlwZF9pZCA9IHBhcnNlZC5pcGRfaWRcblx0XHRcdHRoaXMucHJvcHMuZ2V0SXBkSW5mbyhwYXJzZWQuaXBkX2lkLCB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pXG5cblxuXHRcdFx0bGV0IGd0bURhdGEgPSB7XG5cdCAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSVBESW5mb1BhZ2VMYW5kZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdpcGQtaW5mby1wYWdlLWxhbmRlZCcsIHNlbGVjdGVkSWQ6IHBhcnNlZC5pcGRfaWQgfHwgJydcblx0ICAgICAgICB9XG5cdCAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcblxuXHRcdH1lbHNle1xuXHRcdFx0bGV0IHRpdGxlID0gdGhpcy5wcm9wcy5tYXRjaC51cmxcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3Nlb1VybDogdHJ1ZX0pXG5cdFx0XHRzZWFyY2hfYnlfdXJsID0gdGl0bGUuc3Vic3RyaW5nKDEsIHRpdGxlLmxlbmd0aCkudG9Mb3dlckNhc2UoKVxuXHRcdFx0dGhpcy5wcm9wcy5nZXRJcGRJbmZvKCcnLCB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24sIHNlYXJjaF9ieV91cmwsIChyZXNwKSA9PiB7XG5cdFx0XHRcdGlmKHJlc3Ape1xuXHRcdFx0XHRcdGlmKHJlc3AuYWJvdXQgJiYgcmVzcC5hYm91dC5pZCl7XG5cdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgaXBkX2lkOiByZXNwLmFib3V0LmlkIH0pXG5cblx0XHRcdFx0XHRcdGxldCBndG1EYXRhID0ge1xuXHRcdFx0XHQgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0lQREluZm9QYWdlTGFuZGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaXBkLWluZm8tcGFnZS1sYW5kZWQnLCBzZWxlY3RlZElkOiByZXNwLmFib3V0LmlkIHx8ICcnXG5cdFx0XHRcdCAgICAgICAgfVxuXHRcdFx0XHQgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH1cblx0XHQvKmVsc2UgaWYodGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcy5sZW5ndGgpe1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7aXBkX2lkOiB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzWzBdLmlkfSlcblx0XHRcdGlwZF9pZCA9IHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXNbMF0uaWRcblx0XHRcdHRoaXMucHJvcHMuZ2V0SXBkSW5mbyh0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzWzBdLmlkLCB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pXHRcblx0XHR9Ki9cblx0XHRpZih3aW5kb3cpe1xuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsMClcblx0XHR9XG5cblx0XHRsZXQgc2VsZWN0ZWRMb2NhdGlvbiA9ICcnXG4gICAgICAgIGxldCBsYXQgPSAyOC42NDQ4MDBcbiAgICAgICAgbGV0IGxvbmcgPSA3Ny4yMTY3MjFcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbiA9IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbjtcbiAgICAgICAgICAgIGxhdCA9IHNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubGF0XG4gICAgICAgICAgICBsb25nID0gc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sbmdcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGF0ID09PSAnZnVuY3Rpb24nKSBsYXQgPSBsYXQoKVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsb25nID09PSAnZnVuY3Rpb24nKSBsb25nID0gbG9uZygpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLmdldE9mZmVyTGlzdChsYXQsIGxvbmcpXG5cblx0XHRpZighc2VhcmNoX2J5X3VybCl7XG5cdFx0XHRsZXQgbmV3X3VybCA9IHRoaXMuYnVpbGRVcmwodGhpcy5wcm9wcylcblx0ICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZShuZXdfdXJsKVxuXHRcdH1cblx0XHRcblx0fVxuXG5cdGJ1aWxkVXJsKHByb3BzKXtcblx0XHQvL2J1aWxkIHVybCBmb3IgaXBkIHByb2NlZHVyZSBpbmZvXG5cdFx0bGV0IGxhdCA9IDI4LjY0NDgwMFxuICAgICAgICBsZXQgbG9uZyA9IDc3LjIxNjcyMVxuICAgICAgICBsZXQgcGxhY2VfaWQgPSBcIlwiXG4gICAgICAgIGxldCBsb2NhbGl0eSA9ICdEZWxoaSdcbiAgICAgICAgbGV0IHN1Yl9sb2NhbGl0eSA9ICcnXG5cbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cbiAgICAgICAgaWYgKHByb3BzLnNlbGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgIHBsYWNlX2lkID0gcHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5wbGFjZV9pZCB8fCBcIlwiXG4gICAgICAgICAgICBsYXQgPSBwcm9wcy5zZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxhdFxuICAgICAgICAgICAgbG9uZyA9IHByb3BzLnNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubG5nXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxhdCA9PT0gJ2Z1bmN0aW9uJykgbGF0ID0gbGF0KClcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbG9uZyA9PT0gJ2Z1bmN0aW9uJykgbG9uZyA9IGxvbmcoKVxuXG4gICAgICAgICAgICBsYXQgPSBwYXJzZUZsb2F0KHBhcnNlRmxvYXQobGF0KS50b0ZpeGVkKDYpKVxuICAgICAgICAgICAgbG9uZyA9IHBhcnNlRmxvYXQocGFyc2VGbG9hdChsb25nKS50b0ZpeGVkKDYpKVxuXG4gICAgICAgICAgICBsb2NhbGl0eSA9IHByb3BzLnNlbGVjdGVkTG9jYXRpb24ubG9jYWxpdHkgfHwgJydcbiAgICAgICAgICAgIHN1Yl9sb2NhbGl0eSA9IHByb3BzLnNlbGVjdGVkTG9jYXRpb24uc3ViX2xvY2FsaXR5IHx8ICcnXG4gICAgICAgIH1cblxuXHRcdGxldCBuZXdfdXJsID0gYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfT9pcGRfaWQ9JHtwYXJzZWQuaXBkX2lkfSZwbGFjZV9pZD0ke3BsYWNlX2lkfSZsYXQ9JHtsYXR9Jmxvbmc9JHtsb25nfSZsb2NhbGl0eT0ke2xvY2FsaXR5fSZzdWJfbG9jYWxpdHk9JHtzdWJfbG9jYWxpdHl9JnNob3dQb3B1cD10cnVlYFxuXG5cdFx0aWYocGFyc2VkLnV0bV9zb3VyY2UpIHtcblx0XHRcdG5ld191cmwrPSBgJnV0bV9zb3VyY2U9JHtwYXJzZWQudXRtX3NvdXJjZXx8Jyd9YFxuXHRcdH1cblxuXHRcdGlmKHBhcnNlZC51dG1fbWVkaXVtKSB7XG5cdFx0XHRuZXdfdXJsKz0gYCZ1dG1fbWVkaXVtPSR7cGFyc2VkLnV0bV9tZWRpdW18fCcnfWBcblx0XHR9XG5cblx0XHRpZihwYXJzZWQudXRtX2NhbXBhaWduKSB7XG5cdFx0XHRuZXdfdXJsKz0gYCZ1dG1fY2FtcGFpZ249JHtwYXJzZWQudXRtX2NhbXBhaWdufHwnJ31gXG5cdFx0fSBcblx0XHRcblx0XHRpZih0aGlzLnByb3BzLmlzX2lwZF9mb3JtX3N1Ym1pdHRlZCkge1xuXHRcdFx0XG5cdFx0fWVsc2UgaWYocGFyc2VkICYmIHBhcnNlZC5nZXRfZmVlZGJhY2s9PScxJyl7XG5cdFx0XHRuZXdfdXJsKz0nJmdldF9mZWVkYmFjaz0xJ1xuXHRcdH1cblxuXHRcdGlmKHBhcnNlZCAmJiBwYXJzZWQudHlwZSkge1xuXHRcdFx0bmV3X3VybCs9IGAmdHlwZT0ke3BhcnNlZC50eXBlfWBcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3X3VybFxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcblx0XHRpZih0aGlzLnByb3BzLmxvY2F0aW9uRmV0Y2hlZCAhPSBuZXh0UHJvcHMubG9jYXRpb25GZXRjaGVkKXtcblxuXHRcdFx0Y29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UobmV4dFByb3BzLmxvY2F0aW9uLnNlYXJjaClcblx0XHRcdGxldCBzZWFyY2hfYnlfdXJsID0gbnVsbFxuXG5cdFx0XHRpZihwYXJzZWQuaXBkX2lkKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7aXBkX2lkOiBwYXJzZWQuaXBkX2lkfSlcblx0XHRcdFx0dGhpcy5wcm9wcy5nZXRJcGRJbmZvKHBhcnNlZC5pcGRfaWQsIG5leHRQcm9wcy5zZWxlY3RlZExvY2F0aW9uKVxuXHRcdFx0fWVsc2V7XG5cblx0XHRcdFx0bGV0IHRpdGxlID0gdGhpcy5wcm9wcy5tYXRjaC51cmxcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7c2VvVXJsOiB0cnVlfSlcblx0XHRcdFx0c2VhcmNoX2J5X3VybCA9IHRpdGxlLnN1YnN0cmluZygxLCB0aXRsZS5sZW5ndGgpLnRvTG93ZXJDYXNlKClcblx0XHRcdFx0dGhpcy5wcm9wcy5nZXRJcGRJbmZvKCcnLCBuZXh0UHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiwgc2VhcmNoX2J5X3VybCwgKHJlc3ApPT4ge1xuXG5cdFx0XHRcdFx0aWYocmVzcCl7XG5cdFx0XHRcdFx0XHRpZihyZXNwLmFib3V0ICYmIHJlc3AuYWJvdXQuaWQpe1xuXHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgaXBkX2lkOiByZXNwLmFib3V0LmlkIH0pXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0pXG5cdFx0XHR9LyplbHNlIGlmKG5leHRQcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcy5sZW5ndGgpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtpcGRfaWQ6IG5leHRQcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhc1swXS5pZH0pXG5cdFx0XHRcdHRoaXMucHJvcHMuZ2V0SXBkSW5mbyhuZXh0UHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXNbMF0uaWQsIG5leHRQcm9wcy5zZWxlY3RlZExvY2F0aW9uKVx0XG5cdFx0XHR9Ki9cblx0XHRcdGlmKHdpbmRvdyl7XG5cdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLDApXG5cdFx0XHR9XG5cblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKXtcblxuXHRcdHJldHVybihcblx0XHRcdDxJcGRJbmZvVmlldyB7Li4udGhpcy5wcm9wc30gey4uLnRoaXMuc3RhdGV9Lz5cblx0XHRcdClcblx0fVxufSBcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG5cblx0Y29uc3Qge1xuICAgICAgICBzZWxlY3RlZExvY2F0aW9uXG4gICAgfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9PUERcblxuXHRjb25zdCB7XG5cdFx0c2VsZWN0ZWRDcml0ZXJpYXMsXG5cdFx0aXBkX2luZm8sXG5cdFx0SVBEX0lORk9fTE9BREVELFxuXHRcdGNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLFxuXHRcdGxvY2F0aW9uRmV0Y2hlZFxuXHR9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX0lQRFxuXG5cdGNvbnN0IHtcblx0XHRpcGRfY2hhdCxcblx0XHRvZmZlckxpc3QsXG5cdFx0aXNfaXBkX2Zvcm1fc3VibWl0dGVkXG5cdH0gPSBzdGF0ZS5VU0VSXG5cbiAgICByZXR1cm57XG4gICAgXHRzZWxlY3RlZExvY2F0aW9uLCBzZWxlY3RlZENyaXRlcmlhcywgaXBkX2luZm8sIElQRF9JTkZPX0xPQURFRCwgY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMsIGxvY2F0aW9uRmV0Y2hlZCwgaXBkX2NoYXQsIG9mZmVyTGlzdCxcbiAgICBcdGlzX2lwZF9mb3JtX3N1Ym1pdHRlZFxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Z2V0SXBkSW5mbzogKGlwZF9pZCwgc2VsZWN0ZWRMb2NhdGlvbiwgc2VhcmNoX2J5X3VybCwgY2IpID0+IGRpc3BhdGNoKGdldElwZEluZm8oaXBkX2lkLCBzZWxlY3RlZExvY2F0aW9uLCBzZWFyY2hfYnlfdXJsLCBjYikpLFxuXHRcdHNhdmVQcm9maWxlUHJvY2VkdXJlczogKGRvY3Rvcl9pZCwgY2xpbmljX2lkLCBwcm9jZWR1cmVfaWRzLCBmb3JjZUFkZCkgPT4gZGlzcGF0Y2goc2F2ZVByb2ZpbGVQcm9jZWR1cmVzKGRvY3Rvcl9pZCwgY2xpbmljX2lkLCBwcm9jZWR1cmVfaWRzLCBmb3JjZUFkZCkpLFxuXHRcdHNlbGVjdE9wZFRpbWVTTG90OiAoc2xvdCwgcmVzY2hlZHVsZSwgYXBwb2ludG1lbnRJZCkgPT4gZGlzcGF0Y2goc2VsZWN0T3BkVGltZVNMb3Qoc2xvdCwgcmVzY2hlZHVsZSwgYXBwb2ludG1lbnRJZCkpLFxuXHRcdGNsb25lQ29tbW9uU2VsZWN0ZWRDcml0ZXJpYXM6IChzZWxlY3RlZENyaXRlcmlhcykgPT4gZGlzcGF0Y2goY2xvbmVDb21tb25TZWxlY3RlZENyaXRlcmlhcyhzZWxlY3RlZENyaXRlcmlhcykpLFxuXHRcdG1lcmdlSXBkQ3JpdGVyaWE6IChmaWx0ZXJDcml0ZXJpYSk9PiBkaXNwYXRjaChtZXJnZUlwZENyaXRlcmlhKGZpbHRlckNyaXRlcmlhKSksXG5cdFx0aXBkQ2hhdFZpZXc6IChkYXRhKSA9PiBkaXNwYXRjaChpcGRDaGF0VmlldyhkYXRhKSksXG5cdFx0Y2hlY2tJcGRDaGF0QWdlbnRTdGF0dXM6IChjYikgPT4gZGlzcGF0Y2goY2hlY2tJcGRDaGF0QWdlbnRTdGF0dXMoY2IpKSxcblx0XHRnZXRPZmZlckxpc3Q6IChsYXQsbG9uZykgPT4gZGlzcGF0Y2goZ2V0T2ZmZXJMaXN0KGxhdCxsb25nKSlcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShJcGRJbmZvQ29udGFpbmVyKSJdLCJzb3VyY2VSb290IjoiIn0=