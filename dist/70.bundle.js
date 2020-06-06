(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DoctorsNearMeView = function (_React$Component) {
    _inherits(DoctorsNearMeView, _React$Component);

    function DoctorsNearMeView(props) {
        _classCallCheck(this, DoctorsNearMeView);

        var _this = _possibleConstructorReturn(this, (DoctorsNearMeView.__proto__ || Object.getPrototypeOf(DoctorsNearMeView)).call(this, props));

        var title = _this.props.match.url.toLowerCase();
        title = title.substring(1, title.length);

        _this.state = {
            title: title,
            readMore: 'search-details-data-less'
        };
        return _this;
    }

    _createClass(DoctorsNearMeView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (window) {
                window.scrollTo(0, 0);
            }
            this.props.getArticleList(this.state.title, 1, true);
        }
    }, {
        key: 'toggleScroll',
        value: function toggleScroll() {
            if (window) {
                window.scrollTo(0, 0);
            }
            this.setState({ readMore: 'search-details-data-less' });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

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
                                canonicalUrl: '' + _config2.default.API_BASE_URL + this.props.location.pathname + this.props.location.search
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
                                        { href: '/', onClick: function onClick(e) {
                                                return _this2.onHomeClick(e, "/");
                                            } },
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
                                    { className: 'rd-more', onClick: function onClick() {
                                            return _this2.setState({ readMore: '' });
                                        } },
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
                                this.props.articleList.length ? this.props.articleList.map(function (property, index) {
                                    return _react2.default.createElement(
                                        'div',
                                        { className: 'col-12 col-md-6 col-lg-4 tests-brdr-btm', key: index },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'anchor-data-style' },
                                            _react2.default.createElement(
                                                'a',
                                                { href: '/' + property.url, onClick: function onClick(e) {
                                                        e.preventDefault();
                                                        _this2.props.history.push('/' + property.url);
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
    }]);

    return DoctorsNearMeView;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loader = function (_React$Component) {
    _inherits(Loader, _React$Component);

    function Loader(props) {
        _classCallCheck(this, Loader);

        return _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).call(this, props));
    }

    _createClass(Loader, [{
        key: "render",
        value: function render() {

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
    }]);

    return Loader;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _reactInfiniteScroller = __webpack_require__(/*! react-infinite-scroller */ "./node_modules/react-infinite-scroller/index.js");

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var ArticleList = function (_React$Component) {
	_inherits(ArticleList, _React$Component);

	function ArticleList(props) {
		_classCallCheck(this, ArticleList);

		var _this = _possibleConstructorReturn(this, (ArticleList.__proto__ || Object.getPrototypeOf(ArticleList)).call(this, props));

		var parsed = queryString.parse(_this.props.location.search);

		var page = 1;
		if (parsed && parsed.page) {
			page = parsed.page;
		}

		var title = _this.props.match.url.toLowerCase();
		title = title.substring(1, title.length);

		_this.state = {
			hasMore: true,
			page: page,
			searchVal: '',
			noArticleFound: false,
			title: title,
			buttonsVisible: true,
			start_page: page
		};
		return _this;
	}

	_createClass(ArticleList, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			window.scrollTo(0, 0);

			this.props.getArticleList(this.state.title, this.state.page, true);
			var parsed = queryString.parse(this.props.location.search);

			if (parsed.page && parsed.page == 1) {
				var newHref = window.location.href.replace('?page=1', '');
				newHref = newHref.replace('&page=1', '');
				window.location.href = newHref;
			}
		}
	}, {
		key: 'loadMore',
		value: function loadMore(delta) {
			var _this2 = this;

			this.setState({
				hasMore: false
			}, function () {
				var page = parseInt(_this2.state.page) + delta;
				_this2.props.getArticleList(_this2.state.title, page, true, _this2.state.searchVal, function (resp) {
					if (resp.length) {
						_this2.setState({
							hasMore: true,
							page: page
						});
					} else {
						_this2.setState({
							hasMore: false
						});
					}
				});
			});
		}
	}, {
		key: 'changeVal',
		value: function changeVal(e) {
			this.setState({
				searchVal: e.target.value
			});
		}
	}, {
		key: 'searchArticle',
		value: function searchArticle() {
			var _this3 = this;

			var page = 1;
			if (!this.state.searchVal) {
				page = this.state.start_page;
			}

			this.setState({ page: page }, function () {
				_this3.props.getArticleList(_this3.state.title, _this3.state.page, true, _this3.state.searchVal, function (resp) {
					if (resp.length == 0) {
						_this3.setState({
							hasMore: false,
							noArticleFound: true
						});
					} else {
						_this3.setState({
							hasMore: true,
							noArticleFound: false
						});
					}

					if (_this3.state.searchVal) {
						_this3.setState({
							buttonsVisible: false
						});
					} else {
						_this3.setState({
							buttonsVisible: true
						});
					}
				});
			});
		}
	}, {
		key: 'handleKeyUp',
		value: function handleKeyUp(e) {
			if (e.key === 'Enter') {
				this.searchArticle();
			}
		}
	}, {
		key: 'navigate',
		value: function navigate() {
			// e.preventDefault()
			// e.stopPropagation()
			// this.loadMore(delta)

			var delta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
			var e = arguments[1];
		}
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			var page_size = 50;
			var pageNo = parseInt(this.state.page);
			var currentPage = [];
			currentPage.push(_react2.default.createElement(
				'div',
				{ className: 'art-pagination-btn' },
				_react2.default.createElement(
					'span',
					{ className: 'fw-500', style: { color: '#000' } },
					pageNo
				)
			));

			var placeHolder = 'Search any ';
			if (this.props.articleListData && this.props.articleListData.category) {
				placeHolder = placeHolder + this.props.articleListData.category.split(' ')[0];
			}

			var heading = "";
			var url = this.props.match.url.toLowerCase();
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
									canonicalUrl: '' + _config2.default.API_BASE_URL + this.props.location.pathname + this.props.location.search,

									prev: '' + (pageNo != 1 && pageNo <= Math.ceil(this.props.articleListData.total_articles / page_size) ? '' + _config2.default.API_BASE_URL + this.props.location.pathname + (pageNo > 2 && pageNo <= Math.ceil(this.props.articleListData.total_articles / page_size) ? '?page=' + (pageNo - 1) : '') : ''),

									next: '' + (pageNo != Math.ceil(this.props.articleListData.total_articles / page_size) && pageNo <= Math.ceil(this.props.articleListData.total_articles / page_size) ? '' + _config2.default.API_BASE_URL + this.props.location.pathname + '?page=' + (pageNo >= 1 && pageNo < Math.ceil(this.props.articleListData.total_articles / page_size) ? pageNo + 1 : '') : '')
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
													{ href: '/', onClick: function onClick(e) {
															return _this4.onHomeClick(e, "/");
														} },
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
										_react2.default.createElement('input', { type: 'text', id: 'disease-search', value: this.state.searchVal, className: 'art-searchbar', placeholder: placeHolder, onChange: function onChange(e) {
												return _this4.changeVal(e);
											}, onKeyUp: function onKeyUp(e) {
												return _this4.handleKeyUp(e);
											} }),
										_react2.default.createElement(
											'button',
											{ className: 'art-search-btn', onClick: function onClick() {
													return _this4.searchArticle();
												} },
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
										this.props.articleList.length && !this.state.noArticleFound ? this.props.articleList.map(function (property, index) {
											return _react2.default.createElement(
												'div',
												{ className: 'col-12', key: index },
												_react2.default.createElement(
													'div',
													{ className: 'widget disease-widget', onClick: function onClick() {
															return _this4.props.history.push('/' + property.url);
														} },
													property.header_image ? _react2.default.createElement('img', { className: 'disease-list-img', src: property.header_image, alt: property.header_image_alt }) : '',
													_react2.default.createElement(
														'a',
														{ href: '/' + property.url, onClick: function onClick(e) {
																return e.preventDefault();
															} },
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
													{ onClick: this.navigate.bind(this, 1), href: this.state.title + '?page=' + (pageNo + 1) },
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
													{ href: this.state.title + '?page=' + (pageNo - 1), onClick: this.navigate.bind(this, -1) },
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
													{ onClick: this.navigate.bind(this, pageNo == 2 ? -1 : -1), href: '' + (pageNo == 2 ? '' + this.state.title : this.state.title + '?page=' + (pageNo - 1)) },
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
													{ href: this.state.title + '?page=' + (pageNo + 1), onClick: this.navigate.bind(this, 1) },
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
	}]);

	return ArticleList;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _articleList = __webpack_require__(/*! ../../components/commons/articleList */ "./dev/js/components/commons/articleList/index.js");

var _articleList2 = _interopRequireDefault(_articleList);

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _DoctorsNearMeView = __webpack_require__(/*! ../../components/commons/DoctorsNearMe/DoctorsNearMeView */ "./dev/js/components/commons/DoctorsNearMe/DoctorsNearMeView.js");

var _DoctorsNearMeView2 = _interopRequireDefault(_DoctorsNearMeView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var ArticleList = function (_React$Component) {
    _inherits(ArticleList, _React$Component);

    function ArticleList(props) {
        _classCallCheck(this, ArticleList);

        var _this = _possibleConstructorReturn(this, (ArticleList.__proto__ || Object.getPrototypeOf(ArticleList)).call(this, props));

        _this.state = {
            pageNo: 1
        };
        return _this;
    }

    _createClass(ArticleList, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.props.match.url === "/doctors-near-me" ? _react2.default.createElement(_DoctorsNearMeView2.default, this.props) : _react2.default.createElement(_articleList2.default, this.props)
            );
        }
    }], [{
        key: 'loadData',
        value: function loadData(store, match, query) {
            var title = match.url;
            title = title.substring(1, title.length).toLowerCase();
            if (query.page) {
                query = query.page;
            } else {
                query = 1;
            }
            return new Promise(function (resolve, reject) {
                Promise.all([store.dispatch((0, _index.getArticleList)(title, query))]).then(function (result) {
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
                }).catch(function (e) {
                    reject();
                });
            });
        }
    }]);

    return ArticleList;
}(_react2.default.Component);

ArticleList.contextTypes = {
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
        articleList = _state$USER.articleList,
        articleListData = _state$USER.articleListData,
        ARTICLE_LOADED = _state$USER.ARTICLE_LOADED,
        pageButtonCount = _state$USER.pageButtonCount,
        articlePageCount = _state$USER.articlePageCount;
    var static_footer_data = state.DOCTOR_SEARCH.static_footer_data;


    return {
        articleList: articleList,
        articleListData: articleListData,
        ARTICLE_LOADED: ARTICLE_LOADED,
        pageButtonCount: pageButtonCount,
        articlePageCount: articlePageCount,
        initialServerData: initialServerData,
        static_footer_data: static_footer_data

    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        getArticleList: function getArticleList(title, page, replaceList, searchString, callback) {
            return dispatch((0, _index.getArticleList)(title, page, replaceList, searchString, callback));
        },
        getSpecialityFooterData: function getSpecialityFooterData(cb) {
            return dispatch((0, _index.getSpecialityFooterData)(cb));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ArticleList);

/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/react-router/es/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-router/es/index.js ***!
  \***********************************************/
/*! exports provided: MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, withRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MemoryRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MemoryRouter */ "./node_modules/react-router/es/MemoryRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return _MemoryRouter__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Prompt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Prompt */ "./node_modules/react-router/es/Prompt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return _Prompt__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Redirect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Redirect */ "./node_modules/react-router/es/Redirect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return _Redirect__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Route */ "./node_modules/react-router/es/Route.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return _Route__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Router */ "./node_modules/react-router/es/Router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _Router__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _StaticRouter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StaticRouter */ "./node_modules/react-router/es/StaticRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return _StaticRouter__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Switch */ "./node_modules/react-router/es/Switch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _Switch__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _generatePath__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./generatePath */ "./node_modules/react-router/es/generatePath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return _generatePath__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _matchPath__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./matchPath */ "./node_modules/react-router/es/matchPath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return _matchPath__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _withRouter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withRouter */ "./node_modules/react-router/es/withRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return _withRouter__WEBPACK_IMPORTED_MODULE_9__["default"]; });






















/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0RvY3RvcnNOZWFyTWUvRG9jdG9yc05lYXJNZVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvTG9hZGVyLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvTG9hZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvYXJ0aWNsZUxpc3QvYXJ0aWNsZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9hcnRpY2xlTGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9jb21tb25zL2FydGljbGVMaXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wYXRoLWJyb3dzZXJpZnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9lcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJEb2N0b3JzTmVhck1lVmlldyIsInByb3BzIiwidGl0bGUiLCJtYXRjaCIsInVybCIsInRvTG93ZXJDYXNlIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwic3RhdGUiLCJyZWFkTW9yZSIsIndpbmRvdyIsInNjcm9sbFRvIiwiZ2V0QXJ0aWNsZUxpc3QiLCJzZXRTdGF0ZSIsIkFSVElDTEVfTE9BREVEIiwiYXJ0aWNsZUxpc3REYXRhIiwic2VvIiwiZGVzY3JpcHRpb24iLCJjYW5vbmljYWxVcmwiLCJDT05GSUciLCJBUElfQkFTRV9VUkwiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic2VhcmNoIiwid29yZEJyZWFrIiwiZSIsIm9uSG9tZUNsaWNrIiwiY2F0ZWdvcnkiLCJzZWFyY2hfY29udGVudCIsIl9faHRtbCIsInRvZ2dsZVNjcm9sbCIsImJpbmQiLCJhcnRpY2xlTGlzdCIsIm1hcCIsInByb3BlcnR5IiwiaW5kZXgiLCJwcmV2ZW50RGVmYXVsdCIsImhpc3RvcnkiLCJwdXNoIiwiZm9udFNpemUiLCJzcGxpdCIsIkFTU0VUU19CQVNFX1VSTCIsImJvdHRvbV9jb250ZW50IiwiUmVhY3QiLCJDb21wb25lbnQiLCJMb2FkZXIiLCJjbGFzc1R5cGUiLCJpRnJhbWVQb3B1cCIsInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIkFydGljbGVMaXN0IiwicGFyc2VkIiwicGFyc2UiLCJwYWdlIiwiaGFzTW9yZSIsInNlYXJjaFZhbCIsIm5vQXJ0aWNsZUZvdW5kIiwiYnV0dG9uc1Zpc2libGUiLCJzdGFydF9wYWdlIiwibmV3SHJlZiIsImhyZWYiLCJyZXBsYWNlIiwiZGVsdGEiLCJwYXJzZUludCIsInJlc3AiLCJ0YXJnZXQiLCJ2YWx1ZSIsImtleSIsInNlYXJjaEFydGljbGUiLCJwYWdlX3NpemUiLCJwYWdlTm8iLCJjdXJyZW50UGFnZSIsImNvbG9yIiwicGxhY2VIb2xkZXIiLCJoZWFkaW5nIiwicHJldiIsIk1hdGgiLCJjZWlsIiwidG90YWxfYXJ0aWNsZXMiLCJuZXh0IiwiY2hhbmdlVmFsIiwiaGFuZGxlS2V5VXAiLCJ3aWR0aCIsImhlYWRlcl9pbWFnZSIsImhlYWRlcl9pbWFnZV9hbHQiLCJhcnRpY2xlVGVhc2VyIiwibmF2aWdhdGUiLCJBcnRpY2xlTGlzdFZpZXciLCJzdG9yZSIsInF1ZXJ5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhbGwiLCJkaXNwYXRjaCIsInRoZW4iLCJyZXN1bHQiLCJjYXRjaCIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsInBhc3NlZFByb3BzIiwiaW5pdGlhbFNlcnZlckRhdGEiLCJzdGF0aWNDb250ZXh0IiwiZGF0YSIsIlVTRVIiLCJwYWdlQnV0dG9uQ291bnQiLCJhcnRpY2xlUGFnZUNvdW50Iiwic3RhdGljX2Zvb3Rlcl9kYXRhIiwiRE9DVE9SX1NFQVJDSCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsInJlcGxhY2VMaXN0Iiwic2VhcmNoU3RyaW5nIiwiY2FsbGJhY2siLCJnZXRTcGVjaWFsaXR5Rm9vdGVyRGF0YSIsImNiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsaUI7OztBQUVGLCtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMElBQ1RBLEtBRFM7O0FBR2YsWUFBSUMsUUFBUSxNQUFLRCxLQUFMLENBQVdFLEtBQVgsQ0FBaUJDLEdBQWpCLENBQXFCQyxXQUFyQixFQUFaO0FBQ0FILGdCQUFRQSxNQUFNSSxTQUFOLENBQWdCLENBQWhCLEVBQW1CSixNQUFNSyxNQUF6QixDQUFSOztBQUVBLGNBQUtDLEtBQUwsR0FBYTtBQUNUTixtQkFBT0EsS0FERTtBQUVUTyxzQkFBVTtBQUZELFNBQWI7QUFOZTtBQVVsQjs7Ozs0Q0FFbUI7QUFDaEIsZ0JBQUlDLE1BQUosRUFBWTtBQUNSQSx1QkFBT0MsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNIO0FBQ0QsaUJBQUtWLEtBQUwsQ0FBV1csY0FBWCxDQUEwQixLQUFLSixLQUFMLENBQVdOLEtBQXJDLEVBQTRDLENBQTVDLEVBQStDLElBQS9DO0FBQ0g7Ozt1Q0FFYztBQUNYLGdCQUFJUSxNQUFKLEVBQVk7QUFDUkEsdUJBQU9DLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDSDtBQUNELGlCQUFLRSxRQUFMLENBQWMsRUFBRUosVUFBVSwwQkFBWixFQUFkO0FBQ0g7OztpQ0FFUTtBQUFBOztBQUVMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLGdDQUFmO0FBQ0ksOENBQUMsOEJBQUQsT0FESjtBQUVJO0FBQUE7QUFBQSxzQkFBUyxXQUFVLDRCQUFuQjtBQUNJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLGlDQUFmO0FBRVEsNkJBQUtSLEtBQUwsQ0FBV2EsY0FBWCxHQUE0Qiw4QkFBQyxvQkFBRCxJQUFZLFVBQVU7QUFD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Q0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixRQUFRO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixRQUFRO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3U0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkM7QUFDRjtBQUNWO0FBQ0Y7QUFDTTtBQUNGO0FBQ0o7QUFDRjtBQUNJO0FBQ0Y7QUFDYztBQUNGO0FBQ1Y7QUFDRjtBQUNjO0FBQ0Y7QUFDSjtBQUNGO0FBQ0kiLCJmaWxlIjoiNzAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vRGVza3RvcFByb2ZpbGVIZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9Ib21lL2Zvb3Rlcic7XG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi8uLi9jb21tb25zL0hlbG1ldFRhZ3MnXG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uLy4uL2NvbmZpZydcblxuY2xhc3MgRG9jdG9yc05lYXJNZVZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgICAgdmFyIHRpdGxlID0gdGhpcy5wcm9wcy5tYXRjaC51cmwudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdGl0bGUgPSB0aXRsZS5zdWJzdHJpbmcoMSwgdGl0bGUubGVuZ3RoKVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICByZWFkTW9yZTogJ3NlYXJjaC1kZXRhaWxzLWRhdGEtbGVzcydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLmdldEFydGljbGVMaXN0KHRoaXMuc3RhdGUudGl0bGUsIDEsIHRydWUpO1xuICAgIH1cblxuICAgIHRvZ2dsZVNjcm9sbCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlYWRNb3JlOiAnc2VhcmNoLWRldGFpbHMtZGF0YS1sZXNzJyB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcCBzaXRlbWFwLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciAvPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBkcC1jb250YWluZXItZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuQVJUSUNMRV9MT0FERUQgPyA8SGVsbWV0VGFncyB0YWdzRGF0YT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogKHRoaXMucHJvcHMuYXJ0aWNsZUxpc3REYXRhLnNlbyA/IHRoaXMucHJvcHMuYXJ0aWNsZUxpc3REYXRhLnNlby50aXRsZSA6IFwiXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogKHRoaXMucHJvcHMuYXJ0aWNsZUxpc3REYXRhLnNlbyA/IHRoaXMucHJvcHMuYXJ0aWNsZUxpc3REYXRhLnNlby5kZXNjcmlwdGlvbiA6IFwiXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5vbmljYWxVcmw6IGAke0NPTkZJRy5BUElfQkFTRV9VUkx9JHt0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lfSR7dGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2h9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+IDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgbXJuZy10b3AtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXJiLTEwIGJyZWFkY3J1bWItbGlzdFwiIHN0eWxlPXt7IHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgb25DbGljaz17KGUpID0+IHRoaXMub25Ib21lQ2xpY2soZSwgXCIvXCIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDAgYnJlYWRjcnVtYi10aXRsZSBicmVhZGNydW1iLWNvbG9yZWQtdGl0bGVcIj5Ib21lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmVhZGNydW1iLWFycm93XCI+Jmd0Ozwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDAgYnJlYWRjcnVtYi10aXRsZVwiPnt0aGlzLnByb3BzLmFydGljbGVMaXN0RGF0YS5jYXRlZ29yeX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hcnRpY2xlTGlzdERhdGEuc2VhcmNoX2NvbnRlbnQgJiYgdGhpcy5wcm9wcy5hcnRpY2xlTGlzdERhdGEuc2VhcmNoX2NvbnRlbnQgIT0gJycgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBtcnQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdC1jYXJkLWNvbGxwYXNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUucmVhZE1vcmV9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGhpcy5wcm9wcy5hcnRpY2xlTGlzdERhdGEuc2VhcmNoX2NvbnRlbnQgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJlYWRNb3JlICYmIHRoaXMuc3RhdGUucmVhZE1vcmUgIT0gJycgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmQtbW9yZVwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyByZWFkTW9yZTogJycgfSl9PlJlYWQgTW9yZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucmVhZE1vcmUgPT0gJycgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmQtbW9yZVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlU2Nyb2xsLmJpbmQodGhpcyl9PlJlYWQgTGVzczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmdy01MDAgc2l0ZW1hcC10aXRsZVwiPnt0aGlzLnByb3BzLmFydGljbGVMaXN0RGF0YS5jYXRlZ29yeX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHNpdGVtYXAtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXJ0aWNsZUxpc3QubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFydGljbGVMaXN0Lm1hcCgocHJvcGVydHksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNCB0ZXN0cy1icmRyLWJ0bVwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmNob3ItZGF0YS1zdHlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvJHtwcm9wZXJ0eS51cmx9YH0gb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgLyR7cHJvcGVydHkudXJsfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGZvbnRTaXplOiAxNCB9fT57cHJvcGVydHkudGl0bGUuc3BsaXQoJ3wnKVswXX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaXRlbWFwLXJpZ2h0LWFycm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvYXJyb3ctZm9yd2FyZC1yaWdodC5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxwIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LWNlbnRlclwiIHN0eWxlPXt7IGZvbnRTaXplOiAyMCB9fSA+Tm8gQXJ0aWNsZSBGb3VuZCAhITwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFydGljbGVMaXN0RGF0YS5ib3R0b21fY29udGVudCAmJiB0aGlzLnByb3BzLmFydGljbGVMaXN0RGF0YS5ib3R0b21fY29udGVudCAhPSAnJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIG1ydC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0LWNhcmQtY29sbHBhc2VcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRoaXMucHJvcHMuYXJ0aWNsZUxpc3REYXRhLmJvdHRvbV9jb250ZW50IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEb2N0b3JzTmVhck1lVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIExvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc1R5cGUgfHwgXCJsb2FkZXJDaXJjdWxhclwifSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1sb2FkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaUZyYW1lUG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0xMFwiPlJlZGlyZWN0aW5nIHlvdSB0byBQaGFybWVhc3kgd2Vic2l0ZS4uLjwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyXG4iLCJpbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi8uLi9jb21tb25zL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9SaWdodEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSAncmVhY3QtaW5maW5pdGUtc2Nyb2xsZXInXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvTG9hZGVyJ1xuaW1wb3J0IEhlbG1ldFRhZ3MgZnJvbSAnLi4vLi4vY29tbW9ucy9IZWxtZXRUYWdzJ1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0hvbWUvZm9vdGVyJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKVxuXG5jbGFzcyBBcnRpY2xlTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0Y29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cblx0XHR2YXIgcGFnZSA9IDE7XG5cdFx0aWYgKHBhcnNlZCAmJiBwYXJzZWQucGFnZSkge1xuXHRcdFx0cGFnZSA9IHBhcnNlZC5wYWdlXG5cdFx0fVxuXG5cdFx0dmFyIHRpdGxlID0gdGhpcy5wcm9wcy5tYXRjaC51cmwudG9Mb3dlckNhc2UoKTtcblx0XHR0aXRsZSA9IHRpdGxlLnN1YnN0cmluZygxLCB0aXRsZS5sZW5ndGgpXG5cblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRoYXNNb3JlOiB0cnVlLFxuXHRcdFx0cGFnZTogcGFnZSxcblx0XHRcdHNlYXJjaFZhbDogJycsXG5cdFx0XHRub0FydGljbGVGb3VuZDogZmFsc2UsXG5cdFx0XHR0aXRsZTogdGl0bGUsXG5cdFx0XHRidXR0b25zVmlzaWJsZTogdHJ1ZSxcblx0XHRcdHN0YXJ0X3BhZ2U6IHBhZ2Vcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG5cblx0XHR0aGlzLnByb3BzLmdldEFydGljbGVMaXN0KHRoaXMuc3RhdGUudGl0bGUsIHRoaXMuc3RhdGUucGFnZSwgdHJ1ZSlcblx0XHRjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblxuXHRcdGlmIChwYXJzZWQucGFnZSAmJiBwYXJzZWQucGFnZSA9PSAxKSB7XG5cdFx0XHR2YXIgbmV3SHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoJz9wYWdlPTEnLCAnJyk7XG5cdFx0XHRuZXdIcmVmID0gbmV3SHJlZi5yZXBsYWNlKCcmcGFnZT0xJywgJycpO1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBuZXdIcmVmO1xuXHRcdH1cblxuXHR9XG5cblx0bG9hZE1vcmUoZGVsdGEpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGhhc01vcmU6IGZhbHNlXG5cdFx0fSwgKCkgPT4ge1xuXHRcdFx0bGV0IHBhZ2UgPSBwYXJzZUludCh0aGlzLnN0YXRlLnBhZ2UpICsgZGVsdGFcblx0XHRcdHRoaXMucHJvcHMuZ2V0QXJ0aWNsZUxpc3QodGhpcy5zdGF0ZS50aXRsZSwgcGFnZSwgdHJ1ZSwgdGhpcy5zdGF0ZS5zZWFyY2hWYWwsIChyZXNwKSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwLmxlbmd0aCkge1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0aGFzTW9yZTogdHJ1ZSxcblx0XHRcdFx0XHRcdHBhZ2Vcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdGhhc01vcmU6IGZhbHNlXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fSlcblxuXHR9XG5cblx0Y2hhbmdlVmFsKGUpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHNlYXJjaFZhbDogZS50YXJnZXQudmFsdWVcblx0XHR9KTtcblx0fVxuXG5cdHNlYXJjaEFydGljbGUoKSB7XG5cdFx0bGV0IHBhZ2UgPSAxXG5cdFx0aWYgKCF0aGlzLnN0YXRlLnNlYXJjaFZhbCkge1xuXHRcdFx0cGFnZSA9IHRoaXMuc3RhdGUuc3RhcnRfcGFnZVxuXHRcdH1cblxuXHRcdHRoaXMuc2V0U3RhdGUoeyBwYWdlOiBwYWdlIH0sICgpID0+IHtcblx0XHRcdHRoaXMucHJvcHMuZ2V0QXJ0aWNsZUxpc3QodGhpcy5zdGF0ZS50aXRsZSwgdGhpcy5zdGF0ZS5wYWdlLCB0cnVlLCB0aGlzLnN0YXRlLnNlYXJjaFZhbCwgKHJlc3ApID0+IHtcblx0XHRcdFx0aWYgKHJlc3AubGVuZ3RoID09IDApIHtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdGhhc01vcmU6IGZhbHNlLFxuXHRcdFx0XHRcdFx0bm9BcnRpY2xlRm91bmQ6IHRydWVcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdGhhc01vcmU6IHRydWUsXG5cdFx0XHRcdFx0XHRub0FydGljbGVGb3VuZDogZmFsc2Vcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0aGlzLnN0YXRlLnNlYXJjaFZhbCkge1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0YnV0dG9uc1Zpc2libGU6IGZhbHNlXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRidXR0b25zVmlzaWJsZTogdHJ1ZVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KVxuXHR9XG5cblx0aGFuZGxlS2V5VXAoZSkge1xuXHRcdGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuXHRcdFx0dGhpcy5zZWFyY2hBcnRpY2xlKCk7XG5cdFx0fVxuXHR9XG5cblx0bmF2aWdhdGUoZGVsdGEgPSAwLCBlKSB7XG5cdFx0Ly8gZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0Ly8gZS5zdG9wUHJvcGFnYXRpb24oKVxuXHRcdC8vIHRoaXMubG9hZE1vcmUoZGVsdGEpXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIHBhZ2Vfc2l6ZSA9IDUwXG5cdFx0dmFyIHBhZ2VObyA9IHBhcnNlSW50KHRoaXMuc3RhdGUucGFnZSk7XG5cdFx0bGV0IGN1cnJlbnRQYWdlID0gW11cblx0XHRjdXJyZW50UGFnZS5wdXNoKDxkaXYgY2xhc3NOYW1lPVwiYXJ0LXBhZ2luYXRpb24tYnRuXCI+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmdy01MDBcIiBzdHlsZT17eyBjb2xvcjogJyMwMDAnIH19PntwYWdlTm99PC9zcGFuPlxuXHRcdDwvZGl2PilcblxuXHRcdGxldCBwbGFjZUhvbGRlciA9ICdTZWFyY2ggYW55ICdcblx0XHRpZiAodGhpcy5wcm9wcy5hcnRpY2xlTGlzdERhdGEgJiYgdGhpcy5wcm9wcy5hcnRpY2xlTGlzdERhdGEuY2F0ZWdvcnkpIHtcblx0XHRcdHBsYWNlSG9sZGVyID0gcGxhY2VIb2xkZXIgKyB0aGlzLnByb3BzLmFydGljbGVMaXN0RGF0YS5jYXRlZ29yeS5zcGxpdCgnICcpWzBdXG5cdFx0fVxuXG5cdFx0bGV0IGhlYWRpbmcgPSBcIlwiXG5cdFx0bGV0IHVybCA9IHRoaXMucHJvcHMubWF0Y2gudXJsLnRvTG93ZXJDYXNlKClcblx0XHRpZiAodXJsID09ICcvYWxsLWRpc2Vhc2VzJykge1xuXHRcdFx0aGVhZGluZyA9IFwiQWxsIERpc2Vhc2VzXCJcblx0XHR9IGVsc2UgaWYgKHVybCA9PSAnL2FsbC1tZWRpY2luZXMnKSB7XG5cdFx0XHRoZWFkaW5nID0gXCJBbGwgTWVkaWNpbmVzXCJcblx0XHR9IGVsc2Uge1xuXHRcdFx0aGVhZGluZyA9IFwiQWxsIEFydGljbGVzXCJcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuXHRcdFx0XHQ8UHJvZmlsZUhlYWRlciAvPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyLXRvcC1tYXJnaW5cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cblx0XHRcdFx0XHRcdDxMZWZ0QmFyIC8+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBjZW50ZXItY29sdW1uXCI+XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLkFSVElDTEVfTE9BREVEID8gPEhlbG1ldFRhZ3MgdGFnc0RhdGE9e3tcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAodGhpcy5wcm9wcy5hcnRpY2xlTGlzdERhdGEuc2VvID8gdGhpcy5wcm9wcy5hcnRpY2xlTGlzdERhdGEuc2VvLnRpdGxlIDogXCJcIiksXG5cdFx0XHRcdFx0XHRcdFx0XHRkZXNjcmlwdGlvbjogKHRoaXMucHJvcHMuYXJ0aWNsZUxpc3REYXRhLnNlbyA/IHRoaXMucHJvcHMuYXJ0aWNsZUxpc3REYXRhLnNlby5kZXNjcmlwdGlvbiA6IFwiXCIpLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2Fub25pY2FsVXJsOiBgJHtDT05GSUcuQVBJX0JBU0VfVVJMfSR7dGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZX0ke3RoaXMucHJvcHMubG9jYXRpb24uc2VhcmNofWAsXG5cblx0XHRcdFx0XHRcdFx0XHRcdHByZXY6IGAkeyhwYWdlTm8gIT0gMSAmJiBwYWdlTm8gPD0gTWF0aC5jZWlsKHRoaXMucHJvcHMuYXJ0aWNsZUxpc3REYXRhLnRvdGFsX2FydGljbGVzIC8gcGFnZV9zaXplKSkgPyBgJHtDT05GSUcuQVBJX0JBU0VfVVJMfSR7dGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZX0keyhwYWdlTm8gPiAyICYmIHBhZ2VObyA8PSBNYXRoLmNlaWwodGhpcy5wcm9wcy5hcnRpY2xlTGlzdERhdGEudG90YWxfYXJ0aWNsZXMgLyBwYWdlX3NpemUpKSA/ICc/cGFnZT0nICsgKHBhZ2VObyAtIDEpIDogJyd9YCA6ICcnfWAsXG5cblx0XHRcdFx0XHRcdFx0XHRcdG5leHQ6IGAkeyhwYWdlTm8gIT0gTWF0aC5jZWlsKHRoaXMucHJvcHMuYXJ0aWNsZUxpc3REYXRhLnRvdGFsX2FydGljbGVzIC8gcGFnZV9zaXplKSAmJiBwYWdlTm8gPD0gTWF0aC5jZWlsKHRoaXMucHJvcHMuYXJ0aWNsZUxpc3REYXRhLnRvdGFsX2FydGljbGVzIC8gcGFnZV9zaXplKSkgPyBgJHtDT05GSUcuQVBJX0JBU0VfVVJMfSR7dGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZX0/cGFnZT0keyhwYWdlTm8gPj0gMSAmJiBwYWdlTm8gPCBNYXRoLmNlaWwodGhpcy5wcm9wcy5hcnRpY2xlTGlzdERhdGEudG90YWxfYXJ0aWNsZXMgLyBwYWdlX3NpemUpKSA/IHBhZ2VObyArIDEgOiAnJ31gIDogJyd9YFxuXHRcdFx0XHRcdFx0XHRcdH19IC8+IDogbnVsbFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG1haW4tY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJtcmItMTAgYnJlYWRjcnVtYi1saXN0XCIgc3R5bGU9e3sgd29yZEJyZWFrOiAnYnJlYWstd29yZCcgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItbGlzdC1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiL1wiIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLm9uSG9tZUNsaWNrKGUsIFwiL1wiKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCBicmVhZGNydW1iLXRpdGxlIGJyZWFkY3J1bWItY29sb3JlZC10aXRsZVwiPkhvbWU8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJicmVhZGNydW1iLWFycm93XCI+Jmd0Ozwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1saXN0LWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCBicmVhZGNydW1iLXRpdGxlXCI+e3RoaXMucHJvcHMuYXJ0aWNsZUxpc3REYXRhLmNhdGVnb3J5fTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImRpc2Vhc2Utc2VhcmNoXCIgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoVmFsfSBjbGFzc05hbWU9XCJhcnQtc2VhcmNoYmFyXCIgcGxhY2Vob2xkZXI9e3BsYWNlSG9sZGVyfSBvbkNoYW5nZT17KGUpID0+IHRoaXMuY2hhbmdlVmFsKGUpfSBvbktleVVwPXsoZSkgPT4gdGhpcy5oYW5kbGVLZXlVcChlKX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJhcnQtc2VhcmNoLWJ0blwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2VhcmNoQXJ0aWNsZSgpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1hZ2VzL3NlYXJjaC5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTIwXCIgc3R5bGU9e3sgZm9udFNpemU6IDIyIH19ID57aGVhZGluZ308L2gxPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgbXJ0LTIwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuQVJUSUNMRV9MT0FERUQgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmFydGljbGVMaXN0Lmxlbmd0aCAmJiAhdGhpcy5zdGF0ZS5ub0FydGljbGVGb3VuZCA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5hcnRpY2xlTGlzdC5tYXAoKHByb3BlcnR5LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCIga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IGRpc2Vhc2Utd2lkZ2V0XCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3Byb3BlcnR5LnVybH1gKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cHJvcGVydHkuaGVhZGVyX2ltYWdlID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJkaXNlYXNlLWxpc3QtaW1nXCIgc3JjPXtwcm9wZXJ0eS5oZWFkZXJfaW1hZ2V9IGFsdD17cHJvcGVydHkuaGVhZGVyX2ltYWdlX2FsdH0gLz4gOiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtgLyR7cHJvcGVydHkudXJsfWB9IG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PjxoMiBjbGFzc05hbWU9XCJkaXNlYXNlLWxpc3QtbmFtZSBmdy01MDBcIj57cHJvcGVydHkudGl0bGV9PC9oMj48L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwcm9wZXJ0eS5hcnRpY2xlVGVhc2VyIH19PjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KSA6IDxwIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LWNlbnRlclwiIHN0eWxlPXt7IGZvbnRTaXplOiAyMCB9fSA+Tm8gQXJ0aWNsZSBGb3VuZCAhITwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmFydGljbGVMaXN0Lmxlbmd0aCAmJiAhdGhpcy5zdGF0ZS5ub0FydGljbGVGb3VuZCAmJiB0aGlzLnN0YXRlLmJ1dHRvbnNWaXNpYmxlID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWdlTm8gPT0gMSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhcnQtcGFnaW5hdGlvbi1kaXZcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtjdXJyZW50UGFnZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIG9uQ2xpY2s9e3RoaXMubmF2aWdhdGUuYmluZCh0aGlzLCAxKX0gaHJlZj17YCR7dGhpcy5zdGF0ZS50aXRsZX0/cGFnZT0ke3BhZ2VObyArIDF9YH0gPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFydC1wYWdpbmF0aW9uLWJ0blwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMFwiPntwYWdlTm8gKyAxfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAocGFnZU5vID09IE1hdGguY2VpbCh0aGlzLnByb3BzLmFydGljbGVMaXN0RGF0YS50b3RhbF9hcnRpY2xlcyAvIHBhZ2Vfc2l6ZSkpID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXJ0LXBhZ2luYXRpb24tZGl2XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2Ake3RoaXMuc3RhdGUudGl0bGV9P3BhZ2U9JHtwYWdlTm8gLSAxfWB9IG9uQ2xpY2s9e3RoaXMubmF2aWdhdGUuYmluZCh0aGlzLCAtMSl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXJ0LXBhZ2luYXRpb24tYnRuXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmdy01MDBcIj57cGFnZU5vIC0gMX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2N1cnJlbnRQYWdlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IDxkaXYgY2xhc3NOYW1lPVwiYXJ0LXBhZ2luYXRpb24tZGl2XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIG9uQ2xpY2s9e3RoaXMubmF2aWdhdGUuYmluZCh0aGlzLCBwYWdlTm8gPT0gMiA/IC0xIDogLTEpfSBocmVmPXtgJHtwYWdlTm8gPT0gMiA/IGAke3RoaXMuc3RhdGUudGl0bGV9YCA6IGAke3RoaXMuc3RhdGUudGl0bGV9P3BhZ2U9JHtwYWdlTm8gLSAxfWB9YH0gPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXJ0LXBhZ2luYXRpb24tYnRuXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmdy01MDBcIj57cGFnZU5vIC0gMX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Y3VycmVudFBhZ2V9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2Ake3RoaXMuc3RhdGUudGl0bGV9P3BhZ2U9JHtwYWdlTm8gKyAxfWB9IG9uQ2xpY2s9e3RoaXMubmF2aWdhdGUuYmluZCh0aGlzLCAxKX0gPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXJ0LXBhZ2luYXRpb24tYnRuXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmdy01MDBcIj57cGFnZU5vICsgMX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PiA6IFwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4gOiA8TG9hZGVyIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxSaWdodEJhciBub0NoYXRCdXR0b249e3RydWV9IG1zZ1RlbXBsYXRlPVwiZ29sZF90ZW1wbGF0ZV8xXCIvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDxGb290ZXIgLz5cblx0XHRcdDwvZGl2ID5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVMaXN0IiwiaW1wb3J0IEFydGljbGVMaXN0VmlldyBmcm9tICcuL2FydGljbGVMaXN0J1xuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlTGlzdFZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IEFydGljbGVMaXN0VmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvYXJ0aWNsZUxpc3QnXG5pbXBvcnQgeyBnZXRBcnRpY2xlTGlzdCwgZ2V0U3BlY2lhbGl0eUZvb3RlckRhdGEgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IERvY3RvcnNOZWFyTWVWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9Eb2N0b3JzTmVhck1lL0RvY3RvcnNOZWFyTWVWaWV3JztcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cblxuY2xhc3MgQXJ0aWNsZUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcGFnZU5vOiAxXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZERhdGEoc3RvcmUsIG1hdGNoLCBxdWVyeSkge1xuICAgICAgICBsZXQgdGl0bGUgPSBtYXRjaC51cmxcbiAgICAgICAgdGl0bGUgPSB0aXRsZS5zdWJzdHJpbmcoMSwgdGl0bGUubGVuZ3RoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAocXVlcnkucGFnZSkge1xuICAgICAgICAgICAgcXVlcnkgPSBxdWVyeS5wYWdlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxdWVyeSA9IDFcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW3N0b3JlLmRpc3BhdGNoKGdldEFydGljbGVMaXN0KHRpdGxlLCBxdWVyeSkpXSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0WzBdXG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHt9KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQubGVuZ3RoID09IDAgJiYgcXVlcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHt9KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZ2V0U3BlY2lhbGl0eUZvb3RlckRhdGEoKGZvb3RlckRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgcmVzb2x2ZSh7IGZvb3RlckRhdGE6IChmb290ZXJEYXRhIHx8IG51bGwpIH0pXG4gICAgICAgICAgICAgICAgLy8gfSkoKVxuICAgICAgICAgICAgICAgIHJlc29sdmUoe30pO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICByb3V0ZXI6ICgpID0+IG51bGxcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5tYXRjaC51cmwgPT09IFwiL2RvY3RvcnMtbmVhci1tZVwiID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEb2N0b3JzTmVhck1lVmlldyB7Li4udGhpcy5wcm9wc30gLz4gOiA8QXJ0aWNsZUxpc3RWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwYXNzZWRQcm9wcykgPT4ge1xuICAgIC8qKlxuICAgICAqIGluaXRpYWxTZXJ2ZXJEYXRhIGlzIHNlcnZlciByZW5kZXJlZCBhc3luYyBkYXRhIHJlcXVpcmVkIGJ1aWxkIGh0bWwgb24gc2VydmVyLiBcbiAgICAgKi9cbiAgICBsZXQgaW5pdGlhbFNlcnZlckRhdGEgPSBudWxsXG4gICAgbGV0IHsgc3RhdGljQ29udGV4dCB9ID0gcGFzc2VkUHJvcHNcbiAgICBpZiAoc3RhdGljQ29udGV4dCAmJiBzdGF0aWNDb250ZXh0LmRhdGEpIHtcbiAgICAgICAgaW5pdGlhbFNlcnZlckRhdGEgPSBzdGF0aWNDb250ZXh0LmRhdGFcbiAgICB9XG5cbiAgICBsZXQge1xuICAgICAgICBhcnRpY2xlTGlzdCxcbiAgICAgICAgYXJ0aWNsZUxpc3REYXRhLFxuICAgICAgICBBUlRJQ0xFX0xPQURFRCxcbiAgICAgICAgcGFnZUJ1dHRvbkNvdW50LFxuICAgICAgICBhcnRpY2xlUGFnZUNvdW50XG4gICAgfSA9IHN0YXRlLlVTRVJcblxuICAgIGxldCB7XG4gICAgICAgIHN0YXRpY19mb290ZXJfZGF0YVxuICAgIH0gPSBzdGF0ZS5ET0NUT1JfU0VBUkNIXG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFydGljbGVMaXN0LFxuICAgICAgICBhcnRpY2xlTGlzdERhdGEsXG4gICAgICAgIEFSVElDTEVfTE9BREVELFxuICAgICAgICBwYWdlQnV0dG9uQ291bnQsXG4gICAgICAgIGFydGljbGVQYWdlQ291bnQsXG4gICAgICAgIGluaXRpYWxTZXJ2ZXJEYXRhLFxuICAgICAgICBzdGF0aWNfZm9vdGVyX2RhdGFcblxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0QXJ0aWNsZUxpc3Q6ICh0aXRsZSwgcGFnZSwgcmVwbGFjZUxpc3QsIHNlYXJjaFN0cmluZywgY2FsbGJhY2spID0+IGRpc3BhdGNoKGdldEFydGljbGVMaXN0KHRpdGxlLCBwYWdlLCByZXBsYWNlTGlzdCwgc2VhcmNoU3RyaW5nLCBjYWxsYmFjaykpLFxuICAgICAgICBnZXRTcGVjaWFsaXR5Rm9vdGVyRGF0YTogKGNiKSA9PiBkaXNwYXRjaChnZXRTcGVjaWFsaXR5Rm9vdGVyRGF0YShjYikpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBcnRpY2xlTGlzdCk7IiwiLy8gLmRpcm5hbWUsIC5iYXNlbmFtZSwgYW5kIC5leHRuYW1lIG1ldGhvZHMgYXJlIGV4dHJhY3RlZCBmcm9tIE5vZGUuanMgdjguMTEuMSxcbi8vIGJhY2twb3J0ZWQgYW5kIHRyYW5zcGxpdGVkIHdpdGggQmFiZWwsIHdpdGggYmFja3dhcmRzLWNvbXBhdCBmaXhlc1xuXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXG4vLyBtdXN0IGJlIG5vIHNsYXNoZXMsIGVtcHR5IGVsZW1lbnRzLCBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxuLy8gKHNvIGFsc28gbm8gbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlcyAtIGl0IGRvZXMgbm90IGRpc3Rpbmd1aXNoXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxhc3QgPSBwYXJ0c1tpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG4vLyBwYXRoLnJlc29sdmUoW2Zyb20gLi4uXSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlc29sdmUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XG4gICAgdmFyIHBhdGggPSAoaSA+PSAwKSA/IGFyZ3VtZW50c1tpXSA6IHByb2Nlc3MuY3dkKCk7XG5cbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcbiAgICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH0gZWxzZSBpZiAoIXBhdGgpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJlc29sdmVkUGF0aCA9IHBhdGggKyAnLycgKyByZXNvbHZlZFBhdGg7XG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGguY2hhckF0KDApID09PSAnLyc7XG4gIH1cblxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCwgYnV0XG4gIC8vIGhhbmRsZSByZWxhdGl2ZSBwYXRocyB0byBiZSBzYWZlIChtaWdodCBoYXBwZW4gd2hlbiBwcm9jZXNzLmN3ZCgpIGZhaWxzKVxuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICByZXNvbHZlZFBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICByZXR1cm4gKChyZXNvbHZlZEFic29sdXRlID8gJy8nIDogJycpICsgcmVzb2x2ZWRQYXRoKSB8fCAnLic7XG59O1xuXG4vLyBwYXRoLm5vcm1hbGl6ZShwYXRoKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHZhciBpc0Fic29sdXRlID0gZXhwb3J0cy5pc0Fic29sdXRlKHBhdGgpLFxuICAgICAgdHJhaWxpbmdTbGFzaCA9IHN1YnN0cihwYXRoLCAtMSkgPT09ICcvJztcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihwYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICBpZiAoIXBhdGggJiYgIWlzQWJzb2x1dGUpIHtcbiAgICBwYXRoID0gJy4nO1xuICB9XG4gIGlmIChwYXRoICYmIHRyYWlsaW5nU2xhc2gpIHtcbiAgICBwYXRoICs9ICcvJztcbiAgfVxuXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5qb2luID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwYXRocyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIHJldHVybiBleHBvcnRzLm5vcm1hbGl6ZShmaWx0ZXIocGF0aHMsIGZ1bmN0aW9uKHAsIGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiBwICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9XG4gICAgcmV0dXJuIHA7XG4gIH0pLmpvaW4oJy8nKSk7XG59O1xuXG5cbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcbiAgZnJvbSA9IGV4cG9ydHMucmVzb2x2ZShmcm9tKS5zdWJzdHIoMSk7XG4gIHRvID0gZXhwb3J0cy5yZXNvbHZlKHRvKS5zdWJzdHIoMSk7XG5cbiAgZnVuY3Rpb24gdHJpbShhcnIpIHtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIGZvciAoOyBzdGFydCA8IGFyci5sZW5ndGg7IHN0YXJ0KyspIHtcbiAgICAgIGlmIChhcnJbc3RhcnRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIGVuZCA9IGFyci5sZW5ndGggLSAxO1xuICAgIGZvciAoOyBlbmQgPj0gMDsgZW5kLS0pIHtcbiAgICAgIGlmIChhcnJbZW5kXSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIFtdO1xuICAgIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSk7XG4gIH1cblxuICB2YXIgZnJvbVBhcnRzID0gdHJpbShmcm9tLnNwbGl0KCcvJykpO1xuICB2YXIgdG9QYXJ0cyA9IHRyaW0odG8uc3BsaXQoJy8nKSk7XG5cbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGZyb21QYXJ0cy5sZW5ndGgsIHRvUGFydHMubGVuZ3RoKTtcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChmcm9tUGFydHNbaV0gIT09IHRvUGFydHNbaV0pIHtcbiAgICAgIHNhbWVQYXJ0c0xlbmd0aCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB2YXIgb3V0cHV0UGFydHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XG4gIH1cblxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xuXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCcvJyk7XG59O1xuXG5leHBvcnRzLnNlcCA9ICcvJztcbmV4cG9ydHMuZGVsaW1pdGVyID0gJzonO1xuXG5leHBvcnRzLmRpcm5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICBpZiAocGF0aC5sZW5ndGggPT09IDApIHJldHVybiAnLic7XG4gIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KDApO1xuICB2YXIgaGFzUm9vdCA9IGNvZGUgPT09IDQ3IC8qLyovO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDE7IC0taSkge1xuICAgIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgZW5kID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuIGhhc1Jvb3QgPyAnLycgOiAnLic7XG4gIGlmIChoYXNSb290ICYmIGVuZCA9PT0gMSkge1xuICAgIC8vIHJldHVybiAnLy8nO1xuICAgIC8vIEJhY2t3YXJkcy1jb21wYXQgZml4OlxuICAgIHJldHVybiAnLyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2UoMCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGJhc2VuYW1lKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcblxuICB2YXIgc3RhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICB2YXIgaTtcblxuICBmb3IgKGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgaWYgKHBhdGguY2hhckNvZGVBdChpKSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBwYXRoIGNvbXBvbmVudFxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuICcnO1xuICByZXR1cm4gcGF0aC5zbGljZShzdGFydCwgZW5kKTtcbn1cblxuLy8gVXNlcyBhIG1peGVkIGFwcHJvYWNoIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSwgYXMgZXh0IGJlaGF2aW9yIGNoYW5nZWRcbi8vIGluIG5ldyBOb2RlLmpzIHZlcnNpb25zLCBzbyBvbmx5IGJhc2VuYW1lKCkgYWJvdmUgaXMgYmFja3BvcnRlZCBoZXJlXG5leHBvcnRzLmJhc2VuYW1lID0gZnVuY3Rpb24gKHBhdGgsIGV4dCkge1xuICB2YXIgZiA9IGJhc2VuYW1lKHBhdGgpO1xuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xuICB9XG4gIHJldHVybiBmO1xufTtcblxuZXhwb3J0cy5leHRuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgdmFyIHN0YXJ0RG90ID0gLTE7XG4gIHZhciBzdGFydFBhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICAvLyBUcmFjayB0aGUgc3RhdGUgb2YgY2hhcmFjdGVycyAoaWYgYW55KSB3ZSBzZWUgYmVmb3JlIG91ciBmaXJzdCBkb3QgYW5kXG4gIC8vIGFmdGVyIGFueSBwYXRoIHNlcGFyYXRvciB3ZSBmaW5kXG4gIHZhciBwcmVEb3RTdGF0ZSA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0UGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBleHRlbnNpb25cbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICAgIGlmIChjb2RlID09PSA0NiAvKi4qLykge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBkb3QsIG1hcmsgaXQgYXMgdGhlIHN0YXJ0IG9mIG91ciBleHRlbnNpb25cbiAgICAgICAgaWYgKHN0YXJ0RG90ID09PSAtMSlcbiAgICAgICAgICBzdGFydERvdCA9IGk7XG4gICAgICAgIGVsc2UgaWYgKHByZURvdFN0YXRlICE9PSAxKVxuICAgICAgICAgIHByZURvdFN0YXRlID0gMTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0RG90ICE9PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBhbmQgbm9uLXBhdGggc2VwYXJhdG9yIGJlZm9yZSBvdXIgZG90LCBzbyB3ZSBzaG91bGRcbiAgICAgIC8vIGhhdmUgYSBnb29kIGNoYW5jZSBhdCBoYXZpbmcgYSBub24tZW1wdHkgZXh0ZW5zaW9uXG4gICAgICBwcmVEb3RTdGF0ZSA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGFydERvdCA9PT0gLTEgfHwgZW5kID09PSAtMSB8fFxuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBjaGFyYWN0ZXIgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBkb3RcbiAgICAgIHByZURvdFN0YXRlID09PSAwIHx8XG4gICAgICAvLyBUaGUgKHJpZ2h0LW1vc3QpIHRyaW1tZWQgcGF0aCBjb21wb25lbnQgaXMgZXhhY3RseSAnLi4nXG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMSAmJiBzdGFydERvdCA9PT0gZW5kIC0gMSAmJiBzdGFydERvdCA9PT0gc3RhcnRQYXJ0ICsgMSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZShzdGFydERvdCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGZpbHRlciAoeHMsIGYpIHtcbiAgICBpZiAoeHMuZmlsdGVyKSByZXR1cm4geHMuZmlsdGVyKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmKHhzW2ldLCBpLCB4cykpIHJlcy5wdXNoKHhzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gU3RyaW5nLnByb3RvdHlwZS5zdWJzdHIgLSBuZWdhdGl2ZSBpbmRleCBkb24ndCB3b3JrIGluIElFOFxudmFyIHN1YnN0ciA9ICdhYicuc3Vic3RyKC0xKSA9PT0gJ2InXG4gICAgPyBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7IHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pIH1cbiAgICA6IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSBzdHIubGVuZ3RoICsgc3RhcnQ7XG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pO1xuICAgIH1cbjtcbiIsImltcG9ydCBfTWVtb3J5Um91dGVyIGZyb20gXCIuL01lbW9yeVJvdXRlclwiO1xuZXhwb3J0IHsgX01lbW9yeVJvdXRlciBhcyBNZW1vcnlSb3V0ZXIgfTtcbmltcG9ydCBfUHJvbXB0IGZyb20gXCIuL1Byb21wdFwiO1xuZXhwb3J0IHsgX1Byb21wdCBhcyBQcm9tcHQgfTtcbmltcG9ydCBfUmVkaXJlY3QgZnJvbSBcIi4vUmVkaXJlY3RcIjtcbmV4cG9ydCB7IF9SZWRpcmVjdCBhcyBSZWRpcmVjdCB9O1xuaW1wb3J0IF9Sb3V0ZSBmcm9tIFwiLi9Sb3V0ZVwiO1xuZXhwb3J0IHsgX1JvdXRlIGFzIFJvdXRlIH07XG5pbXBvcnQgX1JvdXRlciBmcm9tIFwiLi9Sb3V0ZXJcIjtcbmV4cG9ydCB7IF9Sb3V0ZXIgYXMgUm91dGVyIH07XG5pbXBvcnQgX1N0YXRpY1JvdXRlciBmcm9tIFwiLi9TdGF0aWNSb3V0ZXJcIjtcbmV4cG9ydCB7IF9TdGF0aWNSb3V0ZXIgYXMgU3RhdGljUm91dGVyIH07XG5pbXBvcnQgX1N3aXRjaCBmcm9tIFwiLi9Td2l0Y2hcIjtcbmV4cG9ydCB7IF9Td2l0Y2ggYXMgU3dpdGNoIH07XG5pbXBvcnQgX2dlbmVyYXRlUGF0aCBmcm9tIFwiLi9nZW5lcmF0ZVBhdGhcIjtcbmV4cG9ydCB7IF9nZW5lcmF0ZVBhdGggYXMgZ2VuZXJhdGVQYXRoIH07XG5pbXBvcnQgX21hdGNoUGF0aCBmcm9tIFwiLi9tYXRjaFBhdGhcIjtcbmV4cG9ydCB7IF9tYXRjaFBhdGggYXMgbWF0Y2hQYXRoIH07XG5pbXBvcnQgX3dpdGhSb3V0ZXIgZnJvbSBcIi4vd2l0aFJvdXRlclwiO1xuZXhwb3J0IHsgX3dpdGhSb3V0ZXIgYXMgd2l0aFJvdXRlciB9OyJdLCJzb3VyY2VSb290IjoiIn0=