exports.ids = [64];
exports.modules = {

/***/ "./dev/js/components/commons/DoctorsNearMe/DoctorsNearMeView.js":
/*!**********************************************************************!*\
  !*** ./dev/js/components/commons/DoctorsNearMe/DoctorsNearMeView.js ***!
  \**********************************************************************/
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

var _footer = __webpack_require__(/*! ../Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _HelmetTags = __webpack_require__(/*! ../../commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _config = __webpack_require__(/*! ../../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DoctorsNearMeView extends _react2.default.Component {

    constructor(props) {
        super(props);

        var title = this.props.match.url.toLowerCase();
        title = title.substring(1, title.length);

        this.state = {
            title: title,
            readMore: 'search-details-data-less'
        };
    }

    componentDidMount() {
        if (window) {
            window.scrollTo(0, 0);
        }
        this.props.getArticleList(this.state.title, 1, true);
    }

    toggleScroll() {
        if (window) {
            window.scrollTo(0, 0);
        }
        this.setState({ readMore: 'search-details-data-less' });
    }

    render() {

        return _react2.default.createElement(
            'div',
            { className: 'profile-body-wrap sitemap-body' },
            _react2.default.createElement(_DesktopProfileHeader2.default, null),
            _react2.default.createElement(
                'section',
                { className: 'container dp-container-div' },
                _react2.default.createElement(
                    'div',
                    { className: 'row main-row parent-section-row' },
                    this.props.ARTICLE_LOADED ? _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                            title: this.props.articleListData.seo ? this.props.articleListData.seo.title : "",
                            description: this.props.articleListData.seo ? this.props.articleListData.seo.description : "",
                            canonicalUrl: `${_config2.default.API_BASE_URL}${this.props.location.pathname}${this.props.location.search}`
                        } }) : null,
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 mrng-top-12' },
                        _react2.default.createElement(
                            'ul',
                            { className: 'mrb-10 breadcrumb-list', style: { wordBreak: 'break-word' } },
                            _react2.default.createElement(
                                'li',
                                { className: 'breadcrumb-list-item' },
                                _react2.default.createElement(
                                    'a',
                                    { href: '/', onClick: e => this.onHomeClick(e, "/") },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'fw-500 breadcrumb-title breadcrumb-colored-title' },
                                        'Home'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'breadcrumb-arrow' },
                                '>'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'breadcrumb-list-item' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'fw-500 breadcrumb-title' },
                                    this.props.articleListData.category
                                )
                            )
                        )
                    ),
                    this.props.articleListData.search_content && this.props.articleListData.search_content != '' ? _react2.default.createElement(
                        'div',
                        { className: 'col-12 mrt-10' },
                        _react2.default.createElement(
                            'div',
                            { className: 'search-result-card-collpase' },
                            _react2.default.createElement('div', { className: this.state.readMore, dangerouslySetInnerHTML: { __html: this.props.articleListData.search_content } }),
                            this.state.readMore && this.state.readMore != '' ? _react2.default.createElement(
                                'span',
                                { className: 'rd-more', onClick: () => this.setState({ readMore: '' }) },
                                'Read More'
                            ) : '',
                            this.state.readMore == '' ? _react2.default.createElement(
                                'span',
                                { className: 'rd-more', onClick: this.toggleScroll.bind(this) },
                                'Read Less'
                            ) : ''
                        )
                    ) : '',
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12' },
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'h1',
                                { className: 'fw-500 sitemap-title' },
                                this.props.articleListData.category
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'row sitemap-row' },
                            this.props.articleList.length ? this.props.articleList.map((property, index) => {
                                return _react2.default.createElement(
                                    'div',
                                    { className: 'col-12 col-md-6 col-lg-4 tests-brdr-btm', key: index },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'anchor-data-style' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: `/${property.url}`, onClick: e => {
                                                    e.preventDefault();
                                                    this.props.history.push(`/${property.url}`);
                                                } },
                                            _react2.default.createElement(
                                                'h2',
                                                { style: { fontSize: 14 } },
                                                property.title.split('|')[0]
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'sitemap-right-arrow' },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/arrow-forward-right.svg" })
                                        )
                                    )
                                );
                            }) : _react2.default.createElement(
                                'p',
                                { className: 'fw-500 text-center', style: { fontSize: 20 } },
                                'No Article Found !!'
                            )
                        )
                    ),
                    this.props.articleListData.bottom_content && this.props.articleListData.bottom_content != '' ? _react2.default.createElement(
                        'div',
                        { className: 'col-12 mrt-10' },
                        _react2.default.createElement('div', { className: 'search-result-card-collpase', dangerouslySetInnerHTML: { __html: this.props.articleListData.bottom_content } })
                    ) : ''
                )
            ),
            _react2.default.createElement(_footer2.default, null)
        );
    }
}

exports.default = DoctorsNearMeView;

/***/ }),

/***/ "./dev/js/components/commons/Loader/Loader.js":
/*!****************************************************!*\
  !*** ./dev/js/components/commons/Loader/Loader.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Loader extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return _react2.default.createElement(
            "div",
            { className: this.props.classType || "loaderCircular" },
            _react2.default.createElement("div", { className: "dp-loader" }),
            this.props.iFramePopup ? _react2.default.createElement(
                "p",
                { className: "fw-500 mrt-10" },
                "Redirecting you to Pharmeasy website..."
            ) : ''
        );
    }
}

exports.default = Loader;

/***/ }),

/***/ "./dev/js/components/commons/Loader/index.js":
/*!***************************************************!*\
  !*** ./dev/js/components/commons/Loader/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Loader = __webpack_require__(/*! ./Loader */ "./dev/js/components/commons/Loader/Loader.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Loader2.default;

/***/ }),

/***/ "./dev/js/components/commons/articleList/articleList.js":
/*!**************************************************************!*\
  !*** ./dev/js/components/commons/articleList/articleList.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _reactInfiniteScroller = __webpack_require__(/*! react-infinite-scroller */ "react-infinite-scroller");

var _reactInfiniteScroller2 = _interopRequireDefault(_reactInfiniteScroller);

var _Loader = __webpack_require__(/*! ../../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _HelmetTags = __webpack_require__(/*! ../../commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _config = __webpack_require__(/*! ../../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _footer = __webpack_require__(/*! ../Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class ArticleList extends _react2.default.Component {
	constructor(props) {
		super(props);
		const parsed = queryString.parse(this.props.location.search);

		var page = 1;
		if (parsed && parsed.page) {
			page = parsed.page;
		}

		var title = this.props.match.url.toLowerCase();
		title = title.substring(1, title.length);

		this.state = {
			hasMore: true,
			page: page,
			searchVal: '',
			noArticleFound: false,
			title: title,
			buttonsVisible: true,
			start_page: page
		};
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.getArticleList(this.state.title, this.state.page, true);
		const parsed = queryString.parse(this.props.location.search);

		if (parsed.page && parsed.page == 1) {
			var newHref = window.location.href.replace('?page=1', '');
			newHref = newHref.replace('&page=1', '');
			window.location.href = newHref;
		}
	}

	loadMore(delta) {
		this.setState({
			hasMore: false
		}, () => {
			let page = parseInt(this.state.page) + delta;
			this.props.getArticleList(this.state.title, page, true, this.state.searchVal, resp => {
				if (resp.length) {
					this.setState({
						hasMore: true,
						page
					});
				} else {
					this.setState({
						hasMore: false
					});
				}
			});
		});
	}

	changeVal(e) {
		this.setState({
			searchVal: e.target.value
		});
	}

	searchArticle() {
		let page = 1;
		if (!this.state.searchVal) {
			page = this.state.start_page;
		}

		this.setState({ page: page }, () => {
			this.props.getArticleList(this.state.title, this.state.page, true, this.state.searchVal, resp => {
				if (resp.length == 0) {
					this.setState({
						hasMore: false,
						noArticleFound: true
					});
				} else {
					this.setState({
						hasMore: true,
						noArticleFound: false
					});
				}

				if (this.state.searchVal) {
					this.setState({
						buttonsVisible: false
					});
				} else {
					this.setState({
						buttonsVisible: true
					});
				}
			});
		});
	}

	handleKeyUp(e) {
		if (e.key === 'Enter') {
			this.searchArticle();
		}
	}

	navigate(delta = 0, e) {
		// e.preventDefault()
		// e.stopPropagation()
		// this.loadMore(delta)
	}

	render() {
		var page_size = 50;
		var pageNo = parseInt(this.state.page);
		let currentPage = [];
		currentPage.push(_react2.default.createElement(
			'div',
			{ className: 'art-pagination-btn' },
			_react2.default.createElement(
				'span',
				{ className: 'fw-500', style: { color: '#000' } },
				pageNo
			)
		));

		let placeHolder = 'Search any ';
		if (this.props.articleListData && this.props.articleListData.category) {
			placeHolder = placeHolder + this.props.articleListData.category.split(' ')[0];
		}

		let heading = "";
		let url = this.props.match.url.toLowerCase();
		if (url == '/all-diseases') {
			heading = "All Diseases";
		} else if (url == '/all-medicines') {
			heading = "All Medicines";
		} else {
			heading = "All Articles";
		}

		return _react2.default.createElement(
			'div',
			{ className: 'profile-body-wrap' },
			_react2.default.createElement(_DesktopProfileHeader2.default, null),
			_react2.default.createElement(
				'section',
				{ className: 'container container-top-margin' },
				_react2.default.createElement(
					'div',
					{ className: 'row main-row parent-section-row' },
					_react2.default.createElement(_LeftBar2.default, null),
					_react2.default.createElement(
						'div',
						{ className: 'col-12 col-md-7 col-lg-7 center-column' },
						this.props.ARTICLE_LOADED ? _react2.default.createElement(_HelmetTags2.default, { tagsData: {
								title: this.props.articleListData.seo ? this.props.articleListData.seo.title : "",
								description: this.props.articleListData.seo ? this.props.articleListData.seo.description : "",
								canonicalUrl: `${_config2.default.API_BASE_URL}${this.props.location.pathname}${this.props.location.search}`,

								prev: `${pageNo != 1 && pageNo <= Math.ceil(this.props.articleListData.total_articles / page_size) ? `${_config2.default.API_BASE_URL}${this.props.location.pathname}${pageNo > 2 && pageNo <= Math.ceil(this.props.articleListData.total_articles / page_size) ? '?page=' + (pageNo - 1) : ''}` : ''}`,

								next: `${pageNo != Math.ceil(this.props.articleListData.total_articles / page_size) && pageNo <= Math.ceil(this.props.articleListData.total_articles / page_size) ? `${_config2.default.API_BASE_URL}${this.props.location.pathname}?page=${pageNo >= 1 && pageNo < Math.ceil(this.props.articleListData.total_articles / page_size) ? pageNo + 1 : ''}` : ''}`
							} }) : null,
						_react2.default.createElement(
							'div',
							{ className: 'container-fluid main-container' },
							_react2.default.createElement(
								'div',
								{ className: 'row' },
								_react2.default.createElement(
									'div',
									{ className: 'col-12' },
									_react2.default.createElement(
										'ul',
										{ className: 'mrb-10 breadcrumb-list', style: { wordBreak: 'break-word' } },
										_react2.default.createElement(
											'li',
											{ className: 'breadcrumb-list-item' },
											_react2.default.createElement(
												'a',
												{ href: '/', onClick: e => this.onHomeClick(e, "/") },
												_react2.default.createElement(
													'span',
													{ className: 'fw-500 breadcrumb-title breadcrumb-colored-title' },
													'Home'
												)
											)
										),
										_react2.default.createElement(
											'span',
											{ className: 'breadcrumb-arrow' },
											'>'
										),
										_react2.default.createElement(
											'li',
											{ className: 'breadcrumb-list-item' },
											_react2.default.createElement(
												'span',
												{ className: 'fw-500 breadcrumb-title' },
												this.props.articleListData.category
											)
										)
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'col-12' },
									_react2.default.createElement('input', { type: 'text', id: 'disease-search', value: this.state.searchVal, className: 'art-searchbar', placeholder: placeHolder, onChange: e => this.changeVal(e), onKeyUp: e => this.handleKeyUp(e) }),
									_react2.default.createElement(
										'button',
										{ className: 'art-search-btn', onClick: () => this.searchArticle() },
										_react2.default.createElement('img', { src: "/assets" + "/images/search.svg" })
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'col-12' },
									_react2.default.createElement(
										'h1',
										{ className: 'fw-500 mrt-20', style: { fontSize: 22 } },
										heading
									)
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'row mrt-20' },
								this.props.ARTICLE_LOADED ? _react2.default.createElement(
									'div',
									{ style: { width: '100%' } },
									this.props.articleList.length && !this.state.noArticleFound ? this.props.articleList.map((property, index) => {
										return _react2.default.createElement(
											'div',
											{ className: 'col-12', key: index },
											_react2.default.createElement(
												'div',
												{ className: 'widget disease-widget', onClick: () => this.props.history.push(`/${property.url}`) },
												property.header_image ? _react2.default.createElement('img', { className: 'disease-list-img', src: property.header_image, alt: property.header_image_alt }) : '',
												_react2.default.createElement(
													'a',
													{ href: `/${property.url}`, onClick: e => e.preventDefault() },
													_react2.default.createElement(
														'h2',
														{ className: 'disease-list-name fw-500' },
														property.title
													)
												),
												_react2.default.createElement('p', { className: 'fw-500', dangerouslySetInnerHTML: { __html: property.articleTeaser } })
											)
										);
									}) : _react2.default.createElement(
										'p',
										{ className: 'fw-500 text-center', style: { fontSize: 20 } },
										'No Article Found !!'
									),
									this.props.articleList.length && !this.state.noArticleFound && this.state.buttonsVisible ? _react2.default.createElement(
										'div',
										{ className: 'col-12' },
										pageNo == 1 ? _react2.default.createElement(
											'div',
											{ className: 'art-pagination-div' },
											currentPage,
											_react2.default.createElement(
												'a',
												{ onClick: this.navigate.bind(this, 1), href: `${this.state.title}?page=${pageNo + 1}` },
												_react2.default.createElement(
													'div',
													{ className: 'art-pagination-btn' },
													_react2.default.createElement(
														'span',
														{ className: 'fw-500' },
														pageNo + 1
													)
												)
											)
										) : pageNo == Math.ceil(this.props.articleListData.total_articles / page_size) ? _react2.default.createElement(
											'div',
											{ className: 'art-pagination-div' },
											_react2.default.createElement(
												'a',
												{ href: `${this.state.title}?page=${pageNo - 1}`, onClick: this.navigate.bind(this, -1) },
												_react2.default.createElement(
													'div',
													{ className: 'art-pagination-btn' },
													_react2.default.createElement(
														'span',
														{ className: 'fw-500' },
														pageNo - 1
													)
												)
											),
											currentPage
										) : _react2.default.createElement(
											'div',
											{ className: 'art-pagination-div' },
											_react2.default.createElement(
												'a',
												{ onClick: this.navigate.bind(this, pageNo == 2 ? -1 : -1), href: `${pageNo == 2 ? `${this.state.title}` : `${this.state.title}?page=${pageNo - 1}`}` },
												_react2.default.createElement(
													'div',
													{ className: 'art-pagination-btn' },
													_react2.default.createElement(
														'span',
														{ className: 'fw-500' },
														pageNo - 1
													)
												)
											),
											currentPage,
											_react2.default.createElement(
												'a',
												{ href: `${this.state.title}?page=${pageNo + 1}`, onClick: this.navigate.bind(this, 1) },
												_react2.default.createElement(
													'div',
													{ className: 'art-pagination-btn' },
													_react2.default.createElement(
														'span',
														{ className: 'fw-500' },
														pageNo + 1
													)
												)
											)
										)
									) : ""
								) : _react2.default.createElement(_Loader2.default, null)
							)
						)
					),
					_react2.default.createElement(_RightBar2.default, { noChatButton: true, msgTemplate: 'gold_template_1' })
				)
			),
			_react2.default.createElement(_footer2.default, null)
		);
	}
}

exports.default = ArticleList;

/***/ }),

/***/ "./dev/js/components/commons/articleList/index.js":
/*!********************************************************!*\
  !*** ./dev/js/components/commons/articleList/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _articleList = __webpack_require__(/*! ./articleList */ "./dev/js/components/commons/articleList/articleList.js");

var _articleList2 = _interopRequireDefault(_articleList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _articleList2.default;

/***/ }),

/***/ "./dev/js/containers/commons/articleList.js":
/*!**************************************************!*\
  !*** ./dev/js/containers/commons/articleList.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _articleList = __webpack_require__(/*! ../../components/commons/articleList */ "./dev/js/components/commons/articleList/index.js");

var _articleList2 = _interopRequireDefault(_articleList);

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _DoctorsNearMeView = __webpack_require__(/*! ../../components/commons/DoctorsNearMe/DoctorsNearMeView */ "./dev/js/components/commons/DoctorsNearMe/DoctorsNearMeView.js");

var _DoctorsNearMeView2 = _interopRequireDefault(_DoctorsNearMeView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class ArticleList extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNo: 1
        };
    }

    static loadData(store, match, query) {
        let title = match.url;
        title = title.substring(1, title.length).toLowerCase();
        if (query.page) {
            query = query.page;
        } else {
            query = 1;
        }
        return new Promise((resolve, reject) => {
            Promise.all([store.dispatch((0, _index.getArticleList)(title, query))]).then(result => {
                result = result[0];
                if (!result) {
                    reject({});
                    return;
                }
                if (result && result.length == 0 && query) {
                    reject({});
                    return;
                }
                // getSpecialityFooterData((footerData) => {
                //     resolve({ footerData: (footerData || null) })
                // })()
                resolve({});
            }).catch(e => {
                reject();
            });
        });
    }

    render() {
        return _react2.default.createElement(
            'div',
            null,
            this.props.match.url === "/doctors-near-me" ? _react2.default.createElement(_DoctorsNearMeView2.default, this.props) : _react2.default.createElement(_articleList2.default, this.props)
        );
    }
}

ArticleList.contextTypes = {
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
        articleList,
        articleListData,
        ARTICLE_LOADED,
        pageButtonCount,
        articlePageCount
    } = state.USER;

    let {
        static_footer_data
    } = state.DOCTOR_SEARCH;

    return {
        articleList,
        articleListData,
        ARTICLE_LOADED,
        pageButtonCount,
        articlePageCount,
        initialServerData,
        static_footer_data

    };
};

const mapDispatchToProps = dispatch => {
    return {
        getArticleList: (title, page, replaceList, searchString, callback) => dispatch((0, _index.getArticleList)(title, page, replaceList, searchString, callback)),
        getSpecialityFooterData: cb => dispatch((0, _index.getSpecialityFooterData)(cb))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ArticleList);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0RvY3RvcnNOZWFyTWUvRG9jdG9yc05lYXJNZVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvTG9hZGVyLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvTG9hZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvYXJ0aWNsZUxpc3QvYXJ0aWNsZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9hcnRpY2xlTGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9jb21tb25zL2FydGljbGVMaXN0LmpzIl0sIm5hbWVzIjpbIkRvY3RvcnNOZWFyTWVWaWV3IiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwidGl0bGUiLCJtYXRjaCIsInVybCIsInRvTG93ZXJDYXNlIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwic3RhdGUiLCJyZWFkTW9yZSIsImNvbXBvbmVudERpZE1vdW50Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJnZXRBcnRpY2xlTGlzdCIsInRvZ2dsZVNjcm9sbCIsInNldFN0YXRlIiwicmVuZGVyIiwiQVJUSUNMRV9MT0FERUQiLCJhcnRpY2xlTGlzdERhdGEiLCJzZW8iLCJkZXNjcmlwdGlvbiIsImNhbm9uaWNhbFVybCIsIkNPTkZJRyIsIkFQSV9CQVNFX1VSTCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzZWFyY2giLCJ3b3JkQnJlYWsiLCJlIiwib25Ib21lQ2xpY2siLCJjYXRlZ29yeSIsInNlYXJjaF9jb250ZW50IiwiX19odG1sIiwiYmluZCIsImFydGljbGVMaXN0IiwibWFwIiwicHJvcGVydHkiLCJpbmRleCIsInByZXZlbnREZWZhdWx0IiwiaGlzdG9yeSIsInB1c2giLCJmb250U2l6ZSIsInNwbGl0IiwiQVNTRVRTX0JBU0VfVVJMIiwiYm90dG9tX2NvbnRlbnQiLCJMb2FkZXIiLCJjbGFzc1R5cGUiLCJpRnJhbWVQb3B1cCIsInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIkFydGljbGVMaXN0IiwicGFyc2VkIiwicGFyc2UiLCJwYWdlIiwiaGFzTW9yZSIsInNlYXJjaFZhbCIsIm5vQXJ0aWNsZUZvdW5kIiwiYnV0dG9uc1Zpc2libGUiLCJzdGFydF9wYWdlIiwibmV3SHJlZiIsImhyZWYiLCJyZXBsYWNlIiwibG9hZE1vcmUiLCJkZWx0YSIsInBhcnNlSW50IiwicmVzcCIsImNoYW5nZVZhbCIsInRhcmdldCIsInZhbHVlIiwic2VhcmNoQXJ0aWNsZSIsImhhbmRsZUtleVVwIiwia2V5IiwibmF2aWdhdGUiLCJwYWdlX3NpemUiLCJwYWdlTm8iLCJjdXJyZW50UGFnZSIsImNvbG9yIiwicGxhY2VIb2xkZXIiLCJoZWFkaW5nIiwicHJldiIsIk1hdGgiLCJjZWlsIiwidG90YWxfYXJ0aWNsZXMiLCJuZXh0Iiwid2lkdGgiLCJoZWFkZXJfaW1hZ2UiLCJoZWFkZXJfaW1hZ2VfYWx0IiwiYXJ0aWNsZVRlYXNlciIsIkFydGljbGVMaXN0VmlldyIsImxvYWREYXRhIiwic3RvcmUiLCJxdWVyeSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYWxsIiwiZGlzcGF0Y2giLCJ0aGVuIiwicmVzdWx0IiwiY2F0Y2giLCJjb250ZXh0VHlwZXMiLCJyb3V0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJwYXNzZWRQcm9wcyIsImluaXRpYWxTZXJ2ZXJEYXRhIiwic3RhdGljQ29udGV4dCIsImRhdGEiLCJwYWdlQnV0dG9uQ291bnQiLCJhcnRpY2xlUGFnZUNvdW50IiwiVVNFUiIsInN0YXRpY19mb290ZXJfZGF0YSIsIkRPQ1RPUl9TRUFSQ0giLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJyZXBsYWNlTGlzdCIsInNlYXJjaFN0cmluZyIsImNhbGxiYWNrIiwi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QUFNcUcsSUFOVjs7QUFRQSxRQUFJO0FBQ0FDO0FBREEsUUFFQXRHLE1BQU11RyxhQUZWOztBQUtBLFdBQU87QUFDSDdFLG1CQURHO0FBRUhoQix1QkFGRztBQUdIRCxzQkFIRztBQUlIMEYsdUJBSkc7QUFLSEMsd0JBTEc7QUFNSEoseUJBTkc7QUFPSE07O0FBUEcsS0FBUDtBQVVILENBakNEOztBQW1DQSxNQUFNRSxxQkFBc0JoQixRQUFELElBQWM7QUFDckMsV0FBTztBQUNIbkYsd0JBQWdCLENBQUNYLEtBQUQsRUFBUW1ELElBQVIsRUFBYzRELFdBQWQsRUFBMkJDLFlBQTNCLEVBQXlDQyxRQUF6QyxLQUFzRG5CLFNBQVMsMkJBQWU5RixLQUFmLEVBQXNCbUQsSUFBdEIsRUFBNEI0RCxXQUE1QixFQUF5Q0MsWUFBekMsRUFBdURDLFFBQXZELENBQVQsQ0FEbkU7QUFFSEMsaUNBQTBCQyxFQUFELElBQVFyQixTQUFTLG9DQUF3QnFCLEVBQXhCLENBQVQ7QUFGOUIsS0FBUDtBQUlILENBTEQ7O2tCQU9lLHlCQUFRZixlQUFSLEVBQXlCVSxrQkFBekIsRUFBNkM5RCxXQUE3QyxDIiwiZmlsZSI6IjY0LnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uL0Rlc2t0b3BQcm9maWxlSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vSG9tZS9mb290ZXInO1xuaW1wb3J0IEhlbG1ldFRhZ3MgZnJvbSAnLi4vLi4vY29tbW9ucy9IZWxtZXRUYWdzJ1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5cbmNsYXNzIERvY3RvcnNOZWFyTWVWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICAgIHZhciB0aXRsZSA9IHRoaXMucHJvcHMubWF0Y2gudXJsLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHRpdGxlID0gdGl0bGUuc3Vic3RyaW5nKDEsIHRpdGxlLmxlbmd0aClcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgcmVhZE1vcmU6ICdzZWFyY2gtZGV0YWlscy1kYXRhLWxlc3MnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5nZXRBcnRpY2xlTGlzdCh0aGlzLnN0YXRlLnRpdGxlLCAxLCB0cnVlKTtcbiAgICB9XG5cbiAgICB0b2dnbGVTY3JvbGwoKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWFkTW9yZTogJ3NlYXJjaC1kZXRhaWxzLWRhdGEtbGVzcycgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXAgc2l0ZW1hcC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgZHAtY29udGFpbmVyLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLkFSVElDTEVfTE9BREVEID8gPEhlbG1ldFRhZ3MgdGFnc0RhdGE9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICh0aGlzLnByb3BzLmFydGljbGVMaXN0RGF0YS5zZW8gPyB0aGlzLnByb3BzLmFydGljbGVMaXN0RGF0YS5zZW8udGl0bGUgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICh0aGlzLnByb3BzLmFydGljbGVMaXN0RGF0YS5zZW8gPyB0aGlzLnByb3BzLmFydGljbGVMaXN0RGF0YS5zZW8uZGVzY3JpcHRpb24gOiBcIlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fub25pY2FsVXJsOiBgJHtDT05GSUcuQVBJX0JBU0VfVVJMfSR7dGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZX0ke3RoaXMucHJvcHMubG9jYXRpb24uc2VhcmNofWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPiA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIG1ybmctdG9wLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1yYi0xMCBicmVhZGNydW1iLWxpc3RcIiBzdHlsZT17eyB3b3JkQnJlYWs6ICdicmVhay13b3JkJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLm9uSG9tZUNsaWNrKGUsIFwiL1wiKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwIGJyZWFkY3J1bWItdGl0bGUgYnJlYWRjcnVtYi1jb2xvcmVkLXRpdGxlXCI+SG9tZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1hcnJvd1wiPiZndDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwIGJyZWFkY3J1bWItdGl0bGVcIj57dGhpcy5wcm9wcy5hcnRpY2xlTGlzdERhdGEuY2F0ZWdvcnl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXJ0aWNsZUxpc3REYXRhLnNlYXJjaF9jb250ZW50ICYmIHRoaXMucHJvcHMuYXJ0aWNsZUxpc3REYXRhLnNlYXJjaF9jb250ZW50ICE9ICcnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgbXJ0LTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHQtY2FyZC1jb2xscGFzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnJlYWRNb3JlfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRoaXMucHJvcHMuYXJ0aWNsZUxpc3REYXRhLnNlYXJjaF9jb250ZW50IH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZWFkTW9yZSAmJiB0aGlzLnN0YXRlLnJlYWRNb3JlICE9ICcnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJkLW1vcmVcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgcmVhZE1vcmU6ICcnIH0pfT5SZWFkIE1vcmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJlYWRNb3JlID09ICcnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJkLW1vcmVcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVNjcm9sbC5iaW5kKHRoaXMpfT5SZWFkIExlc3M8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZnctNTAwIHNpdGVtYXAtdGl0bGVcIj57dGhpcy5wcm9wcy5hcnRpY2xlTGlzdERhdGEuY2F0ZWdvcnl9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzaXRlbWFwLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFydGljbGVMaXN0Lmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hcnRpY2xlTGlzdC5tYXAoKHByb3BlcnR5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTQgdGVzdHMtYnJkci1idG1cIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5jaG9yLWRhdGEtc3R5bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgLyR7cHJvcGVydHkudXJsfWB9IG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3Byb3BlcnR5LnVybH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBmb250U2l6ZTogMTQgfX0+e3Byb3BlcnR5LnRpdGxlLnNwbGl0KCd8JylbMF19PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2l0ZW1hcC1yaWdodC1hcnJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Fycm93LWZvcndhcmQtcmlnaHQuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1jZW50ZXJcIiBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0gPk5vIEFydGljbGUgRm91bmQgISE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hcnRpY2xlTGlzdERhdGEuYm90dG9tX2NvbnRlbnQgJiYgdGhpcy5wcm9wcy5hcnRpY2xlTGlzdERhdGEuYm90dG9tX2NvbnRlbnQgIT0gJycgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBtcnQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdC1jYXJkLWNvbGxwYXNlXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aGlzLnByb3BzLmFydGljbGVMaXN0RGF0YS5ib3R0b21fY29udGVudCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9jdG9yc05lYXJNZVZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBMb2FkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NUeXBlIHx8IFwibG9hZGVyQ2lyY3VsYXJcIn0gPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHAtbG9hZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlGcmFtZVBvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMTBcIj5SZWRpcmVjdGluZyB5b3UgdG8gUGhhcm1lYXN5IHdlYnNpdGUuLi48L3A+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIiwiaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9MZWZ0QmFyJ1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvUmlnaHRCYXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IEluZmluaXRlU2Nyb2xsIGZyb20gJ3JlYWN0LWluZmluaXRlLXNjcm9sbGVyJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9jb21tb25zL0xvYWRlcidcbmltcG9ydCBIZWxtZXRUYWdzIGZyb20gJy4uLy4uL2NvbW1vbnMvSGVsbWV0VGFncydcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vLi4vY29uZmlnJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9Ib21lL2Zvb3RlcidcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJylcblxuY2xhc3MgQXJ0aWNsZUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG5cdFx0dmFyIHBhZ2UgPSAxO1xuXHRcdGlmIChwYXJzZWQgJiYgcGFyc2VkLnBhZ2UpIHtcblx0XHRcdHBhZ2UgPSBwYXJzZWQucGFnZVxuXHRcdH1cblxuXHRcdHZhciB0aXRsZSA9IHRoaXMucHJvcHMubWF0Y2gudXJsLnRvTG93ZXJDYXNlKCk7XG5cdFx0dGl0bGUgPSB0aXRsZS5zdWJzdHJpbmcoMSwgdGl0bGUubGVuZ3RoKVxuXG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aGFzTW9yZTogdHJ1ZSxcblx0XHRcdHBhZ2U6IHBhZ2UsXG5cdFx0XHRzZWFyY2hWYWw6ICcnLFxuXHRcdFx0bm9BcnRpY2xlRm91bmQ6IGZhbHNlLFxuXHRcdFx0dGl0bGU6IHRpdGxlLFxuXHRcdFx0YnV0dG9uc1Zpc2libGU6IHRydWUsXG5cdFx0XHRzdGFydF9wYWdlOiBwYWdlXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0d2luZG93LnNjcm9sbFRvKDAsIDApO1xuXG5cdFx0dGhpcy5wcm9wcy5nZXRBcnRpY2xlTGlzdCh0aGlzLnN0YXRlLnRpdGxlLCB0aGlzLnN0YXRlLnBhZ2UsIHRydWUpXG5cdFx0Y29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cblx0XHRpZiAocGFyc2VkLnBhZ2UgJiYgcGFyc2VkLnBhZ2UgPT0gMSkge1xuXHRcdFx0dmFyIG5ld0hyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKCc/cGFnZT0xJywgJycpO1xuXHRcdFx0bmV3SHJlZiA9IG5ld0hyZWYucmVwbGFjZSgnJnBhZ2U9MScsICcnKTtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbmV3SHJlZjtcblx0XHR9XG5cblx0fVxuXG5cdGxvYWRNb3JlKGRlbHRhKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRoYXNNb3JlOiBmYWxzZVxuXHRcdH0sICgpID0+IHtcblx0XHRcdGxldCBwYWdlID0gcGFyc2VJbnQodGhpcy5zdGF0ZS5wYWdlKSArIGRlbHRhXG5cdFx0XHR0aGlzLnByb3BzLmdldEFydGljbGVMaXN0KHRoaXMuc3RhdGUudGl0bGUsIHBhZ2UsIHRydWUsIHRoaXMuc3RhdGUuc2VhcmNoVmFsLCAocmVzcCkgPT4ge1xuXHRcdFx0XHRpZiAocmVzcC5sZW5ndGgpIHtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdGhhc01vcmU6IHRydWUsXG5cdFx0XHRcdFx0XHRwYWdlXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRoYXNNb3JlOiBmYWxzZVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH0pXG5cblx0fVxuXG5cdGNoYW5nZVZhbChlKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzZWFyY2hWYWw6IGUudGFyZ2V0LnZhbHVlXG5cdFx0fSk7XG5cdH1cblxuXHRzZWFyY2hBcnRpY2xlKCkge1xuXHRcdGxldCBwYWdlID0gMVxuXHRcdGlmICghdGhpcy5zdGF0ZS5zZWFyY2hWYWwpIHtcblx0XHRcdHBhZ2UgPSB0aGlzLnN0YXRlLnN0YXJ0X3BhZ2Vcblx0XHR9XG5cblx0XHR0aGlzLnNldFN0YXRlKHsgcGFnZTogcGFnZSB9LCAoKSA9PiB7XG5cdFx0XHR0aGlzLnByb3BzLmdldEFydGljbGVMaXN0KHRoaXMuc3RhdGUudGl0bGUsIHRoaXMuc3RhdGUucGFnZSwgdHJ1ZSwgdGhpcy5zdGF0ZS5zZWFyY2hWYWwsIChyZXNwKSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRoYXNNb3JlOiBmYWxzZSxcblx0XHRcdFx0XHRcdG5vQXJ0aWNsZUZvdW5kOiB0cnVlXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRoYXNNb3JlOiB0cnVlLFxuXHRcdFx0XHRcdFx0bm9BcnRpY2xlRm91bmQ6IGZhbHNlXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodGhpcy5zdGF0ZS5zZWFyY2hWYWwpIHtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdGJ1dHRvbnNWaXNpYmxlOiBmYWxzZVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0YnV0dG9uc1Zpc2libGU6IHRydWVcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSlcblx0fVxuXG5cdGhhbmRsZUtleVVwKGUpIHtcblx0XHRpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcblx0XHRcdHRoaXMuc2VhcmNoQXJ0aWNsZSgpO1xuXHRcdH1cblx0fVxuXG5cdG5hdmlnYXRlKGRlbHRhID0gMCwgZSkge1xuXHRcdC8vIGUucHJldmVudERlZmF1bHQoKVxuXHRcdC8vIGUuc3RvcFByb3BhZ2F0aW9uKClcblx0XHQvLyB0aGlzLmxvYWRNb3JlKGRlbHRhKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBwYWdlX3NpemUgPSA1MFxuXHRcdHZhciBwYWdlTm8gPSBwYXJzZUludCh0aGlzLnN0YXRlLnBhZ2UpO1xuXHRcdGxldCBjdXJyZW50UGFnZSA9IFtdXG5cdFx0Y3VycmVudFBhZ2UucHVzaCg8ZGl2IGNsYXNzTmFtZT1cImFydC1wYWdpbmF0aW9uLWJ0blwiPlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwXCIgc3R5bGU9e3sgY29sb3I6ICcjMDAwJyB9fT57cGFnZU5vfTwvc3Bhbj5cblx0XHQ8L2Rpdj4pXG5cblx0XHRsZXQgcGxhY2VIb2xkZXIgPSAnU2VhcmNoIGFueSAnXG5cdFx0aWYgKHRoaXMucHJvcHMuYXJ0aWNsZUxpc3REYXRhICYmIHRoaXMucHJvcHMuYXJ0aWNsZUxpc3REYXRhLmNhdGVnb3J5KSB7XG5cdFx0XHRwbGFjZUhvbGRlciA9IHBsYWNlSG9sZGVyICsgdGhpcy5wcm9wcy5hcnRpY2xlTGlzdERhdGEuY2F0ZWdvcnkuc3BsaXQoJyAnKVswXVxuXHRcdH1cblxuXHRcdGxldCBoZWFkaW5nID0gXCJcIlxuXHRcdGxldCB1cmwgPSB0aGlzLnByb3BzLm1hdGNoLnVybC50b0xvd2VyQ2FzZSgpXG5cdFx0aWYgKHVybCA9PSAnL2FsbC1kaXNlYXNlcycpIHtcblx0XHRcdGhlYWRpbmcgPSBcIkFsbCBEaXNlYXNlc1wiXG5cdFx0fSBlbHNlIGlmICh1cmwgPT0gJy9hbGwtbWVkaWNpbmVzJykge1xuXHRcdFx0aGVhZGluZyA9IFwiQWxsIE1lZGljaW5lc1wiXG5cdFx0fSBlbHNlIHtcblx0XHRcdGhlYWRpbmcgPSBcIkFsbCBBcnRpY2xlc1wiXG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cblx0XHRcdFx0PFByb2ZpbGVIZWFkZXIgLz5cblx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRhaW5lci10b3AtbWFyZ2luXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG5cdFx0XHRcdFx0XHQ8TGVmdEJhciAvPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTcgY2VudGVyLWNvbHVtblwiPlxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5BUlRJQ0xFX0xPQURFRCA/IDxIZWxtZXRUYWdzIHRhZ3NEYXRhPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogKHRoaXMucHJvcHMuYXJ0aWNsZUxpc3REYXRhLnNlbyA/IHRoaXMucHJvcHMuYXJ0aWNsZUxpc3REYXRhLnNlby50aXRsZSA6IFwiXCIpLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRpb246ICh0aGlzLnByb3BzLmFydGljbGVMaXN0RGF0YS5zZW8gPyB0aGlzLnByb3BzLmFydGljbGVMaXN0RGF0YS5zZW8uZGVzY3JpcHRpb24gOiBcIlwiKSxcblx0XHRcdFx0XHRcdFx0XHRcdGNhbm9uaWNhbFVybDogYCR7Q09ORklHLkFQSV9CQVNFX1VSTH0ke3RoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWV9JHt0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaH1gLFxuXG5cdFx0XHRcdFx0XHRcdFx0XHRwcmV2OiBgJHsocGFnZU5vICE9IDEgJiYgcGFnZU5vIDw9IE1hdGguY2VpbCh0aGlzLnByb3BzLmFydGljbGVMaXN0RGF0YS50b3RhbF9hcnRpY2xlcyAvIHBhZ2Vfc2l6ZSkpID8gYCR7Q09ORklHLkFQSV9CQVNFX1VSTH0ke3RoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWV9JHsocGFnZU5vID4gMiAmJiBwYWdlTm8gPD0gTWF0aC5jZWlsKHRoaXMucHJvcHMuYXJ0aWNsZUxpc3REYXRhLnRvdGFsX2FydGljbGVzIC8gcGFnZV9zaXplKSkgPyAnP3BhZ2U9JyArIChwYWdlTm8gLSAxKSA6ICcnfWAgOiAnJ31gLFxuXG5cdFx0XHRcdFx0XHRcdFx0XHRuZXh0OiBgJHsocGFnZU5vICE9IE1hdGguY2VpbCh0aGlzLnByb3BzLmFydGljbGVMaXN0RGF0YS50b3RhbF9hcnRpY2xlcyAvIHBhZ2Vfc2l6ZSkgJiYgcGFnZU5vIDw9IE1hdGguY2VpbCh0aGlzLnByb3BzLmFydGljbGVMaXN0RGF0YS50b3RhbF9hcnRpY2xlcyAvIHBhZ2Vfc2l6ZSkpID8gYCR7Q09ORklHLkFQSV9CQVNFX1VSTH0ke3RoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWV9P3BhZ2U9JHsocGFnZU5vID49IDEgJiYgcGFnZU5vIDwgTWF0aC5jZWlsKHRoaXMucHJvcHMuYXJ0aWNsZUxpc3REYXRhLnRvdGFsX2FydGljbGVzIC8gcGFnZV9zaXplKSkgPyBwYWdlTm8gKyAxIDogJyd9YCA6ICcnfWBcblx0XHRcdFx0XHRcdFx0XHR9fSAvPiA6IG51bGxcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtYWluLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibXJiLTEwIGJyZWFkY3J1bWItbGlzdFwiIHN0eWxlPXt7IHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWxpc3QtaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIi9cIiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5vbkhvbWVDbGljayhlLCBcIi9cIil9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmdy01MDAgYnJlYWRjcnVtYi10aXRsZSBicmVhZGNydW1iLWNvbG9yZWQtdGl0bGVcIj5Ib21lPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1hcnJvd1wiPiZndDs8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItbGlzdC1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmdy01MDAgYnJlYWRjcnVtYi10aXRsZVwiPnt0aGlzLnByb3BzLmFydGljbGVMaXN0RGF0YS5jYXRlZ29yeX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJkaXNlYXNlLXNlYXJjaFwiIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFZhbH0gY2xhc3NOYW1lPVwiYXJ0LXNlYXJjaGJhclwiIHBsYWNlaG9sZGVyPXtwbGFjZUhvbGRlcn0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmNoYW5nZVZhbChlKX0gb25LZXlVcD17KGUpID0+IHRoaXMuaGFuZGxlS2V5VXAoZSl9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYXJ0LXNlYXJjaC1idG5cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNlYXJjaEFydGljbGUoKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltYWdlcy9zZWFyY2guc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0yMFwiIHN0eWxlPXt7IGZvbnRTaXplOiAyMiB9fSA+e2hlYWRpbmd9PC9oMT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IG1ydC0yMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLkFSVElDTEVfTE9BREVEID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5hcnRpY2xlTGlzdC5sZW5ndGggJiYgIXRoaXMuc3RhdGUubm9BcnRpY2xlRm91bmQgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuYXJ0aWNsZUxpc3QubWFwKChwcm9wZXJ0eSwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiIGtleT17aW5kZXh9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBkaXNlYXNlLXdpZGdldFwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHtwcm9wZXJ0eS51cmx9YCl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHByb3BlcnR5LmhlYWRlcl9pbWFnZSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiZGlzZWFzZS1saXN0LWltZ1wiIHNyYz17cHJvcGVydHkuaGVhZGVyX2ltYWdlfSBhbHQ9e3Byb3BlcnR5LmhlYWRlcl9pbWFnZV9hbHR9IC8+IDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj17YC8ke3Byb3BlcnR5LnVybH1gfSBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT48aDIgY2xhc3NOYW1lPVwiZGlzZWFzZS1saXN0LW5hbWUgZnctNTAwXCI+e3Byb3BlcnR5LnRpdGxlfTwvaDI+PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcHJvcGVydHkuYXJ0aWNsZVRlYXNlciB9fT48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSkgOiA8cCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1jZW50ZXJcIiBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0gPk5vIEFydGljbGUgRm91bmQgISE8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5hcnRpY2xlTGlzdC5sZW5ndGggJiYgIXRoaXMuc3RhdGUubm9BcnRpY2xlRm91bmQgJiYgdGhpcy5zdGF0ZS5idXR0b25zVmlzaWJsZSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFnZU5vID09IDEgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXJ0LXBhZ2luYXRpb24tZGl2XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Y3VycmVudFBhZ2V9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBvbkNsaWNrPXt0aGlzLm5hdmlnYXRlLmJpbmQodGhpcywgMSl9IGhyZWY9e2Ake3RoaXMuc3RhdGUudGl0bGV9P3BhZ2U9JHtwYWdlTm8gKyAxfWB9ID5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhcnQtcGFnaW5hdGlvbi1idG5cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmdy01MDBcIj57cGFnZU5vICsgMX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogKHBhZ2VObyA9PSBNYXRoLmNlaWwodGhpcy5wcm9wcy5hcnRpY2xlTGlzdERhdGEudG90YWxfYXJ0aWNsZXMgLyBwYWdlX3NpemUpKSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFydC1wYWdpbmF0aW9uLWRpdlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtgJHt0aGlzLnN0YXRlLnRpdGxlfT9wYWdlPSR7cGFnZU5vIC0gMX1gfSBvbkNsaWNrPXt0aGlzLm5hdmlnYXRlLmJpbmQodGhpcywgLTEpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFydC1wYWdpbmF0aW9uLWJ0blwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwXCI+e3BhZ2VObyAtIDF9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtjdXJyZW50UGFnZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiA8ZGl2IGNsYXNzTmFtZT1cImFydC1wYWdpbmF0aW9uLWRpdlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBvbkNsaWNrPXt0aGlzLm5hdmlnYXRlLmJpbmQodGhpcywgcGFnZU5vID09IDIgPyAtMSA6IC0xKX0gaHJlZj17YCR7cGFnZU5vID09IDIgPyBgJHt0aGlzLnN0YXRlLnRpdGxlfWAgOiBgJHt0aGlzLnN0YXRlLnRpdGxlfT9wYWdlPSR7cGFnZU5vIC0gMX1gfWB9ID5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFydC1wYWdpbmF0aW9uLWJ0blwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwXCI+e3BhZ2VObyAtIDF9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2N1cnJlbnRQYWdlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtgJHt0aGlzLnN0YXRlLnRpdGxlfT9wYWdlPSR7cGFnZU5vICsgMX1gfSBvbkNsaWNrPXt0aGlzLm5hdmlnYXRlLmJpbmQodGhpcywgMSl9ID5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFydC1wYWdpbmF0aW9uLWJ0blwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwXCI+e3BhZ2VObyArIDF9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4gOiBcIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+IDogPExvYWRlciAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8UmlnaHRCYXIgbm9DaGF0QnV0dG9uPXt0cnVlfSBtc2dUZW1wbGF0ZT1cImdvbGRfdGVtcGxhdGVfMVwiLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0XHQ8L2RpdiA+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlTGlzdCIsImltcG9ydCBBcnRpY2xlTGlzdFZpZXcgZnJvbSAnLi9hcnRpY2xlTGlzdCdcblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZUxpc3RWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBBcnRpY2xlTGlzdFZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL2FydGljbGVMaXN0J1xuaW1wb3J0IHsgZ2V0QXJ0aWNsZUxpc3QsIGdldFNwZWNpYWxpdHlGb290ZXJEYXRhIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBEb2N0b3JzTmVhck1lVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvRG9jdG9yc05lYXJNZS9Eb2N0b3JzTmVhck1lVmlldyc7XG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG5cbmNsYXNzIEFydGljbGVMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBhZ2VObzogMVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWREYXRhKHN0b3JlLCBtYXRjaCwgcXVlcnkpIHtcbiAgICAgICAgbGV0IHRpdGxlID0gbWF0Y2gudXJsXG4gICAgICAgIHRpdGxlID0gdGl0bGUuc3Vic3RyaW5nKDEsIHRpdGxlLmxlbmd0aCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKHF1ZXJ5LnBhZ2UpIHtcbiAgICAgICAgICAgIHF1ZXJ5ID0gcXVlcnkucGFnZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcXVlcnkgPSAxXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtzdG9yZS5kaXNwYXRjaChnZXRBcnRpY2xlTGlzdCh0aXRsZSwgcXVlcnkpKV0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdFswXVxuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh7fSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0Lmxlbmd0aCA9PSAwICYmIHF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh7fSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGdldFNwZWNpYWxpdHlGb290ZXJEYXRhKChmb290ZXJEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHJlc29sdmUoeyBmb290ZXJEYXRhOiAoZm9vdGVyRGF0YSB8fCBudWxsKSB9KVxuICAgICAgICAgICAgICAgIC8vIH0pKClcbiAgICAgICAgICAgICAgICByZXNvbHZlKHt9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcm91dGVyOiAoKSA9PiBudWxsXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubWF0Y2gudXJsID09PSBcIi9kb2N0b3JzLW5lYXItbWVcIiA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8RG9jdG9yc05lYXJNZVZpZXcgey4uLnRoaXMucHJvcHN9IC8+IDogPEFydGljbGVMaXN0VmlldyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcGFzc2VkUHJvcHMpID0+IHtcbiAgICAvKipcbiAgICAgKiBpbml0aWFsU2VydmVyRGF0YSBpcyBzZXJ2ZXIgcmVuZGVyZWQgYXN5bmMgZGF0YSByZXF1aXJlZCBidWlsZCBodG1sIG9uIHNlcnZlci4gXG4gICAgICovXG4gICAgbGV0IGluaXRpYWxTZXJ2ZXJEYXRhID0gbnVsbFxuICAgIGxldCB7IHN0YXRpY0NvbnRleHQgfSA9IHBhc3NlZFByb3BzXG4gICAgaWYgKHN0YXRpY0NvbnRleHQgJiYgc3RhdGljQ29udGV4dC5kYXRhKSB7XG4gICAgICAgIGluaXRpYWxTZXJ2ZXJEYXRhID0gc3RhdGljQ29udGV4dC5kYXRhXG4gICAgfVxuXG4gICAgbGV0IHtcbiAgICAgICAgYXJ0aWNsZUxpc3QsXG4gICAgICAgIGFydGljbGVMaXN0RGF0YSxcbiAgICAgICAgQVJUSUNMRV9MT0FERUQsXG4gICAgICAgIHBhZ2VCdXR0b25Db3VudCxcbiAgICAgICAgYXJ0aWNsZVBhZ2VDb3VudFxuICAgIH0gPSBzdGF0ZS5VU0VSXG5cbiAgICBsZXQge1xuICAgICAgICBzdGF0aWNfZm9vdGVyX2RhdGFcbiAgICB9ID0gc3RhdGUuRE9DVE9SX1NFQVJDSFxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhcnRpY2xlTGlzdCxcbiAgICAgICAgYXJ0aWNsZUxpc3REYXRhLFxuICAgICAgICBBUlRJQ0xFX0xPQURFRCxcbiAgICAgICAgcGFnZUJ1dHRvbkNvdW50LFxuICAgICAgICBhcnRpY2xlUGFnZUNvdW50LFxuICAgICAgICBpbml0aWFsU2VydmVyRGF0YSxcbiAgICAgICAgc3RhdGljX2Zvb3Rlcl9kYXRhXG5cbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldEFydGljbGVMaXN0OiAodGl0bGUsIHBhZ2UsIHJlcGxhY2VMaXN0LCBzZWFyY2hTdHJpbmcsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChnZXRBcnRpY2xlTGlzdCh0aXRsZSwgcGFnZSwgcmVwbGFjZUxpc3QsIHNlYXJjaFN0cmluZywgY2FsbGJhY2spKSxcbiAgICAgICAgZ2V0U3BlY2lhbGl0eUZvb3RlckRhdGE6IChjYikgPT4gZGlzcGF0Y2goZ2V0U3BlY2lhbGl0eUZvb3RlckRhdGEoY2IpKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXJ0aWNsZUxpc3QpOyJdLCJzb3VyY2VSb290IjoiIn0=