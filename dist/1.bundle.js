(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./dev/js/components/commons/ChatPanel/ChatIpdPanel.js":
/*!*************************************************************!*\
  !*** ./dev/js/components/commons/ChatPanel/ChatIpdPanel.js ***!
  \*************************************************************/
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

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");

var _ChatPanel = __webpack_require__(/*! ../ChatPanel */ "./dev/js/components/commons/ChatPanel/index.js");

var _ChatPanel2 = _interopRequireDefault(_ChatPanel);

var _index = __webpack_require__(/*! ../../../actions/index.js */ "./dev/js/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IpdChatPanel = function (_React$Component) {
	_inherits(IpdChatPanel, _React$Component);

	function IpdChatPanel(props) {
		_classCallCheck(this, IpdChatPanel);

		var _this = _possibleConstructorReturn(this, (IpdChatPanel.__proto__ || Object.getPrototypeOf(IpdChatPanel)).call(this, props));

		_this.state = {
			minimize: _this.props.ipd_chat ? _this.props.ipd_chat.showMinimize ? false : _this.props.ipd_chat.showIpdChat ? true : false : false,
			maximize: false
		};

		if (_this.props.ipd_chat && _this.props.ipd_chat.showMinimize) {
			var ipdView = _extends({}, _this.props.ipd_chat);
			ipdView.showMinimize = false;
			_this.props.ipdChatView(ipdView);
		}
		return _this;
	}

	_createClass(IpdChatPanel, [{
		key: 'closeChat',
		value: function closeChat() {
			this.props.ipdChatView(null);
			if (this.child.closeChat) {
				this.child.closeChat();
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(props) {
			if (props.ipd_chat != this.props.ipd_chat) {
				this.setState({ minimize: props.ipd_chat ? props.ipd_chat.showMinimize ? false : props.ipd_chat.showIpdChat ? true : false : true });
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'section',
				{ className: (this.props.ipd_chat ? 'ipd-chat-pop ' + (this.props.bookingPage && !this.state.maximize ? 'ipd-chat-btn-width' : '') + ' ' + (this.state.maximize ? 'ipd-chat-pop-full' : this.state.minimize ? 'ipd-chat-pop-minimize' : '') : 'd-none') + ' ' },
				_react2.default.createElement(
					'div',
					{ className: 'ipd-chat-header' },
					_react2.default.createElement(
						'p',
						{ onClick: function onClick() {
								return _this2.setState({ maximize: true, minimize: false });
							} },
						this.props.bookingPage ? 'Need help?' : 'Need help in booking doctor appointment/surgery?'
					),
					_react2.default.createElement(
						'div',
						{ className: 'cht-head-rqst-btn' },
						this.state.minimize ? _react2.default.createElement(
							'span',
							{ onClick: function onClick() {
									return _this2.closeChat();
								} },
							_react2.default.createElement('img', { className: 'close-chat', src: "/assets" + '/img/customer-icons/close-black.svg', style: { width: '13px', display: 'block', lineHeight: '0' } })
						) : _react2.default.createElement(
							'span',
							{ onClick: function onClick() {
									return _this2.setState({ minimize: true, maximize: false });
								} },
							_react2.default.createElement('img', { className: 'close-chat', src: "/assets" + '/img/chatminimize.svg', style: { width: '20px' } })
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'ipd-chat-render' },
					_react2.default.createElement(_ChatPanel2.default, _extends({}, this.props, { mobilechatview: true, showHalfScreenChat: true, onRefIpd: function onRefIpd(ref) {
							return _this2.child = ref;
						} }))
				)
			);
		}
	}]);

	return IpdChatPanel;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
	var passedProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	var ipd_chat = state.USER.ipd_chat;


	return {
		ipd_chat: ipd_chat
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		ipdChatView: function ipdChatView(data) {
			return dispatch((0, _index.ipdChatView)(data));
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactRouter.withRouter)(IpdChatPanel));

/***/ }),

/***/ "./dev/js/components/commons/DesktopProfileHeader/CommonHeader.js":
/*!************************************************************************!*\
  !*** ./dev/js/components/commons/DesktopProfileHeader/CommonHeader.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _initialsPicture = __webpack_require__(/*! ../initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _LeftMenu = __webpack_require__(/*! ../LeftMenu/LeftMenu.js */ "./dev/js/components/commons/LeftMenu/LeftMenu.js");

var _LeftMenu2 = _interopRequireDefault(_LeftMenu);

var _ChatIpdPanel = __webpack_require__(/*! ../ChatPanel/ChatIpdPanel.js */ "./dev/js/components/commons/ChatPanel/ChatIpdPanel.js");

var _ChatIpdPanel2 = _interopRequireDefault(_ChatIpdPanel);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _doctorSearch = __webpack_require__(/*! ../../../actions/opd/doctorSearch */ "./dev/js/actions/opd/doctorSearch.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DesktopProfileHeader = function (_React$Component) {
    _inherits(DesktopProfileHeader, _React$Component);

    function DesktopProfileHeader(props) {
        _classCallCheck(this, DesktopProfileHeader);

        var _this = _possibleConstructorReturn(this, (DesktopProfileHeader.__proto__ || Object.getPrototypeOf(DesktopProfileHeader)).call(this, props));

        _this.logoClick = function () {
            if (_this.props.homePage && !!!_this.props.chatPage) {
                if (window) {
                    window.scrollTo(0, 0);
                }
            } else {
                _this.props.history.push('/');
            }
        };

        _this.state = {
            headerButtonsState: false,
            medicinePopup: false,
            toggleHamburger: _this.props.toggleLeftMenu || false,
            showLeftMenu: false,
            showSBI: false
        };
        return _this;
    }

    _createClass(DesktopProfileHeader, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.setState({ showLeftMenu: true });

            if (this.props.new_fixed_header && this.props.new_fixed_header == 1) {
                window.addEventListener('scroll', function () {
                    var scrollHeight = window.pageYOffset;
                    if (window.innerWidth < 767) {
                        var gHeader = document.getElementById('is_header');
                        if (gHeader) {
                            var gHeaderHeight = gHeader.clientHeight;
                            if (document.getElementById('listing-header')) {
                                var lvHeader = document.getElementById('listing-header');
                                if (scrollHeight >= gHeaderHeight / 2) {
                                    lvHeader.classList.add('listing-header');
                                } else {
                                    lvHeader.classList.remove('listing-header');
                                }
                            }
                        }
                    }
                });
            }
            this.setState({ showLeftMenu: true });
            setTimeout(function () {
                _this2.setState({ showSBI: true });
            }, 100);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this3 = this;

            if (this.state.toggleHamburger != nextProps.toggleLeftMenu) {
                this.setState({ toggleHamburger: nextProps.toggleLeftMenu }, function () {
                    if (_this3.state.toggleHamburger) {
                        document.body.style.overflow = "hidden";
                    } else {
                        document.body.style.overflow = "";
                    }
                });
            }
        }
    }, {
        key: 'navigateTo',
        value: function navigateTo(where, type) {
            if (type) {
                this.props.selectSearchType(type);
            }
            this.props.history.push(where);
        }
    }, {
        key: 'toggleHeaderButtons',
        value: function toggleHeaderButtons() {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'SearchButtonClickedMobile', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'search-button-clicked-mobile'
            };
            _gtm2.default.sendEvent({ data: data });
            this.setState({ headerButtonsState: !this.state.headerButtonsState, medicinePopup: false });
        }
    }, {
        key: 'goToLocation',
        value: function goToLocation() {
            var redirect_to = "";
            if (window.location.pathname.includes('sptcit') || window.location.pathname.includes('sptlitcit')) {
                redirect_to = "/opd/searchresults";
            }

            if (window.location.pathname.includes('lbcit') || window.location.pathname.includes('lblitcit')) {
                redirect_to = "/lab/searchresults";
            }

            var location_url = '/locationsearch';
            if (redirect_to) {
                location_url += '?redirect_to=' + redirect_to;
            }
            this.props.history.push(location_url);
        }
    }, {
        key: 'openSearch',
        value: function openSearch() {
            var search_back = false;
            if (this.props.location.state && this.props.location.state.search_back) {
                search_back = true;
            }

            if (search_back) {
                this.props.history.go(-1);
            } else {
                this.props.history.push('/search?from=header&pageType=' + (this.props.pageType ? this.props.pageType : ''));
            }
        }
    }, {
        key: 'openLocation',
        value: function openLocation() {
            this.props.history.push('/locationsearch');
        }
    }, {
        key: 'toggleLeftMenu',
        value: function toggleLeftMenu() {
            this.props.toggleLeftMenuBar();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var profileData = '';
            if (this.props.profiles && this.props.defaultProfile) {
                profileData = this.props.profiles[this.props.defaultProfile];
            }

            var styles = {};
            // if (this.props.homePage) {
            //     styles = { display: 'block' }
            // }

            var location = "Delhi";
            if (this.props.selectedLocation) {
                location = this.props.selectedLocation.formatted_address.slice(0, 10);
            }

            var headerClass = "doc-header header-overflow";

            if (this.props.homePage) {
                headerClass = "doc-header";
            }

            if (!this.props.showSearch) {
                headerClass += " remove-header-height";
            }
            var hideSearch = false;
            if (this.props.history.location.pathname == '/search') {
                hideSearch = true;
            }

            var cart_count = 0;
            if (this.props.cart && this.props.cart.length) {
                cart_count = this.props.cart.length;
            }

            return _react2.default.createElement(
                'header',
                { id: 'is_header', className: 'new-common-header' },
                this.props.showPackageStrip || !this.props.ipd_chat ? '' : _react2.default.createElement(_ChatIpdPanel2.default, this.props),
                this.props.homePage ? _react2.default.createElement(
                    'div',
                    { className: 'container-fluid d-flex justify-content-between align-item-center top-header', id: 'headerTop' },
                    _react2.default.createElement(
                        'h6',
                        null,
                        _react2.default.createElement(
                            'span',
                            null,
                            'Group company of '
                        ),
                        _react2.default.createElement('img', { src: "/assets" + "/img/logo-pg.png", height: '18px' })
                    ),
                    _react2.default.createElement(
                        'ul',
                        { id: 'listView' },
                        _react2.default.createElement(
                            'li',
                            { className: 'text-capitalize', onClick: function onClick(e) {
                                    e.preventDefault();
                                    _this4.navigateTo("/search", 'opd');
                                } },
                            'find a doctor'
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'text-capitalize', onClick: function onClick(e) {
                                    e.preventDefault();
                                    _this4.navigateTo("/search", 'lab');
                                } },
                            'lab test'
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'text-capitalize', onClick: function onClick(e) {
                                    e.preventDefault();
                                    _this4.navigateTo('/full-body-checkup-health-packages');
                                } },
                            'Health packages'
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'text-capitalize', onClick: function onClick(e) {
                                    e.preventDefault();
                                    _this4.navigateTo('/online-consultation');
                                } },
                            'Online consultation'
                        )
                    )
                ) : '',
                _react2.default.createElement(
                    'div',
                    { className: ' container-fluid main-header d-flex ' + (this.props.new_fixed_header && this.props.new_fixed_header == 1 ? '' : 'lw-fixed-header') + ' ' + (this.props.isSearchList ? 'pkgComp' : '') },
                    this.state.toggleHamburger ? _react2.default.createElement('div', { className: 'cancel-overlay cl-overlay', onClick: function onClick(e) {
                            e.stopPropagation();
                            _this4.toggleLeftMenu();
                        } }) : '',
                    this.state.showLeftMenu ? _react2.default.createElement(_LeftMenu2.default, _extends({}, this.props, this.state, { toggleLeftMenu: this.toggleLeftMenu.bind(this) })) : "",
                    _react2.default.createElement(
                        'div',
                        { className: 'row align-items-center m-0', id: 'lw-header', style: { width: '100%' } },
                        _react2.default.createElement(
                            'div',
                            { className: 'd-flex align-item-center main-header-left-col' },
                            _react2.default.createElement(
                                'div',
                                { className: 'menu-icon', onClick: function onClick(e) {
                                        e.stopPropagation();
                                        document.body.style.overflow = "hidden";
                                        _this4.toggleLeftMenu();
                                    } },
                                _react2.default.createElement(
                                    'ul',
                                    null,
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        '\xA0'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        '\xA0'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        '\xA0'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'a',
                                { className: 'sbi-iconfx', href: '/', onClick: function onClick(e) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        _this4.logoClick();
                                    } },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'd-none d-lg-block' },
                                    _react2.default.createElement('img', { style: { transform: 'scale(1.5)' }, src: 'https://cdn.docprime.com/media/web/custom_images/LOGO-01.svg', alt: 'docprime', height: '36' })
                                ),
                                this.state.showSBI && document && (typeof document === 'undefined' ? 'undefined' : _typeof(document)) == 'object' && document.location && document.location.host && document.location.host.includes('sbi') ? _react2.default.createElement(
                                    _react2.default.Fragment,
                                    null,
                                    this.props.homePage ? _react2.default.createElement(
                                        'div',
                                        { className: 'd-lg-none' },
                                        _react2.default.createElement('img', { style: { width: '95px', marginRight: '5px', marginLeft: 10, marginTop: 10 }, src: "/assets" + "/img/SBI_Logo1.png", alt: 'docprime' })
                                    ) : '',
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'd-lg-none' },
                                        _react2.default.createElement('img', { height: '50', style: { marginLeft: 6 }, src: 'https://cdn.docprime.com/media/web/custom_images/LOGO-01.svg', alt: 'docprime' })
                                    )
                                ) : _react2.default.createElement(
                                    'div',
                                    { className: 'd-lg-none' },
                                    _react2.default.createElement('img', { height: '50', style: { marginLeft: 6 }, src: 'https://cdn.docprime.com/media/web/custom_images/LOGO-01.svg', alt: 'docprime' })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'd-flex align-item-center justify-content-between main-header-right-col' },
                            _react2.default.createElement(
                                'div',
                                { className: 'header-search-full-width d-none d-lg-flex align-items-center justify-content-end' },
                                hideSearch ? "" : _react2.default.createElement(
                                    'div',
                                    { className: 'head-links hed-links-search-flex' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'serch-nw-inputs new-home-full-widht' },
                                        _react2.default.createElement(
                                            'div',
                                            { onClick: this.openSearch.bind(this) },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'header-serach-input-div' },
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    'Search Doctors & Tests'
                                                )
                                            ),
                                            _react2.default.createElement('img', { style: { width: '18px' }, className: 'srch-inp-img', src: "/assets" + "/img/shape-srch.svg" })
                                        ),
                                        _react2.default.createElement(
                                            'button',
                                            { onClick: this.openLocation.bind(this), style: { paddingLeft: '0', top: '0px' }, className: 'srch-inp-btn-img' },
                                            _react2.default.createElement('img', { style: { marginRight: '8px', width: '10px' }, src: "/assets" + "/img/new-loc-ico.svg" }),
                                            ' ',
                                            location
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'ul',
                                { className: 'd-flex align-item-center header-list-items' },
                                _react2.default.createElement(
                                    'li',
                                    { className: 'mbl-search-box no-border' },
                                    this.props.showSearch ? "" : _react2.default.createElement(
                                        'div',
                                        { className: 'mbl-head-search', onClick: this.openSearch.bind(this) },
                                        _react2.default.createElement('img', { width: 19, src: "/assets" + "/images/search-dark.svg" })
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { className: 'd-flex align-item-center', onClick: function onClick(e) {
                                                e.preventDefault();
                                                _this4.navigateTo('/contact');
                                            } },
                                        this.state.showSBI && document && (typeof document === 'undefined' ? 'undefined' : _typeof(document)) == 'object' && document.location && document.location.host && document.location.host.includes('sbi') ? _react2.default.createElement('img', { height: '26px', src: "/assets" + "/img/contact-us-sbi.svg" }) : _react2.default.createElement('img', { height: '26px', src: "/assets" + "/img/contact-us.svg" }),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'd-none d-sm-block d-lg-block' },
                                            'contact us'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'd-none d-sm-block d-lg-block' },
                                    _react2.default.createElement(
                                        'a',
                                        { className: 'd-flex align-item-center head-dropdowns' },
                                        this.state.showSBI && document && (typeof document === 'undefined' ? 'undefined' : _typeof(document)) == 'object' && document.location && document.location.host && document.location.host.includes('sbi') ? _react2.default.createElement('img', { height: '19px', src: "/assets" + "/img/file-format-sbi.svg" }) : _react2.default.createElement('img', { height: '19px', src: "/assets" + "/img/file-format.svg" }),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'd-none d-sm-block d-lg-block' },
                                            'resources'
                                        ),
                                        _react2.default.createElement('img', { height: '10', className: 'down-caret-img', src: "/assets" + "/img/caret-down.svg", alt: 'caret-down' }),
                                        _react2.default.createElement(
                                            'ul',
                                            { className: 'list-sub-menu d-none d-sm-block d-lg-block' },
                                            _react2.default.createElement(
                                                'li',
                                                null,
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: '/all-medicines', onClick: function onClick(e) {
                                                            e.preventDefault();
                                                            _this4.props.history.push("/all-medicines");
                                                        } },
                                                    'Medicines'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                null,
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: '/all-diseases', onClick: function onClick(e) {
                                                            e.preventDefault();
                                                            _this4.props.history.push("/all-diseases");
                                                        } },
                                                    'Diseases'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                null,
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: '/tests', onClick: function onClick(e) {
                                                            e.preventDefault();
                                                            _this4.props.history.push("/tests");
                                                        } },
                                                    'Tests'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                null,
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: '/ipd-procedures', onClick: function onClick(e) {
                                                            e.preventDefault();
                                                            _this4.props.history.push("/ipd-procedures");
                                                        } },
                                                    'Procedures'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                null,
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: '/hospitals', onClick: function onClick(e) {
                                                            e.preventDefault();
                                                            _this4.props.history.push("/hospitals");
                                                        } },
                                                    'Hospitals'
                                                )
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    profileData ? _react2.default.createElement(
                                        'a',
                                        { style: { position: 'relative' }, className: 'd-flex align-item-center', onClick: function onClick() {
                                                _this4.props.history.push('/cart');
                                            } },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'd-flex align-item-center m-0' },
                                            this.state.showSBI && document && (typeof document === 'undefined' ? 'undefined' : _typeof(document)) == 'object' && document.location && document.location.host && document.location.host.includes('sbi') ? _react2.default.createElement('img', { height: '19px', src: "/assets" + "/img/cart_sbi.svg" }) : _react2.default.createElement('img', { height: '19px', src: "/assets" + "/img/cart.svg" }),
                                            cart_count > 0 ? _react2.default.createElement(
                                                'span',
                                                { className: 'cart-count-notify' },
                                                cart_count
                                            ) : ""
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'd-none d-sm-block d-lg-block' },
                                            'cart'
                                        )
                                    ) : ""
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'd-none d-sm-block d-lg-block' },
                                    _react2.default.createElement(
                                        'a',
                                        { className: 'd-flex align-item-center no-border', style: { position: 'relative' }, onClick: function onClick() {
                                                _this4.props.history.push('/notifications');
                                            } },
                                        this.state.showSBI && document && (typeof document === 'undefined' ? 'undefined' : _typeof(document)) == 'object' && document.location && document.location.host && document.location.host.includes('sbi') ? _react2.default.createElement('img', { height: '19px', src: "/assets" + "/img/notification-sbi.svg" }) : _react2.default.createElement('img', { height: '19px', src: "/assets" + "/img/notification.svg" }),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'd-none d-sm-block d-lg-block' },
                                            'notifications'
                                        ),
                                        this.props.newNotification > 0 ? _react2.default.createElement(
                                            'span',
                                            { className: 'cart-count-notify m-0', style: { left: -8, top: -4 } },
                                            this.props.newNotification
                                        ) : ""
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'p-0' },
                                    profileData ? _react2.default.createElement(
                                        'a',
                                        { className: 'd-flex align-item-center no-border user-name-col', onClick: function onClick() {
                                                _this4.props.history.push('/user');
                                            } },
                                        _react2.default.createElement(_initialsPicture2.default, { name: profileData.name, className: 'user-name-initials d-flex justify-content-center align-item-center' }),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'd-none d-sm-block d-lg-block user-name-span' },
                                            profileData.name
                                        )
                                    ) : _react2.default.createElement(
                                        'a',
                                        { className: 'd-flex align-item-center no-border', onClick: function onClick() {
                                                _this4.props.homePage ? _this4.props.history.push('/user?ref=home') : _this4.props.history.push('/user');
                                            } },
                                        this.state.showSBI && document && (typeof document === 'undefined' ? 'undefined' : _typeof(document)) == 'object' && document.location && document.location.host && document.location.host.includes('sbi') ? _react2.default.createElement('img', { height: '24px', src: "/assets" + "/img/login-sbi.svg" }) : _react2.default.createElement('img', { height: '24px', src: "/assets" + "/img/login.svg" }),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'd-none d-sm-block d-lg-block user-name-span' },
                                            'login'
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 mbl-search-box d-lg-none' },
                        this.props.showSearch ? _react2.default.createElement(
                            'div',
                            { className: 'serch-nw-inputs search-input-for-mobile' },
                            _react2.default.createElement(
                                'div',
                                { onClick: this.openSearch.bind(this) },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'header-serach-input-div', style: { marginBottom: 10, marginTop: 10 } },
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        'Search Doctors & Tests'
                                    )
                                ),
                                _react2.default.createElement('img', { style: { width: '13px' }, className: 'srch-inp-img', src: "/assets" + "/img/shape-srch.svg" })
                            ),
                            _react2.default.createElement(
                                'button',
                                { onClick: this.openLocation.bind(this), style: { paddingLeft: '0', top: '0px' }, className: 'srch-inp-btn-img' },
                                _react2.default.createElement('img', { style: { marginRight: '8px', width: '10px' }, src: "/assets" + "/img/new-loc-ico.svg" }),
                                location
                            )
                        ) : ""
                    ),
                    this.props.new_fixed_header && this.props.new_fixed_header == 1 ? _react2.default.createElement(
                        'div',
                        { className: 'row listing-view-header visible-col ' + (this.props.isSearchList ? 'pkgComp' : ''), id: 'listing-header' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-1 pr-0 menu-icon', onClick: function onClick(e) {
                                    e.stopPropagation();
                                    document.body.style.overflow = "hidden";
                                    _this4.toggleLeftMenu();
                                }, style: { paddingLeft: 0 } },
                            _react2.default.createElement(
                                'ul',
                                null,
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    '\xA0'
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    '\xA0'
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'm-0' },
                                    '\xA0'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-11 d-lg-none pr-0 pl-0' },
                            this.props.showSearch ? _react2.default.createElement(
                                'div',
                                { className: 'serch-nw-inputs new-listing-search search-input-for-mobile' },
                                _react2.default.createElement(
                                    'div',
                                    { onClick: this.openSearch.bind(this) },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'header-serach-input-div' },
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            'Search Doctors & Tests'
                                        )
                                    ),
                                    _react2.default.createElement('img', { style: { width: '13px' }, className: 'srch-inp-img', src: "/assets" + "/img/shape-srch.svg" })
                                ),
                                _react2.default.createElement(
                                    'button',
                                    { onClick: this.openLocation.bind(this), style: { paddingLeft: '0', top: '0px' }, className: 'srch-inp-btn-img' },
                                    _react2.default.createElement('img', { style: { marginRight: '8px', width: '10px' }, src: "/assets" + "/img/new-loc-ico.svg" }),
                                    location
                                )
                            ) : ""
                        )
                    ) : ''
                )
            );
        }
    }]);

    return DesktopProfileHeader;
}(_react2.default.Component);

exports.default = DesktopProfileHeader;

/***/ }),

/***/ "./dev/js/components/commons/DesktopProfileHeader/index.js":
/*!*****************************************************************!*\
  !*** ./dev/js/components/commons/DesktopProfileHeader/index.js ***!
  \*****************************************************************/
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

var _index = __webpack_require__(/*! ../../../actions/index.js */ "./dev/js/actions/index.js");

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");

var _CommonHeader = __webpack_require__(/*! ./CommonHeader.js */ "./dev/js/components/commons/DesktopProfileHeader/CommonHeader.js");

var _CommonHeader2 = _interopRequireDefault(_CommonHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DesktopProfileHeader = function (_React$Component) {
    _inherits(DesktopProfileHeader, _React$Component);

    function DesktopProfileHeader(props) {
        _classCallCheck(this, DesktopProfileHeader);

        return _possibleConstructorReturn(this, (DesktopProfileHeader.__proto__ || Object.getPrototypeOf(DesktopProfileHeader)).call(this, props));
    }

    _createClass(DesktopProfileHeader, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (_storage2.default.checkAuth()) {
                this.props.fetchNotifications();
                /* Fectch user profile if logged in and user profile is not loaded i.e(public pages) */
                if (!this.props.profiles[this.props.selectedProfile]) {
                    this.props.getUserProfile();
                }
                //this.props.getIsCareDetails() // get user subscription plan details
            }
            // this.props.loadOPDInsurance(this.props.selectedLocation)
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_CommonHeader2.default, this.props);
        }
    }]);

    return DesktopProfileHeader;
}(_react2.default.Component);

DesktopProfileHeader.contextTypes = {
    router: function router() {
        return null;
    }
};


var mapStateToProps = function mapStateToProps(state) {
    var _state$USER = state.USER,
        profiles = _state$USER.profiles,
        selectedProfile = _state$USER.selectedProfile,
        defaultProfile = _state$USER.defaultProfile,
        notifications = _state$USER.notifications,
        newNotification = _state$USER.newNotification,
        currentRoomId = _state$USER.currentRoomId,
        cart = _state$USER.cart,
        unread_count = _state$USER.unread_count,
        toggleLeftMenu = _state$USER.toggleLeftMenu,
        isUserCared = _state$USER.isUserCared,
        leftMenuOpenFirstTime = _state$USER.leftMenuOpenFirstTime,
        ipd_chat = _state$USER.ipd_chat,
        iFrameUrls = _state$USER.iFrameUrls,
        refer_amount = _state$USER.refer_amount;
    var _state$SEARCH_CRITERI = state.SEARCH_CRITERIA_OPD,
        selectedLocation = _state$SEARCH_CRITERI.selectedLocation,
        common_settings = _state$SEARCH_CRITERI.common_settings;


    return {
        profiles: profiles, selectedProfile: selectedProfile, defaultProfile: defaultProfile, notifications: notifications, newNotification: newNotification, selectedLocation: selectedLocation, currentRoomId: currentRoomId, cart: cart, unread_count: unread_count, toggleLeftMenu: toggleLeftMenu, isUserCared: isUserCared, leftMenuOpenFirstTime: leftMenuOpenFirstTime, ipd_chat: ipd_chat, common_settings: common_settings, iFrameUrls: iFrameUrls, refer_amount: refer_amount
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        logout: function logout(chatRoomId) {
            return dispatch((0, _index.logout)(chatRoomId));
        },
        fetchNotifications: function fetchNotifications(cb) {
            return dispatch((0, _index.fetchNotifications)(cb));
        },
        getUserProfile: function getUserProfile() {
            return dispatch((0, _index.getUserProfile)());
        },
        getIsCareDetails: function getIsCareDetails() {
            return dispatch((0, _index.getIsCareDetails)());
        },
        toggleLeftMenuBar: function toggleLeftMenuBar(toggle, defaultVal) {
            return dispatch((0, _index.toggleLeftMenuBar)(toggle, defaultVal));
        },
        selectSearchType: function selectSearchType(type) {
            return dispatch((0, _index.selectSearchType)(type));
        },
        loadOPDInsurance: function loadOPDInsurance(city) {
            return dispatch((0, _index.loadOPDInsurance)(city));
        },
        iFrameState: function iFrameState(url, emptyUrls, leftMenuClick) {
            return dispatch((0, _index.iFrameState)(url, emptyUrls, leftMenuClick));
        },
        clearVipSelectedPlan: function clearVipSelectedPlan() {
            return dispatch((0, _index.clearVipSelectedPlan)());
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactRouter.withRouter)(DesktopProfileHeader));

/***/ }),

/***/ "./dev/js/components/commons/LeftMenu/LeftMenu.js":
/*!********************************************************!*\
  !*** ./dev/js/components/commons/LeftMenu/LeftMenu.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _initialsPicture = __webpack_require__(/*! ../initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _config = __webpack_require__(/*! ../../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LeftMenu = function (_React$Component) {
  _inherits(LeftMenu, _React$Component);

  function LeftMenu(props) {
    _classCallCheck(this, LeftMenu);

    var _this = _possibleConstructorReturn(this, (LeftMenu.__proto__ || Object.getPrototypeOf(LeftMenu)).call(this, props));

    _this.state = {
      toggleProfile: false,
      toggleArticles: false
    };
    return _this;
  }

  _createClass(LeftMenu, [{
    key: 'isDocCare',
    value: function isDocCare() {
      this.props.toggleLeftMenu();
      if (this.props.isUserCared && this.props.isUserCared.user_plan_id) {
        this.props.history.push('/prime/success?user_plan=' + this.props.isUserCared.user_plan_id);
      } else {
        this.props.history.push('/prime/plans');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var user = null;
      var thumbnail = null;
      var memberClass = 'float-right memNew';
      var memStatus = 'New';
      var user_insurance_status = false;
      var user_ins_status = void 0;
      var is_user_gold_member = false;
      var gold_user_profile = {};
      var is_care = false;
      var care_user_profile = {};
      if (this.props.defaultProfile && this.props.profiles && this.props.profiles[this.props.defaultProfile]) {

        user = this.props.profiles[this.props.defaultProfile];
        thumbnail = this.props.profiles[this.props.defaultProfile].profile_image || null;
        user_insurance_status = this.props.profiles[this.props.defaultProfile].is_insured;
        user_ins_status = this.props.profiles[this.props.defaultProfile].insurance_status;
      }
      if (this.props.isUserCared && this.props.isUserCared.has_active_plan) {
        memberClass = 'float-right memAct';
        memStatus = 'Active';
      }

      if (this.props.profiles && Object.keys(this.props.profiles).length) {
        Object.entries(this.props.profiles).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          if (value.is_vip_gold_member) {
            gold_user_profile = value;
          }
          if (value.is_care) {
            care_user_profile = value;
          }
        });
        if (gold_user_profile && Object.keys(gold_user_profile).length) {
          is_user_gold_member = true;
          memberClass = 'float-right memAct';
          memStatus = 'Active';
        }
        if (care_user_profile && Object.keys(care_user_profile).length) {
          is_care = true;
        }
      }

      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-d-width ' + (this.props.toggleHamburger ? 'col-d-width-ease' : '') },
            _react2.default.createElement(
              'div',
              { className: 'left-menu' },
              this.props.leftMenuOpenFirstTime ? _react2.default.createElement(
                'div',
                { className: '' },
                user ? _react2.default.createElement(
                  'div',
                  { className: 'header-box', onClick: function onClick() {
                      _this2.props.toggleLeftMenu();
                      _this2.props.history.push('/user');
                    } },
                  _react2.default.createElement(
                    'p',
                    { className: 'd-flex align-item-center' },
                    _react2.default.createElement(
                      _initialsPicture2.default,
                      { name: user.name, has_image: !!thumbnail, className: 'initialsPicture-dp leftIntiaspic' },
                      _react2.default.createElement('img', { src: thumbnail, className: 'img-fluid img-round', alt: user.name, title: user.name, style: { width: '60px', height: '60px', float: 'left', color: '#ffffff' } })
                    ),
                    _react2.default.createElement(
                      'span',
                      { className: 'user-name' },
                      user.name
                    )
                  ),
                  _react2.default.createElement('span', { className: 'right-arrow r-arrow', style: { marginTop: 0 } })
                ) : _react2.default.createElement(
                  'div',
                  { className: 'header-box', onClick: function onClick() {
                      _this2.props.toggleLeftMenu();
                      _this2.props.history.push('/user');
                    } },
                  _react2.default.createElement(
                    'span',
                    { className: 'user-name' },
                    'Login'
                  ),
                  _react2.default.createElement('span', { className: 'right-arrow r-arrow', style: { marginTop: 0 } })
                ),
                _react2.default.createElement(
                  'ul',
                  { className: 'drop-list-menu list_1' },
                  _config2.default.ENABLE_VIP_GOLD && is_user_gold_member ? _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { className: 'p-relative', onClick: function onClick(e) {
                          var data = {
                            'Category': 'ConsumerApp', 'Action': 'MobileLeftMenuGoldClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'mobile-leftmenu-gold-clicked'
                          };
                          _gtm2.default.sendEvent({ data: data });
                          e.preventDefault();
                          _this2.props.clearVipSelectedPlan();
                          _this2.props.toggleLeftMenu();
                          _this2.props.history.push('/vip-gold-details?is_gold=true&source=mobile-leftmenu-gold-clicked&lead_source=Docprime');
                        }, href: '#' },
                      _react2.default.createElement('img', { style: { position: 'relative', top: '15px' }, src: "/assets" + '/img/gold-sm.png', alt: '', className: 'vip-lg-sng' }),
                      'Docprime Gold ',
                      is_user_gold_member ? _react2.default.createElement(
                        'span',
                        { className: memberClass },
                        memStatus
                      ) : '',
                      _react2.default.createElement(
                        'span',
                        { className: 'vip-new-lft-tag' },
                        'Membership for exclusive discounts'
                      )
                    )
                  ) : '',
                  _config2.default.ENABLE_VIP_CLUB && user && user.is_vip_member && !user.is_vip_gold_member ? _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { className: 'p-relative', onClick: function onClick(e) {
                          var data = {
                            'Category': 'ConsumerApp', 'Action': 'MobileLeftMenuVipClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'mobile-leftmenu-vip-clicked'
                          };
                          _gtm2.default.sendEvent({ data: data });
                          e.preventDefault();
                          _this2.props.clearVipSelectedPlan();
                          _this2.props.toggleLeftMenu();
                          _this2.props.history.push('/vip-club-details?source=mobile-leftmenu-vip-clicked&lead_source=Docprime');
                        }, href: '#' },
                      _react2.default.createElement('img', { src: "/assets" + '/img/viplog.png', alt: '', className: 'vip-lg-sng' }),
                      'Docprime VIP ',
                      _react2.default.createElement(
                        'span',
                        { className: 'vip-new-lft-tag' },
                        'Save 70% on your family\'s medical bills'
                      )
                    )
                  ) : '',
                  _config2.default.ENABLE_INSURANCE && (user_ins_status == 1 || user_ins_status == 5) ? _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { onClick: function onClick(e) {
                          var data = {
                            'Category': 'ConsumerApp', 'Action': 'MobileLeftMenuInsuranceClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'mobile-leftmenu-insurance-clicked'
                          };
                          _gtm2.default.sendEvent({ data: data });
                          e.preventDefault();
                          _this2.props.toggleLeftMenu();
                          _this2.props.history.push('/insurance/insurance-plans?source=mobile-leftmenu-insurance-clicked');
                        }, href: '#' },
                      _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/ins.png", alt: '', className: '' }),
                      'OPD Insurance',
                      _react2.default.createElement(
                        'span',
                        { className: user_ins_status == 1 || user_ins_status == 5 || user_ins_status == 4 || user_ins_status == 7 ? 'float-right memAct' : 'float-right memNew' },
                        user_ins_status == 1 || user_ins_status == 5 || user_ins_status == 4 || user_ins_status == 7 ? 'Active' : 'New'
                      )
                    )
                  ) : '',
                  is_care ? _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { onClick: this.isDocCare.bind(this) },
                      _react2.default.createElement('img', { src: "/assets" + "/img/primecae.png", alt: '', className: '' }),
                      'Docprime Care ',
                      _react2.default.createElement(
                        'span',
                        { className: 'float-right memAct' },
                        'Active'
                      )
                    )
                  ) : '',
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { onClick: function onClick(e) {
                          e.preventDefault();
                          _this2.props.toggleLeftMenu();
                          _this2.props.history.push('/user/appointments');
                        }, href: '#' },
                      _react2.default.createElement('img', { src: "/assets" + "/images/my-appointment.png", alt: '', className: '' }),
                      'My Appointments'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { onClick: function onClick(e) {
                          e.preventDefault();
                          _this2.props.toggleLeftMenu();
                          _this2.props.history.push('/wallet');
                        }, href: '#' },
                      _react2.default.createElement('img', { src: 'https://cdn.docprime.com/cp/assets/img/customer-icons/rp-ico.png', alt: '', className: '' }),
                      'My Wallet'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'pos-rel' },
                    _react2.default.createElement(
                      'a',
                      { onClick: function onClick(e) {
                          e.preventDefault();
                          _this2.props.toggleLeftMenu();
                          _this2.props.history.push('/notifications');
                        }, href: '#' },
                      _react2.default.createElement('img', { src: "/assets" + "/images/notification.png", alt: '', className: '' }),
                      'Notifications'
                    ),
                    this.props.unread_count ? _react2.default.createElement(
                      'div',
                      { className: 'notification-count lft-notify' },
                      _react2.default.createElement(
                        'span',
                        { className: 'fw-500 text-xs' },
                        this.props.unread_count
                      )
                    ) : ''
                  )
                ),
                _react2.default.createElement(
                  'ul',
                  { className: 'drop-list-menu list_2' },
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { onClick: function onClick(e) {
                          e.preventDefault();
                          _this2.setState({ toggleProfile: !_this2.state.toggleProfile });
                        }, href: '#', className: '' },
                      _react2.default.createElement('img', { src: "/assets" + "/images/myprofile.png", alt: '', className: 'pad-B0' }),
                      'My Profile',
                      this.state.toggleProfile ? _react2.default.createElement('img', { className: 'up-down-arw', src: "/assets" + "/images/up-arrow.png", alt: 'docprime' }) : _react2.default.createElement('img', { className: 'up-down-arw', src: "/assets" + "/images/down-arrow.png", alt: 'docprime' })
                    )
                  ),
                  this.state.toggleProfile ? _react2.default.createElement(
                    'div',
                    { className: 'profile-list' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'a',
                        { onClick: function onClick(e) {
                            e.preventDefault();
                            _this2.props.toggleLeftMenu();
                            _this2.props.history.push('/user/family');
                          }, href: '#', className: 'pad-B0 my-fm' },
                        'My Family'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'a',
                        { onClick: function onClick(e) {
                            e.preventDefault();
                            _this2.props.toggleLeftMenu();
                            _this2.props.history.push('/user/address');
                          }, href: '#' },
                        'My Address'
                      )
                    )
                  ) : ''
                ),
                _react2.default.createElement(
                  'ul',
                  { className: 'drop-list-menu list_2' },
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { onClick: function onClick(e) {
                          e.preventDefault();
                          _this2.setState({ toggleArticles: !_this2.state.toggleArticles });
                        }, href: '#' },
                      _react2.default.createElement('img', { src: "/assets" + "/images/articles.png", alt: '', className: '' }),
                      'Resources',
                      this.state.toggleArticles ? _react2.default.createElement('img', { className: 'up-down-arw', src: "/assets" + "/images/up-arrow.png", alt: 'docprime' }) : _react2.default.createElement('img', { className: 'up-down-arw', src: "/assets" + "/images/down-arrow.png", alt: 'docprime' })
                    )
                  ),
                  this.state.toggleArticles ? _react2.default.createElement(
                    'div',
                    { className: 'profile-list' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'a',
                        { onClick: function onClick(e) {
                            e.preventDefault();
                            _this2.props.toggleLeftMenu();
                            _this2.props.history.push("/all-diseases");
                          }, href: '#', className: 'pad-B0' },
                        'Diseases'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'a',
                        { onClick: function onClick(e) {
                            e.preventDefault();
                            _this2.props.toggleLeftMenu();
                            _this2.props.history.push("/all-medicines");
                          }, href: '#', className: 'pad-B0' },
                        'Medicines'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'a',
                        { className: 'pad-B0', onClick: function onClick(e) {
                            e.preventDefault();
                            _this2.props.toggleLeftMenu();
                            _this2.props.history.push("/tests");
                          }, href: '#' },
                        'Tests'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'a',
                        { className: 'pad-B0', onClick: function onClick(e) {
                            e.preventDefault();
                            _this2.props.toggleLeftMenu();
                            _this2.props.history.push("/ipd-procedures");
                          }, href: '#' },
                        'Procedures'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'a',
                        { onClick: function onClick(e) {
                            e.preventDefault();
                            _this2.props.toggleLeftMenu();
                            _this2.props.history.push("/hospitals");
                          }, href: '#' },
                        'Hospitals'
                      )
                    )
                  ) : ''
                ),
                _react2.default.createElement(
                  'ul',
                  { className: 'final-list' },
                  _storage2.default.checkAuth() ? _react2.default.createElement(
                    'li',
                    { className: 'logout' },
                    _react2.default.createElement(
                      'a',
                      { onClick: function onClick(e) {
                          e.preventDefault();
                          _this2.props.toggleLeftMenu();
                          _this2.props.logout(_this2.props.currentRoomId);
                        }, href: '#' },
                      'Logout'
                    )
                  ) : _react2.default.createElement(
                    'li',
                    { className: 'logout' },
                    _react2.default.createElement(
                      'a',
                      { onClick: function onClick(e) {
                          e.preventDefault();
                          _this2.props.toggleLeftMenu();
                          _this2.props.history.push('/user');
                        }, href: '#' },
                      'Login'
                    )
                  )
                )
              ) : _react2.default.createElement('div', null)
            )
          )
        )
      );
    }
  }]);

  return LeftMenu;
}(_react2.default.Component);

exports.default = LeftMenu;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0NoYXRQYW5lbC9DaGF0SXBkUGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlci9Db21tb25IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xlZnRNZW51L0xlZnRNZW51LmpzIl0sIm5hbWVzIjpbIklwZENoYXRQYW5lbCIsInByb3BzIiwic3RhdGUiLCJtaW5pbWl6ZSIsImlwZF9jaGF0Iiwic2hvd01pbmltaXplIiwic2hvd0lwZENoYXQiLCJtYXhpbWl6ZSIsImlwZFZpZXciLCJpcGRDaGF0VmlldyIsImNoaWxkIiwiY2xvc2VDaGF0Iiwic2V0U3RhdGUiLCJib29raW5nUGFnZSIsIkFTU0VUU19CQVNFX1VSTCIsIndpZHRoIiwiZGlzcGxheSIsImxpbmVIZWlnaHQiLCJyZWYiLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInBhc3NlZFByb3BzIiwiVVNFUiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiZGF0YSIsIkRlc2t0b3BQcm9maWxlSGVhZGVyIiwibG9nb0NsaWNrIiwiaG9tZVBhZ2UiLCJjaGF0UGFnZSIsIndpbmRvdyIsInNjcm9sbFRvIiwiaGlzdG9yeSIsInB1c2giLCJoZWFkZXJCdXR0b25zU3RhdGUiLCJtZWRpY2luZVBvcHVwIiwidG9nZ2xlSGFtYnVyZ2VyIiwidG9nZ2xlTGVmdE1lbnUiLCJzaG93TGVmdE1lbnUiLCJzaG93U0JJIiwibmV3X2ZpeGVkX2hlYWRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxIZWlnaHQiLCJwYWdlWU9mZnNldCIsImlubmVyV2lkdGgiLCJnSGVhZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdIZWFkZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJsdkhlYWRlciIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInNldFRpbWVvdXQiLCJuZXh0UHJvcHMiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsIndoZXJlIiwidHlwZSIsInNlbGVjdFNlYXJjaFR5cGUiLCJHVE0iLCJnZXRVc2VySWQiLCJzZW5kRXZlbnQiLCJyZWRpcmVjdF90byIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJpbmNsdWRlcyIsImxvY2F0aW9uX3VybCIsInNlYXJjaF9iYWNrIiwiZ28iLCJwYWdlVHlwZSIsInRvZ2dsZUxlZnRNZW51QmFyIiwicHJvZmlsZURhdGEiLCJwcm9maWxlcyIsImRlZmF1bHRQcm9maWxlIiwic3R5bGVzIiwic2VsZWN0ZWRMb2NhdGlvbiIsImZvcm1hdHRlZF9hZGRyZXNzIiwic2xpY2UiLCJoZWFkZXJDbGFzcyIsInNob3dTZWFyY2giLCJoaWRlU2VhcmNoIiwiY2FydF9jb3VudCIsImNhcnQiLCJsZW5ndGgiLCJzaG93UGFja2FnZVN0cmlwIiwiZSIsInByZXZlbnREZWZhdWx0IiwibmF2aWdhdGVUbyIsImlzU2VhcmNoTGlzdCIsInN0b3BQcm9wYWdhdGlvbiIsImJpbmQiLCJ0cmFuc2Zvcm0iLCJob3N0IiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwib3BlblNlYXJjaCIsIm9wZW5Mb2NhdGlvbiIsInBhZGRpbmdMZWZ0IiwidG9wIiwicG9zaXRpb24iLCJuZXdOb3RpZmljYXRpb24iLCJsZWZ0IiwibmFtZSIsIm1hcmdpbkJvdHRvbSIsIlNUT1JBR0UiLCJjaGVja0F1dGgiLCJmZXRjaE5vdGlmaWNhdGlvbnMiLCJzZWxlY3RlZFByb2ZpbGUiLCJnZXRVc2VyUHJvZmlsZSIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsIm5vdGlmaWNhdGlvbnMiLCJjdXJyZW50Um9vbUlkIiwidW5yZWFkX2NvdW50IiwiaXNVc2VyQ2FyZWQiLCJsZWZ0TWVudU9wZW5GaXJzdFRpbWUiLCJpRnJhbWVVcmxzIiwicmVmZXJfYW1vdW50IiwiU0VBUkNIX0NSSVRFUklBX09QRCIsImNvbW1vbl9zZXR0aW5ncyIsImxvZ291dCIsImNoYXRSb29tSWQiLCJjYiIsImdldElzQ2FyZURldGFpbHMiLCJ0b2dnbGUiLCJkZWZhdWx0VmFsIiwibG9hZE9QREluc3VyYW5jZSIsImNpdHkiLCJpRnJhbWVTdGF0ZSIsInVybCIsImVtcHR5VXJscyIsImxlZnRNZW51Q2xpY2siLCJjbGVhclZpcFNlbGVjdGVkUGxhbiIsIkxlZnRNZW51IiwidG9nZ2xlUHJvZmlsZSIsInRvZ2dsZUFydGljbGVzIiwidXNlcl9wbGFuX2lkIiwidXNlciIsInRodW1ibmFpbCIsIm1lbWJlckNsYXNzIiwibWVtU3RhdHVzIiwidXNlcl9pbnN1cmFuY2Vfc3RhdHVzIiwidXNlcl9pbnNfc3RhdHVzIiwiaXNfdXNlcl9nb2xkX21lbWJlciIsImdvbGRfdXNlcl9wcm9maWxlIiwiaXNfY2FyZSIsImNhcmVfdXNlcl9wcm9maWxlIiwicHJvZmlsZV9pbWFnZSIsImlzX2luc3VyZWQiLCJpbnN1cmFuY2Vfc3RhdHVzIiwiaGFzX2FjdGl2ZV9wbGFuIiwiT2JqZWN0Iiwia2V5cyIsImVudHJpZXMiLCJtYXAiLCJrZXkiLCJ2YWx1ZSIsImlzX3ZpcF9nb2xkX21lbWJlciIsImhlaWdodCIsImZsb2F0IiwiY29sb3IiLCJDT05GSUciLCJFTkFCTEVfVklQX0dPTEQiLCJFTkFCTEVfVklQX0NMVUIiLCJpc192aXBfbWVtYmVyIiwiRU5BQkxFX0lOU1VSQU5DRSIsImlzRG9jQ2FyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsWTs7O0FBRUwsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDWkEsS0FEWTs7QUFFbEIsUUFBS0MsS0FBTCxHQUFhO0FB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Q0FBS3pGLEtBQUwsQ0FBV3FDLGNBQVg7QUFDQSxpQ0FBS3JDLEtBQUwsQ0FBV2dDLE9BQVgsQ0FBbUJDLElBQW5CLENBQXdCLE9BQXhCO0FBQ0QseUJBSndCLEVBSXRCLE1BQUssR0FKaUI7QUFBQTtBQUFBO0FBQXZCO0FBbkJSO0FBdE5GLGVBREYsR0FvUEk7QUF0UFI7QUFERjtBQURGO0FBREYsT0FGRjtBQW1RRDs7OztFQWhVb0JmLGdCQUFNQyxTOztrQkFrVWRzSCxRIiwiZmlsZSI6IjEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgQ2hhdFBhbmVsIGZyb20gJy4uL0NoYXRQYW5lbCdcbmltcG9ydCB7ICBpcGRDaGF0VmlldyB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5cbmNsYXNzIElwZENoYXRQYW5lbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0bWluaW1pemU6IHRoaXMucHJvcHMuaXBkX2NoYXQ/XG5cdFx0XHRcdHRoaXMucHJvcHMuaXBkX2NoYXQuc2hvd01pbmltaXplP2ZhbHNlOnRoaXMucHJvcHMuaXBkX2NoYXQuc2hvd0lwZENoYXQ/dHJ1ZTpmYWxzZTpmYWxzZSxcblx0XHRcdG1heGltaXplOiBmYWxzZVxuXHRcdH1cblx0XHRcblx0XHRpZih0aGlzLnByb3BzLmlwZF9jaGF0ICYmIHRoaXMucHJvcHMuaXBkX2NoYXQuc2hvd01pbmltaXplKXtcblx0XHRcdGxldCBpcGRWaWV3ID0gey4uLnRoaXMucHJvcHMuaXBkX2NoYXR9XG5cdFx0XHRpcGRWaWV3LnNob3dNaW5pbWl6ZT0gZmFsc2Vcblx0XHRcdHRoaXMucHJvcHMuaXBkQ2hhdFZpZXcoaXBkVmlldylcdFxuXHRcdH1cblx0fVxuXG4gICAgY2xvc2VDaGF0KCkge1xuICAgIFx0dGhpcy5wcm9wcy5pcGRDaGF0VmlldyhudWxsKVxuICAgIFx0aWYodGhpcy5jaGlsZC5jbG9zZUNoYXQpe1xuICAgIFx0XHR0aGlzLmNoaWxkLmNsb3NlQ2hhdCgpXG4gICAgXHR9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgIFx0aWYocHJvcHMuaXBkX2NoYXQgIT0gdGhpcy5wcm9wcy5pcGRfY2hhdCkge1xuICAgIFx0XHR0aGlzLnNldFN0YXRlKHttaW5pbWl6ZTogcHJvcHMuaXBkX2NoYXQ/XG4gICAgXHRcdFx0cHJvcHMuaXBkX2NoYXQuc2hvd01pbmltaXplP2ZhbHNlOnByb3BzLmlwZF9jaGF0LnNob3dJcGRDaGF0P3RydWU6ZmFsc2VcbiAgICBcdFx0XHQ6dHJ1ZX0pXG4gICAgXHR9XG4gICAgfVxuXG5cdHJlbmRlcigpe1xuXHRcblx0XHRyZXR1cm4oXG5cblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7dGhpcy5wcm9wcy5pcGRfY2hhdD9gaXBkLWNoYXQtcG9wICR7dGhpcy5wcm9wcy5ib29raW5nUGFnZSAmJiAhdGhpcy5zdGF0ZS5tYXhpbWl6ZT8naXBkLWNoYXQtYnRuLXdpZHRoJzonJ30gJHt0aGlzLnN0YXRlLm1heGltaXplPydpcGQtY2hhdC1wb3AtZnVsbCc6dGhpcy5zdGF0ZS5taW5pbWl6ZT8naXBkLWNoYXQtcG9wLW1pbmltaXplJzonJ31gOidkLW5vbmUnfSBgfSA+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXBkLWNoYXQtaGVhZGVyXCI+XG5cdFx0XHRcdFx0PHAgb25DbGljaz17KCk9PnRoaXMuc2V0U3RhdGUoe21heGltaXplOiB0cnVlLCBtaW5pbWl6ZTogZmFsc2V9KX0+e3RoaXMucHJvcHMuYm9va2luZ1BhZ2U/J05lZWQgaGVscD8nOidOZWVkIGhlbHAgaW4gYm9va2luZyBkb2N0b3IgYXBwb2ludG1lbnQvc3VyZ2VyeT8nfTwvcD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNodC1oZWFkLXJxc3QtYnRuXCIgPlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLm1pbmltaXplP1xuXHRcdFx0XHRcdFx0XHQ8c3BhbiAgb25DbGljaz17KCk9PnRoaXMuY2xvc2VDaGF0KCl9PlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiY2xvc2UtY2hhdFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsnL2ltZy9jdXN0b21lci1pY29ucy9jbG9zZS1ibGFjay5zdmcnfSBzdHlsZT17eyB3aWR0aDogJzEzcHgnLGRpc3BsYXk6J2Jsb2NrJywgbGluZUhlaWdodDonMCcgfX0gLz5cblx0XHRcdFx0XHRcdFx0PC9zcGFuPjpcblx0XHRcdFx0XHRcdFx0PHNwYW4gIG9uQ2xpY2s9eygpPT50aGlzLnNldFN0YXRlKHttaW5pbWl6ZTogdHJ1ZSwgbWF4aW1pemU6IGZhbHNlfSl9PlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiY2xvc2UtY2hhdFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsnL2ltZy9jaGF0bWluaW1pemUuc3ZnJ30gc3R5bGU9e3sgd2lkdGg6ICcyMHB4JyB9fSAvPiBcblx0XHRcdFx0XHRcdFx0PC9zcGFuPlx0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXBkLWNoYXQtcmVuZGVyXCI+XG5cdFx0XHRcdFx0PENoYXRQYW5lbCB7Li4udGhpcy5wcm9wc30gbW9iaWxlY2hhdHZpZXc9e3RydWV9IHNob3dIYWxmU2NyZWVuQ2hhdD17dHJ1ZX0gb25SZWZJcGQ9e3JlZiA9PiAodGhpcy5jaGlsZCA9IHJlZil9Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQpXG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwYXNzZWRQcm9wcyA9IHt9KSA9PiB7XG4gICAgY29uc3Qge1xuICAgIFx0aXBkX2NoYXRcbiAgICB9ID0gc3RhdGUuVVNFUlxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaXBkX2NoYXRcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgXHRpcGRDaGF0VmlldzogKGRhdGEpID0+IGRpc3BhdGNoKGlwZENoYXRWaWV3KGRhdGEpKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKSh3aXRoUm91dGVyKElwZENoYXRQYW5lbCkpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEluaXRpYWxzUGljdHVyZSBmcm9tICcuLi9pbml0aWFsc1BpY3R1cmUnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtJ1xuaW1wb3J0IExlZnRNZW51IGZyb20gJy4uL0xlZnRNZW51L0xlZnRNZW51LmpzJ1xuaW1wb3J0IElwZENoYXRQYW5lbCBmcm9tICcuLi9DaGF0UGFuZWwvQ2hhdElwZFBhbmVsLmpzJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuaW1wb3J0IHsgdG9nZ2xlUHJvZmlsZVByb2NlZHVyZXMgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL29wZC9kb2N0b3JTZWFyY2gnO1xuXG5jbGFzcyBEZXNrdG9wUHJvZmlsZUhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBoZWFkZXJCdXR0b25zU3RhdGU6IGZhbHNlLFxuICAgICAgICAgICAgbWVkaWNpbmVQb3B1cDogZmFsc2UsXG4gICAgICAgICAgICB0b2dnbGVIYW1idXJnZXI6IHRoaXMucHJvcHMudG9nZ2xlTGVmdE1lbnUgfHwgZmFsc2UsXG4gICAgICAgICAgICBzaG93TGVmdE1lbnU6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1NCSTogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xlZnRNZW51OiB0cnVlIH0pXG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLnByb3BzLm5ld19maXhlZF9oZWFkZXIgJiYgdGhpcy5wcm9wcy5uZXdfZml4ZWRfaGVhZGVyID09IDEpe1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY3KXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ0hlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpc19oZWFkZXInKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoZ0hlYWRlcil7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnSGVhZGVySGVpZ2h0ID0gZ0hlYWRlci5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdGluZy1oZWFkZXInKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbHZIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdGluZy1oZWFkZXInKTsgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2Nyb2xsSGVpZ2h0ID49IGdIZWFkZXJIZWlnaHQvMil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGx2SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2xpc3RpbmctaGVhZGVyJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbHZIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnbGlzdGluZy1oZWFkZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xlZnRNZW51OiB0cnVlfSlcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1NCSTogdHJ1ZSB9KVxuICAgICAgICB9LCAxMDApXG4gICAgICAgIFxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRvZ2dsZUhhbWJ1cmdlciAhPSBuZXh0UHJvcHMudG9nZ2xlTGVmdE1lbnUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b2dnbGVIYW1idXJnZXI6IG5leHRQcm9wcy50b2dnbGVMZWZ0TWVudSB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudG9nZ2xlSGFtYnVyZ2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIG5hdmlnYXRlVG8od2hlcmUsIHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0U2VhcmNoVHlwZSh0eXBlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHdoZXJlKVxuICAgIH1cblxuICAgIHRvZ2dsZUhlYWRlckJ1dHRvbnMoKSB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdTZWFyY2hCdXR0b25DbGlja2VkTW9iaWxlJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnc2VhcmNoLWJ1dHRvbi1jbGlja2VkLW1vYmlsZSdcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGVhZGVyQnV0dG9uc1N0YXRlOiAhdGhpcy5zdGF0ZS5oZWFkZXJCdXR0b25zU3RhdGUsIG1lZGljaW5lUG9wdXA6IGZhbHNlIH0pXG4gICAgfVxuXG4gICAgZ29Ub0xvY2F0aW9uKCkge1xuICAgICAgICBsZXQgcmVkaXJlY3RfdG8gPSBcIlwiXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJ3NwdGNpdCcpIHx8IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnc3B0bGl0Y2l0JykpIHtcbiAgICAgICAgICAgIHJlZGlyZWN0X3RvID0gXCIvb3BkL3NlYXJjaHJlc3VsdHNcIlxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnbGJjaXQnKSB8fCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJ2xibGl0Y2l0JykpIHtcbiAgICAgICAgICAgIHJlZGlyZWN0X3RvID0gXCIvbGFiL3NlYXJjaHJlc3VsdHNcIlxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxvY2F0aW9uX3VybCA9ICcvbG9jYXRpb25zZWFyY2gnXG4gICAgICAgIGlmIChyZWRpcmVjdF90bykge1xuICAgICAgICAgICAgbG9jYXRpb25fdXJsICs9IGA/cmVkaXJlY3RfdG89JHtyZWRpcmVjdF90b31gXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2gobG9jYXRpb25fdXJsKVxuICAgIH1cblxuICAgIG9wZW5TZWFyY2goKSB7XG4gICAgICAgIGxldCBzZWFyY2hfYmFjayA9IGZhbHNlXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uLnN0YXRlICYmIHRoaXMucHJvcHMubG9jYXRpb24uc3RhdGUuc2VhcmNoX2JhY2spIHtcbiAgICAgICAgICAgIHNlYXJjaF9iYWNrID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlYXJjaF9iYWNrKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkuZ28oLTEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL3NlYXJjaD9mcm9tPWhlYWRlciZwYWdlVHlwZT0ke3RoaXMucHJvcHMucGFnZVR5cGUgPyB0aGlzLnByb3BzLnBhZ2VUeXBlIDogJyd9YClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9wZW5Mb2NhdGlvbigpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9sb2NhdGlvbnNlYXJjaCcpXG4gICAgfVxuXG4gICAgdG9nZ2xlTGVmdE1lbnUoKSB7XG4gICAgICAgIHRoaXMucHJvcHMudG9nZ2xlTGVmdE1lbnVCYXIoKVxuICAgIH1cblxuICAgIGxvZ29DbGljayA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaG9tZVBhZ2UgJiYgISEhdGhpcy5wcm9wcy5jaGF0UGFnZSkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBwcm9maWxlRGF0YSA9ICcnXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnByb2ZpbGVzICYmIHRoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGUpIHtcbiAgICAgICAgICAgIHByb2ZpbGVEYXRhID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHN0eWxlcyA9IHt9XG4gICAgICAgIC8vIGlmICh0aGlzLnByb3BzLmhvbWVQYWdlKSB7XG4gICAgICAgIC8vICAgICBzdHlsZXMgPSB7IGRpc3BsYXk6ICdibG9jaycgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgbGV0IGxvY2F0aW9uID0gXCJEZWxoaVwiXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgIGxvY2F0aW9uID0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzLnNsaWNlKDAsIDEwKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGhlYWRlckNsYXNzID0gXCJkb2MtaGVhZGVyIGhlYWRlci1vdmVyZmxvd1wiXG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaG9tZVBhZ2UpIHtcbiAgICAgICAgICAgIGhlYWRlckNsYXNzID0gXCJkb2MtaGVhZGVyXCJcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5zaG93U2VhcmNoKSB7XG4gICAgICAgICAgICBoZWFkZXJDbGFzcyArPSBcIiByZW1vdmUtaGVhZGVyLWhlaWdodFwiXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGhpZGVTZWFyY2ggPSBmYWxzZVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5oaXN0b3J5LmxvY2F0aW9uLnBhdGhuYW1lID09ICcvc2VhcmNoJykge1xuICAgICAgICAgICAgaGlkZVNlYXJjaCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjYXJ0X2NvdW50ID0gMFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jYXJ0ICYmIHRoaXMucHJvcHMuY2FydC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhcnRfY291bnQgPSB0aGlzLnByb3BzLmNhcnQubGVuZ3RoXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGhlYWRlciBpZD1cImlzX2hlYWRlclwiICBjbGFzc05hbWU9XCJuZXctY29tbW9uLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zaG93UGFja2FnZVN0cmlwIHx8ICF0aGlzLnByb3BzLmlwZF9jaGF0ID8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIDogPElwZENoYXRQYW5lbCB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgey8qIHRvcCBoZWFkZXIgKi99XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaG9tZVBhZ2U/ICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtLWNlbnRlciB0b3AtaGVhZGVyXCIgaWQ9XCJoZWFkZXJUb3BcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Hcm91cCBjb21wYW55IG9mIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2xvZ28tcGcucG5nXCJ9ICBoZWlnaHQ9XCIxOHB4XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cImxpc3RWaWV3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGxpIGNsYXNzTmFtZT1cInRleHQtY2FwaXRhbGl6ZVwiICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAndmlwQ2xpY2tTdWJoZWFkZXInLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICd2aXAtY2xpY2stc3ViaGVhZGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGVhclZpcFNlbGVjdGVkUGxhbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbyhcIi92aXAtZ29sZC1kZXRhaWxzP2lzX2dvbGQ9dHJ1ZSZzb3VyY2U9ZGVza3RvcC1zdWJtZW51LWdvbGQtY2xpY2tlZCZsZWFkX3NvdXJjZT1Eb2NwcmltZVwiLCAnb3BkJyl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9nb2xkLWxnLnBuZ1wifSAgd2lkdGg9XCIzNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTJcIj5kb2NwcmltZSBnb2xkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRleHQtY2FwaXRhbGl6ZVwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKFwiL3NlYXJjaFwiLCAnb3BkJyl9fT5maW5kIGEgZG9jdG9yPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGV4dC1jYXBpdGFsaXplXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oXCIvc2VhcmNoXCIsICdsYWInKX19PmxhYiB0ZXN0PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGV4dC1jYXBpdGFsaXplXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oJy9mdWxsLWJvZHktY2hlY2t1cC1oZWFsdGgtcGFja2FnZXMnKX19PkhlYWx0aCBwYWNrYWdlczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRleHQtY2FwaXRhbGl6ZVwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKCcvb25saW5lLWNvbnN1bHRhdGlvbicpfX0+T25saW5lIGNvbnN1bHRhdGlvbjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgfSAgICAgXG4gICAgICAgICAgICAgICAgey8qIHRvcCBoZWFkZXIgKi99XG4gICAgICAgICAgICAgICAgey8qIG5ldyBtYWluIGhlYWRlciAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ge2AgY29udGFpbmVyLWZsdWlkIG1haW4taGVhZGVyIGQtZmxleCAke3RoaXMucHJvcHMubmV3X2ZpeGVkX2hlYWRlciAmJiB0aGlzLnByb3BzLm5ld19maXhlZF9oZWFkZXIgPT0gMT8nJzonbHctZml4ZWQtaGVhZGVyJ30gJHt0aGlzLnByb3BzLmlzU2VhcmNoTGlzdD8ncGtnQ29tcCc6Jyd9YH0+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBvbiBjbGljayBsZWZ0IG1lbnUgKi99XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudG9nZ2xlSGFtYnVyZ2VyID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbC1vdmVybGF5IGNsLW92ZXJsYXlcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlTGVmdE1lbnUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dMZWZ0TWVudSA/IDxMZWZ0TWVudSB7Li4udGhpcy5wcm9wc30gey4uLnRoaXMuc3RhdGV9IHRvZ2dsZUxlZnRNZW51PXt0aGlzLnRvZ2dsZUxlZnRNZW51LmJpbmQodGhpcyl9IC8+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHsvKiBvbiBjbGljayBsZWZ0IG1lbnUgKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBtLTBcIiBpZD1cImx3LWhlYWRlclwiIHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtLWNlbnRlciBtYWluLWhlYWRlci1sZWZ0LWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBoYW1idXJnZXIgbWVudSBpY29uICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1pY29uXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUxlZnRNZW51KCl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPiZuYnNwOzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Jm5ic3A7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4mbmJzcDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBoYW1idXJnZXIgbWVudSBpY29uICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIGhlYWRlciBsb2dvIGNsaWNrIGV2ZW50ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNiaS1pY29uZnhcIiBocmVmPVwiL1wiIG9uQ2xpY2s9eyhlKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ29DbGljaygpIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtbm9uZSBkLWxnLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBzdHlsZT17e3RyYW5zZm9ybTonc2NhbGUoMS41KSd9fSBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvd2ViL2N1c3RvbV9pbWFnZXMvTE9HTy0wMS5zdmdcIiBhbHQ9XCJkb2NwcmltZVwiIGhlaWdodD1cIjM2XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd1NCSSAmJiBkb2N1bWVudCAmJiB0eXBlb2YgZG9jdW1lbnQ9PSdvYmplY3QnICYmIGRvY3VtZW50LmxvY2F0aW9uICYmIGRvY3VtZW50LmxvY2F0aW9uLmhvc3QgJiYgZG9jdW1lbnQubG9jYXRpb24uaG9zdC5pbmNsdWRlcygnc2JpJyk/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhvbWVQYWdlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtbGctbm9uZVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICc5NXB4JywgbWFyZ2luUmlnaHQ6ICc1cHgnLCBtYXJnaW5MZWZ0OiAxMCwgbWFyZ2luVG9wOiAxMCB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9TQklfTG9nbzEucG5nXCJ9IGFsdD1cImRvY3ByaW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtbGctbm9uZVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBoZWlnaHQ9XCI1MFwiIHN0eWxlPXt7bWFyZ2luTGVmdDogNn19IHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9tZWRpYS93ZWIvY3VzdG9tX2ltYWdlcy9MT0dPLTAxLnN2Z1wiIGFsdD1cImRvY3ByaW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxkaXYgY2xhc3NOYW1lPVwiZC1sZy1ub25lXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaGVpZ2h0PVwiNTBcIiBzdHlsZT17e21hcmdpbkxlZnQ6IDZ9fSBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvd2ViL2N1c3RvbV9pbWFnZXMvTE9HTy0wMS5zdmdcIiBhbHQ9XCJkb2NwcmltZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogaGVhZGVyIGxvZ28gY2xpY2sgZXZlbnQgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1haW4taGVhZGVyLXJpZ2h0LWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBkZXNrdG9wIGhlYWRlciBzZWFyY2ggKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc2VhcmNoLWZ1bGwtd2lkdGggZC1ub25lIGQtbGctZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlU2VhcmNoID8gXCJcIiA6IDxkaXYgY2xhc3NOYW1lPVwiaGVhZC1saW5rcyBoZWQtbGlua3Mtc2VhcmNoLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcmNoLW53LWlucHV0cyBuZXctaG9tZS1mdWxsLXdpZGh0XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMub3BlblNlYXJjaC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXNlcmFjaC1pbnB1dC1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TZWFyY2ggRG9jdG9ycyAmYW1wOyBUZXN0czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbnB1dCBjbGFzc05hbWU9XCJuZXctc3JjaC1pbnBcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBEb2N0b3JzLCBUZXN0cywgJiBQcm9jZWR1cmVzXCIgaWQ9XCJkb2MtaW5wdXQtZmllbGRcIiAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcxOHB4JyB9fSBjbGFzc05hbWU9XCJzcmNoLWlucC1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zaGFwZS1zcmNoLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9wZW5Mb2NhdGlvbi5iaW5kKHRoaXMpfSBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzAnLCB0b3A6ICcwcHgnIH19IGNsYXNzTmFtZT1cInNyY2gtaW5wLWJ0bi1pbWdcIj48aW1nIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnOHB4Jywgd2lkdGg6ICcxMHB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9uZXctbG9jLWljby5zdmdcIn0gLz4ge2xvY2F0aW9ufTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogZGVza3RvcCBoZWFkZXIgc2VhcmNoICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIGhlYWRlciBsaXN0IGl0ZW1zICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbS1jZW50ZXIgaGVhZGVyLWxpc3QtaXRlbXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1ibC1zZWFyY2gtYm94IG5vLWJvcmRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2hvd1NlYXJjaCA/IFwiXCIgOiA8ZGl2IGNsYXNzTmFtZT1cIm1ibC1oZWFkLXNlYXJjaFwiIG9uQ2xpY2s9e3RoaXMub3BlblNlYXJjaC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB3aWR0aD17MTl9IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1hZ2VzL3NlYXJjaC1kYXJrLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbS1jZW50ZXJcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKCcvY29udGFjdCcpIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93U0JJICYmIGRvY3VtZW50ICYmIHR5cGVvZiBkb2N1bWVudD09J29iamVjdCcgJiYgZG9jdW1lbnQubG9jYXRpb24gJiYgZG9jdW1lbnQubG9jYXRpb24uaG9zdCAmJiBkb2N1bWVudC5sb2NhdGlvbi5ob3N0LmluY2x1ZGVzKCdzYmknKT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBoZWlnaHQ9XCIyNnB4XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY29udGFjdC11cy1zYmkuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8aW1nIGhlaWdodD1cIjI2cHhcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jb250YWN0LXVzLnN2Z1wifSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtbm9uZSBkLXNtLWJsb2NrIGQtbGctYmxvY2tcIj5jb250YWN0IHVzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1ub25lIGQtc20tYmxvY2sgZC1sZy1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyIGhlYWQtZHJvcGRvd25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dTQkkgJiYgZG9jdW1lbnQgJiYgdHlwZW9mIGRvY3VtZW50PT0nb2JqZWN0JyAmJiBkb2N1bWVudC5sb2NhdGlvbiAmJiBkb2N1bWVudC5sb2NhdGlvbi5ob3N0ICYmIGRvY3VtZW50LmxvY2F0aW9uLmhvc3QuaW5jbHVkZXMoJ3NiaScpP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGhlaWdodD1cIjE5cHhcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9maWxlLWZvcm1hdC1zYmkuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8aW1nIGhlaWdodD1cIjE5cHhcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9maWxlLWZvcm1hdC5zdmdcIn0gLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmUgZC1zbS1ibG9jayBkLWxnLWJsb2NrXCI+cmVzb3VyY2VzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaGVpZ2h0PVwiMTBcIiBjbGFzc05hbWU9XCJkb3duLWNhcmV0LWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NhcmV0LWRvd24uc3ZnXCJ9IGFsdD1cImNhcmV0LWRvd25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXN1Yi1tZW51IGQtbm9uZSBkLXNtLWJsb2NrIGQtbGctYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvYWxsLW1lZGljaW5lc1wiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9hbGwtbWVkaWNpbmVzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Pk1lZGljaW5lczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGxpPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+QXJ0aWNsZXM8L2E+PC9saT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2FsbC1kaXNlYXNlc1wiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9hbGwtZGlzZWFzZXNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RGlzZWFzZXM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvdGVzdHNcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvdGVzdHNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+VGVzdHM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvaXBkLXByb2NlZHVyZXNcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvaXBkLXByb2NlZHVyZXNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+UHJvY2VkdXJlczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9ob3NwaXRhbHNcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvaG9zcGl0YWxzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Pkhvc3BpdGFsczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlRGF0YSA/IDxhIHN0eWxlPXt7cG9zaXRpb246J3JlbGF0aXZlJ319IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtLWNlbnRlclwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jYXJ0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyIG0tMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd1NCSSAmJiBkb2N1bWVudCAmJiB0eXBlb2YgZG9jdW1lbnQ9PSdvYmplY3QnICYmIGRvY3VtZW50LmxvY2F0aW9uICYmIGRvY3VtZW50LmxvY2F0aW9uLmhvc3QgJiYgZG9jdW1lbnQubG9jYXRpb24uaG9zdC5pbmNsdWRlcygnc2JpJyk/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBoZWlnaHQ9XCIxOXB4XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2FydF9zYmkuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxpbWcgaGVpZ2h0PVwiMTlweFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NhcnQuc3ZnXCJ9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJ0X2NvdW50ID4gMCA/IDxzcGFuIGNsYXNzTmFtZT1cImNhcnQtY291bnQtbm90aWZ5XCI+e2NhcnRfY291bnR9PC9zcGFuPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmUgZC1zbS1ibG9jayBkLWxnLWJsb2NrXCI+Y2FydDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1ub25lIGQtc20tYmxvY2sgZC1sZy1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyIG5vLWJvcmRlclwiIHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZSd9fSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbm90aWZpY2F0aW9ucycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dTQkkgJiYgZG9jdW1lbnQgJiYgdHlwZW9mIGRvY3VtZW50PT0nb2JqZWN0JyAmJiBkb2N1bWVudC5sb2NhdGlvbiAmJiBkb2N1bWVudC5sb2NhdGlvbi5ob3N0ICYmIGRvY3VtZW50LmxvY2F0aW9uLmhvc3QuaW5jbHVkZXMoJ3NiaScpP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGhlaWdodD1cIjE5cHhcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9ub3RpZmljYXRpb24tc2JpLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PGltZyBoZWlnaHQ9XCIxOXB4XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbm90aWZpY2F0aW9uLnN2Z1wifSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtbm9uZSBkLXNtLWJsb2NrIGQtbGctYmxvY2tcIj5ub3RpZmljYXRpb25zPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5uZXdOb3RpZmljYXRpb24gPiAwID8gPHNwYW4gY2xhc3NOYW1lPVwiY2FydC1jb3VudC1ub3RpZnkgbS0wXCIgc3R5bGU9e3tsZWZ0OiAtOCwgdG9wOiAtNH19Pnt0aGlzLnByb3BzLm5ld05vdGlmaWNhdGlvbn08L3NwYW4+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInAtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGVEYXRhID8gPGEgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyIG5vLWJvcmRlciB1c2VyLW5hbWUtY29sXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3VzZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwidXNlci1uYW1lLWluaXRpYWxzIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW0tY2VudGVyXCI+e3Byb2ZpbGVEYXRhLm5hbWVbMF19PC9zcGFuPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluaXRpYWxzUGljdHVyZSBuYW1lPXtwcm9maWxlRGF0YS5uYW1lfSBjbGFzc05hbWU9XCJ1c2VyLW5hbWUtaW5pdGlhbHMgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Jbml0aWFsc1BpY3R1cmU+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmUgZC1zbS1ibG9jayBkLWxnLWJsb2NrIHVzZXItbmFtZS1zcGFuXCI+e3Byb2ZpbGVEYXRhLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxhIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtLWNlbnRlciBuby1ib3JkZXJcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ob21lUGFnZSA/IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdXNlcj9yZWY9aG9tZScpIDogdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy91c2VyJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93U0JJICYmIGRvY3VtZW50ICYmIHR5cGVvZiBkb2N1bWVudD09J29iamVjdCcgJiYgZG9jdW1lbnQubG9jYXRpb24gJiYgZG9jdW1lbnQubG9jYXRpb24uaG9zdCAmJiBkb2N1bWVudC5sb2NhdGlvbi5ob3N0LmluY2x1ZGVzKCdzYmknKT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaGVpZ2h0PVwiMjRweFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2xvZ2luLXNiaS5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8aW1nIGhlaWdodD1cIjI0cHhcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9sb2dpbi5zdmdcIn0gLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtbm9uZSBkLXNtLWJsb2NrIGQtbGctYmxvY2sgdXNlci1uYW1lLXNwYW5cIj5sb2dpbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogaGVhZGVyIGxpc3QgaXRlbXMgICAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdW1tYXJ5UGFnZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb3JvbmFWaXJ1c1wiPkR1ZSB0byBDb3JvbmF2aXJ1cyBvdXRicmVhaywgb3VyIHRlYW0gaXMgd29ya2luZyBmcm9tIGhvbWUuIE91ciB0b2xsIGZyZWUgbm8gd2lsbCBiZSB1bnJlc3BvbnNpdmUuIFBsZWFzZSBhY2NlcHQgYXBvbG9naWVzIGZvciB0aGUgcG9zc2libGUgZGVsYXkgaW4gc2VydmljZS4gRm9yIGFueSB1cmdlbnQgcXVlcmllcywgcGxlYXNlIHdyaXRlIHRvIHVzICA8YSBocmVmPVwibWFpbHRvOmN1c3RvbWVyY2FyZUBkb2NwcmltZS5jb21cIj5jdXN0b21lcmNhcmVAZG9jcHJpbWUuY29tPC9hPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7LyogbW9iaWxlIHZpZXcgc2VhcmNoIGJveCAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgbWJsLXNlYXJjaC1ib3ggZC1sZy1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zaG93U2VhcmNoID8gPGRpdiBjbGFzc05hbWU9XCJzZXJjaC1udy1pbnB1dHMgc2VhcmNoLWlucHV0LWZvci1tb2JpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLm9wZW5TZWFyY2guYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1zZXJhY2gtaW5wdXQtZGl2XCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDEwLCBtYXJnaW5Ub3A6IDEwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2VhcmNoIERvY3RvcnMgJmFtcDsgVGVzdHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW5wdXQgY2xhc3NOYW1lPVwibmV3LXNyY2gtaW5wIGhvbWUtdG9wLWlucHV0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggRG9jdG9ycyAmYW1wOyBUZXN0c1wiIGlkPVwiZG9jLWlucHV0LWZpZWxkXCIgLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMTNweCcgfX0gY2xhc3NOYW1lPVwic3JjaC1pbnAtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc2hhcGUtc3JjaC5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vcGVuTG9jYXRpb24uYmluZCh0aGlzKX0gc3R5bGU9e3sgcGFkZGluZ0xlZnQ6ICcwJywgdG9wOiAnMHB4JyB9fSBjbGFzc05hbWU9XCJzcmNoLWlucC1idG4taW1nXCI+PGltZyBzdHlsZT17eyBtYXJnaW5SaWdodDogJzhweCcsIHdpZHRoOiAnMTBweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbmV3LWxvYy1pY28uc3ZnXCJ9IC8+e2xvY2F0aW9ufTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubmV3X2ZpeGVkX2hlYWRlciAmJiB0aGlzLnByb3BzLm5ld19maXhlZF9oZWFkZXIgPT0gMT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcm93IGxpc3Rpbmctdmlldy1oZWFkZXIgdmlzaWJsZS1jb2wgJHt0aGlzLnByb3BzLmlzU2VhcmNoTGlzdD8ncGtnQ29tcCc6Jyd9YH0gaWQ9XCJsaXN0aW5nLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEgcHItMCBtZW51LWljb25cIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlTGVmdE1lbnUoKX19IHN0eWxlPXt7cGFkZGluZ0xlZnQ6IDB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPiZuYnNwOzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Jm5ic3A7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtLTBcIj4mbmJzcDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTExIGQtbGctbm9uZSBwci0wIHBsLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zaG93U2VhcmNoID8gPGRpdiBjbGFzc05hbWU9XCJzZXJjaC1udy1pbnB1dHMgbmV3LWxpc3Rpbmctc2VhcmNoIHNlYXJjaC1pbnB1dC1mb3ItbW9iaWxlXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5vcGVuU2VhcmNoLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1zZXJhY2gtaW5wdXQtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TZWFyY2ggRG9jdG9ycyAmYW1wOyBUZXN0czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcxM3B4JyB9fSBjbGFzc05hbWU9XCJzcmNoLWlucC1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zaGFwZS1zcmNoLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vcGVuTG9jYXRpb24uYmluZCh0aGlzKX0gc3R5bGU9e3sgcGFkZGluZ0xlZnQ6ICcwJywgdG9wOiAnMHB4JyB9fSBjbGFzc05hbWU9XCJzcmNoLWlucC1idG4taW1nXCI+PGltZyBzdHlsZT17eyBtYXJnaW5SaWdodDogJzhweCcsIHdpZHRoOiAnMTBweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbmV3LWxvYy1pY28uc3ZnXCJ9IC8+e2xvY2F0aW9ufTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgOicnfVxuICAgICAgICAgICAgICAgICAgICB7LyogbW9iaWxlIHZpZXcgc2VhcmNoIGJveCBlbmRzICovfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7LyogbmV3IG1haW4gaGVhZGVyICovfVxuICAgICAgICAgICAgICAgIHsvKiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaG9tZVBhZ2U/XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvcm9uYVZpcnVzXCI+RHVlIHRvIENvcm9uYXZpcnVzIG91dGJyZWFrLCBvdXIgdGVhbSBpcyB3b3JraW5nIGZyb20gaG9tZS4gT3VyIHRvbGwgZnJlZSBubyB3aWxsIGJlIHVucmVzcG9uc2l2ZS4gUGxlYXNlIGFjY2VwdCBhcG9sb2dpZXMgZm9yIHRoZSBwb3NzaWJsZSBkZWxheSBpbiBzZXJ2aWNlLiBGb3IgYW55IHVyZ2VudCBxdWVyaWVzLCBwbGVhc2Ugd3JpdGUgdG8gdXMgIDxhIGhyZWY9XCJtYWlsdG86Y3VzdG9tZXJjYXJlQGRvY3ByaW1lLmNvbVwiPmN1c3RvbWVyY2FyZUBkb2NwcmltZS5jb208L2E+PC9wPlxuICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICB9ICovfVxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXNrdG9wUHJvZmlsZUhlYWRlclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBsb2dvdXQsIGZldGNoTm90aWZpY2F0aW9ucywgZ2V0VXNlclByb2ZpbGUsIHRvZ2dsZUxlZnRNZW51QmFyLCBnZXRJc0NhcmVEZXRhaWxzLCBzZWxlY3RTZWFyY2hUeXBlLCBsb2FkT1BESW5zdXJhbmNlLCBpRnJhbWVTdGF0ZSwgY2xlYXJWaXBTZWxlY3RlZFBsYW4gfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IERlc2t0b3BQcm9maWxlSGVhZGVyVmlldyBmcm9tICcuL0NvbW1vbkhlYWRlci5qcydcblxuY2xhc3MgRGVza3RvcFByb2ZpbGVIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogKCkgPT4gbnVsbFxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAoU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaE5vdGlmaWNhdGlvbnMoKVxuICAgICAgICAgICAgLyogRmVjdGNoIHVzZXIgcHJvZmlsZSBpZiBsb2dnZWQgaW4gYW5kIHVzZXIgcHJvZmlsZSBpcyBub3QgbG9hZGVkIGkuZShwdWJsaWMgcGFnZXMpICovXG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRVc2VyUHJvZmlsZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3RoaXMucHJvcHMuZ2V0SXNDYXJlRGV0YWlscygpIC8vIGdldCB1c2VyIHN1YnNjcmlwdGlvbiBwbGFuIGRldGFpbHNcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLnByb3BzLmxvYWRPUERJbnN1cmFuY2UodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPERlc2t0b3BQcm9maWxlSGVhZGVyVmlldyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuXG4gICAgbGV0IHsgcHJvZmlsZXMsIHNlbGVjdGVkUHJvZmlsZSwgZGVmYXVsdFByb2ZpbGUsIG5vdGlmaWNhdGlvbnMsIG5ld05vdGlmaWNhdGlvbiwgY3VycmVudFJvb21JZCwgY2FydCwgdW5yZWFkX2NvdW50LCB0b2dnbGVMZWZ0TWVudSwgaXNVc2VyQ2FyZWQsIGxlZnRNZW51T3BlbkZpcnN0VGltZSwgaXBkX2NoYXQsIGlGcmFtZVVybHMsIHJlZmVyX2Ftb3VudCB9ID0gc3RhdGUuVVNFUlxuXG4gICAgbGV0IHtcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgY29tbW9uX3NldHRpbmdzXG4gICAgfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9PUERcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb2ZpbGVzLCBzZWxlY3RlZFByb2ZpbGUsIGRlZmF1bHRQcm9maWxlLCBub3RpZmljYXRpb25zLCBuZXdOb3RpZmljYXRpb24sIHNlbGVjdGVkTG9jYXRpb24sIGN1cnJlbnRSb29tSWQsIGNhcnQsIHVucmVhZF9jb3VudCwgdG9nZ2xlTGVmdE1lbnUsIGlzVXNlckNhcmVkLCBsZWZ0TWVudU9wZW5GaXJzdFRpbWUsIGlwZF9jaGF0LGNvbW1vbl9zZXR0aW5ncywgaUZyYW1lVXJscywgcmVmZXJfYW1vdW50XG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBsb2dvdXQ6IChjaGF0Um9vbUlkKSA9PiBkaXNwYXRjaChsb2dvdXQoY2hhdFJvb21JZCkpLFxuICAgICAgICBmZXRjaE5vdGlmaWNhdGlvbnM6IChjYikgPT4gZGlzcGF0Y2goZmV0Y2hOb3RpZmljYXRpb25zKGNiKSksXG4gICAgICAgIGdldFVzZXJQcm9maWxlOiAoKSA9PiBkaXNwYXRjaChnZXRVc2VyUHJvZmlsZSgpKSxcbiAgICAgICAgZ2V0SXNDYXJlRGV0YWlsczogKCkgPT4gZGlzcGF0Y2goZ2V0SXNDYXJlRGV0YWlscygpKSxcbiAgICAgICAgdG9nZ2xlTGVmdE1lbnVCYXI6ICh0b2dnbGUsIGRlZmF1bHRWYWwpID0+IGRpc3BhdGNoKHRvZ2dsZUxlZnRNZW51QmFyKHRvZ2dsZSwgZGVmYXVsdFZhbCkpLFxuICAgICAgICBzZWxlY3RTZWFyY2hUeXBlOiAodHlwZSkgPT4gZGlzcGF0Y2goc2VsZWN0U2VhcmNoVHlwZSh0eXBlKSksXG4gICAgICAgIGxvYWRPUERJbnN1cmFuY2U6IChjaXR5KSA9PiBkaXNwYXRjaChsb2FkT1BESW5zdXJhbmNlKGNpdHkpKSxcbiAgICAgICAgaUZyYW1lU3RhdGU6ICh1cmwsIGVtcHR5VXJscywgbGVmdE1lbnVDbGljaykgPT4gZGlzcGF0Y2goaUZyYW1lU3RhdGUodXJsLCBlbXB0eVVybHMsIGxlZnRNZW51Q2xpY2spKSxcbiAgICAgICAgY2xlYXJWaXBTZWxlY3RlZFBsYW46KCkgPT4gZGlzcGF0Y2goY2xlYXJWaXBTZWxlY3RlZFBsYW4oKSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKHdpdGhSb3V0ZXIoRGVza3RvcFByb2ZpbGVIZWFkZXIpKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbml0aWFsc1BpY3R1cmUgZnJvbSAnLi4vaW5pdGlhbHNQaWN0dXJlJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJztcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vLi4vY29uZmlnJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCB7IHJlbGF0aXZlIH0gZnJvbSAncGF0aCc7XG5cbmNsYXNzIExlZnRNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0b2dnbGVQcm9maWxlOiBmYWxzZSxcbiAgICAgIHRvZ2dsZUFydGljbGVzOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGlzRG9jQ2FyZSgpIHtcbiAgICB0aGlzLnByb3BzLnRvZ2dsZUxlZnRNZW51KClcbiAgICBpZiAodGhpcy5wcm9wcy5pc1VzZXJDYXJlZCAmJiB0aGlzLnByb3BzLmlzVXNlckNhcmVkLnVzZXJfcGxhbl9pZCkge1xuICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9wcmltZS9zdWNjZXNzP3VzZXJfcGxhbj0nICsgdGhpcy5wcm9wcy5pc1VzZXJDYXJlZC51c2VyX3BsYW5faWQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvcHJpbWUvcGxhbnMnKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgdXNlciA9IG51bGxcbiAgICBsZXQgdGh1bWJuYWlsID0gbnVsbFxuICAgIGxldCBtZW1iZXJDbGFzcyA9ICdmbG9hdC1yaWdodCBtZW1OZXcnXG4gICAgbGV0IG1lbVN0YXR1cyA9ICdOZXcnXG4gICAgbGV0IHVzZXJfaW5zdXJhbmNlX3N0YXR1cyA9IGZhbHNlXG4gICAgbGV0IHVzZXJfaW5zX3N0YXR1c1xuICAgIGxldCBpc191c2VyX2dvbGRfbWVtYmVyID0gZmFsc2UgXG4gICAgbGV0IGdvbGRfdXNlcl9wcm9maWxlID0ge31cbiAgICBsZXQgaXNfY2FyZSA9IGZhbHNlXG4gICAgbGV0IGNhcmVfdXNlcl9wcm9maWxlID17fVxuICAgIGlmICh0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlICYmIHRoaXMucHJvcHMucHJvZmlsZXMgJiYgdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXSkge1xuXG4gICAgICB1c2VyID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXVxuICAgICAgdGh1bWJuYWlsID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXS5wcm9maWxlX2ltYWdlIHx8IG51bGxcbiAgICAgIHVzZXJfaW5zdXJhbmNlX3N0YXR1cyA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0uaXNfaW5zdXJlZFxuICAgICAgdXNlcl9pbnNfc3RhdHVzID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXS5pbnN1cmFuY2Vfc3RhdHVzXG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmlzVXNlckNhcmVkICYmIHRoaXMucHJvcHMuaXNVc2VyQ2FyZWQuaGFzX2FjdGl2ZV9wbGFuKSB7XG4gICAgICBtZW1iZXJDbGFzcyA9ICdmbG9hdC1yaWdodCBtZW1BY3QnXG4gICAgICBtZW1TdGF0dXMgPSAnQWN0aXZlJ1xuICAgIH1cblxuICAgIGlmKHRoaXMucHJvcHMucHJvZmlsZXMgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5wcm9maWxlcykubGVuZ3RoKXtcbiAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMucHJvZmlsZXMpLm1hcChmdW5jdGlvbihba2V5LCB2YWx1ZV0pIHsgXG4gICAgICAgICAgICAgIGlmKHZhbHVlLmlzX3ZpcF9nb2xkX21lbWJlcil7XG4gICAgICAgICAgICAgICAgICBnb2xkX3VzZXJfcHJvZmlsZSA9IHZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYodmFsdWUuaXNfY2FyZSl7XG4gICAgICAgICAgICAgICAgICBjYXJlX3VzZXJfcHJvZmlsZSA9IHZhbHVlXG4gICAgICAgICAgICAgIH0gXG4gICAgICAgICAgfSlcbiAgICAgICAgIGlmKGdvbGRfdXNlcl9wcm9maWxlICYmIE9iamVjdC5rZXlzKGdvbGRfdXNlcl9wcm9maWxlKS5sZW5ndGgpe1xuICAgICAgICAgICAgaXNfdXNlcl9nb2xkX21lbWJlciA9IHRydWVcbiAgICAgICAgICAgIG1lbWJlckNsYXNzID0gJ2Zsb2F0LXJpZ2h0IG1lbUFjdCdcbiAgICAgICAgICAgIG1lbVN0YXR1cyA9ICdBY3RpdmUnXG4gICAgICAgICB9XG4gICAgICAgICBpZihjYXJlX3VzZXJfcHJvZmlsZSAmJiBPYmplY3Qua2V5cyhjYXJlX3VzZXJfcHJvZmlsZSkubGVuZ3RoKXtcbiAgICAgICAgICAgIGlzX2NhcmUgPSB0cnVlXG4gICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcblxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2wteHMtMTIgY29sLWQtd2lkdGggJHt0aGlzLnByb3BzLnRvZ2dsZUhhbWJ1cmdlciA/ICdjb2wtZC13aWR0aC1lYXNlJyA6ICcnfWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LW1lbnVcIj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubGVmdE1lbnVPcGVuRmlyc3RUaW1lID9cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICB1c2VyID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWJveFwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVMZWZ0TWVudSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvdXNlcmApXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9wcm9maWxlLXBob3RvLmpwZWdcIiBhbHQ9XCJwcm9maWxlLXBob3RvXCIgY2xhc3NOYW1lPVwidXNlci1wcm9maWxlLWltZ1wiIC8+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbml0aWFsc1BpY3R1cmUgbmFtZT17dXNlci5uYW1lfSBoYXNfaW1hZ2U9eyEhdGh1bWJuYWlsfSBjbGFzc05hbWU9XCJpbml0aWFsc1BpY3R1cmUtZHAgbGVmdEludGlhc3BpY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RodW1ibmFpbH0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZy1yb3VuZFwiIGFsdD17dXNlci5uYW1lfSB0aXRsZT17dXNlci5uYW1lfSBzdHlsZT17eyB3aWR0aDogJzYwcHgnLCBoZWlnaHQ6ICc2MHB4JywgZmxvYXQ6ICdsZWZ0JywgY29sb3I6ICcjZmZmZmZmJyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5pdGlhbHNQaWN0dXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVzZXItbmFtZVwiPnt1c2VyLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJpZ2h0LWFycm93IHItYXJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDAgfX0+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWJveFwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVMZWZ0TWVudSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdXNlcicpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9wcm9maWxlLXBob3RvLmpwZWdcIiBhbHQ9XCJwcm9maWxlLXBob3RvXCIgY2xhc3NOYW1lPVwidXNlci1wcm9maWxlLWltZ1wiIC8+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVzZXItbmFtZVwiPkxvZ2luPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodC1hcnJvdyByLWFycm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAwIH19Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wLWxpc3QtbWVudSBsaXN0XzFcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7Lyo8bGk+PGEgaHJlZj1cIiNcIj48aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2luc3VyYW5jZS5wbmdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJcIiAvPkluc3VyYW5jZTwvYT4gPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0bi1idXktbm93XCI+QnV5IE5vdzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDT05GSUcuRU5BQkxFX1ZJUF9HT0xEICYmIGlzX3VzZXJfZ29sZF9tZW1iZXI/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJwLXJlbGF0aXZlXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTW9iaWxlTGVmdE1lbnVHb2xkQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ21vYmlsZS1sZWZ0bWVudS1nb2xkLWNsaWNrZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGVhclZpcFNlbGVjdGVkUGxhbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVMZWZ0TWVudSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy92aXAtZ29sZC1kZXRhaWxzP2lzX2dvbGQ9dHJ1ZSZzb3VyY2U9bW9iaWxlLWxlZnRtZW51LWdvbGQtY2xpY2tlZCZsZWFkX3NvdXJjZT1Eb2NwcmltZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19IGhyZWY9XCIjXCI+PGltZyBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgdG9wOiAnMTVweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9nb2xkLXNtLnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT1cInZpcC1sZy1zbmdcIiAvPkRvY3ByaW1lIEdvbGQge2lzX3VzZXJfZ29sZF9tZW1iZXI/PHNwYW4gY2xhc3NOYW1lPXttZW1iZXJDbGFzc30+e21lbVN0YXR1c308L3NwYW4+OicnfTxzcGFuIGNsYXNzTmFtZT1cInZpcC1uZXctbGZ0LXRhZ1wiPk1lbWJlcnNoaXAgZm9yIGV4Y2x1c2l2ZSBkaXNjb3VudHM8L3NwYW4+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ09ORklHLkVOQUJMRV9WSVBfQ0xVQiAmJiB1c2VyICYmIHVzZXIuaXNfdmlwX21lbWJlciAmJiAhdXNlci5pc192aXBfZ29sZF9tZW1iZXI/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJwLXJlbGF0aXZlXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTW9iaWxlTGVmdE1lbnVWaXBDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbW9iaWxlLWxlZnRtZW51LXZpcC1jbGlja2VkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xlYXJWaXBTZWxlY3RlZFBsYW4oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlTGVmdE1lbnUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdmlwLWNsdWItZGV0YWlscz9zb3VyY2U9bW9iaWxlLWxlZnRtZW51LXZpcC1jbGlja2VkJmxlYWRfc291cmNlPURvY3ByaW1lJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gaHJlZj1cIiNcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwbG9nLnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT1cInZpcC1sZy1zbmdcIiAvPkRvY3ByaW1lIFZJUCA8c3BhbiBjbGFzc05hbWU9XCJ2aXAtbmV3LWxmdC10YWdcIj5TYXZlIDcwJSBvbiB5b3VyIGZhbWlseSdzIG1lZGljYWwgYmlsbHM8L3NwYW4+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ09ORklHLkVOQUJMRV9JTlNVUkFOQ0UgJiYgKHVzZXJfaW5zX3N0YXR1cyA9PSAxIHx8IHVzZXJfaW5zX3N0YXR1cyA9PSA1KT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdNb2JpbGVMZWZ0TWVudUluc3VyYW5jZUNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdtb2JpbGUtbGVmdG1lbnUtaW5zdXJhbmNlLWNsaWNrZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZUxlZnRNZW51KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2luc3VyYW5jZS9pbnN1cmFuY2UtcGxhbnM/c291cmNlPW1vYmlsZS1sZWZ0bWVudS1pbnN1cmFuY2UtY2xpY2tlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19IGhyZWY9XCIjXCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9pbnMucG5nXCJ9IGFsdD1cIlwiIGNsYXNzTmFtZT1cIlwiIC8+T1BEIEluc3VyYW5jZTxzcGFuIGNsYXNzTmFtZT17dXNlcl9pbnNfc3RhdHVzID09IDEgfHwgdXNlcl9pbnNfc3RhdHVzID09IDUgfHwgdXNlcl9pbnNfc3RhdHVzID09IDQgfHwgdXNlcl9pbnNfc3RhdHVzID09IDcgPyAnZmxvYXQtcmlnaHQgbWVtQWN0JyA6ICdmbG9hdC1yaWdodCBtZW1OZXcnfT57dXNlcl9pbnNfc3RhdHVzID09IDEgfHwgdXNlcl9pbnNfc3RhdHVzID09IDUgfHwgdXNlcl9pbnNfc3RhdHVzID09IDQgfHwgdXNlcl9pbnNfc3RhdHVzID09IDc/ICdBY3RpdmUnIDogJ05ldyd9PC9zcGFuPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzX2NhcmU/XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuaXNEb2NDYXJlLmJpbmQodGhpcyl9PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcHJpbWVjYWUucG5nXCJ9IGFsdD1cIlwiIGNsYXNzTmFtZT1cIlwiIC8+RG9jcHJpbWUgQ2FyZSA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCBtZW1BY3RcIj5BY3RpdmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGk+PGEgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVMZWZ0TWVudSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3VzZXIvb25saW5lUHJlc2NyaXB0aW9ucycpXG4gICAgICAgICAgICAgICAgICAgICAgfX0gaHJlZj1cIiNcIj48aW1nIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9jcC9hc3NldHMvaW1nL2N1c3RvbWVyLWljb25zL29ubG5wcmVzLnN2Z1wiIGFsdD1cIlwiIGNsYXNzTmFtZT1cIlwiIC8+TXkgT25saW5lIFByZXNjcmlwdGlvbnM8L2E+PC9saT4qL31cblxuICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZUxlZnRNZW51KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdXNlci9hcHBvaW50bWVudHMnKVxuICAgICAgICAgICAgICAgICAgICAgIH19IGhyZWY9XCIjXCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltYWdlcy9teS1hcHBvaW50bWVudC5wbmdcIn0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiXCIgLz5NeSBBcHBvaW50bWVudHM8L2E+PC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGk+PGEgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTGVmdE1lbnVPcmRlck1lZGljaW5lQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2xlZnRtZW51LW9yZGVyLW1lZGljaW5lLWNsaWNrZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVMZWZ0TWVudSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlGcmFtZVN0YXRlKCcnLCBmYWxzZSwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvb3JkZXItbWVkaWNpbmUnKVxuICAgICAgICAgICAgICAgICAgICAgIH19IGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiXCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9tZWRpY2luZS1vcmRlcjEucG5nXCJ9IGFsdD1cIlwiIGNsYXNzTmFtZT1cInBhZC1CMFwiIC8+T3JkZXIgTWVkaWNpbmVzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+ICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlTGVmdE1lbnUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy93YWxsZXQnKVxuICAgICAgICAgICAgICAgICAgICAgIH19IGhyZWY9XCIjXCI+PGltZyBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vY3AvYXNzZXRzL2ltZy9jdXN0b21lci1pY29ucy9ycC1pY28ucG5nXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiXCIgLz5NeSBXYWxsZXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8c3BhbiBjbGFzc05hbWU9XCJ3YWxsZXQtYW1udFwiPjxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvcnVwZWVzLWljb24ucG5nXCIgLz4yMTI8L3NwYW4+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgIHsvKjxsaSA+PGEgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVMZWZ0TWVudSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3JlZmVycmFsJylcbiAgICAgICAgICAgICAgICAgICAgICB9fSBocmVmPVwiI1wiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWFnZXMvcmVmZXItYW5kLWVhcm4ucG5nXCJ9IGFsdD1cIlwiIGNsYXNzTmFtZT1cIlwiIC8+UmVmZXIgPHNwYW4gY2xhc3NOYW1lPVwicmVmZXItYm9udXMgZmxvYXQtcmlnaHRcIj5FYXJuIOKCuSB7dGhpcy5wcm9wcy5yZWZlcl9hbW91bnR9PC9zcGFuPjwvYT48L2xpPiovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvcy1yZWxcIj48YSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZUxlZnRNZW51KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbm90aWZpY2F0aW9ucycpXG4gICAgICAgICAgICAgICAgICAgICAgfX0gaHJlZj1cIiNcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1hZ2VzL25vdGlmaWNhdGlvbi5wbmdcIn0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiXCIgLz5Ob3RpZmljYXRpb25zPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVucmVhZF9jb3VudCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb24tY291bnQgbGZ0LW5vdGlmeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwIHRleHQteHNcIj57dGhpcy5wcm9wcy51bnJlYWRfY291bnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcC1saXN0LW1lbnUgbGlzdF8yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b2dnbGVQcm9maWxlOiAhdGhpcy5zdGF0ZS50b2dnbGVQcm9maWxlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgfX0gaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1hZ2VzL215cHJvZmlsZS5wbmdcIn0gYWx0PVwiXCIgY2xhc3NOYW1lPVwicGFkLUIwXCIgLz5NeSBQcm9maWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRvZ2dsZVByb2ZpbGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidXAtZG93bi1hcndcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltYWdlcy91cC1hcnJvdy5wbmdcIn0gYWx0PVwiZG9jcHJpbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGltZyBjbGFzc05hbWU9XCJ1cC1kb3duLWFyd1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1hZ2VzL2Rvd24tYXJyb3cucG5nXCJ9IGFsdD1cImRvY3ByaW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudG9nZ2xlUHJvZmlsZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlTGVmdE1lbnUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy91c2VyL2ZhbWlseScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJwYWQtQjAgbXktZm1cIj5NeSBGYW1pbHk8L2E+PC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZUxlZnRNZW51KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdXNlci9hZGRyZXNzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBocmVmPVwiI1wiPk15IEFkZHJlc3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcC1saXN0LW1lbnUgbGlzdF8yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b2dnbGVBcnRpY2xlczogIXRoaXMuc3RhdGUudG9nZ2xlQXJ0aWNsZXMgfSlcbiAgICAgICAgICAgICAgICAgICAgICB9fSBocmVmPVwiI1wiID48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1hZ2VzL2FydGljbGVzLnBuZ1wifSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJcIiAvPlJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50b2dnbGVBcnRpY2xlcyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ1cC1kb3duLWFyd1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1hZ2VzL3VwLWFycm93LnBuZ1wifSBhbHQ9XCJkb2NwcmltZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8aW1nIGNsYXNzTmFtZT1cInVwLWRvd24tYXJ3XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWFnZXMvZG93bi1hcnJvdy5wbmdcIn0gYWx0PVwiZG9jcHJpbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudG9nZ2xlQXJ0aWNsZXMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSA+PGEgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlTGVmdE1lbnUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvYWxsLWRpc2Vhc2VzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJwYWQtQjBcIj5EaXNlYXNlczwvYT48L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpID48YSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVMZWZ0TWVudSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9hbGwtbWVkaWNpbmVzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJwYWQtQjBcIj5NZWRpY2luZXM8L2E+PC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSA+PGEgY2xhc3NOYW1lPVwicGFkLUIwXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlTGVmdE1lbnUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvdGVzdHNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBocmVmPVwiI1wiPlRlc3RzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpID48YSBjbGFzc05hbWU9XCJwYWQtQjBcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVMZWZ0TWVudSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9pcGQtcHJvY2VkdXJlc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGhyZWY9XCIjXCI+UHJvY2VkdXJlczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSA+PGEgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlTGVmdE1lbnUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvaG9zcGl0YWxzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gaHJlZj1cIiNcIj5Ib3NwaXRhbHM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcC1saXN0LW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3VzZXIvYWRkcmVzcycpfT48YSBocmVmPVwiI1wiPjxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvcmF0ZS11cy5wbmdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJcIiAvPlJhdGUgdXM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+Ki99XG5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZpbmFsLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7Lyo8bGk+PGEgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVMZWZ0TWVudSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvYWJvdXRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGhyZWY9XCIjXCI+QWJvdXQgVXM8L2E+PC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVMZWZ0TWVudSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvaG93aXR3b3Jrc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gaHJlZj1cIiNcIj5UZXJtcyBhbmQgQ29uZGl0aW9uczwvYT48L2xpPiovfVxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNUT1JBR0UuY2hlY2tBdXRoKCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibG9nb3V0XCIgPjxhIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVMZWZ0TWVudSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sb2dvdXQodGhpcy5wcm9wcy5jdXJyZW50Um9vbUlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBocmVmPVwiI1wiPkxvZ291dDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxsaSBjbGFzc05hbWU9XCJsb2dvdXRcIj48YSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlTGVmdE1lbnUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdXNlcicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19IGhyZWY9XCIjXCI+TG9naW48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cblxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA6IDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgIClcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTGVmdE1lbnUiXSwic291cmNlUm9vdCI6IiJ9