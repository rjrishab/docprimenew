exports.ids = [27];
exports.modules = {

/***/ "./dev/js/components/diagnosis/bookingSummary/BookingSummaryViewNew.js":
/*!*****************************************************************************!*\
  !*** ./dev/js/components/diagnosis/bookingSummary/BookingSummaryViewNew.js ***!
  \*****************************************************************************/
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

var _Loader = __webpack_require__(/*! ../../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _VisitTimeNew = __webpack_require__(/*! ./VisitTimeNew */ "./dev/js/components/diagnosis/bookingSummary/VisitTimeNew.js");

var _VisitTimeNew2 = _interopRequireDefault(_VisitTimeNew);

var _pickupAddress = __webpack_require__(/*! ./pickupAddress */ "./dev/js/components/diagnosis/bookingSummary/pickupAddress.js");

var _pickupAddress2 = _interopRequireDefault(_pickupAddress);

var _choosePatientNew = __webpack_require__(/*! ../../opd/patientDetails/choosePatientNew */ "./dev/js/components/opd/patientDetails/choosePatientNew.js");

var _choosePatientNew2 = _interopRequireDefault(_choosePatientNew);

var _initialsPicture = __webpack_require__(/*! ../../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _cancellation = __webpack_require__(/*! ./cancellation.js */ "./dev/js/components/diagnosis/bookingSummary/cancellation.js");

var _cancellation2 = _interopRequireDefault(_cancellation);

var _paymentSummary = __webpack_require__(/*! ./paymentSummary.js */ "./dev/js/components/diagnosis/bookingSummary/paymentSummary.js");

var _paymentSummary2 = _interopRequireDefault(_paymentSummary);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _bookingErrorPopUp = __webpack_require__(/*! ../../opd/patientDetails/bookingErrorPopUp.js */ "./dev/js/components/opd/patientDetails/bookingErrorPopUp.js");

var _bookingErrorPopUp2 = _interopRequireDefault(_bookingErrorPopUp);

var _PincodePopup = __webpack_require__(/*! ./PincodePopup.js */ "./dev/js/components/diagnosis/bookingSummary/PincodePopup.js");

var _PincodePopup2 = _interopRequireDefault(_PincodePopup);

var _WhatsAppOptinView = __webpack_require__(/*! ../../commons/WhatsAppOptin/WhatsAppOptinView.js */ "./dev/js/components/commons/WhatsAppOptin/WhatsAppOptinView.js");

var _WhatsAppOptinView2 = _interopRequireDefault(_WhatsAppOptinView);

var _PincodeErrorPopup = __webpack_require__(/*! ./PincodeErrorPopup.js */ "./dev/js/components/diagnosis/bookingSummary/PincodeErrorPopup.js");

var _PincodeErrorPopup2 = _interopRequireDefault(_PincodeErrorPopup);

var _BookingConfirmationPopup = __webpack_require__(/*! ./BookingConfirmationPopup.js */ "./dev/js/components/diagnosis/bookingSummary/BookingConfirmationPopup.js");

var _BookingConfirmationPopup2 = _interopRequireDefault(_BookingConfirmationPopup);

var _uploadPrescription = __webpack_require__(/*! ./uploadPrescription.js */ "./dev/js/components/diagnosis/bookingSummary/uploadPrescription.js");

var _uploadPrescription2 = _interopRequireDefault(_uploadPrescription);

var _paymentForm = __webpack_require__(/*! ../../commons/paymentForm */ "./dev/js/components/commons/paymentForm/index.js");

var _paymentForm2 = _interopRequireDefault(_paymentForm);

var _lensfitPopup = __webpack_require__(/*! ./lensfitPopup.js */ "./dev/js/components/diagnosis/bookingSummary/lensfitPopup.js");

var _lensfitPopup2 = _interopRequireDefault(_lensfitPopup);

var _staticDisclaimer = __webpack_require__(/*! ../../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

var _VipGoldPackage = __webpack_require__(/*! ../../opd/patientDetails/VipGoldPackage.js */ "./dev/js/components/opd/patientDetails/VipGoldPackage.js");

var _VipGoldPackage2 = _interopRequireDefault(_VipGoldPackage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


class BookingSummaryViewNew extends _react2.default.Component {
    constructor(props) {
        super(props);

        this.closeErrorPopup = () => {
            this.setState({ error: '' });
        };

        this.toggleGoldPlans = plan => {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'ToggleLabGoldPlanClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'toggle-lab-gold-plan-clicked', 'plan': plan.id
            };

            _gtm2.default.sendEvent({ data: data });
            this.props.selectVipClubPlan('plan', plan); // toggle/select vip plan
            this.toggleGoldPricePopup();
        };

        this.toggleGoldPricePopup = (value = false) => {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'ChangePlanLabClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'change-plan-lab-clicked'
            };

            _gtm2.default.sendEvent({ data: data });
            this.setState({ showGoldPriceList: value });
        };

        this.goToGoldPage = () => {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'GoToGoldPlanClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'go-to-gold-plan-clicked'
            };

            _gtm2.default.sendEvent({ data: data });
            this.props.history.push('/vip-gold-details?is_gold=true&source=mobile-lab-summary-gold-clicked&lead_source=Docprime&booking_page=lab');
        };

        this.getDataAfterLogin = () => {
            this.props.fetchData(this.props);
            if (this.props.labGoldPredictedPrice && this.props.labGoldPredictedPrice.length) {
                let selectedPackage = this.props.labGoldPredictedPrice.filter(x => x.id == this.state.selectedVipGoldPackageId);
                if (selectedPackage && selectedPackage.length == 0) {
                    selectedPackage = this.props.labGoldPredictedPrice.filter(x => x.is_selected);
                }
                if (selectedPackage && selectedPackage.length) {
                    this.props.selectVipClubPlan('plan', selectedPackage[0]);
                }
            }
        };

        const parsed = queryString.parse(this.props.location.search);
        let lab_id = this.props.selectedLab;

        this.state = {
            selectedLab: lab_id,
            paymentData: null,
            loading: false,
            error: "",
            openCancellation: false,
            openPaymentSummary: false,
            // order_id: !!parsed.order_id,
            order_id: false,
            showTimeError: false,
            showAddressError: false,
            couponCode: '',
            couponId: '',
            scrollPosition: '',
            profileDataFilled: true,
            is_cashback: false,
            use_wallet: true,
            showPincodePopup: false,
            cart_item: parsed.cart_item,
            pincode: this.props.pincode,
            whatsapp_optin: true,
            pincodeMismatchError: false,
            showConfirmationPopup: 'close',
            coupon_loading: false,
            seoFriendly: this.props.match.url.includes('-lpp'),
            isEmailNotValid: false,
            is_payment_coupon_applied: false,
            is_spo_appointment: false,
            pay_btn_loading: true,
            isDobNotValid: false,
            show_lensfit_popup: false,
            lensfit_coupons: null,
            lensfit_decline: false,
            isLensfitSpecific: parsed.isLensfitSpecific || false,
            showGoldPriceList: false,
            selectedTestIds: [],
            selectedVipGoldPackageId: this.props.selected_vip_plan && Object.keys(this.props.selected_vip_plan).length ? this.props.selected_vip_plan.id : '',
            paymentBtnClicked: false,
            enableDropOfflead: true,
            disable_page: true,
            is_lead_enabled: true
        };
    }

    toggle(which) {
        this.setState({ [which]: !this.state[which] });
    }

    toggleWalletUse(e) {
        if (this.state.is_payment_coupon_applied) {
            this.setState({ use_wallet: false });
        } else {
            this.setState({ use_wallet: e.target.checked });
        }
    }

    componentDidMount() {
        /*
                if (!STORAGE.checkAuth()) {
                    return
                }*/

        if (window) {
            window.scrollTo(0, 0);
        }
        const parsed = queryString.parse(this.props.location.search);
        if (this.props.location.search.includes("error_code")) {
            setTimeout(() => {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Could not complete payment, Try again!" });
            }, 500);
            this.props.history.replace(this.props.location.pathname);
        }
        this.getVipGoldPriceList(this.props);
        if (this.props.selected_vip_plan && this.props.selected_vip_plan.id && this.props.selected_vip_plan.id != this.state.selectedVipGoldPackageId) {
            this.setState({ selectedVipGoldPackageId: this.props.selected_vip_plan.id });
        }

        let patient = null;
        if (this.props.selectedProfile && this.props.profiles && this.props.profiles[this.props.selectedProfile] && !this.props.profiles[this.props.selectedProfile].isDummyUser) {
            patient = this.props.profiles[this.props.selectedProfile];
            this.setState({ profileDataFilled: true });
        }
        /*if (document.getElementById('time-patient-details-widget')) {
            var elementTop = document.getElementById('time-patient-details-widget').getBoundingClientRect().top;
            var elementHeight = document.getElementById('time-patient-details-widget').clientHeight;
            var scrollPosition = elementTop - elementHeight;
            this.setState({ scrollPosition: scrollPosition });
        }*/

        //Add UTM tags for building url
        try {
            if (parsed.utm_source && parsed.utm_source == 'OfflineAffiliate') {
                let sessionId = Math.floor(Math.random() * 103) * 21 + 1050;
                if (sessionStorage) {
                    sessionStorage.setItem('sessionIdVal', sessionId);
                }
                let spo_tags = {
                    utm_tags: {
                        utm_source: parsed.utm_source || '',
                        utm_term: parsed.utm_term || '',
                        utm_medium: parsed.utm_medium || '',
                        utm_campaign: parsed.utm_campaign || ''
                    },
                    time: new Date().getTime(),
                    currentSessionId: sessionId
                };
                this.setState({ is_spo_appointment: true });
                this.props.setCommonUtmTags('spo', spo_tags);
            }
        } catch (e) {}

        //Clear Utm tags for SPO, after 15 minutes
        let currentTime = new Date().getTime();
        if (sessionStorage && sessionStorage.getItem('sessionIdVal') && this.props.common_utm_tags && this.props.common_utm_tags.length && this.props.common_utm_tags.filter(x => x.type == 'spo').length) {

            let spo_tags = this.props.common_utm_tags.filter(x => x.type == 'spo')[0];
            let sessionVal = parseInt(sessionStorage.getItem('sessionIdVal'));
            if (spo_tags.time && sessionVal == parseInt(spo_tags.currentSessionId)) {
                let time_offset = (currentTime - spo_tags.time) / 60000;
                //Clear SPO utm tags after 15minutes
                //900
                if (time_offset > 180) {
                    this.props.unSetCommonUtmTags('spo');
                } else {
                    this.setState({ is_spo_appointment: true });
                }
            }
        }
        if (this.state.isLensfitSpecific) {
            setTimeout(() => {
                if (document.getElementById('confirm_booking')) {
                    document.getElementById('confirm_booking').click();
                }
            }, 3000);
        }
    }

    getVipGoldPriceList(props) {
        let parsed = queryString.parse(this.props.location.search);
        let test_ids = [];
        if (props.LABS[props.selectedLab] && props.LABS[props.selectedLab].tests) {
            test_ids = props.LABS[props.selectedLab].tests.map(x => x.test_id);
        }
        this.setState({ selectedTestIds: test_ids });
        let extraParams = {
            "lab": props.selectedLab,
            "lab_tests": test_ids,
            "gold_vip_plan": []
        };
        if (this.props.selected_vip_plan && this.props.selected_vip_plan.id) {
            extraParams['already_selected_plan'] = this.props.selected_vip_plan.id;
        }
        if (parsed && parsed.dummy_id && this.props.agent_selected_plan_id) {
            extraParams['already_selected_plan'] = this.props.agent_selected_plan_id;
        }
        extraParams['payment_type'] = this.props.payment_type;
        this.props.getLabVipGoldPlans(extraParams); // to get gold/vip plans specific to particular lab
    }

    componentWillReceiveProps(nextProps) {
        if (_storage2.default.checkAuth()) {
            this.setState({ disable_page: false });
        }
        let isPickupStatusSame = false;
        if (nextProps.selectedAppointmentType.r_pickup == this.props.selectedAppointmentType.r_pickup && nextProps.selectedAppointmentType.p_pickup == this.props.selectedAppointmentType.p_pickup) {
            isPickupStatusSame = true;
        }
        //To update Gold Plans on changing props
        if (nextProps && nextProps.selected_vip_plan && nextProps.selected_vip_plan.id && nextProps.selected_vip_plan.id != this.state.selectedVipGoldPackageId) {
            this.setState({ selectedVipGoldPackageId: nextProps.selected_vip_plan.id });
        }
        /*if (this.state.enableDropOfflead && STORAGE.checkAuth()) {
            this.nonIpdLeads()
        }*/
        if (nextProps.LABS[this.props.selectedLab] && nextProps.LABS[this.props.selectedLab].tests && nextProps.LABS[this.props.selectedLab].tests.length == 0) {
            this.props.resetLabCoupons();
            this.setState({ 'pay_btn_loading': false });
            return;
        }
        if (nextProps.LABS[this.props.selectedLab] && nextProps.LABS[this.props.selectedLab].tests && nextProps.LABS[this.props.selectedLab].tests.length) {
            // bases cases
            //To Check if any new Test Added

            let newTestsAdded = false;
            nextProps.LABS[nextProps.selectedLab].tests.map(test => {

                if (this.state.selectedTestIds.indexOf(test.test_id) == -1) {
                    newTestsAdded = true;
                }
            });

            if (newTestsAdded || this.state.selectedTestIds.length != nextProps.LABS[this.props.selectedLab].tests.length) {
                this.getVipGoldPriceList(nextProps);
            }

            //If after selecting time, user add more tests then for pathology test we have to force add the pathology timings 
            if (nextProps.selectedSlot && nextProps.selectedSlot.selectedTestsTimeSlot && Object.keys(nextProps.selectedSlot.selectedTestsTimeSlot).length && nextProps.LABS[this.props.selectedLab].tests.length) {

                let commonTestId = nextProps.selectedSlot['pathology'] ? nextProps.selectedSlot['pathology'].test_id : nextProps.selectedSlot['all'] ? nextProps.selectedSlot['all'].test_id : null;

                let newTests = [];
                nextProps.LABS[this.props.selectedLab].tests.map(test => {

                    if (test.is_pathology) {
                        if (nextProps.selectedSlot.selectedTestsTimeSlot[test.test_id]) {} else if (test.is_pathology) {
                            newTests.push(test);
                        }
                    }
                });

                if (commonTestId && newTests.length) {

                    let finalSelectedSlot = _extends({}, nextProps.selectedSlot);
                    let testsObj = _extends({}, finalSelectedSlot.selectedTestsTimeSlot);
                    if (newTests.length) {
                        newTests.map(x => {
                            testsObj[x.test.id] = _extends({}, testsObj[commonTestId], { test_id: x.test.id, test_name: x.test.name });
                        });
                        finalSelectedSlot['selectedTestsTimeSlot'] = testsObj;
                        this.props.selectLabTimeSLot(finalSelectedSlot);
                    }
                }
            }

            // remove corporate coupon if tests are not valid
            if (nextProps.corporateCoupon) {
                let corporate = true;
                nextProps.LABS[this.props.selectedLab].tests.map((twp, i) => {
                    if (!twp.hide_price) {
                        corporate = false;
                    }
                });

                if (!corporate) {
                    this.props.resetLabCoupons();
                    this.setState({ couponCode: "", couponId: '', is_cashback: false, use_wallet: true, is_payment_coupon_applied: false, 'pay_btn_loading': false });
                    if (nextProps.labCoupons[this.props.selectedLab]) {
                        this.props.removeLabCoupons(this.props.selectedLab, nextProps.corporateCoupon.coupon_id);
                    }
                    this.props.setCorporateCoupon(null);
                    return;
                }
            }

            // if corporateCoupon is set, apply that, leave rest
            if (nextProps.corporateCoupon) {
                if (this.props.LABS[this.props.selectedLab] != nextProps.LABS[this.props.selectedLab] || !isPickupStatusSame) {
                    let { finalPrice, test_ids } = this.getLabPriceData(nextProps);

                    let labCoupon = nextProps.corporateCoupon;
                    this.setState({ is_cashback: labCoupon.is_cashback, couponCode: labCoupon.code, couponId: labCoupon.coupon_id || '', pay_btn_loading: true });
                    this.props.applyCoupons('2', labCoupon, labCoupon.coupon_id, this.props.selectedLab, success => {});
                    let { total_amount_payable_without_coupon } = this.getSelectedUserData(this.props);
                    if (total_amount_payable_without_coupon != null) {
                        finalPrice = total_amount_payable_without_coupon;
                    }
                    this.props.applyLabCoupons('2', labCoupon.code, labCoupon.coupon_id, this.props.selectedLab, finalPrice, test_ids, nextProps.selectedProfile, this.state.cart_item, (err, data) => {
                        this.setState({ 'pay_btn_loading': false });
                    });
                    if (labCoupon.is_payment_specific) {
                        this.setState({ use_wallet: false, is_payment_coupon_applied: true });
                    }
                }
                return;
            }

            // if coupon already applied just set discount price.
            if (nextProps.labCoupons[this.props.selectedLab] && nextProps.labCoupons[this.props.selectedLab].length) {
                if (this.props.LABS[this.props.selectedLab] != nextProps.LABS[this.props.selectedLab] || !isPickupStatusSame || nextProps.selectedProfile && this.props.selectedProfile != nextProps.selectedProfile) {
                    let { finalPrice, test_ids } = this.getLabPriceData(nextProps);

                    let labCoupons = nextProps.labCoupons[this.props.selectedLab];
                    this.setState({ 'pay_btn_loading': true });
                    let { total_amount_payable_without_coupon } = this.getSelectedUserData(this.props);
                    if (total_amount_payable_without_coupon != null) {
                        finalPrice = total_amount_payable_without_coupon;
                    }
                    this.props.applyLabCoupons('2', labCoupons[0].code, labCoupons[0].coupon_id, this.props.selectedLab, finalPrice, test_ids, nextProps.selectedProfile, this.state.cart_item, (err, data) => {
                        if (!err) {
                            this.setState({ is_cashback: labCoupons[0].is_cashback, couponCode: labCoupons[0].code, couponId: labCoupons[0].coupon_id || '' });
                            if (labCoupons[0].is_payment_specific) {
                                this.setState({ use_wallet: false, is_payment_coupon_applied: true });
                            }
                        } else {
                            this.setState({ coupon_loading: true });
                            this.getAndApplyBestCoupons(nextProps, false);
                        }
                        this.setState({ 'pay_btn_loading': false });
                    });
                }
                return;
            }

            // if no coupon is applied
            if (!nextProps.labCoupons[this.props.selectedLab]) {
                this.getAndApplyBestCoupons(nextProps, false);
                this.setState({ 'pay_btn_loading': false });
            }

            if (nextProps.labCoupons[this.props.selectedLab] && nextProps.labCoupons[this.props.selectedLab].length == 0) {
                this.setState({ 'pay_btn_loading': false });
                this.props.resetLabCoupons();
            }
        }
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

    getAndApplyBestCoupons(nextProps, isLensfit) {

        // if (nextProps.couponAutoApply) {
        let { finalPrice, test_ids } = this.getLabPriceData(nextProps);
        let validCoupon;
        this.props.getCoupons({
            productId: 2, deal_price: finalPrice, lab_id: this.props.selectedLab, test_ids: test_ids, profile_id: nextProps.selectedProfile, cart_item: this.state.cart_item,
            cb: coupons => {
                if (coupons) {
                    if (isLensfit) {
                        let lensFitProps = _extends({}, nextProps);
                        delete lensFitProps.finalPrice;
                        delete lensFitProps.test_ids;
                        delete lensFitProps.LABS;
                        validCoupon = lensFitProps;
                    } else {
                        validCoupon = this.getValidCoupon(coupons);
                    }
                    if (validCoupon) {
                        this.setState({ 'pay_btn_loading': true });
                        this.props.applyCoupons('2', validCoupon, validCoupon.coupon_id, this.props.selectedLab, success => {
                            this.setState({ 'pay_btn_loading': false });
                        });
                        let { total_amount_payable_without_coupon } = this.getSelectedUserData(nextProps);
                        if (total_amount_payable_without_coupon != null) {
                            finalPrice = total_amount_payable_without_coupon;
                        }
                        this.props.applyLabCoupons('2', validCoupon.code, validCoupon.coupon_id, this.props.selectedLab, finalPrice, test_ids, this.props.selectedProfile, this.state.cart_item, (err, data) => {
                            this.setState({ 'pay_btn_loading': false });
                        });
                        if (isLensfit) {
                            this.setState({ show_lensfit_popup: false });
                        }
                        this.setState({ is_cashback: validCoupon.is_cashback, couponCode: validCoupon.code, couponId: validCoupon.coupon_id || '' });
                        if (validCoupon.is_payment_specific) {
                            this.setState({ use_wallet: false, is_payment_coupon_applied: true });
                        }
                    } else {
                        if (isLensfit) {
                            this.setState({ show_lensfit_popup: false });
                        }
                        this.props.resetLabCoupons();
                        this.setState({ couponCode: "", couponId: '', is_cashback: false, use_wallet: true, is_payment_coupon_applied: false, 'pay_btn_loading': false });
                    }
                } else {
                    if (isLensfit) {
                        this.setState({ show_lensfit_popup: false });
                    }
                    this.props.resetLabCoupons();
                    this.setState({ couponCode: "", couponId: '', is_cashback: false, use_wallet: true, is_payment_coupon_applied: false, 'pay_btn_loading': false });
                }
                this.setState({ coupon_loading: false });
            }
        });
        // } else {
        //     this.setState({ coupon_loading: false })
        // }
    }

    getLabPriceData(nextProps) {
        let is_home_collection_enabled = true;
        let finalPrice = 0;
        let test_ids = [];

        nextProps.LABS[this.props.selectedLab].tests.map((twp, i) => {
            test_ids.push(twp.test_id);
            let price = null;
            if (twp.vip && Object.keys(twp.vip).length && twp.vip.is_vip_member && twp.vip.covered_under_vip) {
                price += twp.vip.vip_amount + twp.vip.vip_convenience_amount;
            } else {
                price += twp.deal_price;
            }
            if (!twp.is_home_collection_enabled) {
                is_home_collection_enabled = false;
            }
            finalPrice += parseFloat(price);
        });

        if (is_home_collection_enabled && (nextProps.selectedAppointmentType.r_pickup == 'home' || nextProps.selectedAppointmentType.p_pickup == 'home')) {
            finalPrice = finalPrice + (nextProps.LABS[this.props.selectedLab].lab.home_pickup_charges || 0);
        }

        return { finalPrice, test_ids };
    }

    openTests() {
        if (this.state.seoFriendly) {
            let url = `${window.location.pathname}?lab_id=${this.props.selectedLab}&action_page=tests`;
            this.props.history.push(url);
        } else {
            this.props.history.push(`/lab/${this.state.selectedLab}/tests`);
        }
    }

    handlePickupType(type) {
        //always clear selected time at lab profile
        let slot = { time: {} };
        this.props.selectLabTimeSLot(slot, false);
        this.props.selectLabAppointmentType(type);
        this.setState({ showTimeError: false, showAddressError: false });
    }

    navigateTo(where, is_insurance_applicable, selectTimeError = false) {
        switch (where) {
            case "time":
                {
                    //Get Test ids of all selected Tests
                    let test_ids = this.props.LABS[this.props.selectedLab].tests.map(x => x.test_id);

                    if (this.state.pincode || this.props.LABS[this.props.selectedLab] && this.props.LABS[this.props.selectedLab].lab && !this.props.LABS[this.props.selectedLab].lab.is_thyrocare) {

                        let r_pickup = this.props.selectedAppointmentType.r_pickup;
                        let p_pickup = this.props.selectedAppointmentType.p_pickup;
                        if (this.props.LABS[this.props.selectedLab].lab.is_thyrocare) {
                            if (this.state.seoFriendly) {
                                let url = `${window.location.pathname}?lab_id=${this.props.selectedLab}&type=lab&goback=true&is_thyrocare=true&action_page=timings&is_insurance=${is_insurance_applicable}&test_ids=${test_ids}&r_pickup=${r_pickup}&p_pickup=${p_pickup}&selectedType=${selectTimeError ? 'seperately' : 'all'}`;
                                this.props.history.push(url);
                            } else {
                                this.props.history.push(`/lab/${this.props.selectedLab}/timeslots?type=lab&goback=true&is_thyrocare=true&is_insurance=${is_insurance_applicable}&test_ids=${test_ids}&r_pickup=${r_pickup}&p_pickup=${p_pickup}&selectedType=${selectTimeError ? 'seperately' : 'all'}`);
                            }
                        } else {
                            if (this.state.seoFriendly) {
                                let url = `${window.location.pathname}?lab_id=${this.props.selectedLab}&type=lab&goback=true&is_thyrocare=false&action_page=timings&is_insurance=${is_insurance_applicable}&test_ids=${test_ids}&r_pickup=${r_pickup}&p_pickup=${p_pickup}&selectedType=${selectTimeError ? 'seperately' : 'all'}`;
                                this.props.history.push(url);
                            } else {
                                this.props.history.push(`/lab/${this.props.selectedLab}/timeslots?type=lab&goback=true&is_thyrocare=false&is_insurance=${is_insurance_applicable}&test_ids=${test_ids}&r_pickup=${r_pickup}&p_pickup=${p_pickup}&selectedType=${selectTimeError ? 'seperately' : 'all'}`);
                            }
                        }

                        return;
                    } else {
                        this.setState({ showPincodePopup: true });
                        return;
                    }
                }

            case "patient":
                {
                    this.props.history.push(`/user/family?pick=true&lab_id=${this.props.selectedLab}&is_insurance=${is_insurance_applicable}`);
                    return;
                }

            case "address":
                {
                    if (this.props.address && this.props.address.length) {
                        this.props.history.push(`/user/address?pick=true`);
                    } else {
                        this.props.history.push(`/user/address/add`);
                    }
                    return;
                }
        }
    }

    getPatientDetails(is_insurance_applicable, center_visit_enabled, is_home_charges_applicable) {
        let patient = null;
        if (this.props.profiles[this.props.selectedProfile] && !this.props.profiles[this.props.selectedProfile].isDummyUser) {
            patient = this.props.profiles[this.props.selectedProfile];
        }
        return _react2.default.createElement(_choosePatientNew2.default, _extends({ is_corporate: !!this.props.corporateCoupon, patient: patient, navigateTo: this.navigateTo.bind(this), profileDataCompleted: this.profileDataCompleted.bind(this) }, this.props, { is_lab: true, clearTestForInsured: this.clearTestForInsured.bind(this), is_insurance_applicable: is_insurance_applicable, checkPrescription: this.checkPrescription.bind(this), isEmailNotValid: this.state.isEmailNotValid, getDataAfterLogin: this.getDataAfterLogin, nonIpdLeads: this.nonIpdLeads.bind(this) }));
    }

    getSelectors(is_insurance_applicable, center_visit_enabled, is_home_charges_applicable) {
        let patient = null;
        if (this.props.profiles[this.props.selectedProfile] && !this.props.profiles[this.props.selectedProfile].isDummyUser) {
            patient = this.props.profiles[this.props.selectedProfile];
        }

        return _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(_VisitTimeNew2.default, _extends({ type: 'home', navigateTo: this.navigateTo.bind(this), selectedSlot: this.props.selectedSlot, timeError: this.state.showTimeError }, this.props, { selectedLab: this.props.selectedLab, toggle: this.toggle.bind(this, 'showPincodePopup'), is_insurance_applicable: is_insurance_applicable })),
            patient && is_home_charges_applicable ? _react2.default.createElement(_pickupAddress2.default, _extends({}, this.props, { navigateTo: this.navigateTo.bind(this, 'address'), addressError: this.state.showAddressError })) : ''
        );
        /*
                switch (this.props.selectedAppointmentType) {
                    case "lab": {
                        return <div>
                            <VisitTimeNew type="lab" navigateTo={this.navigateTo.bind(this)} selectedSlot={this.props.selectedSlot} timeError={this.state.showTimeError} {...this.props} selectedLab={this.props.selectedLab} toggle={this.toggle.bind(this, 'showPincodePopup')} is_insurance_applicable={is_insurance_applicable} />
                            <ChoosePatientNewView is_corporate={!!this.props.corporateCoupon} patient={patient} navigateTo={this.navigateTo.bind(this)} profileDataCompleted={this.profileDataCompleted.bind(this)} {...this.props} is_lab={true} clearTestForInsured={this.clearTestForInsured.bind(this)} is_insurance_applicable={is_insurance_applicable} checkPrescription={this.checkPrescription.bind(this)} isEmailNotValid={this.state.isEmailNotValid} isDobNotValid={this.state.isDobNotValid}/>
                        </div>
                    }
        
                    case "home": {
                        return <div>
                            <VisitTimeNew type="home" navigateTo={this.navigateTo.bind(this)} selectedSlot={this.props.selectedSlot} timeError={this.state.showTimeError} {...this.props} selectedLab={this.props.selectedLab} toggle={this.toggle.bind(this, 'showPincodePopup')} is_insurance_applicable={is_insurance_applicable} />
                            <ChoosePatientNewView is_corporate={!!this.props.corporateCoupon} patient={patient} navigateTo={this.navigateTo.bind(this)} profileDataCompleted={this.profileDataCompleted.bind(this)} {...this.props} is_lab={true} clearTestForInsured={this.clearTestForInsured.bind(this)} is_insurance_applicable={is_insurance_applicable} checkPrescription={this.checkPrescription.bind(this)} isEmailNotValid={this.state.isEmailNotValid} isDobNotValid={this.state.isDobNotValid}/>
                            {
                                patient ?
                                    <PickupAddress {...this.props} navigateTo={this.navigateTo.bind(this, 'address')} addressError={this.state.showAddressError} />
                                    : ''
                            }
                        </div>
                    }
                }*/
    }

    profileDataCompleted(data) {
        if (data.name == '' || data.gender == '' || data.phoneNumber == '' || data.email == '' || !data.otpVerifySuccess || data.dob == '' || data.dob == null) {
            this.props.patientDetails(data);
            this.setState({ profileDataFilled: false });
        } else if (data.otpVerifySuccess) {
            let clear_data = {};
            this.props.patientDetails(clear_data);
            this.setState({ profileDataFilled: true });
        }
    }

    checkPrescription() {
        let is_insurance_applicable = false;
        let is_tests_covered_under_insurance = false;
        let is_selected_user_insured = false;

        let data = {};
        let selectedDate = null;
        let selected_test_id = [];
        const parsed = queryString.parse(this.props.location.search);
        let patient = null;
        let profile = null;

        if (this.props.profiles[this.props.selectedProfile] && !this.props.profiles[this.props.selectedProfile].isDummyUser) {
            patient = this.props.profiles[this.props.selectedProfile];
            is_selected_user_insured = this.props.profiles[this.props.selectedProfile].is_insured;
            profile = patient.id;
        }
        is_tests_covered_under_insurance = true;
        this.props.LABS[this.props.selectedLab].tests.map((test, i) => {

            if (test.insurance && test.insurance.is_insurance_covered && test.insurance.insurance_threshold_amount >= parseInt(test.deal_price)) {} else {
                is_tests_covered_under_insurance = false;
            }
        });
        is_insurance_applicable = is_tests_covered_under_insurance && is_selected_user_insured;

        // in case of upload prescription
        if (is_insurance_applicable) {
            if (this.props.selectedCriterias && this.props.selectedCriterias.length > 0) {
                this.props.selectedCriterias.map((twp, i) => {
                    selected_test_id.push(twp.id);
                });
            }
            data.start_date = selectedDate ? selectedDate : this.props.selectedSlot && this.props.selectedSlot.date ? this.props.selectedSlot.date : new Date();
            data.lab_test = selected_test_id;
            data.lab = this.props.selectedLab;
            data.profile = profile;
            this.props.preBooking(data);
        }
    }

    getBookingData() {
        let test_ids = [];
        let coupon_data = {};
        if (this.props.LABS[this.props.selectedLab] && this.props.LABS[this.props.selectedLab].tests && this.props.LABS[this.props.selectedLab].tests.length) {
            test_ids = this.props.LABS[this.props.selectedLab].tests.map(x => x.test_id);
        }

        if (this.props.labCoupons && this.props.labCoupons[this.props.selectedLab] && this.props.labCoupons[this.props.selectedLab].length) {
            coupon_data = this.props.labCoupons[this.props.selectedLab][0];
        }
        return { test_ids, labId: this.props.selectedLab, pincode: this.state.pincode, profile: this.props.selectedProfile, selectedSlot: this.props.selectedSlot, coupon_data, payment_type: this.props.payment_type };
    }

    sendSingleFlowAgentBookingURL(postData) {
        //for agent login send booking url for single flow
        let booking_data = this.getBookingData();
        booking_data = _extends({}, postData, booking_data, { is_single_flow_lab: true, dummy_data_type: 'SINGLE_PURCHASE' });

        this.props.pushMembersData(booking_data, resp => {
            if (resp.dummy_id) {

                let extraParams = {
                    landing_url: `lab/${this.props.selectedLab}/book?dummy_id=${resp.dummy_id}&test_ids=${booking_data.test_ids}`
                };
                if (postData['message_medium']) {
                    extraParams['message_medium'] = postData['message_medium'];
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

    proceed(testPicked, addressPicked, datePicked, patient, addToCart, total_price, total_wallet_balance, prescriptionPicked, is_selected_user_insurance_status, extraParams, vip_is_prescription_required, e) {

        //Check if patient is selected or not
        if (!patient) {
            _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Add Patient" });
            window.scrollTo(0, 0);
            return;
        }
        //Check if patient emailid exist or not
        // if(patient && !patient.email){
        //     this.setState({isEmailNotValid:true})
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
        //check if any test is selcted by user or not
        if (!testPicked) {
            _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please select some tests." });
            return;
        }
        //check if timeslots of all selected tests are selcted by user or not
        if (this.props.selectedSlot && this.props.selectedSlot.selectedTestsTimeSlot) {
            let found = false;
            this.props.LABS[this.props.selectedLab].tests.map(test => {
                if (this.props.selectedSlot.selectedTestsTimeSlot[test.test_id]) {} else {
                    found = true;
                }
            });
            if (found) {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please select timings of all Tests." });
                return;
            }
        }

        if (!datePicked) {
            this.setState({ showTimeError: true });
            _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please pick a time slot." });

            window.scrollTo(0, 0); // this.state.scrollPosition);

            return;
        }

        //Check if patient address is selected or not
        if (!addressPicked) {
            this.setState({ showAddressError: true });
            _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please pick an address." });

            window.scrollTo(0, 0); //this.state.scrollPosition);

            return;
        }

        //Check if pincode selected by user matches with the pincode of the address selected by the user
        if (addressPicked && this.props.LABS[this.props.selectedLab] && this.props.LABS[this.props.selectedLab].lab && this.props.LABS[this.props.selectedLab].lab.is_thyrocare) {

            let validateAddressPincode = false;
            if (this.props.address && this.props.address.length) {
                let selectedAddressPincode = this.props.address.filter(x => x.id == this.props.selectedAddress).map(x => x.pincode);

                if (selectedAddressPincode.length && parseInt(selectedAddressPincode[0]) == parseInt(this.state.pincode)) {
                    validateAddressPincode = true;
                }
            }

            if (!validateAddressPincode) {
                this.setState({ pincodeMismatchError: true });
                window.scrollTo(0, 0);
                return;
            }
        }

        /*if (!this.state.profileDataFilled) {
            SnackBar.show({ pos: 'bottom-center', text: "Please fill the info" });
            return
        }*/
        if (e.target.dataset.disabled == true) {
            return;
        }

        // React guarantees that setState inside interactive events (such as click) is flushed at browser event boundary
        if (this.state.loading) {
            return;
        }

        let is_insurance_applicable = false;
        let is_tests_covered_under_insurance = false;
        let is_selected_user_insured = false;
        let is_vip_applicable = false;
        let is_selected_user_under_vip = false;
        let is_tests_covered_under_vip = false;
        let vip_amount;

        let is_selected_user_vip = true; // to check is plus_plan is applicable or not
        if (this.props.profiles[this.props.selectedProfile] && !this.props.profiles[this.props.selectedProfile].isDummyUser) {
            is_selected_user_insured = this.props.profiles[this.props.selectedProfile].is_insured;
            is_selected_user_under_vip = this.props.profiles[this.props.selectedProfile].is_vip_member;
            Object.entries(this.props.profiles).map(function ([key, value]) {
                if (value.is_vip_member) {
                    is_selected_user_vip = false;
                }
            });
        }

        let is_plan_applicable = false;
        let is_tests_covered_under_plan = true;
        let is_selected_user_has_active_plan = false;
        let show_lensfit = true;
        let lensfit_coupons = null;

        if (this.props.isUserCared && this.props.isUserCared.has_active_plan) {
            is_selected_user_has_active_plan = this.props.isUserCared.has_active_plan;
        }

        //Check If each Tests Covered Under Plan
        //Check If each Tests Covered Under Insurance

        if (this.props.LABS[this.props.selectedLab] && this.props.LABS[this.props.selectedLab].tests && this.props.LABS[this.props.selectedLab].tests.length) {

            is_tests_covered_under_insurance = true;
            this.props.LABS[this.props.selectedLab].tests.map((test, i) => {

                if (test.insurance && test.insurance.is_insurance_covered && test.insurance.insurance_threshold_amount >= parseInt(test.deal_price)) {} else {
                    is_tests_covered_under_insurance = false;
                }

                if (test.included_in_user_plan) {} else {
                    is_tests_covered_under_plan = false;
                }
                if (test.lensfit_offer) {
                    if (!test.lensfit_offer.applicable) {
                        show_lensfit = false;
                    } else {
                        lensfit_coupons = test.lensfit_offer.coupon;
                    }
                } else {}
                if (test.vip && test.vip.covered_under_vip) {
                    is_tests_covered_under_vip = true;
                    vip_amount = test.vip.vip_amount;
                } else {}
            });
        }
        is_insurance_applicable = is_tests_covered_under_insurance && is_selected_user_insured;

        is_plan_applicable = is_tests_covered_under_plan && is_selected_user_has_active_plan;

        show_lensfit = show_lensfit && this.props.LABS[this.props.selectedLab] && this.props.LABS[this.props.selectedLab].tests && this.props.LABS[this.props.selectedLab].tests.length;

        /*if(!this.state.show_lensfit_popup && !this.state.lensfit_decline && show_lensfit && !is_plan_applicable && !is_insurance_applicable && lensfit_coupons && Object.keys(lensfit_coupons).length > 0 && this.state.couponId !=lensfit_coupons.coupon_id){
            this.setState({show_lensfit_popup:true, lensfit_coupons:lensfit_coupons})
            return
        }*/
        is_vip_applicable = /*is_tests_covered_under_vip &&*/is_selected_user_under_vip;
        let prescriptionIds = [];
        //Check if prior to test, prescription exist for the insured customer or not
        if (prescriptionPicked && is_insurance_applicable || vip_is_prescription_required) {
            if (this.props.user_prescriptions && this.props.user_prescriptions.length == 0) {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please upload prescription." });
                return;
            } else if (this.props.user_prescriptions && this.props.user_prescriptions.length > 0) {
                this.props.user_prescriptions[0].img_path_ids.map((imgId, i) => {
                    prescriptionIds.push({ 'prescription': imgId.id });
                });
            }
        }

        //Confirmation popup for the tests, whose amount payable is 0
        if (this.state.showConfirmationPopup == 'close' && !addToCart && (total_price == 0 || this.state.use_wallet && total_wallet_balance > 0)) {
            this.setState({ showConfirmationPopup: 'open' });
            return;
        }
        if (this.state.is_spo_appointment || this.props.payment_type == 6 && _storage2.default.isAgent()) {
            this.setState({ error: "" });
        } else {
            this.setState({ loading: true, error: "" });
        }

        /* let start_date = this.props.selectedSlot.date
         let start_time = this.props.selectedSlot.time.value
        */let testIds = this.props.lab_test_data[this.props.selectedLab] || [];
        testIds = testIds.map(x => x.id);
        let utm_tags = this.getUtmTags();
        let postData = {
            lab: this.props.selectedLab,
            test_ids: testIds,
            profile: this.props.selectedProfile,
            address: this.props.selectedAddress,
            payment_type: 1, // TODO : Select payment type
            use_wallet: this.props.payment_type == 6 ? false : this.state.use_wallet,
            cart_item: this.state.cart_item,
            prescription_list: prescriptionIds,
            multi_timings_enabled: true,
            from_web: true,
            utm_tags: utm_tags
        };
        let visitor_info = _gtm2.default.getVisitorInfo();
        if (visitor_info && visitor_info.visit_id) {
            postData['visit_id'] = visitor_info.visit_id;
            postData['visitor_id'] = visitor_info.visitor_id;
        }
        if (this.props.selectedSlot) {
            if (this.props.selectedSlot['all']) {
                postData['selected_timings_type'] = 'common';
            } else {
                postData['selected_timings_type'] = 'separate';
            }
        }
        if (this.props.payment_type == 6 && this.props.selected_vip_plan && Object.keys(this.props.selected_vip_plan).length && is_selected_user_vip) {
            postData['plus_plan'] = this.props.selected_vip_plan.id;
            postData['plan'] = this.props.selected_vip_plan;
        }
        //Check SPO UTM Tags
        if (sessionStorage && sessionStorage.getItem('sessionIdVal') && this.props.common_utm_tags && this.props.common_utm_tags.length && this.props.common_utm_tags.filter(x => x.type == 'spo').length) {

            let spo_tags = this.props.common_utm_tags.filter(x => x.type == 'spo')[0];
            if (spo_tags.utm_tags) {

                postData['utm_spo_tags'] = spo_tags.utm_tags;
            }
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

        //build data for every selected tests with their selected timeslot.
        if (this.props.selectedSlot && this.props.selectedSlot.selectedTestsTimeSlot) {
            let tests = [];

            this.props.LABS[this.props.selectedLab].tests.map(twp => {

                if (this.props.selectedSlot.selectedTestsTimeSlot[twp.test_id]) {
                    let test = this.props.selectedSlot.selectedTestsTimeSlot[twp.test_id];
                    let type = 3;
                    if (twp.is_radiology) {
                        type = 1;
                    } else if (twp.is_pathology) {
                        type = 2;
                    }

                    tests.push({ test: test.test_id, type: type, start_date: test.date, start_time: test.time.value, is_home_pickup: test.is_home_pickup });
                }
            });
            postData['test_timings'] = tests;
        }
        let profileData = _extends({}, patient);
        if (profileData && profileData.whatsapp_optin == null) {
            profileData['whatsapp_optin'] = this.state.whatsapp_optin;
            this.props.editUserProfile(profileData, profileData.id);
        }
        if (this.props.payment_type != 6 && this.props.labCoupons && this.props.labCoupons[this.props.selectedLab] && this.props.labCoupons[this.props.selectedLab].length && this.props.disCountedLabPrice >= 0 && !is_plan_applicable && !is_insurance_applicable /*&& !is_vip_applicable*/) {
                postData['coupon_code'] = this.state.couponCode ? [this.state.couponCode] : [];
            }

        //Post Pincode & thyrocare data
        if (this.props.LABS[this.props.selectedLab] && this.props.LABS[this.props.selectedLab].lab && this.props.LABS[this.props.selectedLab].lab.is_thyrocare) {

            let pincode = this.state.pincode;
            postData['pincode'] = pincode.toString() || "";
            postData['is_thyrocare'] = true;
        } else {
            postData['pincode'] = "";
            postData['is_thyrocare'] = false;
        }

        if (addToCart) {
            //On add to Cart Clicked

            //Single Flow Agent Booking
            if (_storage2.default.isAgent() && this.props.payment_type == 6) {
                if (extraParams && extraParams.sendWhatsup) {
                    postData['message_medium'] = 'WHATSAPP';
                }
                this.sendSingleFlowAgentBookingURL(postData);
                return;
            }

            let data = {
                'Category': 'ConsumerApp', 'Action': 'LabAddToCartClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-add-to-cart-clicked'
            };

            _gtm2.default.sendEvent({ data: data });
            this.props.addToCart(2, postData).then(res => {
                // if (!this.state.cart_item && !this.state.is_spo_appointment) {
                //     this.props.clearExtraTests()
                // }

                if (this.state.is_spo_appointment) {
                    this.sendAgentBookingURL();
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

        let data = {
            'Category': 'ConsumerApp', 'Action': 'LabProceedClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-proceed-clicked'
        };

        _gtm2.default.sendEvent({ data: data });

        data = {
            'Category': 'ConsumerApp', 'Action': 'AppointmentType', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'appointment-type', 'appointmentType': '', 'r_pickup': this.props.selectedAppointmentType.r_pickup, 'p_pickup': this.props.selectedAppointmentType.p_pickup
        };

        _gtm2.default.sendEvent({ data: data });

        let analyticData = {
            'Category': 'ConsumerApp', 'Action': 'LabConfirmBookingClicked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'lab-confirm-booking-clicked'
        };
        _gtm2.default.sendEvent({ data: analyticData });
        this.setState({ paymentBtnClicked: true });
        this.props.createLABAppointment(postData, (err, data) => {
            if (!err) {

                //Clear SPO UTM Tags after appointments creation
                if (this.state.is_spo_appointment) {
                    this.props.unSetCommonUtmTags('spo');
                }

                //Remove coupons and clear prescription after appointment creation
                if (this.props.user_prescriptions && this.props.user_prescriptions.length > 0) {
                    this.props.removeLabCoupons(this.props.selectedLab, this.state.couponId);
                    this.props.clearPrescriptions();
                }
                if (data.is_agent) {
                    this.props.removeLabCoupons(this.props.selectedLab, this.state.couponId);
                    // this.props.history.replace(this.props.location.pathname + `?order_id=${data.data.orderId}`)
                    this.setState({ order_id: data.data.orderId });
                    return;
                }
                if (data.payment_required) {
                    // if payment is required, send to payment selection page
                    let analyticData = {
                        'Category': 'ConsumerApp', 'Action': 'LabOrderCreated', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'lab_order_created'
                    };
                    _gtm2.default.sendEvent({ data: analyticData });
                    // this.props.history.push(`/payment/${data.data.orderId}?refs=lab`)
                    this.processPayment(data);
                } else {

                    this.props.removeLabCoupons(this.props.selectedLab, this.state.couponId);
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
                            this.props.removeLabCoupons(this.props.selectedLab, this.state.couponId);
                        }, 3000);
                        form.submit();
                    }
                }, 500);
            });
        }
    }

    sendAgentBookingURL() {
        //for agent login send booking url
        let postData = {};
        if (sessionStorage && sessionStorage.getItem('sessionIdVal') && this.props.common_utm_tags && this.props.common_utm_tags.length && this.props.common_utm_tags.filter(x => x.type == 'spo').length) {

            let spo_tags = this.props.common_utm_tags.filter(x => x.type == 'spo')[0];
            if (spo_tags.utm_tags) {
                postData = spo_tags.utm_tags;
            }
        }

        this.props.sendSPOAgentBooking(postData, (err, res) => {
            if (err) {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "SMS SEND ERROR" });
            } else {
                this.props.unSetCommonUtmTags('spo');
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "SMS SENT SUCCESSFULY" });
            }
        });
    }

    applyCoupons() {
        if (!this.props.corporateCoupon) {
            let analyticData = {
                'Category': 'ConsumerApp', 'Action': 'LabCouponsClicked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'lab-coupons-clicked'
            };
            _gtm2.default.sendEvent({ data: analyticData });

            let test_ids = [];
            this.props.LABS[this.props.selectedLab].tests.map((twp, i) => {
                test_ids.push(twp.test_id);
            });

            let { finalPrice } = this.getLabPriceData(this.props);

            this.setState({ pay_btn_loading: true });
            this.props.history.push(`/coupon/lab/${this.props.selectedLab}/coupons?test_ids=${test_ids}&deal_price=${finalPrice}&cart_item=${this.state.cart_item || ""}`);
        }
    }

    getBookingButtonText(total_wallet_balance, price_to_pay, is_vip_applicable, vip_amount, extraAllParams) {
        let price_from_wallet = 0;
        let price_from_pg = 0;

        if (is_vip_applicable || extraAllParams && extraAllParams.is_gold_member) {
            // if(vip_amount){
            //     return `Confirm Booking (₹ ${extraAllParams.total_amount_payable})`
            // }else{
            //     return `Confirm Booking`
            // }
            price_to_pay = extraAllParams.total_amount_payable;
        }
        if (this.state.use_wallet && total_wallet_balance && this.props.payment_type != 6) {
            price_from_wallet = Math.min(total_wallet_balance, price_to_pay);
        }

        price_from_pg = price_to_pay - price_from_wallet;

        if (price_from_pg) {
            return `Continue to pay (₹ ${price_from_pg})`;
        }

        return `Confirm Booking`;
    }

    setPincode(pincode) {
        this.props.savePincode(pincode);
        let slot = { time: {} };
        this.props.selectLabTimeSLot(slot, false);
        this.setState({ showPincodePopup: false, pincode: pincode }, () => {
            this.navigateTo('time');
        });
    }

    clickPincodeErrrorPopUp(type) {
        if (type == 1) {
            this.setState({ pincodeMismatchError: false, showPincodePopup: true }, () => {});
        } else {
            this.props.history.push('/user/address?pick=true');
        }
    }

    goToProfile(id, url) {
        if (url) {
            this.props.history.push(`/${url}`);
        } else {
            this.props.history.push(`/lab/${id}`);
        }
    }

    toggleWhatsap(status, e) {
        this.setState({ whatsapp_optin: status });
    }

    clearTestForInsured() {
        // if (this.props.defaultProfile && this.props.profiles[this.props.defaultProfile] && (this.props.profiles[this.props.defaultProfile].is_insured || this.props.profiles[this.props.defaultProfile].is_vip_member || this.props.profiles[this.props.defaultProfile].is_vip_gold_member)) {

        //     if(this.props.selectedLab && this.props.LABS[this.props.selectedLab] && this.props.LABS[this.props.selectedLab].tests && this.props.LABS[this.props.selectedLab].tests.length ==1){

        //     }else{
        //         this.props.clearExtraTests()    
        //     }
        //     this.props.getLabById(this.props.selectedLab)
        //     return
        // }
    }

    searchTests() {
        this.props.selectSearchType('lab');
        this.props.history.push('/search');
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

    goToInsurance(labDetail) {
        let data = {};
        data.thumbnail = labDetail.lab_thumbnail;
        data.name = labDetail.name;
        data.id = labDetail.id;
        data.type = 'lab';
        this.props.saveAvailNowInsurance(data);
        this.props.history.push('/insurance/insurance-plans?source=doctor-summary-view&show_button=true');
    }

    testInfo(test_id, lab_id, test_url, event) {
        let selected_test_ids = [];
        // Object.entries(this.props.currentSearchedCriterias).map(function ([key, value]) {
        //     selected_test_ids.push(value.id)
        // })
        var url_string = window.location.href;
        var url = new URL(url_string);
        var search_id = url.searchParams.get("search_id");
        let lat = 28.644800;
        let long = 77.216721;
        if (this.props.selectedLocation !== null) {
            lat = this.props.selectedLocation.geometry.location.lat;
            long = this.props.selectedLocation.geometry.location.lng;

            if (typeof lat === 'function') lat = lat();
            if (typeof long === 'function') long = long();
        }
        if (test_url && test_url != '') {
            this.props.history.push('/' + test_url + '?test_ids=' + test_id + '&selected_test_ids=' + selected_test_ids + '&search_id=' + search_id + '&lab_id=' + lab_id + '&lat=' + lat + '&long=' + long);
        } else {
            this.props.history.push('/search/testinfo?test_ids=' + test_id + '&selected_test_ids=' + selected_test_ids + '&search_id=' + search_id + '&lab_id=' + lab_id + '&lat=' + lat + '&long=' + long);
        }
        event.stopPropagation();
        let data = {
            'Category': 'ConsumerApp', 'Action': 'testInfoClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'test-info-click', 'pageSource': 'lab-result-page'
        };
        _gtm2.default.sendEvent({ data: data });
    }

    removeTest(twp) {
        let test = Object.assign({}, twp.test);
        test.extra_test = true;
        test.lab_id = this.props.selectedLab;
        test.removeTest = true;
        test.selectedLabTests = this.props.LABS[this.props.selectedLab];
        this.props.toggleDiagnosisCriteria('test', test);
    }

    applyLensFitCoupons(deal_price, coupon) {
        let { finalPrice, test_ids } = this.getLabPriceData(this.props);
        coupon.finalPrice = finalPrice;
        coupon.test_ids = test_ids;
        coupon.LABS = this.props.LABS;
        let data = {
            'Category': 'ConsumerApp', 'Action': 'LensFitLabApplyClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lensfit-lab-apply-clicked'
        };
        _gtm2.default.sendEvent({ data: data });
        this.getAndApplyBestCoupons(coupon, true);
    }

    closeLensFitPopup() {
        let data = {
            'Category': 'ConsumerApp', 'Action': 'LensFitLabDontWantClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lensfit-lab-dont-want-clicked'
        };
        _gtm2.default.sendEvent({ data: data });

        this.setState({ show_lensfit_popup: false, lensfit_decline: true }, () => {
            if (document.getElementById('confirm_booking')) {
                document.getElementById('confirm_booking').click();
            }
        });
        // this.setState({show_lensfit_popup:false,lensfit_decline:true})
    }

    getSelectedUserData(props) {
        let total_amount_payable_without_coupon = null;
        let is_tests_covered_under_plan = true;
        let is_tests_covered_under_vip = true;
        let vip_data = {};
        let vip_total_amount = 0;
        let vip_total_convenience_amount = 0;
        let vip_total_gold_price = 0;
        let is_all_enable_for_vip = true;
        let is_all_enable_for_gold = true;
        let is_home_charges_applicable = false;
        let labDetail = {};
        if (props.LABS[props.selectedLab] && props.LABS[props.selectedLab].tests && props.LABS[props.selectedLab].tests.length) {
            let patient = null;
            labDetail = props.LABS[props.selectedLab].lab;
            let is_home_collection_enabled = false;
            if (is_home_collection_enabled && props.selectedAppointmentType && (props.selectedAppointmentType.r_pickup == 'home' || props.selectedAppointmentType.p_pickup == 'home')) {
                is_home_charges_applicable = true;
            }

            if (props.profiles[props.selectedProfile] && !props.profiles[props.selectedProfile].isDummyUser) {
                patient = props.profiles[props.selectedProfile];
            }

            props.LABS[props.selectedLab].tests.map((test, i) => {

                if (test.included_in_user_plan) {} else {
                    is_tests_covered_under_plan = false;
                }

                if (test.vip && !test.vip.covered_under_vip) {
                    is_tests_covered_under_vip = false;
                }

                if (!test.vip.is_enable_for_vip) {
                    is_all_enable_for_vip = false;
                }
                if (!test.vip.is_gold) {
                    is_all_enable_for_gold = false;
                }

                vip_total_amount += parseInt(test.vip.vip_amount);
                vip_total_convenience_amount += parseInt(test.vip.vip_convenience_amount);
                vip_total_gold_price += parseInt(test.vip.vip_gold_price);
            });
            // vip_total_convenience_amount = 0
            if (is_all_enable_for_vip && patient) {

                if (is_all_enable_for_gold && patient.is_vip_gold_member) {

                    total_amount_payable_without_coupon = vip_total_amount + vip_total_convenience_amount + (is_home_charges_applicable ? labDetail.home_pickup_charges : 0);
                } else if (patient.is_vip_member /* && is_tests_covered_under_vip*/) {
                        total_amount_payable_without_coupon = vip_total_amount + (is_home_charges_applicable ? labDetail.home_pickup_charges : 0);
                    }
            }

            if (!props.is_any_user_buy_gold && props.payment_type == 6 && props.selected_vip_plan && props.selected_vip_plan.lab && props.LABS[props.selectedLab].tests.length == 1) {
                total_amount_payable_without_coupon = null;
            }
        } else {
            is_tests_covered_under_plan = false;
            is_tests_covered_under_vip = false;
            is_all_enable_for_vip = false;
            is_all_enable_for_gold = false;
        }
        return { total_amount_payable_without_coupon };
    }

    nonIpdLeads(user_phone_number, user_name) {
        const parsed = queryString.parse(this.props.location.search);
        let patient = null;
        let data = {};
        let selected_test_name = '';
        let selected_test;
        if (this.props.LABS[this.props.selectedLab] && this.props.LABS[this.props.selectedLab].tests && this.props.LABS[this.props.selectedLab].tests.length) {

            this.props.LABS[this.props.selectedLab].tests.map((test, i) => {
                if (this.props.selectedSlot && Object.keys(this.props.selectedSlot).length && this.props.selectedSlot.selectedTestsTimeSlot) {
                    selected_test = this.props.selectedSlot.selectedTestsTimeSlot[test.test_id];
                }
                if (this.props.LABS[this.props.selectedLab].tests.length == 1) {
                    selected_test_name += test.test.name;
                } else {
                    selected_test_name += test.test.name + ',';
                }
            });
            if (this.props.profiles[this.props.selectedProfile] && !this.props.profiles[this.props.selectedProfile].isDummyUser) {
                patient = this.props.profiles[this.props.selectedProfile];
                data.customer_name = patient.name;
                data.phone_number = patient.phone_number;
            }

            data.lead_type = 'DROPOFF';
            data.lead_source = 'dropoff';
            data.lab_name = this.props.LABS[this.props.selectedLab].lab.name;
            data.exitpoint_url = 'http://docprime.com' + this.props.location.pathname;
            data.source = parsed;
            data.doctor_name = null;
            data.hospital_name = null;
            data.specialty = null;
            data.test_name = selected_test_name;
            if (user_phone_number) {
                data.phone_number = user_phone_number;
                data.customer_name = user_name;
            }
            let visitor_info = _gtm2.default.getVisitorInfo();
            if (visitor_info && visitor_info.visit_id) {
                data.visit_id = visitor_info.visit_id;
                data.visitor_id = visitor_info.visitor_id;
            }
            if (this.props.common_utm_tags && this.props.common_utm_tags.length) {
                data.utm_tags = this.getUtmTags();
            }
            if (selected_test && this.props.selectedSlot && Object.keys(this.props.selectedSlot).length && this.props.selectedSlot.selectedTestsTimeSlot) {
                let { date, time } = selected_test;
                data.selected_time = time.text + ' ' + time.title;
                data.selected_date = date;
            } else {
                data.selected_time = null;
                data.selected_date = null;
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

    render() {
        const parsed = queryString.parse(this.props.location.search);
        let tests = [];
        let tests_with_price = [];
        let finalPrice = 0;
        let finalMrp = 0;
        let home_pickup_charges = 0;
        let labDetail = {};
        let patient = null;
        let is_home_collection_enabled = true;
        let address_picked_verified = false;
        let center_visit_enabled = true;
        let is_corporate = false;
        let prescriptionPicked = false;

        let is_insurance_applicable = false;
        let is_tests_covered_under_insurance = false;
        let is_selected_user_insured = false;
        let is_default_user_insured = false;

        let is_plan_applicable = false;
        let is_tests_covered_under_plan = true;
        let is_selected_user_has_active_plan = false;
        let is_insurance_buy_able = false;
        let is_selected_user_insurance_status;
        let radiology_tests = [];
        let pathology_tests = [];
        let r_pickup_home = true;
        let r_pickup_center = false;
        let p_pickup_home = true;
        let p_pickup_center = false;
        let is_vip_applicable = false;
        let is_selected_user_under_vip = false;
        let is_default_user_under_vip = false;
        let is_tests_covered_under_vip = false;
        let is_selected_user_gold = false;
        let vip_total_amount = 0;
        let vip_total_convenience_amount = 0;
        let vip_total_gold_price = 0;
        let vip_data = {};
        let is_all_enable_for_vip = true;
        let is_all_enable_for_gold = true;
        let vip_is_prescription_required = false;
        if (this.props.profiles[this.props.selectedProfile] && !this.props.profiles[this.props.selectedProfile].isDummyUser) {
            patient = this.props.profiles[this.props.selectedProfile];
            is_selected_user_insured = this.props.profiles[this.props.selectedProfile].is_insured;
            is_selected_user_insurance_status = this.props.profiles[this.props.selectedProfile].insurance_status;
            is_selected_user_under_vip = this.props.profiles[this.props.selectedProfile].is_vip_member;
            is_selected_user_gold = this.props.profiles[this.props.selectedProfile].is_vip_gold_member;
        }
        if (this.props.is_prescription_needed) {
            prescriptionPicked = true;
        }
        if (this.props.defaultProfile && this.props.profiles[this.props.defaultProfile]) {
            is_default_user_insured = this.props.profiles[this.props.defaultProfile].is_insured;
            is_default_user_under_vip = this.props.profiles[this.props.defaultProfile].is_vip_member;
        }

        //Check If each Tests Covered Under Insurance
        if (this.props.isUserCared && this.props.isUserCared.has_active_plan) {
            is_selected_user_has_active_plan = this.props.isUserCared.has_active_plan;
        }

        //Check If each Tests Covered Under Plan
        //Gold Radio button Selected Package Price List
        let gold_pricelist_mrp = 0;
        let gold_pricelist_deal_price = 0;
        let gold_pricelist_convenience = 0;
        if (this.props.LABS[this.props.selectedLab] && this.props.LABS[this.props.selectedLab].tests && this.props.LABS[this.props.selectedLab].tests.length) {
            is_tests_covered_under_insurance = true;

            this.props.LABS[this.props.selectedLab].tests.map((test, i) => {
                if (test.insurance && test.insurance.is_insurance_covered && test.insurance.insurance_threshold_amount >= parseInt(test.deal_price)) {} else {
                    is_tests_covered_under_insurance = false;
                }

                if (test.included_in_user_plan) {} else {
                    is_tests_covered_under_plan = false;
                }
                if (test.vip) {
                    is_tests_covered_under_vip = test.vip.covered_under_vip;
                } else {}

                //To get gold price for radio button single page 
                if (!this.props.is_any_user_buy_gold && this.props.selected_vip_plan && this.props.selected_vip_plan.tests && this.props.selected_vip_plan.tests[test.test_id]) {
                    gold_pricelist_mrp += this.props.selected_vip_plan.tests[test.test_id].mrp || 0;
                    gold_pricelist_deal_price += this.props.selected_vip_plan.tests[test.test_id].gold_price || 0;
                    gold_pricelist_convenience += this.props.selected_vip_plan.tests[test.test_id].convenience_charge || 0;
                }
            });
        }
        is_insurance_applicable = is_tests_covered_under_insurance && is_selected_user_insured;
        is_vip_applicable = /*is_tests_covered_under_vip && */is_selected_user_under_vip;
        if (is_tests_covered_under_insurance && !is_selected_user_insured) {
            is_insurance_buy_able = true;
        }
        is_plan_applicable = is_tests_covered_under_plan && is_selected_user_has_active_plan;

        if (this.props.LABS[this.props.selectedLab]) {
            labDetail = this.props.LABS[this.props.selectedLab].lab;

            // if(labDetail.is_prescription_needed){
            //     prescriptionPicked = labDetail.is_prescription_needed    
            // }
            this.props.LABS[this.props.selectedLab].tests.map((twp, i) => {
                if (twp.hide_price) {
                    is_corporate = true;
                }
                let price = twp.deal_price;
                let mrp = twp.mrp;
                // check if any of the selected test does not allow home_pickup_available
                /*if (!twp.is_home_collection_enabled) {
                    is_home_collection_enabled = false
                }*/
                finalPrice += parseFloat(price);
                finalMrp += parseFloat(mrp);
                vip_total_amount += parseInt(twp.vip.vip_amount);
                vip_total_convenience_amount += parseInt(twp.vip.vip_convenience_amount);
                vip_total_gold_price += parseInt(twp.vip.vip_gold_price);
                if (twp.vip.is_prescription_required) {
                    vip_is_prescription_required = true;
                }
                if (!twp.vip.is_enable_for_vip) {
                    is_all_enable_for_vip = false;
                }
                if (!twp.vip.is_gold) {
                    is_all_enable_for_gold = false;
                }

                if (twp.is_radiology) {
                    r_pickup_center = this.props.LABS[this.props.selectedLab].lab.center_visit_enabled;
                    if (!twp.is_home_collection_enabled) {
                        r_pickup_home = false;
                    }
                    radiology_tests.push(_react2.default.createElement(
                        'p',
                        { key: i, className: 'test-list test-list-label new-lab-test-list rdo-rmv-btn' },
                        _react2.default.createElement(
                            'span',
                            { className: 'test-name-item p-0' },
                            twp.test.name,
                            twp && twp.test && twp.test.show_details ? _react2.default.createElement(
                                'span',
                                { style: { 'marginLeft': '5px', marginTop: '1px', display: 'inline-block' }, key: i, onClick: this.testInfo.bind(this, twp.test.id, this.state.selectedLab, twp.test.url) },
                                _react2.default.createElement('img', { src: "/assets" + '/img/icons/Info.svg', style: { width: '15px' } })
                            ) : ''
                        ),
                        is_plan_applicable ? _react2.default.createElement(
                            'p',
                            { className: 'pkg-discountCpn', style: { display: 'inline-block', float: 'right', marginTop: '5px' } },
                            'Docprime Care Benefit'
                        ) : '',
                        _react2.default.createElement(
                            'span',
                            { className: 'rdo-rmv-spn', onClick: () => this.removeTest(twp) },
                            'Remove'
                        )
                    ));
                } else if (twp.is_pathology) {
                    p_pickup_center = this.props.LABS[this.props.selectedLab].lab.center_visit_enabled;
                    if (!twp.is_home_collection_enabled) {
                        p_pickup_home = false;
                    }
                    pathology_tests.push(_react2.default.createElement(
                        'p',
                        { key: i, className: 'test-list test-list-label rdo-rmv-btn new-lab-test-list' },
                        _react2.default.createElement(
                            'span',
                            { className: 'test-name-item p-0' },
                            twp.test.name,
                            twp && twp.test && twp.test.show_details ? _react2.default.createElement(
                                'span',
                                { style: { 'marginLeft': '5px', marginTop: '1px', display: 'inline-block' }, key: i, onClick: this.testInfo.bind(this, twp.test.id, this.state.selectedLab, twp.test.url) },
                                _react2.default.createElement('img', { src: "/assets" + '/img/icons/Info.svg', style: { width: '15px' } })
                            ) : ''
                        ),
                        is_plan_applicable ? _react2.default.createElement(
                            'p',
                            { className: 'pkg-discountCpn', style: { display: 'inline-block', float: 'right', marginTop: '5px' } },
                            'Docprime Care Benefit'
                        ) : '',
                        _react2.default.createElement(
                            'span',
                            { className: 'rdo-rmv-spn', onClick: () => this.removeTest(twp) },
                            'Remove'
                        )
                    ));
                }

                tests_with_price.push(_react2.default.createElement(
                    'div',
                    { className: 'payment-detail d-flex', key: i },
                    _react2.default.createElement(
                        'p',
                        null,
                        twp.test.name
                    ),
                    is_corporate || is_insurance_applicable || is_plan_applicable ? _react2.default.createElement(
                        'p',
                        null,
                        '\u20B9 0'
                    ) : this.props.payment_type == 6 && this.props.selected_vip_plan && this.props.selected_vip_plan.tests && this.props.selected_vip_plan.tests[twp.test_id] ? parseInt(this.props.selected_vip_plan.tests[twp.test_id].gold_price) == parseInt(this.props.selected_vip_plan.tests[twp.test_id].mrp) ? _react2.default.createElement(
                        'p',
                        { className: 'pay-amnt-shrnk' },
                        '\u20B9 ',
                        this.props.selected_vip_plan.tests[twp.test_id].gold_price || 0
                    ) : _react2.default.createElement(
                        'p',
                        { className: 'pay-amnt-shrnk' },
                        '\u20B9 ',
                        this.props.selected_vip_plan.tests[twp.test_id].mrp
                    ) : price == twp.mrp ? _react2.default.createElement(
                        'p',
                        { className: 'pay-amnt-shrnk' },
                        '\u20B9 ',
                        price
                    ) : _react2.default.createElement(
                        'p',
                        { className: 'pay-amnt-shrnk' },
                        '\u20B9 ',
                        parseFloat(twp.mrp)
                    )
                ));
            });
            center_visit_enabled = labDetail.center_visit_enabled;
        }

        // if center visi not enabled, check home pick as true
        /*if (!center_visit_enabled) {
            setTimeout(() => {
                this.props.selectLabAppointmentType('home')
            })
        } else {
            // if home pickup not available but selected type is home , then change in next iteration
            if (!is_home_collection_enabled && this.props.selectedAppointmentType == 'home') {
                // using timeout to skip this render iteration
                setTimeout(() => {
                    this.props.selectLabAppointmentType('lab')
                })
            }
        }*/
        //VIP TOTAL DATA 

        if (!(this.props.LABS[this.props.selectedLab] && this.props.LABS[this.props.selectedLab].tests && this.props.LABS[this.props.selectedLab].tests.length > 0)) {
            is_all_enable_for_gold = false;
            is_all_enable_for_vip = false;
        }
        vip_data.vip_amount = vip_total_amount;
        vip_data.vip_convenience_amount = vip_total_convenience_amount;
        vip_data.vip_gold_price = vip_total_gold_price;
        vip_data.is_enable_for_vip = is_all_enable_for_vip;
        vip_data.is_gold = is_all_enable_for_gold;
        //Check both pathology and radiology pickup status & toggle accordingly if not available
        if (!radiology_tests.length) {
            r_pickup_home = false;
        }
        if (!pathology_tests.length) {
            p_pickup_home = false;
        }
        let r_pickup = this.props.selectedAppointmentType.r_pickup;
        let p_pickup = this.props.selectedAppointmentType.p_pickup;
        let reset = false;

        if (radiology_tests.length || pathology_tests.length) {

            if (this.props.selectedAppointmentType.r_pickup == 'lab' && !r_pickup_center && (r_pickup_home || !radiology_tests.length)) {
                if (r_pickup_home) {
                    r_pickup = 'home';
                }
                reset = true;
            }

            if (this.props.selectedAppointmentType.r_pickup == 'home' && !r_pickup_home && (r_pickup_center || !radiology_tests.length)) {
                if (r_pickup_center) {
                    r_pickup = 'lab';
                }

                reset = true;
            }

            if (this.props.selectedAppointmentType.p_pickup == 'lab' && !p_pickup_center && (p_pickup_home || !pathology_tests.length)) {
                if (p_pickup_home) {
                    p_pickup = 'home';
                }
                reset = true;
            }

            if (this.props.selectedAppointmentType.p_pickup == 'home' && !p_pickup_home && (p_pickup_center || !pathology_tests.length)) {
                if (p_pickup_center) {
                    p_pickup = 'lab';
                }
                reset = true;
            }

            if (!p_pickup_home && !p_pickup_center) {
                p_pickup = null;
            }

            if (!r_pickup_home && !r_pickup_center) {
                r_pickup = null;
            }

            if (!this.props.selectedAppointmentType.r_pickup && (r_pickup_home || r_pickup_center)) {
                reset = true;
                r_pickup = r_pickup_home ? 'home' : r_pickup_center ? 'lab' : '';
            }

            if (!this.props.selectedAppointmentType.p_pickup && (p_pickup_home || p_pickup_center)) {
                reset = true;
                p_pickup = p_pickup_home ? 'home' : p_pickup_center ? 'lab' : '';
            }

            if (reset) {
                let selectedType = {
                    r_pickup: r_pickup,
                    p_pickup: p_pickup
                };
                setTimeout(() => {
                    this.props.selectLabAppointmentType(selectedType);
                });
            }
        }

        is_home_collection_enabled = r_pickup_home || p_pickup_home;

        // check if the picked address is correct or not
        if (this.props.selectedAppointmentType && (this.props.selectedAppointmentType.r_pickup == 'home' || this.props.selectedAppointmentType.p_pickup == 'home')) {
            if (this.props.address && this.props.address.length && this.props.selectedAddress) {
                this.props.address.map(add => {
                    if (add.id == this.props.selectedAddress) {
                        address_picked_verified = true;
                    }
                });
            }
        }

        let address_picked = address_picked_verified;
        if (this.props.selectedAppointmentType && (this.props.selectedAppointmentType.r_pickup == 'lab' || this.props.selectedAppointmentType.p_pickup == 'lab')) {
            address_picked = true;
        }

        let labCoupons = this.props.labCoupons[this.props.selectedLab] || [];

        let amtBeforeCoupon = 0;
        let total_price = finalPrice;
        let is_home_charges_applicable = false;
        let total_amount_payable_non_plan_user = 0;
        if (is_home_collection_enabled && this.props.selectedAppointmentType && (this.props.selectedAppointmentType.r_pickup == 'home' || this.props.selectedAppointmentType.p_pickup == 'home')) {
            is_home_charges_applicable = true;
        }
        if (is_home_collection_enabled && finalPrice && is_home_charges_applicable) {
            total_price = finalPrice + (labDetail.home_pickup_charges || 0);
        }
        amtBeforeCoupon = total_price;
        let display_radio_cod_price = parseInt(total_price) - (this.props.disCountedLabPrice || 0);

        if (!this.state.is_cashback) {
            total_price = total_price ? parseInt(total_price) - (this.props.disCountedLabPrice || 0) : 0;
        }
        total_price = is_corporate || is_insurance_applicable || is_plan_applicable ? 0 : total_price;
        let is_vip_gold_applicable = /*is_tests_covered_under_vip && */is_selected_user_gold && vip_data && vip_data.is_gold || is_selected_user_under_vip;

        total_amount_payable_non_plan_user = total_price;
        if (is_vip_gold_applicable) {
            total_price = finalMrp;
        }
        let total_wallet_balance = 0;
        if (this.props.userWalletBalance >= 0 && this.props.userCashbackBalance >= 0) {
            total_wallet_balance = this.props.userWalletBalance + this.props.userCashbackBalance;
        }

        let is_add_to_card = _storage2.default.isAgent() || this.state.cart_item || !is_corporate && !is_default_user_insured;
        let total_test_count = pathology_tests.length + radiology_tests.length;
        let is_time_selected_for_all_tests = this.props.selectedSlot && this.props.selectedSlot.selectedTestsTimeSlot ? Object.keys(this.props.selectedSlot.selectedTestsTimeSlot).length : 0;
        let vip_discount_price = 0;
        let total_amount_payable = total_price;

        if (!total_test_count && is_selected_user_gold) {
            is_vip_gold_applicable = true;
        }
        let is_cover_under_vip_gold = false;
        if (vip_data && vip_data.is_enable_for_vip) {

            if (is_selected_user_gold) {
                is_cover_under_vip_gold = true;
                if (finalPrice < vip_data.vip_amount + vip_data.vip_convenience_amount) {
                    vip_data.is_enable_for_vip = false;
                    is_vip_applicable = false;
                    is_selected_user_gold = false;
                    total_amount_payable = total_amount_payable_non_plan_user;
                    total_price = total_amount_payable_non_plan_user;
                } else {
                    total_amount_payable = vip_data.vip_amount + vip_data.vip_convenience_amount + (is_home_charges_applicable ? labDetail.home_pickup_charges : 0) - (this.state.is_cashback ? 0 : this.props.disCountedLabPrice || 0);
                    vip_discount_price = finalMrp - (vip_data.vip_amount + vip_data.vip_convenience_amount);
                }
            } else {

                if (is_vip_applicable) {
                    is_cover_under_vip_gold = true;
                    vip_discount_price = finalMrp - vip_data.vip_amount;
                    total_amount_payable = vip_data.vip_amount + (is_home_charges_applicable ? labDetail.home_pickup_charges : 0) - (this.state.is_cashback ? 0 : this.props.disCountedLabPrice || 0);
                } else if (vip_data.is_gold) {
                    vip_discount_price = finalMrp - (vip_data.vip_gold_price + vip_data.vip_convenience_amount);
                }
            }
        } else {}

        let currentTestsCount = this.props.LABS[this.props.selectedLab] && this.props.LABS[this.props.selectedLab].tests && this.props.LABS[this.props.selectedLab].tests.length;

        let showGoldTogglePaymentMode = !this.props.is_any_user_buy_gold && this.props.selected_vip_plan && this.props.labGoldPredictedPrice && this.props.labGoldPredictedPrice.length && !is_insurance_applicable;

        if (!showGoldTogglePaymentMode && this.props.payment_type == 6 && this.props.show_lab_payment_mode) {
            this.props.select_lab_payment_type(1);
        }

        //SET PAYMENT SUMMARY PRICE
        let display_docprime_discount = finalMrp - finalPrice;
        if (!this.props.is_any_user_buy_gold && this.props.payment_type == 6 && this.props.selected_vip_plan && this.props.selected_vip_plan.tests) {
            display_docprime_discount = parseInt(gold_pricelist_mrp) - (parseInt(gold_pricelist_deal_price) + parseInt(gold_pricelist_convenience));
            total_amount_payable = this.props.selected_vip_plan.deal_price + parseInt(gold_pricelist_deal_price) + parseInt(gold_pricelist_convenience) + (is_home_charges_applicable && labDetail ? labDetail.home_pickup_charges : 0); // - (this.props.disCountedLabPrice || 0)
            total_price = total_amount_payable;
        }
        let extraParams = {
            is_gold_member: vip_data && /*vip_data.is_gold &&*/is_selected_user_gold,
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
            this.state.showConfirmationPopup == 'open' && is_selected_user_insurance_status != 4 ? _react2.default.createElement(_BookingConfirmationPopup2.default, { priceConfirmationPopup: this.priceConfirmationPopup.bind(this), bannerConfirmationPopup: () => {}, isLab: true }) : '',
            this.state.show_lensfit_popup ? _react2.default.createElement(_lensfitPopup2.default, _extends({}, this.props, { lensfit_coupons: this.state.lensfit_coupons, applyLensFitCoupons: this.applyLensFitCoupons.bind(this), closeLensFitPopup: this.closeLensFitPopup.bind(this) })) : '',

            //Show Vip Gold Single Flow Price List
            this.state.showGoldPriceList && _react2.default.createElement(_VipGoldPackage2.default, { historyObj: this.props.history, vipGoldPlans: this.props.labGoldPredictedPrice, toggleGoldPricePopup: this.toggleGoldPricePopup, toggleGoldPlans: val => this.toggleGoldPlans(val), selected_vip_plan: this.props.selected_vip_plan, goToGoldPage: this.goToGoldPage }),
            this.state.paymentBtnClicked ? _react2.default.createElement(
                'div',
                { className: 'bkng-time-overlay' },
                _react2.default.createElement(_Loader2.default, null)
            ) : '',
            _react2.default.createElement(
                'section',
                { className: 'container container-top-margin cls-bnr' },
                _react2.default.createElement(
                    'div',
                    { className: 'row main-row parent-section-row' },
                    _react2.default.createElement(_LeftBar2.default, null),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 col-md-7 col-lg-7 center-column' },
                        this.props.LABS[this.props.selectedLab] && this.props.show_vip_non_login_card ? _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'section',
                                { className: 'dr-profile-screen booking-confirm-screen' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'container-fluid' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row mrb-60' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-12' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'widget mrb-15 mrng-top-12', onClick: () => {
                                                        this.goToProfile(this.props.selectedLab, labDetail.url);
                                                    }, style: { cursor: 'pointer' } },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'widget-content' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'lab-visit-time d-flex jc-spaceb' },
                                                        _react2.default.createElement(
                                                            'h4',
                                                            { className: 'title d-flex' },
                                                            _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                _react2.default.createElement('img', { style: { width: '22px', marginRight: '8px' }, src: "/assets" + "/img/hospital.svg" })
                                                            ),
                                                            labDetail.name && labDetail.name.toLowerCase().includes('thyrocare') ? _react2.default.createElement(
                                                                'p',
                                                                { className: 'lab-crd-txt-pr' },
                                                                labDetail.name.split('-')[0],
                                                                this.props.selectedAppointmentType && (this.props.selectedAppointmentType.r_pickup == 'lab' || this.props.selectedAppointmentType.p_pickup == 'lab') ? _react2.default.createElement(
                                                                    'span',
                                                                    null,
                                                                    labDetail.address || ''
                                                                ) : ''
                                                            ) : _react2.default.createElement(
                                                                'p',
                                                                { className: 'lab-crd-txt-pr' },
                                                                labDetail.name,
                                                                this.props.selectedAppointmentType == 'lab' && (this.props.selectedAppointmentType.r_pickup == 'lab' || this.props.selectedAppointmentType.p_pickup == 'lab') ? _react2.default.createElement(
                                                                    'span',
                                                                    null,
                                                                    labDetail.address || ''
                                                                ) : ''
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'text-primary fw-700 text-sm' },
                                                            'View Profile'
                                                        )
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'login' },
                                                this.getPatientDetails(is_insurance_applicable, center_visit_enabled, is_home_charges_applicable)
                                            ),
                                            disable_all_bookings ? _react2.default.createElement(
                                                'div',
                                                { className: 'widget mrb-15 info-rtl' },
                                                'All bookings are disabled for new retail customers. Please contact us at customercare@docprime.com if you need more information'
                                            ) : '',
                                            _react2.default.createElement(
                                                'div',
                                                { className: `${disable_all_bookings || this.state.disable_page && !_storage2.default.isAgent() ? 'disable-opacity' : ''}` },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'widget mrb-15' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'widget-content' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'lab-visit-time d-flex jc-spaceb' },
                                                            _react2.default.createElement(
                                                                'h4',
                                                                { className: 'title d-flex' },
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    null,
                                                                    _react2.default.createElement('img', { style: { width: '22px', marginRight: '8px' }, src: "/assets" + "/img/flask.svg" })
                                                                ),
                                                                'Test'
                                                            ),
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'float-right  mbl-view-formatting text-right' },
                                                                is_selected_user_under_vip && !is_selected_user_gold ? '' : _react2.default.createElement(
                                                                    'a',
                                                                    { style: { cursor: 'pointer' }, onClick: this.openTests.bind(this), className: 'text-primary fw-700 text-sm' },
                                                                    'Add more/Remove tests'
                                                                ),
                                                                 false /* && !is_vip_gold_applicable && !is_default_user_under_vip*/ ? undefined : '',
                                                                this.props.LABS[this.props.selectedLab].tests && !this.props.LABS[this.props.selectedLab].tests.length && is_default_user_insured ? _react2.default.createElement(
                                                                    'a',
                                                                    { style: { cursor: 'pointer' }, onClick: this.searchTests.bind(this), className: 'text-primary fw-700 text-sm' },
                                                                    'Search tests'
                                                                ) : ''
                                                            )
                                                        ),
                                                        radiology_tests,
                                                        (r_pickup_center || r_pickup_home) && _react2.default.createElement(
                                                            'div',
                                                            null,
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: '' },
                                                                _react2.default.createElement(
                                                                    'div',
                                                                    { className: 'test-lab-radio widget-content test-report lab-appointment-div row' },
                                                                    _react2.default.createElement(
                                                                        'ul',
                                                                        { className: 'inline-list booking-type search-list-radio' },
                                                                        r_pickup_home ? _react2.default.createElement(
                                                                            'li',
                                                                            null,
                                                                            _react2.default.createElement('input', { type: 'radio', id: 'home', name: 'radiology', onChange: this.handlePickupType.bind(this, { r_pickup: 'home', p_pickup: this.props.selectedAppointmentType.p_pickup }), value: 'home', checked: this.props.selectedAppointmentType && this.props.selectedAppointmentType.r_pickup == 'home' }),
                                                                            _react2.default.createElement(
                                                                                'label',
                                                                                { className: 'radio-inline lab-appointment-label text-md fw-500 text-primary', htmlFor: 'home' },
                                                                                ' Home Pick-up'
                                                                            )
                                                                        ) : "",
                                                                        r_pickup_center ? _react2.default.createElement(
                                                                            'li',
                                                                            null,
                                                                            _react2.default.createElement('input', { type: 'radio', id: 'lab', name: 'radiology', onChange: this.handlePickupType.bind(this, { r_pickup: 'lab', p_pickup: this.props.selectedAppointmentType.p_pickup }), value: 'lab', checked: this.props.selectedAppointmentType && this.props.selectedAppointmentType.r_pickup == 'lab' }),
                                                                            ' ',
                                                                            _react2.default.createElement(
                                                                                'label',
                                                                                { className: 'radio-inline lab-appointment-label text-md fw-500 text-primary', htmlFor: 'lab' },
                                                                                'Lab Visit'
                                                                            )
                                                                        ) : ""
                                                                    )
                                                                )
                                                            )
                                                        ),
                                                        pathology_tests,
                                                        (p_pickup_center || p_pickup_home) && _react2.default.createElement(
                                                            'div',
                                                            null,
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: '' },
                                                                _react2.default.createElement(
                                                                    'div',
                                                                    { className: 'test-lab-radio widget-content test-report lab-appointment-div row' },
                                                                    _react2.default.createElement(
                                                                        'ul',
                                                                        { className: 'inline-list booking-type search-list-radio' },
                                                                        p_pickup_home ? _react2.default.createElement(
                                                                            'li',
                                                                            null,
                                                                            _react2.default.createElement('input', { type: 'radio', id: 'phome', name: 'pathology', onChange: this.handlePickupType.bind(this, { p_pickup: 'home', r_pickup: this.props.selectedAppointmentType.r_pickup }), value: 'home', checked: this.props.selectedAppointmentType && this.props.selectedAppointmentType.p_pickup == 'home' }),
                                                                            _react2.default.createElement(
                                                                                'label',
                                                                                { className: 'radio-inline lab-appointment-label text-md fw-500 text-primary', htmlFor: 'phome' },
                                                                                ' Home Pick-up'
                                                                            )
                                                                        ) : "",
                                                                        p_pickup_center ? _react2.default.createElement(
                                                                            'li',
                                                                            null,
                                                                            _react2.default.createElement('input', { type: 'radio', id: 'plab', name: 'pathology', onChange: this.handlePickupType.bind(this, { p_pickup: 'lab', r_pickup: this.props.selectedAppointmentType.r_pickup }), value: 'lab', checked: this.props.selectedAppointmentType && this.props.selectedAppointmentType.p_pickup == 'lab' }),
                                                                            ' ',
                                                                            _react2.default.createElement(
                                                                                'label',
                                                                                { className: 'radio-inline lab-appointment-label text-md fw-500 text-primary', htmlFor: 'plab' },
                                                                                'Lab Visit'
                                                                            )
                                                                        ) : ""
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                ),
                                                is_insurance_applicable && prescriptionPicked || vip_is_prescription_required ? _react2.default.createElement(_uploadPrescription2.default, this.props) : '',
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: '' },
                                                    this.getSelectors(is_insurance_applicable, center_visit_enabled, is_home_charges_applicable)
                                                ),
                                                amtBeforeCoupon != 0 && !is_plan_applicable && !is_insurance_applicable && this.props.payment_type != 6 /*&& !is_vip_gold_applicable && */ ? _react2.default.createElement(
                                                    'div',
                                                    { className: 'widget mrb-15', onClick: this.applyCoupons.bind(this) },
                                                    labCoupons.length ? _react2.default.createElement(
                                                        'div',
                                                        { className: 'widget-content  d-flex jc-spaceb' },
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
                                                                { className: 'title coupon-text', style: { color: 'green', marginRight: 13 } },
                                                                labCoupons[0].code
                                                            ),
                                                            is_corporate ? "" : _react2.default.createElement(
                                                                'span',
                                                                { className: 'visit-time-icon coupon-icon' },
                                                                _react2.default.createElement('img', { onClick: e => {
                                                                        e.stopPropagation();
                                                                        let analyticData = {
                                                                            'Category': 'ConsumerApp', 'Action': 'LabCouponsRemoved', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'lab-coupons-removed', 'couponId': labCoupons[0].coupon_id
                                                                        };
                                                                        _gtm2.default.sendEvent({ data: analyticData });
                                                                        this.setState({ couponCode: '', couponId: '' });
                                                                        this.props.removeLabCoupons(this.props.selectedLab, labCoupons[0].coupon_id);
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
                                                                    _react2.default.createElement('img', { src: "/assets" + "/img/ofr-cpn.svg", className: 'visit-time-icon' })
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
                                                showGoldTogglePaymentMode && this.props.show_lab_payment_mode ? _react2.default.createElement(
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
                                                        _react2.default.createElement(
                                                            _react2.default.Fragment,
                                                            null,
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'payment-summary-content' },
                                                                _react2.default.createElement(
                                                                    'div',
                                                                    { className: 'payment-detail d-flex', onClick: e => {
                                                                            e.preventDefault();
                                                                            this.props.select_lab_payment_type(6);
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
                                                                                        this.props.select_lab_payment_type(6);
                                                                                    } },
                                                                                ' Lab booking with ',
                                                                                _react2.default.createElement('img', { className: 'sng-gld-img', src: "/assets" + '/img/gold-lg.png' })
                                                                            ),
                                                                            gold_pricelist_deal_price == gold_pricelist_mrp ? _react2.default.createElement(
                                                                                'span',
                                                                                { className: 'payment-mode-amt', onClick: e => {
                                                                                        e.stopPropagation();
                                                                                        e.preventDefault();
                                                                                        this.props.select_lab_payment_type(6);
                                                                                    } },
                                                                                `₹${gold_pricelist_deal_price + gold_pricelist_convenience}`
                                                                            ) : _react2.default.createElement(
                                                                                'span',
                                                                                { className: 'payment-mode-amt', onClick: e => {
                                                                                        e.stopPropagation();
                                                                                        e.preventDefault();
                                                                                        this.props.select_lab_payment_type(6);
                                                                                    } },
                                                                                `₹${gold_pricelist_deal_price + gold_pricelist_convenience}`,
                                                                                ' ',
                                                                                _react2.default.createElement(
                                                                                    'b',
                                                                                    { className: 'gd-cut-prc' },
                                                                                    `₹${gold_pricelist_mrp}`
                                                                                )
                                                                            )
                                                                        ),
                                                                        _react2.default.createElement('input', { checked: this.props.payment_type == 6, type: 'radio', name: 'payment-mode', value: 'on' }),
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
                                                                                `Save ₹${vip_discount_price}`
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
                                                            _react2.default.createElement('hr', null)
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'payment-summary-content', onClick: e => {
                                                                    e.preventDefault();
                                                                    this.props.select_lab_payment_type(1);
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
                                                                                this.props.select_lab_payment_type(1);
                                                                            } },
                                                                        _react2.default.createElement(
                                                                            'h4',
                                                                            { className: 'title payment-amt-label' },
                                                                            'Only Lab booking',
                                                                            total_price == display_radio_cod_price ? _react2.default.createElement(
                                                                                'span',
                                                                                { className: 'payment-sub-heading' },
                                                                                'No discounts '
                                                                            ) : ''
                                                                        ),
                                                                        _react2.default.createElement(
                                                                            'span',
                                                                            { className: 'payment-mode-amt' },
                                                                            display_radio_cod_price
                                                                        )
                                                                    ),
                                                                    _react2.default.createElement('input', { checked: this.props.payment_type == 1, type: 'radio', name: 'payment-mode' }),
                                                                    _react2.default.createElement('span', { className: 'doc-checkmark' })
                                                                )
                                                            )
                                                        )
                                                    )
                                                ) : '',
                                                is_corporate ? "" : _react2.default.createElement(
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
                                                        is_plan_applicable || is_insurance_applicable ? _react2.default.createElement(
                                                            'div',
                                                            { className: 'payment-summary-content' },
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'payment-detail d-flex' },
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    { className: 'payment-content fw-500' },
                                                                    'MRP'
                                                                ),
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    { className: 'payment-content fw-500' },
                                                                    '\u20B9 ',
                                                                    total_price || 0
                                                                )
                                                            )
                                                        ) : _react2.default.createElement(
                                                            'div',
                                                            { className: 'payment-summary-content' },
                                                            tests_with_price,
                                                            vip_data && is_vip_applicable && !(vip_data /*&& vip_data.is_gold && is_tests_covered_under_vip*/ && is_selected_user_gold) ? _react2.default.createElement(
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
                                                                    total_price - vip_data.vip_amount
                                                                )
                                                            ) : '',
                                                            vip_data /*&& vip_data.is_gold */ && is_selected_user_gold && vip_discount_price ? _react2.default.createElement(
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
                                                            total_price && is_home_collection_enabled && is_home_charges_applicable ? _react2.default.createElement(
                                                                'div',
                                                                { className: 'payment-detail d-flex' },
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    { className: 'payment-content' },
                                                                    'Home Pickup Charges'
                                                                ),
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    { className: 'payment-content fw-500' },
                                                                    '\u20B9 ',
                                                                    labDetail.home_pickup_charges || 0
                                                                )
                                                            ) : "",
                                                            display_docprime_discount && !is_vip_applicable && !(vip_data /* && vip_data.is_gold && is_tests_covered_under_vip*/ && is_selected_user_gold) ? _react2.default.createElement(
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
                                                            this.props.disCountedLabPrice && !this.state.is_cashback && this.props.payment_type != 6 /*&& !is_vip_applicable && !(vip_data && vip_data.is_gold && is_selected_user_gold && is_tests_covered_under_vip) && this.props.payment_type!=6*/ ? _react2.default.createElement(
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
                                                                    this.props.disCountedLabPrice
                                                                )
                                                            ) : ''
                                                        ),
                                                        _react2.default.createElement('hr', null),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'lab-visit-time test-report' },
                                                            _react2.default.createElement(
                                                                'h4',
                                                                { className: 'title payment-amt-label' },
                                                                'Amount Payable'
                                                            ),
                                                            _react2.default.createElement(
                                                                'h5',
                                                                { className: 'payment-amt-value fw-500' },
                                                                '\u20B9  ',
                                                                total_amount_payable
                                                            )
                                                        ),
                                                        is_insurance_applicable ? _react2.default.createElement(
                                                            'div',
                                                            { className: 'ins-val-bx ins-vl-bx-o' },
                                                            'Covered Under Insurance'
                                                        ) : '',
                                                        this.state.is_cashback && this.props.disCountedLabPrice ? _react2.default.createElement(
                                                            'div',
                                                            { className: 'csh-back-applied-container' },
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'csh-mny-applied' },
                                                                '+ \u20B9 ',
                                                                this.props.disCountedLabPrice,
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
                                                this.props.payment_type != 6 && !is_insurance_applicable && total_wallet_balance && total_wallet_balance > 0 ? _react2.default.createElement(
                                                    'div',
                                                    { className: "widget mrb-15" + (this.state.is_payment_coupon_applied ? " disable_coupon" : "") },
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
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'mrt-20 d-flex align-items-start labTest-dtls' },
                                                    _react2.default.createElement('img', { src: "/assets" + '/img/customer-icons/tick.svg', style: { marginRight: 8, width: 20, marginTop: 2 } }),
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'fw-500', style: { flex: 1 } },
                                                        'By continuing, you are authorizing Docprime to directly share lab test reports with you.'
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            this.state.showPincodePopup ? _react2.default.createElement(_PincodePopup2.default, { setPincode: this.setPincode.bind(this), toggle: this.toggle.bind(this, 'showPincodePopup') }) : '',
                            this.state.pincodeMismatchError ? _react2.default.createElement(_PincodeErrorPopup2.default, { clickPopUp: this.clickPincodeErrrorPopUp.bind(this), toggle: this.toggle.bind(this, 'pincodeMismatchError') }) : ''
                        ) : _react2.default.createElement(_Loader2.default, null),
                        this.state.openCancellation ? _react2.default.createElement(_cancellation2.default, { props: this.props, toggle: this.toggle.bind(this, 'openCancellation'), is_insurance_applicable: is_insurance_applicable }) : "",
                        _react2.default.createElement(
                            'div',
                            { className: `${disable_all_bookings ? 'disable-opacity' : ''} fixed sticky-btn p-0 v-btn  btn-lg horizontal bottom no-round text-lg buttons-addcart-container ${!is_add_to_card && this.props.ipd_chat && this.props.ipd_chat.showIpdChat ? 'ipd-foot-btn-duo' : ''} ${this.state.disable_page && !_storage2.default.isAgent() ? 'disable-all' : ''}` },
                            _storage2.default.isAgent() || this.state.cart_item || !is_corporate && !is_default_user_insured && this.props.payment_type != 6 ? _react2.default.createElement(
                                'button',
                                { disabled: this.state.pay_btn_loading, className: "add-shpng-cart-btn" + (!this.state.cart_item ? "" : " update-btn") + (this.state.pay_btn_loading ? " disable-all" : ""), 'data-disabled': !(patient && this.props.selectedSlot && this.props.selectedSlot.selectedTestsTimeSlot) || this.state.loading, onClick: this.proceed.bind(this, total_test_count, address_picked, is_time_selected_for_all_tests, patient, true, total_amount_payable, total_wallet_balance, prescriptionPicked, is_selected_user_insurance_status, {}, vip_is_prescription_required) },
                                this.state.cart_item ? "" : _react2.default.createElement('img', { src: "/assets" + "/img/cartico.svg" }),
                                this.state.is_spo_appointment || this.props.payment_type == 6 && _storage2.default.isAgent() ? 'Send SMS' : this.state.cart_item ? "Update" : "Add to Cart"
                            ) : '',
                            _storage2.default.isAgent() && this.props.payment_type == 6 ? _react2.default.createElement(
                                'button',
                                { disabled: this.state.pay_btn_loading, className: "add-shpng-cart-btn" + (!this.state.cart_item ? "" : " update-btn") + (this.state.pay_btn_loading ? " disable-all" : ""), 'data-disabled': !(patient && this.props.selectedSlot && this.props.selectedSlot.selectedTestsTimeSlot) || this.state.loading, onClick: this.proceed.bind(this, total_test_count, address_picked, is_time_selected_for_all_tests, patient, true, total_amount_payable, total_wallet_balance, prescriptionPicked, is_selected_user_insurance_status, { sendWhatsup: true }, vip_is_prescription_required) },
                                _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/wa-logo-sm.png' }),
                                'Send on Whatsapp'
                            ) : '',
                            _storage2.default.isAgent() || this.state.cart_item ? "" : _react2.default.createElement(
                                'button',
                                { disabled: this.state.pay_btn_loading, className: `v-btn-primary book-btn-mrgn-adjust pdd-12 ${this.state.pay_btn_loading ? " disable-all" : ""}`, id: 'confirm_booking', 'data-disabled': !(patient && this.props.selectedSlot && this.props.selectedSlot.selectedTestsTimeSlot) || this.state.loading, onClick: this.proceed.bind(this, total_test_count, address_picked, is_time_selected_for_all_tests, patient, false, total_amount_payable, total_wallet_balance, prescriptionPicked, is_selected_user_insurance_status, {}, vip_is_prescription_required) },
                                this.getBookingButtonText(total_wallet_balance, total_price, is_vip_applicable, vip_data && vip_data.vip_amount ? vip_data.vip_amount : 0, extraParams)
                            )
                        ),
                        this.state.error ? _react2.default.createElement(_bookingErrorPopUp2.default, { message: this.state.error, closeErrorPopup: this.closeErrorPopup }) : ''
                    ),
                    _react2.default.createElement(_RightBar2.default, { extraClass: ' chat-float-btn-2', type: 'lab', noChatButton: true, msgTemplate: 'gold_general_template' })
                )
            ),
            _react2.default.createElement(_staticDisclaimer2.default, null),
            this.state.paymentData ? _react2.default.createElement(_paymentForm2.default, { multiOrder: this.props.payment_type === 6, paymentData: this.state.paymentData, refs: 'lab' }) : ""
        );
    }
}

exports.default = BookingSummaryViewNew;

/***/ }),

/***/ "./dev/js/components/diagnosis/bookingSummary/PincodeErrorPopup.js":
/*!*************************************************************************!*\
  !*** ./dev/js/components/diagnosis/bookingSummary/PincodeErrorPopup.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PincodePopupError extends _react2.default.Component {

	render() {

		return _react2.default.createElement(
			"div",
			{ className: "search-el-popup-overlay ", onClick: () => this.props.toggle() },
			_react2.default.createElement(
				"div",
				{ className: "search-el-popup" },
				_react2.default.createElement(
					"div",
					{ className: "widget pos-relative" },
					_react2.default.createElement(
						"div",
						{ className: "widget-content padiing-srch-el pad-srch" },
						_react2.default.createElement(
							"div",
							{ className: "cross-btn", onClick: () => this.props.toggle() },
							_react2.default.createElement("img", { src: "/assets" + "/img/icons/close.png", alt: "close" })
						),
						_react2.default.createElement(
							"h4",
							{ className: "alrt-head" },
							"Alert !"
						),
						_react2.default.createElement(
							"p",
							{ className: "srch-el-conent" },
							"It looks like pincode and address you have entered are not of the same location.Please change one of them to proceed"
						),
						_react2.default.createElement(
							"div",
							{ className: "search-el-btn-container" },
							_react2.default.createElement(
								"button",
								{ onClick: () => this.props.clickPopUp(1) },
								"Change Pincode"
							),
							_react2.default.createElement(
								"button",
								{ onClick: () => this.props.clickPopUp(2) },
								"Change Address"
							)
						)
					)
				)
			)
		);
	}
}

exports.default = PincodePopupError;

/***/ }),

/***/ "./dev/js/components/diagnosis/bookingSummary/PincodePopup.js":
/*!********************************************************************!*\
  !*** ./dev/js/components/diagnosis/bookingSummary/PincodePopup.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PincodePoupupView extends _react2.default.Component {

    constructor(props) {
        super(props);
        this.state = {
            pincode: ''
        };
    }

    validatePincode() {
        if (this.state.pincode.match(/^[0-9]{6}$/)) {
            return true;
        }
        return false;
    }

    submitPincode(e) {
        e.stopPropagation();
        if (this.validatePincode()) {
            this.props.setPincode(this.state.pincode);
        } else {
            setTimeout(() => {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Valid Pincode" });
            }, 500);
        }
    }

    _handleContinuePress(e) {
        if (e.key === 'Enter') {
            this.submitPincode(e);
        }
    }

    inputHandler(e) {
        e.target.value.length <= 6 ? this.setState({ pincode: e.target.value }) : '';
    }

    render() {
        return _react2.default.createElement(
            'section',
            { className: 'error-msg-pop' },
            _react2.default.createElement('div', { className: 'cancel-overlay', onClick: () => this.props.toggle() }),
            _react2.default.createElement(
                'div',
                { className: 'popup-error popup-timeslot' },
                _react2.default.createElement(
                    'div',
                    { className: 'error-head' },
                    'Check time slot !'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'cross-btn', onClick: () => this.props.toggle() },
                    _react2.default.createElement('img', { src: "/assets" + "/img/icons/close.png", alt: 'close' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'checking-loc' },
                    _react2.default.createElement(
                        'p',
                        { className: 'error-msg' },
                        'Please enter your pincode, so that we can find the best available time slot '
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'InputField' },
                        _react2.default.createElement('input', { type: 'number', className: 'form-in', placeholder: 'Enter your pincode', onChange: this.inputHandler.bind(this), value: this.state.pincode, onKeyPress: this._handleContinuePress.bind(this) })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'wait-for-loc' },
                    _react2.default.createElement('img', { src: "/assets" + "/img/loader_orange.gif", alt: 'loader' }),
                    _react2.default.createElement(
                        'p',
                        { className: 'error-msg' },
                        'Please wait, while we are finding best available time for you'
                    )
                ),
                _react2.default.createElement(
                    'a',
                    { href: 'Javascript:void(0);', onClick: this.submitPincode.bind(this), className: 'btn-chk-avl' },
                    'Check Availability'
                )
            )
        );
    }
}

exports.default = PincodePoupupView;

/***/ }),

/***/ "./dev/js/components/diagnosis/bookingSummary/VisitTimeNew.js":
/*!********************************************************************!*\
  !*** ./dev/js/components/diagnosis/bookingSummary/VisitTimeNew.js ***!
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MONTHS = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const WEEK_DAYS = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];


class VisitTimeNew extends _react2.default.Component {
    constructor(props) {
        super(props);
        let is_thyrocare = this.is_thyrocare_lab(props);
        this.state = {
            dateTimeSelectedValue: props.selectedDateFormat ? props.selectedDateFormat : this.getFormattedDate(is_thyrocare ? new Date(this.getDateAfter(1)) : new Date())
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedDateFormat && nextProps.selectedDateFormat != this.state.dateTimeSelectedValue) {
            this.setState({ dateTimeSelectedValue: nextProps.selectedDateFormat });
        }
    }

    selectDate(e) {
        let data = {
            'Category': 'ConsumerApp', 'Action': 'LabDateClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-date-clicked'
        };

        _gtm2.default.sendEvent({ data: data });
        if (e.target.value) {
            let date = e.target.value;
            this.setState({ dateTimeSelectedValue: date });
            let slot = { time: {} };
            this.props.selectLabTimeSLot(slot, false, date);
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

    getDateAfter(i = 0) {
        return new Date().setDate(new Date().getDate() + i);
    }

    is_thyrocare_lab(props) {
        return props.LABS && props.LABS[props.selectedLab] && props.LABS[props.selectedLab].lab && props.LABS[props.selectedLab].lab.is_thyrocare;
    }

    goToTime() {
        if (this.props.selectedSlot && this.props.selectedSlot['all']) {
            this.props.navigateTo('time', this.props.is_insurance_applicable, false);
        } else {
            this.props.navigateTo('time', this.props.is_insurance_applicable, true);
        }
    }

    render() {

        let is_thyrocare = this.is_thyrocare_lab(this.props);

        let unique_common_tests = null;
        if (this.props.LABS[this.props.selectedLab] && this.props.LABS[this.props.selectedLab].tests && this.props.selectedSlot && this.props.selectedSlot['all'] && this.props.selectedSlot.selectedTestsTimeSlot) {
            this.props.LABS[this.props.selectedLab].tests.map(x => {
                if (this.props.selectedSlot.selectedTestsTimeSlot[x.test_id]) {} else {
                    unique_common_tests = true;
                }
            });
        }

        return _react2.default.createElement(
            'div',
            { className: `widget mrb-15 ${this.props.timeError ? 'rnd-error-nm' : ''}` },
            _react2.default.createElement(
                'div',
                { className: 'widget-content pos-relative' },
                this.props.LABS[this.props.selectedLab] && this.props.LABS[this.props.selectedLab].lab && this.props.LABS[this.props.selectedLab].lab.is_thyrocare ? this.props.pincode ? _react2.default.createElement(
                    'div',
                    { className: 'area-pin', onClick: () => this.props.toggle() },
                    'Area Pincode - ',
                    _react2.default.createElement(
                        'b',
                        null,
                        this.props.pincode
                    ),
                    _react2.default.createElement(
                        'a',
                        { href: 'javascript:void(0);' },
                        'Change'
                    )
                ) : _react2.default.createElement(
                    'div',
                    { className: 'area-pin', onClick: () => this.props.toggle() },
                    'Add Area Pincode  ',
                    _react2.default.createElement('b', null),
                    _react2.default.createElement(
                        'a',
                        { href: 'javascript:void(0);' },
                        'Add'
                    )
                ) : '',
                _react2.default.createElement(
                    'div',
                    { className: 'lab-visit-time d-flex jc-spaceb' },
                    _react2.default.createElement(
                        'h4',
                        { className: 'title d-flex' },
                        _react2.default.createElement(
                            'span',
                            null,
                            _react2.default.createElement('img', { style: { width: '18px', marginRight: '8px' }, src: "/assets" + "/img/watch-date.svg" })
                        ),
                        'Visit Time'
                    ),
                    !(this.props.selectedSlot && this.props.selectedSlot.selectedTestsTimeSlot && this.props.LABS[this.props.selectedLab]) && _react2.default.createElement(
                        'a',
                        { href: '', onClick: e => {
                                e.preventDefault();
                                e.stopPropagation();
                                this.props.navigateTo('time', this.props.is_insurance_applicable);
                            }, className: 'text-primary fw-700 text-sm' },
                        'Select Time'
                    )
                ),
                this.props.selectedSlot && this.props.selectedSlot.selectedTestsTimeSlot && this.props.LABS[this.props.selectedLab] ? _react2.default.createElement(
                    'div',
                    { className: 'vst-time-cont' },
                    _react2.default.createElement(
                        _react2.default.Fragment,
                        null,
                        !unique_common_tests && this.props.selectedSlot['all'] && this.props.selectedSlot['all'].time ? _react2.default.createElement(
                            'div',
                            { className: 'vst-content-bl' },
                            _react2.default.createElement(
                                'p',
                                { className: 'rdo-time-vst' },
                                new Date(this.props.selectedSlot['all'].date).toDateString() || "",
                                ' ',
                                this.props.selectedSlot['all'].time.text ? "|" : "",
                                ' ',
                                this.props.selectedSlot['all'].time.text,
                                ' ',
                                this.props.selectedSlot['all'].time.text ? this.props.selectedSlot['all'].time.value >= 12 ? 'PM' : 'AM' : ''
                            )
                        ) : this.props.LABS[this.props.selectedLab].tests.map((test, key) => {
                            return _react2.default.createElement(
                                'div',
                                { className: 'vst-content-bl', key: key },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'vst-tst-name' },
                                    test.test.name
                                ),
                                this.props.selectedSlot.selectedTestsTimeSlot[test.test_id] ? _react2.default.createElement(
                                    'p',
                                    { className: 'rdo-time-vst' },
                                    new Date(this.props.selectedSlot.selectedTestsTimeSlot[test.test_id].date).toDateString() || "",
                                    ' ',
                                    this.props.selectedSlot.selectedTestsTimeSlot[test.test_id].time.text ? "|" : "",
                                    ' ',
                                    this.props.selectedSlot.selectedTestsTimeSlot[test.test_id].time.text,
                                    ' ',
                                    this.props.selectedSlot.selectedTestsTimeSlot[test.test_id].time.text ? this.props.selectedSlot.selectedTestsTimeSlot[test.test_id].time.value >= 12 ? 'PM' : 'AM' : ''
                                ) : _react2.default.createElement(
                                    'a',
                                    { href: '', onClick: e => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            this.goToTime();
                                        }, className: 'text-primary fw-700 text-sm' },
                                    'Select Time'
                                )
                            );
                        })
                    ),
                    _react2.default.createElement(
                        'a',
                        { href: '', onClick: e => {
                                e.preventDefault();
                                e.stopPropagation();
                                this.props.navigateTo('time', this.props.is_insurance_applicable);
                            }, className: 'text-primary text-primary d-block fw-700 text-sm text-right fw-700 text-sm' },
                        'Change Time'
                    )
                ) : '',
                _react2.default.createElement(
                    'p',
                    { className: 'appmnt-avl' },
                    'The appointment is subject to confirmation from the Lab. '
                )
            )
        );
    }
}

exports.default = VisitTimeNew;

/***/ }),

/***/ "./dev/js/components/diagnosis/bookingSummary/cancellation.js":
/*!********************************************************************!*\
  !*** ./dev/js/components/diagnosis/bookingSummary/cancellation.js ***!
  \********************************************************************/
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
                { className: "widget-header text-center action-screen-header", style: { position: 'relative' } },
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
                { className: "cancel-policy-text cancelPolicyHeight" },
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
                                "Third Party Cancellation (Provider Unavailable) - "
                            ),
                            "Occasionally, appointments may be canceled or postponed due to unavailability of the service provider. Should this occur, we will contact or inform you and you may reschedule your appointment as per your convenience."
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

/***/ "./dev/js/components/diagnosis/bookingSummary/index.js":
/*!*************************************************************!*\
  !*** ./dev/js/components/diagnosis/bookingSummary/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BookingSummaryViewNew = __webpack_require__(/*! ./BookingSummaryViewNew.js */ "./dev/js/components/diagnosis/bookingSummary/BookingSummaryViewNew.js");

var _BookingSummaryViewNew2 = _interopRequireDefault(_BookingSummaryViewNew);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _BookingSummaryViewNew2.default;

/***/ }),

/***/ "./dev/js/components/diagnosis/bookingSummary/paymentSummary.js":
/*!**********************************************************************!*\
  !*** ./dev/js/components/diagnosis/bookingSummary/paymentSummary.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ({ toggle, finalPrice, finalMrp, is_home_collection_enabled, home_pickup_charges }) => {
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
                    "Lab Fees"
                ),
                _react2.default.createElement(
                    "p",
                    { className: "payment-content fw-500" },
                    "\u20B9 ",
                    finalMrp
                )
            ),
            is_home_collection_enabled ? _react2.default.createElement(
                "div",
                { className: "payment-content-div" },
                _react2.default.createElement(
                    "p",
                    { className: "payment-content" },
                    "Home Pickup Charges"
                ),
                _react2.default.createElement(
                    "p",
                    { className: "payment-content fw-500" },
                    "\u20B9 ",
                    home_pickup_charges || 0
                )
            ) : "",
            _react2.default.createElement(
                "div",
                { className: "payment-content-div" },
                _react2.default.createElement(
                    "p",
                    { className: "payment-content" },
                    "docprime Discount"
                ),
                _react2.default.createElement(
                    "p",
                    { className: "payment-content fw-500" },
                    "\u20B9 ",
                    finalMrp - finalPrice
                )
            ),
            is_home_collection_enabled ? _react2.default.createElement(
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
                    "\u20B9 ",
                    finalPrice + home_pickup_charges
                )
            ) : _react2.default.createElement(
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
                    "\u20B9 ",
                    finalPrice
                )
            ),
            is_home_collection_enabled ? _react2.default.createElement(
                "div",
                { className: "payment-content-div" },
                _react2.default.createElement(
                    "p",
                    { className: "payment-content fw-500" },
                    "Amount Payable"
                ),
                _react2.default.createElement(
                    "p",
                    { className: "payment-content fw-500" },
                    "\u20B9 ",
                    finalPrice + home_pickup_charges
                )
            ) : _react2.default.createElement(
                "div",
                { className: "payment-content-div" },
                _react2.default.createElement(
                    "p",
                    { className: "payment-content fw-500" },
                    "Amount Payable"
                ),
                _react2.default.createElement(
                    "p",
                    { className: "payment-content fw-500" },
                    "\u20B9 ",
                    finalPrice
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

/***/ "./dev/js/components/diagnosis/bookingSummary/pickupAddress.js":
/*!*********************************************************************!*\
  !*** ./dev/js/components/diagnosis/bookingSummary/pickupAddress.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PickupAddress extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getAddressStr(address) {
        let addressStr = "";
        addressStr = address.address;
        if (address.land_mark) {
            addressStr += ", " + address.land_mark;
        }
        if (address.locality) {
            addressStr += ", " + address.locality;
        }
        return addressStr;
    }

    render() {

        let addressStr = "";

        if (this.props.selectedAddress) {
            this.props.address.map(add => {
                if (add.id == this.props.selectedAddress) {
                    addressStr = add.address;
                    if (add.locality) {
                        addressStr += ", " + add.locality;
                    }
                }
            });
        }

        return _react2.default.createElement(
            "div",
            { className: `widget mrb-15 ${this.props.addressError == false || addressStr.length ? '' : 'rnd-error-nm'}` },
            _react2.default.createElement(
                "div",
                { className: "widget-content" },
                _react2.default.createElement(
                    "div",
                    { className: "lab-visit-time d-flex jc-spaceb" },
                    _react2.default.createElement(
                        "h4",
                        { style: {}, className: "title d-flex" },
                        _react2.default.createElement(
                            "span",
                            null,
                            _react2.default.createElement("img", { style: { width: '18px', marginRight: '8px' }, src: "/assets" + "/img/home-clean.svg" })
                        ),
                        "Pickup Address"
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "mbl-view-formatting text-right" },
                        _react2.default.createElement(
                            "p",
                            { className: "date-time", style: { position: 'relative' } },
                            addressStr,
                            " ",
                            this.props.addressError == false || addressStr.length ? '' : _react2.default.createElement(
                                "span",
                                { className: "fw-500", style: { color: 'red', fontSize: 11, position: 'absolute', top: '-8px', right: 0 } },
                                "Required"
                            )
                        ),
                        _react2.default.createElement(
                            "a",
                            { href: "", className: "text-primary fw-700 text-sm", href: "#", onClick: e => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    this.props.navigateTo();
                                } },
                            addressStr ? "Change" : "Add",
                            " Address"
                        )
                    )
                )
            )
        )

        /*
                    <div className="lab-visit-time">
                        <h4 className="title"><span><img src={ASSETS_BASE_URL + "/img/icons/home-orange.svg"} className="visit-time-icon" /></span>Pickup Address <span className="float-right"><a href="#" onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            this.props.navigateTo()
                        }} className="text-primary fw-700 text-sm">{addressStr ? "Change" : "Pick"}</a></span></h4>
                        <p className="date-time" style={{ position: 'relative' }}>{addressStr} {this.props.addressError == false || addressStr.length ? '' : <span className="fw-500" style={{ color: 'red', fontSize: 11, position: 'absolute', top: '-8px', right: 0 }}>Required</span>}</p>
                    </div>*/
        ;
    }
}

exports.default = PickupAddress;

/***/ }),

/***/ "./dev/js/components/diagnosis/bookingSummary/uploadPrescription.js":
/*!**************************************************************************!*\
  !*** ./dev/js/components/diagnosis/bookingSummary/uploadPrescription.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _Loader = __webpack_require__(/*! ../../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");
const Compress = __webpack_require__(/*! compress.js */ "compress.js");

class UploadPrescription extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataUrl: null,
            zoomImageUrl: null,
            zoomImage: false,
            openPdf: false,
            openPdfUrl: null,
            isLoading: false
        };
    }

    pickFile(e) {
        if (e.target.files && e.target.files[0]) {
            let file = e.target.files[0];
            if (e.target.files[0] && e.target.files[0].name.includes('.pdf')) {
                this.finishCrop(null, file);
            } else {
                const compress = new Compress();
                compress.compress([file], {
                    quality: 1,
                    maxWidth: 1000,
                    maxHeight: 1000
                }).then(results => {
                    const img1 = results[0];
                    const base64str = img1.data;
                    const imgExt = img1.ext;
                    const file = Compress.convertBase64ToFile(base64str, imgExt);
                    this.getBase64(file, dataUrl => {
                        this.finishCrop(dataUrl, null);
                        this.setState({ dataUrl });
                    });
                }).catch(e => {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Error uploading image." });
                });
            }
        }
    }

    getBase64(file, cb) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    finishCrop(dataUrl, file) {
        let file_blob_data;
        if (dataUrl) {
            file_blob_data = this.dataURItoBlob(dataUrl);
        }
        let mem_data = {};
        let existingData;
        let img_tag = "prescription_file";
        this.setState({
            dataUrl: null, isLoading: true
        }, () => {
            let form_data = new FormData();
            if (file) {
                form_data.append(img_tag, file, "imageFilename.pdf");
            } else {
                form_data.append(img_tag, file_blob_data, "imageFilename.jpeg");
            }
            this.props.uploadPrescription(form_data, (data, err) => {
                if (data) {
                    mem_data.id = data.data.user;
                    mem_data.img_path_ids = [];
                    if (this.props.user_prescriptions.length > 0) {
                        Object.entries(this.props.user_prescriptions).map(function ([key, value]) {
                            // console.log(value)
                            mem_data.img_path_ids = value.img_path_ids;
                            mem_data.img_path_ids.push({ id: data.id, image: data.data.prescription_file });
                            // if(value.id == member_id){
                            // mem_data.img_path_ids = value.img_path_ids
                            // mem_data.img_path_ids.push({id: data.id, image:data.data.prescription_file})
                            // }else{
                            //     mem_data.img_path_ids = []
                            //     mem_data.img_path_ids.push({id: data.id, image:data.data.prescription_file})
                            // }
                        });
                    } else {
                        mem_data.img_path_ids.push({ id: data.id, image: data.data.prescription_file });
                    }
                    this.setState({ isLoading: false });
                    this.props.savePrescription(mem_data);
                }
            });
        });
    }

    dataURItoBlob(dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    }

    removeImage(img) {
        this.props.user_prescriptions[0].img_path_ids.map((data, i) => {
            if (data.image == img) {
                this.props.removePrescription(img);
            }
        });
    }

    render() {
        let Uploaded_image_data = [];
        let img_url = [];
        let pdf_url = [];
        if (this.props.user_prescriptions && this.props.user_prescriptions.length > 0) {
            this.props.user_prescriptions[0].img_path_ids.map((data, i) => {
                if (data.image.includes('pdf')) {
                    pdf_url.push(data.image);
                } else {
                    img_url.push(data.image);
                }
            });
        }
        let show_upload = true;
        if (img_url.length > 0 || pdf_url.length > 0) {
            show_upload = false;
        }
        return _react2.default.createElement(
            'div',
            { className: 'widget mrb-15' },
            _react2.default.createElement(
                'div',
                { className: 'widget-content white-upld-div' },
                _react2.default.createElement(
                    'div',
                    { className: 'insurance-proofs-cont' },
                    _react2.default.createElement(
                        'div',
                        { className: 'upload-addbtn-cont' },
                        _react2.default.createElement(
                            'div',
                            { className: 'ins-upld-cont' },
                            _react2.default.createElement(
                                'div',
                                { className: 'ins-sb-frst-img' },
                                _react2.default.createElement('img', { src: "/assets" + "/img/vectorupl.png" })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'ins-upload-text' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'ins-upload-para-text' },
                                    'Upload prescription'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'ins-file-tyle' },
                                    'File type: jpg, jpeg, png, pdf '
                                )
                            )
                        ),
                        show_upload ? _react2.default.createElement(
                            'span',
                            { className: 'ins-proof-upload-btn', onClick: () => {
                                    document.getElementById('imageFilePicker').click();
                                    document.getElementById('imageFilePicker').value = "";
                                } },
                            _react2.default.createElement('img', { src: "/assets" + "/img/ins-up-ico.svg" }),
                            ' Upload',
                            _react2.default.createElement('input', { type: 'file', style: { display: 'none' }, id: 'imageFilePicker', onChange: this.pickFile.bind(this), accept: 'image/x-png,image/jpeg,image/jpg,.pdf' })
                        ) : ''
                    ),
                    this.state.isLoading && show_upload ? _react2.default.createElement(
                        'div',
                        { className: 'ins-prf-img-grd d-block' },
                        _react2.default.createElement(
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
                            )
                        )
                    ) : '',
                    !show_upload ? _react2.default.createElement(
                        'div',
                        { className: 'upload-img-section' },
                        img_url && img_url.length > 0 ? img_url.map((data, i) => {
                            return _react2.default.createElement(
                                'div',
                                { key: i, className: 'ins-prf-img-grd' },
                                _react2.default.createElement('img', { className: 'img-fluid ins-up-img-ic', src: data }),
                                _react2.default.createElement('img', { className: 'ins-prf-cls', onClick: this.removeImage.bind(this, data), src: 'https://cdn.docprime.com/cp/assets/img/icons/close.png' })
                            );
                        }) : '',
                        pdf_url && pdf_url.length > 0 ? pdf_url.map((data, i) => {
                            return _react2.default.createElement(
                                'div',
                                { className: 'ins-prf-img-grd', key: i },
                                _react2.default.createElement('img', { className: 'img-fluid ins-up-img-ic', src: "/assets" + "/img/pdf.jpg" }),
                                _react2.default.createElement('img', { className: 'ins-prf-cls', onClick: this.removeImage.bind(this, data), src: 'https://cdn.docprime.com/cp/assets/img/icons/close.png' })
                            );
                        }) : '',
                        this.state.isLoading ? _react2.default.createElement(
                            'div',
                            { className: 'ins-prf-img-grd' },
                            _react2.default.createElement(
                                'div',
                                { className: 'loader-for-chat-div mt-0' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'loader-for-chat mb-0', style: { width: '50px' } },
                                    _react2.default.createElement('span', null),
                                    _react2.default.createElement('span', null),
                                    _react2.default.createElement('span', null),
                                    _react2.default.createElement('span', null)
                                )
                            )
                        ) : '',
                        (img_url && img_url.length || pdf_url && pdf_url.length) >= 5 ? '' : _react2.default.createElement(
                            'span',
                            { className: 'ins-prf-addMore', onClick: () => {
                                    document.getElementById('imageFilePicker_back').click();
                                    document.getElementById('imageFilePicker_back').value = "";
                                } },
                            _react2.default.createElement('img', { className: 'ins-addico', src: "/assets" + "/img/ins-add-ico.svg" }),
                            'Add More',
                            _react2.default.createElement('input', { type: 'file', style: { display: 'none' }, id: 'imageFilePicker_back', onChange: this.pickFile.bind(this), accept: 'image/x-png,image/jpeg,image/jpg,.pdf' })
                        )
                    ) : ''
                )
            )
        );
    }
}
exports.default = UploadPrescription;

/***/ }),

/***/ "./dev/js/containers/diagnosis/BookingSummary.js":
/*!*******************************************************!*\
  !*** ./dev/js/containers/diagnosis/BookingSummary.js ***!
  \*******************************************************/
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

var _index2 = __webpack_require__(/*! ../../components/diagnosis/bookingSummary/index.js */ "./dev/js/components/diagnosis/bookingSummary/index.js");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class BookingSummary extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            agent_selected_plan_id: null
        };
    }

    fetchData(props) {
        const parsed = queryString.parse(props.location.search);

        let lab_id = props.selectedLab || props.match.params.id || parsed.lab_id;

        if (window) {
            window.scrollTo(0, 0);
        }

        if (_storage2.default.checkAuth()) {
            //Check if user is login, if logged in then fetch user related data
            props.getUserProfile();
            props.getUserAddress();
            props.fetchTransactions();
            props.getCartItems();
        }

        if (parsed.dummy_id) {
            //If dummy_id is availble in the url, then we logged in user & proceed with single flow journey
            this.singleFlowLogin(props, lab_id);
        } else if (lab_id) {
            //Select all the tests selected by the user in the previous page & hit api with the same
            let testIds = props.lab_test_data[lab_id] || [];
            testIds = testIds.map(x => x.id);
            let forceAddTestids = false;
            if (parsed.test_ids) {
                testIds = parsed.test_ids.split(',');
                forceAddTestids = true;
            }
            let dataParams = {
                booking_page: true
            };
            props.getLabById(lab_id, testIds, forceAddTestids, dataParams);
        }
    }

    singleFlowLogin(props, lab_id) {
        // this.props.clearAllTests()
        //Auto Select on Agent Login URL
        const parsed = queryString.parse(props.location.search);
        if (parsed && parsed.dummy_id) {
            let extraParams = {
                dummy_id: parsed.dummy_id
            };
            props.retrieveMembersData('SINGLE_PURCHASE', extraParams, resp => {
                // to retrieve already pushed member data in case of agent or proposer it self
                if (resp && resp.data) {
                    this.setLabBooking(resp.data);
                    this.setState({ agent_selected_plan_id: resp.data.plus_plan });
                }
                setTimeout(() => {
                    let testIds = props.lab_test_data[lab_id] || [];
                    testIds = testIds.map(x => x.id);
                    let forceAddTestids = false;
                    if (parsed.test_ids) {
                        testIds = parsed.test_ids.split(',');
                        forceAddTestids = true;
                    }
                    let dataParams = {
                        booking_page: true
                    };
                    props.getLabById(lab_id, testIds, forceAddTestids, dataParams);
                }, 100);
            });
        }
    }

    setLabBooking(data) {
        //On Agent/Direct Login, set data for the lab page,e.g select timeslot, profileid, pickup type, tests, coupons  
        let { coupon_data } = data;
        // for (let curr_test of data.test_ids) {
        //     let curr = {}
        //     curr.id = curr_test
        //     curr.extra_test = true
        //     curr.lab_id = data.labId
        //     this.props.toggleDiagnosisCriteria('test', curr, true)
        // }

        if (data && data.pincode) {
            this.props.savePincode(data.pincode);
        }

        this.props.selectProfile(data.profile);
        this.props.select_lab_payment_type(data.payment_type);

        this.props.selectLabTimeSLot(data.selectedSlot, false, null);

        if (coupon_data.coupon_code) {
            let coupon_id = '';
            let is_cashback = false;

            if (coupon_code && Object.keys(coupon_code).length) {
                coupon_id = coupon_code.id;
                is_cashback = coupon_code.is_cashback;
            }
            if (coupon_code) {
                this.props.applyCoupons('2', { code: coupon_data.coupon_code, coupon_id: coupon_id, is_cashback: is_cashback }, coupon_id, data.labId);
            }
        }
    }

    componentWillReceiveProps(props) {
        if (props.selectedLab != this.props.selectedLab) {
            this.fetchData(props);
        }
    }

    componentDidMount() {
        this.fetchData(this.props);
    }

    render() {

        const parsed = queryString.parse(this.props.location.search);
        let lab_id = this.props.selectedLab || this.props.match.params.id || parsed.lab_id;

        return _react2.default.createElement(_index3.default, _extends({}, this.props, { selectedLab: lab_id, agent_selected_plan_id: this.state.agent_selected_plan_id, fetchData: this.fetchData.bind(this) }));
    }
}

BookingSummary.contextTypes = {
    router: () => null
};
const mapStateToProps = state => {

    const {
        selectedCriterias,
        lab_test_data,
        corporateCoupon,
        pincode,
        saved_patient_details,
        selectedLocation
    } = state.SEARCH_CRITERIA_LABS;
    const { selectedProfile, profiles, address, userWalletBalance, userCashbackBalance, isUserCared, defaultProfile, ipd_chat, common_utm_tags, is_any_user_buy_gold, user_loggedIn_number } = state.USER;
    let LABS = state.LABS;
    let { selectedSlot, selectedAppointmentType, selectedAddress, labCoupons, disCountedLabPrice, couponAutoApply, user_prescriptions, is_prescription_needed, selectedDateFormat, show_vip_non_login_card, payment_type } = state.LAB_SEARCH;
    const { labGoldPredictedPrice, selected_vip_plan, show_lab_payment_mode } = state.VIPCLUB;

    return {
        corporateCoupon,
        selectedCriterias,
        lab_test_data,
        LABS,
        selectedProfile, profiles, selectedSlot, selectedAppointmentType, address, selectedAddress, labCoupons, disCountedLabPrice,
        couponAutoApply, userWalletBalance, userCashbackBalance, pincode, isUserCared, defaultProfile, saved_patient_details, user_prescriptions, ipd_chat, is_prescription_needed, selectedDateFormat, selectedLocation, common_utm_tags, show_vip_non_login_card,
        is_any_user_buy_gold, labGoldPredictedPrice, selected_vip_plan, payment_type, show_lab_payment_mode, user_loggedIn_number
    };
};

const mapDispatchToProps = dispatch => {
    return {
        selectLabTimeSLot: (slot, reschedule, dateParam) => dispatch((0, _index.selectLabTimeSLot)(slot, reschedule, dateParam)),
        getUserProfile: () => dispatch((0, _index.getUserProfile)()),
        getLabById: (labId, testIds, forceAddTestids, dataParams) => dispatch((0, _index.getLabById)(labId, testIds, forceAddTestids, dataParams)),
        selectLabAppointmentType: type => dispatch((0, _index.selectLabAppointmentType)(type)),
        getUserAddress: () => dispatch((0, _index.getUserAddress)()),
        selectPickupAddress: address => dispatch((0, _index.selectPickupAddress)(address)),
        createLABAppointment: (postData, callback) => dispatch((0, _index.createLABAppointment)(postData, callback)),
        sendAgentBookingURL: (orderId, type, purchase_type, query_data, extraParams, cb) => dispatch((0, _index.sendAgentBookingURL)(orderId, type, purchase_type, query_data, extraParams, cb)),
        removeLabCoupons: (labId, couponId) => dispatch((0, _index.removeLabCoupons)(labId, couponId)),
        applyLabCoupons: (productId, couponCode, couponId, labId, dealPrice, test_ids, profile_id, cart_item, callback) => dispatch((0, _index.applyLabCoupons)(productId, couponCode, couponId, labId, dealPrice, test_ids, profile_id, cart_item, callback)),
        resetLabCoupons: () => dispatch((0, _index.resetLabCoupons)()),
        getCoupons: data => dispatch((0, _index.getCoupons)(data)),
        applyCoupons: (productId, couponData, couponId, labId, callback) => dispatch((0, _index.applyCoupons)(productId, couponData, couponId, labId, callback)),
        setCorporateCoupon: coupon => dispatch((0, _index.setCorporateCoupon)(coupon)),
        createProfile: (postData, cb) => dispatch((0, _index.createProfile)(postData, cb)),
        sendOTP: (number, viaSms, viaWhatsapp, message_type, cb) => dispatch((0, _index.sendOTP)(number, viaSms, viaWhatsapp, message_type, cb)),
        submitOTP: (number, otp, extraParamsData, cb) => dispatch((0, _index.submitOTP)(number, otp, extraParamsData, cb)),
        fetchTransactions: () => dispatch((0, _index.fetchTransactions)()),
        savePincode: pincode => dispatch((0, _index.savePincode)(pincode)),
        addToCart: (product_id, data) => dispatch((0, _index.addToCart)(product_id, data)),
        getCartItems: () => dispatch((0, _index.getCartItems)()),
        editUserProfile: (profileData, profileId, cb) => dispatch((0, _index.editUserProfile)(profileData, profileId, cb)),
        clearExtraTests: () => dispatch((0, _index.clearExtraTests)()),
        selectSearchType: type => dispatch((0, _index.selectSearchType)(type)),
        patientDetails: criteria => dispatch((0, _index.patientDetails)(criteria)),
        uploadPrescription: (profileData, cb) => dispatch((0, _index.uploadPrescription)(profileData, cb)),
        savePrescription: (imgUrl, cb) => dispatch((0, _index.savePrescription)(imgUrl, cb)),
        removePrescription: criteria => dispatch((0, _index.removePrescription)(criteria)),
        clearPrescriptions: () => dispatch((0, _index.clearPrescriptions)()),
        preBooking: slot => dispatch((0, _index.preBooking)(slot)),
        saveAvailNowInsurance: data => dispatch((0, _index.saveAvailNowInsurance)(data)),
        unSetCommonUtmTags: (type, tag) => dispatch((0, _index.unSetCommonUtmTags)(type, tag)),
        sendSPOAgentBooking: (postData, cb) => dispatch((0, _index.sendSPOAgentBooking)(postData, cb)),
        setCommonUtmTags: (type, tag) => dispatch((0, _index.setCommonUtmTags)(type, tag)),
        toggleDiagnosisCriteria: (type, criteria) => dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria)),
        getLabVipGoldPlans: (dataParams, cb) => dispatch((0, _index.getLabVipGoldPlans)(dataParams, cb)),
        selectVipClubPlan: (type, selectedPlan, cb) => dispatch((0, _index.selectVipClubPlan)(type, selectedPlan, cb)),
        select_lab_payment_type: type => dispatch((0, _index.select_lab_payment_type)(type)),
        pushMembersData: (criteria, cb) => dispatch((0, _index.pushMembersData)(criteria, cb)),
        retrieveMembersData: (type, extraParams, callback) => dispatch((0, _index.retrieveMembersData)(type, extraParams, callback)),
        clearAllTests: () => dispatch((0, _index.clearAllTests)()),
        selectProfile: id => dispatch((0, _index.selectProfile)(id)),
        NonIpdBookingLead: (data, cb) => dispatch((0, _index.NonIpdBookingLead)(data, cb))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BookingSummary);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvYm9va2luZ1N1bW1hcnkvQm9va2luZ1N1bW1hcnlWaWV3TmV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9ib29raW5nU3VtbWFyeS9QaW5jb2RlRXJyb3JQb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvYm9va2luZ1N1bW1hcnkvUGluY29kZVBvcHVwLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9ib29raW5nU3VtbWFyeS9WaXNpdFRpbWVOZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL2Jvb2tpbmdTdW1tYXJ5L2NhbmNlbGxhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvYm9va2luZ1N1bW1hcnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL2Jvb2tpbmdTdW1tYXJ5L3BheW1lbnRTdW1tYXJ5LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9ib29raW5nU3VtbWFyeS9waWNrdXBBZGRyZXNzLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9ib29raW5nU3VtbWFyeS91cGxvYWRQcmVzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvZGlhZ25vc2lzL0Jvb2tpbmdTdW1tYXJ5LmpzIl0sIm5hbWVzIjpbInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIkJvb2tpbmdTdW1tYXJ5Vmlld05ldyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImNsb3NlRXJyb3JQb3B1cCIsInNldFN0YXRlIiwiZXJyb3IiLCJ0b2dnbGVHb2xkUGxhbnMiLCJwbGFuIiwiZGF0YSIsIkdUTSIsImdldFVzZXJJZCIsImlkIiwic2VuZEV2ZW50Iiwic2VsZWN0VmlwQ2x1YlBsYW4iLCJ0b2dnbGVHb2xkUHJpY2VQb3B1cCIsInZhbHVlIiwic2hvd0dvbGRQcmljZUxpc3QiLCJnb1RvR29sZFBhZ2UiLCJoaXN0b3J5IiwicHVzaCIsImdldERhdGFBZnRlckxvZ2luIiwiZmV0Y2hEYXRhIiwibGFiR29sZFByZWRpY3RlZFByaWNlIiwibGVuZ3RoIiwic2VsZWN0ZWRQYWNrYWdlIiwiZmlsdGVyIiwieCIsInN0YXRlIiwic2VsZWN0ZWRWaXBHb2xkUGFja2FnZUlkIiwiaXNfc2VsZWN0ZWQiLCJwYXJzZWQiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwibGFiX2lkIiwic2VsZWN0ZWRMYWIiLCJwYXltZW50RGF0YSIsImxvYWRpbmciLCJvcGVuQ2FuY2VsbGF0aW9uIiwib3BlblBheW1lbnRTdW1tYXJ5Iiwib3JkZXJfaWQiLCJzaG93VGltZUVycm9yIiwic2hvd0FkZHJlc3NFcnJvciIsImNvdXBvbkNvZGUiLCJjb3Vwb25JZCIsInNjcm9sbFBvc2l0aW9uIiwicHJvZmlsZURhdGFGaWxsZWQiLCJpc19jYXNoYmFjayIsInVzZV93YWxsZXQiLCJzaG93UGluY29kZVBvcHVwIiwiY2FydF9pdGVtIiwicGluY29kZSIsIndoYXRzYXBwX29wdGluIiwicGluY29kZU1pc21hdGNoRXJyb3IiLCJzaG93Q29uZmlybWF0aW9uUG9wdXAiLCJjb3Vwb25fbG9hZGluZyIsInNlb0ZyaWVuZGx5IiwibWF0Y2giLCJ1cmwiLCJpbmNsdWRlcyIsImlzRW1haWxOb3RWYWxpZCIsImlzX3BheW1lbnRfY291cG9uX2FwcGxpZWQiLCJpc19zcG9fYXBwb2ludG1lbnQiLCJwYXlfYnRuX2xvYWRpbmciLCJpc0RvYk5vdFZhbGlkIiwic2hvd19sZW5zZml0X3BvcHVwIiwibGVuc2ZpdF9jb3Vwb25zIiwibGVuc2ZpdF9kZWNsaW5lIiwiaXNMZW5zZml0U3BlY2lmaWMiLCJzZWxlY3RlZFRlc3RJZHMiLCJzZWxlY3RlZF92aXBfcGxhbiIsIk9iamVjdCIsImtleXMiLCJwYXltZW50QnRuQ2xpY2tlZCIsImVuYWJsZURyb3BPZmZsZWFkIiwiZGlzYWJsZV9wYWdlIiwiaXNfbGVhZF9lbmFibGVkIiwidG9nZ2xlIiwid2hpY2giLCJ0b2dnbGVXYWxsZXRVc2UiLCJlIiwidGFyZ2V0IiwiY2hlY2tlZCIsImNvbXBvbmVudERpZE1vdW50Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJzZXRUaW1lb3V0IiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwidGV4dCIsInJlcGxhY2UiLCJwYXRobmFtZSIsImdldFZpcEdvbGRQcmljZUxpc3QiLCJwYXRpZW50Iiwic2VsZWN0ZWRQcm9maWxlIiwicHJvZmlsZXMiLCJpc0R1bW15VXNlciIsInV0bV9zb3VyY2UiLCJzZXNzaW9uSWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJzcG9fdGFncyIsInV0bV90YWdzIiwidXRtX3Rlcm0iLCJ1dG1fbWVkaXVtIiwidXRtX2NhbXBhaWduIiwidGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiY3VycmVudFNlc3Npb25JZCIsInNldENvbW1vblV0bVRhZ3MiLCJjdXJyZW50VGltZSIsImdldEl0ZW0iLCJjb21tb25fdXRtX3RhZ3MiLCJ0eXBlIiwic2Vzc2lvblZhbCIsInBhcnNlSW50IiwidGltZV9vZmZzZXQiLCJ1blNldENvbW1vblV0bVRhZ3MiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xpY2siLCJ0ZXN0X2lkcyIsIkxBQlMiLCJ0ZXN0cyIsIm1hcCIsInRlc3RfaWQiLCJleHRyYVBhcmFtcyIsImR1bW15X2lkIiwiYWdlbnRfc2VsZWN0ZWRfcGxhbl9pZCIsInBheW1lbnRfdHlwZSIsImdldExhYlZpcEdvbGRQbGFucyIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJTVE9SQUdFIiwiY2hlY2tBdXRoIiwiaXNQaWNrdXBTdGF0dXNTYW1lIiwic2VsZWN0ZWRBcHBvaW50bWVudFR5cGUiLCJyX3BpY2t1cCIsInBfcGlja3VwIiwicmVzZXRMYWJDb3Vwb25zIiwibmV3VGVzdHNBZGRlZCIsInRlc3QiLCJpbmRleE9mIiwic2VsZWN0ZWRTbG90Iiwic2VsZWN0ZWRUZXN0c1RpbWVTbG90IiwiY29tbW9uVGVzdElkIiwibmV3VGVzdHMiLCJpc19wYXRob2xvZ3kiLCJmaW5hbFNlbGVjdGVkU2xvdCIsInRlc3RzT2JqIiwidGVzdF9uYW1lIiwibmFtZSIsInNlbGVjdExhYlRpbWVTTG90IiwiY29ycG9yYXRlQ291cG9uIiwiY29ycG9yYXRlIiwidHdwIiwiaSIsImhpZGVfcHJpY2UiLCJsYWJDb3Vwb25zIiwicmVtb3ZlTGFiQ291cG9ucyIsImNvdXBvbl9pZCIsInNldENvcnBvcmF0ZUNvdXBvbiIsImZpbmFsUHJpY2UiLCJnZXRMYWJQcmljZURhdGEiLCJsYWJDb3Vwb24iLCJjb2RlIiwiYXBwbHlDb3Vwb25zIiwic3VjY2VzcyIsInRvdGFsX2Ftb3VudF9wYXlhYmxlX3dpdGhvdXRfY291cG9uIiwiZ2V0U2VsZWN0ZWRVc2VyRGF0YSIsImFwcGx5TGFiQ291cG9ucyIsImVyciIsImlzX3BheW1lbnRfc3BlY2lmaWMiLCJnZXRBbmRBcHBseUJlc3RDb3Vwb25zIiwiZ2V0VmFsaWRDb3Vwb24iLCJjb3Vwb25zIiwidmFsaWRDb3Vwb24iLCJpbmRleCIsInZhbGlkIiwiaXNMZW5zZml0IiwiZ2V0Q291cG9ucyIsInByb2R1Y3RJZCIsImRlYWxfcHJpY2UiLCJwcm9maWxlX2lkIiwiY2IiLCJsZW5zRml0UHJvcHMiLCJpc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCIsInByaWNlIiwidmlwIiwiaXNfdmlwX21lbWJlciIsImNvdmVyZWRfdW5kZXJfdmlwIiwidmlwX2Ftb3VudCIsInZpcF9jb252ZW5pZW5jZV9hbW91bnQiLCJwYXJzZUZsb2F0IiwibGFiIiwiaG9tZV9waWNrdXBfY2hhcmdlcyIsIm9wZW5UZXN0cyIsImhhbmRsZVBpY2t1cFR5cGUiLCJzbG90Iiwic2VsZWN0TGFiQXBwb2ludG1lbnRUeXBlIiwibmF2aWdhdGVUbyIsIndoZXJlIiwiaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUiLCJzZWxlY3RUaW1lRXJyb3IiLCJpc190aHlyb2NhcmUiLCJhZGRyZXNzIiwiZ2V0UGF0aWVudERldGFpbHMiLCJjZW50ZXJfdmlzaXRfZW5hYmxlZCIsImlzX2hvbWVfY2hhcmdlc19hcHBsaWNhYmxlIiwiYmluZCIsInByb2ZpbGVEYXRhQ29tcGxldGVkIiwiY2xlYXJUZXN0Rm9ySW5zdXJlZCIsImNoZWNrUHJlc2NyaXB0aW9uIiwibm9uSXBkTGVhZHMiLCJnZXRTZWxlY3RvcnMiLCJnZW5kZXIiLCJwaG9uZU51bWJlciIsImVtYWlsIiwib3RwVmVyaWZ5U3VjY2VzcyIsImRvYiIsInBhdGllbnREZXRhaWxzIiwiY2xlYXJfZGF0YSIsImlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfaW5zdXJhbmNlIiwiaXNfc2VsZWN0ZWRfdXNlcl9pbnN1cmVkIiwic2VsZWN0ZWREYXRlIiwic2VsZWN0ZWRfdGVzdF9pZCIsInByb2ZpbGUiLCJpc19pbnN1cmVkIiwiaW5zdXJhbmNlIiwiaXNfaW5zdXJhbmNlX2NvdmVyZWQiLCJpbnN1cmFuY2VfdGhyZXNob2xkX2Ftb3VudCIsInNlbGVjdGVkQ3JpdGVyaWFzIiwic3RhcnRfZGF0ZSIsImRhdGUiLCJsYWJfdGVzdCIsInByZUJvb2tpbmciLCJnZXRCb29raW5nRGF0YSIsImNvdXBvbl9kYXRhIiwibGFiSWQiLCJzZW5kU2luZ2xlRmxvd0FnZW50Qm9va2luZ1VSTCIsInBvc3REYXRhIiwiYm9va2luZ19kYXRhIiwiaXNfc2luZ2xlX2Zsb3dfbGFiIiwiZHVtbXlfZGF0YV90eXBlIiwicHVzaE1lbWJlcnNEYXRhIiwicmVzcCIsImxhbmRpbmdfdXJsIiwic2VuZEFnZW50Qm9va2luZ1VSTCIsInJlcyIsInByb2NlZWQiLCJ0ZXN0UGlja2VkIiwiYWRkcmVzc1BpY2tlZCIsImRhdGVQaWNrZWQiLCJhZGRUb0NhcnQiLCJ0b3RhbF9wcmljZSIsInRvdGFsX3dhbGxldF9iYWxhbmNlIiwicHJlc2NyaXB0aW9uUGlja2VkIiwiaXNfc2VsZWN0ZWRfdXNlcl9pbnN1cmFuY2Vfc3RhdHVzIiwidmlwX2lzX3ByZXNjcmlwdGlvbl9yZXF1aXJlZCIsImZvdW5kIiwidmFsaWRhdGVBZGRyZXNzUGluY29kZSIsInNlbGVjdGVkQWRkcmVzc1BpbmNvZGUiLCJzZWxlY3RlZEFkZHJlc3MiLCJkYXRhc2V0IiwiZGlzYWJsZWQiLCJpc192aXBfYXBwbGljYWJsZSIsImlzX3NlbGVjdGVkX3VzZXJfdW5kZXJfdmlwIiwiaXNfdGVzdHNfY292ZXJlZF91bmRlcl92aXAiLCJpc19zZWxlY3RlZF91c2VyX3ZpcCIsImVudHJpZXMiLCJrZXkiLCJpc19wbGFuX2FwcGxpY2FibGUiLCJpc190ZXN0c19jb3ZlcmVkX3VuZGVyX3BsYW4iLCJpc19zZWxlY3RlZF91c2VyX2hhc19hY3RpdmVfcGxhbiIsInNob3dfbGVuc2ZpdCIsImlzVXNlckNhcmVkIiwiaGFzX2FjdGl2ZV9wbGFuIiwiaW5jbHVkZWRfaW5fdXNlcl9wbGFuIiwibGVuc2ZpdF9vZmZlciIsImFwcGxpY2FibGUiLCJjb3Vwb24iLCJwcmVzY3JpcHRpb25JZHMiLCJ1c2VyX3ByZXNjcmlwdGlvbnMiLCJpbWdfcGF0aF9pZHMiLCJpbWdJZCIsImlzQWdlbnQiLCJ0ZXN0SWRzIiwibGFiX3Rlc3RfZGF0YSIsImdldFV0bVRhZ3MiLCJwcmVzY3JpcHRpb25fbGlzdCIsIm11bHRpX3RpbWluZ3NfZW5hYmxlZCIsImZyb21fd2ViIiwidmlzaXRvcl9pbmZvIiwiZ2V0VmlzaXRvckluZm8iLCJ2aXNpdF9pZCIsInZpc2l0b3JfaWQiLCJnZXRBbnlDb29raWUiLCJ0YWdzIiwiaG9zdCIsImlzX3JhZGlvbG9neSIsInN0YXJ0X3RpbWUiLCJpc19ob21lX3BpY2t1cCIsInByb2ZpbGVEYXRhIiwiZWRpdFVzZXJQcm9maWxlIiwiZGlzQ291bnRlZExhYlByaWNlIiwidG9TdHJpbmciLCJzZW5kV2hhdHN1cCIsInRoZW4iLCJjYXRjaCIsIm1lc3NhZ2UiLCJhbmFseXRpY0RhdGEiLCJjcmVhdGVMQUJBcHBvaW50bWVudCIsImNsZWFyUHJlc2NyaXB0aW9ucyIsImlzX2FnZW50Iiwib3JkZXJJZCIsInBheW1lbnRfcmVxdWlyZWQiLCJwcm9jZXNzUGF5bWVudCIsInN0YXR1cyIsImZvcm0iLCJzdWJtaXQiLCJzZW5kU1BPQWdlbnRCb29raW5nIiwiZ2V0Qm9va2luZ0J1dHRvblRleHQiLCJwcmljZV90b19wYXkiLCJleHRyYUFsbFBhcmFtcyIsInByaWNlX2Zyb21fd2FsbGV0IiwicHJpY2VfZnJvbV9wZyIsImlzX2dvbGRfbWVtYmVyIiwidG90YWxfYW1vdW50X3BheWFibGUiLCJtaW4iLCJzZXRQaW5jb2RlIiwic2F2ZVBpbmNvZGUiLCJjbGlja1BpbmNvZGVFcnJyb3JQb3BVcCIsImdvVG9Qcm9maWxlIiwidG9nZ2xlV2hhdHNhcCIsInNlYXJjaFRlc3RzIiwic2VsZWN0U2VhcmNoVHlwZSIsInByaWNlQ29uZmlybWF0aW9uUG9wdXAiLCJjaG9pY2UiLCJnb1RvSW5zdXJhbmNlIiwibGFiRGV0YWlsIiwidGh1bWJuYWlsIiwibGFiX3RodW1ibmFpbCIsInNhdmVBdmFpbE5vd0luc3VyYW5jZSIsInRlc3RJbmZvIiwidGVzdF91cmwiLCJldmVudCIsInNlbGVjdGVkX3Rlc3RfaWRzIiwidXJsX3N0cmluZyIsImhyZWYiLCJVUkwiLCJzZWFyY2hfaWQiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJsYXQiLCJsb25nIiwic2VsZWN0ZWRMb2NhdGlvbiIsImdlb21ldHJ5IiwibG5nIiwic3RvcFByb3BhZ2F0aW9uIiwicmVtb3ZlVGVzdCIsImFzc2lnbiIsImV4dHJhX3Rlc3QiLCJzZWxlY3RlZExhYlRlc3RzIiwidG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEiLCJhcHBseUxlbnNGaXRDb3Vwb25zIiwiY2xvc2VMZW5zRml0UG9wdXAiLCJ2aXBfZGF0YSIsInZpcF90b3RhbF9hbW91bnQiLCJ2aXBfdG90YWxfY29udmVuaWVuY2VfYW1vdW50IiwidmlwX3RvdGFsX2dvbGRfcHJpY2UiLCJpc19hbGxfZW5hYmxlX2Zvcl92aXAiLCJpc19hbGxfZW5hYmxlX2Zvcl9nb2xkIiwiaXNfZW5hYmxlX2Zvcl92aXAiLCJpc19nb2xkIiwidmlwX2dvbGRfcHJpY2UiLCJpc192aXBfZ29sZF9tZW1iZXIiLCJpc19hbnlfdXNlcl9idXlfZ29sZCIsInVzZXJfcGhvbmVfbnVtYmVyIiwidXNlcl9uYW1lIiwic2VsZWN0ZWRfdGVzdF9uYW1lIiwic2VsZWN0ZWRfdGVzdCIsImN1c3RvbWVyX25hbWUiLCJwaG9uZV9udW1iZXIiLCJsZWFkX3R5cGUiLCJsZWFkX3NvdXJjZSIsImxhYl9uYW1lIiwiZXhpdHBvaW50X3VybCIsInNvdXJjZSIsImRvY3Rvcl9uYW1lIiwiaG9zcGl0YWxfbmFtZSIsInNwZWNpYWx0eSIsInNlbGVjdGVkX3RpbWUiLCJ0aXRsZSIsInNlbGVjdGVkX2RhdGUiLCJOb25JcGRCb29raW5nTGVhZCIsInJlZmVycmVyIiwiZ2NsaWQiLCJyZW5kZXIiLCJ0ZXN0c193aXRoX3ByaWNlIiwiZmluYWxNcnAiLCJhZGRyZXNzX3BpY2tlZF92ZXJpZmllZCIsImlzX2NvcnBvcmF0ZSIsImlzX2RlZmF1bHRfdXNlcl9pbnN1cmVkIiwiaXNfaW5zdXJhbmNlX2J1eV9hYmxlIiwicmFkaW9sb2d5X3Rlc3RzIiwicGF0aG9sb2d5X3Rlc3RzIiwicl9waWNrdXBfaG9tZSIsInJfcGlja3VwX2NlbnRlciIsInBfcGlja3VwX2hvbWUiLCJwX3BpY2t1cF9jZW50ZXIiLCJpc19kZWZhdWx0X3VzZXJfdW5kZXJfdmlwIiwiaXNfc2VsZWN0ZWRfdXNlcl9nb2xkIiwiaW5zdXJhbmNlX3N0YXR1cyIsImlzX3ByZXNjcmlwdGlvbl9uZWVkZWQiLCJkZWZhdWx0UHJvZmlsZSIsImdvbGRfcHJpY2VsaXN0X21ycCIsImdvbGRfcHJpY2VsaXN0X2RlYWxfcHJpY2UiLCJnb2xkX3ByaWNlbGlzdF9jb252ZW5pZW5jZSIsIm1ycCIsImdvbGRfcHJpY2UiLCJjb252ZW5pZW5jZV9jaGFyZ2UiLCJpc19wcmVzY3JpcHRpb25fcmVxdWlyZWQiLCJzaG93X2RldGFpbHMiLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwiQVNTRVRTX0JBU0VfVVJMIiwid2lkdGgiLCJmbG9hdCIsInJlc2V0Iiwic2VsZWN0ZWRUeXBlIiwiYWRkIiwiYWRkcmVzc19waWNrZWQiLCJhbXRCZWZvcmVDb3Vwb24iLCJ0b3RhbF9hbW91bnRfcGF5YWJsZV9ub25fcGxhbl91c2VyIiwiZGlzcGxheV9yYWRpb19jb2RfcHJpY2UiLCJpc192aXBfZ29sZF9hcHBsaWNhYmxlIiwidXNlcldhbGxldEJhbGFuY2UiLCJ1c2VyQ2FzaGJhY2tCYWxhbmNlIiwiaXNfYWRkX3RvX2NhcmQiLCJ0b3RhbF90ZXN0X2NvdW50IiwiaXNfdGltZV9zZWxlY3RlZF9mb3JfYWxsX3Rlc3RzIiwidmlwX2Rpc2NvdW50X3ByaWNlIiwiaXNfY292ZXJfdW5kZXJfdmlwX2dvbGQiLCJjdXJyZW50VGVzdHNDb3VudCIsInNob3dHb2xkVG9nZ2xlUGF5bWVudE1vZGUiLCJzaG93X2xhYl9wYXltZW50X21vZGUiLCJzZWxlY3RfbGFiX3BheW1lbnRfdHlwZSIsImRpc3BsYXlfZG9jcHJpbWVfZGlzY291bnQiLCJkaXNhYmxlX2FsbF9ib29raW5ncyIsInZhbCIsInNob3dfdmlwX25vbl9sb2dpbl9jYXJkIiwiY3Vyc29yIiwibWFyZ2luUmlnaHQiLCJ0b0xvd2VyQ2FzZSIsInNwbGl0IiwiY29sb3IiLCJwcmV2ZW50RGVmYXVsdCIsInRvdGFsX2FsbG93ZWRfbWVtYmVycyIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJmbGV4IiwiaXBkX2NoYXQiLCJzaG93SXBkQ2hhdCIsIlBpbmNvZGVQb3B1cEVycm9yIiwiY2xpY2tQb3BVcCIsIlBpbmNvZGVQb3VwdXBWaWV3IiwidmFsaWRhdGVQaW5jb2RlIiwic3VibWl0UGluY29kZSIsIl9oYW5kbGVDb250aW51ZVByZXNzIiwiaW5wdXRIYW5kbGVyIiwiTU9OVEhTIiwiV0VFS19EQVlTIiwiVmlzaXRUaW1lTmV3IiwiaXNfdGh5cm9jYXJlX2xhYiIsImRhdGVUaW1lU2VsZWN0ZWRWYWx1ZSIsInNlbGVjdGVkRGF0ZUZvcm1hdCIsImdldEZvcm1hdHRlZERhdGUiLCJnZXREYXRlQWZ0ZXIiLCJzZWxlY3REYXRlIiwiZGQiLCJnZXREYXRlIiwibW0iLCJnZXRNb250aCIsInl5eXkiLCJnZXRGdWxsWWVhciIsInRvZGF5Iiwic2V0RGF0ZSIsImdvVG9UaW1lIiwidW5pcXVlX2NvbW1vbl90ZXN0cyIsInRpbWVFcnJvciIsInRvRGF0ZVN0cmluZyIsInBvc2l0aW9uIiwiUGlja3VwQWRkcmVzcyIsImdldEFkZHJlc3NTdHIiLCJhZGRyZXNzU3RyIiwibGFuZF9tYXJrIiwibG9jYWxpdHkiLCJhZGRyZXNzRXJyb3IiLCJ0b3AiLCJyaWdodCIsIkNvbXByZXNzIiwiVXBsb2FkUHJlc2NyaXB0aW9uIiwiZGF0YVVybCIsInpvb21JbWFnZVVybCIsInpvb21JbWFnZSIsIm9wZW5QZGYiLCJvcGVuUGRmVXJsIiwiaXNMb2FkaW5nIiwicGlja0ZpbGUiLCJmaWxlcyIsImZpbGUiLCJmaW5pc2hDcm9wIiwiY29tcHJlc3MiLCJxdWFsaXR5IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJyZXN1bHRzIiwiaW1nMSIsImJhc2U2NHN0ciIsImltZ0V4dCIsImV4dCIsImNvbnZlcnRCYXNlNjRUb0ZpbGUiLCJnZXRCYXNlNjQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZmlsZV9ibG9iX2RhdGEiLCJkYXRhVVJJdG9CbG9iIiwibWVtX2RhdGEiLCJleGlzdGluZ0RhdGEiLCJpbWdfdGFnIiwiZm9ybV9kYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ1cGxvYWRQcmVzY3JpcHRpb24iLCJ1c2VyIiwiaW1hZ2UiLCJwcmVzY3JpcHRpb25fZmlsZSIsInNhdmVQcmVzY3JpcHRpb24iLCJkYXRhVVJJIiwiYmluYXJ5IiwiYXRvYiIsImFycmF5IiwiY2hhckNvZGVBdCIsIkJsb2IiLCJVaW50OEFycmF5IiwicmVtb3ZlSW1hZ2UiLCJpbWciLCJyZW1vdmVQcmVzY3JpcHRpb24iLCJVcGxvYWRlZF9pbWFnZV9kYXRhIiwiaW1nX3VybCIsInBkZl91cmwiLCJzaG93X3VwbG9hZCIsIkJvb2tpbmdTdW1tYXJ5IiwicGFyYW1zIiwiZ2V0VXNlclByb2ZpbGUiLCJnZXRVc2VyQWRkcmVzcyIsImZldGNoVHJhbnNhY3Rpb25zIiwiZ2V0Q2FydEl0ZW1zIiwic2luZ2xlRmxvd0xvZ2luIiwiZm9yY2VBZGRUZXN0aWRzIiwiZGF0YVBhcmFtcyIsImJvb2tpbmdfcGFnZSIsImdldExhYkJ5SWQiLCJyZXRyaWV2ZU1lbWJlcnNEYXRhIiwic2V0TGFiQm9va2luZyIsInBsdXNfcGxhbiIsInNlbGVjdFByb2ZpbGUiLCJjb3Vwb25fY29kZSIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsInNhdmVkX3BhdGllbnRfZGV0YWlscyIsIlNFQVJDSF9DUklURVJJQV9MQUJTIiwidXNlcl9sb2dnZWRJbl9udW1iZXIiLCJVU0VSIiwiY291cG9uQXV0b0FwcGx5IiwiTEFCX1NFQVJDSCIsIlZJUENMVUIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInJlc2NoZWR1bGUiLCJkYXRlUGFyYW0iLCJzZWxlY3RQaWNrdXBBZGRyZXNzIiwiY2FsbGJhY2siLCJwdXJjaGFzZV90eXBlIiwicXVlcnlfZGF0YSIsImRlYWxQcmljZSIsImNvdXBvbkRhdGEiLCJjcmVhdGVQcm9maWxlIiwic2VuZE9UUCIsIm51bWJlciIsInZpYVNtcyIsInZpYVdoYXRzYXBwIiwibWVzc2FnZV90eXBlIiwic3VibWl0T1RQIiwib3RwIiwiZXh0cmFQYXJhbXNEYXRhIiwicHJvZHVjdF9pZCIsInByb2ZpbGVJZCIsImNsZWFyRXh0cmFUZXN0cyIsImNyaXRlcmlhIiwiaW1nVXJsIiwidGFnIiwic2VsZWN0ZWRQbGFuIiwiY2xlYXJBbGxUZXN0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBbEJBLE1BQU1BLGNBQWNDLG1CQUFPQSxDQUFDLGtDQUFSLENBQXBCOzs7QUFvQkEsTUFBTUMscUJBQU4sU0FBb0NDLGdCQUFNQyxTQUExQyxDQUFvRDtBQUNoREMsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOOztBQURlLGFBMGtDbkJDLGVBMWtDbUIsR0Ewa0NELE1BQU07QUFDcEIsaUJBQUtDLFFBQUwsQ0FBYyxFQUFFQyxPQUFPLEVBQVQsRUFBZDtBQUNILFNBNWtDa0I7O0FBQUEsYUE0dUNuQkMsZUE1dUNtQixHQTR1Q0FDLElBQUQsSUFBVTtBQUN4QixnQkFBSUMsT0FBTztBQUNQLDRCQUFZLGFBREwsRUFDb0IsVUFBVSwwQkFEOUIsRUFDMEQsY0FBY0MsY0FBSUMsU0FBSixNQUFtQixFQUQzRixFQUMrRixVQUFVLENBRHpHLEVBQzRHLFNBQVMsOEJBRHJILEVBQ3FKLFFBQVFILEtBQUtJO0FBRGxLLGFBQVg7O0FBSUFGLDBCQUFJRyxTQUFKLENBQWMsRUFBRUosTUFBTUEsSUFBUixFQUFkO0FBQ0EsaUJBQUtOLEtBQUwsQ0FBV1csaUJBQVgsQ0FBNkIsTUFBN0IsRUFBcUNOLElBQXJDLEVBTndCLENBTW1CO0FBQzNDLGlCQUFLTyxvQkFBTDtBQUNILFNBcHZDa0I7O0FBQUEsYUFzdkNuQkEs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QUMxUCxJQUFELEVBQU8rZSxRQUFQLEtBQW9CckIsU0FBUyxvQ0FBd0IxZCxJQUF4QixFQUE4QitlLFFBQTlCLENBQVQsQ0FuQzFDO0FBb0NIOWQsNEJBQW9CLENBQUNzYixVQUFELEVBQWFoWSxFQUFiLEtBQW9CbVosU0FBUywrQkFBbUJuQixVQUFuQixFQUErQmhZLEVBQS9CLENBQVQsQ0FwQ3JDO0FBcUNIaEwsMkJBQW1CLENBQUN5RyxJQUFELEVBQU9rZixZQUFQLEVBQXFCM2EsRUFBckIsS0FBNEJtWixTQUFTLDhCQUFrQjFkLElBQWxCLEVBQXdCa2YsWUFBeEIsRUFBc0MzYSxFQUF0QyxDQUFULENBckM1QztBQXNDSHNRLGlDQUEwQjdVLElBQUQsSUFBVTBkLFNBQVMsb0NBQXdCMWQsSUFBeEIsQ0FBVCxDQXRDaEM7QUF1Q0htSSx5QkFBZ0IsQ0FBQzRXLFFBQUQsRUFBV3hhLEVBQVgsS0FBaUJtWixTQUFTLDRCQUFnQnFCLFFBQWhCLEVBQTBCeGEsRUFBMUIsQ0FBVCxDQXZDOUI7QUF3Q0htWSw2QkFBb0IsQ0FBQzFjLElBQUQsRUFBTWEsV0FBTixFQUFtQmlkLFFBQW5CLEtBQWdDSixTQUFTLGdDQUFvQjFkLElBQXBCLEVBQTBCYSxXQUExQixFQUF1Q2lkLFFBQXZDLENBQVQsQ0F4Q2pEO0FBeUNIcUIsdUJBQWUsTUFBTXpCLFNBQVMsMkJBQVQsQ0F6Q2xCO0FBMENIYix1QkFBZ0J4akIsRUFBRCxJQUFRcWtCLFNBQVMsMEJBQWNya0IsRUFBZCxDQUFULENBMUNwQjtBQTJDSG9ZLDJCQUFrQixDQUFDdlksSUFBRCxFQUFNcUwsRUFBTixLQUFZbVosU0FBUyw4QkFBa0J4a0IsSUFBbEIsRUFBd0JxTCxFQUF4QixDQUFUO0FBM0MzQixLQUFQO0FBNkNILENBOUNEOztrQkFnRGUseUJBQVEwWSxlQUFSLEVBQXlCUSxrQkFBekIsRUFBNkMxQixjQUE3QyxDIiwiZmlsZSI6IjI3LnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9Mb2FkZXInXG5pbXBvcnQgVmlzaXRUaW1lTmV3IGZyb20gJy4vVmlzaXRUaW1lTmV3J1xuaW1wb3J0IFBpY2t1cEFkZHJlc3MgZnJvbSAnLi9waWNrdXBBZGRyZXNzJ1xuaW1wb3J0IENob29zZVBhdGllbnROZXdWaWV3IGZyb20gJy4uLy4uL29wZC9wYXRpZW50RGV0YWlscy9jaG9vc2VQYXRpZW50TmV3J1xuaW1wb3J0IEluaXRpYWxzUGljdHVyZSBmcm9tICcuLi8uLi9jb21tb25zL2luaXRpYWxzUGljdHVyZSdcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi8uLi9jb21tb25zL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9SaWdodEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5cbmltcG9ydCBDYW5jZWxhdGlvblBvbGljeSBmcm9tICcuL2NhbmNlbGxhdGlvbi5qcydcbmltcG9ydCBQYXltZW50U3VtbWFyeSBmcm9tICcuL3BheW1lbnRTdW1tYXJ5LmpzJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBCb29raW5nRXJyb3IgZnJvbSAnLi4vLi4vb3BkL3BhdGllbnREZXRhaWxzL2Jvb2tpbmdFcnJvclBvcFVwLmpzJztcbmltcG9ydCBQaW5jb2RlUG9wdXAgZnJvbSAnLi9QaW5jb2RlUG9wdXAuanMnXG5pbXBvcnQgV2hhdHNBcHBPcHRpblZpZXcgZnJvbSAnLi4vLi4vY29tbW9ucy9XaGF0c0FwcE9wdGluL1doYXRzQXBwT3B0aW5WaWV3LmpzJ1xuaW1wb3J0IFBpbmNvZGVFcnJvclBvcHVwIGZyb20gJy4vUGluY29kZUVycm9yUG9wdXAuanMnXG5pbXBvcnQgQm9va2luZ0NvbmZpcm1hdGlvblBvcHVwIGZyb20gJy4vQm9va2luZ0NvbmZpcm1hdGlvblBvcHVwLmpzJ1xuaW1wb3J0IFVwbG9hZFByZXNjcmlwdGlvbiBmcm9tICcuL3VwbG9hZFByZXNjcmlwdGlvbi5qcydcbmltcG9ydCBQYXltZW50Rm9ybSBmcm9tICcuLi8uLi9jb21tb25zL3BheW1lbnRGb3JtJ1xuaW1wb3J0IExlbnNmaXRQb3B1cCBmcm9tICcuL2xlbnNmaXRQb3B1cC5qcydcbmltcG9ydCBEaXNjbGFpbWVyIGZyb20gJy4uLy4uL2NvbW1vbnMvSG9tZS9zdGF0aWNEaXNjbGFpbWVyLmpzJ1xuaW1wb3J0IFZpcEdvbGRQYWNrYWdlIGZyb20gJy4uLy4uL29wZC9wYXRpZW50RGV0YWlscy9WaXBHb2xkUGFja2FnZS5qcydcblxuY2xhc3MgQm9va2luZ1N1bW1hcnlWaWV3TmV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcblxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IGxhYl9pZCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRMYWJcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWRMYWI6IGxhYl9pZCxcbiAgICAgICAgICAgIHBheW1lbnREYXRhOiBudWxsLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBlcnJvcjogXCJcIixcbiAgICAgICAgICAgIG9wZW5DYW5jZWxsYXRpb246IGZhbHNlLFxuICAgICAgICAgICAgb3BlblBheW1lbnRTdW1tYXJ5OiBmYWxzZSxcbiAgICAgICAgICAgIC8vIG9yZGVyX2lkOiAhIXBhcnNlZC5vcmRlcl9pZCxcbiAgICAgICAgICAgIG9yZGVyX2lkOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dUaW1lRXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd0FkZHJlc3NFcnJvcjogZmFsc2UsXG4gICAgICAgICAgICBjb3Vwb25Db2RlOiAnJyxcbiAgICAgICAgICAgIGNvdXBvbklkOiAnJyxcbiAgICAgICAgICAgIHNjcm9sbFBvc2l0aW9uOiAnJyxcbiAgICAgICAgICAgIHByb2ZpbGVEYXRhRmlsbGVkOiB0cnVlLFxuICAgICAgICAgICAgaXNfY2FzaGJhY2s6IGZhbHNlLFxuICAgICAgICAgICAgdXNlX3dhbGxldDogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dQaW5jb2RlUG9wdXA6IGZhbHNlLFxuICAgICAgICAgICAgY2FydF9pdGVtOiBwYXJzZWQuY2FydF9pdGVtLFxuICAgICAgICAgICAgcGluY29kZTogdGhpcy5wcm9wcy5waW5jb2RlLFxuICAgICAgICAgICAgd2hhdHNhcHBfb3B0aW46IHRydWUsXG4gICAgICAgICAgICBwaW5jb2RlTWlzbWF0Y2hFcnJvcjogZmFsc2UsXG4gICAgICAgICAgICBzaG93Q29uZmlybWF0aW9uUG9wdXA6ICdjbG9zZScsXG4gICAgICAgICAgICBjb3Vwb25fbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBzZW9GcmllbmRseTogdGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoJy1scHAnKSxcbiAgICAgICAgICAgIGlzRW1haWxOb3RWYWxpZDogZmFsc2UsXG4gICAgICAgICAgICBpc19wYXltZW50X2NvdXBvbl9hcHBsaWVkOiBmYWxzZSxcbiAgICAgICAgICAgIGlzX3Nwb19hcHBvaW50bWVudDogZmFsc2UsXG4gICAgICAgICAgICBwYXlfYnRuX2xvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBpc0RvYk5vdFZhbGlkOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dfbGVuc2ZpdF9wb3B1cDogZmFsc2UsXG4gICAgICAgICAgICBsZW5zZml0X2NvdXBvbnM6IG51bGwsXG4gICAgICAgICAgICBsZW5zZml0X2RlY2xpbmU6IGZhbHNlLFxuICAgICAgICAgICAgaXNMZW5zZml0U3BlY2lmaWM6IHBhcnNlZC5pc0xlbnNmaXRTcGVjaWZpYyB8fCBmYWxzZSxcbiAgICAgICAgICAgIHNob3dHb2xkUHJpY2VMaXN0OiBmYWxzZSxcbiAgICAgICAgICAgIHNlbGVjdGVkVGVzdElkczogW10sXG4gICAgICAgICAgICBzZWxlY3RlZFZpcEdvbGRQYWNrYWdlSWQ6IHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4gJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbikubGVuZ3RoID8gdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5pZCA6ICcnLFxuICAgICAgICAgICAgcGF5bWVudEJ0bkNsaWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZW5hYmxlRHJvcE9mZmxlYWQ6IHRydWUsXG4gICAgICAgICAgICBkaXNhYmxlX3BhZ2U6IHRydWUsXG4gICAgICAgICAgICBpc19sZWFkX2VuYWJsZWQ6IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZSh3aGljaCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgW3doaWNoXTogIXRoaXMuc3RhdGVbd2hpY2hdIH0pXG4gICAgfVxuXG4gICAgdG9nZ2xlV2FsbGV0VXNlKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNfcGF5bWVudF9jb3Vwb25fYXBwbGllZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZV93YWxsZXQ6IGZhbHNlIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlX3dhbGxldDogZS50YXJnZXQuY2hlY2tlZCB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICAgICAgaWYgKCFTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH0qL1xuXG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoXCJlcnJvcl9jb2RlXCIpKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiQ291bGQgbm90IGNvbXBsZXRlIHBheW1lbnQsIFRyeSBhZ2FpbiFcIiB9KVxuICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UodGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldFZpcEdvbGRQcmljZUxpc3QodGhpcy5wcm9wcyk7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4uaWQgJiYgKHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4uaWQgIT0gdGhpcy5zdGF0ZS5zZWxlY3RlZFZpcEdvbGRQYWNrYWdlSWQpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRWaXBHb2xkUGFja2FnZUlkOiB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmlkIH0pXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGF0aWVudCA9IG51bGxcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlICYmIHRoaXMucHJvcHMucHJvZmlsZXMgJiYgdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV0gJiYgIXRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdLmlzRHVtbXlVc2VyKSB7XG4gICAgICAgICAgICBwYXRpZW50ID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9maWxlRGF0YUZpbGxlZDogdHJ1ZSB9KVxuICAgICAgICB9XG4gICAgICAgIC8qaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lLXBhdGllbnQtZGV0YWlscy13aWRnZXQnKSkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnRUb3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZS1wYXRpZW50LWRldGFpbHMtd2lkZ2V0JykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgICAgICAgdmFyIGVsZW1lbnRIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZS1wYXRpZW50LWRldGFpbHMtd2lkZ2V0JykuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gZWxlbWVudFRvcCAtIGVsZW1lbnRIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2Nyb2xsUG9zaXRpb246IHNjcm9sbFBvc2l0aW9uIH0pO1xuICAgICAgICB9Ki9cblxuICAgICAgICAvL0FkZCBVVE0gdGFncyBmb3IgYnVpbGRpbmcgdXJsXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnV0bV9zb3VyY2UgJiYgcGFyc2VkLnV0bV9zb3VyY2UgPT0gJ09mZmxpbmVBZmZpbGlhdGUnKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlc3Npb25JZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMykgKiAyMSArIDEwNTBcbiAgICAgICAgICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnc2Vzc2lvbklkVmFsJywgc2Vzc2lvbklkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgc3BvX3RhZ3MgPSB7XG4gICAgICAgICAgICAgICAgICAgIHV0bV90YWdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1dG1fc291cmNlOiBwYXJzZWQudXRtX3NvdXJjZSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0bV90ZXJtOiBwYXJzZWQudXRtX3Rlcm0gfHwgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICB1dG1fbWVkaXVtOiBwYXJzZWQudXRtX21lZGl1bSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0bV9jYW1wYWlnbjogcGFyc2VkLnV0bV9jYW1wYWlnbiB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNlc3Npb25JZDogc2Vzc2lvbklkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc19zcG9fYXBwb2ludG1lbnQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldENvbW1vblV0bVRhZ3MoJ3NwbycsIHNwb190YWdzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vQ2xlYXIgVXRtIHRhZ3MgZm9yIFNQTywgYWZ0ZXIgMTUgbWludXRlc1xuICAgICAgICBsZXQgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UgJiYgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnc2Vzc2lvbklkVmFsJykgJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MgJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MubGVuZ3RoICYmIHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnc3BvJykubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIGxldCBzcG9fdGFncyA9IHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnc3BvJylbMF1cbiAgICAgICAgICAgIGxldCBzZXNzaW9uVmFsID0gcGFyc2VJbnQoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnc2Vzc2lvbklkVmFsJykpXG4gICAgICAgICAgICBpZiAoc3BvX3RhZ3MudGltZSAmJiBzZXNzaW9uVmFsID09IHBhcnNlSW50KHNwb190YWdzLmN1cnJlbnRTZXNzaW9uSWQpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbWVfb2Zmc2V0ID0gKGN1cnJlbnRUaW1lIC0gc3BvX3RhZ3MudGltZSkgLyA2MDAwMFxuICAgICAgICAgICAgICAgIC8vQ2xlYXIgU1BPIHV0bSB0YWdzIGFmdGVyIDE1bWludXRlc1xuICAgICAgICAgICAgICAgIC8vOTAwXG4gICAgICAgICAgICAgICAgaWYgKHRpbWVfb2Zmc2V0ID4gMTgwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudW5TZXRDb21tb25VdG1UYWdzKCdzcG8nKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc19zcG9fYXBwb2ludG1lbnQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNMZW5zZml0U3BlY2lmaWMpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybV9ib29raW5nJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1fYm9va2luZycpLmNsaWNrKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAzMDAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VmlwR29sZFByaWNlTGlzdChwcm9wcykge1xuICAgICAgICBsZXQgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCB0ZXN0X2lkcyA9IFtdXG4gICAgICAgIGlmIChwcm9wcy5MQUJTW3Byb3BzLnNlbGVjdGVkTGFiXSAmJiBwcm9wcy5MQUJTW3Byb3BzLnNlbGVjdGVkTGFiXS50ZXN0cykge1xuICAgICAgICAgICAgdGVzdF9pZHMgPSBwcm9wcy5MQUJTW3Byb3BzLnNlbGVjdGVkTGFiXS50ZXN0cy5tYXAoeCA9PiB4LnRlc3RfaWQpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVGVzdElkczogdGVzdF9pZHMgfSk7XG4gICAgICAgIGxldCBleHRyYVBhcmFtcyA9IHtcbiAgICAgICAgICAgIFwibGFiXCI6IHByb3BzLnNlbGVjdGVkTGFiLFxuICAgICAgICAgICAgXCJsYWJfdGVzdHNcIjogdGVzdF9pZHMsXG4gICAgICAgICAgICBcImdvbGRfdmlwX3BsYW5cIjogW11cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmlkKSB7XG4gICAgICAgICAgICBleHRyYVBhcmFtc1snYWxyZWFkeV9zZWxlY3RlZF9wbGFuJ10gPSB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmlkXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnNlZCAmJiBwYXJzZWQuZHVtbXlfaWQgJiYgdGhpcy5wcm9wcy5hZ2VudF9zZWxlY3RlZF9wbGFuX2lkKSB7XG4gICAgICAgICAgICBleHRyYVBhcmFtc1snYWxyZWFkeV9zZWxlY3RlZF9wbGFuJ10gPSB0aGlzLnByb3BzLmFnZW50X3NlbGVjdGVkX3BsYW5faWRcbiAgICAgICAgfVxuICAgICAgICBleHRyYVBhcmFtc1sncGF5bWVudF90eXBlJ10gPSB0aGlzLnByb3BzLnBheW1lbnRfdHlwZVxuICAgICAgICB0aGlzLnByb3BzLmdldExhYlZpcEdvbGRQbGFucyhleHRyYVBhcmFtcykgLy8gdG8gZ2V0IGdvbGQvdmlwIHBsYW5zIHNwZWNpZmljIHRvIHBhcnRpY3VsYXIgbGFiXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKFNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNhYmxlX3BhZ2U6IGZhbHNlIH0pXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGlzUGlja3VwU3RhdHVzU2FtZSA9IGZhbHNlXG4gICAgICAgIGlmIChuZXh0UHJvcHMuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGUucl9waWNrdXAgPT0gdGhpcy5wcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZS5yX3BpY2t1cCAmJiBuZXh0UHJvcHMuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGUucF9waWNrdXAgPT0gdGhpcy5wcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZS5wX3BpY2t1cCkge1xuICAgICAgICAgICAgaXNQaWNrdXBTdGF0dXNTYW1lID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIC8vVG8gdXBkYXRlIEdvbGQgUGxhbnMgb24gY2hhbmdpbmcgcHJvcHNcbiAgICAgICAgaWYgKG5leHRQcm9wcyAmJiBuZXh0UHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4gJiYgbmV4dFByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmlkICYmIChuZXh0UHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4uaWQgIT0gdGhpcy5zdGF0ZS5zZWxlY3RlZFZpcEdvbGRQYWNrYWdlSWQpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRWaXBHb2xkUGFja2FnZUlkOiBuZXh0UHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4uaWQgfSlcbiAgICAgICAgfVxuICAgICAgICAvKmlmICh0aGlzLnN0YXRlLmVuYWJsZURyb3BPZmZsZWFkICYmIFNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcbiAgICAgICAgICAgIHRoaXMubm9uSXBkTGVhZHMoKVxuICAgICAgICB9Ki9cbiAgICAgICAgaWYgKG5leHRQcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdICYmIG5leHRQcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLnRlc3RzICYmIG5leHRQcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLnRlc3RzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnJlc2V0TGFiQ291cG9ucygpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgJ3BheV9idG5fbG9hZGluZyc6IGZhbHNlIH0pXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAobmV4dFByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0gJiYgbmV4dFByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMgJiYgbmV4dFByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBiYXNlcyBjYXNlc1xuICAgICAgICAgICAgLy9UbyBDaGVjayBpZiBhbnkgbmV3IFRlc3QgQWRkZWRcblxuICAgICAgICAgICAgbGV0IG5ld1Rlc3RzQWRkZWQgPSBmYWxzZVxuICAgICAgICAgICAgbmV4dFByb3BzLkxBQlNbbmV4dFByb3BzLnNlbGVjdGVkTGFiXS50ZXN0cy5tYXAoKHRlc3QpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkVGVzdElkcy5pbmRleE9mKHRlc3QudGVzdF9pZCkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VGVzdHNBZGRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZiAobmV3VGVzdHNBZGRlZCB8fCAodGhpcy5zdGF0ZS5zZWxlY3RlZFRlc3RJZHMubGVuZ3RoICE9IG5leHRQcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLnRlc3RzLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFZpcEdvbGRQcmljZUxpc3QobmV4dFByb3BzKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0lmIGFmdGVyIHNlbGVjdGluZyB0aW1lLCB1c2VyIGFkZCBtb3JlIHRlc3RzIHRoZW4gZm9yIHBhdGhvbG9neSB0ZXN0IHdlIGhhdmUgdG8gZm9yY2UgYWRkIHRoZSBwYXRob2xvZ3kgdGltaW5ncyBcbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHMuc2VsZWN0ZWRTbG90ICYmIG5leHRQcm9wcy5zZWxlY3RlZFNsb3Quc2VsZWN0ZWRUZXN0c1RpbWVTbG90ICYmIE9iamVjdC5rZXlzKG5leHRQcm9wcy5zZWxlY3RlZFNsb3Quc2VsZWN0ZWRUZXN0c1RpbWVTbG90KS5sZW5ndGggJiYgbmV4dFByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgY29tbW9uVGVzdElkID0gbmV4dFByb3BzLnNlbGVjdGVkU2xvdFsncGF0aG9sb2d5J10gPyBuZXh0UHJvcHMuc2VsZWN0ZWRTbG90WydwYXRob2xvZ3knXS50ZXN0X2lkIDogbmV4dFByb3BzLnNlbGVjdGVkU2xvdFsnYWxsJ10gPyBuZXh0UHJvcHMuc2VsZWN0ZWRTbG90WydhbGwnXS50ZXN0X2lkIDogbnVsbFxuXG4gICAgICAgICAgICAgICAgbGV0IG5ld1Rlc3RzID0gW11cbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS50ZXN0cy5tYXAoKHRlc3QpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGVzdC5pc19wYXRob2xvZ3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0UHJvcHMuc2VsZWN0ZWRTbG90LnNlbGVjdGVkVGVzdHNUaW1lU2xvdFt0ZXN0LnRlc3RfaWRdKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGVzdC5pc19wYXRob2xvZ3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUZXN0cy5wdXNoKHRlc3QpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBpZiAoY29tbW9uVGVzdElkICYmIG5ld1Rlc3RzLmxlbmd0aCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaW5hbFNlbGVjdGVkU2xvdCA9IHsgLi4ubmV4dFByb3BzLnNlbGVjdGVkU2xvdCB9XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXN0c09iaiA9IHsgLi4uZmluYWxTZWxlY3RlZFNsb3Quc2VsZWN0ZWRUZXN0c1RpbWVTbG90IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Rlc3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGVzdHMubWFwKCh4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdHNPYmpbeC50ZXN0LmlkXSA9IHsgLi4udGVzdHNPYmpbY29tbW9uVGVzdElkXSwgdGVzdF9pZDogeC50ZXN0LmlkLCB0ZXN0X25hbWU6IHgudGVzdC5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFNlbGVjdGVkU2xvdFsnc2VsZWN0ZWRUZXN0c1RpbWVTbG90J10gPSB0ZXN0c09ialxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RMYWJUaW1lU0xvdChmaW5hbFNlbGVjdGVkU2xvdClcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyByZW1vdmUgY29ycG9yYXRlIGNvdXBvbiBpZiB0ZXN0cyBhcmUgbm90IHZhbGlkXG4gICAgICAgICAgICBpZiAobmV4dFByb3BzLmNvcnBvcmF0ZUNvdXBvbikge1xuICAgICAgICAgICAgICAgIGxldCBjb3Jwb3JhdGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMubWFwKCh0d3AsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0d3AuaGlkZV9wcmljZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29ycG9yYXRlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBpZiAoIWNvcnBvcmF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlc2V0TGFiQ291cG9ucygpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3Vwb25Db2RlOiBcIlwiLCBjb3Vwb25JZDogJycsIGlzX2Nhc2hiYWNrOiBmYWxzZSwgdXNlX3dhbGxldDogdHJ1ZSwgaXNfcGF5bWVudF9jb3Vwb25fYXBwbGllZDogZmFsc2UsICdwYXlfYnRuX2xvYWRpbmcnOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFByb3BzLmxhYkNvdXBvbnNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVtb3ZlTGFiQ291cG9ucyh0aGlzLnByb3BzLnNlbGVjdGVkTGFiLCBuZXh0UHJvcHMuY29ycG9yYXRlQ291cG9uLmNvdXBvbl9pZClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldENvcnBvcmF0ZUNvdXBvbihudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIGNvcnBvcmF0ZUNvdXBvbiBpcyBzZXQsIGFwcGx5IHRoYXQsIGxlYXZlIHJlc3RcbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHMuY29ycG9yYXRlQ291cG9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXSAhPSBuZXh0UHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXSB8fCAhaXNQaWNrdXBTdGF0dXNTYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB7IGZpbmFsUHJpY2UsIHRlc3RfaWRzIH0gPSB0aGlzLmdldExhYlByaWNlRGF0YShuZXh0UHJvcHMpXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhYkNvdXBvbiA9IG5leHRQcm9wcy5jb3Jwb3JhdGVDb3Vwb25cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzX2Nhc2hiYWNrOiBsYWJDb3Vwb24uaXNfY2FzaGJhY2ssIGNvdXBvbkNvZGU6IGxhYkNvdXBvbi5jb2RlLCBjb3Vwb25JZDogbGFiQ291cG9uLmNvdXBvbl9pZCB8fCAnJywgcGF5X2J0bl9sb2FkaW5nOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwbHlDb3Vwb25zKCcyJywgbGFiQ291cG9uLCBsYWJDb3Vwb24uY291cG9uX2lkLCB0aGlzLnByb3BzLnNlbGVjdGVkTGFiLCAoc3VjY2VzcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBsZXQgeyB0b3RhbF9hbW91bnRfcGF5YWJsZV93aXRob3V0X2NvdXBvbiB9ID0gdGhpcy5nZXRTZWxlY3RlZFVzZXJEYXRhKHRoaXMucHJvcHMpXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b3RhbF9hbW91bnRfcGF5YWJsZV93aXRob3V0X2NvdXBvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFByaWNlID0gdG90YWxfYW1vdW50X3BheWFibGVfd2l0aG91dF9jb3Vwb25cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFwcGx5TGFiQ291cG9ucygnMicsIGxhYkNvdXBvbi5jb2RlLCBsYWJDb3Vwb24uY291cG9uX2lkLCB0aGlzLnByb3BzLnNlbGVjdGVkTGFiLCBmaW5hbFByaWNlLCB0ZXN0X2lkcywgbmV4dFByb3BzLnNlbGVjdGVkUHJvZmlsZSwgdGhpcy5zdGF0ZS5jYXJ0X2l0ZW0sIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyAncGF5X2J0bl9sb2FkaW5nJzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhYkNvdXBvbi5pc19wYXltZW50X3NwZWNpZmljKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlX3dhbGxldDogZmFsc2UsIGlzX3BheW1lbnRfY291cG9uX2FwcGxpZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgY291cG9uIGFscmVhZHkgYXBwbGllZCBqdXN0IHNldCBkaXNjb3VudCBwcmljZS5cbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHMubGFiQ291cG9uc1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXSAmJiBuZXh0UHJvcHMubGFiQ291cG9uc1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdICE9IG5leHRQcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdIHx8ICFpc1BpY2t1cFN0YXR1c1NhbWUgfHwgKG5leHRQcm9wcy5zZWxlY3RlZFByb2ZpbGUgJiYgKHRoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlICE9IG5leHRQcm9wcy5zZWxlY3RlZFByb2ZpbGUpKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgeyBmaW5hbFByaWNlLCB0ZXN0X2lkcyB9ID0gdGhpcy5nZXRMYWJQcmljZURhdGEobmV4dFByb3BzKVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYWJDb3Vwb25zID0gbmV4dFByb3BzLmxhYkNvdXBvbnNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ICdwYXlfYnRuX2xvYWRpbmcnOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgIGxldCB7IHRvdGFsX2Ftb3VudF9wYXlhYmxlX3dpdGhvdXRfY291cG9uIH0gPSB0aGlzLmdldFNlbGVjdGVkVXNlckRhdGEodGhpcy5wcm9wcylcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvdGFsX2Ftb3VudF9wYXlhYmxlX3dpdGhvdXRfY291cG9uICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsUHJpY2UgPSB0b3RhbF9hbW91bnRfcGF5YWJsZV93aXRob3V0X2NvdXBvblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwbHlMYWJDb3Vwb25zKCcyJywgbGFiQ291cG9uc1swXS5jb2RlLCBsYWJDb3Vwb25zWzBdLmNvdXBvbl9pZCwgdGhpcy5wcm9wcy5zZWxlY3RlZExhYiwgZmluYWxQcmljZSwgdGVzdF9pZHMsIG5leHRQcm9wcy5zZWxlY3RlZFByb2ZpbGUsIHRoaXMuc3RhdGUuY2FydF9pdGVtLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc19jYXNoYmFjazogbGFiQ291cG9uc1swXS5pc19jYXNoYmFjaywgY291cG9uQ29kZTogbGFiQ291cG9uc1swXS5jb2RlLCBjb3Vwb25JZDogbGFiQ291cG9uc1swXS5jb3Vwb25faWQgfHwgJycgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiQ291cG9uc1swXS5pc19wYXltZW50X3NwZWNpZmljKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2Vfd2FsbGV0OiBmYWxzZSwgaXNfcGF5bWVudF9jb3Vwb25fYXBwbGllZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdXBvbl9sb2FkaW5nOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRBbmRBcHBseUJlc3RDb3Vwb25zKG5leHRQcm9wcywgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgJ3BheV9idG5fbG9hZGluZyc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiBubyBjb3Vwb24gaXMgYXBwbGllZFxuICAgICAgICAgICAgaWYgKCFuZXh0UHJvcHMubGFiQ291cG9uc1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QW5kQXBwbHlCZXN0Q291cG9ucyhuZXh0UHJvcHMsIGZhbHNlKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyAncGF5X2J0bl9sb2FkaW5nJzogZmFsc2UgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5leHRQcm9wcy5sYWJDb3Vwb25zW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdICYmIG5leHRQcm9wcy5sYWJDb3Vwb25zW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ICdwYXlfYnRuX2xvYWRpbmcnOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVzZXRMYWJDb3Vwb25zKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFZhbGlkQ291cG9uKGNvdXBvbnMpIHtcbiAgICAgICAgbGV0IHZhbGlkQ291cG9uID0gbnVsbFxuICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBjb3Vwb25zKSB7XG4gICAgICAgICAgICBpZiAoY291cG9uc1tpbmRleF0udmFsaWQpIHtcbiAgICAgICAgICAgICAgICB2YWxpZENvdXBvbiA9IGNvdXBvbnNbaW5kZXhdXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsaWRDb3Vwb25cbiAgICB9XG5cbiAgICBnZXRBbmRBcHBseUJlc3RDb3Vwb25zKG5leHRQcm9wcywgaXNMZW5zZml0KSB7XG5cbiAgICAgICAgLy8gaWYgKG5leHRQcm9wcy5jb3Vwb25BdXRvQXBwbHkpIHtcbiAgICAgICAgbGV0IHsgZmluYWxQcmljZSwgdGVzdF9pZHMgfSA9IHRoaXMuZ2V0TGFiUHJpY2VEYXRhKG5leHRQcm9wcylcbiAgICAgICAgbGV0IHZhbGlkQ291cG9uXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0Q291cG9ucyh7XG4gICAgICAgICAgICBwcm9kdWN0SWQ6IDIsIGRlYWxfcHJpY2U6IGZpbmFsUHJpY2UsIGxhYl9pZDogdGhpcy5wcm9wcy5zZWxlY3RlZExhYiwgdGVzdF9pZHM6IHRlc3RfaWRzLCBwcm9maWxlX2lkOiBuZXh0UHJvcHMuc2VsZWN0ZWRQcm9maWxlLCBjYXJ0X2l0ZW06IHRoaXMuc3RhdGUuY2FydF9pdGVtLFxuICAgICAgICAgICAgY2I6IChjb3Vwb25zKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdXBvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTGVuc2ZpdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxlbnNGaXRQcm9wcyA9IHsgLi4ubmV4dFByb3BzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBsZW5zRml0UHJvcHMuZmluYWxQcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGxlbnNGaXRQcm9wcy50ZXN0X2lkc1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGxlbnNGaXRQcm9wcy5MQUJTXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZENvdXBvbiA9IGxlbnNGaXRQcm9wc1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRDb3Vwb24gPSB0aGlzLmdldFZhbGlkQ291cG9uKGNvdXBvbnMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkQ291cG9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgJ3BheV9idG5fbG9hZGluZyc6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwbHlDb3Vwb25zKCcyJywgdmFsaWRDb3Vwb24sIHZhbGlkQ291cG9uLmNvdXBvbl9pZCwgdGhpcy5wcm9wcy5zZWxlY3RlZExhYiwgKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgJ3BheV9idG5fbG9hZGluZyc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHsgdG90YWxfYW1vdW50X3BheWFibGVfd2l0aG91dF9jb3Vwb24gfSA9IHRoaXMuZ2V0U2VsZWN0ZWRVc2VyRGF0YShuZXh0UHJvcHMpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG90YWxfYW1vdW50X3BheWFibGVfd2l0aG91dF9jb3Vwb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsUHJpY2UgPSB0b3RhbF9hbW91bnRfcGF5YWJsZV93aXRob3V0X2NvdXBvblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hcHBseUxhYkNvdXBvbnMoJzInLCB2YWxpZENvdXBvbi5jb2RlLCB2YWxpZENvdXBvbi5jb3Vwb25faWQsIHRoaXMucHJvcHMuc2VsZWN0ZWRMYWIsIGZpbmFsUHJpY2UsIHRlc3RfaWRzLCB0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZSwgdGhpcy5zdGF0ZS5jYXJ0X2l0ZW0sIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgJ3BheV9idG5fbG9hZGluZyc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTGVuc2ZpdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93X2xlbnNmaXRfcG9wdXA6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNfY2FzaGJhY2s6IHZhbGlkQ291cG9uLmlzX2Nhc2hiYWNrLCBjb3Vwb25Db2RlOiB2YWxpZENvdXBvbi5jb2RlLCBjb3Vwb25JZDogdmFsaWRDb3Vwb24uY291cG9uX2lkIHx8ICcnIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRDb3Vwb24uaXNfcGF5bWVudF9zcGVjaWZpYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2Vfd2FsbGV0OiBmYWxzZSwgaXNfcGF5bWVudF9jb3Vwb25fYXBwbGllZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTGVuc2ZpdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93X2xlbnNmaXRfcG9wdXA6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlc2V0TGFiQ291cG9ucygpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY291cG9uQ29kZTogXCJcIiwgY291cG9uSWQ6ICcnLCBpc19jYXNoYmFjazogZmFsc2UsIHVzZV93YWxsZXQ6IHRydWUsIGlzX3BheW1lbnRfY291cG9uX2FwcGxpZWQ6IGZhbHNlLCAncGF5X2J0bl9sb2FkaW5nJzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0xlbnNmaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93X2xlbnNmaXRfcG9wdXA6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXNldExhYkNvdXBvbnMoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY291cG9uQ29kZTogXCJcIiwgY291cG9uSWQ6ICcnLCBpc19jYXNoYmFjazogZmFsc2UsIHVzZV93YWxsZXQ6IHRydWUsIGlzX3BheW1lbnRfY291cG9uX2FwcGxpZWQ6IGZhbHNlLCAncGF5X2J0bl9sb2FkaW5nJzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdXBvbl9sb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdXBvbl9sb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgZ2V0TGFiUHJpY2VEYXRhKG5leHRQcm9wcykge1xuICAgICAgICBsZXQgaXNfaG9tZV9jb2xsZWN0aW9uX2VuYWJsZWQgPSB0cnVlXG4gICAgICAgIGxldCBmaW5hbFByaWNlID0gMFxuICAgICAgICBsZXQgdGVzdF9pZHMgPSBbXVxuXG4gICAgICAgIG5leHRQcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLnRlc3RzLm1hcCgodHdwLCBpKSA9PiB7XG4gICAgICAgICAgICB0ZXN0X2lkcy5wdXNoKHR3cC50ZXN0X2lkKVxuICAgICAgICAgICAgbGV0IHByaWNlID0gbnVsbFxuICAgICAgICAgICAgaWYgKHR3cC52aXAgJiYgT2JqZWN0LmtleXModHdwLnZpcCkubGVuZ3RoICYmIHR3cC52aXAuaXNfdmlwX21lbWJlciAmJiB0d3AudmlwLmNvdmVyZWRfdW5kZXJfdmlwKSB7XG4gICAgICAgICAgICAgICAgcHJpY2UgKz0gdHdwLnZpcC52aXBfYW1vdW50ICsgdHdwLnZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByaWNlICs9IHR3cC5kZWFsX3ByaWNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXR3cC5pc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIGlzX2hvbWVfY29sbGVjdGlvbl9lbmFibGVkID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsUHJpY2UgKz0gcGFyc2VGbG9hdChwcmljZSlcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoaXNfaG9tZV9jb2xsZWN0aW9uX2VuYWJsZWQgJiYgKG5leHRQcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZS5yX3BpY2t1cCA9PSAnaG9tZScgfHwgbmV4dFByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlLnBfcGlja3VwID09ICdob21lJykpIHtcbiAgICAgICAgICAgIGZpbmFsUHJpY2UgPSBmaW5hbFByaWNlICsgKG5leHRQcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLmxhYi5ob21lX3BpY2t1cF9jaGFyZ2VzIHx8IDApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBmaW5hbFByaWNlLCB0ZXN0X2lkcyB9XG4gICAgfVxuXG4gICAgb3BlblRlc3RzKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zZW9GcmllbmRseSkge1xuICAgICAgICAgICAgbGV0IHVybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0/bGFiX2lkPSR7dGhpcy5wcm9wcy5zZWxlY3RlZExhYn0mYWN0aW9uX3BhZ2U9dGVzdHNgXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCh1cmwpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2xhYi8ke3RoaXMuc3RhdGUuc2VsZWN0ZWRMYWJ9L3Rlc3RzYClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVBpY2t1cFR5cGUodHlwZSkge1xuICAgICAgICAvL2Fsd2F5cyBjbGVhciBzZWxlY3RlZCB0aW1lIGF0IGxhYiBwcm9maWxlXG4gICAgICAgIGxldCBzbG90ID0geyB0aW1lOiB7fSB9XG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWN0TGFiVGltZVNMb3Qoc2xvdCwgZmFsc2UpXG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWN0TGFiQXBwb2ludG1lbnRUeXBlKHR5cGUpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93VGltZUVycm9yOiBmYWxzZSwgc2hvd0FkZHJlc3NFcnJvcjogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgbmF2aWdhdGVUbyh3aGVyZSwgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUsIHNlbGVjdFRpbWVFcnJvciA9IGZhbHNlKSB7XG4gICAgICAgIHN3aXRjaCAod2hlcmUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJ0aW1lXCI6IHtcbiAgICAgICAgICAgICAgICAvL0dldCBUZXN0IGlkcyBvZiBhbGwgc2VsZWN0ZWQgVGVzdHNcbiAgICAgICAgICAgICAgICBsZXQgdGVzdF9pZHMgPSB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMubWFwKHggPT4geC50ZXN0X2lkKVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucGluY29kZSB8fCAodGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdICYmIHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS5sYWIgJiYgIXRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS5sYWIuaXNfdGh5cm9jYXJlKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCByX3BpY2t1cCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGUucl9waWNrdXBcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBfcGlja3VwID0gdGhpcy5wcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZS5wX3BpY2t1cFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLmxhYi5pc190aHlyb2NhcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNlb0ZyaWVuZGx5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0/bGFiX2lkPSR7dGhpcy5wcm9wcy5zZWxlY3RlZExhYn0mdHlwZT1sYWImZ29iYWNrPXRydWUmaXNfdGh5cm9jYXJlPXRydWUmYWN0aW9uX3BhZ2U9dGltaW5ncyZpc19pbnN1cmFuY2U9JHtpc19pbnN1cmFuY2VfYXBwbGljYWJsZX0mdGVzdF9pZHM9JHt0ZXN0X2lkc30mcl9waWNrdXA9JHtyX3BpY2t1cH0mcF9waWNrdXA9JHtwX3BpY2t1cH0mc2VsZWN0ZWRUeXBlPSR7c2VsZWN0VGltZUVycm9yID8gJ3NlcGVyYXRlbHknIDogJ2FsbCd9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHVybClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9sYWIvJHt0aGlzLnByb3BzLnNlbGVjdGVkTGFifS90aW1lc2xvdHM/dHlwZT1sYWImZ29iYWNrPXRydWUmaXNfdGh5cm9jYXJlPXRydWUmaXNfaW5zdXJhbmNlPSR7aXNfaW5zdXJhbmNlX2FwcGxpY2FibGV9JnRlc3RfaWRzPSR7dGVzdF9pZHN9JnJfcGlja3VwPSR7cl9waWNrdXB9JnBfcGlja3VwPSR7cF9waWNrdXB9JnNlbGVjdGVkVHlwZT0ke3NlbGVjdFRpbWVFcnJvciA/ICdzZXBlcmF0ZWx5JyA6ICdhbGwnfWApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5zZW9GcmllbmRseSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9P2xhYl9pZD0ke3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJ9JnR5cGU9bGFiJmdvYmFjaz10cnVlJmlzX3RoeXJvY2FyZT1mYWxzZSZhY3Rpb25fcGFnZT10aW1pbmdzJmlzX2luc3VyYW5jZT0ke2lzX2luc3VyYW5jZV9hcHBsaWNhYmxlfSZ0ZXN0X2lkcz0ke3Rlc3RfaWRzfSZyX3BpY2t1cD0ke3JfcGlja3VwfSZwX3BpY2t1cD0ke3BfcGlja3VwfSZzZWxlY3RlZFR5cGU9JHtzZWxlY3RUaW1lRXJyb3IgPyAnc2VwZXJhdGVseScgOiAnYWxsJ31gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2godXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2xhYi8ke3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJ9L3RpbWVzbG90cz90eXBlPWxhYiZnb2JhY2s9dHJ1ZSZpc190aHlyb2NhcmU9ZmFsc2UmaXNfaW5zdXJhbmNlPSR7aXNfaW5zdXJhbmNlX2FwcGxpY2FibGV9JnRlc3RfaWRzPSR7dGVzdF9pZHN9JnJfcGlja3VwPSR7cl9waWNrdXB9JnBfcGlja3VwPSR7cF9waWNrdXB9JnNlbGVjdGVkVHlwZT0ke3NlbGVjdFRpbWVFcnJvciA/ICdzZXBlcmF0ZWx5JyA6ICdhbGwnfWApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1BpbmNvZGVQb3B1cDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSBcInBhdGllbnRcIjoge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvdXNlci9mYW1pbHk/cGljaz10cnVlJmxhYl9pZD0ke3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJ9JmlzX2luc3VyYW5jZT0ke2lzX2luc3VyYW5jZV9hcHBsaWNhYmxlfWApXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgXCJhZGRyZXNzXCI6IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5hZGRyZXNzICYmIHRoaXMucHJvcHMuYWRkcmVzcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC91c2VyL2FkZHJlc3M/cGljaz10cnVlYClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL3VzZXIvYWRkcmVzcy9hZGRgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFBhdGllbnREZXRhaWxzKGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlLCBjZW50ZXJfdmlzaXRfZW5hYmxlZCwgaXNfaG9tZV9jaGFyZ2VzX2FwcGxpY2FibGUpIHtcbiAgICAgICAgbGV0IHBhdGllbnQgPSBudWxsXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlXSAmJiAhdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV0uaXNEdW1teVVzZXIpIHtcbiAgICAgICAgICAgIHBhdGllbnQgPSB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlXVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiA8Q2hvb3NlUGF0aWVudE5ld1ZpZXcgaXNfY29ycG9yYXRlPXshIXRoaXMucHJvcHMuY29ycG9yYXRlQ291cG9ufSBwYXRpZW50PXtwYXRpZW50fSBuYXZpZ2F0ZVRvPXt0aGlzLm5hdmlnYXRlVG8uYmluZCh0aGlzKX0gcHJvZmlsZURhdGFDb21wbGV0ZWQ9e3RoaXMucHJvZmlsZURhdGFDb21wbGV0ZWQuYmluZCh0aGlzKX0gey4uLnRoaXMucHJvcHN9IGlzX2xhYj17dHJ1ZX0gY2xlYXJUZXN0Rm9ySW5zdXJlZD17dGhpcy5jbGVhclRlc3RGb3JJbnN1cmVkLmJpbmQodGhpcyl9IGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlPXtpc19pbnN1cmFuY2VfYXBwbGljYWJsZX0gY2hlY2tQcmVzY3JpcHRpb249e3RoaXMuY2hlY2tQcmVzY3JpcHRpb24uYmluZCh0aGlzKX0gaXNFbWFpbE5vdFZhbGlkPXt0aGlzLnN0YXRlLmlzRW1haWxOb3RWYWxpZH0gZ2V0RGF0YUFmdGVyTG9naW49e3RoaXMuZ2V0RGF0YUFmdGVyTG9naW59IG5vbklwZExlYWRzPXt0aGlzLm5vbklwZExlYWRzLmJpbmQodGhpcyl9IC8+XG5cbiAgICB9XG5cbiAgICBnZXRTZWxlY3RvcnMoaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUsIGNlbnRlcl92aXNpdF9lbmFibGVkLCBpc19ob21lX2NoYXJnZXNfYXBwbGljYWJsZSkge1xuICAgICAgICBsZXQgcGF0aWVudCA9IG51bGxcbiAgICAgICAgaWYgKHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdICYmICF0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlXS5pc0R1bW15VXNlcikge1xuICAgICAgICAgICAgcGF0aWVudCA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPFZpc2l0VGltZU5ldyB0eXBlPVwiaG9tZVwiIG5hdmlnYXRlVG89e3RoaXMubmF2aWdhdGVUby5iaW5kKHRoaXMpfSBzZWxlY3RlZFNsb3Q9e3RoaXMucHJvcHMuc2VsZWN0ZWRTbG90fSB0aW1lRXJyb3I9e3RoaXMuc3RhdGUuc2hvd1RpbWVFcnJvcn0gey4uLnRoaXMucHJvcHN9IHNlbGVjdGVkTGFiPXt0aGlzLnByb3BzLnNlbGVjdGVkTGFifSB0b2dnbGU9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgJ3Nob3dQaW5jb2RlUG9wdXAnKX0gaXNfaW5zdXJhbmNlX2FwcGxpY2FibGU9e2lzX2luc3VyYW5jZV9hcHBsaWNhYmxlfSAvPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGllbnQgJiYgaXNfaG9tZV9jaGFyZ2VzX2FwcGxpY2FibGUgP1xuICAgICAgICAgICAgICAgICAgICA8UGlja3VwQWRkcmVzcyB7Li4udGhpcy5wcm9wc30gbmF2aWdhdGVUbz17dGhpcy5uYXZpZ2F0ZVRvLmJpbmQodGhpcywgJ2FkZHJlc3MnKX0gYWRkcmVzc0Vycm9yPXt0aGlzLnN0YXRlLnNob3dBZGRyZXNzRXJyb3J9IC8+XG4gICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgLypcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMucHJvcHMuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImxhYlwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlzaXRUaW1lTmV3IHR5cGU9XCJsYWJcIiBuYXZpZ2F0ZVRvPXt0aGlzLm5hdmlnYXRlVG8uYmluZCh0aGlzKX0gc2VsZWN0ZWRTbG90PXt0aGlzLnByb3BzLnNlbGVjdGVkU2xvdH0gdGltZUVycm9yPXt0aGlzLnN0YXRlLnNob3dUaW1lRXJyb3J9IHsuLi50aGlzLnByb3BzfSBzZWxlY3RlZExhYj17dGhpcy5wcm9wcy5zZWxlY3RlZExhYn0gdG9nZ2xlPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsICdzaG93UGluY29kZVBvcHVwJyl9IGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlPXtpc19pbnN1cmFuY2VfYXBwbGljYWJsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hvb3NlUGF0aWVudE5ld1ZpZXcgaXNfY29ycG9yYXRlPXshIXRoaXMucHJvcHMuY29ycG9yYXRlQ291cG9ufSBwYXRpZW50PXtwYXRpZW50fSBuYXZpZ2F0ZVRvPXt0aGlzLm5hdmlnYXRlVG8uYmluZCh0aGlzKX0gcHJvZmlsZURhdGFDb21wbGV0ZWQ9e3RoaXMucHJvZmlsZURhdGFDb21wbGV0ZWQuYmluZCh0aGlzKX0gey4uLnRoaXMucHJvcHN9IGlzX2xhYj17dHJ1ZX0gY2xlYXJUZXN0Rm9ySW5zdXJlZD17dGhpcy5jbGVhclRlc3RGb3JJbnN1cmVkLmJpbmQodGhpcyl9IGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlPXtpc19pbnN1cmFuY2VfYXBwbGljYWJsZX0gY2hlY2tQcmVzY3JpcHRpb249e3RoaXMuY2hlY2tQcmVzY3JpcHRpb24uYmluZCh0aGlzKX0gaXNFbWFpbE5vdFZhbGlkPXt0aGlzLnN0YXRlLmlzRW1haWxOb3RWYWxpZH0gaXNEb2JOb3RWYWxpZD17dGhpcy5zdGF0ZS5pc0RvYk5vdFZhbGlkfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImhvbWVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpc2l0VGltZU5ldyB0eXBlPVwiaG9tZVwiIG5hdmlnYXRlVG89e3RoaXMubmF2aWdhdGVUby5iaW5kKHRoaXMpfSBzZWxlY3RlZFNsb3Q9e3RoaXMucHJvcHMuc2VsZWN0ZWRTbG90fSB0aW1lRXJyb3I9e3RoaXMuc3RhdGUuc2hvd1RpbWVFcnJvcn0gey4uLnRoaXMucHJvcHN9IHNlbGVjdGVkTGFiPXt0aGlzLnByb3BzLnNlbGVjdGVkTGFifSB0b2dnbGU9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgJ3Nob3dQaW5jb2RlUG9wdXAnKX0gaXNfaW5zdXJhbmNlX2FwcGxpY2FibGU9e2lzX2luc3VyYW5jZV9hcHBsaWNhYmxlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaG9vc2VQYXRpZW50TmV3VmlldyBpc19jb3Jwb3JhdGU9eyEhdGhpcy5wcm9wcy5jb3Jwb3JhdGVDb3Vwb259IHBhdGllbnQ9e3BhdGllbnR9IG5hdmlnYXRlVG89e3RoaXMubmF2aWdhdGVUby5iaW5kKHRoaXMpfSBwcm9maWxlRGF0YUNvbXBsZXRlZD17dGhpcy5wcm9maWxlRGF0YUNvbXBsZXRlZC5iaW5kKHRoaXMpfSB7Li4udGhpcy5wcm9wc30gaXNfbGFiPXt0cnVlfSBjbGVhclRlc3RGb3JJbnN1cmVkPXt0aGlzLmNsZWFyVGVzdEZvckluc3VyZWQuYmluZCh0aGlzKX0gaXNfaW5zdXJhbmNlX2FwcGxpY2FibGU9e2lzX2luc3VyYW5jZV9hcHBsaWNhYmxlfSBjaGVja1ByZXNjcmlwdGlvbj17dGhpcy5jaGVja1ByZXNjcmlwdGlvbi5iaW5kKHRoaXMpfSBpc0VtYWlsTm90VmFsaWQ9e3RoaXMuc3RhdGUuaXNFbWFpbE5vdFZhbGlkfSBpc0RvYk5vdFZhbGlkPXt0aGlzLnN0YXRlLmlzRG9iTm90VmFsaWR9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpY2t1cEFkZHJlc3Mgey4uLnRoaXMucHJvcHN9IG5hdmlnYXRlVG89e3RoaXMubmF2aWdhdGVUby5iaW5kKHRoaXMsICdhZGRyZXNzJyl9IGFkZHJlc3NFcnJvcj17dGhpcy5zdGF0ZS5zaG93QWRkcmVzc0Vycm9yfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSovXG4gICAgfVxuXG4gICAgcHJvZmlsZURhdGFDb21wbGV0ZWQoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YS5uYW1lID09ICcnIHx8IGRhdGEuZ2VuZGVyID09ICcnIHx8IGRhdGEucGhvbmVOdW1iZXIgPT0gJycgfHwgZGF0YS5lbWFpbCA9PSAnJyB8fCAhZGF0YS5vdHBWZXJpZnlTdWNjZXNzIHx8IGRhdGEuZG9iID09ICcnIHx8IGRhdGEuZG9iID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMucGF0aWVudERldGFpbHMoZGF0YSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9maWxlRGF0YUZpbGxlZDogZmFsc2UgfSlcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLm90cFZlcmlmeVN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxldCBjbGVhcl9kYXRhID0ge31cbiAgICAgICAgICAgIHRoaXMucHJvcHMucGF0aWVudERldGFpbHMoY2xlYXJfZGF0YSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9maWxlRGF0YUZpbGxlZDogdHJ1ZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tQcmVzY3JpcHRpb24oKSB7XG4gICAgICAgIGxldCBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSA9IGZhbHNlXG4gICAgICAgIGxldCBpc190ZXN0c19jb3ZlcmVkX3VuZGVyX2luc3VyYW5jZSA9IGZhbHNlXG4gICAgICAgIGxldCBpc19zZWxlY3RlZF91c2VyX2luc3VyZWQgPSBmYWxzZVxuXG4gICAgICAgIGxldCBkYXRhID0ge31cbiAgICAgICAgbGV0IHNlbGVjdGVkRGF0ZSA9IG51bGxcbiAgICAgICAgbGV0IHNlbGVjdGVkX3Rlc3RfaWQgPSBbXVxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IHBhdGllbnQgPSBudWxsXG4gICAgICAgIGxldCBwcm9maWxlID0gbnVsbFxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlXSAmJiAhdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV0uaXNEdW1teVVzZXIpIHtcbiAgICAgICAgICAgIHBhdGllbnQgPSB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlXVxuICAgICAgICAgICAgaXNfc2VsZWN0ZWRfdXNlcl9pbnN1cmVkID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV0uaXNfaW5zdXJlZFxuICAgICAgICAgICAgcHJvZmlsZSA9IHBhdGllbnQuaWRcbiAgICAgICAgfVxuICAgICAgICBpc190ZXN0c19jb3ZlcmVkX3VuZGVyX2luc3VyYW5jZSA9IHRydWVcbiAgICAgICAgdGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLnRlc3RzLm1hcCgodGVzdCwgaSkgPT4ge1xuXG4gICAgICAgICAgICBpZiAodGVzdC5pbnN1cmFuY2UgJiYgdGVzdC5pbnN1cmFuY2UuaXNfaW5zdXJhbmNlX2NvdmVyZWQgJiYgdGVzdC5pbnN1cmFuY2UuaW5zdXJhbmNlX3RocmVzaG9sZF9hbW91bnQgPj0gcGFyc2VJbnQodGVzdC5kZWFsX3ByaWNlKSkge1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfaW5zdXJhbmNlID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgPSBpc190ZXN0c19jb3ZlcmVkX3VuZGVyX2luc3VyYW5jZSAmJiBpc19zZWxlY3RlZF91c2VyX2luc3VyZWRcblxuICAgICAgICAvLyBpbiBjYXNlIG9mIHVwbG9hZCBwcmVzY3JpcHRpb25cbiAgICAgICAgaWYgKGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhcyAmJiB0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzLm1hcCgodHdwLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkX3Rlc3RfaWQucHVzaCh0d3AuaWQpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEuc3RhcnRfZGF0ZSA9IHNlbGVjdGVkRGF0ZSA/IHNlbGVjdGVkRGF0ZSA6IHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LmRhdGUgPyB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5kYXRlIDogbmV3IERhdGUoKVxuICAgICAgICAgICAgZGF0YS5sYWJfdGVzdCA9IHNlbGVjdGVkX3Rlc3RfaWRcbiAgICAgICAgICAgIGRhdGEubGFiID0gdGhpcy5wcm9wcy5zZWxlY3RlZExhYlxuICAgICAgICAgICAgZGF0YS5wcm9maWxlID0gcHJvZmlsZVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5wcmVCb29raW5nKGRhdGEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRCb29raW5nRGF0YSgpIHtcbiAgICAgICAgbGV0IHRlc3RfaWRzID0gW11cbiAgICAgICAgbGV0IGNvdXBvbl9kYXRhID0ge31cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXSAmJiB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMgJiYgdGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLnRlc3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGVzdF9pZHMgPSB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMubWFwKCh4ID0+IHgudGVzdF9pZCkpXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxhYkNvdXBvbnMgJiYgdGhpcy5wcm9wcy5sYWJDb3Vwb25zW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdICYmIHRoaXMucHJvcHMubGFiQ291cG9uc1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvdXBvbl9kYXRhID0gdGhpcy5wcm9wcy5sYWJDb3Vwb25zW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdWzBdXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdGVzdF9pZHMsIGxhYklkOiB0aGlzLnByb3BzLnNlbGVjdGVkTGFiLCBwaW5jb2RlOiB0aGlzLnN0YXRlLnBpbmNvZGUsIHByb2ZpbGU6IHRoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlLCBzZWxlY3RlZFNsb3Q6IHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LCBjb3Vwb25fZGF0YSwgcGF5bWVudF90eXBlOiB0aGlzLnByb3BzLnBheW1lbnRfdHlwZSB9XG4gICAgfVxuXG4gICAgc2VuZFNpbmdsZUZsb3dBZ2VudEJvb2tpbmdVUkwocG9zdERhdGEpIHtcbiAgICAgICAgLy9mb3IgYWdlbnQgbG9naW4gc2VuZCBib29raW5nIHVybCBmb3Igc2luZ2xlIGZsb3dcbiAgICAgICAgbGV0IGJvb2tpbmdfZGF0YSA9IHRoaXMuZ2V0Qm9va2luZ0RhdGEoKVxuICAgICAgICBib29raW5nX2RhdGEgPSB7IC4uLnBvc3REYXRhLCAuLi5ib29raW5nX2RhdGEsIGlzX3NpbmdsZV9mbG93X2xhYjogdHJ1ZSwgZHVtbXlfZGF0YV90eXBlOiAnU0lOR0xFX1BVUkNIQVNFJyB9XG5cbiAgICAgICAgdGhpcy5wcm9wcy5wdXNoTWVtYmVyc0RhdGEoYm9va2luZ19kYXRhLCAocmVzcCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3AuZHVtbXlfaWQpIHtcblxuICAgICAgICAgICAgICAgIGxldCBleHRyYVBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbGFuZGluZ191cmw6IGBsYWIvJHt0aGlzLnByb3BzLnNlbGVjdGVkTGFifS9ib29rP2R1bW15X2lkPSR7cmVzcC5kdW1teV9pZH0mdGVzdF9pZHM9JHtib29raW5nX2RhdGEudGVzdF9pZHN9YCxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBvc3REYXRhWydtZXNzYWdlX21lZGl1bSddKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4dHJhUGFyYW1zWydtZXNzYWdlX21lZGl1bSddID0gcG9zdERhdGFbJ21lc3NhZ2VfbWVkaXVtJ11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kQWdlbnRCb29raW5nVVJMKHRoaXMuc3RhdGUub3JkZXJfaWQsICdzbXMnLCAnU0lOR0xFX1BVUkNIQVNFJywgbnVsbCwgZXh0cmFQYXJhbXMsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiU01TIFNFTkQgRVJST1JcIiB9KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlNNUyBTRU5UIFNVQ0NFU1NGVUxZXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJvY2VlZCh0ZXN0UGlja2VkLCBhZGRyZXNzUGlja2VkLCBkYXRlUGlja2VkLCBwYXRpZW50LCBhZGRUb0NhcnQsIHRvdGFsX3ByaWNlLCB0b3RhbF93YWxsZXRfYmFsYW5jZSwgcHJlc2NyaXB0aW9uUGlja2VkLCBpc19zZWxlY3RlZF91c2VyX2luc3VyYW5jZV9zdGF0dXMsIGV4dHJhUGFyYW1zLCB2aXBfaXNfcHJlc2NyaXB0aW9uX3JlcXVpcmVkLCBlKSB7XG5cbiAgICAgICAgLy9DaGVjayBpZiBwYXRpZW50IGlzIHNlbGVjdGVkIG9yIG5vdFxuICAgICAgICBpZiAoIXBhdGllbnQpIHtcbiAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgQWRkIFBhdGllbnRcIiB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLy9DaGVjayBpZiBwYXRpZW50IGVtYWlsaWQgZXhpc3Qgb3Igbm90XG4gICAgICAgIC8vIGlmKHBhdGllbnQgJiYgIXBhdGllbnQuZW1haWwpe1xuICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7aXNFbWFpbE5vdFZhbGlkOnRydWV9KVxuICAgICAgICAvLyAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBFbnRlciBZb3VyIEVtYWlsIElkXCIgfSlcbiAgICAgICAgLy8gICAgIHJldHVybiBcbiAgICAgICAgLy8gfVxuICAgICAgICAvL0NoZWNrIGlmIHBhdGllbnQgZG9iIGV4aXN0IG9yIG5vdFxuICAgICAgICBpZiAocGF0aWVudCAmJiAhcGF0aWVudC5kb2IpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0RvYk5vdFZhbGlkOiB0cnVlIH0pXG4gICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIEVudGVyIFlvdXIgRGF0ZSBvZiBCaXJ0aFwiIH0pXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vVG8gY2xhaW0gaW5zdXJhbmNlIHN0YXR1cyAmIGNsYWltXG4gICAgICAgIGlmIChwYXRpZW50ICYmIGlzX3NlbGVjdGVkX3VzZXJfaW5zdXJhbmNlX3N0YXR1cyAmJiBpc19zZWxlY3RlZF91c2VyX2luc3VyYW5jZV9zdGF0dXMgPT0gNCkge1xuICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIllvdXIgZG9jdW1lbnRzIGZyb20gdGhlIGxhc3QgY2xhaW0gYXJlIHVuZGVyIHZlcmlmaWNhdGlvbi5QbGVhc2Ugd3JpdGUgdG8gY3VzdG9tZXJjYXJlQGRvY3ByaW1lLmNvbSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cIiB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLy9jaGVjayBpZiBhbnkgdGVzdCBpcyBzZWxjdGVkIGJ5IHVzZXIgb3Igbm90XG4gICAgICAgIGlmICghdGVzdFBpY2tlZCkge1xuICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBzZWxlY3Qgc29tZSB0ZXN0cy5cIiB9KTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIC8vY2hlY2sgaWYgdGltZXNsb3RzIG9mIGFsbCBzZWxlY3RlZCB0ZXN0cyBhcmUgc2VsY3RlZCBieSB1c2VyIG9yIG5vdFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3Quc2VsZWN0ZWRUZXN0c1RpbWVTbG90KSB7XG4gICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLnRlc3RzLm1hcCgodGVzdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5zZWxlY3RlZFRlc3RzVGltZVNsb3RbdGVzdC50ZXN0X2lkXSkge1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2Ugc2VsZWN0IHRpbWluZ3Mgb2YgYWxsIFRlc3RzLlwiIH0pO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkYXRlUGlja2VkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1RpbWVFcnJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgcGljayBhIHRpbWUgc2xvdC5cIiB9KTtcblxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApLy8gdGhpcy5zdGF0ZS5zY3JvbGxQb3NpdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy9DaGVjayBpZiBwYXRpZW50IGFkZHJlc3MgaXMgc2VsZWN0ZWQgb3Igbm90XG4gICAgICAgIGlmICghYWRkcmVzc1BpY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dBZGRyZXNzRXJyb3I6IHRydWUgfSk7XG4gICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIHBpY2sgYW4gYWRkcmVzcy5cIiB9KTtcblxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApLy90aGlzLnN0YXRlLnNjcm9sbFBvc2l0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvL0NoZWNrIGlmIHBpbmNvZGUgc2VsZWN0ZWQgYnkgdXNlciBtYXRjaGVzIHdpdGggdGhlIHBpbmNvZGUgb2YgdGhlIGFkZHJlc3Mgc2VsZWN0ZWQgYnkgdGhlIHVzZXJcbiAgICAgICAgaWYgKGFkZHJlc3NQaWNrZWQgJiYgdGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdICYmIHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS5sYWIgJiYgdGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLmxhYi5pc190aHlyb2NhcmUpIHtcblxuICAgICAgICAgICAgbGV0IHZhbGlkYXRlQWRkcmVzc1BpbmNvZGUgPSBmYWxzZVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuYWRkcmVzcyAmJiB0aGlzLnByb3BzLmFkZHJlc3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkQWRkcmVzc1BpbmNvZGUgPSB0aGlzLnByb3BzLmFkZHJlc3MuZmlsdGVyKHggPT4geC5pZCA9PSB0aGlzLnByb3BzLnNlbGVjdGVkQWRkcmVzcykubWFwKHggPT4geC5waW5jb2RlKVxuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkQWRkcmVzc1BpbmNvZGUubGVuZ3RoICYmIHBhcnNlSW50KHNlbGVjdGVkQWRkcmVzc1BpbmNvZGVbMF0pID09IHBhcnNlSW50KHRoaXMuc3RhdGUucGluY29kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVBZGRyZXNzUGluY29kZSA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdmFsaWRhdGVBZGRyZXNzUGluY29kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwaW5jb2RlTWlzbWF0Y2hFcnJvcjogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyppZiAoIXRoaXMuc3RhdGUucHJvZmlsZURhdGFGaWxsZWQpIHtcbiAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgZmlsbCB0aGUgaW5mb1wiIH0pO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0qL1xuICAgICAgICBpZiAoZS50YXJnZXQuZGF0YXNldC5kaXNhYmxlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlYWN0IGd1YXJhbnRlZXMgdGhhdCBzZXRTdGF0ZSBpbnNpZGUgaW50ZXJhY3RpdmUgZXZlbnRzIChzdWNoIGFzIGNsaWNrKSBpcyBmbHVzaGVkIGF0IGJyb3dzZXIgZXZlbnQgYm91bmRhcnlcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubG9hZGluZykge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgPSBmYWxzZVxuICAgICAgICBsZXQgaXNfdGVzdHNfY292ZXJlZF91bmRlcl9pbnN1cmFuY2UgPSBmYWxzZVxuICAgICAgICBsZXQgaXNfc2VsZWN0ZWRfdXNlcl9pbnN1cmVkID0gZmFsc2VcbiAgICAgICAgbGV0IGlzX3ZpcF9hcHBsaWNhYmxlID0gZmFsc2VcbiAgICAgICAgbGV0IGlzX3NlbGVjdGVkX3VzZXJfdW5kZXJfdmlwID0gZmFsc2VcbiAgICAgICAgbGV0IGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfdmlwID0gZmFsc2VcbiAgICAgICAgbGV0IHZpcF9hbW91bnRcblxuICAgICAgICBsZXQgaXNfc2VsZWN0ZWRfdXNlcl92aXAgPSB0cnVlIC8vIHRvIGNoZWNrIGlzIHBsdXNfcGxhbiBpcyBhcHBsaWNhYmxlIG9yIG5vdFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV0gJiYgIXRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdLmlzRHVtbXlVc2VyKSB7XG4gICAgICAgICAgICBpc19zZWxlY3RlZF91c2VyX2luc3VyZWQgPSB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlXS5pc19pbnN1cmVkXG4gICAgICAgICAgICBpc19zZWxlY3RlZF91c2VyX3VuZGVyX3ZpcCA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdLmlzX3ZpcF9tZW1iZXJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMucHJvZmlsZXMpLm1hcChmdW5jdGlvbiAoW2tleSwgdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmlzX3ZpcF9tZW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNfc2VsZWN0ZWRfdXNlcl92aXAgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNfcGxhbl9hcHBsaWNhYmxlID0gZmFsc2VcbiAgICAgICAgbGV0IGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfcGxhbiA9IHRydWVcbiAgICAgICAgbGV0IGlzX3NlbGVjdGVkX3VzZXJfaGFzX2FjdGl2ZV9wbGFuID0gZmFsc2VcbiAgICAgICAgbGV0IHNob3dfbGVuc2ZpdCA9IHRydWVcbiAgICAgICAgbGV0IGxlbnNmaXRfY291cG9ucyA9IG51bGxcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pc1VzZXJDYXJlZCAmJiB0aGlzLnByb3BzLmlzVXNlckNhcmVkLmhhc19hY3RpdmVfcGxhbikge1xuICAgICAgICAgICAgaXNfc2VsZWN0ZWRfdXNlcl9oYXNfYWN0aXZlX3BsYW4gPSB0aGlzLnByb3BzLmlzVXNlckNhcmVkLmhhc19hY3RpdmVfcGxhblxuICAgICAgICB9XG5cbiAgICAgICAgLy9DaGVjayBJZiBlYWNoIFRlc3RzIENvdmVyZWQgVW5kZXIgUGxhblxuICAgICAgICAvL0NoZWNrIElmIGVhY2ggVGVzdHMgQ292ZXJlZCBVbmRlciBJbnN1cmFuY2VcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdICYmIHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS50ZXN0cyAmJiB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfaW5zdXJhbmNlID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLnRlc3RzLm1hcCgodGVzdCwgaSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKHRlc3QuaW5zdXJhbmNlICYmIHRlc3QuaW5zdXJhbmNlLmlzX2luc3VyYW5jZV9jb3ZlcmVkICYmIHRlc3QuaW5zdXJhbmNlLmluc3VyYW5jZV90aHJlc2hvbGRfYW1vdW50ID49IHBhcnNlSW50KHRlc3QuZGVhbF9wcmljZSkpIHtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfaW5zdXJhbmNlID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGVzdC5pbmNsdWRlZF9pbl91c2VyX3BsYW4pIHtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfcGxhbiA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0ZXN0LmxlbnNmaXRfb2ZmZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0ZXN0LmxlbnNmaXRfb2ZmZXIuYXBwbGljYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd19sZW5zZml0ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbnNmaXRfY291cG9ucyA9IHRlc3QubGVuc2ZpdF9vZmZlci5jb3Vwb25cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGVzdC52aXAgJiYgdGVzdC52aXAuY292ZXJlZF91bmRlcl92aXApIHtcbiAgICAgICAgICAgICAgICAgICAgaXNfdGVzdHNfY292ZXJlZF91bmRlcl92aXAgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHZpcF9hbW91bnQgPSB0ZXN0LnZpcC52aXBfYW1vdW50XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfVxuICAgICAgICBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSA9IGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfaW5zdXJhbmNlICYmIGlzX3NlbGVjdGVkX3VzZXJfaW5zdXJlZFxuXG4gICAgICAgIGlzX3BsYW5fYXBwbGljYWJsZSA9IGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfcGxhbiAmJiBpc19zZWxlY3RlZF91c2VyX2hhc19hY3RpdmVfcGxhblxuXG4gICAgICAgIHNob3dfbGVuc2ZpdCA9IHNob3dfbGVuc2ZpdCAmJiB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0gJiYgdGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLnRlc3RzICYmIHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS50ZXN0cy5sZW5ndGhcblxuICAgICAgICAvKmlmKCF0aGlzLnN0YXRlLnNob3dfbGVuc2ZpdF9wb3B1cCAmJiAhdGhpcy5zdGF0ZS5sZW5zZml0X2RlY2xpbmUgJiYgc2hvd19sZW5zZml0ICYmICFpc19wbGFuX2FwcGxpY2FibGUgJiYgIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmIGxlbnNmaXRfY291cG9ucyAmJiBPYmplY3Qua2V5cyhsZW5zZml0X2NvdXBvbnMpLmxlbmd0aCA+IDAgJiYgdGhpcy5zdGF0ZS5jb3Vwb25JZCAhPWxlbnNmaXRfY291cG9ucy5jb3Vwb25faWQpe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd19sZW5zZml0X3BvcHVwOnRydWUsIGxlbnNmaXRfY291cG9uczpsZW5zZml0X2NvdXBvbnN9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0qL1xuICAgICAgICBpc192aXBfYXBwbGljYWJsZSA9IC8qaXNfdGVzdHNfY292ZXJlZF91bmRlcl92aXAgJiYqLyBpc19zZWxlY3RlZF91c2VyX3VuZGVyX3ZpcFxuICAgICAgICBsZXQgcHJlc2NyaXB0aW9uSWRzID0gW11cbiAgICAgICAgLy9DaGVjayBpZiBwcmlvciB0byB0ZXN0LCBwcmVzY3JpcHRpb24gZXhpc3QgZm9yIHRoZSBpbnN1cmVkIGN1c3RvbWVyIG9yIG5vdFxuICAgICAgICBpZiAoKHByZXNjcmlwdGlvblBpY2tlZCAmJiBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSkgfHwgdmlwX2lzX3ByZXNjcmlwdGlvbl9yZXF1aXJlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMudXNlcl9wcmVzY3JpcHRpb25zICYmIHRoaXMucHJvcHMudXNlcl9wcmVzY3JpcHRpb25zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSB1cGxvYWQgcHJlc2NyaXB0aW9uLlwiIH0pO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnVzZXJfcHJlc2NyaXB0aW9ucyAmJiB0aGlzLnByb3BzLnVzZXJfcHJlc2NyaXB0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyX3ByZXNjcmlwdGlvbnNbMF0uaW1nX3BhdGhfaWRzLm1hcCgoaW1nSWQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2NyaXB0aW9uSWRzLnB1c2goeyAncHJlc2NyaXB0aW9uJzogaW1nSWQuaWQgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9Db25maXJtYXRpb24gcG9wdXAgZm9yIHRoZSB0ZXN0cywgd2hvc2UgYW1vdW50IHBheWFibGUgaXMgMFxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93Q29uZmlybWF0aW9uUG9wdXAgPT0gJ2Nsb3NlJyAmJiAhYWRkVG9DYXJ0ICYmICh0b3RhbF9wcmljZSA9PSAwIHx8ICh0aGlzLnN0YXRlLnVzZV93YWxsZXQgJiYgdG90YWxfd2FsbGV0X2JhbGFuY2UgPiAwKSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q29uZmlybWF0aW9uUG9wdXA6ICdvcGVuJyB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNfc3BvX2FwcG9pbnRtZW50IHx8ICh0aGlzLnByb3BzLnBheW1lbnRfdHlwZSA9PSA2ICYmIFNUT1JBR0UuaXNBZ2VudCgpKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiBcIlwiIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3I6IFwiXCIgfSlcbiAgICAgICAgfVxuXG5cbiAgICAgICAvKiBsZXQgc3RhcnRfZGF0ZSA9IHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LmRhdGVcbiAgICAgICAgbGV0IHN0YXJ0X3RpbWUgPSB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC50aW1lLnZhbHVlXG4gICAgICAgKi8gbGV0IHRlc3RJZHMgPSB0aGlzLnByb3BzLmxhYl90ZXN0X2RhdGFbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0gfHwgW11cbiAgICAgICAgdGVzdElkcyA9IHRlc3RJZHMubWFwKHggPT4geC5pZClcbiAgICAgICAgbGV0IHV0bV90YWdzID0gdGhpcy5nZXRVdG1UYWdzKClcbiAgICAgICAgbGV0IHBvc3REYXRhID0ge1xuICAgICAgICAgICAgbGFiOiB0aGlzLnByb3BzLnNlbGVjdGVkTGFiLFxuICAgICAgICAgICAgdGVzdF9pZHM6IHRlc3RJZHMsXG4gICAgICAgICAgICBwcm9maWxlOiB0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZSxcbiAgICAgICAgICAgIGFkZHJlc3M6IHRoaXMucHJvcHMuc2VsZWN0ZWRBZGRyZXNzLFxuICAgICAgICAgICAgcGF5bWVudF90eXBlOiAxLCAvLyBUT0RPIDogU2VsZWN0IHBheW1lbnQgdHlwZVxuICAgICAgICAgICAgdXNlX3dhbGxldDogdGhpcy5wcm9wcy5wYXltZW50X3R5cGUgPT0gNiA/IGZhbHNlIDogdGhpcy5zdGF0ZS51c2Vfd2FsbGV0LFxuICAgICAgICAgICAgY2FydF9pdGVtOiB0aGlzLnN0YXRlLmNhcnRfaXRlbSxcbiAgICAgICAgICAgIHByZXNjcmlwdGlvbl9saXN0OiBwcmVzY3JpcHRpb25JZHMsXG4gICAgICAgICAgICBtdWx0aV90aW1pbmdzX2VuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBmcm9tX3dlYjogdHJ1ZSxcbiAgICAgICAgICAgIHV0bV90YWdzOiB1dG1fdGFnc1xuICAgICAgICB9XG4gICAgICAgIGxldCB2aXNpdG9yX2luZm8gPSBHVE0uZ2V0VmlzaXRvckluZm8oKVxuICAgICAgICBpZiAodmlzaXRvcl9pbmZvICYmIHZpc2l0b3JfaW5mby52aXNpdF9pZCkge1xuICAgICAgICAgICAgcG9zdERhdGFbJ3Zpc2l0X2lkJ10gPSB2aXNpdG9yX2luZm8udmlzaXRfaWRcbiAgICAgICAgICAgIHBvc3REYXRhWyd2aXNpdG9yX2lkJ10gPSB2aXNpdG9yX2luZm8udmlzaXRvcl9pZFxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkU2xvdCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90WydhbGwnXSkge1xuICAgICAgICAgICAgICAgIHBvc3REYXRhWydzZWxlY3RlZF90aW1pbmdzX3R5cGUnXSA9ICdjb21tb24nXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvc3REYXRhWydzZWxlY3RlZF90aW1pbmdzX3R5cGUnXSA9ICdzZXBhcmF0ZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5wYXltZW50X3R5cGUgPT0gNiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4pLmxlbmd0aCAmJiBpc19zZWxlY3RlZF91c2VyX3ZpcCkge1xuICAgICAgICAgICAgcG9zdERhdGFbJ3BsdXNfcGxhbiddID0gdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5pZFxuICAgICAgICAgICAgcG9zdERhdGFbJ3BsYW4nXSA9IHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW5cbiAgICAgICAgfVxuICAgICAgICAvL0NoZWNrIFNQTyBVVE0gVGFnc1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UgJiYgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnc2Vzc2lvbklkVmFsJykgJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MgJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MubGVuZ3RoICYmIHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnc3BvJykubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIGxldCBzcG9fdGFncyA9IHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnc3BvJylbMF1cbiAgICAgICAgICAgIGlmIChzcG9fdGFncy51dG1fdGFncykge1xuXG4gICAgICAgICAgICAgICAgcG9zdERhdGFbJ3V0bV9zcG9fdGFncyddID0gc3BvX3RhZ3MudXRtX3RhZ3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vQ2hlY2sgU0JJIFVUTSBUYWdzXG4gICAgICAgIGlmIChTVE9SQUdFICYmIFNUT1JBR0UuZ2V0QW55Q29va2llKCdzYmlfdXRtJykgJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MgJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MubGVuZ3RoICYmIHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnc2JpX3V0bScpLmxlbmd0aCkge1xuXG4gICAgICAgICAgICBsZXQgdGFncyA9IHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnc2JpX3V0bScpWzBdXG4gICAgICAgICAgICBpZiAodGFncy51dG1fdGFncykge1xuXG4gICAgICAgICAgICAgICAgcG9zdERhdGFbJ3V0bV9zYmlfdGFncyddID0gdGFncy51dG1fdGFnc1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmxvY2F0aW9uICYmIGRvY3VtZW50LmxvY2F0aW9uLmhvc3QgJiYgZG9jdW1lbnQubG9jYXRpb24uaG9zdC5pbmNsdWRlcygnc2JpJykpIHtcbiAgICAgICAgICAgIHBvc3REYXRhWyd1dG1fc2JpX3RhZ3MnXSA9IHtcbiAgICAgICAgICAgICAgICB1dG1fdGFnczoge1xuICAgICAgICAgICAgICAgICAgICB1dG1fc291cmNlOiAnc2JpX3V0bScsXG4gICAgICAgICAgICAgICAgICAgIHV0bV90ZXJtOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgdXRtX21lZGl1bTogJycsXG4gICAgICAgICAgICAgICAgICAgIHV0bV9jYW1wYWlnbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9idWlsZCBkYXRhIGZvciBldmVyeSBzZWxlY3RlZCB0ZXN0cyB3aXRoIHRoZWlyIHNlbGVjdGVkIHRpbWVzbG90LlxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3Quc2VsZWN0ZWRUZXN0c1RpbWVTbG90KSB7XG4gICAgICAgICAgICBsZXQgdGVzdHMgPSBbXVxuXG4gICAgICAgICAgICB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMubWFwKCh0d3ApID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5zZWxlY3RlZFRlc3RzVGltZVNsb3RbdHdwLnRlc3RfaWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXN0ID0gdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3Quc2VsZWN0ZWRUZXN0c1RpbWVTbG90W3R3cC50ZXN0X2lkXVxuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IDNcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR3cC5pc19yYWRpb2xvZ3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAxXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHdwLmlzX3BhdGhvbG9neSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IDJcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRlc3RzLnB1c2goeyB0ZXN0OiB0ZXN0LnRlc3RfaWQsIHR5cGU6IHR5cGUsIHN0YXJ0X2RhdGU6IHRlc3QuZGF0ZSwgc3RhcnRfdGltZTogdGVzdC50aW1lLnZhbHVlLCBpc19ob21lX3BpY2t1cDogdGVzdC5pc19ob21lX3BpY2t1cCB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBwb3N0RGF0YVsndGVzdF90aW1pbmdzJ10gPSB0ZXN0c1xuICAgICAgICB9XG4gICAgICAgIGxldCBwcm9maWxlRGF0YSA9IHsgLi4ucGF0aWVudCB9XG4gICAgICAgIGlmIChwcm9maWxlRGF0YSAmJiBwcm9maWxlRGF0YS53aGF0c2FwcF9vcHRpbiA9PSBudWxsKSB7XG4gICAgICAgICAgICBwcm9maWxlRGF0YVsnd2hhdHNhcHBfb3B0aW4nXSA9IHRoaXMuc3RhdGUud2hhdHNhcHBfb3B0aW5cbiAgICAgICAgICAgIHRoaXMucHJvcHMuZWRpdFVzZXJQcm9maWxlKHByb2ZpbGVEYXRhLCBwcm9maWxlRGF0YS5pZClcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5wYXltZW50X3R5cGUgIT0gNiAmJiB0aGlzLnByb3BzLmxhYkNvdXBvbnMgJiYgdGhpcy5wcm9wcy5sYWJDb3Vwb25zW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdICYmIHRoaXMucHJvcHMubGFiQ291cG9uc1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS5sZW5ndGggJiYgdGhpcy5wcm9wcy5kaXNDb3VudGVkTGFiUHJpY2UgPj0gMCAmJiAhaXNfcGxhbl9hcHBsaWNhYmxlICYmICFpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAvKiYmICFpc192aXBfYXBwbGljYWJsZSovKSB7XG4gICAgICAgICAgICBwb3N0RGF0YVsnY291cG9uX2NvZGUnXSA9IHRoaXMuc3RhdGUuY291cG9uQ29kZSA/IFt0aGlzLnN0YXRlLmNvdXBvbkNvZGVdIDogW11cbiAgICAgICAgfVxuXG4gICAgICAgIC8vUG9zdCBQaW5jb2RlICYgdGh5cm9jYXJlIGRhdGFcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXSAmJiB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0ubGFiICYmIHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS5sYWIuaXNfdGh5cm9jYXJlKSB7XG5cbiAgICAgICAgICAgIGxldCBwaW5jb2RlID0gdGhpcy5zdGF0ZS5waW5jb2RlXG4gICAgICAgICAgICBwb3N0RGF0YVsncGluY29kZSddID0gcGluY29kZS50b1N0cmluZygpIHx8IFwiXCJcbiAgICAgICAgICAgIHBvc3REYXRhWydpc190aHlyb2NhcmUnXSA9IHRydWVcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9zdERhdGFbJ3BpbmNvZGUnXSA9IFwiXCJcbiAgICAgICAgICAgIHBvc3REYXRhWydpc190aHlyb2NhcmUnXSA9IGZhbHNlXG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKGFkZFRvQ2FydCkge1xuICAgICAgICAgICAgLy9PbiBhZGQgdG8gQ2FydCBDbGlja2VkXG5cbiAgICAgICAgICAgIC8vU2luZ2xlIEZsb3cgQWdlbnQgQm9va2luZ1xuICAgICAgICAgICAgaWYgKFNUT1JBR0UuaXNBZ2VudCgpICYmIHRoaXMucHJvcHMucGF5bWVudF90eXBlID09IDYpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXh0cmFQYXJhbXMgJiYgZXh0cmFQYXJhbXMuc2VuZFdoYXRzdXApIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zdERhdGFbJ21lc3NhZ2VfbWVkaXVtJ10gPSAnV0hBVFNBUFAnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZFNpbmdsZUZsb3dBZ2VudEJvb2tpbmdVUkwocG9zdERhdGEpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMYWJBZGRUb0NhcnRDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbGFiLWFkZC10by1jYXJ0LWNsaWNrZWQnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFkZFRvQ2FydCgyLCBwb3N0RGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gaWYgKCF0aGlzLnN0YXRlLmNhcnRfaXRlbSAmJiAhdGhpcy5zdGF0ZS5pc19zcG9fYXBwb2ludG1lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5wcm9wcy5jbGVhckV4dHJhVGVzdHMoKVxuICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmlzX3Nwb19hcHBvaW50bWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRBZ2VudEJvb2tpbmdVUkwoKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvY2FydCcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gXCJFcnJvciBhZGRpbmcgdG8gY2FydCFcIlxuICAgICAgICAgICAgICAgIGlmIChlcnIubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuaW5jbHVkZXMoJ0l0ZW0gYWxyZWFkeSBleGlzdHMgaW4gY2FydC4nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jYXJ0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIGVycm9yOiBtZXNzYWdlIH0pXG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBtZXNzYWdlIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0xhYlByb2NlZWRDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbGFiLXByb2NlZWQtY2xpY2tlZCdcbiAgICAgICAgfVxuXG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQXBwb2ludG1lbnRUeXBlJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnYXBwb2ludG1lbnQtdHlwZScsICdhcHBvaW50bWVudFR5cGUnOiAnJywgJ3JfcGlja3VwJzogdGhpcy5wcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZS5yX3BpY2t1cCwgJ3BfcGlja3VwJzogdGhpcy5wcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZS5wX3BpY2t1cFxuICAgICAgICB9XG5cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuXG4gICAgICAgIGxldCBhbmFseXRpY0RhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0xhYkNvbmZpcm1Cb29raW5nQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2xhYi1jb25maXJtLWJvb2tpbmctY2xpY2tlZCdcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogYW5hbHl0aWNEYXRhIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYXltZW50QnRuQ2xpY2tlZDogdHJ1ZSB9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5jcmVhdGVMQUJBcHBvaW50bWVudChwb3N0RGF0YSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlcnIpIHtcblxuICAgICAgICAgICAgICAgIC8vQ2xlYXIgU1BPIFVUTSBUYWdzIGFmdGVyIGFwcG9pbnRtZW50cyBjcmVhdGlvblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmlzX3Nwb19hcHBvaW50bWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVuU2V0Q29tbW9uVXRtVGFncygnc3BvJylcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL1JlbW92ZSBjb3Vwb25zIGFuZCBjbGVhciBwcmVzY3JpcHRpb24gYWZ0ZXIgYXBwb2ludG1lbnQgY3JlYXRpb25cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy51c2VyX3ByZXNjcmlwdGlvbnMgJiYgdGhpcy5wcm9wcy51c2VyX3ByZXNjcmlwdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlbW92ZUxhYkNvdXBvbnModGhpcy5wcm9wcy5zZWxlY3RlZExhYiwgdGhpcy5zdGF0ZS5jb3Vwb25JZClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGVhclByZXNjcmlwdGlvbnMoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5pc19hZ2VudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlbW92ZUxhYkNvdXBvbnModGhpcy5wcm9wcy5zZWxlY3RlZExhYiwgdGhpcy5zdGF0ZS5jb3Vwb25JZClcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UodGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZSArIGA/b3JkZXJfaWQ9JHtkYXRhLmRhdGEub3JkZXJJZH1gKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3JkZXJfaWQ6IGRhdGEuZGF0YS5vcmRlcklkIH0pXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5wYXltZW50X3JlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHBheW1lbnQgaXMgcmVxdWlyZWQsIHNlbmQgdG8gcGF5bWVudCBzZWxlY3Rpb24gcGFnZVxuICAgICAgICAgICAgICAgICAgICBsZXQgYW5hbHl0aWNEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMYWJPcmRlckNyZWF0ZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdsYWJfb3JkZXJfY3JlYXRlZCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogYW5hbHl0aWNEYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvcGF5bWVudC8ke2RhdGEuZGF0YS5vcmRlcklkfT9yZWZzPWxhYmApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1BheW1lbnQoZGF0YSlcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVMYWJDb3Vwb25zKHRoaXMucHJvcHMuc2VsZWN0ZWRMYWIsIHRoaXMuc3RhdGUuY291cG9uSWQpXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlbmQgYmFjayB0byBhcHBvaW50bWVudCBwYWdlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKGAvb3JkZXIvc3VtbWFyeS8ke2RhdGEuZGF0YS5vcmRlcklkfT9wYXltZW50X3N1Y2Nlc3M9dHJ1ZWApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGF5bWVudEJ0bkNsaWNrZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlXG4gICAgICAgICAgICAgICAgaWYgKGVyci5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyLmVycm9yXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiQ291bGQgbm90IGNyZWF0ZSBhcHBvaW50bWVudC4gVHJ5IGFnYWluIGxhdGVyICFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGVyci5tZXNzYWdlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IG1lc3NhZ2UgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcm9jZXNzUGF5bWVudChkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEuc3RhdHVzKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGF5bWVudERhdGE6IGRhdGEuZGF0YSB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF5bWVudEZvcm0nKSAmJiBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnBheW1lbnREYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXltZW50Rm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlbW92ZUxhYkNvdXBvbnModGhpcy5wcm9wcy5zZWxlY3RlZExhYiwgdGhpcy5zdGF0ZS5jb3Vwb25JZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMDApXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnN1Ym1pdCgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VuZEFnZW50Qm9va2luZ1VSTCgpIHtcbiAgICAgICAgLy9mb3IgYWdlbnQgbG9naW4gc2VuZCBib29raW5nIHVybFxuICAgICAgICBsZXQgcG9zdERhdGEgPSB7fVxuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UgJiYgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnc2Vzc2lvbklkVmFsJykgJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MgJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MubGVuZ3RoICYmIHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnc3BvJykubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIGxldCBzcG9fdGFncyA9IHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnc3BvJylbMF1cbiAgICAgICAgICAgIGlmIChzcG9fdGFncy51dG1fdGFncykge1xuICAgICAgICAgICAgICAgIHBvc3REYXRhID0gc3BvX3RhZ3MudXRtX3RhZ3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvcHMuc2VuZFNQT0FnZW50Qm9va2luZyhwb3N0RGF0YSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlNNUyBTRU5EIEVSUk9SXCIgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51blNldENvbW1vblV0bVRhZ3MoJ3NwbycpXG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlNNUyBTRU5UIFNVQ0NFU1NGVUxZXCIgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhcHBseUNvdXBvbnMoKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5jb3Jwb3JhdGVDb3Vwb24pIHtcbiAgICAgICAgICAgIGxldCBhbmFseXRpY0RhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMYWJDb3Vwb25zQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2xhYi1jb3Vwb25zLWNsaWNrZWQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogYW5hbHl0aWNEYXRhIH0pXG5cbiAgICAgICAgICAgIGxldCB0ZXN0X2lkcyA9IFtdXG4gICAgICAgICAgICB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMubWFwKCh0d3AsIGkpID0+IHtcbiAgICAgICAgICAgICAgICB0ZXN0X2lkcy5wdXNoKHR3cC50ZXN0X2lkKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbGV0IHsgZmluYWxQcmljZSB9ID0gdGhpcy5nZXRMYWJQcmljZURhdGEodGhpcy5wcm9wcylcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBheV9idG5fbG9hZGluZzogdHJ1ZSB9KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9jb3Vwb24vbGFiLyR7dGhpcy5wcm9wcy5zZWxlY3RlZExhYn0vY291cG9ucz90ZXN0X2lkcz0ke3Rlc3RfaWRzfSZkZWFsX3ByaWNlPSR7ZmluYWxQcmljZX0mY2FydF9pdGVtPSR7dGhpcy5zdGF0ZS5jYXJ0X2l0ZW0gfHwgXCJcIn1gKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xvc2VFcnJvclBvcHVwID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6ICcnIH0pXG4gICAgfVxuXG4gICAgZ2V0Qm9va2luZ0J1dHRvblRleHQodG90YWxfd2FsbGV0X2JhbGFuY2UsIHByaWNlX3RvX3BheSwgaXNfdmlwX2FwcGxpY2FibGUsIHZpcF9hbW91bnQsIGV4dHJhQWxsUGFyYW1zKSB7XG4gICAgICAgIGxldCBwcmljZV9mcm9tX3dhbGxldCA9IDBcbiAgICAgICAgbGV0IHByaWNlX2Zyb21fcGcgPSAwXG5cbiAgICAgICAgaWYgKGlzX3ZpcF9hcHBsaWNhYmxlIHx8IChleHRyYUFsbFBhcmFtcyAmJiBleHRyYUFsbFBhcmFtcy5pc19nb2xkX21lbWJlcikpIHtcbiAgICAgICAgICAgIC8vIGlmKHZpcF9hbW91bnQpe1xuICAgICAgICAgICAgLy8gICAgIHJldHVybiBgQ29uZmlybSBCb29raW5nICjigrkgJHtleHRyYUFsbFBhcmFtcy50b3RhbF9hbW91bnRfcGF5YWJsZX0pYFxuICAgICAgICAgICAgLy8gfWVsc2V7XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIGBDb25maXJtIEJvb2tpbmdgXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBwcmljZV90b19wYXkgPSBleHRyYUFsbFBhcmFtcy50b3RhbF9hbW91bnRfcGF5YWJsZVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnVzZV93YWxsZXQgJiYgdG90YWxfd2FsbGV0X2JhbGFuY2UgJiYgdGhpcy5wcm9wcy5wYXltZW50X3R5cGUgIT0gNikge1xuICAgICAgICAgICAgcHJpY2VfZnJvbV93YWxsZXQgPSBNYXRoLm1pbih0b3RhbF93YWxsZXRfYmFsYW5jZSwgcHJpY2VfdG9fcGF5KVxuICAgICAgICB9XG5cbiAgICAgICAgcHJpY2VfZnJvbV9wZyA9IHByaWNlX3RvX3BheSAtIHByaWNlX2Zyb21fd2FsbGV0XG5cbiAgICAgICAgaWYgKHByaWNlX2Zyb21fcGcpIHtcbiAgICAgICAgICAgIHJldHVybiBgQ29udGludWUgdG8gcGF5ICjigrkgJHtwcmljZV9mcm9tX3BnfSlgXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYENvbmZpcm0gQm9va2luZ2BcbiAgICB9XG5cbiAgICBzZXRQaW5jb2RlKHBpbmNvZGUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5zYXZlUGluY29kZShwaW5jb2RlKVxuICAgICAgICBsZXQgc2xvdCA9IHsgdGltZToge30gfVxuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdExhYlRpbWVTTG90KHNsb3QsIGZhbHNlKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1BpbmNvZGVQb3B1cDogZmFsc2UsIHBpbmNvZGU6IHBpbmNvZGUgfSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKCd0aW1lJylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjbGlja1BpbmNvZGVFcnJyb3JQb3BVcCh0eXBlKSB7XG4gICAgICAgIGlmICh0eXBlID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwaW5jb2RlTWlzbWF0Y2hFcnJvcjogZmFsc2UsIHNob3dQaW5jb2RlUG9wdXA6IHRydWUgfSwgKCkgPT4ge1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdXNlci9hZGRyZXNzP3BpY2s9dHJ1ZScpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnb1RvUHJvZmlsZShpZCwgdXJsKSB7XG4gICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHt1cmx9YClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvbGFiLyR7aWR9YClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZVdoYXRzYXAoc3RhdHVzLCBlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB3aGF0c2FwcF9vcHRpbjogc3RhdHVzIH0pXG4gICAgfVxuXG4gICAgY2xlYXJUZXN0Rm9ySW5zdXJlZCgpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGUgJiYgdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXSAmJiAodGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXS5pc19pbnN1cmVkIHx8IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0uaXNfdmlwX21lbWJlciB8fCB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGVdLmlzX3ZpcF9nb2xkX21lbWJlcikpIHtcblxuICAgICAgICAvLyAgICAgaWYodGhpcy5wcm9wcy5zZWxlY3RlZExhYiAmJiB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0gJiYgdGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLnRlc3RzICYmIHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS50ZXN0cy5sZW5ndGggPT0xKXtcblxuICAgICAgICAvLyAgICAgfWVsc2V7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wcm9wcy5jbGVhckV4dHJhVGVzdHMoKSAgICBcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIHRoaXMucHJvcHMuZ2V0TGFiQnlJZCh0aGlzLnByb3BzLnNlbGVjdGVkTGFiKVxuICAgICAgICAvLyAgICAgcmV0dXJuXG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBzZWFyY2hUZXN0cygpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RTZWFyY2hUeXBlKCdsYWInKVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3NlYXJjaCcpXG4gICAgfVxuXG4gICAgcHJpY2VDb25maXJtYXRpb25Qb3B1cChjaG9pY2UpIHtcbiAgICAgICAgaWYgKCFjaG9pY2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q29uZmlybWF0aW9uUG9wdXA6ICdjbG9zZScgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q29uZmlybWF0aW9uUG9wdXA6ICdjbG9zZScgfSlcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybV9ib29raW5nJykpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybV9ib29raW5nJykuY2xpY2soKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ29Ub0luc3VyYW5jZShsYWJEZXRhaWwpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7fVxuICAgICAgICBkYXRhLnRodW1ibmFpbCA9IGxhYkRldGFpbC5sYWJfdGh1bWJuYWlsXG4gICAgICAgIGRhdGEubmFtZSA9IGxhYkRldGFpbC5uYW1lXG4gICAgICAgIGRhdGEuaWQgPSBsYWJEZXRhaWwuaWRcbiAgICAgICAgZGF0YS50eXBlID0gJ2xhYidcbiAgICAgICAgdGhpcy5wcm9wcy5zYXZlQXZhaWxOb3dJbnN1cmFuY2UoZGF0YSlcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvaW5zdXJhbmNlLXBsYW5zP3NvdXJjZT1kb2N0b3Itc3VtbWFyeS12aWV3JnNob3dfYnV0dG9uPXRydWUnKVxuICAgIH1cblxuICAgIHRlc3RJbmZvKHRlc3RfaWQsIGxhYl9pZCwgdGVzdF91cmwsIGV2ZW50KSB7XG4gICAgICAgIGxldCBzZWxlY3RlZF90ZXN0X2lkcyA9IFtdXG4gICAgICAgIC8vIE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzKS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlXSkge1xuICAgICAgICAvLyAgICAgc2VsZWN0ZWRfdGVzdF9pZHMucHVzaCh2YWx1ZS5pZClcbiAgICAgICAgLy8gfSlcbiAgICAgICAgdmFyIHVybF9zdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgdmFyIHVybCA9IG5ldyBVUkwodXJsX3N0cmluZyk7XG4gICAgICAgIHZhciBzZWFyY2hfaWQgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInNlYXJjaF9pZFwiKTtcbiAgICAgICAgbGV0IGxhdCA9IDI4LjY0NDgwMFxuICAgICAgICBsZXQgbG9uZyA9IDc3LjIxNjcyMVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICBsYXQgPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubGF0XG4gICAgICAgICAgICBsb25nID0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxhdCA9PT0gJ2Z1bmN0aW9uJykgbGF0ID0gbGF0KClcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbG9uZyA9PT0gJ2Z1bmN0aW9uJykgbG9uZyA9IGxvbmcoKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0ZXN0X3VybCAmJiB0ZXN0X3VybCAhPSAnJykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nICsgdGVzdF91cmwgKyAnP3Rlc3RfaWRzPScgKyB0ZXN0X2lkICsgJyZzZWxlY3RlZF90ZXN0X2lkcz0nICsgc2VsZWN0ZWRfdGVzdF9pZHMgKyAnJnNlYXJjaF9pZD0nICsgc2VhcmNoX2lkICsgJyZsYWJfaWQ9JyArIGxhYl9pZCArICcmbGF0PScgKyBsYXQgKyAnJmxvbmc9JyArIGxvbmcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3NlYXJjaC90ZXN0aW5mbz90ZXN0X2lkcz0nICsgdGVzdF9pZCArICcmc2VsZWN0ZWRfdGVzdF9pZHM9JyArIHNlbGVjdGVkX3Rlc3RfaWRzICsgJyZzZWFyY2hfaWQ9JyArIHNlYXJjaF9pZCArICcmbGFiX2lkPScgKyBsYWJfaWQgKyAnJmxhdD0nICsgbGF0ICsgJyZsb25nPScgKyBsb25nKVxuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICd0ZXN0SW5mb0NsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAndGVzdC1pbmZvLWNsaWNrJywgJ3BhZ2VTb3VyY2UnOiAnbGFiLXJlc3VsdC1wYWdlJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgfVxuXG4gICAgcmVtb3ZlVGVzdCh0d3ApIHtcbiAgICAgICAgbGV0IHRlc3QgPSBPYmplY3QuYXNzaWduKHt9LCB0d3AudGVzdClcbiAgICAgICAgdGVzdC5leHRyYV90ZXN0ID0gdHJ1ZVxuICAgICAgICB0ZXN0LmxhYl9pZCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRMYWJcbiAgICAgICAgdGVzdC5yZW1vdmVUZXN0ID0gdHJ1ZVxuICAgICAgICB0ZXN0LnNlbGVjdGVkTGFiVGVzdHMgPSB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl1cbiAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSgndGVzdCcsIHRlc3QpXG4gICAgfVxuXG4gICAgYXBwbHlMZW5zRml0Q291cG9ucyhkZWFsX3ByaWNlLCBjb3Vwb24pIHtcbiAgICAgICAgbGV0IHsgZmluYWxQcmljZSwgdGVzdF9pZHMgfSA9IHRoaXMuZ2V0TGFiUHJpY2VEYXRhKHRoaXMucHJvcHMpXG4gICAgICAgIGNvdXBvbi5maW5hbFByaWNlID0gZmluYWxQcmljZVxuICAgICAgICBjb3Vwb24udGVzdF9pZHMgPSB0ZXN0X2lkc1xuICAgICAgICBjb3Vwb24uTEFCUyA9IHRoaXMucHJvcHMuTEFCU1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTGVuc0ZpdExhYkFwcGx5Q2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2xlbnNmaXQtbGFiLWFwcGx5LWNsaWNrZWQnXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgdGhpcy5nZXRBbmRBcHBseUJlc3RDb3Vwb25zKGNvdXBvbiwgdHJ1ZSlcbiAgICB9XG5cbiAgICBjbG9zZUxlbnNGaXRQb3B1cCgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0xlbnNGaXRMYWJEb250V2FudENsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdsZW5zZml0LWxhYi1kb250LXdhbnQtY2xpY2tlZCdcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93X2xlbnNmaXRfcG9wdXA6IGZhbHNlLCBsZW5zZml0X2RlY2xpbmU6IHRydWUgfSwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtX2Jvb2tpbmcnKSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtX2Jvb2tpbmcnKS5jbGljaygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe3Nob3dfbGVuc2ZpdF9wb3B1cDpmYWxzZSxsZW5zZml0X2RlY2xpbmU6dHJ1ZX0pXG4gICAgfVxuXG4gICAgdG9nZ2xlR29sZFBsYW5zID0gKHBsYW4pID0+IHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1RvZ2dsZUxhYkdvbGRQbGFuQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3RvZ2dsZS1sYWItZ29sZC1wbGFuLWNsaWNrZWQnLCAncGxhbic6IHBsYW4uaWRcbiAgICAgICAgfVxuXG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWN0VmlwQ2x1YlBsYW4oJ3BsYW4nLCBwbGFuKSAvLyB0b2dnbGUvc2VsZWN0IHZpcCBwbGFuXG4gICAgICAgIHRoaXMudG9nZ2xlR29sZFByaWNlUG9wdXAoKVxuICAgIH1cblxuICAgIHRvZ2dsZUdvbGRQcmljZVBvcHVwID0gKHZhbHVlID0gZmFsc2UpID0+IHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0NoYW5nZVBsYW5MYWJDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2hhbmdlLXBsYW4tbGFiLWNsaWNrZWQnXG4gICAgICAgIH1cblxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0dvbGRQcmljZUxpc3Q6IHZhbHVlIH0pXG4gICAgfVxuXG4gICAgZ29Ub0dvbGRQYWdlID0gKCkgPT4ge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnR29Ub0dvbGRQbGFuQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2dvLXRvLWdvbGQtcGxhbi1jbGlja2VkJ1xuICAgICAgICB9XG5cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy92aXAtZ29sZC1kZXRhaWxzP2lzX2dvbGQ9dHJ1ZSZzb3VyY2U9bW9iaWxlLWxhYi1zdW1tYXJ5LWdvbGQtY2xpY2tlZCZsZWFkX3NvdXJjZT1Eb2NwcmltZSZib29raW5nX3BhZ2U9bGFiJylcbiAgICB9XG5cbiAgICBnZXREYXRhQWZ0ZXJMb2dpbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaERhdGEodGhpcy5wcm9wcylcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGFiR29sZFByZWRpY3RlZFByaWNlICYmIHRoaXMucHJvcHMubGFiR29sZFByZWRpY3RlZFByaWNlLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkUGFja2FnZSA9IHRoaXMucHJvcHMubGFiR29sZFByZWRpY3RlZFByaWNlLmZpbHRlcih4ID0+IHguaWQgPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZFZpcEdvbGRQYWNrYWdlSWQpXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRQYWNrYWdlICYmIHNlbGVjdGVkUGFja2FnZS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkUGFja2FnZSA9IHRoaXMucHJvcHMubGFiR29sZFByZWRpY3RlZFByaWNlLmZpbHRlcih4ID0+IHguaXNfc2VsZWN0ZWQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRQYWNrYWdlICYmIHNlbGVjdGVkUGFja2FnZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdFZpcENsdWJQbGFuKCdwbGFuJywgc2VsZWN0ZWRQYWNrYWdlWzBdKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBnZXRTZWxlY3RlZFVzZXJEYXRhKHByb3BzKSB7XG4gICAgICAgIGxldCB0b3RhbF9hbW91bnRfcGF5YWJsZV93aXRob3V0X2NvdXBvbiA9IG51bGxcbiAgICAgICAgbGV0IGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfcGxhbiA9IHRydWVcbiAgICAgICAgbGV0IGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfdmlwID0gdHJ1ZVxuICAgICAgICBsZXQgdmlwX2RhdGEgPSB7fVxuICAgICAgICBsZXQgdmlwX3RvdGFsX2Ftb3VudCA9IDBcbiAgICAgICAgbGV0IHZpcF90b3RhbF9jb252ZW5pZW5jZV9hbW91bnQgPSAwXG4gICAgICAgIGxldCB2aXBfdG90YWxfZ29sZF9wcmljZSA9IDBcbiAgICAgICAgbGV0IGlzX2FsbF9lbmFibGVfZm9yX3ZpcCA9IHRydWVcbiAgICAgICAgbGV0IGlzX2FsbF9lbmFibGVfZm9yX2dvbGQgPSB0cnVlXG4gICAgICAgIGxldCBpc19ob21lX2NoYXJnZXNfYXBwbGljYWJsZSA9IGZhbHNlXG4gICAgICAgIGxldCBsYWJEZXRhaWwgPSB7fVxuICAgICAgICBpZiAocHJvcHMuTEFCU1twcm9wcy5zZWxlY3RlZExhYl0gJiYgcHJvcHMuTEFCU1twcm9wcy5zZWxlY3RlZExhYl0udGVzdHMgJiYgcHJvcHMuTEFCU1twcm9wcy5zZWxlY3RlZExhYl0udGVzdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgcGF0aWVudCA9IG51bGxcbiAgICAgICAgICAgIGxhYkRldGFpbCA9IHByb3BzLkxBQlNbcHJvcHMuc2VsZWN0ZWRMYWJdLmxhYlxuICAgICAgICAgICAgbGV0IGlzX2hvbWVfY29sbGVjdGlvbl9lbmFibGVkID0gZmFsc2VcbiAgICAgICAgICAgIGlmIChpc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCAmJiBwcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZSAmJiAocHJvcHMuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGUucl9waWNrdXAgPT0gJ2hvbWUnIHx8IHByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlLnBfcGlja3VwID09ICdob21lJykpIHtcbiAgICAgICAgICAgICAgICBpc19ob21lX2NoYXJnZXNfYXBwbGljYWJsZSA9IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHByb3BzLnByb2ZpbGVzW3Byb3BzLnNlbGVjdGVkUHJvZmlsZV0gJiYgIXByb3BzLnByb2ZpbGVzW3Byb3BzLnNlbGVjdGVkUHJvZmlsZV0uaXNEdW1teVVzZXIpIHtcbiAgICAgICAgICAgICAgICBwYXRpZW50ID0gcHJvcHMucHJvZmlsZXNbcHJvcHMuc2VsZWN0ZWRQcm9maWxlXVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcm9wcy5MQUJTW3Byb3BzLnNlbGVjdGVkTGFiXS50ZXN0cy5tYXAoKHRlc3QsIGkpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICh0ZXN0LmluY2x1ZGVkX2luX3VzZXJfcGxhbikge1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXNfdGVzdHNfY292ZXJlZF91bmRlcl9wbGFuID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGVzdC52aXAgJiYgISh0ZXN0LnZpcC5jb3ZlcmVkX3VuZGVyX3ZpcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNfdGVzdHNfY292ZXJlZF91bmRlcl92aXAgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghKHRlc3QudmlwLmlzX2VuYWJsZV9mb3JfdmlwKSkge1xuICAgICAgICAgICAgICAgICAgICBpc19hbGxfZW5hYmxlX2Zvcl92aXAgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoISh0ZXN0LnZpcC5pc19nb2xkKSkge1xuICAgICAgICAgICAgICAgICAgICBpc19hbGxfZW5hYmxlX2Zvcl9nb2xkID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2aXBfdG90YWxfYW1vdW50ICs9IHBhcnNlSW50KHRlc3QudmlwLnZpcF9hbW91bnQpXG4gICAgICAgICAgICAgICAgdmlwX3RvdGFsX2NvbnZlbmllbmNlX2Ftb3VudCArPSBwYXJzZUludCh0ZXN0LnZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50KVxuICAgICAgICAgICAgICAgIHZpcF90b3RhbF9nb2xkX3ByaWNlICs9IHBhcnNlSW50KHRlc3QudmlwLnZpcF9nb2xkX3ByaWNlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIHZpcF90b3RhbF9jb252ZW5pZW5jZV9hbW91bnQgPSAwXG4gICAgICAgICAgICBpZiAoaXNfYWxsX2VuYWJsZV9mb3JfdmlwICYmIHBhdGllbnQpIHtcblxuXG4gICAgICAgICAgICAgICAgaWYgKGlzX2FsbF9lbmFibGVfZm9yX2dvbGQgJiYgcGF0aWVudC5pc192aXBfZ29sZF9tZW1iZXIpIHtcblxuICAgICAgICAgICAgICAgICAgICB0b3RhbF9hbW91bnRfcGF5YWJsZV93aXRob3V0X2NvdXBvbiA9IHZpcF90b3RhbF9hbW91bnQgKyB2aXBfdG90YWxfY29udmVuaWVuY2VfYW1vdW50ICsgKGlzX2hvbWVfY2hhcmdlc19hcHBsaWNhYmxlID8gbGFiRGV0YWlsLmhvbWVfcGlja3VwX2NoYXJnZXMgOiAwKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGF0aWVudC5pc192aXBfbWVtYmVyLyogJiYgaXNfdGVzdHNfY292ZXJlZF91bmRlcl92aXAqLykge1xuICAgICAgICAgICAgICAgICAgICB0b3RhbF9hbW91bnRfcGF5YWJsZV93aXRob3V0X2NvdXBvbiA9IHZpcF90b3RhbF9hbW91bnQgKyAoaXNfaG9tZV9jaGFyZ2VzX2FwcGxpY2FibGUgPyBsYWJEZXRhaWwuaG9tZV9waWNrdXBfY2hhcmdlcyA6IDApXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghcHJvcHMuaXNfYW55X3VzZXJfYnV5X2dvbGQgJiYgcHJvcHMucGF5bWVudF90eXBlID09IDYgJiYgcHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4gJiYgcHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4ubGFiICYmIHByb3BzLkxBQlNbcHJvcHMuc2VsZWN0ZWRMYWJdLnRlc3RzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdG90YWxfYW1vdW50X3BheWFibGVfd2l0aG91dF9jb3Vwb24gPSBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc190ZXN0c19jb3ZlcmVkX3VuZGVyX3BsYW4gPSBmYWxzZVxuICAgICAgICAgICAgaXNfdGVzdHNfY292ZXJlZF91bmRlcl92aXAgPSBmYWxzZVxuICAgICAgICAgICAgaXNfYWxsX2VuYWJsZV9mb3JfdmlwID0gZmFsc2VcbiAgICAgICAgICAgIGlzX2FsbF9lbmFibGVfZm9yX2dvbGQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHRvdGFsX2Ftb3VudF9wYXlhYmxlX3dpdGhvdXRfY291cG9uIH1cblxuICAgIH1cblxuICAgIG5vbklwZExlYWRzKHVzZXJfcGhvbmVfbnVtYmVyLCB1c2VyX25hbWUpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBwYXRpZW50ID0gbnVsbFxuICAgICAgICBsZXQgZGF0YSA9IHt9XG4gICAgICAgIGxldCBzZWxlY3RlZF90ZXN0X25hbWUgPSAnJ1xuICAgICAgICBsZXQgc2VsZWN0ZWRfdGVzdFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdICYmIHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS50ZXN0cyAmJiB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS50ZXN0cy5tYXAoKHRlc3QsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QpLmxlbmd0aCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5zZWxlY3RlZFRlc3RzVGltZVNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfdGVzdCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LnNlbGVjdGVkVGVzdHNUaW1lU2xvdFt0ZXN0LnRlc3RfaWRdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfdGVzdF9uYW1lICs9IHRlc3QudGVzdC5uYW1lXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfdGVzdF9uYW1lICs9IHRlc3QudGVzdC5uYW1lICsgJywnXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdICYmICF0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlXS5pc0R1bW15VXNlcikge1xuICAgICAgICAgICAgICAgIHBhdGllbnQgPSB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlXVxuICAgICAgICAgICAgICAgIGRhdGEuY3VzdG9tZXJfbmFtZSA9IHBhdGllbnQubmFtZVxuICAgICAgICAgICAgICAgIGRhdGEucGhvbmVfbnVtYmVyID0gcGF0aWVudC5waG9uZV9udW1iZXJcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGF0YS5sZWFkX3R5cGUgPSAnRFJPUE9GRidcbiAgICAgICAgICAgIGRhdGEubGVhZF9zb3VyY2UgPSAnZHJvcG9mZidcbiAgICAgICAgICAgIGRhdGEubGFiX25hbWUgPSB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0ubGFiLm5hbWVcbiAgICAgICAgICAgIGRhdGEuZXhpdHBvaW50X3VybCA9ICdodHRwOi8vZG9jcHJpbWUuY29tJyArIHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgICAgIGRhdGEuc291cmNlID0gcGFyc2VkXG4gICAgICAgICAgICBkYXRhLmRvY3Rvcl9uYW1lID0gbnVsbFxuICAgICAgICAgICAgZGF0YS5ob3NwaXRhbF9uYW1lID0gbnVsbFxuICAgICAgICAgICAgZGF0YS5zcGVjaWFsdHkgPSBudWxsXG4gICAgICAgICAgICBkYXRhLnRlc3RfbmFtZSA9IHNlbGVjdGVkX3Rlc3RfbmFtZVxuICAgICAgICAgICAgaWYgKHVzZXJfcGhvbmVfbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5waG9uZV9udW1iZXIgPSB1c2VyX3Bob25lX251bWJlclxuICAgICAgICAgICAgICAgIGRhdGEuY3VzdG9tZXJfbmFtZSA9IHVzZXJfbmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHZpc2l0b3JfaW5mbyA9IEdUTS5nZXRWaXNpdG9ySW5mbygpXG4gICAgICAgICAgICBpZiAodmlzaXRvcl9pbmZvICYmIHZpc2l0b3JfaW5mby52aXNpdF9pZCkge1xuICAgICAgICAgICAgICAgIGRhdGEudmlzaXRfaWQgPSB2aXNpdG9yX2luZm8udmlzaXRfaWRcbiAgICAgICAgICAgICAgICBkYXRhLnZpc2l0b3JfaWQgPSB2aXNpdG9yX2luZm8udmlzaXRvcl9pZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzICYmIHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGRhdGEudXRtX3RhZ3MgPSB0aGlzLmdldFV0bVRhZ3MoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkX3Rlc3QgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QpLmxlbmd0aCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5zZWxlY3RlZFRlc3RzVGltZVNsb3QpIHtcbiAgICAgICAgICAgICAgICBsZXQgeyBkYXRlLCB0aW1lIH0gPSBzZWxlY3RlZF90ZXN0XG4gICAgICAgICAgICAgICAgZGF0YS5zZWxlY3RlZF90aW1lID0gdGltZS50ZXh0ICsgJyAnICsgdGltZS50aXRsZVxuICAgICAgICAgICAgICAgIGRhdGEuc2VsZWN0ZWRfZGF0ZSA9IGRhdGVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YS5zZWxlY3RlZF90aW1lID0gbnVsbFxuICAgICAgICAgICAgICAgIGRhdGEuc2VsZWN0ZWRfZGF0ZSA9IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlbmFibGVEcm9wT2ZmbGVhZDogZmFsc2UgfSlcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmlzX2xlYWRfZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc19sZWFkX2VuYWJsZWQ6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5Ob25JcGRCb29raW5nTGVhZChkYXRhKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNfbGVhZF9lbmFibGVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgfSwgNTAwMClcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VXRtVGFncygpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCB1dG1fdGFncyA9IHtcbiAgICAgICAgICAgIHV0bV9zb3VyY2U6IHBhcnNlZC51dG1fc291cmNlIHx8ICcnLFxuICAgICAgICAgICAgdXRtX21lZGl1bTogcGFyc2VkLnV0bV9tZWRpdW0gfHwgJycsXG4gICAgICAgICAgICB1dG1fdGVybTogcGFyc2VkLnV0bV90ZXJtIHx8ICcnLFxuICAgICAgICAgICAgdXRtX2NhbXBhaWduOiBwYXJzZWQudXRtX2NhbXBhaWduIHx8ICcnLFxuICAgICAgICAgICAgcmVmZXJyZXI6IGRvY3VtZW50LnJlZmVycmVyIHx8ICcnLFxuICAgICAgICAgICAgZ2NsaWQ6IHBhcnNlZC5nY2xpZCB8fCAnJ1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzICYmIHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmxlbmd0aCkge1xuICAgICAgICAgICAgdXRtX3RhZ3MgPSB0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gXCJjb21tb25feHRyYV90YWdzXCIpWzBdLnV0bV90YWdzXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXRtX3RhZ3NcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgdGVzdHMgPSBbXVxuICAgICAgICBsZXQgdGVzdHNfd2l0aF9wcmljZSA9IFtdXG4gICAgICAgIGxldCBmaW5hbFByaWNlID0gMFxuICAgICAgICBsZXQgZmluYWxNcnAgPSAwXG4gICAgICAgIGxldCBob21lX3BpY2t1cF9jaGFyZ2VzID0gMFxuICAgICAgICBsZXQgbGFiRGV0YWlsID0ge31cbiAgICAgICAgbGV0IHBhdGllbnQgPSBudWxsXG4gICAgICAgIGxldCBpc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCA9IHRydWVcbiAgICAgICAgbGV0IGFkZHJlc3NfcGlja2VkX3ZlcmlmaWVkID0gZmFsc2VcbiAgICAgICAgbGV0IGNlbnRlcl92aXNpdF9lbmFibGVkID0gdHJ1ZVxuICAgICAgICBsZXQgaXNfY29ycG9yYXRlID0gZmFsc2VcbiAgICAgICAgbGV0IHByZXNjcmlwdGlvblBpY2tlZCA9IGZhbHNlXG5cbiAgICAgICAgbGV0IGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlID0gZmFsc2VcbiAgICAgICAgbGV0IGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfaW5zdXJhbmNlID0gZmFsc2VcbiAgICAgICAgbGV0IGlzX3NlbGVjdGVkX3VzZXJfaW5zdXJlZCA9IGZhbHNlXG4gICAgICAgIGxldCBpc19kZWZhdWx0X3VzZXJfaW5zdXJlZCA9IGZhbHNlXG5cbiAgICAgICAgbGV0IGlzX3BsYW5fYXBwbGljYWJsZSA9IGZhbHNlXG4gICAgICAgIGxldCBpc190ZXN0c19jb3ZlcmVkX3VuZGVyX3BsYW4gPSB0cnVlXG4gICAgICAgIGxldCBpc19zZWxlY3RlZF91c2VyX2hhc19hY3RpdmVfcGxhbiA9IGZhbHNlXG4gICAgICAgIGxldCBpc19pbnN1cmFuY2VfYnV5X2FibGUgPSBmYWxzZVxuICAgICAgICBsZXQgaXNfc2VsZWN0ZWRfdXNlcl9pbnN1cmFuY2Vfc3RhdHVzXG4gICAgICAgIGxldCByYWRpb2xvZ3lfdGVzdHMgPSBbXVxuICAgICAgICBsZXQgcGF0aG9sb2d5X3Rlc3RzID0gW11cbiAgICAgICAgbGV0IHJfcGlja3VwX2hvbWUgPSB0cnVlXG4gICAgICAgIGxldCByX3BpY2t1cF9jZW50ZXIgPSBmYWxzZVxuICAgICAgICBsZXQgcF9waWNrdXBfaG9tZSA9IHRydWVcbiAgICAgICAgbGV0IHBfcGlja3VwX2NlbnRlciA9IGZhbHNlXG4gICAgICAgIGxldCBpc192aXBfYXBwbGljYWJsZSA9IGZhbHNlXG4gICAgICAgIGxldCBpc19zZWxlY3RlZF91c2VyX3VuZGVyX3ZpcCA9IGZhbHNlXG4gICAgICAgIGxldCBpc19kZWZhdWx0X3VzZXJfdW5kZXJfdmlwID0gZmFsc2VcbiAgICAgICAgbGV0IGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfdmlwID0gZmFsc2VcbiAgICAgICAgbGV0IGlzX3NlbGVjdGVkX3VzZXJfZ29sZCA9IGZhbHNlXG4gICAgICAgIGxldCB2aXBfdG90YWxfYW1vdW50ID0gMFxuICAgICAgICBsZXQgdmlwX3RvdGFsX2NvbnZlbmllbmNlX2Ftb3VudCA9IDBcbiAgICAgICAgbGV0IHZpcF90b3RhbF9nb2xkX3ByaWNlID0gMFxuICAgICAgICBsZXQgdmlwX2RhdGEgPSB7fVxuICAgICAgICBsZXQgaXNfYWxsX2VuYWJsZV9mb3JfdmlwID0gdHJ1ZVxuICAgICAgICBsZXQgaXNfYWxsX2VuYWJsZV9mb3JfZ29sZCA9IHRydWVcbiAgICAgICAgbGV0IHZpcF9pc19wcmVzY3JpcHRpb25fcmVxdWlyZWQgPSBmYWxzZVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV0gJiYgIXRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdLmlzRHVtbXlVc2VyKSB7XG4gICAgICAgICAgICBwYXRpZW50ID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV1cbiAgICAgICAgICAgIGlzX3NlbGVjdGVkX3VzZXJfaW5zdXJlZCA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdLmlzX2luc3VyZWRcbiAgICAgICAgICAgIGlzX3NlbGVjdGVkX3VzZXJfaW5zdXJhbmNlX3N0YXR1cyA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdLmluc3VyYW5jZV9zdGF0dXNcbiAgICAgICAgICAgIGlzX3NlbGVjdGVkX3VzZXJfdW5kZXJfdmlwID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV0uaXNfdmlwX21lbWJlclxuICAgICAgICAgICAgaXNfc2VsZWN0ZWRfdXNlcl9nb2xkID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV0uaXNfdmlwX2dvbGRfbWVtYmVyXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNfcHJlc2NyaXB0aW9uX25lZWRlZCkge1xuICAgICAgICAgICAgcHJlc2NyaXB0aW9uUGlja2VkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlICYmIHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0pIHtcbiAgICAgICAgICAgIGlzX2RlZmF1bHRfdXNlcl9pbnN1cmVkID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXS5pc19pbnN1cmVkXG4gICAgICAgICAgICBpc19kZWZhdWx0X3VzZXJfdW5kZXJfdmlwID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXS5pc192aXBfbWVtYmVyXG4gICAgICAgIH1cblxuICAgICAgICAvL0NoZWNrIElmIGVhY2ggVGVzdHMgQ292ZXJlZCBVbmRlciBJbnN1cmFuY2VcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNVc2VyQ2FyZWQgJiYgdGhpcy5wcm9wcy5pc1VzZXJDYXJlZC5oYXNfYWN0aXZlX3BsYW4pIHtcbiAgICAgICAgICAgIGlzX3NlbGVjdGVkX3VzZXJfaGFzX2FjdGl2ZV9wbGFuID0gdGhpcy5wcm9wcy5pc1VzZXJDYXJlZC5oYXNfYWN0aXZlX3BsYW5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vQ2hlY2sgSWYgZWFjaCBUZXN0cyBDb3ZlcmVkIFVuZGVyIFBsYW5cbiAgICAgICAgLy9Hb2xkIFJhZGlvIGJ1dHRvbiBTZWxlY3RlZCBQYWNrYWdlIFByaWNlIExpc3RcbiAgICAgICAgbGV0IGdvbGRfcHJpY2VsaXN0X21ycCA9IDBcbiAgICAgICAgbGV0IGdvbGRfcHJpY2VsaXN0X2RlYWxfcHJpY2UgPSAwXG4gICAgICAgIGxldCBnb2xkX3ByaWNlbGlzdF9jb252ZW5pZW5jZSA9IDBcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXSAmJiB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMgJiYgdGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLnRlc3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgaXNfdGVzdHNfY292ZXJlZF91bmRlcl9pbnN1cmFuY2UgPSB0cnVlXG5cbiAgICAgICAgICAgIHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS50ZXN0cy5tYXAoKHRlc3QsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGVzdC5pbnN1cmFuY2UgJiYgdGVzdC5pbnN1cmFuY2UuaXNfaW5zdXJhbmNlX2NvdmVyZWQgJiYgdGVzdC5pbnN1cmFuY2UuaW5zdXJhbmNlX3RocmVzaG9sZF9hbW91bnQgPj0gcGFyc2VJbnQodGVzdC5kZWFsX3ByaWNlKSkge1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXNfdGVzdHNfY292ZXJlZF91bmRlcl9pbnN1cmFuY2UgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0ZXN0LmluY2x1ZGVkX2luX3VzZXJfcGxhbikge1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXNfdGVzdHNfY292ZXJlZF91bmRlcl9wbGFuID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRlc3QudmlwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfdmlwID0gdGVzdC52aXAuY292ZXJlZF91bmRlcl92aXBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9UbyBnZXQgZ29sZCBwcmljZSBmb3IgcmFkaW8gYnV0dG9uIHNpbmdsZSBwYWdlIFxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5pc19hbnlfdXNlcl9idXlfZ29sZCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4udGVzdHMgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi50ZXN0c1t0ZXN0LnRlc3RfaWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIGdvbGRfcHJpY2VsaXN0X21ycCArPSAodGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi50ZXN0c1t0ZXN0LnRlc3RfaWRdLm1ycCB8fCAwKVxuICAgICAgICAgICAgICAgICAgICBnb2xkX3ByaWNlbGlzdF9kZWFsX3ByaWNlICs9ICh0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLnRlc3RzW3Rlc3QudGVzdF9pZF0uZ29sZF9wcmljZSB8fCAwKVxuICAgICAgICAgICAgICAgICAgICBnb2xkX3ByaWNlbGlzdF9jb252ZW5pZW5jZSArPSAodGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi50ZXN0c1t0ZXN0LnRlc3RfaWRdLmNvbnZlbmllbmNlX2NoYXJnZSB8fCAwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfVxuICAgICAgICBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSA9IGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfaW5zdXJhbmNlICYmIGlzX3NlbGVjdGVkX3VzZXJfaW5zdXJlZFxuICAgICAgICBpc192aXBfYXBwbGljYWJsZSA9IC8qaXNfdGVzdHNfY292ZXJlZF91bmRlcl92aXAgJiYgKi9pc19zZWxlY3RlZF91c2VyX3VuZGVyX3ZpcFxuICAgICAgICBpZiAoaXNfdGVzdHNfY292ZXJlZF91bmRlcl9pbnN1cmFuY2UgJiYgIWlzX3NlbGVjdGVkX3VzZXJfaW5zdXJlZCkge1xuICAgICAgICAgICAgaXNfaW5zdXJhbmNlX2J1eV9hYmxlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlzX3BsYW5fYXBwbGljYWJsZSA9IGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfcGxhbiAmJiBpc19zZWxlY3RlZF91c2VyX2hhc19hY3RpdmVfcGxhblxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0pIHtcbiAgICAgICAgICAgIGxhYkRldGFpbCA9IHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS5sYWJcblxuICAgICAgICAgICAgLy8gaWYobGFiRGV0YWlsLmlzX3ByZXNjcmlwdGlvbl9uZWVkZWQpe1xuICAgICAgICAgICAgLy8gICAgIHByZXNjcmlwdGlvblBpY2tlZCA9IGxhYkRldGFpbC5pc19wcmVzY3JpcHRpb25fbmVlZGVkICAgIFxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLnRlc3RzLm1hcCgodHdwLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR3cC5oaWRlX3ByaWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzX2NvcnBvcmF0ZSA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHByaWNlID0gdHdwLmRlYWxfcHJpY2VcbiAgICAgICAgICAgICAgICBsZXQgbXJwID0gdHdwLm1ycFxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGFueSBvZiB0aGUgc2VsZWN0ZWQgdGVzdCBkb2VzIG5vdCBhbGxvdyBob21lX3BpY2t1cF9hdmFpbGFibGVcbiAgICAgICAgICAgICAgICAvKmlmICghdHdwLmlzX2hvbWVfY29sbGVjdGlvbl9lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzX2hvbWVfY29sbGVjdGlvbl9lbmFibGVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICBmaW5hbFByaWNlICs9IHBhcnNlRmxvYXQocHJpY2UpXG4gICAgICAgICAgICAgICAgZmluYWxNcnAgKz0gcGFyc2VGbG9hdChtcnApXG4gICAgICAgICAgICAgICAgdmlwX3RvdGFsX2Ftb3VudCArPSBwYXJzZUludCh0d3AudmlwLnZpcF9hbW91bnQpXG4gICAgICAgICAgICAgICAgdmlwX3RvdGFsX2NvbnZlbmllbmNlX2Ftb3VudCArPSBwYXJzZUludCh0d3AudmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnQpXG4gICAgICAgICAgICAgICAgdmlwX3RvdGFsX2dvbGRfcHJpY2UgKz0gcGFyc2VJbnQodHdwLnZpcC52aXBfZ29sZF9wcmljZSlcbiAgICAgICAgICAgICAgICBpZiAodHdwLnZpcC5pc19wcmVzY3JpcHRpb25fcmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmlwX2lzX3ByZXNjcmlwdGlvbl9yZXF1aXJlZCA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCEodHdwLnZpcC5pc19lbmFibGVfZm9yX3ZpcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNfYWxsX2VuYWJsZV9mb3JfdmlwID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCEodHdwLnZpcC5pc19nb2xkKSkge1xuICAgICAgICAgICAgICAgICAgICBpc19hbGxfZW5hYmxlX2Zvcl9nb2xkID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodHdwLmlzX3JhZGlvbG9neSkge1xuICAgICAgICAgICAgICAgICAgICByX3BpY2t1cF9jZW50ZXIgPSB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0ubGFiLmNlbnRlcl92aXNpdF9lbmFibGVkXG4gICAgICAgICAgICAgICAgICAgIGlmICghdHdwLmlzX2hvbWVfY29sbGVjdGlvbl9lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByX3BpY2t1cF9ob21lID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByYWRpb2xvZ3lfdGVzdHMucHVzaCg8cCBrZXk9e2l9IGNsYXNzTmFtZT1cInRlc3QtbGlzdCB0ZXN0LWxpc3QtbGFiZWwgbmV3LWxhYi10ZXN0LWxpc3QgcmRvLXJtdi1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgICAgICAgICAgaXNfY29ycG9yYXRlIHx8IGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlIHx8IGlzX3BsYW5fYXBwbGljYWJsZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCBmdy03MDBcIj7igrkgMCA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZSA9PSB0d3AubXJwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IGZ3LTcwMFwiPiYjODM3Nzsge3ByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IGZ3LTcwMFwiPiYjODM3Nzsge3ByaWNlfTxzcGFuIGNsYXNzTmFtZT1cInRlc3QtbXJwXCI+4oK5IHtwYXJzZUZsb2F0KHR3cC5tcnApfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LW5hbWUtaXRlbSBwLTBcIj57dHdwLnRlc3QubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHdwICYmIHR3cC50ZXN0ICYmIHR3cC50ZXN0LnNob3dfZGV0YWlscyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ICdtYXJnaW5MZWZ0JzogJzVweCcsIG1hcmdpblRvcDogJzFweCcsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19IGtleT17aX0gb25DbGljaz17dGhpcy50ZXN0SW5mby5iaW5kKHRoaXMsIHR3cC50ZXN0LmlkLCB0aGlzLnN0YXRlLnNlbGVjdGVkTGFiLCB0d3AudGVzdC51cmwpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9pY29ucy9JbmZvLnN2Zyd9IHN0eWxlPXt7IHdpZHRoOiAnMTVweCcgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX3BsYW5fYXBwbGljYWJsZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBrZy1kaXNjb3VudENwblwiIHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBmbG9hdDogJ3JpZ2h0JywgbWFyZ2luVG9wOiAnNXB4JyB9fT5Eb2NwcmltZSBDYXJlIEJlbmVmaXQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJkby1ybXYtc3BuXCIgb25DbGljaz17KCkgPT4gdGhpcy5yZW1vdmVUZXN0KHR3cCl9PlJlbW92ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9wPilcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR3cC5pc19wYXRob2xvZ3kpIHtcbiAgICAgICAgICAgICAgICAgICAgcF9waWNrdXBfY2VudGVyID0gdGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLmxhYi5jZW50ZXJfdmlzaXRfZW5hYmxlZFxuICAgICAgICAgICAgICAgICAgICBpZiAoIXR3cC5pc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcF9waWNrdXBfaG9tZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aG9sb2d5X3Rlc3RzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2l9IGNsYXNzTmFtZT1cInRlc3QtbGlzdCB0ZXN0LWxpc3QtbGFiZWwgcmRvLXJtdi1idG4gbmV3LWxhYi10ZXN0LWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzX2NvcnBvcmF0ZSB8fCBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSB8fCBpc19wbGFuX2FwcGxpY2FibGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgZnctNzAwXCI+4oK5IDAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPT0gdHdwLm1ycCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCBmdy03MDBcIj4mIzgzNzc7IHtwcmljZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCBmdy03MDBcIj4mIzgzNzc7IHtwcmljZX08c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LW1ycFwiPuKCuSB7cGFyc2VGbG9hdCh0d3AubXJwKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlc3QtbmFtZS1pdGVtIHAtMFwiPnt0d3AudGVzdC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHdwICYmIHR3cC50ZXN0ICYmIHR3cC50ZXN0LnNob3dfZGV0YWlscyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyAnbWFyZ2luTGVmdCc6ICc1cHgnLCBtYXJnaW5Ub3A6ICcxcHgnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fSBrZXk9e2l9IG9uQ2xpY2s9e3RoaXMudGVzdEluZm8uYmluZCh0aGlzLCB0d3AudGVzdC5pZCwgdGhpcy5zdGF0ZS5zZWxlY3RlZExhYiwgdHdwLnRlc3QudXJsKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2ljb25zL0luZm8uc3ZnJ30gc3R5bGU9e3sgd2lkdGg6ICcxNXB4JyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19wbGFuX2FwcGxpY2FibGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGtnLWRpc2NvdW50Q3BuXCIgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIGZsb2F0OiAncmlnaHQnLCBtYXJnaW5Ub3A6ICc1cHgnIH19PkRvY3ByaW1lIENhcmUgQmVuZWZpdDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmRvLXJtdi1zcG5cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnJlbW92ZVRlc3QodHdwKX0+UmVtb3ZlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPilcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0ZXN0c193aXRoX3ByaWNlLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1kZXRhaWwgZC1mbGV4XCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0d3AudGVzdC5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19jb3Jwb3JhdGUgfHwgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgfHwgaXNfcGxhbl9hcHBsaWNhYmxlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JiM4Mzc3OyAwPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMucHJvcHMucGF5bWVudF90eXBlID09IDYgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLnRlc3RzICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4udGVzdHNbdHdwLnRlc3RfaWRdID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KCh0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLnRlc3RzW3R3cC50ZXN0X2lkXS5nb2xkX3ByaWNlKSkgPT0gcGFyc2VJbnQoKHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4udGVzdHNbdHdwLnRlc3RfaWRdLm1ycCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9XCJwYXktYW1udC1zaHJua1wiPiYjODM3Nzsgeyh0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLnRlc3RzW3R3cC50ZXN0X2lkXS5nb2xkX3ByaWNlIHx8IDApfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxwIGNsYXNzTmFtZT1cInBheS1hbW50LXNocm5rXCI+JiM4Mzc3OyB7KHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4udGVzdHNbdHdwLnRlc3RfaWRdLm1ycCl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwcmljZSA9PSB0d3AubXJwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXktYW1udC1zaHJua1wiPiYjODM3Nzsge3ByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF5LWFtbnQtc2hybmtcIj4mIzgzNzc7IHtwYXJzZUZsb2F0KHR3cC5tcnApfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNlbnRlcl92aXNpdF9lbmFibGVkID0gbGFiRGV0YWlsLmNlbnRlcl92aXNpdF9lbmFibGVkXG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGNlbnRlciB2aXNpIG5vdCBlbmFibGVkLCBjaGVjayBob21lIHBpY2sgYXMgdHJ1ZVxuICAgICAgICAvKmlmICghY2VudGVyX3Zpc2l0X2VuYWJsZWQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0TGFiQXBwb2ludG1lbnRUeXBlKCdob21lJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiBob21lIHBpY2t1cCBub3QgYXZhaWxhYmxlIGJ1dCBzZWxlY3RlZCB0eXBlIGlzIGhvbWUgLCB0aGVuIGNoYW5nZSBpbiBuZXh0IGl0ZXJhdGlvblxuICAgICAgICAgICAgaWYgKCFpc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlID09ICdob21lJykge1xuICAgICAgICAgICAgICAgIC8vIHVzaW5nIHRpbWVvdXQgdG8gc2tpcCB0aGlzIHJlbmRlciBpdGVyYXRpb25cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RMYWJBcHBvaW50bWVudFR5cGUoJ2xhYicpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSovXG4gICAgICAgIC8vVklQIFRPVEFMIERBVEEgXG5cbiAgICAgICAgaWYgKCEodGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdICYmIHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS50ZXN0cyAmJiB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMubGVuZ3RoID4gMCkpIHtcbiAgICAgICAgICAgIGlzX2FsbF9lbmFibGVfZm9yX2dvbGQgPSBmYWxzZVxuICAgICAgICAgICAgaXNfYWxsX2VuYWJsZV9mb3JfdmlwID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICB2aXBfZGF0YS52aXBfYW1vdW50ID0gdmlwX3RvdGFsX2Ftb3VudFxuICAgICAgICB2aXBfZGF0YS52aXBfY29udmVuaWVuY2VfYW1vdW50ID0gdmlwX3RvdGFsX2NvbnZlbmllbmNlX2Ftb3VudFxuICAgICAgICB2aXBfZGF0YS52aXBfZ29sZF9wcmljZSA9IHZpcF90b3RhbF9nb2xkX3ByaWNlXG4gICAgICAgIHZpcF9kYXRhLmlzX2VuYWJsZV9mb3JfdmlwID0gaXNfYWxsX2VuYWJsZV9mb3JfdmlwXG4gICAgICAgIHZpcF9kYXRhLmlzX2dvbGQgPSBpc19hbGxfZW5hYmxlX2Zvcl9nb2xkXG4gICAgICAgIC8vQ2hlY2sgYm90aCBwYXRob2xvZ3kgYW5kIHJhZGlvbG9neSBwaWNrdXAgc3RhdHVzICYgdG9nZ2xlIGFjY29yZGluZ2x5IGlmIG5vdCBhdmFpbGFibGVcbiAgICAgICAgaWYgKCFyYWRpb2xvZ3lfdGVzdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByX3BpY2t1cF9ob21lID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXBhdGhvbG9neV90ZXN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHBfcGlja3VwX2hvbWUgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGxldCByX3BpY2t1cCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGUucl9waWNrdXBcbiAgICAgICAgbGV0IHBfcGlja3VwID0gdGhpcy5wcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZS5wX3BpY2t1cFxuICAgICAgICBsZXQgcmVzZXQgPSBmYWxzZVxuXG4gICAgICAgIGlmIChyYWRpb2xvZ3lfdGVzdHMubGVuZ3RoIHx8IHBhdGhvbG9neV90ZXN0cy5sZW5ndGgpIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGUucl9waWNrdXAgPT0gJ2xhYicgJiYgIXJfcGlja3VwX2NlbnRlciAmJiAocl9waWNrdXBfaG9tZSB8fCAhcmFkaW9sb2d5X3Rlc3RzLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICBpZiAocl9waWNrdXBfaG9tZSkge1xuICAgICAgICAgICAgICAgICAgICByX3BpY2t1cCA9ICdob21lJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNldCA9IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGUucl9waWNrdXAgPT0gJ2hvbWUnICYmICFyX3BpY2t1cF9ob21lICYmIChyX3BpY2t1cF9jZW50ZXIgfHwgIXJhZGlvbG9neV90ZXN0cy5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJfcGlja3VwX2NlbnRlcikge1xuICAgICAgICAgICAgICAgICAgICByX3BpY2t1cCA9ICdsYWInXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVzZXQgPSB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlLnBfcGlja3VwID09ICdsYWInICYmICFwX3BpY2t1cF9jZW50ZXIgJiYgKHBfcGlja3VwX2hvbWUgfHwgIXBhdGhvbG9neV90ZXN0cy5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBfcGlja3VwX2hvbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcF9waWNrdXAgPSAnaG9tZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzZXQgPSB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlLnBfcGlja3VwID09ICdob21lJyAmJiAhcF9waWNrdXBfaG9tZSAmJiAocF9waWNrdXBfY2VudGVyIHx8ICFwYXRob2xvZ3lfdGVzdHMubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIGlmIChwX3BpY2t1cF9jZW50ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcF9waWNrdXAgPSAnbGFiJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNldCA9IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFwX3BpY2t1cF9ob21lICYmICFwX3BpY2t1cF9jZW50ZXIpIHtcbiAgICAgICAgICAgICAgICBwX3BpY2t1cCA9IG51bGxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFyX3BpY2t1cF9ob21lICYmICFyX3BpY2t1cF9jZW50ZXIpIHtcbiAgICAgICAgICAgICAgICByX3BpY2t1cCA9IG51bGxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlLnJfcGlja3VwICYmIChyX3BpY2t1cF9ob21lIHx8IHJfcGlja3VwX2NlbnRlcikpIHtcbiAgICAgICAgICAgICAgICByZXNldCA9IHRydWVcbiAgICAgICAgICAgICAgICByX3BpY2t1cCA9IHJfcGlja3VwX2hvbWUgPyAnaG9tZScgOiByX3BpY2t1cF9jZW50ZXIgPyAnbGFiJyA6ICcnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZS5wX3BpY2t1cCAmJiAocF9waWNrdXBfaG9tZSB8fCBwX3BpY2t1cF9jZW50ZXIpKSB7XG4gICAgICAgICAgICAgICAgcmVzZXQgPSB0cnVlXG4gICAgICAgICAgICAgICAgcF9waWNrdXAgPSBwX3BpY2t1cF9ob21lID8gJ2hvbWUnIDogcF9waWNrdXBfY2VudGVyID8gJ2xhYicgOiAnJ1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGlmIChyZXNldCkge1xuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZFR5cGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHJfcGlja3VwOiByX3BpY2t1cCxcbiAgICAgICAgICAgICAgICAgICAgcF9waWNrdXA6IHBfcGlja3VwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdExhYkFwcG9pbnRtZW50VHlwZShzZWxlY3RlZFR5cGUpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlzX2hvbWVfY29sbGVjdGlvbl9lbmFibGVkID0gcl9waWNrdXBfaG9tZSB8fCBwX3BpY2t1cF9ob21lXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHBpY2tlZCBhZGRyZXNzIGlzIGNvcnJlY3Qgb3Igbm90XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlICYmICh0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlLnJfcGlja3VwID09ICdob21lJyB8fCB0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlLnBfcGlja3VwID09ICdob21lJykpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmFkZHJlc3MgJiYgdGhpcy5wcm9wcy5hZGRyZXNzLmxlbmd0aCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkQWRkcmVzcykge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWRkcmVzcy5tYXAoKGFkZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWRkLmlkID09IHRoaXMucHJvcHMuc2VsZWN0ZWRBZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzX3BpY2tlZF92ZXJpZmllZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYWRkcmVzc19waWNrZWQgPSBhZGRyZXNzX3BpY2tlZF92ZXJpZmllZFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZSAmJiAodGhpcy5wcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZS5yX3BpY2t1cCA9PSAnbGFiJyB8fCB0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlLnBfcGlja3VwID09ICdsYWInKSkge1xuICAgICAgICAgICAgYWRkcmVzc19waWNrZWQgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGFiQ291cG9ucyA9IHRoaXMucHJvcHMubGFiQ291cG9uc1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXSB8fCBbXVxuXG4gICAgICAgIGxldCBhbXRCZWZvcmVDb3Vwb24gPSAwXG4gICAgICAgIGxldCB0b3RhbF9wcmljZSA9IGZpbmFsUHJpY2VcbiAgICAgICAgbGV0IGlzX2hvbWVfY2hhcmdlc19hcHBsaWNhYmxlID0gZmFsc2VcbiAgICAgICAgbGV0IHRvdGFsX2Ftb3VudF9wYXlhYmxlX25vbl9wbGFuX3VzZXIgPSAwXG4gICAgICAgIGlmIChpc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlICYmICh0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlLnJfcGlja3VwID09ICdob21lJyB8fCB0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlLnBfcGlja3VwID09ICdob21lJykpIHtcbiAgICAgICAgICAgIGlzX2hvbWVfY2hhcmdlc19hcHBsaWNhYmxlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChpc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCAmJiBmaW5hbFByaWNlICYmIGlzX2hvbWVfY2hhcmdlc19hcHBsaWNhYmxlKSB7XG4gICAgICAgICAgICB0b3RhbF9wcmljZSA9IGZpbmFsUHJpY2UgKyAobGFiRGV0YWlsLmhvbWVfcGlja3VwX2NoYXJnZXMgfHwgMClcbiAgICAgICAgfVxuICAgICAgICBhbXRCZWZvcmVDb3Vwb24gPSB0b3RhbF9wcmljZVxuICAgICAgICBsZXQgZGlzcGxheV9yYWRpb19jb2RfcHJpY2UgPSBwYXJzZUludCh0b3RhbF9wcmljZSkgLSAodGhpcy5wcm9wcy5kaXNDb3VudGVkTGFiUHJpY2UgfHwgMClcblxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaXNfY2FzaGJhY2spIHtcbiAgICAgICAgICAgIHRvdGFsX3ByaWNlID0gdG90YWxfcHJpY2UgPyBwYXJzZUludCh0b3RhbF9wcmljZSkgLSAodGhpcy5wcm9wcy5kaXNDb3VudGVkTGFiUHJpY2UgfHwgMCkgOiAwXG4gICAgICAgIH1cbiAgICAgICAgdG90YWxfcHJpY2UgPSBpc19jb3Jwb3JhdGUgfHwgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgfHwgaXNfcGxhbl9hcHBsaWNhYmxlID8gMCA6IHRvdGFsX3ByaWNlXG4gICAgICAgIGxldCBpc192aXBfZ29sZF9hcHBsaWNhYmxlID0gLyppc190ZXN0c19jb3ZlcmVkX3VuZGVyX3ZpcCAmJiAqLygoaXNfc2VsZWN0ZWRfdXNlcl9nb2xkICYmIHZpcF9kYXRhICYmIHZpcF9kYXRhLmlzX2dvbGQpIHx8IGlzX3NlbGVjdGVkX3VzZXJfdW5kZXJfdmlwKVxuXG4gICAgICAgIHRvdGFsX2Ftb3VudF9wYXlhYmxlX25vbl9wbGFuX3VzZXIgPSB0b3RhbF9wcmljZVxuICAgICAgICBpZiAoaXNfdmlwX2dvbGRfYXBwbGljYWJsZSkge1xuICAgICAgICAgICAgdG90YWxfcHJpY2UgPSBmaW5hbE1ycFxuICAgICAgICB9XG4gICAgICAgIGxldCB0b3RhbF93YWxsZXRfYmFsYW5jZSA9IDBcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudXNlcldhbGxldEJhbGFuY2UgPj0gMCAmJiB0aGlzLnByb3BzLnVzZXJDYXNoYmFja0JhbGFuY2UgPj0gMCkge1xuICAgICAgICAgICAgdG90YWxfd2FsbGV0X2JhbGFuY2UgPSB0aGlzLnByb3BzLnVzZXJXYWxsZXRCYWxhbmNlICsgdGhpcy5wcm9wcy51c2VyQ2FzaGJhY2tCYWxhbmNlXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNfYWRkX3RvX2NhcmQgPSBTVE9SQUdFLmlzQWdlbnQoKSB8fCB0aGlzLnN0YXRlLmNhcnRfaXRlbSB8fCAoIWlzX2NvcnBvcmF0ZSAmJiAhaXNfZGVmYXVsdF91c2VyX2luc3VyZWQpXG4gICAgICAgIGxldCB0b3RhbF90ZXN0X2NvdW50ID0gcGF0aG9sb2d5X3Rlc3RzLmxlbmd0aCArIHJhZGlvbG9neV90ZXN0cy5sZW5ndGhcbiAgICAgICAgbGV0IGlzX3RpbWVfc2VsZWN0ZWRfZm9yX2FsbF90ZXN0cyA9IHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LnNlbGVjdGVkVGVzdHNUaW1lU2xvdCA/IE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LnNlbGVjdGVkVGVzdHNUaW1lU2xvdCkubGVuZ3RoIDogMFxuICAgICAgICBsZXQgdmlwX2Rpc2NvdW50X3ByaWNlID0gMFxuICAgICAgICBsZXQgdG90YWxfYW1vdW50X3BheWFibGUgPSB0b3RhbF9wcmljZVxuXG4gICAgICAgIGlmICghdG90YWxfdGVzdF9jb3VudCAmJiBpc19zZWxlY3RlZF91c2VyX2dvbGQpIHtcbiAgICAgICAgICAgIGlzX3ZpcF9nb2xkX2FwcGxpY2FibGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGlzX2NvdmVyX3VuZGVyX3ZpcF9nb2xkID0gZmFsc2U7XG4gICAgICAgIGlmICh2aXBfZGF0YSAmJiAodmlwX2RhdGEuaXNfZW5hYmxlX2Zvcl92aXApKSB7XG5cbiAgICAgICAgICAgIGlmIChpc19zZWxlY3RlZF91c2VyX2dvbGQpIHtcbiAgICAgICAgICAgICAgICBpc19jb3Zlcl91bmRlcl92aXBfZ29sZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGZpbmFsUHJpY2UgPCAodmlwX2RhdGEudmlwX2Ftb3VudCArIHZpcF9kYXRhLnZpcF9jb252ZW5pZW5jZV9hbW91bnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZpcF9kYXRhLmlzX2VuYWJsZV9mb3JfdmlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlzX3ZpcF9hcHBsaWNhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlzX3NlbGVjdGVkX3VzZXJfZ29sZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0b3RhbF9hbW91bnRfcGF5YWJsZSA9IHRvdGFsX2Ftb3VudF9wYXlhYmxlX25vbl9wbGFuX3VzZXI7XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsX3ByaWNlID0gdG90YWxfYW1vdW50X3BheWFibGVfbm9uX3BsYW5fdXNlcjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b3RhbF9hbW91bnRfcGF5YWJsZSA9IHZpcF9kYXRhLnZpcF9hbW91bnQgKyB2aXBfZGF0YS52aXBfY29udmVuaWVuY2VfYW1vdW50ICsgKGlzX2hvbWVfY2hhcmdlc19hcHBsaWNhYmxlID8gbGFiRGV0YWlsLmhvbWVfcGlja3VwX2NoYXJnZXMgOiAwKSAtICh0aGlzLnN0YXRlLmlzX2Nhc2hiYWNrID8gMCA6ICh0aGlzLnByb3BzLmRpc0NvdW50ZWRMYWJQcmljZSB8fCAwKSlcbiAgICAgICAgICAgICAgICAgICAgdmlwX2Rpc2NvdW50X3ByaWNlID0gZmluYWxNcnAgLSAodmlwX2RhdGEudmlwX2Ftb3VudCArIHZpcF9kYXRhLnZpcF9jb252ZW5pZW5jZV9hbW91bnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIGlmIChpc192aXBfYXBwbGljYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICBpc19jb3Zlcl91bmRlcl92aXBfZ29sZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHZpcF9kaXNjb3VudF9wcmljZSA9IGZpbmFsTXJwIC0gdmlwX2RhdGEudmlwX2Ftb3VudFxuICAgICAgICAgICAgICAgICAgICB0b3RhbF9hbW91bnRfcGF5YWJsZSA9IHZpcF9kYXRhLnZpcF9hbW91bnQgKyAoaXNfaG9tZV9jaGFyZ2VzX2FwcGxpY2FibGUgPyBsYWJEZXRhaWwuaG9tZV9waWNrdXBfY2hhcmdlcyA6IDApIC0gKHRoaXMuc3RhdGUuaXNfY2FzaGJhY2sgPyAwIDogKHRoaXMucHJvcHMuZGlzQ291bnRlZExhYlByaWNlIHx8IDApKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmlwX2RhdGEuaXNfZ29sZCkge1xuICAgICAgICAgICAgICAgICAgICB2aXBfZGlzY291bnRfcHJpY2UgPSBmaW5hbE1ycCAtICh2aXBfZGF0YS52aXBfZ29sZF9wcmljZSArIHZpcF9kYXRhLnZpcF9jb252ZW5pZW5jZV9hbW91bnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjdXJyZW50VGVzdHNDb3VudCA9IHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXSAmJiB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMgJiYgdGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLnRlc3RzLmxlbmd0aFxuXG4gICAgICAgIGxldCBzaG93R29sZFRvZ2dsZVBheW1lbnRNb2RlID0gIXRoaXMucHJvcHMuaXNfYW55X3VzZXJfYnV5X2dvbGQgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbiAmJiB0aGlzLnByb3BzLmxhYkdvbGRQcmVkaWN0ZWRQcmljZSAmJiB0aGlzLnByb3BzLmxhYkdvbGRQcmVkaWN0ZWRQcmljZS5sZW5ndGggJiYgIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlXG5cbiAgICAgICAgaWYgKCFzaG93R29sZFRvZ2dsZVBheW1lbnRNb2RlICYmIHRoaXMucHJvcHMucGF5bWVudF90eXBlID09IDYgJiYgdGhpcy5wcm9wcy5zaG93X2xhYl9wYXltZW50X21vZGUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0X2xhYl9wYXltZW50X3R5cGUoMSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vU0VUIFBBWU1FTlQgU1VNTUFSWSBQUklDRVxuICAgICAgICBsZXQgZGlzcGxheV9kb2NwcmltZV9kaXNjb3VudCA9IGZpbmFsTXJwIC0gZmluYWxQcmljZVxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuaXNfYW55X3VzZXJfYnV5X2dvbGQgJiYgdGhpcy5wcm9wcy5wYXltZW50X3R5cGUgPT0gNiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4udGVzdHMpIHtcbiAgICAgICAgICAgIGRpc3BsYXlfZG9jcHJpbWVfZGlzY291bnQgPSBwYXJzZUludChnb2xkX3ByaWNlbGlzdF9tcnApIC0gKHBhcnNlSW50KGdvbGRfcHJpY2VsaXN0X2RlYWxfcHJpY2UpICsgcGFyc2VJbnQoZ29sZF9wcmljZWxpc3RfY29udmVuaWVuY2UpKVxuICAgICAgICAgICAgdG90YWxfYW1vdW50X3BheWFibGUgPSB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmRlYWxfcHJpY2UgKyBwYXJzZUludChnb2xkX3ByaWNlbGlzdF9kZWFsX3ByaWNlKSArIHBhcnNlSW50KGdvbGRfcHJpY2VsaXN0X2NvbnZlbmllbmNlKSArIChpc19ob21lX2NoYXJnZXNfYXBwbGljYWJsZSAmJiBsYWJEZXRhaWwgPyBsYWJEZXRhaWwuaG9tZV9waWNrdXBfY2hhcmdlcyA6IDApIC8vIC0gKHRoaXMucHJvcHMuZGlzQ291bnRlZExhYlByaWNlIHx8IDApXG4gICAgICAgICAgICB0b3RhbF9wcmljZSA9IHRvdGFsX2Ftb3VudF9wYXlhYmxlXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGV4dHJhUGFyYW1zID0ge1xuICAgICAgICAgICAgaXNfZ29sZF9tZW1iZXI6IHZpcF9kYXRhICYmIC8qdmlwX2RhdGEuaXNfZ29sZCAmJiovIGlzX3NlbGVjdGVkX3VzZXJfZ29sZCxcbiAgICAgICAgICAgIHRvdGFsX2Ftb3VudF9wYXlhYmxlOiB0b3RhbF9hbW91bnRfcGF5YWJsZVxuICAgICAgICB9XG5cbiAgICAgICAgLy9EaXNhYmxlIEFsbCBSZXRhaWwgQm9va2luZ3NcbiAgICAgICAgbGV0IGRpc2FibGVfYWxsX2Jvb2tpbmdzID0gIShpc19jb3Zlcl91bmRlcl92aXBfZ29sZCB8fCBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSk7XG4gICAgICAgIGlmKFNUT1JBR0UuY2hlY2tBdXRoKCkpe1xuXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZGlzYWJsZV9hbGxfYm9va2luZ3MgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciBib29raW5nUGFnZT17dHJ1ZX0gc3VtbWFyeVBhZ2U9e3RydWV9Lz5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0NvbmZpcm1hdGlvblBvcHVwID09ICdvcGVuJyAmJiBpc19zZWxlY3RlZF91c2VyX2luc3VyYW5jZV9zdGF0dXMgIT0gNCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9va2luZ0NvbmZpcm1hdGlvblBvcHVwIHByaWNlQ29uZmlybWF0aW9uUG9wdXA9e3RoaXMucHJpY2VDb25maXJtYXRpb25Qb3B1cC5iaW5kKHRoaXMpfSBiYW5uZXJDb25maXJtYXRpb25Qb3B1cD17KCkgPT4geyB9fSBpc0xhYj17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dfbGVuc2ZpdF9wb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGVuc2ZpdFBvcHVwIHsuLi50aGlzLnByb3BzfSBsZW5zZml0X2NvdXBvbnM9e3RoaXMuc3RhdGUubGVuc2ZpdF9jb3Vwb25zfSBhcHBseUxlbnNGaXRDb3Vwb25zPXt0aGlzLmFwcGx5TGVuc0ZpdENvdXBvbnMuYmluZCh0aGlzKX0gY2xvc2VMZW5zRml0UG9wdXA9e3RoaXMuY2xvc2VMZW5zRml0UG9wdXAuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvL1Nob3cgVmlwIEdvbGQgU2luZ2xlIEZsb3cgUHJpY2UgTGlzdFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dHb2xkUHJpY2VMaXN0ICYmIDxWaXBHb2xkUGFja2FnZSBoaXN0b3J5T2JqPXt0aGlzLnByb3BzLmhpc3Rvcnl9IHZpcEdvbGRQbGFucz17dGhpcy5wcm9wcy5sYWJHb2xkUHJlZGljdGVkUHJpY2V9IHRvZ2dsZUdvbGRQcmljZVBvcHVwPXt0aGlzLnRvZ2dsZUdvbGRQcmljZVBvcHVwfSB0b2dnbGVHb2xkUGxhbnM9eyh2YWwpID0+IHRoaXMudG9nZ2xlR29sZFBsYW5zKHZhbCl9IHNlbGVjdGVkX3ZpcF9wbGFuPXt0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFufSBnb1RvR29sZFBhZ2U9e3RoaXMuZ29Ub0dvbGRQYWdlfSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucGF5bWVudEJ0bkNsaWNrZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJia25nLXRpbWUtb3ZlcmxheVwiPjxMb2FkZXIgLz48L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyLXRvcC1tYXJnaW4gY2xzLWJuclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0QmFyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBjZW50ZXItY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0gJiYgdGhpcy5wcm9wcy5zaG93X3ZpcF9ub25fbG9naW5fY2FyZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImRyLXByb2ZpbGUtc2NyZWVuIGJvb2tpbmctY29uZmlybS1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1yYi02MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNSBtcm5nLXRvcC0xMlwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ29Ub1Byb2ZpbGUodGhpcy5wcm9wcy5zZWxlY3RlZExhYiwgbGFiRGV0YWlsLnVybClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWItdmlzaXQtdGltZSBkLWZsZXggamMtc3BhY2ViXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcyMnB4JywgbWFyZ2luUmlnaHQ6ICc4cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2hvc3BpdGFsLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYkRldGFpbC5uYW1lICYmIGxhYkRldGFpbC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3RoeXJvY2FyZScpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFiLWNyZC10eHQtcHJcIj57bGFiRGV0YWlsLm5hbWUuc3BsaXQoJy0nKVswXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlICYmICh0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlLnJfcGlja3VwID09ICdsYWInIHx8IHRoaXMucHJvcHMuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGUucF9waWNrdXAgPT0gJ2xhYicpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2xhYkRldGFpbC5hZGRyZXNzIHx8ICcnfTwvc3Bhbj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFiLWNyZC10eHQtcHJcIj57bGFiRGV0YWlsLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZSA9PSAnbGFiJyAmJiAodGhpcy5wcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZS5yX3BpY2t1cCA9PSAnbGFiJyB8fCB0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlLnBfcGlja3VwID09ICdsYWInKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntsYWJEZXRhaWwuYWRkcmVzcyB8fCAnJ308L3NwYW4+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZnctNzAwIHRleHQtc21cIj5WaWV3IFByb2ZpbGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgIG1ibC12aWV3LWZvcm1hdHRpbmcgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdvVG9Qcm9maWxlKHRoaXMucHJvcHMuc2VsZWN0ZWRMYWIsIGxhYkRldGFpbC51cmwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZnctNzAwIHRleHQtc21cIj5WaWV3IFByb2ZpbGU8L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuZ2V0UGF0aWVudERldGFpbHMoaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUsIGNlbnRlcl92aXNpdF9lbmFibGVkLCBpc19ob21lX2NoYXJnZXNfYXBwbGljYWJsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlX2FsbF9ib29raW5ncz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNSBpbmZvLXJ0bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsbCBib29raW5ncyBhcmUgZGlzYWJsZWQgZm9yIG5ldyByZXRhaWwgY3VzdG9tZXJzLiBQbGVhc2UgY29udGFjdCB1cyBhdCBjdXN0b21lcmNhcmVAZG9jcHJpbWUuY29tIGlmIHlvdSBuZWVkIG1vcmUgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2AkeyhkaXNhYmxlX2FsbF9ib29raW5ncyB8fCB0aGlzLnN0YXRlLmRpc2FibGVfcGFnZSAmJiAhU1RPUkFHRS5pc0FnZW50KCkgKSA/ICdkaXNhYmxlLW9wYWNpdHknIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiLXZpc2l0LXRpbWUgZC1mbGV4IGpjLXNwYWNlYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGQtZmxleFwiPjxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcyMnB4JywgbWFyZ2luUmlnaHQ6ICc4cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ZsYXNrLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlRlc3Q8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCAgbWJsLXZpZXctZm9ybWF0dGluZyB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19zZWxlY3RlZF91c2VyX3VuZGVyX3ZpcCAmJiAhaXNfc2VsZWN0ZWRfdXNlcl9nb2xkID8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGEgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17dGhpcy5vcGVuVGVzdHMuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZ3LTcwMCB0ZXh0LXNtXCI+QWRkIG1vcmUvUmVtb3ZlIHRlc3RzPC9hPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UgJiYgU1RPUkFHRS5pc0FnZW50KCkgJiYgKGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmIHByZXNjcmlwdGlvblBpY2tlZCkgJiYgKCFpc19kZWZhdWx0X3VzZXJfaW5zdXJlZCAmJiAhaXNfY29ycG9yYXRlICYmICEocGFyc2VkICYmIHBhcnNlZC50ZXN0X2lkcykvKiAmJiAhaXNfdmlwX2dvbGRfYXBwbGljYWJsZSAmJiAhaXNfZGVmYXVsdF91c2VyX3VuZGVyX3ZpcCovKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXt0aGlzLm9wZW5UZXN0cy5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZnctNzAwIHRleHQtc21cIj5BZGQgbW9yZS9SZW1vdmUgdGVzdHM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLnRlc3RzICYmICF0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMubGVuZ3RoICYmIGlzX2RlZmF1bHRfdXNlcl9pbnN1cmVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9e3RoaXMuc2VhcmNoVGVzdHMuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZ3LTcwMCB0ZXh0LXNtXCI+U2VhcmNoIHRlc3RzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JhZGlvbG9neV90ZXN0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhyX3BpY2t1cF9jZW50ZXIgfHwgcl9waWNrdXBfaG9tZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0LWxhYi1yYWRpbyB3aWRnZXQtY29udGVudCB0ZXN0LXJlcG9ydCBsYWItYXBwb2ludG1lbnQtZGl2IHJvd1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaW5saW5lLWxpc3QgYm9va2luZy10eXBlIHNlYXJjaC1saXN0LXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByX3BpY2t1cF9ob21lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJob21lXCIgbmFtZT1cInJhZGlvbG9neVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBpY2t1cFR5cGUuYmluZCh0aGlzLCB7IHJfcGlja3VwOiAnaG9tZScsIHBfcGlja3VwOiB0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlLnBfcGlja3VwIH0pfSB2YWx1ZT1cImhvbWVcIiBjaGVja2VkPXt0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGUucl9waWNrdXAgPT0gJ2hvbWUnfSAvPjxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmUgbGFiLWFwcG9pbnRtZW50LWxhYmVsIHRleHQtbWQgZnctNTAwIHRleHQtcHJpbWFyeVwiIGh0bWxGb3I9XCJob21lXCI+IEhvbWUgUGljay11cDwvbGFiZWw+PC9saT4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByX3BpY2t1cF9jZW50ZXIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImxhYlwiIG5hbWU9XCJyYWRpb2xvZ3lcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVQaWNrdXBUeXBlLmJpbmQodGhpcywgeyByX3BpY2t1cDogJ2xhYicsIHBfcGlja3VwOiB0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlLnBfcGlja3VwIH0pfSB2YWx1ZT1cImxhYlwiIGNoZWNrZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGUgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZS5yX3BpY2t1cCA9PSAnbGFiJ30gLz4gPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZSBsYWItYXBwb2ludG1lbnQtbGFiZWwgdGV4dC1tZCBmdy01MDAgdGV4dC1wcmltYXJ5XCIgaHRtbEZvcj1cImxhYlwiPkxhYiBWaXNpdDwvbGFiZWw+PC9saT4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvL1BhdGhvbG9neSBUZXN0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXRob2xvZ3lfdGVzdHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocF9waWNrdXBfY2VudGVyIHx8IHBfcGlja3VwX2hvbWUpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdC1sYWItcmFkaW8gd2lkZ2V0LWNvbnRlbnQgdGVzdC1yZXBvcnQgbGFiLWFwcG9pbnRtZW50LWRpdiByb3dcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImlubGluZS1saXN0IGJvb2tpbmctdHlwZSBzZWFyY2gtbGlzdC1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcF9waWNrdXBfaG9tZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwicGhvbWVcIiBuYW1lPVwicGF0aG9sb2d5XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUGlja3VwVHlwZS5iaW5kKHRoaXMsIHsgcF9waWNrdXA6ICdob21lJywgcl9waWNrdXA6IHRoaXMucHJvcHMuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGUucl9waWNrdXAgfSl9IHZhbHVlPVwiaG9tZVwiIGNoZWNrZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGUgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZS5wX3BpY2t1cCA9PSAnaG9tZSd9IC8+PGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZSBsYWItYXBwb2ludG1lbnQtbGFiZWwgdGV4dC1tZCBmdy01MDAgdGV4dC1wcmltYXJ5XCIgaHRtbEZvcj1cInBob21lXCI+IEhvbWUgUGljay11cDwvbGFiZWw+PC9saT4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwX3BpY2t1cF9jZW50ZXIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInBsYWJcIiBuYW1lPVwicGF0aG9sb2d5XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUGlja3VwVHlwZS5iaW5kKHRoaXMsIHsgcF9waWNrdXA6ICdsYWInLCByX3BpY2t1cDogdGhpcy5wcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZS5yX3BpY2t1cCB9KX0gdmFsdWU9XCJsYWJcIiBjaGVja2VkPXt0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGUucF9waWNrdXAgPT0gJ2xhYid9IC8+IDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmUgbGFiLWFwcG9pbnRtZW50LWxhYmVsIHRleHQtbWQgZnctNTAwIHRleHQtcHJpbWFyeVwiIGh0bWxGb3I9XCJwbGFiXCI+TGFiIFZpc2l0PC9sYWJlbD48L2xpPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgJiYgcHJlc2NyaXB0aW9uUGlja2VkKSB8fCB2aXBfaXNfcHJlc2NyaXB0aW9uX3JlcXVpcmVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVwbG9hZFByZXNjcmlwdGlvbiB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5nZXRTZWxlY3RvcnMoaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUsIGNlbnRlcl92aXNpdF9lbmFibGVkLCBpc19ob21lX2NoYXJnZXNfYXBwbGljYWJsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbXRCZWZvcmVDb3Vwb24gIT0gMCAmJiAhaXNfcGxhbl9hcHBsaWNhYmxlICYmICFpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiB0aGlzLnByb3BzLnBheW1lbnRfdHlwZSAhPSA2LyomJiAhaXNfdmlwX2dvbGRfYXBwbGljYWJsZSAmJiAqLyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNVwiIG9uQ2xpY2s9e3RoaXMuYXBwbHlDb3Vwb25zLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYkNvdXBvbnMubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCAgZC1mbGV4IGpjLXNwYWNlYlwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291cG9uLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2NvdXBvbi1hcHBsaWVkLnN2Z1wifSBjbGFzc05hbWU9XCJ2aXNpdC10aW1lLWljb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgY291cG9uLXRleHRcIiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNfY2FzaGJhY2sgPyBcIkNvdXBvblwiIDogXCJDb3Vwb25cIn0gQXBwbGllZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBjb3Vwb24tdGV4dFwiIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBtYXJnaW5SaWdodDogMTMgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJDb3Vwb25zWzBdLmNvZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2NvcnBvcmF0ZSA/IFwiXCIgOiA8c3BhbiBjbGFzc05hbWU9XCJ2aXNpdC10aW1lLWljb24gY291cG9uLWljb25cIj48aW1nIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFuYWx5dGljRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0xhYkNvdXBvbnNSZW1vdmVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbGFiLWNvdXBvbnMtcmVtb3ZlZCcsICdjb3Vwb25JZCc6IGxhYkNvdXBvbnNbMF0uY291cG9uX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogYW5hbHl0aWNEYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY291cG9uQ29kZTogJycsIGNvdXBvbklkOiAnJyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVMYWJDb3Vwb25zKHRoaXMucHJvcHMuc2VsZWN0ZWRMYWIsIGxhYkNvdXBvbnNbMF0uY291cG9uX2lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZV93YWxsZXQ6IHRydWUsIGlzX3BheW1lbnRfY291cG9uX2FwcGxpZWQ6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Nyb3NzLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb3Vwb25fbG9hZGluZyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ19MaW5lYmFyX2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nX2Jhcl9saW5lXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IGQtZmxleCBqYy1zcGFjZWJcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291cG9uLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9vZnItY3BuLnN2Z1wifSBjbGFzc05hbWU9XCJ2aXNpdC10aW1lLWljb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBjb3Vwb24tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSEFWRSBBIENPVVBPTj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlzaXQtdGltZS1pY29uIGNvdXBvbi1pY29uLWFycm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcmlnaHQtYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gZ29sZCBjYXJkIGRldGFpbHMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiFzaG93R29sZFRvZ2dsZVBheW1lbnRNb2RlICYmICFpc192aXBfYXBwbGljYWJsZSAmJiAhaXNfc2VsZWN0ZWRfdXNlcl9nb2xkICYmICFpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiB2aXBfZGlzY291bnRfcHJpY2UgPiAwICYmIHZpcF9kYXRhLmlzX2dvbGQgJiYgdGhpcy5wcm9wcy5zaG93X3ZpcF9ub25fbG9naW5fY2FyZD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IGNwbi1ibHVyIG1yYi0xNSBjdXJzb3ItcG9pbnRlciBnb2xkLWdyZWVuLWNvbnRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFuYWx5dGljRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMYWJTdW1tYXJ5VmlwR29sZENsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbGFiLXN1bW1hcnktZ29sZC1jbGljaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBhbmFseXRpY0RhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ZpcC1nb2xkLWRldGFpbHM/aXNfZ29sZD10cnVlJnNvdXJjZT1sYWItc3VtbWFyeS12aXAtZ29sZC1jbGljayZsZWFkX3NvdXJjZT1Eb2NwcmltZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IGQtZmxleCBqYy1zcGFjZWIgYWxpZ24taXRlbS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2xkLWNyZC1sZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuPlNhdmUg4oK5e3ZpcF9kaXNjb3VudF9wcmljZX08L3NwYW4+IG9uIHRoaXMgYXBwb2ludG1lbnQgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ2xkLWNyZC1zYi10eHRcIj5CZWNvbWUgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dvbGQtc20ucG5nJ30gLz4gbWVtYmVyIEAmIzgzNzc7MTk5PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2xkLWNyZC1yZ3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkdldCBHb2xkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gZ29sZCBjYXJkIGRldGFpbHMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKmlzX2luc3VyYW5jZV9idXlfYWJsZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLXNtLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGQtaW5zLXRpdGxlLXN1YlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBjb3Vwb24tdGV4dFwiPkdldCBPUEQgSW5zdXJhbmNlICYgYm9vayBmb3IgPHNwYW4+RlJFRTwvc3Bhbj48L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJvb2sgVW5saW1pdGVkIERvY3RvcnMgYW5kIExhYiBUZXN0czwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvcGQtaW5zLWF2bFwiIG9uQ2xpY2s9e3RoaXMuZ29Ub0luc3VyYW5jZS5iaW5kKHRoaXMsIGxhYkRldGFpbCl9PkF2YWlsIE5vdyA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgICcvaW1nL3JpZ2h0LXNjLnN2Zyd9Lz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJyovfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKioqKioqUGF5bWVudCBNb2RlICoqKioqKioqKiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dHb2xkVG9nZ2xlUGF5bWVudE1vZGUgJiYgdGhpcy5wcm9wcy5zaG93X2xhYl9wYXltZW50X21vZGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTVcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBtYi0yMFwiPlBheW1lbnQgTW9kZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtc3VtbWFyeS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtZGV0YWlsIGQtZmxleFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0X2xhYl9wYXltZW50X3R5cGUoNilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW8gcGF5bWVudC10eXBlLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIHBheW1lbnQtYW10LWxhYmVsXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RfbGFiX3BheW1lbnRfdHlwZSg2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+IExhYiBib29raW5nIHdpdGggPGltZyBjbGFzc05hbWU9XCJzbmctZ2xkLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZ29sZC1sZy5wbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJnb2xkLXF1c1wiIG9uQ2xpY2s9eyhlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ29Ub0dvbGRQYWdlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Pj88L3NwYW4+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnb2xkX3ByaWNlbGlzdF9kZWFsX3ByaWNlID09IGdvbGRfcHJpY2VsaXN0X21ycFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxzcGFuIGNsYXNzTmFtZT1cInBheW1lbnQtbW9kZS1hbXRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RfbGFiX3BheW1lbnRfdHlwZSg2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT57YOKCuSR7Z29sZF9wcmljZWxpc3RfZGVhbF9wcmljZSArIGdvbGRfcHJpY2VsaXN0X2NvbnZlbmllbmNlfWB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxzcGFuIGNsYXNzTmFtZT1cInBheW1lbnQtbW9kZS1hbXRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RfbGFiX3BheW1lbnRfdHlwZSg2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT57YOKCuSR7Z29sZF9wcmljZWxpc3RfZGVhbF9wcmljZSArIGdvbGRfcHJpY2VsaXN0X2NvbnZlbmllbmNlfWB9IDxiIGNsYXNzTmFtZT1cImdkLWN1dC1wcmNcIj57YOKCuSR7Z29sZF9wcmljZWxpc3RfbXJwfWB9PC9iPjwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNoZWNrZWQ9e3RoaXMucHJvcHMucGF5bWVudF90eXBlID09IDZ9IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwYXltZW50LW1vZGVcIiB2YWx1ZT1cIm9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImRwLWdvbGQtcGxuLWNoYW5nZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRwLWdvbGQtcGF5LWxmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdvVG9Hb2xkUGFnZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cImRwLWdsZC10eHQtbWVtXCI+e2BEb2NwcmltZSBHb2xkOiAke3RoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4udG90YWxfYWxsb3dlZF9tZW1iZXJzfSBNZW1iZXJgfTxzcGFuPihLbm93IG1vcmUpPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZHAtZ2xkLW1lbS1ncm5cIj5FeHRyYSBzYXZpbmdzIG9uIGV2ZXJ5IGFwcG9pbnRtZW50IGZvciAxIHllYXI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1nb2xkLXBheS1yZ3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Digrkke3RoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4uZGVhbF9wcmljZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL2VkaXQuc3ZnJ30gb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVHb2xkUHJpY2VQb3B1cCh0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLnRvdGFsX2FsbG93ZWRfbWVtYmVycz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJlbmlmaXQtY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJuZnQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYm5mdC10eHRcIj48c3Ryb25nPntgU2F2ZSDigrkke3ZpcF9kaXNjb3VudF9wcmljZX1gfTwvc3Ryb25nPiBvbiB0aGlzIGFwcG9pbnRtZW50PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYm5mdC1zdWJ0eHRcIj57YCR7dGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi50b3RhbF9hbGxvd2VkX21lbWJlcnN9IG1lbWJlciBwbGFuIEBScyR7dGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5kZWFsX3ByaWNlfWB9PHNwYW4+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL2VkaXQuc3ZnJ30gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdvVG9Hb2xkUGFnZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fS8+PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm5mdC1idG5cIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ29Ub0dvbGRQYWdlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5WaWV3IEFsbCBCZW5lZml0czwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtc3VtbWFyeS1jb250ZW50XCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0X2xhYl9wYXltZW50X3R5cGUoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWRldGFpbCBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW8gcGF5bWVudC10eXBlLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdF9sYWJfcGF5bWVudF90eXBlKDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBwYXltZW50LWFtdC1sYWJlbFwiPk9ubHkgTGFiIGJvb2tpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbF9wcmljZSA9PSBkaXNwbGF5X3JhZGlvX2NvZF9wcmljZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBheW1lbnQtc3ViLWhlYWRpbmdcIj5ObyBkaXNjb3VudHMgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBheW1lbnQtbW9kZS1hbXRcIj57ZGlzcGxheV9yYWRpb19jb2RfcHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSA/IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHNwYW4gY2xhc3NOYW1lPVwic2F2ZS11cHRvXCI+U2F2ZSB7cGVyY2VudF9kaXNjb3VudH0lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2hlY2tlZD17dGhpcy5wcm9wcy5wYXltZW50X3R5cGUgPT0gMX0gdHlwZT1cInJhZGlvXCIgbmFtZT1cInBheW1lbnQtbW9kZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2NvcnBvcmF0ZSA/IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTVcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBjbGVhcmZpeFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBtYi0yMFwiPlBheW1lbnQgU3VtbWFyeTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX3BsYW5fYXBwbGljYWJsZSB8fCBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtc3VtbWFyeS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWRldGFpbCBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPk1SUDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPiYjODM3Nzsge3RvdGFsX3ByaWNlIHx8IDB9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtc3VtbWFyeS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rlc3RzX3dpdGhfcHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZpcF9kYXRhICYmIGlzX3ZpcF9hcHBsaWNhYmxlICYmICEodmlwX2RhdGEgLyomJiB2aXBfZGF0YS5pc19nb2xkICYmIGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfdmlwKi8gJiYgaXNfc2VsZWN0ZWRfdXNlcl9nb2xkKSA/IDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1kZXRhaWwgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19PkRvY3ByaW1lIFZJUCBNZW1iZXIgPGltZyBjbGFzc05hbWU9XCJ2aXAtbWFpbi1pY28gaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXBsb2cucG5nJ30gLz48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19Pi0gJiM4Mzc3OyB7dG90YWxfcHJpY2UgLSB2aXBfZGF0YS52aXBfYW1vdW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpcF9kYXRhIC8qJiYgdmlwX2RhdGEuaXNfZ29sZCAqLyAmJiBpc19zZWxlY3RlZF91c2VyX2dvbGQgJiYgdmlwX2Rpc2NvdW50X3ByaWNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1kZXRhaWwgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0+RG9jcHJpbWUgR29sZCBEaXNjb3VudCA8aW1nIGNsYXNzTmFtZT1cInZpcC1tYWluLWljbyBpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dvbGQtc20ucG5nJ30gLz48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0+LSAmIzgzNzc7IHt2aXBfZGlzY291bnRfcHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1doZW4gR29sZCBNZW1iZXJzaGlwIGlzIGJ1eWluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93R29sZFRvZ2dsZVBheW1lbnRNb2RlICYmIHRoaXMucHJvcHMucGF5bWVudF90eXBlID09IDYgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmRlYWxfcHJpY2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWRldGFpbCBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Eb2NwcmltZSBHb2xkIE1lbWJlcnNoaXAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiAmIzgzNzc7IHt0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmRlYWxfcHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodG90YWxfcHJpY2UgJiYgaXNfaG9tZV9jb2xsZWN0aW9uX2VuYWJsZWQgJiYgaXNfaG9tZV9jaGFyZ2VzX2FwcGxpY2FibGUpID8gPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWRldGFpbCBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudFwiPkhvbWUgUGlja3VwIENoYXJnZXM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQgZnctNTAwXCI+JiM4Mzc3OyB7bGFiRGV0YWlsLmhvbWVfcGlja3VwX2NoYXJnZXMgfHwgMH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Rpc3BsYXlfZG9jcHJpbWVfZGlzY291bnQgJiYgIWlzX3ZpcF9hcHBsaWNhYmxlICYmICEodmlwX2RhdGEvKiAmJiB2aXBfZGF0YS5pc19nb2xkICYmIGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfdmlwKi8gJiYgaXNfc2VsZWN0ZWRfdXNlcl9nb2xkKSA/IDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1kZXRhaWwgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19Pnt0aGlzLnByb3BzLnBheW1lbnRfdHlwZSA9PSA2ID8gJ0RvY3ByaW1lIEdvbGQgRGlzY291bnQnIDogJ0RvY3ByaW1lIERpc2NvdW50J308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19Pi0gJiM4Mzc3OyB7ZGlzcGxheV9kb2NwcmltZV9kaXNjb3VudH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRpc0NvdW50ZWRMYWJQcmljZSAmJiAhdGhpcy5zdGF0ZS5pc19jYXNoYmFjayAmJiB0aGlzLnByb3BzLnBheW1lbnRfdHlwZSAhPSA2LyomJiAhaXNfdmlwX2FwcGxpY2FibGUgJiYgISh2aXBfZGF0YSAmJiB2aXBfZGF0YS5pc19nb2xkICYmIGlzX3NlbGVjdGVkX3VzZXJfZ29sZCAmJiBpc190ZXN0c19jb3ZlcmVkX3VuZGVyX3ZpcCkgJiYgdGhpcy5wcm9wcy5wYXltZW50X3R5cGUhPTYqLyA/IDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1kZXRhaWwgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT5Db3Vwb24gRGlzY291bnQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT4tJiM4Mzc3OyB7dGhpcy5wcm9wcy5kaXNDb3VudGVkTGFiUHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKihpc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlID09ICdob21lJykgPyA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtZGV0YWlsIGQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPk1SUDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudCBmdy01MDBcIj4mIzgzNzc7IHt0b3RhbF9wcmljZSB8fCAwfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWRldGFpbCBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQgZnctNTAwXCI+TVJQPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudCBmdy01MDBcIj4mIzgzNzc7IHt0b3RhbF9wcmljZSB8fCAwfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWItdmlzaXQtdGltZSB0ZXN0LXJlcG9ydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgcGF5bWVudC1hbXQtbGFiZWxcIj5BbW91bnQgUGF5YWJsZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwYXltZW50LWFtdC12YWx1ZSBmdy01MDBcIj4mIzgzNzc7ICB7dG90YWxfYW1vdW50X3BheWFibGV9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2hvbWVfY2hhcmdlc19hcHBsaWNhYmxlID8gPGg1IGNsYXNzTmFtZT1cInBheW1lbnQtYW10LXZhbHVlIGZ3LTUwMFwiPiYjODM3NzsgIHt0b3RhbF9hbW91bnRfcGF5YWJsZX08L2g1PiA6IDxoNSBjbGFzc05hbWU9XCJwYXltZW50LWFtdC12YWx1ZSBmdy01MDBcIj4mIzgzNzc7ICB7aXNfdmlwX2FwcGxpY2FibGU/dmlwX2Ftb3VudDogdG90YWxfcHJpY2UgfHwgMH08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtdmFsLWJ4IGlucy12bC1ieC1vXCI+Q292ZXJlZCBVbmRlciBJbnN1cmFuY2U8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNfY2FzaGJhY2sgJiYgdGhpcy5wcm9wcy5kaXNDb3VudGVkTGFiUHJpY2UgPyA8ZGl2IGNsYXNzTmFtZT1cImNzaC1iYWNrLWFwcGxpZWQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjc2gtbW55LWFwcGxpZWRcIj4rICYjODM3Nzsge3RoaXMucHJvcHMuZGlzQ291bnRlZExhYlByaWNlfSBDYXNoYmFjayBBcHBsaWVkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3NoLW1ueS1hcHBsaWVkLWNvbnRlbnRcIj5DYXNoYmFjayB3aWxsIGJlIGFkZGVkIHRvIHlvdXIgZG9jcHJpbWUgd2FsbGV0IGJhbGFuY2Ugb24gYXBwb2ludG1lbnQgY29tcGxldGlvbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudF90eXBlICE9IDYgJiYgIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmIHRvdGFsX3dhbGxldF9iYWxhbmNlICYmIHRvdGFsX3dhbGxldF9iYWxhbmNlID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIndpZGdldCBtcmItMTVcIiArICh0aGlzLnN0YXRlLmlzX3BheW1lbnRfY291cG9uX2FwcGxpZWQgPyBcIiBkaXNhYmxlX2NvdXBvblwiIDogXCJcIil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LXB0LWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZlcnJhbC1zZWxlY3QgbWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNrLWJ4XCIgc3R5bGU9e3sgZm9udFdlaWdodDogJzYwMCcsIGZvbnRTaXplOiAnMTRweCcgfX0+VXNlIGRvY3ByaW1lIHdhbGxldCBtb25leTxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17dGhpcy50b2dnbGVXYWxsZXRVc2UuYmluZCh0aGlzKX0gY2hlY2tlZD17dGhpcy5zdGF0ZS51c2Vfd2FsbGV0fSAvPjxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiPjwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmZybC1hdmwtYmFsYW5jZVwiPkF2YWlsYWJsZSA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnNnB4JywgbWFyZ2luVG9wOiAnNXB4JywgbWFyZ2luUmlnaHQ6ICczcHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3J1cGVlLWljb24uc3ZnXCJ9IC8+e3RvdGFsX3dhbGxldF9iYWxhbmNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzX3BheW1lbnRfY291cG9uX2FwcGxpZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjcG4tcHltbnQtdHh0XCI+V2FsbGV0IEFtb3VudCBjYW4gbm90IGJlIHVzZWQgYmVjYXVzZSBwYXltZW50IGdhdGV3YXkgc3BlY2lmaWMgY291cG9uIGlzIGFwcGxpZWQuPC9zcGFuPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXaGF0c0FwcE9wdGluVmlldyB7Li4udGhpcy5wcm9wc30gcHJvZmlsZXM9e3BhdGllbnR9IHRvZ2dsZVdoYXRzYXA9e3RoaXMudG9nZ2xlV2hhdHNhcC5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWItdmlzaXQtdGltZSB0ZXN0LXJlcG9ydFwiIHN0eWxlPXt7IG1hcmdpblRvcDogMTAsIGN1cnNvcjogJ3BvaW50ZXInLCBtYXJnaW5Cb3R0b206IDAgfX0gb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAnb3BlbkNhbmNlbGxhdGlvbicpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgcGF5bWVudC1hbXQtbGFiZWwgZnMtaXRhbGljXCI+RnJlZSBDYW5jZWxsYXRpb248c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1IH19PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaWNvbnMvaW5mby5zdmdcIn0gLz48L3NwYW4+PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3Rlcm1zXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWItdmlzaXQtdGltZSB0ZXN0LXJlcG9ydFwiIHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBwYXltZW50LWFtdC1sYWJlbCBmcy1pdGFsaWNcIj5UZXJtcyBvZiBVc2U8c3Bhbj48aW1nIGNsYXNzTmFtZT1cImluZm8taWNvbi1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9pbmZvLnN2Z1wifSAvPjwvc3Bhbj48L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e3RoaXMuc3RhdGUuZXJyb3J9PC9zcGFuPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtcnQtMjAgZC1mbGV4IGFsaWduLWl0ZW1zLXN0YXJ0IGxhYlRlc3QtZHRsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy90aWNrLnN2Zyd9IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA4LCB3aWR0aDogMjAsIG1hcmdpblRvcDogMiB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiIHN0eWxlPXt7IGZsZXg6IDEgfX0gPkJ5IGNvbnRpbnVpbmcsIHlvdSBhcmUgYXV0aG9yaXppbmcgRG9jcHJpbWUgdG8gZGlyZWN0bHkgc2hhcmUgbGFiIHRlc3QgcmVwb3J0cyB3aXRoIHlvdS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93UGluY29kZVBvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaW5jb2RlUG9wdXAgc2V0UGluY29kZT17dGhpcy5zZXRQaW5jb2RlLmJpbmQodGhpcyl9IHRvZ2dsZT17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAnc2hvd1BpbmNvZGVQb3B1cCcpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5waW5jb2RlTWlzbWF0Y2hFcnJvciA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGluY29kZUVycm9yUG9wdXAgY2xpY2tQb3BVcD17dGhpcy5jbGlja1BpbmNvZGVFcnJyb3JQb3BVcC5iaW5kKHRoaXMpfSB0b2dnbGU9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgJ3BpbmNvZGVNaXNtYXRjaEVycm9yJyl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiA8TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm9wZW5DYW5jZWxsYXRpb24gPyA8Q2FuY2VsYXRpb25Qb2xpY3kgcHJvcHM9e3RoaXMucHJvcHN9IHRvZ2dsZT17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAnb3BlbkNhbmNlbGxhdGlvbicpfSBpc19pbnN1cmFuY2VfYXBwbGljYWJsZT17aXNfaW5zdXJhbmNlX2FwcGxpY2FibGV9IC8+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Rpc2FibGVfYWxsX2Jvb2tpbmdzPydkaXNhYmxlLW9wYWNpdHknOicnfSBmaXhlZCBzdGlja3ktYnRuIHAtMCB2LWJ0biAgYnRuLWxnIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIHRleHQtbGcgYnV0dG9ucy1hZGRjYXJ0LWNvbnRhaW5lciAkeyFpc19hZGRfdG9fY2FyZCAmJiB0aGlzLnByb3BzLmlwZF9jaGF0ICYmIHRoaXMucHJvcHMuaXBkX2NoYXQuc2hvd0lwZENoYXQgPyAnaXBkLWZvb3QtYnRuLWR1bycgOiAnJ30gJHt0aGlzLnN0YXRlLmRpc2FibGVfcGFnZSAmJiAhU1RPUkFHRS5pc0FnZW50KCkgPyAnZGlzYWJsZS1hbGwnIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChTVE9SQUdFLmlzQWdlbnQoKSB8fCB0aGlzLnN0YXRlLmNhcnRfaXRlbSB8fCAoIWlzX2NvcnBvcmF0ZSAmJiAhaXNfZGVmYXVsdF91c2VyX2luc3VyZWQgJiYgdGhpcy5wcm9wcy5wYXltZW50X3R5cGUgIT0gNikpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXt0aGlzLnN0YXRlLnBheV9idG5fbG9hZGluZ30gY2xhc3NOYW1lPXtcImFkZC1zaHBuZy1jYXJ0LWJ0blwiICsgKCF0aGlzLnN0YXRlLmNhcnRfaXRlbSA/IFwiXCIgOiBcIiB1cGRhdGUtYnRuXCIpICsgKHRoaXMuc3RhdGUucGF5X2J0bl9sb2FkaW5nID8gXCIgZGlzYWJsZS1hbGxcIiA6IFwiXCIpfSBkYXRhLWRpc2FibGVkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIShwYXRpZW50ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LnNlbGVjdGVkVGVzdHNUaW1lU2xvdCkgfHwgdGhpcy5zdGF0ZS5sb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBvbkNsaWNrPXt0aGlzLnByb2NlZWQuYmluZCh0aGlzLCB0b3RhbF90ZXN0X2NvdW50LCBhZGRyZXNzX3BpY2tlZCwgaXNfdGltZV9zZWxlY3RlZF9mb3JfYWxsX3Rlc3RzLCBwYXRpZW50LCB0cnVlLCB0b3RhbF9hbW91bnRfcGF5YWJsZSwgdG90YWxfd2FsbGV0X2JhbGFuY2UsIHByZXNjcmlwdGlvblBpY2tlZCwgaXNfc2VsZWN0ZWRfdXNlcl9pbnN1cmFuY2Vfc3RhdHVzLCB7fSwgdmlwX2lzX3ByZXNjcmlwdGlvbl9yZXF1aXJlZCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNhcnRfaXRlbSA/IFwiXCIgOiA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NhcnRpY28uc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh0aGlzLnN0YXRlLmlzX3Nwb19hcHBvaW50bWVudCB8fCAodGhpcy5wcm9wcy5wYXltZW50X3R5cGUgPT0gNiAmJiBTVE9SQUdFLmlzQWdlbnQoKSkpID8gJ1NlbmQgU01TJyA6IHRoaXMuc3RhdGUuY2FydF9pdGVtID8gXCJVcGRhdGVcIiA6IFwiQWRkIHRvIENhcnRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTVE9SQUdFLmlzQWdlbnQoKSAmJiB0aGlzLnByb3BzLnBheW1lbnRfdHlwZSA9PSA2ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXt0aGlzLnN0YXRlLnBheV9idG5fbG9hZGluZ30gY2xhc3NOYW1lPXtcImFkZC1zaHBuZy1jYXJ0LWJ0blwiICsgKCF0aGlzLnN0YXRlLmNhcnRfaXRlbSA/IFwiXCIgOiBcIiB1cGRhdGUtYnRuXCIpICsgKHRoaXMuc3RhdGUucGF5X2J0bl9sb2FkaW5nID8gXCIgZGlzYWJsZS1hbGxcIiA6IFwiXCIpfSBkYXRhLWRpc2FibGVkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIShwYXRpZW50ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LnNlbGVjdGVkVGVzdHNUaW1lU2xvdCkgfHwgdGhpcy5zdGF0ZS5sb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBvbkNsaWNrPXt0aGlzLnByb2NlZWQuYmluZCh0aGlzLCB0b3RhbF90ZXN0X2NvdW50LCBhZGRyZXNzX3BpY2tlZCwgaXNfdGltZV9zZWxlY3RlZF9mb3JfYWxsX3Rlc3RzLCBwYXRpZW50LCB0cnVlLCB0b3RhbF9hbW91bnRfcGF5YWJsZSwgdG90YWxfd2FsbGV0X2JhbGFuY2UsIHByZXNjcmlwdGlvblBpY2tlZCwgaXNfc2VsZWN0ZWRfdXNlcl9pbnN1cmFuY2Vfc3RhdHVzLCB7IHNlbmRXaGF0c3VwOiB0cnVlIH0sIHZpcF9pc19wcmVzY3JpcHRpb25fcmVxdWlyZWQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3dhLWxvZ28tc20ucG5nJ30gLz5TZW5kIG9uIFdoYXRzYXBwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTVE9SQUdFLmlzQWdlbnQoKSB8fCB0aGlzLnN0YXRlLmNhcnRfaXRlbSA/IFwiXCIgOiA8YnV0dG9uIGRpc2FibGVkPXt0aGlzLnN0YXRlLnBheV9idG5fbG9hZGluZ30gY2xhc3NOYW1lPXtgdi1idG4tcHJpbWFyeSBib29rLWJ0bi1tcmduLWFkanVzdCBwZGQtMTIgJHt0aGlzLnN0YXRlLnBheV9idG5fbG9hZGluZyA/IFwiIGRpc2FibGUtYWxsXCIgOiBcIlwifWB9IGlkPVwiY29uZmlybV9ib29raW5nXCIgZGF0YS1kaXNhYmxlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIShwYXRpZW50ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LnNlbGVjdGVkVGVzdHNUaW1lU2xvdCkgfHwgdGhpcy5zdGF0ZS5sb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IG9uQ2xpY2s9e3RoaXMucHJvY2VlZC5iaW5kKHRoaXMsIHRvdGFsX3Rlc3RfY291bnQsIGFkZHJlc3NfcGlja2VkLCBpc190aW1lX3NlbGVjdGVkX2Zvcl9hbGxfdGVzdHMsIHBhdGllbnQsIGZhbHNlLCB0b3RhbF9hbW91bnRfcGF5YWJsZSwgdG90YWxfd2FsbGV0X2JhbGFuY2UsIHByZXNjcmlwdGlvblBpY2tlZCwgaXNfc2VsZWN0ZWRfdXNlcl9pbnN1cmFuY2Vfc3RhdHVzLCB7fSwgdmlwX2lzX3ByZXNjcmlwdGlvbl9yZXF1aXJlZCl9Pnt0aGlzLmdldEJvb2tpbmdCdXR0b25UZXh0KHRvdGFsX3dhbGxldF9iYWxhbmNlLCB0b3RhbF9wcmljZSwgaXNfdmlwX2FwcGxpY2FibGUsIHZpcF9kYXRhICYmIHZpcF9kYXRhLnZpcF9hbW91bnQgPyB2aXBfZGF0YS52aXBfYW1vdW50IDogMCwgZXh0cmFQYXJhbXMpfTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZXJyb3IgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvb2tpbmdFcnJvciBtZXNzYWdlPXt0aGlzLnN0YXRlLmVycm9yfSBjbG9zZUVycm9yUG9wdXA9e3RoaXMuY2xvc2VFcnJvclBvcHVwfSAvPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0QmFyIGV4dHJhQ2xhc3M9XCIgY2hhdC1mbG9hdC1idG4tMlwiIHR5cGU9XCJsYWJcIiBub0NoYXRCdXR0b249e3RydWV9IG1zZ1RlbXBsYXRlPVwiZ29sZF9nZW5lcmFsX3RlbXBsYXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxEaXNjbGFpbWVyIC8+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBheW1lbnREYXRhID8gPFBheW1lbnRGb3JtIG11bHRpT3JkZXI9e3RoaXMucHJvcHMucGF5bWVudF90eXBlID09PSA2fSBwYXltZW50RGF0YT17dGhpcy5zdGF0ZS5wYXltZW50RGF0YX0gcmVmcz0nbGFiJyAvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBCb29raW5nU3VtbWFyeVZpZXdOZXdcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgUGluY29kZVBvcHVwRXJyb3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRcblx0cmVuZGVyKCl7XG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1wb3B1cC1vdmVybGF5IFwiIG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLnRvZ2dsZSgpfT5cblxuXHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1wb3B1cFwiPlxuXHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgcG9zLXJlbGF0aXZlXCI+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBwYWRpaW5nLXNyY2gtZWwgcGFkLXNyY2hcIj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3NzLWJ0blwiIG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLnRvZ2dsZSgpfT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9jbG9zZS5wbmdcIn0gYWx0PVwiY2xvc2VcIiAvPlxuXHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIFx0PGg0IGNsYXNzTmFtZT1cImFscnQtaGVhZFwiPkFsZXJ0ICE8L2g0PlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzcmNoLWVsLWNvbmVudFwiPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXQgbG9va3MgbGlrZSBwaW5jb2RlIGFuZCBhZGRyZXNzIHlvdSBoYXZlIGVudGVyZWQgYXJlIG5vdCBvZiB0aGUgc2FtZSBsb2NhdGlvbi5QbGVhc2UgY2hhbmdlIG9uZSBvZiB0aGVtIHRvIHByb2NlZWQ8L3A+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLWJ0bi1jb250YWluZXJcIj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnRoaXMucHJvcHMuY2xpY2tQb3BVcCgxKX0+Q2hhbmdlIFBpbmNvZGU8L2J1dHRvbj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJzcmMtZWwtYnRuLWJvcmRlclwiPjwvc3Bhbj4gKi99XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLmNsaWNrUG9wVXAoMil9PkNoYW5nZSBBZGRyZXNzPC9idXR0b24+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9kaXY+XG5cblx0ICAgICAgICAgICAgPC9kaXY+XG5cblx0ICAgICAgICA8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGluY29kZVBvcHVwRXJyb3IiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5cbmNsYXNzIFBpbmNvZGVQb3VwdXBWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwaW5jb2RlOiAnJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFsaWRhdGVQaW5jb2RlKCl7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUucGluY29kZS5tYXRjaCgvXlswLTldezZ9JC8pKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgc3VibWl0UGluY29kZShlKXtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBpZih0aGlzLnZhbGlkYXRlUGluY29kZSgpKXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0UGluY29kZSh0aGlzLnN0YXRlLnBpbmNvZGUpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBFbnRlciBWYWxpZCBQaW5jb2RlXCIgfSlcbiAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9oYW5kbGVDb250aW51ZVByZXNzKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdFBpbmNvZGUoZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlucHV0SGFuZGxlcihlKXtcbiAgICAgICAgZS50YXJnZXQudmFsdWUubGVuZ3RoIDw9IDY/dGhpcy5zZXRTdGF0ZSh7IHBpbmNvZGU6IGUudGFyZ2V0LnZhbHVlIH0pOicnXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZXJyb3ItbXNnLXBvcFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLW92ZXJsYXlcIiBvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy50b2dnbGUoKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cC1lcnJvciBwb3B1cC10aW1lc2xvdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLWhlYWRcIj5DaGVjayB0aW1lIHNsb3QgITwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3NzLWJ0blwiIG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLnRvZ2dsZSgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaWNvbnMvY2xvc2UucG5nXCJ9IGFsdD1cImNsb3NlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tpbmctbG9jXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvci1tc2dcIj5QbGVhc2UgZW50ZXIgeW91ciBwaW5jb2RlLCBzbyB0aGF0IHdlIGNhbiBmaW5kIHRoZSBiZXN0IGF2YWlsYWJsZSB0aW1lIHNsb3QgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbnB1dEZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWluXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBpbmNvZGVcIiBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUucGluY29kZX0gb25LZXlQcmVzcz17dGhpcy5faGFuZGxlQ29udGludWVQcmVzcy5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cIndhaXQtZm9yLWxvY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbG9hZGVyX29yYW5nZS5naWZcIn0gYWx0PVwibG9hZGVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvci1tc2dcIj5QbGVhc2Ugd2FpdCwgd2hpbGUgd2UgYXJlIGZpbmRpbmcgYmVzdCBhdmFpbGFibGUgdGltZSBmb3IgeW91PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIkphdmFzY3JpcHQ6dm9pZCgwKTtcIiBvbkNsaWNrPXt0aGlzLnN1Ym1pdFBpbmNvZGUuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwiYnRuLWNoay1hdmxcIj5DaGVjayBBdmFpbGFiaWxpdHk8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBpbmNvZGVQb3VwdXBWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IE1PTlRIUyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWcnLCAnU2VwdCcsICdPY3QnLCAnTm92JywgJ0RlYyddXG5jb25zdCBXRUVLX0RBWVMgPSBbJ1N1bicsICdNb24nLCAnVHVlcycsICdXZWQnLCAnVGh1cicsICdGcmknLCAnU2F0J11cbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5cbmNsYXNzIFZpc2l0VGltZU5ldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIGxldCBpc190aHlyb2NhcmUgPSB0aGlzLmlzX3RoeXJvY2FyZV9sYWIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkYXRlVGltZVNlbGVjdGVkVmFsdWU6IHByb3BzLnNlbGVjdGVkRGF0ZUZvcm1hdCA/IHByb3BzLnNlbGVjdGVkRGF0ZUZvcm1hdCA6IHRoaXMuZ2V0Rm9ybWF0dGVkRGF0ZShpc190aHlyb2NhcmUgPyBuZXcgRGF0ZSh0aGlzLmdldERhdGVBZnRlcigxKSkgOiBuZXcgRGF0ZSgpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5zZWxlY3RlZERhdGVGb3JtYXQgJiYgbmV4dFByb3BzLnNlbGVjdGVkRGF0ZUZvcm1hdCAhPSB0aGlzLnN0YXRlLmRhdGVUaW1lU2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGVUaW1lU2VsZWN0ZWRWYWx1ZTogbmV4dFByb3BzLnNlbGVjdGVkRGF0ZUZvcm1hdCB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0RGF0ZShlKSB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMYWJEYXRlQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2xhYi1kYXRlLWNsaWNrZWQnXG4gICAgICAgIH1cblxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBkYXRlID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRlVGltZVNlbGVjdGVkVmFsdWU6IGRhdGUgfSlcbiAgICAgICAgICAgIGxldCBzbG90ID0geyB0aW1lOiB7fSB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdExhYlRpbWVTTG90KHNsb3QsIGZhbHNlLCBkYXRlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Rm9ybWF0dGVkRGF0ZShkYXRlKSB7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKVxuICAgICAgICB2YXIgZGQgPSBkYXRlLmdldERhdGUoKTtcblxuICAgICAgICB2YXIgbW0gPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICB2YXIgeXl5eSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgaWYgKGRkIDwgMTApIHtcbiAgICAgICAgICAgIGRkID0gJzAnICsgZGQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW0gPCAxMCkge1xuICAgICAgICAgICAgbW0gPSAnMCcgKyBtbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0b2RheSA9IHl5eXkgKyAnLScgKyBtbSArICctJyArIGRkO1xuICAgICAgICByZXR1cm4gdG9kYXlcbiAgICB9XG5cbiAgICBnZXREYXRlQWZ0ZXIoaSA9IDApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuc2V0RGF0ZShuZXcgRGF0ZSgpLmdldERhdGUoKSArIGkpXG4gICAgfVxuXG4gICAgaXNfdGh5cm9jYXJlX2xhYihwcm9wcykge1xuICAgICAgICByZXR1cm4gcHJvcHMuTEFCUyAmJiBwcm9wcy5MQUJTW3Byb3BzLnNlbGVjdGVkTGFiXSAmJiBwcm9wcy5MQUJTW3Byb3BzLnNlbGVjdGVkTGFiXS5sYWIgJiYgcHJvcHMuTEFCU1twcm9wcy5zZWxlY3RlZExhYl0ubGFiLmlzX3RoeXJvY2FyZVxuICAgIH1cblxuICAgIGdvVG9UaW1lKCl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90WydhbGwnXSl7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm5hdmlnYXRlVG8oJ3RpbWUnLCB0aGlzLnByb3BzLmlzX2luc3VyYW5jZV9hcHBsaWNhYmxlLCBmYWxzZSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm5hdmlnYXRlVG8oJ3RpbWUnLCB0aGlzLnByb3BzLmlzX2luc3VyYW5jZV9hcHBsaWNhYmxlLCB0cnVlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCBpc190aHlyb2NhcmUgPSB0aGlzLmlzX3RoeXJvY2FyZV9sYWIodGhpcy5wcm9wcylcblxuICAgICAgICBsZXQgdW5pcXVlX2NvbW1vbl90ZXN0cyA9IG51bGxcbiAgICAgICAgaWYodGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdICYmIHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS50ZXN0cyAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdFsnYWxsJ10gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3Quc2VsZWN0ZWRUZXN0c1RpbWVTbG90KXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS50ZXN0cy5tYXAoKHgpPT57XG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3Quc2VsZWN0ZWRUZXN0c1RpbWVTbG90W3gudGVzdF9pZF0pe1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdW5pcXVlX2NvbW1vbl90ZXN0cyA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgd2lkZ2V0IG1yYi0xNSAke3RoaXMucHJvcHMudGltZUVycm9yID8gJ3JuZC1lcnJvci1ubScgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHBvcy1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0gJiYgdGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLmxhYiAmJiB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0ubGFiLmlzX3RoeXJvY2FyZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBpbmNvZGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFyZWEtcGluXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy50b2dnbGUoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcmVhIFBpbmNvZGUgLSA8Yj57dGhpcy5wcm9wcy5waW5jb2RlfTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+Q2hhbmdlPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cImFyZWEtcGluXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy50b2dnbGUoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgQXJlYSBQaW5jb2RlICA8Yj48L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPkFkZDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiLXZpc2l0LXRpbWUgZC1mbGV4IGpjLXNwYWNlYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGQtZmxleFwiPjxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcxOHB4JywgbWFyZ2luUmlnaHQ6ICc4cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3dhdGNoLWRhdGUuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+VmlzaXQgVGltZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0ICBtYmwtdmlldy1mb3JtYXR0aW5nIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZGF0ZS10aW1lIG1yLTEwIHRpdGxlXCI+e2RhdGUgfHwgXCJcIn0ge3RpbWUudGV4dCA/IFwifFwiIDogXCJcIn0ge3RpbWUudGV4dH0ge3RpbWUudGV4dD8odGltZS52YWx1ZT49MTI/J1BNJzonQU0nKTonJ308L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm5hdmlnYXRlVG8oJ3RpbWUnLHRoaXMucHJvcHMuaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZnctNzAwIHRleHQtc21cIj57dGltZS50ZXh0ID8gXCJDaGFuZ2VcIiA6IFwiU2VsZWN0XCJ9IFRpbWU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICEodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3Quc2VsZWN0ZWRUZXN0c1RpbWVTbG90ICYmIHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXSApICYmIDxhIGhyZWY9XCJcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm5hdmlnYXRlVG8oJ3RpbWUnLCB0aGlzLnByb3BzLmlzX2luc3VyYW5jZV9hcHBsaWNhYmxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmdy03MDAgdGV4dC1zbVwiPlNlbGVjdCBUaW1lPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3Quc2VsZWN0ZWRUZXN0c1RpbWVTbG90ICYmIHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZzdC10aW1lLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF1bmlxdWVfY29tbW9uX3Rlc3RzICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90WydhbGwnXSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdFsnYWxsJ10udGltZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2c3QtY29udGVudC1ibFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZG8tdGltZS12c3RcIj57bmV3IERhdGUodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3RbJ2FsbCddLmRhdGUpLnRvRGF0ZVN0cmluZygpIHx8IFwiXCJ9IHt0aGlzLnByb3BzLnNlbGVjdGVkU2xvdFsnYWxsJ10udGltZS50ZXh0ID8gXCJ8XCIgOiBcIlwifSB7dGhpcy5wcm9wcy5zZWxlY3RlZFNsb3RbJ2FsbCddLnRpbWUudGV4dH0ge3RoaXMucHJvcHMuc2VsZWN0ZWRTbG90WydhbGwnXS50aW1lLnRleHQgPyAodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3RbJ2FsbCddLnRpbWUudmFsdWUgPj0gMTIgPyAnUE0nIDogJ0FNJykgOiAnJ308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS50ZXN0cy5tYXAoKHRlc3QsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ2c3QtY29udGVudC1ibFwiIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZzdC10c3QtbmFtZVwiPnt0ZXN0LnRlc3QubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3Quc2VsZWN0ZWRUZXN0c1RpbWVTbG90W3Rlc3QudGVzdF9pZF0gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZG8tdGltZS12c3RcIj57bmV3IERhdGUodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3Quc2VsZWN0ZWRUZXN0c1RpbWVTbG90W3Rlc3QudGVzdF9pZF0uZGF0ZSkudG9EYXRlU3RyaW5nKCkgfHwgXCJcIn0ge3RoaXMucHJvcHMuc2VsZWN0ZWRTbG90LnNlbGVjdGVkVGVzdHNUaW1lU2xvdFt0ZXN0LnRlc3RfaWRdLnRpbWUudGV4dCA/IFwifFwiIDogXCJcIn0ge3RoaXMucHJvcHMuc2VsZWN0ZWRTbG90LnNlbGVjdGVkVGVzdHNUaW1lU2xvdFt0ZXN0LnRlc3RfaWRdLnRpbWUudGV4dH0ge3RoaXMucHJvcHMuc2VsZWN0ZWRTbG90LnNlbGVjdGVkVGVzdHNUaW1lU2xvdFt0ZXN0LnRlc3RfaWRdLnRpbWUudGV4dCA/ICh0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5zZWxlY3RlZFRlc3RzVGltZVNsb3RbdGVzdC50ZXN0X2lkXS50aW1lLnZhbHVlID49IDEyID8gJ1BNJyA6ICdBTScpIDogJyd9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxhIGhyZWY9XCJcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdvVG9UaW1lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZ3LTcwMCB0ZXh0LXNtXCI+U2VsZWN0IFRpbWU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubmF2aWdhdGVUbygndGltZScsIHRoaXMucHJvcHMuaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSB0ZXh0LXByaW1hcnkgZC1ibG9jayBmdy03MDAgdGV4dC1zbSB0ZXh0LXJpZ2h0IGZ3LTcwMCB0ZXh0LXNtXCI+Q2hhbmdlIFRpbWU8L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFwcG1udC1hdmxcIj5UaGUgYXBwb2ludG1lbnQgaXMgc3ViamVjdCB0byBjb25maXJtYXRpb24gZnJvbSB0aGUgTGFiLiA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBwb3MtcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNfdGh5cm9jYXJlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGluY29kZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFyZWEtcGluXCIgb25DbGljaz17KCk9PnRoaXMucHJvcHMudG9nZ2xlKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcmVhIFBpbmNvZGUgLSA8Yj57dGhpcy5wcm9wcy5waW5jb2RlfTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj5DaGFuZ2U8L2E+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8ZGl2IGNsYXNzTmFtZT1cImFyZWEtcGluXCIgb25DbGljaz17KCk9PnRoaXMucHJvcHMudG9nZ2xlKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgQXJlYSBQaW5jb2RlICA8Yj48L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+QWRkPC9hPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiLXZpc2l0LXRpbWUgZC1mbGV4IGpjLXNwYWNlYiBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgbWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInZpc2l0LXRpbWUtaWNvblwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvd2F0Y2gtZGF0ZS5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWxlY3QgVmlzaXQgVGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFwcG1udC1hdmxcIj5UaGUgYXBwb2ludG1lbnQgaXMgc3ViamVjdCB0byBjb25maXJtYXRpb24gZnJvbSB0aGUgTGFiLiA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1zbGVjZXQtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudy1pbnB0LXNlbGN0clwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm53LXBpY2staGRuZ1wiPkRhdGU6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fsbi1pbnB1dC10cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImlucC1udy1jYWxcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2NhbG5leHQuc3ZnJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImRhdGVcIiBvbkNoYW5nZT17dGhpcy5zZWxlY3REYXRlLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLmRhdGVUaW1lU2VsZWN0ZWRWYWx1ZT90aGlzLnN0YXRlLmRhdGVUaW1lU2VsZWN0ZWRWYWx1ZTonJ30gIG1pbj17dGhpcy5nZXRGb3JtYXR0ZWREYXRlKCBpc190aHlyb2NhcmU/bmV3IERhdGUodGhpcy5nZXREYXRlQWZ0ZXIoMSkgKTpuZXcgRGF0ZSgpKSB9IG1heD17dGhpcy5nZXRGb3JtYXR0ZWREYXRlKCBuZXcgRGF0ZSh0aGlzLmdldERhdGVBZnRlcigyMykgKSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1zbGVjZXQtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudy1pbnB0LXNlbGN0clwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm53LXBpY2staGRuZ1wiPlRpbWU6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fsbi1pbnB1dC10cFwiIG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLm5hdmlnYXRlVG8oJ3RpbWUnLHRoaXMucHJvcHMuaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbnAtbnctY2FsXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9udy13YXRjaC5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBkaXNhYmxlZD17dHJ1ZX0gbmFtZT1cImJkYXlcIiBwbGFjZWhvbGRlcj1cIlNlbGVjdFwiIHZhbHVlID17dGltZSAmJiB0aW1lLnRleHQ/YCR7dGltZS50ZXh0fSAke3RpbWUudmFsdWUgPj0gMTIgPyAnUE0nIDogJ0FNJ31gIDogJyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidG0tYXJ3LXNnblwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnJ30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFZpc2l0VGltZU5ld1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHsgdG9nZ2xlLHByb3BzLGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlIH0pID0+IHtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWwtb3ZlcmxheSBjYW5jZWwtb3ZlcmxheS16aW5kZXhcIiBvbkNsaWNrPXt0b2dnbGV9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBjYW5jZWwtYXBwb2ludG1lbnQtZGl2IGNhbmNlbC1wb3B1cFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIHRleHQtY2VudGVyIGFjdGlvbi1zY3JlZW4taGVhZGVyXCIgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0gPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBjYW5jZWwtYXBwb2ludG1lbnQtaGVhZFwiPkNhbmNlbGxhdGlvbiBQb2xpY3k8L3A+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9jbG9zZS5wbmdcIn0gY2xhc3NOYW1lPVwiY2xvc2UtbW9kYWxcIiBvbkNsaWNrPXt0b2dnbGV9IC8+XG4gICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLXBvbGljeS10ZXh0IGNhbmNlbFBvbGljeUhlaWdodFwiPlxuICAgICAgICAgICAgICAgIHsvKjxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPkZvciBhbnkgb25saW5lIHBhaWQgYXBwb2ludG1lbnRzLCB5b3UgY2FuIGNhbmNlbCB5b3VyIHNjaGVkdWxlZCBvciByZS1ib29rZWQgYXBwb2ludG1lbnQgYW5kIGluaXRpYXRlIGltbWVkaWF0ZSByZWZ1bmQgYXQgYW55IHRpbWUuIEFuIGltbWVkaWF0ZSByZWZ1bmQgc2hhbGwgYmUgc3ViamVjdCB0byB0ZXJtcyBhbmQgY29uZGl0aW9ucyBhcyBkZXNjcmliZWQgdW5kZXIgdGhpcyBzZWN0aW9uIG1lbnRpb25lZCBiZWxvdy5cblxuICAgICAgICAgICAgICAgICAgICBJbiB0aGUgZXZlbnQsIHRoZSBzZXJ2aWNlcyBhcmUgbm90IGF2YWlsZWQgYXQgdGhlIGFwcG9pbnRlZCBkYXRlIGFuZCB0aW1lIGFuZCBvdXIgc3lzdGVtcyBkbyBub3QgdmFsaWRhdGUgdGhlIFVSTiBnZW5lcmF0ZWQgb24geW91ciByZWdpc3RlcmVkIG1vYmlsZSBudW1iZXIsIHdlIHdpbGwgYXV0b21hdGljYWxseSBjYW5jZWwgeW91ciBhcHBvaW50bWVudCBhdCAxMjowMCBtaWRuaWdodCBvZiBuZXh0IGRhdGUgb2YgeW91ciBhcHBvaW50bWVudCBkYXRlLlxuXG4gICAgICAgICAgICAgICAgICAgIE9jY2FzaW9uYWxseSwgYXBwb2ludG1lbnRzIG1heSBiZSBjYW5jZWxsZWQgb3IgcG9zdHBvbmVkIGJ5IHRoZSBUaGlyZCBQYXJ0eSBTZXJ2aWNlIFByb3ZpZGVyLiBTaG91bGQgdGhpcyBvY2N1ciwgd2Ugd2lsbCBhdHRlbXB0IHRvIGNvbnRhY3Qgb3IgaW5mb3JtIHlvdSBhbmQgeW91IG1heSByZS1zY2hlZHVsZSB5b3VyIGFwcG9pbnRtZW50IGFzIHBlciB5b3VyIGNvbnZlbmllbmNlIG9yIHZpc2l0IHd3dy5kb2NwcmltZS5jb20gZm9yIGZyZXNoL3JlLWJvb2tpbmcgb24gdGhlIFdlYnNpdGUuXG5cbiAgICAgICAgICAgICAgICAgICAgQ2FuY2VsbGF0aW9uIHRocm91Z2ggbWFpbCBvciBjYWxsIGNlbnRlciBpcyBhbGxvd2VkIGZvciBhbGwgdGhlIGJvb2tpbmdzIHVudGlsIHRoZSB0aW1lIG9mIGFwcG9pbnRtZW50IG9yIDEyOjAwIG1pZG5pZ2h0IG9mIG5leHQgZGF0ZSBvZiB5b3VyIGFwcG9pbnRtZW50IGRhdGUuIEluIHN1Y2ggY2FzZXMsIHdlIHdpbGwgaW5pdGlhdGUgYW4gaW1tZWRpYXRlIHJlZnVuZCBvZiB5b3VyIG1vbmV5IGFzIHBlciB0aGUgcHJvY2VzcyBkZWZpbmVkIHVuZGVyIFJlZnVuZCwgUmVzY2hlZHVsaW5nIGFuZCBDYW5jZWxsYXRpb24gc2VjdGlvbiB1bmRlciB0aGUgRW5kIFVzZXIgQWdyZWVtZW50LiBcbiAgICAgICAgICAgICAgICAgICAgPHUgc3R5bGU9e3tjb2xvcjogJyNmNzg2MzEnLGN1cnNvcjoncG9pbnRlcicsZGlzcGxheTonaW5saW5lLWJsb2NrJ319IG9uQ2xpY2s9eygpID0+cHJvcHMuaGlzdG9yeS5wdXNoKCcvdGVybXM/Zm9yQm9va2luZ1Njcm9sbD10cnVlJyl9PmNsaWNrIGhlcmU8L3U+XG4gICAgICAgICAgICAgICAgPC9wPiovfVxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJib29raW5nLWNhbmNlbFwiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc19pbnN1cmFuY2VfYXBwbGljYWJsZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Rm9yIE9ubGluZSBQYWlkIEFwcG9pbnRtZW50cyAtPC9zdHJvbmc+IFlvdSBjYW4gY2FuY2VsIHlvdXIgc2NoZWR1bGVkIGFwcG9pbnRtZW50IGF0IGFueSB0aW1lLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkluIENhc2Ugb2YgQSBObyBTaG93IChQYXRpZW50IFVuYXZhaWxhYmxlKSAtPC9zdHJvbmc+IEluIHRoZSBldmVudCwgdGhlIHNlcnZpY2VzIGFyZSBub3QgYXZhaWxlZCBhdCB0aGUgYXBwb2ludGVkIGRhdGUgYW5kIHRpbWUuIFdlIHdpbGwgYXV0b21hdGljYWxseSBjYW5jZWwgeW91ciBhcHBvaW50bWVudCBhdCAxMjowMCBtaWRuaWdodCBvZiB0aGUgZGF0ZSBmb2xsb3dlZCBieSB0aGUgYXBwb2ludG1lbnQgZGF0ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5UaGlyZCBQYXJ0eSBDYW5jZWxsYXRpb24gKFByb3ZpZGVyIFVuYXZhaWxhYmxlKSAtIDwvc3Ryb25nPk9jY2FzaW9uYWxseSwgYXBwb2ludG1lbnRzIG1heSBiZSBjYW5jZWxlZCBvciBwb3N0cG9uZWQgZHVlIHRvIHVuYXZhaWxhYmlsaXR5IG9mIHRoZSBzZXJ2aWNlIHByb3ZpZGVyLiBTaG91bGQgdGhpcyBvY2N1ciwgd2Ugd2lsbCBjb250YWN0IG9yIGluZm9ybSB5b3UgYW5kIHlvdSBtYXkgcmVzY2hlZHVsZSB5b3VyIGFwcG9pbnRtZW50IGFzIHBlciB5b3VyIGNvbnZlbmllbmNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkZvciBPbmxpbmUgUGFpZCBBcHBvaW50bWVudHMgLTwvc3Ryb25nPiBZb3UgY2FuIGNhbmNlbCB5b3VyIHNjaGVkdWxlZCBhcHBvaW50bWVudCBhbmQgaW5pdGlhdGUgdGhlIGltbWVkaWF0ZSByZWZ1bmQgYXQgYW55IHRpbWUuIEltbWVkaWF0ZSByZWZ1bmQgc2hhbGwgYmUgc3ViamVjdCB0byB0ZXJtcyBhbmQgY29uZGl0aW9ucyBhcyBkZXNjcmliZWQgdW5kZXIgdGhpcyBzZWN0aW9uIG1lbnRpb25lZCBiZWxvdy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5JbiBDYXNlIG9mIEEgTm8gU2hvdyAoUGF0aWVudCBVbmF2YWlsYWJsZSkgLTwvc3Ryb25nPiBJbiB0aGUgZXZlbnQsIHRoZSBzZXJ2aWNlcyBhcmUgbm90IGF2YWlsZWQgYXQgdGhlIGFwcG9pbnRlZCBkYXRlIGFuZCB0aW1lLiBXZSB3aWxsIGF1dG9tYXRpY2FsbHkgY2FuY2VsIHlvdXIgYXBwb2ludG1lbnQgYXQgMTI6MDAgbWlkbmlnaHQgb2YgdGhlIGRhdGUgZm9sbG93ZWQgYnkgdGhlIGFwcG9pbnRtZW50IGRhdGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VGhpcmQgUGFydHkgQ2FuY2VsbGF0aW9uIChQcm92aWRlciBVbmF2YWlsYWJsZSkgLTwvc3Ryb25nPiBPY2Nhc2lvbmFsbHksIGFwcG9pbnRtZW50cyBtYXkgYmUgY2FuY2VsZWQgb3IgcG9zdHBvbmVkIGR1ZSB0byB1bmF2YWlsYWJpbGl0eSBvZiB0aGUgc2VydmljZSBwcm92aWRlci4gU2hvdWxkIHRoaXMgb2NjdXIsIHdlIHdpbGwgY29udGFjdCBvciBpbmZvcm0geW91IGFuZCB5b3UgbWF5IHJlc2NoZWR1bGUgeW91ciBhcHBvaW50bWVudCBhcyBwZXIgeW91ciBjb252ZW5pZW5jZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz4yNCBIb3VycyBDYW5jZWxsYXRpb24gLTwvc3Ryb25nPiBDYW5jZWxsYXRpb24gaXMgYWxsb3dlZCBmb3IgYWxsIHRoZSBhcHBvaW50bWVudHMuIEluIHN1Y2ggY2FzZXMsIHdlIHdpbGwgaW5pdGlhdGUgdGhlIGltbWVkaWF0ZSByZWZ1bmQgb2YgeW91ciBtb25leSBhcyBwZXIgdGhlIHByb2Nlc3MgZGVmaW5lZCB1bmRlciBSZWZ1bmQsIFJlc2NoZWR1bGluZywgYW5kIENhbmNlbGxhdGlvbiBzZWN0aW9uIG9mIHRoZSAgPHUgc3R5bGU9e3tjb2xvcjogYHZhcigtLXRleHQtLXByaW1hcnktLWNvbG9yKWAgLGN1cnNvcjoncG9pbnRlcicsZGlzcGxheTonaW5saW5lLWJsb2NrJ319IG9uQ2xpY2s9eygpID0+cHJvcHMuaGlzdG9yeS5wdXNoKCcvdGVybXM/Zm9yQm9va2luZ1Njcm9sbD10cnVlJyl9PkVuZCBVc2VyIEFncmVlbWVudC48L3U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG59IiwiaW1wb3J0IEJvb2tpbmdTdW1tYXJ5Vmlld05ldyBmcm9tICcuL0Jvb2tpbmdTdW1tYXJ5Vmlld05ldy5qcydcblxuZXhwb3J0IGRlZmF1bHQgQm9va2luZ1N1bW1hcnlWaWV3TmV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHsgdG9nZ2xlLCBmaW5hbFByaWNlLCBmaW5hbE1ycCwgaXNfaG9tZV9jb2xsZWN0aW9uX2VuYWJsZWQsIGhvbWVfcGlja3VwX2NoYXJnZXMgfSkgPT4ge1xuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbC1vdmVybGF5XCIgb25DbGljaz17dG9nZ2xlfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgY2FuY2VsLWFwcG9pbnRtZW50LWRpdiBwYXltZW50LXBvcHVwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1oZWFkZXIgdGV4dC1jZW50ZXIgYWN0aW9uLXNjcmVlbi1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgY2FuY2VsLWFwcG9pbnRtZW50LWhlYWRcIj5QYXltZW50IFN1bW1hcnk8L3A+XG4gICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50LWRpdlwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudFwiPkxhYiBGZWVzPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudCBmdy01MDBcIj4mIzgzNzc7IHtmaW5hbE1ycH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCA/IDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50LWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnRcIj5Ib21lIFBpY2t1cCBDaGFyZ2VzPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQgZnctNTAwXCI+JiM4Mzc3OyB7aG9tZV9waWNrdXBfY2hhcmdlcyB8fCAwfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudC1kaXZcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnRcIj5kb2NwcmltZSBEaXNjb3VudDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQgZnctNTAwXCI+JiM4Mzc3OyB7ZmluYWxNcnAgLSBmaW5hbFByaWNlfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlzX2hvbWVfY29sbGVjdGlvbl9lbmFibGVkID8gPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudCBmdy01MDBcIj5TdWJ0b3RhbDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPiYjODM3Nzsge2ZpbmFsUHJpY2UgKyBob21lX3BpY2t1cF9jaGFyZ2VzfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gOiA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudC1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudCBmdy01MDBcIj5TdWJ0b3RhbDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudCBmdy01MDBcIj4mIzgzNzc7IHtmaW5hbFByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQtZGl2XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPlByb21vY29kZSBEaXNjb3VudDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQgZnctNTAwXCI+JiM4Mzc3OyAyMDA8L3A+XG4gICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaXNfaG9tZV9jb2xsZWN0aW9uX2VuYWJsZWQgPyA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudC1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPkFtb3VudCBQYXlhYmxlPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQgZnctNTAwXCI+JiM4Mzc3OyB7ZmluYWxQcmljZSArIGhvbWVfcGlja3VwX2NoYXJnZXN9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PiA6IDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50LWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPkFtb3VudCBQYXlhYmxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPiYjODM3Nzsge2ZpbmFsUHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQtYnRuIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmdy01MDBcIiBvbkNsaWNrPXt0b2dnbGV9PkRvbmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBQaWNrdXBBZGRyZXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEFkZHJlc3NTdHIoYWRkcmVzcykge1xuICAgICAgICBsZXQgYWRkcmVzc1N0ciA9IFwiXCJcbiAgICAgICAgYWRkcmVzc1N0ciA9IGFkZHJlc3MuYWRkcmVzc1xuICAgICAgICBpZiAoYWRkcmVzcy5sYW5kX21hcmspIHtcbiAgICAgICAgICAgIGFkZHJlc3NTdHIgKz0gXCIsIFwiICsgYWRkcmVzcy5sYW5kX21hcmtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWRkcmVzcy5sb2NhbGl0eSkge1xuICAgICAgICAgICAgYWRkcmVzc1N0ciArPSBcIiwgXCIgKyBhZGRyZXNzLmxvY2FsaXR5XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFkZHJlc3NTdHJcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgbGV0IGFkZHJlc3NTdHIgPSBcIlwiXG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRBZGRyZXNzKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmFkZHJlc3MubWFwKChhZGQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYWRkLmlkID09IHRoaXMucHJvcHMuc2VsZWN0ZWRBZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NTdHIgPSBhZGQuYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWRkLmxvY2FsaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzU3RyICs9IFwiLCBcIiArIGFkZC5sb2NhbGl0eVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHdpZGdldCBtcmItMTUgJHt0aGlzLnByb3BzLmFkZHJlc3NFcnJvciA9PSBmYWxzZSB8fCBhZGRyZXNzU3RyLmxlbmd0aCA/Jyc6J3JuZC1lcnJvci1ubSd9YH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYi12aXNpdC10aW1lIGQtZmxleCBqYy1zcGFjZWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e319IGNsYXNzTmFtZT1cInRpdGxlIGQtZmxleFwiPjxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcxOHB4JywgbWFyZ2luUmlnaHQ6ICc4cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2hvbWUtY2xlYW4uc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+UGlja3VwIEFkZHJlc3M8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYmwtdmlldy1mb3JtYXR0aW5nIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkYXRlLXRpbWVcIiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT57YWRkcmVzc1N0cn0ge3RoaXMucHJvcHMuYWRkcmVzc0Vycm9yID09IGZhbHNlIHx8IGFkZHJlc3NTdHIubGVuZ3RoID8gJycgOiA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDBcIiBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIGZvbnRTaXplOiAxMSwgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJy04cHgnLCByaWdodDogMCB9fT5SZXF1aXJlZDwvc3Bhbj59PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZnctNzAwIHRleHQtc21cIiBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubmF2aWdhdGVUbygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+e2FkZHJlc3NTdHIgPyBcIkNoYW5nZVwiIDogXCJBZGRcIn0gQWRkcmVzczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4vKlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWItdmlzaXQtdGltZVwiPlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiPjxzcGFuPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaWNvbnMvaG9tZS1vcmFuZ2Uuc3ZnXCJ9IGNsYXNzTmFtZT1cInZpc2l0LXRpbWUtaWNvblwiIC8+PC9zcGFuPlBpY2t1cCBBZGRyZXNzIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+PGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm5hdmlnYXRlVG8oKVxuICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmdy03MDAgdGV4dC1zbVwiPnthZGRyZXNzU3RyID8gXCJDaGFuZ2VcIiA6IFwiUGlja1wifTwvYT48L3NwYW4+PC9oND5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkYXRlLXRpbWVcIiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT57YWRkcmVzc1N0cn0ge3RoaXMucHJvcHMuYWRkcmVzc0Vycm9yID09IGZhbHNlIHx8IGFkZHJlc3NTdHIubGVuZ3RoID8gJycgOiA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDBcIiBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIGZvbnRTaXplOiAxMSwgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJy04cHgnLCByaWdodDogMCB9fT5SZXF1aXJlZDwvc3Bhbj59PC9wPlxuICAgICAgICAgICAgPC9kaXY+Ki9cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUGlja3VwQWRkcmVzc1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcbmNvbnN0IENvbXByZXNzID0gcmVxdWlyZSgnY29tcHJlc3MuanMnKVxuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvTG9hZGVyJ1xuY2xhc3MgVXBsb2FkUHJlc2NyaXB0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRhdGFVcmw6IG51bGwsXG4gICAgICAgICAgICB6b29tSW1hZ2VVcmw6IG51bGwsXG4gICAgICAgICAgICB6b29tSW1hZ2U6IGZhbHNlLFxuICAgICAgICAgICAgb3BlblBkZjogZmFsc2UsXG4gICAgICAgICAgICBvcGVuUGRmVXJsOiBudWxsLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGlja0ZpbGUoZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXNbMF0pIHtcbiAgICAgICAgICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF1cbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5maWxlc1swXSAmJiBlLnRhcmdldC5maWxlc1swXS5uYW1lLmluY2x1ZGVzKCcucGRmJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaENyb3AobnVsbCwgZmlsZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcHJlc3MgPSBuZXcgQ29tcHJlc3MoKVxuICAgICAgICAgICAgICAgIGNvbXByZXNzLmNvbXByZXNzKFtmaWxlXSwge1xuICAgICAgICAgICAgICAgICAgICBxdWFsaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAxMDAwLFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nMSA9IHJlc3VsdHNbMF1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFzZTY0c3RyID0gaW1nMS5kYXRhXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0V4dCA9IGltZzEuZXh0XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBDb21wcmVzcy5jb252ZXJ0QmFzZTY0VG9GaWxlKGJhc2U2NHN0ciwgaW1nRXh0KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEJhc2U2NChmaWxlLCAoZGF0YVVybCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hDcm9wKGRhdGFVcmwsIG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YVVybCB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJFcnJvciB1cGxvYWRpbmcgaW1hZ2UuXCIgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEJhc2U2NChmaWxlLCBjYikge1xuICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxuICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2IocmVhZGVyLnJlc3VsdClcbiAgICAgICAgfVxuICAgICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnJvcilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmlzaENyb3AoZGF0YVVybCwgZmlsZSkge1xuICAgICAgICBsZXQgZmlsZV9ibG9iX2RhdGFcbiAgICAgICAgaWYgKGRhdGFVcmwpIHtcbiAgICAgICAgICAgIGZpbGVfYmxvYl9kYXRhID0gdGhpcy5kYXRhVVJJdG9CbG9iKGRhdGFVcmwpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1lbV9kYXRhID0ge31cbiAgICAgICAgbGV0IGV4aXN0aW5nRGF0YVxuICAgICAgICBsZXQgaW1nX3RhZyA9IFwicHJlc2NyaXB0aW9uX2ZpbGVcIlxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGRhdGFVcmw6IG51bGwsIGlzTG9hZGluZzogdHJ1ZVxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZm9ybV9kYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgZm9ybV9kYXRhLmFwcGVuZChpbWdfdGFnLCBmaWxlLCBcImltYWdlRmlsZW5hbWUucGRmXCIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvcm1fZGF0YS5hcHBlbmQoaW1nX3RhZywgZmlsZV9ibG9iX2RhdGEsIFwiaW1hZ2VGaWxlbmFtZS5qcGVnXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLnVwbG9hZFByZXNjcmlwdGlvbihmb3JtX2RhdGEsIChkYXRhLCBlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBtZW1fZGF0YS5pZCA9IGRhdGEuZGF0YS51c2VyXG4gICAgICAgICAgICAgICAgICAgIG1lbV9kYXRhLmltZ19wYXRoX2lkcyA9IFtdXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnVzZXJfcHJlc2NyaXB0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLnVzZXJfcHJlc2NyaXB0aW9ucykubWFwKGZ1bmN0aW9uIChba2V5LCB2YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1fZGF0YS5pbWdfcGF0aF9pZHMgPSB2YWx1ZS5pbWdfcGF0aF9pZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1fZGF0YS5pbWdfcGF0aF9pZHMucHVzaCh7IGlkOiBkYXRhLmlkLCBpbWFnZTogZGF0YS5kYXRhLnByZXNjcmlwdGlvbl9maWxlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYodmFsdWUuaWQgPT0gbWVtYmVyX2lkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtZW1fZGF0YS5pbWdfcGF0aF9pZHMgPSB2YWx1ZS5pbWdfcGF0aF9pZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtZW1fZGF0YS5pbWdfcGF0aF9pZHMucHVzaCh7aWQ6IGRhdGEuaWQsIGltYWdlOmRhdGEuZGF0YS5wcmVzY3JpcHRpb25fZmlsZX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG1lbV9kYXRhLmltZ19wYXRoX2lkcyA9IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG1lbV9kYXRhLmltZ19wYXRoX2lkcy5wdXNoKHtpZDogZGF0YS5pZCwgaW1hZ2U6ZGF0YS5kYXRhLnByZXNjcmlwdGlvbl9maWxlfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZW1fZGF0YS5pbWdfcGF0aF9pZHMucHVzaCh7IGlkOiBkYXRhLmlkLCBpbWFnZTogZGF0YS5kYXRhLnByZXNjcmlwdGlvbl9maWxlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zYXZlUHJlc2NyaXB0aW9uKG1lbV9kYXRhKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZGF0YVVSSXRvQmxvYihkYXRhVVJJKSB7XG4gICAgICAgIHZhciBiaW5hcnkgPSBhdG9iKGRhdGFVUkkuc3BsaXQoJywnKVsxXSk7XG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJpbmFyeS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJyYXkucHVzaChiaW5hcnkuY2hhckNvZGVBdChpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBCbG9iKFtuZXcgVWludDhBcnJheShhcnJheSldLCB7IHR5cGU6ICdpbWFnZS9qcGVnJyB9KTtcbiAgICB9XG5cbiAgICByZW1vdmVJbWFnZShpbWcpIHtcbiAgICAgICAgdGhpcy5wcm9wcy51c2VyX3ByZXNjcmlwdGlvbnNbMF0uaW1nX3BhdGhfaWRzLm1hcCgoZGF0YSwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEuaW1hZ2UgPT0gaW1nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVQcmVzY3JpcHRpb24oaW1nKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IFVwbG9hZGVkX2ltYWdlX2RhdGEgPSBbXVxuICAgICAgICBsZXQgaW1nX3VybCA9IFtdXG4gICAgICAgIGxldCBwZGZfdXJsID0gW11cbiAgICAgICAgaWYgKHRoaXMucHJvcHMudXNlcl9wcmVzY3JpcHRpb25zICYmIHRoaXMucHJvcHMudXNlcl9wcmVzY3JpcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudXNlcl9wcmVzY3JpcHRpb25zWzBdLmltZ19wYXRoX2lkcy5tYXAoKGRhdGEsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5pbWFnZS5pbmNsdWRlcygncGRmJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcGRmX3VybC5wdXNoKGRhdGEuaW1hZ2UpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW1nX3VybC5wdXNoKGRhdGEuaW1hZ2UpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2hvd191cGxvYWQgPSB0cnVlXG4gICAgICAgIGlmIChpbWdfdXJsLmxlbmd0aCA+IDAgfHwgcGRmX3VybC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzaG93X3VwbG9hZCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCB3aGl0ZS11cGxkLWRpdlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zdXJhbmNlLXByb29mcy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qICAgIHRoaXMucHJvcHMuZW5kb3JzZW1lbnRFcnJvci5pbmRleE9mKHRoaXMucHJvcHMubWVtYmVyX2lkKSAhPSAtMSAmJiBpbWdfdXJsLmxlbmd0aD09MD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnMtcHJmLWVycm9yLW1zZ1wiPipQbGVhc2UgdXBsb2FkIHRoZSByZXF1aXJlZCBkb2N1bWVudHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnKi9cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZC1hZGRidG4tY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtdXBsZC1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtc2ItZnJzdC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy92ZWN0b3J1cGwucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtdXBsb2FkLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5zLXVwbG9hZC1wYXJhLXRleHRcIj5VcGxvYWQgcHJlc2NyaXB0aW9uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwiaW5zLXVwbG9hZC1zdWItdGV4dFwiPkFhZGhhciBjYXJkLCBQYXNzcG9ydCwgRHJpdmluZyBMaWNlbnNlLCBWb3RlciBJRCBDYXJkPC9wPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5zLWZpbGUtdHlsZVwiPkZpbGUgdHlwZToganBnLCBqcGVnLCBwbmcsIHBkZiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93X3VwbG9hZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucy1wcm9vZi11cGxvYWQtYnRuXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlRmlsZVBpY2tlcicpLmNsaWNrKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWFnZUZpbGVQaWNrZXInKS52YWx1ZSA9IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pbnMtdXAtaWNvLnN2Z1wifSAvPiBVcGxvYWRcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fSBpZD1cImltYWdlRmlsZVBpY2tlclwiIG9uQ2hhbmdlPXt0aGlzLnBpY2tGaWxlLmJpbmQodGhpcyl9IGFjY2VwdD1cImltYWdlL3gtcG5nLGltYWdlL2pwZWcsaW1hZ2UvanBnLC5wZGZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzTG9hZGluZyAmJiBzaG93X3VwbG9hZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtcHJmLWltZy1ncmQgZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci1mb3ItY2hhdC1kaXYgbXQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRlci1mb3ItY2hhdCBtYi0wJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgIXNob3dfdXBsb2FkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZC1pbWctc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdfdXJsICYmIGltZ191cmwubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nX3VybC5tYXAoKGRhdGEsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJpbnMtcHJmLWltZy1ncmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGlucy11cC1pbWctaWNcIiBzcmM9e2RhdGF9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImlucy1wcmYtY2xzXCIgb25DbGljaz17dGhpcy5yZW1vdmVJbWFnZS5iaW5kKHRoaXMsIGRhdGEpfSBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vY3AvYXNzZXRzL2ltZy9pY29ucy9jbG9zZS5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZGZfdXJsICYmIHBkZl91cmwubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGRmX3VybC5tYXAoKGRhdGEsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiaW5zLXByZi1pbWctZ3JkXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGlucy11cC1pbWctaWNcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wZGYuanBnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImlucy1wcmYtY2xzXCIgb25DbGljaz17dGhpcy5yZW1vdmVJbWFnZS5iaW5kKHRoaXMsIGRhdGEpfSBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vY3AvYXNzZXRzL2ltZy9pY29ucy9jbG9zZS5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzTG9hZGluZyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtcHJmLWltZy1ncmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItZm9yLWNoYXQtZGl2IG10LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkZXItZm9yLWNoYXQgbWItMCcgc3R5bGU9e3sgd2lkdGg6ICc1MHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoaW1nX3VybCAmJiBpbWdfdXJsLmxlbmd0aCkgfHwgKHBkZl91cmwgJiYgcGRmX3VybC5sZW5ndGgpKSA+PSA1ID8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxzcGFuIGNsYXNzTmFtZT1cImlucy1wcmYtYWRkTW9yZVwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlRmlsZVBpY2tlcl9iYWNrJykuY2xpY2soKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2VGaWxlUGlja2VyX2JhY2snKS52YWx1ZSA9IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbnMtYWRkaWNvXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaW5zLWFkZC1pY28uc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBNb3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fSBpZD17J2ltYWdlRmlsZVBpY2tlcl9iYWNrJ30gb25DaGFuZ2U9e3RoaXMucGlja0ZpbGUuYmluZCh0aGlzKX0gYWNjZXB0PVwiaW1hZ2UveC1wbmcsaW1hZ2UvanBlZyxpbWFnZS9qcGcsLnBkZlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBVcGxvYWRQcmVzY3JpcHRpb24iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgZ2V0Q2FydEl0ZW1zLCBhZGRUb0NhcnQsIHNlbGVjdExhYlRpbWVTTG90LCBnZXRMYWJCeUlkLCBnZXRVc2VyUHJvZmlsZSwgc2VsZWN0TGFiQXBwb2ludG1lbnRUeXBlLCBnZXRVc2VyQWRkcmVzcywgc2VsZWN0UGlja3VwQWRkcmVzcywgY3JlYXRlTEFCQXBwb2ludG1lbnQsIHNlbmRBZ2VudEJvb2tpbmdVUkwsIHJlbW92ZUxhYkNvdXBvbnMsIGFwcGx5TGFiQ291cG9ucywgcmVzZXRMYWJDb3Vwb25zLCBnZXRDb3Vwb25zLCBhcHBseUNvdXBvbnMsIHNldENvcnBvcmF0ZUNvdXBvbiwgY3JlYXRlUHJvZmlsZSwgc2VuZE9UUCwgc3VibWl0T1RQLCBmZXRjaFRyYW5zYWN0aW9ucywgZWRpdFVzZXJQcm9maWxlLCBzYXZlUGluY29kZSwgY2xlYXJFeHRyYVRlc3RzLCBzZWxlY3RTZWFyY2hUeXBlLCBwYXRpZW50RGV0YWlscywgdXBsb2FkUHJlc2NyaXB0aW9uLCBzYXZlUHJlc2NyaXB0aW9uLCByZW1vdmVQcmVzY3JpcHRpb24sIGNsZWFyUHJlc2NyaXB0aW9ucywgcHJlQm9va2luZywgc2F2ZUF2YWlsTm93SW5zdXJhbmNlLCB0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSwgdW5TZXRDb21tb25VdG1UYWdzLCBzZW5kU1BPQWdlbnRCb29raW5nLCBzZXRDb21tb25VdG1UYWdzLCBnZXRMYWJWaXBHb2xkUGxhbnMsIHNlbGVjdFZpcENsdWJQbGFuLCBzZWxlY3RfbGFiX3BheW1lbnRfdHlwZSwgcHVzaE1lbWJlcnNEYXRhLCByZXRyaWV2ZU1lbWJlcnNEYXRhLCBjbGVhckFsbFRlc3RzLCBzZWxlY3RQcm9maWxlLCBOb25JcGRCb29raW5nTGVhZCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5cbmltcG9ydCBCb29raW5nU3VtbWFyeVZpZXdOZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kaWFnbm9zaXMvYm9va2luZ1N1bW1hcnkvaW5kZXguanMnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG5cbmNsYXNzIEJvb2tpbmdTdW1tYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICBhZ2VudF9zZWxlY3RlZF9wbGFuX2lkOm51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogKCkgPT4gbnVsbFxuICAgIH1cblxuICAgIGZldGNoRGF0YShwcm9wcyl7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHByb3BzLmxvY2F0aW9uLnNlYXJjaClcblxuICAgICAgICBsZXQgbGFiX2lkID0gcHJvcHMuc2VsZWN0ZWRMYWIgfHwgcHJvcHMubWF0Y2gucGFyYW1zLmlkIHx8IHBhcnNlZC5sYWJfaWRcblxuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgICAgICAvL0NoZWNrIGlmIHVzZXIgaXMgbG9naW4sIGlmIGxvZ2dlZCBpbiB0aGVuIGZldGNoIHVzZXIgcmVsYXRlZCBkYXRhXG4gICAgICAgICAgICBwcm9wcy5nZXRVc2VyUHJvZmlsZSgpXG4gICAgICAgICAgICBwcm9wcy5nZXRVc2VyQWRkcmVzcygpXG4gICAgICAgICAgICBwcm9wcy5mZXRjaFRyYW5zYWN0aW9ucygpXG4gICAgICAgICAgICBwcm9wcy5nZXRDYXJ0SXRlbXMoKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYocGFyc2VkLmR1bW15X2lkKSB7XG4gICAgICAgICAgICAvL0lmIGR1bW15X2lkIGlzIGF2YWlsYmxlIGluIHRoZSB1cmwsIHRoZW4gd2UgbG9nZ2VkIGluIHVzZXIgJiBwcm9jZWVkIHdpdGggc2luZ2xlIGZsb3cgam91cm5leVxuICAgICAgICAgICAgdGhpcy5zaW5nbGVGbG93TG9naW4ocHJvcHMsbGFiX2lkKVxuXG4gICAgICAgIH1lbHNlIGlmKGxhYl9pZCl7XG4gICAgICAgICAgICAvL1NlbGVjdCBhbGwgdGhlIHRlc3RzIHNlbGVjdGVkIGJ5IHRoZSB1c2VyIGluIHRoZSBwcmV2aW91cyBwYWdlICYgaGl0IGFwaSB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgICBsZXQgdGVzdElkcyA9IHByb3BzLmxhYl90ZXN0X2RhdGFbbGFiX2lkXSB8fCBbXVxuICAgICAgICAgICAgdGVzdElkcyA9IHRlc3RJZHMubWFwKHggPT4geC5pZClcbiAgICAgICAgICAgIGxldCBmb3JjZUFkZFRlc3RpZHMgPSBmYWxzZVxuICAgICAgICAgICAgaWYocGFyc2VkLnRlc3RfaWRzKSB7XG4gICAgICAgICAgICAgICAgdGVzdElkcyA9IHBhcnNlZC50ZXN0X2lkcy5zcGxpdCgnLCcpXG4gICAgICAgICAgICAgICAgZm9yY2VBZGRUZXN0aWRzID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGFQYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgYm9va2luZ19wYWdlOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9wcy5nZXRMYWJCeUlkKGxhYl9pZCwgdGVzdElkcywgZm9yY2VBZGRUZXN0aWRzLCBkYXRhUGFyYW1zKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2luZ2xlRmxvd0xvZ2luKHByb3BzLCBsYWJfaWQpe1xuICAgICAgIC8vIHRoaXMucHJvcHMuY2xlYXJBbGxUZXN0cygpXG4gICAgICAgIC8vQXV0byBTZWxlY3Qgb24gQWdlbnQgTG9naW4gVVJMXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgaWYocGFyc2VkICYmIHBhcnNlZC5kdW1teV9pZCkge1xuICAgICAgICAgICAgbGV0IGV4dHJhUGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIGR1bW15X2lkOiBwYXJzZWQuZHVtbXlfaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb3BzLnJldHJpZXZlTWVtYmVyc0RhdGEoJ1NJTkdMRV9QVVJDSEFTRScsIGV4dHJhUGFyYW1zLCAocmVzcCk9PnsgLy8gdG8gcmV0cmlldmUgYWxyZWFkeSBwdXNoZWQgbWVtYmVyIGRhdGEgaW4gY2FzZSBvZiBhZ2VudCBvciBwcm9wb3NlciBpdCBzZWxmXG4gICAgICAgICAgICAgICAgaWYocmVzcCAmJiByZXNwLmRhdGEpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldExhYkJvb2tpbmcocmVzcC5kYXRhKSBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWdlbnRfc2VsZWN0ZWRfcGxhbl9pZDpyZXNwLmRhdGEucGx1c19wbGFufSkgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGVzdElkcyA9IHByb3BzLmxhYl90ZXN0X2RhdGFbbGFiX2lkXSB8fCBbXVxuICAgICAgICAgICAgICAgICAgICB0ZXN0SWRzID0gdGVzdElkcy5tYXAoeCA9PiB4LmlkKVxuICAgICAgICAgICAgICAgICAgICBsZXQgZm9yY2VBZGRUZXN0aWRzID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgaWYocGFyc2VkLnRlc3RfaWRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXN0SWRzID0gcGFyc2VkLnRlc3RfaWRzLnNwbGl0KCcsJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlQWRkVGVzdGlkcyA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YVBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvb2tpbmdfcGFnZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmdldExhYkJ5SWQobGFiX2lkLCB0ZXN0SWRzLCBmb3JjZUFkZFRlc3RpZHMsIGRhdGFQYXJhbXMpXG4gICAgICAgICAgICAgICAgfSwxMDApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0TGFiQm9va2luZyhkYXRhKSB7XG4gICAgICAgIC8vT24gQWdlbnQvRGlyZWN0IExvZ2luLCBzZXQgZGF0YSBmb3IgdGhlIGxhYiBwYWdlLGUuZyBzZWxlY3QgdGltZXNsb3QsIHByb2ZpbGVpZCwgcGlja3VwIHR5cGUsIHRlc3RzLCBjb3Vwb25zICBcbiAgICAgICAgbGV0IHsgY291cG9uX2RhdGEgfSA9IGRhdGFcbiAgICAgICAgLy8gZm9yIChsZXQgY3Vycl90ZXN0IG9mIGRhdGEudGVzdF9pZHMpIHtcbiAgICAgICAgLy8gICAgIGxldCBjdXJyID0ge31cbiAgICAgICAgLy8gICAgIGN1cnIuaWQgPSBjdXJyX3Rlc3RcbiAgICAgICAgLy8gICAgIGN1cnIuZXh0cmFfdGVzdCA9IHRydWVcbiAgICAgICAgLy8gICAgIGN1cnIubGFiX2lkID0gZGF0YS5sYWJJZFxuICAgICAgICAvLyAgICAgdGhpcy5wcm9wcy50b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSgndGVzdCcsIGN1cnIsIHRydWUpXG4gICAgICAgIC8vIH1cblxuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLnBpbmNvZGUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2F2ZVBpbmNvZGUoZGF0YS5waW5jb2RlKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RQcm9maWxlKGRhdGEucHJvZmlsZSlcbiAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RfbGFiX3BheW1lbnRfdHlwZShkYXRhLnBheW1lbnRfdHlwZSlcbiAgICAgICAgXG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWN0TGFiVGltZVNMb3QoZGF0YS5zZWxlY3RlZFNsb3QsIGZhbHNlLCBudWxsKVxuXG4gICAgICAgIGlmIChjb3Vwb25fZGF0YS5jb3Vwb25fY29kZSkge1xuICAgICAgICAgICAgbGV0IGNvdXBvbl9pZCA9ICcnXG4gICAgICAgICAgICBsZXQgaXNfY2FzaGJhY2sgPSBmYWxzZVxuICAgIFxuICAgICAgICAgICAgaWYgKGNvdXBvbl9jb2RlICYmIE9iamVjdC5rZXlzKGNvdXBvbl9jb2RlKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb3Vwb25faWQgPSBjb3Vwb25fY29kZS5pZFxuICAgICAgICAgICAgICAgIGlzX2Nhc2hiYWNrID0gY291cG9uX2NvZGUuaXNfY2FzaGJhY2tcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3Vwb25fY29kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwbHlDb3Vwb25zKCcyJywgeyBjb2RlOiBjb3Vwb25fZGF0YS5jb3Vwb25fY29kZSwgY291cG9uX2lkOiBjb3Vwb25faWQsIGlzX2Nhc2hiYWNrOiBpc19jYXNoYmFjayB9LCBjb3Vwb25faWQsIGRhdGEubGFiSWQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcyl7XG4gICAgICAgIGlmKHByb3BzLnNlbGVjdGVkTGFiICE9IHRoaXMucHJvcHMuc2VsZWN0ZWRMYWIpe1xuICAgICAgICAgICAgdGhpcy5mZXRjaERhdGEocHJvcHMpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5mZXRjaERhdGEodGhpcy5wcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBsYWJfaWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkTGFiIHx8IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkIHx8IHBhcnNlZC5sYWJfaWRcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJvb2tpbmdTdW1tYXJ5Vmlld05ldyB7Li4udGhpcy5wcm9wc30gc2VsZWN0ZWRMYWI9e2xhYl9pZH0gYWdlbnRfc2VsZWN0ZWRfcGxhbl9pZD17dGhpcy5zdGF0ZS5hZ2VudF9zZWxlY3RlZF9wbGFuX2lkfSBmZXRjaERhdGE9e3RoaXMuZmV0Y2hEYXRhLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuXG4gICAgY29uc3Qge1xuICAgICAgICBzZWxlY3RlZENyaXRlcmlhcyxcbiAgICAgICAgbGFiX3Rlc3RfZGF0YSxcbiAgICAgICAgY29ycG9yYXRlQ291cG9uLFxuICAgICAgICBwaW5jb2RlLFxuICAgICAgICBzYXZlZF9wYXRpZW50X2RldGFpbHMsXG4gICAgICAgIHNlbGVjdGVkTG9jYXRpb25cbiAgICB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX0xBQlNcbiAgICBjb25zdCB7IHNlbGVjdGVkUHJvZmlsZSwgcHJvZmlsZXMsIGFkZHJlc3MsIHVzZXJXYWxsZXRCYWxhbmNlLCB1c2VyQ2FzaGJhY2tCYWxhbmNlLCBpc1VzZXJDYXJlZCwgZGVmYXVsdFByb2ZpbGUsIGlwZF9jaGF0LCBjb21tb25fdXRtX3RhZ3MsIGlzX2FueV91c2VyX2J1eV9nb2xkLCB1c2VyX2xvZ2dlZEluX251bWJlciB9ID0gc3RhdGUuVVNFUlxuICAgIGxldCBMQUJTID0gc3RhdGUuTEFCU1xuICAgIGxldCB7IHNlbGVjdGVkU2xvdCwgc2VsZWN0ZWRBcHBvaW50bWVudFR5cGUsIHNlbGVjdGVkQWRkcmVzcywgbGFiQ291cG9ucywgZGlzQ291bnRlZExhYlByaWNlLCBjb3Vwb25BdXRvQXBwbHksIHVzZXJfcHJlc2NyaXB0aW9ucywgaXNfcHJlc2NyaXB0aW9uX25lZWRlZCwgc2VsZWN0ZWREYXRlRm9ybWF0LCBzaG93X3ZpcF9ub25fbG9naW5fY2FyZCAsIHBheW1lbnRfdHlwZX0gPSBzdGF0ZS5MQUJfU0VBUkNIXG4gICAgY29uc3QgeyBsYWJHb2xkUHJlZGljdGVkUHJpY2UsIHNlbGVjdGVkX3ZpcF9wbGFuLHNob3dfbGFiX3BheW1lbnRfbW9kZSB9ID0gIHN0YXRlLlZJUENMVUJcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29ycG9yYXRlQ291cG9uLFxuICAgICAgICBzZWxlY3RlZENyaXRlcmlhcyxcbiAgICAgICAgbGFiX3Rlc3RfZGF0YSxcbiAgICAgICAgTEFCUyxcbiAgICAgICAgc2VsZWN0ZWRQcm9maWxlLCBwcm9maWxlcywgc2VsZWN0ZWRTbG90LCBzZWxlY3RlZEFwcG9pbnRtZW50VHlwZSwgYWRkcmVzcywgc2VsZWN0ZWRBZGRyZXNzLCBsYWJDb3Vwb25zLCBkaXNDb3VudGVkTGFiUHJpY2UsXG4gICAgICAgIGNvdXBvbkF1dG9BcHBseSwgdXNlcldhbGxldEJhbGFuY2UsIHVzZXJDYXNoYmFja0JhbGFuY2UsIHBpbmNvZGUsIGlzVXNlckNhcmVkLCBkZWZhdWx0UHJvZmlsZSwgc2F2ZWRfcGF0aWVudF9kZXRhaWxzLCB1c2VyX3ByZXNjcmlwdGlvbnMsIGlwZF9jaGF0LCBpc19wcmVzY3JpcHRpb25fbmVlZGVkLCBzZWxlY3RlZERhdGVGb3JtYXQsIHNlbGVjdGVkTG9jYXRpb24sIGNvbW1vbl91dG1fdGFncywgc2hvd192aXBfbm9uX2xvZ2luX2NhcmQsXG4gICAgICAgIGlzX2FueV91c2VyX2J1eV9nb2xkLCBsYWJHb2xkUHJlZGljdGVkUHJpY2UsIHNlbGVjdGVkX3ZpcF9wbGFuLCBwYXltZW50X3R5cGUsIHNob3dfbGFiX3BheW1lbnRfbW9kZSwgdXNlcl9sb2dnZWRJbl9udW1iZXJcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdExhYlRpbWVTTG90OiAoc2xvdCwgcmVzY2hlZHVsZSwgZGF0ZVBhcmFtKSA9PiBkaXNwYXRjaChzZWxlY3RMYWJUaW1lU0xvdChzbG90LCByZXNjaGVkdWxlLCBkYXRlUGFyYW0pKSxcbiAgICAgICAgZ2V0VXNlclByb2ZpbGU6ICgpID0+IGRpc3BhdGNoKGdldFVzZXJQcm9maWxlKCkpLFxuICAgICAgICBnZXRMYWJCeUlkOiAobGFiSWQsIHRlc3RJZHMsIGZvcmNlQWRkVGVzdGlkcywgZGF0YVBhcmFtcykgPT4gZGlzcGF0Y2goZ2V0TGFiQnlJZChsYWJJZCwgdGVzdElkcywgZm9yY2VBZGRUZXN0aWRzLCBkYXRhUGFyYW1zKSksXG4gICAgICAgIHNlbGVjdExhYkFwcG9pbnRtZW50VHlwZTogKHR5cGUpID0+IGRpc3BhdGNoKHNlbGVjdExhYkFwcG9pbnRtZW50VHlwZSh0eXBlKSksXG4gICAgICAgIGdldFVzZXJBZGRyZXNzOiAoKSA9PiBkaXNwYXRjaChnZXRVc2VyQWRkcmVzcygpKSxcbiAgICAgICAgc2VsZWN0UGlja3VwQWRkcmVzczogKGFkZHJlc3MpID0+IGRpc3BhdGNoKHNlbGVjdFBpY2t1cEFkZHJlc3MoYWRkcmVzcykpLFxuICAgICAgICBjcmVhdGVMQUJBcHBvaW50bWVudDogKHBvc3REYXRhLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2goY3JlYXRlTEFCQXBwb2ludG1lbnQocG9zdERhdGEsIGNhbGxiYWNrKSksXG4gICAgICAgIHNlbmRBZ2VudEJvb2tpbmdVUkw6IChvcmRlcklkLCB0eXBlLCBwdXJjaGFzZV90eXBlLHF1ZXJ5X2RhdGEsZXh0cmFQYXJhbXMsIGNiKSA9PiBkaXNwYXRjaChzZW5kQWdlbnRCb29raW5nVVJMKG9yZGVySWQsIHR5cGUscHVyY2hhc2VfdHlwZSxxdWVyeV9kYXRhLCBleHRyYVBhcmFtcywgY2IpKSxcbiAgICAgICAgcmVtb3ZlTGFiQ291cG9uczogKGxhYklkLCBjb3Vwb25JZCkgPT4gZGlzcGF0Y2gocmVtb3ZlTGFiQ291cG9ucyhsYWJJZCwgY291cG9uSWQpKSxcbiAgICAgICAgYXBwbHlMYWJDb3Vwb25zOiAocHJvZHVjdElkLCBjb3Vwb25Db2RlLCBjb3Vwb25JZCwgbGFiSWQsIGRlYWxQcmljZSwgdGVzdF9pZHMsIHByb2ZpbGVfaWQsIGNhcnRfaXRlbSwgY2FsbGJhY2spID0+IGRpc3BhdGNoKGFwcGx5TGFiQ291cG9ucyhwcm9kdWN0SWQsIGNvdXBvbkNvZGUsIGNvdXBvbklkLCBsYWJJZCwgZGVhbFByaWNlLCB0ZXN0X2lkcywgcHJvZmlsZV9pZCwgY2FydF9pdGVtLCBjYWxsYmFjaykpLFxuICAgICAgICByZXNldExhYkNvdXBvbnM6ICgpID0+IGRpc3BhdGNoKHJlc2V0TGFiQ291cG9ucygpKSxcbiAgICAgICAgZ2V0Q291cG9uczogKGRhdGEpID0+IGRpc3BhdGNoKGdldENvdXBvbnMoZGF0YSkpLFxuICAgICAgICBhcHBseUNvdXBvbnM6IChwcm9kdWN0SWQsIGNvdXBvbkRhdGEsIGNvdXBvbklkLCBsYWJJZCwgY2FsbGJhY2spID0+IGRpc3BhdGNoKGFwcGx5Q291cG9ucyhwcm9kdWN0SWQsIGNvdXBvbkRhdGEsIGNvdXBvbklkLCBsYWJJZCwgY2FsbGJhY2spKSxcbiAgICAgICAgc2V0Q29ycG9yYXRlQ291cG9uOiAoY291cG9uKSA9PiBkaXNwYXRjaChzZXRDb3Jwb3JhdGVDb3Vwb24oY291cG9uKSksXG4gICAgICAgIGNyZWF0ZVByb2ZpbGU6IChwb3N0RGF0YSwgY2IpID0+IGRpc3BhdGNoKGNyZWF0ZVByb2ZpbGUocG9zdERhdGEsIGNiKSksXG4gICAgICAgIHNlbmRPVFA6IChudW1iZXIsdmlhU21zLHZpYVdoYXRzYXBwLG1lc3NhZ2VfdHlwZSwgY2IpID0+IGRpc3BhdGNoKHNlbmRPVFAobnVtYmVyLHZpYVNtcyx2aWFXaGF0c2FwcCxtZXNzYWdlX3R5cGUsIGNiKSksXG4gICAgICAgIHN1Ym1pdE9UUDogKG51bWJlciwgb3RwLCBleHRyYVBhcmFtc0RhdGEsIGNiKSA9PiBkaXNwYXRjaChzdWJtaXRPVFAobnVtYmVyLCBvdHAsZXh0cmFQYXJhbXNEYXRhLCAgY2IpKSxcbiAgICAgICAgZmV0Y2hUcmFuc2FjdGlvbnM6ICgpID0+IGRpc3BhdGNoKGZldGNoVHJhbnNhY3Rpb25zKCkpLFxuICAgICAgICBzYXZlUGluY29kZTogKHBpbmNvZGUpID0+IGRpc3BhdGNoKHNhdmVQaW5jb2RlKHBpbmNvZGUpKSxcbiAgICAgICAgYWRkVG9DYXJ0OiAocHJvZHVjdF9pZCwgZGF0YSkgPT4gZGlzcGF0Y2goYWRkVG9DYXJ0KHByb2R1Y3RfaWQsIGRhdGEpKSxcbiAgICAgICAgZ2V0Q2FydEl0ZW1zOiAoKSA9PiBkaXNwYXRjaChnZXRDYXJ0SXRlbXMoKSksXG4gICAgICAgIGVkaXRVc2VyUHJvZmlsZTogKHByb2ZpbGVEYXRhLCBwcm9maWxlSWQsIGNiKSA9PiBkaXNwYXRjaChlZGl0VXNlclByb2ZpbGUocHJvZmlsZURhdGEsIHByb2ZpbGVJZCwgY2IpKSxcbiAgICAgICAgY2xlYXJFeHRyYVRlc3RzOiAoKSA9PiBkaXNwYXRjaChjbGVhckV4dHJhVGVzdHMoKSksXG4gICAgICAgIHNlbGVjdFNlYXJjaFR5cGU6ICh0eXBlKSA9PiBkaXNwYXRjaChzZWxlY3RTZWFyY2hUeXBlKHR5cGUpKSxcbiAgICAgICAgcGF0aWVudERldGFpbHM6KGNyaXRlcmlhKSA9PiBkaXNwYXRjaChwYXRpZW50RGV0YWlscyhjcml0ZXJpYSkpLFxuICAgICAgICB1cGxvYWRQcmVzY3JpcHRpb246KHByb2ZpbGVEYXRhLGNiKSA9PmRpc3BhdGNoKHVwbG9hZFByZXNjcmlwdGlvbihwcm9maWxlRGF0YSxjYikpLFxuICAgICAgICBzYXZlUHJlc2NyaXB0aW9uOihpbWdVcmwsY2IpPT5kaXNwYXRjaChzYXZlUHJlc2NyaXB0aW9uKGltZ1VybCxjYikpLFxuICAgICAgICByZW1vdmVQcmVzY3JpcHRpb246KGNyaXRlcmlhKT0+ZGlzcGF0Y2gocmVtb3ZlUHJlc2NyaXB0aW9uKGNyaXRlcmlhKSksXG4gICAgICAgIGNsZWFyUHJlc2NyaXB0aW9uczooKT0+ZGlzcGF0Y2goY2xlYXJQcmVzY3JpcHRpb25zKCkpLFxuICAgICAgICBwcmVCb29raW5nOihzbG90KSA9PiBkaXNwYXRjaChwcmVCb29raW5nKHNsb3QpKSxcbiAgICAgICAgc2F2ZUF2YWlsTm93SW5zdXJhbmNlOihkYXRhKSA9PiBkaXNwYXRjaChzYXZlQXZhaWxOb3dJbnN1cmFuY2UoZGF0YSkpLFxuICAgICAgICB1blNldENvbW1vblV0bVRhZ3M6ICh0eXBlLCB0YWcpPT4gZGlzcGF0Y2godW5TZXRDb21tb25VdG1UYWdzKHR5cGUsIHRhZykpLFxuICAgICAgICBzZW5kU1BPQWdlbnRCb29raW5nOiAocG9zdERhdGEsIGNiKSA9PiBkaXNwYXRjaChzZW5kU1BPQWdlbnRCb29raW5nKHBvc3REYXRhLCBjYikpLFxuICAgICAgICBzZXRDb21tb25VdG1UYWdzOiAodHlwZSwgdGFnKSA9PiBkaXNwYXRjaChzZXRDb21tb25VdG1UYWdzKHR5cGUsIHRhZykpLFxuICAgICAgICB0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYTogKHR5cGUsIGNyaXRlcmlhKSA9PiBkaXNwYXRjaCh0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSh0eXBlLCBjcml0ZXJpYSkpLFxuICAgICAgICBnZXRMYWJWaXBHb2xkUGxhbnM6IChkYXRhUGFyYW1zLCBjYikgPT4gZGlzcGF0Y2goZ2V0TGFiVmlwR29sZFBsYW5zKGRhdGFQYXJhbXMsIGNiKSksXG4gICAgICAgIHNlbGVjdFZpcENsdWJQbGFuOiAodHlwZSwgc2VsZWN0ZWRQbGFuLCBjYikgPT4gZGlzcGF0Y2goc2VsZWN0VmlwQ2x1YlBsYW4odHlwZSwgc2VsZWN0ZWRQbGFuLCBjYikpLFxuICAgICAgICBzZWxlY3RfbGFiX3BheW1lbnRfdHlwZTogKHR5cGUpID0+IGRpc3BhdGNoKHNlbGVjdF9sYWJfcGF5bWVudF90eXBlKHR5cGUpKSxcbiAgICAgICAgcHVzaE1lbWJlcnNEYXRhOihjcml0ZXJpYSwgY2IpID0+ZGlzcGF0Y2gocHVzaE1lbWJlcnNEYXRhKGNyaXRlcmlhLCBjYikpLFxuICAgICAgICByZXRyaWV2ZU1lbWJlcnNEYXRhOih0eXBlLGV4dHJhUGFyYW1zLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2gocmV0cmlldmVNZW1iZXJzRGF0YSh0eXBlLCBleHRyYVBhcmFtcywgY2FsbGJhY2spKSxcbiAgICAgICAgY2xlYXJBbGxUZXN0czogKCkgPT4gZGlzcGF0Y2goY2xlYXJBbGxUZXN0cygpKSxcbiAgICAgICAgc2VsZWN0UHJvZmlsZTogKGlkKSA9PiBkaXNwYXRjaChzZWxlY3RQcm9maWxlKGlkKSksXG4gICAgICAgIE5vbklwZEJvb2tpbmdMZWFkOihkYXRhLGNiKSA9PmRpc3BhdGNoKE5vbklwZEJvb2tpbmdMZWFkKGRhdGEsIGNiKSksXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShCb29raW5nU3VtbWFyeSk7XG4iXSwic291cmNlUm9vdCI6IiJ9