exports.ids = [1];
exports.modules = {

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _ChatPanel = __webpack_require__(/*! ../ChatPanel */ "./dev/js/components/commons/ChatPanel/index.js");

var _ChatPanel2 = _interopRequireDefault(_ChatPanel);

var _index = __webpack_require__(/*! ../../../actions/index.js */ "./dev/js/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class IpdChatPanel extends _react2.default.Component {

	constructor(props) {
		super(props);
		this.state = {
			minimize: this.props.ipd_chat ? this.props.ipd_chat.showMinimize ? false : this.props.ipd_chat.showIpdChat ? true : false : false,
			maximize: false
		};

		if (this.props.ipd_chat && this.props.ipd_chat.showMinimize) {
			let ipdView = _extends({}, this.props.ipd_chat);
			ipdView.showMinimize = false;
			this.props.ipdChatView(ipdView);
		}
	}

	closeChat() {
		this.props.ipdChatView(null);
		if (this.child.closeChat) {
			this.child.closeChat();
		}
	}

	componentWillReceiveProps(props) {
		if (props.ipd_chat != this.props.ipd_chat) {
			this.setState({ minimize: props.ipd_chat ? props.ipd_chat.showMinimize ? false : props.ipd_chat.showIpdChat ? true : false : true });
		}
	}

	render() {

		return _react2.default.createElement(
			'section',
			{ className: `${this.props.ipd_chat ? `ipd-chat-pop ${this.props.bookingPage && !this.state.maximize ? 'ipd-chat-btn-width' : ''} ${this.state.maximize ? 'ipd-chat-pop-full' : this.state.minimize ? 'ipd-chat-pop-minimize' : ''}` : 'd-none'} ` },
			_react2.default.createElement(
				'div',
				{ className: 'ipd-chat-header' },
				_react2.default.createElement(
					'p',
					{ onClick: () => this.setState({ maximize: true, minimize: false }) },
					this.props.bookingPage ? 'Need help?' : 'Need help in booking doctor appointment/surgery?'
				),
				_react2.default.createElement(
					'div',
					{ className: 'cht-head-rqst-btn' },
					this.state.minimize ? _react2.default.createElement(
						'span',
						{ onClick: () => this.closeChat() },
						_react2.default.createElement('img', { className: 'close-chat', src: "/assets" + '/img/customer-icons/close-black.svg', style: { width: '13px', display: 'block', lineHeight: '0' } })
					) : _react2.default.createElement(
						'span',
						{ onClick: () => this.setState({ minimize: true, maximize: false }) },
						_react2.default.createElement('img', { className: 'close-chat', src: "/assets" + '/img/chatminimize.svg', style: { width: '20px' } })
					)
				)
			),
			_react2.default.createElement(
				'div',
				{ className: 'ipd-chat-render' },
				_react2.default.createElement(_ChatPanel2.default, _extends({}, this.props, { mobilechatview: true, showHalfScreenChat: true, onRefIpd: ref => this.child = ref }))
			)
		);
	}
}

const mapStateToProps = (state, passedProps = {}) => {
	const {
		ipd_chat
	} = state.USER;

	return {
		ipd_chat
	};
};

const mapDispatchToProps = dispatch => {
	return {
		ipdChatView: data => dispatch((0, _index.ipdChatView)(data))
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

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

class DesktopProfileHeader extends _react2.default.Component {
    constructor(props) {
        super(props);

        this.logoClick = () => {
            if (this.props.homePage && !!!this.props.chatPage) {
                if (window) {
                    window.scrollTo(0, 0);
                }
            } else {
                this.props.history.push('/');
            }
        };

        this.state = {
            headerButtonsState: false,
            medicinePopup: false,
            toggleHamburger: this.props.toggleLeftMenu || false,
            showLeftMenu: false,
            showSBI: false
        };
    }

    componentDidMount() {
        this.setState({ showLeftMenu: true });

        if (this.props.new_fixed_header && this.props.new_fixed_header == 1) {
            window.addEventListener('scroll', () => {
                const scrollHeight = window.pageYOffset;
                if (window.innerWidth < 767) {
                    const gHeader = document.getElementById('is_header');
                    if (gHeader) {
                        const gHeaderHeight = gHeader.clientHeight;
                        if (document.getElementById('listing-header')) {
                            const lvHeader = document.getElementById('listing-header');
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
        setTimeout(() => {
            this.setState({ showSBI: true });
        }, 100);
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.toggleHamburger != nextProps.toggleLeftMenu) {
            this.setState({ toggleHamburger: nextProps.toggleLeftMenu }, () => {
                if (this.state.toggleHamburger) {
                    document.body.style.overflow = "hidden";
                } else {
                    document.body.style.overflow = "";
                }
            });
        }
    }

    navigateTo(where, type) {
        if (type) {
            this.props.selectSearchType(type);
        }
        this.props.history.push(where);
    }

    toggleHeaderButtons() {
        let data = {
            'Category': 'ConsumerApp', 'Action': 'SearchButtonClickedMobile', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'search-button-clicked-mobile'
        };
        _gtm2.default.sendEvent({ data: data });
        this.setState({ headerButtonsState: !this.state.headerButtonsState, medicinePopup: false });
    }

    goToLocation() {
        let redirect_to = "";
        if (window.location.pathname.includes('sptcit') || window.location.pathname.includes('sptlitcit')) {
            redirect_to = "/opd/searchresults";
        }

        if (window.location.pathname.includes('lbcit') || window.location.pathname.includes('lblitcit')) {
            redirect_to = "/lab/searchresults";
        }

        let location_url = '/locationsearch';
        if (redirect_to) {
            location_url += `?redirect_to=${redirect_to}`;
        }
        this.props.history.push(location_url);
    }

    openSearch() {
        let search_back = false;
        if (this.props.location.state && this.props.location.state.search_back) {
            search_back = true;
        }

        if (search_back) {
            this.props.history.go(-1);
        } else {
            this.props.history.push(`/search?from=header&pageType=${this.props.pageType ? this.props.pageType : ''}`);
        }
    }

    openLocation() {
        this.props.history.push('/locationsearch');
    }

    toggleLeftMenu() {
        this.props.toggleLeftMenuBar();
    }

    render() {
        let profileData = '';
        if (this.props.profiles && this.props.defaultProfile) {
            profileData = this.props.profiles[this.props.defaultProfile];
        }

        let styles = {};
        // if (this.props.homePage) {
        //     styles = { display: 'block' }
        // }

        let location = "Delhi";
        if (this.props.selectedLocation) {
            location = this.props.selectedLocation.formatted_address.slice(0, 10);
        }

        let headerClass = "doc-header header-overflow";

        if (this.props.homePage) {
            headerClass = "doc-header";
        }

        if (!this.props.showSearch) {
            headerClass += " remove-header-height";
        }
        let hideSearch = false;
        if (this.props.history.location.pathname == '/search') {
            hideSearch = true;
        }

        let cart_count = 0;
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
                        { className: 'text-capitalize', onClick: e => {
                                e.preventDefault();
                                this.navigateTo("/search", 'opd');
                            } },
                        'find a doctor'
                    ),
                    _react2.default.createElement(
                        'li',
                        { className: 'text-capitalize', onClick: e => {
                                e.preventDefault();
                                this.navigateTo("/search", 'lab');
                            } },
                        'lab test'
                    ),
                    _react2.default.createElement(
                        'li',
                        { className: 'text-capitalize', onClick: e => {
                                e.preventDefault();
                                this.navigateTo('/full-body-checkup-health-packages');
                            } },
                        'Health packages'
                    ),
                    _react2.default.createElement(
                        'li',
                        { className: 'text-capitalize', onClick: e => {
                                e.preventDefault();
                                this.navigateTo('/online-consultation');
                            } },
                        'Online consultation'
                    )
                )
            ) : '',
            _react2.default.createElement(
                'div',
                { className: ` container-fluid main-header d-flex ${this.props.new_fixed_header && this.props.new_fixed_header == 1 ? '' : 'lw-fixed-header'} ${this.props.isSearchList ? 'pkgComp' : ''}` },
                this.state.toggleHamburger ? _react2.default.createElement('div', { className: 'cancel-overlay cl-overlay', onClick: e => {
                        e.stopPropagation();
                        this.toggleLeftMenu();
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
                            { className: 'menu-icon', onClick: e => {
                                    e.stopPropagation();
                                    document.body.style.overflow = "hidden";
                                    this.toggleLeftMenu();
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
                            { className: 'sbi-iconfx', href: '/', onClick: e => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    this.logoClick();
                                } },
                            _react2.default.createElement(
                                'div',
                                { className: 'd-none d-lg-block' },
                                _react2.default.createElement('img', { style: { transform: 'scale(1.5)' }, src: 'https://cdn.docprime.com/media/web/custom_images/LOGO-01.svg', alt: 'docprime', height: '36' })
                            ),
                            this.state.showSBI && document && typeof document == 'object' && document.location && document.location.host && document.location.host.includes('sbi') ? _react2.default.createElement(
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
                                    { className: 'd-flex align-item-center', onClick: e => {
                                            e.preventDefault();
                                            this.navigateTo('/contact');
                                        } },
                                    this.state.showSBI && document && typeof document == 'object' && document.location && document.location.host && document.location.host.includes('sbi') ? _react2.default.createElement('img', { height: '26px', src: "/assets" + "/img/contact-us-sbi.svg" }) : _react2.default.createElement('img', { height: '26px', src: "/assets" + "/img/contact-us.svg" }),
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
                                    this.state.showSBI && document && typeof document == 'object' && document.location && document.location.host && document.location.host.includes('sbi') ? _react2.default.createElement('img', { height: '19px', src: "/assets" + "/img/file-format-sbi.svg" }) : _react2.default.createElement('img', { height: '19px', src: "/assets" + "/img/file-format.svg" }),
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
                                                { href: '/all-medicines', onClick: e => {
                                                        e.preventDefault();
                                                        this.props.history.push("/all-medicines");
                                                    } },
                                                'Medicines'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: '/all-diseases', onClick: e => {
                                                        e.preventDefault();
                                                        this.props.history.push("/all-diseases");
                                                    } },
                                                'Diseases'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: '/tests', onClick: e => {
                                                        e.preventDefault();
                                                        this.props.history.push("/tests");
                                                    } },
                                                'Tests'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: '/ipd-procedures', onClick: e => {
                                                        e.preventDefault();
                                                        this.props.history.push("/ipd-procedures");
                                                    } },
                                                'Procedures'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: '/hospitals', onClick: e => {
                                                        e.preventDefault();
                                                        this.props.history.push("/hospitals");
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
                                    { style: { position: 'relative' }, className: 'd-flex align-item-center', onClick: () => {
                                            this.props.history.push('/cart');
                                        } },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'd-flex align-item-center m-0' },
                                        this.state.showSBI && document && typeof document == 'object' && document.location && document.location.host && document.location.host.includes('sbi') ? _react2.default.createElement('img', { height: '19px', src: "/assets" + "/img/cart_sbi.svg" }) : _react2.default.createElement('img', { height: '19px', src: "/assets" + "/img/cart.svg" }),
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
                                    { className: 'd-flex align-item-center no-border', style: { position: 'relative' }, onClick: () => {
                                            this.props.history.push('/notifications');
                                        } },
                                    this.state.showSBI && document && typeof document == 'object' && document.location && document.location.host && document.location.host.includes('sbi') ? _react2.default.createElement('img', { height: '19px', src: "/assets" + "/img/notification-sbi.svg" }) : _react2.default.createElement('img', { height: '19px', src: "/assets" + "/img/notification.svg" }),
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
                                    { className: 'd-flex align-item-center no-border user-name-col', onClick: () => {
                                            this.props.history.push('/user');
                                        } },
                                    _react2.default.createElement(_initialsPicture2.default, { name: profileData.name, className: 'user-name-initials d-flex justify-content-center align-item-center' }),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'd-none d-sm-block d-lg-block user-name-span' },
                                        profileData.name
                                    )
                                ) : _react2.default.createElement(
                                    'a',
                                    { className: 'd-flex align-item-center no-border', onClick: () => {
                                            this.props.homePage ? this.props.history.push('/user?ref=home') : this.props.history.push('/user');
                                        } },
                                    this.state.showSBI && document && typeof document == 'object' && document.location && document.location.host && document.location.host.includes('sbi') ? _react2.default.createElement('img', { height: '24px', src: "/assets" + "/img/login-sbi.svg" }) : _react2.default.createElement('img', { height: '24px', src: "/assets" + "/img/login.svg" }),
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
                    { className: `row listing-view-header visible-col ${this.props.isSearchList ? 'pkgComp' : ''}`, id: 'listing-header' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-1 pr-0 menu-icon', onClick: e => {
                                e.stopPropagation();
                                document.body.style.overflow = "hidden";
                                this.toggleLeftMenu();
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _index = __webpack_require__(/*! ../../../actions/index.js */ "./dev/js/actions/index.js");

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _CommonHeader = __webpack_require__(/*! ./CommonHeader.js */ "./dev/js/components/commons/DesktopProfileHeader/CommonHeader.js");

var _CommonHeader2 = _interopRequireDefault(_CommonHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DesktopProfileHeader extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
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

    render() {

        return _react2.default.createElement(_CommonHeader2.default, this.props);
    }
}

DesktopProfileHeader.contextTypes = {
    router: () => null
};
const mapStateToProps = state => {

    let { profiles, selectedProfile, defaultProfile, notifications, newNotification, currentRoomId, cart, unread_count, toggleLeftMenu, isUserCared, leftMenuOpenFirstTime, ipd_chat, iFrameUrls, refer_amount } = state.USER;

    let {
        selectedLocation,
        common_settings
    } = state.SEARCH_CRITERIA_OPD;

    return {
        profiles, selectedProfile, defaultProfile, notifications, newNotification, selectedLocation, currentRoomId, cart, unread_count, toggleLeftMenu, isUserCared, leftMenuOpenFirstTime, ipd_chat, common_settings, iFrameUrls, refer_amount
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: chatRoomId => dispatch((0, _index.logout)(chatRoomId)),
        fetchNotifications: cb => dispatch((0, _index.fetchNotifications)(cb)),
        getUserProfile: () => dispatch((0, _index.getUserProfile)()),
        getIsCareDetails: () => dispatch((0, _index.getIsCareDetails)()),
        toggleLeftMenuBar: (toggle, defaultVal) => dispatch((0, _index.toggleLeftMenuBar)(toggle, defaultVal)),
        selectSearchType: type => dispatch((0, _index.selectSearchType)(type)),
        loadOPDInsurance: city => dispatch((0, _index.loadOPDInsurance)(city)),
        iFrameState: (url, emptyUrls, leftMenuClick) => dispatch((0, _index.iFrameState)(url, emptyUrls, leftMenuClick)),
        clearVipSelectedPlan: () => dispatch((0, _index.clearVipSelectedPlan)())
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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _initialsPicture = __webpack_require__(/*! ../initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _config = __webpack_require__(/*! ../../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _path = __webpack_require__(/*! path */ "path");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LeftMenu extends _react2.default.Component {

  constructor(props) {
    super(props);
    this.state = {
      toggleProfile: false,
      toggleArticles: false
    };
  }

  isDocCare() {
    this.props.toggleLeftMenu();
    if (this.props.isUserCared && this.props.isUserCared.user_plan_id) {
      this.props.history.push('/prime/success?user_plan=' + this.props.isUserCared.user_plan_id);
    } else {
      this.props.history.push('/prime/plans');
    }
  }

  render() {
    let user = null;
    let thumbnail = null;
    let memberClass = 'float-right memNew';
    let memStatus = 'New';
    let user_insurance_status = false;
    let user_ins_status;
    let is_user_gold_member = false;
    let gold_user_profile = {};
    let is_care = false;
    let care_user_profile = {};
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
      Object.entries(this.props.profiles).map(function ([key, value]) {
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
          { className: `col-xs-12 col-d-width ${this.props.toggleHamburger ? 'col-d-width-ease' : ''}` },
          _react2.default.createElement(
            'div',
            { className: 'left-menu' },
            this.props.leftMenuOpenFirstTime ? _react2.default.createElement(
              'div',
              { className: '' },
              user ? _react2.default.createElement(
                'div',
                { className: 'header-box', onClick: () => {
                    this.props.toggleLeftMenu();
                    this.props.history.push(`/user`);
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
                { className: 'header-box', onClick: () => {
                    this.props.toggleLeftMenu();
                    this.props.history.push('/user');
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
                    { className: 'p-relative', onClick: e => {
                        let data = {
                          'Category': 'ConsumerApp', 'Action': 'MobileLeftMenuGoldClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'mobile-leftmenu-gold-clicked'
                        };
                        _gtm2.default.sendEvent({ data: data });
                        e.preventDefault();
                        this.props.clearVipSelectedPlan();
                        this.props.toggleLeftMenu();
                        this.props.history.push('/vip-gold-details?is_gold=true&source=mobile-leftmenu-gold-clicked&lead_source=Docprime');
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
                    { className: 'p-relative', onClick: e => {
                        let data = {
                          'Category': 'ConsumerApp', 'Action': 'MobileLeftMenuVipClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'mobile-leftmenu-vip-clicked'
                        };
                        _gtm2.default.sendEvent({ data: data });
                        e.preventDefault();
                        this.props.clearVipSelectedPlan();
                        this.props.toggleLeftMenu();
                        this.props.history.push('/vip-club-details?source=mobile-leftmenu-vip-clicked&lead_source=Docprime');
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
                    { onClick: e => {
                        let data = {
                          'Category': 'ConsumerApp', 'Action': 'MobileLeftMenuInsuranceClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'mobile-leftmenu-insurance-clicked'
                        };
                        _gtm2.default.sendEvent({ data: data });
                        e.preventDefault();
                        this.props.toggleLeftMenu();
                        this.props.history.push('/insurance/insurance-plans?source=mobile-leftmenu-insurance-clicked');
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
                    { onClick: e => {
                        e.preventDefault();
                        this.props.toggleLeftMenu();
                        this.props.history.push('/user/appointments');
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
                    { onClick: e => {
                        e.preventDefault();
                        this.props.toggleLeftMenu();
                        this.props.history.push('/wallet');
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
                    { onClick: e => {
                        e.preventDefault();
                        this.props.toggleLeftMenu();
                        this.props.history.push('/notifications');
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
                    { onClick: e => {
                        e.preventDefault();
                        this.setState({ toggleProfile: !this.state.toggleProfile });
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
                      { onClick: e => {
                          e.preventDefault();
                          this.props.toggleLeftMenu();
                          this.props.history.push('/user/family');
                        }, href: '#', className: 'pad-B0 my-fm' },
                      'My Family'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { onClick: e => {
                          e.preventDefault();
                          this.props.toggleLeftMenu();
                          this.props.history.push('/user/address');
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
                    { onClick: e => {
                        e.preventDefault();
                        this.setState({ toggleArticles: !this.state.toggleArticles });
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
                      { onClick: e => {
                          e.preventDefault();
                          this.props.toggleLeftMenu();
                          this.props.history.push("/all-diseases");
                        }, href: '#', className: 'pad-B0' },
                      'Diseases'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { onClick: e => {
                          e.preventDefault();
                          this.props.toggleLeftMenu();
                          this.props.history.push("/all-medicines");
                        }, href: '#', className: 'pad-B0' },
                      'Medicines'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { className: 'pad-B0', onClick: e => {
                          e.preventDefault();
                          this.props.toggleLeftMenu();
                          this.props.history.push("/tests");
                        }, href: '#' },
                      'Tests'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { className: 'pad-B0', onClick: e => {
                          e.preventDefault();
                          this.props.toggleLeftMenu();
                          this.props.history.push("/ipd-procedures");
                        }, href: '#' },
                      'Procedures'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { onClick: e => {
                          e.preventDefault();
                          this.props.toggleLeftMenu();
                          this.props.history.push("/hospitals");
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
                    { onClick: e => {
                        e.preventDefault();
                        this.props.toggleLeftMenu();
                        this.props.logout(this.props.currentRoomId);
                      }, href: '#' },
                    'Logout'
                  )
                ) : _react2.default.createElement(
                  'li',
                  { className: 'logout' },
                  _react2.default.createElement(
                    'a',
                    { onClick: e => {
                        e.preventDefault();
                        this.props.toggleLeftMenu();
                        this.props.history.push('/user');
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
}
exports.default = LeftMenu;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0NoYXRQYW5lbC9DaGF0SXBkUGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlci9Db21tb25IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xlZnRNZW51L0xlZnRNZW51LmpzIl0sIm5hbWVzIjpbIklwZENoYXRQYW5lbCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwibWluaW1pemUiLCJpcGRfY2hhdCIsInNob3dNaW5pbWl6ZSIsInNob3dJcGRDaGF0IiwibWF4aW1pemUiLCJpcGRWaWV3IiwiaXBkQ2hhdFZpZXciLCJjbG9zZUNoYXQiLCJjaGlsZCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJzZXRTdGF0ZSIsInJlbmRlciIsImJvb2tpbmdQYWdlIiwiQVNTRVRTX0JBU0VfVVJMIiwid2lkdGgiLCJkaXNwbGF5IiwibGluZUhlaWdodCIsInJlZiIsIm1hcFN0YXRlVG9Qcm9wcyIsInBhc3NlZFByb3BzIiwiVVNFUiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiZGF0YSIsIkRlc2t0b3BQcm9maWxlSGVhZGVyIiwibG9nb0NsaWNrIiwiaG9tZVBhZ2UiLCJjaGF0UGFnZSIsIndpbmRvdyIsInNjcm9sbFRvIiwiaGlzdG9yeSIsInB1c2giLCJoZWFkZXJCdXR0b25zU3RhdGUiLCJtZWRpY2luZVBvcHVwIiwidG9nZ2xlSGFtYnVyZ2VyIiwidG9nZ2xlTGVmdE1lbnUiLCJzaG93TGVmdE1lbnUiLCJzaG93U0JJIiwiY29tcG9uZW50RGlkTW91bnQiLCJuZXdfZml4ZWRfaGVhZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbEhlaWdodCIsInBhZ2VZT2Zmc2V0IiwiaW5uZXJXaWR0aCIsImdIZWFkZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ0hlYWRlckhlaWdodCIsImNsaWVudEhlaWdodCIsImx2SGVhZGVyIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic2V0VGltZW91dCIsIm5leHRQcm9wcyIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwibmF2aWdhdGVUbyIsIndoZXJlIiwidHlwZSIsInNlbGVjdFNlYXJjaFR5cGUiLCJ0b2dnbGVIZWFkZXJCdXR0b25zIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VuZEV2ZW50IiwiZ29Ub0xvY2F0aW9uIiwicmVkaXJlY3RfdG8iLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJsb2NhdGlvbl91cmwiLCJvcGVuU2VhcmNoIiwic2VhcmNoX2JhY2siLCJnbyIsInBhZ2VUeXBlIiwib3BlbkxvY2F0aW9uIiwidG9nZ2xlTGVmdE1lbnVCYXIiLCJwcm9maWxlRGF0YSIsInByb2ZpbGVzIiwiZGVmYXVsdFByb2ZpbGUiLCJzdHlsZXMiLCJzZWxlY3RlZExvY2F0aW9uIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJzbGljZSIsImhlYWRlckNsYXNzIiwic2hvd1NlYXJjaCIsImhpZGVTZWFyY2giLCJjYXJ0X2NvdW50IiwiY2FydCIsImxlbmd0aCIsInNob3dQYWNrYWdlU3RyaXAiLCJlIiwicHJldmVudERlZmF1bHQiLCJpc1NlYXJjaExpc3QiLCJzdG9wUHJvcGFnYXRpb24iLCJiaW5kIiwidHJhbnNmb3JtIiwiaG9zdCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsInBhZGRpbmdMZWZ0IiwidG9wIiwicG9zaXRpb24iLCJuZXdOb3RpZmljYXRpb24iLCJsZWZ0IiwibmFtZSIsIm1hcmdpbkJvdHRvbSIsIlNUT1JBR0UiLCJjaGVja0F1dGgiLCJmZXRjaE5vdGlmaWNhdGlvbnMiLCJzZWxlY3RlZFByb2ZpbGUiLCJnZXRVc2VyUHJvZmlsZSIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsIm5vdGlmaWNhdGlvbnMiLCJjdXJyZW50Um9vbUlkIiwidW5yZWFkX2NvdW50IiwiaXNVc2VyQ2FyZWQiLCJsZWZ0TWVudU9wZW5GaXJzdFRpbWUiLCJpRnJhbWVVcmxzIiwicmVmZXJfYW1vdW50IiwiY29tbW9uX3NldHRpbmdzIiwiU0VBUkNIX0NSSVRFUklBX09QRCIsImxvZ291dCIsImNoYXRSb29tSWQiLCJjYiIsImdldElzQ2FyZURldGFpbHMiLCJ0b2dnbGUiLCJkZWZhdWx0VmFsIiwibG9hZE9QREluc3VyYW5jZSIsImNpdHkiLCJpRnJhbWVTdGF0ZSIsInVybCIsImVtcHR5VXJscyIsImxlZnRNZW51Q2xpY2siLCJjbGVhclZpcFNlbGVjdGVkUGxhbiIsIkxlZnRNZW51IiwidG9nZ2xlUHJvZmlsZSIsInRvZ2dsZUFydGljbGVzIiwiaXNEb2NDYXJlIiwidXNlcl9wbGFuX2lkIiwidXNlciIsInRodW1ibmFpbCIsIm1lbWJlckNsYXNzIiwibWVtU3RhdHVzIiwidXNlcl9pbnN1cmFuY2Vfc3RhdHVzIiwidXNlcl9pbnNfc3RhdHVzIiwiaXNfdXNlcl9nb2xkX21lbWJlciIsImdvbGRfdXNlcl9wcm9maWxlIiwiaXNfY2FyZSIsImNhcmVfdXNlcl9wcm9maWxlIiwicHJvZmlsZV9pbWFnZSIsImlzX2luc3VyZWQiLCJpbnN1cmFuY2Vfc3RhdHVzIiwiaGFzX2FjdGl2ZV9wbGFuIiwiT2JqZWN0Iiwia2V5cyIsImVudHJpZXMiLCJtYXAiLCJrZXkiLCJ2YWx1ZSIsImlzX3ZpcF9nb2xkX21lbWJlciIsImhlaWdodCIsImZsb2F0IiwiY29sb3IiLCJDT05GSUciLCJFTkFCTEVfVklQX0dPTEQiLCJFTkFCTEVfVklQX0NMVUIiLCJpc192aXBfbWVtYmVyIiwiRU5BQkxFX0lOU1VSQU5DRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FB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VytILE1BQVgsQ0FBa0IsS0FBSy9ILEtBQUwsQ0FBV3VILGFBQTdCO0FBQ0QsdUJBSnVCLEVBSXJCLE1BQUssR0FKZ0I7QUFBQTtBQUFBO0FBQXhCLGlCQURGLEdBTUk7QUFBQTtBQUFBLG9CQUFJLFdBQVUsUUFBZDtBQUF1QjtBQUFBO0FBQUEsc0JBQUcsU0FBVXpCLENBQUQsSUFBTztBQUMxQ0EsMEJBQUVDLGNBQUY7QUFDQSw2QkFBSy9GLEtBQUwsQ0FBV3FDLGNBQVg7QUFDQSw2QkFBS3JDLEtBQUwsQ0FBV2dDLE9BQVgsQ0FBbUJDLElBQW5CLENBQXdCLE9BQXhCO0FBQ0QsdUJBSndCLEVBSXRCLE1BQUssR0FKaUI7QUFBQTtBQUFBO0FBQXZCO0FBbkJSO0FBdE5GLGFBREYsR0FvUEk7QUF0UFI7QUFERjtBQURGO0FBREYsS0FGRjtBQW1RRDtBQWhVb0M7a0JBa1V4QjJHLFEiLCJmaWxlIjoiMS5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBDaGF0UGFuZWwgZnJvbSAnLi4vQ2hhdFBhbmVsJ1xuaW1wb3J0IHsgIGlwZENoYXRWaWV3IH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcblxuY2xhc3MgSXBkQ2hhdFBhbmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRtaW5pbWl6ZTogdGhpcy5wcm9wcy5pcGRfY2hhdD9cblx0XHRcdFx0dGhpcy5wcm9wcy5pcGRfY2hhdC5zaG93TWluaW1pemU/ZmFsc2U6dGhpcy5wcm9wcy5pcGRfY2hhdC5zaG93SXBkQ2hhdD90cnVlOmZhbHNlOmZhbHNlLFxuXHRcdFx0bWF4aW1pemU6IGZhbHNlXG5cdFx0fVxuXHRcdFxuXHRcdGlmKHRoaXMucHJvcHMuaXBkX2NoYXQgJiYgdGhpcy5wcm9wcy5pcGRfY2hhdC5zaG93TWluaW1pemUpe1xuXHRcdFx0bGV0IGlwZFZpZXcgPSB7Li4udGhpcy5wcm9wcy5pcGRfY2hhdH1cblx0XHRcdGlwZFZpZXcuc2hvd01pbmltaXplPSBmYWxzZVxuXHRcdFx0dGhpcy5wcm9wcy5pcGRDaGF0VmlldyhpcGRWaWV3KVx0XG5cdFx0fVxuXHR9XG5cbiAgICBjbG9zZUNoYXQoKSB7XG4gICAgXHR0aGlzLnByb3BzLmlwZENoYXRWaWV3KG51bGwpXG4gICAgXHRpZih0aGlzLmNoaWxkLmNsb3NlQ2hhdCl7XG4gICAgXHRcdHRoaXMuY2hpbGQuY2xvc2VDaGF0KClcbiAgICBcdH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgXHRpZihwcm9wcy5pcGRfY2hhdCAhPSB0aGlzLnByb3BzLmlwZF9jaGF0KSB7XG4gICAgXHRcdHRoaXMuc2V0U3RhdGUoe21pbmltaXplOiBwcm9wcy5pcGRfY2hhdD9cbiAgICBcdFx0XHRwcm9wcy5pcGRfY2hhdC5zaG93TWluaW1pemU/ZmFsc2U6cHJvcHMuaXBkX2NoYXQuc2hvd0lwZENoYXQ/dHJ1ZTpmYWxzZVxuICAgIFx0XHRcdDp0cnVlfSlcbiAgICBcdH1cbiAgICB9XG5cblx0cmVuZGVyKCl7XG5cdFxuXHRcdHJldHVybihcblxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtgJHt0aGlzLnByb3BzLmlwZF9jaGF0P2BpcGQtY2hhdC1wb3AgJHt0aGlzLnByb3BzLmJvb2tpbmdQYWdlICYmICF0aGlzLnN0YXRlLm1heGltaXplPydpcGQtY2hhdC1idG4td2lkdGgnOicnfSAke3RoaXMuc3RhdGUubWF4aW1pemU/J2lwZC1jaGF0LXBvcC1mdWxsJzp0aGlzLnN0YXRlLm1pbmltaXplPydpcGQtY2hhdC1wb3AtbWluaW1pemUnOicnfWA6J2Qtbm9uZSd9IGB9ID5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpcGQtY2hhdC1oZWFkZXJcIj5cblx0XHRcdFx0XHQ8cCBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7bWF4aW1pemU6IHRydWUsIG1pbmltaXplOiBmYWxzZX0pfT57dGhpcy5wcm9wcy5ib29raW5nUGFnZT8nTmVlZCBoZWxwPyc6J05lZWQgaGVscCBpbiBib29raW5nIGRvY3RvciBhcHBvaW50bWVudC9zdXJnZXJ5Pyd9PC9wPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2h0LWhlYWQtcnFzdC1idG5cIiA+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUubWluaW1pemU/XG5cdFx0XHRcdFx0XHRcdDxzcGFuICBvbkNsaWNrPXsoKT0+dGhpcy5jbG9zZUNoYXQoKX0+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJjbG9zZS1jaGF0XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKycvaW1nL2N1c3RvbWVyLWljb25zL2Nsb3NlLWJsYWNrLnN2Zyd9IHN0eWxlPXt7IHdpZHRoOiAnMTNweCcsZGlzcGxheTonYmxvY2snLCBsaW5lSGVpZ2h0OicwJyB9fSAvPlxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+OlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiAgb25DbGljaz17KCk9PnRoaXMuc2V0U3RhdGUoe21pbmltaXplOiB0cnVlLCBtYXhpbWl6ZTogZmFsc2V9KX0+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJjbG9zZS1jaGF0XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKycvaW1nL2NoYXRtaW5pbWl6ZS5zdmcnfSBzdHlsZT17eyB3aWR0aDogJzIwcHgnIH19IC8+IFxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHRcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpcGQtY2hhdC1yZW5kZXJcIj5cblx0XHRcdFx0XHQ8Q2hhdFBhbmVsIHsuLi50aGlzLnByb3BzfSBtb2JpbGVjaGF0dmlldz17dHJ1ZX0gc2hvd0hhbGZTY3JlZW5DaGF0PXt0cnVlfSBvblJlZklwZD17cmVmID0+ICh0aGlzLmNoaWxkID0gcmVmKX0vPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdClcblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHBhc3NlZFByb3BzID0ge30pID0+IHtcbiAgICBjb25zdCB7XG4gICAgXHRpcGRfY2hhdFxuICAgIH0gPSBzdGF0ZS5VU0VSXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpcGRfY2hhdFxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICBcdGlwZENoYXRWaWV3OiAoZGF0YSkgPT4gZGlzcGF0Y2goaXBkQ2hhdFZpZXcoZGF0YSkpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKHdpdGhSb3V0ZXIoSXBkQ2hhdFBhbmVsKSlcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5pdGlhbHNQaWN0dXJlIGZyb20gJy4uL2luaXRpYWxzUGljdHVyZSdcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0nXG5pbXBvcnQgTGVmdE1lbnUgZnJvbSAnLi4vTGVmdE1lbnUvTGVmdE1lbnUuanMnXG5pbXBvcnQgSXBkQ2hhdFBhbmVsIGZyb20gJy4uL0NoYXRQYW5lbC9DaGF0SXBkUGFuZWwuanMnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5pbXBvcnQgeyB0b2dnbGVQcm9maWxlUHJvY2VkdXJlcyB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvb3BkL2RvY3RvclNlYXJjaCc7XG5cbmNsYXNzIERlc2t0b3BQcm9maWxlSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGhlYWRlckJ1dHRvbnNTdGF0ZTogZmFsc2UsXG4gICAgICAgICAgICBtZWRpY2luZVBvcHVwOiBmYWxzZSxcbiAgICAgICAgICAgIHRvZ2dsZUhhbWJ1cmdlcjogdGhpcy5wcm9wcy50b2dnbGVMZWZ0TWVudSB8fCBmYWxzZSxcbiAgICAgICAgICAgIHNob3dMZWZ0TWVudTogZmFsc2UsXG4gICAgICAgICAgICBzaG93U0JJOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TGVmdE1lbnU6IHRydWUgfSlcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMucHJvcHMubmV3X2ZpeGVkX2hlYWRlciAmJiB0aGlzLnByb3BzLm5ld19maXhlZF9oZWFkZXIgPT0gMSl7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3Njcpe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBnSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzX2hlYWRlcicpO1xuICAgICAgICAgICAgICAgICAgICBpZihnSGVhZGVyKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdIZWFkZXJIZWlnaHQgPSBnSGVhZGVyLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0aW5nLWhlYWRlcicpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsdkhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0aW5nLWhlYWRlcicpOyAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzY3JvbGxIZWlnaHQgPj0gZ0hlYWRlckhlaWdodC8yKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbHZIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbGlzdGluZy1oZWFkZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsdkhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdsaXN0aW5nLWhlYWRlcicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TGVmdE1lbnU6IHRydWV9KVxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93U0JJOiB0cnVlIH0pXG4gICAgICAgIH0sIDEwMClcbiAgICAgICAgXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudG9nZ2xlSGFtYnVyZ2VyICE9IG5leHRQcm9wcy50b2dnbGVMZWZ0TWVudSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvZ2dsZUhhbWJ1cmdlcjogbmV4dFByb3BzLnRvZ2dsZUxlZnRNZW51IH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50b2dnbGVIYW1idXJnZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgbmF2aWdhdGVUbyh3aGVyZSwgdHlwZSkge1xuICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RTZWFyY2hUeXBlKHR5cGUpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2god2hlcmUpXG4gICAgfVxuXG4gICAgdG9nZ2xlSGVhZGVyQnV0dG9ucygpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1NlYXJjaEJ1dHRvbkNsaWNrZWRNb2JpbGUnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdzZWFyY2gtYnV0dG9uLWNsaWNrZWQtbW9iaWxlJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoZWFkZXJCdXR0b25zU3RhdGU6ICF0aGlzLnN0YXRlLmhlYWRlckJ1dHRvbnNTdGF0ZSwgbWVkaWNpbmVQb3B1cDogZmFsc2UgfSlcbiAgICB9XG5cbiAgICBnb1RvTG9jYXRpb24oKSB7XG4gICAgICAgIGxldCByZWRpcmVjdF90byA9IFwiXCJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnc3B0Y2l0JykgfHwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCdzcHRsaXRjaXQnKSkge1xuICAgICAgICAgICAgcmVkaXJlY3RfdG8gPSBcIi9vcGQvc2VhcmNocmVzdWx0c1wiXG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCdsYmNpdCcpIHx8IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnbGJsaXRjaXQnKSkge1xuICAgICAgICAgICAgcmVkaXJlY3RfdG8gPSBcIi9sYWIvc2VhcmNocmVzdWx0c1wiXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbG9jYXRpb25fdXJsID0gJy9sb2NhdGlvbnNlYXJjaCdcbiAgICAgICAgaWYgKHJlZGlyZWN0X3RvKSB7XG4gICAgICAgICAgICBsb2NhdGlvbl91cmwgKz0gYD9yZWRpcmVjdF90bz0ke3JlZGlyZWN0X3RvfWBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChsb2NhdGlvbl91cmwpXG4gICAgfVxuXG4gICAgb3BlblNlYXJjaCgpIHtcbiAgICAgICAgbGV0IHNlYXJjaF9iYWNrID0gZmFsc2VcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb24uc3RhdGUgJiYgdGhpcy5wcm9wcy5sb2NhdGlvbi5zdGF0ZS5zZWFyY2hfYmFjaykge1xuICAgICAgICAgICAgc2VhcmNoX2JhY2sgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VhcmNoX2JhY2spIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5nbygtMSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvc2VhcmNoP2Zyb209aGVhZGVyJnBhZ2VUeXBlPSR7dGhpcy5wcm9wcy5wYWdlVHlwZSA/IHRoaXMucHJvcHMucGFnZVR5cGUgOiAnJ31gKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb3BlbkxvY2F0aW9uKCkge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2xvY2F0aW9uc2VhcmNoJylcbiAgICB9XG5cbiAgICB0b2dnbGVMZWZ0TWVudSgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVMZWZ0TWVudUJhcigpXG4gICAgfVxuXG4gICAgbG9nb0NsaWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5ob21lUGFnZSAmJiAhISF0aGlzLnByb3BzLmNoYXRQYWdlKSB7XG4gICAgICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHByb2ZpbGVEYXRhID0gJydcbiAgICAgICAgaWYgKHRoaXMucHJvcHMucHJvZmlsZXMgJiYgdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZSkge1xuICAgICAgICAgICAgcHJvZmlsZURhdGEgPSB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGVdXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3R5bGVzID0ge31cbiAgICAgICAgLy8gaWYgKHRoaXMucHJvcHMuaG9tZVBhZ2UpIHtcbiAgICAgICAgLy8gICAgIHN0eWxlcyA9IHsgZGlzcGxheTogJ2Jsb2NrJyB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICBsZXQgbG9jYXRpb24gPSBcIkRlbGhpXCJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgbG9jYXRpb24gPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZm9ybWF0dGVkX2FkZHJlc3Muc2xpY2UoMCwgMTApXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaGVhZGVyQ2xhc3MgPSBcImRvYy1oZWFkZXIgaGVhZGVyLW92ZXJmbG93XCJcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5ob21lUGFnZSkge1xuICAgICAgICAgICAgaGVhZGVyQ2xhc3MgPSBcImRvYy1oZWFkZXJcIlxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLnNob3dTZWFyY2gpIHtcbiAgICAgICAgICAgIGhlYWRlckNsYXNzICs9IFwiIHJlbW92ZS1oZWFkZXItaGVpZ2h0XCJcbiAgICAgICAgfVxuICAgICAgICBsZXQgaGlkZVNlYXJjaCA9IGZhbHNlXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmhpc3RvcnkubG9jYXRpb24ucGF0aG5hbWUgPT0gJy9zZWFyY2gnKSB7XG4gICAgICAgICAgICBoaWRlU2VhcmNoID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNhcnRfY291bnQgPSAwXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNhcnQgJiYgdGhpcy5wcm9wcy5jYXJ0Lmxlbmd0aCkge1xuICAgICAgICAgICAgY2FydF9jb3VudCA9IHRoaXMucHJvcHMuY2FydC5sZW5ndGhcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aGVhZGVyIGlkPVwiaXNfaGVhZGVyXCIgIGNsYXNzTmFtZT1cIm5ldy1jb21tb24taGVhZGVyXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNob3dQYWNrYWdlU3RyaXAgfHwgIXRoaXMucHJvcHMuaXBkX2NoYXQgPyAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiA8SXBkQ2hhdFBhbmVsIHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7LyogdG9wIGhlYWRlciAqL31cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5ob21lUGFnZT8gICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW0tY2VudGVyIHRvcC1oZWFkZXJcIiBpZD1cImhlYWRlclRvcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkdyb3VwIGNvbXBhbnkgb2YgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbG9nby1wZy5wbmdcIn0gIGhlaWdodD1cIjE4cHhcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwibGlzdFZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8bGkgY2xhc3NOYW1lPVwidGV4dC1jYXBpdGFsaXplXCIgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICd2aXBDbGlja1N1YmhlYWRlcicsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3ZpcC1jbGljay1zdWJoZWFkZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsZWFyVmlwU2VsZWN0ZWRQbGFuKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKFwiL3ZpcC1nb2xkLWRldGFpbHM/aXNfZ29sZD10cnVlJnNvdXJjZT1kZXNrdG9wLXN1Ym1lbnUtZ29sZC1jbGlja2VkJmxlYWRfc291cmNlPURvY3ByaW1lXCIsICdvcGQnKX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2dvbGQtbGcucG5nXCJ9ICB3aWR0aD1cIjM1XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiPmRvY3ByaW1lIGdvbGQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGV4dC1jYXBpdGFsaXplXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oXCIvc2VhcmNoXCIsICdvcGQnKX19PmZpbmQgYSBkb2N0b3I8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0ZXh0LWNhcGl0YWxpemVcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbyhcIi9zZWFyY2hcIiwgJ2xhYicpfX0+bGFiIHRlc3Q8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0ZXh0LWNhcGl0YWxpemVcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbygnL2Z1bGwtYm9keS1jaGVja3VwLWhlYWx0aC1wYWNrYWdlcycpfX0+SGVhbHRoIHBhY2thZ2VzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGV4dC1jYXBpdGFsaXplXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oJy9vbmxpbmUtY29uc3VsdGF0aW9uJyl9fT5PbmxpbmUgY29uc3VsdGF0aW9uPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICB9ICAgICBcbiAgICAgICAgICAgICAgICB7LyogdG9wIGhlYWRlciAqL31cbiAgICAgICAgICAgICAgICB7LyogbmV3IG1haW4gaGVhZGVyICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSB7YCBjb250YWluZXItZmx1aWQgbWFpbi1oZWFkZXIgZC1mbGV4ICR7dGhpcy5wcm9wcy5uZXdfZml4ZWRfaGVhZGVyICYmIHRoaXMucHJvcHMubmV3X2ZpeGVkX2hlYWRlciA9PSAxPycnOidsdy1maXhlZC1oZWFkZXInfSAke3RoaXMucHJvcHMuaXNTZWFyY2hMaXN0Pydwa2dDb21wJzonJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgey8qIG9uIGNsaWNrIGxlZnQgbWVudSAqL31cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50b2dnbGVIYW1idXJnZXIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLW92ZXJsYXkgY2wtb3ZlcmxheVwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVMZWZ0TWVudSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0xlZnRNZW51ID8gPExlZnRNZW51IHsuLi50aGlzLnByb3BzfSB7Li4udGhpcy5zdGF0ZX0gdG9nZ2xlTGVmdE1lbnU9e3RoaXMudG9nZ2xlTGVmdE1lbnUuYmluZCh0aGlzKX0gLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgey8qIG9uIGNsaWNrIGxlZnQgbWVudSAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG0tMFwiIGlkPVwibHctaGVhZGVyXCIgc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyIG1haW4taGVhZGVyLWxlZnQtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIGhhbWJ1cmdlciBtZW51IGljb24gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWljb25cIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlTGVmdE1lbnUoKX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Jm5ic3A7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4mbmJzcDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPiZuYnNwOzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIGhhbWJ1cmdlciBtZW51IGljb24gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogaGVhZGVyIGxvZ28gY2xpY2sgZXZlbnQgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2JpLWljb25meFwiIGhyZWY9XCIvXCIgb25DbGljaz17KGUpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nb0NsaWNrKCkgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ub25lIGQtbGctYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIHN0eWxlPXt7dHJhbnNmb3JtOidzY2FsZSgxLjUpJ319IHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9tZWRpYS93ZWIvY3VzdG9tX2ltYWdlcy9MT0dPLTAxLnN2Z1wiIGFsdD1cImRvY3ByaW1lXCIgaGVpZ2h0PVwiMzZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93U0JJICYmIGRvY3VtZW50ICYmIHR5cGVvZiBkb2N1bWVudD09J29iamVjdCcgJiYgZG9jdW1lbnQubG9jYXRpb24gJiYgZG9jdW1lbnQubG9jYXRpb24uaG9zdCAmJiBkb2N1bWVudC5sb2NhdGlvbi5ob3N0LmluY2x1ZGVzKCdzYmknKT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaG9tZVBhZ2U/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1sZy1ub25lXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJzk1cHgnLCBtYXJnaW5SaWdodDogJzVweCcsIG1hcmdpbkxlZnQ6IDEwLCBtYXJnaW5Ub3A6IDEwIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL1NCSV9Mb2dvMS5wbmdcIn0gYWx0PVwiZG9jcHJpbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1sZy1ub25lXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGhlaWdodD1cIjUwXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiA2fX0gc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL21lZGlhL3dlYi9jdXN0b21faW1hZ2VzL0xPR08tMDEuc3ZnXCIgYWx0PVwiZG9jcHJpbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PGRpdiBjbGFzc05hbWU9XCJkLWxnLW5vbmVcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBoZWlnaHQ9XCI1MFwiIHN0eWxlPXt7bWFyZ2luTGVmdDogNn19IHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9tZWRpYS93ZWIvY3VzdG9tX2ltYWdlcy9MT0dPLTAxLnN2Z1wiIGFsdD1cImRvY3ByaW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBoZWFkZXIgbG9nbyBjbGljayBldmVudCAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbS1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWFpbi1oZWFkZXItcmlnaHQtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIGRlc2t0b3AgaGVhZGVyIHNlYXJjaCAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1zZWFyY2gtZnVsbC13aWR0aCBkLW5vbmUgZC1sZy1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVTZWFyY2ggPyBcIlwiIDogPGRpdiBjbGFzc05hbWU9XCJoZWFkLWxpbmtzIGhlZC1saW5rcy1zZWFyY2gtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VyY2gtbnctaW5wdXRzIG5ldy1ob21lLWZ1bGwtd2lkaHRcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5vcGVuU2VhcmNoLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc2VyYWNoLWlucHV0LWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlNlYXJjaCBEb2N0b3JzICZhbXA7IFRlc3RzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGlucHV0IGNsYXNzTmFtZT1cIm5ldy1zcmNoLWlucFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIERvY3RvcnMsIFRlc3RzLCAmIFByb2NlZHVyZXNcIiBpZD1cImRvYy1pbnB1dC1maWVsZFwiIC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJzE4cHgnIH19IGNsYXNzTmFtZT1cInNyY2gtaW5wLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3NoYXBlLXNyY2guc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub3BlbkxvY2F0aW9uLmJpbmQodGhpcyl9IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnMCcsIHRvcDogJzBweCcgfX0gY2xhc3NOYW1lPVwic3JjaC1pbnAtYnRuLWltZ1wiPjxpbWcgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc4cHgnLCB3aWR0aDogJzEwcHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL25ldy1sb2MtaWNvLnN2Z1wifSAvPiB7bG9jYXRpb259PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBkZXNrdG9wIGhlYWRlciBzZWFyY2ggKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogaGVhZGVyIGxpc3QgaXRlbXMgICAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtLWNlbnRlciBoZWFkZXItbGlzdC1pdGVtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWJsLXNlYXJjaC1ib3ggbm8tYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zaG93U2VhcmNoID8gXCJcIiA6IDxkaXYgY2xhc3NOYW1lPVwibWJsLWhlYWQtc2VhcmNoXCIgb25DbGljaz17dGhpcy5vcGVuU2VhcmNoLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPXsxOX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWFnZXMvc2VhcmNoLWRhcmsuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtLWNlbnRlclwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oJy9jb250YWN0JykgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dTQkkgJiYgZG9jdW1lbnQgJiYgdHlwZW9mIGRvY3VtZW50PT0nb2JqZWN0JyAmJiBkb2N1bWVudC5sb2NhdGlvbiAmJiBkb2N1bWVudC5sb2NhdGlvbi5ob3N0ICYmIGRvY3VtZW50LmxvY2F0aW9uLmhvc3QuaW5jbHVkZXMoJ3NiaScpP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGhlaWdodD1cIjI2cHhcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jb250YWN0LXVzLXNiaS5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxpbWcgaGVpZ2h0PVwiMjZweFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NvbnRhY3QtdXMuc3ZnXCJ9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ub25lIGQtc20tYmxvY2sgZC1sZy1ibG9ja1wiPmNvbnRhY3QgdXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLW5vbmUgZC1zbS1ibG9jayBkLWxnLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbS1jZW50ZXIgaGVhZC1kcm9wZG93bnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd1NCSSAmJiBkb2N1bWVudCAmJiB0eXBlb2YgZG9jdW1lbnQ9PSdvYmplY3QnICYmIGRvY3VtZW50LmxvY2F0aW9uICYmIGRvY3VtZW50LmxvY2F0aW9uLmhvc3QgJiYgZG9jdW1lbnQubG9jYXRpb24uaG9zdC5pbmNsdWRlcygnc2JpJyk/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaGVpZ2h0PVwiMTlweFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ZpbGUtZm9ybWF0LXNiaS5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxpbWcgaGVpZ2h0PVwiMTlweFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ZpbGUtZm9ybWF0LnN2Z1wifSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtbm9uZSBkLXNtLWJsb2NrIGQtbGctYmxvY2tcIj5yZXNvdXJjZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBoZWlnaHQ9XCIxMFwiIGNsYXNzTmFtZT1cImRvd24tY2FyZXQtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2FyZXQtZG93bi5zdmdcIn0gYWx0PVwiY2FyZXQtZG93blwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3Qtc3ViLW1lbnUgZC1ub25lIGQtc20tYmxvY2sgZC1sZy1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9hbGwtbWVkaWNpbmVzXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL2FsbC1tZWRpY2luZXNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+TWVkaWNpbmVzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGk+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj5BcnRpY2xlczwvYT48L2xpPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvYWxsLWRpc2Vhc2VzXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL2FsbC1kaXNlYXNlc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5EaXNlYXNlczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi90ZXN0c1wiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi90ZXN0c1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5UZXN0czwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9pcGQtcHJvY2VkdXJlc1wiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9pcGQtcHJvY2VkdXJlc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5Qcm9jZWR1cmVzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2hvc3BpdGFsc1wiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9ob3NwaXRhbHNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+SG9zcGl0YWxzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVEYXRhID8gPGEgc3R5bGU9e3twb3NpdGlvbjoncmVsYXRpdmUnfX0gY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2NhcnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbS1jZW50ZXIgbS0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93U0JJICYmIGRvY3VtZW50ICYmIHR5cGVvZiBkb2N1bWVudD09J29iamVjdCcgJiYgZG9jdW1lbnQubG9jYXRpb24gJiYgZG9jdW1lbnQubG9jYXRpb24uaG9zdCAmJiBkb2N1bWVudC5sb2NhdGlvbi5ob3N0LmluY2x1ZGVzKCdzYmknKT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGhlaWdodD1cIjE5cHhcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jYXJ0X3NiaS5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PGltZyBoZWlnaHQ9XCIxOXB4XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2FydC5zdmdcIn0gLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnRfY291bnQgPiAwID8gPHNwYW4gY2xhc3NOYW1lPVwiY2FydC1jb3VudC1ub3RpZnlcIj57Y2FydF9jb3VudH08L3NwYW4+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtbm9uZSBkLXNtLWJsb2NrIGQtbGctYmxvY2tcIj5jYXJ0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLW5vbmUgZC1zbS1ibG9jayBkLWxnLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbS1jZW50ZXIgbm8tYm9yZGVyXCIgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJ319IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9ub3RpZmljYXRpb25zJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd1NCSSAmJiBkb2N1bWVudCAmJiB0eXBlb2YgZG9jdW1lbnQ9PSdvYmplY3QnICYmIGRvY3VtZW50LmxvY2F0aW9uICYmIGRvY3VtZW50LmxvY2F0aW9uLmhvc3QgJiYgZG9jdW1lbnQubG9jYXRpb24uaG9zdC5pbmNsdWRlcygnc2JpJyk/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaGVpZ2h0PVwiMTlweFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL25vdGlmaWNhdGlvbi1zYmkuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8aW1nIGhlaWdodD1cIjE5cHhcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9ub3RpZmljYXRpb24uc3ZnXCJ9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ub25lIGQtc20tYmxvY2sgZC1sZy1ibG9ja1wiPm5vdGlmaWNhdGlvbnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm5ld05vdGlmaWNhdGlvbiA+IDAgPyA8c3BhbiBjbGFzc05hbWU9XCJjYXJ0LWNvdW50LW5vdGlmeSBtLTBcIiBzdHlsZT17e2xlZnQ6IC04LCB0b3A6IC00fX0+e3RoaXMucHJvcHMubmV3Tm90aWZpY2F0aW9ufTwvc3Bhbj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZmlsZURhdGEgPyA8YSBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbS1jZW50ZXIgbm8tYm9yZGVyIHVzZXItbmFtZS1jb2xcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdXNlcicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJ1c2VyLW5hbWUtaW5pdGlhbHMgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbS1jZW50ZXJcIj57cHJvZmlsZURhdGEubmFtZVswXX08L3NwYW4+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5pdGlhbHNQaWN0dXJlIG5hbWU9e3Byb2ZpbGVEYXRhLm5hbWV9IGNsYXNzTmFtZT1cInVzZXItbmFtZS1pbml0aWFscyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0luaXRpYWxzUGljdHVyZT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtbm9uZSBkLXNtLWJsb2NrIGQtbGctYmxvY2sgdXNlci1uYW1lLXNwYW5cIj57cHJvZmlsZURhdGEubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGEgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyIG5vLWJvcmRlclwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhvbWVQYWdlID8gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy91c2VyP3JlZj1ob21lJykgOiB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3VzZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dTQkkgJiYgZG9jdW1lbnQgJiYgdHlwZW9mIGRvY3VtZW50PT0nb2JqZWN0JyAmJiBkb2N1bWVudC5sb2NhdGlvbiAmJiBkb2N1bWVudC5sb2NhdGlvbi5ob3N0ICYmIGRvY3VtZW50LmxvY2F0aW9uLmhvc3QuaW5jbHVkZXMoJ3NiaScpP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBoZWlnaHQ9XCIyNHB4XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbG9naW4tc2JpLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxpbWcgaGVpZ2h0PVwiMjRweFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2xvZ2luLnN2Z1wifSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ub25lIGQtc20tYmxvY2sgZC1sZy1ibG9jayB1c2VyLW5hbWUtc3BhblwiPmxvZ2luPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBoZWFkZXIgbGlzdCBpdGVtcyAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnN1bW1hcnlQYWdlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvcm9uYVZpcnVzXCI+RHVlIHRvIENvcm9uYXZpcnVzIG91dGJyZWFrLCBvdXIgdGVhbSBpcyB3b3JraW5nIGZyb20gaG9tZS4gT3VyIHRvbGwgZnJlZSBubyB3aWxsIGJlIHVucmVzcG9uc2l2ZS4gUGxlYXNlIGFjY2VwdCBhcG9sb2dpZXMgZm9yIHRoZSBwb3NzaWJsZSBkZWxheSBpbiBzZXJ2aWNlLiBGb3IgYW55IHVyZ2VudCBxdWVyaWVzLCBwbGVhc2Ugd3JpdGUgdG8gdXMgIDxhIGhyZWY9XCJtYWlsdG86Y3VzdG9tZXJjYXJlQGRvY3ByaW1lLmNvbVwiPmN1c3RvbWVyY2FyZUBkb2NwcmltZS5jb208L2E+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBtb2JpbGUgdmlldyBzZWFyY2ggYm94ICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBtYmwtc2VhcmNoLWJveCBkLWxnLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNob3dTZWFyY2ggPyA8ZGl2IGNsYXNzTmFtZT1cInNlcmNoLW53LWlucHV0cyBzZWFyY2gtaW5wdXQtZm9yLW1vYmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMub3BlblNlYXJjaC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXNlcmFjaC1pbnB1dC1kaXZcIiBzdHlsZT17e21hcmdpbkJvdHRvbTogMTAsIG1hcmdpblRvcDogMTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TZWFyY2ggRG9jdG9ycyAmYW1wOyBUZXN0czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbnB1dCBjbGFzc05hbWU9XCJuZXctc3JjaC1pbnAgaG9tZS10b3AtaW5wdXRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBEb2N0b3JzICZhbXA7IFRlc3RzXCIgaWQ9XCJkb2MtaW5wdXQtZmllbGRcIiAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcxM3B4JyB9fSBjbGFzc05hbWU9XCJzcmNoLWlucC1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zaGFwZS1zcmNoLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9wZW5Mb2NhdGlvbi5iaW5kKHRoaXMpfSBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzAnLCB0b3A6ICcwcHgnIH19IGNsYXNzTmFtZT1cInNyY2gtaW5wLWJ0bi1pbWdcIj48aW1nIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnOHB4Jywgd2lkdGg6ICcxMHB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9uZXctbG9jLWljby5zdmdcIn0gLz57bG9jYXRpb259PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5uZXdfZml4ZWRfaGVhZGVyICYmIHRoaXMucHJvcHMubmV3X2ZpeGVkX2hlYWRlciA9PSAxP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Byb3cgbGlzdGluZy12aWV3LWhlYWRlciB2aXNpYmxlLWNvbCAke3RoaXMucHJvcHMuaXNTZWFyY2hMaXN0Pydwa2dDb21wJzonJ31gfSBpZD1cImxpc3RpbmctaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMSBwci0wIG1lbnUtaWNvblwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVMZWZ0TWVudSgpfX0gc3R5bGU9e3twYWRkaW5nTGVmdDogMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Jm5ic3A7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4mbmJzcDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm0tMFwiPiZuYnNwOzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTEgZC1sZy1ub25lIHByLTAgcGwtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNob3dTZWFyY2ggPyA8ZGl2IGNsYXNzTmFtZT1cInNlcmNoLW53LWlucHV0cyBuZXctbGlzdGluZy1zZWFyY2ggc2VhcmNoLWlucHV0LWZvci1tb2JpbGVcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLm9wZW5TZWFyY2guYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXNlcmFjaC1pbnB1dC1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlNlYXJjaCBEb2N0b3JzICZhbXA7IFRlc3RzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJzEzcHgnIH19IGNsYXNzTmFtZT1cInNyY2gtaW5wLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3NoYXBlLXNyY2guc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9wZW5Mb2NhdGlvbi5iaW5kKHRoaXMpfSBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzAnLCB0b3A6ICcwcHgnIH19IGNsYXNzTmFtZT1cInNyY2gtaW5wLWJ0bi1pbWdcIj48aW1nIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnOHB4Jywgd2lkdGg6ICcxMHB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9uZXctbG9jLWljby5zdmdcIn0gLz57bG9jYXRpb259PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA6Jyd9XG4gICAgICAgICAgICAgICAgICAgIHsvKiBtb2JpbGUgdmlldyBzZWFyY2ggYm94IGVuZHMgKi99XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiBuZXcgbWFpbiBoZWFkZXIgKi99XG4gICAgICAgICAgICAgICAgey8qIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ob21lUGFnZT9cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29yb25hVmlydXNcIj5EdWUgdG8gQ29yb25hdmlydXMgb3V0YnJlYWssIG91ciB0ZWFtIGlzIHdvcmtpbmcgZnJvbSBob21lLiBPdXIgdG9sbCBmcmVlIG5vIHdpbGwgYmUgdW5yZXNwb25zaXZlLiBQbGVhc2UgYWNjZXB0IGFwb2xvZ2llcyBmb3IgdGhlIHBvc3NpYmxlIGRlbGF5IGluIHNlcnZpY2UuIEZvciBhbnkgdXJnZW50IHF1ZXJpZXMsIHBsZWFzZSB3cml0ZSB0byB1cyAgPGEgaHJlZj1cIm1haWx0bzpjdXN0b21lcmNhcmVAZG9jcHJpbWUuY29tXCI+Y3VzdG9tZXJjYXJlQGRvY3ByaW1lLmNvbTwvYT48L3A+XG4gICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgIH0gKi99XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlc2t0b3BQcm9maWxlSGVhZGVyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGxvZ291dCwgZmV0Y2hOb3RpZmljYXRpb25zLCBnZXRVc2VyUHJvZmlsZSwgdG9nZ2xlTGVmdE1lbnVCYXIsIGdldElzQ2FyZURldGFpbHMsIHNlbGVjdFNlYXJjaFR5cGUsIGxvYWRPUERJbnN1cmFuY2UsIGlGcmFtZVN0YXRlLCBjbGVhclZpcFNlbGVjdGVkUGxhbiB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgRGVza3RvcFByb2ZpbGVIZWFkZXJWaWV3IGZyb20gJy4vQ29tbW9uSGVhZGVyLmpzJ1xuXG5jbGFzcyBEZXNrdG9wUHJvZmlsZUhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcm91dGVyOiAoKSA9PiBudWxsXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmIChTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmZldGNoTm90aWZpY2F0aW9ucygpXG4gICAgICAgICAgICAvKiBGZWN0Y2ggdXNlciBwcm9maWxlIGlmIGxvZ2dlZCBpbiBhbmQgdXNlciBwcm9maWxlIGlzIG5vdCBsb2FkZWQgaS5lKHB1YmxpYyBwYWdlcykgKi9cbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldFVzZXJQcm9maWxlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vdGhpcy5wcm9wcy5nZXRJc0NhcmVEZXRhaWxzKCkgLy8gZ2V0IHVzZXIgc3Vic2NyaXB0aW9uIHBsYW4gZGV0YWlsc1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMucHJvcHMubG9hZE9QREluc3VyYW5jZSh0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RGVza3RvcFByb2ZpbGVIZWFkZXJWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG5cbiAgICBsZXQgeyBwcm9maWxlcywgc2VsZWN0ZWRQcm9maWxlLCBkZWZhdWx0UHJvZmlsZSwgbm90aWZpY2F0aW9ucywgbmV3Tm90aWZpY2F0aW9uLCBjdXJyZW50Um9vbUlkLCBjYXJ0LCB1bnJlYWRfY291bnQsIHRvZ2dsZUxlZnRNZW51LCBpc1VzZXJDYXJlZCwgbGVmdE1lbnVPcGVuRmlyc3RUaW1lLCBpcGRfY2hhdCwgaUZyYW1lVXJscywgcmVmZXJfYW1vdW50IH0gPSBzdGF0ZS5VU0VSXG5cbiAgICBsZXQge1xuICAgICAgICBzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICBjb21tb25fc2V0dGluZ3NcbiAgICB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX09QRFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvZmlsZXMsIHNlbGVjdGVkUHJvZmlsZSwgZGVmYXVsdFByb2ZpbGUsIG5vdGlmaWNhdGlvbnMsIG5ld05vdGlmaWNhdGlvbiwgc2VsZWN0ZWRMb2NhdGlvbiwgY3VycmVudFJvb21JZCwgY2FydCwgdW5yZWFkX2NvdW50LCB0b2dnbGVMZWZ0TWVudSwgaXNVc2VyQ2FyZWQsIGxlZnRNZW51T3BlbkZpcnN0VGltZSwgaXBkX2NoYXQsY29tbW9uX3NldHRpbmdzLCBpRnJhbWVVcmxzLCByZWZlcl9hbW91bnRcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxvZ291dDogKGNoYXRSb29tSWQpID0+IGRpc3BhdGNoKGxvZ291dChjaGF0Um9vbUlkKSksXG4gICAgICAgIGZldGNoTm90aWZpY2F0aW9uczogKGNiKSA9PiBkaXNwYXRjaChmZXRjaE5vdGlmaWNhdGlvbnMoY2IpKSxcbiAgICAgICAgZ2V0VXNlclByb2ZpbGU6ICgpID0+IGRpc3BhdGNoKGdldFVzZXJQcm9maWxlKCkpLFxuICAgICAgICBnZXRJc0NhcmVEZXRhaWxzOiAoKSA9PiBkaXNwYXRjaChnZXRJc0NhcmVEZXRhaWxzKCkpLFxuICAgICAgICB0b2dnbGVMZWZ0TWVudUJhcjogKHRvZ2dsZSwgZGVmYXVsdFZhbCkgPT4gZGlzcGF0Y2godG9nZ2xlTGVmdE1lbnVCYXIodG9nZ2xlLCBkZWZhdWx0VmFsKSksXG4gICAgICAgIHNlbGVjdFNlYXJjaFR5cGU6ICh0eXBlKSA9PiBkaXNwYXRjaChzZWxlY3RTZWFyY2hUeXBlKHR5cGUpKSxcbiAgICAgICAgbG9hZE9QREluc3VyYW5jZTogKGNpdHkpID0+IGRpc3BhdGNoKGxvYWRPUERJbnN1cmFuY2UoY2l0eSkpLFxuICAgICAgICBpRnJhbWVTdGF0ZTogKHVybCwgZW1wdHlVcmxzLCBsZWZ0TWVudUNsaWNrKSA9PiBkaXNwYXRjaChpRnJhbWVTdGF0ZSh1cmwsIGVtcHR5VXJscywgbGVmdE1lbnVDbGljaykpLFxuICAgICAgICBjbGVhclZpcFNlbGVjdGVkUGxhbjooKSA9PiBkaXNwYXRjaChjbGVhclZpcFNlbGVjdGVkUGxhbigpKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aFJvdXRlcihEZXNrdG9wUHJvZmlsZUhlYWRlcikpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEluaXRpYWxzUGljdHVyZSBmcm9tICcuLi9pbml0aWFsc1BpY3R1cmUnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3N0b3JhZ2UnO1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IHsgcmVsYXRpdmUgfSBmcm9tICdwYXRoJztcblxuY2xhc3MgTGVmdE1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRvZ2dsZVByb2ZpbGU6IGZhbHNlLFxuICAgICAgdG9nZ2xlQXJ0aWNsZXM6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgaXNEb2NDYXJlKCkge1xuICAgIHRoaXMucHJvcHMudG9nZ2xlTGVmdE1lbnUoKVxuICAgIGlmICh0aGlzLnByb3BzLmlzVXNlckNhcmVkICYmIHRoaXMucHJvcHMuaXNVc2VyQ2FyZWQudXNlcl9wbGFuX2lkKSB7XG4gICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ByaW1lL3N1Y2Nlc3M/dXNlcl9wbGFuPScgKyB0aGlzLnByb3BzLmlzVXNlckNhcmVkLnVzZXJfcGxhbl9pZClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9wcmltZS9wbGFucycpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB1c2VyID0gbnVsbFxuICAgIGxldCB0aHVtYm5haWwgPSBudWxsXG4gICAgbGV0IG1lbWJlckNsYXNzID0gJ2Zsb2F0LXJpZ2h0IG1lbU5ldydcbiAgICBsZXQgbWVtU3RhdHVzID0gJ05ldydcbiAgICBsZXQgdXNlcl9pbnN1cmFuY2Vfc3RhdHVzID0gZmFsc2VcbiAgICBsZXQgdXNlcl9pbnNfc3RhdHVzXG4gICAgbGV0IGlzX3VzZXJfZ29sZF9tZW1iZXIgPSBmYWxzZSBcbiAgICBsZXQgZ29sZF91c2VyX3Byb2ZpbGUgPSB7fVxuICAgIGxldCBpc19jYXJlID0gZmFsc2VcbiAgICBsZXQgY2FyZV91c2VyX3Byb2ZpbGUgPXt9XG4gICAgaWYgKHRoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGUgJiYgdGhpcy5wcm9wcy5wcm9maWxlcyAmJiB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGVdKSB7XG5cbiAgICAgIHVzZXIgPSB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGVdXG4gICAgICB0aHVtYm5haWwgPSB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGVdLnByb2ZpbGVfaW1hZ2UgfHwgbnVsbFxuICAgICAgdXNlcl9pbnN1cmFuY2Vfc3RhdHVzID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXS5pc19pbnN1cmVkXG4gICAgICB1c2VyX2luc19zdGF0dXMgPSB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGVdLmluc3VyYW5jZV9zdGF0dXNcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuaXNVc2VyQ2FyZWQgJiYgdGhpcy5wcm9wcy5pc1VzZXJDYXJlZC5oYXNfYWN0aXZlX3BsYW4pIHtcbiAgICAgIG1lbWJlckNsYXNzID0gJ2Zsb2F0LXJpZ2h0IG1lbUFjdCdcbiAgICAgIG1lbVN0YXR1cyA9ICdBY3RpdmUnXG4gICAgfVxuXG4gICAgaWYodGhpcy5wcm9wcy5wcm9maWxlcyAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnByb2ZpbGVzKS5sZW5ndGgpe1xuICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5wcm9maWxlcykubWFwKGZ1bmN0aW9uKFtrZXksIHZhbHVlXSkgeyBcbiAgICAgICAgICAgICAgaWYodmFsdWUuaXNfdmlwX2dvbGRfbWVtYmVyKXtcbiAgICAgICAgICAgICAgICAgIGdvbGRfdXNlcl9wcm9maWxlID0gdmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZih2YWx1ZS5pc19jYXJlKXtcbiAgICAgICAgICAgICAgICAgIGNhcmVfdXNlcl9wcm9maWxlID0gdmFsdWVcbiAgICAgICAgICAgICAgfSBcbiAgICAgICAgICB9KVxuICAgICAgICAgaWYoZ29sZF91c2VyX3Byb2ZpbGUgJiYgT2JqZWN0LmtleXMoZ29sZF91c2VyX3Byb2ZpbGUpLmxlbmd0aCl7XG4gICAgICAgICAgICBpc191c2VyX2dvbGRfbWVtYmVyID0gdHJ1ZVxuICAgICAgICAgICAgbWVtYmVyQ2xhc3MgPSAnZmxvYXQtcmlnaHQgbWVtQWN0J1xuICAgICAgICAgICAgbWVtU3RhdHVzID0gJ0FjdGl2ZSdcbiAgICAgICAgIH1cbiAgICAgICAgIGlmKGNhcmVfdXNlcl9wcm9maWxlICYmIE9iamVjdC5rZXlzKGNhcmVfdXNlcl9wcm9maWxlKS5sZW5ndGgpe1xuICAgICAgICAgICAgaXNfY2FyZSA9IHRydWVcbiAgICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbC14cy0xMiBjb2wtZC13aWR0aCAke3RoaXMucHJvcHMudG9nZ2xlSGFtYnVyZ2VyID8gJ2NvbC1kLXdpZHRoLWVhc2UnIDogJyd9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtbWVudVwiPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sZWZ0TWVudU9wZW5GaXJzdFRpbWUgP1xuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHVzZXIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYm94XCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZUxlZnRNZW51KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC91c2VyYClcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3Byb2ZpbGUtcGhvdG8uanBlZ1wiIGFsdD1cInByb2ZpbGUtcGhvdG9cIiBjbGFzc05hbWU9XCJ1c2VyLXByb2ZpbGUtaW1nXCIgLz4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluaXRpYWxzUGljdHVyZSBuYW1lPXt1c2VyLm5hbWV9IGhhc19pbWFnZT17ISF0aHVtYm5haWx9IGNsYXNzTmFtZT1cImluaXRpYWxzUGljdHVyZS1kcCBsZWZ0SW50aWFzcGljXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGh1bWJuYWlsfSBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nLXJvdW5kXCIgYWx0PXt1c2VyLm5hbWV9IHRpdGxlPXt1c2VyLm5hbWV9IHN0eWxlPXt7IHdpZHRoOiAnNjBweCcsIGhlaWdodDogJzYwcHgnLCBmbG9hdDogJ2xlZnQnLCBjb2xvcjogJyNmZmZmZmYnIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Jbml0aWFsc1BpY3R1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlci1uYW1lXCI+e3VzZXIubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmlnaHQtYXJyb3cgci1hcnJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogMCB9fT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYm94XCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZUxlZnRNZW51KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy91c2VyJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3Byb2ZpbGUtcGhvdG8uanBlZ1wiIGFsdD1cInByb2ZpbGUtcGhvdG9cIiBjbGFzc05hbWU9XCJ1c2VyLXByb2ZpbGUtaW1nXCIgLz4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlci1uYW1lXCI+TG9naW48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJpZ2h0LWFycm93IHItYXJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDAgfX0+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3AtbGlzdC1tZW51IGxpc3RfMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKjxsaT48YSBocmVmPVwiI1wiPjxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvaW5zdXJhbmNlLnBuZ1wiIGFsdD1cIlwiIGNsYXNzTmFtZT1cIlwiIC8+SW5zdXJhbmNlPC9hPiA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuLWJ1eS1ub3dcIj5CdXkgTm93PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENPTkZJRy5FTkFCTEVfVklQX0dPTEQgJiYgaXNfdXNlcl9nb2xkX21lbWJlcj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cInAtcmVsYXRpdmVcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdNb2JpbGVMZWZ0TWVudUdvbGRDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbW9iaWxlLWxlZnRtZW51LWdvbGQtY2xpY2tlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsZWFyVmlwU2VsZWN0ZWRQbGFuKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZUxlZnRNZW51KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ZpcC1nb2xkLWRldGFpbHM/aXNfZ29sZD10cnVlJnNvdXJjZT1tb2JpbGUtbGVmdG1lbnUtZ29sZC1jbGlja2VkJmxlYWRfc291cmNlPURvY3ByaW1lJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gaHJlZj1cIiNcIj48aW1nIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB0b3A6ICcxNXB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dvbGQtc20ucG5nJ30gYWx0PVwiXCIgY2xhc3NOYW1lPVwidmlwLWxnLXNuZ1wiIC8+RG9jcHJpbWUgR29sZCB7aXNfdXNlcl9nb2xkX21lbWJlcj88c3BhbiBjbGFzc05hbWU9e21lbWJlckNsYXNzfT57bWVtU3RhdHVzfTwvc3Bhbj46Jyd9PHNwYW4gY2xhc3NOYW1lPVwidmlwLW5ldy1sZnQtdGFnXCI+TWVtYmVyc2hpcCBmb3IgZXhjbHVzaXZlIGRpc2NvdW50czwvc3Bhbj48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDT05GSUcuRU5BQkxFX1ZJUF9DTFVCICYmIHVzZXIgJiYgdXNlci5pc192aXBfbWVtYmVyICYmICF1c2VyLmlzX3ZpcF9nb2xkX21lbWJlcj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cInAtcmVsYXRpdmVcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdNb2JpbGVMZWZ0TWVudVZpcENsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdtb2JpbGUtbGVmdG1lbnUtdmlwLWNsaWNrZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGVhclZpcFNlbGVjdGVkUGxhbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVMZWZ0TWVudSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy92aXAtY2x1Yi1kZXRhaWxzP3NvdXJjZT1tb2JpbGUtbGVmdG1lbnUtdmlwLWNsaWNrZWQmbGVhZF9zb3VyY2U9RG9jcHJpbWUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBocmVmPVwiI1wiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXBsb2cucG5nJ30gYWx0PVwiXCIgY2xhc3NOYW1lPVwidmlwLWxnLXNuZ1wiIC8+RG9jcHJpbWUgVklQIDxzcGFuIGNsYXNzTmFtZT1cInZpcC1uZXctbGZ0LXRhZ1wiPlNhdmUgNzAlIG9uIHlvdXIgZmFtaWx5J3MgbWVkaWNhbCBiaWxsczwvc3Bhbj48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDT05GSUcuRU5BQkxFX0lOU1VSQU5DRSAmJiAodXNlcl9pbnNfc3RhdHVzID09IDEgfHwgdXNlcl9pbnNfc3RhdHVzID09IDUpP1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ01vYmlsZUxlZnRNZW51SW5zdXJhbmNlQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ21vYmlsZS1sZWZ0bWVudS1pbnN1cmFuY2UtY2xpY2tlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlTGVmdE1lbnUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaW5zdXJhbmNlL2luc3VyYW5jZS1wbGFucz9zb3VyY2U9bW9iaWxlLWxlZnRtZW51LWluc3VyYW5jZS1jbGlja2VkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gaHJlZj1cIiNcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2lucy5wbmdcIn0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiXCIgLz5PUEQgSW5zdXJhbmNlPHNwYW4gY2xhc3NOYW1lPXt1c2VyX2luc19zdGF0dXMgPT0gMSB8fCB1c2VyX2luc19zdGF0dXMgPT0gNSB8fCB1c2VyX2luc19zdGF0dXMgPT0gNCB8fCB1c2VyX2luc19zdGF0dXMgPT0gNyA/ICdmbG9hdC1yaWdodCBtZW1BY3QnIDogJ2Zsb2F0LXJpZ2h0IG1lbU5ldyd9Pnt1c2VyX2luc19zdGF0dXMgPT0gMSB8fCB1c2VyX2luc19zdGF0dXMgPT0gNSB8fCB1c2VyX2luc19zdGF0dXMgPT0gNCB8fCB1c2VyX2luc19zdGF0dXMgPT0gNz8gJ0FjdGl2ZScgOiAnTmV3J308L3NwYW4+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNfY2FyZT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5pc0RvY0NhcmUuYmluZCh0aGlzKX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wcmltZWNhZS5wbmdcIn0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiXCIgLz5Eb2NwcmltZSBDYXJlIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IG1lbUFjdFwiPkFjdGl2ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgey8qIDxsaT48YSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZUxlZnRNZW51KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdXNlci9vbmxpbmVQcmVzY3JpcHRpb25zJylcbiAgICAgICAgICAgICAgICAgICAgICB9fSBocmVmPVwiI1wiPjxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL2NwL2Fzc2V0cy9pbWcvY3VzdG9tZXItaWNvbnMvb25sbnByZXMuc3ZnXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiXCIgLz5NeSBPbmxpbmUgUHJlc2NyaXB0aW9uczwvYT48L2xpPiovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlTGVmdE1lbnUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy91c2VyL2FwcG9pbnRtZW50cycpXG4gICAgICAgICAgICAgICAgICAgICAgfX0gaHJlZj1cIiNcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1hZ2VzL215LWFwcG9pbnRtZW50LnBuZ1wifSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJcIiAvPk15IEFwcG9pbnRtZW50czwvYT48L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxsaT48YSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMZWZ0TWVudU9yZGVyTWVkaWNpbmVDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbGVmdG1lbnUtb3JkZXItbWVkaWNpbmUtY2xpY2tlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZUxlZnRNZW51KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaUZyYW1lU3RhdGUoJycsIGZhbHNlLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9vcmRlci1tZWRpY2luZScpXG4gICAgICAgICAgICAgICAgICAgICAgfX0gaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL21lZGljaW5lLW9yZGVyMS5wbmdcIn0gYWx0PVwiXCIgY2xhc3NOYW1lPVwicGFkLUIwXCIgLz5PcmRlciBNZWRpY2luZXM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT4gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVMZWZ0TWVudSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3dhbGxldCcpXG4gICAgICAgICAgICAgICAgICAgICAgfX0gaHJlZj1cIiNcIj48aW1nIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9jcC9hc3NldHMvaW1nL2N1c3RvbWVyLWljb25zL3JwLWljby5wbmdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJcIiAvPk15IFdhbGxldDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxzcGFuIGNsYXNzTmFtZT1cIndhbGxldC1hbW50XCI+PGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9ydXBlZXMtaWNvbi5wbmdcIiAvPjIxMjwvc3Bhbj4qL31cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgey8qPGxpID48YSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZUxlZnRNZW51KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvcmVmZXJyYWwnKVxuICAgICAgICAgICAgICAgICAgICAgIH19IGhyZWY9XCIjXCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltYWdlcy9yZWZlci1hbmQtZWFybi5wbmdcIn0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiXCIgLz5SZWZlciA8c3BhbiBjbGFzc05hbWU9XCJyZWZlci1ib251cyBmbG9hdC1yaWdodFwiPkVhcm4g4oK5IHt0aGlzLnByb3BzLnJlZmVyX2Ftb3VudH08L3NwYW4+PC9hPjwvbGk+Ki99XG5cbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9zLXJlbFwiPjxhIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlTGVmdE1lbnUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9ub3RpZmljYXRpb25zJylcbiAgICAgICAgICAgICAgICAgICAgICB9fSBocmVmPVwiI1wiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWFnZXMvbm90aWZpY2F0aW9uLnBuZ1wifSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJcIiAvPk5vdGlmaWNhdGlvbnM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudW5yZWFkX2NvdW50ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbi1jb3VudCBsZnQtbm90aWZ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC14c1wiPnt0aGlzLnByb3BzLnVucmVhZF9jb3VudH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wLWxpc3QtbWVudSBsaXN0XzJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvZ2dsZVByb2ZpbGU6ICF0aGlzLnN0YXRlLnRvZ2dsZVByb2ZpbGUgfSlcbiAgICAgICAgICAgICAgICAgICAgICB9fSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIlwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWFnZXMvbXlwcm9maWxlLnBuZ1wifSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJwYWQtQjBcIiAvPk15IFByb2ZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudG9nZ2xlUHJvZmlsZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ1cC1kb3duLWFyd1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1hZ2VzL3VwLWFycm93LnBuZ1wifSBhbHQ9XCJkb2NwcmltZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8aW1nIGNsYXNzTmFtZT1cInVwLWRvd24tYXJ3XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWFnZXMvZG93bi1hcnJvdy5wbmdcIn0gYWx0PVwiZG9jcHJpbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT48L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50b2dnbGVQcm9maWxlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVMZWZ0TWVudSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3VzZXIvZmFtaWx5JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInBhZC1CMCBteS1mbVwiPk15IEZhbWlseTwvYT48L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlTGVmdE1lbnUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy91c2VyL2FkZHJlc3MnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGhyZWY9XCIjXCI+TXkgQWRkcmVzczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wLWxpc3QtbWVudSBsaXN0XzJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvZ2dsZUFydGljbGVzOiAhdGhpcy5zdGF0ZS50b2dnbGVBcnRpY2xlcyB9KVxuICAgICAgICAgICAgICAgICAgICAgIH19IGhyZWY9XCIjXCIgPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWFnZXMvYXJ0aWNsZXMucG5nXCJ9IGFsdD1cIlwiIGNsYXNzTmFtZT1cIlwiIC8+UmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRvZ2dsZUFydGljbGVzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInVwLWRvd24tYXJ3XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWFnZXMvdXAtYXJyb3cucG5nXCJ9IGFsdD1cImRvY3ByaW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxpbWcgY2xhc3NOYW1lPVwidXAtZG93bi1hcndcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltYWdlcy9kb3duLWFycm93LnBuZ1wifSBhbHQ9XCJkb2NwcmltZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50b2dnbGVBcnRpY2xlcyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpID48YSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVMZWZ0TWVudSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9hbGwtZGlzZWFzZXNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInBhZC1CMFwiPkRpc2Vhc2VzPC9hPjwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgPjxhIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZUxlZnRNZW51KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL2FsbC1tZWRpY2luZXNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInBhZC1CMFwiPk1lZGljaW5lczwvYT48L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpID48YSBjbGFzc05hbWU9XCJwYWQtQjBcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVMZWZ0TWVudSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi90ZXN0c1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGhyZWY9XCIjXCI+VGVzdHM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgPjxhIGNsYXNzTmFtZT1cInBhZC1CMFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZUxlZnRNZW51KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL2lwZC1wcm9jZWR1cmVzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gaHJlZj1cIiNcIj5Qcm9jZWR1cmVzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpID48YSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVMZWZ0TWVudSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9ob3NwaXRhbHNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBocmVmPVwiI1wiPkhvc3BpdGFsczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wLWxpc3QtbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCk9PnRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdXNlci9hZGRyZXNzJyl9PjxhIGhyZWY9XCIjXCI+PGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9yYXRlLXVzLnBuZ1wiIGFsdD1cIlwiIGNsYXNzTmFtZT1cIlwiIC8+UmF0ZSB1czwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD4qL31cblxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmluYWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKjxsaT48YSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZUxlZnRNZW51KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9hYm91dFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gaHJlZj1cIiNcIj5BYm91dCBVczwvYT48L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZUxlZnRNZW51KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9ob3dpdHdvcmtzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBocmVmPVwiI1wiPlRlcm1zIGFuZCBDb25kaXRpb25zPC9hPjwvbGk+Ki99XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgU1RPUkFHRS5jaGVja0F1dGgoKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsb2dvdXRcIiA+PGEgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZUxlZnRNZW51KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxvZ291dCh0aGlzLnByb3BzLmN1cnJlbnRSb29tSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19IGhyZWY9XCIjXCI+TG9nb3V0PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogPGxpIGNsYXNzTmFtZT1cImxvZ291dFwiPjxhIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVMZWZ0TWVudSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy91c2VyJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gaHJlZj1cIiNcIj5Mb2dpbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDogPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBMZWZ0TWVudSJdLCJzb3VyY2VSb290IjoiIn0=