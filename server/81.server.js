exports.ids = [81];
exports.modules = {

/***/ "./dev/js/components/commons/couponSelectionView/couponSelectionView.js":
/*!******************************************************************************!*\
  !*** ./dev/js/components/commons/couponSelectionView/couponSelectionView.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _LeftBar = __webpack_require__(/*! ../LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _termsConditions = __webpack_require__(/*! ./termsConditions.js */ "./dev/js/components/commons/couponSelectionView/termsConditions.js");

var _termsConditions2 = _interopRequireDefault(_termsConditions);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _bookingErrorPopUp = __webpack_require__(/*! ../../opd/patientDetails/bookingErrorPopUp */ "./dev/js/components/opd/patientDetails/bookingErrorPopUp.js");

var _bookingErrorPopUp2 = _interopRequireDefault(_bookingErrorPopUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


class CouponSelectionView extends _react2.default.Component {
    constructor(props) {
        super(props);

        this.closeErrorPopup = () => {
            this.setState({ error: '' });
        };

        this.state = {
            coupon: '',
            appointmentType: '',
            id: '',
            couponName: '',
            errorMsg: '',
            openTermsConditions: false,
            couponText: "",
            couponTextMessage: "",
            test_ids: null,
            procedures_ids: null,
            clinicId: null,
            deal_price: null,
            cart_item: null,
            error: null
        };
    }

    toggle(which, tnc = '') {
        this.setState({ [which]: !this.state[which], tnc: tnc });
    }

    inputHandler(e) {
        this.setState({ couponText: e.target.value.toUpperCase() });
    }

    initialSetCoupons(props) {
        if (window) {
            window.scrollTo(0, 0);
        }
        let appointmentType = props.match.params.type;
        let id = props.match.params.id;
        let clinicId = props.match.params.cid;
        const parsed = queryString.parse(props.location.search);
        let test_ids = null;
        let procedures_ids = null;
        let deal_price = null;
        let cart_item = parsed.cart_item || null;

        if (parsed.deal_price) {
            deal_price = parseInt(parsed.deal_price);
        }
        if (appointmentType == 'opd') {
            appointmentType = 1;
        } else if (appointmentType == 'lab') {
            appointmentType = 2;
        } else if (appointmentType == 'vip') {
            appointmentType = 3;
        } else {
            appointmentType = '';
        }

        if (appointmentType == 2) {
            if (parsed.test_ids) {
                test_ids = parsed.test_ids;
            }
            props.getCoupons({
                productId: 2, lab_id: id, test_ids: test_ids, profile_id: props.selectedProfile, deal_price: deal_price, cart_item
            });
        } else if (appointmentType == 3) {
            props.getCoupons({
                productId: clinicId, gold_plan_id: id, deal_price: deal_price
            });
        } else {
            if (parsed.procedures_ids) {
                procedures_ids = parsed.procedures_ids;
            }
            props.getCoupons({
                productId: 1, doctor_id: id, hospital_id: clinicId, profile_id: props.selectedProfile, procedures_ids, deal_price: deal_price, cart_item
            });
        }

        this.setState({ appointmentType: appointmentType, id: id, clinicId: clinicId, test_ids, procedures_ids, deal_price, cart_item });
    }

    pushGoldData(coupon) {
        const parsed = queryString.parse(this.props.location.search);
        let gold_push_data = {};
        let param;
        gold_push_data.plan = this.props.selected_vip_plan;
        gold_push_data.dummy_data_type = 'PLAN_PURCHASE';
        gold_push_data.members = [];
        gold_push_data.coupon_data = [];
        gold_push_data.coupon_data.push(coupon);
        gold_push_data.utm_spo_tags = parsed;
        gold_push_data.coupon_type = this.state.clinicId == 8 ? 'gold' : this.state.clinicId == 11 ? 'vip' : '';
        this.props.currentSelectedVipMembersId.map((val, key) => {
            if (Object.keys(this.props.vipClubMemberDetails).length > 0) {
                param = this.props.vipClubMemberDetails[val[key]];
                gold_push_data.members.push(param);
            }
        });
        if (_storage2.default.isAgent()) {
            gold_push_data.is_agent = true;
        } else {
            gold_push_data.is_agent = false;
        }
        if (_storage2.default.isAgent() && gold_push_data && Object.keys(gold_push_data).length && gold_push_data.members && gold_push_data.members.length) {
            if (gold_push_data.members.length == 1 && gold_push_data.members[0] == null) {} else {
                this.props.pushMembersData(gold_push_data);
            }
        }
    }

    componentDidMount() {
        this.initialSetCoupons(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.selectedProfile != nextProps.selectedProfile) {
            this.initialSetCoupons(nextProps);
        }
    }

    toggleButtons(coupon, e) {
        if (coupon.valid) {
            this.setState({ coupon: coupon.coupon_id, couponName: coupon.code, errorMsg: '' });
            if (this.state.appointmentType == 3) {
                this.pushGoldData(coupon);
            }
            this.props.applyCoupons(this.state.appointmentType, coupon, coupon.coupon_id, this.state.id, success => {});
            this.props.history.go(-1);
        } else {
            // open popup
            this.setState({ error: coupon.invalidating_message });
        }
    }

    applyCoupon() {
        /*if(this.state.coupon){  
            this.props.applyCoupons(this.state.appointmentType, this.state.couponName ,this.state.coupon,this.state.id )
            this.props.history.go(-1)   
        }else{
            this.setState({errorMsg:'Please Select Coupon'})
        }   */
    }

    getDots(no, used) {
        let dots = [];
        for (let i = 1; i <= no; i++) {
            if (i <= used) dots.push(_react2.default.createElement(
                'li',
                { key: i, className: 'active' },
                _react2.default.createElement(
                    'span',
                    { className: 'dot' },
                    i
                )
            ));else dots.push(_react2.default.createElement(
                'li',
                { key: i, className: '' },
                _react2.default.createElement(
                    'span',
                    { className: 'dot' },
                    i
                )
            ));
        }
        return dots;
    }

    applyTextCoupon(e) {
        this.setState({ couponTextMessage: "" });
        if (this.state.couponText) {
            let cb = coupon => {
                if (coupon && coupon[0] && coupon[0].valid) {
                    this.toggleButtons(coupon[0], e);
                } else {
                    this.setState({ couponTextMessage: "Please enter a valid coupon code" });
                }
            };
            if (this.state.appointmentType == 2) {
                this.props.getCoupons({
                    productId: 2, lab_id: this.state.id, test_ids: this.state.test_ids, profile_id: this.props.selectedProfile, save_in_store: false, coupon_code: this.state.couponText, deal_price: this.state.deal_price, cb: cb, cart_item: this.state.cart_item
                });
            } else if (this.state.appointmentType == 3) {
                this.props.getCoupons({
                    productId: this.state.clinicId, gold_plan_id: this.state.id, deal_price: this.state.deal_price, coupon_code: this.state.couponText, save_in_store: false, cb: cb
                });
            } else {
                this.props.getCoupons({
                    productId: 1, doctor_id: this.state.id, hospital_id: this.state.clinicId, profile_id: this.props.selectedProfile, procedures_ids: this.state.procedures_ids, save_in_store: false,
                    coupon_code: this.state.couponText, deal_price: this.state.deal_price, cb: cb, cart_item: this.state.cart_item
                });
            }
        } else {
            this.setState({ couponTextMessage: "Please enter a coupon code" });
        }
    }

    render() {

        return _react2.default.createElement(
            'div',
            { className: 'profile-body-wrap' },
            _react2.default.createElement(_DesktopProfileHeader2.default, null),
            _react2.default.createElement(
                'section',
                { className: 'container container-top-margin' },
                _react2.default.createElement(
                    'div',
                    { className: 'row main-row parent-section-row mrng-copn' },
                    _react2.default.createElement(_LeftBar2.default, null),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 col-md-7 col-lg-7 center-column' },
                        _react2.default.createElement(
                            'section',
                            { className: 'dr-profile-screen booking-confirm-screen' },
                            _react2.default.createElement(
                                'div',
                                { className: 'container-fluid' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row mrb-20' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-12' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'widget mrt-10 ct-profile skin-white' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'coupons-list' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'pd-12 select-coupon-heading' },
                                                    'Select Coupon'
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'coupon-search-input' },
                                                    _react2.default.createElement('input', { placeholder: 'Enter Coupon here', style: { textTransform: 'uppercase' }, onChange: this.inputHandler.bind(this), value: this.state.couponText }),
                                                    _react2.default.createElement(
                                                        'button',
                                                        { onClick: this.applyTextCoupon.bind(this) },
                                                        'Apply'
                                                    ),
                                                    _react2.default.createElement(
                                                        'p',
                                                        { style: { color: 'red' } },
                                                        this.state.couponTextMessage
                                                    )
                                                ),
                                                this.props.applicableCoupons.length ? _react2.default.createElement(
                                                    'ul',
                                                    null,
                                                    this.props.applicableCoupons.map((coupons, index) => {
                                                        return _react2.default.createElement(
                                                            'li',
                                                            { key: index, className: "coupon-style search-list-radio pd-12" },
                                                            _react2.default.createElement('input', { type: 'radio', id: coupons.coupon_id, name: 'radio-group', checked: this.state.coupon === coupons.coupon_id, value: coupons.code, onClick: this.toggleButtons.bind(this, coupons) }),
                                                            _react2.default.createElement(
                                                                'label',
                                                                { className: 'fw-700 text-md', htmlFor: coupons.coupon_id },
                                                                coupons.code
                                                            ),
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'coupon-input col-12' },
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    null,
                                                                    coupons.desc
                                                                ),
                                                                coupons.coupon_count > 1 ? _react2.default.createElement(
                                                                    'div',
                                                                    { className: 'coupon-timeline book-confirmed-timeline' },
                                                                    _react2.default.createElement(
                                                                        'p',
                                                                        { className: 'text-sm text-primary' },
                                                                        'can be used ',
                                                                        coupons.coupon_count - coupons.used_count,
                                                                        ' more times'
                                                                    ),
                                                                    _react2.default.createElement(
                                                                        'ul',
                                                                        { className: 'coupon-inline-list' },
                                                                        this.getDots(coupons.coupon_count, coupons.used_count)
                                                                    )
                                                                ) : "",
                                                                coupons.tnc ? _react2.default.createElement(
                                                                    'p',
                                                                    { className: 'text-sm text-primary', style: { 'cursor': 'pointer' }, onClick: this.toggle.bind(this, 'openTermsConditions', coupons.tnc) },
                                                                    'Terms & Conditions'
                                                                ) : ''
                                                            )
                                                        );
                                                    }),
                                                    this.state.openTermsConditions ? _react2.default.createElement(_termsConditions2.default, { toggle: this.toggle.bind(this, 'openTermsConditions'), tnc: this.state.tnc }) : ""
                                                ) : _react2.default.createElement(
                                                    'div',
                                                    null,
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'no-coupon' },
                                                        'No coupons available'
                                                    )
                                                )
                                            )
                                        )
                                    ),
                                    this.state.error ? _react2.default.createElement(_bookingErrorPopUp2.default, { heading: "Invalid Coupon", message: this.state.error, closeErrorPopup: this.closeErrorPopup }) : ''
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(_RightBar2.default, { extraClass: ' chat-float-btn-2', msgTemplate: 'gold_general_template' })
                )
            )
        );
    }
}

exports.default = CouponSelectionView;

/***/ }),

/***/ "./dev/js/components/commons/couponSelectionView/index.js":
/*!****************************************************************!*\
  !*** ./dev/js/components/commons/couponSelectionView/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _couponSelectionView = __webpack_require__(/*! ./couponSelectionView */ "./dev/js/components/commons/couponSelectionView/couponSelectionView.js");

var _couponSelectionView2 = _interopRequireDefault(_couponSelectionView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _couponSelectionView2.default;

/***/ }),

/***/ "./dev/js/components/commons/couponSelectionView/termsConditions.js":
/*!**************************************************************************!*\
  !*** ./dev/js/components/commons/couponSelectionView/termsConditions.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Terms extends _react2.default.Component {

    render() {

        return _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement("div", { className: "cancel-overlay", onClick: this.props.toggle }),
            _react2.default.createElement(
                "div",
                { className: "widget cancel-appointment-div cancel-popup" },
                _react2.default.createElement(
                    "div",
                    { className: "widget-header text-center action-screen-header" },
                    _react2.default.createElement(
                        "p",
                        { className: "fw-500 cancel-appointment-head" },
                        "Terms & Conditions"
                    ),
                    _react2.default.createElement("hr", null)
                ),
                _react2.default.createElement(
                    "div",
                    { className: "terms-condition-div paypal-dtls-cont" },
                    _react2.default.createElement("p", { className: "terms-condition", dangerouslySetInnerHTML: { __html: this.props.tnc } })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "payment-content-btn text-center" },
                    _react2.default.createElement(
                        "button",
                        { className: "fw-500", onClick: this.props.toggle },
                        "Done"
                    )
                )
            )
        );
    }
}
exports.default = Terms;

/***/ }),

/***/ "./dev/js/components/opd/patientDetails/bookingErrorPopUp.js":
/*!*******************************************************************!*\
  !*** ./dev/js/components/opd/patientDetails/bookingErrorPopUp.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BookingError extends _react2.default.Component {
    render() {
        return _react2.default.createElement(
            "section",
            { className: "error-msg-pop" },
            _react2.default.createElement("div", { className: "cancel-overlay" }),
            _react2.default.createElement(
                "div",
                { className: "popup-error", style: { width: '300px' } },
                _react2.default.createElement(
                    "div",
                    { className: "error-head" },
                    _react2.default.createElement("img", { className: "errorInfoImg", src: "/assets" + "/img/infoerror.svg" }),
                    "Alert"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "cross-btn" },
                    _react2.default.createElement("img", { src: "/assets" + "/img/icons/close.png", alt: "close", onClick: this.props.closeErrorPopup })
                ),
                _react2.default.createElement(
                    "p",
                    { className: "error-msg" },
                    this.props.message
                )
            )
        );
    }
}

exports.default = BookingError;

/***/ }),

/***/ "./dev/js/containers/commons/CouponsView.js":
/*!**************************************************!*\
  !*** ./dev/js/containers/commons/CouponsView.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _couponSelectionView = __webpack_require__(/*! ../../components/commons/couponSelectionView */ "./dev/js/components/commons/couponSelectionView/index.js");

var _couponSelectionView2 = _interopRequireDefault(_couponSelectionView);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Coupons extends _react2.default.Component {

	render() {

		return _react2.default.createElement(_couponSelectionView2.default, this.props);
	}
}

const mapStateToProps = state => {
	const {
		applicableCoupons, selectedProfile, profiles
	} = state.USER;

	let {
		selectedSlot
	} = state.DOCTOR_SEARCH;

	let { selected_vip_plan, vipClubMemberDetails, currentSelectedVipMembersId, vipCoupons } = state.VIPCLUB;

	return {
		applicableCoupons,
		selectedSlot,
		selectedProfile, profiles,
		selected_vip_plan, vipClubMemberDetails, currentSelectedVipMembersId, vipCoupons
	};
};

const mapDispatchToProps = dispatch => {

	return {
		getCoupons: data => dispatch((0, _index.getCoupons)(data)),
		applyCoupons: (productId, couponData, couponId, hospitalId, callback) => dispatch((0, _index.applyCoupons)(productId, couponData, couponId, hospitalId, callback)),
		pushMembersData: criteria => dispatch((0, _index.pushMembersData)(criteria))

	};
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Coupons);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2NvdXBvblNlbGVjdGlvblZpZXcvY291cG9uU2VsZWN0aW9uVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2NvdXBvblNlbGVjdGlvblZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9jb3Vwb25TZWxlY3Rpb25WaWV3L3Rlcm1zQ29uZGl0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvcGF0aWVudERldGFpbHMvYm9va2luZ0Vycm9yUG9wVXAuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy9Db3Vwb25zVmlldy5qcyJdLCJuYW1lcyI6WyJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJDb3Vwb25TZWxlY3Rpb25WaWV3IiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiY2xvc2VFcnJvclBvcHVwIiwic2V0U3RhdGUiLCJlcnJvciIsInN0YXRlIiwiY291cG9uIiwiYXBwb2ludG1lbnRUeXBlIiwiaWQiLCJjb3Vwb25OYW1lIiwiZXJyb3JNc2ciLCJvcGVuVGVybXNDb25kaXRpb25zIiwiY291cG9uVGV4dCIsImNvdXBvblRleHRNZXNzYWdlIiwidGVzdF9pZHMiLCJwcm9jZWR1cmVzX2lkcyIsImNsaW5pY0lkIiwiZGVhbF9wcmljZSIsImNhcnRfaXRlbSIsInRvZ2dsZSIsIndoaWNoIiwidG5jIiwiaW5wdXRIYW5kbGVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwidG9VcHBlckNhc2UiLCJpbml0aWFsU2V0Q291cG9ucyIsIndpbmRvdyIsInNjcm9sbFRvIiwibWF0Y2giLCJwYXJhbXMiLCJ0eXBlIiwiY2lkIiwicGFyc2VkIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsInBhcnNlSW50IiwiZ2V0Q291cG9ucyIsInByb2R1Y3RJZCIsImxhYl9pZCIsInByb2ZpbGVfaWQiLCJzZWxlY3RlZFByb2ZpbGUiLCJnb2xkX3BsYW5faWQiLCJkb2N0b3JfaWQiLCJob3NwaXRhbF9pZCIsInB1c2hHb2xkRGF0YSIsImdvbGRfcHVzaF9kYXRhIiwicGFyYW0iLCJwbGFuIiwic2VsZWN0ZWRfdmlwX3BsYW4iLCJkdW1teV9kYXRhX3R5cGUiLCJtZW1iZXJzIiwiY291cG9uX2RhdGEiLCJwdXNoIiwidXRtX3Nwb190YWdzIiwiY291cG9uX3R5cGUiLCJjdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQiLCJtYXAiLCJ2YWwiLCJrZXkiLCJPYmplY3QiLCJrZXlzIiwidmlwQ2x1Yk1lbWJlckRldGFpbHMiLCJsZW5ndGgiLCJTVE9SQUdFIiwiaXNBZ2VudCIsImlzX2FnZW50IiwicHVzaE1lbWJlcnNEYXRhIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwidG9nZ2xlQnV0dG9ucyIsInZhbGlkIiwiY291cG9uX2lkIiwiY29kZSIsImFwcGx5Q291cG9ucyIsInN1Y2Nlc3MiLCJoaXN0b3J5IiwiZ28iLCJpbnZhbGlkYXRpbmdfbWVzc2FnZSIsImFwcGx5Q291cG9uIiwiZ2V0RG90cyIsIm5vIiwidXNlZCIsImRvdHMiLCJpIiwiYXBwbHlUZXh0Q291cG9uIiwiY2IiLCJzYXZlX2luX3N0b3JlIiwiY291cG9uX2NvZGUiLCJyZW5kZXIiLCJ0ZXh0VHJhbnNmb3JtIiwiYmluZCIsImNvbG9yIiwiYXBwbGljYWJsZUNvdXBvbnMiLCJjb3Vwb25zIiwiaW5kZXgiLCJkZXNjIiwiY291cG9uX2NvdW50IiwidXNlZF9jb3VudCIsIkNvdXBvblNlbGVjdGlvbiIsIlRlcm1zIiwiX19odG1sIiwiQm9va2luZ0Vycm9yIiwid2lkdGgiLCJBU1NFVFNfQkFTRV9VUkwiLCJtZXNzYWdlIiwiQ291cG9ucyIsIm1hcFN0YXRlVG9Qcm9wcyIsInByb2ZpbGVzIiwiVVNFUiIsInNlbGVjdGVkU2xvdCIsIkRPQ1RPUl9TRUFSQ0giLCJ2aXBDb3Vwb25zIiwiVklQQ0xVQiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiZGF0YSIsImNvdXBvbkRhdGEiLCJjb3Vwb25JZCIsImhvc3BpdGFsSWQiLCJjYWxsYmFjayIsImNyaXRlcmlhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7QUFGQSxNQUFNQSxjQUFjQyxtQkFBT0EsQ0FBQyxrQ0FBUixDQUFwQjs7O0FBSUEsTUFBTUMsbUJBQU4sU0FBa0NDLGdCQUFNQyxTQUF4QyxDQUFrRDtBQUM5Q0MsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOOztBQURlLGFBb0JuQkMsZUFwQm1CLEdBb0JELE1BQU07QUFDcEIsaUJBQUtDLFFBQUwsQ0FBYyxFQUFFQyxPQUFPLEVBQVQsRUFBZDtBQUNILFNBdEJrQjs7QUFFZixhQUFLQyxLQUFMLEdBQWE7QUFDVEMsb0JBQVEsRUFEQztBQUVUQyw2QkFBaUIsRUFGUjtBQUdUQyxnQkFBSSxFQUhLO0FBSVRDLHdCQUFZLEVBSkg7QUFLVEMsc0JBQVUsRUFMRDtBQU1UQyxpQ0FBcUIsS0FOWjtBQU9UQyx3QkFBWSxFQVBIO0FBUVRDLCtCQUFtQixFQVJWO0FBU1RDLHNCQUFVLElBVEQ7QUFVVEMsNEJBQWdCLElBVlA7QUFXVEMsc0JBQVUsSUFYRDtBQVlUQyx3QkFBWSxJQVpIO0FBYVRDLHVCQUFXLElBYkY7QUFjVGQsbUJBQU87QUFkRSxTQUFiO0FBZ0JIOztBQU1EZSxXQUFPQyxLQUFQLEVBQWNDLE1BQU0sRUFBcEIsRUFBd0I7QUFDcEIsYUFBS2xCLFFBQUwsQ0FBYyxFQUFFLENBQUNpQixLQUFELEdBQVMsQ0FBQyxLQUFLZixLQUFMLENBQVdlLEtBQVgsQ0FBWixFQUErQkMsS0FBS0EsR0FBcEMsRUFBZDtBQUNIOztBQUVEQyxpQkFBYUMsQ0FBYixF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b250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBMZWZ0QmFyIGZyb20gJy4uL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vUmlnaHRCYXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBUZXJtc0NvbmRpdGlvbnMgZnJvbSAnLi90ZXJtc0NvbmRpdGlvbnMuanMnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuaW1wb3J0IEJvb2tpbmdFcnJvciBmcm9tICcuLi8uLi9vcGQvcGF0aWVudERldGFpbHMvYm9va2luZ0Vycm9yUG9wVXAnXG5cbmNsYXNzIENvdXBvblNlbGVjdGlvblZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY291cG9uOiAnJyxcbiAgICAgICAgICAgIGFwcG9pbnRtZW50VHlwZTogJycsXG4gICAgICAgICAgICBpZDogJycsXG4gICAgICAgICAgICBjb3Vwb25OYW1lOiAnJyxcbiAgICAgICAgICAgIGVycm9yTXNnOiAnJyxcbiAgICAgICAgICAgIG9wZW5UZXJtc0NvbmRpdGlvbnM6IGZhbHNlLFxuICAgICAgICAgICAgY291cG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIGNvdXBvblRleHRNZXNzYWdlOiBcIlwiLFxuICAgICAgICAgICAgdGVzdF9pZHM6IG51bGwsXG4gICAgICAgICAgICBwcm9jZWR1cmVzX2lkczogbnVsbCxcbiAgICAgICAgICAgIGNsaW5pY0lkOiBudWxsLFxuICAgICAgICAgICAgZGVhbF9wcmljZTogbnVsbCxcbiAgICAgICAgICAgIGNhcnRfaXRlbTogbnVsbCxcbiAgICAgICAgICAgIGVycm9yOiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZUVycm9yUG9wdXAgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogJycgfSlcbiAgICB9XG5cbiAgICB0b2dnbGUod2hpY2gsIHRuYyA9ICcnKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbd2hpY2hdOiAhdGhpcy5zdGF0ZVt3aGljaF0sIHRuYzogdG5jIH0pXG4gICAgfVxuXG4gICAgaW5wdXRIYW5kbGVyKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdXBvblRleHQ6IGUudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKCkgfSlcbiAgICB9XG5cbiAgICBpbml0aWFsU2V0Q291cG9ucyhwcm9wcykge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgICAgICBsZXQgYXBwb2ludG1lbnRUeXBlID0gcHJvcHMubWF0Y2gucGFyYW1zLnR5cGU7XG4gICAgICAgIGxldCBpZCA9IHByb3BzLm1hdGNoLnBhcmFtcy5pZDtcbiAgICAgICAgbGV0IGNsaW5pY0lkID0gcHJvcHMubWF0Y2gucGFyYW1zLmNpZFxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZShwcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCB0ZXN0X2lkcyA9IG51bGxcbiAgICAgICAgbGV0IHByb2NlZHVyZXNfaWRzID0gbnVsbFxuICAgICAgICBsZXQgZGVhbF9wcmljZSA9IG51bGxcbiAgICAgICAgbGV0IGNhcnRfaXRlbSA9IHBhcnNlZC5jYXJ0X2l0ZW0gfHwgbnVsbFxuXG4gICAgICAgIGlmIChwYXJzZWQuZGVhbF9wcmljZSkge1xuICAgICAgICAgICAgZGVhbF9wcmljZSA9IHBhcnNlSW50KHBhcnNlZC5kZWFsX3ByaWNlKVxuICAgICAgICB9XG4gICAgICAgIGlmIChhcHBvaW50bWVudFR5cGUgPT0gJ29wZCcpIHtcbiAgICAgICAgICAgIGFwcG9pbnRtZW50VHlwZSA9IDFcbiAgICAgICAgfSBlbHNlIGlmIChhcHBvaW50bWVudFR5cGUgPT0gJ2xhYicpIHtcbiAgICAgICAgICAgIGFwcG9pbnRtZW50VHlwZSA9IDJcbiAgICAgICAgfSBlbHNlIGlmIChhcHBvaW50bWVudFR5cGUgPT0gJ3ZpcCcpIHtcbiAgICAgICAgICAgIGFwcG9pbnRtZW50VHlwZSA9IDNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFwcG9pbnRtZW50VHlwZSA9ICcnXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXBwb2ludG1lbnRUeXBlID09IDIpIHtcbiAgICAgICAgICAgIGlmIChwYXJzZWQudGVzdF9pZHMpIHtcbiAgICAgICAgICAgICAgICB0ZXN0X2lkcyA9IHBhcnNlZC50ZXN0X2lkc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvcHMuZ2V0Q291cG9ucyh7XG4gICAgICAgICAgICAgICAgcHJvZHVjdElkOiAyLCBsYWJfaWQ6IGlkLCB0ZXN0X2lkczogdGVzdF9pZHMsIHByb2ZpbGVfaWQ6IHByb3BzLnNlbGVjdGVkUHJvZmlsZSwgZGVhbF9wcmljZTogZGVhbF9wcmljZSwgY2FydF9pdGVtXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYoYXBwb2ludG1lbnRUeXBlID09IDMpe1xuICAgICAgICAgICAgIHByb3BzLmdldENvdXBvbnMoe1xuICAgICAgICAgICAgICAgIHByb2R1Y3RJZDpjbGluaWNJZCxnb2xkX3BsYW5faWQ6aWQsIGRlYWxfcHJpY2U6ZGVhbF9wcmljZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwYXJzZWQucHJvY2VkdXJlc19pZHMpIHtcbiAgICAgICAgICAgICAgICBwcm9jZWR1cmVzX2lkcyA9IHBhcnNlZC5wcm9jZWR1cmVzX2lkc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvcHMuZ2V0Q291cG9ucyh7XG4gICAgICAgICAgICAgICAgcHJvZHVjdElkOiAxLCBkb2N0b3JfaWQ6IGlkLCBob3NwaXRhbF9pZDogY2xpbmljSWQsIHByb2ZpbGVfaWQ6IHByb3BzLnNlbGVjdGVkUHJvZmlsZSwgcHJvY2VkdXJlc19pZHMsIGRlYWxfcHJpY2U6IGRlYWxfcHJpY2UsIGNhcnRfaXRlbVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhcHBvaW50bWVudFR5cGU6IGFwcG9pbnRtZW50VHlwZSwgaWQ6IGlkLCBjbGluaWNJZDogY2xpbmljSWQsIHRlc3RfaWRzLCBwcm9jZWR1cmVzX2lkcywgZGVhbF9wcmljZSwgY2FydF9pdGVtIH0pXG4gICAgfVxuXG4gICAgcHVzaEdvbGREYXRhKGNvdXBvbil7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgZ29sZF9wdXNoX2RhdGE9e31cbiAgICAgICAgbGV0IHBhcmFtXG4gICAgICAgIGdvbGRfcHVzaF9kYXRhLnBsYW4gPSB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuXG4gICAgICAgIGdvbGRfcHVzaF9kYXRhLmR1bW15X2RhdGFfdHlwZSA9ICdQTEFOX1BVUkNIQVNFJ1xuICAgICAgICBnb2xkX3B1c2hfZGF0YS5tZW1iZXJzID0gW11cbiAgICAgICAgZ29sZF9wdXNoX2RhdGEuY291cG9uX2RhdGEgPSBbXVxuICAgICAgICBnb2xkX3B1c2hfZGF0YS5jb3Vwb25fZGF0YS5wdXNoKGNvdXBvbilcbiAgICAgICAgZ29sZF9wdXNoX2RhdGEudXRtX3Nwb190YWdzID0gcGFyc2VkXG4gICAgICAgIGdvbGRfcHVzaF9kYXRhLmNvdXBvbl90eXBlID0gdGhpcy5zdGF0ZS5jbGluaWNJZCA9PSA4Pydnb2xkJzogdGhpcy5zdGF0ZS5jbGluaWNJZCA9PSAxMSA/ICd2aXAnOicnXG4gICAgICAgIHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkVmlwTWVtYmVyc0lkLm1hcCgodmFsLCBrZXkpID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMucHJvcHMudmlwQ2x1Yk1lbWJlckRldGFpbHMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHBhcmFtID0gdGhpcy5wcm9wcy52aXBDbHViTWVtYmVyRGV0YWlsc1t2YWxba2V5XV1cbiAgICAgICAgICAgIGdvbGRfcHVzaF9kYXRhLm1lbWJlcnMucHVzaChwYXJhbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgaWYoU1RPUkFHRS5pc0FnZW50KCkpe1xuICAgICAgICAgICAgZ29sZF9wdXNoX2RhdGEuaXNfYWdlbnQgPSB0cnVlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZ29sZF9wdXNoX2RhdGEuaXNfYWdlbnQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGlmKFNUT1JBR0UuaXNBZ2VudCgpICYmIGdvbGRfcHVzaF9kYXRhICYmIE9iamVjdC5rZXlzKGdvbGRfcHVzaF9kYXRhKS5sZW5ndGggJiYgZ29sZF9wdXNoX2RhdGEubWVtYmVycyAmJiBnb2xkX3B1c2hfZGF0YS5tZW1iZXJzLmxlbmd0aCl7XG4gICAgICAgICAgICBpZihnb2xkX3B1c2hfZGF0YS5tZW1iZXJzLmxlbmd0aCA9PTEgJiYgZ29sZF9wdXNoX2RhdGEubWVtYmVyc1swXSA9PSBudWxsKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucHVzaE1lbWJlcnNEYXRhKGdvbGRfcHVzaF9kYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbFNldENvdXBvbnModGhpcy5wcm9wcylcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGUgIT0gbmV4dFByb3BzLnNlbGVjdGVkUHJvZmlsZSkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsU2V0Q291cG9ucyhuZXh0UHJvcHMpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVCdXR0b25zKGNvdXBvbiwgZSkge1xuICAgICAgICBpZiAoY291cG9uLnZhbGlkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY291cG9uOiBjb3Vwb24uY291cG9uX2lkLCBjb3Vwb25OYW1lOiBjb3Vwb24uY29kZSwgZXJyb3JNc2c6ICcnIH0pXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLmFwcG9pbnRtZW50VHlwZSA9PSAzKXtcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2hHb2xkRGF0YShjb3Vwb24pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLmFwcGx5Q291cG9ucyh0aGlzLnN0YXRlLmFwcG9pbnRtZW50VHlwZSwgY291cG9uLCBjb3Vwb24uY291cG9uX2lkLCB0aGlzLnN0YXRlLmlkLCAoc3VjY2VzcykgPT4ge1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5nbygtMSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG9wZW4gcG9wdXBcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogY291cG9uLmludmFsaWRhdGluZ19tZXNzYWdlIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhcHBseUNvdXBvbigpIHtcbiAgICAgICAgLyppZih0aGlzLnN0YXRlLmNvdXBvbil7ICBcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwbHlDb3Vwb25zKHRoaXMuc3RhdGUuYXBwb2ludG1lbnRUeXBlLCB0aGlzLnN0YXRlLmNvdXBvbk5hbWUgLHRoaXMuc3RhdGUuY291cG9uLHRoaXMuc3RhdGUuaWQgKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LmdvKC0xKSAgIFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yTXNnOidQbGVhc2UgU2VsZWN0IENvdXBvbid9KVxuICAgICAgICB9ICAgKi9cbiAgICB9XG5cbiAgICBnZXREb3RzKG5vLCB1c2VkKSB7XG4gICAgICAgIGxldCBkb3RzID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbm87IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPD0gdXNlZClcbiAgICAgICAgICAgICAgICBkb3RzLnB1c2goPGxpIGtleT17aX0gY2xhc3NOYW1lPVwiYWN0aXZlXCI+PHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+e2l9PC9zcGFuPjwvbGk+KVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGRvdHMucHVzaCg8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJcIj48c3BhbiBjbGFzc05hbWU9XCJkb3RcIj57aX08L3NwYW4+PC9saT4pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRvdHNcbiAgICB9XG5cbiAgICBhcHBseVRleHRDb3Vwb24oZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY291cG9uVGV4dE1lc3NhZ2U6IFwiXCIgfSlcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY291cG9uVGV4dCkge1xuICAgICAgICAgICAgbGV0IGNiID0gKGNvdXBvbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb3Vwb24gJiYgY291cG9uWzBdICYmIGNvdXBvblswXS52YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUJ1dHRvbnMoY291cG9uWzBdLCBlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3Vwb25UZXh0TWVzc2FnZTogXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBjb3Vwb24gY29kZVwiIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuYXBwb2ludG1lbnRUeXBlID09IDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldENvdXBvbnMoe1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IDIsIGxhYl9pZDogdGhpcy5zdGF0ZS5pZCwgdGVzdF9pZHM6IHRoaXMuc3RhdGUudGVzdF9pZHMsIHByb2ZpbGVfaWQ6IHRoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlLCBzYXZlX2luX3N0b3JlOiBmYWxzZSwgY291cG9uX2NvZGU6IHRoaXMuc3RhdGUuY291cG9uVGV4dCwgZGVhbF9wcmljZTogdGhpcy5zdGF0ZS5kZWFsX3ByaWNlLCBjYjogY2IsIGNhcnRfaXRlbTogdGhpcy5zdGF0ZS5jYXJ0X2l0ZW1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5zdGF0ZS5hcHBvaW50bWVudFR5cGUgPT0gMyl7XG4gICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0Q291cG9ucyh7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDp0aGlzLnN0YXRlLmNsaW5pY0lkLGdvbGRfcGxhbl9pZDp0aGlzLnN0YXRlLmlkLCBkZWFsX3ByaWNlOnRoaXMuc3RhdGUuZGVhbF9wcmljZSwgY291cG9uX2NvZGU6IHRoaXMuc3RhdGUuY291cG9uVGV4dCwgc2F2ZV9pbl9zdG9yZTogZmFsc2UsIGNiOiBjYixcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldENvdXBvbnMoe1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IDEsIGRvY3Rvcl9pZDogdGhpcy5zdGF0ZS5pZCwgaG9zcGl0YWxfaWQ6IHRoaXMuc3RhdGUuY2xpbmljSWQsIHByb2ZpbGVfaWQ6IHRoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlLCBwcm9jZWR1cmVzX2lkczogdGhpcy5zdGF0ZS5wcm9jZWR1cmVzX2lkcywgc2F2ZV9pbl9zdG9yZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvdXBvbl9jb2RlOiB0aGlzLnN0YXRlLmNvdXBvblRleHQsIGRlYWxfcHJpY2U6IHRoaXMuc3RhdGUuZGVhbF9wcmljZSwgY2I6IGNiLCBjYXJ0X2l0ZW06IHRoaXMuc3RhdGUuY2FydF9pdGVtXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3Vwb25UZXh0TWVzc2FnZTogXCJQbGVhc2UgZW50ZXIgYSBjb3Vwb24gY29kZVwiIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciAvPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXItdG9wLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3cgbXJuZy1jb3BuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGVmdEJhciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTcgY2VudGVyLWNvbHVtblwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZHItcHJvZmlsZS1zY3JlZW4gYm9va2luZy1jb25maXJtLXNjcmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXJiLTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJ0LTEwIGN0LXByb2ZpbGUgc2tpbi13aGl0ZVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXBvbnMtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBkLTEyIHNlbGVjdC1jb3Vwb24taGVhZGluZ1wiPlNlbGVjdCBDb3Vwb248L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vwb24tc2VhcmNoLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIkVudGVyIENvdXBvbiBoZXJlXCIgc3R5bGU9e3t0ZXh0VHJhbnNmb3JtOid1cHBlcmNhc2UnfX0gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLmNvdXBvblRleHR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5hcHBseVRleHRDb3Vwb24uYmluZCh0aGlzKX0+QXBwbHk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pnt0aGlzLnN0YXRlLmNvdXBvblRleHRNZXNzYWdlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwbGljYWJsZUNvdXBvbnMubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwbGljYWJsZUNvdXBvbnMubWFwKChjb3Vwb25zLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e1wiY291cG9uLXN0eWxlIHNlYXJjaC1saXN0LXJhZGlvIHBkLTEyXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD17Y291cG9ucy5jb3Vwb25faWR9IG5hbWU9XCJyYWRpby1ncm91cFwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUuY291cG9uID09PSBjb3Vwb25zLmNvdXBvbl9pZH0gdmFsdWU9e2NvdXBvbnMuY29kZX0gb25DbGljaz17dGhpcy50b2dnbGVCdXR0b25zLmJpbmQodGhpcywgY291cG9ucyl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZ3LTcwMCB0ZXh0LW1kXCIgaHRtbEZvcj17Y291cG9ucy5jb3Vwb25faWR9Pntjb3Vwb25zLmNvZGV9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXBvbi1pbnB1dCBjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2NvdXBvbnMuZGVzY308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBvbnMuY291cG9uX2NvdW50ID4gMSA/IDxkaXYgY2xhc3NOYW1lPVwiY291cG9uLXRpbWVsaW5lIGJvb2stY29uZmlybWVkLXRpbWVsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXByaW1hcnlcIj5jYW4gYmUgdXNlZCB7Y291cG9ucy5jb3Vwb25fY291bnQgLSBjb3Vwb25zLnVzZWRfY291bnR9IG1vcmUgdGltZXM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvdXBvbi1pbmxpbmUtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldERvdHMoY291cG9ucy5jb3Vwb25fY291bnQsIGNvdXBvbnMudXNlZF9jb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3Vwb25zLnRuYyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXByaW1hcnlcIiBzdHlsZT17eyAnY3Vyc29yJzogJ3BvaW50ZXInIH19IG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgJ29wZW5UZXJtc0NvbmRpdGlvbnMnLCBjb3Vwb25zLnRuYyl9PlRlcm1zICYgQ29uZGl0aW9uczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUub3BlblRlcm1zQ29uZGl0aW9ucyA/IDxUZXJtc0NvbmRpdGlvbnMgdG9nZ2xlPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsICdvcGVuVGVybXNDb25kaXRpb25zJyl9IHRuYz17dGhpcy5zdGF0ZS50bmN9IC8+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibm8tY291cG9uXCI+Tm8gY291cG9ucyBhdmFpbGFibGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmVycm9yID8gPEJvb2tpbmdFcnJvciBoZWFkaW5nPXtcIkludmFsaWQgQ291cG9uXCJ9IG1lc3NhZ2U9e3RoaXMuc3RhdGUuZXJyb3J9IGNsb3NlRXJyb3JQb3B1cD17dGhpcy5jbG9zZUVycm9yUG9wdXB9IC8+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmlnaHRCYXIgZXh0cmFDbGFzcz1cIiBjaGF0LWZsb2F0LWJ0bi0yXCIgbXNnVGVtcGxhdGU9XCJnb2xkX2dlbmVyYWxfdGVtcGxhdGVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDb3Vwb25TZWxlY3Rpb25WaWV3XG4iLCJpbXBvcnQgQ291cG9uU2VsZWN0aW9uIGZyb20gJy4vY291cG9uU2VsZWN0aW9uVmlldydcblxuZXhwb3J0IGRlZmF1bHQgQ291cG9uU2VsZWN0aW9uIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLW92ZXJsYXlcIiBvbkNsaWNrPXt0aGlzLnByb3BzLnRvZ2dsZX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgY2FuY2VsLWFwcG9pbnRtZW50LWRpdiBjYW5jZWwtcG9wdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIHRleHQtY2VudGVyIGFjdGlvbi1zY3JlZW4taGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgY2FuY2VsLWFwcG9pbnRtZW50LWhlYWRcIj5UZXJtcyAmIENvbmRpdGlvbnM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVybXMtY29uZGl0aW9uLWRpdiBwYXlwYWwtZHRscy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXJtcy1jb25kaXRpb25cIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRoaXMucHJvcHMudG5jIH19ID48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50LWJ0biB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmdy01MDBcIiBvbkNsaWNrPXt0aGlzLnByb3BzLnRvZ2dsZX0+RG9uZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEJvb2tpbmdFcnJvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZXJyb3ItbXNnLXBvcFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLW92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwLWVycm9yXCIgc3R5bGU9e3sgd2lkdGg6ICczMDBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItaGVhZFwiPjxpbWcgY2xhc3NOYW1lPVwiZXJyb3JJbmZvSW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaW5mb2Vycm9yLnN2Z1wifSAvPntcIkFsZXJ0XCJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Jvc3MtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ljb25zL2Nsb3NlLnBuZ1wifSBhbHQ9XCJjbG9zZVwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xvc2VFcnJvclBvcHVwfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItbXNnXCI+e3RoaXMucHJvcHMubWVzc2FnZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tpbmdFcnJvciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDb3Vwb25TZWxlY3Rpb25WaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9jb3Vwb25TZWxlY3Rpb25WaWV3J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgZ2V0Q291cG9ucywgYXBwbHlDb3Vwb25zLCBwdXNoTWVtYmVyc0RhdGEgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuXG5cbmNsYXNzIENvdXBvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdHJlbmRlcigpIHtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8Q291cG9uU2VsZWN0aW9uVmlldyB7Li4udGhpcy5wcm9wc30gLz5cblx0XHQpXG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG5cdGNvbnN0IHtcblx0XHRhcHBsaWNhYmxlQ291cG9ucywgc2VsZWN0ZWRQcm9maWxlLCBwcm9maWxlc1xuXHR9ID0gc3RhdGUuVVNFUlxuXG5cdGxldCB7XG5cdFx0c2VsZWN0ZWRTbG90XG5cdH0gPSBzdGF0ZS5ET0NUT1JfU0VBUkNIXG5cblx0bGV0IHsgIHNlbGVjdGVkX3ZpcF9wbGFuLCB2aXBDbHViTWVtYmVyRGV0YWlscywgY3VycmVudFNlbGVjdGVkVmlwTWVtYmVyc0lkLCB2aXBDb3Vwb25zIH0gPSBzdGF0ZS5WSVBDTFVCXG5cblx0cmV0dXJuIHtcblx0XHRhcHBsaWNhYmxlQ291cG9ucyxcblx0XHRzZWxlY3RlZFNsb3QsXG5cdFx0c2VsZWN0ZWRQcm9maWxlLCBwcm9maWxlcyxcblx0XHQgc2VsZWN0ZWRfdmlwX3BsYW4sIHZpcENsdWJNZW1iZXJEZXRhaWxzLCBjdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQsIHZpcENvdXBvbnNcblx0fVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcblxuXHRyZXR1cm4ge1xuXHRcdGdldENvdXBvbnM6IChkYXRhKSA9PiBkaXNwYXRjaChnZXRDb3Vwb25zKGRhdGEpKSxcblx0XHRhcHBseUNvdXBvbnM6IChwcm9kdWN0SWQsIGNvdXBvbkRhdGEsIGNvdXBvbklkLCBob3NwaXRhbElkLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2goYXBwbHlDb3Vwb25zKHByb2R1Y3RJZCwgY291cG9uRGF0YSwgY291cG9uSWQsIGhvc3BpdGFsSWQsIGNhbGxiYWNrKSksXG5cdFx0cHVzaE1lbWJlcnNEYXRhOihjcml0ZXJpYSkgPT5kaXNwYXRjaChwdXNoTWVtYmVyc0RhdGEoY3JpdGVyaWEpKSxcblxuXHR9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDb3Vwb25zKSJdLCJzb3VyY2VSb290IjoiIn0=