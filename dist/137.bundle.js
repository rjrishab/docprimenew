(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[137],{

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

/***/ "./dev/js/containers/commons/cancelPolicyApp.js":
/*!******************************************************!*\
  !*** ./dev/js/containers/commons/cancelPolicyApp.js ***!
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

var cancelPolicyApp = function (_React$Component) {
	_inherits(cancelPolicyApp, _React$Component);

	function cancelPolicyApp() {
		_classCallCheck(this, cancelPolicyApp);

		return _possibleConstructorReturn(this, (cancelPolicyApp.__proto__ || Object.getPrototypeOf(cancelPolicyApp)).apply(this, arguments));
	}

	_createClass(cancelPolicyApp, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var is_insurance_applicable = void 0;
			var parsed = queryString.parse(this.props.location.search);
			if (parsed.is_user_insured) {
				is_insurance_applicable = parsed.is_user_insured;
			}
			return _react2.default.createElement(
				'div',
				{ className: 'container about-container' },
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
							{ className: 'cancel-policy-text', style: { paddingTop: 0 } },
							_react2.default.createElement(
								'ul',
								{ className: 'booking-cancel' },
								is_insurance_applicable == 'true' ? _react2.default.createElement(
									_react2.default.Fragment,
									null,
									_react2.default.createElement(
										'li',
										null,
										_react2.default.createElement(
											'strong',
											null,
											'For Online Paid Appointments -'
										),
										' You can cancel your scheduled appointment at any time rishab.'
									),
									_react2.default.createElement(
										'li',
										null,
										_react2.default.createElement(
											'strong',
											null,
											'In Case of A No Show (Patient Unavailable) -'
										),
										' In the event, the services are not availed at the appointed date and time. We will automatically cancel your appointment at 12:00 midnight of the date followed by the appointment date.'
									),
									_react2.default.createElement(
										'li',
										null,
										_react2.default.createElement(
											'strong',
											null,
											'Third Party Cancellation (Provider Unavailable) - '
										),
										'Occasionally, appointments may be canceled or postponed due to unavailability of the service provider. Should this occur, we will contact or inform you and you may reschedule your appointment as per your convenience.'
									)
								) : _react2.default.createElement(
									_react2.default.Fragment,
									null,
									_react2.default.createElement(
										'li',
										null,
										_react2.default.createElement(
											'strong',
											null,
											'For Online Paid Appointments -'
										),
										' You can cancel your scheduled appointment and initiate the immediate refund at any time. Immediate refund shall be subject to terms and conditions as described under this section mentioned below.'
									),
									_react2.default.createElement(
										'li',
										null,
										_react2.default.createElement(
											'strong',
											null,
											'In Case of A No Show (Patient Unavailable) -'
										),
										' In the event, the services are not availed at the appointed date and time. We will automatically cancel your appointment at 12:00 midnight of the date followed by the appointment date.'
									),
									_react2.default.createElement(
										'li',
										null,
										_react2.default.createElement(
											'strong',
											null,
											'Third Party Cancellation (Provider Unavailable) -'
										),
										' Occasionally, appointments may be canceled or postponed due to unavailability of the service provider. Should this occur, we will contact or inform you and you may reschedule your appointment as per your convenience.'
									),
									_react2.default.createElement(
										'li',
										null,
										_react2.default.createElement(
											'strong',
											null,
											'24 Hours Cancellation -'
										),
										' Cancellation is allowed for all the appointments. In such cases, we will initiate the immediate refund of your money as per the process defined under Refund, Rescheduling, and Cancellation section of the  ',
										_react2.default.createElement(
											'u',
											{ style: { color: 'var(--text--primary--color)', cursor: 'pointer', display: 'inline-block' }, onClick: function onClick() {
													return _this2.props.history.push('/terms?forBookingScroll=true');
												} },
											'End User Agreement.'
										)
									)
								)
							)
						)
					)
				),
				_react2.default.createElement(_staticDisclaimer2.default, null)
			);
		}
	}]);

	return cancelPolicyApp;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, passedProps) {

	return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {

	return {};
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(cancelPolicyApp);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9jb21tb25zL2NhbmNlbFBvbGljeUFwcC5qcyJdLCJuYW1lcyI6WyJpc1ZpcCIsImNvbG9yIiwiZm9udFNpemUiLCJwYWRkaW5nQm90dG9tIiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiY2FuY2VsUG9saWN5QXBwIiwiaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUiLCJwYXJzZWQiLCJwYXJzZSIsInByb3BzIiwibG9jYXRpb24iLCJzZWFyY2giLCJpc191c2VyX2luc3VyZWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicGFkZGluZ1RvcCIsImN1cnNvciIsImRpc3BsYXkiLCJoaXN0b3J5IiwicHVzaCIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJwYXNzZWRQcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztrQkFDZSxnQkFBZTtBQUFBLFFBQVpBLEtBQVksUUFBWkEsS0FBWTs7QUFDN0IsV0FBUTtBQUFBO0FBQUEsVUFBSyw2QkFBMEJBLFFBQU0sa0JBQU4sR0FBeUIsRUFBbkQsQ0FBTDtBQUNPO0FBQUE7QUFBQSxjQUFHLFdBQVUsZUFBYixFQUE2QixPQUFPLEVBQUVDLE9BQU8sU0FBVCxFQUFvQkMsVUFBVSxFQUE5QixFQUFwQztBQUFBO0FBQUEsU0FEUDtBQUVPO0FBQUE7QUFBQSxjQUFLLFdBQVUsNEJBQWYsRUFBNEMsT0FBTyxFQUFFQyxlQUFlLENBQWpCLEVBQW5EO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKO0FBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBRlAsS0FBUjtBQVNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEQ7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztBQURBLElBQU1DLGNBQWNDLG1CQUFPQSxDQUFDLDBEQUFSLENBQXBCOztJQUdNQyxlOzs7Ozs7Ozs7OztzQ0FFZSxDQUduQjs7OzJCQUNRO0FBQUE7O0FBRVIsT0FBSUMsZ0NBQUo7QUFDQSxPQUFNQyxTQUFTSixZQUFZSyxLQUFaLENBQWtCLEtBQUtDLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkMsTUFBdEMsQ0FBZjtBQUNBLE9BQUdKLE9BQU9LLGVBQVYsRUFBMEI7QUFDekJOLDhCQUEwQkMsT0FBT0ssZUFBakM7QUFDQTtBQUNELFVBQ0M7QUFBQTtBQUFBLE1BQUssV0FBVSwyQkFBZjtBQUNhLGtDQUFDLG9CQUFELElBQVksVUFBVTtBQUNsQkMsYUFBUSwwQkFEVTtBQUVsQkMsbUJBQWM7QUFGSSxNQUF0QixHQURiO0FBS2E7QUFBQTtBQUFBLE9BQUssV0FBVSxLQUFmO0FBQ0k7QUFBQTtBQUFBLFFBQUssV0FBVSxRQUFmO0FBQ0k7QUFBQTtBQUFBLFNBQUssV0FBVSxvQkFBZixFQUFvQyxPQUFPLEVBQUNDLFlBQVksQ0FBYixFQUEzQztBQUNJO0FBQUE7QUFBQSxVQUFJLFdBQVUsZ0JBQWQ7QUFFRFQsbUNBQTJCLE1BQTNCLEdBQ0k7QUFBQyx3QkFBRCxDQUFPLFFBQVA7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUFBO0FBQUEsVUFESjtBQUlJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUFBO0FBQUEsVUFKSjtBQU9JO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUFBO0FBQUE7QUFQSixTQURKLEdBYUk7QUFBQyx3QkFBRCxDQUFPLFFBQVA7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUFBO0FBQUEsVUFESjtBQUlJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUFBO0FBQUEsVUFKSjtBQU9JO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUFBO0FBQUEsVUFQSjtBQVVJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUFBO0FBQzBQO0FBQUE7QUFBQSxhQUFHLE9BQU8sRUFBQ04sb0NBQUQsRUFBdUNnQixRQUFPLFNBQTlDLEVBQXdEQyxTQUFRLGNBQWhFLEVBQVYsRUFBMkYsU0FBUztBQUFBLG9CQUFLLE9BQUtSLEtBQUwsQ0FBV1MsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0IsOEJBQXhCLENBQUw7QUFBQSxhQUFwRztBQUFBO0FBQUE7QUFEMVA7QUFWSjtBQWZIO0FBREo7QUFESjtBQURKLEtBTGI7QUEwQ2Esa0NBQUMsMEJBQUQ7QUExQ2IsSUFERDtBQThDQTs7OztFQTNENEJDLGdCQUFNQyxTOztBQThEcEMsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVFDLFdBQVIsRUFBd0I7O0FBRS9DLFFBQU8sRUFBUDtBQUVBLENBSkQ7O0FBTUEsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjOztBQUV4QyxRQUFPLEVBQVA7QUFFQSxDQUpEO2tCQUtlLHlCQUFRSixlQUFSLEVBQXlCRyxrQkFBekIsRUFBNkNwQixlQUE3QyxDIiwiZmlsZSI6IjEzNy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5leHBvcnQgZGVmYXVsdCAoeyBpc1ZpcCB9KSA9PiB7XG5cdHJldHVybiAoPGRpdiBjbGFzc05hbWU9e2Bkc2NsbWVyLWZ0ciAke2lzVmlwPydtYXJnaW4tYm90dG9tLTU1JzonJ31gfT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTIwXCIgc3R5bGU9e3sgY29sb3I6ICcjOGE4YThhJywgZm9udFNpemU6IDEwIH19ID5UaGUgV2Vic2l0ZSBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBpbiBjYXNlIG9mIGEgbWVkaWNhbCBlbWVyZ2VuY3kgYW5kLyBvciBjcml0aWNhbCBjYXJlIGFuZCB0aGUgdXNlciBzaG91bGQgZGlyZWN0bHkgY29udGFjdCBoaXMvIGhlciBtZWRpY2FsIHNlcnZpY2UgcHJvdmlkZXIgZm9yIFBoeXNpY2FsIEV4YW1pbmF0aW9uLiBEb2NwcmltZSBpcyBzb2xlbHkgYSB0ZWNobm9sb2d5IHBhcnRuZXIuPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGZvb3Rlci1uZXctY29weXJnaHRcIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiA1IH19ID5cbiAgICAgICAgICAgICAgICAgICAgPHA+RG9jcHJpbWUuY29tIENvcHlyaWdodCAmY29weTsgMjAyMC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkFsbCByaWdodHMgcmVzZXJ2ZWQuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5ET0NQUklNRSBURUNITk9MT0dJRVMgUFJJVkFURSBMSU1JVEVEPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5DSU4gOiBVNzQ5OTlIUjIwMTZQVEMwNjQzMTI8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4pXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vaGVscGVycy9zdG9yYWdlJztcbmltcG9ydCBIZWxtZXRUYWdzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9IZWxtZXRUYWdzJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcbmltcG9ydCBEaXNjbGFpbWVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9Ib21lL3N0YXRpY0Rpc2NsYWltZXIuanMnXG5cbmNsYXNzIGNhbmNlbFBvbGljeUFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0XG5cblx0fVxuXHRyZW5kZXIoKSB7XG5cblx0XHRsZXQgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGVcblx0XHRjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblx0XHRpZihwYXJzZWQuaXNfdXNlcl9pbnN1cmVkKXtcblx0XHRcdGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlID0gcGFyc2VkLmlzX3VzZXJfaW5zdXJlZFxuXHRcdH1cblx0XHRyZXR1cm4gKCBcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGFib3V0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxIZWxtZXRUYWdzIHRhZ3NEYXRhPXt7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAoJ0NhbmNlbCBQb2xpY3kgfCBkb2NwcmltZScpLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogKCdkb2NwcmltZTogZG9jcHJpbWUgaXMgb25lIHN0b3AgaGVhbHRoIGNhcmUgc29sdXRpb24gZm9yIHBhdGllbnRzIGFuZCBkb2N0b3JzLiBQYXRpZW50cyBjYW4gYm9vayBkb2N0b3JzIG9ubGluZSBhbmQgZG9jdG9ycyBjYW4gbWFuYWdlIHBhdGllbnRzIG9ubGluZS4nKVxuICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLXBvbGljeS10ZXh0XCIgc3R5bGU9e3twYWRkaW5nVG9wOiAwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJvb2tpbmctY2FuY2VsXCI+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIHtcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlID09ICd0cnVlJz9cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Rm9yIE9ubGluZSBQYWlkIEFwcG9pbnRtZW50cyAtPC9zdHJvbmc+IFlvdSBjYW4gY2FuY2VsIHlvdXIgc2NoZWR1bGVkIGFwcG9pbnRtZW50IGF0IGFueSB0aW1lIHJpc2hhYi5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5JbiBDYXNlIG9mIEEgTm8gU2hvdyAoUGF0aWVudCBVbmF2YWlsYWJsZSkgLTwvc3Ryb25nPiBJbiB0aGUgZXZlbnQsIHRoZSBzZXJ2aWNlcyBhcmUgbm90IGF2YWlsZWQgYXQgdGhlIGFwcG9pbnRlZCBkYXRlIGFuZCB0aW1lLiBXZSB3aWxsIGF1dG9tYXRpY2FsbHkgY2FuY2VsIHlvdXIgYXBwb2ludG1lbnQgYXQgMTI6MDAgbWlkbmlnaHQgb2YgdGhlIGRhdGUgZm9sbG93ZWQgYnkgdGhlIGFwcG9pbnRtZW50IGRhdGUuXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VGhpcmQgUGFydHkgQ2FuY2VsbGF0aW9uIChQcm92aWRlciBVbmF2YWlsYWJsZSkgLSA8L3N0cm9uZz5PY2Nhc2lvbmFsbHksIGFwcG9pbnRtZW50cyBtYXkgYmUgY2FuY2VsZWQgb3IgcG9zdHBvbmVkIGR1ZSB0byB1bmF2YWlsYWJpbGl0eSBvZiB0aGUgc2VydmljZSBwcm92aWRlci4gU2hvdWxkIHRoaXMgb2NjdXIsIHdlIHdpbGwgY29udGFjdCBvciBpbmZvcm0geW91IGFuZCB5b3UgbWF5IHJlc2NoZWR1bGUgeW91ciBhcHBvaW50bWVudCBhcyBwZXIgeW91ciBjb252ZW5pZW5jZS5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgOlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Gb3IgT25saW5lIFBhaWQgQXBwb2ludG1lbnRzIC08L3N0cm9uZz4gWW91IGNhbiBjYW5jZWwgeW91ciBzY2hlZHVsZWQgYXBwb2ludG1lbnQgYW5kIGluaXRpYXRlIHRoZSBpbW1lZGlhdGUgcmVmdW5kIGF0IGFueSB0aW1lLiBJbW1lZGlhdGUgcmVmdW5kIHNoYWxsIGJlIHN1YmplY3QgdG8gdGVybXMgYW5kIGNvbmRpdGlvbnMgYXMgZGVzY3JpYmVkIHVuZGVyIHRoaXMgc2VjdGlvbiBtZW50aW9uZWQgYmVsb3cuXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+SW4gQ2FzZSBvZiBBIE5vIFNob3cgKFBhdGllbnQgVW5hdmFpbGFibGUpIC08L3N0cm9uZz4gSW4gdGhlIGV2ZW50LCB0aGUgc2VydmljZXMgYXJlIG5vdCBhdmFpbGVkIGF0IHRoZSBhcHBvaW50ZWQgZGF0ZSBhbmQgdGltZS4gV2Ugd2lsbCBhdXRvbWF0aWNhbGx5IGNhbmNlbCB5b3VyIGFwcG9pbnRtZW50IGF0IDEyOjAwIG1pZG5pZ2h0IG9mIHRoZSBkYXRlIGZvbGxvd2VkIGJ5IHRoZSBhcHBvaW50bWVudCBkYXRlLlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlRoaXJkIFBhcnR5IENhbmNlbGxhdGlvbiAoUHJvdmlkZXIgVW5hdmFpbGFibGUpIC08L3N0cm9uZz4gT2NjYXNpb25hbGx5LCBhcHBvaW50bWVudHMgbWF5IGJlIGNhbmNlbGVkIG9yIHBvc3Rwb25lZCBkdWUgdG8gdW5hdmFpbGFiaWxpdHkgb2YgdGhlIHNlcnZpY2UgcHJvdmlkZXIuIFNob3VsZCB0aGlzIG9jY3VyLCB3ZSB3aWxsIGNvbnRhY3Qgb3IgaW5mb3JtIHlvdSBhbmQgeW91IG1heSByZXNjaGVkdWxlIHlvdXIgYXBwb2ludG1lbnQgYXMgcGVyIHlvdXIgY29udmVuaWVuY2UuXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+MjQgSG91cnMgQ2FuY2VsbGF0aW9uIC08L3N0cm9uZz4gQ2FuY2VsbGF0aW9uIGlzIGFsbG93ZWQgZm9yIGFsbCB0aGUgYXBwb2ludG1lbnRzLiBJbiBzdWNoIGNhc2VzLCB3ZSB3aWxsIGluaXRpYXRlIHRoZSBpbW1lZGlhdGUgcmVmdW5kIG9mIHlvdXIgbW9uZXkgYXMgcGVyIHRoZSBwcm9jZXNzIGRlZmluZWQgdW5kZXIgUmVmdW5kLCBSZXNjaGVkdWxpbmcsIGFuZCBDYW5jZWxsYXRpb24gc2VjdGlvbiBvZiB0aGUgIDx1IHN0eWxlPXt7Y29sb3I6IGB2YXIoLS10ZXh0LS1wcmltYXJ5LS1jb2xvcilgICxjdXJzb3I6J3BvaW50ZXInLGRpc3BsYXk6J2lubGluZS1ibG9jayd9fSBvbkNsaWNrPXsoKSA9PnRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdGVybXM/Zm9yQm9va2luZ1Njcm9sbD10cnVlJyl9PkVuZCBVc2VyIEFncmVlbWVudC48L3U+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgXHRcdFx0IFx0PC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8RGlzY2xhaW1lciAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcGFzc2VkUHJvcHMpID0+IHtcblxuXHRyZXR1cm4ge1xuXHR9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuXG5cdHJldHVybiB7XG5cdH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKGNhbmNlbFBvbGljeUFwcCkiXSwic291cmNlUm9vdCI6IiJ9