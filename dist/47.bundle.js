(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommmentView = function (_React$Component) {
	_inherits(CommmentView, _React$Component);

	function CommmentView(props) {
		_classCallCheck(this, CommmentView);

		var _this = _possibleConstructorReturn(this, (CommmentView.__proto__ || Object.getPrototypeOf(CommmentView)).call(this, props));

		_this.state = {
			name: '',
			email: '',
			comment: ''
		};
		return _this;
	}

	_createClass(CommmentView, [{
		key: 'inputHandler',
		value: function inputHandler(e) {
			this.setState(_defineProperty({}, e.target.name, e.target.value));
		}
	}, {
		key: 'postReply',
		value: function postReply(e) {
			var _this2 = this;

			e.preventDefault();
			if (!this.state.comment) {
				setTimeout(function () {
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please write valid comment." });
				}, 500);
				return;
			}
			var postData = {

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

			this.props.postComment(postData, function (error, data) {
				if (data) {
					_this2.setState({ comment: '', name: '', email: '' });

					if (_this2.props.articlePage) {
						_this2.props.getArticleData();
					} else {
						_this2.props.loadComments();
					}

					setTimeout(function () {
						_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Comment Posted Sucessfully, Awaiting moderation." });
					}, 500);
				} else {
					var error_message = "Could not post your comment, Try again!";
					if (error.error != undefined && error.error != '') {
						error_message = error.error;
					}
					setTimeout(function () {
						_nodeSnackbar2.default.show({ pos: 'bottom-center', text: error_message });
					}, 500);
				}
			});
			return;
		}
	}, {
		key: 'render',
		value: function render() {

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
	}]);

	return CommmentView;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _ArticleCommentBox = __webpack_require__(/*! ./ArticleCommentBox.js */ "./dev/js/components/commons/article/ArticleCommentBox.js");

var _ArticleCommentBox2 = _interopRequireDefault(_ArticleCommentBox);

var _initialsPicture = __webpack_require__(/*! ../initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comment = function (_React$Component) {
    _inherits(Comment, _React$Component);

    function Comment() {
        _classCallCheck(this, Comment);

        return _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).apply(this, arguments));
    }

    _createClass(Comment, [{
        key: 'authorClick',
        value: function authorClick(data, e) {
            e.preventDefault();
            if (data.author) {

                if (data.author.url) {
                    this.props.history.push(data.author.url);
                } else {
                    this.props.history.push('/opd/doctor/' + data.author.id);
                }
            }
        }
    }, {
        key: 'replyClicked',
        value: function replyClicked(comment) {
            this.props.commentReplyClicked(comment.id);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var self = this;
            var parentName = '';
            var comment = this.props.childData;
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
                                    { className: 'dr-name', href: comment.author && comment.author.url ? '/' + comment.author.url : '/opd/doctor/' + comment.author.id, onClick: function onClick(e) {
                                            return _this2.authorClick(comment, e);
                                        } },
                                    _react2.default.createElement(
                                        'h1',
                                        { className: 'dr-name ' + (comment.author ? 'comments-rply' : '') },
                                        comment.author ? 'Dr. ' + comment.author.name : comment.user_name,
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'cmnt-rply-txt', onClick: function onClick(e) {
                                                    return e.stopPropagation();
                                                } },
                                            _react2.default.createElement(
                                                'span',
                                                { onClick: function onClick(e) {
                                                        return e.preventDefault();
                                                    }, className: 'rply-spn' },
                                                comment.author ? '(author)' : ''
                                            ),
                                            _react2.default.createElement('img', { onClick: function onClick(e) {
                                                    return e.preventDefault();
                                                }, className: 'img-rply', src: "/assets" + "/img/reply.svg" }),
                                            _react2.default.createElement(
                                                'span',
                                                { onClick: function onClick(e) {
                                                        return e.preventDefault();
                                                    }, className: 'rply-sndr' },
                                                parentName
                                            )
                                        )
                                    )
                                ) : _react2.default.createElement(
                                    'h1',
                                    { className: 'dr-name', onClick: function onClick(e) {
                                            return _this2.authorClick(comment, e);
                                        } },
                                    comment.user_name,
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'cmnt-rply-txt', onClick: function onClick(e) {
                                                return e.stopPropagation();
                                            } },
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
                        ) : _react2.default.createElement(_ArticleCommentBox2.default, _extends({}, this.props, this.state, { parentCommentId: comment.id, getArticleData: this.props.hospitalPage ? function () {} : this.props.getArticleData.bind(this) })) : ''
                    )
                ),
                comment.children && comment.children.length ? comment.children.map(function (child, key) {
                    return _react2.default.createElement(Comment, _extends({ key: child.id }, self.props, { childData: child, parentComment: comment }));
                }) : ''
            );
        }
    }]);

    return Comment;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _ArticleCommentBox = __webpack_require__(/*! ./ArticleCommentBox.js */ "./dev/js/components/commons/article/ArticleCommentBox.js");

var _ArticleCommentBox2 = _interopRequireDefault(_ArticleCommentBox);

var _initialsPicture = __webpack_require__(/*! ../initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _Comment = __webpack_require__(/*! ./Comment.js */ "./dev/js/components/commons/article/Comment.js");

var _Comment2 = _interopRequireDefault(_Comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReplyView = function (_React$Component) {
    _inherits(ReplyView, _React$Component);

    function ReplyView() {
        _classCallCheck(this, ReplyView);

        return _possibleConstructorReturn(this, (ReplyView.__proto__ || Object.getPrototypeOf(ReplyView)).apply(this, arguments));
    }

    _createClass(ReplyView, [{
        key: 'authorClick',
        value: function authorClick(data) {
            if (data.author) {

                if (data.author.url) {
                    this.props.history.push(data.author.url);
                } else {
                    this.props.history.push('/opd/doctor/' + data.author.id);
                }
            }
        }
    }, {
        key: 'replyClicked',
        value: function replyClicked(comment) {
            this.props.commentReplyClicked(comment.id);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var comment = this.props.commentData;
            var self = this;
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
                                { className: 'dr-name ' + (this.props.commentData.author && !this.props.notArticle ? 'comments-rply' : ''), onClick: function onClick(e) {
                                        return _this2.props.notArticle ? {} : _this2.authorClick(_this2.props.commentData);
                                    } },
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
                    ) : _react2.default.createElement(_ArticleCommentBox2.default, _extends({}, this.props, this.state, { getArticleData: this.props.hospitalPage ? function () {} : this.props.getArticleData.bind(this), parentCommentId: this.props.commentData.id })) : '',
                    this.props.commentData.children && this.props.commentData.children.length ? this.props.commentData.children.map(function (child, key) {
                        return _react2.default.createElement(_Comment2.default, _extends({ key: child.id }, self.props, { childData: child, parentComment: _this2.props.commentData }));
                    }) : ''
                )
            );
        }
    }]);

    return ReplyView;
}(_react2.default.Component);

exports.default = ReplyView;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2FydGljbGUvQXJ0aWNsZUNvbW1lbnRCb3guanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9hcnRpY2xlL0NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9hcnRpY2xlL1JlcGx5LmpzIl0sIm5hbWVzIjpbIkNvbW1tZW50VmlldyIsInByb3BzIiwic3RhdGUiLCJuYW1lIiwiZW1haWwiLCJjb21tZW50IiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsInNldFRpbWVvdXQiLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJ0ZXh0IiwicG9zdERhdGEiLCJPYmplY3QiLCJ2YWx1ZXMiLCJwcm9maWxlcyIsImxlbmd0aCIsImRlZmF1bHRQcm9maWxlIiwicGFyZW50IiwicGFyZW50Q29tbWVudElkIiwiYXJ0aWNsZVBhZ2UiLCJhcnRpY2xlRGF0YSIsImlkIiwiaG9zcGl0YWxQYWdlIiwiaG9zcGl0YWxfaWQiLCJwb3N0Q29tbWVudCIsImVycm9yIiwiZGF0YSIsImdldEFydGljbGVEYXRhIiwibG9hZENvbW1lbnRzIiwiZXJyb3JfbWVzc2FnZSIsInVuZGVmaW5lZCIsIlNUT1JBR0UiLCJjaGVja0F1dGgiLCJBU1NFVFNfQkFTRV9VUkwiLCJoZWlnaHQiLCJpbnB1dEhhbmRsZXIiLCJiaW5kIiwicG9zdFJlcGx5IiwiUmVhY3QiLCJDb21wb25lbnQiLCJDb21tZW50IiwiYXV0aG9yIiwidXJsIiwiaGlzdG9yeSIsInB1c2giLCJjb21tZW50UmVwbHlDbGlja2VkIiwic2VsZiIsInBhcmVudE5hbWUiLCJjaGlsZERhdGEiLCJwYXJlbnRDb21tZW50IiwidXNlcl9uYW1lIiwicHJvZmlsZV9pbWciLCJ3aWR0aCIsImF1dGhvckNsaWNrIiwic3RvcFByb3BhZ2F0aW9uIiwic3VibWl0X2RhdGUiLCJEYXRlIiwidG9EYXRlU3RyaW5nIiwicmVwbHlPcGVuRm9yIiwicmVwbHlDbGlja2VkIiwiaXNVc2VyTG9naW4iLCJoYW5kbGVJbnB1dENvbW1lbnQiLCJjaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwia2V5IiwiUmVwbHlWaWV3IiwiY29tbWVudERhdGEiLCJub3RBcnRpY2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFk7OztBQUVMLHVCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsMEhBQ1hBLEtBRFc7O0FBRWpCLFFBQUtDLEtBQUwsR0FBYTtBQUNaQyxTQUFNLEVBRE07QUFFWkMsVUFBTyxFQUZLO0FBR1pDLFlBQVM7QUFIRyxHQUFiO0FBRmlCO0FBT2pCOzs7OytCQUVZQyxDLEVBQUc7QUFDVCxRQUFLQyxRQUFMLHFCQUFpQkQsRUFBRUUsTUFBRixDQUFTTCxJQUExQixFQUFpQ0csRUFBRUUsTUFBRixDQUFTQyxLQUExQztBQUNIOzs7NEJBRU1ILEMsRUFBRTtBQUFBOztBQUNYQSxLQUFFSSxjQUFGO0FBQ0EsT0FBRyxDQUFDLEtBQUtSLEtBQUwsQ0FBV0csT0FBZixFQUF1QjtBQUNiTSxlQUFXLFlBQU07QUFDVEMsNEJBQVNDLElBQVQsQ0FBYyxFQUFFQyxLQUFLLGVBQVAsRUFBd0JDLE1BQU0sNkJBQTlCLEVBQWQ7QUFDSCxLQUZMLEVBRU8sR0FGUDtBQUdBO0FBQ0g7QUFDUCxPQUFJQyxXQUFXOztBQUVkWCxhQUFTLEtBQUtILEtBQUwsQ0FBV0csT0FGTjtBQUdkRixVQUFNYyxPQUFPQyxNQUFQLENBQWMsS0FBS2pCLEtBQUwsQ0FBV2tCLFFBQXpCLEVBQW1DQyxNQUFuQyxJQUE2QyxLQUFLbkIsS0FBTCxDQUFXa0IsUUFBWCxDQUFvQixLQUFLbEIsS0FBTCxDQUFXb0IsY0FBL0IsQ0FBN0MsR0FBNEYsS0FBS3BCLEtBQUwsQ0FBV2tCLFFBQVgsQ0FBb0IsS0FBS2xCLEtBQUwsQ0FB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QURiLGFBREQ7QUE0Q0E7Ozs7RUFqRXNCN0IsZ0JBQU1DLFM7O2tCQW1FZjJCLFMiLCJmaWxlIjoiNDcuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJztcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuXG5jbGFzcyBDb21tbWVudFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdFxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG5hbWU6ICcnLFxuXHRcdFx0ZW1haWw6ICcnLFxuXHRcdFx0Y29tbWVudDogJydcblx0XHR9XG5cdH1cblxuXHRpbnB1dEhhbmRsZXIoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgIH1cblxuXHRwb3N0UmVwbHkoZSl7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0aWYoIXRoaXMuc3RhdGUuY29tbWVudCl7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSB3cml0ZSB2YWxpZCBjb21tZW50LlwiIH0pXG4gICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblx0XHRsZXQgcG9zdERhdGEgPSB7XG5cdFx0XHRcblx0XHRcdGNvbW1lbnQ6IHRoaXMuc3RhdGUuY29tbWVudCxcblx0XHRcdG5hbWU6IE9iamVjdC52YWx1ZXModGhpcy5wcm9wcy5wcm9maWxlcykubGVuZ3RoICYmIHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0/dGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXS5uYW1lOnRoaXMuc3RhdGUubmFtZSxcblx0XHRcdGVtYWlsOiBPYmplY3QudmFsdWVzKHRoaXMucHJvcHMucHJvZmlsZXMpLmxlbmd0aCAmJiB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGVdP3RoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0uZW1haWw6dGhpcy5zdGF0ZS5lbWFpbCxcblx0XHRcdHBhcmVudDogdGhpcy5wcm9wcy5wYXJlbnRDb21tZW50SWQgXG5cdFx0fVxuXG5cdFx0aWYodGhpcy5wcm9wcy5hcnRpY2xlUGFnZSkge1xuXHRcdFx0cG9zdERhdGFbJ2FydGljbGUnXSA9IHRoaXMucHJvcHMuYXJ0aWNsZURhdGEuaWRcblx0XHR9XG5cblx0XHRpZih0aGlzLnByb3BzLmhvc3BpdGFsUGFnZSkge1xuXHRcdFx0cG9zdERhdGFbJ3R5cGUnXSA9ICdob3NwaXRhbCdcblx0XHRcdHBvc3REYXRhWydpZCddID0gdGhpcy5wcm9wcy5ob3NwaXRhbF9pZCB8fCAnJ1xuXHRcdH1cblxuXHRcdHRoaXMucHJvcHMucG9zdENvbW1lbnQocG9zdERhdGEsIChlcnJvciwgZGF0YSk9PiB7XG5cdFx0XHRpZihkYXRhKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7Y29tbWVudDonJywgbmFtZTonJyxlbWFpbDogJycgfSlcblx0XHRcdFx0XG5cblx0XHRcdFx0aWYodGhpcy5wcm9wcy5hcnRpY2xlUGFnZSl7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5nZXRBcnRpY2xlRGF0YSgpXHRcblx0XHRcdFx0fWVsc2Uge1xuXHRcdFx0XHRcdHRoaXMucHJvcHMubG9hZENvbW1lbnRzKClcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJDb21tZW50IFBvc3RlZCBTdWNlc3NmdWxseSwgQXdhaXRpbmcgbW9kZXJhdGlvbi5cIiB9KVxuICAgICAgICAgICAgICAgIH0sIDUwMClcblx0XHRcdH1lbHNle1xuXHRcdFx0XHR2YXIgZXJyb3JfbWVzc2FnZSA9IFwiQ291bGQgbm90IHBvc3QgeW91ciBjb21tZW50LCBUcnkgYWdhaW4hXCJcblx0XHRcdFx0aWYgKGVycm9yLmVycm9yICE9IHVuZGVmaW5lZCAmJiBlcnJvci5lcnJvciAhPSAnJykge1xuXHRcdFx0XHRcdGVycm9yX21lc3NhZ2UgPSBlcnJvci5lcnJvclxuXHRcdFx0XHR9XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogZXJyb3JfbWVzc2FnZSB9KVxuXHRcdFx0XHR9LCA1MDApXG5cdFx0XHR9XG5cdFx0fSlcblx0XHRyZXR1cm5cblx0fVxuXG5cdHJlbmRlcigpe1xuXG5cdFx0cmV0dXJuKFxuXHRcdFx0PGZvcm0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudHMtc2VjdGlvbi1mb3JtXCI+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0T2JqZWN0LnZhbHVlcyh0aGlzLnByb3BzLnByb2ZpbGVzKS5sZW5ndGggfHwgU1RPUkFHRS5jaGVja0F1dGgoKT9cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjbW50LXN0YXRpY1wiPjxpbWcgc3JjID0ge0FTU0VUU19CQVNFX1VSTCtcIi9pbWcvY2hhdENvbW1lbnQuc3ZnXCJ9IC8+TGVhdmUgYSBDb21tZW50PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGFiZWxXcmFwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxhYmVsV3JhcFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwcHgnIH19IGlkPVwiZnRleHRcIiBjbGFzc05hbWU9XCJmYy1pbnB1dFwiIG5hbWU9XCJjb21tZW50XCIgdHlwZT1cInRleHRcIiByZXF1aXJlZCB2YWx1ZSA9IHt0aGlzLnN0YXRlLmNvbW1lbnR9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfT48L3RleHRhcmVhPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImZ0ZXh0XCI+WW91ciBDb21tZW50PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0OjxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjbW50LXN0YXRpY1wiPjxpbWcgc3JjID0ge0FTU0VUU19CQVNFX1VSTCtcIi9pbWcvY2hhdENvbW1lbnQuc3ZnXCJ9IC8+TGVhdmUgYSBDb21tZW50PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGFiZWxXcmFwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxhYmVsV3JhcFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwcHgnIH19IGlkPVwiZnRleHRcIiBjbGFzc05hbWU9XCJmYy1pbnB1dFwiIG5hbWU9XCJjb21tZW50XCIgdHlwZT1cInRleHRcIiB2YWx1ZSA9IHt0aGlzLnN0YXRlLmNvbW1lbnR9IHJlcXVpcmVkICBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0+PC90ZXh0YXJlYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJmdGV4dFwiPllvdXIgQ29tbWVudDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYWJlbFdyYXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBpZD1cImZuYW1lXCIgY2xhc3NOYW1lPVwiZmMtaW5wdXRcIiBuYW1lPVwibmFtZVwiIHZhbHVlID0ge3RoaXMuc3RhdGUubmFtZX0gdHlwZT1cInRleHRcIiByZXF1aXJlZCBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0vPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJmbmFtZVwiPk5hbWU8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxhYmVsV3JhcFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IGlkPVwiZm1haWxcIiBjbGFzc05hbWU9XCJmYy1pbnB1dFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlID0ge3RoaXMuc3RhdGUuZW1haWx9IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiZm1haWxcIj5FbWFpbDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb21tbmV0cy1zYm10LWJ0blwiPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJjbW50cy1idG5cIiBvbkNsaWNrPSB7dGhpcy5wb3N0UmVwbHkuYmluZCh0aGlzKX0+UG9zdCBDb21tZW50PC9idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9mb3JtPlxuXHRcdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1tZW50VmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDb21tZW50Qm94IGZyb20gJy4vQXJ0aWNsZUNvbW1lbnRCb3guanMnXG5pbXBvcnQgSW5pdGlhbHNQaWN0dXJlIGZyb20gJy4uL2luaXRpYWxzUGljdHVyZSdcblxuY2xhc3MgQ29tbWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuXHRhdXRob3JDbGljayhkYXRhLCBlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBpZiAoZGF0YS5hdXRob3IpIHtcbiAgICAgICAgXG4gICAgICAgICAgICBpZihkYXRhLmF1dGhvci51cmwpe1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGRhdGEuYXV0aG9yLnVybCkgICAgXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL29wZC9kb2N0b3IvJHtkYXRhLmF1dGhvci5pZH1gKSAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVwbHlDbGlja2VkKGNvbW1lbnQpe1xuICAgICAgICB0aGlzLnByb3BzLmNvbW1lbnRSZXBseUNsaWNrZWQoY29tbWVudC5pZClcbiAgICB9XG5cbiAgcmVuZGVyKCl7XG4gIFx0XHRsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgbGV0IHBhcmVudE5hbWUgPSAnJ1xuICAgICAgICBsZXQgY29tbWVudCA9IHRoaXMucHJvcHMuY2hpbGREYXRhXG4gICAgICAgIGlmKHRoaXMucHJvcHMucGFyZW50Q29tbWVudC5hdXRob3Ipe1xuICAgICAgICAgICAgcGFyZW50TmFtZSA9IFwiRHIuIFwiK3RoaXMucHJvcHMucGFyZW50Q29tbWVudC5hdXRob3IubmFtZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHBhcmVudE5hbWUgPSB0aGlzLnByb3BzLnBhcmVudENvbW1lbnQudXNlcl9uYW1lXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuKFxuICAgICAgICBcdDxkaXYga2V5PXtjb21tZW50LmlkfT5cbiAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cInJlcGx5LWNvbW1lbnRzLWNvbnRhaW5lclwiIGtleT17Y29tbWVudC5pZH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItY29tbWVudHMtc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyLXF1Y2lrLWluZm8gZG9jLWdvbGQtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsdHItY3JkLWltZyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbml0aWFsc1BpY3R1cmUgIG5hbWU9e2NvbW1lbnQuYXV0aG9yP2NvbW1lbnQuYXV0aG9yLm5hbWU6Y29tbWVudC51c2VyX25hbWV9IGhhc19pbWFnZT17Y29tbWVudC5hdXRob3IgJiYgY29tbWVudC5hdXRob3IucHJvZmlsZV9pbWc/Y29tbWVudC5hdXRob3IucHJvZmlsZV9pbWc6Y29tbWVudC5wcm9maWxlX2ltZ30gY2xhc3NOYW1lPVwiaW5pdGlhbHNQaWN0dXJlLWRzIGZsdHItaW5pdGlhbFBpY3R1cmUtZHNcIj48aW1nIHN0eWxlPXt7IHdpZHRoOiAnNDBweCcgfX0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZy1yb3VuZFwiIHNyYz17Y29tbWVudC5hdXRob3IgJiYgY29tbWVudC5hdXRob3IucHJvZmlsZV9pbWc/Y29tbWVudC5hdXRob3IucHJvZmlsZV9pbWc6Y29tbWVudC5wcm9maWxlX2ltZ30gYWx0PXtjb21tZW50LmF1dGhvcj9jb21tZW50LmF1dGhvci5uYW1lOmNvbW1lbnQudXNlcl9uYW1lfSB0aXRsZT17Y29tbWVudC5hdXRob3I/Y29tbWVudC5hdXRob3IubmFtZTpjb21tZW50LnVzZXJfbmFtZX0gLz48L0luaXRpYWxzUGljdHVyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkci1wcm9maWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50LmF1dGhvcj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHItbmFtZVwiIGhyZWY9e2NvbW1lbnQuYXV0aG9yICYmIGNvbW1lbnQuYXV0aG9yLnVybD9gLyR7Y29tbWVudC5hdXRob3IudXJsfWA6YC9vcGQvZG9jdG9yLyR7Y29tbWVudC5hdXRob3IuaWR9YH0gb25DbGljaz17KGUpID0+IHRoaXMuYXV0aG9yQ2xpY2soY29tbWVudCwgZSkgfT48aDEgY2xhc3NOYW1lPXtgZHItbmFtZSAke2NvbW1lbnQuYXV0aG9yPydjb21tZW50cy1ycGx5JzonJ31gfSA+e2NvbW1lbnQuYXV0aG9yP2BEci4gJHtjb21tZW50LmF1dGhvci5uYW1lfWA6Y29tbWVudC51c2VyX25hbWUgfTxkaXYgY2xhc3NOYW1lPVwiY21udC1ycGx5LXR4dFwiIG9uQ2xpY2s9eyhlKT0+ZS5zdG9wUHJvcGFnYXRpb24oKX0+PHNwYW4gb25DbGljaz17KGUpPT5lLnByZXZlbnREZWZhdWx0KCl9IGNsYXNzTmFtZT1cInJwbHktc3BuXCI+e2NvbW1lbnQuYXV0aG9yPycoYXV0aG9yKSc6Jyd9PC9zcGFuPjxpbWcgb25DbGljaz17KGUpPT5lLnByZXZlbnREZWZhdWx0KCl9IGNsYXNzTmFtZT1cImltZy1ycGx5XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcmVwbHkuc3ZnXCJ9IC8+PHNwYW4gb25DbGljaz17KGUpPT5lLnByZXZlbnREZWZhdWx0KCl9IGNsYXNzTmFtZT1cInJwbHktc25kclwiPnsgcGFyZW50TmFtZX08L3NwYW4+PC9kaXY+PC9oMT48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8aDEgY2xhc3NOYW1lPVwiZHItbmFtZVwiIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmF1dGhvckNsaWNrKGNvbW1lbnQsIGUpfT57Y29tbWVudC51c2VyX25hbWUgfTxkaXYgY2xhc3NOYW1lPVwiY21udC1ycGx5LXR4dFwiIG9uQ2xpY2s9eyhlKT0+ZS5zdG9wUHJvcGFnYXRpb24oKX0+PGltZyBjbGFzc05hbWU9XCJpbWctcnBseVwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3JlcGx5LnN2Z1wifSAvPjxzcGFuIGNsYXNzTmFtZT1cInJwbHktc25kclwiPnsgcGFyZW50TmFtZX08L3NwYW4+PC9kaXY+PC9oMT4gICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImFkZC1kZXRhaWxzXCI+e2NvbW1lbnQuc3VibWl0X2RhdGU/bmV3IERhdGUoY29tbWVudC5zdWJtaXRfZGF0ZSkudG9EYXRlU3RyaW5nKCk6J05vIERhdGUgQXZhaWxhYmxlJ308L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ1c3ItY29tbWVudHMtcGFyYVwiPntjb21tZW50LmNvbW1lbnR9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXBseU9wZW5Gb3IgPT0gY29tbWVudC5pZD8nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOjxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiIG9uQ2xpY2sgPSB7dGhpcy5yZXBseUNsaWNrZWQuYmluZCh0aGlzLGNvbW1lbnQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb21tZW50cy1ycGx5XCI+UmVwbHk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXBseU9wZW5Gb3IgPT0gY29tbWVudC5pZD9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaXNVc2VyTG9naW4/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50cy1wb3N0LWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUlucHV0Q29tbWVudC5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbW1lbnRzLXBvc3QtYnRuc1wiIG9uQ2xpY2s9e3RoaXMucHJvcHMucG9zdFJlcGx5LmJpbmQodGhpcyl9PlBvc3Q8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PENvbW1lbnRCb3ggey4uLnRoaXMucHJvcHN9IHsuLi50aGlzLnN0YXRlfSBwYXJlbnRDb21tZW50SWQgPSB7Y29tbWVudC5pZH0gZ2V0QXJ0aWNsZURhdGE9e3RoaXMucHJvcHMuaG9zcGl0YWxQYWdlPygpPT57fTp0aGlzLnByb3BzLmdldEFydGljbGVEYXRhLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJyAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcdHtcblx0XHRcdFx0Y29tbWVudC5jaGlsZHJlbiAmJiBjb21tZW50LmNoaWxkcmVuLmxlbmd0aD9cblx0XHRcdFx0XHRjb21tZW50LmNoaWxkcmVuLm1hcCgoY2hpbGQsIGtleSkgPT57XG5cdFx0XHRcdFx0XHRyZXR1cm4gPENvbW1lbnQga2V5PXtjaGlsZC5pZH0gey4uLnNlbGYucHJvcHN9IGNoaWxkRGF0YSA9IHtjaGlsZH0gcGFyZW50Q29tbWVudD17Y29tbWVudH0vPlxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0OicnXG5cdFx0XHR9XG4gICAgXHQ8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDb21tZW50Qm94IGZyb20gJy4vQXJ0aWNsZUNvbW1lbnRCb3guanMnXG5pbXBvcnQgSW5pdGlhbHNQaWN0dXJlIGZyb20gJy4uL2luaXRpYWxzUGljdHVyZSdcbmltcG9ydCBDb21tZW50IGZyb20gJy4vQ29tbWVudC5qcydcblxuY2xhc3MgUmVwbHlWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG5cdGF1dGhvckNsaWNrKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEuYXV0aG9yKSB7XG4gICAgICAgIFxuICAgICAgICAgICAgaWYoZGF0YS5hdXRob3IudXJsKXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChkYXRhLmF1dGhvci51cmwpICAgIFxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9vcGQvZG9jdG9yLyR7ZGF0YS5hdXRob3IuaWR9YCkgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlcGx5Q2xpY2tlZChjb21tZW50KXtcbiAgICAgICAgdGhpcy5wcm9wcy5jb21tZW50UmVwbHlDbGlja2VkKGNvbW1lbnQuaWQpXG4gICAgfVxuXG5cdHJlbmRlcigpe1xuXHRcdGxldCBjb21tZW50ID0gdGhpcy5wcm9wcy5jb21tZW50RGF0YVxuXHRcdGxldCBzZWxmID0gdGhpc1xuXHRcdHJldHVybihcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNSBtcm5nLXRvcC0xMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkci1xdWNpay1pbmZvIGRvYy1nb2xkLVwiIGtleT17dGhpcy5wcm9wcy5jb21tZW50RGF0YS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsdHItY3JkLWltZyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbml0aWFsc1BpY3R1cmUgIG5hbWU9e3RoaXMucHJvcHMuY29tbWVudERhdGEuYXV0aG9yP3RoaXMucHJvcHMuY29tbWVudERhdGEuYXV0aG9yLm5hbWU6dGhpcy5wcm9wcy5jb21tZW50RGF0YS51c2VyX25hbWV9IGhhc19pbWFnZT17dGhpcy5wcm9wcy5jb21tZW50RGF0YS5hdXRob3IgJiYgdGhpcy5wcm9wcy5jb21tZW50RGF0YS5hdXRob3IucHJvZmlsZV9pbWc/dGhpcy5wcm9wcy5jb21tZW50RGF0YS5hdXRob3IucHJvZmlsZV9pbWc6dGhpcy5wcm9wcy5jb21tZW50RGF0YS5wcm9maWxlX2ltZ30gY2xhc3NOYW1lPVwiaW5pdGlhbHNQaWN0dXJlLWRzIGZsdHItaW5pdGlhbFBpY3R1cmUtZHNcIj48aW1nIHN0eWxlPXt7IHdpZHRoOiAnNTBweCcgfX0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZy1yb3VuZFwiIHNyYz17dGhpcy5wcm9wcy5jb21tZW50RGF0YS5hdXRob3IgJiYgdGhpcy5wcm9wcy5jb21tZW50RGF0YS5hdXRob3IucHJvZmlsZV9pbWc/dGhpcy5wcm9wcy5jb21tZW50RGF0YS5hdXRob3IucHJvZmlsZV9pbWc6dGhpcy5wcm9wcy5jb21tZW50RGF0YS5wcm9maWxlX2ltZ30gYWx0PXt0aGlzLnByb3BzLmNvbW1lbnREYXRhLmF1dGhvcj90aGlzLnByb3BzLmNvbW1lbnREYXRhLmF1dGhvci5uYW1lOnRoaXMucHJvcHMuY29tbWVudERhdGEudXNlcl9uYW1lfSB0aXRsZT17dGhpcy5wcm9wcy5jb21tZW50RGF0YS5hdXRob3I/dGhpcy5wcm9wcy5jb21tZW50RGF0YS5hdXRob3IubmFtZTp0aGlzLnByb3BzLmNvbW1lbnREYXRhLnVzZXJfbmFtZX0gLz48L0luaXRpYWxzUGljdHVyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkci1wcm9maWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgZHItbmFtZSAke3RoaXMucHJvcHMuY29tbWVudERhdGEuYXV0aG9yICYmICF0aGlzLnByb3BzLm5vdEFydGljbGU/J2NvbW1lbnRzLXJwbHknOicnfWB9IG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnByb3BzLm5vdEFydGljbGU/e306dGhpcy5hdXRob3JDbGljayh0aGlzLnByb3BzLmNvbW1lbnREYXRhKX0+e3RoaXMucHJvcHMuY29tbWVudERhdGEuYXV0aG9yP3RoaXMucHJvcHMuY29tbWVudERhdGEuYXV0aG9yLm5hbWU6dGhpcy5wcm9wcy5jb21tZW50RGF0YS51c2VyX25hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFkZC1kZXRhaWxzXCI+e3RoaXMucHJvcHMuY29tbWVudERhdGEuc3VibWl0X2RhdGU/bmV3IERhdGUodGhpcy5wcm9wcy5jb21tZW50RGF0YS5zdWJtaXRfZGF0ZSkudG9EYXRlU3RyaW5nKCk6XCJcIn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInVzci1jb21tZW50cy1wYXJhXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbW1lbnREYXRhLmNvbW1lbnR9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXBseU9wZW5Gb3IgPT0gdGhpcy5wcm9wcy5jb21tZW50RGF0YS5pZD8nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOjxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiIG9uQ2xpY2sgPSB7dGhpcy5yZXBseUNsaWNrZWQuYmluZCh0aGlzLHRoaXMucHJvcHMuY29tbWVudERhdGEpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb21tZW50cy1ycGx5XCI+UmVwbHk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlcGx5T3BlbkZvciA9PSB0aGlzLnByb3BzLmNvbW1lbnREYXRhLmlkP1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pc1VzZXJMb2dpbj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRzLXBvc3QtaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlSW5wdXRDb21tZW50LmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY29tbWVudHMtcG9zdC1idG5zXCIgb25DbGljaz17dGhpcy5wcm9wcy5wb3N0UmVwbHkuYmluZCh0aGlzKX0+UG9zdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8Q29tbWVudEJveCB7Li4udGhpcy5wcm9wc30gey4uLnRoaXMuc3RhdGV9IGdldEFydGljbGVEYXRhPXt0aGlzLnByb3BzLmhvc3BpdGFsUGFnZT8oKT0+e306dGhpcy5wcm9wcy5nZXRBcnRpY2xlRGF0YS5iaW5kKHRoaXMpfSBwYXJlbnRDb21tZW50SWQgPSB7dGhpcy5wcm9wcy5jb21tZW50RGF0YS5pZH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgOicnICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcdFx0XHRcdHtcbiAgICBcdFx0XHRcdFx0dGhpcy5wcm9wcy5jb21tZW50RGF0YS5jaGlsZHJlbiAmJiB0aGlzLnByb3BzLmNvbW1lbnREYXRhLmNoaWxkcmVuLmxlbmd0aD9cbiAgICBcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmNvbW1lbnREYXRhLmNoaWxkcmVuLm1hcCgoY2hpbGQsIGtleSkgPT57XG4gICAgXHRcdFx0XHRcdFx0XHRyZXR1cm4gPENvbW1lbnQga2V5PXtjaGlsZC5pZH0gey4uLnNlbGYucHJvcHN9IGNoaWxkRGF0YSA9IHtjaGlsZH0gcGFyZW50Q29tbWVudD17dGhpcy5wcm9wcy5jb21tZW50RGF0YX0vPlxuICAgIFx0XHRcdFx0XHRcdH0pXG4gICAgXHRcdFx0XHRcdFx0OicnXG4gICAgXHRcdFx0XHR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdFxuXHRcdClcblx0fVxufVxuZXhwb3J0IGRlZmF1bHQgUmVwbHlWaWV3Il0sInNvdXJjZVJvb3QiOiIifQ==