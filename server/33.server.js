exports.ids = [33];
exports.modules = {

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import StarView from './StarView.js'

class EditReviewPopUp extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            selectedRating: 0,
            compliments: [],
            review_field: this.props.details.review,
            selected_compliments: this.props.details.compliments_list ? this.props.details.compliments_list : []
        };
    }

    componentDidMount() {
        this.setState({ data: this.props.details });
        this.setState({ selectedRating: this.props.selected_rating });
        this.setState({ compliments: this.props.compliments });
    }

    selectRating(x) {
        this.setState({ selectedRating: x });
        this.setState({ selected_compliments: [] });
    }

    declineRating() {
        this.props.cancel();
    }

    handleReviewChange(e) {
        this.setState({ review_field: e.target.value });
    }

    handleComplimentChange(id) {
        let compliments = this.state.selected_compliments;
        if (compliments.includes(id)) {
            let index = compliments.indexOf(id);
            compliments.splice(index, 1);
        } else {
            compliments.push(id);
        }
        this.setState({ selected_compliments: compliments });
    }

    submitRating() {
        let post_data = { 'id': this.state.data.id, 'rating': this.state.selectedRating, 'review': this.state.review_field, 'compliment': this.state.selected_compliments, 'appointment_id': this.state.data.id };
        this.setState({ data: null });
        this.props.submit(post_data);
    }

    render() {

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
                        [1, 2, 3, 4, 5].map((x, i) => {
                            return _react2.default.createElement('img', { key: i, onClick: this.selectRating.bind(this, x), className: 'img-fluid', src: "/assets/img/customer-icons/" + (this.state.selectedRating > 0 && this.state.selectedRating >= x ? "" : "un") + "selected-star.svg" });
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
                            this.state.compliments.map(comp => {
                                if (comp.type == this.state.data.appointment_type && this.state.selectedRating == comp.rating_level) {
                                    let check = this.state.selected_compliments.includes(comp.id);

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
                                            _react2.default.createElement('input', { type: 'checkbox', defaultChecked: check, onChange: this.handleComplimentChange.bind(this, comp.id) }),
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _SharePopUp = __webpack_require__(/*! ./SharePopUp.js */ "./dev/js/components/commons/ratingsProfileView/SharePopUp.js");

var _SharePopUp2 = _interopRequireDefault(_SharePopUp);

var _EditReviewPopUp = __webpack_require__(/*! ./EditReviewPopUp.js */ "./dev/js/components/commons/ratingsProfileView/EditReviewPopUp.js");

var _EditReviewPopUp2 = _interopRequireDefault(_EditReviewPopUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MyReviewCard extends _react2.default.Component {
    constructor(props) {
        super(props);

        this.thanYouButton = () => {
            this.setState({ toggle_share: false });
        };

        this.state = {
            sms_id: this.props.sms_id ? this.props.sms_id : null,
            data: this.props.details,
            selectedRating: this.props.details ? this.props.details.ratings : 0,
            type: 1,
            toggle_share: false,
            compliments: []
        };
    }

    componentDidMount() {
        this.setState({ data: this.props.details });
        this.setState({ compliments: this.props.comp });
        this.setState({ sms_id: this.props.sms_id });
        if (this.state.sms_id !== null && this.props.details.id == this.state.sms_id) {
            this.setState({ type: 0 });
        }
    }

    selectRating(x) {
        this.setState({ selectedRating: x });
    }

    editRating(id) {
        this.setState({ type: 0 });
    }

    cancelUpdate() {
        this.setState({
            type: 1, selectedRating: this.props.details ? this.props.details.ratings : 0, review_field: this.props.details.review

        });
    }

    sharePopUp() {
        this.setState({ toggle_share: true });
    }

    submitRating(post_data) {
        this.props.updateAppointmentRating(post_data, (err, data) => {
            if (!err && data) {
                this.setState({ type: 1, data: data });
            }
        });
    }

    render() {
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _reactShare = __webpack_require__(/*! react-share */ "react-share");

var _index = __webpack_require__(/*! ../../../actions/index.js */ "./dev/js/actions/index.js");

var _index2 = __webpack_require__(/*! ../../../helpers/storage/index.js */ "./dev/js/helpers/storage/index.js");

var _index3 = _interopRequireDefault(_index2);

var _reactCopyToClipboard = __webpack_require__(/*! react-copy-to-clipboard */ "react-copy-to-clipboard");

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _index4 = __webpack_require__(/*! ../../../config/index.js */ "./dev/js/config/index.js");

var _index5 = _interopRequireDefault(_index4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SharePopUp extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            referralCode: ''
        };
    }

    componentDidMount() {
        if (_index3.default.checkAuth()) {
            (0, _index.fetchReferralCode)()().then(res => {
                if (res && res.code) {
                    this.setState({ referralCode: res.code });
                }
            }).catch(e => {});
        }
        this.getLink();
    }

    gaTracking(btnType, event) {
        let actionVal;
        let eventVal;
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
        let data = {
            'Category': 'ConsumerApp', 'Action': actionVal, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': eventVal
        };
        _gtm2.default.sendEvent({ data: data });
    }

    getLink() {
        return `${_index5.default.API_BASE_URL}/login?referral=${this.state.referralCode}`;
    }

    getWhatsappText(data, url) {
        let msg = data.ratings + ' out of 5 stars\n' + data.compliments + '\n\n"' + data.review + '"\n' + url;
        return window.encodeURIComponent(msg);
    }

    render() {
        let profileData = '';
        if (this.props.profiles && this.props.selectedProfile) {
            profileData = this.props.profiles[this.props.selectedProfile];
        }
        let name = "";
        if (profileData && profileData.name) {
            name = profileData.name;
        }
        let social_message;
        let url;
        if (this.props.details && this.props.details.appointment_type == 2) {
            url = "https://docprime.com/opd/doctor/" + this.props.details.entity_id;
        } else {
            url = "https://docprime.com/lab/" + this.props.details.entity_id;
        }
        social_message = `${this.props.details.ratings} out of 5 stars 
         ${this.props.details.compliments} 
         
         "${this.props.details.review}"`;
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
}

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

var _react = __webpack_require__(/*! react */ "react");

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

const queryString = __webpack_require__(/*! query-string */ "query-string");


class UserReview extends _react2.default.Component {
    constructor(props) {
        super(props);

        this.performLoginOps = () => {
            this.props.getRatingCompliments((err, compliments) => {
                // get user ratings
                if (!err && compliments) {
                    this.setState({ compliments });
                }
            });
            this.props.getUserReviews((err, data) => {
                if (!err && data) {
                    this.setState({ data });
                }
            });
        };

        this.state = {
            data: null,
            compliments: [],
            sms_id: null,
            footerData: null
        };
    }

    componentDidMount() {
        if (window) {
            window.scrollTo(0, 0);
        }
        const parsed = queryString.parse(this.props.location.search);
        let sms_token = parsed.token ? parsed.token : null;
        let sms_id = parsed.id ? parsed.id : null;
        let user_id = parsed.user_id ? parsed.user_id : null;

        if (sms_token) {
            this.props.OTTLogin(sms_token, user_id).then(order_id => {
                this.setState({ sms_id });
                this.performLoginOps();
            });
        } else {
            this.performLoginOps();
        }
    }

    render() {
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
                                    this.state.data ? this.state.data.map(rating => _react2.default.createElement(_MyReviewCard2.default, _extends({}, this.props, { sms_id: this.state.sms_id, details: rating, comp: this.state.compliments, key: rating.id }))) : ""
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
}

UserReview.contextTypes = {
    router: () => null
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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9FZGl0UmV2aWV3UG9wVXAuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9yYXRpbmdzUHJvZmlsZVZpZXcvTXlSZXZpZXdDYXJkLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvcmF0aW5nc1Byb2ZpbGVWaWV3L1NoYXJlUG9wVXAuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy91c2VyUHJvZmlsZS91c2VyUmV2aWV3cy9Vc2VyUmV2aWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvdXNlclByb2ZpbGUvdXNlclJldmlld3MvaW5kZXguanMiXSwibmFtZXMiOlsiRWRpdFJldmlld1BvcFVwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJkYXRhIiwic2VsZWN0ZWRSYXRpbmciLCJjb21wbGltZW50cyIsInJldmlld19maWVsZCIsImRldGFpbHMiLCJyZXZpZXciLCJzZWxlY3RlZF9jb21wbGltZW50cyIsImNvbXBsaW1lbnRzX2xpc3QiLCJjb21wb25lbnREaWRNb3VudCIsInNldFN0YXRlIiwic2VsZWN0ZWRfcmF0aW5nIiwic2VsZWN0UmF0aW5nIiwieCIsImRlY2xpbmVSYXRpbmciLCJjYW5jZWwiLCJoYW5kbGVSZXZpZXdDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDb21wbGltZW50Q2hhbmdlIiwiaWQiLCJpbmNsdWRlcyIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInB1c2giLCJzdWJtaXRSYXRpbmciLCJwb3N0X2RhdGEiLCJzdWJtaXQiLCJyZW5kZXIiLCJiaW5kIiwiQVNTRVRTX0JBU0VfVVJMIiwiaWNvbiIsImVudGl0eV9uYW1lIiwiYWRkcmVzcyIsIm1hcCIsImkiLCJjb21wIiwidHlwZSIsImFwcG9pbnRtZW50X3R5cGUiLCJyYXRpbmdfbGV2ZWwiLCJjaGVjayIsIm1lc3NhZ2UiLCJNeVJldmlld0NhcmQiLCJ0aGFuWW91QnV0dG9uIiwidG9nZ2xlX3NoYXJlIiwic21zX2lkIiwicmF0aW5ncyIsImVkaXRSYXRpbmciLCJjYW5jZWxVcGRhdGUiLCJzaGFyZVBvcFVwIiwidXBkYXRlQXBwb2ludG1lbnRSYXRpbmciLCJlcnIiLCJkYXRlIiwiU2hhcmVQb3BVcCIsInJlZmVycmFsQ29kZSIsIlNUT1JBR0UiLCJjaGVja0F1dGgiLCJ0aGVuIiwicmVzIiwiY29kZSIsImNhdGNoIiwiZ2V0TGluayIsImdhVHJhY2tpbmciLCJidG5UeXBlIiwiZXZlbnQiLCJhY3Rpb25WYWwiLCJldmVudFZhbCIsIkdUTSIsImdldFVzZXJJZCIsInNlbmRFdmVudCIsIkNPTkZJRyIsIkFQSV9CQVNFX1VSTCIsImdldFdoYXRzYXBwVGV4dCIsInVybCIsIm1zZyIsIndpbmRvdyIsImVuY29kZVVSSUNvbXBvbmVudCIsInByb2ZpbGVEYXRhIiwicHJvZmlsZXMiLCJzZWxlY3RlZFByb2ZpbGUiLCJuYW1lIiwic29jaWFsX21lc3NhZ2UiLCJlbnRpdHlfaWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJwb3NpdGlvbiIsInBhZGRpbmdCb3R0b20iLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJVc2VyUmV2aWV3IiwicGVyZm9ybUxvZ2luT3BzIiwiZ2V0UmF0aW5nQ29tcGxpbWVudHMiLCJnZXRVc2VyUmV2aWV3cyIsImZvb3RlckRhdGEiLCJzY3JvbGxUbyIsInBhcnNlZCIsInBhcnNlIiwibG9jYXRpb24iLCJzZWFyY2giLCJzbXNfdG9rZW4iLCJ0b2tlbiIsInVzZXJfaWQiLCJPVFRMb2dpbiIsIm9yZGVyX2lkIiwicmF0aW5nIiwiY29udGV4dFR5cGVzIiwicm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFB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O0FBQUEsMEJBQUssV0FBVSx3Q0FBZjtBQUNJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLGlCQUFmO0FBQ0k7QUFBQTtBQUFBLGtDQUFLLFdBQVUsS0FBZjtBQUNJO0FBQUE7QUFBQSxzQ0FBSyxXQUFVLFFBQWY7QUFDSTtBQUFBO0FBQUEsMENBQUksV0FBVSxTQUFkO0FBQUE7QUFBQSxxQ0FESjtBQUVLLHlDQUFLOUIsS0FBTCxDQUFXQyxJQUFYLEdBQWtCLEtBQUtELEtBQUwsQ0FBV0MsSUFBWCxDQUFnQm1DLEdBQWhCLENBQW9Cc0UsVUFBVSw4QkFBQyxzQkFBRCxlQUFrQixLQUFLM0csS0FBdkIsSUFBOEIsUUFBUSxLQUFLQyxLQUFMLENBQVcrQyxNQUFqRCxFQUF5RCxTQUFTMkQsTUFBbEUsRUFBMEUsTUFBTSxLQUFLMUcsS0FBTCxDQUFXRyxXQUEzRixFQUF3RyxLQUFLdUcsT0FBT3JGLEVBQXBILElBQTlCLENBQWxCLEdBQThLO0FBRm5MO0FBREo7QUFESjtBQURKLHFCQUZKO0FBWUksa0RBQUMsa0JBQUQ7QUFaSjtBQURKLGFBRko7QUFrQkksMENBQUMsMEJBQUQsT0FsQko7QUFtQkksMENBQUMsZ0JBQUQsSUFBUSxZQUFZLEtBQUtyQixLQUFMLENBQVcrRixVQUEvQjtBQW5CSixTQURKO0FBdUJIO0FBeEVvQzs7QUFBbkNKLFUsQ0FXS2dCLFksR0FBZTtBQUNsQkMsWUFBUSxNQUFNO0FBREksQztrQkFpRVhqQixVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRmY7Ozs7OztrQkFFZUEsb0IiLCJmaWxlIjoiMzMuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuLy8gaW1wb3J0IFN0YXJWaWV3IGZyb20gJy4vU3RhclZpZXcuanMnXG5cbmNsYXNzIEVkaXRSZXZpZXdQb3BVcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgICAgIHNlbGVjdGVkUmF0aW5nOiAwLFxuICAgICAgICAgICAgY29tcGxpbWVudHM6IFtdLFxuICAgICAgICAgICAgcmV2aWV3X2ZpZWxkOiB0aGlzLnByb3BzLmRldGFpbHMucmV2aWV3LFxuICAgICAgICAgICAgc2VsZWN0ZWRfY29tcGxpbWVudHM6IHRoaXMucHJvcHMuZGV0YWlscy5jb21wbGltZW50c19saXN0ID8gdGhpcy5wcm9wcy5kZXRhaWxzLmNvbXBsaW1lbnRzX2xpc3QgOiBbXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiB0aGlzLnByb3BzLmRldGFpbHMgfSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkUmF0aW5nOiB0aGlzLnByb3BzLnNlbGVjdGVkX3JhdGluZyB9KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29tcGxpbWVudHM6IHRoaXMucHJvcHMuY29tcGxpbWVudHMgfSlcbiAgICB9XG5cbiAgICBzZWxlY3RSYXRpbmcoeCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRSYXRpbmc6IHggfSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkX2NvbXBsaW1lbnRzOiBbXSB9KVxuICAgIH1cblxuICAgIGRlY2xpbmVSYXRpbmcoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuY2FuY2VsKClcbiAgICB9XG5cbiAgICBoYW5kbGVSZXZpZXdDaGFuZ2UoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmV2aWV3X2ZpZWxkOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVDb21wbGltZW50Q2hhbmdlKGlkKSB7XG4gICAgICAgIGxldCBjb21wbGltZW50cyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRfY29tcGxpbWVudHM7XG4gICAgICAgIGlmIChjb21wbGltZW50cy5pbmNsdWRlcyhpZCkpIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IGNvbXBsaW1lbnRzLmluZGV4T2YoaWQpO1xuICAgICAgICAgICAgY29tcGxpbWVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbXBsaW1lbnRzLnB1c2goaWQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZF9jb21wbGltZW50czogY29tcGxpbWVudHMgfSk7XG4gICAgfVxuXG4gICAgc3VibWl0UmF0aW5nKCkge1xuICAgICAgICBsZXQgcG9zdF9kYXRhID0geyAnaWQnOiB0aGlzLnN0YXRlLmRhdGEuaWQsICdyYXRpbmcnOiB0aGlzLnN0YXRlLnNlbGVjdGVkUmF0aW5nLCAncmV2aWV3JzogdGhpcy5zdGF0ZS5yZXZpZXdfZmllbGQsICdjb21wbGltZW50JzogdGhpcy5zdGF0ZS5zZWxlY3RlZF9jb21wbGltZW50cywgJ2FwcG9pbnRtZW50X2lkJzogdGhpcy5zdGF0ZS5kYXRhLmlkIH07XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBudWxsIH0pXG4gICAgICAgIHRoaXMucHJvcHMuc3VibWl0KHBvc3RfZGF0YSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5zdGF0ZS5kYXRhKSAhPSBcInVuZGVmaW5lZFwiICYmIHRoaXMuc3RhdGUuZGF0YSAhPSBudWxsICYmIHRoaXMuc3RhdGUuZGF0YS5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhaXRpbmctcG9wdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLXJhdGluZy1jYXJkIHJldmlldy1wb3B1cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRlLWNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdCB5b3VyIEZlZWRiYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxpbWcgb25DbGljaz17dGhpcy5kZWNsaW5lUmF0aW5nLmJpbmQodGhpcyl9IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3J0LWNsb3NlLnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRlLWNhcmQtZG9jLWR0bHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5zdGF0ZS5kYXRhLmljb259IGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWctcm91bmQgXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGUtZG9jLWR0bCByYXRlLWRvY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJydC1kb2Mtbm0gZG9jLW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEuZW50aXR5X25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RoaXMuc3RhdGUuZGF0YS5hZGRyZXNzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRlLXN0YXItaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWzEsIDIsIDMsIDQsIDVdLm1hcCgoeCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxpbWcga2V5PXtpfSBvbkNsaWNrPXt0aGlzLnNlbGVjdFJhdGluZy5iaW5kKHRoaXMsIHgpfSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e1wiL2Fzc2V0cy9pbWcvY3VzdG9tZXItaWNvbnMvXCIgKyAodGhpcy5zdGF0ZS5zZWxlY3RlZFJhdGluZyA+IDAgJiYgdGhpcy5zdGF0ZS5zZWxlY3RlZFJhdGluZyA+PSB4ID8gXCJcIiA6IFwidW5cIikgKyBcInNlbGVjdGVkLXN0YXIuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGUtY29tcGxpbWVudC1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY21wbG1udC1wYXJhIGNvbXBsZW1udFwiPkdpdmUgeW91ciBjb21wbGltZW50PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb21wbGltZW50LWxpc2luZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb21wbGltZW50cy5tYXAoY29tcCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcC50eXBlID09IHRoaXMuc3RhdGUuZGF0YS5hcHBvaW50bWVudF90eXBlICYmIHRoaXMuc3RhdGUuc2VsZWN0ZWRSYXRpbmcgPT0gY29tcC5yYXRpbmdfbGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2sgPSB0aGlzLnN0YXRlLnNlbGVjdGVkX2NvbXBsaW1lbnRzLmluY2x1ZGVzKGNvbXAuaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2NvbXAuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJhdGUtZmVlZC10ZXh0XCI+e2NvbXAubWVzc2FnZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgZGVmYXVsdENoZWNrZWQ9e2NoZWNrfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDb21wbGltZW50Q2hhbmdlLmJpbmQodGhpcywgY29tcC5pZCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGUtc3VibWl0LWNtbm50LWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbWF4TGVuZ3RoPVwiNTAwMFwiIHBsYWNlaG9sZGVyPVwiTGVhdmUgYSByZXZpZXdcIiByb3dzPVwiMlwiIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5yZXZpZXdfZmllbGR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVJldmlld0NoYW5nZS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJhdGUtc3VibWl0LWJ0blwiIG9uQ2xpY2s9e3RoaXMuc3VibWl0UmF0aW5nLmJpbmQodGhpcyl9PlVwZGF0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFwiXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdFJldmlld1BvcFVwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaGFyZVBvcFVwIGZyb20gJy4vU2hhcmVQb3BVcC5qcyc7XG5pbXBvcnQgRWRpdFJldmlld1BvcFVwIGZyb20gJy4vRWRpdFJldmlld1BvcFVwLmpzJztcblxuY2xhc3MgTXlSZXZpZXdDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNtc19pZDogdGhpcy5wcm9wcy5zbXNfaWQgPyB0aGlzLnByb3BzLnNtc19pZCA6IG51bGwsXG4gICAgICAgICAgICBkYXRhOiB0aGlzLnByb3BzLmRldGFpbHMsXG4gICAgICAgICAgICBzZWxlY3RlZFJhdGluZzogdGhpcy5wcm9wcy5kZXRhaWxzID8gdGhpcy5wcm9wcy5kZXRhaWxzLnJhdGluZ3MgOiAwLFxuICAgICAgICAgICAgdHlwZTogMSxcbiAgICAgICAgICAgIHRvZ2dsZV9zaGFyZTogZmFsc2UsXG4gICAgICAgICAgICBjb21wbGltZW50czogW10sXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IHRoaXMucHJvcHMuZGV0YWlscyB9KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29tcGxpbWVudHM6IHRoaXMucHJvcHMuY29tcCB9KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc21zX2lkOiB0aGlzLnByb3BzLnNtc19pZCB9KVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zbXNfaWQgIT09IG51bGwgJiYgKHRoaXMucHJvcHMuZGV0YWlscy5pZCA9PSB0aGlzLnN0YXRlLnNtc19pZCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0eXBlOiAwIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RSYXRpbmcoeCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRSYXRpbmc6IHggfSlcbiAgICB9XG5cbiAgICBlZGl0UmF0aW5nKGlkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0eXBlOiAwIH0pXG4gICAgfVxuXG4gICAgY2FuY2VsVXBkYXRlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHR5cGU6IDEsIHNlbGVjdGVkUmF0aW5nOiB0aGlzLnByb3BzLmRldGFpbHMgPyB0aGlzLnByb3BzLmRldGFpbHMucmF0aW5ncyA6IDAsIHJldmlld19maWVsZDogdGhpcy5wcm9wcy5kZXRhaWxzLnJldmlldyxcblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHRoYW5Zb3VCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b2dnbGVfc2hhcmU6IGZhbHNlIH0pXG4gICAgfVxuXG4gICAgc2hhcmVQb3BVcCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvZ2dsZV9zaGFyZTogdHJ1ZSB9KVxuICAgIH1cblxuICAgIHN1Ym1pdFJhdGluZyhwb3N0X2RhdGEpIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVBcHBvaW50bWVudFJhdGluZyhwb3N0X2RhdGEsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmICghZXJyICYmIGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdHlwZTogMSwgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8IGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTE1XCIga2V5PXt0aGlzLnN0YXRlLmRhdGEuaWR9ID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXJzdC1zZWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5zdGF0ZS5kYXRhLmljb259IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjLWRhdGVcIj57dGhpcy5zdGF0ZS5kYXRhLmRhdGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFzdC1zZWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsbmMtbmFtXCI+e3RoaXMuc3RhdGUuZGF0YS5lbnRpdHlfbmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsbmMtYWRkXCI+e3RoaXMuc3RhdGUuZGF0YS5hZGRyZXNzfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1zZWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyYXRpbmctaW1nXCI+PGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9zYXRyLXd0LnN2Z1wifSAvPiB7dGhpcy5zdGF0ZS5kYXRhLnJhdGluZ3N9IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjbG5jLW5hbVwiPnt0aGlzLnN0YXRlLmRhdGEuY29tcGxpbWVudHN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xuYy1uYW0gcGFkLXQ2IHJhdGUtbWctdG9wXCI+e3RoaXMuc3RhdGUuZGF0YS5yZXZpZXd9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgb25DbGljaz17dGhpcy5lZGl0UmF0aW5nLmJpbmQodGhpcyl9PkVkaXQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5yYXRpbmdzID4gMyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBvbkNsaWNrPXt0aGlzLnNoYXJlUG9wVXAuYmluZCh0aGlzKX0+U2hhcmU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50eXBlID09IDAgPyA8RWRpdFJldmlld1BvcFVwIHsuLi50aGlzLnByb3BzfSBkZXRhaWxzPXt0aGlzLnN0YXRlLmRhdGF9IHN1Ym1pdD17dGhpcy5zdWJtaXRSYXRpbmcuYmluZCh0aGlzKX0gc2VsZWN0ZWRfcmF0aW5nPXt0aGlzLnN0YXRlLmRhdGEucmF0aW5nc30gY29tcGxpbWVudHM9e3RoaXMuc3RhdGUuY29tcGxpbWVudHN9IGNhbmNlbD17dGhpcy5jYW5jZWxVcGRhdGUuYmluZCh0aGlzKX0gLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50b2dnbGVfc2hhcmUgPyA8U2hhcmVQb3BVcCB7Li4udGhpcy5wcm9wc30gc3VibWl0PXt0aGlzLnRoYW5Zb3VCdXR0b259IHNlbGVjdGVkUmF0aW5nPXt0aGlzLnN0YXRlLnNlbGVjdGVkUmF0aW5nfSBkZXRhaWxzPXt0aGlzLnN0YXRlLmRhdGF9IC8+IDogXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBNeVJldmlld0NhcmRcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnO1xuaW1wb3J0IHsgRmFjZWJvb2tTaGFyZUJ1dHRvbiwgVHdpdHRlclNoYXJlQnV0dG9uLCBGYWNlYm9va0ljb24sIFR3aXR0ZXJJY29uLCBFbWFpbFNoYXJlQnV0dG9uLCBFbWFpbEljb24gfSBmcm9tICdyZWFjdC1zaGFyZSc7XG5pbXBvcnQgeyBmZXRjaFJlZmVycmFsQ29kZSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvaW5kZXguanMnO1xuaW1wb3J0IFNUT1JBR0UgZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZS9pbmRleC5qc1wiO1xuaW1wb3J0IHsgQ29weVRvQ2xpcGJvYXJkIH0gZnJvbSAncmVhY3QtY29weS10by1jbGlwYm9hcmQnO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInO1xuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL2luZGV4LmpzXCI7XG5cbmNsYXNzIFNoYXJlUG9wVXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHJlZmVycmFsQ29kZTogJydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAoU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuICAgICAgICAgICAgZmV0Y2hSZWZlcnJhbENvZGUoKSgpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLmNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlZmVycmFsQ29kZTogcmVzLmNvZGUgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0TGluaygpO1xuICAgIH1cblxuICAgIGdhVHJhY2tpbmcoYnRuVHlwZSwgZXZlbnQpIHtcbiAgICAgICAgbGV0IGFjdGlvblZhbFxuICAgICAgICBsZXQgZXZlbnRWYWxcbiAgICAgICAgaWYgKGJ0blR5cGUgPT0gJ2ZiJykge1xuICAgICAgICAgICAgYWN0aW9uVmFsID0gJ0Jvb2tpbmdSYXRpbmdGYlNoYXJlJ1xuICAgICAgICAgICAgZXZlbnRWYWwgPSAnYm9va2luZy1yYXRpbmctZmItc2hhcmUnXG4gICAgICAgIH0gZWxzZSBpZiAoYnRuVHlwZSA9PSAndHdpdHRlcicpIHtcbiAgICAgICAgICAgIGFjdGlvblZhbCA9ICdCb29raW5nUmF0aW5nVHdpdHRlclNoYXJlJ1xuICAgICAgICAgICAgZXZlbnRWYWwgPSAnYm9va2luZy1yYXRpbmctdHdpdHRlci1zaGFyZSdcbiAgICAgICAgfSBlbHNlIGlmIChidG5UeXBlID09ICd3aHRzYXBwJykge1xuICAgICAgICAgICAgYWN0aW9uVmFsID0gJ0Jvb2tpbmdSYXRpbmdXaGF0c0FwcFNoYXJlJ1xuICAgICAgICAgICAgZXZlbnRWYWwgPSAnYm9va2luZy1yYXRpbmctd2hhdHNhcHAtc2hhcmUnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3Rpb25WYWwgPSAnQm9va2luZ1JhdGluZ0VtYWlsU2hhcmUnXG4gICAgICAgICAgICBldmVudFZhbCA9ICdib29raW5nLXJhdGluZy1lbWFpbC1zaGFyZSdcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiBhY3Rpb25WYWwsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogZXZlbnRWYWwsXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICB9XG5cbiAgICBnZXRMaW5rKCkge1xuICAgICAgICByZXR1cm4gYCR7Q09ORklHLkFQSV9CQVNFX1VSTH0vbG9naW4/cmVmZXJyYWw9JHt0aGlzLnN0YXRlLnJlZmVycmFsQ29kZX1gXG4gICAgfVxuXG4gICAgZ2V0V2hhdHNhcHBUZXh0KGRhdGEsIHVybCkge1xuICAgICAgICBsZXQgbXNnID0gZGF0YS5yYXRpbmdzICsgJyBvdXQgb2YgNSBzdGFyc1xcbicgKyBkYXRhLmNvbXBsaW1lbnRzICsgJ1xcblxcblwiJyArIGRhdGEucmV2aWV3ICsgJ1wiXFxuJyArIHVybFxuICAgICAgICByZXR1cm4gd2luZG93LmVuY29kZVVSSUNvbXBvbmVudChtc2cpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHByb2ZpbGVEYXRhID0gJydcbiAgICAgICAgaWYgKHRoaXMucHJvcHMucHJvZmlsZXMgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGUpIHtcbiAgICAgICAgICAgIHByb2ZpbGVEYXRhID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV1cbiAgICAgICAgfVxuICAgICAgICBsZXQgbmFtZSA9IFwiXCJcbiAgICAgICAgaWYgKHByb2ZpbGVEYXRhICYmIHByb2ZpbGVEYXRhLm5hbWUpIHtcbiAgICAgICAgICAgIG5hbWUgPSBwcm9maWxlRGF0YS5uYW1lXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNvY2lhbF9tZXNzYWdlXG4gICAgICAgIGxldCB1cmxcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGV0YWlscyAmJiB0aGlzLnByb3BzLmRldGFpbHMuYXBwb2ludG1lbnRfdHlwZSA9PSAyKSB7XG4gICAgICAgICAgICB1cmwgPSBcImh0dHBzOi8vZG9jcHJpbWUuY29tL29wZC9kb2N0b3IvXCIgKyB0aGlzLnByb3BzLmRldGFpbHMuZW50aXR5X2lkXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cmwgPSBcImh0dHBzOi8vZG9jcHJpbWUuY29tL2xhYi9cIiArIHRoaXMucHJvcHMuZGV0YWlscy5lbnRpdHlfaWRcbiAgICAgICAgfVxuICAgICAgICBzb2NpYWxfbWVzc2FnZSA9IGAke3RoaXMucHJvcHMuZGV0YWlscy5yYXRpbmdzfSBvdXQgb2YgNSBzdGFycyBcbiAgICAgICAgICR7dGhpcy5wcm9wcy5kZXRhaWxzLmNvbXBsaW1lbnRzfSBcbiAgICAgICAgIFxuICAgICAgICAgXCIke3RoaXMucHJvcHMuZGV0YWlscy5yZXZpZXd9XCJgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhaXRpbmctcG9wdXBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNmZmYnLCBib3JkZXJSYWRpdXM6IDUsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19ID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXAtY2xvc2VcIiBvbkNsaWNrPXt0aGlzLnByb3BzLnN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvY2xvc2UtYmxhY2suc3ZnJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1yYXRpbmctY2FyZFwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDAgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGhua3MtY29udGVudFwiPllvdXIgZmVlZGJhY2sgbWF0dGVycyE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwidGhua3MtY29udGVudCBmdy01MDBcIj5SRUZFUiAmYW1wOyBFQVJOITwvcD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aGFua3Mtc3ViLWNvbnRlbnQgbXJiLTEwXCI+UGxlYXNlIHNoYXJlIHdpdGggeW91ciBmcmllbmRzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWRSYXRpbmcgPT0gNCB8fCB0aGlzLnByb3BzLnNlbGVjdGVkUmF0aW5nID09IDUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1pY28tc3R5bGluZyBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmFjZWJvb2tJY29uLXN0eWxpbmdcIiBvbkNsaWNrPXt0aGlzLmdhVHJhY2tpbmcuYmluZCh0aGlzLCAnZmInKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhY2Vib29rU2hhcmVCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXt1cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtzb2NpYWxfbWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWNlYm9va0ljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezMyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmQ9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmFjZWJvb2tTaGFyZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5GYWNlYm9vazwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d2l0dGVySWNvbi1zdHlsaW5nXCIgb25DbGljaz17dGhpcy5nYVRyYWNraW5nLmJpbmQodGhpcywgJ3R3aXR0ZXInKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR3aXR0ZXJTaGFyZUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e3VybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3NvY2lhbF9tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR3aXR0ZXJJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXszMn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kPXtmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R3aXR0ZXJTaGFyZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Ud2l0dGVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndodHNhcHBJY29uLXN0eWxpbmdcIiBvbkNsaWNrPXt0aGlzLmdhVHJhY2tpbmcuYmluZCh0aGlzLCAnd2h0c2FwcCcpfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwid2h0c0FwcGljb1wiIGhyZWY9e1wid2hhdHNhcHA6Ly9zZW5kP3RleHQ9XCIgKyB0aGlzLmdldFdoYXRzYXBwVGV4dCh0aGlzLnByb3BzLmRldGFpbHMsIHVybCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3dhLWxvZ28uc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPldoYXRzYXBwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXJlUG9wVXA7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vLi4vTGVmdEJhcidcbmltcG9ydCBSaWdodEJhciBmcm9tICcuLi8uLi9SaWdodEJhcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vSG9tZS9mb290ZXInXG5pbXBvcnQgTXlSZXZpZXdDYXJkIGZyb20gJy4uLy4uL3JhdGluZ3NQcm9maWxlVmlldy9NeVJldmlld0NhcmQuanMnO1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcbmltcG9ydCBEaXNjbGFpbWVyIGZyb20gJy4uLy4uL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcydcblxuY2xhc3MgVXNlclJldmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgICAgY29tcGxpbWVudHM6IFtdLFxuICAgICAgICAgICAgc21zX2lkOiBudWxsLFxuICAgICAgICAgICAgZm9vdGVyRGF0YTogbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcm91dGVyOiAoKSA9PiBudWxsXG4gICAgfVxuXG4gICAgcGVyZm9ybUxvZ2luT3BzID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmdldFJhdGluZ0NvbXBsaW1lbnRzKChlcnIsIGNvbXBsaW1lbnRzKSA9PiB7Ly8gZ2V0IHVzZXIgcmF0aW5nc1xuICAgICAgICAgICAgaWYgKCFlcnIgJiYgY29tcGxpbWVudHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29tcGxpbWVudHMgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRVc2VyUmV2aWV3cygoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWVyciAmJiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGEgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBzbXNfdG9rZW4gPSBwYXJzZWQudG9rZW4gPyBwYXJzZWQudG9rZW4gOiBudWxsO1xuICAgICAgICBsZXQgc21zX2lkID0gcGFyc2VkLmlkID8gcGFyc2VkLmlkIDogbnVsbDtcbiAgICAgICAgbGV0IHVzZXJfaWQgPSBwYXJzZWQudXNlcl9pZCA/IHBhcnNlZC51c2VyX2lkIDogbnVsbDtcblxuICAgICAgICBpZiAoc21zX3Rva2VuKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLk9UVExvZ2luKHNtc190b2tlbix1c2VyX2lkKS50aGVuKChvcmRlcl9pZCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbXNfaWQgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnBlcmZvcm1Mb2dpbk9wcygpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wZXJmb3JtTG9naW5PcHMoKVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgc2hvd1NlYXJjaD17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgcGFyZW50LXNlY3Rpb24gYm9vay1hcHBvaW50bWVudC1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExlZnRCYXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03IGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicmV2LXR4dFwiPllvdXIgUmV2aWV3czwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YSA/IHRoaXMuc3RhdGUuZGF0YS5tYXAocmF0aW5nID0+IDxNeVJldmlld0NhcmQgey4uLnRoaXMucHJvcHN9IHNtc19pZD17dGhpcy5zdGF0ZS5zbXNfaWR9IGRldGFpbHM9e3JhdGluZ30gY29tcD17dGhpcy5zdGF0ZS5jb21wbGltZW50c30ga2V5PXtyYXRpbmcuaWR9IC8+KSA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWdodEJhciAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPERpc2NsYWltZXIgLz5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIGZvb3RlckRhdGE9e3RoaXMuc3RhdGUuZm9vdGVyRGF0YX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBVc2VyUmV2aWV3XG4iLCJpbXBvcnQgVXNlclJldmlldyBmcm9tICcuL1VzZXJSZXZpZXcnXG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJSZXZpZXciXSwic291cmNlUm9vdCI6IiJ9