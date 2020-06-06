exports.ids = [93];
exports.modules = {

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

/***/ "./dev/js/components/commons/search/searchTestInfo.js":
/*!************************************************************!*\
  !*** ./dev/js/components/commons/search/searchTestInfo.js ***!
  \************************************************************/
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

var _ChatPanel = __webpack_require__(/*! ../ChatPanel */ "./dev/js/components/commons/ChatPanel/index.js");

var _ChatPanel2 = _interopRequireDefault(_ChatPanel);

var _locationElements = __webpack_require__(/*! ../../../containers/commons/locationElements */ "./dev/js/containers/commons/locationElements.js");

var _locationElements2 = _interopRequireDefault(_locationElements);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _locationPopup = __webpack_require__(/*! ../../../containers/commons/locationPopup */ "./dev/js/containers/commons/locationPopup.js");

var _locationPopup2 = _interopRequireDefault(_locationPopup);

var _LabProfileCard = __webpack_require__(/*! ../../diagnosis/commons/labProfileCard/LabProfileCard.js */ "./dev/js/components/diagnosis/commons/labProfileCard/LabProfileCard.js");

var _LabProfileCard2 = _interopRequireDefault(_LabProfileCard);

var _Loader = __webpack_require__(/*! ../../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _HelmetTags = __webpack_require__(/*! ../../commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _config = __webpack_require__(/*! ../../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _articleAuthor = __webpack_require__(/*! ../articleAuthor/articleAuthor */ "./dev/js/components/commons/articleAuthor/articleAuthor.js");

var _articleAuthor2 = _interopRequireDefault(_articleAuthor);

var _TableOfContent = __webpack_require__(/*! ../article/TableOfContent */ "./dev/js/components/commons/article/TableOfContent.js");

var _TableOfContent2 = _interopRequireDefault(_TableOfContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class SearchTestView extends _react2.default.Component {
    constructor(props) {
        super(props);

        const parsed = queryString.parse(this.props.location.search);

        this.state = {
            tabsValue: [],
            lastSource: '',
            allFrequentlyTest: [],
            lab_id: '',
            frequently_heading: '',
            disableAddTest: [],
            search_id: '',
            searchCities: [],
            showLocationPopup: true,
            showPopupContainer: true,
            overlayVisible: true,
            isSeo: !this.props.location.pathname.includes("search/testinfo")
        };
    }

    ButtonHandler(field, event) {
        let tabs = [].concat(this.state.tabsValue);
        let self = this;
        let found = false;
        tabs = tabs.filter(x => {
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

    updateTabsValues(value) {
        let tabs = [].concat(this.state.tabsValue);
        if (tabs.indexOf(value) > -1) {
            tabs.splice(tabs.indexOf(value), 1);
        }
        this.setState({ tabsValue: tabs });
    }

    componentDidMount() {
        var url_string = window.location.href;
        var url = new URL(url_string);
        var test_id = url.searchParams.get("test_ids");
        let searchById = url_string.includes("search/testinfo");
        var selected_test_ids = url.searchParams.get("selected_test_ids") ? url.searchParams.get("selected_test_ids") : '';
        let last_page = url.searchParams.get("from");
        let search_id = url.searchParams.get("search_id");
        let lab_id = '';
        lab_id = url.searchParams.get("lab_id");
        let test_id_val = [];
        let allTest = [];
        let all_test_id = [];
        let ferq_heading;
        let url_test_ids = selected_test_ids.split(',');
        let test_url = "";
        {
            Object.entries(url_test_ids).map(function ([key, value]) {
                all_test_id.push(parseInt(value));
            });
        }
        const parsed = queryString.parse(this.props.location.search);
        let no_labs = false;
        if (parsed.test_ids) {
            no_labs = true;
        }
        this.setState({ lastSource: last_page, search_id: search_id });

        if (!test_id && searchById) {
            //  TODO - default
            return;
        }

        if (!searchById) {
            test_url = this.props.match.url;
            test_url = test_url.split("/")[1];
            test_id = '';
        }

        this.props.searchTestData(test_id, test_url, lab_id, this.props, no_labs); // get selected test/package details
    }

    closeTestInfo() {
        if (this.state.lastSource == 'search') {
            this.props.history.push('/search');
        } else {
            window.history.back();
        }
    }

    frequentlyAddTest(field, name, show_details, event) {
        // adding more test 
        let self = this;
        let url_string = window.location.href;
        let url = new URL(url_string);
        let lab_id = '';
        lab_id = url.searchParams.get("lab_id");
        let test = {};
        let added_test = [].concat(this.state.disableAddTest);
        added_test.push(field);
        self.setState({ disableAddTest: added_test });
        if (lab_id != null) {
            test.lab_id = lab_id;
            test.extra_test = true;
            test.type = 'test';
            test.name = name;
            test.id = field;
            test.show_details = show_details;
        } else {
            test.type = 'test';
            test.name = name;
            test.id = field;
            test.show_details = show_details;
        }
        test.hide_price = false;

        if (this.state.search_id !== null) {
            let newTestData = {};
            newTestData.type = 'test';
            newTestData.name = '';
            newTestData.id = field;
            newTestData.show_details = show_details;
            let newSearchIdData = [];
            newSearchIdData = this.props.search_id_data[this.state.search_id].commonSelectedCriterias;
            newSearchIdData.push(newTestData);
            let filters = {};
            filters.commonSelectedCriterias = newSearchIdData;
            filters.filterCriteria = this.props.search_id_data[this.state.search_id].filterCriteria;
            self.props.setLabSearchId(this.state.search_id, filters, true);
        }
        if (this.state.lastSource == 'search' || !this.state.search_id) {
            self.props.toggleDiagnosisCriteria('test', test, false);
        }
    }

    goToLocation() {
        this.setState({
            searchCities: []
        });
        let location_url = '/locationsearch';
        let data = {
            'Category': 'ChangeLocationDoctorResultsPopUp', 'Action': 'change-location-doctor-results-PopUp', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'change-location-doctor-results-PopUp', 'url': window.location.pathname
        };
        _gtm2.default.sendEvent({ data: data });
        this.props.history.push(location_url);
    }

    searchProceedLAB(lab_name = "") {
        let test = {};
        let found = false;
        let selectedCriteria = [];
        let nextSelectedCriterias = [];
        if (this.props.searchTestInfoData && this.props.searchTestInfoData.length > 0) {
            if (this.props.searchTestInfoData[0].is_package) {
                this.props.history.push('/searchpackages');
            } else {
                test.id = this.props.searchTestInfoData[0].id;
                test.name = this.props.searchTestInfoData[0].name;
                test.show_details = this.props.searchTestInfoData[0].show_details;
                test.url = this.props.searchTestInfoData[0].url;
                test.type = 'test';
                this.props.clearAllTests();
                nextSelectedCriterias = nextSelectedCriterias.concat(test);
                this.props.toggleDiagnosisCriteria('test', test, false);

                // handle doctor name, hospital name
                this.props.mergeLABState({
                    filterCriteria: _extends({}, this.props.filterCriteria, {
                        lab_name
                    }),
                    nextFilterCriteria: _extends({}, this.props.filterCriteria, {
                        lab_name
                    }),
                    currentSearchedCriterias: nextSelectedCriterias,
                    nextSelectedCriterias: nextSelectedCriterias
                }, true);

                this.props.history.push({
                    pathname: '/lab/searchresults',
                    state: { search_back: true }
                });
            }
        }
    }

    proceedBookNow(lab_name = "") {
        //book now 
        let test = {};
        let found = false;
        let selectedCriteria = [];
        let nextSelectedCriterias = this.props.selectedCriterias;
        if (this.props.searchTestInfoData && this.props.searchTestInfoData.length > 0) {
            if (this.props.searchTestInfoData[0].is_package) {
                this.props.setPackageId(this.props.searchTestInfoData[0].id, false);
                setTimeout(() => {
                    this.props.history.push('/searchpackages');
                }, 100);
            } else {
                // for lab only
                test.id = this.props.searchTestInfoData[0].id;
                test.name = this.props.searchTestInfoData[0].name;
                test.show_details = this.props.searchTestInfoData[0].show_details;
                test.url = this.props.searchTestInfoData[0].url;
                test.type = 'test';
                selectedCriteria = this.props.selectedCriterias;
                selectedCriteria = selectedCriteria.filter(x => {
                    if (x.id == this.props.searchTestInfoData[0].id) {
                        found = true;
                        return false;
                    }
                    return true;
                });
                if (!found) {
                    nextSelectedCriterias = nextSelectedCriterias.concat(test);
                    this.props.toggleDiagnosisCriteria('test', test, false);
                }
                // handle doctor name, hospital name
                this.props.mergeLABState({
                    filterCriteria: _extends({}, this.props.filterCriteria, {
                        lab_name
                    }),
                    nextFilterCriteria: _extends({}, this.props.filterCriteria, {
                        lab_name
                    }),
                    currentSearchedCriterias: nextSelectedCriterias,
                    nextSelectedCriterias: nextSelectedCriterias
                }, true);

                this.props.history.push({
                    pathname: '/lab/searchresults',
                    state: { search_back: true }
                });
            }
        }
    }

    render() {
        const parsed = queryString.parse(this.props.location.search);
        var selected_test_ids = parsed.selected_test_ids ? parsed.selected_test_ids : '';
        let url_test_ids = selected_test_ids.split(',');
        let disableAddTest = [].concat(this.state.disableAddTest);
        {
            Object.entries(url_test_ids).map(function ([key, value]) {
                disableAddTest.push(parseInt(value));
            });
        }
        let locationName = "";
        if (this.props.selectedLocation && this.props.selectedLocation.formatted_address) {
            locationName = this.props.selectedLocation.formatted_address;
        }

        if (this.props.seoData && this.props.seoData.location) {
            locationName = this.props.seoData.location;
        }

        let SearchedCritera;
        if (this.props.searchTestInfoData && this.props.searchTestInfoData.length > 0) {

            let showInfo = true;
            if (this.props.location.pathname.includes("search/testinfo")) {
                if (this.props.searchTestInfoData[0].id != parsed.test_ids) {
                    showInfo = false;
                }
            } else {
                if (!this.props.location.pathname.includes(this.props.searchTestInfoData[0].url)) {
                    showInfo = false;
                }
            }

            let { labs } = this.props.searchTestInfoData[0];
            if (labs && labs.tests) {
                SearchedCritera = labs.tests[0].name;
            }
            let self = this;
            let about_test = this.props.searchTestInfoData[0].about_test;
            let why_get_tested = this.props.searchTestInfoData[0].why_get_tested;
            let test_may_include = this.props.searchTestInfoData[0].test_may_include;
            let preparations = this.props.searchTestInfoData[0].preparations;
            let faqs = this.props.searchTestInfoData[0].faqs;
            let resp_test_id = this.props.searchTestInfoData[0].id;
            let canonicalUrl = '';
            let title = '';
            let description = '';
            let this_package_will_include = this.props.searchTestInfoData[0].this_package_will_include;
            if (this.props.searchTestInfoData[0].seo) {
                canonicalUrl = this.props.searchTestInfoData[0].url;
                title = this.props.searchTestInfoData[0].seo.title;
                description = this.props.searchTestInfoData[0].seo.description;
            }
            let breadcrumbs = this.props.searchTestInfoData[0].breadcrumb;
            let author = this.props.searchTestInfoData[0].author || null;
            if (parsed.isCategory && parsed.isCategory == 'true' && document.getElementById('package-includes') && this_package_will_include && this_package_will_include.tests && this_package_will_include.tests.length > 0) {
                setTimeout(() => {
                    window.scrollTo(0, document.getElementById('package-includes').offsetTop);
                }, 200);
            }
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                        canonicalUrl: `${_config2.default.API_BASE_URL}/${canonicalUrl}`,
                        title: title,
                        description: description
                    } }),
                _react2.default.createElement(
                    'section',
                    { className: 'fade-enter-done' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container-fluid' },
                        _react2.default.createElement(
                            'div',
                            { className: 'profile-body-wrap' },
                            this.props.hideHeaderOnMobile ? _react2.default.createElement(
                                'div',
                                { className: 'hide-762' },
                                _react2.default.createElement(_DesktopProfileHeader2.default, { showSearch: true })
                            ) : _react2.default.createElement(_DesktopProfileHeader2.default, { showSearch: true }),
                            _react2.default.createElement(
                                'section',
                                { className: "container parent-section book-appointment-section" + (this.props.hideHeaderOnMobile ? " mp0" : "") },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row main-row parent-section-row' },
                                    showInfo ? _react2.default.createElement(
                                        'div',
                                        { className: 'col-12 col-md-7 col-lg-7 center-column' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'row mrb-20 bottomMargin' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-12' },
                                                _react2.default.createElement(
                                                    'h1',
                                                    { className: 'testInfoHeadTitle mrng-top-12' },
                                                    _react2.default.createElement('img', { style: { width: '20px' }, src: "/assets" + "/img/icons/back-arrow.png", className: 'img-fluid', onClick: this.closeTestInfo.bind(this) }),
                                                    this.props.searchTestInfoData[0].name,
                                                    ' '
                                                ),
                                                breadcrumbs && breadcrumbs.length ? _react2.default.createElement(
                                                    'ul',
                                                    { className: 'mrb-10 mrt-20 breadcrumb-list', style: { wordBreak: 'break-word' } },
                                                    breadcrumbs.map((breadcrumb, index) => {
                                                        return _react2.default.createElement(
                                                            'li',
                                                            { key: index, className: 'breadcrumb-list-item' },
                                                            _react2.default.createElement(
                                                                'a',
                                                                { href: breadcrumb.url, onClick: e => {
                                                                        e.preventDefault();
                                                                        this.props.history.push(`${breadcrumb.url}`);
                                                                    } },
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { className: index !== breadcrumbs.length - 1 ? `fw-500 breadcrumb-title breadcrumb-colored-title` : `fw-500 breadcrumb-title` },
                                                                    breadcrumb.title
                                                                )
                                                            ),
                                                            index !== breadcrumbs.length - 1 ? _react2.default.createElement(
                                                                'span',
                                                                { className: 'breadcrumb-arrow' },
                                                                '>'
                                                            ) : ''
                                                        );
                                                    })
                                                ) : '',
                                                showInfo && this.props.searchTestInfoData && this.props.searchTestInfoData.length > 0 ? _react2.default.createElement(
                                                    'div',
                                                    { className: 'table-of-content-mobile' },
                                                    _react2.default.createElement(_TableOfContent2.default, { searchTestInfoData: this.props.searchTestInfoData[0], updateTabsValues: this.updateTabsValues.bind(this), resp_test_id: resp_test_id })
                                                ) : '',
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'widget mrb-15 mrng-top-12' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'test-info-continer-block border-radius' },
                                                        this.props.searchTestInfoData[0].show_details ? _react2.default.createElement(
                                                            'div',
                                                            { className: 'test-info-acrd-head-main', id: resp_test_id },
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: `tst-main-acrd-data ${self.state.tabsValue.indexOf('test_' + resp_test_id) > -1 ? 'hide' : ''}` },
                                                                about_test.value != "" ? _react2.default.createElement(
                                                                    'div',
                                                                    { className: 'test-sub-accordion' },
                                                                    _react2.default.createElement('a', { className: 'anchor-link', id: 'about-test' }),
                                                                    _react2.default.createElement(
                                                                        'h2',
                                                                        { className: 'tst-sub-acrd-heading', onClick: self.ButtonHandler.bind(self, 'about_test_' + resp_test_id) },
                                                                        about_test.title,
                                                                        ' ',
                                                                        _react2.default.createElement(
                                                                            'span',
                                                                            { className: self.state.tabsValue.indexOf('about_test_' + resp_test_id) > -1 ? 'acrd-arw-rotate' : 'acrd-show' },
                                                                            _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                                                        )
                                                                    ),
                                                                    _react2.default.createElement(
                                                                        'div',
                                                                        { className: `acrd-sub-content ${self.state.tabsValue.indexOf('about_test_' + resp_test_id) > -1 ? 'hide' : ''}` },
                                                                        _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: about_test.value } })
                                                                    )
                                                                ) : '',
                                                                why_get_tested.value != "" ? _react2.default.createElement(
                                                                    'div',
                                                                    { className: 'test-sub-accordion' },
                                                                    _react2.default.createElement('a', { className: 'anchor-link', id: 'why-get-tested' }),
                                                                    _react2.default.createElement(
                                                                        'h2',
                                                                        { className: 'tst-sub-acrd-heading', onClick: self.ButtonHandler.bind(self, 'why_get_tested_' + resp_test_id) },
                                                                        why_get_tested.title,
                                                                        ' ',
                                                                        _react2.default.createElement(
                                                                            'span',
                                                                            { className: self.state.tabsValue.indexOf('why_get_tested_' + resp_test_id) > -1 ? 'acrd-arw-rotate' : 'acrd-show' },
                                                                            _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                                                        )
                                                                    ),
                                                                    _react2.default.createElement(
                                                                        'div',
                                                                        { className: `acrd-sub-content ${self.state.tabsValue.indexOf('why_get_tested_' + resp_test_id) > -1 ? 'hide' : ''}` },
                                                                        _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: why_get_tested.value } })
                                                                    )
                                                                ) : '',
                                                                test_may_include.value.length > 0 ? _react2.default.createElement(
                                                                    'div',
                                                                    { className: 'test-sub-accordion' },
                                                                    _react2.default.createElement('a', { className: 'anchor-link', id: 'test-includes' }),
                                                                    _react2.default.createElement(
                                                                        'h2',
                                                                        { className: 'tst-sub-acrd-heading', onClick: self.ButtonHandler.bind(self, 'test_include_' + resp_test_id) },
                                                                        test_may_include.title,
                                                                        ' ',
                                                                        _react2.default.createElement(
                                                                            'span',
                                                                            { className: self.state.tabsValue.indexOf('test_include_' + resp_test_id) > -1 ? 'acrd-arw-rotate' : 'acrd-show' },
                                                                            _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                                                        )
                                                                    ),
                                                                    _react2.default.createElement(
                                                                        'div',
                                                                        { className: `acrd-sub-content ${self.state.tabsValue.indexOf('test_include_' + resp_test_id) > -1 ? 'hide' : ''}` },
                                                                        _react2.default.createElement(
                                                                            'ul',
                                                                            null,
                                                                            Object.entries(test_may_include.value).map(function ([k, test_include]) {
                                                                                return _react2.default.createElement(
                                                                                    'li',
                                                                                    { key: k },
                                                                                    test_include
                                                                                );
                                                                            })
                                                                        )
                                                                    )
                                                                ) : '',
                                                                this_package_will_include && this_package_will_include.tests && this_package_will_include.tests.length > 0 ? _react2.default.createElement(
                                                                    'div',
                                                                    { className: 'test-sub-accordion' },
                                                                    _react2.default.createElement('a', { className: 'anchor-link', id: 'package-includes' }),
                                                                    _react2.default.createElement(
                                                                        'h2',
                                                                        { className: 'tst-sub-acrd-heading', onClick: self.ButtonHandler.bind(self, 'test_include_' + resp_test_id) },
                                                                        this_package_will_include.title,
                                                                        ' ',
                                                                        _react2.default.createElement(
                                                                            'span',
                                                                            { className: self.state.tabsValue.indexOf('test_include_' + resp_test_id) > -1 ? 'acrd-arw-rotate' : 'acrd-show' },
                                                                            _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                                                        )
                                                                    ),
                                                                    _react2.default.createElement(
                                                                        'div',
                                                                        { className: `acrd-sub-content ${self.state.tabsValue.indexOf('test_include_' + resp_test_id) > -1 ? 'hide' : ''}` },
                                                                        _react2.default.createElement(
                                                                            'ul',
                                                                            null,
                                                                            Object.entries(this_package_will_include.tests).map(function ([k, test_include]) {
                                                                                return _react2.default.createElement(
                                                                                    'li',
                                                                                    { key: k, id: test_include.id, className: 'mb-rmv' },
                                                                                    _react2.default.createElement(
                                                                                        'div',
                                                                                        null,
                                                                                        _react2.default.createElement(
                                                                                            'h2',
                                                                                            { className: 'tst-sub-acrd-heading padding-btn-adjust', onClick: self.ButtonHandler.bind(self, 'test_include_' + test_include.id) },
                                                                                            `${test_include.name}  ${test_include.parameters && test_include.parameters.length > 0 ? `(${test_include.parameters.length})` : ''}`,
                                                                                            ' ',
                                                                                            test_include.parameters && test_include.parameters.length > 0 ? _react2.default.createElement(
                                                                                                'span',
                                                                                                { className: self.state.tabsValue.indexOf('test_include_' + test_include.id) > -1 ? 'acrd-show' : 'acrd-arw-rotate' },
                                                                                                _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                                                                            ) : ''
                                                                                        )
                                                                                    ),
                                                                                    test_include.parameters && test_include.parameters.length > 0 ? _react2.default.createElement(
                                                                                        'ul',
                                                                                        { className: self.state.tabsValue.indexOf('test_include_' + test_include.id) == -1 ? 'acrd-sub-content hide' : 'acrd-sub-content' },
                                                                                        Object.entries(test_include.parameters).map(function ([p_k, parameter]) {
                                                                                            return _react2.default.createElement(
                                                                                                'li',
                                                                                                { key: p_k },
                                                                                                parameter,
                                                                                                ' '
                                                                                            );
                                                                                        })
                                                                                    ) : ''
                                                                                );
                                                                            })
                                                                        )
                                                                    )
                                                                ) : '',
                                                                preparations.value != '' ? _react2.default.createElement(
                                                                    'div',
                                                                    { className: 'test-sub-accordion' },
                                                                    _react2.default.createElement('a', { className: 'anchor-link', id: 'test-preparations' }),
                                                                    _react2.default.createElement(
                                                                        'h2',
                                                                        { className: 'tst-sub-acrd-heading', onClick: self.ButtonHandler.bind(self, 'test_preparations_' + resp_test_id) },
                                                                        preparations.title,
                                                                        _react2.default.createElement(
                                                                            'span',
                                                                            { className: self.state.tabsValue.indexOf('test_preparations_' + resp_test_id) > -1 ? 'acrd-arw-rotate' : 'acrd-show' },
                                                                            _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                                                        )
                                                                    ),
                                                                    _react2.default.createElement(
                                                                        'div',
                                                                        { className: `acrd-sub-content ${self.state.tabsValue.indexOf('test_preparations_' + resp_test_id) > -1 ? 'hide' : ''}` },
                                                                        _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: preparations.value } })
                                                                    )
                                                                ) : '',
                                                                faqs.length > 0 ? _react2.default.createElement(
                                                                    'div',
                                                                    { className: 'test-sub-accordion' },
                                                                    _react2.default.createElement('a', { className: 'anchor-link', id: 'test-faq' }),
                                                                    _react2.default.createElement(
                                                                        'h2',
                                                                        { className: 'tst-sub-acrd-heading', onClick: self.ButtonHandler.bind(self, 'test_faq_' + resp_test_id) },
                                                                        faqs[0].title,
                                                                        ' ',
                                                                        _react2.default.createElement(
                                                                            'span',
                                                                            { className: self.state.tabsValue.indexOf('test_faq_' + resp_test_id) > -1 ? 'acrd-arw-rotate' : 'acrd-show' },
                                                                            _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                                                        )
                                                                    ),
                                                                    _react2.default.createElement(
                                                                        'div',
                                                                        { className: `acrd-sub-content ${self.state.tabsValue.indexOf('test_faq_' + resp_test_id) > -1 ? 'hide' : ''}` },
                                                                        faqs.length > 0 ? Object.entries(faqs).map(function ([k, faq]) {
                                                                            return _react2.default.createElement(
                                                                                'div',
                                                                                { key: k },
                                                                                _react2.default.createElement(
                                                                                    'p',
                                                                                    null,
                                                                                    'Q.',
                                                                                    faq.value.test_question
                                                                                ),
                                                                                _react2.default.createElement(
                                                                                    'p',
                                                                                    null,
                                                                                    faq.value.test_answer
                                                                                )
                                                                            );
                                                                        }) : ''
                                                                    )
                                                                ) : ''
                                                            )
                                                        ) : ''
                                                    )
                                                ),
                                                !parsed.test_ids ? _react2.default.createElement(
                                                    'div',
                                                    null,
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'filter-title',
                                                            style: { height: 'auto', marginBottom: '10px' } },
                                                        labs && labs.count ? labs.count : '0',
                                                        ' Results found for',
                                                        _react2.default.createElement(
                                                            'h1',
                                                            { className: 'search-result-heading' },
                                                            _react2.default.createElement(
                                                                'span',
                                                                { className: 'fw-700' },
                                                                ' ',
                                                                SearchedCritera
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'search-result-span' },
                                                            this.state.showLocationPopup && false ? '' : locationName ? _react2.default.createElement(
                                                                'span',
                                                                { className: 'location-edit' },
                                                                ` in ${locationName}`
                                                            ) : '',
                                                            _react2.default.createElement('img', { style: { width: 15, height: 15, marginLeft: 7, cursor: 'pointer' }, src: "/assets" + "/img/customer-icons/edit.svg", onClick: this.goToLocation.bind(this) })
                                                        )
                                                    ),
                                                    labs && labs.result.length > 0 ? Object.entries(labs.result).map(function ([k, lab]) {
                                                        return _react2.default.createElement(
                                                            'div',
                                                            { key: k },
                                                            _react2.default.createElement(_LabProfileCard2.default, _extends({}, self.props, { details: lab, key: k, rank: k, noClearTest: true, isTestInfo: true }))
                                                        );
                                                    }) : '',
                                                    labs && labs.count > 0 ? _react2.default.createElement(
                                                        'div',
                                                        { className: 'mrb-20' },
                                                        _react2.default.createElement(
                                                            'a',
                                                            { className: 'viewAllLab', onClick: this.searchProceedLAB.bind(this, '') },
                                                            ' View all labs'
                                                        )
                                                    ) : ''
                                                ) : '',
                                                this.props.searchTestInfoData[0].frequently_booked_together && this.props.searchTestInfoData[0].frequently_booked_together.value.length > 0 ? _react2.default.createElement(
                                                    'div',
                                                    { className: 'widget mrb-15 mrng-top-12 mrb-20' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'widget-content' },
                                                        _react2.default.createElement(
                                                            'h5',
                                                            { className: 'test-duo-heding' },
                                                            ' ',
                                                            this.props.searchTestInfoData[0].frequently_booked_together.title
                                                        ),
                                                        _react2.default.createElement(
                                                            'ul',
                                                            { className: 'test-duo-listing' },
                                                            Object.entries(this.props.searchTestInfoData[0].frequently_booked_together.value).map(function ([k, frequently]) {
                                                                return _react2.default.createElement(
                                                                    'li',
                                                                    { key: k },
                                                                    _react2.default.createElement(
                                                                        'p',
                                                                        null,
                                                                        frequently.lab_test
                                                                    ),
                                                                    _react2.default.createElement(
                                                                        'button',
                                                                        { className: disableAddTest.indexOf(frequently.id) > -1 ? 'disable-btn' : '', id: frequently.id, onClick: self.frequentlyAddTest.bind(self, frequently.id, frequently.lab_test, frequently.show_details), disabled: disableAddTest.indexOf(frequently.id) > -1 ? true : '' },
                                                                        disableAddTest.indexOf(frequently.id) > -1 ? 'Test Added' : 'Add Test'
                                                                    )
                                                                );
                                                            })
                                                        )
                                                    )
                                                ) : '',
                                                author ? _react2.default.createElement(_articleAuthor2.default, {
                                                    name: author.name,
                                                    profileImage: author.profile_img,
                                                    url: author.url,
                                                    id: author.id,
                                                    speciality: author.speciality[0].name,
                                                    experience: author.experience,
                                                    publishedDate: this.props.searchTestInfoData[0].published_date || null,
                                                    history: this.props.history
                                                }) : ''
                                            )
                                        ),
                                        !parsed.test_ids ? _react2.default.createElement(
                                            'button',
                                            { onClick: this.proceedBookNow.bind(this, ''), className: 'p-3 v-btn v-btn-primary btn-lg fixed horizontal bottom no-round text-lg sticky-btn' },
                                            'Book Now',
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'text-xs selected-option static-btn book-right-align-text', style: { verticalAlign: 2, marginRight: 8 } },
                                                ' ',
                                                `(${disableAddTest.length} Selected)`
                                            )
                                        ) : ''
                                    ) : _react2.default.createElement(
                                        'div',
                                        { className: 'col-12 col-md-7 col-lg-7 center-column' },
                                        _react2.default.createElement(_Loader2.default, null)
                                    ),
                                    showInfo && this.props.searchTestInfoData && this.props.searchTestInfoData.length > 0 ? _react2.default.createElement(_ChatPanel2.default, { noChatButton: true, searchTestInfoData: this.props.searchTestInfoData[0], updateTabsValues: this.updateTabsValues.bind(this), resp_test_id: resp_test_id, msgTemplate: 'gold_general_template' }) : _react2.default.createElement(_ChatPanel2.default, { noChatButton: true, msgTemplate: 'gold_general_template' })
                                )
                            )
                        )
                    )
                )
            );
        } else {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'section',
                    { className: 'fade-enter-done' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container-fluid' },
                        _react2.default.createElement(
                            'div',
                            { className: 'profile-body-wrap' },
                            _react2.default.createElement(_DesktopProfileHeader2.default, { showSearch: true }),
                            _react2.default.createElement(
                                'section',
                                { className: 'container parent-section book-appointment-section' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row main-row parent-section-row' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-12 col-md-7 col-lg-7 center-column' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'row' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-12' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'fw-500 text-center mrt-10', style: { fontSize: 18 } },
                                                    'No Record Found !!'
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(_ChatPanel2.default, { noChatButton: true })
                                )
                            )
                        )
                    )
                )
            );
        }
    }
}

exports.default = SearchTestView;

/***/ }),

/***/ "./dev/js/containers/commons/searchTestInfo.js":
/*!*****************************************************!*\
  !*** ./dev/js/containers/commons/searchTestInfo.js ***!
  \*****************************************************/
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

var _searchTestInfo = __webpack_require__(/*! ../../components/commons/search/searchTestInfo.js */ "./dev/js/components/commons/search/searchTestInfo.js");

var _searchTestInfo2 = _interopRequireDefault(_searchTestInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class searchTestInfo extends _react2.default.Component {

    constructor(props) {
        super(props);
    }

    static loadData(store, match, query) {
        let seo_url = "";
        let searchById = match.url.includes("search/testinfo");

        if (!searchById) {
            seo_url = match.url.split("/")[1];
        }

        return new Promise((resolve, reject) => {
            store.dispatch((0, _index.searchTestData)(query.test_ids || '', seo_url, query.lab_id || '', {}, false, data => {
                // get selected test/package details
                resolve({});
            }));
        });
    }

    componentDidMount() {
        if (window) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return _react2.default.createElement(_searchTestInfo2.default, _extends({}, this.props, { hideHeaderOnMobile: true }));
    }
}

const mapStateToProps = state => {
    let { selectedCriterias, searchTestInfoData, search_id_data, selectedLocation, locationType, currentSearchedCriterias, filterCriteria } = state.SEARCH_CRITERIA_LABS;
    return {
        selectedCriterias, searchTestInfoData, search_id_data, selectedLocation, locationType, currentSearchedCriterias, filterCriteria
    };
};

const mapDispatchToProps = dispatch => {
    return {
        searchTestData: (test_ids, test_url, lab_id, state, no_labs, callback) => dispatch((0, _index.searchTestData)(test_ids, test_url, lab_id, state, no_labs, callback)),
        clearExtraTests: () => dispatch((0, _index.clearExtraTests)()),
        toggleDiagnosisCriteria: (type, criteria, forceAdd) => dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd)),
        setLabSearchId: (searchId, filters, setDefault) => dispatch((0, _index.setLabSearchId)(searchId, filters, setDefault)),
        mergeLABState: (state, fetchNewResults) => dispatch((0, _index.mergeLABState)(state, fetchNewResults)),
        clearAllTests: () => dispatch((0, _index.clearAllTests)()),
        selectLabTimeSLot: (slot, reschedule) => dispatch((0, _index.selectLabTimeSLot)(slot, reschedule)),
        selectLabAppointmentType: type => dispatch((0, _index.selectLabAppointmentType)(type)),
        setPackageId: (package_id, isHomePage) => dispatch((0, _index.setPackageId)(package_id, isHomePage)),
        postComment: (comment, cb) => dispatch((0, _index.postComment)(comment, cb))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(searchTestInfo);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2FydGljbGVBdXRob3IvYXJ0aWNsZUF1dGhvci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3NlYXJjaC9zZWFyY2hUZXN0SW5mby5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9jb21tb25zL3NlYXJjaFRlc3RJbmZvLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9oZWxwZXJzL3V0aWxzLmpzIl0sIm5hbWVzIjpbIkFydGljbGVBdXRob3IiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImF1dGhvckNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwidXJsIiwiaGlzdG9yeSIsInB1c2giLCJpZCIsInJlbmRlciIsIm5hbWUiLCJwcm9maWxlSW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpblJpZ2h0IiwiZm9udFNpemUiLCJtYXJnaW4iLCJzcGVjaWFsaXR5IiwiZXhwZXJpZW5jZSIsInB1Ymxpc2hlZERhdGUiLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJTZWFyY2hUZXN0VmlldyIsInBhcnNlZCIsInBhcnNlIiwibG9jYXRpb24iLCJzZWFyY2giLCJ0YWJzVmFsdWUiLCJsYXN0U291cmNlIiwiYWxsRnJlcXVlbnRseVRlc3QiLCJsYWJfaWQiLCJmcmVxdWVudGx5X2hlYWRpbmciLCJkaXNhYmxlQWRkVGVzdCIsInNlYXJjaF9pZCIsInNlYXJjaENpdGllcyIsInNob3dMb2NhdGlvblBvcHVwIiwic2hvd1BvcHVwQ29udGFpbmVyIiwib3ZlcmxheVZpc2libGUiLCJpc1NlbyIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJCdXR0b25IYW5kbGVyIiwiZmllbGQiLCJldmVudCIsInRhYnMiLCJjb25jYXQiLCJzZWxmIiwiZm91bmQiLCJmaWx0ZXIiLCJ4Iiwic2V0U3RhdGUiLCJ1cGRhdGVUYWJzVmFsdWVzIiwidmFsdWUiLCJpbmRleE9mIiwic3BsaWNlIiwiY29tcG9uZW50RGlkTW91bnQiLCJ1cmxfc3RyaW5nIiwid2luZG93IiwiaHJlZiIsIlVSTCIsInRlc3RfaWQiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJzZWFyY2hCeUlkIiwic2VsZWN0ZWRfdGVzdF9pZHMiLCJsYXN0X3BhZ2UiLCJ0ZXN0X2lkX3ZhbCIsImFsbFRlc3QiLCJhbGxfdGVzdF9pZCIsImZlcnFfaGVhZGluZyIsInVybF90ZXN0X2lkcyIsInNwbGl0IiwidGVzdF91cmwiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwia2V5IiwicGFyc2VJbnQiLCJub19sYWJzIiwidGVzdF9pZHMiLCJtYXRjaCIsInNlYXJjaFRlc3REYXRhIiwiY2xvc2VUZXN0SW5mbyIsImJhY2siLCJmcmVxdWVudGx5QWRkVGVzdCIsInNob3dfZGV0YWlscyIsInRlc3QiLCJhZGRlZF90ZXN0IiwiZXh0cmFfdGVzdCIsInR5cGUiLCJoaWRlX3ByaWNlIiwibmV3VGVzdERhdGEiLCJuZXdTZWFyY2hJZERhdGEiLCJzZWFyY2hfaWRfZGF0YSIsImNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzIiwiZmlsdGVycyIsImZpbHRlckNyaXRlcmlhIiwic2V0TGFiU2VhcmNoSWQiLCJ0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSIsImdvVG9Mb2NhdGlvbiIsImxvY2F0aW9uX3VybCIsImRhdGEiLCJHVE0iLCJnZXRVc2VySWQiLCJzZW5kRXZlbnQiLCJzZWFyY2hQcm9jZWVkTEFCIiwibGFiX25hbWUiLCJzZWxlY3RlZENyaXRlcmlhIiwibmV4dFNlbGVjdGVkQ3JpdGVyaWFzIiwic2VhcmNoVGVzdEluZm9EYXRhIiwibGVuZ3RoIiwiaXNfcGFja2FnZSIsImNsZWFyQWxsVGVzdHMiLCJtZXJnZUxBQlN0YXRlIiwibmV4dEZpbHRlckNyaXRlcmlhIiwiY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzIiwic2VhcmNoX2JhY2siLCJwcm9jZWVkQm9va05vdyIsInNlbGVjdGVkQ3JpdGVyaWFzIiwic2V0UGFja2FnZUlkIiwic2V0VGltZW91dCIsImxvY2F0aW9uTmFtZSIsInNlbGVjdGVkTG9jYXRpb24iLCJmb3JtYXR0ZWRfYWRkcmVzcyIsInNlb0RhdGEiLCJTZWFyY2hlZENyaXRlcmEiLCJzaG93SW5mbyIsImxhYnMiLCJ0ZXN0cyIsImFib3V0X3Rlc3QiLCJ3aHlfZ2V0X3Rlc3RlZCIsInRlc3RfbWF5X2luY2x1ZGUiLCJwcmVwYXJhdGlvbnMiLCJmYXFzIiwicmVzcF90ZXN0X2lkIiwiY2Fub25pY2FsVXJsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRoaXNfcGFja2FnZV93aWxsX2luY2x1ZGUiLCJzZW8iLCJicmVhZGNydW1icyIsImJyZWFkY3J1bWIiLCJhdXRob3IiLCJpc0NhdGVnb3J5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbFRvIiwib2Zmc2V0VG9wIiwiQ09ORklHIiwiQVBJX0JBU0VfVVJMIiwiaGlkZUhlYWRlck9uTW9iaWxlIiwiQVNTRVRTX0JBU0VfVVJMIiwiYmluZCIsIndvcmRCcmVhayIsImluZGV4IiwiX19odG1sIiwiayIsInRlc3RfaW5jbHVkZSIsInBhcmFtZXRlcnMiLCJwX2siLCJwYXJhbWV0ZXIiLCJmYXEiLCJ0ZXN0X3F1ZXN0aW9uIiwidGVzdF9hbnN3ZXIiLCJtYXJnaW5Cb3R0b20iLCJjb3VudCIsIm1hcmdpbkxlZnQiLCJjdXJzb3IiLCJyZXN1bHQiLCJsYWIiLCJmcmVxdWVudGx5X2Jvb2tlZF90b2dldGhlciIsImZyZXF1ZW50bHkiLCJsYWJfdGVzdCIsInByb2ZpbGVfaW1nIiwicHVibGlzaGVkX2RhdGUiLCJ2ZXJ0aWNhbEFsaWduIiwic2VhcmNoVGVzdEluZm8iLCJsb2FkRGF0YSIsInN0b3JlIiwicXVlcnkiLCJzZW9fdXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJkaXNwYXRjaCIsIm1hcFN0YXRlVG9Qcm9wcyIsImxvY2F0aW9uVHlwZSIsIlNFQVJDSF9DUklURVJJQV9MQUJTIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY2FsbGJhY2siLCJjbGVhckV4dHJhVGVzdHMiLCJjcml0ZXJpYSIsImZvcmNlQWRkIiwic2VhcmNoSWQiLCJzZXREZWZhdWx0IiwiZmV0Y2hOZXdSZXN1bHRzIiwic2VsZWN0TGFiVGltZVNMb3QiLCJzbG90IiwicmVzY2hlZHVsZSIsInNlbGVjdExhYkFwcG9pbnRtZW50VHlwZSIsInBhY2thZ2VfaWQiLCJpc0hvbWVQYWdlIiwicG9zdENvbW1lbnQiLCJjb21tZW50IiwiY2IiLCJidWlsZE9wZW5CYW5uZXIiLCJsYWJfdGltaW5nIiwibGFiX3RpbWluZ19kYXRhIiwibmV4dF9sYWJfdGltaW5nIiwibmV4dF9sYWJfdGltaW5nX2RhdGEiLCJpc19vcGVuX25vdyIsIm9wZW5fbmV4dF90b2RheSIsInRpbWVfbm93IiwiRGF0ZSIsImdldEhvdXJzIiwibHRkIiwiZW5kIiwic3RhcnQiLCJfZGVjaW1hbFRvVGltZSIsIldFRUtfREFZUyIsIm5leHRfb3BlbiIsIm5leHRfb3Blbl90b2RheSIsInRvZGF5Iiwid2Vla0RheU51bWJlciIsImdldERheSIsImkiLCJ0aW1lIiwidG9TdHJpbmciLCJob3VycyIsIm1pbnV0ZXMiLCJkYXlfdGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxNQUFNQSxhQUFOLFNBQTRCQyxnQkFBTUMsU0FBbEMsQ0FBNEM7QUFDM0NDLGFBQVlDLEtBQVosRUFBbUI7QUFDbEIsUUFBTUEsS0FBTjtBQUNBLE9BQUtDLEtBQUwsR0FBYSxFQUFiO0FBR0E7O0FBRURDLGFBQVlDLENBQVosRUFBZTtBQUNkQSxJQUFFQyxjQUFGO0FBQ0EsTUFBSSxLQUFLSixLQUFMLENBQVdLLEdBQWYsRUFBb0I7QUFDbkIsUUFBS0wsS0FBTCxDQUFXTSxPQUFYLENBQW1CQyxJQUFuQixDQUF3QixLQUFLUCxLQUFMLENBQVdLLEdBQW5DO0FBQ0EsR0FGRCxNQUVPO0FBQ04sUUFBS0wsS0FBTCxDQUFX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SUFBWDtBQUNIO0FBQ0RGLFlBQVFBLFFBQVEsRUFBaEI7QUFDQSxXQUFRLEdBQUVBLEtBQU0sR0FBRUMsT0FBUSxJQUFHQyxRQUFTLEVBQXRDO0FBQ0gsQyIsImZpbGUiOiI5My5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEluaXRpYWxzUGljdHVyZSBmcm9tICcuLi9pbml0aWFsc1BpY3R1cmUnO1xuXG5jbGFzcyBBcnRpY2xlQXV0aG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXG5cdFx0fVxuXHR9XG5cblx0YXV0aG9yQ2xpY2soZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdGlmICh0aGlzLnByb3BzLnVybCkge1xuXHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2godGhpcy5wcm9wcy51cmwpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvb3BkL2RvY3Rvci8ke3RoaXMucHJvcHMuaWR9YClcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1hdXRob3ItZGl2IG1yYi0yMFwiPlxuXHRcdFx0XHQ8SW5pdGlhbHNQaWN0dXJlIGNsYXNzTmFtZT1cImluaXRpYWxzUGljdHVyZS1kcyBpbml0aWFsc1BpY3R1cmUtYXV0aG9yXCIgbmFtZT17dGhpcy5wcm9wcy5uYW1lfSBoYXNfaW1hZ2U9eyEhdGhpcy5wcm9wcy5wcm9maWxlSW1hZ2V9ID5cblx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImZsdHItdXNyLWltYWdlIGltZy1yb3VuZFwiIHN0eWxlPXt7IHdpZHRoOiA2MCwgaGVpZ2h0OiA2MCwgbWFyZ2luUmlnaHQ6IDgsIGZvbnRTaXplOiAxMCB9fSBzcmM9e3RoaXMucHJvcHMucHJvZmlsZUltYWdlfSBhbHQ9e2BEci4gJHt0aGlzLnByb3BzLm5hbWV9YH0gdGl0bGU9e2BEci4gJHt0aGlzLnByb3BzLm5hbWV9YH0gLz5cblx0XHRcdFx0PC9Jbml0aWFsc1BpY3R1cmU+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXV0aG9yLWR0bHNcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF1dGhvci1uYW1lLWRpdlwiPlxuXHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgbWFyZ2luOiAnMCA2cHggMCAwJyB9fT5Xcml0dGVuIEJ5IDo8L3NwYW4+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudXJsID9cblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtgLyR7dGhpcy5wcm9wcy51cmx9YH0gb25DbGljaz17KGUpID0+IHRoaXMuYXV0aG9yQ2xpY2soZSl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LXByaW1hcnlcIj57YERyLiAke3RoaXMucHJvcHMubmFtZX1gfTwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0PC9hPiA6XG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj17YC9vcGQvZG9jdG9yLyR7dGhpcy5wcm9wcy5pZH1gfSBvbkNsaWNrPXsoZSkgPT4gdGhpcy5hdXRob3JDbGljayhlKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtcHJpbWFyeVwiPntgRHIuICR7dGhpcy5wcm9wcy5uYW1lfWB9PC9oMz5cblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhdXRob3ItZXhwLWRpdlwiPlxuXHRcdFx0XHRcdFx0PHNwYW4+e3RoaXMucHJvcHMuc3BlY2lhbGl0eX0gfCB7dGhpcy5wcm9wcy5leHBlcmllbmNlfSB5ZWFycyBvZiBleHBlcmllbmNlPC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMucHVibGlzaGVkRGF0ZSA/XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1kYXRlXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+UHVibGlzaGVkIERhdGUgOiB7dGhpcy5wcm9wcy5wdWJsaXNoZWREYXRlfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+IDogJydcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVBdXRob3IiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBDaGF0UGFuZWwgZnJvbSAnLi4vQ2hhdFBhbmVsJ1xuaW1wb3J0IExvY2F0aW9uRWxlbWVudHMgZnJvbSAnLi4vLi4vLi4vY29udGFpbmVycy9jb21tb25zL2xvY2F0aW9uRWxlbWVudHMnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IExvY2F0aW9uUG9wdXAgZnJvbSAnLi4vLi4vLi4vY29udGFpbmVycy9jb21tb25zL2xvY2F0aW9uUG9wdXAnXG5pbXBvcnQgTGFiUHJvZmlsZUNhcmQgZnJvbSAnLi4vLi4vZGlhZ25vc2lzL2NvbW1vbnMvbGFiUHJvZmlsZUNhcmQvTGFiUHJvZmlsZUNhcmQuanMnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvTG9hZGVyJ1xuaW1wb3J0IEhlbG1ldFRhZ3MgZnJvbSAnLi4vLi4vY29tbW9ucy9IZWxtZXRUYWdzJ1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5pbXBvcnQgQXJ0aWNsZUF1dGhvciBmcm9tICcuLi9hcnRpY2xlQXV0aG9yL2FydGljbGVBdXRob3InO1xuaW1wb3J0IFRhYmxlT2ZDb250ZW50IGZyb20gJy4uL2FydGljbGUvVGFibGVPZkNvbnRlbnQnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG5cbmNsYXNzIFNlYXJjaFRlc3RWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcblxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdGFic1ZhbHVlOiBbXSxcbiAgICAgICAgICAgIGxhc3RTb3VyY2U6ICcnLFxuICAgICAgICAgICAgYWxsRnJlcXVlbnRseVRlc3Q6IFtdLFxuICAgICAgICAgICAgbGFiX2lkOiAnJyxcbiAgICAgICAgICAgIGZyZXF1ZW50bHlfaGVhZGluZzogJycsXG4gICAgICAgICAgICBkaXNhYmxlQWRkVGVzdDogW10sXG4gICAgICAgICAgICBzZWFyY2hfaWQ6ICcnLFxuICAgICAgICAgICAgc2VhcmNoQ2l0aWVzOiBbXSxcbiAgICAgICAgICAgIHNob3dMb2NhdGlvblBvcHVwOiB0cnVlLFxuICAgICAgICAgICAgc2hvd1BvcHVwQ29udGFpbmVyOiB0cnVlLFxuICAgICAgICAgICAgb3ZlcmxheVZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBpc1NlbzogIXRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCJzZWFyY2gvdGVzdGluZm9cIilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEJ1dHRvbkhhbmRsZXIoZmllbGQsIGV2ZW50KSB7XG4gICAgICAgIGxldCB0YWJzID0gW10uY29uY2F0KHRoaXMuc3RhdGUudGFic1ZhbHVlKVxuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgbGV0IGZvdW5kID0gZmFsc2VcbiAgICAgICAgdGFicyA9IHRhYnMuZmlsdGVyKCh4KSA9PiB7XG4gICAgICAgICAgICBpZiAoeCA9PSBmaWVsZCkge1xuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgdGFicy5wdXNoKGZpZWxkKVxuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5zZXRTdGF0ZSh7IHRhYnNWYWx1ZTogdGFicyB9KVxuICAgIH1cblxuICAgIHVwZGF0ZVRhYnNWYWx1ZXModmFsdWUpIHtcbiAgICAgICAgbGV0IHRhYnMgPSBbXS5jb25jYXQodGhpcy5zdGF0ZS50YWJzVmFsdWUpXG4gICAgICAgIGlmICh0YWJzLmluZGV4T2YodmFsdWUpID4gLTEpIHtcbiAgICAgICAgICAgIHRhYnMuc3BsaWNlKCB0YWJzLmluZGV4T2YodmFsdWUpLCAxICk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRhYnNWYWx1ZTogdGFicyB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB2YXIgdXJsX3N0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gICAgICAgIHZhciB1cmwgPSBuZXcgVVJMKHVybF9zdHJpbmcpO1xuICAgICAgICB2YXIgdGVzdF9pZCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidGVzdF9pZHNcIilcbiAgICAgICAgbGV0IHNlYXJjaEJ5SWQgPSB1cmxfc3RyaW5nLmluY2x1ZGVzKFwic2VhcmNoL3Rlc3RpbmZvXCIpXG4gICAgICAgIHZhciBzZWxlY3RlZF90ZXN0X2lkcyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwic2VsZWN0ZWRfdGVzdF9pZHNcIikgPyB1cmwuc2VhcmNoUGFyYW1zLmdldChcInNlbGVjdGVkX3Rlc3RfaWRzXCIpIDogJydcbiAgICAgICAgbGV0IGxhc3RfcGFnZSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiZnJvbVwiKVxuICAgICAgICBsZXQgc2VhcmNoX2lkID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJzZWFyY2hfaWRcIilcbiAgICAgICAgbGV0IGxhYl9pZCA9ICcnXG4gICAgICAgIGxhYl9pZCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibGFiX2lkXCIpXG4gICAgICAgIGxldCB0ZXN0X2lkX3ZhbCA9IFtdXG4gICAgICAgIGxldCBhbGxUZXN0ID0gW11cbiAgICAgICAgbGV0IGFsbF90ZXN0X2lkID0gW11cbiAgICAgICAgbGV0IGZlcnFfaGVhZGluZ1xuICAgICAgICBsZXQgdXJsX3Rlc3RfaWRzID0gc2VsZWN0ZWRfdGVzdF9pZHMuc3BsaXQoJywnKVxuICAgICAgICBsZXQgdGVzdF91cmwgPSBcIlwiXG4gICAgICAgIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHVybF90ZXN0X2lkcykubWFwKGZ1bmN0aW9uIChba2V5LCB2YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICBhbGxfdGVzdF9pZC5wdXNoKHBhcnNlSW50KHZhbHVlKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBub19sYWJzID0gZmFsc2VcbiAgICAgICAgaWYgKHBhcnNlZC50ZXN0X2lkcykge1xuICAgICAgICAgICAgbm9fbGFicyA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbGFzdFNvdXJjZTogbGFzdF9wYWdlLCBzZWFyY2hfaWQ6IHNlYXJjaF9pZCB9KVxuXG4gICAgICAgIGlmICghdGVzdF9pZCAmJiBzZWFyY2hCeUlkKSB7XG4gICAgICAgICAgICAvLyAgVE9ETyAtIGRlZmF1bHRcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzZWFyY2hCeUlkKSB7XG4gICAgICAgICAgICB0ZXN0X3VybCA9IHRoaXMucHJvcHMubWF0Y2gudXJsXG4gICAgICAgICAgICB0ZXN0X3VybCA9IHRlc3RfdXJsLnNwbGl0KFwiL1wiKVsxXVxuICAgICAgICAgICAgdGVzdF9pZCA9ICcnXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLnNlYXJjaFRlc3REYXRhKHRlc3RfaWQsIHRlc3RfdXJsLCBsYWJfaWQsIHRoaXMucHJvcHMsIG5vX2xhYnMpIC8vIGdldCBzZWxlY3RlZCB0ZXN0L3BhY2thZ2UgZGV0YWlsc1xuICAgIH1cblxuXG4gICAgY2xvc2VUZXN0SW5mbygpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubGFzdFNvdXJjZSA9PSAnc2VhcmNoJykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9zZWFyY2gnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmcmVxdWVudGx5QWRkVGVzdChmaWVsZCwgbmFtZSwgc2hvd19kZXRhaWxzLCBldmVudCkgeyBcbiAgICAgICAgLy8gYWRkaW5nIG1vcmUgdGVzdCBcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGxldCB1cmxfc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgICAgICAgbGV0IHVybCA9IG5ldyBVUkwodXJsX3N0cmluZyk7XG4gICAgICAgIGxldCBsYWJfaWQgPSAnJ1xuICAgICAgICBsYWJfaWQgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImxhYl9pZFwiKVxuICAgICAgICBsZXQgdGVzdCA9IHt9XG4gICAgICAgIGxldCBhZGRlZF90ZXN0ID0gW10uY29uY2F0KHRoaXMuc3RhdGUuZGlzYWJsZUFkZFRlc3QpXG4gICAgICAgIGFkZGVkX3Rlc3QucHVzaChmaWVsZClcbiAgICAgICAgc2VsZi5zZXRTdGF0ZSh7IGRpc2FibGVBZGRUZXN0OiBhZGRlZF90ZXN0IH0pXG4gICAgICAgIGlmIChsYWJfaWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGVzdC5sYWJfaWQgPSBsYWJfaWRcbiAgICAgICAgICAgIHRlc3QuZXh0cmFfdGVzdCA9IHRydWVcbiAgICAgICAgICAgIHRlc3QudHlwZSA9ICd0ZXN0J1xuICAgICAgICAgICAgdGVzdC5uYW1lID0gbmFtZVxuICAgICAgICAgICAgdGVzdC5pZCA9IGZpZWxkXG4gICAgICAgICAgICB0ZXN0LnNob3dfZGV0YWlscyA9IHNob3dfZGV0YWlsc1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGVzdC50eXBlID0gJ3Rlc3QnXG4gICAgICAgICAgICB0ZXN0Lm5hbWUgPSBuYW1lXG4gICAgICAgICAgICB0ZXN0LmlkID0gZmllbGRcbiAgICAgICAgICAgIHRlc3Quc2hvd19kZXRhaWxzID0gc2hvd19kZXRhaWxzXG4gICAgICAgIH1cbiAgICAgICAgdGVzdC5oaWRlX3ByaWNlID0gZmFsc2VcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zZWFyY2hfaWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBuZXdUZXN0RGF0YSA9IHt9XG4gICAgICAgICAgICBuZXdUZXN0RGF0YS50eXBlID0gJ3Rlc3QnXG4gICAgICAgICAgICBuZXdUZXN0RGF0YS5uYW1lID0gJydcbiAgICAgICAgICAgIG5ld1Rlc3REYXRhLmlkID0gZmllbGRcbiAgICAgICAgICAgIG5ld1Rlc3REYXRhLnNob3dfZGV0YWlscyA9IHNob3dfZGV0YWlsc1xuICAgICAgICAgICAgbGV0IG5ld1NlYXJjaElkRGF0YSA9IFtdXG4gICAgICAgICAgICBuZXdTZWFyY2hJZERhdGEgPSB0aGlzLnByb3BzLnNlYXJjaF9pZF9kYXRhW3RoaXMuc3RhdGUuc2VhcmNoX2lkXS5jb21tb25TZWxlY3RlZENyaXRlcmlhc1xuICAgICAgICAgICAgbmV3U2VhcmNoSWREYXRhLnB1c2gobmV3VGVzdERhdGEpXG4gICAgICAgICAgICBsZXQgZmlsdGVycyA9IHt9XG4gICAgICAgICAgICBmaWx0ZXJzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzID0gbmV3U2VhcmNoSWREYXRhXG4gICAgICAgICAgICBmaWx0ZXJzLmZpbHRlckNyaXRlcmlhID0gdGhpcy5wcm9wcy5zZWFyY2hfaWRfZGF0YVt0aGlzLnN0YXRlLnNlYXJjaF9pZF0uZmlsdGVyQ3JpdGVyaWFcbiAgICAgICAgICAgIHNlbGYucHJvcHMuc2V0TGFiU2VhcmNoSWQodGhpcy5zdGF0ZS5zZWFyY2hfaWQsIGZpbHRlcnMsIHRydWUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubGFzdFNvdXJjZSA9PSAnc2VhcmNoJyB8fCAhdGhpcy5zdGF0ZS5zZWFyY2hfaWQpIHtcbiAgICAgICAgICAgIHNlbGYucHJvcHMudG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEoJ3Rlc3QnLCB0ZXN0LCBmYWxzZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdvVG9Mb2NhdGlvbigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzZWFyY2hDaXRpZXM6IFtdXG4gICAgICAgIH0pXG4gICAgICAgIGxldCBsb2NhdGlvbl91cmwgPSAnL2xvY2F0aW9uc2VhcmNoJ1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDaGFuZ2VMb2NhdGlvbkRvY3RvclJlc3VsdHNQb3BVcCcsICdBY3Rpb24nOiAnY2hhbmdlLWxvY2F0aW9uLWRvY3Rvci1yZXN1bHRzLVBvcFVwJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2hhbmdlLWxvY2F0aW9uLWRvY3Rvci1yZXN1bHRzLVBvcFVwJywgJ3VybCc6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGxvY2F0aW9uX3VybClcbiAgICB9XG5cbiAgICBzZWFyY2hQcm9jZWVkTEFCKGxhYl9uYW1lID0gXCJcIikge1xuICAgICAgICBsZXQgdGVzdCA9IHt9XG4gICAgICAgIGxldCBmb3VuZCA9IGZhbHNlXG4gICAgICAgIGxldCBzZWxlY3RlZENyaXRlcmlhID0gW11cbiAgICAgICAgbGV0IG5leHRTZWxlY3RlZENyaXRlcmlhcyA9IFtdXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YSAmJiB0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YVswXS5pc19wYWNrYWdlKXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3NlYXJjaHBhY2thZ2VzJylcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRlc3QuaWQgPSB0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YVswXS5pZFxuICAgICAgICAgICAgICAgIHRlc3QubmFtZSA9IHRoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhWzBdLm5hbWVcbiAgICAgICAgICAgICAgICB0ZXN0LnNob3dfZGV0YWlscyA9IHRoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhWzBdLnNob3dfZGV0YWlsc1xuICAgICAgICAgICAgICAgIHRlc3QudXJsID0gdGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGFbMF0udXJsXG4gICAgICAgICAgICAgICAgdGVzdC50eXBlID0gJ3Rlc3QnXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGVhckFsbFRlc3RzKClcbiAgICAgICAgICAgICAgICBuZXh0U2VsZWN0ZWRDcml0ZXJpYXMgPSBuZXh0U2VsZWN0ZWRDcml0ZXJpYXMuY29uY2F0KHRlc3QpXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSgndGVzdCcsIHRlc3QsIGZhbHNlKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBkb2N0b3IgbmFtZSwgaG9zcGl0YWwgbmFtZVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubWVyZ2VMQUJTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLmZpbHRlckNyaXRlcmlhLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiX25hbWVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbmV4dEZpbHRlckNyaXRlcmlhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLmZpbHRlckNyaXRlcmlhLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiX25hbWVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzOiBuZXh0U2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgICAgICAgICAgICAgIG5leHRTZWxlY3RlZENyaXRlcmlhczogbmV4dFNlbGVjdGVkQ3JpdGVyaWFzXG4gICAgICAgICAgICAgICAgfSwgdHJ1ZSlcblxuXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9sYWIvc2VhcmNocmVzdWx0cycsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiB7IHNlYXJjaF9iYWNrOiB0cnVlIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvY2VlZEJvb2tOb3cobGFiX25hbWUgPSBcIlwiKSB7XG4gICAgICAgIC8vYm9vayBub3cgXG4gICAgICAgIGxldCB0ZXN0ID0ge31cbiAgICAgICAgbGV0IGZvdW5kID0gZmFsc2VcbiAgICAgICAgbGV0IHNlbGVjdGVkQ3JpdGVyaWEgPSBbXVxuICAgICAgICBsZXQgbmV4dFNlbGVjdGVkQ3JpdGVyaWFzID0gdGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhc1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGEgJiYgdGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGFbMF0uaXNfcGFja2FnZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRQYWNrYWdlSWQodGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGFbMF0uaWQsIGZhbHNlKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvc2VhcmNocGFja2FnZXMnKVxuICAgICAgICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgICAgIH1lbHNleyAvLyBmb3IgbGFiIG9ubHlcbiAgICAgICAgICAgICAgICB0ZXN0LmlkID0gdGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGFbMF0uaWRcbiAgICAgICAgICAgICAgICB0ZXN0Lm5hbWUgPSB0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YVswXS5uYW1lXG4gICAgICAgICAgICAgICAgdGVzdC5zaG93X2RldGFpbHMgPSB0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YVswXS5zaG93X2RldGFpbHNcbiAgICAgICAgICAgICAgICB0ZXN0LnVybCA9IHRoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhWzBdLnVybFxuICAgICAgICAgICAgICAgIHRlc3QudHlwZSA9ICd0ZXN0J1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ3JpdGVyaWEgPSB0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDcml0ZXJpYSA9IHNlbGVjdGVkQ3JpdGVyaWEuZmlsdGVyKCh4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4LmlkID09IHRoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhWzBdLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRTZWxlY3RlZENyaXRlcmlhcyA9IG5leHRTZWxlY3RlZENyaXRlcmlhcy5jb25jYXQodGVzdClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSgndGVzdCcsIHRlc3QsIGZhbHNlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgZG9jdG9yIG5hbWUsIGhvc3BpdGFsIG5hbWVcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm1lcmdlTEFCU3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYToge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5maWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYl9uYW1lXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG5leHRGaWx0ZXJDcml0ZXJpYToge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5maWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYl9uYW1lXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTZWFyY2hlZENyaXRlcmlhczogbmV4dFNlbGVjdGVkQ3JpdGVyaWFzLFxuICAgICAgICAgICAgICAgICAgICBuZXh0U2VsZWN0ZWRDcml0ZXJpYXM6IG5leHRTZWxlY3RlZENyaXRlcmlhc1xuICAgICAgICAgICAgICAgIH0sIHRydWUpXG5cblxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvbGFiL3NlYXJjaHJlc3VsdHMnLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogeyBzZWFyY2hfYmFjazogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIHZhciBzZWxlY3RlZF90ZXN0X2lkcyA9IHBhcnNlZC5zZWxlY3RlZF90ZXN0X2lkcyA/IHBhcnNlZC5zZWxlY3RlZF90ZXN0X2lkcyA6ICcnXG4gICAgICAgIGxldCB1cmxfdGVzdF9pZHMgPSBzZWxlY3RlZF90ZXN0X2lkcy5zcGxpdCgnLCcpXG4gICAgICAgIGxldCBkaXNhYmxlQWRkVGVzdCA9IFtdLmNvbmNhdCh0aGlzLnN0YXRlLmRpc2FibGVBZGRUZXN0KVxuICAgICAgICB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh1cmxfdGVzdF9pZHMpLm1hcChmdW5jdGlvbiAoW2tleSwgdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgZGlzYWJsZUFkZFRlc3QucHVzaChwYXJzZUludCh2YWx1ZSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGxldCBsb2NhdGlvbk5hbWUgPSBcIlwiXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzKSB7XG4gICAgICAgICAgICBsb2NhdGlvbk5hbWUgPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZm9ybWF0dGVkX2FkZHJlc3NcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlb0RhdGEgJiYgdGhpcy5wcm9wcy5zZW9EYXRhLmxvY2F0aW9uKSB7XG4gICAgICAgICAgICBsb2NhdGlvbk5hbWUgPSB0aGlzLnByb3BzLnNlb0RhdGEubG9jYXRpb25cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBTZWFyY2hlZENyaXRlcmFcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhICYmIHRoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgICAgbGV0IHNob3dJbmZvID0gdHJ1ZVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCJzZWFyY2gvdGVzdGluZm9cIikpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGFbMF0uaWQgIT0gcGFyc2VkLnRlc3RfaWRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dJbmZvID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyh0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YVswXS51cmwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dJbmZvID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB7IGxhYnMgfSA9IHRoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhWzBdXG4gICAgICAgICAgICBpZiAobGFicyAmJiBsYWJzLnRlc3RzKSB7XG4gICAgICAgICAgICAgICAgU2VhcmNoZWRDcml0ZXJhID0gbGFicy50ZXN0c1swXS5uYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgICAgIGxldCBhYm91dF90ZXN0ID0gdGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGFbMF0uYWJvdXRfdGVzdFxuICAgICAgICAgICAgbGV0IHdoeV9nZXRfdGVzdGVkID0gdGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGFbMF0ud2h5X2dldF90ZXN0ZWRcbiAgICAgICAgICAgIGxldCB0ZXN0X21heV9pbmNsdWRlID0gdGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGFbMF0udGVzdF9tYXlfaW5jbHVkZVxuICAgICAgICAgICAgbGV0IHByZXBhcmF0aW9ucyA9IHRoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhWzBdLnByZXBhcmF0aW9uc1xuICAgICAgICAgICAgbGV0IGZhcXMgPSB0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YVswXS5mYXFzXG4gICAgICAgICAgICBsZXQgcmVzcF90ZXN0X2lkID0gdGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGFbMF0uaWRcbiAgICAgICAgICAgIGxldCBjYW5vbmljYWxVcmwgPSAnJ1xuICAgICAgICAgICAgbGV0IHRpdGxlID0gJydcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9ICcnXG4gICAgICAgICAgICBsZXQgdGhpc19wYWNrYWdlX3dpbGxfaW5jbHVkZSA9IHRoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhWzBdLnRoaXNfcGFja2FnZV93aWxsX2luY2x1ZGVcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YVswXS5zZW8pIHtcbiAgICAgICAgICAgICAgICBjYW5vbmljYWxVcmwgPSB0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YVswXS51cmxcbiAgICAgICAgICAgICAgICB0aXRsZSA9IHRoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhWzBdLnNlby50aXRsZVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gdGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGFbMF0uc2VvLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYnJlYWRjcnVtYnMgPSB0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YVswXS5icmVhZGNydW1iXG4gICAgICAgICAgICBsZXQgYXV0aG9yID0gdGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGFbMF0uYXV0aG9yIHx8IG51bGxcbiAgICAgICAgICAgIGlmKHBhcnNlZC5pc0NhdGVnb3J5ICYmIHBhcnNlZC5pc0NhdGVnb3J5ID09ICd0cnVlJyAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFja2FnZS1pbmNsdWRlcycpICYmIHRoaXNfcGFja2FnZV93aWxsX2luY2x1ZGUgJiYgdGhpc19wYWNrYWdlX3dpbGxfaW5jbHVkZS50ZXN0cyAmJiB0aGlzX3BhY2thZ2Vfd2lsbF9pbmNsdWRlLnRlc3RzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCxkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFja2FnZS1pbmNsdWRlcycpLm9mZnNldFRvcClcbiAgICAgICAgICAgICAgICB9LCAyMDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxIZWxtZXRUYWdzIHRhZ3NEYXRhPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5vbmljYWxVcmw6IGAke0NPTkZJRy5BUElfQkFTRV9VUkx9LyR7Y2Fub25pY2FsVXJsfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZhZGUtZW50ZXItZG9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlkZUhlYWRlck9uTW9iaWxlID8gPGRpdiBjbGFzc05hbWU9XCJoaWRlLTc2MlwiPjxQcm9maWxlSGVhZGVyIHNob3dTZWFyY2g9e3RydWV9IC8+PC9kaXY+IDogPFByb2ZpbGVIZWFkZXIgc2hvd1NlYXJjaD17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e1wiY29udGFpbmVyIHBhcmVudC1zZWN0aW9uIGJvb2stYXBwb2ludG1lbnQtc2VjdGlvblwiICsgKHRoaXMucHJvcHMuaGlkZUhlYWRlck9uTW9iaWxlID8gXCIgbXAwXCIgOiBcIlwiKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dJbmZvID8gPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTcgY2VudGVyLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXJiLTIwIGJvdHRvbU1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXN0SW5mb0hlYWRUaXRsZSBtcm5nLXRvcC0xMlwiPjxpbWcgc3R5bGU9e3sgd2lkdGg6ICcyMHB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9iYWNrLWFycm93LnBuZ1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBvbkNsaWNrPXt0aGlzLmNsb3NlVGVzdEluZm8uYmluZCh0aGlzKX0gLz57dGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGFbMF0ubmFtZX0gPC9oMT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhZGNydW1icyAmJiBicmVhZGNydW1icy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtcmItMTAgbXJ0LTIwIGJyZWFkY3J1bWItbGlzdFwiIHN0eWxlPXt7IHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhZGNydW1icy5tYXAoKGJyZWFkY3J1bWIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXticmVhZGNydW1iLnVybH0gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYCR7YnJlYWRjcnVtYi51cmx9YClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2luZGV4ICE9PSBicmVhZGNydW1icy5sZW5ndGggLSAxID8gYGZ3LTUwMCBicmVhZGNydW1iLXRpdGxlIGJyZWFkY3J1bWItY29sb3JlZC10aXRsZWAgOiBgZnctNTAwIGJyZWFkY3J1bWItdGl0bGVgfT57YnJlYWRjcnVtYi50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggIT09IGJyZWFkY3J1bWJzLmxlbmd0aCAtIDEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItYXJyb3dcIj4mZ3Q7PC9zcGFuPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dJbmZvICYmIHRoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhICYmIHRoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtb2YtY29udGVudC1tb2JpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlT2ZDb250ZW50IHNlYXJjaFRlc3RJbmZvRGF0YT17dGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGFbMF19IHVwZGF0ZVRhYnNWYWx1ZXM9e3RoaXMudXBkYXRlVGFic1ZhbHVlcy5iaW5kKHRoaXMpfSByZXNwX3Rlc3RfaWQ9e3Jlc3BfdGVzdF9pZH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTUgbXJuZy10b3AtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdC1pbmZvLWNvbnRpbmVyLWJsb2NrIGJvcmRlci1yYWRpdXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGFbMF0uc2hvd19kZXRhaWxzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0LWluZm8tYWNyZC1oZWFkLW1haW5cIiBpZD17cmVzcF90ZXN0X2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdHN0LW1haW4tYWNyZC1kYXRhICR7c2VsZi5zdGF0ZS50YWJzVmFsdWUuaW5kZXhPZigndGVzdF8nICsgcmVzcF90ZXN0X2lkKSA+IC0xID8gJ2hpZGUnIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Fib3V0X3Rlc3QudmFsdWUgIT0gXCJcIiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdC1zdWItYWNjb3JkaW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhbmNob3ItbGlua1wiIGlkPVwiYWJvdXQtdGVzdFwiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0c3Qtc3ViLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3NlbGYuQnV0dG9uSGFuZGxlci5iaW5kKHNlbGYsICdhYm91dF90ZXN0XycgKyByZXNwX3Rlc3RfaWQpfT57YWJvdXRfdGVzdC50aXRsZX0gPHNwYW4gY2xhc3NOYW1lPXtzZWxmLnN0YXRlLnRhYnNWYWx1ZS5pbmRleE9mKCdhYm91dF90ZXN0XycgKyByZXNwX3Rlc3RfaWQpID4gLTEgPyAnYWNyZC1hcnctcm90YXRlJyA6ICdhY3JkLXNob3cnfT48aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPjwvc3Bhbj48L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhY3JkLXN1Yi1jb250ZW50ICR7c2VsZi5zdGF0ZS50YWJzVmFsdWUuaW5kZXhPZignYWJvdXRfdGVzdF8nICsgcmVzcF90ZXN0X2lkKSA+IC0xID8gJ2hpZGUnIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGFib3V0X3Rlc3QudmFsdWUgfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3doeV9nZXRfdGVzdGVkLnZhbHVlICE9IFwiXCIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3Qtc3ViLWFjY29yZGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYW5jaG9yLWxpbmtcIiBpZD1cIndoeS1nZXQtdGVzdGVkXCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRzdC1zdWItYWNyZC1oZWFkaW5nXCIgb25DbGljaz17c2VsZi5CdXR0b25IYW5kbGVyLmJpbmQoc2VsZiwgJ3doeV9nZXRfdGVzdGVkXycgKyByZXNwX3Rlc3RfaWQpfT57d2h5X2dldF90ZXN0ZWQudGl0bGV9IDxzcGFuIGNsYXNzTmFtZT17c2VsZi5zdGF0ZS50YWJzVmFsdWUuaW5kZXhPZignd2h5X2dldF90ZXN0ZWRfJyArIHJlc3BfdGVzdF9pZCkgPiAtMSA/ICdhY3JkLWFydy1yb3RhdGUnIDogJ2FjcmQtc2hvdyd9PjxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+PC9zcGFuPjwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFjcmQtc3ViLWNvbnRlbnQgJHtzZWxmLnN0YXRlLnRhYnNWYWx1ZS5pbmRleE9mKCd3aHlfZ2V0X3Rlc3RlZF8nICsgcmVzcF90ZXN0X2lkKSA+IC0xID8gJ2hpZGUnIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHdoeV9nZXRfdGVzdGVkLnZhbHVlIH19PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXN0X21heV9pbmNsdWRlLnZhbHVlLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3Qtc3ViLWFjY29yZGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYW5jaG9yLWxpbmtcIiBpZD1cInRlc3QtaW5jbHVkZXNcIj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidHN0LXN1Yi1hY3JkLWhlYWRpbmdcIiBvbkNsaWNrPXtzZWxmLkJ1dHRvbkhhbmRsZXIuYmluZChzZWxmLCAndGVzdF9pbmNsdWRlXycgKyByZXNwX3Rlc3RfaWQpfT57dGVzdF9tYXlfaW5jbHVkZS50aXRsZX0gPHNwYW4gY2xhc3NOYW1lPXtzZWxmLnN0YXRlLnRhYnNWYWx1ZS5pbmRleE9mKCd0ZXN0X2luY2x1ZGVfJyArIHJlc3BfdGVzdF9pZCkgPiAtMSA/ICdhY3JkLWFydy1yb3RhdGUnIDogJ2FjcmQtc2hvdyd9PjxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+PC9zcGFuPjwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFjcmQtc3ViLWNvbnRlbnQgJHtzZWxmLnN0YXRlLnRhYnNWYWx1ZS5pbmRleE9mKCd0ZXN0X2luY2x1ZGVfJyArIHJlc3BfdGVzdF9pZCkgPiAtMSA/ICdoaWRlJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKHRlc3RfbWF5X2luY2x1ZGUudmFsdWUpLm1hcChmdW5jdGlvbiAoW2ssIHRlc3RfaW5jbHVkZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtrfT57dGVzdF9pbmNsdWRlfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpc19wYWNrYWdlX3dpbGxfaW5jbHVkZSAmJiB0aGlzX3BhY2thZ2Vfd2lsbF9pbmNsdWRlLnRlc3RzICYmIHRoaXNfcGFja2FnZV93aWxsX2luY2x1ZGUudGVzdHMubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdC1zdWItYWNjb3JkaW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhbmNob3ItbGlua1wiIGlkPVwicGFja2FnZS1pbmNsdWRlc1wiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0c3Qtc3ViLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3NlbGYuQnV0dG9uSGFuZGxlci5iaW5kKHNlbGYsICd0ZXN0X2luY2x1ZGVfJyArIHJlc3BfdGVzdF9pZCl9Pnt0aGlzX3BhY2thZ2Vfd2lsbF9pbmNsdWRlLnRpdGxlfSA8c3BhbiBjbGFzc05hbWU9e3NlbGYuc3RhdGUudGFic1ZhbHVlLmluZGV4T2YoJ3Rlc3RfaW5jbHVkZV8nICsgcmVzcF90ZXN0X2lkKSA+IC0xID8gJ2FjcmQtYXJ3LXJvdGF0ZScgOiAnYWNyZC1zaG93J30+PGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz48L3NwYW4+PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYWNyZC1zdWItY29udGVudCAke3NlbGYuc3RhdGUudGFic1ZhbHVlLmluZGV4T2YoJ3Rlc3RfaW5jbHVkZV8nICsgcmVzcF90ZXN0X2lkKSA+IC0xID8gJ2hpZGUnIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXModGhpc19wYWNrYWdlX3dpbGxfaW5jbHVkZS50ZXN0cykubWFwKGZ1bmN0aW9uIChbaywgdGVzdF9pbmNsdWRlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2t9IGlkPXt0ZXN0X2luY2x1ZGUuaWR9IGNsYXNzTmFtZT1cIm1iLXJtdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0c3Qtc3ViLWFjcmQtaGVhZGluZyBwYWRkaW5nLWJ0bi1hZGp1c3RcIiBvbkNsaWNrPXtzZWxmLkJ1dHRvbkhhbmRsZXIuYmluZChzZWxmLCAndGVzdF9pbmNsdWRlXycgKyB0ZXN0X2luY2x1ZGUuaWQpfT57YCR7dGVzdF9pbmNsdWRlLm5hbWV9ICAke3Rlc3RfaW5jbHVkZS5wYXJhbWV0ZXJzICYmIHRlc3RfaW5jbHVkZS5wYXJhbWV0ZXJzLmxlbmd0aCA+IDAgPyBgKCR7dGVzdF9pbmNsdWRlLnBhcmFtZXRlcnMubGVuZ3RofSlgOicnfWB9IHt0ZXN0X2luY2x1ZGUucGFyYW1ldGVycyAmJiB0ZXN0X2luY2x1ZGUucGFyYW1ldGVycy5sZW5ndGggPiAwID8gPHNwYW4gY2xhc3NOYW1lPXtzZWxmLnN0YXRlLnRhYnNWYWx1ZS5pbmRleE9mKCd0ZXN0X2luY2x1ZGVfJyArIHRlc3RfaW5jbHVkZS5pZCkgPiAtMSA/ICdhY3JkLXNob3cnIDogJ2FjcmQtYXJ3LXJvdGF0ZSd9PjxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+PC9zcGFuPiA6ICcnfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXN0X2luY2x1ZGUucGFyYW1ldGVycyAmJiB0ZXN0X2luY2x1ZGUucGFyYW1ldGVycy5sZW5ndGggPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3NlbGYuc3RhdGUudGFic1ZhbHVlLmluZGV4T2YoJ3Rlc3RfaW5jbHVkZV8nICsgdGVzdF9pbmNsdWRlLmlkKSA9PSAtMSA/ICdhY3JkLXN1Yi1jb250ZW50IGhpZGUnIDogJ2FjcmQtc3ViLWNvbnRlbnQnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXModGVzdF9pbmNsdWRlLnBhcmFtZXRlcnMpLm1hcChmdW5jdGlvbiAoW3BfaywgcGFyYW1ldGVyXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17cF9rfT57cGFyYW1ldGVyfSA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByZXBhcmF0aW9ucy52YWx1ZSAhPSAnJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdC1zdWItYWNjb3JkaW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhbmNob3ItbGlua1wiIGlkPVwidGVzdC1wcmVwYXJhdGlvbnNcIj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidHN0LXN1Yi1hY3JkLWhlYWRpbmdcIiBvbkNsaWNrPXtzZWxmLkJ1dHRvbkhhbmRsZXIuYmluZChzZWxmLCAndGVzdF9wcmVwYXJhdGlvbnNfJyArIHJlc3BfdGVzdF9pZCl9PntwcmVwYXJhdGlvbnMudGl0bGV9PHNwYW4gY2xhc3NOYW1lPXtzZWxmLnN0YXRlLnRhYnNWYWx1ZS5pbmRleE9mKCd0ZXN0X3ByZXBhcmF0aW9uc18nICsgcmVzcF90ZXN0X2lkKSA+IC0xID8gJ2FjcmQtYXJ3LXJvdGF0ZScgOiAnYWNyZC1zaG93J30+PGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz48L3NwYW4+PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYWNyZC1zdWItY29udGVudCAke3NlbGYuc3RhdGUudGFic1ZhbHVlLmluZGV4T2YoJ3Rlc3RfcHJlcGFyYXRpb25zXycgKyByZXNwX3Rlc3RfaWQpID4gLTEgPyAnaGlkZScgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcHJlcGFyYXRpb25zLnZhbHVlIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmYXFzLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3Qtc3ViLWFjY29yZGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYW5jaG9yLWxpbmtcIiBpZD1cInRlc3QtZmFxXCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRzdC1zdWItYWNyZC1oZWFkaW5nXCIgb25DbGljaz17c2VsZi5CdXR0b25IYW5kbGVyLmJpbmQoc2VsZiwgJ3Rlc3RfZmFxXycgKyByZXNwX3Rlc3RfaWQpfT57ZmFxc1swXS50aXRsZX0gPHNwYW4gY2xhc3NOYW1lPXtzZWxmLnN0YXRlLnRhYnNWYWx1ZS5pbmRleE9mKCd0ZXN0X2ZhcV8nICsgcmVzcF90ZXN0X2lkKSA+IC0xID8gJ2FjcmQtYXJ3LXJvdGF0ZScgOiAnYWNyZC1zaG93J30+PGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz48L3NwYW4+PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYWNyZC1zdWItY29udGVudCAke3NlbGYuc3RhdGUudGFic1ZhbHVlLmluZGV4T2YoJ3Rlc3RfZmFxXycgKyByZXNwX3Rlc3RfaWQpID4gLTEgPyAnaGlkZScgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmFxcy5sZW5ndGggPiAwID8gT2JqZWN0LmVudHJpZXMoZmFxcykubWFwKGZ1bmN0aW9uIChbaywgZmFxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2t9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+US57ZmFxLnZhbHVlLnRlc3RfcXVlc3Rpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2ZhcS52YWx1ZS50ZXN0X2Fuc3dlcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshcGFyc2VkLnRlc3RfaWRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICdhdXRvJywgbWFyZ2luQm90dG9tOiAnMTBweCcgfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qdGhpcy5wcm9wcy5wYWNrYWdlc0xpc3Q/dGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QuY291bnQ6JycqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYnMgJiYgbGFicy5jb3VudCA/IGxhYnMuY291bnQgOiAnMCd9IFJlc3VsdHMgZm91bmQgZm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0LWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTcwMFwiPiB7U2VhcmNoZWRDcml0ZXJhfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdC1zcGFuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93TG9jYXRpb25Qb3B1cCAmJiBmYWxzZSA/ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbG9jYXRpb25OYW1lID8gPHNwYW4gY2xhc3NOYW1lPVwibG9jYXRpb24tZWRpdFwiPntgIGluICR7bG9jYXRpb25OYW1lfWB9PC9zcGFuPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAxNSwgaGVpZ2h0OiAxNSwgbWFyZ2luTGVmdDogNywgY3Vyc29yOiAncG9pbnRlcicgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZWRpdC5zdmdcIn0gb25DbGljaz17dGhpcy5nb1RvTG9jYXRpb24uYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJzICYmIGxhYnMucmVzdWx0Lmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMobGFicy5yZXN1bHQpLm1hcChmdW5jdGlvbiAoW2ssIGxhYl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2t9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiUHJvZmlsZUNhcmQgey4uLnNlbGYucHJvcHN9IGRldGFpbHM9e2xhYn0ga2V5PXtrfSByYW5rPXtrfSBub0NsZWFyVGVzdD17dHJ1ZX0gaXNUZXN0SW5mbz17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJzICYmIGxhYnMuY291bnQgPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXJiLTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidmlld0FsbExhYlwiIG9uQ2xpY2s9e3RoaXMuc2VhcmNoUHJvY2VlZExBQi5iaW5kKHRoaXMsICcnKX0+IFZpZXcgYWxsIGxhYnM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YVswXS5mcmVxdWVudGx5X2Jvb2tlZF90b2dldGhlciAmJiB0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YVswXS5mcmVxdWVudGx5X2Jvb2tlZF90b2dldGhlci52YWx1ZS5sZW5ndGggPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTUgbXJuZy10b3AtMTIgbXJiLTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXN0LWR1by1oZWRpbmdcIj4ge3RoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhWzBdLmZyZXF1ZW50bHlfYm9va2VkX3RvZ2V0aGVyLnRpdGxlfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidGVzdC1kdW8tbGlzdGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YVswXS5mcmVxdWVudGx5X2Jvb2tlZF90b2dldGhlci52YWx1ZSkubWFwKGZ1bmN0aW9uIChbaywgZnJlcXVlbnRseV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2t9PjxwPntmcmVxdWVudGx5LmxhYl90ZXN0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtkaXNhYmxlQWRkVGVzdC5pbmRleE9mKGZyZXF1ZW50bHkuaWQpID4gLTEgPyAnZGlzYWJsZS1idG4nIDogJyd9IGlkPXtmcmVxdWVudGx5LmlkfSBvbkNsaWNrPXtzZWxmLmZyZXF1ZW50bHlBZGRUZXN0LmJpbmQoc2VsZiwgZnJlcXVlbnRseS5pZCwgZnJlcXVlbnRseS5sYWJfdGVzdCwgZnJlcXVlbnRseS5zaG93X2RldGFpbHMpfSBkaXNhYmxlZD17ZGlzYWJsZUFkZFRlc3QuaW5kZXhPZihmcmVxdWVudGx5LmlkKSA+IC0xID8gdHJ1ZSA6ICcnfT57ZGlzYWJsZUFkZFRlc3QuaW5kZXhPZihmcmVxdWVudGx5LmlkKSA+IC0xID8gJ1Rlc3QgQWRkZWQnIDogJ0FkZCBUZXN0J308L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZUF1dGhvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXthdXRob3IubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZUltYWdlPXthdXRob3IucHJvZmlsZV9pbWd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17YXV0aG9yLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2F1dGhvci5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlY2lhbGl0eT17YXV0aG9yLnNwZWNpYWxpdHlbMF0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZT17YXV0aG9yLmV4cGVyaWVuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1Ymxpc2hlZERhdGU9e3RoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhWzBdLnB1Ymxpc2hlZF9kYXRlIHx8IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXBhcnNlZC50ZXN0X2lkcyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb2NlZWRCb29rTm93LmJpbmQodGhpcywgJycpfSBjbGFzc05hbWU9XCJwLTMgdi1idG4gdi1idG4tcHJpbWFyeSBidG4tbGcgZml4ZWQgaG9yaXpvbnRhbCBib3R0b20gbm8tcm91bmQgdGV4dC1sZyBzdGlja3ktYnRuXCI+Qm9vayBOb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgc2VsZWN0ZWQtb3B0aW9uIHN0YXRpYy1idG4gYm9vay1yaWdodC1hbGlnbi10ZXh0XCIgc3R5bGU9e3sgdmVydGljYWxBbGlnbjogMiwgbWFyZ2luUmlnaHQ6IDggfX0+IHtgKCR7ZGlzYWJsZUFkZFRlc3QubGVuZ3RofSBTZWxlY3RlZClgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBjZW50ZXItY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0luZm8gJiYgdGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGEgJiYgdGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGEubGVuZ3RoID4gMCA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hhdFBhbmVsIG5vQ2hhdEJ1dHRvbj17dHJ1ZX0gc2VhcmNoVGVzdEluZm9EYXRhPXt0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YVswXX0gdXBkYXRlVGFic1ZhbHVlcz17dGhpcy51cGRhdGVUYWJzVmFsdWVzLmJpbmQodGhpcyl9IHJlc3BfdGVzdF9pZD17cmVzcF90ZXN0X2lkfSBtc2dUZW1wbGF0ZT1cImdvbGRfZ2VuZXJhbF90ZW1wbGF0ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8Q2hhdFBhbmVsIG5vQ2hhdEJ1dHRvbj17dHJ1ZX0gbXNnVGVtcGxhdGU9XCJnb2xkX2dlbmVyYWxfdGVtcGxhdGVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZhZGUtZW50ZXItZG9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIHNob3dTZWFyY2g9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBwYXJlbnQtc2VjdGlvbiBib29rLWFwcG9pbnRtZW50LXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03IGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtY2VudGVyIG1ydC0xMFwiIHN0eWxlPXt7IGZvbnRTaXplOiAxOCB9fT5ObyBSZWNvcmQgRm91bmQgISE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoYXRQYW5lbCBub0NoYXRCdXR0b249e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoVGVzdFZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgc2VhcmNoVGVzdERhdGEsIHNlbGVjdGVkQ3JpdGVyaWFzLCBzZWFyY2hUZXN0SW5mb0RhdGEsIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhLCBzZXRMYWJTZWFyY2hJZCwgY2xlYXJFeHRyYVRlc3RzLCBtZXJnZUxBQlN0YXRlLCBjbGVhckFsbFRlc3RzLCBzZWxlY3RMYWJUaW1lU0xvdCwgc2VsZWN0TGFiQXBwb2ludG1lbnRUeXBlLCBzZXRQYWNrYWdlSWQsIHBvc3RDb21tZW50IH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcblxuaW1wb3J0IFNlYXJjaFRlc3RWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9zZWFyY2gvc2VhcmNoVGVzdEluZm8uanMnXG5cbmNsYXNzIHNlYXJjaFRlc3RJbmZvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkRGF0YShzdG9yZSwgbWF0Y2gsIHF1ZXJ5KSB7XG4gICAgICAgIGxldCBzZW9fdXJsID0gXCJcIlxuICAgICAgICBsZXQgc2VhcmNoQnlJZCA9IG1hdGNoLnVybC5pbmNsdWRlcyhcInNlYXJjaC90ZXN0aW5mb1wiKVxuXG4gICAgICAgIGlmICghc2VhcmNoQnlJZCkge1xuICAgICAgICAgICAgc2VvX3VybCA9IG1hdGNoLnVybC5zcGxpdChcIi9cIilbMV1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChzZWFyY2hUZXN0RGF0YShxdWVyeS50ZXN0X2lkcyB8fCAnJywgc2VvX3VybCwgcXVlcnkubGFiX2lkIHx8ICcnLCB7fSwgZmFsc2UsIChkYXRhKSA9PiB7IC8vIGdldCBzZWxlY3RlZCB0ZXN0L3BhY2thZ2UgZGV0YWlsc1xuICAgICAgICAgICAgICAgIHJlc29sdmUoe30pXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U2VhcmNoVGVzdFZpZXcgey4uLnRoaXMucHJvcHN9IGhpZGVIZWFkZXJPbk1vYmlsZT17dHJ1ZX0gLz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgbGV0IHsgc2VsZWN0ZWRDcml0ZXJpYXMsIHNlYXJjaFRlc3RJbmZvRGF0YSwgc2VhcmNoX2lkX2RhdGEsIHNlbGVjdGVkTG9jYXRpb24sIGxvY2F0aW9uVHlwZSwgY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzLCBmaWx0ZXJDcml0ZXJpYSB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX0xBQlNcbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RlZENyaXRlcmlhcywgc2VhcmNoVGVzdEluZm9EYXRhLCBzZWFyY2hfaWRfZGF0YSwgc2VsZWN0ZWRMb2NhdGlvbiwgbG9jYXRpb25UeXBlLCBjdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMsIGZpbHRlckNyaXRlcmlhXG4gICAgfVxuXG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHNlYXJjaFRlc3REYXRhOiAodGVzdF9pZHMsIHRlc3RfdXJsLCBsYWJfaWQsIHN0YXRlLCBub19sYWJzLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2goc2VhcmNoVGVzdERhdGEodGVzdF9pZHMsIHRlc3RfdXJsLCBsYWJfaWQsIHN0YXRlLCBub19sYWJzLCBjYWxsYmFjaykpLFxuICAgICAgICBjbGVhckV4dHJhVGVzdHM6ICgpID0+IGRpc3BhdGNoKGNsZWFyRXh0cmFUZXN0cygpKSxcbiAgICAgICAgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWE6ICh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQpID0+IGRpc3BhdGNoKHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCkpLFxuICAgICAgICBzZXRMYWJTZWFyY2hJZDogKHNlYXJjaElkLCBmaWx0ZXJzLCBzZXREZWZhdWx0KSA9PiBkaXNwYXRjaChzZXRMYWJTZWFyY2hJZChzZWFyY2hJZCwgZmlsdGVycywgc2V0RGVmYXVsdCkpLFxuICAgICAgICBtZXJnZUxBQlN0YXRlOiAoc3RhdGUsIGZldGNoTmV3UmVzdWx0cykgPT4gZGlzcGF0Y2gobWVyZ2VMQUJTdGF0ZShzdGF0ZSwgZmV0Y2hOZXdSZXN1bHRzKSksXG4gICAgICAgIGNsZWFyQWxsVGVzdHM6ICgpID0+IGRpc3BhdGNoKGNsZWFyQWxsVGVzdHMoKSksXG4gICAgICAgIHNlbGVjdExhYlRpbWVTTG90OiAoc2xvdCwgcmVzY2hlZHVsZSkgPT4gZGlzcGF0Y2goc2VsZWN0TGFiVGltZVNMb3Qoc2xvdCwgcmVzY2hlZHVsZSkpLFxuICAgICAgICBzZWxlY3RMYWJBcHBvaW50bWVudFR5cGU6ICh0eXBlKSA9PiBkaXNwYXRjaChzZWxlY3RMYWJBcHBvaW50bWVudFR5cGUodHlwZSkpLFxuICAgICAgICBzZXRQYWNrYWdlSWQ6IChwYWNrYWdlX2lkLCBpc0hvbWVQYWdlKSA9PiBkaXNwYXRjaChzZXRQYWNrYWdlSWQocGFja2FnZV9pZCwgaXNIb21lUGFnZSkpLFxuICAgICAgICBwb3N0Q29tbWVudDogKGNvbW1lbnQsIGNiKSA9PiBkaXNwYXRjaChwb3N0Q29tbWVudChjb21tZW50LCBjYikpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKHNlYXJjaFRlc3RJbmZvKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZE9wZW5CYW5uZXIobGFiX3RpbWluZywgbGFiX3RpbWluZ19kYXRhID0gW10sIG5leHRfbGFiX3RpbWluZywgbmV4dF9sYWJfdGltaW5nX2RhdGEgPSBudWxsKSB7XG4gICAgbGV0IGlzX29wZW5fbm93ID0gZmFsc2VcbiAgICBsZXQgb3Blbl9uZXh0X3RvZGF5ID0gZmFsc2VcblxuICAgIGxldCB0aW1lX25vdyA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKSArIDAuNVxuICAgIGZvciAobGV0IGx0ZCBvZiBsYWJfdGltaW5nX2RhdGEpIHtcbiAgICAgICAgaWYgKHRpbWVfbm93IDw9IGx0ZC5lbmQgJiYgdGltZV9ub3cgPj0gbHRkLnN0YXJ0KSB7XG4gICAgICAgICAgICBpc19vcGVuX25vdyA9IHRydWVcbiAgICAgICAgICAgIHJldHVybiA8cCBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0gPntsYWJfdGltaW5nfTwvcD5cbiAgICAgICAgfVxuICAgICAgICBpZiAodGltZV9ub3cgPCBsdGQuc3RhcnQpIHtcbiAgICAgICAgICAgIG9wZW5fbmV4dF90b2RheSA9IGx0ZC5zdGFydFxuICAgICAgICAgICAgb3Blbl9uZXh0X3RvZGF5ID0gX2RlY2ltYWxUb1RpbWUob3Blbl9uZXh0X3RvZGF5KVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcGVuX25leHRfdG9kYXkpIHtcbiAgICAgICAgcmV0dXJuIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAxMiB9fSA+T3BlbnMgbmV4dCBhdCB7b3Blbl9uZXh0X3RvZGF5fSwgdG9kYXk8L3A+XG4gICAgfVxuXG4gICAgY29uc3QgV0VFS19EQVlTID0gWydNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5JywgJ1N1bmRheSddXG4gICAgbGV0IG5leHRfb3BlbiA9IGZhbHNlXG4gICAgbGV0IG5leHRfb3Blbl90b2RheSA9IFwiXCJcbiAgICBpZiAobmV4dF9sYWJfdGltaW5nX2RhdGEpIHtcbiAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKVxuICAgICAgICBsZXQgd2Vla0RheU51bWJlciA9IHRvZGF5LmdldERheSgpXG4gICAgICAgIHdlZWtEYXlOdW1iZXIgPSB3ZWVrRGF5TnVtYmVyID09IDAgPyA2IDogd2Vla0RheU51bWJlciAtIDFcbiAgICAgICAgZm9yIChsZXQgaSBpbiBuZXh0X2xhYl90aW1pbmdfZGF0YSkge1xuICAgICAgICAgICAgbmV4dF9vcGVuID0gbmV4dF9sYWJfdGltaW5nX2RhdGFbaV1bMF0uc3RhcnRcbiAgICAgICAgICAgIG5leHRfb3BlbiA9IF9kZWNpbWFsVG9UaW1lKG5leHRfb3BlbilcbiAgICAgICAgICAgIGlmIChpIC0gd2Vla0RheU51bWJlciA9PSAxKSB7XG4gICAgICAgICAgICAgICAgbmV4dF9vcGVuX3RvZGF5ID0gJ3RvbW9ycm93J1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXh0X29wZW5fdG9kYXkgPSBXRUVLX0RBWVNbaV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG5leHRfb3BlbiAmJiBuZXh0X29wZW5fdG9kYXkpIHtcbiAgICAgICAgcmV0dXJuIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAxMiB9fSA+T3BlbnMgbmV4dCBhdCB7bmV4dF9vcGVufSwge25leHRfb3Blbl90b2RheX08L3A+XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiQ2xvc2VkXCJcblxufVxuXG5cbmZ1bmN0aW9uIF9kZWNpbWFsVG9UaW1lKHRpbWUpIHtcbiAgICB0aW1lID0gdGltZS50b1N0cmluZygpXG4gICAgbGV0IGhvdXJzID0gdGltZS5zcGxpdCgnLicpWzBdXG4gICAgbGV0IG1pbnV0ZXMgPSB0aW1lLnNwbGl0KCcuJylbMV1cbiAgICBob3VycyA9IHBhcnNlSW50KGhvdXJzKVxuICAgIGlmIChtaW51dGVzID09ICc1Jykge1xuICAgICAgICBtaW51dGVzID0gJzozMCdcbiAgICB9IGVsc2Uge1xuICAgICAgICBtaW51dGVzID0gXCJcIlxuICAgIH1cbiAgICBsZXQgZGF5X3RpbWUgPSBcIkFNXCJcbiAgICBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgICAgZGF5X3RpbWUgPSBcIlBNXCJcbiAgICB9XG4gICAgaG91cnMgPSBob3VycyAlIDEyXG4gICAgcmV0dXJuIGAke2hvdXJzfSR7bWludXRlc30gJHtkYXlfdGltZX1gXG59Il0sInNvdXJjZVJvb3QiOiIifQ==