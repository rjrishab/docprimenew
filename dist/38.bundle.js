(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

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

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var BookingSummaryViewNew = function (_React$Component) {
    _inherits(BookingSummaryViewNew, _React$Component);

    function BookingSummaryViewNew(props) {
        _classCallCheck(this, BookingSummaryViewNew);

        var _this = _possibleConstructorReturn(this, (BookingSummaryViewNew.__proto__ || Object.getPrototypeOf(BookingSummaryViewNew)).call(this, props));

        _this.closeErrorPopup = function () {
            _this.setState({ error: '' });
        };

        _this.toggleGoldPlans = function (plan) {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'ToggleLabGoldPlanClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'toggle-lab-gold-plan-clicked', 'plan': plan.id
            };

            _gtm2.default.sendEvent({ data: data });
            _this.props.selectVipClubPlan('plan', plan); // toggle/select vip plan
            _this.toggleGoldPricePopup();
        };

        _this.toggleGoldPricePopup = function () {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var data = {
                'Category': 'ConsumerApp', 'Action': 'ChangePlanLabClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'change-plan-lab-clicked'
            };

            _gtm2.default.sendEvent({ data: data });
            _this.setState({ showGoldPriceList: value });
        };

        _this.goToGoldPage = function () {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'GoToGoldPlanClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'go-to-gold-plan-clicked'
            };

            _gtm2.default.sendEvent({ data: data });
            _this.props.history.push('/vip-gold-details?is_gold=true&source=mobile-lab-summary-gold-clicked&lead_source=Docprime&booking_page=lab');
        };

        _this.getDataAfterLogin = function () {
            _this.props.fetchData(_this.props);
            if (_this.props.labGoldPredictedPrice && _this.props.labGoldPredictedPrice.length) {
                var selectedPackage = _this.props.labGoldPredictedPrice.filter(function (x) {
                    return x.id == _this.state.selectedVipGoldPackageId;
                });
                if (selectedPackage && selectedPackage.length == 0) {
                    selectedPackage = _this.props.labGoldPredictedPrice.filter(function (x) {
                        return x.is_selected;
                    });
                }
                if (selectedPackage && selectedPackage.length) {
                    _this.props.selectVipClubPlan('plan', selectedPackage[0]);
                }
            }
        };

        var parsed = queryString.parse(_this.props.location.search);
        var lab_id = _this.props.selectedLab;

        _this.state = {
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
            pincode: _this.props.pincode,
            whatsapp_optin: true,
            pincodeMismatchError: false,
            showConfirmationPopup: 'close',
            coupon_loading: false,
            seoFriendly: _this.props.match.url.includes('-lpp'),
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
            selectedVipGoldPackageId: _this.props.selected_vip_plan && Object.keys(_this.props.selected_vip_plan).length ? _this.props.selected_vip_plan.id : '',
            paymentBtnClicked: false,
            enableDropOfflead: true,
            disable_page: true,
            is_lead_enabled: true
        };
        return _this;
    }

    _createClass(BookingSummaryViewNew, [{
        key: 'toggle',
        value: function toggle(which) {
            this.setState(_defineProperty({}, which, !this.state[which]));
        }
    }, {
        key: 'toggleWalletUse',
        value: function toggleWalletUse(e) {
            if (this.state.is_payment_coupon_applied) {
                this.setState({ use_wallet: false });
            } else {
                this.setState({ use_wallet: e.target.checked });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            /*
                    if (!STORAGE.checkAuth()) {
                        return
                    }*/

            if (window) {
                window.scrollTo(0, 0);
            }
            var parsed = queryString.parse(this.props.location.search);
            if (this.props.location.search.includes("error_code")) {
                setTimeout(function () {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Could not complete payment, Try again!" });
                }, 500);
                this.props.history.replace(this.props.location.pathname);
            }
            this.getVipGoldPriceList(this.props);
            if (this.props.selected_vip_plan && this.props.selected_vip_plan.id && this.props.selected_vip_plan.id != this.state.selectedVipGoldPackageId) {
                this.setState({ selectedVipGoldPackageId: this.props.selected_vip_plan.id });
            }

            var patient = null;
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
                    var sessionId = Math.floor(Math.random() * 103) * 21 + 1050;
                    if (sessionStorage) {
                        sessionStorage.setItem('sessionIdVal', sessionId);
                    }
                    var spo_tags = {
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
            var currentTime = new Date().getTime();
            if (sessionStorage && sessionStorage.getItem('sessionIdVal') && this.props.common_utm_tags && this.props.common_utm_tags.length && this.props.common_utm_tags.filter(function (x) {
                return x.type == 'spo';
            }).length) {

                var _spo_tags = this.props.common_utm_tags.filter(function (x) {
                    return x.type == 'spo';
                })[0];
                var sessionVal = parseInt(sessionStorage.getItem('sessionIdVal'));
                if (_spo_tags.time && sessionVal == parseInt(_spo_tags.currentSessionId)) {
                    var time_offset = (currentTime - _spo_tags.time) / 60000;
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
                setTimeout(function () {
                    if (document.getElementById('confirm_booking')) {
                        document.getElementById('confirm_booking').click();
                    }
                }, 3000);
            }
        }
    }, {
        key: 'getVipGoldPriceList',
        value: function getVipGoldPriceList(props) {
            var parsed = queryString.parse(this.props.location.search);
            var test_ids = [];
            if (props.LABS[props.selectedLab] && props.LABS[props.selectedLab].tests) {
                test_ids = props.LABS[props.selectedLab].tests.map(function (x) {
                    return x.test_id;
                });
            }
            this.setState({ selectedTestIds: test_ids });
            var extraParams = {
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
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            if (_storage2.default.checkAuth()) {
                this.setState({ disable_page: false });
            }
            var isPickupStatusSame = false;
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

                var newTestsAdded = false;
                nextProps.LABS[nextProps.selectedLab].tests.map(function (test) {

                    if (_this2.state.selectedTestIds.indexOf(test.test_id) == -1) {
                        newTestsAdded = true;
                    }
                });

                if (newTestsAdded || this.state.selectedTestIds.length != nextProps.LABS[this.props.selectedLab].tests.length) {
                    this.getVipGoldPriceList(nextProps);
                }

                //If after selecting time, user add more tests then for pathology test we have to force add the pathology timings 
                if (nextProps.selectedSlot && nextProps.selectedSlot.selectedTestsTimeSlot && Object.keys(nextProps.selectedSlot.selectedTestsTimeSlot).length && nextProps.LABS[this.props.selectedLab].tests.length) {

                    var commonTestId = nextProps.selectedSlot['pathology'] ? nextProps.selectedSlot['pathology'].test_id : nextProps.selectedSlot['all'] ? nextProps.selectedSlot['all'].test_id : null;

                    var newTests = [];
                    nextProps.LABS[this.props.selectedLab].tests.map(function (test) {

                        if (test.is_pathology) {
                            if (nextProps.selectedSlot.selectedTestsTimeSlot[test.test_id]) {} else if (test.is_pathology) {
                                newTests.push(test);
                            }
                        }
                    });

                    if (commonTestId && newTests.length) {

                        var finalSelectedSlot = _extends({}, nextProps.selectedSlot);
                        var testsObj = _extends({}, finalSelectedSlot.selectedTestsTimeSlot);
                        if (newTests.length) {
                            newTests.map(function (x) {
                                testsObj[x.test.id] = _extends({}, testsObj[commonTestId], { test_id: x.test.id, test_name: x.test.name });
                            });
                            finalSelectedSlot['selectedTestsTimeSlot'] = testsObj;
                            this.props.selectLabTimeSLot(finalSelectedSlot);
                        }
                    }
                }

                // remove corporate coupon if tests are not valid
                if (nextProps.corporateCoupon) {
                    var corporate = true;
                    nextProps.LABS[this.props.selectedLab].tests.map(function (twp, i) {
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
                        var _getLabPriceData = this.getLabPriceData(nextProps),
                            finalPrice = _getLabPriceData.finalPrice,
                            test_ids = _getLabPriceData.test_ids;

                        var labCoupon = nextProps.corporateCoupon;
                        this.setState({ is_cashback: labCoupon.is_cashback, couponCode: labCoupon.code, couponId: labCoupon.coupon_id || '', pay_btn_loading: true });
                        this.props.applyCoupons('2', labCoupon, labCoupon.coupon_id, this.props.selectedLab, function (success) {});

                        var _getSelectedUserData = this.getSelectedUserData(this.props),
                            total_amount_payable_without_coupon = _getSelectedUserData.total_amount_payable_without_coupon;

                        if (total_amount_payable_without_coupon != null) {
                            finalPrice = total_amount_payable_without_coupon;
                        }
                        this.props.applyLabCoupons('2', labCoupon.code, labCoupon.coupon_id, this.props.selectedLab, finalPrice, test_ids, nextProps.selectedProfile, this.state.cart_item, function (err, data) {
                            _this2.setState({ 'pay_btn_loading': false });
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
                        var _getLabPriceData2 = this.getLabPriceData(nextProps),
                            _finalPrice = _getLabPriceData2.finalPrice,
                            _test_ids = _getLabPriceData2.test_ids;

                        var labCoupons = nextProps.labCoupons[this.props.selectedLab];
                        this.setState({ 'pay_btn_loading': true });

                        var _getSelectedUserData2 = this.getSelectedUserData(this.props),
                            _total_amount_payable_without_coupon = _getSelectedUserData2.total_amount_payable_without_coupon;

                        if (_total_amount_payable_without_coupon != null) {
                            _finalPrice = _total_amount_payable_without_coupon;
                        }
                        this.props.applyLabCoupons('2', labCoupons[0].code, labCoupons[0].coupon_id, this.props.selectedLab, _finalPrice, _test_ids, nextProps.selectedProfile, this.state.cart_item, function (err, data) {
                            if (!err) {
                                _this2.setState({ is_cashback: labCoupons[0].is_cashback, couponCode: labCoupons[0].code, couponId: labCoupons[0].coupon_id || '' });
                                if (labCoupons[0].is_payment_specific) {
                                    _this2.setState({ use_wallet: false, is_payment_coupon_applied: true });
                                }
                            } else {
                                _this2.setState({ coupon_loading: true });
                                _this2.getAndApplyBestCoupons(nextProps, false);
                            }
                            _this2.setState({ 'pay_btn_loading': false });
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
    }, {
        key: 'getValidCoupon',
        value: function getValidCoupon(coupons) {
            var validCoupon = null;
            for (var index in coupons) {
                if (coupons[index].valid) {
                    validCoupon = coupons[index];
                    break;
                }
            }
            return validCoupon;
        }
    }, {
        key: 'getAndApplyBestCoupons',
        value: function getAndApplyBestCoupons(nextProps, isLensfit) {
            var _this3 = this;

            // if (nextProps.couponAutoApply) {
            var _getLabPriceData3 = this.getLabPriceData(nextProps),
                finalPrice = _getLabPriceData3.finalPrice,
                test_ids = _getLabPriceData3.test_ids;

            var validCoupon = void 0;
            this.props.getCoupons({
                productId: 2, deal_price: finalPrice, lab_id: this.props.selectedLab, test_ids: test_ids, profile_id: nextProps.selectedProfile, cart_item: this.state.cart_item,
                cb: function cb(coupons) {
                    if (coupons) {
                        if (isLensfit) {
                            var lensFitProps = _extends({}, nextProps);
                            delete lensFitProps.finalPrice;
                            delete lensFitProps.test_ids;
                            delete lensFitProps.LABS;
                            validCoupon = lensFitProps;
                        } else {
                            validCoupon = _this3.getValidCoupon(coupons);
                        }
                        if (validCoupon) {
                            _this3.setState({ 'pay_btn_loading': true });
                            _this3.props.applyCoupons('2', validCoupon, validCoupon.coupon_id, _this3.props.selectedLab, function (success) {
                                _this3.setState({ 'pay_btn_loading': false });
                            });

                            var _getSelectedUserData3 = _this3.getSelectedUserData(nextProps),
                                total_amount_payable_without_coupon = _getSelectedUserData3.total_amount_payable_without_coupon;

                            if (total_amount_payable_without_coupon != null) {
                                finalPrice = total_amount_payable_without_coupon;
                            }
                            _this3.props.applyLabCoupons('2', validCoupon.code, validCoupon.coupon_id, _this3.props.selectedLab, finalPrice, test_ids, _this3.props.selectedProfile, _this3.state.cart_item, function (err, data) {
                                _this3.setState({ 'pay_btn_loading': false });
                            });
                            if (isLensfit) {
                                _this3.setState({ show_lensfit_popup: false });
                            }
                            _this3.setState({ is_cashback: validCoupon.is_cashback, couponCode: validCoupon.code, couponId: validCoupon.coupon_id || '' });
                            if (validCoupon.is_payment_specific) {
                                _this3.setState({ use_wallet: false, is_payment_coupon_applied: true });
                            }
                        } else {
                            if (isLensfit) {
                                _this3.setState({ show_lensfit_popup: false });
                            }
                            _this3.props.resetLabCoupons();
                            _this3.setState({ couponCode: "", couponId: '', is_cashback: false, use_wallet: true, is_payment_coupon_applied: false, 'pay_btn_loading': false });
                        }
                    } else {
                        if (isLensfit) {
                            _this3.setState({ show_lensfit_popup: false });
                        }
                        _this3.props.resetLabCoupons();
                        _this3.setState({ couponCode: "", couponId: '', is_cashback: false, use_wallet: true, is_payment_coupon_applied: false, 'pay_btn_loading': false });
                    }
                    _this3.setState({ coupon_loading: false });
                }
            });
            // } else {
            //     this.setState({ coupon_loading: false })
            // }
        }
    }, {
        key: 'getLabPriceData',
        value: function getLabPriceData(nextProps) {
            var is_home_collection_enabled = true;
            var finalPrice = 0;
            var test_ids = [];

            nextProps.LABS[this.props.selectedLab].tests.map(function (twp, i) {
                test_ids.push(twp.test_id);
                var price = null;
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

            return { finalPrice: finalPrice, test_ids: test_ids };
        }
    }, {
        key: 'openTests',
        value: function openTests() {
            if (this.state.seoFriendly) {
                var url = window.location.pathname + '?lab_id=' + this.props.selectedLab + '&action_page=tests';
                this.props.history.push(url);
            } else {
                this.props.history.push('/lab/' + this.state.selectedLab + '/tests');
            }
        }
    }, {
        key: 'handlePickupType',
        value: function handlePickupType(type) {
            //always clear selected time at lab profile
            var slot = { time: {} };
            this.props.selectLabTimeSLot(slot, false);
            this.props.selectLabAppointmentType(type);
            this.setState({ showTimeError: false, showAddressError: false });
        }
    }, {
        key: 'navigateTo',
        value: function navigateTo(where, is_insurance_applicable) {
            var selectTimeError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            switch (where) {
                case "time":
                    {
                        //Get Test ids of all selected Tests
                        var test_ids = this.props.LABS[this.props.selectedLab].tests.map(function (x) {
                            return x.test_id;
                        });

                        if (this.state.pincode || this.props.LABS[this.props.selectedLab] && this.props.LABS[this.props.selectedLab].lab && !this.props.LABS[this.props.selectedLab].lab.is_thyrocare) {

                            var r_pickup = this.props.selectedAppointmentType.r_pickup;
                            var p_pickup = this.props.selectedAppointmentType.p_pickup;
                            if (this.props.LABS[this.props.selectedLab].lab.is_thyrocare) {
                                if (this.state.seoFriendly) {
                                    var url = window.location.pathname + '?lab_id=' + this.props.selectedLab + '&type=lab&goback=true&is_thyrocare=true&action_page=timings&is_insurance=' + is_insurance_applicable + '&test_ids=' + test_ids + '&r_pickup=' + r_pickup + '&p_pickup=' + p_pickup + '&selectedType=' + (selectTimeError ? 'seperately' : 'all');
                                    this.props.history.push(url);
                                } else {
                                    this.props.history.push('/lab/' + this.props.selectedLab + '/timeslots?type=lab&goback=true&is_thyrocare=true&is_insurance=' + is_insurance_applicable + '&test_ids=' + test_ids + '&r_pickup=' + r_pickup + '&p_pickup=' + p_pickup + '&selectedType=' + (selectTimeError ? 'seperately' : 'all'));
                                }
                            } else {
                                if (this.state.seoFriendly) {
                                    var _url = window.location.pathname + '?lab_id=' + this.props.selectedLab + '&type=lab&goback=true&is_thyrocare=false&action_page=timings&is_insurance=' + is_insurance_applicable + '&test_ids=' + test_ids + '&r_pickup=' + r_pickup + '&p_pickup=' + p_pickup + '&selectedType=' + (selectTimeError ? 'seperately' : 'all');
                                    this.props.history.push(_url);
                                } else {
                                    this.props.history.push('/lab/' + this.props.selectedLab + '/timeslots?type=lab&goback=true&is_thyrocare=false&is_insurance=' + is_insurance_applicable + '&test_ids=' + test_ids + '&r_pickup=' + r_pickup + '&p_pickup=' + p_pickup + '&selectedType=' + (selectTimeError ? 'seperately' : 'all'));
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
                        this.props.history.push('/user/family?pick=true&lab_id=' + this.props.selectedLab + '&is_insurance=' + is_insurance_applicable);
                        return;
                    }

                case "address":
                    {
                        if (this.props.address && this.props.address.length) {
                            this.props.history.push('/user/address?pick=true');
                        } else {
                            this.props.history.push('/user/address/add');
                        }
                        return;
                    }
            }
        }
    }, {
        key: 'getPatientDetails',
        value: function getPatientDetails(is_insurance_applicable, center_visit_enabled, is_home_charges_applicable) {
            var patient = null;
            if (this.props.profiles[this.props.selectedProfile] && !this.props.profiles[this.props.selectedProfile].isDummyUser) {
                patient = this.props.profiles[this.props.selectedProfile];
            }
            return _react2.default.createElement(_choosePatientNew2.default, _extends({ is_corporate: !!this.props.corporateCoupon, patient: patient, navigateTo: this.navigateTo.bind(this), profileDataCompleted: this.profileDataCompleted.bind(this) }, this.props, { is_lab: true, clearTestForInsured: this.clearTestForInsured.bind(this), is_insurance_applicable: is_insurance_applicable, checkPrescription: this.checkPrescription.bind(this), isEmailNotValid: this.state.isEmailNotValid, getDataAfterLogin: this.getDataAfterLogin, nonIpdLeads: this.nonIpdLeads.bind(this) }));
        }
    }, {
        key: 'getSelectors',
        value: function getSelectors(is_insurance_applicable, center_visit_enabled, is_home_charges_applicable) {
            var patient = null;
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
    }, {
        key: 'profileDataCompleted',
        value: function profileDataCompleted(data) {
            if (data.name == '' || data.gender == '' || data.phoneNumber == '' || data.email == '' || !data.otpVerifySuccess || data.dob == '' || data.dob == null) {
                this.props.patientDetails(data);
                this.setState({ profileDataFilled: false });
            } else if (data.otpVerifySuccess) {
                var clear_data = {};
                this.props.patientDetails(clear_data);
                this.setState({ profileDataFilled: true });
            }
        }
    }, {
        key: 'checkPrescription',
        value: function checkPrescription() {
            var is_insurance_applicable = false;
            var is_tests_covered_under_insurance = false;
            var is_selected_user_insured = false;

            var data = {};
            var selectedDate = null;
            var selected_test_id = [];
            var parsed = queryString.parse(this.props.location.search);
            var patient = null;
            var profile = null;

            if (this.props.profiles[this.props.selectedProfile] && !this.props.profiles[this.props.selectedProfile].isDummyUser) {
                patient = this.props.profiles[this.props.selectedProfile];
                is_selected_user_insured = this.props.profiles[this.props.selectedProfile].is_insured;
                profile = patient.id;
            }
            is_tests_covered_under_insurance = true;
            this.props.LABS[this.props.selectedLab].tests.map(function (test, i) {

                if (test.insurance && test.insurance.is_insurance_covered && test.insurance.insurance_threshold_amount >= parseInt(test.deal_price)) {} else {
                    is_tests_covered_under_insurance = false;
                }
            });
            is_insurance_applicable = is_tests_covered_under_insurance && is_selected_user_insured;

            // in case of upload prescription
            if (is_insurance_applicable) {
                if (this.props.selectedCriterias && this.props.selectedCriterias.length > 0) {
                    this.props.selectedCriterias.map(function (twp, i) {
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
    }, {
        key: 'getBookingData',
        value: function getBookingData() {
            var test_ids = [];
            var coupon_data = {};
            if (this.props.LABS[this.props.selectedLab] && this.props.LABS[this.props.selectedLab].tests && this.props.LABS[this.props.selectedLab].tests.length) {
                test_ids = this.props.LABS[this.props.selectedLab].tests.map(function (x) {
                    return x.test_id;
                });
            }

            if (this.props.labCoupons && this.props.labCoupons[this.props.selectedLab] && this.props.labCoupons[this.props.selectedLab].length) {
                coupon_data = this.props.labCoupons[this.props.selectedLab][0];
            }
            return { test_ids: test_ids, labId: this.props.selectedLab, pincode: this.state.pincode, profile: this.props.selectedProfile, selectedSlot: this.props.selectedSlot, coupon_data: coupon_data, payment_type: this.props.payment_type };
        }
    }, {
        key: 'sendSingleFlowAgentBookingURL',
        value: function sendSingleFlowAgentBookingURL(postData) {
            var _this4 = this;

            //for agent login send booking url for single flow
            var booking_data = this.getBookingData();
            booking_data = _extends({}, postData, booking_data, { is_single_flow_lab: true, dummy_data_type: 'SINGLE_PURCHASE' });

            this.props.pushMembersData(booking_data, function (resp) {
                if (resp.dummy_id) {

                    var extraParams = {
                        landing_url: 'lab/' + _this4.props.selectedLab + '/book?dummy_id=' + resp.dummy_id + '&test_ids=' + booking_data.test_ids
                    };
                    if (postData['message_medium']) {
                        extraParams['message_medium'] = postData['message_medium'];
                    }
                    _this4.props.sendAgentBookingURL(_this4.state.order_id, 'sms', 'SINGLE_PURCHASE', null, extraParams, function (err, res) {
                        if (err) {
                            _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "SMS SEND ERROR" });
                        } else {
                            _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "SMS SENT SUCCESSFULY" });
                        }
                    });
                }
            });
        }
    }, {
        key: 'proceed',
        value: function proceed(testPicked, addressPicked, datePicked, patient, addToCart, total_price, total_wallet_balance, prescriptionPicked, is_selected_user_insurance_status, extraParams, vip_is_prescription_required, e) {
            var _this5 = this;

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
                var found = false;
                this.props.LABS[this.props.selectedLab].tests.map(function (test) {
                    if (_this5.props.selectedSlot.selectedTestsTimeSlot[test.test_id]) {} else {
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

                var validateAddressPincode = false;
                if (this.props.address && this.props.address.length) {
                    var selectedAddressPincode = this.props.address.filter(function (x) {
                        return x.id == _this5.props.selectedAddress;
                    }).map(function (x) {
                        return x.pincode;
                    });

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

            var is_insurance_applicable = false;
            var is_tests_covered_under_insurance = false;
            var is_selected_user_insured = false;
            var is_vip_applicable = false;
            var is_selected_user_under_vip = false;
            var is_tests_covered_under_vip = false;
            var vip_amount = void 0;

            var is_selected_user_vip = true; // to check is plus_plan is applicable or not
            if (this.props.profiles[this.props.selectedProfile] && !this.props.profiles[this.props.selectedProfile].isDummyUser) {
                is_selected_user_insured = this.props.profiles[this.props.selectedProfile].is_insured;
                is_selected_user_under_vip = this.props.profiles[this.props.selectedProfile].is_vip_member;
                Object.entries(this.props.profiles).map(function (_ref) {
                    var _ref2 = _slicedToArray(_ref, 2),
                        key = _ref2[0],
                        value = _ref2[1];

                    if (value.is_vip_member) {
                        is_selected_user_vip = false;
                    }
                });
            }

            var is_plan_applicable = false;
            var is_tests_covered_under_plan = true;
            var is_selected_user_has_active_plan = false;
            var show_lensfit = true;
            var lensfit_coupons = null;

            if (this.props.isUserCared && this.props.isUserCared.has_active_plan) {
                is_selected_user_has_active_plan = this.props.isUserCared.has_active_plan;
            }

            //Check If each Tests Covered Under Plan
            //Check If each Tests Covered Under Insurance

            if (this.props.LABS[this.props.selectedLab] && this.props.LABS[this.props.selectedLab].tests && this.props.LABS[this.props.selectedLab].tests.length) {

                is_tests_covered_under_insurance = true;
                this.props.LABS[this.props.selectedLab].tests.map(function (test, i) {

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
            var prescriptionIds = [];
            //Check if prior to test, prescription exist for the insured customer or not
            if (prescriptionPicked && is_insurance_applicable || vip_is_prescription_required) {
                if (this.props.user_prescriptions && this.props.user_prescriptions.length == 0) {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please upload prescription." });
                    return;
                } else if (this.props.user_prescriptions && this.props.user_prescriptions.length > 0) {
                    this.props.user_prescriptions[0].img_path_ids.map(function (imgId, i) {
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
            */var testIds = this.props.lab_test_data[this.props.selectedLab] || [];
            testIds = testIds.map(function (x) {
                return x.id;
            });
            var utm_tags = this.getUtmTags();
            var postData = {
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
            var visitor_info = _gtm2.default.getVisitorInfo();
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
            if (sessionStorage && sessionStorage.getItem('sessionIdVal') && this.props.common_utm_tags && this.props.common_utm_tags.length && this.props.common_utm_tags.filter(function (x) {
                return x.type == 'spo';
            }).length) {

                var spo_tags = this.props.common_utm_tags.filter(function (x) {
                    return x.type == 'spo';
                })[0];
                if (spo_tags.utm_tags) {

                    postData['utm_spo_tags'] = spo_tags.utm_tags;
                }
            }

            //Check SBI UTM Tags
            if (_storage2.default && _storage2.default.getAnyCookie('sbi_utm') && this.props.common_utm_tags && this.props.common_utm_tags.length && this.props.common_utm_tags.filter(function (x) {
                return x.type == 'sbi_utm';
            }).length) {

                var tags = this.props.common_utm_tags.filter(function (x) {
                    return x.type == 'sbi_utm';
                })[0];
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
                var tests = [];

                this.props.LABS[this.props.selectedLab].tests.map(function (twp) {

                    if (_this5.props.selectedSlot.selectedTestsTimeSlot[twp.test_id]) {
                        var test = _this5.props.selectedSlot.selectedTestsTimeSlot[twp.test_id];
                        var type = 3;
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
            var profileData = _extends({}, patient);
            if (profileData && profileData.whatsapp_optin == null) {
                profileData['whatsapp_optin'] = this.state.whatsapp_optin;
                this.props.editUserProfile(profileData, profileData.id);
            }
            if (this.props.payment_type != 6 && this.props.labCoupons && this.props.labCoupons[this.props.selectedLab] && this.props.labCoupons[this.props.selectedLab].length && this.props.disCountedLabPrice >= 0 && !is_plan_applicable && !is_insurance_applicable /*&& !is_vip_applicable*/) {
                    postData['coupon_code'] = this.state.couponCode ? [this.state.couponCode] : [];
                }

            //Post Pincode & thyrocare data
            if (this.props.LABS[this.props.selectedLab] && this.props.LABS[this.props.selectedLab].lab && this.props.LABS[this.props.selectedLab].lab.is_thyrocare) {

                var pincode = this.state.pincode;
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

                var _data = {
                    'Category': 'ConsumerApp', 'Action': 'LabAddToCartClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-add-to-cart-clicked'
                };

                _gtm2.default.sendEvent({ data: _data });
                this.props.addToCart(2, postData).then(function (res) {
                    // if (!this.state.cart_item && !this.state.is_spo_appointment) {
                    //     this.props.clearExtraTests()
                    // }

                    if (_this5.state.is_spo_appointment) {
                        _this5.sendAgentBookingURL();
                    } else {
                        _this5.props.history.push('/cart');
                    }
                }).catch(function (err) {
                    var message = "Error adding to cart!";
                    if (err.message) {
                        message = err.message;
                        if (message.includes('Item already exists in cart.')) {
                            _this5.props.history.push('/cart');
                            return;
                        }
                    }
                    _this5.setState({ loading: false, error: message });
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: message });
                });
                return;
            }

            var data = {
                'Category': 'ConsumerApp', 'Action': 'LabProceedClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-proceed-clicked'
            };

            _gtm2.default.sendEvent({ data: data });

            data = {
                'Category': 'ConsumerApp', 'Action': 'AppointmentType', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'appointment-type', 'appointmentType': '', 'r_pickup': this.props.selectedAppointmentType.r_pickup, 'p_pickup': this.props.selectedAppointmentType.p_pickup
            };

            _gtm2.default.sendEvent({ data: data });

            var analyticData = {
                'Category': 'ConsumerApp', 'Action': 'LabConfirmBookingClicked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'lab-confirm-booking-clicked'
            };
            _gtm2.default.sendEvent({ data: analyticData });
            this.setState({ paymentBtnClicked: true });
            this.props.createLABAppointment(postData, function (err, data) {
                if (!err) {

                    //Clear SPO UTM Tags after appointments creation
                    if (_this5.state.is_spo_appointment) {
                        _this5.props.unSetCommonUtmTags('spo');
                    }

                    //Remove coupons and clear prescription after appointment creation
                    if (_this5.props.user_prescriptions && _this5.props.user_prescriptions.length > 0) {
                        _this5.props.removeLabCoupons(_this5.props.selectedLab, _this5.state.couponId);
                        _this5.props.clearPrescriptions();
                    }
                    if (data.is_agent) {
                        _this5.props.removeLabCoupons(_this5.props.selectedLab, _this5.state.couponId);
                        // this.props.history.replace(this.props.location.pathname + `?order_id=${data.data.orderId}`)
                        _this5.setState({ order_id: data.data.orderId });
                        return;
                    }
                    if (data.payment_required) {
                        // if payment is required, send to payment selection page
                        var _analyticData = {
                            'Category': 'ConsumerApp', 'Action': 'LabOrderCreated', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'lab_order_created'
                        };
                        _gtm2.default.sendEvent({ data: _analyticData });
                        // this.props.history.push(`/payment/${data.data.orderId}?refs=lab`)
                        _this5.processPayment(data);
                    } else {

                        _this5.props.removeLabCoupons(_this5.props.selectedLab, _this5.state.couponId);
                        // send back to appointment page
                        _this5.props.history.replace('/order/summary/' + data.data.orderId + '?payment_success=true');
                    }
                } else {
                    _this5.setState({ paymentBtnClicked: false });
                    var message = void 0;
                    if (err.error) {
                        message = err.error;
                    } else {
                        message = "Could not create appointment. Try again later !";
                    }
                    if (err.message) {
                        message = err.message;
                    }
                    _this5.setState({ loading: false, error: message });
                }
            });
        }
    }, {
        key: 'processPayment',
        value: function processPayment(data) {
            var _this6 = this;

            if (data && data.status) {
                this.setState({ paymentData: data.data }, function () {
                    setTimeout(function () {
                        if (document.getElementById('paymentForm') && Object.keys(_this6.state.paymentData).length > 0) {
                            var form = document.getElementById('paymentForm');
                            setTimeout(function () {
                                _this6.props.removeLabCoupons(_this6.props.selectedLab, _this6.state.couponId);
                            }, 3000);
                            form.submit();
                        }
                    }, 500);
                });
            }
        }
    }, {
        key: 'sendAgentBookingURL',
        value: function sendAgentBookingURL() {
            var _this7 = this;

            //for agent login send booking url
            var postData = {};
            if (sessionStorage && sessionStorage.getItem('sessionIdVal') && this.props.common_utm_tags && this.props.common_utm_tags.length && this.props.common_utm_tags.filter(function (x) {
                return x.type == 'spo';
            }).length) {

                var spo_tags = this.props.common_utm_tags.filter(function (x) {
                    return x.type == 'spo';
                })[0];
                if (spo_tags.utm_tags) {
                    postData = spo_tags.utm_tags;
                }
            }

            this.props.sendSPOAgentBooking(postData, function (err, res) {
                if (err) {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "SMS SEND ERROR" });
                } else {
                    _this7.props.unSetCommonUtmTags('spo');
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "SMS SENT SUCCESSFULY" });
                }
            });
        }
    }, {
        key: 'applyCoupons',
        value: function applyCoupons() {
            if (!this.props.corporateCoupon) {
                var analyticData = {
                    'Category': 'ConsumerApp', 'Action': 'LabCouponsClicked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'lab-coupons-clicked'
                };
                _gtm2.default.sendEvent({ data: analyticData });

                var test_ids = [];
                this.props.LABS[this.props.selectedLab].tests.map(function (twp, i) {
                    test_ids.push(twp.test_id);
                });

                var _getLabPriceData4 = this.getLabPriceData(this.props),
                    finalPrice = _getLabPriceData4.finalPrice;

                this.setState({ pay_btn_loading: true });
                this.props.history.push('/coupon/lab/' + this.props.selectedLab + '/coupons?test_ids=' + test_ids + '&deal_price=' + finalPrice + '&cart_item=' + (this.state.cart_item || ""));
            }
        }
    }, {
        key: 'getBookingButtonText',
        value: function getBookingButtonText(total_wallet_balance, price_to_pay, is_vip_applicable, vip_amount, extraAllParams) {
            var price_from_wallet = 0;
            var price_from_pg = 0;

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
                return 'Continue to pay (\u20B9 ' + price_from_pg + ')';
            }

            return 'Confirm Booking';
        }
    }, {
        key: 'setPincode',
        value: function setPincode(pincode) {
            var _this8 = this;

            this.props.savePincode(pincode);
            var slot = { time: {} };
            this.props.selectLabTimeSLot(slot, false);
            this.setState({ showPincodePopup: false, pincode: pincode }, function () {
                _this8.navigateTo('time');
            });
        }
    }, {
        key: 'clickPincodeErrrorPopUp',
        value: function clickPincodeErrrorPopUp(type) {
            if (type == 1) {
                this.setState({ pincodeMismatchError: false, showPincodePopup: true }, function () {});
            } else {
                this.props.history.push('/user/address?pick=true');
            }
        }
    }, {
        key: 'goToProfile',
        value: function goToProfile(id, url) {
            if (url) {
                this.props.history.push('/' + url);
            } else {
                this.props.history.push('/lab/' + id);
            }
        }
    }, {
        key: 'toggleWhatsap',
        value: function toggleWhatsap(status, e) {
            this.setState({ whatsapp_optin: status });
        }
    }, {
        key: 'clearTestForInsured',
        value: function clearTestForInsured() {
            // if (this.props.defaultProfile && this.props.profiles[this.props.defaultProfile] && (this.props.profiles[this.props.defaultProfile].is_insured || this.props.profiles[this.props.defaultProfile].is_vip_member || this.props.profiles[this.props.defaultProfile].is_vip_gold_member)) {

            //     if(this.props.selectedLab && this.props.LABS[this.props.selectedLab] && this.props.LABS[this.props.selectedLab].tests && this.props.LABS[this.props.selectedLab].tests.length ==1){

            //     }else{
            //         this.props.clearExtraTests()    
            //     }
            //     this.props.getLabById(this.props.selectedLab)
            //     return
            // }
        }
    }, {
        key: 'searchTests',
        value: function searchTests() {
            this.props.selectSearchType('lab');
            this.props.history.push('/search');
        }
    }, {
        key: 'priceConfirmationPopup',
        value: function priceConfirmationPopup(choice) {
            if (!choice) {
                this.setState({ showConfirmationPopup: 'close' });
            } else {
                this.setState({ showConfirmationPopup: 'close' });
                if (document.getElementById('confirm_booking')) {
                    document.getElementById('confirm_booking').click();
                }
            }
        }
    }, {
        key: 'goToInsurance',
        value: function goToInsurance(labDetail) {
            var data = {};
            data.thumbnail = labDetail.lab_thumbnail;
            data.name = labDetail.name;
            data.id = labDetail.id;
            data.type = 'lab';
            this.props.saveAvailNowInsurance(data);
            this.props.history.push('/insurance/insurance-plans?source=doctor-summary-view&show_button=true');
        }
    }, {
        key: 'testInfo',
        value: function testInfo(test_id, lab_id, test_url, event) {
            var selected_test_ids = [];
            // Object.entries(this.props.currentSearchedCriterias).map(function ([key, value]) {
            //     selected_test_ids.push(value.id)
            // })
            var url_string = window.location.href;
            var url = new URL(url_string);
            var search_id = url.searchParams.get("search_id");
            var lat = 28.644800;
            var long = 77.216721;
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
            var data = {
                'Category': 'ConsumerApp', 'Action': 'testInfoClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'test-info-click', 'pageSource': 'lab-result-page'
            };
            _gtm2.default.sendEvent({ data: data });
        }
    }, {
        key: 'removeTest',
        value: function removeTest(twp) {
            var test = Object.assign({}, twp.test);
            test.extra_test = true;
            test.lab_id = this.props.selectedLab;
            test.removeTest = true;
            test.selectedLabTests = this.props.LABS[this.props.selectedLab];
            this.props.toggleDiagnosisCriteria('test', test);
        }
    }, {
        key: 'applyLensFitCoupons',
        value: function applyLensFitCoupons(deal_price, coupon) {
            var _getLabPriceData5 = this.getLabPriceData(this.props),
                finalPrice = _getLabPriceData5.finalPrice,
                test_ids = _getLabPriceData5.test_ids;

            coupon.finalPrice = finalPrice;
            coupon.test_ids = test_ids;
            coupon.LABS = this.props.LABS;
            var data = {
                'Category': 'ConsumerApp', 'Action': 'LensFitLabApplyClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lensfit-lab-apply-clicked'
            };
            _gtm2.default.sendEvent({ data: data });
            this.getAndApplyBestCoupons(coupon, true);
        }
    }, {
        key: 'closeLensFitPopup',
        value: function closeLensFitPopup() {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'LensFitLabDontWantClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lensfit-lab-dont-want-clicked'
            };
            _gtm2.default.sendEvent({ data: data });

            this.setState({ show_lensfit_popup: false, lensfit_decline: true }, function () {
                if (document.getElementById('confirm_booking')) {
                    document.getElementById('confirm_booking').click();
                }
            });
            // this.setState({show_lensfit_popup:false,lensfit_decline:true})
        }
    }, {
        key: 'getSelectedUserData',
        value: function getSelectedUserData(props) {
            var total_amount_payable_without_coupon = null;
            var is_tests_covered_under_plan = true;
            var is_tests_covered_under_vip = true;
            var vip_data = {};
            var vip_total_amount = 0;
            var vip_total_convenience_amount = 0;
            var vip_total_gold_price = 0;
            var is_all_enable_for_vip = true;
            var is_all_enable_for_gold = true;
            var is_home_charges_applicable = false;
            var labDetail = {};
            if (props.LABS[props.selectedLab] && props.LABS[props.selectedLab].tests && props.LABS[props.selectedLab].tests.length) {
                var patient = null;
                labDetail = props.LABS[props.selectedLab].lab;
                var is_home_collection_enabled = false;
                if (is_home_collection_enabled && props.selectedAppointmentType && (props.selectedAppointmentType.r_pickup == 'home' || props.selectedAppointmentType.p_pickup == 'home')) {
                    is_home_charges_applicable = true;
                }

                if (props.profiles[props.selectedProfile] && !props.profiles[props.selectedProfile].isDummyUser) {
                    patient = props.profiles[props.selectedProfile];
                }

                props.LABS[props.selectedLab].tests.map(function (test, i) {

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
            return { total_amount_payable_without_coupon: total_amount_payable_without_coupon };
        }
    }, {
        key: 'nonIpdLeads',
        value: function nonIpdLeads(user_phone_number, user_name) {
            var _this9 = this;

            var parsed = queryString.parse(this.props.location.search);
            var patient = null;
            var data = {};
            var selected_test_name = '';
            var selected_test = void 0;
            if (this.props.LABS[this.props.selectedLab] && this.props.LABS[this.props.selectedLab].tests && this.props.LABS[this.props.selectedLab].tests.length) {

                this.props.LABS[this.props.selectedLab].tests.map(function (test, i) {
                    if (_this9.props.selectedSlot && Object.keys(_this9.props.selectedSlot).length && _this9.props.selectedSlot.selectedTestsTimeSlot) {
                        selected_test = _this9.props.selectedSlot.selectedTestsTimeSlot[test.test_id];
                    }
                    if (_this9.props.LABS[_this9.props.selectedLab].tests.length == 1) {
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
                var visitor_info = _gtm2.default.getVisitorInfo();
                if (visitor_info && visitor_info.visit_id) {
                    data.visit_id = visitor_info.visit_id;
                    data.visitor_id = visitor_info.visitor_id;
                }
                if (this.props.common_utm_tags && this.props.common_utm_tags.length) {
                    data.utm_tags = this.getUtmTags();
                }
                if (selected_test && this.props.selectedSlot && Object.keys(this.props.selectedSlot).length && this.props.selectedSlot.selectedTestsTimeSlot) {
                    var _selected_test = selected_test,
                        date = _selected_test.date,
                        time = _selected_test.time;

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
                    setTimeout(function () {
                        _this9.setState({ is_lead_enabled: true });
                    }, 5000);
                }
            }
        }
    }, {
        key: 'getUtmTags',
        value: function getUtmTags() {
            var parsed = queryString.parse(this.props.location.search);
            var utm_tags = {
                utm_source: parsed.utm_source || '',
                utm_medium: parsed.utm_medium || '',
                utm_term: parsed.utm_term || '',
                utm_campaign: parsed.utm_campaign || '',
                referrer: document.referrer || '',
                gclid: parsed.gclid || ''
            };

            if (this.props.common_utm_tags && this.props.common_utm_tags.length) {
                utm_tags = this.props.common_utm_tags.filter(function (x) {
                    return x.type == "common_xtra_tags";
                })[0].utm_tags;
            }

            return utm_tags;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this10 = this;

            var parsed = queryString.parse(this.props.location.search);
            var tests = [];
            var tests_with_price = [];
            var finalPrice = 0;
            var finalMrp = 0;
            var home_pickup_charges = 0;
            var labDetail = {};
            var patient = null;
            var is_home_collection_enabled = true;
            var address_picked_verified = false;
            var center_visit_enabled = true;
            var is_corporate = false;
            var prescriptionPicked = false;

            var is_insurance_applicable = false;
            var is_tests_covered_under_insurance = false;
            var is_selected_user_insured = false;
            var is_default_user_insured = false;

            var is_plan_applicable = false;
            var is_tests_covered_under_plan = true;
            var is_selected_user_has_active_plan = false;
            var is_insurance_buy_able = false;
            var is_selected_user_insurance_status = void 0;
            var radiology_tests = [];
            var pathology_tests = [];
            var r_pickup_home = true;
            var r_pickup_center = false;
            var p_pickup_home = true;
            var p_pickup_center = false;
            var is_vip_applicable = false;
            var is_selected_user_under_vip = false;
            var is_default_user_under_vip = false;
            var is_tests_covered_under_vip = false;
            var is_selected_user_gold = false;
            var vip_total_amount = 0;
            var vip_total_convenience_amount = 0;
            var vip_total_gold_price = 0;
            var vip_data = {};
            var is_all_enable_for_vip = true;
            var is_all_enable_for_gold = true;
            var vip_is_prescription_required = false;
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
            var gold_pricelist_mrp = 0;
            var gold_pricelist_deal_price = 0;
            var gold_pricelist_convenience = 0;
            if (this.props.LABS[this.props.selectedLab] && this.props.LABS[this.props.selectedLab].tests && this.props.LABS[this.props.selectedLab].tests.length) {
                is_tests_covered_under_insurance = true;

                this.props.LABS[this.props.selectedLab].tests.map(function (test, i) {
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
                    if (!_this10.props.is_any_user_buy_gold && _this10.props.selected_vip_plan && _this10.props.selected_vip_plan.tests && _this10.props.selected_vip_plan.tests[test.test_id]) {
                        gold_pricelist_mrp += _this10.props.selected_vip_plan.tests[test.test_id].mrp || 0;
                        gold_pricelist_deal_price += _this10.props.selected_vip_plan.tests[test.test_id].gold_price || 0;
                        gold_pricelist_convenience += _this10.props.selected_vip_plan.tests[test.test_id].convenience_charge || 0;
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
                this.props.LABS[this.props.selectedLab].tests.map(function (twp, i) {
                    if (twp.hide_price) {
                        is_corporate = true;
                    }
                    var price = twp.deal_price;
                    var mrp = twp.mrp;
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
                        r_pickup_center = _this10.props.LABS[_this10.props.selectedLab].lab.center_visit_enabled;
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
                                    { style: { 'marginLeft': '5px', marginTop: '1px', display: 'inline-block' }, key: i, onClick: _this10.testInfo.bind(_this10, twp.test.id, _this10.state.selectedLab, twp.test.url) },
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
                                { className: 'rdo-rmv-spn', onClick: function onClick() {
                                        return _this10.removeTest(twp);
                                    } },
                                'Remove'
                            )
                        ));
                    } else if (twp.is_pathology) {
                        p_pickup_center = _this10.props.LABS[_this10.props.selectedLab].lab.center_visit_enabled;
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
                                    { style: { 'marginLeft': '5px', marginTop: '1px', display: 'inline-block' }, key: i, onClick: _this10.testInfo.bind(_this10, twp.test.id, _this10.state.selectedLab, twp.test.url) },
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
                                { className: 'rdo-rmv-spn', onClick: function onClick() {
                                        return _this10.removeTest(twp);
                                    } },
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
                        ) : _this10.props.payment_type == 6 && _this10.props.selected_vip_plan && _this10.props.selected_vip_plan.tests && _this10.props.selected_vip_plan.tests[twp.test_id] ? parseInt(_this10.props.selected_vip_plan.tests[twp.test_id].gold_price) == parseInt(_this10.props.selected_vip_plan.tests[twp.test_id].mrp) ? _react2.default.createElement(
                            'p',
                            { className: 'pay-amnt-shrnk' },
                            '\u20B9 ',
                            _this10.props.selected_vip_plan.tests[twp.test_id].gold_price || 0
                        ) : _react2.default.createElement(
                            'p',
                            { className: 'pay-amnt-shrnk' },
                            '\u20B9 ',
                            _this10.props.selected_vip_plan.tests[twp.test_id].mrp
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
            var r_pickup = this.props.selectedAppointmentType.r_pickup;
            var p_pickup = this.props.selectedAppointmentType.p_pickup;
            var reset = false;

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
                    var selectedType = {
                        r_pickup: r_pickup,
                        p_pickup: p_pickup
                    };
                    setTimeout(function () {
                        _this10.props.selectLabAppointmentType(selectedType);
                    });
                }
            }

            is_home_collection_enabled = r_pickup_home || p_pickup_home;

            // check if the picked address is correct or not
            if (this.props.selectedAppointmentType && (this.props.selectedAppointmentType.r_pickup == 'home' || this.props.selectedAppointmentType.p_pickup == 'home')) {
                if (this.props.address && this.props.address.length && this.props.selectedAddress) {
                    this.props.address.map(function (add) {
                        if (add.id == _this10.props.selectedAddress) {
                            address_picked_verified = true;
                        }
                    });
                }
            }

            var address_picked = address_picked_verified;
            if (this.props.selectedAppointmentType && (this.props.selectedAppointmentType.r_pickup == 'lab' || this.props.selectedAppointmentType.p_pickup == 'lab')) {
                address_picked = true;
            }

            var labCoupons = this.props.labCoupons[this.props.selectedLab] || [];

            var amtBeforeCoupon = 0;
            var total_price = finalPrice;
            var is_home_charges_applicable = false;
            var total_amount_payable_non_plan_user = 0;
            if (is_home_collection_enabled && this.props.selectedAppointmentType && (this.props.selectedAppointmentType.r_pickup == 'home' || this.props.selectedAppointmentType.p_pickup == 'home')) {
                is_home_charges_applicable = true;
            }
            if (is_home_collection_enabled && finalPrice && is_home_charges_applicable) {
                total_price = finalPrice + (labDetail.home_pickup_charges || 0);
            }
            amtBeforeCoupon = total_price;
            var display_radio_cod_price = parseInt(total_price) - (this.props.disCountedLabPrice || 0);

            if (!this.state.is_cashback) {
                total_price = total_price ? parseInt(total_price) - (this.props.disCountedLabPrice || 0) : 0;
            }
            total_price = is_corporate || is_insurance_applicable || is_plan_applicable ? 0 : total_price;
            var is_vip_gold_applicable = /*is_tests_covered_under_vip && */is_selected_user_gold && vip_data && vip_data.is_gold || is_selected_user_under_vip;

            total_amount_payable_non_plan_user = total_price;
            if (is_vip_gold_applicable) {
                total_price = finalMrp;
            }
            var total_wallet_balance = 0;
            if (this.props.userWalletBalance >= 0 && this.props.userCashbackBalance >= 0) {
                total_wallet_balance = this.props.userWalletBalance + this.props.userCashbackBalance;
            }

            var is_add_to_card = _storage2.default.isAgent() || this.state.cart_item || !is_corporate && !is_default_user_insured;
            var total_test_count = pathology_tests.length + radiology_tests.length;
            var is_time_selected_for_all_tests = this.props.selectedSlot && this.props.selectedSlot.selectedTestsTimeSlot ? Object.keys(this.props.selectedSlot.selectedTestsTimeSlot).length : 0;
            var vip_discount_price = 0;
            var total_amount_payable = total_price;

            if (!total_test_count && is_selected_user_gold) {
                is_vip_gold_applicable = true;
            }
            var is_cover_under_vip_gold = false;
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

            var currentTestsCount = this.props.LABS[this.props.selectedLab] && this.props.LABS[this.props.selectedLab].tests && this.props.LABS[this.props.selectedLab].tests.length;

            var showGoldTogglePaymentMode = !this.props.is_any_user_buy_gold && this.props.selected_vip_plan && this.props.labGoldPredictedPrice && this.props.labGoldPredictedPrice.length && !is_insurance_applicable;

            if (!showGoldTogglePaymentMode && this.props.payment_type == 6 && this.props.show_lab_payment_mode) {
                this.props.select_lab_payment_type(1);
            }

            //SET PAYMENT SUMMARY PRICE
            var display_docprime_discount = finalMrp - finalPrice;
            if (!this.props.is_any_user_buy_gold && this.props.payment_type == 6 && this.props.selected_vip_plan && this.props.selected_vip_plan.tests) {
                display_docprime_discount = parseInt(gold_pricelist_mrp) - (parseInt(gold_pricelist_deal_price) + parseInt(gold_pricelist_convenience));
                total_amount_payable = this.props.selected_vip_plan.deal_price + parseInt(gold_pricelist_deal_price) + parseInt(gold_pricelist_convenience) + (is_home_charges_applicable && labDetail ? labDetail.home_pickup_charges : 0); // - (this.props.disCountedLabPrice || 0)
                total_price = total_amount_payable;
            }
            var extraParams = {
                is_gold_member: vip_data && /*vip_data.is_gold &&*/is_selected_user_gold,
                total_amount_payable: total_amount_payable

                //Disable All Retail Bookings
            };var disable_all_bookings = !(is_cover_under_vip_gold || is_insurance_applicable);
            if (_storage2.default.checkAuth()) {} else {
                disable_all_bookings = false;
            }
            return _react2.default.createElement(
                'div',
                { className: 'profile-body-wrap' },
                _react2.default.createElement(_DesktopProfileHeader2.default, { bookingPage: true, summaryPage: true }),
                this.state.showConfirmationPopup == 'open' && is_selected_user_insurance_status != 4 ? _react2.default.createElement(_BookingConfirmationPopup2.default, { priceConfirmationPopup: this.priceConfirmationPopup.bind(this), bannerConfirmationPopup: function bannerConfirmationPopup() {}, isLab: true }) : '',
                this.state.show_lensfit_popup ? _react2.default.createElement(_lensfitPopup2.default, _extends({}, this.props, { lensfit_coupons: this.state.lensfit_coupons, applyLensFitCoupons: this.applyLensFitCoupons.bind(this), closeLensFitPopup: this.closeLensFitPopup.bind(this) })) : '',

                //Show Vip Gold Single Flow Price List
                this.state.showGoldPriceList && _react2.default.createElement(_VipGoldPackage2.default, { historyObj: this.props.history, vipGoldPlans: this.props.labGoldPredictedPrice, toggleGoldPricePopup: this.toggleGoldPricePopup, toggleGoldPlans: function toggleGoldPlans(val) {
                        return _this10.toggleGoldPlans(val);
                    }, selected_vip_plan: this.props.selected_vip_plan, goToGoldPage: this.goToGoldPage }),
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
                                                    { className: 'widget mrb-15 mrng-top-12', onClick: function onClick() {
                                                            _this10.goToProfile(_this10.props.selectedLab, labDetail.url);
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
                                                    { className: '' + (disable_all_bookings || this.state.disable_page && !_storage2.default.isAgent() ? 'disable-opacity' : '') },
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
                                                                    _react2.default.createElement('img', { onClick: function onClick(e) {
                                                                            e.stopPropagation();
                                                                            var analyticData = {
                                                                                'Category': 'ConsumerApp', 'Action': 'LabCouponsRemoved', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'lab-coupons-removed', 'couponId': labCoupons[0].coupon_id
                                                                            };
                                                                            _gtm2.default.sendEvent({ data: analyticData });
                                                                            _this10.setState({ couponCode: '', couponId: '' });
                                                                            _this10.props.removeLabCoupons(_this10.props.selectedLab, labCoupons[0].coupon_id);
                                                                            _this10.setState({ use_wallet: true, is_payment_coupon_applied: false });
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
                                                                        { className: 'payment-detail d-flex', onClick: function onClick(e) {
                                                                                e.preventDefault();
                                                                                _this10.props.select_lab_payment_type(6);
                                                                            } },
                                                                        _react2.default.createElement(
                                                                            'label',
                                                                            { className: 'container-radio payment-type-radio' },
                                                                            _react2.default.createElement(
                                                                                'div',
                                                                                { onClick: function onClick(e) {
                                                                                        e.stopPropagation();
                                                                                        e.preventDefault();
                                                                                    } },
                                                                                _react2.default.createElement(
                                                                                    'h4',
                                                                                    { className: 'title payment-amt-label', onClick: function onClick(e) {
                                                                                            e.preventDefault();
                                                                                            _this10.props.select_lab_payment_type(6);
                                                                                        } },
                                                                                    ' Lab booking with ',
                                                                                    _react2.default.createElement('img', { className: 'sng-gld-img', src: "/assets" + '/img/gold-lg.png' })
                                                                                ),
                                                                                gold_pricelist_deal_price == gold_pricelist_mrp ? _react2.default.createElement(
                                                                                    'span',
                                                                                    { className: 'payment-mode-amt', onClick: function onClick(e) {
                                                                                            e.stopPropagation();
                                                                                            e.preventDefault();
                                                                                            _this10.props.select_lab_payment_type(6);
                                                                                        } },
                                                                                    '\u20B9' + (gold_pricelist_deal_price + gold_pricelist_convenience)
                                                                                ) : _react2.default.createElement(
                                                                                    'span',
                                                                                    { className: 'payment-mode-amt', onClick: function onClick(e) {
                                                                                            e.stopPropagation();
                                                                                            e.preventDefault();
                                                                                            _this10.props.select_lab_payment_type(6);
                                                                                        } },
                                                                                    '\u20B9' + (gold_pricelist_deal_price + gold_pricelist_convenience),
                                                                                    ' ',
                                                                                    _react2.default.createElement(
                                                                                        'b',
                                                                                        { className: 'gd-cut-prc' },
                                                                                        '\u20B9' + gold_pricelist_mrp
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
                                                                                    'Save \u20B9' + vip_discount_price
                                                                                ),
                                                                                ' on this appointment'
                                                                            ),
                                                                            _react2.default.createElement(
                                                                                'p',
                                                                                { className: 'bnft-subtxt' },
                                                                                this.props.selected_vip_plan.total_allowed_members + ' member plan @Rs' + this.props.selected_vip_plan.deal_price,
                                                                                _react2.default.createElement(
                                                                                    'span',
                                                                                    null,
                                                                                    _react2.default.createElement('img', { src: "/assets" + '/img/customer-icons/edit.svg', onClick: function onClick(e) {
                                                                                            e.stopPropagation();
                                                                                            e.preventDefault();
                                                                                            _this10.goToGoldPage();
                                                                                        } })
                                                                                )
                                                                            )
                                                                        ),
                                                                        _react2.default.createElement(
                                                                            'div',
                                                                            { className: 'bnft-btn', onClick: function onClick(e) {
                                                                                    e.stopPropagation();
                                                                                    e.preventDefault();
                                                                                    _this10.goToGoldPage();
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
                                                                { className: 'payment-summary-content', onClick: function onClick(e) {
                                                                        e.preventDefault();
                                                                        _this10.props.select_lab_payment_type(1);
                                                                    } },
                                                                _react2.default.createElement(
                                                                    'div',
                                                                    { className: 'payment-detail d-flex' },
                                                                    _react2.default.createElement(
                                                                        'label',
                                                                        { className: 'container-radio payment-type-radio' },
                                                                        _react2.default.createElement(
                                                                            'div',
                                                                            { onClick: function onClick(e) {
                                                                                    e.preventDefault();
                                                                                    e.stopPropagation();
                                                                                    _this10.props.select_lab_payment_type(1);
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
                                { className: (disable_all_bookings ? 'disable-opacity' : '') + ' fixed sticky-btn p-0 v-btn  btn-lg horizontal bottom no-round text-lg buttons-addcart-container ' + (!is_add_to_card && this.props.ipd_chat && this.props.ipd_chat.showIpdChat ? 'ipd-foot-btn-duo' : '') + ' ' + (this.state.disable_page && !_storage2.default.isAgent() ? 'disable-all' : '') },
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
                                    { disabled: this.state.pay_btn_loading, className: 'v-btn-primary book-btn-mrgn-adjust pdd-12 ' + (this.state.pay_btn_loading ? " disable-all" : ""), id: 'confirm_booking', 'data-disabled': !(patient && this.props.selectedSlot && this.props.selectedSlot.selectedTestsTimeSlot) || this.state.loading, onClick: this.proceed.bind(this, total_test_count, address_picked, is_time_selected_for_all_tests, patient, false, total_amount_payable, total_wallet_balance, prescriptionPicked, is_selected_user_insurance_status, {}, vip_is_prescription_required) },
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
    }]);

    return BookingSummaryViewNew;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PincodePopupError = function (_React$Component) {
	_inherits(PincodePopupError, _React$Component);

	function PincodePopupError() {
		_classCallCheck(this, PincodePopupError);

		return _possibleConstructorReturn(this, (PincodePopupError.__proto__ || Object.getPrototypeOf(PincodePopupError)).apply(this, arguments));
	}

	_createClass(PincodePopupError, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				"div",
				{ className: "search-el-popup-overlay ", onClick: function onClick() {
						return _this2.props.toggle();
					} },
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
								{ className: "cross-btn", onClick: function onClick() {
										return _this2.props.toggle();
									} },
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
									{ onClick: function onClick() {
											return _this2.props.clickPopUp(1);
										} },
									"Change Pincode"
								),
								_react2.default.createElement(
									"button",
									{ onClick: function onClick() {
											return _this2.props.clickPopUp(2);
										} },
									"Change Address"
								)
							)
						)
					)
				)
			);
		}
	}]);

	return PincodePopupError;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PincodePoupupView = function (_React$Component) {
    _inherits(PincodePoupupView, _React$Component);

    function PincodePoupupView(props) {
        _classCallCheck(this, PincodePoupupView);

        var _this = _possibleConstructorReturn(this, (PincodePoupupView.__proto__ || Object.getPrototypeOf(PincodePoupupView)).call(this, props));

        _this.state = {
            pincode: ''
        };
        return _this;
    }

    _createClass(PincodePoupupView, [{
        key: 'validatePincode',
        value: function validatePincode() {
            if (this.state.pincode.match(/^[0-9]{6}$/)) {
                return true;
            }
            return false;
        }
    }, {
        key: 'submitPincode',
        value: function submitPincode(e) {
            e.stopPropagation();
            if (this.validatePincode()) {
                this.props.setPincode(this.state.pincode);
            } else {
                setTimeout(function () {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Valid Pincode" });
                }, 500);
            }
        }
    }, {
        key: '_handleContinuePress',
        value: function _handleContinuePress(e) {
            if (e.key === 'Enter') {
                this.submitPincode(e);
            }
        }
    }, {
        key: 'inputHandler',
        value: function inputHandler(e) {
            e.target.value.length <= 6 ? this.setState({ pincode: e.target.value }) : '';
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'section',
                { className: 'error-msg-pop' },
                _react2.default.createElement('div', { className: 'cancel-overlay', onClick: function onClick() {
                        return _this2.props.toggle();
                    } }),
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
                        { className: 'cross-btn', onClick: function onClick() {
                                return _this2.props.toggle();
                            } },
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
    }]);

    return PincodePoupupView;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MONTHS = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
var WEEK_DAYS = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

var VisitTimeNew = function (_React$Component) {
    _inherits(VisitTimeNew, _React$Component);

    function VisitTimeNew(props) {
        _classCallCheck(this, VisitTimeNew);

        var _this = _possibleConstructorReturn(this, (VisitTimeNew.__proto__ || Object.getPrototypeOf(VisitTimeNew)).call(this, props));

        var is_thyrocare = _this.is_thyrocare_lab(props);
        _this.state = {
            dateTimeSelectedValue: props.selectedDateFormat ? props.selectedDateFormat : _this.getFormattedDate(is_thyrocare ? new Date(_this.getDateAfter(1)) : new Date())
        };
        return _this;
    }

    _createClass(VisitTimeNew, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.selectedDateFormat && nextProps.selectedDateFormat != this.state.dateTimeSelectedValue) {
                this.setState({ dateTimeSelectedValue: nextProps.selectedDateFormat });
            }
        }
    }, {
        key: 'selectDate',
        value: function selectDate(e) {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'LabDateClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-date-clicked'
            };

            _gtm2.default.sendEvent({ data: data });
            if (e.target.value) {
                var date = e.target.value;
                this.setState({ dateTimeSelectedValue: date });
                var slot = { time: {} };
                this.props.selectLabTimeSLot(slot, false, date);
            }
        }
    }, {
        key: 'getFormattedDate',
        value: function getFormattedDate(date) {
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
    }, {
        key: 'getDateAfter',
        value: function getDateAfter() {
            var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            return new Date().setDate(new Date().getDate() + i);
        }
    }, {
        key: 'is_thyrocare_lab',
        value: function is_thyrocare_lab(props) {
            return props.LABS && props.LABS[props.selectedLab] && props.LABS[props.selectedLab].lab && props.LABS[props.selectedLab].lab.is_thyrocare;
        }
    }, {
        key: 'goToTime',
        value: function goToTime() {
            if (this.props.selectedSlot && this.props.selectedSlot['all']) {
                this.props.navigateTo('time', this.props.is_insurance_applicable, false);
            } else {
                this.props.navigateTo('time', this.props.is_insurance_applicable, true);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var is_thyrocare = this.is_thyrocare_lab(this.props);

            var unique_common_tests = null;
            if (this.props.LABS[this.props.selectedLab] && this.props.LABS[this.props.selectedLab].tests && this.props.selectedSlot && this.props.selectedSlot['all'] && this.props.selectedSlot.selectedTestsTimeSlot) {
                this.props.LABS[this.props.selectedLab].tests.map(function (x) {
                    if (_this2.props.selectedSlot.selectedTestsTimeSlot[x.test_id]) {} else {
                        unique_common_tests = true;
                    }
                });
            }

            return _react2.default.createElement(
                'div',
                { className: 'widget mrb-15 ' + (this.props.timeError ? 'rnd-error-nm' : '') },
                _react2.default.createElement(
                    'div',
                    { className: 'widget-content pos-relative' },
                    this.props.LABS[this.props.selectedLab] && this.props.LABS[this.props.selectedLab].lab && this.props.LABS[this.props.selectedLab].lab.is_thyrocare ? this.props.pincode ? _react2.default.createElement(
                        'div',
                        { className: 'area-pin', onClick: function onClick() {
                                return _this2.props.toggle();
                            } },
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
                        { className: 'area-pin', onClick: function onClick() {
                                return _this2.props.toggle();
                            } },
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
                            { href: '', onClick: function onClick(e) {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    _this2.props.navigateTo('time', _this2.props.is_insurance_applicable);
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
                            ) : this.props.LABS[this.props.selectedLab].tests.map(function (test, key) {
                                return _react2.default.createElement(
                                    'div',
                                    { className: 'vst-content-bl', key: key },
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'vst-tst-name' },
                                        test.test.name
                                    ),
                                    _this2.props.selectedSlot.selectedTestsTimeSlot[test.test_id] ? _react2.default.createElement(
                                        'p',
                                        { className: 'rdo-time-vst' },
                                        new Date(_this2.props.selectedSlot.selectedTestsTimeSlot[test.test_id].date).toDateString() || "",
                                        ' ',
                                        _this2.props.selectedSlot.selectedTestsTimeSlot[test.test_id].time.text ? "|" : "",
                                        ' ',
                                        _this2.props.selectedSlot.selectedTestsTimeSlot[test.test_id].time.text,
                                        ' ',
                                        _this2.props.selectedSlot.selectedTestsTimeSlot[test.test_id].time.text ? _this2.props.selectedSlot.selectedTestsTimeSlot[test.test_id].time.value >= 12 ? 'PM' : 'AM' : ''
                                    ) : _react2.default.createElement(
                                        'a',
                                        { href: '', onClick: function onClick(e) {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                _this2.goToTime();
                                            }, className: 'text-primary fw-700 text-sm' },
                                        'Select Time'
                                    )
                                );
                            })
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: '', onClick: function onClick(e) {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    _this2.props.navigateTo('time', _this2.props.is_insurance_applicable);
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
    }]);

    return VisitTimeNew;
}(_react2.default.Component);

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

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var toggle = _ref.toggle,
        props = _ref.props,
        is_insurance_applicable = _ref.is_insurance_applicable;

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
                                { style: { color: "var(--text--primary--color)", cursor: 'pointer', display: 'inline-block' }, onClick: function onClick() {
                                        return props.history.push('/terms?forBookingScroll=true');
                                    } },
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

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var toggle = _ref.toggle,
        finalPrice = _ref.finalPrice,
        finalMrp = _ref.finalMrp,
        is_home_collection_enabled = _ref.is_home_collection_enabled,
        home_pickup_charges = _ref.home_pickup_charges;

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PickupAddress = function (_React$Component) {
    _inherits(PickupAddress, _React$Component);

    function PickupAddress(props) {
        _classCallCheck(this, PickupAddress);

        var _this = _possibleConstructorReturn(this, (PickupAddress.__proto__ || Object.getPrototypeOf(PickupAddress)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(PickupAddress, [{
        key: "getAddressStr",
        value: function getAddressStr(address) {
            var addressStr = "";
            addressStr = address.address;
            if (address.land_mark) {
                addressStr += ", " + address.land_mark;
            }
            if (address.locality) {
                addressStr += ", " + address.locality;
            }
            return addressStr;
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this,
                _React$createElement;

            var addressStr = "";

            if (this.props.selectedAddress) {
                this.props.address.map(function (add) {
                    if (add.id == _this2.props.selectedAddress) {
                        addressStr = add.address;
                        if (add.locality) {
                            addressStr += ", " + add.locality;
                        }
                    }
                });
            }

            return _react2.default.createElement(
                "div",
                { className: "widget mrb-15 " + (this.props.addressError == false || addressStr.length ? '' : 'rnd-error-nm') },
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
                                (_React$createElement = { href: "", className: "text-primary fw-700 text-sm" }, _defineProperty(_React$createElement, "href", "#"), _defineProperty(_React$createElement, "onClick", function onClick(e) {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    _this2.props.navigateTo();
                                }), _React$createElement),
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
    }]);

    return PickupAddress;
}(_react2.default.Component);

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

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _Loader = __webpack_require__(/*! ../../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
var Compress = __webpack_require__(/*! compress.js */ "./node_modules/compress.js/index.js");

var UploadPrescription = function (_React$Component) {
    _inherits(UploadPrescription, _React$Component);

    function UploadPrescription(props) {
        _classCallCheck(this, UploadPrescription);

        var _this = _possibleConstructorReturn(this, (UploadPrescription.__proto__ || Object.getPrototypeOf(UploadPrescription)).call(this, props));

        _this.state = {
            dataUrl: null,
            zoomImageUrl: null,
            zoomImage: false,
            openPdf: false,
            openPdfUrl: null,
            isLoading: false
        };
        return _this;
    }

    _createClass(UploadPrescription, [{
        key: 'pickFile',
        value: function pickFile(e) {
            var _this2 = this;

            if (e.target.files && e.target.files[0]) {
                var file = e.target.files[0];
                if (e.target.files[0] && e.target.files[0].name.includes('.pdf')) {
                    this.finishCrop(null, file);
                } else {
                    var compress = new Compress();
                    compress.compress([file], {
                        quality: 1,
                        maxWidth: 1000,
                        maxHeight: 1000
                    }).then(function (results) {
                        var img1 = results[0];
                        var base64str = img1.data;
                        var imgExt = img1.ext;
                        var file = Compress.convertBase64ToFile(base64str, imgExt);
                        _this2.getBase64(file, function (dataUrl) {
                            _this2.finishCrop(dataUrl, null);
                            _this2.setState({ dataUrl: dataUrl });
                        });
                    }).catch(function (e) {
                        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Error uploading image." });
                    });
                }
            }
        }
    }, {
        key: 'getBase64',
        value: function getBase64(file, cb) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                cb(reader.result);
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
        }
    }, {
        key: 'finishCrop',
        value: function finishCrop(dataUrl, file) {
            var _this3 = this;

            var file_blob_data = void 0;
            if (dataUrl) {
                file_blob_data = this.dataURItoBlob(dataUrl);
            }
            var mem_data = {};
            var existingData = void 0;
            var img_tag = "prescription_file";
            this.setState({
                dataUrl: null, isLoading: true
            }, function () {
                var form_data = new FormData();
                if (file) {
                    form_data.append(img_tag, file, "imageFilename.pdf");
                } else {
                    form_data.append(img_tag, file_blob_data, "imageFilename.jpeg");
                }
                _this3.props.uploadPrescription(form_data, function (data, err) {
                    if (data) {
                        mem_data.id = data.data.user;
                        mem_data.img_path_ids = [];
                        if (_this3.props.user_prescriptions.length > 0) {
                            Object.entries(_this3.props.user_prescriptions).map(function (_ref) {
                                var _ref2 = _slicedToArray(_ref, 2),
                                    key = _ref2[0],
                                    value = _ref2[1];

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
                        _this3.setState({ isLoading: false });
                        _this3.props.savePrescription(mem_data);
                    }
                });
            });
        }
    }, {
        key: 'dataURItoBlob',
        value: function dataURItoBlob(dataURI) {
            var binary = atob(dataURI.split(',')[1]);
            var array = [];
            for (var i = 0; i < binary.length; i++) {
                array.push(binary.charCodeAt(i));
            }
            return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
        }
    }, {
        key: 'removeImage',
        value: function removeImage(img) {
            var _this4 = this;

            this.props.user_prescriptions[0].img_path_ids.map(function (data, i) {
                if (data.image == img) {
                    _this4.props.removePrescription(img);
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var Uploaded_image_data = [];
            var img_url = [];
            var pdf_url = [];
            if (this.props.user_prescriptions && this.props.user_prescriptions.length > 0) {
                this.props.user_prescriptions[0].img_path_ids.map(function (data, i) {
                    if (data.image.includes('pdf')) {
                        pdf_url.push(data.image);
                    } else {
                        img_url.push(data.image);
                    }
                });
            }
            var show_upload = true;
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
                                { className: 'ins-proof-upload-btn', onClick: function onClick() {
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
                            img_url && img_url.length > 0 ? img_url.map(function (data, i) {
                                return _react2.default.createElement(
                                    'div',
                                    { key: i, className: 'ins-prf-img-grd' },
                                    _react2.default.createElement('img', { className: 'img-fluid ins-up-img-ic', src: data }),
                                    _react2.default.createElement('img', { className: 'ins-prf-cls', onClick: _this5.removeImage.bind(_this5, data), src: 'https://cdn.docprime.com/cp/assets/img/icons/close.png' })
                                );
                            }) : '',
                            pdf_url && pdf_url.length > 0 ? pdf_url.map(function (data, i) {
                                return _react2.default.createElement(
                                    'div',
                                    { className: 'ins-prf-img-grd', key: i },
                                    _react2.default.createElement('img', { className: 'img-fluid ins-up-img-ic', src: "/assets" + "/img/pdf.jpg" }),
                                    _react2.default.createElement('img', { className: 'ins-prf-cls', onClick: _this5.removeImage.bind(_this5, data), src: 'https://cdn.docprime.com/cp/assets/img/icons/close.png' })
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
                                { className: 'ins-prf-addMore', onClick: function onClick() {
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
    }]);

    return UploadPrescription;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _index2 = __webpack_require__(/*! ../../components/diagnosis/bookingSummary/index.js */ "./dev/js/components/diagnosis/bookingSummary/index.js");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var BookingSummary = function (_React$Component) {
    _inherits(BookingSummary, _React$Component);

    function BookingSummary(props) {
        _classCallCheck(this, BookingSummary);

        var _this = _possibleConstructorReturn(this, (BookingSummary.__proto__ || Object.getPrototypeOf(BookingSummary)).call(this, props));

        _this.state = {
            agent_selected_plan_id: null
        };
        return _this;
    }

    _createClass(BookingSummary, [{
        key: 'fetchData',
        value: function fetchData(props) {
            var parsed = queryString.parse(props.location.search);

            var lab_id = props.selectedLab || props.match.params.id || parsed.lab_id;

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
                var testIds = props.lab_test_data[lab_id] || [];
                testIds = testIds.map(function (x) {
                    return x.id;
                });
                var forceAddTestids = false;
                if (parsed.test_ids) {
                    testIds = parsed.test_ids.split(',');
                    forceAddTestids = true;
                }
                var dataParams = {
                    booking_page: true
                };
                props.getLabById(lab_id, testIds, forceAddTestids, dataParams);
            }
        }
    }, {
        key: 'singleFlowLogin',
        value: function singleFlowLogin(props, lab_id) {
            var _this2 = this;

            // this.props.clearAllTests()
            //Auto Select on Agent Login URL
            var parsed = queryString.parse(props.location.search);
            if (parsed && parsed.dummy_id) {
                var extraParams = {
                    dummy_id: parsed.dummy_id
                };
                props.retrieveMembersData('SINGLE_PURCHASE', extraParams, function (resp) {
                    // to retrieve already pushed member data in case of agent or proposer it self
                    if (resp && resp.data) {
                        _this2.setLabBooking(resp.data);
                        _this2.setState({ agent_selected_plan_id: resp.data.plus_plan });
                    }
                    setTimeout(function () {
                        var testIds = props.lab_test_data[lab_id] || [];
                        testIds = testIds.map(function (x) {
                            return x.id;
                        });
                        var forceAddTestids = false;
                        if (parsed.test_ids) {
                            testIds = parsed.test_ids.split(',');
                            forceAddTestids = true;
                        }
                        var dataParams = {
                            booking_page: true
                        };
                        props.getLabById(lab_id, testIds, forceAddTestids, dataParams);
                    }, 100);
                });
            }
        }
    }, {
        key: 'setLabBooking',
        value: function setLabBooking(data) {
            //On Agent/Direct Login, set data for the lab page,e.g select timeslot, profileid, pickup type, tests, coupons  
            var coupon_data = data.coupon_data;
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
                var coupon_id = '';
                var is_cashback = false;

                if (coupon_code && Object.keys(coupon_code).length) {
                    coupon_id = coupon_code.id;
                    is_cashback = coupon_code.is_cashback;
                }
                if (coupon_code) {
                    this.props.applyCoupons('2', { code: coupon_data.coupon_code, coupon_id: coupon_id, is_cashback: is_cashback }, coupon_id, data.labId);
                }
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            if (props.selectedLab != this.props.selectedLab) {
                this.fetchData(props);
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.fetchData(this.props);
        }
    }, {
        key: 'render',
        value: function render() {

            var parsed = queryString.parse(this.props.location.search);
            var lab_id = this.props.selectedLab || this.props.match.params.id || parsed.lab_id;

            return _react2.default.createElement(_index3.default, _extends({}, this.props, { selectedLab: lab_id, agent_selected_plan_id: this.state.agent_selected_plan_id, fetchData: this.fetchData.bind(this) }));
        }
    }]);

    return BookingSummary;
}(_react2.default.Component);

BookingSummary.contextTypes = {
    router: function router() {
        return null;
    }
};


var mapStateToProps = function mapStateToProps(state) {
    var _state$SEARCH_CRITERI = state.SEARCH_CRITERIA_LABS,
        selectedCriterias = _state$SEARCH_CRITERI.selectedCriterias,
        lab_test_data = _state$SEARCH_CRITERI.lab_test_data,
        corporateCoupon = _state$SEARCH_CRITERI.corporateCoupon,
        pincode = _state$SEARCH_CRITERI.pincode,
        saved_patient_details = _state$SEARCH_CRITERI.saved_patient_details,
        selectedLocation = _state$SEARCH_CRITERI.selectedLocation;
    var _state$USER = state.USER,
        selectedProfile = _state$USER.selectedProfile,
        profiles = _state$USER.profiles,
        address = _state$USER.address,
        userWalletBalance = _state$USER.userWalletBalance,
        userCashbackBalance = _state$USER.userCashbackBalance,
        isUserCared = _state$USER.isUserCared,
        defaultProfile = _state$USER.defaultProfile,
        ipd_chat = _state$USER.ipd_chat,
        common_utm_tags = _state$USER.common_utm_tags,
        is_any_user_buy_gold = _state$USER.is_any_user_buy_gold,
        user_loggedIn_number = _state$USER.user_loggedIn_number;

    var LABS = state.LABS;
    var _state$LAB_SEARCH = state.LAB_SEARCH,
        selectedSlot = _state$LAB_SEARCH.selectedSlot,
        selectedAppointmentType = _state$LAB_SEARCH.selectedAppointmentType,
        selectedAddress = _state$LAB_SEARCH.selectedAddress,
        labCoupons = _state$LAB_SEARCH.labCoupons,
        disCountedLabPrice = _state$LAB_SEARCH.disCountedLabPrice,
        couponAutoApply = _state$LAB_SEARCH.couponAutoApply,
        user_prescriptions = _state$LAB_SEARCH.user_prescriptions,
        is_prescription_needed = _state$LAB_SEARCH.is_prescription_needed,
        selectedDateFormat = _state$LAB_SEARCH.selectedDateFormat,
        show_vip_non_login_card = _state$LAB_SEARCH.show_vip_non_login_card,
        payment_type = _state$LAB_SEARCH.payment_type;
    var _state$VIPCLUB = state.VIPCLUB,
        labGoldPredictedPrice = _state$VIPCLUB.labGoldPredictedPrice,
        selected_vip_plan = _state$VIPCLUB.selected_vip_plan,
        show_lab_payment_mode = _state$VIPCLUB.show_lab_payment_mode;


    return {
        corporateCoupon: corporateCoupon,
        selectedCriterias: selectedCriterias,
        lab_test_data: lab_test_data,
        LABS: LABS,
        selectedProfile: selectedProfile, profiles: profiles, selectedSlot: selectedSlot, selectedAppointmentType: selectedAppointmentType, address: address, selectedAddress: selectedAddress, labCoupons: labCoupons, disCountedLabPrice: disCountedLabPrice,
        couponAutoApply: couponAutoApply, userWalletBalance: userWalletBalance, userCashbackBalance: userCashbackBalance, pincode: pincode, isUserCared: isUserCared, defaultProfile: defaultProfile, saved_patient_details: saved_patient_details, user_prescriptions: user_prescriptions, ipd_chat: ipd_chat, is_prescription_needed: is_prescription_needed, selectedDateFormat: selectedDateFormat, selectedLocation: selectedLocation, common_utm_tags: common_utm_tags, show_vip_non_login_card: show_vip_non_login_card,
        is_any_user_buy_gold: is_any_user_buy_gold, labGoldPredictedPrice: labGoldPredictedPrice, selected_vip_plan: selected_vip_plan, payment_type: payment_type, show_lab_payment_mode: show_lab_payment_mode, user_loggedIn_number: user_loggedIn_number
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        selectLabTimeSLot: function selectLabTimeSLot(slot, reschedule, dateParam) {
            return dispatch((0, _index.selectLabTimeSLot)(slot, reschedule, dateParam));
        },
        getUserProfile: function getUserProfile() {
            return dispatch((0, _index.getUserProfile)());
        },
        getLabById: function getLabById(labId, testIds, forceAddTestids, dataParams) {
            return dispatch((0, _index.getLabById)(labId, testIds, forceAddTestids, dataParams));
        },
        selectLabAppointmentType: function selectLabAppointmentType(type) {
            return dispatch((0, _index.selectLabAppointmentType)(type));
        },
        getUserAddress: function getUserAddress() {
            return dispatch((0, _index.getUserAddress)());
        },
        selectPickupAddress: function selectPickupAddress(address) {
            return dispatch((0, _index.selectPickupAddress)(address));
        },
        createLABAppointment: function createLABAppointment(postData, callback) {
            return dispatch((0, _index.createLABAppointment)(postData, callback));
        },
        sendAgentBookingURL: function sendAgentBookingURL(orderId, type, purchase_type, query_data, extraParams, cb) {
            return dispatch((0, _index.sendAgentBookingURL)(orderId, type, purchase_type, query_data, extraParams, cb));
        },
        removeLabCoupons: function removeLabCoupons(labId, couponId) {
            return dispatch((0, _index.removeLabCoupons)(labId, couponId));
        },
        applyLabCoupons: function applyLabCoupons(productId, couponCode, couponId, labId, dealPrice, test_ids, profile_id, cart_item, callback) {
            return dispatch((0, _index.applyLabCoupons)(productId, couponCode, couponId, labId, dealPrice, test_ids, profile_id, cart_item, callback));
        },
        resetLabCoupons: function resetLabCoupons() {
            return dispatch((0, _index.resetLabCoupons)());
        },
        getCoupons: function getCoupons(data) {
            return dispatch((0, _index.getCoupons)(data));
        },
        applyCoupons: function applyCoupons(productId, couponData, couponId, labId, callback) {
            return dispatch((0, _index.applyCoupons)(productId, couponData, couponId, labId, callback));
        },
        setCorporateCoupon: function setCorporateCoupon(coupon) {
            return dispatch((0, _index.setCorporateCoupon)(coupon));
        },
        createProfile: function createProfile(postData, cb) {
            return dispatch((0, _index.createProfile)(postData, cb));
        },
        sendOTP: function sendOTP(number, viaSms, viaWhatsapp, message_type, cb) {
            return dispatch((0, _index.sendOTP)(number, viaSms, viaWhatsapp, message_type, cb));
        },
        submitOTP: function submitOTP(number, otp, extraParamsData, cb) {
            return dispatch((0, _index.submitOTP)(number, otp, extraParamsData, cb));
        },
        fetchTransactions: function fetchTransactions() {
            return dispatch((0, _index.fetchTransactions)());
        },
        savePincode: function savePincode(pincode) {
            return dispatch((0, _index.savePincode)(pincode));
        },
        addToCart: function addToCart(product_id, data) {
            return dispatch((0, _index.addToCart)(product_id, data));
        },
        getCartItems: function getCartItems() {
            return dispatch((0, _index.getCartItems)());
        },
        editUserProfile: function editUserProfile(profileData, profileId, cb) {
            return dispatch((0, _index.editUserProfile)(profileData, profileId, cb));
        },
        clearExtraTests: function clearExtraTests() {
            return dispatch((0, _index.clearExtraTests)());
        },
        selectSearchType: function selectSearchType(type) {
            return dispatch((0, _index.selectSearchType)(type));
        },
        patientDetails: function patientDetails(criteria) {
            return dispatch((0, _index.patientDetails)(criteria));
        },
        uploadPrescription: function uploadPrescription(profileData, cb) {
            return dispatch((0, _index.uploadPrescription)(profileData, cb));
        },
        savePrescription: function savePrescription(imgUrl, cb) {
            return dispatch((0, _index.savePrescription)(imgUrl, cb));
        },
        removePrescription: function removePrescription(criteria) {
            return dispatch((0, _index.removePrescription)(criteria));
        },
        clearPrescriptions: function clearPrescriptions() {
            return dispatch((0, _index.clearPrescriptions)());
        },
        preBooking: function preBooking(slot) {
            return dispatch((0, _index.preBooking)(slot));
        },
        saveAvailNowInsurance: function saveAvailNowInsurance(data) {
            return dispatch((0, _index.saveAvailNowInsurance)(data));
        },
        unSetCommonUtmTags: function unSetCommonUtmTags(type, tag) {
            return dispatch((0, _index.unSetCommonUtmTags)(type, tag));
        },
        sendSPOAgentBooking: function sendSPOAgentBooking(postData, cb) {
            return dispatch((0, _index.sendSPOAgentBooking)(postData, cb));
        },
        setCommonUtmTags: function setCommonUtmTags(type, tag) {
            return dispatch((0, _index.setCommonUtmTags)(type, tag));
        },
        toggleDiagnosisCriteria: function toggleDiagnosisCriteria(type, criteria) {
            return dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria));
        },
        getLabVipGoldPlans: function getLabVipGoldPlans(dataParams, cb) {
            return dispatch((0, _index.getLabVipGoldPlans)(dataParams, cb));
        },
        selectVipClubPlan: function selectVipClubPlan(type, selectedPlan, cb) {
            return dispatch((0, _index.selectVipClubPlan)(type, selectedPlan, cb));
        },
        select_lab_payment_type: function select_lab_payment_type(type) {
            return dispatch((0, _index.select_lab_payment_type)(type));
        },
        pushMembersData: function pushMembersData(criteria, cb) {
            return dispatch((0, _index.pushMembersData)(criteria, cb));
        },
        retrieveMembersData: function retrieveMembersData(type, extraParams, callback) {
            return dispatch((0, _index.retrieveMembersData)(type, extraParams, callback));
        },
        clearAllTests: function clearAllTests() {
            return dispatch((0, _index.clearAllTests)());
        },
        selectProfile: function selectProfile(id) {
            return dispatch((0, _index.selectProfile)(id));
        },
        NonIpdBookingLead: function NonIpdBookingLead(data, cb) {
            return dispatch((0, _index.NonIpdBookingLead)(data, cb));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BookingSummary);

/***/ }),

/***/ "./node_modules/compress.js/index.js":
/*!*******************************************!*\
  !*** ./node_modules/compress.js/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var a=n[i]={exports:{},id:i,loaded:!1};return t[i].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){var i,a,r;!function(o,u){a=[t,n(1),n(2),n(3),n(4),n(5),n(6)],i=u,r="function"==typeof i?i.apply(e,a):i,!(void 0!==r&&(t.exports=r))}(this,function(t,e,n,i,a,r,o){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}function s(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var d=u(e),l=u(n),c=u(i),h=u(a),v=u(r),p=u(o),g=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),w=function(){function t(){f(this,t)}return g(t,[{key:"attach",value:function(t,e){var n=this;return new Promise(function(i,a){var r=document.querySelector(t);r.setAttribute("accept","image/*"),r.addEventListener("change",function(t){var a=n.compress([].concat(s(t.target.files)),e);i(a)},!1)})}},{key:"compress",value:function(t,e){function n(t,e){var n=new v.default(e);return n.start=window.performance.now(),n.alt=t.name,n.ext=t.type,n.startSize=t.size,p.default.orientation(t).then(function(e){return n.orientation=e,c.default.load(t)}).then(i(n))}function i(t){return function(e){return h.default.load(e).then(function(e){if(t.startWidth=e.naturalWidth,t.startHeight=e.naturalHeight,t.resize){var n=h.default.resize(t.maxWidth,t.maxHeight)(e.naturalWidth,e.naturalHeight),i=n.width,a=n.height;t.endWidth=i,t.endHeight=a}else t.endWidth=e.naturalWidth,t.endHeight=e.naturalHeight;return l.default.imageToCanvas(t.endWidth,t.endHeight,t.orientation)(e)}).then(function(e){return t.iterations=1,t.base64prefix=d.default.prefix(t.ext),a(e,t.startSize,t.quality,t.size,t.minQuality,t.iterations)}).then(function(e){return t.finalSize=d.default.size(e),d.default.data(e)}).then(function(e){t.end=window.performance.now();var n=t.end-t.start;return{data:e,prefix:t.base64prefix,elapsedTimeInSeconds:n/1e3,alt:t.alt,initialSizeInMb:l.default.size(t.startSize).MB,endSizeInMb:l.default.size(t.finalSize).MB,ext:t.ext,quality:t.quality,endWidthInPx:t.endWidth,endHeightInPx:t.endHeight,initialWidthInPx:t.startWidth,initialHeightInPx:t.startHeight,sizeReducedInPercent:(t.startSize-t.finalSize)/t.startSize*100,iterations:t.iterations}})}}function a(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments[3],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=arguments[5],u=l.default.canvasToBase64(t,n),s=d.default.size(u);return o+=1,s>i?a(t,s,n-.1,i,r,o):n>r?a(t,s,n-.1,i,r,o):n<.5?u:u}return Promise.all(t.map(function(t){return n(t,e)}))}}],[{key:"convertBase64ToFile",value:function(t,e){return l.default.base64ToFile(t,e)}}]),t}();t.exports=w})},function(t,e,n){var i,a,r;!function(n,o){a=[e],i=o,r="function"==typeof i?i.apply(e,a):i,!(void 0!==r&&(t.exports=r))}(this,function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(t){var e=t.replace(/^data:image\/\w+;base64,/,"").length;return(e-814)/1.37},n=function(t){return t.split(";")[0].match(/jpeg|png|gif/)[0]},i=function(t){return t.replace(/^data:image\/\w+;base64,/,"")},a=function(t){return"data:"+t+";base64,"};t.default={size:e,mime:n,data:i,prefix:a}})},function(t,e,n){var i,a,r;!function(n,o){a=[e],i=o,r="function"==typeof i?i.apply(e,a):i,!(void 0!==r&&(t.exports=r))}(this,function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"image/jpeg",n=window.atob(t),i=[],a=0;a<n.length;a++)i[a]=n.charCodeAt(a);return new window.Blob([new Uint8Array(i)],{type:e})},n=function(t,e,n){var i=document.createElement("canvas"),a=i.getContext("2d");return i.width=t,i.height=e,function(r){if(!n||n>8)return a.drawImage(r,0,0,i.width,i.height),i;switch(n>4&&(i.width=e,i.height=t),n){case 2:a.translate(t,0),a.scale(-1,1);break;case 3:a.translate(t,e),a.rotate(Math.PI);break;case 4:a.translate(0,e),a.scale(1,-1);break;case 5:a.rotate(.5*Math.PI),a.scale(1,-1);break;case 6:a.rotate(.5*Math.PI),a.translate(0,-e);break;case 7:a.rotate(.5*Math.PI),a.translate(t,-e),a.scale(-1,1);break;case 8:a.rotate(-.5*Math.PI),a.translate(-t,0)}return n>4?a.drawImage(r,0,0,i.height,i.width):a.drawImage(r,0,0,i.width,i.height),i}},i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.75,n=t.toDataURL("image/jpeg",e);return n},a=function(t){return{KB:t/1e3,MB:t/1e6}};t.default={base64ToFile:e,imageToCanvas:n,canvasToBase64:i,size:a}})},function(t,e,n){var i,a,r;!function(n,o){a=[e],i=o,r="function"==typeof i?i.apply(e,a):i,!(void 0!==r&&(t.exports=r))}(this,function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(t){return new Promise(function(e,n){var i=new window.FileReader;i.addEventListener("load",function(t){e(t.target.result)},!1),i.addEventListener("error",function(t){n(t)},!1),i.readAsDataURL(t)})};t.default={load:e}})},function(t,e,n){var i,a,r;!function(n,o){a=[e],i=o,r="function"==typeof i?i.apply(e,a):i,!(void 0!==r&&(t.exports=r))}(this,function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(t){return new Promise(function(e,n){var i=new window.Image;i.addEventListener("load",function(){e(i)},!1),i.addEventListener("error",function(t){n(t)},!1),i.src=t})},n=function(t,e){return function(n,i){if(!t&&!e)return{width:n,height:i};var a=n/i,r=t/e,o=void 0,u=void 0;return a>r?(o=Math.min(n,t),u=o/a):(u=Math.min(i,e),o=u*a),{width:o,height:u}}};t.default={load:e,resize:n}})},function(t,e,n){var i,a,r;!function(n,o){a=[e],i=o,r="function"==typeof i?i.apply(e,a):i,!(void 0!==r&&(t.exports=r))}(this,function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function t(n){var i=n.quality,a=void 0===i?.75:i,r=n.size,o=void 0===r?2:r,u=n.maxWidth,s=void 0===u?1920:u,f=n.maxHeight,d=void 0===f?1920:f,l=n.resize,c=void 0===l||l;e(this,t),this.start=window.performance.now(),this.end=null,this.alt=null,this.ext=null,this.startSize=null,this.startWidth=null,this.startHeight=null,this.size=1e3*o*1e3,this.endSize=null,this.endWidth=null,this.endHeight=null,this.iterations=0,this.base64prefix=null,this.quality=a,this.resize=c,this.maxWidth=s,this.maxHeight=d,this.orientation=1};t.default=n})},function(t,e,n){var i,a,r;!function(n,o){a=[e],i=o,r="function"==typeof i?i.apply(e,a):i,!(void 0!==r&&(t.exports=r))}(this,function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(t){return new Promise(function(e,n){var i=new window.FileReader;i.onload=function(t){var n=new DataView(t.target.result);65496!==n.getUint16(0,!1)&&e(-2);for(var i=n.byteLength,a=2;a<i;){var r=n.getUint16(a,!1);if(a+=2,65505===r){1165519206!==n.getUint32(a+=2,!1)&&e(-1);var o=18761===n.getUint16(a+=6,!1);a+=n.getUint32(a+4,o);var u=n.getUint16(a,o);a+=2;for(var s=0;s<u;s++)274===n.getUint16(a+12*s,o)&&e(n.getUint16(a+12*s+8,o))}else{if(65280!==(65280&r))break;a+=n.getUint16(a,!1)}}e(-1)},i.readAsArrayBuffer(t.slice(0,65536))})};t.default={orientation:e}})}])});
//# sourceMappingURL=index.js.map

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvYm9va2luZ1N1bW1hcnkvQm9va2luZ1N1bW1hcnlWaWV3TmV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9ib29raW5nU3VtbWFyeS9QaW5jb2RlRXJyb3JQb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvYm9va2luZ1N1bW1hcnkvUGluY29kZVBvcHVwLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9ib29raW5nU3VtbWFyeS9WaXNpdFRpbWVOZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL2Jvb2tpbmdTdW1tYXJ5L2NhbmNlbGxhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvYm9va2luZ1N1bW1hcnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL2Jvb2tpbmdTdW1tYXJ5L3BheW1lbnRTdW1tYXJ5LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9ib29raW5nU3VtbWFyeS9waWNrdXBBZGRyZXNzLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9ib29raW5nU3VtbWFyeS91cGxvYWRQcmVzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvZGlhZ25vc2lzL0Jvb2tpbmdTdW1tYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb21wcmVzcy5qcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJCb29raW5nU3VtbWFyeVZpZXdOZXciLCJwcm9wcyIsImNsb3NlRXJyb3JQb3B1cCIsInNldFN0YXRlIiwiZXJyb3IiLCJ0b2dnbGVHb2xkUGxhbnMiLCJwbGFuIiwiZGF0YSIsIkdUTSIsImdldFVzZXJJZCIsImlkIiwic2VuZEV2ZW50Iiwic2VsZWN0VmlwQ2x1YlBsYW4iLCJ0b2dnbGVHb2xkUHJpY2VQb3B1cCIsInZhbHVlIiwic2hvd0dvbGRQcmljZUxpc3QiLCJnb1RvR29sZFBhZ2UiLCJoaXN0b3J5IiwicHVzaCIsImdldERhdGFBZnRlckxvZ2luIiwiZmV0Y2hEYXRhIiwibGFiR29sZFByZWRpY3RlZFByaWNlIiwibGVuZ3RoIiwic2VsZWN0ZWRQYWNrYWdlIiwiZmlsdGVyIiwieCIsInN0YXRlIiwic2VsZWN0ZWRWaXBHb2xkUGFja2FnZUlkIiwiaXNfc2VsZWN0ZWQiLCJwYXJzZWQiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwibGFiX2lkIiwic2VsZWN0ZWRMYWIiLCJwYXltZW50RGF0YSIsImxvYWRpbmciLCJvcGVuQ2FuY2VsbGF0aW9uIiwib3BlblBheW1lbnRTdW1tYXJ5Iiwib3JkZXJfaWQiLCJzaG93VGltZUVycm9yIiwic2hvd0FkZHJlc3NFcnJvciIsImNvdXBvbkNvZGUiLCJjb3Vwb25JZCIsInNjcm9sbFBvc2l0aW9uIiwicHJvZmlsZURhdGFGaWxsZWQiLCJpc19jYXNoYmFjayIsInVzZV93YWxsZXQiLCJzaG93UGluY29kZVBvcHVwIiwiY2FydF9pdGVtIiwicGluY29kZSIsIndoYXRzYXBwX29wdGluIiwicGluY29kZU1pc21hdGNoRXJyb3IiLCJzaG93Q29uZmlybWF0aW9uUG9wdXAiLCJjb3Vwb25fbG9hZGluZyIsInNlb0ZyaWVuZGx5IiwibWF0Y2giLCJ1cmwiLCJpbmNsdWRlcyIsImlzRW1haWxOb3RWYWxpZCIsImlzX3BheW1lbnRfY291cG9uX2FwcGxpZWQiLCJpc19zcG9fYXBwb2ludG1lbnQiLCJwYXlfYnRuX2xvYWRpbmciLCJpc0RvYk5vdFZhbGlkIiwic2hvd19sZW5zZml0X3BvcHVwIiwibGVuc2ZpdF9jb3Vwb25zIiwibGVuc2ZpdF9kZWNsaW5lIiwiaXNMZW5zZml0U3BlY2lmaWMiLCJzZWxlY3RlZFRlc3RJZHMiLCJzZWxlY3RlZF92aXBfcGxhbiIsIk9iamVjdCIsImtleXMiLCJwYXltZW50QnRuQ2xpY2tlZCIsImVuYWJsZURyb3BPZmZsZWFkIiwiZGlzYWJsZV9wYWdlIiwiaXNfbGVhZF9lbmFibGVkIiwid2hpY2giLCJlIiwidGFyZ2V0IiwiY2hlY2tlZCIsIndpbmRvdyIsInNjcm9sbFRvIiwic2V0VGltZW91dCIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJyZXBsYWNlIiwicGF0aG5hbWUiLCJnZXRWaXBHb2xkUHJpY2VMaXN0IiwicGF0aWVudCIsInNlbGVjdGVkUHJvZmlsZSIsInByb2ZpbGVzIiwiaXNEdW1teVVzZXIiLCJ1dG1fc291cmNlIiwic2Vzc2lvbklkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwic3BvX3RhZ3MiLCJ1dG1fdGFncyIsInV0bV90ZXJtIiwidXRtX21lZGl1bSIsInV0bV9jYW1wYWlnbiIsInRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsImN1cnJlbnRTZXNzaW9uSWQiLCJzZXRDb21tb25VdG1UYWdzIiwiY3VycmVudFRpbWUiLCJnZXRJdGVtIiwiY29tbW9uX3V0bV90YWdzIiwidHlwZSIsInNlc3Npb25WYWwiLCJwYXJzZUludCIsInRpbWVfb2Zmc2V0IiwidW5TZXRDb21tb25VdG1UYWdzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsaWNrIiwidGVzdF9pZHMiLCJMQUJTIiwidGVzdHMiLCJtYXAiLCJ0ZXN0X2lkIiwiZXh0cmFQYXJhbXMiLCJkdW1teV9pZCIsImFnZW50X3NlbGVjdGVkX3BsYW5faWQiLCJwYXltZW50X3R5cGUiLCJnZXRMYWJWaXBHb2xkUGxhbnMiLCJuZXh0UHJvcHMiLCJTVE9SQUdFIiwiY2hlY2tBdXRoIiwiaXNQaWNrdXBTdGF0dXNTYW1lIiwic2VsZWN0ZWRBcHBvaW50bWVudFR5cGUiLCJyX3BpY2t1cCIsInBfcGlja3VwIiwicmVzZXRMYWJDb3Vwb25zIiwibmV3VGVzdHNBZGRlZCIsInRlc3QiLCJpbmRleE9mIiwic2VsZWN0ZWRTbG90Iiwic2VsZWN0ZWRUZXN0c1RpbWVTbG90IiwiY29tbW9uVGVzdElkIiwibmV3VGVzdHMiLCJpc19wYXRob2xvZ3kiLCJmaW5hbFNlbGVjdGVkU2xvdCIsInRlc3RzT2JqIiwidGVzdF9uYW1lIiwibmFtZSIsInNlbGVjdExhYlRpbWVTTG90IiwiY29ycG9yYXRlQ291cG9uIiwiY29ycG9yYXRlIiwidHdwIiwiaSIsImhpZGVfcHJpY2UiLCJsYWJDb3Vwb25zIiwicmVtb3ZlTGFiQ291cG9ucyIsImNvdXBvbl9pZCIsInNldENvcnBvcmF0ZUNvdXBvbiIsImdldExhYlByaWNlRGF0YSIsImZpbmFsUHJpY2UiLCJsYWJDb3Vwb24iLCJjb2RlIiwiYXBwbHlDb3Vwb25zIiwic3VjY2VzcyIsImdldFNlbGVjdGVkVXNlckRhdGEiLCJ0b3RhbF9hbW91bnRfcGF5YWJsZV93aXRob3V0X2NvdXBvbiIsImFwcGx5TGFiQ291cG9ucyIsImVyciIsImlzX3BheW1lbnRfc3BlY2lmaWMiLCJnZXRBbmRBcHBseUJlc3RDb3Vwb25zIiwiY291cG9ucyIsInZhbGlkQ291cG9uIiwiaW5kZXgiLCJ2YWxpZCIsImlzTGVuc2ZpdCIsImdldENvdXBvbnMiLCJwcm9kdWN0SWQiLCJkZWFsX3ByaWNlIiwicHJvZmlsZV9pZCIsImNiIiwibGVuc0ZpdFByb3BzIiwiZ2V0VmFsaWRDb3Vwb24iLCJpc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCIsInByaWNlIiwidmlwIiwiaXNfdmlwX21lbWJlciIsImNvdmVyZWRfdW5kZXJfdmlwIiwidmlwX2Ftb3VudCIsInZpcF9jb252ZW5pZW5jZV9hbW91bnQiLCJwYXJzZUZsb2F0IiwibGFiIiwiaG9tZV9waWNrdXBfY2hhcmdlcyIsInNsb3QiLCJzZWxlY3RMYWJBcHBvaW50bWVudFR5cGUiLCJ3aGVyZSIsImlzX2luc3VyYW5jZV9hcHBsaWNhYmxlIiwic2VsZWN0VGltZUVycm9yIiwiaXNfdGh5cm9jYXJlIiwiYWRkcmVzcyIsImNlbnRlcl92aXNpdF9lbmFibGVkIiwiaXNfaG9tZV9jaGFyZ2VzX2FwcGxpY2FibGUiLCJuYXZpZ2F0ZVRvIiwiYmluZCIsInByb2ZpbGVEYXRhQ29tcGxldGVkIiwiY2xlYXJUZXN0Rm9ySW5zdXJlZCIsImNoZWNrUHJlc2NyaXB0aW9uIiwibm9uSXBkTGVhZHMiLCJ0b2dnbGUiLCJnZW5kZXIiLCJwaG9uZU51bWJlciIsImVtYWlsIiwib3RwVmVyaWZ5U3VjY2VzcyIsImRvYiIsInBhdGllbnREZXRhaWxzIiwiY2xlYXJfZGF0YSIsImlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfaW5zdXJhbmNlIiwiaXNfc2VsZWN0ZWRfdXNlcl9pbnN1cmVkIiwic2VsZWN0ZWREYXRlIiwic2VsZWN0ZWRfdGVzdF9pZCIsInByb2ZpbGUiLCJpc19pbnN1cmVkIiwiaW5zdXJhbmNlIiwiaXNfaW5zdXJhbmNlX2NvdmVyZWQiLCJpbnN1cmFuY2VfdGhyZXNob2xkX2Ftb3VudCIsInNlbGVjdGVkQ3JpdGVyaWFzIiwic3RhcnRfZGF0ZSIsImRhdGUiLCJsYWJfdGVzdCIsInByZUJvb2tpbmciLCJjb3Vwb25fZGF0YSIsImxhYklkIiwicG9zdERhdGEiLCJib29raW5nX2RhdGEiLCJnZXRCb29raW5nRGF0YSIsImlzX3NpbmdsZV9mbG93X2xhYiIsImR1bW15X2RhdGFfdHlwZSIsInB1c2hNZW1iZXJzRGF0YSIsInJlc3AiLCJsYW5kaW5nX3VybCIsInNlbmRBZ2VudEJvb2tpbmdVUkwiLCJyZXMiLCJ0ZXN0UGlja2VkIiwiYWRkcmVzc1BpY2tlZCIsImRhdGVQaWNrZWQiLCJhZGRUb0NhcnQiLCJ0b3RhbF9wcmljZSIsInRvdGFsX3dhbGxldF9iYWxhbmNlIiwicHJlc2NyaXB0aW9uUGlja2VkIiwiaXNfc2VsZWN0ZWRfdXNlcl9pbnN1cmFuY2Vfc3RhdHVzIiwidmlwX2lzX3ByZXNjcmlwdGlvbl9yZXF1aXJlZCIsImZvdW5kIiwidmFsaWRhdGVBZGRyZXNzUGluY29kZSIsInNlbGVjdGVkQWRkcmVzc1BpbmNvZGUiLCJzZWxlY3RlZEFkZHJlc3MiLCJkYXRhc2V0IiwiZGlzYWJsZWQiLCJpc192aXBfYXBwbGljYWJsZSIsImlzX3NlbGVjdGVkX3VzZXJfdW5kZXJfdmlwIiwiaXNfdGVzdHNfY292ZXJlZF91bmRlcl92aXAiLCJpc19zZWxlY3RlZF91c2VyX3ZpcCIsImVudHJpZXMiLCJrZXkiLCJpc19wbGFuX2FwcGxpY2FibGUiLCJpc190ZXN0c19jb3ZlcmVkX3VuZGVyX3BsYW4iLCJpc19zZWxlY3RlZF91c2VyX2hhc19hY3RpdmVfcGxhbiIsInNob3dfbGVuc2ZpdCIsImlzVXNlckNhcmVkIiwiaGFzX2FjdGl2ZV9wbGFuIiwiaW5jbHVkZWRfaW5fdXNlcl9wbGFuIiwibGVuc2ZpdF9vZmZlciIsImFwcGxpY2FibGUiLCJjb3Vwb24iLCJwcmVzY3JpcHRpb25JZHMiLCJ1c2VyX3ByZXNjcmlwdGlvbnMiLCJpbWdfcGF0aF9pZHMiLCJpbWdJZCIsImlzQWdlbnQiLCJ0ZXN0SWRzIiwibGFiX3Rlc3RfZGF0YSIsImdldFV0bVRhZ3MiLCJwcmVzY3JpcHRpb25fbGlzdCIsIm11bHRpX3RpbWluZ3NfZW5hYmxlZCIsImZyb21fd2ViIiwidmlzaXRvcl9pbmZvIiwiZ2V0VmlzaXRvckluZm8iLCJ2aXNpdF9pZCIsInZpc2l0b3JfaWQiLCJnZXRBbnlDb29raWUiLCJ0YWdzIiwiaG9zdCIsImlzX3JhZGlvbG9neSIsInN0YXJ0X3RpbWUiLCJpc19ob21lX3BpY2t1cCIsInByb2ZpbGVEYXRhIiwiZWRpdFVzZXJQcm9maWxlIiwiZGlzQ291bnRlZExhYlByaWNlIiwidG9TdHJpbmciLCJzZW5kV2hhdHN1cCIsInNlbmRTaW5nbGVGbG93QWdlbnRCb29raW5nVVJMIiwidGhlbiIsImNhdGNoIiwibWVzc2FnZSIsImFuYWx5dGljRGF0YSIsImNyZWF0ZUxBQkFwcG9pbnRtZW50IiwiY2xlYXJQcmVzY3JpcHRpb25zIiwiaXNfYWdlbnQiLCJvcmRlcklkIiwicGF5bWVudF9yZXF1aXJlZCIsInByb2Nlc3NQYXltZW50Iiwic3RhdHVzIiwiZm9ybSIsInN1Ym1pdCIsInNlbmRTUE9BZ2VudEJvb2tpbmciLCJwcmljZV90b19wYXkiLCJleHRyYUFsbFBhcmFtcyIsInByaWNlX2Zyb21fd2FsbGV0IiwicHJpY2VfZnJvbV9wZyIsImlzX2dvbGRfbWVtYmVyIiwidG90YWxfYW1vdW50X3BheWFibGUiLCJtaW4iLCJzYXZlUGluY29kZSIsInNlbGVjdFNlYXJjaFR5cGUiLCJjaG9pY2UiLCJsYWJEZXRhaWwiLCJ0aHVtYm5haWwiLCJsYWJfdGh1bWJuYWlsIiwic2F2ZUF2YWlsTm93SW5zdXJhbmNlIiwidGVzdF91cmwiLCJldmVudCIsInNlbGVjdGVkX3Rlc3RfaWRzIiwidXJsX3N0cmluZyIsImhyZWYiLCJVUkwiLCJzZWFyY2hfaWQiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJsYXQiLCJsb25nIiwic2VsZWN0ZWRMb2NhdGlvbiIsImdlb21ldHJ5IiwibG5nIiwic3RvcFByb3BhZ2F0aW9uIiwiYXNzaWduIiwiZXh0cmFfdGVzdCIsInJlbW92ZVRlc3QiLCJzZWxlY3RlZExhYlRlc3RzIiwidG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEiLCJ2aXBfZGF0YSIsInZpcF90b3RhbF9hbW91bnQiLCJ2aXBfdG90YWxfY29udmVuaWVuY2VfYW1vdW50IiwidmlwX3RvdGFsX2dvbGRfcHJpY2UiLCJpc19hbGxfZW5hYmxlX2Zvcl92aXAiLCJpc19hbGxfZW5hYmxlX2Zvcl9nb2xkIiwiaXNfZW5hYmxlX2Zvcl92aXAiLCJpc19nb2xkIiwidmlwX2dvbGRfcHJpY2UiLCJpc192aXBfZ29sZF9tZW1iZXIiLCJpc19hbnlfdXNlcl9idXlfZ29sZCIsInVzZXJfcGhvbmVfbnVtYmVyIiwidXNlcl9uYW1lIiwic2VsZWN0ZWRfdGVzdF9uYW1lIiwic2VsZWN0ZWRfdGVzdCIsImN1c3RvbWVyX25hbWUiLCJwaG9uZV9udW1iZXIiLCJsZWFkX3R5cGUiLCJsZWFkX3NvdXJjZSIsImxhYl9uYW1lIiwiZXhpdHBvaW50X3VybCIsInNvdXJjZSIsImRvY3Rvcl9uYW1lIiwiaG9zcGl0YWxfbmFtZSIsInNwZWNpYWx0eSIsInNlbGVjdGVkX3RpbWUiLCJ0aXRsZSIsInNlbGVjdGVkX2RhdGUiLCJOb25JcGRCb29raW5nTGVhZCIsInJlZmVycmVyIiwiZ2NsaWQiLCJ0ZXN0c193aXRoX3ByaWNlIiwiZmluYWxNcnAiLCJhZGRyZXNzX3BpY2tlZF92ZXJpZmllZCIsImlzX2NvcnBvcmF0ZSIsImlzX2RlZmF1bHRfdXNlcl9pbnN1cmVkIiwiaXNfaW5zdXJhbmNlX2J1eV9hYmxlIiwicmFkaW9sb2d5X3Rlc3RzIiwicGF0aG9sb2d5X3Rlc3RzIiwicl9waWNrdXBfaG9tZSIsInJfcGlja3VwX2NlbnRlciIsInBfcGlja3VwX2hvbWUiLCJwX3BpY2t1cF9jZW50ZXIiLCJpc19kZWZhdWx0X3VzZXJfdW5kZXJfdmlwIiwiaXNfc2VsZWN0ZWRfdXNlcl9nb2xkIiwiaW5zdXJhbmNlX3N0YXR1cyIsImlzX3ByZXNjcmlwdGlvbl9uZWVkZWQiLCJkZWZhdWx0UHJvZmlsZSIsImdvbGRfcHJpY2VsaXN0X21ycCIsImdvbGRfcHJpY2VsaXN0X2RlYWxfcHJpY2UiLCJnb2xkX3ByaWNlbGlzdF9jb252ZW5pZW5jZSIsIm1ycCIsImdvbGRfcHJpY2UiLCJjb252ZW5pZW5jZV9jaGFyZ2UiLCJpc19wcmVzY3JpcHRpb25fcmVxdWlyZWQiLCJzaG93X2RldGFpbHMiLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwidGVzdEluZm8iLCJBU1NFVFNfQkFTRV9VUkwiLCJ3aWR0aCIsImZsb2F0IiwicmVzZXQiLCJzZWxlY3RlZFR5cGUiLCJhZGQiLCJhZGRyZXNzX3BpY2tlZCIsImFtdEJlZm9yZUNvdXBvbiIsInRvdGFsX2Ftb3VudF9wYXlhYmxlX25vbl9wbGFuX3VzZXIiLCJkaXNwbGF5X3JhZGlvX2NvZF9wcmljZSIsImlzX3ZpcF9nb2xkX2FwcGxpY2FibGUiLCJ1c2VyV2FsbGV0QmFsYW5jZSIsInVzZXJDYXNoYmFja0JhbGFuY2UiLCJpc19hZGRfdG9fY2FyZCIsInRvdGFsX3Rlc3RfY291bnQiLCJpc190aW1lX3NlbGVjdGVkX2Zvcl9hbGxfdGVzdHMiLCJ2aXBfZGlzY291bnRfcHJpY2UiLCJpc19jb3Zlcl91bmRlcl92aXBfZ29sZCIsImN1cnJlbnRUZXN0c0NvdW50Iiwic2hvd0dvbGRUb2dnbGVQYXltZW50TW9kZSIsInNob3dfbGFiX3BheW1lbnRfbW9kZSIsInNlbGVjdF9sYWJfcGF5bWVudF90eXBlIiwiZGlzcGxheV9kb2NwcmltZV9kaXNjb3VudCIsImRpc2FibGVfYWxsX2Jvb2tpbmdzIiwicHJpY2VDb25maXJtYXRpb25Qb3B1cCIsImFwcGx5TGVuc0ZpdENvdXBvbnMiLCJjbG9zZUxlbnNGaXRQb3B1cCIsInZhbCIsInNob3dfdmlwX25vbl9sb2dpbl9jYXJkIiwiZ29Ub1Byb2ZpbGUiLCJjdXJzb3IiLCJtYXJnaW5SaWdodCIsInRvTG93ZXJDYXNlIiwic3BsaXQiLCJnZXRQYXRpZW50RGV0YWlscyIsIm9wZW5UZXN0cyIsInNlYXJjaFRlc3RzIiwiaGFuZGxlUGlja3VwVHlwZSIsImdldFNlbGVjdG9ycyIsImNvbG9yIiwicHJldmVudERlZmF1bHQiLCJ0b3RhbF9hbGxvd2VkX21lbWJlcnMiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJ0b2dnbGVXYWxsZXRVc2UiLCJ0b2dnbGVXaGF0c2FwIiwibWFyZ2luQm90dG9tIiwibWFyZ2luTGVmdCIsImZsZXgiLCJzZXRQaW5jb2RlIiwiY2xpY2tQaW5jb2RlRXJycm9yUG9wVXAiLCJpcGRfY2hhdCIsInNob3dJcGRDaGF0IiwicHJvY2VlZCIsImdldEJvb2tpbmdCdXR0b25UZXh0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJQaW5jb2RlUG9wdXBFcnJvciIsImNsaWNrUG9wVXAiLCJQaW5jb2RlUG91cHVwVmlldyIsInZhbGlkYXRlUGluY29kZSIsInN1Ym1pdFBpbmNvZGUiLCJpbnB1dEhhbmRsZXIiLCJfaGFuZGxlQ29udGludWVQcmVzcyIsIk1PTlRIUyIsIldFRUtfREFZUyIsIlZpc2l0VGltZU5ldyIsImlzX3RoeXJvY2FyZV9sYWIiLCJkYXRlVGltZVNlbGVjdGVkVmFsdWUiLCJzZWxlY3RlZERhdGVGb3JtYXQiLCJnZXRGb3JtYXR0ZWREYXRlIiwiZ2V0RGF0ZUFmdGVyIiwiZGQiLCJnZXREYXRlIiwibW0iLCJnZXRNb250aCIsInl5eXkiLCJnZXRGdWxsWWVhciIsInRvZGF5Iiwic2V0RGF0ZSIsInVuaXF1ZV9jb21tb25fdGVzdHMiLCJ0aW1lRXJyb3IiLCJ0b0RhdGVTdHJpbmciLCJnb1RvVGltZSIsInBvc2l0aW9uIiwiUGlja3VwQWRkcmVzcyIsImFkZHJlc3NTdHIiLCJsYW5kX21hcmsiLCJsb2NhbGl0eSIsImFkZHJlc3NFcnJvciIsInRvcCIsInJpZ2h0IiwiQ29tcHJlc3MiLCJVcGxvYWRQcmVzY3JpcHRpb24iLCJkYXRhVXJsIiwiem9vbUltYWdlVXJsIiwiem9vbUltYWdlIiwib3BlblBkZiIsIm9wZW5QZGZVcmwiLCJpc0xvYWRpbmciLCJmaWxlcyIsImZpbGUiLCJmaW5pc2hDcm9wIiwiY29tcHJlc3MiLCJxdWFsaXR5IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJyZXN1bHRzIiwiaW1nMSIsImJhc2U2NHN0ciIsImltZ0V4dCIsImV4dCIsImNvbnZlcnRCYXNlNjRUb0ZpbGUiLCJnZXRCYXNlNjQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZmlsZV9ibG9iX2RhdGEiLCJkYXRhVVJJdG9CbG9iIiwibWVtX2RhdGEiLCJleGlzdGluZ0RhdGEiLCJpbWdfdGFnIiwiZm9ybV9kYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ1cGxvYWRQcmVzY3JpcHRpb24iLCJ1c2VyIiwiaW1hZ2UiLCJwcmVzY3JpcHRpb25fZmlsZSIsInNhdmVQcmVzY3JpcHRpb24iLCJkYXRhVVJJIiwiYmluYXJ5IiwiYXRvYiIsImFycmF5IiwiY2hhckNvZGVBdCIsIkJsb2IiLCJVaW50OEFycmF5IiwiaW1nIiwicmVtb3ZlUHJlc2NyaXB0aW9uIiwiVXBsb2FkZWRfaW1hZ2VfZGF0YSIsImltZ191cmwiLCJwZGZfdXJsIiwic2hvd191cGxvYWQiLCJwaWNrRmlsZSIsInJlbW92ZUltYWdlIiwiQm9va2luZ1N1bW1hcnkiLCJwYXJhbXMiLCJnZXRVc2VyUHJvZmlsZSIsImdldFVzZXJBZGRyZXNzIiwiZmV0Y2hUcmFuc2FjdGlvbnMiLCJnZXRDYXJ0SXRlbXMiLCJzaW5nbGVGbG93TG9naW4iLCJmb3JjZUFkZFRlc3RpZHMiLCJkYXRhUGFyYW1zIiwiYm9va2luZ19wYWdlIiwiZ2V0TGFiQnlJZCIsInJldHJpZXZlTWVtYmVyc0RhdGEiLCJzZXRMYWJCb29raW5nIiwicGx1c19wbGFuIiwic2VsZWN0UHJvZmlsZSIsImNvdXBvbl9jb2RlIiwiY29udGV4dFR5cGVzIiwicm91dGVyIiwibWFwU3RhdGVUb1Byb3BzIiwiU0VBUkNIX0NSSVRFUklBX0xBQlMiLCJzYXZlZF9wYXRpZW50X2RldGFpbHMiLCJVU0VSIiwidXNlcl9sb2dnZWRJbl9udW1iZXIiLCJMQUJfU0VBUkNIIiwiY291cG9uQXV0b0FwcGx5IiwiVklQQ0xVQiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwicmVzY2hlZHVsZSIsImRhdGVQYXJhbSIsInNlbGVjdFBpY2t1cEFkZHJlc3MiLCJjYWxsYmFjayIsInB1cmNoYXNlX3R5cGUiLCJxdWVyeV9kYXRhIiwiZGVhbFByaWNlIiwiY291cG9uRGF0YSIsImNyZWF0ZVByb2ZpbGUiLCJzZW5kT1RQIiwibnVtYmVyIiwidmlhU21zIiwidmlhV2hhdHNhcHAiLCJtZXNzYWdlX3R5cGUiLCJzdWJtaXRPVFAiLCJvdHAiLCJleHRyYVBhcmFtc0RhdGEiLCJwcm9kdWN0X2lkIiwicHJvZmlsZUlkIiwiY2xlYXJFeHRyYVRlc3RzIiwiY3JpdGVyaWEiLCJpbWdVcmwiLCJ0YWciLCJz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d0JBQXdCLG1CQUFtQix5Q0FBeUMsbUNBQW1DLHNCQUFzQix1QkFBdUIsS0FBSyxZQUFZLElBQUksNERBQTRELEtBQUssMkJBQTJCLHNCQUFzQixNQUFNLHVDQUF1QyxHQUFHLFdBQVcsZUFBZSxFQUFFLEdBQUc7QUFDLy9PLGlDIiwiZmlsZSI6IjM4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9Mb2FkZXInXG5pbXBvcnQgVmlzaXRUaW1lTmV3IGZyb20gJy4vVmlzaXRUaW1lTmV3J1xuaW1wb3J0IFBpY2t1cEFkZHJlc3MgZnJvbSAnLi9waWNrdXBBZGRyZXNzJ1xuaW1wb3J0IENob29zZVBhdGllbnROZXdWaWV3IGZyb20gJy4uLy4uL29wZC9wYXRpZW50RGV0YWlscy9jaG9vc2VQYXRpZW50TmV3J1xuaW1wb3J0IEluaXRpYWxzUGljdHVyZSBmcm9tICcuLi8uLi9jb21tb25zL2luaXRpYWxzUGljdHVyZSdcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi8uLi9jb21tb25zL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9SaWdodEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5cbmltcG9ydCBDYW5jZWxhdGlvblBvbGljeSBmcm9tICcuL2NhbmNlbGxhdGlvbi5qcydcbmltcG9ydCBQYXltZW50U3VtbWFyeSBmcm9tICcuL3BheW1lbnRTdW1tYXJ5LmpzJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBCb29raW5nRXJyb3IgZnJvbSAnLi4vLi4vb3BkL3BhdGllbnREZXRhaWxzL2Jvb2tpbmdFcnJvclBvcFVwLmpzJztcbmltcG9ydCBQaW5jb2RlUG9wdXAgZnJvbSAnLi9QaW5jb2RlUG9wdXAuanMnXG5pbXBvcnQgV2hhdHNBcHBPcHRpblZpZXcgZnJvbSAnLi4vLi4vY29tbW9ucy9XaGF0c0FwcE9wdGluL1doYXRzQXBwT3B0aW5WaWV3LmpzJ1xuaW1wb3J0IFBpbmNvZGVFcnJvclBvcHVwIGZyb20gJy4vUGluY29kZUVycm9yUG9wdXAuanMnXG5pbXBvcnQgQm9va2luZ0NvbmZpcm1hdGlvblBvcHVwIGZyb20gJy4vQm9va2luZ0NvbmZpcm1hdGlvblBvcHVwLmpzJ1xuaW1wb3J0IFVwbG9hZFByZXNjcmlwdGlvbiBmcm9tICcuL3VwbG9hZFByZXNjcmlwdGlvbi5qcydcbmltcG9ydCBQYXltZW50Rm9ybSBmcm9tICcuLi8uLi9jb21tb25zL3BheW1lbnRGb3JtJ1xuaW1wb3J0IExlbnNmaXRQb3B1cCBmcm9tICcuL2xlbnNmaXRQb3B1cC5qcydcbmltcG9ydCBEaXNjbGFpbWVyIGZyb20gJy4uLy4uL2NvbW1vbnMvSG9tZS9zdGF0aWNEaXNjbGFpbWVyLmpzJ1xuaW1wb3J0IFZpcEdvbGRQYWNrYWdlIGZyb20gJy4uLy4uL29wZC9wYXRpZW50RGV0YWlscy9WaXBHb2xkUGFja2FnZS5qcydcblxuY2xhc3MgQm9va2luZ1N1bW1hcnlWaWV3TmV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcblxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IGxhYl9pZCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRMYWJcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWRMYWI6IGxhYl9pZCxcbiAgICAgICAgICAgIHBheW1lbnREYXRhOiBudWxsLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBlcnJvcjogXCJcIixcbiAgICAgICAgICAgIG9wZW5DYW5jZWxsYXRpb246IGZhbHNlLFxuICAgICAgICAgICAgb3BlblBheW1lbnRTdW1tYXJ5OiBmYWxzZSxcbiAgICAgICAgICAgIC8vIG9yZGVyX2lkOiAhIXBhcnNlZC5vcmRlcl9pZCxcbiAgICAgICAgICAgIG9yZGVyX2lkOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dUaW1lRXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd0FkZHJlc3NFcnJvcjogZmFsc2UsXG4gICAgICAgICAgICBjb3Vwb25Db2RlOiAnJyxcbiAgICAgICAgICAgIGNvdXBvbklkOiAnJyxcbiAgICAgICAgICAgIHNjcm9sbFBvc2l0aW9uOiAnJyxcbiAgICAgICAgICAgIHByb2ZpbGVEYXRhRmlsbGVkOiB0cnVlLFxuICAgICAgICAgICAgaXNfY2FzaGJhY2s6IGZhbHNlLFxuICAgICAgICAgICAgdXNlX3dhbGxldDogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dQaW5jb2RlUG9wdXA6IGZhbHNlLFxuICAgICAgICAgICAgY2FydF9pdGVtOiBwYXJzZWQuY2FydF9pdGVtLFxuICAgICAgICAgICAgcGluY29kZTogdGhpcy5wcm9wcy5waW5jb2RlLFxuICAgICAgICAgICAgd2hhdHNhcHBfb3B0aW46IHRydWUsXG4gICAgICAgICAgICBwaW5jb2RlTWlzbWF0Y2hFcnJvcjogZmFsc2UsXG4gICAgICAgICAgICBzaG93Q29uZmlybWF0aW9uUG9wdXA6ICdjbG9zZScsXG4gICAgICAgICAgICBjb3Vwb25fbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBzZW9GcmllbmRseTogdGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoJy1scHAnKSxcbiAgICAgICAgICAgIGlzRW1haWxOb3RWYWxpZDogZmFsc2UsXG4gICAgICAgICAgICBpc19wYXltZW50X2NvdXBvbl9hcHBsaWVkOiBmYWxzZSxcbiAgICAgICAgICAgIGlzX3Nwb19hcHBvaW50bWVudDogZmFsc2UsXG4gICAgICAgICAgICBwYXlfYnRuX2xvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBpc0RvYk5vdFZhbGlkOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dfbGVuc2ZpdF9wb3B1cDogZmFsc2UsXG4gICAgICAgICAgICBsZW5zZml0X2NvdXBvbnM6IG51bGwsXG4gICAgICAgICAgICBsZW5zZml0X2RlY2xpbmU6IGZhbHNlLFxuICAgICAgICAgICAgaXNMZW5zZml0U3BlY2lmaWM6IHBhcnNlZC5pc0xlbnNmaXRTcGVjaWZpYyB8fCBmYWxzZSxcbiAgICAgICAgICAgIHNob3dHb2xkUHJpY2VMaXN0OiBmYWxzZSxcbiAgICAgICAgICAgIHNlbGVjdGVkVGVzdElkczogW10sXG4gICAgICAgICAgICBzZWxlY3RlZFZpcEdvbGRQYWNrYWdlSWQ6IHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4gJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbikubGVuZ3RoID8gdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5pZCA6ICcnLFxuICAgICAgICAgICAgcGF5bWVudEJ0bkNsaWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZW5hYmxlRHJvcE9mZmxlYWQ6IHRydWUsXG4gICAgICAgICAgICBkaXNhYmxlX3BhZ2U6IHRydWUsXG4gICAgICAgICAgICBpc19sZWFkX2VuYWJsZWQ6IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZSh3aGljaCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgW3doaWNoXTogIXRoaXMuc3RhdGVbd2hpY2hdIH0pXG4gICAgfVxuXG4gICAgdG9nZ2xlV2FsbGV0VXNlKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNfcGF5bWVudF9jb3Vwb25fYXBwbGllZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZV93YWxsZXQ6IGZhbHNlIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlX3dhbGxldDogZS50YXJnZXQuY2hlY2tlZCB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICAgICAgaWYgKCFTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH0qL1xuXG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoXCJlcnJvcl9jb2RlXCIpKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiQ291bGQgbm90IGNvbXBsZXRlIHBheW1lbnQsIFRyeSBhZ2FpbiFcIiB9KVxuICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UodGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldFZpcEdvbGRQcmljZUxpc3QodGhpcy5wcm9wcyk7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4uaWQgJiYgKHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4uaWQgIT0gdGhpcy5zdGF0ZS5zZWxlY3RlZFZpcEdvbGRQYWNrYWdlSWQpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRWaXBHb2xkUGFja2FnZUlkOiB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmlkIH0pXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGF0aWVudCA9IG51bGxcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlICYmIHRoaXMucHJvcHMucHJvZmlsZXMgJiYgdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV0gJiYgIXRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdLmlzRHVtbXlVc2VyKSB7XG4gICAgICAgICAgICBwYXRpZW50ID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9maWxlRGF0YUZpbGxlZDogdHJ1ZSB9KVxuICAgICAgICB9XG4gICAgICAgIC8qaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lLXBhdGllbnQtZGV0YWlscy13aWRnZXQnKSkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnRUb3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZS1wYXRpZW50LWRldGFpbHMtd2lkZ2V0JykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgICAgICAgdmFyIGVsZW1lbnRIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZS1wYXRpZW50LWRldGFpbHMtd2lkZ2V0JykuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gZWxlbWVudFRvcCAtIGVsZW1lbnRIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2Nyb2xsUG9zaXRpb246IHNjcm9sbFBvc2l0aW9uIH0pO1xuICAgICAgICB9Ki9cblxuICAgICAgICAvL0FkZCBVVE0gdGFncyBmb3IgYnVpbGRpbmcgdXJsXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnV0bV9zb3VyY2UgJiYgcGFyc2VkLnV0bV9zb3VyY2UgPT0gJ09mZmxpbmVBZmZpbGlhdGUnKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlc3Npb25JZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMykgKiAyMSArIDEwNTBcbiAgICAgICAgICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnc2Vzc2lvbklkVmFsJywgc2Vzc2lvbklkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgc3BvX3RhZ3MgPSB7XG4gICAgICAgICAgICAgICAgICAgIHV0bV90YWdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1dG1fc291cmNlOiBwYXJzZWQudXRtX3NvdXJjZSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0bV90ZXJtOiBwYXJzZWQudXRtX3Rlcm0gfHwgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICB1dG1fbWVkaXVtOiBwYXJzZWQudXRtX21lZGl1bSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0bV9jYW1wYWlnbjogcGFyc2VkLnV0bV9jYW1wYWlnbiB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNlc3Npb25JZDogc2Vzc2lvbklkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc19zcG9fYXBwb2ludG1lbnQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldENvbW1vblV0bVRhZ3MoJ3NwbycsIHNwb190YWdzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vQ2xlYXIgVXRtIHRhZ3MgZm9yIFNQTywgYWZ0ZXIgMTUgbWludXRlc1xuICAgICAgICBsZXQgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UgJiYgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnc2Vzc2lvbklkVmFsJykgJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MgJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MubGVuZ3RoICYmIHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnc3BvJykubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIGxldCBzcG9fdGFncyA9IHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnc3BvJylbMF1cbiAgICAgICAgICAgIGxldCBzZXNzaW9uVmFsID0gcGFyc2VJbnQoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnc2Vzc2lvbklkVmFsJykpXG4gICAgICAgICAgICBpZiAoc3BvX3RhZ3MudGltZSAmJiBzZXNzaW9uVmFsID09IHBhcnNlSW50KHNwb190YWdzLmN1cnJlbnRTZXNzaW9uSWQpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbWVfb2Zmc2V0ID0gKGN1cnJlbnRUaW1lIC0gc3BvX3RhZ3MudGltZSkgLyA2MDAwMFxuICAgICAgICAgICAgICAgIC8vQ2xlYXIgU1BPIHV0bSB0YWdzIGFmdGVyIDE1bWludXRlc1xuICAgICAgICAgICAgICAgIC8vOTAwXG4gICAgICAgICAgICAgICAgaWYgKHRpbWVfb2Zmc2V0ID4gMTgwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudW5TZXRDb21tb25VdG1UYWdzKCdzcG8nKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc19zcG9fYXBwb2ludG1lbnQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNMZW5zZml0U3BlY2lmaWMpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybV9ib29raW5nJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1fYm9va2luZycpLmNsaWNrKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAzMDAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VmlwR29sZFByaWNlTGlzdChwcm9wcykge1xuICAgICAgICBsZXQgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCB0ZXN0X2lkcyA9IFtdXG4gICAgICAgIGlmIChwcm9wcy5MQUJTW3Byb3BzLnNlbGVjdGVkTGFiXSAmJiBwcm9wcy5MQUJTW3Byb3BzLnNlbGVjdGVkTGFiXS50ZXN0cykge1xuICAgICAgICAgICAgdGVzdF9pZHMgPSBwcm9wcy5MQUJTW3Byb3BzLnNlbGVjdGVkTGFiXS50ZXN0cy5tYXAoeCA9PiB4LnRlc3RfaWQpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVGVzdElkczogdGVzdF9pZHMgfSk7XG4gICAgICAgIGxldCBleHRyYVBhcmFtcyA9IHtcbiAgICAgICAgICAgIFwibGFiXCI6IHByb3BzLnNlbGVjdGVkTGFiLFxuICAgICAgICAgICAgXCJsYWJfdGVzdHNcIjogdGVzdF9pZHMsXG4gICAgICAgICAgICBcImdvbGRfdmlwX3BsYW5cIjogW11cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmlkKSB7XG4gICAgICAgICAgICBleHRyYVBhcmFtc1snYWxyZWFkeV9zZWxlY3RlZF9wbGFuJ10gPSB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmlkXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnNlZCAmJiBwYXJzZWQuZHVtbXlfaWQgJiYgdGhpcy5wcm9wcy5hZ2VudF9zZWxlY3RlZF9wbGFuX2lkKSB7XG4gICAgICAgICAgICBleHRyYVBhcmFtc1snYWxyZWFkeV9zZWxlY3RlZF9wbGFuJ10gPSB0aGlzLnByb3BzLmFnZW50X3NlbGVjdGVkX3BsYW5faWRcbiAgICAgICAgfVxuICAgICAgICBleHRyYVBhcmFtc1sncGF5bWVudF90eXBlJ10gPSB0aGlzLnByb3BzLnBheW1lbnRfdHlwZVxuICAgICAgICB0aGlzLnByb3BzLmdldExhYlZpcEdvbGRQbGFucyhleHRyYVBhcmFtcykgLy8gdG8gZ2V0IGdvbGQvdmlwIHBsYW5zIHNwZWNpZmljIHRvIHBhcnRpY3VsYXIgbGFiXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKFNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNhYmxlX3BhZ2U6IGZhbHNlIH0pXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGlzUGlja3VwU3RhdHVzU2FtZSA9IGZhbHNlXG4gICAgICAgIGlmIChuZXh0UHJvcHMuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGUucl9waWNrdXAgPT0gdGhpcy5wcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZS5yX3BpY2t1cCAmJiBuZXh0UHJvcHMuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGUucF9waWNrdXAgPT0gdGhpcy5wcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZS5wX3BpY2t1cCkge1xuICAgICAgICAgICAgaXNQaWNrdXBTdGF0dXNTYW1lID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIC8vVG8gdXBkYXRlIEdvbGQgUGxhbnMgb24gY2hhbmdpbmcgcHJvcHNcbiAgICAgICAgaWYgKG5leHRQcm9wcyAmJiBuZXh0UHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4gJiYgbmV4dFByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmlkICYmIChuZXh0UHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4uaWQgIT0gdGhpcy5zdGF0ZS5zZWxlY3RlZFZpcEdvbGRQYWNrYWdlSWQpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRWaXBHb2xkUGFja2FnZUlkOiBuZXh0UHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4uaWQgfSlcbiAgICAgICAgfVxuICAgICAgICAvKmlmICh0aGlzLnN0YXRlLmVuYWJsZURyb3BPZmZsZWFkICYmIFNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcbiAgICAgICAgICAgIHRoaXMubm9uSXBkTGVhZHMoKVxuICAgICAgICB9Ki9cbiAgICAgICAgaWYgKG5leHRQcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdICYmIG5leHRQcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLnRlc3RzICYmIG5leHRQcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLnRlc3RzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnJlc2V0TGFiQ291cG9ucygpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgJ3BheV9idG5fbG9hZGluZyc6IGZhbHNlIH0pXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAobmV4dFByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0gJiYgbmV4dFByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMgJiYgbmV4dFByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBiYXNlcyBjYXNlc1xuICAgICAgICAgICAgLy9UbyBDaGVjayBpZiBhbnkgbmV3IFRlc3QgQWRkZWRcblxuICAgICAgICAgICAgbGV0IG5ld1Rlc3RzQWRkZWQgPSBmYWxzZVxuICAgICAgICAgICAgbmV4dFByb3BzLkxBQlNbbmV4dFByb3BzLnNlbGVjdGVkTGFiXS50ZXN0cy5tYXAoKHRlc3QpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkVGVzdElkcy5pbmRleE9mKHRlc3QudGVzdF9pZCkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VGVzdHNBZGRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZiAobmV3VGVzdHNBZGRlZCB8fCAodGhpcy5zdGF0ZS5zZWxlY3RlZFRlc3RJZHMubGVuZ3RoICE9IG5leHRQcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLnRlc3RzLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFZpcEdvbGRQcmljZUxpc3QobmV4dFByb3BzKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0lmIGFmdGVyIHNlbGVjdGluZyB0aW1lLCB1c2VyIGFkZCBtb3JlIHRlc3RzIHRoZW4gZm9yIHBhdGhvbG9neSB0ZXN0IHdlIGhhdmUgdG8gZm9yY2UgYWRkIHRoZSBwYXRob2xvZ3kgdGltaW5ncyBcbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHMuc2VsZWN0ZWRTbG90ICYmIG5leHRQcm9wcy5zZWxlY3RlZFNsb3Quc2VsZWN0ZWRUZXN0c1RpbWVTbG90ICYmIE9iamVjdC5rZXlzKG5leHRQcm9wcy5zZWxlY3RlZFNsb3Quc2VsZWN0ZWRUZXN0c1RpbWVTbG90KS5sZW5ndGggJiYgbmV4dFByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgY29tbW9uVGVzdElkID0gbmV4dFByb3BzLnNlbGVjdGVkU2xvdFsncGF0aG9sb2d5J10gPyBuZXh0UHJvcHMuc2VsZWN0ZWRTbG90WydwYXRob2xvZ3knXS50ZXN0X2lkIDogbmV4dFByb3BzLnNlbGVjdGVkU2xvdFsnYWxsJ10gPyBuZXh0UHJvcHMuc2VsZWN0ZWRTbG90WydhbGwnXS50ZXN0X2lkIDogbnVsbFxuXG4gICAgICAgICAgICAgICAgbGV0IG5ld1Rlc3RzID0gW11cbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS50ZXN0cy5tYXAoKHRlc3QpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGVzdC5pc19wYXRob2xvZ3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0UHJvcHMuc2VsZWN0ZWRTbG90LnNlbGVjdGVkVGVzdHNUaW1lU2xvdFt0ZXN0LnRlc3RfaWRdKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGVzdC5pc19wYXRob2xvZ3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUZXN0cy5wdXNoKHRlc3QpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBpZiAoY29tbW9uVGVzdElkICYmIG5ld1Rlc3RzLmxlbmd0aCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaW5hbFNlbGVjdGVkU2xvdCA9IHsgLi4ubmV4dFByb3BzLnNlbGVjdGVkU2xvdCB9XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXN0c09iaiA9IHsgLi4uZmluYWxTZWxlY3RlZFNsb3Quc2VsZWN0ZWRUZXN0c1RpbWVTbG90IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Rlc3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGVzdHMubWFwKCh4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdHNPYmpbeC50ZXN0LmlkXSA9IHsgLi4udGVzdHNPYmpbY29tbW9uVGVzdElkXSwgdGVzdF9pZDogeC50ZXN0LmlkLCB0ZXN0X25hbWU6IHgudGVzdC5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFNlbGVjdGVkU2xvdFsnc2VsZWN0ZWRUZXN0c1RpbWVTbG90J10gPSB0ZXN0c09ialxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RMYWJUaW1lU0xvdChmaW5hbFNlbGVjdGVkU2xvdClcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyByZW1vdmUgY29ycG9yYXRlIGNvdXBvbiBpZiB0ZXN0cyBhcmUgbm90IHZhbGlkXG4gICAgICAgICAgICBpZiAobmV4dFByb3BzLmNvcnBvcmF0ZUNvdXBvbikge1xuICAgICAgICAgICAgICAgIGxldCBjb3Jwb3JhdGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMubWFwKCh0d3AsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0d3AuaGlkZV9wcmljZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29ycG9yYXRlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBpZiAoIWNvcnBvcmF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlc2V0TGFiQ291cG9ucygpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3Vwb25Db2RlOiBcIlwiLCBjb3Vwb25JZDogJycsIGlzX2Nhc2hiYWNrOiBmYWxzZSwgdXNlX3dhbGxldDogdHJ1ZSwgaXNfcGF5bWVudF9jb3Vwb25fYXBwbGllZDogZmFsc2UsICdwYXlfYnRuX2xvYWRpbmcnOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFByb3BzLmxhYkNvdXBvbnNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVtb3ZlTGFiQ291cG9ucyh0aGlzLnByb3BzLnNlbGVjdGVkTGFiLCBuZXh0UHJvcHMuY29ycG9yYXRlQ291cG9uLmNvdXBvbl9pZClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldENvcnBvcmF0ZUNvdXBvbihudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIGNvcnBvcmF0ZUNvdXBvbiBpcyBzZXQsIGFwcGx5IHRoYXQsIGxlYXZlIHJlc3RcbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHMuY29ycG9yYXRlQ291cG9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXSAhPSBuZXh0UHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXSB8fCAhaXNQaWNrdXBTdGF0dXNTYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB7IGZpbmFsUHJpY2UsIHRlc3RfaWRzIH0gPSB0aGlzLmdldExhYlByaWNlRGF0YShuZXh0UHJvcHMpXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhYkNvdXBvbiA9IG5leHRQcm9wcy5jb3Jwb3JhdGVDb3Vwb25cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzX2Nhc2hiYWNrOiBsYWJDb3Vwb24uaXNfY2FzaGJhY2ssIGNvdXBvbkNvZGU6IGxhYkNvdXBvbi5jb2RlLCBjb3Vwb25JZDogbGFiQ291cG9uLmNvdXBvbl9pZCB8fCAnJywgcGF5X2J0bl9sb2FkaW5nOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwbHlDb3Vwb25zKCcyJywgbGFiQ291cG9uLCBsYWJDb3Vwb24uY291cG9uX2lkLCB0aGlzLnByb3BzLnNlbGVjdGVkTGFiLCAoc3VjY2VzcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBsZXQgeyB0b3RhbF9hbW91bnRfcGF5YWJsZV93aXRob3V0X2NvdXBvbiB9ID0gdGhpcy5nZXRTZWxlY3RlZFVzZXJEYXRhKHRoaXMucHJvcHMpXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b3RhbF9hbW91bnRfcGF5YWJsZV93aXRob3V0X2NvdXBvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFByaWNlID0gdG90YWxfYW1vdW50X3BheWFibGVfd2l0aG91dF9jb3Vwb25cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFwcGx5TGFiQ291cG9ucygnMicsIGxhYkNvdXBvbi5jb2RlLCBsYWJDb3Vwb24uY291cG9uX2lkLCB0aGlzLnByb3BzLnNlbGVjdGVkTGFiLCBmaW5hbFByaWNlLCB0ZXN0X2lkcywgbmV4dFByb3BzLnNlbGVjdGVkUHJvZmlsZSwgdGhpcy5zdGF0ZS5jYXJ0X2l0ZW0sIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyAncGF5X2J0bl9sb2FkaW5nJzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhYkNvdXBvbi5pc19wYXltZW50X3NwZWNpZmljKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlX3dhbGxldDogZmFsc2UsIGlzX3BheW1lbnRfY291cG9uX2FwcGxpZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgY291cG9uIGFscmVhZHkgYXBwbGllZCBqdXN0IHNldCBkaXNjb3VudCBwcmljZS5cbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHMubGFiQ291cG9uc1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXSAmJiBuZXh0UHJvcHMubGFiQ291cG9uc1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdICE9IG5leHRQcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdIHx8ICFpc1BpY2t1cFN0YXR1c1NhbWUgfHwgKG5leHRQcm9wcy5zZWxlY3RlZFByb2ZpbGUgJiYgKHRoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlICE9IG5leHRQcm9wcy5zZWxlY3RlZFByb2ZpbGUpKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgeyBmaW5hbFByaWNlLCB0ZXN0X2lkcyB9ID0gdGhpcy5nZXRMYWJQcmljZURhdGEobmV4dFByb3BzKVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYWJDb3Vwb25zID0gbmV4dFByb3BzLmxhYkNvdXBvbnNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ICdwYXlfYnRuX2xvYWRpbmcnOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgIGxldCB7IHRvdGFsX2Ftb3VudF9wYXlhYmxlX3dpdGhvdXRfY291cG9uIH0gPSB0aGlzLmdldFNlbGVjdGVkVXNlckRhdGEodGhpcy5wcm9wcylcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvdGFsX2Ftb3VudF9wYXlhYmxlX3dpdGhvdXRfY291cG9uICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsUHJpY2UgPSB0b3RhbF9hbW91bnRfcGF5YWJsZV93aXRob3V0X2NvdXBvblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwbHlMYWJDb3Vwb25zKCcyJywgbGFiQ291cG9uc1swXS5jb2RlLCBsYWJDb3Vwb25zWzBdLmNvdXBvbl9pZCwgdGhpcy5wcm9wcy5zZWxlY3RlZExhYiwgZmluYWxQcmljZSwgdGVzdF9pZHMsIG5leHRQcm9wcy5zZWxlY3RlZFByb2ZpbGUsIHRoaXMuc3RhdGUuY2FydF9pdGVtLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc19jYXNoYmFjazogbGFiQ291cG9uc1swXS5pc19jYXNoYmFjaywgY291cG9uQ29kZTogbGFiQ291cG9uc1swXS5jb2RlLCBjb3Vwb25JZDogbGFiQ291cG9uc1swXS5jb3Vwb25faWQgfHwgJycgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiQ291cG9uc1swXS5pc19wYXltZW50X3NwZWNpZmljKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2Vfd2FsbGV0OiBmYWxzZSwgaXNfcGF5bWVudF9jb3Vwb25fYXBwbGllZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdXBvbl9sb2FkaW5nOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRBbmRBcHBseUJlc3RDb3Vwb25zKG5leHRQcm9wcywgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgJ3BheV9idG5fbG9hZGluZyc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiBubyBjb3Vwb24gaXMgYXBwbGllZFxuICAgICAgICAgICAgaWYgKCFuZXh0UHJvcHMubGFiQ291cG9uc1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QW5kQXBwbHlCZXN0Q291cG9ucyhuZXh0UHJvcHMsIGZhbHNlKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyAncGF5X2J0bl9sb2FkaW5nJzogZmFsc2UgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5leHRQcm9wcy5sYWJDb3Vwb25zW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdICYmIG5leHRQcm9wcy5sYWJDb3Vwb25zW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ICdwYXlfYnRuX2xvYWRpbmcnOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVzZXRMYWJDb3Vwb25zKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFZhbGlkQ291cG9uKGNvdXBvbnMpIHtcbiAgICAgICAgbGV0IHZhbGlkQ291cG9uID0gbnVsbFxuICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBjb3Vwb25zKSB7XG4gICAgICAgICAgICBpZiAoY291cG9uc1tpbmRleF0udmFsaWQpIHtcbiAgICAgICAgICAgICAgICB2YWxpZENvdXBvbiA9IGNvdXBvbnNbaW5kZXhdXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsaWRDb3Vwb25cbiAgICB9XG5cbiAgICBnZXRBbmRBcHBseUJlc3RDb3Vwb25zKG5leHRQcm9wcywgaXNMZW5zZml0KSB7XG5cbiAgICAgICAgLy8gaWYgKG5leHRQcm9wcy5jb3Vwb25BdXRvQXBwbHkpIHtcbiAgICAgICAgbGV0IHsgZmluYWxQcmljZSwgdGVzdF9pZHMgfSA9IHRoaXMuZ2V0TGFiUHJpY2VEYXRhKG5leHRQcm9wcylcbiAgICAgICAgbGV0IHZhbGlkQ291cG9uXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0Q291cG9ucyh7XG4gICAgICAgICAgICBwcm9kdWN0SWQ6IDIsIGRlYWxfcHJpY2U6IGZpbmFsUHJpY2UsIGxhYl9pZDogdGhpcy5wcm9wcy5zZWxlY3RlZExhYiwgdGVzdF9pZHM6IHRlc3RfaWRzLCBwcm9maWxlX2lkOiBuZXh0UHJvcHMuc2VsZWN0ZWRQcm9maWxlLCBjYXJ0X2l0ZW06IHRoaXMuc3RhdGUuY2FydF9pdGVtLFxuICAgICAgICAgICAgY2I6IChjb3Vwb25zKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdXBvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTGVuc2ZpdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxlbnNGaXRQcm9wcyA9IHsgLi4ubmV4dFByb3BzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBsZW5zRml0UHJvcHMuZmluYWxQcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGxlbnNGaXRQcm9wcy50ZXN0X2lkc1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGxlbnNGaXRQcm9wcy5MQUJTXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZENvdXBvbiA9IGxlbnNGaXRQcm9wc1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRDb3Vwb24gPSB0aGlzLmdldFZhbGlkQ291cG9uKGNvdXBvbnMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkQ291cG9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgJ3BheV9idG5fbG9hZGluZyc6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwbHlDb3Vwb25zKCcyJywgdmFsaWRDb3Vwb24sIHZhbGlkQ291cG9uLmNvdXBvbl9pZCwgdGhpcy5wcm9wcy5zZWxlY3RlZExhYiwgKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgJ3BheV9idG5fbG9hZGluZyc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHsgdG90YWxfYW1vdW50X3BheWFibGVfd2l0aG91dF9jb3Vwb24gfSA9IHRoaXMuZ2V0U2VsZWN0ZWRVc2VyRGF0YShuZXh0UHJvcHMpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG90YWxfYW1vdW50X3BheWFibGVfd2l0aG91dF9jb3Vwb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsUHJpY2UgPSB0b3RhbF9hbW91bnRfcGF5YWJsZV93aXRob3V0X2NvdXBvblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hcHBseUxhYkNvdXBvbnMoJzInLCB2YWxpZENvdXBvbi5jb2RlLCB2YWxpZENvdXBvbi5jb3Vwb25faWQsIHRoaXMucHJvcHMuc2VsZWN0ZWRMYWIsIGZpbmFsUHJpY2UsIHRlc3RfaWRzLCB0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZSwgdGhpcy5zdGF0ZS5jYXJ0X2l0ZW0sIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgJ3BheV9idG5fbG9hZGluZyc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTGVuc2ZpdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93X2xlbnNmaXRfcG9wdXA6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNfY2FzaGJhY2s6IHZhbGlkQ291cG9uLmlzX2Nhc2hiYWNrLCBjb3Vwb25Db2RlOiB2YWxpZENvdXBvbi5jb2RlLCBjb3Vwb25JZDogdmFsaWRDb3Vwb24uY291cG9uX2lkIHx8ICcnIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRDb3Vwb24uaXNfcGF5bWVudF9zcGVjaWZpYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2Vfd2FsbGV0OiBmYWxzZSwgaXNfcGF5bWVudF9jb3Vwb25fYXBwbGllZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTGVuc2ZpdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93X2xlbnNmaXRfcG9wdXA6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlc2V0TGFiQ291cG9ucygpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY291cG9uQ29kZTogXCJcIiwgY291cG9uSWQ6ICcnLCBpc19jYXNoYmFjazogZmFsc2UsIHVzZV93YWxsZXQ6IHRydWUsIGlzX3BheW1lbnRfY291cG9uX2FwcGxpZWQ6IGZhbHNlLCAncGF5X2J0bl9sb2FkaW5nJzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0xlbnNmaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93X2xlbnNmaXRfcG9wdXA6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXNldExhYkNvdXBvbnMoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY291cG9uQ29kZTogXCJcIiwgY291cG9uSWQ6ICcnLCBpc19jYXNoYmFjazogZmFsc2UsIHVzZV93YWxsZXQ6IHRydWUsIGlzX3BheW1lbnRfY291cG9uX2FwcGxpZWQ6IGZhbHNlLCAncGF5X2J0bl9sb2FkaW5nJzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdXBvbl9sb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdXBvbl9sb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgZ2V0TGFiUHJpY2VEYXRhKG5leHRQcm9wcykge1xuICAgICAgICBsZXQgaXNfaG9tZV9jb2xsZWN0aW9uX2VuYWJsZWQgPSB0cnVlXG4gICAgICAgIGxldCBmaW5hbFByaWNlID0gMFxuICAgICAgICBsZXQgdGVzdF9pZHMgPSBbXVxuXG4gICAgICAgIG5leHRQcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLnRlc3RzLm1hcCgodHdwLCBpKSA9PiB7XG4gICAgICAgICAgICB0ZXN0X2lkcy5wdXNoKHR3cC50ZXN0X2lkKVxuICAgICAgICAgICAgbGV0IHByaWNlID0gbnVsbFxuICAgICAgICAgICAgaWYgKHR3cC52aXAgJiYgT2JqZWN0LmtleXModHdwLnZpcCkubGVuZ3RoICYmIHR3cC52aXAuaXNfdmlwX21lbWJlciAmJiB0d3AudmlwLmNvdmVyZWRfdW5kZXJfdmlwKSB7XG4gICAgICAgICAgICAgICAgcHJpY2UgKz0gdHdwLnZpcC52aXBfYW1vdW50ICsgdHdwLnZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByaWNlICs9IHR3cC5kZWFsX3ByaWNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXR3cC5pc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIGlzX2hvbWVfY29sbGVjdGlvbl9lbmFibGVkID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsUHJpY2UgKz0gcGFyc2VGbG9hdChwcmljZSlcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoaXNfaG9tZV9jb2xsZWN0aW9uX2VuYWJsZWQgJiYgKG5leHRQcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZS5yX3BpY2t1cCA9PSAnaG9tZScgfHwgbmV4dFByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlLnBfcGlja3VwID09ICdob21lJykpIHtcbiAgICAgICAgICAgIGZpbmFsUHJpY2UgPSBmaW5hbFByaWNlICsgKG5leHRQcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLmxhYi5ob21lX3BpY2t1cF9jaGFyZ2VzIHx8IDApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBmaW5hbFByaWNlLCB0ZXN0X2lkcyB9XG4gICAgfVxuXG4gICAgb3BlblRlc3RzKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zZW9GcmllbmRseSkge1xuICAgICAgICAgICAgbGV0IHVybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0/bGFiX2lkPSR7dGhpcy5wcm9wcy5zZWxlY3RlZExhYn0mYWN0aW9uX3BhZ2U9dGVzdHNgXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCh1cmwpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2xhYi8ke3RoaXMuc3RhdGUuc2VsZWN0ZWRMYWJ9L3Rlc3RzYClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVBpY2t1cFR5cGUodHlwZSkge1xuICAgICAgICAvL2Fsd2F5cyBjbGVhciBzZWxlY3RlZCB0aW1lIGF0IGxhYiBwcm9maWxlXG4gICAgICAgIGxldCBzbG90ID0geyB0aW1lOiB7fSB9XG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWN0TGFiVGltZVNMb3Qoc2xvdCwgZmFsc2UpXG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWN0TGFiQXBwb2ludG1lbnRUeXBlKHR5cGUpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93VGltZUVycm9yOiBmYWxzZSwgc2hvd0FkZHJlc3NFcnJvcjogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgbmF2aWdhdGVUbyh3aGVyZSwgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUsIHNlbGVjdFRpbWVFcnJvciA9IGZhbHNlKSB7XG4gICAgICAgIHN3aXRjaCAod2hlcmUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJ0aW1lXCI6IHtcbiAgICAgICAgICAgICAgICAvL0dldCBUZXN0IGlkcyBvZiBhbGwgc2VsZWN0ZWQgVGVzdHNcbiAgICAgICAgICAgICAgICBsZXQgdGVzdF9pZHMgPSB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMubWFwKHggPT4geC50ZXN0X2lkKVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucGluY29kZSB8fCAodGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdICYmIHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS5sYWIgJiYgIXRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS5sYWIuaXNfdGh5cm9jYXJlKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCByX3BpY2t1cCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGUucl9waWNrdXBcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBfcGlja3VwID0gdGhpcy5wcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZS5wX3BpY2t1cFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLmxhYi5pc190aHlyb2NhcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNlb0ZyaWVuZGx5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0/bGFiX2lkPSR7dGhpcy5wcm9wcy5zZWxlY3RlZExhYn0mdHlwZT1sYWImZ29iYWNrPXRydWUmaXNfdGh5cm9jYXJlPXRydWUmYWN0aW9uX3BhZ2U9dGltaW5ncyZpc19pbnN1cmFuY2U9JHtpc19pbnN1cmFuY2VfYXBwbGljYWJsZX0mdGVzdF9pZHM9JHt0ZXN0X2lkc30mcl9waWNrdXA9JHtyX3BpY2t1cH0mcF9waWNrdXA9JHtwX3BpY2t1cH0mc2VsZWN0ZWRUeXBlPSR7c2VsZWN0VGltZUVycm9yID8gJ3NlcGVyYXRlbHknIDogJ2FsbCd9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHVybClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9sYWIvJHt0aGlzLnByb3BzLnNlbGVjdGVkTGFifS90aW1lc2xvdHM/dHlwZT1sYWImZ29iYWNrPXRydWUmaXNfdGh5cm9jYXJlPXRydWUmaXNfaW5zdXJhbmNlPSR7aXNfaW5zdXJhbmNlX2FwcGxpY2FibGV9JnRlc3RfaWRzPSR7dGVzdF9pZHN9JnJfcGlja3VwPSR7cl9waWNrdXB9JnBfcGlja3VwPSR7cF9waWNrdXB9JnNlbGVjdGVkVHlwZT0ke3NlbGVjdFRpbWVFcnJvciA/ICdzZXBlcmF0ZWx5JyA6ICdhbGwnfWApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5zZW9GcmllbmRseSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9P2xhYl9pZD0ke3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJ9JnR5cGU9bGFiJmdvYmFjaz10cnVlJmlzX3RoeXJvY2FyZT1mYWxzZSZhY3Rpb25fcGFnZT10aW1pbmdzJmlzX2luc3VyYW5jZT0ke2lzX2luc3VyYW5jZV9hcHBsaWNhYmxlfSZ0ZXN0X2lkcz0ke3Rlc3RfaWRzfSZyX3BpY2t1cD0ke3JfcGlja3VwfSZwX3BpY2t1cD0ke3BfcGlja3VwfSZzZWxlY3RlZFR5cGU9JHtzZWxlY3RUaW1lRXJyb3IgPyAnc2VwZXJhdGVseScgOiAnYWxsJ31gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2godXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2xhYi8ke3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJ9L3RpbWVzbG90cz90eXBlPWxhYiZnb2JhY2s9dHJ1ZSZpc190aHlyb2NhcmU9ZmFsc2UmaXNfaW5zdXJhbmNlPSR7aXNfaW5zdXJhbmNlX2FwcGxpY2FibGV9JnRlc3RfaWRzPSR7dGVzdF9pZHN9JnJfcGlja3VwPSR7cl9waWNrdXB9JnBfcGlja3VwPSR7cF9waWNrdXB9JnNlbGVjdGVkVHlwZT0ke3NlbGVjdFRpbWVFcnJvciA/ICdzZXBlcmF0ZWx5JyA6ICdhbGwnfWApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1BpbmNvZGVQb3B1cDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSBcInBhdGllbnRcIjoge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvdXNlci9mYW1pbHk/cGljaz10cnVlJmxhYl9pZD0ke3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJ9JmlzX2luc3VyYW5jZT0ke2lzX2luc3VyYW5jZV9hcHBsaWNhYmxlfWApXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgXCJhZGRyZXNzXCI6IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5hZGRyZXNzICYmIHRoaXMucHJvcHMuYWRkcmVzcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC91c2VyL2FkZHJlc3M/cGljaz10cnVlYClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL3VzZXIvYWRkcmVzcy9hZGRgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFBhdGllbnREZXRhaWxzKGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlLCBjZW50ZXJfdmlzaXRfZW5hYmxlZCwgaXNfaG9tZV9jaGFyZ2VzX2FwcGxpY2FibGUpIHtcbiAgICAgICAgbGV0IHBhdGllbnQgPSBudWxsXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlXSAmJiAhdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV0uaXNEdW1teVVzZXIpIHtcbiAgICAgICAgICAgIHBhdGllbnQgPSB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlXVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiA8Q2hvb3NlUGF0aWVudE5ld1ZpZXcgaXNfY29ycG9yYXRlPXshIXRoaXMucHJvcHMuY29ycG9yYXRlQ291cG9ufSBwYXRpZW50PXtwYXRpZW50fSBuYXZpZ2F0ZVRvPXt0aGlzLm5hdmlnYXRlVG8uYmluZCh0aGlzKX0gcHJvZmlsZURhdGFDb21wbGV0ZWQ9e3RoaXMucHJvZmlsZURhdGFDb21wbGV0ZWQuYmluZCh0aGlzKX0gey4uLnRoaXMucHJvcHN9IGlzX2xhYj17dHJ1ZX0gY2xlYXJUZXN0Rm9ySW5zdXJlZD17dGhpcy5jbGVhclRlc3RGb3JJbnN1cmVkLmJpbmQodGhpcyl9IGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlPXtpc19pbnN1cmFuY2VfYXBwbGljYWJsZX0gY2hlY2tQcmVzY3JpcHRpb249e3RoaXMuY2hlY2tQcmVzY3JpcHRpb24uYmluZCh0aGlzKX0gaXNFbWFpbE5vdFZhbGlkPXt0aGlzLnN0YXRlLmlzRW1haWxOb3RWYWxpZH0gZ2V0RGF0YUFmdGVyTG9naW49e3RoaXMuZ2V0RGF0YUFmdGVyTG9naW59IG5vbklwZExlYWRzPXt0aGlzLm5vbklwZExlYWRzLmJpbmQodGhpcyl9IC8+XG5cbiAgICB9XG5cbiAgICBnZXRTZWxlY3RvcnMoaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUsIGNlbnRlcl92aXNpdF9lbmFibGVkLCBpc19ob21lX2NoYXJnZXNfYXBwbGljYWJsZSkge1xuICAgICAgICBsZXQgcGF0aWVudCA9IG51bGxcbiAgICAgICAgaWYgKHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdICYmICF0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlXS5pc0R1bW15VXNlcikge1xuICAgICAgICAgICAgcGF0aWVudCA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPFZpc2l0VGltZU5ldyB0eXBlPVwiaG9tZVwiIG5hdmlnYXRlVG89e3RoaXMubmF2aWdhdGVUby5iaW5kKHRoaXMpfSBzZWxlY3RlZFNsb3Q9e3RoaXMucHJvcHMuc2VsZWN0ZWRTbG90fSB0aW1lRXJyb3I9e3RoaXMuc3RhdGUuc2hvd1RpbWVFcnJvcn0gey4uLnRoaXMucHJvcHN9IHNlbGVjdGVkTGFiPXt0aGlzLnByb3BzLnNlbGVjdGVkTGFifSB0b2dnbGU9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgJ3Nob3dQaW5jb2RlUG9wdXAnKX0gaXNfaW5zdXJhbmNlX2FwcGxpY2FibGU9e2lzX2luc3VyYW5jZV9hcHBsaWNhYmxlfSAvPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGllbnQgJiYgaXNfaG9tZV9jaGFyZ2VzX2FwcGxpY2FibGUgP1xuICAgICAgICAgICAgICAgICAgICA8UGlja3VwQWRkcmVzcyB7Li4udGhpcy5wcm9wc30gbmF2aWdhdGVUbz17dGhpcy5uYXZpZ2F0ZVRvLmJpbmQodGhpcywgJ2FkZHJlc3MnKX0gYWRkcmVzc0Vycm9yPXt0aGlzLnN0YXRlLnNob3dBZGRyZXNzRXJyb3J9IC8+XG4gICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgLypcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMucHJvcHMuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImxhYlwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlzaXRUaW1lTmV3IHR5cGU9XCJsYWJcIiBuYXZpZ2F0ZVRvPXt0aGlzLm5hdmlnYXRlVG8uYmluZCh0aGlzKX0gc2VsZWN0ZWRTbG90PXt0aGlzLnByb3BzLnNlbGVjdGVkU2xvdH0gdGltZUVycm9yPXt0aGlzLnN0YXRlLnNob3dUaW1lRXJyb3J9IHsuLi50aGlzLnByb3BzfSBzZWxlY3RlZExhYj17dGhpcy5wcm9wcy5zZWxlY3RlZExhYn0gdG9nZ2xlPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsICdzaG93UGluY29kZVBvcHVwJyl9IGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlPXtpc19pbnN1cmFuY2VfYXBwbGljYWJsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hvb3NlUGF0aWVudE5ld1ZpZXcgaXNfY29ycG9yYXRlPXshIXRoaXMucHJvcHMuY29ycG9yYXRlQ291cG9ufSBwYXRpZW50PXtwYXRpZW50fSBuYXZpZ2F0ZVRvPXt0aGlzLm5hdmlnYXRlVG8uYmluZCh0aGlzKX0gcHJvZmlsZURhdGFDb21wbGV0ZWQ9e3RoaXMucHJvZmlsZURhdGFDb21wbGV0ZWQuYmluZCh0aGlzKX0gey4uLnRoaXMucHJvcHN9IGlzX2xhYj17dHJ1ZX0gY2xlYXJUZXN0Rm9ySW5zdXJlZD17dGhpcy5jbGVhclRlc3RGb3JJbnN1cmVkLmJpbmQodGhpcyl9IGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlPXtpc19pbnN1cmFuY2VfYXBwbGljYWJsZX0gY2hlY2tQcmVzY3JpcHRpb249e3RoaXMuY2hlY2tQcmVzY3JpcHRpb24uYmluZCh0aGlzKX0gaXNFbWFpbE5vdFZhbGlkPXt0aGlzLnN0YXRlLmlzRW1haWxOb3RWYWxpZH0gaXNEb2JOb3RWYWxpZD17dGhpcy5zdGF0ZS5pc0RvYk5vdFZhbGlkfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImhvbWVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpc2l0VGltZU5ldyB0eXBlPVwiaG9tZVwiIG5hdmlnYXRlVG89e3RoaXMubmF2aWdhdGVUby5iaW5kKHRoaXMpfSBzZWxlY3RlZFNsb3Q9e3RoaXMucHJvcHMuc2VsZWN0ZWRTbG90fSB0aW1lRXJyb3I9e3RoaXMuc3RhdGUuc2hvd1RpbWVFcnJvcn0gey4uLnRoaXMucHJvcHN9IHNlbGVjdGVkTGFiPXt0aGlzLnByb3BzLnNlbGVjdGVkTGFifSB0b2dnbGU9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgJ3Nob3dQaW5jb2RlUG9wdXAnKX0gaXNfaW5zdXJhbmNlX2FwcGxpY2FibGU9e2lzX2luc3VyYW5jZV9hcHBsaWNhYmxlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaG9vc2VQYXRpZW50TmV3VmlldyBpc19jb3Jwb3JhdGU9eyEhdGhpcy5wcm9wcy5jb3Jwb3JhdGVDb3Vwb259IHBhdGllbnQ9e3BhdGllbnR9IG5hdmlnYXRlVG89e3RoaXMubmF2aWdhdGVUby5iaW5kKHRoaXMpfSBwcm9maWxlRGF0YUNvbXBsZXRlZD17dGhpcy5wcm9maWxlRGF0YUNvbXBsZXRlZC5iaW5kKHRoaXMpfSB7Li4udGhpcy5wcm9wc30gaXNfbGFiPXt0cnVlfSBjbGVhclRlc3RGb3JJbnN1cmVkPXt0aGlzLmNsZWFyVGVzdEZvckluc3VyZWQuYmluZCh0aGlzKX0gaXNfaW5zdXJhbmNlX2FwcGxpY2FibGU9e2lzX2luc3VyYW5jZV9hcHBsaWNhYmxlfSBjaGVja1ByZXNjcmlwdGlvbj17dGhpcy5jaGVja1ByZXNjcmlwdGlvbi5iaW5kKHRoaXMpfSBpc0VtYWlsTm90VmFsaWQ9e3RoaXMuc3RhdGUuaXNFbWFpbE5vdFZhbGlkfSBpc0RvYk5vdFZhbGlkPXt0aGlzLnN0YXRlLmlzRG9iTm90VmFsaWR9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpY2t1cEFkZHJlc3Mgey4uLnRoaXMucHJvcHN9IG5hdmlnYXRlVG89e3RoaXMubmF2aWdhdGVUby5iaW5kKHRoaXMsICdhZGRyZXNzJyl9IGFkZHJlc3NFcnJvcj17dGhpcy5zdGF0ZS5zaG93QWRkcmVzc0Vycm9yfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSovXG4gICAgfVxuXG4gICAgcHJvZmlsZURhdGFDb21wbGV0ZWQoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YS5uYW1lID09ICcnIHx8IGRhdGEuZ2VuZGVyID09ICcnIHx8IGRhdGEucGhvbmVOdW1iZXIgPT0gJycgfHwgZGF0YS5lbWFpbCA9PSAnJyB8fCAhZGF0YS5vdHBWZXJpZnlTdWNjZXNzIHx8IGRhdGEuZG9iID09ICcnIHx8IGRhdGEuZG9iID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMucGF0aWVudERldGFpbHMoZGF0YSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9maWxlRGF0YUZpbGxlZDogZmFsc2UgfSlcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLm90cFZlcmlmeVN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxldCBjbGVhcl9kYXRhID0ge31cbiAgICAgICAgICAgIHRoaXMucHJvcHMucGF0aWVudERldGFpbHMoY2xlYXJfZGF0YSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9maWxlRGF0YUZpbGxlZDogdHJ1ZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tQcmVzY3JpcHRpb24oKSB7XG4gICAgICAgIGxldCBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSA9IGZhbHNlXG4gICAgICAgIGxldCBpc190ZXN0c19jb3ZlcmVkX3VuZGVyX2luc3VyYW5jZSA9IGZhbHNlXG4gICAgICAgIGxldCBpc19zZWxlY3RlZF91c2VyX2luc3VyZWQgPSBmYWxzZVxuXG4gICAgICAgIGxldCBkYXRhID0ge31cbiAgICAgICAgbGV0IHNlbGVjdGVkRGF0ZSA9IG51bGxcbiAgICAgICAgbGV0IHNlbGVjdGVkX3Rlc3RfaWQgPSBbXVxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IHBhdGllbnQgPSBudWxsXG4gICAgICAgIGxldCBwcm9maWxlID0gbnVsbFxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlXSAmJiAhdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV0uaXNEdW1teVVzZXIpIHtcbiAgICAgICAgICAgIHBhdGllbnQgPSB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlXVxuICAgICAgICAgICAgaXNfc2VsZWN0ZWRfdXNlcl9pbnN1cmVkID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV0uaXNfaW5zdXJlZFxuICAgICAgICAgICAgcHJvZmlsZSA9IHBhdGllbnQuaWRcbiAgICAgICAgfVxuICAgICAgICBpc190ZXN0c19jb3ZlcmVkX3VuZGVyX2luc3VyYW5jZSA9IHRydWVcbiAgICAgICAgdGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLnRlc3RzLm1hcCgodGVzdCwgaSkgPT4ge1xuXG4gICAgICAgICAgICBpZiAodGVzdC5pbnN1cmFuY2UgJiYgdGVzdC5pbnN1cmFuY2UuaXNfaW5zdXJhbmNlX2NvdmVyZWQgJiYgdGVzdC5pbnN1cmFuY2UuaW5zdXJhbmNlX3RocmVzaG9sZF9hbW91bnQgPj0gcGFyc2VJbnQodGVzdC5kZWFsX3ByaWNlKSkge1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfaW5zdXJhbmNlID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgPSBpc190ZXN0c19jb3ZlcmVkX3VuZGVyX2luc3VyYW5jZSAmJiBpc19zZWxlY3RlZF91c2VyX2luc3VyZWRcblxuICAgICAgICAvLyBpbiBjYXNlIG9mIHVwbG9hZCBwcmVzY3JpcHRpb25cbiAgICAgICAgaWYgKGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhcyAmJiB0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzLm1hcCgodHdwLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkX3Rlc3RfaWQucHVzaCh0d3AuaWQpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEuc3RhcnRfZGF0ZSA9IHNlbGVjdGVkRGF0ZSA/IHNlbGVjdGVkRGF0ZSA6IHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LmRhdGUgPyB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5kYXRlIDogbmV3IERhdGUoKVxuICAgICAgICAgICAgZGF0YS5sYWJfdGVzdCA9IHNlbGVjdGVkX3Rlc3RfaWRcbiAgICAgICAgICAgIGRhdGEubGFiID0gdGhpcy5wcm9wcy5zZWxlY3RlZExhYlxuICAgICAgICAgICAgZGF0YS5wcm9maWxlID0gcHJvZmlsZVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5wcmVCb29raW5nKGRhdGEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRCb29raW5nRGF0YSgpIHtcbiAgICAgICAgbGV0IHRlc3RfaWRzID0gW11cbiAgICAgICAgbGV0IGNvdXBvbl9kYXRhID0ge31cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXSAmJiB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMgJiYgdGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLnRlc3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGVzdF9pZHMgPSB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMubWFwKCh4ID0+IHgudGVzdF9pZCkpXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxhYkNvdXBvbnMgJiYgdGhpcy5wcm9wcy5sYWJDb3Vwb25zW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdICYmIHRoaXMucHJvcHMubGFiQ291cG9uc1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvdXBvbl9kYXRhID0gdGhpcy5wcm9wcy5sYWJDb3Vwb25zW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdWzBdXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdGVzdF9pZHMsIGxhYklkOiB0aGlzLnByb3BzLnNlbGVjdGVkTGFiLCBwaW5jb2RlOiB0aGlzLnN0YXRlLnBpbmNvZGUsIHByb2ZpbGU6IHRoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlLCBzZWxlY3RlZFNsb3Q6IHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LCBjb3Vwb25fZGF0YSwgcGF5bWVudF90eXBlOiB0aGlzLnByb3BzLnBheW1lbnRfdHlwZSB9XG4gICAgfVxuXG4gICAgc2VuZFNpbmdsZUZsb3dBZ2VudEJvb2tpbmdVUkwocG9zdERhdGEpIHtcbiAgICAgICAgLy9mb3IgYWdlbnQgbG9naW4gc2VuZCBib29raW5nIHVybCBmb3Igc2luZ2xlIGZsb3dcbiAgICAgICAgbGV0IGJvb2tpbmdfZGF0YSA9IHRoaXMuZ2V0Qm9va2luZ0RhdGEoKVxuICAgICAgICBib29raW5nX2RhdGEgPSB7IC4uLnBvc3REYXRhLCAuLi5ib29raW5nX2RhdGEsIGlzX3NpbmdsZV9mbG93X2xhYjogdHJ1ZSwgZHVtbXlfZGF0YV90eXBlOiAnU0lOR0xFX1BVUkNIQVNFJyB9XG5cbiAgICAgICAgdGhpcy5wcm9wcy5wdXNoTWVtYmVyc0RhdGEoYm9va2luZ19kYXRhLCAocmVzcCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3AuZHVtbXlfaWQpIHtcblxuICAgICAgICAgICAgICAgIGxldCBleHRyYVBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbGFuZGluZ191cmw6IGBsYWIvJHt0aGlzLnByb3BzLnNlbGVjdGVkTGFifS9ib29rP2R1bW15X2lkPSR7cmVzcC5kdW1teV9pZH0mdGVzdF9pZHM9JHtib29raW5nX2RhdGEudGVzdF9pZHN9YCxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBvc3REYXRhWydtZXNzYWdlX21lZGl1bSddKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4dHJhUGFyYW1zWydtZXNzYWdlX21lZGl1bSddID0gcG9zdERhdGFbJ21lc3NhZ2VfbWVkaXVtJ11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kQWdlbnRCb29raW5nVVJMKHRoaXMuc3RhdGUub3JkZXJfaWQsICdzbXMnLCAnU0lOR0xFX1BVUkNIQVNFJywgbnVsbCwgZXh0cmFQYXJhbXMsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiU01TIFNFTkQgRVJST1JcIiB9KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlNNUyBTRU5UIFNVQ0NFU1NGVUxZXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJvY2VlZCh0ZXN0UGlja2VkLCBhZGRyZXNzUGlja2VkLCBkYXRlUGlja2VkLCBwYXRpZW50LCBhZGRUb0NhcnQsIHRvdGFsX3ByaWNlLCB0b3RhbF93YWxsZXRfYmFsYW5jZSwgcHJlc2NyaXB0aW9uUGlja2VkLCBpc19zZWxlY3RlZF91c2VyX2luc3VyYW5jZV9zdGF0dXMsIGV4dHJhUGFyYW1zLCB2aXBfaXNfcHJlc2NyaXB0aW9uX3JlcXVpcmVkLCBlKSB7XG5cbiAgICAgICAgLy9DaGVjayBpZiBwYXRpZW50IGlzIHNlbGVjdGVkIG9yIG5vdFxuICAgICAgICBpZiAoIXBhdGllbnQpIHtcbiAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgQWRkIFBhdGllbnRcIiB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLy9DaGVjayBpZiBwYXRpZW50IGVtYWlsaWQgZXhpc3Qgb3Igbm90XG4gICAgICAgIC8vIGlmKHBhdGllbnQgJiYgIXBhdGllbnQuZW1haWwpe1xuICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7aXNFbWFpbE5vdFZhbGlkOnRydWV9KVxuICAgICAgICAvLyAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBFbnRlciBZb3VyIEVtYWlsIElkXCIgfSlcbiAgICAgICAgLy8gICAgIHJldHVybiBcbiAgICAgICAgLy8gfVxuICAgICAgICAvL0NoZWNrIGlmIHBhdGllbnQgZG9iIGV4aXN0IG9yIG5vdFxuICAgICAgICBpZiAocGF0aWVudCAmJiAhcGF0aWVudC5kb2IpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0RvYk5vdFZhbGlkOiB0cnVlIH0pXG4gICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIEVudGVyIFlvdXIgRGF0ZSBvZiBCaXJ0aFwiIH0pXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vVG8gY2xhaW0gaW5zdXJhbmNlIHN0YXR1cyAmIGNsYWltXG4gICAgICAgIGlmIChwYXRpZW50ICYmIGlzX3NlbGVjdGVkX3VzZXJfaW5zdXJhbmNlX3N0YXR1cyAmJiBpc19zZWxlY3RlZF91c2VyX2luc3VyYW5jZV9zdGF0dXMgPT0gNCkge1xuICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIllvdXIgZG9jdW1lbnRzIGZyb20gdGhlIGxhc3QgY2xhaW0gYXJlIHVuZGVyIHZlcmlmaWNhdGlvbi5QbGVhc2Ugd3JpdGUgdG8gY3VzdG9tZXJjYXJlQGRvY3ByaW1lLmNvbSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cIiB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLy9jaGVjayBpZiBhbnkgdGVzdCBpcyBzZWxjdGVkIGJ5IHVzZXIgb3Igbm90XG4gICAgICAgIGlmICghdGVzdFBpY2tlZCkge1xuICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBzZWxlY3Qgc29tZSB0ZXN0cy5cIiB9KTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIC8vY2hlY2sgaWYgdGltZXNsb3RzIG9mIGFsbCBzZWxlY3RlZCB0ZXN0cyBhcmUgc2VsY3RlZCBieSB1c2VyIG9yIG5vdFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3Quc2VsZWN0ZWRUZXN0c1RpbWVTbG90KSB7XG4gICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLnRlc3RzLm1hcCgodGVzdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5zZWxlY3RlZFRlc3RzVGltZVNsb3RbdGVzdC50ZXN0X2lkXSkge1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2Ugc2VsZWN0IHRpbWluZ3Mgb2YgYWxsIFRlc3RzLlwiIH0pO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkYXRlUGlja2VkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1RpbWVFcnJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgcGljayBhIHRpbWUgc2xvdC5cIiB9KTtcblxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApLy8gdGhpcy5zdGF0ZS5zY3JvbGxQb3NpdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy9DaGVjayBpZiBwYXRpZW50IGFkZHJlc3MgaXMgc2VsZWN0ZWQgb3Igbm90XG4gICAgICAgIGlmICghYWRkcmVzc1BpY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dBZGRyZXNzRXJyb3I6IHRydWUgfSk7XG4gICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIHBpY2sgYW4gYWRkcmVzcy5cIiB9KTtcblxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApLy90aGlzLnN0YXRlLnNjcm9sbFBvc2l0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvL0NoZWNrIGlmIHBpbmNvZGUgc2VsZWN0ZWQgYnkgdXNlciBtYXRjaGVzIHdpdGggdGhlIHBpbmNvZGUgb2YgdGhlIGFkZHJlc3Mgc2VsZWN0ZWQgYnkgdGhlIHVzZXJcbiAgICAgICAgaWYgKGFkZHJlc3NQaWNrZWQgJiYgdGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdICYmIHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS5sYWIgJiYgdGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLmxhYi5pc190aHlyb2NhcmUpIHtcblxuICAgICAgICAgICAgbGV0IHZhbGlkYXRlQWRkcmVzc1BpbmNvZGUgPSBmYWxzZVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuYWRkcmVzcyAmJiB0aGlzLnByb3BzLmFkZHJlc3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkQWRkcmVzc1BpbmNvZGUgPSB0aGlzLnByb3BzLmFkZHJlc3MuZmlsdGVyKHggPT4geC5pZCA9PSB0aGlzLnByb3BzLnNlbGVjdGVkQWRkcmVzcykubWFwKHggPT4geC5waW5jb2RlKVxuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkQWRkcmVzc1BpbmNvZGUubGVuZ3RoICYmIHBhcnNlSW50KHNlbGVjdGVkQWRkcmVzc1BpbmNvZGVbMF0pID09IHBhcnNlSW50KHRoaXMuc3RhdGUucGluY29kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVBZGRyZXNzUGluY29kZSA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdmFsaWRhdGVBZGRyZXNzUGluY29kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwaW5jb2RlTWlzbWF0Y2hFcnJvcjogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyppZiAoIXRoaXMuc3RhdGUucHJvZmlsZURhdGFGaWxsZWQpIHtcbiAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgZmlsbCB0aGUgaW5mb1wiIH0pO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0qL1xuICAgICAgICBpZiAoZS50YXJnZXQuZGF0YXNldC5kaXNhYmxlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlYWN0IGd1YXJhbnRlZXMgdGhhdCBzZXRTdGF0ZSBpbnNpZGUgaW50ZXJhY3RpdmUgZXZlbnRzIChzdWNoIGFzIGNsaWNrKSBpcyBmbHVzaGVkIGF0IGJyb3dzZXIgZXZlbnQgYm91bmRhcnlcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubG9hZGluZykge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgPSBmYWxzZVxuICAgICAgICBsZXQgaXNfdGVzdHNfY292ZXJlZF91bmRlcl9pbnN1cmFuY2UgPSBmYWxzZVxuICAgICAgICBsZXQgaXNfc2VsZWN0ZWRfdXNlcl9pbnN1cmVkID0gZmFsc2VcbiAgICAgICAgbGV0IGlzX3ZpcF9hcHBsaWNhYmxlID0gZmFsc2VcbiAgICAgICAgbGV0IGlzX3NlbGVjdGVkX3VzZXJfdW5kZXJfdmlwID0gZmFsc2VcbiAgICAgICAgbGV0IGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfdmlwID0gZmFsc2VcbiAgICAgICAgbGV0IHZpcF9hbW91bnRcblxuICAgICAgICBsZXQgaXNfc2VsZWN0ZWRfdXNlcl92aXAgPSB0cnVlIC8vIHRvIGNoZWNrIGlzIHBsdXNfcGxhbiBpcyBhcHBsaWNhYmxlIG9yIG5vdFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV0gJiYgIXRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdLmlzRHVtbXlVc2VyKSB7XG4gICAgICAgICAgICBpc19zZWxlY3RlZF91c2VyX2luc3VyZWQgPSB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlXS5pc19pbnN1cmVkXG4gICAgICAgICAgICBpc19zZWxlY3RlZF91c2VyX3VuZGVyX3ZpcCA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdLmlzX3ZpcF9tZW1iZXJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMucHJvZmlsZXMpLm1hcChmdW5jdGlvbiAoW2tleSwgdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmlzX3ZpcF9tZW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNfc2VsZWN0ZWRfdXNlcl92aXAgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNfcGxhbl9hcHBsaWNhYmxlID0gZmFsc2VcbiAgICAgICAgbGV0IGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfcGxhbiA9IHRydWVcbiAgICAgICAgbGV0IGlzX3NlbGVjdGVkX3VzZXJfaGFzX2FjdGl2ZV9wbGFuID0gZmFsc2VcbiAgICAgICAgbGV0IHNob3dfbGVuc2ZpdCA9IHRydWVcbiAgICAgICAgbGV0IGxlbnNmaXRfY291cG9ucyA9IG51bGxcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pc1VzZXJDYXJlZCAmJiB0aGlzLnByb3BzLmlzVXNlckNhcmVkLmhhc19hY3RpdmVfcGxhbikge1xuICAgICAgICAgICAgaXNfc2VsZWN0ZWRfdXNlcl9oYXNfYWN0aXZlX3BsYW4gPSB0aGlzLnByb3BzLmlzVXNlckNhcmVkLmhhc19hY3RpdmVfcGxhblxuICAgICAgICB9XG5cbiAgICAgICAgLy9DaGVjayBJZiBlYWNoIFRlc3RzIENvdmVyZWQgVW5kZXIgUGxhblxuICAgICAgICAvL0NoZWNrIElmIGVhY2ggVGVzdHMgQ292ZXJlZCBVbmRlciBJbnN1cmFuY2VcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdICYmIHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS50ZXN0cyAmJiB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfaW5zdXJhbmNlID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLnRlc3RzLm1hcCgodGVzdCwgaSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKHRlc3QuaW5zdXJhbmNlICYmIHRlc3QuaW5zdXJhbmNlLmlzX2luc3VyYW5jZV9jb3ZlcmVkICYmIHRlc3QuaW5zdXJhbmNlLmluc3VyYW5jZV90aHJlc2hvbGRfYW1vdW50ID49IHBhcnNlSW50KHRlc3QuZGVhbF9wcmljZSkpIHtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfaW5zdXJhbmNlID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGVzdC5pbmNsdWRlZF9pbl91c2VyX3BsYW4pIHtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfcGxhbiA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0ZXN0LmxlbnNmaXRfb2ZmZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0ZXN0LmxlbnNmaXRfb2ZmZXIuYXBwbGljYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd19sZW5zZml0ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbnNmaXRfY291cG9ucyA9IHRlc3QubGVuc2ZpdF9vZmZlci5jb3Vwb25cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGVzdC52aXAgJiYgdGVzdC52aXAuY292ZXJlZF91bmRlcl92aXApIHtcbiAgICAgICAgICAgICAgICAgICAgaXNfdGVzdHNfY292ZXJlZF91bmRlcl92aXAgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHZpcF9hbW91bnQgPSB0ZXN0LnZpcC52aXBfYW1vdW50XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfVxuICAgICAgICBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSA9IGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfaW5zdXJhbmNlICYmIGlzX3NlbGVjdGVkX3VzZXJfaW5zdXJlZFxuXG4gICAgICAgIGlzX3BsYW5fYXBwbGljYWJsZSA9IGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfcGxhbiAmJiBpc19zZWxlY3RlZF91c2VyX2hhc19hY3RpdmVfcGxhblxuXG4gICAgICAgIHNob3dfbGVuc2ZpdCA9IHNob3dfbGVuc2ZpdCAmJiB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0gJiYgdGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLnRlc3RzICYmIHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS50ZXN0cy5sZW5ndGhcblxuICAgICAgICAvKmlmKCF0aGlzLnN0YXRlLnNob3dfbGVuc2ZpdF9wb3B1cCAmJiAhdGhpcy5zdGF0ZS5sZW5zZml0X2RlY2xpbmUgJiYgc2hvd19sZW5zZml0ICYmICFpc19wbGFuX2FwcGxpY2FibGUgJiYgIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmIGxlbnNmaXRfY291cG9ucyAmJiBPYmplY3Qua2V5cyhsZW5zZml0X2NvdXBvbnMpLmxlbmd0aCA+IDAgJiYgdGhpcy5zdGF0ZS5jb3Vwb25JZCAhPWxlbnNmaXRfY291cG9ucy5jb3Vwb25faWQpe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd19sZW5zZml0X3BvcHVwOnRydWUsIGxlbnNmaXRfY291cG9uczpsZW5zZml0X2NvdXBvbnN9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0qL1xuICAgICAgICBpc192aXBfYXBwbGljYWJsZSA9IC8qaXNfdGVzdHNfY292ZXJlZF91bmRlcl92aXAgJiYqLyBpc19zZWxlY3RlZF91c2VyX3VuZGVyX3ZpcFxuICAgICAgICBsZXQgcHJlc2NyaXB0aW9uSWRzID0gW11cbiAgICAgICAgLy9DaGVjayBpZiBwcmlvciB0byB0ZXN0LCBwcmVzY3JpcHRpb24gZXhpc3QgZm9yIHRoZSBpbnN1cmVkIGN1c3RvbWVyIG9yIG5vdFxuICAgICAgICBpZiAoKHByZXNjcmlwdGlvblBpY2tlZCAmJiBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSkgfHwgdmlwX2lzX3ByZXNjcmlwdGlvbl9yZXF1aXJlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMudXNlcl9wcmVzY3JpcHRpb25zICYmIHRoaXMucHJvcHMudXNlcl9wcmVzY3JpcHRpb25zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSB1cGxvYWQgcHJlc2NyaXB0aW9uLlwiIH0pO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnVzZXJfcHJlc2NyaXB0aW9ucyAmJiB0aGlzLnByb3BzLnVzZXJfcHJlc2NyaXB0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyX3ByZXNjcmlwdGlvbnNbMF0uaW1nX3BhdGhfaWRzLm1hcCgoaW1nSWQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2NyaXB0aW9uSWRzLnB1c2goeyAncHJlc2NyaXB0aW9uJzogaW1nSWQuaWQgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9Db25maXJtYXRpb24gcG9wdXAgZm9yIHRoZSB0ZXN0cywgd2hvc2UgYW1vdW50IHBheWFibGUgaXMgMFxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93Q29uZmlybWF0aW9uUG9wdXAgPT0gJ2Nsb3NlJyAmJiAhYWRkVG9DYXJ0ICYmICh0b3RhbF9wcmljZSA9PSAwIHx8ICh0aGlzLnN0YXRlLnVzZV93YWxsZXQgJiYgdG90YWxfd2FsbGV0X2JhbGFuY2UgPiAwKSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q29uZmlybWF0aW9uUG9wdXA6ICdvcGVuJyB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNfc3BvX2FwcG9pbnRtZW50IHx8ICh0aGlzLnByb3BzLnBheW1lbnRfdHlwZSA9PSA2ICYmIFNUT1JBR0UuaXNBZ2VudCgpKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiBcIlwiIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3I6IFwiXCIgfSlcbiAgICAgICAgfVxuXG5cbiAgICAgICAvKiBsZXQgc3RhcnRfZGF0ZSA9IHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LmRhdGVcbiAgICAgICAgbGV0IHN0YXJ0X3RpbWUgPSB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC50aW1lLnZhbHVlXG4gICAgICAgKi8gbGV0IHRlc3RJZHMgPSB0aGlzLnByb3BzLmxhYl90ZXN0X2RhdGFbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0gfHwgW11cbiAgICAgICAgdGVzdElkcyA9IHRlc3RJZHMubWFwKHggPT4geC5pZClcbiAgICAgICAgbGV0IHV0bV90YWdzID0gdGhpcy5nZXRVdG1UYWdzKClcbiAgICAgICAgbGV0IHBvc3REYXRhID0ge1xuICAgICAgICAgICAgbGFiOiB0aGlzLnByb3BzLnNlbGVjdGVkTGFiLFxuICAgICAgICAgICAgdGVzdF9pZHM6IHRlc3RJZHMsXG4gICAgICAgICAgICBwcm9maWxlOiB0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZSxcbiAgICAgICAgICAgIGFkZHJlc3M6IHRoaXMucHJvcHMuc2VsZWN0ZWRBZGRyZXNzLFxuICAgICAgICAgICAgcGF5bWVudF90eXBlOiAxLCAvLyBUT0RPIDogU2VsZWN0IHBheW1lbnQgdHlwZVxuICAgICAgICAgICAgdXNlX3dhbGxldDogdGhpcy5wcm9wcy5wYXltZW50X3R5cGUgPT0gNiA/IGZhbHNlIDogdGhpcy5zdGF0ZS51c2Vfd2FsbGV0LFxuICAgICAgICAgICAgY2FydF9pdGVtOiB0aGlzLnN0YXRlLmNhcnRfaXRlbSxcbiAgICAgICAgICAgIHByZXNjcmlwdGlvbl9saXN0OiBwcmVzY3JpcHRpb25JZHMsXG4gICAgICAgICAgICBtdWx0aV90aW1pbmdzX2VuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBmcm9tX3dlYjogdHJ1ZSxcbiAgICAgICAgICAgIHV0bV90YWdzOiB1dG1fdGFnc1xuICAgICAgICB9XG4gICAgICAgIGxldCB2aXNpdG9yX2luZm8gPSBHVE0uZ2V0VmlzaXRvckluZm8oKVxuICAgICAgICBpZiAodmlzaXRvcl9pbmZvICYmIHZpc2l0b3JfaW5mby52aXNpdF9pZCkge1xuICAgICAgICAgICAgcG9zdERhdGFbJ3Zpc2l0X2lkJ10gPSB2aXNpdG9yX2luZm8udmlzaXRfaWRcbiAgICAgICAgICAgIHBvc3REYXRhWyd2aXNpdG9yX2lkJ10gPSB2aXNpdG9yX2luZm8udmlzaXRvcl9pZFxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkU2xvdCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90WydhbGwnXSkge1xuICAgICAgICAgICAgICAgIHBvc3REYXRhWydzZWxlY3RlZF90aW1pbmdzX3R5cGUnXSA9ICdjb21tb24nXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvc3REYXRhWydzZWxlY3RlZF90aW1pbmdzX3R5cGUnXSA9ICdzZXBhcmF0ZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5wYXltZW50X3R5cGUgPT0gNiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4pLmxlbmd0aCAmJiBpc19zZWxlY3RlZF91c2VyX3ZpcCkge1xuICAgICAgICAgICAgcG9zdERhdGFbJ3BsdXNfcGxhbiddID0gdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5pZFxuICAgICAgICAgICAgcG9zdERhdGFbJ3BsYW4nXSA9IHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW5cbiAgICAgICAgfVxuICAgICAgICAvL0NoZWNrIFNQTyBVVE0gVGFnc1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UgJiYgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnc2Vzc2lvbklkVmFsJykgJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MgJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MubGVuZ3RoICYmIHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnc3BvJykubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIGxldCBzcG9fdGFncyA9IHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnc3BvJylbMF1cbiAgICAgICAgICAgIGlmIChzcG9fdGFncy51dG1fdGFncykge1xuXG4gICAgICAgICAgICAgICAgcG9zdERhdGFbJ3V0bV9zcG9fdGFncyddID0gc3BvX3RhZ3MudXRtX3RhZ3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vQ2hlY2sgU0JJIFVUTSBUYWdzXG4gICAgICAgIGlmIChTVE9SQUdFICYmIFNUT1JBR0UuZ2V0QW55Q29va2llKCdzYmlfdXRtJykgJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MgJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MubGVuZ3RoICYmIHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnc2JpX3V0bScpLmxlbmd0aCkge1xuXG4gICAgICAgICAgICBsZXQgdGFncyA9IHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnc2JpX3V0bScpWzBdXG4gICAgICAgICAgICBpZiAodGFncy51dG1fdGFncykge1xuXG4gICAgICAgICAgICAgICAgcG9zdERhdGFbJ3V0bV9zYmlfdGFncyddID0gdGFncy51dG1fdGFnc1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmxvY2F0aW9uICYmIGRvY3VtZW50LmxvY2F0aW9uLmhvc3QgJiYgZG9jdW1lbnQubG9jYXRpb24uaG9zdC5pbmNsdWRlcygnc2JpJykpIHtcbiAgICAgICAgICAgIHBvc3REYXRhWyd1dG1fc2JpX3RhZ3MnXSA9IHtcbiAgICAgICAgICAgICAgICB1dG1fdGFnczoge1xuICAgICAgICAgICAgICAgICAgICB1dG1fc291cmNlOiAnc2JpX3V0bScsXG4gICAgICAgICAgICAgICAgICAgIHV0bV90ZXJtOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgdXRtX21lZGl1bTogJycsXG4gICAgICAgICAgICAgICAgICAgIHV0bV9jYW1wYWlnbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9idWlsZCBkYXRhIGZvciBldmVyeSBzZWxlY3RlZCB0ZXN0cyB3aXRoIHRoZWlyIHNlbGVjdGVkIHRpbWVzbG90LlxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3Quc2VsZWN0ZWRUZXN0c1RpbWVTbG90KSB7XG4gICAgICAgICAgICBsZXQgdGVzdHMgPSBbXVxuXG4gICAgICAgICAgICB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMubWFwKCh0d3ApID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5zZWxlY3RlZFRlc3RzVGltZVNsb3RbdHdwLnRlc3RfaWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXN0ID0gdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3Quc2VsZWN0ZWRUZXN0c1RpbWVTbG90W3R3cC50ZXN0X2lkXVxuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IDNcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR3cC5pc19yYWRpb2xvZ3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAxXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHdwLmlzX3BhdGhvbG9neSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IDJcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRlc3RzLnB1c2goeyB0ZXN0OiB0ZXN0LnRlc3RfaWQsIHR5cGU6IHR5cGUsIHN0YXJ0X2RhdGU6IHRlc3QuZGF0ZSwgc3RhcnRfdGltZTogdGVzdC50aW1lLnZhbHVlLCBpc19ob21lX3BpY2t1cDogdGVzdC5pc19ob21lX3BpY2t1cCB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBwb3N0RGF0YVsndGVzdF90aW1pbmdzJ10gPSB0ZXN0c1xuICAgICAgICB9XG4gICAgICAgIGxldCBwcm9maWxlRGF0YSA9IHsgLi4ucGF0aWVudCB9XG4gICAgICAgIGlmIChwcm9maWxlRGF0YSAmJiBwcm9maWxlRGF0YS53aGF0c2FwcF9vcHRpbiA9PSBudWxsKSB7XG4gICAgICAgICAgICBwcm9maWxlRGF0YVsnd2hhdHNhcHBfb3B0aW4nXSA9IHRoaXMuc3RhdGUud2hhdHNhcHBfb3B0aW5cbiAgICAgICAgICAgIHRoaXMucHJvcHMuZWRpdFVzZXJQcm9maWxlKHByb2ZpbGVEYXRhLCBwcm9maWxlRGF0YS5pZClcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5wYXltZW50X3R5cGUgIT0gNiAmJiB0aGlzLnByb3BzLmxhYkNvdXBvbnMgJiYgdGhpcy5wcm9wcy5sYWJDb3Vwb25zW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdICYmIHRoaXMucHJvcHMubGFiQ291cG9uc1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS5sZW5ndGggJiYgdGhpcy5wcm9wcy5kaXNDb3VudGVkTGFiUHJpY2UgPj0gMCAmJiAhaXNfcGxhbl9hcHBsaWNhYmxlICYmICFpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAvKiYmICFpc192aXBfYXBwbGljYWJsZSovKSB7XG4gICAgICAgICAgICBwb3N0RGF0YVsnY291cG9uX2NvZGUnXSA9IHRoaXMuc3RhdGUuY291cG9uQ29kZSA/IFt0aGlzLnN0YXRlLmNvdXBvbkNvZGVdIDogW11cbiAgICAgICAgfVxuXG4gICAgICAgIC8vUG9zdCBQaW5jb2RlICYgdGh5cm9jYXJlIGRhdGFcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXSAmJiB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0ubGFiICYmIHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS5sYWIuaXNfdGh5cm9jYXJlKSB7XG5cbiAgICAgICAgICAgIGxldCBwaW5jb2RlID0gdGhpcy5zdGF0ZS5waW5jb2RlXG4gICAgICAgICAgICBwb3N0RGF0YVsncGluY29kZSddID0gcGluY29kZS50b1N0cmluZygpIHx8IFwiXCJcbiAgICAgICAgICAgIHBvc3REYXRhWydpc190aHlyb2NhcmUnXSA9IHRydWVcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9zdERhdGFbJ3BpbmNvZGUnXSA9IFwiXCJcbiAgICAgICAgICAgIHBvc3REYXRhWydpc190aHlyb2NhcmUnXSA9IGZhbHNlXG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKGFkZFRvQ2FydCkge1xuICAgICAgICAgICAgLy9PbiBhZGQgdG8gQ2FydCBDbGlja2VkXG5cbiAgICAgICAgICAgIC8vU2luZ2xlIEZsb3cgQWdlbnQgQm9va2luZ1xuICAgICAgICAgICAgaWYgKFNUT1JBR0UuaXNBZ2VudCgpICYmIHRoaXMucHJvcHMucGF5bWVudF90eXBlID09IDYpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXh0cmFQYXJhbXMgJiYgZXh0cmFQYXJhbXMuc2VuZFdoYXRzdXApIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zdERhdGFbJ21lc3NhZ2VfbWVkaXVtJ10gPSAnV0hBVFNBUFAnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZFNpbmdsZUZsb3dBZ2VudEJvb2tpbmdVUkwocG9zdERhdGEpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMYWJBZGRUb0NhcnRDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbGFiLWFkZC10by1jYXJ0LWNsaWNrZWQnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFkZFRvQ2FydCgyLCBwb3N0RGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gaWYgKCF0aGlzLnN0YXRlLmNhcnRfaXRlbSAmJiAhdGhpcy5zdGF0ZS5pc19zcG9fYXBwb2ludG1lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5wcm9wcy5jbGVhckV4dHJhVGVzdHMoKVxuICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmlzX3Nwb19hcHBvaW50bWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRBZ2VudEJvb2tpbmdVUkwoKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvY2FydCcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gXCJFcnJvciBhZGRpbmcgdG8gY2FydCFcIlxuICAgICAgICAgICAgICAgIGlmIChlcnIubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuaW5jbHVkZXMoJ0l0ZW0gYWxyZWFkeSBleGlzdHMgaW4gY2FydC4nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jYXJ0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIGVycm9yOiBtZXNzYWdlIH0pXG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBtZXNzYWdlIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0xhYlByb2NlZWRDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbGFiLXByb2NlZWQtY2xpY2tlZCdcbiAgICAgICAgfVxuXG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQXBwb2ludG1lbnRUeXBlJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnYXBwb2ludG1lbnQtdHlwZScsICdhcHBvaW50bWVudFR5cGUnOiAnJywgJ3JfcGlja3VwJzogdGhpcy5wcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZS5yX3BpY2t1cCwgJ3BfcGlja3VwJzogdGhpcy5wcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZS5wX3BpY2t1cFxuICAgICAgICB9XG5cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuXG4gICAgICAgIGxldCBhbmFseXRpY0RhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0xhYkNvbmZpcm1Cb29raW5nQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2xhYi1jb25maXJtLWJvb2tpbmctY2xpY2tlZCdcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogYW5hbHl0aWNEYXRhIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYXltZW50QnRuQ2xpY2tlZDogdHJ1ZSB9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5jcmVhdGVMQUJBcHBvaW50bWVudChwb3N0RGF0YSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlcnIpIHtcblxuICAgICAgICAgICAgICAgIC8vQ2xlYXIgU1BPIFVUTSBUYWdzIGFmdGVyIGFwcG9pbnRtZW50cyBjcmVhdGlvblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmlzX3Nwb19hcHBvaW50bWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVuU2V0Q29tbW9uVXRtVGFncygnc3BvJylcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL1JlbW92ZSBjb3Vwb25zIGFuZCBjbGVhciBwcmVzY3JpcHRpb24gYWZ0ZXIgYXBwb2ludG1lbnQgY3JlYXRpb25cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy51c2VyX3ByZXNjcmlwdGlvbnMgJiYgdGhpcy5wcm9wcy51c2VyX3ByZXNjcmlwdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlbW92ZUxhYkNvdXBvbnModGhpcy5wcm9wcy5zZWxlY3RlZExhYiwgdGhpcy5zdGF0ZS5jb3Vwb25JZClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGVhclByZXNjcmlwdGlvbnMoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5pc19hZ2VudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlbW92ZUxhYkNvdXBvbnModGhpcy5wcm9wcy5zZWxlY3RlZExhYiwgdGhpcy5zdGF0ZS5jb3Vwb25JZClcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UodGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZSArIGA/b3JkZXJfaWQ9JHtkYXRhLmRhdGEub3JkZXJJZH1gKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3JkZXJfaWQ6IGRhdGEuZGF0YS5vcmRlcklkIH0pXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5wYXltZW50X3JlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHBheW1lbnQgaXMgcmVxdWlyZWQsIHNlbmQgdG8gcGF5bWVudCBzZWxlY3Rpb24gcGFnZVxuICAgICAgICAgICAgICAgICAgICBsZXQgYW5hbHl0aWNEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMYWJPcmRlckNyZWF0ZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdsYWJfb3JkZXJfY3JlYXRlZCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogYW5hbHl0aWNEYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvcGF5bWVudC8ke2RhdGEuZGF0YS5vcmRlcklkfT9yZWZzPWxhYmApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1BheW1lbnQoZGF0YSlcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVMYWJDb3Vwb25zKHRoaXMucHJvcHMuc2VsZWN0ZWRMYWIsIHRoaXMuc3RhdGUuY291cG9uSWQpXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlbmQgYmFjayB0byBhcHBvaW50bWVudCBwYWdlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKGAvb3JkZXIvc3VtbWFyeS8ke2RhdGEuZGF0YS5vcmRlcklkfT9wYXltZW50X3N1Y2Nlc3M9dHJ1ZWApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGF5bWVudEJ0bkNsaWNrZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlXG4gICAgICAgICAgICAgICAgaWYgKGVyci5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyLmVycm9yXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiQ291bGQgbm90IGNyZWF0ZSBhcHBvaW50bWVudC4gVHJ5IGFnYWluIGxhdGVyICFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGVyci5tZXNzYWdlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IG1lc3NhZ2UgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcm9jZXNzUGF5bWVudChkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEuc3RhdHVzKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGF5bWVudERhdGE6IGRhdGEuZGF0YSB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF5bWVudEZvcm0nKSAmJiBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnBheW1lbnREYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXltZW50Rm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlbW92ZUxhYkNvdXBvbnModGhpcy5wcm9wcy5zZWxlY3RlZExhYiwgdGhpcy5zdGF0ZS5jb3Vwb25JZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMDApXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnN1Ym1pdCgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VuZEFnZW50Qm9va2luZ1VSTCgpIHtcbiAgICAgICAgLy9mb3IgYWdlbnQgbG9naW4gc2VuZCBib29raW5nIHVybFxuICAgICAgICBsZXQgcG9zdERhdGEgPSB7fVxuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UgJiYgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnc2Vzc2lvbklkVmFsJykgJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MgJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MubGVuZ3RoICYmIHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnc3BvJykubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIGxldCBzcG9fdGFncyA9IHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnc3BvJylbMF1cbiAgICAgICAgICAgIGlmIChzcG9fdGFncy51dG1fdGFncykge1xuICAgICAgICAgICAgICAgIHBvc3REYXRhID0gc3BvX3RhZ3MudXRtX3RhZ3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvcHMuc2VuZFNQT0FnZW50Qm9va2luZyhwb3N0RGF0YSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlNNUyBTRU5EIEVSUk9SXCIgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51blNldENvbW1vblV0bVRhZ3MoJ3NwbycpXG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlNNUyBTRU5UIFNVQ0NFU1NGVUxZXCIgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhcHBseUNvdXBvbnMoKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5jb3Jwb3JhdGVDb3Vwb24pIHtcbiAgICAgICAgICAgIGxldCBhbmFseXRpY0RhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMYWJDb3Vwb25zQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2xhYi1jb3Vwb25zLWNsaWNrZWQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogYW5hbHl0aWNEYXRhIH0pXG5cbiAgICAgICAgICAgIGxldCB0ZXN0X2lkcyA9IFtdXG4gICAgICAgICAgICB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMubWFwKCh0d3AsIGkpID0+IHtcbiAgICAgICAgICAgICAgICB0ZXN0X2lkcy5wdXNoKHR3cC50ZXN0X2lkKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbGV0IHsgZmluYWxQcmljZSB9ID0gdGhpcy5nZXRMYWJQcmljZURhdGEodGhpcy5wcm9wcylcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBheV9idG5fbG9hZGluZzogdHJ1ZSB9KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9jb3Vwb24vbGFiLyR7dGhpcy5wcm9wcy5zZWxlY3RlZExhYn0vY291cG9ucz90ZXN0X2lkcz0ke3Rlc3RfaWRzfSZkZWFsX3ByaWNlPSR7ZmluYWxQcmljZX0mY2FydF9pdGVtPSR7dGhpcy5zdGF0ZS5jYXJ0X2l0ZW0gfHwgXCJcIn1gKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xvc2VFcnJvclBvcHVwID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6ICcnIH0pXG4gICAgfVxuXG4gICAgZ2V0Qm9va2luZ0J1dHRvblRleHQodG90YWxfd2FsbGV0X2JhbGFuY2UsIHByaWNlX3RvX3BheSwgaXNfdmlwX2FwcGxpY2FibGUsIHZpcF9hbW91bnQsIGV4dHJhQWxsUGFyYW1zKSB7XG4gICAgICAgIGxldCBwcmljZV9mcm9tX3dhbGxldCA9IDBcbiAgICAgICAgbGV0IHByaWNlX2Zyb21fcGcgPSAwXG5cbiAgICAgICAgaWYgKGlzX3ZpcF9hcHBsaWNhYmxlIHx8IChleHRyYUFsbFBhcmFtcyAmJiBleHRyYUFsbFBhcmFtcy5pc19nb2xkX21lbWJlcikpIHtcbiAgICAgICAgICAgIC8vIGlmKHZpcF9hbW91bnQpe1xuICAgICAgICAgICAgLy8gICAgIHJldHVybiBgQ29uZmlybSBCb29raW5nICjigrkgJHtleHRyYUFsbFBhcmFtcy50b3RhbF9hbW91bnRfcGF5YWJsZX0pYFxuICAgICAgICAgICAgLy8gfWVsc2V7XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIGBDb25maXJtIEJvb2tpbmdgXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBwcmljZV90b19wYXkgPSBleHRyYUFsbFBhcmFtcy50b3RhbF9hbW91bnRfcGF5YWJsZVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnVzZV93YWxsZXQgJiYgdG90YWxfd2FsbGV0X2JhbGFuY2UgJiYgdGhpcy5wcm9wcy5wYXltZW50X3R5cGUgIT0gNikge1xuICAgICAgICAgICAgcHJpY2VfZnJvbV93YWxsZXQgPSBNYXRoLm1pbih0b3RhbF93YWxsZXRfYmFsYW5jZSwgcHJpY2VfdG9fcGF5KVxuICAgICAgICB9XG5cbiAgICAgICAgcHJpY2VfZnJvbV9wZyA9IHByaWNlX3RvX3BheSAtIHByaWNlX2Zyb21fd2FsbGV0XG5cbiAgICAgICAgaWYgKHByaWNlX2Zyb21fcGcpIHtcbiAgICAgICAgICAgIHJldHVybiBgQ29udGludWUgdG8gcGF5ICjigrkgJHtwcmljZV9mcm9tX3BnfSlgXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYENvbmZpcm0gQm9va2luZ2BcbiAgICB9XG5cbiAgICBzZXRQaW5jb2RlKHBpbmNvZGUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5zYXZlUGluY29kZShwaW5jb2RlKVxuICAgICAgICBsZXQgc2xvdCA9IHsgdGltZToge30gfVxuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdExhYlRpbWVTTG90KHNsb3QsIGZhbHNlKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1BpbmNvZGVQb3B1cDogZmFsc2UsIHBpbmNvZGU6IHBpbmNvZGUgfSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKCd0aW1lJylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjbGlja1BpbmNvZGVFcnJyb3JQb3BVcCh0eXBlKSB7XG4gICAgICAgIGlmICh0eXBlID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwaW5jb2RlTWlzbWF0Y2hFcnJvcjogZmFsc2UsIHNob3dQaW5jb2RlUG9wdXA6IHRydWUgfSwgKCkgPT4ge1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdXNlci9hZGRyZXNzP3BpY2s9dHJ1ZScpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnb1RvUHJvZmlsZShpZCwgdXJsKSB7XG4gICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHt1cmx9YClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvbGFiLyR7aWR9YClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZVdoYXRzYXAoc3RhdHVzLCBlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB3aGF0c2FwcF9vcHRpbjogc3RhdHVzIH0pXG4gICAgfVxuXG4gICAgY2xlYXJUZXN0Rm9ySW5zdXJlZCgpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGUgJiYgdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXSAmJiAodGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXS5pc19pbnN1cmVkIHx8IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0uaXNfdmlwX21lbWJlciB8fCB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGVdLmlzX3ZpcF9nb2xkX21lbWJlcikpIHtcblxuICAgICAgICAvLyAgICAgaWYodGhpcy5wcm9wcy5zZWxlY3RlZExhYiAmJiB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0gJiYgdGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLnRlc3RzICYmIHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS50ZXN0cy5sZW5ndGggPT0xKXtcblxuICAgICAgICAvLyAgICAgfWVsc2V7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wcm9wcy5jbGVhckV4dHJhVGVzdHMoKSAgICBcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIHRoaXMucHJvcHMuZ2V0TGFiQnlJZCh0aGlzLnByb3BzLnNlbGVjdGVkTGFiKVxuICAgICAgICAvLyAgICAgcmV0dXJuXG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBzZWFyY2hUZXN0cygpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RTZWFyY2hUeXBlKCdsYWInKVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3NlYXJjaCcpXG4gICAgfVxuXG4gICAgcHJpY2VDb25maXJtYXRpb25Qb3B1cChjaG9pY2UpIHtcbiAgICAgICAgaWYgKCFjaG9pY2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q29uZmlybWF0aW9uUG9wdXA6ICdjbG9zZScgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q29uZmlybWF0aW9uUG9wdXA6ICdjbG9zZScgfSlcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybV9ib29raW5nJykpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybV9ib29raW5nJykuY2xpY2soKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ29Ub0luc3VyYW5jZShsYWJEZXRhaWwpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7fVxuICAgICAgICBkYXRhLnRodW1ibmFpbCA9IGxhYkRldGFpbC5sYWJfdGh1bWJuYWlsXG4gICAgICAgIGRhdGEubmFtZSA9IGxhYkRldGFpbC5uYW1lXG4gICAgICAgIGRhdGEuaWQgPSBsYWJEZXRhaWwuaWRcbiAgICAgICAgZGF0YS50eXBlID0gJ2xhYidcbiAgICAgICAgdGhpcy5wcm9wcy5zYXZlQXZhaWxOb3dJbnN1cmFuY2UoZGF0YSlcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvaW5zdXJhbmNlLXBsYW5zP3NvdXJjZT1kb2N0b3Itc3VtbWFyeS12aWV3JnNob3dfYnV0dG9uPXRydWUnKVxuICAgIH1cblxuICAgIHRlc3RJbmZvKHRlc3RfaWQsIGxhYl9pZCwgdGVzdF91cmwsIGV2ZW50KSB7XG4gICAgICAgIGxldCBzZWxlY3RlZF90ZXN0X2lkcyA9IFtdXG4gICAgICAgIC8vIE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzKS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlXSkge1xuICAgICAgICAvLyAgICAgc2VsZWN0ZWRfdGVzdF9pZHMucHVzaCh2YWx1ZS5pZClcbiAgICAgICAgLy8gfSlcbiAgICAgICAgdmFyIHVybF9zdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgdmFyIHVybCA9IG5ldyBVUkwodXJsX3N0cmluZyk7XG4gICAgICAgIHZhciBzZWFyY2hfaWQgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInNlYXJjaF9pZFwiKTtcbiAgICAgICAgbGV0IGxhdCA9IDI4LjY0NDgwMFxuICAgICAgICBsZXQgbG9uZyA9IDc3LjIxNjcyMVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICBsYXQgPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubGF0XG4gICAgICAgICAgICBsb25nID0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxhdCA9PT0gJ2Z1bmN0aW9uJykgbGF0ID0gbGF0KClcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbG9uZyA9PT0gJ2Z1bmN0aW9uJykgbG9uZyA9IGxvbmcoKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0ZXN0X3VybCAmJiB0ZXN0X3VybCAhPSAnJykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nICsgdGVzdF91cmwgKyAnP3Rlc3RfaWRzPScgKyB0ZXN0X2lkICsgJyZzZWxlY3RlZF90ZXN0X2lkcz0nICsgc2VsZWN0ZWRfdGVzdF9pZHMgKyAnJnNlYXJjaF9pZD0nICsgc2VhcmNoX2lkICsgJyZsYWJfaWQ9JyArIGxhYl9pZCArICcmbGF0PScgKyBsYXQgKyAnJmxvbmc9JyArIGxvbmcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3NlYXJjaC90ZXN0aW5mbz90ZXN0X2lkcz0nICsgdGVzdF9pZCArICcmc2VsZWN0ZWRfdGVzdF9pZHM9JyArIHNlbGVjdGVkX3Rlc3RfaWRzICsgJyZzZWFyY2hfaWQ9JyArIHNlYXJjaF9pZCArICcmbGFiX2lkPScgKyBsYWJfaWQgKyAnJmxhdD0nICsgbGF0ICsgJyZsb25nPScgKyBsb25nKVxuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICd0ZXN0SW5mb0NsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAndGVzdC1pbmZvLWNsaWNrJywgJ3BhZ2VTb3VyY2UnOiAnbGFiLXJlc3VsdC1wYWdlJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgfVxuXG4gICAgcmVtb3ZlVGVzdCh0d3ApIHtcbiAgICAgICAgbGV0IHRlc3QgPSBPYmplY3QuYXNzaWduKHt9LCB0d3AudGVzdClcbiAgICAgICAgdGVzdC5leHRyYV90ZXN0ID0gdHJ1ZVxuICAgICAgICB0ZXN0LmxhYl9pZCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRMYWJcbiAgICAgICAgdGVzdC5yZW1vdmVUZXN0ID0gdHJ1ZVxuICAgICAgICB0ZXN0LnNlbGVjdGVkTGFiVGVzdHMgPSB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl1cbiAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSgndGVzdCcsIHRlc3QpXG4gICAgfVxuXG4gICAgYXBwbHlMZW5zRml0Q291cG9ucyhkZWFsX3ByaWNlLCBjb3Vwb24pIHtcbiAgICAgICAgbGV0IHsgZmluYWxQcmljZSwgdGVzdF9pZHMgfSA9IHRoaXMuZ2V0TGFiUHJpY2VEYXRhKHRoaXMucHJvcHMpXG4gICAgICAgIGNvdXBvbi5maW5hbFByaWNlID0gZmluYWxQcmljZVxuICAgICAgICBjb3Vwb24udGVzdF9pZHMgPSB0ZXN0X2lkc1xuICAgICAgICBjb3Vwb24uTEFCUyA9IHRoaXMucHJvcHMuTEFCU1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTGVuc0ZpdExhYkFwcGx5Q2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2xlbnNmaXQtbGFiLWFwcGx5LWNsaWNrZWQnXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgdGhpcy5nZXRBbmRBcHBseUJlc3RDb3Vwb25zKGNvdXBvbiwgdHJ1ZSlcbiAgICB9XG5cbiAgICBjbG9zZUxlbnNGaXRQb3B1cCgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0xlbnNGaXRMYWJEb250V2FudENsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdsZW5zZml0LWxhYi1kb250LXdhbnQtY2xpY2tlZCdcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93X2xlbnNmaXRfcG9wdXA6IGZhbHNlLCBsZW5zZml0X2RlY2xpbmU6IHRydWUgfSwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtX2Jvb2tpbmcnKSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtX2Jvb2tpbmcnKS5jbGljaygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe3Nob3dfbGVuc2ZpdF9wb3B1cDpmYWxzZSxsZW5zZml0X2RlY2xpbmU6dHJ1ZX0pXG4gICAgfVxuXG4gICAgdG9nZ2xlR29sZFBsYW5zID0gKHBsYW4pID0+IHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1RvZ2dsZUxhYkdvbGRQbGFuQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3RvZ2dsZS1sYWItZ29sZC1wbGFuLWNsaWNrZWQnLCAncGxhbic6IHBsYW4uaWRcbiAgICAgICAgfVxuXG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWN0VmlwQ2x1YlBsYW4oJ3BsYW4nLCBwbGFuKSAvLyB0b2dnbGUvc2VsZWN0IHZpcCBwbGFuXG4gICAgICAgIHRoaXMudG9nZ2xlR29sZFByaWNlUG9wdXAoKVxuICAgIH1cblxuICAgIHRvZ2dsZUdvbGRQcmljZVBvcHVwID0gKHZhbHVlID0gZmFsc2UpID0+IHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0NoYW5nZVBsYW5MYWJDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2hhbmdlLXBsYW4tbGFiLWNsaWNrZWQnXG4gICAgICAgIH1cblxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0dvbGRQcmljZUxpc3Q6IHZhbHVlIH0pXG4gICAgfVxuXG4gICAgZ29Ub0dvbGRQYWdlID0gKCkgPT4ge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnR29Ub0dvbGRQbGFuQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2dvLXRvLWdvbGQtcGxhbi1jbGlja2VkJ1xuICAgICAgICB9XG5cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy92aXAtZ29sZC1kZXRhaWxzP2lzX2dvbGQ9dHJ1ZSZzb3VyY2U9bW9iaWxlLWxhYi1zdW1tYXJ5LWdvbGQtY2xpY2tlZCZsZWFkX3NvdXJjZT1Eb2NwcmltZSZib29raW5nX3BhZ2U9bGFiJylcbiAgICB9XG5cbiAgICBnZXREYXRhQWZ0ZXJMb2dpbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaERhdGEodGhpcy5wcm9wcylcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGFiR29sZFByZWRpY3RlZFByaWNlICYmIHRoaXMucHJvcHMubGFiR29sZFByZWRpY3RlZFByaWNlLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkUGFja2FnZSA9IHRoaXMucHJvcHMubGFiR29sZFByZWRpY3RlZFByaWNlLmZpbHRlcih4ID0+IHguaWQgPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZFZpcEdvbGRQYWNrYWdlSWQpXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRQYWNrYWdlICYmIHNlbGVjdGVkUGFja2FnZS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkUGFja2FnZSA9IHRoaXMucHJvcHMubGFiR29sZFByZWRpY3RlZFByaWNlLmZpbHRlcih4ID0+IHguaXNfc2VsZWN0ZWQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRQYWNrYWdlICYmIHNlbGVjdGVkUGFja2FnZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdFZpcENsdWJQbGFuKCdwbGFuJywgc2VsZWN0ZWRQYWNrYWdlWzBdKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBnZXRTZWxlY3RlZFVzZXJEYXRhKHByb3BzKSB7XG4gICAgICAgIGxldCB0b3RhbF9hbW91bnRfcGF5YWJsZV93aXRob3V0X2NvdXBvbiA9IG51bGxcbiAgICAgICAgbGV0IGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfcGxhbiA9IHRydWVcbiAgICAgICAgbGV0IGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfdmlwID0gdHJ1ZVxuICAgICAgICBsZXQgdmlwX2RhdGEgPSB7fVxuICAgICAgICBsZXQgdmlwX3RvdGFsX2Ftb3VudCA9IDBcbiAgICAgICAgbGV0IHZpcF90b3RhbF9jb252ZW5pZW5jZV9hbW91bnQgPSAwXG4gICAgICAgIGxldCB2aXBfdG90YWxfZ29sZF9wcmljZSA9IDBcbiAgICAgICAgbGV0IGlzX2FsbF9lbmFibGVfZm9yX3ZpcCA9IHRydWVcbiAgICAgICAgbGV0IGlzX2FsbF9lbmFibGVfZm9yX2dvbGQgPSB0cnVlXG4gICAgICAgIGxldCBpc19ob21lX2NoYXJnZXNfYXBwbGljYWJsZSA9IGZhbHNlXG4gICAgICAgIGxldCBsYWJEZXRhaWwgPSB7fVxuICAgICAgICBpZiAocHJvcHMuTEFCU1twcm9wcy5zZWxlY3RlZExhYl0gJiYgcHJvcHMuTEFCU1twcm9wcy5zZWxlY3RlZExhYl0udGVzdHMgJiYgcHJvcHMuTEFCU1twcm9wcy5zZWxlY3RlZExhYl0udGVzdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgcGF0aWVudCA9IG51bGxcbiAgICAgICAgICAgIGxhYkRldGFpbCA9IHByb3BzLkxBQlNbcHJvcHMuc2VsZWN0ZWRMYWJdLmxhYlxuICAgICAgICAgICAgbGV0IGlzX2hvbWVfY29sbGVjdGlvbl9lbmFibGVkID0gZmFsc2VcbiAgICAgICAgICAgIGlmIChpc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCAmJiBwcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZSAmJiAocHJvcHMuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGUucl9waWNrdXAgPT0gJ2hvbWUnIHx8IHByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlLnBfcGlja3VwID09ICdob21lJykpIHtcbiAgICAgICAgICAgICAgICBpc19ob21lX2NoYXJnZXNfYXBwbGljYWJsZSA9IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHByb3BzLnByb2ZpbGVzW3Byb3BzLnNlbGVjdGVkUHJvZmlsZV0gJiYgIXByb3BzLnByb2ZpbGVzW3Byb3BzLnNlbGVjdGVkUHJvZmlsZV0uaXNEdW1teVVzZXIpIHtcbiAgICAgICAgICAgICAgICBwYXRpZW50ID0gcHJvcHMucHJvZmlsZXNbcHJvcHMuc2VsZWN0ZWRQcm9maWxlXVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcm9wcy5MQUJTW3Byb3BzLnNlbGVjdGVkTGFiXS50ZXN0cy5tYXAoKHRlc3QsIGkpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICh0ZXN0LmluY2x1ZGVkX2luX3VzZXJfcGxhbikge1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXNfdGVzdHNfY292ZXJlZF91bmRlcl9wbGFuID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGVzdC52aXAgJiYgISh0ZXN0LnZpcC5jb3ZlcmVkX3VuZGVyX3ZpcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNfdGVzdHNfY292ZXJlZF91bmRlcl92aXAgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghKHRlc3QudmlwLmlzX2VuYWJsZV9mb3JfdmlwKSkge1xuICAgICAgICAgICAgICAgICAgICBpc19hbGxfZW5hYmxlX2Zvcl92aXAgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoISh0ZXN0LnZpcC5pc19nb2xkKSkge1xuICAgICAgICAgICAgICAgICAgICBpc19hbGxfZW5hYmxlX2Zvcl9nb2xkID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2aXBfdG90YWxfYW1vdW50ICs9IHBhcnNlSW50KHRlc3QudmlwLnZpcF9hbW91bnQpXG4gICAgICAgICAgICAgICAgdmlwX3RvdGFsX2NvbnZlbmllbmNlX2Ftb3VudCArPSBwYXJzZUludCh0ZXN0LnZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50KVxuICAgICAgICAgICAgICAgIHZpcF90b3RhbF9nb2xkX3ByaWNlICs9IHBhcnNlSW50KHRlc3QudmlwLnZpcF9nb2xkX3ByaWNlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIHZpcF90b3RhbF9jb252ZW5pZW5jZV9hbW91bnQgPSAwXG4gICAgICAgICAgICBpZiAoaXNfYWxsX2VuYWJsZV9mb3JfdmlwICYmIHBhdGllbnQpIHtcblxuXG4gICAgICAgICAgICAgICAgaWYgKGlzX2FsbF9lbmFibGVfZm9yX2dvbGQgJiYgcGF0aWVudC5pc192aXBfZ29sZF9tZW1iZXIpIHtcblxuICAgICAgICAgICAgICAgICAgICB0b3RhbF9hbW91bnRfcGF5YWJsZV93aXRob3V0X2NvdXBvbiA9IHZpcF90b3RhbF9hbW91bnQgKyB2aXBfdG90YWxfY29udmVuaWVuY2VfYW1vdW50ICsgKGlzX2hvbWVfY2hhcmdlc19hcHBsaWNhYmxlID8gbGFiRGV0YWlsLmhvbWVfcGlja3VwX2NoYXJnZXMgOiAwKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGF0aWVudC5pc192aXBfbWVtYmVyLyogJiYgaXNfdGVzdHNfY292ZXJlZF91bmRlcl92aXAqLykge1xuICAgICAgICAgICAgICAgICAgICB0b3RhbF9hbW91bnRfcGF5YWJsZV93aXRob3V0X2NvdXBvbiA9IHZpcF90b3RhbF9hbW91bnQgKyAoaXNfaG9tZV9jaGFyZ2VzX2FwcGxpY2FibGUgPyBsYWJEZXRhaWwuaG9tZV9waWNrdXBfY2hhcmdlcyA6IDApXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghcHJvcHMuaXNfYW55X3VzZXJfYnV5X2dvbGQgJiYgcHJvcHMucGF5bWVudF90eXBlID09IDYgJiYgcHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4gJiYgcHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4ubGFiICYmIHByb3BzLkxBQlNbcHJvcHMuc2VsZWN0ZWRMYWJdLnRlc3RzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdG90YWxfYW1vdW50X3BheWFibGVfd2l0aG91dF9jb3Vwb24gPSBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc190ZXN0c19jb3ZlcmVkX3VuZGVyX3BsYW4gPSBmYWxzZVxuICAgICAgICAgICAgaXNfdGVzdHNfY292ZXJlZF91bmRlcl92aXAgPSBmYWxzZVxuICAgICAgICAgICAgaXNfYWxsX2VuYWJsZV9mb3JfdmlwID0gZmFsc2VcbiAgICAgICAgICAgIGlzX2FsbF9lbmFibGVfZm9yX2dvbGQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHRvdGFsX2Ftb3VudF9wYXlhYmxlX3dpdGhvdXRfY291cG9uIH1cblxuICAgIH1cblxuICAgIG5vbklwZExlYWRzKHVzZXJfcGhvbmVfbnVtYmVyLCB1c2VyX25hbWUpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBwYXRpZW50ID0gbnVsbFxuICAgICAgICBsZXQgZGF0YSA9IHt9XG4gICAgICAgIGxldCBzZWxlY3RlZF90ZXN0X25hbWUgPSAnJ1xuICAgICAgICBsZXQgc2VsZWN0ZWRfdGVzdFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdICYmIHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS50ZXN0cyAmJiB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS50ZXN0cy5tYXAoKHRlc3QsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QpLmxlbmd0aCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5zZWxlY3RlZFRlc3RzVGltZVNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfdGVzdCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LnNlbGVjdGVkVGVzdHNUaW1lU2xvdFt0ZXN0LnRlc3RfaWRdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfdGVzdF9uYW1lICs9IHRlc3QudGVzdC5uYW1lXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfdGVzdF9uYW1lICs9IHRlc3QudGVzdC5uYW1lICsgJywnXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdICYmICF0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlXS5pc0R1bW15VXNlcikge1xuICAgICAgICAgICAgICAgIHBhdGllbnQgPSB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlXVxuICAgICAgICAgICAgICAgIGRhdGEuY3VzdG9tZXJfbmFtZSA9IHBhdGllbnQubmFtZVxuICAgICAgICAgICAgICAgIGRhdGEucGhvbmVfbnVtYmVyID0gcGF0aWVudC5waG9uZV9udW1iZXJcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGF0YS5sZWFkX3R5cGUgPSAnRFJPUE9GRidcbiAgICAgICAgICAgIGRhdGEubGVhZF9zb3VyY2UgPSAnZHJvcG9mZidcbiAgICAgICAgICAgIGRhdGEubGFiX25hbWUgPSB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0ubGFiLm5hbWVcbiAgICAgICAgICAgIGRhdGEuZXhpdHBvaW50X3VybCA9ICdodHRwOi8vZG9jcHJpbWUuY29tJyArIHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgICAgIGRhdGEuc291cmNlID0gcGFyc2VkXG4gICAgICAgICAgICBkYXRhLmRvY3Rvcl9uYW1lID0gbnVsbFxuICAgICAgICAgICAgZGF0YS5ob3NwaXRhbF9uYW1lID0gbnVsbFxuICAgICAgICAgICAgZGF0YS5zcGVjaWFsdHkgPSBudWxsXG4gICAgICAgICAgICBkYXRhLnRlc3RfbmFtZSA9IHNlbGVjdGVkX3Rlc3RfbmFtZVxuICAgICAgICAgICAgaWYgKHVzZXJfcGhvbmVfbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5waG9uZV9udW1iZXIgPSB1c2VyX3Bob25lX251bWJlclxuICAgICAgICAgICAgICAgIGRhdGEuY3VzdG9tZXJfbmFtZSA9IHVzZXJfbmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHZpc2l0b3JfaW5mbyA9IEdUTS5nZXRWaXNpdG9ySW5mbygpXG4gICAgICAgICAgICBpZiAodmlzaXRvcl9pbmZvICYmIHZpc2l0b3JfaW5mby52aXNpdF9pZCkge1xuICAgICAgICAgICAgICAgIGRhdGEudmlzaXRfaWQgPSB2aXNpdG9yX2luZm8udmlzaXRfaWRcbiAgICAgICAgICAgICAgICBkYXRhLnZpc2l0b3JfaWQgPSB2aXNpdG9yX2luZm8udmlzaXRvcl9pZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzICYmIHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGRhdGEudXRtX3RhZ3MgPSB0aGlzLmdldFV0bVRhZ3MoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkX3Rlc3QgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QpLmxlbmd0aCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5zZWxlY3RlZFRlc3RzVGltZVNsb3QpIHtcbiAgICAgICAgICAgICAgICBsZXQgeyBkYXRlLCB0aW1lIH0gPSBzZWxlY3RlZF90ZXN0XG4gICAgICAgICAgICAgICAgZGF0YS5zZWxlY3RlZF90aW1lID0gdGltZS50ZXh0ICsgJyAnICsgdGltZS50aXRsZVxuICAgICAgICAgICAgICAgIGRhdGEuc2VsZWN0ZWRfZGF0ZSA9IGRhdGVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YS5zZWxlY3RlZF90aW1lID0gbnVsbFxuICAgICAgICAgICAgICAgIGRhdGEuc2VsZWN0ZWRfZGF0ZSA9IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlbmFibGVEcm9wT2ZmbGVhZDogZmFsc2UgfSlcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmlzX2xlYWRfZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc19sZWFkX2VuYWJsZWQ6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5Ob25JcGRCb29raW5nTGVhZChkYXRhKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNfbGVhZF9lbmFibGVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgfSwgNTAwMClcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VXRtVGFncygpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCB1dG1fdGFncyA9IHtcbiAgICAgICAgICAgIHV0bV9zb3VyY2U6IHBhcnNlZC51dG1fc291cmNlIHx8ICcnLFxuICAgICAgICAgICAgdXRtX21lZGl1bTogcGFyc2VkLnV0bV9tZWRpdW0gfHwgJycsXG4gICAgICAgICAgICB1dG1fdGVybTogcGFyc2VkLnV0bV90ZXJtIHx8ICcnLFxuICAgICAgICAgICAgdXRtX2NhbXBhaWduOiBwYXJzZWQudXRtX2NhbXBhaWduIHx8ICcnLFxuICAgICAgICAgICAgcmVmZXJyZXI6IGRvY3VtZW50LnJlZmVycmVyIHx8ICcnLFxuICAgICAgICAgICAgZ2NsaWQ6IHBhcnNlZC5nY2xpZCB8fCAnJ1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzICYmIHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmxlbmd0aCkge1xuICAgICAgICAgICAgdXRtX3RhZ3MgPSB0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gXCJjb21tb25feHRyYV90YWdzXCIpWzBdLnV0bV90YWdzXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXRtX3RhZ3NcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgdGVzdHMgPSBbXVxuICAgICAgICBsZXQgdGVzdHNfd2l0aF9wcmljZSA9IFtdXG4gICAgICAgIGxldCBmaW5hbFByaWNlID0gMFxuICAgICAgICBsZXQgZmluYWxNcnAgPSAwXG4gICAgICAgIGxldCBob21lX3BpY2t1cF9jaGFyZ2VzID0gMFxuICAgICAgICBsZXQgbGFiRGV0YWlsID0ge31cbiAgICAgICAgbGV0IHBhdGllbnQgPSBudWxsXG4gICAgICAgIGxldCBpc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCA9IHRydWVcbiAgICAgICAgbGV0IGFkZHJlc3NfcGlja2VkX3ZlcmlmaWVkID0gZmFsc2VcbiAgICAgICAgbGV0IGNlbnRlcl92aXNpdF9lbmFibGVkID0gdHJ1ZVxuICAgICAgICBsZXQgaXNfY29ycG9yYXRlID0gZmFsc2VcbiAgICAgICAgbGV0IHByZXNjcmlwdGlvblBpY2tlZCA9IGZhbHNlXG5cbiAgICAgICAgbGV0IGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlID0gZmFsc2VcbiAgICAgICAgbGV0IGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfaW5zdXJhbmNlID0gZmFsc2VcbiAgICAgICAgbGV0IGlzX3NlbGVjdGVkX3VzZXJfaW5zdXJlZCA9IGZhbHNlXG4gICAgICAgIGxldCBpc19kZWZhdWx0X3VzZXJfaW5zdXJlZCA9IGZhbHNlXG5cbiAgICAgICAgbGV0IGlzX3BsYW5fYXBwbGljYWJsZSA9IGZhbHNlXG4gICAgICAgIGxldCBpc190ZXN0c19jb3ZlcmVkX3VuZGVyX3BsYW4gPSB0cnVlXG4gICAgICAgIGxldCBpc19zZWxlY3RlZF91c2VyX2hhc19hY3RpdmVfcGxhbiA9IGZhbHNlXG4gICAgICAgIGxldCBpc19pbnN1cmFuY2VfYnV5X2FibGUgPSBmYWxzZVxuICAgICAgICBsZXQgaXNfc2VsZWN0ZWRfdXNlcl9pbnN1cmFuY2Vfc3RhdHVzXG4gICAgICAgIGxldCByYWRpb2xvZ3lfdGVzdHMgPSBbXVxuICAgICAgICBsZXQgcGF0aG9sb2d5X3Rlc3RzID0gW11cbiAgICAgICAgbGV0IHJfcGlja3VwX2hvbWUgPSB0cnVlXG4gICAgICAgIGxldCByX3BpY2t1cF9jZW50ZXIgPSBmYWxzZVxuICAgICAgICBsZXQgcF9waWNrdXBfaG9tZSA9IHRydWVcbiAgICAgICAgbGV0IHBfcGlja3VwX2NlbnRlciA9IGZhbHNlXG4gICAgICAgIGxldCBpc192aXBfYXBwbGljYWJsZSA9IGZhbHNlXG4gICAgICAgIGxldCBpc19zZWxlY3RlZF91c2VyX3VuZGVyX3ZpcCA9IGZhbHNlXG4gICAgICAgIGxldCBpc19kZWZhdWx0X3VzZXJfdW5kZXJfdmlwID0gZmFsc2VcbiAgICAgICAgbGV0IGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfdmlwID0gZmFsc2VcbiAgICAgICAgbGV0IGlzX3NlbGVjdGVkX3VzZXJfZ29sZCA9IGZhbHNlXG4gICAgICAgIGxldCB2aXBfdG90YWxfYW1vdW50ID0gMFxuICAgICAgICBsZXQgdmlwX3RvdGFsX2NvbnZlbmllbmNlX2Ftb3VudCA9IDBcbiAgICAgICAgbGV0IHZpcF90b3RhbF9nb2xkX3ByaWNlID0gMFxuICAgICAgICBsZXQgdmlwX2RhdGEgPSB7fVxuICAgICAgICBsZXQgaXNfYWxsX2VuYWJsZV9mb3JfdmlwID0gdHJ1ZVxuICAgICAgICBsZXQgaXNfYWxsX2VuYWJsZV9mb3JfZ29sZCA9IHRydWVcbiAgICAgICAgbGV0IHZpcF9pc19wcmVzY3JpcHRpb25fcmVxdWlyZWQgPSBmYWxzZVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV0gJiYgIXRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdLmlzRHVtbXlVc2VyKSB7XG4gICAgICAgICAgICBwYXRpZW50ID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV1cbiAgICAgICAgICAgIGlzX3NlbGVjdGVkX3VzZXJfaW5zdXJlZCA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdLmlzX2luc3VyZWRcbiAgICAgICAgICAgIGlzX3NlbGVjdGVkX3VzZXJfaW5zdXJhbmNlX3N0YXR1cyA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdLmluc3VyYW5jZV9zdGF0dXNcbiAgICAgICAgICAgIGlzX3NlbGVjdGVkX3VzZXJfdW5kZXJfdmlwID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV0uaXNfdmlwX21lbWJlclxuICAgICAgICAgICAgaXNfc2VsZWN0ZWRfdXNlcl9nb2xkID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV0uaXNfdmlwX2dvbGRfbWVtYmVyXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNfcHJlc2NyaXB0aW9uX25lZWRlZCkge1xuICAgICAgICAgICAgcHJlc2NyaXB0aW9uUGlja2VkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlICYmIHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0pIHtcbiAgICAgICAgICAgIGlzX2RlZmF1bHRfdXNlcl9pbnN1cmVkID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXS5pc19pbnN1cmVkXG4gICAgICAgICAgICBpc19kZWZhdWx0X3VzZXJfdW5kZXJfdmlwID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXS5pc192aXBfbWVtYmVyXG4gICAgICAgIH1cblxuICAgICAgICAvL0NoZWNrIElmIGVhY2ggVGVzdHMgQ292ZXJlZCBVbmRlciBJbnN1cmFuY2VcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNVc2VyQ2FyZWQgJiYgdGhpcy5wcm9wcy5pc1VzZXJDYXJlZC5oYXNfYWN0aXZlX3BsYW4pIHtcbiAgICAgICAgICAgIGlzX3NlbGVjdGVkX3VzZXJfaGFzX2FjdGl2ZV9wbGFuID0gdGhpcy5wcm9wcy5pc1VzZXJDYXJlZC5oYXNfYWN0aXZlX3BsYW5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vQ2hlY2sgSWYgZWFjaCBUZXN0cyBDb3ZlcmVkIFVuZGVyIFBsYW5cbiAgICAgICAgLy9Hb2xkIFJhZGlvIGJ1dHRvbiBTZWxlY3RlZCBQYWNrYWdlIFByaWNlIExpc3RcbiAgICAgICAgbGV0IGdvbGRfcHJpY2VsaXN0X21ycCA9IDBcbiAgICAgICAgbGV0IGdvbGRfcHJpY2VsaXN0X2RlYWxfcHJpY2UgPSAwXG4gICAgICAgIGxldCBnb2xkX3ByaWNlbGlzdF9jb252ZW5pZW5jZSA9IDBcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXSAmJiB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMgJiYgdGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLnRlc3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgaXNfdGVzdHNfY292ZXJlZF91bmRlcl9pbnN1cmFuY2UgPSB0cnVlXG5cbiAgICAgICAgICAgIHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS50ZXN0cy5tYXAoKHRlc3QsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGVzdC5pbnN1cmFuY2UgJiYgdGVzdC5pbnN1cmFuY2UuaXNfaW5zdXJhbmNlX2NvdmVyZWQgJiYgdGVzdC5pbnN1cmFuY2UuaW5zdXJhbmNlX3RocmVzaG9sZF9hbW91bnQgPj0gcGFyc2VJbnQodGVzdC5kZWFsX3ByaWNlKSkge1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXNfdGVzdHNfY292ZXJlZF91bmRlcl9pbnN1cmFuY2UgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0ZXN0LmluY2x1ZGVkX2luX3VzZXJfcGxhbikge1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXNfdGVzdHNfY292ZXJlZF91bmRlcl9wbGFuID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRlc3QudmlwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfdmlwID0gdGVzdC52aXAuY292ZXJlZF91bmRlcl92aXBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9UbyBnZXQgZ29sZCBwcmljZSBmb3IgcmFkaW8gYnV0dG9uIHNpbmdsZSBwYWdlIFxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5pc19hbnlfdXNlcl9idXlfZ29sZCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4udGVzdHMgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi50ZXN0c1t0ZXN0LnRlc3RfaWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIGdvbGRfcHJpY2VsaXN0X21ycCArPSAodGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi50ZXN0c1t0ZXN0LnRlc3RfaWRdLm1ycCB8fCAwKVxuICAgICAgICAgICAgICAgICAgICBnb2xkX3ByaWNlbGlzdF9kZWFsX3ByaWNlICs9ICh0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLnRlc3RzW3Rlc3QudGVzdF9pZF0uZ29sZF9wcmljZSB8fCAwKVxuICAgICAgICAgICAgICAgICAgICBnb2xkX3ByaWNlbGlzdF9jb252ZW5pZW5jZSArPSAodGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi50ZXN0c1t0ZXN0LnRlc3RfaWRdLmNvbnZlbmllbmNlX2NoYXJnZSB8fCAwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfVxuICAgICAgICBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSA9IGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfaW5zdXJhbmNlICYmIGlzX3NlbGVjdGVkX3VzZXJfaW5zdXJlZFxuICAgICAgICBpc192aXBfYXBwbGljYWJsZSA9IC8qaXNfdGVzdHNfY292ZXJlZF91bmRlcl92aXAgJiYgKi9pc19zZWxlY3RlZF91c2VyX3VuZGVyX3ZpcFxuICAgICAgICBpZiAoaXNfdGVzdHNfY292ZXJlZF91bmRlcl9pbnN1cmFuY2UgJiYgIWlzX3NlbGVjdGVkX3VzZXJfaW5zdXJlZCkge1xuICAgICAgICAgICAgaXNfaW5zdXJhbmNlX2J1eV9hYmxlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlzX3BsYW5fYXBwbGljYWJsZSA9IGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfcGxhbiAmJiBpc19zZWxlY3RlZF91c2VyX2hhc19hY3RpdmVfcGxhblxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0pIHtcbiAgICAgICAgICAgIGxhYkRldGFpbCA9IHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS5sYWJcblxuICAgICAgICAgICAgLy8gaWYobGFiRGV0YWlsLmlzX3ByZXNjcmlwdGlvbl9uZWVkZWQpe1xuICAgICAgICAgICAgLy8gICAgIHByZXNjcmlwdGlvblBpY2tlZCA9IGxhYkRldGFpbC5pc19wcmVzY3JpcHRpb25fbmVlZGVkICAgIFxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLnRlc3RzLm1hcCgodHdwLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR3cC5oaWRlX3ByaWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzX2NvcnBvcmF0ZSA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHByaWNlID0gdHdwLmRlYWxfcHJpY2VcbiAgICAgICAgICAgICAgICBsZXQgbXJwID0gdHdwLm1ycFxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGFueSBvZiB0aGUgc2VsZWN0ZWQgdGVzdCBkb2VzIG5vdCBhbGxvdyBob21lX3BpY2t1cF9hdmFpbGFibGVcbiAgICAgICAgICAgICAgICAvKmlmICghdHdwLmlzX2hvbWVfY29sbGVjdGlvbl9lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzX2hvbWVfY29sbGVjdGlvbl9lbmFibGVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICBmaW5hbFByaWNlICs9IHBhcnNlRmxvYXQocHJpY2UpXG4gICAgICAgICAgICAgICAgZmluYWxNcnAgKz0gcGFyc2VGbG9hdChtcnApXG4gICAgICAgICAgICAgICAgdmlwX3RvdGFsX2Ftb3VudCArPSBwYXJzZUludCh0d3AudmlwLnZpcF9hbW91bnQpXG4gICAgICAgICAgICAgICAgdmlwX3RvdGFsX2NvbnZlbmllbmNlX2Ftb3VudCArPSBwYXJzZUludCh0d3AudmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnQpXG4gICAgICAgICAgICAgICAgdmlwX3RvdGFsX2dvbGRfcHJpY2UgKz0gcGFyc2VJbnQodHdwLnZpcC52aXBfZ29sZF9wcmljZSlcbiAgICAgICAgICAgICAgICBpZiAodHdwLnZpcC5pc19wcmVzY3JpcHRpb25fcmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmlwX2lzX3ByZXNjcmlwdGlvbl9yZXF1aXJlZCA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCEodHdwLnZpcC5pc19lbmFibGVfZm9yX3ZpcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNfYWxsX2VuYWJsZV9mb3JfdmlwID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCEodHdwLnZpcC5pc19nb2xkKSkge1xuICAgICAgICAgICAgICAgICAgICBpc19hbGxfZW5hYmxlX2Zvcl9nb2xkID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodHdwLmlzX3JhZGlvbG9neSkge1xuICAgICAgICAgICAgICAgICAgICByX3BpY2t1cF9jZW50ZXIgPSB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0ubGFiLmNlbnRlcl92aXNpdF9lbmFibGVkXG4gICAgICAgICAgICAgICAgICAgIGlmICghdHdwLmlzX2hvbWVfY29sbGVjdGlvbl9lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByX3BpY2t1cF9ob21lID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByYWRpb2xvZ3lfdGVzdHMucHVzaCg8cCBrZXk9e2l9IGNsYXNzTmFtZT1cInRlc3QtbGlzdCB0ZXN0LWxpc3QtbGFiZWwgbmV3LWxhYi10ZXN0LWxpc3QgcmRvLXJtdi1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgICAgICAgICAgaXNfY29ycG9yYXRlIHx8IGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlIHx8IGlzX3BsYW5fYXBwbGljYWJsZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCBmdy03MDBcIj7igrkgMCA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZSA9PSB0d3AubXJwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IGZ3LTcwMFwiPiYjODM3Nzsge3ByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IGZ3LTcwMFwiPiYjODM3Nzsge3ByaWNlfTxzcGFuIGNsYXNzTmFtZT1cInRlc3QtbXJwXCI+4oK5IHtwYXJzZUZsb2F0KHR3cC5tcnApfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LW5hbWUtaXRlbSBwLTBcIj57dHdwLnRlc3QubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHdwICYmIHR3cC50ZXN0ICYmIHR3cC50ZXN0LnNob3dfZGV0YWlscyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ICdtYXJnaW5MZWZ0JzogJzVweCcsIG1hcmdpblRvcDogJzFweCcsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19IGtleT17aX0gb25DbGljaz17dGhpcy50ZXN0SW5mby5iaW5kKHRoaXMsIHR3cC50ZXN0LmlkLCB0aGlzLnN0YXRlLnNlbGVjdGVkTGFiLCB0d3AudGVzdC51cmwpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9pY29ucy9JbmZvLnN2Zyd9IHN0eWxlPXt7IHdpZHRoOiAnMTVweCcgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX3BsYW5fYXBwbGljYWJsZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBrZy1kaXNjb3VudENwblwiIHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBmbG9hdDogJ3JpZ2h0JywgbWFyZ2luVG9wOiAnNXB4JyB9fT5Eb2NwcmltZSBDYXJlIEJlbmVmaXQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJkby1ybXYtc3BuXCIgb25DbGljaz17KCkgPT4gdGhpcy5yZW1vdmVUZXN0KHR3cCl9PlJlbW92ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9wPilcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR3cC5pc19wYXRob2xvZ3kpIHtcbiAgICAgICAgICAgICAgICAgICAgcF9waWNrdXBfY2VudGVyID0gdGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLmxhYi5jZW50ZXJfdmlzaXRfZW5hYmxlZFxuICAgICAgICAgICAgICAgICAgICBpZiAoIXR3cC5pc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcF9waWNrdXBfaG9tZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aG9sb2d5X3Rlc3RzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2l9IGNsYXNzTmFtZT1cInRlc3QtbGlzdCB0ZXN0LWxpc3QtbGFiZWwgcmRvLXJtdi1idG4gbmV3LWxhYi10ZXN0LWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzX2NvcnBvcmF0ZSB8fCBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSB8fCBpc19wbGFuX2FwcGxpY2FibGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgZnctNzAwXCI+4oK5IDAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPT0gdHdwLm1ycCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCBmdy03MDBcIj4mIzgzNzc7IHtwcmljZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCBmdy03MDBcIj4mIzgzNzc7IHtwcmljZX08c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LW1ycFwiPuKCuSB7cGFyc2VGbG9hdCh0d3AubXJwKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlc3QtbmFtZS1pdGVtIHAtMFwiPnt0d3AudGVzdC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHdwICYmIHR3cC50ZXN0ICYmIHR3cC50ZXN0LnNob3dfZGV0YWlscyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyAnbWFyZ2luTGVmdCc6ICc1cHgnLCBtYXJnaW5Ub3A6ICcxcHgnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fSBrZXk9e2l9IG9uQ2xpY2s9e3RoaXMudGVzdEluZm8uYmluZCh0aGlzLCB0d3AudGVzdC5pZCwgdGhpcy5zdGF0ZS5zZWxlY3RlZExhYiwgdHdwLnRlc3QudXJsKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2ljb25zL0luZm8uc3ZnJ30gc3R5bGU9e3sgd2lkdGg6ICcxNXB4JyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19wbGFuX2FwcGxpY2FibGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGtnLWRpc2NvdW50Q3BuXCIgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIGZsb2F0OiAncmlnaHQnLCBtYXJnaW5Ub3A6ICc1cHgnIH19PkRvY3ByaW1lIENhcmUgQmVuZWZpdDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmRvLXJtdi1zcG5cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnJlbW92ZVRlc3QodHdwKX0+UmVtb3ZlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPilcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0ZXN0c193aXRoX3ByaWNlLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1kZXRhaWwgZC1mbGV4XCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0d3AudGVzdC5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19jb3Jwb3JhdGUgfHwgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgfHwgaXNfcGxhbl9hcHBsaWNhYmxlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JiM4Mzc3OyAwPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMucHJvcHMucGF5bWVudF90eXBlID09IDYgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLnRlc3RzICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4udGVzdHNbdHdwLnRlc3RfaWRdID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KCh0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLnRlc3RzW3R3cC50ZXN0X2lkXS5nb2xkX3ByaWNlKSkgPT0gcGFyc2VJbnQoKHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4udGVzdHNbdHdwLnRlc3RfaWRdLm1ycCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9XCJwYXktYW1udC1zaHJua1wiPiYjODM3Nzsgeyh0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLnRlc3RzW3R3cC50ZXN0X2lkXS5nb2xkX3ByaWNlIHx8IDApfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxwIGNsYXNzTmFtZT1cInBheS1hbW50LXNocm5rXCI+JiM4Mzc3OyB7KHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4udGVzdHNbdHdwLnRlc3RfaWRdLm1ycCl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwcmljZSA9PSB0d3AubXJwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXktYW1udC1zaHJua1wiPiYjODM3Nzsge3ByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF5LWFtbnQtc2hybmtcIj4mIzgzNzc7IHtwYXJzZUZsb2F0KHR3cC5tcnApfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNlbnRlcl92aXNpdF9lbmFibGVkID0gbGFiRGV0YWlsLmNlbnRlcl92aXNpdF9lbmFibGVkXG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGNlbnRlciB2aXNpIG5vdCBlbmFibGVkLCBjaGVjayBob21lIHBpY2sgYXMgdHJ1ZVxuICAgICAgICAvKmlmICghY2VudGVyX3Zpc2l0X2VuYWJsZWQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0TGFiQXBwb2ludG1lbnRUeXBlKCdob21lJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiBob21lIHBpY2t1cCBub3QgYXZhaWxhYmxlIGJ1dCBzZWxlY3RlZCB0eXBlIGlzIGhvbWUgLCB0aGVuIGNoYW5nZSBpbiBuZXh0IGl0ZXJhdGlvblxuICAgICAgICAgICAgaWYgKCFpc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlID09ICdob21lJykge1xuICAgICAgICAgICAgICAgIC8vIHVzaW5nIHRpbWVvdXQgdG8gc2tpcCB0aGlzIHJlbmRlciBpdGVyYXRpb25cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RMYWJBcHBvaW50bWVudFR5cGUoJ2xhYicpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSovXG4gICAgICAgIC8vVklQIFRPVEFMIERBVEEgXG5cbiAgICAgICAgaWYgKCEodGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdICYmIHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS50ZXN0cyAmJiB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMubGVuZ3RoID4gMCkpIHtcbiAgICAgICAgICAgIGlzX2FsbF9lbmFibGVfZm9yX2dvbGQgPSBmYWxzZVxuICAgICAgICAgICAgaXNfYWxsX2VuYWJsZV9mb3JfdmlwID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICB2aXBfZGF0YS52aXBfYW1vdW50ID0gdmlwX3RvdGFsX2Ftb3VudFxuICAgICAgICB2aXBfZGF0YS52aXBfY29udmVuaWVuY2VfYW1vdW50ID0gdmlwX3RvdGFsX2NvbnZlbmllbmNlX2Ftb3VudFxuICAgICAgICB2aXBfZGF0YS52aXBfZ29sZF9wcmljZSA9IHZpcF90b3RhbF9nb2xkX3ByaWNlXG4gICAgICAgIHZpcF9kYXRhLmlzX2VuYWJsZV9mb3JfdmlwID0gaXNfYWxsX2VuYWJsZV9mb3JfdmlwXG4gICAgICAgIHZpcF9kYXRhLmlzX2dvbGQgPSBpc19hbGxfZW5hYmxlX2Zvcl9nb2xkXG4gICAgICAgIC8vQ2hlY2sgYm90aCBwYXRob2xvZ3kgYW5kIHJhZGlvbG9neSBwaWNrdXAgc3RhdHVzICYgdG9nZ2xlIGFjY29yZGluZ2x5IGlmIG5vdCBhdmFpbGFibGVcbiAgICAgICAgaWYgKCFyYWRpb2xvZ3lfdGVzdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByX3BpY2t1cF9ob21lID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXBhdGhvbG9neV90ZXN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHBfcGlja3VwX2hvbWUgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGxldCByX3BpY2t1cCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGUucl9waWNrdXBcbiAgICAgICAgbGV0IHBfcGlja3VwID0gdGhpcy5wcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZS5wX3BpY2t1cFxuICAgICAgICBsZXQgcmVzZXQgPSBmYWxzZVxuXG4gICAgICAgIGlmIChyYWRpb2xvZ3lfdGVzdHMubGVuZ3RoIHx8IHBhdGhvbG9neV90ZXN0cy5sZW5ndGgpIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGUucl9waWNrdXAgPT0gJ2xhYicgJiYgIXJfcGlja3VwX2NlbnRlciAmJiAocl9waWNrdXBfaG9tZSB8fCAhcmFkaW9sb2d5X3Rlc3RzLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICBpZiAocl9waWNrdXBfaG9tZSkge1xuICAgICAgICAgICAgICAgICAgICByX3BpY2t1cCA9ICdob21lJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNldCA9IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGUucl9waWNrdXAgPT0gJ2hvbWUnICYmICFyX3BpY2t1cF9ob21lICYmIChyX3BpY2t1cF9jZW50ZXIgfHwgIXJhZGlvbG9neV90ZXN0cy5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJfcGlja3VwX2NlbnRlcikge1xuICAgICAgICAgICAgICAgICAgICByX3BpY2t1cCA9ICdsYWInXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVzZXQgPSB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlLnBfcGlja3VwID09ICdsYWInICYmICFwX3BpY2t1cF9jZW50ZXIgJiYgKHBfcGlja3VwX2hvbWUgfHwgIXBhdGhvbG9neV90ZXN0cy5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBfcGlja3VwX2hvbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcF9waWNrdXAgPSAnaG9tZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzZXQgPSB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlLnBfcGlja3VwID09ICdob21lJyAmJiAhcF9waWNrdXBfaG9tZSAmJiAocF9waWNrdXBfY2VudGVyIHx8ICFwYXRob2xvZ3lfdGVzdHMubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIGlmIChwX3BpY2t1cF9jZW50ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcF9waWNrdXAgPSAnbGFiJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNldCA9IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFwX3BpY2t1cF9ob21lICYmICFwX3BpY2t1cF9jZW50ZXIpIHtcbiAgICAgICAgICAgICAgICBwX3BpY2t1cCA9IG51bGxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFyX3BpY2t1cF9ob21lICYmICFyX3BpY2t1cF9jZW50ZXIpIHtcbiAgICAgICAgICAgICAgICByX3BpY2t1cCA9IG51bGxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlLnJfcGlja3VwICYmIChyX3BpY2t1cF9ob21lIHx8IHJfcGlja3VwX2NlbnRlcikpIHtcbiAgICAgICAgICAgICAgICByZXNldCA9IHRydWVcbiAgICAgICAgICAgICAgICByX3BpY2t1cCA9IHJfcGlja3VwX2hvbWUgPyAnaG9tZScgOiByX3BpY2t1cF9jZW50ZXIgPyAnbGFiJyA6ICcnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZS5wX3BpY2t1cCAmJiAocF9waWNrdXBfaG9tZSB8fCBwX3BpY2t1cF9jZW50ZXIpKSB7XG4gICAgICAgICAgICAgICAgcmVzZXQgPSB0cnVlXG4gICAgICAgICAgICAgICAgcF9waWNrdXAgPSBwX3BpY2t1cF9ob21lID8gJ2hvbWUnIDogcF9waWNrdXBfY2VudGVyID8gJ2xhYicgOiAnJ1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGlmIChyZXNldCkge1xuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZFR5cGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHJfcGlja3VwOiByX3BpY2t1cCxcbiAgICAgICAgICAgICAgICAgICAgcF9waWNrdXA6IHBfcGlja3VwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdExhYkFwcG9pbnRtZW50VHlwZShzZWxlY3RlZFR5cGUpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlzX2hvbWVfY29sbGVjdGlvbl9lbmFibGVkID0gcl9waWNrdXBfaG9tZSB8fCBwX3BpY2t1cF9ob21lXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHBpY2tlZCBhZGRyZXNzIGlzIGNvcnJlY3Qgb3Igbm90XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlICYmICh0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlLnJfcGlja3VwID09ICdob21lJyB8fCB0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlLnBfcGlja3VwID09ICdob21lJykpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmFkZHJlc3MgJiYgdGhpcy5wcm9wcy5hZGRyZXNzLmxlbmd0aCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkQWRkcmVzcykge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWRkcmVzcy5tYXAoKGFkZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWRkLmlkID09IHRoaXMucHJvcHMuc2VsZWN0ZWRBZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzX3BpY2tlZF92ZXJpZmllZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYWRkcmVzc19waWNrZWQgPSBhZGRyZXNzX3BpY2tlZF92ZXJpZmllZFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZSAmJiAodGhpcy5wcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZS5yX3BpY2t1cCA9PSAnbGFiJyB8fCB0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlLnBfcGlja3VwID09ICdsYWInKSkge1xuICAgICAgICAgICAgYWRkcmVzc19waWNrZWQgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGFiQ291cG9ucyA9IHRoaXMucHJvcHMubGFiQ291cG9uc1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXSB8fCBbXVxuXG4gICAgICAgIGxldCBhbXRCZWZvcmVDb3Vwb24gPSAwXG4gICAgICAgIGxldCB0b3RhbF9wcmljZSA9IGZpbmFsUHJpY2VcbiAgICAgICAgbGV0IGlzX2hvbWVfY2hhcmdlc19hcHBsaWNhYmxlID0gZmFsc2VcbiAgICAgICAgbGV0IHRvdGFsX2Ftb3VudF9wYXlhYmxlX25vbl9wbGFuX3VzZXIgPSAwXG4gICAgICAgIGlmIChpc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlICYmICh0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlLnJfcGlja3VwID09ICdob21lJyB8fCB0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlLnBfcGlja3VwID09ICdob21lJykpIHtcbiAgICAgICAgICAgIGlzX2hvbWVfY2hhcmdlc19hcHBsaWNhYmxlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChpc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCAmJiBmaW5hbFByaWNlICYmIGlzX2hvbWVfY2hhcmdlc19hcHBsaWNhYmxlKSB7XG4gICAgICAgICAgICB0b3RhbF9wcmljZSA9IGZpbmFsUHJpY2UgKyAobGFiRGV0YWlsLmhvbWVfcGlja3VwX2NoYXJnZXMgfHwgMClcbiAgICAgICAgfVxuICAgICAgICBhbXRCZWZvcmVDb3Vwb24gPSB0b3RhbF9wcmljZVxuICAgICAgICBsZXQgZGlzcGxheV9yYWRpb19jb2RfcHJpY2UgPSBwYXJzZUludCh0b3RhbF9wcmljZSkgLSAodGhpcy5wcm9wcy5kaXNDb3VudGVkTGFiUHJpY2UgfHwgMClcblxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaXNfY2FzaGJhY2spIHtcbiAgICAgICAgICAgIHRvdGFsX3ByaWNlID0gdG90YWxfcHJpY2UgPyBwYXJzZUludCh0b3RhbF9wcmljZSkgLSAodGhpcy5wcm9wcy5kaXNDb3VudGVkTGFiUHJpY2UgfHwgMCkgOiAwXG4gICAgICAgIH1cbiAgICAgICAgdG90YWxfcHJpY2UgPSBpc19jb3Jwb3JhdGUgfHwgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgfHwgaXNfcGxhbl9hcHBsaWNhYmxlID8gMCA6IHRvdGFsX3ByaWNlXG4gICAgICAgIGxldCBpc192aXBfZ29sZF9hcHBsaWNhYmxlID0gLyppc190ZXN0c19jb3ZlcmVkX3VuZGVyX3ZpcCAmJiAqLygoaXNfc2VsZWN0ZWRfdXNlcl9nb2xkICYmIHZpcF9kYXRhICYmIHZpcF9kYXRhLmlzX2dvbGQpIHx8IGlzX3NlbGVjdGVkX3VzZXJfdW5kZXJfdmlwKVxuXG4gICAgICAgIHRvdGFsX2Ftb3VudF9wYXlhYmxlX25vbl9wbGFuX3VzZXIgPSB0b3RhbF9wcmljZVxuICAgICAgICBpZiAoaXNfdmlwX2dvbGRfYXBwbGljYWJsZSkge1xuICAgICAgICAgICAgdG90YWxfcHJpY2UgPSBmaW5hbE1ycFxuICAgICAgICB9XG4gICAgICAgIGxldCB0b3RhbF93YWxsZXRfYmFsYW5jZSA9IDBcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudXNlcldhbGxldEJhbGFuY2UgPj0gMCAmJiB0aGlzLnByb3BzLnVzZXJDYXNoYmFja0JhbGFuY2UgPj0gMCkge1xuICAgICAgICAgICAgdG90YWxfd2FsbGV0X2JhbGFuY2UgPSB0aGlzLnByb3BzLnVzZXJXYWxsZXRCYWxhbmNlICsgdGhpcy5wcm9wcy51c2VyQ2FzaGJhY2tCYWxhbmNlXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNfYWRkX3RvX2NhcmQgPSBTVE9SQUdFLmlzQWdlbnQoKSB8fCB0aGlzLnN0YXRlLmNhcnRfaXRlbSB8fCAoIWlzX2NvcnBvcmF0ZSAmJiAhaXNfZGVmYXVsdF91c2VyX2luc3VyZWQpXG4gICAgICAgIGxldCB0b3RhbF90ZXN0X2NvdW50ID0gcGF0aG9sb2d5X3Rlc3RzLmxlbmd0aCArIHJhZGlvbG9neV90ZXN0cy5sZW5ndGhcbiAgICAgICAgbGV0IGlzX3RpbWVfc2VsZWN0ZWRfZm9yX2FsbF90ZXN0cyA9IHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LnNlbGVjdGVkVGVzdHNUaW1lU2xvdCA/IE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LnNlbGVjdGVkVGVzdHNUaW1lU2xvdCkubGVuZ3RoIDogMFxuICAgICAgICBsZXQgdmlwX2Rpc2NvdW50X3ByaWNlID0gMFxuICAgICAgICBsZXQgdG90YWxfYW1vdW50X3BheWFibGUgPSB0b3RhbF9wcmljZVxuXG4gICAgICAgIGlmICghdG90YWxfdGVzdF9jb3VudCAmJiBpc19zZWxlY3RlZF91c2VyX2dvbGQpIHtcbiAgICAgICAgICAgIGlzX3ZpcF9nb2xkX2FwcGxpY2FibGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGlzX2NvdmVyX3VuZGVyX3ZpcF9nb2xkID0gZmFsc2U7XG4gICAgICAgIGlmICh2aXBfZGF0YSAmJiAodmlwX2RhdGEuaXNfZW5hYmxlX2Zvcl92aXApKSB7XG5cbiAgICAgICAgICAgIGlmIChpc19zZWxlY3RlZF91c2VyX2dvbGQpIHtcbiAgICAgICAgICAgICAgICBpc19jb3Zlcl91bmRlcl92aXBfZ29sZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGZpbmFsUHJpY2UgPCAodmlwX2RhdGEudmlwX2Ftb3VudCArIHZpcF9kYXRhLnZpcF9jb252ZW5pZW5jZV9hbW91bnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZpcF9kYXRhLmlzX2VuYWJsZV9mb3JfdmlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlzX3ZpcF9hcHBsaWNhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlzX3NlbGVjdGVkX3VzZXJfZ29sZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0b3RhbF9hbW91bnRfcGF5YWJsZSA9IHRvdGFsX2Ftb3VudF9wYXlhYmxlX25vbl9wbGFuX3VzZXI7XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsX3ByaWNlID0gdG90YWxfYW1vdW50X3BheWFibGVfbm9uX3BsYW5fdXNlcjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b3RhbF9hbW91bnRfcGF5YWJsZSA9IHZpcF9kYXRhLnZpcF9hbW91bnQgKyB2aXBfZGF0YS52aXBfY29udmVuaWVuY2VfYW1vdW50ICsgKGlzX2hvbWVfY2hhcmdlc19hcHBsaWNhYmxlID8gbGFiRGV0YWlsLmhvbWVfcGlja3VwX2NoYXJnZXMgOiAwKSAtICh0aGlzLnN0YXRlLmlzX2Nhc2hiYWNrID8gMCA6ICh0aGlzLnByb3BzLmRpc0NvdW50ZWRMYWJQcmljZSB8fCAwKSlcbiAgICAgICAgICAgICAgICAgICAgdmlwX2Rpc2NvdW50X3ByaWNlID0gZmluYWxNcnAgLSAodmlwX2RhdGEudmlwX2Ftb3VudCArIHZpcF9kYXRhLnZpcF9jb252ZW5pZW5jZV9hbW91bnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIGlmIChpc192aXBfYXBwbGljYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICBpc19jb3Zlcl91bmRlcl92aXBfZ29sZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHZpcF9kaXNjb3VudF9wcmljZSA9IGZpbmFsTXJwIC0gdmlwX2RhdGEudmlwX2Ftb3VudFxuICAgICAgICAgICAgICAgICAgICB0b3RhbF9hbW91bnRfcGF5YWJsZSA9IHZpcF9kYXRhLnZpcF9hbW91bnQgKyAoaXNfaG9tZV9jaGFyZ2VzX2FwcGxpY2FibGUgPyBsYWJEZXRhaWwuaG9tZV9waWNrdXBfY2hhcmdlcyA6IDApIC0gKHRoaXMuc3RhdGUuaXNfY2FzaGJhY2sgPyAwIDogKHRoaXMucHJvcHMuZGlzQ291bnRlZExhYlByaWNlIHx8IDApKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmlwX2RhdGEuaXNfZ29sZCkge1xuICAgICAgICAgICAgICAgICAgICB2aXBfZGlzY291bnRfcHJpY2UgPSBmaW5hbE1ycCAtICh2aXBfZGF0YS52aXBfZ29sZF9wcmljZSArIHZpcF9kYXRhLnZpcF9jb252ZW5pZW5jZV9hbW91bnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjdXJyZW50VGVzdHNDb3VudCA9IHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXSAmJiB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMgJiYgdGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLnRlc3RzLmxlbmd0aFxuXG4gICAgICAgIGxldCBzaG93R29sZFRvZ2dsZVBheW1lbnRNb2RlID0gIXRoaXMucHJvcHMuaXNfYW55X3VzZXJfYnV5X2dvbGQgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbiAmJiB0aGlzLnByb3BzLmxhYkdvbGRQcmVkaWN0ZWRQcmljZSAmJiB0aGlzLnByb3BzLmxhYkdvbGRQcmVkaWN0ZWRQcmljZS5sZW5ndGggJiYgIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlXG5cbiAgICAgICAgaWYgKCFzaG93R29sZFRvZ2dsZVBheW1lbnRNb2RlICYmIHRoaXMucHJvcHMucGF5bWVudF90eXBlID09IDYgJiYgdGhpcy5wcm9wcy5zaG93X2xhYl9wYXltZW50X21vZGUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0X2xhYl9wYXltZW50X3R5cGUoMSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vU0VUIFBBWU1FTlQgU1VNTUFSWSBQUklDRVxuICAgICAgICBsZXQgZGlzcGxheV9kb2NwcmltZV9kaXNjb3VudCA9IGZpbmFsTXJwIC0gZmluYWxQcmljZVxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuaXNfYW55X3VzZXJfYnV5X2dvbGQgJiYgdGhpcy5wcm9wcy5wYXltZW50X3R5cGUgPT0gNiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4udGVzdHMpIHtcbiAgICAgICAgICAgIGRpc3BsYXlfZG9jcHJpbWVfZGlzY291bnQgPSBwYXJzZUludChnb2xkX3ByaWNlbGlzdF9tcnApIC0gKHBhcnNlSW50KGdvbGRfcHJpY2VsaXN0X2RlYWxfcHJpY2UpICsgcGFyc2VJbnQoZ29sZF9wcmljZWxpc3RfY29udmVuaWVuY2UpKVxuICAgICAgICAgICAgdG90YWxfYW1vdW50X3BheWFibGUgPSB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmRlYWxfcHJpY2UgKyBwYXJzZUludChnb2xkX3ByaWNlbGlzdF9kZWFsX3ByaWNlKSArIHBhcnNlSW50KGdvbGRfcHJpY2VsaXN0X2NvbnZlbmllbmNlKSArIChpc19ob21lX2NoYXJnZXNfYXBwbGljYWJsZSAmJiBsYWJEZXRhaWwgPyBsYWJEZXRhaWwuaG9tZV9waWNrdXBfY2hhcmdlcyA6IDApIC8vIC0gKHRoaXMucHJvcHMuZGlzQ291bnRlZExhYlByaWNlIHx8IDApXG4gICAgICAgICAgICB0b3RhbF9wcmljZSA9IHRvdGFsX2Ftb3VudF9wYXlhYmxlXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGV4dHJhUGFyYW1zID0ge1xuICAgICAgICAgICAgaXNfZ29sZF9tZW1iZXI6IHZpcF9kYXRhICYmIC8qdmlwX2RhdGEuaXNfZ29sZCAmJiovIGlzX3NlbGVjdGVkX3VzZXJfZ29sZCxcbiAgICAgICAgICAgIHRvdGFsX2Ftb3VudF9wYXlhYmxlOiB0b3RhbF9hbW91bnRfcGF5YWJsZVxuICAgICAgICB9XG5cbiAgICAgICAgLy9EaXNhYmxlIEFsbCBSZXRhaWwgQm9va2luZ3NcbiAgICAgICAgbGV0IGRpc2FibGVfYWxsX2Jvb2tpbmdzID0gIShpc19jb3Zlcl91bmRlcl92aXBfZ29sZCB8fCBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSk7XG4gICAgICAgIGlmKFNUT1JBR0UuY2hlY2tBdXRoKCkpe1xuXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZGlzYWJsZV9hbGxfYm9va2luZ3MgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciBib29raW5nUGFnZT17dHJ1ZX0gc3VtbWFyeVBhZ2U9e3RydWV9Lz5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0NvbmZpcm1hdGlvblBvcHVwID09ICdvcGVuJyAmJiBpc19zZWxlY3RlZF91c2VyX2luc3VyYW5jZV9zdGF0dXMgIT0gNCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9va2luZ0NvbmZpcm1hdGlvblBvcHVwIHByaWNlQ29uZmlybWF0aW9uUG9wdXA9e3RoaXMucHJpY2VDb25maXJtYXRpb25Qb3B1cC5iaW5kKHRoaXMpfSBiYW5uZXJDb25maXJtYXRpb25Qb3B1cD17KCkgPT4geyB9fSBpc0xhYj17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dfbGVuc2ZpdF9wb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGVuc2ZpdFBvcHVwIHsuLi50aGlzLnByb3BzfSBsZW5zZml0X2NvdXBvbnM9e3RoaXMuc3RhdGUubGVuc2ZpdF9jb3Vwb25zfSBhcHBseUxlbnNGaXRDb3Vwb25zPXt0aGlzLmFwcGx5TGVuc0ZpdENvdXBvbnMuYmluZCh0aGlzKX0gY2xvc2VMZW5zRml0UG9wdXA9e3RoaXMuY2xvc2VMZW5zRml0UG9wdXAuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvL1Nob3cgVmlwIEdvbGQgU2luZ2xlIEZsb3cgUHJpY2UgTGlzdFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dHb2xkUHJpY2VMaXN0ICYmIDxWaXBHb2xkUGFja2FnZSBoaXN0b3J5T2JqPXt0aGlzLnByb3BzLmhpc3Rvcnl9IHZpcEdvbGRQbGFucz17dGhpcy5wcm9wcy5sYWJHb2xkUHJlZGljdGVkUHJpY2V9IHRvZ2dsZUdvbGRQcmljZVBvcHVwPXt0aGlzLnRvZ2dsZUdvbGRQcmljZVBvcHVwfSB0b2dnbGVHb2xkUGxhbnM9eyh2YWwpID0+IHRoaXMudG9nZ2xlR29sZFBsYW5zKHZhbCl9IHNlbGVjdGVkX3ZpcF9wbGFuPXt0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFufSBnb1RvR29sZFBhZ2U9e3RoaXMuZ29Ub0dvbGRQYWdlfSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucGF5bWVudEJ0bkNsaWNrZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJia25nLXRpbWUtb3ZlcmxheVwiPjxMb2FkZXIgLz48L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyLXRvcC1tYXJnaW4gY2xzLWJuclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0QmFyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBjZW50ZXItY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0gJiYgdGhpcy5wcm9wcy5zaG93X3ZpcF9ub25fbG9naW5fY2FyZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImRyLXByb2ZpbGUtc2NyZWVuIGJvb2tpbmctY29uZmlybS1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1yYi02MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNSBtcm5nLXRvcC0xMlwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ29Ub1Byb2ZpbGUodGhpcy5wcm9wcy5zZWxlY3RlZExhYiwgbGFiRGV0YWlsLnVybClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWItdmlzaXQtdGltZSBkLWZsZXggamMtc3BhY2ViXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcyMnB4JywgbWFyZ2luUmlnaHQ6ICc4cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2hvc3BpdGFsLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYkRldGFpbC5uYW1lICYmIGxhYkRldGFpbC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3RoeXJvY2FyZScpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFiLWNyZC10eHQtcHJcIj57bGFiRGV0YWlsLm5hbWUuc3BsaXQoJy0nKVswXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlICYmICh0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlLnJfcGlja3VwID09ICdsYWInIHx8IHRoaXMucHJvcHMuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGUucF9waWNrdXAgPT0gJ2xhYicpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2xhYkRldGFpbC5hZGRyZXNzIHx8ICcnfTwvc3Bhbj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFiLWNyZC10eHQtcHJcIj57bGFiRGV0YWlsLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZSA9PSAnbGFiJyAmJiAodGhpcy5wcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZS5yX3BpY2t1cCA9PSAnbGFiJyB8fCB0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlLnBfcGlja3VwID09ICdsYWInKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntsYWJEZXRhaWwuYWRkcmVzcyB8fCAnJ308L3NwYW4+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZnctNzAwIHRleHQtc21cIj5WaWV3IFByb2ZpbGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgIG1ibC12aWV3LWZvcm1hdHRpbmcgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdvVG9Qcm9maWxlKHRoaXMucHJvcHMuc2VsZWN0ZWRMYWIsIGxhYkRldGFpbC51cmwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZnctNzAwIHRleHQtc21cIj5WaWV3IFByb2ZpbGU8L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuZ2V0UGF0aWVudERldGFpbHMoaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUsIGNlbnRlcl92aXNpdF9lbmFibGVkLCBpc19ob21lX2NoYXJnZXNfYXBwbGljYWJsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlX2FsbF9ib29raW5ncz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNSBpbmZvLXJ0bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsbCBib29raW5ncyBhcmUgZGlzYWJsZWQgZm9yIG5ldyByZXRhaWwgY3VzdG9tZXJzLiBQbGVhc2UgY29udGFjdCB1cyBhdCBjdXN0b21lcmNhcmVAZG9jcHJpbWUuY29tIGlmIHlvdSBuZWVkIG1vcmUgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2AkeyhkaXNhYmxlX2FsbF9ib29raW5ncyB8fCB0aGlzLnN0YXRlLmRpc2FibGVfcGFnZSAmJiAhU1RPUkFHRS5pc0FnZW50KCkgKSA/ICdkaXNhYmxlLW9wYWNpdHknIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiLXZpc2l0LXRpbWUgZC1mbGV4IGpjLXNwYWNlYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGQtZmxleFwiPjxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcyMnB4JywgbWFyZ2luUmlnaHQ6ICc4cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ZsYXNrLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlRlc3Q8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCAgbWJsLXZpZXctZm9ybWF0dGluZyB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19zZWxlY3RlZF91c2VyX3VuZGVyX3ZpcCAmJiAhaXNfc2VsZWN0ZWRfdXNlcl9nb2xkID8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGEgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17dGhpcy5vcGVuVGVzdHMuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZ3LTcwMCB0ZXh0LXNtXCI+QWRkIG1vcmUvUmVtb3ZlIHRlc3RzPC9hPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UgJiYgU1RPUkFHRS5pc0FnZW50KCkgJiYgKGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmIHByZXNjcmlwdGlvblBpY2tlZCkgJiYgKCFpc19kZWZhdWx0X3VzZXJfaW5zdXJlZCAmJiAhaXNfY29ycG9yYXRlICYmICEocGFyc2VkICYmIHBhcnNlZC50ZXN0X2lkcykvKiAmJiAhaXNfdmlwX2dvbGRfYXBwbGljYWJsZSAmJiAhaXNfZGVmYXVsdF91c2VyX3VuZGVyX3ZpcCovKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXt0aGlzLm9wZW5UZXN0cy5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZnctNzAwIHRleHQtc21cIj5BZGQgbW9yZS9SZW1vdmUgdGVzdHM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLnRlc3RzICYmICF0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0udGVzdHMubGVuZ3RoICYmIGlzX2RlZmF1bHRfdXNlcl9pbnN1cmVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9e3RoaXMuc2VhcmNoVGVzdHMuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZ3LTcwMCB0ZXh0LXNtXCI+U2VhcmNoIHRlc3RzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JhZGlvbG9neV90ZXN0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhyX3BpY2t1cF9jZW50ZXIgfHwgcl9waWNrdXBfaG9tZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0LWxhYi1yYWRpbyB3aWRnZXQtY29udGVudCB0ZXN0LXJlcG9ydCBsYWItYXBwb2ludG1lbnQtZGl2IHJvd1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaW5saW5lLWxpc3QgYm9va2luZy10eXBlIHNlYXJjaC1saXN0LXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByX3BpY2t1cF9ob21lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJob21lXCIgbmFtZT1cInJhZGlvbG9neVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBpY2t1cFR5cGUuYmluZCh0aGlzLCB7IHJfcGlja3VwOiAnaG9tZScsIHBfcGlja3VwOiB0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlLnBfcGlja3VwIH0pfSB2YWx1ZT1cImhvbWVcIiBjaGVja2VkPXt0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGUucl9waWNrdXAgPT0gJ2hvbWUnfSAvPjxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmUgbGFiLWFwcG9pbnRtZW50LWxhYmVsIHRleHQtbWQgZnctNTAwIHRleHQtcHJpbWFyeVwiIGh0bWxGb3I9XCJob21lXCI+IEhvbWUgUGljay11cDwvbGFiZWw+PC9saT4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByX3BpY2t1cF9jZW50ZXIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImxhYlwiIG5hbWU9XCJyYWRpb2xvZ3lcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVQaWNrdXBUeXBlLmJpbmQodGhpcywgeyByX3BpY2t1cDogJ2xhYicsIHBfcGlja3VwOiB0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlLnBfcGlja3VwIH0pfSB2YWx1ZT1cImxhYlwiIGNoZWNrZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGUgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZS5yX3BpY2t1cCA9PSAnbGFiJ30gLz4gPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZSBsYWItYXBwb2ludG1lbnQtbGFiZWwgdGV4dC1tZCBmdy01MDAgdGV4dC1wcmltYXJ5XCIgaHRtbEZvcj1cImxhYlwiPkxhYiBWaXNpdDwvbGFiZWw+PC9saT4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvL1BhdGhvbG9neSBUZXN0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXRob2xvZ3lfdGVzdHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocF9waWNrdXBfY2VudGVyIHx8IHBfcGlja3VwX2hvbWUpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdC1sYWItcmFkaW8gd2lkZ2V0LWNvbnRlbnQgdGVzdC1yZXBvcnQgbGFiLWFwcG9pbnRtZW50LWRpdiByb3dcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImlubGluZS1saXN0IGJvb2tpbmctdHlwZSBzZWFyY2gtbGlzdC1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcF9waWNrdXBfaG9tZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwicGhvbWVcIiBuYW1lPVwicGF0aG9sb2d5XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUGlja3VwVHlwZS5iaW5kKHRoaXMsIHsgcF9waWNrdXA6ICdob21lJywgcl9waWNrdXA6IHRoaXMucHJvcHMuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGUucl9waWNrdXAgfSl9IHZhbHVlPVwiaG9tZVwiIGNoZWNrZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGUgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZS5wX3BpY2t1cCA9PSAnaG9tZSd9IC8+PGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZSBsYWItYXBwb2ludG1lbnQtbGFiZWwgdGV4dC1tZCBmdy01MDAgdGV4dC1wcmltYXJ5XCIgaHRtbEZvcj1cInBob21lXCI+IEhvbWUgUGljay11cDwvbGFiZWw+PC9saT4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwX3BpY2t1cF9jZW50ZXIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInBsYWJcIiBuYW1lPVwicGF0aG9sb2d5XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUGlja3VwVHlwZS5iaW5kKHRoaXMsIHsgcF9waWNrdXA6ICdsYWInLCByX3BpY2t1cDogdGhpcy5wcm9wcy5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZS5yX3BpY2t1cCB9KX0gdmFsdWU9XCJsYWJcIiBjaGVja2VkPXt0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGUucF9waWNrdXAgPT0gJ2xhYid9IC8+IDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmUgbGFiLWFwcG9pbnRtZW50LWxhYmVsIHRleHQtbWQgZnctNTAwIHRleHQtcHJpbWFyeVwiIGh0bWxGb3I9XCJwbGFiXCI+TGFiIFZpc2l0PC9sYWJlbD48L2xpPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgJiYgcHJlc2NyaXB0aW9uUGlja2VkKSB8fCB2aXBfaXNfcHJlc2NyaXB0aW9uX3JlcXVpcmVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVwbG9hZFByZXNjcmlwdGlvbiB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5nZXRTZWxlY3RvcnMoaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUsIGNlbnRlcl92aXNpdF9lbmFibGVkLCBpc19ob21lX2NoYXJnZXNfYXBwbGljYWJsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbXRCZWZvcmVDb3Vwb24gIT0gMCAmJiAhaXNfcGxhbl9hcHBsaWNhYmxlICYmICFpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiB0aGlzLnByb3BzLnBheW1lbnRfdHlwZSAhPSA2LyomJiAhaXNfdmlwX2dvbGRfYXBwbGljYWJsZSAmJiAqLyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNVwiIG9uQ2xpY2s9e3RoaXMuYXBwbHlDb3Vwb25zLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYkNvdXBvbnMubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCAgZC1mbGV4IGpjLXNwYWNlYlwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291cG9uLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2NvdXBvbi1hcHBsaWVkLnN2Z1wifSBjbGFzc05hbWU9XCJ2aXNpdC10aW1lLWljb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgY291cG9uLXRleHRcIiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNfY2FzaGJhY2sgPyBcIkNvdXBvblwiIDogXCJDb3Vwb25cIn0gQXBwbGllZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBjb3Vwb24tdGV4dFwiIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBtYXJnaW5SaWdodDogMTMgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJDb3Vwb25zWzBdLmNvZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2NvcnBvcmF0ZSA/IFwiXCIgOiA8c3BhbiBjbGFzc05hbWU9XCJ2aXNpdC10aW1lLWljb24gY291cG9uLWljb25cIj48aW1nIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFuYWx5dGljRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0xhYkNvdXBvbnNSZW1vdmVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbGFiLWNvdXBvbnMtcmVtb3ZlZCcsICdjb3Vwb25JZCc6IGxhYkNvdXBvbnNbMF0uY291cG9uX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogYW5hbHl0aWNEYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY291cG9uQ29kZTogJycsIGNvdXBvbklkOiAnJyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVMYWJDb3Vwb25zKHRoaXMucHJvcHMuc2VsZWN0ZWRMYWIsIGxhYkNvdXBvbnNbMF0uY291cG9uX2lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZV93YWxsZXQ6IHRydWUsIGlzX3BheW1lbnRfY291cG9uX2FwcGxpZWQ6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Nyb3NzLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb3Vwb25fbG9hZGluZyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ19MaW5lYmFyX2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nX2Jhcl9saW5lXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IGQtZmxleCBqYy1zcGFjZWJcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291cG9uLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9vZnItY3BuLnN2Z1wifSBjbGFzc05hbWU9XCJ2aXNpdC10aW1lLWljb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBjb3Vwb24tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSEFWRSBBIENPVVBPTj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlzaXQtdGltZS1pY29uIGNvdXBvbi1pY29uLWFycm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcmlnaHQtYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gZ29sZCBjYXJkIGRldGFpbHMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiFzaG93R29sZFRvZ2dsZVBheW1lbnRNb2RlICYmICFpc192aXBfYXBwbGljYWJsZSAmJiAhaXNfc2VsZWN0ZWRfdXNlcl9nb2xkICYmICFpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiB2aXBfZGlzY291bnRfcHJpY2UgPiAwICYmIHZpcF9kYXRhLmlzX2dvbGQgJiYgdGhpcy5wcm9wcy5zaG93X3ZpcF9ub25fbG9naW5fY2FyZD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IGNwbi1ibHVyIG1yYi0xNSBjdXJzb3ItcG9pbnRlciBnb2xkLWdyZWVuLWNvbnRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFuYWx5dGljRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMYWJTdW1tYXJ5VmlwR29sZENsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbGFiLXN1bW1hcnktZ29sZC1jbGljaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBhbmFseXRpY0RhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ZpcC1nb2xkLWRldGFpbHM/aXNfZ29sZD10cnVlJnNvdXJjZT1sYWItc3VtbWFyeS12aXAtZ29sZC1jbGljayZsZWFkX3NvdXJjZT1Eb2NwcmltZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IGQtZmxleCBqYy1zcGFjZWIgYWxpZ24taXRlbS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2xkLWNyZC1sZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuPlNhdmUg4oK5e3ZpcF9kaXNjb3VudF9wcmljZX08L3NwYW4+IG9uIHRoaXMgYXBwb2ludG1lbnQgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ2xkLWNyZC1zYi10eHRcIj5CZWNvbWUgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dvbGQtc20ucG5nJ30gLz4gbWVtYmVyIEAmIzgzNzc7MTk5PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2xkLWNyZC1yZ3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkdldCBHb2xkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gZ29sZCBjYXJkIGRldGFpbHMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKmlzX2luc3VyYW5jZV9idXlfYWJsZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLXNtLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGQtaW5zLXRpdGxlLXN1YlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBjb3Vwb24tdGV4dFwiPkdldCBPUEQgSW5zdXJhbmNlICYgYm9vayBmb3IgPHNwYW4+RlJFRTwvc3Bhbj48L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJvb2sgVW5saW1pdGVkIERvY3RvcnMgYW5kIExhYiBUZXN0czwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvcGQtaW5zLWF2bFwiIG9uQ2xpY2s9e3RoaXMuZ29Ub0luc3VyYW5jZS5iaW5kKHRoaXMsIGxhYkRldGFpbCl9PkF2YWlsIE5vdyA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgICcvaW1nL3JpZ2h0LXNjLnN2Zyd9Lz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJyovfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKioqKioqUGF5bWVudCBNb2RlICoqKioqKioqKiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dHb2xkVG9nZ2xlUGF5bWVudE1vZGUgJiYgdGhpcy5wcm9wcy5zaG93X2xhYl9wYXltZW50X21vZGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTVcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBtYi0yMFwiPlBheW1lbnQgTW9kZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtc3VtbWFyeS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtZGV0YWlsIGQtZmxleFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0X2xhYl9wYXltZW50X3R5cGUoNilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW8gcGF5bWVudC10eXBlLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIHBheW1lbnQtYW10LWxhYmVsXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RfbGFiX3BheW1lbnRfdHlwZSg2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+IExhYiBib29raW5nIHdpdGggPGltZyBjbGFzc05hbWU9XCJzbmctZ2xkLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZ29sZC1sZy5wbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJnb2xkLXF1c1wiIG9uQ2xpY2s9eyhlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ29Ub0dvbGRQYWdlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Pj88L3NwYW4+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnb2xkX3ByaWNlbGlzdF9kZWFsX3ByaWNlID09IGdvbGRfcHJpY2VsaXN0X21ycFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxzcGFuIGNsYXNzTmFtZT1cInBheW1lbnQtbW9kZS1hbXRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RfbGFiX3BheW1lbnRfdHlwZSg2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT57YOKCuSR7Z29sZF9wcmljZWxpc3RfZGVhbF9wcmljZSArIGdvbGRfcHJpY2VsaXN0X2NvbnZlbmllbmNlfWB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxzcGFuIGNsYXNzTmFtZT1cInBheW1lbnQtbW9kZS1hbXRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RfbGFiX3BheW1lbnRfdHlwZSg2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT57YOKCuSR7Z29sZF9wcmljZWxpc3RfZGVhbF9wcmljZSArIGdvbGRfcHJpY2VsaXN0X2NvbnZlbmllbmNlfWB9IDxiIGNsYXNzTmFtZT1cImdkLWN1dC1wcmNcIj57YOKCuSR7Z29sZF9wcmljZWxpc3RfbXJwfWB9PC9iPjwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNoZWNrZWQ9e3RoaXMucHJvcHMucGF5bWVudF90eXBlID09IDZ9IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwYXltZW50LW1vZGVcIiB2YWx1ZT1cIm9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImRwLWdvbGQtcGxuLWNoYW5nZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRwLWdvbGQtcGF5LWxmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdvVG9Hb2xkUGFnZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cImRwLWdsZC10eHQtbWVtXCI+e2BEb2NwcmltZSBHb2xkOiAke3RoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4udG90YWxfYWxsb3dlZF9tZW1iZXJzfSBNZW1iZXJgfTxzcGFuPihLbm93IG1vcmUpPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZHAtZ2xkLW1lbS1ncm5cIj5FeHRyYSBzYXZpbmdzIG9uIGV2ZXJ5IGFwcG9pbnRtZW50IGZvciAxIHllYXI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1nb2xkLXBheS1yZ3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Digrkke3RoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4uZGVhbF9wcmljZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL2VkaXQuc3ZnJ30gb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVHb2xkUHJpY2VQb3B1cCh0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLnRvdGFsX2FsbG93ZWRfbWVtYmVycz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJlbmlmaXQtY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJuZnQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYm5mdC10eHRcIj48c3Ryb25nPntgU2F2ZSDigrkke3ZpcF9kaXNjb3VudF9wcmljZX1gfTwvc3Ryb25nPiBvbiB0aGlzIGFwcG9pbnRtZW50PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYm5mdC1zdWJ0eHRcIj57YCR7dGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi50b3RhbF9hbGxvd2VkX21lbWJlcnN9IG1lbWJlciBwbGFuIEBScyR7dGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5kZWFsX3ByaWNlfWB9PHNwYW4+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL2VkaXQuc3ZnJ30gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdvVG9Hb2xkUGFnZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fS8+PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm5mdC1idG5cIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ29Ub0dvbGRQYWdlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5WaWV3IEFsbCBCZW5lZml0czwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtc3VtbWFyeS1jb250ZW50XCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0X2xhYl9wYXltZW50X3R5cGUoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWRldGFpbCBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW8gcGF5bWVudC10eXBlLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdF9sYWJfcGF5bWVudF90eXBlKDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBwYXltZW50LWFtdC1sYWJlbFwiPk9ubHkgTGFiIGJvb2tpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbF9wcmljZSA9PSBkaXNwbGF5X3JhZGlvX2NvZF9wcmljZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBheW1lbnQtc3ViLWhlYWRpbmdcIj5ObyBkaXNjb3VudHMgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBheW1lbnQtbW9kZS1hbXRcIj57ZGlzcGxheV9yYWRpb19jb2RfcHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSA/IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHNwYW4gY2xhc3NOYW1lPVwic2F2ZS11cHRvXCI+U2F2ZSB7cGVyY2VudF9kaXNjb3VudH0lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2hlY2tlZD17dGhpcy5wcm9wcy5wYXltZW50X3R5cGUgPT0gMX0gdHlwZT1cInJhZGlvXCIgbmFtZT1cInBheW1lbnQtbW9kZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2NvcnBvcmF0ZSA/IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTVcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBjbGVhcmZpeFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBtYi0yMFwiPlBheW1lbnQgU3VtbWFyeTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX3BsYW5fYXBwbGljYWJsZSB8fCBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtc3VtbWFyeS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWRldGFpbCBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPk1SUDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPiYjODM3Nzsge3RvdGFsX3ByaWNlIHx8IDB9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtc3VtbWFyeS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rlc3RzX3dpdGhfcHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZpcF9kYXRhICYmIGlzX3ZpcF9hcHBsaWNhYmxlICYmICEodmlwX2RhdGEgLyomJiB2aXBfZGF0YS5pc19nb2xkICYmIGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfdmlwKi8gJiYgaXNfc2VsZWN0ZWRfdXNlcl9nb2xkKSA/IDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1kZXRhaWwgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19PkRvY3ByaW1lIFZJUCBNZW1iZXIgPGltZyBjbGFzc05hbWU9XCJ2aXAtbWFpbi1pY28gaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXBsb2cucG5nJ30gLz48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19Pi0gJiM4Mzc3OyB7dG90YWxfcHJpY2UgLSB2aXBfZGF0YS52aXBfYW1vdW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpcF9kYXRhIC8qJiYgdmlwX2RhdGEuaXNfZ29sZCAqLyAmJiBpc19zZWxlY3RlZF91c2VyX2dvbGQgJiYgdmlwX2Rpc2NvdW50X3ByaWNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1kZXRhaWwgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0+RG9jcHJpbWUgR29sZCBEaXNjb3VudCA8aW1nIGNsYXNzTmFtZT1cInZpcC1tYWluLWljbyBpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dvbGQtc20ucG5nJ30gLz48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0+LSAmIzgzNzc7IHt2aXBfZGlzY291bnRfcHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1doZW4gR29sZCBNZW1iZXJzaGlwIGlzIGJ1eWluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93R29sZFRvZ2dsZVBheW1lbnRNb2RlICYmIHRoaXMucHJvcHMucGF5bWVudF90eXBlID09IDYgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmRlYWxfcHJpY2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWRldGFpbCBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Eb2NwcmltZSBHb2xkIE1lbWJlcnNoaXAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiAmIzgzNzc7IHt0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmRlYWxfcHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodG90YWxfcHJpY2UgJiYgaXNfaG9tZV9jb2xsZWN0aW9uX2VuYWJsZWQgJiYgaXNfaG9tZV9jaGFyZ2VzX2FwcGxpY2FibGUpID8gPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWRldGFpbCBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudFwiPkhvbWUgUGlja3VwIENoYXJnZXM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQgZnctNTAwXCI+JiM4Mzc3OyB7bGFiRGV0YWlsLmhvbWVfcGlja3VwX2NoYXJnZXMgfHwgMH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Rpc3BsYXlfZG9jcHJpbWVfZGlzY291bnQgJiYgIWlzX3ZpcF9hcHBsaWNhYmxlICYmICEodmlwX2RhdGEvKiAmJiB2aXBfZGF0YS5pc19nb2xkICYmIGlzX3Rlc3RzX2NvdmVyZWRfdW5kZXJfdmlwKi8gJiYgaXNfc2VsZWN0ZWRfdXNlcl9nb2xkKSA/IDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1kZXRhaWwgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19Pnt0aGlzLnByb3BzLnBheW1lbnRfdHlwZSA9PSA2ID8gJ0RvY3ByaW1lIEdvbGQgRGlzY291bnQnIDogJ0RvY3ByaW1lIERpc2NvdW50J308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19Pi0gJiM4Mzc3OyB7ZGlzcGxheV9kb2NwcmltZV9kaXNjb3VudH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRpc0NvdW50ZWRMYWJQcmljZSAmJiAhdGhpcy5zdGF0ZS5pc19jYXNoYmFjayAmJiB0aGlzLnByb3BzLnBheW1lbnRfdHlwZSAhPSA2LyomJiAhaXNfdmlwX2FwcGxpY2FibGUgJiYgISh2aXBfZGF0YSAmJiB2aXBfZGF0YS5pc19nb2xkICYmIGlzX3NlbGVjdGVkX3VzZXJfZ29sZCAmJiBpc190ZXN0c19jb3ZlcmVkX3VuZGVyX3ZpcCkgJiYgdGhpcy5wcm9wcy5wYXltZW50X3R5cGUhPTYqLyA/IDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1kZXRhaWwgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT5Db3Vwb24gRGlzY291bnQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT4tJiM4Mzc3OyB7dGhpcy5wcm9wcy5kaXNDb3VudGVkTGFiUHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKihpc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlID09ICdob21lJykgPyA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtZGV0YWlsIGQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPk1SUDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudCBmdy01MDBcIj4mIzgzNzc7IHt0b3RhbF9wcmljZSB8fCAwfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWRldGFpbCBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQgZnctNTAwXCI+TVJQPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudCBmdy01MDBcIj4mIzgzNzc7IHt0b3RhbF9wcmljZSB8fCAwfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWItdmlzaXQtdGltZSB0ZXN0LXJlcG9ydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgcGF5bWVudC1hbXQtbGFiZWxcIj5BbW91bnQgUGF5YWJsZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwYXltZW50LWFtdC12YWx1ZSBmdy01MDBcIj4mIzgzNzc7ICB7dG90YWxfYW1vdW50X3BheWFibGV9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2hvbWVfY2hhcmdlc19hcHBsaWNhYmxlID8gPGg1IGNsYXNzTmFtZT1cInBheW1lbnQtYW10LXZhbHVlIGZ3LTUwMFwiPiYjODM3NzsgIHt0b3RhbF9hbW91bnRfcGF5YWJsZX08L2g1PiA6IDxoNSBjbGFzc05hbWU9XCJwYXltZW50LWFtdC12YWx1ZSBmdy01MDBcIj4mIzgzNzc7ICB7aXNfdmlwX2FwcGxpY2FibGU/dmlwX2Ftb3VudDogdG90YWxfcHJpY2UgfHwgMH08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtdmFsLWJ4IGlucy12bC1ieC1vXCI+Q292ZXJlZCBVbmRlciBJbnN1cmFuY2U8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNfY2FzaGJhY2sgJiYgdGhpcy5wcm9wcy5kaXNDb3VudGVkTGFiUHJpY2UgPyA8ZGl2IGNsYXNzTmFtZT1cImNzaC1iYWNrLWFwcGxpZWQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjc2gtbW55LWFwcGxpZWRcIj4rICYjODM3Nzsge3RoaXMucHJvcHMuZGlzQ291bnRlZExhYlByaWNlfSBDYXNoYmFjayBBcHBsaWVkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3NoLW1ueS1hcHBsaWVkLWNvbnRlbnRcIj5DYXNoYmFjayB3aWxsIGJlIGFkZGVkIHRvIHlvdXIgZG9jcHJpbWUgd2FsbGV0IGJhbGFuY2Ugb24gYXBwb2ludG1lbnQgY29tcGxldGlvbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudF90eXBlICE9IDYgJiYgIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmIHRvdGFsX3dhbGxldF9iYWxhbmNlICYmIHRvdGFsX3dhbGxldF9iYWxhbmNlID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIndpZGdldCBtcmItMTVcIiArICh0aGlzLnN0YXRlLmlzX3BheW1lbnRfY291cG9uX2FwcGxpZWQgPyBcIiBkaXNhYmxlX2NvdXBvblwiIDogXCJcIil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LXB0LWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZlcnJhbC1zZWxlY3QgbWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNrLWJ4XCIgc3R5bGU9e3sgZm9udFdlaWdodDogJzYwMCcsIGZvbnRTaXplOiAnMTRweCcgfX0+VXNlIGRvY3ByaW1lIHdhbGxldCBtb25leTxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17dGhpcy50b2dnbGVXYWxsZXRVc2UuYmluZCh0aGlzKX0gY2hlY2tlZD17dGhpcy5zdGF0ZS51c2Vfd2FsbGV0fSAvPjxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiPjwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmZybC1hdmwtYmFsYW5jZVwiPkF2YWlsYWJsZSA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnNnB4JywgbWFyZ2luVG9wOiAnNXB4JywgbWFyZ2luUmlnaHQ6ICczcHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3J1cGVlLWljb24uc3ZnXCJ9IC8+e3RvdGFsX3dhbGxldF9iYWxhbmNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzX3BheW1lbnRfY291cG9uX2FwcGxpZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjcG4tcHltbnQtdHh0XCI+V2FsbGV0IEFtb3VudCBjYW4gbm90IGJlIHVzZWQgYmVjYXVzZSBwYXltZW50IGdhdGV3YXkgc3BlY2lmaWMgY291cG9uIGlzIGFwcGxpZWQuPC9zcGFuPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXaGF0c0FwcE9wdGluVmlldyB7Li4udGhpcy5wcm9wc30gcHJvZmlsZXM9e3BhdGllbnR9IHRvZ2dsZVdoYXRzYXA9e3RoaXMudG9nZ2xlV2hhdHNhcC5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWItdmlzaXQtdGltZSB0ZXN0LXJlcG9ydFwiIHN0eWxlPXt7IG1hcmdpblRvcDogMTAsIGN1cnNvcjogJ3BvaW50ZXInLCBtYXJnaW5Cb3R0b206IDAgfX0gb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAnb3BlbkNhbmNlbGxhdGlvbicpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgcGF5bWVudC1hbXQtbGFiZWwgZnMtaXRhbGljXCI+RnJlZSBDYW5jZWxsYXRpb248c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1IH19PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaWNvbnMvaW5mby5zdmdcIn0gLz48L3NwYW4+PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3Rlcm1zXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWItdmlzaXQtdGltZSB0ZXN0LXJlcG9ydFwiIHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBwYXltZW50LWFtdC1sYWJlbCBmcy1pdGFsaWNcIj5UZXJtcyBvZiBVc2U8c3Bhbj48aW1nIGNsYXNzTmFtZT1cImluZm8taWNvbi1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9pbmZvLnN2Z1wifSAvPjwvc3Bhbj48L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e3RoaXMuc3RhdGUuZXJyb3J9PC9zcGFuPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtcnQtMjAgZC1mbGV4IGFsaWduLWl0ZW1zLXN0YXJ0IGxhYlRlc3QtZHRsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy90aWNrLnN2Zyd9IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA4LCB3aWR0aDogMjAsIG1hcmdpblRvcDogMiB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiIHN0eWxlPXt7IGZsZXg6IDEgfX0gPkJ5IGNvbnRpbnVpbmcsIHlvdSBhcmUgYXV0aG9yaXppbmcgRG9jcHJpbWUgdG8gZGlyZWN0bHkgc2hhcmUgbGFiIHRlc3QgcmVwb3J0cyB3aXRoIHlvdS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93UGluY29kZVBvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaW5jb2RlUG9wdXAgc2V0UGluY29kZT17dGhpcy5zZXRQaW5jb2RlLmJpbmQodGhpcyl9IHRvZ2dsZT17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAnc2hvd1BpbmNvZGVQb3B1cCcpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5waW5jb2RlTWlzbWF0Y2hFcnJvciA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGluY29kZUVycm9yUG9wdXAgY2xpY2tQb3BVcD17dGhpcy5jbGlja1BpbmNvZGVFcnJyb3JQb3BVcC5iaW5kKHRoaXMpfSB0b2dnbGU9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgJ3BpbmNvZGVNaXNtYXRjaEVycm9yJyl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiA8TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm9wZW5DYW5jZWxsYXRpb24gPyA8Q2FuY2VsYXRpb25Qb2xpY3kgcHJvcHM9e3RoaXMucHJvcHN9IHRvZ2dsZT17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAnb3BlbkNhbmNlbGxhdGlvbicpfSBpc19pbnN1cmFuY2VfYXBwbGljYWJsZT17aXNfaW5zdXJhbmNlX2FwcGxpY2FibGV9IC8+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Rpc2FibGVfYWxsX2Jvb2tpbmdzPydkaXNhYmxlLW9wYWNpdHknOicnfSBmaXhlZCBzdGlja3ktYnRuIHAtMCB2LWJ0biAgYnRuLWxnIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIHRleHQtbGcgYnV0dG9ucy1hZGRjYXJ0LWNvbnRhaW5lciAkeyFpc19hZGRfdG9fY2FyZCAmJiB0aGlzLnByb3BzLmlwZF9jaGF0ICYmIHRoaXMucHJvcHMuaXBkX2NoYXQuc2hvd0lwZENoYXQgPyAnaXBkLWZvb3QtYnRuLWR1bycgOiAnJ30gJHt0aGlzLnN0YXRlLmRpc2FibGVfcGFnZSAmJiAhU1RPUkFHRS5pc0FnZW50KCkgPyAnZGlzYWJsZS1hbGwnIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChTVE9SQUdFLmlzQWdlbnQoKSB8fCB0aGlzLnN0YXRlLmNhcnRfaXRlbSB8fCAoIWlzX2NvcnBvcmF0ZSAmJiAhaXNfZGVmYXVsdF91c2VyX2luc3VyZWQgJiYgdGhpcy5wcm9wcy5wYXltZW50X3R5cGUgIT0gNikpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXt0aGlzLnN0YXRlLnBheV9idG5fbG9hZGluZ30gY2xhc3NOYW1lPXtcImFkZC1zaHBuZy1jYXJ0LWJ0blwiICsgKCF0aGlzLnN0YXRlLmNhcnRfaXRlbSA/IFwiXCIgOiBcIiB1cGRhdGUtYnRuXCIpICsgKHRoaXMuc3RhdGUucGF5X2J0bl9sb2FkaW5nID8gXCIgZGlzYWJsZS1hbGxcIiA6IFwiXCIpfSBkYXRhLWRpc2FibGVkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIShwYXRpZW50ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LnNlbGVjdGVkVGVzdHNUaW1lU2xvdCkgfHwgdGhpcy5zdGF0ZS5sb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBvbkNsaWNrPXt0aGlzLnByb2NlZWQuYmluZCh0aGlzLCB0b3RhbF90ZXN0X2NvdW50LCBhZGRyZXNzX3BpY2tlZCwgaXNfdGltZV9zZWxlY3RlZF9mb3JfYWxsX3Rlc3RzLCBwYXRpZW50LCB0cnVlLCB0b3RhbF9hbW91bnRfcGF5YWJsZSwgdG90YWxfd2FsbGV0X2JhbGFuY2UsIHByZXNjcmlwdGlvblBpY2tlZCwgaXNfc2VsZWN0ZWRfdXNlcl9pbnN1cmFuY2Vfc3RhdHVzLCB7fSwgdmlwX2lzX3ByZXNjcmlwdGlvbl9yZXF1aXJlZCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNhcnRfaXRlbSA/IFwiXCIgOiA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NhcnRpY28uc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh0aGlzLnN0YXRlLmlzX3Nwb19hcHBvaW50bWVudCB8fCAodGhpcy5wcm9wcy5wYXltZW50X3R5cGUgPT0gNiAmJiBTVE9SQUdFLmlzQWdlbnQoKSkpID8gJ1NlbmQgU01TJyA6IHRoaXMuc3RhdGUuY2FydF9pdGVtID8gXCJVcGRhdGVcIiA6IFwiQWRkIHRvIENhcnRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTVE9SQUdFLmlzQWdlbnQoKSAmJiB0aGlzLnByb3BzLnBheW1lbnRfdHlwZSA9PSA2ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXt0aGlzLnN0YXRlLnBheV9idG5fbG9hZGluZ30gY2xhc3NOYW1lPXtcImFkZC1zaHBuZy1jYXJ0LWJ0blwiICsgKCF0aGlzLnN0YXRlLmNhcnRfaXRlbSA/IFwiXCIgOiBcIiB1cGRhdGUtYnRuXCIpICsgKHRoaXMuc3RhdGUucGF5X2J0bl9sb2FkaW5nID8gXCIgZGlzYWJsZS1hbGxcIiA6IFwiXCIpfSBkYXRhLWRpc2FibGVkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIShwYXRpZW50ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LnNlbGVjdGVkVGVzdHNUaW1lU2xvdCkgfHwgdGhpcy5zdGF0ZS5sb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBvbkNsaWNrPXt0aGlzLnByb2NlZWQuYmluZCh0aGlzLCB0b3RhbF90ZXN0X2NvdW50LCBhZGRyZXNzX3BpY2tlZCwgaXNfdGltZV9zZWxlY3RlZF9mb3JfYWxsX3Rlc3RzLCBwYXRpZW50LCB0cnVlLCB0b3RhbF9hbW91bnRfcGF5YWJsZSwgdG90YWxfd2FsbGV0X2JhbGFuY2UsIHByZXNjcmlwdGlvblBpY2tlZCwgaXNfc2VsZWN0ZWRfdXNlcl9pbnN1cmFuY2Vfc3RhdHVzLCB7IHNlbmRXaGF0c3VwOiB0cnVlIH0sIHZpcF9pc19wcmVzY3JpcHRpb25fcmVxdWlyZWQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3dhLWxvZ28tc20ucG5nJ30gLz5TZW5kIG9uIFdoYXRzYXBwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTVE9SQUdFLmlzQWdlbnQoKSB8fCB0aGlzLnN0YXRlLmNhcnRfaXRlbSA/IFwiXCIgOiA8YnV0dG9uIGRpc2FibGVkPXt0aGlzLnN0YXRlLnBheV9idG5fbG9hZGluZ30gY2xhc3NOYW1lPXtgdi1idG4tcHJpbWFyeSBib29rLWJ0bi1tcmduLWFkanVzdCBwZGQtMTIgJHt0aGlzLnN0YXRlLnBheV9idG5fbG9hZGluZyA/IFwiIGRpc2FibGUtYWxsXCIgOiBcIlwifWB9IGlkPVwiY29uZmlybV9ib29raW5nXCIgZGF0YS1kaXNhYmxlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIShwYXRpZW50ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LnNlbGVjdGVkVGVzdHNUaW1lU2xvdCkgfHwgdGhpcy5zdGF0ZS5sb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IG9uQ2xpY2s9e3RoaXMucHJvY2VlZC5iaW5kKHRoaXMsIHRvdGFsX3Rlc3RfY291bnQsIGFkZHJlc3NfcGlja2VkLCBpc190aW1lX3NlbGVjdGVkX2Zvcl9hbGxfdGVzdHMsIHBhdGllbnQsIGZhbHNlLCB0b3RhbF9hbW91bnRfcGF5YWJsZSwgdG90YWxfd2FsbGV0X2JhbGFuY2UsIHByZXNjcmlwdGlvblBpY2tlZCwgaXNfc2VsZWN0ZWRfdXNlcl9pbnN1cmFuY2Vfc3RhdHVzLCB7fSwgdmlwX2lzX3ByZXNjcmlwdGlvbl9yZXF1aXJlZCl9Pnt0aGlzLmdldEJvb2tpbmdCdXR0b25UZXh0KHRvdGFsX3dhbGxldF9iYWxhbmNlLCB0b3RhbF9wcmljZSwgaXNfdmlwX2FwcGxpY2FibGUsIHZpcF9kYXRhICYmIHZpcF9kYXRhLnZpcF9hbW91bnQgPyB2aXBfZGF0YS52aXBfYW1vdW50IDogMCwgZXh0cmFQYXJhbXMpfTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZXJyb3IgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvb2tpbmdFcnJvciBtZXNzYWdlPXt0aGlzLnN0YXRlLmVycm9yfSBjbG9zZUVycm9yUG9wdXA9e3RoaXMuY2xvc2VFcnJvclBvcHVwfSAvPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0QmFyIGV4dHJhQ2xhc3M9XCIgY2hhdC1mbG9hdC1idG4tMlwiIHR5cGU9XCJsYWJcIiBub0NoYXRCdXR0b249e3RydWV9IG1zZ1RlbXBsYXRlPVwiZ29sZF9nZW5lcmFsX3RlbXBsYXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxEaXNjbGFpbWVyIC8+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBheW1lbnREYXRhID8gPFBheW1lbnRGb3JtIG11bHRpT3JkZXI9e3RoaXMucHJvcHMucGF5bWVudF90eXBlID09PSA2fSBwYXltZW50RGF0YT17dGhpcy5zdGF0ZS5wYXltZW50RGF0YX0gcmVmcz0nbGFiJyAvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBCb29raW5nU3VtbWFyeVZpZXdOZXdcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgUGluY29kZVBvcHVwRXJyb3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRcblx0cmVuZGVyKCl7XG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1wb3B1cC1vdmVybGF5IFwiIG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLnRvZ2dsZSgpfT5cblxuXHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1wb3B1cFwiPlxuXHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgcG9zLXJlbGF0aXZlXCI+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBwYWRpaW5nLXNyY2gtZWwgcGFkLXNyY2hcIj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3NzLWJ0blwiIG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLnRvZ2dsZSgpfT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9jbG9zZS5wbmdcIn0gYWx0PVwiY2xvc2VcIiAvPlxuXHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIFx0PGg0IGNsYXNzTmFtZT1cImFscnQtaGVhZFwiPkFsZXJ0ICE8L2g0PlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzcmNoLWVsLWNvbmVudFwiPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXQgbG9va3MgbGlrZSBwaW5jb2RlIGFuZCBhZGRyZXNzIHlvdSBoYXZlIGVudGVyZWQgYXJlIG5vdCBvZiB0aGUgc2FtZSBsb2NhdGlvbi5QbGVhc2UgY2hhbmdlIG9uZSBvZiB0aGVtIHRvIHByb2NlZWQ8L3A+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLWJ0bi1jb250YWluZXJcIj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnRoaXMucHJvcHMuY2xpY2tQb3BVcCgxKX0+Q2hhbmdlIFBpbmNvZGU8L2J1dHRvbj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJzcmMtZWwtYnRuLWJvcmRlclwiPjwvc3Bhbj4gKi99XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLmNsaWNrUG9wVXAoMil9PkNoYW5nZSBBZGRyZXNzPC9idXR0b24+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgPC9kaXY+XG5cblx0ICAgICAgICAgICAgPC9kaXY+XG5cblx0ICAgICAgICA8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGluY29kZVBvcHVwRXJyb3IiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5cbmNsYXNzIFBpbmNvZGVQb3VwdXBWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwaW5jb2RlOiAnJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFsaWRhdGVQaW5jb2RlKCl7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUucGluY29kZS5tYXRjaCgvXlswLTldezZ9JC8pKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgc3VibWl0UGluY29kZShlKXtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBpZih0aGlzLnZhbGlkYXRlUGluY29kZSgpKXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0UGluY29kZSh0aGlzLnN0YXRlLnBpbmNvZGUpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBFbnRlciBWYWxpZCBQaW5jb2RlXCIgfSlcbiAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9oYW5kbGVDb250aW51ZVByZXNzKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdFBpbmNvZGUoZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlucHV0SGFuZGxlcihlKXtcbiAgICAgICAgZS50YXJnZXQudmFsdWUubGVuZ3RoIDw9IDY/dGhpcy5zZXRTdGF0ZSh7IHBpbmNvZGU6IGUudGFyZ2V0LnZhbHVlIH0pOicnXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZXJyb3ItbXNnLXBvcFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLW92ZXJsYXlcIiBvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy50b2dnbGUoKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cC1lcnJvciBwb3B1cC10aW1lc2xvdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLWhlYWRcIj5DaGVjayB0aW1lIHNsb3QgITwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3NzLWJ0blwiIG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLnRvZ2dsZSgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaWNvbnMvY2xvc2UucG5nXCJ9IGFsdD1cImNsb3NlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tpbmctbG9jXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvci1tc2dcIj5QbGVhc2UgZW50ZXIgeW91ciBwaW5jb2RlLCBzbyB0aGF0IHdlIGNhbiBmaW5kIHRoZSBiZXN0IGF2YWlsYWJsZSB0aW1lIHNsb3QgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbnB1dEZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWluXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBpbmNvZGVcIiBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUucGluY29kZX0gb25LZXlQcmVzcz17dGhpcy5faGFuZGxlQ29udGludWVQcmVzcy5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cIndhaXQtZm9yLWxvY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbG9hZGVyX29yYW5nZS5naWZcIn0gYWx0PVwibG9hZGVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvci1tc2dcIj5QbGVhc2Ugd2FpdCwgd2hpbGUgd2UgYXJlIGZpbmRpbmcgYmVzdCBhdmFpbGFibGUgdGltZSBmb3IgeW91PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIkphdmFzY3JpcHQ6dm9pZCgwKTtcIiBvbkNsaWNrPXt0aGlzLnN1Ym1pdFBpbmNvZGUuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwiYnRuLWNoay1hdmxcIj5DaGVjayBBdmFpbGFiaWxpdHk8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBpbmNvZGVQb3VwdXBWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IE1PTlRIUyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWcnLCAnU2VwdCcsICdPY3QnLCAnTm92JywgJ0RlYyddXG5jb25zdCBXRUVLX0RBWVMgPSBbJ1N1bicsICdNb24nLCAnVHVlcycsICdXZWQnLCAnVGh1cicsICdGcmknLCAnU2F0J11cbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5cbmNsYXNzIFZpc2l0VGltZU5ldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIGxldCBpc190aHlyb2NhcmUgPSB0aGlzLmlzX3RoeXJvY2FyZV9sYWIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkYXRlVGltZVNlbGVjdGVkVmFsdWU6IHByb3BzLnNlbGVjdGVkRGF0ZUZvcm1hdCA/IHByb3BzLnNlbGVjdGVkRGF0ZUZvcm1hdCA6IHRoaXMuZ2V0Rm9ybWF0dGVkRGF0ZShpc190aHlyb2NhcmUgPyBuZXcgRGF0ZSh0aGlzLmdldERhdGVBZnRlcigxKSkgOiBuZXcgRGF0ZSgpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5zZWxlY3RlZERhdGVGb3JtYXQgJiYgbmV4dFByb3BzLnNlbGVjdGVkRGF0ZUZvcm1hdCAhPSB0aGlzLnN0YXRlLmRhdGVUaW1lU2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGVUaW1lU2VsZWN0ZWRWYWx1ZTogbmV4dFByb3BzLnNlbGVjdGVkRGF0ZUZvcm1hdCB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0RGF0ZShlKSB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMYWJEYXRlQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2xhYi1kYXRlLWNsaWNrZWQnXG4gICAgICAgIH1cblxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBkYXRlID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRlVGltZVNlbGVjdGVkVmFsdWU6IGRhdGUgfSlcbiAgICAgICAgICAgIGxldCBzbG90ID0geyB0aW1lOiB7fSB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdExhYlRpbWVTTG90KHNsb3QsIGZhbHNlLCBkYXRlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Rm9ybWF0dGVkRGF0ZShkYXRlKSB7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKVxuICAgICAgICB2YXIgZGQgPSBkYXRlLmdldERhdGUoKTtcblxuICAgICAgICB2YXIgbW0gPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICB2YXIgeXl5eSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgaWYgKGRkIDwgMTApIHtcbiAgICAgICAgICAgIGRkID0gJzAnICsgZGQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW0gPCAxMCkge1xuICAgICAgICAgICAgbW0gPSAnMCcgKyBtbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0b2RheSA9IHl5eXkgKyAnLScgKyBtbSArICctJyArIGRkO1xuICAgICAgICByZXR1cm4gdG9kYXlcbiAgICB9XG5cbiAgICBnZXREYXRlQWZ0ZXIoaSA9IDApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuc2V0RGF0ZShuZXcgRGF0ZSgpLmdldERhdGUoKSArIGkpXG4gICAgfVxuXG4gICAgaXNfdGh5cm9jYXJlX2xhYihwcm9wcykge1xuICAgICAgICByZXR1cm4gcHJvcHMuTEFCUyAmJiBwcm9wcy5MQUJTW3Byb3BzLnNlbGVjdGVkTGFiXSAmJiBwcm9wcy5MQUJTW3Byb3BzLnNlbGVjdGVkTGFiXS5sYWIgJiYgcHJvcHMuTEFCU1twcm9wcy5zZWxlY3RlZExhYl0ubGFiLmlzX3RoeXJvY2FyZVxuICAgIH1cblxuICAgIGdvVG9UaW1lKCl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90WydhbGwnXSl7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm5hdmlnYXRlVG8oJ3RpbWUnLCB0aGlzLnByb3BzLmlzX2luc3VyYW5jZV9hcHBsaWNhYmxlLCBmYWxzZSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm5hdmlnYXRlVG8oJ3RpbWUnLCB0aGlzLnByb3BzLmlzX2luc3VyYW5jZV9hcHBsaWNhYmxlLCB0cnVlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCBpc190aHlyb2NhcmUgPSB0aGlzLmlzX3RoeXJvY2FyZV9sYWIodGhpcy5wcm9wcylcblxuICAgICAgICBsZXQgdW5pcXVlX2NvbW1vbl90ZXN0cyA9IG51bGxcbiAgICAgICAgaWYodGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdICYmIHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS50ZXN0cyAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdFsnYWxsJ10gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3Quc2VsZWN0ZWRUZXN0c1RpbWVTbG90KXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS50ZXN0cy5tYXAoKHgpPT57XG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3Quc2VsZWN0ZWRUZXN0c1RpbWVTbG90W3gudGVzdF9pZF0pe1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdW5pcXVlX2NvbW1vbl90ZXN0cyA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgd2lkZ2V0IG1yYi0xNSAke3RoaXMucHJvcHMudGltZUVycm9yID8gJ3JuZC1lcnJvci1ubScgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHBvcy1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0gJiYgdGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdLmxhYiAmJiB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0ubGFiLmlzX3RoeXJvY2FyZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBpbmNvZGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFyZWEtcGluXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy50b2dnbGUoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcmVhIFBpbmNvZGUgLSA8Yj57dGhpcy5wcm9wcy5waW5jb2RlfTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+Q2hhbmdlPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cImFyZWEtcGluXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy50b2dnbGUoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgQXJlYSBQaW5jb2RlICA8Yj48L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPkFkZDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiLXZpc2l0LXRpbWUgZC1mbGV4IGpjLXNwYWNlYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGQtZmxleFwiPjxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcxOHB4JywgbWFyZ2luUmlnaHQ6ICc4cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3dhdGNoLWRhdGUuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+VmlzaXQgVGltZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0ICBtYmwtdmlldy1mb3JtYXR0aW5nIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZGF0ZS10aW1lIG1yLTEwIHRpdGxlXCI+e2RhdGUgfHwgXCJcIn0ge3RpbWUudGV4dCA/IFwifFwiIDogXCJcIn0ge3RpbWUudGV4dH0ge3RpbWUudGV4dD8odGltZS52YWx1ZT49MTI/J1BNJzonQU0nKTonJ308L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm5hdmlnYXRlVG8oJ3RpbWUnLHRoaXMucHJvcHMuaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZnctNzAwIHRleHQtc21cIj57dGltZS50ZXh0ID8gXCJDaGFuZ2VcIiA6IFwiU2VsZWN0XCJ9IFRpbWU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICEodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3Quc2VsZWN0ZWRUZXN0c1RpbWVTbG90ICYmIHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXSApICYmIDxhIGhyZWY9XCJcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm5hdmlnYXRlVG8oJ3RpbWUnLCB0aGlzLnByb3BzLmlzX2luc3VyYW5jZV9hcHBsaWNhYmxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmdy03MDAgdGV4dC1zbVwiPlNlbGVjdCBUaW1lPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3Quc2VsZWN0ZWRUZXN0c1RpbWVTbG90ICYmIHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZzdC10aW1lLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF1bmlxdWVfY29tbW9uX3Rlc3RzICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90WydhbGwnXSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdFsnYWxsJ10udGltZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2c3QtY29udGVudC1ibFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZG8tdGltZS12c3RcIj57bmV3IERhdGUodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3RbJ2FsbCddLmRhdGUpLnRvRGF0ZVN0cmluZygpIHx8IFwiXCJ9IHt0aGlzLnByb3BzLnNlbGVjdGVkU2xvdFsnYWxsJ10udGltZS50ZXh0ID8gXCJ8XCIgOiBcIlwifSB7dGhpcy5wcm9wcy5zZWxlY3RlZFNsb3RbJ2FsbCddLnRpbWUudGV4dH0ge3RoaXMucHJvcHMuc2VsZWN0ZWRTbG90WydhbGwnXS50aW1lLnRleHQgPyAodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3RbJ2FsbCddLnRpbWUudmFsdWUgPj0gMTIgPyAnUE0nIDogJ0FNJykgOiAnJ308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXS50ZXN0cy5tYXAoKHRlc3QsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ2c3QtY29udGVudC1ibFwiIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZzdC10c3QtbmFtZVwiPnt0ZXN0LnRlc3QubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3Quc2VsZWN0ZWRUZXN0c1RpbWVTbG90W3Rlc3QudGVzdF9pZF0gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZG8tdGltZS12c3RcIj57bmV3IERhdGUodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3Quc2VsZWN0ZWRUZXN0c1RpbWVTbG90W3Rlc3QudGVzdF9pZF0uZGF0ZSkudG9EYXRlU3RyaW5nKCkgfHwgXCJcIn0ge3RoaXMucHJvcHMuc2VsZWN0ZWRTbG90LnNlbGVjdGVkVGVzdHNUaW1lU2xvdFt0ZXN0LnRlc3RfaWRdLnRpbWUudGV4dCA/IFwifFwiIDogXCJcIn0ge3RoaXMucHJvcHMuc2VsZWN0ZWRTbG90LnNlbGVjdGVkVGVzdHNUaW1lU2xvdFt0ZXN0LnRlc3RfaWRdLnRpbWUudGV4dH0ge3RoaXMucHJvcHMuc2VsZWN0ZWRTbG90LnNlbGVjdGVkVGVzdHNUaW1lU2xvdFt0ZXN0LnRlc3RfaWRdLnRpbWUudGV4dCA/ICh0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5zZWxlY3RlZFRlc3RzVGltZVNsb3RbdGVzdC50ZXN0X2lkXS50aW1lLnZhbHVlID49IDEyID8gJ1BNJyA6ICdBTScpIDogJyd9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxhIGhyZWY9XCJcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdvVG9UaW1lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZ3LTcwMCB0ZXh0LXNtXCI+U2VsZWN0IFRpbWU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubmF2aWdhdGVUbygndGltZScsIHRoaXMucHJvcHMuaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSB0ZXh0LXByaW1hcnkgZC1ibG9jayBmdy03MDAgdGV4dC1zbSB0ZXh0LXJpZ2h0IGZ3LTcwMCB0ZXh0LXNtXCI+Q2hhbmdlIFRpbWU8L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFwcG1udC1hdmxcIj5UaGUgYXBwb2ludG1lbnQgaXMgc3ViamVjdCB0byBjb25maXJtYXRpb24gZnJvbSB0aGUgTGFiLiA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBwb3MtcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNfdGh5cm9jYXJlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGluY29kZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFyZWEtcGluXCIgb25DbGljaz17KCk9PnRoaXMucHJvcHMudG9nZ2xlKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcmVhIFBpbmNvZGUgLSA8Yj57dGhpcy5wcm9wcy5waW5jb2RlfTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj5DaGFuZ2U8L2E+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8ZGl2IGNsYXNzTmFtZT1cImFyZWEtcGluXCIgb25DbGljaz17KCk9PnRoaXMucHJvcHMudG9nZ2xlKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgQXJlYSBQaW5jb2RlICA8Yj48L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+QWRkPC9hPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiLXZpc2l0LXRpbWUgZC1mbGV4IGpjLXNwYWNlYiBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgbWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInZpc2l0LXRpbWUtaWNvblwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvd2F0Y2gtZGF0ZS5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWxlY3QgVmlzaXQgVGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFwcG1udC1hdmxcIj5UaGUgYXBwb2ludG1lbnQgaXMgc3ViamVjdCB0byBjb25maXJtYXRpb24gZnJvbSB0aGUgTGFiLiA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1zbGVjZXQtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudy1pbnB0LXNlbGN0clwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm53LXBpY2staGRuZ1wiPkRhdGU6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fsbi1pbnB1dC10cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImlucC1udy1jYWxcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2NhbG5leHQuc3ZnJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImRhdGVcIiBvbkNoYW5nZT17dGhpcy5zZWxlY3REYXRlLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLmRhdGVUaW1lU2VsZWN0ZWRWYWx1ZT90aGlzLnN0YXRlLmRhdGVUaW1lU2VsZWN0ZWRWYWx1ZTonJ30gIG1pbj17dGhpcy5nZXRGb3JtYXR0ZWREYXRlKCBpc190aHlyb2NhcmU/bmV3IERhdGUodGhpcy5nZXREYXRlQWZ0ZXIoMSkgKTpuZXcgRGF0ZSgpKSB9IG1heD17dGhpcy5nZXRGb3JtYXR0ZWREYXRlKCBuZXcgRGF0ZSh0aGlzLmdldERhdGVBZnRlcigyMykgKSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1zbGVjZXQtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudy1pbnB0LXNlbGN0clwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm53LXBpY2staGRuZ1wiPlRpbWU6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fsbi1pbnB1dC10cFwiIG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLm5hdmlnYXRlVG8oJ3RpbWUnLHRoaXMucHJvcHMuaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbnAtbnctY2FsXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9udy13YXRjaC5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBkaXNhYmxlZD17dHJ1ZX0gbmFtZT1cImJkYXlcIiBwbGFjZWhvbGRlcj1cIlNlbGVjdFwiIHZhbHVlID17dGltZSAmJiB0aW1lLnRleHQ/YCR7dGltZS50ZXh0fSAke3RpbWUudmFsdWUgPj0gMTIgPyAnUE0nIDogJ0FNJ31gIDogJyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidG0tYXJ3LXNnblwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnJ30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFZpc2l0VGltZU5ld1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHsgdG9nZ2xlLHByb3BzLGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlIH0pID0+IHtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWwtb3ZlcmxheSBjYW5jZWwtb3ZlcmxheS16aW5kZXhcIiBvbkNsaWNrPXt0b2dnbGV9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBjYW5jZWwtYXBwb2ludG1lbnQtZGl2IGNhbmNlbC1wb3B1cFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIHRleHQtY2VudGVyIGFjdGlvbi1zY3JlZW4taGVhZGVyXCIgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0gPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBjYW5jZWwtYXBwb2ludG1lbnQtaGVhZFwiPkNhbmNlbGxhdGlvbiBQb2xpY3k8L3A+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9jbG9zZS5wbmdcIn0gY2xhc3NOYW1lPVwiY2xvc2UtbW9kYWxcIiBvbkNsaWNrPXt0b2dnbGV9IC8+XG4gICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLXBvbGljeS10ZXh0IGNhbmNlbFBvbGljeUhlaWdodFwiPlxuICAgICAgICAgICAgICAgIHsvKjxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPkZvciBhbnkgb25saW5lIHBhaWQgYXBwb2ludG1lbnRzLCB5b3UgY2FuIGNhbmNlbCB5b3VyIHNjaGVkdWxlZCBvciByZS1ib29rZWQgYXBwb2ludG1lbnQgYW5kIGluaXRpYXRlIGltbWVkaWF0ZSByZWZ1bmQgYXQgYW55IHRpbWUuIEFuIGltbWVkaWF0ZSByZWZ1bmQgc2hhbGwgYmUgc3ViamVjdCB0byB0ZXJtcyBhbmQgY29uZGl0aW9ucyBhcyBkZXNjcmliZWQgdW5kZXIgdGhpcyBzZWN0aW9uIG1lbnRpb25lZCBiZWxvdy5cblxuICAgICAgICAgICAgICAgICAgICBJbiB0aGUgZXZlbnQsIHRoZSBzZXJ2aWNlcyBhcmUgbm90IGF2YWlsZWQgYXQgdGhlIGFwcG9pbnRlZCBkYXRlIGFuZCB0aW1lIGFuZCBvdXIgc3lzdGVtcyBkbyBub3QgdmFsaWRhdGUgdGhlIFVSTiBnZW5lcmF0ZWQgb24geW91ciByZWdpc3RlcmVkIG1vYmlsZSBudW1iZXIsIHdlIHdpbGwgYXV0b21hdGljYWxseSBjYW5jZWwgeW91ciBhcHBvaW50bWVudCBhdCAxMjowMCBtaWRuaWdodCBvZiBuZXh0IGRhdGUgb2YgeW91ciBhcHBvaW50bWVudCBkYXRlLlxuXG4gICAgICAgICAgICAgICAgICAgIE9jY2FzaW9uYWxseSwgYXBwb2ludG1lbnRzIG1heSBiZSBjYW5jZWxsZWQgb3IgcG9zdHBvbmVkIGJ5IHRoZSBUaGlyZCBQYXJ0eSBTZXJ2aWNlIFByb3ZpZGVyLiBTaG91bGQgdGhpcyBvY2N1ciwgd2Ugd2lsbCBhdHRlbXB0IHRvIGNvbnRhY3Qgb3IgaW5mb3JtIHlvdSBhbmQgeW91IG1heSByZS1zY2hlZHVsZSB5b3VyIGFwcG9pbnRtZW50IGFzIHBlciB5b3VyIGNvbnZlbmllbmNlIG9yIHZpc2l0IHd3dy5kb2NwcmltZS5jb20gZm9yIGZyZXNoL3JlLWJvb2tpbmcgb24gdGhlIFdlYnNpdGUuXG5cbiAgICAgICAgICAgICAgICAgICAgQ2FuY2VsbGF0aW9uIHRocm91Z2ggbWFpbCBvciBjYWxsIGNlbnRlciBpcyBhbGxvd2VkIGZvciBhbGwgdGhlIGJvb2tpbmdzIHVudGlsIHRoZSB0aW1lIG9mIGFwcG9pbnRtZW50IG9yIDEyOjAwIG1pZG5pZ2h0IG9mIG5leHQgZGF0ZSBvZiB5b3VyIGFwcG9pbnRtZW50IGRhdGUuIEluIHN1Y2ggY2FzZXMsIHdlIHdpbGwgaW5pdGlhdGUgYW4gaW1tZWRpYXRlIHJlZnVuZCBvZiB5b3VyIG1vbmV5IGFzIHBlciB0aGUgcHJvY2VzcyBkZWZpbmVkIHVuZGVyIFJlZnVuZCwgUmVzY2hlZHVsaW5nIGFuZCBDYW5jZWxsYXRpb24gc2VjdGlvbiB1bmRlciB0aGUgRW5kIFVzZXIgQWdyZWVtZW50LiBcbiAgICAgICAgICAgICAgICAgICAgPHUgc3R5bGU9e3tjb2xvcjogJyNmNzg2MzEnLGN1cnNvcjoncG9pbnRlcicsZGlzcGxheTonaW5saW5lLWJsb2NrJ319IG9uQ2xpY2s9eygpID0+cHJvcHMuaGlzdG9yeS5wdXNoKCcvdGVybXM/Zm9yQm9va2luZ1Njcm9sbD10cnVlJyl9PmNsaWNrIGhlcmU8L3U+XG4gICAgICAgICAgICAgICAgPC9wPiovfVxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJib29raW5nLWNhbmNlbFwiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc19pbnN1cmFuY2VfYXBwbGljYWJsZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Rm9yIE9ubGluZSBQYWlkIEFwcG9pbnRtZW50cyAtPC9zdHJvbmc+IFlvdSBjYW4gY2FuY2VsIHlvdXIgc2NoZWR1bGVkIGFwcG9pbnRtZW50IGF0IGFueSB0aW1lLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkluIENhc2Ugb2YgQSBObyBTaG93IChQYXRpZW50IFVuYXZhaWxhYmxlKSAtPC9zdHJvbmc+IEluIHRoZSBldmVudCwgdGhlIHNlcnZpY2VzIGFyZSBub3QgYXZhaWxlZCBhdCB0aGUgYXBwb2ludGVkIGRhdGUgYW5kIHRpbWUuIFdlIHdpbGwgYXV0b21hdGljYWxseSBjYW5jZWwgeW91ciBhcHBvaW50bWVudCBhdCAxMjowMCBtaWRuaWdodCBvZiB0aGUgZGF0ZSBmb2xsb3dlZCBieSB0aGUgYXBwb2ludG1lbnQgZGF0ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5UaGlyZCBQYXJ0eSBDYW5jZWxsYXRpb24gKFByb3ZpZGVyIFVuYXZhaWxhYmxlKSAtIDwvc3Ryb25nPk9jY2FzaW9uYWxseSwgYXBwb2ludG1lbnRzIG1heSBiZSBjYW5jZWxlZCBvciBwb3N0cG9uZWQgZHVlIHRvIHVuYXZhaWxhYmlsaXR5IG9mIHRoZSBzZXJ2aWNlIHByb3ZpZGVyLiBTaG91bGQgdGhpcyBvY2N1ciwgd2Ugd2lsbCBjb250YWN0IG9yIGluZm9ybSB5b3UgYW5kIHlvdSBtYXkgcmVzY2hlZHVsZSB5b3VyIGFwcG9pbnRtZW50IGFzIHBlciB5b3VyIGNvbnZlbmllbmNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkZvciBPbmxpbmUgUGFpZCBBcHBvaW50bWVudHMgLTwvc3Ryb25nPiBZb3UgY2FuIGNhbmNlbCB5b3VyIHNjaGVkdWxlZCBhcHBvaW50bWVudCBhbmQgaW5pdGlhdGUgdGhlIGltbWVkaWF0ZSByZWZ1bmQgYXQgYW55IHRpbWUuIEltbWVkaWF0ZSByZWZ1bmQgc2hhbGwgYmUgc3ViamVjdCB0byB0ZXJtcyBhbmQgY29uZGl0aW9ucyBhcyBkZXNjcmliZWQgdW5kZXIgdGhpcyBzZWN0aW9uIG1lbnRpb25lZCBiZWxvdy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5JbiBDYXNlIG9mIEEgTm8gU2hvdyAoUGF0aWVudCBVbmF2YWlsYWJsZSkgLTwvc3Ryb25nPiBJbiB0aGUgZXZlbnQsIHRoZSBzZXJ2aWNlcyBhcmUgbm90IGF2YWlsZWQgYXQgdGhlIGFwcG9pbnRlZCBkYXRlIGFuZCB0aW1lLiBXZSB3aWxsIGF1dG9tYXRpY2FsbHkgY2FuY2VsIHlvdXIgYXBwb2ludG1lbnQgYXQgMTI6MDAgbWlkbmlnaHQgb2YgdGhlIGRhdGUgZm9sbG93ZWQgYnkgdGhlIGFwcG9pbnRtZW50IGRhdGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VGhpcmQgUGFydHkgQ2FuY2VsbGF0aW9uIChQcm92aWRlciBVbmF2YWlsYWJsZSkgLTwvc3Ryb25nPiBPY2Nhc2lvbmFsbHksIGFwcG9pbnRtZW50cyBtYXkgYmUgY2FuY2VsZWQgb3IgcG9zdHBvbmVkIGR1ZSB0byB1bmF2YWlsYWJpbGl0eSBvZiB0aGUgc2VydmljZSBwcm92aWRlci4gU2hvdWxkIHRoaXMgb2NjdXIsIHdlIHdpbGwgY29udGFjdCBvciBpbmZvcm0geW91IGFuZCB5b3UgbWF5IHJlc2NoZWR1bGUgeW91ciBhcHBvaW50bWVudCBhcyBwZXIgeW91ciBjb252ZW5pZW5jZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz4yNCBIb3VycyBDYW5jZWxsYXRpb24gLTwvc3Ryb25nPiBDYW5jZWxsYXRpb24gaXMgYWxsb3dlZCBmb3IgYWxsIHRoZSBhcHBvaW50bWVudHMuIEluIHN1Y2ggY2FzZXMsIHdlIHdpbGwgaW5pdGlhdGUgdGhlIGltbWVkaWF0ZSByZWZ1bmQgb2YgeW91ciBtb25leSBhcyBwZXIgdGhlIHByb2Nlc3MgZGVmaW5lZCB1bmRlciBSZWZ1bmQsIFJlc2NoZWR1bGluZywgYW5kIENhbmNlbGxhdGlvbiBzZWN0aW9uIG9mIHRoZSAgPHUgc3R5bGU9e3tjb2xvcjogYHZhcigtLXRleHQtLXByaW1hcnktLWNvbG9yKWAgLGN1cnNvcjoncG9pbnRlcicsZGlzcGxheTonaW5saW5lLWJsb2NrJ319IG9uQ2xpY2s9eygpID0+cHJvcHMuaGlzdG9yeS5wdXNoKCcvdGVybXM/Zm9yQm9va2luZ1Njcm9sbD10cnVlJyl9PkVuZCBVc2VyIEFncmVlbWVudC48L3U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG59IiwiaW1wb3J0IEJvb2tpbmdTdW1tYXJ5Vmlld05ldyBmcm9tICcuL0Jvb2tpbmdTdW1tYXJ5Vmlld05ldy5qcydcblxuZXhwb3J0IGRlZmF1bHQgQm9va2luZ1N1bW1hcnlWaWV3TmV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHsgdG9nZ2xlLCBmaW5hbFByaWNlLCBmaW5hbE1ycCwgaXNfaG9tZV9jb2xsZWN0aW9uX2VuYWJsZWQsIGhvbWVfcGlja3VwX2NoYXJnZXMgfSkgPT4ge1xuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbC1vdmVybGF5XCIgb25DbGljaz17dG9nZ2xlfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgY2FuY2VsLWFwcG9pbnRtZW50LWRpdiBwYXltZW50LXBvcHVwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1oZWFkZXIgdGV4dC1jZW50ZXIgYWN0aW9uLXNjcmVlbi1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgY2FuY2VsLWFwcG9pbnRtZW50LWhlYWRcIj5QYXltZW50IFN1bW1hcnk8L3A+XG4gICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50LWRpdlwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudFwiPkxhYiBGZWVzPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudCBmdy01MDBcIj4mIzgzNzc7IHtmaW5hbE1ycH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCA/IDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50LWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnRcIj5Ib21lIFBpY2t1cCBDaGFyZ2VzPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQgZnctNTAwXCI+JiM4Mzc3OyB7aG9tZV9waWNrdXBfY2hhcmdlcyB8fCAwfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudC1kaXZcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnRcIj5kb2NwcmltZSBEaXNjb3VudDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQgZnctNTAwXCI+JiM4Mzc3OyB7ZmluYWxNcnAgLSBmaW5hbFByaWNlfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlzX2hvbWVfY29sbGVjdGlvbl9lbmFibGVkID8gPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudCBmdy01MDBcIj5TdWJ0b3RhbDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPiYjODM3Nzsge2ZpbmFsUHJpY2UgKyBob21lX3BpY2t1cF9jaGFyZ2VzfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gOiA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudC1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudCBmdy01MDBcIj5TdWJ0b3RhbDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudCBmdy01MDBcIj4mIzgzNzc7IHtmaW5hbFByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQtZGl2XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPlByb21vY29kZSBEaXNjb3VudDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQgZnctNTAwXCI+JiM4Mzc3OyAyMDA8L3A+XG4gICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaXNfaG9tZV9jb2xsZWN0aW9uX2VuYWJsZWQgPyA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudC1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPkFtb3VudCBQYXlhYmxlPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQgZnctNTAwXCI+JiM4Mzc3OyB7ZmluYWxQcmljZSArIGhvbWVfcGlja3VwX2NoYXJnZXN9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PiA6IDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50LWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPkFtb3VudCBQYXlhYmxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPiYjODM3Nzsge2ZpbmFsUHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQtYnRuIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmdy01MDBcIiBvbkNsaWNrPXt0b2dnbGV9PkRvbmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBQaWNrdXBBZGRyZXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEFkZHJlc3NTdHIoYWRkcmVzcykge1xuICAgICAgICBsZXQgYWRkcmVzc1N0ciA9IFwiXCJcbiAgICAgICAgYWRkcmVzc1N0ciA9IGFkZHJlc3MuYWRkcmVzc1xuICAgICAgICBpZiAoYWRkcmVzcy5sYW5kX21hcmspIHtcbiAgICAgICAgICAgIGFkZHJlc3NTdHIgKz0gXCIsIFwiICsgYWRkcmVzcy5sYW5kX21hcmtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWRkcmVzcy5sb2NhbGl0eSkge1xuICAgICAgICAgICAgYWRkcmVzc1N0ciArPSBcIiwgXCIgKyBhZGRyZXNzLmxvY2FsaXR5XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFkZHJlc3NTdHJcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgbGV0IGFkZHJlc3NTdHIgPSBcIlwiXG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRBZGRyZXNzKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmFkZHJlc3MubWFwKChhZGQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYWRkLmlkID09IHRoaXMucHJvcHMuc2VsZWN0ZWRBZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NTdHIgPSBhZGQuYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWRkLmxvY2FsaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzU3RyICs9IFwiLCBcIiArIGFkZC5sb2NhbGl0eVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHdpZGdldCBtcmItMTUgJHt0aGlzLnByb3BzLmFkZHJlc3NFcnJvciA9PSBmYWxzZSB8fCBhZGRyZXNzU3RyLmxlbmd0aCA/Jyc6J3JuZC1lcnJvci1ubSd9YH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYi12aXNpdC10aW1lIGQtZmxleCBqYy1zcGFjZWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e319IGNsYXNzTmFtZT1cInRpdGxlIGQtZmxleFwiPjxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcxOHB4JywgbWFyZ2luUmlnaHQ6ICc4cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2hvbWUtY2xlYW4uc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+UGlja3VwIEFkZHJlc3M8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYmwtdmlldy1mb3JtYXR0aW5nIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkYXRlLXRpbWVcIiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT57YWRkcmVzc1N0cn0ge3RoaXMucHJvcHMuYWRkcmVzc0Vycm9yID09IGZhbHNlIHx8IGFkZHJlc3NTdHIubGVuZ3RoID8gJycgOiA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDBcIiBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIGZvbnRTaXplOiAxMSwgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJy04cHgnLCByaWdodDogMCB9fT5SZXF1aXJlZDwvc3Bhbj59PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZnctNzAwIHRleHQtc21cIiBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubmF2aWdhdGVUbygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+e2FkZHJlc3NTdHIgPyBcIkNoYW5nZVwiIDogXCJBZGRcIn0gQWRkcmVzczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4vKlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWItdmlzaXQtdGltZVwiPlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiPjxzcGFuPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaWNvbnMvaG9tZS1vcmFuZ2Uuc3ZnXCJ9IGNsYXNzTmFtZT1cInZpc2l0LXRpbWUtaWNvblwiIC8+PC9zcGFuPlBpY2t1cCBBZGRyZXNzIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+PGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm5hdmlnYXRlVG8oKVxuICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmdy03MDAgdGV4dC1zbVwiPnthZGRyZXNzU3RyID8gXCJDaGFuZ2VcIiA6IFwiUGlja1wifTwvYT48L3NwYW4+PC9oND5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkYXRlLXRpbWVcIiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT57YWRkcmVzc1N0cn0ge3RoaXMucHJvcHMuYWRkcmVzc0Vycm9yID09IGZhbHNlIHx8IGFkZHJlc3NTdHIubGVuZ3RoID8gJycgOiA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDBcIiBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIGZvbnRTaXplOiAxMSwgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJy04cHgnLCByaWdodDogMCB9fT5SZXF1aXJlZDwvc3Bhbj59PC9wPlxuICAgICAgICAgICAgPC9kaXY+Ki9cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUGlja3VwQWRkcmVzc1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcbmNvbnN0IENvbXByZXNzID0gcmVxdWlyZSgnY29tcHJlc3MuanMnKVxuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvTG9hZGVyJ1xuY2xhc3MgVXBsb2FkUHJlc2NyaXB0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRhdGFVcmw6IG51bGwsXG4gICAgICAgICAgICB6b29tSW1hZ2VVcmw6IG51bGwsXG4gICAgICAgICAgICB6b29tSW1hZ2U6IGZhbHNlLFxuICAgICAgICAgICAgb3BlblBkZjogZmFsc2UsXG4gICAgICAgICAgICBvcGVuUGRmVXJsOiBudWxsLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGlja0ZpbGUoZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXNbMF0pIHtcbiAgICAgICAgICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF1cbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5maWxlc1swXSAmJiBlLnRhcmdldC5maWxlc1swXS5uYW1lLmluY2x1ZGVzKCcucGRmJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaENyb3AobnVsbCwgZmlsZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcHJlc3MgPSBuZXcgQ29tcHJlc3MoKVxuICAgICAgICAgICAgICAgIGNvbXByZXNzLmNvbXByZXNzKFtmaWxlXSwge1xuICAgICAgICAgICAgICAgICAgICBxdWFsaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAxMDAwLFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nMSA9IHJlc3VsdHNbMF1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFzZTY0c3RyID0gaW1nMS5kYXRhXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0V4dCA9IGltZzEuZXh0XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBDb21wcmVzcy5jb252ZXJ0QmFzZTY0VG9GaWxlKGJhc2U2NHN0ciwgaW1nRXh0KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEJhc2U2NChmaWxlLCAoZGF0YVVybCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hDcm9wKGRhdGFVcmwsIG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YVVybCB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJFcnJvciB1cGxvYWRpbmcgaW1hZ2UuXCIgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEJhc2U2NChmaWxlLCBjYikge1xuICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxuICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2IocmVhZGVyLnJlc3VsdClcbiAgICAgICAgfVxuICAgICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnJvcilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmlzaENyb3AoZGF0YVVybCwgZmlsZSkge1xuICAgICAgICBsZXQgZmlsZV9ibG9iX2RhdGFcbiAgICAgICAgaWYgKGRhdGFVcmwpIHtcbiAgICAgICAgICAgIGZpbGVfYmxvYl9kYXRhID0gdGhpcy5kYXRhVVJJdG9CbG9iKGRhdGFVcmwpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1lbV9kYXRhID0ge31cbiAgICAgICAgbGV0IGV4aXN0aW5nRGF0YVxuICAgICAgICBsZXQgaW1nX3RhZyA9IFwicHJlc2NyaXB0aW9uX2ZpbGVcIlxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGRhdGFVcmw6IG51bGwsIGlzTG9hZGluZzogdHJ1ZVxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZm9ybV9kYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgZm9ybV9kYXRhLmFwcGVuZChpbWdfdGFnLCBmaWxlLCBcImltYWdlRmlsZW5hbWUucGRmXCIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvcm1fZGF0YS5hcHBlbmQoaW1nX3RhZywgZmlsZV9ibG9iX2RhdGEsIFwiaW1hZ2VGaWxlbmFtZS5qcGVnXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLnVwbG9hZFByZXNjcmlwdGlvbihmb3JtX2RhdGEsIChkYXRhLCBlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBtZW1fZGF0YS5pZCA9IGRhdGEuZGF0YS51c2VyXG4gICAgICAgICAgICAgICAgICAgIG1lbV9kYXRhLmltZ19wYXRoX2lkcyA9IFtdXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnVzZXJfcHJlc2NyaXB0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLnVzZXJfcHJlc2NyaXB0aW9ucykubWFwKGZ1bmN0aW9uIChba2V5LCB2YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1fZGF0YS5pbWdfcGF0aF9pZHMgPSB2YWx1ZS5pbWdfcGF0aF9pZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1fZGF0YS5pbWdfcGF0aF9pZHMucHVzaCh7IGlkOiBkYXRhLmlkLCBpbWFnZTogZGF0YS5kYXRhLnByZXNjcmlwdGlvbl9maWxlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYodmFsdWUuaWQgPT0gbWVtYmVyX2lkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtZW1fZGF0YS5pbWdfcGF0aF9pZHMgPSB2YWx1ZS5pbWdfcGF0aF9pZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtZW1fZGF0YS5pbWdfcGF0aF9pZHMucHVzaCh7aWQ6IGRhdGEuaWQsIGltYWdlOmRhdGEuZGF0YS5wcmVzY3JpcHRpb25fZmlsZX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG1lbV9kYXRhLmltZ19wYXRoX2lkcyA9IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG1lbV9kYXRhLmltZ19wYXRoX2lkcy5wdXNoKHtpZDogZGF0YS5pZCwgaW1hZ2U6ZGF0YS5kYXRhLnByZXNjcmlwdGlvbl9maWxlfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZW1fZGF0YS5pbWdfcGF0aF9pZHMucHVzaCh7IGlkOiBkYXRhLmlkLCBpbWFnZTogZGF0YS5kYXRhLnByZXNjcmlwdGlvbl9maWxlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zYXZlUHJlc2NyaXB0aW9uKG1lbV9kYXRhKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZGF0YVVSSXRvQmxvYihkYXRhVVJJKSB7XG4gICAgICAgIHZhciBiaW5hcnkgPSBhdG9iKGRhdGFVUkkuc3BsaXQoJywnKVsxXSk7XG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJpbmFyeS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJyYXkucHVzaChiaW5hcnkuY2hhckNvZGVBdChpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBCbG9iKFtuZXcgVWludDhBcnJheShhcnJheSldLCB7IHR5cGU6ICdpbWFnZS9qcGVnJyB9KTtcbiAgICB9XG5cbiAgICByZW1vdmVJbWFnZShpbWcpIHtcbiAgICAgICAgdGhpcy5wcm9wcy51c2VyX3ByZXNjcmlwdGlvbnNbMF0uaW1nX3BhdGhfaWRzLm1hcCgoZGF0YSwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEuaW1hZ2UgPT0gaW1nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVQcmVzY3JpcHRpb24oaW1nKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IFVwbG9hZGVkX2ltYWdlX2RhdGEgPSBbXVxuICAgICAgICBsZXQgaW1nX3VybCA9IFtdXG4gICAgICAgIGxldCBwZGZfdXJsID0gW11cbiAgICAgICAgaWYgKHRoaXMucHJvcHMudXNlcl9wcmVzY3JpcHRpb25zICYmIHRoaXMucHJvcHMudXNlcl9wcmVzY3JpcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudXNlcl9wcmVzY3JpcHRpb25zWzBdLmltZ19wYXRoX2lkcy5tYXAoKGRhdGEsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5pbWFnZS5pbmNsdWRlcygncGRmJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcGRmX3VybC5wdXNoKGRhdGEuaW1hZ2UpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW1nX3VybC5wdXNoKGRhdGEuaW1hZ2UpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2hvd191cGxvYWQgPSB0cnVlXG4gICAgICAgIGlmIChpbWdfdXJsLmxlbmd0aCA+IDAgfHwgcGRmX3VybC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzaG93X3VwbG9hZCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCB3aGl0ZS11cGxkLWRpdlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zdXJhbmNlLXByb29mcy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qICAgIHRoaXMucHJvcHMuZW5kb3JzZW1lbnRFcnJvci5pbmRleE9mKHRoaXMucHJvcHMubWVtYmVyX2lkKSAhPSAtMSAmJiBpbWdfdXJsLmxlbmd0aD09MD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnMtcHJmLWVycm9yLW1zZ1wiPipQbGVhc2UgdXBsb2FkIHRoZSByZXF1aXJlZCBkb2N1bWVudHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnKi9cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZC1hZGRidG4tY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtdXBsZC1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtc2ItZnJzdC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy92ZWN0b3J1cGwucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtdXBsb2FkLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5zLXVwbG9hZC1wYXJhLXRleHRcIj5VcGxvYWQgcHJlc2NyaXB0aW9uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwiaW5zLXVwbG9hZC1zdWItdGV4dFwiPkFhZGhhciBjYXJkLCBQYXNzcG9ydCwgRHJpdmluZyBMaWNlbnNlLCBWb3RlciBJRCBDYXJkPC9wPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5zLWZpbGUtdHlsZVwiPkZpbGUgdHlwZToganBnLCBqcGVnLCBwbmcsIHBkZiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93X3VwbG9hZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucy1wcm9vZi11cGxvYWQtYnRuXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlRmlsZVBpY2tlcicpLmNsaWNrKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWFnZUZpbGVQaWNrZXInKS52YWx1ZSA9IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pbnMtdXAtaWNvLnN2Z1wifSAvPiBVcGxvYWRcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fSBpZD1cImltYWdlRmlsZVBpY2tlclwiIG9uQ2hhbmdlPXt0aGlzLnBpY2tGaWxlLmJpbmQodGhpcyl9IGFjY2VwdD1cImltYWdlL3gtcG5nLGltYWdlL2pwZWcsaW1hZ2UvanBnLC5wZGZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzTG9hZGluZyAmJiBzaG93X3VwbG9hZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtcHJmLWltZy1ncmQgZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci1mb3ItY2hhdC1kaXYgbXQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRlci1mb3ItY2hhdCBtYi0wJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgIXNob3dfdXBsb2FkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZC1pbWctc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdfdXJsICYmIGltZ191cmwubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nX3VybC5tYXAoKGRhdGEsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJpbnMtcHJmLWltZy1ncmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGlucy11cC1pbWctaWNcIiBzcmM9e2RhdGF9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImlucy1wcmYtY2xzXCIgb25DbGljaz17dGhpcy5yZW1vdmVJbWFnZS5iaW5kKHRoaXMsIGRhdGEpfSBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vY3AvYXNzZXRzL2ltZy9pY29ucy9jbG9zZS5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZGZfdXJsICYmIHBkZl91cmwubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGRmX3VybC5tYXAoKGRhdGEsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiaW5zLXByZi1pbWctZ3JkXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGlucy11cC1pbWctaWNcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wZGYuanBnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImlucy1wcmYtY2xzXCIgb25DbGljaz17dGhpcy5yZW1vdmVJbWFnZS5iaW5kKHRoaXMsIGRhdGEpfSBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vY3AvYXNzZXRzL2ltZy9pY29ucy9jbG9zZS5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzTG9hZGluZyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtcHJmLWltZy1ncmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItZm9yLWNoYXQtZGl2IG10LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkZXItZm9yLWNoYXQgbWItMCcgc3R5bGU9e3sgd2lkdGg6ICc1MHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoaW1nX3VybCAmJiBpbWdfdXJsLmxlbmd0aCkgfHwgKHBkZl91cmwgJiYgcGRmX3VybC5sZW5ndGgpKSA+PSA1ID8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxzcGFuIGNsYXNzTmFtZT1cImlucy1wcmYtYWRkTW9yZVwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlRmlsZVBpY2tlcl9iYWNrJykuY2xpY2soKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2VGaWxlUGlja2VyX2JhY2snKS52YWx1ZSA9IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbnMtYWRkaWNvXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaW5zLWFkZC1pY28uc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBNb3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fSBpZD17J2ltYWdlRmlsZVBpY2tlcl9iYWNrJ30gb25DaGFuZ2U9e3RoaXMucGlja0ZpbGUuYmluZCh0aGlzKX0gYWNjZXB0PVwiaW1hZ2UveC1wbmcsaW1hZ2UvanBlZyxpbWFnZS9qcGcsLnBkZlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBVcGxvYWRQcmVzY3JpcHRpb24iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgZ2V0Q2FydEl0ZW1zLCBhZGRUb0NhcnQsIHNlbGVjdExhYlRpbWVTTG90LCBnZXRMYWJCeUlkLCBnZXRVc2VyUHJvZmlsZSwgc2VsZWN0TGFiQXBwb2ludG1lbnRUeXBlLCBnZXRVc2VyQWRkcmVzcywgc2VsZWN0UGlja3VwQWRkcmVzcywgY3JlYXRlTEFCQXBwb2ludG1lbnQsIHNlbmRBZ2VudEJvb2tpbmdVUkwsIHJlbW92ZUxhYkNvdXBvbnMsIGFwcGx5TGFiQ291cG9ucywgcmVzZXRMYWJDb3Vwb25zLCBnZXRDb3Vwb25zLCBhcHBseUNvdXBvbnMsIHNldENvcnBvcmF0ZUNvdXBvbiwgY3JlYXRlUHJvZmlsZSwgc2VuZE9UUCwgc3VibWl0T1RQLCBmZXRjaFRyYW5zYWN0aW9ucywgZWRpdFVzZXJQcm9maWxlLCBzYXZlUGluY29kZSwgY2xlYXJFeHRyYVRlc3RzLCBzZWxlY3RTZWFyY2hUeXBlLCBwYXRpZW50RGV0YWlscywgdXBsb2FkUHJlc2NyaXB0aW9uLCBzYXZlUHJlc2NyaXB0aW9uLCByZW1vdmVQcmVzY3JpcHRpb24sIGNsZWFyUHJlc2NyaXB0aW9ucywgcHJlQm9va2luZywgc2F2ZUF2YWlsTm93SW5zdXJhbmNlLCB0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSwgdW5TZXRDb21tb25VdG1UYWdzLCBzZW5kU1BPQWdlbnRCb29raW5nLCBzZXRDb21tb25VdG1UYWdzLCBnZXRMYWJWaXBHb2xkUGxhbnMsIHNlbGVjdFZpcENsdWJQbGFuLCBzZWxlY3RfbGFiX3BheW1lbnRfdHlwZSwgcHVzaE1lbWJlcnNEYXRhLCByZXRyaWV2ZU1lbWJlcnNEYXRhLCBjbGVhckFsbFRlc3RzLCBzZWxlY3RQcm9maWxlLCBOb25JcGRCb29raW5nTGVhZCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5cbmltcG9ydCBCb29raW5nU3VtbWFyeVZpZXdOZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kaWFnbm9zaXMvYm9va2luZ1N1bW1hcnkvaW5kZXguanMnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG5cbmNsYXNzIEJvb2tpbmdTdW1tYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICBhZ2VudF9zZWxlY3RlZF9wbGFuX2lkOm51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogKCkgPT4gbnVsbFxuICAgIH1cblxuICAgIGZldGNoRGF0YShwcm9wcyl7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHByb3BzLmxvY2F0aW9uLnNlYXJjaClcblxuICAgICAgICBsZXQgbGFiX2lkID0gcHJvcHMuc2VsZWN0ZWRMYWIgfHwgcHJvcHMubWF0Y2gucGFyYW1zLmlkIHx8IHBhcnNlZC5sYWJfaWRcblxuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgICAgICAvL0NoZWNrIGlmIHVzZXIgaXMgbG9naW4sIGlmIGxvZ2dlZCBpbiB0aGVuIGZldGNoIHVzZXIgcmVsYXRlZCBkYXRhXG4gICAgICAgICAgICBwcm9wcy5nZXRVc2VyUHJvZmlsZSgpXG4gICAgICAgICAgICBwcm9wcy5nZXRVc2VyQWRkcmVzcygpXG4gICAgICAgICAgICBwcm9wcy5mZXRjaFRyYW5zYWN0aW9ucygpXG4gICAgICAgICAgICBwcm9wcy5nZXRDYXJ0SXRlbXMoKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYocGFyc2VkLmR1bW15X2lkKSB7XG4gICAgICAgICAgICAvL0lmIGR1bW15X2lkIGlzIGF2YWlsYmxlIGluIHRoZSB1cmwsIHRoZW4gd2UgbG9nZ2VkIGluIHVzZXIgJiBwcm9jZWVkIHdpdGggc2luZ2xlIGZsb3cgam91cm5leVxuICAgICAgICAgICAgdGhpcy5zaW5nbGVGbG93TG9naW4ocHJvcHMsbGFiX2lkKVxuXG4gICAgICAgIH1lbHNlIGlmKGxhYl9pZCl7XG4gICAgICAgICAgICAvL1NlbGVjdCBhbGwgdGhlIHRlc3RzIHNlbGVjdGVkIGJ5IHRoZSB1c2VyIGluIHRoZSBwcmV2aW91cyBwYWdlICYgaGl0IGFwaSB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgICBsZXQgdGVzdElkcyA9IHByb3BzLmxhYl90ZXN0X2RhdGFbbGFiX2lkXSB8fCBbXVxuICAgICAgICAgICAgdGVzdElkcyA9IHRlc3RJZHMubWFwKHggPT4geC5pZClcbiAgICAgICAgICAgIGxldCBmb3JjZUFkZFRlc3RpZHMgPSBmYWxzZVxuICAgICAgICAgICAgaWYocGFyc2VkLnRlc3RfaWRzKSB7XG4gICAgICAgICAgICAgICAgdGVzdElkcyA9IHBhcnNlZC50ZXN0X2lkcy5zcGxpdCgnLCcpXG4gICAgICAgICAgICAgICAgZm9yY2VBZGRUZXN0aWRzID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGFQYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgYm9va2luZ19wYWdlOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9wcy5nZXRMYWJCeUlkKGxhYl9pZCwgdGVzdElkcywgZm9yY2VBZGRUZXN0aWRzLCBkYXRhUGFyYW1zKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2luZ2xlRmxvd0xvZ2luKHByb3BzLCBsYWJfaWQpe1xuICAgICAgIC8vIHRoaXMucHJvcHMuY2xlYXJBbGxUZXN0cygpXG4gICAgICAgIC8vQXV0byBTZWxlY3Qgb24gQWdlbnQgTG9naW4gVVJMXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgaWYocGFyc2VkICYmIHBhcnNlZC5kdW1teV9pZCkge1xuICAgICAgICAgICAgbGV0IGV4dHJhUGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIGR1bW15X2lkOiBwYXJzZWQuZHVtbXlfaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb3BzLnJldHJpZXZlTWVtYmVyc0RhdGEoJ1NJTkdMRV9QVVJDSEFTRScsIGV4dHJhUGFyYW1zLCAocmVzcCk9PnsgLy8gdG8gcmV0cmlldmUgYWxyZWFkeSBwdXNoZWQgbWVtYmVyIGRhdGEgaW4gY2FzZSBvZiBhZ2VudCBvciBwcm9wb3NlciBpdCBzZWxmXG4gICAgICAgICAgICAgICAgaWYocmVzcCAmJiByZXNwLmRhdGEpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldExhYkJvb2tpbmcocmVzcC5kYXRhKSBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWdlbnRfc2VsZWN0ZWRfcGxhbl9pZDpyZXNwLmRhdGEucGx1c19wbGFufSkgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGVzdElkcyA9IHByb3BzLmxhYl90ZXN0X2RhdGFbbGFiX2lkXSB8fCBbXVxuICAgICAgICAgICAgICAgICAgICB0ZXN0SWRzID0gdGVzdElkcy5tYXAoeCA9PiB4LmlkKVxuICAgICAgICAgICAgICAgICAgICBsZXQgZm9yY2VBZGRUZXN0aWRzID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgaWYocGFyc2VkLnRlc3RfaWRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXN0SWRzID0gcGFyc2VkLnRlc3RfaWRzLnNwbGl0KCcsJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlQWRkVGVzdGlkcyA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YVBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvb2tpbmdfcGFnZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmdldExhYkJ5SWQobGFiX2lkLCB0ZXN0SWRzLCBmb3JjZUFkZFRlc3RpZHMsIGRhdGFQYXJhbXMpXG4gICAgICAgICAgICAgICAgfSwxMDApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0TGFiQm9va2luZyhkYXRhKSB7XG4gICAgICAgIC8vT24gQWdlbnQvRGlyZWN0IExvZ2luLCBzZXQgZGF0YSBmb3IgdGhlIGxhYiBwYWdlLGUuZyBzZWxlY3QgdGltZXNsb3QsIHByb2ZpbGVpZCwgcGlja3VwIHR5cGUsIHRlc3RzLCBjb3Vwb25zICBcbiAgICAgICAgbGV0IHsgY291cG9uX2RhdGEgfSA9IGRhdGFcbiAgICAgICAgLy8gZm9yIChsZXQgY3Vycl90ZXN0IG9mIGRhdGEudGVzdF9pZHMpIHtcbiAgICAgICAgLy8gICAgIGxldCBjdXJyID0ge31cbiAgICAgICAgLy8gICAgIGN1cnIuaWQgPSBjdXJyX3Rlc3RcbiAgICAgICAgLy8gICAgIGN1cnIuZXh0cmFfdGVzdCA9IHRydWVcbiAgICAgICAgLy8gICAgIGN1cnIubGFiX2lkID0gZGF0YS5sYWJJZFxuICAgICAgICAvLyAgICAgdGhpcy5wcm9wcy50b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSgndGVzdCcsIGN1cnIsIHRydWUpXG4gICAgICAgIC8vIH1cblxuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLnBpbmNvZGUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2F2ZVBpbmNvZGUoZGF0YS5waW5jb2RlKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RQcm9maWxlKGRhdGEucHJvZmlsZSlcbiAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RfbGFiX3BheW1lbnRfdHlwZShkYXRhLnBheW1lbnRfdHlwZSlcbiAgICAgICAgXG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWN0TGFiVGltZVNMb3QoZGF0YS5zZWxlY3RlZFNsb3QsIGZhbHNlLCBudWxsKVxuXG4gICAgICAgIGlmIChjb3Vwb25fZGF0YS5jb3Vwb25fY29kZSkge1xuICAgICAgICAgICAgbGV0IGNvdXBvbl9pZCA9ICcnXG4gICAgICAgICAgICBsZXQgaXNfY2FzaGJhY2sgPSBmYWxzZVxuICAgIFxuICAgICAgICAgICAgaWYgKGNvdXBvbl9jb2RlICYmIE9iamVjdC5rZXlzKGNvdXBvbl9jb2RlKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb3Vwb25faWQgPSBjb3Vwb25fY29kZS5pZFxuICAgICAgICAgICAgICAgIGlzX2Nhc2hiYWNrID0gY291cG9uX2NvZGUuaXNfY2FzaGJhY2tcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3Vwb25fY29kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwbHlDb3Vwb25zKCcyJywgeyBjb2RlOiBjb3Vwb25fZGF0YS5jb3Vwb25fY29kZSwgY291cG9uX2lkOiBjb3Vwb25faWQsIGlzX2Nhc2hiYWNrOiBpc19jYXNoYmFjayB9LCBjb3Vwb25faWQsIGRhdGEubGFiSWQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcyl7XG4gICAgICAgIGlmKHByb3BzLnNlbGVjdGVkTGFiICE9IHRoaXMucHJvcHMuc2VsZWN0ZWRMYWIpe1xuICAgICAgICAgICAgdGhpcy5mZXRjaERhdGEocHJvcHMpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5mZXRjaERhdGEodGhpcy5wcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBsYWJfaWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkTGFiIHx8IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkIHx8IHBhcnNlZC5sYWJfaWRcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJvb2tpbmdTdW1tYXJ5Vmlld05ldyB7Li4udGhpcy5wcm9wc30gc2VsZWN0ZWRMYWI9e2xhYl9pZH0gYWdlbnRfc2VsZWN0ZWRfcGxhbl9pZD17dGhpcy5zdGF0ZS5hZ2VudF9zZWxlY3RlZF9wbGFuX2lkfSBmZXRjaERhdGE9e3RoaXMuZmV0Y2hEYXRhLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuXG4gICAgY29uc3Qge1xuICAgICAgICBzZWxlY3RlZENyaXRlcmlhcyxcbiAgICAgICAgbGFiX3Rlc3RfZGF0YSxcbiAgICAgICAgY29ycG9yYXRlQ291cG9uLFxuICAgICAgICBwaW5jb2RlLFxuICAgICAgICBzYXZlZF9wYXRpZW50X2RldGFpbHMsXG4gICAgICAgIHNlbGVjdGVkTG9jYXRpb25cbiAgICB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX0xBQlNcbiAgICBjb25zdCB7IHNlbGVjdGVkUHJvZmlsZSwgcHJvZmlsZXMsIGFkZHJlc3MsIHVzZXJXYWxsZXRCYWxhbmNlLCB1c2VyQ2FzaGJhY2tCYWxhbmNlLCBpc1VzZXJDYXJlZCwgZGVmYXVsdFByb2ZpbGUsIGlwZF9jaGF0LCBjb21tb25fdXRtX3RhZ3MsIGlzX2FueV91c2VyX2J1eV9nb2xkLCB1c2VyX2xvZ2dlZEluX251bWJlciB9ID0gc3RhdGUuVVNFUlxuICAgIGxldCBMQUJTID0gc3RhdGUuTEFCU1xuICAgIGxldCB7IHNlbGVjdGVkU2xvdCwgc2VsZWN0ZWRBcHBvaW50bWVudFR5cGUsIHNlbGVjdGVkQWRkcmVzcywgbGFiQ291cG9ucywgZGlzQ291bnRlZExhYlByaWNlLCBjb3Vwb25BdXRvQXBwbHksIHVzZXJfcHJlc2NyaXB0aW9ucywgaXNfcHJlc2NyaXB0aW9uX25lZWRlZCwgc2VsZWN0ZWREYXRlRm9ybWF0LCBzaG93X3ZpcF9ub25fbG9naW5fY2FyZCAsIHBheW1lbnRfdHlwZX0gPSBzdGF0ZS5MQUJfU0VBUkNIXG4gICAgY29uc3QgeyBsYWJHb2xkUHJlZGljdGVkUHJpY2UsIHNlbGVjdGVkX3ZpcF9wbGFuLHNob3dfbGFiX3BheW1lbnRfbW9kZSB9ID0gIHN0YXRlLlZJUENMVUJcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29ycG9yYXRlQ291cG9uLFxuICAgICAgICBzZWxlY3RlZENyaXRlcmlhcyxcbiAgICAgICAgbGFiX3Rlc3RfZGF0YSxcbiAgICAgICAgTEFCUyxcbiAgICAgICAgc2VsZWN0ZWRQcm9maWxlLCBwcm9maWxlcywgc2VsZWN0ZWRTbG90LCBzZWxlY3RlZEFwcG9pbnRtZW50VHlwZSwgYWRkcmVzcywgc2VsZWN0ZWRBZGRyZXNzLCBsYWJDb3Vwb25zLCBkaXNDb3VudGVkTGFiUHJpY2UsXG4gICAgICAgIGNvdXBvbkF1dG9BcHBseSwgdXNlcldhbGxldEJhbGFuY2UsIHVzZXJDYXNoYmFja0JhbGFuY2UsIHBpbmNvZGUsIGlzVXNlckNhcmVkLCBkZWZhdWx0UHJvZmlsZSwgc2F2ZWRfcGF0aWVudF9kZXRhaWxzLCB1c2VyX3ByZXNjcmlwdGlvbnMsIGlwZF9jaGF0LCBpc19wcmVzY3JpcHRpb25fbmVlZGVkLCBzZWxlY3RlZERhdGVGb3JtYXQsIHNlbGVjdGVkTG9jYXRpb24sIGNvbW1vbl91dG1fdGFncywgc2hvd192aXBfbm9uX2xvZ2luX2NhcmQsXG4gICAgICAgIGlzX2FueV91c2VyX2J1eV9nb2xkLCBsYWJHb2xkUHJlZGljdGVkUHJpY2UsIHNlbGVjdGVkX3ZpcF9wbGFuLCBwYXltZW50X3R5cGUsIHNob3dfbGFiX3BheW1lbnRfbW9kZSwgdXNlcl9sb2dnZWRJbl9udW1iZXJcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdExhYlRpbWVTTG90OiAoc2xvdCwgcmVzY2hlZHVsZSwgZGF0ZVBhcmFtKSA9PiBkaXNwYXRjaChzZWxlY3RMYWJUaW1lU0xvdChzbG90LCByZXNjaGVkdWxlLCBkYXRlUGFyYW0pKSxcbiAgICAgICAgZ2V0VXNlclByb2ZpbGU6ICgpID0+IGRpc3BhdGNoKGdldFVzZXJQcm9maWxlKCkpLFxuICAgICAgICBnZXRMYWJCeUlkOiAobGFiSWQsIHRlc3RJZHMsIGZvcmNlQWRkVGVzdGlkcywgZGF0YVBhcmFtcykgPT4gZGlzcGF0Y2goZ2V0TGFiQnlJZChsYWJJZCwgdGVzdElkcywgZm9yY2VBZGRUZXN0aWRzLCBkYXRhUGFyYW1zKSksXG4gICAgICAgIHNlbGVjdExhYkFwcG9pbnRtZW50VHlwZTogKHR5cGUpID0+IGRpc3BhdGNoKHNlbGVjdExhYkFwcG9pbnRtZW50VHlwZSh0eXBlKSksXG4gICAgICAgIGdldFVzZXJBZGRyZXNzOiAoKSA9PiBkaXNwYXRjaChnZXRVc2VyQWRkcmVzcygpKSxcbiAgICAgICAgc2VsZWN0UGlja3VwQWRkcmVzczogKGFkZHJlc3MpID0+IGRpc3BhdGNoKHNlbGVjdFBpY2t1cEFkZHJlc3MoYWRkcmVzcykpLFxuICAgICAgICBjcmVhdGVMQUJBcHBvaW50bWVudDogKHBvc3REYXRhLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2goY3JlYXRlTEFCQXBwb2ludG1lbnQocG9zdERhdGEsIGNhbGxiYWNrKSksXG4gICAgICAgIHNlbmRBZ2VudEJvb2tpbmdVUkw6IChvcmRlcklkLCB0eXBlLCBwdXJjaGFzZV90eXBlLHF1ZXJ5X2RhdGEsZXh0cmFQYXJhbXMsIGNiKSA9PiBkaXNwYXRjaChzZW5kQWdlbnRCb29raW5nVVJMKG9yZGVySWQsIHR5cGUscHVyY2hhc2VfdHlwZSxxdWVyeV9kYXRhLCBleHRyYVBhcmFtcywgY2IpKSxcbiAgICAgICAgcmVtb3ZlTGFiQ291cG9uczogKGxhYklkLCBjb3Vwb25JZCkgPT4gZGlzcGF0Y2gocmVtb3ZlTGFiQ291cG9ucyhsYWJJZCwgY291cG9uSWQpKSxcbiAgICAgICAgYXBwbHlMYWJDb3Vwb25zOiAocHJvZHVjdElkLCBjb3Vwb25Db2RlLCBjb3Vwb25JZCwgbGFiSWQsIGRlYWxQcmljZSwgdGVzdF9pZHMsIHByb2ZpbGVfaWQsIGNhcnRfaXRlbSwgY2FsbGJhY2spID0+IGRpc3BhdGNoKGFwcGx5TGFiQ291cG9ucyhwcm9kdWN0SWQsIGNvdXBvbkNvZGUsIGNvdXBvbklkLCBsYWJJZCwgZGVhbFByaWNlLCB0ZXN0X2lkcywgcHJvZmlsZV9pZCwgY2FydF9pdGVtLCBjYWxsYmFjaykpLFxuICAgICAgICByZXNldExhYkNvdXBvbnM6ICgpID0+IGRpc3BhdGNoKHJlc2V0TGFiQ291cG9ucygpKSxcbiAgICAgICAgZ2V0Q291cG9uczogKGRhdGEpID0+IGRpc3BhdGNoKGdldENvdXBvbnMoZGF0YSkpLFxuICAgICAgICBhcHBseUNvdXBvbnM6IChwcm9kdWN0SWQsIGNvdXBvbkRhdGEsIGNvdXBvbklkLCBsYWJJZCwgY2FsbGJhY2spID0+IGRpc3BhdGNoKGFwcGx5Q291cG9ucyhwcm9kdWN0SWQsIGNvdXBvbkRhdGEsIGNvdXBvbklkLCBsYWJJZCwgY2FsbGJhY2spKSxcbiAgICAgICAgc2V0Q29ycG9yYXRlQ291cG9uOiAoY291cG9uKSA9PiBkaXNwYXRjaChzZXRDb3Jwb3JhdGVDb3Vwb24oY291cG9uKSksXG4gICAgICAgIGNyZWF0ZVByb2ZpbGU6IChwb3N0RGF0YSwgY2IpID0+IGRpc3BhdGNoKGNyZWF0ZVByb2ZpbGUocG9zdERhdGEsIGNiKSksXG4gICAgICAgIHNlbmRPVFA6IChudW1iZXIsdmlhU21zLHZpYVdoYXRzYXBwLG1lc3NhZ2VfdHlwZSwgY2IpID0+IGRpc3BhdGNoKHNlbmRPVFAobnVtYmVyLHZpYVNtcyx2aWFXaGF0c2FwcCxtZXNzYWdlX3R5cGUsIGNiKSksXG4gICAgICAgIHN1Ym1pdE9UUDogKG51bWJlciwgb3RwLCBleHRyYVBhcmFtc0RhdGEsIGNiKSA9PiBkaXNwYXRjaChzdWJtaXRPVFAobnVtYmVyLCBvdHAsZXh0cmFQYXJhbXNEYXRhLCAgY2IpKSxcbiAgICAgICAgZmV0Y2hUcmFuc2FjdGlvbnM6ICgpID0+IGRpc3BhdGNoKGZldGNoVHJhbnNhY3Rpb25zKCkpLFxuICAgICAgICBzYXZlUGluY29kZTogKHBpbmNvZGUpID0+IGRpc3BhdGNoKHNhdmVQaW5jb2RlKHBpbmNvZGUpKSxcbiAgICAgICAgYWRkVG9DYXJ0OiAocHJvZHVjdF9pZCwgZGF0YSkgPT4gZGlzcGF0Y2goYWRkVG9DYXJ0KHByb2R1Y3RfaWQsIGRhdGEpKSxcbiAgICAgICAgZ2V0Q2FydEl0ZW1zOiAoKSA9PiBkaXNwYXRjaChnZXRDYXJ0SXRlbXMoKSksXG4gICAgICAgIGVkaXRVc2VyUHJvZmlsZTogKHByb2ZpbGVEYXRhLCBwcm9maWxlSWQsIGNiKSA9PiBkaXNwYXRjaChlZGl0VXNlclByb2ZpbGUocHJvZmlsZURhdGEsIHByb2ZpbGVJZCwgY2IpKSxcbiAgICAgICAgY2xlYXJFeHRyYVRlc3RzOiAoKSA9PiBkaXNwYXRjaChjbGVhckV4dHJhVGVzdHMoKSksXG4gICAgICAgIHNlbGVjdFNlYXJjaFR5cGU6ICh0eXBlKSA9PiBkaXNwYXRjaChzZWxlY3RTZWFyY2hUeXBlKHR5cGUpKSxcbiAgICAgICAgcGF0aWVudERldGFpbHM6KGNyaXRlcmlhKSA9PiBkaXNwYXRjaChwYXRpZW50RGV0YWlscyhjcml0ZXJpYSkpLFxuICAgICAgICB1cGxvYWRQcmVzY3JpcHRpb246KHByb2ZpbGVEYXRhLGNiKSA9PmRpc3BhdGNoKHVwbG9hZFByZXNjcmlwdGlvbihwcm9maWxlRGF0YSxjYikpLFxuICAgICAgICBzYXZlUHJlc2NyaXB0aW9uOihpbWdVcmwsY2IpPT5kaXNwYXRjaChzYXZlUHJlc2NyaXB0aW9uKGltZ1VybCxjYikpLFxuICAgICAgICByZW1vdmVQcmVzY3JpcHRpb246KGNyaXRlcmlhKT0+ZGlzcGF0Y2gocmVtb3ZlUHJlc2NyaXB0aW9uKGNyaXRlcmlhKSksXG4gICAgICAgIGNsZWFyUHJlc2NyaXB0aW9uczooKT0+ZGlzcGF0Y2goY2xlYXJQcmVzY3JpcHRpb25zKCkpLFxuICAgICAgICBwcmVCb29raW5nOihzbG90KSA9PiBkaXNwYXRjaChwcmVCb29raW5nKHNsb3QpKSxcbiAgICAgICAgc2F2ZUF2YWlsTm93SW5zdXJhbmNlOihkYXRhKSA9PiBkaXNwYXRjaChzYXZlQXZhaWxOb3dJbnN1cmFuY2UoZGF0YSkpLFxuICAgICAgICB1blNldENvbW1vblV0bVRhZ3M6ICh0eXBlLCB0YWcpPT4gZGlzcGF0Y2godW5TZXRDb21tb25VdG1UYWdzKHR5cGUsIHRhZykpLFxuICAgICAgICBzZW5kU1BPQWdlbnRCb29raW5nOiAocG9zdERhdGEsIGNiKSA9PiBkaXNwYXRjaChzZW5kU1BPQWdlbnRCb29raW5nKHBvc3REYXRhLCBjYikpLFxuICAgICAgICBzZXRDb21tb25VdG1UYWdzOiAodHlwZSwgdGFnKSA9PiBkaXNwYXRjaChzZXRDb21tb25VdG1UYWdzKHR5cGUsIHRhZykpLFxuICAgICAgICB0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYTogKHR5cGUsIGNyaXRlcmlhKSA9PiBkaXNwYXRjaCh0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSh0eXBlLCBjcml0ZXJpYSkpLFxuICAgICAgICBnZXRMYWJWaXBHb2xkUGxhbnM6IChkYXRhUGFyYW1zLCBjYikgPT4gZGlzcGF0Y2goZ2V0TGFiVmlwR29sZFBsYW5zKGRhdGFQYXJhbXMsIGNiKSksXG4gICAgICAgIHNlbGVjdFZpcENsdWJQbGFuOiAodHlwZSwgc2VsZWN0ZWRQbGFuLCBjYikgPT4gZGlzcGF0Y2goc2VsZWN0VmlwQ2x1YlBsYW4odHlwZSwgc2VsZWN0ZWRQbGFuLCBjYikpLFxuICAgICAgICBzZWxlY3RfbGFiX3BheW1lbnRfdHlwZTogKHR5cGUpID0+IGRpc3BhdGNoKHNlbGVjdF9sYWJfcGF5bWVudF90eXBlKHR5cGUpKSxcbiAgICAgICAgcHVzaE1lbWJlcnNEYXRhOihjcml0ZXJpYSwgY2IpID0+ZGlzcGF0Y2gocHVzaE1lbWJlcnNEYXRhKGNyaXRlcmlhLCBjYikpLFxuICAgICAgICByZXRyaWV2ZU1lbWJlcnNEYXRhOih0eXBlLGV4dHJhUGFyYW1zLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2gocmV0cmlldmVNZW1iZXJzRGF0YSh0eXBlLCBleHRyYVBhcmFtcywgY2FsbGJhY2spKSxcbiAgICAgICAgY2xlYXJBbGxUZXN0czogKCkgPT4gZGlzcGF0Y2goY2xlYXJBbGxUZXN0cygpKSxcbiAgICAgICAgc2VsZWN0UHJvZmlsZTogKGlkKSA9PiBkaXNwYXRjaChzZWxlY3RQcm9maWxlKGlkKSksXG4gICAgICAgIE5vbklwZEJvb2tpbmdMZWFkOihkYXRhLGNiKSA9PmRpc3BhdGNoKE5vbklwZEJvb2tpbmdMZWFkKGRhdGEsIGNiKSksXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShCb29raW5nU3VtbWFyeSk7XG4iLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLkNvbXByZXNzPWUoKTp0LkNvbXByZXNzPWUoKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXtmdW5jdGlvbiBlKGkpe2lmKG5baV0pcmV0dXJuIG5baV0uZXhwb3J0czt2YXIgYT1uW2ldPXtleHBvcnRzOnt9LGlkOmksbG9hZGVkOiExfTtyZXR1cm4gdFtpXS5jYWxsKGEuZXhwb3J0cyxhLGEuZXhwb3J0cyxlKSxhLmxvYWRlZD0hMCxhLmV4cG9ydHN9dmFyIG49e307cmV0dXJuIGUubT10LGUuYz1uLGUucD1cIlwiLGUoMCl9KFtmdW5jdGlvbih0LGUsbil7dmFyIGksYSxyOyFmdW5jdGlvbihvLHUpe2E9W3QsbigxKSxuKDIpLG4oMyksbig0KSxuKDUpLG4oNildLGk9dSxyPVwiZnVuY3Rpb25cIj09dHlwZW9mIGk/aS5hcHBseShlLGEpOmksISh2b2lkIDAhPT1yJiYodC5leHBvcnRzPXIpKX0odGhpcyxmdW5jdGlvbih0LGUsbixpLGEscixvKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB1KHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX1mdW5jdGlvbiBzKHQpe2lmKEFycmF5LmlzQXJyYXkodCkpe2Zvcih2YXIgZT0wLG49QXJyYXkodC5sZW5ndGgpO2U8dC5sZW5ndGg7ZSsrKW5bZV09dFtlXTtyZXR1cm4gbn1yZXR1cm4gQXJyYXkuZnJvbSh0KX1mdW5jdGlvbiBmKHQsZSl7aWYoISh0IGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX12YXIgZD11KGUpLGw9dShuKSxjPXUoaSksaD11KGEpLHY9dShyKSxwPXUobyksZz1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlKXtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIGk9ZVtuXTtpLmVudW1lcmFibGU9aS5lbnVtZXJhYmxlfHwhMSxpLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBpJiYoaS53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsaS5rZXksaSl9fXJldHVybiBmdW5jdGlvbihlLG4saSl7cmV0dXJuIG4mJnQoZS5wcm90b3R5cGUsbiksaSYmdChlLGkpLGV9fSgpLHc9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7Zih0aGlzLHQpfXJldHVybiBnKHQsW3trZXk6XCJhdHRhY2hcIix2YWx1ZTpmdW5jdGlvbih0LGUpe3ZhciBuPXRoaXM7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGksYSl7dmFyIHI9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0KTtyLnNldEF0dHJpYnV0ZShcImFjY2VwdFwiLFwiaW1hZ2UvKlwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIixmdW5jdGlvbih0KXt2YXIgYT1uLmNvbXByZXNzKFtdLmNvbmNhdChzKHQudGFyZ2V0LmZpbGVzKSksZSk7aShhKX0sITEpfSl9fSx7a2V5OlwiY29tcHJlc3NcIix2YWx1ZTpmdW5jdGlvbih0LGUpe2Z1bmN0aW9uIG4odCxlKXt2YXIgbj1uZXcgdi5kZWZhdWx0KGUpO3JldHVybiBuLnN0YXJ0PXdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSxuLmFsdD10Lm5hbWUsbi5leHQ9dC50eXBlLG4uc3RhcnRTaXplPXQuc2l6ZSxwLmRlZmF1bHQub3JpZW50YXRpb24odCkudGhlbihmdW5jdGlvbihlKXtyZXR1cm4gbi5vcmllbnRhdGlvbj1lLGMuZGVmYXVsdC5sb2FkKHQpfSkudGhlbihpKG4pKX1mdW5jdGlvbiBpKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gaC5kZWZhdWx0LmxvYWQoZSkudGhlbihmdW5jdGlvbihlKXtpZih0LnN0YXJ0V2lkdGg9ZS5uYXR1cmFsV2lkdGgsdC5zdGFydEhlaWdodD1lLm5hdHVyYWxIZWlnaHQsdC5yZXNpemUpe3ZhciBuPWguZGVmYXVsdC5yZXNpemUodC5tYXhXaWR0aCx0Lm1heEhlaWdodCkoZS5uYXR1cmFsV2lkdGgsZS5uYXR1cmFsSGVpZ2h0KSxpPW4ud2lkdGgsYT1uLmhlaWdodDt0LmVuZFdpZHRoPWksdC5lbmRIZWlnaHQ9YX1lbHNlIHQuZW5kV2lkdGg9ZS5uYXR1cmFsV2lkdGgsdC5lbmRIZWlnaHQ9ZS5uYXR1cmFsSGVpZ2h0O3JldHVybiBsLmRlZmF1bHQuaW1hZ2VUb0NhbnZhcyh0LmVuZFdpZHRoLHQuZW5kSGVpZ2h0LHQub3JpZW50YXRpb24pKGUpfSkudGhlbihmdW5jdGlvbihlKXtyZXR1cm4gdC5pdGVyYXRpb25zPTEsdC5iYXNlNjRwcmVmaXg9ZC5kZWZhdWx0LnByZWZpeCh0LmV4dCksYShlLHQuc3RhcnRTaXplLHQucXVhbGl0eSx0LnNpemUsdC5taW5RdWFsaXR5LHQuaXRlcmF0aW9ucyl9KS50aGVuKGZ1bmN0aW9uKGUpe3JldHVybiB0LmZpbmFsU2l6ZT1kLmRlZmF1bHQuc2l6ZShlKSxkLmRlZmF1bHQuZGF0YShlKX0pLnRoZW4oZnVuY3Rpb24oZSl7dC5lbmQ9d2luZG93LnBlcmZvcm1hbmNlLm5vdygpO3ZhciBuPXQuZW5kLXQuc3RhcnQ7cmV0dXJue2RhdGE6ZSxwcmVmaXg6dC5iYXNlNjRwcmVmaXgsZWxhcHNlZFRpbWVJblNlY29uZHM6bi8xZTMsYWx0OnQuYWx0LGluaXRpYWxTaXplSW5NYjpsLmRlZmF1bHQuc2l6ZSh0LnN0YXJ0U2l6ZSkuTUIsZW5kU2l6ZUluTWI6bC5kZWZhdWx0LnNpemUodC5maW5hbFNpemUpLk1CLGV4dDp0LmV4dCxxdWFsaXR5OnQucXVhbGl0eSxlbmRXaWR0aEluUHg6dC5lbmRXaWR0aCxlbmRIZWlnaHRJblB4OnQuZW5kSGVpZ2h0LGluaXRpYWxXaWR0aEluUHg6dC5zdGFydFdpZHRoLGluaXRpYWxIZWlnaHRJblB4OnQuc3RhcnRIZWlnaHQsc2l6ZVJlZHVjZWRJblBlcmNlbnQ6KHQuc3RhcnRTaXplLXQuZmluYWxTaXplKS90LnN0YXJ0U2l6ZSoxMDAsaXRlcmF0aW9uczp0Lml0ZXJhdGlvbnN9fSl9fWZ1bmN0aW9uIGEodCxlKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06MSxpPWFyZ3VtZW50c1szXSxyPWFyZ3VtZW50cy5sZW5ndGg+NCYmdm9pZCAwIT09YXJndW1lbnRzWzRdP2FyZ3VtZW50c1s0XToxLG89YXJndW1lbnRzWzVdLHU9bC5kZWZhdWx0LmNhbnZhc1RvQmFzZTY0KHQsbikscz1kLmRlZmF1bHQuc2l6ZSh1KTtyZXR1cm4gbys9MSxzPmk/YSh0LHMsbi0uMSxpLHIsbyk6bj5yP2EodCxzLG4tLjEsaSxyLG8pOm48LjU/dTp1fXJldHVybiBQcm9taXNlLmFsbCh0Lm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbih0LGUpfSkpfX1dLFt7a2V5OlwiY29udmVydEJhc2U2NFRvRmlsZVwiLHZhbHVlOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIGwuZGVmYXVsdC5iYXNlNjRUb0ZpbGUodCxlKX19XSksdH0oKTt0LmV4cG9ydHM9d30pfSxmdW5jdGlvbih0LGUsbil7dmFyIGksYSxyOyFmdW5jdGlvbihuLG8pe2E9W2VdLGk9byxyPVwiZnVuY3Rpb25cIj09dHlwZW9mIGk/aS5hcHBseShlLGEpOmksISh2b2lkIDAhPT1yJiYodC5leHBvcnRzPXIpKX0odGhpcyxmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgZT1mdW5jdGlvbih0KXt2YXIgZT10LnJlcGxhY2UoL15kYXRhOmltYWdlXFwvXFx3KztiYXNlNjQsLyxcIlwiKS5sZW5ndGg7cmV0dXJuKGUtODE0KS8xLjM3fSxuPWZ1bmN0aW9uKHQpe3JldHVybiB0LnNwbGl0KFwiO1wiKVswXS5tYXRjaCgvanBlZ3xwbmd8Z2lmLylbMF19LGk9ZnVuY3Rpb24odCl7cmV0dXJuIHQucmVwbGFjZSgvXmRhdGE6aW1hZ2VcXC9cXHcrO2Jhc2U2NCwvLFwiXCIpfSxhPWZ1bmN0aW9uKHQpe3JldHVyblwiZGF0YTpcIit0K1wiO2Jhc2U2NCxcIn07dC5kZWZhdWx0PXtzaXplOmUsbWltZTpuLGRhdGE6aSxwcmVmaXg6YX19KX0sZnVuY3Rpb24odCxlLG4pe3ZhciBpLGEscjshZnVuY3Rpb24obixvKXthPVtlXSxpPW8scj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2kuYXBwbHkoZSxhKTppLCEodm9pZCAwIT09ciYmKHQuZXhwb3J0cz1yKSl9KHRoaXMsZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGU9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpcImltYWdlL2pwZWdcIixuPXdpbmRvdy5hdG9iKHQpLGk9W10sYT0wO2E8bi5sZW5ndGg7YSsrKWlbYV09bi5jaGFyQ29kZUF0KGEpO3JldHVybiBuZXcgd2luZG93LkJsb2IoW25ldyBVaW50OEFycmF5KGkpXSx7dHlwZTplfSl9LG49ZnVuY3Rpb24odCxlLG4pe3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiksYT1pLmdldENvbnRleHQoXCIyZFwiKTtyZXR1cm4gaS53aWR0aD10LGkuaGVpZ2h0PWUsZnVuY3Rpb24ocil7aWYoIW58fG4+OClyZXR1cm4gYS5kcmF3SW1hZ2UociwwLDAsaS53aWR0aCxpLmhlaWdodCksaTtzd2l0Y2gobj40JiYoaS53aWR0aD1lLGkuaGVpZ2h0PXQpLG4pe2Nhc2UgMjphLnRyYW5zbGF0ZSh0LDApLGEuc2NhbGUoLTEsMSk7YnJlYWs7Y2FzZSAzOmEudHJhbnNsYXRlKHQsZSksYS5yb3RhdGUoTWF0aC5QSSk7YnJlYWs7Y2FzZSA0OmEudHJhbnNsYXRlKDAsZSksYS5zY2FsZSgxLC0xKTticmVhaztjYXNlIDU6YS5yb3RhdGUoLjUqTWF0aC5QSSksYS5zY2FsZSgxLC0xKTticmVhaztjYXNlIDY6YS5yb3RhdGUoLjUqTWF0aC5QSSksYS50cmFuc2xhdGUoMCwtZSk7YnJlYWs7Y2FzZSA3OmEucm90YXRlKC41Kk1hdGguUEkpLGEudHJhbnNsYXRlKHQsLWUpLGEuc2NhbGUoLTEsMSk7YnJlYWs7Y2FzZSA4OmEucm90YXRlKC0uNSpNYXRoLlBJKSxhLnRyYW5zbGF0ZSgtdCwwKX1yZXR1cm4gbj40P2EuZHJhd0ltYWdlKHIsMCwwLGkuaGVpZ2h0LGkud2lkdGgpOmEuZHJhd0ltYWdlKHIsMCwwLGkud2lkdGgsaS5oZWlnaHQpLGl9fSxpPWZ1bmN0aW9uKHQpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTouNzUsbj10LnRvRGF0YVVSTChcImltYWdlL2pwZWdcIixlKTtyZXR1cm4gbn0sYT1mdW5jdGlvbih0KXtyZXR1cm57S0I6dC8xZTMsTUI6dC8xZTZ9fTt0LmRlZmF1bHQ9e2Jhc2U2NFRvRmlsZTplLGltYWdlVG9DYW52YXM6bixjYW52YXNUb0Jhc2U2NDppLHNpemU6YX19KX0sZnVuY3Rpb24odCxlLG4pe3ZhciBpLGEscjshZnVuY3Rpb24obixvKXthPVtlXSxpPW8scj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2kuYXBwbHkoZSxhKTppLCEodm9pZCAwIT09ciYmKHQuZXhwb3J0cz1yKSl9KHRoaXMsZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGU9ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGUsbil7dmFyIGk9bmV3IHdpbmRvdy5GaWxlUmVhZGVyO2kuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixmdW5jdGlvbih0KXtlKHQudGFyZ2V0LnJlc3VsdCl9LCExKSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLGZ1bmN0aW9uKHQpe24odCl9LCExKSxpLnJlYWRBc0RhdGFVUkwodCl9KX07dC5kZWZhdWx0PXtsb2FkOmV9fSl9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgaSxhLHI7IWZ1bmN0aW9uKG4sbyl7YT1bZV0saT1vLHI9XCJmdW5jdGlvblwiPT10eXBlb2YgaT9pLmFwcGx5KGUsYSk6aSwhKHZvaWQgMCE9PXImJih0LmV4cG9ydHM9cikpfSh0aGlzLGZ1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBlPWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihlLG4pe3ZhciBpPW5ldyB3aW5kb3cuSW1hZ2U7aS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGZ1bmN0aW9uKCl7ZShpKX0sITEpLGkuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsZnVuY3Rpb24odCl7bih0KX0sITEpLGkuc3JjPXR9KX0sbj1mdW5jdGlvbih0LGUpe3JldHVybiBmdW5jdGlvbihuLGkpe2lmKCF0JiYhZSlyZXR1cm57d2lkdGg6bixoZWlnaHQ6aX07dmFyIGE9bi9pLHI9dC9lLG89dm9pZCAwLHU9dm9pZCAwO3JldHVybiBhPnI/KG89TWF0aC5taW4obix0KSx1PW8vYSk6KHU9TWF0aC5taW4oaSxlKSxvPXUqYSkse3dpZHRoOm8saGVpZ2h0OnV9fX07dC5kZWZhdWx0PXtsb2FkOmUscmVzaXplOm59fSl9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgaSxhLHI7IWZ1bmN0aW9uKG4sbyl7YT1bZV0saT1vLHI9XCJmdW5jdGlvblwiPT10eXBlb2YgaT9pLmFwcGx5KGUsYSk6aSwhKHZvaWQgMCE9PXImJih0LmV4cG9ydHM9cikpfSh0aGlzLGZ1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUodCxlKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPWZ1bmN0aW9uIHQobil7dmFyIGk9bi5xdWFsaXR5LGE9dm9pZCAwPT09aT8uNzU6aSxyPW4uc2l6ZSxvPXZvaWQgMD09PXI/MjpyLHU9bi5tYXhXaWR0aCxzPXZvaWQgMD09PXU/MTkyMDp1LGY9bi5tYXhIZWlnaHQsZD12b2lkIDA9PT1mPzE5MjA6ZixsPW4ucmVzaXplLGM9dm9pZCAwPT09bHx8bDtlKHRoaXMsdCksdGhpcy5zdGFydD13aW5kb3cucGVyZm9ybWFuY2Uubm93KCksdGhpcy5lbmQ9bnVsbCx0aGlzLmFsdD1udWxsLHRoaXMuZXh0PW51bGwsdGhpcy5zdGFydFNpemU9bnVsbCx0aGlzLnN0YXJ0V2lkdGg9bnVsbCx0aGlzLnN0YXJ0SGVpZ2h0PW51bGwsdGhpcy5zaXplPTFlMypvKjFlMyx0aGlzLmVuZFNpemU9bnVsbCx0aGlzLmVuZFdpZHRoPW51bGwsdGhpcy5lbmRIZWlnaHQ9bnVsbCx0aGlzLml0ZXJhdGlvbnM9MCx0aGlzLmJhc2U2NHByZWZpeD1udWxsLHRoaXMucXVhbGl0eT1hLHRoaXMucmVzaXplPWMsdGhpcy5tYXhXaWR0aD1zLHRoaXMubWF4SGVpZ2h0PWQsdGhpcy5vcmllbnRhdGlvbj0xfTt0LmRlZmF1bHQ9bn0pfSxmdW5jdGlvbih0LGUsbil7dmFyIGksYSxyOyFmdW5jdGlvbihuLG8pe2E9W2VdLGk9byxyPVwiZnVuY3Rpb25cIj09dHlwZW9mIGk/aS5hcHBseShlLGEpOmksISh2b2lkIDAhPT1yJiYodC5leHBvcnRzPXIpKX0odGhpcyxmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgZT1mdW5jdGlvbih0KXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oZSxuKXt2YXIgaT1uZXcgd2luZG93LkZpbGVSZWFkZXI7aS5vbmxvYWQ9ZnVuY3Rpb24odCl7dmFyIG49bmV3IERhdGFWaWV3KHQudGFyZ2V0LnJlc3VsdCk7NjU0OTYhPT1uLmdldFVpbnQxNigwLCExKSYmZSgtMik7Zm9yKHZhciBpPW4uYnl0ZUxlbmd0aCxhPTI7YTxpOyl7dmFyIHI9bi5nZXRVaW50MTYoYSwhMSk7aWYoYSs9Miw2NTUwNT09PXIpezExNjU1MTkyMDYhPT1uLmdldFVpbnQzMihhKz0yLCExKSYmZSgtMSk7dmFyIG89MTg3NjE9PT1uLmdldFVpbnQxNihhKz02LCExKTthKz1uLmdldFVpbnQzMihhKzQsbyk7dmFyIHU9bi5nZXRVaW50MTYoYSxvKTthKz0yO2Zvcih2YXIgcz0wO3M8dTtzKyspMjc0PT09bi5nZXRVaW50MTYoYSsxMipzLG8pJiZlKG4uZ2V0VWludDE2KGErMTIqcys4LG8pKX1lbHNle2lmKDY1MjgwIT09KDY1MjgwJnIpKWJyZWFrO2ErPW4uZ2V0VWludDE2KGEsITEpfX1lKC0xKX0saS5yZWFkQXNBcnJheUJ1ZmZlcih0LnNsaWNlKDAsNjU1MzYpKX0pfTt0LmRlZmF1bHQ9e29yaWVudGF0aW9uOmV9fSl9XSl9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=