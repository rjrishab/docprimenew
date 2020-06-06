(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[124],{

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

/***/ "./dev/js/components/diagnosis/searchPackages/TaxSaverTC.js":
/*!******************************************************************!*\
  !*** ./dev/js/components/diagnosis/searchPackages/TaxSaverTC.js ***!
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

var _criteriaSearch = __webpack_require__(/*! ../../commons/criteriaSearch */ "./dev/js/components/commons/criteriaSearch/index.js");

var _criteriaSearch2 = _interopRequireDefault(_criteriaSearch);

var _HelmetTags = __webpack_require__(/*! ../../commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _config = __webpack_require__(/*! ../../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TaxSaverTC = function (_React$Component) {
    _inherits(TaxSaverTC, _React$Component);

    function TaxSaverTC(props) {
        _classCallCheck(this, TaxSaverTC);

        var _this = _possibleConstructorReturn(this, (TaxSaverTC.__proto__ || Object.getPrototypeOf(TaxSaverTC)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(TaxSaverTC, [{
        key: 'goBack',
        value: function goBack() {
            window.history.go(-1);
        }
    }, {
        key: 'render',
        value: function render() {
            var LOADED_LABS_SEARCH = true;
            return _react2.default.createElement(
                'div',
                { className: 'profile-body-wrap', style: { paddingBottom: 54 } },
                _react2.default.createElement(_DesktopProfileHeader2.default, null),
                _react2.default.createElement(
                    'section',
                    { className: 'container article-container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row main-row parent-section-row' },
                        _react2.default.createElement(_LeftBar2.default, null),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12 col-md-7 col-lg-7 center-column' },
                            _react2.default.createElement(
                                'section',
                                { className: 'dr-profile-screen booking-confirm-screen' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'container-fluid' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row mrb-20' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-12' },
                                            _react2.default.createElement(
                                                'h3',
                                                { className: 'textInfoHeadTitle mrng-top-12' },
                                                _react2.default.createElement('img', { onClick: this.goBack.bind(), src: "/assets" + '/img/icons/back-arrow.png', className: 'img-fluid', style: { width: '20px', marginRight: '10px', cursor: 'pointer' } }),
                                                'About Preventive Health Package '
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'widget mrb-15 mrng-top-12' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'widget-content' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'taxFullContent' },
                                                        _react2.default.createElement(
                                                            'h4',
                                                            null,
                                                            'You can avail tax benefit up to \u20B9 5000 on preventive health care packages under Section 80D of the Income Tax Act'
                                                        ),
                                                        _react2.default.createElement(
                                                            'h4',
                                                            null,
                                                            'Preventive healthcare packages:'
                                                        ),
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'In today\u2019s lifestyle, stress has become a constant companion. Long hours spent at the office meeting deadlines, interpersonal conflicts, and keeping up with regularly changing technology is becoming too much to bear. No wonder, health problems are ubiquitous. While development in medical science allows professionals to combat various ailments, awareness among common people is crucial.'
                                                        ),
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Preventive health care checkup means identification and minimization of disease risk factors, existing disease course improvement, and early disease detection through screening. This has become crucial since it allows people to know about their health issues well within time. You may be sitting on a health landmine and have no inkling of it. Diagnosis of cancer in later stages is completely ineffectual and heart disease may translate into instant death. These are silent killers and the only way to deal with them is to remain aware of the issues through regular checkups and taking preventive care.'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'taxFullContent' },
                                                        _react2.default.createElement(
                                                            'h4',
                                                            null,
                                                            'The most common tests under preventive healthcare packages are:  '
                                                        ),
                                                        _react2.default.createElement(
                                                            'ul',
                                                            null,
                                                            _react2.default.createElement(
                                                                'li',
                                                                null,
                                                                'Liver'
                                                            ),
                                                            _react2.default.createElement(
                                                                'li',
                                                                null,
                                                                'Thyroid '
                                                            ),
                                                            _react2.default.createElement(
                                                                'li',
                                                                null,
                                                                'Blood test '
                                                            ),
                                                            _react2.default.createElement(
                                                                'li',
                                                                null,
                                                                'Sugar '
                                                            ),
                                                            _react2.default.createElement(
                                                                'li',
                                                                null,
                                                                'Cholesterol '
                                                            ),
                                                            _react2.default.createElement(
                                                                'li',
                                                                null,
                                                                'Vitamin profile '
                                                            ),
                                                            _react2.default.createElement(
                                                                'li',
                                                                null,
                                                                'Full body check-up'
                                                            ),
                                                            _react2.default.createElement(
                                                                'li',
                                                                null,
                                                                'Stool tests '
                                                            ),
                                                            _react2.default.createElement(
                                                                'li',
                                                                null,
                                                                'Cardiac (Heart) '
                                                            ),
                                                            _react2.default.createElement(
                                                                'li',
                                                                null,
                                                                'Cancer Screening '
                                                            ),
                                                            _react2.default.createElement(
                                                                'li',
                                                                null,
                                                                'Pap smear '
                                                            ),
                                                            _react2.default.createElement(
                                                                'li',
                                                                null,
                                                                'HIV  '
                                                            ),
                                                            _react2.default.createElement(
                                                                'li',
                                                                null,
                                                                'Genetic testing etc. '
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'As people are becoming more health conscious, an increasing number of people are going for preventive healthcare packages. You can choose the healthcare plan that is most suited to your specific needs. The benefit can be availed for the individual, spouse, children or parent depending on the package undertaken. '
                                                        ),
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Basically, consider your specific situation and then choose the plan that suits your needs. It is also possible to go for custom plans, which are ideal for a specific scenario. The main aim of this is to keep people aware of their health issues and deal with them in a proper manner. Neglecting a disease and allowing it to fester may lead to fatal or irreversible conditions and the preventive care plans does not let this happen'
                                                        ),
                                                        _react2.default.createElement(
                                                            'p',
                                                            { className: 'fw-500 text-center' },
                                                            '*The deduction is limited to preventive health checkups*'
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(_RightBar2.default, { msgTemplate: 'gold_general_template' })
                    )
                )
            );
        }
    }]);

    return TaxSaverTC;
}(_react2.default.Component);

exports.default = TaxSaverTC;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL3NlYXJjaFBhY2thZ2VzL1RheFNhdmVyVEMuanMiXSwibmFtZXMiOlsiTG9hZGVyIiwicHJvcHMiLCJjbGFzc1R5cGUiLCJpRnJhbWVQb3B1cCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiVGF4U2F2ZXJUQyIsInN0YXRlIiwid2luZG93IiwiaGlzdG9yeSIsImdvIiwiTE9BREVEX0xBQlNfU0VBUkNIIiwicGFkZGluZ0JvdHRvbSIsImdvQmFjayIsImJpbmQiLCJBU1NFVFNfQkFTRV9VUkwiLCJ3aWR0aCIsIm1hcmdpblJpZ2h0IiwiY3Vyc29yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU1BLE07OztBQUNGLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsK0dBQ1RBLEtBRFM7QUFFbEI7Ozs7aUNBRVE7O0FBRUwsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVcsS0FBS0EsS0FBTCxDQUFXQyxTQUFYLElBQXdCLGdCQUF4QztBQUNJLHVEQUFLLFdBQVUsV0FBZixHQURKO0FBR1EscUJBQUtELEtBQUwsQ0FBV0UsV0FBWCxHQUNJO0FBQUE7QUFBQSxzQkFBRyxXQUFVLGVBQWI7QUFBQTtBQUFBLGlCQURKLEdBQytFO0FBSnZGLGFBREo7QUFTSDs7OztFQWhCZ0JDLGdCQUFNQyxTOztrQkFtQlpMLE07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCZjs7Ozs7O2tCQUVlQSxnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR01NLFU7OztBQUNGLHdCQUFZTCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEhBQ1RBLEtBRFM7O0FBRWYsY0FBS00sS0FBTCxHQUFhLEVBQWI7QUFGZTtBQUtsQjs7OztpQ0FDUTtBQUNMQyxtQkFBT0MsT0FBUCxDQUFlQyxFQUFmLENBQWtCLENBQUMsQ0FBbkI7QUFDSDs7O2lDQUNRO0FBQ0wsZ0JBQUlDLHFCQUFxQixJQUF6QjtBQUNBLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLG1CQUFmLEVBQW1DLE9BQU8sRUFBRUMsZUFBZSxFQUFqQixFQUExQztBQUNJLDhDQUFDLDhCQUFELE9BREo7QUFFSTtBQUFBO0FBQUEsc0JBQVMsV0FBVSw2QkFBbkI7QUFDSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxpQ0FBZjtBQUNJLHNEQUFDLGlCQUFELE9BREo7QUFFSTtBQUFBO0FBQUEsOEJBQUssV0FBVSx3Q0FBZjtBQUNJO0FBQUE7QUFBQSxrQ0FBUyxXQUFVLDBDQUFuQjtBQUNJO0FBQUE7QUFBQSxzQ0FBSyxXQUFVLGlCQUFmO0FBQ0k7QUFBQTtBQUFBLDBDQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSw4Q0FBSyxXQUFVLFFBQWY7QUFDSTtBQUFBO0FBQUEsa0RBQUksV0FBVSwrQkFBZDtBQUE4Qyx1RkFBSyxTQUFTLEtBQUtDLE1BQUwsQ0FBWUMsSUFBWixFQUFkLEVBQWtDLEtBQUtDLFNBQWVBLEdBQUcsMkJBQXpELEVBQXNGLFdBQVUsV0FBaEcsRUFBNEcsT0FBTyxFQUFFQyxPQUFPLE1BQVQsRUFBaUJDLGFBQWEsTUFBOUIsRUFBc0NDLFFBQVEsU0FBOUMsRUFBbkgsR0FBOUM7QUFBQTtBQUFBLDZDQURKO0FBRUk7QUFBQTtBQUFBLGtEQUFLLFdBQVUsMkJBQWY7QUFDSTtBQUFBO0FBQUEsc0RBQUssV0FBVSxnQkFBZjtBQUNJO0FBQUE7QUFBQSwwREFBSyxXQUFVLGdCQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSx5REFESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEseURBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlEQUhKO0FBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKLHFEQURKO0FBT0k7QUFBQTtBQUFBLDBEQUFLLFdBQVUsZ0JBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlEQURKO0FBRUk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSw2REFESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkRBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZEQUhKO0FBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQSw2REFKSjtBQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkRBTEo7QUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZEQU5KO0FBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQSw2REFQSjtBQVFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkRBUko7QUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZEQVRKO0FBVUk7QUFBQTtBQUFBO0FBQUE7QUFBQSw2REFWSjtBQVdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkRBWEo7QUFZSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZEQVpKO0FBYUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWJKLHlEQUZKO0FBaUJJO0FBQUE7QUFBQTtBQUFBO0FBQUEseURBakJKO0FBa0JJO0FBQUE7QUFBQTtBQUFBO0FBQUEseURBbEJKO0FBbUJJO0FBQUE7QUFBQSw4REFBRyxXQUFVLG9CQUFiO0FBQUE7QUFBQTtBQW5CSjtBQVBKO0FBREo7QUFGSjtBQURKO0FBREo7QUFESjtBQURKLHlCQUZKO0FBNENJLHNEQUFDLGtCQUFELElBQVUsYUFBWSx1QkFBdEI7QUE1Q0o7QUFESjtBQUZKLGFBREo7QUFzREg7Ozs7RUFsRW9CZCxnQkFBTUMsUzs7a0JBc0VoQkMsVSIsImZpbGUiOiIxMjQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgTG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzVHlwZSB8fCBcImxvYWRlckNpcmN1bGFyXCJ9ID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRwLWxvYWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pRnJhbWVQb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTEwXCI+UmVkaXJlY3RpbmcgeW91IHRvIFBoYXJtZWFzeSB3ZWJzaXRlLi4uPC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXJcbiIsImltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInXG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ3JpdGVyaWFTZWFyY2ggZnJvbSAnLi4vLi4vY29tbW9ucy9jcml0ZXJpYVNlYXJjaCdcbmltcG9ydCBIZWxtZXRUYWdzIGZyb20gJy4uLy4uL2NvbW1vbnMvSGVsbWV0VGFncydcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vLi4vY29uZmlnJ1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBMZWZ0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvTGVmdEJhcidcbmltcG9ydCBSaWdodEJhciBmcm9tICcuLi8uLi9jb21tb25zL1JpZ2h0QmFyJ1xuXG5cbmNsYXNzIFRheFNhdmVyVEMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgZ29CYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5nbygtMSlcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgTE9BREVEX0xBQlNfU0VBUkNIID0gdHJ1ZVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDU0IH19PlxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGFydGljbGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExlZnRCYXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03IGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkci1wcm9maWxlLXNjcmVlbiBib29raW5nLWNvbmZpcm0tc2NyZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtcmItMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dEluZm9IZWFkVGl0bGUgbXJuZy10b3AtMTJcIj48aW1nIG9uQ2xpY2s9e3RoaXMuZ29CYWNrLmJpbmQoKX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9pY29ucy9iYWNrLWFycm93LnBuZyd9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHN0eWxlPXt7IHdpZHRoOiAnMjBweCcsIG1hcmdpblJpZ2h0OiAnMTBweCcsIGN1cnNvcjogJ3BvaW50ZXInIH19IC8+QWJvdXQgUHJldmVudGl2ZSBIZWFsdGggUGFja2FnZSA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTUgbXJuZy10b3AtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRheEZ1bGxDb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Zb3UgY2FuIGF2YWlsIHRheCBiZW5lZml0IHVwIHRvIOKCuSA1MDAwIG9uIHByZXZlbnRpdmUgaGVhbHRoIGNhcmUgcGFja2FnZXMgdW5kZXIgU2VjdGlvbiA4MEQgb2YgdGhlIEluY29tZSBUYXggQWN0PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlByZXZlbnRpdmUgaGVhbHRoY2FyZSBwYWNrYWdlczo8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5JbiB0b2RheeKAmXMgbGlmZXN0eWxlLCBzdHJlc3MgaGFzIGJlY29tZSBhIGNvbnN0YW50IGNvbXBhbmlvbi4gTG9uZyBob3VycyBzcGVudCBhdCB0aGUgb2ZmaWNlIG1lZXRpbmcgZGVhZGxpbmVzLCBpbnRlcnBlcnNvbmFsIGNvbmZsaWN0cywgYW5kIGtlZXBpbmcgdXAgd2l0aCByZWd1bGFybHkgY2hhbmdpbmcgdGVjaG5vbG9neSBpcyBiZWNvbWluZyB0b28gbXVjaCB0byBiZWFyLiBObyB3b25kZXIsIGhlYWx0aCBwcm9ibGVtcyBhcmUgdWJpcXVpdG91cy4gV2hpbGUgZGV2ZWxvcG1lbnQgaW4gbWVkaWNhbCBzY2llbmNlIGFsbG93cyBwcm9mZXNzaW9uYWxzIHRvIGNvbWJhdCB2YXJpb3VzIGFpbG1lbnRzLCBhd2FyZW5lc3MgYW1vbmcgY29tbW9uIHBlb3BsZSBpcyBjcnVjaWFsLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHJldmVudGl2ZSBoZWFsdGggY2FyZSBjaGVja3VwIG1lYW5zIGlkZW50aWZpY2F0aW9uIGFuZCBtaW5pbWl6YXRpb24gb2YgZGlzZWFzZSByaXNrIGZhY3RvcnMsIGV4aXN0aW5nIGRpc2Vhc2UgY291cnNlIGltcHJvdmVtZW50LCBhbmQgZWFybHkgZGlzZWFzZSBkZXRlY3Rpb24gdGhyb3VnaCBzY3JlZW5pbmcuIFRoaXMgaGFzIGJlY29tZSBjcnVjaWFsIHNpbmNlIGl0IGFsbG93cyBwZW9wbGUgdG8ga25vdyBhYm91dCB0aGVpciBoZWFsdGggaXNzdWVzIHdlbGwgd2l0aGluIHRpbWUuIFlvdSBtYXkgYmUgc2l0dGluZyBvbiBhIGhlYWx0aCBsYW5kbWluZSBhbmQgaGF2ZSBubyBpbmtsaW5nIG9mIGl0LiBEaWFnbm9zaXMgb2YgY2FuY2VyIGluIGxhdGVyIHN0YWdlcyBpcyBjb21wbGV0ZWx5IGluZWZmZWN0dWFsIGFuZCBoZWFydCBkaXNlYXNlIG1heSB0cmFuc2xhdGUgaW50byBpbnN0YW50IGRlYXRoLiBUaGVzZSBhcmUgc2lsZW50IGtpbGxlcnMgYW5kIHRoZSBvbmx5IHdheSB0byBkZWFsIHdpdGggdGhlbSBpcyB0byByZW1haW4gYXdhcmUgb2YgdGhlIGlzc3VlcyB0aHJvdWdoIHJlZ3VsYXIgY2hlY2t1cHMgYW5kIHRha2luZyBwcmV2ZW50aXZlIGNhcmUuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGF4RnVsbENvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlRoZSBtb3N0IGNvbW1vbiB0ZXN0cyB1bmRlciBwcmV2ZW50aXZlIGhlYWx0aGNhcmUgcGFja2FnZXMgYXJlOiAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkxpdmVyPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5UaHlyb2lkIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Qmxvb2QgdGVzdCA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlN1Z2FyIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q2hvbGVzdGVyb2wgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5WaXRhbWluIHByb2ZpbGUgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5GdWxsIGJvZHkgY2hlY2stdXA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlN0b29sIHRlc3RzIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q2FyZGlhYyAoSGVhcnQpIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q2FuY2VyIFNjcmVlbmluZyA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlBhcCBzbWVhciA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkhJViAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5HZW5ldGljIHRlc3RpbmcgZXRjLiA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BcyBwZW9wbGUgYXJlIGJlY29taW5nIG1vcmUgaGVhbHRoIGNvbnNjaW91cywgYW4gaW5jcmVhc2luZyBudW1iZXIgb2YgcGVvcGxlIGFyZSBnb2luZyBmb3IgcHJldmVudGl2ZSBoZWFsdGhjYXJlIHBhY2thZ2VzLiBZb3UgY2FuIGNob29zZSB0aGUgaGVhbHRoY2FyZSBwbGFuIHRoYXQgaXMgbW9zdCBzdWl0ZWQgdG8geW91ciBzcGVjaWZpYyBuZWVkcy4gVGhlIGJlbmVmaXQgY2FuIGJlIGF2YWlsZWQgZm9yIHRoZSBpbmRpdmlkdWFsLCBzcG91c2UsIGNoaWxkcmVuIG9yIHBhcmVudCBkZXBlbmRpbmcgb24gdGhlIHBhY2thZ2UgdW5kZXJ0YWtlbi4gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5CYXNpY2FsbHksIGNvbnNpZGVyIHlvdXIgc3BlY2lmaWMgc2l0dWF0aW9uIGFuZCB0aGVuIGNob29zZSB0aGUgcGxhbiB0aGF0IHN1aXRzIHlvdXIgbmVlZHMuIEl0IGlzIGFsc28gcG9zc2libGUgdG8gZ28gZm9yIGN1c3RvbSBwbGFucywgd2hpY2ggYXJlIGlkZWFsIGZvciBhIHNwZWNpZmljIHNjZW5hcmlvLiBUaGUgbWFpbiBhaW0gb2YgdGhpcyBpcyB0byBrZWVwIHBlb3BsZSBhd2FyZSBvZiB0aGVpciBoZWFsdGggaXNzdWVzIGFuZCBkZWFsIHdpdGggdGhlbSBpbiBhIHByb3BlciBtYW5uZXIuIE5lZ2xlY3RpbmcgYSBkaXNlYXNlIGFuZCBhbGxvd2luZyBpdCB0byBmZXN0ZXIgbWF5IGxlYWQgdG8gZmF0YWwgb3IgaXJyZXZlcnNpYmxlIGNvbmRpdGlvbnMgYW5kIHRoZSBwcmV2ZW50aXZlIGNhcmUgcGxhbnMgZG9lcyBub3QgbGV0IHRoaXMgaGFwcGVuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1jZW50ZXJcIj4qVGhlIGRlZHVjdGlvbiBpcyBsaW1pdGVkIHRvIHByZXZlbnRpdmUgaGVhbHRoIGNoZWNrdXBzKjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWdodEJhciBtc2dUZW1wbGF0ZT1cImdvbGRfZ2VuZXJhbF90ZW1wbGF0ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBUYXhTYXZlclRDIl0sInNvdXJjZVJvb3QiOiIifQ==