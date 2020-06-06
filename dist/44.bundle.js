(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "./dev/js/components/commons/ratingsProfileView/EditReviewPopUp.js":
/*!*************************************************************************!*\
  !*** ./dev/js/components/commons/ratingsProfileView/EditReviewPopUp.js ***!
  \*************************************************************************/
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import StarView from './StarView.js'

var EditReviewPopUp = function (_React$Component) {
    _inherits(EditReviewPopUp, _React$Component);

    function EditReviewPopUp(props) {
        _classCallCheck(this, EditReviewPopUp);

        var _this = _possibleConstructorReturn(this, (EditReviewPopUp.__proto__ || Object.getPrototypeOf(EditReviewPopUp)).call(this, props));

        _this.state = {
            data: null,
            selectedRating: 0,
            compliments: [],
            review_field: _this.props.details.review,
            selected_compliments: _this.props.details.compliments_list ? _this.props.details.compliments_list : []
        };
        return _this;
    }

    _createClass(EditReviewPopUp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ data: this.props.details });
            this.setState({ selectedRating: this.props.selected_rating });
            this.setState({ compliments: this.props.compliments });
        }
    }, {
        key: 'selectRating',
        value: function selectRating(x) {
            this.setState({ selectedRating: x });
            this.setState({ selected_compliments: [] });
        }
    }, {
        key: 'declineRating',
        value: function declineRating() {
            this.props.cancel();
        }
    }, {
        key: 'handleReviewChange',
        value: function handleReviewChange(e) {
            this.setState({ review_field: e.target.value });
        }
    }, {
        key: 'handleComplimentChange',
        value: function handleComplimentChange(id) {
            var compliments = this.state.selected_compliments;
            if (compliments.includes(id)) {
                var index = compliments.indexOf(id);
                compliments.splice(index, 1);
            } else {
                compliments.push(id);
            }
            this.setState({ selected_compliments: compliments });
        }
    }, {
        key: 'submitRating',
        value: function submitRating() {
            var post_data = { 'id': this.state.data.id, 'rating': this.state.selectedRating, 'review': this.state.review_field, 'compliment': this.state.selected_compliments, 'appointment_id': this.state.data.id };
            this.setState({ data: null });
            this.props.submit(post_data);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (typeof this.state.data != "undefined" && this.state.data != null && this.state.data.id) {
                return _react2.default.createElement(
                    'div',
                    { className: 'raiting-popup' },
                    _react2.default.createElement(
                        'div',
                        { className: 'home-rating-card review-popup' },
                        _react2.default.createElement(
                            'div',
                            { className: 'rate-card-header' },
                            'Edit your Feedback',
                            _react2.default.createElement(
                                'span',
                                null,
                                _react2.default.createElement('img', { onClick: this.declineRating.bind(this), src: "/assets" + "/img/customer-icons/rt-close.svg", className: 'img-fluid' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'rate-card-doc-dtls' },
                            _react2.default.createElement('img', { src: this.state.data.icon, className: 'img-fluid img-round ' }),
                            _react2.default.createElement(
                                'div',
                                { className: 'rate-doc-dtl rate-doc' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'rt-doc-nm doc-name' },
                                    this.state.data.entity_name
                                ),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    this.state.data.address
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'rate-star-icon' },
                            [1, 2, 3, 4, 5].map(function (x, i) {
                                return _react2.default.createElement('img', { key: i, onClick: _this2.selectRating.bind(_this2, x), className: 'img-fluid', src: "/assets/img/customer-icons/" + (_this2.state.selectedRating > 0 && _this2.state.selectedRating >= x ? "" : "un") + "selected-star.svg" });
                            })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'rate-compliment-section' },
                            _react2.default.createElement(
                                'p',
                                { className: 'cmplmnt-para complemnt' },
                                'Give your compliment'
                            ),
                            _react2.default.createElement(
                                'ul',
                                { className: 'compliment-lising' },
                                this.state.compliments.map(function (comp) {
                                    if (comp.type == _this2.state.data.appointment_type && _this2.state.selectedRating == comp.rating_level) {
                                        var check = _this2.state.selected_compliments.includes(comp.id);

                                        return _react2.default.createElement(
                                            'li',
                                            { key: comp.id },
                                            _react2.default.createElement(
                                                'label',
                                                { className: 'ck-bx' },
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'rate-feed-text' },
                                                    comp.message
                                                ),
                                                _react2.default.createElement('input', { type: 'checkbox', defaultChecked: check, onChange: _this2.handleComplimentChange.bind(_this2, comp.id) }),
                                                _react2.default.createElement('span', { className: 'checkmark' })
                                            )
                                        );
                                    }
                                })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'rate-submit-cmnnt-box' },
                                _react2.default.createElement('textarea', { maxLength: '5000', placeholder: 'Leave a review', rows: '2', defaultValue: this.state.review_field, onChange: this.handleReviewChange.bind(this) }),
                                _react2.default.createElement(
                                    'button',
                                    { className: 'rate-submit-btn', onClick: this.submitRating.bind(this) },
                                    'Update'
                                )
                            )
                        )
                    )
                );
            }
            return "";
        }
    }]);

    return EditReviewPopUp;
}(_react2.default.Component);

exports.default = EditReviewPopUp;

/***/ }),

/***/ "./dev/js/components/commons/ratingsProfileView/MyReviewCard.js":
/*!**********************************************************************!*\
  !*** ./dev/js/components/commons/ratingsProfileView/MyReviewCard.js ***!
  \**********************************************************************/
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

var _SharePopUp = __webpack_require__(/*! ./SharePopUp.js */ "./dev/js/components/commons/ratingsProfileView/SharePopUp.js");

var _SharePopUp2 = _interopRequireDefault(_SharePopUp);

var _EditReviewPopUp = __webpack_require__(/*! ./EditReviewPopUp.js */ "./dev/js/components/commons/ratingsProfileView/EditReviewPopUp.js");

var _EditReviewPopUp2 = _interopRequireDefault(_EditReviewPopUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyReviewCard = function (_React$Component) {
    _inherits(MyReviewCard, _React$Component);

    function MyReviewCard(props) {
        _classCallCheck(this, MyReviewCard);

        var _this = _possibleConstructorReturn(this, (MyReviewCard.__proto__ || Object.getPrototypeOf(MyReviewCard)).call(this, props));

        _this.thanYouButton = function () {
            _this.setState({ toggle_share: false });
        };

        _this.state = {
            sms_id: _this.props.sms_id ? _this.props.sms_id : null,
            data: _this.props.details,
            selectedRating: _this.props.details ? _this.props.details.ratings : 0,
            type: 1,
            toggle_share: false,
            compliments: []
        };
        return _this;
    }

    _createClass(MyReviewCard, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ data: this.props.details });
            this.setState({ compliments: this.props.comp });
            this.setState({ sms_id: this.props.sms_id });
            if (this.state.sms_id !== null && this.props.details.id == this.state.sms_id) {
                this.setState({ type: 0 });
            }
        }
    }, {
        key: 'selectRating',
        value: function selectRating(x) {
            this.setState({ selectedRating: x });
        }
    }, {
        key: 'editRating',
        value: function editRating(id) {
            this.setState({ type: 0 });
        }
    }, {
        key: 'cancelUpdate',
        value: function cancelUpdate() {
            this.setState({
                type: 1, selectedRating: this.props.details ? this.props.details.ratings : 0, review_field: this.props.details.review

            });
        }
    }, {
        key: 'sharePopUp',
        value: function sharePopUp() {
            this.setState({ toggle_share: true });
        }
    }, {
        key: 'submitRating',
        value: function submitRating(post_data) {
            var _this2 = this;

            this.props.updateAppointmentRating(post_data, function (err, data) {
                if (!err && data) {
                    _this2.setState({ type: 1, data: data });
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'widget mrb-15', key: this.state.data.id },
                    _react2.default.createElement(
                        'div',
                        { className: 'widget-content' },
                        _react2.default.createElement(
                            'div',
                            { className: 'first-sec' },
                            _react2.default.createElement('img', { src: this.state.data.icon, className: 'img-fluid' }),
                            _react2.default.createElement(
                                'div',
                                { className: 'c-date' },
                                this.state.data.date
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'last-sec' },
                            _react2.default.createElement(
                                'div',
                                { className: 'clnc-nam' },
                                this.state.data.entity_name
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'clnc-add' },
                                this.state.data.address
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'rating-sec' },
                            _react2.default.createElement(
                                'span',
                                { className: 'rating-img' },
                                _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + "/img/customer-icons/satr-wt.svg" }),
                                ' ',
                                this.state.data.ratings,
                                ' '
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'clnc-nam' },
                                this.state.data.compliments
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'clnc-nam pad-t6 rate-mg-top' },
                                this.state.data.review
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'btn-div' },
                            _react2.default.createElement(
                                'ul',
                                null,
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: 'javascript:void(0);', onClick: this.editRating.bind(this) },
                                        'Edit'
                                    )
                                ),
                                this.state.data.ratings > 3 ? _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: 'javascript:void(0);', onClick: this.sharePopUp.bind(this) },
                                        'Share'
                                    )
                                ) : ""
                            )
                        )
                    )
                ),
                this.state.type == 0 ? _react2.default.createElement(_EditReviewPopUp2.default, _extends({}, this.props, { details: this.state.data, submit: this.submitRating.bind(this), selected_rating: this.state.data.ratings, compliments: this.state.compliments, cancel: this.cancelUpdate.bind(this) })) : "",
                this.state.toggle_share ? _react2.default.createElement(_SharePopUp2.default, _extends({}, this.props, { submit: this.thanYouButton, selectedRating: this.state.selectedRating, details: this.state.data })) : ""
            );
        }
    }]);

    return MyReviewCard;
}(_react2.default.Component);

exports.default = MyReviewCard;

/***/ }),

/***/ "./dev/js/components/commons/ratingsProfileView/SharePopUp.js":
/*!********************************************************************!*\
  !*** ./dev/js/components/commons/ratingsProfileView/SharePopUp.js ***!
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

var _reactShare = __webpack_require__(/*! react-share */ "./node_modules/react-share/es/index.js");

var _index = __webpack_require__(/*! ../../../actions/index.js */ "./dev/js/actions/index.js");

var _index2 = __webpack_require__(/*! ../../../helpers/storage/index.js */ "./dev/js/helpers/storage/index.js");

var _index3 = _interopRequireDefault(_index2);

var _reactCopyToClipboard = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _index4 = __webpack_require__(/*! ../../../config/index.js */ "./dev/js/config/index.js");

var _index5 = _interopRequireDefault(_index4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SharePopUp = function (_React$Component) {
    _inherits(SharePopUp, _React$Component);

    function SharePopUp(props) {
        _classCallCheck(this, SharePopUp);

        var _this = _possibleConstructorReturn(this, (SharePopUp.__proto__ || Object.getPrototypeOf(SharePopUp)).call(this, props));

        _this.state = {
            referralCode: ''
        };
        return _this;
    }

    _createClass(SharePopUp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (_index3.default.checkAuth()) {
                (0, _index.fetchReferralCode)()().then(function (res) {
                    if (res && res.code) {
                        _this2.setState({ referralCode: res.code });
                    }
                }).catch(function (e) {});
            }
            this.getLink();
        }
    }, {
        key: 'gaTracking',
        value: function gaTracking(btnType, event) {
            var actionVal = void 0;
            var eventVal = void 0;
            if (btnType == 'fb') {
                actionVal = 'BookingRatingFbShare';
                eventVal = 'booking-rating-fb-share';
            } else if (btnType == 'twitter') {
                actionVal = 'BookingRatingTwitterShare';
                eventVal = 'booking-rating-twitter-share';
            } else if (btnType == 'whtsapp') {
                actionVal = 'BookingRatingWhatsAppShare';
                eventVal = 'booking-rating-whatsapp-share';
            } else {
                actionVal = 'BookingRatingEmailShare';
                eventVal = 'booking-rating-email-share';
            }
            var data = {
                'Category': 'ConsumerApp', 'Action': actionVal, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': eventVal
            };
            _gtm2.default.sendEvent({ data: data });
        }
    }, {
        key: 'getLink',
        value: function getLink() {
            return _index5.default.API_BASE_URL + '/login?referral=' + this.state.referralCode;
        }
    }, {
        key: 'getWhatsappText',
        value: function getWhatsappText(data, url) {
            var msg = data.ratings + ' out of 5 stars\n' + data.compliments + '\n\n"' + data.review + '"\n' + url;
            return window.encodeURIComponent(msg);
        }
    }, {
        key: 'render',
        value: function render() {
            var profileData = '';
            if (this.props.profiles && this.props.selectedProfile) {
                profileData = this.props.profiles[this.props.selectedProfile];
            }
            var name = "";
            if (profileData && profileData.name) {
                name = profileData.name;
            }
            var social_message = void 0;
            var url = void 0;
            if (this.props.details && this.props.details.appointment_type == 2) {
                url = "https://docprime.com/opd/doctor/" + this.props.details.entity_id;
            } else {
                url = "https://docprime.com/lab/" + this.props.details.entity_id;
            }
            social_message = this.props.details.ratings + ' out of 5 stars \n         ' + this.props.details.compliments + ' \n         \n         "' + this.props.details.review + '"';
            return _react2.default.createElement(
                'div',
                { className: 'raiting-popup' },
                _react2.default.createElement(
                    'div',
                    { style: { backgroundColor: '#fff', borderRadius: 5, position: 'relative' } },
                    _react2.default.createElement(
                        'div',
                        { className: 'typ-close', onClick: this.props.submit },
                        _react2.default.createElement('img', { src: "/assets" + '/img/customer-icons/close-black.svg' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'home-rating-card', style: { paddingBottom: 0 } },
                        _react2.default.createElement(
                            'p',
                            { className: 'thnks-content' },
                            'Your feedback matters!'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'thanks-sub-content mrb-10' },
                            'Please share with your friends'
                        ),
                        this.props.selectedRating == 4 || this.props.selectedRating == 5 ? _react2.default.createElement(
                            'div',
                            { className: 'social-ico-styling d-flex' },
                            _react2.default.createElement(
                                'div',
                                { className: 'facebookIcon-styling', onClick: this.gaTracking.bind(this, 'fb') },
                                _react2.default.createElement(
                                    _reactShare.FacebookShareButton,
                                    {
                                        url: url,
                                        quote: social_message,
                                        className: 'button' },
                                    _react2.default.createElement(_reactShare.FacebookIcon, {
                                        size: 32,
                                        round: false })
                                ),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Facebook'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'twitterIcon-styling', onClick: this.gaTracking.bind(this, 'twitter') },
                                _react2.default.createElement(
                                    _reactShare.TwitterShareButton,
                                    {
                                        url: url,
                                        title: social_message,
                                        className: 'button' },
                                    _react2.default.createElement(_reactShare.TwitterIcon, {
                                        size: 32,
                                        round: false })
                                ),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Twitter'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'whtsappIcon-styling', onClick: this.gaTracking.bind(this, 'whtsapp') },
                                _react2.default.createElement(
                                    'a',
                                    { className: 'whtsAppico', href: "whatsapp://send?text=" + this.getWhatsappText(this.props.details, url) },
                                    _react2.default.createElement('img', { src: "/assets" + "/img/wa-logo.svg" }),
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        'Whatsapp'
                                    )
                                )
                            )
                        ) : ""
                    )
                )
            );
        }
    }]);

    return SharePopUp;
}(_react2.default.Component);

exports.default = SharePopUp;

/***/ }),

/***/ "./dev/js/components/commons/userProfile/userReviews/UserReview.js":
/*!*************************************************************************!*\
  !*** ./dev/js/components/commons/userProfile/userReviews/UserReview.js ***!
  \*************************************************************************/
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

var _DesktopProfileHeader = __webpack_require__(/*! ../../DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _LeftBar = __webpack_require__(/*! ../../LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _footer = __webpack_require__(/*! ../../Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _MyReviewCard = __webpack_require__(/*! ../../ratingsProfileView/MyReviewCard.js */ "./dev/js/components/commons/ratingsProfileView/MyReviewCard.js");

var _MyReviewCard2 = _interopRequireDefault(_MyReviewCard);

var _staticDisclaimer = __webpack_require__(/*! ../../Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var UserReview = function (_React$Component) {
    _inherits(UserReview, _React$Component);

    function UserReview(props) {
        _classCallCheck(this, UserReview);

        var _this = _possibleConstructorReturn(this, (UserReview.__proto__ || Object.getPrototypeOf(UserReview)).call(this, props));

        _this.performLoginOps = function () {
            _this.props.getRatingCompliments(function (err, compliments) {
                // get user ratings
                if (!err && compliments) {
                    _this.setState({ compliments: compliments });
                }
            });
            _this.props.getUserReviews(function (err, data) {
                if (!err && data) {
                    _this.setState({ data: data });
                }
            });
        };

        _this.state = {
            data: null,
            compliments: [],
            sms_id: null,
            footerData: null
        };
        return _this;
    }

    _createClass(UserReview, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (window) {
                window.scrollTo(0, 0);
            }
            var parsed = queryString.parse(this.props.location.search);
            var sms_token = parsed.token ? parsed.token : null;
            var sms_id = parsed.id ? parsed.id : null;
            var user_id = parsed.user_id ? parsed.user_id : null;

            if (sms_token) {
                this.props.OTTLogin(sms_token, user_id).then(function (order_id) {
                    _this2.setState({ sms_id: sms_id });
                    _this2.performLoginOps();
                });
            } else {
                this.performLoginOps();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { className: 'profile-body-wrap' },
                _react2.default.createElement(_DesktopProfileHeader2.default, { showSearch: true }),
                _react2.default.createElement(
                    'section',
                    { className: 'container parent-section book-appointment-section' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row main-row parent-section-row' },
                        _react2.default.createElement(_LeftBar2.default, null),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12 col-md-7 col-lg-7 center-column' },
                            _react2.default.createElement(
                                'div',
                                { className: 'container-fluid' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-12' },
                                        _react2.default.createElement(
                                            'h2',
                                            { className: 'rev-txt' },
                                            'Your Reviews'
                                        ),
                                        this.state.data ? this.state.data.map(function (rating) {
                                            return _react2.default.createElement(_MyReviewCard2.default, _extends({}, _this3.props, { sms_id: _this3.state.sms_id, details: rating, comp: _this3.state.compliments, key: rating.id }));
                                        }) : ""
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(_RightBar2.default, null)
                    )
                ),
                _react2.default.createElement(_staticDisclaimer2.default, null),
                _react2.default.createElement(_footer2.default, { footerData: this.state.footerData })
            );
        }
    }]);

    return UserReview;
}(_react2.default.Component);

UserReview.contextTypes = {
    router: function router() {
        return null;
    }
};
exports.default = UserReview;

/***/ }),

/***/ "./dev/js/components/commons/userProfile/userReviews/index.js":
/*!********************************************************************!*\
  !*** ./dev/js/components/commons/userProfile/userReviews/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UserReview = __webpack_require__(/*! ./UserReview */ "./dev/js/components/commons/userProfile/userReviews/UserReview.js");

var _UserReview2 = _interopRequireDefault(_UserReview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _UserReview2.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9FZGl0UmV2aWV3UG9wVXAuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9yYXRpbmdzUHJvZmlsZVZpZXcvTXlSZXZpZXdDYXJkLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvcmF0aW5nc1Byb2ZpbGVWaWV3L1NoYXJlUG9wVXAuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy91c2VyUHJvZmlsZS91c2VyUmV2aWV3cy9Vc2VyUmV2aWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvdXNlclByb2ZpbGUvdXNlclJldmlld3MvaW5kZXguanMiXSwibmFtZXMiOlsiRWRpdFJldmlld1BvcFVwIiwicHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJzZWxlY3RlZFJhdGluZyIsImNvbXBsaW1lbnRzIiwicmV2aWV3X2ZpZWxkIiwiZGV0YWlscyIsInJldmlldyIsInNlbGVjdGVkX2NvbXBsaW1lbnRzIiwiY29tcGxpbWVudHNfbGlzdCIsInNldFN0YXRlIiwic2VsZWN0ZWRfcmF0aW5nIiwieCIsImNhbmNlbCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlkIiwiaW5jbHVkZXMiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJwdXNoIiwicG9zdF9kYXRhIiwic3VibWl0IiwiZGVjbGluZVJhdGluZyIsImJpbmQiLCJBU1NFVFNfQkFTRV9VUkwiLCJpY29uIiwiZW50aXR5X25hbWUiLCJhZGRyZXNzIiwibWFwIiwiaSIsInNlbGVjdFJhdGluZyIsImNvbXAiLCJ0eXBlIiwiYXBwb2ludG1lbnRfdHlwZSIsInJhdGluZ19sZXZlbCIsImNoZWNrIiwibWVzc2FnZSIsImhhbmRsZUNvbXBsaW1lbnRDaGFuZ2UiLCJoYW5kbGVSZXZpZXdDaGFuZ2UiLCJzdWJtaXRSYXRpbmciLCJSZWFjdCIsIkNvbXBvbmVudCIsIk15UmV2aWV3Q2FyZCIsInRoYW5Zb3VCdXR0b24iLCJ0b2dnbGVfc2hhcmUiLCJzbXNfaWQiLCJyYXRpbmdzIiwidXBkYXRlQXBwb2ludG1lbnRSYXRpbmciLCJlcnIiLCJkYXRlIiwiZWRpdFJhdGluZyIsInNoYXJlUG9wVXAiLCJjYW5jZWxVcGRhdGUiLCJTaGFyZVBvcFVwIiwicmVmZXJyYWxDb2RlIiwiU1RPUkFHRSIsImNoZWNrQXV0aCIsInRoZW4iLCJyZXMiLCJjb2RlIiwiY2F0Y2giLCJnZXRMaW5rIiwiYnRuVHlwZSIsImV2ZW50IiwiYWN0aW9uVmFsIiwiZXZlbnRWYWwiLCJHVE0iLCJnZXRVc2VySWQiLCJzZW5kRXZlbnQiLCJDT05GSUciLCJBUElfQkFTRV9VUkwiLCJ1cmwiLCJtc2ciLCJ3aW5kb3ciLCJlbmNvZGVVUklDb21wb25lbnQiLCJwcm9maWxlRGF0YSIsInByb2ZpbGVzIiwic2VsZWN0ZWRQcm9maWxlIiwibmFtZSIsInNvY2lhbF9tZXNzYWdlIiwiZW50aXR5X2lkIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwicG9zaXRpb24iLCJwYWRkaW5nQm90dG9tIiwiZ2FUcmFja2luZyIsImdldFdoYXRzYXBwVGV4dCIsInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIlVzZXJSZXZpZXciLCJwZXJmb3JtTG9naW5PcHMiLCJnZXRSYXRpbmdDb21wbGltZW50cyIsImdldFVzZXJSZXZpZXdzIiwiZm9vdGVyRGF0YSIsInNjcm9sbFRvIiwicGFyc2VkIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsInNtc190b2tlbiIsInRva2VuIiwidXNlcl9pZCIsIk9UVExvZ2luIiwib3JkZXJfaWQiLCJyYXRpbmciLCJjb250ZXh0VHlwZXMiLCJyb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBOztJQUVNQSxlOzs7QUFDRiw2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LFdBQVUsU0FBZDtBQUFBO0FBQUEseUNBREo7QUFFSyw2Q0FBSzVGLEtBQUwsQ0FBV0MsSUFBWCxHQUFrQixLQUFLRCxLQUFMLENBQVdDLElBQVgsQ0FBZ0I2QixHQUFoQixDQUFvQjtBQUFBLG1EQUFVLDhCQUFDLHNCQUFELGVBQWtCLE9BQUsvQixLQUF2QixJQUE4QixRQUFRLE9BQUtDLEtBQUwsQ0FBVytDLE1BQWpELEVBQXlELFNBQVMyRCxNQUFsRSxFQUEwRSxNQUFNLE9BQUsxRyxLQUFMLENBQVdHLFdBQTNGLEVBQXdHLEtBQUt1RyxPQUFPMUYsRUFBcEgsSUFBVjtBQUFBLHlDQUFwQixDQUFsQixHQUE4SztBQUZuTDtBQURKO0FBREo7QUFESix5QkFGSjtBQVlJLHNEQUFDLGtCQUFEO0FBWko7QUFESixpQkFGSjtBQWtCSSw4Q0FBQywwQkFBRCxPQWxCSjtBQW1CSSw4Q0FBQyxnQkFBRCxJQUFRLFlBQVksS0FBS2hCLEtBQUwsQ0FBVytGLFVBQS9CO0FBbkJKLGFBREo7QUF1Qkg7Ozs7RUF4RW9CckQsZ0JBQU1DLFM7O0FBQXpCZ0QsVSxDQVdLZ0IsWSxHQUFlO0FBQ2xCQyxZQUFRO0FBQUEsZUFBTSxJQUFOO0FBQUE7QUFEVSxDO2tCQWlFWGpCLFU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGZjs7Ozs7O2tCQUVlQSxvQiIsImZpbGUiOiI0NC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG4vLyBpbXBvcnQgU3RhclZpZXcgZnJvbSAnLi9TdGFyVmlldy5qcydcblxuY2xhc3MgRWRpdFJldmlld1BvcFVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgICAgc2VsZWN0ZWRSYXRpbmc6IDAsXG4gICAgICAgICAgICBjb21wbGltZW50czogW10sXG4gICAgICAgICAgICByZXZpZXdfZmllbGQ6IHRoaXMucHJvcHMuZGV0YWlscy5yZXZpZXcsXG4gICAgICAgICAgICBzZWxlY3RlZF9jb21wbGltZW50czogdGhpcy5wcm9wcy5kZXRhaWxzLmNvbXBsaW1lbnRzX2xpc3QgPyB0aGlzLnByb3BzLmRldGFpbHMuY29tcGxpbWVudHNfbGlzdCA6IFtdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IHRoaXMucHJvcHMuZGV0YWlscyB9KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRSYXRpbmc6IHRoaXMucHJvcHMuc2VsZWN0ZWRfcmF0aW5nIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21wbGltZW50czogdGhpcy5wcm9wcy5jb21wbGltZW50cyB9KVxuICAgIH1cblxuICAgIHNlbGVjdFJhdGluZyh4KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFJhdGluZzogeCB9KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRfY29tcGxpbWVudHM6IFtdIH0pXG4gICAgfVxuXG4gICAgZGVjbGluZVJhdGluZygpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5jYW5jZWwoKVxuICAgIH1cblxuICAgIGhhbmRsZVJldmlld0NoYW5nZShlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXZpZXdfZmllbGQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUNvbXBsaW1lbnRDaGFuZ2UoaWQpIHtcbiAgICAgICAgbGV0IGNvbXBsaW1lbnRzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZF9jb21wbGltZW50cztcbiAgICAgICAgaWYgKGNvbXBsaW1lbnRzLmluY2x1ZGVzKGlkKSkge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gY29tcGxpbWVudHMuaW5kZXhPZihpZCk7XG4gICAgICAgICAgICBjb21wbGltZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29tcGxpbWVudHMucHVzaChpZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkX2NvbXBsaW1lbnRzOiBjb21wbGltZW50cyB9KTtcbiAgICB9XG5cbiAgICBzdWJtaXRSYXRpbmcoKSB7XG4gICAgICAgIGxldCBwb3N0X2RhdGEgPSB7ICdpZCc6IHRoaXMuc3RhdGUuZGF0YS5pZCwgJ3JhdGluZyc6IHRoaXMuc3RhdGUuc2VsZWN0ZWRSYXRpbmcsICdyZXZpZXcnOiB0aGlzLnN0YXRlLnJldmlld19maWVsZCwgJ2NvbXBsaW1lbnQnOiB0aGlzLnN0YXRlLnNlbGVjdGVkX2NvbXBsaW1lbnRzLCAnYXBwb2ludG1lbnRfaWQnOiB0aGlzLnN0YXRlLmRhdGEuaWQgfTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IG51bGwgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5zdWJtaXQocG9zdF9kYXRhKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBpZiAodHlwZW9mICh0aGlzLnN0YXRlLmRhdGEpICE9IFwidW5kZWZpbmVkXCIgJiYgdGhpcy5zdGF0ZS5kYXRhICE9IG51bGwgJiYgdGhpcy5zdGF0ZS5kYXRhLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFpdGluZy1wb3B1cFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtcmF0aW5nLWNhcmQgcmV2aWV3LXBvcHVwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGUtY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0IHlvdXIgRmVlZGJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGltZyBvbkNsaWNrPXt0aGlzLmRlY2xpbmVSYXRpbmcuYmluZCh0aGlzKX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcnQtY2xvc2Uuc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGUtY2FyZC1kb2MtZHRsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnN0YXRlLmRhdGEuaWNvbn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZy1yb3VuZCBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0ZS1kb2MtZHRsIHJhdGUtZG9jXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJ0LWRvYy1ubSBkb2MtbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5lbnRpdHlfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy5zdGF0ZS5kYXRhLmFkZHJlc3N9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGUtc3Rhci1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbMSwgMiwgMywgNCwgNV0ubWFwKCh4LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGltZyBrZXk9e2l9IG9uQ2xpY2s9e3RoaXMuc2VsZWN0UmF0aW5nLmJpbmQodGhpcywgeCl9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17XCIvYXNzZXRzL2ltZy9jdXN0b21lci1pY29ucy9cIiArICh0aGlzLnN0YXRlLnNlbGVjdGVkUmF0aW5nID4gMCAmJiB0aGlzLnN0YXRlLnNlbGVjdGVkUmF0aW5nID49IHggPyBcIlwiIDogXCJ1blwiKSArIFwic2VsZWN0ZWQtc3Rhci5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0ZS1jb21wbGltZW50LXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjbXBsbW50LXBhcmEgY29tcGxlbW50XCI+R2l2ZSB5b3VyIGNvbXBsaW1lbnQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvbXBsaW1lbnQtbGlzaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvbXBsaW1lbnRzLm1hcChjb21wID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wLnR5cGUgPT0gdGhpcy5zdGF0ZS5kYXRhLmFwcG9pbnRtZW50X3R5cGUgJiYgdGhpcy5zdGF0ZS5zZWxlY3RlZFJhdGluZyA9PSBjb21wLnJhdGluZ19sZXZlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGVjayA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRfY29tcGxpbWVudHMuaW5jbHVkZXMoY29tcC5pZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17Y29tcC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjay1ieFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmF0ZS1mZWVkLXRleHRcIj57Y29tcC5tZXNzYWdlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBkZWZhdWx0Q2hlY2tlZD17Y2hlY2t9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNvbXBsaW1lbnRDaGFuZ2UuYmluZCh0aGlzLCBjb21wLmlkKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0ZS1zdWJtaXQtY21ubnQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBtYXhMZW5ndGg9XCI1MDAwXCIgcGxhY2Vob2xkZXI9XCJMZWF2ZSBhIHJldmlld1wiIHJvd3M9XCIyXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnJldmlld19maWVsZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlUmV2aWV3Q2hhbmdlLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmF0ZS1zdWJtaXQtYnRuXCIgb25DbGljaz17dGhpcy5zdWJtaXRSYXRpbmcuYmluZCh0aGlzKX0+VXBkYXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXCJcIik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0UmV2aWV3UG9wVXA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNoYXJlUG9wVXAgZnJvbSAnLi9TaGFyZVBvcFVwLmpzJztcbmltcG9ydCBFZGl0UmV2aWV3UG9wVXAgZnJvbSAnLi9FZGl0UmV2aWV3UG9wVXAuanMnO1xuXG5jbGFzcyBNeVJldmlld0NhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc21zX2lkOiB0aGlzLnByb3BzLnNtc19pZCA/IHRoaXMucHJvcHMuc21zX2lkIDogbnVsbCxcbiAgICAgICAgICAgIGRhdGE6IHRoaXMucHJvcHMuZGV0YWlscyxcbiAgICAgICAgICAgIHNlbGVjdGVkUmF0aW5nOiB0aGlzLnByb3BzLmRldGFpbHMgPyB0aGlzLnByb3BzLmRldGFpbHMucmF0aW5ncyA6IDAsXG4gICAgICAgICAgICB0eXBlOiAxLFxuICAgICAgICAgICAgdG9nZ2xlX3NoYXJlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbXBsaW1lbnRzOiBbXSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogdGhpcy5wcm9wcy5kZXRhaWxzIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21wbGltZW50czogdGhpcy5wcm9wcy5jb21wIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbXNfaWQ6IHRoaXMucHJvcHMuc21zX2lkIH0pXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNtc19pZCAhPT0gbnVsbCAmJiAodGhpcy5wcm9wcy5kZXRhaWxzLmlkID09IHRoaXMuc3RhdGUuc21zX2lkKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHR5cGU6IDAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdFJhdGluZyh4KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFJhdGluZzogeCB9KVxuICAgIH1cblxuICAgIGVkaXRSYXRpbmcoaWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHR5cGU6IDAgfSlcbiAgICB9XG5cbiAgICBjYW5jZWxVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdHlwZTogMSwgc2VsZWN0ZWRSYXRpbmc6IHRoaXMucHJvcHMuZGV0YWlscyA/IHRoaXMucHJvcHMuZGV0YWlscy5yYXRpbmdzIDogMCwgcmV2aWV3X2ZpZWxkOiB0aGlzLnByb3BzLmRldGFpbHMucmV2aWV3LFxuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhhbllvdUJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvZ2dsZV9zaGFyZTogZmFsc2UgfSlcbiAgICB9XG5cbiAgICBzaGFyZVBvcFVwKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdG9nZ2xlX3NoYXJlOiB0cnVlIH0pXG4gICAgfVxuXG4gICAgc3VibWl0UmF0aW5nKHBvc3RfZGF0YSkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZUFwcG9pbnRtZW50UmF0aW5nKHBvc3RfZGF0YSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlcnIgJiYgZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0eXBlOiAxLCBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDwgZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTVcIiBrZXk9e3RoaXMuc3RhdGUuZGF0YS5pZH0gPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpcnN0LXNlY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnN0YXRlLmRhdGEuaWNvbn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImMtZGF0ZVwiPnt0aGlzLnN0YXRlLmRhdGEuZGF0ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXN0LXNlY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xuYy1uYW1cIj57dGhpcy5zdGF0ZS5kYXRhLmVudGl0eV9uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xuYy1hZGRcIj57dGhpcy5zdGF0ZS5kYXRhLmFkZHJlc3N9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLXNlY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJhdGluZy1pbWdcIj48aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3NhdHItd3Quc3ZnXCJ9IC8+IHt0aGlzLnN0YXRlLmRhdGEucmF0aW5nc30gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNsbmMtbmFtXCI+e3RoaXMuc3RhdGUuZGF0YS5jb21wbGltZW50c308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbG5jLW5hbSBwYWQtdDYgcmF0ZS1tZy10b3BcIj57dGhpcy5zdGF0ZS5kYXRhLnJldmlld308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBvbkNsaWNrPXt0aGlzLmVkaXRSYXRpbmcuYmluZCh0aGlzKX0+RWRpdDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhLnJhdGluZ3MgPiAzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIG9uQ2xpY2s9e3RoaXMuc2hhcmVQb3BVcC5iaW5kKHRoaXMpfT5TaGFyZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnR5cGUgPT0gMCA/IDxFZGl0UmV2aWV3UG9wVXAgey4uLnRoaXMucHJvcHN9IGRldGFpbHM9e3RoaXMuc3RhdGUuZGF0YX0gc3VibWl0PXt0aGlzLnN1Ym1pdFJhdGluZy5iaW5kKHRoaXMpfSBzZWxlY3RlZF9yYXRpbmc9e3RoaXMuc3RhdGUuZGF0YS5yYXRpbmdzfSBjb21wbGltZW50cz17dGhpcy5zdGF0ZS5jb21wbGltZW50c30gY2FuY2VsPXt0aGlzLmNhbmNlbFVwZGF0ZS5iaW5kKHRoaXMpfSAvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRvZ2dsZV9zaGFyZSA/IDxTaGFyZVBvcFVwIHsuLi50aGlzLnByb3BzfSBzdWJtaXQ9e3RoaXMudGhhbllvdUJ1dHRvbn0gc2VsZWN0ZWRSYXRpbmc9e3RoaXMuc3RhdGUuc2VsZWN0ZWRSYXRpbmd9IGRldGFpbHM9e3RoaXMuc3RhdGUuZGF0YX0gLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE15UmV2aWV3Q2FyZFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcyc7XG5pbXBvcnQgeyBGYWNlYm9va1NoYXJlQnV0dG9uLCBUd2l0dGVyU2hhcmVCdXR0b24sIEZhY2Vib29rSWNvbiwgVHdpdHRlckljb24sIEVtYWlsU2hhcmVCdXR0b24sIEVtYWlsSWNvbiB9IGZyb20gJ3JlYWN0LXNoYXJlJztcbmltcG9ydCB7IGZldGNoUmVmZXJyYWxDb2RlIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9pbmRleC5qcyc7XG5pbXBvcnQgU1RPUkFHRSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBDb3B5VG9DbGlwYm9hcmQgfSBmcm9tICdyZWFjdC1jb3B5LXRvLWNsaXBib2FyZCc7XG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2Jhcic7XG5pbXBvcnQgQ09ORklHIGZyb20gXCIuLi8uLi8uLi9jb25maWcvaW5kZXguanNcIjtcblxuY2xhc3MgU2hhcmVQb3BVcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcmVmZXJyYWxDb2RlOiAnJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmIChTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgICAgICBmZXRjaFJlZmVycmFsQ29kZSgpKCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuY29kZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVmZXJyYWxDb2RlOiByZXMuY29kZSB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRMaW5rKCk7XG4gICAgfVxuXG4gICAgZ2FUcmFja2luZyhidG5UeXBlLCBldmVudCkge1xuICAgICAgICBsZXQgYWN0aW9uVmFsXG4gICAgICAgIGxldCBldmVudFZhbFxuICAgICAgICBpZiAoYnRuVHlwZSA9PSAnZmInKSB7XG4gICAgICAgICAgICBhY3Rpb25WYWwgPSAnQm9va2luZ1JhdGluZ0ZiU2hhcmUnXG4gICAgICAgICAgICBldmVudFZhbCA9ICdib29raW5nLXJhdGluZy1mYi1zaGFyZSdcbiAgICAgICAgfSBlbHNlIGlmIChidG5UeXBlID09ICd0d2l0dGVyJykge1xuICAgICAgICAgICAgYWN0aW9uVmFsID0gJ0Jvb2tpbmdSYXRpbmdUd2l0dGVyU2hhcmUnXG4gICAgICAgICAgICBldmVudFZhbCA9ICdib29raW5nLXJhdGluZy10d2l0dGVyLXNoYXJlJ1xuICAgICAgICB9IGVsc2UgaWYgKGJ0blR5cGUgPT0gJ3dodHNhcHAnKSB7XG4gICAgICAgICAgICBhY3Rpb25WYWwgPSAnQm9va2luZ1JhdGluZ1doYXRzQXBwU2hhcmUnXG4gICAgICAgICAgICBldmVudFZhbCA9ICdib29raW5nLXJhdGluZy13aGF0c2FwcC1zaGFyZSdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdGlvblZhbCA9ICdCb29raW5nUmF0aW5nRW1haWxTaGFyZSdcbiAgICAgICAgICAgIGV2ZW50VmFsID0gJ2Jvb2tpbmctcmF0aW5nLWVtYWlsLXNoYXJlJ1xuICAgICAgICB9XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6IGFjdGlvblZhbCwgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiBldmVudFZhbCxcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgIH1cblxuICAgIGdldExpbmsoKSB7XG4gICAgICAgIHJldHVybiBgJHtDT05GSUcuQVBJX0JBU0VfVVJMfS9sb2dpbj9yZWZlcnJhbD0ke3RoaXMuc3RhdGUucmVmZXJyYWxDb2RlfWBcbiAgICB9XG5cbiAgICBnZXRXaGF0c2FwcFRleHQoZGF0YSwgdXJsKSB7XG4gICAgICAgIGxldCBtc2cgPSBkYXRhLnJhdGluZ3MgKyAnIG91dCBvZiA1IHN0YXJzXFxuJyArIGRhdGEuY29tcGxpbWVudHMgKyAnXFxuXFxuXCInICsgZGF0YS5yZXZpZXcgKyAnXCJcXG4nICsgdXJsXG4gICAgICAgIHJldHVybiB3aW5kb3cuZW5jb2RlVVJJQ29tcG9uZW50KG1zZyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgcHJvZmlsZURhdGEgPSAnJ1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5wcm9maWxlcyAmJiB0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZSkge1xuICAgICAgICAgICAgcHJvZmlsZURhdGEgPSB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlXVxuICAgICAgICB9XG4gICAgICAgIGxldCBuYW1lID0gXCJcIlxuICAgICAgICBpZiAocHJvZmlsZURhdGEgJiYgcHJvZmlsZURhdGEubmFtZSkge1xuICAgICAgICAgICAgbmFtZSA9IHByb2ZpbGVEYXRhLm5hbWVcbiAgICAgICAgfVxuICAgICAgICBsZXQgc29jaWFsX21lc3NhZ2VcbiAgICAgICAgbGV0IHVybFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5kZXRhaWxzICYmIHRoaXMucHJvcHMuZGV0YWlscy5hcHBvaW50bWVudF90eXBlID09IDIpIHtcbiAgICAgICAgICAgIHVybCA9IFwiaHR0cHM6Ly9kb2NwcmltZS5jb20vb3BkL2RvY3Rvci9cIiArIHRoaXMucHJvcHMuZGV0YWlscy5lbnRpdHlfaWRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVybCA9IFwiaHR0cHM6Ly9kb2NwcmltZS5jb20vbGFiL1wiICsgdGhpcy5wcm9wcy5kZXRhaWxzLmVudGl0eV9pZFxuICAgICAgICB9XG4gICAgICAgIHNvY2lhbF9tZXNzYWdlID0gYCR7dGhpcy5wcm9wcy5kZXRhaWxzLnJhdGluZ3N9IG91dCBvZiA1IHN0YXJzIFxuICAgICAgICAgJHt0aGlzLnByb3BzLmRldGFpbHMuY29tcGxpbWVudHN9IFxuICAgICAgICAgXG4gICAgICAgICBcIiR7dGhpcy5wcm9wcy5kZXRhaWxzLnJldmlld31cImBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFpdGluZy1wb3B1cFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsIGJvcmRlclJhZGl1czogNSwgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR5cC1jbG9zZVwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuc3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9jbG9zZS1ibGFjay5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLXJhdGluZy1jYXJkXCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogMCB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aG5rcy1jb250ZW50XCI+WW91ciBmZWVkYmFjayBtYXR0ZXJzITwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJ0aG5rcy1jb250ZW50IGZ3LTUwMFwiPlJFRkVSICZhbXA7IEVBUk4hPC9wPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRoYW5rcy1zdWItY29udGVudCBtcmItMTBcIj5QbGVhc2Ugc2hhcmUgd2l0aCB5b3VyIGZyaWVuZHM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZFJhdGluZyA9PSA0IHx8IHRoaXMucHJvcHMuc2VsZWN0ZWRSYXRpbmcgPT0gNSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWljby1zdHlsaW5nIGQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYWNlYm9va0ljb24tc3R5bGluZ1wiIG9uQ2xpY2s9e3RoaXMuZ2FUcmFja2luZy5iaW5kKHRoaXMsICdmYicpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFjZWJvb2tTaGFyZUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e3VybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3NvY2lhbF9tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhY2Vib29rSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MzJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZD17ZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWNlYm9va1NoYXJlQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkZhY2Vib29rPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3aXR0ZXJJY29uLXN0eWxpbmdcIiBvbkNsaWNrPXt0aGlzLmdhVHJhY2tpbmcuYmluZCh0aGlzLCAndHdpdHRlcicpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHdpdHRlclNoYXJlQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17dXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17c29jaWFsX21lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHdpdHRlckljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezMyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmQ9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHdpdHRlclNoYXJlQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlR3aXR0ZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2h0c2FwcEljb24tc3R5bGluZ1wiIG9uQ2xpY2s9e3RoaXMuZ2FUcmFja2luZy5iaW5kKHRoaXMsICd3aHRzYXBwJyl9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3aHRzQXBwaWNvXCIgaHJlZj17XCJ3aGF0c2FwcDovL3NlbmQ/dGV4dD1cIiArIHRoaXMuZ2V0V2hhdHNhcHBUZXh0KHRoaXMucHJvcHMuZGV0YWlscywgdXJsKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvd2EtbG9nby5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+V2hhdHNhcHA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hhcmVQb3BVcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vLi4vRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi8uLi9MZWZ0QmFyJ1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uLy4uL1JpZ2h0QmFyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9Ib21lL2Zvb3RlcidcbmltcG9ydCBNeVJldmlld0NhcmQgZnJvbSAnLi4vLi4vcmF0aW5nc1Byb2ZpbGVWaWV3L015UmV2aWV3Q2FyZC5qcyc7XG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuaW1wb3J0IERpc2NsYWltZXIgZnJvbSAnLi4vLi4vSG9tZS9zdGF0aWNEaXNjbGFpbWVyLmpzJ1xuXG5jbGFzcyBVc2VyUmV2aWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgICAgICBjb21wbGltZW50czogW10sXG4gICAgICAgICAgICBzbXNfaWQ6IG51bGwsXG4gICAgICAgICAgICBmb290ZXJEYXRhOiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICByb3V0ZXI6ICgpID0+IG51bGxcbiAgICB9XG5cbiAgICBwZXJmb3JtTG9naW5PcHMgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuZ2V0UmF0aW5nQ29tcGxpbWVudHMoKGVyciwgY29tcGxpbWVudHMpID0+IHsvLyBnZXQgdXNlciByYXRpbmdzXG4gICAgICAgICAgICBpZiAoIWVyciAmJiBjb21wbGltZW50cykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21wbGltZW50cyB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnByb3BzLmdldFVzZXJSZXZpZXdzKChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmICghZXJyICYmIGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IHNtc190b2tlbiA9IHBhcnNlZC50b2tlbiA/IHBhcnNlZC50b2tlbiA6IG51bGw7XG4gICAgICAgIGxldCBzbXNfaWQgPSBwYXJzZWQuaWQgPyBwYXJzZWQuaWQgOiBudWxsO1xuICAgICAgICBsZXQgdXNlcl9pZCA9IHBhcnNlZC51c2VyX2lkID8gcGFyc2VkLnVzZXJfaWQgOiBudWxsO1xuXG4gICAgICAgIGlmIChzbXNfdG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuT1RUTG9naW4oc21zX3Rva2VuLHVzZXJfaWQpLnRoZW4oKG9yZGVyX2lkKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNtc19pZCB9KVxuICAgICAgICAgICAgICAgIHRoaXMucGVyZm9ybUxvZ2luT3BzKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1Mb2dpbk9wcygpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciBzaG93U2VhcmNoPXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBwYXJlbnQtc2VjdGlvbiBib29rLWFwcG9pbnRtZW50LXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGVmdEJhciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTcgY2VudGVyLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJyZXYtdHh0XCI+WW91ciBSZXZpZXdzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhID8gdGhpcy5zdGF0ZS5kYXRhLm1hcChyYXRpbmcgPT4gPE15UmV2aWV3Q2FyZCB7Li4udGhpcy5wcm9wc30gc21zX2lkPXt0aGlzLnN0YXRlLnNtc19pZH0gZGV0YWlscz17cmF0aW5nfSBjb21wPXt0aGlzLnN0YXRlLmNvbXBsaW1lbnRzfSBrZXk9e3JhdGluZy5pZH0gLz4pIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0QmFyIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8RGlzY2xhaW1lciAvPlxuICAgICAgICAgICAgICAgIDxGb290ZXIgZm9vdGVyRGF0YT17dGhpcy5zdGF0ZS5mb290ZXJEYXRhfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJSZXZpZXdcbiIsImltcG9ydCBVc2VyUmV2aWV3IGZyb20gJy4vVXNlclJldmlldydcblxuZXhwb3J0IGRlZmF1bHQgVXNlclJldmlldyJdLCJzb3VyY2VSb290IjoiIn0=