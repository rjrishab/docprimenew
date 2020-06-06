exports.ids = [90];
exports.modules = {

/***/ "./dev/js/components/commons/Loader/Loader.js":
/*!****************************************************!*\
  !*** ./dev/js/components/commons/Loader/Loader.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Loader extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return _react2.default.createElement(
            "div",
            { className: this.props.classType || "loaderCircular" },
            _react2.default.createElement("div", { className: "dp-loader" }),
            this.props.iFramePopup ? _react2.default.createElement(
                "p",
                { className: "fw-500 mrt-10" },
                "Redirecting you to Pharmeasy website..."
            ) : ''
        );
    }
}

exports.default = Loader;

/***/ }),

/***/ "./dev/js/components/commons/Loader/index.js":
/*!***************************************************!*\
  !*** ./dev/js/components/commons/Loader/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Loader = __webpack_require__(/*! ./Loader */ "./dev/js/components/commons/Loader/Loader.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Loader2.default;

/***/ }),

/***/ "./dev/js/components/insurance/insuranceCertificate.js":
/*!*************************************************************!*\
  !*** ./dev/js/components/insurance/insuranceCertificate.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _DesktopProfileHeader = __webpack_require__(/*! ../../components/commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _ChatPanel = __webpack_require__(/*! ../../components/commons/ChatPanel */ "./dev/js/components/commons/ChatPanel/index.js");

var _ChatPanel2 = _interopRequireDefault(_ChatPanel);

var _Loader = __webpack_require__(/*! ../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _initialsPicture = __webpack_require__(/*! ../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class InsuranceCertificateView extends _react2.default.Component {
	constructor(props) {
		super(props);
		this.state = {
			showCancelPopup: false
		};
	}

	getGetOrdinal(n) {
		var s = ["th", "st", "nd", "rd"],
		    v = n % 100;
		return n + (s[(v - 20) % 10] || s[v] || s[0]);
	}

	cancelPolicy() {
		if (this.props.get_insured_profile && this.props.get_insured_profile.is_cancel_allowed) {
			this.props.history.push('/insurance/cancelpolicy');
		} else {
			this.setState({ showCancelPopup: true });
		}
	}

	hideCancelPolicyPopup() {
		this.setState({ showCancelPopup: false });
	}

	goToEndorsement() {
		this.props.clearInsurance(); // to reset insurance data in store
		this.props.history.push('/insurance/insurance-endorsement-details');
	}

	goToBooking() {
		let data = this.props.avail_now_data;
		this.props.clearAvailNowInsurance(); // to clear avail now from store
		if (data && Object.keys(data).length > 0) {
			if (data.type == 'lab') {
				this.props.history.push(`/lab/${data.id}/book`);
			} else {
				this.props.history.push(`/opd/doctor/${data.id}/${data.selectedClinic}/bookdetails`);
			}
		}
	}

	render() {
		let parsed = queryString.parse(this.props.location.search);
		if (Object.keys(this.props.get_insured_profile).length > 0) {
			let primaryMember;
			let FamilyMembers;
			{
				primaryMember = this.props.get_insured_profile.insured_members.filter(x => x.relation == 'self');
				FamilyMembers = this.props.get_insured_profile.insured_members.filter(x => x.relation != 'self');
			}
			var purchase_date = new Date(this.props.get_insured_profile.purchase_date);
			let purchase_time = purchase_date.toTimeString();
			let purchaseTime = purchase_time.split(" ");
			purchase_date = purchase_date.toDateString();
			let purchaseDate = purchase_date.split(" ");
			let expiry_date = new Date(this.props.get_insured_profile.expiry_date);
			let expiry_time = expiry_date.toTimeString();
			let expiryTime = expiry_time.split(" ");
			expiry_date = expiry_date.toDateString();
			let expiryDate = expiry_date.split(" ");
			return _react2.default.createElement(
				'div',
				{ className: 'profile-body-wrap', style: { paddingBottom: 80 } },
				_react2.default.createElement(_DesktopProfileHeader2.default, { showPackageStrip: true }),
				this.state.showCancelPopup ? _react2.default.createElement(
					'section',
					{ className: 'error-msg-pop' },
					_react2.default.createElement('div', { className: 'cancel-overlay' }),
					_react2.default.createElement(
						'div',
						{ className: 'popup-error', style: { width: '300px' } },
						_react2.default.createElement(
							'div',
							{ className: 'error-head' },
							_react2.default.createElement('img', { className: 'errorInfoImg', src: "/assets" + "/img/infoerror.svg" }),
							"Alert"
						),
						_react2.default.createElement(
							'div',
							{ className: 'cross-btn' },
							_react2.default.createElement('img', { src: "/assets" + "/img/icons/close.png", alt: 'close', onClick: this.hideCancelPolicyPopup.bind(this) })
						),
						_react2.default.createElement(
							'p',
							{ className: 'error-msg' },
							'Your policy cannot be cancelled as you have already completed atleast 1 claim under your policy'
						),
						_react2.default.createElement(
							'p',
							{ className: 'error-msg subAlertins' },
							'for any other query you can call us at ',
							_react2.default.createElement(
								'span',
								null,
								'1800-123-9419'
							)
						)
					)
				) : '',
				_react2.default.createElement(
					'section',
					{ className: 'container parent-section book-appointment-section container-top-margin' },
					_react2.default.createElement(
						'div',
						{ className: 'row main-row parent-section-row' },
						_react2.default.createElement(
							'div',
							{ className: 'col-12 col-md-7 col-lg-7' },
							_react2.default.createElement(
								'section',
								{ className: 'profile-book-screen' },
								_react2.default.createElement(
									'div',
									{ className: 'widget' },
									_react2.default.createElement(
										'div',
										{ className: 'widget-content' },
										this.props.get_insured_profile && parsed.show_congo ? _react2.default.createElement(
											'div',
											null,
											_react2.default.createElement(
												'p',
												{ className: 'fw-500 ins-congo-text text-primary text-center mrb-10' },
												'Congratulations !'
											),
											_react2.default.createElement(
												'p',
												{ className: 'fw-500 text-center mrb-10' },
												'Your Group Out-patient Insurance has been issued'
											)
										) : '',
										_react2.default.createElement(
											'div',
											{ className: 'ins-flex mrb-20' },
											_react2.default.createElement('img', { width: '100', src: 'https://qacdn.docprime.com/media/insurer/images/apllogo.png' }),
											_react2.default.createElement(
												'p',
												{ className: 'fw-500' },
												'Group Out-Patient Insurance'
											),
											this.props.get_insured_profile ? _react2.default.createElement(
												'div',
												{ style: { flexGrow: '0', flexShrink: '0' } },
												_react2.default.createElement('img', { width: '30', src: "/assets" + "/img/chk-green.svg", style: { verticalAlign: '-31px' } }),
												_react2.default.createElement(
													'span',
													{ className: 'fw-500', style: { color: '#4fc243', verticalAlign: '-21px' } },
													'Active'
												)
											) : ''
										),
										_react2.default.createElement(
											'div',
											{ style: { display: 'flex', alignItems: 'center', justifyContent: 'flex-end' } },
											_react2.default.createElement(
												'a',
												{ style: { fontWeight: '500', fontSize: '12px', color: '#f78631', textDecoration: 'underline', cursor: 'pointer' }, href: '/insurance/network', onClick: e => {
														e.preventDefault();
														let data = {
															'Category': 'ConsumerApp', 'Action': 'InsuranceNetworkCertificate', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'insurance-network-certificate', 'click_value': 'insurance-network-certificate'
														};
														_gtm2.default.sendEvent({ data: data });
														this.props.history.push('/insurance/network');
													} },
												'View Network'
											)
										)
									),
									_react2.default.createElement(
										'div',
										{ className: 'ins-flex justify-content-between ins-date-row mrb-0' },
										_react2.default.createElement(
											'div',
											{ className: 'ins-date text-center' },
											_react2.default.createElement(
												'p',
												{ className: 'fw-500 mrb-5' },
												'Policy issue Date'
											),
											_react2.default.createElement(
												'p',
												{ className: 'fw-700' },
												`${this.getGetOrdinal(purchaseDate[2])} ${purchaseDate[1]} ${purchaseDate[3]}`
											)
										),
										_react2.default.createElement(
											'div',
											{ className: 'ins-date text-center' },
											_react2.default.createElement(
												'p',
												{ className: 'fw-500 mrb-5' },
												'Policy expiry Date'
											),
											_react2.default.createElement(
												'p',
												{ className: 'fw-700' },
												`${this.getGetOrdinal(expiryDate[2])} ${expiryDate[1]} ${expiryDate[3]}`
											)
										),
										_react2.default.createElement(
											'div',
											{ className: 'ins-date text-center' },
											_react2.default.createElement(
												'p',
												{ className: 'fw-500 mrb-5' },
												'Policy Number'
											),
											_react2.default.createElement(
												'p',
												{ className: 'fw-700' },
												this.props.get_insured_profile.policy_number
											)
										)
									),
									_react2.default.createElement(
										'div',
										{ className: 'widget-content ins-bg-grey' },
										_react2.default.createElement(
											'div',
											{ className: 'container ins-details-container' },
											_react2.default.createElement(
												'div',
												{ className: 'row ins-details-row no-gutters' },
												_react2.default.createElement(
													'div',
													{ className: 'col-6 ins-details-div' },
													_react2.default.createElement(
														'p',
														{ className: 'ins-gr-text fw-500' },
														'Annual Premium Paid:'
													)
												),
												_react2.default.createElement(
													'div',
													{ className: 'col-6 ins-details-div' },
													_react2.default.createElement(
														'p',
														{ className: 'ins-bl-text fw-500' },
														'\u20B9 ',
														this.props.get_insured_profile.premium_amount
													)
												)
											),
											_react2.default.createElement(
												'div',
												{ className: 'row ins-details-row no-gutters' },
												_react2.default.createElement(
													'div',
													{ className: 'col-6 ins-details-div' },
													_react2.default.createElement(
														'p',
														{ className: 'ins-gr-text fw-500' },
														'Proposer Name:'
													)
												),
												_react2.default.createElement(
													'div',
													{ className: 'col-6 ins-details-div' },
													_react2.default.createElement(
														'p',
														{ className: 'ins-bl-text fw-500', style: { 'textTransform': 'capitalize' } },
														this.props.get_insured_profile.proposer_name[0].first_name,
														' ',
														this.props.get_insured_profile.proposer_name[0].middle_name,
														' ',
														this.props.get_insured_profile.proposer_name[0].last_name
													)
												)
											),
											_react2.default.createElement(
												'div',
												{ className: 'row ins-details-row no-gutters' },
												_react2.default.createElement(
													'div',
													{ className: 'col-6 ins-details-div' },
													_react2.default.createElement(
														'p',
														{ className: 'ins-gr-text fw-500' },
														'Covered Members:'
													)
												),
												_react2.default.createElement(
													'div',
													{ className: 'col-6 ins-details-div' },
													primaryMember && primaryMember.length > 0 ? _react2.default.createElement(
														'p',
														{ key: 0, style: { 'textTransform': 'capitalize' }, className: 'ins-bl-text fw-500' },
														_react2.default.createElement(
															'span',
															{ className: 'fw-400' },
															primaryMember[0].relation,
															' : - '
														),
														primaryMember[0].first_name,
														' ',
														primaryMember[0].middle_name,
														' ',
														primaryMember[0].last_name
													) : '',
													Object.entries(FamilyMembers).map(function ([key, value]) {
														return _react2.default.createElement(
															'p',
															{ key: key, style: { 'textTransform': 'capitalize' }, className: 'ins-bl-text fw-500' },
															_react2.default.createElement(
																'span',
																{ className: 'fw-400' },
																value.relation,
																' : - '
															),
															value.first_name,
															' ',
															value.middle_name,
															' ',
															value.last_name
														);
													})
												)
											)
										)
									)
								),
								this.props.get_insured_profile && this.props.get_insured_profile.is_endorsement_allowed ? _react2.default.createElement(
									'a',
									{ className: 'ins-open-endrs', onClick: this.goToEndorsement.bind(this) },
									'click here to update insured members details',
									_react2.default.createElement('img', { className: 'ins-rgt-endrs', src: "/assets" + "/img/right-sc.svg" }),
									' '
								) : '',
								this.props.avail_now_data && Object.keys(this.props.avail_now_data).length > 0 ? _react2.default.createElement(
									'div',
									{ className: 'widget mrb-15 mrng-top-12', onClick: this.goToBooking.bind(this), style: { cursor: 'pointer' } },
									_react2.default.createElement(
										'div',
										{ className: 'widget-header dr-qucik-info' },
										_react2.default.createElement(
											'div',
											{ style: { cursor: 'pointer' } },
											_react2.default.createElement(
												_initialsPicture2.default,
												{ name: this.props.avail_now_data.name, has_image: !!this.props.avail_now_data.thumbnail, className: 'initialsPicture-dp docCardIntPic' },
												_react2.default.createElement('img', { src: this.props.avail_now_data.thumbnail, style: { width: '60px', height: '60px' }, className: 'img-fluid img-round' })
											)
										),
										_react2.default.createElement(
											'div',
											{ className: 'dr-profile d-flex align-items-center justify-content-between' },
											_react2.default.createElement(
												'div',
												null,
												_react2.default.createElement(
													'h1',
													{ className: 'dr-name' },
													this.props.avail_now_data.name,
													_react2.default.createElement('span', { className: 'nwDocViewPrf' })
												),
												_react2.default.createElement(
													'p',
													{ className: 'upd-colr' },
													'Continue Booking '
												)
											),
											_react2.default.createElement(
												'div',
												{ className: 'doc-insu-prfl-img' },
												_react2.default.createElement('img', { src: "/assets" + '/img/right-sc.svg' })
											)
										)
									)
								) : '',
								this.props.get_insured_profile && this.props.get_insured_profile.is_endorsement_exist ? _react2.default.createElement(
									'a',
									{ className: 'ins-open-endrs', style: { filter: 'grayscale(100%)' }, onClick: () => _nodeSnackbar2.default.show({ pos: 'bottom-center', text: 'Your last requested changes are in process. Therefore, we cannot take request for any new changes.' }) },
									'click here to update insured members details',
									_react2.default.createElement('img', { className: 'ins-rgt-endrs', src: "/assets" + "/img/right-sc.svg" }),
									' '
								) : ''
							),
							this.props.get_insured_profile && (this.props.get_insured_profile.insurance_status == 1 || this.props.get_insured_profile.insurance_status == 4 || this.props.get_insured_profile.insurance_status == 7) ? _react2.default.createElement(
								'div',
								{ className: 'sticky-btn fixed insuBtnsContainer' },
								_react2.default.createElement(
									'button',
									{ className: 'insu-left-white-btn', onClick: this.cancelPolicy.bind(this), style: { color: this.props.get_insured_profile.is_cancel_allowed ? '#f78631' : '#757575' } },
									'Cancel Policy'
								),
								_react2.default.createElement(
									'a',
									{ className: 'insu-right-orng-btn foot-btn-Anchr', href: this.props.get_insured_profile.coi_url, download: true, target: '_blank' },
									'Download Certificate of Insurance ',
									_react2.default.createElement(
										'span',
										{ className: 'foot-btn-sub-span' },
										'(Policy Document)'
									)
								)
							) : ''
						),
						_react2.default.createElement(_ChatPanel2.default, null)
					)
				)
			);
		} else {
			return _react2.default.createElement(
				'div',
				{ className: 'profile-body-wrap', style: { paddingBottom: 80 } },
				_react2.default.createElement(_DesktopProfileHeader2.default, { showPackageStrip: true }),
				_react2.default.createElement(_Loader2.default, null)
			);
		}
	}
}

exports.default = InsuranceCertificateView;

/***/ }),

/***/ "./dev/js/containers/insurance/InsuranceCertificate.js":
/*!*************************************************************!*\
  !*** ./dev/js/containers/insurance/InsuranceCertificate.js ***!
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

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _insuranceCertificate = __webpack_require__(/*! ../../components/insurance/insuranceCertificate.js */ "./dev/js/components/insurance/insuranceCertificate.js");

var _insuranceCertificate2 = _interopRequireDefault(_insuranceCertificate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class InsuranceCertificate extends _react2.default.Component {

    constructor(props) {
        super(props);
        this.state = {
            showBtn: false
        };
    }

    componentDidMount() {
        this.props.getInsuredProfile(); // to get insured members data and certification details
        // this.props.getInsuredProfile((resp)=>{
        //     if(resp && resp.coi_url !=''){
        //         this.setState({showBtn:false})
        //     }else{
        //         setTimeout(() => {
        //             this.props.getInsuredProfile()
        //         }, 500)
        //     }
        // } )      
    }
    render() {
        return _react2.default.createElement(_insuranceCertificate2.default, _extends({}, this.props, { showBtn: this.state.showBtn }));
    }
}

const mapStateToProps = state => {
    const USER = state.USER;
    let { insurnaceData, LOAD_INSURANCE, selected_plan, self_data_values, insured_member_list, get_insured_profile, avail_now_data } = state.INSURANCE;
    return {
        insurnaceData, LOAD_INSURANCE, selected_plan, USER, self_data_values, insured_member_list, get_insured_profile, avail_now_data
    };
};

const mapDispatchToProps = dispatch => {
    return {

        getInsuredProfile: cb => dispatch((0, _index.getInsuredProfile)(cb)),
        clearInsurance: () => dispatch((0, _index.clearInsurance)()),
        clearAvailNowInsurance: () => dispatch((0, _index.clearAvailNowInsurance)())

    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(InsuranceCertificate);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvaW5zdXJhbmNlL2luc3VyYW5jZUNlcnRpZmljYXRlLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2luc3VyYW5jZS9JbnN1cmFuY2VDZXJ0aWZpY2F0ZS5qcyJdLCJuYW1lcyI6WyJMb2FkZXIiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJyZW5kZXIiLCJjbGFzc1R5cGUiLCJpRnJhbWVQb3B1cCIsInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIkluc3VyYW5jZUNlcnRpZmljYXRlVmlldyIsInN0YXRlIiwic2hvd0NhbmNlbFBvcHVwIiwiZ2V0R2V0T3JkaW5hbCIsIm4iLCJzIiwidiIsImNhbmNlbFBvbGljeSIsImdldF9pbnN1cmVkX3Byb2ZpbGUiLCJpc19jYW5jZWxfYWxsb3dlZCIsImhpc3RvcnkiLCJwdXNoIiwic2V0U3RhdGUiLCJoaWRlQ2FuY2VsUG9saWN5UG9wdXAiLCJnb1RvRW5kb3JzZW1lbnQiLCJjbGVhckluc3VyYW5jZSIsImdvVG9Cb29raW5nIiwiZGF0YSIsImF2YWlsX25vd19kYXRhIiwiY2xlYXJBdmFpbE5vd0luc3VyYW5jZSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJ0eXBlIiwiaWQiLCJzZWxlY3RlZENsaW5pYyIsInBhcnNlZCIsInBhcnNlIiwibG9jYXRpb24iLCJzZWFyY2giLCJwcmltYXJ5TWVtYmVyIiwiRmFtaWx5TWVtYmVycyIsImluc3VyZWRfbWVtYmVycyIsImZpbHRlciIsIngiLCJyZWxhdGlvbiIsInB1cmNoYXNlX2RhdGUiLCJEYXRlIiwicHVyY2hhc2VfdGltZSIsInRvVGltZVN0cmluZyIsInB1cmNoYXNlVGltZSIsInNwbGl0IiwidG9EYXRlU3RyaW5nIiwicHVyY2hhc2VEYXRlIiwiZXhwaXJ5X2RhdGUiLCJleHBpcnlfdGltZSIsImV4cGlyeVRpbWUiLCJleHBpcnlEYXRlIiwicGFkZGluZ0JvdHRvbSIsIndpZHRoIiwiQVNTRVRTX0JBU0VfVVJMIiwiYmluZCIsInNob3dfY29uZ28iLCJmbGV4R3JvdyIsImZsZXhTaHJpbmsiLCJ2ZXJ0aWNhbEFsaWduIiwiY29sb3IiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwidGV4dERlY29yYXRpb24iLCJjdXJzb3IiLCJlIiwicHJldmVudERlZmF1bHQiLCJHVE0iLCJnZXRVc2VySWQiLCJzZW5kRXZlbnQiLCJwb2xpY3lfbnVtYmVyIiwicHJlbWl1bV9hbW91bnQiLCJwcm9wb3Nlcl9uYW1lIiwiZmlyc3RfbmFtZSIsIm1pZGRsZV9uYW1lIiwibGFzdF9uYW1lIiwiZW50cmllcyIsIm1hcCIsImtleSIsInZhbHVlIiwiaXNfZW5kb3JzZW1lbnRfYWxsb3dlZCIsIm5hbWUiLCJ0aHVtYm5haWwiLCJoZWlnaHQiLCJpc19lbmRvcnNlbWVudF9leGlzdCIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJpbnN1cmFuY2Vfc3RhdHVzIiwiY29pX3VybCIsIkluc3VyYW5jZUNlcnRpZmljYXRlIiwic2hvd0J0biIsImNvbXBvbmVudERpZE1vdW50IiwiZ2V0SW5zdXJlZFByb2ZpbGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJVU0VSIiwiaW5zdXJuYWNlRGF0YSIsIkxPQURfSU5TVVJBTkNFIiwic2VsZWN0ZWRfcGxhbiIsInNlbGZfZGF0YV92YWx1ZXMiLCJpbnN1cmVkX21lbWJlcl9saXN0IiwiSU5TVVJBTkNFIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsTUFBTUEs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MEJRLGtCQUExQixFQUE4Q1osb0JBQTlDLEMiLCJmaWxlIjoiOTAuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgTG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzVHlwZSB8fCBcImxvYWRlckNpcmN1bGFyXCJ9ID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRwLWxvYWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pRnJhbWVQb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTEwXCI+UmVkaXJlY3RpbmcgeW91IHRvIFBoYXJtZWFzeSB3ZWJzaXRlLi4uPC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXJcbiIsImltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInXG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBDaGF0UGFuZWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0NoYXRQYW5lbCdcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tbW9ucy9Mb2FkZXInXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgSW5pdGlhbHNQaWN0dXJlIGZyb20gJy4uL2NvbW1vbnMvaW5pdGlhbHNQaWN0dXJlJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuY2xhc3MgSW5zdXJhbmNlQ2VydGlmaWNhdGVWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2hvd0NhbmNlbFBvcHVwOiBmYWxzZVxuXHRcdH1cblx0fVxuXG5cdGdldEdldE9yZGluYWwobikge1xuXHRcdHZhciBzID0gW1widGhcIiwgXCJzdFwiLCBcIm5kXCIsIFwicmRcIl0sXG5cdFx0XHR2ID0gbiAlIDEwMDtcblx0XHRyZXR1cm4gbiArIChzWyh2IC0gMjApICUgMTBdIHx8IHNbdl0gfHwgc1swXSk7XG5cdH1cblxuXHRjYW5jZWxQb2xpY3koKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuZ2V0X2luc3VyZWRfcHJvZmlsZSAmJiB0aGlzLnByb3BzLmdldF9pbnN1cmVkX3Byb2ZpbGUuaXNfY2FuY2VsX2FsbG93ZWQpIHtcblx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaW5zdXJhbmNlL2NhbmNlbHBvbGljeScpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93Q2FuY2VsUG9wdXA6IHRydWUgfSlcblx0XHR9XG5cdH1cblxuXHRoaWRlQ2FuY2VsUG9saWN5UG9wdXAoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dDYW5jZWxQb3B1cDogZmFsc2UgfSlcblx0fVxuXG5cdGdvVG9FbmRvcnNlbWVudCgpIHtcblx0XHR0aGlzLnByb3BzLmNsZWFySW5zdXJhbmNlKCkgIC8vIHRvIHJlc2V0IGluc3VyYW5jZSBkYXRhIGluIHN0b3JlXG5cdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvaW5zdXJhbmNlLWVuZG9yc2VtZW50LWRldGFpbHMnKVxuXHR9XG5cblx0Z29Ub0Jvb2tpbmcoKSB7XG5cdFx0bGV0IGRhdGEgPSB0aGlzLnByb3BzLmF2YWlsX25vd19kYXRhXG5cdFx0dGhpcy5wcm9wcy5jbGVhckF2YWlsTm93SW5zdXJhbmNlKCkgLy8gdG8gY2xlYXIgYXZhaWwgbm93IGZyb20gc3RvcmVcblx0XHRpZiAoZGF0YSAmJiBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRpZiAoZGF0YS50eXBlID09ICdsYWInKSB7XG5cdFx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvbGFiLyR7ZGF0YS5pZH0vYm9va2ApXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL29wZC9kb2N0b3IvJHtkYXRhLmlkfS8ke2RhdGEuc2VsZWN0ZWRDbGluaWN9L2Jvb2tkZXRhaWxzYClcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXHRcdGlmIChPYmplY3Qua2V5cyh0aGlzLnByb3BzLmdldF9pbnN1cmVkX3Byb2ZpbGUpLmxlbmd0aCA+IDApIHtcblx0XHRcdGxldCBwcmltYXJ5TWVtYmVyXG5cdFx0XHRsZXQgRmFtaWx5TWVtYmVyc1xuXHRcdFx0e1xuXHRcdFx0XHRwcmltYXJ5TWVtYmVyID0gdGhpcy5wcm9wcy5nZXRfaW5zdXJlZF9wcm9maWxlLmluc3VyZWRfbWVtYmVycy5maWx0ZXIoeCA9PiB4LnJlbGF0aW9uID09ICdzZWxmJylcblx0XHRcdFx0RmFtaWx5TWVtYmVycyA9IHRoaXMucHJvcHMuZ2V0X2luc3VyZWRfcHJvZmlsZS5pbnN1cmVkX21lbWJlcnMuZmlsdGVyKHggPT4geC5yZWxhdGlvbiAhPSAnc2VsZicpXG5cblx0XHRcdH1cblx0XHRcdHZhciBwdXJjaGFzZV9kYXRlID0gbmV3IERhdGUodGhpcy5wcm9wcy5nZXRfaW5zdXJlZF9wcm9maWxlLnB1cmNoYXNlX2RhdGUpXG5cdFx0XHRsZXQgcHVyY2hhc2VfdGltZSA9IHB1cmNoYXNlX2RhdGUudG9UaW1lU3RyaW5nKClcblx0XHRcdGxldCBwdXJjaGFzZVRpbWUgPSBwdXJjaGFzZV90aW1lLnNwbGl0KFwiIFwiKVxuXHRcdFx0cHVyY2hhc2VfZGF0ZSA9IHB1cmNoYXNlX2RhdGUudG9EYXRlU3RyaW5nKClcblx0XHRcdGxldCBwdXJjaGFzZURhdGUgPSBwdXJjaGFzZV9kYXRlLnNwbGl0KFwiIFwiKVxuXHRcdFx0bGV0IGV4cGlyeV9kYXRlID0gbmV3IERhdGUodGhpcy5wcm9wcy5nZXRfaW5zdXJlZF9wcm9maWxlLmV4cGlyeV9kYXRlKVxuXHRcdFx0bGV0IGV4cGlyeV90aW1lID0gZXhwaXJ5X2RhdGUudG9UaW1lU3RyaW5nKClcblx0XHRcdGxldCBleHBpcnlUaW1lID0gZXhwaXJ5X3RpbWUuc3BsaXQoXCIgXCIpXG5cdFx0XHRleHBpcnlfZGF0ZSA9IGV4cGlyeV9kYXRlLnRvRGF0ZVN0cmluZygpXG5cdFx0XHRsZXQgZXhwaXJ5RGF0ZSA9IGV4cGlyeV9kYXRlLnNwbGl0KFwiIFwiKVxuXHRcdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiA4MCB9fSA+XG5cdFx0XHRcdDxQcm9maWxlSGVhZGVyIHNob3dQYWNrYWdlU3RyaXA9e3RydWV9Lz5cblx0XHRcdFx0e3RoaXMuc3RhdGUuc2hvd0NhbmNlbFBvcHVwID9cblx0XHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJlcnJvci1tc2ctcG9wXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbC1vdmVybGF5XCI+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcHVwLWVycm9yXCIgc3R5bGU9e3sgd2lkdGg6ICczMDBweCcgfX0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItaGVhZFwiPjxpbWcgY2xhc3NOYW1lPVwiZXJyb3JJbmZvSW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaW5mb2Vycm9yLnN2Z1wifSAvPntcIkFsZXJ0XCJ9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3Jvc3MtYnRuXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9jbG9zZS5wbmdcIn0gYWx0PVwiY2xvc2VcIiBvbkNsaWNrPXt0aGlzLmhpZGVDYW5jZWxQb2xpY3lQb3B1cC5iaW5kKHRoaXMpfSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZXJyb3ItbXNnXCI+WW91ciBwb2xpY3kgY2Fubm90IGJlIGNhbmNlbGxlZCBhcyB5b3UgaGF2ZSBhbHJlYWR5IGNvbXBsZXRlZCBhdGxlYXN0IDEgY2xhaW0gdW5kZXIgeW91ciBwb2xpY3k8L3A+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImVycm9yLW1zZyBzdWJBbGVydGluc1wiPmZvciBhbnkgb3RoZXIgcXVlcnkgeW91IGNhbiBjYWxsIHVzIGF0IDxzcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDE4MDAtMTIzLTk0MTlcblx0XHQgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj48L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHR9XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBwYXJlbnQtc2VjdGlvbiBib29rLWFwcG9pbnRtZW50LXNlY3Rpb24gY29udGFpbmVyLXRvcC1tYXJnaW5cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03XCI+XG5cdFx0XHRcdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2ZpbGUtYm9vay1zY3JlZW5cIj5cblx0XHRcdFx0XHRcdFx0XHR7Lyo8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uLW1hcmdpbi1ib3R0b21cIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IGNvbmctbWFyZ2luLWJ0bVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1maW5hbC1zY3JlZW4tY29udGluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1jYXJkLWhlYWRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLW5hbWUtaGVhZCBjZXJ0aWZpY2F0ZS13aWR0aFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHdpZHRoPVwiMTQwXCIgc3JjPXt0aGlzLnByb3BzLmdldF9pbnN1cmVkX3Byb2ZpbGUuaW5zdXJlcl9pbWd9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdE9QRCBJbnN1cmFuY2UgYnkgPHNwYW4+QXBvbGxvIE11bmljaDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJpbnMtYWN0aXZlLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+QWN0aXZlIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2hrLWdyZWVuLnN2Z1wifSAvPjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD4gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPkdyb3VwIE91dC1wYXRpZW50IEluc3VyYW5jZTxzcGFuIGNsYXNzTmFtZT1cImlucy1hY3RpdmUtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+QWN0aXZlIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2hrLWdyZWVuLnN2Z1wifSAvPjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1wb2xpY3ktZGF0ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLWZsZXgtY29udFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1wb2xpY3ktZGV0YWlsc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPlBvbGljeSBQdXJjaGFzZSBEYXRlPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPntgJHtwdXJjaGFzZURhdGVbMl19dGggJHtwdXJjaGFzZURhdGVbMV19ICR7cHVyY2hhc2VEYXRlWzNdfWB9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtcG9saWN5LWRldGFpbHNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD5WYWxpZCBVcHRvPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPntgJHtleHBpcnlEYXRlWzJdfXRoICR7ZXhwaXJ5RGF0ZVsxXX0gJHtleHBpcnlEYXRlWzNdfWB9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtcG9saWN5LW1lbWJlcnMtZGV0YWlsc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD48c3Bhbj5QcmVtaXVtPC9zcGFuPiA6IFJzIHt0aGlzLnByb3BzLmdldF9pbnN1cmVkX3Byb2ZpbGUucHJlbWl1bV9hbW91bnR9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBzdHlsZT17eyAndGV4dFRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJyB9fT48c3Bhbj5Qcm9wb3NlciBOYW1lIDwvc3Bhbj4gOiB7dGhpcy5wcm9wcy5nZXRfaW5zdXJlZF9wcm9maWxlLnByb3Bvc2VyX25hbWVbMF0uZmlyc3RfbmFtZX0ge3RoaXMucHJvcHMuZ2V0X2luc3VyZWRfcHJvZmlsZS5wcm9wb3Nlcl9uYW1lWzBdLm1pZGRsZV9uYW1lfSB7dGhpcy5wcm9wcy5nZXRfaW5zdXJlZF9wcm9maWxlLnByb3Bvc2VyX25hbWVbMF0ubGFzdF9uYW1lfTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+PHNwYW4+UG9saWN5IE51bWJlcjwvc3Bhbj4gOiB7dGhpcy5wcm9wcy5nZXRfaW5zdXJlZF9wcm9maWxlLnBvbGljeV9udW1iZXJ9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD48c3Bhbj5Db3Zlcjwvc3Bhbj4gOiB7dGhpcy5wcm9wcy5nZXRfaW5zdXJlZF9wcm9maWxlLmluc3VyZWRfbWVtYmVycy5sZW5ndGh9IHt0aGlzLnByb3BzLmdldF9pbnN1cmVkX3Byb2ZpbGUuaW5zdXJlZF9tZW1iZXJzLmxlbmd0aCA9PSAxID8gJ01lbWJlcicgOiAnTWVtYmVycyd9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dWw+e09iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuZ2V0X2luc3VyZWRfcHJvZmlsZS5pbnN1cmVkX21lbWJlcnMpLm1hcChmdW5jdGlvbiAoW2tleSwgdmFsdWVdKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxsaSBrZXk9e2tleX0gc3R5bGU9e3sgJ3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZScgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJpbnNhLXRibC1uYW1lc1wiPiB7dmFsdWUucmVsYXRpb259IDogPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiaW5zYS1zdWItdGJsLW5hbWVzXCI+IHt2YWx1ZS5maXJzdF9uYW1lfSB7dmFsdWUubWlkZGxlX25hbWV9IHt2YWx1ZS5sYXN0X25hbWV9IDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LCB0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvc2VjdGlvbj4qL31cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5nZXRfaW5zdXJlZF9wcm9maWxlICYmIHBhcnNlZC5zaG93X2NvbmdvID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwIGlucy1jb25nby10ZXh0IHRleHQtcHJpbWFyeSB0ZXh0LWNlbnRlciBtcmItMTBcIj5Db25ncmF0dWxhdGlvbnMgITwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LWNlbnRlciBtcmItMTBcIj5Zb3VyIEdyb3VwIE91dC1wYXRpZW50IEluc3VyYW5jZSBoYXMgYmVlbiBpc3N1ZWQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJ31cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZmxleCBtcmItMjBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHdpZHRoPVwiMTAwXCIgc3JjPVwiaHR0cHM6Ly9xYWNkbi5kb2NwcmltZS5jb20vbWVkaWEvaW5zdXJlci9pbWFnZXMvYXBsbG9nby5wbmdcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsvKjxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPk9QRCBJbnN1cmFuY2UgPGJyIC8+YnkgPHNwYW4gY2xhc3NOYW1lPVwiZnctNzAwXCI+QXBvbGxvIE11bmljaDwvc3Bhbj48L3A+Ki99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+R3JvdXAgT3V0LVBhdGllbnQgSW5zdXJhbmNlPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmdldF9pbnN1cmVkX3Byb2ZpbGUgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBmbGV4R3JvdzogJzAnLCBmbGV4U2hyaW5rOiAnMCcgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgd2lkdGg9XCIzMFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2Noay1ncmVlbi5zdmdcIn0gc3R5bGU9e3sgdmVydGljYWxBbGlnbjogJy0zMXB4JyB9fSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmdy01MDBcIiBzdHlsZT17eyBjb2xvcjogJyM0ZmMyNDMnLCB2ZXJ0aWNhbEFsaWduOiAnLTIxcHgnIH19ID5BY3RpdmU8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Lyp0aGlzLnByb3BzLmdldF9pbnN1cmVkX3Byb2ZpbGUgJiYgdGhpcy5wcm9wcy5nZXRfaW5zdXJlZF9wcm9maWxlLmluc3VyYW5jZV9zdGF0dXMgPT0gND9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LWNlbnRlciBtcmItMTBcIj5Zb3VyIGluc3VyYW5jZSBwb2xpY3kgaXMgb25ob2xkPC9wPlx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6dGhpcy5wcm9wcy5nZXRfaW5zdXJlZF9wcm9maWxlICYmIHRoaXMucHJvcHMuZ2V0X2luc3VyZWRfcHJvZmlsZS5pbnN1cmFuY2Vfc3RhdHVzID09IDU/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1jZW50ZXIgbXJiLTEwXCI+WW91ciBjYW5jZWxsYXRpb24gcmVxdWVzdCBoYXMgYmVlbiBpbml0aWF0ZWQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDonJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQqL31cblx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qPGRpdiBjbGFzc05hbWU9XCJpbnMtZmxleCBtcmItMTBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvcGRmLnBuZyd9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwIG1yLTBcIj5QbGVhc2UgZmluZCBhdHRhY2hlZCB0aGUgY2VydGlmaWNhdGUgb2YgaW5zdXJhbmNlIGZvciB0aGUgaXNzdWVkIHBvbGljeTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+Ki99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgc3R5bGU9e3sgZm9udFdlaWdodDogJzUwMCcsIGZvbnRTaXplOiAnMTJweCcsIGNvbG9yOiAnI2Y3ODYzMScsIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJywgY3Vyc29yOiAncG9pbnRlcicgfX0gaHJlZj0nL2luc3VyYW5jZS9uZXR3b3JrJyBvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGV0IGRhdGEgPSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdJbnN1cmFuY2VOZXR3b3JrQ2VydGlmaWNhdGUnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2V2ZW50JzogJ2luc3VyYW5jZS1uZXR3b3JrLWNlcnRpZmljYXRlJywgJ2NsaWNrX3ZhbHVlJzogJ2luc3VyYW5jZS1uZXR3b3JrLWNlcnRpZmljYXRlJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvbmV0d29yaycpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+VmlldyBOZXR3b3JrPC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBpbnMtZGF0ZS1yb3cgbXJiLTBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZGF0ZSB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcmItNVwiPlBvbGljeSBpc3N1ZSBEYXRlPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTcwMFwiPntgJHt0aGlzLmdldEdldE9yZGluYWwocHVyY2hhc2VEYXRlWzJdKX0gJHtwdXJjaGFzZURhdGVbMV19ICR7cHVyY2hhc2VEYXRlWzNdfWB9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZGF0ZSB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcmItNVwiPlBvbGljeSBleHBpcnkgRGF0ZTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy03MDBcIj57YCR7dGhpcy5nZXRHZXRPcmRpbmFsKGV4cGlyeURhdGVbMl0pfSAke2V4cGlyeURhdGVbMV19ICR7ZXhwaXJ5RGF0ZVszXX1gfTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWRhdGUgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJiLTVcIj5Qb2xpY3kgTnVtYmVyPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTcwMFwiPnt0aGlzLnByb3BzLmdldF9pbnN1cmVkX3Byb2ZpbGUucG9saWN5X251bWJlcn08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IGlucy1iZy1ncmV5XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGlucy1kZXRhaWxzLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGlucy1kZXRhaWxzLXJvdyBuby1ndXR0ZXJzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGlucy1kZXRhaWxzLWRpdlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJpbnMtZ3ItdGV4dCBmdy01MDBcIj5Bbm51YWwgUHJlbWl1bSBQYWlkOjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtNiBpbnMtZGV0YWlscy1kaXZcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaW5zLWJsLXRleHQgZnctNTAwXCI+JiM4Mzc3OyB7dGhpcy5wcm9wcy5nZXRfaW5zdXJlZF9wcm9maWxlLnByZW1pdW1fYW1vdW50fTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGlucy1kZXRhaWxzLXJvdyBuby1ndXR0ZXJzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGlucy1kZXRhaWxzLWRpdlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJpbnMtZ3ItdGV4dCBmdy01MDBcIj5Qcm9wb3NlciBOYW1lOjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtNiBpbnMtZGV0YWlscy1kaXZcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaW5zLWJsLXRleHQgZnctNTAwXCIgc3R5bGU9e3sgJ3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZScgfX0+e3RoaXMucHJvcHMuZ2V0X2luc3VyZWRfcHJvZmlsZS5wcm9wb3Nlcl9uYW1lWzBdLmZpcnN0X25hbWV9IHt0aGlzLnByb3BzLmdldF9pbnN1cmVkX3Byb2ZpbGUucHJvcG9zZXJfbmFtZVswXS5taWRkbGVfbmFtZX0ge3RoaXMucHJvcHMuZ2V0X2luc3VyZWRfcHJvZmlsZS5wcm9wb3Nlcl9uYW1lWzBdLmxhc3RfbmFtZX08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBpbnMtZGV0YWlscy1yb3cgbm8tZ3V0dGVyc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtNiBpbnMtZGV0YWlscy1kaXZcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaW5zLWdyLXRleHQgZnctNTAwXCI+Q292ZXJlZCBNZW1iZXJzOjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtNiBpbnMtZGV0YWlscy1kaXZcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHByaW1hcnlNZW1iZXIgJiYgcHJpbWFyeU1lbWJlci5sZW5ndGggPiAwID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGtleT17MH0gc3R5bGU9e3sgJ3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZScgfX0gY2xhc3NOYW1lPVwiaW5zLWJsLXRleHQgZnctNTAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZ3LTQwMFwiPntwcmltYXJ5TWVtYmVyWzBdLnJlbGF0aW9ufSA6IC0gPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cHJpbWFyeU1lbWJlclswXS5maXJzdF9uYW1lfSB7cHJpbWFyeU1lbWJlclswXS5taWRkbGVfbmFtZX0ge3ByaW1hcnlNZW1iZXJbMF0ubGFzdF9uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e09iamVjdC5lbnRyaWVzKEZhbWlseU1lbWJlcnMpLm1hcChmdW5jdGlvbiAoW2tleSwgdmFsdWVdKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxwIGtleT17a2V5fSBzdHlsZT17eyAndGV4dFRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJyB9fSBjbGFzc05hbWU9XCJpbnMtYmwtdGV4dCBmdy01MDBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZ3LTQwMFwiPnt2YWx1ZS5yZWxhdGlvbn0gOiAtIDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt2YWx1ZS5maXJzdF9uYW1lfSB7dmFsdWUubWlkZGxlX25hbWV9IHt2YWx1ZS5sYXN0X25hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuZ2V0X2luc3VyZWRfcHJvZmlsZSAmJiB0aGlzLnByb3BzLmdldF9pbnN1cmVkX3Byb2ZpbGUuaXNfZW5kb3JzZW1lbnRfYWxsb3dlZCA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImlucy1vcGVuLWVuZHJzXCIgb25DbGljaz17dGhpcy5nb1RvRW5kb3JzZW1lbnQuYmluZCh0aGlzKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xpY2sgaGVyZSB0byB1cGRhdGUgaW5zdXJlZCBtZW1iZXJzIGRldGFpbHNcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiaW5zLXJndC1lbmRyc1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3JpZ2h0LXNjLnN2Z1wifSAvPiA8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5hdmFpbF9ub3dfZGF0YSAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmF2YWlsX25vd19kYXRhKS5sZW5ndGggPiAwID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTE1IG1ybmctdG9wLTEyXCIgb25DbGljaz17dGhpcy5nb1RvQm9va2luZy5iaW5kKHRoaXMpfSBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1oZWFkZXIgZHItcXVjaWstaW5mb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEluaXRpYWxzUGljdHVyZSBuYW1lPXt0aGlzLnByb3BzLmF2YWlsX25vd19kYXRhLm5hbWV9IGhhc19pbWFnZT17ISF0aGlzLnByb3BzLmF2YWlsX25vd19kYXRhLnRodW1ibmFpbH0gY2xhc3NOYW1lPVwiaW5pdGlhbHNQaWN0dXJlLWRwIGRvY0NhcmRJbnRQaWNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17dGhpcy5wcm9wcy5hdmFpbF9ub3dfZGF0YS50aHVtYm5haWx9IHN0eWxlPXt7IHdpZHRoOiAnNjBweCcsIGhlaWdodDogJzYwcHgnIH19IGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWctcm91bmRcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0luaXRpYWxzUGljdHVyZT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkci1wcm9maWxlIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwiZHItbmFtZVwiPnt0aGlzLnByb3BzLmF2YWlsX25vd19kYXRhLm5hbWV9PHNwYW4gY2xhc3NOYW1lPVwibndEb2NWaWV3UHJmXCI+PC9zcGFuPjwvaDE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidXBkLWNvbHJcIj5Db250aW51ZSBCb29raW5nIDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZG9jLWluc3UtcHJmbC1pbWdcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvcmlnaHQtc2Muc3ZnJ30gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5nZXRfaW5zdXJlZF9wcm9maWxlICYmIHRoaXMucHJvcHMuZ2V0X2luc3VyZWRfcHJvZmlsZS5pc19lbmRvcnNlbWVudF9leGlzdCA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImlucy1vcGVuLWVuZHJzXCIgc3R5bGU9e3sgZmlsdGVyOiAnZ3JheXNjYWxlKDEwMCUpJyB9fSBvbkNsaWNrPXsoKSA9PiBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6ICdZb3VyIGxhc3QgcmVxdWVzdGVkIGNoYW5nZXMgYXJlIGluIHByb2Nlc3MuIFRoZXJlZm9yZSwgd2UgY2Fubm90IHRha2UgcmVxdWVzdCBmb3IgYW55IG5ldyBjaGFuZ2VzLicgfSl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsaWNrIGhlcmUgdG8gdXBkYXRlIGluc3VyZWQgbWVtYmVycyBkZXRhaWxzXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImlucy1yZ3QtZW5kcnNcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9yaWdodC1zYy5zdmdcIn0gLz4gPC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmdldF9pbnN1cmVkX3Byb2ZpbGUgJiYgKHRoaXMucHJvcHMuZ2V0X2luc3VyZWRfcHJvZmlsZS5pbnN1cmFuY2Vfc3RhdHVzID09IDEgfHwgdGhpcy5wcm9wcy5nZXRfaW5zdXJlZF9wcm9maWxlLmluc3VyYW5jZV9zdGF0dXMgPT0gNCB8fCB0aGlzLnByb3BzLmdldF9pbnN1cmVkX3Byb2ZpbGUuaW5zdXJhbmNlX3N0YXR1cyA9PSA3KSA/XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1idG4gZml4ZWQgaW5zdUJ0bnNDb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJpbnN1LWxlZnQtd2hpdGUtYnRuXCIgb25DbGljaz17dGhpcy5jYW5jZWxQb2xpY3kuYmluZCh0aGlzKX0gc3R5bGU9e3sgY29sb3I6IHRoaXMucHJvcHMuZ2V0X2luc3VyZWRfcHJvZmlsZS5pc19jYW5jZWxfYWxsb3dlZCA/ICcjZjc4NjMxJyA6ICcjNzU3NTc1JyB9fT5DYW5jZWwgUG9saWN5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJpbnN1LXJpZ2h0LW9ybmctYnRuIGZvb3QtYnRuLUFuY2hyXCIgaHJlZj17dGhpcy5wcm9wcy5nZXRfaW5zdXJlZF9wcm9maWxlLmNvaV91cmx9IGRvd25sb2FkIHRhcmdldD1cIl9ibGFua1wiPkRvd25sb2FkIENlcnRpZmljYXRlIG9mIEluc3VyYW5jZSA8c3BhbiBjbGFzc05hbWU9XCJmb290LWJ0bi1zdWItc3BhblwiPihQb2xpY3kgRG9jdW1lbnQpPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDogJyd9XG5cdFx0XHRcdFx0XHRcdHsvKjxhIG9uQ2xpY2s9e3RoaXMuY2FuY2VsUG9saWN5LmJpbmQodGhpcyl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FuY2VsIHBvbGljeVxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9e1widi1idG4gcC0zIHYtYnRuLXByaW1hcnkgYnRuLWxnIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIGJ0bi1sZyB0ZXh0LWxnIHN0aWNreS1idG4gdGV4dC1jZW50ZXJcIiArKHRoaXMucHJvcHMuc2hvd0J0bj8naW5zLW5vLWRvd25sb2FkJzonJyl9IHN0eWxlPXt7IGNvbG9yOiBcIiNmZmZmZmZcIiB9fSBocmVmPXt0aGlzLnByb3BzLmdldF9pbnN1cmVkX3Byb2ZpbGUuY29pX3VybH0gZG93bmxvYWQgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHREb3dubG9hZCBDZXJ0aWZpY2F0ZSBvZiBJbnN1cmFuY2U8c3BhbiBjbGFzc05hbWU9XCJmb290LWJ0bi1zdWItc3BhblwiPihQb2xpY3kgRG9jdW1lbnQpPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+Ki99XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxDaGF0UGFuZWwgLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogODAgfX0gPlxuXHRcdFx0XHQ8UHJvZmlsZUhlYWRlciBzaG93UGFja2FnZVN0cmlwPXt0cnVlfS8+XG5cdFx0XHRcdDxMb2FkZXIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdH1cblxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3VyYW5jZUNlcnRpZmljYXRlVmlldyAgICAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgeyBnZXRJbnN1cmVkUHJvZmlsZSwgY2xlYXJJbnN1cmFuY2UsIGNsZWFyQXZhaWxOb3dJbnN1cmFuY2V9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgSW5zdXJhbmNlQ2VydGlmaWNhdGVWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5zdXJhbmNlL2luc3VyYW5jZUNlcnRpZmljYXRlLmpzJ1xuXG5jbGFzcyBJbnN1cmFuY2VDZXJ0aWZpY2F0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2hvd0J0bjpmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRJbnN1cmVkUHJvZmlsZSgpIC8vIHRvIGdldCBpbnN1cmVkIG1lbWJlcnMgZGF0YSBhbmQgY2VydGlmaWNhdGlvbiBkZXRhaWxzXG4gICAgICAgIC8vIHRoaXMucHJvcHMuZ2V0SW5zdXJlZFByb2ZpbGUoKHJlc3ApPT57XG4gICAgICAgIC8vICAgICBpZihyZXNwICYmIHJlc3AuY29pX3VybCAhPScnKXtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93QnRuOmZhbHNlfSlcbiAgICAgICAgLy8gICAgIH1lbHNle1xuICAgICAgICAvLyAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnByb3BzLmdldEluc3VyZWRQcm9maWxlKClcbiAgICAgICAgLy8gICAgICAgICB9LCA1MDApXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0gKSAgICAgIFxuICAgIH1cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PEluc3VyYW5jZUNlcnRpZmljYXRlVmlldyB7Li4udGhpcy5wcm9wc30gc2hvd0J0bj17dGhpcy5zdGF0ZS5zaG93QnRufS8+XG5cdFx0XHQpXG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3QgVVNFUiA9IHN0YXRlLlVTRVJcbiAgICBsZXQgeyBpbnN1cm5hY2VEYXRhLCBMT0FEX0lOU1VSQU5DRSwgc2VsZWN0ZWRfcGxhbixzZWxmX2RhdGFfdmFsdWVzLGluc3VyZWRfbWVtYmVyX2xpc3QsZ2V0X2luc3VyZWRfcHJvZmlsZSwgYXZhaWxfbm93X2RhdGF9ID0gc3RhdGUuSU5TVVJBTkNFXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5zdXJuYWNlRGF0YSxMT0FEX0lOU1VSQU5DRSxzZWxlY3RlZF9wbGFuLFVTRVIsc2VsZl9kYXRhX3ZhbHVlcyxpbnN1cmVkX21lbWJlcl9saXN0LGdldF9pbnN1cmVkX3Byb2ZpbGUsIGF2YWlsX25vd19kYXRhXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuXG4gICAgICAgIGdldEluc3VyZWRQcm9maWxlIDooY2IpID0+IGRpc3BhdGNoKGdldEluc3VyZWRQcm9maWxlKGNiKSksXG4gICAgICAgIGNsZWFySW5zdXJhbmNlOigpPT5kaXNwYXRjaChjbGVhckluc3VyYW5jZSgpKSxcbiAgICAgICAgY2xlYXJBdmFpbE5vd0luc3VyYW5jZTooKT0+ZGlzcGF0Y2goY2xlYXJBdmFpbE5vd0luc3VyYW5jZSgpKVxuICAgICAgICBcbiAgICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyAsIG1hcERpc3BhdGNoVG9Qcm9wcykoSW5zdXJhbmNlQ2VydGlmaWNhdGUpIl0sInNvdXJjZVJvb3QiOiIifQ==