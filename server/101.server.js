exports.ids = [101];
exports.modules = {

/***/ "./dev/js/components/commons/SinglePageChatFeedBackView/SinglePageChatFeedBackView.js":
/*!********************************************************************************************!*\
  !*** ./dev/js/components/commons/SinglePageChatFeedBackView/SinglePageChatFeedBackView.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class ChatQuestion2 extends _react2.default.Component {
	constructor(props) {
		super(props);
		this.state = {
			feedback: {}
		};
	}

	componentDidMount() {
		let data = {

			'Category': 'Chat', 'Action': 'ChatNewFeedbackPageLanded', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'chat-new-feedback-page-landed', "url": window.location.pathname
		};
		_gtm2.default.sendEvent({ data: data });
	}

	saveFeedBack(data) {
		let ques1 = [];
		let ques2 = [];
		let length = document.querySelectorAll('input:checked').length;
		for (var i = 0; i < length; i++) {
			let x = document.querySelectorAll('input:checked')[i];
			if (x && x.classList && x.classList.contains('QUES1')) {
				ques1.push(x.getAttribute('val'));
			}

			if (x && x.classList && x.classList.contains('QUES2')) {
				ques2.push(x.getAttribute('val'));
			}
		}

		if (!ques1.length) {
			_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please answer the First Question " });
			return;
		}

		if (!ques2.length) {
			_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please answer the Second Question " });
			return;
		}

		if (!this.state.comments) {
			_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please add some Comments" });
			return;
		}

		const parsed = queryString.parse(this.props.location.search);
		let rid = parsed.rid || '';
		if (rid) {
			try {
				if (window && window.atob(rid)) {
					rid = window.atob(rid);
				}
			} catch (e) {}
		}

		let postData = {
			rid: rid,
			data: [{ type: 'ques1', data: { question: 'What do you think can be improved?', feedback: ques1 } }, { type: 'ques2', data: { question: 'What did you like about the service?', feedback: ques2 } }, { type: 'ques3', data: { question: 'Any Comments?', feedback: [this.state.comments] } }, { createdOn: new Date() }, { type: 'SinglePageFeedback' }]
		};

		this.props.submitChatFeedback(postData);
		let gtmData = {

			'Category': 'Chat', 'Action': 'ChatNewFeedbackSubmitted', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'chat-new-feedback-submitted', "url": window.location.pathname
		};
		_gtm2.default.sendEvent({ data: gtmData });
		setTimeout(() => {
			this.props.history.push('/chat/feedback/thanks');
		}, 1000);
	}

	render() {

		return _react2.default.createElement(
			'div',
			{ className: 'customer-feedback cf-hght' },
			_react2.default.createElement(
				'div',
				{ className: 'cf-card' },
				_react2.default.createElement(
					'div',
					{ className: 'cf-body' },
					_react2.default.createElement(
						'h3',
						{ className: 'nechatheding' },
						'Online consultation ',
						_react2.default.createElement('br', null),
						'feedback'
					),
					_react2.default.createElement(
						'div',
						{ className: 'chat-qa-cont' },
						_react2.default.createElement(
							'h4',
							null,
							'Q 1: What do you think can be improved?'
						),
						_react2.default.createElement(
							'ul',
							{ className: 'chat-qa-listing' },
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									{ className: 'ck-bx' },
									_react2.default.createElement(
										'span',
										{ className: 'rate-feed-text' },
										'Better treatment'
									),
									_react2.default.createElement('input', { type: 'checkbox', className: 'QUES1', val: 'Better treatment', ques: '1' }),
									_react2.default.createElement('span', { className: 'checkmark' })
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									{ className: 'ck-bx' },
									_react2.default.createElement(
										'span',
										{ className: 'rate-feed-text' },
										'The doctor could have explained the treatment better'
									),
									_react2.default.createElement('input', { type: 'checkbox', className: 'QUES1', val: 'The doctor could have explained the treatment better', ques: '2' }),
									_react2.default.createElement('span', { className: 'checkmark' })
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									{ className: 'ck-bx' },
									_react2.default.createElement(
										'span',
										{ className: 'rate-feed-text' },
										'Too many questions/ Irrelevant questions'
									),
									_react2.default.createElement('input', { type: 'checkbox', className: 'QUES1', val: 'Too many questions/ Irrelevant questions', ques: '1' }),
									_react2.default.createElement('span', { className: 'checkmark' })
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									{ className: 'ck-bx' },
									_react2.default.createElement(
										'span',
										{ className: 'rate-feed-text' },
										'Everything was perfect'
									),
									_react2.default.createElement('input', { type: 'checkbox', className: 'QUES1', val: 'Everything was perfect', ques: '1' }),
									_react2.default.createElement('span', { className: 'checkmark' })
								)
							)
						),
						_react2.default.createElement(
							'h4',
							null,
							'Q 2: What did you like about the service?'
						),
						_react2.default.createElement(
							'ul',
							{ className: 'chat-qa-listing' },
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									{ className: 'ck-bx' },
									_react2.default.createElement(
										'span',
										{ className: 'rate-feed-text' },
										'Quick consultation time'
									),
									_react2.default.createElement('input', { type: 'checkbox', className: 'QUES2', val: 'Quick consultation time', ques: '2' }),
									_react2.default.createElement('span', { className: 'checkmark' })
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									{ className: 'ck-bx' },
									_react2.default.createElement(
										'span',
										{ className: 'rate-feed-text' },
										'Right advice/treatment'
									),
									_react2.default.createElement('input', { type: 'checkbox', className: 'QUES2', val: 'Right advice/treatment', ques: '2' }),
									_react2.default.createElement('span', { className: 'checkmark' })
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									{ className: 'ck-bx' },
									_react2.default.createElement(
										'span',
										{ className: 'rate-feed-text' },
										'Easy to understand interface'
									),
									_react2.default.createElement('input', { type: 'checkbox', className: 'QUES2', val: 'Easy to understand interface', ques: '2' }),
									_react2.default.createElement('span', { className: 'checkmark' })
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									{ className: 'ck-bx' },
									_react2.default.createElement(
										'span',
										{ className: 'rate-feed-text' },
										'Did not like anything'
									),
									_react2.default.createElement('input', { type: 'checkbox', className: 'QUES2', val: 'Did not like anything', ques: '2' }),
									_react2.default.createElement('span', { className: 'checkmark' })
								)
							)
						),
						_react2.default.createElement(
							'h4',
							null,
							'Q 3: Any Comments?'
						),
						_react2.default.createElement(
							'textarea',
							{ onChange: e => {
									this.setState({ comments: e.target.value });
								} },
							this.state.comments
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'cf-footer' },
					_react2.default.createElement(
						'a',
						{ style: { margin: 'auto' }, href: 'javascript:void(0);', onClick: this.saveFeedBack.bind(this), className: 'cf-btn' },
						'SUBMIT',
						_react2.default.createElement('img', { src: '/assets/images/right_arrow.png', alt: 'r-arrow', className: 'cf-img' })
					)
				)
			)
		);
	}
}

exports.default = ChatQuestion2;

/***/ }),

/***/ "./dev/js/components/commons/SinglePageChatFeedBackView/index.js":
/*!***********************************************************************!*\
  !*** ./dev/js/components/commons/SinglePageChatFeedBackView/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SinglePageChatFeedBackView = __webpack_require__(/*! ./SinglePageChatFeedBackView.js */ "./dev/js/components/commons/SinglePageChatFeedBackView/SinglePageChatFeedBackView.js");

var _SinglePageChatFeedBackView2 = _interopRequireDefault(_SinglePageChatFeedBackView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SinglePageChatFeedBackView2.default;

/***/ }),

/***/ "./dev/js/containers/commons/SingleChatPageFeedback.js":
/*!*************************************************************!*\
  !*** ./dev/js/containers/commons/SingleChatPageFeedback.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _SinglePageChatFeedBackView = __webpack_require__(/*! ../../components/commons/SinglePageChatFeedBackView */ "./dev/js/components/commons/SinglePageChatFeedBackView/index.js");

var _SinglePageChatFeedBackView2 = _interopRequireDefault(_SinglePageChatFeedBackView);

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SinglePageChatFeedBack extends _react2.default.Component {

	render() {
		return _react2.default.createElement(_SinglePageChatFeedBackView2.default, this.props);
	}
}

const mapStateToProps = state => {

	const {
		chat_feedback,
		chat_feedback_roomId
	} = state.USER;

	return {
		chat_feedback,
		chat_feedback_roomId
	};
};

const mapDispatchToProps = dispatch => {

	return {
		submitChatFeedback: postData => dispatch((0, _index.submitChatFeedback)(postData)),
		saveChatFeedbackRoomId: rid => dispatch((0, _index.saveChatFeedbackRoomId)(rid))
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SinglePageChatFeedBack);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL1NpbmdsZVBhZ2VDaGF0RmVlZEJhY2tWaWV3L1NpbmdsZVBhZ2VDaGF0RmVlZEJhY2tWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvU2luZ2xlUGFnZUNoYXRGZWVkQmFja1ZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy9TaW5nbGVDaGF0UGFnZUZlZWRiYWNrLmpzIl0sIm5hbWVzIjpbInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIkNoYXRRdWVzdGlvbjIiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImZlZWRiYWNrIiwiY29tcG9uZW50RGlkTW91bnQiLCJkYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNlbmRFdmVudCIsInNhdmVGZWVkQmFjayIsInF1ZXMxIiwicXVlczIiLCJsZW5ndGgiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwieCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicHVzaCIsImdldEF0dHJpYnV0ZSIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJjb21tZW50cyIsInBhcnNlZCIsInBhcnNlIiwic2VhcmNoIiwicmlkIiwiYXRvYiIsImUiLCJwb3N0RGF0YSIsInR5cGUiLCJxdWVzdGlvbiIsImNyZWF0ZWRPbiIsIkRhdGUiLCJzdWJtaXRDaGF0RmVlZGJhY2siLCJndG1EYXRhIiwic2V0VGltZW91dCIsImhpc3RvcnkiLCJyZW5kZXIiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwibWFyZ2luIiwiYmluZCIsIlNpbmdsZVBhZ2VGZWVkYmFjayIsIlNpbmdsZVBhZ2VDaGF0RmVlZEJhY2siLCJtYXBTdGF0ZVRvUHJvcHMiLCJjaGF0X2ZlZWRiYWNrIiwiY2hhdF9mZWVkYmFja19yb29tSWQiLCJVU0VSIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJzYXZlQ2hhdEZlZWRiYWNrUm9vbUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBQ0EsTUFBTUEsY0FBY0MsbUJBQU9BLENBQUMsa0NBQVIsQ0FBcEI7O0FBRUEsTUFBTUMsYUFBTixTQUE0QkMsZ0JBQU1DLFNBQWxDLENBQTRDO0FBQzNDQyxhQUFZQyxLQUFaLEVBQW1CO0FBQ2xCLFFBQU1BLEtBQU47QUFDQSxPQUFLQyxLQUFMLEdBQWE7QUFDWkMsYUFBVTtBQURFLEdBQWI7QUFHQTs7QUFFREMscUJBQW9CO0FBQ25CLE1BQUlDLE9BQU87O0FBRVYsZUFBWSxNQUZGLEVBRVUsVUFBVSwyQkFGcEIsRUFFaUQsY0FBY0MsY0FBSUMsU0FBSixFQUYvRCxFQUVnRixVQUFVLENBRjFGLEVBRTZGLFNBQVMsK0JBRnRHLEVBRXVJLE9BQU9DLE9BQU9DLFFBQVAsQ0FBZ0JDO0FBRjlKLEdBQVg7QUFJQUosZ0JBQUlLLFNBQUosQ0FBYyxFQUFFTixNQUFNQSxJQUFSLEVBQWQ7QUFDQTs7QUFFRE8sY0FBYVAsSUFBYixFQUFtQjtBQUNsQixNQUFJUSxRQUFNLEVBQVY7QUFDQSxNQUFJQyxRQUFPLEVBQVg7QUFDQSxNQUFJQyxTQUFTQyxTQUFTQyxnQkFBVCxDQUEwQixlQUExQixFQUEyQ0YsTUFBeEQ7QUFDQSxPQUFJLElBQUlHLElBQUksQ0FBWixFQUFjQSxJQUFFSCxNQUFoQixFQUF1QkcsR0FBdkIsRUFBMkI7QUFDMUIsT0FBSUMsSUFBSUgsU0FBU0MsZ0JBQVQsQ0FBMEIsZUFBMUIsRUFBMkNDLENBQTNDLENBQVI7QUFDQSxPQUFHQyxLQUFLQSxFQUFFQyxTQUFQLElBQW9CRCxFQUFFQyxTQUFGLENBQVlDLFFBQVosQ0FBcUIsT0FBckIsQ0FBdkIsRUFBc0Q7QUFDckRSLFVBQU1TLElBQU4sQ0FBV0gsRUFBRUksWUFBRixDQUFlLEtBQWYsQ0FBWDtBQUNBOztBQUVELE9BQUdKLEtBQUtBLEVBQUVDLFNBQVAsSUFBb0JELEVBQUVDLFNBQUYsQ0FBWUMsUUFBWixDQUFxQixPQUFyQixDQUF2QixFQUFzRDtBQUNyRFAsVUFBTVEsSUFBTixDQUFXSCxFQUFFSSxZQUFGLENBQWUsS0FBZixDQUFYO0FBQ0E7QUFFRDs7QUFFRCxNQUFJLENBQUNWLE1BQU1FLE1BQVgsRUFBbUI7QUFDbEJTLDBCQUFTQyxJQUFULENBQWMsRUFBRUMsS0FBSyxlQUFQLEVBQXdCQyxNQUFNLG1DQUE5QixFQUFkO0FBQ0E7QUFDQTs7QUFFRCxNQUFJLENBQUNiLE1BQU1DLE1BQVgsRUFBbUI7QUFDbEJTLDBCQUFTQyxJQUFULENBQWMsRUFBRUMsS0FBSyxlQUFQLEVBQXdCQyxNQUFNLG9DQUE5QixFQUFkO0FBQ0E7QUFDQTs7QUFFRCxNQUFJLENBQUMsS0FBS3pCLEtBQUwsQ0FBVzBCLFFBQWhCLEVBQTBCO0FBQ3pCSiwwQkFBU0MsSUFBVCxDQUFjLEVBQUVDLEtBQUssZUFBUCxFQUF3QkMsTUFBTSwwQkFBOUIsRUFBZDtBQUNBO0FBQ0E7O0FBRUQsUUFBTUUsU0FBU2xDLFlBQVltQyxLQUFaLENBQWtCLEtBQUs3QixLQUFMLENBQVdRLFFBQVgsQ0FBb0JzQixNQUF0QyxDQUFmO0FBQ0EsTUFBSUMsTUFBTUgsT0FBT0csR0FBUCxJQUFjLEVBQXhCO0FBQ0EsTUFBR0EsR0FBSCxFQUFPO0FBQ04sT0FBRztBQUNGLFFBQUd4QixVQUFVQSxPQUFPeUIsSUFBUCxDQUFZRCxHQUFaLENBQWIsRUFBK0I7QUFDOUJBLFdBQU14QixPQUFPeUIsSUFBUCxDQUFZRCxHQUFaLENBQU47QUFDQTtBQUNELElBSkQsQ0FJQyxPQUFNRSxDQUFOLEVBQVEsQ0FFUjtBQUNEOztBQUVELE1BQUlDLFdBQVc7QUFDZEgsUUFBS0EsR0FEUztBQUVkM0IsU0FBTSxDQUNMLEVBQUMrQixNQUFLLE9BQU4sRUFBZS9CLE1BQU0sRUFBQ2dDLFVBQVUsb0NBQVgsRUFBaURsQyxVQUFTVSxLQUExRCxFQUFyQixFQURLLEVBRUwsRUFBQ3VCLE1BQUssT0FBTixFQUFlL0IsTUFBTSxFQUFDZ0MsVUFBUyxzQ0FBVixFQUFrRGxDLFVBQVNXLEtBQTNELEVBQXJCLEVBRkssRUFHTCxFQUFDc0IsTUFBSyxPQUFOLEVBQWUvQixNQUFNLEVBQUNnQyxVQUFTLGVBQVYsRUFBMkJsQyxVQUFTLENBQUMsS0FBS0QsS0FBTCxDQUFXMEIsUUFBWixDQUFwQyxFQUFyQixFQUhLLEVBSUwsRUFBQ1UsV0FBVyxJQUFJQyxJQUFKLEVBQVosRUFKSyxFQUtMLEVBQUNILE1BQU0sb0JBQVAsRUFMSztBQUZRLEdBQWY7O0FBV0EsT0FBS25DLEtBQUwsQ0FBV3VDLGtCQUFYLENBQThCTCxRQUE5QjtBQUNBLE1BQUlNLFVBQVU7O0FBRWIsZUFBWSxNQUZDLEVBRU8sVUFBVSwwQkFGakIsRUFFNkMsY0FBY25DLGNBQUlDLFNBQUosRUFGM0QsRUFFNEUsVUFBVSxDQUZ0RixFQUV5RixTQUFTLDZCQUZsRyxFQUVpSSxPQUFPQyxPQUFPQyxRQUFQLENBQWdCQztBQUZ4SixHQUFkO0FBSUFKLGdCQUFJSyxTQUFKLENBQWMsRUFBRU4sTUFBTW9DLE9BQVIsRUFBZDtBQUNBQyxhQUFXLE1BQUk7QUFDZCxRQUFLekMsS0FBTCxDQUFXMEMsT0FBWCxDQUFtQnJCLElBQW5CLENBQXdCLHVCQUF4QjtBQUNBLEdBRkQsRUFFRSxJQUZGO0FBR0E7O0FBRURzQixVQUFTOztBQUVSLFNBQ0M7QUFBQTtBQUFBLEtBQUssV0FBVSwyQkFBZjtBQUNDO0FBQUE7QUFBQSxNQUFLLFdBQVUsU0FBZjtBQUNDO0FBQUE7QUFBQSxPQUFLLFdBQVUsU0FBZjtBQUNDO0FBQUE7QUFBQSxRQUFJLFdBQVUsY0FBZDtBQUFBO0FBQWlELCtDQUFqRDtBQUFBO0FBQUEsTUFERDtBQUVDO0FBQUE7QUFBQSxRQUFLLFdBQVUsY0FBZjtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERDtBQUVDO0FBQUE7QUFBQSxTQUFJLFdBQVUsaUJBQWQ7QUFDQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUEsV0FBTyxXQUFVLE9BQWpCO0FBQ0M7QUFBQTtBQUFBLFlBQU0sV0FBVSxnQkFBaEI7QUFBQTtBQUFBLFVBREQ7QUFFQyxrREFBTyxNQUFLLFVBQVosRUFBdUIsV0FBVSxPQUFqQyxFQUF5QyxLQUFLLGtCQUE5QyxFQUFpRSxNQUFLLEdBQXRFLEdBRkQ7QUFHQyxpREFBTSxXQUFVLFdBQWhCO0FBSEQ7QUFERCxRQUREO0FBUUM7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBLFdBQU8sV0FBVSxPQUFqQjtBQUNDO0FBQUE7QUFBQSxZQUFNLFdBQVUsZ0JBQWhCO0FBQUE7QUFBQSxVQUREO0FBRUMsa0RBQU8sTUFBSyxVQUFaLEVBQXVCLFdBQVUsT0FBakMsRUFBeUMsS0FBSyxzREFBOUMsRUFBcUcsTUFBSyxHQUExRyxHQUZEO0FBR0MsaURBQU0sV0FBVSxXQUFoQjtBQUhEO0FBREQsUUFSRDtBQWVDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQSxXQUFPLFdBQVUsT0FBakI7QUFDQztBQUFBO0FBQUEsWUFBTSxXQUFVLGdCQUFoQjtBQUFBO0FBQUEsVUFERDtBQUVDLGtEQUFPLE1BQUssVUFBWixFQUF1QixXQUFVLE9BQWpDLEVBQXlDLEtBQUksMENBQTdDLEVBQXdGLE1BQUssR0FBN0YsR0FGRDtBQUdDLGlEQUFNLFdBQVUsV0FBaEI7QUFIRDtBQURELFFBZkQ7QUFzQkM7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBLFdBQU8sV0FBVSxPQUFqQjtBQUNDO0FBQUE7QUFBQSxZQUFNLFdBQVUsZ0JBQWhCO0FBQUE7QUFBQSxVQUREO0FBRUMsa0RBQU8sTUFBSyxVQUFaLEVBQXVCLFdBQVUsT0FBakMsRUFBeUMsS0FBSSx3QkFBN0MsRUFBc0UsTUFBSyxHQUEzRSxHQUZEO0FBR0MsaURBQU0sV0FBVSxXQUFoQjtBQUhEO0FBREQ7QUF0QkQsT0FGRDtBQWdDQztBQUFBO0FBQUE7QUFBQTtBQUFBLE9BaENEO0FBaUNDO0FBQUE7QUFBQSxTQUFJLFdBQVUsaUJBQWQ7QUFDQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUEsV0FBTyxXQUFVLE9BQWpCO0FBQ0M7QUFBQTtBQUFBLFlBQU0sV0FBVSxnQkFBaEI7QUFBQTtBQUFBLFVBREQ7QUFFQyxrREFBTyxNQUFLLFVBQVosRUFBdUIsV0FBVSxPQUFqQyxFQUF5QyxLQUFJLHlCQUE3QyxFQUF1RSxNQUFLLEdBQTVFLEdBRkQ7QUFHQyxpREFBTSxXQUFVLFdBQWhCO0FBSEQ7QUFERCxRQUREO0FBUUM7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBLFdBQU8sV0FBVSxPQUFqQjtBQUNDO0FBQUE7QUFBQSxZQUFNLFdBQVUsZ0JBQWhCO0FBQUE7QUFBQSxVQUREO0FBRUMsa0RBQU8sTUFBSyxVQUFaLEVBQXVCLFdBQVUsT0FBakMsRUFBeUMsS0FBSSx3QkFBN0MsRUFBc0UsTUFBSyxHQUEzRSxHQUZEO0FBR0MsaURBQU0sV0FBVSxXQUFoQjtBQUhEO0FBREQsUUFSRDtBQWVDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQSxXQUFPLFdBQVUsT0FBakI7QUFDQztBQUFBO0FBQUEsWUFBTSxXQUFVLGdCQUFoQjtBQUFBO0FBQUEsVUFERDtBQUVDLGtEQUFPLE1BQUssVUFBWixFQUF1QixXQUFVLE9BQWpDLEVBQXlDLEtBQUksOEJBQTdDLEVBQTRFLE1BQUssR0FBakYsR0FGRDtBQUdDLGlEQUFNLFdBQVUsV0FBaEI7QUFIRDtBQURELFFBZkQ7QUFzQkM7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBLFdBQU8sV0FBVSxPQUFqQjtBQUNDO0FBQUE7QUFBQSxZQUFNLFdBQVUsZ0JBQWhCO0FBQUE7QUFBQSxVQUREO0FBRUMsa0RBQU8sTUFBSyxVQUFaLEVBQXVCLFdBQVUsT0FBakMsRUFBeUMsS0FBSSx1QkFBN0MsRUFBcUUsTUFBTSxHQUEzRSxHQUZEO0FBR0MsaURBQU0sV0FBVSxXQUFoQjtBQUhEO0FBREQ7QUF0QkQsT0FqQ0Q7QUErREM7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQS9ERDtBQWdFQztBQUFBO0FBQUEsU0FBVSxVQUFXVixDQUFELElBQUs7QUFBQyxjQUFLVyxRQUFMLENBQWMsRUFBQ2pCLFVBQVVNLEVBQUVZLE1BQUYsQ0FBU0MsS0FBcEIsRUFBZDtBQUEwQyxTQUFwRTtBQUF3RSxZQUFLN0MsS0FBTCxDQUFXMEI7QUFBbkY7QUFoRUQ7QUFGRCxLQUREO0FBc0VDO0FBQUE7QUFBQSxPQUFLLFdBQVUsV0FBZjtBQUNDO0FBQUE7QUFBQSxRQUFHLE9BQU8sRUFBQ29CLFFBQU8sTUFBUixFQUFWLEVBQTJCLE1BQUsscUJBQWhDLEVBQXNELFNBQVMsS0FBS3BDLFlBQUwsQ0FBa0JxQyxJQUFsQixDQUF1QixJQUF2QixDQUEvRCxFQUE2RixXQUFVLFFBQXZHO0FBQUE7QUFDZSw2Q0FBSyxLQUFJLGdDQUFULEVBQTBDLEtBQUksU0FBOUMsRUFBd0QsV0FBVSxRQUFsRTtBQURmO0FBREQ7QUF0RUQ7QUFERCxHQUREO0FBZ0ZBO0FBbkswQzs7a0JBc0s3QnBELGE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNLZjs7Ozs7O2tCQUNlcUQsb0M7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RmOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLE1BQU1DLHNCQUFOLFNBQXFDckQsZ0JBQU1DLFNBQTNDLENBQXFEOztBQUVwRDZDLFVBQVE7QUFDUCxTQUNDLDhCQUFDLG9DQUFELEVBQXNCLEtBQUszQyxLQUEzQixDQUREO0FBR0E7QUFObUQ7O0FBU3JELE1BQU1tRCxrQkFBbUJsRCxLQUFELElBQVU7O0FBRWpDLE9BQUs7QUFDSm1ELGVBREk7QUFFSkM7QUFGSSxLQUdEcEQsTUFBTXFELElBSFY7O0FBS0EsUUFBTTtBQUNMRixlQURLO0FBRUxDO0FBRkssRUFBTjtBQUlBLENBWEQ7O0FBYUEsTUFBTUUscUJBQXVCQyxRQUFGLElBQWU7O0FBRXpDLFFBQU07QUFDTGpCLHNCQUFxQkwsUUFBRCxJQUFjc0IsU0FBUywrQkFBbUJ0QixRQUFuQixDQUFULENBRDdCO0FBRUx1QiwwQkFBeUIxQixHQUFELElBQVN5QixTQUFTLG1DQUF1QnpCLEdBQXZCLENBQVQ7QUFGNUIsRUFBTjtBQUlBLENBTkQ7O2tCQVFlLHlCQUFRb0IsZUFBUixFQUF5Qkksa0JBQXpCLEVBQTZDTCxzQkFBN0MsQyIsImZpbGUiOiIxMDEuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuY2xhc3MgQ2hhdFF1ZXN0aW9uMiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGZlZWRiYWNrOiB7fVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGxldCBkYXRhID0ge1xuXG5cdFx0XHQnQ2F0ZWdvcnknOiAnQ2hhdCcsICdBY3Rpb24nOiAnQ2hhdE5ld0ZlZWRiYWNrUGFnZUxhbmRlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NoYXQtbmV3LWZlZWRiYWNrLXBhZ2UtbGFuZGVkJywgXCJ1cmxcIjogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG5cdFx0fVxuXHRcdEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cdH1cblxuXHRzYXZlRmVlZEJhY2soZGF0YSkge1xuXHRcdGxldCBxdWVzMT1bXVxuXHRcdGxldCBxdWVzMj0gW11cblx0XHRsZXQgbGVuZ3RoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQ6Y2hlY2tlZCcpLmxlbmd0aFxuXHRcdGZvcih2YXIgaSA9IDA7aTxsZW5ndGg7aSsrKXtcblx0XHRcdGxldCB4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQ6Y2hlY2tlZCcpW2ldXG5cdFx0XHRpZih4ICYmIHguY2xhc3NMaXN0ICYmIHguY2xhc3NMaXN0LmNvbnRhaW5zKCdRVUVTMScpICl7XG5cdFx0XHRcdHF1ZXMxLnB1c2goeC5nZXRBdHRyaWJ1dGUoJ3ZhbCcpKVxuXHRcdFx0fVxuXG5cdFx0XHRpZih4ICYmIHguY2xhc3NMaXN0ICYmIHguY2xhc3NMaXN0LmNvbnRhaW5zKCdRVUVTMicpICl7XG5cdFx0XHRcdHF1ZXMyLnB1c2goeC5nZXRBdHRyaWJ1dGUoJ3ZhbCcpKVxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0aWYgKCFxdWVzMS5sZW5ndGgpIHtcblx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgYW5zd2VyIHRoZSBGaXJzdCBRdWVzdGlvbiBcIiB9KVxuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXG5cdFx0aWYgKCFxdWVzMi5sZW5ndGgpIHtcblx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgYW5zd2VyIHRoZSBTZWNvbmQgUXVlc3Rpb24gXCIgfSlcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGlmICghdGhpcy5zdGF0ZS5jb21tZW50cykge1xuXHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBhZGQgc29tZSBDb21tZW50c1wiIH0pXG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblx0XHRsZXQgcmlkID0gcGFyc2VkLnJpZCB8fCAnJ1xuXHRcdGlmKHJpZCl7XG5cdFx0XHR0cnl7XG5cdFx0XHRcdGlmKHdpbmRvdyAmJiB3aW5kb3cuYXRvYihyaWQpICl7XG5cdFx0XHRcdFx0cmlkID0gd2luZG93LmF0b2IocmlkKVxuXHRcdFx0XHR9XG5cdFx0XHR9Y2F0Y2goZSl7XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCBwb3N0RGF0YSA9IHtcblx0XHRcdHJpZDogcmlkLFxuXHRcdFx0ZGF0YTogW1xuXHRcdFx0XHR7dHlwZToncXVlczEnLCBkYXRhOiB7cXVlc3Rpb246ICdXaGF0IGRvIHlvdSB0aGluayBjYW4gYmUgaW1wcm92ZWQ/JywgZmVlZGJhY2s6cXVlczF9IH0sXG5cdFx0XHRcdHt0eXBlOidxdWVzMicsIGRhdGE6IHtxdWVzdGlvbjonV2hhdCBkaWQgeW91IGxpa2UgYWJvdXQgdGhlIHNlcnZpY2U/JywgZmVlZGJhY2s6cXVlczJ9IH0sXG5cdFx0XHRcdHt0eXBlOidxdWVzMycsIGRhdGE6IHtxdWVzdGlvbjonQW55IENvbW1lbnRzPycsIGZlZWRiYWNrOlt0aGlzLnN0YXRlLmNvbW1lbnRzXX0gfSxcblx0XHRcdFx0e2NyZWF0ZWRPbjogbmV3IERhdGUoKX0sXG5cdFx0XHRcdHt0eXBlOiAnU2luZ2xlUGFnZUZlZWRiYWNrJ31cblx0XHRcdF1cblx0XHR9XG5cblx0XHR0aGlzLnByb3BzLnN1Ym1pdENoYXRGZWVkYmFjayhwb3N0RGF0YSlcblx0XHRsZXQgZ3RtRGF0YSA9IHtcblxuXHRcdFx0J0NhdGVnb3J5JzogJ0NoYXQnLCAnQWN0aW9uJzogJ0NoYXROZXdGZWVkYmFja1N1Ym1pdHRlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NoYXQtbmV3LWZlZWRiYWNrLXN1Ym1pdHRlZCcsIFwidXJsXCI6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuXHRcdH1cblx0XHRHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuXHRcdHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvY2hhdC9mZWVkYmFjay90aGFua3MnKVx0XG5cdFx0fSwxMDAwKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tZXItZmVlZGJhY2sgY2YtaGdodFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNmLWNhcmRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNmLWJvZHlcIj5cblx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJuZWNoYXRoZWRpbmdcIj5PbmxpbmUgY29uc3VsdGF0aW9uIDxicj48L2JyPmZlZWRiYWNrPC9oMz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1xYS1jb250XCI+XG5cdFx0XHRcdFx0XHRcdDxoND5RIDE6IFdoYXQgZG8geW91IHRoaW5rIGNhbiBiZSBpbXByb3ZlZD88L2g0PlxuXHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiY2hhdC1xYS1saXN0aW5nXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNrLWJ4XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInJhdGUtZmVlZC10ZXh0XCI+QmV0dGVyIHRyZWF0bWVudDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cIlFVRVMxXCIgdmFsID0nQmV0dGVyIHRyZWF0bWVudCcgcXVlcz0nMScvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJjay1ieFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJyYXRlLWZlZWQtdGV4dFwiPlRoZSBkb2N0b3IgY291bGQgaGF2ZSBleHBsYWluZWQgdGhlIHRyZWF0bWVudCBiZXR0ZXI8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJRVUVTMVwiIHZhbCA9J1RoZSBkb2N0b3IgY291bGQgaGF2ZSBleHBsYWluZWQgdGhlIHRyZWF0bWVudCBiZXR0ZXInIHF1ZXM9JzInLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnhcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwicmF0ZS1mZWVkLXRleHRcIj5Ub28gbWFueSBxdWVzdGlvbnMvIElycmVsZXZhbnQgcXVlc3Rpb25zPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiUVVFUzFcIiB2YWw9J1RvbyBtYW55IHF1ZXN0aW9ucy8gSXJyZWxldmFudCBxdWVzdGlvbnMnIHF1ZXM9JzEnLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnhcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwicmF0ZS1mZWVkLXRleHRcIj5FdmVyeXRoaW5nIHdhcyBwZXJmZWN0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiUVVFUzFcIiB2YWw9J0V2ZXJ5dGhpbmcgd2FzIHBlcmZlY3QnIHF1ZXM9JzEnLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0PGg0PlEgMjogV2hhdCBkaWQgeW91IGxpa2UgYWJvdXQgdGhlIHNlcnZpY2U/PC9oND5cblx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImNoYXQtcWEtbGlzdGluZ1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJjay1ieFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJyYXRlLWZlZWQtdGV4dFwiPlF1aWNrIGNvbnN1bHRhdGlvbiB0aW1lPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiUVVFUzJcIiB2YWw9J1F1aWNrIGNvbnN1bHRhdGlvbiB0aW1lJyBxdWVzPScyJy8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNrLWJ4XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInJhdGUtZmVlZC10ZXh0XCI+UmlnaHQgYWR2aWNlL3RyZWF0bWVudDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cIlFVRVMyXCIgdmFsPSdSaWdodCBhZHZpY2UvdHJlYXRtZW50JyBxdWVzPScyJy8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNrLWJ4XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInJhdGUtZmVlZC10ZXh0XCI+RWFzeSB0byB1bmRlcnN0YW5kIGludGVyZmFjZTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cIlFVRVMyXCIgdmFsPSdFYXN5IHRvIHVuZGVyc3RhbmQgaW50ZXJmYWNlJyBxdWVzPScyJy8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNrLWJ4XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInJhdGUtZmVlZC10ZXh0XCI+RGlkIG5vdCBsaWtlIGFueXRoaW5nPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiUVVFUzJcIiB2YWw9J0RpZCBub3QgbGlrZSBhbnl0aGluZycgcXVlcyA9JzInLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0PGg0PlEgMzogQW55IENvbW1lbnRzPzwvaDQ+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBvbkNoYW5nZT17KGUpPT57dGhpcy5zZXRTdGF0ZSh7Y29tbWVudHM6IGUudGFyZ2V0LnZhbHVlfSl9fSA+e3RoaXMuc3RhdGUuY29tbWVudHN9PC90ZXh0YXJlYT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2YtZm9vdGVyXCI+XG5cdFx0XHRcdFx0XHQ8YSBzdHlsZT17e21hcmdpbjonYXV0byd9fSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIG9uQ2xpY2s9e3RoaXMuc2F2ZUZlZWRCYWNrLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImNmLWJ0blwiPlNVQk1JVFxuXHRcdCAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3JpZ2h0X2Fycm93LnBuZ1wiIGFsdD1cInItYXJyb3dcIiBjbGFzc05hbWU9XCJjZi1pbWdcIiAvPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0UXVlc3Rpb24yIiwiaW1wb3J0IFNpbmdsZVBhZ2VGZWVkYmFjayBmcm9tICcuL1NpbmdsZVBhZ2VDaGF0RmVlZEJhY2tWaWV3LmpzJ1xuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUGFnZUZlZWRiYWNrIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IENoYXRGZWVkQmFja1ZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL1NpbmdsZVBhZ2VDaGF0RmVlZEJhY2tWaWV3J1xuaW1wb3J0IHsgc2F2ZUNoYXRGZWVkQmFjaywgc3VibWl0Q2hhdEZlZWRiYWNrLCBzYXZlQ2hhdEZlZWRiYWNrUm9vbUlkIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcblxuY2xhc3MgU2luZ2xlUGFnZUNoYXRGZWVkQmFjayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PENoYXRGZWVkQmFja1ZpZXcgey4uLnRoaXMucHJvcHN9IC8+XG5cdFx0XHQpXG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PntcblxuXHRjb25zdHtcblx0XHRjaGF0X2ZlZWRiYWNrLFxuXHRcdGNoYXRfZmVlZGJhY2tfcm9vbUlkXG5cdH0gPSBzdGF0ZS5VU0VSXG5cblx0cmV0dXJue1xuXHRcdGNoYXRfZmVlZGJhY2ssXG5cdFx0Y2hhdF9mZWVkYmFja19yb29tSWRcblx0fVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoIGRpc3BhdGNoKSA9PiB7XG5cblx0cmV0dXJue1xuXHRcdHN1Ym1pdENoYXRGZWVkYmFjazogKHBvc3REYXRhKSA9PiBkaXNwYXRjaChzdWJtaXRDaGF0RmVlZGJhY2socG9zdERhdGEpKSxcblx0XHRzYXZlQ2hhdEZlZWRiYWNrUm9vbUlkOiAocmlkKSA9PiBkaXNwYXRjaChzYXZlQ2hhdEZlZWRiYWNrUm9vbUlkKHJpZCkpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2luZ2xlUGFnZUNoYXRGZWVkQmFjaykiXSwic291cmNlUm9vdCI6IiJ9