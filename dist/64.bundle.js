(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ "./dev/js/components/commons/ChatFeedBackView/ChatFeedBack.js":
/*!********************************************************************!*\
  !*** ./dev/js/components/commons/ChatFeedBackView/ChatFeedBack.js ***!
  \********************************************************************/
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatFeedBack = function (_React$Component) {
	_inherits(ChatFeedBack, _React$Component);

	function ChatFeedBack() {
		_classCallCheck(this, ChatFeedBack);

		return _possibleConstructorReturn(this, (ChatFeedBack.__proto__ || Object.getPrototypeOf(ChatFeedBack)).apply(this, arguments));
	}

	_createClass(ChatFeedBack, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var data = {

				'Category': 'Chat', 'Action': 'ChatFeedbackPageLanded', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'chat-feedback-page-landed', "url": window.location.pathname
			};
			_gtm2.default.sendEvent({ data: data });
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

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
							'h2',
							{ className: 'cf-title' },
							'Online consultation feedback'
						),
						_react2.default.createElement(
							'p',
							{ className: 'cf-prgh' },
							'Your feedback will help us improve services for the thousands of patients visiting us everyday.'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'cf-footer' },
						_react2.default.createElement(
							'a',
							{ href: 'javascript:void(0);', onClick: function onClick() {
									return _this2.props.history.push('/chat/feedback/ques1');
								}, className: 'cf-btn cf-only-btn' },
							'NEXT',
							_react2.default.createElement('img', { src: '/assets/images/right_arrow.png', alt: 'r-arrow', className: 'cf-img' })
						)
					)
				)
			);
		}
	}]);

	return ChatFeedBack;
}(_react2.default.Component);

exports.default = ChatFeedBack;

/***/ }),

/***/ "./dev/js/components/commons/ChatFeedBackView/ChatFeedBackView.js":
/*!************************************************************************!*\
  !*** ./dev/js/components/commons/ChatFeedBackView/ChatFeedBackView.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _ChatFeedBack = __webpack_require__(/*! ./ChatFeedBack.js */ "./dev/js/components/commons/ChatFeedBackView/ChatFeedBack.js");

var _ChatFeedBack2 = _interopRequireDefault(_ChatFeedBack);

var _ChatQuestion = __webpack_require__(/*! ./ChatQuestion1.js */ "./dev/js/components/commons/ChatFeedBackView/ChatQuestion1.js");

var _ChatQuestion2 = _interopRequireDefault(_ChatQuestion);

var _ChatQuestion3 = __webpack_require__(/*! ./ChatQuestion2.js */ "./dev/js/components/commons/ChatFeedBackView/ChatQuestion2.js");

var _ChatQuestion4 = _interopRequireDefault(_ChatQuestion3);

var _ChatQuestion5 = __webpack_require__(/*! ./ChatQuestion3.js */ "./dev/js/components/commons/ChatFeedBackView/ChatQuestion3.js");

var _ChatQuestion6 = _interopRequireDefault(_ChatQuestion5);

var _ChatQuestion7 = __webpack_require__(/*! ./ChatQuestion4.js */ "./dev/js/components/commons/ChatFeedBackView/ChatQuestion4.js");

var _ChatQuestion8 = _interopRequireDefault(_ChatQuestion7);

var _ChatQuestion9 = __webpack_require__(/*! ./ChatQuestion5.js */ "./dev/js/components/commons/ChatFeedBackView/ChatQuestion5.js");

var _ChatQuestion10 = _interopRequireDefault(_ChatQuestion9);

var _ChatThanksPage = __webpack_require__(/*! ./ChatThanksPage.js */ "./dev/js/components/commons/ChatFeedBackView/ChatThanksPage.js");

var _ChatThanksPage2 = _interopRequireDefault(_ChatThanksPage);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatFeedBackView = function (_React$Component) {
    _inherits(ChatFeedBackView, _React$Component);

    function ChatFeedBackView() {
        _classCallCheck(this, ChatFeedBackView);

        return _possibleConstructorReturn(this, (ChatFeedBackView.__proto__ || Object.getPrototypeOf(ChatFeedBackView)).apply(this, arguments));
    }

    _createClass(ChatFeedBackView, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: this.props.match.url + '/', render: function render(props) {
                        return _react2.default.createElement(_ChatQuestion2.default, _extends({}, _this2.props, props));
                    } }),
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: this.props.match.url + '/ques1', render: function render(props) {
                        return _react2.default.createElement(_ChatQuestion2.default, _extends({}, _this2.props, props));
                    } }),
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: this.props.match.url + '/ques2', render: function render(props) {
                        return _react2.default.createElement(_ChatQuestion4.default, _extends({}, _this2.props, props));
                    } }),
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: this.props.match.url + '/ques3', render: function render(props) {
                        return _react2.default.createElement(_ChatQuestion6.default, _extends({}, _this2.props, props));
                    } }),
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: this.props.match.url + '/ques4', render: function render(props) {
                        return _react2.default.createElement(_ChatQuestion8.default, _extends({}, _this2.props, props));
                    } }),
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: this.props.match.url + '/ques5', render: function render(props) {
                        return _react2.default.createElement(_ChatQuestion10.default, _extends({}, _this2.props, props));
                    } }),
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: this.props.match.url + '/thanks', render: function render(props) {
                        return _react2.default.createElement(_ChatThanksPage2.default, _extends({}, _this2.props, props));
                    } })
            );
        }
    }]);

    return ChatFeedBackView;
}(_react2.default.Component);

exports.default = ChatFeedBackView;

/***/ }),

/***/ "./dev/js/components/commons/ChatFeedBackView/ChatQuestion1.js":
/*!*********************************************************************!*\
  !*** ./dev/js/components/commons/ChatFeedBackView/ChatQuestion1.js ***!
  \*********************************************************************/
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

var ChatQuestion1 = function (_React$Component) {
	_inherits(ChatQuestion1, _React$Component);

	function ChatQuestion1(props) {
		_classCallCheck(this, ChatQuestion1);

		var _this = _possibleConstructorReturn(this, (ChatQuestion1.__proto__ || Object.getPrototypeOf(ChatQuestion1)).call(this, props));

		_this.state = {
			feedback: ''
		};
		return _this;
	}

	_createClass(ChatQuestion1, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var data = {

				'Category': 'Chat', 'Action': 'ChatQuestion1PageLanded', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'chat-question-1-page-landed', "url": window.location.pathname
			};
			_gtm2.default.sendEvent({ data: data });
			/*if(this.props.chat_feedback){
   	let feedback = this.props.chat_feedback.filter(x=>x.type.includes('ques1'))
   	if(feedback.length){
   		this.setState({feedback: feedback[0].data})
   	}
   }*/
		}
	}, {
		key: 'saveFeedBack',
		value: function saveFeedBack() {
			if (!this.state.feedback) {
				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please answer the Question" });
				return;
			}
			var data = {
				feedback: this.state.feedback,
				question: 'Have you taken your prescribed medicines, regularly?'
			};
			this.props.saveChatFeedBack('ques1', data);
			var gtmData = {

				'Category': 'Chat', 'Action': 'ChatQuestion1Submitted', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'chat-question-1-submitted', "url": window.location.pathname
			};
			_gtm2.default.sendEvent({ data: gtmData });
			this.props.history.push('/chat/feedback/ques2');
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'chat-pop-heading' },
					_react2.default.createElement(
						'h3',
						null,
						'Online consultation feedback'
					),
					_react2.default.createElement(
						'p',
						null,
						'Your feedback will help us improve services for the thousands of patients visiting us everyday.'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'customer-feedback cf-hght' },
					_react2.default.createElement(
						'div',
						{ className: 'cf-card' },
						_react2.default.createElement(
							'div',
							{ className: 'cf-body' },
							_react2.default.createElement(
								'p',
								{ className: 'cf-prgh' },
								'Have you taken your prescribed medicines, regularly?*'
							),
							_react2.default.createElement(
								'a',
								{ href: 'javascript:void(0);', onClick: function onClick() {
										return _this2.setState({ feedback: 'Yes' });
									}, className: 'cf-ans ' + (this.state.feedback == 'Yes' ? 'active' : '') },
								'YES'
							),
							_react2.default.createElement(
								'a',
								{ href: 'javascript:void(0);', onClick: function onClick() {
										return _this2.setState({ feedback: 'No' });
									}, className: 'cf-ans ' + (this.state.feedback == 'No' ? 'active' : '') },
								'NO'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'cf-footer' },
							_react2.default.createElement(
								'a',
								{ href: 'javascript:void(0);', onClick: this.saveFeedBack.bind(this), className: 'cf-btn cf-next' },
								'NEXT',
								_react2.default.createElement('img', { src: '/assets/images/right_arrow.png', alt: 'r-arrow', className: 'cf-img' })
							)
						)
					)
				)
			);
		}
	}]);

	return ChatQuestion1;
}(_react2.default.Component);

exports.default = ChatQuestion1;

/***/ }),

/***/ "./dev/js/components/commons/ChatFeedBackView/ChatQuestion2.js":
/*!*********************************************************************!*\
  !*** ./dev/js/components/commons/ChatFeedBackView/ChatQuestion2.js ***!
  \*********************************************************************/
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

var ChatQuestion2 = function (_React$Component) {
	_inherits(ChatQuestion2, _React$Component);

	function ChatQuestion2(props) {
		_classCallCheck(this, ChatQuestion2);

		var _this = _possibleConstructorReturn(this, (ChatQuestion2.__proto__ || Object.getPrototypeOf(ChatQuestion2)).call(this, props));

		_this.state = {
			feedback: null
		};
		return _this;
	}

	_createClass(ChatQuestion2, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var data = {

				'Category': 'Chat', 'Action': 'ChatQuestion2PageLanded', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'chat-question-2-page-landed', "url": window.location.pathname
			};
			_gtm2.default.sendEvent({ data: data });
			/*if(this.props.chat_feedback){
   	let feedback = this.props.chat_feedback.filter(x=>x.type.includes('ques2'))
   	if(feedback.length){
   		this.setState({feedback: feedback[0].data})
   	}
   }*/
		}
	}, {
		key: 'saveFeedBack',
		value: function saveFeedBack(data) {
			if (!this.state.feedback) {
				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please answer the Question" });
				return;
			}
			data = {
				feedback: this.state.feedback,
				question: 'How have your symptoms improved with our treatment?'
			};
			this.props.saveChatFeedBack('ques2', data);
			var gtmData = {

				'Category': 'Chat', 'Action': 'ChatQuestion2Submitted', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'chat-question-2-submitted', "url": window.location.pathname
			};
			_gtm2.default.sendEvent({ data: gtmData });
			this.props.history.push('/chat/feedback/ques3');
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

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
							'p',
							{ className: 'cf-prgh' },
							'How have your symptoms improved with our treatment?*'
						),
						_react2.default.createElement(
							'span',
							{ className: 'cf-light-txt' },
							'Rate on a scale from 1 - 5, where 5 is perfectly recovered/healthy'
						),
						_react2.default.createElement(
							'ul',
							{ className: 'cf-rating cursor-pntr' },
							_react2.default.createElement(
								'li',
								{ onClick: function onClick() {
										return _this2.setState({ feedback: 1 });
									} },
								this.state.feedback >= 1 ? _react2.default.createElement('img', { src: '/assets/images/star-orange.png', alt: 'star', className: 'cf-rating-img' }) : _react2.default.createElement('img', { src: '/assets/images/star-grey.png', alt: 'star', className: 'cf-rating-img' }),
								_react2.default.createElement(
									'span',
									{ className: 'cf-rating-val' },
									'1'
								),
								_react2.default.createElement(
									'div',
									{ className: 'rating-txt' },
									'Worse'
								)
							),
							_react2.default.createElement(
								'li',
								{ onClick: function onClick() {
										return _this2.setState({ feedback: 2 });
									} },
								this.state.feedback >= 2 ? _react2.default.createElement('img', { src: '/assets/images/star-orange.png', alt: 'star', className: 'cf-rating-img' }) : _react2.default.createElement('img', { src: '/assets/images/star-grey.png', alt: 'star', className: 'cf-rating-img' }),
								_react2.default.createElement(
									'span',
									{ className: 'cf-rating-val' },
									'2'
								)
							),
							_react2.default.createElement(
								'li',
								{ onClick: function onClick() {
										return _this2.setState({ feedback: 3 });
									} },
								this.state.feedback >= 3 ? _react2.default.createElement('img', { src: '/assets/images/star-orange.png', alt: 'star', className: 'cf-rating-img' }) : _react2.default.createElement('img', { src: '/assets/images/star-grey.png', alt: 'star', className: 'cf-rating-img' }),
								_react2.default.createElement(
									'span',
									{ className: 'cf-rating-val' },
									'3'
								)
							),
							_react2.default.createElement(
								'li',
								{ onClick: function onClick() {
										return _this2.setState({ feedback: 4 });
									} },
								this.state.feedback >= 4 ? _react2.default.createElement('img', { src: '/assets/images/star-orange.png', alt: 'star', className: 'cf-rating-img' }) : _react2.default.createElement('img', { src: '/assets/images/star-grey.png', alt: 'star', className: 'cf-rating-img' }),
								_react2.default.createElement(
									'span',
									{ className: 'cf-rating-val' },
									'4'
								)
							),
							_react2.default.createElement(
								'li',
								{ onClick: function onClick() {
										return _this2.setState({ feedback: 5 });
									} },
								this.state.feedback >= 5 ? _react2.default.createElement('img', { src: '/assets/images/star-orange.png', alt: 'star', className: 'cf-rating-img' }) : _react2.default.createElement('img', { src: '/assets/images/star-grey.png', alt: 'star', className: 'cf-rating-img' }),
								_react2.default.createElement(
									'span',
									{ className: 'cf-rating-val' },
									'5'
								),
								_react2.default.createElement(
									'div',
									{ className: 'rating-txt' },
									'Fantastic'
								)
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'cf-footer' },
						_react2.default.createElement(
							'a',
							{ href: 'javascript:void(0);', onClick: function onClick() {
									return _this2.props.history.push('/chat/feedback');
								}, className: 'cf-btn cf-prev' },
							_react2.default.createElement('img', { src: '/assets/images/right_arrow.png', alt: 'r-arrow', className: 'cf-img cf-rotate' }),
							'PREVIOUS'
						),
						_react2.default.createElement(
							'a',
							{ href: 'javascript:void(0);', onClick: this.saveFeedBack.bind(this), className: 'cf-btn cf-next' },
							'NEXT',
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

/***/ "./dev/js/components/commons/ChatFeedBackView/ChatQuestion3.js":
/*!*********************************************************************!*\
  !*** ./dev/js/components/commons/ChatFeedBackView/ChatQuestion3.js ***!
  \*********************************************************************/
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

var ChatQuestion3 = function (_React$Component) {
	_inherits(ChatQuestion3, _React$Component);

	function ChatQuestion3(props) {
		_classCallCheck(this, ChatQuestion3);

		var _this = _possibleConstructorReturn(this, (ChatQuestion3.__proto__ || Object.getPrototypeOf(ChatQuestion3)).call(this, props));

		_this.state = {
			feedback: null
		};
		return _this;
	}

	_createClass(ChatQuestion3, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var data = {

				'Category': 'Chat', 'Action': 'ChatQuestion3PageLanded', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'chat-question-3-page-landed', "url": window.location.pathname
			};
			_gtm2.default.sendEvent({ data: data });
			/*if(this.props.chat_feedback){
   	let feedback = this.props.chat_feedback.filter(x=>x.type.includes('ques3'))
   	if(feedback.length){
   		this.setState({feedback: feedback[0].data})
   	}
   }
   */
		}
	}, {
		key: 'saveFeedBack',
		value: function saveFeedBack(data) {
			if (!this.state.feedback) {
				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please answer the Question" });
				return;
			}
			data = {
				feedback: this.state.feedback,
				question: 'How likely are you to recommend us to your friends or family?'
			};
			this.props.saveChatFeedBack('ques3', data);
			var gtmData = {

				'Category': 'Chat', 'Action': 'ChatQuestion3Submitted', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'chat-question-3-submitted', "url": window.location.pathname
			};
			_gtm2.default.sendEvent({ data: gtmData });
			this.props.history.push('/chat/feedback/ques4');
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

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
							'p',
							{ className: 'cf-prgh' },
							'How likely are you to recommend us to your friends or family?*'
						),
						_react2.default.createElement(
							'ul',
							{ className: 'cf-rating cf-mrgT20 cursor-pntr' },
							_react2.default.createElement(
								'li',
								{ onClick: function onClick() {
										return _this2.setState({ feedback: 1 });
									} },
								this.state.feedback >= 1 ? _react2.default.createElement('img', { src: '/assets/images/star-orange.png', alt: 'star', className: 'cf-rating-img' }) : _react2.default.createElement('img', { src: '/assets/images/star-grey.png', alt: 'star', className: 'cf-rating-img' }),
								_react2.default.createElement(
									'span',
									{ className: 'cf-rating-val' },
									'1'
								),
								_react2.default.createElement(
									'div',
									{ className: 'rating-txt' },
									'Never'
								)
							),
							_react2.default.createElement(
								'li',
								{ onClick: function onClick() {
										return _this2.setState({ feedback: 2 });
									} },
								this.state.feedback >= 2 ? _react2.default.createElement('img', { src: '/assets/images/star-orange.png', alt: 'star', className: 'cf-rating-img' }) : _react2.default.createElement('img', { src: '/assets/images/star-grey.png', alt: 'star', className: 'cf-rating-img' }),
								_react2.default.createElement(
									'span',
									{ className: 'cf-rating-val' },
									'2'
								)
							),
							_react2.default.createElement(
								'li',
								{ onClick: function onClick() {
										return _this2.setState({ feedback: 3 });
									} },
								this.state.feedback >= 3 ? _react2.default.createElement('img', { src: '/assets/images/star-orange.png', alt: 'star', className: 'cf-rating-img' }) : _react2.default.createElement('img', { src: '/assets/images/star-grey.png', alt: 'star', className: 'cf-rating-img' }),
								_react2.default.createElement(
									'span',
									{ className: 'cf-rating-val' },
									'3'
								)
							),
							_react2.default.createElement(
								'li',
								{ onClick: function onClick() {
										return _this2.setState({ feedback: 4 });
									} },
								this.state.feedback >= 4 ? _react2.default.createElement('img', { src: '/assets/images/star-orange.png', alt: 'star', className: 'cf-rating-img' }) : _react2.default.createElement('img', { src: '/assets/images/star-grey.png', alt: 'star', className: 'cf-rating-img' }),
								_react2.default.createElement(
									'span',
									{ className: 'cf-rating-val' },
									'4'
								)
							),
							_react2.default.createElement(
								'li',
								{ onClick: function onClick() {
										return _this2.setState({ feedback: 5 });
									} },
								this.state.feedback >= 5 ? _react2.default.createElement('img', { src: '/assets/images/star-orange.png', alt: 'star', className: 'cf-rating-img' }) : _react2.default.createElement('img', { src: '/assets/images/star-grey.png', alt: 'star', className: 'cf-rating-img' }),
								_react2.default.createElement(
									'span',
									{ className: 'cf-rating-val' },
									'5'
								),
								_react2.default.createElement(
									'div',
									{ className: 'rating-txt' },
									'Very Likely'
								)
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'cf-footer' },
						_react2.default.createElement(
							'a',
							{ href: 'javascript:void(0);', onClick: function onClick() {
									return _this2.props.history.push('/chat/feedback/ques2');
								}, className: 'cf-btn cf-prev' },
							_react2.default.createElement('img', { src: '/assets/images/right_arrow.png', alt: 'r-arrow', className: 'cf-img cf-rotate' }),
							'PREVIOUS'
						),
						_react2.default.createElement(
							'a',
							{ href: 'javascript:void(0);', onClick: this.saveFeedBack.bind(this), className: 'cf-btn cf-next' },
							'NEXT',
							_react2.default.createElement('img', { src: '/assets/images/right_arrow.png', alt: 'r-arrow', className: 'cf-img' })
						)
					)
				)
			);
		}
	}]);

	return ChatQuestion3;
}(_react2.default.Component);

exports.default = ChatQuestion3;

/***/ }),

/***/ "./dev/js/components/commons/ChatFeedBackView/ChatQuestion4.js":
/*!*********************************************************************!*\
  !*** ./dev/js/components/commons/ChatFeedBackView/ChatQuestion4.js ***!
  \*********************************************************************/
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

var ChatQuestion4 = function (_React$Component) {
	_inherits(ChatQuestion4, _React$Component);

	function ChatQuestion4(props) {
		_classCallCheck(this, ChatQuestion4);

		var _this = _possibleConstructorReturn(this, (ChatQuestion4.__proto__ || Object.getPrototypeOf(ChatQuestion4)).call(this, props));

		_this.state = {
			feedback: '',
			text: ''
		};
		return _this;
	}

	_createClass(ChatQuestion4, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var data = {

				'Category': 'Chat', 'Action': 'ChatQuestion4PageLanded', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'chat-question-4-page-landed', "url": window.location.pathname
			};
			_gtm2.default.sendEvent({ data: data });
			/*if(this.props.chat_feedback){
   	let feedback = this.props.chat_feedback.filter(x=>x.type.includes('ques4'))
   	if(feedback.length){
   		this.setState({feedback: feedback[0].data})
   	}
   }*/
		}
	}, {
		key: 'saveFeedBack',
		value: function saveFeedBack() {
			if (!this.state.feedback) {
				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please answer the Question" });
				return;
			}
			var data = {
				feedback: this.state.feedback,
				question: 'What do you think can be improved?',
				feedbackText: this.state.text
			};
			this.props.saveChatFeedBack('ques4', data);
			var gtmData = {

				'Category': 'Chat', 'Action': 'ChatQuestion4Submitted', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'chat-question-4-submitted', "url": window.location.pathname
			};
			_gtm2.default.sendEvent({ data: gtmData });
			this.props.history.push('/chat/feedback/ques5');
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

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
							'p',
							{ className: 'cf-prgh' },
							'What do you think can be improved?*'
						),
						_react2.default.createElement(
							'ul',
							{ className: 'cf-radio chat-radio-align' },
							_react2.default.createElement(
								'li',
								{ className: '' + (this.state.feedback.includes('0') ? 'active' : '') },
								_react2.default.createElement(
									'label',
									{ className: 'custom-radio' },
									_react2.default.createElement(
										'span',
										{ className: 'cf-radio-text' },
										'Better treatment'
									),
									_react2.default.createElement('input', { onChange: function onChange() {
											return _this2.setState({ feedback: '0', text: 'Better treatment' });
										}, type: 'radio', name: 'h-imp', checked: this.state.feedback.includes('0') }),
									_react2.default.createElement('span', { className: 'checkmark radio-checkmark' })
								)
							),
							_react2.default.createElement(
								'li',
								{ className: '' + (this.state.feedback.includes('1') ? 'active' : '') },
								_react2.default.createElement(
									'label',
									{ className: 'custom-radio' },
									_react2.default.createElement(
										'span',
										{ className: 'cf-radio-text' },
										'The doctor could have explained the treatment better'
									),
									_react2.default.createElement('input', { type: 'radio', onChange: function onChange() {
											return _this2.setState({ feedback: '1', text: 'The doctor could have explained the treatment better' });
										}, name: 'h-imp', checked: this.state.feedback.includes('1') }),
									_react2.default.createElement('span', { className: 'checkmark radio-checkmark' })
								)
							),
							_react2.default.createElement(
								'li',
								{ className: '' + (this.state.feedback.includes('2') ? 'active' : '') },
								_react2.default.createElement(
									'label',
									{ className: 'custom-radio' },
									_react2.default.createElement(
										'span',
										{ className: 'cf-radio-text' },
										'Wait Time'
									),
									_react2.default.createElement('input', { type: 'radio', onChange: function onChange() {
											return _this2.setState({ feedback: '2', text: 'Wait Time' });
										}, name: 'h-imp', checked: this.state.feedback.includes('2') }),
									_react2.default.createElement('span', { className: 'checkmark radio-checkmark' })
								)
							),
							_react2.default.createElement(
								'li',
								{ className: '' + (this.state.feedback.includes('3') ? 'active' : '') },
								_react2.default.createElement(
									'label',
									{ className: 'custom-radio' },
									_react2.default.createElement(
										'span',
										{ className: 'cf-radio-text' },
										'Everything was perfect'
									),
									_react2.default.createElement('input', { type: 'radio', onChange: function onChange() {
											return _this2.setState({ feedback: '3', text: 'Everything was perfect' });
										}, name: 'h-imp', checked: this.state.feedback.includes('3') }),
									_react2.default.createElement('span', { className: 'checkmark radio-checkmark' })
								)
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'cf-footer' },
						_react2.default.createElement(
							'a',
							{ href: 'javascript:void(0);', onClick: function onClick() {
									return _this2.props.history.push('/chat/feedback/ques3');
								}, className: 'cf-btn cf-prev' },
							_react2.default.createElement('img', { src: '/assets/images/right_arrow.png', alt: 'r-arrow', className: 'cf-img cf-rotate' }),
							'PREVIOUS'
						),
						_react2.default.createElement(
							'a',
							{ href: 'javascript:void(0);', onClick: this.saveFeedBack.bind(this), className: 'cf-btn cf-next' },
							'NEXT',
							_react2.default.createElement('img', { src: '/assets/images/right_arrow.png', alt: 'r-arrow', className: 'cf-img' })
						)
					)
				)
			);
		}
	}]);

	return ChatQuestion4;
}(_react2.default.Component);

exports.default = ChatQuestion4;

/***/ }),

/***/ "./dev/js/components/commons/ChatFeedBackView/ChatQuestion5.js":
/*!*********************************************************************!*\
  !*** ./dev/js/components/commons/ChatFeedBackView/ChatQuestion5.js ***!
  \*********************************************************************/
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatQuestion5 = function (_React$Component) {
	_inherits(ChatQuestion5, _React$Component);

	function ChatQuestion5(props) {
		_classCallCheck(this, ChatQuestion5);

		var _this = _possibleConstructorReturn(this, (ChatQuestion5.__proto__ || Object.getPrototypeOf(ChatQuestion5)).call(this, props));

		_this.state = {
			feedback: ''
		};
		return _this;
	}

	_createClass(ChatQuestion5, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var data = {

				'Category': 'Chat', 'Action': 'ChatQuestion5PageLanded', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'chat-question-5-page-landed', "url": window.location.pathname
			};
			_gtm2.default.sendEvent({ data: data });
			/*if(this.props.chat_feedback){
   	let feedback = this.props.chat_feedback.filter(x=>x.type.includes('ques5'))
   	if(feedback.length){
   		this.setState({feedback: feedback[0].data})
   	}
   }*/
		}
	}, {
		key: 'submit',
		value: function submit() {
			var _this2 = this;

			var data = {
				feedback: this.state.feedback,
				question: 'Any Comments?'
			};
			var feedback = this.props.chat_feedback && this.props.chat_feedback.length ? this.props.chat_feedback.filter(function (x) {
				return !x.type.includes('ques5');
			}) : [];
			feedback.push({ type: 'ques5', data: data });
			feedback.push({ createdOn: new Date() });
			this.props.saveChatFeedBack('ques5', data);
			var roomId = this.props.chat_feedback_roomId;

			var postData = {
				rid: roomId,
				data: feedback
			};
			var gtmData = {

				'Category': 'Chat', 'Action': 'ChatQuestion5Submitted', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'chat-question-5-submitted', "url": window.location.pathname
			};
			_gtm2.default.sendEvent({ data: gtmData });

			this.props.submitChatFeedback(postData);
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
							'p',
							{ className: 'cf-prgh' },
							'Any Comments?'
						),
						_react2.default.createElement('textarea', { className: 'cf-textarea', value: this.state.feedback, placeholder: 'Type here...', onChange: function onChange(e) {
								return _this3.setState({ feedback: e.target.value });
							} })
					),
					_react2.default.createElement(
						'div',
						{ className: 'cf-footer' },
						_react2.default.createElement(
							'a',
							{ href: 'javascript:void(0);', className: 'cf-btn cf-prev', onClick: function onClick() {
									return _this3.props.history.push('/chat/feedback/ques4');
								} },
							_react2.default.createElement('img', { src: '/assets/images/right_arrow.png', alt: 'r-arrow', className: 'cf-img cf-rotate' }),
							'PREVIOUS'
						),
						_react2.default.createElement(
							'a',
							{ href: 'javascript:void(0);', onClick: this.submit.bind(this), className: 'cf-btn cf-next cf-submit' },
							'SUBMIT'
						)
					)
				)
			);
		}
	}]);

	return ChatQuestion5;
}(_react2.default.Component);

exports.default = ChatQuestion5;

/***/ }),

/***/ "./dev/js/components/commons/ChatFeedBackView/ChatThanksPage.js":
/*!**********************************************************************!*\
  !*** ./dev/js/components/commons/ChatFeedBackView/ChatThanksPage.js ***!
  \**********************************************************************/
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

var ChatThanksView = function (_React$Component) {
	_inherits(ChatThanksView, _React$Component);

	function ChatThanksView() {
		_classCallCheck(this, ChatThanksView);

		return _possibleConstructorReturn(this, (ChatThanksView.__proto__ || Object.getPrototypeOf(ChatThanksView)).apply(this, arguments));
	}

	_createClass(ChatThanksView, [{
		key: "render",
		value: function render() {

			return _react2.default.createElement(
				"div",
				{ className: "cf-hght" },
				_react2.default.createElement(
					"div",
					{ className: "thanks-div" },
					_react2.default.createElement("img", { src: "/assets/images/tick.png", className: "cf-tick-img", alt: "tick-img" }),
					_react2.default.createElement(
						"div",
						{ className: "cf-thanks-text" },
						"Thank You !"
					),
					_react2.default.createElement(
						"p",
						{ className: "cf-tnanks-prgh" },
						"Feedback submitted successfully. Please follow-up as per our doctor's advice."
					)
				)
			);
		}
	}]);

	return ChatThanksView;
}(_react2.default.Component);

exports.default = ChatThanksView;

/***/ }),

/***/ "./dev/js/components/commons/ChatFeedBackView/index.js":
/*!*************************************************************!*\
  !*** ./dev/js/components/commons/ChatFeedBackView/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ChatFeedBackView = __webpack_require__(/*! ./ChatFeedBackView.js */ "./dev/js/components/commons/ChatFeedBackView/ChatFeedBackView.js");

var _ChatFeedBackView2 = _interopRequireDefault(_ChatFeedBackView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ChatFeedBackView2.default;

/***/ }),

/***/ "./dev/js/containers/commons/ChatFeedback.js":
/*!***************************************************!*\
  !*** ./dev/js/containers/commons/ChatFeedback.js ***!
  \***************************************************/
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

var _ChatFeedBackView = __webpack_require__(/*! ../../components/commons/ChatFeedBackView */ "./dev/js/components/commons/ChatFeedBackView/index.js");

var _ChatFeedBackView2 = _interopRequireDefault(_ChatFeedBackView);

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var ChatFeedBack = function (_React$Component) {
	_inherits(ChatFeedBack, _React$Component);

	function ChatFeedBack() {
		_classCallCheck(this, ChatFeedBack);

		return _possibleConstructorReturn(this, (ChatFeedBack.__proto__ || Object.getPrototypeOf(ChatFeedBack)).apply(this, arguments));
	}

	_createClass(ChatFeedBack, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var parsed = queryString.parse(this.props.location.search);
			if (parsed.rid) {
				var rid = parsed.rid;
				try {
					if (window && window.atob(rid)) {
						rid = window.atob(rid);
					}
				} catch (e) {}

				this.props.saveChatFeedbackRoomId(rid);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_ChatFeedBackView2.default, this.props);
		}
	}]);

	return ChatFeedBack;
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
		saveChatFeedBack: function saveChatFeedBack(type, data) {
			return dispatch((0, _index.saveChatFeedBack)(type, data));
		},
		submitChatFeedback: function submitChatFeedback(postData) {
			return dispatch((0, _index.submitChatFeedback)(postData));
		},
		saveChatFeedbackRoomId: function saveChatFeedbackRoomId(rid) {
			return dispatch((0, _index.saveChatFeedbackRoomId)(rid));
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ChatFeedBack);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0NoYXRGZWVkQmFja1ZpZXcvQ2hhdEZlZWRCYWNrLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvQ2hhdEZlZWRCYWNrVmlldy9DaGF0RmVlZEJhY2tWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvQ2hhdEZlZWRCYWNrVmlldy9DaGF0UXVlc3Rpb24xLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvQ2hhdEZlZWRCYWNrVmlldy9DaGF0UXVlc3Rpb24yLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvQ2hhdEZlZWRCYWNrVmlldy9DaGF0UXVlc3Rpb24zLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvQ2hhdEZlZWRCYWNrVmlldy9DaGF0UXVlc3Rpb240LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvQ2hhdEZlZWRCYWNrVmlldy9DaGF0UXVlc3Rpb241LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvQ2hhdEZlZWRCYWNrVmlldy9DaGF0VGhhbmtzUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0NoYXRGZWVkQmFja1ZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy9DaGF0RmVlZGJhY2suanMiXSwibmFtZXMiOlsiQ2hhdEZlZWRCYWNrIiwiZGF0YSIsIkdUTSIsImdldFVzZXJJZCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzZW5kRXZlbnQiLCJwcm9wcyIsImhpc3RvcnkiLCJwdXNoIiwiUmVhY3QiLCJDb21wb25lbnQiLCJDaGF0RmVlZEJhY2tWaWV3IiwibWF0Y2giLCJ1cmwiLCJDaGF0UXVlc3Rpb24xIiwic3RhdGUiLCJmZWVkYmFjayIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJxdWVzdGlvbiIsInNhdmVDaGF0RmVlZEJhY2siLCJndG1EYXRhIiwic2V0U3RhdGUiLCJzYXZlRmVlZEJhY2siLCJiaW5kIiwiQ2hhdFF1ZXN0aW9uMiIsIkNoYXRRdWVzdGlvbjMiLCJDaGF0UXVlc3Rpb240IiwiZmVlZGJhY2tUZXh0IiwiaW5jbHVkZXMiLCJDaGF0UXVlc3Rpb241IiwiY2hhdF9mZWVkYmFjayIsImxlbmd0aCIsImZpbHRlciIsIngiLCJ0eXBlIiwiY3JlYXRlZE9uIiwiRGF0ZSIsInJvb21JZCIsImNoYXRfZmVlZGJhY2tfcm9vbUlkIiwicG9zdERhdGEiLCJyaWQiLCJzdWJtaXRDaGF0RmVlZGJhY2siLCJzZXRUaW1lb3V0IiwiZSIsInRhcmdldCIsInZhbHVlIiwic3VibWl0IiwiQ2hhdFRoYW5rc1ZpZXciLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJwYXJzZWQiLCJwYXJzZSIsInNlYXJjaCIsImF0b2IiLCJzYXZlQ2hhdEZlZWRiYWNrUm9vbUlkIiwibWFwU3RhdGVUb1Byb3BzIiwiVVNFUiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsWTs7Ozs7Ozs7Ozs7c0NBRWM7QUFDbEIsT0FBSUMsT0FBTzs7QUFFRCxnQkFBWSxNQUZYLEVBRW1CLFVBQVUsd0JBRjdCLEVBRXVELGNBQWNDLGNBQUlDLFNBQUosRUFGckUsRUFFc0YsVUFBVSxDQUZoRyxFQUVtRyxTQUFTLDJCQUY1RyxFQUV5SSxPQUFPQyxPQUFPQyxRQUFQLENBQWdCQztBQUZoSyxJQUFYO0FBSU1KLGlCQUFJSyxTQUFKLENBQWMsRUFBRU4sTUFBTUEsSUFBUixFQUFkO0FBQ047OzsyQkFFTztBQUFBOztBQUVQLFVBQ0k7QUFBQTtB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bXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuXG5jbGFzcyBDaGF0RmVlZEJhY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0bGV0IGRhdGEgPSB7XG5cbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDaGF0JywgJ0FjdGlvbic6ICdDaGF0RmVlZGJhY2tQYWdlTGFuZGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2hhdC1mZWVkYmFjay1wYWdlLWxhbmRlZCcsIFwidXJsXCI6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cdH1cblxuXHRyZW5kZXIoKXtcblxuXHRcdHJldHVybihcblx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b21lci1mZWVkYmFjayBjZi1oZ2h0XCI+XG5cdCAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2YtY2FyZFwiPlxuXHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNmLWJvZHlcIj5cblx0ICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2YtdGl0bGVcIj5PbmxpbmUgY29uc3VsdGF0aW9uIGZlZWRiYWNrPC9oMj5cblx0ICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjZi1wcmdoXCI+WW91ciBmZWVkYmFjayB3aWxsIGhlbHAgdXMgaW1wcm92ZSBzZXJ2aWNlcyBmb3IgdGhlIHRob3VzYW5kcyBvZiBwYXRpZW50cyB2aXNpdGluZyB1cyBldmVyeWRheS48L3A+ICBcblx0ICAgICAgICAgICAgPC9kaXY+XG5cdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2YtZm9vdGVyXCI+XG5cdCAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgb25DbGljaz17KCk9PnRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvY2hhdC9mZWVkYmFjay9xdWVzMScpfSBjbGFzc05hbWU9XCJjZi1idG4gY2Ytb25seS1idG5cIj5ORVhUIFxuXHQgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9yaWdodF9hcnJvdy5wbmdcIiBhbHQ9XCJyLWFycm93XCIgY2xhc3NOYW1lPVwiY2YtaW1nXCIgLz5cblx0ICAgICAgICAgICAgICAgPC9hPlxuXHQgICAgICAgICAgICA8L2Rpdj5cblx0ICAgICAgICAgPC9kaXY+XG5cdCAgICAgICAgPC9kaXY+XG5cblx0XHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0RmVlZEJhY2siLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQ2hhdEZlZWRCYWNrIGZyb20gJy4vQ2hhdEZlZWRCYWNrLmpzJ1xuaW1wb3J0IENoYXRRdWVzdGlvbjEgZnJvbSAnLi9DaGF0UXVlc3Rpb24xLmpzJ1xuaW1wb3J0IENoYXRRdWVzdGlvbjIgZnJvbSAnLi9DaGF0UXVlc3Rpb24yLmpzJ1xuaW1wb3J0IENoYXRRdWVzdGlvbjMgZnJvbSAnLi9DaGF0UXVlc3Rpb24zLmpzJ1xuaW1wb3J0IENoYXRRdWVzdGlvbjQgZnJvbSAnLi9DaGF0UXVlc3Rpb240LmpzJ1xuaW1wb3J0IENoYXRRdWVzdGlvbjUgZnJvbSAnLi9DaGF0UXVlc3Rpb241LmpzJ1xuaW1wb3J0IENoYXRUaGFua3NQYWdlIGZyb20gJy4vQ2hhdFRoYW5rc1BhZ2UuanMnXG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cblxuY2xhc3MgQ2hhdEZlZWRCYWNrVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0cmVuZGVyKCl7XG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2PlxuXG5cdFx0XHRcdDxSb3V0ZSBleGFjdCBwYXRoPXtgJHt0aGlzLnByb3BzLm1hdGNoLnVybH0vYH0gcmVuZGVyPXsocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDaGF0UXVlc3Rpb24xIHsuLi50aGlzLnByb3BzfSB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgfX0gLz5cblxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXtgJHt0aGlzLnByb3BzLm1hdGNoLnVybH0vcXVlczFgfSByZW5kZXI9eyhwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENoYXRRdWVzdGlvbjEgey4uLnRoaXMucHJvcHN9IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICB9fSAvPlxuXG4gICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e2Ake3RoaXMucHJvcHMubWF0Y2gudXJsfS9xdWVzMmB9IHJlbmRlcj17KHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q2hhdFF1ZXN0aW9uMiB7Li4udGhpcy5wcm9wc30gey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgIH19IC8+XG5cbiAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17YCR7dGhpcy5wcm9wcy5tYXRjaC51cmx9L3F1ZXMzYH0gcmVuZGVyPXsocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDaGF0UXVlc3Rpb24zIHsuLi50aGlzLnByb3BzfSB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgfX0gLz5cblxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXtgJHt0aGlzLnByb3BzLm1hdGNoLnVybH0vcXVlczRgfSByZW5kZXI9eyhwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENoYXRRdWVzdGlvbjQgey4uLnRoaXMucHJvcHN9IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICB9fSAvPlxuXG4gICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e2Ake3RoaXMucHJvcHMubWF0Y2gudXJsfS9xdWVzNWB9IHJlbmRlcj17KHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q2hhdFF1ZXN0aW9uNSB7Li4udGhpcy5wcm9wc30gey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgIH19IC8+XG5cbiAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17YCR7dGhpcy5wcm9wcy5tYXRjaC51cmx9L3RoYW5rc2B9IHJlbmRlcj17KHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q2hhdFRoYW5rc1BhZ2Ugey4uLnRoaXMucHJvcHN9IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhdEZlZWRCYWNrVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcblxuY2xhc3MgQ2hhdFF1ZXN0aW9uMSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGZlZWRiYWNrOiAnJ1xuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGxldCBkYXRhID0ge1xuXG5cdFx0XHQnQ2F0ZWdvcnknOiAnQ2hhdCcsICdBY3Rpb24nOiAnQ2hhdFF1ZXN0aW9uMVBhZ2VMYW5kZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjaGF0LXF1ZXN0aW9uLTEtcGFnZS1sYW5kZWQnLCBcInVybFwiOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcblx0XHR9XG5cdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblx0XHQvKmlmKHRoaXMucHJvcHMuY2hhdF9mZWVkYmFjayl7XG5cdFx0XHRsZXQgZmVlZGJhY2sgPSB0aGlzLnByb3BzLmNoYXRfZmVlZGJhY2suZmlsdGVyKHg9PngudHlwZS5pbmNsdWRlcygncXVlczEnKSlcblx0XHRcdGlmKGZlZWRiYWNrLmxlbmd0aCl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2ZlZWRiYWNrOiBmZWVkYmFja1swXS5kYXRhfSlcblx0XHRcdH1cblx0XHR9Ki9cblx0fVxuXG5cdHNhdmVGZWVkQmFjaygpIHtcblx0XHRpZiAoIXRoaXMuc3RhdGUuZmVlZGJhY2spIHtcblx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgYW5zd2VyIHRoZSBRdWVzdGlvblwiIH0pXG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0bGV0IGRhdGEgPSB7XG5cdFx0XHRmZWVkYmFjazogdGhpcy5zdGF0ZS5mZWVkYmFjayxcblx0XHRcdHF1ZXN0aW9uOiAnSGF2ZSB5b3UgdGFrZW4geW91ciBwcmVzY3JpYmVkIG1lZGljaW5lcywgcmVndWxhcmx5Pydcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5zYXZlQ2hhdEZlZWRCYWNrKCdxdWVzMScsIGRhdGEpXG5cdFx0bGV0IGd0bURhdGEgPSB7XG5cblx0XHRcdCdDYXRlZ29yeSc6ICdDaGF0JywgJ0FjdGlvbic6ICdDaGF0UXVlc3Rpb24xU3VibWl0dGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2hhdC1xdWVzdGlvbi0xLXN1Ym1pdHRlZCcsIFwidXJsXCI6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuXHRcdH1cblx0XHRHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuXHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvY2hhdC9mZWVkYmFjay9xdWVzMicpXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNoYXQtcG9wLWhlYWRpbmdcIj5cblx0XHRcdFx0PGgzPk9ubGluZSBjb25zdWx0YXRpb24gZmVlZGJhY2s8L2gzPlxuXHRcdFx0XHQ8cD5Zb3VyIGZlZWRiYWNrIHdpbGwgaGVscCB1cyBpbXByb3ZlIHNlcnZpY2VzIGZvciB0aGUgdGhvdXNhbmRzIG9mIHBhdGllbnRzIHZpc2l0aW5nIHVzIGV2ZXJ5ZGF5LjwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b21lci1mZWVkYmFjayBjZi1oZ2h0XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2YtY2FyZFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2YtYm9keVwiPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY2YtcHJnaFwiPkhhdmUgeW91IHRha2VuIHlvdXIgcHJlc2NyaWJlZCBtZWRpY2luZXMsIHJlZ3VsYXJseT8qPC9wPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZmVlZGJhY2s6ICdZZXMnIH0pfSBjbGFzc05hbWU9e2BjZi1hbnMgJHt0aGlzLnN0YXRlLmZlZWRiYWNrID09ICdZZXMnID8gJ2FjdGl2ZScgOiAnJ31gfT5ZRVM8L2E+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBmZWVkYmFjazogJ05vJyB9KX0gY2xhc3NOYW1lPXtgY2YtYW5zICR7dGhpcy5zdGF0ZS5mZWVkYmFjayA9PSAnTm8nID8gJ2FjdGl2ZScgOiAnJ31gfT5OTzwvYT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNmLWZvb3RlclwiPlxuXHRcdFx0XHRcdFx0ey8qXG5cdFx0ICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzc05hbWU9XCJjZi1idG4gY2YtcHJldlwiPiBcblx0XHQgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvbGVmdC1hcnJvdy5wbmdcIiBhbHQ9XCJyLWFycm93XCIgY2xhc3NOYW1lPVwiY2YtaW1nXCIgLz5cblx0XHQgICAgICAgICAgICAgICAgICAgUFJFVklPVVNcblx0XHQgICAgICAgICAgICAgICA8L2E+XG5cdFx0Ki99XG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIG9uQ2xpY2s9e3RoaXMuc2F2ZUZlZWRCYWNrLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImNmLWJ0biBjZi1uZXh0XCI+TkVYVFxuXHRcdCAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3JpZ2h0X2Fycm93LnBuZ1wiIGFsdD1cInItYXJyb3dcIiBjbGFzc05hbWU9XCJjZi1pbWdcIiAvPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRRdWVzdGlvbjEiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5cbmNsYXNzIENoYXRRdWVzdGlvbjIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRmZWVkYmFjazogbnVsbFxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGxldCBkYXRhID0ge1xuXG5cdFx0XHQnQ2F0ZWdvcnknOiAnQ2hhdCcsICdBY3Rpb24nOiAnQ2hhdFF1ZXN0aW9uMlBhZ2VMYW5kZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjaGF0LXF1ZXN0aW9uLTItcGFnZS1sYW5kZWQnLCBcInVybFwiOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcblx0XHR9XG5cdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblx0XHQvKmlmKHRoaXMucHJvcHMuY2hhdF9mZWVkYmFjayl7XG5cdFx0XHRsZXQgZmVlZGJhY2sgPSB0aGlzLnByb3BzLmNoYXRfZmVlZGJhY2suZmlsdGVyKHg9PngudHlwZS5pbmNsdWRlcygncXVlczInKSlcblx0XHRcdGlmKGZlZWRiYWNrLmxlbmd0aCl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2ZlZWRiYWNrOiBmZWVkYmFja1swXS5kYXRhfSlcblx0XHRcdH1cblx0XHR9Ki9cblx0fVxuXG5cdHNhdmVGZWVkQmFjayhkYXRhKSB7XG5cdFx0aWYgKCF0aGlzLnN0YXRlLmZlZWRiYWNrKSB7XG5cdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIGFuc3dlciB0aGUgUXVlc3Rpb25cIiB9KVxuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdGRhdGEgPSB7XG5cdFx0XHRmZWVkYmFjazogdGhpcy5zdGF0ZS5mZWVkYmFjayxcblx0XHRcdHF1ZXN0aW9uOiAnSG93IGhhdmUgeW91ciBzeW1wdG9tcyBpbXByb3ZlZCB3aXRoIG91ciB0cmVhdG1lbnQ/J1xuXHRcdH1cblx0XHR0aGlzLnByb3BzLnNhdmVDaGF0RmVlZEJhY2soJ3F1ZXMyJywgZGF0YSlcblx0XHRsZXQgZ3RtRGF0YSA9IHtcblxuXHRcdFx0J0NhdGVnb3J5JzogJ0NoYXQnLCAnQWN0aW9uJzogJ0NoYXRRdWVzdGlvbjJTdWJtaXR0ZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjaGF0LXF1ZXN0aW9uLTItc3VibWl0dGVkJywgXCJ1cmxcIjogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG5cdFx0fVxuXHRcdEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG5cdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jaGF0L2ZlZWRiYWNrL3F1ZXMzJylcblx0fVxuXG5cdHJlbmRlcigpIHtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbWVyLWZlZWRiYWNrIGNmLWhnaHRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjZi1jYXJkXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjZi1ib2R5XCI+XG5cdFx0XHRcdFx0XHQgPHAgY2xhc3NOYW1lPVwiY2YtcHJnaFwiPkhvdyBoYXZlIHlvdXIgc3ltcHRvbXMgaW1wcm92ZWQgd2l0aCBvdXIgdHJlYXRtZW50Pyo8L3A+ICBcblx0XHQgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNmLWxpZ2h0LXR4dFwiPlJhdGUgb24gYSBzY2FsZSBmcm9tIDEgLSA1LCB3aGVyZSA1IGlzIHBlcmZlY3RseSByZWNvdmVyZWQvaGVhbHRoeTwvc3Bhbj5cblx0XHQgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjZi1yYXRpbmcgY3Vyc29yLXBudHJcIj5cblx0XHQgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpPT50aGlzLnNldFN0YXRlKHtmZWVkYmFjazogMX0pfT5cblx0XHQgICAgICAgICAgICAgICAgXHR7XG5cdFx0ICAgICAgICAgICAgICAgIFx0XHR0aGlzLnN0YXRlLmZlZWRiYWNrPj0xP1xuXHRcdCAgICAgICAgICAgICAgICBcdFx0PGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9zdGFyLW9yYW5nZS5wbmdcIiBhbHQ9XCJzdGFyXCIgY2xhc3NOYW1lPVwiY2YtcmF0aW5nLWltZ1wiLz5cblx0XHQgICAgICAgICAgICAgICAgICAgIFx0OjxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc3Rhci1ncmV5LnBuZ1wiIGFsdD1cInN0YXJcIiBjbGFzc05hbWU9XCJjZi1yYXRpbmctaW1nXCIvPlx0XG5cdFx0ICAgICAgICAgICAgICAgIFx0fVxuXHRcdCAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2YtcmF0aW5nLXZhbFwiPjE8L3NwYW4+XG5cdFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy10eHRcIj5Xb3JzZTwvZGl2PlxuXHRcdCAgICAgICAgICAgICAgICA8L2xpPlxuXHRcdCAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCk9PnRoaXMuc2V0U3RhdGUoe2ZlZWRiYWNrOiAyfSl9PlxuXHRcdCAgICAgICAgICAgICAgICAgICAge1xuXHRcdCAgICAgICAgICAgICAgICBcdFx0dGhpcy5zdGF0ZS5mZWVkYmFjaz49Mj9cblx0XHQgICAgICAgICAgICAgICAgXHRcdDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc3Rhci1vcmFuZ2UucG5nXCIgYWx0PVwic3RhclwiIGNsYXNzTmFtZT1cImNmLXJhdGluZy1pbWdcIi8+XG5cdFx0ICAgICAgICAgICAgICAgICAgICBcdDo8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3N0YXItZ3JleS5wbmdcIiBhbHQ9XCJzdGFyXCIgY2xhc3NOYW1lPVwiY2YtcmF0aW5nLWltZ1wiLz5cdFxuXHRcdCAgICAgICAgICAgICAgICBcdH1cblx0XHQgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNmLXJhdGluZy12YWxcIj4yPC9zcGFuPlxuXHRcdCAgICAgICAgICAgICAgICA8L2xpPlxuXHRcdCAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCk9PnRoaXMuc2V0U3RhdGUoe2ZlZWRiYWNrOiAzfSl9PlxuXHRcdCAgICAgICAgICAgICAgICAgICAge1xuXHRcdCAgICAgICAgICAgICAgICBcdFx0dGhpcy5zdGF0ZS5mZWVkYmFjaz49Mz9cblx0XHQgICAgICAgICAgICAgICAgXHRcdDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc3Rhci1vcmFuZ2UucG5nXCIgYWx0PVwic3RhclwiIGNsYXNzTmFtZT1cImNmLXJhdGluZy1pbWdcIi8+XG5cdFx0ICAgICAgICAgICAgICAgICAgICBcdDo8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3N0YXItZ3JleS5wbmdcIiBhbHQ9XCJzdGFyXCIgY2xhc3NOYW1lPVwiY2YtcmF0aW5nLWltZ1wiLz5cdFxuXHRcdCAgICAgICAgICAgICAgICBcdH1cblx0XHQgICAgICAgICAgICAgICAgXHQ8c3BhbiBjbGFzc05hbWU9XCJjZi1yYXRpbmctdmFsXCI+Mzwvc3Bhbj5cblx0XHQgICAgICAgICAgICAgICAgPC9saT5cblx0XHQgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpPT50aGlzLnNldFN0YXRlKHtmZWVkYmFjazogNH0pfT5cblx0XHQgICAgICAgICAgICAgICAgICAgIHtcblx0XHQgICAgICAgICAgICAgICAgXHRcdHRoaXMuc3RhdGUuZmVlZGJhY2s+PTQ/XG5cdFx0ICAgICAgICAgICAgICAgIFx0XHQ8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3N0YXItb3JhbmdlLnBuZ1wiIGFsdD1cInN0YXJcIiBjbGFzc05hbWU9XCJjZi1yYXRpbmctaW1nXCIvPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgXHQ6PGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9zdGFyLWdyZXkucG5nXCIgYWx0PVwic3RhclwiIGNsYXNzTmFtZT1cImNmLXJhdGluZy1pbWdcIi8+XHRcblx0XHQgICAgICAgICAgICAgICAgXHR9XG5cdFx0ICAgICAgICAgICAgICAgIFx0PHNwYW4gY2xhc3NOYW1lPVwiY2YtcmF0aW5nLXZhbFwiPjQ8L3NwYW4+XG5cdFx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdFx0ICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7ZmVlZGJhY2s6IDV9KX0+XG5cdFx0ICAgICAgICAgICAgICAgICAgICB7XG5cdFx0ICAgICAgICAgICAgICAgIFx0XHR0aGlzLnN0YXRlLmZlZWRiYWNrPj01P1xuXHRcdCAgICAgICAgICAgICAgICBcdFx0PGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9zdGFyLW9yYW5nZS5wbmdcIiBhbHQ9XCJzdGFyXCIgY2xhc3NOYW1lPVwiY2YtcmF0aW5nLWltZ1wiLz5cblx0XHQgICAgICAgICAgICAgICAgICAgIFx0OjxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc3Rhci1ncmV5LnBuZ1wiIGFsdD1cInN0YXJcIiBjbGFzc05hbWU9XCJjZi1yYXRpbmctaW1nXCIvPlx0XG5cdFx0ICAgICAgICAgICAgICAgIFx0fVxuXHRcdCAgICAgICAgICAgICAgICBcdDxzcGFuIGNsYXNzTmFtZT1cImNmLXJhdGluZy12YWxcIj41PC9zcGFuPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctdHh0XCI+RmFudGFzdGljPC9kaXY+XG5cdFx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdFx0ICAgICAgICAgICAgIDwvdWw+IFxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2YtZm9vdGVyXCI+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvY2hhdC9mZWVkYmFjaycpfSBjbGFzc05hbWU9XCJjZi1idG4gY2YtcHJldlwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3JpZ2h0X2Fycm93LnBuZ1wiIGFsdD1cInItYXJyb3dcIiBjbGFzc05hbWU9XCJjZi1pbWcgY2Ytcm90YXRlXCIgLz5cblx0XHRcdFx0XHRcdFx0UFJFVklPVVNcblx0XHQgICAgICAgICAgICAgICA8L2E+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIG9uQ2xpY2s9e3RoaXMuc2F2ZUZlZWRCYWNrLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImNmLWJ0biBjZi1uZXh0XCI+TkVYVFxuXHRcdCAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3JpZ2h0X2Fycm93LnBuZ1wiIGFsdD1cInItYXJyb3dcIiBjbGFzc05hbWU9XCJjZi1pbWdcIiAvPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0UXVlc3Rpb24yIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuXG5jbGFzcyBDaGF0UXVlc3Rpb24zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZT17XG5cdFx0XHRmZWVkYmFjazpudWxsXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHRsZXQgZGF0YSA9IHtcblxuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NoYXQnLCAnQWN0aW9uJzogJ0NoYXRRdWVzdGlvbjNQYWdlTGFuZGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2hhdC1xdWVzdGlvbi0zLXBhZ2UtbGFuZGVkJywgXCJ1cmxcIjogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblx0XHQvKmlmKHRoaXMucHJvcHMuY2hhdF9mZWVkYmFjayl7XG5cdFx0XHRsZXQgZmVlZGJhY2sgPSB0aGlzLnByb3BzLmNoYXRfZmVlZGJhY2suZmlsdGVyKHg9PngudHlwZS5pbmNsdWRlcygncXVlczMnKSlcblx0XHRcdGlmKGZlZWRiYWNrLmxlbmd0aCl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2ZlZWRiYWNrOiBmZWVkYmFja1swXS5kYXRhfSlcblx0XHRcdH1cblx0XHR9XG4qL1x0fVxuXG5cdHNhdmVGZWVkQmFjayhkYXRhKXtcblx0XHRpZighdGhpcy5zdGF0ZS5mZWVkYmFjaykge1xuXHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBhbnN3ZXIgdGhlIFF1ZXN0aW9uXCIgfSlcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRkYXRhID0ge1xuXHRcdFx0ZmVlZGJhY2s6IHRoaXMuc3RhdGUuZmVlZGJhY2ssXG5cdFx0XHRxdWVzdGlvbjonSG93IGxpa2VseSBhcmUgeW91IHRvIHJlY29tbWVuZCB1cyB0byB5b3VyIGZyaWVuZHMgb3IgZmFtaWx5Pydcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5zYXZlQ2hhdEZlZWRCYWNrKCdxdWVzMycsIGRhdGEpXG5cdFx0bGV0IGd0bURhdGEgPSB7XG5cbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDaGF0JywgJ0FjdGlvbic6ICdDaGF0UXVlc3Rpb24zU3VibWl0dGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2hhdC1xdWVzdGlvbi0zLXN1Ym1pdHRlZCcsIFwidXJsXCI6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG5cdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jaGF0L2ZlZWRiYWNrL3F1ZXM0Jylcblx0fVxuXG5cdHJlbmRlcigpIHtcblxuXHRcdHJldHVybihcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tZXItZmVlZGJhY2sgY2YtaGdodFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNmLWNhcmRcIj5cblx0XHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNmLWJvZHlcIj5cblx0XHQgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNmLXByZ2hcIj5Ib3cgbGlrZWx5IGFyZSB5b3UgdG8gcmVjb21tZW5kIHVzIHRvIHlvdXIgZnJpZW5kcyBvciBmYW1pbHk/KjwvcD4gIFxuXHRcdCAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNmLXJhdGluZyBjZi1tcmdUMjAgY3Vyc29yLXBudHJcIj5cblx0XHQgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpPT50aGlzLnNldFN0YXRlKHtmZWVkYmFjazogMX0pfT5cblx0XHQgICAgICAgICAgICAgICAgXHR7XG5cdFx0ICAgICAgICAgICAgICAgIFx0XHR0aGlzLnN0YXRlLmZlZWRiYWNrID49IDE/XG5cdFx0ICAgICAgICAgICAgICAgIFx0XHQ8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3N0YXItb3JhbmdlLnBuZ1wiIGFsdD1cInN0YXJcIiBjbGFzc05hbWU9XCJjZi1yYXRpbmctaW1nXCIvPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgXHQ6PGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9zdGFyLWdyZXkucG5nXCIgYWx0PVwic3RhclwiIGNsYXNzTmFtZT1cImNmLXJhdGluZy1pbWdcIi8+XG5cdFx0ICAgICAgICAgICAgICAgICAgICBcblx0XHQgICAgICAgICAgICAgICAgXHR9XG5cdFx0ICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjZi1yYXRpbmctdmFsXCI+MTwvc3Bhbj5cblx0XHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLXR4dFwiPk5ldmVyPC9kaXY+XG5cdFx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdFx0ICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7ZmVlZGJhY2s6IDJ9KX0+XG5cdFx0ICAgICAgICAgICAgICAgIFx0e1xuXHRcdCAgICAgICAgICAgICAgICBcdFx0dGhpcy5zdGF0ZS5mZWVkYmFjayA+PSAyP1xuXHRcdCAgICAgICAgICAgICAgICBcdFx0PGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9zdGFyLW9yYW5nZS5wbmdcIiBhbHQ9XCJzdGFyXCIgY2xhc3NOYW1lPVwiY2YtcmF0aW5nLWltZ1wiLz5cblx0XHQgICAgICAgICAgICAgICAgICAgIFx0OjxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc3Rhci1ncmV5LnBuZ1wiIGFsdD1cInN0YXJcIiBjbGFzc05hbWU9XCJjZi1yYXRpbmctaW1nXCIvPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgXG5cdFx0ICAgICAgICAgICAgICAgIFx0fVxuXHRcdCAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2YtcmF0aW5nLXZhbFwiPjI8L3NwYW4+XG5cdFx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdFx0ICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7ZmVlZGJhY2s6IDN9KX0+XG5cdFx0ICAgICAgICAgICAgICAgIFx0e1xuXHRcdCAgICAgICAgICAgICAgICBcdFx0dGhpcy5zdGF0ZS5mZWVkYmFjayA+PSAzP1xuXHRcdCAgICAgICAgICAgICAgICBcdFx0PGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9zdGFyLW9yYW5nZS5wbmdcIiBhbHQ9XCJzdGFyXCIgY2xhc3NOYW1lPVwiY2YtcmF0aW5nLWltZ1wiLz5cblx0XHQgICAgICAgICAgICAgICAgICAgIFx0OjxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc3Rhci1ncmV5LnBuZ1wiIGFsdD1cInN0YXJcIiBjbGFzc05hbWU9XCJjZi1yYXRpbmctaW1nXCIvPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgXG5cdFx0ICAgICAgICAgICAgICAgIFx0fVxuXHRcdCAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2YtcmF0aW5nLXZhbFwiPjM8L3NwYW4+XG5cdFx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdFx0ICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7ZmVlZGJhY2s6IDR9KX0+XG5cdFx0ICAgICAgICAgICAgICAgIFx0e1xuXHRcdCAgICAgICAgICAgICAgICBcdFx0dGhpcy5zdGF0ZS5mZWVkYmFjayA+PTQ/XG5cdFx0ICAgICAgICAgICAgICAgIFx0XHQ8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3N0YXItb3JhbmdlLnBuZ1wiIGFsdD1cInN0YXJcIiBjbGFzc05hbWU9XCJjZi1yYXRpbmctaW1nXCIvPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgXHQ6PGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9zdGFyLWdyZXkucG5nXCIgYWx0PVwic3RhclwiIGNsYXNzTmFtZT1cImNmLXJhdGluZy1pbWdcIi8+XG5cdFx0ICAgICAgICAgICAgICAgICAgICBcblx0XHQgICAgICAgICAgICAgICAgXHR9XG5cdFx0ICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjZi1yYXRpbmctdmFsXCI+NDwvc3Bhbj5cblx0XHQgICAgICAgICAgICAgICAgPC9saT5cblx0XHQgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpPT50aGlzLnNldFN0YXRlKHtmZWVkYmFjazogNX0pfT5cblx0XHQgICAgICAgICAgICAgICAgXHR7XG5cdFx0ICAgICAgICAgICAgICAgIFx0XHR0aGlzLnN0YXRlLmZlZWRiYWNrID49IDU/XG5cdFx0ICAgICAgICAgICAgICAgIFx0XHQ8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3N0YXItb3JhbmdlLnBuZ1wiIGFsdD1cInN0YXJcIiBjbGFzc05hbWU9XCJjZi1yYXRpbmctaW1nXCIvPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgXHQ6PGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9zdGFyLWdyZXkucG5nXCIgYWx0PVwic3RhclwiIGNsYXNzTmFtZT1cImNmLXJhdGluZy1pbWdcIi8+XG5cdFx0ICAgICAgICAgICAgICAgICAgICBcblx0XHQgICAgICAgICAgICAgICAgXHR9XG5cdFx0ICAgICAgICAgICAgICAgIFx0PHNwYW4gY2xhc3NOYW1lPVwiY2YtcmF0aW5nLXZhbFwiPjU8L3NwYW4+XG5cdFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy10eHRcIj5WZXJ5IExpa2VseTwvZGl2PlxuXHRcdCAgICAgICAgICAgICAgICA8L2xpPlxuXHRcdCAgICAgICAgICAgICA8L3VsPlxuXHRcdCAgICAgICAgICAgIDwvZGl2PlxuXHRcdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2YtZm9vdGVyXCI+XG5cdFx0ICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jaGF0L2ZlZWRiYWNrL3F1ZXMyJyl9IGNsYXNzTmFtZT1cImNmLWJ0biBjZi1wcmV2XCI+IFxuXHRcdCAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3JpZ2h0X2Fycm93LnBuZ1wiIGFsdD1cInItYXJyb3dcIiBjbGFzc05hbWU9XCJjZi1pbWcgY2Ytcm90YXRlXCIgLz5cblx0XHQgICAgICAgICAgICAgICAgICAgUFJFVklPVVNcblx0XHQgICAgICAgICAgICAgICA8L2E+XG5cdFx0ICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBvbkNsaWNrPXt0aGlzLnNhdmVGZWVkQmFjay5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJjZi1idG4gY2YtbmV4dFwiPk5FWFQgXG5cdFx0ICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvcmlnaHRfYXJyb3cucG5nXCIgYWx0PVwici1hcnJvd1wiIGNsYXNzTmFtZT1cImNmLWltZ1wiIC8+XG5cdFx0ICAgICAgICAgICAgICAgPC9hPlxuXHRcdCAgICAgICAgICAgIDwvZGl2PlxuXHRcdCAgICAgICAgIDwvZGl2PlxuXHRcdCAgICAgXHQ8L2Rpdj5cblx0XHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0UXVlc3Rpb24zIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuXG5jbGFzcyBDaGF0UXVlc3Rpb240IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGU9e1xuXHRcdFx0ZmVlZGJhY2s6JycsXG5cdFx0XHR0ZXh0OicnXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHRsZXQgZGF0YSA9IHtcblxuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NoYXQnLCAnQWN0aW9uJzogJ0NoYXRRdWVzdGlvbjRQYWdlTGFuZGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2hhdC1xdWVzdGlvbi00LXBhZ2UtbGFuZGVkJywgXCJ1cmxcIjogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblx0XHQvKmlmKHRoaXMucHJvcHMuY2hhdF9mZWVkYmFjayl7XG5cdFx0XHRsZXQgZmVlZGJhY2sgPSB0aGlzLnByb3BzLmNoYXRfZmVlZGJhY2suZmlsdGVyKHg9PngudHlwZS5pbmNsdWRlcygncXVlczQnKSlcblx0XHRcdGlmKGZlZWRiYWNrLmxlbmd0aCl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2ZlZWRiYWNrOiBmZWVkYmFja1swXS5kYXRhfSlcblx0XHRcdH1cblx0XHR9Ki9cblx0fVxuXG5cdHNhdmVGZWVkQmFjaygpe1xuXHRcdGlmKCF0aGlzLnN0YXRlLmZlZWRiYWNrKSB7XG5cdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIGFuc3dlciB0aGUgUXVlc3Rpb25cIiB9KVxuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdGxldCBkYXRhID0ge1xuXHRcdFx0ZmVlZGJhY2s6IHRoaXMuc3RhdGUuZmVlZGJhY2ssXG5cdFx0XHRxdWVzdGlvbjonV2hhdCBkbyB5b3UgdGhpbmsgY2FuIGJlIGltcHJvdmVkPycsXG5cdFx0XHRmZWVkYmFja1RleHQ6IHRoaXMuc3RhdGUudGV4dFxuXHRcdH1cblx0XHR0aGlzLnByb3BzLnNhdmVDaGF0RmVlZEJhY2soJ3F1ZXM0JywgZGF0YSlcblx0XHRsZXQgZ3RtRGF0YSA9IHtcblxuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NoYXQnLCAnQWN0aW9uJzogJ0NoYXRRdWVzdGlvbjRTdWJtaXR0ZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjaGF0LXF1ZXN0aW9uLTQtc3VibWl0dGVkJywgXCJ1cmxcIjogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcblx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2NoYXQvZmVlZGJhY2svcXVlczUnKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b21lci1mZWVkYmFjayBjZi1oZ2h0XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2YtY2FyZFwiPlxuXHRcdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2YtYm9keVwiPlxuXHRcdCAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2YtcHJnaFwiPldoYXQgZG8geW91IHRoaW5rIGNhbiBiZSBpbXByb3ZlZD8qPC9wPiBcblx0XHQgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjZi1yYWRpbyBjaGF0LXJhZGlvLWFsaWduXCI+XG5cdFx0ICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUuZmVlZGJhY2suaW5jbHVkZXMoJzAnKT8nYWN0aXZlJzonJ31gfT5cblx0XHQgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjdXN0b20tcmFkaW9cIj5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjZi1yYWRpby10ZXh0XCI+QmV0dGVyIHRyZWF0bWVudDwvc3Bhbj5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eygpPT50aGlzLnNldFN0YXRlKHtmZWVkYmFjazogJzAnLCB0ZXh0OiAnQmV0dGVyIHRyZWF0bWVudCd9KX0gdHlwZT1cInJhZGlvXCIgIG5hbWU9XCJoLWltcFwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZmVlZGJhY2suaW5jbHVkZXMoJzAnKX0vPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFyayByYWRpby1jaGVja21hcmtcIj48L3NwYW4+XG5cdFx0ICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXHRcdCAgICAgICAgICAgICAgICA8L2xpPlxuXHRcdCAgICAgICAgICAgICAgICA8bGkgIGNsYXNzTmFtZT17YCR7dGhpcy5zdGF0ZS5mZWVkYmFjay5pbmNsdWRlcygnMScpPydhY3RpdmUnOicnfWB9PlxuXHRcdCAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImN1c3RvbS1yYWRpb1wiPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNmLXJhZGlvLXRleHRcIj5UaGUgZG9jdG9yIGNvdWxkIGhhdmUgZXhwbGFpbmVkIHRoZSB0cmVhdG1lbnQgYmV0dGVyPC9zcGFuPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBvbkNoYW5nZT17KCk9PnRoaXMuc2V0U3RhdGUoe2ZlZWRiYWNrOiAnMScsIHRleHQ6ICdUaGUgZG9jdG9yIGNvdWxkIGhhdmUgZXhwbGFpbmVkIHRoZSB0cmVhdG1lbnQgYmV0dGVyJ30pfSBuYW1lPVwiaC1pbXBcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmZlZWRiYWNrLmluY2x1ZGVzKCcxJyl9Lz5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmsgcmFkaW8tY2hlY2ttYXJrXCI+PC9zcGFuPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblx0XHQgICAgICAgICAgICAgICAgPC9saT5cblx0XHQgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YCR7dGhpcy5zdGF0ZS5mZWVkYmFjay5pbmNsdWRlcygnMicpPydhY3RpdmUnOicnfWB9PlxuXHRcdCAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImN1c3RvbS1yYWRpb1wiPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNmLXJhZGlvLXRleHRcIj5XYWl0IFRpbWU8L3NwYW4+XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG9uQ2hhbmdlPXsoKT0+dGhpcy5zZXRTdGF0ZSh7ZmVlZGJhY2s6ICcyJywgdGV4dDonV2FpdCBUaW1lJ30pfSAgbmFtZT1cImgtaW1wXCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5mZWVkYmFjay5pbmNsdWRlcygnMicpfS8+XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrIHJhZGlvLWNoZWNrbWFya1wiPjwvc3Bhbj5cblx0XHQgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cdFx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdFx0ICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUuZmVlZGJhY2suaW5jbHVkZXMoJzMnKT8nYWN0aXZlJzonJ31gfT5cblx0XHQgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjdXN0b20tcmFkaW9cIj5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjZi1yYWRpby10ZXh0XCI+RXZlcnl0aGluZyB3YXMgcGVyZmVjdDwvc3Bhbj5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgb25DaGFuZ2U9eygpPT50aGlzLnNldFN0YXRlKHtmZWVkYmFjazogJzMnLCB0ZXh0OidFdmVyeXRoaW5nIHdhcyBwZXJmZWN0JyB9KX0gIG5hbWU9XCJoLWltcFwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZmVlZGJhY2suaW5jbHVkZXMoJzMnKX0vPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFyayByYWRpby1jaGVja21hcmtcIj48L3NwYW4+XG5cdFx0ICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXHRcdCAgICAgICAgICAgICAgICA8L2xpPlxuXHRcdCAgICAgICAgICAgICA8L3VsPlxuXHRcdCAgICAgICAgICAgIDwvZGl2PlxuXHRcdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2YtZm9vdGVyXCI+XG5cdFx0ICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jaGF0L2ZlZWRiYWNrL3F1ZXMzJyl9IGNsYXNzTmFtZT1cImNmLWJ0biBjZi1wcmV2XCI+IFxuXHRcdCAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3JpZ2h0X2Fycm93LnBuZ1wiIGFsdD1cInItYXJyb3dcIiBjbGFzc05hbWU9XCJjZi1pbWcgY2Ytcm90YXRlXCIgLz5cblx0XHQgICAgICAgICAgICAgICAgICAgUFJFVklPVVNcblx0XHQgICAgICAgICAgICAgICA8L2E+XG5cdFx0ICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBvbkNsaWNrPXt0aGlzLnNhdmVGZWVkQmFjay5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJjZi1idG4gY2YtbmV4dFwiPk5FWFQgXG5cdFx0ICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvcmlnaHRfYXJyb3cucG5nXCIgYWx0PVwici1hcnJvd1wiIGNsYXNzTmFtZT1cImNmLWltZ1wiIC8+XG5cdFx0ICAgICAgICAgICAgICAgPC9hPlxuXHRcdCAgICAgICAgICAgIDwvZGl2PlxuXHRcdCAgICAgICAgIDwvZGl2PlxuXHRcdCAgICAgICAgPC9kaXY+XG5cdFx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhdFF1ZXN0aW9uNCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5cbmNsYXNzIENoYXRRdWVzdGlvbjUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZT17XG5cdFx0XHRmZWVkYmFjazonJ1xuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0bGV0IGRhdGEgPSB7XG5cbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDaGF0JywgJ0FjdGlvbic6ICdDaGF0UXVlc3Rpb241UGFnZUxhbmRlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NoYXQtcXVlc3Rpb24tNS1wYWdlLWxhbmRlZCcsIFwidXJsXCI6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cdFx0LyppZih0aGlzLnByb3BzLmNoYXRfZmVlZGJhY2spe1xuXHRcdFx0bGV0IGZlZWRiYWNrID0gdGhpcy5wcm9wcy5jaGF0X2ZlZWRiYWNrLmZpbHRlcih4PT54LnR5cGUuaW5jbHVkZXMoJ3F1ZXM1JykpXG5cdFx0XHRpZihmZWVkYmFjay5sZW5ndGgpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtmZWVkYmFjazogZmVlZGJhY2tbMF0uZGF0YX0pXG5cdFx0XHR9XG5cdFx0fSovXG5cdH1cblxuXG5cdHN1Ym1pdCgpe1xuXHRcdGxldCBkYXRhID0ge1xuXHRcdFx0ZmVlZGJhY2s6IHRoaXMuc3RhdGUuZmVlZGJhY2ssXG5cdFx0XHRxdWVzdGlvbjonQW55IENvbW1lbnRzPydcblx0XHR9XG5cdFx0bGV0IGZlZWRiYWNrID0gdGhpcy5wcm9wcy5jaGF0X2ZlZWRiYWNrICYmIHRoaXMucHJvcHMuY2hhdF9mZWVkYmFjay5sZW5ndGg/dGhpcy5wcm9wcy5jaGF0X2ZlZWRiYWNrLmZpbHRlcih4PT4heC50eXBlLmluY2x1ZGVzKCdxdWVzNScpKTpbXVxuXHRcdGZlZWRiYWNrLnB1c2goe3R5cGU6ICdxdWVzNScsIGRhdGE6IGRhdGF9KVxuXHRcdGZlZWRiYWNrLnB1c2goe2NyZWF0ZWRPbjogbmV3IERhdGUoKX0pXG5cdFx0dGhpcy5wcm9wcy5zYXZlQ2hhdEZlZWRCYWNrKCdxdWVzNScsIGRhdGEpXG5cdFx0bGV0IHJvb21JZCA9IHRoaXMucHJvcHMuY2hhdF9mZWVkYmFja19yb29tSWRcblxuXHRcdGxldCBwb3N0RGF0YSA9IHtcblx0XHRcdHJpZDogcm9vbUlkLFxuXHRcdFx0ZGF0YTogZmVlZGJhY2tcblx0XHR9XG5cdFx0bGV0IGd0bURhdGEgPSB7XG5cbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDaGF0JywgJ0FjdGlvbic6ICdDaGF0UXVlc3Rpb241U3VibWl0dGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2hhdC1xdWVzdGlvbi01LXN1Ym1pdHRlZCcsIFwidXJsXCI6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG5cblx0XHR0aGlzLnByb3BzLnN1Ym1pdENoYXRGZWVkYmFjayhwb3N0RGF0YSlcblx0XHRzZXRUaW1lb3V0KCgpPT57XG5cdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2NoYXQvZmVlZGJhY2svdGhhbmtzJylcdFxuXHRcdH0sMTAwMClcblx0XHRcblx0XHRcblx0fVxuXG5cdHJlbmRlcigpIHtcblxuXHRcdHJldHVybihcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tZXItZmVlZGJhY2sgY2YtaGdodFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNmLWNhcmRcIj5cblx0XHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNmLWJvZHlcIj5cblx0XHQgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNmLXByZ2hcIj5BbnkgQ29tbWVudHM/PC9wPiBcblx0XHQgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJjZi10ZXh0YXJlYVwiIHZhbHVlPXt0aGlzLnN0YXRlLmZlZWRiYWNrfSBwbGFjZWhvbGRlcj1cIlR5cGUgaGVyZS4uLlwiIG9uQ2hhbmdlPXsoZSk9PnRoaXMuc2V0U3RhdGUoe2ZlZWRiYWNrOiBlLnRhcmdldC52YWx1ZX0pfT48L3RleHRhcmVhPlxuXHRcdCAgICAgICAgICAgIDwvZGl2PlxuXHRcdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2YtZm9vdGVyXCI+XG5cdFx0ICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzc05hbWU9XCJjZi1idG4gY2YtcHJldlwiIG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2NoYXQvZmVlZGJhY2svcXVlczQnKX0+IFxuXHRcdCAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3JpZ2h0X2Fycm93LnBuZ1wiIGFsdD1cInItYXJyb3dcIiBjbGFzc05hbWU9XCJjZi1pbWcgY2Ytcm90YXRlXCIgLz5cblx0XHQgICAgICAgICAgICAgICAgICAgUFJFVklPVVNcblx0XHQgICAgICAgICAgICAgICA8L2E+XG5cdFx0ICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBvbkNsaWNrPXt0aGlzLnN1Ym1pdC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJjZi1idG4gY2YtbmV4dCBjZi1zdWJtaXRcIj5TVUJNSVQgXG5cdFx0ICAgICAgICAgICAgICAgPC9hPlxuXHRcdCAgICAgICAgICAgIDwvZGl2PlxuXHRcdCAgICAgICAgIDwvZGl2PlxuXHQgICAgICAgICA8L2Rpdj5cblx0XHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0UXVlc3Rpb241IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBDaGF0VGhhbmtzVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0cmVuZGVyKCl7XG5cblx0XHRyZXR1cm4oXG5cdFx0ICAgPGRpdiBjbGFzc05hbWU9XCJjZi1oZ2h0XCI+XG5cdCAgICBcdDxkaXYgY2xhc3NOYW1lPVwidGhhbmtzLWRpdlwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3RpY2sucG5nXCIgY2xhc3NOYW1lPVwiY2YtdGljay1pbWdcIiBhbHQ9XCJ0aWNrLWltZ1wiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2YtdGhhbmtzLXRleHRcIj5UaGFuayBZb3UgITwvZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjZi10bmFua3MtcHJnaFwiPkZlZWRiYWNrIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHkuIFBsZWFzZSBmb2xsb3ctdXAgYXMgcGVyIG91ciBkb2N0b3IncyBhZHZpY2UuPC9wPlxuICAgICAgICAgIFx0PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cblx0XHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0VGhhbmtzVmlldyIsImltcG9ydCBDaGF0RmVlZEJhY2tWaWV3IGZyb20gJy4vQ2hhdEZlZWRCYWNrVmlldy5qcydcbmV4cG9ydCBkZWZhdWx0IENoYXRGZWVkQmFja1ZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgQ2hhdEZlZWRCYWNrVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvQ2hhdEZlZWRCYWNrVmlldydcbmltcG9ydCB7IHNhdmVDaGF0RmVlZEJhY2ssIHN1Ym1pdENoYXRGZWVkYmFjaywgc2F2ZUNoYXRGZWVkYmFja1Jvb21JZCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG5jbGFzcyBDaGF0RmVlZEJhY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0Y29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cdFx0aWYocGFyc2VkLnJpZCl7XG5cdFx0XHRsZXQgcmlkID0gcGFyc2VkLnJpZFxuXHRcdFx0dHJ5e1xuXHRcdFx0XHRpZih3aW5kb3cgJiYgd2luZG93LmF0b2IocmlkKSApe1xuXHRcdFx0XHRcdHJpZCA9IHdpbmRvdy5hdG9iKHJpZClcblx0XHRcdFx0fVxuXHRcdFx0fWNhdGNoKGUpe1xuXHRcdFx0XHRcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0dGhpcy5wcm9wcy5zYXZlQ2hhdEZlZWRiYWNrUm9vbUlkKHJpZClcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8Q2hhdEZlZWRCYWNrVmlldyB7Li4udGhpcy5wcm9wc30gLz5cblx0XHRcdClcblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+e1xuXG5cdGNvbnN0e1xuXHRcdGNoYXRfZmVlZGJhY2ssXG5cdFx0Y2hhdF9mZWVkYmFja19yb29tSWRcblx0fSA9IHN0YXRlLlVTRVJcblxuXHRyZXR1cm57XG5cdFx0Y2hhdF9mZWVkYmFjayxcblx0XHRjaGF0X2ZlZWRiYWNrX3Jvb21JZFxuXHR9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9ICggZGlzcGF0Y2gpID0+IHtcblxuXHRyZXR1cm57XG5cdFx0c2F2ZUNoYXRGZWVkQmFjazogKHR5cGUsIGRhdGEpID0+IGRpc3BhdGNoKHNhdmVDaGF0RmVlZEJhY2sodHlwZSwgZGF0YSkpLFxuXHRcdHN1Ym1pdENoYXRGZWVkYmFjazogKHBvc3REYXRhKSA9PiBkaXNwYXRjaChzdWJtaXRDaGF0RmVlZGJhY2socG9zdERhdGEpKSxcblx0XHRzYXZlQ2hhdEZlZWRiYWNrUm9vbUlkOiAocmlkKSA9PiBkaXNwYXRjaChzYXZlQ2hhdEZlZWRiYWNrUm9vbUlkKHJpZCkpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2hhdEZlZWRCYWNrKSJdLCJzb3VyY2VSb290IjoiIn0=