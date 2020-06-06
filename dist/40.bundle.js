(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CodErrorPopup = function (_React$Component) {
	_inherits(CodErrorPopup, _React$Component);

	function CodErrorPopup(props) {
		_classCallCheck(this, CodErrorPopup);

		var _this = _possibleConstructorReturn(this, (CodErrorPopup.__proto__ || Object.getPrototypeOf(CodErrorPopup)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(CodErrorPopup, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				"div",
				{ className: "search-el-popup-overlay ", onClick: function onClick() {
						return _this2.props.codErrorClicked();
					} },
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
									{ onClick: function onClick() {
											return _this2.props.codErrorClicked();
										} },
									"Okay"
								)
							)
						)
					)
				)
			);
		}
	}]);

	return CodErrorPopup;
}(_react2.default.Component);

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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");


var MONTHS = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
var WEEK_DAYS = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

var PatientDetailsNew = function (_React$Component) {
    _inherits(PatientDetailsNew, _React$Component);

    function PatientDetailsNew(props) {
        _classCallCheck(this, PatientDetailsNew);

        var _this = _possibleConstructorReturn(this, (PatientDetailsNew.__proto__ || Object.getPrototypeOf(PatientDetailsNew)).call(this, props));

        _this.closeErrorPopup = function () {
            _this.setState({ error: '' });
        };

        _this.toggleGoldPlans = function (plan) {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'ToggleOpdGoldPlanClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'toggle-opd-gold-plan-clicked', 'plan': plan.id
            };

            _gtm2.default.sendEvent({ data: data });
            _this.props.selectVipClubPlan('plan', plan); // toggle/select vip plan
            _this.toggleGoldPricePopup();
        };

        _this.toggleGoldPricePopup = function () {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var data = {
                'Category': 'ConsumerApp', 'Action': 'ChangePlanOpdClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'change-plan-opd-clicked'
            };

            _gtm2.default.sendEvent({ data: data });
            _this.setState({ showGoldPriceList: value });
        };

        _this.goToGoldPage = function () {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'GoToOpdGoldPlanClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'go-to-opd-gold-plan-clicked'
            };

            _gtm2.default.sendEvent({ data: data });
            _this.props.history.push('/vip-gold-details?is_gold=true&source=mobile-opd-summary-gold-clicked&lead_source=Docprime&booking_page=opd');
        };

        _this.getDataAfterLogin = function () {
            _this.props.fetchData(_this.props, _this.state.selectedClinic, true);
            if (_this.props.odpGoldPredictedPrice && _this.props.odpGoldPredictedPrice.length) {
                var selectedPackage = _this.props.odpGoldPredictedPrice.filter(function (x) {
                    return x.id == _this.state.selectedVipGoldPackageId;
                });
                if (selectedPackage && selectedPackage.length == 0) {
                    selectedPackage = _this.props.odpGoldPredictedPrice.filter(function (x) {
                        return x.is_selected;
                    });
                }
                if (selectedPackage && selectedPackage.length) {
                    _this.props.selectVipClubPlan('plan', selectedPackage[0]);
                }
            }
        };

        var parsed = queryString.parse(_this.props.location.search);

        var doctor_id = _this.props.selectedDoctor;
        var hospital_id = _this.props.selectedClinic;

        _this.state = {
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
            seoFriendly: _this.props.match.url.includes('-dpp'),
            showIpdLeadForm: true,
            is_payment_coupon_applied: false,
            dateTimeSelectedValue: _this.props.selectedDateFormat ? _this.props.selectedDateFormat : '',
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
            selectedVipGoldPackageId: _this.props.selected_vip_plan && Object.keys(_this.props.selected_vip_plan).length ? _this.props.selected_vip_plan.id : '',
            paymentBtnClicked: false,
            enableDropOfflead: true,
            showNonIpdPopup: parsed.show_popup,
            to_be_force: parsed.is_docAds_lead ? parsed.is_docAds_lead : 1,
            disable_page: true,
            is_lead_enabled: true
        };
        return _this;
    }

    _createClass(PatientDetailsNew, [{
        key: 'toggleWalletUse',
        value: function toggleWalletUse(e) {
            if (this.state.is_payment_coupon_applied) {
                this.setState({ use_wallet: false });
            } else {
                this.setState({ use_wallet: e.target.checked });
            }
        }
    }, {
        key: 'toggle',
        value: function toggle(which) {
            this.setState(_defineProperty({}, which, !this.state[which]));
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (window) {
                window.scrollTo(0, 0);
            }
            var parsed = queryString.parse(this.props.location.search);
            //If token and appointment id is in url then do agent login, and fetch user related data & set state of the page 
            if (parsed.token && parsed.appointment_id) {
                this.props.agentLogin(parsed.token, function () {
                    _this2.props.select_opd_payment_type(1);
                    _this2.props.getUserProfile();
                    _this2.props.fetchTransactions();
                    _this2.props.getCartItems();
                });
            }

            this.getVipGoldPriceList(null);
            //To update Gold Plans on changing props
            if (this.props.selected_vip_plan && this.props.selected_vip_plan.id && this.props.selected_vip_plan.id != this.state.selectedVipGoldPackageId) {
                this.setState({ selectedVipGoldPackageId: this.props.selected_vip_plan.id });
            }

            //Auto Select on Agent Login URL
            if (parsed && parsed.dummy_id) {
                var extraParams = {
                    dummy_id: parsed.dummy_id
                };
                this.props.retrieveMembersData('SINGLE_PURCHASE', extraParams, function (resp) {
                    // to retrieve already pushed member data in case of agent or proposer it self
                    _this2.setOpdBooking(resp.data);
                    _this2.getVipGoldPriceList(resp.data.plus_plan);
                });
            }

            if (this.props.location.search.includes("error_code")) {
                setTimeout(function () {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Could not complete payment, Try again!" });
                }, 500);
                this.props.history.replace(this.props.location.pathname);
            }

            var hospital = {};
            var doctorDetails = this.props.DOCTORS[this.props.selectedDoctor];

            if (doctorDetails) {
                var hospitals = doctorDetails.hospitals;


                if (hospitals && hospitals.length) {
                    hospitals.map(function (hsptl) {
                        if (hsptl.hospital_id == _this2.state.selectedClinic) {
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
                var doctorCoupons = this.props.doctorCoupons[this.props.selectedDoctor];
                if (this.props.selectedSlot.selectedClinic == this.state.selectedClinic && this.props.selectedSlot.selectedDoctor == this.props.selectedDoctor) {

                    var treatment_Price = 0;
                    var selectedProcedures = {};
                    if (this.props.selectedDoctorProcedure[this.props.selectedDoctor] && this.props.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic] && this.props.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic].price) {

                        treatment_Price = this.props.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic].price.deal_price || 0;
                    }
                    var deal_price = this.props.selectedSlot.time.deal_price + treatment_Price;

                    var _getSelectedUserData = this.getSelectedUserData(this.props),
                        total_amount_payable_without_coupon = _getSelectedUserData.total_amount_payable_without_coupon;

                    if (total_amount_payable_without_coupon != null) {
                        deal_price = total_amount_payable_without_coupon;
                    }
                    this.setState({ 'pay_btn_loading': true });
                    this.props.applyOpdCoupons('1', doctorCoupons[0].code, doctorCoupons[0].coupon_id, this.props.selectedDoctor, deal_price, this.state.selectedClinic, this.props.selectedProfile, this.getProcedureIds(this.props), this.state.cart_item, function (err, data) {
                        if (!err) {
                            _this2.setState({ couponCode: doctorCoupons[0].code, couponId: doctorCoupons[0].coupon_id || '', is_cashback: doctorCoupons[0].is_cashback });
                            if (doctorCoupons[0].is_payment_specific) {
                                _this2.setState({ use_wallet: false, is_payment_coupon_applied: true });
                            }
                        } else {
                            _this2.setState({ coupon_loading: true });
                            _this2.getAndApplyBestCoupons(deal_price, false);
                        }
                        _this2.setState({ 'pay_btn_loading': false });
                    });
                } else if (hospital) {
                    var _deal_price = hospital.deal_price;
                    var _treatment_Price = 0;
                    if (this.props.selectedDoctorProcedure[this.props.selectedDoctor] && this.props.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic] && this.props.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic].price) {

                        _treatment_Price = this.props.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic].price.deal_price || 0;
                    }
                    _deal_price += _treatment_Price;
                    this.setState({ 'pay_btn_loading': true });

                    var _getSelectedUserData2 = this.getSelectedUserData(this.props),
                        _total_amount_payable_without_coupon = _getSelectedUserData2.total_amount_payable_without_coupon;

                    if (_total_amount_payable_without_coupon != null) {
                        _deal_price = _total_amount_payable_without_coupon;
                    }
                    this.props.applyOpdCoupons('1', doctorCoupons[0].code, doctorCoupons[0].coupon_id, this.props.selectedDoctor, _deal_price, this.state.selectedClinic, this.props.selectedProfile, this.getProcedureIds(this.props), this.state.cart_item, function (err, data) {
                        if (!err) {
                            _this2.setState({ is_cashback: doctorCoupons[0].is_cashback, couponCode: doctorCoupons[0].code, couponId: doctorCoupons[0].coupon_id || '' });
                            if (doctorCoupons[0].is_payment_specific) {
                                _this2.setState({ use_wallet: false, is_payment_coupon_applied: true });
                            }
                        } else {
                            _this2.setState({ coupon_loading: true });
                            _this2.getAndApplyBestCoupons(_deal_price, false);
                        }
                        _this2.setState({ 'pay_btn_loading': false });
                    });
                }
            } else {
                //auto apply coupons
                var _deal_price2 = 0;
                if (this.props.selectedSlot.time && this.props.selectedSlot.time.deal_price) {
                    _deal_price2 = this.props.selectedSlot.time.deal_price;
                } else if (hospital) {
                    _deal_price2 = hospital.deal_price;
                }

                var _treatment_Price2 = 0;
                if (this.props.selectedDoctorProcedure[this.props.selectedDoctor] && this.props.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic] && this.props.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic].price) {

                    _treatment_Price2 = this.props.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic].price.deal_price || 0;
                }

                _deal_price2 += _treatment_Price2;
                //auto apply coupon if no coupon is apllied
                // if (this.props.selectedDoctor && deal_price && this.props.couponAutoApply) {
                if (this.props.selectedDoctor && _deal_price2) {
                    this.setState({ 'pay_btn_loading': true });
                    this.getAndApplyBestCoupons(_deal_price2, false);
                } else {
                    this.props.resetOpdCoupons();
                    this.setState({ use_wallet: true, is_payment_coupon_applied: false });
                }
                this.setState({ 'pay_btn_loading': false });
            }

            if (this.state.isLensfitSpecific) {
                setTimeout(function () {
                    if (document.getElementById('confirm_booking')) {
                        document.getElementById('confirm_booking').click();
                    }
                }, 3000);
            }

            this.sendEmailNotification();
        }
    }, {
        key: 'getVipGoldPriceList',
        value: function getVipGoldPriceList(agent_selected_plan_id) {
            var parsed = queryString.parse(this.props.location.search);
            var extraParams = {
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
        value: function getAndApplyBestCoupons() {
            var deal_price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            var _this3 = this;

            var isLensfit = arguments[1];
            var lensFitData = arguments[2];

            this.props.getCoupons({
                productId: 1, deal_price: deal_price, doctor_id: this.props.selectedDoctor, hospital_id: this.state.selectedClinic, profile_id: this.props.selectedProfile, procedures_ids: this.getProcedureIds(this.props), cart_item: this.state.cart_item,
                cb: function cb(coupons) {
                    if (coupons) {
                        var validCoupon = void 0;
                        if (isLensfit) {
                            validCoupon = lensFitData;
                        } else {
                            validCoupon = _this3.getValidCoupon(coupons);
                        }
                        if (validCoupon) {
                            _this3.setState({ is_cashback: validCoupon.is_cashback, couponCode: validCoupon.code, couponId: validCoupon.coupon_id || '', pay_btn_loading: true });
                            _this3.props.applyCoupons('1', validCoupon, validCoupon.coupon_id, _this3.props.selectedDoctor, function (success) {
                                _this3.setState({ 'pay_btn_loading': false });
                            });

                            var _getSelectedUserData3 = _this3.getSelectedUserData(_this3.props),
                                total_amount_payable_without_coupon = _getSelectedUserData3.total_amount_payable_without_coupon;

                            if (total_amount_payable_without_coupon != null) {
                                deal_price = total_amount_payable_without_coupon;
                            }
                            _this3.props.applyOpdCoupons('1', validCoupon.code, validCoupon.coupon_id, _this3.props.selectedDoctor, deal_price, _this3.state.selectedClinic, _this3.props.selectedProfile, _this3.getProcedureIds(_this3.props), _this3.state.cart_item, function (err, data) {
                                _this3.setState({ 'pay_btn_loading': false });
                            });
                            if (validCoupon.is_payment_specific) {
                                _this3.setState({ use_wallet: false, is_payment_coupon_applied: true });
                            }
                            if (isLensfit) {
                                _this3.setState({ show_lensfit_popup: false });
                            }
                        } else {
                            if (isLensfit) {
                                _this3.setState({ show_lensfit_popup: false });
                            }
                            _this3.props.resetOpdCoupons();
                            _this3.setState({ use_wallet: true, is_payment_coupon_applied: false, 'pay_btn_loading': false });
                        }
                    } else {
                        if (isLensfit) {
                            _this3.setState({ show_lensfit_popup: false });
                        }
                        _this3.props.resetOpdCoupons();
                        _this3.setState({ use_wallet: true, is_payment_coupon_applied: false, 'pay_btn_loading': false });
                    }
                    _this3.setState({ coupon_loading: false });
                }
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this4 = this;

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
                var hospital = {};
                var doctorDetails = nextProps.DOCTORS[this.props.selectedDoctor];

                if (doctorDetails) {
                    var hospitals = doctorDetails.hospitals;


                    if (hospitals && hospitals.length) {
                        hospitals.map(function (hsptl) {
                            if (hsptl.hospital_id == _this4.state.selectedClinic) {
                                hospital = hsptl;
                            }
                        });
                    }
                }

                if (nextProps.doctorCoupons && nextProps.doctorCoupons[this.props.selectedDoctor] && nextProps.doctorCoupons[this.props.selectedDoctor].length) {
                    var doctorCoupons = nextProps.doctorCoupons[this.props.selectedDoctor];

                    if (Object.values(hospital).length) {
                        var deal_price = hospital.deal_price;

                        var treatment_Price = 0;
                        if (nextProps.selectedDoctorProcedure[this.props.selectedDoctor] && nextProps.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic] && nextProps.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic].price) {

                            treatment_Price = nextProps.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic].price.deal_price || 0;
                        }

                        deal_price += treatment_Price;
                        // let validCoupon = this.getValidCoupon(doctorCoupons)

                        var _getSelectedUserData4 = this.getSelectedUserData(nextProps),
                            total_amount_payable_without_coupon = _getSelectedUserData4.total_amount_payable_without_coupon;

                        if (total_amount_payable_without_coupon != null) {
                            deal_price = total_amount_payable_without_coupon;
                        }
                        this.props.applyOpdCoupons('1', doctorCoupons[0].code, doctorCoupons[0].coupon_id, this.props.selectedDoctor, deal_price, this.state.selectedClinic, nextProps.selectedProfile, this.getProcedureIds(nextProps), this.state.cart_item, function (err, data) {
                            if (!err) {
                                _this4.setState({ is_cashback: doctorCoupons[0].is_cashback, couponCode: doctorCoupons[0].code, couponId: doctorCoupons[0].coupon_id || '', couponApplied: true });
                                if (doctorCoupons[0].is_payment_specific) {
                                    _this4.setState({ use_wallet: false, is_payment_coupon_applied: true });
                                }
                            } else {
                                _this4.setState({ coupon_loading: true });
                                _this4.getAndApplyBestCoupons(deal_price, false);
                            }
                            _this4.setState({ 'pay_btn_loading': false });
                        });
                    }
                } else {
                    var _deal_price3 = 0;

                    if (Object.values(hospital).length) {
                        _deal_price3 = hospital.deal_price;
                    }

                    var _treatment_Price3 = 0;
                    if (nextProps.selectedDoctorProcedure[this.props.selectedDoctor] && nextProps.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic] && nextProps.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic].price) {

                        _treatment_Price3 = nextProps.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic].price.deal_price || 0;
                    }

                    _deal_price3 += _treatment_Price3;

                    if (nextProps.doctorCoupons && nextProps.doctorCoupons[this.props.selectedDoctor] && nextProps.doctorCoupons[this.props.selectedDoctor].length == 0) {
                        this.props.resetOpdCoupons();
                        this.setState({ use_wallet: true, is_payment_coupon_applied: false, 'pay_btn_loading': false });
                    } else {
                        //auto apply coupon if no coupon is apllied
                        // if (this.props.selectedDoctor && deal_price && nextProps.couponAutoApply) {
                        if (Object.values(hospital).length && hospital.vip && Object.keys(hospital.vip).length && hospital.vip.is_vip_member && hospital.vip.cover_under_vip) {
                            _deal_price3 = hospital.vip.vip_amount + hospital.vip.vip_convenience_amount;
                        }
                        if (this.props.selectedDoctor && _deal_price3) {
                            this.props.getCoupons({
                                productId: 1, deal_price: _deal_price3, doctor_id: this.props.selectedDoctor, hospital_id: this.state.selectedClinic, profile_id: nextProps.selectedProfile, procedures_ids: this.getProcedureIds(nextProps), cart_item: this.state.cart_item,
                                cb: function cb(coupons) {
                                    if (coupons) {
                                        var validCoupon = _this4.getValidCoupon(coupons);
                                        if (validCoupon) {
                                            _this4.setState({ is_cashback: validCoupon.is_cashback, couponCode: validCoupon.code, couponId: validCoupon.coupon_id || '', couponApplied: true, 'pay_btn_loading': true });
                                            _this4.props.applyCoupons('1', validCoupon, validCoupon.coupon_id, _this4.props.selectedDoctor, function (success) {
                                                _this4.setState({ 'pay_btn_loading': false });
                                            });

                                            var _getSelectedUserData5 = _this4.getSelectedUserData(nextProps),
                                                _total_amount_payable_without_coupon2 = _getSelectedUserData5.total_amount_payable_without_coupon;

                                            if (_total_amount_payable_without_coupon2 != null) {
                                                _deal_price3 = _total_amount_payable_without_coupon2;
                                            }
                                            _this4.props.applyOpdCoupons('1', validCoupon.code, validCoupon.coupon_id, _this4.props.selectedDoctor, _deal_price3, _this4.state.selectedClinic, nextProps.selectedProfile, _this4.getProcedureIds(nextProps), _this4.state.cart_item, function (err, data) {
                                                _this4.setState({ 'pay_btn_loading': false });
                                            });
                                            if (validCoupon.is_payment_specific) {
                                                _this4.setState({ use_wallet: false, is_payment_coupon_applied: true });
                                            }
                                        } else {
                                            _this4.setState({ couponApplied: true, use_wallet: true, is_payment_coupon_applied: false, 'pay_btn_loading': false });
                                            _this4.props.resetOpdCoupons();
                                        }
                                    } else {
                                        _this4.setState({ couponApplied: true, use_wallet: true, is_payment_coupon_applied: false, 'pay_btn_loading': false });
                                        _this4.props.resetOpdCoupons();
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
    }, {
        key: 'profileDataCompleted',
        value: function profileDataCompleted(data) {
            //function to check if profile data is filled by user or not, in case of non-logged in user
            this.setState({ formData: _extends({}, data) });
            if (data.name == '' || data.gender == '' || data.phoneNumber == '' || data.email == '' || !data.otpVerifySuccess || data.dob == '' || data.dob == null) {
                this.props.patientDetails(data);
                this.setState({ profileDataFilled: false, showTimeError: false });
            } else if (data.otpVerifySuccess) {
                var clear_data = {};
                this.props.patientDetails(clear_data);
                this.setState({ profileDataFilled: true, showTimeError: false, profileError: false });
            }
        }
    }, {
        key: 'getProcedureIds',
        value: function getProcedureIds(props) {
            if (props.selectedDoctorProcedure[this.props.selectedDoctor] && props.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic] && props.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic].categories) {
                var procedure_ids = [];

                Object.values(props.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic].categories).map(function (procedure) {
                    procedure_ids = procedure_ids.concat(procedure.filter(function (x) {
                        return x.is_selected;
                    }).map(function (x) {
                        return x.procedure_id;
                    }));
                });

                if (procedure_ids.length) {
                    return procedure_ids;
                }
            }
            return null;
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
        key: 'proceed',
        value: function proceed(datePicked, patient, addToCart, total_price, total_wallet_balance, is_selected_user_insurance_status, extraParams, e) {
            var _this5 = this;

            var parsed = queryString.parse(this.props.location.search);

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

            var is_insurance_applicable = false;
            var is_selected_user_insured = false;
            var is_vip_applicable = false;
            var is_gold_applicable = false;
            var is_selected_user_vip = true; // to check is plus_plan is applicable or not
            if (this.props.selectedSlot && this.props.selectedSlot.date && this.props.DOCTORS[this.props.selectedDoctor]) {
                var priceData = _extends({}, this.props.selectedSlot.time);
                var hospitals = this.props.DOCTORS[this.props.selectedDoctor].hospitals;
                var hospital = null;

                if (hospitals && hospitals.length) {
                    hospitals.map(function (hsptl) {
                        if (hsptl.hospital_id == _this5.state.selectedClinic) {
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
                Object.entries(this.props.profiles).map(function (_ref) {
                    var _ref2 = _slicedToArray(_ref, 2),
                        key = _ref2[0],
                        value = _ref2[1];

                    if (value.is_vip_member) {
                        is_selected_user_vip = false;
                    }
                });
            }
            is_insurance_applicable = is_insurance_applicable && is_selected_user_insured;

            // React guarantees that setState inside interactive events (such as click) is flushed at browser event boundary
            var show_lensfit = this.props.DOCTORS[this.props.selectedDoctor] && this.props.DOCTORS[this.props.selectedDoctor].lensfit_offer ? this.props.DOCTORS[this.props.selectedDoctor].lensfit_offer.applicable : false;
            var lensfit_coupons = this.props.DOCTORS[this.props.selectedDoctor] && this.props.DOCTORS[this.props.selectedDoctor].lensfit_offer ? this.props.DOCTORS[this.props.selectedDoctor].lensfit_offer.coupon : {};

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

            var start_date = this.props.selectedSlot.date;
            var start_time = this.props.selectedSlot.time.value;
            var utm_tags = this.getUtmTags();
            var postData = {
                doctor: this.props.selectedDoctor,
                hospital: this.state.selectedClinic,
                profile: this.props.selectedProfile,
                start_date: start_date, start_time: start_time,
                payment_type: this.props.payment_type,
                use_wallet: this.props.payment_type == 6 ? false : this.state.use_wallet,
                cart_item: this.state.cart_item,
                utm_tags: utm_tags,
                from_web: true
            };
            var visitor_info = _gtm2.default.getVisitorInfo();
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

            var profileData = _extends({}, patient);
            if (profileData && profileData.whatsapp_optin == null) {
                profileData['whatsapp_optin'] = this.state.whatsapp_optin;
                this.props.editUserProfile(profileData, profileData.id);
            }
            if (this.props.doctorCoupons && this.props.doctorCoupons[this.props.selectedDoctor] && this.props.doctorCoupons[this.props.selectedDoctor].length && this.props.disCountedOpdPrice >= 0 && this.props.payment_type != 6 && !is_insurance_applicable /*&& !is_vip_applicable*/) {
                    postData['coupon_code'] = this.state.couponCode ? [this.state.couponCode] : [];
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

            var procedure_ids = [];
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

                var data = {
                    'Category': 'ConsumerApp', 'Action': 'OpdAddToCartClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'opd-add-to-cart-clicked'
                };

                _gtm2.default.sendEvent({ data: data });
                this.props.addToCart(1, postData).then(function (res) {
                    if (_this5.state.isMatrix) {
                        _this5.props.history.push('/cart?is_matrix=true');
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
            if (parsed && parsed.appointment_id && parsed.cod_to_prepaid == 'true') {
                //For Cod Appointments
                postData['appointment_id'] = parsed.appointment_id;
                postData['cod_to_prepaid'] = true;
                this.setState({ paymentBtnClicked: true });
                this.props.codToPrepaid(postData, function (err, data) {
                    if (!err) {
                        /*if (data.is_agent) {
                            this.props.removeCoupons(this.props.selectedDoctor, this.state.couponId)
                             this.props.history.replace(this.props.location.pathname + `?order_id=${data.data.orderId}`)
                           // this.setState({ order_id: data.data.orderId })
                            return
                        }*/
                        if (data.payment_required) {
                            // send to payment selection page
                            var _analyticData = {
                                'Category': 'ConsumerApp', 'Action': 'DoctorOrderCreated', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'doctor_order_created'
                            };
                            _gtm2.default.sendEvent({ data: _analyticData });
                            // this.props.history.push(`/payment/${data.data.orderId}?refs=opd`)
                            _this5.processPayment(data);
                        } else {
                            _this5.props.removeCoupons(_this5.props.selectedDoctor, _this5.state.couponId);
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
                return;
            }

            var analyticData = {
                'Category': 'ConsumerApp', 'Action': 'OpdProceedButtonClicked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'opd-proceed-button-clicked'
            };
            _gtm2.default.sendEvent({ data: analyticData });

            analyticData = {
                'Category': 'ConsumerApp', 'Action': 'OpdConfirmBookingClicked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'opd-confirm-booking-clicked'
            };
            _gtm2.default.sendEvent({ data: analyticData });
            this.setState({ paymentBtnClicked: true });
            this.props.createOPDAppointment(postData, function (err, data) {
                if (!err) {
                    /*if (data.is_agent) {
                        this.props.removeCoupons(this.props.selectedDoctor, this.state.couponId)
                        // this.props.history.replace(this.props.location.pathname + `?order_id=${data.data.orderId}`)
                        this.setState({ order_id: data.data.orderId })
                        return
                    }*/
                    if (data.payment_required) {
                        // send to payment selection page
                        var _analyticData2 = {
                            'Category': 'ConsumerApp', 'Action': 'DoctorOrderCreated', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'doctor_order_created'
                        };
                        _gtm2.default.sendEvent({ data: _analyticData2 });
                        // this.props.history.push(`/payment/${data.data.orderId}?refs=opd`)
                        _this5.processPayment(data);
                    } else {
                        _this5.props.removeCoupons(_this5.props.selectedDoctor, _this5.state.couponId);
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
                                _this6.props.removeCoupons(_this6.props.selectedDoctor, _this6.state.couponId);
                            }, 3000);
                            form.submit();
                        }
                    }, 500);
                });
            }
        }
    }, {
        key: 'navigateTo',
        value: function navigateTo(where, e) {
            switch (where) {
                case "time":
                    {
                        if (this.state.seoFriendly) {
                            var url = window.location.pathname + '?goback=true&type=opd&doctor_id=' + this.props.selectedDoctor + '&hospital_id=' + this.state.selectedClinic + '&action_page=timings';
                            this.props.history.push(url);
                        } else {
                            this.props.history.push('/opd/doctor/' + this.props.selectedDoctor + '/' + this.state.selectedClinic + '/book?goback=true&type=opd');
                        }
                        return;
                    }

                case "patient":
                    {
                        this.props.history.push('/user/family?pick=true');
                        return;
                    }
            }
        }
    }, {
        key: 'sendSingleFlowAgentBookingURL',
        value: function sendSingleFlowAgentBookingURL() {
            var _this7 = this;

            var postData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            //for agent login send single flow booking url
            var booking_data = this.getBookingData();
            booking_data = _extends({}, postData, booking_data, { is_single_flow_opd: true, dummy_data_type: 'SINGLE_PURCHASE' });
            this.props.pushMembersData(booking_data, function (resp) {
                if (resp.dummy_id) {

                    var extraParams = {
                        landing_url: 'opd/doctor/' + _this7.props.selectedDoctor + '/' + _this7.props.selectedClinic + '/bookdetails?dummy_id=' + resp.dummy_id
                    };
                    if (postData.message_medium) {
                        extraParams['message_medium'] = 'WHATSAPP';
                    }
                    _this7.props.sendAgentBookingURL(_this7.state.order_id, 'sms', 'SINGLE_PURCHASE', null, extraParams, function (err, res) {
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
        key: 'buildOpdTimeSlot',
        value: function buildOpdTimeSlot() {
            //after agent login , build the state of the page e.g store
            var selectedDate = _extends({}, this.props.selectedSlot);
            if (selectedDate.time) {
                return _extends({}, selectedDate.time);
            }

            var time = {
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
    }, {
        key: 'setOpdBooking',
        value: function setOpdBooking(data) {
            var timeSlot = data.timeSlot,
                coupon_data = data.coupon_data,
                doctor_id = data.doctor_id,
                clinic_id = data.clinic_id,
                payment_type = data.payment_type,
                profile_id = data.profile_id;


            var extraTimeParams = null;
            if (timeSlot.date) {
                extraTimeParams = this.getFormattedDate(timeSlot.date);
            }
            this.props.selectOpdTimeSLot(timeSlot, false, null, extraTimeParams);

            if (coupon_data.coupon_code) {
                var coupon_id = '';
                var is_cashback = false;

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
    }, {
        key: 'getBookingData',
        value: function getBookingData() {
            var time_slot = this.buildOpdTimeSlot();
            var timeSlot = {
                date: new Date(this.props.selectedSlot.date),
                slot: '',
                time: time_slot,
                selectedDoctor: this.props.selectedDoctor,
                selectedClinic: this.props.selectedClinic
            };
            var coupon_data = {};
            if (this.props.doctorCoupons && this.props.selectedDoctor && this.props.doctorCoupons[this.props.selectedDoctor] && this.props.doctorCoupons[this.props.selectedDoctor].length) {
                coupon_data = this.props.doctorCoupons[this.props.selectedDoctor][0];
            }

            return { timeSlot: timeSlot, coupon_data: coupon_data, doctor_id: this.props.selectedDoctor, clinic_id: this.props.selectedClinic, payment_type: this.props.payment_type, profile_id: this.props.selectedProfile };
        }
    }, {
        key: 'applyCoupons',
        value: function applyCoupons() {
            var procedure_ids = "";
            var proc_ids = this.getProcedureIds(this.props);
            if (proc_ids && proc_ids.length) {
                procedure_ids = proc_ids.join(',');
            }

            var analyticData = {
                'Category': 'ConsumerApp', 'Action': 'OpdCouponsClicked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'opd-coupons-clicked'
            };

            _gtm2.default.sendEvent({ data: analyticData });
            this.setState({ pay_btn_loading: true });
            this.props.history.push('/coupon/opd/' + this.props.selectedDoctor + '/' + this.state.selectedClinic + '?procedures_ids=' + procedure_ids + '&deal_price=' + this.getDealPrice() + '&cart_item=' + (this.state.cart_item || ""));
        }
    }, {
        key: 'getDealPrice',
        value: function getDealPrice() {
            var _this8 = this;

            var hospital = {};
            var doctorDetails = this.props.DOCTORS[this.props.selectedDoctor];

            if (doctorDetails) {
                var hospitals = doctorDetails.hospitals;


                if (hospitals && hospitals.length) {
                    hospitals.map(function (hsptl) {
                        if (hsptl.hospital_id == _this8.state.selectedClinic) {
                            hospital = hsptl;
                        }
                    });
                }
            }

            var deal_price = 0;

            if (Object.values(hospital).length) {
                deal_price = hospital.deal_price;
            }

            var treatment_Price = 0;
            if (this.props.selectedDoctorProcedure[this.props.selectedDoctor] && this.props.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic] && this.props.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic].price) {

                treatment_Price = this.props.selectedDoctorProcedure[this.props.selectedDoctor][this.state.selectedClinic].price.deal_price || 0;
            }

            deal_price += treatment_Price;
            if (Object.values(hospital).length && hospital.vip && Object.keys(hospital.vip).length && hospital.vip.is_vip_member && hospital.vip.cover_under_vip) {
                deal_price = hospital.vip.vip_amount + hospital.vip.vip_convenience_amount;
            }
            return deal_price;
        }
    }, {
        key: 'getBookingButtonText',
        value: function getBookingButtonText(total_wallet_balance, price_to_pay, mrp, enabled_for_cod_payment, is_cod_deal_price, is_vip_applicable, vip_amount, is_gold_member, vip_convenience_amount) {

            var price_from_wallet = 0;
            if (this.props.payment_type != 1 && this.props.payment_type != 6) {
                if (enabled_for_cod_payment) {
                    if (is_cod_deal_price) {
                        return 'Confirm Booking ' + (is_cod_deal_price > 0 ? '(\u20B9 ' + is_cod_deal_price + ')' : '');
                    } else {
                        return 'Confirm Booking ' + (mrp > 0 ? '(\u20B9 ' + mrp + ')' : '');
                    }
                } else {
                    return 'Confirm Booking ' + (mrp > 0 ? '(\u20B9 ' + mrp + ')' : '');
                }
            }

            var price_from_pg = 0;

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
        key: 'getBookingAmount',
        value: function getBookingAmount(total_wallet_balance, price_to_pay, mrp) {
            var price_from_wallet = 0;
            var price_from_pg = 0;

            if (this.state.use_wallet && total_wallet_balance) {
                price_from_wallet = Math.min(total_wallet_balance, price_to_pay);
            }

            price_from_pg = price_to_pay; //- price_from_wallet

            if (price_from_pg) {
                return '\u20B9' + price_from_pg;
            }

            return '\u20B90';
        }
    }, {
        key: 'selectTimeSlot',
        value: function selectTimeSlot(slot) {
            var parsed = queryString.parse(this.props.location.search);
            slot.selectedDoctor = this.props.selectedDoctor;
            slot.selectedClinic = this.state.selectedClinic;
            this.props.selectOpdTimeSLot(slot, false);
        }
    }, {
        key: 'toggleWhatsap',
        value: function toggleWhatsap(status, e) {
            this.setState({ whatsapp_optin: status });
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
        key: 'bannerConfirmationPopup',
        value: function bannerConfirmationPopup(choice) {
            if (!choice) {
                var data = {
                    'Category': 'ConsumerApp', 'Action': 'BookingPageVipBannerCrossClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'bookingpage-vip-banner-cross-click'
                };
                _gtm2.default.sendEvent({ data: data });
                this.setState({ show_banner: choice, banner_decline: true });
            } else {
                var _data = {
                    'Category': 'ConsumerApp', 'Action': 'BookingPageVipBannerNotInterstedClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'bookingpage-vip-banner-not-intersted-click'
                };
                _gtm2.default.sendEvent({ data: _data });
                this.setState({ show_banner: '' });
                if (document.getElementById('confirm_booking')) {
                    document.getElementById('confirm_booking').click();
                }
            }
        }
    }, {
        key: 'submitLeadFormGeneration',
        value: function submitLeadFormGeneration(ipdFormParams) {
            if (close) {
                var gtmData = {
                    'Category': 'ConsumerApp', 'Action': 'DoctorBookingIpdFormClosed', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-booking-ipd-form-closed'
                };
                _gtm2.default.sendEvent({ data: gtmData });
            }
            var ipd_data = {
                showChat: true,
                ipdFormParams: ipdFormParams
            };

            this.setState({ showIpdLeadForm: false, showSecondPopup: true }, function () {
                /*
                            this.props.checkIpdChatAgentStatus((response) => {
                                if (response && response.users && response.users.length) {
                
                                    this.props.ipdChatView({ showIpdChat: true, ipdForm: ipdFormParams, showMinimize: true })
                                }
                            })*/
            });
        }
    }, {
        key: 'goToInsurance',
        value: function goToInsurance(selectedDoctor, selectedClinic) {
            var Gtmdata = {
                'Category': 'ConsumerApp', 'Action': 'AvailNowLabClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'avail-now-lab-clicked'
            };
            _gtm2.default.sendEvent({ data: Gtmdata });
            var data = {};
            data.thumbnail = selectedDoctor.thumbnail;
            data.name = selectedDoctor.display_name;
            data.url = selectedDoctor.url;
            data.id = selectedDoctor.id;
            data.selectedClinic = selectedClinic;
            data.type = 'doctor';
            this.props.saveAvailNowInsurance(data);
            this.props.history.push('/insurance/insurance-plans?source=doctor-summary-view&show_button=true');
        }
    }, {
        key: 'selectClinic',
        value: function selectClinic(clinic_id) {
            var _this9 = this;

            var href = new URL(window.location.href);
            href.searchParams.set('hospital_id', clinic_id);
            var newUrl = href.toString();
            window.history.replaceState(window.history.state, document.title, newUrl);

            this.setState({ selectedClinic: clinic_id }, function () {
                _this9.props.fetchData(_this9.props, clinic_id, false);
            });
        }
    }, {
        key: 'selectDate',
        value: function selectDate(e) {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'OpdDateClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'opd-date-clicked'
            };

            _gtm2.default.sendEvent({ data: data });
            if (e.target.value) {
                var slot = { time: {} };
                var date = e.target.value;
                this.setState({ dateTimeSelectedValue: date });
                this.props.selectOpdTimeSLot(slot, false, null, date);
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
        key: 'setDataOnClinicChange',
        value: function setDataOnClinicChange() {
            var slot = { time: {} };
            this.props.selectOpdTimeSLot(slot, false);
            this.setState({ dateTimeSelectedValue: '' });
        }
    }, {
        key: 'saveLeadIdForUpdation',
        value: function saveLeadIdForUpdation(response) {
            if (response.id) {
                this.setState({ firstLeadId: response.id, showSecondPopup: true });
            }
        }
    }, {
        key: 'secondIpdFormSubmitted',
        value: function secondIpdFormSubmitted(formData) {
            var _this10 = this;

            this.setState({ showSecondPopup: false }, function () {
                if (formData) {
                    try {
                        var popup1 = formData;

                        if (popup1 && popup1.requested_date_time) {
                            var requested_date = new Date(popup1.requested_date_time);
                            var date = _this10.getFormattedDate(requested_date);
                            if (date) {
                                _this10.setState({ dateTimeSelectedValue: date });
                                /*let hours = formData.title=='AM'?requested_date.getHours():requested_date.getHours()+12*/
                                var hours = parseInt(requested_date.getHours());

                                var title = formData.title;
                                var foundTimeSlot = null;
                                if (title == 'PM' && hours != 12) {
                                    hours = hours + 12;
                                }
                                if (_this10.props.timeSlots && _this10.props.timeSlots[date] && _this10.props.timeSlots[date].length) {

                                    var timeSlotData = _this10.props.timeSlots[date].filter(function (x) {
                                        return x.title == title;
                                    });
                                    if (timeSlotData && timeSlotData.length && timeSlotData[0].timing && timeSlotData[0].timing.length) {
                                        timeSlotData[0].timing.map(function (x) {
                                            if (x.value == hours) {
                                                foundTimeSlot = x;
                                            }
                                        });
                                    }
                                }
                                if (foundTimeSlot && Object.keys(foundTimeSlot).length) {} else {
                                    _this10.setState({ showTimeError: true, timeErrorText: 'Your requested time slot is not available. Please choose a different one.' });
                                }
                                _this10.selectTime(foundTimeSlot, date);
                            }
                        }
                    } catch (e) {
                        console.log('Error is ' + e);
                    }
                }
            });
        }
    }, {
        key: 'selectTime',
        value: function selectTime(time, date) {
            var data = null;
            if (time) {

                var timeSpan = Object.assign({}, time);
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
            var extraTimeParams = null;
            if (date) {
                extraTimeParams = this.getFormattedDate(date);
            }
            this.props.selectOpdTimeSLot(data, false, null, extraTimeParams);
        }
    }, {
        key: 'applyLensFitCoupons',
        value: function applyLensFitCoupons(deal_price, coupon) {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'LensFitOPDApplyClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lensfit-OPD-apply-clicked'
            };
            _gtm2.default.sendEvent({ data: data });
            this.getAndApplyBestCoupons(deal_price, true, coupon);
        }
    }, {
        key: 'closeLensFitPopup',
        value: function closeLensFitPopup() {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'LensFitOpdDontWantClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lensfit-opd-dont-want-clicked'
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
        key: 'codErrorClicked',
        value: function codErrorClicked() {
            this.props.history.push('/user/appointments');
        }
    }, {
        key: 'getSelectedUserData',
        value: function getSelectedUserData(props) {
            var _this11 = this;

            var doctorDetails = props.DOCTORS[props.selectedDoctor];
            var total_amount_payable_without_coupon = null;
            var is_selected_user_gold = false;
            if (doctorDetails) {
                var hospitals = doctorDetails.hospitals;

                var hospital = {};
                var patient = null;

                if (props.profiles[props.selectedProfile] && !props.profiles[props.selectedProfile].isDummyUser) {
                    patient = props.profiles[props.selectedProfile];
                    is_selected_user_gold = props.profiles[props.selectedProfile].is_vip_gold_member;
                }
                if (hospitals && hospitals.length) {
                    hospitals.map(function (hsptl) {
                        if (hsptl.hospital_id == _this11.state.selectedClinic) {
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
            return { total_amount_payable_without_coupon: total_amount_payable_without_coupon };
        }
    }, {
        key: 'sendEmailNotification',
        value: function sendEmailNotification() {
            var _this12 = this;

            var doctorDetails = this.props.DOCTORS[this.props.selectedDoctor];
            var selected_hospital = {};
            var patient = void 0;

            if (doctorDetails) {
                var hospitals = doctorDetails.hospitals;

                if (hospitals && hospitals.length) {
                    hospitals.map(function (hsptl) {
                        if (hsptl.hospital_id == _this12.state.selectedClinic) {
                            selected_hospital = hsptl;
                        }
                    });
                }
            }

            if (Object.keys(selected_hospital).length > 0 && selected_hospital.is_ipd_hospital && this.props.profiles[this.props.selectedProfile] && !this.props.profiles[this.props.selectedProfile].isDummyUser && this.props.selectedDateFormat) {
                var _props$selectedSlot = this.props.selectedSlot,
                    date = _props$selectedSlot.date,
                    time = _props$selectedSlot.time,
                    selectedDoctor = _props$selectedSlot.selectedDoctor,
                    selectedClinic = _props$selectedSlot.selectedClinic;


                if (date) {
                    date = new Date(date).toDateString();
                }
                patient = this.props.profiles[this.props.selectedProfile];
                var user_data = { user: patient.user, doctor: selectedDoctor, hospital: selectedClinic, phone_number: patient.phone_number, preferred_date: this.props.selectedDateFormat, time_slot: time.text, gender: patient.gender, dob: patient.dob, user_profile: patient.id };
                this.props.SendIpdBookingEmail(user_data);
            }
        }
    }, {
        key: 'nonIpdLeads',
        value: function nonIpdLeads(user_phone_number, user_name) {
            var _this13 = this;

            var parsed = queryString.parse(this.props.location.search);
            var data = {};
            var doctorDetails = this.props.DOCTORS[this.props.selectedDoctor];
            var selected_hospital = {};
            var patient = void 0;
            var specialization = void 0;
            var display_total_mrp = 0;
            var display_docprime_discount = 0;
            if (doctorDetails) {
                var hospitals = doctorDetails.hospitals,
                    general_specialization = doctorDetails.general_specialization;

                specialization = general_specialization;
                if (hospitals && hospitals.length) {
                    hospitals.map(function (hsptl) {
                        if (hsptl.hospital_id == _this13.state.selectedClinic) {
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
                    data.exitpoint_url = 'http://docprime.com' + this.props.location.pathname + '?doctor_id=' + this.state.selectedDoctor + '&hospital_id=' + this.state.selectedClinic;
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
                        var _props$selectedSlot2 = this.props.selectedSlot,
                            date = _props$selectedSlot2.date,
                            time = _props$selectedSlot2.time,
                            selectedDoctor = _props$selectedSlot2.selectedDoctor;

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

                    var visitor_info = _gtm2.default.getVisitorInfo();
                    if (visitor_info && visitor_info.visit_id) {
                        data.visit_id = visitor_info.visit_id;
                        data.visitor_id = visitor_info.visitor_id;
                    }

                    if (this.props.common_utm_tags && this.props.common_utm_tags.length) {
                        data.utm_tags = this.props.common_utm_tags.filter(function (x) {
                            return x.type == "common_xtra_tags";
                        })[0].utm_tags;
                    }
                    this.setState({ enableDropOfflead: false });
                    if (this.state.is_lead_enabled) {
                        this.setState({ is_lead_enabled: false });
                        this.props.NonIpdBookingLead(data);
                        setTimeout(function () {
                            _this13.setState({ is_lead_enabled: true });
                        }, 5000);
                    }
                }
        }
    }, {
        key: 'nonIpdLeadsDocAds',
        value: function nonIpdLeadsDocAds(phone_number) {
            var _this14 = this;

            var parsed = queryString.parse(this.props.location.search);
            var doctor_id = this.props.selectedDoctor;
            if (this.props.initialServerData && this.props.initialServerData.doctor_id) {
                doctor_id = this.props.initialServerData.doctor_id;
            }
            var criteriaStr = this.props.DOCTORS[doctor_id].display_name;
            var hospital_id = void 0;
            var selected_hospital = this.props.DOCTORS[doctor_id].hospitals.filter(function (x) {
                return x.hospital_id == _this14.state.selectedClinic;
            });
            var display_total_mrp = 0;
            var display_docprime_discount = 0;
            if (selected_hospital.length) {
                hospital_id = selected_hospital[0].hospital_id;
                display_total_mrp = parseInt(selected_hospital[0].mrp);
                display_docprime_discount = display_total_mrp - parseInt(selected_hospital[0].deal_price);
                if (!this.props.is_any_user_buy_gold && this.props.payment_type == 6 && this.props.selected_vip_plan && this.props.selected_vip_plan.opd) {
                    display_docprime_discount = display_total_mrp - (this.props.selected_vip_plan.opd.gold_price + this.props.selected_vip_plan.opd.convenience_charge);
                }
            }
            var data = { phone_number: phone_number, lead_source: 'docads', source: parsed, lead_type: 'DOCADS', exitpoint_url: 'http://docprime.com' + this.props.location.pathname + '?doctor_id=' + doctor_id + '&hospital_id=' + hospital_id, doctor_id: doctor_id, hospital_id: hospital_id, doctor_name: criteriaStr, hospital_name: null, amount_discount: display_docprime_discount };
            if (this.props.common_utm_tags && this.props.common_utm_tags.length) {
                data.utm_tags = this.props.common_utm_tags.filter(function (x) {
                    return x.type == "common_xtra_tags";
                })[0].utm_tags;
            }
            var visitor_info = _gtm2.default.getVisitorInfo();
            if (visitor_info && visitor_info.visit_id) {
                data.visit_id = visitor_info.visit_id;
                data.visitor_id = visitor_info.visitor_id;
            }
            var gtm_data = { 'Category': 'ConsumerApp', 'Action': 'DocAdsBookingSubmitClick', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'doc-ads-booking-Submit-click' };
            _gtm2.default.sendEvent({ data: gtm_data });
            this.props.saveLeadPhnNumber(phone_number);
            if (this.state.is_lead_enabled && !_storage2.default.isAgent) {
                this.setState({ is_lead_enabled: false });
                this.props.NonIpdBookingLead(data);
                setTimeout(function () {
                    _this14.setState({ is_lead_enabled: true });
                }, 5000);
            }
            this.setState({ to_be_force: 0 }, function () {
                _this14.appendParamToUrl();
            });
        }
    }, {
        key: 'closeIpdLeadPopup',
        value: function closeIpdLeadPopup(from) {
            var _this15 = this;

            if (from) {
                var data = {
                    'Category': 'ConsumerApp', 'Action': 'DocAdsBookingCrossClick', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'doc-ads-booking-cross-click'
                };
                _gtm2.default.sendEvent({ data: data });
                this.setState({ to_be_force: 0 }, function () {
                    _this15.appendParamToUrl();
                });
            }
        }
    }, {
        key: 'appendParamToUrl',
        value: function appendParamToUrl() {
            if (window) {
                var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search + '&is_docAds_lead=' + this.state.to_be_force;
                window.history.pushState({ path: newurl }, '', newurl);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this16 = this;

            var parsed = queryString.parse(this.props.location.search);
            var doctorDetails = this.props.DOCTORS[this.props.selectedDoctor];
            var doctorCoupons = this.props.doctorCoupons[this.props.selectedDoctor] || [];
            var hospital = {};
            var patient = null;
            var priceData = {};
            var is_insurance_applicable = false;
            var is_selected_user_insured = false;
            var enabled_for_cod_payment = false;
            var enabled_for_prepaid_payment = false;
            var is_default_user_insured = false;
            var is_insurance_buy_able = false;
            var insurance_error_msg = '';
            var show_insurance_error = false;
            var payment_mode_count = 0;
            var is_vip_applicable = false;
            var is_selected_user_insurance_status = void 0;
            var is_selected_user_under_vip = false;
            var is_default_user_under_vip = false;
            var is_selected_user_gold = false;
            var cover_under_vip = false;
            var vip_data = {};
            var hide_prepaid = false;
            var all_cities = this.props.DOCTORS[this.props.selectedDoctor] && this.props.DOCTORS[this.props.selectedDoctor].all_cities ? this.props.DOCTORS[this.props.selectedDoctor].all_cities : [];
            if (doctorDetails) {
                var name = doctorDetails.name,
                    qualifications = doctorDetails.qualifications,
                    hospitals = doctorDetails.hospitals,
                    enabled_for_cod = doctorDetails.enabled_for_cod;


                if (hospitals && hospitals.length) {
                    hospitals.map(function (hsptl) {
                        if (hsptl.hospital_id == _this16.state.selectedClinic) {
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
            var treatment_Price = 0,
                treatment_mrp = 0;
            var selectedProcedures = {};
            if (false) {}

            var total_price = parseInt(priceData.mrp); //+ treatment_Price
            var finalPrice = total_price ? parseInt(total_price) : 0;
            var display_radio_prepaid_price = parseInt(priceData.deal_price);

            if (!this.state.is_cashback && this.props.payment_type != 6) {
                display_radio_prepaid_price = display_radio_prepaid_price - (this.props.disCountedOpdPrice || 0);
                finalPrice = total_price ? parseInt(total_price) - (this.props.disCountedOpdPrice ? this.props.disCountedOpdPrice : 0) : 0;
            }

            var total_wallet_balance = 0;
            if (this.props.userWalletBalance >= 0 && this.props.userCashbackBalance >= 0) {
                total_wallet_balance = this.props.userWalletBalance + this.props.userCashbackBalance;
            }

            var percent_discount = Math.max(0, finalPrice / (parseInt(priceData.mrp) + treatment_mrp) * 100);
            percent_discount = parseInt(100 - percent_discount);
            var docDiscount = parseInt(priceData.mrp) + treatment_mrp - parseInt(priceData.is_cod_deal_price);
            var cod_percentage_discount = parseInt(docDiscount) / parseInt(priceData.mrp) * 100;
            is_insurance_applicable = is_insurance_applicable && is_selected_user_insured;

            //Flag to show gold Single Flow Plans
            var showGoldTogglePaymentMode = !this.props.is_any_user_buy_gold && this.props.selected_vip_plan && this.props.selected_vip_plan.opd && this.props.odpGoldPredictedPrice && this.props.odpGoldPredictedPrice.length && !is_insurance_applicable && this.props.selected_vip_plan.opd.gold_price + this.props.selected_vip_plan.opd.convenience_charge < display_radio_prepaid_price;

            //If Only COD applicable then don't show single flow gold
            if (enabled_for_cod_payment && !enabled_for_prepaid_payment) {
                showGoldTogglePaymentMode = false;
            }

            //Hide Prepaid 
            enabled_for_prepaid_payment = hide_prepaid && enabled_for_prepaid_payment;
            if (showGoldTogglePaymentMode) payment_mode_count++;

            var showCodPaymentMode = /*!is_insurance_applicable && !is_vip_applicable &&*/enabled_for_cod_payment && !(parsed.appointment_id && parsed.cod_to_prepaid == 'true'); /*&& !(vip_data.hosp_is_gold && is_selected_user_gold)*/

            var resetPaymentType = false;
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
            var clinic_mrp = priceData.mrp;
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

            var is_add_to_card = _storage2.default.isAgent() || !is_default_user_insured;

            //Select Next Upcoming Date 

            var _props$selectedSlot3 = this.props.selectedSlot,
                date = _props$selectedSlot3.date,
                time = _props$selectedSlot3.time;


            if (date) {
                date = new Date(date).toDateString();
            }

            var upcoming_date = this.props.upcoming_slots && Object.keys(this.props.upcoming_slots).length ? Object.keys(this.props.upcoming_slots)[0] : '';
            var dateAfter24Days = new Date().setDate(new Date().getDate() + 23);
            var showPopup = parsed.showPopup && parsed.showPopup == "true" && this.state.showIpdLeadForm && (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window.ON_LANDING_PAGE && !this.props.is_ipd_form_submitted;
            var is_time_selected = this.props.upcoming_slots && Object.keys(this.props.upcoming_slots).length || this.props.selectedSlot && this.props.selectedSlot.date || this.props.selectedDateFormat;

            var vip_discount_price = 0; //finalPrice - (vip_gold_price + vip_convenience_amount)
            var total_amount_payable = finalPrice;
            // is_selected_user_gold = vip_data.cover_under_vip && is_selected_user_gold
            cover_under_vip = vip_data.cover_under_vip;

            var is_cover_under_vip_gold = false;
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
            var display_total_mrp = parseInt(priceData.mrp) + treatment_mrp;
            var display_docprime_discount = display_total_mrp - (parseInt(priceData.deal_price) + treatment_Price);
            if (!this.props.is_any_user_buy_gold && this.props.payment_type == 6 && this.props.selected_vip_plan && this.props.selected_vip_plan.opd) {
                display_total_mrp = this.props.selected_vip_plan.opd.mrp || 0;
                display_docprime_discount = display_total_mrp - (this.props.selected_vip_plan.opd.gold_price + this.props.selected_vip_plan.opd.convenience_charge);
                finalPrice = (this.props.selected_vip_plan.opd.gold_price || 0) + this.props.selected_vip_plan.opd.convenience_charge + this.props.selected_vip_plan.deal_price; // - (this.props.disCountedOpdPrice||0)
                total_amount_payable = this.props.selected_vip_plan.opd.gold_price + this.props.selected_vip_plan.opd.convenience_charge + this.props.selected_vip_plan.deal_price; // - (this.props.disCountedOpdPrice||0)
            }

            var extraParams = {
                is_gold_member: vip_data && vip_data.is_gold && is_selected_user_gold,
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
                this.state.showConfirmationPopup == 'open' && is_selected_user_insurance_status != 4 ? _react2.default.createElement(_BookingConfirmationPopup2.default, _extends({}, this.props, { priceConfirmationPopup: this.priceConfirmationPopup.bind(this), is_vip_applicable: is_vip_applicable, is_insurance_applicable: is_insurance_applicable, show_banner: this.state.show_banner, bannerConfirmationPopup: this.bannerConfirmationPopup.bind(this) })) : '',
                this.state.show_lensfit_popup ? _react2.default.createElement(_lensfitPopup2.default, _extends({}, this.props, { lensfit_coupons: this.state.lensfit_coupons, applyLensFitCoupons: this.applyLensFitCoupons.bind(this), closeLensFitPopup: this.closeLensFitPopup.bind(this), deal_price: priceData.deal_price, isOPD: true })) : '',

                //Show Vip Gold Single Flow Price List
                this.state.showGoldPriceList && _react2.default.createElement(_VipGoldPackage2.default, { historyObj: this.props.history, vipGoldPlans: this.props.odpGoldPredictedPrice, toggleGoldPricePopup: this.toggleGoldPricePopup, toggleGoldPlans: function toggleGoldPlans(val) {
                        return _this16.toggleGoldPlans(val);
                    }, selected_vip_plan: this.props.selected_vip_plan, goToGoldPage: this.goToGoldPage }),
                this.state.paymentBtnClicked ? _react2.default.createElement(
                    'div',
                    { className: 'bkng-time-overlay' },
                    _react2.default.createElement(_Loader2.default, null)
                ) : '',
                this.props.codError ? _react2.default.createElement(_CodErrorPopup2.default, { codErrorClicked: function codErrorClicked() {
                        return _this16.codErrorClicked();
                    }, codMsg: this.props.codError }) : _react2.default.createElement(
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
                                                    { className: '' + (disable_all_bookings || this.state.disable_page && !_storage2.default.isAgent() ? 'disable-opacity' : '') },
                                                    parsed.appointment_id && parsed.cod_to_prepaid == 'true' ? _react2.default.createElement(
                                                        'div',
                                                        { className: 'widget mrb-15 ' + (this.props.profileError ? 'rnd-error-nm' : '') },
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
                                                                        date ? WEEK_DAYS[new Date(date).getDay()] + ', ' + new Date(date).getDate() + ' ' + MONTHS[new Date(date).getMonth()] : '',
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
                                                        { className: 'widget mrb-15 ' + (this.state.showTimeError ? 'rnd-error-nm' : '') },
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
                                                                    { href: '', onClick: function onClick(e) {
                                                                            e.preventDefault();
                                                                            e.stopPropagation();
                                                                            _this16.navigateTo('time');
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
                                                                                { className: 'caln-input-tp', onClick: function onClick() {
                                                                                        return _this16.navigateTo('time');
                                                                                    } },
                                                                                _react2.default.createElement('img', { className: 'inp-nw-time', src: "/assets" + '/img/nw-watch.svg' }),
                                                                                _react2.default.createElement('input', { type: 'text', name: 'bday', onClick: function onClick() {}, placeholder: 'Select', value: time && time.text ? time.text + ' ' + (time.value >= 12 ? 'PM' : 'AM') : '' }),
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
                                                        { className: 'widget cpn-blur mrb-15 cursor-pointer', onClick: this.applyCoupons.bind(this) },
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
                                                                    _react2.default.createElement('img', { onClick: function onClick(e) {
                                                                            e.stopPropagation();
                                                                            var analyticData = {
                                                                                'Category': 'ConsumerApp', 'Action': 'OpdCouponsRemoved', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'opd-coupons-removed',
                                                                                'couponId': doctorCoupons[0].coupon_id
                                                                            };
                                                                            _gtm2.default.sendEvent({ data: analyticData });
                                                                            _this16.props.removeCoupons(_this16.props.selectedDoctor, doctorCoupons[0].coupon_id);
                                                                            _this16.setState({ use_wallet: true, is_payment_coupon_applied: false });
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
                                                                        { className: 'payment-detail d-flex', onClick: function onClick(e) {
                                                                                e.preventDefault();
                                                                                _this16.props.select_opd_payment_type(6);
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
                                                                                            _this16.props.select_opd_payment_type(6);
                                                                                        } },
                                                                                    'Doctor booking with ',
                                                                                    _react2.default.createElement('img', { className: 'sng-gld-img', src: "/assets" + '/img/gold-lg.png' })
                                                                                ),
                                                                                this.props.selected_vip_plan.opd.mrp == this.props.selected_vip_plan.opd.gold_price ? _react2.default.createElement(
                                                                                    'span',
                                                                                    { className: 'payment-mode-amt', onClick: function onClick(e) {
                                                                                            e.stopPropagation();
                                                                                            e.preventDefault();
                                                                                            _this16.props.select_opd_payment_type(6);
                                                                                        } },
                                                                                    '\u20B9' + (this.props.selected_vip_plan.opd.gold_price + this.props.selected_vip_plan.opd.convenience_charge)
                                                                                ) : _react2.default.createElement(
                                                                                    'span',
                                                                                    { className: 'payment-mode-amt', onClick: function onClick(e) {
                                                                                            e.stopPropagation();
                                                                                            e.preventDefault();
                                                                                            _this16.props.select_opd_payment_type(6);
                                                                                        } },
                                                                                    '\u20B9' + (this.props.selected_vip_plan.opd.gold_price + this.props.selected_vip_plan.opd.convenience_charge),
                                                                                    ' ',
                                                                                    _react2.default.createElement(
                                                                                        'b',
                                                                                        { className: 'gd-cut-prc' },
                                                                                        '\u20B9' + this.props.selected_vip_plan.opd.mrp
                                                                                    )
                                                                                )
                                                                            ),
                                                                            _react2.default.createElement('input', { checked: this.props.payment_type == 6, type: 'radio', name: 'payment-mode', value: 'on', onChange: function onChange(e) {
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
                                                                                    'Save \u20B9' + display_docprime_discount
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
                                                                                            _this16.goToGoldPage();
                                                                                        } })
                                                                                )
                                                                            )
                                                                        ),
                                                                        _react2.default.createElement(
                                                                            'div',
                                                                            { className: 'bnft-btn', onClick: function onClick(e) {
                                                                                    e.stopPropagation();
                                                                                    e.preventDefault();
                                                                                    _this16.goToGoldPage();
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
                                                                { className: 'payment-summary-content', onClick: function onClick(e) {
                                                                        e.preventDefault();
                                                                        _this16.props.select_opd_payment_type(1);
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
                                                                                    _this16.props.select_opd_payment_type(1);
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
                                                                                /*vip_data.hosp_is_gold && */is_selected_user_gold && cover_under_vip ? '\u20B9 ' + (vip_data.vip_amount + vip_data.vip_convenience_amount - (this.props.disCountedOpdPrice || 0)) : is_vip_applicable ? '\u20B9 ' + (vip_data.vip_amount - (this.props.disCountedOpdPrice || 0)) : this.getBookingAmount(total_wallet_balance, display_radio_prepaid_price, parseInt(priceData.mrp) + treatment_mrp)
                                                                            )
                                                                        ),
                                                                        _react2.default.createElement('input', { checked: this.props.payment_type == 1, type: 'radio', name: 'payment-mode', onChange: function onChange(e) {
                                                                                e.preventDefault();e.stopPropagation();
                                                                            } }),
                                                                        _react2.default.createElement('span', { className: 'doc-checkmark' })
                                                                    )
                                                                )
                                                            ) : '',
                                                            enabled_for_prepaid_payment && !is_insurance_applicable && enabled_for_cod_payment && !is_vip_applicable ? _react2.default.createElement('hr', { className: 'aa' }) : '',
                                                            showCodPaymentMode ? _react2.default.createElement(
                                                                'div',
                                                                { className: 'test-report payment-detail mt-20', onClick: function onClick(e) {
                                                                        e.preventDefault();
                                                                        _this16.props.select_opd_payment_type(2);
                                                                    } },
                                                                _react2.default.createElement(
                                                                    'label',
                                                                    { className: 'container-radio payment-type-radio' },
                                                                    _react2.default.createElement(
                                                                        'div',
                                                                        { onClick: function onClick(e) {
                                                                                e.stopPropagation();
                                                                                e.preventDefault();
                                                                                _this16.props.select_opd_payment_type(2);
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
                                                                    _react2.default.createElement('input', { checked: this.props.payment_type == 2, type: 'radio', name: 'payment-mode', onChange: function onChange(e) {
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
                                    { className: (disable_all_bookings ? 'disable-opacity' : '') + ' fixed sticky-btn p-0 v-btn  btn-lg horizontal bottom no-round text-lg buttons-addcart-container' },
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
                                { className: (disable_all_bookings ? 'disable-opacity' : '') + ' fixed sticky-btn p-0 v-btn  btn-lg horizontal bottom no-round text-lg buttons-addcart-container ' + (!is_add_to_card && this.props.ipd_chat && this.props.ipd_chat.showIpdChat ? 'ipd-foot-btn-duo' : '') + ' ' + (this.state.disable_page ? 'disable-all' : '') },
                                this.props.payment_type != 6 && (_storage2.default.isAgent() || !is_default_user_insured || this.state.isMatrix) && !(parsed.appointment_id && parsed.cod_to_prepaid == 'true') ? _react2.default.createElement(
                                    'button',
                                    { disabled: this.state.pay_btn_loading, className: "add-shpng-cart-btn" + (!this.state.cart_item ? "" : " update-btn") + (this.state.pay_btn_loading ? " disable-all" : ""), 'data-disabled': !(patient && this.props.selectedSlot && this.props.selectedSlot.date) || this.state.loading, onClick: this.proceed.bind(this, this.props.selectedSlot && this.props.selectedSlot.date, patient, true, total_amount_payable, total_wallet_balance, is_selected_user_insurance_status, {}) },
                                    this.state.cart_item ? "" : _react2.default.createElement('img', { src: "/assets" + "/img/cartico.svg" }),
                                    this.state.cart_item ? "Update" : "Add to Cart"
                                ) : '',
                                (_storage2.default.isAgent() || this.state.isMatrix) && !(enabled_for_cod_payment && this.props.payment_type == 2) || this.state.cart_item ? "" : _react2.default.createElement(
                                    'button',
                                    { disabled: this.state.pay_btn_loading, className: 'v-btn-primary book-btn-mrgn-adjust ' + (this.state.pay_btn_loading ? " disable-all" : ""), id: 'confirm_booking', 'data-disabled': !(patient && this.props.selectedSlot && this.props.selectedSlot.date) || this.state.loading, onClick: this.proceed.bind(this, this.props.selectedSlot && this.props.selectedSlot.date, patient, false, total_amount_payable, total_wallet_balance, is_selected_user_insurance_status, {}) },
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
    }]);

    return PatientDetailsNew;
}(_react2.default.Component);

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

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var toggle = _ref.toggle,
        deal_price = _ref.deal_price,
        mrp = _ref.mrp,
        payable_amount = _ref.payable_amount;

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProcedureView = function (_React$Component) {
    _inherits(ProcedureView, _React$Component);

    function ProcedureView(props) {
        _classCallCheck(this, ProcedureView);

        var _this = _possibleConstructorReturn(this, (ProcedureView.__proto__ || Object.getPrototypeOf(ProcedureView)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(ProcedureView, [{
        key: "render",
        value: function render() {

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
                    this.props.selectedProcedures ? Object.values(this.props.selectedProcedures).map(function (procedure) {

                        return procedure.filter(function (x) {
                            return x.is_selected;
                        }).map(function (category, i) {

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
    }]);

    return ProcedureView;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _index2 = __webpack_require__(/*! ../../components/opd/patientDetails/index.js */ "./dev/js/components/opd/patientDetails/index.js");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var PatientDetails = function (_React$Component) {
    _inherits(PatientDetails, _React$Component);

    function PatientDetails(props) {
        _classCallCheck(this, PatientDetails);

        var _this = _possibleConstructorReturn(this, (PatientDetails.__proto__ || Object.getPrototypeOf(PatientDetails)).call(this, props));

        _this.state = {
            timeSlots: null,
            doctor_leaves: [],
            DATA_FETCH: false,
            upcoming_slots: null,
            is_integrated: false,
            codError: null
        };
        return _this;
    }

    // static loadData(store, match, queryData) {
    //     let doctor_id = match.params.id || queryData.doctor_id
    //     let hospital_id = match.params.clinicId || queryData.hospital_id

    //     return store.dispatch(getDoctorById(doctor_id, hospital_id))
    // }

    _createClass(PatientDetails, [{
        key: 'fetchData',
        value: function fetchData(props, clinic_id, callDoctorById) {
            var _this2 = this;

            var parsed = queryString.parse(props.location.search);
            var doctor_id = props.selectedDoctor || props.match.params.id || parsed.doctor_id;
            var hospital_id = void 0;
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
                    var _extraParams = {};
                    //If appointment_id is availble in the url, then we get data corresponding to that appointment
                    if (parsed.appointment_id) {
                        _extraParams['appointment_id'] = parsed.appointment_id;
                    }
                    props.getDoctorById(doctor_id, hospital_id, props.commonProfileSelectedProcedures, '', _extraParams, function (error, response) {
                        if (error && error.message) {
                            _this2.setState({ codError: error.message });
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
                var selectedDate = new Date();
                if (this.props.selectedDateFormat) {
                    selectedDate = this.props.selectedDateFormat;
                } else {
                    selectedDate = this.getFormattedDate(selectedDate);
                }
                var extraParams = {
                    selectedDate: selectedDate
                };
                props.getTimeSlots(doctor_id, hospital_id, extraParams, function (timeSlots) {
                    _this2.setState({ timeSlots: timeSlots.timeslots, doctor_leaves: timeSlots.doctor_leaves, DATA_FETCH: true, upcoming_slots: timeSlots.upcoming_slots, is_integrated: timeSlots.is_integrated || false });
                });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            if (props.selectedDoctor != this.props.selectedDoctor) {
                this.fetchData(props, null, true);
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.fetchData(this.props, null, true);
        }
    }, {
        key: 'getFormattedDate',
        value: function getFormattedDate(date) {
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
    }, {
        key: 'render',
        value: function render() {

            var parsed = queryString.parse(this.props.location.search);

            var doctor_id = this.props.selectedDoctor || this.props.match.params.id || parsed.doctor_id;
            var hospital_id = parsed.hospital_id || this.props.match.params.clinicId;

            return _react2.default.createElement(_index3.default, _extends({}, this.props, this.state, { selectedDoctor: doctor_id, selectedClinic: hospital_id, fetchData: this.fetchData.bind(this) }));
        }
    }]);

    return PatientDetails;
}(_react2.default.Component);

PatientDetails.contextTypes = {
    router: function router() {
        return null;
    }
};


var mapStateToProps = function mapStateToProps(state) {

    var DOCTORS = state.DOCTOR_PROFILES;
    var _state$USER = state.USER,
        selectedProfile = _state$USER.selectedProfile,
        profiles = _state$USER.profiles,
        userWalletBalance = _state$USER.userWalletBalance,
        userCashbackBalance = _state$USER.userCashbackBalance,
        defaultProfile = _state$USER.defaultProfile,
        ipd_chat = _state$USER.ipd_chat,
        is_ipd_form_submitted = _state$USER.is_ipd_form_submitted,
        is_any_user_buy_gold = _state$USER.is_any_user_buy_gold,
        common_utm_tags = _state$USER.common_utm_tags,
        user_loggedIn_number = _state$USER.user_loggedIn_number;
    var _state$DOCTOR_SEARCH = state.DOCTOR_SEARCH,
        selectedSlot = _state$DOCTOR_SEARCH.selectedSlot,
        doctorCoupons = _state$DOCTOR_SEARCH.doctorCoupons,
        disCountedOpdPrice = _state$DOCTOR_SEARCH.disCountedOpdPrice,
        couponAutoApply = _state$DOCTOR_SEARCH.couponAutoApply,
        selectedDoctorProcedure = _state$DOCTOR_SEARCH.selectedDoctorProcedure,
        commonProfileSelectedProcedures = _state$DOCTOR_SEARCH.commonProfileSelectedProcedures,
        payment_type = _state$DOCTOR_SEARCH.payment_type,
        selectedDateFormat = _state$DOCTOR_SEARCH.selectedDateFormat,
        TIMESLOT_DATA_LOADING = _state$DOCTOR_SEARCH.TIMESLOT_DATA_LOADING;
    var saved_patient_details = state.SEARCH_CRITERIA_LABS.saved_patient_details;
    var _state$SEARCH_CRITERI = state.SEARCH_CRITERIA_OPD,
        common_settings = _state$SEARCH_CRITERI.common_settings,
        selectedLocation = _state$SEARCH_CRITERI.selectedLocation;
    var ipdPopupData = state.SEARCH_CRITERIA_IPD.ipdPopupData;
    var _state$VIPCLUB = state.VIPCLUB,
        odpGoldPredictedPrice = _state$VIPCLUB.odpGoldPredictedPrice,
        selected_vip_plan = _state$VIPCLUB.selected_vip_plan,
        show_doctor_payment_mode = _state$VIPCLUB.show_doctor_payment_mode;

    return {
        selectedProfile: selectedProfile, profiles: profiles, DOCTORS: DOCTORS, selectedSlot: selectedSlot, doctorCoupons: doctorCoupons, disCountedOpdPrice: disCountedOpdPrice, couponAutoApply: couponAutoApply, selectedDoctorProcedure: selectedDoctorProcedure, commonProfileSelectedProcedures: commonProfileSelectedProcedures, userWalletBalance: userWalletBalance, userCashbackBalance: userCashbackBalance, payment_type: payment_type, saved_patient_details: saved_patient_details, defaultProfile: defaultProfile, ipd_chat: ipd_chat, common_settings: common_settings, selectedDateFormat: selectedDateFormat, TIMESLOT_DATA_LOADING: TIMESLOT_DATA_LOADING, is_ipd_form_submitted: is_ipd_form_submitted, ipdPopupData: ipdPopupData, selectedLocation: selectedLocation, odpGoldPredictedPrice: odpGoldPredictedPrice, selected_vip_plan: selected_vip_plan, is_any_user_buy_gold: is_any_user_buy_gold, common_utm_tags: common_utm_tags, show_doctor_payment_mode: show_doctor_payment_mode, user_loggedIn_number: user_loggedIn_number
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        selectOpdTimeSLot: function selectOpdTimeSLot(slot, reschedule, appointmentId, extraDateParams) {
            return dispatch((0, _index.selectOpdTimeSLot)(slot, reschedule, appointmentId, extraDateParams));
        },
        getUserProfile: function getUserProfile() {
            return dispatch((0, _index.getUserProfile)());
        },
        getDoctorById: function getDoctorById(doctorId, hospitalId, procedure_ids, category_ids, extraParams, cb) {
            return dispatch((0, _index.getDoctorById)(doctorId, hospitalId, procedure_ids, category_ids, extraParams, cb));
        },
        createOPDAppointment: function createOPDAppointment(postData, callback) {
            return dispatch((0, _index.createOPDAppointment)(postData, callback));
        },
        sendAgentBookingURL: function sendAgentBookingURL(orderId, type, purchase_type, query_data, extraParams, cb) {
            return dispatch((0, _index.sendAgentBookingURL)(orderId, type, purchase_type, query_data, extraParams, cb));
        },
        removeCoupons: function removeCoupons(hospitalId, couponId) {
            return dispatch((0, _index.removeCoupons)(hospitalId, couponId));
        },
        applyOpdCoupons: function applyOpdCoupons(productId, couponCode, couponId, doctor_id, dealPrice, hospitalId, profile_id, procedures_ids, cart_item, callback) {
            return dispatch((0, _index.applyOpdCoupons)(productId, couponCode, couponId, doctor_id, dealPrice, hospitalId, profile_id, procedures_ids, cart_item, callback));
        },
        applyCoupons: function applyCoupons(productId, couponData, couponId, hospitalId, callback) {
            return dispatch((0, _index.applyCoupons)(productId, couponData, couponId, hospitalId, callback));
        },
        resetOpdCoupons: function resetOpdCoupons() {
            return dispatch((0, _index.resetOpdCoupons)());
        },
        getCoupons: function getCoupons(data) {
            return dispatch((0, _index.getCoupons)(data));
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
        addToCart: function addToCart(product_id, data) {
            return dispatch((0, _index.addToCart)(product_id, data));
        },
        getCartItems: function getCartItems() {
            return dispatch((0, _index.getCartItems)());
        },
        select_opd_payment_type: function select_opd_payment_type(type) {
            return dispatch((0, _index.select_opd_payment_type)(type));
        },
        getTimeSlots: function getTimeSlots(doctorId, clinicId, extraParams, callback) {
            return dispatch((0, _index.getTimeSlots)(doctorId, clinicId, extraParams, callback));
        },
        editUserProfile: function editUserProfile(profileData, profileId, cb) {
            return dispatch((0, _index.editUserProfile)(profileData, profileId, cb));
        },
        patientDetails: function patientDetails(criteria) {
            return dispatch((0, _index.patientDetails)(criteria));
        },
        ipdChatView: function ipdChatView(data) {
            return dispatch((0, _index.ipdChatView)(data));
        },
        checkIpdChatAgentStatus: function checkIpdChatAgentStatus(cb) {
            return dispatch((0, _index.checkIpdChatAgentStatus)(cb));
        },
        saveAvailNowInsurance: function saveAvailNowInsurance(data) {
            return dispatch((0, _index.saveAvailNowInsurance)(data));
        },
        submitIPDForm: function submitIPDForm(formData, selectedLocation, cb) {
            return dispatch((0, _index.submitIPDForm)(formData, selectedLocation, cb));
        },
        agentLogin: function agentLogin(token, cb) {
            return dispatch((0, _index.agentLogin)(token, cb));
        },
        codToPrepaid: function codToPrepaid(postData, cb) {
            return dispatch((0, _index.codToPrepaid)(postData, cb));
        },
        clearVipSelectedPlan: function clearVipSelectedPlan() {
            return dispatch((0, _index.clearVipSelectedPlan)());
        },
        getOpdVipGoldPlans: function getOpdVipGoldPlans(extraDataParams, cb) {
            return dispatch((0, _index.getOpdVipGoldPlans)(extraDataParams, cb));
        },
        selectVipClubPlan: function selectVipClubPlan(type, selectedPlan, cb) {
            return dispatch((0, _index.selectVipClubPlan)(type, selectedPlan, cb));
        },
        pushMembersData: function pushMembersData(criteria, callback) {
            return dispatch((0, _index.pushMembersData)(criteria, callback));
        },
        retrieveMembersData: function retrieveMembersData(type, extraParams, callback) {
            return dispatch((0, _index.retrieveMembersData)(type, extraParams, callback));
        },
        selectProfile: function selectProfile(id) {
            return dispatch((0, _index.selectProfile)(id));
        },
        SendIpdBookingEmail: function SendIpdBookingEmail(data, cb) {
            return dispatch((0, _index.SendIpdBookingEmail)(data, cb));
        },
        NonIpdBookingLead: function NonIpdBookingLead(data, cb) {
            return dispatch((0, _index.NonIpdBookingLead)(data, cb));
        },
        saveLeadPhnNumber: function saveLeadPhnNumber(number) {
            return dispatch((0, _index.saveLeadPhnNumber)(number));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PatientDetails);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvcGF0aWVudERldGFpbHMvQ29kRXJyb3JQb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvcGF0aWVudERldGFpbHMvUGF0aWVudERldGFpbHNOZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL3BhdGllbnREZXRhaWxzL2NhbmNlbGxhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvcGF0aWVudERldGFpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL3BhdGllbnREZXRhaWxzL3BheW1lbnRTdW1tYXJ5LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL29wZC9wYXRpZW50RGV0YWlscy9wcm9jZWR1cmVWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL29wZC9QYXRpZW50RGV0YWlscy5qcyJdLCJuYW1lcyI6WyJDb2RFcnJvclBvcHVwIiwicHJvcHMiLCJzdGF0ZSIsImNvZEVycm9yQ2xpY2tlZCIsImNvZE1zZyIsIlJlYWN0IiwiQ29tcG9uZW50IiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiTU9OVEhTIiwiV0VFS19EQVlTIiwiUGF0aWVudERldGFpbHNOZXciLCJjbG9zZUVycm9yUG9wdXAiLCJzZXRTdGF0ZSIsImVycm9yIiwidG9nZ2xlR29sZFBsYW5zIiwicGxhbiIsImRhdGEiLCJHVE0iLCJnZXRVc2VySWQiLCJpZCIsInNlbmRFdmVudCIsInNlbGVjdFZpcENsdWJQbGFuIiwidG9nZ2xlR29sZFByaWNlUG9wdXAiLCJ2YWx1ZSIsInNob3dHb2xkUHJpY2VMaXN0IiwiZ29Ub0dvbGRQYWdlIiwiaGlzdG9yeSIsInB1c2giLCJnZXREYXRhQWZ0ZXJMb2dpbiIsImZldGNoRGF0YSIsInNlbGVjdGVkQ2xpbmljIiwib2RwR29sZFByZWRpY3RlZFByaWNlIiwibGVuZ3RoIiwic2VsZWN0ZWRQYWNrYWdlIiwiZmlsdGVyIiwieCIsInNlbGVjdGVkVmlwR29sZFBhY2thZ2VJZCIsImlzX3NlbGVjdGVkIiwicGFyc2VkIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsImRvY3Rvcl9pZCIsInNlbGVjdGVkRG9jdG9yIiwiaG9zcGl0YWxfaWQiLCJwYXltZW50RGF0YSIsImxvYWRpbmciLCJvcGVuQ2FuY2VsbGF0aW9uIiwib3JkZXJfaWQiLCJjb3Vwb25Db2RlIiwicHJvZmlsZURhdGFGaWxsZWQiLCJzaG93VGltZUVycm9yIiwiY291cG9uQXBwbGllZCIsImlzX2Nhc2hiYWNrIiwidXNlX3dhbGxldCIsInByb2ZpbGVFcnJvciIsImNhcnRfaXRlbSIsIndoYXRzYXBwX29wdGluIiwiZm9ybURhdGEiLCJzaG93Q29uZmlybWF0aW9uUG9wdXAiLCJjb3Vwb25fbG9hZGluZyIsInNlb0ZyaWVuZGx5IiwibWF0Y2giLCJ1cmwiLCJpbmNsdWRlcyIsInNob3dJcGRMZWFkRm9ybSIsImlzX3BheW1lbnRfY291cG9uX2FwcGxpZWQiLCJkYXRlVGltZVNlbGVjdGVkVmFsdWUiLCJzZWxlY3RlZERhdGVGb3JtYXQiLCJzaG93U2Vjb25kUG9wdXAiLCJmaXJzdExlYWRJZCIsInRpbWVFcnJvclRleHQiLCJwYXlfYnRuX2xvYWRpbmciLCJpc01hdHJpeCIsImlzX21hdHJpeCIsImlzRW1haWxOb3RWYWxpZCIsImlzRG9iTm90VmFsaWQiLCJzaG93X2xlbnNmaXRfcG9wdXAiLCJsZW5zZml0X2NvdXBvbnMiLCJsZW5zZml0X2RlY2xpbmUiLCJpc0xlbnNmaXRTcGVjaWZpYyIsInNob3dfYmFubmVyIiwiYmFubmVyX2RlY2xpbmUiLCJzZWxlY3RlZF92aXBfcGxhbiIsIk9iamVjdCIsImtleXMiLCJwYXltZW50QnRuQ2xpY2tlZCIsImVuYWJsZURyb3BPZmZsZWFkIiwic2hvd05vbklwZFBvcHVwIiwic2hvd19wb3B1cCIsInRvX2JlX2ZvcmNlIiwiaXNfZG9jQWRzX2xlYWQiLCJkaXNhYmxlX3BhZ2UiLCJpc19sZWFkX2VuYWJsZWQiLCJlIiwidGFyZ2V0IiwiY2hlY2tlZCIsIndoaWNoIiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b2tlbiIsImFwcG9pbnRtZW50X2lkIiwiYWdlbnRMb2dpbiIsInNlbGVjdF9vcGRfcGF5bWVudF90eXBlIiwiZ2V0VXNlclByb2ZpbGUiLCJmZXRjaFRyYW5zYWN0aW9ucyIsImdldENhcnRJdGVtcyIsImdldFZpcEdvbGRQcmljZUxpc3QiLCJkdW1teV9pZCIsImV4dHJhUGFyYW1zIiwicmV0cmlldmVNZW1iZXJzRGF0YSIsInJlc3AiLCJzZXRPcGRCb29raW5nIiwicGx1c19wbGFuIiwic2V0VGltZW91dCIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJyZXBsYWNlIiwicGF0aG5hbWUiLCJob3NwaXRhbCIsImRvY3RvckRldGFpbHMiLCJET0NUT1JTIiwiaG9zcGl0YWxzIiwibWFwIiwiaHNwdGwiLCJ2YWx1ZXMiLCJzZWxlY3RlZFNsb3QiLCJ0aW1lIiwiZG9jdG9yQ291cG9ucyIsInRyZWF0bWVudF9QcmljZSIsInNlbGVjdGVkUHJvY2VkdXJlcyIsInNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlIiwicHJpY2UiLCJkZWFsX3ByaWNlIiwiZ2V0U2VsZWN0ZWRVc2VyRGF0YSIsInRvdGFsX2Ftb3VudF9wYXlhYmxlX3dpdGhvdXRfY291cG9uIiwiYXBwbHlPcGRDb3Vwb25zIiwiY29kZSIsImNvdXBvbl9pZCIsInNlbGVjdGVkUHJvZmlsZSIsImdldFByb2NlZHVyZUlkcyIsImVyciIsImNvdXBvbklkIiwiaXNfcGF5bWVudF9zcGVjaWZpYyIsImdldEFuZEFwcGx5QmVzdENvdXBvbnMiLCJyZXNldE9wZENvdXBvbnMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xpY2siLCJzZW5kRW1haWxOb3RpZmljYXRpb24iLCJhZ2VudF9zZWxlY3RlZF9wbGFuX2lkIiwicGF5bWVudF90eXBlIiwiZ2V0T3BkVmlwR29sZFBsYW5zIiwiY291cG9ucyIsInZhbGlkQ291cG9uIiwiaW5kZXgiLCJ2YWxpZCIsImlzTGVuc2ZpdCIsImxlbnNGaXREYXRhIiwiZ2V0Q291cG9ucyIsInByb2R1Y3RJZCIsInByb2ZpbGVfaWQiLCJwcm9jZWR1cmVzX2lkcyIsImNiIiwiZ2V0VmFsaWRDb3Vwb24iLCJhcHBseUNvdXBvbnMiLCJzdWNjZXNzIiwibmV4dFByb3BzIiwiU1RPUkFHRSIsImNoZWNrQXV0aCIsInZpcCIsImlzX3ZpcF9tZW1iZXIiLCJjb3Zlcl91bmRlcl92aXAiLCJ2aXBfYW1vdW50IiwidmlwX2NvbnZlbmllbmNlX2Ftb3VudCIsIm5hbWUiLCJnZW5kZXIiLCJwaG9uZU51bWJlciIsImVtYWlsIiwib3RwVmVyaWZ5U3VjY2VzcyIsImRvYiIsInBhdGllbnREZXRhaWxzIiwiY2xlYXJfZGF0YSIsImNhdGVnb3JpZXMiLCJwcm9jZWR1cmVfaWRzIiwicHJvY2VkdXJlIiwiY29uY2F0IiwicHJvY2VkdXJlX2lkIiwidXRtX3RhZ3MiLCJ1dG1fc291cmNlIiwidXRtX21lZGl1bSIsInV0bV90ZXJtIiwidXRtX2NhbXBhaWduIiwicmVmZXJyZXIiLCJnY2xpZCIsImNvbW1vbl91dG1fdGFncyIsInR5cGUiLCJkYXRlUGlja2VkIiwicGF0aWVudCIsImFkZFRvQ2FydCIsInRvdGFsX3ByaWNlIiwidG90YWxfd2FsbGV0X2JhbGFuY2UiLCJpc19zZWxlY3RlZF91c2VyX2luc3VyYW5jZV9zdGF0dXMiLCJkYXRhc2V0IiwiZGlzYWJsZWQiLCJpc19pbnN1cmFuY2VfYXBwbGljYWJsZSIsImlzX3NlbGVjdGVkX3VzZXJfaW5zdXJlZCIsImlzX3ZpcF9hcHBsaWNhYmxlIiwiaXNfZ29sZF9hcHBsaWNhYmxlIiwiaXNfc2VsZWN0ZWRfdXNlcl92aXAiLCJkYXRlIiwicHJpY2VEYXRhIiwiaW5zdXJhbmNlIiwicGFyc2VJbnQiLCJpbnN1cmFuY2VfdGhyZXNob2xkX2Ftb3VudCIsImlzX2luc3VyYW5jZV9jb3ZlcmVkIiwicHJvZmlsZXMiLCJpc0R1bW15VXNlciIsImlzX2luc3VyZWQiLCJlbnRyaWVzIiwia2V5Iiwic2hvd19sZW5zZml0IiwibGVuc2ZpdF9vZmZlciIsImFwcGxpY2FibGUiLCJjb3Vwb24iLCJpc0FnZW50Iiwic3RhcnRfZGF0ZSIsInN0YXJ0X3RpbWUiLCJnZXRVdG1UYWdzIiwicG9zdERhdGEiLCJkb2N0b3IiLCJwcm9maWxlIiwiZnJvbV93ZWIiLCJ2aXNpdG9yX2luZm8iLCJnZXRWaXNpdG9ySW5mbyIsInZpc2l0X2lkIiwidmlzaXRvcl9pZCIsInByb2ZpbGVEYXRhIiwiZWRpdFVzZXJQcm9maWxlIiwiZGlzQ291bnRlZE9wZFByaWNlIiwiZ2V0QW55Q29va2llIiwidGFncyIsImhvc3QiLCJEYXRlIiwiZ2V0VGltZSIsInNlbmRXaGF0c3VwIiwic2VuZFNpbmdsZUZsb3dBZ2VudEJvb2tpbmdVUkwiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJtZXNzYWdlIiwiY29kX3RvX3ByZXBhaWQiLCJjb2RUb1ByZXBhaWQiLCJwYXltZW50X3JlcXVpcmVkIiwiYW5hbHl0aWNEYXRhIiwicHJvY2Vzc1BheW1lbnQiLCJyZW1vdmVDb3Vwb25zIiwib3JkZXJJZCIsImNyZWF0ZU9QREFwcG9pbnRtZW50Iiwic3RhdHVzIiwiZm9ybSIsInN1Ym1pdCIsIndoZXJlIiwiYm9va2luZ19kYXRhIiwiZ2V0Qm9va2luZ0RhdGEiLCJpc19zaW5nbGVfZmxvd19vcGQiLCJkdW1teV9kYXRhX3R5cGUiLCJwdXNoTWVtYmVyc0RhdGEiLCJsYW5kaW5nX3VybCIsIm1lc3NhZ2VfbWVkaXVtIiwic2VuZEFnZW50Qm9va2luZ1VSTCIsInNlbGVjdGVkRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiaG91ciIsIm1pbnV0ZSIsImhvdXIxMiIsInNwbGl0IiwiaXNfYXZhaWxhYmxlIiwibXJwIiwiZmVlcyIsInRpdGxlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwidGltZVNsb3QiLCJjb3Vwb25fZGF0YSIsImNsaW5pY19pZCIsImV4dHJhVGltZVBhcmFtcyIsImdldEZvcm1hdHRlZERhdGUiLCJzZWxlY3RPcGRUaW1lU0xvdCIsImNvdXBvbl9jb2RlIiwic2VsZWN0UHJvZmlsZSIsInRpbWVfc2xvdCIsImJ1aWxkT3BkVGltZVNsb3QiLCJzbG90IiwicHJvY19pZHMiLCJqb2luIiwiZ2V0RGVhbFByaWNlIiwicHJpY2VfdG9fcGF5IiwiZW5hYmxlZF9mb3JfY29kX3BheW1lbnQiLCJpc19jb2RfZGVhbF9wcmljZSIsImlzX2dvbGRfbWVtYmVyIiwicHJpY2VfZnJvbV93YWxsZXQiLCJwcmljZV9mcm9tX3BnIiwiTWF0aCIsIm1pbiIsImNob2ljZSIsImlwZEZvcm1QYXJhbXMiLCJjbG9zZSIsImd0bURhdGEiLCJpcGRfZGF0YSIsInNob3dDaGF0IiwiR3RtZGF0YSIsInRodW1ibmFpbCIsImRpc3BsYXlfbmFtZSIsInNhdmVBdmFpbE5vd0luc3VyYW5jZSIsImhyZWYiLCJVUkwiLCJzZWFyY2hQYXJhbXMiLCJzZXQiLCJuZXdVcmwiLCJ0b1N0cmluZyIsInJlcGxhY2VTdGF0ZSIsImRkIiwiZ2V0RGF0ZSIsIm1tIiwiZ2V0TW9udGgiLCJ5eXl5IiwiZ2V0RnVsbFllYXIiLCJ0b2RheSIsInJlc3BvbnNlIiwicG9wdXAxIiwicmVxdWVzdGVkX2RhdGVfdGltZSIsInJlcXVlc3RlZF9kYXRlIiwiaG91cnMiLCJmb3VuZFRpbWVTbG90IiwidGltZVNsb3RzIiwidGltZVNsb3REYXRhIiwidGltaW5nIiwic2VsZWN0VGltZSIsImNvbnNvbGUiLCJsb2ciLCJ0aW1lU3BhbiIsImFzc2lnbiIsIm1vbnRoIiwiaXNfc2VsZWN0ZWRfdXNlcl9nb2xkIiwiaXNfdmlwX2dvbGRfbWVtYmVyIiwiaXNfZW5hYmxlX2Zvcl92aXAiLCJpc19hbnlfdXNlcl9idXlfZ29sZCIsIm9wZCIsInNlbGVjdGVkX2hvc3BpdGFsIiwiaXNfaXBkX2hvc3BpdGFsIiwidG9EYXRlU3RyaW5nIiwidXNlcl9kYXRhIiwidXNlciIsInBob25lX251bWJlciIsInByZWZlcnJlZF9kYXRlIiwidXNlcl9wcm9maWxlIiwiU2VuZElwZEJvb2tpbmdFbWFpbCIsInVzZXJfcGhvbmVfbnVtYmVyIiwidXNlcl9uYW1lIiwic3BlY2lhbGl6YXRpb24iLCJkaXNwbGF5X3RvdGFsX21ycCIsImRpc3BsYXlfZG9jcHJpbWVfZGlzY291bnQiLCJnZW5lcmFsX3NwZWNpYWxpemF0aW9uIiwibGVhZF90eXBlIiwibGVhZF9zb3VyY2UiLCJ0ZXN0X25hbWUiLCJsYWJfbmFtZSIsImRvY3Rvcl9uYW1lIiwiaG9zcGl0YWxfbmFtZSIsInNwZWNpYWx0eSIsInNvdXJjZSIsImV4aXRwb2ludF91cmwiLCJjdXN0b21lcl9uYW1lIiwic2VsZWN0ZWRfdGltZSIsInNlbGVjdGVkX2RhdGUiLCJnb2xkX3ByaWNlIiwiY29udmVuaWVuY2VfY2hhcmdlIiwiZGlzY291bnQiLCJOb25JcGRCb29raW5nTGVhZCIsImluaXRpYWxTZXJ2ZXJEYXRhIiwiY3JpdGVyaWFTdHIiLCJhbW91bnRfZGlzY291bnQiLCJndG1fZGF0YSIsInNhdmVMZWFkUGhuTnVtYmVyIiwiYXBwZW5kUGFyYW1Ub1VybCIsImZyb20iLCJuZXd1cmwiLCJwcm90b2NvbCIsInB1c2hTdGF0ZSIsInBhdGgiLCJlbmFibGVkX2Zvcl9wcmVwYWlkX3BheW1lbnQiLCJpc19kZWZhdWx0X3VzZXJfaW5zdXJlZCIsImlzX2luc3VyYW5jZV9idXlfYWJsZSIsImluc3VyYW5jZV9lcnJvcl9tc2ciLCJzaG93X2luc3VyYW5jZV9lcnJvciIsInBheW1lbnRfbW9kZV9jb3VudCIsImlzX3NlbGVjdGVkX3VzZXJfdW5kZXJfdmlwIiwiaXNfZGVmYXVsdF91c2VyX3VuZGVyX3ZpcCIsInZpcF9kYXRhIiwiaGlkZV9wcmVwYWlkIiwiYWxsX2NpdGllcyIsInF1YWxpZmljYXRpb25zIiwiZW5hYmxlZF9mb3JfY29kIiwiZW5hYmxlZF9mb3JfcHJlcGFpZCIsImluZGV4T2YiLCJkZWZhdWx0UHJvZmlsZSIsImluc3VyYW5jZV9zdGF0dXMiLCJwYXlhYmxlX2Ftb3VudCIsImNvZF9kZWFsX3ByaWNlIiwiZXJyb3JfbWVzc2FnZSIsInNldERhdGFPbkNsaW5pY0NoYW5nZSIsInRyZWF0bWVudF9tcnAiLCJmaW5hbFByaWNlIiwiZGlzcGxheV9yYWRpb19wcmVwYWlkX3ByaWNlIiwidXNlcldhbGxldEJhbGFuY2UiLCJ1c2VyQ2FzaGJhY2tCYWxhbmNlIiwicGVyY2VudF9kaXNjb3VudCIsIm1heCIsImRvY0Rpc2NvdW50IiwiY29kX3BlcmNlbnRhZ2VfZGlzY291bnQiLCJzaG93R29sZFRvZ2dsZVBheW1lbnRNb2RlIiwic2hvd0NvZFBheW1lbnRNb2RlIiwicmVzZXRQYXltZW50VHlwZSIsInNob3dfZG9jdG9yX3BheW1lbnRfbW9kZSIsImNsaW5pY19tcnAiLCJpc19hZGRfdG9fY2FyZCIsInVwY29taW5nX2RhdGUiLCJ1cGNvbWluZ19zbG90cyIsImRhdGVBZnRlcjI0RGF5cyIsInNldERhdGUiLCJzaG93UG9wdXAiLCJPTl9MQU5ESU5HX1BBR0UiLCJpc19pcGRfZm9ybV9zdWJtaXR0ZWQiLCJpc190aW1lX3NlbGVjdGVkIiwidmlwX2Rpc2NvdW50X3ByaWNlIiwidG90YWxfYW1vdW50X3BheWFibGUiLCJpc19jb3Zlcl91bmRlcl92aXBfZ29sZCIsImhvc3BfaXNfZ29sZCIsImlzX2dvbGQiLCJkaXNhYmxlX2FsbF9ib29raW5ncyIsInByaWNlQ29uZmlybWF0aW9uUG9wdXAiLCJiaW5kIiwiYmFubmVyQ29uZmlybWF0aW9uUG9wdXAiLCJhcHBseUxlbnNGaXRDb3Vwb25zIiwiY2xvc2VMZW5zRml0UG9wdXAiLCJ2YWwiLCJjb2RFcnJvciIsIkRBVEFfRkVUQ0giLCJzdWJtaXRMZWFkRm9ybUdlbmVyYXRpb24iLCJzYXZlTGVhZElkRm9yVXBkYXRpb24iLCJnZXRfZmVlZGJhY2siLCJzZWNvbmRJcGRGb3JtU3VibWl0dGVkIiwic2VsZWN0Q2xpbmljIiwibmF2aWdhdGVUbyIsInByb2ZpbGVEYXRhQ29tcGxldGVkIiwibm9uSXBkTGVhZHMiLCJmbGV4RGlyZWN0aW9uIiwicGFkZGluZ1JpZ2h0IiwiQVNTRVRTX0JBU0VfVVJMIiwidGV4dFRyYW5zZm9ybSIsImdldERheSIsIlRJTUVTTE9UX0RBVEFfTE9BRElORyIsImlzX2ludGVncmF0ZWQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInNlbGVjdERhdGUiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJmb250U2l6ZSIsIm1hcmdpblRvcCIsInRvdGFsX2FsbG93ZWRfbWVtYmVycyIsImdldEJvb2tpbmdBbW91bnQiLCJmb250V2VpZ2h0IiwidG9nZ2xlV2FsbGV0VXNlIiwidG9nZ2xlV2hhdHNhcCIsImN1cnNvciIsIm1hcmdpbkJvdHRvbSIsInRvZ2dsZSIsIm1hcmdpbkxlZnQiLCJwcm9jZWVkIiwiaXBkX2NoYXQiLCJzaG93SXBkQ2hhdCIsImdldEJvb2tpbmdCdXR0b25UZXh0IiwicGFkZGluZ1RvcCIsImRpc3BsYXkiLCJQcm9jZWR1cmVWaWV3IiwiY2F0ZWdvcnkiLCJpIiwicHJvY2VkdXJlX25hbWUiLCJQYXRpZW50RGV0YWlscyIsImRvY3Rvcl9sZWF2ZXMiLCJjYWxsRG9jdG9yQnlJZCIsInBhcmFtcyIsImNsaW5pY0lkIiwiZ2V0RG9jdG9yQnlJZCIsImNvbW1vblByb2ZpbGVTZWxlY3RlZFByb2NlZHVyZXMiLCJnZXRUaW1lU2xvdHMiLCJ0aW1lc2xvdHMiLCJjb250ZXh0VHlwZXMiLCJyb3V0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJET0NUT1JfUFJPRklMRVMiLCJVU0VSIiwidXNlcl9sb2dnZWRJbl9udW1iZXIiLCJET0NUT1JfU0VBUkNIIiwiY291cG9uQXV0b0FwcGx5Iiwic2F2ZWRfcGF0aWVudF9kZXRhaWxzIiwiU0VBUkNIX0NSSVRFUklBX0xBQlMiLCJTRUFSQ0hfQ1JJVEVSSUFfT1BEIiwiY29tbW9uX3NldHRpbmdzIiwic2VsZWN0ZWRMb2NhdGlvbiIsImlwZFBvcHVwRGF0YSIsIlNFQVJDSF9DUklURVJJQV9JUEQiLCJWSVBDTFVCIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJyZXNjaGVkdWxlIiwiYXBwb2ludG1lbnRJZCIsImV4dHJhRGF0ZVBhcmFtcyIsImRvY3RvcklkIiwiaG9zcGl0YWxJZCIsImNhdGVnb3J5X2lkcyIsImNhbGxiYWNrIiwicHVyY2hhc2VfdHlwZSIsInF1ZXJ5X2RhdGEiLCJkZWFsUHJpY2UiLCJjb3Vwb25EYXRhIiwiY3JlYXRlUHJvZmlsZSIsInNlbmRPVFAiLCJudW1iZXIiLCJ2aWFTbXMiLCJ2aWFXaGF0c2FwcCIsIm1lc3NhZ2VfdHlwZSIsInN1Ym1pdE9UUCIsIm90cCIsImV4dHJhUGFyYW1zRGF0YSIsInByb2R1Y3RfaWQiLCJwcm9maWxlSWQiLCJjcml0ZXJpYSIsImlwZENoYXRWaWV3IiwiY2hlY2tJcGRDaGF0QWdlbnRTdGF0dXMiLCJzdWJtaXRJUERGb3JtIiwiY2xlYXJWaXBTZWxlY3RlZFBsYW4iLCJleHRyYURhdGFQYXJhbXMiLCJzZWxlY3RlZFBsYW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFTUEsYTs7O0FBQ0wsd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0SEFDWkEsS0FEWTs7QUFFbEIsUUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFGa0I7QUFLbEI7Ozs7MkJBRVE7QUFBQTs7QUFDUixVQUNBO0FBQUE7QUFBQSxNQUFLLFdBQVUsMEJBQWYsRUFBMEMsU0FBUztBQUFBLGFBQUksT0FBS0QsS0FBTCxDQUFXRSxlQUFYLEVBQUo7QUFBQSxNQUFuRDtBQUNDO0FBQUE7QUFBQSxPQUFLLFdBQVUsaUJBQWY7QUFDQztBQUFBO0FBQUEsUUFBSyxXQUFVLFFBQWY7QUFDQztBQUFBO0FBQUEsU0FBSyxXQUFVLGdDQUFmO0FBQ0M7QUFBQTtBQUFBLFVBQUcsV0FBVSxnQkFBYjtBQUErQixhQUFLRixLQUFMLENBQVdHO0FBQTFDLFFBREQ7QUFFQztBQUFBO0FBQUEsVUFBSyxXQUFVLHlCQUFm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b0IsNkJBQUN2VixJQUFELEVBQU1xSixFQUFOO0FBQUEsbUJBQVltVyxTQUFTLGdDQUFvQnhmLElBQXBCLEVBQTBCcUosRUFBMUIsQ0FBVCxDQUFaO0FBQUEsU0FqQ2pCO0FBa0NId04sMkJBQWtCLDJCQUFDN1csSUFBRCxFQUFNcUosRUFBTjtBQUFBLG1CQUFZbVcsU0FBUyw4QkFBa0J4ZixJQUFsQixFQUF3QnFKLEVBQXhCLENBQVQsQ0FBWjtBQUFBLFNBbENmO0FBbUNINk4sMkJBQWtCLDJCQUFDb0osTUFBRDtBQUFBLG1CQUFZZCxTQUFTLDhCQUFrQmMsTUFBbEIsQ0FBVCxDQUFaO0FBQUE7QUFuQ2YsS0FBUDtBQXFDSCxDQXRDRDs7a0JBeUNlLHlCQUFRN0IsZUFBUixFQUF5QmMsa0JBQXpCLEVBQTZDekIsY0FBN0MsQyIsImZpbGUiOiI0MC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIENvZEVycm9yUG9wdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1wb3B1cC1vdmVybGF5IFwiIG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLmNvZEVycm9yQ2xpY2tlZCgpfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLXBvcHVwXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBwYWRpaW5nLXNyY2gtZWxcIj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInNyY2gtZWwtY29uZW50XCI+e3RoaXMucHJvcHMuY29kTXNnfTwvcD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLWJ0bi1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy5jb2RFcnJvckNsaWNrZWQoKX0+T2theTwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj4pXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29kRXJyb3JQb3B1cCAgICAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuaW1wb3J0IERvY3RvclByb2ZpbGVDYXJkIGZyb20gJy4uL2NvbW1vbnMvZG9jdG9yUHJvZmlsZUNhcmQnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvTG9hZGVyJ1xuaW1wb3J0IFZpc2l0VGltZU5ldyBmcm9tICcuL1Zpc2l0VGltZU5ldydcbmltcG9ydCBDaG9vc2VQYXRpZW50TmV3VmlldyBmcm9tICcuL2Nob29zZVBhdGllbnROZXcnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuaW1wb3J0IFNlbGVjdGVkQ2xpbmljIGZyb20gJy4uL2NvbW1vbnMvc2VsZWN0ZWRDbGluaWMvaW5kZXguanMnXG5cbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmltcG9ydCBMZWZ0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvTGVmdEJhcidcbmltcG9ydCBSaWdodEJhciBmcm9tICcuLi8uLi9jb21tb25zL1JpZ2h0QmFyJ1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcblxuaW1wb3J0IENhbmNlbGF0aW9uUG9saWN5IGZyb20gJy4vY2FuY2VsbGF0aW9uLmpzJ1xuaW1wb3J0IFBheW1lbnRTdW1tYXJ5IGZyb20gJy4vcGF5bWVudFN1bW1hcnkuanMnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IFByb2NlZHVyZVZpZXcgZnJvbSAnLi9wcm9jZWR1cmVWaWV3LmpzJ1xuaW1wb3J0IEJvb2tpbmdFcnJvciBmcm9tICcuL2Jvb2tpbmdFcnJvclBvcFVwLmpzJ1xuaW1wb3J0IHsgQVBQRU5EX0hFQUxUSF9USVAgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvdHlwZXMnO1xuaW1wb3J0IFdoYXRzQXBwT3B0aW5WaWV3IGZyb20gJy4uLy4uL2NvbW1vbnMvV2hhdHNBcHBPcHRpbi9XaGF0c0FwcE9wdGluVmlldy5qcydcbmltcG9ydCBCb29raW5nQ29uZmlybWF0aW9uUG9wdXAgZnJvbSAnLi4vLi4vZGlhZ25vc2lzL2Jvb2tpbmdTdW1tYXJ5L0Jvb2tpbmdDb25maXJtYXRpb25Qb3B1cC5qcydcbmltcG9ydCBJcGRMZWFkRm9ybSBmcm9tICcuLi8uLi8uLi9jb250YWluZXJzL2lwZC9pcGRMZWFkRm9ybS5qcydcbmltcG9ydCBQYXltZW50Rm9ybSBmcm9tICcuLi8uLi9jb21tb25zL3BheW1lbnRGb3JtJ1xuaW1wb3J0IElwZFNlY29uZFBvcHVwIGZyb20gJy4uLy4uLy4uL2NvbnRhaW5lcnMvaXBkL0lwZERvY3RvckNpdHlQb3B1cC5qcydcbmltcG9ydCBMZW5zZml0UG9wdXAgZnJvbSAnLi4vLi4vZGlhZ25vc2lzL2Jvb2tpbmdTdW1tYXJ5L2xlbnNmaXRQb3B1cC5qcydcbmltcG9ydCBDb2RFcnJvclBvcHVwIGZyb20gJy4vQ29kRXJyb3JQb3B1cC5qcydcbmltcG9ydCBEaXNjbGFpbWVyIGZyb20gJy4uLy4uL2NvbW1vbnMvSG9tZS9zdGF0aWNEaXNjbGFpbWVyLmpzJ1xuaW1wb3J0IFZpcEdvbGRQYWNrYWdlIGZyb20gJy4vVmlwR29sZFBhY2thZ2UuanMnXG5pbXBvcnQgTm9uSXBkUG9wdXBWaWV3IGZyb20gJy4uLy4uL2NvbW1vbnMvbm9uSXBkUG9wdXAuanMnXG5cbmNvbnN0IE1PTlRIUyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWcnLCAnU2VwdCcsICdPY3QnLCAnTm92JywgJ0RlYyddXG5jb25zdCBXRUVLX0RBWVMgPSBbJ1N1bicsICdNb24nLCAnVHVlcycsICdXZWQnLCAnVGh1cicsICdGcmknLCAnU2F0J11cblxuY2xhc3MgUGF0aWVudERldGFpbHNOZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblxuICAgICAgICBsZXQgZG9jdG9yX2lkID0gdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclxuICAgICAgICBsZXQgaG9zcGl0YWxfaWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkQ2xpbmljXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdGVkRG9jdG9yOiBkb2N0b3JfaWQsXG4gICAgICAgICAgICBzZWxlY3RlZENsaW5pYzogaG9zcGl0YWxfaWQsXG4gICAgICAgICAgICBwYXltZW50RGF0YTogbnVsbCxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZXJyb3I6IFwiXCIsXG4gICAgICAgICAgICBvcGVuQ2FuY2VsbGF0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgIG9yZGVyX2lkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvdXBvbkNvZGU6ICcnLFxuICAgICAgICAgICAgcHJvZmlsZURhdGFGaWxsZWQ6IHRydWUsXG4gICAgICAgICAgICBzaG93VGltZUVycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIGNvdXBvbkFwcGxpZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNfY2FzaGJhY2s6IGZhbHNlLFxuICAgICAgICAgICAgLy8gb3JkZXJfaWQ6ICEhcGFyc2VkLm9yZGVyX2lkLFxuICAgICAgICAgICAgdXNlX3dhbGxldDogdHJ1ZSxcbiAgICAgICAgICAgIHByb2ZpbGVFcnJvcjogZmFsc2UsXG4gICAgICAgICAgICBjYXJ0X2l0ZW06IHBhcnNlZC5jYXJ0X2l0ZW0sXG4gICAgICAgICAgICB3aGF0c2FwcF9vcHRpbjogdHJ1ZSxcbiAgICAgICAgICAgIGZvcm1EYXRhOiAnJyxcbiAgICAgICAgICAgIHNob3dDb25maXJtYXRpb25Qb3B1cDogJ2Nsb3NlJyxcbiAgICAgICAgICAgIGNvdXBvbl9sb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHNlb0ZyaWVuZGx5OiB0aGlzLnByb3BzLm1hdGNoLnVybC5pbmNsdWRlcygnLWRwcCcpLFxuICAgICAgICAgICAgc2hvd0lwZExlYWRGb3JtOiB0cnVlLFxuICAgICAgICAgICAgaXNfcGF5bWVudF9jb3Vwb25fYXBwbGllZDogZmFsc2UsXG4gICAgICAgICAgICBkYXRlVGltZVNlbGVjdGVkVmFsdWU6IHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlRm9ybWF0ID8gdGhpcy5wcm9wcy5zZWxlY3RlZERhdGVGb3JtYXQgOiAnJyxcbiAgICAgICAgICAgIHNob3dTZWNvbmRQb3B1cDogZmFsc2UsXG4gICAgICAgICAgICBmaXJzdExlYWRJZDogJycsXG4gICAgICAgICAgICB0aW1lRXJyb3JUZXh0OiAnJyxcbiAgICAgICAgICAgIHBheV9idG5fbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGlzTWF0cml4OiBwYXJzZWQuaXNfbWF0cml4LFxuICAgICAgICAgICAgaXNFbWFpbE5vdFZhbGlkOiBmYWxzZSxcbiAgICAgICAgICAgIGlzRG9iTm90VmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd19sZW5zZml0X3BvcHVwOiBmYWxzZSxcbiAgICAgICAgICAgIGxlbnNmaXRfY291cG9uczogbnVsbCxcbiAgICAgICAgICAgIGxlbnNmaXRfZGVjbGluZTogZmFsc2UsXG4gICAgICAgICAgICBpc0xlbnNmaXRTcGVjaWZpYzogcGFyc2VkLmlzTGVuc2ZpdFNwZWNpZmljIHx8IGZhbHNlLFxuICAgICAgICAgICAgc2hvd19iYW5uZXI6IGZhbHNlLFxuICAgICAgICAgICAgYmFubmVyX2RlY2xpbmU6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd0dvbGRQcmljZUxpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0ZWRWaXBHb2xkUGFja2FnZUlkOiB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4pLmxlbmd0aCA/IHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4uaWQgOiAnJyxcbiAgICAgICAgICAgIHBheW1lbnRCdG5DbGlja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIGVuYWJsZURyb3BPZmZsZWFkOiB0cnVlLFxuICAgICAgICAgICAgc2hvd05vbklwZFBvcHVwOiBwYXJzZWQuc2hvd19wb3B1cCxcbiAgICAgICAgICAgIHRvX2JlX2ZvcmNlOiBwYXJzZWQuaXNfZG9jQWRzX2xlYWQgPyBwYXJzZWQuaXNfZG9jQWRzX2xlYWQgOiAxLFxuICAgICAgICAgICAgZGlzYWJsZV9wYWdlOnRydWUsXG4gICAgICAgICAgICBpc19sZWFkX2VuYWJsZWQ6dHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlV2FsbGV0VXNlKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNfcGF5bWVudF9jb3Vwb25fYXBwbGllZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZV93YWxsZXQ6IGZhbHNlIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlX3dhbGxldDogZS50YXJnZXQuY2hlY2tlZCB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlKHdoaWNoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbd2hpY2hdOiAhdGhpcy5zdGF0ZVt3aGljaF0gfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgLy9JZiB0b2tlbiBhbmQgYXBwb2ludG1lbnQgaWQgaXMgaW4gdXJsIHRoZW4gZG8gYWdlbnQgbG9naW4sIGFuZCBmZXRjaCB1c2VyIHJlbGF0ZWQgZGF0YSAmIHNldCBzdGF0ZSBvZiB0aGUgcGFnZSBcbiAgICAgICAgaWYgKHBhcnNlZC50b2tlbiAmJiBwYXJzZWQuYXBwb2ludG1lbnRfaWQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWdlbnRMb2dpbihwYXJzZWQudG9rZW4sICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdF9vcGRfcGF5bWVudF90eXBlKDEpXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRVc2VyUHJvZmlsZSgpXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaFRyYW5zYWN0aW9ucygpXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRDYXJ0SXRlbXMoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2V0VmlwR29sZFByaWNlTGlzdChudWxsKVxuICAgICAgICAvL1RvIHVwZGF0ZSBHb2xkIFBsYW5zIG9uIGNoYW5naW5nIHByb3BzXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4uaWQgJiYgKHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4uaWQgIT0gdGhpcy5zdGF0ZS5zZWxlY3RlZFZpcEdvbGRQYWNrYWdlSWQpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRWaXBHb2xkUGFja2FnZUlkOiB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmlkIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvL0F1dG8gU2VsZWN0IG9uIEFnZW50IExvZ2luIFVSTFxuICAgICAgICBpZiAocGFyc2VkICYmIHBhcnNlZC5kdW1teV9pZCkge1xuICAgICAgICAgICAgbGV0IGV4dHJhUGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIGR1bW15X2lkOiBwYXJzZWQuZHVtbXlfaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMucmV0cmlldmVNZW1iZXJzRGF0YSgnU0lOR0xFX1BVUkNIQVNFJywgZXh0cmFQYXJhbXMsIChyZXNwKSA9PiB7IC8vIHRvIHJldHJpZXZlIGFscmVhZHkgcHVzaGVkIG1lbWJlciBkYXRhIGluIGNhc2Ugb2YgYWdlbnQgb3IgcHJvcG9zZXIgaXQgc2VsZlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0T3BkQm9va2luZyhyZXNwLmRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VmlwR29sZFByaWNlTGlzdChyZXNwLmRhdGEucGx1c19wbGFuKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcyhcImVycm9yX2NvZGVcIikpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJDb3VsZCBub3QgY29tcGxldGUgcGF5bWVudCwgVHJ5IGFnYWluIVwiIH0pXG4gICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZSh0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGhvc3BpdGFsID0ge31cbiAgICAgICAgbGV0IGRvY3RvckRldGFpbHMgPSB0aGlzLnByb3BzLkRPQ1RPUlNbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl1cblxuICAgICAgICBpZiAoZG9jdG9yRGV0YWlscykge1xuICAgICAgICAgICAgbGV0IHsgaG9zcGl0YWxzIH0gPSBkb2N0b3JEZXRhaWxzXG5cbiAgICAgICAgICAgIGlmIChob3NwaXRhbHMgJiYgaG9zcGl0YWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGhvc3BpdGFscy5tYXAoKGhzcHRsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoc3B0bC5ob3NwaXRhbF9pZCA9PSB0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3NwaXRhbCA9IGhzcHRsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMoaG9zcGl0YWwpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3Vwb25BcHBsaWVkOiB0cnVlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QudGltZSAmJiBPYmplY3QudmFsdWVzKHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LnRpbWUpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3Vwb25BcHBsaWVkOiB0cnVlIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY291cG9uQXBwbGllZDogZmFsc2UgfSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIC8vSWYgY291cG9ucyBkYXRhIGV4aXN0IHRoZW4gYXBwbHkgZm9yIGJlc3QgY291cG9uc1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5kb2N0b3JDb3Vwb25zICYmIHRoaXMucHJvcHMuZG9jdG9yQ291cG9uc1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXSAmJiB0aGlzLnByb3BzLmRvY3RvckNvdXBvbnNbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl0ubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgZG9jdG9yQ291cG9ucyA9IHRoaXMucHJvcHMuZG9jdG9yQ291cG9uc1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LnNlbGVjdGVkQ2xpbmljID09IHRoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWMgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3Quc2VsZWN0ZWREb2N0b3IgPT0gdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcikge1xuXG4gICAgICAgICAgICAgICAgbGV0IHRyZWF0bWVudF9QcmljZSA9IDBcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRQcm9jZWR1cmVzID0ge31cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdW3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWNdICYmIHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl1bdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY10ucHJpY2UpIHtcblxuICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnRfUHJpY2UgPSB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdW3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWNdLnByaWNlLmRlYWxfcHJpY2UgfHwgMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgZGVhbF9wcmljZSA9IHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LnRpbWUuZGVhbF9wcmljZSArIHRyZWF0bWVudF9QcmljZVxuICAgICAgICAgICAgICAgIGxldCB7IHRvdGFsX2Ftb3VudF9wYXlhYmxlX3dpdGhvdXRfY291cG9uIH0gPSB0aGlzLmdldFNlbGVjdGVkVXNlckRhdGEodGhpcy5wcm9wcylcbiAgICAgICAgICAgICAgICBpZiAodG90YWxfYW1vdW50X3BheWFibGVfd2l0aG91dF9jb3Vwb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBkZWFsX3ByaWNlID0gdG90YWxfYW1vdW50X3BheWFibGVfd2l0aG91dF9jb3Vwb25cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ICdwYXlfYnRuX2xvYWRpbmcnOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hcHBseU9wZENvdXBvbnMoJzEnLCBkb2N0b3JDb3Vwb25zWzBdLmNvZGUsIGRvY3RvckNvdXBvbnNbMF0uY291cG9uX2lkLCB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yLCBkZWFsX3ByaWNlLCB0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljLCB0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZSwgdGhpcy5nZXRQcm9jZWR1cmVJZHModGhpcy5wcm9wcyksIHRoaXMuc3RhdGUuY2FydF9pdGVtLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY291cG9uQ29kZTogZG9jdG9yQ291cG9uc1swXS5jb2RlLCBjb3Vwb25JZDogZG9jdG9yQ291cG9uc1swXS5jb3Vwb25faWQgfHwgJycsIGlzX2Nhc2hiYWNrOiBkb2N0b3JDb3Vwb25zWzBdLmlzX2Nhc2hiYWNrIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdG9yQ291cG9uc1swXS5pc19wYXltZW50X3NwZWNpZmljKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZV93YWxsZXQ6IGZhbHNlLCBpc19wYXltZW50X2NvdXBvbl9hcHBsaWVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY291cG9uX2xvYWRpbmc6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0QW5kQXBwbHlCZXN0Q291cG9ucyhkZWFsX3ByaWNlLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgJ3BheV9idG5fbG9hZGluZyc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaG9zcGl0YWwpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGVhbF9wcmljZSA9IGhvc3BpdGFsLmRlYWxfcHJpY2VcbiAgICAgICAgICAgICAgICBsZXQgdHJlYXRtZW50X1ByaWNlID0gMFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdICYmIHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl1bdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY10gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXVt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXS5wcmljZSkge1xuXG4gICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudF9QcmljZSA9IHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl1bdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY10ucHJpY2UuZGVhbF9wcmljZSB8fCAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlYWxfcHJpY2UgKz0gdHJlYXRtZW50X1ByaWNlXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ICdwYXlfYnRuX2xvYWRpbmcnOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgbGV0IHsgdG90YWxfYW1vdW50X3BheWFibGVfd2l0aG91dF9jb3Vwb24gfSA9IHRoaXMuZ2V0U2VsZWN0ZWRVc2VyRGF0YSh0aGlzLnByb3BzKVxuICAgICAgICAgICAgICAgIGlmICh0b3RhbF9hbW91bnRfcGF5YWJsZV93aXRob3V0X2NvdXBvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYWxfcHJpY2UgPSB0b3RhbF9hbW91bnRfcGF5YWJsZV93aXRob3V0X2NvdXBvblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFwcGx5T3BkQ291cG9ucygnMScsIGRvY3RvckNvdXBvbnNbMF0uY29kZSwgZG9jdG9yQ291cG9uc1swXS5jb3Vwb25faWQsIHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3IsIGRlYWxfcHJpY2UsIHRoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWMsIHRoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlLCB0aGlzLmdldFByb2NlZHVyZUlkcyh0aGlzLnByb3BzKSwgdGhpcy5zdGF0ZS5jYXJ0X2l0ZW0sIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc19jYXNoYmFjazogZG9jdG9yQ291cG9uc1swXS5pc19jYXNoYmFjaywgY291cG9uQ29kZTogZG9jdG9yQ291cG9uc1swXS5jb2RlLCBjb3Vwb25JZDogZG9jdG9yQ291cG9uc1swXS5jb3Vwb25faWQgfHwgJycgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N0b3JDb3Vwb25zWzBdLmlzX3BheW1lbnRfc3BlY2lmaWMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlX3dhbGxldDogZmFsc2UsIGlzX3BheW1lbnRfY291cG9uX2FwcGxpZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3Vwb25fbG9hZGluZzogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRBbmRBcHBseUJlc3RDb3Vwb25zKGRlYWxfcHJpY2UsIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyAncGF5X2J0bl9sb2FkaW5nJzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL2F1dG8gYXBwbHkgY291cG9uc1xuICAgICAgICAgICAgbGV0IGRlYWxfcHJpY2UgPSAwXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QudGltZSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC50aW1lLmRlYWxfcHJpY2UpIHtcbiAgICAgICAgICAgICAgICBkZWFsX3ByaWNlID0gdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QudGltZS5kZWFsX3ByaWNlXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhvc3BpdGFsKSB7XG4gICAgICAgICAgICAgICAgZGVhbF9wcmljZSA9IGhvc3BpdGFsLmRlYWxfcHJpY2VcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHRyZWF0bWVudF9QcmljZSA9IDBcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdICYmIHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl1bdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY10gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXVt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXS5wcmljZSkge1xuXG4gICAgICAgICAgICAgICAgdHJlYXRtZW50X1ByaWNlID0gdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXVt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXS5wcmljZS5kZWFsX3ByaWNlIHx8IDBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVhbF9wcmljZSArPSB0cmVhdG1lbnRfUHJpY2VcbiAgICAgICAgICAgIC8vYXV0byBhcHBseSBjb3Vwb24gaWYgbm8gY291cG9uIGlzIGFwbGxpZWRcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yICYmIGRlYWxfcHJpY2UgJiYgdGhpcy5wcm9wcy5jb3Vwb25BdXRvQXBwbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yICYmIGRlYWxfcHJpY2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgJ3BheV9idG5fbG9hZGluZyc6IHRydWUgfSlcbiAgICAgICAgICAgICAgICB0aGlzLmdldEFuZEFwcGx5QmVzdENvdXBvbnMoZGVhbF9wcmljZSwgZmFsc2UpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVzZXRPcGRDb3Vwb25zKClcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlX3dhbGxldDogdHJ1ZSwgaXNfcGF5bWVudF9jb3Vwb25fYXBwbGllZDogZmFsc2UgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyAncGF5X2J0bl9sb2FkaW5nJzogZmFsc2UgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmlzTGVuc2ZpdFNwZWNpZmljKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1fYm9va2luZycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtX2Jvb2tpbmcnKS5jbGljaygpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMzAwMClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VuZEVtYWlsTm90aWZpY2F0aW9uKClcbiAgICB9XG5cbiAgICBnZXRWaXBHb2xkUHJpY2VMaXN0KGFnZW50X3NlbGVjdGVkX3BsYW5faWQpIHtcbiAgICAgICAgbGV0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgZXh0cmFQYXJhbXMgPSB7XG4gICAgICAgICAgICBcImRvY3RvclwiOiB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yLFxuICAgICAgICAgICAgXCJob3NwaXRhbFwiOiB0aGlzLnByb3BzLnNlbGVjdGVkQ2xpbmljLFxuICAgICAgICAgICAgXCJnb2xkX3ZpcF9wbGFuXCI6IFtdLFxuICAgICAgICAgICAgXCJzdGFydF9kYXRlXCI6IG51bGwsXG4gICAgICAgICAgICBcInN0YXJ0X3RpbWVcIjogbnVsbCxcbiAgICAgICAgICAgIFwidGltZV9zbG90X3N0YXJ0XCI6IG51bGxcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmlkKSB7XG4gICAgICAgICAgICBleHRyYVBhcmFtc1snYWxyZWFkeV9zZWxlY3RlZF9wbGFuJ10gPSB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmlkXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnNlZCAmJiBwYXJzZWQuZHVtbXlfaWQgJiYgYWdlbnRfc2VsZWN0ZWRfcGxhbl9pZCkge1xuICAgICAgICAgICAgZXh0cmFQYXJhbXNbJ2FscmVhZHlfc2VsZWN0ZWRfcGxhbiddID0gYWdlbnRfc2VsZWN0ZWRfcGxhbl9pZFxuICAgICAgICB9XG4gICAgICAgIGV4dHJhUGFyYW1zWydwYXltZW50X3R5cGUnXSA9IHRoaXMucHJvcHMucGF5bWVudF90eXBlXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0T3BkVmlwR29sZFBsYW5zKGV4dHJhUGFyYW1zKSAvLyB0byBnZXQgZ29sZC92aXAgcGxhbnMgc3BlY2lmaWMgdG8gcGFydGljdWxhciBkb2N0b3IvaG9zcGl0YWxcbiAgICB9XG5cbiAgICBnZXRWYWxpZENvdXBvbihjb3Vwb25zKSB7XG4gICAgICAgIGxldCB2YWxpZENvdXBvbiA9IG51bGxcbiAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gY291cG9ucykge1xuICAgICAgICAgICAgaWYgKGNvdXBvbnNbaW5kZXhdLnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRDb3Vwb24gPSBjb3Vwb25zW2luZGV4XVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbGlkQ291cG9uXG4gICAgfVxuXG4gICAgZ2V0QW5kQXBwbHlCZXN0Q291cG9ucyhkZWFsX3ByaWNlID0gMCwgaXNMZW5zZml0LCBsZW5zRml0RGF0YSkge1xuICAgICAgICB0aGlzLnByb3BzLmdldENvdXBvbnMoe1xuICAgICAgICAgICAgcHJvZHVjdElkOiAxLCBkZWFsX3ByaWNlOiBkZWFsX3ByaWNlLCBkb2N0b3JfaWQ6IHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3IsIGhvc3BpdGFsX2lkOiB0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljLCBwcm9maWxlX2lkOiB0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZSwgcHJvY2VkdXJlc19pZHM6IHRoaXMuZ2V0UHJvY2VkdXJlSWRzKHRoaXMucHJvcHMpLCBjYXJ0X2l0ZW06IHRoaXMuc3RhdGUuY2FydF9pdGVtLFxuICAgICAgICAgICAgY2I6IChjb3Vwb25zKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdXBvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbGlkQ291cG9uXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0xlbnNmaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkQ291cG9uID0gbGVuc0ZpdERhdGFcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkQ291cG9uID0gdGhpcy5nZXRWYWxpZENvdXBvbihjb3Vwb25zKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZENvdXBvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzX2Nhc2hiYWNrOiB2YWxpZENvdXBvbi5pc19jYXNoYmFjaywgY291cG9uQ29kZTogdmFsaWRDb3Vwb24uY29kZSwgY291cG9uSWQ6IHZhbGlkQ291cG9uLmNvdXBvbl9pZCB8fCAnJywgcGF5X2J0bl9sb2FkaW5nOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFwcGx5Q291cG9ucygnMScsIHZhbGlkQ291cG9uLCB2YWxpZENvdXBvbi5jb3Vwb25faWQsIHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3IsIChzdWNjZXNzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ICdwYXlfYnRuX2xvYWRpbmcnOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB7IHRvdGFsX2Ftb3VudF9wYXlhYmxlX3dpdGhvdXRfY291cG9uIH0gPSB0aGlzLmdldFNlbGVjdGVkVXNlckRhdGEodGhpcy5wcm9wcylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b3RhbF9hbW91bnRfcGF5YWJsZV93aXRob3V0X2NvdXBvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVhbF9wcmljZSA9IHRvdGFsX2Ftb3VudF9wYXlhYmxlX3dpdGhvdXRfY291cG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFwcGx5T3BkQ291cG9ucygnMScsIHZhbGlkQ291cG9uLmNvZGUsIHZhbGlkQ291cG9uLmNvdXBvbl9pZCwgdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvciwgZGVhbF9wcmljZSwgdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pYywgdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGUsIHRoaXMuZ2V0UHJvY2VkdXJlSWRzKHRoaXMucHJvcHMpLCB0aGlzLnN0YXRlLmNhcnRfaXRlbSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyAncGF5X2J0bl9sb2FkaW5nJzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRDb3Vwb24uaXNfcGF5bWVudF9zcGVjaWZpYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2Vfd2FsbGV0OiBmYWxzZSwgaXNfcGF5bWVudF9jb3Vwb25fYXBwbGllZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTGVuc2ZpdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93X2xlbnNmaXRfcG9wdXA6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNMZW5zZml0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dfbGVuc2ZpdF9wb3B1cDogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVzZXRPcGRDb3Vwb25zKClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2Vfd2FsbGV0OiB0cnVlLCBpc19wYXltZW50X2NvdXBvbl9hcHBsaWVkOiBmYWxzZSwgJ3BheV9idG5fbG9hZGluZyc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNMZW5zZml0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd19sZW5zZml0X3BvcHVwOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVzZXRPcGRDb3Vwb25zKClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZV93YWxsZXQ6IHRydWUsIGlzX3BheW1lbnRfY291cG9uX2FwcGxpZWQ6IGZhbHNlLCAncGF5X2J0bl9sb2FkaW5nJzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdXBvbl9sb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIC8vUmVmIHRvIHVwZGF0ZSBkYXRlIGV2ZXJ5IHRpbWUgb24gcm91dGVcbiAgICAgICAgaWYgKFNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Rpc2FibGVfcGFnZTpmYWxzZX0pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5leHRQcm9wcy5zZWxlY3RlZERhdGVGb3JtYXQgJiYgbmV4dFByb3BzLnNlbGVjdGVkRGF0ZUZvcm1hdCAhPSB0aGlzLnN0YXRlLmRhdGVUaW1lU2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGVUaW1lU2VsZWN0ZWRWYWx1ZTogbmV4dFByb3BzLnNlbGVjdGVkRGF0ZUZvcm1hdCB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy9UbyB1cGRhdGUgR29sZCBQbGFucyBvbiBjaGFuZ2luZyBwcm9wc1xuICAgICAgICBpZiAobmV4dFByb3BzICYmIG5leHRQcm9wcy5zZWxlY3RlZF92aXBfcGxhbiAmJiBuZXh0UHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4uaWQgJiYgKG5leHRQcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5pZCAhPSB0aGlzLnN0YXRlLnNlbGVjdGVkVmlwR29sZFBhY2thZ2VJZCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFZpcEdvbGRQYWNrYWdlSWQ6IG5leHRQcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5pZCB9KVxuICAgICAgICB9XG4gICAgICAgIC8qaWYgKHRoaXMuc3RhdGUuZW5hYmxlRHJvcE9mZmxlYWQgJiYgU1RPUkFHRS5jaGVja0F1dGgoKSAmJiAhU1RPUkFHRS5pc0FnZW50KCkpIHtcbiAgICAgICAgICAgIHRoaXMubm9uSXBkTGVhZHMoKVxuICAgICAgICB9Ki9cbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmNvdXBvbkFwcGxpZWQgJiYgbmV4dFByb3BzLkRPQ1RPUlNbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl0gfHwgKHRoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlICE9IG5leHRQcm9wcy5zZWxlY3RlZFByb2ZpbGUpKSB7XG4gICAgICAgICAgICBsZXQgaG9zcGl0YWwgPSB7fVxuICAgICAgICAgICAgbGV0IGRvY3RvckRldGFpbHMgPSBuZXh0UHJvcHMuRE9DVE9SU1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXVxuXG4gICAgICAgICAgICBpZiAoZG9jdG9yRGV0YWlscykge1xuICAgICAgICAgICAgICAgIGxldCB7IGhvc3BpdGFscyB9ID0gZG9jdG9yRGV0YWlsc1xuXG4gICAgICAgICAgICAgICAgaWYgKGhvc3BpdGFscyAmJiBob3NwaXRhbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvc3BpdGFscy5tYXAoKGhzcHRsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaHNwdGwuaG9zcGl0YWxfaWQgPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3BpdGFsID0gaHNwdGxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHMuZG9jdG9yQ291cG9ucyAmJiBuZXh0UHJvcHMuZG9jdG9yQ291cG9uc1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXSAmJiBuZXh0UHJvcHMuZG9jdG9yQ291cG9uc1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgZG9jdG9yQ291cG9ucyA9IG5leHRQcm9wcy5kb2N0b3JDb3Vwb25zW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdXG5cbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnZhbHVlcyhob3NwaXRhbCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkZWFsX3ByaWNlID0gaG9zcGl0YWwuZGVhbF9wcmljZVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmVhdG1lbnRfUHJpY2UgPSAwXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0UHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl0gJiYgbmV4dFByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdW3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWNdICYmIG5leHRQcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXVt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXS5wcmljZSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnRfUHJpY2UgPSBuZXh0UHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl1bdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY10ucHJpY2UuZGVhbF9wcmljZSB8fCAwXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBkZWFsX3ByaWNlICs9IHRyZWF0bWVudF9QcmljZVxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgdmFsaWRDb3Vwb24gPSB0aGlzLmdldFZhbGlkQ291cG9uKGRvY3RvckNvdXBvbnMpXG4gICAgICAgICAgICAgICAgICAgIGxldCB7IHRvdGFsX2Ftb3VudF9wYXlhYmxlX3dpdGhvdXRfY291cG9uIH0gPSB0aGlzLmdldFNlbGVjdGVkVXNlckRhdGEobmV4dFByb3BzKVxuICAgICAgICAgICAgICAgICAgICBpZiAodG90YWxfYW1vdW50X3BheWFibGVfd2l0aG91dF9jb3Vwb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVhbF9wcmljZSA9IHRvdGFsX2Ftb3VudF9wYXlhYmxlX3dpdGhvdXRfY291cG9uXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hcHBseU9wZENvdXBvbnMoJzEnLCBkb2N0b3JDb3Vwb25zWzBdLmNvZGUsIGRvY3RvckNvdXBvbnNbMF0uY291cG9uX2lkLCB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yLCBkZWFsX3ByaWNlLCB0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljLCBuZXh0UHJvcHMuc2VsZWN0ZWRQcm9maWxlLCB0aGlzLmdldFByb2NlZHVyZUlkcyhuZXh0UHJvcHMpLCB0aGlzLnN0YXRlLmNhcnRfaXRlbSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNfY2FzaGJhY2s6IGRvY3RvckNvdXBvbnNbMF0uaXNfY2FzaGJhY2ssIGNvdXBvbkNvZGU6IGRvY3RvckNvdXBvbnNbMF0uY29kZSwgY291cG9uSWQ6IGRvY3RvckNvdXBvbnNbMF0uY291cG9uX2lkIHx8ICcnLCBjb3Vwb25BcHBsaWVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3RvckNvdXBvbnNbMF0uaXNfcGF5bWVudF9zcGVjaWZpYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlX3dhbGxldDogZmFsc2UsIGlzX3BheW1lbnRfY291cG9uX2FwcGxpZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3Vwb25fbG9hZGluZzogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0QW5kQXBwbHlCZXN0Q291cG9ucyhkZWFsX3ByaWNlLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyAncGF5X2J0bl9sb2FkaW5nJzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBkZWFsX3ByaWNlID0gMFxuXG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMoaG9zcGl0YWwpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBkZWFsX3ByaWNlID0gaG9zcGl0YWwuZGVhbF9wcmljZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCB0cmVhdG1lbnRfUHJpY2UgPSAwXG4gICAgICAgICAgICAgICAgaWYgKG5leHRQcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXSAmJiBuZXh0UHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl1bdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY10gJiYgbmV4dFByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdW3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWNdLnByaWNlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50X1ByaWNlID0gbmV4dFByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdW3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWNdLnByaWNlLmRlYWxfcHJpY2UgfHwgMFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRlYWxfcHJpY2UgKz0gdHJlYXRtZW50X1ByaWNlXG5cbiAgICAgICAgICAgICAgICBpZiAobmV4dFByb3BzLmRvY3RvckNvdXBvbnMgJiYgbmV4dFByb3BzLmRvY3RvckNvdXBvbnNbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl0gJiYgbmV4dFByb3BzLmRvY3RvckNvdXBvbnNbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl0ubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXNldE9wZENvdXBvbnMoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlX3dhbGxldDogdHJ1ZSwgaXNfcGF5bWVudF9jb3Vwb25fYXBwbGllZDogZmFsc2UsICdwYXlfYnRuX2xvYWRpbmcnOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy9hdXRvIGFwcGx5IGNvdXBvbiBpZiBubyBjb3Vwb24gaXMgYXBsbGllZFxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvciAmJiBkZWFsX3ByaWNlICYmIG5leHRQcm9wcy5jb3Vwb25BdXRvQXBwbHkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMoaG9zcGl0YWwpLmxlbmd0aCAmJiBob3NwaXRhbC52aXAgJiYgT2JqZWN0LmtleXMoaG9zcGl0YWwudmlwKS5sZW5ndGggJiYgaG9zcGl0YWwudmlwLmlzX3ZpcF9tZW1iZXIgJiYgaG9zcGl0YWwudmlwLmNvdmVyX3VuZGVyX3ZpcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVhbF9wcmljZSA9IGhvc3BpdGFsLnZpcC52aXBfYW1vdW50ICsgaG9zcGl0YWwudmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvciAmJiBkZWFsX3ByaWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldENvdXBvbnMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogMSwgZGVhbF9wcmljZTogZGVhbF9wcmljZSwgZG9jdG9yX2lkOiB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yLCBob3NwaXRhbF9pZDogdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pYywgcHJvZmlsZV9pZDogbmV4dFByb3BzLnNlbGVjdGVkUHJvZmlsZSwgcHJvY2VkdXJlc19pZHM6IHRoaXMuZ2V0UHJvY2VkdXJlSWRzKG5leHRQcm9wcyksIGNhcnRfaXRlbTogdGhpcy5zdGF0ZS5jYXJ0X2l0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2I6IChjb3Vwb25zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3Vwb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsaWRDb3Vwb24gPSB0aGlzLmdldFZhbGlkQ291cG9uKGNvdXBvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRDb3Vwb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNfY2FzaGJhY2s6IHZhbGlkQ291cG9uLmlzX2Nhc2hiYWNrLCBjb3Vwb25Db2RlOiB2YWxpZENvdXBvbi5jb2RlLCBjb3Vwb25JZDogdmFsaWRDb3Vwb24uY291cG9uX2lkIHx8ICcnLCBjb3Vwb25BcHBsaWVkOiB0cnVlLCAncGF5X2J0bl9sb2FkaW5nJzogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwbHlDb3Vwb25zKCcxJywgdmFsaWRDb3Vwb24sIHZhbGlkQ291cG9uLmNvdXBvbl9pZCwgdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvciwgKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ICdwYXlfYnRuX2xvYWRpbmcnOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHsgdG90YWxfYW1vdW50X3BheWFibGVfd2l0aG91dF9jb3Vwb24gfSA9IHRoaXMuZ2V0U2VsZWN0ZWRVc2VyRGF0YShuZXh0UHJvcHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvdGFsX2Ftb3VudF9wYXlhYmxlX3dpdGhvdXRfY291cG9uICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVhbF9wcmljZSA9IHRvdGFsX2Ftb3VudF9wYXlhYmxlX3dpdGhvdXRfY291cG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwbHlPcGRDb3Vwb25zKCcxJywgdmFsaWRDb3Vwb24uY29kZSwgdmFsaWRDb3Vwb24uY291cG9uX2lkLCB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yLCBkZWFsX3ByaWNlLCB0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljLCBuZXh0UHJvcHMuc2VsZWN0ZWRQcm9maWxlLCB0aGlzLmdldFByb2NlZHVyZUlkcyhuZXh0UHJvcHMpLCB0aGlzLnN0YXRlLmNhcnRfaXRlbSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgJ3BheV9idG5fbG9hZGluZyc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRDb3Vwb24uaXNfcGF5bWVudF9zcGVjaWZpYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlX3dhbGxldDogZmFsc2UsIGlzX3BheW1lbnRfY291cG9uX2FwcGxpZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3Vwb25BcHBsaWVkOiB0cnVlLCB1c2Vfd2FsbGV0OiB0cnVlLCBpc19wYXltZW50X2NvdXBvbl9hcHBsaWVkOiBmYWxzZSwgJ3BheV9idG5fbG9hZGluZyc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXNldE9wZENvdXBvbnMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdXBvbkFwcGxpZWQ6IHRydWUsIHVzZV93YWxsZXQ6IHRydWUsIGlzX3BheW1lbnRfY291cG9uX2FwcGxpZWQ6IGZhbHNlLCAncGF5X2J0bl9sb2FkaW5nJzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVzZXRPcGRDb3Vwb25zKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY291cG9uQXBwbGllZDogdHJ1ZSwgdXNlX3dhbGxldDogdHJ1ZSwgaXNfcGF5bWVudF9jb3Vwb25fYXBwbGllZDogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVzZXRPcGRDb3Vwb25zKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvZmlsZURhdGFDb21wbGV0ZWQoZGF0YSkge1xuICAgICAgICAvL2Z1bmN0aW9uIHRvIGNoZWNrIGlmIHByb2ZpbGUgZGF0YSBpcyBmaWxsZWQgYnkgdXNlciBvciBub3QsIGluIGNhc2Ugb2Ygbm9uLWxvZ2dlZCBpbiB1c2VyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb3JtRGF0YTogeyAuLi5kYXRhIH0gfSlcbiAgICAgICAgaWYgKGRhdGEubmFtZSA9PSAnJyB8fCBkYXRhLmdlbmRlciA9PSAnJyB8fCBkYXRhLnBob25lTnVtYmVyID09ICcnIHx8IGRhdGEuZW1haWwgPT0gJycgfHwgIWRhdGEub3RwVmVyaWZ5U3VjY2VzcyB8fCBkYXRhLmRvYiA9PSAnJyB8fCBkYXRhLmRvYiA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnBhdGllbnREZXRhaWxzKGRhdGEpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZmlsZURhdGFGaWxsZWQ6IGZhbHNlLCBzaG93VGltZUVycm9yOiBmYWxzZSB9KVxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEub3RwVmVyaWZ5U3VjY2Vzcykge1xuICAgICAgICAgICAgbGV0IGNsZWFyX2RhdGEgPSB7fVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5wYXRpZW50RGV0YWlscyhjbGVhcl9kYXRhKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2ZpbGVEYXRhRmlsbGVkOiB0cnVlLCBzaG93VGltZUVycm9yOiBmYWxzZSwgcHJvZmlsZUVycm9yOiBmYWxzZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UHJvY2VkdXJlSWRzKHByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXSAmJiBwcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXVt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXSAmJiBwcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXVt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXS5jYXRlZ29yaWVzKSB7XG4gICAgICAgICAgICBsZXQgcHJvY2VkdXJlX2lkcyA9IFtdXG5cbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXMocHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl1bdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY10uY2F0ZWdvcmllcykubWFwKChwcm9jZWR1cmUpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9jZWR1cmVfaWRzID0gcHJvY2VkdXJlX2lkcy5jb25jYXQocHJvY2VkdXJlLmZpbHRlcih4ID0+IHguaXNfc2VsZWN0ZWQpLm1hcCh4ID0+IHgucHJvY2VkdXJlX2lkKSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmIChwcm9jZWR1cmVfaWRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9jZWR1cmVfaWRzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBnZXRVdG1UYWdzKCkge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IHV0bV90YWdzID0ge1xuICAgICAgICAgICAgdXRtX3NvdXJjZTogcGFyc2VkLnV0bV9zb3VyY2UgfHwgJycsXG4gICAgICAgICAgICB1dG1fbWVkaXVtOiBwYXJzZWQudXRtX21lZGl1bSB8fCAnJyxcbiAgICAgICAgICAgIHV0bV90ZXJtOiBwYXJzZWQudXRtX3Rlcm0gfHwgJycsXG4gICAgICAgICAgICB1dG1fY2FtcGFpZ246IHBhcnNlZC51dG1fY2FtcGFpZ24gfHwgJycsXG4gICAgICAgICAgICByZWZlcnJlcjogZG9jdW1lbnQucmVmZXJyZXIgfHwgJycsXG4gICAgICAgICAgICBnY2xpZDogcGFyc2VkLmdjbGlkIHx8ICcnXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MgJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICB1dG1fdGFncyA9IHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmZpbHRlcih4ID0+IHgudHlwZSA9PSBcImNvbW1vbl94dHJhX3RhZ3NcIilbMF0udXRtX3RhZ3NcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1dG1fdGFnc1xuICAgIH1cbiAgICBwcm9jZWVkKGRhdGVQaWNrZWQsIHBhdGllbnQsIGFkZFRvQ2FydCwgdG90YWxfcHJpY2UsIHRvdGFsX3dhbGxldF9iYWxhbmNlLCBpc19zZWxlY3RlZF91c2VyX2luc3VyYW5jZV9zdGF0dXMsIGV4dHJhUGFyYW1zLCBlKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG4gICAgICAgIC8vQ2hlY2sgaWYgcGF0aWVudCBpcyBzZWxlY3RlZCBvciBub3RcbiAgICAgICAgaWYgKCFwYXRpZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5mb3JtRGF0YS5uYW1lICE9ICcnICYmIHRoaXMuc3RhdGUuZm9ybURhdGEuZ2VuZGVyICE9ICcnICYmIHRoaXMuc3RhdGUuZm9ybURhdGEucGhvbmVOdW1iZXIgIT0gJycgJiYgdGhpcy5zdGF0ZS5mb3JtRGF0YS5lbWFpbCAhPSAnJyAmJiAhdGhpcy5zdGF0ZS5mb3JtRGF0YS5vdHBWZXJpZnlTdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2ZpbGVFcnJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIHZlcmlmeSB5b3VyIG1vYmlsZSBuby4gdG8gY29udGludWVcIiB9KTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2ZpbGVFcnJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIEFkZCBQYXRpZW50XCIgfSk7XG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9DaGVjayBpZiBwYXRpZW50IGVtYWlsaWQgZXhpc3Qgb3Igbm90XG4gICAgICAgIC8vIGlmIChwYXRpZW50ICYmICFwYXRpZW50LmVtYWlsKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgaXNFbWFpbE5vdFZhbGlkOiB0cnVlIH0pXG4gICAgICAgIC8vICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIEVudGVyIFlvdXIgRW1haWwgSWRcIiB9KVxuICAgICAgICAvLyAgICAgcmV0dXJuXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy9DaGVjayBpZiBwYXRpZW50IGRvYiBleGlzdCBvciBub3RcbiAgICAgICAgaWYgKHBhdGllbnQgJiYgIXBhdGllbnQuZG9iKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNEb2JOb3RWYWxpZDogdHJ1ZSB9KVxuICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBFbnRlciBZb3VyIERhdGUgb2YgQmlydGhcIiB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvL1RvIGNsYWltIGluc3VyYW5jZSBzdGF0dXMgJiBjbGFpbVxuICAgICAgICBpZiAocGF0aWVudCAmJiBpc19zZWxlY3RlZF91c2VyX2luc3VyYW5jZV9zdGF0dXMgJiYgaXNfc2VsZWN0ZWRfdXNlcl9pbnN1cmFuY2Vfc3RhdHVzID09IDQpIHtcbiAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJZb3VyIGRvY3VtZW50cyBmcm9tIHRoZSBsYXN0IGNsYWltIGFyZSB1bmRlciB2ZXJpZmljYXRpb24uUGxlYXNlIHdyaXRlIHRvIGN1c3RvbWVyY2FyZUBkb2NwcmltZS5jb20gZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIgfSk7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIC8vY2hlY2sgaWYgdGltZXNsb3QgaXMgc2VsY3RlZCBieSB1c2VyIG9yIG5vdFxuICAgICAgICBpZiAoIWRhdGVQaWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93VGltZUVycm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBwaWNrIGEgdGltZSBzbG90LlwiIH0pO1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5wcm9maWxlRGF0YUZpbGxlZCkge1xuICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBmaWxsIHRoZSBpbmZvXCIgfSk7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChlLnRhcmdldC5kYXRhc2V0LmRpc2FibGVkID09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIC8vQ2hlY2sgaWYgQ292ZXJlZCBVbmRlciBJbnN1cmFuY2UgXG5cbiAgICAgICAgbGV0IGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlID0gZmFsc2VcbiAgICAgICAgbGV0IGlzX3NlbGVjdGVkX3VzZXJfaW5zdXJlZCA9IGZhbHNlXG4gICAgICAgIGxldCBpc192aXBfYXBwbGljYWJsZSA9IGZhbHNlXG4gICAgICAgIGxldCBpc19nb2xkX2FwcGxpY2FibGUgPSBmYWxzZVxuICAgICAgICBsZXQgaXNfc2VsZWN0ZWRfdXNlcl92aXAgPSB0cnVlIC8vIHRvIGNoZWNrIGlzIHBsdXNfcGxhbiBpcyBhcHBsaWNhYmxlIG9yIG5vdFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QuZGF0ZSAmJiB0aGlzLnByb3BzLkRPQ1RPUlNbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl0pIHtcbiAgICAgICAgICAgIGxldCBwcmljZURhdGEgPSB7IC4uLnRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LnRpbWUgfVxuICAgICAgICAgICAgbGV0IGhvc3BpdGFscyA9IHRoaXMucHJvcHMuRE9DVE9SU1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXS5ob3NwaXRhbHNcbiAgICAgICAgICAgIGxldCBob3NwaXRhbCA9IG51bGxcblxuICAgICAgICAgICAgaWYgKGhvc3BpdGFscyAmJiBob3NwaXRhbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaG9zcGl0YWxzLm1hcCgoaHNwdGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhzcHRsLmhvc3BpdGFsX2lkID09IHRoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3BpdGFsID0gaHNwdGxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChob3NwaXRhbCAmJiBob3NwaXRhbC5pbnN1cmFuY2UpIHtcbiAgICAgICAgICAgICAgICBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSA9IChwYXJzZUludChwcmljZURhdGEuZGVhbF9wcmljZSkgPD0gaG9zcGl0YWwuaW5zdXJhbmNlLmluc3VyYW5jZV90aHJlc2hvbGRfYW1vdW50KSAmJiBob3NwaXRhbC5pbnN1cmFuY2UuaXNfaW5zdXJhbmNlX2NvdmVyZWRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhvc3BpdGFsICYmIGhvc3BpdGFsLnZpcCkge1xuICAgICAgICAgICAgICAgIGlzX3ZpcF9hcHBsaWNhYmxlID0gaG9zcGl0YWwudmlwLmlzX3ZpcF9tZW1iZXIgJiYgaG9zcGl0YWwudmlwLmNvdmVyX3VuZGVyX3ZpcFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMucHJvZmlsZXMgJiYgdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV0gJiYgIXRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdLmlzRHVtbXlVc2VyKSB7XG5cbiAgICAgICAgICAgIGlzX3NlbGVjdGVkX3VzZXJfaW5zdXJlZCA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdLmlzX2luc3VyZWRcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMucHJvZmlsZXMpLm1hcChmdW5jdGlvbiAoW2tleSwgdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmlzX3ZpcF9tZW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNfc2VsZWN0ZWRfdXNlcl92aXAgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgPSBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiBpc19zZWxlY3RlZF91c2VyX2luc3VyZWRcblxuICAgICAgICAvLyBSZWFjdCBndWFyYW50ZWVzIHRoYXQgc2V0U3RhdGUgaW5zaWRlIGludGVyYWN0aXZlIGV2ZW50cyAoc3VjaCBhcyBjbGljaykgaXMgZmx1c2hlZCBhdCBicm93c2VyIGV2ZW50IGJvdW5kYXJ5XG4gICAgICAgIGxldCBzaG93X2xlbnNmaXQgPSB0aGlzLnByb3BzLkRPQ1RPUlNbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl0gJiYgdGhpcy5wcm9wcy5ET0NUT1JTW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdLmxlbnNmaXRfb2ZmZXIgPyB0aGlzLnByb3BzLkRPQ1RPUlNbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl0ubGVuc2ZpdF9vZmZlci5hcHBsaWNhYmxlIDogZmFsc2VcbiAgICAgICAgbGV0IGxlbnNmaXRfY291cG9ucyA9IHRoaXMucHJvcHMuRE9DVE9SU1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXSAmJiB0aGlzLnByb3BzLkRPQ1RPUlNbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl0ubGVuc2ZpdF9vZmZlciA/IHRoaXMucHJvcHMuRE9DVE9SU1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXS5sZW5zZml0X29mZmVyLmNvdXBvbiA6IHt9XG5cbiAgICAgICAgLyppZighdGhpcy5zdGF0ZS5zaG93X2xlbnNmaXRfcG9wdXAgJiYgIXRoaXMuc3RhdGUubGVuc2ZpdF9kZWNsaW5lICYmIHNob3dfbGVuc2ZpdCAmJiAhaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgJiYgbGVuc2ZpdF9jb3Vwb25zICYmIE9iamVjdC5rZXlzKGxlbnNmaXRfY291cG9ucykubGVuZ3RoID4gMCAmJiB0aGlzLnN0YXRlLmNvdXBvbklkICE9bGVuc2ZpdF9jb3Vwb25zLmNvdXBvbl9pZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd19sZW5zZml0X3BvcHVwOnRydWUsIGxlbnNmaXRfY291cG9uczpsZW5zZml0X2NvdXBvbnN9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0qL1xuICAgICAgICAvLyBpZiAoZmFsc2UgJiYgIXRoaXMuc3RhdGUuc2hvd19iYW5uZXIgJiYgIXRoaXMuc3RhdGUuYmFubmVyX2RlY2xpbmUgJiYgIWlzX3ZpcF9hcHBsaWNhYmxlICYmICFhZGRUb0NhcnQgJiYgKHRvdGFsX3ByaWNlID09IDAgfHwgIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlIHx8ICh0aGlzLnN0YXRlLnVzZV93YWxsZXQgJiYgdG90YWxfd2FsbGV0X2JhbGFuY2UgPiAwKSkpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93X2Jhbm5lcjogdHJ1ZSB9KVxuICAgICAgICAvLyAgICAgcmV0dXJuXG4gICAgICAgIC8vIH1cblxuICAgICAgICAvL0NvbmZpcm1hdGlvbiBwb3B1cCBmb3IgdGhlIHRlc3RzLCB3aG9zZSBhbW91bnQgcGF5YWJsZSBpcyAwXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dDb25maXJtYXRpb25Qb3B1cCA9PSAnY2xvc2UnICYmICFhZGRUb0NhcnQgJiYgKHRvdGFsX3ByaWNlID09IDAgfHwgKGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmICh0aGlzLnByb3BzLnBheW1lbnRfdHlwZSA9PSAxIHx8IHRoaXMucHJvcHMucGF5bWVudF90eXBlID09IDYpKSB8fCAodGhpcy5zdGF0ZS51c2Vfd2FsbGV0ICYmIHRvdGFsX3dhbGxldF9iYWxhbmNlID4gMCkpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0NvbmZpcm1hdGlvblBvcHVwOiAnb3BlbicsIHNob3dfYmFubmVyOiBmYWxzZSB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sb2FkaW5nKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnBheW1lbnRfdHlwZSA9PSA2ICYmIFNUT1JBR0UuaXNBZ2VudCgpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IFwiXCIgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlLCBlcnJvcjogXCJcIiB9KVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHN0YXJ0X2RhdGUgPSB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5kYXRlXG4gICAgICAgIGxldCBzdGFydF90aW1lID0gdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QudGltZS52YWx1ZVxuICAgICAgICBsZXQgdXRtX3RhZ3MgPSB0aGlzLmdldFV0bVRhZ3MoKVxuICAgICAgICBsZXQgcG9zdERhdGEgPSB7XG4gICAgICAgICAgICBkb2N0b3I6IHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3IsXG4gICAgICAgICAgICBob3NwaXRhbDogdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pYyxcbiAgICAgICAgICAgIHByb2ZpbGU6IHRoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlLFxuICAgICAgICAgICAgc3RhcnRfZGF0ZSwgc3RhcnRfdGltZSxcbiAgICAgICAgICAgIHBheW1lbnRfdHlwZTogdGhpcy5wcm9wcy5wYXltZW50X3R5cGUsXG4gICAgICAgICAgICB1c2Vfd2FsbGV0OiB0aGlzLnByb3BzLnBheW1lbnRfdHlwZSA9PSA2ID8gZmFsc2UgOiB0aGlzLnN0YXRlLnVzZV93YWxsZXQsXG4gICAgICAgICAgICBjYXJ0X2l0ZW06IHRoaXMuc3RhdGUuY2FydF9pdGVtLFxuICAgICAgICAgICAgdXRtX3RhZ3M6IHV0bV90YWdzLFxuICAgICAgICAgICAgZnJvbV93ZWI6IHRydWVcbiAgICAgICAgfVxuICAgICAgICBsZXQgdmlzaXRvcl9pbmZvID0gR1RNLmdldFZpc2l0b3JJbmZvKClcbiAgICAgICAgaWYgKHZpc2l0b3JfaW5mbyAmJiB2aXNpdG9yX2luZm8udmlzaXRfaWQpIHtcbiAgICAgICAgICAgIHBvc3REYXRhWyd2aXNpdF9pZCddID0gdmlzaXRvcl9pbmZvLnZpc2l0X2lkXG4gICAgICAgICAgICBwb3N0RGF0YVsndmlzaXRvcl9pZCddID0gdmlzaXRvcl9pbmZvLnZpc2l0b3JfaWRcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5wYXltZW50X3R5cGUgPT0gNiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4pLmxlbmd0aCAmJiBpc19zZWxlY3RlZF91c2VyX3ZpcCkge1xuICAgICAgICAgICAgcG9zdERhdGFbJ3BsdXNfcGxhbiddID0gdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5pZFxuICAgICAgICAgICAgcG9zdERhdGFbJ3BsYW4nXSA9IHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmKCFob3NwaXRhbC5lbmFibGVkX2Zvcl9wcmVwYWlkICYmICFob3NwaXRhbC5lbmFibGVkX2Zvcl9jb2QpIHtcbiAgICAgICAgLy8gICAgIHBvc3REYXRhWydwYXltZW50X3R5cGUnXSA9IDE7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBsZXQgcHJvZmlsZURhdGEgPSB7IC4uLnBhdGllbnQgfVxuICAgICAgICBpZiAocHJvZmlsZURhdGEgJiYgcHJvZmlsZURhdGEud2hhdHNhcHBfb3B0aW4gPT0gbnVsbCkge1xuICAgICAgICAgICAgcHJvZmlsZURhdGFbJ3doYXRzYXBwX29wdGluJ10gPSB0aGlzLnN0YXRlLndoYXRzYXBwX29wdGluXG4gICAgICAgICAgICB0aGlzLnByb3BzLmVkaXRVc2VyUHJvZmlsZShwcm9maWxlRGF0YSwgcHJvZmlsZURhdGEuaWQpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZG9jdG9yQ291cG9ucyAmJiB0aGlzLnByb3BzLmRvY3RvckNvdXBvbnNbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl0gJiYgdGhpcy5wcm9wcy5kb2N0b3JDb3Vwb25zW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdLmxlbmd0aCAmJiB0aGlzLnByb3BzLmRpc0NvdW50ZWRPcGRQcmljZSA+PSAwICYmIHRoaXMucHJvcHMucGF5bWVudF90eXBlICE9IDYgJiYgIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlIC8qJiYgIWlzX3ZpcF9hcHBsaWNhYmxlKi8pIHtcbiAgICAgICAgICAgIHBvc3REYXRhWydjb3Vwb25fY29kZSddID0gdGhpcy5zdGF0ZS5jb3Vwb25Db2RlID8gW3RoaXMuc3RhdGUuY291cG9uQ29kZV0gOiBbXVxuICAgICAgICB9XG5cbiAgICAgICAgLy9DaGVjayBTQkkgVVRNIFRhZ3NcbiAgICAgICAgaWYgKFNUT1JBR0UgJiYgU1RPUkFHRS5nZXRBbnlDb29raWUoJ3NiaV91dG0nKSAmJiB0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncyAmJiB0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncy5sZW5ndGggJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MuZmlsdGVyKHggPT4geC50eXBlID09ICdzYmlfdXRtJykubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIGxldCB0YWdzID0gdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MuZmlsdGVyKHggPT4geC50eXBlID09ICdzYmlfdXRtJylbMF1cbiAgICAgICAgICAgIGlmICh0YWdzLnV0bV90YWdzKSB7XG5cbiAgICAgICAgICAgICAgICBwb3N0RGF0YVsndXRtX3NiaV90YWdzJ10gPSB0YWdzLnV0bV90YWdzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQubG9jYXRpb24gJiYgZG9jdW1lbnQubG9jYXRpb24uaG9zdCAmJiBkb2N1bWVudC5sb2NhdGlvbi5ob3N0LmluY2x1ZGVzKCdzYmknKSkge1xuICAgICAgICAgICAgcG9zdERhdGFbJ3V0bV9zYmlfdGFncyddID0ge1xuICAgICAgICAgICAgICAgIHV0bV90YWdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHV0bV9zb3VyY2U6ICdzYmlfdXRtJyxcbiAgICAgICAgICAgICAgICAgICAgdXRtX3Rlcm06ICcnLFxuICAgICAgICAgICAgICAgICAgICB1dG1fbWVkaXVtOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgdXRtX2NhbXBhaWduOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGltZTogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcHJvY2VkdXJlX2lkcyA9IFtdXG4gICAgICAgIGlmIChmYWxzZSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdICYmIHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl1bdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY10gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXVt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXS5jYXRlZ29yaWVzKSB7XG5cbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXVt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXS5jYXRlZ29yaWVzKS5tYXAoKHByb2NlZHVyZSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgcHJvY2VkdXJlX2lkcyA9IHByb2NlZHVyZV9pZHMuY29uY2F0KHByb2NlZHVyZS5maWx0ZXIoeCA9PiB4LmlzX3NlbGVjdGVkKS5tYXAoeCA9PiB4LnByb2NlZHVyZV9pZCkpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYgKHByb2NlZHVyZV9pZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcG9zdERhdGFbJ3Byb2NlZHVyZV9pZHMnXSA9IHByb2NlZHVyZV9pZHMgfHwgW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhZGRUb0NhcnQpIHtcblxuICAgICAgICAgICAgLy9TaW5nbGUgRmxvdyBBZ2VudCBCb29raW5nXG4gICAgICAgICAgICBpZiAoU1RPUkFHRS5pc0FnZW50KCkgJiYgdGhpcy5wcm9wcy5wYXltZW50X3R5cGUgPT0gNikge1xuXG4gICAgICAgICAgICAgICAgaWYgKGV4dHJhUGFyYW1zICYmIGV4dHJhUGFyYW1zLnNlbmRXaGF0c3VwKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc3REYXRhWydtZXNzYWdlX21lZGl1bSddID0gJ1dIQVRTQVBQJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRTaW5nbGVGbG93QWdlbnRCb29raW5nVVJMKHBvc3REYXRhKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ09wZEFkZFRvQ2FydENsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdvcGQtYWRkLXRvLWNhcnQtY2xpY2tlZCdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWRkVG9DYXJ0KDEsIHBvc3REYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc01hdHJpeCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2NhcnQ/aXNfbWF0cml4PXRydWUnKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvY2FydCcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gXCJFcnJvciBhZGRpbmcgdG8gY2FydCFcIlxuICAgICAgICAgICAgICAgIGlmIChlcnIubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuaW5jbHVkZXMoJ0l0ZW0gYWxyZWFkeSBleGlzdHMgaW4gY2FydC4nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jYXJ0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIGVycm9yOiBtZXNzYWdlIH0pXG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBtZXNzYWdlIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJzZWQgJiYgcGFyc2VkLmFwcG9pbnRtZW50X2lkICYmIHBhcnNlZC5jb2RfdG9fcHJlcGFpZCA9PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIC8vRm9yIENvZCBBcHBvaW50bWVudHNcbiAgICAgICAgICAgIHBvc3REYXRhWydhcHBvaW50bWVudF9pZCddID0gcGFyc2VkLmFwcG9pbnRtZW50X2lkXG4gICAgICAgICAgICBwb3N0RGF0YVsnY29kX3RvX3ByZXBhaWQnXSA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYXltZW50QnRuQ2xpY2tlZDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29kVG9QcmVwYWlkKHBvc3REYXRhLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgLyppZiAoZGF0YS5pc19hZ2VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVDb3Vwb25zKHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3IsIHRoaXMuc3RhdGUuY291cG9uSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UodGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZSArIGA/b3JkZXJfaWQ9JHtkYXRhLmRhdGEub3JkZXJJZH1gKVxuICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHsgb3JkZXJfaWQ6IGRhdGEuZGF0YS5vcmRlcklkIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfSovXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnBheW1lbnRfcmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlbmQgdG8gcGF5bWVudCBzZWxlY3Rpb24gcGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFuYWx5dGljRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0RvY3Rvck9yZGVyQ3JlYXRlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2RvY3Rvcl9vcmRlcl9jcmVhdGVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGFuYWx5dGljRGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9wYXltZW50LyR7ZGF0YS5kYXRhLm9yZGVySWR9P3JlZnM9b3BkYClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1BheW1lbnQoZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVtb3ZlQ291cG9ucyh0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yLCB0aGlzLnN0YXRlLmNvdXBvbklkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VuZCBiYWNrIHRvIGFwcG9pbnRtZW50IHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKGAvb3JkZXIvc3VtbWFyeS8ke2RhdGEuZGF0YS5vcmRlcklkfT9wYXltZW50X3N1Y2Nlc3M9dHJ1ZWApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGF5bWVudEJ0bkNsaWNrZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyLmVycm9yXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJDb3VsZCBub3QgY3JlYXRlIGFwcG9pbnRtZW50LiBUcnkgYWdhaW4gbGF0ZXIgIVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGVyci5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIGVycm9yOiBtZXNzYWdlIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhbmFseXRpY0RhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ09wZFByb2NlZWRCdXR0b25DbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnb3BkLXByb2NlZWQtYnV0dG9uLWNsaWNrZWQnXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGFuYWx5dGljRGF0YSB9KVxuXG4gICAgICAgIGFuYWx5dGljRGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnT3BkQ29uZmlybUJvb2tpbmdDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnb3BkLWNvbmZpcm0tYm9va2luZy1jbGlja2VkJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBhbmFseXRpY0RhdGEgfSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBheW1lbnRCdG5DbGlja2VkOiB0cnVlIH0pO1xuICAgICAgICB0aGlzLnByb3BzLmNyZWF0ZU9QREFwcG9pbnRtZW50KHBvc3REYXRhLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgIC8qaWYgKGRhdGEuaXNfYWdlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVDb3Vwb25zKHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3IsIHRoaXMuc3RhdGUuY291cG9uSWQpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWUgKyBgP29yZGVyX2lkPSR7ZGF0YS5kYXRhLm9yZGVySWR9YClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9yZGVyX2lkOiBkYXRhLmRhdGEub3JkZXJJZCB9KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5wYXltZW50X3JlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNlbmQgdG8gcGF5bWVudCBzZWxlY3Rpb24gcGFnZVxuICAgICAgICAgICAgICAgICAgICBsZXQgYW5hbHl0aWNEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb2N0b3JPcmRlckNyZWF0ZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdkb2N0b3Jfb3JkZXJfY3JlYXRlZCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogYW5hbHl0aWNEYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvcGF5bWVudC8ke2RhdGEuZGF0YS5vcmRlcklkfT9yZWZzPW9wZGApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1BheW1lbnQoZGF0YSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlbW92ZUNvdXBvbnModGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvciwgdGhpcy5zdGF0ZS5jb3Vwb25JZClcbiAgICAgICAgICAgICAgICAgICAgLy8gc2VuZCBiYWNrIHRvIGFwcG9pbnRtZW50IHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UoYC9vcmRlci9zdW1tYXJ5LyR7ZGF0YS5kYXRhLm9yZGVySWR9P3BheW1lbnRfc3VjY2Vzcz10cnVlYClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYXltZW50QnRuQ2xpY2tlZDogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnIuZXJyb3JcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJDb3VsZCBub3QgY3JlYXRlIGFwcG9pbnRtZW50LiBUcnkgYWdhaW4gbGF0ZXIgIVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnIubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogbWVzc2FnZSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByb2Nlc3NQYXltZW50KGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYXltZW50RGF0YTogZGF0YS5kYXRhIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXltZW50Rm9ybScpICYmIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUucGF5bWVudERhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BheW1lbnRGb3JtJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVtb3ZlQ291cG9ucyh0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yLCB0aGlzLnN0YXRlLmNvdXBvbklkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMzAwMClcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uc3VibWl0KClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvKHdoZXJlLCBlKSB7XG4gICAgICAgIHN3aXRjaCAod2hlcmUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJ0aW1lXCI6IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5zZW9GcmllbmRseSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdXJsID0gYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfT9nb2JhY2s9dHJ1ZSZ0eXBlPW9wZCZkb2N0b3JfaWQ9JHt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yfSZob3NwaXRhbF9pZD0ke3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWN9JmFjdGlvbl9wYWdlPXRpbWluZ3NgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHVybClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL29wZC9kb2N0b3IvJHt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yfS8ke3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWN9L2Jvb2s/Z29iYWNrPXRydWUmdHlwZT1vcGRgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSBcInBhdGllbnRcIjoge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvdXNlci9mYW1pbHk/cGljaz10cnVlYClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbmRTaW5nbGVGbG93QWdlbnRCb29raW5nVVJMKHBvc3REYXRhID0ge30pIHtcbiAgICAgICAgLy9mb3IgYWdlbnQgbG9naW4gc2VuZCBzaW5nbGUgZmxvdyBib29raW5nIHVybFxuICAgICAgICBsZXQgYm9va2luZ19kYXRhID0gdGhpcy5nZXRCb29raW5nRGF0YSgpXG4gICAgICAgIGJvb2tpbmdfZGF0YSA9IHsgLi4ucG9zdERhdGEsIC4uLmJvb2tpbmdfZGF0YSwgaXNfc2luZ2xlX2Zsb3dfb3BkOiB0cnVlLCBkdW1teV9kYXRhX3R5cGU6ICdTSU5HTEVfUFVSQ0hBU0UnIH1cbiAgICAgICAgdGhpcy5wcm9wcy5wdXNoTWVtYmVyc0RhdGEoYm9va2luZ19kYXRhLCAocmVzcCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3AuZHVtbXlfaWQpIHtcblxuICAgICAgICAgICAgICAgIGxldCBleHRyYVBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbGFuZGluZ191cmw6IGBvcGQvZG9jdG9yLyR7dGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcn0vJHt0aGlzLnByb3BzLnNlbGVjdGVkQ2xpbmljfS9ib29rZGV0YWlscz9kdW1teV9pZD0ke3Jlc3AuZHVtbXlfaWR9YFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihwb3N0RGF0YS5tZXNzYWdlX21lZGl1bSl7XG4gICAgICAgICAgICAgICAgICAgIGV4dHJhUGFyYW1zWydtZXNzYWdlX21lZGl1bSddID0gJ1dIQVRTQVBQJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kQWdlbnRCb29raW5nVVJMKHRoaXMuc3RhdGUub3JkZXJfaWQsICdzbXMnLCAnU0lOR0xFX1BVUkNIQVNFJywgbnVsbCwgZXh0cmFQYXJhbXMsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiU01TIFNFTkQgRVJST1JcIiB9KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlNNUyBTRU5UIFNVQ0NFU1NGVUxZXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYnVpbGRPcGRUaW1lU2xvdCgpIHtcbiAgICAgICAgLy9hZnRlciBhZ2VudCBsb2dpbiAsIGJ1aWxkIHRoZSBzdGF0ZSBvZiB0aGUgcGFnZSBlLmcgc3RvcmVcbiAgICAgICAgbGV0IHNlbGVjdGVkRGF0ZSA9IHsgLi4udGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QgfVxuICAgICAgICBpZiAoc2VsZWN0ZWREYXRlLnRpbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnNlbGVjdGVkRGF0ZS50aW1lIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0aW1lID0ge1xuICAgICAgICAgICAgdGV4dDogbmV3IERhdGUoc2VsZWN0ZWREYXRlLmRhdGUpLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHsgaG91cjogJ251bWVyaWMnLCBtaW51dGU6ICdudW1lcmljJywgaG91cjEyOiB0cnVlIH0pLnNwbGl0KCcgJylbMF0sXG4gICAgICAgICAgICBkZWFsX3ByaWNlOiBzZWxlY3RlZERhdGUudGltZS5kZWFsX3ByaWNlLFxuICAgICAgICAgICAgaXNfYXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgbXJwOiBzZWxlY3RlZERhdGUudGltZS5tcnAsXG4gICAgICAgICAgICBmZWVzOiBzZWxlY3RlZERhdGUudGltZS5mZWVzLFxuICAgICAgICAgICAgcHJpY2U6IHNlbGVjdGVkRGF0ZS50aW1lLmRlYWxfcHJpY2UsXG4gICAgICAgICAgICB0aXRsZTogbmV3IERhdGUoc2VsZWN0ZWREYXRlLmRhdGUpLmdldEhvdXJzKCkgPj0gMTIgPyAnUE0nIDogJ0FNJyxcbiAgICAgICAgICAgIHZhbHVlOiBuZXcgRGF0ZShzZWxlY3RlZERhdGUuZGF0ZSkuZ2V0SG91cnMoKSArIG5ldyBEYXRlKHNlbGVjdGVkRGF0ZS5kYXRlKS5nZXRNaW51dGVzKCkgLyA2MFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRpbWVcblxuICAgIH1cblxuICAgIHNldE9wZEJvb2tpbmcoZGF0YSkge1xuXG4gICAgICAgIGxldCB7IHRpbWVTbG90LCBjb3Vwb25fZGF0YSwgZG9jdG9yX2lkLCBjbGluaWNfaWQsIHBheW1lbnRfdHlwZSwgcHJvZmlsZV9pZCB9ID0gZGF0YVxuXG4gICAgICAgIGxldCBleHRyYVRpbWVQYXJhbXMgPSBudWxsXG4gICAgICAgIGlmICh0aW1lU2xvdC5kYXRlKSB7XG4gICAgICAgICAgICBleHRyYVRpbWVQYXJhbXMgPSB0aGlzLmdldEZvcm1hdHRlZERhdGUodGltZVNsb3QuZGF0ZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdE9wZFRpbWVTTG90KHRpbWVTbG90LCBmYWxzZSwgbnVsbCwgZXh0cmFUaW1lUGFyYW1zKVxuXG4gICAgICAgIGlmIChjb3Vwb25fZGF0YS5jb3Vwb25fY29kZSkge1xuICAgICAgICAgICAgbGV0IGNvdXBvbl9pZCA9ICcnXG4gICAgICAgICAgICBsZXQgaXNfY2FzaGJhY2sgPSBmYWxzZVxuXG4gICAgICAgICAgICBpZiAoY291cG9uX2NvZGUgJiYgT2JqZWN0LmtleXMoY291cG9uX2NvZGUpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvdXBvbl9pZCA9IGNvdXBvbl9jb2RlLmlkXG4gICAgICAgICAgICAgICAgaXNfY2FzaGJhY2sgPSBjb3Vwb25fY29kZS5pc19jYXNoYmFja1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdXBvbl9jb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hcHBseUNvdXBvbnMoJzEnLCB7IGNvZGU6IGNvdXBvbl9kYXRhLmNvdXBvbl9jb2RlLCBjb3Vwb25faWQ6IGNvdXBvbl9pZCwgaXNfY2FzaGJhY2s6IGlzX2Nhc2hiYWNrIH0sIGNvdXBvbl9pZCwgZG9jdG9yX2lkKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdF9vcGRfcGF5bWVudF90eXBlKHBheW1lbnRfdHlwZSlcblxuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdFByb2ZpbGUocHJvZmlsZV9pZClcbiAgICAgICAgLy8gaWYgKGRhdGEuYWN0dWFsX2RhdGEucHJvY2VkdXJlX2lkcyAmJiBkYXRhLmFjdHVhbF9kYXRhLnByb2NlZHVyZV9pZHMubGVuZ3RoKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnByb3BzLnNhdmVQcm9maWxlUHJvY2VkdXJlcygnJywgJycsIGRhdGEuYWN0dWFsX2RhdGEucHJvY2VkdXJlX2lkcywgdHJ1ZSlcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAoZGF0YS5kYXRhLmRvY3RvciAmJiBkYXRhLmRhdGEuZG9jdG9yLnVybCkge1xuICAgICAgICAvLyAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke2RhdGEuZGF0YS5kb2N0b3IudXJsfS9ib29raW5nP2RvY3Rvcl9pZD0ke2RhdGEuYWN0dWFsX2RhdGEuZG9jdG9yfSZob3NwaXRhbF9pZD0ke2RhdGEuYWN0dWFsX2RhdGEuaG9zcGl0YWx9JmNhcnRfaXRlbT0ke3RoaXMucHJvcHMuaWR9YClcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvb3BkL2RvY3Rvci8ke2RhdGEuYWN0dWFsX2RhdGEuZG9jdG9yfS8ke2RhdGEuYWN0dWFsX2RhdGEuaG9zcGl0YWx9L2Jvb2tkZXRhaWxzP2NhcnRfaXRlbT0ke3RoaXMucHJvcHMuaWR9YClcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIGdldEJvb2tpbmdEYXRhKCkge1xuICAgICAgICBsZXQgdGltZV9zbG90ID0gdGhpcy5idWlsZE9wZFRpbWVTbG90KClcbiAgICAgICAgbGV0IHRpbWVTbG90ID0ge1xuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QuZGF0ZSksXG4gICAgICAgICAgICBzbG90OiAnJyxcbiAgICAgICAgICAgIHRpbWU6IHRpbWVfc2xvdCxcbiAgICAgICAgICAgIHNlbGVjdGVkRG9jdG9yOiB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yLFxuICAgICAgICAgICAgc2VsZWN0ZWRDbGluaWM6IHRoaXMucHJvcHMuc2VsZWN0ZWRDbGluaWNcbiAgICAgICAgfVxuICAgICAgICBsZXQgY291cG9uX2RhdGEgPSB7fVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5kb2N0b3JDb3Vwb25zICYmIHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3IgJiYgdGhpcy5wcm9wcy5kb2N0b3JDb3Vwb25zW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdICYmIHRoaXMucHJvcHMuZG9jdG9yQ291cG9uc1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvdXBvbl9kYXRhID0gdGhpcy5wcm9wcy5kb2N0b3JDb3Vwb25zW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdWzBdXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyB0aW1lU2xvdCwgY291cG9uX2RhdGE6IGNvdXBvbl9kYXRhLCBkb2N0b3JfaWQ6IHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3IsIGNsaW5pY19pZDogdGhpcy5wcm9wcy5zZWxlY3RlZENsaW5pYywgcGF5bWVudF90eXBlOiB0aGlzLnByb3BzLnBheW1lbnRfdHlwZSwgcHJvZmlsZV9pZDogdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGUgfVxuICAgIH1cblxuICAgIGFwcGx5Q291cG9ucygpIHtcbiAgICAgICAgbGV0IHByb2NlZHVyZV9pZHMgPSBcIlwiXG4gICAgICAgIGxldCBwcm9jX2lkcyA9IHRoaXMuZ2V0UHJvY2VkdXJlSWRzKHRoaXMucHJvcHMpXG4gICAgICAgIGlmIChwcm9jX2lkcyAmJiBwcm9jX2lkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHByb2NlZHVyZV9pZHMgPSBwcm9jX2lkcy5qb2luKCcsJylcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhbmFseXRpY0RhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ09wZENvdXBvbnNDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnb3BkLWNvdXBvbnMtY2xpY2tlZCdcbiAgICAgICAgfVxuXG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBhbmFseXRpY0RhdGEgfSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBheV9idG5fbG9hZGluZzogdHJ1ZSB9KVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2NvdXBvbi9vcGQvJHt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yfS8ke3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWN9P3Byb2NlZHVyZXNfaWRzPSR7cHJvY2VkdXJlX2lkc30mZGVhbF9wcmljZT0ke3RoaXMuZ2V0RGVhbFByaWNlKCl9JmNhcnRfaXRlbT0ke3RoaXMuc3RhdGUuY2FydF9pdGVtIHx8IFwiXCJ9YClcbiAgICB9XG5cbiAgICBnZXREZWFsUHJpY2UoKSB7XG4gICAgICAgIGxldCBob3NwaXRhbCA9IHt9XG4gICAgICAgIGxldCBkb2N0b3JEZXRhaWxzID0gdGhpcy5wcm9wcy5ET0NUT1JTW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdXG5cbiAgICAgICAgaWYgKGRvY3RvckRldGFpbHMpIHtcbiAgICAgICAgICAgIGxldCB7IGhvc3BpdGFscyB9ID0gZG9jdG9yRGV0YWlsc1xuXG4gICAgICAgICAgICBpZiAoaG9zcGl0YWxzICYmIGhvc3BpdGFscy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBob3NwaXRhbHMubWFwKChoc3B0bCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaHNwdGwuaG9zcGl0YWxfaWQgPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWwgPSBoc3B0bFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkZWFsX3ByaWNlID0gMFxuXG4gICAgICAgIGlmIChPYmplY3QudmFsdWVzKGhvc3BpdGFsKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRlYWxfcHJpY2UgPSBob3NwaXRhbC5kZWFsX3ByaWNlXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdHJlYXRtZW50X1ByaWNlID0gMFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdW3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWNdICYmIHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl1bdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY10ucHJpY2UpIHtcblxuICAgICAgICAgICAgdHJlYXRtZW50X1ByaWNlID0gdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXVt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXS5wcmljZS5kZWFsX3ByaWNlIHx8IDBcbiAgICAgICAgfVxuXG4gICAgICAgIGRlYWxfcHJpY2UgKz0gdHJlYXRtZW50X1ByaWNlXG4gICAgICAgIGlmIChPYmplY3QudmFsdWVzKGhvc3BpdGFsKS5sZW5ndGggJiYgaG9zcGl0YWwudmlwICYmIE9iamVjdC5rZXlzKGhvc3BpdGFsLnZpcCkubGVuZ3RoICYmIGhvc3BpdGFsLnZpcC5pc192aXBfbWVtYmVyICYmIGhvc3BpdGFsLnZpcC5jb3Zlcl91bmRlcl92aXApIHtcbiAgICAgICAgICAgIGRlYWxfcHJpY2UgPSBob3NwaXRhbC52aXAudmlwX2Ftb3VudCArIGhvc3BpdGFsLnZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlYWxfcHJpY2VcbiAgICB9XG5cbiAgICBjbG9zZUVycm9yUG9wdXAgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogJycgfSlcbiAgICB9XG5cbiAgICBnZXRCb29raW5nQnV0dG9uVGV4dCh0b3RhbF93YWxsZXRfYmFsYW5jZSwgcHJpY2VfdG9fcGF5LCBtcnAsIGVuYWJsZWRfZm9yX2NvZF9wYXltZW50LCBpc19jb2RfZGVhbF9wcmljZSwgaXNfdmlwX2FwcGxpY2FibGUsIHZpcF9hbW91bnQsIGlzX2dvbGRfbWVtYmVyLCB2aXBfY29udmVuaWVuY2VfYW1vdW50KSB7XG5cbiAgICAgICAgbGV0IHByaWNlX2Zyb21fd2FsbGV0ID0gMFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5wYXltZW50X3R5cGUgIT0gMSAmJiB0aGlzLnByb3BzLnBheW1lbnRfdHlwZSAhPSA2KSB7XG4gICAgICAgICAgICBpZiAoZW5hYmxlZF9mb3JfY29kX3BheW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNfY29kX2RlYWxfcHJpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGBDb25maXJtIEJvb2tpbmcgJHtpc19jb2RfZGVhbF9wcmljZSA+IDAgPyBgKOKCuSAke2lzX2NvZF9kZWFsX3ByaWNlfSlgIDogJyd9YFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgQ29uZmlybSBCb29raW5nICR7bXJwID4gMCA/IGAo4oK5ICR7bXJwfSlgIDogJyd9YFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBDb25maXJtIEJvb2tpbmcgJHttcnAgPiAwID8gYCjigrkgJHttcnB9KWAgOiAnJ31gXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwcmljZV9mcm9tX3BnID0gMFxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnVzZV93YWxsZXQgJiYgdG90YWxfd2FsbGV0X2JhbGFuY2UgJiYgdGhpcy5wcm9wcy5wYXltZW50X3R5cGUgIT0gNikge1xuICAgICAgICAgICAgcHJpY2VfZnJvbV93YWxsZXQgPSBNYXRoLm1pbih0b3RhbF93YWxsZXRfYmFsYW5jZSwgcHJpY2VfdG9fcGF5KVxuICAgICAgICB9XG5cbiAgICAgICAgcHJpY2VfZnJvbV9wZyA9IHByaWNlX3RvX3BheSAtIHByaWNlX2Zyb21fd2FsbGV0XG5cbiAgICAgICAgaWYgKHByaWNlX2Zyb21fcGcpIHtcbiAgICAgICAgICAgIHJldHVybiBgQ29udGludWUgdG8gcGF5ICjigrkgJHtwcmljZV9mcm9tX3BnfSlgXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYENvbmZpcm0gQm9va2luZ2BcbiAgICB9XG5cbiAgICBnZXRCb29raW5nQW1vdW50KHRvdGFsX3dhbGxldF9iYWxhbmNlLCBwcmljZV90b19wYXksIG1ycCkge1xuICAgICAgICBsZXQgcHJpY2VfZnJvbV93YWxsZXQgPSAwXG4gICAgICAgIGxldCBwcmljZV9mcm9tX3BnID0gMFxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnVzZV93YWxsZXQgJiYgdG90YWxfd2FsbGV0X2JhbGFuY2UpIHtcbiAgICAgICAgICAgIHByaWNlX2Zyb21fd2FsbGV0ID0gTWF0aC5taW4odG90YWxfd2FsbGV0X2JhbGFuY2UsIHByaWNlX3RvX3BheSlcbiAgICAgICAgfVxuXG4gICAgICAgIHByaWNlX2Zyb21fcGcgPSBwcmljZV90b19wYXkgLy8tIHByaWNlX2Zyb21fd2FsbGV0XG5cbiAgICAgICAgaWYgKHByaWNlX2Zyb21fcGcpIHtcbiAgICAgICAgICAgIHJldHVybiBg4oK5JHtwcmljZV9mcm9tX3BnfWBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBg4oK5MGBcbiAgICB9XG5cbiAgICBzZWxlY3RUaW1lU2xvdChzbG90KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBzbG90LnNlbGVjdGVkRG9jdG9yID0gdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclxuICAgICAgICBzbG90LnNlbGVjdGVkQ2xpbmljID0gdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY1xuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdE9wZFRpbWVTTG90KHNsb3QsIGZhbHNlKVxuICAgIH1cblxuICAgIHRvZ2dsZVdoYXRzYXAoc3RhdHVzLCBlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB3aGF0c2FwcF9vcHRpbjogc3RhdHVzIH0pXG4gICAgfVxuXG4gICAgcHJpY2VDb25maXJtYXRpb25Qb3B1cChjaG9pY2UpIHtcbiAgICAgICAgaWYgKCFjaG9pY2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q29uZmlybWF0aW9uUG9wdXA6ICdjbG9zZScgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q29uZmlybWF0aW9uUG9wdXA6ICdjbG9zZScgfSlcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybV9ib29raW5nJykpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybV9ib29raW5nJykuY2xpY2soKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmFubmVyQ29uZmlybWF0aW9uUG9wdXAoY2hvaWNlKSB7XG4gICAgICAgIGlmICghY2hvaWNlKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0Jvb2tpbmdQYWdlVmlwQmFubmVyQ3Jvc3NDbGljaycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2Jvb2tpbmdwYWdlLXZpcC1iYW5uZXItY3Jvc3MtY2xpY2snXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dfYmFubmVyOiBjaG9pY2UsIGJhbm5lcl9kZWNsaW5lOiB0cnVlIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0Jvb2tpbmdQYWdlVmlwQmFubmVyTm90SW50ZXJzdGVkQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdib29raW5ncGFnZS12aXAtYmFubmVyLW5vdC1pbnRlcnN0ZWQtY2xpY2snXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dfYmFubmVyOiAnJyB9KVxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtX2Jvb2tpbmcnKSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtX2Jvb2tpbmcnKS5jbGljaygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdWJtaXRMZWFkRm9ybUdlbmVyYXRpb24oaXBkRm9ybVBhcmFtcykge1xuICAgICAgICBpZiAoY2xvc2UpIHtcbiAgICAgICAgICAgIGxldCBndG1EYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnRG9jdG9yQm9va2luZ0lwZEZvcm1DbG9zZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdkb2N0b3ItYm9va2luZy1pcGQtZm9ybS1jbG9zZWQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuICAgICAgICB9XG4gICAgICAgIGxldCBpcGRfZGF0YSA9IHtcbiAgICAgICAgICAgIHNob3dDaGF0OiB0cnVlLFxuICAgICAgICAgICAgaXBkRm9ybVBhcmFtczogaXBkRm9ybVBhcmFtc1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dJcGRMZWFkRm9ybTogZmFsc2UsIHNob3dTZWNvbmRQb3B1cDogdHJ1ZSB9LCAoKSA9PiB7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGVja0lwZENoYXRBZ2VudFN0YXR1cygocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UudXNlcnMgJiYgcmVzcG9uc2UudXNlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pcGRDaGF0Vmlldyh7IHNob3dJcGRDaGF0OiB0cnVlLCBpcGRGb3JtOiBpcGRGb3JtUGFyYW1zLCBzaG93TWluaW1pemU6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSovXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ29Ub0luc3VyYW5jZShzZWxlY3RlZERvY3Rvciwgc2VsZWN0ZWRDbGluaWMpIHtcbiAgICAgICAgbGV0IEd0bWRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0F2YWlsTm93TGFiQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2F2YWlsLW5vdy1sYWItY2xpY2tlZCdcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogR3RtZGF0YSB9KVxuICAgICAgICBsZXQgZGF0YSA9IHt9XG4gICAgICAgIGRhdGEudGh1bWJuYWlsID0gc2VsZWN0ZWREb2N0b3IudGh1bWJuYWlsXG4gICAgICAgIGRhdGEubmFtZSA9IHNlbGVjdGVkRG9jdG9yLmRpc3BsYXlfbmFtZVxuICAgICAgICBkYXRhLnVybCA9IHNlbGVjdGVkRG9jdG9yLnVybFxuICAgICAgICBkYXRhLmlkID0gc2VsZWN0ZWREb2N0b3IuaWRcbiAgICAgICAgZGF0YS5zZWxlY3RlZENsaW5pYyA9IHNlbGVjdGVkQ2xpbmljXG4gICAgICAgIGRhdGEudHlwZSA9ICdkb2N0b3InXG4gICAgICAgIHRoaXMucHJvcHMuc2F2ZUF2YWlsTm93SW5zdXJhbmNlKGRhdGEpXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaW5zdXJhbmNlL2luc3VyYW5jZS1wbGFucz9zb3VyY2U9ZG9jdG9yLXN1bW1hcnktdmlldyZzaG93X2J1dHRvbj10cnVlJylcbiAgICB9XG5cbiAgICBzZWxlY3RDbGluaWMoY2xpbmljX2lkKSB7XG4gICAgICAgIHZhciBocmVmID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICAgICAgaHJlZi5zZWFyY2hQYXJhbXMuc2V0KCdob3NwaXRhbF9pZCcsIGNsaW5pY19pZClcbiAgICAgICAgdmFyIG5ld1VybCA9IGhyZWYudG9TdHJpbmcoKVxuICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUod2luZG93Lmhpc3Rvcnkuc3RhdGUsIGRvY3VtZW50LnRpdGxlLCBuZXdVcmwpXG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkQ2xpbmljOiBjbGluaWNfaWQgfSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaERhdGEodGhpcy5wcm9wcywgY2xpbmljX2lkLCBmYWxzZSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzZWxlY3REYXRlKGUpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ09wZERhdGVDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnb3BkLWRhdGUtY2xpY2tlZCdcbiAgICAgICAgfVxuXG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSkge1xuICAgICAgICAgICAgbGV0IHNsb3QgPSB7IHRpbWU6IHt9IH1cbiAgICAgICAgICAgIGxldCBkYXRlID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRlVGltZVNlbGVjdGVkVmFsdWU6IGRhdGUgfSlcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0T3BkVGltZVNMb3Qoc2xvdCwgZmFsc2UsIG51bGwsIGRhdGUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRGb3JtYXR0ZWREYXRlKGRhdGUpIHtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpXG4gICAgICAgIHZhciBkZCA9IGRhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgICAgIHZhciBtbSA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgIHZhciB5eXl5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBpZiAoZGQgPCAxMCkge1xuICAgICAgICAgICAgZGQgPSAnMCcgKyBkZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtbSA8IDEwKSB7XG4gICAgICAgICAgICBtbSA9ICcwJyArIG1tO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRvZGF5ID0geXl5eSArICctJyArIG1tICsgJy0nICsgZGQ7XG4gICAgICAgIHJldHVybiB0b2RheVxuICAgIH1cblxuICAgIHNldERhdGFPbkNsaW5pY0NoYW5nZSgpIHtcbiAgICAgICAgbGV0IHNsb3QgPSB7IHRpbWU6IHt9IH1cbiAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RPcGRUaW1lU0xvdChzbG90LCBmYWxzZSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGVUaW1lU2VsZWN0ZWRWYWx1ZTogJycgfSlcbiAgICB9XG5cbiAgICBzYXZlTGVhZElkRm9yVXBkYXRpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmlkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZmlyc3RMZWFkSWQ6IHJlc3BvbnNlLmlkLCBzaG93U2Vjb25kUG9wdXA6IHRydWUgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlY29uZElwZEZvcm1TdWJtaXR0ZWQoZm9ybURhdGEpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dTZWNvbmRQb3B1cDogZmFsc2UgfSwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGZvcm1EYXRhKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvcHVwMSA9IGZvcm1EYXRhXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvcHVwMSAmJiBwb3B1cDEucmVxdWVzdGVkX2RhdGVfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcXVlc3RlZF9kYXRlID0gbmV3IERhdGUocG9wdXAxLnJlcXVlc3RlZF9kYXRlX3RpbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IHRoaXMuZ2V0Rm9ybWF0dGVkRGF0ZShyZXF1ZXN0ZWRfZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGVUaW1lU2VsZWN0ZWRWYWx1ZTogZGF0ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qbGV0IGhvdXJzID0gZm9ybURhdGEudGl0bGU9PSdBTSc/cmVxdWVzdGVkX2RhdGUuZ2V0SG91cnMoKTpyZXF1ZXN0ZWRfZGF0ZS5nZXRIb3VycygpKzEyKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaG91cnMgPSBwYXJzZUludChyZXF1ZXN0ZWRfZGF0ZS5nZXRIb3VycygpKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gZm9ybURhdGEudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm91bmRUaW1lU2xvdCA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGl0bGUgPT0gJ1BNJyAmJiBob3VycyAhPSAxMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3VycyA9IGhvdXJzICsgMTJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMudGltZVNsb3RzICYmIHRoaXMucHJvcHMudGltZVNsb3RzW2RhdGVdICYmIHRoaXMucHJvcHMudGltZVNsb3RzW2RhdGVdLmxlbmd0aCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aW1lU2xvdERhdGEgPSB0aGlzLnByb3BzLnRpbWVTbG90c1tkYXRlXS5maWx0ZXIoeCA9PiB4LnRpdGxlID09IHRpdGxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGltZVNsb3REYXRhICYmIHRpbWVTbG90RGF0YS5sZW5ndGggJiYgdGltZVNsb3REYXRhWzBdLnRpbWluZyAmJiB0aW1lU2xvdERhdGFbMF0udGltaW5nLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZVNsb3REYXRhWzBdLnRpbWluZy5tYXAoKHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeC52YWx1ZSA9PSBob3Vycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFRpbWVTbG90ID0geFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3VuZFRpbWVTbG90ICYmIE9iamVjdC5rZXlzKGZvdW5kVGltZVNsb3QpLmxlbmd0aCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dUaW1lRXJyb3I6IHRydWUsIHRpbWVFcnJvclRleHQ6ICdZb3VyIHJlcXVlc3RlZCB0aW1lIHNsb3QgaXMgbm90IGF2YWlsYWJsZS4gUGxlYXNlIGNob29zZSBhIGRpZmZlcmVudCBvbmUuJyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFRpbWUoZm91bmRUaW1lU2xvdCwgZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgaXMgJyArIGUpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2VsZWN0VGltZSh0aW1lLCBkYXRlKSB7XG4gICAgICAgIGxldCBkYXRhID0gbnVsbFxuICAgICAgICBpZiAodGltZSkge1xuXG4gICAgICAgICAgICBsZXQgdGltZVNwYW4gPSBPYmplY3QuYXNzaWduKHt9LCB0aW1lKVxuICAgICAgICAgICAgdGltZVNwYW4udGl0bGUgPSB0aW1lLnZhbHVlID49IDEyID8gJ1BNJyA6ICdBTSdcbiAgICAgICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZSksXG4gICAgICAgICAgICAgICAgbW9udGg6IE1PTlRIU1tuZXcgRGF0ZShkYXRlKS5nZXRNb250aCgpXSxcbiAgICAgICAgICAgICAgICBzbG90OiAnJyxcbiAgICAgICAgICAgICAgICB0aW1lOiB0aW1lU3BhblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkYXRhLnNlbGVjdGVkRG9jdG9yID0gdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclxuICAgICAgICAgICAgZGF0YS5zZWxlY3RlZENsaW5pYyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGEgPSB7IHRpbWU6IHt9IH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgZXh0cmFUaW1lUGFyYW1zID0gbnVsbFxuICAgICAgICBpZiAoZGF0ZSkge1xuICAgICAgICAgICAgZXh0cmFUaW1lUGFyYW1zID0gdGhpcy5nZXRGb3JtYXR0ZWREYXRlKGRhdGUpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RPcGRUaW1lU0xvdChkYXRhLCBmYWxzZSwgbnVsbCwgZXh0cmFUaW1lUGFyYW1zKVxuICAgIH1cblxuICAgIGFwcGx5TGVuc0ZpdENvdXBvbnMoZGVhbF9wcmljZSwgY291cG9uKSB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMZW5zRml0T1BEQXBwbHlDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbGVuc2ZpdC1PUEQtYXBwbHktY2xpY2tlZCdcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB0aGlzLmdldEFuZEFwcGx5QmVzdENvdXBvbnMoZGVhbF9wcmljZSwgdHJ1ZSwgY291cG9uKVxuICAgIH1cblxuICAgIGNsb3NlTGVuc0ZpdFBvcHVwKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTGVuc0ZpdE9wZERvbnRXYW50Q2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2xlbnNmaXQtb3BkLWRvbnQtd2FudC1jbGlja2VkJ1xuICAgICAgICB9XG5cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dfbGVuc2ZpdF9wb3B1cDogZmFsc2UsIGxlbnNmaXRfZGVjbGluZTogdHJ1ZSB9LCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1fYm9va2luZycpKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1fYm9va2luZycpLmNsaWNrKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7c2hvd19sZW5zZml0X3BvcHVwOmZhbHNlLGxlbnNmaXRfZGVjbGluZTp0cnVlfSlcbiAgICB9XG5cbiAgICBjb2RFcnJvckNsaWNrZWQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdXNlci9hcHBvaW50bWVudHMnKVxuICAgIH1cblxuICAgIHRvZ2dsZUdvbGRQbGFucyA9IChwbGFuKSA9PiB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdUb2dnbGVPcGRHb2xkUGxhbkNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICd0b2dnbGUtb3BkLWdvbGQtcGxhbi1jbGlja2VkJywgJ3BsYW4nOiBwbGFuLmlkXG4gICAgICAgIH1cblxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdFZpcENsdWJQbGFuKCdwbGFuJywgcGxhbikgLy8gdG9nZ2xlL3NlbGVjdCB2aXAgcGxhblxuICAgICAgICB0aGlzLnRvZ2dsZUdvbGRQcmljZVBvcHVwKCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlR29sZFByaWNlUG9wdXAgPSAodmFsdWUgPSBmYWxzZSkgPT4ge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQ2hhbmdlUGxhbk9wZENsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjaGFuZ2UtcGxhbi1vcGQtY2xpY2tlZCdcbiAgICAgICAgfVxuXG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93R29sZFByaWNlTGlzdDogdmFsdWUgfSlcbiAgICB9XG5cbiAgICBnb1RvR29sZFBhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdHb1RvT3BkR29sZFBsYW5DbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnZ28tdG8tb3BkLWdvbGQtcGxhbi1jbGlja2VkJ1xuICAgICAgICB9XG5cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy92aXAtZ29sZC1kZXRhaWxzP2lzX2dvbGQ9dHJ1ZSZzb3VyY2U9bW9iaWxlLW9wZC1zdW1tYXJ5LWdvbGQtY2xpY2tlZCZsZWFkX3NvdXJjZT1Eb2NwcmltZSZib29raW5nX3BhZ2U9b3BkJylcbiAgICB9XG5cbiAgICBnZXREYXRhQWZ0ZXJMb2dpbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaERhdGEodGhpcy5wcm9wcywgdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pYywgdHJ1ZSlcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub2RwR29sZFByZWRpY3RlZFByaWNlICYmIHRoaXMucHJvcHMub2RwR29sZFByZWRpY3RlZFByaWNlLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkUGFja2FnZSA9IHRoaXMucHJvcHMub2RwR29sZFByZWRpY3RlZFByaWNlLmZpbHRlcih4ID0+IHguaWQgPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZFZpcEdvbGRQYWNrYWdlSWQpXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRQYWNrYWdlICYmIHNlbGVjdGVkUGFja2FnZS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkUGFja2FnZSA9IHRoaXMucHJvcHMub2RwR29sZFByZWRpY3RlZFByaWNlLmZpbHRlcih4ID0+IHguaXNfc2VsZWN0ZWQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRQYWNrYWdlICYmIHNlbGVjdGVkUGFja2FnZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdFZpcENsdWJQbGFuKCdwbGFuJywgc2VsZWN0ZWRQYWNrYWdlWzBdKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBnZXRTZWxlY3RlZFVzZXJEYXRhKHByb3BzKSB7XG5cbiAgICAgICAgbGV0IGRvY3RvckRldGFpbHMgPSBwcm9wcy5ET0NUT1JTW3Byb3BzLnNlbGVjdGVkRG9jdG9yXVxuICAgICAgICBsZXQgdG90YWxfYW1vdW50X3BheWFibGVfd2l0aG91dF9jb3Vwb24gPSBudWxsXG4gICAgICAgIGxldCBpc19zZWxlY3RlZF91c2VyX2dvbGQgPSBmYWxzZVxuICAgICAgICBpZiAoZG9jdG9yRGV0YWlscykge1xuICAgICAgICAgICAgbGV0IHsgaG9zcGl0YWxzIH0gPSBkb2N0b3JEZXRhaWxzXG4gICAgICAgICAgICBsZXQgaG9zcGl0YWwgPSB7fVxuICAgICAgICAgICAgbGV0IHBhdGllbnQgPSBudWxsXG5cbiAgICAgICAgICAgIGlmIChwcm9wcy5wcm9maWxlc1twcm9wcy5zZWxlY3RlZFByb2ZpbGVdICYmICFwcm9wcy5wcm9maWxlc1twcm9wcy5zZWxlY3RlZFByb2ZpbGVdLmlzRHVtbXlVc2VyKSB7XG4gICAgICAgICAgICAgICAgcGF0aWVudCA9IHByb3BzLnByb2ZpbGVzW3Byb3BzLnNlbGVjdGVkUHJvZmlsZV1cbiAgICAgICAgICAgICAgICBpc19zZWxlY3RlZF91c2VyX2dvbGQgPSBwcm9wcy5wcm9maWxlc1twcm9wcy5zZWxlY3RlZFByb2ZpbGVdLmlzX3ZpcF9nb2xkX21lbWJlclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhvc3BpdGFscyAmJiBob3NwaXRhbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaG9zcGl0YWxzLm1hcCgoaHNwdGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhzcHRsLmhvc3BpdGFsX2lkID09IHRoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3BpdGFsID0gaHNwdGxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB0b3RhbF9hbW91bnRfcGF5YWJsZV93aXRob3V0X2NvdXBvbiA9IGhvc3BpdGFsLmRlYWxfcHJpY2VcbiAgICAgICAgICAgICAgICBpZiAocGF0aWVudCAmJiBob3NwaXRhbCAmJiBob3NwaXRhbC52aXAgJiYgaG9zcGl0YWwudmlwLmlzX2VuYWJsZV9mb3JfdmlwICYmIChwYXRpZW50LmlzX3ZpcF9nb2xkX21lbWJlciB8fCBwYXRpZW50LmlzX3ZpcF9tZW1iZXIpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKC8qaG9zcGl0YWwudmlwLmhvc3BfaXNfZ29sZCAmJiAqL2lzX3NlbGVjdGVkX3VzZXJfZ29sZCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbF9hbW91bnRfcGF5YWJsZV93aXRob3V0X2NvdXBvbiA9IGhvc3BpdGFsLnZpcC52aXBfYW1vdW50ICsgaG9zcGl0YWwudmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnRcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChob3NwaXRhbC52aXAuY292ZXJfdW5kZXJfdmlwICYmIHBhdGllbnQuaXNfdmlwX21lbWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxfYW1vdW50X3BheWFibGVfd2l0aG91dF9jb3Vwb24gPSBob3NwaXRhbC52aXAudmlwX2Ftb3VudCArIGhvc3BpdGFsLnZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIXByb3BzLmlzX2FueV91c2VyX2J1eV9nb2xkICYmIHByb3BzLnBheW1lbnRfdHlwZSA9PSA2ICYmIHByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuICYmIHByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLm9wZCkge1xuICAgICAgICAgICAgICAgICAgICB0b3RhbF9hbW91bnRfcGF5YWJsZV93aXRob3V0X2NvdXBvbiA9IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdG90YWxfYW1vdW50X3BheWFibGVfd2l0aG91dF9jb3Vwb24gfVxuICAgIH1cbiAgICBzZW5kRW1haWxOb3RpZmljYXRpb24oKSB7XG4gICAgICAgIGxldCBkb2N0b3JEZXRhaWxzID0gdGhpcy5wcm9wcy5ET0NUT1JTW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdXG4gICAgICAgIGxldCBzZWxlY3RlZF9ob3NwaXRhbCA9IHt9XG4gICAgICAgIGxldCBwYXRpZW50XG5cbiAgICAgICAgaWYgKGRvY3RvckRldGFpbHMpIHtcbiAgICAgICAgICAgIGxldCB7IGhvc3BpdGFscyB9ID0gZG9jdG9yRGV0YWlsc1xuICAgICAgICAgICAgaWYgKGhvc3BpdGFscyAmJiBob3NwaXRhbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaG9zcGl0YWxzLm1hcCgoaHNwdGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhzcHRsLmhvc3BpdGFsX2lkID09IHRoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkX2hvc3BpdGFsID0gaHNwdGxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoc2VsZWN0ZWRfaG9zcGl0YWwpLmxlbmd0aCA+IDAgJiYgc2VsZWN0ZWRfaG9zcGl0YWwuaXNfaXBkX2hvc3BpdGFsICYmIHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdICYmICF0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlXS5pc0R1bW15VXNlciAmJiB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZUZvcm1hdCkge1xuICAgICAgICAgICAgbGV0IHsgZGF0ZSwgdGltZSwgc2VsZWN0ZWREb2N0b3IsIHNlbGVjdGVkQ2xpbmljIH0gPSB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdFxuXG4gICAgICAgICAgICBpZiAoZGF0ZSkge1xuICAgICAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKS50b0RhdGVTdHJpbmcoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGF0aWVudCA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdXG4gICAgICAgICAgICBsZXQgdXNlcl9kYXRhID0gKHsgdXNlcjogcGF0aWVudC51c2VyLCBkb2N0b3I6IHNlbGVjdGVkRG9jdG9yLCBob3NwaXRhbDogc2VsZWN0ZWRDbGluaWMsIHBob25lX251bWJlcjogcGF0aWVudC5waG9uZV9udW1iZXIsIHByZWZlcnJlZF9kYXRlOiB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZUZvcm1hdCwgdGltZV9zbG90OiB0aW1lLnRleHQsIGdlbmRlcjogcGF0aWVudC5nZW5kZXIsIGRvYjogcGF0aWVudC5kb2IsIHVzZXJfcHJvZmlsZTogcGF0aWVudC5pZCB9KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5TZW5kSXBkQm9va2luZ0VtYWlsKHVzZXJfZGF0YSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5vbklwZExlYWRzKHVzZXJfcGhvbmVfbnVtYmVyLCB1c2VyX25hbWUpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBkYXRhID0ge31cbiAgICAgICAgbGV0IGRvY3RvckRldGFpbHMgPSB0aGlzLnByb3BzLkRPQ1RPUlNbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl1cbiAgICAgICAgbGV0IHNlbGVjdGVkX2hvc3BpdGFsID0ge31cbiAgICAgICAgbGV0IHBhdGllbnRcbiAgICAgICAgbGV0IHNwZWNpYWxpemF0aW9uXG4gICAgICAgIGxldCBkaXNwbGF5X3RvdGFsX21ycCA9IDBcbiAgICAgICAgbGV0IGRpc3BsYXlfZG9jcHJpbWVfZGlzY291bnQgPSAwXG4gICAgICAgIGlmIChkb2N0b3JEZXRhaWxzKSB7XG4gICAgICAgICAgICBsZXQgeyBob3NwaXRhbHMsIGdlbmVyYWxfc3BlY2lhbGl6YXRpb24gfSA9IGRvY3RvckRldGFpbHNcbiAgICAgICAgICAgIHNwZWNpYWxpemF0aW9uID0gZ2VuZXJhbF9zcGVjaWFsaXphdGlvblxuICAgICAgICAgICAgaWYgKGhvc3BpdGFscyAmJiBob3NwaXRhbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaG9zcGl0YWxzLm1hcCgoaHNwdGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhzcHRsLmhvc3BpdGFsX2lkID09IHRoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkX2hvc3BpdGFsID0gaHNwdGxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHNlbGVjdGVkX2hvc3BpdGFsKS5sZW5ndGggPiAwIC8qJiYgIXNlbGVjdGVkX2hvc3BpdGFsLmlzX2lwZF9ob3NwaXRhbCovKSB7XG4gICAgICAgICAgICBkYXRhLmxlYWRfdHlwZSA9ICdEUk9QT0ZGJ1xuICAgICAgICAgICAgZGF0YS5sZWFkX3NvdXJjZSA9ICdkcm9wb2ZmJ1xuICAgICAgICAgICAgZGF0YS50ZXN0X25hbWUgPSBudWxsXG4gICAgICAgICAgICBkYXRhLmxhYl9uYW1lID0gbnVsbFxuICAgICAgICAgICAgZGF0YS5kb2N0b3JfbmFtZSA9IHNlbGVjdGVkX2hvc3BpdGFsLmRvY3RvclxuICAgICAgICAgICAgZGF0YS5ob3NwaXRhbF9uYW1lID0gc2VsZWN0ZWRfaG9zcGl0YWwuaG9zcGl0YWxfbmFtZVxuICAgICAgICAgICAgZGF0YS5zcGVjaWFsdHkgPSBzcGVjaWFsaXphdGlvblswXS5uYW1lXG4gICAgICAgICAgICBkYXRhLnNvdXJjZSA9IHBhcnNlZFxuICAgICAgICAgICAgZGF0YS5leGl0cG9pbnRfdXJsID0gYGh0dHA6Ly9kb2NwcmltZS5jb20ke3RoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWV9P2RvY3Rvcl9pZD0ke3RoaXMuc3RhdGUuc2VsZWN0ZWREb2N0b3J9Jmhvc3BpdGFsX2lkPSR7dGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY31gXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV0gJiYgIXRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdLmlzRHVtbXlVc2VyKSB7XG4gICAgICAgICAgICAgICAgcGF0aWVudCA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdXG4gICAgICAgICAgICAgICAgZGF0YS5jdXN0b21lcl9uYW1lID0gcGF0aWVudC5uYW1lXG4gICAgICAgICAgICAgICAgZGF0YS5waG9uZV9udW1iZXIgPSBwYXRpZW50LnBob25lX251bWJlclxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRhLmN1c3RvbWVyX25hbWUgPSBudWxsXG4gICAgICAgICAgICAgICAgZGF0YS5waG9uZV9udW1iZXIgPSBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodXNlcl9waG9uZV9udW1iZXIpIHtcbiAgICAgICAgICAgICAgICBkYXRhLnBob25lX251bWJlciA9IHVzZXJfcGhvbmVfbnVtYmVyXG4gICAgICAgICAgICAgICAgZGF0YS5jdXN0b21lcl9uYW1lID0gdXNlcl9uYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGxldCB7IGRhdGUsIHRpbWUsIHNlbGVjdGVkRG9jdG9yIH0gPSB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdFxuICAgICAgICAgICAgICAgIGRhdGEuc2VsZWN0ZWRfdGltZSA9IHRpbWUudGV4dCArICcgJyArIHRpbWUudGl0bGVcbiAgICAgICAgICAgICAgICBkYXRhLnNlbGVjdGVkX2RhdGUgPSBkYXRlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGEuc2VsZWN0ZWRfdGltZSA9IG51bGxcbiAgICAgICAgICAgICAgICBkYXRhLnNlbGVjdGVkX2RhdGUgPSBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXNwbGF5X3RvdGFsX21ycCA9IHBhcnNlSW50KHNlbGVjdGVkX2hvc3BpdGFsLm1ycClcbiAgICAgICAgICAgIGRpc3BsYXlfZG9jcHJpbWVfZGlzY291bnQgPSBkaXNwbGF5X3RvdGFsX21ycCAtIChwYXJzZUludChzZWxlY3RlZF9ob3NwaXRhbC5kZWFsX3ByaWNlKSlcbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5pc19hbnlfdXNlcl9idXlfZ29sZCAmJiB0aGlzLnByb3BzLnBheW1lbnRfdHlwZSA9PSA2ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5vcGQpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5X2RvY3ByaW1lX2Rpc2NvdW50ID0gZGlzcGxheV90b3RhbF9tcnAgLSAodGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5vcGQuZ29sZF9wcmljZSArIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4ub3BkLmNvbnZlbmllbmNlX2NoYXJnZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEuZGlzY291bnQgPSBkaXNwbGF5X2RvY3ByaW1lX2Rpc2NvdW50XG5cbiAgICAgICAgICAgIGxldCB2aXNpdG9yX2luZm8gPSBHVE0uZ2V0VmlzaXRvckluZm8oKVxuICAgICAgICAgICAgaWYgKHZpc2l0b3JfaW5mbyAmJiB2aXNpdG9yX2luZm8udmlzaXRfaWQpIHtcbiAgICAgICAgICAgICAgICBkYXRhLnZpc2l0X2lkID0gdmlzaXRvcl9pbmZvLnZpc2l0X2lkXG4gICAgICAgICAgICAgICAgZGF0YS52aXNpdG9yX2lkID0gdmlzaXRvcl9pbmZvLnZpc2l0b3JfaWRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzICYmIHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGRhdGEudXRtX3RhZ3MgPSB0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gXCJjb21tb25feHRyYV90YWdzXCIpWzBdLnV0bV90YWdzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZW5hYmxlRHJvcE9mZmxlYWQ6IGZhbHNlIH0pXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLmlzX2xlYWRfZW5hYmxlZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNfbGVhZF9lbmFibGVkOmZhbHNlfSlcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLk5vbklwZEJvb2tpbmdMZWFkKGRhdGEpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzX2xlYWRfZW5hYmxlZDp0cnVlfSlcbiAgICAgICAgICAgICAgICB9LCA1MDAwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbm9uSXBkTGVhZHNEb2NBZHMocGhvbmVfbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgZG9jdG9yX2lkID0gdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pbml0aWFsU2VydmVyRGF0YSAmJiB0aGlzLnByb3BzLmluaXRpYWxTZXJ2ZXJEYXRhLmRvY3Rvcl9pZCkge1xuICAgICAgICAgICAgZG9jdG9yX2lkID0gdGhpcy5wcm9wcy5pbml0aWFsU2VydmVyRGF0YS5kb2N0b3JfaWRcbiAgICAgICAgfVxuICAgICAgICBsZXQgY3JpdGVyaWFTdHIgPSB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5kaXNwbGF5X25hbWVcbiAgICAgICAgbGV0IGhvc3BpdGFsX2lkXG4gICAgICAgIGxldCBzZWxlY3RlZF9ob3NwaXRhbCA9IHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLmhvc3BpdGFscy5maWx0ZXIoeCA9PiB4Lmhvc3BpdGFsX2lkID09IHRoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWMpXG4gICAgICAgIGxldCBkaXNwbGF5X3RvdGFsX21ycCA9IDBcbiAgICAgICAgbGV0IGRpc3BsYXlfZG9jcHJpbWVfZGlzY291bnQgPSAwXG4gICAgICAgIGlmIChzZWxlY3RlZF9ob3NwaXRhbC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGhvc3BpdGFsX2lkID0gc2VsZWN0ZWRfaG9zcGl0YWxbMF0uaG9zcGl0YWxfaWRcbiAgICAgICAgICAgIGRpc3BsYXlfdG90YWxfbXJwID0gcGFyc2VJbnQoc2VsZWN0ZWRfaG9zcGl0YWxbMF0ubXJwKVxuICAgICAgICAgICAgZGlzcGxheV9kb2NwcmltZV9kaXNjb3VudCA9IGRpc3BsYXlfdG90YWxfbXJwIC0gKHBhcnNlSW50KHNlbGVjdGVkX2hvc3BpdGFsWzBdLmRlYWxfcHJpY2UpKVxuICAgICAgICAgICAgaWYgKCF0aGlzLnByb3BzLmlzX2FueV91c2VyX2J1eV9nb2xkICYmIHRoaXMucHJvcHMucGF5bWVudF90eXBlID09IDYgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLm9wZCkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlfZG9jcHJpbWVfZGlzY291bnQgPSBkaXNwbGF5X3RvdGFsX21ycCAtICh0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLm9wZC5nb2xkX3ByaWNlICsgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5vcGQuY29udmVuaWVuY2VfY2hhcmdlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBkYXRhID0gKHsgcGhvbmVfbnVtYmVyOiBwaG9uZV9udW1iZXIsIGxlYWRfc291cmNlOiAnZG9jYWRzJywgc291cmNlOiBwYXJzZWQsIGxlYWRfdHlwZTogJ0RPQ0FEUycsIGV4aXRwb2ludF91cmw6IGBodHRwOi8vZG9jcHJpbWUuY29tJHt0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lfT9kb2N0b3JfaWQ9JHtkb2N0b3JfaWR9Jmhvc3BpdGFsX2lkPSR7aG9zcGl0YWxfaWR9YCwgZG9jdG9yX2lkOiBkb2N0b3JfaWQsIGhvc3BpdGFsX2lkOiBob3NwaXRhbF9pZCwgZG9jdG9yX25hbWU6IGNyaXRlcmlhU3RyLCBob3NwaXRhbF9uYW1lOiBudWxsLGFtb3VudF9kaXNjb3VudDogZGlzcGxheV9kb2NwcmltZV9kaXNjb3VudCB9KVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MgJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICBkYXRhLnV0bV90YWdzID0gdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MuZmlsdGVyKHggPT4geC50eXBlID09IFwiY29tbW9uX3h0cmFfdGFnc1wiKVswXS51dG1fdGFnc1xuICAgICAgICB9XG4gICAgICAgIGxldCB2aXNpdG9yX2luZm8gPSBHVE0uZ2V0VmlzaXRvckluZm8oKVxuICAgICAgICBpZiAodmlzaXRvcl9pbmZvICYmIHZpc2l0b3JfaW5mby52aXNpdF9pZCkge1xuICAgICAgICAgICAgZGF0YS52aXNpdF9pZCA9IHZpc2l0b3JfaW5mby52aXNpdF9pZFxuICAgICAgICAgICAgZGF0YS52aXNpdG9yX2lkID0gdmlzaXRvcl9pbmZvLnZpc2l0b3JfaWRcbiAgICAgICAgfVxuICAgICAgICBsZXQgZ3RtX2RhdGEgPSB7ICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnRG9jQWRzQm9va2luZ1N1Ym1pdENsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdldmVudCc6ICdkb2MtYWRzLWJvb2tpbmctU3VibWl0LWNsaWNrJyB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1fZGF0YSB9KVxuICAgICAgICB0aGlzLnByb3BzLnNhdmVMZWFkUGhuTnVtYmVyKHBob25lX251bWJlcilcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5pc19sZWFkX2VuYWJsZWQgJiYgIVNUT1JBR0UuaXNBZ2VudCl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc19sZWFkX2VuYWJsZWQ6ZmFsc2V9KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5Ob25JcGRCb29raW5nTGVhZChkYXRhKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNfbGVhZF9lbmFibGVkOnRydWV9KVxuICAgICAgICAgICAgfSwgNTAwMClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdG9fYmVfZm9yY2U6IDAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcHBlbmRQYXJhbVRvVXJsKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjbG9zZUlwZExlYWRQb3B1cChmcm9tKSB7XG4gICAgICAgIGlmIChmcm9tKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0RvY0Fkc0Jvb2tpbmdDcm9zc0NsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdldmVudCc6ICdkb2MtYWRzLWJvb2tpbmctY3Jvc3MtY2xpY2snXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvX2JlX2ZvcmNlOiAwIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZFBhcmFtVG9VcmwoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFwcGVuZFBhcmFtVG9VcmwoKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHZhciBuZXd1cmwgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdCArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyAnJmlzX2RvY0Fkc19sZWFkPScgKyB0aGlzLnN0YXRlLnRvX2JlX2ZvcmNlO1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHsgcGF0aDogbmV3dXJsIH0sICcnLCBuZXd1cmwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IGRvY3RvckRldGFpbHMgPSB0aGlzLnByb3BzLkRPQ1RPUlNbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl1cbiAgICAgICAgbGV0IGRvY3RvckNvdXBvbnMgPSB0aGlzLnByb3BzLmRvY3RvckNvdXBvbnNbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl0gfHwgW11cbiAgICAgICAgbGV0IGhvc3BpdGFsID0ge31cbiAgICAgICAgbGV0IHBhdGllbnQgPSBudWxsXG4gICAgICAgIGxldCBwcmljZURhdGEgPSB7fVxuICAgICAgICBsZXQgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgPSBmYWxzZVxuICAgICAgICBsZXQgaXNfc2VsZWN0ZWRfdXNlcl9pbnN1cmVkID0gZmFsc2VcbiAgICAgICAgbGV0IGVuYWJsZWRfZm9yX2NvZF9wYXltZW50ID0gZmFsc2VcbiAgICAgICAgbGV0IGVuYWJsZWRfZm9yX3ByZXBhaWRfcGF5bWVudCA9IGZhbHNlXG4gICAgICAgIGxldCBpc19kZWZhdWx0X3VzZXJfaW5zdXJlZCA9IGZhbHNlXG4gICAgICAgIGxldCBpc19pbnN1cmFuY2VfYnV5X2FibGUgPSBmYWxzZVxuICAgICAgICBsZXQgaW5zdXJhbmNlX2Vycm9yX21zZyA9ICcnXG4gICAgICAgIGxldCBzaG93X2luc3VyYW5jZV9lcnJvciA9IGZhbHNlXG4gICAgICAgIGxldCBwYXltZW50X21vZGVfY291bnQgPSAwXG4gICAgICAgIGxldCBpc192aXBfYXBwbGljYWJsZSA9IGZhbHNlXG4gICAgICAgIGxldCBpc19zZWxlY3RlZF91c2VyX2luc3VyYW5jZV9zdGF0dXNcbiAgICAgICAgbGV0IGlzX3NlbGVjdGVkX3VzZXJfdW5kZXJfdmlwID0gZmFsc2VcbiAgICAgICAgbGV0IGlzX2RlZmF1bHRfdXNlcl91bmRlcl92aXAgPSBmYWxzZVxuICAgICAgICBsZXQgaXNfc2VsZWN0ZWRfdXNlcl9nb2xkID0gZmFsc2VcbiAgICAgICAgbGV0IGNvdmVyX3VuZGVyX3ZpcCA9IGZhbHNlXG4gICAgICAgIGxldCB2aXBfZGF0YSA9IHt9XG4gICAgICAgIGxldCBoaWRlX3ByZXBhaWQgPSBmYWxzZVxuICAgICAgICBsZXQgYWxsX2NpdGllcyA9IHRoaXMucHJvcHMuRE9DVE9SU1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXSAmJiB0aGlzLnByb3BzLkRPQ1RPUlNbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl0uYWxsX2NpdGllcyA/IHRoaXMucHJvcHMuRE9DVE9SU1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXS5hbGxfY2l0aWVzIDogW11cbiAgICAgICAgaWYgKGRvY3RvckRldGFpbHMpIHtcbiAgICAgICAgICAgIGxldCB7IG5hbWUsIHF1YWxpZmljYXRpb25zLCBob3NwaXRhbHMsIGVuYWJsZWRfZm9yX2NvZCB9ID0gZG9jdG9yRGV0YWlsc1xuXG4gICAgICAgICAgICBpZiAoaG9zcGl0YWxzICYmIGhvc3BpdGFscy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBob3NwaXRhbHMubWFwKChoc3B0bCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaHNwdGwuaG9zcGl0YWxfaWQgPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWwgPSBoc3B0bFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWRfZm9yX2NvZF9wYXltZW50ID0gaG9zcGl0YWwuZW5hYmxlZF9mb3JfY29kXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWRfZm9yX3ByZXBhaWRfcGF5bWVudCA9IGhvc3BpdGFsLmVuYWJsZWRfZm9yX3ByZXBhaWRcbiAgICAgICAgICAgICAgICAgICAgaGlkZV9wcmVwYWlkID0gWzQyOTAsIDMyNDEsIDMyNDAsIDM1NjBdLmluZGV4T2YoaG9zcGl0YWwuaG9zcGl0YWxfaWQpID09IC0xXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZSAmJiB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGVdKSB7XG4gICAgICAgICAgICBpc19kZWZhdWx0X3VzZXJfaW5zdXJlZCA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0uaXNfaW5zdXJlZFxuICAgICAgICAgICAgaXNfZGVmYXVsdF91c2VyX3VuZGVyX3ZpcCA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0uaXNfdmlwX21lbWJlclxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdICYmICF0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlXS5pc0R1bW15VXNlcikge1xuICAgICAgICAgICAgcGF0aWVudCA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdXG4gICAgICAgICAgICBpc19zZWxlY3RlZF91c2VyX2luc3VyZWQgPSB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlXS5pc19pbnN1cmVkXG4gICAgICAgICAgICBpc19zZWxlY3RlZF91c2VyX2luc3VyYW5jZV9zdGF0dXMgPSB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlXS5pbnN1cmFuY2Vfc3RhdHVzXG4gICAgICAgICAgICBpc19zZWxlY3RlZF91c2VyX3VuZGVyX3ZpcCA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdLmlzX3ZpcF9tZW1iZXJcbiAgICAgICAgICAgIGlzX3NlbGVjdGVkX3VzZXJfZ29sZCA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdLmlzX3ZpcF9nb2xkX21lbWJlclxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkU2xvdCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5kYXRlKSB7XG4gICAgICAgICAgICBwcmljZURhdGEgPSB7IC4uLnRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LnRpbWUgfVxuICAgICAgICAgICAgcHJpY2VEYXRhLnBheWFibGVfYW1vdW50ID0gcHJpY2VEYXRhLmRlYWxfcHJpY2VcbiAgICAgICAgICAgIHByaWNlRGF0YS5pc19jb2RfZGVhbF9wcmljZSA9IHByaWNlRGF0YS5jb2RfZGVhbF9wcmljZSA/IHByaWNlRGF0YS5jb2RfZGVhbF9wcmljZSA6IHByaWNlRGF0YS5tcnBcbiAgICAgICAgICAgIGlmIChob3NwaXRhbCAmJiBob3NwaXRhbC5pbnN1cmFuY2UpIHtcbiAgICAgICAgICAgICAgICBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSA9IChwYXJzZUludChwcmljZURhdGEuZGVhbF9wcmljZSkgPD0gaG9zcGl0YWwuaW5zdXJhbmNlLmluc3VyYW5jZV90aHJlc2hvbGRfYW1vdW50KSAmJiBob3NwaXRhbC5pbnN1cmFuY2UuaXNfaW5zdXJhbmNlX2NvdmVyZWRcbiAgICAgICAgICAgICAgICBpZiAoaG9zcGl0YWwuaW5zdXJhbmNlLmVycm9yX21lc3NhZ2UgIT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zdXJhbmNlX2Vycm9yX21zZyA9IGhvc3BpdGFsLmluc3VyYW5jZS5lcnJvcl9tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgIHNob3dfaW5zdXJhbmNlX2Vycm9yID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChob3NwaXRhbCAmJiBob3NwaXRhbC52aXApIHtcbiAgICAgICAgICAgICAgICBpc192aXBfYXBwbGljYWJsZSA9IGhvc3BpdGFsLnZpcC5jb3Zlcl91bmRlcl92aXAgJiYgaXNfc2VsZWN0ZWRfdXNlcl91bmRlcl92aXBcblxuICAgICAgICAgICAgICAgIHZpcF9kYXRhID0gaG9zcGl0YWwudmlwXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gcmVzZXQgdGltZSBzbG90IGlmIGRvY3Rvci9ob3NwaXRhbCBjaGFuZ2VzXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3Quc2VsZWN0ZWRDbGluaWMgIT0gdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pYyB8fCB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5zZWxlY3RlZERvY3RvciAhPSB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhT25DbGluaWNDaGFuZ2UoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGhvc3BpdGFsKSB7XG4gICAgICAgICAgICBwcmljZURhdGEubXJwID0gaG9zcGl0YWwubXJwXG4gICAgICAgICAgICBwcmljZURhdGEuZmVlcyA9IGhvc3BpdGFsLmZlZXNcbiAgICAgICAgICAgIHByaWNlRGF0YS5kZWFsX3ByaWNlID0gaG9zcGl0YWwuZGVhbF9wcmljZVxuICAgICAgICAgICAgcHJpY2VEYXRhLnBheWFibGVfYW1vdW50ID0gaG9zcGl0YWwuZGVhbF9wcmljZVxuICAgICAgICAgICAgcHJpY2VEYXRhLmlzX2NvZF9kZWFsX3ByaWNlID0gaG9zcGl0YWwuY29kX2RlYWxfcHJpY2UgPyBob3NwaXRhbC5jb2RfZGVhbF9wcmljZSA6IGhvc3BpdGFsLm1ycFxuXG4gICAgICAgICAgICBpZiAoaG9zcGl0YWwudmlwKSB7XG4gICAgICAgICAgICAgICAgaXNfdmlwX2FwcGxpY2FibGUgPSBob3NwaXRhbC52aXAuY292ZXJfdW5kZXJfdmlwICYmIGlzX3NlbGVjdGVkX3VzZXJfdW5kZXJfdmlwXG5cbiAgICAgICAgICAgICAgICB2aXBfZGF0YSA9IGhvc3BpdGFsLnZpcFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhvc3BpdGFsLmluc3VyYW5jZSkge1xuICAgICAgICAgICAgICAgIGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlID0gKHBhcnNlSW50KGhvc3BpdGFsLmRlYWxfcHJpY2UpIDw9IGhvc3BpdGFsLmluc3VyYW5jZS5pbnN1cmFuY2VfdGhyZXNob2xkX2Ftb3VudCkgJiYgaG9zcGl0YWwuaW5zdXJhbmNlLmlzX2luc3VyYW5jZV9jb3ZlcmVkXG4gICAgICAgICAgICAgICAgaWYgKGhvc3BpdGFsLmluc3VyYW5jZS5lcnJvcl9tZXNzYWdlICE9ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc3VyYW5jZV9lcnJvcl9tc2cgPSBob3NwaXRhbC5pbnN1cmFuY2UuZXJyb3JfbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICBzaG93X2luc3VyYW5jZV9lcnJvciA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBsZXQgdHJlYXRtZW50X1ByaWNlID0gMCwgdHJlYXRtZW50X21ycCA9IDBcbiAgICAgICAgbGV0IHNlbGVjdGVkUHJvY2VkdXJlcyA9IHt9XG4gICAgICAgIGlmIChmYWxzZSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdICYmIHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl1bdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY10gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXVt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXS5wcmljZSkge1xuXG4gICAgICAgICAgICB0cmVhdG1lbnRfUHJpY2UgPSB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdW3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWNdLnByaWNlLmRlYWxfcHJpY2UgfHwgMFxuICAgICAgICAgICAgdHJlYXRtZW50X21ycCA9IHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl1bdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY10ucHJpY2UubXJwIHx8IDBcbiAgICAgICAgICAgIHNlbGVjdGVkUHJvY2VkdXJlcyA9IHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl1bdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY10uY2F0ZWdvcmllc1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRvdGFsX3ByaWNlID0gcGFyc2VJbnQocHJpY2VEYXRhLm1ycCkgLy8rIHRyZWF0bWVudF9QcmljZVxuICAgICAgICBsZXQgZmluYWxQcmljZSA9IHRvdGFsX3ByaWNlID8gcGFyc2VJbnQodG90YWxfcHJpY2UpIDogMFxuICAgICAgICBsZXQgZGlzcGxheV9yYWRpb19wcmVwYWlkX3ByaWNlID0gcGFyc2VJbnQocHJpY2VEYXRhLmRlYWxfcHJpY2UpXG5cbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmlzX2Nhc2hiYWNrICYmIHRoaXMucHJvcHMucGF5bWVudF90eXBlICE9IDYpIHtcbiAgICAgICAgICAgIGRpc3BsYXlfcmFkaW9fcHJlcGFpZF9wcmljZSA9IGRpc3BsYXlfcmFkaW9fcHJlcGFpZF9wcmljZSAtICh0aGlzLnByb3BzLmRpc0NvdW50ZWRPcGRQcmljZSB8fCAwKVxuICAgICAgICAgICAgZmluYWxQcmljZSA9IHRvdGFsX3ByaWNlID8gcGFyc2VJbnQodG90YWxfcHJpY2UpIC0gKHRoaXMucHJvcHMuZGlzQ291bnRlZE9wZFByaWNlID8gdGhpcy5wcm9wcy5kaXNDb3VudGVkT3BkUHJpY2UgOiAwKSA6IDBcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0b3RhbF93YWxsZXRfYmFsYW5jZSA9IDBcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudXNlcldhbGxldEJhbGFuY2UgPj0gMCAmJiB0aGlzLnByb3BzLnVzZXJDYXNoYmFja0JhbGFuY2UgPj0gMCkge1xuICAgICAgICAgICAgdG90YWxfd2FsbGV0X2JhbGFuY2UgPSB0aGlzLnByb3BzLnVzZXJXYWxsZXRCYWxhbmNlICsgdGhpcy5wcm9wcy51c2VyQ2FzaGJhY2tCYWxhbmNlXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGVyY2VudF9kaXNjb3VudCA9IE1hdGgubWF4KDAsIChmaW5hbFByaWNlIC8gKHBhcnNlSW50KHByaWNlRGF0YS5tcnApICsgdHJlYXRtZW50X21ycCkpICogMTAwKVxuICAgICAgICBwZXJjZW50X2Rpc2NvdW50ID0gcGFyc2VJbnQoMTAwIC0gcGVyY2VudF9kaXNjb3VudClcbiAgICAgICAgbGV0IGRvY0Rpc2NvdW50ID0gKHBhcnNlSW50KHByaWNlRGF0YS5tcnApICsgdHJlYXRtZW50X21ycCkgLSAocGFyc2VJbnQocHJpY2VEYXRhLmlzX2NvZF9kZWFsX3ByaWNlKSlcbiAgICAgICAgbGV0IGNvZF9wZXJjZW50YWdlX2Rpc2NvdW50ID0gKHBhcnNlSW50KGRvY0Rpc2NvdW50KSAvIChwYXJzZUludChwcmljZURhdGEubXJwKSkgKiAxMDApXG4gICAgICAgIGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlID0gaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgJiYgaXNfc2VsZWN0ZWRfdXNlcl9pbnN1cmVkXG5cbiAgICAgICAgLy9GbGFnIHRvIHNob3cgZ29sZCBTaW5nbGUgRmxvdyBQbGFuc1xuICAgICAgICBsZXQgc2hvd0dvbGRUb2dnbGVQYXltZW50TW9kZSA9ICF0aGlzLnByb3BzLmlzX2FueV91c2VyX2J1eV9nb2xkICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5vcGQgJiYgdGhpcy5wcm9wcy5vZHBHb2xkUHJlZGljdGVkUHJpY2UgJiYgdGhpcy5wcm9wcy5vZHBHb2xkUHJlZGljdGVkUHJpY2UubGVuZ3RoICYmICFpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiAodGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5vcGQuZ29sZF9wcmljZSArIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4ub3BkLmNvbnZlbmllbmNlX2NoYXJnZSkgPCBkaXNwbGF5X3JhZGlvX3ByZXBhaWRfcHJpY2VcblxuICAgICAgICAvL0lmIE9ubHkgQ09EIGFwcGxpY2FibGUgdGhlbiBkb24ndCBzaG93IHNpbmdsZSBmbG93IGdvbGRcbiAgICAgICAgaWYgKGVuYWJsZWRfZm9yX2NvZF9wYXltZW50ICYmICFlbmFibGVkX2Zvcl9wcmVwYWlkX3BheW1lbnQpIHtcbiAgICAgICAgICAgIHNob3dHb2xkVG9nZ2xlUGF5bWVudE1vZGUgPSBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgLy9IaWRlIFByZXBhaWQgXG4gICAgICAgIGVuYWJsZWRfZm9yX3ByZXBhaWRfcGF5bWVudCA9IGhpZGVfcHJlcGFpZCAmJiBlbmFibGVkX2Zvcl9wcmVwYWlkX3BheW1lbnRcbiAgICAgICAgaWYgKHNob3dHb2xkVG9nZ2xlUGF5bWVudE1vZGUpXG4gICAgICAgICAgICBwYXltZW50X21vZGVfY291bnQrK1xuXG4gICAgICAgIGxldCBzaG93Q29kUGF5bWVudE1vZGUgPSAvKiFpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiAhaXNfdmlwX2FwcGxpY2FibGUgJiYqLyBlbmFibGVkX2Zvcl9jb2RfcGF5bWVudCAmJiAhKHBhcnNlZC5hcHBvaW50bWVudF9pZCAmJiBwYXJzZWQuY29kX3RvX3ByZXBhaWQgPT0gJ3RydWUnKSAvKiYmICEodmlwX2RhdGEuaG9zcF9pc19nb2xkICYmIGlzX3NlbGVjdGVkX3VzZXJfZ29sZCkqL1xuXG4gICAgICAgIGxldCByZXNldFBheW1lbnRUeXBlID0gZmFsc2VcbiAgICAgICAgaWYgKCFzaG93R29sZFRvZ2dsZVBheW1lbnRNb2RlICYmIHRoaXMucHJvcHMucGF5bWVudF90eXBlID09IDYpIHtcbiAgICAgICAgICAgIHJlc2V0UGF5bWVudFR5cGUgPSB0cnVlXG4gICAgICAgIH0gZWxzZSBpZiAoKCFzaG93Q29kUGF5bWVudE1vZGUgfHwgKHNob3dDb2RQYXltZW50TW9kZSAmJiBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSkpICYmIHRoaXMucHJvcHMucGF5bWVudF90eXBlID09IDIpIHtcbiAgICAgICAgICAgIHJlc2V0UGF5bWVudFR5cGUgPSB0cnVlXG4gICAgICAgIH0gZWxzZSBpZiAoIWVuYWJsZWRfZm9yX3ByZXBhaWRfcGF5bWVudCAmJiB0aGlzLnByb3BzLnBheW1lbnRfdHlwZSA9PSAxKSB7XG4gICAgICAgICAgICByZXNldFBheW1lbnRUeXBlID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc2V0UGF5bWVudFR5cGUgJiYgdGhpcy5wcm9wcy5zaG93X2RvY3Rvcl9wYXltZW50X21vZGUpIHtcbiAgICAgICAgICAgIGlmIChzaG93R29sZFRvZ2dsZVBheW1lbnRNb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3Rfb3BkX3BheW1lbnRfdHlwZSg2KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG93Q29kUGF5bWVudE1vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdF9vcGRfcGF5bWVudF90eXBlKDIpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVuYWJsZWRfZm9yX3ByZXBhaWRfcGF5bWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0X29wZF9wYXltZW50X3R5cGUoMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChob3NwaXRhbCAmJiBob3NwaXRhbC5pbnN1cmFuY2UgJiYgKHBhcnNlSW50KGhvc3BpdGFsLmRlYWxfcHJpY2UpIDw9IGhvc3BpdGFsLmluc3VyYW5jZS5pbnN1cmFuY2VfdGhyZXNob2xkX2Ftb3VudCkgJiYgaG9zcGl0YWwuaW5zdXJhbmNlLmlzX2luc3VyYW5jZV9jb3ZlcmVkICYmICFpc19zZWxlY3RlZF91c2VyX2luc3VyZWQpIHtcbiAgICAgICAgICAgIGlzX2luc3VyYW5jZV9idXlfYWJsZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW5hYmxlZF9mb3JfcHJlcGFpZF9wYXltZW50KVxuICAgICAgICAgICAgcGF5bWVudF9tb2RlX2NvdW50KytcbiAgICAgICAgaWYgKHNob3dDb2RQYXltZW50TW9kZSlcbiAgICAgICAgICAgIHBheW1lbnRfbW9kZV9jb3VudCsrXG4gICAgICAgIC8vIGlmIChlbmFibGVkX2Zvcl9wcmVwYWlkX3BheW1lbnQgJiYgaXNfaW5zdXJhbmNlX2J1eV9hYmxlKVxuICAgICAgICAvLyAgICAgcGF5bWVudF9tb2RlX2NvdW50KytcbiAgICAgICAgbGV0IGNsaW5pY19tcnAgPSBwcmljZURhdGEubXJwXG4gICAgICAgIGlmIChpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiB0aGlzLnByb3BzLnBheW1lbnRfdHlwZSAhPSAyKSB7XG4gICAgICAgICAgICBmaW5hbFByaWNlID0gMFxuICAgICAgICAgICAgcHJpY2VEYXRhLmRlYWxfcHJpY2UgPSAwXG4gICAgICAgICAgICBwcmljZURhdGEubXJwID0gMFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC8qcHJpY2VEYXRhLmZlZXMgPT0gMCAmJiAqLyFpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiAhdGhpcy5zdGF0ZS5pc19jYXNoYmFjaykge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMucGF5bWVudF90eXBlID09IDEpIHtcbiAgICAgICAgICAgICAgICBmaW5hbFByaWNlID0gcGFyc2VJbnQocHJpY2VEYXRhLmRlYWxfcHJpY2UpIC0gKHRoaXMucHJvcHMuZGlzQ291bnRlZE9wZFByaWNlID8gdGhpcy5wcm9wcy5kaXNDb3VudGVkT3BkUHJpY2UgOiAwKVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnBheW1lbnRfdHlwZSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgZmluYWxQcmljZSA9IHBhcnNlSW50KHByaWNlRGF0YS5pc19jb2RfZGVhbF9wcmljZSkgLSAodGhpcy5wcm9wcy5kaXNDb3VudGVkT3BkUHJpY2UgPyB0aGlzLnByb3BzLmRpc0NvdW50ZWRPcGRQcmljZSA6IDApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpc19hZGRfdG9fY2FyZCA9IFNUT1JBR0UuaXNBZ2VudCgpIHx8ICFpc19kZWZhdWx0X3VzZXJfaW5zdXJlZFxuXG4gICAgICAgIC8vU2VsZWN0IE5leHQgVXBjb21pbmcgRGF0ZSBcblxuICAgICAgICBsZXQgeyBkYXRlLCB0aW1lIH0gPSB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdFxuXG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSkudG9EYXRlU3RyaW5nKClcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB1cGNvbWluZ19kYXRlID0gdGhpcy5wcm9wcy51cGNvbWluZ19zbG90cyAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnVwY29taW5nX3Nsb3RzKS5sZW5ndGggPyBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnVwY29taW5nX3Nsb3RzKVswXSA6ICcnXG4gICAgICAgIGxldCBkYXRlQWZ0ZXIyNERheXMgPSBuZXcgRGF0ZSgpLnNldERhdGUobmV3IERhdGUoKS5nZXREYXRlKCkgKyAyMylcbiAgICAgICAgbGV0IHNob3dQb3B1cCA9IHBhcnNlZC5zaG93UG9wdXAgJiYgcGFyc2VkLnNob3dQb3B1cCA9PSBcInRydWVcIiAmJiB0aGlzLnN0YXRlLnNob3dJcGRMZWFkRm9ybSAmJiB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdy5PTl9MQU5ESU5HX1BBR0UgJiYgIXRoaXMucHJvcHMuaXNfaXBkX2Zvcm1fc3VibWl0dGVkXG4gICAgICAgIGxldCBpc190aW1lX3NlbGVjdGVkID0gKHRoaXMucHJvcHMudXBjb21pbmdfc2xvdHMgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy51cGNvbWluZ19zbG90cykubGVuZ3RoKSB8fCAodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QuZGF0ZSkgfHwgKHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlRm9ybWF0KVxuXG4gICAgICAgIGxldCB2aXBfZGlzY291bnRfcHJpY2UgPSAwLy9maW5hbFByaWNlIC0gKHZpcF9nb2xkX3ByaWNlICsgdmlwX2NvbnZlbmllbmNlX2Ftb3VudClcbiAgICAgICAgbGV0IHRvdGFsX2Ftb3VudF9wYXlhYmxlID0gZmluYWxQcmljZVxuICAgICAgICAvLyBpc19zZWxlY3RlZF91c2VyX2dvbGQgPSB2aXBfZGF0YS5jb3Zlcl91bmRlcl92aXAgJiYgaXNfc2VsZWN0ZWRfdXNlcl9nb2xkXG4gICAgICAgIGNvdmVyX3VuZGVyX3ZpcCA9IHZpcF9kYXRhLmNvdmVyX3VuZGVyX3ZpcFxuXG4gICAgICAgIGxldCBpc19jb3Zlcl91bmRlcl92aXBfZ29sZCA9IGZhbHNlXG4gICAgICAgIGlmICh2aXBfZGF0YSAmJiAodmlwX2RhdGEuaXNfZW5hYmxlX2Zvcl92aXApKSB7XG5cbiAgICAgICAgICAgIHZpcF9kaXNjb3VudF9wcmljZSA9IHRvdGFsX3ByaWNlIC0gdmlwX2RhdGEudmlwX2Ftb3VudFxuXG4gICAgICAgICAgICBpZiAoLyp2aXBfZGF0YS5ob3NwX2lzX2dvbGQgJiYgKi9pc19zZWxlY3RlZF91c2VyX2dvbGQgJiYgY292ZXJfdW5kZXJfdmlwKSB7XG4gICAgICAgICAgICAgICAgaXNfY292ZXJfdW5kZXJfdmlwX2dvbGQgPSB0cnVlXG4gICAgICAgICAgICAgICAgdG90YWxfYW1vdW50X3BheWFibGUgPSB2aXBfZGF0YS52aXBfYW1vdW50ICsgdmlwX2RhdGEudmlwX2NvbnZlbmllbmNlX2Ftb3VudCAtICh0aGlzLnN0YXRlLmlzX2Nhc2hiYWNrID8gMCA6ICh0aGlzLnByb3BzLmRpc0NvdW50ZWRPcGRQcmljZSB8fCAwKSlcbiAgICAgICAgICAgICAgICB2aXBfZGlzY291bnRfcHJpY2UgPSB0b3RhbF9wcmljZSAtICh2aXBfZGF0YS52aXBfYW1vdW50ICsgdmlwX2RhdGEudmlwX2NvbnZlbmllbmNlX2Ftb3VudClcbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNfdmlwX2FwcGxpY2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNfY292ZXJfdW5kZXJfdmlwX2dvbGQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0b3RhbF9hbW91bnRfcGF5YWJsZSA9IHZpcF9kYXRhLnZpcF9hbW91bnQgLSAodGhpcy5zdGF0ZS5pc19jYXNoYmFjayA/IDAgOiAodGhpcy5wcm9wcy5kaXNDb3VudGVkT3BkUHJpY2UgfHwgMCkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2aXBfZGF0YS5ob3NwX2lzX2dvbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdmlwX2Rpc2NvdW50X3ByaWNlID0gdG90YWxfcHJpY2UgLSAodmlwX2RhdGEudmlwX2dvbGRfcHJpY2UgKyB2aXBfZGF0YS52aXBfY29udmVuaWVuY2VfYW1vdW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsUHJpY2UgPSB0b3RhbF9hbW91bnRfcGF5YWJsZVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vU0VUIFBBWU1FTlQgU1VNTUFSWSBQUklDRVxuICAgICAgICBsZXQgZGlzcGxheV90b3RhbF9tcnAgPSBwYXJzZUludChwcmljZURhdGEubXJwKSArIHRyZWF0bWVudF9tcnBcbiAgICAgICAgbGV0IGRpc3BsYXlfZG9jcHJpbWVfZGlzY291bnQgPSBkaXNwbGF5X3RvdGFsX21ycCAtIChwYXJzZUludChwcmljZURhdGEuZGVhbF9wcmljZSkgKyB0cmVhdG1lbnRfUHJpY2UpXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5pc19hbnlfdXNlcl9idXlfZ29sZCAmJiB0aGlzLnByb3BzLnBheW1lbnRfdHlwZSA9PSA2ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5vcGQpIHtcbiAgICAgICAgICAgIGRpc3BsYXlfdG90YWxfbXJwID0gKHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4ub3BkLm1ycCB8fCAwKVxuICAgICAgICAgICAgZGlzcGxheV9kb2NwcmltZV9kaXNjb3VudCA9IGRpc3BsYXlfdG90YWxfbXJwIC0gKHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4ub3BkLmdvbGRfcHJpY2UgKyB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLm9wZC5jb252ZW5pZW5jZV9jaGFyZ2UpXG4gICAgICAgICAgICBmaW5hbFByaWNlID0gKHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4ub3BkLmdvbGRfcHJpY2UgfHwgMCkgKyAodGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5vcGQuY29udmVuaWVuY2VfY2hhcmdlKSArIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4uZGVhbF9wcmljZS8vIC0gKHRoaXMucHJvcHMuZGlzQ291bnRlZE9wZFByaWNlfHwwKVxuICAgICAgICAgICAgdG90YWxfYW1vdW50X3BheWFibGUgPSB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLm9wZC5nb2xkX3ByaWNlICsgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5vcGQuY29udmVuaWVuY2VfY2hhcmdlICsgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5kZWFsX3ByaWNlLy8gLSAodGhpcy5wcm9wcy5kaXNDb3VudGVkT3BkUHJpY2V8fDApXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZXh0cmFQYXJhbXMgPSB7XG4gICAgICAgICAgICBpc19nb2xkX21lbWJlcjogdmlwX2RhdGEgJiYgdmlwX2RhdGEuaXNfZ29sZCAmJiBpc19zZWxlY3RlZF91c2VyX2dvbGQsXG4gICAgICAgICAgICB0b3RhbF9hbW91bnRfcGF5YWJsZTogdG90YWxfYW1vdW50X3BheWFibGVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vRGlzYWJsZSBBbGwgUmV0YWlsIEJvb2tpbmdzXG4gICAgICAgIGxldCBkaXNhYmxlX2FsbF9ib29raW5ncyA9ICEoaXNfY292ZXJfdW5kZXJfdmlwX2dvbGQgfHwgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUpXG4gICAgICAgIGlmKFNUT1JBR0UuY2hlY2tBdXRoKCkpe1xuXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZGlzYWJsZV9hbGxfYm9va2luZ3MgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgYm9va2luZ1BhZ2U9e3RydWV9IHN1bW1hcnlQYWdlPXt0cnVlfS8+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvKnRoaXMuc3RhdGUuc2hvd19iYW5uZXIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPEJvb2tpbmdDb25maXJtYXRpb25Qb3B1cCB7Li4udGhpcy5wcm9wc30gcHJpY2VDb25maXJtYXRpb25Qb3B1cD17dGhpcy5wcmljZUNvbmZpcm1hdGlvblBvcHVwLmJpbmQodGhpcyl9IGlzX3ZpcF9hcHBsaWNhYmxlPXtpc192aXBfYXBwbGljYWJsZX0gaXNfaW5zdXJhbmNlX2FwcGxpY2FibGU9e2lzX2luc3VyYW5jZV9hcHBsaWNhYmxlfSBzaG93X2Jhbm5lcj17dGhpcy5zdGF0ZS5zaG93X2Jhbm5lcn0gYmFubmVyQ29uZmlybWF0aW9uUG9wdXA9e3RoaXMuYmFubmVyQ29uZmlybWF0aW9uUG9wdXAuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogJycqL1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0NvbmZpcm1hdGlvblBvcHVwID09ICdvcGVuJyAmJiBpc19zZWxlY3RlZF91c2VyX2luc3VyYW5jZV9zdGF0dXMgIT0gNCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9va2luZ0NvbmZpcm1hdGlvblBvcHVwIHsuLi50aGlzLnByb3BzfSBwcmljZUNvbmZpcm1hdGlvblBvcHVwPXt0aGlzLnByaWNlQ29uZmlybWF0aW9uUG9wdXAuYmluZCh0aGlzKX0gaXNfdmlwX2FwcGxpY2FibGU9e2lzX3ZpcF9hcHBsaWNhYmxlfSBpc19pbnN1cmFuY2VfYXBwbGljYWJsZT17aXNfaW5zdXJhbmNlX2FwcGxpY2FibGV9IHNob3dfYmFubmVyPXt0aGlzLnN0YXRlLnNob3dfYmFubmVyfSBiYW5uZXJDb25maXJtYXRpb25Qb3B1cD17dGhpcy5iYW5uZXJDb25maXJtYXRpb25Qb3B1cC5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd19sZW5zZml0X3BvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZW5zZml0UG9wdXAgey4uLnRoaXMucHJvcHN9IGxlbnNmaXRfY291cG9ucz17dGhpcy5zdGF0ZS5sZW5zZml0X2NvdXBvbnN9IGFwcGx5TGVuc0ZpdENvdXBvbnM9e3RoaXMuYXBwbHlMZW5zRml0Q291cG9ucy5iaW5kKHRoaXMpfSBjbG9zZUxlbnNGaXRQb3B1cD17dGhpcy5jbG9zZUxlbnNGaXRQb3B1cC5iaW5kKHRoaXMpfSBkZWFsX3ByaWNlPXtwcmljZURhdGEuZGVhbF9wcmljZX0gaXNPUEQ9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbi8qICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5zaG93Tm9uSXBkUG9wdXAgPT0gMSB8fCB0aGlzLnN0YXRlLnNob3dOb25JcGRQb3B1cCA9PSAyKSAmJiB0aGlzLnN0YXRlLnRvX2JlX2ZvcmNlID09IDE/XG4gICAgICAgICAgICAgICAgICAgICAgICA8Tm9uSXBkUG9wdXBWaWV3IHsuLi50aGlzLnByb3BzfSBub25JcGRMZWFkcz17dGhpcy5ub25JcGRMZWFkc0RvY0Fkcy5iaW5kKHRoaXMpfSBjbG9zZUlwZExlYWRQb3B1cD17dGhpcy5jbG9zZUlwZExlYWRQb3B1cC5iaW5kKHRoaXMpfSBpc19mb3JjZT17dGhpcy5zdGF0ZS5zaG93Tm9uSXBkUG9wdXB9IGlzX2Jvb2tpbmc9e3RydWV9IGRvY3Rvcl9pZD17dGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcn0gaG9zcGl0YWxfaWQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnKi9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvL1Nob3cgVmlwIEdvbGQgU2luZ2xlIEZsb3cgUHJpY2UgTGlzdFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dHb2xkUHJpY2VMaXN0ICYmIDxWaXBHb2xkUGFja2FnZSBoaXN0b3J5T2JqPXt0aGlzLnByb3BzLmhpc3Rvcnl9IHZpcEdvbGRQbGFucz17dGhpcy5wcm9wcy5vZHBHb2xkUHJlZGljdGVkUHJpY2V9IHRvZ2dsZUdvbGRQcmljZVBvcHVwPXt0aGlzLnRvZ2dsZUdvbGRQcmljZVBvcHVwfSB0b2dnbGVHb2xkUGxhbnM9eyh2YWwpID0+IHRoaXMudG9nZ2xlR29sZFBsYW5zKHZhbCl9IHNlbGVjdGVkX3ZpcF9wbGFuPXt0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFufSBnb1RvR29sZFBhZ2U9e3RoaXMuZ29Ub0dvbGRQYWdlfSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucGF5bWVudEJ0bkNsaWNrZWQgPyA8ZGl2IGNsYXNzTmFtZT1cImJrbmctdGltZS1vdmVybGF5XCI+PExvYWRlciAvPjwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb2RFcnJvciA/IDxDb2RFcnJvclBvcHVwIGNvZEVycm9yQ2xpY2tlZD17KCkgPT4gdGhpcy5jb2RFcnJvckNsaWNrZWQoKX0gY29kTXNnPXt0aGlzLnByb3BzLmNvZEVycm9yfSAvPiA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyLXRvcC1tYXJnaW4gY2xzLWJuclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGVmdEJhciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBjZW50ZXItY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ET0NUT1JTW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdICYmIHRoaXMucHJvcHMuREFUQV9GRVRDSCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1BvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElwZExlYWRGb3JtIHN1Ym1pdExlYWRGb3JtR2VuZXJhdGlvbj17dGhpcy5zdWJtaXRMZWFkRm9ybUdlbmVyYXRpb24uYmluZCh0aGlzKX0gey4uLnRoaXMucHJvcHN9IGhvc3BpdGFsX25hbWU9e2hvc3BpdGFsICYmIGhvc3BpdGFsLmhvc3BpdGFsX25hbWUgPyBob3NwaXRhbC5ob3NwaXRhbF9uYW1lIDogbnVsbH0gaG9zcGl0YWxfaWQ9e2hvc3BpdGFsICYmIGhvc3BpdGFsLmhvc3BpdGFsX2lkID8gaG9zcGl0YWwuaG9zcGl0YWxfaWQgOiBudWxsfSBkb2N0b3JfbmFtZT17dGhpcy5wcm9wcy5ET0NUT1JTW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdLmRpc3BsYXlfbmFtZSA/IHRoaXMucHJvcHMuRE9DVE9SU1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXS5kaXNwbGF5X25hbWUgOiBudWxsfSBkb2N0b3JfaWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3J9IGZvcm1Tb3VyY2U9J0RvY3RvckJvb2tpbmdQYWdlJyBzYXZlTGVhZElkRm9yVXBkYXRpb249e3RoaXMuc2F2ZUxlYWRJZEZvclVwZGF0aW9uLmJpbmQodGhpcyl9IG5vVG9hc3RNZXNzYWdlPXt0cnVlfSBpc19ib29raW5nX3BhZ2U9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLkRPQ1RPUlNbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl0gJiYgdGhpcy5zdGF0ZS5zaG93U2Vjb25kUG9wdXAgJiYgcGFyc2VkLmdldF9mZWVkYmFjayAmJiBwYXJzZWQuZ2V0X2ZlZWRiYWNrID09ICcxJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJcGRTZWNvbmRQb3B1cCB7Li4udGhpcy5wcm9wc30gZmlyc3RMZWFkSWQ9e3RoaXMuc3RhdGUuZmlyc3RMZWFkSWR9IGFsbF9kb2N0b3JzPXtbXX0gYWxsX2NpdGllcz17YWxsX2NpdGllc30gZG9jdG9yUHJvZmlsZVBhZ2U9e3RydWV9IHNlY29uZElwZEZvcm1TdWJtaXR0ZWQ9e3RoaXMuc2Vjb25kSXBkRm9ybVN1Ym1pdHRlZC5iaW5kKHRoaXMpfSBob3NwaXRhbF9uYW1lPXtob3NwaXRhbCAmJiBob3NwaXRhbC5ob3NwaXRhbF9uYW1lID8gaG9zcGl0YWwuaG9zcGl0YWxfbmFtZSA6IG51bGx9IGhvc3BpdGFsX2lkPXtob3NwaXRhbCAmJiBob3NwaXRhbC5ob3NwaXRhbF9pZCA/IGhvc3BpdGFsLmhvc3BpdGFsX2lkIDogbnVsbH0gZG9jdG9yX25hbWU9e3RoaXMucHJvcHMuRE9DVE9SU1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXS5uYW1lID8gdGhpcy5wcm9wcy5ET0NUT1JTW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdLm5hbWUgOiAnJ30gZm9ybVNvdXJjZT0nRG9jdG9yQm9va2luZ1BhZ2UnIGlzX2Jvb2tpbmdfcGFnZT17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZHItcHJvZmlsZS1zY3JlZW4gYm9va2luZy1jb25maXJtLXNjcmVlbiBtcmItNjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtcmItMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0ZWRDbGluaWNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvd0hpZGU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRG9jdG9yPXt0aGlzLnByb3BzLkRPQ1RPUlNbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2xpbmljPXt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5PXt0aGlzLnByb3BzLmhpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdENsaW5pYz17dGhpcy5zZWxlY3RDbGluaWMuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBuZXcgdGltZSBzbG90ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaG9vc2VQYXRpZW50TmV3VmlldyBwYXRpZW50PXtwYXRpZW50fSBuYXZpZ2F0ZVRvPXt0aGlzLm5hdmlnYXRlVG8uYmluZCh0aGlzKX0gey4uLnRoaXMucHJvcHN9IHByb2ZpbGVEYXRhQ29tcGxldGVkPXt0aGlzLnByb2ZpbGVEYXRhQ29tcGxldGVkLmJpbmQodGhpcyl9IHByb2ZpbGVFcnJvcj17dGhpcy5zdGF0ZS5wcm9maWxlRXJyb3J9IGRvY3RvclN1bW1hcnlQYWdlPVwidHJ1ZVwiIGlzX2lwZF9ob3NwaXRhbD17aG9zcGl0YWwgJiYgaG9zcGl0YWwuaXNfaXBkX2hvc3BpdGFsID8gaG9zcGl0YWwuaXNfaXBkX2hvc3BpdGFsIDogJyd9IGRvY3Rvcl9pZD17dGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcn0gaG9zcGl0YWxfaWQ9e2hvc3BpdGFsICYmIGhvc3BpdGFsLmhvc3BpdGFsX2lkID8gaG9zcGl0YWwuaG9zcGl0YWxfaWQgOiAnJ30gc2hvd19pbnN1cmFuY2VfZXJyb3I9e3Nob3dfaW5zdXJhbmNlX2Vycm9yfSBpbnN1cmFuY2VfZXJyb3JfbXNnPXtpbnN1cmFuY2VfZXJyb3JfbXNnfSBpc0VtYWlsTm90VmFsaWQ9e3RoaXMuc3RhdGUuaXNFbWFpbE5vdFZhbGlkfSBpc0RvYk5vdFZhbGlkPXt0aGlzLnN0YXRlLmlzRG9iTm90VmFsaWR9IGlzX29wZD17dHJ1ZX0gc2VuZEVtYWlsTm90aWZpY2F0aW9uPXt0aGlzLnNlbmRFbWFpbE5vdGlmaWNhdGlvbi5iaW5kKHRoaXMpfSBnZXREYXRhQWZ0ZXJMb2dpbj17dGhpcy5nZXREYXRhQWZ0ZXJMb2dpbn0gbm9uSXBkTGVhZHM9e3RoaXMubm9uSXBkTGVhZHMuYmluZCh0aGlzKX0gaXNfZG9jQWRzX2xlYWQ9e3RoaXMuc3RhdGUudG9fYmVfZm9yY2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlX2FsbF9ib29raW5ncz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgaW5mby1ydGwgbXJiLTE1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbGwgYm9va2luZ3MgYXJlIGRpc2FibGVkIGZvciBuZXcgcmV0YWlsIGN1c3RvbWVycy4gUGxlYXNlIGNvbnRhY3QgdXMgYXQgY3VzdG9tZXJjYXJlQGRvY3ByaW1lLmNvbSBpZiB5b3UgbmVlZCBtb3JlIGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2AkeyhkaXNhYmxlX2FsbF9ib29raW5ncyB8fCB0aGlzLnN0YXRlLmRpc2FibGVfcGFnZSAmJiAhU1RPUkFHRS5pc0FnZW50KCkgKT8nZGlzYWJsZS1vcGFjaXR5JzonJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZC5hcHBvaW50bWVudF9pZCAmJiBwYXJzZWQuY29kX3RvX3ByZXBhaWQgPT0gJ3RydWUnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgd2lkZ2V0IG1yYi0xNSAke3RoaXMucHJvcHMucHJvZmlsZUVycm9yID8gJ3JuZC1lcnJvci1ubScgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiLXZpc2l0LXRpbWUgZC1mbGV4IGpjLXNwYWNlYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC0xXCIgc3R5bGU9e3sgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIHBhZGRpbmdSaWdodDogMTUgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBkLWZsZXhcIj48c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ2aXNpdC10aW1lLWljb25cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3dhdGNoLWRhdGUuc3ZnJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+VGltZSBTZWxlY3RlZDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWJsLXZpZXctZm9ybWF0dGluZyB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImRhdGUtdGltZSB0aXRsZVwiIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyB9fSA+e2RhdGUgPyBgJHtXRUVLX0RBWVNbbmV3IERhdGUoZGF0ZSkuZ2V0RGF5KCldfSwgJHtuZXcgRGF0ZShkYXRlKS5nZXREYXRlKCl9ICR7TU9OVEhTW25ldyBEYXRlKGRhdGUpLmdldE1vbnRoKCldfWAgOiAnJ30ge3RpbWUudGV4dCA/IFwifFwiIDogXCJcIn0ge3RpbWUudGV4dH0ge3RpbWUudGV4dCA/ICh0aW1lLnZhbHVlID49IDEyID8gJ1BNJyA6ICdBTScpIDogJyd9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT17YHdpZGdldCBtcmItMTUgJHt0aGlzLnN0YXRlLnNob3dUaW1lRXJyb3IgPyAncm5kLWVycm9yLW5tJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5USU1FU0xPVF9EQVRBX0xPQURJTkcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItZm9yLWNoYXQtZGl2IG10LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGVyLWZvci1jaGF0IG1iLTAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxkbmctdGV4dFwiPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpc190aW1lX3NlbGVjdGVkIHx8IHRoaXMucHJvcHMuaXNfaW50ZWdyYXRlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBwb3MtcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWItdmlzaXQtdGltZSBkLWZsZXggamMtc3BhY2ViIG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidmlzaXQtdGltZS1pY29uXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy93YXRjaC1kYXRlLnN2Zyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdCBWaXNpdCBUaW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzX3RpbWVfc2VsZWN0ZWQgJiYgdGhpcy5wcm9wcy5pc19pbnRlZ3JhdGVkICYmIDxhIGhyZWY9XCJcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oJ3RpbWUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmdy03MDAgdGV4dC1zbVwiPlNlbGVjdCBUaW1lPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXBudC1kb2MtZHRsXCI+VGhlIGFwcG9pbnRtZW50IGlzIHN1YmplY3QgdG8gY29uZmlybWF0aW9uIGZyb20gdGhlIERvY3Rvci4gPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX3RpbWVfc2VsZWN0ZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtc2xlY2V0LWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudy1pbnB0LXNlbGN0clwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnctcGljay1oZG5nXCI+RGF0ZTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbG4taW5wdXQtdHBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImlucC1udy1jYWxcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2NhbG5leHQuc3ZnJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZGF0ZVwiIG9uQ2hhbmdlPXt0aGlzLnNlbGVjdERhdGUuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUuZGF0ZVRpbWVTZWxlY3RlZFZhbHVlID8gdGhpcy5zdGF0ZS5kYXRlVGltZVNlbGVjdGVkVmFsdWUgOiB1cGNvbWluZ19kYXRlfSBtaW49e3RoaXMuZ2V0Rm9ybWF0dGVkRGF0ZShuZXcgRGF0ZSgpKX0gbWF4PXt0aGlzLmdldEZvcm1hdHRlZERhdGUobmV3IERhdGUoZGF0ZUFmdGVyMjREYXlzKSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1zbGVjZXQtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudy1pbnB0LXNlbGN0clwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm53LXBpY2staGRuZ1wiPlRpbWU6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fsbi1pbnB1dC10cFwiIG9uQ2xpY2s9eygpID0+IHRoaXMubmF2aWdhdGVUbygndGltZScpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbnAtbnctdGltZVwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvbnctd2F0Y2guc3ZnJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImJkYXlcIiBvbkNsaWNrPXsoKSA9PiB7IH19IHBsYWNlaG9sZGVyPVwiU2VsZWN0XCIgdmFsdWU9e3RpbWUgJiYgdGltZS50ZXh0ID8gYCR7dGltZS50ZXh0fSAke3RpbWUudmFsdWUgPj0gMTIgPyAnUE0nIDogJ0FNJ31gIDogJyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidG0tYXJ3LXNnblwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50aW1lRXJyb3JUZXh0ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhcG50LWRvYy1kdGwgc2xjLWRhdGUtZXJyb3JcIj57dGhpcy5zdGF0ZS50aW1lRXJyb3JUZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiA8cCBjbGFzc05hbWU9XCJuby10bS1zbG90XCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltYWdlcy93YXJuaW5nLWljb24ucG5nXCJ9IHN0eWxlPXt7IGhlaWdodDogJzE1cHgnLCB3aWR0aDogJzE1cHgnLCBtYXJnaW5SaWdodDogJzhweCcgfX0gLz5ObyBUaW1lIFNsb3QgQXZhaWxhYmxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBuZXcgdGltZSBzbG90ICovfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8VmlzaXRUaW1lTmV3IHR5cGU9XCJob21lXCIgbmF2aWdhdGVUbz17dGhpcy5uYXZpZ2F0ZVRvLmJpbmQodGhpcyl9IHNlbGVjdGVkU2xvdD17dGhpcy5wcm9wcy5zZWxlY3RlZFNsb3R9IHRpbWVFcnJvcj17dGhpcy5zdGF0ZS5zaG93VGltZUVycm9yfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZVNsb3RzPXt0aGlzLnByb3BzLnRpbWVTbG90c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RUaW1lU2xvdD17dGhpcy5zZWxlY3RUaW1lU2xvdC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvcl9sZWF2ZXM9e3RoaXMucHJvcHMuZG9jdG9yX2xlYXZlcyB8fCBbXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGNvbWluZ19zbG90cz17dGhpcy5wcm9wcy51cGNvbWluZ19zbG90cyB8fCBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMoc2VsZWN0ZWRQcm9jZWR1cmVzKS5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2NlZHVyZVZpZXcgc2VsZWN0ZWRQcm9jZWR1cmVzPXtzZWxlY3RlZFByb2NlZHVyZXN9IHByaWNlRGF0YT17cHJpY2VEYXRhfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJy8qPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCBwYi1saXN0IHByb2MtcGFkZGluZy1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVzdC1wcmljZSB0eHQtb3JuYWdlXCI+4oK5IHtwcmljZURhdGEuZGVhbF9wcmljZX08c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LW1ycFwiPuKCuSB7cHJpY2VEYXRhLm1ycH08L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXN0LW5hbWUtaXRlbVwiPkRvY3RvciBjb25zdWx0YXRpb248L3NwYW4+PC9kaXY+Ki9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoKHBhcnNlSW50KHByaWNlRGF0YS5kZWFsX3ByaWNlKSArIHRyZWF0bWVudF9QcmljZSkgIT0gMCkgJiYgIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlKSAmJiB0aGlzLnByb3BzLnBheW1lbnRfdHlwZSAhPSA2ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgd2lkZ2V0IGNwbi1ibHVyIG1yYi0xNSBjdXJzb3ItcG9pbnRlcmB9IG9uQ2xpY2s9e3RoaXMuYXBwbHlDb3Vwb25zLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yQ291cG9ucy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBkLWZsZXggamMtc3BhY2ViXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdXBvbi1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvY291cG9uLWFwcGxpZWQuc3ZnXCJ9IGNsYXNzTmFtZT1cInZpc2l0LXRpbWUtaWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGNvdXBvbi10ZXh0XCIgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc19jYXNoYmFjayA/IFwiQ291cG9uXCIgOiBcIkNvdXBvblwifSBBcHBsaWVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBtYXJnaW5SaWdodDogMTMsIGZvbnRTaXplOiAnMTJweCcsIG1hcmdpblRvcDogJzZweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZG9jdG9yQ291cG9uc1swXS5jb2RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2aXNpdC10aW1lLWljb24gY291cG9uLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbmFseXRpY0RhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnT3BkQ291cG9uc1JlbW92ZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdvcGQtY291cG9ucy1yZW1vdmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NvdXBvbklkJzogZG9jdG9yQ291cG9uc1swXS5jb3Vwb25faWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGFuYWx5dGljRGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVtb3ZlQ291cG9ucyh0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yLCBkb2N0b3JDb3Vwb25zWzBdLmNvdXBvbl9pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlX3dhbGxldDogdHJ1ZSwgaXNfcGF5bWVudF9jb3Vwb25fYXBwbGllZDogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Nyb3NzLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY291cG9uX2xvYWRpbmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nX0xpbmViYXJfY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nX2Jhcl9saW5lXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IGQtZmxleCBqYy1zcGFjZWJcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3Vwb24taW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJzI0cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL29mci1jcG4uc3ZnXCJ9IGNsYXNzTmFtZT1cInZpc2l0LXRpbWUtaWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgY291cG9uLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIQVZFIEEgQ09VUE9OP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlzaXQtdGltZS1pY29uIGNvdXBvbi1pY29uLWFycm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3JpZ2h0LWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBnb2xkIGNhcmQgZGV0YWlscyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIXNob3dHb2xkVG9nZ2xlUGF5bWVudE1vZGUgJiYgIWlzX3ZpcF9hcHBsaWNhYmxlICYmICFpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiAhaXNfc2VsZWN0ZWRfdXNlcl9nb2xkICYmIHZpcF9kYXRhLmhvc3BfaXNfZ29sZCAmJiB2aXBfZGlzY291bnRfcHJpY2UgPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IGNwbi1ibHVyIG1yYi0xNSBjdXJzb3ItcG9pbnRlciBnb2xkLWdyZWVuLWNvbnRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGVhclZpcFNlbGVjdGVkUGxhbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFuYWx5dGljRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdPcGRWaXBHb2xkQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdvcGQtdmlwLWdvbGQtY2xpY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogYW5hbHl0aWNEYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy92aXAtZ29sZC1kZXRhaWxzP2lzX2dvbGQ9dHJ1ZSZzb3VyY2U9b3BkLXZpcC1nb2xkLWNsaWNrJmxlYWRfc291cmNlPURvY3ByaW1lJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgZC1mbGV4IGpjLXNwYWNlYiBhbGlnbi1pdGVtLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvbGQtY3JkLWxmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4+U2F2ZSDigrl7dmlwX2Rpc2NvdW50X3ByaWNlfTwvc3Bhbj4gb24gdGhpcyBhcHBvaW50bWVudCA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJnbGQtY3JkLXNiLXR4dFwiPkJlY29tZSA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZ29sZC1zbS5wbmcnfSAvPiBtZW1iZXIgQCYjODM3NzsxOTk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvbGQtY3JkLXJndFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+R2V0IEdvbGQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBnb2xkIGNhcmQgZGV0YWlscyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZW5hYmxlZF9mb3JfY29kX3BheW1lbnQgJiYgaXNfaW5zdXJhbmNlX2J1eV9hYmxlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1zbS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3BkLWlucy10aXRsZS1zdWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgY291cG9uLXRleHRcIj5HZXQgT1BEIEluc3VyYW5jZSAmIGJvb2sgZm9yIDxzcGFuPkZSRUU8L3NwYW4+PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Cb29rIFVubGltaXRlZCBEb2N0b3JzIGFuZCBMYWIgVGVzdHM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3BkLWlucy1hdmxcIiBvbkNsaWNrPXt0aGlzLmdvVG9JbnN1cmFuY2UuYmluZCh0aGlzLHRoaXMucHJvcHMuRE9DVE9SU1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXSx0aGlzLnByb3BzLnNlbGVjdGVkQ2xpbmljKX0+QXZhaWwgTm93IDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAgJy9pbWcvcmlnaHQtc2Muc3ZnJ30vPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qUGF5bWVudCBNb2RlKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNob3dfZG9jdG9yX3BheW1lbnRfbW9kZSAmJiAocGF5bWVudF9tb2RlX2NvdW50ID4gMSB8fCBzaG93R29sZFRvZ2dsZVBheW1lbnRNb2RlKSA/IDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIG1iLTIwXCI+UGF5bWVudCBNb2RlPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dHb2xkVG9nZ2xlUGF5bWVudE1vZGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1zdW1tYXJ5LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWRldGFpbCBkLWZsZXhcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3Rfb3BkX3BheW1lbnRfdHlwZSg2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW8gcGF5bWVudC10eXBlLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBwYXltZW50LWFtdC1sYWJlbFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdF9vcGRfcGF5bWVudF90eXBlKDYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkRvY3RvciBib29raW5nIHdpdGggPGltZyBjbGFzc05hbWU9XCJzbmctZ2xkLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZ29sZC1sZy5wbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT1cImdvbGQtcXVzXCIgb25DbGljaz17KGUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nb1RvR29sZFBhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Pj88L3NwYW4+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLzxzcGFuIGNsYXNzTmFtZT1cInBheW1lbnQtbW9kZS1hbXRcIj57YOKCuSR7dGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5vcGQuZ29sZF9wcmljZX1gfTwvc3Bhbj4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLm9wZC5tcnAgPT0gdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5vcGQuZ29sZF9wcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPHNwYW4gY2xhc3NOYW1lPVwicGF5bWVudC1tb2RlLWFtdFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdF9vcGRfcGF5bWVudF90eXBlKDYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+e2Digrkke3RoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4ub3BkLmdvbGRfcHJpY2UgKyB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLm9wZC5jb252ZW5pZW5jZV9jaGFyZ2V9YH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8c3BhbiBjbGFzc05hbWU9XCJwYXltZW50LW1vZGUtYW10XCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0X29wZF9wYXltZW50X3R5cGUoNilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT57YOKCuSR7dGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5vcGQuZ29sZF9wcmljZSArIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4ub3BkLmNvbnZlbmllbmNlX2NoYXJnZX1gfSA8YiBjbGFzc05hbWU9XCJnZC1jdXQtcHJjXCI+e2Digrkke3RoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4ub3BkLm1ycH1gfTwvYj48L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjaGVja2VkPXt0aGlzLnByb3BzLnBheW1lbnRfdHlwZSA9PSA2fSB0eXBlPVwicmFkaW9cIiBuYW1lPVwicGF5bWVudC1tb2RlXCIgdmFsdWU9XCJvblwiIG9uQ2hhbmdlPXsoZSkgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IGUuc3RvcFByb3BhZ2F0aW9uKCkgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cCBvbkNsaWNrPXsoZXZlbnQpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVHb2xkUHJpY2VQb3B1cCh0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwiZHAtZ2xkLXR4dC1tZW1cIj57YERvY3ByaW1lIEdvbGQ6ICR7dGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi50b3RhbF9hbGxvd2VkX21lbWJlcnN9IE1lbWJlcmB9PHNwYW4+Q2hhbmdlIFBsYW48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWFnZXMvZG93bi1hcnJvdy1vLnBuZyd9Lz48L3NwYW4+PC9wPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJkcC1nb2xkLXBsbi1jaGFuZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRwLWdvbGQtcGF5LWxmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRwLWdsZC10eHQtbWVtXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdvVG9Hb2xkUGFnZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PntgRG9jcHJpbWUgR29sZDogJHt0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLnRvdGFsX2FsbG93ZWRfbWVtYmVyc30gTWVtYmVyIGB9PHNwYW4+KEtub3cgbW9yZSk8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRwLWdsZC1tZW0tZ3JuXCI+RXh0cmEgc2F2aW5ncyBvbiBldmVyeSBhcHBvaW50bWVudCBmb3IgMSB5ZWFyPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRwLWdvbGQtcGF5LXJndFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntg4oK5JHt0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmRlYWxfcHJpY2V9YH0gPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL2VkaXQuc3ZnJ30gb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUdvbGRQcmljZVBvcHVwKHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz4gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi50b3RhbF9hbGxvd2VkX21lbWJlcnM/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJlbmlmaXQtY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm5mdC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJuZnQtdHh0XCI+PHN0cm9uZz57YFNhdmUg4oK5JHtkaXNwbGF5X2RvY3ByaW1lX2Rpc2NvdW50fWB9PC9zdHJvbmc+IG9uIHRoaXMgYXBwb2ludG1lbnQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJuZnQtc3VidHh0XCI+e2Ake3RoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4udG90YWxfYWxsb3dlZF9tZW1iZXJzfSBtZW1iZXIgcGxhbiBAUnMke3RoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4uZGVhbF9wcmljZX1gfTxzcGFuPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9lZGl0LnN2Zyd9IG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nb1RvR29sZFBhZ2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fS8+PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJuZnQtYnRuXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdvVG9Hb2xkUGFnZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPlZpZXcgQWxsIEJlbmVmaXRzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiYWFiYlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZF9mb3JfcHJlcGFpZF9wYXltZW50ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1zdW1tYXJ5LWNvbnRlbnRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0X29wZF9wYXltZW50X3R5cGUoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1kZXRhaWwgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW8gcGF5bWVudC10eXBlLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0X29wZF9wYXltZW50X3R5cGUoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBwYXltZW50LWFtdC1sYWJlbFwiPk9ubHkgRG9jdG9yIGJvb2tpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZURhdGEubXJwID09IGRpc3BsYXlfcmFkaW9fcHJlcGFpZF9wcmljZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGF5bWVudC1zdWItaGVhZGluZ1wiPk5vIGRpc2NvdW50czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBheW1lbnQtbW9kZS1hbXRcIj57aXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgPyAn4oK5MCcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qdmlwX2RhdGEuaG9zcF9pc19nb2xkICYmICovaXNfc2VsZWN0ZWRfdXNlcl9nb2xkICYmIGNvdmVyX3VuZGVyX3ZpcCA/IGDigrkgJHsodmlwX2RhdGEudmlwX2Ftb3VudCArIHZpcF9kYXRhLnZpcF9jb252ZW5pZW5jZV9hbW91bnQpIC0gKHRoaXMucHJvcHMuZGlzQ291bnRlZE9wZFByaWNlIHx8IDApfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfdmlwX2FwcGxpY2FibGUgPyBg4oK5ICR7KHZpcF9kYXRhLnZpcF9hbW91bnQpIC0gKHRoaXMucHJvcHMuZGlzQ291bnRlZE9wZFByaWNlIHx8IDApfWAgOiB0aGlzLmdldEJvb2tpbmdBbW91bnQodG90YWxfd2FsbGV0X2JhbGFuY2UsIGRpc3BsYXlfcmFkaW9fcHJlcGFpZF9wcmljZSwgKHBhcnNlSW50KHByaWNlRGF0YS5tcnApICsgdHJlYXRtZW50X21ycCkpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlID8gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHNwYW4gY2xhc3NOYW1lPVwic2F2ZS11cHRvXCI+U2F2ZSB7cGVyY2VudF9kaXNjb3VudH0lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2hlY2tlZD17dGhpcy5wcm9wcy5wYXltZW50X3R5cGUgPT0gMX0gdHlwZT1cInJhZGlvXCIgbmFtZT1cInBheW1lbnQtbW9kZVwiIG9uQ2hhbmdlPXsoZSkgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IGUuc3RvcFByb3BhZ2F0aW9uKCkgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZF9mb3JfcHJlcGFpZF9wYXltZW50ICYmICFpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiBlbmFibGVkX2Zvcl9jb2RfcGF5bWVudCAmJiAhaXNfdmlwX2FwcGxpY2FibGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImFhXCIgLz4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NvZFBheW1lbnRNb2RlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdC1yZXBvcnQgcGF5bWVudC1kZXRhaWwgbXQtMjBcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0X29wZF9wYXltZW50X3R5cGUoMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW8gcGF5bWVudC10eXBlLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3Rfb3BkX3BheW1lbnRfdHlwZSgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBwYXltZW50LWFtdC1sYWJlbFwiPlBheSBhdCBDbGluaWM8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWRfZm9yX2NvZF9wYXltZW50ICYmIHByaWNlRGF0YS5pc19jb2RfZGVhbF9wcmljZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBheW1lbnQtbW9kZS1hbXRcIj7igrl7KHByaWNlRGF0YS5pc19jb2RfZGVhbF9wcmljZSkgLSAodGhpcy5zdGF0ZS5pc19jYXNoYmFjayA/IDAgOiAodGhpcy5wcm9wcy5kaXNDb3VudGVkT3BkUHJpY2UgfHwgMCkpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJzYXZlLXVwdG9cIj5TYXZlIHtjb2RfcGVyY2VudGFnZV9kaXNjb3VudH0lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHNwYW4gY2xhc3NOYW1lPVwicGF5bWVudC1tb2RlLWFtdFwiPuKCuXtjbGluaWNfbXJwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJsaWdodC10eHRzIGQtYmxvY2tcIj4gKE5vIENvdXBvbiBjb2RlIGFuZCBkaXNjb3VudCB3aWxsIGJlIGFwcGxpZWQpPC9zcGFuPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNoZWNrZWQ9e3RoaXMucHJvcHMucGF5bWVudF90eXBlID09IDJ9IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwYXltZW50LW1vZGVcIiBvbkNoYW5nZT17KGUpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyBlLnN0b3BQcm9wYWdhdGlvbigpIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfaW5zdXJhbmNlX2J1eV9hYmxlICYmIHRoaXMucHJvcHMuY29tbW9uX3NldHRpbmdzICYmIHRoaXMucHJvcHMuY29tbW9uX3NldHRpbmdzLmluc3VyYW5jZV9hdmFpbGFiaWxpdHk/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2luc3VyYW5jZV9idXlfYWJsZSAmJiB0aGlzLnByb3BzLmNvbW1vbl9zZXR0aW5ncyAmJiB0aGlzLnByb3BzLmNvbW1vbl9zZXR0aW5ncy5pbnN1cmFuY2VfYXZhaWxhYmlsaXR5P1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3QtcmVwb3J0IHBheW1lbnQtZGV0YWlsIG10LTIwIHAtcmVsYXRpdmVcIiAgb25DbGljaz17dGhpcy5nb1RvSW5zdXJhbmNlLmJpbmQodGhpcyx0aGlzLnByb3BzLkRPQ1RPUlNbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl0sdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pYyl9IHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtc20tY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wZC1pbnMtdGl0bGUtc3ViXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGNvdXBvbi10ZXh0XCI+UGF5IHdpdGggT1BEIEluc3VyYW5jZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5zLXQtbi1jXCI+VCZDIEFwcGx5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9wZC1pbnMtYXZsIG9wZC1pbnMtYXYta25vd1wiPkF2YWlsIE5vdyA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgICcvaW1nL3JpZ2h0LXNjLnN2Zyd9Lz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypQYXltZW50IE1vZGUqL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmICh0aGlzLnByb3BzLnBheW1lbnRfdHlwZSA9PSAxIHx8IHRoaXMucHJvcHMucGF5bWVudF90eXBlID09IDYpID8gPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTE1XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgbWItMjBcIj5QYXltZW50IFN1bW1hcnk8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1zdW1tYXJ5LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWRldGFpbCBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1SUDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiYjODM3Nzsge2Rpc3BsYXlfdG90YWxfbXJwfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qdmlwX2RhdGEuaG9zcF9pc19nb2xkICYmICovaXNfc2VsZWN0ZWRfdXNlcl9nb2xkICYmIGNvdmVyX3VuZGVyX3ZpcCAmJiB2aXBfZGlzY291bnRfcHJpY2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1kZXRhaWwgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19PkRvY3ByaW1lIEdvbGQgRGlzY291bnQgPGltZyBjbGFzc05hbWU9XCJ2aXAtbWFpbi1pY28gaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9nb2xkLXNtLnBuZyd9IC8+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT4tICYjODM3Nzsge3ZpcF9kaXNjb3VudF9wcmljZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKnZpcF9kYXRhLmhvc3BfaXNfZ29sZCAmJiAqL2lzX3NlbGVjdGVkX3VzZXJfZ29sZCAmJiBjb3Zlcl91bmRlcl92aXAgPyAnJyA6IGlzX3ZpcF9hcHBsaWNhYmxlICYmIHZpcF9kaXNjb3VudF9wcmljZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtZGV0YWlsIGQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19PkRvY3ByaW1lIFZJUCBNZW1iZXIgPGltZyBjbGFzc05hbWU9XCJ2aXAtbWFpbi1pY28gaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXBsb2cucG5nJ30gLz48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0+LSAmIzgzNzc7IHt2aXBfZGlzY291bnRfcHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1doZW4gR29sZCBNZW1iZXJzaGlwIGlzIGJ1eWluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0dvbGRUb2dnbGVQYXltZW50TW9kZSAmJiB0aGlzLnByb3BzLnBheW1lbnRfdHlwZSA9PSA2ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5kZWFsX3ByaWNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtZGV0YWlsIGQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Eb2NwcmltZSBHb2xkIE1lbWJlcnNoaXAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4gJiM4Mzc3OyB7dGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5kZWFsX3ByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEoaXNfc2VsZWN0ZWRfdXNlcl9nb2xkLyogJiYgdmlwX2RhdGEuaG9zcF9pc19nb2xkKi8pICYmICFjb3Zlcl91bmRlcl92aXAgJiYgIWlzX3ZpcF9hcHBsaWNhYmxlIC8qJiYgcHJpY2VEYXRhLmZlZXMgIT0gMCAqLyAmJiBwYXJzZUludChkaXNwbGF5X2RvY3ByaW1lX2Rpc2NvdW50KSA+IDAgPyA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtZGV0YWlsIGQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19Pnt0aGlzLnByb3BzLnBheW1lbnRfdHlwZSA9PSA2ID8gJ0RvY3ByaW1lIEdvbGQgRGlzY291bnQnIDogJ0RvY3ByaW1lIERpc2NvdW50J308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0+LSAmIzgzNzc7IHtkaXNwbGF5X2RvY3ByaW1lX2Rpc2NvdW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshaXNfdmlwX2FwcGxpY2FibGUgJiYgISgvKnZpcF9kYXRhLmhvc3BfaXNfZ29sZCAmJiAqL2lzX3NlbGVjdGVkX3VzZXJfZ29sZCkgJiYgIWNvdmVyX3VuZGVyX3ZpcCAmJiB0aGlzLnByb3BzLnBheW1lbnRfdHlwZSA9PSAxICYmIHByaWNlRGF0YS5mZWVzID09IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1kZXRhaWwgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRvY3ByaW1lIHByaWNlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GcmVlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1kZXRhaWwgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBsYXRmb3JtIENvbnZlbmllbmNlIEZlZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JiM4Mzc3OyB7cGFyc2VJbnQocHJpY2VEYXRhLmRlYWxfcHJpY2UpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qICEodmlwX2RhdGEuaG9zcF9pc19nb2xkICYmIGlzX3NlbGVjdGVkX3VzZXJfZ29sZCkgJiYgIWlzX3ZpcF9hcHBsaWNhYmxlICYmIHRoaXMucHJvcHMucGF5bWVudF90eXBlIT02ICYmICovdGhpcy5wcm9wcy5wYXltZW50X3R5cGUgIT0gNiAmJiB0aGlzLnByb3BzLmRpc0NvdW50ZWRPcGRQcmljZSAmJiAhdGhpcy5zdGF0ZS5pc19jYXNoYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWRldGFpbCBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0+Q291cG9uIERpc2NvdW50PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT4tJiM4Mzc3OyB7dGhpcy5wcm9wcy5kaXNDb3VudGVkT3BkUHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZURhdGEgPyA8ZGl2IGNsYXNzTmFtZT1cInRlc3QtcmVwb3J0IHBheW1lbnQtZGV0YWlsIG10LTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgcGF5bWVudC1hbXQtbGFiZWxcIj5BbW91bnQgUGF5YWJsZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwicGF5bWVudC1hbXQtdmFsdWVcIj4mIzgzNzc7IHt0b3RhbF9hbW91bnRfcGF5YWJsZX08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc19jYXNoYmFjayAmJiB0aGlzLnByb3BzLmRpc0NvdW50ZWRPcGRQcmljZSA/IDxkaXYgY2xhc3NOYW1lPVwiY3NoLWJhY2stYXBwbGllZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNzaC1tbnktYXBwbGllZFwiPisgJiM4Mzc3OyB7dGhpcy5wcm9wcy5kaXNDb3VudGVkT3BkUHJpY2V9IENhc2hiYWNrIEFwcGxpZWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjc2gtbW55LWFwcGxpZWQtY29udGVudFwiPkNhc2hiYWNrIHdpbGwgYmUgYWRkZWQgdG8geW91ciBkb2NwcmltZSB3YWxsZXQgYmFsYW5jZSBvbiBhcHBvaW50bWVudCBjb21wbGV0aW9uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTVcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgY2xlYXJmaXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIG1iLTIwXCI+UGF5bWVudCBTdW1tYXJ5PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LXN1bW1hcnktY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWRldGFpbCBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5NUlA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JiM4Mzc3OyB7ZGlzcGxheV90b3RhbF9tcnB9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19zZWxlY3RlZF91c2VyX2dvbGQgPyAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmIGVuYWJsZWRfZm9yX2NvZF9wYXltZW50IC8qJiYgcHJpY2VEYXRhLmZlZXMgIT0gMCAqLyAmJiBwcmljZURhdGEuaXNfY29kX2RlYWxfcHJpY2UgIT09IHByaWNlRGF0YS5tcnAgJiYgcHJpY2VEYXRhLmlzX2NvZF9kZWFsX3ByaWNlICYmIGRpc3BsYXlfdG90YWxfbXJwIC0gKHBhcnNlSW50KHByaWNlRGF0YS5pc19jb2RfZGVhbF9wcmljZSkpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWRldGFpbCBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT5Eb2NwcmltZSBEaXNjb3VudDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT4tICYjODM3Nzsge2Rpc3BsYXlfdG90YWxfbXJwIC0gKHBhcnNlSW50KHByaWNlRGF0YS5pc19jb2RfZGVhbF9wcmljZSkpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qICEodmlwX2RhdGEuaG9zcF9pc19nb2xkICYmIGlzX3NlbGVjdGVkX3VzZXJfZ29sZCkgJiYgIWlzX3ZpcF9hcHBsaWNhYmxlICYmIHRoaXMucHJvcHMucGF5bWVudF90eXBlIT02ICYmICovIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmIHRoaXMucHJvcHMucGF5bWVudF90eXBlICE9IDYgJiYgdGhpcy5wcm9wcy5kaXNDb3VudGVkT3BkUHJpY2UgJiYgIXRoaXMuc3RhdGUuaXNfY2FzaGJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1kZXRhaWwgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19PkNvdXBvbiBEaXNjb3VudDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0+LSYjODM3Nzsge3RoaXMucHJvcHMuZGlzQ291bnRlZE9wZFByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmIHRoaXMucHJvcHMucGF5bWVudF90eXBlICE9IDIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLXZhbC1ieFwiPkNvdmVyZWQgVW5kZXIgSW5zdXJhbmNlPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwcmljZURhdGEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3QtcmVwb3J0IHBheW1lbnQtZGV0YWlsIG10LTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgcGF5bWVudC1hbXQtbGFiZWxcIj5BbW91bnQgUGF5YWJsZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZF9mb3JfY29kX3BheW1lbnQgJiYgcHJpY2VEYXRhLmlzX2NvZF9kZWFsX3ByaWNlICYmIHByaWNlRGF0YS5mZWVzICE9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8aDUgY2xhc3NOYW1lPVwicGF5bWVudC1hbXQtdmFsdWVcIj4mIzgzNzc7IHtwYXJzZUludChwcmljZURhdGEuaXNfY29kX2RlYWxfcHJpY2UpIC0gKHRoaXMuc3RhdGUuaXNfY2FzaGJhY2sgPyAwIDogKHRoaXMucHJvcHMuZGlzQ291bnRlZE9wZFByaWNlIHx8IDApKX08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICh0aGlzLnByb3BzLnBheW1lbnRfdHlwZSA9PSAxICYmIHByaWNlRGF0YS5mZWVzID09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxoNSBjbGFzc05hbWU9XCJwYXltZW50LWFtdC12YWx1ZVwiPntkaXNwbGF5X2RvY3ByaW1lX2Rpc2NvdW50fTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxoNSBjbGFzc05hbWU9XCJwYXltZW50LWFtdC12YWx1ZVwiPiYjODM3Nzsge2Rpc3BsYXlfdG90YWxfbXJwfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzX2Nhc2hiYWNrICYmIHRoaXMucHJvcHMuZGlzQ291bnRlZE9wZFByaWNlID8gPGRpdiBjbGFzc05hbWU9XCJjc2gtYmFjay1hcHBsaWVkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNzaC1tbnktYXBwbGllZFwiPisgJiM4Mzc3OyB7dGhpcy5wcm9wcy5kaXNDb3VudGVkT3BkUHJpY2V9IENhc2hiYWNrIEFwcGxpZWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3NoLW1ueS1hcHBsaWVkLWNvbnRlbnRcIj5DYXNoYmFjayB3aWxsIGJlIGFkZGVkIHRvIHlvdXIgZG9jcHJpbWUgd2FsbGV0IGJhbGFuY2Ugb24gYXBwb2ludG1lbnQgY29tcGxldGlvbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyohKGlzX3NlbGVjdGVkX3VzZXJfZ29sZCkgJiYgIWlzX3ZpcF9hcHBsaWNhYmxlICYmIHRoaXMucHJvcHMucGF5bWVudF90eXBlID09IDEgJiYgKi90aGlzLnByb3BzLnBheW1lbnRfdHlwZSAhPSA2ICYmICFpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiB0b3RhbF93YWxsZXRfYmFsYW5jZSAmJiB0b3RhbF93YWxsZXRfYmFsYW5jZSA+IDAgJiYgZGlzcGxheV90b3RhbF9tcnAgPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIndpZGdldCBtcmItMTVcIiArICgodGhpcy5zdGF0ZS5pc19wYXltZW50X2NvdXBvbl9hcHBsaWVkIHx8IHRoaXMucHJvcHMucGF5bWVudF90eXBlID09IDIpID8gXCIgZGlzYWJsZV9jb3Vwb25cIiA6IFwiXCIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LXB0LWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmZXJyYWwtc2VsZWN0IG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnhcIiBzdHlsZT17eyBmb250V2VpZ2h0OiAnNjAwJywgZm9udFNpemU6ICcxNHB4JyB9fT5Vc2UgZG9jcHJpbWUgd2FsbGV0IG1vbmV5PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZVdhbGxldFVzZS5iaW5kKHRoaXMpfSBjaGVja2VkPXt0aGlzLnN0YXRlLnVzZV93YWxsZXR9IC8+PHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCI+PC9zcGFuPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmZybC1hdmwtYmFsYW5jZVwiPkF2YWlsYWJsZSA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnNnB4JywgbWFyZ2luVG9wOiAnNXB4JywgbWFyZ2luUmlnaHQ6ICczcHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3J1cGVlLWljb24uc3ZnXCJ9IC8+e3RvdGFsX3dhbGxldF9iYWxhbmNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNfcGF5bWVudF9jb3Vwb25fYXBwbGllZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjcG4tcHltbnQtdHh0XCI+V2FsbGV0IEFtb3VudCBjYW4gbm90IGJlIHVzZWQgYmVjYXVzZSBwYXltZW50IGdhdGV3YXkgc3BlY2lmaWMgY291cG9uIGlzIGFwcGxpZWQuPC9zcGFuPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V2hhdHNBcHBPcHRpblZpZXcgey4uLnRoaXMucHJvcHN9IHByb2ZpbGVzPXtwYXRpZW50fSB0b2dnbGVXaGF0c2FwPXt0aGlzLnRvZ2dsZVdoYXRzYXAuYmluZCh0aGlzKX0gLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiLXZpc2l0LXRpbWUgdGVzdC1yZXBvcnRcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwLCBjdXJzb3I6ICdwb2ludGVyJywgbWFyZ2luQm90dG9tOiAwIH19IG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgJ29wZW5DYW5jZWxsYXRpb24nKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBwYXltZW50LWFtdC1sYWJlbCBmcy1pdGFsaWNcIj5GcmVlIENhbmNlbGxhdGlvbjxzcGFuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDUgfX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9pbmZvLnN2Z1wifSAvPjwvc3Bhbj48L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi90ZXJtc1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYi12aXNpdC10aW1lIHRlc3QtcmVwb3J0XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBwYXltZW50LWFtdC1sYWJlbCBmcy1pdGFsaWNcIj5UZXJtcyBvZiBVc2U8c3Bhbj48aW1nIGNsYXNzTmFtZT1cImluZm8taWNvbi1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9pbmZvLnN2Z1wifSAvPjwvc3Bhbj48L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPnt0aGlzLnN0YXRlLmVycm9yfTwvc3Bhbj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiA8TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5vcGVuQ2FuY2VsbGF0aW9uID8gPENhbmNlbGF0aW9uUG9saWN5IHByb3BzPXt0aGlzLnByb3BzfSB0b2dnbGU9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgJ29wZW5DYW5jZWxsYXRpb24nKX0gaXNfaW5zdXJhbmNlX2FwcGxpY2FibGU9e2lzX2luc3VyYW5jZV9hcHBsaWNhYmxlfSAvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU1RPUkFHRS5pc0FnZW50KCkgJiYgdGhpcy5wcm9wcy5wYXltZW50X3R5cGU9PTY/IDxidXR0b24gb25DbGljaz17dGhpcy5zZW5kQWdlbnRCb29raW5nVVJMLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cInYtYnRuIHAtMyB2LWJ0bi1wcmltYXJ5IGJ0bi1sZyBmaXhlZCBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCB0ZXh0LWxnIHN0aWNreS1idG5cIj5TZW5kIFNNUyBFTUFJTDwvYnV0dG9uPiA6IDxidXR0b24gY2xhc3NOYW1lPVwicC0yIHYtYnRuIHAtMyB2LWJ0bi1wcmltYXJ5IGJ0bi1sZyBmaXhlZCBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCB0ZXh0LWxnIHN0aWNreS1idG5cIiBkYXRhLWRpc2FibGVkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgIShwYXRpZW50ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LmRhdGUpIHx8IHRoaXMuc3RhdGUubG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0gb25DbGljaz17dGhpcy5wcm9jZWVkLmJpbmQodGhpcywgKHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LmRhdGUpLCBwYXRpZW50LCB0cnVlLCB0b3RhbF9hbW91bnRfcGF5YWJsZSwgdG90YWxfd2FsbGV0X2JhbGFuY2UsIGlzX3NlbGVjdGVkX3VzZXJfaW5zdXJhbmNlX3N0YXR1cyl9PlNlbmQgU01TPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChTVE9SQUdFLmlzQWdlbnQoKSAmJiB0aGlzLnByb3BzLnBheW1lbnRfdHlwZSA9PSA2KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtkaXNhYmxlX2FsbF9ib29raW5ncz8nZGlzYWJsZS1vcGFjaXR5JzonJ30gZml4ZWQgc3RpY2t5LWJ0biBwLTAgdi1idG4gIGJ0bi1sZyBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCB0ZXh0LWxnIGJ1dHRvbnMtYWRkY2FydC1jb250YWluZXJgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvY2VlZC5iaW5kKHRoaXMsICh0aGlzLnByb3BzLnNlbGVjdGVkU2xvdCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5kYXRlKSwgcGF0aWVudCwgdHJ1ZSwgdG90YWxfYW1vdW50X3BheWFibGUsIHRvdGFsX3dhbGxldF9iYWxhbmNlLCBpc19zZWxlY3RlZF91c2VyX2luc3VyYW5jZV9zdGF0dXMsIHt9KX0gY2xhc3NOYW1lPVwidi1idG4tcHJpbWFyeSBib29rLWJ0bi1tcmduLWFkanVzdFwiPlNlbmQgU01TIEVNQUlMPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb2NlZWQuYmluZCh0aGlzLCAodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QuZGF0ZSksIHBhdGllbnQsIHRydWUsIHRvdGFsX2Ftb3VudF9wYXlhYmxlLCB0b3RhbF93YWxsZXRfYmFsYW5jZSwgaXNfc2VsZWN0ZWRfdXNlcl9pbnN1cmFuY2Vfc3RhdHVzLCB7IHNlbmRXaGF0c3VwOiB0cnVlIH0pfSBjbGFzc05hbWU9XCJhZGQtc2hwbmctY2FydC1idG5cIj48aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvd2EtbG9nby1zbS5wbmcnfS8+U2VuZCBvbiBXaGF0c2FwcDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Rpc2FibGVfYWxsX2Jvb2tpbmdzPydkaXNhYmxlLW9wYWNpdHknOicnfSBmaXhlZCBzdGlja3ktYnRuIHAtMCB2LWJ0biAgYnRuLWxnIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIHRleHQtbGcgYnV0dG9ucy1hZGRjYXJ0LWNvbnRhaW5lciAkeyFpc19hZGRfdG9fY2FyZCAmJiB0aGlzLnByb3BzLmlwZF9jaGF0ICYmIHRoaXMucHJvcHMuaXBkX2NoYXQuc2hvd0lwZENoYXQgPyAnaXBkLWZvb3QtYnRuLWR1bycgOiAnJ30gJHt0aGlzLnN0YXRlLmRpc2FibGVfcGFnZT8nZGlzYWJsZS1hbGwnOicnfWB9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBheW1lbnRfdHlwZSAhPSA2ICYmICgoU1RPUkFHRS5pc0FnZW50KCkgfHwgIWlzX2RlZmF1bHRfdXNlcl9pbnN1cmVkIHx8IHRoaXMuc3RhdGUuaXNNYXRyaXgpICYmICEocGFyc2VkLmFwcG9pbnRtZW50X2lkICYmIHBhcnNlZC5jb2RfdG9fcHJlcGFpZCA9PSAndHJ1ZScpKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXt0aGlzLnN0YXRlLnBheV9idG5fbG9hZGluZ30gY2xhc3NOYW1lPXtcImFkZC1zaHBuZy1jYXJ0LWJ0blwiICsgKCF0aGlzLnN0YXRlLmNhcnRfaXRlbSA/IFwiXCIgOiBcIiB1cGRhdGUtYnRuXCIpICsgKHRoaXMuc3RhdGUucGF5X2J0bl9sb2FkaW5nID8gXCIgZGlzYWJsZS1hbGxcIiA6IFwiXCIpfSBkYXRhLWRpc2FibGVkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhKHBhdGllbnQgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QuZGF0ZSkgfHwgdGhpcy5zdGF0ZS5sb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IG9uQ2xpY2s9e3RoaXMucHJvY2VlZC5iaW5kKHRoaXMsICh0aGlzLnByb3BzLnNlbGVjdGVkU2xvdCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5kYXRlKSwgcGF0aWVudCwgdHJ1ZSwgdG90YWxfYW1vdW50X3BheWFibGUsIHRvdGFsX3dhbGxldF9iYWxhbmNlLCBpc19zZWxlY3RlZF91c2VyX2luc3VyYW5jZV9zdGF0dXMsIHt9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNhcnRfaXRlbSA/IFwiXCIgOiA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NhcnRpY28uc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNhcnRfaXRlbSA/IFwiVXBkYXRlXCIgOiBcIkFkZCB0byBDYXJ0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoU1RPUkFHRS5pc0FnZW50KCkgfHwgdGhpcy5zdGF0ZS5pc01hdHJpeCkgJiYgIShlbmFibGVkX2Zvcl9jb2RfcGF5bWVudCAmJiB0aGlzLnByb3BzLnBheW1lbnRfdHlwZSA9PSAyKSkgfHwgdGhpcy5zdGF0ZS5jYXJ0X2l0ZW0gPyBcIlwiIDogPGJ1dHRvbiBkaXNhYmxlZD17dGhpcy5zdGF0ZS5wYXlfYnRuX2xvYWRpbmd9IGNsYXNzTmFtZT17YHYtYnRuLXByaW1hcnkgYm9vay1idG4tbXJnbi1hZGp1c3QgJHt0aGlzLnN0YXRlLnBheV9idG5fbG9hZGluZyA/IFwiIGRpc2FibGUtYWxsXCIgOiBcIlwifWB9IGlkPVwiY29uZmlybV9ib29raW5nXCIgZGF0YS1kaXNhYmxlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhKHBhdGllbnQgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QuZGF0ZSkgfHwgdGhpcy5zdGF0ZS5sb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gb25DbGljaz17dGhpcy5wcm9jZWVkLmJpbmQodGhpcywgKHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LmRhdGUpLCBwYXRpZW50LCBmYWxzZSwgdG90YWxfYW1vdW50X3BheWFibGUsIHRvdGFsX3dhbGxldF9iYWxhbmNlLCBpc19zZWxlY3RlZF91c2VyX2luc3VyYW5jZV9zdGF0dXMsIHt9KX0+e3RoaXMuZ2V0Qm9va2luZ0J1dHRvblRleHQodG90YWxfd2FsbGV0X2JhbGFuY2UsIGZpbmFsUHJpY2UsIGRpc3BsYXlfdG90YWxfbXJwLCBlbmFibGVkX2Zvcl9jb2RfcGF5bWVudCwgKHByaWNlRGF0YS5pc19jb2RfZGVhbF9wcmljZSAtICh0aGlzLnN0YXRlLmlzX2Nhc2hiYWNrID8gMCA6ICh0aGlzLnByb3BzLmRpc0NvdW50ZWRPcGRQcmljZSB8fCAwKSkpLCBpc192aXBfYXBwbGljYWJsZSwgdmlwX2RhdGEudmlwX2Ftb3VudCwgLyp2aXBfZGF0YS5ob3NwX2lzX2dvbGQgJiYgKi9pc19zZWxlY3RlZF91c2VyX2dvbGQsIHZpcF9kYXRhLnZpcF9jb252ZW5pZW5jZV9hbW91bnQpfTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmVycm9yID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm9va2luZ0Vycm9yIG1lc3NhZ2U9e3RoaXMuc3RhdGUuZXJyb3J9IGNsb3NlRXJyb3JQb3B1cD17dGhpcy5jbG9zZUVycm9yUG9wdXB9IC8+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSaWdodEJhciBleHRyYUNsYXNzPVwiY2hhdC1mbG9hdC1idG4tMlwiIHR5cGU9XCJvcGRcIiBub0NoYXRCdXR0b249e3RydWV9IHNob3dEZXNrdG9wSXBkPXt0cnVlfSBtc2dUZW1wbGF0ZT1cImdvbGRfZ2VuZXJhbF90ZW1wbGF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxEaXNjbGFpbWVyIC8+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBheW1lbnREYXRhID8gPFBheW1lbnRGb3JtIG11bHRpT3JkZXI9e3RoaXMucHJvcHMucGF5bWVudF90eXBlID09PSA2fSBwYXltZW50RGF0YT17dGhpcy5zdGF0ZS5wYXltZW50RGF0YX0gcmVmcz0nb3BkJyAvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBQYXRpZW50RGV0YWlsc05ld1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHsgdG9nZ2xlLHByb3BzLCBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSB9KSA9PiB7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLW92ZXJsYXkgY2FuY2VsLW92ZXJsYXktemluZGV4XCIgb25DbGljaz17dG9nZ2xlfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgY2FuY2VsLWFwcG9pbnRtZW50LWRpdiBjYW5jZWwtcG9wdXBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWhlYWRlciB0ZXh0LWNlbnRlciBhY3Rpb24tc2NyZWVuLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBjYW5jZWwtYXBwb2ludG1lbnQtaGVhZFwiPkNhbmNlbGxhdGlvbiBQb2xpY3k8L3A+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9jbG9zZS5wbmdcIn0gY2xhc3NOYW1lPVwiY2xvc2UtbW9kYWxcIiBvbkNsaWNrPXt0b2dnbGV9IC8+XG4gICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLXBvbGljeS10ZXh0IGNhbmNlbFBvbGljeUhlaWdodFwiIHN0eWxlPXt7cGFkZGluZ1RvcDogMH19PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJib29raW5nLWNhbmNlbFwiPlxuICAgICAgICAgICAgICAgICAgICB7Lyo8bGkgY2xhc3NOYW1lPVwiZnctNTAwIG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRm9yIGFueSBvbmxpbmUgcGFpZCBhcHBvaW50bWVudHMsIHlvdSBjYW4gY2FuY2VsIHlvdXIgc2NoZWR1bGVkIG9yIHJlLWJvb2tlZCBhcHBvaW50bWVudCBhbmQgaW5pdGlhdGUgaW1tZWRpYXRlIHJlZnVuZCBhdCBhbnkgdGltZS4gQW4gaW1tZWRpYXRlIHJlZnVuZCBzaGFsbCBiZSBzdWJqZWN0IHRvIHRlcm1zIGFuZCBjb25kaXRpb25zIGFzIGRlc2NyaWJlZCB1bmRlciB0aGlzIHNlY3Rpb24gbWVudGlvbmVkIGJlbG93LlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZnctNTAwIG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgSW4gdGhlIGV2ZW50LCB0aGUgc2VydmljZXMgYXJlIG5vdCBhdmFpbGVkIGF0IHRoZSBhcHBvaW50ZWQgZGF0ZSBhbmQgdGltZSBhbmQgb3VyIHN5c3RlbXMgZG8gbm90IHZhbGlkYXRlIHRoZSBVUk4gZ2VuZXJhdGVkIG9uIHlvdXIgcmVnaXN0ZXJlZCBtb2JpbGUgbnVtYmVyLCB3ZSB3aWxsIGF1dG9tYXRpY2FsbHkgY2FuY2VsIHlvdXIgYXBwb2ludG1lbnQgYXQgMTI6MDAgbWlkbmlnaHQgb2YgbmV4dCBkYXRlIG9mIHlvdXIgYXBwb2ludG1lbnQgZGF0ZS5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZ3LTUwMCBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIE9jY2FzaW9uYWxseSwgYXBwb2ludG1lbnRzIG1heSBiZSBjYW5jZWxsZWQgb3IgcG9zdHBvbmVkIGJ5IHRoZSBUaGlyZCBQYXJ0eSBTZXJ2aWNlIFByb3ZpZGVyLiBTaG91bGQgdGhpcyBvY2N1ciwgd2Ugd2lsbCBhdHRlbXB0IHRvIGNvbnRhY3Qgb3IgaW5mb3JtIHlvdSBhbmQgeW91IG1heSByZS1zY2hlZHVsZSB5b3VyIGFwcG9pbnRtZW50IGFzIHBlciB5b3VyIGNvbnZlbmllbmNlIG9yIHZpc2l0IHd3dy5kb2NwcmltZS5jb20gZm9yIGZyZXNoL3JlLWJvb2tpbmcgb24gdGhlIFdlYnNpdGUuXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmdy01MDAgbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxsYXRpb24gdGhyb3VnaCBtYWlsIG9yIGNhbGwgY2VudGVyIGlzIGFsbG93ZWQgZm9yIGFsbCB0aGUgYm9va2luZ3MgdW50aWwgdGhlIHRpbWUgb2YgYXBwb2ludG1lbnQgb3IgMTI6MDAgbWlkbmlnaHQgb2YgbmV4dCBkYXRlIG9mIHlvdXIgYXBwb2ludG1lbnQgZGF0ZS4gSW4gc3VjaCBjYXNlcywgd2Ugd2lsbCBpbml0aWF0ZSBhbiBpbW1lZGlhdGUgcmVmdW5kIG9mIHlvdXIgbW9uZXkgYXMgcGVyIHRoZSBwcm9jZXNzIGRlZmluZWQgdW5kZXIgUmVmdW5kLCBSZXNjaGVkdWxpbmcgYW5kIENhbmNlbGxhdGlvbiBzZWN0aW9uIHVuZGVyIHRoZSBFbmQgVXNlciBBZ3JlZW1lbnQuIDx1IHN0eWxlPXt7Y29sb3I6ICcjZjc4NjMxJyxjdXJzb3I6J3BvaW50ZXInLGRpc3BsYXk6J2lubGluZS1ibG9jayd9fSBvbkNsaWNrPXsoKSA9PnByb3BzLmhpc3RvcnkucHVzaCgnL3Rlcm1zP2ZvckJvb2tpbmdTY3JvbGw9dHJ1ZScpfT5jbGljayBoZXJlPC91PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPiovfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc19pbnN1cmFuY2VfYXBwbGljYWJsZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Rm9yIE9ubGluZSBQYWlkIEFwcG9pbnRtZW50cyAtPC9zdHJvbmc+IFlvdSBjYW4gY2FuY2VsIHlvdXIgc2NoZWR1bGVkIGFwcG9pbnRtZW50IGF0IGFueSB0aW1lLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkluIENhc2Ugb2YgQSBObyBTaG93IChQYXRpZW50IFVuYXZhaWxhYmxlKSAtPC9zdHJvbmc+IEluIHRoZSBldmVudCwgdGhlIHNlcnZpY2VzIGFyZSBub3QgYXZhaWxlZCBhdCB0aGUgYXBwb2ludGVkIGRhdGUgYW5kIHRpbWUuIFdlIHdpbGwgYXV0b21hdGljYWxseSBjYW5jZWwgeW91ciBhcHBvaW50bWVudCBhdCAxMjowMCBtaWRuaWdodCBvZiB0aGUgZGF0ZSBmb2xsb3dlZCBieSB0aGUgYXBwb2ludG1lbnQgZGF0ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5UaGlyZCBQYXJ0eSBDYW5jZWxsYXRpb24gKFByb3ZpZGVyIFVuYXZhaWxhYmxlKSAtPC9zdHJvbmc+IE9jY2FzaW9uYWxseSwgYXBwb2ludG1lbnRzIG1heSBiZSBjYW5jZWxlZCBvciBwb3N0cG9uZWQgZHVlIHRvIHVuYXZhaWxhYmlsaXR5IG9mIHRoZSBzZXJ2aWNlIHByb3ZpZGVyLiBTaG91bGQgdGhpcyBvY2N1ciwgd2Ugd2lsbCBjb250YWN0IG9yIGluZm9ybSB5b3UgYW5kIHlvdSBtYXkgcmVzY2hlZHVsZSB5b3VyIGFwcG9pbnRtZW50IGFzIHBlciB5b3VyIGNvbnZlbmllbmNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkZvciBPbmxpbmUgUGFpZCBBcHBvaW50bWVudHMgLTwvc3Ryb25nPiBZb3UgY2FuIGNhbmNlbCB5b3VyIHNjaGVkdWxlZCBhcHBvaW50bWVudCBhbmQgaW5pdGlhdGUgdGhlIGltbWVkaWF0ZSByZWZ1bmQgYXQgYW55IHRpbWUuIEltbWVkaWF0ZSByZWZ1bmQgc2hhbGwgYmUgc3ViamVjdCB0byB0ZXJtcyBhbmQgY29uZGl0aW9ucyBhcyBkZXNjcmliZWQgdW5kZXIgdGhpcyBzZWN0aW9uIG1lbnRpb25lZCBiZWxvdy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5JbiBDYXNlIG9mIEEgTm8gU2hvdyAoUGF0aWVudCBVbmF2YWlsYWJsZSkgLTwvc3Ryb25nPiBJbiB0aGUgZXZlbnQsIHRoZSBzZXJ2aWNlcyBhcmUgbm90IGF2YWlsZWQgYXQgdGhlIGFwcG9pbnRlZCBkYXRlIGFuZCB0aW1lLiBXZSB3aWxsIGF1dG9tYXRpY2FsbHkgY2FuY2VsIHlvdXIgYXBwb2ludG1lbnQgYXQgMTI6MDAgbWlkbmlnaHQgb2YgdGhlIGRhdGUgZm9sbG93ZWQgYnkgdGhlIGFwcG9pbnRtZW50IGRhdGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VGhpcmQgUGFydHkgQ2FuY2VsbGF0aW9uIChQcm92aWRlciBVbmF2YWlsYWJsZSkgLTwvc3Ryb25nPiBPY2Nhc2lvbmFsbHksIGFwcG9pbnRtZW50cyBtYXkgYmUgY2FuY2VsZWQgb3IgcG9zdHBvbmVkIGR1ZSB0byB1bmF2YWlsYWJpbGl0eSBvZiB0aGUgc2VydmljZSBwcm92aWRlci4gU2hvdWxkIHRoaXMgb2NjdXIsIHdlIHdpbGwgY29udGFjdCBvciBpbmZvcm0geW91IGFuZCB5b3UgbWF5IHJlc2NoZWR1bGUgeW91ciBhcHBvaW50bWVudCBhcyBwZXIgeW91ciBjb252ZW5pZW5jZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz4yNCBIb3VycyBDYW5jZWxsYXRpb24gLTwvc3Ryb25nPiBDYW5jZWxsYXRpb24gaXMgYWxsb3dlZCBmb3IgYWxsIHRoZSBhcHBvaW50bWVudHMuIEluIHN1Y2ggY2FzZXMsIHdlIHdpbGwgaW5pdGlhdGUgdGhlIGltbWVkaWF0ZSByZWZ1bmQgb2YgeW91ciBtb25leSBhcyBwZXIgdGhlIHByb2Nlc3MgZGVmaW5lZCB1bmRlciBSZWZ1bmQsIFJlc2NoZWR1bGluZywgYW5kIENhbmNlbGxhdGlvbiBzZWN0aW9uIG9mIHRoZSAgPHUgc3R5bGU9e3tjb2xvcjogYHZhcigtLXRleHQtLXByaW1hcnktLWNvbG9yKWAgLGN1cnNvcjoncG9pbnRlcicsZGlzcGxheTonaW5saW5lLWJsb2NrJ319IG9uQ2xpY2s9eygpID0+cHJvcHMuaGlzdG9yeS5wdXNoKCcvdGVybXM/Zm9yQm9va2luZ1Njcm9sbD10cnVlJyl9PkVuZCBVc2VyIEFncmVlbWVudC48L3U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG59IiwiaW1wb3J0IFBhdGllbnREZXRhaWxzTmV3IGZyb20gJy4vUGF0aWVudERldGFpbHNOZXcuanMnXG5cbmV4cG9ydCBkZWZhdWx0IFBhdGllbnREZXRhaWxzTmV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHsgdG9nZ2xlLCBkZWFsX3ByaWNlLCBtcnAsIHBheWFibGVfYW1vdW50IH0pID0+IHtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWwtb3ZlcmxheVwiIG9uQ2xpY2s9e3RvZ2dsZX0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IGNhbmNlbC1hcHBvaW50bWVudC1kaXYgcGF5bWVudC1wb3B1cFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIHRleHQtY2VudGVyIGFjdGlvbi1zY3JlZW4taGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGNhbmNlbC1hcHBvaW50bWVudC1oZWFkXCI+UGF5bWVudCBTdW1tYXJ5PC9wPlxuICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudC1kaXZcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnRcIj5Eb2N0b3IgRmVlczwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQgZnctNTAwXCI+JiM4Mzc3OyAge21ycH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50LWRpdlwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudFwiPkRvY3ByaW1lIERpc2NvdW50PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudCBmdy01MDBcIj4mIzgzNzc7ICB7bXJwIC0gZGVhbF9wcmljZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50LWRpdlwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudCBmdy01MDBcIj5TdWJ0b3RhbDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQgZnctNTAwXCI+JiM4Mzc3OyAge2RlYWxfcHJpY2V9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQtZGl2XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPlByb21vY29kZSBEaXNjb3VudDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQgZnctNTAwXCI+JiM4Mzc3OyAgMjAwPC9wPlxuICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQtZGl2IG1ydC0yMFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudCBmdy01MDBcIj5BbW91bnQgUGF5YWJsZTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQgZnctNTAwXCI+JiM4Mzc3OyAge3BheWFibGVfYW1vdW50fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQtYnRuIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmdy01MDBcIiBvbkNsaWNrPXt0b2dnbGV9PkRvbmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBQcm9jZWR1cmVWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGpjLXNwYWNlYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCIgc3R5bGU9e3sgZm9udFNpemU6IDE0IH19PjxzcGFuPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaGFuZC5zdmdcIn0gY2xhc3NOYW1lPVwidmlzaXQtdGltZS1pY29uXCIgc3R5bGU9e3sgd2lkdGg6IDI0LCBtYXJnaW5SaWdodDogOCB9fSAvPjwvc3Bhbj5TZXJ2aWNlcyBJbmNsdWRlZDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCBwYi1saXN0IHByb2MtcGFkZGluZy1saXN0XCI+PHNwYW4gY2xhc3NOYW1lPVwidGVzdC1wcmljZSB0eHQtb3JuYWdlXCI+4oK5IHtwYXJzZUludCh0aGlzLnByb3BzLnByaWNlRGF0YS5kZWFsX3ByaWNlKX08c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LW1ycFwiPuKCuSB7cGFyc2VJbnQodGhpcy5wcm9wcy5wcmljZURhdGEubXJwKX08L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXN0LW5hbWUtaXRlbVwiPkRvY3RvciBjb25zdWx0YXRpb24gPC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZFByb2NlZHVyZXMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnByb3BzLnNlbGVjdGVkUHJvY2VkdXJlcykubWFwKChwcm9jZWR1cmUpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvY2VkdXJlLmZpbHRlcih4ID0+IHguaXNfc2VsZWN0ZWQpLm1hcCgoY2F0ZWdvcnksIGkpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggcGItbGlzdCBwcm9jLXBhZGRpbmctbGlzdFwiPjxzcGFuIGNsYXNzTmFtZT1cInRlc3QtcHJpY2UgdHh0LW9ybmFnZVwiPuKCuSB7Y2F0ZWdvcnkuZGVhbF9wcmljZX08c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LW1ycFwiPuKCuSB7Y2F0ZWdvcnkubXJwfTwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwIHRlc3QtbmFtZS1pdGVtXCI+e2NhdGVnb3J5LnByb2NlZHVyZV9uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFByb2NlZHVyZVZpZXdcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBnZXRDYXJ0SXRlbXMsIGFkZFRvQ2FydCwgZ2V0RG9jdG9yQnlJZCwgZ2V0VXNlclByb2ZpbGUsIGNyZWF0ZU9QREFwcG9pbnRtZW50LCBzZWxlY3RPcGRUaW1lU0xvdCwgc2VuZEFnZW50Qm9va2luZ1VSTCwgcmVtb3ZlQ291cG9ucywgYXBwbHlPcGRDb3Vwb25zLCByZXNldE9wZENvdXBvbnMsIGdldENvdXBvbnMsIGFwcGx5Q291cG9ucywgY3JlYXRlUHJvZmlsZSwgc2VuZE9UUCwgc3VibWl0T1RQLCBmZXRjaFRyYW5zYWN0aW9ucywgc2VsZWN0X29wZF9wYXltZW50X3R5cGUsIGdldFRpbWVTbG90cywgZWRpdFVzZXJQcm9maWxlLCBwYXRpZW50RGV0YWlscywgaXBkQ2hhdFZpZXcsIGNoZWNrSXBkQ2hhdEFnZW50U3RhdHVzLCBzYXZlQXZhaWxOb3dJbnN1cmFuY2UsIHN1Ym1pdElQREZvcm0sIGFnZW50TG9naW4sIGNvZFRvUHJlcGFpZCwgY2xlYXJWaXBTZWxlY3RlZFBsYW4sIGdldE9wZFZpcEdvbGRQbGFucywgc2VsZWN0VmlwQ2x1YlBsYW4sIHB1c2hNZW1iZXJzRGF0YSwgcmV0cmlldmVNZW1iZXJzRGF0YSwgc2VsZWN0UHJvZmlsZSwgU2VuZElwZEJvb2tpbmdFbWFpbCwgTm9uSXBkQm9va2luZ0xlYWQsIHNhdmVMZWFkUGhuTnVtYmVyIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbmltcG9ydCBQYXRpZW50RGV0YWlsc1ZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9vcGQvcGF0aWVudERldGFpbHMvaW5kZXguanMnXG5cbmNsYXNzIFBhdGllbnREZXRhaWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRpbWVTbG90czogbnVsbCxcbiAgICAgICAgICAgIGRvY3Rvcl9sZWF2ZXM6IFtdLFxuICAgICAgICAgICAgREFUQV9GRVRDSDogZmFsc2UsXG4gICAgICAgICAgICB1cGNvbWluZ19zbG90czogbnVsbCxcbiAgICAgICAgICAgIGlzX2ludGVncmF0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY29kRXJyb3I6IG51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHN0YXRpYyBsb2FkRGF0YShzdG9yZSwgbWF0Y2gsIHF1ZXJ5RGF0YSkge1xuICAgIC8vICAgICBsZXQgZG9jdG9yX2lkID0gbWF0Y2gucGFyYW1zLmlkIHx8IHF1ZXJ5RGF0YS5kb2N0b3JfaWRcbiAgICAvLyAgICAgbGV0IGhvc3BpdGFsX2lkID0gbWF0Y2gucGFyYW1zLmNsaW5pY0lkIHx8IHF1ZXJ5RGF0YS5ob3NwaXRhbF9pZFxuXG4gICAgLy8gICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChnZXREb2N0b3JCeUlkKGRvY3Rvcl9pZCwgaG9zcGl0YWxfaWQpKVxuICAgIC8vIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogKCkgPT4gbnVsbFxuICAgIH1cblxuICAgIGZldGNoRGF0YShwcm9wcyxjbGluaWNfaWQsY2FsbERvY3RvckJ5SWQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UocHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgZG9jdG9yX2lkID0gcHJvcHMuc2VsZWN0ZWREb2N0b3IgfHwgcHJvcHMubWF0Y2gucGFyYW1zLmlkIHx8IHBhcnNlZC5kb2N0b3JfaWRcbiAgICAgICAgbGV0IGhvc3BpdGFsX2lkXG4gICAgICAgIGlmKGNsaW5pY19pZCl7XG4gICAgICAgICAgICBob3NwaXRhbF9pZCA9IGNsaW5pY19pZFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGhvc3BpdGFsX2lkID0gcGFyc2VkLmhvc3BpdGFsX2lkIHx8IHByb3BzLm1hdGNoLnBhcmFtcy5jbGluaWNJZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuICAgICAgICAgICAgLy9DaGVjayBpZiB1c2VyIGlzIGxvZ2luLCBpZiBsb2dnZWQgaW4gdGhlbiBmZXRjaCB1c2VyIHJlbGF0ZWQgZGF0YVxuICAgICAgICAgICAgcHJvcHMuZ2V0VXNlclByb2ZpbGUoKVxuICAgICAgICAgICAgcHJvcHMuZmV0Y2hUcmFuc2FjdGlvbnMoKVxuICAgICAgICAgICAgcHJvcHMuZ2V0Q2FydEl0ZW1zKClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb2N0b3JfaWQpIHtcbiAgICAgICAgICAgIGlmKGNhbGxEb2N0b3JCeUlkKXtcbiAgICAgICAgICAgICAgICBsZXQgZXh0cmFQYXJhbXM9e31cbiAgICAgICAgICAgICAgICAvL0lmIGFwcG9pbnRtZW50X2lkIGlzIGF2YWlsYmxlIGluIHRoZSB1cmwsIHRoZW4gd2UgZ2V0IGRhdGEgY29ycmVzcG9uZGluZyB0byB0aGF0IGFwcG9pbnRtZW50XG4gICAgICAgICAgICAgICAgaWYocGFyc2VkLmFwcG9pbnRtZW50X2lkKXtcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFQYXJhbXNbJ2FwcG9pbnRtZW50X2lkJ10gPSBwYXJzZWQuYXBwb2ludG1lbnRfaWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJvcHMuZ2V0RG9jdG9yQnlJZChkb2N0b3JfaWQsIGhvc3BpdGFsX2lkLCBwcm9wcy5jb21tb25Qcm9maWxlU2VsZWN0ZWRQcm9jZWR1cmVzLCAnJywgZXh0cmFQYXJhbXMsIChlcnJvciwgcmVzcG9uc2UpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmKGVycm9yICYmIGVycm9yLm1lc3NhZ2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29kRXJyb3I6IGVycm9yLm1lc3NhZ2V9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyppZiAocHJvcHMuc2VsZWN0ZWRTbG90ICYmIHByb3BzLnNlbGVjdGVkU2xvdC5kYXRlICYmICFwcm9wcy5zZWxlY3RlZFNsb3Quc3VtbWFyeVBhZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgREFUQV9GRVRDSDogdHJ1ZSB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHByb3BzLmdldFRpbWVTbG90cyhkb2N0b3JfaWQsIGhvc3BpdGFsX2lkLCAodGltZVNsb3RzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lU2xvdHM6IHRpbWVTbG90cy50aW1lc2xvdHMsIGRvY3Rvcl9sZWF2ZXM6IHRpbWVTbG90cy5kb2N0b3JfbGVhdmVzLCBEQVRBX0ZFVENIOiB0cnVlLCB1cGNvbWluZ19zbG90czogdGltZVNsb3RzLnVwY29taW5nX3Nsb3RzIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKClcbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlRm9ybWF0KSB7XG4gICAgICAgICAgICAgICBzZWxlY3RlZERhdGUgPSB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZUZvcm1hdFxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWREYXRlID0gdGhpcy5nZXRGb3JtYXR0ZWREYXRlKHNlbGVjdGVkRGF0ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBleHRyYVBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZERhdGU6IHNlbGVjdGVkRGF0ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvcHMuZ2V0VGltZVNsb3RzKGRvY3Rvcl9pZCwgaG9zcGl0YWxfaWQsIGV4dHJhUGFyYW1zLCAodGltZVNsb3RzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lU2xvdHM6IHRpbWVTbG90cy50aW1lc2xvdHMsIGRvY3Rvcl9sZWF2ZXM6IHRpbWVTbG90cy5kb2N0b3JfbGVhdmVzLCBEQVRBX0ZFVENIOiB0cnVlLCB1cGNvbWluZ19zbG90czogdGltZVNsb3RzLnVwY29taW5nX3Nsb3RzLCBpc19pbnRlZ3JhdGVkOiB0aW1lU2xvdHMuaXNfaW50ZWdyYXRlZHx8ZmFsc2UgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuc2VsZWN0ZWREb2N0b3IgIT0gdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcikge1xuICAgICAgICAgICAgdGhpcy5mZXRjaERhdGEocHJvcHMsbnVsbCx0cnVlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hEYXRhKHRoaXMucHJvcHMsbnVsbCx0cnVlKVxuICAgIH1cblxuICAgIGdldEZvcm1hdHRlZERhdGUoZGF0ZSl7XG4gICAgICAgIC8vZnVuY3Rpb24gd2hpY2ggcmV0dXJuIGRhdGUgaW4geXl5eS1tbS1kZCBmb3JtYXRcbiAgICAgICAgdmFyIGRkID0gZGF0ZS5nZXREYXRlKCk7XG5cbiAgICAgICAgdmFyIG1tID0gZGF0ZS5nZXRNb250aCgpKzE7IFxuICAgICAgICB2YXIgeXl5eSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgaWYoZGQ8MTApIFxuICAgICAgICB7XG4gICAgICAgICAgICBkZD0nMCcrZGQ7XG4gICAgICAgIH0gXG5cbiAgICAgICAgaWYobW08MTApIFxuICAgICAgICB7XG4gICAgICAgICAgICBtbT0nMCcrbW07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdG9kYXkgPSB5eXl5KyctJyttbSsnLScrZGRcbiAgICAgICAgcmV0dXJuIHRvZGF5XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG4gICAgICAgIGxldCBkb2N0b3JfaWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yIHx8IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkIHx8IHBhcnNlZC5kb2N0b3JfaWRcbiAgICAgICAgbGV0IGhvc3BpdGFsX2lkID0gcGFyc2VkLmhvc3BpdGFsX2lkIHx8IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmNsaW5pY0lkIFxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UGF0aWVudERldGFpbHNWaWV3IHsuLi50aGlzLnByb3BzfSB7Li4udGhpcy5zdGF0ZX0gc2VsZWN0ZWREb2N0b3I9e2RvY3Rvcl9pZH0gc2VsZWN0ZWRDbGluaWM9e2hvc3BpdGFsX2lkfSBmZXRjaERhdGE9e3RoaXMuZmV0Y2hEYXRhLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuXG4gICAgbGV0IERPQ1RPUlMgPSBzdGF0ZS5ET0NUT1JfUFJPRklMRVNcbiAgICBjb25zdCB7IHNlbGVjdGVkUHJvZmlsZSwgcHJvZmlsZXMsIHVzZXJXYWxsZXRCYWxhbmNlLCB1c2VyQ2FzaGJhY2tCYWxhbmNlLCBkZWZhdWx0UHJvZmlsZSwgaXBkX2NoYXQsIGlzX2lwZF9mb3JtX3N1Ym1pdHRlZCwgaXNfYW55X3VzZXJfYnV5X2dvbGQsIGNvbW1vbl91dG1fdGFncyx1c2VyX2xvZ2dlZEluX251bWJlciB9ID0gc3RhdGUuVVNFUlxuICAgIGxldCB7IHNlbGVjdGVkU2xvdCwgZG9jdG9yQ291cG9ucywgZGlzQ291bnRlZE9wZFByaWNlLCBjb3Vwb25BdXRvQXBwbHksIHNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlLCBjb21tb25Qcm9maWxlU2VsZWN0ZWRQcm9jZWR1cmVzLCBwYXltZW50X3R5cGUsIHNlbGVjdGVkRGF0ZUZvcm1hdCwgVElNRVNMT1RfREFUQV9MT0FESU5HIH0gPSBzdGF0ZS5ET0NUT1JfU0VBUkNIXG4gICAgY29uc3QgeyBzYXZlZF9wYXRpZW50X2RldGFpbHMgfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9MQUJTXG4gICAgY29uc3QgeyBjb21tb25fc2V0dGluZ3MsIHNlbGVjdGVkTG9jYXRpb24gfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9PUERcbiAgICBjb25zdCB7IGlwZFBvcHVwRGF0YSB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX0lQRFxuICAgIGNvbnN0IHsgb2RwR29sZFByZWRpY3RlZFByaWNlLCBzZWxlY3RlZF92aXBfcGxhbixzaG93X2RvY3Rvcl9wYXltZW50X21vZGUgfSA9ICBzdGF0ZS5WSVBDTFVCXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0ZWRQcm9maWxlLCBwcm9maWxlcywgRE9DVE9SUywgc2VsZWN0ZWRTbG90LCBkb2N0b3JDb3Vwb25zLCBkaXNDb3VudGVkT3BkUHJpY2UsIGNvdXBvbkF1dG9BcHBseSwgc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmUsIGNvbW1vblByb2ZpbGVTZWxlY3RlZFByb2NlZHVyZXMsIHVzZXJXYWxsZXRCYWxhbmNlLCB1c2VyQ2FzaGJhY2tCYWxhbmNlLCBwYXltZW50X3R5cGUsIHNhdmVkX3BhdGllbnRfZGV0YWlscywgZGVmYXVsdFByb2ZpbGUsIGlwZF9jaGF0LCBjb21tb25fc2V0dGluZ3MsIHNlbGVjdGVkRGF0ZUZvcm1hdCwgVElNRVNMT1RfREFUQV9MT0FESU5HLCBpc19pcGRfZm9ybV9zdWJtaXR0ZWQsIGlwZFBvcHVwRGF0YSwgc2VsZWN0ZWRMb2NhdGlvbiwgb2RwR29sZFByZWRpY3RlZFByaWNlLCBzZWxlY3RlZF92aXBfcGxhbiwgaXNfYW55X3VzZXJfYnV5X2dvbGQsIGNvbW1vbl91dG1fdGFncywgc2hvd19kb2N0b3JfcGF5bWVudF9tb2RlLCB1c2VyX2xvZ2dlZEluX251bWJlclxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0T3BkVGltZVNMb3Q6IChzbG90LCByZXNjaGVkdWxlLCBhcHBvaW50bWVudElkLCBleHRyYURhdGVQYXJhbXMpID0+IGRpc3BhdGNoKHNlbGVjdE9wZFRpbWVTTG90KHNsb3QsIHJlc2NoZWR1bGUsIGFwcG9pbnRtZW50SWQsIGV4dHJhRGF0ZVBhcmFtcykpLFxuICAgICAgICBnZXRVc2VyUHJvZmlsZTogKCkgPT4gZGlzcGF0Y2goZ2V0VXNlclByb2ZpbGUoKSksXG4gICAgICAgIGdldERvY3RvckJ5SWQ6IChkb2N0b3JJZCwgaG9zcGl0YWxJZCwgcHJvY2VkdXJlX2lkcyxjYXRlZ29yeV9pZHMsIGV4dHJhUGFyYW1zLCBjYikgPT4gZGlzcGF0Y2goZ2V0RG9jdG9yQnlJZChkb2N0b3JJZCwgaG9zcGl0YWxJZCwgcHJvY2VkdXJlX2lkcywgY2F0ZWdvcnlfaWRzLCBleHRyYVBhcmFtcywgY2IpKSxcbiAgICAgICAgY3JlYXRlT1BEQXBwb2ludG1lbnQ6IChwb3N0RGF0YSwgY2FsbGJhY2spID0+IGRpc3BhdGNoKGNyZWF0ZU9QREFwcG9pbnRtZW50KHBvc3REYXRhLCBjYWxsYmFjaykpLFxuICAgICAgICBzZW5kQWdlbnRCb29raW5nVVJMOiAob3JkZXJJZCwgdHlwZSwgcHVyY2hhc2VfdHlwZSxxdWVyeV9kYXRhLCBleHRyYVBhcmFtcywgY2IpID0+IGRpc3BhdGNoKHNlbmRBZ2VudEJvb2tpbmdVUkwob3JkZXJJZCwgdHlwZSxwdXJjaGFzZV90eXBlLHF1ZXJ5X2RhdGEsIGV4dHJhUGFyYW1zLCBjYikpLFxuICAgICAgICByZW1vdmVDb3Vwb25zOiAoaG9zcGl0YWxJZCwgY291cG9uSWQpID0+IGRpc3BhdGNoKHJlbW92ZUNvdXBvbnMoaG9zcGl0YWxJZCwgY291cG9uSWQpKSxcbiAgICAgICAgYXBwbHlPcGRDb3Vwb25zOiAocHJvZHVjdElkLCBjb3Vwb25Db2RlLCBjb3Vwb25JZCwgZG9jdG9yX2lkLCBkZWFsUHJpY2UsIGhvc3BpdGFsSWQsIHByb2ZpbGVfaWQsIHByb2NlZHVyZXNfaWRzLCBjYXJ0X2l0ZW0sIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChhcHBseU9wZENvdXBvbnMocHJvZHVjdElkLCBjb3Vwb25Db2RlLCBjb3Vwb25JZCwgZG9jdG9yX2lkLCBkZWFsUHJpY2UsIGhvc3BpdGFsSWQsIHByb2ZpbGVfaWQsIHByb2NlZHVyZXNfaWRzLCBjYXJ0X2l0ZW0sIGNhbGxiYWNrKSksXG4gICAgICAgIGFwcGx5Q291cG9uczogKHByb2R1Y3RJZCwgY291cG9uRGF0YSwgY291cG9uSWQsIGhvc3BpdGFsSWQsY2FsbGJhY2spID0+IGRpc3BhdGNoKGFwcGx5Q291cG9ucyhwcm9kdWN0SWQsIGNvdXBvbkRhdGEsIGNvdXBvbklkLCBob3NwaXRhbElkLGNhbGxiYWNrKSksXG4gICAgICAgIHJlc2V0T3BkQ291cG9uczogKCkgPT4gZGlzcGF0Y2gocmVzZXRPcGRDb3Vwb25zKCkpLFxuICAgICAgICBnZXRDb3Vwb25zOiAoZGF0YSkgPT4gZGlzcGF0Y2goZ2V0Q291cG9ucyhkYXRhKSksXG4gICAgICAgIGNyZWF0ZVByb2ZpbGU6IChwb3N0RGF0YSwgY2IpID0+IGRpc3BhdGNoKGNyZWF0ZVByb2ZpbGUocG9zdERhdGEsIGNiKSksXG4gICAgICAgIHNlbmRPVFA6IChudW1iZXIsdmlhU21zLHZpYVdoYXRzYXBwLG1lc3NhZ2VfdHlwZSwgY2IpID0+IGRpc3BhdGNoKHNlbmRPVFAobnVtYmVyLHZpYVNtcyx2aWFXaGF0c2FwcCxtZXNzYWdlX3R5cGUsIGNiKSksXG4gICAgICAgIHN1Ym1pdE9UUDogKG51bWJlciwgb3RwLGV4dHJhUGFyYW1zRGF0YSwgIGNiKSA9PiBkaXNwYXRjaChzdWJtaXRPVFAobnVtYmVyLCBvdHAsZXh0cmFQYXJhbXNEYXRhLCBjYikpLFxuICAgICAgICBmZXRjaFRyYW5zYWN0aW9uczogKCkgPT4gZGlzcGF0Y2goZmV0Y2hUcmFuc2FjdGlvbnMoKSksXG4gICAgICAgIGFkZFRvQ2FydDogKHByb2R1Y3RfaWQsIGRhdGEpID0+IGRpc3BhdGNoKGFkZFRvQ2FydChwcm9kdWN0X2lkLCBkYXRhKSksXG4gICAgICAgIGdldENhcnRJdGVtczogKCkgPT4gZGlzcGF0Y2goZ2V0Q2FydEl0ZW1zKCkpLFxuICAgICAgICBzZWxlY3Rfb3BkX3BheW1lbnRfdHlwZTogKHR5cGUpID0+IGRpc3BhdGNoKHNlbGVjdF9vcGRfcGF5bWVudF90eXBlKHR5cGUpKSxcbiAgICAgICAgZ2V0VGltZVNsb3RzOiAoZG9jdG9ySWQsIGNsaW5pY0lkLCBleHRyYVBhcmFtcywgIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChnZXRUaW1lU2xvdHMoZG9jdG9ySWQsIGNsaW5pY0lkLCBleHRyYVBhcmFtcywgY2FsbGJhY2spKSxcbiAgICAgICAgZWRpdFVzZXJQcm9maWxlOiAocHJvZmlsZURhdGEsIHByb2ZpbGVJZCwgY2IpID0+IGRpc3BhdGNoKGVkaXRVc2VyUHJvZmlsZShwcm9maWxlRGF0YSwgcHJvZmlsZUlkLCBjYikpLFxuICAgICAgICBwYXRpZW50RGV0YWlsczogKGNyaXRlcmlhKSA9PiBkaXNwYXRjaChwYXRpZW50RGV0YWlscyhjcml0ZXJpYSkpLFxuICAgICAgICBpcGRDaGF0VmlldzogKGRhdGEpID0+IGRpc3BhdGNoKGlwZENoYXRWaWV3KGRhdGEpKSxcbiAgICAgICAgY2hlY2tJcGRDaGF0QWdlbnRTdGF0dXM6IChjYikgPT4gZGlzcGF0Y2goY2hlY2tJcGRDaGF0QWdlbnRTdGF0dXMoY2IpKSxcbiAgICAgICAgc2F2ZUF2YWlsTm93SW5zdXJhbmNlOihkYXRhKSA9PiBkaXNwYXRjaChzYXZlQXZhaWxOb3dJbnN1cmFuY2UoZGF0YSkpLFxuICAgICAgICBzdWJtaXRJUERGb3JtOiAoZm9ybURhdGEsIHNlbGVjdGVkTG9jYXRpb24sIGNiKSA9PiBkaXNwYXRjaChzdWJtaXRJUERGb3JtKGZvcm1EYXRhLCBzZWxlY3RlZExvY2F0aW9uLCBjYikpLFxuICAgICAgICBhZ2VudExvZ2luOiAodG9rZW4sIGNiKSA9PiBkaXNwYXRjaChhZ2VudExvZ2luKHRva2VuLCBjYikpLFxuICAgICAgICBjb2RUb1ByZXBhaWQ6IChwb3N0RGF0YSwgY2IpID0+IGRpc3BhdGNoKGNvZFRvUHJlcGFpZChwb3N0RGF0YSwgY2IpKSxcbiAgICAgICAgY2xlYXJWaXBTZWxlY3RlZFBsYW46KCkgPT5kaXNwYXRjaChjbGVhclZpcFNlbGVjdGVkUGxhbigpKSxcbiAgICAgICAgZ2V0T3BkVmlwR29sZFBsYW5zOiAoZXh0cmFEYXRhUGFyYW1zLCBjYik9PiBkaXNwYXRjaChnZXRPcGRWaXBHb2xkUGxhbnMoZXh0cmFEYXRhUGFyYW1zLCBjYikpLFxuICAgICAgICBzZWxlY3RWaXBDbHViUGxhbjogKHR5cGUsIHNlbGVjdGVkUGxhbiwgY2IpID0+IGRpc3BhdGNoKHNlbGVjdFZpcENsdWJQbGFuKHR5cGUsIHNlbGVjdGVkUGxhbiwgY2IpKSxcbiAgICAgICAgcHVzaE1lbWJlcnNEYXRhOihjcml0ZXJpYSwgY2FsbGJhY2spID0+ZGlzcGF0Y2gocHVzaE1lbWJlcnNEYXRhKGNyaXRlcmlhLCBjYWxsYmFjaykpLFxuICAgICAgICByZXRyaWV2ZU1lbWJlcnNEYXRhOih0eXBlLGV4dHJhUGFyYW1zLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2gocmV0cmlldmVNZW1iZXJzRGF0YSh0eXBlLCBleHRyYVBhcmFtcywgY2FsbGJhY2spKSxcbiAgICAgICAgc2VsZWN0UHJvZmlsZTogKGlkKSA9PiBkaXNwYXRjaChzZWxlY3RQcm9maWxlKGlkKSksXG4gICAgICAgIFNlbmRJcGRCb29raW5nRW1haWw6KGRhdGEsY2IpID0+ZGlzcGF0Y2goU2VuZElwZEJvb2tpbmdFbWFpbChkYXRhLCBjYikpLFxuICAgICAgICBOb25JcGRCb29raW5nTGVhZDooZGF0YSxjYikgPT5kaXNwYXRjaChOb25JcGRCb29raW5nTGVhZChkYXRhLCBjYikpLFxuICAgICAgICBzYXZlTGVhZFBobk51bWJlcjoobnVtYmVyKSA9PiBkaXNwYXRjaChzYXZlTGVhZFBobk51bWJlcihudW1iZXIpKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShQYXRpZW50RGV0YWlscyk7XG4iXSwic291cmNlUm9vdCI6IiJ9