(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[138],{

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

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var isVip = _ref.isVip;

    return _react2.default.createElement(
        'div',
        { className: 'dsclmer-ftr ' + (isVip ? 'margin-bottom-55' : '') },
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

/***/ "./dev/js/containers/commons/medlifePolicyApp.js":
/*!*******************************************************!*\
  !*** ./dev/js/containers/commons/medlifePolicyApp.js ***!
  \*******************************************************/
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

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _HelmetTags = __webpack_require__(/*! ../../components/commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _staticDisclaimer = __webpack_require__(/*! ../../components/commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var medlifePolicyApp = function (_React$Component) {
	_inherits(medlifePolicyApp, _React$Component);

	function medlifePolicyApp() {
		_classCallCheck(this, medlifePolicyApp);

		return _possibleConstructorReturn(this, (medlifePolicyApp.__proto__ || Object.getPrototypeOf(medlifePolicyApp)).apply(this, arguments));
	}

	_createClass(medlifePolicyApp, [{
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'div',
				{ className: 'container about-container p-3' },
				_react2.default.createElement(_HelmetTags2.default, { tagsData: {
						title: 'Cancel Policy | docprime',
						description: 'docprime: docprime is one stop health care solution for patients and doctors. Patients can book doctors online and doctors can manage patients online.'
					} }),
				_react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						'div',
						{ className: 'col-12' },
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								'h3',
								{ className: 'mb-24' },
								_react2.default.createElement(
									'strong',
									null,
									'Medlife TnC'
								)
							),
							_react2.default.createElement(
								'h5',
								null,
								_react2.default.createElement(
									'strong',
									null,
									'Offer Terms:'
								)
							),
							_react2.default.createElement(
								'ul',
								{ className: 'offer-terms-column' },
								_react2.default.createElement(
									'li',
									null,
									'Save 23% on all prescribed medicines exclusively for ',
									_react2.default.createElement(
										'strong',
										null,
										'Docprime Gold / VIP users'
									)
								),
								_react2.default.createElement(
									'li',
									null,
									'No minimum order value required to avail discount.'
								),
								_react2.default.createElement(
									'li',
									null,
									'Visit ',
									_react2.default.createElement(
										'a',
										{ href: 'https://www.medlife.com/' },
										'Medlife.com'
									)
								),
								_react2.default.createElement(
									'li',
									null,
									'Upload prescription & select medicines.'
								),
								_react2.default.createElement(
									'li',
									null,
									'Enter promo in the order checkout page. Complete payment via any mode. **Promo not applicable on OTC products'
								)
							),
							_react2.default.createElement(
								'h5',
								null,
								_react2.default.createElement(
									'strong',
									null,
									'T&C Pharmacy: '
								)
							),
							_react2.default.createElement(
								'ul',
								{ className: 'offer-terms-column' },
								_react2.default.createElement(
									'li',
									null,
									'Offer Valid on Prescription Drugs'
								),
								_react2.default.createElement(
									'li',
									null,
									'Promo code can be used Multiple times during the offer period. Customers can avail this promo code by calling customer support (1860-1234-1234) or by booking online through landing page link. '
								),
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										'span',
										null,
										'Discount on Selected Products: Discounts provided on the website/mobile application are on selected products. Discounts are not applicable on the following products and on any products so mentioned elsewhere on the website/mobile application:'
									),
									_react2.default.createElement(
										'ul',
										{ className: 'child-list-item pd-12' },
										_react2.default.createElement(
											'li',
											null,
											'All Baby foods viz Ceralac, Lactogen, Nanpro etc.'
										),
										_react2.default.createElement(
											'li',
											null,
											'All Health Supplements viz Pediasure, Proteinex, Proteinules, Threptin etc'
										),
										_react2.default.createElement(
											'li',
											null,
											'Over the counter (OTC) products \u2013 Benadryl Cough Syrup, Crocin, Saridon, all Dettol, Savlon products, medicated soaps etc.'
										),
										_react2.default.createElement(
											'li',
											null,
											'All Cosmetic products'
										)
									)
								),
								_react2.default.createElement(
									'li',
									null,
									'Offer Validity \u2013 1 year '
								)
							)
						)
					)
				),
				_react2.default.createElement(_staticDisclaimer2.default, null)
			);
		}
	}]);

	return medlifePolicyApp;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, passedProps) {

	return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {

	return {};
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(medlifePolicyApp);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9jb21tb25zL21lZGxpZmVQb2xpY3lBcHAuanMiXSwibmFtZXMiOlsiaXNWaXAiLCJjb2xvciIsImZvbnRTaXplIiwicGFkZGluZ0JvdHRvbSIsInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIm1lZGxpZmVQb2xpY3lBcHAiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInBhc3NlZFByb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O2tCQUNlLGdCQUFlO0FBQUEsUUFBWkEsS0FBWSxRQUFaQSxLQUFZOztBQUM3QixXQUFRO0FBQUE7QUFBQSxVQUFLLDZCQUEwQkEsUUFBTSxrQkFBTixHQUF5QixFQUFuRCxDQUFMO0FBQ087QUFBQTtBQUFBLGNBQUcsV0FBVSxlQUFiLEVBQTZCLE9BQU8sRUFBRUMsT0FBTyxTQUFULEVBQW9CQyxVQUFVLEVBQTlCLEVBQXBDO0FBQUE7QUFBQSxTQURQO0FBRU87QUFBQTtBQUFBLGNBQUssV0FBVSw0QkFBZixFQUE0QyxPQUFPLEVBQUVDLGVBQWUsQ0FBakIsRUFBbkQ7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEo7QUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFGUCxLQUFSO0FBU0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYRDs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0FBREEsSUFBTUMsY0FBY0MsbUJBQU9BLENBQUMsMERBQVIsQ0FBcEI7O0lBR01DLGdCOzs7Ozs7Ozs7OzsyQkFFSTs7QUFFUixVQUNDO0FBQUE7QUFBQSxNQUFLLFdBQVUsK0JBQWY7QUFDYSxrQ0FBQyxvQkFBRCxJQUFZLFVBQVU7QUFDbEJDLGFBQVEsMEJBRFU7QUFFbEJDLG1CQUFjO0FBRkksTUFBdEIsR0FEYjtBQUthO0FBQUE7QUFBQSxPQUFLLFdBQVUsS0FBZjtBQUNJO0FBQUE7QUFBQSxRQUFLLFdBQVUsUUFBZjtBQUNJO0FBQUE7QUFBQTtBQUNMO0FBQUE7QUFBQSxVQUFJLFdBQVUsT0FBZDtBQUFzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRCLFFBREs7QUFFTDtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUosUUFGSztBQUdMO0FBQUE7QUFBQSxVQUFJLFdBQVUsb0JBQWQ7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUF5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXpELFNBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFVO0FBQUE7QUFBQSxZQUFHLE1BQUssMEJBQVI7QUFBQTtBQUFBO0FBQVYsU0FISjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FKSjtBQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMSixRQUhLO0FBVUw7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKLFFBVks7QUFXTDtBQUFBO0FBQUEsVUFBSSxXQUFVLG9CQUFkO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUZKO0FBR0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBRUk7QUFBQTtBQUFBLFlBQUksV0FBVSx1QkFBZDtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGSjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FISjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUZKLFNBSEo7QUFZSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWko7QUFYSztBQURKO0FBREosS0FMYjtBQW1DYSxrQ0FBQywwQkFBRDtBQW5DYixJQUREO0FBdUNBOzs7O0VBM0M2QkMsZ0JBQU1DLFM7O0FBOENyQyxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBUUMsV0FBUixFQUF3Qjs7QUFFL0MsUUFBTyxFQUFQO0FBRUEsQ0FKRDs7QUFNQSxJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7O0FBRXhDLFFBQU8sRUFBUDtBQUVBLENBSkQ7a0JBS2UseUJBQVFKLGVBQVIsRUFBeUJHLGtCQUF6QixFQUE2Q1IsZ0JBQTdDLEMiLCJmaWxlIjoiMTM4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmV4cG9ydCBkZWZhdWx0ICh7IGlzVmlwIH0pID0+IHtcblx0cmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17YGRzY2xtZXItZnRyICR7aXNWaXA/J21hcmdpbi1ib3R0b20tNTUnOicnfWB9PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMjBcIiBzdHlsZT17eyBjb2xvcjogJyM4YThhOGEnLCBmb250U2l6ZTogMTAgfX0gPlRoZSBXZWJzaXRlIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGluIGNhc2Ugb2YgYSBtZWRpY2FsIGVtZXJnZW5jeSBhbmQvIG9yIGNyaXRpY2FsIGNhcmUgYW5kIHRoZSB1c2VyIHNob3VsZCBkaXJlY3RseSBjb250YWN0IGhpcy8gaGVyIG1lZGljYWwgc2VydmljZSBwcm92aWRlciBmb3IgUGh5c2ljYWwgRXhhbWluYXRpb24uIERvY3ByaW1lIGlzIHNvbGVseSBhIHRlY2hub2xvZ3kgcGFydG5lci48L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZm9vdGVyLW5ldy1jb3B5cmdodFwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDUgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8cD5Eb2NwcmltZS5jb20gQ29weXJpZ2h0ICZjb3B5OyAyMDIwLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+QWxsIHJpZ2h0cyByZXNlcnZlZC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRPQ1BSSU1FIFRFQ0hOT0xPR0lFUyBQUklWQVRFIExJTUlURUQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkNJTiA6IFU3NDk5OUhSMjAxNlBUQzA2NDMxMjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2Pilcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2UnO1xuaW1wb3J0IEhlbG1ldFRhZ3MgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0hlbG1ldFRhZ3MnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuaW1wb3J0IERpc2NsYWltZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcydcblxuY2xhc3MgbWVkbGlmZVBvbGljeUFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdFxuXHRyZW5kZXIoKSB7XG5cblx0XHRyZXR1cm4gKCBcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGFib3V0LWNvbnRhaW5lciBwLTNcIj5cbiAgICAgICAgICAgICAgICA8SGVsbWV0VGFncyB0YWdzRGF0YT17e1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogKCdDYW5jZWwgUG9saWN5IHwgZG9jcHJpbWUnKSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICgnZG9jcHJpbWU6IGRvY3ByaW1lIGlzIG9uZSBzdG9wIGhlYWx0aCBjYXJlIHNvbHV0aW9uIGZvciBwYXRpZW50cyBhbmQgZG9jdG9ycy4gUGF0aWVudHMgY2FuIGJvb2sgZG9jdG9ycyBvbmxpbmUgYW5kIGRvY3RvcnMgY2FuIG1hbmFnZSBwYXRpZW50cyBvbmxpbmUuJylcbiAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0yNFwiPjxzdHJvbmc+TWVkbGlmZSBUbkM8L3N0cm9uZz48L2gzPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxoNT48c3Ryb25nPk9mZmVyIFRlcm1zOjwvc3Ryb25nPjwvaDU+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm9mZmVyLXRlcm1zLWNvbHVtblwiPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8bGk+U2F2ZSAyMyUgb24gYWxsIHByZXNjcmliZWQgbWVkaWNpbmVzIGV4Y2x1c2l2ZWx5IGZvciA8c3Ryb25nPkRvY3ByaW1lIEdvbGQgLyBWSVAgdXNlcnM8L3N0cm9uZz48L2xpPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8bGk+Tm8gbWluaW11bSBvcmRlciB2YWx1ZSByZXF1aXJlZCB0byBhdmFpbCBkaXNjb3VudC48L2xpPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8bGk+VmlzaXQgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm1lZGxpZmUuY29tL1wiPk1lZGxpZmUuY29tPC9hPjwvbGk+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxsaT5VcGxvYWQgcHJlc2NyaXB0aW9uICZhbXA7IHNlbGVjdCBtZWRpY2luZXMuPC9saT5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGxpPkVudGVyIHByb21vIGluIHRoZSBvcmRlciBjaGVja291dCBwYWdlLiBDb21wbGV0ZSBwYXltZW50IHZpYSBhbnkgbW9kZS4gKipQcm9tbyBub3QgYXBwbGljYWJsZSBvbiBPVEMgcHJvZHVjdHM8L2xpPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvdWw+XG5cdFx0XHQgICAgICAgICAgICAgICAgPGg1PjxzdHJvbmc+VCZhbXA7QyBQaGFybWFjeTogPC9zdHJvbmc+PC9oNT5cblx0XHRcdCAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwib2ZmZXItdGVybXMtY29sdW1uXCI+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxsaT5PZmZlciBWYWxpZCBvbiBQcmVzY3JpcHRpb24gRHJ1Z3M8L2xpPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8bGk+UHJvbW8gY29kZSBjYW4gYmUgdXNlZCBNdWx0aXBsZSB0aW1lcyBkdXJpbmcgdGhlIG9mZmVyIHBlcmlvZC4gQ3VzdG9tZXJzIGNhbiBhdmFpbCB0aGlzIHByb21vIGNvZGUgYnkgY2FsbGluZyBjdXN0b21lciBzdXBwb3J0ICgxODYwLTEyMzQtMTIzNCkgb3IgYnkgYm9va2luZyBvbmxpbmUgdGhyb3VnaCBsYW5kaW5nIHBhZ2UgbGluay4gPC9saT5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGxpPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGlzY291bnQgb24gU2VsZWN0ZWQgUHJvZHVjdHM6IERpc2NvdW50cyBwcm92aWRlZCBvbiB0aGUgd2Vic2l0ZS9tb2JpbGUgYXBwbGljYXRpb24gYXJlIG9uIHNlbGVjdGVkIHByb2R1Y3RzLiBEaXNjb3VudHMgYXJlIG5vdCBhcHBsaWNhYmxlIG9uIHRoZSBmb2xsb3dpbmcgcHJvZHVjdHMgYW5kIG9uIGFueSBwcm9kdWN0cyBzbyBtZW50aW9uZWQgZWxzZXdoZXJlIG9uIHRoZSB3ZWJzaXRlL21vYmlsZSBhcHBsaWNhdGlvbjo8L3NwYW4+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2hpbGQtbGlzdC1pdGVtIHBkLTEyXCI+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFsbCBCYWJ5IGZvb2RzIHZpeiBDZXJhbGFjLCBMYWN0b2dlbiwgTmFucHJvIGV0Yy48L2xpPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BbGwgSGVhbHRoIFN1cHBsZW1lbnRzIHZpeiBQZWRpYXN1cmUsIFByb3RlaW5leCwgUHJvdGVpbnVsZXMsIFRocmVwdGluIGV0YzwvbGk+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk92ZXIgdGhlIGNvdW50ZXIgKE9UQykgcHJvZHVjdHMg4oCTIEJlbmFkcnlsIENvdWdoIFN5cnVwLCBDcm9jaW4sIFNhcmlkb24sIGFsbCBEZXR0b2wsIFNhdmxvbiBwcm9kdWN0cywgbWVkaWNhdGVkIHNvYXBzIGV0Yy48L2xpPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BbGwgQ29zbWV0aWMgcHJvZHVjdHM8L2xpPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9saT5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGxpPk9mZmVyIFZhbGlkaXR5IOKAkyAxIHllYXIgPC9saT5cblx0XHRcdCAgICAgICAgICAgICAgICA8L3VsPlxuXHRcdFx0ICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxEaXNjbGFpbWVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwYXNzZWRQcm9wcykgPT4ge1xuXG5cdHJldHVybiB7XG5cdH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG5cblx0cmV0dXJuIHtcblx0fVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykobWVkbGlmZVBvbGljeUFwcCkiXSwic291cmNlUm9vdCI6IiJ9