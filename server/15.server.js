exports.ids = [15];
exports.modules = {

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PopUpView extends _react2.default.Component {

	constructor(props) {
		super(props);
		this.state = {
			errorMessage: false,
			procedure: [],
			selectedProcedures: []
		};
	}

	componentDidMount() {

		let selectedProcedures = [],
		    procedures = [];
		this.props.data.procedure_categories.map(category => {
			procedures = category.procedures.filter(x => x.is_selected).map(x => x.procedure.id);
			selectedProcedures = selectedProcedures.concat(procedures);
		});

		let pids = this.props.details.commonSelectedCriterias.filter(x => x.type == 'procedures' && selectedProcedures.indexOf(x.id) == -1).map(x => x.id);

		selectedProcedures = selectedProcedures.concat(pids);

		this.setState({ selectedProcedures: selectedProcedures, procedure: [].concat(selectedProcedures) });
	}

	toggleLayout() {

		let fetchResults = false;
		let selectedProcedures = this.state.selectedProcedures;
		let procedure = this.state.procedure;
		if (selectedProcedures.length === procedure.length && selectedProcedures.sort().every(function (value, index) {
			return value === procedure.sort()[index];
		})) {} else {
			fetchResults = true;
		}
		//selectedProcedures = selectedProcedures
		this.props.toggle(fetchResults, this.state.selectedProcedures);
	}

	toggleData(procedure) {
		let selectedProcedures = this.state.selectedProcedures;
		if (selectedProcedures.length > 1 || selectedProcedures.length == 1 && selectedProcedures.indexOf(procedure.procedure.id) == -1) {

			if (selectedProcedures.indexOf(procedure.procedure.id) != -1) {
				selectedProcedures.splice(selectedProcedures.indexOf(procedure.procedure.id), 1);
			} else {
				selectedProcedures.push(procedure.procedure.id);
			}
			this.setState({ selectedProcedures: selectedProcedures });
		} else {
			setTimeout(() => {
				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Select at least one Procedure" });
			}, 500);
			return null;
		}
	}

	render() {

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
					this.props.data.procedure_categories.map((category, key) => {

						return _react2.default.createElement(
							'div',
							{ className: 'pop-underline', key: key },
							_react2.default.createElement(
								'h4',
								null,
								category.name
							),
							category.procedures.map((procedure, i) => {

								return _react2.default.createElement(
									'li',
									{ key: `${i}_a` },
									_react2.default.createElement(
										'label',
										{ className: 'procedure-check ck-bx', htmlFor: `${procedure.procedure.id}_` },
										procedure.procedure.name,
										_react2.default.createElement('input', { type: 'checkbox', checked: this.state.selectedProcedures.indexOf(procedure.procedure.id) == -1 ? false : true, id: `${procedure.procedure.id}_`, name: 'fruit-2', value: '',
											onChange: this.toggleData.bind(this, procedure) }),
										_react2.default.createElement('span', { className: 'checkmark' })
									),
									this.props.hospitalEnable ? _react2.default.createElement(
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
}
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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

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

var _assert = __webpack_require__(/*! assert */ "assert");

var _commonVipGoldBadge = __webpack_require__(/*! ../../../commons/commonVipGoldBadge.js */ "./dev/js/components/commons/commonVipGoldBadge.js");

var _commonVipGoldBadge2 = _interopRequireDefault(_commonVipGoldBadge);

var _commonVipGoldNonLoginBadge = __webpack_require__(/*! ../../../commons/commonVipGoldNonLoginBadge.js */ "./dev/js/components/commons/commonVipGoldNonLoginBadge.js");

var _commonVipGoldNonLoginBadge2 = _interopRequireDefault(_commonVipGoldNonLoginBadge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class DoctorProfileCard extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: false,
            ssrFlag: false
        };
    }

    componentDidMount() {
        // if (window) {
        //     window.scrollTo(0, 0)
        // }
        this.setState({ ssrFlag: true });
    }

    viewProfileClicked(id, url, hospital_id, e) {
        e.stopPropagation();

        let data = {
            'Category': 'ConsumerApp', 'Action': 'OpdSearchViewProfileClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'opd-search-view-profile-clicked', 'selectedId': id
        };
        _gtm2.default.sendEvent({ data: data });

        let { category_ids, procedure_ids } = this.trackingEventsBookNow(id);
        this.props.clearVipSelectedPlan();
        if (e.ctrlKey || e.metaKey) {} else {
            e.preventDefault();

            if (url) {
                if (category_ids.length || procedure_ids.length) {
                    this.props.history.push(`/${url}?hospital_id=${hospital_id}&is_procedure=true&category_ids=${category_ids}&procedure_ids=${procedure_ids}&hide_search_data=true`);
                } else {
                    this.props.history.push(`/${url}?hospital_id=${hospital_id}&hide_search_data=true`);
                }
            } else {
                if (category_ids.length || procedure_ids.length) {
                    this.props.history.push(`/opd/doctor/${id}?hospital_id=${hospital_id}&is_procedure=true&category_ids=${category_ids}&procedure_ids=${procedure_ids}&hide_search_data=true`);
                } else {
                    this.props.history.push(`/opd/doctor/${id}?hospital_id=${hospital_id}&hide_search_data=true`);
                }
            }
        }
    }

    bookNowClicked(id, url, hospital_id, e) {
        //always clear selected time at doctor profile
        let slot = { time: {} };
        this.props.selectOpdTimeSLot(slot, false);

        let data = {
            'Category': 'ConsumerApp', 'Action': 'OpdSearchBookNowClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'opd-book-now-clicked', 'selectedId': id, 'isNonBookablePopup': this.props.isNonBookablePopup ? this.props.isNonBookablePopup : false
        };
        _gtm2.default.sendEvent({ data: data });

        if (this.props.isNonBookablePopup) {
            let nonBookableDocData = {
                'Category': 'ConsumerApp', 'Action': 'NonBookableBookNowPopupClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'non-bookable-book-now-popup-clicked', 'selectedId': id
            };
            _gtm2.default.sendEvent({ data: nonBookableDocData });
        }
        let { procedure_ids } = this.trackingEventsBookNow(id);
        this.props.saveProfileProcedures('', '', procedure_ids, true);
        this.props.clearVipSelectedPlan();
        if (url) {
            this.props.history.push(`/${url}/booking?doctor_id=${id}&hospital_id=${hospital_id}`);
        } else {
            this.props.history.push(`/opd/doctor/${id}/${hospital_id}/bookdetails`);
        }
    }

    trackingEventsBookNow(id) {
        let Distance = '';

        if (this.props.details && this.props.details.distance) {
            Distance = (Math.round(this.props.details.distance * 10) / 10).toFixed(1);
        }

        let data = {
            'Category': 'ConsumerApp', 'Action': 'DoctorSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-selected', 'selectedId': id
        };
        _gtm2.default.sendEvent({ data: data });

        let category_ids = this.props.commonSelectedCriterias.filter(x => x.type == 'procedures_category').map(x => x.id).join(',');
        let procedure_ids = this.props.commonSelectedCriterias.filter(x => x.type == 'procedures').map(x => x.id).join(',');
        let condition_ids = this.props.commonSelectedCriterias.filter(x => x.type == 'condition').map(x => x.id).join(',');
        let specialization_ids = this.props.commonSelectedCriterias.filter(x => x.type == 'speciality').map(x => x.id).join(',');
        data = {
            'Category': 'ConsumerApp', 'Action': 'DoctorRankInSearch', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-rank-in-search', 'Rank': this.props.rank + 1, 'DoctorSearchCount': this.props.count, 'specializations': specialization_ids, 'conditions': condition_ids, 'procedures': procedure_ids, 'procedure_category': category_ids, 'Distance': Distance
        };
        _gtm2.default.sendEvent({ data: data });

        return { category_ids, procedure_ids };
    }

    bookNow(id, e) {
        e.stopPropagation();
        // this.props.history.push(`/doctorprofile/${id}/availability`)
    }

    getQualificationStr(qualificationSpecialization) {
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

    claimButtonClick(e) {
        e.stopPropagation();

        let data = {
            'Category': 'ConsumerApp', 'Action': 'ClaimButtomClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'claim-buttom-clicked', 'selectedId': this.props.details.id
        };
        _gtm2.default.sendEvent({ data: data });

        this.props.history.push('/doctorsignup');
    }

    toggle(which, fetchResults = false, procedure_ids = []) {

        this.setState({ [which]: !this.state[which] });
        if (fetchResults) {
            if (procedure_ids.length) {
                this.props.saveCommonProcedures(procedure_ids);
                this.props.mergeOPDState('');
                this.props.resetProcedureURl();
            }
        }
    }

    goldClicked() {
        let data = {
            'Category': 'ConsumerApp', 'Action': 'VipGoldClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'vip-gold-clicked', 'selectedId': this.props.details.id
        };
        _gtm2.default.sendEvent({ data: data });
        this.props.history.push('/vip-gold-details?is_gold=true&source=docgoldlisting&lead_source=Docprime');
    }

    render() {
        const parsed = queryString.parse(this.props.location.search);
        let { id, experience_years, gender, hospitals, hospital_count, name, distance, qualifications, thumbnail, experiences, mrp, deal_price, general_specialization, is_live, display_name, url, is_license_verified, is_gold, new_schema, enabled_for_online_booking, discounted_price, parent_url, average_rating, rating_count, google_rating, enabled_for_cod, cod_deal_price } = this.props.details;

        let enabled_for_hospital_booking = true;
        let enabled_for_prepaid_booking = false;
        let hospital = hospitals && hospitals.length ? hospitals[0] : {};
        let expStr = "";

        if (experiences && experiences.length) {
            expStr += "EXP - ";
            experiences.map((exp, i) => {
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
        let is_procedure = false;
        // let is_gold_member =false
        if (hospitals && hospitals.length) {
            // is_vip_gold = hospital.hosp_is_gold || parsed.fromGoldVip
            // is_gold_member = hospital.is_gold_member
            let selectedCount = 0;
            let unselectedCount = 0;
            let finalProcedureDealPrice = discounted_price;
            let finalProcedureMrp = mrp;
            hospitals[0].procedure_categories.map(x => {
                is_procedure = true;
                x.procedures.filter(x => x.is_selected).map(x => {
                    finalProcedureDealPrice += x.deal_price;
                    finalProcedureMrp += x.mrp;
                    selectedCount++;
                });

                unselectedCount += x.procedures.filter(x => !x.is_selected).length;
            });

            if (is_procedure && false) {
                if (finalProcedureMrp != 0 && finalProcedureDealPrice != 0) {
                    discount = 100 - Math.round(finalProcedureDealPrice * 100 / finalProcedureMrp);
                }
            }

            enabled_for_hospital_booking = hospitals[0].enabled_for_online_booking;
            enabled_for_prepaid_booking = hospitals[0].enabled_for_prepaid;
            is_procedure = false;

            let is_insurance_applicable = hospital.is_insurance_covered && hospital.is_user_insured && deal_price <= hospital.insurance_threshold_amount;
            let offPercent = '';
            if (mrp && discounted_price != null && discounted_price < mrp && enabled_for_prepaid_booking) {
                offPercent = parseInt((mrp - discounted_price) / mrp * 100);
            } else if (enabled_for_cod && cod_deal_price != null && cod_deal_price != mrp && !enabled_for_prepaid_booking) {
                offPercent = parseInt((mrp - cod_deal_price) / mrp * 100);
            }

            let is_vip_applicable = hospital.is_vip_member && hospital.cover_under_vip;
            // let vip_amount = hospital.vip_amount + hospital.vip_convenience_amount
            // let is_enable_for_vip = hospital.is_enable_for_vip || parsed.fromVip
            let avgGoogleRating = '';
            let googleRatingCount = '';
            if (google_rating && google_rating.avg_rating && google_rating.rating_count) {
                avgGoogleRating = google_rating.avg_rating;
                googleRatingCount = google_rating.rating_count || '';
            }
            let is_insurance_buy_able = hospital.is_insurance_covered && !hospital.is_user_insured && deal_price <= hospital.insurance_threshold_amount;
            let insurance_limit_message = hospital.insurance_limit_message;
            let qualificationsArray = [];
            if (qualifications && qualifications.length) {
                qualificationsArray = qualifications.filter(x => x.qualification.length <= 6);
            }

            // let vip_gold_price = (hospital.vip_convenience_amount + hospital.vip_gold_price || 0)
            // if (!is_vip_applicable && !parsed.fromVip) {
            //     is_enable_for_vip = parsed.fromGoldVip || (is_gold_member && is_vip_gold) ? false : is_enable_for_vip
            // }

            let is_labopd_enable_for_vip = hospital.is_enable_for_vip;
            let is_labopd_enable_for_gold = hospital.hosp_is_gold || parsed.fromGoldVip;
            let is_vip_member = hospital.is_vip_member;
            let is_gold_member = hospital.is_gold_member;
            let covered_under_vip = hospital.cover_under_vip;
            let vip = {};
            vip.vip_amount = hospital.vip_amount;
            vip.vip_convenience_amount = hospital.vip_convenience_amount;
            vip.vip_gold_price = hospital.vip_gold_price;

            let show_common_prices = !is_labopd_enable_for_vip || (is_gold_member || is_vip_member) && !covered_under_vip;

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
                                { href: url ? `/${url}` : `/opd/doctor/${id}`, onClick: this.viewProfileClicked.bind(this, id, url, hospital.hospital_id || ''), title: display_name },
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
                                        qualificationsArray.map((qualification, index) => {
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
                                    hospital && hospital.timings && Object.keys(hospital.timings).length ? hospital.timings[Object.keys(hospital.timings)[0]].map((time, index) => {
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
                                { href: `/${hospital.url}`, style: { color: '#000' }, onClick: e => {
                                        e.preventDefault();
                                        this.props.history.push(`/${hospital.url}`);
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
                            { href: `/${parent_url}`, onClick: e => {
                                    e.preventDefault();
                                    this.props.history.push(`/${parent_url}`);
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
}

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvY29tbW9ucy9Qb3BVcC9Qb3BVcC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvY29tbW9ucy9Qb3BVcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvY29tbW9ucy9kb2N0b3JSZXN1bHRDYXJkL0RvY3RvclJlc3VsdENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL2NvbW1vbnMvZG9jdG9yUmVzdWx0Q2FyZC9pbmRleC5qcyJdLCJuYW1lcyI6WyJQb3BVcFZpZXciLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImVycm9yTWVzc2FnZSIsInByb2NlZHVyZSIsInNlbGVjdGVkUHJvY2VkdXJlcyIsImNvbXBvbmVudERpZE1vdW50IiwicHJvY2VkdXJlcyIsImRhdGEiLCJwcm9jZWR1cmVfY2F0ZWdvcmllcyIsIm1hcCIsImNhdGVnb3J5IiwiZmlsdGVyIiwieCIsImlzX3NlbGVjdGVkIiwiaWQiLCJjb25jYXQiLCJwaWRzIiwiZGV0YWlscyIsImNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzIiwidHlwZSIsImluZGV4T2YiLCJzZXRTdGF0ZSIsInRvZ2dsZUxheW91dCIsImZldGNoUmVzdWx0cyIsImxlbmd0aCIsInNvcnQiLCJldmVyeSIsInZhbHVlIiwiaW5kZXgiLCJ0b2dnbGUiLCJ0b2dnbGVEYXRhIiwic3BsaWNlIiwicHVzaCIsInNldFRpbWVvdXQiLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJ0ZXh0IiwicmVuZGVyIiwiQVNTRVRTX0JBU0VfVVJMIiwiaGVhZGluZyIsImtleSIsIm5hbWUiLCJpIiwiYmluZCIsImhvc3BpdGFsRW5hYmxlIiwiZGVhbF9wcmljZSIsIm1ycCIsIlBvcFVwIiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiRG9jdG9yUHJvZmlsZUNhcmQiLCJzc3JGbGFnIiwidmlld1Byb2ZpbGVDbGlja2VkIiwidXJsIiwiaG9zcGl0YWxfaWQiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VuZEV2ZW50IiwiY2F0ZWdvcnlfaWRzIiwicHJvY2VkdXJlX2lkcyIsInRyYWNraW5nRXZlbnRzQm9va05vdyIsImNsZWFyVmlwU2VsZWN0ZWRQbGFuIiwiY3RybEtleSIsIm1ldGFLZXkiLCJwcmV2ZW50RGVmYXVsdCIsImhpc3RvcnkiLCJib29rTm93Q2xpY2tlZCIsInNsb3QiLCJ0aW1lIiwic2VsZWN0T3BkVGltZVNMb3QiLCJpc05vbkJvb2thYmxlUG9wdXAiLCJub25Cb29rYWJsZURvY0RhdGEiLCJzYXZlUHJvZmlsZVByb2NlZHVyZXMiLCJEaXN0YW5jZSIsImRpc3RhbmNlIiwiTWF0aCIsInJvdW5kIiwidG9GaXhlZCIsImpvaW4iLCJjb25kaXRpb25faWRzIiwic3BlY2lhbGl6YXRpb25faWRzIiwicmFuayIsImNvdW50IiwiYm9va05vdyIsImdldFF1YWxpZmljYXRpb25TdHIiLCJxdWFsaWZpY2F0aW9uU3BlY2lhbGl6YXRpb24iLCJjbGFpbUJ1dHRvbkNsaWNrIiwid2hpY2giLCJzYXZlQ29tbW9uUHJvY2VkdXJlcyIsIm1lcmdlT1BEU3RhdGUiLCJyZXNldFByb2NlZHVyZVVSbCIsImdvbGRDbGlja2VkIiwicGFyc2VkIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsImV4cGVyaWVuY2VfeWVhcnMiLCJnZW5kZXIiLCJob3NwaXRhbHMiLCJob3NwaXRhbF9jb3VudCIsInF1YWxpZmljYXRpb25zIiwidGh1bWJuYWlsIiwiZXhwZXJpZW5jZXMiLCJnZW5lcmFsX3NwZWNpYWxpemF0aW9uIiwiaXNfbGl2ZSIsImRpc3BsYXlfbmFtZSIsImlzX2xpY2Vuc2VfdmVyaWZpZWQiLCJpc19nb2xkIiwibmV3X3NjaGVtYSIsImVuYWJsZWRfZm9yX29ubGluZV9ib29raW5nIiwiZGlzY291bnRlZF9wcmljZSIsInBhcmVudF91cmwiLCJhdmVyYWdlX3JhdGluZyIsInJhdGluZ19jb3VudCIsImdvb2dsZV9yYXRpbmciLCJlbmFibGVkX2Zvcl9jb2QiLCJjb2RfZGVhbF9wcmljZSIsImVuYWJsZWRfZm9yX2hvc3BpdGFsX2Jvb2tpbmciLCJlbmFibGVkX2Zvcl9wcmVwYWlkX2Jvb2tpbmciLCJob3NwaXRhbCIsImV4cFN0ciIsImV4cCIsImRpc2NvdW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImlzX3Byb2NlZHVyZSIsInNlbGVjdGVkQ291bnQiLCJ1bnNlbGVjdGVkQ291bnQiLCJmaW5hbFByb2NlZHVyZURlYWxQcmljZSIsImZpbmFsUHJvY2VkdXJlTXJwIiwiZW5hYmxlZF9mb3JfcHJlcGFpZCIsImlzX2luc3VyYW5jZV9hcHBsaWNhYmxlIiwiaXNfaW5zdXJhbmNlX2NvdmVyZWQiLCJpc191c2VyX2luc3VyZWQiLCJpbnN1cmFuY2VfdGhyZXNob2xkX2Ftb3VudCIsIm9mZlBlcmNlbnQiLCJwYXJzZUludCIsImlzX3ZpcF9hcHBsaWNhYmxlIiwiaXNfdmlwX21lbWJlciIsImNvdmVyX3VuZGVyX3ZpcCIsImF2Z0dvb2dsZVJhdGluZyIsImdvb2dsZVJhdGluZ0NvdW50IiwiYXZnX3JhdGluZyIsImlzX2luc3VyYW5jZV9idXlfYWJsZSIsImluc3VyYW5jZV9saW1pdF9tZXNzYWdlIiwicXVhbGlmaWNhdGlvbnNBcnJheSIsInF1YWxpZmljYXRpb24iLCJpc19sYWJvcGRfZW5hYmxlX2Zvcl92aXAiLCJpc19lbmFibGVfZm9yX3ZpcCIsImlzX2xhYm9wZF9lbmFibGVfZm9yX2dvbGQiLCJob3NwX2lzX2dvbGQiLCJmcm9tR29sZFZpcCIsImlzX2dvbGRfbWVtYmVyIiwiY292ZXJlZF91bmRlcl92aXAiLCJ2aXAiLCJ2aXBfYW1vdW50IiwidmlwX2NvbnZlbmllbmNlX2Ftb3VudCIsInZpcF9nb2xkX3ByaWNlIiwic2hvd19jb21tb25fcHJpY2VzIiwiaXNIb3NwaXRhbFBhZ2UiLCJfX2h0bWwiLCJwYWRkaW5nQm90dG9tIiwid2lkdGgiLCJoZWlnaHQiLCJmb250U2l6ZSIsIm1hcmdpbkJvdHRvbSIsInRpbWluZ3MiLCJPYmplY3QiLCJrZXlzIiwibWFyZ2luTGVmdCIsInBhZGRpbmdUb3AiLCJjb2xvciIsImhvc3BpdGFsX25hbWUiLCJwYWRkaW5nTGVmdCIsInNob3J0X2FkZHJlc3MiLCJEb2N0b3JSZXN1bHRDYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUdlLE1BQU1BLFNBQU4sU0FBd0JDLGdCQUFNQyxTQUE5QixDQUF3Qzs7QUFFdERDLGFBQVlDLEtBQVosRUFBbUI7QUFDbEIsUUFBTUEsS0FBTjtBQUNBLE9BQUtDLEtBQUwsR0FBYTtBQUNaQyxpQkFBYyxLQURGO0FBRVpDLGNBQVcsRUFGQztBQUdaQyx1QkFBb0I7QUFIUixHQUFiO0FBS0E7O0FBRURDLHFCQUFvQjs7QUFFbkIsTUFBSUQscUJBQXFCLEVBQXpCO0FBQUEsTUFBNkJFLGFBQWEsRUFBMUM7QUFDQSxPQUFLTixLQUFMLENBQVdPLElBQVgsQ0FBZ0JDLG9CQUFoQixDQUFxQ0MsR0FBckMsQ0FBMENDLFFBQUQsSUFBYztBQUN0REosZ0JBQWFJLFNBQVNKLFVBQVQsQ0FBb0JLLE1BQXBCLENBQTJCQyxLQUFLQSxFQUFFQyxXQUFsQyxFQUErQ0osR0FBL0MsQ0FBbURHLEtBQUtBLEVBQUVULFNBQUYsQ0FBWVcsRUFBcEUsQ0FBYjtBQUNBVix3QkFBcUJBLG1CQUFtQlcsTUFBbkIsQ0FBMEJULFVBQTFCLENBQXJCO0FBQ0EsR0FIRDs7QUFLQSxNQUFJVSxPQUFPLEtBQUtoQixLQUFMLENBQVdpQixPQUFYLENBQW1CQyx1QkFBbkIsQ0FBMkNQLE1BQTNDLENBQWtEQyxLQUFLQSxFQUFFTyxJQUFGLElBQVUsWUFBVixJQUEwQmYsbUJBQW1CZ0IsT0FBbkIsQ0FBMkJSLEVBQUVFLEVBQTdCLEtBQW9DLENBQUMsQ0FBdEgsRUFBeUhMLEdBQXpILENBQTZIRyxLQUFLQSxFQUFFRSxFQUFwSSxD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QUssS0FBSzFJLFNBQWVBLEdBQUcsbUJBQTVCLEdBQWhCO0FBQW9FcUMsb0NBQXBFO0FBQUE7QUFBQTtBQURKO0FBM0RKO0FBNUtKOztBQTZPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExZUo7QUE0ZUgsU0FuakJELE1BbWpCTztBQUNILG1CQUFPLEVBQVA7QUFDSDtBQUNKO0FBMXVCMkM7O2tCQTh1QmpDekIsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzN2QmY7Ozs7OztrQkFFZStILDBCIiwiZmlsZSI6IjE1LnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcFVwVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0ZXJyb3JNZXNzYWdlOiBmYWxzZSxcblx0XHRcdHByb2NlZHVyZTogW10sXG5cdFx0XHRzZWxlY3RlZFByb2NlZHVyZXM6IFtdXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cblx0XHRsZXQgc2VsZWN0ZWRQcm9jZWR1cmVzID0gW10sIHByb2NlZHVyZXMgPSBbXVxuXHRcdHRoaXMucHJvcHMuZGF0YS5wcm9jZWR1cmVfY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiB7XG5cdFx0XHRwcm9jZWR1cmVzID0gY2F0ZWdvcnkucHJvY2VkdXJlcy5maWx0ZXIoeCA9PiB4LmlzX3NlbGVjdGVkKS5tYXAoeCA9PiB4LnByb2NlZHVyZS5pZClcblx0XHRcdHNlbGVjdGVkUHJvY2VkdXJlcyA9IHNlbGVjdGVkUHJvY2VkdXJlcy5jb25jYXQocHJvY2VkdXJlcylcblx0XHR9KVxuXG5cdFx0bGV0IHBpZHMgPSB0aGlzLnByb3BzLmRldGFpbHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMuZmlsdGVyKHggPT4geC50eXBlID09ICdwcm9jZWR1cmVzJyAmJiBzZWxlY3RlZFByb2NlZHVyZXMuaW5kZXhPZih4LmlkKSA9PSAtMSkubWFwKHggPT4geC5pZClcblxuXHRcdHNlbGVjdGVkUHJvY2VkdXJlcyA9IHNlbGVjdGVkUHJvY2VkdXJlcy5jb25jYXQocGlkcylcblxuXHRcdHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFByb2NlZHVyZXM6IHNlbGVjdGVkUHJvY2VkdXJlcywgcHJvY2VkdXJlOiBbXS5jb25jYXQoc2VsZWN0ZWRQcm9jZWR1cmVzKSB9KVxuXHR9XG5cblxuXHR0b2dnbGVMYXlvdXQoKSB7XG5cblx0XHRsZXQgZmV0Y2hSZXN1bHRzID0gZmFsc2Vcblx0XHRsZXQgc2VsZWN0ZWRQcm9jZWR1cmVzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFByb2NlZHVyZXNcblx0XHRsZXQgcHJvY2VkdXJlID0gdGhpcy5zdGF0ZS5wcm9jZWR1cmVcblx0XHRpZiAoc2VsZWN0ZWRQcm9jZWR1cmVzLmxlbmd0aCA9PT0gcHJvY2VkdXJlLmxlbmd0aCAmJiBzZWxlY3RlZFByb2NlZHVyZXMuc29ydCgpLmV2ZXJ5KGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHsgcmV0dXJuIHZhbHVlID09PSBwcm9jZWR1cmUuc29ydCgpW2luZGV4XSB9KSkge1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdGZldGNoUmVzdWx0cyA9IHRydWVcblx0XHR9XG5cdFx0Ly9zZWxlY3RlZFByb2NlZHVyZXMgPSBzZWxlY3RlZFByb2NlZHVyZXNcblx0XHR0aGlzLnByb3BzLnRvZ2dsZShmZXRjaFJlc3VsdHMsIHRoaXMuc3RhdGUuc2VsZWN0ZWRQcm9jZWR1cmVzKVxuXG5cdH1cblxuXHR0b2dnbGVEYXRhKHByb2NlZHVyZSkge1xuXHRcdGxldCBzZWxlY3RlZFByb2NlZHVyZXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUHJvY2VkdXJlc1xuXHRcdGlmIChzZWxlY3RlZFByb2NlZHVyZXMubGVuZ3RoID4gMSB8fCAoc2VsZWN0ZWRQcm9jZWR1cmVzLmxlbmd0aCA9PSAxICYmIHNlbGVjdGVkUHJvY2VkdXJlcy5pbmRleE9mKHByb2NlZHVyZS5wcm9jZWR1cmUuaWQpID09IC0xKSkge1xuXG5cdFx0XHRpZiAoc2VsZWN0ZWRQcm9jZWR1cmVzLmluZGV4T2YocHJvY2VkdXJlLnByb2NlZHVyZS5pZCkgIT0gLTEpIHtcblx0XHRcdFx0c2VsZWN0ZWRQcm9jZWR1cmVzLnNwbGljZShzZWxlY3RlZFByb2NlZHVyZXMuaW5kZXhPZihwcm9jZWR1cmUucHJvY2VkdXJlLmlkKSwgMSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNlbGVjdGVkUHJvY2VkdXJlcy5wdXNoKHByb2NlZHVyZS5wcm9jZWR1cmUuaWQpXG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRQcm9jZWR1cmVzOiBzZWxlY3RlZFByb2NlZHVyZXMgfSlcblxuXG5cdFx0fSBlbHNlIHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIFNlbGVjdCBhdCBsZWFzdCBvbmUgUHJvY2VkdXJlXCIgfSlcblx0XHRcdH0sIDUwMClcblx0XHRcdHJldHVybiBudWxsXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLW92ZXJsYXlcIiBvbkNsaWNrPXt0aGlzLnByb3BzLnRvZ2dsZX0+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IGNhbmNlbC1hcHBvaW50bWVudC1kaXYgY2FuY2VsLXBvcHVwXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3AtdG9wLWhlYWRpbmdcIj5cblx0XHRcdFx0XHRcdFNlbGVjdCBUcmVhdG1lbnQocylcblx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvY2xvc2UtYmxhY2suc3ZnXCJ9IG9uQ2xpY2s9e3RoaXMucHJvcHMudG9nZ2xlfSAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWhlYWRlciBhY3Rpb24tc2NyZWVuLWhlYWRlciBwb3AtcGFkZGluZ1wiPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwIGNhbmNlbC1hcHBvaW50bWVudC1oZWFkXCI+e3RoaXMucHJvcHMuaGVhZGluZ308L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXJtcy1jb25kaXRpb24tZGl2IG9uc2NyZWVuLXNjcm9sbFwiPlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmRhdGEucHJvY2VkdXJlX2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwga2V5KSA9PiB7XG5cblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwicG9wLXVuZGVybGluZVwiIGtleT17a2V5fT48aDQ+e2NhdGVnb3J5Lm5hbWV9PC9oND5cblxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjYXRlZ29yeS5wcm9jZWR1cmVzLm1hcCgocHJvY2VkdXJlLCBpKSA9PiB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPGxpIGtleT17YCR7aX1fYWB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInByb2NlZHVyZS1jaGVjayBjay1ieFwiIGh0bWxGb3I9e2Ake3Byb2NlZHVyZS5wcm9jZWR1cmUuaWR9X2B9Pntwcm9jZWR1cmUucHJvY2VkdXJlLm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt0aGlzLnN0YXRlLnNlbGVjdGVkUHJvY2VkdXJlcy5pbmRleE9mKHByb2NlZHVyZS5wcm9jZWR1cmUuaWQpID09IC0xID8gZmFsc2UgOiB0cnVlfSBpZD17YCR7cHJvY2VkdXJlLnByb2NlZHVyZS5pZH1fYH0gbmFtZT1cImZydWl0LTJcIiB2YWx1ZT1cIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMudG9nZ2xlRGF0YS5iaW5kKHRoaXMsIHByb2NlZHVyZSl9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qIDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJpbnMtY2hrLWJ4XCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5zZWxlY3RlZFByb2NlZHVyZXMuaW5kZXhPZihwcm9jZWR1cmUucHJvY2VkdXJlLmlkKSA9PSAtMSA/IGZhbHNlIDogdHJ1ZX0gaWQ9e2Ake3Byb2NlZHVyZS5wcm9jZWR1cmUuaWR9X2B9IG5hbWU9XCJmcnVpdC0yXCIgdmFsdWU9XCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZURhdGEuYmluZCh0aGlzLCBwcm9jZWR1cmUpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPjxsYWJlbCBodG1sRm9yPXtgJHtwcm9jZWR1cmUucHJvY2VkdXJlLmlkfV9gfT57cHJvY2VkdXJlLnByb2NlZHVyZS5uYW1lfTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4gKi99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaG9zcGl0YWxFbmFibGUgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInByLXByaWNlc1wiPuKCuSB7cHJvY2VkdXJlLmRlYWxfcHJpY2V9PHNwYW4gY2xhc3NOYW1lPVwicHItY3V0LXByaWNlXCI+4oK5IHtwcm9jZWR1cmUubXJwfTwvc3Bhbj48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInByLXByaWNlc1wiPuKCuSB7cHJvY2VkdXJlLm1ycH08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2Pilcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSA/XG5cdFx0XHRcdFx0XHRcdDxwPlBsZWFzZSBTZWxlY3QgYXQgbGVhc3Qgb25lIFByb2NlZHVyZTwvcD5cblx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2NlZHVyZXMtYnRuLXBvcFwiPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJmdy01MDBcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUxheW91dC5iaW5kKHRoaXMpfT5Eb25lPC9idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG4iLCJpbXBvcnQgUG9wVXAgZnJvbSAnLi9Qb3BVcCdcblxuZXhwb3J0IGRlZmF1bHQgUG9wVXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBJbml0aWFsc1BpY3R1cmUgZnJvbSAnLi4vLi4vLi4vY29tbW9ucy9pbml0aWFsc1BpY3R1cmUnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJztcbmltcG9ydCBQcm9jZWR1cmVQb3B1cCBmcm9tICcuLi9Qb3BVcCdcbmltcG9ydCBSYXRpbmdTdGFycyBmcm9tICcuLi8uLi8uLi9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9SYXRpbmdTdGFycyc7XG5pbXBvcnQgeyBBc3NlcnRpb25FcnJvciB9IGZyb20gJ2Fzc2VydCc7XG5pbXBvcnQgQ29tbW9uVmlwR29sZEJhZGdlIGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvY29tbW9uVmlwR29sZEJhZGdlLmpzJ1xuaW1wb3J0IENvbW1vblZpcEdvbGROb25Mb2dpbkJhZGdlIGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvY29tbW9uVmlwR29sZE5vbkxvZ2luQmFkZ2UuanMnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG5cbmNsYXNzIERvY3RvclByb2ZpbGVDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogZmFsc2UsXG4gICAgICAgICAgICBzc3JGbGFnOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8vIGlmICh3aW5kb3cpIHtcbiAgICAgICAgLy8gICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICAvLyB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzc3JGbGFnOiB0cnVlIH0pXG4gICAgfVxuXG4gICAgdmlld1Byb2ZpbGVDbGlja2VkKGlkLCB1cmwsIGhvc3BpdGFsX2lkLCBlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ09wZFNlYXJjaFZpZXdQcm9maWxlQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ29wZC1zZWFyY2gtdmlldy1wcm9maWxlLWNsaWNrZWQnLCAnc2VsZWN0ZWRJZCc6IGlkXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICBsZXQgeyBjYXRlZ29yeV9pZHMsIHByb2NlZHVyZV9pZHMgfSA9IHRoaXMudHJhY2tpbmdFdmVudHNCb29rTm93KGlkKVxuICAgICAgICB0aGlzLnByb3BzLmNsZWFyVmlwU2VsZWN0ZWRQbGFuKClcbiAgICAgICAgaWYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpIHtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5X2lkcy5sZW5ndGggfHwgcHJvY2VkdXJlX2lkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3VybH0/aG9zcGl0YWxfaWQ9JHtob3NwaXRhbF9pZH0maXNfcHJvY2VkdXJlPXRydWUmY2F0ZWdvcnlfaWRzPSR7Y2F0ZWdvcnlfaWRzfSZwcm9jZWR1cmVfaWRzPSR7cHJvY2VkdXJlX2lkc30maGlkZV9zZWFyY2hfZGF0YT10cnVlYClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgLyR7dXJsfT9ob3NwaXRhbF9pZD0ke2hvc3BpdGFsX2lkfSZoaWRlX3NlYXJjaF9kYXRhPXRydWVgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5X2lkcy5sZW5ndGggfHwgcHJvY2VkdXJlX2lkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9vcGQvZG9jdG9yLyR7aWR9P2hvc3BpdGFsX2lkPSR7aG9zcGl0YWxfaWR9JmlzX3Byb2NlZHVyZT10cnVlJmNhdGVnb3J5X2lkcz0ke2NhdGVnb3J5X2lkc30mcHJvY2VkdXJlX2lkcz0ke3Byb2NlZHVyZV9pZHN9JmhpZGVfc2VhcmNoX2RhdGE9dHJ1ZWApXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9vcGQvZG9jdG9yLyR7aWR9P2hvc3BpdGFsX2lkPSR7aG9zcGl0YWxfaWR9JmhpZGVfc2VhcmNoX2RhdGE9dHJ1ZWApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYm9va05vd0NsaWNrZWQoaWQsIHVybCwgaG9zcGl0YWxfaWQsIGUpIHtcbiAgICAgICAgLy9hbHdheXMgY2xlYXIgc2VsZWN0ZWQgdGltZSBhdCBkb2N0b3IgcHJvZmlsZVxuICAgICAgICBsZXQgc2xvdCA9IHsgdGltZToge30gfVxuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdE9wZFRpbWVTTG90KHNsb3QsIGZhbHNlKVxuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdPcGRTZWFyY2hCb29rTm93Q2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ29wZC1ib29rLW5vdy1jbGlja2VkJywgJ3NlbGVjdGVkSWQnOiBpZCwgJ2lzTm9uQm9va2FibGVQb3B1cCc6IHRoaXMucHJvcHMuaXNOb25Cb29rYWJsZVBvcHVwID8gdGhpcy5wcm9wcy5pc05vbkJvb2thYmxlUG9wdXAgOiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNOb25Cb29rYWJsZVBvcHVwKSB7XG4gICAgICAgICAgICBsZXQgbm9uQm9va2FibGVEb2NEYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTm9uQm9va2FibGVCb29rTm93UG9wdXBDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbm9uLWJvb2thYmxlLWJvb2stbm93LXBvcHVwLWNsaWNrZWQnLCAnc2VsZWN0ZWRJZCc6IGlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogbm9uQm9va2FibGVEb2NEYXRhIH0pXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHsgcHJvY2VkdXJlX2lkcyB9ID0gdGhpcy50cmFja2luZ0V2ZW50c0Jvb2tOb3coaWQpXG4gICAgICAgIHRoaXMucHJvcHMuc2F2ZVByb2ZpbGVQcm9jZWR1cmVzKCcnLCAnJywgcHJvY2VkdXJlX2lkcywgdHJ1ZSlcbiAgICAgICAgdGhpcy5wcm9wcy5jbGVhclZpcFNlbGVjdGVkUGxhbigpXG4gICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHt1cmx9L2Jvb2tpbmc/ZG9jdG9yX2lkPSR7aWR9Jmhvc3BpdGFsX2lkPSR7aG9zcGl0YWxfaWR9YClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvb3BkL2RvY3Rvci8ke2lkfS8ke2hvc3BpdGFsX2lkfS9ib29rZGV0YWlsc2ApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFja2luZ0V2ZW50c0Jvb2tOb3coaWQpIHtcbiAgICAgICAgbGV0IERpc3RhbmNlID0gJydcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5kZXRhaWxzICYmIHRoaXMucHJvcHMuZGV0YWlscy5kaXN0YW5jZSkge1xuICAgICAgICAgICAgRGlzdGFuY2UgPSAoTWF0aC5yb3VuZCh0aGlzLnByb3BzLmRldGFpbHMuZGlzdGFuY2UgKiAxMCkgLyAxMCkudG9GaXhlZCgxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb2N0b3JTZWxlY3RlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2RvY3Rvci1zZWxlY3RlZCcsICdzZWxlY3RlZElkJzogaWRcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KTtcblxuICAgICAgICBsZXQgY2F0ZWdvcnlfaWRzID0gdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gJ3Byb2NlZHVyZXNfY2F0ZWdvcnknKS5tYXAoeCA9PiB4LmlkKS5qb2luKCcsJylcbiAgICAgICAgbGV0IHByb2NlZHVyZV9pZHMgPSB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAncHJvY2VkdXJlcycpLm1hcCh4ID0+IHguaWQpLmpvaW4oJywnKVxuICAgICAgICBsZXQgY29uZGl0aW9uX2lkcyA9IHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMuZmlsdGVyKHggPT4geC50eXBlID09ICdjb25kaXRpb24nKS5tYXAoeCA9PiB4LmlkKS5qb2luKCcsJylcbiAgICAgICAgbGV0IHNwZWNpYWxpemF0aW9uX2lkcyA9IHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMuZmlsdGVyKHggPT4geC50eXBlID09ICdzcGVjaWFsaXR5JykubWFwKHggPT4geC5pZCkuam9pbignLCcpXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0RvY3RvclJhbmtJblNlYXJjaCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2RvY3Rvci1yYW5rLWluLXNlYXJjaCcsICdSYW5rJzogdGhpcy5wcm9wcy5yYW5rICsgMSwgJ0RvY3RvclNlYXJjaENvdW50JzogdGhpcy5wcm9wcy5jb3VudCwgJ3NwZWNpYWxpemF0aW9ucyc6IHNwZWNpYWxpemF0aW9uX2lkcywgJ2NvbmRpdGlvbnMnOiBjb25kaXRpb25faWRzLCAncHJvY2VkdXJlcyc6IHByb2NlZHVyZV9pZHMsICdwcm9jZWR1cmVfY2F0ZWdvcnknOiBjYXRlZ29yeV9pZHMsICdEaXN0YW5jZSc6IERpc3RhbmNlXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICByZXR1cm4gKHsgY2F0ZWdvcnlfaWRzLCBwcm9jZWR1cmVfaWRzIH0pXG5cbiAgICB9XG5cbiAgICBib29rTm93KGlkLCBlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9kb2N0b3Jwcm9maWxlLyR7aWR9L2F2YWlsYWJpbGl0eWApXG4gICAgfVxuXG4gICAgZ2V0UXVhbGlmaWNhdGlvblN0cihxdWFsaWZpY2F0aW9uU3BlY2lhbGl6YXRpb24pIHtcbiAgICAgICAgaWYgKHF1YWxpZmljYXRpb25TcGVjaWFsaXphdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBxdWFsaWZpY2F0aW9uU3BlY2lhbGl6YXRpb25bMF0ubmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXR1cm4gcXVhbGlmaWNhdGlvblNwZWNpYWxpemF0aW9uLnJlZHVjZSgoc3RyLCBjdXJyLCBpKSA9PiB7XG4gICAgICAgIC8vICAgICBzdHIgKz0gYCR7Y3Vyci5uYW1lfWBcbiAgICAgICAgLy8gICAgIGlmIChpIDwgcXVhbGlmaWNhdGlvblNwZWNpYWxpemF0aW9uLmxlbmd0aCAtIDEpIHN0ciArPSBgLCBgO1xuICAgICAgICAvLyAgICAgcmV0dXJuIHN0clxuICAgICAgICAvLyB9LCBcIlwiKVxuICAgIH1cblxuICAgIGNsYWltQnV0dG9uQ2xpY2soZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdDbGFpbUJ1dHRvbUNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjbGFpbS1idXR0b20tY2xpY2tlZCcsICdzZWxlY3RlZElkJzogdGhpcy5wcm9wcy5kZXRhaWxzLmlkXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2RvY3RvcnNpZ251cCcpO1xuICAgIH1cblxuICAgIHRvZ2dsZSh3aGljaCwgZmV0Y2hSZXN1bHRzID0gZmFsc2UsIHByb2NlZHVyZV9pZHMgPSBbXSkge1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbd2hpY2hdOiAhdGhpcy5zdGF0ZVt3aGljaF0gfSlcbiAgICAgICAgaWYgKGZldGNoUmVzdWx0cykge1xuICAgICAgICAgICAgaWYgKHByb2NlZHVyZV9pZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zYXZlQ29tbW9uUHJvY2VkdXJlcyhwcm9jZWR1cmVfaWRzKVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubWVyZ2VPUERTdGF0ZSgnJylcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlc2V0UHJvY2VkdXJlVVJsKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdvbGRDbGlja2VkKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnVmlwR29sZENsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICd2aXAtZ29sZC1jbGlja2VkJywgJ3NlbGVjdGVkSWQnOiB0aGlzLnByb3BzLmRldGFpbHMuaWRcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ZpcC1nb2xkLWRldGFpbHM/aXNfZ29sZD10cnVlJnNvdXJjZT1kb2Nnb2xkbGlzdGluZyZsZWFkX3NvdXJjZT1Eb2NwcmltZScpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IHsgaWQsIGV4cGVyaWVuY2VfeWVhcnMsIGdlbmRlciwgaG9zcGl0YWxzLCBob3NwaXRhbF9jb3VudCwgbmFtZSwgZGlzdGFuY2UsIHF1YWxpZmljYXRpb25zLCB0aHVtYm5haWwsIGV4cGVyaWVuY2VzLCBtcnAsIGRlYWxfcHJpY2UsIGdlbmVyYWxfc3BlY2lhbGl6YXRpb24sIGlzX2xpdmUsIGRpc3BsYXlfbmFtZSwgdXJsLCBpc19saWNlbnNlX3ZlcmlmaWVkLCBpc19nb2xkLCBuZXdfc2NoZW1hLCBlbmFibGVkX2Zvcl9vbmxpbmVfYm9va2luZywgZGlzY291bnRlZF9wcmljZSwgcGFyZW50X3VybCwgYXZlcmFnZV9yYXRpbmcsIHJhdGluZ19jb3VudCwgZ29vZ2xlX3JhdGluZywgZW5hYmxlZF9mb3JfY29kLCBjb2RfZGVhbF9wcmljZSB9ID0gdGhpcy5wcm9wcy5kZXRhaWxzXG5cbiAgICAgICAgbGV0IGVuYWJsZWRfZm9yX2hvc3BpdGFsX2Jvb2tpbmcgPSB0cnVlXG4gICAgICAgIGxldCBlbmFibGVkX2Zvcl9wcmVwYWlkX2Jvb2tpbmcgPSBmYWxzZVxuICAgICAgICBsZXQgaG9zcGl0YWwgPSAoaG9zcGl0YWxzICYmIGhvc3BpdGFscy5sZW5ndGgpID8gaG9zcGl0YWxzWzBdIDoge31cbiAgICAgICAgbGV0IGV4cFN0ciA9IFwiXCJcblxuICAgICAgICBpZiAoZXhwZXJpZW5jZXMgJiYgZXhwZXJpZW5jZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBleHBTdHIgKz0gXCJFWFAgLSBcIlxuICAgICAgICAgICAgZXhwZXJpZW5jZXMubWFwKChleHAsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBleHBTdHIgKz0gZXhwLmhvc3BpdGFsXG4gICAgICAgICAgICAgICAgaWYgKGkgPCBleHBlcmllbmNlcy5sZW5ndGggLSAxKSBleHBTdHIgKz0gJywgJztcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgRGlzdGFuY2UgPSAoTWF0aC5yb3VuZChkaXN0YW5jZSAqIDEwKSAvIDEwKS50b0ZpeGVkKDEpO1xuICAgICAgICBpZiAobXJwICE9IDAgJiYgZGlzY291bnRlZF9wcmljZSAhPSAwKSB7XG4gICAgICAgICAgICB2YXIgZGlzY291bnQgPSAxMDAgLSBNYXRoLnJvdW5kKChkaXNjb3VudGVkX3ByaWNlICogMTAwKSAvIG1ycCk7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKG5ld19zY2hlbWEpIHtcbiAgICAgICAgICAgICAgICBuZXdfc2NoZW1hID0gSlNPTi5zdHJpbmdpZnkobmV3X3NjaGVtYSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgbmV3X3NjaGVtYSA9IFwiXCJcbiAgICAgICAgfVxuICAgICAgICAvLyBsZXQgaXNfdmlwX2dvbGQgPSBmYWxzZVxuICAgICAgICBsZXQgaXNfcHJvY2VkdXJlID0gZmFsc2VcbiAgICAgICAgLy8gbGV0IGlzX2dvbGRfbWVtYmVyID1mYWxzZVxuICAgICAgICBpZiAoaG9zcGl0YWxzICYmIGhvc3BpdGFscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIGlzX3ZpcF9nb2xkID0gaG9zcGl0YWwuaG9zcF9pc19nb2xkIHx8IHBhcnNlZC5mcm9tR29sZFZpcFxuICAgICAgICAgICAgLy8gaXNfZ29sZF9tZW1iZXIgPSBob3NwaXRhbC5pc19nb2xkX21lbWJlclxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkQ291bnQgPSAwXG4gICAgICAgICAgICBsZXQgdW5zZWxlY3RlZENvdW50ID0gMFxuICAgICAgICAgICAgbGV0IGZpbmFsUHJvY2VkdXJlRGVhbFByaWNlID0gZGlzY291bnRlZF9wcmljZVxuICAgICAgICAgICAgbGV0IGZpbmFsUHJvY2VkdXJlTXJwID0gbXJwXG4gICAgICAgICAgICBob3NwaXRhbHNbMF0ucHJvY2VkdXJlX2NhdGVnb3JpZXMubWFwKCh4KSA9PiB7XG4gICAgICAgICAgICAgICAgaXNfcHJvY2VkdXJlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHgucHJvY2VkdXJlcy5maWx0ZXIoeCA9PiB4LmlzX3NlbGVjdGVkKS5tYXAoKHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmluYWxQcm9jZWR1cmVEZWFsUHJpY2UgKz0geC5kZWFsX3ByaWNlXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsUHJvY2VkdXJlTXJwICs9IHgubXJwXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ291bnQrK1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB1bnNlbGVjdGVkQ291bnQgKz0geC5wcm9jZWR1cmVzLmZpbHRlcih4ID0+ICF4LmlzX3NlbGVjdGVkKS5sZW5ndGhcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmIChpc19wcm9jZWR1cmUgJiYgZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoZmluYWxQcm9jZWR1cmVNcnAgIT0gMCAmJiBmaW5hbFByb2NlZHVyZURlYWxQcmljZSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc2NvdW50ID0gMTAwIC0gTWF0aC5yb3VuZCgoZmluYWxQcm9jZWR1cmVEZWFsUHJpY2UgKiAxMDApIC8gZmluYWxQcm9jZWR1cmVNcnApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZW5hYmxlZF9mb3JfaG9zcGl0YWxfYm9va2luZyA9IGhvc3BpdGFsc1swXS5lbmFibGVkX2Zvcl9vbmxpbmVfYm9va2luZ1xuICAgICAgICAgICAgZW5hYmxlZF9mb3JfcHJlcGFpZF9ib29raW5nID0gaG9zcGl0YWxzWzBdLmVuYWJsZWRfZm9yX3ByZXBhaWRcbiAgICAgICAgICAgIGlzX3Byb2NlZHVyZSA9IGZhbHNlXG5cbiAgICAgICAgICAgIGxldCBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSA9IGhvc3BpdGFsLmlzX2luc3VyYW5jZV9jb3ZlcmVkICYmIGhvc3BpdGFsLmlzX3VzZXJfaW5zdXJlZCAmJiBkZWFsX3ByaWNlIDw9IGhvc3BpdGFsLmluc3VyYW5jZV90aHJlc2hvbGRfYW1vdW50XG4gICAgICAgICAgICBsZXQgb2ZmUGVyY2VudCA9ICcnXG4gICAgICAgICAgICBpZiAobXJwICYmIChkaXNjb3VudGVkX3ByaWNlICE9IG51bGwpICYmIChkaXNjb3VudGVkX3ByaWNlIDwgbXJwKSAmJiBlbmFibGVkX2Zvcl9wcmVwYWlkX2Jvb2tpbmcpIHtcbiAgICAgICAgICAgICAgICBvZmZQZXJjZW50ID0gcGFyc2VJbnQoKChtcnAgLSBkaXNjb3VudGVkX3ByaWNlKSAvIG1ycCkgKiAxMDApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbmFibGVkX2Zvcl9jb2QgJiYgY29kX2RlYWxfcHJpY2UgIT0gbnVsbCAmJiBjb2RfZGVhbF9wcmljZSAhPSBtcnAgJiYgIWVuYWJsZWRfZm9yX3ByZXBhaWRfYm9va2luZykge1xuICAgICAgICAgICAgICAgIG9mZlBlcmNlbnQgPSBwYXJzZUludCgoKG1ycCAtIGNvZF9kZWFsX3ByaWNlKSAvIG1ycCkgKiAxMDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgaXNfdmlwX2FwcGxpY2FibGUgPSBob3NwaXRhbC5pc192aXBfbWVtYmVyICYmIGhvc3BpdGFsLmNvdmVyX3VuZGVyX3ZpcFxuICAgICAgICAgICAgLy8gbGV0IHZpcF9hbW91bnQgPSBob3NwaXRhbC52aXBfYW1vdW50ICsgaG9zcGl0YWwudmlwX2NvbnZlbmllbmNlX2Ftb3VudFxuICAgICAgICAgICAgLy8gbGV0IGlzX2VuYWJsZV9mb3JfdmlwID0gaG9zcGl0YWwuaXNfZW5hYmxlX2Zvcl92aXAgfHwgcGFyc2VkLmZyb21WaXBcbiAgICAgICAgICAgIGxldCBhdmdHb29nbGVSYXRpbmcgPSAnJ1xuICAgICAgICAgICAgbGV0IGdvb2dsZVJhdGluZ0NvdW50ID0gJydcbiAgICAgICAgICAgIGlmIChnb29nbGVfcmF0aW5nICYmIGdvb2dsZV9yYXRpbmcuYXZnX3JhdGluZyAmJiBnb29nbGVfcmF0aW5nLnJhdGluZ19jb3VudCkge1xuICAgICAgICAgICAgICAgIGF2Z0dvb2dsZVJhdGluZyA9IGdvb2dsZV9yYXRpbmcuYXZnX3JhdGluZ1xuICAgICAgICAgICAgICAgIGdvb2dsZVJhdGluZ0NvdW50ID0gZ29vZ2xlX3JhdGluZy5yYXRpbmdfY291bnQgfHwgJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpc19pbnN1cmFuY2VfYnV5X2FibGUgPSBob3NwaXRhbC5pc19pbnN1cmFuY2VfY292ZXJlZCAmJiAhaG9zcGl0YWwuaXNfdXNlcl9pbnN1cmVkICYmIGRlYWxfcHJpY2UgPD0gaG9zcGl0YWwuaW5zdXJhbmNlX3RocmVzaG9sZF9hbW91bnRcbiAgICAgICAgICAgIGxldCBpbnN1cmFuY2VfbGltaXRfbWVzc2FnZSA9IGhvc3BpdGFsLmluc3VyYW5jZV9saW1pdF9tZXNzYWdlXG4gICAgICAgICAgICBsZXQgcXVhbGlmaWNhdGlvbnNBcnJheSA9IFtdO1xuICAgICAgICAgICAgaWYgKHF1YWxpZmljYXRpb25zICYmIHF1YWxpZmljYXRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHF1YWxpZmljYXRpb25zQXJyYXkgPSBxdWFsaWZpY2F0aW9ucy5maWx0ZXIoeCA9PiB4LnF1YWxpZmljYXRpb24ubGVuZ3RoIDw9IDYpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBsZXQgdmlwX2dvbGRfcHJpY2UgPSAoaG9zcGl0YWwudmlwX2NvbnZlbmllbmNlX2Ftb3VudCArIGhvc3BpdGFsLnZpcF9nb2xkX3ByaWNlIHx8IDApXG4gICAgICAgICAgICAvLyBpZiAoIWlzX3ZpcF9hcHBsaWNhYmxlICYmICFwYXJzZWQuZnJvbVZpcCkge1xuICAgICAgICAgICAgLy8gICAgIGlzX2VuYWJsZV9mb3JfdmlwID0gcGFyc2VkLmZyb21Hb2xkVmlwIHx8IChpc19nb2xkX21lbWJlciAmJiBpc192aXBfZ29sZCkgPyBmYWxzZSA6IGlzX2VuYWJsZV9mb3JfdmlwXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBpc19sYWJvcGRfZW5hYmxlX2Zvcl92aXAgPSBob3NwaXRhbC5pc19lbmFibGVfZm9yX3ZpcCBcbiAgICAgICAgICAgIGxldCBpc19sYWJvcGRfZW5hYmxlX2Zvcl9nb2xkID0gaG9zcGl0YWwuaG9zcF9pc19nb2xkIHx8IHBhcnNlZC5mcm9tR29sZFZpcFxuICAgICAgICAgICAgbGV0IGlzX3ZpcF9tZW1iZXIgPSBob3NwaXRhbC5pc192aXBfbWVtYmVyXG4gICAgICAgICAgICBsZXQgaXNfZ29sZF9tZW1iZXIgPSBob3NwaXRhbC5pc19nb2xkX21lbWJlclxuICAgICAgICAgICAgbGV0IGNvdmVyZWRfdW5kZXJfdmlwICA9IGhvc3BpdGFsLmNvdmVyX3VuZGVyX3ZpcFxuICAgICAgICAgICAgbGV0IHZpcCA9e31cbiAgICAgICAgICAgIHZpcC52aXBfYW1vdW50ID0gaG9zcGl0YWwudmlwX2Ftb3VudFxuICAgICAgICAgICAgdmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnQgPSBob3NwaXRhbC52aXBfY29udmVuaWVuY2VfYW1vdW50XG4gICAgICAgICAgICB2aXAudmlwX2dvbGRfcHJpY2UgPSBob3NwaXRhbC52aXBfZ29sZF9wcmljZVxuXG4gICAgICAgICAgICBsZXQgc2hvd19jb21tb25fcHJpY2VzID0gIWlzX2xhYm9wZF9lbmFibGVfZm9yX3ZpcCB8fCAoIChpc19nb2xkX21lbWJlciB8fCBpc192aXBfbWVtYmVyICkgJiYgIWNvdmVyZWRfdW5kZXJfdmlwIClcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdpc192aXBfYXBwbGljYWJsZScraXNfdmlwX2FwcGxpY2FibGUpO2NvbnNvbGUubG9nKCdpc192aXBfZ29sZCcraXNfdmlwX2dvbGQpO2NvbnNvbGUubG9nKCd2aXBfZ29sZF9wcmljZScrdmlwX2dvbGRfcHJpY2UpO2NvbnNvbGUubG9nKCdkaXNjdW50ZWRfcHJpY2UnK2Rpc2NvdW50ZWRfcHJpY2UpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNzdG0tZG9jQ2FyZCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld19zY2hlbWEgJiYgIXRoaXMucHJvcHMuaXNIb3NwaXRhbFBhZ2UgPyA8c2NyaXB0IHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IG5ld19zY2hlbWFcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3RtLWRvY0NhcmQtY29udGVudFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCIgc3R5bGU9e3twYWRkaW5nQm90dG9tOjEwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt1cmwgPyBgLyR7dXJsfWAgOiBgL29wZC9kb2N0b3IvJHtpZH1gfSBvbkNsaWNrPXt0aGlzLnZpZXdQcm9maWxlQ2xpY2tlZC5iaW5kKHRoaXMsIGlkLCB1cmwsIGhvc3BpdGFsLmhvc3BpdGFsX2lkIHx8ICcnKX0gdGl0bGU9e2Rpc3BsYXlfbmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY3N0bURvY05hbWVcIj57ZGlzcGxheV9uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3RtLWRvYy1kZXRhaWxzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3RtLWRvYy1pbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dGh1bWJuYWlsfSBvbkNsaWNrPXt0aGlzLnZpZXdQcm9maWxlQ2xpY2tlZC5iaW5kKHRoaXMsIGlkLCB1cmwsIGhvc3BpdGFsLmhvc3BpdGFsX2lkIHx8ICcnKX0gdGl0bGU9e2Rpc3BsYXlfbmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5pdGlhbHNQaWN0dXJlIG5hbWU9e25hbWV9IGhhc19pbWFnZT17ISF0aHVtYm5haWx9IGNsYXNzTmFtZT1cImluaXRpYWxzUGljdHVyZS1kcyBmbHRyLWluaXRpYWxQaWN0dXJlLWRzXCIgc3R5bGU9e3sgd2lkdGg6IDUwLCBoZWlnaHQ6IDUwLCBmb250U2l6ZTogJzEuNWVtJyB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctcm91bmRcIiBzcmM9e3RodW1ibmFpbH0gYWx0PXtkaXNwbGF5X25hbWV9IHRpdGxlPXtkaXNwbGF5X25hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0luaXRpYWxzUGljdHVyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19saWNlbnNlX3ZlcmlmaWVkICYmIGVuYWJsZWRfZm9yX29ubGluZV9ib29raW5nID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjc3RtLXZhcmlmeVwiPlZlcmlmaWVkPC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3RtLWRvYy1jb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57dGhpcy5nZXRRdWFsaWZpY2F0aW9uU3RyKGdlbmVyYWxfc3BlY2lhbGl6YXRpb24gfHwgW10pfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWFsaWZpY2F0aW9ucyAmJiBxdWFsaWZpY2F0aW9ucy5sZW5ndGggJiYgcXVhbGlmaWNhdGlvbnNBcnJheS5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbGlmaWNhdGlvbnNBcnJheS5tYXAoKHF1YWxpZmljYXRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGtleT17aW5kZXh9PntxdWFsaWZpY2F0aW9uLnF1YWxpZmljYXRpb259IHsoaW5kZXggPCBxdWFsaWZpY2F0aW9uc0FycmF5Lmxlbmd0aCAtIDEpICYmIChpbmRleCAhPSAyKSA/ICd8ICcgOiAnJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlcmllbmNlX3llYXJzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDUgfX0+e2V4cGVyaWVuY2VfeWVhcnN9IFllYXJzIEV4cGVyaWVuY2U8L2gzPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWwgJiYgaG9zcGl0YWwudGltaW5ncyAmJiBPYmplY3Qua2V5cyhob3NwaXRhbC50aW1pbmdzKS5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWwudGltaW5nc1tPYmplY3Qua2V5cyhob3NwaXRhbC50aW1pbmdzKVswXV0ubWFwKCh0aW1lLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8cCBrZXk9e2luZGV4fSBzdHlsZT17aW5kZXggPT0gMCA/IHt9IDogeyBtYXJnaW5MZWZ0OiAxOCB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID09IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY3N0bVRpbWVJbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy93YXRjaC1kYXRlLnN2Z1wifSAvPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZlcmFnZV9yYXRpbmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYXRpbmdTdGFycyBhdmVyYWdlX3JhdGluZz17YXZlcmFnZV9yYXRpbmd9IHJhdGluZ19jb3VudD17cmF0aW5nX2NvdW50IHx8ICcnfSB3aWR0aD1cIjEycHhcIiBoZWlnaHQ9XCIxMnB4XCIgLz4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNCBib29raW5nLWNvbHVtblwiIHN0eWxlPXttcnAgPT0gMCA/IHsgcGFkZGluZ1RvcDogNDAgfSA6IHt9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UgJiYgIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmIGVuYWJsZWRfZm9yX2hvc3BpdGFsX2Jvb2tpbmcgJiYgbXJwICE9IDAgJiYgdGhpcy5zdGF0ZS5zc3JGbGFnICYmICEoKGlzX3ZpcF9tZW1iZXIgfHwgaXNfZ29sZF9tZW1iZXIpICYmIGNvdmVyZWRfdW5kZXJfdmlwKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNzdG0tZG9jLXByaWNlXCI+RG9jcHJpbWUgUHJpY2U8L3A+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAgKCFpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiAhc2hvd19jb21tb25fcHJpY2VzKT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbW9uVmlwR29sZEJhZGdlIGlzX2xhYm9wZF9lbmFibGVfZm9yX3ZpcD17aXNfbGFib3BkX2VuYWJsZV9mb3JfdmlwfSBpc19sYWJvcGRfZW5hYmxlX2Zvcl9nb2xkPXtpc19sYWJvcGRfZW5hYmxlX2Zvcl9nb2xkfSBpc192aXBfbWVtYmVyPXtpc192aXBfbWVtYmVyfSBpc19nb2xkX21lbWJlcj17aXNfZ29sZF9tZW1iZXJ9IGNvdmVyZWRfdW5kZXJfdmlwPXtjb3ZlcmVkX3VuZGVyX3ZpcH0gaXNfZG9jPXt0cnVlfSB2aXBfZGF0YT17dmlwfSB7Li4udGhpcy5wcm9wc30gbXJwPXttcnB9IGRpc2NvdW50ZWRfcHJpY2U9e2Rpc2NvdW50ZWRfcHJpY2V9IGVuYWJsZWRfZm9yX2hvc3BpdGFsX2Jvb2tpbmc9e2VuYWJsZWRfZm9yX2hvc3BpdGFsX2Jvb2tpbmd9IGdvbGRDbGlja2VkPXt0aGlzLmdvbGRDbGlja2VkLmJpbmQodGhpcyl9IGRlYWxfcHJpY2U9e2RlYWxfcHJpY2V9IC8+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNzdC1kb2MtcHJpY2VcIj7igrkgezB9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtdmFsLWJ4XCI+Q292ZXJlZCBVbmRlciBJbnN1cmFuY2U8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzaG93X2NvbW1vbl9wcmljZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP2VuYWJsZWRfZm9yX2NvZCAmJiBjb2RfZGVhbF9wcmljZSAhPSBudWxsICYmICFlbmFibGVkX2Zvcl9wcmVwYWlkX2Jvb2tpbmcgJiYgZW5hYmxlZF9mb3Jfb25saW5lX2Jvb2tpbmcgJiYgY29kX2RlYWxfcHJpY2UgIT0gbXJwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNzdC1kb2MtcHJpY2VcIj7igrkge2NvZF9kZWFsX3ByaWNlfSA8c3BhbiBjbGFzc05hbWU9XCJjc3RtLWRvYy1jdXQtcHJpY2VcIj7igrkge21ycH0gPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZW5hYmxlZF9mb3JfY29kICYmIGNvZF9kZWFsX3ByaWNlICE9IG51bGwgJiYgIWVuYWJsZWRfZm9yX3ByZXBhaWRfYm9va2luZyAmJiBlbmFibGVkX2Zvcl9vbmxpbmVfYm9va2luZyAmJiBjb2RfZGVhbF9wcmljZSA9PSBtcnAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNzdC1kb2MtcHJpY2VcIj7igrkge2NvZF9kZWFsX3ByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVuYWJsZWRfZm9yX2hvc3BpdGFsX2Jvb2tpbmcgJiYgKGRpc2NvdW50ZWRfcHJpY2UgIT0gbnVsbCkgJiYgZGlzY291bnRlZF9wcmljZSAhPSBtcnAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjc3QtZG9jLXByaWNlXCI+4oK5IHtkaXNjb3VudGVkX3ByaWNlfSA8c3BhbiBjbGFzc05hbWU9XCJjc3RtLWRvYy1jdXQtcHJpY2VcIj7igrkge21ycH0gPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtcnAgJiYgbXJwICE9IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3N0LWRvYy1wcmljZVwiPuKCuSB7bXJwfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbXJwICE9IG51bGwgJiYgZW5hYmxlZF9mb3JfaG9zcGl0YWxfYm9va2luZyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmlsdHItb2ZmZXIgb2ZyLXJpYmJvbiBmcmVlLW9mci1yaWJib24gZnctNzAwXCI+RnJlZSBDb25zdWx0YXRpb248L3NwYW4+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmIGVuYWJsZWRfZm9yX2hvc3BpdGFsX2Jvb2tpbmcgJiYgb2ZmUGVyY2VudCAmJiBvZmZQZXJjZW50ID4gMCAmJiBzaG93X2NvbW1vbl9wcmljZXMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjc3RtLWNwblwiPntvZmZQZXJjZW50fSUgT2ZmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVhbF9wcmljZSAhPSBkaXNjb3VudGVkX3ByaWNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGJyIC8+KGluY2x1ZGVzIENvdXBvbik8L3NwYW4+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAgKCFpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiAhc2hvd19jb21tb25fcHJpY2VzKT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tb25WaXBHb2xkTm9uTG9naW5CYWRnZSBpc19sYWJvcGRfZW5hYmxlX2Zvcl92aXA9e2lzX2xhYm9wZF9lbmFibGVfZm9yX3ZpcH0gaXNfbGFib3BkX2VuYWJsZV9mb3JfZ29sZD17aXNfbGFib3BkX2VuYWJsZV9mb3JfZ29sZH0gaXNfdmlwX21lbWJlcj17aXNfdmlwX21lbWJlcn0gaXNfZ29sZF9tZW1iZXI9e2lzX2dvbGRfbWVtYmVyfSBjb3ZlcmVkX3VuZGVyX3ZpcD17Y292ZXJlZF91bmRlcl92aXB9IGlzX2RvYz17dHJ1ZX0gdmlwX2RhdGE9e3ZpcH0gey4uLnRoaXMucHJvcHN9IG1ycD17bXJwfSBkaXNjb3VudGVkX3ByaWNlPXtkaXNjb3VudGVkX3ByaWNlfSBlbmFibGVkX2Zvcl9ob3NwaXRhbF9ib29raW5nPXtlbmFibGVkX2Zvcl9ob3NwaXRhbF9ib29raW5nfSBnb2xkQ2xpY2tlZD17dGhpcy5nb2xkQ2xpY2tlZC5iaW5kKHRoaXMpfSBkZWFsX3ByaWNlPXtkZWFsX3ByaWNlfSAvPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNzdC1kb2MtcHJpY2VcIj7igrkgezB9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy12YWwtYnhcIj5Db3ZlcmVkIFVuZGVyIEluc3VyYW5jZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJycqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmIGVuYWJsZWRfZm9yX2hvc3BpdGFsX2Jvb2tpbmcgJiYgaXNfZW5hYmxlX2Zvcl92aXAgJiYgIWlzX3ZpcF9hcHBsaWNhYmxlICYmICFpc192aXBfZ29sZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1lbmRcIiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgbWFyZ2luVG9wOiA1LCBtYXJnaW5Cb3R0b206IDUsIHBvc2l0aW9uOiAncmVsYXRpdmUnLCB6SW5kZXg6IDEgfX0gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsZWFyVmlwU2VsZWN0ZWRQbGFuKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy92aXAtY2x1Yi1kZXRhaWxzP3NvdXJjZT1kb2N0b3JsaXN0aW5nJmxlYWRfc291cmNlPURvY3ByaW1lJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0RvY3RvckNhcmRWSVBDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnZG9jdG9yLWNhcmQtdmlwLWNsaWNrZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGdybi10eHQtdmlwXCI+U2F2ZSA3MCUgd2l0aDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcGxvZy5wbmcnfSBzdHlsZT17eyB3aWR0aDogMTgsIG1hcmdpbkxlZnQ6IDQsIG1hcmdpblJpZ2h0OiAyIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmcnfSBzdHlsZT17eyB0cmFuc2Zvcm06ICdyb3RhdGUoLTkwZGVnKScgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiFpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiAhaXNfZ29sZF9tZW1iZXIgJiYgZW5hYmxlZF9mb3JfaG9zcGl0YWxfYm9va2luZyAmJiAhaXNfdmlwX2FwcGxpY2FibGUgJiYgaXNfdmlwX2dvbGQgJiYgIXBhcnNlZC5mcm9tVmlwICYmIChkaXNjb3VudGVkX3ByaWNlID4gdmlwX2dvbGRfcHJpY2UpID8gPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1lbmQgZ29sZENhcmRcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmdvbGRDbGlja2VkKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJnbGQtY2QtaWNvblwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZ29sZC1zbS5wbmcnfS8+IDxwIGNsYXNzTmFtZT1cImdsZC1wLXJjXCI+UHJpY2U8L3A+IDxzcGFuIGNsYXNzTmFtZT1cImdsZC1yYXRlLWxmXCI+4oK5IHtob3NwaXRhbC52aXBfY29udmVuaWVuY2VfYW1vdW50ICsgaG9zcGl0YWwudmlwX2dvbGRfcHJpY2UgfHwgMH08L3NwYW4+PGltZyBzdHlsZT17e3RyYW5zZm9ybTogJ3JvdGF0ZSgtOTBkZWcpJyx3aWR0aDogJzEwcHgnfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmcnfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJyovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZF9mb3JfaG9zcGl0YWxfYm9va2luZyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjc3RtLWJvb2stYnRuXCIgb25DbGljaz17dGhpcy5ib29rTm93Q2xpY2tlZC5iaW5kKHRoaXMsIGlkLCB1cmwsIGhvc3BpdGFsLmhvc3BpdGFsX2lkIHx8ICcnKX0+Qm9vayBOb3c8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjc3RtLXZpZXctYnRuXCIgb25DbGljaz17dGhpcy52aWV3UHJvZmlsZUNsaWNrZWQuYmluZCh0aGlzLCBpZCwgdXJsLCBob3NwaXRhbC5ob3NwaXRhbF9pZCB8fCAnJyl9PlZpZXcgQ29udGFjdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19pbnN1cmFuY2VfYnV5X2FibGUgJiYgdGhpcy5wcm9wcy5jb21tb25fc2V0dGluZ3MgJiYgdGhpcy5wcm9wcy5jb21tb25fc2V0dGluZ3MuaW5zdXJhbmNlX2F2YWlsYWJpbGl0eSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLWJ1eWFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJvb2sgdGhpcyBEb2N0b3IgZm9yIOKCuTAgd2l0aCBPUEQgSW5zdXJhbmNlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnS25vd01vcmVEb2N0b3JDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAna25vdy1tb3JlLWRvY3Rvci1jbGlja2VkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaW5zdXJhbmNlL2luc3VyYW5jZS1wbGFucz9zb3VyY2U9ZG9jdG9yLWxpc3Rpbmcmc2hvd19idXR0b249dHJ1ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5Lbm93IG1vcmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc19pbnN1cmFuY2VfYnV5X2FibGUgJiYgdGhpcy5wcm9wcy5jb21tb25fc2V0dGluZ3MgJiYgdGhpcy5wcm9wcy5jb21tb25fc2V0dGluZ3MuaW5zdXJhbmNlX2F2YWlsYWJpbGl0eT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ge2luc3VyYW5jZV9saW1pdF9tZXNzYWdlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3RtQ2FyZEZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3RtZm9vdGVyQ29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWwudXJsICYmIGhvc3BpdGFsLnVybC5sZW5ndGggJiYgIXRoaXMucHJvcHMuaXNIb3NwaXRhbFBhZ2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxpbWcgc3R5bGU9e3sgd2lkdGg6ICcxNnB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jc3RtaG9tZS5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgLyR7aG9zcGl0YWwudXJsfWB9IHN0eWxlPXt7IGNvbG9yOiAnIzAwMCcgfX0gb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHtob3NwaXRhbC51cmx9YClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3NwaXRhbC5ob3NwaXRhbF9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3BpdGFsX2NvdW50ID4gMSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gJmFtcDsge2hvc3BpdGFsX2NvdW50IC0gMX0gTW9yZSA8L3NwYW4+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLmlzSG9zcGl0YWxQYWdlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48aW1nIHN0eWxlPXt7IHdpZHRoOiAnMTZweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3N0bWhvbWUuc3ZnXCJ9IC8+e2hvc3BpdGFsLmhvc3BpdGFsX25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3BpdGFsX2NvdW50ID4gMSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+ICZhbXA7IHtob3NwaXRhbF9jb3VudCAtIDF9IE1vcmUgPC9zcGFuPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8aDM+PGltZyBzdHlsZT17eyB3aWR0aDogJzE2cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NzdG1ob21lLnN2Z1wifSAvPntob3NwaXRhbC5ob3NwaXRhbF9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3NwaXRhbF9jb3VudCA+IDEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiAmYW1wOyB7aG9zcGl0YWxfY291bnQgLSAxfSBNb3JlIDwvc3Bhbj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnb29nbGVfcmF0aW5nICYmIGF2Z0dvb2dsZVJhdGluZyAmJiBnb29nbGVSYXRpbmdDb3VudCAmJiAhYXZlcmFnZV9yYXRpbmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCIgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDIwLCBtYXJnaW5Cb3R0b206IDggfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhdGluZ1N0YXJzIGF2ZXJhZ2VfcmF0aW5nPXthdmdHb29nbGVSYXRpbmd9IHJhdGluZ19jb3VudD17Z29vZ2xlUmF0aW5nQ291bnR9IHdpZHRoPVwiMTJweFwiIGhlaWdodD1cIjEycHhcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9wb3dlcmVkX2J5X2dvb2dsZV9vbl93aGl0ZS5wbmcnfSBzdHlsZT17eyB3aWR0aDogMTAwLCBtYXJnaW5MZWZ0OiA2IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudF91cmwgJiYgcGFyZW50X3VybC5sZW5ndGggJiYgIXRoaXMucHJvcHMuaXNIb3NwaXRhbFBhZ2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC8ke3BhcmVudF91cmx9YH0gb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHtwYXJlbnRfdXJsfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi1ybXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJzEwcHgnLCBtYXJnaW5MZWZ0OiAnM3B4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9uZXctbG9jLWljby5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvc3BpdGFsLnNob3J0X2FkZHJlc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItcm12XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJzEwcHgnLCBtYXJnaW5MZWZ0OiAnM3B4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9uZXctbG9jLWljby5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG9zcGl0YWwuc2hvcnRfYWRkcmVzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3N0bURvY0xvY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3N0bWRpc3Quc3ZnXCJ9IC8+e0Rpc3RhbmNlfSZuYnNwO2ttPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgLy8gPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItY2FyZC1kbCBtYi0zXCIgPlxuICAgICAgICAgICAgICAgIC8vICAgICB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBuZXdfc2NoZW1hID8gPHNjcmlwdCB0eXBlPVwiYXBwbGljYXRpb24vbGQranNvblwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgX19odG1sOiBuZXdfc2NoZW1hXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlzX2dvbGQgP1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ29sZC1jYXJkLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2dvbGQuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiZmx0ci1jcmQtdG9wLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VvRnJpZW5kbHkgP1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsdHItbGN0bi1kdGxzXCIgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDQ1IH19PlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudF91cmwgJiYgcGFyZW50X3VybC5sZW5ndGggP1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwYXJlbnRfdXJsfSBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3BhcmVudF91cmx9YClcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmx0ci1sb2MtaWNvXCIgd2lkdGg9XCIxMnB4XCIgaGVpZ2h0PVwiMThweFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL21hcC1tYXJrZXItYmx1ZS5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aG9zcGl0YWwuc2hvcnRfYWRkcmVzc308L3NwYW4+IHtob3NwaXRhbC5zaG9ydF9hZGRyZXNzID8gXCIgfCBcIiA6IFwiXCJ9PHNwYW4+e0Rpc3RhbmNlfSBLbTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmbHRyLWxvYy1pY29cIiB3aWR0aD1cIjEycHhcIiBoZWlnaHQ9XCIxOHB4XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvbWFwLW1hcmtlci1ibHVlLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2hvc3BpdGFsLnNob3J0X2FkZHJlc3N9PC9zcGFuPiB7aG9zcGl0YWwuc2hvcnRfYWRkcmVzcyA/IFwiIHwgXCIgOiBcIlwifTxzcGFuPntEaXN0YW5jZX0gS208L3NwYW4+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDogPGRpdiBjbGFzc05hbWU9XCJmbHRyLWxjdG4tZHRsc1wiPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudF91cmwgJiYgcGFyZW50X3VybC5sZW5ndGggP1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwYXJlbnRfdXJsfSBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3BhcmVudF91cmx9YClcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmx0ci1sb2MtaWNvXCIgd2lkdGg9XCIxMnB4XCIgaGVpZ2h0PVwiMThweFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL21hcC1tYXJrZXItYmx1ZS5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbHRyLWxvYy10eHRcIj57aG9zcGl0YWwuc2hvcnRfYWRkcmVzc308L3NwYW4+IHtob3NwaXRhbC5zaG9ydF9hZGRyZXNzID8gXCIgfCBcIiA6IFwiXCJ9PHNwYW4+e0Rpc3RhbmNlfSBLbTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmbHRyLWxvYy1pY29cIiB3aWR0aD1cIjEycHhcIiBoZWlnaHQ9XCIxOHB4XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvbWFwLW1hcmtlci1ibHVlLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmx0ci1sb2MtdHh0XCI+e2hvc3BpdGFsLnNob3J0X2FkZHJlc3N9PC9zcGFuPiB7aG9zcGl0YWwuc2hvcnRfYWRkcmVzcyA/IFwiIHwgXCIgOiBcIlwifTxzcGFuPntEaXN0YW5jZX0gS208L3NwYW4+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCIgPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIG1ydC0xMFwiPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8YSBocmVmPXt1cmwgPyBgLyR7dXJsfWAgOiBgL29wZC9kb2N0b3IvJHtpZH1gfSBvbkNsaWNrPXt0aGlzLnZpZXdQcm9maWxlQ2xpY2tlZC5iaW5kKHRoaXMsIGlkLCB1cmwsIGhvc3BpdGFsLmhvc3BpdGFsX2lkIHx8ICcnKX0gdGl0bGU9e2Rpc3BsYXlfbmFtZX0+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgZm9udFNpemU6IDE2LCBwYWRkaW5nTGVmdDogOCwgcGFkZGluZ1JpZ2h0OiA1MCB9fSBjbGFzc05hbWU9XCJsYWItZmx0ci1kYy1uYW1lIGZ3LTUwMFwiPntkaXNwbGF5X25hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBlbmFibGVkX2Zvcl9ob3NwaXRhbF9ib29raW5nICYmIGRpc2NvdW50ICYmIGRpc2NvdW50ICE9IDAgP1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbHRyLW9mZmVyIG9mci1yaWJib24gZnctNzAwXCI+e2Rpc2NvdW50fSUgT2ZmPC9zcGFuPiA6ICcnXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgIWRpc2NvdW50ZWRfcHJpY2UgJiYgIWlzX3Byb2NlZHVyZSAmJiBlbmFibGVkX2Zvcl9ob3NwaXRhbF9ib29raW5nID9cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWx0ci1vZmZlciBvZnItcmliYm9uIGZyZWUtb2ZyLXJpYmJvbiBmdy03MDBcIj5GcmVlIENvbnN1bHRhdGlvbjwvc3Bhbj4gOiAnJ1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNyBtcnQtMTBcIj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctbmQtZHRsc1wiIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyB9fSA+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsdHItY3JkLWltZyB0ZXh0LWNlbnRlclwiIHN0eWxlPXt7IHdpZHRoOiA2MCB9fSA+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPEluaXRpYWxzUGljdHVyZSBuYW1lPXtuYW1lfSBoYXNfaW1hZ2U9eyEhdGh1bWJuYWlsfSBjbGFzc05hbWU9XCJpbml0aWFsc1BpY3R1cmUtZHMgZmx0ci1pbml0aWFsUGljdHVyZS1kc1wiPjxpbWcgY2xhc3NOYW1lPVwiZmx0ci11c3ItaW1hZ2UgaW1nLXJvdW5kXCIgc3JjPXt0aHVtYm5haWx9IGFsdD17ZGlzcGxheV9uYW1lfSB0aXRsZT17ZGlzcGxheV9uYW1lfSAvPjwvSW5pdGlhbHNQaWN0dXJlPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHtpc19saWNlbnNlX3ZlcmlmaWVkICYmIGVuYWJsZWRfZm9yX29ubGluZV9ib29raW5nID8gPHNwYW4gY2xhc3NOYW1lPVwiZmx0ci1ydG5nXCI+VmVyaWZpZWQ8L3NwYW4+IDogJyd9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT1cImZsdHItc3ViLXJ0bmdcIj40LjUgPGltZyBzcmM9XCIvYXNzZXRzL2ltZy9jdXN0b21lci1pY29ucy9zdGFyLnN2Z1wiIC8+PC9zcGFuPiAqL31cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWRfZm9yX29ubGluZV9ib29raW5nID8gJycgOiA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmNsYWltQnV0dG9uQ2xpY2soZSl9IGNsYXNzTmFtZT1cImZsdHItYmtuZy1idG4gY2xhaW0tYnRuIHRleHQtY2VudGVyXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCB9fT5DbGFpbSB0aGlzIHByb2ZpbGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JkLWRjdHItZHRsc1wiPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmdy01MDBcIj57dGhpcy5nZXRRdWFsaWZpY2F0aW9uU3RyKGdlbmVyYWxfc3BlY2lhbGl6YXRpb24gfHwgW10pfTwvaDM+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRldGFpbHMucXVhbGlmaWNhdGlvbnMgJiYgdGhpcy5wcm9wcy5kZXRhaWxzLnF1YWxpZmljYXRpb25zLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMiwgaGVpZ2h0OiAxNiB9fT5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGV0YWlscy5xdWFsaWZpY2F0aW9ucy5maWx0ZXIoeCA9PiB4LnF1YWxpZmljYXRpb24ubGVuZ3RoIDw9IDYpLm1hcCgocXVhbGlmaWNhdGlvbiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPD0gMSkge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8aDMgY2xhc3NOYW1lPVwiZnctNTAwIGlubGluZS1oZWFkXCIgaWQ9e2BpbmxpbmUtaGVhZC0ke2l9YH0ga2V5PXtpfT57cXVhbGlmaWNhdGlvbi5xdWFsaWZpY2F0aW9ufTwvaDM+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlcmllbmNlX3llYXJzID8gPGgzIGNsYXNzTmFtZT1cImZ3LTUwMFwiPntleHBlcmllbmNlX3llYXJzfSBZZWFycyBvZiBFeHBlcmllbmNlPC9oMz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTUgbXJ0LTEwIHRleHQtcmlnaHRcIiBzdHlsZT17eyBwYWRkaW5nTGVmdDogOCB9fSA+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWRfZm9yX2hvc3BpdGFsX2Jvb2tpbmcgP1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsdHItcHJpY2VzXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiA0IH19PlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmI3gyMEI5OyB7aXNfcHJvY2VkdXJlID8gZmluYWxQcm9jZWR1cmVEZWFsUHJpY2UgOiBkaXNjb3VudGVkX3ByaWNlfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19wcm9jZWR1cmVcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZpbmFsUHJvY2VkdXJlTXJwICE9IGZpbmFsUHJvY2VkdXJlRGVhbFByaWNlID8gPHNwYW4gY2xhc3NOYW1lPVwiZmx0ci1jdXQtcHJpY2VcIj4mI3gyMEI5OyB7ZmluYWxQcm9jZWR1cmVNcnB9PC9zcGFuPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1ycCAhPSBkaXNjb3VudGVkX3ByaWNlID8gPHNwYW4gY2xhc3NOYW1lPVwiZmx0ci1jdXQtcHJpY2VcIj4mI3gyMEI5OyB7bXJwfTwvc3Bhbj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgOiBpc19wcm9jZWR1cmUgP1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbHRyLXByaWNlc1wiIHN0eWxlPXt7IG1hcmdpblRvcDogNCB9fT5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjeDIwQjk7e2ZpbmFsUHJvY2VkdXJlTXJwfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbXJwICYmIG1ycCAhPSAwID9cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsdHItcHJpY2VzXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiA0IH19PlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjeDIwQjk7e21ycH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgey8qIGNvZGUgZm9yIG5ldyBwcmljaW5nIFVJIChleGNsdXNpdmUgZG9jcHJpbWUgcHJpY2UpICovfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB7Lyoge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZF9mb3JfaG9zcGl0YWxfYm9va2luZyA/XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1wcmljZS1kdGxzLWRpdiBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfcHJvY2VkdXJlXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmaW5hbFByb2NlZHVyZU1ycCAhPSBmaW5hbFByb2NlZHVyZURlYWxQcmljZSA/XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBkcC1wcmljZVwiPkRvY3RvciBmZWUgOiAmI3gyMEI5OyB7ZmluYWxQcm9jZWR1cmVNcnB9PC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtcnAgIT0gZGlzY291bnRlZF9wcmljZSA/IDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBkcC1wcmljZVwiPkRvY3RvciBmZWUgOiAmI3gyMEI5OyB7bXJwfTwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBleGNsc3YtcHJpY2VcIj5Eb2NwcmltZSBmZWUgOiAmI3gyMEI5OyB7aXNfcHJvY2VkdXJlID8gZmluYWxQcm9jZWR1cmVEZWFsUHJpY2UgOiBkaXNjb3VudGVkX3ByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaXNfcHJvY2VkdXJlID9cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1wcmljZS1kdGxzLWRpdiBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBkcC1wcmljZVwiPkRvY3RvciBmZWUgOiAmI3gyMEI5OyB7ZmluYWxQcm9jZWR1cmVNcnB9PC9wPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtcnAgP1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1wcmljZS1kdGxzLWRpdiBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgZHAtcHJpY2VcIj5Eb2N0b3IgZmVlIDogJiN4MjBCOTsge21ycH08L3A+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9ICovfVxuXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGRlYWxfcHJpY2UgIT0gZGlzY291bnRlZF9wcmljZSAmJiBlbmFibGVkX2Zvcl9ob3NwaXRhbF9ib29raW5nID8gPGRpdiBjbGFzc05hbWU9XCJzaWdudXAtb2ZmLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpZ251cC1vZmYtZG9jLWdyZWVuXCIgc3R5bGU9e3sgZm9udFNpemU6IDEyIH19ID5JbmNsdWRlcyBjb3Vwb24gZGlzY291bnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgbXJ0LTEwXCI+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWRfZm9yX2hvc3BpdGFsX2Jvb2tpbmcgP1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3VybH0gb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbHRyLWNudGN0LWJ0biBidG4tcGRuZ1wiIG9uQ2xpY2s9e3RoaXMudmlld1Byb2ZpbGVDbGlja2VkLmJpbmQodGhpcywgaWQsIHVybCwgaG9zcGl0YWwuaG9zcGl0YWxfaWQgfHwgJycpfT5WaWV3IFByb2ZpbGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5ib29rTm93Q2xpY2tlZC5iaW5kKHRoaXMsIGlkLCB1cmwsIGhvc3BpdGFsLmhvc3BpdGFsX2lkIHx8ICcnKX0gY2xhc3NOYW1lPVwiZmx0ci1ia25nLWJ0biBidG4tcGRuZ1wiID5Cb29rIE5vdzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnZpZXdQcm9maWxlQ2xpY2tlZC5iaW5kKHRoaXMsIGlkLCB1cmwsIGhvc3BpdGFsLmhvc3BpdGFsX2lkIHx8ICcnKX0gY2xhc3NOYW1lPVwiZmx0ci1jbnRjdC1idG4gYnRuLXBkbmdcIiA+Q29udGFjdFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZhbHNlICYmIGhvc3BpdGFsc1swXSAmJiBob3NwaXRhbHNbMF0ucHJvY2VkdXJlX2NhdGVnb3JpZXMgJiYgaG9zcGl0YWxzWzBdLnByb2NlZHVyZV9jYXRlZ29yaWVzLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvY2VkdXJlLWNoZWNrYm94ZXNcIj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHRsLWNuc2x0LWZlZSBwYi1saXN0IGNuc2x0LWZlZS1zdHlsZVwiPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZF9mb3JfaG9zcGl0YWxfYm9va2luZyA/XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVzdC1wcmljZSB0eHQtb3JuYWdlXCI+4oK5IHtkaXNjb3VudGVkX3ByaWNlfTxzcGFuIGNsYXNzTmFtZT1cInRlc3QtbXJwXCI+4oK5IHttcnB9PC9zcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVzdC1wcmljZSB0eHQtb3JuYWdlXCI+4oK5IHttcnB9PC9zcGFuPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXN0LW5hbWUtaXRlbVwiPkNvbnN1bHRhdGlvbiBGZWU8L3NwYW4+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBmb250U2l6ZTogJzE0cHgnIH19IGNsYXNzTmFtZT1cInByb2NlZHVyZS1vdXQtaGVhZGluZy1mb250XCI+VHJlYXRtZW50KHMpIDxzcGFuPnt0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAncHJvY2VkdXJlc19jYXRlZ29yeScpLmxlbmd0aCA+IDAgPyBgIGluICR7dGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhcy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gJ3Byb2NlZHVyZXNfY2F0ZWdvcnknKS5tYXAoeCA9PiB4Lm5hbWUpLmpvaW4oJyB8ICcpfWAgOiAnU2VsZWN0ZWQnfSA8L3NwYW4+PC9oND5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zdXJhbmNlLWNoZWNrYm94ZXNcIj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJvY2VkdXJlLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWxzWzBdLnByb2NlZHVyZV9jYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2F0ZWdvcnkucHJvY2VkdXJlcy5maWx0ZXIoeCA9PiB4LmlzX3NlbGVjdGVkKS5tYXAoKHByb2NlZHVyZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicHJvY2VkdXJlLWNoZWNrIGNrLWJ4XCIgaHRtbEZvcj17YCR7cHJvY2VkdXJlLnByb2NlZHVyZS5pZH1fZG9jXyR7aWR9YH0+e3Byb2NlZHVyZS5wcm9jZWR1cmUubmFtZX1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dHJ1ZX0gY2xhc3NOYW1lPVwicHJvY2UtaW5wdXRcIiBpZD17YCR7cHJvY2VkdXJlLnByb2NlZHVyZS5pZH1fZG9jXyR7aWR9YH0gbmFtZT1cImZydWl0LTFcIiB2YWx1ZT1cIlwiIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgdmllTW9yZVByb2NlZHVyZXM6IHRydWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCI+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2PlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt0cnVlfSBjbGFzc05hbWU9XCJpbnMtY2hrLWJ4XCIgaWQ9e3Byb2NlZHVyZS5wcm9jZWR1cmUuaWR9IG5hbWU9XCJmcnVpdC0xXCIgdmFsdWU9XCJcIiBvbkNoYW5nZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHZpZU1vcmVQcm9jZWR1cmVzOiB0cnVlIH0pfSAvPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtwcm9jZWR1cmUucHJvY2VkdXJlLmlkfT57cHJvY2VkdXJlLnByb2NlZHVyZS5uYW1lfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZF9mb3JfaG9zcGl0YWxfYm9va2luZyA/XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByLXByaWNlc1wiPuKCuSB7cHJvY2VkdXJlLmRlYWxfcHJpY2V9PHNwYW4gY2xhc3NOYW1lPVwicHItY3V0LXByaWNlXCI+4oK5IHtwcm9jZWR1cmUubXJwfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHItcHJpY2VzXCI+4oK5IHtwcm9jZWR1cmUubXJwfTwvcD5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSA/XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UGxlYXNlIFNlbGVjdCBhdCBsZWFzdCBvbmUgUHJvY2VkdXJlPC9wPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnNlbGVjdGVkQ291bnQgKyBzZWxlY3RlZENvdW50ID49IDFcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUudmllTW9yZVByb2NlZHVyZXNcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8UHJvY2VkdXJlUG9wdXAgdG9nZ2xlPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsICd2aWVNb3JlUHJvY2VkdXJlcycpfSBkZXRhaWxzPXt0aGlzLnByb3BzfSBkb2N0b3JfaWQ9e3RoaXMucHJvcHMuZGV0YWlscy5pZH0gZGF0YT17aG9zcGl0YWxzWzBdfSBob3NwaXRhbEVuYWJsZT17ZW5hYmxlZF9mb3JfaG9zcGl0YWxfYm9va2luZ30gLz5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bnNlbGVjdGVkQ291bnQgKyBzZWxlY3RlZENvdW50ICE9IHNlbGVjdGVkQ291bnQgPyA8YnV0dG9uIGNsYXNzTmFtZT1cInByLXBsdXMtYWRkLWJ0blwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyB2aWVNb3JlUHJvY2VkdXJlczogdHJ1ZSB9KX0+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIHt1bnNlbGVjdGVkQ291bnR9IG1vcmVcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+IDogJydcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRyLWNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvaG9tZS5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXJiLTBcIj57aG9zcGl0YWwuaG9zcGl0YWxfbmFtZX1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWxfY291bnQgPiAxID9cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gJmFtcDsge2hvc3BpdGFsX2NvdW50IC0gMX0gTW9yZSA8L3NwYW4+IDogJydcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvY2xvY2stYmxhY2suc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxzcGFuPntPYmplY3Qua2V5cyhob3NwaXRhbC50aW1pbmdzKS5sZW5ndGggPiAwID8gaG9zcGl0YWwudGltaW5nc1tPYmplY3Qua2V5cyhob3NwaXRhbC50aW1pbmdzKVswXV1bMF0gOiBcIlwifTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAvLyAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgLy8gPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCJcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBEb2N0b3JQcm9maWxlQ2FyZFxuIiwiaW1wb3J0IERvY3RvclJlc3VsdENhcmQgZnJvbSAnLi9Eb2N0b3JSZXN1bHRDYXJkLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBEb2N0b3JSZXN1bHRDYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==