exports.ids = [98];
exports.modules = {

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

var _react = __webpack_require__(/*! react */ "react");

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

class TaxSaverTC extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    goBack() {
        window.history.go(-1);
    }
    render() {
        let LOADED_LABS_SEARCH = true;
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
}

exports.default = TaxSaverTC;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL3NlYXJjaFBhY2thZ2VzL1RheFNhdmVyVEMuanMiXSwibmFtZXMiOlsiTG9hZGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwiY2xhc3NUeXBlIiwiaUZyYW1lUG9wdXAiLCJUYXhTYXZlclRDIiwic3RhdGUiLCJnb0JhY2siLCJ3aW5kb3ciLCJoaXN0b3J5IiwiZ28iLCJMT0FERURfTEFCU19TRUFSQ0giLCJwYWRkaW5nQm90dG9tIiwiYmluZCIsIkFTU0VUU19CQVNFX1VSTCIsIndpZHRoIiwibWFyZ2luUmlnaHQiLCJjdXJzb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBLE1BQU1BLE1BQU4sU0FBcUJDLGdCQUFNQyxTQUEzQixDQUFxQztBQUNqQ0MsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0g7O0FBRURDLGFBQVM7O0FBRUwsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFXLEtBQUtELEtBQUwsQ0FBV0UsU0FBWCxJQUF3QixnQkFBeEM7QUFDSSxtREFBSyxXQUFVLFdBQWYsR0FESjtBQUdRLGlCQUFLRixLQUFMLENBQVdHLFdBQVgsR0FDSTtBQUFBO0FBQUEsa0JBQUcsV0FBVSxlQUFiO0FBQUE7QUFBQSxhQURKLEdBQytFO0FBSnZGLFNBREo7QUFTSDtBQWhCZ0M7O2tCQW1CdEJQLE07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCZjs7Ozs7O2tCQUVlQSxnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdBLE1BQU1RLFVBQU4sU0FBeUJQLGdCQUFNQyxTQUEvQixDQUF5QztBQUNyQ0MsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0EsYUFBS0ssS0FBTCxHQUFhLEVBQWI7QUFHSDtBQUNEQyxhQUFTO0FBQ0xDLGVBQU9DLE9BQVAsQ0FBZUMsRUFBZixDQUFrQixDQUFDLENBQW5CO0FBQ0g7QUFDRFIsYUFBUztBQUNMLFlBQUlTLHFCQUFxQixJQUF6QjtBQUNBLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxtQkFBZixFQUFtQyxPQUFPLEVBQUVDLGVBQWUsRUFBakIsRUFBMUM7QUFDSSwwQ0FBQyw4QkFBRCxPQURKO0FBRUk7QUFBQTtBQUFBLGtCQUFTLFdBQVUsNkJBQW5CO0FBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsaUNBQWY7QUFDSSxrREFBQyxpQkFBRCxPQURKO0FBRUk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsd0NBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQVMsV0FBVSwwQ0FBbkI7QUFDSTtBQUFBO0FBQUEsa0NBQUssV0FBVSxpQkFBZjtBQUNJO0FBQUE7QUFBQSxzQ0FBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUEsMENBQUssV0FBVSxRQUFmO0FBQ0k7QUFBQTtBQUFBLDhDQUFJLFdBQVUsK0JBQWQ7QUFBOEMsbUZBQUssU0FBUyxLQUFLTCxNQUFMLENBQVlNLElBQVosRUFBZCxFQUFrQyxLQUFLQyxTQUFlQSxHQUFHLDJCQUF6RCxFQUFzRixXQUFVLFdBQWhHLEVBQTRHLE9BQU8sRUFBRUMsT0FBTyxNQUFULEVBQWlCQyxhQUFhLE1BQTlCLEVBQXNDQyxRQUFRLFNBQTlDLEVBQW5ILEdBQTlDO0FBQUE7QUFBQSx5Q0FESjtBQUVJO0FBQUE7QUFBQSw4Q0FBSyxXQUFVLDJCQUFmO0FBQ0k7QUFBQTtBQUFBLGtEQUFLLFdBQVUsZ0JBQWY7QUFDSTtBQUFBO0FBQUEsc0RBQUssV0FBVSxnQkFBZjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxxREFISjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSixpREFESjtBQU9JO0FBQUE7QUFBQSxzREFBSyxXQUFVLGdCQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxxREFESjtBQUVJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEseURBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlEQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSx5REFISjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEseURBSko7QUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlEQUxKO0FBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQSx5REFOSjtBQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUEseURBUEo7QUFRSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlEQVJKO0FBU0k7QUFBQTtBQUFBO0FBQUE7QUFBQSx5REFUSjtBQVVJO0FBQUE7QUFBQTtBQUFBO0FBQUEseURBVko7QUFXSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlEQVhKO0FBWUk7QUFBQTtBQUFBO0FBQUE7QUFBQSx5REFaSjtBQWFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFiSixxREFGSjtBQWlCSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQWpCSjtBQWtCSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQWxCSjtBQW1CSTtBQUFBO0FBQUEsMERBQUcsV0FBVSxvQkFBYjtBQUFBO0FBQUE7QUFuQko7QUFQSjtBQURKO0FBRko7QUFESjtBQURKO0FBREo7QUFESixxQkFGSjtBQTRDSSxrREFBQyxrQkFBRCxJQUFVLGFBQVksdUJBQXRCO0FBNUNKO0FBREo7QUFGSixTQURKO0FBc0RIO0FBbEVvQzs7a0JBc0UxQlosVSIsImZpbGUiOiI5OC5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBMb2FkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NUeXBlIHx8IFwibG9hZGVyQ2lyY3VsYXJcIn0gPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHAtbG9hZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlGcmFtZVBvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMTBcIj5SZWRpcmVjdGluZyB5b3UgdG8gUGhhcm1lYXN5IHdlYnNpdGUuLi48L3A+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIiwiaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDcml0ZXJpYVNlYXJjaCBmcm9tICcuLi8uLi9jb21tb25zL2NyaXRlcmlhU2VhcmNoJ1xuaW1wb3J0IEhlbG1ldFRhZ3MgZnJvbSAnLi4vLi4vY29tbW9ucy9IZWxtZXRUYWdzJ1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9MZWZ0QmFyJ1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvUmlnaHRCYXInXG5cblxuY2xhc3MgVGF4U2F2ZXJUQyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBnb0JhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmdvKC0xKVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBMT0FERURfTEFCU19TRUFSQ0ggPSB0cnVlXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogNTQgfX0+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgYXJ0aWNsZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGVmdEJhciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTcgY2VudGVyLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImRyLXByb2ZpbGUtc2NyZWVuIGJvb2tpbmctY29uZmlybS1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1yYi0yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0SW5mb0hlYWRUaXRsZSBtcm5nLXRvcC0xMlwiPjxpbWcgb25DbGljaz17dGhpcy5nb0JhY2suYmluZCgpfSBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2ljb25zL2JhY2stYXJyb3cucG5nJ30gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3R5bGU9e3sgd2lkdGg6ICcyMHB4JywgbWFyZ2luUmlnaHQ6ICcxMHB4JywgY3Vyc29yOiAncG9pbnRlcicgfX0gLz5BYm91dCBQcmV2ZW50aXZlIEhlYWx0aCBQYWNrYWdlIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNSBtcm5nLXRvcC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGF4RnVsbENvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PllvdSBjYW4gYXZhaWwgdGF4IGJlbmVmaXQgdXAgdG8g4oK5IDUwMDAgb24gcHJldmVudGl2ZSBoZWFsdGggY2FyZSBwYWNrYWdlcyB1bmRlciBTZWN0aW9uIDgwRCBvZiB0aGUgSW5jb21lIFRheCBBY3Q8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+UHJldmVudGl2ZSBoZWFsdGhjYXJlIHBhY2thZ2VzOjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkluIHRvZGF54oCZcyBsaWZlc3R5bGUsIHN0cmVzcyBoYXMgYmVjb21lIGEgY29uc3RhbnQgY29tcGFuaW9uLiBMb25nIGhvdXJzIHNwZW50IGF0IHRoZSBvZmZpY2UgbWVldGluZyBkZWFkbGluZXMsIGludGVycGVyc29uYWwgY29uZmxpY3RzLCBhbmQga2VlcGluZyB1cCB3aXRoIHJlZ3VsYXJseSBjaGFuZ2luZyB0ZWNobm9sb2d5IGlzIGJlY29taW5nIHRvbyBtdWNoIHRvIGJlYXIuIE5vIHdvbmRlciwgaGVhbHRoIHByb2JsZW1zIGFyZSB1YmlxdWl0b3VzLiBXaGlsZSBkZXZlbG9wbWVudCBpbiBtZWRpY2FsIHNjaWVuY2UgYWxsb3dzIHByb2Zlc3Npb25hbHMgdG8gY29tYmF0IHZhcmlvdXMgYWlsbWVudHMsIGF3YXJlbmVzcyBhbW9uZyBjb21tb24gcGVvcGxlIGlzIGNydWNpYWwuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QcmV2ZW50aXZlIGhlYWx0aCBjYXJlIGNoZWNrdXAgbWVhbnMgaWRlbnRpZmljYXRpb24gYW5kIG1pbmltaXphdGlvbiBvZiBkaXNlYXNlIHJpc2sgZmFjdG9ycywgZXhpc3RpbmcgZGlzZWFzZSBjb3Vyc2UgaW1wcm92ZW1lbnQsIGFuZCBlYXJseSBkaXNlYXNlIGRldGVjdGlvbiB0aHJvdWdoIHNjcmVlbmluZy4gVGhpcyBoYXMgYmVjb21lIGNydWNpYWwgc2luY2UgaXQgYWxsb3dzIHBlb3BsZSB0byBrbm93IGFib3V0IHRoZWlyIGhlYWx0aCBpc3N1ZXMgd2VsbCB3aXRoaW4gdGltZS4gWW91IG1heSBiZSBzaXR0aW5nIG9uIGEgaGVhbHRoIGxhbmRtaW5lIGFuZCBoYXZlIG5vIGlua2xpbmcgb2YgaXQuIERpYWdub3NpcyBvZiBjYW5jZXIgaW4gbGF0ZXIgc3RhZ2VzIGlzIGNvbXBsZXRlbHkgaW5lZmZlY3R1YWwgYW5kIGhlYXJ0IGRpc2Vhc2UgbWF5IHRyYW5zbGF0ZSBpbnRvIGluc3RhbnQgZGVhdGguIFRoZXNlIGFyZSBzaWxlbnQga2lsbGVycyBhbmQgdGhlIG9ubHkgd2F5IHRvIGRlYWwgd2l0aCB0aGVtIGlzIHRvIHJlbWFpbiBhd2FyZSBvZiB0aGUgaXNzdWVzIHRocm91Z2ggcmVndWxhciBjaGVja3VwcyBhbmQgdGFraW5nIHByZXZlbnRpdmUgY2FyZS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YXhGdWxsQ29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+VGhlIG1vc3QgY29tbW9uIHRlc3RzIHVuZGVyIHByZXZlbnRpdmUgaGVhbHRoY2FyZSBwYWNrYWdlcyBhcmU6ICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TGl2ZXI8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRoeXJvaWQgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5CbG9vZCB0ZXN0IDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U3VnYXIgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5DaG9sZXN0ZXJvbCA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlZpdGFtaW4gcHJvZmlsZSA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkZ1bGwgYm9keSBjaGVjay11cDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U3Rvb2wgdGVzdHMgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5DYXJkaWFjIChIZWFydCkgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5DYW5jZXIgU2NyZWVuaW5nIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UGFwIHNtZWFyIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SElWICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkdlbmV0aWMgdGVzdGluZyBldGMuIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFzIHBlb3BsZSBhcmUgYmVjb21pbmcgbW9yZSBoZWFsdGggY29uc2Npb3VzLCBhbiBpbmNyZWFzaW5nIG51bWJlciBvZiBwZW9wbGUgYXJlIGdvaW5nIGZvciBwcmV2ZW50aXZlIGhlYWx0aGNhcmUgcGFja2FnZXMuIFlvdSBjYW4gY2hvb3NlIHRoZSBoZWFsdGhjYXJlIHBsYW4gdGhhdCBpcyBtb3N0IHN1aXRlZCB0byB5b3VyIHNwZWNpZmljIG5lZWRzLiBUaGUgYmVuZWZpdCBjYW4gYmUgYXZhaWxlZCBmb3IgdGhlIGluZGl2aWR1YWwsIHNwb3VzZSwgY2hpbGRyZW4gb3IgcGFyZW50IGRlcGVuZGluZyBvbiB0aGUgcGFja2FnZSB1bmRlcnRha2VuLiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJhc2ljYWxseSwgY29uc2lkZXIgeW91ciBzcGVjaWZpYyBzaXR1YXRpb24gYW5kIHRoZW4gY2hvb3NlIHRoZSBwbGFuIHRoYXQgc3VpdHMgeW91ciBuZWVkcy4gSXQgaXMgYWxzbyBwb3NzaWJsZSB0byBnbyBmb3IgY3VzdG9tIHBsYW5zLCB3aGljaCBhcmUgaWRlYWwgZm9yIGEgc3BlY2lmaWMgc2NlbmFyaW8uIFRoZSBtYWluIGFpbSBvZiB0aGlzIGlzIHRvIGtlZXAgcGVvcGxlIGF3YXJlIG9mIHRoZWlyIGhlYWx0aCBpc3N1ZXMgYW5kIGRlYWwgd2l0aCB0aGVtIGluIGEgcHJvcGVyIG1hbm5lci4gTmVnbGVjdGluZyBhIGRpc2Vhc2UgYW5kIGFsbG93aW5nIGl0IHRvIGZlc3RlciBtYXkgbGVhZCB0byBmYXRhbCBvciBpcnJldmVyc2libGUgY29uZGl0aW9ucyBhbmQgdGhlIHByZXZlbnRpdmUgY2FyZSBwbGFucyBkb2VzIG5vdCBsZXQgdGhpcyBoYXBwZW48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LWNlbnRlclwiPipUaGUgZGVkdWN0aW9uIGlzIGxpbWl0ZWQgdG8gcHJldmVudGl2ZSBoZWFsdGggY2hlY2t1cHMqPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0QmFyIG1zZ1RlbXBsYXRlPVwiZ29sZF9nZW5lcmFsX3RlbXBsYXRlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFRheFNhdmVyVEMiXSwic291cmNlUm9vdCI6IiJ9