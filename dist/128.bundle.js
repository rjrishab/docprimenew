(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[128],{

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var ChatQuestion2 = function (_React$Component) {
	_inherits(ChatQuestion2, _React$Component);

	function ChatQuestion2(props) {
		_classCallCheck(this, ChatQuestion2);

		var _this = _possibleConstructorReturn(this, (ChatQuestion2.__proto__ || Object.getPrototypeOf(ChatQuestion2)).call(this, props));

		_this.state = {
			feedback: {}
		};
		return _this;
	}

	_createClass(ChatQuestion2, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var data = {

				'Category': 'Chat', 'Action': 'ChatNewFeedbackPageLanded', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'chat-new-feedback-page-landed', "url": window.location.pathname
			};
			_gtm2.default.sendEvent({ data: data });
		}
	}, {
		key: 'saveFeedBack',
		value: function saveFeedBack(data) {
			var _this2 = this;

			var ques1 = [];
			var ques2 = [];
			var length = document.querySelectorAll('input:checked').length;
			for (var i = 0; i < length; i++) {
				var x = document.querySelectorAll('input:checked')[i];
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

			var parsed = queryString.parse(this.props.location.search);
			var rid = parsed.rid || '';
			if (rid) {
				try {
					if (window && window.atob(rid)) {
						rid = window.atob(rid);
					}
				} catch (e) {}
			}

			var postData = {
				rid: rid,
				data: [{ type: 'ques1', data: { question: 'What do you think can be improved?', feedback: ques1 } }, { type: 'ques2', data: { question: 'What did you like about the service?', feedback: ques2 } }, { type: 'ques3', data: { question: 'Any Comments?', feedback: [this.state.comments] } }, { createdOn: new Date() }, { type: 'SinglePageFeedback' }]
			};

			this.props.submitChatFeedback(postData);
			var gtmData = {

				'Category': 'Chat', 'Action': 'ChatNewFeedbackSubmitted', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'chat-new-feedback-submitted', "url": window.location.pathname
			};
			_gtm2.default.sendEvent({ data: gtmData });
			setTimeout(function () {
				_this2.props.history.push('/chat/feedback/thanks');
			}, 1000);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

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
								{ onChange: function onChange(e) {
										_this3.setState({ comments: e.target.value });
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
	}]);

	return ChatQuestion2;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _SinglePageChatFeedBackView = __webpack_require__(/*! ../../components/commons/SinglePageChatFeedBackView */ "./dev/js/components/commons/SinglePageChatFeedBackView/index.js");

var _SinglePageChatFeedBackView2 = _interopRequireDefault(_SinglePageChatFeedBackView);

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SinglePageChatFeedBack = function (_React$Component) {
	_inherits(SinglePageChatFeedBack, _React$Component);

	function SinglePageChatFeedBack() {
		_classCallCheck(this, SinglePageChatFeedBack);

		return _possibleConstructorReturn(this, (SinglePageChatFeedBack.__proto__ || Object.getPrototypeOf(SinglePageChatFeedBack)).apply(this, arguments));
	}

	_createClass(SinglePageChatFeedBack, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_SinglePageChatFeedBackView2.default, this.props);
		}
	}]);

	return SinglePageChatFeedBack;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
	var _state$USER = state.USER,
	    chat_feedback = _state$USER.chat_feedback,
	    chat_feedback_roomId = _state$USER.chat_feedback_roomId;


	return {
		chat_feedback: chat_feedback,
		chat_feedback_roomId: chat_feedback_roomId
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {

	return {
		submitChatFeedback: function submitChatFeedback(postData) {
			return dispatch((0, _index.submitChatFeedback)(postData));
		},
		saveChatFeedbackRoomId: function saveChatFeedbackRoomId(rid) {
			return dispatch((0, _index.saveChatFeedbackRoomId)(rid));
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SinglePageChatFeedBack);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL1NpbmdsZVBhZ2VDaGF0RmVlZEJhY2tWaWV3L1NpbmdsZVBhZ2VDaGF0RmVlZEJhY2tWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvU2luZ2xlUGFnZUNoYXRGZWVkQmFja1ZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy9TaW5nbGVDaGF0UGFnZUZlZWRiYWNrLmpzIl0sIm5hbWVzIjpbInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIkNoYXRRdWVzdGlvbjIiLCJwcm9wcyIsInN0YXRlIiwiZmVlZGJhY2siLCJkYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNlbmRFdmVudCIsInF1ZXMxIiwicXVlczIiLCJsZW5ndGgiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwieCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicHVzaCIsImdldEF0dHJpYnV0ZSIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJjb21tZW50cyIsInBhcnNlZCIsInBhcnNlIiwic2VhcmNoIiwicmlkIiwiYXRvYiIsImUiLCJwb3N0RGF0YSIsInR5cGUiLCJxdWVzdGlvbiIsImNyZWF0ZWRPbiIsIkRhdGUiLCJzdWJtaXRDaGF0RmVlZGJhY2siLCJndG1EYXRhIiwic2V0VGltZW91dCIsImhpc3RvcnkiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwibWFyZ2luIiwic2F2ZUZlZWRCYWNrIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiU2luZ2xlUGFnZUZlZWRiYWNrIiwiU2luZ2xlUGFnZUNoYXRGZWVkQmFjayIsIm1hcFN0YXRlVG9Qcm9wcyIsIlVTRVIiLCJjaGF0X2ZlZWRiYWNrIiwiY2hhdF9mZWVkYmFja19yb29tSWQiLCJtYXBE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Q0FBQzVCLEdBQUQ7QUFBQSxVQUFTMkIsU0FBUyxtQ0FBdUIzQixHQUF2QixDQUFULENBQVQ7QUFBQTtBQUZuQixFQUFOO0FBSUEsQ0FORDs7a0JBUWUseUJBQVFzQixlQUFSLEVBQXlCSSxrQkFBekIsRUFBNkNMLHNCQUE3QyxDIiwiZmlsZSI6IjEyOC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG5jbGFzcyBDaGF0UXVlc3Rpb24yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0ZmVlZGJhY2s6IHt9XG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0bGV0IGRhdGEgPSB7XG5cblx0XHRcdCdDYXRlZ29yeSc6ICdDaGF0JywgJ0FjdGlvbic6ICdDaGF0TmV3RmVlZGJhY2tQYWdlTGFuZGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2hhdC1uZXctZmVlZGJhY2stcGFnZS1sYW5kZWQnLCBcInVybFwiOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcblx0XHR9XG5cdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblx0fVxuXG5cdHNhdmVGZWVkQmFjayhkYXRhKSB7XG5cdFx0bGV0IHF1ZXMxPVtdXG5cdFx0bGV0IHF1ZXMyPSBbXVxuXHRcdGxldCBsZW5ndGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dDpjaGVja2VkJykubGVuZ3RoXG5cdFx0Zm9yKHZhciBpID0gMDtpPGxlbmd0aDtpKyspe1xuXHRcdFx0bGV0IHggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dDpjaGVja2VkJylbaV1cblx0XHRcdGlmKHggJiYgeC5jbGFzc0xpc3QgJiYgeC5jbGFzc0xpc3QuY29udGFpbnMoJ1FVRVMxJykgKXtcblx0XHRcdFx0cXVlczEucHVzaCh4LmdldEF0dHJpYnV0ZSgndmFsJykpXG5cdFx0XHR9XG5cblx0XHRcdGlmKHggJiYgeC5jbGFzc0xpc3QgJiYgeC5jbGFzc0xpc3QuY29udGFpbnMoJ1FVRVMyJykgKXtcblx0XHRcdFx0cXVlczIucHVzaCh4LmdldEF0dHJpYnV0ZSgndmFsJykpXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRpZiAoIXF1ZXMxLmxlbmd0aCkge1xuXHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBhbnN3ZXIgdGhlIEZpcnN0IFF1ZXN0aW9uIFwiIH0pXG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRpZiAoIXF1ZXMyLmxlbmd0aCkge1xuXHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBhbnN3ZXIgdGhlIFNlY29uZCBRdWVzdGlvbiBcIiB9KVxuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLnN0YXRlLmNvbW1lbnRzKSB7XG5cdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIGFkZCBzb21lIENvbW1lbnRzXCIgfSlcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXHRcdGxldCByaWQgPSBwYXJzZWQucmlkIHx8ICcnXG5cdFx0aWYocmlkKXtcblx0XHRcdHRyeXtcblx0XHRcdFx0aWYod2luZG93ICYmIHdpbmRvdy5hdG9iKHJpZCkgKXtcblx0XHRcdFx0XHRyaWQgPSB3aW5kb3cuYXRvYihyaWQpXG5cdFx0XHRcdH1cblx0XHRcdH1jYXRjaChlKXtcblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0IHBvc3REYXRhID0ge1xuXHRcdFx0cmlkOiByaWQsXG5cdFx0XHRkYXRhOiBbXG5cdFx0XHRcdHt0eXBlOidxdWVzMScsIGRhdGE6IHtxdWVzdGlvbjogJ1doYXQgZG8geW91IHRoaW5rIGNhbiBiZSBpbXByb3ZlZD8nLCBmZWVkYmFjazpxdWVzMX0gfSxcblx0XHRcdFx0e3R5cGU6J3F1ZXMyJywgZGF0YToge3F1ZXN0aW9uOidXaGF0IGRpZCB5b3UgbGlrZSBhYm91dCB0aGUgc2VydmljZT8nLCBmZWVkYmFjazpxdWVzMn0gfSxcblx0XHRcdFx0e3R5cGU6J3F1ZXMzJywgZGF0YToge3F1ZXN0aW9uOidBbnkgQ29tbWVudHM/JywgZmVlZGJhY2s6W3RoaXMuc3RhdGUuY29tbWVudHNdfSB9LFxuXHRcdFx0XHR7Y3JlYXRlZE9uOiBuZXcgRGF0ZSgpfSxcblx0XHRcdFx0e3R5cGU6ICdTaW5nbGVQYWdlRmVlZGJhY2snfVxuXHRcdFx0XVxuXHRcdH1cblxuXHRcdHRoaXMucHJvcHMuc3VibWl0Q2hhdEZlZWRiYWNrKHBvc3REYXRhKVxuXHRcdGxldCBndG1EYXRhID0ge1xuXG5cdFx0XHQnQ2F0ZWdvcnknOiAnQ2hhdCcsICdBY3Rpb24nOiAnQ2hhdE5ld0ZlZWRiYWNrU3VibWl0dGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2hhdC1uZXctZmVlZGJhY2stc3VibWl0dGVkJywgXCJ1cmxcIjogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG5cdFx0fVxuXHRcdEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG5cdFx0c2V0VGltZW91dCgoKT0+e1xuXHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jaGF0L2ZlZWRiYWNrL3RoYW5rcycpXHRcblx0XHR9LDEwMDApXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b21lci1mZWVkYmFjayBjZi1oZ2h0XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2YtY2FyZFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2YtYm9keVwiPlxuXHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cIm5lY2hhdGhlZGluZ1wiPk9ubGluZSBjb25zdWx0YXRpb24gPGJyPjwvYnI+ZmVlZGJhY2s8L2gzPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjaGF0LXFhLWNvbnRcIj5cblx0XHRcdFx0XHRcdFx0PGg0PlEgMTogV2hhdCBkbyB5b3UgdGhpbmsgY2FuIGJlIGltcHJvdmVkPzwvaDQ+XG5cdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJjaGF0LXFhLWxpc3RpbmdcIj5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnhcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwicmF0ZS1mZWVkLXRleHRcIj5CZXR0ZXIgdHJlYXRtZW50PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiUVVFUzFcIiB2YWwgPSdCZXR0ZXIgdHJlYXRtZW50JyBxdWVzPScxJy8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNrLWJ4XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInJhdGUtZmVlZC10ZXh0XCI+VGhlIGRvY3RvciBjb3VsZCBoYXZlIGV4cGxhaW5lZCB0aGUgdHJlYXRtZW50IGJldHRlcjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cIlFVRVMxXCIgdmFsID0nVGhlIGRvY3RvciBjb3VsZCBoYXZlIGV4cGxhaW5lZCB0aGUgdHJlYXRtZW50IGJldHRlcicgcXVlcz0nMicvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJjay1ieFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJyYXRlLWZlZWQtdGV4dFwiPlRvbyBtYW55IHF1ZXN0aW9ucy8gSXJyZWxldmFudCBxdWVzdGlvbnM8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJRVUVTMVwiIHZhbD0nVG9vIG1hbnkgcXVlc3Rpb25zLyBJcnJlbGV2YW50IHF1ZXN0aW9ucycgcXVlcz0nMScvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJjay1ieFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJyYXRlLWZlZWQtdGV4dFwiPkV2ZXJ5dGhpbmcgd2FzIHBlcmZlY3Q8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJRVUVTMVwiIHZhbD0nRXZlcnl0aGluZyB3YXMgcGVyZmVjdCcgcXVlcz0nMScvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8aDQ+USAyOiBXaGF0IGRpZCB5b3UgbGlrZSBhYm91dCB0aGUgc2VydmljZT88L2g0PlxuXHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiY2hhdC1xYS1saXN0aW5nXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNrLWJ4XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInJhdGUtZmVlZC10ZXh0XCI+UXVpY2sgY29uc3VsdGF0aW9uIHRpbWU8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJRVUVTMlwiIHZhbD0nUXVpY2sgY29uc3VsdGF0aW9uIHRpbWUnIHF1ZXM9JzInLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnhcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwicmF0ZS1mZWVkLXRleHRcIj5SaWdodCBhZHZpY2UvdHJlYXRtZW50PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiUVVFUzJcIiB2YWw9J1JpZ2h0IGFkdmljZS90cmVhdG1lbnQnIHF1ZXM9JzInLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnhcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwicmF0ZS1mZWVkLXRleHRcIj5FYXN5IHRvIHVuZGVyc3RhbmQgaW50ZXJmYWNlPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiUVVFUzJcIiB2YWw9J0Vhc3kgdG8gdW5kZXJzdGFuZCBpbnRlcmZhY2UnIHF1ZXM9JzInLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnhcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwicmF0ZS1mZWVkLXRleHRcIj5EaWQgbm90IGxpa2UgYW55dGhpbmc8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJRVUVTMlwiIHZhbD0nRGlkIG5vdCBsaWtlIGFueXRoaW5nJyBxdWVzID0nMicvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8aDQ+USAzOiBBbnkgQ29tbWVudHM/PC9oND5cblx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIG9uQ2hhbmdlPXsoZSk9Pnt0aGlzLnNldFN0YXRlKHtjb21tZW50czogZS50YXJnZXQudmFsdWV9KX19ID57dGhpcy5zdGF0ZS5jb21tZW50c308L3RleHRhcmVhPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjZi1mb290ZXJcIj5cblx0XHRcdFx0XHRcdDxhIHN0eWxlPXt7bWFyZ2luOidhdXRvJ319IGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgb25DbGljaz17dGhpcy5zYXZlRmVlZEJhY2suYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwiY2YtYnRuXCI+U1VCTUlUXG5cdFx0ICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvcmlnaHRfYXJyb3cucG5nXCIgYWx0PVwici1hcnJvd1wiIGNsYXNzTmFtZT1cImNmLWltZ1wiIC8+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRRdWVzdGlvbjIiLCJpbXBvcnQgU2luZ2xlUGFnZUZlZWRiYWNrIGZyb20gJy4vU2luZ2xlUGFnZUNoYXRGZWVkQmFja1ZpZXcuanMnXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQYWdlRmVlZGJhY2siLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgQ2hhdEZlZWRCYWNrVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvU2luZ2xlUGFnZUNoYXRGZWVkQmFja1ZpZXcnXG5pbXBvcnQgeyBzYXZlQ2hhdEZlZWRCYWNrLCBzdWJtaXRDaGF0RmVlZGJhY2ssIHNhdmVDaGF0RmVlZGJhY2tSb29tSWQgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuXG5jbGFzcyBTaW5nbGVQYWdlQ2hhdEZlZWRCYWNrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8Q2hhdEZlZWRCYWNrVmlldyB7Li4udGhpcy5wcm9wc30gLz5cblx0XHRcdClcblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+e1xuXG5cdGNvbnN0e1xuXHRcdGNoYXRfZmVlZGJhY2ssXG5cdFx0Y2hhdF9mZWVkYmFja19yb29tSWRcblx0fSA9IHN0YXRlLlVTRVJcblxuXHRyZXR1cm57XG5cdFx0Y2hhdF9mZWVkYmFjayxcblx0XHRjaGF0X2ZlZWRiYWNrX3Jvb21JZFxuXHR9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9ICggZGlzcGF0Y2gpID0+IHtcblxuXHRyZXR1cm57XG5cdFx0c3VibWl0Q2hhdEZlZWRiYWNrOiAocG9zdERhdGEpID0+IGRpc3BhdGNoKHN1Ym1pdENoYXRGZWVkYmFjayhwb3N0RGF0YSkpLFxuXHRcdHNhdmVDaGF0RmVlZGJhY2tSb29tSWQ6IChyaWQpID0+IGRpc3BhdGNoKHNhdmVDaGF0RmVlZGJhY2tSb29tSWQocmlkKSlcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTaW5nbGVQYWdlQ2hhdEZlZWRCYWNrKSJdLCJzb3VyY2VSb290IjoiIn0=