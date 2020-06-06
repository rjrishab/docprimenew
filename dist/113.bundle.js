(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[113],{

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _initialsPicture = __webpack_require__(/*! ../initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArticleAuthor = function (_React$Component) {
	_inherits(ArticleAuthor, _React$Component);

	function ArticleAuthor(props) {
		_classCallCheck(this, ArticleAuthor);

		var _this = _possibleConstructorReturn(this, (ArticleAuthor.__proto__ || Object.getPrototypeOf(ArticleAuthor)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(ArticleAuthor, [{
		key: 'authorClick',
		value: function authorClick(e) {
			e.preventDefault();
			if (this.props.url) {
				this.props.history.push(this.props.url);
			} else {
				this.props.history.push('/opd/doctor/' + this.props.id);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'article-author-div mrb-20' },
				_react2.default.createElement(
					_initialsPicture2.default,
					{ className: 'initialsPicture-ds initialsPicture-author', name: this.props.name, has_image: !!this.props.profileImage },
					_react2.default.createElement('img', { className: 'fltr-usr-image img-round', style: { width: 60, height: 60, marginRight: 8, fontSize: 10 }, src: this.props.profileImage, alt: 'Dr. ' + this.props.name, title: 'Dr. ' + this.props.name })
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
							{ href: '/' + this.props.url, onClick: function onClick(e) {
									return _this2.authorClick(e);
								} },
							_react2.default.createElement(
								'h3',
								{ className: 'fw-500 text-primary' },
								'Dr. ' + this.props.name
							)
						) : _react2.default.createElement(
							'a',
							{ href: '/opd/doctor/' + this.props.id, onClick: function onClick(e) {
									return _this2.authorClick(e);
								} },
							_react2.default.createElement(
								'h3',
								{ className: 'fw-500 text-primary' },
								'Dr. ' + this.props.name
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
	}]);

	return ArticleAuthor;
}(_react2.default.Component);

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

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var SearchTestView = function (_React$Component) {
    _inherits(SearchTestView, _React$Component);

    function SearchTestView(props) {
        _classCallCheck(this, SearchTestView);

        var _this = _possibleConstructorReturn(this, (SearchTestView.__proto__ || Object.getPrototypeOf(SearchTestView)).call(this, props));

        var parsed = queryString.parse(_this.props.location.search);

        _this.state = {
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
            isSeo: !_this.props.location.pathname.includes("search/testinfo")
        };
        return _this;
    }

    _createClass(SearchTestView, [{
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
        key: 'updateTabsValues',
        value: function updateTabsValues(value) {
            var tabs = [].concat(this.state.tabsValue);
            if (tabs.indexOf(value) > -1) {
                tabs.splice(tabs.indexOf(value), 1);
            }
            this.setState({ tabsValue: tabs });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var url_string = window.location.href;
            var url = new URL(url_string);
            var test_id = url.searchParams.get("test_ids");
            var searchById = url_string.includes("search/testinfo");
            var selected_test_ids = url.searchParams.get("selected_test_ids") ? url.searchParams.get("selected_test_ids") : '';
            var last_page = url.searchParams.get("from");
            var search_id = url.searchParams.get("search_id");
            var lab_id = '';
            lab_id = url.searchParams.get("lab_id");
            var test_id_val = [];
            var allTest = [];
            var all_test_id = [];
            var ferq_heading = void 0;
            var url_test_ids = selected_test_ids.split(',');
            var test_url = "";
            {
                Object.entries(url_test_ids).map(function (_ref) {
                    var _ref2 = _slicedToArray(_ref, 2),
                        key = _ref2[0],
                        value = _ref2[1];

                    all_test_id.push(parseInt(value));
                });
            }
            var parsed = queryString.parse(this.props.location.search);
            var no_labs = false;
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
    }, {
        key: 'closeTestInfo',
        value: function closeTestInfo() {
            if (this.state.lastSource == 'search') {
                this.props.history.push('/search');
            } else {
                window.history.back();
            }
        }
    }, {
        key: 'frequentlyAddTest',
        value: function frequentlyAddTest(field, name, show_details, event) {
            // adding more test 
            var self = this;
            var url_string = window.location.href;
            var url = new URL(url_string);
            var lab_id = '';
            lab_id = url.searchParams.get("lab_id");
            var test = {};
            var added_test = [].concat(this.state.disableAddTest);
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
                var newTestData = {};
                newTestData.type = 'test';
                newTestData.name = '';
                newTestData.id = field;
                newTestData.show_details = show_details;
                var newSearchIdData = [];
                newSearchIdData = this.props.search_id_data[this.state.search_id].commonSelectedCriterias;
                newSearchIdData.push(newTestData);
                var filters = {};
                filters.commonSelectedCriterias = newSearchIdData;
                filters.filterCriteria = this.props.search_id_data[this.state.search_id].filterCriteria;
                self.props.setLabSearchId(this.state.search_id, filters, true);
            }
            if (this.state.lastSource == 'search' || !this.state.search_id) {
                self.props.toggleDiagnosisCriteria('test', test, false);
            }
        }
    }, {
        key: 'goToLocation',
        value: function goToLocation() {
            this.setState({
                searchCities: []
            });
            var location_url = '/locationsearch';
            var data = {
                'Category': 'ChangeLocationDoctorResultsPopUp', 'Action': 'change-location-doctor-results-PopUp', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'change-location-doctor-results-PopUp', 'url': window.location.pathname
            };
            _gtm2.default.sendEvent({ data: data });
            this.props.history.push(location_url);
        }
    }, {
        key: 'searchProceedLAB',
        value: function searchProceedLAB() {
            var lab_name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

            var test = {};
            var found = false;
            var selectedCriteria = [];
            var nextSelectedCriterias = [];
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
                            lab_name: lab_name
                        }),
                        nextFilterCriteria: _extends({}, this.props.filterCriteria, {
                            lab_name: lab_name
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
    }, {
        key: 'proceedBookNow',
        value: function proceedBookNow() {
            var _this2 = this;

            var lab_name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

            //book now 
            var test = {};
            var found = false;
            var selectedCriteria = [];
            var nextSelectedCriterias = this.props.selectedCriterias;
            if (this.props.searchTestInfoData && this.props.searchTestInfoData.length > 0) {
                if (this.props.searchTestInfoData[0].is_package) {
                    this.props.setPackageId(this.props.searchTestInfoData[0].id, false);
                    setTimeout(function () {
                        _this2.props.history.push('/searchpackages');
                    }, 100);
                } else {
                    // for lab only
                    test.id = this.props.searchTestInfoData[0].id;
                    test.name = this.props.searchTestInfoData[0].name;
                    test.show_details = this.props.searchTestInfoData[0].show_details;
                    test.url = this.props.searchTestInfoData[0].url;
                    test.type = 'test';
                    selectedCriteria = this.props.selectedCriterias;
                    selectedCriteria = selectedCriteria.filter(function (x) {
                        if (x.id == _this2.props.searchTestInfoData[0].id) {
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
                            lab_name: lab_name
                        }),
                        nextFilterCriteria: _extends({}, this.props.filterCriteria, {
                            lab_name: lab_name
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
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var parsed = queryString.parse(this.props.location.search);
            var selected_test_ids = parsed.selected_test_ids ? parsed.selected_test_ids : '';
            var url_test_ids = selected_test_ids.split(',');
            var disableAddTest = [].concat(this.state.disableAddTest);
            {
                Object.entries(url_test_ids).map(function (_ref3) {
                    var _ref4 = _slicedToArray(_ref3, 2),
                        key = _ref4[0],
                        value = _ref4[1];

                    disableAddTest.push(parseInt(value));
                });
            }
            var locationName = "";
            if (this.props.selectedLocation && this.props.selectedLocation.formatted_address) {
                locationName = this.props.selectedLocation.formatted_address;
            }

            if (this.props.seoData && this.props.seoData.location) {
                locationName = this.props.seoData.location;
            }

            var SearchedCritera = void 0;
            if (this.props.searchTestInfoData && this.props.searchTestInfoData.length > 0) {

                var showInfo = true;
                if (this.props.location.pathname.includes("search/testinfo")) {
                    if (this.props.searchTestInfoData[0].id != parsed.test_ids) {
                        showInfo = false;
                    }
                } else {
                    if (!this.props.location.pathname.includes(this.props.searchTestInfoData[0].url)) {
                        showInfo = false;
                    }
                }

                var labs = this.props.searchTestInfoData[0].labs;

                if (labs && labs.tests) {
                    SearchedCritera = labs.tests[0].name;
                }
                var self = this;
                var about_test = this.props.searchTestInfoData[0].about_test;
                var why_get_tested = this.props.searchTestInfoData[0].why_get_tested;
                var test_may_include = this.props.searchTestInfoData[0].test_may_include;
                var preparations = this.props.searchTestInfoData[0].preparations;
                var faqs = this.props.searchTestInfoData[0].faqs;
                var resp_test_id = this.props.searchTestInfoData[0].id;
                var canonicalUrl = '';
                var title = '';
                var description = '';
                var this_package_will_include = this.props.searchTestInfoData[0].this_package_will_include;
                if (this.props.searchTestInfoData[0].seo) {
                    canonicalUrl = this.props.searchTestInfoData[0].url;
                    title = this.props.searchTestInfoData[0].seo.title;
                    description = this.props.searchTestInfoData[0].seo.description;
                }
                var breadcrumbs = this.props.searchTestInfoData[0].breadcrumb;
                var author = this.props.searchTestInfoData[0].author || null;
                if (parsed.isCategory && parsed.isCategory == 'true' && document.getElementById('package-includes') && this_package_will_include && this_package_will_include.tests && this_package_will_include.tests.length > 0) {
                    setTimeout(function () {
                        window.scrollTo(0, document.getElementById('package-includes').offsetTop);
                    }, 200);
                }
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                            canonicalUrl: _config2.default.API_BASE_URL + '/' + canonicalUrl,
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
                                                        breadcrumbs.map(function (breadcrumb, index) {
                                                            return _react2.default.createElement(
                                                                'li',
                                                                { key: index, className: 'breadcrumb-list-item' },
                                                                _react2.default.createElement(
                                                                    'a',
                                                                    { href: breadcrumb.url, onClick: function onClick(e) {
                                                                            e.preventDefault();
                                                                            _this3.props.history.push('' + breadcrumb.url);
                                                                        } },
                                                                    _react2.default.createElement(
                                                                        'span',
                                                                        { className: index !== breadcrumbs.length - 1 ? 'fw-500 breadcrumb-title breadcrumb-colored-title' : 'fw-500 breadcrumb-title' },
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
                                                                    { className: 'tst-main-acrd-data ' + (self.state.tabsValue.indexOf('test_' + resp_test_id) > -1 ? 'hide' : '') },
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
                                                                            { className: 'acrd-sub-content ' + (self.state.tabsValue.indexOf('about_test_' + resp_test_id) > -1 ? 'hide' : '') },
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
                                                                            { className: 'acrd-sub-content ' + (self.state.tabsValue.indexOf('why_get_tested_' + resp_test_id) > -1 ? 'hide' : '') },
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
                                                                            { className: 'acrd-sub-content ' + (self.state.tabsValue.indexOf('test_include_' + resp_test_id) > -1 ? 'hide' : '') },
                                                                            _react2.default.createElement(
                                                                                'ul',
                                                                                null,
                                                                                Object.entries(test_may_include.value).map(function (_ref5) {
                                                                                    var _ref6 = _slicedToArray(_ref5, 2),
                                                                                        k = _ref6[0],
                                                                                        test_include = _ref6[1];

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
                                                                            { className: 'acrd-sub-content ' + (self.state.tabsValue.indexOf('test_include_' + resp_test_id) > -1 ? 'hide' : '') },
                                                                            _react2.default.createElement(
                                                                                'ul',
                                                                                null,
                                                                                Object.entries(this_package_will_include.tests).map(function (_ref7) {
                                                                                    var _ref8 = _slicedToArray(_ref7, 2),
                                                                                        k = _ref8[0],
                                                                                        test_include = _ref8[1];

                                                                                    return _react2.default.createElement(
                                                                                        'li',
                                                                                        { key: k, id: test_include.id, className: 'mb-rmv' },
                                                                                        _react2.default.createElement(
                                                                                            'div',
                                                                                            null,
                                                                                            _react2.default.createElement(
                                                                                                'h2',
                                                                                                { className: 'tst-sub-acrd-heading padding-btn-adjust', onClick: self.ButtonHandler.bind(self, 'test_include_' + test_include.id) },
                                                                                                test_include.name + '  ' + (test_include.parameters && test_include.parameters.length > 0 ? '(' + test_include.parameters.length + ')' : ''),
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
                                                                                            Object.entries(test_include.parameters).map(function (_ref9) {
                                                                                                var _ref10 = _slicedToArray(_ref9, 2),
                                                                                                    p_k = _ref10[0],
                                                                                                    parameter = _ref10[1];

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
                                                                            { className: 'acrd-sub-content ' + (self.state.tabsValue.indexOf('test_preparations_' + resp_test_id) > -1 ? 'hide' : '') },
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
                                                                            { className: 'acrd-sub-content ' + (self.state.tabsValue.indexOf('test_faq_' + resp_test_id) > -1 ? 'hide' : '') },
                                                                            faqs.length > 0 ? Object.entries(faqs).map(function (_ref11) {
                                                                                var _ref12 = _slicedToArray(_ref11, 2),
                                                                                    k = _ref12[0],
                                                                                    faq = _ref12[1];

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
                                                                    ' in ' + locationName
                                                                ) : '',
                                                                _react2.default.createElement('img', { style: { width: 15, height: 15, marginLeft: 7, cursor: 'pointer' }, src: "/assets" + "/img/customer-icons/edit.svg", onClick: this.goToLocation.bind(this) })
                                                            )
                                                        ),
                                                        labs && labs.result.length > 0 ? Object.entries(labs.result).map(function (_ref13) {
                                                            var _ref14 = _slicedToArray(_ref13, 2),
                                                                k = _ref14[0],
                                                                lab = _ref14[1];

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
                                                                Object.entries(this.props.searchTestInfoData[0].frequently_booked_together.value).map(function (_ref15) {
                                                                    var _ref16 = _slicedToArray(_ref15, 2),
                                                                        k = _ref16[0],
                                                                        frequently = _ref16[1];

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
                                                    '(' + disableAddTest.length + ' Selected)'
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
    }]);

    return SearchTestView;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _searchTestInfo = __webpack_require__(/*! ../../components/commons/search/searchTestInfo.js */ "./dev/js/components/commons/search/searchTestInfo.js");

var _searchTestInfo2 = _interopRequireDefault(_searchTestInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var searchTestInfo = function (_React$Component) {
    _inherits(searchTestInfo, _React$Component);

    function searchTestInfo(props) {
        _classCallCheck(this, searchTestInfo);

        return _possibleConstructorReturn(this, (searchTestInfo.__proto__ || Object.getPrototypeOf(searchTestInfo)).call(this, props));
    }

    _createClass(searchTestInfo, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (window) {
                window.scrollTo(0, 0);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_searchTestInfo2.default, _extends({}, this.props, { hideHeaderOnMobile: true }));
        }
    }], [{
        key: 'loadData',
        value: function loadData(store, match, query) {
            var seo_url = "";
            var searchById = match.url.includes("search/testinfo");

            if (!searchById) {
                seo_url = match.url.split("/")[1];
            }

            return new Promise(function (resolve, reject) {
                store.dispatch((0, _index.searchTestData)(query.test_ids || '', seo_url, query.lab_id || '', {}, false, function (data) {
                    // get selected test/package details
                    resolve({});
                }));
            });
        }
    }]);

    return searchTestInfo;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    var _state$SEARCH_CRITERI = state.SEARCH_CRITERIA_LABS,
        selectedCriterias = _state$SEARCH_CRITERI.selectedCriterias,
        searchTestInfoData = _state$SEARCH_CRITERI.searchTestInfoData,
        search_id_data = _state$SEARCH_CRITERI.search_id_data,
        selectedLocation = _state$SEARCH_CRITERI.selectedLocation,
        locationType = _state$SEARCH_CRITERI.locationType,
        currentSearchedCriterias = _state$SEARCH_CRITERI.currentSearchedCriterias,
        filterCriteria = _state$SEARCH_CRITERI.filterCriteria;

    return {
        selectedCriterias: selectedCriterias, searchTestInfoData: searchTestInfoData, search_id_data: search_id_data, selectedLocation: selectedLocation, locationType: locationType, currentSearchedCriterias: currentSearchedCriterias, filterCriteria: filterCriteria
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        searchTestData: function searchTestData(test_ids, test_url, lab_id, state, no_labs, callback) {
            return dispatch((0, _index.searchTestData)(test_ids, test_url, lab_id, state, no_labs, callback));
        },
        clearExtraTests: function clearExtraTests() {
            return dispatch((0, _index.clearExtraTests)());
        },
        toggleDiagnosisCriteria: function toggleDiagnosisCriteria(type, criteria, forceAdd) {
            return dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd));
        },
        setLabSearchId: function setLabSearchId(searchId, filters, setDefault) {
            return dispatch((0, _index.setLabSearchId)(searchId, filters, setDefault));
        },
        mergeLABState: function mergeLABState(state, fetchNewResults) {
            return dispatch((0, _index.mergeLABState)(state, fetchNewResults));
        },
        clearAllTests: function clearAllTests() {
            return dispatch((0, _index.clearAllTests)());
        },
        selectLabTimeSLot: function selectLabTimeSLot(slot, reschedule) {
            return dispatch((0, _index.selectLabTimeSLot)(slot, reschedule));
        },
        selectLabAppointmentType: function selectLabAppointmentType(type) {
            return dispatch((0, _index.selectLabAppointmentType)(type));
        },
        setPackageId: function setPackageId(package_id, isHomePage) {
            return dispatch((0, _index.setPackageId)(package_id, isHomePage));
        },
        postComment: function postComment(comment, cb) {
            return dispatch((0, _index.postComment)(comment, cb));
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2FydGljbGVBdXRob3IvYXJ0aWNsZUF1dGhvci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3NlYXJjaC9zZWFyY2hUZXN0SW5mby5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9jb21tb25zL3NlYXJjaFRlc3RJbmZvLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9oZWxwZXJzL3V0aWxzLmpzIl0sIm5hbWVzIjpbIkFydGljbGVBdXRob3IiLCJwcm9wcyIsInN0YXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidXJsIiwiaGlzdG9yeSIsInB1c2giLCJpZCIsIm5hbWUiLCJwcm9maWxlSW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpblJpZ2h0IiwiZm9udFNpemUiLCJtYXJnaW4iLCJhdXRob3JDbGljayIsInNwZWNpYWxpdHkiLCJleHBlcmllbmNlIiwicHVibGlzaGVkRGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiU2VhcmNoVGVzdFZpZXciLCJwYXJzZWQiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwidGFic1ZhbHVlIiwibGFzdFNvdXJjZSIsImFsbEZyZXF1ZW50bHlUZXN0IiwibGFiX2lkIiwiZnJlcXVlbnRseV9oZWFkaW5nIiwiZGlzYWJsZUFkZFRlc3QiLCJzZWFyY2hfaWQiLCJzZWFyY2hDaXRpZXMiLCJzaG93TG9jYXRpb25Qb3B1cCIsInNob3dQb3B1cENvbnRhaW5lciIsIm92ZXJsYXlWaXNpYmxlIiwiaXNTZW8iLCJwYXRobmFtZSIsImluY2x1ZGVzIiwiZmllbGQiLCJldmVudCIsInRhYnMiLCJjb25jYXQiLCJzZWxmIiwiZm91bmQiLCJmaWx0ZXIiLCJ4Iiwic2V0U3RhdGUiLCJ2YWx1ZSIsImluZGV4T2YiLCJzcGxpY2UiLCJ1cmxfc3RyaW5nIiwid2luZG93IiwiaHJlZiIsIlVSTCIsInRlc3RfaWQiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJzZWFyY2hCeUlkIiwic2VsZWN0ZWRfdGVzdF9pZHMiLCJsYXN0X3BhZ2UiLCJ0ZXN0X2lkX3ZhbCIsImFsbFRlc3QiLCJhbGxfdGVzdF9pZCIsImZlcnFfaGVhZGluZyIsInVybF90ZXN0X2lkcyIsInNwbGl0IiwidGVzdF91cmwiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwia2V5IiwicGFyc2VJbnQiLCJub19sYWJzIiwidGVzdF9pZHMiLCJtYXRjaCIsInNlYXJjaFRlc3REYXRhIiwiYmFjayIsInNob3dfZGV0YWlscyIsInRlc3QiLCJhZGRlZF90ZXN0IiwiZXh0cmFfdGVzdCIsInR5cGUiLCJoaWRlX3ByaWNlIiwibmV3VGVzdERhdGEiLCJuZXdTZWFyY2hJZERhdGEiLCJzZWFyY2hfaWRfZGF0YSIsImNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzIiwiZmlsdGVycyIsImZpbHRlckNyaXRlcmlhIiwic2V0TGFiU2VhcmNoSWQiLCJ0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSIsImxvY2F0aW9uX3VybCIsImRhdGEiLCJHVE0iLCJnZXRVc2VySWQiLCJzZW5kRXZlbnQiLCJsYWJfbmFtZSIsInNlbGVjdGVkQ3JpdGVyaWEiLCJuZXh0U2VsZWN0ZWRDcml0ZXJpYXMiLCJzZWFyY2hUZXN0SW5mb0RhdGEiLCJsZW5ndGgiLCJpc19wYWNrYWdlIiwiY2xlYXJBbGxUZXN0cyIsIm1lcmdlTEFCU3RhdGUiLCJuZXh0RmlsdGVyQ3JpdGVyaWEiLCJjdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMiLCJzZWFyY2hfYmFjayIsInNlbGVjdGVkQ3JpdGVyaWFzIiwic2V0UGFja2FnZUlkIiwic2V0VGltZW91dCIsImxvY2F0aW9uTmFtZSIsInNlbGVjdGVkTG9jYXRpb24iLCJmb3JtYXR0ZWRfYWRkcmVzcyIsInNlb0RhdGEiLCJTZWFyY2hlZENyaXRlcmEiLCJzaG93SW5mbyIsImxhYnMiLCJ0ZXN0cyIsImFib3V0X3Rlc3QiLCJ3aHlfZ2V0X3Rlc3RlZCIsInRlc3RfbWF5X2luY2x1ZGUiLCJwcmVwYXJhdGlvbnMiLCJmYXFzIiwicmVzcF90ZXN0X2lkIiwiY2Fub25pY2FsVXJsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRoaXNfcGFja2FnZV93aWxsX2luY2x1ZGUiLCJzZW8iLCJicmVhZGNydW1icyIsImJyZWFkY3J1bWIiLCJhdXRob3IiLCJpc0NhdGVnb3J5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbFRvIiwib2Zmc2V0VG9wIiwiQ09ORklHIiwiQVBJX0JBU0VfVVJMIiwiaGlkZUhlYWRlck9uTW9iaWxlIiwiQVNTRVRTX0JBU0VfVVJMIiwiY2xvc2VUZXN0SW5mbyIsImJpbmQiLCJ3b3JkQnJlYWsiLCJpbmRleCIsInVwZGF0ZVRhYnNWYWx1ZXMiLCJCdXR0b25IYW5kbGVyIiwiX19odG1sIiwiayIsInRlc3RfaW5jbHVkZSIsInBhcmFtZXRlcnMiLCJwX2siLCJwYXJhbWV0ZXIiLCJmYXEiLCJ0ZXN0X3F1ZXN0aW9uIiwidGVzdF9hbnN3ZXIiLCJtYXJnaW5Cb3R0b20iLCJjb3VudCIsIm1hcmdpbkxlZnQiLCJjdXJzb3IiLCJnb1RvTG9jYXRpb24iLCJyZXN1bHQiLCJsYWIiLCJzZWFyY2hQcm9jZWVkTEFCIiwiZnJlcXVlbnRseV9ib29rZWRfdG9nZXRoZXIiLCJmcmVxdWVudGx5IiwibGFiX3Rlc3QiLCJmcmVxdWVudGx5QWRkVGVzdCIsInByb2ZpbGVfaW1nIiwicHVibGlzaGVkX2RhdGUiLCJwcm9jZWVkQm9va05vdyIsInZlcnRpY2FsQWxpZ24iLCJzZWFyY2hUZXN0SW5mbyIsInN0b3JlIiwicXVlcnkiLCJzZW9fdXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJkaXNwYXRjaCIsIm1hcFN0YXRlVG9Qcm9wcyIsIlNFQVJDSF9DUklURVJJQV9MQUJTIiwibG9jYXRpb25UeXBlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY2FsbGJhY2siLCJjbGVhckV4dHJhVGVzdHMiLCJjcml0ZXJpYSIsImZvcmNlQWRkIiwic2VhcmNoSWQiLCJzZXREZWZhdWx0IiwiZmV0Y2hOZXdSZXN1bHRzIiwic2VsZWN0TGFiVGltZVNMb3QiLCJzbG90IiwicmVzY2hlZHVsZSIsInNlbGVjdExhYkFwcG9pbnRtZW50VHlwZSIsInBhY2thZ2VfaWQiLCJpc0hvbWVQYWdlIiwicG9zdENvbW1lbnQiLCJjb21tZW50IiwiY2IiLCJidWlsZE9wZW5CYW5uZXIiLCJsYWJfdGltaW5nIiwibGFiX3RpbWluZ19kYXRhIiwibmV4dF9sYWJfdGltaW5nIiwibmV4dF9sYWJfdGltaW5nX2RhdGEiLCJpc19vcGVuX25vdyIsIm9wZW5fbmV4dF90b2RheSIsInRpbWVfbm93IiwiRGF0ZSIsImdldEhvdXJzIiwibHRkIiwiZW5kIiwic3RhcnQiLCJfZGVjaW1hbFRvVGltZSIsIldFRUtfREFZUyIsIm5leHRfb3BlbiIsIm5leHRfb3Blbl90b2RheSIsInRvZGF5Iiwid2Vla0RheU51bWJlciIsImdldERheSIsImkiLCJ0aW1lIiwidG9TdHJpbmciLCJob3VycyIsIm1pbnV0ZXMiLCJkYXlfdGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLGE7OztBQUNMLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEhBQ1pBLEtBRFk7O0FBRWxCLFFBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRmtCO0FBS2xCOzs7OzhCQUVXQyxDLEVBQUc7QUFDZEEsS0FBRUMsY0FBRjtBQUNBLE9BQUksS0FBS0gsS0FBTCxDQUFXSSxHQUFmLEVBQW9CO0FBQ25CLFNBQUtKLEtBQUwsQ0FBV0ssT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0IsS0FBS04sS0FBTCxDQUFXSSxHQUFuQztBQUNBLElBRkQsTUFFTztBQUNOLFNBQUtKLEtBQUwsQ0FBV0ssT0FBWCxDQUFtQkMsSUFBbkIsa0JBQXVDLEtBQUtOLEtBQUwsQ0FBV08sRUFBbEQ7QUFDQTtBQUNEOzs7MkJBRVE7QUFB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QUFBNEM4TSxxQkFBNUM7QUFBQTtBQUF5REM7QUFBekQsU0FBUDtBQUNIOztBQUVELFdBQU8sUUFBUDtBQUVIOztBQUdELFNBQVNILGNBQVQsQ0FBd0JRLElBQXhCLEVBQThCO0FBQzFCQSxXQUFPQSxLQUFLQyxRQUFMLEVBQVA7QUFDQSxRQUFJQyxRQUFRRixLQUFLNUosS0FBTCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBWjtBQUNBLFFBQUkrSixVQUFVSCxLQUFLNUosS0FBTCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBZDtBQUNBOEosWUFBUXhKLFNBQVN3SixLQUFULENBQVI7QUFDQSxRQUFJQyxXQUFXLEdBQWYsRUFBb0I7QUFDaEJBLGtCQUFVLEtBQVY7QUFDSCxLQUZELE1BRU87QUFDSEEsa0JBQVUsRUFBVjtBQUNIO0FBQ0QsUUFBSUMsV0FBVyxJQUFmO0FBQ0EsUUFBSUYsU0FBUyxFQUFiLEVBQWlCO0FBQ2JFLG1CQUFXLElBQVg7QUFDSDtBQUNERixZQUFRQSxRQUFRLEVBQWhCO0FBQ0EsZ0JBQVVBLEtBQVYsR0FBa0JDLE9BQWxCLFNBQTZCQyxRQUE3QjtBQUNILEMiLCJmaWxlIjoiMTEzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5pdGlhbHNQaWN0dXJlIGZyb20gJy4uL2luaXRpYWxzUGljdHVyZSc7XG5cbmNsYXNzIEFydGljbGVBdXRob3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cblx0XHR9XG5cdH1cblxuXHRhdXRob3JDbGljayhlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0aWYgKHRoaXMucHJvcHMudXJsKSB7XG5cdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCh0aGlzLnByb3BzLnVybClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9vcGQvZG9jdG9yLyR7dGhpcy5wcm9wcy5pZH1gKVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLWF1dGhvci1kaXYgbXJiLTIwXCI+XG5cdFx0XHRcdDxJbml0aWFsc1BpY3R1cmUgY2xhc3NOYW1lPVwiaW5pdGlhbHNQaWN0dXJlLWRzIGluaXRpYWxzUGljdHVyZS1hdXRob3JcIiBuYW1lPXt0aGlzLnByb3BzLm5hbWV9IGhhc19pbWFnZT17ISF0aGlzLnByb3BzLnByb2ZpbGVJbWFnZX0gPlxuXHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiZmx0ci11c3ItaW1hZ2UgaW1nLXJvdW5kXCIgc3R5bGU9e3sgd2lkdGg6IDYwLCBoZWlnaHQ6IDYwLCBtYXJnaW5SaWdodDogOCwgZm9udFNpemU6IDEwIH19IHNyYz17dGhpcy5wcm9wcy5wcm9maWxlSW1hZ2V9IGFsdD17YERyLiAke3RoaXMucHJvcHMubmFtZX1gfSB0aXRsZT17YERyLiAke3RoaXMucHJvcHMubmFtZX1gfSAvPlxuXHRcdFx0XHQ8L0luaXRpYWxzUGljdHVyZT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhdXRob3ItZHRsc1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXV0aG9yLW5hbWUtZGl2XCI+XG5cdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyBtYXJnaW46ICcwIDZweCAwIDAnIH19PldyaXR0ZW4gQnkgOjwvc3Bhbj5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy51cmwgP1xuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2AvJHt0aGlzLnByb3BzLnVybH1gfSBvbkNsaWNrPXsoZSkgPT4gdGhpcy5hdXRob3JDbGljayhlKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtcHJpbWFyeVwiPntgRHIuICR7dGhpcy5wcm9wcy5uYW1lfWB9PC9oMz5cblx0XHRcdFx0XHRcdFx0XHQ8L2E+IDpcblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtgL29wZC9kb2N0b3IvJHt0aGlzLnByb3BzLmlkfWB9IG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmF1dGhvckNsaWNrKGUpfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1wcmltYXJ5XCI+e2BEci4gJHt0aGlzLnByb3BzLm5hbWV9YH08L2gzPlxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF1dGhvci1leHAtZGl2XCI+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57dGhpcy5wcm9wcy5zcGVjaWFsaXR5fSB8IHt0aGlzLnByb3BzLmV4cGVyaWVuY2V9IHllYXJzIG9mIGV4cGVyaWVuY2U8L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5wdWJsaXNoZWREYXRlID9cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLWRhdGVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5QdWJsaXNoZWQgRGF0ZSA6IHt0aGlzLnByb3BzLnB1Ymxpc2hlZERhdGV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj4gOiAnJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZUF1dGhvciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IENoYXRQYW5lbCBmcm9tICcuLi9DaGF0UGFuZWwnXG5pbXBvcnQgTG9jYXRpb25FbGVtZW50cyBmcm9tICcuLi8uLi8uLi9jb250YWluZXJzL2NvbW1vbnMvbG9jYXRpb25FbGVtZW50cydcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgTG9jYXRpb25Qb3B1cCBmcm9tICcuLi8uLi8uLi9jb250YWluZXJzL2NvbW1vbnMvbG9jYXRpb25Qb3B1cCdcbmltcG9ydCBMYWJQcm9maWxlQ2FyZCBmcm9tICcuLi8uLi9kaWFnbm9zaXMvY29tbW9ucy9sYWJQcm9maWxlQ2FyZC9MYWJQcm9maWxlQ2FyZC5qcydcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9Mb2FkZXInXG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi8uLi9jb21tb25zL0hlbG1ldFRhZ3MnXG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uLy4uL2NvbmZpZydcbmltcG9ydCBBcnRpY2xlQXV0aG9yIGZyb20gJy4uL2FydGljbGVBdXRob3IvYXJ0aWNsZUF1dGhvcic7XG5pbXBvcnQgVGFibGVPZkNvbnRlbnQgZnJvbSAnLi4vYXJ0aWNsZS9UYWJsZU9mQ29udGVudCdcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cblxuY2xhc3MgU2VhcmNoVGVzdFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0YWJzVmFsdWU6IFtdLFxuICAgICAgICAgICAgbGFzdFNvdXJjZTogJycsXG4gICAgICAgICAgICBhbGxGcmVxdWVudGx5VGVzdDogW10sXG4gICAgICAgICAgICBsYWJfaWQ6ICcnLFxuICAgICAgICAgICAgZnJlcXVlbnRseV9oZWFkaW5nOiAnJyxcbiAgICAgICAgICAgIGRpc2FibGVBZGRUZXN0OiBbXSxcbiAgICAgICAgICAgIHNlYXJjaF9pZDogJycsXG4gICAgICAgICAgICBzZWFyY2hDaXRpZXM6IFtdLFxuICAgICAgICAgICAgc2hvd0xvY2F0aW9uUG9wdXA6IHRydWUsXG4gICAgICAgICAgICBzaG93UG9wdXBDb250YWluZXI6IHRydWUsXG4gICAgICAgICAgICBvdmVybGF5VmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGlzU2VvOiAhdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcInNlYXJjaC90ZXN0aW5mb1wiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQnV0dG9uSGFuZGxlcihmaWVsZCwgZXZlbnQpIHtcbiAgICAgICAgbGV0IHRhYnMgPSBbXS5jb25jYXQodGhpcy5zdGF0ZS50YWJzVmFsdWUpXG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBsZXQgZm91bmQgPSBmYWxzZVxuICAgICAgICB0YWJzID0gdGFicy5maWx0ZXIoKHgpID0+IHtcbiAgICAgICAgICAgIGlmICh4ID09IGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICB0YWJzLnB1c2goZmllbGQpXG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLnNldFN0YXRlKHsgdGFic1ZhbHVlOiB0YWJzIH0pXG4gICAgfVxuXG4gICAgdXBkYXRlVGFic1ZhbHVlcyh2YWx1ZSkge1xuICAgICAgICBsZXQgdGFicyA9IFtdLmNvbmNhdCh0aGlzLnN0YXRlLnRhYnNWYWx1ZSlcbiAgICAgICAgaWYgKHRhYnMuaW5kZXhPZih2YWx1ZSkgPiAtMSkge1xuICAgICAgICAgICAgdGFicy5zcGxpY2UoIHRhYnMuaW5kZXhPZih2YWx1ZSksIDEgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGFic1ZhbHVlOiB0YWJzIH0pXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHZhciB1cmxfc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgICAgICAgdmFyIHVybCA9IG5ldyBVUkwodXJsX3N0cmluZyk7XG4gICAgICAgIHZhciB0ZXN0X2lkID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ0ZXN0X2lkc1wiKVxuICAgICAgICBsZXQgc2VhcmNoQnlJZCA9IHVybF9zdHJpbmcuaW5jbHVkZXMoXCJzZWFyY2gvdGVzdGluZm9cIilcbiAgICAgICAgdmFyIHNlbGVjdGVkX3Rlc3RfaWRzID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJzZWxlY3RlZF90ZXN0X2lkc1wiKSA/IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwic2VsZWN0ZWRfdGVzdF9pZHNcIikgOiAnJ1xuICAgICAgICBsZXQgbGFzdF9wYWdlID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJmcm9tXCIpXG4gICAgICAgIGxldCBzZWFyY2hfaWQgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInNlYXJjaF9pZFwiKVxuICAgICAgICBsZXQgbGFiX2lkID0gJydcbiAgICAgICAgbGFiX2lkID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJsYWJfaWRcIilcbiAgICAgICAgbGV0IHRlc3RfaWRfdmFsID0gW11cbiAgICAgICAgbGV0IGFsbFRlc3QgPSBbXVxuICAgICAgICBsZXQgYWxsX3Rlc3RfaWQgPSBbXVxuICAgICAgICBsZXQgZmVycV9oZWFkaW5nXG4gICAgICAgIGxldCB1cmxfdGVzdF9pZHMgPSBzZWxlY3RlZF90ZXN0X2lkcy5zcGxpdCgnLCcpXG4gICAgICAgIGxldCB0ZXN0X3VybCA9IFwiXCJcbiAgICAgICAge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModXJsX3Rlc3RfaWRzKS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlXSkge1xuICAgICAgICAgICAgICAgIGFsbF90ZXN0X2lkLnB1c2gocGFyc2VJbnQodmFsdWUpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IG5vX2xhYnMgPSBmYWxzZVxuICAgICAgICBpZiAocGFyc2VkLnRlc3RfaWRzKSB7XG4gICAgICAgICAgICBub19sYWJzID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsYXN0U291cmNlOiBsYXN0X3BhZ2UsIHNlYXJjaF9pZDogc2VhcmNoX2lkIH0pXG5cbiAgICAgICAgaWYgKCF0ZXN0X2lkICYmIHNlYXJjaEJ5SWQpIHtcbiAgICAgICAgICAgIC8vICBUT0RPIC0gZGVmYXVsdFxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNlYXJjaEJ5SWQpIHtcbiAgICAgICAgICAgIHRlc3RfdXJsID0gdGhpcy5wcm9wcy5tYXRjaC51cmxcbiAgICAgICAgICAgIHRlc3RfdXJsID0gdGVzdF91cmwuc3BsaXQoXCIvXCIpWzFdXG4gICAgICAgICAgICB0ZXN0X2lkID0gJydcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvcHMuc2VhcmNoVGVzdERhdGEodGVzdF9pZCwgdGVzdF91cmwsIGxhYl9pZCwgdGhpcy5wcm9wcywgbm9fbGFicykgLy8gZ2V0IHNlbGVjdGVkIHRlc3QvcGFja2FnZSBkZXRhaWxzXG4gICAgfVxuXG5cbiAgICBjbG9zZVRlc3RJbmZvKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sYXN0U291cmNlID09ICdzZWFyY2gnKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3NlYXJjaCcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZyZXF1ZW50bHlBZGRUZXN0KGZpZWxkLCBuYW1lLCBzaG93X2RldGFpbHMsIGV2ZW50KSB7IFxuICAgICAgICAvLyBhZGRpbmcgbW9yZSB0ZXN0IFxuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgbGV0IHVybF9zdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZlxuICAgICAgICBsZXQgdXJsID0gbmV3IFVSTCh1cmxfc3RyaW5nKTtcbiAgICAgICAgbGV0IGxhYl9pZCA9ICcnXG4gICAgICAgIGxhYl9pZCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibGFiX2lkXCIpXG4gICAgICAgIGxldCB0ZXN0ID0ge31cbiAgICAgICAgbGV0IGFkZGVkX3Rlc3QgPSBbXS5jb25jYXQodGhpcy5zdGF0ZS5kaXNhYmxlQWRkVGVzdClcbiAgICAgICAgYWRkZWRfdGVzdC5wdXNoKGZpZWxkKVxuICAgICAgICBzZWxmLnNldFN0YXRlKHsgZGlzYWJsZUFkZFRlc3Q6IGFkZGVkX3Rlc3QgfSlcbiAgICAgICAgaWYgKGxhYl9pZCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0ZXN0LmxhYl9pZCA9IGxhYl9pZFxuICAgICAgICAgICAgdGVzdC5leHRyYV90ZXN0ID0gdHJ1ZVxuICAgICAgICAgICAgdGVzdC50eXBlID0gJ3Rlc3QnXG4gICAgICAgICAgICB0ZXN0Lm5hbWUgPSBuYW1lXG4gICAgICAgICAgICB0ZXN0LmlkID0gZmllbGRcbiAgICAgICAgICAgIHRlc3Quc2hvd19kZXRhaWxzID0gc2hvd19kZXRhaWxzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZXN0LnR5cGUgPSAndGVzdCdcbiAgICAgICAgICAgIHRlc3QubmFtZSA9IG5hbWVcbiAgICAgICAgICAgIHRlc3QuaWQgPSBmaWVsZFxuICAgICAgICAgICAgdGVzdC5zaG93X2RldGFpbHMgPSBzaG93X2RldGFpbHNcbiAgICAgICAgfVxuICAgICAgICB0ZXN0LmhpZGVfcHJpY2UgPSBmYWxzZVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNlYXJjaF9pZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IG5ld1Rlc3REYXRhID0ge31cbiAgICAgICAgICAgIG5ld1Rlc3REYXRhLnR5cGUgPSAndGVzdCdcbiAgICAgICAgICAgIG5ld1Rlc3REYXRhLm5hbWUgPSAnJ1xuICAgICAgICAgICAgbmV3VGVzdERhdGEuaWQgPSBmaWVsZFxuICAgICAgICAgICAgbmV3VGVzdERhdGEuc2hvd19kZXRhaWxzID0gc2hvd19kZXRhaWxzXG4gICAgICAgICAgICBsZXQgbmV3U2VhcmNoSWREYXRhID0gW11cbiAgICAgICAgICAgIG5ld1NlYXJjaElkRGF0YSA9IHRoaXMucHJvcHMuc2VhcmNoX2lkX2RhdGFbdGhpcy5zdGF0ZS5zZWFyY2hfaWRdLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzXG4gICAgICAgICAgICBuZXdTZWFyY2hJZERhdGEucHVzaChuZXdUZXN0RGF0YSlcbiAgICAgICAgICAgIGxldCBmaWx0ZXJzID0ge31cbiAgICAgICAgICAgIGZpbHRlcnMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMgPSBuZXdTZWFyY2hJZERhdGFcbiAgICAgICAgICAgIGZpbHRlcnMuZmlsdGVyQ3JpdGVyaWEgPSB0aGlzLnByb3BzLnNlYXJjaF9pZF9kYXRhW3RoaXMuc3RhdGUuc2VhcmNoX2lkXS5maWx0ZXJDcml0ZXJpYVxuICAgICAgICAgICAgc2VsZi5wcm9wcy5zZXRMYWJTZWFyY2hJZCh0aGlzLnN0YXRlLnNlYXJjaF9pZCwgZmlsdGVycywgdHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sYXN0U291cmNlID09ICdzZWFyY2gnIHx8ICF0aGlzLnN0YXRlLnNlYXJjaF9pZCkge1xuICAgICAgICAgICAgc2VsZi5wcm9wcy50b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSgndGVzdCcsIHRlc3QsIGZhbHNlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ29Ub0xvY2F0aW9uKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlYXJjaENpdGllczogW11cbiAgICAgICAgfSlcbiAgICAgICAgbGV0IGxvY2F0aW9uX3VybCA9ICcvbG9jYXRpb25zZWFyY2gnXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NoYW5nZUxvY2F0aW9uRG9jdG9yUmVzdWx0c1BvcFVwJywgJ0FjdGlvbic6ICdjaGFuZ2UtbG9jYXRpb24tZG9jdG9yLXJlc3VsdHMtUG9wVXAnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjaGFuZ2UtbG9jYXRpb24tZG9jdG9yLXJlc3VsdHMtUG9wVXAnLCAndXJsJzogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2gobG9jYXRpb25fdXJsKVxuICAgIH1cblxuICAgIHNlYXJjaFByb2NlZWRMQUIobGFiX25hbWUgPSBcIlwiKSB7XG4gICAgICAgIGxldCB0ZXN0ID0ge31cbiAgICAgICAgbGV0IGZvdW5kID0gZmFsc2VcbiAgICAgICAgbGV0IHNlbGVjdGVkQ3JpdGVyaWEgPSBbXVxuICAgICAgICBsZXQgbmV4dFNlbGVjdGVkQ3JpdGVyaWFzID0gW11cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhICYmIHRoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhWzBdLmlzX3BhY2thZ2Upe1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvc2VhcmNocGFja2FnZXMnKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGVzdC5pZCA9IHRoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhWzBdLmlkXG4gICAgICAgICAgICAgICAgdGVzdC5uYW1lID0gdGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGFbMF0ubmFtZVxuICAgICAgICAgICAgICAgIHRlc3Quc2hvd19kZXRhaWxzID0gdGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGFbMF0uc2hvd19kZXRhaWxzXG4gICAgICAgICAgICAgICAgdGVzdC51cmwgPSB0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YVswXS51cmxcbiAgICAgICAgICAgICAgICB0ZXN0LnR5cGUgPSAndGVzdCdcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsZWFyQWxsVGVzdHMoKVxuICAgICAgICAgICAgICAgIG5leHRTZWxlY3RlZENyaXRlcmlhcyA9IG5leHRTZWxlY3RlZENyaXRlcmlhcy5jb25jYXQodGVzdClcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKCd0ZXN0JywgdGVzdCwgZmFsc2UpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIGRvY3RvciBuYW1lLCBob3NwaXRhbCBuYW1lXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5tZXJnZUxBQlN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ3JpdGVyaWE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJfbmFtZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBuZXh0RmlsdGVyQ3JpdGVyaWE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJfbmFtZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2VhcmNoZWRDcml0ZXJpYXM6IG5leHRTZWxlY3RlZENyaXRlcmlhcyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dFNlbGVjdGVkQ3JpdGVyaWFzOiBuZXh0U2VsZWN0ZWRDcml0ZXJpYXNcbiAgICAgICAgICAgICAgICB9LCB0cnVlKVxuXG5cbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL2xhYi9zZWFyY2hyZXN1bHRzJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHsgc2VhcmNoX2JhY2s6IHRydWUgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9jZWVkQm9va05vdyhsYWJfbmFtZSA9IFwiXCIpIHtcbiAgICAgICAgLy9ib29rIG5vdyBcbiAgICAgICAgbGV0IHRlc3QgPSB7fVxuICAgICAgICBsZXQgZm91bmQgPSBmYWxzZVxuICAgICAgICBsZXQgc2VsZWN0ZWRDcml0ZXJpYSA9IFtdXG4gICAgICAgIGxldCBuZXh0U2VsZWN0ZWRDcml0ZXJpYXMgPSB0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YSAmJiB0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YVswXS5pc19wYWNrYWdlKXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldFBhY2thZ2VJZCh0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YVswXS5pZCwgZmFsc2UpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9zZWFyY2hwYWNrYWdlcycpXG4gICAgICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICAgICAgfWVsc2V7IC8vIGZvciBsYWIgb25seVxuICAgICAgICAgICAgICAgIHRlc3QuaWQgPSB0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YVswXS5pZFxuICAgICAgICAgICAgICAgIHRlc3QubmFtZSA9IHRoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhWzBdLm5hbWVcbiAgICAgICAgICAgICAgICB0ZXN0LnNob3dfZGV0YWlscyA9IHRoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhWzBdLnNob3dfZGV0YWlsc1xuICAgICAgICAgICAgICAgIHRlc3QudXJsID0gdGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGFbMF0udXJsXG4gICAgICAgICAgICAgICAgdGVzdC50eXBlID0gJ3Rlc3QnXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDcml0ZXJpYSA9IHRoaXMucHJvcHMuc2VsZWN0ZWRDcml0ZXJpYXNcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENyaXRlcmlhID0gc2VsZWN0ZWRDcml0ZXJpYS5maWx0ZXIoKHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHguaWQgPT0gdGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGFbMF0uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFNlbGVjdGVkQ3JpdGVyaWFzID0gbmV4dFNlbGVjdGVkQ3JpdGVyaWFzLmNvbmNhdCh0ZXN0KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKCd0ZXN0JywgdGVzdCwgZmFsc2UpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBkb2N0b3IgbmFtZSwgaG9zcGl0YWwgbmFtZVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubWVyZ2VMQUJTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLmZpbHRlckNyaXRlcmlhLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiX25hbWVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbmV4dEZpbHRlckNyaXRlcmlhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLmZpbHRlckNyaXRlcmlhLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiX25hbWVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzOiBuZXh0U2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgICAgICAgICAgICAgIG5leHRTZWxlY3RlZENyaXRlcmlhczogbmV4dFNlbGVjdGVkQ3JpdGVyaWFzXG4gICAgICAgICAgICAgICAgfSwgdHJ1ZSlcblxuXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9sYWIvc2VhcmNocmVzdWx0cycsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiB7IHNlYXJjaF9iYWNrOiB0cnVlIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgdmFyIHNlbGVjdGVkX3Rlc3RfaWRzID0gcGFyc2VkLnNlbGVjdGVkX3Rlc3RfaWRzID8gcGFyc2VkLnNlbGVjdGVkX3Rlc3RfaWRzIDogJydcbiAgICAgICAgbGV0IHVybF90ZXN0X2lkcyA9IHNlbGVjdGVkX3Rlc3RfaWRzLnNwbGl0KCcsJylcbiAgICAgICAgbGV0IGRpc2FibGVBZGRUZXN0ID0gW10uY29uY2F0KHRoaXMuc3RhdGUuZGlzYWJsZUFkZFRlc3QpXG4gICAgICAgIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHVybF90ZXN0X2lkcykubWFwKGZ1bmN0aW9uIChba2V5LCB2YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlQWRkVGVzdC5wdXNoKHBhcnNlSW50KHZhbHVlKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxvY2F0aW9uTmFtZSA9IFwiXCJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZm9ybWF0dGVkX2FkZHJlc3MpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uTmFtZSA9IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzc1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VvRGF0YSAmJiB0aGlzLnByb3BzLnNlb0RhdGEubG9jYXRpb24pIHtcbiAgICAgICAgICAgIGxvY2F0aW9uTmFtZSA9IHRoaXMucHJvcHMuc2VvRGF0YS5sb2NhdGlvblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IFNlYXJjaGVkQ3JpdGVyYVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGEgJiYgdGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGEubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICBsZXQgc2hvd0luZm8gPSB0cnVlXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcInNlYXJjaC90ZXN0aW5mb1wiKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YVswXS5pZCAhPSBwYXJzZWQudGVzdF9pZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0luZm8gPSBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKHRoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhWzBdLnVybCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0luZm8gPSBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHsgbGFicyB9ID0gdGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGFbMF1cbiAgICAgICAgICAgIGlmIChsYWJzICYmIGxhYnMudGVzdHMpIHtcbiAgICAgICAgICAgICAgICBTZWFyY2hlZENyaXRlcmEgPSBsYWJzLnRlc3RzWzBdLm5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICAgICAgbGV0IGFib3V0X3Rlc3QgPSB0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YVswXS5hYm91dF90ZXN0XG4gICAgICAgICAgICBsZXQgd2h5X2dldF90ZXN0ZWQgPSB0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YVswXS53aHlfZ2V0X3Rlc3RlZFxuICAgICAgICAgICAgbGV0IHRlc3RfbWF5X2luY2x1ZGUgPSB0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YVswXS50ZXN0X21heV9pbmNsdWRlXG4gICAgICAgICAgICBsZXQgcHJlcGFyYXRpb25zID0gdGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGFbMF0ucHJlcGFyYXRpb25zXG4gICAgICAgICAgICBsZXQgZmFxcyA9IHRoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhWzBdLmZhcXNcbiAgICAgICAgICAgIGxldCByZXNwX3Rlc3RfaWQgPSB0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YVswXS5pZFxuICAgICAgICAgICAgbGV0IGNhbm9uaWNhbFVybCA9ICcnXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSAnJ1xuICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gJydcbiAgICAgICAgICAgIGxldCB0aGlzX3BhY2thZ2Vfd2lsbF9pbmNsdWRlID0gdGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGFbMF0udGhpc19wYWNrYWdlX3dpbGxfaW5jbHVkZVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhWzBdLnNlbykge1xuICAgICAgICAgICAgICAgIGNhbm9uaWNhbFVybCA9IHRoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhWzBdLnVybFxuICAgICAgICAgICAgICAgIHRpdGxlID0gdGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGFbMF0uc2VvLnRpdGxlXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPSB0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YVswXS5zZW8uZGVzY3JpcHRpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBicmVhZGNydW1icyA9IHRoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhWzBdLmJyZWFkY3J1bWJcbiAgICAgICAgICAgIGxldCBhdXRob3IgPSB0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YVswXS5hdXRob3IgfHwgbnVsbFxuICAgICAgICAgICAgaWYocGFyc2VkLmlzQ2F0ZWdvcnkgJiYgcGFyc2VkLmlzQ2F0ZWdvcnkgPT0gJ3RydWUnICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWNrYWdlLWluY2x1ZGVzJykgJiYgdGhpc19wYWNrYWdlX3dpbGxfaW5jbHVkZSAmJiB0aGlzX3BhY2thZ2Vfd2lsbF9pbmNsdWRlLnRlc3RzICYmIHRoaXNfcGFja2FnZV93aWxsX2luY2x1ZGUudGVzdHMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWNrYWdlLWluY2x1ZGVzJykub2Zmc2V0VG9wKVxuICAgICAgICAgICAgICAgIH0sIDIwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPEhlbG1ldFRhZ3MgdGFnc0RhdGE9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbm9uaWNhbFVybDogYCR7Q09ORklHLkFQSV9CQVNFX1VSTH0vJHtjYW5vbmljYWxVcmx9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmFkZS1lbnRlci1kb25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaWRlSGVhZGVyT25Nb2JpbGUgPyA8ZGl2IGNsYXNzTmFtZT1cImhpZGUtNzYyXCI+PFByb2ZpbGVIZWFkZXIgc2hvd1NlYXJjaD17dHJ1ZX0gLz48L2Rpdj4gOiA8UHJvZmlsZUhlYWRlciBzaG93U2VhcmNoPXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17XCJjb250YWluZXIgcGFyZW50LXNlY3Rpb24gYm9vay1hcHBvaW50bWVudC1zZWN0aW9uXCIgKyAodGhpcy5wcm9wcy5oaWRlSGVhZGVyT25Nb2JpbGUgPyBcIiBtcDBcIiA6IFwiXCIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0luZm8gPyA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBjZW50ZXItY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtcmItMjAgYm90dG9tTWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRlc3RJbmZvSGVhZFRpdGxlIG1ybmctdG9wLTEyXCI+PGltZyBzdHlsZT17eyB3aWR0aDogJzIwcHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ljb25zL2JhY2stYXJyb3cucG5nXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIG9uQ2xpY2s9e3RoaXMuY2xvc2VUZXN0SW5mby5iaW5kKHRoaXMpfSAvPnt0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YVswXS5uYW1lfSA8L2gxPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFkY3J1bWJzICYmIGJyZWFkY3J1bWJzLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1yYi0xMCBtcnQtMjAgYnJlYWRjcnVtYi1saXN0XCIgc3R5bGU9e3sgd29yZEJyZWFrOiAnYnJlYWstd29yZCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFkY3J1bWJzLm1hcCgoYnJlYWRjcnVtYiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImJyZWFkY3J1bWItbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2JyZWFkY3J1bWIudXJsfSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgJHticmVhZGNydW1iLnVybH1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17aW5kZXggIT09IGJyZWFkY3J1bWJzLmxlbmd0aCAtIDEgPyBgZnctNTAwIGJyZWFkY3J1bWItdGl0bGUgYnJlYWRjcnVtYi1jb2xvcmVkLXRpdGxlYCA6IGBmdy01MDAgYnJlYWRjcnVtYi10aXRsZWB9PnticmVhZGNydW1iLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAhPT0gYnJlYWRjcnVtYnMubGVuZ3RoIC0gMSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1hcnJvd1wiPiZndDs8L3NwYW4+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0luZm8gJiYgdGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGEgJiYgdGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGEubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1vZi1jb250ZW50LW1vYmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVPZkNvbnRlbnQgc2VhcmNoVGVzdEluZm9EYXRhPXt0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YVswXX0gdXBkYXRlVGFic1ZhbHVlcz17dGhpcy51cGRhdGVUYWJzVmFsdWVzLmJpbmQodGhpcyl9IHJlc3BfdGVzdF9pZD17cmVzcF90ZXN0X2lkfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNSBtcm5nLXRvcC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0LWluZm8tY29udGluZXItYmxvY2sgYm9yZGVyLXJhZGl1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YVswXS5zaG93X2RldGFpbHMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3QtaW5mby1hY3JkLWhlYWQtbWFpblwiIGlkPXtyZXNwX3Rlc3RfaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0c3QtbWFpbi1hY3JkLWRhdGEgJHtzZWxmLnN0YXRlLnRhYnNWYWx1ZS5pbmRleE9mKCd0ZXN0XycgKyByZXNwX3Rlc3RfaWQpID4gLTEgPyAnaGlkZScgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWJvdXRfdGVzdC52YWx1ZSAhPSBcIlwiID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0LXN1Yi1hY2NvcmRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFuY2hvci1saW5rXCIgaWQ9XCJhYm91dC10ZXN0XCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRzdC1zdWItYWNyZC1oZWFkaW5nXCIgb25DbGljaz17c2VsZi5CdXR0b25IYW5kbGVyLmJpbmQoc2VsZiwgJ2Fib3V0X3Rlc3RfJyArIHJlc3BfdGVzdF9pZCl9PnthYm91dF90ZXN0LnRpdGxlfSA8c3BhbiBjbGFzc05hbWU9e3NlbGYuc3RhdGUudGFic1ZhbHVlLmluZGV4T2YoJ2Fib3V0X3Rlc3RfJyArIHJlc3BfdGVzdF9pZCkgPiAtMSA/ICdhY3JkLWFydy1yb3RhdGUnIDogJ2FjcmQtc2hvdyd9PjxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+PC9zcGFuPjwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFjcmQtc3ViLWNvbnRlbnQgJHtzZWxmLnN0YXRlLnRhYnNWYWx1ZS5pbmRleE9mKCdhYm91dF90ZXN0XycgKyByZXNwX3Rlc3RfaWQpID4gLTEgPyAnaGlkZScgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYWJvdXRfdGVzdC52YWx1ZSB9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d2h5X2dldF90ZXN0ZWQudmFsdWUgIT0gXCJcIiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdC1zdWItYWNjb3JkaW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhbmNob3ItbGlua1wiIGlkPVwid2h5LWdldC10ZXN0ZWRcIj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidHN0LXN1Yi1hY3JkLWhlYWRpbmdcIiBvbkNsaWNrPXtzZWxmLkJ1dHRvbkhhbmRsZXIuYmluZChzZWxmLCAnd2h5X2dldF90ZXN0ZWRfJyArIHJlc3BfdGVzdF9pZCl9Pnt3aHlfZ2V0X3Rlc3RlZC50aXRsZX0gPHNwYW4gY2xhc3NOYW1lPXtzZWxmLnN0YXRlLnRhYnNWYWx1ZS5pbmRleE9mKCd3aHlfZ2V0X3Rlc3RlZF8nICsgcmVzcF90ZXN0X2lkKSA+IC0xID8gJ2FjcmQtYXJ3LXJvdGF0ZScgOiAnYWNyZC1zaG93J30+PGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz48L3NwYW4+PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYWNyZC1zdWItY29udGVudCAke3NlbGYuc3RhdGUudGFic1ZhbHVlLmluZGV4T2YoJ3doeV9nZXRfdGVzdGVkXycgKyByZXNwX3Rlc3RfaWQpID4gLTEgPyAnaGlkZScgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogd2h5X2dldF90ZXN0ZWQudmFsdWUgfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rlc3RfbWF5X2luY2x1ZGUudmFsdWUubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdC1zdWItYWNjb3JkaW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhbmNob3ItbGlua1wiIGlkPVwidGVzdC1pbmNsdWRlc1wiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0c3Qtc3ViLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3NlbGYuQnV0dG9uSGFuZGxlci5iaW5kKHNlbGYsICd0ZXN0X2luY2x1ZGVfJyArIHJlc3BfdGVzdF9pZCl9Pnt0ZXN0X21heV9pbmNsdWRlLnRpdGxlfSA8c3BhbiBjbGFzc05hbWU9e3NlbGYuc3RhdGUudGFic1ZhbHVlLmluZGV4T2YoJ3Rlc3RfaW5jbHVkZV8nICsgcmVzcF90ZXN0X2lkKSA+IC0xID8gJ2FjcmQtYXJ3LXJvdGF0ZScgOiAnYWNyZC1zaG93J30+PGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz48L3NwYW4+PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYWNyZC1zdWItY29udGVudCAke3NlbGYuc3RhdGUudGFic1ZhbHVlLmluZGV4T2YoJ3Rlc3RfaW5jbHVkZV8nICsgcmVzcF90ZXN0X2lkKSA+IC0xID8gJ2hpZGUnIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXModGVzdF9tYXlfaW5jbHVkZS52YWx1ZSkubWFwKGZ1bmN0aW9uIChbaywgdGVzdF9pbmNsdWRlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2t9Pnt0ZXN0X2luY2x1ZGV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzX3BhY2thZ2Vfd2lsbF9pbmNsdWRlICYmIHRoaXNfcGFja2FnZV93aWxsX2luY2x1ZGUudGVzdHMgJiYgdGhpc19wYWNrYWdlX3dpbGxfaW5jbHVkZS50ZXN0cy5sZW5ndGggPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0LXN1Yi1hY2NvcmRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFuY2hvci1saW5rXCIgaWQ9XCJwYWNrYWdlLWluY2x1ZGVzXCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRzdC1zdWItYWNyZC1oZWFkaW5nXCIgb25DbGljaz17c2VsZi5CdXR0b25IYW5kbGVyLmJpbmQoc2VsZiwgJ3Rlc3RfaW5jbHVkZV8nICsgcmVzcF90ZXN0X2lkKX0+e3RoaXNfcGFja2FnZV93aWxsX2luY2x1ZGUudGl0bGV9IDxzcGFuIGNsYXNzTmFtZT17c2VsZi5zdGF0ZS50YWJzVmFsdWUuaW5kZXhPZigndGVzdF9pbmNsdWRlXycgKyByZXNwX3Rlc3RfaWQpID4gLTEgPyAnYWNyZC1hcnctcm90YXRlJyA6ICdhY3JkLXNob3cnfT48aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPjwvc3Bhbj48L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhY3JkLXN1Yi1jb250ZW50ICR7c2VsZi5zdGF0ZS50YWJzVmFsdWUuaW5kZXhPZigndGVzdF9pbmNsdWRlXycgKyByZXNwX3Rlc3RfaWQpID4gLTEgPyAnaGlkZScgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyh0aGlzX3BhY2thZ2Vfd2lsbF9pbmNsdWRlLnRlc3RzKS5tYXAoZnVuY3Rpb24gKFtrLCB0ZXN0X2luY2x1ZGVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17a30gaWQ9e3Rlc3RfaW5jbHVkZS5pZH0gY2xhc3NOYW1lPVwibWItcm12XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRzdC1zdWItYWNyZC1oZWFkaW5nIHBhZGRpbmctYnRuLWFkanVzdFwiIG9uQ2xpY2s9e3NlbGYuQnV0dG9uSGFuZGxlci5iaW5kKHNlbGYsICd0ZXN0X2luY2x1ZGVfJyArIHRlc3RfaW5jbHVkZS5pZCl9PntgJHt0ZXN0X2luY2x1ZGUubmFtZX0gICR7dGVzdF9pbmNsdWRlLnBhcmFtZXRlcnMgJiYgdGVzdF9pbmNsdWRlLnBhcmFtZXRlcnMubGVuZ3RoID4gMCA/IGAoJHt0ZXN0X2luY2x1ZGUucGFyYW1ldGVycy5sZW5ndGh9KWA6Jyd9YH0ge3Rlc3RfaW5jbHVkZS5wYXJhbWV0ZXJzICYmIHRlc3RfaW5jbHVkZS5wYXJhbWV0ZXJzLmxlbmd0aCA+IDAgPyA8c3BhbiBjbGFzc05hbWU9e3NlbGYuc3RhdGUudGFic1ZhbHVlLmluZGV4T2YoJ3Rlc3RfaW5jbHVkZV8nICsgdGVzdF9pbmNsdWRlLmlkKSA+IC0xID8gJ2FjcmQtc2hvdycgOiAnYWNyZC1hcnctcm90YXRlJ30+PGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz48L3NwYW4+IDogJyd9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3RfaW5jbHVkZS5wYXJhbWV0ZXJzICYmIHRlc3RfaW5jbHVkZS5wYXJhbWV0ZXJzLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c2VsZi5zdGF0ZS50YWJzVmFsdWUuaW5kZXhPZigndGVzdF9pbmNsdWRlXycgKyB0ZXN0X2luY2x1ZGUuaWQpID09IC0xID8gJ2FjcmQtc3ViLWNvbnRlbnQgaGlkZScgOiAnYWNyZC1zdWItY29udGVudCd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyh0ZXN0X2luY2x1ZGUucGFyYW1ldGVycykubWFwKGZ1bmN0aW9uIChbcF9rLCBwYXJhbWV0ZXJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtwX2t9PntwYXJhbWV0ZXJ9IDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJlcGFyYXRpb25zLnZhbHVlICE9ICcnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0LXN1Yi1hY2NvcmRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFuY2hvci1saW5rXCIgaWQ9XCJ0ZXN0LXByZXBhcmF0aW9uc1wiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0c3Qtc3ViLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3NlbGYuQnV0dG9uSGFuZGxlci5iaW5kKHNlbGYsICd0ZXN0X3ByZXBhcmF0aW9uc18nICsgcmVzcF90ZXN0X2lkKX0+e3ByZXBhcmF0aW9ucy50aXRsZX08c3BhbiBjbGFzc05hbWU9e3NlbGYuc3RhdGUudGFic1ZhbHVlLmluZGV4T2YoJ3Rlc3RfcHJlcGFyYXRpb25zXycgKyByZXNwX3Rlc3RfaWQpID4gLTEgPyAnYWNyZC1hcnctcm90YXRlJyA6ICdhY3JkLXNob3cnfT48aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPjwvc3Bhbj48L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhY3JkLXN1Yi1jb250ZW50ICR7c2VsZi5zdGF0ZS50YWJzVmFsdWUuaW5kZXhPZigndGVzdF9wcmVwYXJhdGlvbnNfJyArIHJlc3BfdGVzdF9pZCkgPiAtMSA/ICdoaWRlJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwcmVwYXJhdGlvbnMudmFsdWUgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZhcXMubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdC1zdWItYWNjb3JkaW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhbmNob3ItbGlua1wiIGlkPVwidGVzdC1mYXFcIj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidHN0LXN1Yi1hY3JkLWhlYWRpbmdcIiBvbkNsaWNrPXtzZWxmLkJ1dHRvbkhhbmRsZXIuYmluZChzZWxmLCAndGVzdF9mYXFfJyArIHJlc3BfdGVzdF9pZCl9PntmYXFzWzBdLnRpdGxlfSA8c3BhbiBjbGFzc05hbWU9e3NlbGYuc3RhdGUudGFic1ZhbHVlLmluZGV4T2YoJ3Rlc3RfZmFxXycgKyByZXNwX3Rlc3RfaWQpID4gLTEgPyAnYWNyZC1hcnctcm90YXRlJyA6ICdhY3JkLXNob3cnfT48aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPjwvc3Bhbj48L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhY3JkLXN1Yi1jb250ZW50ICR7c2VsZi5zdGF0ZS50YWJzVmFsdWUuaW5kZXhPZigndGVzdF9mYXFfJyArIHJlc3BfdGVzdF9pZCkgPiAtMSA/ICdoaWRlJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmYXFzLmxlbmd0aCA+IDAgPyBPYmplY3QuZW50cmllcyhmYXFzKS5tYXAoZnVuY3Rpb24gKFtrLCBmYXFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17a30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5RLntmYXEudmFsdWUudGVzdF9xdWVzdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZmFxLnZhbHVlLnRlc3RfYW5zd2VyfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFwYXJzZWQudGVzdF9pZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci10aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJ2F1dG8nLCBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyp0aGlzLnByb3BzLnBhY2thZ2VzTGlzdD90aGlzLnByb3BzLnBhY2thZ2VzTGlzdC5jb3VudDonJyovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFicyAmJiBsYWJzLmNvdW50ID8gbGFicy5jb3VudCA6ICcwJ30gUmVzdWx0cyBmb3VuZCBmb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHQtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnctNzAwXCI+IHtTZWFyY2hlZENyaXRlcmF9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0LXNwYW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dMb2NhdGlvblBvcHVwICYmIGZhbHNlID8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBsb2NhdGlvbk5hbWUgPyA8c3BhbiBjbGFzc05hbWU9XCJsb2NhdGlvbi1lZGl0XCI+e2AgaW4gJHtsb2NhdGlvbk5hbWV9YH08L3NwYW4+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6IDE1LCBoZWlnaHQ6IDE1LCBtYXJnaW5MZWZ0OiA3LCBjdXJzb3I6ICdwb2ludGVyJyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9lZGl0LnN2Z1wifSBvbkNsaWNrPXt0aGlzLmdvVG9Mb2NhdGlvbi5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYnMgJiYgbGFicy5yZXN1bHQubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhsYWJzLnJlc3VsdCkubWFwKGZ1bmN0aW9uIChbaywgbGFiXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17a30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJQcm9maWxlQ2FyZCB7Li4uc2VsZi5wcm9wc30gZGV0YWlscz17bGFifSBrZXk9e2t9IHJhbms9e2t9IG5vQ2xlYXJUZXN0PXt0cnVlfSBpc1Rlc3RJbmZvPXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYnMgJiYgbGFicy5jb3VudCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtcmItMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ2aWV3QWxsTGFiXCIgb25DbGljaz17dGhpcy5zZWFyY2hQcm9jZWVkTEFCLmJpbmQodGhpcywgJycpfT4gVmlldyBhbGwgbGFiczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhWzBdLmZyZXF1ZW50bHlfYm9va2VkX3RvZ2V0aGVyICYmIHRoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhWzBdLmZyZXF1ZW50bHlfYm9va2VkX3RvZ2V0aGVyLnZhbHVlLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNSBtcm5nLXRvcC0xMiBtcmItMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRlc3QtZHVvLWhlZGluZ1wiPiB7dGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGFbMF0uZnJlcXVlbnRseV9ib29rZWRfdG9nZXRoZXIudGl0bGV9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0ZXN0LWR1by1saXN0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhWzBdLmZyZXF1ZW50bHlfYm9va2VkX3RvZ2V0aGVyLnZhbHVlKS5tYXAoZnVuY3Rpb24gKFtrLCBmcmVxdWVudGx5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17a30+PHA+e2ZyZXF1ZW50bHkubGFiX3Rlc3R9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Rpc2FibGVBZGRUZXN0LmluZGV4T2YoZnJlcXVlbnRseS5pZCkgPiAtMSA/ICdkaXNhYmxlLWJ0bicgOiAnJ30gaWQ9e2ZyZXF1ZW50bHkuaWR9IG9uQ2xpY2s9e3NlbGYuZnJlcXVlbnRseUFkZFRlc3QuYmluZChzZWxmLCBmcmVxdWVudGx5LmlkLCBmcmVxdWVudGx5LmxhYl90ZXN0LCBmcmVxdWVudGx5LnNob3dfZGV0YWlscyl9IGRpc2FibGVkPXtkaXNhYmxlQWRkVGVzdC5pbmRleE9mKGZyZXF1ZW50bHkuaWQpID4gLTEgPyB0cnVlIDogJyd9PntkaXNhYmxlQWRkVGVzdC5pbmRleE9mKGZyZXF1ZW50bHkuaWQpID4gLTEgPyAnVGVzdCBBZGRlZCcgOiAnQWRkIFRlc3QnfTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3IgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlQXV0aG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2F1dGhvci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlSW1hZ2U9e2F1dGhvci5wcm9maWxlX2ltZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXthdXRob3IudXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YXV0aG9yLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVjaWFsaXR5PXthdXRob3Iuc3BlY2lhbGl0eVswXS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlcmllbmNlPXthdXRob3IuZXhwZXJpZW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVibGlzaGVkRGF0ZT17dGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGFbMF0ucHVibGlzaGVkX2RhdGUgfHwgbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshcGFyc2VkLnRlc3RfaWRzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvY2VlZEJvb2tOb3cuYmluZCh0aGlzLCAnJyl9IGNsYXNzTmFtZT1cInAtMyB2LWJ0biB2LWJ0bi1wcmltYXJ5IGJ0bi1sZyBmaXhlZCBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCB0ZXh0LWxnIHN0aWNreS1idG5cIj5Cb29rIE5vd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBzZWxlY3RlZC1vcHRpb24gc3RhdGljLWJ0biBib29rLXJpZ2h0LWFsaWduLXRleHRcIiBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiAyLCBtYXJnaW5SaWdodDogOCB9fT4ge2AoJHtkaXNhYmxlQWRkVGVzdC5sZW5ndGh9IFNlbGVjdGVkKWB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03IGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93SW5mbyAmJiB0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YSAmJiB0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YS5sZW5ndGggPiAwID8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGF0UGFuZWwgbm9DaGF0QnV0dG9uPXt0cnVlfSBzZWFyY2hUZXN0SW5mb0RhdGE9e3RoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhWzBdfSB1cGRhdGVUYWJzVmFsdWVzPXt0aGlzLnVwZGF0ZVRhYnNWYWx1ZXMuYmluZCh0aGlzKX0gcmVzcF90ZXN0X2lkPXtyZXNwX3Rlc3RfaWR9IG1zZ1RlbXBsYXRlPVwiZ29sZF9nZW5lcmFsX3RlbXBsYXRlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxDaGF0UGFuZWwgbm9DaGF0QnV0dG9uPXt0cnVlfSBtc2dUZW1wbGF0ZT1cImdvbGRfZ2VuZXJhbF90ZW1wbGF0ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmFkZS1lbnRlci1kb25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgc2hvd1NlYXJjaD17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIHBhcmVudC1zZWN0aW9uIGJvb2stYXBwb2ludG1lbnQtc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTcgY2VudGVyLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1jZW50ZXIgbXJ0LTEwXCIgc3R5bGU9e3sgZm9udFNpemU6IDE4IH19Pk5vIFJlY29yZCBGb3VuZCAhITwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hhdFBhbmVsIG5vQ2hhdEJ1dHRvbj17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hUZXN0VmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBzZWFyY2hUZXN0RGF0YSwgc2VsZWN0ZWRDcml0ZXJpYXMsIHNlYXJjaFRlc3RJbmZvRGF0YSwgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEsIHNldExhYlNlYXJjaElkLCBjbGVhckV4dHJhVGVzdHMsIG1lcmdlTEFCU3RhdGUsIGNsZWFyQWxsVGVzdHMsIHNlbGVjdExhYlRpbWVTTG90LCBzZWxlY3RMYWJBcHBvaW50bWVudFR5cGUsIHNldFBhY2thZ2VJZCwgcG9zdENvbW1lbnQgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuXG5pbXBvcnQgU2VhcmNoVGVzdFZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL3NlYXJjaC9zZWFyY2hUZXN0SW5mby5qcydcblxuY2xhc3Mgc2VhcmNoVGVzdEluZm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWREYXRhKHN0b3JlLCBtYXRjaCwgcXVlcnkpIHtcbiAgICAgICAgbGV0IHNlb191cmwgPSBcIlwiXG4gICAgICAgIGxldCBzZWFyY2hCeUlkID0gbWF0Y2gudXJsLmluY2x1ZGVzKFwic2VhcmNoL3Rlc3RpbmZvXCIpXG5cbiAgICAgICAgaWYgKCFzZWFyY2hCeUlkKSB7XG4gICAgICAgICAgICBzZW9fdXJsID0gbWF0Y2gudXJsLnNwbGl0KFwiL1wiKVsxXVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHNlYXJjaFRlc3REYXRhKHF1ZXJ5LnRlc3RfaWRzIHx8ICcnLCBzZW9fdXJsLCBxdWVyeS5sYWJfaWQgfHwgJycsIHt9LCBmYWxzZSwgKGRhdGEpID0+IHsgLy8gZ2V0IHNlbGVjdGVkIHRlc3QvcGFja2FnZSBkZXRhaWxzXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7fSlcbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTZWFyY2hUZXN0VmlldyB7Li4udGhpcy5wcm9wc30gaGlkZUhlYWRlck9uTW9iaWxlPXt0cnVlfSAvPlxuICAgICAgICApXG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICBsZXQgeyBzZWxlY3RlZENyaXRlcmlhcywgc2VhcmNoVGVzdEluZm9EYXRhLCBzZWFyY2hfaWRfZGF0YSwgc2VsZWN0ZWRMb2NhdGlvbiwgbG9jYXRpb25UeXBlLCBjdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMsIGZpbHRlckNyaXRlcmlhIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfTEFCU1xuICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdGVkQ3JpdGVyaWFzLCBzZWFyY2hUZXN0SW5mb0RhdGEsIHNlYXJjaF9pZF9kYXRhLCBzZWxlY3RlZExvY2F0aW9uLCBsb2NhdGlvblR5cGUsIGN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcywgZmlsdGVyQ3JpdGVyaWFcbiAgICB9XG5cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VhcmNoVGVzdERhdGE6ICh0ZXN0X2lkcywgdGVzdF91cmwsIGxhYl9pZCwgc3RhdGUsIG5vX2xhYnMsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChzZWFyY2hUZXN0RGF0YSh0ZXN0X2lkcywgdGVzdF91cmwsIGxhYl9pZCwgc3RhdGUsIG5vX2xhYnMsIGNhbGxiYWNrKSksXG4gICAgICAgIGNsZWFyRXh0cmFUZXN0czogKCkgPT4gZGlzcGF0Y2goY2xlYXJFeHRyYVRlc3RzKCkpLFxuICAgICAgICB0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYTogKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCkgPT4gZGlzcGF0Y2godG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkKSksXG4gICAgICAgIHNldExhYlNlYXJjaElkOiAoc2VhcmNoSWQsIGZpbHRlcnMsIHNldERlZmF1bHQpID0+IGRpc3BhdGNoKHNldExhYlNlYXJjaElkKHNlYXJjaElkLCBmaWx0ZXJzLCBzZXREZWZhdWx0KSksXG4gICAgICAgIG1lcmdlTEFCU3RhdGU6IChzdGF0ZSwgZmV0Y2hOZXdSZXN1bHRzKSA9PiBkaXNwYXRjaChtZXJnZUxBQlN0YXRlKHN0YXRlLCBmZXRjaE5ld1Jlc3VsdHMpKSxcbiAgICAgICAgY2xlYXJBbGxUZXN0czogKCkgPT4gZGlzcGF0Y2goY2xlYXJBbGxUZXN0cygpKSxcbiAgICAgICAgc2VsZWN0TGFiVGltZVNMb3Q6IChzbG90LCByZXNjaGVkdWxlKSA9PiBkaXNwYXRjaChzZWxlY3RMYWJUaW1lU0xvdChzbG90LCByZXNjaGVkdWxlKSksXG4gICAgICAgIHNlbGVjdExhYkFwcG9pbnRtZW50VHlwZTogKHR5cGUpID0+IGRpc3BhdGNoKHNlbGVjdExhYkFwcG9pbnRtZW50VHlwZSh0eXBlKSksXG4gICAgICAgIHNldFBhY2thZ2VJZDogKHBhY2thZ2VfaWQsIGlzSG9tZVBhZ2UpID0+IGRpc3BhdGNoKHNldFBhY2thZ2VJZChwYWNrYWdlX2lkLCBpc0hvbWVQYWdlKSksXG4gICAgICAgIHBvc3RDb21tZW50OiAoY29tbWVudCwgY2IpID0+IGRpc3BhdGNoKHBvc3RDb21tZW50KGNvbW1lbnQsIGNiKSlcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoc2VhcmNoVGVzdEluZm8pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkT3BlbkJhbm5lcihsYWJfdGltaW5nLCBsYWJfdGltaW5nX2RhdGEgPSBbXSwgbmV4dF9sYWJfdGltaW5nLCBuZXh0X2xhYl90aW1pbmdfZGF0YSA9IG51bGwpIHtcbiAgICBsZXQgaXNfb3Blbl9ub3cgPSBmYWxzZVxuICAgIGxldCBvcGVuX25leHRfdG9kYXkgPSBmYWxzZVxuXG4gICAgbGV0IHRpbWVfbm93ID0gbmV3IERhdGUoKS5nZXRIb3VycygpICsgMC41XG4gICAgZm9yIChsZXQgbHRkIG9mIGxhYl90aW1pbmdfZGF0YSkge1xuICAgICAgICBpZiAodGltZV9ub3cgPD0gbHRkLmVuZCAmJiB0aW1lX25vdyA+PSBsdGQuc3RhcnQpIHtcbiAgICAgICAgICAgIGlzX29wZW5fbm93ID0gdHJ1ZVxuICAgICAgICAgICAgcmV0dXJuIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAxMiB9fSA+e2xhYl90aW1pbmd9PC9wPlxuICAgICAgICB9XG4gICAgICAgIGlmICh0aW1lX25vdyA8IGx0ZC5zdGFydCkge1xuICAgICAgICAgICAgb3Blbl9uZXh0X3RvZGF5ID0gbHRkLnN0YXJ0XG4gICAgICAgICAgICBvcGVuX25leHRfdG9kYXkgPSBfZGVjaW1hbFRvVGltZShvcGVuX25leHRfdG9kYXkpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9wZW5fbmV4dF90b2RheSkge1xuICAgICAgICByZXR1cm4gPHAgc3R5bGU9e3sgZm9udFNpemU6IDEyIH19ID5PcGVucyBuZXh0IGF0IHtvcGVuX25leHRfdG9kYXl9LCB0b2RheTwvcD5cbiAgICB9XG5cbiAgICBjb25zdCBXRUVLX0RBWVMgPSBbJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknLCAnU3VuZGF5J11cbiAgICBsZXQgbmV4dF9vcGVuID0gZmFsc2VcbiAgICBsZXQgbmV4dF9vcGVuX3RvZGF5ID0gXCJcIlxuICAgIGlmIChuZXh0X2xhYl90aW1pbmdfZGF0YSkge1xuICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpXG4gICAgICAgIGxldCB3ZWVrRGF5TnVtYmVyID0gdG9kYXkuZ2V0RGF5KClcbiAgICAgICAgd2Vla0RheU51bWJlciA9IHdlZWtEYXlOdW1iZXIgPT0gMCA/IDYgOiB3ZWVrRGF5TnVtYmVyIC0gMVxuICAgICAgICBmb3IgKGxldCBpIGluIG5leHRfbGFiX3RpbWluZ19kYXRhKSB7XG4gICAgICAgICAgICBuZXh0X29wZW4gPSBuZXh0X2xhYl90aW1pbmdfZGF0YVtpXVswXS5zdGFydFxuICAgICAgICAgICAgbmV4dF9vcGVuID0gX2RlY2ltYWxUb1RpbWUobmV4dF9vcGVuKVxuICAgICAgICAgICAgaWYgKGkgLSB3ZWVrRGF5TnVtYmVyID09IDEpIHtcbiAgICAgICAgICAgICAgICBuZXh0X29wZW5fdG9kYXkgPSAndG9tb3Jyb3cnXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5leHRfb3Blbl90b2RheSA9IFdFRUtfREFZU1tpXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAobmV4dF9vcGVuICYmIG5leHRfb3Blbl90b2RheSkge1xuICAgICAgICByZXR1cm4gPHAgc3R5bGU9e3sgZm9udFNpemU6IDEyIH19ID5PcGVucyBuZXh0IGF0IHtuZXh0X29wZW59LCB7bmV4dF9vcGVuX3RvZGF5fTwvcD5cbiAgICB9XG5cbiAgICByZXR1cm4gXCJDbG9zZWRcIlxuXG59XG5cblxuZnVuY3Rpb24gX2RlY2ltYWxUb1RpbWUodGltZSkge1xuICAgIHRpbWUgPSB0aW1lLnRvU3RyaW5nKClcbiAgICBsZXQgaG91cnMgPSB0aW1lLnNwbGl0KCcuJylbMF1cbiAgICBsZXQgbWludXRlcyA9IHRpbWUuc3BsaXQoJy4nKVsxXVxuICAgIGhvdXJzID0gcGFyc2VJbnQoaG91cnMpXG4gICAgaWYgKG1pbnV0ZXMgPT0gJzUnKSB7XG4gICAgICAgIG1pbnV0ZXMgPSAnOjMwJ1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1pbnV0ZXMgPSBcIlwiXG4gICAgfVxuICAgIGxldCBkYXlfdGltZSA9IFwiQU1cIlxuICAgIGlmIChob3VycyA+PSAxMikge1xuICAgICAgICBkYXlfdGltZSA9IFwiUE1cIlxuICAgIH1cbiAgICBob3VycyA9IGhvdXJzICUgMTJcbiAgICByZXR1cm4gYCR7aG91cnN9JHttaW51dGVzfSAke2RheV90aW1lfWBcbn0iXSwic291cmNlUm9vdCI6IiJ9