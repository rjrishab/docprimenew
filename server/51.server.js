exports.ids = [51];
exports.modules = {

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ChatFeedBack extends _react2.default.Component {

	componentDidMount() {
		let data = {

			'Category': 'Chat', 'Action': 'ChatFeedbackPageLanded', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'chat-feedback-page-landed', "url": window.location.pathname
		};
		_gtm2.default.sendEvent({ data: data });
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
						{ href: 'javascript:void(0);', onClick: () => this.props.history.push('/chat/feedback/ques1'), className: 'cf-btn cf-only-btn' },
						'NEXT',
						_react2.default.createElement('img', { src: '/assets/images/right_arrow.png', alt: 'r-arrow', className: 'cf-img' })
					)
				)
			)
		);
	}
}

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

var _react = __webpack_require__(/*! react */ "react");

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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ChatFeedBackView extends _react2.default.Component {

    render() {

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: `${this.props.match.url}/`, render: props => {
                    return _react2.default.createElement(_ChatQuestion2.default, _extends({}, this.props, props));
                } }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: `${this.props.match.url}/ques1`, render: props => {
                    return _react2.default.createElement(_ChatQuestion2.default, _extends({}, this.props, props));
                } }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: `${this.props.match.url}/ques2`, render: props => {
                    return _react2.default.createElement(_ChatQuestion4.default, _extends({}, this.props, props));
                } }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: `${this.props.match.url}/ques3`, render: props => {
                    return _react2.default.createElement(_ChatQuestion6.default, _extends({}, this.props, props));
                } }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: `${this.props.match.url}/ques4`, render: props => {
                    return _react2.default.createElement(_ChatQuestion8.default, _extends({}, this.props, props));
                } }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: `${this.props.match.url}/ques5`, render: props => {
                    return _react2.default.createElement(_ChatQuestion10.default, _extends({}, this.props, props));
                } }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: `${this.props.match.url}/thanks`, render: props => {
                    return _react2.default.createElement(_ChatThanksPage2.default, _extends({}, this.props, props));
                } })
        );
    }
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ChatQuestion1 extends _react2.default.Component {
	constructor(props) {
		super(props);
		this.state = {
			feedback: ''
		};
	}

	componentDidMount() {
		let data = {

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

	saveFeedBack() {
		if (!this.state.feedback) {
			_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please answer the Question" });
			return;
		}
		let data = {
			feedback: this.state.feedback,
			question: 'Have you taken your prescribed medicines, regularly?'
		};
		this.props.saveChatFeedBack('ques1', data);
		let gtmData = {

			'Category': 'Chat', 'Action': 'ChatQuestion1Submitted', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'chat-question-1-submitted', "url": window.location.pathname
		};
		_gtm2.default.sendEvent({ data: gtmData });
		this.props.history.push('/chat/feedback/ques2');
	}

	render() {

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
							{ href: 'javascript:void(0);', onClick: () => this.setState({ feedback: 'Yes' }), className: `cf-ans ${this.state.feedback == 'Yes' ? 'active' : ''}` },
							'YES'
						),
						_react2.default.createElement(
							'a',
							{ href: 'javascript:void(0);', onClick: () => this.setState({ feedback: 'No' }), className: `cf-ans ${this.state.feedback == 'No' ? 'active' : ''}` },
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ChatQuestion2 extends _react2.default.Component {
	constructor(props) {
		super(props);
		this.state = {
			feedback: null
		};
	}

	componentDidMount() {
		let data = {

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

	saveFeedBack(data) {
		if (!this.state.feedback) {
			_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please answer the Question" });
			return;
		}
		data = {
			feedback: this.state.feedback,
			question: 'How have your symptoms improved with our treatment?'
		};
		this.props.saveChatFeedBack('ques2', data);
		let gtmData = {

			'Category': 'Chat', 'Action': 'ChatQuestion2Submitted', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'chat-question-2-submitted', "url": window.location.pathname
		};
		_gtm2.default.sendEvent({ data: gtmData });
		this.props.history.push('/chat/feedback/ques3');
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
							{ onClick: () => this.setState({ feedback: 1 }) },
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
							{ onClick: () => this.setState({ feedback: 2 }) },
							this.state.feedback >= 2 ? _react2.default.createElement('img', { src: '/assets/images/star-orange.png', alt: 'star', className: 'cf-rating-img' }) : _react2.default.createElement('img', { src: '/assets/images/star-grey.png', alt: 'star', className: 'cf-rating-img' }),
							_react2.default.createElement(
								'span',
								{ className: 'cf-rating-val' },
								'2'
							)
						),
						_react2.default.createElement(
							'li',
							{ onClick: () => this.setState({ feedback: 3 }) },
							this.state.feedback >= 3 ? _react2.default.createElement('img', { src: '/assets/images/star-orange.png', alt: 'star', className: 'cf-rating-img' }) : _react2.default.createElement('img', { src: '/assets/images/star-grey.png', alt: 'star', className: 'cf-rating-img' }),
							_react2.default.createElement(
								'span',
								{ className: 'cf-rating-val' },
								'3'
							)
						),
						_react2.default.createElement(
							'li',
							{ onClick: () => this.setState({ feedback: 4 }) },
							this.state.feedback >= 4 ? _react2.default.createElement('img', { src: '/assets/images/star-orange.png', alt: 'star', className: 'cf-rating-img' }) : _react2.default.createElement('img', { src: '/assets/images/star-grey.png', alt: 'star', className: 'cf-rating-img' }),
							_react2.default.createElement(
								'span',
								{ className: 'cf-rating-val' },
								'4'
							)
						),
						_react2.default.createElement(
							'li',
							{ onClick: () => this.setState({ feedback: 5 }) },
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
						{ href: 'javascript:void(0);', onClick: () => this.props.history.push('/chat/feedback'), className: 'cf-btn cf-prev' },
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ChatQuestion3 extends _react2.default.Component {

	constructor(props) {
		super(props);
		this.state = {
			feedback: null
		};
	}

	componentDidMount() {
		let data = {

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

	saveFeedBack(data) {
		if (!this.state.feedback) {
			_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please answer the Question" });
			return;
		}
		data = {
			feedback: this.state.feedback,
			question: 'How likely are you to recommend us to your friends or family?'
		};
		this.props.saveChatFeedBack('ques3', data);
		let gtmData = {

			'Category': 'Chat', 'Action': 'ChatQuestion3Submitted', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'chat-question-3-submitted', "url": window.location.pathname
		};
		_gtm2.default.sendEvent({ data: gtmData });
		this.props.history.push('/chat/feedback/ques4');
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
						'p',
						{ className: 'cf-prgh' },
						'How likely are you to recommend us to your friends or family?*'
					),
					_react2.default.createElement(
						'ul',
						{ className: 'cf-rating cf-mrgT20 cursor-pntr' },
						_react2.default.createElement(
							'li',
							{ onClick: () => this.setState({ feedback: 1 }) },
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
							{ onClick: () => this.setState({ feedback: 2 }) },
							this.state.feedback >= 2 ? _react2.default.createElement('img', { src: '/assets/images/star-orange.png', alt: 'star', className: 'cf-rating-img' }) : _react2.default.createElement('img', { src: '/assets/images/star-grey.png', alt: 'star', className: 'cf-rating-img' }),
							_react2.default.createElement(
								'span',
								{ className: 'cf-rating-val' },
								'2'
							)
						),
						_react2.default.createElement(
							'li',
							{ onClick: () => this.setState({ feedback: 3 }) },
							this.state.feedback >= 3 ? _react2.default.createElement('img', { src: '/assets/images/star-orange.png', alt: 'star', className: 'cf-rating-img' }) : _react2.default.createElement('img', { src: '/assets/images/star-grey.png', alt: 'star', className: 'cf-rating-img' }),
							_react2.default.createElement(
								'span',
								{ className: 'cf-rating-val' },
								'3'
							)
						),
						_react2.default.createElement(
							'li',
							{ onClick: () => this.setState({ feedback: 4 }) },
							this.state.feedback >= 4 ? _react2.default.createElement('img', { src: '/assets/images/star-orange.png', alt: 'star', className: 'cf-rating-img' }) : _react2.default.createElement('img', { src: '/assets/images/star-grey.png', alt: 'star', className: 'cf-rating-img' }),
							_react2.default.createElement(
								'span',
								{ className: 'cf-rating-val' },
								'4'
							)
						),
						_react2.default.createElement(
							'li',
							{ onClick: () => this.setState({ feedback: 5 }) },
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
						{ href: 'javascript:void(0);', onClick: () => this.props.history.push('/chat/feedback/ques2'), className: 'cf-btn cf-prev' },
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ChatQuestion4 extends _react2.default.Component {
	constructor(props) {
		super(props);
		this.state = {
			feedback: '',
			text: ''
		};
	}

	componentDidMount() {
		let data = {

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

	saveFeedBack() {
		if (!this.state.feedback) {
			_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please answer the Question" });
			return;
		}
		let data = {
			feedback: this.state.feedback,
			question: 'What do you think can be improved?',
			feedbackText: this.state.text
		};
		this.props.saveChatFeedBack('ques4', data);
		let gtmData = {

			'Category': 'Chat', 'Action': 'ChatQuestion4Submitted', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'chat-question-4-submitted', "url": window.location.pathname
		};
		_gtm2.default.sendEvent({ data: gtmData });
		this.props.history.push('/chat/feedback/ques5');
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
						'p',
						{ className: 'cf-prgh' },
						'What do you think can be improved?*'
					),
					_react2.default.createElement(
						'ul',
						{ className: 'cf-radio chat-radio-align' },
						_react2.default.createElement(
							'li',
							{ className: `${this.state.feedback.includes('0') ? 'active' : ''}` },
							_react2.default.createElement(
								'label',
								{ className: 'custom-radio' },
								_react2.default.createElement(
									'span',
									{ className: 'cf-radio-text' },
									'Better treatment'
								),
								_react2.default.createElement('input', { onChange: () => this.setState({ feedback: '0', text: 'Better treatment' }), type: 'radio', name: 'h-imp', checked: this.state.feedback.includes('0') }),
								_react2.default.createElement('span', { className: 'checkmark radio-checkmark' })
							)
						),
						_react2.default.createElement(
							'li',
							{ className: `${this.state.feedback.includes('1') ? 'active' : ''}` },
							_react2.default.createElement(
								'label',
								{ className: 'custom-radio' },
								_react2.default.createElement(
									'span',
									{ className: 'cf-radio-text' },
									'The doctor could have explained the treatment better'
								),
								_react2.default.createElement('input', { type: 'radio', onChange: () => this.setState({ feedback: '1', text: 'The doctor could have explained the treatment better' }), name: 'h-imp', checked: this.state.feedback.includes('1') }),
								_react2.default.createElement('span', { className: 'checkmark radio-checkmark' })
							)
						),
						_react2.default.createElement(
							'li',
							{ className: `${this.state.feedback.includes('2') ? 'active' : ''}` },
							_react2.default.createElement(
								'label',
								{ className: 'custom-radio' },
								_react2.default.createElement(
									'span',
									{ className: 'cf-radio-text' },
									'Wait Time'
								),
								_react2.default.createElement('input', { type: 'radio', onChange: () => this.setState({ feedback: '2', text: 'Wait Time' }), name: 'h-imp', checked: this.state.feedback.includes('2') }),
								_react2.default.createElement('span', { className: 'checkmark radio-checkmark' })
							)
						),
						_react2.default.createElement(
							'li',
							{ className: `${this.state.feedback.includes('3') ? 'active' : ''}` },
							_react2.default.createElement(
								'label',
								{ className: 'custom-radio' },
								_react2.default.createElement(
									'span',
									{ className: 'cf-radio-text' },
									'Everything was perfect'
								),
								_react2.default.createElement('input', { type: 'radio', onChange: () => this.setState({ feedback: '3', text: 'Everything was perfect' }), name: 'h-imp', checked: this.state.feedback.includes('3') }),
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
						{ href: 'javascript:void(0);', onClick: () => this.props.history.push('/chat/feedback/ques3'), className: 'cf-btn cf-prev' },
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ChatQuestion5 extends _react2.default.Component {
	constructor(props) {
		super(props);
		this.state = {
			feedback: ''
		};
	}

	componentDidMount() {
		let data = {

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

	submit() {
		let data = {
			feedback: this.state.feedback,
			question: 'Any Comments?'
		};
		let feedback = this.props.chat_feedback && this.props.chat_feedback.length ? this.props.chat_feedback.filter(x => !x.type.includes('ques5')) : [];
		feedback.push({ type: 'ques5', data: data });
		feedback.push({ createdOn: new Date() });
		this.props.saveChatFeedBack('ques5', data);
		let roomId = this.props.chat_feedback_roomId;

		let postData = {
			rid: roomId,
			data: feedback
		};
		let gtmData = {

			'Category': 'Chat', 'Action': 'ChatQuestion5Submitted', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'chat-question-5-submitted', "url": window.location.pathname
		};
		_gtm2.default.sendEvent({ data: gtmData });

		this.props.submitChatFeedback(postData);
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
						'p',
						{ className: 'cf-prgh' },
						'Any Comments?'
					),
					_react2.default.createElement('textarea', { className: 'cf-textarea', value: this.state.feedback, placeholder: 'Type here...', onChange: e => this.setState({ feedback: e.target.value }) })
				),
				_react2.default.createElement(
					'div',
					{ className: 'cf-footer' },
					_react2.default.createElement(
						'a',
						{ href: 'javascript:void(0);', className: 'cf-btn cf-prev', onClick: () => this.props.history.push('/chat/feedback/ques4') },
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ChatThanksView extends _react2.default.Component {

	render() {

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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _ChatFeedBackView = __webpack_require__(/*! ../../components/commons/ChatFeedBackView */ "./dev/js/components/commons/ChatFeedBackView/index.js");

var _ChatFeedBackView2 = _interopRequireDefault(_ChatFeedBackView);

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class ChatFeedBack extends _react2.default.Component {

	componentDidMount() {
		const parsed = queryString.parse(this.props.location.search);
		if (parsed.rid) {
			let rid = parsed.rid;
			try {
				if (window && window.atob(rid)) {
					rid = window.atob(rid);
				}
			} catch (e) {}

			this.props.saveChatFeedbackRoomId(rid);
		}
	}

	render() {
		return _react2.default.createElement(_ChatFeedBackView2.default, this.props);
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
		saveChatFeedBack: (type, data) => dispatch((0, _index.saveChatFeedBack)(type, data)),
		submitChatFeedback: postData => dispatch((0, _index.submitChatFeedback)(postData)),
		saveChatFeedbackRoomId: rid => dispatch((0, _index.saveChatFeedbackRoomId)(rid))
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ChatFeedBack);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0NoYXRGZWVkQmFja1ZpZXcvQ2hhdEZlZWRCYWNrLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvQ2hhdEZlZWRCYWNrVmlldy9DaGF0RmVlZEJhY2tWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvQ2hhdEZlZWRCYWNrVmlldy9DaGF0UXVlc3Rpb24xLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvQ2hhdEZlZWRCYWNrVmlldy9DaGF0UXVlc3Rpb24yLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvQ2hhdEZlZWRCYWNrVmlldy9DaGF0UXVlc3Rpb24zLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvQ2hhdEZlZWRCYWNrVmlldy9DaGF0UXVlc3Rpb240LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvQ2hhdEZlZWRCYWNrVmlldy9DaGF0UXVlc3Rpb241LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvQ2hhdEZlZWRCYWNrVmlldy9DaGF0VGhhbmtzUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0NoYXRGZWVkQmFja1ZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy9DaGF0RmVlZGJhY2suanMiXSwibmFtZXMiOlsiQ2hhdEZlZWRCYWNrIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRNb3VudCIsImRhdGEiLCJHVE0iLCJnZXRVc2VySWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic2VuZEV2ZW50IiwicmVuZGVyIiwicHJvcHMiLCJoaXN0b3J5IiwicHVzaCIsIkNoYXRGZWVkQmFja1ZpZXciLCJtYXRjaCIsInVybCIsIkNoYXRRdWVzdGlvbjEiLCJjb25zdHJ1Y3RvciIsInN0YXRlIiwiZmVlZGJhY2siLCJzYXZlRmVlZEJhY2siLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJ0ZXh0IiwicXVlc3Rpb24iLCJzYXZlQ2hhdEZlZWRCYWNrIiwiZ3RtRGF0YSIsInNldFN0YXRlIiwiYmluZCIsIkNoYXRRdWVzdGlvbjIiLCJDaGF0UXVlc3Rpb24zIiwiQ2hhdFF1ZXN0aW9uNCIsImZlZWRiYWNrVGV4dCIsImluY2x1ZGVzIiwiQ2hhdFF1ZXN0aW9uNSIsInN1Ym1pdCIsImNoYXRfZmVlZGJhY2siLCJsZW5ndGgiLCJmaWx0ZXIiLCJ4IiwidHlwZSIsImNyZWF0ZWRPbiIsIkRhdGUiLCJyb29tSWQiLCJjaGF0X2ZlZWRiYWNrX3Jvb21JZCIsInBvc3REYXRhIiwicmlkIiwic3VibWl0Q2hhdEZlZWRiYWNrIiwic2V0VGltZW91dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkNoYXRUaGFua3NWaWV3IiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwicGFyc2VkIiwicGFyc2UiLCJzZWFyY2giLCJhdG9iIiwic2F2ZUNoYXRGZWVkYmFja1Jvb21JZCIsIm1hcFN0YXRlVG9Qcm9wcyIsIlVTRVIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxNQUFNQSxZQUFOLFNBQTJCQyxnQkFBTUMsU0FBakMsQ0FBMkM7O0FBRTFDQyxxQkFBbUI7QUFDbEIsTUFBSUMsT0FBTzs7QUFFRCxlQUFZLE1BRlgsRUFFbUIsVUFBVSx3QkFGN0IsRUFFdUQsY0FBY0MsY0FBSUMsU0FBSixFQUZyRSxFQUVzRixVQUFVLENBRmhHLEVBRW1HLFNBQVMsMkJBRjVHLEVBRXlJLE9BQU9DLE9BQU9DLFFBQVAsQ0FBZ0JDO0FBRmhLLEdBQVg7QUFJTUosZ0JBQUlL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QXlCM0MsTUFBTW1ELGtCQUFtQjNDLEtBQUQsSUFBVTs7QUFFakMsT0FBSztBQUNKbUIsZUFESTtBQUVKUTtBQUZJLEtBR0QzQixNQUFNNEMsSUFIVjs7QUFLQSxRQUFNO0FBQ0x6QixlQURLO0FBRUxRO0FBRkssRUFBTjtBQUlBLENBWEQ7O0FBYUEsTUFBTWtCLHFCQUF1QkMsUUFBRixJQUFlOztBQUV6QyxRQUFNO0FBQ0x0QyxvQkFBa0IsQ0FBQ2UsSUFBRCxFQUFPdkMsSUFBUCxLQUFnQjhELFNBQVMsNkJBQWlCdkIsSUFBakIsRUFBdUJ2QyxJQUF2QixDQUFULENBRDdCO0FBRUw4QyxzQkFBcUJGLFFBQUQsSUFBY2tCLFNBQVMsK0JBQW1CbEIsUUFBbkIsQ0FBVCxDQUY3QjtBQUdMYywwQkFBeUJiLEdBQUQsSUFBU2lCLFNBQVMsbUNBQXVCakIsR0FBdkIsQ0FBVDtBQUg1QixFQUFOO0FBS0EsQ0FQRDs7a0JBU2UseUJBQVFjLGVBQVIsRUFBeUJFLGtCQUF6QixFQUE2Q2pFLFlBQTdDLEMiLCJmaWxlIjoiNTEuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuY2xhc3MgQ2hhdEZlZWRCYWNrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdGxldCBkYXRhID0ge1xuXG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ2hhdCcsICdBY3Rpb24nOiAnQ2hhdEZlZWRiYWNrUGFnZUxhbmRlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NoYXQtZmVlZGJhY2stcGFnZS1sYW5kZWQnLCBcInVybFwiOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cblx0XHRyZXR1cm4oXG5cdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tZXItZmVlZGJhY2sgY2YtaGdodFwiPlxuXHQgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNmLWNhcmRcIj5cblx0ICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZi1ib2R5XCI+XG5cdCAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNmLXRpdGxlXCI+T25saW5lIGNvbnN1bHRhdGlvbiBmZWVkYmFjazwvaDI+XG5cdCAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2YtcHJnaFwiPllvdXIgZmVlZGJhY2sgd2lsbCBoZWxwIHVzIGltcHJvdmUgc2VydmljZXMgZm9yIHRoZSB0aG91c2FuZHMgb2YgcGF0aWVudHMgdmlzaXRpbmcgdXMgZXZlcnlkYXkuPC9wPiAgXG5cdCAgICAgICAgICAgIDwvZGl2PlxuXHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNmLWZvb3RlclwiPlxuXHQgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2NoYXQvZmVlZGJhY2svcXVlczEnKX0gY2xhc3NOYW1lPVwiY2YtYnRuIGNmLW9ubHktYnRuXCI+TkVYVCBcblx0ICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvcmlnaHRfYXJyb3cucG5nXCIgYWx0PVwici1hcnJvd1wiIGNsYXNzTmFtZT1cImNmLWltZ1wiIC8+XG5cdCAgICAgICAgICAgICAgIDwvYT5cblx0ICAgICAgICAgICAgPC9kaXY+XG5cdCAgICAgICAgIDwvZGl2PlxuXHQgICAgICAgIDwvZGl2PlxuXG5cdFx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhdEZlZWRCYWNrIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENoYXRGZWVkQmFjayBmcm9tICcuL0NoYXRGZWVkQmFjay5qcydcbmltcG9ydCBDaGF0UXVlc3Rpb24xIGZyb20gJy4vQ2hhdFF1ZXN0aW9uMS5qcydcbmltcG9ydCBDaGF0UXVlc3Rpb24yIGZyb20gJy4vQ2hhdFF1ZXN0aW9uMi5qcydcbmltcG9ydCBDaGF0UXVlc3Rpb24zIGZyb20gJy4vQ2hhdFF1ZXN0aW9uMy5qcydcbmltcG9ydCBDaGF0UXVlc3Rpb240IGZyb20gJy4vQ2hhdFF1ZXN0aW9uNC5qcydcbmltcG9ydCBDaGF0UXVlc3Rpb241IGZyb20gJy4vQ2hhdFF1ZXN0aW9uNS5qcydcbmltcG9ydCBDaGF0VGhhbmtzUGFnZSBmcm9tICcuL0NoYXRUaGFua3NQYWdlLmpzJ1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5cbmNsYXNzIENoYXRGZWVkQmFja1ZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdHJlbmRlcigpe1xuXG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdj5cblxuXHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD17YCR7dGhpcy5wcm9wcy5tYXRjaC51cmx9L2B9IHJlbmRlcj17KHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q2hhdFF1ZXN0aW9uMSB7Li4udGhpcy5wcm9wc30gey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgIH19IC8+XG5cbiAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17YCR7dGhpcy5wcm9wcy5tYXRjaC51cmx9L3F1ZXMxYH0gcmVuZGVyPXsocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDaGF0UXVlc3Rpb24xIHsuLi50aGlzLnByb3BzfSB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgfX0gLz5cblxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXtgJHt0aGlzLnByb3BzLm1hdGNoLnVybH0vcXVlczJgfSByZW5kZXI9eyhwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENoYXRRdWVzdGlvbjIgey4uLnRoaXMucHJvcHN9IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICB9fSAvPlxuXG4gICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e2Ake3RoaXMucHJvcHMubWF0Y2gudXJsfS9xdWVzM2B9IHJlbmRlcj17KHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q2hhdFF1ZXN0aW9uMyB7Li4udGhpcy5wcm9wc30gey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgIH19IC8+XG5cbiAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17YCR7dGhpcy5wcm9wcy5tYXRjaC51cmx9L3F1ZXM0YH0gcmVuZGVyPXsocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDaGF0UXVlc3Rpb240IHsuLi50aGlzLnByb3BzfSB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgfX0gLz5cblxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXtgJHt0aGlzLnByb3BzLm1hdGNoLnVybH0vcXVlczVgfSByZW5kZXI9eyhwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENoYXRRdWVzdGlvbjUgey4uLnRoaXMucHJvcHN9IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICB9fSAvPlxuXG4gICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e2Ake3RoaXMucHJvcHMubWF0Y2gudXJsfS90aGFua3NgfSByZW5kZXI9eyhwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENoYXRUaGFua3NQYWdlIHsuLi50aGlzLnByb3BzfSB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRGZWVkQmFja1ZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5cbmNsYXNzIENoYXRRdWVzdGlvbjEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRmZWVkYmFjazogJydcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRsZXQgZGF0YSA9IHtcblxuXHRcdFx0J0NhdGVnb3J5JzogJ0NoYXQnLCAnQWN0aW9uJzogJ0NoYXRRdWVzdGlvbjFQYWdlTGFuZGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2hhdC1xdWVzdGlvbi0xLXBhZ2UtbGFuZGVkJywgXCJ1cmxcIjogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG5cdFx0fVxuXHRcdEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cdFx0LyppZih0aGlzLnByb3BzLmNoYXRfZmVlZGJhY2spe1xuXHRcdFx0bGV0IGZlZWRiYWNrID0gdGhpcy5wcm9wcy5jaGF0X2ZlZWRiYWNrLmZpbHRlcih4PT54LnR5cGUuaW5jbHVkZXMoJ3F1ZXMxJykpXG5cdFx0XHRpZihmZWVkYmFjay5sZW5ndGgpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtmZWVkYmFjazogZmVlZGJhY2tbMF0uZGF0YX0pXG5cdFx0XHR9XG5cdFx0fSovXG5cdH1cblxuXHRzYXZlRmVlZEJhY2soKSB7XG5cdFx0aWYgKCF0aGlzLnN0YXRlLmZlZWRiYWNrKSB7XG5cdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIGFuc3dlciB0aGUgUXVlc3Rpb25cIiB9KVxuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdGxldCBkYXRhID0ge1xuXHRcdFx0ZmVlZGJhY2s6IHRoaXMuc3RhdGUuZmVlZGJhY2ssXG5cdFx0XHRxdWVzdGlvbjogJ0hhdmUgeW91IHRha2VuIHlvdXIgcHJlc2NyaWJlZCBtZWRpY2luZXMsIHJlZ3VsYXJseT8nXG5cdFx0fVxuXHRcdHRoaXMucHJvcHMuc2F2ZUNoYXRGZWVkQmFjaygncXVlczEnLCBkYXRhKVxuXHRcdGxldCBndG1EYXRhID0ge1xuXG5cdFx0XHQnQ2F0ZWdvcnknOiAnQ2hhdCcsICdBY3Rpb24nOiAnQ2hhdFF1ZXN0aW9uMVN1Ym1pdHRlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NoYXQtcXVlc3Rpb24tMS1zdWJtaXR0ZWQnLCBcInVybFwiOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcblx0XHR9XG5cdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcblx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2NoYXQvZmVlZGJhY2svcXVlczInKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjaGF0LXBvcC1oZWFkaW5nXCI+XG5cdFx0XHRcdDxoMz5PbmxpbmUgY29uc3VsdGF0aW9uIGZlZWRiYWNrPC9oMz5cblx0XHRcdFx0PHA+WW91ciBmZWVkYmFjayB3aWxsIGhlbHAgdXMgaW1wcm92ZSBzZXJ2aWNlcyBmb3IgdGhlIHRob3VzYW5kcyBvZiBwYXRpZW50cyB2aXNpdGluZyB1cyBldmVyeWRheS48L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tZXItZmVlZGJhY2sgY2YtaGdodFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNmLWNhcmRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNmLWJvZHlcIj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNmLXByZ2hcIj5IYXZlIHlvdSB0YWtlbiB5b3VyIHByZXNjcmliZWQgbWVkaWNpbmVzLCByZWd1bGFybHk/KjwvcD5cblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZlZWRiYWNrOiAnWWVzJyB9KX0gY2xhc3NOYW1lPXtgY2YtYW5zICR7dGhpcy5zdGF0ZS5mZWVkYmFjayA9PSAnWWVzJyA/ICdhY3RpdmUnIDogJyd9YH0+WUVTPC9hPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZmVlZGJhY2s6ICdObycgfSl9IGNsYXNzTmFtZT17YGNmLWFucyAke3RoaXMuc3RhdGUuZmVlZGJhY2sgPT0gJ05vJyA/ICdhY3RpdmUnIDogJyd9YH0+Tk88L2E+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjZi1mb290ZXJcIj5cblx0XHRcdFx0XHRcdHsvKlxuXHRcdCAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3NOYW1lPVwiY2YtYnRuIGNmLXByZXZcIj4gXG5cdFx0ICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2xlZnQtYXJyb3cucG5nXCIgYWx0PVwici1hcnJvd1wiIGNsYXNzTmFtZT1cImNmLWltZ1wiIC8+XG5cdFx0ICAgICAgICAgICAgICAgICAgIFBSRVZJT1VTXG5cdFx0ICAgICAgICAgICAgICAgPC9hPlxuXHRcdCovfVxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBvbkNsaWNrPXt0aGlzLnNhdmVGZWVkQmFjay5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJjZi1idG4gY2YtbmV4dFwiPk5FWFRcblx0XHQgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9yaWdodF9hcnJvdy5wbmdcIiBhbHQ9XCJyLWFycm93XCIgY2xhc3NOYW1lPVwiY2YtaW1nXCIgLz5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0UXVlc3Rpb24xIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuXG5jbGFzcyBDaGF0UXVlc3Rpb24yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0ZmVlZGJhY2s6IG51bGxcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRsZXQgZGF0YSA9IHtcblxuXHRcdFx0J0NhdGVnb3J5JzogJ0NoYXQnLCAnQWN0aW9uJzogJ0NoYXRRdWVzdGlvbjJQYWdlTGFuZGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2hhdC1xdWVzdGlvbi0yLXBhZ2UtbGFuZGVkJywgXCJ1cmxcIjogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG5cdFx0fVxuXHRcdEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cdFx0LyppZih0aGlzLnByb3BzLmNoYXRfZmVlZGJhY2spe1xuXHRcdFx0bGV0IGZlZWRiYWNrID0gdGhpcy5wcm9wcy5jaGF0X2ZlZWRiYWNrLmZpbHRlcih4PT54LnR5cGUuaW5jbHVkZXMoJ3F1ZXMyJykpXG5cdFx0XHRpZihmZWVkYmFjay5sZW5ndGgpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtmZWVkYmFjazogZmVlZGJhY2tbMF0uZGF0YX0pXG5cdFx0XHR9XG5cdFx0fSovXG5cdH1cblxuXHRzYXZlRmVlZEJhY2soZGF0YSkge1xuXHRcdGlmICghdGhpcy5zdGF0ZS5mZWVkYmFjaykge1xuXHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBhbnN3ZXIgdGhlIFF1ZXN0aW9uXCIgfSlcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRkYXRhID0ge1xuXHRcdFx0ZmVlZGJhY2s6IHRoaXMuc3RhdGUuZmVlZGJhY2ssXG5cdFx0XHRxdWVzdGlvbjogJ0hvdyBoYXZlIHlvdXIgc3ltcHRvbXMgaW1wcm92ZWQgd2l0aCBvdXIgdHJlYXRtZW50Pydcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5zYXZlQ2hhdEZlZWRCYWNrKCdxdWVzMicsIGRhdGEpXG5cdFx0bGV0IGd0bURhdGEgPSB7XG5cblx0XHRcdCdDYXRlZ29yeSc6ICdDaGF0JywgJ0FjdGlvbic6ICdDaGF0UXVlc3Rpb24yU3VibWl0dGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2hhdC1xdWVzdGlvbi0yLXN1Ym1pdHRlZCcsIFwidXJsXCI6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuXHRcdH1cblx0XHRHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuXHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvY2hhdC9mZWVkYmFjay9xdWVzMycpXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b21lci1mZWVkYmFjayBjZi1oZ2h0XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2YtY2FyZFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2YtYm9keVwiPlxuXHRcdFx0XHRcdFx0IDxwIGNsYXNzTmFtZT1cImNmLXByZ2hcIj5Ib3cgaGF2ZSB5b3VyIHN5bXB0b21zIGltcHJvdmVkIHdpdGggb3VyIHRyZWF0bWVudD8qPC9wPiAgXG5cdFx0ICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjZi1saWdodC10eHRcIj5SYXRlIG9uIGEgc2NhbGUgZnJvbSAxIC0gNSwgd2hlcmUgNSBpcyBwZXJmZWN0bHkgcmVjb3ZlcmVkL2hlYWx0aHk8L3NwYW4+XG5cdFx0ICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2YtcmF0aW5nIGN1cnNvci1wbnRyXCI+XG5cdFx0ICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7ZmVlZGJhY2s6IDF9KX0+XG5cdFx0ICAgICAgICAgICAgICAgIFx0e1xuXHRcdCAgICAgICAgICAgICAgICBcdFx0dGhpcy5zdGF0ZS5mZWVkYmFjaz49MT9cblx0XHQgICAgICAgICAgICAgICAgXHRcdDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc3Rhci1vcmFuZ2UucG5nXCIgYWx0PVwic3RhclwiIGNsYXNzTmFtZT1cImNmLXJhdGluZy1pbWdcIi8+XG5cdFx0ICAgICAgICAgICAgICAgICAgICBcdDo8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3N0YXItZ3JleS5wbmdcIiBhbHQ9XCJzdGFyXCIgY2xhc3NOYW1lPVwiY2YtcmF0aW5nLWltZ1wiLz5cdFxuXHRcdCAgICAgICAgICAgICAgICBcdH1cblx0XHQgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNmLXJhdGluZy12YWxcIj4xPC9zcGFuPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctdHh0XCI+V29yc2U8L2Rpdj5cblx0XHQgICAgICAgICAgICAgICAgPC9saT5cblx0XHQgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpPT50aGlzLnNldFN0YXRlKHtmZWVkYmFjazogMn0pfT5cblx0XHQgICAgICAgICAgICAgICAgICAgIHtcblx0XHQgICAgICAgICAgICAgICAgXHRcdHRoaXMuc3RhdGUuZmVlZGJhY2s+PTI/XG5cdFx0ICAgICAgICAgICAgICAgIFx0XHQ8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3N0YXItb3JhbmdlLnBuZ1wiIGFsdD1cInN0YXJcIiBjbGFzc05hbWU9XCJjZi1yYXRpbmctaW1nXCIvPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgXHQ6PGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9zdGFyLWdyZXkucG5nXCIgYWx0PVwic3RhclwiIGNsYXNzTmFtZT1cImNmLXJhdGluZy1pbWdcIi8+XHRcblx0XHQgICAgICAgICAgICAgICAgXHR9XG5cdFx0ICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjZi1yYXRpbmctdmFsXCI+Mjwvc3Bhbj5cblx0XHQgICAgICAgICAgICAgICAgPC9saT5cblx0XHQgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpPT50aGlzLnNldFN0YXRlKHtmZWVkYmFjazogM30pfT5cblx0XHQgICAgICAgICAgICAgICAgICAgIHtcblx0XHQgICAgICAgICAgICAgICAgXHRcdHRoaXMuc3RhdGUuZmVlZGJhY2s+PTM/XG5cdFx0ICAgICAgICAgICAgICAgIFx0XHQ8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3N0YXItb3JhbmdlLnBuZ1wiIGFsdD1cInN0YXJcIiBjbGFzc05hbWU9XCJjZi1yYXRpbmctaW1nXCIvPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgXHQ6PGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9zdGFyLWdyZXkucG5nXCIgYWx0PVwic3RhclwiIGNsYXNzTmFtZT1cImNmLXJhdGluZy1pbWdcIi8+XHRcblx0XHQgICAgICAgICAgICAgICAgXHR9XG5cdFx0ICAgICAgICAgICAgICAgIFx0PHNwYW4gY2xhc3NOYW1lPVwiY2YtcmF0aW5nLXZhbFwiPjM8L3NwYW4+XG5cdFx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdFx0ICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7ZmVlZGJhY2s6IDR9KX0+XG5cdFx0ICAgICAgICAgICAgICAgICAgICB7XG5cdFx0ICAgICAgICAgICAgICAgIFx0XHR0aGlzLnN0YXRlLmZlZWRiYWNrPj00P1xuXHRcdCAgICAgICAgICAgICAgICBcdFx0PGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9zdGFyLW9yYW5nZS5wbmdcIiBhbHQ9XCJzdGFyXCIgY2xhc3NOYW1lPVwiY2YtcmF0aW5nLWltZ1wiLz5cblx0XHQgICAgICAgICAgICAgICAgICAgIFx0OjxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc3Rhci1ncmV5LnBuZ1wiIGFsdD1cInN0YXJcIiBjbGFzc05hbWU9XCJjZi1yYXRpbmctaW1nXCIvPlx0XG5cdFx0ICAgICAgICAgICAgICAgIFx0fVxuXHRcdCAgICAgICAgICAgICAgICBcdDxzcGFuIGNsYXNzTmFtZT1cImNmLXJhdGluZy12YWxcIj40PC9zcGFuPlxuXHRcdCAgICAgICAgICAgICAgICA8L2xpPlxuXHRcdCAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCk9PnRoaXMuc2V0U3RhdGUoe2ZlZWRiYWNrOiA1fSl9PlxuXHRcdCAgICAgICAgICAgICAgICAgICAge1xuXHRcdCAgICAgICAgICAgICAgICBcdFx0dGhpcy5zdGF0ZS5mZWVkYmFjaz49NT9cblx0XHQgICAgICAgICAgICAgICAgXHRcdDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc3Rhci1vcmFuZ2UucG5nXCIgYWx0PVwic3RhclwiIGNsYXNzTmFtZT1cImNmLXJhdGluZy1pbWdcIi8+XG5cdFx0ICAgICAgICAgICAgICAgICAgICBcdDo8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3N0YXItZ3JleS5wbmdcIiBhbHQ9XCJzdGFyXCIgY2xhc3NOYW1lPVwiY2YtcmF0aW5nLWltZ1wiLz5cdFxuXHRcdCAgICAgICAgICAgICAgICBcdH1cblx0XHQgICAgICAgICAgICAgICAgXHQ8c3BhbiBjbGFzc05hbWU9XCJjZi1yYXRpbmctdmFsXCI+NTwvc3Bhbj5cblx0XHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLXR4dFwiPkZhbnRhc3RpYzwvZGl2PlxuXHRcdCAgICAgICAgICAgICAgICA8L2xpPlxuXHRcdCAgICAgICAgICAgICA8L3VsPiBcblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNmLWZvb3RlclwiPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2NoYXQvZmVlZGJhY2snKX0gY2xhc3NOYW1lPVwiY2YtYnRuIGNmLXByZXZcIj5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9yaWdodF9hcnJvdy5wbmdcIiBhbHQ9XCJyLWFycm93XCIgY2xhc3NOYW1lPVwiY2YtaW1nIGNmLXJvdGF0ZVwiIC8+XG5cdFx0XHRcdFx0XHRcdFBSRVZJT1VTXG5cdFx0ICAgICAgICAgICAgICAgPC9hPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBvbkNsaWNrPXt0aGlzLnNhdmVGZWVkQmFjay5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJjZi1idG4gY2YtbmV4dFwiPk5FWFRcblx0XHQgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9yaWdodF9hcnJvdy5wbmdcIiBhbHQ9XCJyLWFycm93XCIgY2xhc3NOYW1lPVwiY2YtaW1nXCIgLz5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhdFF1ZXN0aW9uMiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcblxuY2xhc3MgQ2hhdFF1ZXN0aW9uMyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGU9e1xuXHRcdFx0ZmVlZGJhY2s6bnVsbFxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0bGV0IGRhdGEgPSB7XG5cbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDaGF0JywgJ0FjdGlvbic6ICdDaGF0UXVlc3Rpb24zUGFnZUxhbmRlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NoYXQtcXVlc3Rpb24tMy1wYWdlLWxhbmRlZCcsIFwidXJsXCI6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cdFx0LyppZih0aGlzLnByb3BzLmNoYXRfZmVlZGJhY2spe1xuXHRcdFx0bGV0IGZlZWRiYWNrID0gdGhpcy5wcm9wcy5jaGF0X2ZlZWRiYWNrLmZpbHRlcih4PT54LnR5cGUuaW5jbHVkZXMoJ3F1ZXMzJykpXG5cdFx0XHRpZihmZWVkYmFjay5sZW5ndGgpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtmZWVkYmFjazogZmVlZGJhY2tbMF0uZGF0YX0pXG5cdFx0XHR9XG5cdFx0fVxuKi9cdH1cblxuXHRzYXZlRmVlZEJhY2soZGF0YSl7XG5cdFx0aWYoIXRoaXMuc3RhdGUuZmVlZGJhY2spIHtcblx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgYW5zd2VyIHRoZSBRdWVzdGlvblwiIH0pXG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0ZGF0YSA9IHtcblx0XHRcdGZlZWRiYWNrOiB0aGlzLnN0YXRlLmZlZWRiYWNrLFxuXHRcdFx0cXVlc3Rpb246J0hvdyBsaWtlbHkgYXJlIHlvdSB0byByZWNvbW1lbmQgdXMgdG8geW91ciBmcmllbmRzIG9yIGZhbWlseT8nXG5cdFx0fVxuXHRcdHRoaXMucHJvcHMuc2F2ZUNoYXRGZWVkQmFjaygncXVlczMnLCBkYXRhKVxuXHRcdGxldCBndG1EYXRhID0ge1xuXG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ2hhdCcsICdBY3Rpb24nOiAnQ2hhdFF1ZXN0aW9uM1N1Ym1pdHRlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NoYXQtcXVlc3Rpb24tMy1zdWJtaXR0ZWQnLCBcInVybFwiOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuXHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvY2hhdC9mZWVkYmFjay9xdWVzNCcpXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbWVyLWZlZWRiYWNrIGNmLWhnaHRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjZi1jYXJkXCI+XG5cdFx0ICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZi1ib2R5XCI+XG5cdFx0ICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjZi1wcmdoXCI+SG93IGxpa2VseSBhcmUgeW91IHRvIHJlY29tbWVuZCB1cyB0byB5b3VyIGZyaWVuZHMgb3IgZmFtaWx5Pyo8L3A+ICBcblx0XHQgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjZi1yYXRpbmcgY2YtbXJnVDIwIGN1cnNvci1wbnRyXCI+XG5cdFx0ICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7ZmVlZGJhY2s6IDF9KX0+XG5cdFx0ICAgICAgICAgICAgICAgIFx0e1xuXHRcdCAgICAgICAgICAgICAgICBcdFx0dGhpcy5zdGF0ZS5mZWVkYmFjayA+PSAxP1xuXHRcdCAgICAgICAgICAgICAgICBcdFx0PGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9zdGFyLW9yYW5nZS5wbmdcIiBhbHQ9XCJzdGFyXCIgY2xhc3NOYW1lPVwiY2YtcmF0aW5nLWltZ1wiLz5cblx0XHQgICAgICAgICAgICAgICAgICAgIFx0OjxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc3Rhci1ncmV5LnBuZ1wiIGFsdD1cInN0YXJcIiBjbGFzc05hbWU9XCJjZi1yYXRpbmctaW1nXCIvPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgXG5cdFx0ICAgICAgICAgICAgICAgIFx0fVxuXHRcdCAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2YtcmF0aW5nLXZhbFwiPjE8L3NwYW4+XG5cdFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy10eHRcIj5OZXZlcjwvZGl2PlxuXHRcdCAgICAgICAgICAgICAgICA8L2xpPlxuXHRcdCAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCk9PnRoaXMuc2V0U3RhdGUoe2ZlZWRiYWNrOiAyfSl9PlxuXHRcdCAgICAgICAgICAgICAgICBcdHtcblx0XHQgICAgICAgICAgICAgICAgXHRcdHRoaXMuc3RhdGUuZmVlZGJhY2sgPj0gMj9cblx0XHQgICAgICAgICAgICAgICAgXHRcdDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc3Rhci1vcmFuZ2UucG5nXCIgYWx0PVwic3RhclwiIGNsYXNzTmFtZT1cImNmLXJhdGluZy1pbWdcIi8+XG5cdFx0ICAgICAgICAgICAgICAgICAgICBcdDo8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3N0YXItZ3JleS5wbmdcIiBhbHQ9XCJzdGFyXCIgY2xhc3NOYW1lPVwiY2YtcmF0aW5nLWltZ1wiLz5cblx0XHQgICAgICAgICAgICAgICAgICAgIFxuXHRcdCAgICAgICAgICAgICAgICBcdH1cblx0XHQgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNmLXJhdGluZy12YWxcIj4yPC9zcGFuPlxuXHRcdCAgICAgICAgICAgICAgICA8L2xpPlxuXHRcdCAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCk9PnRoaXMuc2V0U3RhdGUoe2ZlZWRiYWNrOiAzfSl9PlxuXHRcdCAgICAgICAgICAgICAgICBcdHtcblx0XHQgICAgICAgICAgICAgICAgXHRcdHRoaXMuc3RhdGUuZmVlZGJhY2sgPj0gMz9cblx0XHQgICAgICAgICAgICAgICAgXHRcdDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc3Rhci1vcmFuZ2UucG5nXCIgYWx0PVwic3RhclwiIGNsYXNzTmFtZT1cImNmLXJhdGluZy1pbWdcIi8+XG5cdFx0ICAgICAgICAgICAgICAgICAgICBcdDo8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3N0YXItZ3JleS5wbmdcIiBhbHQ9XCJzdGFyXCIgY2xhc3NOYW1lPVwiY2YtcmF0aW5nLWltZ1wiLz5cblx0XHQgICAgICAgICAgICAgICAgICAgIFxuXHRcdCAgICAgICAgICAgICAgICBcdH1cblx0XHQgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNmLXJhdGluZy12YWxcIj4zPC9zcGFuPlxuXHRcdCAgICAgICAgICAgICAgICA8L2xpPlxuXHRcdCAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCk9PnRoaXMuc2V0U3RhdGUoe2ZlZWRiYWNrOiA0fSl9PlxuXHRcdCAgICAgICAgICAgICAgICBcdHtcblx0XHQgICAgICAgICAgICAgICAgXHRcdHRoaXMuc3RhdGUuZmVlZGJhY2sgPj00P1xuXHRcdCAgICAgICAgICAgICAgICBcdFx0PGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9zdGFyLW9yYW5nZS5wbmdcIiBhbHQ9XCJzdGFyXCIgY2xhc3NOYW1lPVwiY2YtcmF0aW5nLWltZ1wiLz5cblx0XHQgICAgICAgICAgICAgICAgICAgIFx0OjxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc3Rhci1ncmV5LnBuZ1wiIGFsdD1cInN0YXJcIiBjbGFzc05hbWU9XCJjZi1yYXRpbmctaW1nXCIvPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgXG5cdFx0ICAgICAgICAgICAgICAgIFx0fVxuXHRcdCAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2YtcmF0aW5nLXZhbFwiPjQ8L3NwYW4+XG5cdFx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdFx0ICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7ZmVlZGJhY2s6IDV9KX0+XG5cdFx0ICAgICAgICAgICAgICAgIFx0e1xuXHRcdCAgICAgICAgICAgICAgICBcdFx0dGhpcy5zdGF0ZS5mZWVkYmFjayA+PSA1P1xuXHRcdCAgICAgICAgICAgICAgICBcdFx0PGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9zdGFyLW9yYW5nZS5wbmdcIiBhbHQ9XCJzdGFyXCIgY2xhc3NOYW1lPVwiY2YtcmF0aW5nLWltZ1wiLz5cblx0XHQgICAgICAgICAgICAgICAgICAgIFx0OjxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc3Rhci1ncmV5LnBuZ1wiIGFsdD1cInN0YXJcIiBjbGFzc05hbWU9XCJjZi1yYXRpbmctaW1nXCIvPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgXG5cdFx0ICAgICAgICAgICAgICAgIFx0fVxuXHRcdCAgICAgICAgICAgICAgICBcdDxzcGFuIGNsYXNzTmFtZT1cImNmLXJhdGluZy12YWxcIj41PC9zcGFuPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctdHh0XCI+VmVyeSBMaWtlbHk8L2Rpdj5cblx0XHQgICAgICAgICAgICAgICAgPC9saT5cblx0XHQgICAgICAgICAgICAgPC91bD5cblx0XHQgICAgICAgICAgICA8L2Rpdj5cblx0XHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNmLWZvb3RlclwiPlxuXHRcdCAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgb25DbGljaz17KCk9PnRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvY2hhdC9mZWVkYmFjay9xdWVzMicpfSBjbGFzc05hbWU9XCJjZi1idG4gY2YtcHJldlwiPiBcblx0XHQgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9yaWdodF9hcnJvdy5wbmdcIiBhbHQ9XCJyLWFycm93XCIgY2xhc3NOYW1lPVwiY2YtaW1nIGNmLXJvdGF0ZVwiIC8+XG5cdFx0ICAgICAgICAgICAgICAgICAgIFBSRVZJT1VTXG5cdFx0ICAgICAgICAgICAgICAgPC9hPlxuXHRcdCAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgb25DbGljaz17dGhpcy5zYXZlRmVlZEJhY2suYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwiY2YtYnRuIGNmLW5leHRcIj5ORVhUIFxuXHRcdCAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3JpZ2h0X2Fycm93LnBuZ1wiIGFsdD1cInItYXJyb3dcIiBjbGFzc05hbWU9XCJjZi1pbWdcIiAvPlxuXHRcdCAgICAgICAgICAgICAgIDwvYT5cblx0XHQgICAgICAgICAgICA8L2Rpdj5cblx0XHQgICAgICAgICA8L2Rpdj5cblx0XHQgICAgIFx0PC9kaXY+XG5cdFx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhdFF1ZXN0aW9uMyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcblxuY2xhc3MgQ2hhdFF1ZXN0aW9uNCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlPXtcblx0XHRcdGZlZWRiYWNrOicnLFxuXHRcdFx0dGV4dDonJ1xuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0bGV0IGRhdGEgPSB7XG5cbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDaGF0JywgJ0FjdGlvbic6ICdDaGF0UXVlc3Rpb240UGFnZUxhbmRlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NoYXQtcXVlc3Rpb24tNC1wYWdlLWxhbmRlZCcsIFwidXJsXCI6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cdFx0LyppZih0aGlzLnByb3BzLmNoYXRfZmVlZGJhY2spe1xuXHRcdFx0bGV0IGZlZWRiYWNrID0gdGhpcy5wcm9wcy5jaGF0X2ZlZWRiYWNrLmZpbHRlcih4PT54LnR5cGUuaW5jbHVkZXMoJ3F1ZXM0JykpXG5cdFx0XHRpZihmZWVkYmFjay5sZW5ndGgpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtmZWVkYmFjazogZmVlZGJhY2tbMF0uZGF0YX0pXG5cdFx0XHR9XG5cdFx0fSovXG5cdH1cblxuXHRzYXZlRmVlZEJhY2soKXtcblx0XHRpZighdGhpcy5zdGF0ZS5mZWVkYmFjaykge1xuXHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBhbnN3ZXIgdGhlIFF1ZXN0aW9uXCIgfSlcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRsZXQgZGF0YSA9IHtcblx0XHRcdGZlZWRiYWNrOiB0aGlzLnN0YXRlLmZlZWRiYWNrLFxuXHRcdFx0cXVlc3Rpb246J1doYXQgZG8geW91IHRoaW5rIGNhbiBiZSBpbXByb3ZlZD8nLFxuXHRcdFx0ZmVlZGJhY2tUZXh0OiB0aGlzLnN0YXRlLnRleHRcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5zYXZlQ2hhdEZlZWRCYWNrKCdxdWVzNCcsIGRhdGEpXG5cdFx0bGV0IGd0bURhdGEgPSB7XG5cbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDaGF0JywgJ0FjdGlvbic6ICdDaGF0UXVlc3Rpb240U3VibWl0dGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2hhdC1xdWVzdGlvbi00LXN1Ym1pdHRlZCcsIFwidXJsXCI6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG5cdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jaGF0L2ZlZWRiYWNrL3F1ZXM1Jylcblx0fVxuXG5cdHJlbmRlcigpIHtcblxuXHRcdHJldHVybihcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tZXItZmVlZGJhY2sgY2YtaGdodFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNmLWNhcmRcIj5cblx0XHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNmLWJvZHlcIj5cblx0XHQgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNmLXByZ2hcIj5XaGF0IGRvIHlvdSB0aGluayBjYW4gYmUgaW1wcm92ZWQ/KjwvcD4gXG5cdFx0ICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2YtcmFkaW8gY2hhdC1yYWRpby1hbGlnblwiPlxuXHRcdCAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtgJHt0aGlzLnN0YXRlLmZlZWRiYWNrLmluY2x1ZGVzKCcwJyk/J2FjdGl2ZSc6Jyd9YH0+XG5cdFx0ICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY3VzdG9tLXJhZGlvXCI+XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2YtcmFkaW8tdGV4dFwiPkJldHRlciB0cmVhdG1lbnQ8L3NwYW4+XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoKT0+dGhpcy5zZXRTdGF0ZSh7ZmVlZGJhY2s6ICcwJywgdGV4dDogJ0JldHRlciB0cmVhdG1lbnQnfSl9IHR5cGU9XCJyYWRpb1wiICBuYW1lPVwiaC1pbXBcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmZlZWRiYWNrLmluY2x1ZGVzKCcwJyl9Lz5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmsgcmFkaW8tY2hlY2ttYXJrXCI+PC9zcGFuPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblx0XHQgICAgICAgICAgICAgICAgPC9saT5cblx0XHQgICAgICAgICAgICAgICAgPGxpICBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUuZmVlZGJhY2suaW5jbHVkZXMoJzEnKT8nYWN0aXZlJzonJ31gfT5cblx0XHQgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjdXN0b20tcmFkaW9cIj5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjZi1yYWRpby10ZXh0XCI+VGhlIGRvY3RvciBjb3VsZCBoYXZlIGV4cGxhaW5lZCB0aGUgdHJlYXRtZW50IGJldHRlcjwvc3Bhbj5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgb25DaGFuZ2U9eygpPT50aGlzLnNldFN0YXRlKHtmZWVkYmFjazogJzEnLCB0ZXh0OiAnVGhlIGRvY3RvciBjb3VsZCBoYXZlIGV4cGxhaW5lZCB0aGUgdHJlYXRtZW50IGJldHRlcid9KX0gbmFtZT1cImgtaW1wXCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5mZWVkYmFjay5pbmNsdWRlcygnMScpfS8+XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrIHJhZGlvLWNoZWNrbWFya1wiPjwvc3Bhbj5cblx0XHQgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cdFx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdFx0ICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUuZmVlZGJhY2suaW5jbHVkZXMoJzInKT8nYWN0aXZlJzonJ31gfT5cblx0XHQgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjdXN0b20tcmFkaW9cIj5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjZi1yYWRpby10ZXh0XCI+V2FpdCBUaW1lPC9zcGFuPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBvbkNoYW5nZT17KCk9PnRoaXMuc2V0U3RhdGUoe2ZlZWRiYWNrOiAnMicsIHRleHQ6J1dhaXQgVGltZSd9KX0gIG5hbWU9XCJoLWltcFwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZmVlZGJhY2suaW5jbHVkZXMoJzInKX0vPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFyayByYWRpby1jaGVja21hcmtcIj48L3NwYW4+XG5cdFx0ICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXHRcdCAgICAgICAgICAgICAgICA8L2xpPlxuXHRcdCAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtgJHt0aGlzLnN0YXRlLmZlZWRiYWNrLmluY2x1ZGVzKCczJyk/J2FjdGl2ZSc6Jyd9YH0+XG5cdFx0ICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY3VzdG9tLXJhZGlvXCI+XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2YtcmFkaW8tdGV4dFwiPkV2ZXJ5dGhpbmcgd2FzIHBlcmZlY3Q8L3NwYW4+XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG9uQ2hhbmdlPXsoKT0+dGhpcy5zZXRTdGF0ZSh7ZmVlZGJhY2s6ICczJywgdGV4dDonRXZlcnl0aGluZyB3YXMgcGVyZmVjdCcgfSl9ICBuYW1lPVwiaC1pbXBcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmZlZWRiYWNrLmluY2x1ZGVzKCczJyl9Lz5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmsgcmFkaW8tY2hlY2ttYXJrXCI+PC9zcGFuPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblx0XHQgICAgICAgICAgICAgICAgPC9saT5cblx0XHQgICAgICAgICAgICAgPC91bD5cblx0XHQgICAgICAgICAgICA8L2Rpdj5cblx0XHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNmLWZvb3RlclwiPlxuXHRcdCAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgb25DbGljaz17KCk9PnRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvY2hhdC9mZWVkYmFjay9xdWVzMycpfSBjbGFzc05hbWU9XCJjZi1idG4gY2YtcHJldlwiPiBcblx0XHQgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9yaWdodF9hcnJvdy5wbmdcIiBhbHQ9XCJyLWFycm93XCIgY2xhc3NOYW1lPVwiY2YtaW1nIGNmLXJvdGF0ZVwiIC8+XG5cdFx0ICAgICAgICAgICAgICAgICAgIFBSRVZJT1VTXG5cdFx0ICAgICAgICAgICAgICAgPC9hPlxuXHRcdCAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgb25DbGljaz17dGhpcy5zYXZlRmVlZEJhY2suYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwiY2YtYnRuIGNmLW5leHRcIj5ORVhUIFxuXHRcdCAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3JpZ2h0X2Fycm93LnBuZ1wiIGFsdD1cInItYXJyb3dcIiBjbGFzc05hbWU9XCJjZi1pbWdcIiAvPlxuXHRcdCAgICAgICAgICAgICAgIDwvYT5cblx0XHQgICAgICAgICAgICA8L2Rpdj5cblx0XHQgICAgICAgICA8L2Rpdj5cblx0XHQgICAgICAgIDwvZGl2PlxuXHRcdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRRdWVzdGlvbjQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuXG5jbGFzcyBDaGF0UXVlc3Rpb241IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGU9e1xuXHRcdFx0ZmVlZGJhY2s6Jydcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdGxldCBkYXRhID0ge1xuXG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ2hhdCcsICdBY3Rpb24nOiAnQ2hhdFF1ZXN0aW9uNVBhZ2VMYW5kZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjaGF0LXF1ZXN0aW9uLTUtcGFnZS1sYW5kZWQnLCBcInVybFwiOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXHRcdC8qaWYodGhpcy5wcm9wcy5jaGF0X2ZlZWRiYWNrKXtcblx0XHRcdGxldCBmZWVkYmFjayA9IHRoaXMucHJvcHMuY2hhdF9mZWVkYmFjay5maWx0ZXIoeD0+eC50eXBlLmluY2x1ZGVzKCdxdWVzNScpKVxuXHRcdFx0aWYoZmVlZGJhY2subGVuZ3RoKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZmVlZGJhY2s6IGZlZWRiYWNrWzBdLmRhdGF9KVxuXHRcdFx0fVxuXHRcdH0qL1xuXHR9XG5cblxuXHRzdWJtaXQoKXtcblx0XHRsZXQgZGF0YSA9IHtcblx0XHRcdGZlZWRiYWNrOiB0aGlzLnN0YXRlLmZlZWRiYWNrLFxuXHRcdFx0cXVlc3Rpb246J0FueSBDb21tZW50cz8nXG5cdFx0fVxuXHRcdGxldCBmZWVkYmFjayA9IHRoaXMucHJvcHMuY2hhdF9mZWVkYmFjayAmJiB0aGlzLnByb3BzLmNoYXRfZmVlZGJhY2subGVuZ3RoP3RoaXMucHJvcHMuY2hhdF9mZWVkYmFjay5maWx0ZXIoeD0+IXgudHlwZS5pbmNsdWRlcygncXVlczUnKSk6W11cblx0XHRmZWVkYmFjay5wdXNoKHt0eXBlOiAncXVlczUnLCBkYXRhOiBkYXRhfSlcblx0XHRmZWVkYmFjay5wdXNoKHtjcmVhdGVkT246IG5ldyBEYXRlKCl9KVxuXHRcdHRoaXMucHJvcHMuc2F2ZUNoYXRGZWVkQmFjaygncXVlczUnLCBkYXRhKVxuXHRcdGxldCByb29tSWQgPSB0aGlzLnByb3BzLmNoYXRfZmVlZGJhY2tfcm9vbUlkXG5cblx0XHRsZXQgcG9zdERhdGEgPSB7XG5cdFx0XHRyaWQ6IHJvb21JZCxcblx0XHRcdGRhdGE6IGZlZWRiYWNrXG5cdFx0fVxuXHRcdGxldCBndG1EYXRhID0ge1xuXG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ2hhdCcsICdBY3Rpb24nOiAnQ2hhdFF1ZXN0aW9uNVN1Ym1pdHRlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NoYXQtcXVlc3Rpb24tNS1zdWJtaXR0ZWQnLCBcInVybFwiOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuXG5cdFx0dGhpcy5wcm9wcy5zdWJtaXRDaGF0RmVlZGJhY2socG9zdERhdGEpXG5cdFx0c2V0VGltZW91dCgoKT0+e1xuXHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jaGF0L2ZlZWRiYWNrL3RoYW5rcycpXHRcblx0XHR9LDEwMDApXG5cdFx0XG5cdFx0XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbWVyLWZlZWRiYWNrIGNmLWhnaHRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjZi1jYXJkXCI+XG5cdFx0ICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZi1ib2R5XCI+XG5cdFx0ICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjZi1wcmdoXCI+QW55IENvbW1lbnRzPzwvcD4gXG5cdFx0ICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiY2YtdGV4dGFyZWFcIiB2YWx1ZT17dGhpcy5zdGF0ZS5mZWVkYmFja30gcGxhY2Vob2xkZXI9XCJUeXBlIGhlcmUuLi5cIiBvbkNoYW5nZT17KGUpPT50aGlzLnNldFN0YXRlKHtmZWVkYmFjazogZS50YXJnZXQudmFsdWV9KX0+PC90ZXh0YXJlYT5cblx0XHQgICAgICAgICAgICA8L2Rpdj5cblx0XHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNmLWZvb3RlclwiPlxuXHRcdCAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3NOYW1lPVwiY2YtYnRuIGNmLXByZXZcIiBvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jaGF0L2ZlZWRiYWNrL3F1ZXM0Jyl9PiBcblx0XHQgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9yaWdodF9hcnJvdy5wbmdcIiBhbHQ9XCJyLWFycm93XCIgY2xhc3NOYW1lPVwiY2YtaW1nIGNmLXJvdGF0ZVwiIC8+XG5cdFx0ICAgICAgICAgICAgICAgICAgIFBSRVZJT1VTXG5cdFx0ICAgICAgICAgICAgICAgPC9hPlxuXHRcdCAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgb25DbGljaz17dGhpcy5zdWJtaXQuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwiY2YtYnRuIGNmLW5leHQgY2Ytc3VibWl0XCI+U1VCTUlUIFxuXHRcdCAgICAgICAgICAgICAgIDwvYT5cblx0XHQgICAgICAgICAgICA8L2Rpdj5cblx0XHQgICAgICAgICA8L2Rpdj5cblx0ICAgICAgICAgPC9kaXY+XG5cdFx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhdFF1ZXN0aW9uNSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgQ2hhdFRoYW5rc1ZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdHJlbmRlcigpe1xuXG5cdFx0cmV0dXJuKFxuXHRcdCAgIDxkaXYgY2xhc3NOYW1lPVwiY2YtaGdodFwiPlxuXHQgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cInRoYW5rcy1kaXZcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy90aWNrLnBuZ1wiIGNsYXNzTmFtZT1cImNmLXRpY2staW1nXCIgYWx0PVwidGljay1pbWdcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNmLXRoYW5rcy10ZXh0XCI+VGhhbmsgWW91ICE8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2YtdG5hbmtzLXByZ2hcIj5GZWVkYmFjayBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5LiBQbGVhc2UgZm9sbG93LXVwIGFzIHBlciBvdXIgZG9jdG9yJ3MgYWR2aWNlLjwvcD5cbiAgICAgICAgICBcdDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG5cdFx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhdFRoYW5rc1ZpZXciLCJpbXBvcnQgQ2hhdEZlZWRCYWNrVmlldyBmcm9tICcuL0NoYXRGZWVkQmFja1ZpZXcuanMnXG5leHBvcnQgZGVmYXVsdCBDaGF0RmVlZEJhY2tWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IENoYXRGZWVkQmFja1ZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0NoYXRGZWVkQmFja1ZpZXcnXG5pbXBvcnQgeyBzYXZlQ2hhdEZlZWRCYWNrLCBzdWJtaXRDaGF0RmVlZGJhY2ssIHNhdmVDaGF0RmVlZGJhY2tSb29tSWQgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuY2xhc3MgQ2hhdEZlZWRCYWNrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXHRcdGlmKHBhcnNlZC5yaWQpe1xuXHRcdFx0bGV0IHJpZCA9IHBhcnNlZC5yaWRcblx0XHRcdHRyeXtcblx0XHRcdFx0aWYod2luZG93ICYmIHdpbmRvdy5hdG9iKHJpZCkgKXtcblx0XHRcdFx0XHRyaWQgPSB3aW5kb3cuYXRvYihyaWQpXG5cdFx0XHRcdH1cblx0XHRcdH1jYXRjaChlKXtcblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHRoaXMucHJvcHMuc2F2ZUNoYXRGZWVkYmFja1Jvb21JZChyaWQpXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PENoYXRGZWVkQmFja1ZpZXcgey4uLnRoaXMucHJvcHN9IC8+XG5cdFx0XHQpXG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PntcblxuXHRjb25zdHtcblx0XHRjaGF0X2ZlZWRiYWNrLFxuXHRcdGNoYXRfZmVlZGJhY2tfcm9vbUlkXG5cdH0gPSBzdGF0ZS5VU0VSXG5cblx0cmV0dXJue1xuXHRcdGNoYXRfZmVlZGJhY2ssXG5cdFx0Y2hhdF9mZWVkYmFja19yb29tSWRcblx0fVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoIGRpc3BhdGNoKSA9PiB7XG5cblx0cmV0dXJue1xuXHRcdHNhdmVDaGF0RmVlZEJhY2s6ICh0eXBlLCBkYXRhKSA9PiBkaXNwYXRjaChzYXZlQ2hhdEZlZWRCYWNrKHR5cGUsIGRhdGEpKSxcblx0XHRzdWJtaXRDaGF0RmVlZGJhY2s6IChwb3N0RGF0YSkgPT4gZGlzcGF0Y2goc3VibWl0Q2hhdEZlZWRiYWNrKHBvc3REYXRhKSksXG5cdFx0c2F2ZUNoYXRGZWVkYmFja1Jvb21JZDogKHJpZCkgPT4gZGlzcGF0Y2goc2F2ZUNoYXRGZWVkYmFja1Jvb21JZChyaWQpKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENoYXRGZWVkQmFjaykiXSwic291cmNlUm9vdCI6IiJ9