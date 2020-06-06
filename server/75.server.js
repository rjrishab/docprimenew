exports.ids = [75];
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

/***/ "./dev/js/components/commons/ratingsProfileView/AllRatingsView.js":
/*!************************************************************************!*\
  !*** ./dev/js/components/commons/ratingsProfileView/AllRatingsView.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactInfiniteScroller = __webpack_require__(/*! react-infinite-scroller */ "react-infinite-scroller");

var _reactInfiniteScroller2 = _interopRequireDefault(_reactInfiniteScroller);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _ComplimentListView = __webpack_require__(/*! ../../commons/ratingsProfileView/ComplimentListView.js */ "./dev/js/components/commons/ratingsProfileView/ComplimentListView.js");

var _ComplimentListView2 = _interopRequireDefault(_ComplimentListView);

var _ReviewList = __webpack_require__(/*! ../../commons/ratingsProfileView/ReviewList.js */ "./dev/js/components/commons/ratingsProfileView/ReviewList.js");

var _ReviewList2 = _interopRequireDefault(_ReviewList);

var _RatingGraph = __webpack_require__(/*! ../../commons/ratingsProfileView/RatingGraph.js */ "./dev/js/components/commons/ratingsProfileView/RatingGraph.js");

var _RatingGraph2 = _interopRequireDefault(_RatingGraph);

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _footer = __webpack_require__(/*! ../../commons/Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _staticDisclaimer = __webpack_require__(/*! ../../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


class AllRatingsView extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            hasMore: false,
            footerData: null,
            page: 2
        };
    }

    componentDidMount() {
        if (window) {
            window.scrollTo(0, 0);
        }
        const parsed = queryString.parse(this.props.location.search);
        let content_type = parsed.content_type;
        let object_id = parsed.id;
        this.props.getAllRatings(content_type, object_id, 1, (err, data, hasMore) => {
            if (!err && data) {
                this.setState({ data, hasMore });
            }
        });
        setTimeout(() => {
            this.setState({ hasMore: true });
        }, 0);
    }

    loadMore() {
        const parsed = queryString.parse(this.props.location.search);
        let content_type = parsed.content_type;
        let object_id = parsed.id;
        this.setState({ hasMore: false, loading: true }, () => {
            this.props.getAllRatings(content_type, object_id, this.state.page, (err, data, hasMore) => {
                let newData = _extends({}, this.state.data);
                newData.rating = newData.rating.concat(data.rating);
                this.setState({ loading: false, page: this.state.page + 1, hasMore, data: newData });
            });
        });
    }

    render() {

        return _react2.default.createElement(
            'div',
            { className: 'profile-body-wrap' },
            _react2.default.createElement(_DesktopProfileHeader2.default, { showSearch: true }),
            _react2.default.createElement(
                'section',
                { className: 'container parent-section book-appointment-section breadcrumb-mrgn' },
                _react2.default.createElement(
                    'div',
                    { className: 'row main-row parent-section-row' },
                    _react2.default.createElement(_LeftBar2.default, null),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 col-md-7 col-lg-7 center-column' },
                        _react2.default.createElement(
                            'div',
                            { className: 'container-fluid' },
                            _react2.default.createElement(
                                'div',
                                { className: 'row' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-12' },
                                    this.state.data ? _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(_RatingGraph2.default, { details: this.state.data }),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'user-satisfaction-section' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'row no-gutters' },
                                                this.state.data ? this.state.data.rating_graph.top_compliments.map(compliment => _react2.default.createElement(_ComplimentListView2.default, { key: compliment.id, details: compliment })) : ""
                                            )
                                        ),
                                        _react2.default.createElement(
                                            _reactInfiniteScroller2.default,
                                            {
                                                pageStart: 1,
                                                loadMore: this.loadMore.bind(this),
                                                hasMore: this.state.hasMore,
                                                useWindow: true,
                                                initialLoad: false
                                            },
                                            _react2.default.createElement(_ReviewList2.default, { details: this.state.data })
                                        )
                                    ) : ""
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(_RightBar2.default, { msgTemplate: 'gold_general_template' })
                )
            ),
            _react2.default.createElement(_staticDisclaimer2.default, null),
            _react2.default.createElement(_footer2.default, { footerData: this.state.footerData })
        );
    }

}

exports.default = AllRatingsView;

/***/ }),

/***/ "./dev/js/components/commons/ratingsProfileView/ComplimentListView.js":
/*!****************************************************************************!*\
  !*** ./dev/js/components/commons/ratingsProfileView/ComplimentListView.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ComplimentListView extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return _react2.default.createElement(
            "div",
            { className: "" },
            _react2.default.createElement(
                "div",
                { className: "user-satisfaction-images" },
                _react2.default.createElement("img", { className: "img-fluid", src: this.props.details.icon }),
                _react2.default.createElement(
                    "p",
                    null,
                    this.props.details.message
                ),
                _react2.default.createElement(
                    "span",
                    null,
                    this.props.details.count
                )
            )
        );
    }
}

exports.default = ComplimentListView;

/***/ }),

/***/ "./dev/js/components/commons/ratingsProfileView/RatingStars.js":
/*!*********************************************************************!*\
  !*** ./dev/js/components/commons/ratingsProfileView/RatingStars.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RatingStars extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let { average_rating, rating_count } = this.props;

        let rating = '';
        if (average_rating) {
            rating = Math.ceil(average_rating * 2) / 2;
        }

        let ratingArray = [];
        for (let i = 0; i < Math.floor(rating); i++) {
            ratingArray.push(_react2.default.createElement('img', { key: i, src: "/assets" + '/img/customer-icons/rating-star-filled.svg', className: 'img-cstm-docrating', style: { width: this.props.width, marginRight: 2, height: this.props.height } }));
        }

        if (rating != Math.floor(rating)) {
            ratingArray.push(_react2.default.createElement('img', { key: 'half', src: "/assets" + '/img/customer-icons/halfstar_new.svg', className: 'img-cstm-docrating', style: { width: this.props.width, marginRight: 2, height: this.props.height } }));
        }

        let emptyStars = Math.floor(5 - rating);
        if (emptyStars) {
            for (let i = 0; i < emptyStars; i++) {
                ratingArray.push(_react2.default.createElement('img', { key: i + 'empty', src: "/assets" + '/img/customer-icons/rating-star-empty.svg', className: 'img-cstm-docrating', style: { width: this.props.width, marginRight: 2, height: this.props.height } }));
            }
        }
        return _react2.default.createElement(
            'div',
            { className: 'cstm-doc-rtng', style: this.props.justifyCenter ? { justifyContent: 'center' } : {} },
            ratingArray,
            rating_count ? _react2.default.createElement(
                'span',
                null,
                '(',
                rating_count,
                ')'
            ) : ''
        );
    }
}

exports.default = RatingStars;

/***/ }),

/***/ "./dev/js/containers/commons/RatingsView.js":
/*!**************************************************!*\
  !*** ./dev/js/containers/commons/RatingsView.js ***!
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

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _AllRatingsView = __webpack_require__(/*! ../../components/commons/ratingsProfileView/AllRatingsView.js */ "./dev/js/components/commons/ratingsProfileView/AllRatingsView.js");

var _AllRatingsView2 = _interopRequireDefault(_AllRatingsView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RatingsView extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return _react2.default.createElement(_AllRatingsView2.default, this.props);
    }
}

RatingsView.contextTypes = {
    router: () => null
};
const mapStateToProps = (state, passedProps) => {
    /**
     * initialServerData is server rendered async data required build html on server. 
     */
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        getAllRatings: (content_type, object_id, page, cb) => dispatch((0, _index.getAllRatings)(content_type, object_id, page, cb))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(RatingsView);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9BbGxSYXRpbmdzVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9Db21wbGltZW50TGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9yYXRpbmdzUHJvZmlsZVZpZXcvUmF0aW5nU3RhcnMuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy9SYXRpbmdzVmlldy5qcyJdLCJuYW1lcyI6WyJpc1ZpcCIsImNvbG9yIiwiZm9udFNpemUiLCJwYWRkaW5nQm90dG9tIiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiQWxsUmF0aW5nc1ZpZXciLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJoYXNNb3JlIiwiZm9vdGVyRGF0YSIsInBhZ2UiLCJjb21wb25lbnREaWRNb3VudCIsIndpbmRvdyIsInNjcm9sbFRvIiwicGFyc2VkIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsImNvbnRlbnRfdHlwZSIsIm9iamVjdF9pZCIsImlkIiwiZ2V0QWxsUmF0aW5ncyIsImVyciIsInNldFN0YXRlIiwic2V0VGltZW91dCIsImxvYWRNb3JlIiwibG9hZGluZyIsIm5ld0RhdGEiLCJyYXRpbmciLCJjb25jYXQiLCJyZW5kZXIiLCJyYXRpbmdfZ3JhcGgiLCJ0b3BfY29tcGxpbWVudHMiLCJtYXAiLCJjb21wbGltZW50IiwiYmluZCIsIkNvbXBsaW1lbnRMaXN0VmlldyIsImRldGFpbHMiLCJpY29uIiwibWVzc2FnZSIsImNvdW50IiwiUmF0aW5nU3RhcnMiLCJhdmVyYWdlX3JhdGluZyIsInJhdGluZ19jb3VudCIsIk1hdGgiLCJjZWlsIiwicmF0aW5nQXJyYXkiLCJpIiwiZmxvb3IiLCJwdXNoIiwiQVNTRVRTX0JBU0VfVVJMIiwid2lkdGgiLCJtYXJnaW5SaWdodCIsImhlaWdodCIsImVtcHR5U3RhcnMiLCJqdXN0aWZ5Q2VudGVyIiwianVzdGlmeUNvbnRlbnQiLCJSYXRpbmdzVmlldyIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsInBhc3NlZFByb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O2tCQUNlLENBQUMsRUFBRUEsS0FBRixFQUFELEtBQWU7QUFDN0IsV0FBUTtBQUFBO0FBQUEsVUFBSyxXQUFZLGVBQWNBLFFBQU0sa0JBQU4sR0FBeUIsRUFBRyxFQUEzRDtBQUNPO0FBQUE7QUFBQSxjQUFHLFdBQVUsZUFBYixFQUE2QixPQUFPLEVBQUVDLE9BQU8sU0FBVCxFQUFvQkMsVUFBVSxFQUE5QixFQUFwQztBQUFBO0FBQUEsU0FEUDtBQUVPO0FBQUE7QUFBQSxjQUFLLFdBQVUsNEJBQWYsRUFBNEMsT0FBTyxFQUFFQyxlQUFlLENBQWpCLEVBQW5EO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKO0FBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBRlAsS0FBUjtBQVNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEQ7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQVRBLE1BQU1DLGNBQWNDLG1CQUFPQSxDQUFDLGtDQUFSLENBQXBCOzs7QUFXQSxNQUFNQyxjQUFOLFNBQTZCQyxnQkFBTUMsU0FBbkMs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S0tDLFksR0FBZTtBQUNsQkMsWUFBUSxNQUFNO0FBREksQztBQVcxQixNQUFNQyxrQkFBa0IsQ0FBQ3RELEtBQUQsRUFBUXVELFdBQVIsS0FBd0I7QUFDNUM7OztBQUdBLFdBQU8sRUFBUDtBQUdILENBUEQ7O0FBU0EsTUFBTUMscUJBQXNCQyxRQUFELElBQWM7QUFDckMsV0FBTztBQUNIMUMsdUJBQWUsQ0FBQ0gsWUFBRCxFQUFlQyxTQUFmLEVBQTBCVCxJQUExQixFQUFnQ3NELEVBQWhDLEtBQXVDRCxTQUFTLDBCQUFjN0MsWUFBZCxFQUE0QkMsU0FBNUIsRUFBdUNULElBQXZDLEVBQTZDc0QsRUFBN0MsQ0FBVDtBQURuRCxLQUFQO0FBR0gsQ0FKRDs7a0JBT2UseUJBQVFKLGVBQVIsRUFBeUJFLGtCQUF6QixFQUE2Q0wsV0FBN0MsQyIsImZpbGUiOiI3NS5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5leHBvcnQgZGVmYXVsdCAoeyBpc1ZpcCB9KSA9PiB7XG5cdHJldHVybiAoPGRpdiBjbGFzc05hbWU9e2Bkc2NsbWVyLWZ0ciAke2lzVmlwPydtYXJnaW4tYm90dG9tLTU1JzonJ31gfT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTIwXCIgc3R5bGU9e3sgY29sb3I6ICcjOGE4YThhJywgZm9udFNpemU6IDEwIH19ID5UaGUgV2Vic2l0ZSBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBpbiBjYXNlIG9mIGEgbWVkaWNhbCBlbWVyZ2VuY3kgYW5kLyBvciBjcml0aWNhbCBjYXJlIGFuZCB0aGUgdXNlciBzaG91bGQgZGlyZWN0bHkgY29udGFjdCBoaXMvIGhlciBtZWRpY2FsIHNlcnZpY2UgcHJvdmlkZXIgZm9yIFBoeXNpY2FsIEV4YW1pbmF0aW9uLiBEb2NwcmltZSBpcyBzb2xlbHkgYSB0ZWNobm9sb2d5IHBhcnRuZXIuPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGZvb3Rlci1uZXctY29weXJnaHRcIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiA1IH19ID5cbiAgICAgICAgICAgICAgICAgICAgPHA+RG9jcHJpbWUuY29tIENvcHlyaWdodCAmY29weTsgMjAyMC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkFsbCByaWdodHMgcmVzZXJ2ZWQuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5ET0NQUklNRSBURUNITk9MT0dJRVMgUFJJVkFURSBMSU1JVEVEPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5DSU4gOiBVNzQ5OTlIUjIwMTZQVEMwNjQzMTI8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4pXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcbmltcG9ydCBJbmZpbml0ZVNjcm9sbCBmcm9tICdyZWFjdC1pbmZpbml0ZS1zY3JvbGxlcic7XG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IENvbXBsaW1lbnRMaXN0VmlldyBmcm9tICcuLi8uLi9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9Db21wbGltZW50TGlzdFZpZXcuanMnXG5pbXBvcnQgUmV2aWV3TGlzdCBmcm9tICcuLi8uLi9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9SZXZpZXdMaXN0LmpzJ1xuaW1wb3J0IFJhdGluZ0dyYXBoIGZyb20gJy4uLy4uL2NvbW1vbnMvcmF0aW5nc1Byb2ZpbGVWaWV3L1JhdGluZ0dyYXBoLmpzJ1xuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9MZWZ0QmFyJ1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvUmlnaHRCYXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvSG9tZS9mb290ZXInXG5pbXBvcnQgRGlzY2xhaW1lciBmcm9tICcuLi8uLi9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcydcblxuY2xhc3MgQWxsUmF0aW5nc1ZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgICAgICBoYXNNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIGZvb3RlckRhdGE6IG51bGwsXG4gICAgICAgICAgICBwYWdlOiAyXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBjb250ZW50X3R5cGUgPSBwYXJzZWQuY29udGVudF90eXBlXG4gICAgICAgIGxldCBvYmplY3RfaWQgPSBwYXJzZWQuaWRcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRBbGxSYXRpbmdzKGNvbnRlbnRfdHlwZSwgb2JqZWN0X2lkLCAxLCAoZXJyLCBkYXRhLCBoYXNNb3JlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWVyciAmJiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGEsIGhhc01vcmUgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGFzTW9yZTogdHJ1ZSB9KVxuICAgICAgICB9LCAwKVxuICAgIH1cblxuICAgIGxvYWRNb3JlKCkge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IGNvbnRlbnRfdHlwZSA9IHBhcnNlZC5jb250ZW50X3R5cGVcbiAgICAgICAgbGV0IG9iamVjdF9pZCA9IHBhcnNlZC5pZFxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGFzTW9yZTogZmFsc2UsIGxvYWRpbmc6IHRydWUgfSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRBbGxSYXRpbmdzKGNvbnRlbnRfdHlwZSwgb2JqZWN0X2lkLCB0aGlzLnN0YXRlLnBhZ2UsIChlcnIsIGRhdGEsIGhhc01vcmUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3RGF0YSA9IHsgLi4udGhpcy5zdGF0ZS5kYXRhIH1cbiAgICAgICAgICAgICAgICBuZXdEYXRhLnJhdGluZyA9IG5ld0RhdGEucmF0aW5nLmNvbmNhdChkYXRhLnJhdGluZylcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIHBhZ2U6IHRoaXMuc3RhdGUucGFnZSArIDEsIGhhc01vcmUsIGRhdGE6IG5ld0RhdGEgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciBzaG93U2VhcmNoPXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBwYXJlbnQtc2VjdGlvbiBib29rLWFwcG9pbnRtZW50LXNlY3Rpb24gYnJlYWRjcnVtYi1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExlZnRCYXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03IGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYXRpbmdHcmFwaCBkZXRhaWxzPXt0aGlzLnN0YXRlLmRhdGF9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItc2F0aXNmYWN0aW9uLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEgPyB0aGlzLnN0YXRlLmRhdGEucmF0aW5nX2dyYXBoLnRvcF9jb21wbGltZW50cy5tYXAoY29tcGxpbWVudCA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBsaW1lbnRMaXN0VmlldyBrZXk9e2NvbXBsaW1lbnQuaWR9IGRldGFpbHM9e2NvbXBsaW1lbnR9IC8+KSA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbmZpbml0ZVNjcm9sbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTdGFydD17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkTW9yZT17dGhpcy5sb2FkTW9yZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc01vcmU9e3RoaXMuc3RhdGUuaGFzTW9yZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VXaW5kb3c9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbExvYWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZpZXdMaXN0IGRldGFpbHM9e3RoaXMuc3RhdGUuZGF0YX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5maW5pdGVTY3JvbGw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0QmFyIG1zZ1RlbXBsYXRlPVwiZ29sZF9nZW5lcmFsX3RlbXBsYXRlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPERpc2NsYWltZXIgLz5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIGZvb3RlckRhdGE9e3RoaXMuc3RhdGUuZm9vdGVyRGF0YX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQWxsUmF0aW5nc1ZpZXc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIENvbXBsaW1lbnRMaXN0VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXNhdGlzZmFjdGlvbi1pbWFnZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e3RoaXMucHJvcHMuZGV0YWlscy5pY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5wcm9wcy5kZXRhaWxzLm1lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5kZXRhaWxzLmNvdW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcGxpbWVudExpc3RWaWV3O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgUmF0aW5nU3RhcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyBhdmVyYWdlX3JhdGluZywgcmF0aW5nX2NvdW50IH0gPSB0aGlzLnByb3BzXG5cbiAgICAgICAgbGV0IHJhdGluZyA9ICcnXG4gICAgICAgIGlmIChhdmVyYWdlX3JhdGluZykge1xuICAgICAgICAgICAgcmF0aW5nID0gKE1hdGguY2VpbChhdmVyYWdlX3JhdGluZyAqIDIpKSAvIDI7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmF0aW5nQXJyYXkgPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGguZmxvb3IocmF0aW5nKTsgaSsrKSB7XG4gICAgICAgICAgICByYXRpbmdBcnJheS5wdXNoKDxpbWcga2V5PXtpfSBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL3JhdGluZy1zdGFyLWZpbGxlZC5zdmcnfSBjbGFzc05hbWU9XCJpbWctY3N0bS1kb2NyYXRpbmdcIiBzdHlsZT17eyB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCwgbWFyZ2luUmlnaHQ6IDIsIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgfX0gLz4pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmF0aW5nICE9IE1hdGguZmxvb3IocmF0aW5nKSkge1xuICAgICAgICAgICAgcmF0aW5nQXJyYXkucHVzaCg8aW1nIGtleT0naGFsZicgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9oYWxmc3Rhcl9uZXcuc3ZnJ30gY2xhc3NOYW1lPVwiaW1nLWNzdG0tZG9jcmF0aW5nXCIgc3R5bGU9e3sgd2lkdGg6IHRoaXMucHJvcHMud2lkdGgsIG1hcmdpblJpZ2h0OiAyLCBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0IH19IC8+KVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGVtcHR5U3RhcnMgPSBNYXRoLmZsb29yKDUgLSByYXRpbmcpO1xuICAgICAgICBpZiAoZW1wdHlTdGFycykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbXB0eVN0YXJzOyBpKyspIHtcbiAgICAgICAgICAgICAgICByYXRpbmdBcnJheS5wdXNoKDxpbWcga2V5PXtpICsgJ2VtcHR5J30gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9yYXRpbmctc3Rhci1lbXB0eS5zdmcnfSBjbGFzc05hbWU9XCJpbWctY3N0bS1kb2NyYXRpbmdcIiBzdHlsZT17eyB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCwgbWFyZ2luUmlnaHQ6IDIsIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgfX0gLz4pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3N0bS1kb2MtcnRuZ1wiIHN0eWxlPXt0aGlzLnByb3BzLmp1c3RpZnlDZW50ZXIgPyB7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9IDoge319PlxuICAgICAgICAgICAgICAgIHtyYXRpbmdBcnJheX1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJhdGluZ19jb3VudCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4oe3JhdGluZ19jb3VudH0pPC9zcGFuPiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhdGluZ1N0YXJzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGdldEFsbFJhdGluZ3MgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuXG5pbXBvcnQgQWxsUmF0aW5nc1ZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9BbGxSYXRpbmdzVmlldy5qcydcblxuXG5jbGFzcyBSYXRpbmdzVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcm91dGVyOiAoKSA9PiBudWxsXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEFsbFJhdGluZ3NWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwYXNzZWRQcm9wcykgPT4ge1xuICAgIC8qKlxuICAgICAqIGluaXRpYWxTZXJ2ZXJEYXRhIGlzIHNlcnZlciByZW5kZXJlZCBhc3luYyBkYXRhIHJlcXVpcmVkIGJ1aWxkIGh0bWwgb24gc2VydmVyLiBcbiAgICAgKi9cbiAgICByZXR1cm4ge1xuXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRBbGxSYXRpbmdzOiAoY29udGVudF90eXBlLCBvYmplY3RfaWQsIHBhZ2UsIGNiKSA9PiBkaXNwYXRjaChnZXRBbGxSYXRpbmdzKGNvbnRlbnRfdHlwZSwgb2JqZWN0X2lkLCBwYWdlLCBjYikpLFxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShSYXRpbmdzVmlldyk7XG4iXSwic291cmNlUm9vdCI6IiJ9