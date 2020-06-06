exports.ids = [111];
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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

__webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _HelmetTags = __webpack_require__(/*! ../../components/commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _staticDisclaimer = __webpack_require__(/*! ../../components/commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


class medlifePolicyApp extends _react2.default.Component {

	render() {

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
}

const mapStateToProps = (state, passedProps) => {

	return {};
};

const mapDispatchToProps = dispatch => {

	return {};
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(medlifePolicyApp);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9jb21tb25zL21lZGxpZmVQb2xpY3lBcHAuanMiXSwibmFtZXMiOlsiaXNWaXAiLCJjb2xvciIsImZvbnRTaXplIiwicGFkZGluZ0JvdHRvbSIsInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIm1lZGxpZmVQb2xpY3lBcHAiLCJSZWFjdCIsIkNvbXBvbmVudCIsInJlbmRlciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInBhc3NlZFByb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztrQkFDZSxDQUFDLEVBQUVBLEtBQUYsRUFBRCxLQUFlO0FBQzdCLFdBQVE7QUFBQTtBQUFBLFVBQUssV0FBWSxlQUFjQSxRQUFNLGtCQUFOLEdBQXlCLEVBQUcsRUFBM0Q7QUFDTztBQUFBO0FBQUEsY0FBRyxXQUFVLGVBQWIsRUFBNkIsT0FBTyxFQUFFQyxPQUFPLFNBQVQsRUFBb0JDLFVBQVUsRUFBOUIsRUFBcEM7QUFBQTtBQUFBLFNBRFA7QUFFTztBQUFBO0FBQUEsY0FBSyxXQUFVLDRCQUFmLEVBQTRDLE9BQU8sRUFBRUMsZUFBZSxDQUFqQixFQUFuRDtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUZQLEtBQVI7QUFTQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYRDs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBREEsTUFBTUMsY0FBY0MsbUJBQU9BLENBQUMsa0NBQVIsQ0FBcEI7OztBQUdBLE1BQU1DLGdCQUFOLFNBQStCQyxnQkFBTUMsU0FBckMsQ0FBK0M7O0FBRTlDQyxVQUFTOztBQUVSLFNBQ0M7QUFBQTtBQUFBLEtBQUssV0FBVSwrQkFBZjtBQUNhLGlDQUFDLG9CQUFELElBQVksVUFBVTtBQUNsQkMsWUFBUSwwQkFEVTtBQUVsQkMsa0JBQWM7QUFGSSxLQUF0QixHQURiO0FBS2E7QUFBQTtBQUFBLE1BQUssV0FBVSxLQUFmO0FBQ0k7QUFBQTtBQUFBLE9BQUssV0FBVSxRQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQ0w7QUFBQTtBQUFBLFNBQUksV0FBVSxPQUFkO0FBQXNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEIsT0FESztBQUVMO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSixPQUZLO0FBR0w7QUFBQTtBQUFBLFNBQUksV0FBVSxvQkFBZDtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQXlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBekQsUUFESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQVU7QUFBQTtBQUFBLFdBQUcsTUFBSywwQkFBUjtBQUFBO0FBQUE7QUFBVixRQUhKO0FBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUpKO0FBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKLE9BSEs7QUFVTDtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUosT0FWSztBQVdMO0FBQUE7QUFBQSxTQUFJLFdBQVUsb0JBQWQ7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRko7QUFHSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREo7QUFFSTtBQUFBO0FBQUEsV0FBSSxXQUFVLHVCQUFkO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUhKO0FBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBRkosUUFISjtBQVlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaSjtBQVhLO0FBREo7QUFESixJQUxiO0FBbUNhLGlDQUFDLDBCQUFEO0FBbkNiLEdBREQ7QUF1Q0E7QUEzQzZDOztBQThDL0MsTUFBTUMsa0JBQWtCLENBQUNDLEtBQUQsRUFBUUMsV0FBUixLQUF3Qjs7QUFFL0MsUUFBTyxFQUFQO0FBRUEsQ0FKRDs7QUFNQSxNQUFNQyxxQkFBc0JDLFFBQUQsSUFBYzs7QUFFeEMsUUFBTyxFQUFQO0FBRUEsQ0FKRDtrQkFLZSx5QkFBUUosZUFBUixFQUF5Qkcsa0JBQXpCLEVBQTZDVCxnQkFBN0MsQyIsImZpbGUiOiIxMTEuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuZXhwb3J0IGRlZmF1bHQgKHsgaXNWaXAgfSkgPT4ge1xuXHRyZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtgZHNjbG1lci1mdHIgJHtpc1ZpcD8nbWFyZ2luLWJvdHRvbS01NSc6Jyd9YH0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0yMFwiIHN0eWxlPXt7IGNvbG9yOiAnIzhhOGE4YScsIGZvbnRTaXplOiAxMCB9fSA+VGhlIFdlYnNpdGUgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgaW4gY2FzZSBvZiBhIG1lZGljYWwgZW1lcmdlbmN5IGFuZC8gb3IgY3JpdGljYWwgY2FyZSBhbmQgdGhlIHVzZXIgc2hvdWxkIGRpcmVjdGx5IGNvbnRhY3QgaGlzLyBoZXIgbWVkaWNhbCBzZXJ2aWNlIHByb3ZpZGVyIGZvciBQaHlzaWNhbCBFeGFtaW5hdGlvbi4gRG9jcHJpbWUgaXMgc29sZWx5IGEgdGVjaG5vbG9neSBwYXJ0bmVyLjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBmb290ZXItbmV3LWNvcHlyZ2h0XCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogNSB9fSA+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRvY3ByaW1lLmNvbSBDb3B5cmlnaHQgJmNvcHk7IDIwMjAuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5BbGwgcmlnaHRzIHJlc2VydmVkLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+RE9DUFJJTUUgVEVDSE5PTE9HSUVTIFBSSVZBVEUgTElNSVRFRDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+Q0lOIDogVTc0OTk5SFIyMDE2UFRDMDY0MzEyPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+KVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSc7XG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvSGVsbWV0VGFncydcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5pbXBvcnQgRGlzY2xhaW1lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvSG9tZS9zdGF0aWNEaXNjbGFpbWVyLmpzJ1xuXG5jbGFzcyBtZWRsaWZlUG9saWN5QXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0XG5cdHJlbmRlcigpIHtcblxuXHRcdHJldHVybiAoIFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYWJvdXQtY29udGFpbmVyIHAtM1wiPlxuICAgICAgICAgICAgICAgIDxIZWxtZXRUYWdzIHRhZ3NEYXRhPXt7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAoJ0NhbmNlbCBQb2xpY3kgfCBkb2NwcmltZScpLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogKCdkb2NwcmltZTogZG9jcHJpbWUgaXMgb25lIHN0b3AgaGVhbHRoIGNhcmUgc29sdXRpb24gZm9yIHBhdGllbnRzIGFuZCBkb2N0b3JzLiBQYXRpZW50cyBjYW4gYm9vayBkb2N0b3JzIG9ubGluZSBhbmQgZG9jdG9ycyBjYW4gbWFuYWdlIHBhdGllbnRzIG9ubGluZS4nKVxuICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG5cdFx0XHQgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTI0XCI+PHN0cm9uZz5NZWRsaWZlIFRuQzwvc3Ryb25nPjwvaDM+XG5cdFx0XHQgICAgICAgICAgICAgICAgPGg1PjxzdHJvbmc+T2ZmZXIgVGVybXM6PC9zdHJvbmc+PC9oNT5cblx0XHRcdCAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwib2ZmZXItdGVybXMtY29sdW1uXCI+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxsaT5TYXZlIDIzJSBvbiBhbGwgcHJlc2NyaWJlZCBtZWRpY2luZXMgZXhjbHVzaXZlbHkgZm9yIDxzdHJvbmc+RG9jcHJpbWUgR29sZCAvIFZJUCB1c2Vyczwvc3Ryb25nPjwvbGk+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxsaT5ObyBtaW5pbXVtIG9yZGVyIHZhbHVlIHJlcXVpcmVkIHRvIGF2YWlsIGRpc2NvdW50LjwvbGk+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxsaT5WaXNpdCA8YSBocmVmPVwiaHR0cHM6Ly93d3cubWVkbGlmZS5jb20vXCI+TWVkbGlmZS5jb208L2E+PC9saT5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGxpPlVwbG9hZCBwcmVzY3JpcHRpb24gJmFtcDsgc2VsZWN0IG1lZGljaW5lcy48L2xpPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8bGk+RW50ZXIgcHJvbW8gaW4gdGhlIG9yZGVyIGNoZWNrb3V0IHBhZ2UuIENvbXBsZXRlIHBheW1lbnQgdmlhIGFueSBtb2RlLiAqKlByb21vIG5vdCBhcHBsaWNhYmxlIG9uIE9UQyBwcm9kdWN0czwvbGk+XG5cdFx0XHQgICAgICAgICAgICAgICAgPC91bD5cblx0XHRcdCAgICAgICAgICAgICAgICA8aDU+PHN0cm9uZz5UJmFtcDtDIFBoYXJtYWN5OiA8L3N0cm9uZz48L2g1PlxuXHRcdFx0ICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJvZmZlci10ZXJtcy1jb2x1bW5cIj5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGxpPk9mZmVyIFZhbGlkIG9uIFByZXNjcmlwdGlvbiBEcnVnczwvbGk+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxsaT5Qcm9tbyBjb2RlIGNhbiBiZSB1c2VkIE11bHRpcGxlIHRpbWVzIGR1cmluZyB0aGUgb2ZmZXIgcGVyaW9kLiBDdXN0b21lcnMgY2FuIGF2YWlsIHRoaXMgcHJvbW8gY29kZSBieSBjYWxsaW5nIGN1c3RvbWVyIHN1cHBvcnQgKDE4NjAtMTIzNC0xMjM0KSBvciBieSBib29raW5nIG9ubGluZSB0aHJvdWdoIGxhbmRpbmcgcGFnZSBsaW5rLiA8L2xpPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8bGk+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EaXNjb3VudCBvbiBTZWxlY3RlZCBQcm9kdWN0czogRGlzY291bnRzIHByb3ZpZGVkIG9uIHRoZSB3ZWJzaXRlL21vYmlsZSBhcHBsaWNhdGlvbiBhcmUgb24gc2VsZWN0ZWQgcHJvZHVjdHMuIERpc2NvdW50cyBhcmUgbm90IGFwcGxpY2FibGUgb24gdGhlIGZvbGxvd2luZyBwcm9kdWN0cyBhbmQgb24gYW55IHByb2R1Y3RzIHNvIG1lbnRpb25lZCBlbHNld2hlcmUgb24gdGhlIHdlYnNpdGUvbW9iaWxlIGFwcGxpY2F0aW9uOjwvc3Bhbj5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjaGlsZC1saXN0LWl0ZW0gcGQtMTJcIj5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QWxsIEJhYnkgZm9vZHMgdml6IENlcmFsYWMsIExhY3RvZ2VuLCBOYW5wcm8gZXRjLjwvbGk+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFsbCBIZWFsdGggU3VwcGxlbWVudHMgdml6IFBlZGlhc3VyZSwgUHJvdGVpbmV4LCBQcm90ZWludWxlcywgVGhyZXB0aW4gZXRjPC9saT5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+T3ZlciB0aGUgY291bnRlciAoT1RDKSBwcm9kdWN0cyDigJMgQmVuYWRyeWwgQ291Z2ggU3lydXAsIENyb2NpbiwgU2FyaWRvbiwgYWxsIERldHRvbCwgU2F2bG9uIHByb2R1Y3RzLCBtZWRpY2F0ZWQgc29hcHMgZXRjLjwvbGk+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFsbCBDb3NtZXRpYyBwcm9kdWN0czwvbGk+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8bGk+T2ZmZXIgVmFsaWRpdHkg4oCTIDEgeWVhciA8L2xpPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvdWw+XG5cdFx0XHQgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPERpc2NsYWltZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHBhc3NlZFByb3BzKSA9PiB7XG5cblx0cmV0dXJuIHtcblx0fVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcblxuXHRyZXR1cm4ge1xuXHR9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShtZWRsaWZlUG9saWN5QXBwKSJdLCJzb3VyY2VSb290IjoiIn0=