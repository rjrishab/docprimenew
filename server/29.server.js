exports.ids = [29];
exports.modules = {

/***/ "./dev/js/components/opd/patientDetails/CodErrorPopup.js":
/*!***************************************************************!*\
  !*** ./dev/js/components/opd/patientDetails/CodErrorPopup.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CodErrorPopup extends _react2.default.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return _react2.default.createElement(
			"div",
			{ className: "search-el-popup-overlay ", onClick: () => this.props.codErrorClicked() },
			_react2.default.createElement(
				"div",
				{ className: "search-el-popup" },
				_react2.default.createElement(
					"div",
					{ className: "widget" },
					_react2.default.createElement(
						"div",
						{ className: "widget-content padiing-srch-el" },
						_react2.default.createElement(
							"p",
							{ className: "srch-el-conent" },
							this.props.codMsg
						),
						_react2.default.createElement(
							"div",
							{ className: "search-el-btn-container" },
							_react2.default.createElement(
								"button",
								{ onClick: () => this.props.codErrorClicked() },
								"Okay"
							)
						)
					)
				)
			)
		);
	}
}

exports.default = CodErrorPopup;

/***/ }),

/***/ "./dev/js/components/opd/patientDetails/PatientDetailsNew.js":
/*!*******************************************************************!*\
  !*** ./dev/js/components/opd/patientDetails/PatientDetailsNew.js ***!
  \*******************************************************************/
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

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _doctorProfileCard = __webpack_require__(/*! ../commons/doctorProfileCard */ "./dev/js/components/opd/commons/doctorProfileCard/index.js");

var _doctorProfileCard2 = _interopRequireDefault(_doctorProfileCard);

var _Loader = __webpack_require__(/*! ../../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _VisitTimeNew = __webpack_require__(/*! ./VisitTimeNew */ "./dev/js/components/opd/patientDetails/VisitTimeNew.js");

var _VisitTimeNew2 = _interopRequireDefault(_VisitTimeNew);

var _choosePatientNew = __webpack_require__(/*! ./choosePatientNew */ "./dev/js/components/opd/patientDetails/choosePatientNew.js");

var _choosePatientNew2 = _interopRequireDefault(_choosePatientNew);

var _index = __webpack_require__(/*! ../commons/selectedClinic/index.js */ "./dev/js/components/opd/commons/selectedClinic/index.js");

var _index2 = _interopRequireDefault(_index);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _cancellation = __webpack_require__(/*! ./cancellation.js */ "./dev/js/components/opd/patientDetails/cancellation.js");

var _cancellation2 = _interopRequireDefault(_cancellation);

var _paymentSummary = __webpack_require__(/*! ./paymentSummary.js */ "./dev/js/components/opd/patientDetails/paymentSummary.js");

var _paymentSummary2 = _interopRequireDefault(_paymentSummary);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _procedureView = __webpack_require__(/*! ./procedureView.js */ "./dev/js/components/opd/patientDetails/procedureView.js");

var _procedureView2 = _interopRequireDefault(_procedureView);

var _bookingErrorPopUp = __webpack_require__(/*! ./bookingErrorPopUp.js */ "./dev/js/components/opd/patientDetails/bookingErrorPopUp.js");

var _bookingErrorPopUp2 = _interopRequireDefault(_bookingErrorPopUp);

var _types = __webpack_require__(/*! ../../../constants/types */ "./dev/js/constants/types.js");

var _WhatsAppOptinView = __webpack_require__(/*! ../../commons/WhatsAppOptin/WhatsAppOptinView.js */ "./dev/js/components/commons/WhatsAppOptin/WhatsAppOptinView.js");

var _WhatsAppOptinView2 = _interopRequireDefault(_WhatsAppOptinView);

var _BookingConfirmationPopup = __webpack_require__(/*! ../../diagnosis/bookingSummary/BookingConfirmationPopup.js */ "./dev/js/components/diagnosis/bookingSummary/BookingConfirmationPopup.js");

var _BookingConfirmationPopup2 = _interopRequireDefault(_BookingConfirmationPopup);

var _ipdLeadForm = __webpack_require__(/*! ../../../containers/ipd/ipdLeadForm.js */ "./dev/js/containers/ipd/ipdLeadForm.js");

var _ipdLeadForm2 = _interopRequireDefault(_ipdLeadForm);

var _paymentForm = __webpack_require__(/*! ../../commons/paymentForm */ "./dev/js/components/commons/paymentForm/index.js");

var _paymentForm2 = _interopRequireDefault(_paymentForm);

var _IpdDoctorCityPopup = __webpack_require__(/*! ../../../containers/ipd/IpdDoctorCityPopup.js */ "./dev/js/containers/ipd/IpdDoctorCityPopup.js");

var _IpdDoctorCityPopup2 = _interopRequireDefault(_IpdDoctorCityPopup);

var _lensfitPopup = __webpack_require__(/*! ../../diagnosis/bookingSummary/lensfitPopup.js */ "./dev/js/components/diagnosis/bookingSummary/lensfitPopup.js");

var _lensfitPopup2 = _interopRequireDefault(_lensfitPopup);

var _CodErrorPopup = __webpack_require__(/*! ./CodErrorPopup.js */ "./dev/js/components/opd/patientDetails/CodErrorPopup.js");

var _CodErrorPopup2 = _interopRequireDefault(_CodErrorPopup);

var _staticDisclaimer = __webpack_require__(/*! ../../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

var _VipGoldPackage = __webpack_require__(/*! ./VipGoldPackage.js */ "./dev/js/components/opd/patientDetails/VipGoldPackage.js");

var _VipGoldPackage2 = _interopRequireDefault(_VipGoldPackage);

var _nonIpdPopup = __webpack_require__(/*! ../../commons/nonIpdPopup.js */ "./dev/js/components/commons/nonIpdPopup.js");

var _nonIpdPopup2 = _interopRequireDefault(_nonIpdPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


const MONTHS = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const WEEK_DAYS = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

class PatientDetailsNew extends _react2.default.Component {
    constructor(props) {
        super(props);

        this.closeErrorPopup = () => {
            this.setState({ error: '' });
        };

        this.toggleGoldPlans = plan => {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'ToggleOpdGoldPlanClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'toggle-opd-gold-plan-clicked', 'plan': plan.id
            };

            _gtm2.default.sendEvent({ data: data });
            this.props.selectVipClubPlan('plan', plan); // toggle/select vip plan
            this.toggleGoldPricePopup();
        };

        this.toggleGoldPricePopup = (value = false) => {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'ChangePlanOpdClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'change-plan-opd-clicked'
            };

            _gtm2.default.sendEvent({ data: data });
            this.setState({ showGoldPriceList: value });
        };

        this.goToGoldPage = () => {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'GoToOpdGoldPlanClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'go-to-opd-gold-plan-clicked'
            };

            _gtm2.default.sendEvent({ data: data });
            this.props.history.push('/vip-gold-details?is_gold=true&source=mobile-opd-summary-gold-clicked&lead_source=Docprime&booking_page=opd');
        };

        this.getDataAfterLogin = () => {
            this.props.fetchData(this.props, this.state.selectedClinic, true);
            if (this.props.odpGoldPredictedPrice && this.props.odpGoldPredictedPrice.length) {
                let selectedPackage = this.props.odpGoldPredictedPrice.filter(x => x.id == this.state.selectedVipGoldPackageId);
                if (selectedPackage && selectedPackage.length == 0) {
                    selectedPackage = this.props.odpGoldPredictedPrice.filter(x => x.is_selected);
                }
                if (selectedPackage && selectedPackage.length) {
                    this.props.selectVipClubPlan('plan', selectedPackage[0]);
                }
            }
        };

        const parsed = queryString.parse(this.props.location.search);

        let doctor_id = this.props.selectedDoctor;
        let hospital_id = this.props.selectedClinic;

        this.state = {
            selectedDoctor: doctor_id,
            selectedClinic: hospital_id,
            paymentData: null,
            loading: false,
            error: "",
            openCancellation: false,
            order_id: false,
            couponCode: '',
            profileDataFilled: true,
            showTimeError: false,
            couponApplied: false,
            is_cashback: false,
            // order_id: !!parsed.order_id,
            use_wallet: true,
            profileError: false,
            cart_item: parsed.cart_item,
            whatsapp_optin: true,
            formData: '',
            showConfirmationPopup: 'close',
            coupon_loading: false,
            seoFriendly: this.props.match.url.includes('-dpp'),
            showIpdLeadForm: true,
            is_payment_coupon_applied: false,
            dateTimeSelectedValue: this.props.selectedDateFormat ? this.props.selectedDateFormat : '',
            showSecondPopup: false,
            firstLeadId: '',
            timeErrorText: '',
            pay_btn_loading: true,
            isMatrix: parsed.is_matrix,
            isEmailNotValid: false,
            isDobNotValid: false,
            show_lensfit_popup: false,
            lensfit_coupons: null,
            lensfit_decline: false,
            isLensfitSpecific: parsed.isLensfitSpecific || false,
            show_banner: false,
            banner_decline: false,
            showGoldPriceList: false,
            selectedVipGoldPackageId: this.props.selected_vip_plan && Object.keys(this.props.selected_vip_plan).length ? this.props.selected_vip_plan.id : '',
            paymentBtnClicked: false,
            enableDropOfflead: true,
            showNonIpdPopup: parsed.show_popup,
            to_be_force: parsed.is_docAds_lead ? parsed.is_docAds_lead : 1,
            disable_page: true,
            is_lead_enabled: true
        };
    }

    toggleWalletUse(e) {
        if (this.state.is_payment_coupon_applied) {
            this.setState({ use_wallet: false });
        } else {
            this.setState({ use_wallet: e.target.checked });
        }
    }

    toggle(which) {
        this.setState({ [which]: !this.state[which] });
    }

    componentDidMount() {

        if (window) {
            window.scrollTo(0, 0);
        }
        const parsed = queryString.parse(this.props.location.search);
        //If token and appointment id is in url then do agent login, and fetch user related data & set state of the page 
        if (parsed.token && parsed.appointment_id) {
            this.props.agentLogin(parsed.token, () => {
                this.props.select_opd_payment_type(1);
                this.props.getUserProfile();
                this.props.fetchTransactions();
                this.props.getCartItems();
            });
        }

        this.getVipGoldPriceList(null);
        //To update Gold Plans on changing props
        if (this.props.selected_vip_plan && this.props.selected_vip_plan.id && this.props.selected_vip_plan.id != this.state.selectedVipGoldPackageId) {
            this.setState({ selectedVipGoldPackageId: this.props.selected_vip_plan.id });
        }

        //Auto Select on Agent Login URL
        if (parsed && parsed.dummy_id) {
            let extraParams = {
                dummy_id: parsed.dummy_id
            };
            this.props.retrieveMembersData('SINGLE_PURCHASE', extraParams, resp => {
                // to retrieve already pushed member data in case of agent or proposer it self
                this.setOpdBooking(resp.data);
                this.getVipGoldPriceList(resp.data.plus_plan);
            });
        }

        if (this.props.location.search.includes("error_code")) {
            setTimeout(() => {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Could not complete payment, Try again!" });
            }, 500);
            this.props.history.replace(this.props.location.pathname);
        }

        let hospital = {};
        let doctorDetails = this.props.DOCTORS[this.props.selectedDoctor];

        if (doctorDetails) {
            let { hospitals } = doctorDetails;

            if (hospitals && hospitals.length) {
                hospitals.map(hsptl => {
                    if (hsptl.hospital_id == this.state.selectedClinic) {
                        hospital = hsptl;
                    }
                });
            }
            if (Object.values(hospital).length) {
                this.setState({ couponApplied: true });
            }
        } else if (this.props.selectedSlot && this.props.selectedSlot.time && Object.values(this.props.selectedSlot.time).length > 0) {
            this.setState({ couponApplied: true });
        } else {
            this.setState({ couponApplied: false });
            return;
        }
        //If coupons data exist then apply for best coupons
        if (this.props.doctorCoupons && this.props.doctorCoupons[this.props.selectedDoctor] && this.props.doctorCoupons[this.props.selectedDoctor].length) {
            let doctorCoupons = this.props.doctorCoupons[this.props.selectedDoctor];
            if (this.props.selectedSlot.selectedClinic == this.state.selectedClinic && this.props.selectedSlot.selectedDoctor == this.props.selectedDoctor) {

                let treatment_Price = 0;
                let selectedProcedures = {};
                if (this.props.selectedDoctorProcedure[this.props.selectedDoctor] && this.props.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic] && this.props.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic].price) {

                    treatment_Price = this.props.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic].price.deal_price || 0;
                }
                let deal_price = this.props.selectedSlot.time.deal_price + treatment_Price;
                let { total_amount_payable_without_coupon } = this.getSelectedUserData(this.props);
                if (total_amount_payable_without_coupon != null) {
                    deal_price = total_amount_payable_without_coupon;
                }
                this.setState({ 'pay_btn_loading': true });
                this.props.applyOpdCoupons('1', doctorCoupons[0].code, doctorCoupons[0].coupon_id, this.props.selectedDoctor, deal_price, this.state.selectedClinic, this.props.selectedProfile, this.getProcedureIds(this.props), this.state.cart_item, (err, data) => {
                    if (!err) {
                        this.setState({ couponCode: doctorCoupons[0].code, couponId: doctorCoupons[0].coupon_id || '', is_cashback: doctorCoupons[0].is_cashback });
                        if (doctorCoupons[0].is_payment_specific) {
                            this.setState({ use_wallet: false, is_payment_coupon_applied: true });
                        }
                    } else {
                        this.setState({ coupon_loading: true });
                        this.getAndApplyBestCoupons(deal_price, false);
                    }
                    this.setState({ 'pay_btn_loading': false });
                });
            } else if (hospital) {
                let deal_price = hospital.deal_price;
                let treatment_Price = 0;
                if (this.props.selectedDoctorProcedure[this.props.selectedDoctor] && this.props.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic] && this.props.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic].price) {

                    treatment_Price = this.props.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic].price.deal_price || 0;
                }
                deal_price += treatment_Price;
                this.setState({ 'pay_btn_loading': true });
                let { total_amount_payable_without_coupon } = this.getSelectedUserData(this.props);
                if (total_amount_payable_without_coupon != null) {
                    deal_price = total_amount_payable_without_coupon;
                }
                this.props.applyOpdCoupons('1', doctorCoupons[0].code, doctorCoupons[0].coupon_id, this.props.selectedDoctor, deal_price, this.state.selectedClinic, this.props.selectedProfile, this.getProcedureIds(this.props), this.state.cart_item, (err, data) => {
                    if (!err) {
                        this.setState({ is_cashback: doctorCoupons[0].is_cashback, couponCode: doctorCoupons[0].code, couponId: doctorCoupons[0].coupon_id || '' });
                        if (doctorCoupons[0].is_payment_specific) {
                            this.setState({ use_wallet: false, is_payment_coupon_applied: true });
                        }
                    } else {
                        this.setState({ coupon_loading: true });
                        this.getAndApplyBestCoupons(deal_price, false);
                    }
                    this.setState({ 'pay_btn_loading': false });
                });
            }
        } else {
            //auto apply coupons
            let deal_price = 0;
            if (this.props.selectedSlot.time && this.props.selectedSlot.time.deal_price) {
                deal_price = this.props.selectedSlot.time.deal_price;
            } else if (hospital) {
                deal_price = hospital.deal_price;
            }

            let treatment_Price = 0;
            if (this.props.selectedDoctorProcedure[this.props.selectedDoctor] && this.props.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic] && this.props.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic].price) {

                treatment_Price = this.props.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic].price.deal_price || 0;
            }

            deal_price += treatment_Price;
            //auto apply coupon if no coupon is apllied
            // if (this.props.selectedDoctor && deal_price && this.props.couponAutoApply) {
            if (this.props.selectedDoctor && deal_price) {
                this.setState({ 'pay_btn_loading': true });
                this.getAndApplyBestCoupons(deal_price, false);
            } else {
                this.props.resetOpdCoupons();
                this.setState({ use_wallet: true, is_payment_coupon_applied: false });
            }
            this.setState({ 'pay_btn_loading': false });
        }

        if (this.state.isLensfitSpecific) {
            setTimeout(() => {
                if (document.getElementById('confirm_booking')) {
                    document.getElementById('confirm_booking').click();
                }
            }, 3000);
        }

        this.sendEmailNotification();
    }

    getVipGoldPriceList(agent_selected_plan_id) {
        let parsed = queryString.parse(this.props.location.search);
        let extraParams = {
            "doctor": this.props.selectedDoctor,
            "hospital": this.props.selectedClinic,
            "gold_vip_plan": [],
            "start_date": null,
            "start_time": null,
            "time_slot_start": null
        };
        if (this.props.selected_vip_plan && this.props.selected_vip_plan.id) {
            extraParams['already_selected_plan'] = this.props.selected_vip_plan.id;
        }
        if (parsed && parsed.dummy_id && agent_selected_plan_id) {
            extraParams['already_selected_plan'] = agent_selected_plan_id;
        }
        extraParams['payment_type'] = this.props.payment_type;
        this.props.getOpdVipGoldPlans(extraParams); // to get gold/vip plans specific to particular doctor/hospital
    }

    getValidCoupon(coupons) {
        let validCoupon = null;
        for (var index in coupons) {
            if (coupons[index].valid) {
                validCoupon = coupons[index];
                break;
            }
        }
        return validCoupon;
    }

    getAndApplyBestCoupons(deal_price = 0, isLensfit, lensFitData) {
        this.props.getCoupons({
            productId: 1, deal_price: deal_price, doctor_id: this.props.selectedDoctor, hospital_id: this.state.selectedClinic, profile_id: this.props.selectedProfile, procedures_ids: this.getProcedureIds(this.props), cart_item: this.state.cart_item,
            cb: coupons => {
                if (coupons) {
                    let validCoupon;
                    if (isLensfit) {
                        validCoupon = lensFitData;
                    } else {
                        validCoupon = this.getValidCoupon(coupons);
                    }
                    if (validCoupon) {
                        this.setState({ is_cashback: validCoupon.is_cashback, couponCode: validCoupon.code, couponId: validCoupon.coupon_id || '', pay_btn_loading: true });
                        this.props.applyCoupons('1', validCoupon, validCoupon.coupon_id, this.props.selectedDoctor, success => {
                            this.setState({ 'pay_btn_loading': false });
                        });
                        let { total_amount_payable_without_coupon } = this.getSelectedUserData(this.props);
                        if (total_amount_payable_without_coupon != null) {
                            deal_price = total_amount_payable_without_coupon;
                        }
                        this.props.applyOpdCoupons('1', validCoupon.code, validCoupon.coupon_id, this.props.selectedDoctor, deal_price, this.state.selectedClinic, this.props.selectedProfile, this.getProcedureIds(this.props), this.state.cart_item, (err, data) => {
                            this.setState({ 'pay_btn_loading': false });
                        });
                        if (validCoupon.is_payment_specific) {
                            this.setState({ use_wallet: false, is_payment_coupon_applied: true });
                        }
                        if (isLensfit) {
                            this.setState({ show_lensfit_popup: false });
                        }
                    } else {
                        if (isLensfit) {
                            this.setState({ show_lensfit_popup: false });
                        }
                        this.props.resetOpdCoupons();
                        this.setState({ use_wallet: true, is_payment_coupon_applied: false, 'pay_btn_loading': false });
                    }
                } else {
                    if (isLensfit) {
                        this.setState({ show_lensfit_popup: false });
                    }
                    this.props.resetOpdCoupons();
                    this.setState({ use_wallet: true, is_payment_coupon_applied: false, 'pay_btn_loading': false });
                }
                this.setState({ coupon_loading: false });
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        //Ref to update date every time on route
        if (_storage2.default.checkAuth()) {
            this.setState({ disable_page: false });
        }
        if (nextProps.selectedDateFormat && nextProps.selectedDateFormat != this.state.dateTimeSelectedValue) {
            this.setState({ dateTimeSelectedValue: nextProps.selectedDateFormat });
        }

        //To update Gold Plans on changing props
        if (nextProps && nextProps.selected_vip_plan && nextProps.selected_vip_plan.id && nextProps.selected_vip_plan.id != this.state.selectedVipGoldPackageId) {
            this.setState({ selectedVipGoldPackageId: nextProps.selected_vip_plan.id });
        }
        /*if (this.state.enableDropOfflead && STORAGE.checkAuth() && !STORAGE.isAgent()) {
            this.nonIpdLeads()
        }*/
        if (!this.state.couponApplied && nextProps.DOCTORS[this.props.selectedDoctor] || this.props.selectedProfile != nextProps.selectedProfile) {
            let hospital = {};
            let doctorDetails = nextProps.DOCTORS[this.props.selectedDoctor];

            if (doctorDetails) {
                let { hospitals } = doctorDetails;

                if (hospitals && hospitals.length) {
                    hospitals.map(hsptl => {
                        if (hsptl.hospital_id == this.state.selectedClinic) {
                            hospital = hsptl;
                        }
                    });
                }
            }

            if (nextProps.doctorCoupons && nextProps.doctorCoupons[this.props.selectedDoctor] && nextProps.doctorCoupons[this.props.selectedDoctor].length) {
                let doctorCoupons = nextProps.doctorCoupons[this.props.selectedDoctor];

                if (Object.values(hospital).length) {
                    let deal_price = hospital.deal_price;

                    let treatment_Price = 0;
                    if (nextProps.selectedDoctorProcedure[this.props.selectedDoctor] && nextProps.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic] && nextProps.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic].price) {

                        treatment_Price = nextProps.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic].price.deal_price || 0;
                    }

                    deal_price += treatment_Price;
                    // let validCoupon = this.getValidCoupon(doctorCoupons)
                    let { total_amount_payable_without_coupon } = this.getSelectedUserData(nextProps);
                    if (total_amount_payable_without_coupon != null) {
                        deal_price = total_amount_payable_without_coupon;
                    }
                    this.props.applyOpdCoupons('1', doctorCoupons[0].code, doctorCoupons[0].coupon_id, this.props.selectedDoctor, deal_price, this.state.selectedClinic, nextProps.selectedProfile, this.getProcedureIds(nextProps), this.state.cart_item, (err, data) => {
                        if (!err) {
                            this.setState({ is_cashback: doctorCoupons[0].is_cashback, couponCode: doctorCoupons[0].code, couponId: doctorCoupons[0].coupon_id || '', couponApplied: true });
                            if (doctorCoupons[0].is_payment_specific) {
                                this.setState({ use_wallet: false, is_payment_coupon_applied: true });
                            }
                        } else {
                            this.setState({ coupon_loading: true });
                            this.getAndApplyBestCoupons(deal_price, false);
                        }
                        this.setState({ 'pay_btn_loading': false });
                    });
                }
            } else {
                let deal_price = 0;

                if (Object.values(hospital).length) {
                    deal_price = hospital.deal_price;
                }

                let treatment_Price = 0;
                if (nextProps.selectedDoctorProcedure[this.props.selectedDoctor] && nextProps.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic] && nextProps.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic].price) {

                    treatment_Price = nextProps.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic].price.deal_price || 0;
                }

                deal_price += treatment_Price;

                if (nextProps.doctorCoupons && nextProps.doctorCoupons[this.props.selectedDoctor] && nextProps.doctorCoupons[this.props.selectedDoctor].length == 0) {
                    this.props.resetOpdCoupons();
                    this.setState({ use_wallet: true, is_payment_coupon_applied: false, 'pay_btn_loading': false });
                } else {
                    //auto apply coupon if no coupon is apllied
                    // if (this.props.selectedDoctor && deal_price && nextProps.couponAutoApply) {
                    if (Object.values(hospital).length && hospital.vip && Object.keys(hospital.vip).length && hospital.vip.is_vip_member && hospital.vip.cover_under_vip) {
                        deal_price = hospital.vip.vip_amount + hospital.vip.vip_convenience_amount;
                    }
                    if (this.props.selectedDoctor && deal_price) {
                        this.props.getCoupons({
                            productId: 1, deal_price: deal_price, doctor_id: this.props.selectedDoctor, hospital_id: this.state.selectedClinic, profile_id: nextProps.selectedProfile, procedures_ids: this.getProcedureIds(nextProps), cart_item: this.state.cart_item,
                            cb: coupons => {
                                if (coupons) {
                                    let validCoupon = this.getValidCoupon(coupons);
                                    if (validCoupon) {
                                        this.setState({ is_cashback: validCoupon.is_cashback, couponCode: validCoupon.code, couponId: validCoupon.coupon_id || '', couponApplied: true, 'pay_btn_loading': true });
                                        this.props.applyCoupons('1', validCoupon, validCoupon.coupon_id, this.props.selectedDoctor, success => {
                                            this.setState({ 'pay_btn_loading': false });
                                        });
                                        let { total_amount_payable_without_coupon } = this.getSelectedUserData(nextProps);
                                        if (total_amount_payable_without_coupon != null) {
                                            deal_price = total_amount_payable_without_coupon;
                                        }
                                        this.props.applyOpdCoupons('1', validCoupon.code, validCoupon.coupon_id, this.props.selectedDoctor, deal_price, this.state.selectedClinic, nextProps.selectedProfile, this.getProcedureIds(nextProps), this.state.cart_item, (err, data) => {
                                            this.setState({ 'pay_btn_loading': false });
                                        });
                                        if (validCoupon.is_payment_specific) {
                                            this.setState({ use_wallet: false, is_payment_coupon_applied: true });
                                        }
                                    } else {
                                        this.setState({ couponApplied: true, use_wallet: true, is_payment_coupon_applied: false, 'pay_btn_loading': false });
                                        this.props.resetOpdCoupons();
                                    }
                                } else {
                                    this.setState({ couponApplied: true, use_wallet: true, is_payment_coupon_applied: false, 'pay_btn_loading': false });
                                    this.props.resetOpdCoupons();
                                }
                            }
                        });
                    } else {
                        this.setState({ couponApplied: true, use_wallet: true, is_payment_coupon_applied: false });
                        this.props.resetOpdCoupons();
                    }
                }
            }
        }
    }

    profileDataCompleted(data) {
        //function to check if profile data is filled by user or not, in case of non-logged in user
        this.setState({ formData: _extends({}, data) });
        if (data.name == '' || data.gender == '' || data.phoneNumber == '' || data.email == '' || !data.otpVerifySuccess || data.dob == '' || data.dob == null) {
            this.props.patientDetails(data);
            this.setState({ profileDataFilled: false, showTimeError: false });
        } else if (data.otpVerifySuccess) {
            let clear_data = {};
            this.props.patientDetails(clear_data);
            this.setState({ profileDataFilled: true, showTimeError: false, profileError: false });
        }
    }

    getProcedureIds(props) {
        if (props.selectedDoctorProcedure[this.props.selectedDoctor] && props.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic] && props.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic].categories) {
            let procedure_ids = [];

            Object.values(props.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic].categories).map(procedure => {
                procedure_ids = procedure_ids.concat(procedure.filter(x => x.is_selected).map(x => x.procedure_id));
            });

            if (procedure_ids.length) {
                return procedure_ids;
            }
        }
        return null;
    }

    getUtmTags() {
        const parsed = queryString.parse(this.props.location.search);
        let utm_tags = {
            utm_source: parsed.utm_source || '',
            utm_medium: parsed.utm_medium || '',
            utm_term: parsed.utm_term || '',
            utm_campaign: parsed.utm_campaign || '',
            referrer: document.referrer || '',
            gclid: parsed.gclid || ''
        };

        if (this.props.common_utm_tags && this.props.common_utm_tags.length) {
            utm_tags = this.props.common_utm_tags.filter(x => x.type == "common_xtra_tags")[0].utm_tags;
        }

        return utm_tags;
    }
    proceed(datePicked, patient, addToCart, total_price, total_wallet_balance, is_selected_user_insurance_status, extraParams, e) {
        const parsed = queryString.parse(this.props.location.search);

        //Check if patient is selected or not
        if (!patient) {
            if (this.state.formData.name != '' && this.state.formData.gender != '' && this.state.formData.phoneNumber != '' && this.state.formData.email != '' && !this.state.formData.otpVerifySuccess) {
                this.setState({ profileError: true });
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please verify your mobile no. to continue" });
                window.scrollTo(0, 0);
                return;
            } else {
                this.setState({ profileError: true });
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Add Patient" });
                window.scrollTo(0, 0);
                return;
            }
        }
        //Check if patient emailid exist or not
        // if (patient && !patient.email) {
        //     this.setState({ isEmailNotValid: true })
        //     SnackBar.show({ pos: 'bottom-center', text: "Please Enter Your Email Id" })
        //     return
        // }
        //Check if patient dob exist or not
        if (patient && !patient.dob) {
            this.setState({ isDobNotValid: true });
            _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Your Date of Birth" });
            return;
        }

        //To claim insurance status & claim
        if (patient && is_selected_user_insurance_status && is_selected_user_insurance_status == 4) {
            _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Your documents from the last claim are under verification.Please write to customercare@docprime.com for more information." });
            window.scrollTo(0, 0);
            return;
        }
        //check if timeslot is selcted by user or not
        if (!datePicked) {
            this.setState({ showTimeError: true });
            _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please pick a time slot." });
            window.scrollTo(0, 0);
            return;
        }

        if (!this.state.profileDataFilled) {
            _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please fill the info" });
            window.scrollTo(0, 0);
            return;
        }
        if (e.target.dataset.disabled == true) {
            return;
        }
        //Check if Covered Under Insurance 

        let is_insurance_applicable = false;
        let is_selected_user_insured = false;
        let is_vip_applicable = false;
        let is_gold_applicable = false;
        let is_selected_user_vip = true; // to check is plus_plan is applicable or not
        if (this.props.selectedSlot && this.props.selectedSlot.date && this.props.DOCTORS[this.props.selectedDoctor]) {
            let priceData = _extends({}, this.props.selectedSlot.time);
            let hospitals = this.props.DOCTORS[this.props.selectedDoctor].hospitals;
            let hospital = null;

            if (hospitals && hospitals.length) {
                hospitals.map(hsptl => {
                    if (hsptl.hospital_id == this.state.selectedClinic) {
                        hospital = hsptl;
                    }
                });
            }

            if (hospital && hospital.insurance) {
                is_insurance_applicable = parseInt(priceData.deal_price) <= hospital.insurance.insurance_threshold_amount && hospital.insurance.is_insurance_covered;
            }

            if (hospital && hospital.vip) {
                is_vip_applicable = hospital.vip.is_vip_member && hospital.vip.cover_under_vip;
            }
        }

        if (this.props.profiles && this.props.profiles[this.props.selectedProfile] && !this.props.profiles[this.props.selectedProfile].isDummyUser) {

            is_selected_user_insured = this.props.profiles[this.props.selectedProfile].is_insured;
            Object.entries(this.props.profiles).map(function ([key, value]) {
                if (value.is_vip_member) {
                    is_selected_user_vip = false;
                }
            });
        }
        is_insurance_applicable = is_insurance_applicable && is_selected_user_insured;

        // React guarantees that setState inside interactive events (such as click) is flushed at browser event boundary
        let show_lensfit = this.props.DOCTORS[this.props.selectedDoctor] && this.props.DOCTORS[this.props.selectedDoctor].lensfit_offer ? this.props.DOCTORS[this.props.selectedDoctor].lensfit_offer.applicable : false;
        let lensfit_coupons = this.props.DOCTORS[this.props.selectedDoctor] && this.props.DOCTORS[this.props.selectedDoctor].lensfit_offer ? this.props.DOCTORS[this.props.selectedDoctor].lensfit_offer.coupon : {};

        /*if(!this.state.show_lensfit_popup && !this.state.lensfit_decline && show_lensfit && !is_insurance_applicable && lensfit_coupons && Object.keys(lensfit_coupons).length > 0 && this.state.couponId !=lensfit_coupons.coupon_id){
                this.setState({show_lensfit_popup:true, lensfit_coupons:lensfit_coupons})
            return
        }*/
        // if (false && !this.state.show_banner && !this.state.banner_decline && !is_vip_applicable && !addToCart && (total_price == 0 || !is_insurance_applicable || (this.state.use_wallet && total_wallet_balance > 0))) {
        //     this.setState({ show_banner: true })
        //     return
        // }

        //Confirmation popup for the tests, whose amount payable is 0
        if (this.state.showConfirmationPopup == 'close' && !addToCart && (total_price == 0 || is_insurance_applicable && (this.props.payment_type == 1 || this.props.payment_type == 6) || this.state.use_wallet && total_wallet_balance > 0)) {
            this.setState({ showConfirmationPopup: 'open', show_banner: false });
            return;
        }

        if (this.state.loading) {
            return;
        }

        if (this.props.payment_type == 6 && _storage2.default.isAgent()) {
            this.setState({ error: "" });
        } else {
            this.setState({ loading: true, error: "" });
        }

        let start_date = this.props.selectedSlot.date;
        let start_time = this.props.selectedSlot.time.value;
        let utm_tags = this.getUtmTags();
        let postData = {
            doctor: this.props.selectedDoctor,
            hospital: this.state.selectedClinic,
            profile: this.props.selectedProfile,
            start_date, start_time,
            payment_type: this.props.payment_type,
            use_wallet: this.props.payment_type == 6 ? false : this.state.use_wallet,
            cart_item: this.state.cart_item,
            utm_tags: utm_tags,
            from_web: true
        };
        let visitor_info = _gtm2.default.getVisitorInfo();
        if (visitor_info && visitor_info.visit_id) {
            postData['visit_id'] = visitor_info.visit_id;
            postData['visitor_id'] = visitor_info.visitor_id;
        }
        if (this.props.payment_type == 6 && this.props.selected_vip_plan && Object.keys(this.props.selected_vip_plan).length && is_selected_user_vip) {
            postData['plus_plan'] = this.props.selected_vip_plan.id;
            postData['plan'] = this.props.selected_vip_plan;
        }

        // if(!hospital.enabled_for_prepaid && !hospital.enabled_for_cod) {
        //     postData['payment_type'] = 1;
        // }

        let profileData = _extends({}, patient);
        if (profileData && profileData.whatsapp_optin == null) {
            profileData['whatsapp_optin'] = this.state.whatsapp_optin;
            this.props.editUserProfile(profileData, profileData.id);
        }
        if (this.props.doctorCoupons && this.props.doctorCoupons[this.props.selectedDoctor] && this.props.doctorCoupons[this.props.selectedDoctor].length && this.props.disCountedOpdPrice >= 0 && this.props.payment_type != 6 && !is_insurance_applicable /*&& !is_vip_applicable*/) {
                postData['coupon_code'] = this.state.couponCode ? [this.state.couponCode] : [];
            }

        //Check SBI UTM Tags
        if (_storage2.default && _storage2.default.getAnyCookie('sbi_utm') && this.props.common_utm_tags && this.props.common_utm_tags.length && this.props.common_utm_tags.filter(x => x.type == 'sbi_utm').length) {

            let tags = this.props.common_utm_tags.filter(x => x.type == 'sbi_utm')[0];
            if (tags.utm_tags) {

                postData['utm_sbi_tags'] = tags.utm_tags;
            }
        } else if (document && document.location && document.location.host && document.location.host.includes('sbi')) {
            postData['utm_sbi_tags'] = {
                utm_tags: {
                    utm_source: 'sbi_utm',
                    utm_term: '',
                    utm_medium: '',
                    utm_campaign: ''
                },
                time: new Date().getTime()
            };
        }

        let procedure_ids = [];
        if (false) {}

        if (addToCart) {

            //Single Flow Agent Booking
            if (_storage2.default.isAgent() && this.props.payment_type == 6) {

                if (extraParams && extraParams.sendWhatsup) {
                    postData['message_medium'] = 'WHATSAPP';
                }
                this.sendSingleFlowAgentBookingURL(postData);
                return;
            }

            let data = {
                'Category': 'ConsumerApp', 'Action': 'OpdAddToCartClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'opd-add-to-cart-clicked'
            };

            _gtm2.default.sendEvent({ data: data });
            this.props.addToCart(1, postData).then(res => {
                if (this.state.isMatrix) {
                    this.props.history.push('/cart?is_matrix=true');
                } else {
                    this.props.history.push('/cart');
                }
            }).catch(err => {
                let message = "Error adding to cart!";
                if (err.message) {
                    message = err.message;
                    if (message.includes('Item already exists in cart.')) {
                        this.props.history.push('/cart');
                        return;
                    }
                }
                this.setState({ loading: false, error: message });
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: message });
            });
            return;
        }
        if (parsed && parsed.appointment_id && parsed.cod_to_prepaid == 'true') {
            //For Cod Appointments
            postData['appointment_id'] = parsed.appointment_id;
            postData['cod_to_prepaid'] = true;
            this.setState({ paymentBtnClicked: true });
            this.props.codToPrepaid(postData, (err, data) => {
                if (!err) {
                    /*if (data.is_agent) {
                        this.props.removeCoupons(this.props.selectedDoctor, this.state.couponId)
                         this.props.history.replace(this.props.location.pathname + `?order_id=${data.data.orderId}`)
                       // this.setState({ order_id: data.data.orderId })
                        return
                    }*/
                    if (data.payment_required) {
                        // send to payment selection page
                        let analyticData = {
                            'Category': 'ConsumerApp', 'Action': 'DoctorOrderCreated', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'doctor_order_created'
                        };
                        _gtm2.default.sendEvent({ data: analyticData });
                        // this.props.history.push(`/payment/${data.data.orderId}?refs=opd`)
                        this.processPayment(data);
                    } else {
                        this.props.removeCoupons(this.props.selectedDoctor, this.state.couponId);
                        // send back to appointment page
                        this.props.history.replace(`/order/summary/${data.data.orderId}?payment_success=true`);
                    }
                } else {
                    this.setState({ paymentBtnClicked: false });
                    let message;
                    if (err.error) {
                        message = err.error;
                    } else {
                        message = "Could not create appointment. Try again later !";
                    }
                    if (err.message) {
                        message = err.message;
                    }
                    this.setState({ loading: false, error: message });
                }
            });
            return;
        }

        let analyticData = {
            'Category': 'ConsumerApp', 'Action': 'OpdProceedButtonClicked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'opd-proceed-button-clicked'
        };
        _gtm2.default.sendEvent({ data: analyticData });

        analyticData = {
            'Category': 'ConsumerApp', 'Action': 'OpdConfirmBookingClicked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'opd-confirm-booking-clicked'
        };
        _gtm2.default.sendEvent({ data: analyticData });
        this.setState({ paymentBtnClicked: true });
        this.props.createOPDAppointment(postData, (err, data) => {
            if (!err) {
                /*if (data.is_agent) {
                    this.props.removeCoupons(this.props.selectedDoctor, this.state.couponId)
                    // this.props.history.replace(this.props.location.pathname + `?order_id=${data.data.orderId}`)
                    this.setState({ order_id: data.data.orderId })
                    return
                }*/
                if (data.payment_required) {
                    // send to payment selection page
                    let analyticData = {
                        'Category': 'ConsumerApp', 'Action': 'DoctorOrderCreated', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'doctor_order_created'
                    };
                    _gtm2.default.sendEvent({ data: analyticData });
                    // this.props.history.push(`/payment/${data.data.orderId}?refs=opd`)
                    this.processPayment(data);
                } else {
                    this.props.removeCoupons(this.props.selectedDoctor, this.state.couponId);
                    // send back to appointment page
                    this.props.history.replace(`/order/summary/${data.data.orderId}?payment_success=true`);
                }
            } else {
                this.setState({ paymentBtnClicked: false });
                let message;
                if (err.error) {
                    message = err.error;
                } else {
                    message = "Could not create appointment. Try again later !";
                }
                if (err.message) {
                    message = err.message;
                }
                this.setState({ loading: false, error: message });
            }
        });
    }

    processPayment(data) {
        if (data && data.status) {
            this.setState({ paymentData: data.data }, () => {
                setTimeout(() => {
                    if (document.getElementById('paymentForm') && Object.keys(this.state.paymentData).length > 0) {
                        let form = document.getElementById('paymentForm');
                        setTimeout(() => {
                            this.props.removeCoupons(this.props.selectedDoctor, this.state.couponId);
                        }, 3000);
                        form.submit();
                    }
                }, 500);
            });
        }
    }

    navigateTo(where, e) {
        switch (where) {
            case "time":
                {
                    if (this.state.seoFriendly) {
                        let url = `${window.location.pathname}?goback=true&type=opd&doctor_id=${this.props.selectedDoctor}&hospital_id=${this.state.selectedClinic}&action_page=timings`;
                        this.props.history.push(url);
                    } else {
                        this.props.history.push(`/opd/doctor/${this.props.selectedDoctor}/${this.state.selectedClinic}/book?goback=true&type=opd`);
                    }
                    return;
                }

            case "patient":
                {
                    this.props.history.push(`/user/family?pick=true`);
                    return;
                }
        }
    }

    sendSingleFlowAgentBookingURL(postData = {}) {
        //for agent login send single flow booking url
        let booking_data = this.getBookingData();
        booking_data = _extends({}, postData, booking_data, { is_single_flow_opd: true, dummy_data_type: 'SINGLE_PURCHASE' });
        this.props.pushMembersData(booking_data, resp => {
            if (resp.dummy_id) {

                let extraParams = {
                    landing_url: `opd/doctor/${this.props.selectedDoctor}/${this.props.selectedClinic}/bookdetails?dummy_id=${resp.dummy_id}`
                };
                if (postData.message_medium) {
                    extraParams['message_medium'] = 'WHATSAPP';
                }
                this.props.sendAgentBookingURL(this.state.order_id, 'sms', 'SINGLE_PURCHASE', null, extraParams, (err, res) => {
                    if (err) {
                        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "SMS SEND ERROR" });
                    } else {
                        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "SMS SENT SUCCESSFULY" });
                    }
                });
            }
        });
    }

    buildOpdTimeSlot() {
        //after agent login , build the state of the page e.g store
        let selectedDate = _extends({}, this.props.selectedSlot);
        if (selectedDate.time) {
            return _extends({}, selectedDate.time);
        }

        let time = {
            text: new Date(selectedDate.date).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).split(' ')[0],
            deal_price: selectedDate.time.deal_price,
            is_available: true,
            mrp: selectedDate.time.mrp,
            fees: selectedDate.time.fees,
            price: selectedDate.time.deal_price,
            title: new Date(selectedDate.date).getHours() >= 12 ? 'PM' : 'AM',
            value: new Date(selectedDate.date).getHours() + new Date(selectedDate.date).getMinutes() / 60
        };

        return time;
    }

    setOpdBooking(data) {

        let { timeSlot, coupon_data, doctor_id, clinic_id, payment_type, profile_id } = data;

        let extraTimeParams = null;
        if (timeSlot.date) {
            extraTimeParams = this.getFormattedDate(timeSlot.date);
        }
        this.props.selectOpdTimeSLot(timeSlot, false, null, extraTimeParams);

        if (coupon_data.coupon_code) {
            let coupon_id = '';
            let is_cashback = false;

            if (coupon_code && Object.keys(coupon_code).length) {
                coupon_id = coupon_code.id;
                is_cashback = coupon_code.is_cashback;
            }
            if (coupon_code) {
                this.props.applyCoupons('1', { code: coupon_data.coupon_code, coupon_id: coupon_id, is_cashback: is_cashback }, coupon_id, doctor_id);
            }
        }

        this.props.select_opd_payment_type(payment_type);

        this.props.selectProfile(profile_id);
        // if (data.actual_data.procedure_ids && data.actual_data.procedure_ids.length) {
        //     this.props.saveProfileProcedures('', '', data.actual_data.procedure_ids, true)
        // }
        // if (data.data.doctor && data.data.doctor.url) {
        //     this.props.history.push(`/${data.data.doctor.url}/booking?doctor_id=${data.actual_data.doctor}&hospital_id=${data.actual_data.hospital}&cart_item=${this.props.id}`)
        // } else {
        //     this.props.history.push(`/opd/doctor/${data.actual_data.doctor}/${data.actual_data.hospital}/bookdetails?cart_item=${this.props.id}`)
        // }
    }

    getBookingData() {
        let time_slot = this.buildOpdTimeSlot();
        let timeSlot = {
            date: new Date(this.props.selectedSlot.date),
            slot: '',
            time: time_slot,
            selectedDoctor: this.props.selectedDoctor,
            selectedClinic: this.props.selectedClinic
        };
        let coupon_data = {};
        if (this.props.doctorCoupons && this.props.selectedDoctor && this.props.doctorCoupons[this.props.selectedDoctor] && this.props.doctorCoupons[this.props.selectedDoctor].length) {
            coupon_data = this.props.doctorCoupons[this.props.selectedDoctor][0];
        }

        return { timeSlot, coupon_data: coupon_data, doctor_id: this.props.selectedDoctor, clinic_id: this.props.selectedClinic, payment_type: this.props.payment_type, profile_id: this.props.selectedProfile };
    }

    applyCoupons() {
        let procedure_ids = "";
        let proc_ids = this.getProcedureIds(this.props);
        if (proc_ids && proc_ids.length) {
            procedure_ids = proc_ids.join(',');
        }

        let analyticData = {
            'Category': 'ConsumerApp', 'Action': 'OpdCouponsClicked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'opd-coupons-clicked'
        };

        _gtm2.default.sendEvent({ data: analyticData });
        this.setState({ pay_btn_loading: true });
        this.props.history.push(`/coupon/opd/${this.props.selectedDoctor}/${this.state.selectedClinic}?procedures_ids=${procedure_ids}&deal_price=${this.getDealPrice()}&cart_item=${this.state.cart_item || ""}`);
    }

    getDealPrice() {
        let hospital = {};
        let doctorDetails = this.props.DOCTORS[this.props.selectedDoctor];

        if (doctorDetails) {
            let { hospitals } = doctorDetails;

            if (hospitals && hospitals.length) {
                hospitals.map(hsptl => {
                    if (hsptl.hospital_id == this.state.selectedClinic) {
                        hospital = hsptl;
                    }
                });
            }
        }

        let deal_price = 0;

        if (Object.values(hospital).length) {
            deal_price = hospital.deal_price;
        }

        let treatment_Price = 0;
        if (this.props.selectedDoctorProcedure[this.props.selectedDoctor] && this.props.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic] && this.props.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic].price) {

            treatment_Price = this.props.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic].price.deal_price || 0;
        }

        deal_price += treatment_Price;
        if (Object.values(hospital).length && hospital.vip && Object.keys(hospital.vip).length && hospital.vip.is_vip_member && hospital.vip.cover_under_vip) {
            deal_price = hospital.vip.vip_amount + hospital.vip.vip_convenience_amount;
        }
        return deal_price;
    }

    getBookingButtonText(total_wallet_balance, price_to_pay, mrp, enabled_for_cod_payment, is_cod_deal_price, is_vip_applicable, vip_amount, is_gold_member, vip_convenience_amount) {

        let price_from_wallet = 0;
        if (this.props.payment_type != 1 && this.props.payment_type != 6) {
            if (enabled_for_cod_payment) {
                if (is_cod_deal_price) {
                    return `Confirm Booking ${is_cod_deal_price > 0 ? `(₹ ${is_cod_deal_price})` : ''}`;
                } else {
                    return `Confirm Booking ${mrp > 0 ? `(₹ ${mrp})` : ''}`;
                }
            } else {
                return `Confirm Booking ${mrp > 0 ? `(₹ ${mrp})` : ''}`;
            }
        }

        let price_from_pg = 0;

        if (this.state.use_wallet && total_wallet_balance && this.props.payment_type != 6) {
            price_from_wallet = Math.min(total_wallet_balance, price_to_pay);
        }

        price_from_pg = price_to_pay - price_from_wallet;

        if (price_from_pg) {
            return `Continue to pay (₹ ${price_from_pg})`;
        }

        return `Confirm Booking`;
    }

    getBookingAmount(total_wallet_balance, price_to_pay, mrp) {
        let price_from_wallet = 0;
        let price_from_pg = 0;

        if (this.state.use_wallet && total_wallet_balance) {
            price_from_wallet = Math.min(total_wallet_balance, price_to_pay);
        }

        price_from_pg = price_to_pay; //- price_from_wallet

        if (price_from_pg) {
            return `₹${price_from_pg}`;
        }

        return `₹0`;
    }

    selectTimeSlot(slot) {
        const parsed = queryString.parse(this.props.location.search);
        slot.selectedDoctor = this.props.selectedDoctor;
        slot.selectedClinic = this.state.selectedClinic;
        this.props.selectOpdTimeSLot(slot, false);
    }

    toggleWhatsap(status, e) {
        this.setState({ whatsapp_optin: status });
    }

    priceConfirmationPopup(choice) {
        if (!choice) {
            this.setState({ showConfirmationPopup: 'close' });
        } else {
            this.setState({ showConfirmationPopup: 'close' });
            if (document.getElementById('confirm_booking')) {
                document.getElementById('confirm_booking').click();
            }
        }
    }

    bannerConfirmationPopup(choice) {
        if (!choice) {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'BookingPageVipBannerCrossClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'bookingpage-vip-banner-cross-click'
            };
            _gtm2.default.sendEvent({ data: data });
            this.setState({ show_banner: choice, banner_decline: true });
        } else {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'BookingPageVipBannerNotInterstedClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'bookingpage-vip-banner-not-intersted-click'
            };
            _gtm2.default.sendEvent({ data: data });
            this.setState({ show_banner: '' });
            if (document.getElementById('confirm_booking')) {
                document.getElementById('confirm_booking').click();
            }
        }
    }

    submitLeadFormGeneration(ipdFormParams) {
        if (close) {
            let gtmData = {
                'Category': 'ConsumerApp', 'Action': 'DoctorBookingIpdFormClosed', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-booking-ipd-form-closed'
            };
            _gtm2.default.sendEvent({ data: gtmData });
        }
        let ipd_data = {
            showChat: true,
            ipdFormParams: ipdFormParams
        };

        this.setState({ showIpdLeadForm: false, showSecondPopup: true }, () => {
            /*
                        this.props.checkIpdChatAgentStatus((response) => {
                            if (response && response.users && response.users.length) {
            
                                this.props.ipdChatView({ showIpdChat: true, ipdForm: ipdFormParams, showMinimize: true })
                            }
                        })*/
        });
    }

    goToInsurance(selectedDoctor, selectedClinic) {
        let Gtmdata = {
            'Category': 'ConsumerApp', 'Action': 'AvailNowLabClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'avail-now-lab-clicked'
        };
        _gtm2.default.sendEvent({ data: Gtmdata });
        let data = {};
        data.thumbnail = selectedDoctor.thumbnail;
        data.name = selectedDoctor.display_name;
        data.url = selectedDoctor.url;
        data.id = selectedDoctor.id;
        data.selectedClinic = selectedClinic;
        data.type = 'doctor';
        this.props.saveAvailNowInsurance(data);
        this.props.history.push('/insurance/insurance-plans?source=doctor-summary-view&show_button=true');
    }

    selectClinic(clinic_id) {
        var href = new URL(window.location.href);
        href.searchParams.set('hospital_id', clinic_id);
        var newUrl = href.toString();
        window.history.replaceState(window.history.state, document.title, newUrl);

        this.setState({ selectedClinic: clinic_id }, () => {
            this.props.fetchData(this.props, clinic_id, false);
        });
    }

    selectDate(e) {
        let data = {
            'Category': 'ConsumerApp', 'Action': 'OpdDateClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'opd-date-clicked'
        };

        _gtm2.default.sendEvent({ data: data });
        if (e.target.value) {
            let slot = { time: {} };
            let date = e.target.value;
            this.setState({ dateTimeSelectedValue: date });
            this.props.selectOpdTimeSLot(slot, false, null, date);
        }
    }

    getFormattedDate(date) {
        date = new Date(date);
        var dd = date.getDate();

        var mm = date.getMonth() + 1;
        var yyyy = date.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        var today = yyyy + '-' + mm + '-' + dd;
        return today;
    }

    setDataOnClinicChange() {
        let slot = { time: {} };
        this.props.selectOpdTimeSLot(slot, false);
        this.setState({ dateTimeSelectedValue: '' });
    }

    saveLeadIdForUpdation(response) {
        if (response.id) {
            this.setState({ firstLeadId: response.id, showSecondPopup: true });
        }
    }

    secondIpdFormSubmitted(formData) {
        this.setState({ showSecondPopup: false }, () => {
            if (formData) {
                try {
                    let popup1 = formData;

                    if (popup1 && popup1.requested_date_time) {
                        let requested_date = new Date(popup1.requested_date_time);
                        let date = this.getFormattedDate(requested_date);
                        if (date) {
                            this.setState({ dateTimeSelectedValue: date });
                            /*let hours = formData.title=='AM'?requested_date.getHours():requested_date.getHours()+12*/
                            let hours = parseInt(requested_date.getHours());

                            let title = formData.title;
                            let foundTimeSlot = null;
                            if (title == 'PM' && hours != 12) {
                                hours = hours + 12;
                            }
                            if (this.props.timeSlots && this.props.timeSlots[date] && this.props.timeSlots[date].length) {

                                let timeSlotData = this.props.timeSlots[date].filter(x => x.title == title);
                                if (timeSlotData && timeSlotData.length && timeSlotData[0].timing && timeSlotData[0].timing.length) {
                                    timeSlotData[0].timing.map(x => {
                                        if (x.value == hours) {
                                            foundTimeSlot = x;
                                        }
                                    });
                                }
                            }
                            if (foundTimeSlot && Object.keys(foundTimeSlot).length) {} else {
                                this.setState({ showTimeError: true, timeErrorText: 'Your requested time slot is not available. Please choose a different one.' });
                            }
                            this.selectTime(foundTimeSlot, date);
                        }
                    }
                } catch (e) {
                    console.log('Error is ' + e);
                }
            }
        });
    }

    selectTime(time, date) {
        let data = null;
        if (time) {

            let timeSpan = Object.assign({}, time);
            timeSpan.title = time.value >= 12 ? 'PM' : 'AM';
            data = {
                date: new Date(date),
                month: MONTHS[new Date(date).getMonth()],
                slot: '',
                time: timeSpan
            };

            data.selectedDoctor = this.props.selectedDoctor;
            data.selectedClinic = this.state.selectedClinic;
        } else {
            data = { time: {} };
        }
        let extraTimeParams = null;
        if (date) {
            extraTimeParams = this.getFormattedDate(date);
        }
        this.props.selectOpdTimeSLot(data, false, null, extraTimeParams);
    }

    applyLensFitCoupons(deal_price, coupon) {
        let data = {
            'Category': 'ConsumerApp', 'Action': 'LensFitOPDApplyClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lensfit-OPD-apply-clicked'
        };
        _gtm2.default.sendEvent({ data: data });
        this.getAndApplyBestCoupons(deal_price, true, coupon);
    }

    closeLensFitPopup() {
        let data = {
            'Category': 'ConsumerApp', 'Action': 'LensFitOpdDontWantClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lensfit-opd-dont-want-clicked'
        };

        _gtm2.default.sendEvent({ data: data });
        this.setState({ show_lensfit_popup: false, lensfit_decline: true }, () => {
            if (document.getElementById('confirm_booking')) {
                document.getElementById('confirm_booking').click();
            }
        });
        // this.setState({show_lensfit_popup:false,lensfit_decline:true})
    }

    codErrorClicked() {
        this.props.history.push('/user/appointments');
    }

    getSelectedUserData(props) {

        let doctorDetails = props.DOCTORS[props.selectedDoctor];
        let total_amount_payable_without_coupon = null;
        let is_selected_user_gold = false;
        if (doctorDetails) {
            let { hospitals } = doctorDetails;
            let hospital = {};
            let patient = null;

            if (props.profiles[props.selectedProfile] && !props.profiles[props.selectedProfile].isDummyUser) {
                patient = props.profiles[props.selectedProfile];
                is_selected_user_gold = props.profiles[props.selectedProfile].is_vip_gold_member;
            }
            if (hospitals && hospitals.length) {
                hospitals.map(hsptl => {
                    if (hsptl.hospital_id == this.state.selectedClinic) {
                        hospital = hsptl;
                    }
                });

                total_amount_payable_without_coupon = hospital.deal_price;
                if (patient && hospital && hospital.vip && hospital.vip.is_enable_for_vip && (patient.is_vip_gold_member || patient.is_vip_member)) {

                    if ( /*hospital.vip.hosp_is_gold && */is_selected_user_gold) {

                        total_amount_payable_without_coupon = hospital.vip.vip_amount + hospital.vip.vip_convenience_amount;
                    } else if (hospital.vip.cover_under_vip && patient.is_vip_member) {
                        total_amount_payable_without_coupon = hospital.vip.vip_amount + hospital.vip.vip_convenience_amount;
                    }
                }

                if (!props.is_any_user_buy_gold && props.payment_type == 6 && props.selected_vip_plan && props.selected_vip_plan.opd) {
                    total_amount_payable_without_coupon = null;
                }
            }
        }
        return { total_amount_payable_without_coupon };
    }
    sendEmailNotification() {
        let doctorDetails = this.props.DOCTORS[this.props.selectedDoctor];
        let selected_hospital = {};
        let patient;

        if (doctorDetails) {
            let { hospitals } = doctorDetails;
            if (hospitals && hospitals.length) {
                hospitals.map(hsptl => {
                    if (hsptl.hospital_id == this.state.selectedClinic) {
                        selected_hospital = hsptl;
                    }
                });
            }
        }

        if (Object.keys(selected_hospital).length > 0 && selected_hospital.is_ipd_hospital && this.props.profiles[this.props.selectedProfile] && !this.props.profiles[this.props.selectedProfile].isDummyUser && this.props.selectedDateFormat) {
            let { date, time, selectedDoctor, selectedClinic } = this.props.selectedSlot;

            if (date) {
                date = new Date(date).toDateString();
            }
            patient = this.props.profiles[this.props.selectedProfile];
            let user_data = { user: patient.user, doctor: selectedDoctor, hospital: selectedClinic, phone_number: patient.phone_number, preferred_date: this.props.selectedDateFormat, time_slot: time.text, gender: patient.gender, dob: patient.dob, user_profile: patient.id };
            this.props.SendIpdBookingEmail(user_data);
        }
    }

    nonIpdLeads(user_phone_number, user_name) {
        const parsed = queryString.parse(this.props.location.search);
        let data = {};
        let doctorDetails = this.props.DOCTORS[this.props.selectedDoctor];
        let selected_hospital = {};
        let patient;
        let specialization;
        let display_total_mrp = 0;
        let display_docprime_discount = 0;
        if (doctorDetails) {
            let { hospitals, general_specialization } = doctorDetails;
            specialization = general_specialization;
            if (hospitals && hospitals.length) {
                hospitals.map(hsptl => {
                    if (hsptl.hospital_id == this.state.selectedClinic) {
                        selected_hospital = hsptl;
                    }
                });
            }
        }
        if (Object.keys(selected_hospital).length > 0 /*&& !selected_hospital.is_ipd_hospital*/) {
                data.lead_type = 'DROPOFF';
                data.lead_source = 'dropoff';
                data.test_name = null;
                data.lab_name = null;
                data.doctor_name = selected_hospital.doctor;
                data.hospital_name = selected_hospital.hospital_name;
                data.specialty = specialization[0].name;
                data.source = parsed;
                data.exitpoint_url = `http://docprime.com${this.props.location.pathname}?doctor_id=${this.state.selectedDoctor}&hospital_id=${this.state.selectedClinic}`;
                if (this.props.profiles[this.props.selectedProfile] && !this.props.profiles[this.props.selectedProfile].isDummyUser) {
                    patient = this.props.profiles[this.props.selectedProfile];
                    data.customer_name = patient.name;
                    data.phone_number = patient.phone_number;
                } else {
                    data.customer_name = null;
                    data.phone_number = null;
                }
                if (user_phone_number) {
                    data.phone_number = user_phone_number;
                    data.customer_name = user_name;
                }
                if (this.props.selectedSlot && Object.keys(this.props.selectedSlot).length) {
                    let { date, time, selectedDoctor } = this.props.selectedSlot;
                    data.selected_time = time.text + ' ' + time.title;
                    data.selected_date = date;
                } else {
                    data.selected_time = null;
                    data.selected_date = null;
                }
                display_total_mrp = parseInt(selected_hospital.mrp);
                display_docprime_discount = display_total_mrp - parseInt(selected_hospital.deal_price);
                if (!this.props.is_any_user_buy_gold && this.props.payment_type == 6 && this.props.selected_vip_plan && this.props.selected_vip_plan.opd) {
                    display_docprime_discount = display_total_mrp - (this.props.selected_vip_plan.opd.gold_price + this.props.selected_vip_plan.opd.convenience_charge);
                }
                data.discount = display_docprime_discount;

                let visitor_info = _gtm2.default.getVisitorInfo();
                if (visitor_info && visitor_info.visit_id) {
                    data.visit_id = visitor_info.visit_id;
                    data.visitor_id = visitor_info.visitor_id;
                }

                if (this.props.common_utm_tags && this.props.common_utm_tags.length) {
                    data.utm_tags = this.props.common_utm_tags.filter(x => x.type == "common_xtra_tags")[0].utm_tags;
                }
                this.setState({ enableDropOfflead: false });
                if (this.state.is_lead_enabled) {
                    this.setState({ is_lead_enabled: false });
                    this.props.NonIpdBookingLead(data);
                    setTimeout(() => {
                        this.setState({ is_lead_enabled: true });
                    }, 5000);
                }
            }
    }

    nonIpdLeadsDocAds(phone_number) {
        const parsed = queryString.parse(this.props.location.search);
        let doctor_id = this.props.selectedDoctor;
        if (this.props.initialServerData && this.props.initialServerData.doctor_id) {
            doctor_id = this.props.initialServerData.doctor_id;
        }
        let criteriaStr = this.props.DOCTORS[doctor_id].display_name;
        let hospital_id;
        let selected_hospital = this.props.DOCTORS[doctor_id].hospitals.filter(x => x.hospital_id == this.state.selectedClinic);
        let display_total_mrp = 0;
        let display_docprime_discount = 0;
        if (selected_hospital.length) {
            hospital_id = selected_hospital[0].hospital_id;
            display_total_mrp = parseInt(selected_hospital[0].mrp);
            display_docprime_discount = display_total_mrp - parseInt(selected_hospital[0].deal_price);
            if (!this.props.is_any_user_buy_gold && this.props.payment_type == 6 && this.props.selected_vip_plan && this.props.selected_vip_plan.opd) {
                display_docprime_discount = display_total_mrp - (this.props.selected_vip_plan.opd.gold_price + this.props.selected_vip_plan.opd.convenience_charge);
            }
        }
        let data = { phone_number: phone_number, lead_source: 'docads', source: parsed, lead_type: 'DOCADS', exitpoint_url: `http://docprime.com${this.props.location.pathname}?doctor_id=${doctor_id}&hospital_id=${hospital_id}`, doctor_id: doctor_id, hospital_id: hospital_id, doctor_name: criteriaStr, hospital_name: null, amount_discount: display_docprime_discount };
        if (this.props.common_utm_tags && this.props.common_utm_tags.length) {
            data.utm_tags = this.props.common_utm_tags.filter(x => x.type == "common_xtra_tags")[0].utm_tags;
        }
        let visitor_info = _gtm2.default.getVisitorInfo();
        if (visitor_info && visitor_info.visit_id) {
            data.visit_id = visitor_info.visit_id;
            data.visitor_id = visitor_info.visitor_id;
        }
        let gtm_data = { 'Category': 'ConsumerApp', 'Action': 'DocAdsBookingSubmitClick', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'doc-ads-booking-Submit-click' };
        _gtm2.default.sendEvent({ data: gtm_data });
        this.props.saveLeadPhnNumber(phone_number);
        if (this.state.is_lead_enabled && !_storage2.default.isAgent) {
            this.setState({ is_lead_enabled: false });
            this.props.NonIpdBookingLead(data);
            setTimeout(() => {
                this.setState({ is_lead_enabled: true });
            }, 5000);
        }
        this.setState({ to_be_force: 0 }, () => {
            this.appendParamToUrl();
        });
    }

    closeIpdLeadPopup(from) {
        if (from) {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'DocAdsBookingCrossClick', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'doc-ads-booking-cross-click'
            };
            _gtm2.default.sendEvent({ data: data });
            this.setState({ to_be_force: 0 }, () => {
                this.appendParamToUrl();
            });
        }
    }

    appendParamToUrl() {
        if (window) {
            var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search + '&is_docAds_lead=' + this.state.to_be_force;
            window.history.pushState({ path: newurl }, '', newurl);
        }
    }

    render() {
        const parsed = queryString.parse(this.props.location.search);
        let doctorDetails = this.props.DOCTORS[this.props.selectedDoctor];
        let doctorCoupons = this.props.doctorCoupons[this.props.selectedDoctor] || [];
        let hospital = {};
        let patient = null;
        let priceData = {};
        let is_insurance_applicable = false;
        let is_selected_user_insured = false;
        let enabled_for_cod_payment = false;
        let enabled_for_prepaid_payment = false;
        let is_default_user_insured = false;
        let is_insurance_buy_able = false;
        let insurance_error_msg = '';
        let show_insurance_error = false;
        let payment_mode_count = 0;
        let is_vip_applicable = false;
        let is_selected_user_insurance_status;
        let is_selected_user_under_vip = false;
        let is_default_user_under_vip = false;
        let is_selected_user_gold = false;
        let cover_under_vip = false;
        let vip_data = {};
        let hide_prepaid = false;
        let all_cities = this.props.DOCTORS[this.props.selectedDoctor] && this.props.DOCTORS[this.props.selectedDoctor].all_cities ? this.props.DOCTORS[this.props.selectedDoctor].all_cities : [];
        if (doctorDetails) {
            let { name, qualifications, hospitals, enabled_for_cod } = doctorDetails;

            if (hospitals && hospitals.length) {
                hospitals.map(hsptl => {
                    if (hsptl.hospital_id == this.state.selectedClinic) {
                        hospital = hsptl;
                    }
                    enabled_for_cod_payment = hospital.enabled_for_cod;
                    enabled_for_prepaid_payment = hospital.enabled_for_prepaid;
                    hide_prepaid = [4290, 3241, 3240, 3560].indexOf(hospital.hospital_id) == -1;
                });
            }
        }
        if (this.props.defaultProfile && this.props.profiles[this.props.defaultProfile]) {
            is_default_user_insured = this.props.profiles[this.props.defaultProfile].is_insured;
            is_default_user_under_vip = this.props.profiles[this.props.defaultProfile].is_vip_member;
        }

        if (this.props.profiles[this.props.selectedProfile] && !this.props.profiles[this.props.selectedProfile].isDummyUser) {
            patient = this.props.profiles[this.props.selectedProfile];
            is_selected_user_insured = this.props.profiles[this.props.selectedProfile].is_insured;
            is_selected_user_insurance_status = this.props.profiles[this.props.selectedProfile].insurance_status;
            is_selected_user_under_vip = this.props.profiles[this.props.selectedProfile].is_vip_member;
            is_selected_user_gold = this.props.profiles[this.props.selectedProfile].is_vip_gold_member;
        }
        if (this.props.selectedSlot && this.props.selectedSlot.date) {
            priceData = _extends({}, this.props.selectedSlot.time);
            priceData.payable_amount = priceData.deal_price;
            priceData.is_cod_deal_price = priceData.cod_deal_price ? priceData.cod_deal_price : priceData.mrp;
            if (hospital && hospital.insurance) {
                is_insurance_applicable = parseInt(priceData.deal_price) <= hospital.insurance.insurance_threshold_amount && hospital.insurance.is_insurance_covered;
                if (hospital.insurance.error_message != '') {
                    insurance_error_msg = hospital.insurance.error_message;
                    show_insurance_error = true;
                }
            }
            if (hospital && hospital.vip) {
                is_vip_applicable = hospital.vip.cover_under_vip && is_selected_user_under_vip;

                vip_data = hospital.vip;
            }

            // reset time slot if doctor/hospital changes
            if (this.props.selectedSlot.selectedClinic != this.state.selectedClinic || this.props.selectedSlot.selectedDoctor != this.props.selectedDoctor) {
                this.setDataOnClinicChange();
            }
        } else if (hospital) {
            priceData.mrp = hospital.mrp;
            priceData.fees = hospital.fees;
            priceData.deal_price = hospital.deal_price;
            priceData.payable_amount = hospital.deal_price;
            priceData.is_cod_deal_price = hospital.cod_deal_price ? hospital.cod_deal_price : hospital.mrp;

            if (hospital.vip) {
                is_vip_applicable = hospital.vip.cover_under_vip && is_selected_user_under_vip;

                vip_data = hospital.vip;
            }
            if (hospital.insurance) {
                is_insurance_applicable = parseInt(hospital.deal_price) <= hospital.insurance.insurance_threshold_amount && hospital.insurance.is_insurance_covered;
                if (hospital.insurance.error_message != '') {
                    insurance_error_msg = hospital.insurance.error_message;
                    show_insurance_error = true;
                }
            }
        }
        let treatment_Price = 0,
            treatment_mrp = 0;
        let selectedProcedures = {};
        if (false) {}

        let total_price = parseInt(priceData.mrp); //+ treatment_Price
        let finalPrice = total_price ? parseInt(total_price) : 0;
        let display_radio_prepaid_price = parseInt(priceData.deal_price);

        if (!this.state.is_cashback && this.props.payment_type != 6) {
            display_radio_prepaid_price = display_radio_prepaid_price - (this.props.disCountedOpdPrice || 0);
            finalPrice = total_price ? parseInt(total_price) - (this.props.disCountedOpdPrice ? this.props.disCountedOpdPrice : 0) : 0;
        }

        let total_wallet_balance = 0;
        if (this.props.userWalletBalance >= 0 && this.props.userCashbackBalance >= 0) {
            total_wallet_balance = this.props.userWalletBalance + this.props.userCashbackBalance;
        }

        let percent_discount = Math.max(0, finalPrice / (parseInt(priceData.mrp) + treatment_mrp) * 100);
        percent_discount = parseInt(100 - percent_discount);
        let docDiscount = parseInt(priceData.mrp) + treatment_mrp - parseInt(priceData.is_cod_deal_price);
        let cod_percentage_discount = parseInt(docDiscount) / parseInt(priceData.mrp) * 100;
        is_insurance_applicable = is_insurance_applicable && is_selected_user_insured;

        //Flag to show gold Single Flow Plans
        let showGoldTogglePaymentMode = !this.props.is_any_user_buy_gold && this.props.selected_vip_plan && this.props.selected_vip_plan.opd && this.props.odpGoldPredictedPrice && this.props.odpGoldPredictedPrice.length && !is_insurance_applicable && this.props.selected_vip_plan.opd.gold_price + this.props.selected_vip_plan.opd.convenience_charge < display_radio_prepaid_price;

        //If Only COD applicable then don't show single flow gold
        if (enabled_for_cod_payment && !enabled_for_prepaid_payment) {
            showGoldTogglePaymentMode = false;
        }

        //Hide Prepaid 
        enabled_for_prepaid_payment = hide_prepaid && enabled_for_prepaid_payment;
        if (showGoldTogglePaymentMode) payment_mode_count++;

        let showCodPaymentMode = /*!is_insurance_applicable && !is_vip_applicable &&*/enabled_for_cod_payment && !(parsed.appointment_id && parsed.cod_to_prepaid == 'true'); /*&& !(vip_data.hosp_is_gold && is_selected_user_gold)*/

        let resetPaymentType = false;
        if (!showGoldTogglePaymentMode && this.props.payment_type == 6) {
            resetPaymentType = true;
        } else if ((!showCodPaymentMode || showCodPaymentMode && is_insurance_applicable) && this.props.payment_type == 2) {
            resetPaymentType = true;
        } else if (!enabled_for_prepaid_payment && this.props.payment_type == 1) {
            resetPaymentType = true;
        }

        if (resetPaymentType && this.props.show_doctor_payment_mode) {
            if (showGoldTogglePaymentMode) {
                this.props.select_opd_payment_type(6);
            } else if (showCodPaymentMode) {
                this.props.select_opd_payment_type(2);
            } else if (enabled_for_prepaid_payment) {
                this.props.select_opd_payment_type(1);
            }
        }

        if (hospital && hospital.insurance && parseInt(hospital.deal_price) <= hospital.insurance.insurance_threshold_amount && hospital.insurance.is_insurance_covered && !is_selected_user_insured) {
            is_insurance_buy_able = true;
        }
        if (enabled_for_prepaid_payment) payment_mode_count++;
        if (showCodPaymentMode) payment_mode_count++;
        // if (enabled_for_prepaid_payment && is_insurance_buy_able)
        //     payment_mode_count++
        let clinic_mrp = priceData.mrp;
        if (is_insurance_applicable && this.props.payment_type != 2) {
            finalPrice = 0;
            priceData.deal_price = 0;
            priceData.mrp = 0;
        }

        if ( /*priceData.fees == 0 && */!is_insurance_applicable && !this.state.is_cashback) {
            if (this.props.payment_type == 1) {
                finalPrice = parseInt(priceData.deal_price) - (this.props.disCountedOpdPrice ? this.props.disCountedOpdPrice : 0);
            } else if (this.props.payment_type == 2) {
                finalPrice = parseInt(priceData.is_cod_deal_price) - (this.props.disCountedOpdPrice ? this.props.disCountedOpdPrice : 0);
            }
        }

        let is_add_to_card = _storage2.default.isAgent() || !is_default_user_insured;

        //Select Next Upcoming Date 

        let { date, time } = this.props.selectedSlot;

        if (date) {
            date = new Date(date).toDateString();
        }

        let upcoming_date = this.props.upcoming_slots && Object.keys(this.props.upcoming_slots).length ? Object.keys(this.props.upcoming_slots)[0] : '';
        let dateAfter24Days = new Date().setDate(new Date().getDate() + 23);
        let showPopup = parsed.showPopup && parsed.showPopup == "true" && this.state.showIpdLeadForm && typeof window == 'object' && window.ON_LANDING_PAGE && !this.props.is_ipd_form_submitted;
        let is_time_selected = this.props.upcoming_slots && Object.keys(this.props.upcoming_slots).length || this.props.selectedSlot && this.props.selectedSlot.date || this.props.selectedDateFormat;

        let vip_discount_price = 0; //finalPrice - (vip_gold_price + vip_convenience_amount)
        let total_amount_payable = finalPrice;
        // is_selected_user_gold = vip_data.cover_under_vip && is_selected_user_gold
        cover_under_vip = vip_data.cover_under_vip;

        let is_cover_under_vip_gold = false;
        if (vip_data && vip_data.is_enable_for_vip) {

            vip_discount_price = total_price - vip_data.vip_amount;

            if ( /*vip_data.hosp_is_gold && */is_selected_user_gold && cover_under_vip) {
                is_cover_under_vip_gold = true;
                total_amount_payable = vip_data.vip_amount + vip_data.vip_convenience_amount - (this.state.is_cashback ? 0 : this.props.disCountedOpdPrice || 0);
                vip_discount_price = total_price - (vip_data.vip_amount + vip_data.vip_convenience_amount);
            } else {

                if (is_vip_applicable) {
                    is_cover_under_vip_gold = true;
                    total_amount_payable = vip_data.vip_amount - (this.state.is_cashback ? 0 : this.props.disCountedOpdPrice || 0);
                } else if (vip_data.hosp_is_gold) {
                    // vip_discount_price = total_price - (vip_data.vip_gold_price + vip_data.vip_convenience_amount)
                }
            }
            finalPrice = total_amount_payable;
        } else {}

        //SET PAYMENT SUMMARY PRICE
        let display_total_mrp = parseInt(priceData.mrp) + treatment_mrp;
        let display_docprime_discount = display_total_mrp - (parseInt(priceData.deal_price) + treatment_Price);
        if (!this.props.is_any_user_buy_gold && this.props.payment_type == 6 && this.props.selected_vip_plan && this.props.selected_vip_plan.opd) {
            display_total_mrp = this.props.selected_vip_plan.opd.mrp || 0;
            display_docprime_discount = display_total_mrp - (this.props.selected_vip_plan.opd.gold_price + this.props.selected_vip_plan.opd.convenience_charge);
            finalPrice = (this.props.selected_vip_plan.opd.gold_price || 0) + this.props.selected_vip_plan.opd.convenience_charge + this.props.selected_vip_plan.deal_price; // - (this.props.disCountedOpdPrice||0)
            total_amount_payable = this.props.selected_vip_plan.opd.gold_price + this.props.selected_vip_plan.opd.convenience_charge + this.props.selected_vip_plan.deal_price; // - (this.props.disCountedOpdPrice||0)
        }

        let extraParams = {
            is_gold_member: vip_data && vip_data.is_gold && is_selected_user_gold,
            total_amount_payable: total_amount_payable

            //Disable All Retail Bookings
        };let disable_all_bookings = !(is_cover_under_vip_gold || is_insurance_applicable);
        if (_storage2.default.checkAuth()) {} else {
            disable_all_bookings = false;
        }
        return _react2.default.createElement(
            'div',
            { className: 'profile-body-wrap' },
            _react2.default.createElement(_DesktopProfileHeader2.default, { bookingPage: true, summaryPage: true }),
            this.state.showConfirmationPopup == 'open' && is_selected_user_insurance_status != 4 ? _react2.default.createElement(_BookingConfirmationPopup2.default, _extends({}, this.props, { priceConfirmationPopup: this.priceConfirmationPopup.bind(this), is_vip_applicable: is_vip_applicable, is_insurance_applicable: is_insurance_applicable, show_banner: this.state.show_banner, bannerConfirmationPopup: this.bannerConfirmationPopup.bind(this) })) : '',
            this.state.show_lensfit_popup ? _react2.default.createElement(_lensfitPopup2.default, _extends({}, this.props, { lensfit_coupons: this.state.lensfit_coupons, applyLensFitCoupons: this.applyLensFitCoupons.bind(this), closeLensFitPopup: this.closeLensFitPopup.bind(this), deal_price: priceData.deal_price, isOPD: true })) : '',

            //Show Vip Gold Single Flow Price List
            this.state.showGoldPriceList && _react2.default.createElement(_VipGoldPackage2.default, { historyObj: this.props.history, vipGoldPlans: this.props.odpGoldPredictedPrice, toggleGoldPricePopup: this.toggleGoldPricePopup, toggleGoldPlans: val => this.toggleGoldPlans(val), selected_vip_plan: this.props.selected_vip_plan, goToGoldPage: this.goToGoldPage }),
            this.state.paymentBtnClicked ? _react2.default.createElement(
                'div',
                { className: 'bkng-time-overlay' },
                _react2.default.createElement(_Loader2.default, null)
            ) : '',
            this.props.codError ? _react2.default.createElement(_CodErrorPopup2.default, { codErrorClicked: () => this.codErrorClicked(), codMsg: this.props.codError }) : _react2.default.createElement(
                'section',
                { className: 'container container-top-margin cls-bnr' },
                _react2.default.createElement(
                    'div',
                    { className: 'row main-row parent-section-row' },
                    _react2.default.createElement(_LeftBar2.default, null),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 col-md-7 col-lg-7 center-column' },
                        this.props.DOCTORS[this.props.selectedDoctor] && this.props.DATA_FETCH ? _react2.default.createElement(
                            'div',
                            null,
                            showPopup ? _react2.default.createElement(_ipdLeadForm2.default, _extends({ submitLeadFormGeneration: this.submitLeadFormGeneration.bind(this) }, this.props, { hospital_name: hospital && hospital.hospital_name ? hospital.hospital_name : null, hospital_id: hospital && hospital.hospital_id ? hospital.hospital_id : null, doctor_name: this.props.DOCTORS[this.props.selectedDoctor].display_name ? this.props.DOCTORS[this.props.selectedDoctor].display_name : null, doctor_id: this.props.selectedDoctor, formSource: 'DoctorBookingPage', saveLeadIdForUpdation: this.saveLeadIdForUpdation.bind(this), noToastMessage: true, is_booking_page: true })) : '',
                            this.props.DOCTORS[this.props.selectedDoctor] && this.state.showSecondPopup && parsed.get_feedback && parsed.get_feedback == '1' ? _react2.default.createElement(_IpdDoctorCityPopup2.default, _extends({}, this.props, { firstLeadId: this.state.firstLeadId, all_doctors: [], all_cities: all_cities, doctorProfilePage: true, secondIpdFormSubmitted: this.secondIpdFormSubmitted.bind(this), hospital_name: hospital && hospital.hospital_name ? hospital.hospital_name : null, hospital_id: hospital && hospital.hospital_id ? hospital.hospital_id : null, doctor_name: this.props.DOCTORS[this.props.selectedDoctor].name ? this.props.DOCTORS[this.props.selectedDoctor].name : '', formSource: 'DoctorBookingPage', is_booking_page: true })) : '',
                            _react2.default.createElement(
                                'section',
                                { className: 'dr-profile-screen booking-confirm-screen mrb-60' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'container-fluid' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row mrb-20' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-12' },
                                            _react2.default.createElement(_index2.default, _extends({}, this.props, {
                                                boxShadowHide: true,
                                                selectedDoctor: this.props.DOCTORS[this.props.selectedDoctor],
                                                selectedClinic: this.state.selectedClinic,
                                                history: this.props.history,
                                                selectClinic: this.selectClinic.bind(this)
                                            })),
                                            _react2.default.createElement(_choosePatientNew2.default, _extends({ patient: patient, navigateTo: this.navigateTo.bind(this) }, this.props, { profileDataCompleted: this.profileDataCompleted.bind(this), profileError: this.state.profileError, doctorSummaryPage: 'true', is_ipd_hospital: hospital && hospital.is_ipd_hospital ? hospital.is_ipd_hospital : '', doctor_id: this.props.selectedDoctor, hospital_id: hospital && hospital.hospital_id ? hospital.hospital_id : '', show_insurance_error: show_insurance_error, insurance_error_msg: insurance_error_msg, isEmailNotValid: this.state.isEmailNotValid, isDobNotValid: this.state.isDobNotValid, is_opd: true, sendEmailNotification: this.sendEmailNotification.bind(this), getDataAfterLogin: this.getDataAfterLogin, nonIpdLeads: this.nonIpdLeads.bind(this), is_docAds_lead: this.state.to_be_force })),
                                            disable_all_bookings ? _react2.default.createElement(
                                                'div',
                                                { className: 'widget info-rtl mrb-15' },
                                                'All bookings are disabled for new retail customers. Please contact us at customercare@docprime.com if you need more information'
                                            ) : '',
                                            _react2.default.createElement(
                                                'div',
                                                { className: `${disable_all_bookings || this.state.disable_page && !_storage2.default.isAgent() ? 'disable-opacity' : ''}` },
                                                parsed.appointment_id && parsed.cod_to_prepaid == 'true' ? _react2.default.createElement(
                                                    'div',
                                                    { className: `widget mrb-15 ${this.props.profileError ? 'rnd-error-nm' : ''}` },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'widget-content' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'lab-visit-time d-flex jc-spaceb' },
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'd-flex flex-1', style: { flexDirection: 'column', paddingRight: 15 } },
                                                                _react2.default.createElement(
                                                                    'h4',
                                                                    { className: 'title d-flex' },
                                                                    _react2.default.createElement(
                                                                        'span',
                                                                        null,
                                                                        _react2.default.createElement('img', { className: 'visit-time-icon', src: "/assets" + '/img/watch-date.svg' })
                                                                    ),
                                                                    'Time Selected'
                                                                )
                                                            ),
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'mbl-view-formatting text-right' },
                                                                _react2.default.createElement(
                                                                    'h4',
                                                                    { className: 'date-time title', style: { textTransform: 'capitalize' } },
                                                                    date ? `${WEEK_DAYS[new Date(date).getDay()]}, ${new Date(date).getDate()} ${MONTHS[new Date(date).getMonth()]}` : '',
                                                                    ' ',
                                                                    time.text ? "|" : "",
                                                                    ' ',
                                                                    time.text,
                                                                    ' ',
                                                                    time.text ? time.value >= 12 ? 'PM' : 'AM' : ''
                                                                )
                                                            )
                                                        )
                                                    )
                                                ) : _react2.default.createElement(
                                                    'div',
                                                    { className: `widget mrb-15 ${this.state.showTimeError ? 'rnd-error-nm' : ''}` },
                                                    this.props.TIMESLOT_DATA_LOADING ? _react2.default.createElement(
                                                        'div',
                                                        { className: 'loader-for-chat-div mt-0' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'loader-for-chat mb-0' },
                                                            _react2.default.createElement('span', null),
                                                            _react2.default.createElement('span', null),
                                                            _react2.default.createElement('span', null),
                                                            _react2.default.createElement('span', null),
                                                            _react2.default.createElement('span', null),
                                                            _react2.default.createElement('span', null)
                                                        ),
                                                        _react2.default.createElement('p', { className: 'ldng-text' })
                                                    ) : is_time_selected || this.props.is_integrated ? _react2.default.createElement(
                                                        'div',
                                                        { className: 'widget-content pos-relative' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'lab-visit-time d-flex jc-spaceb mb-0' },
                                                            _react2.default.createElement(
                                                                'h4',
                                                                { className: 'title mb-0' },
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    null,
                                                                    _react2.default.createElement('img', { className: 'visit-time-icon', src: "/assets" + '/img/watch-date.svg' })
                                                                ),
                                                                'Select Visit Time'
                                                            ),
                                                            !is_time_selected && this.props.is_integrated && _react2.default.createElement(
                                                                'a',
                                                                { href: '', onClick: e => {
                                                                        e.preventDefault();
                                                                        e.stopPropagation();
                                                                        this.navigateTo('time');
                                                                    }, className: 'text-primary fw-700 text-sm' },
                                                                'Select Time'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'p',
                                                            { className: 'apnt-doc-dtl' },
                                                            'The appointment is subject to confirmation from the Doctor. '
                                                        ),
                                                        is_time_selected && _react2.default.createElement(
                                                            _react2.default.Fragment,
                                                            null,
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'date-slecet-cont' },
                                                                _react2.default.createElement(
                                                                    'div',
                                                                    { className: 'nw-inpt-selctr' },
                                                                    _react2.default.createElement(
                                                                        'span',
                                                                        { className: 'nw-pick-hdng' },
                                                                        'Date:'
                                                                    ),
                                                                    _react2.default.createElement(
                                                                        'div',
                                                                        { className: 'caln-input-tp' },
                                                                        _react2.default.createElement('img', { className: 'inp-nw-cal', src: "/assets" + '/img/calnext.svg' }),
                                                                        _react2.default.createElement('input', { type: 'date', name: 'date', onChange: this.selectDate.bind(this), value: this.state.dateTimeSelectedValue ? this.state.dateTimeSelectedValue : upcoming_date, min: this.getFormattedDate(new Date()), max: this.getFormattedDate(new Date(dateAfter24Days)) })
                                                                    )
                                                                ),
                                                                _react2.default.createElement(
                                                                    'div',
                                                                    { className: 'date-slecet-cont' },
                                                                    _react2.default.createElement(
                                                                        'div',
                                                                        { className: 'nw-inpt-selctr' },
                                                                        _react2.default.createElement(
                                                                            'span',
                                                                            { className: 'nw-pick-hdng' },
                                                                            'Time:'
                                                                        ),
                                                                        _react2.default.createElement(
                                                                            'div',
                                                                            { className: 'caln-input-tp', onClick: () => this.navigateTo('time') },
                                                                            _react2.default.createElement('img', { className: 'inp-nw-time', src: "/assets" + '/img/nw-watch.svg' }),
                                                                            _react2.default.createElement('input', { type: 'text', name: 'bday', onClick: () => {}, placeholder: 'Select', value: time && time.text ? `${time.text} ${time.value >= 12 ? 'PM' : 'AM'}` : '' }),
                                                                            _react2.default.createElement('img', { className: 'tm-arw-sgn', src: "/assets" + '/img/customer-icons/dropdown-arrow.svg' })
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        ),
                                                        this.state.timeErrorText ? _react2.default.createElement(
                                                            'p',
                                                            { className: 'apnt-doc-dtl slc-date-error' },
                                                            this.state.timeErrorText
                                                        ) : ''
                                                    ) : _react2.default.createElement(
                                                        'p',
                                                        { className: 'no-tm-slot' },
                                                        _react2.default.createElement('img', { src: "/assets" + "/images/warning-icon.png", style: { height: '15px', width: '15px', marginRight: '8px' } }),
                                                        'No Time Slot Available'
                                                    )
                                                ),
                                                Object.values(selectedProcedures).length ? _react2.default.createElement(_procedureView2.default, { selectedProcedures: selectedProcedures, priceData: priceData }) : '' /*<div className="clearfix pb-list proc-padding-list">
                                                                                                                                                                                                                         <span className="test-price txt-ornage">₹ {priceData.deal_price}<span className="test-mrp">₹ {priceData.mrp}</span></span><span className="fw-500 test-name-item">Doctor consultation</span></div>*/
                                                ,
                                                parseInt(priceData.deal_price) + treatment_Price != 0 && !is_insurance_applicable && this.props.payment_type != 6 ? _react2.default.createElement(
                                                    'div',
                                                    { className: `widget cpn-blur mrb-15 cursor-pointer`, onClick: this.applyCoupons.bind(this) },
                                                    doctorCoupons.length ? _react2.default.createElement(
                                                        'div',
                                                        { className: 'widget-content d-flex jc-spaceb' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'd-flex' },
                                                            _react2.default.createElement(
                                                                'span',
                                                                { className: 'coupon-img' },
                                                                _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/coupon-applied.svg", className: 'visit-time-icon' })
                                                            ),
                                                            _react2.default.createElement(
                                                                'h4',
                                                                { className: 'title coupon-text', style: { color: 'green' } },
                                                                this.state.is_cashback ? "Coupon" : "Coupon",
                                                                ' Applied'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: ' d-flex' },
                                                            _react2.default.createElement(
                                                                'h4',
                                                                { className: 'title', style: { color: 'green', marginRight: 13, fontSize: '12px', marginTop: '6px' } },
                                                                doctorCoupons[0].code
                                                            ),
                                                            _react2.default.createElement(
                                                                'span',
                                                                { className: 'visit-time-icon coupon-icon' },
                                                                _react2.default.createElement('img', { onClick: e => {
                                                                        e.stopPropagation();
                                                                        let analyticData = {
                                                                            'Category': 'ConsumerApp', 'Action': 'OpdCouponsRemoved', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'opd-coupons-removed',
                                                                            'couponId': doctorCoupons[0].coupon_id
                                                                        };
                                                                        _gtm2.default.sendEvent({ data: analyticData });
                                                                        this.props.removeCoupons(this.props.selectedDoctor, doctorCoupons[0].coupon_id);
                                                                        this.setState({ use_wallet: true, is_payment_coupon_applied: false });
                                                                    }, src: "/assets" + "/img/customer-icons/cross.svg" })
                                                            )
                                                        )
                                                    ) : _react2.default.createElement(
                                                        'div',
                                                        null,
                                                        this.state.coupon_loading ? _react2.default.createElement(
                                                            'div',
                                                            { className: 'loading_Linebar_container' },
                                                            _react2.default.createElement('div', { className: 'loading_bar_line' })
                                                        ) : '',
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'widget-content d-flex jc-spaceb' },
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'd-flex' },
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'coupon-img' },
                                                                    _react2.default.createElement('img', { style: { width: '24px' }, src: "/assets" + "/img/ofr-cpn.svg", className: 'visit-time-icon' })
                                                                ),
                                                                _react2.default.createElement(
                                                                    'h4',
                                                                    { className: 'title coupon-text' },
                                                                    'HAVE A COUPON?'
                                                                )
                                                            ),
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'visit-time-icon coupon-icon-arrow' },
                                                                _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/right-arrow.svg" })
                                                            )
                                                        )
                                                    )
                                                ) : '',
                                                this.props.show_doctor_payment_mode && (payment_mode_count > 1 || showGoldTogglePaymentMode) ? _react2.default.createElement(
                                                    'div',
                                                    { className: 'widget mrb-15' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'widget-content' },
                                                        _react2.default.createElement(
                                                            'h4',
                                                            { className: 'title mb-20' },
                                                            'Payment Mode'
                                                        ),
                                                        showGoldTogglePaymentMode ? _react2.default.createElement(
                                                            _react2.default.Fragment,
                                                            null,
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'payment-summary-content' },
                                                                _react2.default.createElement(
                                                                    'div',
                                                                    { className: 'payment-detail d-flex', onClick: e => {
                                                                            e.preventDefault();
                                                                            this.props.select_opd_payment_type(6);
                                                                        } },
                                                                    _react2.default.createElement(
                                                                        'label',
                                                                        { className: 'container-radio payment-type-radio' },
                                                                        _react2.default.createElement(
                                                                            'div',
                                                                            { onClick: e => {
                                                                                    e.stopPropagation();
                                                                                    e.preventDefault();
                                                                                } },
                                                                            _react2.default.createElement(
                                                                                'h4',
                                                                                { className: 'title payment-amt-label', onClick: e => {
                                                                                        e.preventDefault();
                                                                                        this.props.select_opd_payment_type(6);
                                                                                    } },
                                                                                'Doctor booking with ',
                                                                                _react2.default.createElement('img', { className: 'sng-gld-img', src: "/assets" + '/img/gold-lg.png' })
                                                                            ),
                                                                            this.props.selected_vip_plan.opd.mrp == this.props.selected_vip_plan.opd.gold_price ? _react2.default.createElement(
                                                                                'span',
                                                                                { className: 'payment-mode-amt', onClick: e => {
                                                                                        e.stopPropagation();
                                                                                        e.preventDefault();
                                                                                        this.props.select_opd_payment_type(6);
                                                                                    } },
                                                                                `₹${this.props.selected_vip_plan.opd.gold_price + this.props.selected_vip_plan.opd.convenience_charge}`
                                                                            ) : _react2.default.createElement(
                                                                                'span',
                                                                                { className: 'payment-mode-amt', onClick: e => {
                                                                                        e.stopPropagation();
                                                                                        e.preventDefault();
                                                                                        this.props.select_opd_payment_type(6);
                                                                                    } },
                                                                                `₹${this.props.selected_vip_plan.opd.gold_price + this.props.selected_vip_plan.opd.convenience_charge}`,
                                                                                ' ',
                                                                                _react2.default.createElement(
                                                                                    'b',
                                                                                    { className: 'gd-cut-prc' },
                                                                                    `₹${this.props.selected_vip_plan.opd.mrp}`
                                                                                )
                                                                            )
                                                                        ),
                                                                        _react2.default.createElement('input', { checked: this.props.payment_type == 6, type: 'radio', name: 'payment-mode', value: 'on', onChange: e => {
                                                                                e.preventDefault();e.stopPropagation();
                                                                            } }),
                                                                        _react2.default.createElement('span', { className: 'doc-checkmark' })
                                                                    )
                                                                ),
                                                                this.props.selected_vip_plan && this.props.selected_vip_plan.total_allowed_members ? _react2.default.createElement(
                                                                    'div',
                                                                    { className: 'benifit-card' },
                                                                    _react2.default.createElement(
                                                                        'div',
                                                                        { className: 'bnft-content' },
                                                                        _react2.default.createElement(
                                                                            'p',
                                                                            { className: 'bnft-txt' },
                                                                            _react2.default.createElement(
                                                                                'strong',
                                                                                null,
                                                                                `Save ₹${display_docprime_discount}`
                                                                            ),
                                                                            ' on this appointment'
                                                                        ),
                                                                        _react2.default.createElement(
                                                                            'p',
                                                                            { className: 'bnft-subtxt' },
                                                                            `${this.props.selected_vip_plan.total_allowed_members} member plan @Rs${this.props.selected_vip_plan.deal_price}`,
                                                                            _react2.default.createElement(
                                                                                'span',
                                                                                null,
                                                                                _react2.default.createElement('img', { src: "/assets" + '/img/customer-icons/edit.svg', onClick: e => {
                                                                                        e.stopPropagation();
                                                                                        e.preventDefault();
                                                                                        this.goToGoldPage();
                                                                                    } })
                                                                            )
                                                                        )
                                                                    ),
                                                                    _react2.default.createElement(
                                                                        'div',
                                                                        { className: 'bnft-btn', onClick: e => {
                                                                                e.stopPropagation();
                                                                                e.preventDefault();
                                                                                this.goToGoldPage();
                                                                            } },
                                                                        _react2.default.createElement(
                                                                            'button',
                                                                            { type: 'button' },
                                                                            'View All Benefits'
                                                                        )
                                                                    )
                                                                ) : ''
                                                            ),
                                                            _react2.default.createElement('hr', { className: 'aabb' })
                                                        ) : '',
                                                        enabled_for_prepaid_payment ? _react2.default.createElement(
                                                            'div',
                                                            { className: 'payment-summary-content', onClick: e => {
                                                                    e.preventDefault();
                                                                    this.props.select_opd_payment_type(1);
                                                                } },
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'payment-detail d-flex' },
                                                                _react2.default.createElement(
                                                                    'label',
                                                                    { className: 'container-radio payment-type-radio' },
                                                                    _react2.default.createElement(
                                                                        'div',
                                                                        { onClick: e => {
                                                                                e.preventDefault();
                                                                                e.stopPropagation();
                                                                                this.props.select_opd_payment_type(1);
                                                                            } },
                                                                        _react2.default.createElement(
                                                                            'h4',
                                                                            { className: 'title payment-amt-label' },
                                                                            'Only Doctor booking',
                                                                            priceData.mrp == display_radio_prepaid_price ? _react2.default.createElement(
                                                                                'span',
                                                                                { className: 'payment-sub-heading' },
                                                                                'No discounts'
                                                                            ) : ''
                                                                        ),
                                                                        _react2.default.createElement(
                                                                            'span',
                                                                            { className: 'payment-mode-amt' },
                                                                            is_insurance_applicable ? '₹0' :
                                                                            /*vip_data.hosp_is_gold && */is_selected_user_gold && cover_under_vip ? `₹ ${vip_data.vip_amount + vip_data.vip_convenience_amount - (this.props.disCountedOpdPrice || 0)}` : is_vip_applicable ? `₹ ${vip_data.vip_amount - (this.props.disCountedOpdPrice || 0)}` : this.getBookingAmount(total_wallet_balance, display_radio_prepaid_price, parseInt(priceData.mrp) + treatment_mrp)
                                                                        )
                                                                    ),
                                                                    _react2.default.createElement('input', { checked: this.props.payment_type == 1, type: 'radio', name: 'payment-mode', onChange: e => {
                                                                            e.preventDefault();e.stopPropagation();
                                                                        } }),
                                                                    _react2.default.createElement('span', { className: 'doc-checkmark' })
                                                                )
                                                            )
                                                        ) : '',
                                                        enabled_for_prepaid_payment && !is_insurance_applicable && enabled_for_cod_payment && !is_vip_applicable ? _react2.default.createElement('hr', { className: 'aa' }) : '',
                                                        showCodPaymentMode ? _react2.default.createElement(
                                                            'div',
                                                            { className: 'test-report payment-detail mt-20', onClick: e => {
                                                                    e.preventDefault();
                                                                    this.props.select_opd_payment_type(2);
                                                                } },
                                                            _react2.default.createElement(
                                                                'label',
                                                                { className: 'container-radio payment-type-radio' },
                                                                _react2.default.createElement(
                                                                    'div',
                                                                    { onClick: e => {
                                                                            e.stopPropagation();
                                                                            e.preventDefault();
                                                                            this.props.select_opd_payment_type(2);
                                                                        } },
                                                                    _react2.default.createElement(
                                                                        'h4',
                                                                        { className: 'title payment-amt-label' },
                                                                        'Pay at Clinic'
                                                                    ),
                                                                    enabled_for_cod_payment && priceData.is_cod_deal_price ? _react2.default.createElement(
                                                                        _react2.default.Fragment,
                                                                        null,
                                                                        _react2.default.createElement(
                                                                            'span',
                                                                            { className: 'payment-mode-amt' },
                                                                            '\u20B9',
                                                                            priceData.is_cod_deal_price - (this.state.is_cashback ? 0 : this.props.disCountedOpdPrice || 0)
                                                                        )
                                                                    ) : _react2.default.createElement(
                                                                        'span',
                                                                        { className: 'payment-mode-amt' },
                                                                        '\u20B9',
                                                                        clinic_mrp
                                                                    )
                                                                ),
                                                                _react2.default.createElement('input', { checked: this.props.payment_type == 2, type: 'radio', name: 'payment-mode', onChange: e => {
                                                                        e.preventDefault();e.stopPropagation();
                                                                    } }),
                                                                _react2.default.createElement('span', { className: 'doc-checkmark' })
                                                            )
                                                        ) : ''
                                                    )
                                                ) : "",
                                                !is_insurance_applicable && (this.props.payment_type == 1 || this.props.payment_type == 6) ? _react2.default.createElement(
                                                    'div',
                                                    { className: 'widget mrb-15' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'widget-content' },
                                                        _react2.default.createElement(
                                                            'h4',
                                                            { className: 'title mb-20' },
                                                            'Payment Summary'
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'payment-summary-content' },
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'payment-detail d-flex' },
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    null,
                                                                    'MRP'
                                                                ),
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    null,
                                                                    '\u20B9 ',
                                                                    display_total_mrp
                                                                )
                                                            ),

                                                            /*vip_data.hosp_is_gold && */is_selected_user_gold && cover_under_vip && vip_discount_price ? _react2.default.createElement(
                                                                'div',
                                                                { className: 'payment-detail d-flex' },
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    { style: { color: 'green' } },
                                                                    'Docprime Gold Discount ',
                                                                    _react2.default.createElement('img', { className: 'vip-main-ico img-fluid', src: "/assets" + '/img/gold-sm.png' })
                                                                ),
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    { style: { color: 'green' } },
                                                                    '- \u20B9 ',
                                                                    vip_discount_price
                                                                )
                                                            ) : '',
                                                            /*vip_data.hosp_is_gold && */is_selected_user_gold && cover_under_vip ? '' : is_vip_applicable && vip_discount_price ? _react2.default.createElement(
                                                                'div',
                                                                { className: 'payment-detail d-flex' },
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    { style: { color: 'green' } },
                                                                    'Docprime VIP Member ',
                                                                    _react2.default.createElement('img', { className: 'vip-main-ico img-fluid', src: "/assets" + '/img/viplog.png' })
                                                                ),
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    { style: { color: 'green' } },
                                                                    '- \u20B9 ',
                                                                    vip_discount_price
                                                                )
                                                            ) : '',

                                                            //When Gold Membership is buying
                                                            showGoldTogglePaymentMode && this.props.payment_type == 6 && this.props.selected_vip_plan && this.props.selected_vip_plan.deal_price ? _react2.default.createElement(
                                                                'div',
                                                                { className: 'payment-detail d-flex' },
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    null,
                                                                    'Docprime Gold Membership '
                                                                ),
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    null,
                                                                    ' \u20B9 ',
                                                                    this.props.selected_vip_plan.deal_price
                                                                )
                                                            ) : '',
                                                            !is_selected_user_gold /* && vip_data.hosp_is_gold*/ && !cover_under_vip && !is_vip_applicable /*&& priceData.fees != 0 */ && parseInt(display_docprime_discount) > 0 ? _react2.default.createElement(
                                                                'div',
                                                                { className: 'payment-detail d-flex' },
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    { style: { color: 'green' } },
                                                                    this.props.payment_type == 6 ? 'Docprime Gold Discount' : 'Docprime Discount'
                                                                ),
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    { style: { color: 'green' } },
                                                                    '- \u20B9 ',
                                                                    display_docprime_discount
                                                                )
                                                            ) : '',
                                                            !is_vip_applicable && ! /*vip_data.hosp_is_gold && */is_selected_user_gold && !cover_under_vip && this.props.payment_type == 1 && priceData.fees == 0 ? _react2.default.createElement(
                                                                _react2.default.Fragment,
                                                                null,
                                                                _react2.default.createElement(
                                                                    'div',
                                                                    { className: 'payment-detail d-flex' },
                                                                    _react2.default.createElement(
                                                                        'p',
                                                                        null,
                                                                        'Docprime price'
                                                                    ),
                                                                    _react2.default.createElement(
                                                                        'p',
                                                                        null,
                                                                        'Free'
                                                                    )
                                                                ),
                                                                _react2.default.createElement(
                                                                    'div',
                                                                    { className: 'payment-detail d-flex' },
                                                                    _react2.default.createElement(
                                                                        'p',
                                                                        null,
                                                                        'Platform Convenience Fee'
                                                                    ),
                                                                    _react2.default.createElement(
                                                                        'p',
                                                                        null,
                                                                        '\u20B9 ',
                                                                        parseInt(priceData.deal_price)
                                                                    )
                                                                )
                                                            ) : '',

                                                            /* !(vip_data.hosp_is_gold && is_selected_user_gold) && !is_vip_applicable && this.props.payment_type!=6 && */this.props.payment_type != 6 && this.props.disCountedOpdPrice && !this.state.is_cashback ? _react2.default.createElement(
                                                                'div',
                                                                { className: 'payment-detail d-flex' },
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    { style: { color: 'green' } },
                                                                    'Coupon Discount'
                                                                ),
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    { style: { color: 'green' } },
                                                                    '-\u20B9 ',
                                                                    this.props.disCountedOpdPrice
                                                                )
                                                            ) : ''
                                                        ),
                                                        _react2.default.createElement('hr', null),
                                                        priceData ? _react2.default.createElement(
                                                            'div',
                                                            { className: 'test-report payment-detail mt-20' },
                                                            _react2.default.createElement(
                                                                'h4',
                                                                { className: 'title payment-amt-label' },
                                                                'Amount Payable'
                                                            ),
                                                            _react2.default.createElement(
                                                                'h5',
                                                                { className: 'payment-amt-value' },
                                                                '\u20B9 ',
                                                                total_amount_payable
                                                            )
                                                        ) : "",
                                                        this.state.is_cashback && this.props.disCountedOpdPrice ? _react2.default.createElement(
                                                            'div',
                                                            { className: 'csh-back-applied-container' },
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'csh-mny-applied' },
                                                                '+ \u20B9 ',
                                                                this.props.disCountedOpdPrice,
                                                                ' Cashback Applied'
                                                            ),
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'csh-mny-applied-content' },
                                                                'Cashback will be added to your docprime wallet balance on appointment completion'
                                                            )
                                                        ) : ""
                                                    )
                                                ) : _react2.default.createElement(
                                                    'div',
                                                    { className: 'widget mrb-15' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'widget-content clearfix' },
                                                        _react2.default.createElement(
                                                            'h4',
                                                            { className: 'title mb-20' },
                                                            'Payment Summary'
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'payment-summary-content' },
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'payment-detail d-flex' },
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    null,
                                                                    'MRP'
                                                                ),
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    null,
                                                                    '\u20B9 ',
                                                                    display_total_mrp
                                                                )
                                                            )
                                                        ),
                                                        is_selected_user_gold ? '' : !is_insurance_applicable && enabled_for_cod_payment /*&& priceData.fees != 0 */ && priceData.is_cod_deal_price !== priceData.mrp && priceData.is_cod_deal_price && display_total_mrp - parseInt(priceData.is_cod_deal_price) ? _react2.default.createElement(
                                                            _react2.default.Fragment,
                                                            null,
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'payment-detail d-flex' },
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    { style: { color: 'green' } },
                                                                    'Docprime Discount'
                                                                ),
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    { style: { color: 'green' } },
                                                                    '- \u20B9 ',
                                                                    display_total_mrp - parseInt(priceData.is_cod_deal_price)
                                                                )
                                                            ),
                                                            _react2.default.createElement('hr', null)
                                                        ) : '',

                                                        /* !(vip_data.hosp_is_gold && is_selected_user_gold) && !is_vip_applicable && this.props.payment_type!=6 && */!is_insurance_applicable && this.props.payment_type != 6 && this.props.disCountedOpdPrice && !this.state.is_cashback ? _react2.default.createElement(
                                                            'div',
                                                            { className: 'payment-detail d-flex' },
                                                            _react2.default.createElement(
                                                                'p',
                                                                { style: { color: 'green' } },
                                                                'Coupon Discount'
                                                            ),
                                                            _react2.default.createElement(
                                                                'p',
                                                                { style: { color: 'green' } },
                                                                '-\u20B9 ',
                                                                this.props.disCountedOpdPrice
                                                            )
                                                        ) : '',
                                                        _react2.default.createElement('hr', null),
                                                        is_insurance_applicable && this.props.payment_type != 2 ? _react2.default.createElement(
                                                            'div',
                                                            { className: 'ins-val-bx' },
                                                            'Covered Under Insurance'
                                                        ) : priceData ? _react2.default.createElement(
                                                            'div',
                                                            { className: 'test-report payment-detail mt-20' },
                                                            _react2.default.createElement(
                                                                'h4',
                                                                { className: 'title payment-amt-label' },
                                                                'Amount Payable'
                                                            ),
                                                            enabled_for_cod_payment && priceData.is_cod_deal_price && priceData.fees != 0 ? _react2.default.createElement(
                                                                'h5',
                                                                { className: 'payment-amt-value' },
                                                                '\u20B9 ',
                                                                parseInt(priceData.is_cod_deal_price) - (this.state.is_cashback ? 0 : this.props.disCountedOpdPrice || 0)
                                                            ) : this.props.payment_type == 1 && priceData.fees == 0 ? _react2.default.createElement(
                                                                'h5',
                                                                { className: 'payment-amt-value' },
                                                                display_docprime_discount
                                                            ) : _react2.default.createElement(
                                                                'h5',
                                                                { className: 'payment-amt-value' },
                                                                '\u20B9 ',
                                                                display_total_mrp
                                                            )
                                                        ) : "",
                                                        this.state.is_cashback && this.props.disCountedOpdPrice ? _react2.default.createElement(
                                                            'div',
                                                            { className: 'csh-back-applied-container' },
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'csh-mny-applied' },
                                                                '+ \u20B9 ',
                                                                this.props.disCountedOpdPrice,
                                                                ' Cashback Applied'
                                                            ),
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'csh-mny-applied-content' },
                                                                'Cashback will be added to your docprime wallet balance on appointment completion'
                                                            )
                                                        ) : ""
                                                    )
                                                ),

                                                /*!(is_selected_user_gold) && !is_vip_applicable && this.props.payment_type == 1 && */this.props.payment_type != 6 && !is_insurance_applicable && total_wallet_balance && total_wallet_balance > 0 && display_total_mrp > 0 ? _react2.default.createElement(
                                                    'div',
                                                    { className: "widget mrb-15" + (this.state.is_payment_coupon_applied || this.props.payment_type == 2 ? " disable_coupon" : "") },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'widget-content' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'select-pt-form' },
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'referral-select mb-0' },
                                                                _react2.default.createElement(
                                                                    'label',
                                                                    { className: 'ck-bx', style: { fontWeight: '600', fontSize: '14px' } },
                                                                    'Use docprime wallet money',
                                                                    _react2.default.createElement('input', { type: 'checkbox', onChange: this.toggleWalletUse.bind(this), checked: this.state.use_wallet }),
                                                                    _react2.default.createElement('span', { className: 'checkmark' })
                                                                ),
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'rfrl-avl-balance' },
                                                                    'Available ',
                                                                    _react2.default.createElement('img', { style: { width: '6px', marginTop: '5px', marginRight: '3px' }, src: "/assets" + "/img/rupee-icon.svg" }),
                                                                    total_wallet_balance
                                                                ),
                                                                this.state.is_payment_coupon_applied ? _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'cpn-pymnt-txt' },
                                                                    'Wallet Amount can not be used because payment gateway specific coupon is applied.'
                                                                ) : ''
                                                            )
                                                        )
                                                    )
                                                ) : "",
                                                _react2.default.createElement(_WhatsAppOptinView2.default, _extends({}, this.props, { profiles: patient, toggleWhatsap: this.toggleWhatsap.bind(this) })),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'lab-visit-time test-report', style: { marginTop: 10, cursor: 'pointer', marginBottom: 0 }, onClick: this.toggle.bind(this, 'openCancellation') },
                                                    _react2.default.createElement(
                                                        'h4',
                                                        { className: 'title payment-amt-label fs-italic' },
                                                        'Free Cancellation',
                                                        _react2.default.createElement(
                                                            'span',
                                                            { style: { marginLeft: 5 } },
                                                            _react2.default.createElement('img', { src: "/assets" + "/img/icons/info.svg" })
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: '/terms', target: '_blank' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'lab-visit-time test-report', style: { marginTop: 10 } },
                                                        _react2.default.createElement(
                                                            'h4',
                                                            { className: 'title payment-amt-label fs-italic' },
                                                            'Terms of Use',
                                                            _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                _react2.default.createElement('img', { className: 'info-icon-img', src: "/assets" + "/img/icons/info.svg" })
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        ) : _react2.default.createElement(_Loader2.default, null),
                        this.state.openCancellation ? _react2.default.createElement(_cancellation2.default, { props: this.props, toggle: this.toggle.bind(this, 'openCancellation'), is_insurance_applicable: is_insurance_applicable }) : "",
                        _storage2.default.isAgent() && this.props.payment_type == 6 ? _react2.default.createElement(
                            _react2.default.Fragment,
                            null,
                            _react2.default.createElement(
                                'div',
                                { className: `${disable_all_bookings ? 'disable-opacity' : ''} fixed sticky-btn p-0 v-btn  btn-lg horizontal bottom no-round text-lg buttons-addcart-container` },
                                _react2.default.createElement(
                                    'button',
                                    { onClick: this.proceed.bind(this, this.props.selectedSlot && this.props.selectedSlot.date, patient, true, total_amount_payable, total_wallet_balance, is_selected_user_insurance_status, {}), className: 'v-btn-primary book-btn-mrgn-adjust' },
                                    'Send SMS EMAIL'
                                ),
                                _react2.default.createElement(
                                    'button',
                                    { onClick: this.proceed.bind(this, this.props.selectedSlot && this.props.selectedSlot.date, patient, true, total_amount_payable, total_wallet_balance, is_selected_user_insurance_status, { sendWhatsup: true }), className: 'add-shpng-cart-btn' },
                                    _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/wa-logo-sm.png' }),
                                    'Send on Whatsapp'
                                )
                            )
                        ) : '',
                        _react2.default.createElement(
                            'div',
                            { className: `${disable_all_bookings ? 'disable-opacity' : ''} fixed sticky-btn p-0 v-btn  btn-lg horizontal bottom no-round text-lg buttons-addcart-container ${!is_add_to_card && this.props.ipd_chat && this.props.ipd_chat.showIpdChat ? 'ipd-foot-btn-duo' : ''} ${this.state.disable_page ? 'disable-all' : ''}` },
                            this.props.payment_type != 6 && (_storage2.default.isAgent() || !is_default_user_insured || this.state.isMatrix) && !(parsed.appointment_id && parsed.cod_to_prepaid == 'true') ? _react2.default.createElement(
                                'button',
                                { disabled: this.state.pay_btn_loading, className: "add-shpng-cart-btn" + (!this.state.cart_item ? "" : " update-btn") + (this.state.pay_btn_loading ? " disable-all" : ""), 'data-disabled': !(patient && this.props.selectedSlot && this.props.selectedSlot.date) || this.state.loading, onClick: this.proceed.bind(this, this.props.selectedSlot && this.props.selectedSlot.date, patient, true, total_amount_payable, total_wallet_balance, is_selected_user_insurance_status, {}) },
                                this.state.cart_item ? "" : _react2.default.createElement('img', { src: "/assets" + "/img/cartico.svg" }),
                                this.state.cart_item ? "Update" : "Add to Cart"
                            ) : '',
                            (_storage2.default.isAgent() || this.state.isMatrix) && !(enabled_for_cod_payment && this.props.payment_type == 2) || this.state.cart_item ? "" : _react2.default.createElement(
                                'button',
                                { disabled: this.state.pay_btn_loading, className: `v-btn-primary book-btn-mrgn-adjust ${this.state.pay_btn_loading ? " disable-all" : ""}`, id: 'confirm_booking', 'data-disabled': !(patient && this.props.selectedSlot && this.props.selectedSlot.date) || this.state.loading, onClick: this.proceed.bind(this, this.props.selectedSlot && this.props.selectedSlot.date, patient, false, total_amount_payable, total_wallet_balance, is_selected_user_insurance_status, {}) },
                                this.getBookingButtonText(total_wallet_balance, finalPrice, display_total_mrp, enabled_for_cod_payment, priceData.is_cod_deal_price - (this.state.is_cashback ? 0 : this.props.disCountedOpdPrice || 0), is_vip_applicable, vip_data.vip_amount, /*vip_data.hosp_is_gold && */is_selected_user_gold, vip_data.vip_convenience_amount)
                            )
                        )
                    ),
                    this.state.error ? _react2.default.createElement(_bookingErrorPopUp2.default, { message: this.state.error, closeErrorPopup: this.closeErrorPopup }) : '',
                    _react2.default.createElement(_RightBar2.default, { extraClass: 'chat-float-btn-2', type: 'opd', noChatButton: true, showDesktopIpd: true, msgTemplate: 'gold_general_template' })
                )
            ),
            _react2.default.createElement(_staticDisclaimer2.default, null),
            this.state.paymentData ? _react2.default.createElement(_paymentForm2.default, { multiOrder: this.props.payment_type === 6, paymentData: this.state.paymentData, refs: 'opd' }) : ""
        );
    }
}

exports.default = PatientDetailsNew;

/***/ }),

/***/ "./dev/js/components/opd/patientDetails/cancellation.js":
/*!**************************************************************!*\
  !*** ./dev/js/components/opd/patientDetails/cancellation.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ({ toggle, props, is_insurance_applicable }) => {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement("div", { className: "cancel-overlay cancel-overlay-zindex", onClick: toggle }),
        _react2.default.createElement(
            "div",
            { className: "widget cancel-appointment-div cancel-popup" },
            _react2.default.createElement(
                "div",
                { className: "widget-header text-center action-screen-header" },
                _react2.default.createElement(
                    "p",
                    { className: "fw-500 cancel-appointment-head" },
                    "Cancellation Policy"
                ),
                _react2.default.createElement("img", { src: "/assets" + "/img/icons/close.png", className: "close-modal", onClick: toggle }),
                _react2.default.createElement("hr", null)
            ),
            _react2.default.createElement(
                "div",
                { className: "cancel-policy-text cancelPolicyHeight", style: { paddingTop: 0 } },
                _react2.default.createElement(
                    "ul",
                    { className: "booking-cancel" },
                    is_insurance_applicable ? _react2.default.createElement(
                        _react2.default.Fragment,
                        null,
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "strong",
                                null,
                                "For Online Paid Appointments -"
                            ),
                            " You can cancel your scheduled appointment at any time."
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "strong",
                                null,
                                "In Case of A No Show (Patient Unavailable) -"
                            ),
                            " In the event, the services are not availed at the appointed date and time. We will automatically cancel your appointment at 12:00 midnight of the date followed by the appointment date."
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "strong",
                                null,
                                "Third Party Cancellation (Provider Unavailable) -"
                            ),
                            " Occasionally, appointments may be canceled or postponed due to unavailability of the service provider. Should this occur, we will contact or inform you and you may reschedule your appointment as per your convenience."
                        )
                    ) : _react2.default.createElement(
                        _react2.default.Fragment,
                        null,
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "strong",
                                null,
                                "For Online Paid Appointments -"
                            ),
                            " You can cancel your scheduled appointment and initiate the immediate refund at any time. Immediate refund shall be subject to terms and conditions as described under this section mentioned below."
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "strong",
                                null,
                                "In Case of A No Show (Patient Unavailable) -"
                            ),
                            " In the event, the services are not availed at the appointed date and time. We will automatically cancel your appointment at 12:00 midnight of the date followed by the appointment date."
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "strong",
                                null,
                                "Third Party Cancellation (Provider Unavailable) -"
                            ),
                            " Occasionally, appointments may be canceled or postponed due to unavailability of the service provider. Should this occur, we will contact or inform you and you may reschedule your appointment as per your convenience."
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "strong",
                                null,
                                "24 Hours Cancellation -"
                            ),
                            " Cancellation is allowed for all the appointments. In such cases, we will initiate the immediate refund of your money as per the process defined under Refund, Rescheduling, and Cancellation section of the  ",
                            _react2.default.createElement(
                                "u",
                                { style: { color: `var(--text--primary--color)`, cursor: 'pointer', display: 'inline-block' }, onClick: () => props.history.push('/terms?forBookingScroll=true') },
                                "End User Agreement."
                            )
                        )
                    )
                )
            )
        )
    );
};

/***/ }),

/***/ "./dev/js/components/opd/patientDetails/index.js":
/*!*******************************************************!*\
  !*** ./dev/js/components/opd/patientDetails/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PatientDetailsNew = __webpack_require__(/*! ./PatientDetailsNew.js */ "./dev/js/components/opd/patientDetails/PatientDetailsNew.js");

var _PatientDetailsNew2 = _interopRequireDefault(_PatientDetailsNew);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _PatientDetailsNew2.default;

/***/ }),

/***/ "./dev/js/components/opd/patientDetails/paymentSummary.js":
/*!****************************************************************!*\
  !*** ./dev/js/components/opd/patientDetails/paymentSummary.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ({ toggle, deal_price, mrp, payable_amount }) => {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement("div", { className: "cancel-overlay", onClick: toggle }),
        _react2.default.createElement(
            "div",
            { className: "widget cancel-appointment-div payment-popup" },
            _react2.default.createElement(
                "div",
                { className: "widget-header text-center action-screen-header" },
                _react2.default.createElement(
                    "p",
                    { className: "fw-500 cancel-appointment-head" },
                    "Payment Summary"
                ),
                _react2.default.createElement("hr", null)
            ),
            _react2.default.createElement(
                "div",
                { className: "payment-content-div" },
                _react2.default.createElement(
                    "p",
                    { className: "payment-content" },
                    "Doctor Fees"
                ),
                _react2.default.createElement(
                    "p",
                    { className: "payment-content fw-500" },
                    "\u20B9  ",
                    mrp
                )
            ),
            _react2.default.createElement(
                "div",
                { className: "payment-content-div" },
                _react2.default.createElement(
                    "p",
                    { className: "payment-content" },
                    "Docprime Discount"
                ),
                _react2.default.createElement(
                    "p",
                    { className: "payment-content fw-500" },
                    "\u20B9  ",
                    mrp - deal_price
                )
            ),
            _react2.default.createElement(
                "div",
                { className: "payment-content-div" },
                _react2.default.createElement(
                    "p",
                    { className: "payment-content fw-500" },
                    "Subtotal"
                ),
                _react2.default.createElement(
                    "p",
                    { className: "payment-content fw-500" },
                    "\u20B9  ",
                    deal_price
                )
            ),
            _react2.default.createElement(
                "div",
                { className: "payment-content-div mrt-20" },
                _react2.default.createElement(
                    "p",
                    { className: "payment-content fw-500" },
                    "Amount Payable"
                ),
                _react2.default.createElement(
                    "p",
                    { className: "payment-content fw-500" },
                    "\u20B9  ",
                    payable_amount
                )
            ),
            _react2.default.createElement(
                "div",
                { className: "payment-content-btn text-center" },
                _react2.default.createElement(
                    "button",
                    { className: "fw-500", onClick: toggle },
                    "Done"
                )
            )
        )
    );
};

/***/ }),

/***/ "./dev/js/components/opd/patientDetails/procedureView.js":
/*!***************************************************************!*\
  !*** ./dev/js/components/opd/patientDetails/procedureView.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProcedureView extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return _react2.default.createElement(
            "div",
            { className: "widget mrb-15" },
            _react2.default.createElement(
                "div",
                { className: "widget-content" },
                _react2.default.createElement(
                    "div",
                    { className: "d-flex jc-spaceb" },
                    _react2.default.createElement(
                        "h4",
                        { className: "title", style: { fontSize: 14 } },
                        _react2.default.createElement(
                            "span",
                            null,
                            _react2.default.createElement("img", { src: "/assets" + "/img/hand.svg", className: "visit-time-icon", style: { width: 24, marginRight: 8 } })
                        ),
                        "Services Included"
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "clearfix pb-list proc-padding-list" },
                    _react2.default.createElement(
                        "span",
                        { className: "test-price txt-ornage" },
                        "\u20B9 ",
                        parseInt(this.props.priceData.deal_price),
                        _react2.default.createElement(
                            "span",
                            { className: "test-mrp" },
                            "\u20B9 ",
                            parseInt(this.props.priceData.mrp)
                        )
                    ),
                    _react2.default.createElement(
                        "span",
                        { className: "fw-500 test-name-item" },
                        "Doctor consultation "
                    )
                ),
                this.props.selectedProcedures ? Object.values(this.props.selectedProcedures).map(procedure => {

                    return procedure.filter(x => x.is_selected).map((category, i) => {

                        return _react2.default.createElement(
                            "div",
                            { className: "clearfix pb-list proc-padding-list" },
                            _react2.default.createElement(
                                "span",
                                { className: "test-price txt-ornage" },
                                "\u20B9 ",
                                category.deal_price,
                                _react2.default.createElement(
                                    "span",
                                    { className: "test-mrp" },
                                    "\u20B9 ",
                                    category.mrp
                                )
                            ),
                            _react2.default.createElement(
                                "span",
                                { className: "fw-500 test-name-item" },
                                category.procedure_name
                            )
                        );
                    });
                }) : ''
            )
        );
    }
}

exports.default = ProcedureView;

/***/ }),

/***/ "./dev/js/containers/opd/PatientDetails.js":
/*!*************************************************!*\
  !*** ./dev/js/containers/opd/PatientDetails.js ***!
  \*************************************************/
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

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _index2 = __webpack_require__(/*! ../../components/opd/patientDetails/index.js */ "./dev/js/components/opd/patientDetails/index.js");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class PatientDetails extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeSlots: null,
            doctor_leaves: [],
            DATA_FETCH: false,
            upcoming_slots: null,
            is_integrated: false,
            codError: null
        };
    }

    // static loadData(store, match, queryData) {
    //     let doctor_id = match.params.id || queryData.doctor_id
    //     let hospital_id = match.params.clinicId || queryData.hospital_id

    //     return store.dispatch(getDoctorById(doctor_id, hospital_id))
    // }

    fetchData(props, clinic_id, callDoctorById) {
        const parsed = queryString.parse(props.location.search);
        let doctor_id = props.selectedDoctor || props.match.params.id || parsed.doctor_id;
        let hospital_id;
        if (clinic_id) {
            hospital_id = clinic_id;
        } else {
            hospital_id = parsed.hospital_id || props.match.params.clinicId;
        }

        if (window) {
            window.scrollTo(0, 0);
        }

        if (_storage2.default.checkAuth()) {
            //Check if user is login, if logged in then fetch user related data
            props.getUserProfile();
            props.fetchTransactions();
            props.getCartItems();
        }

        if (doctor_id) {
            if (callDoctorById) {
                let extraParams = {};
                //If appointment_id is availble in the url, then we get data corresponding to that appointment
                if (parsed.appointment_id) {
                    extraParams['appointment_id'] = parsed.appointment_id;
                }
                props.getDoctorById(doctor_id, hospital_id, props.commonProfileSelectedProcedures, '', extraParams, (error, response) => {
                    if (error && error.message) {
                        this.setState({ codError: error.message });
                    }
                });
            }

            /*if (props.selectedSlot && props.selectedSlot.date && !props.selectedSlot.summaryPage) {
                this.setState({ DATA_FETCH: true })
            } else {
                 props.getTimeSlots(doctor_id, hospital_id, (timeSlots) => {
                    this.setState({ timeSlots: timeSlots.timeslots, doctor_leaves: timeSlots.doctor_leaves, DATA_FETCH: true, upcoming_slots: timeSlots.upcoming_slots })
                })
            }*/
            let selectedDate = new Date();
            if (this.props.selectedDateFormat) {
                selectedDate = this.props.selectedDateFormat;
            } else {
                selectedDate = this.getFormattedDate(selectedDate);
            }
            let extraParams = {
                selectedDate: selectedDate
            };
            props.getTimeSlots(doctor_id, hospital_id, extraParams, timeSlots => {
                this.setState({ timeSlots: timeSlots.timeslots, doctor_leaves: timeSlots.doctor_leaves, DATA_FETCH: true, upcoming_slots: timeSlots.upcoming_slots, is_integrated: timeSlots.is_integrated || false });
            });
        }
    }

    componentWillReceiveProps(props) {
        if (props.selectedDoctor != this.props.selectedDoctor) {
            this.fetchData(props, null, true);
        }
    }

    componentDidMount() {
        this.fetchData(this.props, null, true);
    }

    getFormattedDate(date) {
        //function which return date in yyyy-mm-dd format
        var dd = date.getDate();

        var mm = date.getMonth() + 1;
        var yyyy = date.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        var today = yyyy + '-' + mm + '-' + dd;
        return today;
    }

    render() {

        const parsed = queryString.parse(this.props.location.search);

        let doctor_id = this.props.selectedDoctor || this.props.match.params.id || parsed.doctor_id;
        let hospital_id = parsed.hospital_id || this.props.match.params.clinicId;

        return _react2.default.createElement(_index3.default, _extends({}, this.props, this.state, { selectedDoctor: doctor_id, selectedClinic: hospital_id, fetchData: this.fetchData.bind(this) }));
    }
}

PatientDetails.contextTypes = {
    router: () => null
};
const mapStateToProps = state => {

    let DOCTORS = state.DOCTOR_PROFILES;
    const { selectedProfile, profiles, userWalletBalance, userCashbackBalance, defaultProfile, ipd_chat, is_ipd_form_submitted, is_any_user_buy_gold, common_utm_tags, user_loggedIn_number } = state.USER;
    let { selectedSlot, doctorCoupons, disCountedOpdPrice, couponAutoApply, selectedDoctorProcedure, commonProfileSelectedProcedures, payment_type, selectedDateFormat, TIMESLOT_DATA_LOADING } = state.DOCTOR_SEARCH;
    const { saved_patient_details } = state.SEARCH_CRITERIA_LABS;
    const { common_settings, selectedLocation } = state.SEARCH_CRITERIA_OPD;
    const { ipdPopupData } = state.SEARCH_CRITERIA_IPD;
    const { odpGoldPredictedPrice, selected_vip_plan, show_doctor_payment_mode } = state.VIPCLUB;
    return {
        selectedProfile, profiles, DOCTORS, selectedSlot, doctorCoupons, disCountedOpdPrice, couponAutoApply, selectedDoctorProcedure, commonProfileSelectedProcedures, userWalletBalance, userCashbackBalance, payment_type, saved_patient_details, defaultProfile, ipd_chat, common_settings, selectedDateFormat, TIMESLOT_DATA_LOADING, is_ipd_form_submitted, ipdPopupData, selectedLocation, odpGoldPredictedPrice, selected_vip_plan, is_any_user_buy_gold, common_utm_tags, show_doctor_payment_mode, user_loggedIn_number
    };
};

const mapDispatchToProps = dispatch => {
    return {
        selectOpdTimeSLot: (slot, reschedule, appointmentId, extraDateParams) => dispatch((0, _index.selectOpdTimeSLot)(slot, reschedule, appointmentId, extraDateParams)),
        getUserProfile: () => dispatch((0, _index.getUserProfile)()),
        getDoctorById: (doctorId, hospitalId, procedure_ids, category_ids, extraParams, cb) => dispatch((0, _index.getDoctorById)(doctorId, hospitalId, procedure_ids, category_ids, extraParams, cb)),
        createOPDAppointment: (postData, callback) => dispatch((0, _index.createOPDAppointment)(postData, callback)),
        sendAgentBookingURL: (orderId, type, purchase_type, query_data, extraParams, cb) => dispatch((0, _index.sendAgentBookingURL)(orderId, type, purchase_type, query_data, extraParams, cb)),
        removeCoupons: (hospitalId, couponId) => dispatch((0, _index.removeCoupons)(hospitalId, couponId)),
        applyOpdCoupons: (productId, couponCode, couponId, doctor_id, dealPrice, hospitalId, profile_id, procedures_ids, cart_item, callback) => dispatch((0, _index.applyOpdCoupons)(productId, couponCode, couponId, doctor_id, dealPrice, hospitalId, profile_id, procedures_ids, cart_item, callback)),
        applyCoupons: (productId, couponData, couponId, hospitalId, callback) => dispatch((0, _index.applyCoupons)(productId, couponData, couponId, hospitalId, callback)),
        resetOpdCoupons: () => dispatch((0, _index.resetOpdCoupons)()),
        getCoupons: data => dispatch((0, _index.getCoupons)(data)),
        createProfile: (postData, cb) => dispatch((0, _index.createProfile)(postData, cb)),
        sendOTP: (number, viaSms, viaWhatsapp, message_type, cb) => dispatch((0, _index.sendOTP)(number, viaSms, viaWhatsapp, message_type, cb)),
        submitOTP: (number, otp, extraParamsData, cb) => dispatch((0, _index.submitOTP)(number, otp, extraParamsData, cb)),
        fetchTransactions: () => dispatch((0, _index.fetchTransactions)()),
        addToCart: (product_id, data) => dispatch((0, _index.addToCart)(product_id, data)),
        getCartItems: () => dispatch((0, _index.getCartItems)()),
        select_opd_payment_type: type => dispatch((0, _index.select_opd_payment_type)(type)),
        getTimeSlots: (doctorId, clinicId, extraParams, callback) => dispatch((0, _index.getTimeSlots)(doctorId, clinicId, extraParams, callback)),
        editUserProfile: (profileData, profileId, cb) => dispatch((0, _index.editUserProfile)(profileData, profileId, cb)),
        patientDetails: criteria => dispatch((0, _index.patientDetails)(criteria)),
        ipdChatView: data => dispatch((0, _index.ipdChatView)(data)),
        checkIpdChatAgentStatus: cb => dispatch((0, _index.checkIpdChatAgentStatus)(cb)),
        saveAvailNowInsurance: data => dispatch((0, _index.saveAvailNowInsurance)(data)),
        submitIPDForm: (formData, selectedLocation, cb) => dispatch((0, _index.submitIPDForm)(formData, selectedLocation, cb)),
        agentLogin: (token, cb) => dispatch((0, _index.agentLogin)(token, cb)),
        codToPrepaid: (postData, cb) => dispatch((0, _index.codToPrepaid)(postData, cb)),
        clearVipSelectedPlan: () => dispatch((0, _index.clearVipSelectedPlan)()),
        getOpdVipGoldPlans: (extraDataParams, cb) => dispatch((0, _index.getOpdVipGoldPlans)(extraDataParams, cb)),
        selectVipClubPlan: (type, selectedPlan, cb) => dispatch((0, _index.selectVipClubPlan)(type, selectedPlan, cb)),
        pushMembersData: (criteria, callback) => dispatch((0, _index.pushMembersData)(criteria, callback)),
        retrieveMembersData: (type, extraParams, callback) => dispatch((0, _index.retrieveMembersData)(type, extraParams, callback)),
        selectProfile: id => dispatch((0, _index.selectProfile)(id)),
        SendIpdBookingEmail: (data, cb) => dispatch((0, _index.SendIpdBookingEmail)(data, cb)),
        NonIpdBookingLead: (data, cb) => dispatch((0, _index.NonIpdBookingLead)(data, cb)),
        saveLeadPhnNumber: number => dispatch((0, _index.saveLeadPhnNumber)(number))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PatientDetails);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvcGF0aWVudERldGFpbHMvQ29kRXJyb3JQb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvcGF0aWVudERldGFpbHMvUGF0aWVudERldGFpbHNOZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL3BhdGllbnREZXRhaWxzL2NhbmNlbGxhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvcGF0aWVudERldGFpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL3BhdGllbnREZXRhaWxzL3BheW1lbnRTdW1tYXJ5LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL29wZC9wYXRpZW50RGV0YWlscy9wcm9jZWR1cmVWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL29wZC9QYXRpZW50RGV0YWlscy5qcyJdLCJuYW1lcyI6WyJDb2RFcnJvclBvcHVwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJyZW5kZXIiLCJjb2RFcnJvckNsaWNrZWQiLCJjb2RNc2ciLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJNT05USFMiLCJXRUVLX0RBWVMiLCJQYXRpZW50RGV0YWlsc05ldyIsImNsb3NlRXJyb3JQb3B1cCIsInNldFN0YXRlIiwiZXJyb3IiLCJ0b2dnbGVHb2xkUGxhbnMiLCJwbGFuIiwiZGF0YSIsIkdUTSIsImdldFVzZXJJZCIsImlkIiwic2VuZEV2ZW50Iiwic2VsZWN0VmlwQ2x1YlBsYW4iLCJ0b2dnbGVHb2xkUHJpY2VQb3B1cCIsInZhbHVlIiwic2hvd0dvbGRQcmljZUxpc3QiLCJnb1RvR29sZFBhZ2UiLCJoaXN0b3J5IiwicHVzaCIsImdldERhdGFBZnRlckxvZ2luIiwiZmV0Y2hEYXRhIiwic2VsZWN0ZWRDbGluaWMiLCJvZHBHb2xkUHJlZGljdGVkUHJpY2UiLCJsZW5ndGgiLCJzZWxlY3RlZFBhY2thZ2UiLCJmaWx0ZXIiLCJ4Iiwic2VsZWN0ZWRWaXBHb2xkUGFja2FnZUlkIiwiaXNfc2VsZWN0ZWQiLCJwYXJzZWQiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwiZG9jdG9yX2lkIiwic2VsZWN0ZWREb2N0b3IiLCJob3NwaXRhbF9pZCIsInBheW1lbnREYXRhIiwibG9hZGluZyIsIm9wZW5DYW5jZWxsYXRpb24iLCJvcmRlcl9pZCIsImNvdXBvbkNvZGUiLCJwcm9maWxlRGF0YUZpbGxlZCIsInNob3dUaW1lRXJyb3IiLCJjb3Vwb25BcHBsaWVkIiwiaXNfY2FzaGJhY2siLCJ1c2Vfd2FsbGV0IiwicHJvZmlsZUVycm9yIiwiY2FydF9pdGVtIiwid2hhdHNhcHBfb3B0aW4iLCJmb3JtRGF0YSIsInNob3dDb25maXJtYXRpb25Qb3B1cCIsImNvdXBvbl9sb2FkaW5nIiwic2VvRnJpZW5kbHkiLCJtYXRjaCIsInVybCIsImluY2x1ZGVzIiwic2hvd0lwZExlYWRGb3JtIiwiaXNfcGF5bWVudF9jb3Vwb25fYXBwbGllZCIsImRhdGVUaW1lU2VsZWN0ZWRWYWx1ZSIsInNlbGVjdGVkRGF0ZUZvcm1hdCIsInNob3dTZWNvbmRQb3B1cCIsImZpcnN0TGVhZElkIiwidGltZUVycm9yVGV4dCIsInBheV9idG5fbG9hZGluZyIsImlzTWF0cml4IiwiaXNfbWF0cml4IiwiaXNFbWFpbE5vdFZhbGlkIiwiaXNEb2JOb3RWYWxpZCIsInNob3dfbGVuc2ZpdF9wb3B1cCIsImxlbnNmaXRfY291cG9ucyIsImxlbnNmaXRfZGVjbGluZSIsImlzTGVuc2ZpdFNwZWNpZmljIiwic2hvd19iYW5uZXIiLCJiYW5uZXJfZGVjbGluZSIsInNlbGVjdGVkX3ZpcF9wbGFuIiwiT2JqZWN0Iiwia2V5cyIsInBheW1lbnRCdG5DbGlja2VkIiwiZW5hYmxlRHJvcE9mZmxlYWQiLCJzaG93Tm9uSXBkUG9wdXAiLCJzaG93X3BvcHVwIiwidG9fYmVfZm9yY2UiLCJpc19kb2NBZHNfbGVhZCIsImRpc2FibGVfcGFnZSIsImlzX2xlYWRfZW5hYmxlZCIsInRvZ2dsZVdhbGxldFVzZSIsImUiLCJ0YXJnZXQiLCJjaGVja2VkIiwidG9nZ2xlIiwid2hpY2giLCJjb21wb25lbnREaWRNb3VudCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9rZW4iLCJhcHBvaW50bWVudF9pZCIsImFnZW50TG9naW4iLCJzZWxlY3Rfb3BkX3BheW1lbnRfdHlwZSIsImdldFVzZXJQcm9maWxlIiwiZmV0Y2hUcmFuc2FjdGlvbnMiLCJnZXRDYXJ0SXRlbXMiLCJnZXRWaXBHb2xkUHJpY2VMaXN0IiwiZHVtbXlfaWQiLCJleHRyYVBhcmFtcyIsInJldHJpZXZlTWVtYmVyc0RhdGEiLCJyZXNwIiwic2V0T3BkQm9va2luZyIsInBsdXNfcGxhbiIsInNldFRpbWVvdXQiLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJ0ZXh0IiwicmVwbGFjZSIsInBhdGhuYW1lIiwiaG9zcGl0YWwiLCJkb2N0b3JEZXRhaWxzIiwiRE9DVE9SUyIsImhvc3BpdGFscyIsIm1hcCIsImhzcHRsIiwidmFsdWVzIiwic2VsZWN0ZWRTbG90IiwidGltZSIsImRvY3RvckNvdXBvbnMiLCJ0cmVhdG1lbnRfUHJpY2UiLCJzZWxlY3RlZFByb2NlZHVyZXMiLCJzZWxlY3RlZERvY3RvclByb2NlZHVyZSIsInByaWNlIiwiZGVhbF9wcmljZSIsInRvdGFsX2Ftb3VudF9wYXlhYmxlX3dpdGhvdXRfY291cG9uIiwiZ2V0U2VsZWN0ZWRVc2VyRGF0YSIsImFwcGx5T3BkQ291cG9ucyIsImNvZGUiLCJjb3Vwb25faWQiLCJzZWxlY3RlZFByb2ZpbGUiLCJnZXRQcm9jZWR1cmVJZHMiLCJlcnIiLCJjb3Vwb25JZCIsImlzX3BheW1lbnRfc3BlY2lmaWMiLCJnZXRBbmRBcHBseUJlc3RDb3Vwb25zIiwicmVzZXRPcGRDb3Vwb25zIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsaWNrIiwic2VuZEVtYWlsTm90aWZpY2F0aW9uIiwiYWdlbnRfc2VsZWN0ZWRfcGxhbl9pZCIsInBheW1lbnRfdHlwZSIsImdldE9wZFZpcEdvbGRQbGFucyIsImdldFZhbGlkQ291cG9uIiwiY291cG9ucyIsInZhbGlkQ291cG9uIiwiaW5kZXgiLCJ2YWxpZCIsImlzTGVuc2ZpdCIsImxlbnNGaXREYXRhIiwiZ2V0Q291cG9ucyIsInByb2R1Y3RJZCIsInByb2ZpbGVfaWQiLCJwcm9jZWR1cmVzX2lkcyIsImNiIiwiYXBwbHlDb3Vwb25zIiwic3VjY2VzcyIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJTVE9SQUdFIiwiY2hlY2tBdXRoIiwidmlwIiwiaXNfdmlwX21lbWJlciIsImNvdmVyX3VuZGVyX3ZpcCIsInZpcF9hbW91bnQiLCJ2aXBfY29udmVuaWVuY2VfYW1vdW50IiwicHJvZmlsZURhdGFDb21wbGV0ZWQiLCJuYW1lIiwiZ2VuZGVyIiwicGhvbmVOdW1iZXIiLCJlbWFpbCIsIm90cFZlcmlmeVN1Y2Nlc3MiLCJkb2IiLCJwYXRpZW50RGV0YWlscyIsImNsZWFyX2RhdGEiLCJjYXRlZ29yaWVzIiwicHJvY2VkdXJlX2lkcyIsInByb2NlZHVyZSIsImNvbmNhdCIsInByb2NlZHVyZV9pZCIsImdldFV0bVRhZ3MiLCJ1dG1fdGFncyIsInV0bV9zb3VyY2UiLCJ1dG1fbWVkaXVtIiwidXRtX3Rlcm0iLCJ1dG1fY2FtcGFpZ24iLCJyZWZlcnJlciIsImdjbGlkIiwiY29tbW9uX3V0bV90YWdzIiwidHlwZSIsInByb2NlZWQiLCJkYXRlUGlja2VkIiwicGF0aWVudCIsImFkZFRvQ2FydCIsInRvdGFsX3ByaWNlIiwidG90YWxfd2FsbGV0X2JhbGFuY2UiLCJpc19zZWxlY3RlZF91c2VyX2luc3VyYW5jZV9zdGF0dXMiLCJkYXRhc2V0IiwiZGlzYWJsZWQiLCJpc19pbnN1cmFuY2VfYXBwbGljYWJsZSIsImlzX3NlbGVjdGVkX3VzZXJfaW5zdXJlZCIsImlzX3ZpcF9hcHBsaWNhYmxlIiwiaXNfZ29sZF9hcHBsaWNhYmxlIiwiaXNfc2VsZWN0ZWRfdXNlcl92aXAiLCJkYXRlIiwicHJpY2VEYXRhIiwiaW5zdXJhbmNlIiwicGFyc2VJbnQiLCJpbnN1cmFuY2VfdGhyZXNob2xkX2Ftb3VudCIsImlzX2luc3VyYW5jZV9jb3ZlcmVkIiwicHJvZmlsZXMiLCJpc0R1bW15VXNlciIsImlzX2luc3VyZWQiLCJlbnRyaWVzIiwia2V5Iiwic2hvd19sZW5zZml0IiwibGVuc2ZpdF9vZmZlciIsImFwcGxpY2FibGUiLCJjb3Vwb24iLCJpc0FnZW50Iiwic3RhcnRfZGF0ZSIsInN0YXJ0X3RpbWUiLCJwb3N0RGF0YSIsImRvY3RvciIsInByb2ZpbGUiLCJmcm9tX3dlYiIsInZpc2l0b3JfaW5mbyIsImdldFZpc2l0b3JJbmZvIiwidmlzaXRfaWQiLCJ2aXNpdG9yX2lkIiwicHJvZmlsZURhdGEiLCJlZGl0VXNlclByb2ZpbGUiLCJkaXNDb3VudGVkT3BkUHJpY2UiLCJnZXRBbnlDb29raWUiLCJ0YWdzIiwiaG9zdCIsIkRhdGUiLCJnZXRUaW1lIiwic2VuZFdoYXRzdXAiLCJzZW5kU2luZ2xlRmxvd0FnZW50Qm9va2luZ1VSTCIsInRoZW4iLCJyZXMiLCJjYXRjaCIsIm1lc3NhZ2UiLCJjb2RfdG9fcHJlcGFpZCIsImNvZFRvUHJlcGFpZCIsInBheW1lbnRfcmVxdWlyZWQiLCJhbmFseXRpY0RhdGEiLCJwcm9jZXNzUGF5bWVudCIsInJlbW92ZUNvdXBvbnMiLCJvcmRlcklkIiwiY3JlYXRlT1BEQXBwb2ludG1lbnQiLCJzdGF0dXMiLCJmb3JtIiwic3VibWl0IiwibmF2aWdhdGVUbyIsIndoZXJlIiwiYm9va2luZ19kYXRhIiwiZ2V0Qm9va2luZ0RhdGEiLCJpc19zaW5nbGVfZmxvd19vcGQiLCJkdW1teV9kYXRhX3R5cGUiLCJwdXNoTWVtYmVyc0RhdGEiLCJsYW5kaW5nX3VybCIsIm1lc3NhZ2VfbWVkaXVtIiwic2VuZEFnZW50Qm9va2luZ1VSTCIsImJ1aWxkT3BkVGltZVNsb3QiLCJzZWxlY3RlZERhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImhvdXIiLCJtaW51dGUiLCJob3VyMTIiLCJzcGxpdCIsImlzX2F2YWlsYWJsZSIsIm1ycCIsImZlZXMiLCJ0aXRsZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsInRpbWVTbG90IiwiY291cG9uX2RhdGEiLCJjbGluaWNfaWQiLCJleHRyYVRpbWVQYXJhbXMiLCJnZXRGb3JtYXR0ZWREYXRlIiwic2VsZWN0T3BkVGltZVNMb3QiLCJjb3Vwb25fY29kZSIsInNlbGVjdFByb2ZpbGUiLCJ0aW1lX3Nsb3QiLCJzbG90IiwicHJvY19pZHMiLCJqb2luIiwiZ2V0RGVhbFByaWNlIiwiZ2V0Qm9va2luZ0J1dHRvblRleHQiLCJwcmljZV90b19wYXkiLCJlbmFibGVkX2Zvcl9jb2RfcGF5bWVudCIsImlzX2NvZF9kZWFsX3ByaWNlIiwiaXNfZ29sZF9tZW1iZXIiLCJwcmljZV9mcm9tX3dhbGxldCIsInByaWNlX2Zyb21fcGciLCJNYXRoIiwibWluIiwiZ2V0Qm9va2luZ0Ftb3VudCIsInNlbGVjdFRpbWVTbG90IiwidG9nZ2xlV2hhdHNhcCIsInByaWNlQ29uZmlybWF0aW9uUG9wdXAiLCJjaG9pY2UiLCJiYW5uZXJDb25maXJtYXRpb25Qb3B1cCIsInN1Ym1pdExlYWRGb3JtR2VuZXJhdGlvbiIsImlwZEZvcm1QYXJhbXMiLCJjbG9zZSIsImd0bURhdGEiLCJpcGRfZGF0YSIsInNob3dDaGF0IiwiZ29Ub0luc3VyYW5jZSIsIkd0bWRhdGEiLCJ0aHVtYm5haWwiLCJkaXNwbGF5X25hbWUiLCJzYXZlQXZhaWxOb3dJbnN1cmFuY2UiLCJzZWxlY3RDbGluaWMiLCJocmVmIiwiVVJMIiwic2VhcmNoUGFyYW1zIiwic2V0IiwibmV3VXJsIiwidG9TdHJpbmciLCJyZXBsYWNlU3RhdGUiLCJzZWxlY3REYXRlIiwiZGQiLCJnZXREYXRlIiwibW0iLCJnZXRNb250aCIsInl5eXkiLCJnZXRGdWxsWWVhciIsInRvZGF5Iiwic2V0RGF0YU9uQ2xpbmljQ2hhbmdlIiwic2F2ZUxlYWRJZEZvclVwZGF0aW9uIiwicmVzcG9uc2UiLCJzZWNvbmRJcGRGb3JtU3VibWl0dGVkIiwicG9wdXAxIiwicmVxdWVzdGVkX2RhdGVfdGltZSIsInJlcXVlc3RlZF9kYXRlIiwiaG91cnMiLCJmb3VuZFRpbWVTbG90IiwidGltZVNsb3RzIiwidGltZVNsb3REYXRhIiwidGltaW5nIiwic2VsZWN0VGltZSIsImNvbnNvbGUiLCJsb2ciLCJ0aW1lU3BhbiIsImFzc2lnbiIsIm1vbnRoIiwiYXBwbHlMZW5zRml0Q291cG9ucyIsImNsb3NlTGVuc0ZpdFBvcHVwIiwiaXNfc2VsZWN0ZWRfdXNlcl9nb2xkIiwiaXNfdmlwX2dvbGRfbWVtYmVyIiwiaXNfZW5hYmxlX2Zvcl92aXAiLCJpc19hbnlfdXNlcl9idXlfZ29sZCIsIm9wZCIsInNlbGVjdGVkX2hvc3BpdGFsIiwiaXNfaXBkX2hvc3BpdGFsIiwidG9EYXRlU3RyaW5nIiwidXNlcl9kYXRhIiwidXNlciIsInBob25lX251bWJlciIsInByZWZlcnJlZF9kYXRlIiwidXNlcl9wcm9maWxlIiwiU2VuZElwZEJvb2tpbmdFbWFpbCIsIm5vbklwZExlYWRzIiwidXNlcl9waG9uZV9udW1iZXIiLCJ1c2VyX25hbWUiLCJzcGVjaWFsaXphdGlvbiIsImRpc3BsYXlfdG90YWxfbXJwIiwiZGlzcGxheV9kb2NwcmltZV9kaXNjb3VudCIsImdlbmVyYWxfc3BlY2lhbGl6YXRpb24iLCJsZWFkX3R5cGUiLCJsZWFkX3NvdXJjZSIsInRlc3RfbmFtZSIsImxhYl9uYW1lIiwiZG9jdG9yX25hbWUiLCJob3NwaXRhbF9uYW1lIiwic3BlY2lhbHR5Iiwic291cmNlIiwiZXhpdHBvaW50X3VybCIsImN1c3RvbWVyX25hbWUiLCJzZWxlY3RlZF90aW1lIiwic2VsZWN0ZWRfZGF0ZSIsImdvbGRfcHJpY2UiLCJjb252ZW5pZW5jZV9jaGFyZ2UiLCJkaXNjb3VudCIsIk5vbklwZEJvb2tpbmdMZWFkIiwibm9uSXBkTGVhZHNEb2NBZHMiLCJpbml0aWFsU2VydmVyRGF0YSIsImNyaXRlcmlhU3RyIiwiYW1vdW50X2Rpc2NvdW50IiwiZ3RtX2RhdGEiLCJzYXZlTGVhZFBobk51bWJlciIsImFwcGVuZFBhcmFtVG9VcmwiLCJjbG9zZUlwZExlYWRQb3B1cCIsImZyb20iLCJuZXd1cmwiLCJwcm90b2NvbCIsInB1c2hTdGF0ZSIsInBhdGgiLCJlbmFibGVkX2Zvcl9wcmVwYWlkX3BheW1lbnQiLCJpc19kZWZhdWx0X3VzZXJfaW5zdXJlZCIsImlzX2luc3VyYW5jZV9idXlfYWJsZSIsImluc3VyYW5jZV9lcnJvcl9tc2ciLCJzaG93X2luc3VyYW5jZV9lcnJvciIsInBheW1lbnRfbW9kZV9jb3VudCIsImlzX3NlbGVjdGVkX3VzZXJfdW5kZXJfdmlwIiwiaXNfZGVmYXVsdF91c2VyX3VuZGVyX3ZpcCIsInZpcF9kYXRhIiwiaGlkZV9wcmVwYWlkIiwiYWxsX2NpdGllcyIsInF1YWxpZmljYXRpb25zIiwiZW5hYmxlZF9mb3JfY29kIiwiZW5hYmxlZF9mb3JfcHJlcGFpZCIsImluZGV4T2YiLCJkZWZhdWx0UHJvZmlsZSIsImluc3VyYW5jZV9zdGF0dXMiLCJwYXlhYmxlX2Ftb3VudCIsImNvZF9kZWFsX3ByaWNlIiwiZXJyb3JfbWVzc2FnZSIsInRyZWF0bWVudF9tcnAiLCJmaW5hbFByaWNlIiwiZGlzcGxheV9yYWRpb19wcmVwYWlkX3ByaWNlIiwidXNlcldhbGxldEJhbGFuY2UiLCJ1c2VyQ2FzaGJhY2tCYWxhbmNlIiwicGVyY2VudF9kaXNjb3VudCIsIm1heCIsImRvY0Rpc2NvdW50IiwiY29kX3BlcmNlbnRhZ2VfZGlzY291bnQiLCJzaG93R29sZFRvZ2dsZVBheW1lbnRNb2RlIiwic2hvd0NvZFBheW1lbnRNb2RlIiwicmVzZXRQYXltZW50VHlwZSIsInNob3dfZG9jdG9yX3BheW1lbnRfbW9kZSIsImNsaW5pY19tcnAiLCJpc19hZGRfdG9fY2FyZCIsInVwY29taW5nX2RhdGUiLCJ1cGNvbWluZ19zbG90cyIsImRhdGVBZnRlcjI0RGF5cyIsInNldERhdGUiLCJzaG93UG9wdXAiLCJPTl9MQU5ESU5HX1BBR0UiLCJpc19pcGRfZm9ybV9zdWJtaXR0ZWQiLCJpc190aW1lX3NlbGVjdGVkIiwidmlwX2Rpc2NvdW50X3ByaWNlIiwidG90YWxfYW1vdW50X3BheWFibGUiLCJpc19jb3Zlcl91bmRlcl92aXBfZ29sZCIsImhvc3BfaXNfZ29sZCIsImlzX2dvbGQiLCJkaXNhYmxlX2FsbF9ib29raW5ncyIsImJpbmQiLCJ2YWwiLCJjb2RFcnJvciIsIkRBVEFfRkVUQ0giLCJnZXRfZmVlZGJhY2siLCJmbGV4RGlyZWN0aW9uIiwicGFkZGluZ1JpZ2h0IiwiQVNTRVRTX0JBU0VfVVJMIiwidGV4dFRyYW5zZm9ybSIsImdldERheSIsIlRJTUVTTE9UX0RBVEFfTE9BRElORyIsImlzX2ludGVncmF0ZWQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImhlaWdodCIsIndpZHRoIiwibWFyZ2luUmlnaHQiLCJjb2xvciIsImZvbnRTaXplIiwibWFyZ2luVG9wIiwidG90YWxfYWxsb3dlZF9tZW1iZXJzIiwiZm9udFdlaWdodCIsImN1cnNvciIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJpcGRfY2hhdCIsInNob3dJcGRDaGF0IiwicGFkZGluZ1RvcCIsImRpc3BsYXkiLCJQcm9jZWR1cmVWaWV3IiwiY2F0ZWdvcnkiLCJpIiwicHJvY2VkdXJlX25hbWUiLCJQYXRpZW50RGV0YWlscyIsImRvY3Rvcl9sZWF2ZXMiLCJjYWxsRG9jdG9yQnlJZCIsInBhcmFtcyIsImNsaW5pY0lkIiwiZ2V0RG9jdG9yQnlJZCIsImNvbW1vblByb2ZpbGVTZWxlY3RlZFByb2NlZHVyZXMiLCJnZXRUaW1lU2xvdHMiLCJ0aW1lc2xvdHMiLCJjb250ZXh0VHlwZXMiLCJyb3V0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJET0NUT1JfUFJPRklMRVMiLCJ1c2VyX2xvZ2dlZEluX251bWJlciIsIlVTRVIiLCJjb3Vwb25BdXRvQXBwbHkiLCJET0NUT1JfU0VBUkNIIiwic2F2ZWRfcGF0aWVudF9kZXRhaWxzIiwiU0VBUkNIX0NSSVRFUklBX0xBQlMiLCJjb21tb25fc2V0dGluZ3MiLCJzZWxlY3RlZExvY2F0aW9uIiwiU0VBUkNIX0NSSVRFUklBX09QRCIsImlwZFBvcHVwRGF0YSIsIlNFQVJDSF9DUklURVJJQV9JUEQiLCJWSVBDTFVCIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJyZXNjaGVkdWxlIiwiYXBwb2ludG1lbnRJZCIsImV4dHJhRGF0ZVBhcmFtcyIsImRvY3RvcklkIiwiaG9zcGl0YWxJZCIsImNhdGVnb3J5X2lkcyIsImNhbGxiYWNrIiwicHVyY2hhc2VfdHlwZSIsInF1ZXJ5X2RhdGEiLCJkZWFsUHJpY2UiLCJjb3Vwb25EYXRhIiwiY3JlYXRlUHJvZmlsZSIsInNlbmRPVFAiLCJudW1iZXIiLCJ2aWFTbXMiLCJ2aWFXaGF0c2FwcCIsIm1lc3NhZ2VfdHlwZSIsInN1Ym1pdE9UUCIsIm90cCIsImV4dHJhUGFyYW1zRGF0YSIsInByb2R1Y3RfaWQiLCJwcm9maWxlSWQiLCJjcml0ZXJpYSIsImlwZENoYXRWaWV3IiwiY2hlY2tJcGRDaGF0QWdlbnRTdGF0dXMiLCJzdWJtaXRJUERGb3JtIiwiY2xlYXJWaXBTZWxlY3RlZFBsYW4iLCJleHRyYURhdGFQYXJhbXMiLCJzZWxlY3RlZFBsYW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBLE1BQU1BLGFBQU4sU0FBNEJDLGdCQUFNQyxTQUFsQyxDQUE0QztBQUMzQ0MsYUFBWUMsS0FBWixFQUFtQjtBQUNsQixRQUFNQSxLQUFOO0FBQ0EsT0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFHQTs7QUFFREMsVUFBUztBQUNSLFNBQ0E7QUFBQTtBQUFBLEtBQUssV0FBVSwwQkFBZixFQUEwQyxTQUFTLE1BQUksS0FBS0YsS0FBTCxDQUFXRyxlQUFYLEVBQXZEO0FBQ0M7QUFBQTtBQUFBLE1BQUssV0FBVSxpQkFBZjtBQUNDO0FBQUE7QUFBQSxPQUFL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QWtCLENBQUNwWSxJQUFELEVBQU15SixFQUFOLEtBQVlxVyxTQUFTLDhCQUFrQjlmLElBQWxCLEVBQXdCeUosRUFBeEIsQ0FBVCxDQWxDM0I7QUFtQ0hpUCwyQkFBbUJrSSxNQUFELElBQVlkLFNBQVMsOEJBQWtCYyxNQUFsQixDQUFUO0FBbkMzQixLQUFQO0FBcUNILENBdENEOztrQkF5Q2UseUJBQVE3QixlQUFSLEVBQXlCYyxrQkFBekIsRUFBNkN6QixjQUE3QyxDIiwiZmlsZSI6IjI5LnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgQ29kRXJyb3JQb3B1cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdFxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLXBvcHVwLW92ZXJsYXkgXCIgb25DbGljaz17KCk9PnRoaXMucHJvcHMuY29kRXJyb3JDbGlja2VkKCl9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtcG9wdXBcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHBhZGlpbmctc3JjaC1lbFwiPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3JjaC1lbC1jb25lbnRcIj57dGhpcy5wcm9wcy5jb2RNc2d9PC9wPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtYnRuLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLmNvZEVycm9yQ2xpY2tlZCgpfT5Pa2F5PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2Pilcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2RFcnJvclBvcHVwICAgICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgRG9jdG9yUHJvZmlsZUNhcmQgZnJvbSAnLi4vY29tbW9ucy9kb2N0b3JQcm9maWxlQ2FyZCdcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9Mb2FkZXInXG5pbXBvcnQgVmlzaXRUaW1lTmV3IGZyb20gJy4vVmlzaXRUaW1lTmV3J1xuaW1wb3J0IENob29zZVBhdGllbnROZXdWaWV3IGZyb20gJy4vY2hvb3NlUGF0aWVudE5ldydcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5pbXBvcnQgU2VsZWN0ZWRDbGluaWMgZnJvbSAnLi4vY29tbW9ucy9zZWxlY3RlZENsaW5pYy9pbmRleC5qcydcblxuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9MZWZ0QmFyJ1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvUmlnaHRCYXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuXG5pbXBvcnQgQ2FuY2VsYXRpb25Qb2xpY3kgZnJvbSAnLi9jYW5jZWxsYXRpb24uanMnXG5pbXBvcnQgUGF5bWVudFN1bW1hcnkgZnJvbSAnLi9wYXltZW50U3VtbWFyeS5qcydcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgUHJvY2VkdXJlVmlldyBmcm9tICcuL3Byb2NlZHVyZVZpZXcuanMnXG5pbXBvcnQgQm9va2luZ0Vycm9yIGZyb20gJy4vYm9va2luZ0Vycm9yUG9wVXAuanMnXG5pbXBvcnQgeyBBUFBFTkRfSEVBTFRIX1RJUCB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy90eXBlcyc7XG5pbXBvcnQgV2hhdHNBcHBPcHRpblZpZXcgZnJvbSAnLi4vLi4vY29tbW9ucy9XaGF0c0FwcE9wdGluL1doYXRzQXBwT3B0aW5WaWV3LmpzJ1xuaW1wb3J0IEJvb2tpbmdDb25maXJtYXRpb25Qb3B1cCBmcm9tICcuLi8uLi9kaWFnbm9zaXMvYm9va2luZ1N1bW1hcnkvQm9va2luZ0NvbmZpcm1hdGlvblBvcHVwLmpzJ1xuaW1wb3J0IElwZExlYWRGb3JtIGZyb20gJy4uLy4uLy4uL2NvbnRhaW5lcnMvaXBkL2lwZExlYWRGb3JtLmpzJ1xuaW1wb3J0IFBheW1lbnRGb3JtIGZyb20gJy4uLy4uL2NvbW1vbnMvcGF5bWVudEZvcm0nXG5pbXBvcnQgSXBkU2Vjb25kUG9wdXAgZnJvbSAnLi4vLi4vLi4vY29udGFpbmVycy9pcGQvSXBkRG9jdG9yQ2l0eVBvcHVwLmpzJ1xuaW1wb3J0IExlbnNmaXRQb3B1cCBmcm9tICcuLi8uLi9kaWFnbm9zaXMvYm9va2luZ1N1bW1hcnkvbGVuc2ZpdFBvcHVwLmpzJ1xuaW1wb3J0IENvZEVycm9yUG9wdXAgZnJvbSAnLi9Db2RFcnJvclBvcHVwLmpzJ1xuaW1wb3J0IERpc2NsYWltZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9Ib21lL3N0YXRpY0Rpc2NsYWltZXIuanMnXG5pbXBvcnQgVmlwR29sZFBhY2thZ2UgZnJvbSAnLi9WaXBHb2xkUGFja2FnZS5qcydcbmltcG9ydCBOb25JcGRQb3B1cFZpZXcgZnJvbSAnLi4vLi4vY29tbW9ucy9ub25JcGRQb3B1cC5qcydcblxuY29uc3QgTU9OVEhTID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1ZycsICdTZXB0JywgJ09jdCcsICdOb3YnLCAnRGVjJ11cbmNvbnN0IFdFRUtfREFZUyA9IFsnU3VuJywgJ01vbicsICdUdWVzJywgJ1dlZCcsICdUaHVyJywgJ0ZyaScsICdTYXQnXVxuXG5jbGFzcyBQYXRpZW50RGV0YWlsc05ldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG4gICAgICAgIGxldCBkb2N0b3JfaWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXG4gICAgICAgIGxldCBob3NwaXRhbF9pZCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRDbGluaWNcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWREb2N0b3I6IGRvY3Rvcl9pZCxcbiAgICAgICAgICAgIHNlbGVjdGVkQ2xpbmljOiBob3NwaXRhbF9pZCxcbiAgICAgICAgICAgIHBheW1lbnREYXRhOiBudWxsLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBlcnJvcjogXCJcIixcbiAgICAgICAgICAgIG9wZW5DYW5jZWxsYXRpb246IGZhbHNlLFxuICAgICAgICAgICAgb3JkZXJfaWQ6IGZhbHNlLFxuICAgICAgICAgICAgY291cG9uQ29kZTogJycsXG4gICAgICAgICAgICBwcm9maWxlRGF0YUZpbGxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dUaW1lRXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgY291cG9uQXBwbGllZDogZmFsc2UsXG4gICAgICAgICAgICBpc19jYXNoYmFjazogZmFsc2UsXG4gICAgICAgICAgICAvLyBvcmRlcl9pZDogISFwYXJzZWQub3JkZXJfaWQsXG4gICAgICAgICAgICB1c2Vfd2FsbGV0OiB0cnVlLFxuICAgICAgICAgICAgcHJvZmlsZUVycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIGNhcnRfaXRlbTogcGFyc2VkLmNhcnRfaXRlbSxcbiAgICAgICAgICAgIHdoYXRzYXBwX29wdGluOiB0cnVlLFxuICAgICAgICAgICAgZm9ybURhdGE6ICcnLFxuICAgICAgICAgICAgc2hvd0NvbmZpcm1hdGlvblBvcHVwOiAnY2xvc2UnLFxuICAgICAgICAgICAgY291cG9uX2xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc2VvRnJpZW5kbHk6IHRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKCctZHBwJyksXG4gICAgICAgICAgICBzaG93SXBkTGVhZEZvcm06IHRydWUsXG4gICAgICAgICAgICBpc19wYXltZW50X2NvdXBvbl9hcHBsaWVkOiBmYWxzZSxcbiAgICAgICAgICAgIGRhdGVUaW1lU2VsZWN0ZWRWYWx1ZTogdGhpcy5wcm9wcy5zZWxlY3RlZERhdGVGb3JtYXQgPyB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZUZvcm1hdCA6ICcnLFxuICAgICAgICAgICAgc2hvd1NlY29uZFBvcHVwOiBmYWxzZSxcbiAgICAgICAgICAgIGZpcnN0TGVhZElkOiAnJyxcbiAgICAgICAgICAgIHRpbWVFcnJvclRleHQ6ICcnLFxuICAgICAgICAgICAgcGF5X2J0bl9sb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgaXNNYXRyaXg6IHBhcnNlZC5pc19tYXRyaXgsXG4gICAgICAgICAgICBpc0VtYWlsTm90VmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNEb2JOb3RWYWxpZDogZmFsc2UsXG4gICAgICAgICAgICBzaG93X2xlbnNmaXRfcG9wdXA6IGZhbHNlLFxuICAgICAgICAgICAgbGVuc2ZpdF9jb3Vwb25zOiBudWxsLFxuICAgICAgICAgICAgbGVuc2ZpdF9kZWNsaW5lOiBmYWxzZSxcbiAgICAgICAgICAgIGlzTGVuc2ZpdFNwZWNpZmljOiBwYXJzZWQuaXNMZW5zZml0U3BlY2lmaWMgfHwgZmFsc2UsXG4gICAgICAgICAgICBzaG93X2Jhbm5lcjogZmFsc2UsXG4gICAgICAgICAgICBiYW5uZXJfZGVjbGluZTogZmFsc2UsXG4gICAgICAgICAgICBzaG93R29sZFByaWNlTGlzdDogZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RlZFZpcEdvbGRQYWNrYWdlSWQ6IHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4gJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbikubGVuZ3RoID8gdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5pZCA6ICcnLFxuICAgICAgICAgICAgcGF5bWVudEJ0bkNsaWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZW5hYmxlRHJvcE9mZmxlYWQ6IHRydWUsXG4gICAgICAgICAgICBzaG93Tm9uSXBkUG9wdXA6IHBhcnNlZC5zaG93X3BvcHVwLFxuICAgICAgICAgICAgdG9fYmVfZm9yY2U6IHBhcnNlZC5pc19kb2NBZHNfbGVhZCA/IHBhcnNlZC5pc19kb2NBZHNfbGVhZCA6IDEsXG4gICAgICAgICAgICBkaXNhYmxlX3BhZ2U6dHJ1ZSxcbiAgICAgICAgICAgIGlzX2xlYWRfZW5hYmxlZDp0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVXYWxsZXRVc2UoZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc19wYXltZW50X2NvdXBvbl9hcHBsaWVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlX3dhbGxldDogZmFsc2UgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2Vfd2FsbGV0OiBlLnRhcmdldC5jaGVja2VkIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGUod2hpY2gpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFt3aGljaF06ICF0aGlzLnN0YXRlW3doaWNoXSB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICAvL0lmIHRva2VuIGFuZCBhcHBvaW50bWVudCBpZCBpcyBpbiB1cmwgdGhlbiBkbyBhZ2VudCBsb2dpbiwgYW5kIGZldGNoIHVzZXIgcmVsYXRlZCBkYXRhICYgc2V0IHN0YXRlIG9mIHRoZSBwYWdlIFxuICAgICAgICBpZiAocGFyc2VkLnRva2VuICYmIHBhcnNlZC5hcHBvaW50bWVudF9pZCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5hZ2VudExvZ2luKHBhcnNlZC50b2tlbiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0X29wZF9wYXltZW50X3R5cGUoMSlcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldFVzZXJQcm9maWxlKClcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmZldGNoVHJhbnNhY3Rpb25zKClcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldENhcnRJdGVtcygpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nZXRWaXBHb2xkUHJpY2VMaXN0KG51bGwpXG4gICAgICAgIC8vVG8gdXBkYXRlIEdvbGQgUGxhbnMgb24gY2hhbmdpbmcgcHJvcHNcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5pZCAmJiAodGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5pZCAhPSB0aGlzLnN0YXRlLnNlbGVjdGVkVmlwR29sZFBhY2thZ2VJZCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFZpcEdvbGRQYWNrYWdlSWQ6IHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4uaWQgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vQXV0byBTZWxlY3Qgb24gQWdlbnQgTG9naW4gVVJMXG4gICAgICAgIGlmIChwYXJzZWQgJiYgcGFyc2VkLmR1bW15X2lkKSB7XG4gICAgICAgICAgICBsZXQgZXh0cmFQYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgZHVtbXlfaWQ6IHBhcnNlZC5kdW1teV9pZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXRyaWV2ZU1lbWJlcnNEYXRhKCdTSU5HTEVfUFVSQ0hBU0UnLCBleHRyYVBhcmFtcywgKHJlc3ApID0+IHsgLy8gdG8gcmV0cmlldmUgYWxyZWFkeSBwdXNoZWQgbWVtYmVyIGRhdGEgaW4gY2FzZSBvZiBhZ2VudCBvciBwcm9wb3NlciBpdCBzZWxmXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRPcGRCb29raW5nKHJlc3AuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRWaXBHb2xkUHJpY2VMaXN0KHJlc3AuZGF0YS5wbHVzX3BsYW4pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKFwiZXJyb3JfY29kZVwiKSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIkNvdWxkIG5vdCBjb21wbGV0ZSBwYXltZW50LCBUcnkgYWdhaW4hXCIgfSlcbiAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWUpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaG9zcGl0YWwgPSB7fVxuICAgICAgICBsZXQgZG9jdG9yRGV0YWlscyA9IHRoaXMucHJvcHMuRE9DVE9SU1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXVxuXG4gICAgICAgIGlmIChkb2N0b3JEZXRhaWxzKSB7XG4gICAgICAgICAgICBsZXQgeyBob3NwaXRhbHMgfSA9IGRvY3RvckRldGFpbHNcblxuICAgICAgICAgICAgaWYgKGhvc3BpdGFscyAmJiBob3NwaXRhbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaG9zcGl0YWxzLm1hcCgoaHNwdGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhzcHRsLmhvc3BpdGFsX2lkID09IHRoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3BpdGFsID0gaHNwdGxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnZhbHVlcyhob3NwaXRhbCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdXBvbkFwcGxpZWQ6IHRydWUgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkU2xvdCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC50aW1lICYmIE9iamVjdC52YWx1ZXModGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QudGltZSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdXBvbkFwcGxpZWQ6IHRydWUgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3Vwb25BcHBsaWVkOiBmYWxzZSB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLy9JZiBjb3Vwb25zIGRhdGEgZXhpc3QgdGhlbiBhcHBseSBmb3IgYmVzdCBjb3Vwb25zXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRvY3RvckNvdXBvbnMgJiYgdGhpcy5wcm9wcy5kb2N0b3JDb3Vwb25zW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdICYmIHRoaXMucHJvcHMuZG9jdG9yQ291cG9uc1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBkb2N0b3JDb3Vwb25zID0gdGhpcy5wcm9wcy5kb2N0b3JDb3Vwb25zW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3Quc2VsZWN0ZWRDbGluaWMgPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pYyAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5zZWxlY3RlZERvY3RvciA9PSB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgdHJlYXRtZW50X1ByaWNlID0gMFxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZFByb2NlZHVyZXMgPSB7fVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdICYmIHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl1bdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY10gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXVt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXS5wcmljZSkge1xuXG4gICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudF9QcmljZSA9IHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl1bdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY10ucHJpY2UuZGVhbF9wcmljZSB8fCAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBkZWFsX3ByaWNlID0gdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QudGltZS5kZWFsX3ByaWNlICsgdHJlYXRtZW50X1ByaWNlXG4gICAgICAgICAgICAgICAgbGV0IHsgdG90YWxfYW1vdW50X3BheWFibGVfd2l0aG91dF9jb3Vwb24gfSA9IHRoaXMuZ2V0U2VsZWN0ZWRVc2VyRGF0YSh0aGlzLnByb3BzKVxuICAgICAgICAgICAgICAgIGlmICh0b3RhbF9hbW91bnRfcGF5YWJsZV93aXRob3V0X2NvdXBvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYWxfcHJpY2UgPSB0b3RhbF9hbW91bnRfcGF5YWJsZV93aXRob3V0X2NvdXBvblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgJ3BheV9idG5fbG9hZGluZyc6IHRydWUgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFwcGx5T3BkQ291cG9ucygnMScsIGRvY3RvckNvdXBvbnNbMF0uY29kZSwgZG9jdG9yQ291cG9uc1swXS5jb3Vwb25faWQsIHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3IsIGRlYWxfcHJpY2UsIHRoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWMsIHRoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlLCB0aGlzLmdldFByb2NlZHVyZUlkcyh0aGlzLnByb3BzKSwgdGhpcy5zdGF0ZS5jYXJ0X2l0ZW0sIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3Vwb25Db2RlOiBkb2N0b3JDb3Vwb25zWzBdLmNvZGUsIGNvdXBvbklkOiBkb2N0b3JDb3Vwb25zWzBdLmNvdXBvbl9pZCB8fCAnJywgaXNfY2FzaGJhY2s6IGRvY3RvckNvdXBvbnNbMF0uaXNfY2FzaGJhY2sgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N0b3JDb3Vwb25zWzBdLmlzX3BheW1lbnRfc3BlY2lmaWMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlX3dhbGxldDogZmFsc2UsIGlzX3BheW1lbnRfY291cG9uX2FwcGxpZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3Vwb25fbG9hZGluZzogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRBbmRBcHBseUJlc3RDb3Vwb25zKGRlYWxfcHJpY2UsIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyAncGF5X2J0bl9sb2FkaW5nJzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChob3NwaXRhbCkge1xuICAgICAgICAgICAgICAgIGxldCBkZWFsX3ByaWNlID0gaG9zcGl0YWwuZGVhbF9wcmljZVxuICAgICAgICAgICAgICAgIGxldCB0cmVhdG1lbnRfUHJpY2UgPSAwXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl0gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXVt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdW3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWNdLnByaWNlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50X1ByaWNlID0gdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXVt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXS5wcmljZS5kZWFsX3ByaWNlIHx8IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVhbF9wcmljZSArPSB0cmVhdG1lbnRfUHJpY2VcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgJ3BheV9idG5fbG9hZGluZyc6IHRydWUgfSlcbiAgICAgICAgICAgICAgICBsZXQgeyB0b3RhbF9hbW91bnRfcGF5YWJsZV93aXRob3V0X2NvdXBvbiB9ID0gdGhpcy5nZXRTZWxlY3RlZFVzZXJEYXRhKHRoaXMucHJvcHMpXG4gICAgICAgICAgICAgICAgaWYgKHRvdGFsX2Ftb3VudF9wYXlhYmxlX3dpdGhvdXRfY291cG9uICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVhbF9wcmljZSA9IHRvdGFsX2Ftb3VudF9wYXlhYmxlX3dpdGhvdXRfY291cG9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwbHlPcGRDb3Vwb25zKCcxJywgZG9jdG9yQ291cG9uc1swXS5jb2RlLCBkb2N0b3JDb3Vwb25zWzBdLmNvdXBvbl9pZCwgdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvciwgZGVhbF9wcmljZSwgdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pYywgdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGUsIHRoaXMuZ2V0UHJvY2VkdXJlSWRzKHRoaXMucHJvcHMpLCB0aGlzLnN0YXRlLmNhcnRfaXRlbSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzX2Nhc2hiYWNrOiBkb2N0b3JDb3Vwb25zWzBdLmlzX2Nhc2hiYWNrLCBjb3Vwb25Db2RlOiBkb2N0b3JDb3Vwb25zWzBdLmNvZGUsIGNvdXBvbklkOiBkb2N0b3JDb3Vwb25zWzBdLmNvdXBvbl9pZCB8fCAnJyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3RvckNvdXBvbnNbMF0uaXNfcGF5bWVudF9zcGVjaWZpYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2Vfd2FsbGV0OiBmYWxzZSwgaXNfcGF5bWVudF9jb3Vwb25fYXBwbGllZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdXBvbl9sb2FkaW5nOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEFuZEFwcGx5QmVzdENvdXBvbnMoZGVhbF9wcmljZSwgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ICdwYXlfYnRuX2xvYWRpbmcnOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vYXV0byBhcHBseSBjb3Vwb25zXG4gICAgICAgICAgICBsZXQgZGVhbF9wcmljZSA9IDBcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC50aW1lICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LnRpbWUuZGVhbF9wcmljZSkge1xuICAgICAgICAgICAgICAgIGRlYWxfcHJpY2UgPSB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC50aW1lLmRlYWxfcHJpY2VcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaG9zcGl0YWwpIHtcbiAgICAgICAgICAgICAgICBkZWFsX3ByaWNlID0gaG9zcGl0YWwuZGVhbF9wcmljZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdHJlYXRtZW50X1ByaWNlID0gMFxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl0gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXVt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdW3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWNdLnByaWNlKSB7XG5cbiAgICAgICAgICAgICAgICB0cmVhdG1lbnRfUHJpY2UgPSB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdW3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWNdLnByaWNlLmRlYWxfcHJpY2UgfHwgMFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWFsX3ByaWNlICs9IHRyZWF0bWVudF9QcmljZVxuICAgICAgICAgICAgLy9hdXRvIGFwcGx5IGNvdXBvbiBpZiBubyBjb3Vwb24gaXMgYXBsbGllZFxuICAgICAgICAgICAgLy8gaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3IgJiYgZGVhbF9wcmljZSAmJiB0aGlzLnByb3BzLmNvdXBvbkF1dG9BcHBseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3IgJiYgZGVhbF9wcmljZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyAncGF5X2J0bl9sb2FkaW5nJzogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QW5kQXBwbHlCZXN0Q291cG9ucyhkZWFsX3ByaWNlLCBmYWxzZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXNldE9wZENvdXBvbnMoKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2Vfd2FsbGV0OiB0cnVlLCBpc19wYXltZW50X2NvdXBvbl9hcHBsaWVkOiBmYWxzZSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ICdwYXlfYnRuX2xvYWRpbmcnOiBmYWxzZSB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNMZW5zZml0U3BlY2lmaWMpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybV9ib29raW5nJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1fYm9va2luZycpLmNsaWNrKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAzMDAwKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZW5kRW1haWxOb3RpZmljYXRpb24oKVxuICAgIH1cblxuICAgIGdldFZpcEdvbGRQcmljZUxpc3QoYWdlbnRfc2VsZWN0ZWRfcGxhbl9pZCkge1xuICAgICAgICBsZXQgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBleHRyYVBhcmFtcyA9IHtcbiAgICAgICAgICAgIFwiZG9jdG9yXCI6IHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3IsXG4gICAgICAgICAgICBcImhvc3BpdGFsXCI6IHRoaXMucHJvcHMuc2VsZWN0ZWRDbGluaWMsXG4gICAgICAgICAgICBcImdvbGRfdmlwX3BsYW5cIjogW10sXG4gICAgICAgICAgICBcInN0YXJ0X2RhdGVcIjogbnVsbCxcbiAgICAgICAgICAgIFwic3RhcnRfdGltZVwiOiBudWxsLFxuICAgICAgICAgICAgXCJ0aW1lX3Nsb3Rfc3RhcnRcIjogbnVsbFxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4uaWQpIHtcbiAgICAgICAgICAgIGV4dHJhUGFyYW1zWydhbHJlYWR5X3NlbGVjdGVkX3BsYW4nXSA9IHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4uaWRcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyc2VkICYmIHBhcnNlZC5kdW1teV9pZCAmJiBhZ2VudF9zZWxlY3RlZF9wbGFuX2lkKSB7XG4gICAgICAgICAgICBleHRyYVBhcmFtc1snYWxyZWFkeV9zZWxlY3RlZF9wbGFuJ10gPSBhZ2VudF9zZWxlY3RlZF9wbGFuX2lkXG4gICAgICAgIH1cbiAgICAgICAgZXh0cmFQYXJhbXNbJ3BheW1lbnRfdHlwZSddID0gdGhpcy5wcm9wcy5wYXltZW50X3R5cGVcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRPcGRWaXBHb2xkUGxhbnMoZXh0cmFQYXJhbXMpIC8vIHRvIGdldCBnb2xkL3ZpcCBwbGFucyBzcGVjaWZpYyB0byBwYXJ0aWN1bGFyIGRvY3Rvci9ob3NwaXRhbFxuICAgIH1cblxuICAgIGdldFZhbGlkQ291cG9uKGNvdXBvbnMpIHtcbiAgICAgICAgbGV0IHZhbGlkQ291cG9uID0gbnVsbFxuICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBjb3Vwb25zKSB7XG4gICAgICAgICAgICBpZiAoY291cG9uc1tpbmRleF0udmFsaWQpIHtcbiAgICAgICAgICAgICAgICB2YWxpZENvdXBvbiA9IGNvdXBvbnNbaW5kZXhdXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsaWRDb3Vwb25cbiAgICB9XG5cbiAgICBnZXRBbmRBcHBseUJlc3RDb3Vwb25zKGRlYWxfcHJpY2UgPSAwLCBpc0xlbnNmaXQsIGxlbnNGaXREYXRhKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZ2V0Q291cG9ucyh7XG4gICAgICAgICAgICBwcm9kdWN0SWQ6IDEsIGRlYWxfcHJpY2U6IGRlYWxfcHJpY2UsIGRvY3Rvcl9pZDogdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvciwgaG9zcGl0YWxfaWQ6IHRoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWMsIHByb2ZpbGVfaWQ6IHRoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlLCBwcm9jZWR1cmVzX2lkczogdGhpcy5nZXRQcm9jZWR1cmVJZHModGhpcy5wcm9wcyksIGNhcnRfaXRlbTogdGhpcy5zdGF0ZS5jYXJ0X2l0ZW0sXG4gICAgICAgICAgICBjYjogKGNvdXBvbnMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY291cG9ucykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsaWRDb3Vwb25cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTGVuc2ZpdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRDb3Vwb24gPSBsZW5zRml0RGF0YVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRDb3Vwb24gPSB0aGlzLmdldFZhbGlkQ291cG9uKGNvdXBvbnMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkQ291cG9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNfY2FzaGJhY2s6IHZhbGlkQ291cG9uLmlzX2Nhc2hiYWNrLCBjb3Vwb25Db2RlOiB2YWxpZENvdXBvbi5jb2RlLCBjb3Vwb25JZDogdmFsaWRDb3Vwb24uY291cG9uX2lkIHx8ICcnLCBwYXlfYnRuX2xvYWRpbmc6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwbHlDb3Vwb25zKCcxJywgdmFsaWRDb3Vwb24sIHZhbGlkQ291cG9uLmNvdXBvbl9pZCwgdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvciwgKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgJ3BheV9idG5fbG9hZGluZyc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHsgdG90YWxfYW1vdW50X3BheWFibGVfd2l0aG91dF9jb3Vwb24gfSA9IHRoaXMuZ2V0U2VsZWN0ZWRVc2VyRGF0YSh0aGlzLnByb3BzKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvdGFsX2Ftb3VudF9wYXlhYmxlX3dpdGhvdXRfY291cG9uICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWFsX3ByaWNlID0gdG90YWxfYW1vdW50X3BheWFibGVfd2l0aG91dF9jb3Vwb25cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwbHlPcGRDb3Vwb25zKCcxJywgdmFsaWRDb3Vwb24uY29kZSwgdmFsaWRDb3Vwb24uY291cG9uX2lkLCB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yLCBkZWFsX3ByaWNlLCB0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljLCB0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZSwgdGhpcy5nZXRQcm9jZWR1cmVJZHModGhpcy5wcm9wcyksIHRoaXMuc3RhdGUuY2FydF9pdGVtLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ICdwYXlfYnRuX2xvYWRpbmcnOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZENvdXBvbi5pc19wYXltZW50X3NwZWNpZmljKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZV93YWxsZXQ6IGZhbHNlLCBpc19wYXltZW50X2NvdXBvbl9hcHBsaWVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNMZW5zZml0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dfbGVuc2ZpdF9wb3B1cDogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0xlbnNmaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd19sZW5zZml0X3BvcHVwOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXNldE9wZENvdXBvbnMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZV93YWxsZXQ6IHRydWUsIGlzX3BheW1lbnRfY291cG9uX2FwcGxpZWQ6IGZhbHNlLCAncGF5X2J0bl9sb2FkaW5nJzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0xlbnNmaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93X2xlbnNmaXRfcG9wdXA6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXNldE9wZENvdXBvbnMoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlX3dhbGxldDogdHJ1ZSwgaXNfcGF5bWVudF9jb3Vwb25fYXBwbGllZDogZmFsc2UsICdwYXlfYnRuX2xvYWRpbmcnOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY291cG9uX2xvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgLy9SZWYgdG8gdXBkYXRlIGRhdGUgZXZlcnkgdGltZSBvbiByb3V0ZVxuICAgICAgICBpZiAoU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGlzYWJsZV9wYWdlOmZhbHNlfSlcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV4dFByb3BzLnNlbGVjdGVkRGF0ZUZvcm1hdCAmJiBuZXh0UHJvcHMuc2VsZWN0ZWREYXRlRm9ybWF0ICE9IHRoaXMuc3RhdGUuZGF0ZVRpbWVTZWxlY3RlZFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0ZVRpbWVTZWxlY3RlZFZhbHVlOiBuZXh0UHJvcHMuc2VsZWN0ZWREYXRlRm9ybWF0IH0pXG4gICAgICAgIH1cblxuICAgICAgICAvL1RvIHVwZGF0ZSBHb2xkIFBsYW5zIG9uIGNoYW5naW5nIHByb3BzXG4gICAgICAgIGlmIChuZXh0UHJvcHMgJiYgbmV4dFByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuICYmIG5leHRQcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5pZCAmJiAobmV4dFByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmlkICE9IHRoaXMuc3RhdGUuc2VsZWN0ZWRWaXBHb2xkUGFja2FnZUlkKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVmlwR29sZFBhY2thZ2VJZDogbmV4dFByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmlkIH0pXG4gICAgICAgIH1cbiAgICAgICAgLyppZiAodGhpcy5zdGF0ZS5lbmFibGVEcm9wT2ZmbGVhZCAmJiBTVE9SQUdFLmNoZWNrQXV0aCgpICYmICFTVE9SQUdFLmlzQWdlbnQoKSkge1xuICAgICAgICAgICAgdGhpcy5ub25JcGRMZWFkcygpXG4gICAgICAgIH0qL1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuY291cG9uQXBwbGllZCAmJiBuZXh0UHJvcHMuRE9DVE9SU1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXSB8fCAodGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGUgIT0gbmV4dFByb3BzLnNlbGVjdGVkUHJvZmlsZSkpIHtcbiAgICAgICAgICAgIGxldCBob3NwaXRhbCA9IHt9XG4gICAgICAgICAgICBsZXQgZG9jdG9yRGV0YWlscyA9IG5leHRQcm9wcy5ET0NUT1JTW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdXG5cbiAgICAgICAgICAgIGlmIChkb2N0b3JEZXRhaWxzKSB7XG4gICAgICAgICAgICAgICAgbGV0IHsgaG9zcGl0YWxzIH0gPSBkb2N0b3JEZXRhaWxzXG5cbiAgICAgICAgICAgICAgICBpZiAoaG9zcGl0YWxzICYmIGhvc3BpdGFscy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWxzLm1hcCgoaHNwdGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoc3B0bC5ob3NwaXRhbF9pZCA9PSB0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWwgPSBoc3B0bFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5leHRQcm9wcy5kb2N0b3JDb3Vwb25zICYmIG5leHRQcm9wcy5kb2N0b3JDb3Vwb25zW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdICYmIG5leHRQcm9wcy5kb2N0b3JDb3Vwb25zW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGxldCBkb2N0b3JDb3Vwb25zID0gbmV4dFByb3BzLmRvY3RvckNvdXBvbnNbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl1cblxuICAgICAgICAgICAgICAgIGlmIChPYmplY3QudmFsdWVzKGhvc3BpdGFsKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlYWxfcHJpY2UgPSBob3NwaXRhbC5kZWFsX3ByaWNlXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyZWF0bWVudF9QcmljZSA9IDBcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRQcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXSAmJiBuZXh0UHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl1bdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY10gJiYgbmV4dFByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdW3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWNdLnByaWNlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudF9QcmljZSA9IG5leHRQcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXVt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXS5wcmljZS5kZWFsX3ByaWNlIHx8IDBcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGRlYWxfcHJpY2UgKz0gdHJlYXRtZW50X1ByaWNlXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCB2YWxpZENvdXBvbiA9IHRoaXMuZ2V0VmFsaWRDb3Vwb24oZG9jdG9yQ291cG9ucylcbiAgICAgICAgICAgICAgICAgICAgbGV0IHsgdG90YWxfYW1vdW50X3BheWFibGVfd2l0aG91dF9jb3Vwb24gfSA9IHRoaXMuZ2V0U2VsZWN0ZWRVc2VyRGF0YShuZXh0UHJvcHMpXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b3RhbF9hbW91bnRfcGF5YWJsZV93aXRob3V0X2NvdXBvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWFsX3ByaWNlID0gdG90YWxfYW1vdW50X3BheWFibGVfd2l0aG91dF9jb3Vwb25cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFwcGx5T3BkQ291cG9ucygnMScsIGRvY3RvckNvdXBvbnNbMF0uY29kZSwgZG9jdG9yQ291cG9uc1swXS5jb3Vwb25faWQsIHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3IsIGRlYWxfcHJpY2UsIHRoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWMsIG5leHRQcm9wcy5zZWxlY3RlZFByb2ZpbGUsIHRoaXMuZ2V0UHJvY2VkdXJlSWRzKG5leHRQcm9wcyksIHRoaXMuc3RhdGUuY2FydF9pdGVtLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc19jYXNoYmFjazogZG9jdG9yQ291cG9uc1swXS5pc19jYXNoYmFjaywgY291cG9uQ29kZTogZG9jdG9yQ291cG9uc1swXS5jb2RlLCBjb3Vwb25JZDogZG9jdG9yQ291cG9uc1swXS5jb3Vwb25faWQgfHwgJycsIGNvdXBvbkFwcGxpZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdG9yQ291cG9uc1swXS5pc19wYXltZW50X3NwZWNpZmljKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2Vfd2FsbGV0OiBmYWxzZSwgaXNfcGF5bWVudF9jb3Vwb25fYXBwbGllZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdXBvbl9sb2FkaW5nOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRBbmRBcHBseUJlc3RDb3Vwb25zKGRlYWxfcHJpY2UsIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ICdwYXlfYnRuX2xvYWRpbmcnOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGRlYWxfcHJpY2UgPSAwXG5cbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnZhbHVlcyhob3NwaXRhbCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYWxfcHJpY2UgPSBob3NwaXRhbC5kZWFsX3ByaWNlXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IHRyZWF0bWVudF9QcmljZSA9IDBcbiAgICAgICAgICAgICAgICBpZiAobmV4dFByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdICYmIG5leHRQcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXVt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXSAmJiBuZXh0UHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl1bdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY10ucHJpY2UpIHtcblxuICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnRfUHJpY2UgPSBuZXh0UHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl1bdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY10ucHJpY2UuZGVhbF9wcmljZSB8fCAwXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGVhbF9wcmljZSArPSB0cmVhdG1lbnRfUHJpY2VcblxuICAgICAgICAgICAgICAgIGlmIChuZXh0UHJvcHMuZG9jdG9yQ291cG9ucyAmJiBuZXh0UHJvcHMuZG9jdG9yQ291cG9uc1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXSAmJiBuZXh0UHJvcHMuZG9jdG9yQ291cG9uc1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlc2V0T3BkQ291cG9ucygpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2Vfd2FsbGV0OiB0cnVlLCBpc19wYXltZW50X2NvdXBvbl9hcHBsaWVkOiBmYWxzZSwgJ3BheV9idG5fbG9hZGluZyc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL2F1dG8gYXBwbHkgY291cG9uIGlmIG5vIGNvdXBvbiBpcyBhcGxsaWVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yICYmIGRlYWxfcHJpY2UgJiYgbmV4dFByb3BzLmNvdXBvbkF1dG9BcHBseSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnZhbHVlcyhob3NwaXRhbCkubGVuZ3RoICYmIGhvc3BpdGFsLnZpcCAmJiBPYmplY3Qua2V5cyhob3NwaXRhbC52aXApLmxlbmd0aCAmJiBob3NwaXRhbC52aXAuaXNfdmlwX21lbWJlciAmJiBob3NwaXRhbC52aXAuY292ZXJfdW5kZXJfdmlwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWFsX3ByaWNlID0gaG9zcGl0YWwudmlwLnZpcF9hbW91bnQgKyBob3NwaXRhbC52aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yICYmIGRlYWxfcHJpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0Q291cG9ucyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkOiAxLCBkZWFsX3ByaWNlOiBkZWFsX3ByaWNlLCBkb2N0b3JfaWQ6IHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3IsIGhvc3BpdGFsX2lkOiB0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljLCBwcm9maWxlX2lkOiBuZXh0UHJvcHMuc2VsZWN0ZWRQcm9maWxlLCBwcm9jZWR1cmVzX2lkczogdGhpcy5nZXRQcm9jZWR1cmVJZHMobmV4dFByb3BzKSwgY2FydF9pdGVtOiB0aGlzLnN0YXRlLmNhcnRfaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYjogKGNvdXBvbnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdXBvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWxpZENvdXBvbiA9IHRoaXMuZ2V0VmFsaWRDb3Vwb24oY291cG9ucylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZENvdXBvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc19jYXNoYmFjazogdmFsaWRDb3Vwb24uaXNfY2FzaGJhY2ssIGNvdXBvbkNvZGU6IHZhbGlkQ291cG9uLmNvZGUsIGNvdXBvbklkOiB2YWxpZENvdXBvbi5jb3Vwb25faWQgfHwgJycsIGNvdXBvbkFwcGxpZWQ6IHRydWUsICdwYXlfYnRuX2xvYWRpbmcnOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hcHBseUNvdXBvbnMoJzEnLCB2YWxpZENvdXBvbiwgdmFsaWRDb3Vwb24uY291cG9uX2lkLCB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yLCAoc3VjY2VzcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgJ3BheV9idG5fbG9hZGluZyc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgeyB0b3RhbF9hbW91bnRfcGF5YWJsZV93aXRob3V0X2NvdXBvbiB9ID0gdGhpcy5nZXRTZWxlY3RlZFVzZXJEYXRhKG5leHRQcm9wcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG90YWxfYW1vdW50X3BheWFibGVfd2l0aG91dF9jb3Vwb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWFsX3ByaWNlID0gdG90YWxfYW1vdW50X3BheWFibGVfd2l0aG91dF9jb3Vwb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hcHBseU9wZENvdXBvbnMoJzEnLCB2YWxpZENvdXBvbi5jb2RlLCB2YWxpZENvdXBvbi5jb3Vwb25faWQsIHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3IsIGRlYWxfcHJpY2UsIHRoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWMsIG5leHRQcm9wcy5zZWxlY3RlZFByb2ZpbGUsIHRoaXMuZ2V0UHJvY2VkdXJlSWRzKG5leHRQcm9wcyksIHRoaXMuc3RhdGUuY2FydF9pdGVtLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyAncGF5X2J0bl9sb2FkaW5nJzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZENvdXBvbi5pc19wYXltZW50X3NwZWNpZmljKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2Vfd2FsbGV0OiBmYWxzZSwgaXNfcGF5bWVudF9jb3Vwb25fYXBwbGllZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdXBvbkFwcGxpZWQ6IHRydWUsIHVzZV93YWxsZXQ6IHRydWUsIGlzX3BheW1lbnRfY291cG9uX2FwcGxpZWQ6IGZhbHNlLCAncGF5X2J0bl9sb2FkaW5nJzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlc2V0T3BkQ291cG9ucygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY291cG9uQXBwbGllZDogdHJ1ZSwgdXNlX3dhbGxldDogdHJ1ZSwgaXNfcGF5bWVudF9jb3Vwb25fYXBwbGllZDogZmFsc2UsICdwYXlfYnRuX2xvYWRpbmcnOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXNldE9wZENvdXBvbnMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3Vwb25BcHBsaWVkOiB0cnVlLCB1c2Vfd2FsbGV0OiB0cnVlLCBpc19wYXltZW50X2NvdXBvbl9hcHBsaWVkOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXNldE9wZENvdXBvbnMoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9maWxlRGF0YUNvbXBsZXRlZChkYXRhKSB7XG4gICAgICAgIC8vZnVuY3Rpb24gdG8gY2hlY2sgaWYgcHJvZmlsZSBkYXRhIGlzIGZpbGxlZCBieSB1c2VyIG9yIG5vdCwgaW4gY2FzZSBvZiBub24tbG9nZ2VkIGluIHVzZXJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvcm1EYXRhOiB7IC4uLmRhdGEgfSB9KVxuICAgICAgICBpZiAoZGF0YS5uYW1lID09ICcnIHx8IGRhdGEuZ2VuZGVyID09ICcnIHx8IGRhdGEucGhvbmVOdW1iZXIgPT0gJycgfHwgZGF0YS5lbWFpbCA9PSAnJyB8fCAhZGF0YS5vdHBWZXJpZnlTdWNjZXNzIHx8IGRhdGEuZG9iID09ICcnIHx8IGRhdGEuZG9iID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMucGF0aWVudERldGFpbHMoZGF0YSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9maWxlRGF0YUZpbGxlZDogZmFsc2UsIHNob3dUaW1lRXJyb3I6IGZhbHNlIH0pXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5vdHBWZXJpZnlTdWNjZXNzKSB7XG4gICAgICAgICAgICBsZXQgY2xlYXJfZGF0YSA9IHt9XG4gICAgICAgICAgICB0aGlzLnByb3BzLnBhdGllbnREZXRhaWxzKGNsZWFyX2RhdGEpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZmlsZURhdGFGaWxsZWQ6IHRydWUsIHNob3dUaW1lRXJyb3I6IGZhbHNlLCBwcm9maWxlRXJyb3I6IGZhbHNlIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRQcm9jZWR1cmVJZHMocHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdICYmIHByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdW3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWNdICYmIHByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdW3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWNdLmNhdGVnb3JpZXMpIHtcbiAgICAgICAgICAgIGxldCBwcm9jZWR1cmVfaWRzID0gW11cblxuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhwcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXVt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXS5jYXRlZ29yaWVzKS5tYXAoKHByb2NlZHVyZSkgPT4ge1xuICAgICAgICAgICAgICAgIHByb2NlZHVyZV9pZHMgPSBwcm9jZWR1cmVfaWRzLmNvbmNhdChwcm9jZWR1cmUuZmlsdGVyKHggPT4geC5pc19zZWxlY3RlZCkubWFwKHggPT4geC5wcm9jZWR1cmVfaWQpKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaWYgKHByb2NlZHVyZV9pZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2NlZHVyZV9pZHNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGdldFV0bVRhZ3MoKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgdXRtX3RhZ3MgPSB7XG4gICAgICAgICAgICB1dG1fc291cmNlOiBwYXJzZWQudXRtX3NvdXJjZSB8fCAnJyxcbiAgICAgICAgICAgIHV0bV9tZWRpdW06IHBhcnNlZC51dG1fbWVkaXVtIHx8ICcnLFxuICAgICAgICAgICAgdXRtX3Rlcm06IHBhcnNlZC51dG1fdGVybSB8fCAnJyxcbiAgICAgICAgICAgIHV0bV9jYW1wYWlnbjogcGFyc2VkLnV0bV9jYW1wYWlnbiB8fCAnJyxcbiAgICAgICAgICAgIHJlZmVycmVyOiBkb2N1bWVudC5yZWZlcnJlciB8fCAnJyxcbiAgICAgICAgICAgIGdjbGlkOiBwYXJzZWQuZ2NsaWQgfHwgJydcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncyAmJiB0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHV0bV90YWdzID0gdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MuZmlsdGVyKHggPT4geC50eXBlID09IFwiY29tbW9uX3h0cmFfdGFnc1wiKVswXS51dG1fdGFnc1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHV0bV90YWdzXG4gICAgfVxuICAgIHByb2NlZWQoZGF0ZVBpY2tlZCwgcGF0aWVudCwgYWRkVG9DYXJ0LCB0b3RhbF9wcmljZSwgdG90YWxfd2FsbGV0X2JhbGFuY2UsIGlzX3NlbGVjdGVkX3VzZXJfaW5zdXJhbmNlX3N0YXR1cywgZXh0cmFQYXJhbXMsIGUpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cbiAgICAgICAgLy9DaGVjayBpZiBwYXRpZW50IGlzIHNlbGVjdGVkIG9yIG5vdFxuICAgICAgICBpZiAoIXBhdGllbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmZvcm1EYXRhLm5hbWUgIT0gJycgJiYgdGhpcy5zdGF0ZS5mb3JtRGF0YS5nZW5kZXIgIT0gJycgJiYgdGhpcy5zdGF0ZS5mb3JtRGF0YS5waG9uZU51bWJlciAhPSAnJyAmJiB0aGlzLnN0YXRlLmZvcm1EYXRhLmVtYWlsICE9ICcnICYmICF0aGlzLnN0YXRlLmZvcm1EYXRhLm90cFZlcmlmeVN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZmlsZUVycm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgdmVyaWZ5IHlvdXIgbW9iaWxlIG5vLiB0byBjb250aW51ZVwiIH0pO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZmlsZUVycm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgQWRkIFBhdGllbnRcIiB9KTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL0NoZWNrIGlmIHBhdGllbnQgZW1haWxpZCBleGlzdCBvciBub3RcbiAgICAgICAgLy8gaWYgKHBhdGllbnQgJiYgIXBhdGllbnQuZW1haWwpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBpc0VtYWlsTm90VmFsaWQ6IHRydWUgfSlcbiAgICAgICAgLy8gICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgRW50ZXIgWW91ciBFbWFpbCBJZFwiIH0pXG4gICAgICAgIC8vICAgICByZXR1cm5cbiAgICAgICAgLy8gfVxuICAgICAgICAvL0NoZWNrIGlmIHBhdGllbnQgZG9iIGV4aXN0IG9yIG5vdFxuICAgICAgICBpZiAocGF0aWVudCAmJiAhcGF0aWVudC5kb2IpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0RvYk5vdFZhbGlkOiB0cnVlIH0pXG4gICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIEVudGVyIFlvdXIgRGF0ZSBvZiBCaXJ0aFwiIH0pXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vVG8gY2xhaW0gaW5zdXJhbmNlIHN0YXR1cyAmIGNsYWltXG4gICAgICAgIGlmIChwYXRpZW50ICYmIGlzX3NlbGVjdGVkX3VzZXJfaW5zdXJhbmNlX3N0YXR1cyAmJiBpc19zZWxlY3RlZF91c2VyX2luc3VyYW5jZV9zdGF0dXMgPT0gNCkge1xuICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIllvdXIgZG9jdW1lbnRzIGZyb20gdGhlIGxhc3QgY2xhaW0gYXJlIHVuZGVyIHZlcmlmaWNhdGlvbi5QbGVhc2Ugd3JpdGUgdG8gY3VzdG9tZXJjYXJlQGRvY3ByaW1lLmNvbSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cIiB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLy9jaGVjayBpZiB0aW1lc2xvdCBpcyBzZWxjdGVkIGJ5IHVzZXIgb3Igbm90XG4gICAgICAgIGlmICghZGF0ZVBpY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dUaW1lRXJyb3I6IHRydWUgfSk7XG4gICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIHBpY2sgYSB0aW1lIHNsb3QuXCIgfSk7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnByb2ZpbGVEYXRhRmlsbGVkKSB7XG4gICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIGZpbGwgdGhlIGluZm9cIiB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudGFyZ2V0LmRhdGFzZXQuZGlzYWJsZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLy9DaGVjayBpZiBDb3ZlcmVkIFVuZGVyIEluc3VyYW5jZSBcblxuICAgICAgICBsZXQgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgPSBmYWxzZVxuICAgICAgICBsZXQgaXNfc2VsZWN0ZWRfdXNlcl9pbnN1cmVkID0gZmFsc2VcbiAgICAgICAgbGV0IGlzX3ZpcF9hcHBsaWNhYmxlID0gZmFsc2VcbiAgICAgICAgbGV0IGlzX2dvbGRfYXBwbGljYWJsZSA9IGZhbHNlXG4gICAgICAgIGxldCBpc19zZWxlY3RlZF91c2VyX3ZpcCA9IHRydWUgLy8gdG8gY2hlY2sgaXMgcGx1c19wbGFuIGlzIGFwcGxpY2FibGUgb3Igbm90XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkU2xvdCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5kYXRlICYmIHRoaXMucHJvcHMuRE9DVE9SU1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXSkge1xuICAgICAgICAgICAgbGV0IHByaWNlRGF0YSA9IHsgLi4udGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QudGltZSB9XG4gICAgICAgICAgICBsZXQgaG9zcGl0YWxzID0gdGhpcy5wcm9wcy5ET0NUT1JTW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdLmhvc3BpdGFsc1xuICAgICAgICAgICAgbGV0IGhvc3BpdGFsID0gbnVsbFxuXG4gICAgICAgICAgICBpZiAoaG9zcGl0YWxzICYmIGhvc3BpdGFscy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBob3NwaXRhbHMubWFwKChoc3B0bCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaHNwdGwuaG9zcGl0YWxfaWQgPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWwgPSBoc3B0bFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhvc3BpdGFsICYmIGhvc3BpdGFsLmluc3VyYW5jZSkge1xuICAgICAgICAgICAgICAgIGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlID0gKHBhcnNlSW50KHByaWNlRGF0YS5kZWFsX3ByaWNlKSA8PSBob3NwaXRhbC5pbnN1cmFuY2UuaW5zdXJhbmNlX3RocmVzaG9sZF9hbW91bnQpICYmIGhvc3BpdGFsLmluc3VyYW5jZS5pc19pbnN1cmFuY2VfY292ZXJlZFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaG9zcGl0YWwgJiYgaG9zcGl0YWwudmlwKSB7XG4gICAgICAgICAgICAgICAgaXNfdmlwX2FwcGxpY2FibGUgPSBob3NwaXRhbC52aXAuaXNfdmlwX21lbWJlciAmJiBob3NwaXRhbC52aXAuY292ZXJfdW5kZXJfdmlwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5wcm9maWxlcyAmJiB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlXSAmJiAhdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV0uaXNEdW1teVVzZXIpIHtcblxuICAgICAgICAgICAgaXNfc2VsZWN0ZWRfdXNlcl9pbnN1cmVkID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV0uaXNfaW5zdXJlZFxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5wcm9maWxlcykubWFwKGZ1bmN0aW9uIChba2V5LCB2YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuaXNfdmlwX21lbWJlcikge1xuICAgICAgICAgICAgICAgICAgICBpc19zZWxlY3RlZF91c2VyX3ZpcCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSA9IGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmIGlzX3NlbGVjdGVkX3VzZXJfaW5zdXJlZFxuXG4gICAgICAgIC8vIFJlYWN0IGd1YXJhbnRlZXMgdGhhdCBzZXRTdGF0ZSBpbnNpZGUgaW50ZXJhY3RpdmUgZXZlbnRzIChzdWNoIGFzIGNsaWNrKSBpcyBmbHVzaGVkIGF0IGJyb3dzZXIgZXZlbnQgYm91bmRhcnlcbiAgICAgICAgbGV0IHNob3dfbGVuc2ZpdCA9IHRoaXMucHJvcHMuRE9DVE9SU1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXSAmJiB0aGlzLnByb3BzLkRPQ1RPUlNbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl0ubGVuc2ZpdF9vZmZlciA/IHRoaXMucHJvcHMuRE9DVE9SU1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXS5sZW5zZml0X29mZmVyLmFwcGxpY2FibGUgOiBmYWxzZVxuICAgICAgICBsZXQgbGVuc2ZpdF9jb3Vwb25zID0gdGhpcy5wcm9wcy5ET0NUT1JTW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdICYmIHRoaXMucHJvcHMuRE9DVE9SU1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXS5sZW5zZml0X29mZmVyID8gdGhpcy5wcm9wcy5ET0NUT1JTW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdLmxlbnNmaXRfb2ZmZXIuY291cG9uIDoge31cblxuICAgICAgICAvKmlmKCF0aGlzLnN0YXRlLnNob3dfbGVuc2ZpdF9wb3B1cCAmJiAhdGhpcy5zdGF0ZS5sZW5zZml0X2RlY2xpbmUgJiYgc2hvd19sZW5zZml0ICYmICFpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiBsZW5zZml0X2NvdXBvbnMgJiYgT2JqZWN0LmtleXMobGVuc2ZpdF9jb3Vwb25zKS5sZW5ndGggPiAwICYmIHRoaXMuc3RhdGUuY291cG9uSWQgIT1sZW5zZml0X2NvdXBvbnMuY291cG9uX2lkKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93X2xlbnNmaXRfcG9wdXA6dHJ1ZSwgbGVuc2ZpdF9jb3Vwb25zOmxlbnNmaXRfY291cG9uc30pXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfSovXG4gICAgICAgIC8vIGlmIChmYWxzZSAmJiAhdGhpcy5zdGF0ZS5zaG93X2Jhbm5lciAmJiAhdGhpcy5zdGF0ZS5iYW5uZXJfZGVjbGluZSAmJiAhaXNfdmlwX2FwcGxpY2FibGUgJiYgIWFkZFRvQ2FydCAmJiAodG90YWxfcHJpY2UgPT0gMCB8fCAhaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgfHwgKHRoaXMuc3RhdGUudXNlX3dhbGxldCAmJiB0b3RhbF93YWxsZXRfYmFsYW5jZSA+IDApKSkge1xuICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dfYmFubmVyOiB0cnVlIH0pXG4gICAgICAgIC8vICAgICByZXR1cm5cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vQ29uZmlybWF0aW9uIHBvcHVwIGZvciB0aGUgdGVzdHMsIHdob3NlIGFtb3VudCBwYXlhYmxlIGlzIDBcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd0NvbmZpcm1hdGlvblBvcHVwID09ICdjbG9zZScgJiYgIWFkZFRvQ2FydCAmJiAodG90YWxfcHJpY2UgPT0gMCB8fCAoaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgJiYgKHRoaXMucHJvcHMucGF5bWVudF90eXBlID09IDEgfHwgdGhpcy5wcm9wcy5wYXltZW50X3R5cGUgPT0gNikpIHx8ICh0aGlzLnN0YXRlLnVzZV93YWxsZXQgJiYgdG90YWxfd2FsbGV0X2JhbGFuY2UgPiAwKSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q29uZmlybWF0aW9uUG9wdXA6ICdvcGVuJywgc2hvd19iYW5uZXI6IGZhbHNlIH0pXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMucGF5bWVudF90eXBlID09IDYgJiYgU1RPUkFHRS5pc0FnZW50KCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogXCJcIiB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yOiBcIlwiIH0pXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3RhcnRfZGF0ZSA9IHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LmRhdGVcbiAgICAgICAgbGV0IHN0YXJ0X3RpbWUgPSB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC50aW1lLnZhbHVlXG4gICAgICAgIGxldCB1dG1fdGFncyA9IHRoaXMuZ2V0VXRtVGFncygpXG4gICAgICAgIGxldCBwb3N0RGF0YSA9IHtcbiAgICAgICAgICAgIGRvY3RvcjogdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvcixcbiAgICAgICAgICAgIGhvc3BpdGFsOiB0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljLFxuICAgICAgICAgICAgcHJvZmlsZTogdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGUsXG4gICAgICAgICAgICBzdGFydF9kYXRlLCBzdGFydF90aW1lLFxuICAgICAgICAgICAgcGF5bWVudF90eXBlOiB0aGlzLnByb3BzLnBheW1lbnRfdHlwZSxcbiAgICAgICAgICAgIHVzZV93YWxsZXQ6IHRoaXMucHJvcHMucGF5bWVudF90eXBlID09IDYgPyBmYWxzZSA6IHRoaXMuc3RhdGUudXNlX3dhbGxldCxcbiAgICAgICAgICAgIGNhcnRfaXRlbTogdGhpcy5zdGF0ZS5jYXJ0X2l0ZW0sXG4gICAgICAgICAgICB1dG1fdGFnczogdXRtX3RhZ3MsXG4gICAgICAgICAgICBmcm9tX3dlYjogdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGxldCB2aXNpdG9yX2luZm8gPSBHVE0uZ2V0VmlzaXRvckluZm8oKVxuICAgICAgICBpZiAodmlzaXRvcl9pbmZvICYmIHZpc2l0b3JfaW5mby52aXNpdF9pZCkge1xuICAgICAgICAgICAgcG9zdERhdGFbJ3Zpc2l0X2lkJ10gPSB2aXNpdG9yX2luZm8udmlzaXRfaWRcbiAgICAgICAgICAgIHBvc3REYXRhWyd2aXNpdG9yX2lkJ10gPSB2aXNpdG9yX2luZm8udmlzaXRvcl9pZFxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnBheW1lbnRfdHlwZSA9PSA2ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4gJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbikubGVuZ3RoICYmIGlzX3NlbGVjdGVkX3VzZXJfdmlwKSB7XG4gICAgICAgICAgICBwb3N0RGF0YVsncGx1c19wbGFuJ10gPSB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmlkXG4gICAgICAgICAgICBwb3N0RGF0YVsncGxhbiddID0gdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYoIWhvc3BpdGFsLmVuYWJsZWRfZm9yX3ByZXBhaWQgJiYgIWhvc3BpdGFsLmVuYWJsZWRfZm9yX2NvZCkge1xuICAgICAgICAvLyAgICAgcG9zdERhdGFbJ3BheW1lbnRfdHlwZSddID0gMTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGxldCBwcm9maWxlRGF0YSA9IHsgLi4ucGF0aWVudCB9XG4gICAgICAgIGlmIChwcm9maWxlRGF0YSAmJiBwcm9maWxlRGF0YS53aGF0c2FwcF9vcHRpbiA9PSBudWxsKSB7XG4gICAgICAgICAgICBwcm9maWxlRGF0YVsnd2hhdHNhcHBfb3B0aW4nXSA9IHRoaXMuc3RhdGUud2hhdHNhcHBfb3B0aW5cbiAgICAgICAgICAgIHRoaXMucHJvcHMuZWRpdFVzZXJQcm9maWxlKHByb2ZpbGVEYXRhLCBwcm9maWxlRGF0YS5pZClcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5kb2N0b3JDb3Vwb25zICYmIHRoaXMucHJvcHMuZG9jdG9yQ291cG9uc1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXSAmJiB0aGlzLnByb3BzLmRvY3RvckNvdXBvbnNbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl0ubGVuZ3RoICYmIHRoaXMucHJvcHMuZGlzQ291bnRlZE9wZFByaWNlID49IDAgJiYgdGhpcy5wcm9wcy5wYXltZW50X3R5cGUgIT0gNiAmJiAhaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgLyomJiAhaXNfdmlwX2FwcGxpY2FibGUqLykge1xuICAgICAgICAgICAgcG9zdERhdGFbJ2NvdXBvbl9jb2RlJ10gPSB0aGlzLnN0YXRlLmNvdXBvbkNvZGUgPyBbdGhpcy5zdGF0ZS5jb3Vwb25Db2RlXSA6IFtdXG4gICAgICAgIH1cblxuICAgICAgICAvL0NoZWNrIFNCSSBVVE0gVGFnc1xuICAgICAgICBpZiAoU1RPUkFHRSAmJiBTVE9SQUdFLmdldEFueUNvb2tpZSgnc2JpX3V0bScpICYmIHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzICYmIHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmxlbmd0aCAmJiB0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gJ3NiaV91dG0nKS5sZW5ndGgpIHtcblxuICAgICAgICAgICAgbGV0IHRhZ3MgPSB0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gJ3NiaV91dG0nKVswXVxuICAgICAgICAgICAgaWYgKHRhZ3MudXRtX3RhZ3MpIHtcblxuICAgICAgICAgICAgICAgIHBvc3REYXRhWyd1dG1fc2JpX3RhZ3MnXSA9IHRhZ3MudXRtX3RhZ3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5sb2NhdGlvbiAmJiBkb2N1bWVudC5sb2NhdGlvbi5ob3N0ICYmIGRvY3VtZW50LmxvY2F0aW9uLmhvc3QuaW5jbHVkZXMoJ3NiaScpKSB7XG4gICAgICAgICAgICBwb3N0RGF0YVsndXRtX3NiaV90YWdzJ10gPSB7XG4gICAgICAgICAgICAgICAgdXRtX3RhZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgdXRtX3NvdXJjZTogJ3NiaV91dG0nLFxuICAgICAgICAgICAgICAgICAgICB1dG1fdGVybTogJycsXG4gICAgICAgICAgICAgICAgICAgIHV0bV9tZWRpdW06ICcnLFxuICAgICAgICAgICAgICAgICAgICB1dG1fY2FtcGFpZ246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwcm9jZWR1cmVfaWRzID0gW11cbiAgICAgICAgaWYgKGZhbHNlICYmIHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl0gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXVt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdW3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWNdLmNhdGVnb3JpZXMpIHtcblxuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdW3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWNdLmNhdGVnb3JpZXMpLm1hcCgocHJvY2VkdXJlKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBwcm9jZWR1cmVfaWRzID0gcHJvY2VkdXJlX2lkcy5jb25jYXQocHJvY2VkdXJlLmZpbHRlcih4ID0+IHguaXNfc2VsZWN0ZWQpLm1hcCh4ID0+IHgucHJvY2VkdXJlX2lkKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpZiAocHJvY2VkdXJlX2lkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBwb3N0RGF0YVsncHJvY2VkdXJlX2lkcyddID0gcHJvY2VkdXJlX2lkcyB8fCBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFkZFRvQ2FydCkge1xuXG4gICAgICAgICAgICAvL1NpbmdsZSBGbG93IEFnZW50IEJvb2tpbmdcbiAgICAgICAgICAgIGlmIChTVE9SQUdFLmlzQWdlbnQoKSAmJiB0aGlzLnByb3BzLnBheW1lbnRfdHlwZSA9PSA2KSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoZXh0cmFQYXJhbXMgJiYgZXh0cmFQYXJhbXMuc2VuZFdoYXRzdXApIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zdERhdGFbJ21lc3NhZ2VfbWVkaXVtJ10gPSAnV0hBVFNBUFAnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZFNpbmdsZUZsb3dBZ2VudEJvb2tpbmdVUkwocG9zdERhdGEpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnT3BkQWRkVG9DYXJ0Q2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ29wZC1hZGQtdG8tY2FydC1jbGlja2VkJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hZGRUb0NhcnQoMSwgcG9zdERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmlzTWF0cml4KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvY2FydD9pc19tYXRyaXg9dHJ1ZScpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jYXJ0JylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBcIkVycm9yIGFkZGluZyB0byBjYXJ0IVwiXG4gICAgICAgICAgICAgICAgaWYgKGVyci5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnIubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5pbmNsdWRlcygnSXRlbSBhbHJlYWR5IGV4aXN0cyBpbiBjYXJ0LicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2NhcnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IG1lc3NhZ2UgfSlcbiAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IG1lc3NhZ2UgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnNlZCAmJiBwYXJzZWQuYXBwb2ludG1lbnRfaWQgJiYgcGFyc2VkLmNvZF90b19wcmVwYWlkID09ICd0cnVlJykge1xuICAgICAgICAgICAgLy9Gb3IgQ29kIEFwcG9pbnRtZW50c1xuICAgICAgICAgICAgcG9zdERhdGFbJ2FwcG9pbnRtZW50X2lkJ10gPSBwYXJzZWQuYXBwb2ludG1lbnRfaWRcbiAgICAgICAgICAgIHBvc3REYXRhWydjb2RfdG9fcHJlcGFpZCddID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBheW1lbnRCdG5DbGlja2VkOiB0cnVlIH0pO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb2RUb1ByZXBhaWQocG9zdERhdGEsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgICAgICAvKmlmIChkYXRhLmlzX2FnZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlbW92ZUNvdXBvbnModGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvciwgdGhpcy5zdGF0ZS5jb3Vwb25JZClcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZSh0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lICsgYD9vcmRlcl9pZD0ke2RhdGEuZGF0YS5vcmRlcklkfWApXG4gICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBvcmRlcl9pZDogZGF0YS5kYXRhLm9yZGVySWQgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEucGF5bWVudF9yZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VuZCB0byBwYXltZW50IHNlbGVjdGlvbiBwYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW5hbHl0aWNEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnRG9jdG9yT3JkZXJDcmVhdGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnZG9jdG9yX29yZGVyX2NyZWF0ZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogYW5hbHl0aWNEYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL3BheW1lbnQvJHtkYXRhLmRhdGEub3JkZXJJZH0/cmVmcz1vcGRgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzUGF5bWVudChkYXRhKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVDb3Vwb25zKHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3IsIHRoaXMuc3RhdGUuY291cG9uSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZW5kIGJhY2sgdG8gYXBwb2ludG1lbnQgcGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UoYC9vcmRlci9zdW1tYXJ5LyR7ZGF0YS5kYXRhLm9yZGVySWR9P3BheW1lbnRfc3VjY2Vzcz10cnVlYClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYXltZW50QnRuQ2xpY2tlZDogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnIuZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkNvdWxkIG5vdCBjcmVhdGUgYXBwb2ludG1lbnQuIFRyeSBhZ2FpbiBsYXRlciAhXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnIubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IG1lc3NhZ2UgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFuYWx5dGljRGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnT3BkUHJvY2VlZEJ1dHRvbkNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdvcGQtcHJvY2VlZC1idXR0b24tY2xpY2tlZCdcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogYW5hbHl0aWNEYXRhIH0pXG5cbiAgICAgICAgYW5hbHl0aWNEYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdPcGRDb25maXJtQm9va2luZ0NsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdvcGQtY29uZmlybS1ib29raW5nLWNsaWNrZWQnXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGFuYWx5dGljRGF0YSB9KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGF5bWVudEJ0bkNsaWNrZWQ6IHRydWUgfSk7XG4gICAgICAgIHRoaXMucHJvcHMuY3JlYXRlT1BEQXBwb2ludG1lbnQocG9zdERhdGEsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgLyppZiAoZGF0YS5pc19hZ2VudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlbW92ZUNvdXBvbnModGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvciwgdGhpcy5zdGF0ZS5jb3Vwb25JZClcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UodGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZSArIGA/b3JkZXJfaWQ9JHtkYXRhLmRhdGEub3JkZXJJZH1gKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3JkZXJfaWQ6IGRhdGEuZGF0YS5vcmRlcklkIH0pXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnBheW1lbnRfcmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2VuZCB0byBwYXltZW50IHNlbGVjdGlvbiBwYWdlXG4gICAgICAgICAgICAgICAgICAgIGxldCBhbmFseXRpY0RhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0RvY3Rvck9yZGVyQ3JlYXRlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2RvY3Rvcl9vcmRlcl9jcmVhdGVkJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBhbmFseXRpY0RhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9wYXltZW50LyR7ZGF0YS5kYXRhLm9yZGVySWR9P3JlZnM9b3BkYClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzUGF5bWVudChkYXRhKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVtb3ZlQ291cG9ucyh0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yLCB0aGlzLnN0YXRlLmNvdXBvbklkKVxuICAgICAgICAgICAgICAgICAgICAvLyBzZW5kIGJhY2sgdG8gYXBwb2ludG1lbnQgcGFnZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZShgL29yZGVyL3N1bW1hcnkvJHtkYXRhLmRhdGEub3JkZXJJZH0/cGF5bWVudF9zdWNjZXNzPXRydWVgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBheW1lbnRCdG5DbGlja2VkOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZVxuICAgICAgICAgICAgICAgIGlmIChlcnIuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGVyci5lcnJvclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkNvdWxkIG5vdCBjcmVhdGUgYXBwb2ludG1lbnQuIFRyeSBhZ2FpbiBsYXRlciAhXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVyci5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnIubWVzc2FnZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIGVycm9yOiBtZXNzYWdlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJvY2Vzc1BheW1lbnQoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLnN0YXR1cykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBheW1lbnREYXRhOiBkYXRhLmRhdGEgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BheW1lbnRGb3JtJykgJiYgT2JqZWN0LmtleXModGhpcy5zdGF0ZS5wYXltZW50RGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF5bWVudEZvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVDb3Vwb25zKHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3IsIHRoaXMuc3RhdGUuY291cG9uSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5zdWJtaXQoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5hdmlnYXRlVG8od2hlcmUsIGUpIHtcbiAgICAgICAgc3dpdGNoICh3aGVyZSkge1xuICAgICAgICAgICAgY2FzZSBcInRpbWVcIjoge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNlb0ZyaWVuZGx5KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9P2dvYmFjaz10cnVlJnR5cGU9b3BkJmRvY3Rvcl9pZD0ke3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3J9Jmhvc3BpdGFsX2lkPSR7dGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY30mYWN0aW9uX3BhZ2U9dGltaW5nc2BcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2godXJsKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvb3BkL2RvY3Rvci8ke3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3J9LyR7dGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY30vYm9vaz9nb2JhY2s9dHJ1ZSZ0eXBlPW9wZGApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlIFwicGF0aWVudFwiOiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC91c2VyL2ZhbWlseT9waWNrPXRydWVgKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VuZFNpbmdsZUZsb3dBZ2VudEJvb2tpbmdVUkwocG9zdERhdGEgPSB7fSkge1xuICAgICAgICAvL2ZvciBhZ2VudCBsb2dpbiBzZW5kIHNpbmdsZSBmbG93IGJvb2tpbmcgdXJsXG4gICAgICAgIGxldCBib29raW5nX2RhdGEgPSB0aGlzLmdldEJvb2tpbmdEYXRhKClcbiAgICAgICAgYm9va2luZ19kYXRhID0geyAuLi5wb3N0RGF0YSwgLi4uYm9va2luZ19kYXRhLCBpc19zaW5nbGVfZmxvd19vcGQ6IHRydWUsIGR1bW15X2RhdGFfdHlwZTogJ1NJTkdMRV9QVVJDSEFTRScgfVxuICAgICAgICB0aGlzLnByb3BzLnB1c2hNZW1iZXJzRGF0YShib29raW5nX2RhdGEsIChyZXNwKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcC5kdW1teV9pZCkge1xuXG4gICAgICAgICAgICAgICAgbGV0IGV4dHJhUGFyYW1zID0ge1xuICAgICAgICAgICAgICAgICAgICBsYW5kaW5nX3VybDogYG9wZC9kb2N0b3IvJHt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yfS8ke3RoaXMucHJvcHMuc2VsZWN0ZWRDbGluaWN9L2Jvb2tkZXRhaWxzP2R1bW15X2lkPSR7cmVzcC5kdW1teV9pZH1gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHBvc3REYXRhLm1lc3NhZ2VfbWVkaXVtKXtcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFQYXJhbXNbJ21lc3NhZ2VfbWVkaXVtJ10gPSAnV0hBVFNBUFAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbmRBZ2VudEJvb2tpbmdVUkwodGhpcy5zdGF0ZS5vcmRlcl9pZCwgJ3NtcycsICdTSU5HTEVfUFVSQ0hBU0UnLCBudWxsLCBleHRyYVBhcmFtcywgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJTTVMgU0VORCBFUlJPUlwiIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiU01TIFNFTlQgU1VDQ0VTU0ZVTFlcIiB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBidWlsZE9wZFRpbWVTbG90KCkge1xuICAgICAgICAvL2FmdGVyIGFnZW50IGxvZ2luICwgYnVpbGQgdGhlIHN0YXRlIG9mIHRoZSBwYWdlIGUuZyBzdG9yZVxuICAgICAgICBsZXQgc2VsZWN0ZWREYXRlID0geyAuLi50aGlzLnByb3BzLnNlbGVjdGVkU2xvdCB9XG4gICAgICAgIGlmIChzZWxlY3RlZERhdGUudGltZSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc2VsZWN0ZWREYXRlLnRpbWUgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRpbWUgPSB7XG4gICAgICAgICAgICB0ZXh0OiBuZXcgRGF0ZShzZWxlY3RlZERhdGUuZGF0ZSkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgeyBob3VyOiAnbnVtZXJpYycsIG1pbnV0ZTogJ251bWVyaWMnLCBob3VyMTI6IHRydWUgfSkuc3BsaXQoJyAnKVswXSxcbiAgICAgICAgICAgIGRlYWxfcHJpY2U6IHNlbGVjdGVkRGF0ZS50aW1lLmRlYWxfcHJpY2UsXG4gICAgICAgICAgICBpc19hdmFpbGFibGU6IHRydWUsXG4gICAgICAgICAgICBtcnA6IHNlbGVjdGVkRGF0ZS50aW1lLm1ycCxcbiAgICAgICAgICAgIGZlZXM6IHNlbGVjdGVkRGF0ZS50aW1lLmZlZXMsXG4gICAgICAgICAgICBwcmljZTogc2VsZWN0ZWREYXRlLnRpbWUuZGVhbF9wcmljZSxcbiAgICAgICAgICAgIHRpdGxlOiBuZXcgRGF0ZShzZWxlY3RlZERhdGUuZGF0ZSkuZ2V0SG91cnMoKSA+PSAxMiA/ICdQTScgOiAnQU0nLFxuICAgICAgICAgICAgdmFsdWU6IG5ldyBEYXRlKHNlbGVjdGVkRGF0ZS5kYXRlKS5nZXRIb3VycygpICsgbmV3IERhdGUoc2VsZWN0ZWREYXRlLmRhdGUpLmdldE1pbnV0ZXMoKSAvIDYwXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGltZVxuXG4gICAgfVxuXG4gICAgc2V0T3BkQm9va2luZyhkYXRhKSB7XG5cbiAgICAgICAgbGV0IHsgdGltZVNsb3QsIGNvdXBvbl9kYXRhLCBkb2N0b3JfaWQsIGNsaW5pY19pZCwgcGF5bWVudF90eXBlLCBwcm9maWxlX2lkIH0gPSBkYXRhXG5cbiAgICAgICAgbGV0IGV4dHJhVGltZVBhcmFtcyA9IG51bGxcbiAgICAgICAgaWYgKHRpbWVTbG90LmRhdGUpIHtcbiAgICAgICAgICAgIGV4dHJhVGltZVBhcmFtcyA9IHRoaXMuZ2V0Rm9ybWF0dGVkRGF0ZSh0aW1lU2xvdC5kYXRlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWN0T3BkVGltZVNMb3QodGltZVNsb3QsIGZhbHNlLCBudWxsLCBleHRyYVRpbWVQYXJhbXMpXG5cbiAgICAgICAgaWYgKGNvdXBvbl9kYXRhLmNvdXBvbl9jb2RlKSB7XG4gICAgICAgICAgICBsZXQgY291cG9uX2lkID0gJydcbiAgICAgICAgICAgIGxldCBpc19jYXNoYmFjayA9IGZhbHNlXG5cbiAgICAgICAgICAgIGlmIChjb3Vwb25fY29kZSAmJiBPYmplY3Qua2V5cyhjb3Vwb25fY29kZSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY291cG9uX2lkID0gY291cG9uX2NvZGUuaWRcbiAgICAgICAgICAgICAgICBpc19jYXNoYmFjayA9IGNvdXBvbl9jb2RlLmlzX2Nhc2hiYWNrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291cG9uX2NvZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFwcGx5Q291cG9ucygnMScsIHsgY29kZTogY291cG9uX2RhdGEuY291cG9uX2NvZGUsIGNvdXBvbl9pZDogY291cG9uX2lkLCBpc19jYXNoYmFjazogaXNfY2FzaGJhY2sgfSwgY291cG9uX2lkLCBkb2N0b3JfaWQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWN0X29wZF9wYXltZW50X3R5cGUocGF5bWVudF90eXBlKVxuXG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWN0UHJvZmlsZShwcm9maWxlX2lkKVxuICAgICAgICAvLyBpZiAoZGF0YS5hY3R1YWxfZGF0YS5wcm9jZWR1cmVfaWRzICYmIGRhdGEuYWN0dWFsX2RhdGEucHJvY2VkdXJlX2lkcy5sZW5ndGgpIHtcbiAgICAgICAgLy8gICAgIHRoaXMucHJvcHMuc2F2ZVByb2ZpbGVQcm9jZWR1cmVzKCcnLCAnJywgZGF0YS5hY3R1YWxfZGF0YS5wcm9jZWR1cmVfaWRzLCB0cnVlKVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmIChkYXRhLmRhdGEuZG9jdG9yICYmIGRhdGEuZGF0YS5kb2N0b3IudXJsKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgLyR7ZGF0YS5kYXRhLmRvY3Rvci51cmx9L2Jvb2tpbmc/ZG9jdG9yX2lkPSR7ZGF0YS5hY3R1YWxfZGF0YS5kb2N0b3J9Jmhvc3BpdGFsX2lkPSR7ZGF0YS5hY3R1YWxfZGF0YS5ob3NwaXRhbH0mY2FydF9pdGVtPSR7dGhpcy5wcm9wcy5pZH1gKVxuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9vcGQvZG9jdG9yLyR7ZGF0YS5hY3R1YWxfZGF0YS5kb2N0b3J9LyR7ZGF0YS5hY3R1YWxfZGF0YS5ob3NwaXRhbH0vYm9va2RldGFpbHM/Y2FydF9pdGVtPSR7dGhpcy5wcm9wcy5pZH1gKVxuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgZ2V0Qm9va2luZ0RhdGEoKSB7XG4gICAgICAgIGxldCB0aW1lX3Nsb3QgPSB0aGlzLmJ1aWxkT3BkVGltZVNsb3QoKVxuICAgICAgICBsZXQgdGltZVNsb3QgPSB7XG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSh0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5kYXRlKSxcbiAgICAgICAgICAgIHNsb3Q6ICcnLFxuICAgICAgICAgICAgdGltZTogdGltZV9zbG90LFxuICAgICAgICAgICAgc2VsZWN0ZWREb2N0b3I6IHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3IsXG4gICAgICAgICAgICBzZWxlY3RlZENsaW5pYzogdGhpcy5wcm9wcy5zZWxlY3RlZENsaW5pY1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb3Vwb25fZGF0YSA9IHt9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRvY3RvckNvdXBvbnMgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvciAmJiB0aGlzLnByb3BzLmRvY3RvckNvdXBvbnNbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl0gJiYgdGhpcy5wcm9wcy5kb2N0b3JDb3Vwb25zW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdLmxlbmd0aCkge1xuICAgICAgICAgICAgY291cG9uX2RhdGEgPSB0aGlzLnByb3BzLmRvY3RvckNvdXBvbnNbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl1bMF1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHRpbWVTbG90LCBjb3Vwb25fZGF0YTogY291cG9uX2RhdGEsIGRvY3Rvcl9pZDogdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvciwgY2xpbmljX2lkOiB0aGlzLnByb3BzLnNlbGVjdGVkQ2xpbmljLCBwYXltZW50X3R5cGU6IHRoaXMucHJvcHMucGF5bWVudF90eXBlLCBwcm9maWxlX2lkOiB0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZSB9XG4gICAgfVxuXG4gICAgYXBwbHlDb3Vwb25zKCkge1xuICAgICAgICBsZXQgcHJvY2VkdXJlX2lkcyA9IFwiXCJcbiAgICAgICAgbGV0IHByb2NfaWRzID0gdGhpcy5nZXRQcm9jZWR1cmVJZHModGhpcy5wcm9wcylcbiAgICAgICAgaWYgKHByb2NfaWRzICYmIHByb2NfaWRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcHJvY2VkdXJlX2lkcyA9IHByb2NfaWRzLmpvaW4oJywnKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFuYWx5dGljRGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnT3BkQ291cG9uc0NsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdvcGQtY291cG9ucy1jbGlja2VkJ1xuICAgICAgICB9XG5cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGFuYWx5dGljRGF0YSB9KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGF5X2J0bl9sb2FkaW5nOiB0cnVlIH0pXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvY291cG9uL29wZC8ke3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3J9LyR7dGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY30/cHJvY2VkdXJlc19pZHM9JHtwcm9jZWR1cmVfaWRzfSZkZWFsX3ByaWNlPSR7dGhpcy5nZXREZWFsUHJpY2UoKX0mY2FydF9pdGVtPSR7dGhpcy5zdGF0ZS5jYXJ0X2l0ZW0gfHwgXCJcIn1gKVxuICAgIH1cblxuICAgIGdldERlYWxQcmljZSgpIHtcbiAgICAgICAgbGV0IGhvc3BpdGFsID0ge31cbiAgICAgICAgbGV0IGRvY3RvckRldGFpbHMgPSB0aGlzLnByb3BzLkRPQ1RPUlNbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl1cblxuICAgICAgICBpZiAoZG9jdG9yRGV0YWlscykge1xuICAgICAgICAgICAgbGV0IHsgaG9zcGl0YWxzIH0gPSBkb2N0b3JEZXRhaWxzXG5cbiAgICAgICAgICAgIGlmIChob3NwaXRhbHMgJiYgaG9zcGl0YWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGhvc3BpdGFscy5tYXAoKGhzcHRsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoc3B0bC5ob3NwaXRhbF9pZCA9PSB0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3NwaXRhbCA9IGhzcHRsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRlYWxfcHJpY2UgPSAwXG5cbiAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMoaG9zcGl0YWwpLmxlbmd0aCkge1xuICAgICAgICAgICAgZGVhbF9wcmljZSA9IGhvc3BpdGFsLmRlYWxfcHJpY2VcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0cmVhdG1lbnRfUHJpY2UgPSAwXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdICYmIHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl1bdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY10gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXVt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXS5wcmljZSkge1xuXG4gICAgICAgICAgICB0cmVhdG1lbnRfUHJpY2UgPSB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdW3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWNdLnByaWNlLmRlYWxfcHJpY2UgfHwgMFxuICAgICAgICB9XG5cbiAgICAgICAgZGVhbF9wcmljZSArPSB0cmVhdG1lbnRfUHJpY2VcbiAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMoaG9zcGl0YWwpLmxlbmd0aCAmJiBob3NwaXRhbC52aXAgJiYgT2JqZWN0LmtleXMoaG9zcGl0YWwudmlwKS5sZW5ndGggJiYgaG9zcGl0YWwudmlwLmlzX3ZpcF9tZW1iZXIgJiYgaG9zcGl0YWwudmlwLmNvdmVyX3VuZGVyX3ZpcCkge1xuICAgICAgICAgICAgZGVhbF9wcmljZSA9IGhvc3BpdGFsLnZpcC52aXBfYW1vdW50ICsgaG9zcGl0YWwudmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVhbF9wcmljZVxuICAgIH1cblxuICAgIGNsb3NlRXJyb3JQb3B1cCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiAnJyB9KVxuICAgIH1cblxuICAgIGdldEJvb2tpbmdCdXR0b25UZXh0KHRvdGFsX3dhbGxldF9iYWxhbmNlLCBwcmljZV90b19wYXksIG1ycCwgZW5hYmxlZF9mb3JfY29kX3BheW1lbnQsIGlzX2NvZF9kZWFsX3ByaWNlLCBpc192aXBfYXBwbGljYWJsZSwgdmlwX2Ftb3VudCwgaXNfZ29sZF9tZW1iZXIsIHZpcF9jb252ZW5pZW5jZV9hbW91bnQpIHtcblxuICAgICAgICBsZXQgcHJpY2VfZnJvbV93YWxsZXQgPSAwXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnBheW1lbnRfdHlwZSAhPSAxICYmIHRoaXMucHJvcHMucGF5bWVudF90eXBlICE9IDYpIHtcbiAgICAgICAgICAgIGlmIChlbmFibGVkX2Zvcl9jb2RfcGF5bWVudCkge1xuICAgICAgICAgICAgICAgIGlmIChpc19jb2RfZGVhbF9wcmljZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYENvbmZpcm0gQm9va2luZyAke2lzX2NvZF9kZWFsX3ByaWNlID4gMCA/IGAo4oK5ICR7aXNfY29kX2RlYWxfcHJpY2V9KWAgOiAnJ31gXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGBDb25maXJtIEJvb2tpbmcgJHttcnAgPiAwID8gYCjigrkgJHttcnB9KWAgOiAnJ31gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYENvbmZpcm0gQm9va2luZyAke21ycCA+IDAgPyBgKOKCuSAke21ycH0pYCA6ICcnfWBcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHByaWNlX2Zyb21fcGcgPSAwXG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudXNlX3dhbGxldCAmJiB0b3RhbF93YWxsZXRfYmFsYW5jZSAmJiB0aGlzLnByb3BzLnBheW1lbnRfdHlwZSAhPSA2KSB7XG4gICAgICAgICAgICBwcmljZV9mcm9tX3dhbGxldCA9IE1hdGgubWluKHRvdGFsX3dhbGxldF9iYWxhbmNlLCBwcmljZV90b19wYXkpXG4gICAgICAgIH1cblxuICAgICAgICBwcmljZV9mcm9tX3BnID0gcHJpY2VfdG9fcGF5IC0gcHJpY2VfZnJvbV93YWxsZXRcblxuICAgICAgICBpZiAocHJpY2VfZnJvbV9wZykge1xuICAgICAgICAgICAgcmV0dXJuIGBDb250aW51ZSB0byBwYXkgKOKCuSAke3ByaWNlX2Zyb21fcGd9KWBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBgQ29uZmlybSBCb29raW5nYFxuICAgIH1cblxuICAgIGdldEJvb2tpbmdBbW91bnQodG90YWxfd2FsbGV0X2JhbGFuY2UsIHByaWNlX3RvX3BheSwgbXJwKSB7XG4gICAgICAgIGxldCBwcmljZV9mcm9tX3dhbGxldCA9IDBcbiAgICAgICAgbGV0IHByaWNlX2Zyb21fcGcgPSAwXG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudXNlX3dhbGxldCAmJiB0b3RhbF93YWxsZXRfYmFsYW5jZSkge1xuICAgICAgICAgICAgcHJpY2VfZnJvbV93YWxsZXQgPSBNYXRoLm1pbih0b3RhbF93YWxsZXRfYmFsYW5jZSwgcHJpY2VfdG9fcGF5KVxuICAgICAgICB9XG5cbiAgICAgICAgcHJpY2VfZnJvbV9wZyA9IHByaWNlX3RvX3BheSAvLy0gcHJpY2VfZnJvbV93YWxsZXRcblxuICAgICAgICBpZiAocHJpY2VfZnJvbV9wZykge1xuICAgICAgICAgICAgcmV0dXJuIGDigrkke3ByaWNlX2Zyb21fcGd9YFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGDigrkwYFxuICAgIH1cblxuICAgIHNlbGVjdFRpbWVTbG90KHNsb3QpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIHNsb3Quc2VsZWN0ZWREb2N0b3IgPSB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXG4gICAgICAgIHNsb3Quc2VsZWN0ZWRDbGluaWMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWN0T3BkVGltZVNMb3Qoc2xvdCwgZmFsc2UpXG4gICAgfVxuXG4gICAgdG9nZ2xlV2hhdHNhcChzdGF0dXMsIGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdoYXRzYXBwX29wdGluOiBzdGF0dXMgfSlcbiAgICB9XG5cbiAgICBwcmljZUNvbmZpcm1hdGlvblBvcHVwKGNob2ljZSkge1xuICAgICAgICBpZiAoIWNob2ljZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dDb25maXJtYXRpb25Qb3B1cDogJ2Nsb3NlJyB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dDb25maXJtYXRpb25Qb3B1cDogJ2Nsb3NlJyB9KVxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtX2Jvb2tpbmcnKSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtX2Jvb2tpbmcnKS5jbGljaygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiYW5uZXJDb25maXJtYXRpb25Qb3B1cChjaG9pY2UpIHtcbiAgICAgICAgaWYgKCFjaG9pY2UpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQm9va2luZ1BhZ2VWaXBCYW5uZXJDcm9zc0NsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnYm9va2luZ3BhZ2UtdmlwLWJhbm5lci1jcm9zcy1jbGljaydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd19iYW5uZXI6IGNob2ljZSwgYmFubmVyX2RlY2xpbmU6IHRydWUgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQm9va2luZ1BhZ2VWaXBCYW5uZXJOb3RJbnRlcnN0ZWRDbGljaycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2Jvb2tpbmdwYWdlLXZpcC1iYW5uZXItbm90LWludGVyc3RlZC1jbGljaydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd19iYW5uZXI6ICcnIH0pXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1fYm9va2luZycpKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1fYm9va2luZycpLmNsaWNrKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1Ym1pdExlYWRGb3JtR2VuZXJhdGlvbihpcGRGb3JtUGFyYW1zKSB7XG4gICAgICAgIGlmIChjbG9zZSkge1xuICAgICAgICAgICAgbGV0IGd0bURhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb2N0b3JCb29raW5nSXBkRm9ybUNsb3NlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2RvY3Rvci1ib29raW5nLWlwZC1mb3JtLWNsb3NlZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGlwZF9kYXRhID0ge1xuICAgICAgICAgICAgc2hvd0NoYXQ6IHRydWUsXG4gICAgICAgICAgICBpcGRGb3JtUGFyYW1zOiBpcGRGb3JtUGFyYW1zXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0lwZExlYWRGb3JtOiBmYWxzZSwgc2hvd1NlY29uZFBvcHVwOiB0cnVlIH0sICgpID0+IHtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNoZWNrSXBkQ2hhdEFnZW50U3RhdHVzKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS51c2VycyAmJiByZXNwb25zZS51c2Vycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlwZENoYXRWaWV3KHsgc2hvd0lwZENoYXQ6IHRydWUsIGlwZEZvcm06IGlwZEZvcm1QYXJhbXMsIHNob3dNaW5pbWl6ZTogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKi9cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnb1RvSW5zdXJhbmNlKHNlbGVjdGVkRG9jdG9yLCBzZWxlY3RlZENsaW5pYykge1xuICAgICAgICBsZXQgR3RtZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQXZhaWxOb3dMYWJDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnYXZhaWwtbm93LWxhYi1jbGlja2VkJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBHdG1kYXRhIH0pXG4gICAgICAgIGxldCBkYXRhID0ge31cbiAgICAgICAgZGF0YS50aHVtYm5haWwgPSBzZWxlY3RlZERvY3Rvci50aHVtYm5haWxcbiAgICAgICAgZGF0YS5uYW1lID0gc2VsZWN0ZWREb2N0b3IuZGlzcGxheV9uYW1lXG4gICAgICAgIGRhdGEudXJsID0gc2VsZWN0ZWREb2N0b3IudXJsXG4gICAgICAgIGRhdGEuaWQgPSBzZWxlY3RlZERvY3Rvci5pZFxuICAgICAgICBkYXRhLnNlbGVjdGVkQ2xpbmljID0gc2VsZWN0ZWRDbGluaWNcbiAgICAgICAgZGF0YS50eXBlID0gJ2RvY3RvcidcbiAgICAgICAgdGhpcy5wcm9wcy5zYXZlQXZhaWxOb3dJbnN1cmFuY2UoZGF0YSlcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvaW5zdXJhbmNlLXBsYW5zP3NvdXJjZT1kb2N0b3Itc3VtbWFyeS12aWV3JnNob3dfYnV0dG9uPXRydWUnKVxuICAgIH1cblxuICAgIHNlbGVjdENsaW5pYyhjbGluaWNfaWQpIHtcbiAgICAgICAgdmFyIGhyZWYgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgICAgICBocmVmLnNlYXJjaFBhcmFtcy5zZXQoJ2hvc3BpdGFsX2lkJywgY2xpbmljX2lkKVxuICAgICAgICB2YXIgbmV3VXJsID0gaHJlZi50b1N0cmluZygpXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh3aW5kb3cuaGlzdG9yeS5zdGF0ZSwgZG9jdW1lbnQudGl0bGUsIG5ld1VybClcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRDbGluaWM6IGNsaW5pY19pZCB9LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmZldGNoRGF0YSh0aGlzLnByb3BzLCBjbGluaWNfaWQsIGZhbHNlKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNlbGVjdERhdGUoZSkge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnT3BkRGF0ZUNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdvcGQtZGF0ZS1jbGlja2VkJ1xuICAgICAgICB9XG5cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgc2xvdCA9IHsgdGltZToge30gfVxuICAgICAgICAgICAgbGV0IGRhdGUgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGVUaW1lU2VsZWN0ZWRWYWx1ZTogZGF0ZSB9KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RPcGRUaW1lU0xvdChzbG90LCBmYWxzZSwgbnVsbCwgZGF0ZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEZvcm1hdHRlZERhdGUoZGF0ZSkge1xuICAgICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSlcbiAgICAgICAgdmFyIGRkID0gZGF0ZS5nZXREYXRlKCk7XG5cbiAgICAgICAgdmFyIG1tID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICAgICAgdmFyIHl5eXkgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGlmIChkZCA8IDEwKSB7XG4gICAgICAgICAgICBkZCA9ICcwJyArIGRkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1tIDwgMTApIHtcbiAgICAgICAgICAgIG1tID0gJzAnICsgbW07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdG9kYXkgPSB5eXl5ICsgJy0nICsgbW0gKyAnLScgKyBkZDtcbiAgICAgICAgcmV0dXJuIHRvZGF5XG4gICAgfVxuXG4gICAgc2V0RGF0YU9uQ2xpbmljQ2hhbmdlKCkge1xuICAgICAgICBsZXQgc2xvdCA9IHsgdGltZToge30gfVxuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdE9wZFRpbWVTTG90KHNsb3QsIGZhbHNlKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0ZVRpbWVTZWxlY3RlZFZhbHVlOiAnJyB9KVxuICAgIH1cblxuICAgIHNhdmVMZWFkSWRGb3JVcGRhdGlvbihyZXNwb25zZSkge1xuICAgICAgICBpZiAocmVzcG9uc2UuaWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaXJzdExlYWRJZDogcmVzcG9uc2UuaWQsIHNob3dTZWNvbmRQb3B1cDogdHJ1ZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2Vjb25kSXBkRm9ybVN1Ym1pdHRlZChmb3JtRGF0YSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1NlY29uZFBvcHVwOiBmYWxzZSB9LCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZm9ybURhdGEpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9wdXAxID0gZm9ybURhdGFcblxuICAgICAgICAgICAgICAgICAgICBpZiAocG9wdXAxICYmIHBvcHVwMS5yZXF1ZXN0ZWRfZGF0ZV90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVxdWVzdGVkX2RhdGUgPSBuZXcgRGF0ZShwb3B1cDEucmVxdWVzdGVkX2RhdGVfdGltZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRlID0gdGhpcy5nZXRGb3JtYXR0ZWREYXRlKHJlcXVlc3RlZF9kYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0ZVRpbWVTZWxlY3RlZFZhbHVlOiBkYXRlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLypsZXQgaG91cnMgPSBmb3JtRGF0YS50aXRsZT09J0FNJz9yZXF1ZXN0ZWRfZGF0ZS5nZXRIb3VycygpOnJlcXVlc3RlZF9kYXRlLmdldEhvdXJzKCkrMTIqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBob3VycyA9IHBhcnNlSW50KHJlcXVlc3RlZF9kYXRlLmdldEhvdXJzKCkpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSBmb3JtRGF0YS50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3VuZFRpbWVTbG90ID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aXRsZSA9PSAnUE0nICYmIGhvdXJzICE9IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXJzID0gaG91cnMgKyAxMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy50aW1lU2xvdHMgJiYgdGhpcy5wcm9wcy50aW1lU2xvdHNbZGF0ZV0gJiYgdGhpcy5wcm9wcy50aW1lU2xvdHNbZGF0ZV0ubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRpbWVTbG90RGF0YSA9IHRoaXMucHJvcHMudGltZVNsb3RzW2RhdGVdLmZpbHRlcih4ID0+IHgudGl0bGUgPT0gdGl0bGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW1lU2xvdERhdGEgJiYgdGltZVNsb3REYXRhLmxlbmd0aCAmJiB0aW1lU2xvdERhdGFbMF0udGltaW5nICYmIHRpbWVTbG90RGF0YVswXS50aW1pbmcubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lU2xvdERhdGFbMF0udGltaW5nLm1hcCgoeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4LnZhbHVlID09IGhvdXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kVGltZVNsb3QgPSB4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvdW5kVGltZVNsb3QgJiYgT2JqZWN0LmtleXMoZm91bmRUaW1lU2xvdCkubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1RpbWVFcnJvcjogdHJ1ZSwgdGltZUVycm9yVGV4dDogJ1lvdXIgcmVxdWVzdGVkIHRpbWUgc2xvdCBpcyBub3QgYXZhaWxhYmxlLiBQbGVhc2UgY2hvb3NlIGEgZGlmZmVyZW50IG9uZS4nIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0VGltZShmb3VuZFRpbWVTbG90LCBkYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBpcyAnICsgZSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzZWxlY3RUaW1lKHRpbWUsIGRhdGUpIHtcbiAgICAgICAgbGV0IGRhdGEgPSBudWxsXG4gICAgICAgIGlmICh0aW1lKSB7XG5cbiAgICAgICAgICAgIGxldCB0aW1lU3BhbiA9IE9iamVjdC5hc3NpZ24oe30sIHRpbWUpXG4gICAgICAgICAgICB0aW1lU3Bhbi50aXRsZSA9IHRpbWUudmFsdWUgPj0gMTIgPyAnUE0nIDogJ0FNJ1xuICAgICAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZShkYXRlKSxcbiAgICAgICAgICAgICAgICBtb250aDogTU9OVEhTW25ldyBEYXRlKGRhdGUpLmdldE1vbnRoKCldLFxuICAgICAgICAgICAgICAgIHNsb3Q6ICcnLFxuICAgICAgICAgICAgICAgIHRpbWU6IHRpbWVTcGFuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRhdGEuc2VsZWN0ZWREb2N0b3IgPSB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXG4gICAgICAgICAgICBkYXRhLnNlbGVjdGVkQ2xpbmljID0gdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0YSA9IHsgdGltZToge30gfVxuICAgICAgICB9XG4gICAgICAgIGxldCBleHRyYVRpbWVQYXJhbXMgPSBudWxsXG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICBleHRyYVRpbWVQYXJhbXMgPSB0aGlzLmdldEZvcm1hdHRlZERhdGUoZGF0ZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdE9wZFRpbWVTTG90KGRhdGEsIGZhbHNlLCBudWxsLCBleHRyYVRpbWVQYXJhbXMpXG4gICAgfVxuXG4gICAgYXBwbHlMZW5zRml0Q291cG9ucyhkZWFsX3ByaWNlLCBjb3Vwb24pIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0xlbnNGaXRPUERBcHBseUNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdsZW5zZml0LU9QRC1hcHBseS1jbGlja2VkJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIHRoaXMuZ2V0QW5kQXBwbHlCZXN0Q291cG9ucyhkZWFsX3ByaWNlLCB0cnVlLCBjb3Vwb24pXG4gICAgfVxuXG4gICAgY2xvc2VMZW5zRml0UG9wdXAoKSB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMZW5zRml0T3BkRG9udFdhbnRDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbGVuc2ZpdC1vcGQtZG9udC13YW50LWNsaWNrZWQnXG4gICAgICAgIH1cblxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd19sZW5zZml0X3BvcHVwOiBmYWxzZSwgbGVuc2ZpdF9kZWNsaW5lOiB0cnVlIH0sICgpID0+IHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybV9ib29raW5nJykpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybV9ib29raW5nJykuY2xpY2soKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHtzaG93X2xlbnNmaXRfcG9wdXA6ZmFsc2UsbGVuc2ZpdF9kZWNsaW5lOnRydWV9KVxuICAgIH1cblxuICAgIGNvZEVycm9yQ2xpY2tlZCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy91c2VyL2FwcG9pbnRtZW50cycpXG4gICAgfVxuXG4gICAgdG9nZ2xlR29sZFBsYW5zID0gKHBsYW4pID0+IHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1RvZ2dsZU9wZEdvbGRQbGFuQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3RvZ2dsZS1vcGQtZ29sZC1wbGFuLWNsaWNrZWQnLCAncGxhbic6IHBsYW4uaWRcbiAgICAgICAgfVxuXG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWN0VmlwQ2x1YlBsYW4oJ3BsYW4nLCBwbGFuKSAvLyB0b2dnbGUvc2VsZWN0IHZpcCBwbGFuXG4gICAgICAgIHRoaXMudG9nZ2xlR29sZFByaWNlUG9wdXAoKTtcbiAgICB9XG5cbiAgICB0b2dnbGVHb2xkUHJpY2VQb3B1cCA9ICh2YWx1ZSA9IGZhbHNlKSA9PiB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdDaGFuZ2VQbGFuT3BkQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NoYW5nZS1wbGFuLW9wZC1jbGlja2VkJ1xuICAgICAgICB9XG5cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dHb2xkUHJpY2VMaXN0OiB2YWx1ZSB9KVxuICAgIH1cblxuICAgIGdvVG9Hb2xkUGFnZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0dvVG9PcGRHb2xkUGxhbkNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdnby10by1vcGQtZ29sZC1wbGFuLWNsaWNrZWQnXG4gICAgICAgIH1cblxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ZpcC1nb2xkLWRldGFpbHM/aXNfZ29sZD10cnVlJnNvdXJjZT1tb2JpbGUtb3BkLXN1bW1hcnktZ29sZC1jbGlja2VkJmxlYWRfc291cmNlPURvY3ByaW1lJmJvb2tpbmdfcGFnZT1vcGQnKVxuICAgIH1cblxuICAgIGdldERhdGFBZnRlckxvZ2luID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmZldGNoRGF0YSh0aGlzLnByb3BzLCB0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljLCB0cnVlKVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vZHBHb2xkUHJlZGljdGVkUHJpY2UgJiYgdGhpcy5wcm9wcy5vZHBHb2xkUHJlZGljdGVkUHJpY2UubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRQYWNrYWdlID0gdGhpcy5wcm9wcy5vZHBHb2xkUHJlZGljdGVkUHJpY2UuZmlsdGVyKHggPT4geC5pZCA9PSB0aGlzLnN0YXRlLnNlbGVjdGVkVmlwR29sZFBhY2thZ2VJZClcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZFBhY2thZ2UgJiYgc2VsZWN0ZWRQYWNrYWdlLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRQYWNrYWdlID0gdGhpcy5wcm9wcy5vZHBHb2xkUHJlZGljdGVkUHJpY2UuZmlsdGVyKHggPT4geC5pc19zZWxlY3RlZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWxlY3RlZFBhY2thZ2UgJiYgc2VsZWN0ZWRQYWNrYWdlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0VmlwQ2x1YlBsYW4oJ3BsYW4nLCBzZWxlY3RlZFBhY2thZ2VbMF0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGdldFNlbGVjdGVkVXNlckRhdGEocHJvcHMpIHtcblxuICAgICAgICBsZXQgZG9jdG9yRGV0YWlscyA9IHByb3BzLkRPQ1RPUlNbcHJvcHMuc2VsZWN0ZWREb2N0b3JdXG4gICAgICAgIGxldCB0b3RhbF9hbW91bnRfcGF5YWJsZV93aXRob3V0X2NvdXBvbiA9IG51bGxcbiAgICAgICAgbGV0IGlzX3NlbGVjdGVkX3VzZXJfZ29sZCA9IGZhbHNlXG4gICAgICAgIGlmIChkb2N0b3JEZXRhaWxzKSB7XG4gICAgICAgICAgICBsZXQgeyBob3NwaXRhbHMgfSA9IGRvY3RvckRldGFpbHNcbiAgICAgICAgICAgIGxldCBob3NwaXRhbCA9IHt9XG4gICAgICAgICAgICBsZXQgcGF0aWVudCA9IG51bGxcblxuICAgICAgICAgICAgaWYgKHByb3BzLnByb2ZpbGVzW3Byb3BzLnNlbGVjdGVkUHJvZmlsZV0gJiYgIXByb3BzLnByb2ZpbGVzW3Byb3BzLnNlbGVjdGVkUHJvZmlsZV0uaXNEdW1teVVzZXIpIHtcbiAgICAgICAgICAgICAgICBwYXRpZW50ID0gcHJvcHMucHJvZmlsZXNbcHJvcHMuc2VsZWN0ZWRQcm9maWxlXVxuICAgICAgICAgICAgICAgIGlzX3NlbGVjdGVkX3VzZXJfZ29sZCA9IHByb3BzLnByb2ZpbGVzW3Byb3BzLnNlbGVjdGVkUHJvZmlsZV0uaXNfdmlwX2dvbGRfbWVtYmVyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaG9zcGl0YWxzICYmIGhvc3BpdGFscy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBob3NwaXRhbHMubWFwKChoc3B0bCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaHNwdGwuaG9zcGl0YWxfaWQgPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWwgPSBoc3B0bFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHRvdGFsX2Ftb3VudF9wYXlhYmxlX3dpdGhvdXRfY291cG9uID0gaG9zcGl0YWwuZGVhbF9wcmljZVxuICAgICAgICAgICAgICAgIGlmIChwYXRpZW50ICYmIGhvc3BpdGFsICYmIGhvc3BpdGFsLnZpcCAmJiBob3NwaXRhbC52aXAuaXNfZW5hYmxlX2Zvcl92aXAgJiYgKHBhdGllbnQuaXNfdmlwX2dvbGRfbWVtYmVyIHx8IHBhdGllbnQuaXNfdmlwX21lbWJlcikpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoLypob3NwaXRhbC52aXAuaG9zcF9pc19nb2xkICYmICovaXNfc2VsZWN0ZWRfdXNlcl9nb2xkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsX2Ftb3VudF9wYXlhYmxlX3dpdGhvdXRfY291cG9uID0gaG9zcGl0YWwudmlwLnZpcF9hbW91bnQgKyBob3NwaXRhbC52aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhvc3BpdGFsLnZpcC5jb3Zlcl91bmRlcl92aXAgJiYgcGF0aWVudC5pc192aXBfbWVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbF9hbW91bnRfcGF5YWJsZV93aXRob3V0X2NvdXBvbiA9IGhvc3BpdGFsLnZpcC52aXBfYW1vdW50ICsgaG9zcGl0YWwudmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghcHJvcHMuaXNfYW55X3VzZXJfYnV5X2dvbGQgJiYgcHJvcHMucGF5bWVudF90eXBlID09IDYgJiYgcHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4gJiYgcHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4ub3BkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsX2Ftb3VudF9wYXlhYmxlX3dpdGhvdXRfY291cG9uID0gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB0b3RhbF9hbW91bnRfcGF5YWJsZV93aXRob3V0X2NvdXBvbiB9XG4gICAgfVxuICAgIHNlbmRFbWFpbE5vdGlmaWNhdGlvbigpIHtcbiAgICAgICAgbGV0IGRvY3RvckRldGFpbHMgPSB0aGlzLnByb3BzLkRPQ1RPUlNbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl1cbiAgICAgICAgbGV0IHNlbGVjdGVkX2hvc3BpdGFsID0ge31cbiAgICAgICAgbGV0IHBhdGllbnRcblxuICAgICAgICBpZiAoZG9jdG9yRGV0YWlscykge1xuICAgICAgICAgICAgbGV0IHsgaG9zcGl0YWxzIH0gPSBkb2N0b3JEZXRhaWxzXG4gICAgICAgICAgICBpZiAoaG9zcGl0YWxzICYmIGhvc3BpdGFscy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBob3NwaXRhbHMubWFwKChoc3B0bCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaHNwdGwuaG9zcGl0YWxfaWQgPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfaG9zcGl0YWwgPSBoc3B0bFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhzZWxlY3RlZF9ob3NwaXRhbCkubGVuZ3RoID4gMCAmJiBzZWxlY3RlZF9ob3NwaXRhbC5pc19pcGRfaG9zcGl0YWwgJiYgdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV0gJiYgIXRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdLmlzRHVtbXlVc2VyICYmIHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlRm9ybWF0KSB7XG4gICAgICAgICAgICBsZXQgeyBkYXRlLCB0aW1lLCBzZWxlY3RlZERvY3Rvciwgc2VsZWN0ZWRDbGluaWMgfSA9IHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90XG5cbiAgICAgICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpLnRvRGF0ZVN0cmluZygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXRpZW50ID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV1cbiAgICAgICAgICAgIGxldCB1c2VyX2RhdGEgPSAoeyB1c2VyOiBwYXRpZW50LnVzZXIsIGRvY3Rvcjogc2VsZWN0ZWREb2N0b3IsIGhvc3BpdGFsOiBzZWxlY3RlZENsaW5pYywgcGhvbmVfbnVtYmVyOiBwYXRpZW50LnBob25lX251bWJlciwgcHJlZmVycmVkX2RhdGU6IHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlRm9ybWF0LCB0aW1lX3Nsb3Q6IHRpbWUudGV4dCwgZ2VuZGVyOiBwYXRpZW50LmdlbmRlciwgZG9iOiBwYXRpZW50LmRvYiwgdXNlcl9wcm9maWxlOiBwYXRpZW50LmlkIH0pXG4gICAgICAgICAgICB0aGlzLnByb3BzLlNlbmRJcGRCb29raW5nRW1haWwodXNlcl9kYXRhKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbm9uSXBkTGVhZHModXNlcl9waG9uZV9udW1iZXIsIHVzZXJfbmFtZSkge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IGRhdGEgPSB7fVxuICAgICAgICBsZXQgZG9jdG9yRGV0YWlscyA9IHRoaXMucHJvcHMuRE9DVE9SU1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXVxuICAgICAgICBsZXQgc2VsZWN0ZWRfaG9zcGl0YWwgPSB7fVxuICAgICAgICBsZXQgcGF0aWVudFxuICAgICAgICBsZXQgc3BlY2lhbGl6YXRpb25cbiAgICAgICAgbGV0IGRpc3BsYXlfdG90YWxfbXJwID0gMFxuICAgICAgICBsZXQgZGlzcGxheV9kb2NwcmltZV9kaXNjb3VudCA9IDBcbiAgICAgICAgaWYgKGRvY3RvckRldGFpbHMpIHtcbiAgICAgICAgICAgIGxldCB7IGhvc3BpdGFscywgZ2VuZXJhbF9zcGVjaWFsaXphdGlvbiB9ID0gZG9jdG9yRGV0YWlsc1xuICAgICAgICAgICAgc3BlY2lhbGl6YXRpb24gPSBnZW5lcmFsX3NwZWNpYWxpemF0aW9uXG4gICAgICAgICAgICBpZiAoaG9zcGl0YWxzICYmIGhvc3BpdGFscy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBob3NwaXRhbHMubWFwKChoc3B0bCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaHNwdGwuaG9zcGl0YWxfaWQgPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfaG9zcGl0YWwgPSBoc3B0bFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoc2VsZWN0ZWRfaG9zcGl0YWwpLmxlbmd0aCA+IDAgLyomJiAhc2VsZWN0ZWRfaG9zcGl0YWwuaXNfaXBkX2hvc3BpdGFsKi8pIHtcbiAgICAgICAgICAgIGRhdGEubGVhZF90eXBlID0gJ0RST1BPRkYnXG4gICAgICAgICAgICBkYXRhLmxlYWRfc291cmNlID0gJ2Ryb3BvZmYnXG4gICAgICAgICAgICBkYXRhLnRlc3RfbmFtZSA9IG51bGxcbiAgICAgICAgICAgIGRhdGEubGFiX25hbWUgPSBudWxsXG4gICAgICAgICAgICBkYXRhLmRvY3Rvcl9uYW1lID0gc2VsZWN0ZWRfaG9zcGl0YWwuZG9jdG9yXG4gICAgICAgICAgICBkYXRhLmhvc3BpdGFsX25hbWUgPSBzZWxlY3RlZF9ob3NwaXRhbC5ob3NwaXRhbF9uYW1lXG4gICAgICAgICAgICBkYXRhLnNwZWNpYWx0eSA9IHNwZWNpYWxpemF0aW9uWzBdLm5hbWVcbiAgICAgICAgICAgIGRhdGEuc291cmNlID0gcGFyc2VkXG4gICAgICAgICAgICBkYXRhLmV4aXRwb2ludF91cmwgPSBgaHR0cDovL2RvY3ByaW1lLmNvbSR7dGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZX0/ZG9jdG9yX2lkPSR7dGhpcy5zdGF0ZS5zZWxlY3RlZERvY3Rvcn0maG9zcGl0YWxfaWQ9JHt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljfWBcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlXSAmJiAhdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV0uaXNEdW1teVVzZXIpIHtcbiAgICAgICAgICAgICAgICBwYXRpZW50ID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV1cbiAgICAgICAgICAgICAgICBkYXRhLmN1c3RvbWVyX25hbWUgPSBwYXRpZW50Lm5hbWVcbiAgICAgICAgICAgICAgICBkYXRhLnBob25lX251bWJlciA9IHBhdGllbnQucGhvbmVfbnVtYmVyXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGEuY3VzdG9tZXJfbmFtZSA9IG51bGxcbiAgICAgICAgICAgICAgICBkYXRhLnBob25lX251bWJlciA9IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh1c2VyX3Bob25lX251bWJlcikge1xuICAgICAgICAgICAgICAgIGRhdGEucGhvbmVfbnVtYmVyID0gdXNlcl9waG9uZV9udW1iZXJcbiAgICAgICAgICAgICAgICBkYXRhLmN1c3RvbWVyX25hbWUgPSB1c2VyX25hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkU2xvdCAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnNlbGVjdGVkU2xvdCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHsgZGF0ZSwgdGltZSwgc2VsZWN0ZWREb2N0b3IgfSA9IHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90XG4gICAgICAgICAgICAgICAgZGF0YS5zZWxlY3RlZF90aW1lID0gdGltZS50ZXh0ICsgJyAnICsgdGltZS50aXRsZVxuICAgICAgICAgICAgICAgIGRhdGEuc2VsZWN0ZWRfZGF0ZSA9IGRhdGVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YS5zZWxlY3RlZF90aW1lID0gbnVsbFxuICAgICAgICAgICAgICAgIGRhdGEuc2VsZWN0ZWRfZGF0ZSA9IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpc3BsYXlfdG90YWxfbXJwID0gcGFyc2VJbnQoc2VsZWN0ZWRfaG9zcGl0YWwubXJwKVxuICAgICAgICAgICAgZGlzcGxheV9kb2NwcmltZV9kaXNjb3VudCA9IGRpc3BsYXlfdG90YWxfbXJwIC0gKHBhcnNlSW50KHNlbGVjdGVkX2hvc3BpdGFsLmRlYWxfcHJpY2UpKVxuICAgICAgICAgICAgaWYgKCF0aGlzLnByb3BzLmlzX2FueV91c2VyX2J1eV9nb2xkICYmIHRoaXMucHJvcHMucGF5bWVudF90eXBlID09IDYgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLm9wZCkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlfZG9jcHJpbWVfZGlzY291bnQgPSBkaXNwbGF5X3RvdGFsX21ycCAtICh0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLm9wZC5nb2xkX3ByaWNlICsgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5vcGQuY29udmVuaWVuY2VfY2hhcmdlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YS5kaXNjb3VudCA9IGRpc3BsYXlfZG9jcHJpbWVfZGlzY291bnRcblxuICAgICAgICAgICAgbGV0IHZpc2l0b3JfaW5mbyA9IEdUTS5nZXRWaXNpdG9ySW5mbygpXG4gICAgICAgICAgICBpZiAodmlzaXRvcl9pbmZvICYmIHZpc2l0b3JfaW5mby52aXNpdF9pZCkge1xuICAgICAgICAgICAgICAgIGRhdGEudmlzaXRfaWQgPSB2aXNpdG9yX2luZm8udmlzaXRfaWRcbiAgICAgICAgICAgICAgICBkYXRhLnZpc2l0b3JfaWQgPSB2aXNpdG9yX2luZm8udmlzaXRvcl9pZFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MgJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZGF0YS51dG1fdGFncyA9IHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmZpbHRlcih4ID0+IHgudHlwZSA9PSBcImNvbW1vbl94dHJhX3RhZ3NcIilbMF0udXRtX3RhZ3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlbmFibGVEcm9wT2ZmbGVhZDogZmFsc2UgfSlcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuaXNfbGVhZF9lbmFibGVkKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc19sZWFkX2VuYWJsZWQ6ZmFsc2V9KVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuTm9uSXBkQm9va2luZ0xlYWQoZGF0YSlcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNfbGVhZF9lbmFibGVkOnRydWV9KVxuICAgICAgICAgICAgICAgIH0sIDUwMDApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBub25JcGRMZWFkc0RvY0FkcyhwaG9uZV9udW1iZXIpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBkb2N0b3JfaWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmluaXRpYWxTZXJ2ZXJEYXRhICYmIHRoaXMucHJvcHMuaW5pdGlhbFNlcnZlckRhdGEuZG9jdG9yX2lkKSB7XG4gICAgICAgICAgICBkb2N0b3JfaWQgPSB0aGlzLnByb3BzLmluaXRpYWxTZXJ2ZXJEYXRhLmRvY3Rvcl9pZFxuICAgICAgICB9XG4gICAgICAgIGxldCBjcml0ZXJpYVN0ciA9IHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLmRpc3BsYXlfbmFtZVxuICAgICAgICBsZXQgaG9zcGl0YWxfaWRcbiAgICAgICAgbGV0IHNlbGVjdGVkX2hvc3BpdGFsID0gdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0uaG9zcGl0YWxzLmZpbHRlcih4ID0+IHguaG9zcGl0YWxfaWQgPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pYylcbiAgICAgICAgbGV0IGRpc3BsYXlfdG90YWxfbXJwID0gMFxuICAgICAgICBsZXQgZGlzcGxheV9kb2NwcmltZV9kaXNjb3VudCA9IDBcbiAgICAgICAgaWYgKHNlbGVjdGVkX2hvc3BpdGFsLmxlbmd0aCkge1xuICAgICAgICAgICAgaG9zcGl0YWxfaWQgPSBzZWxlY3RlZF9ob3NwaXRhbFswXS5ob3NwaXRhbF9pZFxuICAgICAgICAgICAgZGlzcGxheV90b3RhbF9tcnAgPSBwYXJzZUludChzZWxlY3RlZF9ob3NwaXRhbFswXS5tcnApXG4gICAgICAgICAgICBkaXNwbGF5X2RvY3ByaW1lX2Rpc2NvdW50ID0gZGlzcGxheV90b3RhbF9tcnAgLSAocGFyc2VJbnQoc2VsZWN0ZWRfaG9zcGl0YWxbMF0uZGVhbF9wcmljZSkpXG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvcHMuaXNfYW55X3VzZXJfYnV5X2dvbGQgJiYgdGhpcy5wcm9wcy5wYXltZW50X3R5cGUgPT0gNiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4ub3BkKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheV9kb2NwcmltZV9kaXNjb3VudCA9IGRpc3BsYXlfdG90YWxfbXJwIC0gKHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4ub3BkLmdvbGRfcHJpY2UgKyB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLm9wZC5jb252ZW5pZW5jZV9jaGFyZ2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRhdGEgPSAoeyBwaG9uZV9udW1iZXI6IHBob25lX251bWJlciwgbGVhZF9zb3VyY2U6ICdkb2NhZHMnLCBzb3VyY2U6IHBhcnNlZCwgbGVhZF90eXBlOiAnRE9DQURTJywgZXhpdHBvaW50X3VybDogYGh0dHA6Ly9kb2NwcmltZS5jb20ke3RoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWV9P2RvY3Rvcl9pZD0ke2RvY3Rvcl9pZH0maG9zcGl0YWxfaWQ9JHtob3NwaXRhbF9pZH1gLCBkb2N0b3JfaWQ6IGRvY3Rvcl9pZCwgaG9zcGl0YWxfaWQ6IGhvc3BpdGFsX2lkLCBkb2N0b3JfbmFtZTogY3JpdGVyaWFTdHIsIGhvc3BpdGFsX25hbWU6IG51bGwsYW1vdW50X2Rpc2NvdW50OiBkaXNwbGF5X2RvY3ByaW1lX2Rpc2NvdW50IH0pXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncyAmJiB0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRhdGEudXRtX3RhZ3MgPSB0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gXCJjb21tb25feHRyYV90YWdzXCIpWzBdLnV0bV90YWdzXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHZpc2l0b3JfaW5mbyA9IEdUTS5nZXRWaXNpdG9ySW5mbygpXG4gICAgICAgIGlmICh2aXNpdG9yX2luZm8gJiYgdmlzaXRvcl9pbmZvLnZpc2l0X2lkKSB7XG4gICAgICAgICAgICBkYXRhLnZpc2l0X2lkID0gdmlzaXRvcl9pbmZvLnZpc2l0X2lkXG4gICAgICAgICAgICBkYXRhLnZpc2l0b3JfaWQgPSB2aXNpdG9yX2luZm8udmlzaXRvcl9pZFxuICAgICAgICB9XG4gICAgICAgIGxldCBndG1fZGF0YSA9IHsgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb2NBZHNCb29raW5nU3VibWl0Q2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2V2ZW50JzogJ2RvYy1hZHMtYm9va2luZy1TdWJtaXQtY2xpY2snIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bV9kYXRhIH0pXG4gICAgICAgIHRoaXMucHJvcHMuc2F2ZUxlYWRQaG5OdW1iZXIocGhvbmVfbnVtYmVyKVxuICAgICAgICBpZih0aGlzLnN0YXRlLmlzX2xlYWRfZW5hYmxlZCAmJiAhU1RPUkFHRS5pc0FnZW50KXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzX2xlYWRfZW5hYmxlZDpmYWxzZX0pXG4gICAgICAgICAgICB0aGlzLnByb3BzLk5vbklwZEJvb2tpbmdMZWFkKGRhdGEpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc19sZWFkX2VuYWJsZWQ6dHJ1ZX0pXG4gICAgICAgICAgICB9LCA1MDAwKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b19iZV9mb3JjZTogMCB9LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZFBhcmFtVG9VcmwoKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNsb3NlSXBkTGVhZFBvcHVwKGZyb20pIHtcbiAgICAgICAgaWYgKGZyb20pIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnRG9jQWRzQm9va2luZ0Nyb3NzQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2V2ZW50JzogJ2RvYy1hZHMtYm9va2luZy1jcm9zcy1jbGljaydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdG9fYmVfZm9yY2U6IDAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kUGFyYW1Ub1VybCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXBwZW5kUGFyYW1Ub1VybCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgdmFyIG5ld3VybCA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArICcmaXNfZG9jQWRzX2xlYWQ9JyArIHRoaXMuc3RhdGUudG9fYmVfZm9yY2U7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoeyBwYXRoOiBuZXd1cmwgfSwgJycsIG5ld3VybCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgZG9jdG9yRGV0YWlscyA9IHRoaXMucHJvcHMuRE9DVE9SU1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXVxuICAgICAgICBsZXQgZG9jdG9yQ291cG9ucyA9IHRoaXMucHJvcHMuZG9jdG9yQ291cG9uc1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXSB8fCBbXVxuICAgICAgICBsZXQgaG9zcGl0YWwgPSB7fVxuICAgICAgICBsZXQgcGF0aWVudCA9IG51bGxcbiAgICAgICAgbGV0IHByaWNlRGF0YSA9IHt9XG4gICAgICAgIGxldCBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSA9IGZhbHNlXG4gICAgICAgIGxldCBpc19zZWxlY3RlZF91c2VyX2luc3VyZWQgPSBmYWxzZVxuICAgICAgICBsZXQgZW5hYmxlZF9mb3JfY29kX3BheW1lbnQgPSBmYWxzZVxuICAgICAgICBsZXQgZW5hYmxlZF9mb3JfcHJlcGFpZF9wYXltZW50ID0gZmFsc2VcbiAgICAgICAgbGV0IGlzX2RlZmF1bHRfdXNlcl9pbnN1cmVkID0gZmFsc2VcbiAgICAgICAgbGV0IGlzX2luc3VyYW5jZV9idXlfYWJsZSA9IGZhbHNlXG4gICAgICAgIGxldCBpbnN1cmFuY2VfZXJyb3JfbXNnID0gJydcbiAgICAgICAgbGV0IHNob3dfaW5zdXJhbmNlX2Vycm9yID0gZmFsc2VcbiAgICAgICAgbGV0IHBheW1lbnRfbW9kZV9jb3VudCA9IDBcbiAgICAgICAgbGV0IGlzX3ZpcF9hcHBsaWNhYmxlID0gZmFsc2VcbiAgICAgICAgbGV0IGlzX3NlbGVjdGVkX3VzZXJfaW5zdXJhbmNlX3N0YXR1c1xuICAgICAgICBsZXQgaXNfc2VsZWN0ZWRfdXNlcl91bmRlcl92aXAgPSBmYWxzZVxuICAgICAgICBsZXQgaXNfZGVmYXVsdF91c2VyX3VuZGVyX3ZpcCA9IGZhbHNlXG4gICAgICAgIGxldCBpc19zZWxlY3RlZF91c2VyX2dvbGQgPSBmYWxzZVxuICAgICAgICBsZXQgY292ZXJfdW5kZXJfdmlwID0gZmFsc2VcbiAgICAgICAgbGV0IHZpcF9kYXRhID0ge31cbiAgICAgICAgbGV0IGhpZGVfcHJlcGFpZCA9IGZhbHNlXG4gICAgICAgIGxldCBhbGxfY2l0aWVzID0gdGhpcy5wcm9wcy5ET0NUT1JTW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdICYmIHRoaXMucHJvcHMuRE9DVE9SU1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXS5hbGxfY2l0aWVzID8gdGhpcy5wcm9wcy5ET0NUT1JTW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdLmFsbF9jaXRpZXMgOiBbXVxuICAgICAgICBpZiAoZG9jdG9yRGV0YWlscykge1xuICAgICAgICAgICAgbGV0IHsgbmFtZSwgcXVhbGlmaWNhdGlvbnMsIGhvc3BpdGFscywgZW5hYmxlZF9mb3JfY29kIH0gPSBkb2N0b3JEZXRhaWxzXG5cbiAgICAgICAgICAgIGlmIChob3NwaXRhbHMgJiYgaG9zcGl0YWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGhvc3BpdGFscy5tYXAoKGhzcHRsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoc3B0bC5ob3NwaXRhbF9pZCA9PSB0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3NwaXRhbCA9IGhzcHRsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZF9mb3JfY29kX3BheW1lbnQgPSBob3NwaXRhbC5lbmFibGVkX2Zvcl9jb2RcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZF9mb3JfcHJlcGFpZF9wYXltZW50ID0gaG9zcGl0YWwuZW5hYmxlZF9mb3JfcHJlcGFpZFxuICAgICAgICAgICAgICAgICAgICBoaWRlX3ByZXBhaWQgPSBbNDI5MCwgMzI0MSwgMzI0MCwgMzU2MF0uaW5kZXhPZihob3NwaXRhbC5ob3NwaXRhbF9pZCkgPT0gLTFcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlICYmIHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0pIHtcbiAgICAgICAgICAgIGlzX2RlZmF1bHRfdXNlcl9pbnN1cmVkID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXS5pc19pbnN1cmVkXG4gICAgICAgICAgICBpc19kZWZhdWx0X3VzZXJfdW5kZXJfdmlwID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXS5pc192aXBfbWVtYmVyXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV0gJiYgIXRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdLmlzRHVtbXlVc2VyKSB7XG4gICAgICAgICAgICBwYXRpZW50ID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV1cbiAgICAgICAgICAgIGlzX3NlbGVjdGVkX3VzZXJfaW5zdXJlZCA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdLmlzX2luc3VyZWRcbiAgICAgICAgICAgIGlzX3NlbGVjdGVkX3VzZXJfaW5zdXJhbmNlX3N0YXR1cyA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdLmluc3VyYW5jZV9zdGF0dXNcbiAgICAgICAgICAgIGlzX3NlbGVjdGVkX3VzZXJfdW5kZXJfdmlwID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV0uaXNfdmlwX21lbWJlclxuICAgICAgICAgICAgaXNfc2VsZWN0ZWRfdXNlcl9nb2xkID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV0uaXNfdmlwX2dvbGRfbWVtYmVyXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LmRhdGUpIHtcbiAgICAgICAgICAgIHByaWNlRGF0YSA9IHsgLi4udGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QudGltZSB9XG4gICAgICAgICAgICBwcmljZURhdGEucGF5YWJsZV9hbW91bnQgPSBwcmljZURhdGEuZGVhbF9wcmljZVxuICAgICAgICAgICAgcHJpY2VEYXRhLmlzX2NvZF9kZWFsX3ByaWNlID0gcHJpY2VEYXRhLmNvZF9kZWFsX3ByaWNlID8gcHJpY2VEYXRhLmNvZF9kZWFsX3ByaWNlIDogcHJpY2VEYXRhLm1ycFxuICAgICAgICAgICAgaWYgKGhvc3BpdGFsICYmIGhvc3BpdGFsLmluc3VyYW5jZSkge1xuICAgICAgICAgICAgICAgIGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlID0gKHBhcnNlSW50KHByaWNlRGF0YS5kZWFsX3ByaWNlKSA8PSBob3NwaXRhbC5pbnN1cmFuY2UuaW5zdXJhbmNlX3RocmVzaG9sZF9hbW91bnQpICYmIGhvc3BpdGFsLmluc3VyYW5jZS5pc19pbnN1cmFuY2VfY292ZXJlZFxuICAgICAgICAgICAgICAgIGlmIChob3NwaXRhbC5pbnN1cmFuY2UuZXJyb3JfbWVzc2FnZSAhPSAnJykge1xuICAgICAgICAgICAgICAgICAgICBpbnN1cmFuY2VfZXJyb3JfbXNnID0gaG9zcGl0YWwuaW5zdXJhbmNlLmVycm9yX21lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgc2hvd19pbnN1cmFuY2VfZXJyb3IgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhvc3BpdGFsICYmIGhvc3BpdGFsLnZpcCkge1xuICAgICAgICAgICAgICAgIGlzX3ZpcF9hcHBsaWNhYmxlID0gaG9zcGl0YWwudmlwLmNvdmVyX3VuZGVyX3ZpcCAmJiBpc19zZWxlY3RlZF91c2VyX3VuZGVyX3ZpcFxuXG4gICAgICAgICAgICAgICAgdmlwX2RhdGEgPSBob3NwaXRhbC52aXBcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyByZXNldCB0aW1lIHNsb3QgaWYgZG9jdG9yL2hvc3BpdGFsIGNoYW5nZXNcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5zZWxlY3RlZENsaW5pYyAhPSB0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljIHx8IHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LnNlbGVjdGVkRG9jdG9yICE9IHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGFPbkNsaW5pY0NoYW5nZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaG9zcGl0YWwpIHtcbiAgICAgICAgICAgIHByaWNlRGF0YS5tcnAgPSBob3NwaXRhbC5tcnBcbiAgICAgICAgICAgIHByaWNlRGF0YS5mZWVzID0gaG9zcGl0YWwuZmVlc1xuICAgICAgICAgICAgcHJpY2VEYXRhLmRlYWxfcHJpY2UgPSBob3NwaXRhbC5kZWFsX3ByaWNlXG4gICAgICAgICAgICBwcmljZURhdGEucGF5YWJsZV9hbW91bnQgPSBob3NwaXRhbC5kZWFsX3ByaWNlXG4gICAgICAgICAgICBwcmljZURhdGEuaXNfY29kX2RlYWxfcHJpY2UgPSBob3NwaXRhbC5jb2RfZGVhbF9wcmljZSA/IGhvc3BpdGFsLmNvZF9kZWFsX3ByaWNlIDogaG9zcGl0YWwubXJwXG5cbiAgICAgICAgICAgIGlmIChob3NwaXRhbC52aXApIHtcbiAgICAgICAgICAgICAgICBpc192aXBfYXBwbGljYWJsZSA9IGhvc3BpdGFsLnZpcC5jb3Zlcl91bmRlcl92aXAgJiYgaXNfc2VsZWN0ZWRfdXNlcl91bmRlcl92aXBcblxuICAgICAgICAgICAgICAgIHZpcF9kYXRhID0gaG9zcGl0YWwudmlwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaG9zcGl0YWwuaW5zdXJhbmNlKSB7XG4gICAgICAgICAgICAgICAgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgPSAocGFyc2VJbnQoaG9zcGl0YWwuZGVhbF9wcmljZSkgPD0gaG9zcGl0YWwuaW5zdXJhbmNlLmluc3VyYW5jZV90aHJlc2hvbGRfYW1vdW50KSAmJiBob3NwaXRhbC5pbnN1cmFuY2UuaXNfaW5zdXJhbmNlX2NvdmVyZWRcbiAgICAgICAgICAgICAgICBpZiAoaG9zcGl0YWwuaW5zdXJhbmNlLmVycm9yX21lc3NhZ2UgIT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zdXJhbmNlX2Vycm9yX21zZyA9IGhvc3BpdGFsLmluc3VyYW5jZS5lcnJvcl9tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgIHNob3dfaW5zdXJhbmNlX2Vycm9yID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGxldCB0cmVhdG1lbnRfUHJpY2UgPSAwLCB0cmVhdG1lbnRfbXJwID0gMFxuICAgICAgICBsZXQgc2VsZWN0ZWRQcm9jZWR1cmVzID0ge31cbiAgICAgICAgaWYgKGZhbHNlICYmIHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl0gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXVt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdW3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWNdLnByaWNlKSB7XG5cbiAgICAgICAgICAgIHRyZWF0bWVudF9QcmljZSA9IHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl1bdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY10ucHJpY2UuZGVhbF9wcmljZSB8fCAwXG4gICAgICAgICAgICB0cmVhdG1lbnRfbXJwID0gdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXVt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXS5wcmljZS5tcnAgfHwgMFxuICAgICAgICAgICAgc2VsZWN0ZWRQcm9jZWR1cmVzID0gdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXVt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXS5jYXRlZ29yaWVzXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdG90YWxfcHJpY2UgPSBwYXJzZUludChwcmljZURhdGEubXJwKSAvLysgdHJlYXRtZW50X1ByaWNlXG4gICAgICAgIGxldCBmaW5hbFByaWNlID0gdG90YWxfcHJpY2UgPyBwYXJzZUludCh0b3RhbF9wcmljZSkgOiAwXG4gICAgICAgIGxldCBkaXNwbGF5X3JhZGlvX3ByZXBhaWRfcHJpY2UgPSBwYXJzZUludChwcmljZURhdGEuZGVhbF9wcmljZSlcblxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaXNfY2FzaGJhY2sgJiYgdGhpcy5wcm9wcy5wYXltZW50X3R5cGUgIT0gNikge1xuICAgICAgICAgICAgZGlzcGxheV9yYWRpb19wcmVwYWlkX3ByaWNlID0gZGlzcGxheV9yYWRpb19wcmVwYWlkX3ByaWNlIC0gKHRoaXMucHJvcHMuZGlzQ291bnRlZE9wZFByaWNlIHx8IDApXG4gICAgICAgICAgICBmaW5hbFByaWNlID0gdG90YWxfcHJpY2UgPyBwYXJzZUludCh0b3RhbF9wcmljZSkgLSAodGhpcy5wcm9wcy5kaXNDb3VudGVkT3BkUHJpY2UgPyB0aGlzLnByb3BzLmRpc0NvdW50ZWRPcGRQcmljZSA6IDApIDogMFxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRvdGFsX3dhbGxldF9iYWxhbmNlID0gMFxuICAgICAgICBpZiAodGhpcy5wcm9wcy51c2VyV2FsbGV0QmFsYW5jZSA+PSAwICYmIHRoaXMucHJvcHMudXNlckNhc2hiYWNrQmFsYW5jZSA+PSAwKSB7XG4gICAgICAgICAgICB0b3RhbF93YWxsZXRfYmFsYW5jZSA9IHRoaXMucHJvcHMudXNlcldhbGxldEJhbGFuY2UgKyB0aGlzLnByb3BzLnVzZXJDYXNoYmFja0JhbGFuY2VcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwZXJjZW50X2Rpc2NvdW50ID0gTWF0aC5tYXgoMCwgKGZpbmFsUHJpY2UgLyAocGFyc2VJbnQocHJpY2VEYXRhLm1ycCkgKyB0cmVhdG1lbnRfbXJwKSkgKiAxMDApXG4gICAgICAgIHBlcmNlbnRfZGlzY291bnQgPSBwYXJzZUludCgxMDAgLSBwZXJjZW50X2Rpc2NvdW50KVxuICAgICAgICBsZXQgZG9jRGlzY291bnQgPSAocGFyc2VJbnQocHJpY2VEYXRhLm1ycCkgKyB0cmVhdG1lbnRfbXJwKSAtIChwYXJzZUludChwcmljZURhdGEuaXNfY29kX2RlYWxfcHJpY2UpKVxuICAgICAgICBsZXQgY29kX3BlcmNlbnRhZ2VfZGlzY291bnQgPSAocGFyc2VJbnQoZG9jRGlzY291bnQpIC8gKHBhcnNlSW50KHByaWNlRGF0YS5tcnApKSAqIDEwMClcbiAgICAgICAgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgPSBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiBpc19zZWxlY3RlZF91c2VyX2luc3VyZWRcblxuICAgICAgICAvL0ZsYWcgdG8gc2hvdyBnb2xkIFNpbmdsZSBGbG93IFBsYW5zXG4gICAgICAgIGxldCBzaG93R29sZFRvZ2dsZVBheW1lbnRNb2RlID0gIXRoaXMucHJvcHMuaXNfYW55X3VzZXJfYnV5X2dvbGQgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLm9wZCAmJiB0aGlzLnByb3BzLm9kcEdvbGRQcmVkaWN0ZWRQcmljZSAmJiB0aGlzLnByb3BzLm9kcEdvbGRQcmVkaWN0ZWRQcmljZS5sZW5ndGggJiYgIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmICh0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLm9wZC5nb2xkX3ByaWNlICsgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5vcGQuY29udmVuaWVuY2VfY2hhcmdlKSA8IGRpc3BsYXlfcmFkaW9fcHJlcGFpZF9wcmljZVxuXG4gICAgICAgIC8vSWYgT25seSBDT0QgYXBwbGljYWJsZSB0aGVuIGRvbid0IHNob3cgc2luZ2xlIGZsb3cgZ29sZFxuICAgICAgICBpZiAoZW5hYmxlZF9mb3JfY29kX3BheW1lbnQgJiYgIWVuYWJsZWRfZm9yX3ByZXBhaWRfcGF5bWVudCkge1xuICAgICAgICAgICAgc2hvd0dvbGRUb2dnbGVQYXltZW50TW9kZSA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICAvL0hpZGUgUHJlcGFpZCBcbiAgICAgICAgZW5hYmxlZF9mb3JfcHJlcGFpZF9wYXltZW50ID0gaGlkZV9wcmVwYWlkICYmIGVuYWJsZWRfZm9yX3ByZXBhaWRfcGF5bWVudFxuICAgICAgICBpZiAoc2hvd0dvbGRUb2dnbGVQYXltZW50TW9kZSlcbiAgICAgICAgICAgIHBheW1lbnRfbW9kZV9jb3VudCsrXG5cbiAgICAgICAgbGV0IHNob3dDb2RQYXltZW50TW9kZSA9IC8qIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmICFpc192aXBfYXBwbGljYWJsZSAmJiovIGVuYWJsZWRfZm9yX2NvZF9wYXltZW50ICYmICEocGFyc2VkLmFwcG9pbnRtZW50X2lkICYmIHBhcnNlZC5jb2RfdG9fcHJlcGFpZCA9PSAndHJ1ZScpIC8qJiYgISh2aXBfZGF0YS5ob3NwX2lzX2dvbGQgJiYgaXNfc2VsZWN0ZWRfdXNlcl9nb2xkKSovXG5cbiAgICAgICAgbGV0IHJlc2V0UGF5bWVudFR5cGUgPSBmYWxzZVxuICAgICAgICBpZiAoIXNob3dHb2xkVG9nZ2xlUGF5bWVudE1vZGUgJiYgdGhpcy5wcm9wcy5wYXltZW50X3R5cGUgPT0gNikge1xuICAgICAgICAgICAgcmVzZXRQYXltZW50VHlwZSA9IHRydWVcbiAgICAgICAgfSBlbHNlIGlmICgoIXNob3dDb2RQYXltZW50TW9kZSB8fCAoc2hvd0NvZFBheW1lbnRNb2RlICYmIGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlKSkgJiYgdGhpcy5wcm9wcy5wYXltZW50X3R5cGUgPT0gMikge1xuICAgICAgICAgICAgcmVzZXRQYXltZW50VHlwZSA9IHRydWVcbiAgICAgICAgfSBlbHNlIGlmICghZW5hYmxlZF9mb3JfcHJlcGFpZF9wYXltZW50ICYmIHRoaXMucHJvcHMucGF5bWVudF90eXBlID09IDEpIHtcbiAgICAgICAgICAgIHJlc2V0UGF5bWVudFR5cGUgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzZXRQYXltZW50VHlwZSAmJiB0aGlzLnByb3BzLnNob3dfZG9jdG9yX3BheW1lbnRfbW9kZSkge1xuICAgICAgICAgICAgaWYgKHNob3dHb2xkVG9nZ2xlUGF5bWVudE1vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdF9vcGRfcGF5bWVudF90eXBlKDYpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3dDb2RQYXltZW50TW9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0X29wZF9wYXltZW50X3R5cGUoMilcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZW5hYmxlZF9mb3JfcHJlcGFpZF9wYXltZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3Rfb3BkX3BheW1lbnRfdHlwZSgxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhvc3BpdGFsICYmIGhvc3BpdGFsLmluc3VyYW5jZSAmJiAocGFyc2VJbnQoaG9zcGl0YWwuZGVhbF9wcmljZSkgPD0gaG9zcGl0YWwuaW5zdXJhbmNlLmluc3VyYW5jZV90aHJlc2hvbGRfYW1vdW50KSAmJiBob3NwaXRhbC5pbnN1cmFuY2UuaXNfaW5zdXJhbmNlX2NvdmVyZWQgJiYgIWlzX3NlbGVjdGVkX3VzZXJfaW5zdXJlZCkge1xuICAgICAgICAgICAgaXNfaW5zdXJhbmNlX2J1eV9hYmxlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChlbmFibGVkX2Zvcl9wcmVwYWlkX3BheW1lbnQpXG4gICAgICAgICAgICBwYXltZW50X21vZGVfY291bnQrK1xuICAgICAgICBpZiAoc2hvd0NvZFBheW1lbnRNb2RlKVxuICAgICAgICAgICAgcGF5bWVudF9tb2RlX2NvdW50KytcbiAgICAgICAgLy8gaWYgKGVuYWJsZWRfZm9yX3ByZXBhaWRfcGF5bWVudCAmJiBpc19pbnN1cmFuY2VfYnV5X2FibGUpXG4gICAgICAgIC8vICAgICBwYXltZW50X21vZGVfY291bnQrK1xuICAgICAgICBsZXQgY2xpbmljX21ycCA9IHByaWNlRGF0YS5tcnBcbiAgICAgICAgaWYgKGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmIHRoaXMucHJvcHMucGF5bWVudF90eXBlICE9IDIpIHtcbiAgICAgICAgICAgIGZpbmFsUHJpY2UgPSAwXG4gICAgICAgICAgICBwcmljZURhdGEuZGVhbF9wcmljZSA9IDBcbiAgICAgICAgICAgIHByaWNlRGF0YS5tcnAgPSAwXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoLypwcmljZURhdGEuZmVlcyA9PSAwICYmICovIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmICF0aGlzLnN0YXRlLmlzX2Nhc2hiYWNrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5wYXltZW50X3R5cGUgPT0gMSkge1xuICAgICAgICAgICAgICAgIGZpbmFsUHJpY2UgPSBwYXJzZUludChwcmljZURhdGEuZGVhbF9wcmljZSkgLSAodGhpcy5wcm9wcy5kaXNDb3VudGVkT3BkUHJpY2UgPyB0aGlzLnByb3BzLmRpc0NvdW50ZWRPcGRQcmljZSA6IDApXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMucGF5bWVudF90eXBlID09IDIpIHtcbiAgICAgICAgICAgICAgICBmaW5hbFByaWNlID0gcGFyc2VJbnQocHJpY2VEYXRhLmlzX2NvZF9kZWFsX3ByaWNlKSAtICh0aGlzLnByb3BzLmRpc0NvdW50ZWRPcGRQcmljZSA/IHRoaXMucHJvcHMuZGlzQ291bnRlZE9wZFByaWNlIDogMClcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlzX2FkZF90b19jYXJkID0gU1RPUkFHRS5pc0FnZW50KCkgfHwgIWlzX2RlZmF1bHRfdXNlcl9pbnN1cmVkXG5cbiAgICAgICAgLy9TZWxlY3QgTmV4dCBVcGNvbWluZyBEYXRlIFxuXG4gICAgICAgIGxldCB7IGRhdGUsIHRpbWUgfSA9IHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90XG5cbiAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKS50b0RhdGVTdHJpbmcoKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHVwY29taW5nX2RhdGUgPSB0aGlzLnByb3BzLnVwY29taW5nX3Nsb3RzICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMudXBjb21pbmdfc2xvdHMpLmxlbmd0aCA/IE9iamVjdC5rZXlzKHRoaXMucHJvcHMudXBjb21pbmdfc2xvdHMpWzBdIDogJydcbiAgICAgICAgbGV0IGRhdGVBZnRlcjI0RGF5cyA9IG5ldyBEYXRlKCkuc2V0RGF0ZShuZXcgRGF0ZSgpLmdldERhdGUoKSArIDIzKVxuICAgICAgICBsZXQgc2hvd1BvcHVwID0gcGFyc2VkLnNob3dQb3B1cCAmJiBwYXJzZWQuc2hvd1BvcHVwID09IFwidHJ1ZVwiICYmIHRoaXMuc3RhdGUuc2hvd0lwZExlYWRGb3JtICYmIHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93Lk9OX0xBTkRJTkdfUEFHRSAmJiAhdGhpcy5wcm9wcy5pc19pcGRfZm9ybV9zdWJtaXR0ZWRcbiAgICAgICAgbGV0IGlzX3RpbWVfc2VsZWN0ZWQgPSAodGhpcy5wcm9wcy51cGNvbWluZ19zbG90cyAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnVwY29taW5nX3Nsb3RzKS5sZW5ndGgpIHx8ICh0aGlzLnByb3BzLnNlbGVjdGVkU2xvdCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5kYXRlKSB8fCAodGhpcy5wcm9wcy5zZWxlY3RlZERhdGVGb3JtYXQpXG5cbiAgICAgICAgbGV0IHZpcF9kaXNjb3VudF9wcmljZSA9IDAvL2ZpbmFsUHJpY2UgLSAodmlwX2dvbGRfcHJpY2UgKyB2aXBfY29udmVuaWVuY2VfYW1vdW50KVxuICAgICAgICBsZXQgdG90YWxfYW1vdW50X3BheWFibGUgPSBmaW5hbFByaWNlXG4gICAgICAgIC8vIGlzX3NlbGVjdGVkX3VzZXJfZ29sZCA9IHZpcF9kYXRhLmNvdmVyX3VuZGVyX3ZpcCAmJiBpc19zZWxlY3RlZF91c2VyX2dvbGRcbiAgICAgICAgY292ZXJfdW5kZXJfdmlwID0gdmlwX2RhdGEuY292ZXJfdW5kZXJfdmlwXG5cbiAgICAgICAgbGV0IGlzX2NvdmVyX3VuZGVyX3ZpcF9nb2xkID0gZmFsc2VcbiAgICAgICAgaWYgKHZpcF9kYXRhICYmICh2aXBfZGF0YS5pc19lbmFibGVfZm9yX3ZpcCkpIHtcblxuICAgICAgICAgICAgdmlwX2Rpc2NvdW50X3ByaWNlID0gdG90YWxfcHJpY2UgLSB2aXBfZGF0YS52aXBfYW1vdW50XG5cbiAgICAgICAgICAgIGlmICgvKnZpcF9kYXRhLmhvc3BfaXNfZ29sZCAmJiAqL2lzX3NlbGVjdGVkX3VzZXJfZ29sZCAmJiBjb3Zlcl91bmRlcl92aXApIHtcbiAgICAgICAgICAgICAgICBpc19jb3Zlcl91bmRlcl92aXBfZ29sZCA9IHRydWVcbiAgICAgICAgICAgICAgICB0b3RhbF9hbW91bnRfcGF5YWJsZSA9IHZpcF9kYXRhLnZpcF9hbW91bnQgKyB2aXBfZGF0YS52aXBfY29udmVuaWVuY2VfYW1vdW50IC0gKHRoaXMuc3RhdGUuaXNfY2FzaGJhY2sgPyAwIDogKHRoaXMucHJvcHMuZGlzQ291bnRlZE9wZFByaWNlIHx8IDApKVxuICAgICAgICAgICAgICAgIHZpcF9kaXNjb3VudF9wcmljZSA9IHRvdGFsX3ByaWNlIC0gKHZpcF9kYXRhLnZpcF9hbW91bnQgKyB2aXBfZGF0YS52aXBfY29udmVuaWVuY2VfYW1vdW50KVxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIGlmIChpc192aXBfYXBwbGljYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICBpc19jb3Zlcl91bmRlcl92aXBfZ29sZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsX2Ftb3VudF9wYXlhYmxlID0gdmlwX2RhdGEudmlwX2Ftb3VudCAtICh0aGlzLnN0YXRlLmlzX2Nhc2hiYWNrID8gMCA6ICh0aGlzLnByb3BzLmRpc0NvdW50ZWRPcGRQcmljZSB8fCAwKSlcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZpcF9kYXRhLmhvc3BfaXNfZ29sZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB2aXBfZGlzY291bnRfcHJpY2UgPSB0b3RhbF9wcmljZSAtICh2aXBfZGF0YS52aXBfZ29sZF9wcmljZSArIHZpcF9kYXRhLnZpcF9jb252ZW5pZW5jZV9hbW91bnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxQcmljZSA9IHRvdGFsX2Ftb3VudF9wYXlhYmxlXG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy9TRVQgUEFZTUVOVCBTVU1NQVJZIFBSSUNFXG4gICAgICAgIGxldCBkaXNwbGF5X3RvdGFsX21ycCA9IHBhcnNlSW50KHByaWNlRGF0YS5tcnApICsgdHJlYXRtZW50X21ycFxuICAgICAgICBsZXQgZGlzcGxheV9kb2NwcmltZV9kaXNjb3VudCA9IGRpc3BsYXlfdG90YWxfbXJwIC0gKHBhcnNlSW50KHByaWNlRGF0YS5kZWFsX3ByaWNlKSArIHRyZWF0bWVudF9QcmljZSlcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmlzX2FueV91c2VyX2J1eV9nb2xkICYmIHRoaXMucHJvcHMucGF5bWVudF90eXBlID09IDYgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLm9wZCkge1xuICAgICAgICAgICAgZGlzcGxheV90b3RhbF9tcnAgPSAodGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5vcGQubXJwIHx8IDApXG4gICAgICAgICAgICBkaXNwbGF5X2RvY3ByaW1lX2Rpc2NvdW50ID0gZGlzcGxheV90b3RhbF9tcnAgLSAodGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5vcGQuZ29sZF9wcmljZSArIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4ub3BkLmNvbnZlbmllbmNlX2NoYXJnZSlcbiAgICAgICAgICAgIGZpbmFsUHJpY2UgPSAodGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5vcGQuZ29sZF9wcmljZSB8fCAwKSArICh0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLm9wZC5jb252ZW5pZW5jZV9jaGFyZ2UpICsgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5kZWFsX3ByaWNlLy8gLSAodGhpcy5wcm9wcy5kaXNDb3VudGVkT3BkUHJpY2V8fDApXG4gICAgICAgICAgICB0b3RhbF9hbW91bnRfcGF5YWJsZSA9IHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4ub3BkLmdvbGRfcHJpY2UgKyB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLm9wZC5jb252ZW5pZW5jZV9jaGFyZ2UgKyB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmRlYWxfcHJpY2UvLyAtICh0aGlzLnByb3BzLmRpc0NvdW50ZWRPcGRQcmljZXx8MClcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBleHRyYVBhcmFtcyA9IHtcbiAgICAgICAgICAgIGlzX2dvbGRfbWVtYmVyOiB2aXBfZGF0YSAmJiB2aXBfZGF0YS5pc19nb2xkICYmIGlzX3NlbGVjdGVkX3VzZXJfZ29sZCxcbiAgICAgICAgICAgIHRvdGFsX2Ftb3VudF9wYXlhYmxlOiB0b3RhbF9hbW91bnRfcGF5YWJsZVxuICAgICAgICB9XG5cbiAgICAgICAgLy9EaXNhYmxlIEFsbCBSZXRhaWwgQm9va2luZ3NcbiAgICAgICAgbGV0IGRpc2FibGVfYWxsX2Jvb2tpbmdzID0gIShpc19jb3Zlcl91bmRlcl92aXBfZ29sZCB8fCBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSlcbiAgICAgICAgaWYoU1RPUkFHRS5jaGVja0F1dGgoKSl7XG5cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBkaXNhYmxlX2FsbF9ib29raW5ncyA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciBib29raW5nUGFnZT17dHJ1ZX0gc3VtbWFyeVBhZ2U9e3RydWV9Lz5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8qdGhpcy5zdGF0ZS5zaG93X2Jhbm5lciA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9va2luZ0NvbmZpcm1hdGlvblBvcHVwIHsuLi50aGlzLnByb3BzfSBwcmljZUNvbmZpcm1hdGlvblBvcHVwPXt0aGlzLnByaWNlQ29uZmlybWF0aW9uUG9wdXAuYmluZCh0aGlzKX0gaXNfdmlwX2FwcGxpY2FibGU9e2lzX3ZpcF9hcHBsaWNhYmxlfSBpc19pbnN1cmFuY2VfYXBwbGljYWJsZT17aXNfaW5zdXJhbmNlX2FwcGxpY2FibGV9IHNob3dfYmFubmVyPXt0aGlzLnN0YXRlLnNob3dfYmFubmVyfSBiYW5uZXJDb25maXJtYXRpb25Qb3B1cD17dGhpcy5iYW5uZXJDb25maXJtYXRpb25Qb3B1cC5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJyovXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93Q29uZmlybWF0aW9uUG9wdXAgPT0gJ29wZW4nICYmIGlzX3NlbGVjdGVkX3VzZXJfaW5zdXJhbmNlX3N0YXR1cyAhPSA0ID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb29raW5nQ29uZmlybWF0aW9uUG9wdXAgey4uLnRoaXMucHJvcHN9IHByaWNlQ29uZmlybWF0aW9uUG9wdXA9e3RoaXMucHJpY2VDb25maXJtYXRpb25Qb3B1cC5iaW5kKHRoaXMpfSBpc192aXBfYXBwbGljYWJsZT17aXNfdmlwX2FwcGxpY2FibGV9IGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlPXtpc19pbnN1cmFuY2VfYXBwbGljYWJsZX0gc2hvd19iYW5uZXI9e3RoaXMuc3RhdGUuc2hvd19iYW5uZXJ9IGJhbm5lckNvbmZpcm1hdGlvblBvcHVwPXt0aGlzLmJhbm5lckNvbmZpcm1hdGlvblBvcHVwLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93X2xlbnNmaXRfcG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPExlbnNmaXRQb3B1cCB7Li4udGhpcy5wcm9wc30gbGVuc2ZpdF9jb3Vwb25zPXt0aGlzLnN0YXRlLmxlbnNmaXRfY291cG9uc30gYXBwbHlMZW5zRml0Q291cG9ucz17dGhpcy5hcHBseUxlbnNGaXRDb3Vwb25zLmJpbmQodGhpcyl9IGNsb3NlTGVuc0ZpdFBvcHVwPXt0aGlzLmNsb3NlTGVuc0ZpdFBvcHVwLmJpbmQodGhpcyl9IGRlYWxfcHJpY2U9e3ByaWNlRGF0YS5kZWFsX3ByaWNlfSBpc09QRD17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuLyogICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLnNob3dOb25JcGRQb3B1cCA9PSAxIHx8IHRoaXMuc3RhdGUuc2hvd05vbklwZFBvcHVwID09IDIpICYmIHRoaXMuc3RhdGUudG9fYmVfZm9yY2UgPT0gMT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOb25JcGRQb3B1cFZpZXcgey4uLnRoaXMucHJvcHN9IG5vbklwZExlYWRzPXt0aGlzLm5vbklwZExlYWRzRG9jQWRzLmJpbmQodGhpcyl9IGNsb3NlSXBkTGVhZFBvcHVwPXt0aGlzLmNsb3NlSXBkTGVhZFBvcHVwLmJpbmQodGhpcyl9IGlzX2ZvcmNlPXt0aGlzLnN0YXRlLnNob3dOb25JcGRQb3B1cH0gaXNfYm9va2luZz17dHJ1ZX0gZG9jdG9yX2lkPXt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yfSBob3NwaXRhbF9pZD17dGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogJycqL1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vU2hvdyBWaXAgR29sZCBTaW5nbGUgRmxvdyBQcmljZSBMaXN0XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0dvbGRQcmljZUxpc3QgJiYgPFZpcEdvbGRQYWNrYWdlIGhpc3RvcnlPYmo9e3RoaXMucHJvcHMuaGlzdG9yeX0gdmlwR29sZFBsYW5zPXt0aGlzLnByb3BzLm9kcEdvbGRQcmVkaWN0ZWRQcmljZX0gdG9nZ2xlR29sZFByaWNlUG9wdXA9e3RoaXMudG9nZ2xlR29sZFByaWNlUG9wdXB9IHRvZ2dsZUdvbGRQbGFucz17KHZhbCkgPT4gdGhpcy50b2dnbGVHb2xkUGxhbnModmFsKX0gc2VsZWN0ZWRfdmlwX3BsYW49e3RoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW59IGdvVG9Hb2xkUGFnZT17dGhpcy5nb1RvR29sZFBhZ2V9IC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wYXltZW50QnRuQ2xpY2tlZCA/IDxkaXYgY2xhc3NOYW1lPVwiYmtuZy10aW1lLW92ZXJsYXlcIj48TG9hZGVyIC8+PC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvZEVycm9yID8gPENvZEVycm9yUG9wdXAgY29kRXJyb3JDbGlja2VkPXsoKSA9PiB0aGlzLmNvZEVycm9yQ2xpY2tlZCgpfSBjb2RNc2c9e3RoaXMucHJvcHMuY29kRXJyb3J9IC8+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXItdG9wLW1hcmdpbiBjbHMtYm5yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0QmFyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03IGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLkRPQ1RPUlNbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl0gJiYgdGhpcy5wcm9wcy5EQVRBX0ZFVENIID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93UG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXBkTGVhZEZvcm0gc3VibWl0TGVhZEZvcm1HZW5lcmF0aW9uPXt0aGlzLnN1Ym1pdExlYWRGb3JtR2VuZXJhdGlvbi5iaW5kKHRoaXMpfSB7Li4udGhpcy5wcm9wc30gaG9zcGl0YWxfbmFtZT17aG9zcGl0YWwgJiYgaG9zcGl0YWwuaG9zcGl0YWxfbmFtZSA/IGhvc3BpdGFsLmhvc3BpdGFsX25hbWUgOiBudWxsfSBob3NwaXRhbF9pZD17aG9zcGl0YWwgJiYgaG9zcGl0YWwuaG9zcGl0YWxfaWQgPyBob3NwaXRhbC5ob3NwaXRhbF9pZCA6IG51bGx9IGRvY3Rvcl9uYW1lPXt0aGlzLnByb3BzLkRPQ1RPUlNbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl0uZGlzcGxheV9uYW1lID8gdGhpcy5wcm9wcy5ET0NUT1JTW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdLmRpc3BsYXlfbmFtZSA6IG51bGx9IGRvY3Rvcl9pZD17dGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcn0gZm9ybVNvdXJjZT0nRG9jdG9yQm9va2luZ1BhZ2UnIHNhdmVMZWFkSWRGb3JVcGRhdGlvbj17dGhpcy5zYXZlTGVhZElkRm9yVXBkYXRpb24uYmluZCh0aGlzKX0gbm9Ub2FzdE1lc3NhZ2U9e3RydWV9IGlzX2Jvb2tpbmdfcGFnZT17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuRE9DVE9SU1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXSAmJiB0aGlzLnN0YXRlLnNob3dTZWNvbmRQb3B1cCAmJiBwYXJzZWQuZ2V0X2ZlZWRiYWNrICYmIHBhcnNlZC5nZXRfZmVlZGJhY2sgPT0gJzEnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElwZFNlY29uZFBvcHVwIHsuLi50aGlzLnByb3BzfSBmaXJzdExlYWRJZD17dGhpcy5zdGF0ZS5maXJzdExlYWRJZH0gYWxsX2RvY3RvcnM9e1tdfSBhbGxfY2l0aWVzPXthbGxfY2l0aWVzfSBkb2N0b3JQcm9maWxlUGFnZT17dHJ1ZX0gc2Vjb25kSXBkRm9ybVN1Ym1pdHRlZD17dGhpcy5zZWNvbmRJcGRGb3JtU3VibWl0dGVkLmJpbmQodGhpcyl9IGhvc3BpdGFsX25hbWU9e2hvc3BpdGFsICYmIGhvc3BpdGFsLmhvc3BpdGFsX25hbWUgPyBob3NwaXRhbC5ob3NwaXRhbF9uYW1lIDogbnVsbH0gaG9zcGl0YWxfaWQ9e2hvc3BpdGFsICYmIGhvc3BpdGFsLmhvc3BpdGFsX2lkID8gaG9zcGl0YWwuaG9zcGl0YWxfaWQgOiBudWxsfSBkb2N0b3JfbmFtZT17dGhpcy5wcm9wcy5ET0NUT1JTW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdLm5hbWUgPyB0aGlzLnByb3BzLkRPQ1RPUlNbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl0ubmFtZSA6ICcnfSBmb3JtU291cmNlPSdEb2N0b3JCb29raW5nUGFnZScgaXNfYm9va2luZ19wYWdlPXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkci1wcm9maWxlLXNjcmVlbiBib29raW5nLWNvbmZpcm0tc2NyZWVuIG1yYi02MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1yYi0yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RlZENsaW5pY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93SGlkZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWREb2N0b3I9e3RoaXMucHJvcHMuRE9DVE9SU1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDbGluaWM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0Q2xpbmljPXt0aGlzLnNlbGVjdENsaW5pYy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIG5ldyB0aW1lIHNsb3QgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENob29zZVBhdGllbnROZXdWaWV3IHBhdGllbnQ9e3BhdGllbnR9IG5hdmlnYXRlVG89e3RoaXMubmF2aWdhdGVUby5iaW5kKHRoaXMpfSB7Li4udGhpcy5wcm9wc30gcHJvZmlsZURhdGFDb21wbGV0ZWQ9e3RoaXMucHJvZmlsZURhdGFDb21wbGV0ZWQuYmluZCh0aGlzKX0gcHJvZmlsZUVycm9yPXt0aGlzLnN0YXRlLnByb2ZpbGVFcnJvcn0gZG9jdG9yU3VtbWFyeVBhZ2U9XCJ0cnVlXCIgaXNfaXBkX2hvc3BpdGFsPXtob3NwaXRhbCAmJiBob3NwaXRhbC5pc19pcGRfaG9zcGl0YWwgPyBob3NwaXRhbC5pc19pcGRfaG9zcGl0YWwgOiAnJ30gZG9jdG9yX2lkPXt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yfSBob3NwaXRhbF9pZD17aG9zcGl0YWwgJiYgaG9zcGl0YWwuaG9zcGl0YWxfaWQgPyBob3NwaXRhbC5ob3NwaXRhbF9pZCA6ICcnfSBzaG93X2luc3VyYW5jZV9lcnJvcj17c2hvd19pbnN1cmFuY2VfZXJyb3J9IGluc3VyYW5jZV9lcnJvcl9tc2c9e2luc3VyYW5jZV9lcnJvcl9tc2d9IGlzRW1haWxOb3RWYWxpZD17dGhpcy5zdGF0ZS5pc0VtYWlsTm90VmFsaWR9IGlzRG9iTm90VmFsaWQ9e3RoaXMuc3RhdGUuaXNEb2JOb3RWYWxpZH0gaXNfb3BkPXt0cnVlfSBzZW5kRW1haWxOb3RpZmljYXRpb249e3RoaXMuc2VuZEVtYWlsTm90aWZpY2F0aW9uLmJpbmQodGhpcyl9IGdldERhdGFBZnRlckxvZ2luPXt0aGlzLmdldERhdGFBZnRlckxvZ2lufSBub25JcGRMZWFkcz17dGhpcy5ub25JcGRMZWFkcy5iaW5kKHRoaXMpfSBpc19kb2NBZHNfbGVhZD17dGhpcy5zdGF0ZS50b19iZV9mb3JjZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVfYWxsX2Jvb2tpbmdzP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBpbmZvLXJ0bCBtcmItMTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsbCBib29raW5ncyBhcmUgZGlzYWJsZWQgZm9yIG5ldyByZXRhaWwgY3VzdG9tZXJzLiBQbGVhc2UgY29udGFjdCB1cyBhdCBjdXN0b21lcmNhcmVAZG9jcHJpbWUuY29tIGlmIHlvdSBuZWVkIG1vcmUgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7KGRpc2FibGVfYWxsX2Jvb2tpbmdzIHx8IHRoaXMuc3RhdGUuZGlzYWJsZV9wYWdlICYmICFTVE9SQUdFLmlzQWdlbnQoKSApPydkaXNhYmxlLW9wYWNpdHknOicnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkLmFwcG9pbnRtZW50X2lkICYmIHBhcnNlZC5jb2RfdG9fcHJlcGFpZCA9PSAndHJ1ZScgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3aWRnZXQgbXJiLTE1ICR7dGhpcy5wcm9wcy5wcm9maWxlRXJyb3IgPyAncm5kLWVycm9yLW5tJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWItdmlzaXQtdGltZSBkLWZsZXggamMtc3BhY2ViXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LTFcIiBzdHlsZT17eyBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgcGFkZGluZ1JpZ2h0OiAxNSB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGQtZmxleFwiPjxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInZpc2l0LXRpbWUtaWNvblwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvd2F0Y2gtZGF0ZS5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5UaW1lIFNlbGVjdGVkPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYmwtdmlldy1mb3JtYXR0aW5nIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZGF0ZS10aW1lIHRpdGxlXCIgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnIH19ID57ZGF0ZSA/IGAke1dFRUtfREFZU1tuZXcgRGF0ZShkYXRlKS5nZXREYXkoKV19LCAke25ldyBEYXRlKGRhdGUpLmdldERhdGUoKX0gJHtNT05USFNbbmV3IERhdGUoZGF0ZSkuZ2V0TW9udGgoKV19YCA6ICcnfSB7dGltZS50ZXh0ID8gXCJ8XCIgOiBcIlwifSB7dGltZS50ZXh0fSB7dGltZS50ZXh0ID8gKHRpbWUudmFsdWUgPj0gMTIgPyAnUE0nIDogJ0FNJykgOiAnJ308L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPXtgd2lkZ2V0IG1yYi0xNSAke3RoaXMuc3RhdGUuc2hvd1RpbWVFcnJvciA/ICdybmQtZXJyb3Itbm0nIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLlRJTUVTTE9UX0RBVEFfTE9BRElORyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci1mb3ItY2hhdC1kaXYgbXQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkZXItZm9yLWNoYXQgbWItMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGRuZy10ZXh0XCI+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGlzX3RpbWVfc2VsZWN0ZWQgfHwgdGhpcy5wcm9wcy5pc19pbnRlZ3JhdGVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHBvcy1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYi12aXNpdC10aW1lIGQtZmxleCBqYy1zcGFjZWIgbWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ2aXNpdC10aW1lLWljb25cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3dhdGNoLWRhdGUuc3ZnJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWN0IFZpc2l0IFRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNfdGltZV9zZWxlY3RlZCAmJiB0aGlzLnByb3BzLmlzX2ludGVncmF0ZWQgJiYgPGEgaHJlZj1cIlwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbygndGltZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZ3LTcwMCB0ZXh0LXNtXCI+U2VsZWN0IFRpbWU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhcG50LWRvYy1kdGxcIj5UaGUgYXBwb2ludG1lbnQgaXMgc3ViamVjdCB0byBjb25maXJtYXRpb24gZnJvbSB0aGUgRG9jdG9yLiA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfdGltZV9zZWxlY3RlZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1zbGVjZXQtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm53LWlucHQtc2VsY3RyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJudy1waWNrLWhkbmdcIj5EYXRlOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fsbi1pbnB1dC10cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW5wLW53LWNhbFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY2FsbmV4dC5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkYXRlXCIgb25DaGFuZ2U9e3RoaXMuc2VsZWN0RGF0ZS5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRlVGltZVNlbGVjdGVkVmFsdWUgPyB0aGlzLnN0YXRlLmRhdGVUaW1lU2VsZWN0ZWRWYWx1ZSA6IHVwY29taW5nX2RhdGV9IG1pbj17dGhpcy5nZXRGb3JtYXR0ZWREYXRlKG5ldyBEYXRlKCkpfSBtYXg9e3RoaXMuZ2V0Rm9ybWF0dGVkRGF0ZShuZXcgRGF0ZShkYXRlQWZ0ZXIyNERheXMpKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLXNsZWNldC1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm53LWlucHQtc2VsY3RyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnctcGljay1oZG5nXCI+VGltZTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxuLWlucHV0LXRwXCIgb25DbGljaz17KCkgPT4gdGhpcy5uYXZpZ2F0ZVRvKCd0aW1lJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImlucC1udy10aW1lXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9udy13YXRjaC5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYmRheVwiIG9uQ2xpY2s9eygpID0+IHsgfX0gcGxhY2Vob2xkZXI9XCJTZWxlY3RcIiB2YWx1ZT17dGltZSAmJiB0aW1lLnRleHQgPyBgJHt0aW1lLnRleHR9ICR7dGltZS52YWx1ZSA+PSAxMiA/ICdQTScgOiAnQU0nfWAgOiAnJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0bS1hcnctc2duXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRpbWVFcnJvclRleHQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFwbnQtZG9jLWR0bCBzbGMtZGF0ZS1lcnJvclwiPnt0aGlzLnN0YXRlLnRpbWVFcnJvclRleHR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IDxwIGNsYXNzTmFtZT1cIm5vLXRtLXNsb3RcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1hZ2VzL3dhcm5pbmctaWNvbi5wbmdcIn0gc3R5bGU9e3sgaGVpZ2h0OiAnMTVweCcsIHdpZHRoOiAnMTVweCcsIG1hcmdpblJpZ2h0OiAnOHB4JyB9fSAvPk5vIFRpbWUgU2xvdCBBdmFpbGFibGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIG5ldyB0aW1lIHNsb3QgKi99XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxWaXNpdFRpbWVOZXcgdHlwZT1cImhvbWVcIiBuYXZpZ2F0ZVRvPXt0aGlzLm5hdmlnYXRlVG8uYmluZCh0aGlzKX0gc2VsZWN0ZWRTbG90PXt0aGlzLnByb3BzLnNlbGVjdGVkU2xvdH0gdGltZUVycm9yPXt0aGlzLnN0YXRlLnNob3dUaW1lRXJyb3J9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lU2xvdHM9e3RoaXMucHJvcHMudGltZVNsb3RzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFRpbWVTbG90PXt0aGlzLnNlbGVjdFRpbWVTbG90LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yX2xlYXZlcz17dGhpcy5wcm9wcy5kb2N0b3JfbGVhdmVzIHx8IFtdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwY29taW5nX3Nsb3RzPXt0aGlzLnByb3BzLnVwY29taW5nX3Nsb3RzIHx8IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhzZWxlY3RlZFByb2NlZHVyZXMpLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvY2VkdXJlVmlldyBzZWxlY3RlZFByb2NlZHVyZXM9e3NlbGVjdGVkUHJvY2VkdXJlc30gcHJpY2VEYXRhPXtwcmljZURhdGF9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnLyo8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4IHBiLWxpc3QgcHJvYy1wYWRkaW5nLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LXByaWNlIHR4dC1vcm5hZ2VcIj7igrkge3ByaWNlRGF0YS5kZWFsX3ByaWNlfTxzcGFuIGNsYXNzTmFtZT1cInRlc3QtbXJwXCI+4oK5IHtwcmljZURhdGEubXJwfTwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwIHRlc3QtbmFtZS1pdGVtXCI+RG9jdG9yIGNvbnN1bHRhdGlvbjwvc3Bhbj48L2Rpdj4qL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgocGFyc2VJbnQocHJpY2VEYXRhLmRlYWxfcHJpY2UpICsgdHJlYXRtZW50X1ByaWNlKSAhPSAwKSAmJiAhaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUpICYmIHRoaXMucHJvcHMucGF5bWVudF90eXBlICE9IDYgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3aWRnZXQgY3BuLWJsdXIgbXJiLTE1IGN1cnNvci1wb2ludGVyYH0gb25DbGljaz17dGhpcy5hcHBseUNvdXBvbnMuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3JDb3Vwb25zLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IGQtZmxleCBqYy1zcGFjZWJcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291cG9uLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9jb3Vwb24tYXBwbGllZC5zdmdcIn0gY2xhc3NOYW1lPVwidmlzaXQtdGltZS1pY29uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgY291cG9uLXRleHRcIiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzX2Nhc2hiYWNrID8gXCJDb3Vwb25cIiA6IFwiQ291cG9uXCJ9IEFwcGxpZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCIgc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIG1hcmdpblJpZ2h0OiAxMywgZm9udFNpemU6ICcxMnB4JywgbWFyZ2luVG9wOiAnNnB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkb2N0b3JDb3Vwb25zWzBdLmNvZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZpc2l0LXRpbWUtaWNvbiBjb3Vwb24taWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFuYWx5dGljRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdPcGRDb3Vwb25zUmVtb3ZlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ29wZC1jb3Vwb25zLXJlbW92ZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY291cG9uSWQnOiBkb2N0b3JDb3Vwb25zWzBdLmNvdXBvbl9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogYW5hbHl0aWNEYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVDb3Vwb25zKHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3IsIGRvY3RvckNvdXBvbnNbMF0uY291cG9uX2lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2Vfd2FsbGV0OiB0cnVlLCBpc19wYXltZW50X2NvdXBvbl9hcHBsaWVkOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvY3Jvc3Muc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb3Vwb25fbG9hZGluZyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdfTGluZWJhcl9jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdfYmFyX2xpbmVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgZC1mbGV4IGpjLXNwYWNlYlwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdXBvbi1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMjRweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvb2ZyLWNwbi5zdmdcIn0gY2xhc3NOYW1lPVwidmlzaXQtdGltZS1pY29uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBjb3Vwb24tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhBVkUgQSBDT1VQT04/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXNpdC10aW1lLWljb24gY291cG9uLWljb24tYXJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcmlnaHQtYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IGdvbGQgY2FyZCBkZXRhaWxzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyohc2hvd0dvbGRUb2dnbGVQYXltZW50TW9kZSAmJiAhaXNfdmlwX2FwcGxpY2FibGUgJiYgIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmICFpc19zZWxlY3RlZF91c2VyX2dvbGQgJiYgdmlwX2RhdGEuaG9zcF9pc19nb2xkICYmIHZpcF9kaXNjb3VudF9wcmljZSA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgY3BuLWJsdXIgbXJiLTE1IGN1cnNvci1wb2ludGVyIGdvbGQtZ3JlZW4tY29udFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsZWFyVmlwU2VsZWN0ZWRQbGFuKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW5hbHl0aWNEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ09wZFZpcEdvbGRDbGljaycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ29wZC12aXAtZ29sZC1jbGljaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBhbmFseXRpY0RhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ZpcC1nb2xkLWRldGFpbHM/aXNfZ29sZD10cnVlJnNvdXJjZT1vcGQtdmlwLWdvbGQtY2xpY2smbGVhZF9zb3VyY2U9RG9jcHJpbWUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBkLWZsZXggamMtc3BhY2ViIGFsaWduLWl0ZW0tY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1jcmQtbGZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Bhbj5TYXZlIOKCuXt2aXBfZGlzY291bnRfcHJpY2V9PC9zcGFuPiBvbiB0aGlzIGFwcG9pbnRtZW50IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdsZC1jcmQtc2ItdHh0XCI+QmVjb21lIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9nb2xkLXNtLnBuZyd9IC8+IG1lbWJlciBAJiM4Mzc3OzE5OTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1jcmQtcmd0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5HZXQgR29sZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJycqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IGdvbGQgY2FyZCBkZXRhaWxzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFlbmFibGVkX2Zvcl9jb2RfcGF5bWVudCAmJiBpc19pbnN1cmFuY2VfYnV5X2FibGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLXNtLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGQtaW5zLXRpdGxlLXN1YlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBjb3Vwb24tdGV4dFwiPkdldCBPUEQgSW5zdXJhbmNlICYgYm9vayBmb3IgPHNwYW4+RlJFRTwvc3Bhbj48L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJvb2sgVW5saW1pdGVkIERvY3RvcnMgYW5kIExhYiBUZXN0czwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvcGQtaW5zLWF2bFwiIG9uQ2xpY2s9e3RoaXMuZ29Ub0luc3VyYW5jZS5iaW5kKHRoaXMsdGhpcy5wcm9wcy5ET0NUT1JTW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdLHRoaXMucHJvcHMuc2VsZWN0ZWRDbGluaWMpfT5BdmFpbCBOb3cgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICAnL2ltZy9yaWdodC1zYy5zdmcnfS8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypQYXltZW50IE1vZGUqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2hvd19kb2N0b3JfcGF5bWVudF9tb2RlICYmIChwYXltZW50X21vZGVfY291bnQgPiAxIHx8IHNob3dHb2xkVG9nZ2xlUGF5bWVudE1vZGUpID8gPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTE1XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgbWItMjBcIj5QYXltZW50IE1vZGU8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0dvbGRUb2dnbGVQYXltZW50TW9kZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LXN1bW1hcnktY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtZGV0YWlsIGQtZmxleFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdF9vcGRfcGF5bWVudF90eXBlKDYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpbyBwYXltZW50LXR5cGUtcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIHBheW1lbnQtYW10LWxhYmVsXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0X29wZF9wYXltZW50X3R5cGUoNilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RG9jdG9yIGJvb2tpbmcgd2l0aCA8aW1nIGNsYXNzTmFtZT1cInNuZy1nbGQtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9nb2xkLWxnLnBuZyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwiZ29sZC1xdXNcIiBvbkNsaWNrPXsoZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdvVG9Hb2xkUGFnZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+Pzwvc3Bhbj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPHNwYW4gY2xhc3NOYW1lPVwicGF5bWVudC1tb2RlLWFtdFwiPntg4oK5JHt0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLm9wZC5nb2xkX3ByaWNlfWB9PC9zcGFuPiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4ub3BkLm1ycCA9PSB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLm9wZC5nb2xkX3ByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8c3BhbiBjbGFzc05hbWU9XCJwYXltZW50LW1vZGUtYW10XCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0X29wZF9wYXltZW50X3R5cGUoNilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT57YOKCuSR7dGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5vcGQuZ29sZF9wcmljZSArIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4ub3BkLmNvbnZlbmllbmNlX2NoYXJnZX1gfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxzcGFuIGNsYXNzTmFtZT1cInBheW1lbnQtbW9kZS1hbXRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3Rfb3BkX3BheW1lbnRfdHlwZSg2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Pntg4oK5JHt0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLm9wZC5nb2xkX3ByaWNlICsgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5vcGQuY29udmVuaWVuY2VfY2hhcmdlfWB9IDxiIGNsYXNzTmFtZT1cImdkLWN1dC1wcmNcIj57YOKCuSR7dGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5vcGQubXJwfWB9PC9iPjwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNoZWNrZWQ9e3RoaXMucHJvcHMucGF5bWVudF90eXBlID09IDZ9IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwYXltZW50LW1vZGVcIiB2YWx1ZT1cIm9uXCIgb25DaGFuZ2U9eyhlKSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgZS5zdG9wUHJvcGFnYXRpb24oKSB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwIG9uQ2xpY2s9eyhldmVudCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUdvbGRQcmljZVBvcHVwKHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9XCJkcC1nbGQtdHh0LW1lbVwiPntgRG9jcHJpbWUgR29sZDogJHt0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLnRvdGFsX2FsbG93ZWRfbWVtYmVyc30gTWVtYmVyYH08c3Bhbj5DaGFuZ2UgUGxhbjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltYWdlcy9kb3duLWFycm93LW8ucG5nJ30vPjwvc3Bhbj48L3A+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImRwLWdvbGQtcGxuLWNoYW5nZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHAtZ29sZC1wYXktbGZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZHAtZ2xkLXR4dC1tZW1cIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ29Ub0dvbGRQYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+e2BEb2NwcmltZSBHb2xkOiAke3RoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4udG90YWxfYWxsb3dlZF9tZW1iZXJzfSBNZW1iZXIgYH08c3Bhbj4oS25vdyBtb3JlKTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZHAtZ2xkLW1lbS1ncm5cIj5FeHRyYSBzYXZpbmdzIG9uIGV2ZXJ5IGFwcG9pbnRtZW50IGZvciAxIHllYXI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHAtZ29sZC1wYXktcmd0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Digrkke3RoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4uZGVhbF9wcmljZX1gfSA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvZWRpdC5zdmcnfSBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlR29sZFByaWNlUG9wdXAodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLnRvdGFsX2FsbG93ZWRfbWVtYmVycz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmVuaWZpdC1jYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibmZ0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYm5mdC10eHRcIj48c3Ryb25nPntgU2F2ZSDigrkke2Rpc3BsYXlfZG9jcHJpbWVfZGlzY291bnR9YH08L3N0cm9uZz4gb24gdGhpcyBhcHBvaW50bWVudDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYm5mdC1zdWJ0eHRcIj57YCR7dGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi50b3RhbF9hbGxvd2VkX21lbWJlcnN9IG1lbWJlciBwbGFuIEBScyR7dGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5kZWFsX3ByaWNlfWB9PHNwYW4+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL2VkaXQuc3ZnJ30gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdvVG9Hb2xkUGFnZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Lz48L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm5mdC1idG5cIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ29Ub0dvbGRQYWdlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+VmlldyBBbGwgQmVuZWZpdHM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJhYWJiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkX2Zvcl9wcmVwYWlkX3BheW1lbnQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LXN1bW1hcnktY29udGVudFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3Rfb3BkX3BheW1lbnRfdHlwZSgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWRldGFpbCBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpbyBwYXltZW50LXR5cGUtcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3Rfb3BkX3BheW1lbnRfdHlwZSgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIHBheW1lbnQtYW10LWxhYmVsXCI+T25seSBEb2N0b3IgYm9va2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlRGF0YS5tcnAgPT0gZGlzcGxheV9yYWRpb19wcmVwYWlkX3ByaWNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYXltZW50LXN1Yi1oZWFkaW5nXCI+Tm8gZGlzY291bnRzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGF5bWVudC1tb2RlLWFtdFwiPntpc19pbnN1cmFuY2VfYXBwbGljYWJsZSA/ICfigrkwJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyp2aXBfZGF0YS5ob3NwX2lzX2dvbGQgJiYgKi9pc19zZWxlY3RlZF91c2VyX2dvbGQgJiYgY292ZXJfdW5kZXJfdmlwID8gYOKCuSAkeyh2aXBfZGF0YS52aXBfYW1vdW50ICsgdmlwX2RhdGEudmlwX2NvbnZlbmllbmNlX2Ftb3VudCkgLSAodGhpcy5wcm9wcy5kaXNDb3VudGVkT3BkUHJpY2UgfHwgMCl9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc192aXBfYXBwbGljYWJsZSA/IGDigrkgJHsodmlwX2RhdGEudmlwX2Ftb3VudCkgLSAodGhpcy5wcm9wcy5kaXNDb3VudGVkT3BkUHJpY2UgfHwgMCl9YCA6IHRoaXMuZ2V0Qm9va2luZ0Ftb3VudCh0b3RhbF93YWxsZXRfYmFsYW5jZSwgZGlzcGxheV9yYWRpb19wcmVwYWlkX3ByaWNlLCAocGFyc2VJbnQocHJpY2VEYXRhLm1ycCkgKyB0cmVhdG1lbnRfbXJwKSl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgPyBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8c3BhbiBjbGFzc05hbWU9XCJzYXZlLXVwdG9cIj5TYXZlIHtwZXJjZW50X2Rpc2NvdW50fSU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjaGVja2VkPXt0aGlzLnByb3BzLnBheW1lbnRfdHlwZSA9PSAxfSB0eXBlPVwicmFkaW9cIiBuYW1lPVwicGF5bWVudC1tb2RlXCIgb25DaGFuZ2U9eyhlKSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgZS5zdG9wUHJvcGFnYXRpb24oKSB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkX2Zvcl9wcmVwYWlkX3BheW1lbnQgJiYgIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmIGVuYWJsZWRfZm9yX2NvZF9wYXltZW50ICYmICFpc192aXBfYXBwbGljYWJsZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiYWFcIiAvPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q29kUGF5bWVudE1vZGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0LXJlcG9ydCBwYXltZW50LWRldGFpbCBtdC0yMFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3Rfb3BkX3BheW1lbnRfdHlwZSgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpbyBwYXltZW50LXR5cGUtcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdF9vcGRfcGF5bWVudF90eXBlKDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIHBheW1lbnQtYW10LWxhYmVsXCI+UGF5IGF0IENsaW5pYzwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZF9mb3JfY29kX3BheW1lbnQgJiYgcHJpY2VEYXRhLmlzX2NvZF9kZWFsX3ByaWNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGF5bWVudC1tb2RlLWFtdFwiPuKCuXsocHJpY2VEYXRhLmlzX2NvZF9kZWFsX3ByaWNlKSAtICh0aGlzLnN0YXRlLmlzX2Nhc2hiYWNrID8gMCA6ICh0aGlzLnByb3BzLmRpc0NvdW50ZWRPcGRQcmljZSB8fCAwKSl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT1cInNhdmUtdXB0b1wiPlNhdmUge2NvZF9wZXJjZW50YWdlX2Rpc2NvdW50fSVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8c3BhbiBjbGFzc05hbWU9XCJwYXltZW50LW1vZGUtYW10XCI+4oK5e2NsaW5pY19tcnB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT1cImxpZ2h0LXR4dHMgZC1ibG9ja1wiPiAoTm8gQ291cG9uIGNvZGUgYW5kIGRpc2NvdW50IHdpbGwgYmUgYXBwbGllZCk8L3NwYW4+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2hlY2tlZD17dGhpcy5wcm9wcy5wYXltZW50X3R5cGUgPT0gMn0gdHlwZT1cInJhZGlvXCIgbmFtZT1cInBheW1lbnQtbW9kZVwiIG9uQ2hhbmdlPXsoZSkgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IGUuc3RvcFByb3BhZ2F0aW9uKCkgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19pbnN1cmFuY2VfYnV5X2FibGUgJiYgdGhpcy5wcm9wcy5jb21tb25fc2V0dGluZ3MgJiYgdGhpcy5wcm9wcy5jb21tb25fc2V0dGluZ3MuaW5zdXJhbmNlX2F2YWlsYWJpbGl0eT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfaW5zdXJhbmNlX2J1eV9hYmxlICYmIHRoaXMucHJvcHMuY29tbW9uX3NldHRpbmdzICYmIHRoaXMucHJvcHMuY29tbW9uX3NldHRpbmdzLmluc3VyYW5jZV9hdmFpbGFiaWxpdHk/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdC1yZXBvcnQgcGF5bWVudC1kZXRhaWwgbXQtMjAgcC1yZWxhdGl2ZVwiICBvbkNsaWNrPXt0aGlzLmdvVG9JbnN1cmFuY2UuYmluZCh0aGlzLHRoaXMucHJvcHMuRE9DVE9SU1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXSx0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljKX0gc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1zbS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3BkLWlucy10aXRsZS1zdWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgY291cG9uLXRleHRcIj5QYXkgd2l0aCBPUEQgSW5zdXJhbmNlPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnMtdC1uLWNcIj5UJkMgQXBwbHk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3BkLWlucy1hdmwgb3BkLWlucy1hdi1rbm93XCI+QXZhaWwgTm93IDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAgJy9pbWcvcmlnaHQtc2Muc3ZnJ30vPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlBheW1lbnQgTW9kZSovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgJiYgKHRoaXMucHJvcHMucGF5bWVudF90eXBlID09IDEgfHwgdGhpcy5wcm9wcy5wYXltZW50X3R5cGUgPT0gNikgPyA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTVcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBtYi0yMFwiPlBheW1lbnQgU3VtbWFyeTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LXN1bW1hcnktY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtZGV0YWlsIGQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TVJQPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JiM4Mzc3OyB7ZGlzcGxheV90b3RhbF9tcnB9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyp2aXBfZGF0YS5ob3NwX2lzX2dvbGQgJiYgKi9pc19zZWxlY3RlZF91c2VyX2dvbGQgJiYgY292ZXJfdW5kZXJfdmlwICYmIHZpcF9kaXNjb3VudF9wcmljZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWRldGFpbCBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0+RG9jcHJpbWUgR29sZCBEaXNjb3VudCA8aW1nIGNsYXNzTmFtZT1cInZpcC1tYWluLWljbyBpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dvbGQtc20ucG5nJ30gLz48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19Pi0gJiM4Mzc3OyB7dmlwX2Rpc2NvdW50X3ByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qdmlwX2RhdGEuaG9zcF9pc19nb2xkICYmICovaXNfc2VsZWN0ZWRfdXNlcl9nb2xkICYmIGNvdmVyX3VuZGVyX3ZpcCA/ICcnIDogaXNfdmlwX2FwcGxpY2FibGUgJiYgdmlwX2Rpc2NvdW50X3ByaWNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1kZXRhaWwgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0+RG9jcHJpbWUgVklQIE1lbWJlciA8aW1nIGNsYXNzTmFtZT1cInZpcC1tYWluLWljbyBpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcGxvZy5wbmcnfSAvPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT4tICYjODM3Nzsge3ZpcF9kaXNjb3VudF9wcmljZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vV2hlbiBHb2xkIE1lbWJlcnNoaXAgaXMgYnV5aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93R29sZFRvZ2dsZVBheW1lbnRNb2RlICYmIHRoaXMucHJvcHMucGF5bWVudF90eXBlID09IDYgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmRlYWxfcHJpY2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1kZXRhaWwgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRvY3ByaW1lIEdvbGQgTWVtYmVyc2hpcCA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiAmIzgzNzc7IHt0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmRlYWxfcHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIShpc19zZWxlY3RlZF91c2VyX2dvbGQvKiAmJiB2aXBfZGF0YS5ob3NwX2lzX2dvbGQqLykgJiYgIWNvdmVyX3VuZGVyX3ZpcCAmJiAhaXNfdmlwX2FwcGxpY2FibGUgLyomJiBwcmljZURhdGEuZmVlcyAhPSAwICovICYmIHBhcnNlSW50KGRpc3BsYXlfZG9jcHJpbWVfZGlzY291bnQpID4gMCA/IDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1kZXRhaWwgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0+e3RoaXMucHJvcHMucGF5bWVudF90eXBlID09IDYgPyAnRG9jcHJpbWUgR29sZCBEaXNjb3VudCcgOiAnRG9jcHJpbWUgRGlzY291bnQnfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT4tICYjODM3Nzsge2Rpc3BsYXlfZG9jcHJpbWVfZGlzY291bnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFpc192aXBfYXBwbGljYWJsZSAmJiAhKC8qdmlwX2RhdGEuaG9zcF9pc19nb2xkICYmICovaXNfc2VsZWN0ZWRfdXNlcl9nb2xkKSAmJiAhY292ZXJfdW5kZXJfdmlwICYmIHRoaXMucHJvcHMucGF5bWVudF90eXBlID09IDEgJiYgcHJpY2VEYXRhLmZlZXMgPT0gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWRldGFpbCBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RG9jcHJpbWUgcHJpY2U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZyZWU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWRldGFpbCBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UGxhdGZvcm0gQ29udmVuaWVuY2UgRmVlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4mIzgzNzc7IHtwYXJzZUludChwcmljZURhdGEuZGVhbF9wcmljZSl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogISh2aXBfZGF0YS5ob3NwX2lzX2dvbGQgJiYgaXNfc2VsZWN0ZWRfdXNlcl9nb2xkKSAmJiAhaXNfdmlwX2FwcGxpY2FibGUgJiYgdGhpcy5wcm9wcy5wYXltZW50X3R5cGUhPTYgJiYgKi90aGlzLnByb3BzLnBheW1lbnRfdHlwZSAhPSA2ICYmIHRoaXMucHJvcHMuZGlzQ291bnRlZE9wZFByaWNlICYmICF0aGlzLnN0YXRlLmlzX2Nhc2hiYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtZGV0YWlsIGQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT5Db3Vwb24gRGlzY291bnQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19Pi0mIzgzNzc7IHt0aGlzLnByb3BzLmRpc0NvdW50ZWRPcGRQcmljZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlRGF0YSA/IDxkaXYgY2xhc3NOYW1lPVwidGVzdC1yZXBvcnQgcGF5bWVudC1kZXRhaWwgbXQtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBwYXltZW50LWFtdC1sYWJlbFwiPkFtb3VudCBQYXlhYmxlPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwYXltZW50LWFtdC12YWx1ZVwiPiYjODM3Nzsge3RvdGFsX2Ftb3VudF9wYXlhYmxlfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzX2Nhc2hiYWNrICYmIHRoaXMucHJvcHMuZGlzQ291bnRlZE9wZFByaWNlID8gPGRpdiBjbGFzc05hbWU9XCJjc2gtYmFjay1hcHBsaWVkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3NoLW1ueS1hcHBsaWVkXCI+KyAmIzgzNzc7IHt0aGlzLnByb3BzLmRpc0NvdW50ZWRPcGRQcmljZX0gQ2FzaGJhY2sgQXBwbGllZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNzaC1tbnktYXBwbGllZC1jb250ZW50XCI+Q2FzaGJhY2sgd2lsbCBiZSBhZGRlZCB0byB5b3VyIGRvY3ByaW1lIHdhbGxldCBiYWxhbmNlIG9uIGFwcG9pbnRtZW50IGNvbXBsZXRpb248L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBjbGVhcmZpeFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgbWItMjBcIj5QYXltZW50IFN1bW1hcnk8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtc3VtbWFyeS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtZGV0YWlsIGQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1SUDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4mIzgzNzc7IHtkaXNwbGF5X3RvdGFsX21ycH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX3NlbGVjdGVkX3VzZXJfZ29sZCA/ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAhaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgJiYgZW5hYmxlZF9mb3JfY29kX3BheW1lbnQgLyomJiBwcmljZURhdGEuZmVlcyAhPSAwICovICYmIHByaWNlRGF0YS5pc19jb2RfZGVhbF9wcmljZSAhPT0gcHJpY2VEYXRhLm1ycCAmJiBwcmljZURhdGEuaXNfY29kX2RlYWxfcHJpY2UgJiYgZGlzcGxheV90b3RhbF9tcnAgLSAocGFyc2VJbnQocHJpY2VEYXRhLmlzX2NvZF9kZWFsX3ByaWNlKSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtZGV0YWlsIGQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19PkRvY3ByaW1lIERpc2NvdW50PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19Pi0gJiM4Mzc3OyB7ZGlzcGxheV90b3RhbF9tcnAgLSAocGFyc2VJbnQocHJpY2VEYXRhLmlzX2NvZF9kZWFsX3ByaWNlKSl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogISh2aXBfZGF0YS5ob3NwX2lzX2dvbGQgJiYgaXNfc2VsZWN0ZWRfdXNlcl9nb2xkKSAmJiAhaXNfdmlwX2FwcGxpY2FibGUgJiYgdGhpcy5wcm9wcy5wYXltZW50X3R5cGUhPTYgJiYgKi8haXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgJiYgdGhpcy5wcm9wcy5wYXltZW50X3R5cGUgIT0gNiAmJiB0aGlzLnByb3BzLmRpc0NvdW50ZWRPcGRQcmljZSAmJiAhdGhpcy5zdGF0ZS5pc19jYXNoYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWRldGFpbCBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0+Q291cG9uIERpc2NvdW50PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT4tJiM4Mzc3OyB7dGhpcy5wcm9wcy5kaXNDb3VudGVkT3BkUHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgJiYgdGhpcy5wcm9wcy5wYXltZW50X3R5cGUgIT0gMiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtdmFsLWJ4XCI+Q292ZXJlZCBVbmRlciBJbnN1cmFuY2U8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHByaWNlRGF0YSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdC1yZXBvcnQgcGF5bWVudC1kZXRhaWwgbXQtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBwYXltZW50LWFtdC1sYWJlbFwiPkFtb3VudCBQYXlhYmxlPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkX2Zvcl9jb2RfcGF5bWVudCAmJiBwcmljZURhdGEuaXNfY29kX2RlYWxfcHJpY2UgJiYgcHJpY2VEYXRhLmZlZXMgIT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxoNSBjbGFzc05hbWU9XCJwYXltZW50LWFtdC12YWx1ZVwiPiYjODM3Nzsge3BhcnNlSW50KHByaWNlRGF0YS5pc19jb2RfZGVhbF9wcmljZSkgLSAodGhpcy5zdGF0ZS5pc19jYXNoYmFjayA/IDAgOiAodGhpcy5wcm9wcy5kaXNDb3VudGVkT3BkUHJpY2UgfHwgMCkpfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKHRoaXMucHJvcHMucGF5bWVudF90eXBlID09IDEgJiYgcHJpY2VEYXRhLmZlZXMgPT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPGg1IGNsYXNzTmFtZT1cInBheW1lbnQtYW10LXZhbHVlXCI+e2Rpc3BsYXlfZG9jcHJpbWVfZGlzY291bnR9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGg1IGNsYXNzTmFtZT1cInBheW1lbnQtYW10LXZhbHVlXCI+JiM4Mzc3OyB7ZGlzcGxheV90b3RhbF9tcnB9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNfY2FzaGJhY2sgJiYgdGhpcy5wcm9wcy5kaXNDb3VudGVkT3BkUHJpY2UgPyA8ZGl2IGNsYXNzTmFtZT1cImNzaC1iYWNrLWFwcGxpZWQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3NoLW1ueS1hcHBsaWVkXCI+KyAmIzgzNzc7IHt0aGlzLnByb3BzLmRpc0NvdW50ZWRPcGRQcmljZX0gQ2FzaGJhY2sgQXBwbGllZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjc2gtbW55LWFwcGxpZWQtY29udGVudFwiPkNhc2hiYWNrIHdpbGwgYmUgYWRkZWQgdG8geW91ciBkb2NwcmltZSB3YWxsZXQgYmFsYW5jZSBvbiBhcHBvaW50bWVudCBjb21wbGV0aW9uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiEoaXNfc2VsZWN0ZWRfdXNlcl9nb2xkKSAmJiAhaXNfdmlwX2FwcGxpY2FibGUgJiYgdGhpcy5wcm9wcy5wYXltZW50X3R5cGUgPT0gMSAmJiAqL3RoaXMucHJvcHMucGF5bWVudF90eXBlICE9IDYgJiYgIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmIHRvdGFsX3dhbGxldF9iYWxhbmNlICYmIHRvdGFsX3dhbGxldF9iYWxhbmNlID4gMCAmJiBkaXNwbGF5X3RvdGFsX21ycCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wid2lkZ2V0IG1yYi0xNVwiICsgKCh0aGlzLnN0YXRlLmlzX3BheW1lbnRfY291cG9uX2FwcGxpZWQgfHwgdGhpcy5wcm9wcy5wYXltZW50X3R5cGUgPT0gMikgPyBcIiBkaXNhYmxlX2NvdXBvblwiIDogXCJcIil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtcHQtZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZlcnJhbC1zZWxlY3QgbWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjay1ieFwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICc2MDAnLCBmb250U2l6ZTogJzE0cHgnIH19PlVzZSBkb2NwcmltZSB3YWxsZXQgbW9uZXk8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMudG9nZ2xlV2FsbGV0VXNlLmJpbmQodGhpcyl9IGNoZWNrZWQ9e3RoaXMuc3RhdGUudXNlX3dhbGxldH0gLz48c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIj48L3NwYW4+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZnJsLWF2bC1iYWxhbmNlXCI+QXZhaWxhYmxlIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICc2cHgnLCBtYXJnaW5Ub3A6ICc1cHgnLCBtYXJnaW5SaWdodDogJzNweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcnVwZWUtaWNvbi5zdmdcIn0gLz57dG90YWxfd2FsbGV0X2JhbGFuY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc19wYXltZW50X2NvdXBvbl9hcHBsaWVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNwbi1weW1udC10eHRcIj5XYWxsZXQgQW1vdW50IGNhbiBub3QgYmUgdXNlZCBiZWNhdXNlIHBheW1lbnQgZ2F0ZXdheSBzcGVjaWZpYyBjb3Vwb24gaXMgYXBwbGllZC48L3NwYW4+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXaGF0c0FwcE9wdGluVmlldyB7Li4udGhpcy5wcm9wc30gcHJvZmlsZXM9e3BhdGllbnR9IHRvZ2dsZVdoYXRzYXA9e3RoaXMudG9nZ2xlV2hhdHNhcC5iaW5kKHRoaXMpfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWItdmlzaXQtdGltZSB0ZXN0LXJlcG9ydFwiIHN0eWxlPXt7IG1hcmdpblRvcDogMTAsIGN1cnNvcjogJ3BvaW50ZXInLCBtYXJnaW5Cb3R0b206IDAgfX0gb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAnb3BlbkNhbmNlbGxhdGlvbicpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIHBheW1lbnQtYW10LWxhYmVsIGZzLWl0YWxpY1wiPkZyZWUgQ2FuY2VsbGF0aW9uPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogNSB9fT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ljb25zL2luZm8uc3ZnXCJ9IC8+PC9zcGFuPjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3Rlcm1zXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiLXZpc2l0LXRpbWUgdGVzdC1yZXBvcnRcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIHBheW1lbnQtYW10LWxhYmVsIGZzLWl0YWxpY1wiPlRlcm1zIG9mIFVzZTxzcGFuPjxpbWcgY2xhc3NOYW1lPVwiaW5mby1pY29uLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ljb25zL2luZm8uc3ZnXCJ9IC8+PC9zcGFuPjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e3RoaXMuc3RhdGUuZXJyb3J9PC9zcGFuPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IDxMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm9wZW5DYW5jZWxsYXRpb24gPyA8Q2FuY2VsYXRpb25Qb2xpY3kgcHJvcHM9e3RoaXMucHJvcHN9IHRvZ2dsZT17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAnb3BlbkNhbmNlbGxhdGlvbicpfSBpc19pbnN1cmFuY2VfYXBwbGljYWJsZT17aXNfaW5zdXJhbmNlX2FwcGxpY2FibGV9IC8+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTVE9SQUdFLmlzQWdlbnQoKSAmJiB0aGlzLnByb3BzLnBheW1lbnRfdHlwZT09Nj8gPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNlbmRBZ2VudEJvb2tpbmdVUkwuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwidi1idG4gcC0zIHYtYnRuLXByaW1hcnkgYnRuLWxnIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIHRleHQtbGcgc3RpY2t5LWJ0blwiPlNlbmQgU01TIEVNQUlMPC9idXR0b24+IDogPGJ1dHRvbiBjbGFzc05hbWU9XCJwLTIgdi1idG4gcC0zIHYtYnRuLXByaW1hcnkgYnRuLWxnIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIHRleHQtbGcgc3RpY2t5LWJ0blwiIGRhdGEtZGlzYWJsZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAhKHBhdGllbnQgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QuZGF0ZSkgfHwgdGhpcy5zdGF0ZS5sb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSBvbkNsaWNrPXt0aGlzLnByb2NlZWQuYmluZCh0aGlzLCAodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QuZGF0ZSksIHBhdGllbnQsIHRydWUsIHRvdGFsX2Ftb3VudF9wYXlhYmxlLCB0b3RhbF93YWxsZXRfYmFsYW5jZSwgaXNfc2VsZWN0ZWRfdXNlcl9pbnN1cmFuY2Vfc3RhdHVzKX0+U2VuZCBTTVM8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFNUT1JBR0UuaXNBZ2VudCgpICYmIHRoaXMucHJvcHMucGF5bWVudF90eXBlID09IDYpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Rpc2FibGVfYWxsX2Jvb2tpbmdzPydkaXNhYmxlLW9wYWNpdHknOicnfSBmaXhlZCBzdGlja3ktYnRuIHAtMCB2LWJ0biAgYnRuLWxnIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIHRleHQtbGcgYnV0dG9ucy1hZGRjYXJ0LWNvbnRhaW5lcmB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9jZWVkLmJpbmQodGhpcywgKHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LmRhdGUpLCBwYXRpZW50LCB0cnVlLCB0b3RhbF9hbW91bnRfcGF5YWJsZSwgdG90YWxfd2FsbGV0X2JhbGFuY2UsIGlzX3NlbGVjdGVkX3VzZXJfaW5zdXJhbmNlX3N0YXR1cywge30pfSBjbGFzc05hbWU9XCJ2LWJ0bi1wcmltYXJ5IGJvb2stYnRuLW1yZ24tYWRqdXN0XCI+U2VuZCBTTVMgRU1BSUw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvY2VlZC5iaW5kKHRoaXMsICh0aGlzLnByb3BzLnNlbGVjdGVkU2xvdCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5kYXRlKSwgcGF0aWVudCwgdHJ1ZSwgdG90YWxfYW1vdW50X3BheWFibGUsIHRvdGFsX3dhbGxldF9iYWxhbmNlLCBpc19zZWxlY3RlZF91c2VyX2luc3VyYW5jZV9zdGF0dXMsIHsgc2VuZFdoYXRzdXA6IHRydWUgfSl9IGNsYXNzTmFtZT1cImFkZC1zaHBuZy1jYXJ0LWJ0blwiPjxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy93YS1sb2dvLXNtLnBuZyd9Lz5TZW5kIG9uIFdoYXRzYXBwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7ZGlzYWJsZV9hbGxfYm9va2luZ3M/J2Rpc2FibGUtb3BhY2l0eSc6Jyd9IGZpeGVkIHN0aWNreS1idG4gcC0wIHYtYnRuICBidG4tbGcgaG9yaXpvbnRhbCBib3R0b20gbm8tcm91bmQgdGV4dC1sZyBidXR0b25zLWFkZGNhcnQtY29udGFpbmVyICR7IWlzX2FkZF90b19jYXJkICYmIHRoaXMucHJvcHMuaXBkX2NoYXQgJiYgdGhpcy5wcm9wcy5pcGRfY2hhdC5zaG93SXBkQ2hhdCA/ICdpcGQtZm9vdC1idG4tZHVvJyA6ICcnfSAke3RoaXMuc3RhdGUuZGlzYWJsZV9wYWdlPydkaXNhYmxlLWFsbCc6Jyd9YH0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudF90eXBlICE9IDYgJiYgKChTVE9SQUdFLmlzQWdlbnQoKSB8fCAhaXNfZGVmYXVsdF91c2VyX2luc3VyZWQgfHwgdGhpcy5zdGF0ZS5pc01hdHJpeCkgJiYgIShwYXJzZWQuYXBwb2ludG1lbnRfaWQgJiYgcGFyc2VkLmNvZF90b19wcmVwYWlkID09ICd0cnVlJykpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9e3RoaXMuc3RhdGUucGF5X2J0bl9sb2FkaW5nfSBjbGFzc05hbWU9e1wiYWRkLXNocG5nLWNhcnQtYnRuXCIgKyAoIXRoaXMuc3RhdGUuY2FydF9pdGVtID8gXCJcIiA6IFwiIHVwZGF0ZS1idG5cIikgKyAodGhpcy5zdGF0ZS5wYXlfYnRuX2xvYWRpbmcgPyBcIiBkaXNhYmxlLWFsbFwiIDogXCJcIil9IGRhdGEtZGlzYWJsZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEocGF0aWVudCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5kYXRlKSB8fCB0aGlzLnN0YXRlLmxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gb25DbGljaz17dGhpcy5wcm9jZWVkLmJpbmQodGhpcywgKHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LmRhdGUpLCBwYXRpZW50LCB0cnVlLCB0b3RhbF9hbW91bnRfcGF5YWJsZSwgdG90YWxfd2FsbGV0X2JhbGFuY2UsIGlzX3NlbGVjdGVkX3VzZXJfaW5zdXJhbmNlX3N0YXR1cywge30pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY2FydF9pdGVtID8gXCJcIiA6IDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2FydGljby5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2FydF9pdGVtID8gXCJVcGRhdGVcIiA6IFwiQWRkIHRvIENhcnRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChTVE9SQUdFLmlzQWdlbnQoKSB8fCB0aGlzLnN0YXRlLmlzTWF0cml4KSAmJiAhKGVuYWJsZWRfZm9yX2NvZF9wYXltZW50ICYmIHRoaXMucHJvcHMucGF5bWVudF90eXBlID09IDIpKSB8fCB0aGlzLnN0YXRlLmNhcnRfaXRlbSA/IFwiXCIgOiA8YnV0dG9uIGRpc2FibGVkPXt0aGlzLnN0YXRlLnBheV9idG5fbG9hZGluZ30gY2xhc3NOYW1lPXtgdi1idG4tcHJpbWFyeSBib29rLWJ0bi1tcmduLWFkanVzdCAke3RoaXMuc3RhdGUucGF5X2J0bl9sb2FkaW5nID8gXCIgZGlzYWJsZS1hbGxcIiA6IFwiXCJ9YH0gaWQ9XCJjb25maXJtX2Jvb2tpbmdcIiBkYXRhLWRpc2FibGVkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEocGF0aWVudCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5kYXRlKSB8fCB0aGlzLnN0YXRlLmxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBvbkNsaWNrPXt0aGlzLnByb2NlZWQuYmluZCh0aGlzLCAodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QuZGF0ZSksIHBhdGllbnQsIGZhbHNlLCB0b3RhbF9hbW91bnRfcGF5YWJsZSwgdG90YWxfd2FsbGV0X2JhbGFuY2UsIGlzX3NlbGVjdGVkX3VzZXJfaW5zdXJhbmNlX3N0YXR1cywge30pfT57dGhpcy5nZXRCb29raW5nQnV0dG9uVGV4dCh0b3RhbF93YWxsZXRfYmFsYW5jZSwgZmluYWxQcmljZSwgZGlzcGxheV90b3RhbF9tcnAsIGVuYWJsZWRfZm9yX2NvZF9wYXltZW50LCAocHJpY2VEYXRhLmlzX2NvZF9kZWFsX3ByaWNlIC0gKHRoaXMuc3RhdGUuaXNfY2FzaGJhY2sgPyAwIDogKHRoaXMucHJvcHMuZGlzQ291bnRlZE9wZFByaWNlIHx8IDApKSksIGlzX3ZpcF9hcHBsaWNhYmxlLCB2aXBfZGF0YS52aXBfYW1vdW50LCAvKnZpcF9kYXRhLmhvc3BfaXNfZ29sZCAmJiAqL2lzX3NlbGVjdGVkX3VzZXJfZ29sZCwgdmlwX2RhdGEudmlwX2NvbnZlbmllbmNlX2Ftb3VudCl9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZXJyb3IgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb29raW5nRXJyb3IgbWVzc2FnZT17dGhpcy5zdGF0ZS5lcnJvcn0gY2xvc2VFcnJvclBvcHVwPXt0aGlzLmNsb3NlRXJyb3JQb3B1cH0gLz4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0QmFyIGV4dHJhQ2xhc3M9XCJjaGF0LWZsb2F0LWJ0bi0yXCIgdHlwZT1cIm9wZFwiIG5vQ2hhdEJ1dHRvbj17dHJ1ZX0gc2hvd0Rlc2t0b3BJcGQ9e3RydWV9IG1zZ1RlbXBsYXRlPVwiZ29sZF9nZW5lcmFsX3RlbXBsYXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPERpc2NsYWltZXIgLz5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucGF5bWVudERhdGEgPyA8UGF5bWVudEZvcm0gbXVsdGlPcmRlcj17dGhpcy5wcm9wcy5wYXltZW50X3R5cGUgPT09IDZ9IHBheW1lbnREYXRhPXt0aGlzLnN0YXRlLnBheW1lbnREYXRhfSByZWZzPSdvcGQnIC8+IDogXCJcIlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFBhdGllbnREZXRhaWxzTmV3XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyB0b2dnbGUscHJvcHMsIGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlIH0pID0+IHtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWwtb3ZlcmxheSBjYW5jZWwtb3ZlcmxheS16aW5kZXhcIiBvbkNsaWNrPXt0b2dnbGV9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBjYW5jZWwtYXBwb2ludG1lbnQtZGl2IGNhbmNlbC1wb3B1cFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIHRleHQtY2VudGVyIGFjdGlvbi1zY3JlZW4taGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGNhbmNlbC1hcHBvaW50bWVudC1oZWFkXCI+Q2FuY2VsbGF0aW9uIFBvbGljeTwvcD5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ljb25zL2Nsb3NlLnBuZ1wifSBjbGFzc05hbWU9XCJjbG9zZS1tb2RhbFwiIG9uQ2xpY2s9e3RvZ2dsZX0gLz5cbiAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWwtcG9saWN5LXRleHQgY2FuY2VsUG9saWN5SGVpZ2h0XCIgc3R5bGU9e3twYWRkaW5nVG9wOiAwfX0+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJvb2tpbmctY2FuY2VsXCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKjxsaSBjbGFzc05hbWU9XCJmdy01MDAgbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBGb3IgYW55IG9ubGluZSBwYWlkIGFwcG9pbnRtZW50cywgeW91IGNhbiBjYW5jZWwgeW91ciBzY2hlZHVsZWQgb3IgcmUtYm9va2VkIGFwcG9pbnRtZW50IGFuZCBpbml0aWF0ZSBpbW1lZGlhdGUgcmVmdW5kIGF0IGFueSB0aW1lLiBBbiBpbW1lZGlhdGUgcmVmdW5kIHNoYWxsIGJlIHN1YmplY3QgdG8gdGVybXMgYW5kIGNvbmRpdGlvbnMgYXMgZGVzY3JpYmVkIHVuZGVyIHRoaXMgc2VjdGlvbiBtZW50aW9uZWQgYmVsb3cuXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmdy01MDAgbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBJbiB0aGUgZXZlbnQsIHRoZSBzZXJ2aWNlcyBhcmUgbm90IGF2YWlsZWQgYXQgdGhlIGFwcG9pbnRlZCBkYXRlIGFuZCB0aW1lIGFuZCBvdXIgc3lzdGVtcyBkbyBub3QgdmFsaWRhdGUgdGhlIFVSTiBnZW5lcmF0ZWQgb24geW91ciByZWdpc3RlcmVkIG1vYmlsZSBudW1iZXIsIHdlIHdpbGwgYXV0b21hdGljYWxseSBjYW5jZWwgeW91ciBhcHBvaW50bWVudCBhdCAxMjowMCBtaWRuaWdodCBvZiBuZXh0IGRhdGUgb2YgeW91ciBhcHBvaW50bWVudCBkYXRlLlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZnctNTAwIG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgT2NjYXNpb25hbGx5LCBhcHBvaW50bWVudHMgbWF5IGJlIGNhbmNlbGxlZCBvciBwb3N0cG9uZWQgYnkgdGhlIFRoaXJkIFBhcnR5IFNlcnZpY2UgUHJvdmlkZXIuIFNob3VsZCB0aGlzIG9jY3VyLCB3ZSB3aWxsIGF0dGVtcHQgdG8gY29udGFjdCBvciBpbmZvcm0geW91IGFuZCB5b3UgbWF5IHJlLXNjaGVkdWxlIHlvdXIgYXBwb2ludG1lbnQgYXMgcGVyIHlvdXIgY29udmVuaWVuY2Ugb3IgdmlzaXQgd3d3LmRvY3ByaW1lLmNvbSBmb3IgZnJlc2gvcmUtYm9va2luZyBvbiB0aGUgV2Vic2l0ZS5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZ3LTUwMCBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbGxhdGlvbiB0aHJvdWdoIG1haWwgb3IgY2FsbCBjZW50ZXIgaXMgYWxsb3dlZCBmb3IgYWxsIHRoZSBib29raW5ncyB1bnRpbCB0aGUgdGltZSBvZiBhcHBvaW50bWVudCBvciAxMjowMCBtaWRuaWdodCBvZiBuZXh0IGRhdGUgb2YgeW91ciBhcHBvaW50bWVudCBkYXRlLiBJbiBzdWNoIGNhc2VzLCB3ZSB3aWxsIGluaXRpYXRlIGFuIGltbWVkaWF0ZSByZWZ1bmQgb2YgeW91ciBtb25leSBhcyBwZXIgdGhlIHByb2Nlc3MgZGVmaW5lZCB1bmRlciBSZWZ1bmQsIFJlc2NoZWR1bGluZyBhbmQgQ2FuY2VsbGF0aW9uIHNlY3Rpb24gdW5kZXIgdGhlIEVuZCBVc2VyIEFncmVlbWVudC4gPHUgc3R5bGU9e3tjb2xvcjogJyNmNzg2MzEnLGN1cnNvcjoncG9pbnRlcicsZGlzcGxheTonaW5saW5lLWJsb2NrJ319IG9uQ2xpY2s9eygpID0+cHJvcHMuaGlzdG9yeS5wdXNoKCcvdGVybXM/Zm9yQm9va2luZ1Njcm9sbD10cnVlJyl9PmNsaWNrIGhlcmU8L3U+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+Ki99XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Gb3IgT25saW5lIFBhaWQgQXBwb2ludG1lbnRzIC08L3N0cm9uZz4gWW91IGNhbiBjYW5jZWwgeW91ciBzY2hlZHVsZWQgYXBwb2ludG1lbnQgYXQgYW55IHRpbWUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+SW4gQ2FzZSBvZiBBIE5vIFNob3cgKFBhdGllbnQgVW5hdmFpbGFibGUpIC08L3N0cm9uZz4gSW4gdGhlIGV2ZW50LCB0aGUgc2VydmljZXMgYXJlIG5vdCBhdmFpbGVkIGF0IHRoZSBhcHBvaW50ZWQgZGF0ZSBhbmQgdGltZS4gV2Ugd2lsbCBhdXRvbWF0aWNhbGx5IGNhbmNlbCB5b3VyIGFwcG9pbnRtZW50IGF0IDEyOjAwIG1pZG5pZ2h0IG9mIHRoZSBkYXRlIGZvbGxvd2VkIGJ5IHRoZSBhcHBvaW50bWVudCBkYXRlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlRoaXJkIFBhcnR5IENhbmNlbGxhdGlvbiAoUHJvdmlkZXIgVW5hdmFpbGFibGUpIC08L3N0cm9uZz4gT2NjYXNpb25hbGx5LCBhcHBvaW50bWVudHMgbWF5IGJlIGNhbmNlbGVkIG9yIHBvc3Rwb25lZCBkdWUgdG8gdW5hdmFpbGFiaWxpdHkgb2YgdGhlIHNlcnZpY2UgcHJvdmlkZXIuIFNob3VsZCB0aGlzIG9jY3VyLCB3ZSB3aWxsIGNvbnRhY3Qgb3IgaW5mb3JtIHlvdSBhbmQgeW91IG1heSByZXNjaGVkdWxlIHlvdXIgYXBwb2ludG1lbnQgYXMgcGVyIHlvdXIgY29udmVuaWVuY2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Rm9yIE9ubGluZSBQYWlkIEFwcG9pbnRtZW50cyAtPC9zdHJvbmc+IFlvdSBjYW4gY2FuY2VsIHlvdXIgc2NoZWR1bGVkIGFwcG9pbnRtZW50IGFuZCBpbml0aWF0ZSB0aGUgaW1tZWRpYXRlIHJlZnVuZCBhdCBhbnkgdGltZS4gSW1tZWRpYXRlIHJlZnVuZCBzaGFsbCBiZSBzdWJqZWN0IHRvIHRlcm1zIGFuZCBjb25kaXRpb25zIGFzIGRlc2NyaWJlZCB1bmRlciB0aGlzIHNlY3Rpb24gbWVudGlvbmVkIGJlbG93LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkluIENhc2Ugb2YgQSBObyBTaG93IChQYXRpZW50IFVuYXZhaWxhYmxlKSAtPC9zdHJvbmc+IEluIHRoZSBldmVudCwgdGhlIHNlcnZpY2VzIGFyZSBub3QgYXZhaWxlZCBhdCB0aGUgYXBwb2ludGVkIGRhdGUgYW5kIHRpbWUuIFdlIHdpbGwgYXV0b21hdGljYWxseSBjYW5jZWwgeW91ciBhcHBvaW50bWVudCBhdCAxMjowMCBtaWRuaWdodCBvZiB0aGUgZGF0ZSBmb2xsb3dlZCBieSB0aGUgYXBwb2ludG1lbnQgZGF0ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5UaGlyZCBQYXJ0eSBDYW5jZWxsYXRpb24gKFByb3ZpZGVyIFVuYXZhaWxhYmxlKSAtPC9zdHJvbmc+IE9jY2FzaW9uYWxseSwgYXBwb2ludG1lbnRzIG1heSBiZSBjYW5jZWxlZCBvciBwb3N0cG9uZWQgZHVlIHRvIHVuYXZhaWxhYmlsaXR5IG9mIHRoZSBzZXJ2aWNlIHByb3ZpZGVyLiBTaG91bGQgdGhpcyBvY2N1ciwgd2Ugd2lsbCBjb250YWN0IG9yIGluZm9ybSB5b3UgYW5kIHlvdSBtYXkgcmVzY2hlZHVsZSB5b3VyIGFwcG9pbnRtZW50IGFzIHBlciB5b3VyIGNvbnZlbmllbmNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPjI0IEhvdXJzIENhbmNlbGxhdGlvbiAtPC9zdHJvbmc+IENhbmNlbGxhdGlvbiBpcyBhbGxvd2VkIGZvciBhbGwgdGhlIGFwcG9pbnRtZW50cy4gSW4gc3VjaCBjYXNlcywgd2Ugd2lsbCBpbml0aWF0ZSB0aGUgaW1tZWRpYXRlIHJlZnVuZCBvZiB5b3VyIG1vbmV5IGFzIHBlciB0aGUgcHJvY2VzcyBkZWZpbmVkIHVuZGVyIFJlZnVuZCwgUmVzY2hlZHVsaW5nLCBhbmQgQ2FuY2VsbGF0aW9uIHNlY3Rpb24gb2YgdGhlICA8dSBzdHlsZT17e2NvbG9yOiBgdmFyKC0tdGV4dC0tcHJpbWFyeS0tY29sb3IpYCAsY3Vyc29yOidwb2ludGVyJyxkaXNwbGF5OidpbmxpbmUtYmxvY2snfX0gb25DbGljaz17KCkgPT5wcm9wcy5oaXN0b3J5LnB1c2goJy90ZXJtcz9mb3JCb29raW5nU2Nyb2xsPXRydWUnKX0+RW5kIFVzZXIgQWdyZWVtZW50LjwvdT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbn0iLCJpbXBvcnQgUGF0aWVudERldGFpbHNOZXcgZnJvbSAnLi9QYXRpZW50RGV0YWlsc05ldy5qcydcblxuZXhwb3J0IGRlZmF1bHQgUGF0aWVudERldGFpbHNOZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyB0b2dnbGUsIGRlYWxfcHJpY2UsIG1ycCwgcGF5YWJsZV9hbW91bnQgfSkgPT4ge1xuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbC1vdmVybGF5XCIgb25DbGljaz17dG9nZ2xlfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgY2FuY2VsLWFwcG9pbnRtZW50LWRpdiBwYXltZW50LXBvcHVwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1oZWFkZXIgdGV4dC1jZW50ZXIgYWN0aW9uLXNjcmVlbi1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgY2FuY2VsLWFwcG9pbnRtZW50LWhlYWRcIj5QYXltZW50IFN1bW1hcnk8L3A+XG4gICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50LWRpdlwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudFwiPkRvY3RvciBGZWVzPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudCBmdy01MDBcIj4mIzgzNzc7ICB7bXJwfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQtZGl2XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50XCI+RG9jcHJpbWUgRGlzY291bnQ8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPiYjODM3NzsgIHttcnAgLSBkZWFsX3ByaWNlfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQtZGl2XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPlN1YnRvdGFsPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudCBmdy01MDBcIj4mIzgzNzc7ICB7ZGVhbF9wcmljZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudC1kaXZcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQgZnctNTAwXCI+UHJvbW9jb2RlIERpc2NvdW50PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudCBmdy01MDBcIj4mIzgzNzc7ICAyMDA8L3A+XG4gICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudC1kaXYgbXJ0LTIwXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPkFtb3VudCBQYXlhYmxlPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudCBmdy01MDBcIj4mIzgzNzc7ICB7cGF5YWJsZV9hbW91bnR9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudC1idG4gdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZ3LTUwMFwiIG9uQ2xpY2s9e3RvZ2dsZX0+RG9uZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFByb2NlZHVyZVZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggamMtc3BhY2ViXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGVcIiBzdHlsZT17eyBmb250U2l6ZTogMTQgfX0+PHNwYW4+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9oYW5kLnN2Z1wifSBjbGFzc05hbWU9XCJ2aXNpdC10aW1lLWljb25cIiBzdHlsZT17eyB3aWR0aDogMjQsIG1hcmdpblJpZ2h0OiA4IH19IC8+PC9zcGFuPlNlcnZpY2VzIEluY2x1ZGVkPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4IHBiLWxpc3QgcHJvYy1wYWRkaW5nLWxpc3RcIj48c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LXByaWNlIHR4dC1vcm5hZ2VcIj7igrkge3BhcnNlSW50KHRoaXMucHJvcHMucHJpY2VEYXRhLmRlYWxfcHJpY2UpfTxzcGFuIGNsYXNzTmFtZT1cInRlc3QtbXJwXCI+4oK5IHtwYXJzZUludCh0aGlzLnByb3BzLnByaWNlRGF0YS5tcnApfTwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwIHRlc3QtbmFtZS1pdGVtXCI+RG9jdG9yIGNvbnN1bHRhdGlvbiA8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkUHJvY2VkdXJlcyA/XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucHJvcHMuc2VsZWN0ZWRQcm9jZWR1cmVzKS5tYXAoKHByb2NlZHVyZSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9jZWR1cmUuZmlsdGVyKHggPT4geC5pc19zZWxlY3RlZCkubWFwKChjYXRlZ29yeSwgaSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCBwYi1saXN0IHByb2MtcGFkZGluZy1saXN0XCI+PHNwYW4gY2xhc3NOYW1lPVwidGVzdC1wcmljZSB0eHQtb3JuYWdlXCI+4oK5IHtjYXRlZ29yeS5kZWFsX3ByaWNlfTxzcGFuIGNsYXNzTmFtZT1cInRlc3QtbXJwXCI+4oK5IHtjYXRlZ29yeS5tcnB9PC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJmdy01MDAgdGVzdC1uYW1lLWl0ZW1cIj57Y2F0ZWdvcnkucHJvY2VkdXJlX25hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUHJvY2VkdXJlVmlld1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGdldENhcnRJdGVtcywgYWRkVG9DYXJ0LCBnZXREb2N0b3JCeUlkLCBnZXRVc2VyUHJvZmlsZSwgY3JlYXRlT1BEQXBwb2ludG1lbnQsIHNlbGVjdE9wZFRpbWVTTG90LCBzZW5kQWdlbnRCb29raW5nVVJMLCByZW1vdmVDb3Vwb25zLCBhcHBseU9wZENvdXBvbnMsIHJlc2V0T3BkQ291cG9ucywgZ2V0Q291cG9ucywgYXBwbHlDb3Vwb25zLCBjcmVhdGVQcm9maWxlLCBzZW5kT1RQLCBzdWJtaXRPVFAsIGZldGNoVHJhbnNhY3Rpb25zLCBzZWxlY3Rfb3BkX3BheW1lbnRfdHlwZSwgZ2V0VGltZVNsb3RzLCBlZGl0VXNlclByb2ZpbGUsIHBhdGllbnREZXRhaWxzLCBpcGRDaGF0VmlldywgY2hlY2tJcGRDaGF0QWdlbnRTdGF0dXMsIHNhdmVBdmFpbE5vd0luc3VyYW5jZSwgc3VibWl0SVBERm9ybSwgYWdlbnRMb2dpbiwgY29kVG9QcmVwYWlkLCBjbGVhclZpcFNlbGVjdGVkUGxhbiwgZ2V0T3BkVmlwR29sZFBsYW5zLCBzZWxlY3RWaXBDbHViUGxhbiwgcHVzaE1lbWJlcnNEYXRhLCByZXRyaWV2ZU1lbWJlcnNEYXRhLCBzZWxlY3RQcm9maWxlLCBTZW5kSXBkQm9va2luZ0VtYWlsLCBOb25JcGRCb29raW5nTGVhZCwgc2F2ZUxlYWRQaG5OdW1iZXIgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuaW1wb3J0IFBhdGllbnREZXRhaWxzVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL29wZC9wYXRpZW50RGV0YWlscy9pbmRleC5qcydcblxuY2xhc3MgUGF0aWVudERldGFpbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdGltZVNsb3RzOiBudWxsLFxuICAgICAgICAgICAgZG9jdG9yX2xlYXZlczogW10sXG4gICAgICAgICAgICBEQVRBX0ZFVENIOiBmYWxzZSxcbiAgICAgICAgICAgIHVwY29taW5nX3Nsb3RzOiBudWxsLFxuICAgICAgICAgICAgaXNfaW50ZWdyYXRlZDogZmFsc2UsXG4gICAgICAgICAgICBjb2RFcnJvcjogbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gc3RhdGljIGxvYWREYXRhKHN0b3JlLCBtYXRjaCwgcXVlcnlEYXRhKSB7XG4gICAgLy8gICAgIGxldCBkb2N0b3JfaWQgPSBtYXRjaC5wYXJhbXMuaWQgfHwgcXVlcnlEYXRhLmRvY3Rvcl9pZFxuICAgIC8vICAgICBsZXQgaG9zcGl0YWxfaWQgPSBtYXRjaC5wYXJhbXMuY2xpbmljSWQgfHwgcXVlcnlEYXRhLmhvc3BpdGFsX2lkXG5cbiAgICAvLyAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGdldERvY3RvckJ5SWQoZG9jdG9yX2lkLCBob3NwaXRhbF9pZCkpXG4gICAgLy8gfVxuXG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcm91dGVyOiAoKSA9PiBudWxsXG4gICAgfVxuXG4gICAgZmV0Y2hEYXRhKHByb3BzLGNsaW5pY19pZCxjYWxsRG9jdG9yQnlJZCkge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZShwcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBkb2N0b3JfaWQgPSBwcm9wcy5zZWxlY3RlZERvY3RvciB8fCBwcm9wcy5tYXRjaC5wYXJhbXMuaWQgfHwgcGFyc2VkLmRvY3Rvcl9pZFxuICAgICAgICBsZXQgaG9zcGl0YWxfaWRcbiAgICAgICAgaWYoY2xpbmljX2lkKXtcbiAgICAgICAgICAgIGhvc3BpdGFsX2lkID0gY2xpbmljX2lkXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaG9zcGl0YWxfaWQgPSBwYXJzZWQuaG9zcGl0YWxfaWQgfHwgcHJvcHMubWF0Y2gucGFyYW1zLmNsaW5pY0lkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgICAgICAvL0NoZWNrIGlmIHVzZXIgaXMgbG9naW4sIGlmIGxvZ2dlZCBpbiB0aGVuIGZldGNoIHVzZXIgcmVsYXRlZCBkYXRhXG4gICAgICAgICAgICBwcm9wcy5nZXRVc2VyUHJvZmlsZSgpXG4gICAgICAgICAgICBwcm9wcy5mZXRjaFRyYW5zYWN0aW9ucygpXG4gICAgICAgICAgICBwcm9wcy5nZXRDYXJ0SXRlbXMoKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvY3Rvcl9pZCkge1xuICAgICAgICAgICAgaWYoY2FsbERvY3RvckJ5SWQpe1xuICAgICAgICAgICAgICAgIGxldCBleHRyYVBhcmFtcz17fVxuICAgICAgICAgICAgICAgIC8vSWYgYXBwb2ludG1lbnRfaWQgaXMgYXZhaWxibGUgaW4gdGhlIHVybCwgdGhlbiB3ZSBnZXQgZGF0YSBjb3JyZXNwb25kaW5nIHRvIHRoYXQgYXBwb2ludG1lbnRcbiAgICAgICAgICAgICAgICBpZihwYXJzZWQuYXBwb2ludG1lbnRfaWQpe1xuICAgICAgICAgICAgICAgICAgICBleHRyYVBhcmFtc1snYXBwb2ludG1lbnRfaWQnXSA9IHBhcnNlZC5hcHBvaW50bWVudF9pZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm9wcy5nZXREb2N0b3JCeUlkKGRvY3Rvcl9pZCwgaG9zcGl0YWxfaWQsIHByb3BzLmNvbW1vblByb2ZpbGVTZWxlY3RlZFByb2NlZHVyZXMsICcnLCBleHRyYVBhcmFtcywgKGVycm9yLCByZXNwb25zZSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYoZXJyb3IgJiYgZXJyb3IubWVzc2FnZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjb2RFcnJvcjogZXJyb3IubWVzc2FnZX0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKmlmIChwcm9wcy5zZWxlY3RlZFNsb3QgJiYgcHJvcHMuc2VsZWN0ZWRTbG90LmRhdGUgJiYgIXByb3BzLnNlbGVjdGVkU2xvdC5zdW1tYXJ5UGFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBEQVRBX0ZFVENIOiB0cnVlIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgcHJvcHMuZ2V0VGltZVNsb3RzKGRvY3Rvcl9pZCwgaG9zcGl0YWxfaWQsICh0aW1lU2xvdHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRpbWVTbG90czogdGltZVNsb3RzLnRpbWVzbG90cywgZG9jdG9yX2xlYXZlczogdGltZVNsb3RzLmRvY3Rvcl9sZWF2ZXMsIERBVEFfRkVUQ0g6IHRydWUsIHVwY29taW5nX3Nsb3RzOiB0aW1lU2xvdHMudXBjb21pbmdfc2xvdHMgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSovXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWREYXRlID0gbmV3IERhdGUoKVxuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5zZWxlY3RlZERhdGVGb3JtYXQpIHtcbiAgICAgICAgICAgICAgIHNlbGVjdGVkRGF0ZSA9IHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlRm9ybWF0XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZERhdGUgPSB0aGlzLmdldEZvcm1hdHRlZERhdGUoc2VsZWN0ZWREYXRlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGV4dHJhUGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkRGF0ZTogc2VsZWN0ZWREYXRlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9wcy5nZXRUaW1lU2xvdHMoZG9jdG9yX2lkLCBob3NwaXRhbF9pZCwgZXh0cmFQYXJhbXMsICh0aW1lU2xvdHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRpbWVTbG90czogdGltZVNsb3RzLnRpbWVzbG90cywgZG9jdG9yX2xlYXZlczogdGltZVNsb3RzLmRvY3Rvcl9sZWF2ZXMsIERBVEFfRkVUQ0g6IHRydWUsIHVwY29taW5nX3Nsb3RzOiB0aW1lU2xvdHMudXBjb21pbmdfc2xvdHMsIGlzX2ludGVncmF0ZWQ6IHRpbWVTbG90cy5pc19pbnRlZ3JhdGVkfHxmYWxzZSB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wcy5zZWxlY3RlZERvY3RvciAhPSB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yKSB7XG4gICAgICAgICAgICB0aGlzLmZldGNoRGF0YShwcm9wcyxudWxsLHRydWUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5mZXRjaERhdGEodGhpcy5wcm9wcyxudWxsLHRydWUpXG4gICAgfVxuXG4gICAgZ2V0Rm9ybWF0dGVkRGF0ZShkYXRlKXtcbiAgICAgICAgLy9mdW5jdGlvbiB3aGljaCByZXR1cm4gZGF0ZSBpbiB5eXl5LW1tLWRkIGZvcm1hdFxuICAgICAgICB2YXIgZGQgPSBkYXRlLmdldERhdGUoKTtcblxuICAgICAgICB2YXIgbW0gPSBkYXRlLmdldE1vbnRoKCkrMTsgXG4gICAgICAgIHZhciB5eXl5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBpZihkZDwxMCkgXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRkPScwJytkZDtcbiAgICAgICAgfSBcblxuICAgICAgICBpZihtbTwxMCkgXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1tPScwJyttbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0b2RheSA9IHl5eXkrJy0nK21tKyctJytkZFxuICAgICAgICByZXR1cm4gdG9kYXlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cbiAgICAgICAgbGV0IGRvY3Rvcl9pZCA9IHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3IgfHwgdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQgfHwgcGFyc2VkLmRvY3Rvcl9pZFxuICAgICAgICBsZXQgaG9zcGl0YWxfaWQgPSBwYXJzZWQuaG9zcGl0YWxfaWQgfHwgdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuY2xpbmljSWQgXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQYXRpZW50RGV0YWlsc1ZpZXcgey4uLnRoaXMucHJvcHN9IHsuLi50aGlzLnN0YXRlfSBzZWxlY3RlZERvY3Rvcj17ZG9jdG9yX2lkfSBzZWxlY3RlZENsaW5pYz17aG9zcGl0YWxfaWR9IGZldGNoRGF0YT17dGhpcy5mZXRjaERhdGEuYmluZCh0aGlzKX0vPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG5cbiAgICBsZXQgRE9DVE9SUyA9IHN0YXRlLkRPQ1RPUl9QUk9GSUxFU1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRQcm9maWxlLCBwcm9maWxlcywgdXNlcldhbGxldEJhbGFuY2UsIHVzZXJDYXNoYmFja0JhbGFuY2UsIGRlZmF1bHRQcm9maWxlLCBpcGRfY2hhdCwgaXNfaXBkX2Zvcm1fc3VibWl0dGVkLCBpc19hbnlfdXNlcl9idXlfZ29sZCwgY29tbW9uX3V0bV90YWdzLHVzZXJfbG9nZ2VkSW5fbnVtYmVyIH0gPSBzdGF0ZS5VU0VSXG4gICAgbGV0IHsgc2VsZWN0ZWRTbG90LCBkb2N0b3JDb3Vwb25zLCBkaXNDb3VudGVkT3BkUHJpY2UsIGNvdXBvbkF1dG9BcHBseSwgc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmUsIGNvbW1vblByb2ZpbGVTZWxlY3RlZFByb2NlZHVyZXMsIHBheW1lbnRfdHlwZSwgc2VsZWN0ZWREYXRlRm9ybWF0LCBUSU1FU0xPVF9EQVRBX0xPQURJTkcgfSA9IHN0YXRlLkRPQ1RPUl9TRUFSQ0hcbiAgICBjb25zdCB7IHNhdmVkX3BhdGllbnRfZGV0YWlscyB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX0xBQlNcbiAgICBjb25zdCB7IGNvbW1vbl9zZXR0aW5ncywgc2VsZWN0ZWRMb2NhdGlvbiB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX09QRFxuICAgIGNvbnN0IHsgaXBkUG9wdXBEYXRhIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfSVBEXG4gICAgY29uc3QgeyBvZHBHb2xkUHJlZGljdGVkUHJpY2UsIHNlbGVjdGVkX3ZpcF9wbGFuLHNob3dfZG9jdG9yX3BheW1lbnRfbW9kZSB9ID0gIHN0YXRlLlZJUENMVUJcbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RlZFByb2ZpbGUsIHByb2ZpbGVzLCBET0NUT1JTLCBzZWxlY3RlZFNsb3QsIGRvY3RvckNvdXBvbnMsIGRpc0NvdW50ZWRPcGRQcmljZSwgY291cG9uQXV0b0FwcGx5LCBzZWxlY3RlZERvY3RvclByb2NlZHVyZSwgY29tbW9uUHJvZmlsZVNlbGVjdGVkUHJvY2VkdXJlcywgdXNlcldhbGxldEJhbGFuY2UsIHVzZXJDYXNoYmFja0JhbGFuY2UsIHBheW1lbnRfdHlwZSwgc2F2ZWRfcGF0aWVudF9kZXRhaWxzLCBkZWZhdWx0UHJvZmlsZSwgaXBkX2NoYXQsIGNvbW1vbl9zZXR0aW5ncywgc2VsZWN0ZWREYXRlRm9ybWF0LCBUSU1FU0xPVF9EQVRBX0xPQURJTkcsIGlzX2lwZF9mb3JtX3N1Ym1pdHRlZCwgaXBkUG9wdXBEYXRhLCBzZWxlY3RlZExvY2F0aW9uLCBvZHBHb2xkUHJlZGljdGVkUHJpY2UsIHNlbGVjdGVkX3ZpcF9wbGFuLCBpc19hbnlfdXNlcl9idXlfZ29sZCwgY29tbW9uX3V0bV90YWdzLCBzaG93X2RvY3Rvcl9wYXltZW50X21vZGUsIHVzZXJfbG9nZ2VkSW5fbnVtYmVyXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RPcGRUaW1lU0xvdDogKHNsb3QsIHJlc2NoZWR1bGUsIGFwcG9pbnRtZW50SWQsIGV4dHJhRGF0ZVBhcmFtcykgPT4gZGlzcGF0Y2goc2VsZWN0T3BkVGltZVNMb3Qoc2xvdCwgcmVzY2hlZHVsZSwgYXBwb2ludG1lbnRJZCwgZXh0cmFEYXRlUGFyYW1zKSksXG4gICAgICAgIGdldFVzZXJQcm9maWxlOiAoKSA9PiBkaXNwYXRjaChnZXRVc2VyUHJvZmlsZSgpKSxcbiAgICAgICAgZ2V0RG9jdG9yQnlJZDogKGRvY3RvcklkLCBob3NwaXRhbElkLCBwcm9jZWR1cmVfaWRzLGNhdGVnb3J5X2lkcywgZXh0cmFQYXJhbXMsIGNiKSA9PiBkaXNwYXRjaChnZXREb2N0b3JCeUlkKGRvY3RvcklkLCBob3NwaXRhbElkLCBwcm9jZWR1cmVfaWRzLCBjYXRlZ29yeV9pZHMsIGV4dHJhUGFyYW1zLCBjYikpLFxuICAgICAgICBjcmVhdGVPUERBcHBvaW50bWVudDogKHBvc3REYXRhLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2goY3JlYXRlT1BEQXBwb2ludG1lbnQocG9zdERhdGEsIGNhbGxiYWNrKSksXG4gICAgICAgIHNlbmRBZ2VudEJvb2tpbmdVUkw6IChvcmRlcklkLCB0eXBlLCBwdXJjaGFzZV90eXBlLHF1ZXJ5X2RhdGEsIGV4dHJhUGFyYW1zLCBjYikgPT4gZGlzcGF0Y2goc2VuZEFnZW50Qm9va2luZ1VSTChvcmRlcklkLCB0eXBlLHB1cmNoYXNlX3R5cGUscXVlcnlfZGF0YSwgZXh0cmFQYXJhbXMsIGNiKSksXG4gICAgICAgIHJlbW92ZUNvdXBvbnM6IChob3NwaXRhbElkLCBjb3Vwb25JZCkgPT4gZGlzcGF0Y2gocmVtb3ZlQ291cG9ucyhob3NwaXRhbElkLCBjb3Vwb25JZCkpLFxuICAgICAgICBhcHBseU9wZENvdXBvbnM6IChwcm9kdWN0SWQsIGNvdXBvbkNvZGUsIGNvdXBvbklkLCBkb2N0b3JfaWQsIGRlYWxQcmljZSwgaG9zcGl0YWxJZCwgcHJvZmlsZV9pZCwgcHJvY2VkdXJlc19pZHMsIGNhcnRfaXRlbSwgY2FsbGJhY2spID0+IGRpc3BhdGNoKGFwcGx5T3BkQ291cG9ucyhwcm9kdWN0SWQsIGNvdXBvbkNvZGUsIGNvdXBvbklkLCBkb2N0b3JfaWQsIGRlYWxQcmljZSwgaG9zcGl0YWxJZCwgcHJvZmlsZV9pZCwgcHJvY2VkdXJlc19pZHMsIGNhcnRfaXRlbSwgY2FsbGJhY2spKSxcbiAgICAgICAgYXBwbHlDb3Vwb25zOiAocHJvZHVjdElkLCBjb3Vwb25EYXRhLCBjb3Vwb25JZCwgaG9zcGl0YWxJZCxjYWxsYmFjaykgPT4gZGlzcGF0Y2goYXBwbHlDb3Vwb25zKHByb2R1Y3RJZCwgY291cG9uRGF0YSwgY291cG9uSWQsIGhvc3BpdGFsSWQsY2FsbGJhY2spKSxcbiAgICAgICAgcmVzZXRPcGRDb3Vwb25zOiAoKSA9PiBkaXNwYXRjaChyZXNldE9wZENvdXBvbnMoKSksXG4gICAgICAgIGdldENvdXBvbnM6IChkYXRhKSA9PiBkaXNwYXRjaChnZXRDb3Vwb25zKGRhdGEpKSxcbiAgICAgICAgY3JlYXRlUHJvZmlsZTogKHBvc3REYXRhLCBjYikgPT4gZGlzcGF0Y2goY3JlYXRlUHJvZmlsZShwb3N0RGF0YSwgY2IpKSxcbiAgICAgICAgc2VuZE9UUDogKG51bWJlcix2aWFTbXMsdmlhV2hhdHNhcHAsbWVzc2FnZV90eXBlLCBjYikgPT4gZGlzcGF0Y2goc2VuZE9UUChudW1iZXIsdmlhU21zLHZpYVdoYXRzYXBwLG1lc3NhZ2VfdHlwZSwgY2IpKSxcbiAgICAgICAgc3VibWl0T1RQOiAobnVtYmVyLCBvdHAsZXh0cmFQYXJhbXNEYXRhLCAgY2IpID0+IGRpc3BhdGNoKHN1Ym1pdE9UUChudW1iZXIsIG90cCxleHRyYVBhcmFtc0RhdGEsIGNiKSksXG4gICAgICAgIGZldGNoVHJhbnNhY3Rpb25zOiAoKSA9PiBkaXNwYXRjaChmZXRjaFRyYW5zYWN0aW9ucygpKSxcbiAgICAgICAgYWRkVG9DYXJ0OiAocHJvZHVjdF9pZCwgZGF0YSkgPT4gZGlzcGF0Y2goYWRkVG9DYXJ0KHByb2R1Y3RfaWQsIGRhdGEpKSxcbiAgICAgICAgZ2V0Q2FydEl0ZW1zOiAoKSA9PiBkaXNwYXRjaChnZXRDYXJ0SXRlbXMoKSksXG4gICAgICAgIHNlbGVjdF9vcGRfcGF5bWVudF90eXBlOiAodHlwZSkgPT4gZGlzcGF0Y2goc2VsZWN0X29wZF9wYXltZW50X3R5cGUodHlwZSkpLFxuICAgICAgICBnZXRUaW1lU2xvdHM6IChkb2N0b3JJZCwgY2xpbmljSWQsIGV4dHJhUGFyYW1zLCAgY2FsbGJhY2spID0+IGRpc3BhdGNoKGdldFRpbWVTbG90cyhkb2N0b3JJZCwgY2xpbmljSWQsIGV4dHJhUGFyYW1zLCBjYWxsYmFjaykpLFxuICAgICAgICBlZGl0VXNlclByb2ZpbGU6IChwcm9maWxlRGF0YSwgcHJvZmlsZUlkLCBjYikgPT4gZGlzcGF0Y2goZWRpdFVzZXJQcm9maWxlKHByb2ZpbGVEYXRhLCBwcm9maWxlSWQsIGNiKSksXG4gICAgICAgIHBhdGllbnREZXRhaWxzOiAoY3JpdGVyaWEpID0+IGRpc3BhdGNoKHBhdGllbnREZXRhaWxzKGNyaXRlcmlhKSksXG4gICAgICAgIGlwZENoYXRWaWV3OiAoZGF0YSkgPT4gZGlzcGF0Y2goaXBkQ2hhdFZpZXcoZGF0YSkpLFxuICAgICAgICBjaGVja0lwZENoYXRBZ2VudFN0YXR1czogKGNiKSA9PiBkaXNwYXRjaChjaGVja0lwZENoYXRBZ2VudFN0YXR1cyhjYikpLFxuICAgICAgICBzYXZlQXZhaWxOb3dJbnN1cmFuY2U6KGRhdGEpID0+IGRpc3BhdGNoKHNhdmVBdmFpbE5vd0luc3VyYW5jZShkYXRhKSksXG4gICAgICAgIHN1Ym1pdElQREZvcm06IChmb3JtRGF0YSwgc2VsZWN0ZWRMb2NhdGlvbiwgY2IpID0+IGRpc3BhdGNoKHN1Ym1pdElQREZvcm0oZm9ybURhdGEsIHNlbGVjdGVkTG9jYXRpb24sIGNiKSksXG4gICAgICAgIGFnZW50TG9naW46ICh0b2tlbiwgY2IpID0+IGRpc3BhdGNoKGFnZW50TG9naW4odG9rZW4sIGNiKSksXG4gICAgICAgIGNvZFRvUHJlcGFpZDogKHBvc3REYXRhLCBjYikgPT4gZGlzcGF0Y2goY29kVG9QcmVwYWlkKHBvc3REYXRhLCBjYikpLFxuICAgICAgICBjbGVhclZpcFNlbGVjdGVkUGxhbjooKSA9PmRpc3BhdGNoKGNsZWFyVmlwU2VsZWN0ZWRQbGFuKCkpLFxuICAgICAgICBnZXRPcGRWaXBHb2xkUGxhbnM6IChleHRyYURhdGFQYXJhbXMsIGNiKT0+IGRpc3BhdGNoKGdldE9wZFZpcEdvbGRQbGFucyhleHRyYURhdGFQYXJhbXMsIGNiKSksXG4gICAgICAgIHNlbGVjdFZpcENsdWJQbGFuOiAodHlwZSwgc2VsZWN0ZWRQbGFuLCBjYikgPT4gZGlzcGF0Y2goc2VsZWN0VmlwQ2x1YlBsYW4odHlwZSwgc2VsZWN0ZWRQbGFuLCBjYikpLFxuICAgICAgICBwdXNoTWVtYmVyc0RhdGE6KGNyaXRlcmlhLCBjYWxsYmFjaykgPT5kaXNwYXRjaChwdXNoTWVtYmVyc0RhdGEoY3JpdGVyaWEsIGNhbGxiYWNrKSksXG4gICAgICAgIHJldHJpZXZlTWVtYmVyc0RhdGE6KHR5cGUsZXh0cmFQYXJhbXMsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChyZXRyaWV2ZU1lbWJlcnNEYXRhKHR5cGUsIGV4dHJhUGFyYW1zLCBjYWxsYmFjaykpLFxuICAgICAgICBzZWxlY3RQcm9maWxlOiAoaWQpID0+IGRpc3BhdGNoKHNlbGVjdFByb2ZpbGUoaWQpKSxcbiAgICAgICAgU2VuZElwZEJvb2tpbmdFbWFpbDooZGF0YSxjYikgPT5kaXNwYXRjaChTZW5kSXBkQm9va2luZ0VtYWlsKGRhdGEsIGNiKSksXG4gICAgICAgIE5vbklwZEJvb2tpbmdMZWFkOihkYXRhLGNiKSA9PmRpc3BhdGNoKE5vbklwZEJvb2tpbmdMZWFkKGRhdGEsIGNiKSksXG4gICAgICAgIHNhdmVMZWFkUGhuTnVtYmVyOihudW1iZXIpID0+IGRpc3BhdGNoKHNhdmVMZWFkUGhuTnVtYmVyKG51bWJlcikpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFBhdGllbnREZXRhaWxzKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=