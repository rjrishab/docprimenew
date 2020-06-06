exports.ids = [110];
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


class cancelPolicyApp extends _react2.default.Component {

	componentDidMount() {}
	render() {

		let is_insurance_applicable;
		const parsed = queryString.parse(this.props.location.search);
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
										{ style: { color: `var(--text--primary--color)`, cursor: 'pointer', display: 'inline-block' }, onClick: () => this.props.history.push('/terms?forBookingScroll=true') },
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
}

const mapStateToProps = (state, passedProps) => {

	return {};
};

const mapDispatchToProps = dispatch => {

	return {};
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(cancelPolicyApp);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9jb21tb25zL2NhbmNlbFBvbGljeUFwcC5qcyJdLCJuYW1lcyI6WyJpc1ZpcCIsImNvbG9yIiwiZm9udFNpemUiLCJwYWRkaW5nQm90dG9tIiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiY2FuY2VsUG9saWN5QXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRNb3VudCIsInJlbmRlciIsImlzX2luc3VyYW5jZV9hcHBsaWNhYmxlIiwicGFyc2VkIiwicGFyc2UiLCJwcm9wcyIsImxvY2F0aW9uIiwic2VhcmNoIiwiaXNfdXNlcl9pbnN1cmVkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInBhZGRpbmdUb3AiLCJjdXJzb3IiLCJkaXNwbGF5IiwiaGlzdG9yeSIsInB1c2giLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInBhc3NlZFByb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztrQkFDZSxDQUFDLEVBQUVBLEtBQUYsRUFBRCxLQUFlO0FBQzdCLFdBQVE7QUFBQTtBQUFBLFVBQUssV0FBWSxlQUFjQSxRQUFNLGtCQUFOLEdBQXlCLEVBQUcsRUFBM0Q7QUFDTztBQUFBO0FBQUEsY0FBRyxXQUFVLGVBQWIsRUFBNkIsT0FBTyxFQUFFQyxPQUFPLFNBQVQsRUFBb0JDLFVBQVUsRUFBOUIsRUFBcEM7QUFBQTtBQUFBLFNBRFA7QUFFTztBQUFBO0FBQUEsY0FBSyxXQUFVLDRCQUFmLEVBQTRDLE9BQU8sRUFBRUMsZUFBZSxDQUFqQixFQUFuRDtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUZQLEtBQVI7QUFTQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYRDs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBREEsTUFBTUMsY0FBY0MsbUJBQU9BLENBQUMsa0NBQVIsQ0FBcEI7OztBQUdBLE1BQU1DLGVBQU4sU0FBOEJDLGdCQUFNQyxTQUFwQyxDQUE4Qzs7QUFFN0NDLHFCQUFvQixDQUduQjtBQUNEQyxVQUFTOztBQUVSLE1BQUlDLHVCQUFKO0FBQ0EsUUFBTUMsU0FBU1IsWUFBWVMsS0FBWixDQUFrQixLQUFLQyxLQUFMLENBQVdDLFFBQVgsQ0FBb0JDLE1BQXRDLENBQWY7QUFDQSxNQUFHSixPQUFPSyxlQUFWLEVBQTBCO0FBQ3pCTiw2QkFBMEJDLE9BQU9LLGVBQWpDO0FBQ0E7QUFDRCxTQUNDO0FBQUE7QUFBQSxLQUFLLFdBQVUsMkJBQWY7QUFDYSxpQ0FBQyxvQkFBRCxJQUFZLFVBQVU7QUFDbEJDLFlBQVEsMEJBRFU7QUFFbEJDLGtCQUFjO0FBRkksS0FBdEIsR0FEYjtBQUthO0FBQUE7QUFBQSxNQUFLLFdBQVUsS0FBZjtBQUNJO0FBQUE7QUFBQSxPQUFLLFdBQVUsUUFBZjtBQUNJO0FBQUE7QUFBQSxRQUFLLFdBQVUsb0JBQWYsRUFBb0MsT0FBTyxFQUFDQyxZQUFZLENBQWIsRUFBM0M7QUFDSTtBQUFBO0FBQUEsU0FBSSxXQUFVLGdCQUFkO0FBRURULGtDQUEyQixNQUEzQixHQUNJO0FBQUMsdUJBQUQsQ0FBTyxRQUFQO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFBQTtBQUFBLFNBREo7QUFJSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFBQTtBQUFBLFNBSko7QUFPSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFBQTtBQUFBO0FBUEosUUFESixHQWFJO0FBQUMsdUJBQUQsQ0FBTyxRQUFQO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFBQTtBQUFBLFNBREo7QUFJSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFBQTtBQUFBLFNBSko7QUFPSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFBQTtBQUFBLFNBUEo7QUFVSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFBQTtBQUMwUDtBQUFBO0FBQUEsWUFBRyxPQUFPLEVBQUNWLE9BQVEsNkJBQVQsRUFBdUNvQixRQUFPLFNBQTlDLEVBQXdEQyxTQUFRLGNBQWhFLEVBQVYsRUFBMkYsU0FBUyxNQUFLLEtBQUtSLEtBQUwsQ0FBV1MsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0IsOEJBQXhCLENBQXpHO0FBQUE7QUFBQTtBQUQxUDtBQVZKO0FBZkg7QUFESjtBQURKO0FBREosSUFMYjtBQTBDYSxpQ0FBQywwQkFBRDtBQTFDYixHQUREO0FBOENBO0FBM0Q0Qzs7QUE4RDlDLE1BQU1DLGtCQUFrQixDQUFDQyxLQUFELEVBQVFDLFdBQVIsS0FBd0I7O0FBRS9DLFFBQU8sRUFBUDtBQUVBLENBSkQ7O0FBTUEsTUFBTUMscUJBQXNCQyxRQUFELElBQWM7O0FBRXhDLFFBQU8sRUFBUDtBQUVBLENBSkQ7a0JBS2UseUJBQVFKLGVBQVIsRUFBeUJHLGtCQUF6QixFQUE2Q3RCLGVBQTdDLEMiLCJmaWxlIjoiMTEwLnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmV4cG9ydCBkZWZhdWx0ICh7IGlzVmlwIH0pID0+IHtcblx0cmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17YGRzY2xtZXItZnRyICR7aXNWaXA/J21hcmdpbi1ib3R0b20tNTUnOicnfWB9PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMjBcIiBzdHlsZT17eyBjb2xvcjogJyM4YThhOGEnLCBmb250U2l6ZTogMTAgfX0gPlRoZSBXZWJzaXRlIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGluIGNhc2Ugb2YgYSBtZWRpY2FsIGVtZXJnZW5jeSBhbmQvIG9yIGNyaXRpY2FsIGNhcmUgYW5kIHRoZSB1c2VyIHNob3VsZCBkaXJlY3RseSBjb250YWN0IGhpcy8gaGVyIG1lZGljYWwgc2VydmljZSBwcm92aWRlciBmb3IgUGh5c2ljYWwgRXhhbWluYXRpb24uIERvY3ByaW1lIGlzIHNvbGVseSBhIHRlY2hub2xvZ3kgcGFydG5lci48L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZm9vdGVyLW5ldy1jb3B5cmdodFwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDUgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8cD5Eb2NwcmltZS5jb20gQ29weXJpZ2h0ICZjb3B5OyAyMDIwLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+QWxsIHJpZ2h0cyByZXNlcnZlZC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRPQ1BSSU1FIFRFQ0hOT0xPR0lFUyBQUklWQVRFIExJTUlURUQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkNJTiA6IFU3NDk5OUhSMjAxNlBUQzA2NDMxMjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2Pilcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2UnO1xuaW1wb3J0IEhlbG1ldFRhZ3MgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0hlbG1ldFRhZ3MnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuaW1wb3J0IERpc2NsYWltZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcydcblxuY2xhc3MgY2FuY2VsUG9saWN5QXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRcblxuXHR9XG5cdHJlbmRlcigpIHtcblxuXHRcdGxldCBpc19pbnN1cmFuY2VfYXBwbGljYWJsZVxuXHRcdGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXHRcdGlmKHBhcnNlZC5pc191c2VyX2luc3VyZWQpe1xuXHRcdFx0aXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgPSBwYXJzZWQuaXNfdXNlcl9pbnN1cmVkXG5cdFx0fVxuXHRcdHJldHVybiAoIFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYWJvdXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPEhlbG1ldFRhZ3MgdGFnc0RhdGE9e3tcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICgnQ2FuY2VsIFBvbGljeSB8IGRvY3ByaW1lJyksXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAoJ2RvY3ByaW1lOiBkb2NwcmltZSBpcyBvbmUgc3RvcCBoZWFsdGggY2FyZSBzb2x1dGlvbiBmb3IgcGF0aWVudHMgYW5kIGRvY3RvcnMuIFBhdGllbnRzIGNhbiBib29rIGRvY3RvcnMgb25saW5lIGFuZCBkb2N0b3JzIGNhbiBtYW5hZ2UgcGF0aWVudHMgb25saW5lLicpXG4gICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWwtcG9saWN5LXRleHRcIiBzdHlsZT17e3BhZGRpbmdUb3A6IDB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYm9va2luZy1jYW5jZWxcIj5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAge1xuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgPT0gJ3RydWUnP1xuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Gb3IgT25saW5lIFBhaWQgQXBwb2ludG1lbnRzIC08L3N0cm9uZz4gWW91IGNhbiBjYW5jZWwgeW91ciBzY2hlZHVsZWQgYXBwb2ludG1lbnQgYXQgYW55IHRpbWUgcmlzaGFiLlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkluIENhc2Ugb2YgQSBObyBTaG93IChQYXRpZW50IFVuYXZhaWxhYmxlKSAtPC9zdHJvbmc+IEluIHRoZSBldmVudCwgdGhlIHNlcnZpY2VzIGFyZSBub3QgYXZhaWxlZCBhdCB0aGUgYXBwb2ludGVkIGRhdGUgYW5kIHRpbWUuIFdlIHdpbGwgYXV0b21hdGljYWxseSBjYW5jZWwgeW91ciBhcHBvaW50bWVudCBhdCAxMjowMCBtaWRuaWdodCBvZiB0aGUgZGF0ZSBmb2xsb3dlZCBieSB0aGUgYXBwb2ludG1lbnQgZGF0ZS5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5UaGlyZCBQYXJ0eSBDYW5jZWxsYXRpb24gKFByb3ZpZGVyIFVuYXZhaWxhYmxlKSAtIDwvc3Ryb25nPk9jY2FzaW9uYWxseSwgYXBwb2ludG1lbnRzIG1heSBiZSBjYW5jZWxlZCBvciBwb3N0cG9uZWQgZHVlIHRvIHVuYXZhaWxhYmlsaXR5IG9mIHRoZSBzZXJ2aWNlIHByb3ZpZGVyLiBTaG91bGQgdGhpcyBvY2N1ciwgd2Ugd2lsbCBjb250YWN0IG9yIGluZm9ybSB5b3UgYW5kIHlvdSBtYXkgcmVzY2hlZHVsZSB5b3VyIGFwcG9pbnRtZW50IGFzIHBlciB5b3VyIGNvbnZlbmllbmNlLlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA6XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkZvciBPbmxpbmUgUGFpZCBBcHBvaW50bWVudHMgLTwvc3Ryb25nPiBZb3UgY2FuIGNhbmNlbCB5b3VyIHNjaGVkdWxlZCBhcHBvaW50bWVudCBhbmQgaW5pdGlhdGUgdGhlIGltbWVkaWF0ZSByZWZ1bmQgYXQgYW55IHRpbWUuIEltbWVkaWF0ZSByZWZ1bmQgc2hhbGwgYmUgc3ViamVjdCB0byB0ZXJtcyBhbmQgY29uZGl0aW9ucyBhcyBkZXNjcmliZWQgdW5kZXIgdGhpcyBzZWN0aW9uIG1lbnRpb25lZCBiZWxvdy5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5JbiBDYXNlIG9mIEEgTm8gU2hvdyAoUGF0aWVudCBVbmF2YWlsYWJsZSkgLTwvc3Ryb25nPiBJbiB0aGUgZXZlbnQsIHRoZSBzZXJ2aWNlcyBhcmUgbm90IGF2YWlsZWQgYXQgdGhlIGFwcG9pbnRlZCBkYXRlIGFuZCB0aW1lLiBXZSB3aWxsIGF1dG9tYXRpY2FsbHkgY2FuY2VsIHlvdXIgYXBwb2ludG1lbnQgYXQgMTI6MDAgbWlkbmlnaHQgb2YgdGhlIGRhdGUgZm9sbG93ZWQgYnkgdGhlIGFwcG9pbnRtZW50IGRhdGUuXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VGhpcmQgUGFydHkgQ2FuY2VsbGF0aW9uIChQcm92aWRlciBVbmF2YWlsYWJsZSkgLTwvc3Ryb25nPiBPY2Nhc2lvbmFsbHksIGFwcG9pbnRtZW50cyBtYXkgYmUgY2FuY2VsZWQgb3IgcG9zdHBvbmVkIGR1ZSB0byB1bmF2YWlsYWJpbGl0eSBvZiB0aGUgc2VydmljZSBwcm92aWRlci4gU2hvdWxkIHRoaXMgb2NjdXIsIHdlIHdpbGwgY29udGFjdCBvciBpbmZvcm0geW91IGFuZCB5b3UgbWF5IHJlc2NoZWR1bGUgeW91ciBhcHBvaW50bWVudCBhcyBwZXIgeW91ciBjb252ZW5pZW5jZS5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz4yNCBIb3VycyBDYW5jZWxsYXRpb24gLTwvc3Ryb25nPiBDYW5jZWxsYXRpb24gaXMgYWxsb3dlZCBmb3IgYWxsIHRoZSBhcHBvaW50bWVudHMuIEluIHN1Y2ggY2FzZXMsIHdlIHdpbGwgaW5pdGlhdGUgdGhlIGltbWVkaWF0ZSByZWZ1bmQgb2YgeW91ciBtb25leSBhcyBwZXIgdGhlIHByb2Nlc3MgZGVmaW5lZCB1bmRlciBSZWZ1bmQsIFJlc2NoZWR1bGluZywgYW5kIENhbmNlbGxhdGlvbiBzZWN0aW9uIG9mIHRoZSAgPHUgc3R5bGU9e3tjb2xvcjogYHZhcigtLXRleHQtLXByaW1hcnktLWNvbG9yKWAgLGN1cnNvcjoncG9pbnRlcicsZGlzcGxheTonaW5saW5lLWJsb2NrJ319IG9uQ2xpY2s9eygpID0+dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy90ZXJtcz9mb3JCb29raW5nU2Nyb2xsPXRydWUnKX0+RW5kIFVzZXIgQWdyZWVtZW50LjwvdT5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBcdFx0XHQgXHQ8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxEaXNjbGFpbWVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwYXNzZWRQcm9wcykgPT4ge1xuXG5cdHJldHVybiB7XG5cdH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG5cblx0cmV0dXJuIHtcblx0fVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoY2FuY2VsUG9saWN5QXBwKSJdLCJzb3VyY2VSb290IjoiIn0=