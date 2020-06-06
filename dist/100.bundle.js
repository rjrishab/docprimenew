(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[100],{

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

/***/ "./dev/js/components/commons/vipClub/vipClub.js":
/*!******************************************************!*\
  !*** ./dev/js/components/commons/vipClub/vipClub.js ***!
  \******************************************************/
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

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _config = __webpack_require__(/*! ../../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _HelmetTags = __webpack_require__(/*! ../../commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _initialsPicture = __webpack_require__(/*! ../initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _bannerCarousel = __webpack_require__(/*! ../Home/bannerCarousel */ "./dev/js/components/commons/Home/bannerCarousel.js");

var _bannerCarousel2 = _interopRequireDefault(_bannerCarousel);

var _articleAuthor = __webpack_require__(/*! ../articleAuthor/articleAuthor */ "./dev/js/components/commons/articleAuthor/articleAuthor.js");

var _articleAuthor2 = _interopRequireDefault(_articleAuthor);

var _locationElements = __webpack_require__(/*! ../../../containers/commons/locationElements */ "./dev/js/containers/commons/locationElements.js");

var _locationElements2 = _interopRequireDefault(_locationElements);

var _CommonSearch = __webpack_require__(/*! ../../../containers/commons/CommonSearch.js */ "./dev/js/containers/commons/CommonSearch.js");

var _CommonSearch2 = _interopRequireDefault(_CommonSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import CommentBox from './ArticleCommentBox.js'

// import Reply from './Reply.js'


var VipClub = function (_React$Component) {
    _inherits(VipClub, _React$Component);

    function VipClub(props) {
        _classCallCheck(this, VipClub);

        var _this = _possibleConstructorReturn(this, (VipClub.__proto__ || Object.getPrototypeOf(VipClub)).call(this, props));

        _this.state = {
            toggleTabType: false
        };
        return _this;
    }

    _createClass(VipClub, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
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
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'profile-body-wrap', style: { background: "white" } },
                _react2.default.createElement(
                    'div',
                    { className: 'vipHeaderBar ' + (this.state.toggleTabType ? 'hed-curv-rmove' : ''), ref: 'vipHeaderBar' },
                    _react2.default.createElement(
                        'div',
                        { className: 'vipBackIco' },
                        _react2.default.createElement('img', { src: "/assets" + "/img/vip-home.svg" })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'vip-logo-cont ' + (this.state.toggleTabType ? 'header-scroll-change' : ''), ref: '' },
                        _react2.default.createElement('img', { className: 'vipLogiImg', src: "/assets" + "/img/vip-logo.png" }),
                        _react2.default.createElement(
                            'h1',
                            { className: 'scrl-cont-dat' },
                            'in Just ',
                            _react2.default.createElement(
                                'span',
                                { className: 'vip-prc-cut' },
                                '\u20B94,999'
                            ),
                            ' ',
                            _react2.default.createElement(
                                'span',
                                { className: 'vip-main-price' },
                                '\u20B93,999'
                            ),
                            '  '
                        )
                    )
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'container container-top-margin d-none', style: { marginTop: '200px' } },
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
                                    { className: 'care-new-container font-analyze' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'vip-tabs-container' },
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'vp-sb-txt' },
                                            'VIP 1 ',
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                '(\u20B92,499)'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'vp-sb-txt' },
                                            'VIP 2 ',
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                '(\u20B93,999)'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'vp-sb-txt vp-act' },
                                            'VIP 3 ',
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                '(\u20B94,999)'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'vip-offer-cards mb-3' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'vip-free-doc vip-docbg' },
                                            _react2.default.createElement(
                                                'h4',
                                                { className: 'vip-card-heading' },
                                                'Free Doctor Consultations'
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'vip-card-list' },
                                                _react2.default.createElement('img', { src: "/assets" + '/img/vip-chk.svg' }),
                                                '30,000 verified doctors '
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
                                            'Worth \u20B96,500  '
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'pakg-slider-container mb-3' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'pkgSliderHeading' },
                                            _react2.default.createElement(
                                                'h5',
                                                null,
                                                'Key Hospital Partners'
                                            ),
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                'View Docprime Network'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'pkgSliderContainer' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'pkgCardsList d-inline-flex sub-wd-cards top_pkgCat' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'pkgcustCards vip-hsp-card-mn' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'vip-hsp-img' },
                                                        _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/hospital/documents/ca207923c622386d761c29fa46396bf7_LhrYNu7.jpg' })
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'pkgcustCards vip-hsp-card-mn' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'vip-hsp-img' },
                                                        _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/hospital/documents/medanta-the-medicity.jpg' })
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'pkgcustCards vip-hsp-card-mn' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'vip-hsp-img' },
                                                        _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/hospital/documents/artemis-hospital_o9URBGQ.jpg' })
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'pkgcustCards vip-hsp-card-mn' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'vip-hsp-img' },
                                                        _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/hospital/documents/ca207923c622386d761c29fa46396bf7_LhrYNu7.jpg' })
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'pkgcustCards vip-hsp-card-mn' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'vip-hsp-img' },
                                                        _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/hospital/documents/medanta-the-medicity.jpg' })
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'pkgcustCards vip-hsp-card-mn' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'vip-hsp-img' },
                                                        _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/hospital/documents/artemis-hospital_o9URBGQ.jpg' })
                                                    )
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'vip-offer-cards mb-3' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'vip-free-doc vip-mem-bg' },
                                            _react2.default.createElement(
                                                'h4',
                                                { className: 'vip-card-heading' },
                                                'Free Docprime Care Membership  '
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'vip-card-list' },
                                                _react2.default.createElement('img', { src: "/assets" + '/img/vip-chk.svg' }),
                                                'Unlimited online consult ',
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    '(General Physician)'
                                                ),
                                                ' '
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'vip-card-list' },
                                                _react2.default.createElement('img', { src: "/assets" + '/img/vip-chk.svg' }),
                                                'Priority Queue - No wait times '
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'vip-card-tag' },
                                            'Worth \u20B91,999  '
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'vip-offer-cards mb-3' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'vip-free-doc vip-chek-bg' },
                                            _react2.default.createElement(
                                                'h4',
                                                { className: 'vip-card-heading' },
                                                'Free Full Body Health Checkup '
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'vip-card-list' },
                                                _react2.default.createElement('img', { src: "/assets" + '/img/vip-chk.svg' }),
                                                '2 members covered'
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'vip-card-list' },
                                                _react2.default.createElement('img', { src: "/assets" + '/img/vip-chk.svg' }),
                                                '60 tests included '
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'vip-card-tag' },
                                            'Worth \u20B91,500  '
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'vip-ins-act-cont mb-3' },
                                        _react2.default.createElement(
                                            'h4',
                                            { className: 'ins-dcnt-hdng' },
                                            _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + "/img/vip-ins-act.png" }),
                                            'Instant Activation Upon Purchase'
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
                                        { className: 'vip-offer-cards mb-3' },
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
                                            'Worth \u20B91,500  '
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'vip-price-summery mb-3' },
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
                                                                '\u20B95,999'
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
                                                                '\u20B95,999'
                                                            )
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Tax Rebate: ',
                                                            _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                '\u20B95,999'
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
                                                                '\u20B95,999'
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
                                                            'Doctor Consult: ',
                                                            _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                '\u20B95,999'
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
                                                                '\u20B95,999'
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
                                                                '\u20B95,999'
                                                            )
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        { className: 'ttl-benft' },
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Effective Price: ',
                                                            _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                '\u20B95,999'
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'vip-no-cost' },
                                            _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + "/img/vip-ins-act.png" }),
                                            ' No Cost EMI starts at ',
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                '\u20B9417'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
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
                                            _react2.default.createElement(
                                                'li',
                                                null,
                                                'All procedures (dental, daycare etc..) and sessions (therapy, counselling etc.. ) fee is not included'
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                null,
                                                'Our doctor and hospital network is dynamic in nature and may change from time to time'
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'vip-foot-btn' },
                        _react2.default.createElement(
                            'p',
                            null,
                            'Become a Docprime VIP @ \u20B94,999'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'vipbtn-sub-txt' },
                            'Effective Price \u20B93,499'
                        )
                    )
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'container container-top-margin', style: { paddingTop: '140px' } },
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
                                    { className: 'care-new-container font-analyze' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'vip-act-pop mb-3' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'vip-wrn-img' },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/vip-warning.svg" }),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'vip-wrn-content' },
                                                _react2.default.createElement(
                                                    'h5',
                                                    null,
                                                    'Activate your subscription now'
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'Add remaining 3 members details to activate your subscription'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'button',
                                            null,
                                            'Click here'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'vip-dsh-main-cont mb-3' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'vip-acnt-heading' },
                                            _react2.default.createElement(
                                                'h5',
                                                null,
                                                'Your Account'
                                            ),
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                'View Appointments'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'doc-onln-cnslt' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'vip-cnslt-card' },
                                                _react2.default.createElement(
                                                    'h5',
                                                    { className: 'vip-brder-hdng' },
                                                    'Doctor Consultation'
                                                ),
                                                _react2.default.createElement(
                                                    'ul',
                                                    null,
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Total Limit: ',
                                                            _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                '\u20B96,500  '
                                                            )
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Utilized: ',
                                                            _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                '\u20B96,500  '
                                                            )
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Available: ',
                                                            _react2.default.createElement(
                                                                'span',
                                                                { className: 'vip-crd-avl-grn' },
                                                                '\u20B96,500  '
                                                            )
                                                        )
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'vip-cnslt-card' },
                                                _react2.default.createElement(
                                                    'h5',
                                                    { className: 'vip-brder-hdng' },
                                                    'Doctor Consultation'
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'vip-un-mem' },
                                                    'Unlimited for 8 members'
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'vip-cnsl-act' },
                                                    _react2.default.createElement('img', { src: "/assets" + '/img/vip-chk.svg' }),
                                                    'Activated '
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'text-right' },
                                                    _react2.default.createElement(
                                                        'button',
                                                        { className: 'vip-crd-btn' },
                                                        'Chat Now'
                                                    )
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'vip-offer-cards mb-3' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'vip-sbs-crd' },
                                            _react2.default.createElement(
                                                'h5',
                                                { className: 'vip-brder-hdng' },
                                                'Doctor Consultation'
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'vip-sbs-crd-content' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'vip-sbs-crd-lft' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        'Includes 60 Tests, can be used by 2 members'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'vip-sbs-crd-rgt' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'rmng-pnt' },
                                                        '2 ',
                                                        _react2.default.createElement(
                                                            'span',
                                                            null,
                                                            'remaining '
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'button',
                                                        { className: 'vip-btn-sbs' },
                                                        'Book Now'
                                                    )
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'vip-offer-cards mb-3' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'vip-sbs-crd' },
                                            _react2.default.createElement(
                                                'h5',
                                                { className: 'vip-brder-hdng' },
                                                'Tax Benefit'
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'vip-sbs-crd-content' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'vip-sbs-crd-lft' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        'Under Section 80D'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'vip-sbs-crd-rgt' },
                                                    _react2.default.createElement(
                                                        'button',
                                                        { className: 'vip-btn-sbs' },
                                                        'Download Invoice'
                                                    )
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'vip-offer-cards mb-3' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'vip-sbs-crd' },
                                            _react2.default.createElement(
                                                'h5',
                                                { className: 'vip-brder-hdng' },
                                                'Tax Benefit'
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'vip-accord-container' },
                                                _react2.default.createElement(
                                                    'ul',
                                                    { className: 'vip-acr-lst' },
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'h4',
                                                            { className: 'vip-acrd-hdng' },
                                                            _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                'Rishabh Mehrotra ',
                                                                _react2.default.createElement('br', null),
                                                                _react2.default.createElement(
                                                                    'b',
                                                                    null,
                                                                    '(Primary)'
                                                                )
                                                            ),
                                                            _react2.default.createElement('img', { className: 'acdn-arrow acdn-arrow-up', src: "/assets" + '/img/customer-icons/dropdown-arrow.svg' })
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'vip-sn-tbl' },
                                                            _react2.default.createElement(
                                                                'table',
                                                                { className: 'vip-acrd-content' },
                                                                _react2.default.createElement(
                                                                    'tr',
                                                                    null,
                                                                    _react2.default.createElement(
                                                                        'th',
                                                                        null,
                                                                        'Relationship'
                                                                    ),
                                                                    _react2.default.createElement(
                                                                        'th',
                                                                        null,
                                                                        'Gender'
                                                                    ),
                                                                    _react2.default.createElement(
                                                                        'th',
                                                                        null,
                                                                        'DOB'
                                                                    )
                                                                ),
                                                                _react2.default.createElement(
                                                                    'tr',
                                                                    null,
                                                                    _react2.default.createElement(
                                                                        'td',
                                                                        null,
                                                                        'Friend'
                                                                    ),
                                                                    _react2.default.createElement(
                                                                        'td',
                                                                        null,
                                                                        'Male'
                                                                    ),
                                                                    _react2.default.createElement(
                                                                        'td',
                                                                        null,
                                                                        '25/07/1994'
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'h4',
                                                            { className: 'vip-acrd-hdng' },
                                                            'Rishabh Mehrotra',
                                                            _react2.default.createElement('img', { className: 'acdn-arrow acdn-arrow-up', src: "/assets" + '/img/customer-icons/dropdown-arrow.svg' })
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'h4',
                                                            { className: 'vip-acrd-hdng' },
                                                            'Rishabh Mehrotra',
                                                            _react2.default.createElement('img', { className: 'acdn-arrow acdn-arrow-up', src: "/assets" + '/img/customer-icons/dropdown-arrow.svg' })
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'h4',
                                                            { className: 'vip-acrd-add-member' },
                                                            _react2.default.createElement('img', { className: 'vip-add-img', src: "/assets" + '/img/vip-mem.svg' }),
                                                            'Add Member 1'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'h4',
                                                            { className: 'vip-acrd-add-member' },
                                                            _react2.default.createElement('img', { className: 'vip-add-img', src: "/assets" + '/img/vip-mem.svg' }),
                                                            'Add Member 2'
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'vip-contact mb-3' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'vip-sbs-crd' },
                                            _react2.default.createElement(
                                                'h5',
                                                { className: 'vip-brder-hdng' },
                                                'Contact Support'
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'vip-coct-content' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'Need help with booking? ',
                                                    _react2.default.createElement(
                                                        'span',
                                                        null,
                                                        'Call us at 1800-123-9419'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'Have a query? ',
                                                    _react2.default.createElement(
                                                        'span',
                                                        null,
                                                        'Email us at customercare@docprime.com'
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return VipClub;
}(_react2.default.Component);

exports.default = VipClub;

/***/ }),

/***/ "./dev/js/containers/commons/VipClub.js":
/*!**********************************************!*\
  !*** ./dev/js/containers/commons/VipClub.js ***!
  \**********************************************/
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

__webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _vipClub = __webpack_require__(/*! ../../components/commons/vipClub/vipClub.js */ "./dev/js/components/commons/vipClub/vipClub.js");

var _vipClub2 = _interopRequireDefault(_vipClub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VipClub = function (_React$Component) {
    _inherits(VipClub, _React$Component);

    function VipClub(props) {
        _classCallCheck(this, VipClub);

        return _possibleConstructorReturn(this, (VipClub.__proto__ || Object.getPrototypeOf(VipClub)).call(this, props));
    }

    _createClass(VipClub, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_vipClub2.default, this.props);
        }
    }]);

    return VipClub;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, passedProps) {

    return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(VipClub);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2FydGljbGVBdXRob3IvYXJ0aWNsZUF1dGhvci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3ZpcENsdWIvdmlwQ2x1Yi5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9jb21tb25zL1ZpcENsdWIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFydGljbGVBdXRob3IiLCJwcm9wcyIsInN0YXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidXJsIiwiaGlzdG9yeSIsInB1c2giLCJpZCIsIm5hbWUiLCJwcm9maWxlSW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpblJpZ2h0IiwiZm9udFNpemUiLCJtYXJnaW4iLCJhdXRob3JDbGljayIsInNwZWNpYWxpdHkiLCJleHBlcmllbmNlIiwicHVibGlzaGVkRGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiVmlwQ2x1YiIsInRvZ2dsZVRhYlR5cGUiLCJzZWxmIiwid2luZG93IiwiZG9jdW1lbnQiLCJvbnNjcm9sbCIsInNjcm9sbFBvc2l0aW9uIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwiYm9keSIsInJlZnMiLCJzZXRTdGF0ZSIsImJhY2tncm91bmQiLCJBU1NFVFNfQkFTRV9VUkwiLCJtYXJnaW5Ub3AiLCJwYWRkaW5nVG9wIiwibWFwU3RhdGVUb1Byb3BzIiwicGFzc2VkUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLGE7OztBQUNMLHdCQUFZQyxLQUFaLEVBQW1CO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixRQUFRO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3U0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkM7QUFDRjtBQUNWO0FBQ0Y7QUFDTTtBQUNGO0FBQ0o7QUFDRjtBQUNJO0FBQ0Y7QUFDYztBQUNGO0FBQ1Y7QUFDRjtBQUNjO0FBQ0Y7QUFDSjtBQUNGO0FBQ0kiLCJmaWxlIjoiMTAwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5pdGlhbHNQaWN0dXJlIGZyb20gJy4uL2luaXRpYWxzUGljdHVyZSc7XG5cbmNsYXNzIEFydGljbGVBdXRob3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cblx0XHR9XG5cdH1cblxuXHRhdXRob3JDbGljayhlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0aWYgKHRoaXMucHJvcHMudXJsKSB7XG5cdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCh0aGlzLnByb3BzLnVybClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9vcGQvZG9jdG9yLyR7dGhpcy5wcm9wcy5pZH1gKVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLWF1dGhvci1kaXYgbXJiLTIwXCI+XG5cdFx0XHRcdDxJbml0aWFsc1BpY3R1cmUgY2xhc3NOYW1lPVwiaW5pdGlhbHNQaWN0dXJlLWRzIGluaXRpYWxzUGljdHVyZS1hdXRob3JcIiBuYW1lPXt0aGlzLnByb3BzLm5hbWV9IGhhc19pbWFnZT17ISF0aGlzLnByb3BzLnByb2ZpbGVJbWFnZX0gPlxuXHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiZmx0ci11c3ItaW1hZ2UgaW1nLXJvdW5kXCIgc3R5bGU9e3sgd2lkdGg6IDYwLCBoZWlnaHQ6IDYwLCBtYXJnaW5SaWdodDogOCwgZm9udFNpemU6IDEwIH19IHNyYz17dGhpcy5wcm9wcy5wcm9maWxlSW1hZ2V9IGFsdD17YERyLiAke3RoaXMucHJvcHMubmFtZX1gfSB0aXRsZT17YERyLiAke3RoaXMucHJvcHMubmFtZX1gfSAvPlxuXHRcdFx0XHQ8L0luaXRpYWxzUGljdHVyZT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhdXRob3ItZHRsc1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXV0aG9yLW5hbWUtZGl2XCI+XG5cdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyBtYXJnaW46ICcwIDZweCAwIDAnIH19PldyaXR0ZW4gQnkgOjwvc3Bhbj5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy51cmwgP1xuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2AvJHt0aGlzLnByb3BzLnVybH1gfSBvbkNsaWNrPXsoZSkgPT4gdGhpcy5hdXRob3JDbGljayhlKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtcHJpbWFyeVwiPntgRHIuICR7dGhpcy5wcm9wcy5uYW1lfWB9PC9oMz5cblx0XHRcdFx0XHRcdFx0XHQ8L2E+IDpcblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtgL29wZC9kb2N0b3IvJHt0aGlzLnByb3BzLmlkfWB9IG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmF1dGhvckNsaWNrKGUpfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1wcmltYXJ5XCI+e2BEci4gJHt0aGlzLnByb3BzLm5hbWV9YH08L2gzPlxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF1dGhvci1leHAtZGl2XCI+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57dGhpcy5wcm9wcy5zcGVjaWFsaXR5fSB8IHt0aGlzLnByb3BzLmV4cGVyaWVuY2V9IHllYXJzIG9mIGV4cGVyaWVuY2U8L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5wdWJsaXNoZWREYXRlID9cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLWRhdGVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5QdWJsaXNoZWQgRGF0ZSA6IHt0aGlzLnByb3BzLnB1Ymxpc2hlZERhdGV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj4gOiAnJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZUF1dGhvciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBMZWZ0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvTGVmdEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uLy4uL2NvbmZpZydcbmltcG9ydCBIZWxtZXRUYWdzIGZyb20gJy4uLy4uL2NvbW1vbnMvSGVsbWV0VGFncydcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0nXG5pbXBvcnQgSW5pdGlhbHNQaWN0dXJlIGZyb20gJy4uL2luaXRpYWxzUGljdHVyZSc7XG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3N0b3JhZ2UnO1xuLy8gaW1wb3J0IENvbW1lbnRCb3ggZnJvbSAnLi9BcnRpY2xlQ29tbWVudEJveC5qcydcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuLy8gaW1wb3J0IFJlcGx5IGZyb20gJy4vUmVwbHkuanMnXG5pbXBvcnQgQmFubmVyQ2Fyb3VzZWwgZnJvbSAnLi4vSG9tZS9iYW5uZXJDYXJvdXNlbCc7XG5pbXBvcnQgQXJ0aWNsZUF1dGhvciBmcm9tICcuLi9hcnRpY2xlQXV0aG9yL2FydGljbGVBdXRob3InO1xuaW1wb3J0IExvY2F0aW9uRWxlbWVudHMgZnJvbSAnLi4vLi4vLi4vY29udGFpbmVycy9jb21tb25zL2xvY2F0aW9uRWxlbWVudHMnXG5pbXBvcnQgQ29tbW9uU2VhcmNoIGZyb20gJy4uLy4uLy4uL2NvbnRhaW5lcnMvY29tbW9ucy9Db21tb25TZWFyY2guanMnXG5cbmNsYXNzIFZpcENsdWIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdG9nZ2xlVGFiVHlwZTpmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuXHRcdGlmKHdpbmRvdyAmJiBkb2N1bWVudCl7XG5cdFx0XHR3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcblx0XHQgICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuXHRcdCAgICBcblx0XHQgICAgXHRpZihzZWxmLnJlZnNbJ3ZpcEhlYWRlckJhciddKXtcblxuXHRcdCAgICBcdFx0XHRpZihzY3JvbGxQb3NpdGlvbiA+IDEwKXtcblx0XHRcdFx0XHQgICAgXHRzZWxmLnNldFN0YXRlKHt0b2dnbGVUYWJUeXBlOiB0cnVlfSlcblx0XHRcdFx0XHQgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7dG9nZ2xlVGFiVHlwZTogZmFsc2V9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHRcdCAgICBcdH1cblx0XHQgIH1cdFxuXHRcdH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ3aGl0ZVwiIH19PlxuICAgICAgICAgICAgICAgIHsvKiA8UHJvZmlsZUhlYWRlciAvPiAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHZpcEhlYWRlckJhciAke3RoaXMuc3RhdGUudG9nZ2xlVGFiVHlwZT8naGVkLWN1cnYtcm1vdmUnOicnfWB9IHJlZj1cInZpcEhlYWRlckJhclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcEJhY2tJY29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvdmlwLWhvbWUuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHZpcC1sb2dvLWNvbnQgJHt0aGlzLnN0YXRlLnRvZ2dsZVRhYlR5cGU/J2hlYWRlci1zY3JvbGwtY2hhbmdlJzonJ31gfSByZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidmlwTG9naUltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3ZpcC1sb2dvLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNjcmwtY29udC1kYXRcIj5pbiBKdXN0IDxzcGFuIGNsYXNzTmFtZT1cInZpcC1wcmMtY3V0XCI+4oK5NCw5OTk8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cInZpcC1tYWluLXByaWNlXCI+4oK5Myw5OTk8L3NwYW4+ICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cInNjcmwtY29udC1kYXRcIj4xIHllYXIgdXB0byA0IG1lbWJlcnM8L3A+ICovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyLXRvcC1tYXJnaW4gZC1ub25lXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMjAwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0QmFyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjZW50ZXItY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZS1uZXctY29udGFpbmVyIGZvbnQtYW5hbHl6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtdGFicy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ2cC1zYi10eHRcIj5WSVAgMSA8c3Bhbj4o4oK5Miw0OTkpPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ2cC1zYi10eHRcIj5WSVAgMiA8c3Bhbj4o4oK5Myw5OTkpPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ2cC1zYi10eHQgdnAtYWN0XCI+VklQIDMgPHNwYW4+KOKCuTQsOTk5KTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLW9mZmVyLWNhcmRzIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1mcmVlLWRvYyB2aXAtZG9jYmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInZpcC1jYXJkLWhlYWRpbmdcIj5GcmVlIERvY3RvciBDb25zdWx0YXRpb25zPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidmlwLWNhcmQtbGlzdFwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXAtY2hrLnN2Zyd9IC8+MzAsMDAwIHZlcmlmaWVkIGRvY3RvcnMgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ2aXAtY2FyZC1saXN0XCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1jaGsuc3ZnJ30gLz5BbGwgc3BlY2lhbGl6YXRpb25zIGluY2x1ZGVkIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2aXAtY2FyZC10YWdcIj5Xb3J0aCDigrk2LDUwMCAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBha2ctc2xpZGVyLWNvbnRhaW5lciBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2dTbGlkZXJIZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5LZXkgSG9zcGl0YWwgUGFydG5lcnM8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5WaWV3IERvY3ByaW1lIE5ldHdvcms8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2dTbGlkZXJDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2dDYXJkc0xpc3QgZC1pbmxpbmUtZmxleCBzdWItd2QtY2FyZHMgdG9wX3BrZ0NhdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2djdXN0Q2FyZHMgdmlwLWhzcC1jYXJkLW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtaHNwLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9tZWRpYS9ob3NwaXRhbC9kb2N1bWVudHMvY2EyMDc5MjNjNjIyMzg2ZDc2MWMyOWZhNDYzOTZiZjdfTGhyWU51Ny5qcGdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ2N1c3RDYXJkcyB2aXAtaHNwLWNhcmQtbW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1oc3AtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL21lZGlhL2hvc3BpdGFsL2RvY3VtZW50cy9tZWRhbnRhLXRoZS1tZWRpY2l0eS5qcGdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ2N1c3RDYXJkcyB2aXAtaHNwLWNhcmQtbW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1oc3AtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL21lZGlhL2hvc3BpdGFsL2RvY3VtZW50cy9hcnRlbWlzLWhvc3BpdGFsX285VVJCR1EuanBnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2djdXN0Q2FyZHMgdmlwLWhzcC1jYXJkLW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtaHNwLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9tZWRpYS9ob3NwaXRhbC9kb2N1bWVudHMvY2EyMDc5MjNjNjIyMzg2ZDc2MWMyOWZhNDYzOTZiZjdfTGhyWU51Ny5qcGdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ2N1c3RDYXJkcyB2aXAtaHNwLWNhcmQtbW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1oc3AtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL21lZGlhL2hvc3BpdGFsL2RvY3VtZW50cy9tZWRhbnRhLXRoZS1tZWRpY2l0eS5qcGdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ2N1c3RDYXJkcyB2aXAtaHNwLWNhcmQtbW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1oc3AtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL21lZGlhL2hvc3BpdGFsL2RvY3VtZW50cy9hcnRlbWlzLWhvc3BpdGFsX285VVJCR1EuanBnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtb2ZmZXItY2FyZHMgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLWZyZWUtZG9jIHZpcC1tZW0tYmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInZpcC1jYXJkLWhlYWRpbmdcIj5GcmVlIERvY3ByaW1lIENhcmUgTWVtYmVyc2hpcCAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidmlwLWNhcmQtbGlzdFwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXAtY2hrLnN2Zyd9IC8+VW5saW1pdGVkIG9ubGluZSBjb25zdWx0IDxzcGFuPihHZW5lcmFsIFBoeXNpY2lhbik8L3NwYW4+IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidmlwLWNhcmQtbGlzdFwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXAtY2hrLnN2Zyd9IC8+UHJpb3JpdHkgUXVldWUgLSBObyB3YWl0IHRpbWVzIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2aXAtY2FyZC10YWdcIj5Xb3J0aCDigrkxLDk5OSAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1vZmZlci1jYXJkcyBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtZnJlZS1kb2MgdmlwLWNoZWstYmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInZpcC1jYXJkLWhlYWRpbmdcIj5GcmVlIEZ1bGwgQm9keSBIZWFsdGggQ2hlY2t1cCA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ2aXAtY2FyZC1saXN0XCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1jaGsuc3ZnJ30gLz4yIG1lbWJlcnMgY292ZXJlZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidmlwLWNhcmQtbGlzdFwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXAtY2hrLnN2Zyd9IC8+NjAgdGVzdHMgaW5jbHVkZWQgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZpcC1jYXJkLXRhZ1wiPldvcnRoIOKCuTEsNTAwICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLWlucy1hY3QtY29udCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImlucy1kY250LWhkbmdcIj48aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3ZpcC1pbnMtYWN0LnBuZ1wifSAvPkluc3RhbnQgQWN0aXZhdGlvbiBVcG9uIFB1cmNoYXNlPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1kYy1sc3RuZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ2aXAtY2FyZC1saXN0XCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1jaGsuc3ZnJ30gLz5QcmUtZXhpc3RpbmcgZGlzZWFzZXMgY292ZXJlZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidmlwLWNhcmQtbGlzdFwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXAtY2hrLnN2Zyd9IC8+Tm8gbWVkaWNhbCB0ZXN0cyByZXF1aXJlZCBmb3IgcGxhbiBhY3RpdmF0aW9uIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtb2ZmZXItY2FyZHMgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLWZyZWUtZG9jIHZpcC1iZW5mdC1iZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidmlwLWNhcmQtaGVhZGluZ1wiPlRheCBCZW5lZml0cyA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ2aXAtY2FyZC1saXN0XCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1jaGsuc3ZnJ30gLz5Db3ZlciB1bmRlciBzZWN0aW9uIDgwRDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidmlwLWNhcmQtbGlzdFwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXAtY2hrLnN2Zyd9IC8+VGF4IHByb29mIGNlcnRpZmljYXRlIHdpbGwgYmUgcHJvdmlkZWQgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZpcC1jYXJkLXRhZ1wiPldvcnRoIOKCuTEsNTAwICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLXByaWNlLXN1bW1lcnkgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLXByYy1zdW1tcnktaGRuZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QcmljZSBTdW1tYXJ5PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLXByYy1jYXJkcy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLXByYy1jYXJkc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInZpcC1wcmMtaGRuZ1wiPllvdSBQYXk8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInZpcC1wcmMtbHN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlBsYW4gUHJpY2U6IDxzcGFuPuKCuTUsOTk5PC9zcGFuPjwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5PZmZlciBQcmljZTogPHNwYW4+4oK5NSw5OTk8L3NwYW4+PC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRheCBSZWJhdGU6IDxzcGFuPuKCuTUsOTk5PC9zcGFuPjwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJlZmZlY3RpdmUtcHJjXCI+PHA+RWZmZWN0aXZlIFByaWNlOiA8c3Bhbj7igrk1LDk5OTwvc3Bhbj48L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1wcmMtY2FyZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ2aXAtcHJjLWhkbmdcIj5Zb3UgR2V0PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ2aXAtcHJjLWxzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5Eb2N0b3IgQ29uc3VsdDogPHNwYW4+4oK5NSw5OTk8L3NwYW4+PC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPk9mZmVyIFByaWNlOiA8c3Bhbj7igrk1LDk5OTwvc3Bhbj48L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+SGVhbHRoIENoZWNrdXA6IDxzcGFuPuKCuTUsOTk5PC9zcGFuPjwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0dGwtYmVuZnRcIj48cD5FZmZlY3RpdmUgUHJpY2U6IDxzcGFuPuKCuTUsOTk5PC9zcGFuPjwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidmlwLW5vLWNvc3RcIj48aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3ZpcC1pbnMtYWN0LnBuZ1wifSAvPiBObyBDb3N0IEVNSSBzdGFydHMgYXQgPHNwYW4+4oK5NDE3PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtbm90ZS1sc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BIGZldyB0aGluZ3MgdG8gbm90ZS4uLiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QWxsIHByb2NlZHVyZXMgKGRlbnRhbCwgZGF5Y2FyZSBldGMuLikgYW5kIHNlc3Npb25zICh0aGVyYXB5LCBjb3Vuc2VsbGluZyBldGMuLiApIGZlZSBpcyBub3QgaW5jbHVkZWQ8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+T3VyIGRvY3RvciBhbmQgaG9zcGl0YWwgbmV0d29yayBpcyBkeW5hbWljIGluIG5hdHVyZSBhbmQgbWF5IGNoYW5nZSBmcm9tIHRpbWUgdG8gdGltZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ2aXAtZm9vdC1idG5cIj48cD5CZWNvbWUgYSBEb2NwcmltZSBWSVAgQCDigrk0LDk5OTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZpcGJ0bi1zdWItdHh0XCI+RWZmZWN0aXZlIFByaWNlIOKCuTMsNDk5PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgey8qIGxhc3Qgc2NyZWVuIGRlc2lnbiAqL31cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyLXRvcC1tYXJnaW5cIiBzdHlsZT17eyBwYWRkaW5nVG9wOiAnMTQwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0QmFyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjZW50ZXItY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZS1uZXctY29udGFpbmVyIGZvbnQtYW5hbHl6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtYWN0LXBvcCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtd3JuLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3ZpcC13YXJuaW5nLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC13cm4tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkFjdGl2YXRlIHlvdXIgc3Vic2NyaXB0aW9uIG5vdzwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgcmVtYWluaW5nIDMgbWVtYmVycyBkZXRhaWxzIHRvIGFjdGl2YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeW91ciBzdWJzY3JpcHRpb248L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+Q2xpY2sgaGVyZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1kc2gtbWFpbi1jb250IG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1hY250LWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PllvdXIgQWNjb3VudDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlZpZXcgQXBwb2ludG1lbnRzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jLW9ubG4tY25zbHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtY25zbHQtY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInZpcC1icmRlci1oZG5nXCI+RG9jdG9yIENvbnN1bHRhdGlvbjwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRvdGFsIExpbWl0OiA8c3Bhbj7igrk2LDUwMCAgPC9zcGFuPjwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5VdGlsaXplZDogPHNwYW4+4oK5Niw1MDAgIDwvc3Bhbj48L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+QXZhaWxhYmxlOiA8c3BhbiBjbGFzc05hbWU9XCJ2aXAtY3JkLWF2bC1ncm5cIj7igrk2LDUwMCAgPC9zcGFuPjwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLWNuc2x0LWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ2aXAtYnJkZXItaGRuZ1wiPkRvY3RvciBDb25zdWx0YXRpb248L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidmlwLXVuLW1lbVwiPlVubGltaXRlZCBmb3IgOCBtZW1iZXJzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidmlwLWNuc2wtYWN0XCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1jaGsuc3ZnJ30gLz5BY3RpdmF0ZWQgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ2aXAtY3JkLWJ0blwiPkNoYXQgTm93PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLW9mZmVyLWNhcmRzIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1zYnMtY3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ2aXAtYnJkZXItaGRuZ1wiPkRvY3RvciBDb25zdWx0YXRpb248L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1zYnMtY3JkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLXNicy1jcmQtbGZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SW5jbHVkZXMgNjAgVGVzdHMsIGNhbiBiZSB1c2VkIGJ5IDIgbWVtYmVyczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtc2JzLWNyZC1yZ3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJybW5nLXBudFwiPjIgPHNwYW4+cmVtYWluaW5nIDwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ2aXAtYnRuLXNic1wiPkJvb2sgTm93PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLW9mZmVyLWNhcmRzIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1zYnMtY3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ2aXAtYnJkZXItaGRuZ1wiPlRheCBCZW5lZml0PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtc2JzLWNyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1zYnMtY3JkLWxmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlVuZGVyIFNlY3Rpb24gODBEPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1zYnMtY3JkLXJndFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidmlwLWJ0bi1zYnNcIj5Eb3dubG9hZCBJbnZvaWNlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLW9mZmVyLWNhcmRzIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1zYnMtY3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ2aXAtYnJkZXItaGRuZ1wiPlRheCBCZW5lZml0PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInZpcC1hY3ItbHN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidmlwLWFjcmQtaGRuZ1wiPjxzcGFuPlJpc2hhYmggTWVocm90cmEgPGJyIC8+PGI+KFByaW1hcnkpPC9iPjwvc3Bhbj48aW1nIGNsYXNzTmFtZT1cImFjZG4tYXJyb3cgYWNkbi1hcnJvdy11cFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnJ30gLz48L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1zbi10YmxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ2aXAtYWNyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmVsYXRpb25zaGlwPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkdlbmRlcjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5ET0I8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RnJpZW5kPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPk1hbGU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MjUvMDcvMTk5NDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidmlwLWFjcmQtaGRuZ1wiPlJpc2hhYmggTWVocm90cmE8aW1nIGNsYXNzTmFtZT1cImFjZG4tYXJyb3cgYWNkbi1hcnJvdy11cFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnJ30gLz48L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidmlwLWFjcmQtaGRuZ1wiPlJpc2hhYmggTWVocm90cmE8aW1nIGNsYXNzTmFtZT1cImFjZG4tYXJyb3cgYWNkbi1hcnJvdy11cFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnJ30gLz48L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidmlwLWFjcmQtYWRkLW1lbWJlclwiPjxpbWcgY2xhc3NOYW1lPVwidmlwLWFkZC1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1tZW0uc3ZnJ30gLz5BZGQgTWVtYmVyIDE8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidmlwLWFjcmQtYWRkLW1lbWJlclwiPjxpbWcgY2xhc3NOYW1lPVwidmlwLWFkZC1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1tZW0uc3ZnJ30gLz5BZGQgTWVtYmVyIDI8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1jb250YWN0IG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1zYnMtY3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ2aXAtYnJkZXItaGRuZ1wiPkNvbnRhY3QgU3VwcG9ydDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLWNvY3QtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TmVlZCBoZWxwIHdpdGggYm9va2luZz8gPHNwYW4+Q2FsbCB1cyBhdCAxODAwLTEyMy05NDE5PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkhhdmUgYSBxdWVyeT8gPHNwYW4+RW1haWwgdXMgYXQgY3VzdG9tZXJjYXJlQGRvY3ByaW1lLmNvbTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaXBDbHViIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcblxuaW1wb3J0IExlbnNGaXRWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy92aXBDbHViL3ZpcENsdWIuanMnXG5cbmNsYXNzIFZpcENsdWIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgICB9XG5cbiAgICBcblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExlbnNGaXRWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwYXNzZWRQcm9wcykgPT4ge1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgICBcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIFxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShWaXBDbHViKTtcbiIsIi8vIC5kaXJuYW1lLCAuYmFzZW5hbWUsIGFuZCAuZXh0bmFtZSBtZXRob2RzIGFyZSBleHRyYWN0ZWQgZnJvbSBOb2RlLmpzIHY4LjExLjEsXG4vLyBiYWNrcG9ydGVkIGFuZCB0cmFuc3BsaXRlZCB3aXRoIEJhYmVsLCB3aXRoIGJhY2t3YXJkcy1jb21wYXQgZml4ZXNcblxuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIHJlc29sdmVzIC4gYW5kIC4uIGVsZW1lbnRzIGluIGEgcGF0aCBhcnJheSB3aXRoIGRpcmVjdG9yeSBuYW1lcyB0aGVyZVxuLy8gbXVzdCBiZSBubyBzbGFzaGVzLCBlbXB0eSBlbGVtZW50cywgb3IgZGV2aWNlIG5hbWVzIChjOlxcKSBpbiB0aGUgYXJyYXlcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkocGFydHMsIGFsbG93QWJvdmVSb290KSB7XG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsYXN0ID0gcGFydHNbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKGFsbG93QWJvdmVSb290KSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBwYXJ0cy51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xufTtcblxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKSxcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBzdWJzdHIocGF0aCwgLTEpID09PSAnLyc7XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XG4gICAgcGF0aCA9ICcuJztcbiAgfVxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XG4gICAgcGF0aCArPSAnLyc7XG4gIH1cblxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuam9pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gZXhwb3J0cy5ub3JtYWxpemUoZmlsdGVyKHBhdGhzLCBmdW5jdGlvbihwLCBpbmRleCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9KS5qb2luKCcvJykpO1xufTtcblxuXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gIGZyb20gPSBleHBvcnRzLnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICB0byA9IGV4cG9ydHMucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuXG4gIGZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICBpZiAoYXJyW3N0YXJ0XSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XG4gICAgICBpZiAoYXJyW2VuZF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG5cbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgdmFyIHRvUGFydHMgPSB0cmltKHRvLnNwbGl0KCcvJykpO1xuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICB9XG5cbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcblxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufTtcblxuZXhwb3J0cy5zZXAgPSAnLyc7XG5leHBvcnRzLmRlbGltaXRlciA9ICc6JztcblxuZXhwb3J0cy5kaXJuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gJy4nO1xuICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdCgwKTtcbiAgdmFyIGhhc1Jvb3QgPSBjb2RlID09PSA0NyAvKi8qLztcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAxOyAtLWkpIHtcbiAgICBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIGVuZCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvclxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiBoYXNSb290ID8gJy8nIDogJy4nO1xuICBpZiAoaGFzUm9vdCAmJiBlbmQgPT09IDEpIHtcbiAgICAvLyByZXR1cm4gJy8vJztcbiAgICAvLyBCYWNrd2FyZHMtY29tcGF0IGZpeDpcbiAgICByZXR1cm4gJy8nO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKDAsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBiYXNlbmFtZShwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG5cbiAgdmFyIHN0YXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgdmFyIGk7XG5cbiAgZm9yIChpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIGlmIChwYXRoLmNoYXJDb2RlQXQoaSkgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gcGF0aCBjb21wb25lbnRcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiAnJztcbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnQsIGVuZCk7XG59XG5cbi8vIFVzZXMgYSBtaXhlZCBhcHByb2FjaCBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHksIGFzIGV4dCBiZWhhdmlvciBjaGFuZ2VkXG4vLyBpbiBuZXcgTm9kZS5qcyB2ZXJzaW9ucywgc28gb25seSBiYXNlbmFtZSgpIGFib3ZlIGlzIGJhY2twb3J0ZWQgaGVyZVxuZXhwb3J0cy5iYXNlbmFtZSA9IGZ1bmN0aW9uIChwYXRoLCBleHQpIHtcbiAgdmFyIGYgPSBiYXNlbmFtZShwYXRoKTtcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gZjtcbn07XG5cbmV4cG9ydHMuZXh0bmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIHZhciBzdGFydERvdCA9IC0xO1xuICB2YXIgc3RhcnRQYXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgLy8gVHJhY2sgdGhlIHN0YXRlIG9mIGNoYXJhY3RlcnMgKGlmIGFueSkgd2Ugc2VlIGJlZm9yZSBvdXIgZmlyc3QgZG90IGFuZFxuICAvLyBhZnRlciBhbnkgcGF0aCBzZXBhcmF0b3Igd2UgZmluZFxuICB2YXIgcHJlRG90U3RhdGUgPSAwO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydFBhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gZXh0ZW5zaW9uXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gNDYgLyouKi8pIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgZG90LCBtYXJrIGl0IGFzIHRoZSBzdGFydCBvZiBvdXIgZXh0ZW5zaW9uXG4gICAgICAgIGlmIChzdGFydERvdCA9PT0gLTEpXG4gICAgICAgICAgc3RhcnREb3QgPSBpO1xuICAgICAgICBlbHNlIGlmIChwcmVEb3RTdGF0ZSAhPT0gMSlcbiAgICAgICAgICBwcmVEb3RTdGF0ZSA9IDE7XG4gICAgfSBlbHNlIGlmIChzdGFydERvdCAhPT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgYW5kIG5vbi1wYXRoIHNlcGFyYXRvciBiZWZvcmUgb3VyIGRvdCwgc28gd2Ugc2hvdWxkXG4gICAgICAvLyBoYXZlIGEgZ29vZCBjaGFuY2UgYXQgaGF2aW5nIGEgbm9uLWVtcHR5IGV4dGVuc2lvblxuICAgICAgcHJlRG90U3RhdGUgPSAtMTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhcnREb3QgPT09IC0xIHx8IGVuZCA9PT0gLTEgfHxcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgY2hhcmFjdGVyIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgZG90XG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMCB8fFxuICAgICAgLy8gVGhlIChyaWdodC1tb3N0KSB0cmltbWVkIHBhdGggY29tcG9uZW50IGlzIGV4YWN0bHkgJy4uJ1xuICAgICAgcHJlRG90U3RhdGUgPT09IDEgJiYgc3RhcnREb3QgPT09IGVuZCAtIDEgJiYgc3RhcnREb3QgPT09IHN0YXJ0UGFydCArIDEpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnREb3QsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBmaWx0ZXIgKHhzLCBmKSB7XG4gICAgaWYgKHhzLmZpbHRlcikgcmV0dXJuIHhzLmZpbHRlcihmKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZih4c1tpXSwgaSwgeHMpKSByZXMucHVzaCh4c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFN0cmluZy5wcm90b3R5cGUuc3Vic3RyIC0gbmVnYXRpdmUgaW5kZXggZG9uJ3Qgd29yayBpbiBJRThcbnZhciBzdWJzdHIgPSAnYWInLnN1YnN0cigtMSkgPT09ICdiJ1xuICAgID8gZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikgeyByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKSB9XG4gICAgOiBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gc3RyLmxlbmd0aCArIHN0YXJ0O1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKTtcbiAgICB9XG47XG4iLCJpbXBvcnQgX01lbW9yeVJvdXRlciBmcm9tIFwiLi9NZW1vcnlSb3V0ZXJcIjtcbmV4cG9ydCB7IF9NZW1vcnlSb3V0ZXIgYXMgTWVtb3J5Um91dGVyIH07XG5pbXBvcnQgX1Byb21wdCBmcm9tIFwiLi9Qcm9tcHRcIjtcbmV4cG9ydCB7IF9Qcm9tcHQgYXMgUHJvbXB0IH07XG5pbXBvcnQgX1JlZGlyZWN0IGZyb20gXCIuL1JlZGlyZWN0XCI7XG5leHBvcnQgeyBfUmVkaXJlY3QgYXMgUmVkaXJlY3QgfTtcbmltcG9ydCBfUm91dGUgZnJvbSBcIi4vUm91dGVcIjtcbmV4cG9ydCB7IF9Sb3V0ZSBhcyBSb3V0ZSB9O1xuaW1wb3J0IF9Sb3V0ZXIgZnJvbSBcIi4vUm91dGVyXCI7XG5leHBvcnQgeyBfUm91dGVyIGFzIFJvdXRlciB9O1xuaW1wb3J0IF9TdGF0aWNSb3V0ZXIgZnJvbSBcIi4vU3RhdGljUm91dGVyXCI7XG5leHBvcnQgeyBfU3RhdGljUm91dGVyIGFzIFN0YXRpY1JvdXRlciB9O1xuaW1wb3J0IF9Td2l0Y2ggZnJvbSBcIi4vU3dpdGNoXCI7XG5leHBvcnQgeyBfU3dpdGNoIGFzIFN3aXRjaCB9O1xuaW1wb3J0IF9nZW5lcmF0ZVBhdGggZnJvbSBcIi4vZ2VuZXJhdGVQYXRoXCI7XG5leHBvcnQgeyBfZ2VuZXJhdGVQYXRoIGFzIGdlbmVyYXRlUGF0aCB9O1xuaW1wb3J0IF9tYXRjaFBhdGggZnJvbSBcIi4vbWF0Y2hQYXRoXCI7XG5leHBvcnQgeyBfbWF0Y2hQYXRoIGFzIG1hdGNoUGF0aCB9O1xuaW1wb3J0IF93aXRoUm91dGVyIGZyb20gXCIuL3dpdGhSb3V0ZXJcIjtcbmV4cG9ydCB7IF93aXRoUm91dGVyIGFzIHdpdGhSb3V0ZXIgfTsiXSwic291cmNlUm9vdCI6IiJ9