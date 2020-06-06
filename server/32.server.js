exports.ids = [32];
exports.modules = {

/***/ "./dev/js/components/commons/notFound/index.js":
/*!*****************************************************!*\
  !*** ./dev/js/components/commons/notFound/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _notFound = __webpack_require__(/*! ./notFound */ "./dev/js/components/commons/notFound/notFound.js");

var _notFound2 = _interopRequireDefault(_notFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _notFound2.default;

/***/ }),

/***/ "./dev/js/components/commons/notFound/notFound.js":
/*!********************************************************!*\
  !*** ./dev/js/components/commons/notFound/notFound.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class NotFound extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return _react2.default.createElement(
            "div",
            { className: "profile-body-wrap" },
            _react2.default.createElement(
                "header",
                { className: "profile-header", style: { display: 'block' } },
                _react2.default.createElement(
                    "div",
                    { className: "smiley-img-div" },
                    _react2.default.createElement("img", { src: "/assets" + "/img/customer-icons/smiley.png" })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "container" },
                    _react2.default.createElement(
                        "div",
                        { className: "row header-row" },
                        _react2.default.createElement(
                            "div",
                            { className: "col-12 text-center logo-icon-div" },
                            _react2.default.createElement(
                                "a",
                                { href: "javascript:;", onClick: () => {
                                        this.props.history.push('/');
                                    } },
                                _react2.default.createElement("img", { src: "/assets" + "/img/doc-prime-logo.png", className: "logo-icon" })
                            )
                        )
                    )
                )
            ),
            _react2.default.createElement("div", { className: "subheader" }),
            _react2.default.createElement(
                "div",
                { className: "container" },
                _react2.default.createElement(
                    "div",
                    { className: "row" },
                    _react2.default.createElement(
                        "div",
                        { className: "col-12 col-md-10 offset-md-1" },
                        _react2.default.createElement(
                            "div",
                            { className: "error-widget text-center" },
                            _react2.default.createElement(
                                "p",
                                { className: "error-head fw-500" },
                                "404"
                            ),
                            _react2.default.createElement("img", { src: "/assets" + "/img/icons/error.png" }),
                            _react2.default.createElement(
                                "p",
                                { className: "error-text fw-500" },
                                "Page not found !"
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "error-link" },
                                "Go to ",
                                _react2.default.createElement(
                                    "a",
                                    { href: "javascript:;", onClick: () => {
                                            this.props.history.push('/');
                                        } },
                                    "docprime homepage"
                                )
                            )
                        )
                    )
                )
            )
        );
    }
}

exports.default = NotFound;

/***/ }),

/***/ "./dev/js/components/diagnosis/commons/labProfileCard/index.js":
/*!*********************************************************************!*\
  !*** ./dev/js/components/diagnosis/commons/labProfileCard/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LabProfileCard = __webpack_require__(/*! ./LabProfileCard.js */ "./dev/js/components/diagnosis/commons/labProfileCard/LabProfileCard.js");

var _LabProfileCard2 = _interopRequireDefault(_LabProfileCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _LabProfileCard2.default;

/***/ }),

/***/ "./dev/js/components/diagnosis/commons/labResultCard/LabResultCard.js":
/*!****************************************************************************!*\
  !*** ./dev/js/components/diagnosis/commons/labResultCard/LabResultCard.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _storage = __webpack_require__(/*! ../../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _initialsPicture = __webpack_require__(/*! ../../../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _utils = __webpack_require__(/*! ../../../../helpers/utils.js */ "./dev/js/helpers/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LabResultCard extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    openLab(id, url, e) {
        let dedupe_ids = {};
        this.props.clearExtraTests();
        let testIds = this.props.currentSearchedCriterias.reduce((final, x) => {
            final = final || [];
            if (x.test && x.type == "condition") {
                x.test = x.test || [];
                final = [...final, ...x.test];
            } else if (x.type == "test") {
                final.push(x);
            }
            return final;
        }, []).filter(x => {
            if (dedupe_ids[x.id]) {
                return false;
            } else {
                dedupe_ids[x.id] = true;
                return true;
            }
        }).map(test => {
            let new_test = Object.assign({}, test);
            new_test.extra_test = true;
            new_test.lab_id = id;
            this.props.toggleDiagnosisCriteria('test', new_test, true);
        });
        let data = {
            'Category': 'ConsumerApp', 'Action': 'RankOfLabClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'rank-lab-clicked', 'Rank': this.props.rank + 1
        };
        _gtm2.default.sendEvent({ data: data });

        data = {
            'Category': 'ConsumerApp', 'Action': 'LabSelectedByUser', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-selected-by-user', 'LabId': id
        };
        _gtm2.default.sendEvent({ data: data });

        if (e.ctrlKey || e.metaKey) {} else {
            e.preventDefault();

            if (url) {
                this.props.history.push(`/${url}`);
            } else {
                this.props.history.push(`/lab/${id}`);
            }
        }
    }

    render() {

        let { price, lab, distance, pickup_available, lab_timing, lab_timing_data, mrp, next_lab_timing, next_lab_timing_data, distance_related_charges, pickup_charges } = this.props.details;

        distance = Math.ceil(distance / 1000);

        var openingTime = '';
        if (this.props.details.lab_timing) {
            openingTime = this.props.details.lab_timing.split('-')[0];
        }

        let pickup_text = "";
        if (lab.is_home_collection_enabled && distance_related_charges == 1) {
            pickup_text = "Home pickup charges applicable";
        }

        if (lab.is_home_collection_enabled && !distance_related_charges) {
            pickup_text = "Inclusive of home visit charges";
            price = price + pickup_charges;
        }

        let offPercent = '';
        if (mrp && price && price < mrp) {
            offPercent = parseInt((mrp - price) / mrp * 100);
        }
        let hide_price = false;
        if (this.props.test_data) {
            this.props.test_data.map(test => {
                if (test.hide_price) {
                    hide_price = true;
                }
            });
        }
        return _react2.default.createElement(
            'div',
            { className: 'filter-card-dl mb-3' },
            _react2.default.createElement(
                'div',
                { className: 'fltr-crd-top-container' },
                _react2.default.createElement(
                    'div',
                    { className: 'fltr-lctn-dtls' },
                    _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement('img', { className: 'fltr-loc-ico', style: { width: 12, height: 18 }, src: "/assets" + "/img/customer-icons/map-marker-blue.svg" }),
                        _react2.default.createElement(
                            'span',
                            { className: 'fltr-loc-txt' },
                            lab.locality,
                            lab.locality ? "," : "",
                            ' ',
                            lab.city
                        ),
                        _react2.default.createElement(
                            'span',
                            null,
                            '\xA0|\xA0',
                            distance,
                            ' Km'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row no-gutters mrt-10', onClick: this.openLab.bind(this, this.props.details.lab.id, this.props.details.lab.url) },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12' },
                        _react2.default.createElement(
                            'a',
                            null,
                            _react2.default.createElement(
                                'h2',
                                { className: 'lab-fltr-dc-name fw-500 text-md', style: { color: '#000' } },
                                lab.name
                            )
                        ),
                        !hide_price && offPercent && offPercent > 0 ? _react2.default.createElement(
                            'span',
                            { className: 'filtr-offer ofr-ribbon fw-700' },
                            offPercent,
                            '% OFF'
                        ) : ''
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-7 mrt-10' },
                        _react2.default.createElement(
                            'div',
                            { className: 'img-nd-dtls' },
                            _react2.default.createElement(
                                'div',
                                { className: 'text-center' },
                                _react2.default.createElement(
                                    _initialsPicture2.default,
                                    { name: lab.name, has_image: !!lab.lab_thumbnail, className: 'initialsPicture-ls' },
                                    _react2.default.createElement('img', { className: 'fltr-usr-image-lab', src: lab.lab_thumbnail })
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: { marginLeft: '8px', marginRight: '8px' } },
                                this.props.details.tests && this.props.details.tests.length == 1 ? _react2.default.createElement(
                                    'p',
                                    { style: { color: '#000', fontSize: 14, fontWeight: 400 } },
                                    this.props.details.tests[0].name
                                ) : ''
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-5 mrt-10 text-right', style: { paddingLeft: 8 } },
                        price && !hide_price ? _react2.default.createElement(
                            'p',
                            { className: 'text-primary fw-500 text-lg mrb-10' },
                            '\u20B9 ',
                            price,
                            _react2.default.createElement(
                                'span',
                                { className: 'fltr-cut-price', style: { verticalAlign: '1px' } },
                                '\u20B9 ',
                                mrp
                            )
                        ) : '',
                        hide_price ? _react2.default.createElement(
                            'p',
                            { className: 'text-primary fw-500 text-lg mrb-10' },
                            'Free'
                        ) : '',
                        _storage2.default.checkAuth() || price < 100 ? '' : _react2.default.createElement(
                            'div',
                            { className: 'signup-off-container' },
                            _react2.default.createElement(
                                'span',
                                { className: 'signup-off-doc', style: { fontSize: 12 } },
                                '+ \u20B9 100 OFF ',
                                _react2.default.createElement(
                                    'b',
                                    null,
                                    'on Signup'
                                ),
                                ' '
                            )
                        ),
                        _react2.default.createElement(
                            'button',
                            { className: 'fltr-bkng-btn', style: { width: '100%' } },
                            'Book Now'
                        )
                    )
                ),
                this.props.details.tests && this.props.details.tests.length >= 2 ? _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'ul',
                        { className: 'fltr-labs-test-selected mrt-10' },
                        _react2.default.createElement(
                            'span',
                            { className: 'fltr-prv-selected-test' },
                            'Tests Selected'
                        ),
                        this.props.details.tests.map((test, i) => {
                            return _react2.default.createElement(
                                'li',
                                { className: 'fltr-slected-test', key: i },
                                _react2.default.createElement(
                                    'label',
                                    { style: { fontWeight: 400 } },
                                    test.name
                                ),
                                hide_price ? _react2.default.createElement(
                                    'p',
                                    { style: { fontWeight: 400 } },
                                    'Free'
                                ) : _react2.default.createElement(
                                    'p',
                                    { style: { fontWeight: 400 } },
                                    '\u20B9 ',
                                    test.deal_price,
                                    ' ',
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        '\u20B9 ',
                                        test.mrp
                                    )
                                )
                            );
                        })
                    )
                ) : ''
            ),
            _react2.default.createElement(
                'div',
                { className: 'filtr-card-footer' },
                pickup_text ? _react2.default.createElement(
                    'div',
                    { style: { paddingRight: 8 } },
                    _react2.default.createElement(
                        'p',
                        { style: { marginLeft: 0 } },
                        '* ',
                        pickup_text
                    )
                ) : "",
                _react2.default.createElement(
                    'div',
                    { className: 'text-right', style: { marginLeft: 'auto' } },
                    _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/clock-black.svg" }),
                    (0, _utils.buildOpenBanner)(lab_timing, lab_timing_data, next_lab_timing, next_lab_timing_data)
                )
            )
        );
    }
}

exports.default = LabResultCard;

/***/ }),

/***/ "./dev/js/components/diagnosis/commons/labResultCard/index.js":
/*!********************************************************************!*\
  !*** ./dev/js/components/diagnosis/commons/labResultCard/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LabResultCard = __webpack_require__(/*! ./LabResultCard.js */ "./dev/js/components/diagnosis/commons/labResultCard/LabResultCard.js");

var _LabResultCard2 = _interopRequireDefault(_LabResultCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _LabResultCard2.default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL25vdEZvdW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvbm90Rm91bmQvbm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL2NvbW1vbnMvbGFiUHJvZmlsZUNhcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL2NvbW1vbnMvbGFiUmVzdWx0Q2FyZC9MYWJSZXN1bHRDYXJkLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9jb21tb25zL2xhYlJlc3VsdENhcmQvaW5kZXguanMiXSwibmFtZXMiOlsiTm90Rm91bmRWaWV3IiwiTm90Rm91bmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJyZW5kZXIiLCJkaXNwbGF5IiwiQVNTRVRTX0JBU0VfVVJMIiwiaGlzdG9yeSIsInB1c2giLCJMYWJQcm9maWxlQ2FyZCIsIkxhYlJlc3VsdENhcmQiLCJvcGVuTGFiIiwiaWQiLCJ1cmwiLCJlIiwiZGVkdXBlX2lkcyIsImNsZWFyRXh0cmFUZXN0cyIsInRlc3RJZHMiLCJjdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMiLCJyZWR1Y2UiLCJmaW5hbCIsIngiLCJ0ZXN0IiwidHlwZSIsImZpbHRlciIsIm1hcCIsIm5ld190ZXN0IiwiT2JqZWN0IiwiYXNzaWduIiwiZXh0cmFfdGVzdCIsImxhYl9pZCIsInRvZ2dsZURpYWdub3Npc0NyaXRlcmlhIiwiZGF0YSIsIkdUTSIsImdldFVzZXJJZCIsInJhbmsiLCJzZW5kRXZlbnQiLCJjdHJsS2V5IiwibWV0YUtleSIsInByZXZlbnREZWZhdWx0IiwicHJpY2UiLCJsYWIiLCJkaXN0YW5jZSIsInBpY2t1cF9hdmFpbGFibGUiLCJsYWJfdGltaW5nIiwibGFiX3RpbWluZ19kYXRhIiwibXJwIiwibmV4dF9sYWJfdGltaW5nIiwibmV4dF9sYWJfdGltaW5nX2RhdGEiLCJkaXN0YW5jZV9yZWxhdGVkX2NoYXJnZXMiLCJwaWNrdXBfY2hhcmdlcyIsImRldGFpbHMiLCJNYXRoIiwiY2VpbCIsIm9wZW5pbmdUaW1lIiwic3BsaXQiLCJwaWNrdXBfdGV4dCIsImlzX2hvbWVfY29sbGVjdGlvbl9lbmFibGVkIiwib2ZmUGVyY2VudCIsInBhcnNlSW50IiwiaGlkZV9wcmljZSIsInRlc3RfZGF0YSIsIndpZHRoIiwiaGVpZ2h0IiwibG9jYWxpdHkiLCJjaXR5IiwiYmluZCIsImNvbG9yIiwibmFtZSIsImxhYl90aHVtYm5haWwiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJ0ZXN0cyIsImxlbmd0aCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInBhZGRpbmdMZWZ0IiwidmVydGljYWxBbGlnbiIsIlNUT1JBR0UiLCJjaGVja0F1dGgiLCJpIiwiZGVhbF9wcmljZSIsInBhZGRpbmdSaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O2tCQUVlQSxrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7OztBQUVBLE1BQU1DLFFBQU4sU0FBdUJDLGdCQUFNQyxTQUE3QixDQUF1QztBQUNuQ0MsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0g7O0FBRURDLGFBQVM7O0FBRUwsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLG1CQUFmO0FBQ0k7QUFBQTtBQUFBLGtCQUFRLFdBQVUsZ0JBQWxCLEVBQW1DLE9BQU8sRUFBRUMsU0FBUyxPQUFYLEVBQTFDO0FBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsZ0JBQWY7QUFDSSwyREFBSyxLQUFLQyxTQUFlQSxHQUFHLGdDQUE1QjtBQURKLGlCQURKO0FBSUk7QUFBQTtBQUFBLHNCQUFLLFdBQVUsV0FBZjtBQUNJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLGdCQUFmO0FBQ0k7QUFB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MEIsY0FBYyxDQUFoQixFQUFaO0FBQ1Y7QUFBQTtBQUFBLDBCQUFHLE9BQU8sRUFBRVosWUFBWSxDQUFkLEVBQVY7QUFBQTtBQUFnQ2Q7QUFBaEM7QUFEVSxpQkFBZCxHQUVTLEVBSmpCO0FBTUk7QUFBQTtBQUFBLHNCQUFLLFdBQVUsWUFBZixFQUE0QixPQUFPLEVBQUVjLFlBQVksTUFBZCxFQUFuQztBQUNJLDJEQUFLLEtBQUtoRSxTQUFlQSxHQUFHLHFDQUE1QixHQURKO0FBRUssZ0RBQWdCc0MsVUFBaEIsRUFBNEJDLGVBQTVCLEVBQTZDRSxlQUE3QyxFQUE4REMsb0JBQTlEO0FBRkw7QUFOSjtBQXhFSixTQURKO0FBc0ZIO0FBOUt1Qzs7a0JBaUw3QnRDLGE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZMZjs7Ozs7O2tCQUVlQSx1QiIsImZpbGUiOiIzMi5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm90Rm91bmRWaWV3IGZyb20gJy4vbm90Rm91bmQnXG5cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIE5vdEZvdW5kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInByb2ZpbGUtaGVhZGVyXCIgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWlsZXktaW1nLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9zbWlsZXkucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgaGVhZGVyLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHRleHQtY2VudGVyIGxvZ28taWNvbi1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9kb2MtcHJpbWUtbG9nby5wbmdcIn0gY2xhc3NOYW1lPVwibG9nby1pY29uXCIgLz48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJoZWFkZXJcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtMTAgb2Zmc2V0LW1kLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLXdpZGdldCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvci1oZWFkIGZ3LTUwMFwiPjQwNDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9lcnJvci5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dCBmdy01MDBcIj5QYWdlIG5vdCBmb3VuZCAhPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvci1saW5rXCI+R28gdG8gPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+ZG9jcHJpbWUgaG9tZXBhZ2U8L2E+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kXG4iLCJpbXBvcnQgTGFiUHJvZmlsZUNhcmQgZnJvbSAnLi9MYWJQcm9maWxlQ2FyZC5qcydcblxuZXhwb3J0IGRlZmF1bHQgTGFiUHJvZmlsZUNhcmQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmltcG9ydCBJbml0aWFsc1BpY3R1cmUgZnJvbSAnLi4vLi4vLi4vY29tbW9ucy9pbml0aWFsc1BpY3R1cmUnXG5pbXBvcnQgeyBidWlsZE9wZW5CYW5uZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuXG5jbGFzcyBMYWJSZXN1bHRDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICBvcGVuTGFiKGlkLCB1cmwsIGUpIHtcbiAgICAgICAgbGV0IGRlZHVwZV9pZHMgPSB7fVxuICAgICAgICB0aGlzLnByb3BzLmNsZWFyRXh0cmFUZXN0cygpXG4gICAgICAgIGxldCB0ZXN0SWRzID0gdGhpcy5wcm9wcy5jdXJyZW50U2VhcmNoZWRDcml0ZXJpYXNcbiAgICAgICAgICAgIC5yZWR1Y2UoKGZpbmFsLCB4KSA9PiB7XG4gICAgICAgICAgICAgICAgZmluYWwgPSBmaW5hbCB8fCBbXVxuICAgICAgICAgICAgICAgIGlmICh4LnRlc3QgJiYgeC50eXBlID09IFwiY29uZGl0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgeC50ZXN0ID0geC50ZXN0IHx8IFtdXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsID0gWy4uLmZpbmFsLCAuLi54LnRlc3RdXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh4LnR5cGUgPT0gXCJ0ZXN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZmluYWwucHVzaCh4KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmluYWxcbiAgICAgICAgICAgIH0sIFtdKVxuICAgICAgICAgICAgLmZpbHRlcigoeCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkZWR1cGVfaWRzW3guaWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZHVwZV9pZHNbeC5pZF0gPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkubWFwKCh0ZXN0KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld190ZXN0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGVzdClcbiAgICAgICAgICAgICAgICBuZXdfdGVzdC5leHRyYV90ZXN0ID0gdHJ1ZVxuICAgICAgICAgICAgICAgIG5ld190ZXN0LmxhYl9pZCA9IGlkXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSgndGVzdCcsIG5ld190ZXN0LCB0cnVlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1JhbmtPZkxhYkNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdyYW5rLWxhYi1jbGlja2VkJywgJ1JhbmsnOiB0aGlzLnByb3BzLnJhbmsgKyAxXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMYWJTZWxlY3RlZEJ5VXNlcicsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2xhYi1zZWxlY3RlZC1ieS11c2VyJywgJ0xhYklkJzogaWRcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgIGlmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSB7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHt1cmx9YClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9sYWIvJHtpZH1gKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCB7IHByaWNlLCBsYWIsIGRpc3RhbmNlLCBwaWNrdXBfYXZhaWxhYmxlLCBsYWJfdGltaW5nLCBsYWJfdGltaW5nX2RhdGEsIG1ycCwgbmV4dF9sYWJfdGltaW5nLCBuZXh0X2xhYl90aW1pbmdfZGF0YSwgZGlzdGFuY2VfcmVsYXRlZF9jaGFyZ2VzLCBwaWNrdXBfY2hhcmdlcyB9ID0gdGhpcy5wcm9wcy5kZXRhaWxzO1xuXG4gICAgICAgIGRpc3RhbmNlID0gTWF0aC5jZWlsKGRpc3RhbmNlIC8gMTAwMCk7XG5cbiAgICAgICAgdmFyIG9wZW5pbmdUaW1lID0gJydcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGV0YWlscy5sYWJfdGltaW5nKSB7XG4gICAgICAgICAgICBvcGVuaW5nVGltZSA9IHRoaXMucHJvcHMuZGV0YWlscy5sYWJfdGltaW5nLnNwbGl0KCctJylbMF07XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGlja3VwX3RleHQgPSBcIlwiXG4gICAgICAgIGlmIChsYWIuaXNfaG9tZV9jb2xsZWN0aW9uX2VuYWJsZWQgJiYgZGlzdGFuY2VfcmVsYXRlZF9jaGFyZ2VzID09IDEpIHtcbiAgICAgICAgICAgIHBpY2t1cF90ZXh0ID0gXCJIb21lIHBpY2t1cCBjaGFyZ2VzIGFwcGxpY2FibGVcIlxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxhYi5pc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCAmJiAhZGlzdGFuY2VfcmVsYXRlZF9jaGFyZ2VzKSB7XG4gICAgICAgICAgICBwaWNrdXBfdGV4dCA9IFwiSW5jbHVzaXZlIG9mIGhvbWUgdmlzaXQgY2hhcmdlc1wiXG4gICAgICAgICAgICBwcmljZSA9IHByaWNlICsgcGlja3VwX2NoYXJnZXNcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBvZmZQZXJjZW50ID0gJydcbiAgICAgICAgaWYgKG1ycCAmJiBwcmljZSAmJiAocHJpY2UgPCBtcnApKSB7XG4gICAgICAgICAgICBvZmZQZXJjZW50ID0gcGFyc2VJbnQoKChtcnAgLSBwcmljZSkgLyBtcnApICogMTAwKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaGlkZV9wcmljZSA9IGZhbHNlXG4gICAgICAgIGlmKHRoaXMucHJvcHMudGVzdF9kYXRhKXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudGVzdF9kYXRhLm1hcCgodGVzdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHRlc3QuaGlkZV9wcmljZSl7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVfcHJpY2UgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItY2FyZC1kbCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbHRyLWNyZC10b3AtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmx0ci1sY3RuLWR0bHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmx0ci1sb2MtaWNvXCIgc3R5bGU9e3sgd2lkdGg6IDEyLCBoZWlnaHQ6IDE4IH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL21hcC1tYXJrZXItYmx1ZS5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbHRyLWxvYy10eHRcIj57bGFiLmxvY2FsaXR5fXtsYWIubG9jYWxpdHkgPyBcIixcIiA6IFwiXCJ9IHtsYWIuY2l0eX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Jm5ic3A7fCZuYnNwO3tkaXN0YW5jZX0gS208L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzIG1ydC0xMFwiIG9uQ2xpY2s9e3RoaXMub3BlbkxhYi5iaW5kKHRoaXMsIHRoaXMucHJvcHMuZGV0YWlscy5sYWIuaWQsIHRoaXMucHJvcHMuZGV0YWlscy5sYWIudXJsKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibGFiLWZsdHItZGMtbmFtZSBmdy01MDAgdGV4dC1tZFwiIHN0eWxlPXt7IGNvbG9yOiAnIzAwMCcgfX0+e2xhYi5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWhpZGVfcHJpY2UgJiYgb2ZmUGVyY2VudCAmJiBvZmZQZXJjZW50ID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWx0ci1vZmZlciBvZnItcmliYm9uIGZ3LTcwMFwiPntvZmZQZXJjZW50fSUgT0ZGPC9zcGFuPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC03IG1ydC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLW5kLWR0bHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluaXRpYWxzUGljdHVyZSBuYW1lPXtsYWIubmFtZX0gaGFzX2ltYWdlPXshIWxhYi5sYWJfdGh1bWJuYWlsfSBjbGFzc05hbWU9XCJpbml0aWFsc1BpY3R1cmUtbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZsdHItdXNyLWltYWdlLWxhYlwiIHNyYz17bGFiLmxhYl90aHVtYm5haWx9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0luaXRpYWxzUGljdHVyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzhweCcsbWFyZ2luUmlnaHQ6ICc4cHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGV0YWlscy50ZXN0cyAmJiB0aGlzLnByb3BzLmRldGFpbHMudGVzdHMubGVuZ3RoID09IDEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJyMwMDAnLCBmb250U2l6ZTogMTQsIGZvbnRXZWlnaHQ6IDQwMCB9fT57dGhpcy5wcm9wcy5kZXRhaWxzLnRlc3RzWzBdLm5hbWV9PC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC01IG1ydC0xMCB0ZXh0LXJpZ2h0XCIgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDggfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgJiYgIWhpZGVfcHJpY2U/IDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmdy01MDAgdGV4dC1sZyBtcmItMTBcIj4mIzgzNzc7IHtwcmljZX08c3BhbiBjbGFzc05hbWU9XCJmbHRyLWN1dC1wcmljZVwiIHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246ICcxcHgnIH19ID4mIzgzNzc7IHttcnB9PC9zcGFuPjwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9wcmljZT8gPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZ3LTUwMCB0ZXh0LWxnIG1yYi0xMFwiPkZyZWU8L3A+OicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU1RPUkFHRS5jaGVja0F1dGgoKSB8fCBwcmljZSA8IDEwMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cInNpZ251cC1vZmYtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2lnbnVwLW9mZi1kb2NcIiBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0gPisg4oK5IDEwMCBPRkYgPGI+b24gU2lnbnVwPC9iPiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbHRyLWJrbmctYnRuXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSA+Qm9vayBOb3c8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZXRhaWxzLnRlc3RzICYmIHRoaXMucHJvcHMuZGV0YWlscy50ZXN0cy5sZW5ndGggPj0gMiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsdHItbGFicy10ZXN0LXNlbGVjdGVkIG1ydC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmx0ci1wcnYtc2VsZWN0ZWQtdGVzdFwiPlRlc3RzIFNlbGVjdGVkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGV0YWlscy50ZXN0cy5tYXAoKHRlc3QsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBjbGFzc05hbWU9XCJmbHRyLXNsZWN0ZWQtdGVzdFwiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZm9udFdlaWdodDogNDAwIH19Pnt0ZXN0Lm5hbWV9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX3ByaWNlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDQwMCB9fT5GcmVlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8cCBzdHlsZT17eyBmb250V2VpZ2h0OiA0MDAgfX0+JiN4MjBCOTsge3Rlc3QuZGVhbF9wcmljZX0gPHNwYW4+JiN4MjBCOTsge3Rlc3QubXJwfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ci1jYXJkLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwaWNrdXBfdGV4dCA/IDxkaXYgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiA4IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDAgfX0+KiB7cGlja3VwX3RleHR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICdhdXRvJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvY2xvY2stYmxhY2suc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YnVpbGRPcGVuQmFubmVyKGxhYl90aW1pbmcsIGxhYl90aW1pbmdfZGF0YSwgbmV4dF9sYWJfdGltaW5nLCBuZXh0X2xhYl90aW1pbmdfZGF0YSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYWJSZXN1bHRDYXJkIiwiaW1wb3J0IExhYlJlc3VsdENhcmQgZnJvbSAnLi9MYWJSZXN1bHRDYXJkLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBMYWJSZXN1bHRDYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==