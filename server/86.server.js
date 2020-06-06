exports.ids = [86];
exports.modules = {

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ({ isVip }) => {
    return _react2.default.createElement(
        'div',
        { className: `dsclmer-ftr ${isVip ? 'margin-bottom-55' : ''}` },
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

/***/ "./dev/js/components/commons/lensFit/lensfit.js":
/*!******************************************************!*\
  !*** ./dev/js/components/commons/lensFit/lensfit.js ***!
  \******************************************************/
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

var _config = __webpack_require__(/*! ../../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _HelmetTags = __webpack_require__(/*! ../../commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _footer = __webpack_require__(/*! ../Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _initialsPicture = __webpack_require__(/*! ../initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _bannerCarousel = __webpack_require__(/*! ../Home/bannerCarousel */ "./dev/js/components/commons/Home/bannerCarousel.js");

var _bannerCarousel2 = _interopRequireDefault(_bannerCarousel);

var _articleAuthor = __webpack_require__(/*! ../articleAuthor/articleAuthor */ "./dev/js/components/commons/articleAuthor/articleAuthor.js");

var _articleAuthor2 = _interopRequireDefault(_articleAuthor);

var _locationElements = __webpack_require__(/*! ../../../containers/commons/locationElements */ "./dev/js/containers/commons/locationElements.js");

var _locationElements2 = _interopRequireDefault(_locationElements);

var _CommonSearch = __webpack_require__(/*! ../../../containers/commons/CommonSearch.js */ "./dev/js/containers/commons/CommonSearch.js");

var _CommonSearch2 = _interopRequireDefault(_CommonSearch);

var _FixedMobileFooter = __webpack_require__(/*! ../Home/FixedMobileFooter */ "./dev/js/components/commons/Home/FixedMobileFooter.js");

var _FixedMobileFooter2 = _interopRequireDefault(_FixedMobileFooter);

var _staticDisclaimer = __webpack_require__(/*! ../../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import CommentBox from './ArticleCommentBox.js'
const queryString = __webpack_require__(/*! query-string */ "query-string");
// import Reply from './Reply.js'

// import FooterTestSpecializationWidgets from './FooterTestSpecializationWidgets.js'

// import RelatedArticles from './RelatedArticles'

class Lensfit extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    render() {
        const parsed = queryString.parse(this.props.location.search);
        let backUrl;
        if (parsed && parsed.callbackurl) {
            backUrl = parsed.callbackurl;
            if (parsed.hospital_id) {
                backUrl += '&hospital_id=' + parsed.hospital_id + '&isLensfitSpecific=true';
            }
            if (parsed.lab_id) {
                backUrl += '&lab_id=' + parsed.lab_id + '&isLensfitSpecific=true';
            }
        }

        return _react2.default.createElement(
            'div',
            { className: 'profile-body-wrap', style: { paddingBottom: 54 } },
            _react2.default.createElement(_DesktopProfileHeader2.default, null),
            _react2.default.createElement(
                'section',
                { className: 'container article-container font-analyze' },
                _react2.default.createElement(
                    'div',
                    { className: 'row main-row parent-section-row' },
                    _react2.default.createElement(_LeftBar2.default, null),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 col-md-7 col-lg-8 center-column' },
                        _react2.default.createElement(
                            'div',
                            { className: 'container-fluid article-column mb-3' },
                            _react2.default.createElement('img', { className: 'lnsfit-doc', src: "/assets" + "/img/lensico.png" }),
                            _react2.default.createElement(
                                'h1',
                                { className: 'lansfit-tp-hdng' },
                                '\u201CFREE PAIR OF EYE GLASSES ',
                                _react2.default.createElement('br', null),
                                '(Frame + Lens)',
                                _react2.default.createElement('br', null),
                                'OR SUNGLASSES worth \u20B9720 \u201D'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'container-fluid article-column mb-3 lns-lst-cont' },
                            _react2.default.createElement(
                                'p',
                                { className: 'lns-avl-ofr' },
                                'How to avail the offer: '
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'lsn-stps-container' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'lns-steps-para' },
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        'Step 1.'
                                    ),
                                    ' ',
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Once the appointment is completed, you will get lensfit unique code through message and email'
                                    ),
                                    ' '
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'lns-steps-para' },
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        'Step 2.'
                                    ),
                                    ' ',
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'visit  ',
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'https://www.lensfit.com/collections/docprime', target: '_blank' },
                                            'https://www.lensfit.com/collections/docprime '
                                        ),
                                        'to redeem the offer. All products on this link will be 100% OFF with delivery charge of \u20B9299 + GST '
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'lns-offr-apl-cont' },
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    '*Offer only applicable on completed OPD and lab bookings'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    '*Coupon is not transferable or redeemable for cash'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(_RightBar2.default, { colClass: 'col-lg-4', msgTemplate: 'gold_general_template' })
                )
            ),
            _react2.default.createElement(_staticDisclaimer2.default, null),
            _react2.default.createElement(
                'button',
                { className: 'lenfit-backbtn', onClick: e => {
                        e.preventDefault();
                        e.stopPropagation();
                        this.props.history.push('/offers');
                    } },
                'Back'
            )
        );
    }
}

exports.default = Lensfit;

/***/ }),

/***/ "./dev/js/containers/commons/lensFit.js":
/*!**********************************************!*\
  !*** ./dev/js/containers/commons/lensFit.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

__webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _lensfit = __webpack_require__(/*! ../../components/commons/lensFit/lensfit.js */ "./dev/js/components/commons/lensFit/lensfit.js");

var _lensfit2 = _interopRequireDefault(_lensfit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Lensfit extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {

        return _react2.default.createElement(_lensfit2.default, this.props);
    }
}

const mapStateToProps = (state, passedProps) => {

    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Lensfit);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2FydGljbGVBdXRob3IvYXJ0aWNsZUF1dGhvci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2xlbnNGaXQvbGVuc2ZpdC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9jb21tb25zL2xlbnNGaXQuanMiXSwibmFtZXMiOlsiaXNWaXAiLCJjb2xvciIsImZvbnRTaXplIiwicGFkZGluZ0JvdHRvbSIsIkFydGljbGVBdXRob3IiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImF1dGhvckNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwidXJsIiwiaGlzdG9yeSIsInB1c2giLCJpZCIsInJlbmRlciIsIm5hbWUiLCJwcm9maWxlSW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luIiwic3BlY2lhbGl0eSIsImV4cGVyaWVuY2UiLCJwdWJsaXNoZWREYXRlIiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiTGVuc2ZpdCIsImNvbXBvbmVudERpZE1vdW50IiwicGFyc2VkIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsImJhY2tVcmwiLCJjYWxsYmFja3VybCIsImhvc3BpdGFsX2lkIiwibGFiX2lkIiwiQVNTRVRTX0JBU0VfVVJMIiwic3RvcFByb3BhZ2F0aW9uIiwibWFwU3RhdGVUb1Byb3BzIiwicGFzc2VkUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O2tCQUNlLENBQUMsRUFBRUEsS0FBRixFQUFELEtBQWU7QUFDN0IsV0FBUTtBQUFBO0FBQUEs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VSxVQUFTLFVBQW5CLEVBQThCLGFBQVksdUJBQTFDO0FBMUJKO0FBREosYUFGSjtBQWdDSSwwQ0FBQywwQkFBRCxPQWhDSjtBQWlDSTtBQUFBO0FBQUEsa0JBQVEsV0FBVSxnQkFBbEIsRUFBbUMsU0FBVTVCLENBQUQsSUFBTztBQUNuQ0EsMEJBQUVDLGNBQUY7QUFDQUQsMEJBQUU2QixlQUFGO0FBQ0EsNkJBQUtoQyxLQUFMLENBQVdNLE9BQVgsQ0FBbUJDLElBQW5CLENBQXdCLFNBQXhCO0FBQ0MscUJBSmpCO0FBQUE7QUFBQTtBQWpDSixTQURKO0FBMENIO0FBbEVpQzs7a0JBcUV2QmMsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUZmOzs7O0FBQ0E7O0FBRUE7O0FBRUE7Ozs7OztBQUVBLE1BQU1BLE9BQU4sU0FBc0J4QixnQkFBTUMsU0FBNUIsQ0FBc0M7QUFDbENDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNIOztBQUlEc0Isd0JBQW9CLENBRW5COztBQUlEYixhQUFTOztBQUVMLGVBQ0ksOEJBQUMsaUJBQUQsRUFBaUIsS0FBS1QsS0FBdEIsQ0FESjtBQUdIO0FBbEJpQzs7QUFxQnRDLE1BQU1pQyxrQkFBa0IsQ0FBQ2hDLEtBQUQsRUFBUWlDLFdBQVIsS0FBd0I7O0FBRTVDLFdBQU8sRUFBUDtBQUdILENBTEQ7O0FBT0EsTUFBTUMscUJBQXNCQyxRQUFELElBQWM7QUFDckMsV0FBTyxFQUFQO0FBR0gsQ0FKRDs7a0JBT2UseUJBQVFILGVBQVIsRUFBeUJFLGtCQUF6QixFQUE2Q2QsT0FBN0MsQyIsImZpbGUiOiI4Ni5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5leHBvcnQgZGVmYXVsdCAoeyBpc1ZpcCB9KSA9PiB7XG5cdHJldHVybiAoPGRpdiBjbGFzc05hbWU9e2Bkc2NsbWVyLWZ0ciAke2lzVmlwPydtYXJnaW4tYm90dG9tLTU1JzonJ31gfT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTIwXCIgc3R5bGU9e3sgY29sb3I6ICcjOGE4YThhJywgZm9udFNpemU6IDEwIH19ID5UaGUgV2Vic2l0ZSBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBpbiBjYXNlIG9mIGEgbWVkaWNhbCBlbWVyZ2VuY3kgYW5kLyBvciBjcml0aWNhbCBjYXJlIGFuZCB0aGUgdXNlciBzaG91bGQgZGlyZWN0bHkgY29udGFjdCBoaXMvIGhlciBtZWRpY2FsIHNlcnZpY2UgcHJvdmlkZXIgZm9yIFBoeXNpY2FsIEV4YW1pbmF0aW9uLiBEb2NwcmltZSBpcyBzb2xlbHkgYSB0ZWNobm9sb2d5IHBhcnRuZXIuPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGZvb3Rlci1uZXctY29weXJnaHRcIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiA1IH19ID5cbiAgICAgICAgICAgICAgICAgICAgPHA+RG9jcHJpbWUuY29tIENvcHlyaWdodCAmY29weTsgMjAyMC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkFsbCByaWdodHMgcmVzZXJ2ZWQuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5ET0NQUklNRSBURUNITk9MT0dJRVMgUFJJVkFURSBMSU1JVEVEPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5DSU4gOiBVNzQ5OTlIUjIwMTZQVEMwNjQzMTI8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4pXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbml0aWFsc1BpY3R1cmUgZnJvbSAnLi4vaW5pdGlhbHNQaWN0dXJlJztcblxuY2xhc3MgQXJ0aWNsZUF1dGhvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblxuXHRcdH1cblx0fVxuXG5cdGF1dGhvckNsaWNrKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRpZiAodGhpcy5wcm9wcy51cmwpIHtcblx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHRoaXMucHJvcHMudXJsKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL29wZC9kb2N0b3IvJHt0aGlzLnByb3BzLmlkfWApXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtYXV0aG9yLWRpdiBtcmItMjBcIj5cblx0XHRcdFx0PEluaXRpYWxzUGljdHVyZSBjbGFzc05hbWU9XCJpbml0aWFsc1BpY3R1cmUtZHMgaW5pdGlhbHNQaWN0dXJlLWF1dGhvclwiIG5hbWU9e3RoaXMucHJvcHMubmFtZX0gaGFzX2ltYWdlPXshIXRoaXMucHJvcHMucHJvZmlsZUltYWdlfSA+XG5cdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJmbHRyLXVzci1pbWFnZSBpbWctcm91bmRcIiBzdHlsZT17eyB3aWR0aDogNjAsIGhlaWdodDogNjAsIG1hcmdpblJpZ2h0OiA4LCBmb250U2l6ZTogMTAgfX0gc3JjPXt0aGlzLnByb3BzLnByb2ZpbGVJbWFnZX0gYWx0PXtgRHIuICR7dGhpcy5wcm9wcy5uYW1lfWB9IHRpdGxlPXtgRHIuICR7dGhpcy5wcm9wcy5uYW1lfWB9IC8+XG5cdFx0XHRcdDwvSW5pdGlhbHNQaWN0dXJlPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF1dGhvci1kdGxzXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhdXRob3ItbmFtZS1kaXZcIj5cblx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IG1hcmdpbjogJzAgNnB4IDAgMCcgfX0+V3JpdHRlbiBCeSA6PC9zcGFuPlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnVybCA/XG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj17YC8ke3RoaXMucHJvcHMudXJsfWB9IG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmF1dGhvckNsaWNrKGUpfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1wcmltYXJ5XCI+e2BEci4gJHt0aGlzLnByb3BzLm5hbWV9YH08L2gzPlxuXHRcdFx0XHRcdFx0XHRcdDwvYT4gOlxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2Avb3BkL2RvY3Rvci8ke3RoaXMucHJvcHMuaWR9YH0gb25DbGljaz17KGUpID0+IHRoaXMuYXV0aG9yQ2xpY2soZSl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LXByaW1hcnlcIj57YERyLiAke3RoaXMucHJvcHMubmFtZX1gfTwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXV0aG9yLWV4cC1kaXZcIj5cblx0XHRcdFx0XHRcdDxzcGFuPnt0aGlzLnByb3BzLnNwZWNpYWxpdHl9IHwge3RoaXMucHJvcHMuZXhwZXJpZW5jZX0geWVhcnMgb2YgZXhwZXJpZW5jZTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLnB1Ymxpc2hlZERhdGUgP1xuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtZGF0ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPlB1Ymxpc2hlZCBEYXRlIDoge3RoaXMucHJvcHMucHVibGlzaGVkRGF0ZX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PiA6ICcnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlQXV0aG9yIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9MZWZ0QmFyJ1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvUmlnaHRCYXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi8uLi9jb21tb25zL0hlbG1ldFRhZ3MnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0hvbWUvZm9vdGVyJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bSdcbmltcG9ydCBJbml0aWFsc1BpY3R1cmUgZnJvbSAnLi4vaW5pdGlhbHNQaWN0dXJlJztcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSc7XG4vLyBpbXBvcnQgQ29tbWVudEJveCBmcm9tICcuL0FydGljbGVDb21tZW50Qm94LmpzJ1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG4vLyBpbXBvcnQgUmVwbHkgZnJvbSAnLi9SZXBseS5qcydcbmltcG9ydCBCYW5uZXJDYXJvdXNlbCBmcm9tICcuLi9Ib21lL2Jhbm5lckNhcm91c2VsJztcbmltcG9ydCBBcnRpY2xlQXV0aG9yIGZyb20gJy4uL2FydGljbGVBdXRob3IvYXJ0aWNsZUF1dGhvcic7XG5pbXBvcnQgTG9jYXRpb25FbGVtZW50cyBmcm9tICcuLi8uLi8uLi9jb250YWluZXJzL2NvbW1vbnMvbG9jYXRpb25FbGVtZW50cydcbmltcG9ydCBDb21tb25TZWFyY2ggZnJvbSAnLi4vLi4vLi4vY29udGFpbmVycy9jb21tb25zL0NvbW1vblNlYXJjaC5qcydcbmltcG9ydCBGaXhlZE1vYmlsZUZvb3RlciBmcm9tICcuLi9Ib21lL0ZpeGVkTW9iaWxlRm9vdGVyJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcbmltcG9ydCBEaXNjbGFpbWVyIGZyb20gJy4uLy4uL2NvbW1vbnMvSG9tZS9zdGF0aWNEaXNjbGFpbWVyLmpzJ1xuLy8gaW1wb3J0IEZvb3RlclRlc3RTcGVjaWFsaXphdGlvbldpZGdldHMgZnJvbSAnLi9Gb290ZXJUZXN0U3BlY2lhbGl6YXRpb25XaWRnZXRzLmpzJ1xuXG4vLyBpbXBvcnQgUmVsYXRlZEFydGljbGVzIGZyb20gJy4vUmVsYXRlZEFydGljbGVzJ1xuXG5jbGFzcyBMZW5zZml0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IGJhY2tVcmxcbiAgICAgICAgICAgIGlmKHBhcnNlZCAmJiBwYXJzZWQuY2FsbGJhY2t1cmwpe1xuICAgICAgICAgICAgICAgIGJhY2tVcmwgPSBwYXJzZWQuY2FsbGJhY2t1cmxcbiAgICAgICAgICAgICAgICBpZihwYXJzZWQuaG9zcGl0YWxfaWQpe1xuICAgICAgICAgICAgICAgICAgICBiYWNrVXJsICs9ICcmaG9zcGl0YWxfaWQ9JytwYXJzZWQuaG9zcGl0YWxfaWQrJyZpc0xlbnNmaXRTcGVjaWZpYz10cnVlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihwYXJzZWQubGFiX2lkKXtcbiAgICAgICAgICAgICAgICAgICAgYmFja1VybCArPSAnJmxhYl9pZD0nK3BhcnNlZC5sYWJfaWQrJyZpc0xlbnNmaXRTcGVjaWZpYz10cnVlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDU0IH19PlxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGFydGljbGUtY29udGFpbmVyIGZvbnQtYW5hbHl6ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0QmFyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctOCBjZW50ZXItY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgYXJ0aWNsZS1jb2x1bW4gbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxuc2ZpdC1kb2NcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9sZW5zaWNvLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibGFuc2ZpdC10cC1oZG5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigJxGUkVFIFBBSVIgT0YgRVlFIEdMQVNTRVMgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoRnJhbWUgKyBMZW5zKTxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT1IgU1VOR0xBU1NFUyB3b3J0aCDigrk3MjAg4oCdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBhcnRpY2xlLWNvbHVtbiBtYi0zIGxucy1sc3QtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsbnMtYXZsLW9mclwiPkhvdyB0byBhdmFpbCB0aGUgb2ZmZXI6IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsc24tc3Rwcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG5zLXN0ZXBzLXBhcmFcIj48c3Bhbj5TdGVwIDEuPC9zcGFuPiA8cD5PbmNlIHRoZSBhcHBvaW50bWVudCBpcyBjb21wbGV0ZWQsIHlvdSB3aWxsIGdldCBsZW5zZml0IHVuaXF1ZSBjb2RlIHRocm91Z2ggbWVzc2FnZSBhbmQgZW1haWw8L3A+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsbnMtc3RlcHMtcGFyYVwiPjxzcGFuPlN0ZXAgMi48L3NwYW4+IDxwPnZpc2l0ICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGVuc2ZpdC5jb20vY29sbGVjdGlvbnMvZG9jcHJpbWVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL3d3dy5sZW5zZml0LmNvbS9jb2xsZWN0aW9ucy9kb2NwcmltZSA8L2E+dG8gcmVkZWVtIHRoZSBvZmZlci4gQWxsIHByb2R1Y3RzIG9uIHRoaXMgbGluayB3aWxsIGJlIDEwMCUgT0ZGIHdpdGggZGVsaXZlcnkgY2hhcmdlIG9mIOKCuTI5OSArIEdTVCA8L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxucy1vZmZyLWFwbC1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4qT2ZmZXIgb25seSBhcHBsaWNhYmxlIG9uIGNvbXBsZXRlZCBPUEQgYW5kIGxhYiBib29raW5nczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPipDb3Vwb24gaXMgbm90IHRyYW5zZmVyYWJsZSBvciByZWRlZW1hYmxlIGZvciBjYXNoPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwPipDb3Vwb24gY29kZSBpcyB2YWxpZCB0aWxsIDMxc3QgRGVjZW1iZXIgMjAxOSBhbmQgY2FuIGJlIHVzZWQgb25seSBvbmNlPC9wPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxwPipEZWxpdmVyeSBjaGFyZ2Ugb2Yg4oK5Mjk5ICsgR1NUPC9wPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0QmFyIGNvbENsYXNzPVwiY29sLWxnLTRcIiBtc2dUZW1wbGF0ZT1cImdvbGRfZ2VuZXJhbF90ZW1wbGF0ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxEaXNjbGFpbWVyIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsZW5maXQtYmFja2J0blwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvb2ZmZXJzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgQmFjazwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMZW5zZml0IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcblxuaW1wb3J0IExlbnNGaXRWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9sZW5zRml0L2xlbnNmaXQuanMnXG5cbmNsYXNzIExlbnNmaXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgICB9XG5cbiAgICBcblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExlbnNGaXRWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwYXNzZWRQcm9wcykgPT4ge1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgICBcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIFxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShMZW5zZml0KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=