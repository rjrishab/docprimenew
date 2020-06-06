(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./dev/js/components/opd/commons/PopUp/PopUp.js":
/*!******************************************************!*\
  !*** ./dev/js/components/opd/commons/PopUp/PopUp.js ***!
  \******************************************************/
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

var PopUpView = function (_React$Component) {
	_inherits(PopUpView, _React$Component);

	function PopUpView(props) {
		_classCallCheck(this, PopUpView);

		var _this = _possibleConstructorReturn(this, (PopUpView.__proto__ || Object.getPrototypeOf(PopUpView)).call(this, props));

		_this.state = {
			errorMessage: false,
			procedure: [],
			selectedProcedures: []
		};
		return _this;
	}

	_createClass(PopUpView, [{
		key: 'componentDidMount',
		value: function componentDidMount() {

			var selectedProcedures = [],
			    procedures = [];
			this.props.data.procedure_categories.map(function (category) {
				procedures = category.procedures.filter(function (x) {
					return x.is_selected;
				}).map(function (x) {
					return x.procedure.id;
				});
				selectedProcedures = selectedProcedures.concat(procedures);
			});

			var pids = this.props.details.commonSelectedCriterias.filter(function (x) {
				return x.type == 'procedures' && selectedProcedures.indexOf(x.id) == -1;
			}).map(function (x) {
				return x.id;
			});

			selectedProcedures = selectedProcedures.concat(pids);

			this.setState({ selectedProcedures: selectedProcedures, procedure: [].concat(selectedProcedures) });
		}
	}, {
		key: 'toggleLayout',
		value: function toggleLayout() {

			var fetchResults = false;
			var selectedProcedures = this.state.selectedProcedures;
			var procedure = this.state.procedure;
			if (selectedProcedures.length === procedure.length && selectedProcedures.sort().every(function (value, index) {
				return value === procedure.sort()[index];
			})) {} else {
				fetchResults = true;
			}
			//selectedProcedures = selectedProcedures
			this.props.toggle(fetchResults, this.state.selectedProcedures);
		}
	}, {
		key: 'toggleData',
		value: function toggleData(procedure) {
			var selectedProcedures = this.state.selectedProcedures;
			if (selectedProcedures.length > 1 || selectedProcedures.length == 1 && selectedProcedures.indexOf(procedure.procedure.id) == -1) {

				if (selectedProcedures.indexOf(procedure.procedure.id) != -1) {
					selectedProcedures.splice(selectedProcedures.indexOf(procedure.procedure.id), 1);
				} else {
					selectedProcedures.push(procedure.procedure.id);
				}
				this.setState({ selectedProcedures: selectedProcedures });
			} else {
				setTimeout(function () {
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Select at least one Procedure" });
				}, 500);
				return null;
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement('div', { className: 'cancel-overlay', onClick: this.props.toggle }),
				_react2.default.createElement(
					'div',
					{ className: 'widget cancel-appointment-div cancel-popup' },
					_react2.default.createElement(
						'div',
						{ className: 'pop-top-heading' },
						'Select Treatment(s)',
						_react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/close-black.svg", onClick: this.props.toggle })
					),
					_react2.default.createElement(
						'div',
						{ className: 'widget-header action-screen-header pop-padding' },
						_react2.default.createElement(
							'p',
							{ className: 'fw-500 cancel-appointment-head' },
							this.props.heading
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'terms-condition-div onscreen-scroll' },
						this.props.data.procedure_categories.map(function (category, key) {

							return _react2.default.createElement(
								'div',
								{ className: 'pop-underline', key: key },
								_react2.default.createElement(
									'h4',
									null,
									category.name
								),
								category.procedures.map(function (procedure, i) {

									return _react2.default.createElement(
										'li',
										{ key: i + '_a' },
										_react2.default.createElement(
											'label',
											{ className: 'procedure-check ck-bx', htmlFor: procedure.procedure.id + '_' },
											procedure.procedure.name,
											_react2.default.createElement('input', { type: 'checkbox', checked: _this2.state.selectedProcedures.indexOf(procedure.procedure.id) == -1 ? false : true, id: procedure.procedure.id + '_', name: 'fruit-2', value: '',
												onChange: _this2.toggleData.bind(_this2, procedure) }),
											_react2.default.createElement('span', { className: 'checkmark' })
										),
										_this2.props.hospitalEnable ? _react2.default.createElement(
											'p',
											{ className: 'pr-prices' },
											'\u20B9 ',
											procedure.deal_price,
											_react2.default.createElement(
												'span',
												{ className: 'pr-cut-price' },
												'\u20B9 ',
												procedure.mrp
											)
										) : _react2.default.createElement(
											'p',
											{ className: 'pr-prices' },
											'\u20B9 ',
											procedure.mrp
										)
									);
								})
							);
						})
					),
					this.state.errorMessage ? _react2.default.createElement(
						'p',
						null,
						'Please Select at least one Procedure'
					) : '',
					_react2.default.createElement(
						'div',
						{ className: 'procedures-btn-pop' },
						_react2.default.createElement(
							'button',
							{ className: 'fw-500', onClick: this.toggleLayout.bind(this) },
							'Done'
						)
					)
				)
			);
		}
	}]);

	return PopUpView;
}(_react2.default.Component);

exports.default = PopUpView;

/***/ }),

/***/ "./dev/js/components/opd/commons/PopUp/index.js":
/*!******************************************************!*\
  !*** ./dev/js/components/opd/commons/PopUp/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PopUp = __webpack_require__(/*! ./PopUp */ "./dev/js/components/opd/commons/PopUp/PopUp.js");

var _PopUp2 = _interopRequireDefault(_PopUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _PopUp2.default;

/***/ }),

/***/ "./dev/js/components/opd/commons/doctorResultCard/DoctorResultCard.js":
/*!****************************************************************************!*\
  !*** ./dev/js/components/opd/commons/doctorResultCard/DoctorResultCard.js ***!
  \****************************************************************************/
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

var _initialsPicture = __webpack_require__(/*! ../../../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _gtm = __webpack_require__(/*! ../../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _storage = __webpack_require__(/*! ../../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _PopUp = __webpack_require__(/*! ../PopUp */ "./dev/js/components/opd/commons/PopUp/index.js");

var _PopUp2 = _interopRequireDefault(_PopUp);

var _RatingStars = __webpack_require__(/*! ../../../commons/ratingsProfileView/RatingStars */ "./dev/js/components/commons/ratingsProfileView/RatingStars.js");

var _RatingStars2 = _interopRequireDefault(_RatingStars);

var _assert = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");

var _commonVipGoldBadge = __webpack_require__(/*! ../../../commons/commonVipGoldBadge.js */ "./dev/js/components/commons/commonVipGoldBadge.js");

var _commonVipGoldBadge2 = _interopRequireDefault(_commonVipGoldBadge);

var _commonVipGoldNonLoginBadge = __webpack_require__(/*! ../../../commons/commonVipGoldNonLoginBadge.js */ "./dev/js/components/commons/commonVipGoldNonLoginBadge.js");

var _commonVipGoldNonLoginBadge2 = _interopRequireDefault(_commonVipGoldNonLoginBadge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var DoctorProfileCard = function (_React$Component) {
    _inherits(DoctorProfileCard, _React$Component);

    function DoctorProfileCard(props) {
        _classCallCheck(this, DoctorProfileCard);

        var _this = _possibleConstructorReturn(this, (DoctorProfileCard.__proto__ || Object.getPrototypeOf(DoctorProfileCard)).call(this, props));

        _this.state = {
            errorMessage: false,
            ssrFlag: false
        };
        return _this;
    }

    _createClass(DoctorProfileCard, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // if (window) {
            //     window.scrollTo(0, 0)
            // }
            this.setState({ ssrFlag: true });
        }
    }, {
        key: 'viewProfileClicked',
        value: function viewProfileClicked(id, url, hospital_id, e) {
            e.stopPropagation();

            var data = {
                'Category': 'ConsumerApp', 'Action': 'OpdSearchViewProfileClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'opd-search-view-profile-clicked', 'selectedId': id
            };
            _gtm2.default.sendEvent({ data: data });

            var _trackingEventsBookNo = this.trackingEventsBookNow(id),
                category_ids = _trackingEventsBookNo.category_ids,
                procedure_ids = _trackingEventsBookNo.procedure_ids;

            this.props.clearVipSelectedPlan();
            if (e.ctrlKey || e.metaKey) {} else {
                e.preventDefault();

                if (url) {
                    if (category_ids.length || procedure_ids.length) {
                        this.props.history.push('/' + url + '?hospital_id=' + hospital_id + '&is_procedure=true&category_ids=' + category_ids + '&procedure_ids=' + procedure_ids + '&hide_search_data=true');
                    } else {
                        this.props.history.push('/' + url + '?hospital_id=' + hospital_id + '&hide_search_data=true');
                    }
                } else {
                    if (category_ids.length || procedure_ids.length) {
                        this.props.history.push('/opd/doctor/' + id + '?hospital_id=' + hospital_id + '&is_procedure=true&category_ids=' + category_ids + '&procedure_ids=' + procedure_ids + '&hide_search_data=true');
                    } else {
                        this.props.history.push('/opd/doctor/' + id + '?hospital_id=' + hospital_id + '&hide_search_data=true');
                    }
                }
            }
        }
    }, {
        key: 'bookNowClicked',
        value: function bookNowClicked(id, url, hospital_id, e) {
            //always clear selected time at doctor profile
            var slot = { time: {} };
            this.props.selectOpdTimeSLot(slot, false);

            var data = {
                'Category': 'ConsumerApp', 'Action': 'OpdSearchBookNowClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'opd-book-now-clicked', 'selectedId': id, 'isNonBookablePopup': this.props.isNonBookablePopup ? this.props.isNonBookablePopup : false
            };
            _gtm2.default.sendEvent({ data: data });

            if (this.props.isNonBookablePopup) {
                var nonBookableDocData = {
                    'Category': 'ConsumerApp', 'Action': 'NonBookableBookNowPopupClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'non-bookable-book-now-popup-clicked', 'selectedId': id
                };
                _gtm2.default.sendEvent({ data: nonBookableDocData });
            }

            var _trackingEventsBookNo2 = this.trackingEventsBookNow(id),
                procedure_ids = _trackingEventsBookNo2.procedure_ids;

            this.props.saveProfileProcedures('', '', procedure_ids, true);
            this.props.clearVipSelectedPlan();
            if (url) {
                this.props.history.push('/' + url + '/booking?doctor_id=' + id + '&hospital_id=' + hospital_id);
            } else {
                this.props.history.push('/opd/doctor/' + id + '/' + hospital_id + '/bookdetails');
            }
        }
    }, {
        key: 'trackingEventsBookNow',
        value: function trackingEventsBookNow(id) {
            var Distance = '';

            if (this.props.details && this.props.details.distance) {
                Distance = (Math.round(this.props.details.distance * 10) / 10).toFixed(1);
            }

            var data = {
                'Category': 'ConsumerApp', 'Action': 'DoctorSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-selected', 'selectedId': id
            };
            _gtm2.default.sendEvent({ data: data });

            var category_ids = this.props.commonSelectedCriterias.filter(function (x) {
                return x.type == 'procedures_category';
            }).map(function (x) {
                return x.id;
            }).join(',');
            var procedure_ids = this.props.commonSelectedCriterias.filter(function (x) {
                return x.type == 'procedures';
            }).map(function (x) {
                return x.id;
            }).join(',');
            var condition_ids = this.props.commonSelectedCriterias.filter(function (x) {
                return x.type == 'condition';
            }).map(function (x) {
                return x.id;
            }).join(',');
            var specialization_ids = this.props.commonSelectedCriterias.filter(function (x) {
                return x.type == 'speciality';
            }).map(function (x) {
                return x.id;
            }).join(',');
            data = {
                'Category': 'ConsumerApp', 'Action': 'DoctorRankInSearch', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-rank-in-search', 'Rank': this.props.rank + 1, 'DoctorSearchCount': this.props.count, 'specializations': specialization_ids, 'conditions': condition_ids, 'procedures': procedure_ids, 'procedure_category': category_ids, 'Distance': Distance
            };
            _gtm2.default.sendEvent({ data: data });

            return { category_ids: category_ids, procedure_ids: procedure_ids };
        }
    }, {
        key: 'bookNow',
        value: function bookNow(id, e) {
            e.stopPropagation();
            // this.props.history.push(`/doctorprofile/${id}/availability`)
        }
    }, {
        key: 'getQualificationStr',
        value: function getQualificationStr(qualificationSpecialization) {
            if (qualificationSpecialization.length) {
                return qualificationSpecialization[0].name;
            } else {
                return null;
            }

            // return qualificationSpecialization.reduce((str, curr, i) => {
            //     str += `${curr.name}`
            //     if (i < qualificationSpecialization.length - 1) str += `, `;
            //     return str
            // }, "")
        }
    }, {
        key: 'claimButtonClick',
        value: function claimButtonClick(e) {
            e.stopPropagation();

            var data = {
                'Category': 'ConsumerApp', 'Action': 'ClaimButtomClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'claim-buttom-clicked', 'selectedId': this.props.details.id
            };
            _gtm2.default.sendEvent({ data: data });

            this.props.history.push('/doctorsignup');
        }
    }, {
        key: 'toggle',
        value: function toggle(which) {
            var fetchResults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var procedure_ids = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];


            this.setState(_defineProperty({}, which, !this.state[which]));
            if (fetchResults) {
                if (procedure_ids.length) {
                    this.props.saveCommonProcedures(procedure_ids);
                    this.props.mergeOPDState('');
                    this.props.resetProcedureURl();
                }
            }
        }
    }, {
        key: 'goldClicked',
        value: function goldClicked() {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'VipGoldClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'vip-gold-clicked', 'selectedId': this.props.details.id
            };
            _gtm2.default.sendEvent({ data: data });
            this.props.history.push('/vip-gold-details?is_gold=true&source=docgoldlisting&lead_source=Docprime');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var parsed = queryString.parse(this.props.location.search);
            var _props$details = this.props.details,
                id = _props$details.id,
                experience_years = _props$details.experience_years,
                gender = _props$details.gender,
                hospitals = _props$details.hospitals,
                hospital_count = _props$details.hospital_count,
                name = _props$details.name,
                distance = _props$details.distance,
                qualifications = _props$details.qualifications,
                thumbnail = _props$details.thumbnail,
                experiences = _props$details.experiences,
                mrp = _props$details.mrp,
                deal_price = _props$details.deal_price,
                general_specialization = _props$details.general_specialization,
                is_live = _props$details.is_live,
                display_name = _props$details.display_name,
                url = _props$details.url,
                is_license_verified = _props$details.is_license_verified,
                is_gold = _props$details.is_gold,
                new_schema = _props$details.new_schema,
                enabled_for_online_booking = _props$details.enabled_for_online_booking,
                discounted_price = _props$details.discounted_price,
                parent_url = _props$details.parent_url,
                average_rating = _props$details.average_rating,
                rating_count = _props$details.rating_count,
                google_rating = _props$details.google_rating,
                enabled_for_cod = _props$details.enabled_for_cod,
                cod_deal_price = _props$details.cod_deal_price;


            var enabled_for_hospital_booking = true;
            var enabled_for_prepaid_booking = false;
            var hospital = hospitals && hospitals.length ? hospitals[0] : {};
            var expStr = "";

            if (experiences && experiences.length) {
                expStr += "EXP - ";
                experiences.map(function (exp, i) {
                    expStr += exp.hospital;
                    if (i < experiences.length - 1) expStr += ', ';
                });
            }

            var Distance = (Math.round(distance * 10) / 10).toFixed(1);
            if (mrp != 0 && discounted_price != 0) {
                var discount = 100 - Math.round(discounted_price * 100 / mrp);
            }

            try {
                if (new_schema) {
                    new_schema = JSON.stringify(new_schema);
                }
            } catch (e) {
                new_schema = "";
            }
            // let is_vip_gold = false
            var is_procedure = false;
            // let is_gold_member =false
            if (hospitals && hospitals.length) {
                // is_vip_gold = hospital.hosp_is_gold || parsed.fromGoldVip
                // is_gold_member = hospital.is_gold_member
                var selectedCount = 0;
                var unselectedCount = 0;
                var finalProcedureDealPrice = discounted_price;
                var finalProcedureMrp = mrp;
                hospitals[0].procedure_categories.map(function (x) {
                    is_procedure = true;
                    x.procedures.filter(function (x) {
                        return x.is_selected;
                    }).map(function (x) {
                        finalProcedureDealPrice += x.deal_price;
                        finalProcedureMrp += x.mrp;
                        selectedCount++;
                    });

                    unselectedCount += x.procedures.filter(function (x) {
                        return !x.is_selected;
                    }).length;
                });

                if (is_procedure && false) {
                    if (finalProcedureMrp != 0 && finalProcedureDealPrice != 0) {
                        discount = 100 - Math.round(finalProcedureDealPrice * 100 / finalProcedureMrp);
                    }
                }

                enabled_for_hospital_booking = hospitals[0].enabled_for_online_booking;
                enabled_for_prepaid_booking = hospitals[0].enabled_for_prepaid;
                is_procedure = false;

                var is_insurance_applicable = hospital.is_insurance_covered && hospital.is_user_insured && deal_price <= hospital.insurance_threshold_amount;
                var offPercent = '';
                if (mrp && discounted_price != null && discounted_price < mrp && enabled_for_prepaid_booking) {
                    offPercent = parseInt((mrp - discounted_price) / mrp * 100);
                } else if (enabled_for_cod && cod_deal_price != null && cod_deal_price != mrp && !enabled_for_prepaid_booking) {
                    offPercent = parseInt((mrp - cod_deal_price) / mrp * 100);
                }

                var is_vip_applicable = hospital.is_vip_member && hospital.cover_under_vip;
                // let vip_amount = hospital.vip_amount + hospital.vip_convenience_amount
                // let is_enable_for_vip = hospital.is_enable_for_vip || parsed.fromVip
                var avgGoogleRating = '';
                var googleRatingCount = '';
                if (google_rating && google_rating.avg_rating && google_rating.rating_count) {
                    avgGoogleRating = google_rating.avg_rating;
                    googleRatingCount = google_rating.rating_count || '';
                }
                var is_insurance_buy_able = hospital.is_insurance_covered && !hospital.is_user_insured && deal_price <= hospital.insurance_threshold_amount;
                var insurance_limit_message = hospital.insurance_limit_message;
                var qualificationsArray = [];
                if (qualifications && qualifications.length) {
                    qualificationsArray = qualifications.filter(function (x) {
                        return x.qualification.length <= 6;
                    });
                }

                // let vip_gold_price = (hospital.vip_convenience_amount + hospital.vip_gold_price || 0)
                // if (!is_vip_applicable && !parsed.fromVip) {
                //     is_enable_for_vip = parsed.fromGoldVip || (is_gold_member && is_vip_gold) ? false : is_enable_for_vip
                // }

                var is_labopd_enable_for_vip = hospital.is_enable_for_vip;
                var is_labopd_enable_for_gold = hospital.hosp_is_gold || parsed.fromGoldVip;
                var is_vip_member = hospital.is_vip_member;
                var is_gold_member = hospital.is_gold_member;
                var covered_under_vip = hospital.cover_under_vip;
                var vip = {};
                vip.vip_amount = hospital.vip_amount;
                vip.vip_convenience_amount = hospital.vip_convenience_amount;
                vip.vip_gold_price = hospital.vip_gold_price;

                var show_common_prices = !is_labopd_enable_for_vip || (is_gold_member || is_vip_member) && !covered_under_vip;

                //console.log('is_vip_applicable'+is_vip_applicable);console.log('is_vip_gold'+is_vip_gold);console.log('vip_gold_price'+vip_gold_price);console.log('discunted_price'+discounted_price);
                return _react2.default.createElement(
                    'div',
                    { className: 'cstm-docCard mb-3' },
                    new_schema && !this.props.isHospitalPage ? _react2.default.createElement('script', { type: 'application/ld+json', dangerouslySetInnerHTML: {
                            __html: new_schema
                        } }) : "",
                    _react2.default.createElement(
                        'div',
                        { className: 'cstm-docCard-content' },
                        _react2.default.createElement(
                            'div',
                            { className: 'row no-gutters', style: { paddingBottom: 10 } },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-8' },
                                _react2.default.createElement(
                                    'a',
                                    { href: url ? '/' + url : '/opd/doctor/' + id, onClick: this.viewProfileClicked.bind(this, id, url, hospital.hospital_id || ''), title: display_name },
                                    _react2.default.createElement(
                                        'h2',
                                        { className: 'cstmDocName' },
                                        display_name
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'cstm-doc-details-container' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'cstm-doc-img-container' },
                                        _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: thumbnail, onClick: this.viewProfileClicked.bind(this, id, url, hospital.hospital_id || ''), title: display_name },
                                                _react2.default.createElement(
                                                    _initialsPicture2.default,
                                                    { name: name, has_image: !!thumbnail, className: 'initialsPicture-ds fltr-initialPicture-ds', style: { width: 50, height: 50, fontSize: '1.5em' } },
                                                    _react2.default.createElement('img', { className: 'img-round', src: thumbnail, alt: display_name, title: display_name })
                                                )
                                            ),
                                            is_license_verified && enabled_for_online_booking ? _react2.default.createElement(
                                                'p',
                                                { className: 'cstm-varify' },
                                                'Verified'
                                            ) : ''
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'cstm-doc-content-container' },
                                        _react2.default.createElement(
                                            'h3',
                                            null,
                                            this.getQualificationStr(general_specialization || [])
                                        ),
                                        qualifications && qualifications.length && qualificationsArray.length ? _react2.default.createElement(
                                            'h3',
                                            null,
                                            qualificationsArray.map(function (qualification, index) {
                                                if (index < 3) {
                                                    return _react2.default.createElement(
                                                        'span',
                                                        { key: index },
                                                        qualification.qualification,
                                                        ' ',
                                                        index < qualificationsArray.length - 1 && index != 2 ? '| ' : ''
                                                    );
                                                } else return '';
                                            })
                                        ) : '',
                                        experience_years ? _react2.default.createElement(
                                            'h3',
                                            { style: { marginBottom: 5 } },
                                            experience_years,
                                            ' Years Experience'
                                        ) : '',
                                        hospital && hospital.timings && Object.keys(hospital.timings).length ? hospital.timings[Object.keys(hospital.timings)[0]].map(function (time, index) {
                                            return _react2.default.createElement(
                                                'p',
                                                { key: index, style: index == 0 ? {} : { marginLeft: 18 } },
                                                index == 0 ? _react2.default.createElement('img', { className: 'cstmTimeImg', src: "/assets" + "/img/watch-date.svg" }) : '',
                                                time
                                            );
                                        }) : ''
                                    )
                                ),
                                average_rating ? _react2.default.createElement(_RatingStars2.default, { average_rating: average_rating, rating_count: rating_count || '', width: '12px', height: '12px' }) : ''
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-4 booking-column', style: mrp == 0 ? { paddingTop: 40 } : {} },
                                _react2.default.createElement(
                                    'section',
                                    null,
                                     false ? undefined : '',
                                    !is_insurance_applicable && !show_common_prices ? _react2.default.createElement(_commonVipGoldBadge2.default, _extends({ is_labopd_enable_for_vip: is_labopd_enable_for_vip, is_labopd_enable_for_gold: is_labopd_enable_for_gold, is_vip_member: is_vip_member, is_gold_member: is_gold_member, covered_under_vip: covered_under_vip, is_doc: true, vip_data: vip }, this.props, { mrp: mrp, discounted_price: discounted_price, enabled_for_hospital_booking: enabled_for_hospital_booking, goldClicked: this.goldClicked.bind(this), deal_price: deal_price })) : '',
                                    is_insurance_applicable ? _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'cst-doc-price' },
                                            '\u20B9 ',
                                            0
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'ins-val-bx' },
                                            'Covered Under Insurance'
                                        )
                                    ) : show_common_prices ? enabled_for_cod && cod_deal_price != null && !enabled_for_prepaid_booking && enabled_for_online_booking && cod_deal_price != mrp ? _react2.default.createElement(
                                        'p',
                                        { className: 'cst-doc-price' },
                                        '\u20B9 ',
                                        cod_deal_price,
                                        ' ',
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'cstm-doc-cut-price' },
                                            '\u20B9 ',
                                            mrp,
                                            ' '
                                        )
                                    ) : enabled_for_cod && cod_deal_price != null && !enabled_for_prepaid_booking && enabled_for_online_booking && cod_deal_price == mrp ? _react2.default.createElement(
                                        'p',
                                        { className: 'cst-doc-price' },
                                        '\u20B9 ',
                                        cod_deal_price
                                    ) : enabled_for_hospital_booking && discounted_price != null && discounted_price != mrp ? _react2.default.createElement(
                                        'p',
                                        { className: 'cst-doc-price' },
                                        '\u20B9 ',
                                        discounted_price,
                                        ' ',
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'cstm-doc-cut-price' },
                                            '\u20B9 ',
                                            mrp,
                                            ' '
                                        )
                                    ) : mrp && mrp != 0 ? _react2.default.createElement(
                                        'p',
                                        { className: 'cst-doc-price' },
                                        '\u20B9 ',
                                        mrp
                                    ) : mrp != null && enabled_for_hospital_booking ? _react2.default.createElement(
                                        'span',
                                        { className: 'filtr-offer ofr-ribbon free-ofr-ribbon fw-700' },
                                        'Free Consultation'
                                    ) : '' : '',
                                    !is_insurance_applicable && enabled_for_hospital_booking && offPercent && offPercent > 0 && show_common_prices ? _react2.default.createElement(
                                        'p',
                                        { className: 'cstm-cpn' },
                                        offPercent,
                                        '% Off',
                                        deal_price != discounted_price ? _react2.default.createElement(
                                            'span',
                                            null,
                                            _react2.default.createElement('br', null),
                                            '(includes Coupon)'
                                        ) : ''
                                    ) : ''
                                ),
                                !is_insurance_applicable && !show_common_prices ? _react2.default.createElement(_commonVipGoldNonLoginBadge2.default, _extends({ is_labopd_enable_for_vip: is_labopd_enable_for_vip, is_labopd_enable_for_gold: is_labopd_enable_for_gold, is_vip_member: is_vip_member, is_gold_member: is_gold_member, covered_under_vip: covered_under_vip, is_doc: true, vip_data: vip }, this.props, { mrp: mrp, discounted_price: discounted_price, enabled_for_hospital_booking: enabled_for_hospital_booking, goldClicked: this.goldClicked.bind(this), deal_price: deal_price })) : '',
                                enabled_for_hospital_booking ? _react2.default.createElement(
                                    'button',
                                    { className: 'cstm-book-btn', onClick: this.bookNowClicked.bind(this, id, url, hospital.hospital_id || '') },
                                    'Book Now'
                                ) : _react2.default.createElement(
                                    'button',
                                    { className: 'cstm-view-btn', onClick: this.viewProfileClicked.bind(this, id, url, hospital.hospital_id || '') },
                                    'View Contact'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'cstmCardFooter' },
                        _react2.default.createElement(
                            'div',
                            { className: 'cstmfooterContent' },
                            hospital.url && hospital.url.length && !this.props.isHospitalPage ? _react2.default.createElement(
                                'h3',
                                null,
                                _react2.default.createElement('img', { style: { width: '16px' }, src: "/assets" + "/img/cstmhome.svg" }),
                                _react2.default.createElement(
                                    'a',
                                    { href: '/' + hospital.url, style: { color: '#000' }, onClick: function onClick(e) {
                                            e.preventDefault();
                                            _this2.props.history.push('/' + hospital.url);
                                        } },
                                    hospital.hospital_name
                                ),
                                hospital_count > 1 ? _react2.default.createElement(
                                    'span',
                                    null,
                                    ' & ',
                                    hospital_count - 1,
                                    ' More '
                                ) : ''
                            ) : this.props.isHospitalPage ? _react2.default.createElement(
                                'p',
                                null,
                                _react2.default.createElement('img', { style: { width: '16px' }, src: "/assets" + "/img/cstmhome.svg" }),
                                hospital.hospital_name,
                                hospital_count > 1 ? _react2.default.createElement(
                                    'span',
                                    null,
                                    ' & ',
                                    hospital_count - 1,
                                    ' More '
                                ) : ''
                            ) : _react2.default.createElement(
                                'h3',
                                null,
                                _react2.default.createElement('img', { style: { width: '16px' }, src: "/assets" + "/img/cstmhome.svg" }),
                                hospital.hospital_name,
                                hospital_count > 1 ? _react2.default.createElement(
                                    'span',
                                    null,
                                    ' & ',
                                    hospital_count - 1,
                                    ' More '
                                ) : ''
                            ),
                            google_rating && avgGoogleRating && googleRatingCount && !average_rating ? _react2.default.createElement(
                                'div',
                                { className: 'd-flex align-items-center', style: { paddingLeft: 20, marginBottom: 8 } },
                                _react2.default.createElement(_RatingStars2.default, { average_rating: avgGoogleRating, rating_count: googleRatingCount, width: '12px', height: '12px' }),
                                _react2.default.createElement('img', { src: "/assets" + '/img/powered_by_google_on_white.png', style: { width: 100, marginLeft: 6 } })
                            ) : '',
                            parent_url && parent_url.length && !this.props.isHospitalPage ? _react2.default.createElement(
                                'a',
                                { href: '/' + parent_url, onClick: function onClick(e) {
                                        e.preventDefault();
                                        _this2.props.history.push('/' + parent_url);
                                    } },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'mb-rmv' },
                                    _react2.default.createElement('img', { style: { width: '10px', marginLeft: '3px' }, src: "/assets" + "/img/new-loc-ico.svg" }),
                                    hospital.short_address
                                )
                            ) : _react2.default.createElement(
                                'p',
                                { className: 'mb-rmv' },
                                _react2.default.createElement('img', { style: { width: '10px', marginLeft: '3px' }, src: "/assets" + "/img/new-loc-ico.svg" }),
                                hospital.short_address
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'cstmDocLoc' },
                            _react2.default.createElement(
                                'p',
                                { className: '' },
                                _react2.default.createElement('img', { src: "/assets" + "/img/cstmdist.svg" }),
                                Distance,
                                '\xA0km'
                            )
                        )
                    )
                )

                // <div className="filter-card-dl mb-3" >
                //     {
                //         new_schema ? <script type="application/ld+json" dangerouslySetInnerHTML={{
                //             __html: new_schema
                //         }} />
                //             : ""
                //     }
                //     {
                //         is_gold ?
                //             <img className="gold-card-img" src={ASSETS_BASE_URL + "/img/gold.svg"} />
                //             : ''
                //     }
                //     <div className="fltr-crd-top-container">
                //         {
                //             this.props.seoFriendly ?
                //                 <div className="fltr-lctn-dtls" style={{ paddingLeft: 45 }}>
                //                     {
                //                         parent_url && parent_url.length ?
                //                             <a href={parent_url} onClick={
                //                                 (e) => {
                //                                     e.preventDefault()
                //                                     this.props.history.push(`/${parent_url}`)
                //                                 }
                //                             }>
                //                                 <p>
                //                                     <img className="fltr-loc-ico" width="12px" height="18px" src={ASSETS_BASE_URL + "/img/customer-icons/map-marker-blue.svg"} />
                //                                     <span>{hospital.short_address}</span> {hospital.short_address ? " | " : ""}<span>{Distance} Km</span>
                //                                 </p>
                //                             </a>
                //                             :
                //                             <p>
                //                                 <img className="fltr-loc-ico" width="12px" height="18px" src={ASSETS_BASE_URL + "/img/customer-icons/map-marker-blue.svg"} />
                //                                 <span>{hospital.short_address}</span> {hospital.short_address ? " | " : ""}<span>{Distance} Km</span>
                //                             </p>
                //                     }
                //                 </div>
                //                 : <div className="fltr-lctn-dtls">
                //                     {
                //                         parent_url && parent_url.length ?
                //                             <a href={parent_url} onClick={
                //                                 (e) => {
                //                                     e.preventDefault()
                //                                     this.props.history.push(`/${parent_url}`)
                //                                 }
                //                             }>
                //                                 <p>
                //                                     <img className="fltr-loc-ico" width="12px" height="18px" src={ASSETS_BASE_URL + "/img/customer-icons/map-marker-blue.svg"} />
                //                                     <span className="fltr-loc-txt">{hospital.short_address}</span> {hospital.short_address ? " | " : ""}<span>{Distance} Km</span>
                //                                 </p>
                //                             </a>
                //                             :
                //                             <p>
                //                                 <img className="fltr-loc-ico" width="12px" height="18px" src={ASSETS_BASE_URL + "/img/customer-icons/map-marker-blue.svg"} />
                //                                 <span className="fltr-loc-txt">{hospital.short_address}</span> {hospital.short_address ? " | " : ""}<span>{Distance} Km</span>
                //                             </p>
                //                     }
                //                 </div>
                //         }
                //         <div className="row no-gutters" >
                //             <div className="col-12 mrt-10">
                //                 <a href={url ? `/${url}` : `/opd/doctor/${id}`} onClick={this.viewProfileClicked.bind(this, id, url, hospital.hospital_id || '')} title={display_name}>
                //                     <h2 style={{ fontSize: 16, paddingLeft: 8, paddingRight: 50 }} className="lab-fltr-dc-name fw-500">{display_name}</h2>
                //                 </a>
                //                 {
                //                     enabled_for_hospital_booking && discount && discount != 0 ?
                //                         <span className="filtr-offer ofr-ribbon fw-700">{discount}% Off</span> : ''
                //                 }
                //                 {
                //                     !discounted_price && !is_procedure && enabled_for_hospital_booking ?
                //                         <span className="filtr-offer ofr-ribbon free-ofr-ribbon fw-700">Free Consultation</span> : ''
                //                 }
                //             </div>
                //             <div className="col-7 mrt-10">
                //                 <div className="img-nd-dtls" style={{ alignItems: 'flex-start' }} >
                //                     <div className="fltr-crd-img text-center" style={{ width: 60 }} >
                //                         <InitialsPicture name={name} has_image={!!thumbnail} className="initialsPicture-ds fltr-initialPicture-ds"><img className="fltr-usr-image img-round" src={thumbnail} alt={display_name} title={display_name} /></InitialsPicture>
                //                         {is_license_verified && enabled_for_online_booking ? <span className="fltr-rtng">Verified</span> : ''}
                //                         {/* <span className="fltr-sub-rtng">4.5 <img src="/assets/img/customer-icons/star.svg" /></span> */}
                //                         {
                //                             enabled_for_online_booking ? '' : <button onClick={(e) => this.claimButtonClick(e)} className="fltr-bkng-btn claim-btn text-center" style={{ marginTop: 10 }}>Claim this profile</button>
                //                         }
                //                     </div>
                //                     <div className="crd-dctr-dtls">
                //                         <h3 className="fw-500">{this.getQualificationStr(general_specialization || [])}</h3>
                //                         {
                //                             this.props.details.qualifications && this.props.details.qualifications.length ?
                //                                 <div style={{ marginTop: 2, height: 16 }}>
                //                                     {
                //                                         this.props.details.qualifications.filter(x => x.qualification.length <= 6).map((qualification, i) => {
                //                                             if (i <= 1) {
                //                                                 return <h3 className="fw-500 inline-head" id={`inline-head-${i}`} key={i}>{qualification.qualification}</h3>
                //                                             }
                //                                         })
                //                                     }
                //                                 </div> : ''
                //                         }
                //                         {
                //                             experience_years ? <h3 className="fw-500">{experience_years} Years of Experience</h3> : ""
                //                         }
                //                     </div>
                //                 </div>
                //             </div>
                //             <div className="col-5 mrt-10 text-right" style={{ paddingLeft: 8 }} >
                //                 {
                //                     enabled_for_hospital_booking ?
                //                         <p className="fltr-prices" style={{ marginTop: 4 }}>
                //                             &#x20B9; {is_procedure ? finalProcedureDealPrice : discounted_price}
                //                             {
                //                                 is_procedure
                //                                     ? finalProcedureMrp != finalProcedureDealPrice ? <span className="fltr-cut-price">&#x20B9; {finalProcedureMrp}</span> : ""
                //                                     : mrp != discounted_price ? <span className="fltr-cut-price">&#x20B9; {mrp}</span> : ""
                //                             }
                //                         </p>
                //                         : is_procedure ?
                //                             <p className="fltr-prices" style={{ marginTop: 4 }}>
                //                                 &#x20B9;{finalProcedureMrp}
                //                             </p>
                //                             : mrp && mrp != 0 ?
                //                                 <p className="fltr-prices" style={{ marginTop: 4 }}>
                //                                     &#x20B9;{mrp}
                //                                 </p> : ''
                //                 }

                //                 {/* code for new pricing UI (exclusive docprime price) */}
                //                 {/* {
                //                     enabled_for_hospital_booking ?
                //                         <div className="dp-price-dtls-div mrb-10">
                //                             {
                //                                 is_procedure
                //                                     ? finalProcedureMrp != finalProcedureDealPrice ?
                //                                         <p className="fw-500 dp-price">Doctor fee : &#x20B9; {finalProcedureMrp}</p> : ''
                //                                     : mrp != discounted_price ? <p className="fw-500 dp-price">Doctor fee : &#x20B9; {mrp}</p> : ''
                //                             }
                //                             <p className="fw-500 exclsv-price">Docprime fee : &#x20B9; {is_procedure ? finalProcedureDealPrice : discounted_price}</p>
                //                         </div>
                //                         :
                //                         is_procedure ?
                //                             <div className="dp-price-dtls-div mrb-10">
                //                                 <p className="fw-500 dp-price">Doctor fee : &#x20B9; {finalProcedureMrp}</p>
                //                             </div>
                //                             : mrp ?
                //                                 <div className="dp-price-dtls-div mrb-10">
                //                                     <p className="fw-500 dp-price">Doctor fee : &#x20B9; {mrp}</p>
                //                                 </div> : ''
                //                 } */}

                //                 {
                //                     deal_price != discounted_price && enabled_for_hospital_booking ? <div className="signup-off-container">
                //                         <span className="signup-off-doc-green" style={{ fontSize: 12 }} >Includes coupon discount</span>
                //                     </div> : ''
                //                 }
                //             </div>
                //             <div className="col-12 mrt-10">
                //                 {
                //                     enabled_for_hospital_booking ?
                //                         <div className="row">
                //                             <div className="col-6">
                //                                 <a href={url} onClick={(e) => e.preventDefault()}>
                //                                     <button className="fltr-cntct-btn btn-pdng" onClick={this.viewProfileClicked.bind(this, id, url, hospital.hospital_id || '')}>View Profile</button>
                //                                 </a>
                //                             </div>
                //                             <div className="col-6">
                //                                 <button onClick={this.bookNowClicked.bind(this, id, url, hospital.hospital_id || '')} className="fltr-bkng-btn btn-pdng" >Book Now</button>
                //                             </div>
                //                         </div>
                //                         : <div className="row">
                //                             <div className="col-6"></div>
                //                             <div className="col-6">
                //                                 <button onClick={this.viewProfileClicked.bind(this, id, url, hospital.hospital_id || '')} className="fltr-cntct-btn btn-pdng" >Contact
                //                             </button>
                //                             </div>
                //                         </div>
                //                 }
                //             </div>
                //         </div>
                //         {
                //             false && hospitals[0] && hospitals[0].procedure_categories && hospitals[0].procedure_categories.length ?
                //                 <div className="procedure-checkboxes">
                //                     <div className="dtl-cnslt-fee pb-list cnslt-fee-style">
                //                         <div className="clearfix">
                //                             {
                //                                 enabled_for_hospital_booking ?
                //                                     <span className="test-price txt-ornage">₹ {discounted_price}<span className="test-mrp">₹ {mrp}</span></span>
                //                                     :
                //                                     <span className="test-price txt-ornage">₹ {mrp}</span>
                //                             }
                //                             <span className="fw-500 test-name-item">Consultation Fee</span>
                //                         </div>
                //                     </div>
                //                     <h4 style={{ fontSize: '14px' }} className="procedure-out-heading-font">Treatment(s) <span>{this.props.selectedCriterias.filter(x => x.type == 'procedures_category').length > 0 ? ` in ${this.props.selectedCriterias.filter(x => x.type == 'procedures_category').map(x => x.name).join(' | ')}` : 'Selected'} </span></h4>
                //                     <div className="insurance-checkboxes">
                //                         <ul className="procedure-list">
                //                             {
                //                                 hospitals[0].procedure_categories.map((category) => {
                //                                     return category.procedures.filter(x => x.is_selected).map((procedure, i) => {
                //                                         return <li key={i}>
                //                                             <label className="procedure-check ck-bx" htmlFor={`${procedure.procedure.id}_doc_${id}`}>{procedure.procedure.name}
                //                                                 <input type="checkbox" checked={true} className="proce-input" id={`${procedure.procedure.id}_doc_${id}`} name="fruit-1" value="" onChange={() => this.setState({ vieMoreProcedures: true })} />
                //                                                 <span className="checkmark">
                //                                                 </span>
                //                                             </label>
                //                                             {/* <div>
                //                                                 <input type="checkbox" checked={true} className="ins-chk-bx" id={procedure.procedure.id} name="fruit-1" value="" onChange={() => this.setState({ vieMoreProcedures: true })} />
                //                                                 <label htmlFor={procedure.procedure.id}>{procedure.procedure.name}</label>
                //                                             </div> */}
                //                                             {
                //                                                 enabled_for_hospital_booking ?
                //                                                     <p className="pr-prices">₹ {procedure.deal_price}<span className="pr-cut-price">₹ {procedure.mrp}</span></p>
                //                                                     :
                //                                                     <p className="pr-prices">₹ {procedure.mrp}</p>
                //                                             }
                //                                         </li>
                //                                     })
                //                                 })
                //                             }
                //                             {
                //                                 this.state.errorMessage ?
                //                                     <p>Please Select at least one Procedure</p>
                //                                     : ''
                //                             }
                //                             {
                //                                 unselectedCount + selectedCount >= 1
                //                                     ? this.state.vieMoreProcedures
                //                                         ? <ProcedurePopup toggle={this.toggle.bind(this, 'vieMoreProcedures')} details={this.props} doctor_id={this.props.details.id} data={hospitals[0]} hospitalEnable={enabled_for_hospital_booking} />
                //                                         : unselectedCount + selectedCount != selectedCount ? <button className="pr-plus-add-btn" onClick={() => this.setState({ vieMoreProcedures: true })}>
                //                                             + {unselectedCount} more
                //                             </button> : ''
                //                                     : ''
                //                             }
                //                         </ul>
                //                     </div>
                //                 </div>
                //                 : ''
                //         }
                //     </div>
                //     <div className="filtr-card-footer">
                //         <div>
                //             <img src={ASSETS_BASE_URL + "/img/customer-icons/home.svg"} />
                //             <h3 className="mrb-0">{hospital.hospital_name}
                //                 {
                //                     hospital_count > 1 ?
                //                         <span> &amp; {hospital_count - 1} More </span> : ''
                //                 }
                //             </h3>
                //         </div>
                //         <div className="text-right">
                //             <img src={ASSETS_BASE_URL + "/img/customer-icons/clock-black.svg"} />
                //             <p>
                //                 <span>{Object.keys(hospital.timings).length > 0 ? hospital.timings[Object.keys(hospital.timings)[0]][0] : ""}</span>
                //             </p>
                //         </div>
                //     </div>
                // </div>
                ;
            } else {
                return "";
            }
        }
    }]);

    return DoctorProfileCard;
}(_react2.default.Component);

exports.default = DoctorProfileCard;

/***/ }),

/***/ "./dev/js/components/opd/commons/doctorResultCard/index.js":
/*!*****************************************************************!*\
  !*** ./dev/js/components/opd/commons/doctorResultCard/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DoctorResultCard = __webpack_require__(/*! ./DoctorResultCard.js */ "./dev/js/components/opd/commons/doctorResultCard/DoctorResultCard.js");

var _DoctorResultCard2 = _interopRequireDefault(_DoctorResultCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DoctorResultCard2.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvY29tbW9ucy9Qb3BVcC9Qb3BVcC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvY29tbW9ucy9Qb3BVcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvY29tbW9ucy9kb2N0b3JSZXN1bHRDYXJkL0RvY3RvclJlc3VsdENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL2NvbW1vbnMvZG9jdG9yUmVzdWx0Q2FyZC9pbmRleC5qcyJdLCJuYW1lcyI6WyJQb3BVcFZpZXciLCJwcm9wcyIsInN0YXRlIiwiZXJyb3JNZXNzYWdlIiwicHJvY2VkdXJlIiwic2VsZWN0ZWRQcm9jZWR1cmVzIiwicHJvY2VkdXJlcyIsImRhdGEiLCJwcm9jZWR1cmVfY2F0ZWdvcmllcyIsIm1hcCIsImNhdGVnb3J5IiwiZmlsdGVyIiwieCIsImlzX3NlbGVjdGVkIiwiaWQiLCJjb25jYXQiLCJwaWRzIiwiZGV0YWlscyIsImNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzIiwidHlwZSIsImluZGV4T2YiLCJzZXRTdGF0ZSIsImZldGNoUmVzdWx0cyIsImxlbmd0aCIsInNvcnQiLCJldmVyeSIsInZhbHVlIiwiaW5kZXgiLCJ0b2dnbGUiLCJzcGxpY2UiLCJwdXNoIiwic2V0VGltZW91dCIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJBU1NFVFNfQkFTRV9VUkwiLCJoZWFkaW5nIiwia2V5IiwibmFtZSIsImkiLCJ0b2dnbGVEYXRhIiwiYmluZCIsImhvc3BpdGFsRW5hYmxlIiwiZGVhbF9wcmljZSIsIm1ycCIsInRvZ2dsZUxheW91dCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUG9wVXAiLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJEb2N0b3JQcm9maWxlQ2FyZCIsInNzckZsYWciLCJ1cmwiLCJob3NwaXRhbF9pZCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJHVE0iLCJnZXRVc2VySWQiLCJzZW5kRXZlbnQiLCJ0cmFja2luZ0V2ZW50c0Jvb2tOb3ciLCJjYXRlZ29yeV9pZHMiLCJwcm9jZWR1cmVfaWRzIiwiY2xlYXJWaXBTZWxlY3RlZFBsYW4iLCJjdHJsS2V5IiwibWV0YUtleSIsInByZXZlbnREZWZhdWx0IiwiaGlzdG9yeSIsInNsb3QiLCJ0aW1lIiwic2VsZWN0T3BkVGltZVNMb3QiLCJpc05vbkJvb2thYmxlUG9wdXAiLCJub25Cb29rYWJsZURvY0RhdGEiLCJzYXZlUHJvZmlsZVByb2NlZHVyZXMiLCJEaXN0YW5jZSIsImRpc3RhbmNlIiwiTWF0aCIsInJvdW5kIiwidG9GaXhlZCIsImpvaW4iLCJjb25kaXRpb25faWRzIiwic3BlY2lhbGl6YXRpb25faWRzIiwicmFuayIsImNvdW50IiwicXVhbGlmaWNhdGlvblNwZWNpYWxpemF0aW9uIiwid2hpY2giLCJzYXZlQ29tbW9uUHJvY2VkdXJlcyIsIm1lcmdlT1BEU3RhdGUiLCJyZXNldFByb2NlZHVyZVVSbCIsInBhcnNlZCIsInBhcnNlIiwibG9jYXRpb24iLCJzZWFyY2giLCJleHBlcmllbmNlX3llYXJzIiwiZ2VuZGVyIiwiaG9zcGl0YWxzIiwiaG9zcGl0YWxfY291bnQiLCJxdWFsaWZpY2F0aW9ucyIsInRodW1ibmFpbCIsImV4cGVyaWVuY2VzIiwiZ2VuZXJhbF9zcGVjaWFsaXphdGlvbiIsImlzX2xpdmUiLCJkaXNwbGF5X25hbWUiLCJpc19saWNlbnNlX3ZlcmlmaWVkIiwiaXNfZ29sZCIsIm5ld19zY2hlbWEiLCJlbmFibGVkX2Zvcl9vbmxpbmVfYm9va2luZyIsImRpc2NvdW50ZWRfcHJpY2UiLCJwYXJlbnRfdXJsIiwiYXZlcmFnZV9yYXRpbmciLCJyYXRpbmdfY291bnQiLCJnb29nbGVfcmF0aW5nIiwiZW5hYmxlZF9mb3JfY29kIiwiY29kX2RlYWxfcHJpY2UiLCJlbmFibGVkX2Zvcl9ob3NwaXRhbF9ib29raW5nIiwiZW5hYmxlZF9mb3JfcHJlcGFpZF9ib29raW5nIiwiaG9zcGl0YWwiLCJleHBTdHIiLCJleHAiLCJkaXNjb3VudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpc19wcm9jZWR1cmUiLCJzZWxlY3RlZENvdW50IiwidW5zZWxlY3RlZENvdW50IiwiZmluYWxQcm9jZWR1cmVEZWFsUHJpY2UiLCJmaW5hbFByb2NlZHVyZU1ycCIsImVuYWJsZWRfZm9yX3ByZXBhaWQiLCJpc19pbnN1cmFuY2VfYXBwbGljYWJsZSIsImlzX2luc3VyYW5jZV9jb3ZlcmVkIiwiaXNfdXNlcl9pbnN1cmVkIiwiaW5zdXJhbmNlX3RocmVzaG9sZF9hbW91bnQiLCJvZmZQZXJjZW50IiwicGFyc2VJbnQiLCJpc192aXBfYXBwbGljYWJsZSIsImlzX3ZpcF9tZW1iZXIiLCJjb3Zlcl91bmRlcl92aXAiLCJhdmdHb29nbGVSYXRpbmciLCJnb29nbGVSYXRpbmdDb3VudCIsImF2Z19yYXRpbmciLCJpc19pbnN1cmFuY2VfYnV5X2FibGUiLCJpbnN1cmFuY2VfbGltaXRfbWVzc2FnZSIsInF1YWxpZmljYXRpb25zQXJyYXkiLCJxdWFsaWZpY2F0aW9uIiwiaXNfbGFib3BkX2VuYWJsZV9mb3JfdmlwIiwiaXNfZW5hYmxlX2Zvcl92aXAiLCJpc19sYWJvcGRfZW5hYmxlX2Zvcl9nb2xkIiwiaG9zcF9pc19nb2xkIiwiZnJvbUdvbGRWaXAiLCJpc19nb2xkX21lbWJlciIsImNvdmVyZWRfdW5kZXJfdmlwIiwidmlwIiwidmlwX2Ftb3VudCIsInZpcF9jb252ZW5pZW5jZV9hbW91bnQiLCJ2aXBfZ29sZF9wcmljZSIsInNob3dfY29tbW9uX3ByaWNlcyIsImlzSG9zcGl0YWxQYWdlIiwiX19odG1sIiwicGFkZGluZ0JvdHRvbSIsInZpZXdQcm9maWxlQ2xpY2tlZCIsIndpZHRoIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJnZXRRdWFsaWZpY2F0aW9uU3RyIiwibWFyZ2luQm90dG9tIiwidGltaW5ncyIsIk9iamVjdCIsImtleXMiLCJtYXJnaW5MZWZ0IiwicGFkZGluZ1RvcCIsImdvbGRDbGlja2VkIiwiYm9va05vd0NsaWNrZWQiLCJjb2xvciIsImhvc3BpdGFsX25hbWUiLCJwYWRkaW5nTGVmdCIsInNob3J0X2FkZHJlc3MiLCJEb2N0b3JSZXN1bHRDYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFHcUJBLFM7OztBQUVwQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNaQSxLQURZOztBQUVsQixRQUFLQyxLQUFMLEdBQWE7QUFDWkMsaUJBQWMsS0FERjtBQUVaQyxjQUFXLEVBRkM7QUFHWkMsdUJBQW9CO0FBSFIsR0FBYjtBQUZrQjtBQU9sQjs7OztzQ0FFbUI7O0FBRW5CLE9BQUlBLHFCQUFxQixFQUF6QjtBQUFBLE9BQTZCQyxhQUFhLEVBQTFDO0FBQ0EsUUFBS0wsS0FBTCxDQUFXTSxJQUFYLENBQWdCQyxvQkFBaEIsQ0FBcUNDLEdBQXJDLENBQXlDLFVBQUNDLFFBQUQsRUFBYztBQUN0REosaUJBQWFJLFNBQVNKLFVBQVQsQ0FBb0JLLE1BQXBCLENBQTJCO0FBQUEsWUFBS0MsRUFBRUMsV0FBUDtBQUFBLEtBQTNCLEVBQStDSixHQUEvQyxDQUFtRDtBQUFBLFlBQUtHLEVBQUVSLFNBQUYsQ0FBWVUsRUFBakI7QUFBQSxLQUFuRCxDQUFiO0FBQ0FULHlCQUFxQkEsbUJBQW1CVSxNQUFuQixDQUEwQlQsVUFBMUIsQ0FBckI7QUFDQSxJQUhEOztBQUtBLE9BQUlVLE9BQU8sS0FBS2YsS0FBTCxDQUFXZ0IsT0FBWCxDQUFtQkMsdUJBQW5CLENBQTJDUCxNQUEzQyxDQUFrRDtBQUFBLFdBQUtDLEVBQUVPLElBQUYsSUFBVSxZQUFWLElBQTBCZCxtQkFBbUJlLE9BQW5CLENBQTJCUixFQUFFRSxFQUE3QixLQUFvQyxDQUFDLENBQXBFO0FBQUEsSUFBbEQsRUFBeUhMLEdBQXpILENBQTZIO0FBQUEsV0FBS0csRUFBRUUsRUFBUDtBQUFBLElBQTdILENBQVg7O0FBRUFULHdCQUFxQkEsbUJBQW1C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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFlSjtBQTRlSCxhQW5qQkQsTUFtakJPO0FBQ0gsdUJBQU8sRUFBUDtBQUNIO0FBQ0o7Ozs7RUExdUIyQjVCLGdCQUFNQyxTOztrQkE4dUJ2QkksaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzN2QmY7Ozs7OztrQkFFZTZILDBCIiwiZmlsZSI6IjIyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcFVwVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0ZXJyb3JNZXNzYWdlOiBmYWxzZSxcblx0XHRcdHByb2NlZHVyZTogW10sXG5cdFx0XHRzZWxlY3RlZFByb2NlZHVyZXM6IFtdXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cblx0XHRsZXQgc2VsZWN0ZWRQcm9jZWR1cmVzID0gW10sIHByb2NlZHVyZXMgPSBbXVxuXHRcdHRoaXMucHJvcHMuZGF0YS5wcm9jZWR1cmVfY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiB7XG5cdFx0XHRwcm9jZWR1cmVzID0gY2F0ZWdvcnkucHJvY2VkdXJlcy5maWx0ZXIoeCA9PiB4LmlzX3NlbGVjdGVkKS5tYXAoeCA9PiB4LnByb2NlZHVyZS5pZClcblx0XHRcdHNlbGVjdGVkUHJvY2VkdXJlcyA9IHNlbGVjdGVkUHJvY2VkdXJlcy5jb25jYXQocHJvY2VkdXJlcylcblx0XHR9KVxuXG5cdFx0bGV0IHBpZHMgPSB0aGlzLnByb3BzLmRldGFpbHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMuZmlsdGVyKHggPT4geC50eXBlID09ICdwcm9jZWR1cmVzJyAmJiBzZWxlY3RlZFByb2NlZHVyZXMuaW5kZXhPZih4LmlkKSA9PSAtMSkubWFwKHggPT4geC5pZClcblxuXHRcdHNlbGVjdGVkUHJvY2VkdXJlcyA9IHNlbGVjdGVkUHJvY2VkdXJlcy5jb25jYXQocGlkcylcblxuXHRcdHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFByb2NlZHVyZXM6IHNlbGVjdGVkUHJvY2VkdXJlcywgcHJvY2VkdXJlOiBbXS5jb25jYXQoc2VsZWN0ZWRQcm9jZWR1cmVzKSB9KVxuXHR9XG5cblxuXHR0b2dnbGVMYXlvdXQoKSB7XG5cblx0XHRsZXQgZmV0Y2hSZXN1bHRzID0gZmFsc2Vcblx0XHRsZXQgc2VsZWN0ZWRQcm9jZWR1cmVzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFByb2NlZHVyZXNcblx0XHRsZXQgcHJvY2VkdXJlID0gdGhpcy5zdGF0ZS5wcm9jZWR1cmVcblx0XHRpZiAoc2VsZWN0ZWRQcm9jZWR1cmVzLmxlbmd0aCA9PT0gcHJvY2VkdXJlLmxlbmd0aCAmJiBzZWxlY3RlZFByb2NlZHVyZXMuc29ydCgpLmV2ZXJ5KGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHsgcmV0dXJuIHZhbHVlID09PSBwcm9jZWR1cmUuc29ydCgpW2luZGV4XSB9KSkge1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdGZldGNoUmVzdWx0cyA9IHRydWVcblx0XHR9XG5cdFx0Ly9zZWxlY3RlZFByb2NlZHVyZXMgPSBzZWxlY3RlZFByb2NlZHVyZXNcblx0XHR0aGlzLnByb3BzLnRvZ2dsZShmZXRjaFJlc3VsdHMsIHRoaXMuc3RhdGUuc2VsZWN0ZWRQcm9jZWR1cmVzKVxuXG5cdH1cblxuXHR0b2dnbGVEYXRhKHByb2NlZHVyZSkge1xuXHRcdGxldCBzZWxlY3RlZFByb2NlZHVyZXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUHJvY2VkdXJlc1xuXHRcdGlmIChzZWxlY3RlZFByb2NlZHVyZXMubGVuZ3RoID4gMSB8fCAoc2VsZWN0ZWRQcm9jZWR1cmVzLmxlbmd0aCA9PSAxICYmIHNlbGVjdGVkUHJvY2VkdXJlcy5pbmRleE9mKHByb2NlZHVyZS5wcm9jZWR1cmUuaWQpID09IC0xKSkge1xuXG5cdFx0XHRpZiAoc2VsZWN0ZWRQcm9jZWR1cmVzLmluZGV4T2YocHJvY2VkdXJlLnByb2NlZHVyZS5pZCkgIT0gLTEpIHtcblx0XHRcdFx0c2VsZWN0ZWRQcm9jZWR1cmVzLnNwbGljZShzZWxlY3RlZFByb2NlZHVyZXMuaW5kZXhPZihwcm9jZWR1cmUucHJvY2VkdXJlLmlkKSwgMSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNlbGVjdGVkUHJvY2VkdXJlcy5wdXNoKHByb2NlZHVyZS5wcm9jZWR1cmUuaWQpXG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRQcm9jZWR1cmVzOiBzZWxlY3RlZFByb2NlZHVyZXMgfSlcblxuXG5cdFx0fSBlbHNlIHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIFNlbGVjdCBhdCBsZWFzdCBvbmUgUHJvY2VkdXJlXCIgfSlcblx0XHRcdH0sIDUwMClcblx0XHRcdHJldHVybiBudWxsXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLW92ZXJsYXlcIiBvbkNsaWNrPXt0aGlzLnByb3BzLnRvZ2dsZX0+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IGNhbmNlbC1hcHBvaW50bWVudC1kaXYgY2FuY2VsLXBvcHVwXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3AtdG9wLWhlYWRpbmdcIj5cblx0XHRcdFx0XHRcdFNlbGVjdCBUcmVhdG1lbnQocylcblx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvY2xvc2UtYmxhY2suc3ZnXCJ9IG9uQ2xpY2s9e3RoaXMucHJvcHMudG9nZ2xlfSAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWhlYWRlciBhY3Rpb24tc2NyZWVuLWhlYWRlciBwb3AtcGFkZGluZ1wiPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwIGNhbmNlbC1hcHBvaW50bWVudC1oZWFkXCI+e3RoaXMucHJvcHMuaGVhZGluZ308L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXJtcy1jb25kaXRpb24tZGl2IG9uc2NyZWVuLXNjcm9sbFwiPlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmRhdGEucHJvY2VkdXJlX2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwga2V5KSA9PiB7XG5cblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwicG9wLXVuZGVybGluZVwiIGtleT17a2V5fT48aDQ+e2NhdGVnb3J5Lm5hbWV9PC9oND5cblxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjYXRlZ29yeS5wcm9jZWR1cmVzLm1hcCgocHJvY2VkdXJlLCBpKSA9PiB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPGxpIGtleT17YCR7aX1fYWB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInByb2NlZHVyZS1jaGVjayBjay1ieFwiIGh0bWxGb3I9e2Ake3Byb2NlZHVyZS5wcm9jZWR1cmUuaWR9X2B9Pntwcm9jZWR1cmUucHJvY2VkdXJlLm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt0aGlzLnN0YXRlLnNlbGVjdGVkUHJvY2VkdXJlcy5pbmRleE9mKHByb2NlZHVyZS5wcm9jZWR1cmUuaWQpID09IC0xID8gZmFsc2UgOiB0cnVlfSBpZD17YCR7cHJvY2VkdXJlLnByb2NlZHVyZS5pZH1fYH0gbmFtZT1cImZydWl0LTJcIiB2YWx1ZT1cIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMudG9nZ2xlRGF0YS5iaW5kKHRoaXMsIHByb2NlZHVyZSl9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qIDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJpbnMtY2hrLWJ4XCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5zZWxlY3RlZFByb2NlZHVyZXMuaW5kZXhPZihwcm9jZWR1cmUucHJvY2VkdXJlLmlkKSA9PSAtMSA/IGZhbHNlIDogdHJ1ZX0gaWQ9e2Ake3Byb2NlZHVyZS5wcm9jZWR1cmUuaWR9X2B9IG5hbWU9XCJmcnVpdC0yXCIgdmFsdWU9XCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZURhdGEuYmluZCh0aGlzLCBwcm9jZWR1cmUpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPjxsYWJlbCBodG1sRm9yPXtgJHtwcm9jZWR1cmUucHJvY2VkdXJlLmlkfV9gfT57cHJvY2VkdXJlLnByb2NlZHVyZS5uYW1lfTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4gKi99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaG9zcGl0YWxFbmFibGUgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInByLXByaWNlc1wiPuKCuSB7cHJvY2VkdXJlLmRlYWxfcHJpY2V9PHNwYW4gY2xhc3NOYW1lPVwicHItY3V0LXByaWNlXCI+4oK5IHtwcm9jZWR1cmUubXJwfTwvc3Bhbj48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInByLXByaWNlc1wiPuKCuSB7cHJvY2VkdXJlLm1ycH08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2Pilcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSA/XG5cdFx0XHRcdFx0XHRcdDxwPlBsZWFzZSBTZWxlY3QgYXQgbGVhc3Qgb25lIFByb2NlZHVyZTwvcD5cblx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2NlZHVyZXMtYnRuLXBvcFwiPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJmdy01MDBcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUxheW91dC5iaW5kKHRoaXMpfT5Eb25lPC9idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG4iLCJpbXBvcnQgUG9wVXAgZnJvbSAnLi9Qb3BVcCdcblxuZXhwb3J0IGRlZmF1bHQgUG9wVXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBJbml0aWFsc1BpY3R1cmUgZnJvbSAnLi4vLi4vLi4vY29tbW9ucy9pbml0aWFsc1BpY3R1cmUnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJztcbmltcG9ydCBQcm9jZWR1cmVQb3B1cCBmcm9tICcuLi9Qb3BVcCdcbmltcG9ydCBSYXRpbmdTdGFycyBmcm9tICcuLi8uLi8uLi9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9SYXRpbmdTdGFycyc7XG5pbXBvcnQgeyBBc3NlcnRpb25FcnJvciB9IGZyb20gJ2Fzc2VydCc7XG5pbXBvcnQgQ29tbW9uVmlwR29sZEJhZGdlIGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvY29tbW9uVmlwR29sZEJhZGdlLmpzJ1xuaW1wb3J0IENvbW1vblZpcEdvbGROb25Mb2dpbkJhZGdlIGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvY29tbW9uVmlwR29sZE5vbkxvZ2luQmFkZ2UuanMnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG5cbmNsYXNzIERvY3RvclByb2ZpbGVDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogZmFsc2UsXG4gICAgICAgICAgICBzc3JGbGFnOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8vIGlmICh3aW5kb3cpIHtcbiAgICAgICAgLy8gICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICAvLyB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzc3JGbGFnOiB0cnVlIH0pXG4gICAgfVxuXG4gICAgdmlld1Byb2ZpbGVDbGlja2VkKGlkLCB1cmwsIGhvc3BpdGFsX2lkLCBlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ09wZFNlYXJjaFZpZXdQcm9maWxlQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ29wZC1zZWFyY2gtdmlldy1wcm9maWxlLWNsaWNrZWQnLCAnc2VsZWN0ZWRJZCc6IGlkXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICBsZXQgeyBjYXRlZ29yeV9pZHMsIHByb2NlZHVyZV9pZHMgfSA9IHRoaXMudHJhY2tpbmdFdmVudHNCb29rTm93KGlkKVxuICAgICAgICB0aGlzLnByb3BzLmNsZWFyVmlwU2VsZWN0ZWRQbGFuKClcbiAgICAgICAgaWYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpIHtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5X2lkcy5sZW5ndGggfHwgcHJvY2VkdXJlX2lkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3VybH0/aG9zcGl0YWxfaWQ9JHtob3NwaXRhbF9pZH0maXNfcHJvY2VkdXJlPXRydWUmY2F0ZWdvcnlfaWRzPSR7Y2F0ZWdvcnlfaWRzfSZwcm9jZWR1cmVfaWRzPSR7cHJvY2VkdXJlX2lkc30maGlkZV9zZWFyY2hfZGF0YT10cnVlYClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgLyR7dXJsfT9ob3NwaXRhbF9pZD0ke2hvc3BpdGFsX2lkfSZoaWRlX3NlYXJjaF9kYXRhPXRydWVgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5X2lkcy5sZW5ndGggfHwgcHJvY2VkdXJlX2lkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9vcGQvZG9jdG9yLyR7aWR9P2hvc3BpdGFsX2lkPSR7aG9zcGl0YWxfaWR9JmlzX3Byb2NlZHVyZT10cnVlJmNhdGVnb3J5X2lkcz0ke2NhdGVnb3J5X2lkc30mcHJvY2VkdXJlX2lkcz0ke3Byb2NlZHVyZV9pZHN9JmhpZGVfc2VhcmNoX2RhdGE9dHJ1ZWApXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9vcGQvZG9jdG9yLyR7aWR9P2hvc3BpdGFsX2lkPSR7aG9zcGl0YWxfaWR9JmhpZGVfc2VhcmNoX2RhdGE9dHJ1ZWApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYm9va05vd0NsaWNrZWQoaWQsIHVybCwgaG9zcGl0YWxfaWQsIGUpIHtcbiAgICAgICAgLy9hbHdheXMgY2xlYXIgc2VsZWN0ZWQgdGltZSBhdCBkb2N0b3IgcHJvZmlsZVxuICAgICAgICBsZXQgc2xvdCA9IHsgdGltZToge30gfVxuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdE9wZFRpbWVTTG90KHNsb3QsIGZhbHNlKVxuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdPcGRTZWFyY2hCb29rTm93Q2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ29wZC1ib29rLW5vdy1jbGlja2VkJywgJ3NlbGVjdGVkSWQnOiBpZCwgJ2lzTm9uQm9va2FibGVQb3B1cCc6IHRoaXMucHJvcHMuaXNOb25Cb29rYWJsZVBvcHVwID8gdGhpcy5wcm9wcy5pc05vbkJvb2thYmxlUG9wdXAgOiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNOb25Cb29rYWJsZVBvcHVwKSB7XG4gICAgICAgICAgICBsZXQgbm9uQm9va2FibGVEb2NEYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTm9uQm9va2FibGVCb29rTm93UG9wdXBDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbm9uLWJvb2thYmxlLWJvb2stbm93LXBvcHVwLWNsaWNrZWQnLCAnc2VsZWN0ZWRJZCc6IGlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogbm9uQm9va2FibGVEb2NEYXRhIH0pXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHsgcHJvY2VkdXJlX2lkcyB9ID0gdGhpcy50cmFja2luZ0V2ZW50c0Jvb2tOb3coaWQpXG4gICAgICAgIHRoaXMucHJvcHMuc2F2ZVByb2ZpbGVQcm9jZWR1cmVzKCcnLCAnJywgcHJvY2VkdXJlX2lkcywgdHJ1ZSlcbiAgICAgICAgdGhpcy5wcm9wcy5jbGVhclZpcFNlbGVjdGVkUGxhbigpXG4gICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHt1cmx9L2Jvb2tpbmc/ZG9jdG9yX2lkPSR7aWR9Jmhvc3BpdGFsX2lkPSR7aG9zcGl0YWxfaWR9YClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvb3BkL2RvY3Rvci8ke2lkfS8ke2hvc3BpdGFsX2lkfS9ib29rZGV0YWlsc2ApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFja2luZ0V2ZW50c0Jvb2tOb3coaWQpIHtcbiAgICAgICAgbGV0IERpc3RhbmNlID0gJydcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5kZXRhaWxzICYmIHRoaXMucHJvcHMuZGV0YWlscy5kaXN0YW5jZSkge1xuICAgICAgICAgICAgRGlzdGFuY2UgPSAoTWF0aC5yb3VuZCh0aGlzLnByb3BzLmRldGFpbHMuZGlzdGFuY2UgKiAxMCkgLyAxMCkudG9GaXhlZCgxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb2N0b3JTZWxlY3RlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2RvY3Rvci1zZWxlY3RlZCcsICdzZWxlY3RlZElkJzogaWRcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KTtcblxuICAgICAgICBsZXQgY2F0ZWdvcnlfaWRzID0gdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gJ3Byb2NlZHVyZXNfY2F0ZWdvcnknKS5tYXAoeCA9PiB4LmlkKS5qb2luKCcsJylcbiAgICAgICAgbGV0IHByb2NlZHVyZV9pZHMgPSB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAncHJvY2VkdXJlcycpLm1hcCh4ID0+IHguaWQpLmpvaW4oJywnKVxuICAgICAgICBsZXQgY29uZGl0aW9uX2lkcyA9IHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMuZmlsdGVyKHggPT4geC50eXBlID09ICdjb25kaXRpb24nKS5tYXAoeCA9PiB4LmlkKS5qb2luKCcsJylcbiAgICAgICAgbGV0IHNwZWNpYWxpemF0aW9uX2lkcyA9IHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMuZmlsdGVyKHggPT4geC50eXBlID09ICdzcGVjaWFsaXR5JykubWFwKHggPT4geC5pZCkuam9pbignLCcpXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0RvY3RvclJhbmtJblNlYXJjaCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2RvY3Rvci1yYW5rLWluLXNlYXJjaCcsICdSYW5rJzogdGhpcy5wcm9wcy5yYW5rICsgMSwgJ0RvY3RvclNlYXJjaENvdW50JzogdGhpcy5wcm9wcy5jb3VudCwgJ3NwZWNpYWxpemF0aW9ucyc6IHNwZWNpYWxpemF0aW9uX2lkcywgJ2NvbmRpdGlvbnMnOiBjb25kaXRpb25faWRzLCAncHJvY2VkdXJlcyc6IHByb2NlZHVyZV9pZHMsICdwcm9jZWR1cmVfY2F0ZWdvcnknOiBjYXRlZ29yeV9pZHMsICdEaXN0YW5jZSc6IERpc3RhbmNlXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICByZXR1cm4gKHsgY2F0ZWdvcnlfaWRzLCBwcm9jZWR1cmVfaWRzIH0pXG5cbiAgICB9XG5cbiAgICBib29rTm93KGlkLCBlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9kb2N0b3Jwcm9maWxlLyR7aWR9L2F2YWlsYWJpbGl0eWApXG4gICAgfVxuXG4gICAgZ2V0UXVhbGlmaWNhdGlvblN0cihxdWFsaWZpY2F0aW9uU3BlY2lhbGl6YXRpb24pIHtcbiAgICAgICAgaWYgKHF1YWxpZmljYXRpb25TcGVjaWFsaXphdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBxdWFsaWZpY2F0aW9uU3BlY2lhbGl6YXRpb25bMF0ubmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXR1cm4gcXVhbGlmaWNhdGlvblNwZWNpYWxpemF0aW9uLnJlZHVjZSgoc3RyLCBjdXJyLCBpKSA9PiB7XG4gICAgICAgIC8vICAgICBzdHIgKz0gYCR7Y3Vyci5uYW1lfWBcbiAgICAgICAgLy8gICAgIGlmIChpIDwgcXVhbGlmaWNhdGlvblNwZWNpYWxpemF0aW9uLmxlbmd0aCAtIDEpIHN0ciArPSBgLCBgO1xuICAgICAgICAvLyAgICAgcmV0dXJuIHN0clxuICAgICAgICAvLyB9LCBcIlwiKVxuICAgIH1cblxuICAgIGNsYWltQnV0dG9uQ2xpY2soZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdDbGFpbUJ1dHRvbUNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjbGFpbS1idXR0b20tY2xpY2tlZCcsICdzZWxlY3RlZElkJzogdGhpcy5wcm9wcy5kZXRhaWxzLmlkXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2RvY3RvcnNpZ251cCcpO1xuICAgIH1cblxuICAgIHRvZ2dsZSh3aGljaCwgZmV0Y2hSZXN1bHRzID0gZmFsc2UsIHByb2NlZHVyZV9pZHMgPSBbXSkge1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbd2hpY2hdOiAhdGhpcy5zdGF0ZVt3aGljaF0gfSlcbiAgICAgICAgaWYgKGZldGNoUmVzdWx0cykge1xuICAgICAgICAgICAgaWYgKHByb2NlZHVyZV9pZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zYXZlQ29tbW9uUHJvY2VkdXJlcyhwcm9jZWR1cmVfaWRzKVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubWVyZ2VPUERTdGF0ZSgnJylcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlc2V0UHJvY2VkdXJlVVJsKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdvbGRDbGlja2VkKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnVmlwR29sZENsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICd2aXAtZ29sZC1jbGlja2VkJywgJ3NlbGVjdGVkSWQnOiB0aGlzLnByb3BzLmRldGFpbHMuaWRcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ZpcC1nb2xkLWRldGFpbHM/aXNfZ29sZD10cnVlJnNvdXJjZT1kb2Nnb2xkbGlzdGluZyZsZWFkX3NvdXJjZT1Eb2NwcmltZScpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IHsgaWQsIGV4cGVyaWVuY2VfeWVhcnMsIGdlbmRlciwgaG9zcGl0YWxzLCBob3NwaXRhbF9jb3VudCwgbmFtZSwgZGlzdGFuY2UsIHF1YWxpZmljYXRpb25zLCB0aHVtYm5haWwsIGV4cGVyaWVuY2VzLCBtcnAsIGRlYWxfcHJpY2UsIGdlbmVyYWxfc3BlY2lhbGl6YXRpb24sIGlzX2xpdmUsIGRpc3BsYXlfbmFtZSwgdXJsLCBpc19saWNlbnNlX3ZlcmlmaWVkLCBpc19nb2xkLCBuZXdfc2NoZW1hLCBlbmFibGVkX2Zvcl9vbmxpbmVfYm9va2luZywgZGlzY291bnRlZF9wcmljZSwgcGFyZW50X3VybCwgYXZlcmFnZV9yYXRpbmcsIHJhdGluZ19jb3VudCwgZ29vZ2xlX3JhdGluZywgZW5hYmxlZF9mb3JfY29kLCBjb2RfZGVhbF9wcmljZSB9ID0gdGhpcy5wcm9wcy5kZXRhaWxzXG5cbiAgICAgICAgbGV0IGVuYWJsZWRfZm9yX2hvc3BpdGFsX2Jvb2tpbmcgPSB0cnVlXG4gICAgICAgIGxldCBlbmFibGVkX2Zvcl9wcmVwYWlkX2Jvb2tpbmcgPSBmYWxzZVxuICAgICAgICBsZXQgaG9zcGl0YWwgPSAoaG9zcGl0YWxzICYmIGhvc3BpdGFscy5sZW5ndGgpID8gaG9zcGl0YWxzWzBdIDoge31cbiAgICAgICAgbGV0IGV4cFN0ciA9IFwiXCJcblxuICAgICAgICBpZiAoZXhwZXJpZW5jZXMgJiYgZXhwZXJpZW5jZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBleHBTdHIgKz0gXCJFWFAgLSBcIlxuICAgICAgICAgICAgZXhwZXJpZW5jZXMubWFwKChleHAsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBleHBTdHIgKz0gZXhwLmhvc3BpdGFsXG4gICAgICAgICAgICAgICAgaWYgKGkgPCBleHBlcmllbmNlcy5sZW5ndGggLSAxKSBleHBTdHIgKz0gJywgJztcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgRGlzdGFuY2UgPSAoTWF0aC5yb3VuZChkaXN0YW5jZSAqIDEwKSAvIDEwKS50b0ZpeGVkKDEpO1xuICAgICAgICBpZiAobXJwICE9IDAgJiYgZGlzY291bnRlZF9wcmljZSAhPSAwKSB7XG4gICAgICAgICAgICB2YXIgZGlzY291bnQgPSAxMDAgLSBNYXRoLnJvdW5kKChkaXNjb3VudGVkX3ByaWNlICogMTAwKSAvIG1ycCk7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKG5ld19zY2hlbWEpIHtcbiAgICAgICAgICAgICAgICBuZXdfc2NoZW1hID0gSlNPTi5zdHJpbmdpZnkobmV3X3NjaGVtYSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgbmV3X3NjaGVtYSA9IFwiXCJcbiAgICAgICAgfVxuICAgICAgICAvLyBsZXQgaXNfdmlwX2dvbGQgPSBmYWxzZVxuICAgICAgICBsZXQgaXNfcHJvY2VkdXJlID0gZmFsc2VcbiAgICAgICAgLy8gbGV0IGlzX2dvbGRfbWVtYmVyID1mYWxzZVxuICAgICAgICBpZiAoaG9zcGl0YWxzICYmIGhvc3BpdGFscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIGlzX3ZpcF9nb2xkID0gaG9zcGl0YWwuaG9zcF9pc19nb2xkIHx8IHBhcnNlZC5mcm9tR29sZFZpcFxuICAgICAgICAgICAgLy8gaXNfZ29sZF9tZW1iZXIgPSBob3NwaXRhbC5pc19nb2xkX21lbWJlclxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkQ291bnQgPSAwXG4gICAgICAgICAgICBsZXQgdW5zZWxlY3RlZENvdW50ID0gMFxuICAgICAgICAgICAgbGV0IGZpbmFsUHJvY2VkdXJlRGVhbFByaWNlID0gZGlzY291bnRlZF9wcmljZVxuICAgICAgICAgICAgbGV0IGZpbmFsUHJvY2VkdXJlTXJwID0gbXJwXG4gICAgICAgICAgICBob3NwaXRhbHNbMF0ucHJvY2VkdXJlX2NhdGVnb3JpZXMubWFwKCh4KSA9PiB7XG4gICAgICAgICAgICAgICAgaXNfcHJvY2VkdXJlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHgucHJvY2VkdXJlcy5maWx0ZXIoeCA9PiB4LmlzX3NlbGVjdGVkKS5tYXAoKHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmluYWxQcm9jZWR1cmVEZWFsUHJpY2UgKz0geC5kZWFsX3ByaWNlXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsUHJvY2VkdXJlTXJwICs9IHgubXJwXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ291bnQrK1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB1bnNlbGVjdGVkQ291bnQgKz0geC5wcm9jZWR1cmVzLmZpbHRlcih4ID0+ICF4LmlzX3NlbGVjdGVkKS5sZW5ndGhcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmIChpc19wcm9jZWR1cmUgJiYgZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoZmluYWxQcm9jZWR1cmVNcnAgIT0gMCAmJiBmaW5hbFByb2NlZHVyZURlYWxQcmljZSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc2NvdW50ID0gMTAwIC0gTWF0aC5yb3VuZCgoZmluYWxQcm9jZWR1cmVEZWFsUHJpY2UgKiAxMDApIC8gZmluYWxQcm9jZWR1cmVNcnApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZW5hYmxlZF9mb3JfaG9zcGl0YWxfYm9va2luZyA9IGhvc3BpdGFsc1swXS5lbmFibGVkX2Zvcl9vbmxpbmVfYm9va2luZ1xuICAgICAgICAgICAgZW5hYmxlZF9mb3JfcHJlcGFpZF9ib29raW5nID0gaG9zcGl0YWxzWzBdLmVuYWJsZWRfZm9yX3ByZXBhaWRcbiAgICAgICAgICAgIGlzX3Byb2NlZHVyZSA9IGZhbHNlXG5cbiAgICAgICAgICAgIGxldCBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSA9IGhvc3BpdGFsLmlzX2luc3VyYW5jZV9jb3ZlcmVkICYmIGhvc3BpdGFsLmlzX3VzZXJfaW5zdXJlZCAmJiBkZWFsX3ByaWNlIDw9IGhvc3BpdGFsLmluc3VyYW5jZV90aHJlc2hvbGRfYW1vdW50XG4gICAgICAgICAgICBsZXQgb2ZmUGVyY2VudCA9ICcnXG4gICAgICAgICAgICBpZiAobXJwICYmIChkaXNjb3VudGVkX3ByaWNlICE9IG51bGwpICYmIChkaXNjb3VudGVkX3ByaWNlIDwgbXJwKSAmJiBlbmFibGVkX2Zvcl9wcmVwYWlkX2Jvb2tpbmcpIHtcbiAgICAgICAgICAgICAgICBvZmZQZXJjZW50ID0gcGFyc2VJbnQoKChtcnAgLSBkaXNjb3VudGVkX3ByaWNlKSAvIG1ycCkgKiAxMDApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbmFibGVkX2Zvcl9jb2QgJiYgY29kX2RlYWxfcHJpY2UgIT0gbnVsbCAmJiBjb2RfZGVhbF9wcmljZSAhPSBtcnAgJiYgIWVuYWJsZWRfZm9yX3ByZXBhaWRfYm9va2luZykge1xuICAgICAgICAgICAgICAgIG9mZlBlcmNlbnQgPSBwYXJzZUludCgoKG1ycCAtIGNvZF9kZWFsX3ByaWNlKSAvIG1ycCkgKiAxMDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgaXNfdmlwX2FwcGxpY2FibGUgPSBob3NwaXRhbC5pc192aXBfbWVtYmVyICYmIGhvc3BpdGFsLmNvdmVyX3VuZGVyX3ZpcFxuICAgICAgICAgICAgLy8gbGV0IHZpcF9hbW91bnQgPSBob3NwaXRhbC52aXBfYW1vdW50ICsgaG9zcGl0YWwudmlwX2NvbnZlbmllbmNlX2Ftb3VudFxuICAgICAgICAgICAgLy8gbGV0IGlzX2VuYWJsZV9mb3JfdmlwID0gaG9zcGl0YWwuaXNfZW5hYmxlX2Zvcl92aXAgfHwgcGFyc2VkLmZyb21WaXBcbiAgICAgICAgICAgIGxldCBhdmdHb29nbGVSYXRpbmcgPSAnJ1xuICAgICAgICAgICAgbGV0IGdvb2dsZVJhdGluZ0NvdW50ID0gJydcbiAgICAgICAgICAgIGlmIChnb29nbGVfcmF0aW5nICYmIGdvb2dsZV9yYXRpbmcuYXZnX3JhdGluZyAmJiBnb29nbGVfcmF0aW5nLnJhdGluZ19jb3VudCkge1xuICAgICAgICAgICAgICAgIGF2Z0dvb2dsZVJhdGluZyA9IGdvb2dsZV9yYXRpbmcuYXZnX3JhdGluZ1xuICAgICAgICAgICAgICAgIGdvb2dsZVJhdGluZ0NvdW50ID0gZ29vZ2xlX3JhdGluZy5yYXRpbmdfY291bnQgfHwgJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpc19pbnN1cmFuY2VfYnV5X2FibGUgPSBob3NwaXRhbC5pc19pbnN1cmFuY2VfY292ZXJlZCAmJiAhaG9zcGl0YWwuaXNfdXNlcl9pbnN1cmVkICYmIGRlYWxfcHJpY2UgPD0gaG9zcGl0YWwuaW5zdXJhbmNlX3RocmVzaG9sZF9hbW91bnRcbiAgICAgICAgICAgIGxldCBpbnN1cmFuY2VfbGltaXRfbWVzc2FnZSA9IGhvc3BpdGFsLmluc3VyYW5jZV9saW1pdF9tZXNzYWdlXG4gICAgICAgICAgICBsZXQgcXVhbGlmaWNhdGlvbnNBcnJheSA9IFtdO1xuICAgICAgICAgICAgaWYgKHF1YWxpZmljYXRpb25zICYmIHF1YWxpZmljYXRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHF1YWxpZmljYXRpb25zQXJyYXkgPSBxdWFsaWZpY2F0aW9ucy5maWx0ZXIoeCA9PiB4LnF1YWxpZmljYXRpb24ubGVuZ3RoIDw9IDYpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBsZXQgdmlwX2dvbGRfcHJpY2UgPSAoaG9zcGl0YWwudmlwX2NvbnZlbmllbmNlX2Ftb3VudCArIGhvc3BpdGFsLnZpcF9nb2xkX3ByaWNlIHx8IDApXG4gICAgICAgICAgICAvLyBpZiAoIWlzX3ZpcF9hcHBsaWNhYmxlICYmICFwYXJzZWQuZnJvbVZpcCkge1xuICAgICAgICAgICAgLy8gICAgIGlzX2VuYWJsZV9mb3JfdmlwID0gcGFyc2VkLmZyb21Hb2xkVmlwIHx8IChpc19nb2xkX21lbWJlciAmJiBpc192aXBfZ29sZCkgPyBmYWxzZSA6IGlzX2VuYWJsZV9mb3JfdmlwXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBpc19sYWJvcGRfZW5hYmxlX2Zvcl92aXAgPSBob3NwaXRhbC5pc19lbmFibGVfZm9yX3ZpcCBcbiAgICAgICAgICAgIGxldCBpc19sYWJvcGRfZW5hYmxlX2Zvcl9nb2xkID0gaG9zcGl0YWwuaG9zcF9pc19nb2xkIHx8IHBhcnNlZC5mcm9tR29sZFZpcFxuICAgICAgICAgICAgbGV0IGlzX3ZpcF9tZW1iZXIgPSBob3NwaXRhbC5pc192aXBfbWVtYmVyXG4gICAgICAgICAgICBsZXQgaXNfZ29sZF9tZW1iZXIgPSBob3NwaXRhbC5pc19nb2xkX21lbWJlclxuICAgICAgICAgICAgbGV0IGNvdmVyZWRfdW5kZXJfdmlwICA9IGhvc3BpdGFsLmNvdmVyX3VuZGVyX3ZpcFxuICAgICAgICAgICAgbGV0IHZpcCA9e31cbiAgICAgICAgICAgIHZpcC52aXBfYW1vdW50ID0gaG9zcGl0YWwudmlwX2Ftb3VudFxuICAgICAgICAgICAgdmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnQgPSBob3NwaXRhbC52aXBfY29udmVuaWVuY2VfYW1vdW50XG4gICAgICAgICAgICB2aXAudmlwX2dvbGRfcHJpY2UgPSBob3NwaXRhbC52aXBfZ29sZF9wcmljZVxuXG4gICAgICAgICAgICBsZXQgc2hvd19jb21tb25fcHJpY2VzID0gIWlzX2xhYm9wZF9lbmFibGVfZm9yX3ZpcCB8fCAoIChpc19nb2xkX21lbWJlciB8fCBpc192aXBfbWVtYmVyICkgJiYgIWNvdmVyZWRfdW5kZXJfdmlwIClcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdpc192aXBfYXBwbGljYWJsZScraXNfdmlwX2FwcGxpY2FibGUpO2NvbnNvbGUubG9nKCdpc192aXBfZ29sZCcraXNfdmlwX2dvbGQpO2NvbnNvbGUubG9nKCd2aXBfZ29sZF9wcmljZScrdmlwX2dvbGRfcHJpY2UpO2NvbnNvbGUubG9nKCdkaXNjdW50ZWRfcHJpY2UnK2Rpc2NvdW50ZWRfcHJpY2UpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNzdG0tZG9jQ2FyZCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld19zY2hlbWEgJiYgIXRoaXMucHJvcHMuaXNIb3NwaXRhbFBhZ2UgPyA8c2NyaXB0IHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IG5ld19zY2hlbWFcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3RtLWRvY0NhcmQtY29udGVudFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCIgc3R5bGU9e3twYWRkaW5nQm90dG9tOjEwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt1cmwgPyBgLyR7dXJsfWAgOiBgL29wZC9kb2N0b3IvJHtpZH1gfSBvbkNsaWNrPXt0aGlzLnZpZXdQcm9maWxlQ2xpY2tlZC5iaW5kKHRoaXMsIGlkLCB1cmwsIGhvc3BpdGFsLmhvc3BpdGFsX2lkIHx8ICcnKX0gdGl0bGU9e2Rpc3BsYXlfbmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY3N0bURvY05hbWVcIj57ZGlzcGxheV9uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3RtLWRvYy1kZXRhaWxzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3RtLWRvYy1pbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dGh1bWJuYWlsfSBvbkNsaWNrPXt0aGlzLnZpZXdQcm9maWxlQ2xpY2tlZC5iaW5kKHRoaXMsIGlkLCB1cmwsIGhvc3BpdGFsLmhvc3BpdGFsX2lkIHx8ICcnKX0gdGl0bGU9e2Rpc3BsYXlfbmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5pdGlhbHNQaWN0dXJlIG5hbWU9e25hbWV9IGhhc19pbWFnZT17ISF0aHVtYm5haWx9IGNsYXNzTmFtZT1cImluaXRpYWxzUGljdHVyZS1kcyBmbHRyLWluaXRpYWxQaWN0dXJlLWRzXCIgc3R5bGU9e3sgd2lkdGg6IDUwLCBoZWlnaHQ6IDUwLCBmb250U2l6ZTogJzEuNWVtJyB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctcm91bmRcIiBzcmM9e3RodW1ibmFpbH0gYWx0PXtkaXNwbGF5X25hbWV9IHRpdGxlPXtkaXNwbGF5X25hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0luaXRpYWxzUGljdHVyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19saWNlbnNlX3ZlcmlmaWVkICYmIGVuYWJsZWRfZm9yX29ubGluZV9ib29raW5nID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjc3RtLXZhcmlmeVwiPlZlcmlmaWVkPC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3RtLWRvYy1jb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57dGhpcy5nZXRRdWFsaWZpY2F0aW9uU3RyKGdlbmVyYWxfc3BlY2lhbGl6YXRpb24gfHwgW10pfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWFsaWZpY2F0aW9ucyAmJiBxdWFsaWZpY2F0aW9ucy5sZW5ndGggJiYgcXVhbGlmaWNhdGlvbnNBcnJheS5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbGlmaWNhdGlvbnNBcnJheS5tYXAoKHF1YWxpZmljYXRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGtleT17aW5kZXh9PntxdWFsaWZpY2F0aW9uLnF1YWxpZmljYXRpb259IHsoaW5kZXggPCBxdWFsaWZpY2F0aW9uc0FycmF5Lmxlbmd0aCAtIDEpICYmIChpbmRleCAhPSAyKSA/ICd8ICcgOiAnJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlcmllbmNlX3llYXJzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDUgfX0+e2V4cGVyaWVuY2VfeWVhcnN9IFllYXJzIEV4cGVyaWVuY2U8L2gzPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWwgJiYgaG9zcGl0YWwudGltaW5ncyAmJiBPYmplY3Qua2V5cyhob3NwaXRhbC50aW1pbmdzKS5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWwudGltaW5nc1tPYmplY3Qua2V5cyhob3NwaXRhbC50aW1pbmdzKVswXV0ubWFwKCh0aW1lLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8cCBrZXk9e2luZGV4fSBzdHlsZT17aW5kZXggPT0gMCA/IHt9IDogeyBtYXJnaW5MZWZ0OiAxOCB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID09IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY3N0bVRpbWVJbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy93YXRjaC1kYXRlLnN2Z1wifSAvPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZlcmFnZV9yYXRpbmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYXRpbmdTdGFycyBhdmVyYWdlX3JhdGluZz17YXZlcmFnZV9yYXRpbmd9IHJhdGluZ19jb3VudD17cmF0aW5nX2NvdW50IHx8ICcnfSB3aWR0aD1cIjEycHhcIiBoZWlnaHQ9XCIxMnB4XCIgLz4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNCBib29raW5nLWNvbHVtblwiIHN0eWxlPXttcnAgPT0gMCA/IHsgcGFkZGluZ1RvcDogNDAgfSA6IHt9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UgJiYgIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmIGVuYWJsZWRfZm9yX2hvc3BpdGFsX2Jvb2tpbmcgJiYgbXJwICE9IDAgJiYgdGhpcy5zdGF0ZS5zc3JGbGFnICYmICEoKGlzX3ZpcF9tZW1iZXIgfHwgaXNfZ29sZF9tZW1iZXIpICYmIGNvdmVyZWRfdW5kZXJfdmlwKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNzdG0tZG9jLXByaWNlXCI+RG9jcHJpbWUgUHJpY2U8L3A+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAgKCFpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiAhc2hvd19jb21tb25fcHJpY2VzKT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbW9uVmlwR29sZEJhZGdlIGlzX2xhYm9wZF9lbmFibGVfZm9yX3ZpcD17aXNfbGFib3BkX2VuYWJsZV9mb3JfdmlwfSBpc19sYWJvcGRfZW5hYmxlX2Zvcl9nb2xkPXtpc19sYWJvcGRfZW5hYmxlX2Zvcl9nb2xkfSBpc192aXBfbWVtYmVyPXtpc192aXBfbWVtYmVyfSBpc19nb2xkX21lbWJlcj17aXNfZ29sZF9tZW1iZXJ9IGNvdmVyZWRfdW5kZXJfdmlwPXtjb3ZlcmVkX3VuZGVyX3ZpcH0gaXNfZG9jPXt0cnVlfSB2aXBfZGF0YT17dmlwfSB7Li4udGhpcy5wcm9wc30gbXJwPXttcnB9IGRpc2NvdW50ZWRfcHJpY2U9e2Rpc2NvdW50ZWRfcHJpY2V9IGVuYWJsZWRfZm9yX2hvc3BpdGFsX2Jvb2tpbmc9e2VuYWJsZWRfZm9yX2hvc3BpdGFsX2Jvb2tpbmd9IGdvbGRDbGlja2VkPXt0aGlzLmdvbGRDbGlja2VkLmJpbmQodGhpcyl9IGRlYWxfcHJpY2U9e2RlYWxfcHJpY2V9IC8+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNzdC1kb2MtcHJpY2VcIj7igrkgezB9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtdmFsLWJ4XCI+Q292ZXJlZCBVbmRlciBJbnN1cmFuY2U8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzaG93X2NvbW1vbl9wcmljZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP2VuYWJsZWRfZm9yX2NvZCAmJiBjb2RfZGVhbF9wcmljZSAhPSBudWxsICYmICFlbmFibGVkX2Zvcl9wcmVwYWlkX2Jvb2tpbmcgJiYgZW5hYmxlZF9mb3Jfb25saW5lX2Jvb2tpbmcgJiYgY29kX2RlYWxfcHJpY2UgIT0gbXJwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNzdC1kb2MtcHJpY2VcIj7igrkge2NvZF9kZWFsX3ByaWNlfSA8c3BhbiBjbGFzc05hbWU9XCJjc3RtLWRvYy1jdXQtcHJpY2VcIj7igrkge21ycH0gPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZW5hYmxlZF9mb3JfY29kICYmIGNvZF9kZWFsX3ByaWNlICE9IG51bGwgJiYgIWVuYWJsZWRfZm9yX3ByZXBhaWRfYm9va2luZyAmJiBlbmFibGVkX2Zvcl9vbmxpbmVfYm9va2luZyAmJiBjb2RfZGVhbF9wcmljZSA9PSBtcnAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNzdC1kb2MtcHJpY2VcIj7igrkge2NvZF9kZWFsX3ByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVuYWJsZWRfZm9yX2hvc3BpdGFsX2Jvb2tpbmcgJiYgKGRpc2NvdW50ZWRfcHJpY2UgIT0gbnVsbCkgJiYgZGlzY291bnRlZF9wcmljZSAhPSBtcnAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjc3QtZG9jLXByaWNlXCI+4oK5IHtkaXNjb3VudGVkX3ByaWNlfSA8c3BhbiBjbGFzc05hbWU9XCJjc3RtLWRvYy1jdXQtcHJpY2VcIj7igrkge21ycH0gPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtcnAgJiYgbXJwICE9IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3N0LWRvYy1wcmljZVwiPuKCuSB7bXJwfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbXJwICE9IG51bGwgJiYgZW5hYmxlZF9mb3JfaG9zcGl0YWxfYm9va2luZyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmlsdHItb2ZmZXIgb2ZyLXJpYmJvbiBmcmVlLW9mci1yaWJib24gZnctNzAwXCI+RnJlZSBDb25zdWx0YXRpb248L3NwYW4+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmIGVuYWJsZWRfZm9yX2hvc3BpdGFsX2Jvb2tpbmcgJiYgb2ZmUGVyY2VudCAmJiBvZmZQZXJjZW50ID4gMCAmJiBzaG93X2NvbW1vbl9wcmljZXMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjc3RtLWNwblwiPntvZmZQZXJjZW50fSUgT2ZmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVhbF9wcmljZSAhPSBkaXNjb3VudGVkX3ByaWNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGJyIC8+KGluY2x1ZGVzIENvdXBvbik8L3NwYW4+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAgKCFpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiAhc2hvd19jb21tb25fcHJpY2VzKT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tb25WaXBHb2xkTm9uTG9naW5CYWRnZSBpc19sYWJvcGRfZW5hYmxlX2Zvcl92aXA9e2lzX2xhYm9wZF9lbmFibGVfZm9yX3ZpcH0gaXNfbGFib3BkX2VuYWJsZV9mb3JfZ29sZD17aXNfbGFib3BkX2VuYWJsZV9mb3JfZ29sZH0gaXNfdmlwX21lbWJlcj17aXNfdmlwX21lbWJlcn0gaXNfZ29sZF9tZW1iZXI9e2lzX2dvbGRfbWVtYmVyfSBjb3ZlcmVkX3VuZGVyX3ZpcD17Y292ZXJlZF91bmRlcl92aXB9IGlzX2RvYz17dHJ1ZX0gdmlwX2RhdGE9e3ZpcH0gey4uLnRoaXMucHJvcHN9IG1ycD17bXJwfSBkaXNjb3VudGVkX3ByaWNlPXtkaXNjb3VudGVkX3ByaWNlfSBlbmFibGVkX2Zvcl9ob3NwaXRhbF9ib29raW5nPXtlbmFibGVkX2Zvcl9ob3NwaXRhbF9ib29raW5nfSBnb2xkQ2xpY2tlZD17dGhpcy5nb2xkQ2xpY2tlZC5iaW5kKHRoaXMpfSBkZWFsX3ByaWNlPXtkZWFsX3ByaWNlfSAvPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNzdC1kb2MtcHJpY2VcIj7igrkgezB9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy12YWwtYnhcIj5Db3ZlcmVkIFVuZGVyIEluc3VyYW5jZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJycqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmIGVuYWJsZWRfZm9yX2hvc3BpdGFsX2Jvb2tpbmcgJiYgaXNfZW5hYmxlX2Zvcl92aXAgJiYgIWlzX3ZpcF9hcHBsaWNhYmxlICYmICFpc192aXBfZ29sZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1lbmRcIiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgbWFyZ2luVG9wOiA1LCBtYXJnaW5Cb3R0b206IDUsIHBvc2l0aW9uOiAncmVsYXRpdmUnLCB6SW5kZXg6IDEgfX0gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsZWFyVmlwU2VsZWN0ZWRQbGFuKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy92aXAtY2x1Yi1kZXRhaWxzP3NvdXJjZT1kb2N0b3JsaXN0aW5nJmxlYWRfc291cmNlPURvY3ByaW1lJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0RvY3RvckNhcmRWSVBDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnZG9jdG9yLWNhcmQtdmlwLWNsaWNrZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGdybi10eHQtdmlwXCI+U2F2ZSA3MCUgd2l0aDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcGxvZy5wbmcnfSBzdHlsZT17eyB3aWR0aDogMTgsIG1hcmdpbkxlZnQ6IDQsIG1hcmdpblJpZ2h0OiAyIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmcnfSBzdHlsZT17eyB0cmFuc2Zvcm06ICdyb3RhdGUoLTkwZGVnKScgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiFpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiAhaXNfZ29sZF9tZW1iZXIgJiYgZW5hYmxlZF9mb3JfaG9zcGl0YWxfYm9va2luZyAmJiAhaXNfdmlwX2FwcGxpY2FibGUgJiYgaXNfdmlwX2dvbGQgJiYgIXBhcnNlZC5mcm9tVmlwICYmIChkaXNjb3VudGVkX3ByaWNlID4gdmlwX2dvbGRfcHJpY2UpID8gPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1lbmQgZ29sZENhcmRcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmdvbGRDbGlja2VkKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJnbGQtY2QtaWNvblwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZ29sZC1zbS5wbmcnfS8+IDxwIGNsYXNzTmFtZT1cImdsZC1wLXJjXCI+UHJpY2U8L3A+IDxzcGFuIGNsYXNzTmFtZT1cImdsZC1yYXRlLWxmXCI+4oK5IHtob3NwaXRhbC52aXBfY29udmVuaWVuY2VfYW1vdW50ICsgaG9zcGl0YWwudmlwX2dvbGRfcHJpY2UgfHwgMH08L3NwYW4+PGltZyBzdHlsZT17e3RyYW5zZm9ybTogJ3JvdGF0ZSgtOTBkZWcpJyx3aWR0aDogJzEwcHgnfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmcnfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJyovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZF9mb3JfaG9zcGl0YWxfYm9va2luZyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjc3RtLWJvb2stYnRuXCIgb25DbGljaz17dGhpcy5ib29rTm93Q2xpY2tlZC5iaW5kKHRoaXMsIGlkLCB1cmwsIGhvc3BpdGFsLmhvc3BpdGFsX2lkIHx8ICcnKX0+Qm9vayBOb3c8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjc3RtLXZpZXctYnRuXCIgb25DbGljaz17dGhpcy52aWV3UHJvZmlsZUNsaWNrZWQuYmluZCh0aGlzLCBpZCwgdXJsLCBob3NwaXRhbC5ob3NwaXRhbF9pZCB8fCAnJyl9PlZpZXcgQ29udGFjdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19pbnN1cmFuY2VfYnV5X2FibGUgJiYgdGhpcy5wcm9wcy5jb21tb25fc2V0dGluZ3MgJiYgdGhpcy5wcm9wcy5jb21tb25fc2V0dGluZ3MuaW5zdXJhbmNlX2F2YWlsYWJpbGl0eSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLWJ1eWFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJvb2sgdGhpcyBEb2N0b3IgZm9yIOKCuTAgd2l0aCBPUEQgSW5zdXJhbmNlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnS25vd01vcmVEb2N0b3JDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAna25vdy1tb3JlLWRvY3Rvci1jbGlja2VkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaW5zdXJhbmNlL2luc3VyYW5jZS1wbGFucz9zb3VyY2U9ZG9jdG9yLWxpc3Rpbmcmc2hvd19idXR0b249dHJ1ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5Lbm93IG1vcmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc19pbnN1cmFuY2VfYnV5X2FibGUgJiYgdGhpcy5wcm9wcy5jb21tb25fc2V0dGluZ3MgJiYgdGhpcy5wcm9wcy5jb21tb25fc2V0dGluZ3MuaW5zdXJhbmNlX2F2YWlsYWJpbGl0eT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ge2luc3VyYW5jZV9saW1pdF9tZXNzYWdlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3RtQ2FyZEZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3RtZm9vdGVyQ29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWwudXJsICYmIGhvc3BpdGFsLnVybC5sZW5ndGggJiYgIXRoaXMucHJvcHMuaXNIb3NwaXRhbFBhZ2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxpbWcgc3R5bGU9e3sgd2lkdGg6ICcxNnB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jc3RtaG9tZS5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgLyR7aG9zcGl0YWwudXJsfWB9IHN0eWxlPXt7IGNvbG9yOiAnIzAwMCcgfX0gb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHtob3NwaXRhbC51cmx9YClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3NwaXRhbC5ob3NwaXRhbF9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3BpdGFsX2NvdW50ID4gMSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gJmFtcDsge2hvc3BpdGFsX2NvdW50IC0gMX0gTW9yZSA8L3NwYW4+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLmlzSG9zcGl0YWxQYWdlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48aW1nIHN0eWxlPXt7IHdpZHRoOiAnMTZweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3N0bWhvbWUuc3ZnXCJ9IC8+e2hvc3BpdGFsLmhvc3BpdGFsX25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3BpdGFsX2NvdW50ID4gMSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+ICZhbXA7IHtob3NwaXRhbF9jb3VudCAtIDF9IE1vcmUgPC9zcGFuPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8aDM+PGltZyBzdHlsZT17eyB3aWR0aDogJzE2cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NzdG1ob21lLnN2Z1wifSAvPntob3NwaXRhbC5ob3NwaXRhbF9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3NwaXRhbF9jb3VudCA+IDEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiAmYW1wOyB7aG9zcGl0YWxfY291bnQgLSAxfSBNb3JlIDwvc3Bhbj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnb29nbGVfcmF0aW5nICYmIGF2Z0dvb2dsZVJhdGluZyAmJiBnb29nbGVSYXRpbmdDb3VudCAmJiAhYXZlcmFnZV9yYXRpbmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCIgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDIwLCBtYXJnaW5Cb3R0b206IDggfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhdGluZ1N0YXJzIGF2ZXJhZ2VfcmF0aW5nPXthdmdHb29nbGVSYXRpbmd9IHJhdGluZ19jb3VudD17Z29vZ2xlUmF0aW5nQ291bnR9IHdpZHRoPVwiMTJweFwiIGhlaWdodD1cIjEycHhcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9wb3dlcmVkX2J5X2dvb2dsZV9vbl93aGl0ZS5wbmcnfSBzdHlsZT17eyB3aWR0aDogMTAwLCBtYXJnaW5MZWZ0OiA2IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudF91cmwgJiYgcGFyZW50X3VybC5sZW5ndGggJiYgIXRoaXMucHJvcHMuaXNIb3NwaXRhbFBhZ2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC8ke3BhcmVudF91cmx9YH0gb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHtwYXJlbnRfdXJsfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi1ybXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJzEwcHgnLCBtYXJnaW5MZWZ0OiAnM3B4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9uZXctbG9jLWljby5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvc3BpdGFsLnNob3J0X2FkZHJlc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItcm12XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJzEwcHgnLCBtYXJnaW5MZWZ0OiAnM3B4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9uZXctbG9jLWljby5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG9zcGl0YWwuc2hvcnRfYWRkcmVzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3N0bURvY0xvY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3N0bWRpc3Quc3ZnXCJ9IC8+e0Rpc3RhbmNlfSZuYnNwO2ttPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgLy8gPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItY2FyZC1kbCBtYi0zXCIgPlxuICAgICAgICAgICAgICAgIC8vICAgICB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBuZXdfc2NoZW1hID8gPHNjcmlwdCB0eXBlPVwiYXBwbGljYXRpb24vbGQranNvblwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgX19odG1sOiBuZXdfc2NoZW1hXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlzX2dvbGQgP1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ29sZC1jYXJkLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2dvbGQuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiZmx0ci1jcmQtdG9wLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VvRnJpZW5kbHkgP1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsdHItbGN0bi1kdGxzXCIgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDQ1IH19PlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudF91cmwgJiYgcGFyZW50X3VybC5sZW5ndGggP1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwYXJlbnRfdXJsfSBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3BhcmVudF91cmx9YClcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmx0ci1sb2MtaWNvXCIgd2lkdGg9XCIxMnB4XCIgaGVpZ2h0PVwiMThweFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL21hcC1tYXJrZXItYmx1ZS5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aG9zcGl0YWwuc2hvcnRfYWRkcmVzc308L3NwYW4+IHtob3NwaXRhbC5zaG9ydF9hZGRyZXNzID8gXCIgfCBcIiA6IFwiXCJ9PHNwYW4+e0Rpc3RhbmNlfSBLbTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmbHRyLWxvYy1pY29cIiB3aWR0aD1cIjEycHhcIiBoZWlnaHQ9XCIxOHB4XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvbWFwLW1hcmtlci1ibHVlLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2hvc3BpdGFsLnNob3J0X2FkZHJlc3N9PC9zcGFuPiB7aG9zcGl0YWwuc2hvcnRfYWRkcmVzcyA/IFwiIHwgXCIgOiBcIlwifTxzcGFuPntEaXN0YW5jZX0gS208L3NwYW4+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDogPGRpdiBjbGFzc05hbWU9XCJmbHRyLWxjdG4tZHRsc1wiPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudF91cmwgJiYgcGFyZW50X3VybC5sZW5ndGggP1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwYXJlbnRfdXJsfSBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3BhcmVudF91cmx9YClcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmx0ci1sb2MtaWNvXCIgd2lkdGg9XCIxMnB4XCIgaGVpZ2h0PVwiMThweFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL21hcC1tYXJrZXItYmx1ZS5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbHRyLWxvYy10eHRcIj57aG9zcGl0YWwuc2hvcnRfYWRkcmVzc308L3NwYW4+IHtob3NwaXRhbC5zaG9ydF9hZGRyZXNzID8gXCIgfCBcIiA6IFwiXCJ9PHNwYW4+e0Rpc3RhbmNlfSBLbTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmbHRyLWxvYy1pY29cIiB3aWR0aD1cIjEycHhcIiBoZWlnaHQ9XCIxOHB4XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvbWFwLW1hcmtlci1ibHVlLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmx0ci1sb2MtdHh0XCI+e2hvc3BpdGFsLnNob3J0X2FkZHJlc3N9PC9zcGFuPiB7aG9zcGl0YWwuc2hvcnRfYWRkcmVzcyA/IFwiIHwgXCIgOiBcIlwifTxzcGFuPntEaXN0YW5jZX0gS208L3NwYW4+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCIgPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIG1ydC0xMFwiPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8YSBocmVmPXt1cmwgPyBgLyR7dXJsfWAgOiBgL29wZC9kb2N0b3IvJHtpZH1gfSBvbkNsaWNrPXt0aGlzLnZpZXdQcm9maWxlQ2xpY2tlZC5iaW5kKHRoaXMsIGlkLCB1cmwsIGhvc3BpdGFsLmhvc3BpdGFsX2lkIHx8ICcnKX0gdGl0bGU9e2Rpc3BsYXlfbmFtZX0+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgZm9udFNpemU6IDE2LCBwYWRkaW5nTGVmdDogOCwgcGFkZGluZ1JpZ2h0OiA1MCB9fSBjbGFzc05hbWU9XCJsYWItZmx0ci1kYy1uYW1lIGZ3LTUwMFwiPntkaXNwbGF5X25hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBlbmFibGVkX2Zvcl9ob3NwaXRhbF9ib29raW5nICYmIGRpc2NvdW50ICYmIGRpc2NvdW50ICE9IDAgP1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbHRyLW9mZmVyIG9mci1yaWJib24gZnctNzAwXCI+e2Rpc2NvdW50fSUgT2ZmPC9zcGFuPiA6ICcnXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgIWRpc2NvdW50ZWRfcHJpY2UgJiYgIWlzX3Byb2NlZHVyZSAmJiBlbmFibGVkX2Zvcl9ob3NwaXRhbF9ib29raW5nID9cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWx0ci1vZmZlciBvZnItcmliYm9uIGZyZWUtb2ZyLXJpYmJvbiBmdy03MDBcIj5GcmVlIENvbnN1bHRhdGlvbjwvc3Bhbj4gOiAnJ1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNyBtcnQtMTBcIj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctbmQtZHRsc1wiIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyB9fSA+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsdHItY3JkLWltZyB0ZXh0LWNlbnRlclwiIHN0eWxlPXt7IHdpZHRoOiA2MCB9fSA+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPEluaXRpYWxzUGljdHVyZSBuYW1lPXtuYW1lfSBoYXNfaW1hZ2U9eyEhdGh1bWJuYWlsfSBjbGFzc05hbWU9XCJpbml0aWFsc1BpY3R1cmUtZHMgZmx0ci1pbml0aWFsUGljdHVyZS1kc1wiPjxpbWcgY2xhc3NOYW1lPVwiZmx0ci11c3ItaW1hZ2UgaW1nLXJvdW5kXCIgc3JjPXt0aHVtYm5haWx9IGFsdD17ZGlzcGxheV9uYW1lfSB0aXRsZT17ZGlzcGxheV9uYW1lfSAvPjwvSW5pdGlhbHNQaWN0dXJlPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHtpc19saWNlbnNlX3ZlcmlmaWVkICYmIGVuYWJsZWRfZm9yX29ubGluZV9ib29raW5nID8gPHNwYW4gY2xhc3NOYW1lPVwiZmx0ci1ydG5nXCI+VmVyaWZpZWQ8L3NwYW4+IDogJyd9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT1cImZsdHItc3ViLXJ0bmdcIj40LjUgPGltZyBzcmM9XCIvYXNzZXRzL2ltZy9jdXN0b21lci1pY29ucy9zdGFyLnN2Z1wiIC8+PC9zcGFuPiAqL31cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWRfZm9yX29ubGluZV9ib29raW5nID8gJycgOiA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmNsYWltQnV0dG9uQ2xpY2soZSl9IGNsYXNzTmFtZT1cImZsdHItYmtuZy1idG4gY2xhaW0tYnRuIHRleHQtY2VudGVyXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCB9fT5DbGFpbSB0aGlzIHByb2ZpbGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JkLWRjdHItZHRsc1wiPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmdy01MDBcIj57dGhpcy5nZXRRdWFsaWZpY2F0aW9uU3RyKGdlbmVyYWxfc3BlY2lhbGl6YXRpb24gfHwgW10pfTwvaDM+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRldGFpbHMucXVhbGlmaWNhdGlvbnMgJiYgdGhpcy5wcm9wcy5kZXRhaWxzLnF1YWxpZmljYXRpb25zLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMiwgaGVpZ2h0OiAxNiB9fT5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGV0YWlscy5xdWFsaWZpY2F0aW9ucy5maWx0ZXIoeCA9PiB4LnF1YWxpZmljYXRpb24ubGVuZ3RoIDw9IDYpLm1hcCgocXVhbGlmaWNhdGlvbiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPD0gMSkge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8aDMgY2xhc3NOYW1lPVwiZnctNTAwIGlubGluZS1oZWFkXCIgaWQ9e2BpbmxpbmUtaGVhZC0ke2l9YH0ga2V5PXtpfT57cXVhbGlmaWNhdGlvbi5xdWFsaWZpY2F0aW9ufTwvaDM+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlcmllbmNlX3llYXJzID8gPGgzIGNsYXNzTmFtZT1cImZ3LTUwMFwiPntleHBlcmllbmNlX3llYXJzfSBZZWFycyBvZiBFeHBlcmllbmNlPC9oMz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTUgbXJ0LTEwIHRleHQtcmlnaHRcIiBzdHlsZT17eyBwYWRkaW5nTGVmdDogOCB9fSA+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWRfZm9yX2hvc3BpdGFsX2Jvb2tpbmcgP1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsdHItcHJpY2VzXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiA0IH19PlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmI3gyMEI5OyB7aXNfcHJvY2VkdXJlID8gZmluYWxQcm9jZWR1cmVEZWFsUHJpY2UgOiBkaXNjb3VudGVkX3ByaWNlfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19wcm9jZWR1cmVcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZpbmFsUHJvY2VkdXJlTXJwICE9IGZpbmFsUHJvY2VkdXJlRGVhbFByaWNlID8gPHNwYW4gY2xhc3NOYW1lPVwiZmx0ci1jdXQtcHJpY2VcIj4mI3gyMEI5OyB7ZmluYWxQcm9jZWR1cmVNcnB9PC9zcGFuPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1ycCAhPSBkaXNjb3VudGVkX3ByaWNlID8gPHNwYW4gY2xhc3NOYW1lPVwiZmx0ci1jdXQtcHJpY2VcIj4mI3gyMEI5OyB7bXJwfTwvc3Bhbj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgOiBpc19wcm9jZWR1cmUgP1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbHRyLXByaWNlc1wiIHN0eWxlPXt7IG1hcmdpblRvcDogNCB9fT5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjeDIwQjk7e2ZpbmFsUHJvY2VkdXJlTXJwfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbXJwICYmIG1ycCAhPSAwID9cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsdHItcHJpY2VzXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiA0IH19PlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjeDIwQjk7e21ycH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgey8qIGNvZGUgZm9yIG5ldyBwcmljaW5nIFVJIChleGNsdXNpdmUgZG9jcHJpbWUgcHJpY2UpICovfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB7Lyoge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZF9mb3JfaG9zcGl0YWxfYm9va2luZyA/XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1wcmljZS1kdGxzLWRpdiBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfcHJvY2VkdXJlXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmaW5hbFByb2NlZHVyZU1ycCAhPSBmaW5hbFByb2NlZHVyZURlYWxQcmljZSA/XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBkcC1wcmljZVwiPkRvY3RvciBmZWUgOiAmI3gyMEI5OyB7ZmluYWxQcm9jZWR1cmVNcnB9PC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtcnAgIT0gZGlzY291bnRlZF9wcmljZSA/IDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBkcC1wcmljZVwiPkRvY3RvciBmZWUgOiAmI3gyMEI5OyB7bXJwfTwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBleGNsc3YtcHJpY2VcIj5Eb2NwcmltZSBmZWUgOiAmI3gyMEI5OyB7aXNfcHJvY2VkdXJlID8gZmluYWxQcm9jZWR1cmVEZWFsUHJpY2UgOiBkaXNjb3VudGVkX3ByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaXNfcHJvY2VkdXJlID9cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1wcmljZS1kdGxzLWRpdiBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBkcC1wcmljZVwiPkRvY3RvciBmZWUgOiAmI3gyMEI5OyB7ZmluYWxQcm9jZWR1cmVNcnB9PC9wPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtcnAgP1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1wcmljZS1kdGxzLWRpdiBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgZHAtcHJpY2VcIj5Eb2N0b3IgZmVlIDogJiN4MjBCOTsge21ycH08L3A+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9ICovfVxuXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGRlYWxfcHJpY2UgIT0gZGlzY291bnRlZF9wcmljZSAmJiBlbmFibGVkX2Zvcl9ob3NwaXRhbF9ib29raW5nID8gPGRpdiBjbGFzc05hbWU9XCJzaWdudXAtb2ZmLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpZ251cC1vZmYtZG9jLWdyZWVuXCIgc3R5bGU9e3sgZm9udFNpemU6IDEyIH19ID5JbmNsdWRlcyBjb3Vwb24gZGlzY291bnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgbXJ0LTEwXCI+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWRfZm9yX2hvc3BpdGFsX2Jvb2tpbmcgP1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3VybH0gb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbHRyLWNudGN0LWJ0biBidG4tcGRuZ1wiIG9uQ2xpY2s9e3RoaXMudmlld1Byb2ZpbGVDbGlja2VkLmJpbmQodGhpcywgaWQsIHVybCwgaG9zcGl0YWwuaG9zcGl0YWxfaWQgfHwgJycpfT5WaWV3IFByb2ZpbGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5ib29rTm93Q2xpY2tlZC5iaW5kKHRoaXMsIGlkLCB1cmwsIGhvc3BpdGFsLmhvc3BpdGFsX2lkIHx8ICcnKX0gY2xhc3NOYW1lPVwiZmx0ci1ia25nLWJ0biBidG4tcGRuZ1wiID5Cb29rIE5vdzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnZpZXdQcm9maWxlQ2xpY2tlZC5iaW5kKHRoaXMsIGlkLCB1cmwsIGhvc3BpdGFsLmhvc3BpdGFsX2lkIHx8ICcnKX0gY2xhc3NOYW1lPVwiZmx0ci1jbnRjdC1idG4gYnRuLXBkbmdcIiA+Q29udGFjdFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZhbHNlICYmIGhvc3BpdGFsc1swXSAmJiBob3NwaXRhbHNbMF0ucHJvY2VkdXJlX2NhdGVnb3JpZXMgJiYgaG9zcGl0YWxzWzBdLnByb2NlZHVyZV9jYXRlZ29yaWVzLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvY2VkdXJlLWNoZWNrYm94ZXNcIj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHRsLWNuc2x0LWZlZSBwYi1saXN0IGNuc2x0LWZlZS1zdHlsZVwiPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZF9mb3JfaG9zcGl0YWxfYm9va2luZyA/XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVzdC1wcmljZSB0eHQtb3JuYWdlXCI+4oK5IHtkaXNjb3VudGVkX3ByaWNlfTxzcGFuIGNsYXNzTmFtZT1cInRlc3QtbXJwXCI+4oK5IHttcnB9PC9zcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVzdC1wcmljZSB0eHQtb3JuYWdlXCI+4oK5IHttcnB9PC9zcGFuPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXN0LW5hbWUtaXRlbVwiPkNvbnN1bHRhdGlvbiBGZWU8L3NwYW4+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBmb250U2l6ZTogJzE0cHgnIH19IGNsYXNzTmFtZT1cInByb2NlZHVyZS1vdXQtaGVhZGluZy1mb250XCI+VHJlYXRtZW50KHMpIDxzcGFuPnt0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAncHJvY2VkdXJlc19jYXRlZ29yeScpLmxlbmd0aCA+IDAgPyBgIGluICR7dGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhcy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gJ3Byb2NlZHVyZXNfY2F0ZWdvcnknKS5tYXAoeCA9PiB4Lm5hbWUpLmpvaW4oJyB8ICcpfWAgOiAnU2VsZWN0ZWQnfSA8L3NwYW4+PC9oND5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zdXJhbmNlLWNoZWNrYm94ZXNcIj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJvY2VkdXJlLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWxzWzBdLnByb2NlZHVyZV9jYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2F0ZWdvcnkucHJvY2VkdXJlcy5maWx0ZXIoeCA9PiB4LmlzX3NlbGVjdGVkKS5tYXAoKHByb2NlZHVyZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicHJvY2VkdXJlLWNoZWNrIGNrLWJ4XCIgaHRtbEZvcj17YCR7cHJvY2VkdXJlLnByb2NlZHVyZS5pZH1fZG9jXyR7aWR9YH0+e3Byb2NlZHVyZS5wcm9jZWR1cmUubmFtZX1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dHJ1ZX0gY2xhc3NOYW1lPVwicHJvY2UtaW5wdXRcIiBpZD17YCR7cHJvY2VkdXJlLnByb2NlZHVyZS5pZH1fZG9jXyR7aWR9YH0gbmFtZT1cImZydWl0LTFcIiB2YWx1ZT1cIlwiIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgdmllTW9yZVByb2NlZHVyZXM6IHRydWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCI+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2PlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt0cnVlfSBjbGFzc05hbWU9XCJpbnMtY2hrLWJ4XCIgaWQ9e3Byb2NlZHVyZS5wcm9jZWR1cmUuaWR9IG5hbWU9XCJmcnVpdC0xXCIgdmFsdWU9XCJcIiBvbkNoYW5nZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHZpZU1vcmVQcm9jZWR1cmVzOiB0cnVlIH0pfSAvPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtwcm9jZWR1cmUucHJvY2VkdXJlLmlkfT57cHJvY2VkdXJlLnByb2NlZHVyZS5uYW1lfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZF9mb3JfaG9zcGl0YWxfYm9va2luZyA/XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByLXByaWNlc1wiPuKCuSB7cHJvY2VkdXJlLmRlYWxfcHJpY2V9PHNwYW4gY2xhc3NOYW1lPVwicHItY3V0LXByaWNlXCI+4oK5IHtwcm9jZWR1cmUubXJwfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHItcHJpY2VzXCI+4oK5IHtwcm9jZWR1cmUubXJwfTwvcD5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSA/XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UGxlYXNlIFNlbGVjdCBhdCBsZWFzdCBvbmUgUHJvY2VkdXJlPC9wPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnNlbGVjdGVkQ291bnQgKyBzZWxlY3RlZENvdW50ID49IDFcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUudmllTW9yZVByb2NlZHVyZXNcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8UHJvY2VkdXJlUG9wdXAgdG9nZ2xlPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsICd2aWVNb3JlUHJvY2VkdXJlcycpfSBkZXRhaWxzPXt0aGlzLnByb3BzfSBkb2N0b3JfaWQ9e3RoaXMucHJvcHMuZGV0YWlscy5pZH0gZGF0YT17aG9zcGl0YWxzWzBdfSBob3NwaXRhbEVuYWJsZT17ZW5hYmxlZF9mb3JfaG9zcGl0YWxfYm9va2luZ30gLz5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bnNlbGVjdGVkQ291bnQgKyBzZWxlY3RlZENvdW50ICE9IHNlbGVjdGVkQ291bnQgPyA8YnV0dG9uIGNsYXNzTmFtZT1cInByLXBsdXMtYWRkLWJ0blwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyB2aWVNb3JlUHJvY2VkdXJlczogdHJ1ZSB9KX0+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIHt1bnNlbGVjdGVkQ291bnR9IG1vcmVcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+IDogJydcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRyLWNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvaG9tZS5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXJiLTBcIj57aG9zcGl0YWwuaG9zcGl0YWxfbmFtZX1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWxfY291bnQgPiAxID9cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gJmFtcDsge2hvc3BpdGFsX2NvdW50IC0gMX0gTW9yZSA8L3NwYW4+IDogJydcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvY2xvY2stYmxhY2suc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxzcGFuPntPYmplY3Qua2V5cyhob3NwaXRhbC50aW1pbmdzKS5sZW5ndGggPiAwID8gaG9zcGl0YWwudGltaW5nc1tPYmplY3Qua2V5cyhob3NwaXRhbC50aW1pbmdzKVswXV1bMF0gOiBcIlwifTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAvLyAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgLy8gPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCJcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBEb2N0b3JQcm9maWxlQ2FyZFxuIiwiaW1wb3J0IERvY3RvclJlc3VsdENhcmQgZnJvbSAnLi9Eb2N0b3JSZXN1bHRDYXJkLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBEb2N0b3JSZXN1bHRDYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==