(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFound = function (_React$Component) {
    _inherits(NotFound, _React$Component);

    function NotFound(props) {
        _classCallCheck(this, NotFound);

        return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).call(this, props));
    }

    _createClass(NotFound, [{
        key: "render",
        value: function render() {
            var _this2 = this;

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
                                    { href: "javascript:;", onClick: function onClick() {
                                            _this2.props.history.push('/');
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
                                        { href: "javascript:;", onClick: function onClick() {
                                                _this2.props.history.push('/');
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
    }]);

    return NotFound;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _storage = __webpack_require__(/*! ../../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _initialsPicture = __webpack_require__(/*! ../../../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _utils = __webpack_require__(/*! ../../../../helpers/utils.js */ "./dev/js/helpers/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LabResultCard = function (_React$Component) {
    _inherits(LabResultCard, _React$Component);

    function LabResultCard(props) {
        _classCallCheck(this, LabResultCard);

        return _possibleConstructorReturn(this, (LabResultCard.__proto__ || Object.getPrototypeOf(LabResultCard)).call(this, props));
    }

    _createClass(LabResultCard, [{
        key: 'openLab',
        value: function openLab(id, url, e) {
            var _this2 = this;

            var dedupe_ids = {};
            this.props.clearExtraTests();
            var testIds = this.props.currentSearchedCriterias.reduce(function (final, x) {
                final = final || [];
                if (x.test && x.type == "condition") {
                    x.test = x.test || [];
                    final = [].concat(_toConsumableArray(final), _toConsumableArray(x.test));
                } else if (x.type == "test") {
                    final.push(x);
                }
                return final;
            }, []).filter(function (x) {
                if (dedupe_ids[x.id]) {
                    return false;
                } else {
                    dedupe_ids[x.id] = true;
                    return true;
                }
            }).map(function (test) {
                var new_test = Object.assign({}, test);
                new_test.extra_test = true;
                new_test.lab_id = id;
                _this2.props.toggleDiagnosisCriteria('test', new_test, true);
            });
            var data = {
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
                    this.props.history.push('/' + url);
                } else {
                    this.props.history.push('/lab/' + id);
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props$details = this.props.details,
                price = _props$details.price,
                lab = _props$details.lab,
                distance = _props$details.distance,
                pickup_available = _props$details.pickup_available,
                lab_timing = _props$details.lab_timing,
                lab_timing_data = _props$details.lab_timing_data,
                mrp = _props$details.mrp,
                next_lab_timing = _props$details.next_lab_timing,
                next_lab_timing_data = _props$details.next_lab_timing_data,
                distance_related_charges = _props$details.distance_related_charges,
                pickup_charges = _props$details.pickup_charges;


            distance = Math.ceil(distance / 1000);

            var openingTime = '';
            if (this.props.details.lab_timing) {
                openingTime = this.props.details.lab_timing.split('-')[0];
            }

            var pickup_text = "";
            if (lab.is_home_collection_enabled && distance_related_charges == 1) {
                pickup_text = "Home pickup charges applicable";
            }

            if (lab.is_home_collection_enabled && !distance_related_charges) {
                pickup_text = "Inclusive of home visit charges";
                price = price + pickup_charges;
            }

            var offPercent = '';
            if (mrp && price && price < mrp) {
                offPercent = parseInt((mrp - price) / mrp * 100);
            }
            var hide_price = false;
            if (this.props.test_data) {
                this.props.test_data.map(function (test) {
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
                            this.props.details.tests.map(function (test, i) {
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
    }]);

    return LabResultCard;
}(_react2.default.Component);

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL25vdEZvdW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvbm90Rm91bmQvbm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL2NvbW1vbnMvbGFiUHJvZmlsZUNhcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL2NvbW1vbnMvbGFiUmVzdWx0Q2FyZC9MYWJSZXN1bHRDYXJkLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9jb21tb25zL2xhYlJlc3VsdENhcmQvaW5kZXguanMiXSwibmFtZXMiOlsiTm90Rm91bmRWaWV3IiwiTm90Rm91bmQiLCJwcm9wcyIsImRpc3BsYXkiLCJBU1NFVFNfQkFTRV9VUkwiLCJoaXN0b3J5IiwicHVzaCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiTGFiUHJvZmlsZUNhcmQiLCJMYWJSZXN1bHRDYXJkIiwiaWQiLCJ1cmwiLCJlIiwiZGVkdXBlX2lkcyIsImNsZWFyRXh0cmFUZXN0cyIsInRlc3RJZHMiLCJjdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMiLCJyZWR1Y2UiLCJmaW5hbCIsIngiLCJ0ZXN0IiwidHlwZSIsImZpbHRlciIsIm1hcCIsIm5ld190ZXN0IiwiT2JqZWN0IiwiYXNzaWduIiwiZXh0cmFfdGVzdCIsImxhYl9pZCIsInRvZ2dsZURpYWdub3Npc0NyaXRlcmlhIiwiZGF0YSIsIkdUTSIsImdldFVzZXJJZCIsInJhbmsiLCJzZW5kRXZlbnQiLCJjdHJsS2V5IiwibWV0YUtleSIsInByZXZlbnREZWZhdWx0IiwiZGV0YWlscyIsInByaWNlIiwibGFiIiwiZGlzdGFuY2UiLCJwaWNrdXBfYXZhaWxhYmxlIiwibGFiX3RpbWluZyIsImxhYl90aW1pbmdfZGF0YSIsIm1ycCIsIm5leHRfbGFiX3RpbWluZyIsIm5leHRfbGFiX3RpbWluZ19kYXRhIiwiZGlzdGFuY2VfcmVsYXRlZF9jaGFyZ2VzIiwicGlja3VwX2NoYXJnZXMiLCJNYXRoIiwiY2VpbCIsIm9wZW5pbmdUaW1lIiwic3BsaXQiLCJwaWNrdXBfdGV4dCIsImlzX2hvbWVfY29sbGVjdGlvbl9lbmFibGVkIiwib2ZmUGVyY2VudCIsInBhcnNlSW50IiwiaGlkZV9wcmljZSIsInRlc3RfZGF0YSIsIndpZHRoIiwiaGVpZ2h0IiwibG9jYWxpdHkiLCJjaXR5Iiwib3BlbkxhYiIsImJpbmQiLCJjb2xvciIsIm5hbWUiLCJsYWJfdGh1bWJuYWlsIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwidGVzdHMiLCJsZW5ndGgiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJwYWRkaW5nTGVmdCIsInZlcnRpY2FsQWxpZ24iLCJTVE9SQUdFIiwiY2hlY2tBdXRoIiwiaSIsImRlYWxfcHJpY2UiLCJwYWRkaW5nUmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O2tCQUVlQSxrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7Ozs7Ozs7Ozs7O0lBRU1DLFE7OztBQUNGLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsbUhBQ1RBLEtBRFM7QUFFbEI7Ozs7aUNBRVE7QUFBQTs7QUFFTCxtQkFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxtQkFBZjtBQUNJO0FBQUE7QUFBQSxzQkFBUSxXQUFVLGdCQUFsQixFQUFtQyxPQUFPLEVBQUVDLFNBQVMsT0FBWCxFQUExQztBQUNJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLGdCQUFmO0FBQ0ksK0RBQUssS0FBS0MsU0FBZUEsR0FBRyxnQ0FBNUI7QUFESixxQkFESjtBQUlJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFdBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxnQkFBZjtBQUNJO0FBQUE7QUFBQSxrQ0FBSyxXQUFVLGtDQUFmO0FBQ0k7QUFBQTtBQUFB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O0FBQWdCNUQsaURBQUt5QjtBQUFyQjtBQUExRDtBQUxGLGlDQUFQO0FBUUgsNkJBVEQ7QUFIUjtBQURKLHFCQURKLEdBaUJhO0FBcEVyQixpQkFESjtBQXdFSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxtQkFBZjtBQUVRUyxrQ0FBYztBQUFBO0FBQUEsMEJBQUssT0FBTyxFQUFFMkIsY0FBYyxDQUFoQixFQUFaO0FBQ1Y7QUFBQTtBQUFBLDhCQUFHLE9BQU8sRUFBRVosWUFBWSxDQUFkLEVBQVY7QUFBQTtBQUFnQ2Y7QUFBaEM7QUFEVSxxQkFBZCxHQUVTLEVBSmpCO0FBTUk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsWUFBZixFQUE0QixPQUFPLEVBQUVlLFlBQVksTUFBZCxFQUFuQztBQUNJLCtEQUFLLEtBQUtsRSxTQUFlQSxHQUFHLHFDQUE1QixHQURKO0FBRUssb0RBQWdCd0MsVUFBaEIsRUFBNEJDLGVBQTVCLEVBQTZDRSxlQUE3QyxFQUE4REMsb0JBQTlEO0FBRkw7QUFOSjtBQXhFSixhQURKO0FBc0ZIOzs7O0VBOUt1QnpDLGdCQUFNQyxTOztrQkFpTG5CRSxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2TGY7Ozs7OztrQkFFZUEsdUIiLCJmaWxlIjoiNDMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vdEZvdW5kVmlldyBmcm9tICcuL25vdEZvdW5kJ1xuXG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZFZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBOb3RGb3VuZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJwcm9maWxlLWhlYWRlclwiIHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21pbGV5LWltZy1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvc21pbGV5LnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGhlYWRlci1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LWNlbnRlciBsb2dvLWljb24tZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvZG9jLXByaW1lLWxvZ28ucG5nXCJ9IGNsYXNzTmFtZT1cImxvZ28taWNvblwiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViaGVhZGVyXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTEwIG9mZnNldC1tZC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci13aWRnZXQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItaGVhZCBmdy01MDBcIj40MDQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaWNvbnMvZXJyb3IucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHQgZnctNTAwXCI+UGFnZSBub3QgZm91bmQgITwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItbGlua1wiPkdvIHRvIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PmRvY3ByaW1lIGhvbWVwYWdlPC9hPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZFxuIiwiaW1wb3J0IExhYlByb2ZpbGVDYXJkIGZyb20gJy4vTGFiUHJvZmlsZUNhcmQuanMnXG5cbmV4cG9ydCBkZWZhdWx0IExhYlByb2ZpbGVDYXJkIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5pbXBvcnQgSW5pdGlhbHNQaWN0dXJlIGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvaW5pdGlhbHNQaWN0dXJlJ1xuaW1wb3J0IHsgYnVpbGRPcGVuQmFubmVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy91dGlscy5qcydcblxuY2xhc3MgTGFiUmVzdWx0Q2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgb3BlbkxhYihpZCwgdXJsLCBlKSB7XG4gICAgICAgIGxldCBkZWR1cGVfaWRzID0ge31cbiAgICAgICAgdGhpcy5wcm9wcy5jbGVhckV4dHJhVGVzdHMoKVxuICAgICAgICBsZXQgdGVzdElkcyA9IHRoaXMucHJvcHMuY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzXG4gICAgICAgICAgICAucmVkdWNlKChmaW5hbCwgeCkgPT4ge1xuICAgICAgICAgICAgICAgIGZpbmFsID0gZmluYWwgfHwgW11cbiAgICAgICAgICAgICAgICBpZiAoeC50ZXN0ICYmIHgudHlwZSA9PSBcImNvbmRpdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHgudGVzdCA9IHgudGVzdCB8fCBbXVxuICAgICAgICAgICAgICAgICAgICBmaW5hbCA9IFsuLi5maW5hbCwgLi4ueC50ZXN0XVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeC50eXBlID09IFwidGVzdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsLnB1c2goeClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbmFsXG4gICAgICAgICAgICB9LCBbXSlcbiAgICAgICAgICAgIC5maWx0ZXIoKHgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGVkdXBlX2lkc1t4LmlkXSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWR1cGVfaWRzW3guaWRdID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLm1hcCgodGVzdCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBuZXdfdGVzdCA9IE9iamVjdC5hc3NpZ24oe30sIHRlc3QpXG4gICAgICAgICAgICAgICAgbmV3X3Rlc3QuZXh0cmFfdGVzdCA9IHRydWVcbiAgICAgICAgICAgICAgICBuZXdfdGVzdC5sYWJfaWQgPSBpZFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEoJ3Rlc3QnLCBuZXdfdGVzdCwgdHJ1ZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdSYW5rT2ZMYWJDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAncmFuay1sYWItY2xpY2tlZCcsICdSYW5rJzogdGhpcy5wcm9wcy5yYW5rICsgMVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTGFiU2VsZWN0ZWRCeVVzZXInLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdsYWItc2VsZWN0ZWQtYnktdXNlcicsICdMYWJJZCc6IGlkXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICBpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkge1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgLyR7dXJsfWApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvbGFiLyR7aWR9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgeyBwcmljZSwgbGFiLCBkaXN0YW5jZSwgcGlja3VwX2F2YWlsYWJsZSwgbGFiX3RpbWluZywgbGFiX3RpbWluZ19kYXRhLCBtcnAsIG5leHRfbGFiX3RpbWluZywgbmV4dF9sYWJfdGltaW5nX2RhdGEsIGRpc3RhbmNlX3JlbGF0ZWRfY2hhcmdlcywgcGlja3VwX2NoYXJnZXMgfSA9IHRoaXMucHJvcHMuZGV0YWlscztcblxuICAgICAgICBkaXN0YW5jZSA9IE1hdGguY2VpbChkaXN0YW5jZSAvIDEwMDApO1xuXG4gICAgICAgIHZhciBvcGVuaW5nVGltZSA9ICcnXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRldGFpbHMubGFiX3RpbWluZykge1xuICAgICAgICAgICAgb3BlbmluZ1RpbWUgPSB0aGlzLnByb3BzLmRldGFpbHMubGFiX3RpbWluZy5zcGxpdCgnLScpWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBpY2t1cF90ZXh0ID0gXCJcIlxuICAgICAgICBpZiAobGFiLmlzX2hvbWVfY29sbGVjdGlvbl9lbmFibGVkICYmIGRpc3RhbmNlX3JlbGF0ZWRfY2hhcmdlcyA9PSAxKSB7XG4gICAgICAgICAgICBwaWNrdXBfdGV4dCA9IFwiSG9tZSBwaWNrdXAgY2hhcmdlcyBhcHBsaWNhYmxlXCJcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsYWIuaXNfaG9tZV9jb2xsZWN0aW9uX2VuYWJsZWQgJiYgIWRpc3RhbmNlX3JlbGF0ZWRfY2hhcmdlcykge1xuICAgICAgICAgICAgcGlja3VwX3RleHQgPSBcIkluY2x1c2l2ZSBvZiBob21lIHZpc2l0IGNoYXJnZXNcIlxuICAgICAgICAgICAgcHJpY2UgPSBwcmljZSArIHBpY2t1cF9jaGFyZ2VzXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgb2ZmUGVyY2VudCA9ICcnXG4gICAgICAgIGlmIChtcnAgJiYgcHJpY2UgJiYgKHByaWNlIDwgbXJwKSkge1xuICAgICAgICAgICAgb2ZmUGVyY2VudCA9IHBhcnNlSW50KCgobXJwIC0gcHJpY2UpIC8gbXJwKSAqIDEwMCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGhpZGVfcHJpY2UgPSBmYWxzZVxuICAgICAgICBpZih0aGlzLnByb3BzLnRlc3RfZGF0YSl7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnRlc3RfZGF0YS5tYXAoKHRlc3QpID0+IHtcbiAgICAgICAgICAgICAgICBpZih0ZXN0LmhpZGVfcHJpY2Upe1xuICAgICAgICAgICAgICAgICAgICBoaWRlX3ByaWNlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWNhcmQtZGwgbWItM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmx0ci1jcmQtdG9wLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsdHItbGN0bi1kdGxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZsdHItbG9jLWljb1wiIHN0eWxlPXt7IHdpZHRoOiAxMiwgaGVpZ2h0OiAxOCB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9tYXAtbWFya2VyLWJsdWUuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmx0ci1sb2MtdHh0XCI+e2xhYi5sb2NhbGl0eX17bGFiLmxvY2FsaXR5ID8gXCIsXCIgOiBcIlwifSB7bGFiLmNpdHl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiZuYnNwO3wmbmJzcDt7ZGlzdGFuY2V9IEttPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVycyBtcnQtMTBcIiBvbkNsaWNrPXt0aGlzLm9wZW5MYWIuYmluZCh0aGlzLCB0aGlzLnByb3BzLmRldGFpbHMubGFiLmlkLCB0aGlzLnByb3BzLmRldGFpbHMubGFiLnVybCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxhYi1mbHRyLWRjLW5hbWUgZnctNTAwIHRleHQtbWRcIiBzdHlsZT17eyBjb2xvcjogJyMwMDAnIH19PntsYWIubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFoaWRlX3ByaWNlICYmIG9mZlBlcmNlbnQgJiYgb2ZmUGVyY2VudCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmlsdHItb2ZmZXIgb2ZyLXJpYmJvbiBmdy03MDBcIj57b2ZmUGVyY2VudH0lIE9GRjwvc3Bhbj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNyBtcnQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1uZC1kdGxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbml0aWFsc1BpY3R1cmUgbmFtZT17bGFiLm5hbWV9IGhhc19pbWFnZT17ISFsYWIubGFiX3RodW1ibmFpbH0gY2xhc3NOYW1lPVwiaW5pdGlhbHNQaWN0dXJlLWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmbHRyLXVzci1pbWFnZS1sYWJcIiBzcmM9e2xhYi5sYWJfdGh1bWJuYWlsfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Jbml0aWFsc1BpY3R1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICc4cHgnLG1hcmdpblJpZ2h0OiAnOHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRldGFpbHMudGVzdHMgJiYgdGhpcy5wcm9wcy5kZXRhaWxzLnRlc3RzLmxlbmd0aCA9PSAxID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICcjMDAwJywgZm9udFNpemU6IDE0LCBmb250V2VpZ2h0OiA0MDAgfX0+e3RoaXMucHJvcHMuZGV0YWlscy50ZXN0c1swXS5uYW1lfTwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNSBtcnQtMTAgdGV4dC1yaWdodFwiIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiA4IH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlICYmICFoaWRlX3ByaWNlPyA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZnctNTAwIHRleHQtbGcgbXJiLTEwXCI+JiM4Mzc3OyB7cHJpY2V9PHNwYW4gY2xhc3NOYW1lPVwiZmx0ci1jdXQtcHJpY2VcIiBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiAnMXB4JyB9fSA+JiM4Mzc3OyB7bXJwfTwvc3Bhbj48L3A+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfcHJpY2U/IDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmdy01MDAgdGV4dC1sZyBtcmItMTBcIj5GcmVlPC9wPjonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNUT1JBR0UuY2hlY2tBdXRoKCkgfHwgcHJpY2UgPCAxMDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGRpdiBjbGFzc05hbWU9XCJzaWdudXAtb2ZmLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpZ251cC1vZmYtZG9jXCIgc3R5bGU9e3sgZm9udFNpemU6IDEyIH19ID4rIOKCuSAxMDAgT0ZGIDxiPm9uIFNpZ251cDwvYj4gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmx0ci1ia25nLWJ0blwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gPkJvb2sgTm93PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGV0YWlscy50ZXN0cyAmJiB0aGlzLnByb3BzLmRldGFpbHMudGVzdHMubGVuZ3RoID49IDIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbHRyLWxhYnMtdGVzdC1zZWxlY3RlZCBtcnQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsdHItcHJ2LXNlbGVjdGVkLXRlc3RcIj5UZXN0cyBTZWxlY3RlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRldGFpbHMudGVzdHMubWFwKCh0ZXN0LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkgY2xhc3NOYW1lPVwiZmx0ci1zbGVjdGVkLXRlc3RcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDQwMCB9fT57dGVzdC5uYW1lfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9wcmljZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiA0MDAgfX0+RnJlZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PHAgc3R5bGU9e3sgZm9udFdlaWdodDogNDAwIH19PiYjeDIwQjk7IHt0ZXN0LmRlYWxfcHJpY2V9IDxzcGFuPiYjeDIwQjk7IHt0ZXN0Lm1ycH08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdHItY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGlja3VwX3RleHQgPyA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdSaWdodDogOCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5MZWZ0OiAwIH19Pioge3BpY2t1cF90ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnYXV0bycgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Nsb2NrLWJsYWNrLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2J1aWxkT3BlbkJhbm5lcihsYWJfdGltaW5nLCBsYWJfdGltaW5nX2RhdGEsIG5leHRfbGFiX3RpbWluZywgbmV4dF9sYWJfdGltaW5nX2RhdGEpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFiUmVzdWx0Q2FyZCIsImltcG9ydCBMYWJSZXN1bHRDYXJkIGZyb20gJy4vTGFiUmVzdWx0Q2FyZC5qcydcblxuZXhwb3J0IGRlZmF1bHQgTGFiUmVzdWx0Q2FyZCJdLCJzb3VyY2VSb290IjoiIn0=