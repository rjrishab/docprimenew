exports.ids = [18];
exports.modules = {

/***/ "./dev/js/components/commons/ratingsProfileView/RatingProfileCard.js":
/*!***************************************************************************!*\
  !*** ./dev/js/components/commons/ratingsProfileView/RatingProfileCard.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _ReviewPopUp = __webpack_require__(/*! ./ReviewPopUp */ "./dev/js/components/commons/ratingsProfileView/ReviewPopUp.js");

var _ReviewPopUp2 = _interopRequireDefault(_ReviewPopUp);

var _ThankYouPopUp = __webpack_require__(/*! ./ThankYouPopUp */ "./dev/js/components/commons/ratingsProfileView/ThankYouPopUp.js");

var _ThankYouPopUp2 = _interopRequireDefault(_ThankYouPopUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RatingProfileCard extends _react2.default.Component {
    constructor(props) {
        super(props);

        this.getAppointmentType = () => {
            let type = this.props.details.type && this.props.details.type == "lab" ? 1 : 2;
            return type;
        };

        this.thanYouButton = () => {
            this.setState({ rating_done: false });
        };

        this.submitRating = (post_data, flag) => {
            this.setState({ data: null });
            if (!flag) {
                this.props.updateAppointmentRating(post_data, (err, data) => {
                    if (!err && data) {
                        this.setState({ appointmentData: this.state.data, data: null, rating_done: true });
                    }
                });
            }
        };

        this.state = {
            data: null,
            selectedRating: 0,
            rating_id: null,
            compliments: [],
            rating_done: false,
            appointmentData: null
        };
    }

    componentDidMount() {
        this.setState({ data: this.props.details });
        if (_storage2.default.checkAuth()) {
            this.props.getRatingCompliments((err, compliments) => {
                if (!err && compliments) {
                    this.setState({ compliments });
                }
            });
        }
    }

    selectRating(x) {
        this.setState({ selectedRating: x });
        let type = this.getAppointmentType();
        let post_data = { 'rating': x, 'appointment_id': this.props.details.id, 'appointment_type': type };
        this.props.createAppointmentRating(post_data, (err, data) => {
            if (!err && data) {
                this.setState({ rating_id: data.id });
            }
        });
    }

    declineRating(type, id) {
        let post_data = { 'appointment_id': id, 'appointment_type': type };
        this.props.closeAppointmentRating(post_data, (err, data) => {
            if (!err && data) {
                console.log('Popup Closed');
            }
        });

        this.setState({ data: null });
    }

    render() {
        if (this.state.rating_done && (this.state.data == null || this.state.data && this.state.data.length == 0)) {
            return _react2.default.createElement(_ThankYouPopUp2.default, _extends({}, this.props, { submit: this.thanYouButton, selectedRating: this.state.selectedRating, appointmentData: this.state.appointmentData }));
        }
        let app_id = this.props.details.id;
        let submitted_flag = !!this.props.rated_appoinments[app_id];
        if (!submitted_flag && this.state.data) {
            let qualification_object = this.props.details.doctor ? this.props.details.doctor.qualifications : null;
            let pipe = '';
            let data_obj = {
                'name': this.props.details.doctor ? this.props.details.doctor.name : this.props.details.lab_name,
                'qualification': qualification_object && qualification_object.length ? qualification_object[0].qualification : '',
                'specialization': qualification_object && qualification_object.length ? qualification_object[0].specialization : '',
                'type': this.getAppointmentType(),
                'thumbnail': this.props.details.doctor ? this.props.details.doctor_thumbnail : this.props.details.lab_thumbnail,
                'pipe': pipe
            };
            if (data_obj.type !== 1) {
                data_obj.pipe = ' | ';
            }
            let entity = data_obj.type == 1 ? 'lab' : 'doctor';
            if (!this.state.rating_id) {
                return _react2.default.createElement(
                    'div',
                    { className: 'rating-upside-container mt-0' },
                    _react2.default.createElement(
                        'div',
                        { className: 'sub-upside-star' },
                        _react2.default.createElement(
                            'p',
                            null,
                            'Rate your recent visit with the ',
                            entity
                        ),
                        [1, 2, 3, 4, 5].map((x, i) => {
                            return _react2.default.createElement('img', { key: i, onClick: this.selectRating.bind(this, x), className: 'img-fluid', src: "/assets/img/customer-icons/" + (this.state.selectedRating > 0 && this.state.selectedRating >= x ? "" : "un") + "selected-star.svg" });
                        })
                    )
                );
            } else {
                return _react2.default.createElement(_ReviewPopUp2.default, _extends({}, this.props, { details: this.state.data, submit: this.submitRating, obj: data_obj, rating_id: this.state.rating_id, selected_rating: this.state.selectedRating, compliments: this.state.compliments }));
            }
        } else {
            return "";
        }
    }
}

exports.default = RatingProfileCard;

/***/ }),

/***/ "./dev/js/components/commons/ratingsProfileView/ReviewPopUp.js":
/*!*********************************************************************!*\
  !*** ./dev/js/components/commons/ratingsProfileView/ReviewPopUp.js ***!
  \*********************************************************************/
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

class ReviewPopUp extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            selectedRating: 0,
            rating_id: null,
            compliments: [],
            review_field: '',
            selected_compliments: []
        };
    }

    componentDidMount() {
        this.setState({ data: this.props.details });
        this.setState({ selectedRating: this.props.selected_rating });
        this.setState({ compliments: this.props.compliments });
    }

    selectRating(x) {
        this.setState({ selectedRating: x });
    }

    declineRating(type, id) {
        this.props.closeAppointmentPopUp(id, (err, data) => {
            if (!err && data) {
                console.log('Popup Closed');
            }
        });
        this.props.submit({}, 1);
        this.setState({ data: null });
        this.props.popUpState();
    }

    handleReviewChange(e) {
        this.setState({ review_field: e.target.value });
    }

    handleComplimentChange(id) {
        let compliments = this.state.selected_compliments;
        compliments.push(id);
        this.setState({ selected_compliments: compliments });
    }

    submitRating() {
        let post_data = { 'id': this.props.rating_id, 'rating': this.state.selectedRating, 'review': this.state.review_field, 'compliment': this.state.selected_compliments, 'appointment_id': this.state.data.id };
        this.setState({ data: null });
        this.props.submit(post_data, 0);
    }

    thanYouButton() {
        this.setState({ rating_done: false });
    }

    render() {

        if (typeof this.state.data != "undefined" && this.state.data != null && this.state.data.id) {
            return _react2.default.createElement(
                'div',
                { className: 'raiting-popup' },
                _react2.default.createElement(
                    'div',
                    { className: 'home-rating-card' },
                    _react2.default.createElement(
                        'div',
                        { className: 'rate-card-header' },
                        'Share your Feedback',
                        _react2.default.createElement(
                            'span',
                            null,
                            _react2.default.createElement('img', { onClick: this.declineRating.bind(this, this.props.obj.type, this.state.data.id), src: "/assets" + "/img/customer-icons/rt-close.svg", className: 'img-fluid' })
                        )
                    ),
                    typeof this.props.selectedHospital != 'undefined' && this.props.selectedHospital.id ? _react2.default.createElement(
                        'div',
                        { className: 'rate-seceltion-cont' },
                        _react2.default.createElement(
                            'p',
                            { className: 'rt-par-select' },
                            this.props.selectedHospital.hospital_name
                        )
                    ) : "",
                    _react2.default.createElement(
                        'div',
                        { className: 'rate-card-doc-dtls' },
                        _react2.default.createElement('img', { src: this.props.obj.thumbnail, className: 'img-fluid img-round ' }),
                        _react2.default.createElement(
                            'div',
                            { className: 'rate-doc-dtl' },
                            _react2.default.createElement(
                                'p',
                                { className: 'rt-doc-nm' },
                                this.props.obj.name
                            ),
                            _react2.default.createElement(
                                'span',
                                null,
                                this.props.obj.qualification,
                                ' ',
                                this.props.obj.pipe,
                                ' ',
                                this.props.obj.specialization
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
                            { className: 'cmplmnt-para' },
                            'Give your compliment'
                        ),
                        _react2.default.createElement(
                            'ul',
                            { className: 'compliment-lising' },
                            this.state.compliments.map(comp => {
                                if (comp.type == this.props.obj.type && this.state.selectedRating == comp.rating_level) return _react2.default.createElement(
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
                                        _react2.default.createElement('input', { type: 'checkbox', onChange: this.handleComplimentChange.bind(this, comp.id) }),
                                        _react2.default.createElement('span', { className: 'checkmark' })
                                    )
                                );
                            })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'rate-submit-cmnnt-box' },
                            _react2.default.createElement('textarea', { maxLength: '5000', placeholder: 'Leave a review', rows: '2', value: this.state.review_field, onChange: this.handleReviewChange.bind(this) }),
                            _react2.default.createElement(
                                'button',
                                { className: 'rate-submit-btn', onClick: this.submitRating.bind(this) },
                                'Submit'
                            )
                        )
                    )
                )
            );
        }
        return _react2.default.createElement('div', null);
    }
}

exports.default = ReviewPopUp;

/***/ }),

/***/ "./dev/js/components/commons/ratingsProfileView/ThankYouPopUp.js":
/*!***********************************************************************!*\
  !*** ./dev/js/components/commons/ratingsProfileView/ThankYouPopUp.js ***!
  \***********************************************************************/
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

var _reactLoadable = __webpack_require__(/*! react-loadable */ "react-loadable");

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _index = __webpack_require__(/*! ../../../actions/index.js */ "./dev/js/actions/index.js");

var _index2 = __webpack_require__(/*! ../../../helpers/storage/index.js */ "./dev/js/helpers/storage/index.js");

var _index3 = _interopRequireDefault(_index2);

var _reactCopyToClipboard = __webpack_require__(/*! react-copy-to-clipboard */ "react-copy-to-clipboard");

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _index4 = __webpack_require__(/*! ../../../config/index.js */ "./dev/js/config/index.js");

var _index5 = _interopRequireDefault(_index4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon, EmailShareButton, EmailIcon } from 'react-share';

const loading = () => _react2.default.createElement(
	'div',
	{ className: 'loading_Linebar_container' },
	_react2.default.createElement('div', { className: 'loading_bar_line' })
);

const ReactShare = (0, _reactLoadable2.default)({
	loader: () => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-share */ "react-share", 7)),
	modules: ['react-share'],
	webpack: () => [/*require.resolve*/(/*! react-share */ "react-share")],
	loading
});

class ThankYouPopUp extends _react2.default.Component {
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
		let doctor_name;
		if (this.props.appointmentData && this.props.appointmentData.type == 'doctor') {
			doctor_name = this.props.appointmentData.doctor.name;
			social_message = `Used docprime to book Dr. ${doctor_name}. Had an excellent experience. I love how convenient and easy to use it is. On top of it, you get so many discounts. Who thought healthcare can be so affordable. My first choice for my good health! You can also get ₹ 50 if you signup with my referral code ${this.state.referralCode}.`;
		} else {
			social_message = `Used docprime to book a lab test. Had an excellent experience. I love how convenient and easy to use it is. On top of it, you get so many discounts. Who thought healthcare can be so affordable. My first choice for my good health! You can also get ₹ 50 if you signup with my referral code ${this.state.referralCode}.`;
		}
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
						'div',
						{ className: 'thankyou-popup-head' },
						_react2.default.createElement('img', { src: "/assets" + "/img/dpsmile.png" }),
						_react2.default.createElement(
							'p',
							null,
							'Thanks ',
							name
						)
					),
					_react2.default.createElement(
						'p',
						{ className: 'thnks-content' },
						'Your feedback matters!'
					),
					_react2.default.createElement(
						'p',
						{ className: 'thnks-content fw-500' },
						'REFER & EARN!'
					),
					_react2.default.createElement(
						'p',
						{ className: 'thanks-sub-content mrb-10' },
						'Refer your friends & earn \u20B9 200'
					),
					ReactShare && ReactShare.FacebookShareButton && (this.props.selectedRating == 4 || this.props.selectedRating == 5) ? _react2.default.createElement(
						'div',
						{ className: 'social-ico-styling d-flex' },
						_react2.default.createElement(
							'div',
							{ className: 'facebookIcon-styling', onClick: this.gaTracking.bind(this, 'fb') },
							_react2.default.createElement(
								ReactShare.FacebookShareButton,
								{
									url: 'https://docprime.com',
									quote: social_message,
									className: 'button' },
								_react2.default.createElement(ReactShare.FacebookIcon, {
									size: 32,
									round: false })
							),
							_react2.default.createElement(
								'span',
								null,
								'Share referral link'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'twitterIcon-styling', onClick: this.gaTracking.bind(this, 'twitter') },
							_react2.default.createElement(
								ReactShare.TwitterShareButton,
								{
									url: 'https://docprime.com',
									title: social_message,
									className: 'button' },
								_react2.default.createElement(ReactShare.TwitterIcon, {
									size: 32,
									round: false })
							),
							_react2.default.createElement(
								'span',
								null,
								'Tweet referral link'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'emailIcon-styling', onClick: this.gaTracking.bind(this, 'email') },
							_react2.default.createElement(
								ReactShare.EmailShareButton,
								{
									url: 'https://docprime.com',
									subject: 'Refer to earn',
									body: `Save upto 50% on doctor appointments and lab tests. Sign up on docprime.com with my code ${this.state.referralCode} and get ₹ 50. Visit ${_index5.default.API_BASE_URL}/login?referral=${this.state.referralCode}`,
									className: 'button' },
								_react2.default.createElement(ReactShare.EmailIcon, {
									size: 32,
									round: false })
							),
							_react2.default.createElement(
								'span',
								null,
								'Email referral link'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'whtsappIcon-styling', onClick: this.gaTracking.bind(this, 'whtsapp') },
							_react2.default.createElement(
								'a',
								{ className: 'whtsAppico', href: "whatsapp://send?text=" + social_message },
								_react2.default.createElement('img', { src: "/assets" + "/img/wa-logo.svg" }),
								_react2.default.createElement(
									'span',
									{ className: 'refrWhtsIcotcs' },
									'Whatsapp referral link'
								)
							)
						)
					) : "",
					_react2.default.createElement(
						_reactCopyToClipboard.CopyToClipboard,
						{ text: this.getLink(), onCopy: () => {
								_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Referral Link Copied" });
							} },
						_react2.default.createElement(
							'div',
							{ className: 'd-flex align-items-center justify-content-center', style: { cursor: 'pointer' } },
							_react2.default.createElement('img', { src: "/assets" + '/img/customer-icons/copy.svg', style: { marginRight: 8, width: 20 } }),
							_react2.default.createElement(
								'span',
								{ className: 'text-primary fw-500' },
								'Copy referral link'
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'text-center mrt-20', style: { backgroundColor: 'rgba(247, 134, 49, 0.2)', padding: 10, borderBottomLeftRadius: 5, borderBottomRightRadius: 5, cursor: 'pointer' } },
					_react2.default.createElement(
						'a',
						{ href: '/referral', className: 'fw-500 text-primary' },
						'How referral works?'
					)
				)
			)
		);
	}
}

exports.default = ThankYouPopUp;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9SYXRpbmdQcm9maWxlQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9SZXZpZXdQb3BVcC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9UaGFua1lvdVBvcFVwLmpzIl0sIm5hbWVzIjpbIlJhdGluZ1Byb2ZpbGVDYXJkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiZ2V0QXBwb2ludG1lbnRUeXBlIiwidHlwZSIsImRldGFpbHMiLCJ0aGFuWW91QnV0dG9uIiwic2V0U3RhdGUiLCJyYXRpbmdfZG9uZSIsInN1Ym1pdFJhdGluZyIsInBvc3RfZGF0YSIsImZsYWciLCJkYXRhIiwidXBkYXRlQXBwb2ludG1lbnRSYXRpbmciLCJlcnIiLCJhcHBvaW50bWVudERhdGEiLCJzdGF0ZSIsInNlbGVjdGVkUmF0aW5nIiwicmF0aW5nX2lkIiwiY29tcGxpbWVudHMiLCJjb21wb25lbnREaWRNb3VudCIsIlNUT1JBR0UiLCJjaGVja0F1dGgiLCJnZXRSYXRpbmdDb21wbGltZW50cyIsInNlbGVjdFJhdGluZyIsIngiLCJpZCIsImNyZWF0ZUFwcG9pbnRtZW50UmF0aW5nIiwiZGVjbGluZVJhdGluZyIsImNsb3NlQXBwb2ludG1lbnRSYXRpbmciLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwibGVuZ3RoIiwiYXBwX2lkIiwic3VibWl0dGVkX2ZsYWciLCJyYXRlZF9hcHBvaW5tZW50cyIsInF1YWxpZmljYXRpb25fb2JqZWN0IiwiZG9jdG9yIiwicXVhbGlmaWNhdGlvbnMiLCJwaXBlIiwiZGF0YV9vYmoiLCJuYW1lIiwibGFiX25hbWUiLCJxdWFsaWZpY2F0aW9uIiwic3BlY2lhbGl6YXRpb24iLCJkb2N0b3JfdGh1bWJuYWlsIiwibGFiX3RodW1ibmFpbCIsImVudGl0eSIsIm1hcCIsImkiLCJiaW5kIiwiUmV2aWV3UG9wVXAiLCJyZXZpZXdfZmllbGQiLCJzZWxlY3RlZF9jb21wbGltZW50cyIsInNlbGVjdGVkX3JhdGluZyIsImNsb3NlQXBwb2ludG1lbnRQb3BVcCIsInN1Ym1pdCIsInBvcFVwU3RhdGUiLCJoYW5kbGVSZXZpZXdDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDb21wbGltZW50Q2hhbmdlIiwicHVzaCIsIm9iaiIsIkFTU0VUU19CQVNFX1VSTCIsInNlbGVjdGVkSG9zcGl0YWwiLCJob3NwaXRhbF9uYW1lIiwidGh1bWJuYWlsIiwiY29tcCIsInJhdGluZ19sZXZlbCIsIm1lc3NhZ2UiLCJsb2FkaW5nIiwiUmVhY3RTaGFyZSIsImxvYWRlciIsIm1vZHVsZXMiLCJ3ZWJwYWNrIiwicmVxdWlyZSIsIlRoYW5rWW91UG9wVXAiLCJyZWZlcnJhbENvZGUiLCJ0aGVuIiwicmVzIiwiY29kZSIsImNhdGNoIiwiZ2V0TGluayIsImdhVHJhY2tpbmciLCJidG5UeXBlIiwiZXZlbnQiLCJhY3Rpb25WYWwiLCJldmVudFZhbCIsIkdUTSIsImdldFVzZXJJZCIsInNlbmRFdmVudCIsIkNPTkZJRyIsIkFQSV9CQVNFX1VSTCIsInByb2ZpbGVEYXRhIiwicHJvZmlsZXMiLCJzZWxlY3RlZFByb2ZpbGUiLCJzb2NpYWxfbWVzc2FnZSIsImRvY3Rvcl9uYW1lIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwicG9zaXRpb24iLCJwYWRkaW5nQm90dG9tIiwiRmFjZWJvb2tTaGFyZUJ1dHRvbiIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJjdXJzb3IiLCJtYXJnaW5SaWdodCIsIndpZHRoIiwicGFkZGluZyIsImJvcmRlckJvdHRvbUxlZnRSYWRpdXMiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7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QmdELGNBQTFEO0FBQ0MsK0NBQUssS0FBS2pDLFNBQWVBLEdBQUcsa0JBQTVCLEdBREQ7QUFFQztBQUFBO0FBQUEsV0FBTSxXQUFVLGdCQUFoQjtBQUFBO0FBQUE7QUFGRDtBQUREO0FBbkNELE1BREQsR0EyQ0csRUFwREw7QUFzREM7QUFBQywyQ0FBRDtBQUFBLFFBQWlCLE1BQU0sS0FBS21CLE9BQUwsRUFBdkIsRUFBdUMsUUFBUSxNQUFNO0FBQUVxQiwrQkFBU0MsSUFBVCxDQUFjLEVBQUVDLEtBQUssZUFBUCxFQUF3QkMsTUFBTSxzQkFBOUIsRUFBZDtBQUF3RSxRQUEvSDtBQUNDO0FBQUE7QUFBQSxTQUFLLFdBQVUsa0RBQWYsRUFBa0UsT0FBTyxFQUFFQyxRQUFRLFNBQVYsRUFBekU7QUFDQyw4Q0FBSyxLQUFLNUMsU0FBZUEsR0FBRyw4QkFBNUIsRUFBNEQsT0FBTyxFQUFFNkMsYUFBYSxDQUFmLEVBQWtCQyxPQUFPLEVBQXpCLEVBQW5FLEdBREQ7QUFFQztBQUFBO0FBQUEsVUFBTSxXQUFVLHFCQUFoQjtBQUFBO0FBQUE7QUFGRDtBQUREO0FBdERELEtBSkQ7QUFpRUM7QUFBQTtBQUFBLE9BQUssV0FBVSxvQkFBZixFQUFvQyxPQUFPLEVBQUVYLGlCQUFpQix5QkFBbkIsRUFBOENZLFNBQVMsRUFBdkQsRUFBMkRDLHdCQUF3QixDQUFuRixFQUFzRkMseUJBQXlCLENBQS9HLEVBQWtITCxRQUFRLFNBQTFILEVBQTNDO0FBQ0M7QUFBQTtBQUFBLFFBQUcsTUFBSyxXQUFSLEVBQW9CLFdBQVUscUJBQTlCO0FBQUE7QUFBQTtBQUREO0FBakVEO0FBREQsR0FERDtBQXlFQTtBQXpJMEM7O2tCQTRJN0IvQixhIiwiZmlsZSI6IjE4LnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmltcG9ydCBSZXZpZXdQb3BVcCBmcm9tICcuL1Jldmlld1BvcFVwJ1xuaW1wb3J0IFRoYW5rWW91UG9wVXAgZnJvbSAnLi9UaGFua1lvdVBvcFVwJ1xuXG5cbmNsYXNzIFJhdGluZ1Byb2ZpbGVDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgICAgc2VsZWN0ZWRSYXRpbmc6IDAsXG4gICAgICAgICAgICByYXRpbmdfaWQ6IG51bGwsXG4gICAgICAgICAgICBjb21wbGltZW50czogW10sXG4gICAgICAgICAgICByYXRpbmdfZG9uZTogZmFsc2UsXG4gICAgICAgICAgICBhcHBvaW50bWVudERhdGE6bnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiB0aGlzLnByb3BzLmRldGFpbHMgfSlcbiAgICAgICAgaWYgKFNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0UmF0aW5nQ29tcGxpbWVudHMoKGVyciwgY29tcGxpbWVudHMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWVyciAmJiBjb21wbGltZW50cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29tcGxpbWVudHMgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0UmF0aW5nKHgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkUmF0aW5nOiB4IH0pXG4gICAgICAgIGxldCB0eXBlID0gdGhpcy5nZXRBcHBvaW50bWVudFR5cGUoKTtcbiAgICAgICAgbGV0IHBvc3RfZGF0YSA9IHsgJ3JhdGluZyc6IHgsICdhcHBvaW50bWVudF9pZCc6IHRoaXMucHJvcHMuZGV0YWlscy5pZCwgJ2FwcG9pbnRtZW50X3R5cGUnOiB0eXBlIH07XG4gICAgICAgIHRoaXMucHJvcHMuY3JlYXRlQXBwb2ludG1lbnRSYXRpbmcocG9zdF9kYXRhLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWVyciAmJiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJhdGluZ19pZDogZGF0YS5pZCB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGRlY2xpbmVSYXRpbmcodHlwZSwgaWQpIHtcbiAgICAgICAgbGV0IHBvc3RfZGF0YSA9IHsgJ2FwcG9pbnRtZW50X2lkJzogaWQsICdhcHBvaW50bWVudF90eXBlJzogdHlwZSB9O1xuICAgICAgICB0aGlzLnByb3BzLmNsb3NlQXBwb2ludG1lbnRSYXRpbmcocG9zdF9kYXRhLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWVyciAmJiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BvcHVwIENsb3NlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBudWxsIH0pXG4gICAgfVxuXG4gICAgZ2V0QXBwb2ludG1lbnRUeXBlID0gKCkgPT4ge1xuICAgICAgICBsZXQgdHlwZSA9IHRoaXMucHJvcHMuZGV0YWlscy50eXBlICYmIHRoaXMucHJvcHMuZGV0YWlscy50eXBlID09IFwibGFiXCIgPyAxIDogMjtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuXG5cbiAgICB0aGFuWW91QnV0dG9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmF0aW5nX2RvbmU6IGZhbHNlIH0pXG4gICAgfVxuXG4gICAgc3VibWl0UmF0aW5nID0gKHBvc3RfZGF0YSwgZmxhZykgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogbnVsbCB9KVxuICAgICAgICBpZiAoIWZsYWcpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudXBkYXRlQXBwb2ludG1lbnRSYXRpbmcocG9zdF9kYXRhLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnIgJiYgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYXBwb2ludG1lbnREYXRhOnRoaXMuc3RhdGUuZGF0YSwgZGF0YTogbnVsbCwgcmF0aW5nX2RvbmU6IHRydWUgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5yYXRpbmdfZG9uZSAmJiAoKHRoaXMuc3RhdGUuZGF0YSA9PSBudWxsKSB8fCAodGhpcy5zdGF0ZS5kYXRhICYmIHRoaXMuc3RhdGUuZGF0YS5sZW5ndGggPT0gMCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gKDxUaGFua1lvdVBvcFVwIHsuLi50aGlzLnByb3BzfSBzdWJtaXQ9e3RoaXMudGhhbllvdUJ1dHRvbn0gc2VsZWN0ZWRSYXRpbmc9e3RoaXMuc3RhdGUuc2VsZWN0ZWRSYXRpbmd9IGFwcG9pbnRtZW50RGF0YT17dGhpcy5zdGF0ZS5hcHBvaW50bWVudERhdGF9Lz4pO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhcHBfaWQgPSB0aGlzLnByb3BzLmRldGFpbHMuaWRcbiAgICAgICAgbGV0IHN1Ym1pdHRlZF9mbGFnID0gISF0aGlzLnByb3BzLnJhdGVkX2FwcG9pbm1lbnRzW2FwcF9pZF07XG4gICAgICAgIGlmICghc3VibWl0dGVkX2ZsYWcgJiYgdGhpcy5zdGF0ZS5kYXRhKSB7XG4gICAgICAgICAgICBsZXQgcXVhbGlmaWNhdGlvbl9vYmplY3QgPSB0aGlzLnByb3BzLmRldGFpbHMuZG9jdG9yID8gdGhpcy5wcm9wcy5kZXRhaWxzLmRvY3Rvci5xdWFsaWZpY2F0aW9ucyA6IG51bGw7XG4gICAgICAgICAgICBsZXQgcGlwZSA9ICcnXG4gICAgICAgICAgICBsZXQgZGF0YV9vYmogPSB7XG4gICAgICAgICAgICAgICAgJ25hbWUnOiAodGhpcy5wcm9wcy5kZXRhaWxzLmRvY3RvcikgPyB0aGlzLnByb3BzLmRldGFpbHMuZG9jdG9yLm5hbWUgOiB0aGlzLnByb3BzLmRldGFpbHMubGFiX25hbWUsXG4gICAgICAgICAgICAgICAgJ3F1YWxpZmljYXRpb24nOiBxdWFsaWZpY2F0aW9uX29iamVjdCAmJiBxdWFsaWZpY2F0aW9uX29iamVjdC5sZW5ndGggPyBxdWFsaWZpY2F0aW9uX29iamVjdFswXS5xdWFsaWZpY2F0aW9uIDogJycsXG4gICAgICAgICAgICAgICAgJ3NwZWNpYWxpemF0aW9uJzogcXVhbGlmaWNhdGlvbl9vYmplY3QgJiYgcXVhbGlmaWNhdGlvbl9vYmplY3QubGVuZ3RoID8gcXVhbGlmaWNhdGlvbl9vYmplY3RbMF0uc3BlY2lhbGl6YXRpb24gOiAnJyxcbiAgICAgICAgICAgICAgICAndHlwZSc6IHRoaXMuZ2V0QXBwb2ludG1lbnRUeXBlKCksXG4gICAgICAgICAgICAgICAgJ3RodW1ibmFpbCc6IHRoaXMucHJvcHMuZGV0YWlscy5kb2N0b3IgPyB0aGlzLnByb3BzLmRldGFpbHMuZG9jdG9yX3RodW1ibmFpbCA6IHRoaXMucHJvcHMuZGV0YWlscy5sYWJfdGh1bWJuYWlsLFxuICAgICAgICAgICAgICAgICdwaXBlJzogcGlwZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGFfb2JqLnR5cGUgIT09IDEpIHtcbiAgICAgICAgICAgICAgICBkYXRhX29iai5waXBlID0gJyB8ICc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZW50aXR5ID0gKGRhdGFfb2JqLnR5cGUgPT0gMSkgPyAnbGFiJyA6ICdkb2N0b3InO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnJhdGluZ19pZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLXVwc2lkZS1jb250YWluZXIgbXQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItdXBzaWRlLXN0YXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5SYXRlIHlvdXIgcmVjZW50IHZpc2l0IHdpdGggdGhlIHtlbnRpdHl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWzEsIDIsIDMsIDQsIDVdLm1hcCgoeCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxpbWcga2V5PXtpfSBvbkNsaWNrPXt0aGlzLnNlbGVjdFJhdGluZy5iaW5kKHRoaXMsIHgpfSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e1wiL2Fzc2V0cy9pbWcvY3VzdG9tZXItaWNvbnMvXCIgKyAodGhpcy5zdGF0ZS5zZWxlY3RlZFJhdGluZyA+IDAgJiYgdGhpcy5zdGF0ZS5zZWxlY3RlZFJhdGluZyA+PSB4ID8gXCJcIiA6IFwidW5cIikgKyBcInNlbGVjdGVkLXN0YXIuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxSZXZpZXdQb3BVcCB7Li4udGhpcy5wcm9wc30gZGV0YWlscz17dGhpcy5zdGF0ZS5kYXRhfSBzdWJtaXQ9e3RoaXMuc3VibWl0UmF0aW5nfSBvYmo9e2RhdGFfb2JqfSByYXRpbmdfaWQ9e3RoaXMuc3RhdGUucmF0aW5nX2lkfSBzZWxlY3RlZF9yYXRpbmc9e3RoaXMuc3RhdGUuc2VsZWN0ZWRSYXRpbmd9IGNvbXBsaW1lbnRzPXt0aGlzLnN0YXRlLmNvbXBsaW1lbnRzfSAvPilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoXCJcIik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhdGluZ1Byb2ZpbGVDYXJkO1xuXG5cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuLy8gaW1wb3J0IFN0YXJWaWV3IGZyb20gJy4vU3RhclZpZXcuanMnXG5cbmNsYXNzIFJldmlld1BvcFVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgICAgc2VsZWN0ZWRSYXRpbmc6IDAsXG4gICAgICAgICAgICByYXRpbmdfaWQ6IG51bGwsXG4gICAgICAgICAgICBjb21wbGltZW50czogW10sXG4gICAgICAgICAgICByZXZpZXdfZmllbGQ6ICcnLFxuICAgICAgICAgICAgc2VsZWN0ZWRfY29tcGxpbWVudHM6IFtdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IHRoaXMucHJvcHMuZGV0YWlscyB9KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRSYXRpbmc6IHRoaXMucHJvcHMuc2VsZWN0ZWRfcmF0aW5nIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21wbGltZW50czogdGhpcy5wcm9wcy5jb21wbGltZW50cyB9KVxuICAgIH1cblxuICAgIHNlbGVjdFJhdGluZyh4KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFJhdGluZzogeCB9KVxuICAgIH1cblxuICAgIGRlY2xpbmVSYXRpbmcodHlwZSwgaWQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5jbG9zZUFwcG9pbnRtZW50UG9wVXAoaWQsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmICghZXJyICYmIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUG9wdXAgQ2xvc2VkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucHJvcHMuc3VibWl0KHt9LCAxKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogbnVsbCB9KVxuICAgICAgICB0aGlzLnByb3BzLnBvcFVwU3RhdGUoKVxuICAgIH1cblxuICAgIGhhbmRsZVJldmlld0NoYW5nZShlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXZpZXdfZmllbGQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUNvbXBsaW1lbnRDaGFuZ2UoaWQpIHtcbiAgICAgICAgbGV0IGNvbXBsaW1lbnRzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZF9jb21wbGltZW50cztcbiAgICAgICAgY29tcGxpbWVudHMucHVzaChpZCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZF9jb21wbGltZW50czogY29tcGxpbWVudHMgfSk7XG4gICAgfVxuXG4gICAgc3VibWl0UmF0aW5nKCkge1xuICAgICAgICBsZXQgcG9zdF9kYXRhID0geyAnaWQnOiB0aGlzLnByb3BzLnJhdGluZ19pZCwgJ3JhdGluZyc6IHRoaXMuc3RhdGUuc2VsZWN0ZWRSYXRpbmcsICdyZXZpZXcnOiB0aGlzLnN0YXRlLnJldmlld19maWVsZCwgJ2NvbXBsaW1lbnQnOiB0aGlzLnN0YXRlLnNlbGVjdGVkX2NvbXBsaW1lbnRzLCAnYXBwb2ludG1lbnRfaWQnOiB0aGlzLnN0YXRlLmRhdGEuaWQgfTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IG51bGwgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5zdWJtaXQocG9zdF9kYXRhLCAwKVxuICAgIH1cblxuICAgIHRoYW5Zb3VCdXR0b24oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByYXRpbmdfZG9uZTogZmFsc2UgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5zdGF0ZS5kYXRhKSAhPSBcInVuZGVmaW5lZFwiICYmIHRoaXMuc3RhdGUuZGF0YSAhPSBudWxsICYmIHRoaXMuc3RhdGUuZGF0YS5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhaXRpbmctcG9wdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLXJhdGluZy1jYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGUtY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaGFyZSB5b3VyIEZlZWRiYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxpbWcgb25DbGljaz17dGhpcy5kZWNsaW5lUmF0aW5nLmJpbmQodGhpcywgdGhpcy5wcm9wcy5vYmoudHlwZSwgdGhpcy5zdGF0ZS5kYXRhLmlkKX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcnQtY2xvc2Uuc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mICh0aGlzLnByb3BzLnNlbGVjdGVkSG9zcGl0YWwpICE9ICd1bmRlZmluZWQnICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRIb3NwaXRhbC5pZCA/XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRlLXNlY2VsdGlvbi1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJydC1wYXItc2VsZWN0XCI+e3RoaXMucHJvcHMuc2VsZWN0ZWRIb3NwaXRhbC5ob3NwaXRhbF9uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRlLWNhcmQtZG9jLWR0bHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5vYmoudGh1bWJuYWlsfSBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nLXJvdW5kIFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRlLWRvYy1kdGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicnQtZG9jLW5tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5vYmoubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5vYmoucXVhbGlmaWNhdGlvbn0ge3RoaXMucHJvcHMub2JqLnBpcGV9IHt0aGlzLnByb3BzLm9iai5zcGVjaWFsaXphdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0ZS1zdGFyLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsxLCAyLCAzLCA0LCA1XS5tYXAoKHgsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8aW1nIGtleT17aX0gb25DbGljaz17dGhpcy5zZWxlY3RSYXRpbmcuYmluZCh0aGlzLCB4KX0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtcIi9hc3NldHMvaW1nL2N1c3RvbWVyLWljb25zL1wiICsgKHRoaXMuc3RhdGUuc2VsZWN0ZWRSYXRpbmcgPiAwICYmIHRoaXMuc3RhdGUuc2VsZWN0ZWRSYXRpbmcgPj0geCA/IFwiXCIgOiBcInVuXCIpICsgXCJzZWxlY3RlZC1zdGFyLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxTdGFyVmlldyBoYW5kbGVTZWxlY3Q9e3RoaXMuaGFuZGxlc2VsZWN0UmF0aW5nfSBzZWxlY3RlZFJhdGluZz17dGhpcy5zdGF0ZS5zZWxlY3RlZFJhdGluZ30gLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGUtY29tcGxpbWVudC1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY21wbG1udC1wYXJhXCI+R2l2ZSB5b3VyIGNvbXBsaW1lbnQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvbXBsaW1lbnQtbGlzaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvbXBsaW1lbnRzLm1hcChjb21wID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wLnR5cGUgPT0gdGhpcy5wcm9wcy5vYmoudHlwZSAmJiB0aGlzLnN0YXRlLnNlbGVjdGVkUmF0aW5nID09IGNvbXAucmF0aW5nX2xldmVsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtjb21wLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNrLWJ4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyYXRlLWZlZWQtdGV4dFwiPntjb21wLm1lc3NhZ2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNvbXBsaW1lbnRDaGFuZ2UuYmluZCh0aGlzLCBjb21wLmlkKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0ZS1zdWJtaXQtY21ubnQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBtYXhMZW5ndGg9XCI1MDAwXCIgcGxhY2Vob2xkZXI9XCJMZWF2ZSBhIHJldmlld1wiIHJvd3M9XCIyXCIgdmFsdWU9e3RoaXMuc3RhdGUucmV2aWV3X2ZpZWxkfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVSZXZpZXdDaGFuZ2UuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyYXRlLXN1Ym1pdC1idG5cIiBvbkNsaWNrPXt0aGlzLnN1Ym1pdFJhdGluZy5iaW5kKHRoaXMpfT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICg8ZGl2PjwvZGl2ID4pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3UG9wVXA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJztcbmltcG9ydCBMb2FkYWJsZSBmcm9tICdyZWFjdC1sb2FkYWJsZSdcbmltcG9ydCB7IGZldGNoUmVmZXJyYWxDb2RlIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9pbmRleC5qcyc7XG5pbXBvcnQgU1RPUkFHRSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBDb3B5VG9DbGlwYm9hcmQgfSBmcm9tICdyZWFjdC1jb3B5LXRvLWNsaXBib2FyZCc7XG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2Jhcic7XG5pbXBvcnQgQ09ORklHIGZyb20gXCIuLi8uLi8uLi9jb25maWcvaW5kZXguanNcIjtcblxuLy8gaW1wb3J0IHsgRmFjZWJvb2tTaGFyZUJ1dHRvbiwgVHdpdHRlclNoYXJlQnV0dG9uLCBGYWNlYm9va0ljb24sIFR3aXR0ZXJJY29uLCBFbWFpbFNoYXJlQnV0dG9uLCBFbWFpbEljb24gfSBmcm9tICdyZWFjdC1zaGFyZSc7XG5cbmNvbnN0IGxvYWRpbmcgPSAoKSA9PiA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdfTGluZWJhcl9jb250YWluZXJcIj5cblx0PGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nX2Jhcl9saW5lXCI+PC9kaXY+XG48L2Rpdj5cblxuY29uc3QgUmVhY3RTaGFyZSA9IExvYWRhYmxlKHtcblx0bG9hZGVyOiAoKSA9PiBpbXBvcnQoJ3JlYWN0LXNoYXJlJyksXG5cdG1vZHVsZXM6IFsncmVhY3Qtc2hhcmUnXSxcblx0d2VicGFjazogKCkgPT4gW3JlcXVpcmUucmVzb2x2ZVdlYWsoJ3JlYWN0LXNoYXJlJyldLFxuXHRsb2FkaW5nLFxufSlcblxuY2xhc3MgVGhhbmtZb3VQb3BVcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRyZWZlcnJhbENvZGU6ICcnXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0aWYgKFNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcblx0XHRcdGZldGNoUmVmZXJyYWxDb2RlKCkoKS50aGVuKChyZXMpID0+IHtcblx0XHRcdFx0aWYgKHJlcyAmJiByZXMuY29kZSkge1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyByZWZlcnJhbENvZGU6IHJlcy5jb2RlIH0pXG5cdFx0XHRcdH1cblx0XHRcdH0pLmNhdGNoKChlKSA9PiB7XG5cblx0XHRcdH0pXG5cdFx0fVxuXHRcdHRoaXMuZ2V0TGluaygpO1xuXHR9XG5cblx0Z2FUcmFja2luZyhidG5UeXBlLCBldmVudCkge1xuXHRcdGxldCBhY3Rpb25WYWxcblx0XHRsZXQgZXZlbnRWYWxcblx0XHRpZiAoYnRuVHlwZSA9PSAnZmInKSB7XG5cdFx0XHRhY3Rpb25WYWwgPSAnQm9va2luZ1JhdGluZ0ZiU2hhcmUnXG5cdFx0XHRldmVudFZhbCA9ICdib29raW5nLXJhdGluZy1mYi1zaGFyZSdcblx0XHR9IGVsc2UgaWYgKGJ0blR5cGUgPT0gJ3R3aXR0ZXInKSB7XG5cdFx0XHRhY3Rpb25WYWwgPSAnQm9va2luZ1JhdGluZ1R3aXR0ZXJTaGFyZSdcblx0XHRcdGV2ZW50VmFsID0gJ2Jvb2tpbmctcmF0aW5nLXR3aXR0ZXItc2hhcmUnXG5cdFx0fSBlbHNlIGlmIChidG5UeXBlID09ICd3aHRzYXBwJykge1xuXHRcdFx0YWN0aW9uVmFsID0gJ0Jvb2tpbmdSYXRpbmdXaGF0c0FwcFNoYXJlJ1xuXHRcdFx0ZXZlbnRWYWwgPSAnYm9va2luZy1yYXRpbmctd2hhdHNhcHAtc2hhcmUnXG5cdFx0fSBlbHNlIHtcblx0XHRcdGFjdGlvblZhbCA9ICdCb29raW5nUmF0aW5nRW1haWxTaGFyZSdcblx0XHRcdGV2ZW50VmFsID0gJ2Jvb2tpbmctcmF0aW5nLWVtYWlsLXNoYXJlJ1xuXHRcdH1cblx0XHRsZXQgZGF0YSA9IHtcblx0XHRcdCdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiBhY3Rpb25WYWwsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogZXZlbnRWYWwsXG5cdFx0fVxuXHRcdEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cdH1cblxuXHRnZXRMaW5rKCkge1xuXHRcdHJldHVybiBgJHtDT05GSUcuQVBJX0JBU0VfVVJMfS9sb2dpbj9yZWZlcnJhbD0ke3RoaXMuc3RhdGUucmVmZXJyYWxDb2RlfWBcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRsZXQgcHJvZmlsZURhdGEgPSAnJ1xuXHRcdGlmICh0aGlzLnByb3BzLnByb2ZpbGVzICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlKSB7XG5cdFx0XHRwcm9maWxlRGF0YSA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdXG5cdFx0fVxuXHRcdGxldCBuYW1lID0gXCJcIlxuXHRcdGlmIChwcm9maWxlRGF0YSAmJiBwcm9maWxlRGF0YS5uYW1lKSB7XG5cdFx0XHRuYW1lID0gcHJvZmlsZURhdGEubmFtZVxuXHRcdH1cblx0XHRsZXQgc29jaWFsX21lc3NhZ2Vcblx0XHRsZXQgZG9jdG9yX25hbWVcblx0XHRpZiAodGhpcy5wcm9wcy5hcHBvaW50bWVudERhdGEgJiYgdGhpcy5wcm9wcy5hcHBvaW50bWVudERhdGEudHlwZSA9PSAnZG9jdG9yJykge1xuXHRcdFx0ZG9jdG9yX25hbWUgPSB0aGlzLnByb3BzLmFwcG9pbnRtZW50RGF0YS5kb2N0b3IubmFtZVxuXHRcdFx0c29jaWFsX21lc3NhZ2UgPSBgVXNlZCBkb2NwcmltZSB0byBib29rIERyLiAke2RvY3Rvcl9uYW1lfS4gSGFkIGFuIGV4Y2VsbGVudCBleHBlcmllbmNlLiBJIGxvdmUgaG93IGNvbnZlbmllbnQgYW5kIGVhc3kgdG8gdXNlIGl0IGlzLiBPbiB0b3Agb2YgaXQsIHlvdSBnZXQgc28gbWFueSBkaXNjb3VudHMuIFdobyB0aG91Z2h0IGhlYWx0aGNhcmUgY2FuIGJlIHNvIGFmZm9yZGFibGUuIE15IGZpcnN0IGNob2ljZSBmb3IgbXkgZ29vZCBoZWFsdGghIFlvdSBjYW4gYWxzbyBnZXQg4oK5IDUwIGlmIHlvdSBzaWdudXAgd2l0aCBteSByZWZlcnJhbCBjb2RlICR7dGhpcy5zdGF0ZS5yZWZlcnJhbENvZGV9LmBcblx0XHR9IGVsc2Uge1xuXHRcdFx0c29jaWFsX21lc3NhZ2UgPSBgVXNlZCBkb2NwcmltZSB0byBib29rIGEgbGFiIHRlc3QuIEhhZCBhbiBleGNlbGxlbnQgZXhwZXJpZW5jZS4gSSBsb3ZlIGhvdyBjb252ZW5pZW50IGFuZCBlYXN5IHRvIHVzZSBpdCBpcy4gT24gdG9wIG9mIGl0LCB5b3UgZ2V0IHNvIG1hbnkgZGlzY291bnRzLiBXaG8gdGhvdWdodCBoZWFsdGhjYXJlIGNhbiBiZSBzbyBhZmZvcmRhYmxlLiBNeSBmaXJzdCBjaG9pY2UgZm9yIG15IGdvb2QgaGVhbHRoISBZb3UgY2FuIGFsc28gZ2V0IOKCuSA1MCBpZiB5b3Ugc2lnbnVwIHdpdGggbXkgcmVmZXJyYWwgY29kZSAke3RoaXMuc3RhdGUucmVmZXJyYWxDb2RlfS5gXG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJhaXRpbmctcG9wdXBcIj5cblx0XHRcdFx0PGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJywgYm9yZGVyUmFkaXVzOiA1LCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fSA+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0eXAtY2xvc2VcIiBvbkNsaWNrPXt0aGlzLnByb3BzLnN1Ym1pdH0+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvY2xvc2UtYmxhY2suc3ZnJ30gLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhvbWUtcmF0aW5nLWNhcmRcIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAwIH19ID5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGhhbmt5b3UtcG9wdXAtaGVhZFwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2Rwc21pbGUucG5nXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdDxwPlRoYW5rcyB7bmFtZX08L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRobmtzLWNvbnRlbnRcIj5Zb3VyIGZlZWRiYWNrIG1hdHRlcnMhPC9wPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGhua3MtY29udGVudCBmdy01MDBcIj5SRUZFUiAmYW1wOyBFQVJOITwvcD5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRoYW5rcy1zdWItY29udGVudCBtcmItMTBcIj5SZWZlciB5b3VyIGZyaWVuZHMgJiBlYXJuIOKCuSAyMDA8L3A+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFJlYWN0U2hhcmUgJiYgUmVhY3RTaGFyZS5GYWNlYm9va1NoYXJlQnV0dG9uICYmICh0aGlzLnByb3BzLnNlbGVjdGVkUmF0aW5nID09IDQgfHwgdGhpcy5wcm9wcy5zZWxlY3RlZFJhdGluZyA9PSA1KSA/XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvLXN0eWxpbmcgZC1mbGV4XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZhY2Vib29rSWNvbi1zdHlsaW5nXCIgb25DbGljaz17dGhpcy5nYVRyYWNraW5nLmJpbmQodGhpcywgJ2ZiJyl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmVhY3RTaGFyZS5GYWNlYm9va1NoYXJlQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXJsPVwiaHR0cHM6Ly9kb2NwcmltZS5jb21cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHF1b3RlPXtzb2NpYWxfbWVzc2FnZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJidXR0b25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmVhY3RTaGFyZS5GYWNlYm9va0ljb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNpemU9ezMyfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cm91bmQ9e2ZhbHNlfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1JlYWN0U2hhcmUuRmFjZWJvb2tTaGFyZUJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+U2hhcmUgcmVmZXJyYWwgbGluazwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0d2l0dGVySWNvbi1zdHlsaW5nXCIgb25DbGljaz17dGhpcy5nYVRyYWNraW5nLmJpbmQodGhpcywgJ3R3aXR0ZXInKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxSZWFjdFNoYXJlLlR3aXR0ZXJTaGFyZUJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVybD1cImh0dHBzOi8vZG9jcHJpbWUuY29tXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZT17c29jaWFsX21lc3NhZ2V9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnV0dG9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFJlYWN0U2hhcmUuVHdpdHRlckljb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNpemU9ezMyfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cm91bmQ9e2ZhbHNlfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1JlYWN0U2hhcmUuVHdpdHRlclNoYXJlQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5Ud2VldCByZWZlcnJhbCBsaW5rPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImVtYWlsSWNvbi1zdHlsaW5nXCIgb25DbGljaz17dGhpcy5nYVRyYWNraW5nLmJpbmQodGhpcywgJ2VtYWlsJyl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmVhY3RTaGFyZS5FbWFpbFNoYXJlQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXJsPVwiaHR0cHM6Ly9kb2NwcmltZS5jb21cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN1YmplY3Q9XCJSZWZlciB0byBlYXJuXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib2R5PXtgU2F2ZSB1cHRvIDUwJSBvbiBkb2N0b3IgYXBwb2ludG1lbnRzIGFuZCBsYWIgdGVzdHMuIFNpZ24gdXAgb24gZG9jcHJpbWUuY29tIHdpdGggbXkgY29kZSAke3RoaXMuc3RhdGUucmVmZXJyYWxDb2RlfSBhbmQgZ2V0IOKCuSA1MC4gVmlzaXQgJHtDT05GSUcuQVBJX0JBU0VfVVJMfS9sb2dpbj9yZWZlcnJhbD0ke3RoaXMuc3RhdGUucmVmZXJyYWxDb2RlfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnV0dG9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFJlYWN0U2hhcmUuRW1haWxJY29uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaXplPXszMn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJvdW5kPXtmYWxzZX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9SZWFjdFNoYXJlLkVtYWlsU2hhcmVCdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPkVtYWlsIHJlZmVycmFsIGxpbms8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2h0c2FwcEljb24tc3R5bGluZ1wiIG9uQ2xpY2s9e3RoaXMuZ2FUcmFja2luZy5iaW5kKHRoaXMsICd3aHRzYXBwJyl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJ3aHRzQXBwaWNvXCIgaHJlZj17XCJ3aGF0c2FwcDovL3NlbmQ/dGV4dD1cIiArIHNvY2lhbF9tZXNzYWdlfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3dhLWxvZ28uc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwicmVmcldodHNJY290Y3NcIj5XaGF0c2FwcCByZWZlcnJhbCBsaW5rPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ6IFwiXCJcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDxDb3B5VG9DbGlwYm9hcmQgdGV4dD17dGhpcy5nZXRMaW5rKCl9IG9uQ29weT17KCkgPT4geyBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUmVmZXJyYWwgTGluayBDb3BpZWRcIiB9KTsgfX0gPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19ID5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvY29weS5zdmcnfSBzdHlsZT17eyBtYXJnaW5SaWdodDogOCwgd2lkdGg6IDIwIH19IC8+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZ3LTUwMFwiPkNvcHkgcmVmZXJyYWwgbGluazwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L0NvcHlUb0NsaXBib2FyZD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1ydC0yMFwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjQ3LCAxMzQsIDQ5LCAwLjIpJywgcGFkZGluZzogMTAsIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IDUsIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiA1LCBjdXJzb3I6ICdwb2ludGVyJyB9fT5cblx0XHRcdFx0XHRcdDxhIGhyZWY9XCIvcmVmZXJyYWxcIiBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1wcmltYXJ5XCI+SG93IHJlZmVycmFsIHdvcmtzPzwvYT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhhbmtZb3VQb3BVcDsiXSwic291cmNlUm9vdCI6IiJ9