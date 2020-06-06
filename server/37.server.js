exports.ids = [37];
exports.modules = {

/***/ "./dev/js/components/commons/article/ArticleCommentBox.js":
/*!****************************************************************!*\
  !*** ./dev/js/components/commons/article/ArticleCommentBox.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CommmentView extends _react2.default.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			comment: ''
		};
	}

	inputHandler(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	postReply(e) {
		e.preventDefault();
		if (!this.state.comment) {
			setTimeout(() => {
				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please write valid comment." });
			}, 500);
			return;
		}
		let postData = {

			comment: this.state.comment,
			name: Object.values(this.props.profiles).length && this.props.profiles[this.props.defaultProfile] ? this.props.profiles[this.props.defaultProfile].name : this.state.name,
			email: Object.values(this.props.profiles).length && this.props.profiles[this.props.defaultProfile] ? this.props.profiles[this.props.defaultProfile].email : this.state.email,
			parent: this.props.parentCommentId
		};

		if (this.props.articlePage) {
			postData['article'] = this.props.articleData.id;
		}

		if (this.props.hospitalPage) {
			postData['type'] = 'hospital';
			postData['id'] = this.props.hospital_id || '';
		}

		this.props.postComment(postData, (error, data) => {
			if (data) {
				this.setState({ comment: '', name: '', email: '' });

				if (this.props.articlePage) {
					this.props.getArticleData();
				} else {
					this.props.loadComments();
				}

				setTimeout(() => {
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Comment Posted Sucessfully, Awaiting moderation." });
				}, 500);
			} else {
				var error_message = "Could not post your comment, Try again!";
				if (error.error != undefined && error.error != '') {
					error_message = error.error;
				}
				setTimeout(() => {
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: error_message });
				}, 500);
			}
		});
		return;
	}

	render() {

		return _react2.default.createElement(
			'form',
			null,
			_react2.default.createElement(
				'div',
				{ className: 'comments-section-form' },
				Object.values(this.props.profiles).length || _storage2.default.checkAuth() ? _react2.default.createElement(
					'div',
					{ className: 'row no-gutters' },
					_react2.default.createElement(
						'div',
						{ className: 'col-12' },
						_react2.default.createElement(
							'p',
							{ className: 'cmnt-static' },
							_react2.default.createElement('img', { src: "/assets" + "/img/chatComment.svg" }),
							'Leave a Comment'
						),
						_react2.default.createElement(
							'div',
							{ className: 'labelWrap' },
							_react2.default.createElement(
								'div',
								{ className: 'labelWrap' },
								_react2.default.createElement('textarea', { style: { height: '100px' }, id: 'ftext', className: 'fc-input', name: 'comment', type: 'text', required: true, value: this.state.comment, onChange: this.inputHandler.bind(this) }),
								_react2.default.createElement(
									'label',
									{ htmlFor: 'ftext' },
									'Your Comment'
								)
							)
						)
					)
				) : _react2.default.createElement(
					'div',
					{ className: 'row no-gutters' },
					_react2.default.createElement(
						'div',
						{ className: 'col-12' },
						_react2.default.createElement(
							'p',
							{ className: 'cmnt-static' },
							_react2.default.createElement('img', { src: "/assets" + "/img/chatComment.svg" }),
							'Leave a Comment'
						),
						_react2.default.createElement(
							'div',
							{ className: 'labelWrap' },
							_react2.default.createElement(
								'div',
								{ className: 'labelWrap' },
								_react2.default.createElement('textarea', { style: { height: '100px' }, id: 'ftext', className: 'fc-input', name: 'comment', type: 'text', value: this.state.comment, required: true, onChange: this.inputHandler.bind(this) }),
								_react2.default.createElement(
									'label',
									{ htmlFor: 'ftext' },
									'Your Comment'
								)
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-12' },
						_react2.default.createElement(
							'div',
							{ className: 'labelWrap' },
							_react2.default.createElement('input', { id: 'fname', className: 'fc-input', name: 'name', value: this.state.name, type: 'text', required: true, onChange: this.inputHandler.bind(this) }),
							_react2.default.createElement(
								'label',
								{ htmlFor: 'fname' },
								'Name'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-12' },
						_react2.default.createElement(
							'div',
							{ className: 'labelWrap' },
							_react2.default.createElement('input', { id: 'fmail', className: 'fc-input', name: 'email', value: this.state.email, type: 'text', required: true, onChange: this.inputHandler.bind(this) }),
							_react2.default.createElement(
								'label',
								{ htmlFor: 'fmail' },
								'Email'
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'commnets-sbmt-btn' },
					_react2.default.createElement(
						'button',
						{ className: 'cmnts-btn', onClick: this.postReply.bind(this) },
						'Post Comment'
					)
				)
			)
		);
	}
}

exports.default = CommmentView;

/***/ }),

/***/ "./dev/js/components/commons/article/Comment.js":
/*!******************************************************!*\
  !*** ./dev/js/components/commons/article/Comment.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ArticleCommentBox = __webpack_require__(/*! ./ArticleCommentBox.js */ "./dev/js/components/commons/article/ArticleCommentBox.js");

var _ArticleCommentBox2 = _interopRequireDefault(_ArticleCommentBox);

var _initialsPicture = __webpack_require__(/*! ../initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Comment extends _react2.default.Component {

    authorClick(data, e) {
        e.preventDefault();
        if (data.author) {

            if (data.author.url) {
                this.props.history.push(data.author.url);
            } else {
                this.props.history.push(`/opd/doctor/${data.author.id}`);
            }
        }
    }

    replyClicked(comment) {
        this.props.commentReplyClicked(comment.id);
    }

    render() {
        let self = this;
        let parentName = '';
        let comment = this.props.childData;
        if (this.props.parentComment.author) {
            parentName = "Dr. " + this.props.parentComment.author.name;
        } else {
            parentName = this.props.parentComment.user_name;
        }
        return _react2.default.createElement(
            'div',
            { key: comment.id },
            _react2.default.createElement(
                'div',
                { className: 'reply-comments-container', key: comment.id },
                _react2.default.createElement(
                    'div',
                    { className: 'sub-comments-section' },
                    _react2.default.createElement(
                        'div',
                        { className: 'dr-qucik-info doc-gold-' },
                        _react2.default.createElement(
                            'div',
                            { className: 'fltr-crd-img text-center' },
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    _initialsPicture2.default,
                                    { name: comment.author ? comment.author.name : comment.user_name, has_image: comment.author && comment.author.profile_img ? comment.author.profile_img : comment.profile_img, className: 'initialsPicture-ds fltr-initialPicture-ds' },
                                    _react2.default.createElement('img', { style: { width: '40px' }, className: 'img-fluid img-round', src: comment.author && comment.author.profile_img ? comment.author.profile_img : comment.profile_img, alt: comment.author ? comment.author.name : comment.user_name, title: comment.author ? comment.author.name : comment.user_name })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'dr-profile' },
                            comment.author ? _react2.default.createElement(
                                'a',
                                { className: 'dr-name', href: comment.author && comment.author.url ? `/${comment.author.url}` : `/opd/doctor/${comment.author.id}`, onClick: e => this.authorClick(comment, e) },
                                _react2.default.createElement(
                                    'h1',
                                    { className: `dr-name ${comment.author ? 'comments-rply' : ''}` },
                                    comment.author ? `Dr. ${comment.author.name}` : comment.user_name,
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'cmnt-rply-txt', onClick: e => e.stopPropagation() },
                                        _react2.default.createElement(
                                            'span',
                                            { onClick: e => e.preventDefault(), className: 'rply-spn' },
                                            comment.author ? '(author)' : ''
                                        ),
                                        _react2.default.createElement('img', { onClick: e => e.preventDefault(), className: 'img-rply', src: "/assets" + "/img/reply.svg" }),
                                        _react2.default.createElement(
                                            'span',
                                            { onClick: e => e.preventDefault(), className: 'rply-sndr' },
                                            parentName
                                        )
                                    )
                                )
                            ) : _react2.default.createElement(
                                'h1',
                                { className: 'dr-name', onClick: e => this.authorClick(comment, e) },
                                comment.user_name,
                                _react2.default.createElement(
                                    'div',
                                    { className: 'cmnt-rply-txt', onClick: e => e.stopPropagation() },
                                    _react2.default.createElement('img', { className: 'img-rply', src: "/assets" + "/img/reply.svg" }),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'rply-sndr' },
                                        parentName
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'h2',
                                { className: 'add-details' },
                                comment.submit_date ? new Date(comment.submit_date).toDateString() : 'No Date Available'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'usr-comments-para' },
                        comment.comment
                    ),
                    this.props.replyOpenFor == comment.id ? '' : _react2.default.createElement(
                        'div',
                        { className: 'text-right', onClick: this.replyClicked.bind(this, comment) },
                        _react2.default.createElement(
                            'span',
                            { className: 'comments-rply' },
                            'Reply'
                        )
                    ),
                    this.props.replyOpenFor == comment.id ? this.props.isUserLogin ? _react2.default.createElement(
                        'div',
                        { className: 'comments-post-input' },
                        _react2.default.createElement('input', { type: 'text', onChange: this.props.handleInputComment.bind(this) }),
                        _react2.default.createElement(
                            'button',
                            { className: 'comments-post-btns', onClick: this.props.postReply.bind(this) },
                            'Post'
                        )
                    ) : _react2.default.createElement(_ArticleCommentBox2.default, _extends({}, this.props, this.state, { parentCommentId: comment.id, getArticleData: this.props.hospitalPage ? () => {} : this.props.getArticleData.bind(this) })) : ''
                )
            ),
            comment.children && comment.children.length ? comment.children.map((child, key) => {
                return _react2.default.createElement(Comment, _extends({ key: child.id }, self.props, { childData: child, parentComment: comment }));
            }) : ''
        );
    }

}

exports.default = Comment;

/***/ }),

/***/ "./dev/js/components/commons/article/Reply.js":
/*!****************************************************!*\
  !*** ./dev/js/components/commons/article/Reply.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ArticleCommentBox = __webpack_require__(/*! ./ArticleCommentBox.js */ "./dev/js/components/commons/article/ArticleCommentBox.js");

var _ArticleCommentBox2 = _interopRequireDefault(_ArticleCommentBox);

var _initialsPicture = __webpack_require__(/*! ../initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _Comment = __webpack_require__(/*! ./Comment.js */ "./dev/js/components/commons/article/Comment.js");

var _Comment2 = _interopRequireDefault(_Comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ReplyView extends _react2.default.Component {

    authorClick(data) {
        if (data.author) {

            if (data.author.url) {
                this.props.history.push(data.author.url);
            } else {
                this.props.history.push(`/opd/doctor/${data.author.id}`);
            }
        }
    }

    replyClicked(comment) {
        this.props.commentReplyClicked(comment.id);
    }

    render() {
        let comment = this.props.commentData;
        let self = this;
        return _react2.default.createElement(
            'div',
            { className: 'widget mrb-15 mrng-top-12' },
            _react2.default.createElement(
                'div',
                { className: 'widget-content' },
                _react2.default.createElement(
                    'div',
                    { className: 'dr-qucik-info doc-gold-', key: this.props.commentData.id },
                    _react2.default.createElement(
                        'div',
                        { className: 'fltr-crd-img text-center' },
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                _initialsPicture2.default,
                                { name: this.props.commentData.author ? this.props.commentData.author.name : this.props.commentData.user_name, has_image: this.props.commentData.author && this.props.commentData.author.profile_img ? this.props.commentData.author.profile_img : this.props.commentData.profile_img, className: 'initialsPicture-ds fltr-initialPicture-ds' },
                                _react2.default.createElement('img', { style: { width: '50px' }, className: 'img-fluid img-round', src: this.props.commentData.author && this.props.commentData.author.profile_img ? this.props.commentData.author.profile_img : this.props.commentData.profile_img, alt: this.props.commentData.author ? this.props.commentData.author.name : this.props.commentData.user_name, title: this.props.commentData.author ? this.props.commentData.author.name : this.props.commentData.user_name })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'dr-profile' },
                        _react2.default.createElement(
                            'p',
                            { className: `dr-name ${this.props.commentData.author && !this.props.notArticle ? 'comments-rply' : ''}`, onClick: e => this.props.notArticle ? {} : this.authorClick(this.props.commentData) },
                            this.props.commentData.author ? this.props.commentData.author.name : this.props.commentData.user_name
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'add-details' },
                            this.props.commentData.submit_date ? new Date(this.props.commentData.submit_date).toDateString() : ""
                        )
                    )
                ),
                _react2.default.createElement(
                    'p',
                    { className: 'usr-comments-para' },
                    this.props.commentData.comment
                ),
                this.props.replyOpenFor == this.props.commentData.id ? '' : _react2.default.createElement(
                    'div',
                    { className: 'text-right', onClick: this.replyClicked.bind(this, this.props.commentData) },
                    _react2.default.createElement(
                        'span',
                        { className: 'comments-rply' },
                        'Reply'
                    )
                ),
                this.props.replyOpenFor == this.props.commentData.id ? this.props.isUserLogin ? _react2.default.createElement(
                    'div',
                    { className: 'comments-post-input' },
                    _react2.default.createElement('input', { type: 'text', onChange: this.props.handleInputComment.bind(this) }),
                    _react2.default.createElement(
                        'button',
                        { className: 'comments-post-btns', onClick: this.props.postReply.bind(this) },
                        'Post'
                    )
                ) : _react2.default.createElement(_ArticleCommentBox2.default, _extends({}, this.props, this.state, { getArticleData: this.props.hospitalPage ? () => {} : this.props.getArticleData.bind(this), parentCommentId: this.props.commentData.id })) : '',
                this.props.commentData.children && this.props.commentData.children.length ? this.props.commentData.children.map((child, key) => {
                    return _react2.default.createElement(_Comment2.default, _extends({ key: child.id }, self.props, { childData: child, parentComment: this.props.commentData }));
                }) : ''
            )
        );
    }
}
exports.default = ReplyView;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2FydGljbGUvQXJ0aWNsZUNvbW1lbnRCb3guanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9hcnRpY2xlL0NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9hcnRpY2xlL1JlcGx5LmpzIl0sIm5hbWVzIjpbIkNvbW1tZW50VmlldyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwibmFtZSIsImVtYWlsIiwiY29tbWVudCIsImlucHV0SGFuZGxlciIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwicG9zdFJlcGx5IiwicHJldmVudERlZmF1bHQiLCJzZXRUaW1lb3V0IiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwidGV4dCIsInBvc3REYXRhIiwiT2JqZWN0IiwidmFsdWVzIiwicHJvZmlsZXMiLCJsZW5ndGgiLCJkZWZhdWx0UHJvZmlsZSIsInBhcmVudCIsInBhcmVudENvbW1lbnRJZCIsImFydGljbGVQYWdlIiwiYXJ0aWNsZURhdGEiLCJpZCIsImhvc3BpdGFsUGFnZSIsImhvc3BpdGFsX2lkIiwicG9zdENvbW1lbnQiLCJlcnJvciIsImRhdGEiLCJnZXRBcnRpY2xlRGF0YSIsImxvYWRDb21tZW50cyIsImVycm9yX21lc3NhZ2UiLCJ1bmRlZmluZWQiLCJyZW5kZXIiLCJTVE9SQUdFIiwiY2hlY2tBdXRoIiwiQVNTRVRTX0JBU0VfVVJMIiwiaGVpZ2h0IiwiYmluZCIsIkNvbW1lbnQiLCJhdXRob3JDbGljayIsImF1dGhvciIsInVybCIsImhpc3RvcnkiLCJwdXNoIiwicmVwbHlDbGlja2VkIiwiY29tbWVudFJlcGx5Q2xpY2tlZCIsInNlbGYiLCJwYXJlbnROYW1lIiwiY2hpbGREYXRhIiwicGFyZW50Q29tbWVudCIsInVzZXJfbmFtZSIsInByb2ZpbGVfaW1nIiwid2lkdGgiLCJzdG9wUHJvcGFnYXRpb24iLCJzdWJtaXRfZGF0ZSIsIkRhdGUiLCJ0b0RhdGVTdHJpbmciLCJyZXBseU9wZW5Gb3IiLCJpc1VzZXJMb2dpbiIsImhhbmRsZUlucHV0Q29tbWVudCIsImNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJrZXkiLCJSZXBseVZpZXciLCJjb21tZW50RGF0YSIsIm5vdEFydGljbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxNQUFNQSxZQUFOLFNBQTJCQyxnQkFBTUMsU0FBakMsQ0FBMEM7O0FBRXpDQyxhQUFZQyxLQUFaLEVBQWtCO0FBQ2pCLFFBQU1BLEtBQU47QUFDQSxPQUFLQyxLQUFMLEdBQWE7QUFDWkMsU0FBTSxFQURNO0FBRVpDLFVBQU8sRUFGSztBQUdaQyxZQUFTO0FBSEcsR0FBYjtBQUtBOztBQUVEQyxjQUFhQyxDQUFiLEVBQWdCO0FBQ1QsT0FBS0MsUUFBTCxDQUFjLEVBQUUsQ0FBQ0QsRUFBRUUsTUFBRixDQUFTTixJQUFWLEdBQWlCSSxFQUFFRSxNQUFGLENBQVNDLEtBQTVCLEVBQWQ7QUFDSDs7QUFFSkMsV0FBVUosQ0FBVixFQUFZO0FBQ1hBLElBQUVLLGNBQUY7QUFDQSxNQUFHLENBQUMsS0FBS1YsS0FBTCxDQUFXRyxPQUFmLEVBQXVCO0FBQ2JRLGNBQVcsTUFBTTtBQUNUQywyQkFBU0MsSUFBVCxDQUFjLEVBQUVDLEtBQUssZUFBUCxFQUF3QkMsTUFBTSw2QkFBOUIsRUFBZDtBQUNILElBRkwsRUFFTyxHQUZQO0FBR0E7QUFDSDtBQUNQLE1BQUlDLFdBQVc7O0FBRWRiLFlBQVMsS0FBS0gsS0FBTCxDQUFXRyxPQUZOO0FBR2RGLFNBQU1nQixPQUFPQyxNQUFQLENBQWMsS0FBS25CLEtBQUwsQ0FBV29CLFFBQXpCLEVBQW1DQyxNQUFuQyxJQUE2QyxLQUFLckIsS0FBTCxDQUFXb0IsUUFBWCxDQUFvQixLQUFLcEIsS0FBTCxDQUFXc0IsY0FBL0IsQ0FB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ZSI6IjM3LnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSc7XG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcblxuY2xhc3MgQ29tbW1lbnRWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRuYW1lOiAnJyxcblx0XHRcdGVtYWlsOiAnJyxcblx0XHRcdGNvbW1lbnQ6ICcnXG5cdFx0fVxuXHR9XG5cblx0aW5wdXRIYW5kbGVyKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSlcbiAgICB9XG5cblx0cG9zdFJlcGx5KGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdGlmKCF0aGlzLnN0YXRlLmNvbW1lbnQpe1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2Ugd3JpdGUgdmFsaWQgY29tbWVudC5cIiB9KVxuICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cdFx0bGV0IHBvc3REYXRhID0ge1xuXHRcdFx0XG5cdFx0XHRjb21tZW50OiB0aGlzLnN0YXRlLmNvbW1lbnQsXG5cdFx0XHRuYW1lOiBPYmplY3QudmFsdWVzKHRoaXMucHJvcHMucHJvZmlsZXMpLmxlbmd0aCAmJiB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGVdP3RoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0ubmFtZTp0aGlzLnN0YXRlLm5hbWUsXG5cdFx0XHRlbWFpbDogT2JqZWN0LnZhbHVlcyh0aGlzLnByb3BzLnByb2ZpbGVzKS5sZW5ndGggJiYgdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXT90aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGVdLmVtYWlsOnRoaXMuc3RhdGUuZW1haWwsXG5cdFx0XHRwYXJlbnQ6IHRoaXMucHJvcHMucGFyZW50Q29tbWVudElkIFxuXHRcdH1cblxuXHRcdGlmKHRoaXMucHJvcHMuYXJ0aWNsZVBhZ2UpIHtcblx0XHRcdHBvc3REYXRhWydhcnRpY2xlJ10gPSB0aGlzLnByb3BzLmFydGljbGVEYXRhLmlkXG5cdFx0fVxuXG5cdFx0aWYodGhpcy5wcm9wcy5ob3NwaXRhbFBhZ2UpIHtcblx0XHRcdHBvc3REYXRhWyd0eXBlJ10gPSAnaG9zcGl0YWwnXG5cdFx0XHRwb3N0RGF0YVsnaWQnXSA9IHRoaXMucHJvcHMuaG9zcGl0YWxfaWQgfHwgJydcblx0XHR9XG5cblx0XHR0aGlzLnByb3BzLnBvc3RDb21tZW50KHBvc3REYXRhLCAoZXJyb3IsIGRhdGEpPT4ge1xuXHRcdFx0aWYoZGF0YSl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2NvbW1lbnQ6JycsIG5hbWU6JycsZW1haWw6ICcnIH0pXG5cdFx0XHRcdFxuXG5cdFx0XHRcdGlmKHRoaXMucHJvcHMuYXJ0aWNsZVBhZ2Upe1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuZ2V0QXJ0aWNsZURhdGEoKVx0XG5cdFx0XHRcdH1lbHNlIHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLmxvYWRDb21tZW50cygpXG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiQ29tbWVudCBQb3N0ZWQgU3VjZXNzZnVsbHksIEF3YWl0aW5nIG1vZGVyYXRpb24uXCIgfSlcbiAgICAgICAgICAgICAgICB9LCA1MDApXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dmFyIGVycm9yX21lc3NhZ2UgPSBcIkNvdWxkIG5vdCBwb3N0IHlvdXIgY29tbWVudCwgVHJ5IGFnYWluIVwiXG5cdFx0XHRcdGlmIChlcnJvci5lcnJvciAhPSB1bmRlZmluZWQgJiYgZXJyb3IuZXJyb3IgIT0gJycpIHtcblx0XHRcdFx0XHRlcnJvcl9tZXNzYWdlID0gZXJyb3IuZXJyb3Jcblx0XHRcdFx0fVxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IGVycm9yX21lc3NhZ2UgfSlcblx0XHRcdFx0fSwgNTAwKVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0cmV0dXJuXG5cdH1cblxuXHRyZW5kZXIoKXtcblxuXHRcdHJldHVybihcblx0XHRcdDxmb3JtPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRzLXNlY3Rpb24tZm9ybVwiPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdE9iamVjdC52YWx1ZXModGhpcy5wcm9wcy5wcm9maWxlcykubGVuZ3RoIHx8IFNUT1JBR0UuY2hlY2tBdXRoKCk/XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY21udC1zdGF0aWNcIj48aW1nIHNyYyA9IHtBU1NFVFNfQkFTRV9VUkwrXCIvaW1nL2NoYXRDb21tZW50LnN2Z1wifSAvPkxlYXZlIGEgQ29tbWVudDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxhYmVsV3JhcFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYWJlbFdyYXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIHN0eWxlPXt7IGhlaWdodDogJzEwMHB4JyB9fSBpZD1cImZ0ZXh0XCIgY2xhc3NOYW1lPVwiZmMtaW5wdXRcIiBuYW1lPVwiY29tbWVudFwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgdmFsdWUgPSB7dGhpcy5zdGF0ZS5jb21tZW50fSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0+PC90ZXh0YXJlYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJmdGV4dFwiPllvdXIgQ29tbWVudDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDo8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY21udC1zdGF0aWNcIj48aW1nIHNyYyA9IHtBU1NFVFNfQkFTRV9VUkwrXCIvaW1nL2NoYXRDb21tZW50LnN2Z1wifSAvPkxlYXZlIGEgQ29tbWVudDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxhYmVsV3JhcFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYWJlbFdyYXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIHN0eWxlPXt7IGhlaWdodDogJzEwMHB4JyB9fSBpZD1cImZ0ZXh0XCIgY2xhc3NOYW1lPVwiZmMtaW5wdXRcIiBuYW1lPVwiY29tbWVudFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWUgPSB7dGhpcy5zdGF0ZS5jb21tZW50fSByZXF1aXJlZCAgb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9PjwvdGV4dGFyZWE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiZnRleHRcIj5Zb3VyIENvbW1lbnQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGFiZWxXcmFwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgaWQ9XCJmbmFtZVwiIGNsYXNzTmFtZT1cImZjLWlucHV0XCIgbmFtZT1cIm5hbWVcIiB2YWx1ZSA9IHt0aGlzLnN0YXRlLm5hbWV9IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiZm5hbWVcIj5OYW1lPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYWJlbFdyYXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBpZD1cImZtYWlsXCIgY2xhc3NOYW1lPVwiZmMtaW5wdXRcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZSA9IHt0aGlzLnN0YXRlLmVtYWlsfSB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfS8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImZtYWlsXCI+RW1haWw8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2Plx0XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29tbW5ldHMtc2JtdC1idG5cIj5cblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiY21udHMtYnRuXCIgb25DbGljaz0ge3RoaXMucG9zdFJlcGx5LmJpbmQodGhpcyl9PlBvc3QgQ29tbWVudDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZm9ybT5cblx0XHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21tbWVudFZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29tbWVudEJveCBmcm9tICcuL0FydGljbGVDb21tZW50Qm94LmpzJ1xuaW1wb3J0IEluaXRpYWxzUGljdHVyZSBmcm9tICcuLi9pbml0aWFsc1BpY3R1cmUnXG5cbmNsYXNzIENvbW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cblx0YXV0aG9yQ2xpY2soZGF0YSwgZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgaWYgKGRhdGEuYXV0aG9yKSB7XG4gICAgICAgIFxuICAgICAgICAgICAgaWYoZGF0YS5hdXRob3IudXJsKXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChkYXRhLmF1dGhvci51cmwpICAgIFxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9vcGQvZG9jdG9yLyR7ZGF0YS5hdXRob3IuaWR9YCkgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlcGx5Q2xpY2tlZChjb21tZW50KXtcbiAgICAgICAgdGhpcy5wcm9wcy5jb21tZW50UmVwbHlDbGlja2VkKGNvbW1lbnQuaWQpXG4gICAgfVxuXG4gIHJlbmRlcigpe1xuICBcdFx0bGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGxldCBwYXJlbnROYW1lID0gJydcbiAgICAgICAgbGV0IGNvbW1lbnQgPSB0aGlzLnByb3BzLmNoaWxkRGF0YVxuICAgICAgICBpZih0aGlzLnByb3BzLnBhcmVudENvbW1lbnQuYXV0aG9yKXtcbiAgICAgICAgICAgIHBhcmVudE5hbWUgPSBcIkRyLiBcIit0aGlzLnByb3BzLnBhcmVudENvbW1lbnQuYXV0aG9yLm5hbWVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBwYXJlbnROYW1lID0gdGhpcy5wcm9wcy5wYXJlbnRDb21tZW50LnVzZXJfbmFtZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybihcbiAgICAgICAgXHQ8ZGl2IGtleT17Y29tbWVudC5pZH0+XG4gICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJyZXBseS1jb21tZW50cy1jb250YWluZXJcIiBrZXk9e2NvbW1lbnQuaWR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWNvbW1lbnRzLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkci1xdWNpay1pbmZvIGRvYy1nb2xkLVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbHRyLWNyZC1pbWcgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5pdGlhbHNQaWN0dXJlICBuYW1lPXtjb21tZW50LmF1dGhvcj9jb21tZW50LmF1dGhvci5uYW1lOmNvbW1lbnQudXNlcl9uYW1lfSBoYXNfaW1hZ2U9e2NvbW1lbnQuYXV0aG9yICYmIGNvbW1lbnQuYXV0aG9yLnByb2ZpbGVfaW1nP2NvbW1lbnQuYXV0aG9yLnByb2ZpbGVfaW1nOmNvbW1lbnQucHJvZmlsZV9pbWd9IGNsYXNzTmFtZT1cImluaXRpYWxzUGljdHVyZS1kcyBmbHRyLWluaXRpYWxQaWN0dXJlLWRzXCI+PGltZyBzdHlsZT17eyB3aWR0aDogJzQwcHgnIH19IGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWctcm91bmRcIiBzcmM9e2NvbW1lbnQuYXV0aG9yICYmIGNvbW1lbnQuYXV0aG9yLnByb2ZpbGVfaW1nP2NvbW1lbnQuYXV0aG9yLnByb2ZpbGVfaW1nOmNvbW1lbnQucHJvZmlsZV9pbWd9IGFsdD17Y29tbWVudC5hdXRob3I/Y29tbWVudC5hdXRob3IubmFtZTpjb21tZW50LnVzZXJfbmFtZX0gdGl0bGU9e2NvbW1lbnQuYXV0aG9yP2NvbW1lbnQuYXV0aG9yLm5hbWU6Y29tbWVudC51c2VyX25hbWV9IC8+PC9Jbml0aWFsc1BpY3R1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHItcHJvZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudC5hdXRob3I/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyLW5hbWVcIiBocmVmPXtjb21tZW50LmF1dGhvciAmJiBjb21tZW50LmF1dGhvci51cmw/YC8ke2NvbW1lbnQuYXV0aG9yLnVybH1gOmAvb3BkL2RvY3Rvci8ke2NvbW1lbnQuYXV0aG9yLmlkfWB9IG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmF1dGhvckNsaWNrKGNvbW1lbnQsIGUpIH0+PGgxIGNsYXNzTmFtZT17YGRyLW5hbWUgJHtjb21tZW50LmF1dGhvcj8nY29tbWVudHMtcnBseSc6Jyd9YH0gPntjb21tZW50LmF1dGhvcj9gRHIuICR7Y29tbWVudC5hdXRob3IubmFtZX1gOmNvbW1lbnQudXNlcl9uYW1lIH08ZGl2IGNsYXNzTmFtZT1cImNtbnQtcnBseS10eHRcIiBvbkNsaWNrPXsoZSk9PmUuc3RvcFByb3BhZ2F0aW9uKCl9PjxzcGFuIG9uQ2xpY2s9eyhlKT0+ZS5wcmV2ZW50RGVmYXVsdCgpfSBjbGFzc05hbWU9XCJycGx5LXNwblwiPntjb21tZW50LmF1dGhvcj8nKGF1dGhvciknOicnfTwvc3Bhbj48aW1nIG9uQ2xpY2s9eyhlKT0+ZS5wcmV2ZW50RGVmYXVsdCgpfSBjbGFzc05hbWU9XCJpbWctcnBseVwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3JlcGx5LnN2Z1wifSAvPjxzcGFuIG9uQ2xpY2s9eyhlKT0+ZS5wcmV2ZW50RGVmYXVsdCgpfSBjbGFzc05hbWU9XCJycGx5LXNuZHJcIj57IHBhcmVudE5hbWV9PC9zcGFuPjwvZGl2PjwvaDE+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PGgxIGNsYXNzTmFtZT1cImRyLW5hbWVcIiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5hdXRob3JDbGljayhjb21tZW50LCBlKX0+e2NvbW1lbnQudXNlcl9uYW1lIH08ZGl2IGNsYXNzTmFtZT1cImNtbnQtcnBseS10eHRcIiBvbkNsaWNrPXsoZSk9PmUuc3RvcFByb3BhZ2F0aW9uKCl9PjxpbWcgY2xhc3NOYW1lPVwiaW1nLXJwbHlcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9yZXBseS5zdmdcIn0gLz48c3BhbiBjbGFzc05hbWU9XCJycGx5LXNuZHJcIj57IHBhcmVudE5hbWV9PC9zcGFuPjwvZGl2PjwvaDE+ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJhZGQtZGV0YWlsc1wiPntjb21tZW50LnN1Ym1pdF9kYXRlP25ldyBEYXRlKGNvbW1lbnQuc3VibWl0X2RhdGUpLnRvRGF0ZVN0cmluZygpOidObyBEYXRlIEF2YWlsYWJsZSd9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidXNyLWNvbW1lbnRzLXBhcmFcIj57Y29tbWVudC5jb21tZW50fVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVwbHlPcGVuRm9yID09IGNvbW1lbnQuaWQ/JydcbiAgICAgICAgICAgICAgICAgICAgICAgIDo8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIiBvbkNsaWNrID0ge3RoaXMucmVwbHlDbGlja2VkLmJpbmQodGhpcyxjb21tZW50KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29tbWVudHMtcnBseVwiPlJlcGx5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVwbHlPcGVuRm9yID09IGNvbW1lbnQuaWQ/XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlzVXNlckxvZ2luP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudHMtcG9zdC1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVJbnB1dENvbW1lbnQuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb21tZW50cy1wb3N0LWJ0bnNcIiBvbkNsaWNrPXt0aGlzLnByb3BzLnBvc3RSZXBseS5iaW5kKHRoaXMpfT5Qb3N0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxDb21tZW50Qm94IHsuLi50aGlzLnByb3BzfSB7Li4udGhpcy5zdGF0ZX0gcGFyZW50Q29tbWVudElkID0ge2NvbW1lbnQuaWR9IGdldEFydGljbGVEYXRhPXt0aGlzLnByb3BzLmhvc3BpdGFsUGFnZT8oKT0+e306dGhpcy5wcm9wcy5nZXRBcnRpY2xlRGF0YS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6JycgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXHR7XG5cdFx0XHRcdGNvbW1lbnQuY2hpbGRyZW4gJiYgY29tbWVudC5jaGlsZHJlbi5sZW5ndGg/XG5cdFx0XHRcdFx0Y29tbWVudC5jaGlsZHJlbi5tYXAoKGNoaWxkLCBrZXkpID0+e1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxDb21tZW50IGtleT17Y2hpbGQuaWR9IHsuLi5zZWxmLnByb3BzfSBjaGlsZERhdGEgPSB7Y2hpbGR9IHBhcmVudENvbW1lbnQ9e2NvbW1lbnR9Lz5cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdDonJ1xuXHRcdFx0fVxuICAgIFx0PC9kaXY+XG4gICAgICAgICAgICApXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29tbWVudEJveCBmcm9tICcuL0FydGljbGVDb21tZW50Qm94LmpzJ1xuaW1wb3J0IEluaXRpYWxzUGljdHVyZSBmcm9tICcuLi9pbml0aWFsc1BpY3R1cmUnXG5pbXBvcnQgQ29tbWVudCBmcm9tICcuL0NvbW1lbnQuanMnXG5cbmNsYXNzIFJlcGx5VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuXHRhdXRob3JDbGljayhkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhLmF1dGhvcikge1xuICAgICAgICBcbiAgICAgICAgICAgIGlmKGRhdGEuYXV0aG9yLnVybCl7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goZGF0YS5hdXRob3IudXJsKSAgICBcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvb3BkL2RvY3Rvci8ke2RhdGEuYXV0aG9yLmlkfWApICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXBseUNsaWNrZWQoY29tbWVudCl7XG4gICAgICAgIHRoaXMucHJvcHMuY29tbWVudFJlcGx5Q2xpY2tlZChjb21tZW50LmlkKVxuICAgIH1cblxuXHRyZW5kZXIoKXtcblx0XHRsZXQgY29tbWVudCA9IHRoaXMucHJvcHMuY29tbWVudERhdGFcblx0XHRsZXQgc2VsZiA9IHRoaXNcblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTUgbXJuZy10b3AtMTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHItcXVjaWstaW5mbyBkb2MtZ29sZC1cIiBrZXk9e3RoaXMucHJvcHMuY29tbWVudERhdGEuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbHRyLWNyZC1pbWcgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5pdGlhbHNQaWN0dXJlICBuYW1lPXt0aGlzLnByb3BzLmNvbW1lbnREYXRhLmF1dGhvcj90aGlzLnByb3BzLmNvbW1lbnREYXRhLmF1dGhvci5uYW1lOnRoaXMucHJvcHMuY29tbWVudERhdGEudXNlcl9uYW1lfSBoYXNfaW1hZ2U9e3RoaXMucHJvcHMuY29tbWVudERhdGEuYXV0aG9yICYmIHRoaXMucHJvcHMuY29tbWVudERhdGEuYXV0aG9yLnByb2ZpbGVfaW1nP3RoaXMucHJvcHMuY29tbWVudERhdGEuYXV0aG9yLnByb2ZpbGVfaW1nOnRoaXMucHJvcHMuY29tbWVudERhdGEucHJvZmlsZV9pbWd9IGNsYXNzTmFtZT1cImluaXRpYWxzUGljdHVyZS1kcyBmbHRyLWluaXRpYWxQaWN0dXJlLWRzXCI+PGltZyBzdHlsZT17eyB3aWR0aDogJzUwcHgnIH19IGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWctcm91bmRcIiBzcmM9e3RoaXMucHJvcHMuY29tbWVudERhdGEuYXV0aG9yICYmIHRoaXMucHJvcHMuY29tbWVudERhdGEuYXV0aG9yLnByb2ZpbGVfaW1nP3RoaXMucHJvcHMuY29tbWVudERhdGEuYXV0aG9yLnByb2ZpbGVfaW1nOnRoaXMucHJvcHMuY29tbWVudERhdGEucHJvZmlsZV9pbWd9IGFsdD17dGhpcy5wcm9wcy5jb21tZW50RGF0YS5hdXRob3I/dGhpcy5wcm9wcy5jb21tZW50RGF0YS5hdXRob3IubmFtZTp0aGlzLnByb3BzLmNvbW1lbnREYXRhLnVzZXJfbmFtZX0gdGl0bGU9e3RoaXMucHJvcHMuY29tbWVudERhdGEuYXV0aG9yP3RoaXMucHJvcHMuY29tbWVudERhdGEuYXV0aG9yLm5hbWU6dGhpcy5wcm9wcy5jb21tZW50RGF0YS51c2VyX25hbWV9IC8+PC9Jbml0aWFsc1BpY3R1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHItcHJvZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YGRyLW5hbWUgJHt0aGlzLnByb3BzLmNvbW1lbnREYXRhLmF1dGhvciAmJiAhdGhpcy5wcm9wcy5ub3RBcnRpY2xlPydjb21tZW50cy1ycGx5JzonJ31gfSBvbkNsaWNrPXsoZSkgPT4gdGhpcy5wcm9wcy5ub3RBcnRpY2xlP3t9OnRoaXMuYXV0aG9yQ2xpY2sodGhpcy5wcm9wcy5jb21tZW50RGF0YSl9Pnt0aGlzLnByb3BzLmNvbW1lbnREYXRhLmF1dGhvcj90aGlzLnByb3BzLmNvbW1lbnREYXRhLmF1dGhvci5uYW1lOnRoaXMucHJvcHMuY29tbWVudERhdGEudXNlcl9uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhZGQtZGV0YWlsc1wiPnt0aGlzLnByb3BzLmNvbW1lbnREYXRhLnN1Ym1pdF9kYXRlP25ldyBEYXRlKHRoaXMucHJvcHMuY29tbWVudERhdGEuc3VibWl0X2RhdGUpLnRvRGF0ZVN0cmluZygpOlwiXCJ9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ1c3ItY29tbWVudHMtcGFyYVwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb21tZW50RGF0YS5jb21tZW50fVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVwbHlPcGVuRm9yID09IHRoaXMucHJvcHMuY29tbWVudERhdGEuaWQ/JydcbiAgICAgICAgICAgICAgICAgICAgICAgIDo8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIiBvbkNsaWNrID0ge3RoaXMucmVwbHlDbGlja2VkLmJpbmQodGhpcyx0aGlzLnByb3BzLmNvbW1lbnREYXRhKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29tbWVudHMtcnBseVwiPlJlcGx5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXBseU9wZW5Gb3IgPT0gdGhpcy5wcm9wcy5jb21tZW50RGF0YS5pZD9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaXNVc2VyTG9naW4/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50cy1wb3N0LWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUlucHV0Q29tbWVudC5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbW1lbnRzLXBvc3QtYnRuc1wiIG9uQ2xpY2s9e3RoaXMucHJvcHMucG9zdFJlcGx5LmJpbmQodGhpcyl9PlBvc3Q8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PENvbW1lbnRCb3ggey4uLnRoaXMucHJvcHN9IHsuLi50aGlzLnN0YXRlfSBnZXRBcnRpY2xlRGF0YT17dGhpcy5wcm9wcy5ob3NwaXRhbFBhZ2U/KCk9Pnt9OnRoaXMucHJvcHMuZ2V0QXJ0aWNsZURhdGEuYmluZCh0aGlzKX0gcGFyZW50Q29tbWVudElkID0ge3RoaXMucHJvcHMuY29tbWVudERhdGEuaWR9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJyAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXHRcdFx0XHR7XG4gICAgXHRcdFx0XHRcdHRoaXMucHJvcHMuY29tbWVudERhdGEuY2hpbGRyZW4gJiYgdGhpcy5wcm9wcy5jb21tZW50RGF0YS5jaGlsZHJlbi5sZW5ndGg/XG4gICAgXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5jb21tZW50RGF0YS5jaGlsZHJlbi5tYXAoKGNoaWxkLCBrZXkpID0+e1xuICAgIFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxDb21tZW50IGtleT17Y2hpbGQuaWR9IHsuLi5zZWxmLnByb3BzfSBjaGlsZERhdGEgPSB7Y2hpbGR9IHBhcmVudENvbW1lbnQ9e3RoaXMucHJvcHMuY29tbWVudERhdGF9Lz5cbiAgICBcdFx0XHRcdFx0XHR9KVxuICAgIFx0XHRcdFx0XHRcdDonJ1xuICAgIFx0XHRcdFx0fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHRcblx0XHQpXG5cdH1cbn1cbmV4cG9ydCBkZWZhdWx0IFJlcGx5VmlldyJdLCJzb3VyY2VSb290IjoiIn0=