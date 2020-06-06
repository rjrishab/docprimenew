exports.ids = [43];
exports.modules = {

/***/ "./dev/js/components/commons/ratingsProfileView/ComplimentListView.js":
/*!****************************************************************************!*\
  !*** ./dev/js/components/commons/ratingsProfileView/ComplimentListView.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ComplimentListView extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return _react2.default.createElement(
            "div",
            { className: "" },
            _react2.default.createElement(
                "div",
                { className: "user-satisfaction-images" },
                _react2.default.createElement("img", { className: "img-fluid", src: this.props.details.icon }),
                _react2.default.createElement(
                    "p",
                    null,
                    this.props.details.message
                ),
                _react2.default.createElement(
                    "span",
                    null,
                    this.props.details.count
                )
            )
        );
    }
}

exports.default = ComplimentListView;

/***/ }),

/***/ "./dev/js/components/commons/ratingsProfileView/HospitalPopUp.js":
/*!***********************************************************************!*\
  !*** ./dev/js/components/commons/ratingsProfileView/HospitalPopUp.js ***!
  \***********************************************************************/
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

var _RatingsPopUp = __webpack_require__(/*! ./RatingsPopUp.js */ "./dev/js/components/commons/ratingsProfileView/RatingsPopUp.js");

var _RatingsPopUp2 = _interopRequireDefault(_RatingsPopUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HospitalPopUp extends _react2.default.Component {
    constructor(props) {
        super(props);

        this.getunverifiedData = () => {
            let obj = {};
            if (this.props.doctor_details) {
                obj = {
                    "doctor": this.props.doctor_details,
                    "hospital": this.props.doctor_details.hospitals,
                    "doctor_thumbnail": this.props.doctor_details.thumbnail,
                    "display_name": this.props.doctor_details.display_name,
                    "type": 'doctor',
                    "id": this.props.doctor_details.id,
                    "lab": null
                };
            }
            return obj;
        };

        this.state = {
            data: null,
            displayRatingBlock: 0,
            selectedHospital: null
        };
    }

    componentDidMount() {
        // if (STORAGE.checkAuth()) {
        //     this.props.getUnratedAppointment((err, data) => {
        //         if (!err && data) {
        //             this.setState({ data })
        //         }
        //     })
        // }
    }

    selectRatingHospital(id) {
        this.setState({ displayRatingBlock: 1 });
        let selectedHospital = this.props.doctor_details.hospitals.filter(x => x.hospital_id == id);
        selectedHospital = selectedHospital ? selectedHospital[0] : null;
        this.setState({ selectedHospital });
    }

    declineRating() {
        this.props.popUpState();
    }
    render() {
        if (this.state.displayRatingBlock) {
            return _react2.default.createElement(_RatingsPopUp2.default, _extends({}, this.props, { unverified: true, unverifiedData: this.getunverifiedData(), selectedHospital: this.state.selectedHospital }));
        } else {
            return _react2.default.createElement(
                'div',
                { className: 'raiting-popup' },
                _react2.default.createElement(
                    'div',
                    { className: 'home-rating-card' },
                    _react2.default.createElement(
                        'div',
                        { className: 'rate-card-header' },
                        'Choose Clinic to rate Doctor',
                        _react2.default.createElement(
                            'span',
                            null,
                            _react2.default.createElement('img', { onClick: this.declineRating.bind(this), src: "/assets" + "/img/customer-icons/rt-close.svg", className: 'img-fluid' })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'rate-seceltion-cont' },
                        this.props.doctor_details.hospitals && this.props.doctor_details.hospitals.length ? this.props.doctor_details.hospitals.map((hosp, i) => {
                            return _react2.default.createElement(
                                'p',
                                { key: i, onClick: this.selectRatingHospital.bind(this, hosp.hospital_id) },
                                ' ',
                                hosp.hospital_name,
                                ' '
                            );
                        }) : ""
                    )
                )
            );
        }
    }
}

exports.default = HospitalPopUp;

/***/ }),

/***/ "./dev/js/components/commons/ratingsProfileView/ratingReviewView.js":
/*!**************************************************************************!*\
  !*** ./dev/js/components/commons/ratingsProfileView/ratingReviewView.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactInfiniteScroller = __webpack_require__(/*! react-infinite-scroller */ "react-infinite-scroller");

var _reactInfiniteScroller2 = _interopRequireDefault(_reactInfiniteScroller);

var _DesktopProfileHeader = __webpack_require__(/*! ../DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _ComplimentListView = __webpack_require__(/*! ../ratingsProfileView/ComplimentListView.js */ "./dev/js/components/commons/ratingsProfileView/ComplimentListView.js");

var _ComplimentListView2 = _interopRequireDefault(_ComplimentListView);

var _ReviewList = __webpack_require__(/*! ../ratingsProfileView/ReviewList.js */ "./dev/js/components/commons/ratingsProfileView/ReviewList.js");

var _ReviewList2 = _interopRequireDefault(_ReviewList);

var _RatingGraph = __webpack_require__(/*! ../ratingsProfileView/RatingGraph.js */ "./dev/js/components/commons/ratingsProfileView/RatingGraph.js");

var _RatingGraph2 = _interopRequireDefault(_RatingGraph);

var _LeftBar = __webpack_require__(/*! ../LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _footer = __webpack_require__(/*! ../Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RatingReviewView extends _react2.default.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            hasMore: false,
            footerData: null,
            page: 2
        };
    }

    componentDidMount() {
        if (window) {
            window.scrollTo(0, 0);
        }
        this.props.getAllRatings(this.props.content_type, this.props.id, 1, (err, data, hasMore) => {
            if (!err && data) {
                this.setState({ data, hasMore });
            }
        });
        setTimeout(() => {
            this.setState({ hasMore: true });
        }, 0);
    }

    loadMore() {
        this.setState({ hasMore: false, loading: true }, () => {
            this.props.getAllRatings(this.props.content_type, this.props.id, this.state.page, (err, data, hasMore) => {
                let newData = _extends({}, this.state.data);
                newData.rating = newData.rating.concat(data.rating);
                this.setState({ loading: false, page: this.state.page + 1, hasMore, data: newData });
            });
        });
    }

    render() {

        return _react2.default.createElement(
            _react2.default.Fragment,
            null,
            this.state.data ? _react2.default.createElement(
                'div',
                { className: 'widget-panel' },
                _react2.default.createElement(
                    'h4',
                    { className: 'panel-title mb-rmv' },
                    'Patient Feedback ',
                    _react2.default.createElement('a', { className: 'rateViewAll' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'panel-content pd-0 border-bottom-panel' },
                    _react2.default.createElement(_RatingGraph2.default, { details: this.state.data }),
                    _react2.default.createElement(
                        'div',
                        { className: 'user-satisfaction-section' },
                        _react2.default.createElement(
                            'div',
                            { className: 'row no-gutters' },
                            this.state.data.rating_graph && this.state.data.rating_graph.top_compliments ? this.state.data.rating_graph.top_compliments.map(compliment => _react2.default.createElement(_ComplimentListView2.default, { key: compliment.id, details: compliment })) : _react2.default.createElement('div', null)
                        )
                    ),
                    _react2.default.createElement(
                        _reactInfiniteScroller2.default,
                        {
                            pageStart: 1,
                            loadMore: this.loadMore.bind(this),
                            hasMore: this.state.hasMore,
                            useWindow: true,
                            initialLoad: false
                        },
                        _react2.default.createElement(_ReviewList2.default, { details: this.state.data })
                    )
                )
            ) : ''
        );
    }

}

exports.default = RatingReviewView;

/***/ }),

/***/ "./dev/js/components/opd/commons/clinicSelector/ClinicSelector.js":
/*!************************************************************************!*\
  !*** ./dev/js/components/opd/commons/clinicSelector/ClinicSelector.js ***!
  \************************************************************************/
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

var _profilePopUp = __webpack_require__(/*! ../profilePopUp.js */ "./dev/js/components/opd/commons/profilePopUp.js");

var _profilePopUp2 = _interopRequireDefault(_profilePopUp);

var _os = __webpack_require__(/*! os */ "os");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ClinicSelector extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberShown: ""
        };
    }

    showNumber(id, hospital_id, e) {
        e.preventDefault();
        e.stopPropagation();

        let data = {
            'Category': 'ConsumerApp', 'Action': 'ShowNoClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'show-no-clicked', 'doctor_id': id, "hospital_id": hospital_id
        };
        _gtm2.default.sendEvent({ data: data });

        if (!this.state.numberShown) {
            this.props.getDoctorNumber(id, (err, data) => {
                if (!err && data.number) {
                    this.setState({
                        numberShown: data.number
                    });
                }
            });
        }
    }

    toggle(which) {
        this.setState({ [which]: !this.state[which] });
    }

    procedurePopUp(hospital_id) {
        this.setState({ vieMoreProcedures: true, selectedId: hospital_id });
    }

    goToHospitalPage(hospital, e) {
        e.preventDefault();
        e.stopPropagation();
        if (hospital.url) {
            this.props.history.push(`/${hospital.url}`);
        } else {
            this.props.history.push(`/ipd/hospital/${hospital.hospital_id}`);
        }
    }

    render() {
        let { id, name, hospitals, is_live, enabled_for_online_booking } = this.props.details;
        let style = {};
        if (hospitals && hospitals.length == 1) {
            style['width'] = '98%';
        }

        if (!this.props.selectedClinic) {
            if (hospitals && hospitals.length) {
                this.props.selectClinic(hospitals[0].hospital_id, hospitals[0].enabled_for_online_booking, 0, hospitals[0].discounted_price || 0, hospitals[0].show_contact);
            }
        }

        return (
            // <div className="widget-panel">
            //     <h4 className="panel-title mb-rmv">Dr. {name} Available at</h4>
            //     <div className="panel-content clinic-info-panel">
            //         <ul className="inline-list Clinic-card-list rtng-box-shadow">
            //             {
            //                 hospitals.map((hospital, i) => {
            //                     return <li key={i} style={style}>
            //                         <div className="widget no-shadow">
            //                             {/* <div className="widget-header pb-rmv clearfix">
            //                                 <h4 className="widget-title text-md fw-700 clinic-selector-name ratng-clinic-slc-name">{hospital.hospital_name}</h4>
            //                                 <span className="float-right text-md fw-700 ratng-doc-price">&#8377; {hospital.deal_price}</span>
            //                             </div> */}
            //                             <div className="widget-header pb-rmv clearfix">
            //                                 <h4 className="widget-title text-md fw-700 clinic-selector-name ratng-clinic-slc-name">{hospital.hospital_name}</h4>
            //                                 <span className="float-right text-md fw-700 ratng-doc-price add-on-doc-price">&#8377; {hospital.deal_price} <b className="ratng-doc-oldprice">&#8377; {hospital.mrp}</b>
            //                                     {
            //                                         STORAGE.checkAuth() || hospital.deal_price < 100 ?
            //                                             ''
            //                                             : <span className="signup-off-doc">+ &#8377; 100 OFF <b>on Signup</b> </span>
            //                                     }
            //                                 </span>
            //                             </div>
            //                             <div className="widget-content pt-two">
            //                                 <div className="location-details clearfix">
            //                                     <p className="address">{hospital.address}</p>
            //                                     <a href={`https://www.google.com/maps/search/?api=1&query=${hospital.lat},${hospital.long}`} style={{ float: 'right', cursor: 'pointer' }} target="_blank">
            //                                         <img src={ASSETS_BASE_URL + "/img/customer-icons/map-icon.png"} />
            //                                     </a>
            //                                     {/* <div style={{ float: 'right', cursor: 'pointer' }} >

            //                                     </div> */}
            //                                 </div>
            //                                 <div className="timing-details mt-rmv">
            //                                     <span className="rtng-clnc-time">Timings</span>
            //                                     {
            //                                         Object.keys(hospital.timings).map((timingKey, key) => {
            //                                             return <p className="fw-700" key={key}>
            //                                                 <label className="fw-700 text-md text-primary" style={{ verticalAlign: 'initial' }} >
            //                                                     {timingKey}
            //                                                 </label>
            //                                                 {" " + hospital.timings[timingKey].join(', ')}
            //                                             </p>
            //                                         })
            //                                     }
            //                                 </div>
            //                             </div>
            //                             <div className="text-center" style={{ marginTop: 12 }}>
            //                                 {
            //                                     enabled_for_online_booking ? <button style={{ visibility: (!!is_live ? "visible" : "hidden") }} className="v-btn v-btn-primary btn-sm" onClick={this.selectClinic.bind(this, hospital.hospital_id, !!is_live, i)}>Book Now</button> : <button onClick={this.showNumber.bind(this, id, hospital.hospital_id)} className={this.state.numberShown ? "v-btn v-btn-primary btn-sm btn-number" : "v-btn v-btn-primary btn-sm"}>{this.state.numberShown || "Contact"}</button>
            //                                 }

            //                             </div>
            //                         </div>
            //                     </li>
            //                 })
            //             }
            //         </ul>
            //     </div>
            // </div>
            _react2.default.createElement(
                'div',
                { className: 'widget-panel' },
                _react2.default.createElement(
                    'h2',
                    { className: 'panel-title mb-rmv' },
                    'Dr. ',
                    name,
                    ' Available at'
                ),
                hospitals.map((hospital, i) => {
                    let vip_discounted_price = 0;
                    vip_discounted_price = hospital.discounted_price - (hospital.vip.vip_gold_price + hospital.vip.vip_convenience_amount);
                    return _react2.default.createElement(
                        'div',
                        { key: i, className: 'panel-content pnl-bottom-border' },
                        _react2.default.createElement(
                            'div',
                            { className: 'dtl-radio' },
                            _react2.default.createElement(
                                'label',
                                { className: 'container-radio', onClick: () => {
                                        this.props.selectClinic(hospital.hospital_id, hospital.enabled_for_online_booking, i, hospital.discounted_price, hospital.show_contact);
                                    } },
                                _react2.default.createElement(
                                    'h3',
                                    { className: 'fw-500 hosptl-vq-mr', style: { fontSize: 'inherit' } },
                                    hospital.hospital_name,
                                    ' '
                                ),
                                this.props.selectedClinic == hospital.hospital_id ? _react2.default.createElement('input', { type: 'radio', checked: true, name: 'radio' }) : _react2.default.createElement('input', { type: 'radio', name: 'radio' }),
                                _react2.default.createElement(
                                    'a',
                                    { href: hospital.url ? `/${hospital.url}` : `/ipd/hospital/${hospital.hospital_id}`, onClick: this.goToHospitalPage.bind(this, hospital) },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'vw-hsptl-di' },
                                        '(View Hospital)'
                                    )
                                ),
                                _react2.default.createElement('span', { className: 'doc-checkmark' })
                            )
                        ),
                         false ? undefined : _react2.default.createElement(
                            'div',
                            { className: 'dtl-cnslt-fee pb-list cnslt-fee-style mb-0' },
                            _react2.default.createElement(
                                'div',
                                { className: 'clearfix' },
                                hospital.insurance && hospital.insurance.is_insurance_covered && hospital.insurance.is_user_insured && parseInt(hospital.discounted_price) <= hospital.insurance.insurance_threshold_amount ? _react2.default.createElement(
                                    'span',
                                    { className: 'test-price txt-ornage' },
                                    '\u20B9 ',
                                    0
                                ) : (hospital.vip.is_gold_member || hospital.vip.is_vip_member) && hospital.vip.cover_under_vip ? _react2.default.createElement(
                                    _react2.default.Fragment,
                                    null,
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'text-right' },
                                        _react2.default.createElement('img', { className: 'gld-cd-icon', src: "/assets" + '/img/gold-sm.png' })
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'cst-doc-price' },
                                        '\u20B9 ',
                                        hospital.vip.vip_amount + hospital.vip.vip_convenience_amount,
                                        ' ',
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'cstm-doc-cut-price' },
                                            '\u20B9 ',
                                            hospital.mrp,
                                            ' '
                                        )
                                    )
                                )
                                /*:hospital.vip.is_gold_member?
                                    <span className="test-price txt-ornage">₹ {hospital.vip.vip_amount + hospital.vip.vip_convenience_amount}
                                        <span className="test-mrp">₹ {hospital.mrp}</span>
                                    </span>
                                :hospital.vip.is_vip_member?
                                    <span className="test-price txt-ornage">₹ {hospital.vip.vip_amount}
                                        <span className="test-mrp">₹ {hospital.mrp}</span>
                                    </span>*/
                                : hospital.enabled_for_cod && !hospital.enabled_for_prepaid ? hospital.cod_deal_price ? _react2.default.createElement(
                                    'span',
                                    { className: 'test-price txt-ornage' },
                                    '\u20B9 ',
                                    hospital.cod_deal_price,
                                    parseInt(hospital.cod_deal_price) == parseInt(hospital.mrp) ? '' : _react2.default.createElement(
                                        'span',
                                        { className: 'test-mrp' },
                                        '\u20B9 ',
                                        hospital.mrp
                                    )
                                ) : _react2.default.createElement(
                                    'span',
                                    { className: 'test-price txt-ornage' },
                                    '\u20B9 ',
                                    hospital.mrp
                                ) : hospital.enabled_for_online_booking ? _react2.default.createElement(
                                    'span',
                                    { className: 'test-price txt-ornage' },
                                    '\u20B9 ',
                                    hospital.discounted_price,
                                    parseInt(hospital.discounted_price) == parseInt(hospital.mrp) ? '' : _react2.default.createElement(
                                        'span',
                                        { className: 'test-mrp' },
                                        '\u20B9 ',
                                        hospital.mrp
                                    )
                                ) : hospital.mrp && hospital.mrp != 0 ? _react2.default.createElement(
                                    'span',
                                    { className: 'test-price txt-ornage' },
                                    '\u20B9 ',
                                    hospital.mrp
                                ) : '',
                                _react2.default.createElement(
                                    'span',
                                    { className: 'fw-500 test-name-item' },
                                    'Consultation Fee'
                                )
                            )
                        ),
                        !hospital.insurance.is_user_insured && !hospital.vip.is_vip_member && !hospital.vip.is_gold_member && hospital.vip.is_enable_for_vip && hospital.discounted_price > (hospital.vip.vip_convenience_amount || 0 + hospital.vip.vip_gold_price || 0) ? _react2.default.createElement(
                            'div',
                            { className: 'd-flex align-items-center justify-content-end goldCard gold-price-card-addon-clinicSelector', onClick: e => {
                                    e.stopPropagation();
                                    this.props.clearVipSelectedPlan();
                                    let analyticData = {
                                        'Category': 'ConsumerApp', 'Action': 'OpdProfileVipGoldClick', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'opd-profile-vip-gold-click'
                                    };
                                    _gtm2.default.sendEvent({ data: analyticData });
                                    this.props.history.push('/vip-gold-details?is_gold=true&source=opd-profile-vip-gold-click&lead_source=Docprime');
                                } },
                            _react2.default.createElement(
                                'p',
                                { className: 'gld-p-rc' },
                                'For'
                            ),
                            _react2.default.createElement('img', { className: 'gld-cd-icon', src: "/assets" + '/img/gold-sm.png' }),
                            ' ',
                            _react2.default.createElement(
                                'p',
                                { className: 'gld-p-rc' },
                                'Members'
                            ),
                            ' ',
                            _react2.default.createElement(
                                'span',
                                { className: 'gld-rate-lf' },
                                '\u20B9 ',
                                hospital.vip.vip_gold_price + hospital.vip.vip_convenience_amount
                            ),
                            _react2.default.createElement('img', { style: { transform: 'rotate(-90deg)', width: '10px', margin: '0px 10px 0px 0px' }, src: "/assets" + '/img/customer-icons/dropdown-arrow.svg' })
                        ) : '',
                        hospital.insurance && hospital.insurance.is_insurance_covered && hospital.insurance.is_user_insured && parseInt(hospital.discounted_price) <= hospital.insurance.insurance_threshold_amount ? '' : hospital.enabled_for_cod && !hospital.enabled_for_prepaid ? hospital.cod_deal_price && hospital.cod_deal_price !== hospital.mrp ? _react2.default.createElement(
                            'p',
                            { className: 'cstm-cpn' },
                            parseInt((hospital.mrp - hospital.cod_deal_price) / hospital.mrp * 100),
                            '% Off',
                            _react2.default.createElement(
                                'span',
                                null,
                                _react2.default.createElement('br', null),
                                '(includes Coupon)'
                            )
                        ) : '' : hospital.enabled_for_online_booking && hospital.discounted_price < hospital.mrp ? _react2.default.createElement(
                            'p',
                            { className: 'cstm-cpn' },
                            parseInt((hospital.mrp - hospital.discounted_price) / hospital.mrp * 100),
                            '% Off',
                            hospital.agreed_price != hospital.discounted_price ? _react2.default.createElement(
                                'span',
                                null,
                                _react2.default.createElement('br', null),
                                '(includes Coupon)'
                            ) : ''
                        ) : '',
                        hospital.insurance && hospital.insurance.is_insurance_covered && hospital.insurance.is_user_insured && parseInt(hospital.discounted_price) <= hospital.insurance.insurance_threshold_amount ? _react2.default.createElement(
                            'div',
                            { className: 'ins-val-bx-opd' },
                            'Covered Under Insurance'
                        ) : '',
                        _react2.default.createElement(
                            'div',
                            { className: 'address-bg-color' },
                            _react2.default.createElement(
                                'div',
                                { className: 'row no-gutters' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-10' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'add-content' },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'add-span' },
                                            'Address:'
                                        ),
                                        _react2.default.createElement(
                                            'h4',
                                            { className: 'fw-500', style: { fontSize: 14 } },
                                            hospital.address
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'add-content' },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'add-span' },
                                            'Timings:'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { style: { flex: 1 } },
                                            Object.keys(hospital.timings).map((timingKey, key) => {
                                                return _react2.default.createElement(
                                                    'p',
                                                    { key: key },
                                                    timingKey,
                                                    _react2.default.createElement(
                                                        'span',
                                                        null,
                                                        " " + hospital.timings[timingKey].join(', ')
                                                    )
                                                );
                                            })
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-2' },
                                    _react2.default.createElement(
                                        'a',
                                        { href: `https://www.google.com/maps/search/?api=1&query=${hospital.lat},${hospital.long}`, style: { float: 'right', cursor: 'pointer' }, target: '_blank' },
                                        _react2.default.createElement('img', { style: { width: "35px", height: "35px", cursor: 'pointer' }, src: "/assets" + "/img/customer-icons/map-icon.png", className: 'img-fluid' })
                                    )
                                )
                            )
                        ),
                         false ? undefined : '',
                         false ? undefined : '',
                         false ? undefined : ''
                    );
                })
            )
        );
    }
}

exports.default = ClinicSelector;

/***/ }),

/***/ "./dev/js/components/opd/commons/clinicSelector/index.js":
/*!***************************************************************!*\
  !*** ./dev/js/components/opd/commons/clinicSelector/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ClinicSelector = __webpack_require__(/*! ./ClinicSelector.js */ "./dev/js/components/opd/commons/clinicSelector/ClinicSelector.js");

var _ClinicSelector2 = _interopRequireDefault(_ClinicSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ClinicSelector2.default;

/***/ }),

/***/ "./dev/js/components/opd/commons/profilePopUp.js":
/*!*******************************************************!*\
  !*** ./dev/js/components/opd/commons/profilePopUp.js ***!
  \*******************************************************/
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
            selectedProcedureIds: [],
            procedure: []
        };
    }

    componentDidMount() {
        let selectedProcedureIds = [];
        Object.values(this.props.data).map(procedure => {

            selectedProcedureIds = selectedProcedureIds.concat(procedure.filter(x => x.is_selected).map(x => x.procedure_id));
        });
        this.setState({ selectedProcedureIds: selectedProcedureIds, procedure: [].concat(selectedProcedureIds) });
    }

    toggleData(procedure) {
        let selectedProcedures = this.state.selectedProcedureIds;
        if (selectedProcedures.length > 1 || selectedProcedures.length == 1 && selectedProcedures.indexOf(procedure.procedure_id) == -1) {

            if (selectedProcedures.indexOf(procedure.procedure_id) != -1) {
                selectedProcedures.splice(selectedProcedures.indexOf(procedure.procedure_id), 1);
            } else {
                selectedProcedures.push(procedure.procedure_id);
            }
            this.setState({ selectedProcedureIds: selectedProcedures });
        } else if (selectedProcedures.length == 0) {
            selectedProcedures.push(procedure.procedure_id);
            this.setState({ selectedProcedureIds: selectedProcedures });
        } else {
            //this.setState({ errorMessage: true })
            setTimeout(() => {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Select at least one Procedure" });
            }, 500);
            return null;
        }
    }

    toggleFinal(doctor_id, hospital_id) {
        let fetchResults = false;
        let selectedProcedures = this.state.selectedProcedureIds;
        let procedure = this.state.procedure;
        if (selectedProcedures.length === procedure.length && selectedProcedures.sort().every(function (value, index) {
            return value === procedure.sort()[index];
        })) {} else {
            fetchResults = true;
        }
        if (fetchResults) {
            this.props.toggleProfileProcedures(selectedProcedures, doctor_id, hospital_id);
        }
        this.props.toggle();
    }

    toggleProcedure(procedure_to_toggle, doctor_id, hospital_id) {

        let selectedProcedureIds = [];
        Object.values(this.props.selectedDoctorProcedure[doctor_id][hospital_id].categories).map(procedure => {

            selectedProcedureIds = selectedProcedureIds.concat(procedure.filter(x => x.is_selected).map(x => x.procedure_id));
        });

        //selectedProcedureIds = selectedProcedureIds.concat(this.props.profileCommonProcedures)

        let found = false;

        if (selectedProcedureIds.length > 1 || selectedProcedureIds.length < 1 || selectedProcedureIds.length == 1 && selectedProcedureIds.indexOf(procedure_to_toggle.procedure_id) == -1) {
            found = true;
        }

        if (found) {
            this.props.toggleProfileProcedures(procedure_to_toggle, doctor_id, hospital_id);
        } else {
            this.setState({ errorMsg: true });
        }
    }

    render() {
        let procedure_ids = this.state.selectedProcedureIds;
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
                    { className: 'onscreen-scroll' },
                    Object.values(this.props.data).map((category, i) => {

                        return _react2.default.createElement(
                            'div',
                            { className: 'pop-underline', key: i },
                            _react2.default.createElement(
                                'div',
                                { className: 'widget-header action-screen-header pop-padding' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'fw-500 cancel-appointment-head' },
                                    category[0].category_name
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'div',
                                    { className: 'terms-condition-div' },
                                    _react2.default.createElement(
                                        'ul',
                                        { className: 'procedure-list' },
                                        category.map((procedure, key) => {
                                            return _react2.default.createElement(
                                                'li',
                                                { key: key },
                                                _react2.default.createElement(
                                                    'label',
                                                    { className: 'procedure-check ck-bx', htmlFor: `${procedure.procedure_id}_` },
                                                    procedure.procedure_name,
                                                    _react2.default.createElement('input', { type: 'checkbox', checked: procedure_ids.indexOf(procedure.procedure_id) != -1 ? true : false, id: `${procedure.procedure_id}_`, name: 'fruit-2', value: '', onChange: this.toggleData.bind(this, procedure) /*{this.toggleProcedure.bind(this, procedure, this.props.doctor_id, this.props.hospital_id)}*/ }),
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
                                    )
                                )
                            )
                        );
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'procedures-btn-pop' },
                    _react2.default.createElement(
                        'button',
                        { className: 'fw-500', onClick: this.toggleFinal.bind(this, this.props.doctor_id, this.props.hospital_id) },
                        'Done'
                    )
                )
            )
        );
    }
}
exports.default = PopUpView;

/***/ }),

/***/ "./dev/js/components/opd/doctorProfile/ContactPopup.js":
/*!*************************************************************!*\
  !*** ./dev/js/components/opd/doctorProfile/ContactPopup.js ***!
  \*************************************************************/
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

class ContactPoupView extends _react2.default.Component {

	constructor(props) {
		super(props);
		this.state = { validateNo: false, phoneNumber: '' };
	}

	inputHandler(e) {
		if (e.target.name == 'phoneNumber') {
			e.target.value.length <= 10 ? e.target.value.length == 10 ? this.setState({
				[e.target.name]: e.target.value, validateNo: true
			}) : this.setState({
				[e.target.name]: e.target.value
			}) : this.setState({ validateNo: true });
		}
	}

	componentDidMount() {
		if (this.props.mobileNo) {
			this.setState({ phoneNumber: this.props.mobileNo, validateNo: true });
		}
	}
	componentWillReceiveProps(nextProps) {
		//    	if(nextProps)
	}

	handleContinuePress(e) {
		if (e.key === 'Enter') {
			this.submit();
		}
	}

	submit() {
		if (this.state.validateNo) {
			this.props.getDoctor(this.state.phoneNumber);
		} else {
			_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please provide a valid number (10 digits)" });
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
				_react2.default.createElement('img', { src: "/assets" + "/img/icons/close.png", style: { cursor: 'pointer', zIndex: '9' }, className: 'close-modal', onClick: this.props.toggle }),
				_react2.default.createElement(
					'div',
					{ className: 'widget-header text-center action-screen-header', style: { position: 'relative', paddingTop: '28px' } },
					_react2.default.createElement(
						'p',
						{ className: 'fw-500 cancel-appointment-head' },
						'Please enter your mobile number to view contact details. You will only be able to call this number from the entered mobile number.'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: '' },
					_react2.default.createElement(
						'div',
						{ className: 'slt-nw-input policyNumbeInput' },
						_react2.default.createElement(
							'label',
							{ className: 'numLabel', htmlFor: 'male' },
							'+91'
						),
						_react2.default.createElement('input', { className: 'slt-text-input', type: 'number', placeholder: '10 digit mobile number', value: this.state.phoneNumber, onChange: this.inputHandler.bind(this), name: 'phoneNumber', onKeyPress: this.handleContinuePress.bind(this) })
					),
					_react2.default.createElement(
						'button',
						{ className: 'mobileNumber-fill-btn', onClick: this.submit.bind(this) },
						'Submit'
					)
				),
				_react2.default.createElement(
					'p',
					{ className: 'text-center fw-500 p-3 imptnt-cls', style: { fontSize: 12, color: '#8a8a8a' } },
					'By proceeding, you hereby agree to the ',
					_react2.default.createElement(
						'a',
						{ href: '/terms', target: '_blank', style: { color: `var(--text--primary--color)` } },
						'End User Agreement'
					),
					' and ',
					_react2.default.createElement(
						'a',
						{ href: '/privacy', target: '_blank', style: { color: `var(--text--primary--color)` } },
						'Privacy Policy.'
					)
				)
			)
		);
	}
}

exports.default = ContactPoupView;

/***/ }),

/***/ "./dev/js/components/opd/doctorProfile/DoctorProfileView.js":
/*!******************************************************************!*\
  !*** ./dev/js/components/opd/doctorProfile/DoctorProfileView.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _Loader = __webpack_require__(/*! ../../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _RatingProfileCard = __webpack_require__(/*! ../../commons/ratingsProfileView/RatingProfileCard.js */ "./dev/js/components/commons/ratingsProfileView/RatingProfileCard.js");

var _RatingProfileCard2 = _interopRequireDefault(_RatingProfileCard);

var _ComplimentListView = __webpack_require__(/*! ../../commons/ratingsProfileView/ComplimentListView.js */ "./dev/js/components/commons/ratingsProfileView/ComplimentListView.js");

var _ComplimentListView2 = _interopRequireDefault(_ComplimentListView);

var _doctorProfileCard = __webpack_require__(/*! ../commons/doctorProfileCard */ "./dev/js/components/opd/commons/doctorProfileCard/index.js");

var _doctorProfileCard2 = _interopRequireDefault(_doctorProfileCard);

var _index = __webpack_require__(/*! ../doctorProfile/aboutDoctor/index.js */ "./dev/js/components/opd/doctorProfile/aboutDoctor/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../doctorProfile/professionalGraph/index.js */ "./dev/js/components/opd/doctorProfile/professionalGraph/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../commons/clinicSelector/index.js */ "./dev/js/components/opd/commons/clinicSelector/index.js");

var _index6 = _interopRequireDefault(_index5);

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _HelmetTags = __webpack_require__(/*! ../../commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _config = __webpack_require__(/*! ../../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _footer = __webpack_require__(/*! ../../commons/Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _ContactPopup = __webpack_require__(/*! ../doctorProfile/ContactPopup.js */ "./dev/js/components/opd/doctorProfile/ContactPopup.js");

var _ContactPopup2 = _interopRequireDefault(_ContactPopup);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _initialsPicture = __webpack_require__(/*! ../../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _ReviewList = __webpack_require__(/*! ../../commons/ratingsProfileView/ReviewList.js */ "./dev/js/components/commons/ratingsProfileView/ReviewList.js");

var _ReviewList2 = _interopRequireDefault(_ReviewList);

var _RatingGraph = __webpack_require__(/*! ../../commons/ratingsProfileView/RatingGraph.js */ "./dev/js/components/commons/ratingsProfileView/RatingGraph.js");

var _RatingGraph2 = _interopRequireDefault(_RatingGraph);

var _ratingReviewView = __webpack_require__(/*! ../../commons/ratingsProfileView/ratingReviewView.js */ "./dev/js/components/commons/ratingsProfileView/ratingReviewView.js");

var _ratingReviewView2 = _interopRequireDefault(_ratingReviewView);

var _RatingStars = __webpack_require__(/*! ../../commons/ratingsProfileView/RatingStars */ "./dev/js/components/commons/ratingsProfileView/RatingStars.js");

var _RatingStars2 = _interopRequireDefault(_RatingStars);

var _HospitalPopUp = __webpack_require__(/*! ../../commons/ratingsProfileView/HospitalPopUp.js */ "./dev/js/components/commons/ratingsProfileView/HospitalPopUp.js");

var _HospitalPopUp2 = _interopRequireDefault(_HospitalPopUp);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _ipdLeadForm = __webpack_require__(/*! ../../../containers/ipd/ipdLeadForm.js */ "./dev/js/containers/ipd/ipdLeadForm.js");

var _ipdLeadForm2 = _interopRequireDefault(_ipdLeadForm);

var _IpdDoctorCityPopup = __webpack_require__(/*! ../../../containers/ipd/IpdDoctorCityPopup.js */ "./dev/js/containers/ipd/IpdDoctorCityPopup.js");

var _IpdDoctorCityPopup2 = _interopRequireDefault(_IpdDoctorCityPopup);

var _nonBookableDoctor = __webpack_require__(/*! ./nonBookableDoctor.js */ "./dev/js/components/opd/doctorProfile/nonBookableDoctor.js");

var _nonBookableDoctor2 = _interopRequireDefault(_nonBookableDoctor);

var _vipProfilePopup = __webpack_require__(/*! ./vipProfilePopup.js */ "./dev/js/components/opd/doctorProfile/vipProfilePopup.js");

var _vipProfilePopup2 = _interopRequireDefault(_vipProfilePopup);

var _nonIpdPopup = __webpack_require__(/*! ../../commons/nonIpdPopup.js */ "./dev/js/components/commons/nonIpdPopup.js");

var _nonIpdPopup2 = _interopRequireDefault(_nonIpdPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class DoctorProfileView extends _react2.default.Component {
    constructor(props) {
        super(props);

        this.display_hospital_rating_block = () => {
            this.setState({ displayHospitalRatingBlock: 1 });
        };

        let footerData = null;
        if (this.props.initialServerData) {
            footerData = this.props.initialServerData.footerData;
        }
        const parsed = queryString.parse(this.props.location.search);
        this.state = {
            footerData,
            seoFriendly: this.props.match.url.includes('-dpp'),
            selectedClinic: this.props.hospital_id || "",
            is_live: false,
            rank: 0,
            consultation_fee: 0,
            numberShown: "",
            searchShown: false,
            searchDataHidden: this.props.location.search.includes('hide_search_data'),
            openContactPopup: false,
            clinicPhoneNo: {},
            show_contact: '',
            isOrganic: this.props.location.search.includes('hospital_id'),
            displayHospitalRatingBlock: 0,
            showIpdLeadForm: true,
            showSecondPopup: false,
            firstLeadId: '',
            closeNonBookable: false,
            showVipPopup: false,
            showNonIpdPopup: parsed.show_popup,
            to_be_force: 1,
            is_organic_landing: false,
            is_lead_enabled: true
        };
    }

    componentDidMount() {
        if (window) {
            window.scrollTo(0, 0);
        }
        if (this.state.seoFriendly) {
            this.props.getFooterData(this.props.match.url.split('/')[1]).then(footerData => {
                if (footerData) {
                    this.setState({ footerData: footerData });
                }
            });
        }

        if (this.props.app_download_list && !this.props.app_download_list.length) {

            this.props.getDownloadAppBannerList(resp => {
                if (resp && resp.length && resp[0].data) {
                    this.showDownloadAppWidget(resp[0].data);
                }
            });
        } else {
            this.showDownloadAppWidget(this.props.app_download_list);
        }

        this.setState({ searchShown: true });
        let time_to_show = 2000;
        let doctor_id = this.props.selectedDoctor;
        if (this.props.initialServerData && this.props.initialServerData.doctor_id) {
            doctor_id = this.props.initialServerData.doctor_id;
        }
        if (this.props.DOCTORS[doctor_id]) {
            time_to_show = 1000;
        }
        // setTimeout(()=>{
        //     this.setState({showVipPopup: true})
        // }, time_to_show)
        this.setState({ is_organic_landing: true });
    }

    showDownloadAppWidget(dataList) {
        let landing_page = false;
        if (typeof window == 'object' && window.ON_LANDING_PAGE) {
            landing_page = true;
        }

        let downloadAppButtonData = {};

        if (landing_page && dataList && dataList.length) {

            dataList.map(banner => {
                if (banner.isenabled && (this.props.match.url.includes(banner.ends_with) || this.props.match.url.includes(banner.starts_with))) {
                    downloadAppButtonData = banner;
                }
            });
        }

        if (Object.values(downloadAppButtonData).length) {

            let gtmTrack = {
                'Category': 'ConsumerApp', 'Action': 'DownloadAppButtonVisible', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'download-app-button-visible', 'starts_with': downloadAppButtonData.starts_with ? downloadAppButtonData.starts_with : '', 'ends_with': downloadAppButtonData.ends_with ? downloadAppButtonData.ends_with : '', 'device': this.props.device_info
            };
            _gtm2.default.sendEvent({ data: gtmTrack });
        }
    }

    getMetaTagsData(seoData) {
        let title = "";
        let description = "";
        let schema = {};
        if (seoData) {
            title = seoData.title || "";
            description = seoData.description || "";
            schema = seoData.schema;
        }
        return { title, description, schema };
    }

    selectClinic(clinic_id, is_live, rank, consultation_fee, show_contact) {
        let clinicPhoneNo = this.state.clinicPhoneNo;
        if (!clinicPhoneNo[clinic_id]) {
            clinicPhoneNo[clinic_id] = "";
        }
        this.setState({ selectedClinic: clinic_id, is_live, rank, numberShown: "", consultation_fee: consultation_fee, clinicPhoneNo: clinicPhoneNo, show_contact: show_contact });
    }

    navigateToClinic(doctor_id, clinicId, topBookNow) {
        let rank = this.state.rank;
        if (topBookNow) {
            let gtmData = {
                'Category': 'ConsumerApp', 'Action': 'OpdTopBookNowClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'opd-top-book-now-clicked', 'selectedId': clinicId || ''
            };
            _gtm2.default.sendEvent({ data: gtmData });
        }
        if (this.state.is_live) {

            let data = {
                'Category': 'ConsumerApp', 'Action': 'OpdBookNowClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'opd-book-now-clicked', 'selectedId': clinicId || ''
            };
            _gtm2.default.sendEvent({ data: data });

            data = {
                'Category': 'ConsumerApp', 'Action': 'OpdBookNowRank', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'opd-book-now-rank', 'rank': rank + 1
            };
            _gtm2.default.sendEvent({ data: data });
            this.props.saveProfileProcedures(doctor_id, clinicId);

            if (this.state.seoFriendly) {
                this.props.history.push(`${window.location.pathname}/booking?doctor_id=${doctor_id}&hospital_id=${clinicId}`);
            } else {
                this.props.history.push(`/opd/doctor/${doctor_id}/${clinicId}/bookdetails`);
            }
        }
    }

    getDoctorNo(mobileNo) {
        let doctor_id = this.props.selectedDoctor;
        if (this.props.initialServerData && this.props.initialServerData.doctor_id) {
            doctor_id = this.props.initialServerData.doctor_id;
        }

        let data = {
            'Category': 'ConsumerApp', 'Action': 'SubmitPhoneNo', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'submit-phone-no', 'doctor_id': doctor_id, "hospital_id": this.state.selectedClinic, 'mobileNo': mobileNo
        };
        _gtm2.default.sendEvent({ data: data });
        let postData = {
            "mobile": mobileNo,
            "doctor": doctor_id,
            "hospital": this.state.selectedClinic
        };
        this.props.getDoctorNo(postData, (err, data) => {
            if (!err && data) {

                let clinicPhoneNo = this.state.clinicPhoneNo;
                clinicPhoneNo[this.state.selectedClinic] = data.number;

                this.setState({
                    numberShown: data.number,
                    openContactPopup: false,
                    clinicPhoneNo: clinicPhoneNo
                });
            }
        });
    }

    showNumber(id, e) {
        e.preventDefault();
        e.stopPropagation();

        let data = {
            'Category': 'ConsumerApp', 'Action': 'ShowNoClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'show-no-clicked', 'doctor_id': id, "hospital_id": this.state.selectedClinic
        };
        if (!this.state.clinicPhoneNo[this.state.selectedClinic]) {
            _gtm2.default.sendEvent({ data: data });
            /*this.props.getDoctorNumber(id, this.state.selectedClinic, (err, data) => {
                if (!err && data.number) {
                    this.setState({
                        numberShown: data.number
                    })
                }
            })*/
            this.setState({ openContactPopup: true });
        }
    }

    toggle(which) {
        this.setState({ [which]: !this.state[which] });
    }

    navigateToDoctor(doctor, e) {
        e.preventDefault();
        if (doctor.url) {
            this.props.history.push(`/${doctor.url}`);
        } else {
            this.props.history.push(`/opd/doctor/${doctor.id}`);
        }

        let data = {
            'Category': 'ConsumerApp', 'Action': 'recommendedDoctorClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'recommended-doctor-click', 'DoctorID': doctor.doctor_id
        };
        _gtm2.default.sendEvent({ data: data });
    }

    viewAllDocClick(nearbyDoctors) {
        let data = {
            'Category': 'ConsumerApp', 'Action': 'viewAllDoctorsClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'view-all-doctors-click'
        };
        _gtm2.default.sendEvent({ data: data });

        window.open(nearbyDoctors.doctors_url, '_self');
    }

    hospitalPopUpState() {
        this.setState({ displayHospitalRatingBlock: 0 });
    }

    downloadButton(data) {
        let gtmTrack = {
            'Category': 'ConsumerApp', 'Action': 'DownloadAppButtonClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'download-app-button-clicked', 'starts_with': data.starts_with ? data.starts_with : '', 'ends_with': data.ends_with ? data.ends_with : '', 'device': this.props.device_info
        };
        _gtm2.default.sendEvent({ data: gtmTrack });
        if (window) {
            window.open(data.URL, '_self');
        }
    }

    submitLeadFormGeneration(ipdFormParams) {
        if (ipdFormParams) {
            let gtmData = {
                'Category': 'ConsumerApp', 'Action': 'DoctorProfileIpdFormClosed', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-profile-ipd-form-closed'
            };
            _gtm2.default.sendEvent({ data: gtmData });
        }
        let ipd_data = {
            showChat: true,
            ipdFormParams: ipdFormParams
        };

        this.setState({ showIpdLeadForm: false, showSecondPopup: true }, () => {
            // this.props.ipdChatView({showIpdChat:true, ipdForm: ipdFormParams, showMinimize:true})   
        });
    }

    saveLeadIdForUpdation(response) {
        if (response.id) {
            this.setState({ firstLeadId: response.id, showSecondPopup: true });
        }
    }

    secondIpdFormSubmitted() {
        this.setState({ showSecondPopup: false });
    }

    closeNonBookableDocPopup() {
        let data = {
            'Category': 'ConsumerApp', 'Action': 'NonBookableDoctorCrossClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'Non-Bookable-Doctor-cross-clicked'
        };
        _gtm2.default.sendEvent({ data: data });
        this.setState({ closeNonBookable: true });
    }

    toggleVip() {
        let data = {
            'Category': 'ConsumerApp', 'Action': 'DocProfileCrossClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'Doctor-profile-cross-clicked'
        };
        _gtm2.default.sendEvent({ data: data });
        this.setState({ showVipPopup: false });
    }

    navigateToVip() {
        let data = {
            'Category': 'ConsumerApp', 'Action': 'DocProfileVipNavigation', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'Doctor-profile-vip-navigation', 'doctorId': this.props.selectedDoctor
        };
        _gtm2.default.sendEvent({ data: data });
        this.props.history.push('/vip-club-details?source=doctor-profile-page&lead_source=doctorpage');
    }

    goldClicked(id) {
        let data = {
            'Category': 'ConsumerApp', 'Action': 'NonBookableVipGoldClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'non-bookable-vip-gold-clicked', 'selectedId': id
        };
        _gtm2.default.sendEvent({ data: data });
        this.props.history.push('/vip-gold-details?is_gold=true&source=docgoldlisting&lead_source=Docprime');
    }

    nonIpdLeads(phone_number) {
        let landing_page = false;
        if (typeof window == 'object' && window.ON_LANDING_PAGE) {
            landing_page = true;
        }
        const parsed = queryString.parse(this.props.location.search);
        let doctor_id = this.props.selectedDoctor;
        if (this.props.initialServerData && this.props.initialServerData.doctor_id) {
            doctor_id = this.props.initialServerData.doctor_id;
        }
        let criteriaStr = this.props.DOCTORS[doctor_id].display_name;
        let hospital_id;
        let display_total_mrp = 0;
        let display_docprime_discount = 0;
        let selected_hospital = this.props.DOCTORS[doctor_id].hospitals.filter(x => x.hospital_id == this.state.selectedClinic);
        if (selected_hospital.length) {
            hospital_id = selected_hospital[0].hospital_id;
            display_total_mrp = parseInt(selected_hospital[0].mrp);
            display_docprime_discount = display_total_mrp - parseInt(selected_hospital[0].deal_price);
            if (!selected_hospital[0].insurance.is_user_insured && !selected_hospital[0].vip.is_vip_member && !selected_hospital[0].vip.is_gold_member && selected_hospital[0].vip.is_enable_for_vip) {
                display_docprime_discount = display_total_mrp - (selected_hospital[0].vip.vip_convenience_amount + selected_hospital[0].vip.vip_gold_price);
            }
        }
        //check if any utm tag exist in url
        let isUtmTagsExist = false;
        if (parsed.utm_source || parsed.utm_medium || parsed.utm_term || parsed.utm_campaign) {
            isUtmTagsExist = true;
        }
        let data = { phone_number: phone_number, lead_source: `${!isUtmTagsExist && landing_page ? 'docorganic' : 'docads'}`, source: parsed, lead_type: 'DOCADS', exitpoint_url: `http://docprime.com${this.props.location.pathname}/booking?doctor_id=${doctor_id}&hospital_id=${hospital_id}`, doctor_id: doctor_id, hospital_id: hospital_id, doctor_name: null, hospital_name: null, is_organic: landing_page, amount_discount: display_docprime_discount };
        if (this.props.common_utm_tags && this.props.common_utm_tags.length) {
            data.utm_tags = this.props.common_utm_tags.filter(x => x.type == "common_xtra_tags")[0].utm_tags;
        }
        let visitor_info = _gtm2.default.getVisitorInfo();
        if (visitor_info && visitor_info.visit_id) {
            data.visit_id = visitor_info.visit_id;
            data.visitor_id = visitor_info.visitor_id;
        }
        let gtm_data = { 'Category': 'ConsumerApp', 'Action': 'DocAdsDppSubmitClick', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'doc-ads-hpp-Submit-click', is_organic: landing_page };
        _gtm2.default.sendEvent({ data: gtm_data });
        this.props.saveLeadPhnNumber(phone_number);
        if (this.state.is_lead_enabled && !_storage2.default.isAgent()) {
            this.setState({ is_lead_enabled: false });
            this.props.NonIpdBookingLead(data);
            setTimeout(() => {
                this.setState({ is_lead_enabled: true });
            }, 5000);
        }
        this.setState({ to_be_force: 0 });
    }

    closeIpdLeadPopup(from) {
        if (from) {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'DocAdsDppCrossClick', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'doc-ads-hpp-cross-click'
            };
            _gtm2.default.sendEvent({ data: data });
            this.setState({ to_be_force: 0 });
        }
    }

    render() {
        let doctor_id = this.props.selectedDoctor;
        let enabled_for_online_booking = false;
        let show_dpp_organic_popup = false;
        if (this.props.initialServerData && this.props.initialServerData.doctor_id) {
            doctor_id = this.props.initialServerData.doctor_id;
        }
        let final_price = parseInt(this.state.consultation_fee);
        if (this.props.selectedDoctorProcedure[doctor_id] && this.props.selectedDoctorProcedure[doctor_id][this.state.selectedClinic] && this.props.selectedDoctorProcedure[doctor_id][this.state.selectedClinic].categories) {

            final_price += parseInt(this.props.selectedDoctorProcedure[doctor_id][this.state.selectedClinic].price.deal_price) || 0;
        }

        let search_data = null;
        let seo_url = "";
        if (this.props.DOCTORS[doctor_id] && this.props.DOCTORS[doctor_id].search_data) {
            search_data = this.props.DOCTORS[doctor_id].search_data;
        }
        let doc_organic_price = 0;
        if (this.props.DOCTORS[doctor_id]) {
            enabled_for_online_booking = this.props.DOCTORS[doctor_id].enabled_for_online_booking;
            doc_organic_price = this.props.DOCTORS[doctor_id].lead_compare_amount;
            if (this.props.DOCTORS[doctor_id].hospitals && this.props.DOCTORS[doctor_id].hospitals.length) {
                this.props.DOCTORS[doctor_id].hospitals.map((hospital, i) => {
                    if (!hospital.insurance.is_user_insured && !hospital.vip.is_vip_member && !hospital.vip.is_gold_member && hospital.vip.is_enable_for_vip && hospital.discounted_price - (hospital.vip.vip_convenience_amount + hospital.vip.vip_gold_price) >= doc_organic_price) {
                        show_dpp_organic_popup = true;
                    }
                });
            }
            seo_url = this.props.DOCTORS[doctor_id].url || "";
            if (seo_url) {
                seo_url = "/" + seo_url;
            }
        }
        let nearbyDoctors = {};
        if (this.props.DOCTORS[doctor_id] && this.props.DOCTORS[doctor_id].doctors && Object.keys(this.props.DOCTORS[doctor_id].doctors).length) {
            nearbyDoctors = this.props.DOCTORS[doctor_id].doctors;
        }

        let is_insurance_applicable = false;
        if (this.state.selectedClinic && this.props.DOCTORS[doctor_id] && this.props.DOCTORS[doctor_id].hospitals && this.props.DOCTORS[doctor_id].hospitals.length) {
            this.props.DOCTORS[doctor_id].hospitals.map(hospital => {
                if (hospital.hospital_id == this.state.selectedClinic) {
                    is_insurance_applicable = hospital.insurance.is_insurance_covered && hospital.insurance.is_user_insured;
                }
            });
        }
        //Check if reviews exist for doctor, if not then pick the google reviews for that doctor/hospital
        let google_rating = {};
        if (this.props.DOCTORS[doctor_id] && !this.props.DOCTORS[doctor_id].display_rating_widget) {

            if (this.props.DOCTORS[doctor_id].google_rating && this.props.DOCTORS[doctor_id].google_rating[this.state.selectedClinic] && this.props.DOCTORS[doctor_id].google_rating[this.state.selectedClinic].google_rating && this.props.DOCTORS[doctor_id].google_rating[this.state.selectedClinic].google_rating.length && this.props.DOCTORS[doctor_id].google_rating[this.state.selectedClinic].google_rating_graph && this.props.DOCTORS[doctor_id].google_rating[this.state.selectedClinic].google_rating_graph.avg_rating && this.props.DOCTORS[doctor_id].google_rating[this.state.selectedClinic].google_rating_graph.rating_count) {

                google_rating.rating = this.props.DOCTORS[doctor_id].google_rating[this.state.selectedClinic].google_rating;
                google_rating.rating_graph = this.props.DOCTORS[doctor_id].google_rating[this.state.selectedClinic].google_rating_graph;
            }
        }

        let avgRating = '';
        let ratingCount = '';
        if (this.props.DOCTORS[doctor_id] && this.props.DOCTORS[doctor_id].rating_graph && this.props.DOCTORS[doctor_id].rating_graph.avg_rating && this.props.DOCTORS[doctor_id].rating_graph.rating_count) {
            avgRating = this.props.DOCTORS[doctor_id].rating_graph.avg_rating;
            ratingCount = this.props.DOCTORS[doctor_id].rating_graph.rating_count;
        }

        let show_google_rating = Object.values(google_rating).length > 0;

        //Get Selected Clinic/Hospital Name
        let selectedClinicName = '';

        if (this.props.DOCTORS[doctor_id] && this.props.DOCTORS[doctor_id].hospitals && this.props.DOCTORS[doctor_id].hospitals.length && this.state.selectedClinic) {

            let selectedClinicInfo = this.props.DOCTORS[doctor_id].hospitals.filter(x => x.hospital_id == this.state.selectedClinic);

            selectedClinicName = selectedClinicInfo.length ? selectedClinicInfo[0].hospital_name : '';
        }

        let landing_page = false;
        if (typeof window == 'object' && window.ON_LANDING_PAGE) {
            landing_page = true;
        }

        let downloadAppButtonData = {};

        if (landing_page && this.props.app_download_list && this.props.app_download_list.length) {

            this.props.app_download_list.map(banner => {
                if (banner.isenabled && (this.props.match.url.includes(banner.ends_with) || this.props.match.url.includes(banner.starts_with))) {
                    downloadAppButtonData = banner;
                }
            });
        }

        const parsed = queryString.parse(this.props.location.search);
        //check if any utm tag exist in url
        let isUtmTagsExist = false;
        if (parsed.utm_source || parsed.utm_medium || parsed.utm_term || parsed.utm_campaign) {
            isUtmTagsExist = true;
        }
        let showForcedPopup = !isUtmTagsExist && landing_page && this.state.seoFriendly && doctor_id && this.props.DOCTORS[doctor_id] && this.props.DOCTORS[doctor_id].is_congot && this.state.showIpdLeadForm && this.props.DOCTORS[doctor_id].potential_ipd && !this.state.is_live;
        showForcedPopup = false;
        let isSeoValid = true;
        if (_config2.default.SEO_FRIENDLY_HOSPITAL_IDS && this.state.selectedClinic && _config2.default.SEO_FRIENDLY_HOSPITAL_IDS.indexOf(parseInt(this.state.selectedClinic)) > -1) {
            isSeoValid = false;
        }
        let showVipPopup = this.state.showVipPopup;
        if (nearbyDoctors && Object.keys(nearbyDoctors).length) {
            showVipPopup = showVipPopup && this.state.closeNonBookable;
        }
        return _react2.default.createElement(
            'div',
            { className: 'profile-body-wrap' },
            _react2.default.createElement(_DesktopProfileHeader2.default, { showSearch: true }),
            this.props.DOCTORS[doctor_id] && parsed.showPopup && this.state.showIpdLeadForm && typeof window == 'object' && window.ON_LANDING_PAGE || showForcedPopup ? _react2.default.createElement(_ipdLeadForm2.default, _extends({ submitLeadFormGeneration: this.submitLeadFormGeneration.bind(this) }, this.props, { hospital_name: selectedClinicName, hospital_id: this.state.selectedClinic, doctor_name: this.props.DOCTORS[doctor_id].name ? this.props.DOCTORS[doctor_id].name : '', formSource: 'DoctorBookingPage', saveLeadIdForUpdation: this.saveLeadIdForUpdation.bind(this) })) : '',
            this.props.DOCTORS[doctor_id] && this.state.showSecondPopup && parsed.get_feedback && parsed.get_feedback == '1' ? _react2.default.createElement(_IpdDoctorCityPopup2.default, _extends({}, this.props, { firstLeadId: this.state.firstLeadId, all_doctors: [], all_cities: this.props.DOCTORS[doctor_id] && this.props.DOCTORS[doctor_id].all_cities ? this.props.DOCTORS[doctor_id].all_cities : [], doctorProfilePage: true, secondIpdFormSubmitted: this.secondIpdFormSubmitted.bind(this), hospital_name: selectedClinicName, hospital_id: this.state.selectedClinic, doctor_name: this.props.DOCTORS[doctor_id].name ? this.props.DOCTORS[doctor_id].name : '', formSource: 'DoctorBookingPage' })) : '',
            nearbyDoctors && Object.keys(nearbyDoctors).length && !this.state.closeNonBookable ? _react2.default.createElement(_nonBookableDoctor2.default, _extends({}, this.props, { closeNonBookableDocPopup: this.closeNonBookableDocPopup.bind(this), nearbyDoctors: nearbyDoctors, navigateToDoctor: this.navigateToDoctor.bind(this), details: this.props.DOCTORS[doctor_id] })) : '',
            _react2.default.createElement(
                'section',
                { className: 'container parent-section book-appointment-section breadcrumb-mrgn' },
                this.props.DOCTORS[doctor_id] && this.props.DOCTORS[doctor_id].breadcrumb && this.props.DOCTORS[doctor_id].breadcrumb.length ? _react2.default.createElement(
                    'section',
                    { className: 'col-12 mrng-top-12 d-none d-md-block' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'mrb-10 breadcrumb-list breadcrumb-list-ul', style: { 'wordBreak': 'breakWord' } },
                        this.props.DOCTORS[doctor_id] && this.props.DOCTORS[doctor_id].breadcrumb && this.props.DOCTORS[doctor_id].breadcrumb.length ? this.props.DOCTORS[doctor_id].breadcrumb.map((data, key) => {
                            return _react2.default.createElement(
                                'li',
                                { className: 'breadcrumb-list-item', key: key },
                                key == this.props.DOCTORS[doctor_id].breadcrumb.length - 1 ? _react2.default.createElement(
                                    'span',
                                    null,
                                    data.title
                                ) : _react2.default.createElement(
                                    'a',
                                    { href: data.url, title: data.link_title || data.title, onClick: e => {
                                            e.preventDefault();
                                            this.props.history.push(key == 0 || key == this.props.DOCTORS[doctor_id].breadcrumb.length - 1 ? data.url : `/${data.url}`);
                                        } },
                                    key == 0 || key == this.props.DOCTORS[doctor_id].breadcrumb.length - 1 ? _react2.default.createElement(
                                        'span',
                                        { className: 'fw-500 breadcrumb-title breadcrumb-colored-title' },
                                        data.title
                                    ) : _react2.default.createElement(
                                        'h2',
                                        { className: 'fw-500 breadcrumb-title breadcrumb-colored-title d-inline-blck' },
                                        data.title
                                    )
                                ),
                                key != this.props.DOCTORS[doctor_id].breadcrumb.length - 1 ? _react2.default.createElement(
                                    'span',
                                    { className: 'breadcrumb-arrow' },
                                    '>'
                                ) : ''
                            );
                        }) : ''
                    )
                ) : '',
                _react2.default.createElement(
                    'div',
                    { className: 'row main-row parent-section-row' },
                    _react2.default.createElement(_LeftBar2.default, null),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 col-md-7 col-lg-7 center-column' },
                        this.props.DOCTORS[doctor_id] ? _react2.default.createElement(
                            'section',
                            { className: 'dr-profile-screen', style: { paddingBottom: 0 } },
                            !parsed.showPopup && downloadAppButtonData && Object.values(downloadAppButtonData).length ? _react2.default.createElement(
                                'a',
                                { className: 'downloadBtn', href: 'javascript:void(0);', onClick: this.downloadButton.bind(this, downloadAppButtonData) },
                                _react2.default.createElement(
                                    'button',
                                    { className: 'dwnlAppBtn' },
                                    !this.props.device_info ? '' : this.props.device_info.toLowerCase().includes('iphone') || this.props.device_info.toLowerCase().includes('ipad') ? _react2.default.createElement('img', { style: { width: '13px', marginRight: '5px', marginTop: '-1px' }, src: "/assets" + "/img/appl1.svg" }) : _react2.default.createElement('img', { style: { width: '13px', marginRight: '5px' }, src: "/assets" + "/img/andr1.svg" }),
                                    'Download App'
                                )
                            ) : '',
                            _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                                    title: this.getMetaTagsData(this.props.DOCTORS[doctor_id].seo).title,
                                    description: this.getMetaTagsData(this.props.DOCTORS[doctor_id].seo).description,
                                    canonicalUrl: `${_config2.default.API_BASE_URL}${seo_url || this.props.match.url}`,
                                    schema: this.getMetaTagsData(this.props.DOCTORS[doctor_id].seo).schema
                                }, noIndex: !this.state.seoFriendly || !isSeoValid }),
                            _react2.default.createElement(
                                'div',
                                { className: 'container-fluid' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-12' },
                                        this.state.is_live && landing_page && this.state.seoFriendly ? _react2.default.createElement(
                                            'button',
                                            { className: 'doc-top-book-btn', onClick: this.navigateToClinic.bind(this, doctor_id, this.state.selectedClinic, true) },
                                            'Book Now'
                                        ) : '',
                                        this.state.displayHospitalRatingBlock ? _react2.default.createElement(_HospitalPopUp2.default, _extends({}, this.props, { doctor_details: this.props.DOCTORS[doctor_id], popUpState: this.hospitalPopUpState.bind(this) })) : "",
                                        this.props.DOCTORS[doctor_id].unrated_appointment ? _react2.default.createElement(_RatingProfileCard2.default, _extends({}, this.props, { details: this.props.DOCTORS[doctor_id].unrated_appointment })) : "",
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'widget mrt-10 ct-profile skin-white border-bottom-radious gold-relative' },
                                            this.props.DOCTORS[doctor_id].is_gold ? _react2.default.createElement('img', { className: 'gold-card-img', src: "/assets" + "/img/gold.svg" }) : '',
                                            _react2.default.createElement(_doctorProfileCard2.default, _extends({
                                                details: this.props.DOCTORS[doctor_id],
                                                getDoctorNumber: this.props.getDoctorNumber,
                                                recommendDocs: nearbyDoctors.result && nearbyDoctors.result.length,
                                                viewAllDocClick: this.viewAllDocClick.bind(this),
                                                nearbyDoctors: nearbyDoctors ? nearbyDoctors : '',
                                                isSeoFriendly: this.state.seoFriendly,
                                                isOrganic: this.state.isOrganic
                                            }, this.props)),
                                            nearbyDoctors && Object.keys(nearbyDoctors).length ? _react2.default.createElement(
                                                'div',
                                                { className: 'widge-content pd-0' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'widget-panel' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'panel-content pd-0 border-bottom-panel' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'docScrollSliderContainer' },
                                                            nearbyDoctors.result && nearbyDoctors.result.length ? nearbyDoctors.result.map((doctor, id) => {
                                                                return _react2.default.createElement(
                                                                    'div',
                                                                    { className: 'docSlideCard', key: id, style: { cursor: 'auto' } },
                                                                    _react2.default.createElement(
                                                                        'div',
                                                                        { className: 'docSlideHead' },
                                                                        _react2.default.createElement(
                                                                            _initialsPicture2.default,
                                                                            { name: doctor.name, has_image: !!doctor.thumbnail, className: 'initialsPicture-ds slideDocMainImg', style: { width: 60, height: 60, fontSize: '2rem' } },
                                                                            _react2.default.createElement('img', { className: 'fltr-usr-image img-round slideDocMainImg', src: doctor.thumbnail, alt: doctor.display_name, title: doctor.display_name })
                                                                        )
                                                                    ),
                                                                    _react2.default.createElement(
                                                                        'div',
                                                                        { className: 'slideDocContent' },
                                                                        doctor.url ? _react2.default.createElement(
                                                                            'a',
                                                                            { href: `/${doctor.url}`, onClick: e => this.navigateToDoctor(doctor, e) },
                                                                            _react2.default.createElement(
                                                                                'p',
                                                                                { className: 'slideDocName' },
                                                                                doctor.display_name
                                                                            )
                                                                        ) : _react2.default.createElement(
                                                                            'a',
                                                                            { href: 'javascript:;', style: { cursor: 'auto' } },
                                                                            _react2.default.createElement(
                                                                                'p',
                                                                                { className: 'slideDocName' },
                                                                                doctor.display_name
                                                                            )
                                                                        ),
                                                                        _react2.default.createElement(
                                                                            'p',
                                                                            { className: 'slideDocExp' },
                                                                            doctor.experience_years,
                                                                            ' Years of Experience'
                                                                        ),
                                                                        doctor.qualifications && doctor.qualifications.length ? _react2.default.createElement(
                                                                            'p',
                                                                            { className: 'slideDocdeg' },
                                                                            doctor.qualifications.map((qualification, index) => {
                                                                                return _react2.default.createElement(
                                                                                    'span',
                                                                                    { key: index },
                                                                                    qualification.qualification
                                                                                );
                                                                            })
                                                                        ) : '',
                                                                        doctor.hospitals && doctor.hospitals.length ? _react2.default.createElement(
                                                                            'p',
                                                                            { className: 'slideDocExp', style: { marginTop: 5 } },
                                                                            doctor.hospitals[0].hospital_name
                                                                        ) : '',
                                                                        (doctor.hospitals[0].is_gold_member || doctor.hospitals[0].is_vip_member) && doctor.hospitals[0].cover_under_vip ? _react2.default.createElement(
                                                                            'div',
                                                                            { className: 'slideDocPrice mb-0' },
                                                                            doctor.hospitals[0].is_gold_member ? _react2.default.createElement(
                                                                                'span',
                                                                                { className: 'slideNamePrc' },
                                                                                _react2.default.createElement('img', { className: 'non-doc-vip-ico img-fluid', src: "/assets" + '/img/gold-sm.png' })
                                                                            ) : _react2.default.createElement(
                                                                                'span',
                                                                                { className: 'slideNamePrc' },
                                                                                _react2.default.createElement('img', { className: 'vip-main-ico img-fluid', src: "/assets" + '/img/viplog.png' })
                                                                            ),
                                                                            _react2.default.createElement(
                                                                                'span',
                                                                                { className: 'slideNamePrc' },
                                                                                '\u20B9 ',
                                                                                doctor.hospitals[0].vip_convenience_amount + doctor.hospitals[0].vip_gold_price
                                                                            ),
                                                                            _react2.default.createElement(
                                                                                'span',
                                                                                { className: 'slideCutPrc' },
                                                                                '\u20B9 ',
                                                                                doctor.mrp
                                                                            )
                                                                        ) : doctor.discounted_price && doctor.mrp ? _react2.default.createElement(
                                                                            'div',
                                                                            { className: 'slideDocPrice mb-0' },
                                                                            _react2.default.createElement(
                                                                                'span',
                                                                                { className: 'slideNamePrc' },
                                                                                '\u20B9 ',
                                                                                doctor.discounted_price
                                                                            ),
                                                                            _react2.default.createElement(
                                                                                'span',
                                                                                { className: 'slideCutPrc' },
                                                                                '\u20B9 ',
                                                                                doctor.mrp
                                                                            )
                                                                        ) : '',
                                                                        doctor.hospitals[0].enabled_for_online_booking && !doctor.hospitals[0].is_gold_member && !doctor.hospitals[0].is_vip_member && doctor.discounted_price > doctor.hospitals[0].vip_convenience_amount + doctor.hospitals[0].vip_gold_price && doctor.hospitals[0].hosp_is_gold ? _react2.default.createElement(
                                                                            'div',
                                                                            { className: 'pkg-prc-ct home-screengoldprice mb-2', onClick: this.goldClicked.bind(this, doctor.id) },
                                                                            _react2.default.createElement('img', { className: 'gld-cd-icon', src: "/assets" + '/img/gold-sm.png' }),
                                                                            _react2.default.createElement(
                                                                                'p',
                                                                                { className: 'gld-p-rc' },
                                                                                'Price'
                                                                            ),
                                                                            ' ',
                                                                            _react2.default.createElement(
                                                                                'span',
                                                                                { className: 'gld-rate-lf' },
                                                                                '\u20B9 ',
                                                                                doctor.hospitals[0].vip_convenience_amount + doctor.hospitals[0].vip_gold_price
                                                                            ),
                                                                            _react2.default.createElement('img', { style: { transform: 'rotate(-90deg)', width: '10px', margin: '0px 10px 0px 0px' }, src: "/assets" + '/img/customer-icons/dropdown-arrow.svg' })
                                                                        ) : '',
                                                                        _react2.default.createElement(
                                                                            'div',
                                                                            { className: 'slidBookBtn' },
                                                                            _react2.default.createElement(
                                                                                'button',
                                                                                { style: { cursor: 'pointer' }, onClick: e => this.navigateToDoctor(doctor, e) },
                                                                                'Book Now'
                                                                            )
                                                                        )
                                                                    )
                                                                );
                                                            }) : ''
                                                        )
                                                    )
                                                )
                                            ) : '',
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'widge-content pd-0' },
                                                this.props.DOCTORS[doctor_id].about_web ? _react2.default.createElement(_index2.default, {
                                                    details: this.props.DOCTORS[doctor_id]
                                                }) : ""
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'widge-content pd-0' },
                                                this.props.DOCTORS[doctor_id].hospitals && this.props.DOCTORS[doctor_id].hospitals.length ? _react2.default.createElement(_index6.default, _extends({
                                                    details: this.props.DOCTORS[doctor_id]
                                                }, this.props, { doctorId: doctor_id,
                                                    selectClinic: this.selectClinic.bind(this),
                                                    selectedClinic: this.state.selectedClinic
                                                })) : "",
                                                _react2.default.createElement(_index4.default, {
                                                    details: this.props.DOCTORS[doctor_id]
                                                }),
                                                _storage2.default.checkAuth() ? _react2.default.createElement(
                                                    'div',
                                                    { className: 'widget-panel' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'panel-content ratecardBrdr' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'rateUrDoc' },
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Rate your Doctor here'
                                                            ),
                                                            _react2.default.createElement(
                                                                'button',
                                                                { onClick: this.display_hospital_rating_block },
                                                                'Rate Now'
                                                            )
                                                        )
                                                    )
                                                ) : "",
                                                avgRating >= 4 || ratingCount >= 5 ? _react2.default.createElement(_ratingReviewView2.default, _extends({ id: doctor_id, content_type: 2 }, this.props)) : show_google_rating ? _react2.default.createElement(
                                                    'div',
                                                    { className: 'widget-panel' },
                                                    _react2.default.createElement(
                                                        'h4',
                                                        { className: 'panel-title mb-rmv' },
                                                        'Patient Feedback ',
                                                        _react2.default.createElement('a', { className: 'rateViewAll' })
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'panel-content pd-0 border-bottom-panel d-flex align-items-start' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'googleReviewcard', style: { flex: 1 } },
                                                            _react2.default.createElement('img', { src: "/assets" + "/img/powered_by_google_on_white.png" }),
                                                            selectedClinicName ? _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Ratings for',
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    null,
                                                                    selectedClinicName
                                                                )
                                                            ) : ''
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'feed-back-container', style: { flex: 1, marginBottom: 0 } },
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'row' },
                                                                _react2.default.createElement(
                                                                    'div',
                                                                    { className: 'col-12' },
                                                                    google_rating.rating_graph && google_rating.rating_graph.avg_rating ? _react2.default.createElement(_RatingStars2.default, { average_rating: google_rating.rating_graph.avg_rating, width: '12px', height: '12px', justifyCenter: true }) : '',
                                                                    _react2.default.createElement(
                                                                        'div',
                                                                        { className: 'feedback-rating-text' },
                                                                        _react2.default.createElement(
                                                                            'p',
                                                                            { className: 'feedback-rate' },
                                                                            google_rating.rating_graph.avg_rating
                                                                        ),
                                                                        _react2.default.createElement(
                                                                            'p',
                                                                            { className: 'feedback-rate-status' },
                                                                            google_rating.rating_graph.rating_count,
                                                                            ' ratings'
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                ) : ""
                                            )
                                        )
                                    )
                                )
                            ),
                            showVipPopup && _react2.default.createElement(_vipProfilePopup2.default, { toggle: () => this.toggleVip(), navigateToVip: () => this.navigateToVip() }),
                            this.state.is_live ? _react2.default.createElement(
                                'div',
                                { className: 'dpp-btn-div fixed horizontal bottom sticky-btn' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'dpp-btn-book dpp-btn-book-custom', onClick: this.navigateToClinic.bind(this, doctor_id, this.state.selectedClinic, false) },
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        _react2.default.createElement(
                                            'span',
                                            { style: { display: 'inline-block' } },
                                            'Book Now'
                                        )
                                    ),
                                    is_insurance_applicable || true ? '' : _react2.default.createElement(
                                        'p',
                                        { className: 'cp-auto', style: { marginBottom: '8px' } },
                                        '*Coupon auto applied on checkout'
                                    )
                                )
                            ) : _react2.default.createElement(
                                'div',
                                { className: 'dpp-btn-div fixed horizontal bottom sticky-btn' },
                                this.state.clinicPhoneNo[this.state.selectedClinic] ? _react2.default.createElement(
                                    'div',
                                    { className: 'dpp-btn-div fixed horizontal bottom sticky-btn' },
                                    _react2.default.createElement(
                                        'a',
                                        { href: `tel:${this.state.clinicPhoneNo[this.state.selectedClinic]}`, className: 'dpp-btn-book d-lg-none d-flex' },
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            _react2.default.createElement('img', { style: { width: '20px', marginRight: '4px', position: 'relative', left: '-3px', bottom: '-2px' }, src: "/assets" + "/img/call-ico.svg" }),
                                            this.state.clinicPhoneNo[this.state.selectedClinic]
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'dpp-btn-book d-lg-flex d-none' },
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            this.state.clinicPhoneNo[this.state.selectedClinic]
                                        )
                                    )
                                ) : this.state.show_contact ? _react2.default.createElement(
                                    'div',
                                    { className: 'dpp-btn-book', onClick: this.showNumber.bind(this, doctor_id) },
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'View Contact'
                                    )
                                ) : '',
                                this.state.openContactPopup ? _react2.default.createElement(_ContactPopup2.default, { toggle: this.toggle.bind(this, 'openContactPopup'), mobileNo: this.props.primaryMobile, getDoctor: this.getDoctorNo.bind(this) }) : ''
                            )
                        ) : _react2.default.createElement(_Loader2.default, null)
                    ),
                    _react2.default.createElement(_RightBar2.default, { extraClass: ' chat-float-btn-2', type: 'opd', noChatButton: !this.state.searchDataHidden, showDesktopIpd: true, msgTemplate: 'gold_general_template' })
                )
            ),
            _react2.default.createElement(_footer2.default, { footerData: this.state.footerData })
        );
    }
}

exports.default = DoctorProfileView;

/***/ }),

/***/ "./dev/js/components/opd/doctorProfile/aboutDoctor/AboutDoctor.js":
/*!************************************************************************!*\
  !*** ./dev/js/components/opd/doctorProfile/aboutDoctor/AboutDoctor.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let doctorData = false;
class AboutDoctor extends _react2.default.Component {

    constructor(props) {
        super(props);
        this.state = {
            // lessAbout: "",
            // requiredReadMore: false,
            readMore: doctorData
        };
    }

    componentDidMount() {
        this.setState({ readMore: true });
        // this.renderAbout(this.props)
    }

    componentWillReceiveProps(props) {}
    // this.renderAbout(props)


    // renderAbout(props) {
    //     let { about } = props.details
    //     if (about) {
    //         if (about.length > 100) {
    //             this.setState({
    //                 readMore: true,
    //                 requiredReadMore: true
    //             })
    //         }
    //         this.setState({
    //             lessAbout: about.slice(0, 100) + "..."
    //         })
    //     }
    // }

    render() {

        let { about, name } = this.props.details;
        let button = "";

        if (this.state.requiredReadMore) {
            // button = <a className="fw-700 text-primary" style={{ cursor: 'pointer' }} onClick={() => {
            //     this.setState({ readMore: false, lessAbout: about })
            // }}> READ MORE &#9660;</a>

            // if (!this.state.readMore) {
            //     button = <a className="fw-700 text-primary" style={{ cursor: 'pointer' }} onClick={() => {
            //         this.setState({ readMore: true, lessAbout: about.slice(0, 100) + "..." })
            //     }}> SHOW LESS &#9650;</a>
            // }
        }
        let aboutTxt;
        if (this.props.details.about_web) {
            if (this.props.details.about_web.length > 150) {
                if (this.state.readMore) {
                    aboutTxt = this.props.details.about_web.slice(0, 150) + "...";
                    button = _react2.default.createElement(
                        'a',
                        { className: 'fw-700 text-primary', style: { cursor: 'pointer' }, onClick: () => {
                                this.setState({ readMore: !this.state.readMore });
                            } },
                        ' Read More ',
                        _react2.default.createElement(
                            'span',
                            { style: { fontSize: 11, display: 'inline-block', verticalAlign: 'middle' } },
                            '\u25BC'
                        )
                    );
                } else {
                    aboutTxt = this.props.details.about_web;
                    button = _react2.default.createElement(
                        'a',
                        { className: 'fw-700 text-primary', style: { cursor: 'pointer' }, onClick: () => {
                                this.setState({ readMore: !this.state.readMore });
                            } },
                        ' Show Less ',
                        _react2.default.createElement(
                            'span',
                            { style: { fontSize: 11, display: 'inline-block', verticalAlign: 'middle' } },
                            '\u25B2'
                        )
                    );
                }
            } else {
                aboutTxt = this.props.details.about_web;
            }
        }
        return _react2.default.createElement(
            'div',
            { className: 'widget-panel' },
            _react2.default.createElement(
                'h2',
                { className: 'panel-title mb-rmv' },
                'About Dr. ',
                name
            ),
            _react2.default.createElement(
                'div',
                { className: 'panel-content' },
                _react2.default.createElement('div', { className: 'fw-10000 text-md abt-doc-inlinetext', dangerouslySetInnerHTML: { __html: aboutTxt } }),
                button
            )
        );
    }
}

exports.default = AboutDoctor;

/***/ }),

/***/ "./dev/js/components/opd/doctorProfile/aboutDoctor/index.js":
/*!******************************************************************!*\
  !*** ./dev/js/components/opd/doctorProfile/aboutDoctor/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AboutDoctor = __webpack_require__(/*! ./AboutDoctor.js */ "./dev/js/components/opd/doctorProfile/aboutDoctor/AboutDoctor.js");

var _AboutDoctor2 = _interopRequireDefault(_AboutDoctor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _AboutDoctor2.default;

/***/ }),

/***/ "./dev/js/components/opd/doctorProfile/index.js":
/*!******************************************************!*\
  !*** ./dev/js/components/opd/doctorProfile/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DoctorProfileView = __webpack_require__(/*! ./DoctorProfileView.js */ "./dev/js/components/opd/doctorProfile/DoctorProfileView.js");

var _DoctorProfileView2 = _interopRequireDefault(_DoctorProfileView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DoctorProfileView2.default;

/***/ }),

/***/ "./dev/js/components/opd/doctorProfile/nonBookableDoctor.js":
/*!******************************************************************!*\
  !*** ./dev/js/components/opd/doctorProfile/nonBookableDoctor.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _initialsPicture = __webpack_require__(/*! ../../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _RatingStars = __webpack_require__(/*! ../../commons/ratingsProfileView/RatingStars */ "./dev/js/components/commons/ratingsProfileView/RatingStars.js");

var _RatingStars2 = _interopRequireDefault(_RatingStars);

var _doctorResultCard = __webpack_require__(/*! ../commons/doctorResultCard */ "./dev/js/components/opd/commons/doctorResultCard/index.js");

var _doctorResultCard2 = _interopRequireDefault(_doctorResultCard);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class NonBookableDoctor extends _react2.default.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	ViewAll() {
		let speciality = {};
		if (this.props.details.doctors && this.props.details.doctors.specializations) {

			speciality.id = this.props.details.doctors.specializations[0].id;
			speciality.name = this.props.details.doctors.specializations[0].name;
			speciality.type = 'speciality';
			let data = {
				'Category': 'ConsumerApp', 'Action': 'NonBookableDoctorViewAllClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'Non-Bookable-Doctor-ViewAll-clicked', 'selected': speciality.name || '', 'selectedId': speciality.id || ''
			};
			_gtm2.default.sendEvent({ data: data });
			this.props.toggleOPDCriteria('speciality', speciality, true);
			setTimeout(() => {
				this.props.history.push('/opd/searchresults');
			}, 100);
		}
	}
	render() {

		return _react2.default.createElement(
			'div',
			{ className: 'search-el-popup-overlay  cancel-overlay-zindex' },
			_react2.default.createElement(
				'div',
				{ className: 'search-el-popup non-book-pop' },
				_react2.default.createElement(
					'div',
					{ className: 'widget p-relative' },
					_react2.default.createElement('img', { className: 'non-book-cls-btn', src: "/assets" + "/img/icons/close.png", onClick: this.props.closeNonBookableDocPopup.bind(this) }),
					_react2.default.createElement(
						'div',
						{ className: 'non-bok-hdng-container' },
						_react2.default.createElement(
							'p',
							{ className: 'non-bok-heading' },
							this.props.details.display_name,
							' is not bookable'
						),
						_react2.default.createElement(
							'p',
							{ className: 'non-bok-subhdng' },
							'See bookable doctors with great discounts below'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'non-bok-cards-container' },
						this.props.nearbyDoctors.result && this.props.nearbyDoctors.result.length ? this.props.nearbyDoctors.result.map((doctor, id) => {
							if (id <= 1) {
								return _react2.default.createElement(_doctorResultCard2.default, _extends({}, this.props, { details: doctor, key: id, rank: id, isNonBookablePopup: true }));
							}
						}) : ''
					),
					this.props.details.doctors && this.props.details.doctors.specializations ? _react2.default.createElement(
						'p',
						{ className: 'viw-all-non-bok', onClick: this.ViewAll.bind(this) },
						'View All Top ',
						this.props.details.doctors.specializations[0].name,
						' Near You'
					) : ''
				)
			)
		);
	}
}

exports.default = NonBookableDoctor;

/***/ }),

/***/ "./dev/js/components/opd/doctorProfile/professionalGraph/ExpansionPanel.js":
/*!*********************************************************************************!*\
  !*** ./dev/js/components/opd/doctorProfile/professionalGraph/ExpansionPanel.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ExpansionPanel extends _react2.default.Component {

	constructor(props) {
		super(props);
		this.state = {
			open: true
		};
	}

	toggleOpen() {
		this.setState({ open: !this.state.open });
	}

	render() {

		let { heading, contentList, image } = this.props;

		let listId = heading.toLowerCase();

		return _react2.default.createElement(
			'li',
			{ className: 'expansion-panel-list-item', id: listId },
			_react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'title', onClick: this.toggleOpen.bind(this), style: { marginBottom: 0 } },
					_react2.default.createElement('img', { src: image, style: { verticalAlign: '-2px', marginRight: 8, display: 'inline-block', width: '22px' } }),
					_react2.default.createElement(
						'h3',
						{ className: 'fw-500 text-md mrb-0', style: { display: 'inline-block' } },
						heading
					),
					this.state.open ? _react2.default.createElement('img', { className: 'titlearrow-up', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" }) : _react2.default.createElement('img', { className: 'titlearrow', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
				),
				this.state.open ? _react2.default.createElement(
					'div',
					{ className: 'more-content' },
					this.props.qulification ? contentList.map((cont, i) => {
						return _react2.default.createElement(
							'div',
							{ className: 'form-group expansion-label-div', key: i, style: { marginTop: 10 } },
							_react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
									'p',
									{ className: 'fw-700 text-md text-light', style: { display: 'inline-block', verticalAlign: 'middle' } },
									cont.qualification,
									cont.specialization ? _react2.default.createElement(
										'span',
										{ className: 'fw-700 text-md text-light', style: { verticalAlign: 'middle' } },
										'\xA0\xA0|\xA0\xA0'
									) : '',
									cont.specialization,
									cont.college ? _react2.default.createElement(
										'span',
										{ className: 'fw-700 text-md text-light', style: { verticalAlign: 'middle' } },
										'\xA0\xA0|\xA0\xA0'
									) : '',
									cont.passing_year ? _react2.default.createElement(
										'span',
										null,
										`${cont.college} - ${cont.passing_year}`
									) : ''
								)
							)
						);
					}) : contentList.map((cont, i) => {
						return _react2.default.createElement(
							'div',
							{ className: 'expansion-label-div', key: i },
							cont.heading ? _react2.default.createElement(
								'label',
								{ className: 'fw-700 text-sm text-primary' },
								cont.heading
							) : "",
							_react2.default.createElement(
								'p',
								{ className: 'fw-700 text-md text-light', style: { lineHeight: '20px' } },
								cont.content
							)
						);
					})
				) : ""
			)
		);
	}
}

exports.default = ExpansionPanel;

/***/ }),

/***/ "./dev/js/components/opd/doctorProfile/professionalGraph/ProfessionalGraph.js":
/*!************************************************************************************!*\
  !*** ./dev/js/components/opd/doctorProfile/professionalGraph/ProfessionalGraph.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _ExpansionPanel = __webpack_require__(/*! ./ExpansionPanel */ "./dev/js/components/opd/doctorProfile/professionalGraph/ExpansionPanel.js");

var _ExpansionPanel2 = _interopRequireDefault(_ExpansionPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProfessionalGraph extends _react2.default.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let { name, profile_img, qualifications, phone_number, email, practicing_since, gender, languages, license, mobiles, awards, associations, medical_services, experiences } = this.props.details;

        qualifications = qualifications || [];

        return _react2.default.createElement(
            'div',
            { className: 'widget-panel' },
            _react2.default.createElement(
                'h2',
                { className: 'panel-title', style: { marginBottom: 0 } },
                'Professional Graph of Dr. ',
                name
            ),
            _react2.default.createElement(
                'div',
                { className: 'panel-content expansion-content pd-0' },
                _react2.default.createElement(
                    'ul',
                    { className: 'list drop-down-list' },
                    qualifications ? _react2.default.createElement(_ExpansionPanel2.default, {
                        heading: "Qualification",
                        contentList: qualifications,
                        qulification: true,
                        image: "/assets/img/customer-icons/Education-01.svg"
                    }) : "",
                    languages && languages.length ? _react2.default.createElement(_ExpansionPanel2.default, {
                        heading: "Language",
                        image: "/assets/img/customer-icons/Language-01.svg",
                        contentList: [{
                            heading: "", content: languages.reduce((final, curr, i) => {
                                final += `${curr.language}`;
                                if (i < languages.length - 1) final += " | ";
                                return final;
                            }, "")
                        }]
                    }) : "",
                    awards && awards.length ? _react2.default.createElement(_ExpansionPanel2.default, {
                        heading: "Awards",
                        image: "/assets/img/customer-icons/Award-01.svg",
                        contentList: awards.map(award => {
                            award.year = award.year || "";
                            if (award.year) {
                                return { heading: "", content: `${award.name}, ${award.year}` };
                            } else {
                                return { heading: "", content: `${award.name}` };
                            }
                        })
                    }) : "",
                    associations && associations.length ? _react2.default.createElement(_ExpansionPanel2.default, {
                        heading: "Associate Membership",
                        image: "/assets/img/customer-icons/AssociateMembership.svg",
                        contentList: associations.map(association => {
                            return { heading: "", content: `${association.name}` };
                        })
                    }) : "",
                    experiences && experiences.length ? _react2.default.createElement(_ExpansionPanel2.default, {
                        heading: "Experience",
                        image: "/assets/img/customer-icons/Experienced-01.svg",
                        contentList: experiences.map(experience => {
                            return { heading: "", content: `${experience.hospital}, ${experience.start_year} - ${experience.end_year}` };
                        })
                    }) : "",
                    medical_services && medical_services.length ? _react2.default.createElement(_ExpansionPanel2.default, {
                        heading: "Subscribed Services",
                        image: "/assets/img/customer-icons/SubscribedServices-01.svg",
                        contentList: medical_services.map(service => {
                            return { heading: "", content: `${service.name}` };
                        })
                    }) : ""
                )
            )
        );
    }
}

exports.default = ProfessionalGraph;

/***/ }),

/***/ "./dev/js/components/opd/doctorProfile/professionalGraph/index.js":
/*!************************************************************************!*\
  !*** ./dev/js/components/opd/doctorProfile/professionalGraph/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ProfessionalGraph = __webpack_require__(/*! ./ProfessionalGraph.js */ "./dev/js/components/opd/doctorProfile/professionalGraph/ProfessionalGraph.js");

var _ProfessionalGraph2 = _interopRequireDefault(_ProfessionalGraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ProfessionalGraph2.default;

/***/ }),

/***/ "./dev/js/components/opd/doctorProfile/vipProfilePopup.js":
/*!****************************************************************!*\
  !*** ./dev/js/components/opd/doctorProfile/vipProfilePopup.js ***!
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

exports.default = ({ props, toggle, navigateToVip }) => {
	return _react2.default.createElement(
		"div",
		null,
		_react2.default.createElement("div", { className: "cancel-overlay vip-cncl-overlay", onClick: () => toggle() }),
		_react2.default.createElement(
			"div",
			{ className: "widget cancel-appointment-div cancel-popup vip-pop-mbl" },
			_react2.default.createElement("img", { src: "/assets" + "/img/icons/close.png", style: { cursor: 'pointer', zIndex: '9' }, className: "close-modal", onClick: () => toggle() }),
			_react2.default.createElement(
				"div",
				{ className: "widget-header text-center action-screen-header", style: { position: 'relative', paddingTop: '' } },
				_react2.default.createElement(
					"p",
					{ className: "vp-pop-grn" },
					"Save 70% on Appointments"
				),
				_react2.default.createElement(
					"p",
					{ className: "vp-pop-sub-txt" },
					" Become Docprime ",
					_react2.default.createElement("img", { src: "/assets" + "/img/viplog.png" }),
					" member today "
				),
				_react2.default.createElement(
					"button",
					{ className: "vp-pop-ch-btn", onClick: () => navigateToVip() },
					"Know more"
				)
			)
		)
	);
};

/***/ }),

/***/ "./dev/js/containers/opd/DoctorProfile.js":
/*!************************************************!*\
  !*** ./dev/js/containers/opd/DoctorProfile.js ***!
  \************************************************/
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

var _index2 = __webpack_require__(/*! ../../components/opd/doctorProfile/index.js */ "./dev/js/components/opd/doctorProfile/index.js");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class DoctorProfile extends _react2.default.Component {
    constructor(props) {
        super(props);
        let d_id = this.props.match.params.id || this.get_doctor_id_by_url(this.props.match.url);
        this.state = {
            selectedDoctor: d_id,
            is_procedure: false,
            hospital_id: ''
        };
    }

    get_doctor_id_by_url(url) {
        for (let d_id in this.props.DOCTORS) {
            if (this.props.DOCTORS[d_id].url && url.includes(this.props.DOCTORS[d_id].url)) {
                return d_id;
            }
        }
        return null;
    }

    static loadData(store, match, queryData = {}) {
        if (match.params.id) {
            return store.dispatch((0, _index.getDoctorById)(match.params.id, queryData.hospital_id || '', queryData.procedure_ids || [], queryData.category_ids || []));
        } else {
            let url = match.url;
            if (url) {
                url = url.split("/")[1];
            }
            return new Promise((resolve, reject) => {
                store.dispatch((0, _index.getDoctorByUrl)(url, queryData.hospital_id || '', queryData.procedure_ids || [], queryData.category_ids || [], (doctor_id, url) => {
                    if (doctor_id) {
                        if (match.url.includes('-dpp')) {
                            (0, _index.getFooterData)(match.url.split("/")[1])().then(footerData => {
                                footerData = footerData || null;
                                resolve({ doctor_id, footerData });
                            }).catch(e => {
                                resolve({ doctor_id });
                            });
                        } else {
                            resolve({ doctor_id });
                        }
                    } else {
                        reject({
                            url: url
                        });
                    }
                }));
            });
        }
    }

    componentDidMount() {
        const parsed = queryString.parse(this.props.location.search);
        let hospital_id = '';
        let is_procedure = false;
        let category_ids = [];
        let procedure_ids = [];

        if (parsed) {
            hospital_id = parsed.hospital_id || '';
            is_procedure = parsed.is_procedure || false;
            category_ids = parsed.category_ids || [];
            procedure_ids = parsed.procedure_ids || [];
        }

        if (this.props.match.params.id) {
            //if (!this.state.selectedDoctor || !this.props.DOCTORS[this.state.selectedDoctor]) {
            this.props.getDoctorById(this.props.match.params.id, hospital_id, procedure_ids, category_ids);
            //}
            this.setState({ hospital_id: hospital_id, is_procedure: is_procedure });
        } else {
            let url = this.props.match.url;
            if (url) {
                url = url.split("/")[1];
            }
            //if (!this.state.selectedDoctor || !this.props.DOCTORS[this.state.selectedDoctor]) {
            this.props.getDoctorByUrl(url, hospital_id, procedure_ids, category_ids, doctor_id => {
                if (doctor_id) {
                    this.setState({ selectedDoctor: doctor_id });
                }
            });
            //}
            this.setState({ hospital_id: hospital_id, is_procedure: is_procedure });
        }

        //always clear selected time at doctor profile
        let slot = { time: {} };
        this.props.selectOpdTimeSLot(slot, false);
    }

    componentWillReceiveProps(props) {
        if (props.fetchNewResults && props.fetchNewResults != this.props.fetchNewResults) {
            if (window) {
                window.scrollTo(0, 0);
            }
        }
    }

    render() {
        return _react2.default.createElement(_index3.default, _extends({}, this.props, { selectedDoctor: this.state.selectedDoctor }, this.state));
    }
}

DoctorProfile.contextTypes = {
    router: () => null
};
const mapStateToProps = (state, passedProps) => {
    /**
     * initialServerData is server rendered async data required build html on server. 
     */
    let initialServerData = null;
    let { staticContext } = passedProps;
    if (staticContext && staticContext.data) {
        initialServerData = staticContext.data;
    }

    let DOCTORS = state.DOCTOR_PROFILES;
    let { rated_appoinments, profiles, selectedProfile, primaryMobile, app_download_list, device_info, ipd_chat } = state.USER;

    const {
        selectedCriterias,
        selectedLocation,
        fetchNewResults,
        commonProcedurers,
        filterCriteria,
        commonSelectedCriterias
    } = state.SEARCH_CRITERIA_OPD;

    const {
        selectedDoctorProcedure,
        profileCommonProcedures
    } = state.DOCTOR_SEARCH;

    return {
        DOCTORS, initialServerData, rated_appoinments, profiles, selectedProfile, selectedCriterias, selectedLocation, fetchNewResults, commonProcedurers, selectedDoctorProcedure, profileCommonProcedures, primaryMobile, filterCriteria, app_download_list, device_info, ipd_chat, commonSelectedCriterias
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getDoctorByUrl: (doctr_url, hospitalId, procedure_ids, category_ids, cb) => dispatch((0, _index.getDoctorByUrl)(doctr_url, hospitalId, procedure_ids, category_ids, cb)),
        getDoctorById: (doctorId, hospitalId, procedure_ids, category_ids) => dispatch((0, _index.getDoctorById)(doctorId, hospitalId, procedure_ids, category_ids)),
        selectOpdTimeSLot: (slot, reschedule, appointmentId) => dispatch((0, _index.selectOpdTimeSLot)(slot, reschedule, appointmentId)),
        getRatingCompliments: callback => dispatch((0, _index.getRatingCompliments)(callback)),
        createAppointmentRating: (appointmentData, callback) => dispatch((0, _index.createAppointmentRating)(appointmentData, callback)),
        updateAppointmentRating: (ratingData, callback) => dispatch((0, _index.updateAppointmentRating)(ratingData, callback)),
        getDoctorNumber: (doctorId, hospital_id, callback) => dispatch((0, _index.getDoctorNumber)(doctorId, hospital_id, callback)),
        closeAppointmentRating: (doctorId, callback) => dispatch((0, _index.closeAppointmentRating)(doctorId, callback)),
        closeAppointmentPopUp: (id, callback) => dispatch((0, _index.closeAppointmentPopUp)(id, callback)),
        getFooterData: url => dispatch((0, _index.getFooterData)(url)),
        mergeOPDState: (state, fetchNewResults) => dispatch((0, _index.mergeOPDState)(state, fetchNewResults)),
        toggleProfileProcedures: (procedure_to_toggle, doctor_id, hospital_id) => dispatch((0, _index.toggleProfileProcedures)(procedure_to_toggle, doctor_id, hospital_id)),
        saveProfileProcedures: (doctor_id, clinic_id) => dispatch((0, _index.saveProfileProcedures)(doctor_id, clinic_id)),
        getDoctorNo: (doctorData, cb) => dispatch((0, _index.getDoctorNo)(doctorData, cb)),
        toggleOPDCriteria: (type, criteria, forceAdd) => dispatch((0, _index.toggleOPDCriteria)(type, criteria, forceAdd)),
        getAllRatings: (content_type, object_id, page, cb) => dispatch((0, _index.getAllRatings)(content_type, object_id, page, cb)),
        getDownloadAppBannerList: cb => dispatch((0, _index.getDownloadAppBannerList)(cb)),
        ipdChatView: data => dispatch((0, _index.ipdChatView)(data)),
        clearVipSelectedPlan: () => dispatch((0, _index.clearVipSelectedPlan)()),
        NonIpdBookingLead: (data, cb) => dispatch((0, _index.NonIpdBookingLead)(data, cb)),
        saveLeadPhnNumber: number => dispatch((0, _index.saveLeadPhnNumber)(number))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DoctorProfile);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9Db21wbGltZW50TGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9yYXRpbmdzUHJvZmlsZVZpZXcvSG9zcGl0YWxQb3BVcC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9yYXRpbmdSZXZpZXdWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL29wZC9jb21tb25zL2NsaW5pY1NlbGVjdG9yL0NsaW5pY1NlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL29wZC9jb21tb25zL2NsaW5pY1NlbGVjdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL29wZC9jb21tb25zL3Byb2ZpbGVQb3BVcC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvZG9jdG9yUHJvZmlsZS9Db250YWN0UG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL2RvY3RvclByb2ZpbGUvRG9jdG9yUHJvZmlsZVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL2RvY3RvclByb2ZpbGUvYWJvdXREb2N0b3IvQWJvdXREb2N0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL2RvY3RvclByb2ZpbGUvYWJvdXREb2N0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL2RvY3RvclByb2ZpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL2RvY3RvclByb2ZpbGUvbm9uQm9va2FibGVEb2N0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL2RvY3RvclByb2ZpbGUvcHJvZmVzc2lvbmFsR3JhcGgvRXhwYW5zaW9uUGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL2RvY3RvclByb2ZpbGUvcHJvZmVzc2lvbmFsR3JhcGgvUHJvZmVzc2lvbmFsR3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL2RvY3RvclByb2ZpbGUvcHJvZmVzc2lvbmFsR3JhcGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL2RvY3RvclByb2ZpbGUvdmlwUHJvZmlsZVBvcHVwLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL29wZC9Eb2N0b3JQcm9maWxlLmpzIl0sIm5hbWVzIjpbIkNvbXBsaW1lbnRMaXN0VmlldyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsImRldGFpbHMiLCJpY29uIiwibWVzc2FnZSIsImNvdW50IiwiSG9zcGl0YWxQb3BVcCIsImdldHVudmVyaWZpZWREYXRhIiwib2JqIiwiZG9jdG9yX2RldGFpbHMiLCJob3NwaXRhbHMiLCJ0aHVtYm5haWwiLCJkaXNwbGF5X25hbWUiLCJpZCIsInN0YXRlIiwiZGF0YSIsImRpc3BsYXlSYXRpbmdCbG9jayIsInNlbGVjdGVkSG9zcGl0YWwiLCJjb21wb25lbnREaWRNb3VudCIsInNlbGVjdFJhdGluZ0hvc3BpdGFsIiwic2V0U3RhdGUiLCJmaWx0ZXIiLCJ4IiwiaG9zcGl0YWxfaWQiLCJkZWNsaW5lUmF0aW5nIiwicG9wVXBTdGF0ZSIsImJpbmQiLCJBU1NFVFNfQkFTRV9VUkwiLCJsZW5ndGgiLCJtYXAiLCJob3NwIiwiaSIsImhvc3BpdGFsX25hbWUiLCJSYXRpbmdSZXZpZXdWaWV3IiwiaGFzTW9yZSIsImZvb3RlckRhdGEiLCJwYWdlIiwid2luZG93Iiwic2Nyb2xsVG8iLCJnZXRBbGxSYXRpbmdzIiwiY29udGVudF90eXBlIiwiZXJyIiwic2V0VGltZW91dCIsImxvYWRNb3JlIiwibG9hZGluZyIsIm5ld0RhdGEiLCJyYXRpbmciLCJjb25jYXQiLCJyYXRpbmdfZ3JhcGgiLCJ0b3BfY29tcGxpbWVudHMiLCJjb21wbGltZW50IiwiQ2xpbmljU2VsZWN0b3IiLCJudW1iZXJTaG93biIsInNob3dOdW1iZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJHVE0iLCJnZXRVc2VySWQiLCJzZW5kRXZlbnQiLCJnZXREb2N0b3JOdW1iZXIiLCJudW1iZXIiLCJ0b2dnbGUiLCJ3aGljaCIsInByb2NlZHVyZVBvcFVwIiwidmllTW9yZVByb2NlZHVyZXMiLCJzZWxlY3RlZElkIiwiZ29Ub0hvc3BpdGFsUGFnZSIsImhvc3BpdGFsIiwidXJsIiwiaGlzdG9yeSIsInB1c2giLCJuYW1lIiwiaXNfbGl2ZSIsImVuYWJsZWRfZm9yX29ubGluZV9ib29raW5nIiwic3R5bGUiLCJzZWxlY3RlZENsaW5pYyIsInNlbGVjdENsaW5pYyIsImRpc2NvdW50ZWRfcHJpY2UiLCJzaG93X2NvbnRhY3QiLCJ2aXBfZGlzY291bnRlZF9wcmljZSIsInZpcCIsInZpcF9nb2xkX3ByaWNlIiwidmlwX2NvbnZlbmllbmNlX2Ftb3VudCIsImZvbnRTaXplIiwiaW5zdXJhbmNlIiwiaXNfaW5zdXJhbmNlX2NvdmVyZWQiLCJpc191c2VyX2luc3VyZWQiLCJwYXJzZUludCIsImluc3VyYW5jZV90aHJlc2hvbGRfYW1vdW50IiwiaXNfZ29sZF9tZW1iZXIiLCJpc192aXBfbWVtYmVyIiwiY292ZXJfdW5kZXJfdmlwIiwidmlwX2Ftb3VudCIsIm1ycCIsImVuYWJsZWRfZm9yX2NvZCIsImVuYWJsZWRfZm9yX3ByZXBhaWQiLCJjb2RfZGVhbF9wcmljZSIsImlzX2VuYWJsZV9mb3JfdmlwIiwiY2xlYXJWaXBTZWxlY3RlZFBsYW4iLCJhbmFseXRpY0RhdGEiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsIm1hcmdpbiIsImFncmVlZF9wcmljZSIsImFkZHJlc3MiLCJmbGV4IiwiT2JqZWN0Iiwia2V5cyIsInRpbWluZ3MiLCJ0aW1pbmdLZXkiLCJrZXkiLCJqb2luIiwibGF0IiwibG9uZyIsImZsb2F0IiwiY3Vyc29yIiwiaGVpZ2h0IiwiUG9wVXBWaWV3Iiwic2VsZWN0ZWRQcm9jZWR1cmVJZHMiLCJwcm9jZWR1cmUiLCJ2YWx1ZXMiLCJpc19zZWxlY3RlZCIsInByb2NlZHVyZV9pZCIsInRvZ2dsZURhdGEiLCJzZWxlY3RlZFByb2NlZHVyZXMiLCJpbmRleE9mIiwic3BsaWNlIiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwidGV4dCIsInRvZ2dsZUZpbmFsIiwiZG9jdG9yX2lkIiwiZmV0Y2hSZXN1bHRzIiwic29ydCIsImV2ZXJ5IiwidmFsdWUiLCJpbmRleCIsInRvZ2dsZVByb2ZpbGVQcm9jZWR1cmVzIiwidG9nZ2xlUHJvY2VkdXJlIiwicHJvY2VkdXJlX3RvX3RvZ2dsZSIsInNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlIiwiY2F0ZWdvcmllcyIsImZvdW5kIiwiZXJyb3JNc2ciLCJwcm9jZWR1cmVfaWRzIiwiY2F0ZWdvcnkiLCJjYXRlZ29yeV9uYW1lIiwicHJvY2VkdXJlX25hbWUiLCJob3NwaXRhbEVuYWJsZSIsImRlYWxfcHJpY2UiLCJDb250YWN0UG91cFZpZXciLCJ2YWxpZGF0ZU5vIiwicGhvbmVOdW1iZXIiLCJpbnB1dEhhbmRsZXIiLCJ0YXJnZXQiLCJtb2JpbGVObyIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJoYW5kbGVDb250aW51ZVByZXNzIiwic3VibWl0IiwiZ2V0RG9jdG9yIiwiekluZGV4IiwicG9zaXRpb24iLCJwYWRkaW5nVG9wIiwiY29sb3IiLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJEb2N0b3JQcm9maWxlVmlldyIsImRpc3BsYXlfaG9zcGl0YWxfcmF0aW5nX2Jsb2NrIiwiZGlzcGxheUhvc3BpdGFsUmF0aW5nQmxvY2siLCJpbml0aWFsU2VydmVyRGF0YSIsInBhcnNlZCIsInBhcnNlIiwibG9jYXRpb24iLCJzZWFyY2giLCJzZW9GcmllbmRseSIsIm1hdGNoIiwiaW5jbHVkZXMiLCJyYW5rIiwiY29uc3VsdGF0aW9uX2ZlZSIsInNlYXJjaFNob3duIiwic2VhcmNoRGF0YUhpZGRlbiIsIm9wZW5Db250YWN0UG9wdXAiLCJjbGluaWNQaG9uZU5vIiwiaXNPcmdhbmljIiwic2hvd0lwZExlYWRGb3JtIiwic2hvd1NlY29uZFBvcHVwIiwiZmlyc3RMZWFkSWQiLCJjbG9zZU5vbkJvb2thYmxlIiwic2hvd1ZpcFBvcHVwIiwic2hvd05vbklwZFBvcHVwIiwic2hvd19wb3B1cCIsInRvX2JlX2ZvcmNlIiwiaXNfb3JnYW5pY19sYW5kaW5nIiwiaXNfbGVhZF9lbmFibGVkIiwiZ2V0Rm9vdGVyRGF0YSIsInNwbGl0IiwidGhlbiIsImFwcF9kb3dubG9hZF9saXN0IiwiZ2V0RG93bmxvYWRBcHBCYW5uZXJMaXN0IiwicmVzcCIsInNob3dEb3dubG9hZEFwcFdpZGdldCIsInRpbWVfdG9fc2hvdyIsInNlbGVjdGVkRG9jdG9yIiwiRE9DVE9SUyIsImRhdGFMaXN0IiwibGFuZGluZ19wYWdlIiwiT05fTEFORElOR19QQUdFIiwiZG93bmxvYWRBcHBCdXR0b25EYXRhIiwiYmFubmVyIiwiaXNlbmFibGVkIiwiZW5kc193aXRoIiwic3RhcnRzX3dpdGgiLCJndG1UcmFjayIsImRldmljZV9pbmZvIiwiZ2V0TWV0YVRhZ3NEYXRhIiwic2VvRGF0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzY2hlbWEiLCJjbGluaWNfaWQiLCJuYXZpZ2F0ZVRvQ2xpbmljIiwiY2xpbmljSWQiLCJ0b3BCb29rTm93IiwiZ3RtRGF0YSIsInNhdmVQcm9maWxlUHJvY2VkdXJlcyIsInBhdGhuYW1lIiwiZ2V0RG9jdG9yTm8iLCJwb3N0RGF0YSIsIm5hdmlnYXRlVG9Eb2N0b3IiLCJkb2N0b3IiLCJ2aWV3QWxsRG9jQ2xpY2siLCJuZWFyYnlEb2N0b3JzIiwib3BlbiIsImRvY3RvcnNfdXJsIiwiaG9zcGl0YWxQb3BVcFN0YXRlIiwiZG93bmxvYWRCdXR0b24iLCJVUkwiLCJzdWJtaXRMZWFkRm9ybUdlbmVyYXRpb24iLCJpcGRGb3JtUGFyYW1zIiwiaXBkX2RhdGEiLCJzaG93Q2hhdCIsInNhdmVMZWFkSWRGb3JVcGRhdGlvbiIsInJlc3BvbnNlIiwic2Vjb25kSXBkRm9ybVN1Ym1pdHRlZCIsImNsb3NlTm9uQm9va2FibGVEb2NQb3B1cCIsInRvZ2dsZVZpcCIsIm5hdmlnYXRlVG9WaXAiLCJnb2xkQ2xpY2tlZCIsIm5vbklwZExlYWRzIiwicGhvbmVfbnVtYmVyIiwiY3JpdGVyaWFTdHIiLCJkaXNwbGF5X3RvdGFsX21ycCIsImRpc3BsYXlfZG9jcHJpbWVfZGlzY291bnQiLCJzZWxlY3RlZF9ob3NwaXRhbCIsImlzVXRtVGFnc0V4aXN0IiwidXRtX3NvdXJjZSIsInV0bV9tZWRpdW0iLCJ1dG1fdGVybSIsInV0bV9jYW1wYWlnbiIsImxlYWRfc291cmNlIiwic291cmNlIiwibGVhZF90eXBlIiwiZXhpdHBvaW50X3VybCIsImRvY3Rvcl9uYW1lIiwiaXNfb3JnYW5pYyIsImFtb3VudF9kaXNjb3VudCIsImNvbW1vbl91dG1fdGFncyIsInV0bV90YWdzIiwidHlwZSIsInZpc2l0b3JfaW5mbyIsImdldFZpc2l0b3JJbmZvIiwidmlzaXRfaWQiLCJ2aXNpdG9yX2lkIiwiZ3RtX2RhdGEiLCJzYXZlTGVhZFBobk51bWJlciIsIlNUT1JBR0UiLCJpc0FnZW50IiwiTm9uSXBkQm9va2luZ0xlYWQiLCJjbG9zZUlwZExlYWRQb3B1cCIsImZyb20iLCJzaG93X2RwcF9vcmdhbmljX3BvcHVwIiwiZmluYWxfcHJpY2UiLCJwcmljZSIsInNlYXJjaF9kYXRhIiwic2VvX3VybCIsImRvY19vcmdhbmljX3ByaWNlIiwibGVhZF9jb21wYXJlX2Ftb3VudCIsImRvY3RvcnMiLCJpc19pbnN1cmFuY2VfYXBwbGljYWJsZSIsImdvb2dsZV9yYXRpbmciLCJkaXNwbGF5X3JhdGluZ193aWRnZXQiLCJnb29nbGVfcmF0aW5nX2dyYXBoIiwiYXZnX3JhdGluZyIsInJhdGluZ19jb3VudCIsImF2Z1JhdGluZyIsInJhdGluZ0NvdW50Iiwic2hvd19nb29nbGVfcmF0aW5nIiwic2VsZWN0ZWRDbGluaWNOYW1lIiwic2VsZWN0ZWRDbGluaWNJbmZvIiwic2hvd0ZvcmNlZFBvcHVwIiwiaXNfY29uZ290IiwicG90ZW50aWFsX2lwZCIsImlzU2VvVmFsaWQiLCJDT05GSUciLCJTRU9fRlJJRU5ETFlfSE9TUElUQUxfSURTIiwic2hvd1BvcHVwIiwiZ2V0X2ZlZWRiYWNrIiwiYWxsX2NpdGllcyIsImJyZWFkY3J1bWIiLCJsaW5rX3RpdGxlIiwicGFkZGluZ0JvdHRvbSIsInRvTG93ZXJDYXNlIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Ub3AiLCJzZW8iLCJjYW5vbmljYWxVcmwiLCJBUElfQkFTRV9VUkwiLCJ1bnJhdGVkX2FwcG9pbnRtZW50IiwiaXNfZ29sZCIsInJlc3VsdCIsImV4cGVyaWVuY2VfeWVhcnMiLCJxdWFsaWZpY2F0aW9ucyIsInF1YWxpZmljYXRpb24iLCJob3NwX2lzX2dvbGQiLCJhYm91dF93ZWIiLCJjaGVja0F1dGgiLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5IiwibGVmdCIsImJvdHRvbSIsInByaW1hcnlNb2JpbGUiLCJkb2N0b3JEYXRhIiwiQWJvdXREb2N0b3IiLCJyZWFkTW9yZSIsImFib3V0IiwiYnV0dG9uIiwicmVxdWlyZWRSZWFkTW9yZSIsImFib3V0VHh0Iiwic2xpY2UiLCJ2ZXJ0aWNhbEFsaWduIiwiX19odG1sIiwiTm9uQm9va2FibGVEb2N0b3IiLCJWaWV3QWxsIiwic3BlY2lhbGl0eSIsInNwZWNpYWxpemF0aW9ucyIsInRvZ2dsZU9QRENyaXRlcmlhIiwiRXhwYW5zaW9uUGFuZWwiLCJ0b2dnbGVPcGVuIiwiaGVhZGluZyIsImNvbnRlbnRMaXN0IiwiaW1hZ2UiLCJsaXN0SWQiLCJxdWxpZmljYXRpb24iLCJjb250Iiwic3BlY2lhbGl6YXRpb24iLCJjb2xsZWdlIiwicGFzc2luZ195ZWFyIiwibGluZUhlaWdodCIsImNvbnRlbnQiLCJQcm9mZXNzaW9uYWxHcmFwaCIsInByb2ZpbGVfaW1nIiwiZW1haWwiLCJwcmFjdGljaW5nX3NpbmNlIiwiZ2VuZGVyIiwibGFuZ3VhZ2VzIiwibGljZW5zZSIsIm1vYmlsZXMiLCJhd2FyZHMiLCJhc3NvY2lhdGlvbnMiLCJtZWRpY2FsX3NlcnZpY2VzIiwiZXhwZXJpZW5jZXMiLCJyZWR1Y2UiLCJmaW5hbCIsImN1cnIiLCJsYW5ndWFnZSIsImF3YXJkIiwieWVhciIsImFzc29jaWF0aW9uIiwiZXhwZXJpZW5jZSIsInN0YXJ0X3llYXIiLCJlbmRfeWVhciIsInNlcnZpY2UiLCJEb2N0b3JQcm9maWxlIiwiZF9pZCIsInBhcmFtcyIsImdldF9kb2N0b3JfaWRfYnlfdXJsIiwiaXNfcHJvY2VkdXJlIiwibG9hZERhdGEiLCJzdG9yZSIsInF1ZXJ5RGF0YSIsImRpc3BhdGNoIiwiY2F0ZWdvcnlfaWRzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjYXRjaCIsImdldERvY3RvckJ5SWQiLCJnZXREb2N0b3JCeVVybCIsInNsb3QiLCJ0aW1lIiwic2VsZWN0T3BkVGltZVNMb3QiLCJmZXRjaE5ld1Jlc3VsdHMiLCJjb250ZXh0VHlwZXMiLCJyb3V0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJwYXNzZWRQcm9wcyIsInN0YXRpY0NvbnRleHQiLCJET0NUT1JfUFJPRklMRVMiLCJyYXRlZF9hcHBvaW5tZW50cyIsInByb2ZpbGVzIiwic2VsZWN0ZWRQcm9maWxlIiwiaXBkX2NoYXQiLCJVU0VSIiwic2VsZWN0ZWRDcml0ZXJpYXMiLCJzZWxlY3RlZExvY2F0aW9uIiwiY29tbW9uUHJvY2VkdXJlcnMiLCJmaWx0ZXJDcml0ZXJpYSIsImNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzIiwiU0VBUkNIX0NSSVRFUklBX09QRCIsInByb2ZpbGVDb21tb25Qcm9jZWR1cmVzIiwiRE9DVE9SX1NFQVJDSCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRvY3RyX3VybCIsImhvc3BpdGFsSWQiLCJjYiIsImRvY3RvcklkIiwicmVzY2hlZHVsZSIsImFwcG9pbnRtZW50SWQiLCJnZXRSYXRpbmdDb21wbGltZW50cyIsImNhbGxiYWNrIiwiY3JlYXRlQXBwb2ludG1lbnRSYXRpbmciLCJhcHBvaW50bWVudERhdGEiLCJ1cGRhdGVBcHBvaW50bWVudFJhdGluZyIsInJhdGluZ0RhdGEiLCJjbG9zZUFwcG9pbnRtZW50UmF0aW5nIiwiY2xvc2VBcHBvaW50bWVudFBvcFVwIiwibWVyZ2VPUERTdGF0ZSIsImNyaXRlcmlhIiwiZm9yY2VBZGQiLCJvYmplY3RfaWQiLCJpcGRDaGF0VmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsTUFBTUEsa0JBQU4sU0FBaUNDLGdCQUFNQyxTQUF2QyxDQUFpRDtBQUM3Q0MsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0g7O0FBRURDLGFBQVM7QUFDTCxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsRUFBZjtBQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLDBCQUFmO0FBQ0ksdURBQUssV0FBVSxXQUFmLEVBQTJCLEtBQUssS0FBS0QsS0FBTCxDQUFXRSxPQUFYLENBQW1CQyxJQUFuRCxHQURKO0FBRUk7QUFBQTtBQUFBO0FBQUkseUJBQUtILEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkU7QUFBdkIsaUJBRko7QUFHSTtBQUFBO0FBQUE7QUFBTyx5QkFBS0osS0FBTCxDQUFXRSxPQUFYLENBQW1CRztBQUExQjtBQUhKO0FBREosU0FESjtBQVNIO0FBZjRDOztrQkFrQmxDVCxrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQmY7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxNQUFNVSxhQUFOLFNBQTRCVCxnQkFBTUMsU0FBbEMsQ0FBNEM7QUFDeENDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjs7QUFEZSxhQW1CbkJPLGlCQW5CbUIsR0Ft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QUQsRUFBT3lLLFFBQVAsRUFBaUJDLFFBQWpCLEtBQThCaEQsU0FBUyw4QkFBa0IxSCxJQUFsQixFQUF3QnlLLFFBQXhCLEVBQWtDQyxRQUFsQyxDQUFULENBZjlDO0FBZ0JIbFosdUJBQWUsQ0FBQ0MsWUFBRCxFQUFla1osU0FBZixFQUEwQnRaLElBQTFCLEVBQWdDdVksRUFBaEMsS0FBdUNsQyxTQUFTLDBCQUFjalcsWUFBZCxFQUE0QmtaLFNBQTVCLEVBQXVDdFosSUFBdkMsRUFBNkN1WSxFQUE3QyxDQUFULENBaEJuRDtBQWlCSGxPLGtDQUEyQmtPLEVBQUQsSUFBUWxDLFNBQVMscUNBQXlCa0MsRUFBekIsQ0FBVCxDQWpCL0I7QUFrQkhnQixxQkFBYzVhLElBQUQsSUFBVTBYLFNBQVMsd0JBQVkxWCxJQUFaLENBQVQsQ0FsQnBCO0FBbUJIb0YsOEJBQXFCLE1BQUtzUyxTQUFTLGtDQUFULENBbkJ2QjtBQW9CSGpILDJCQUFrQixDQUFDelEsSUFBRCxFQUFNNFosRUFBTixLQUFZbEMsU0FBUyw4QkFBa0IxWCxJQUFsQixFQUF3QjRaLEVBQXhCLENBQVQsQ0FwQjNCO0FBcUJIdEosMkJBQW1CeE4sTUFBRCxJQUFZNFUsU0FBUyw4QkFBa0I1VSxNQUFsQixDQUFUO0FBckIzQixLQUFQO0FBdUJILENBeEJEOztrQkEyQmUseUJBQVEwVixlQUFSLEVBQXlCaUIsa0JBQXpCLEVBQTZDdkMsYUFBN0MsQyIsImZpbGUiOiI0My5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIENvbXBsaW1lbnRMaXN0VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXNhdGlzZmFjdGlvbi1pbWFnZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e3RoaXMucHJvcHMuZGV0YWlscy5pY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5wcm9wcy5kZXRhaWxzLm1lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5kZXRhaWxzLmNvdW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcGxpbWVudExpc3RWaWV3O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuaW1wb3J0IFJhdGluZ3NQb3BVcCBmcm9tICcuL1JhdGluZ3NQb3BVcC5qcydcblxuXG5jbGFzcyBIb3NwaXRhbFBvcFVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgICAgZGlzcGxheVJhdGluZ0Jsb2NrOiAwLFxuICAgICAgICAgICAgc2VsZWN0ZWRIb3NwaXRhbDogbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8vIGlmIChTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnByb3BzLmdldFVucmF0ZWRBcHBvaW50bWVudCgoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKCFlcnIgJiYgZGF0YSkge1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YSB9KVxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBnZXR1bnZlcmlmaWVkRGF0YSA9ICgpID0+IHtcbiAgICAgICAgbGV0IG9iaiA9IHt9XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZG9jdG9yX2RldGFpbHMpe1xuICAgICAgICAgICAgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICBcImRvY3RvclwiOiB0aGlzLnByb3BzLmRvY3Rvcl9kZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICBcImhvc3BpdGFsXCI6IHRoaXMucHJvcHMuZG9jdG9yX2RldGFpbHMuaG9zcGl0YWxzLFxuICAgICAgICAgICAgICAgICAgICBcImRvY3Rvcl90aHVtYm5haWxcIjogdGhpcy5wcm9wcy5kb2N0b3JfZGV0YWlscy50aHVtYm5haWwsXG4gICAgICAgICAgICAgICAgICAgIFwiZGlzcGxheV9uYW1lXCI6IHRoaXMucHJvcHMuZG9jdG9yX2RldGFpbHMuZGlzcGxheV9uYW1lLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogJ2RvY3RvcicsXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogdGhpcy5wcm9wcy5kb2N0b3JfZGV0YWlscy5pZCxcbiAgICAgICAgICAgICAgICAgICAgXCJsYWJcIjogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqXG4gICAgfVxuXG4gICAgc2VsZWN0UmF0aW5nSG9zcGl0YWwoaWQpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheVJhdGluZ0Jsb2NrOiAxIH0pXG4gICAgICAgIGxldCBzZWxlY3RlZEhvc3BpdGFsID0gdGhpcy5wcm9wcy5kb2N0b3JfZGV0YWlscy5ob3NwaXRhbHMuZmlsdGVyKHggPT4geC5ob3NwaXRhbF9pZCA9PSBpZClcbiAgICAgICAgc2VsZWN0ZWRIb3NwaXRhbCA9IHNlbGVjdGVkSG9zcGl0YWwgPyBzZWxlY3RlZEhvc3BpdGFsWzBdIDogbnVsbCBcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkSG9zcGl0YWwgfSlcbiAgICB9XG5cbiAgICBkZWNsaW5lUmF0aW5nKClcbiAgICB7XG4gICAgICAgIHRoaXMucHJvcHMucG9wVXBTdGF0ZSgpXG4gICAgfSAgIFxuICAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRpc3BsYXlSYXRpbmdCbG9jaykge1xuICAgICAgICAgICAgcmV0dXJuICg8UmF0aW5nc1BvcFVwIHsuLi50aGlzLnByb3BzfSB1bnZlcmlmaWVkPXt0cnVlfSB1bnZlcmlmaWVkRGF0YT17dGhpcy5nZXR1bnZlcmlmaWVkRGF0YSgpfSBzZWxlY3RlZEhvc3BpdGFsPXt0aGlzLnN0YXRlLnNlbGVjdGVkSG9zcGl0YWx9IC8+KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cInJhaXRpbmctcG9wdXBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtcmF0aW5nLWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRlLWNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJyYXRlLXBvcC1iYWNrXCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9iYWNrLWljb24ucG5nXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+PC9zcGFuPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIENob29zZSBDbGluaWMgdG8gcmF0ZSBEb2N0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxpbWcgb25DbGljaz17dGhpcy5kZWNsaW5lUmF0aW5nLmJpbmQodGhpcyl9IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3J0LWNsb3NlLnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0ZS1zZWNlbHRpb24tY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZG9jdG9yX2RldGFpbHMuaG9zcGl0YWxzICYmIHRoaXMucHJvcHMuZG9jdG9yX2RldGFpbHMuaG9zcGl0YWxzLmxlbmd0aCA/IHRoaXMucHJvcHMuZG9jdG9yX2RldGFpbHMuaG9zcGl0YWxzLm1hcCgoaG9zcCwgaSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8cCBrZXk9e2l9IG9uQ2xpY2s9e3RoaXMuc2VsZWN0UmF0aW5nSG9zcGl0YWwuYmluZCh0aGlzLCBob3NwLmhvc3BpdGFsX2lkKX0+IHtob3NwLmhvc3BpdGFsX25hbWV9IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxwIGNsYXNzPVwicnQtcGFyLXNlbGVjdFwiPlRodSAtIDI6MDAgUE0gdG8gNjowMCBQTTwvcD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9zcGl0YWxQb3BVcDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbmZpbml0ZVNjcm9sbCBmcm9tICdyZWFjdC1pbmZpbml0ZS1zY3JvbGxlcic7XG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBDb21wbGltZW50TGlzdFZpZXcgZnJvbSAnLi4vcmF0aW5nc1Byb2ZpbGVWaWV3L0NvbXBsaW1lbnRMaXN0Vmlldy5qcydcbmltcG9ydCBSZXZpZXdMaXN0IGZyb20gJy4uL3JhdGluZ3NQcm9maWxlVmlldy9SZXZpZXdMaXN0LmpzJ1xuaW1wb3J0IFJhdGluZ0dyYXBoIGZyb20gJy4uL3JhdGluZ3NQcm9maWxlVmlldy9SYXRpbmdHcmFwaC5qcydcbmltcG9ydCBMZWZ0QmFyIGZyb20gJy4uL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vUmlnaHRCYXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0hvbWUvZm9vdGVyJ1xuXG5jbGFzcyBSYXRpbmdSZXZpZXdWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgICAgICBoYXNNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIGZvb3RlckRhdGE6IG51bGwsXG4gICAgICAgICAgICBwYWdlOiAyXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5nZXRBbGxSYXRpbmdzKHRoaXMucHJvcHMuY29udGVudF90eXBlLCB0aGlzLnByb3BzLmlkLCAxLCAoZXJyLCBkYXRhLCBoYXNNb3JlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWVyciAmJiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGEsIGhhc01vcmUgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGFzTW9yZTogdHJ1ZSB9KVxuICAgICAgICB9LCAwKVxuICAgIH1cblxuICAgIGxvYWRNb3JlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGFzTW9yZTogZmFsc2UsIGxvYWRpbmc6IHRydWUgfSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRBbGxSYXRpbmdzKHRoaXMucHJvcHMuY29udGVudF90eXBlLCB0aGlzLnByb3BzLmlkLCB0aGlzLnN0YXRlLnBhZ2UsIChlcnIsIGRhdGEsIGhhc01vcmUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3RGF0YSA9IHsgLi4udGhpcy5zdGF0ZS5kYXRhIH1cbiAgICAgICAgICAgICAgICBuZXdEYXRhLnJhdGluZyA9IG5ld0RhdGEucmF0aW5nLmNvbmNhdChkYXRhLnJhdGluZylcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIHBhZ2U6IHRoaXMuc3RhdGUucGFnZSArIDEsIGhhc01vcmUsIGRhdGE6IG5ld0RhdGEgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGE/XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtcGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInBhbmVsLXRpdGxlIG1iLXJtdlwiPlBhdGllbnQgRmVlZGJhY2sgPGEgY2xhc3NOYW1lPVwicmF0ZVZpZXdBbGxcIj48L2E+PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1jb250ZW50IHBkLTAgYm9yZGVyLWJvdHRvbS1wYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhdGluZ0dyYXBoIGRldGFpbHM9e3RoaXMuc3RhdGUuZGF0YX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1zYXRpc2ZhY3Rpb24tc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5yYXRpbmdfZ3JhcGggJiYgdGhpcy5zdGF0ZS5kYXRhLnJhdGluZ19ncmFwaC50b3BfY29tcGxpbWVudHM/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGEucmF0aW5nX2dyYXBoLnRvcF9jb21wbGltZW50cy5tYXAoY29tcGxpbWVudCA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wbGltZW50TGlzdFZpZXcga2V5PXtjb21wbGltZW50LmlkfSBkZXRhaWxzPXtjb21wbGltZW50fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IDxkaXY+PC9kaXY+fVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbmZpbml0ZVNjcm9sbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTdGFydD17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkTW9yZT17dGhpcy5sb2FkTW9yZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc01vcmU9e3RoaXMuc3RhdGUuaGFzTW9yZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VXaW5kb3c9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbExvYWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZpZXdMaXN0IGRldGFpbHM9e3RoaXMuc3RhdGUuZGF0YX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5maW5pdGVTY3JvbGw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDonJyAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIClcbiAgICB9XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBSYXRpbmdSZXZpZXdWaWV3O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgSW5pdGlhbHNQaWN0dXJlIGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvaW5pdGlhbHNQaWN0dXJlJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmltcG9ydCBQcm9jZWR1cmVQb3B1cCBmcm9tICcuLi9wcm9maWxlUG9wVXAuanMnXG5pbXBvcnQgeyBob3N0bmFtZSB9IGZyb20gJ29zJztcblxuY2xhc3MgQ2xpbmljU2VsZWN0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbnVtYmVyU2hvd246IFwiXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dOdW1iZXIoaWQsIGhvc3BpdGFsX2lkLCBlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1Nob3dOb0NsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdzaG93LW5vLWNsaWNrZWQnLCAnZG9jdG9yX2lkJzogaWQsIFwiaG9zcGl0YWxfaWRcIjogaG9zcGl0YWxfaWRcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5udW1iZXJTaG93bikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXREb2N0b3JOdW1iZXIoaWQsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWVyciAmJiBkYXRhLm51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlclNob3duOiBkYXRhLm51bWJlclxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGUod2hpY2gpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFt3aGljaF06ICF0aGlzLnN0YXRlW3doaWNoXSB9KVxuICAgIH1cblxuICAgIHByb2NlZHVyZVBvcFVwKGhvc3BpdGFsX2lkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2aWVNb3JlUHJvY2VkdXJlczogdHJ1ZSwgc2VsZWN0ZWRJZDogaG9zcGl0YWxfaWQgfSlcbiAgICB9XG5cbiAgICBnb1RvSG9zcGl0YWxQYWdlKGhvc3BpdGFsLCBlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGlmKGhvc3BpdGFsLnVybCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke2hvc3BpdGFsLnVybH1gKVxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2lwZC9ob3NwaXRhbC8ke2hvc3BpdGFsLmhvc3BpdGFsX2lkfWApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7IGlkLCBuYW1lLCBob3NwaXRhbHMsIGlzX2xpdmUsIGVuYWJsZWRfZm9yX29ubGluZV9ib29raW5nIH0gPSB0aGlzLnByb3BzLmRldGFpbHNcbiAgICAgICAgbGV0IHN0eWxlID0ge31cbiAgICAgICAgaWYgKGhvc3BpdGFscyAmJiBob3NwaXRhbHMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIHN0eWxlWyd3aWR0aCddID0gJzk4JSdcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5zZWxlY3RlZENsaW5pYykge1xuICAgICAgICAgICAgaWYgKGhvc3BpdGFscyAmJiBob3NwaXRhbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RDbGluaWMoaG9zcGl0YWxzWzBdLmhvc3BpdGFsX2lkLCBob3NwaXRhbHNbMF0uZW5hYmxlZF9mb3Jfb25saW5lX2Jvb2tpbmcsIDAsIGhvc3BpdGFsc1swXS5kaXNjb3VudGVkX3ByaWNlIHx8IDAsIGhvc3BpdGFsc1swXS5zaG93X2NvbnRhY3QpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgLy8gPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtcGFuZWxcIj5cbiAgICAgICAgICAgIC8vICAgICA8aDQgY2xhc3NOYW1lPVwicGFuZWwtdGl0bGUgbWItcm12XCI+RHIuIHtuYW1lfSBBdmFpbGFibGUgYXQ8L2g0PlxuICAgICAgICAgICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtY29udGVudCBjbGluaWMtaW5mby1wYW5lbFwiPlxuICAgICAgICAgICAgLy8gICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaW5saW5lLWxpc3QgQ2xpbmljLWNhcmQtbGlzdCBydG5nLWJveC1zaGFkb3dcIj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBob3NwaXRhbHMubWFwKChob3NwaXRhbCwgaSkgPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aX0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG5vLXNoYWRvd1wiPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1oZWFkZXIgcGItcm12IGNsZWFyZml4XCI+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ3aWRnZXQtdGl0bGUgdGV4dC1tZCBmdy03MDAgY2xpbmljLXNlbGVjdG9yLW5hbWUgcmF0bmctY2xpbmljLXNsYy1uYW1lXCI+e2hvc3BpdGFsLmhvc3BpdGFsX25hbWV9PC9oND5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgdGV4dC1tZCBmdy03MDAgcmF0bmctZG9jLXByaWNlXCI+JiM4Mzc3OyB7aG9zcGl0YWwuZGVhbF9wcmljZX08L3NwYW4+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWhlYWRlciBwYi1ybXYgY2xlYXJmaXhcIj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIndpZGdldC10aXRsZSB0ZXh0LW1kIGZ3LTcwMCBjbGluaWMtc2VsZWN0b3ItbmFtZSByYXRuZy1jbGluaWMtc2xjLW5hbWVcIj57aG9zcGl0YWwuaG9zcGl0YWxfbmFtZX08L2g0PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCB0ZXh0LW1kIGZ3LTcwMCByYXRuZy1kb2MtcHJpY2UgYWRkLW9uLWRvYy1wcmljZVwiPiYjODM3Nzsge2hvc3BpdGFsLmRlYWxfcHJpY2V9IDxiIGNsYXNzTmFtZT1cInJhdG5nLWRvYy1vbGRwcmljZVwiPiYjODM3Nzsge2hvc3BpdGFsLm1ycH08L2I+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU1RPUkFHRS5jaGVja0F1dGgoKSB8fCBob3NwaXRhbC5kZWFsX3ByaWNlIDwgMTAwID9cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8c3BhbiBjbGFzc05hbWU9XCJzaWdudXAtb2ZmLWRvY1wiPisgJiM4Mzc3OyAxMDAgT0ZGIDxiPm9uIFNpZ251cDwvYj4gPC9zcGFuPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBwdC10d29cIj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2NhdGlvbi1kZXRhaWxzIGNsZWFyZml4XCI+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhZGRyZXNzXCI+e2hvc3BpdGFsLmFkZHJlc3N9PC9wPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9zZWFyY2gvP2FwaT0xJnF1ZXJ5PSR7aG9zcGl0YWwubGF0fSwke2hvc3BpdGFsLmxvbmd9YH0gc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcsIGN1cnNvcjogJ3BvaW50ZXInIH19IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvbWFwLWljb24ucG5nXCJ9IC8+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JywgY3Vyc29yOiAncG9pbnRlcicgfX0gPlxuXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWluZy1kZXRhaWxzIG10LXJtdlwiPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicnRuZy1jbG5jLXRpbWVcIj5UaW1pbmdzPC9zcGFuPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGhvc3BpdGFsLnRpbWluZ3MpLm1hcCgodGltaW5nS2V5LCBrZXkpID0+IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cImZ3LTcwMFwiIGtleT17a2V5fT5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmdy03MDAgdGV4dC1tZCB0ZXh0LXByaW1hcnlcIiBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiAnaW5pdGlhbCcgfX0gPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aW1pbmdLZXl9XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwiICsgaG9zcGl0YWwudGltaW5nc1t0aW1pbmdLZXldLmpvaW4oJywgJyl9XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMiB9fT5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZF9mb3Jfb25saW5lX2Jvb2tpbmcgPyA8YnV0dG9uIHN0eWxlPXt7IHZpc2liaWxpdHk6ICghIWlzX2xpdmUgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCIpIH19IGNsYXNzTmFtZT1cInYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLXNtXCIgb25DbGljaz17dGhpcy5zZWxlY3RDbGluaWMuYmluZCh0aGlzLCBob3NwaXRhbC5ob3NwaXRhbF9pZCwgISFpc19saXZlLCBpKX0+Qm9vayBOb3c8L2J1dHRvbj4gOiA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2hvd051bWJlci5iaW5kKHRoaXMsIGlkLCBob3NwaXRhbC5ob3NwaXRhbF9pZCl9IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5udW1iZXJTaG93biA/IFwidi1idG4gdi1idG4tcHJpbWFyeSBidG4tc20gYnRuLW51bWJlclwiIDogXCJ2LWJ0biB2LWJ0bi1wcmltYXJ5IGJ0bi1zbVwifT57dGhpcy5zdGF0ZS5udW1iZXJTaG93biB8fCBcIkNvbnRhY3RcIn08L2J1dHRvbj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgICAgICA8L3VsPlxuICAgICAgICAgICAgLy8gICAgIDwvZGl2PlxuICAgICAgICAgICAgLy8gPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1wYW5lbFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYW5lbC10aXRsZSBtYi1ybXZcIj5Eci4ge25hbWV9IEF2YWlsYWJsZSBhdDwvaDI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBob3NwaXRhbHMubWFwKChob3NwaXRhbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZpcF9kaXNjb3VudGVkX3ByaWNlID0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgdmlwX2Rpc2NvdW50ZWRfcHJpY2UgPSBob3NwaXRhbC5kaXNjb3VudGVkX3ByaWNlIC0gKGhvc3BpdGFsLnZpcC52aXBfZ29sZF9wcmljZSArIGhvc3BpdGFsLnZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJwYW5lbC1jb250ZW50IHBubC1ib3R0b20tYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdGwtcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpb1wiIG9uQ2xpY2s9eygpID0+IHsgdGhpcy5wcm9wcy5zZWxlY3RDbGluaWMoaG9zcGl0YWwuaG9zcGl0YWxfaWQsIGhvc3BpdGFsLmVuYWJsZWRfZm9yX29ubGluZV9ib29raW5nLCBpLCBob3NwaXRhbC5kaXNjb3VudGVkX3ByaWNlLCBob3NwaXRhbC5zaG93X2NvbnRhY3QpIH19PjxoMyBjbGFzc05hbWU9XCJmdy01MDAgaG9zcHRsLXZxLW1yXCIgc3R5bGU9e3tmb250U2l6ZTogJ2luaGVyaXQnIH19ID57aG9zcGl0YWwuaG9zcGl0YWxfbmFtZX0gPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkQ2xpbmljID09IGhvc3BpdGFsLmhvc3BpdGFsX2lkID8gPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNoZWNrZWQgbmFtZT1cInJhZGlvXCIgLz4gOiA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInJhZGlvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2hvc3BpdGFsLnVybD9gLyR7aG9zcGl0YWwudXJsfWA6YC9pcGQvaG9zcGl0YWwvJHtob3NwaXRhbC5ob3NwaXRhbF9pZH1gfSBvbkNsaWNrPXt0aGlzLmdvVG9Ib3NwaXRhbFBhZ2UuYmluZCh0aGlzLCBob3NwaXRhbCl9PjxzcGFuIGNsYXNzTmFtZT1cInZ3LWhzcHRsLWRpXCIgPihWaWV3IEhvc3BpdGFsKTwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZENsaW5pYyA9PSBob3NwaXRhbC5ob3NwaXRhbF9pZCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW2lkXSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW2lkXVtob3NwaXRhbC5ob3NwaXRhbF9pZF0gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVtpZF1baG9zcGl0YWwuaG9zcGl0YWxfaWRdLmNhdGVnb3JpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGRpdiBjbGFzc05hbWU9XCJkdGwtY25zbHQtZmVlIHBiLWxpc3QgY25zbHQtZmVlLXN0eWxlIG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3BpdGFsLmluc3VyYW5jZSAmJiBob3NwaXRhbC5pbnN1cmFuY2UuaXNfaW5zdXJhbmNlX2NvdmVyZWQgJiYgaG9zcGl0YWwuaW5zdXJhbmNlLmlzX3VzZXJfaW5zdXJlZCAmJiBwYXJzZUludChob3NwaXRhbC5kaXNjb3VudGVkX3ByaWNlKSA8PWhvc3BpdGFsLmluc3VyYW5jZS5pbnN1cmFuY2VfdGhyZXNob2xkX2Ftb3VudD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlc3QtcHJpY2UgdHh0LW9ybmFnZVwiPuKCuSB7MH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6KGhvc3BpdGFsLnZpcC5pc19nb2xkX21lbWJlciB8fCBob3NwaXRhbC52aXAuaXNfdmlwX21lbWJlcikgJiYgaG9zcGl0YWwudmlwLmNvdmVyX3VuZGVyX3ZpcCA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJnbGQtY2QtaWNvblwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZ29sZC1zbS5wbmcnfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3N0LWRvYy1wcmljZVwiPuKCuSB7aG9zcGl0YWwudmlwLnZpcF9hbW91bnQraG9zcGl0YWwudmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnR9IDxzcGFuIGNsYXNzTmFtZT1cImNzdG0tZG9jLWN1dC1wcmljZVwiPuKCuSB7aG9zcGl0YWwubXJwfSA8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKjpob3NwaXRhbC52aXAuaXNfZ29sZF9tZW1iZXI/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVzdC1wcmljZSB0eHQtb3JuYWdlXCI+4oK5IHtob3NwaXRhbC52aXAudmlwX2Ftb3VudCArIGhvc3BpdGFsLnZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LW1ycFwiPuKCuSB7aG9zcGl0YWwubXJwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aG9zcGl0YWwudmlwLmlzX3ZpcF9tZW1iZXI/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVzdC1wcmljZSB0eHQtb3JuYWdlXCI+4oK5IHtob3NwaXRhbC52aXAudmlwX2Ftb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVzdC1tcnBcIj7igrkge2hvc3BpdGFsLm1ycH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aG9zcGl0YWwuZW5hYmxlZF9mb3JfY29kICYmICFob3NwaXRhbC5lbmFibGVkX2Zvcl9wcmVwYWlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/aG9zcGl0YWwuY29kX2RlYWxfcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/PHNwYW4gY2xhc3NOYW1lPVwidGVzdC1wcmljZSB0eHQtb3JuYWdlXCI+4oK5IHtob3NwaXRhbC5jb2RfZGVhbF9wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoaG9zcGl0YWwuY29kX2RlYWxfcHJpY2UpID09IHBhcnNlSW50KGhvc3BpdGFsLm1ycClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LW1ycFwiPuKCuSB7aG9zcGl0YWwubXJwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PHNwYW4gY2xhc3NOYW1lPVwidGVzdC1wcmljZSB0eHQtb3JuYWdlXCI+4oK5IHtob3NwaXRhbC5tcnB9PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aG9zcGl0YWwuZW5hYmxlZF9mb3Jfb25saW5lX2Jvb2tpbmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlc3QtcHJpY2UgdHh0LW9ybmFnZVwiPuKCuSB7aG9zcGl0YWwuZGlzY291bnRlZF9wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoaG9zcGl0YWwuZGlzY291bnRlZF9wcmljZSkgPT0gcGFyc2VJbnQoaG9zcGl0YWwubXJwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxzcGFuIGNsYXNzTmFtZT1cInRlc3QtbXJwXCI+4oK5IHtob3NwaXRhbC5tcnB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaG9zcGl0YWwubXJwICYmIGhvc3BpdGFsLm1ycCAhPSAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVzdC1wcmljZSB0eHQtb3JuYWdlXCI+4oK5IHtob3NwaXRhbC5tcnB9PC9zcGFuPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwIHRlc3QtbmFtZS1pdGVtXCI+Q29uc3VsdGF0aW9uIEZlZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshaG9zcGl0YWwuaW5zdXJhbmNlLmlzX3VzZXJfaW5zdXJlZCAmJiAhaG9zcGl0YWwudmlwLmlzX3ZpcF9tZW1iZXIgJiYgIWhvc3BpdGFsLnZpcC5pc19nb2xkX21lbWJlciAmJiBob3NwaXRhbC52aXAuaXNfZW5hYmxlX2Zvcl92aXAgJiYgaG9zcGl0YWwuZGlzY291bnRlZF9wcmljZT4oaG9zcGl0YWwudmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnR8fDAgKyBob3NwaXRhbC52aXAudmlwX2dvbGRfcHJpY2V8fDApID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1lbmQgZ29sZENhcmQgZ29sZC1wcmljZS1jYXJkLWFkZG9uLWNsaW5pY1NlbGVjdG9yXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsZWFyVmlwU2VsZWN0ZWRQbGFuKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbmFseXRpY0RhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdPcGRQcm9maWxlVmlwR29sZENsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnb3BkLXByb2ZpbGUtdmlwLWdvbGQtY2xpY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGFuYWx5dGljRGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy92aXAtZ29sZC1kZXRhaWxzP2lzX2dvbGQ9dHJ1ZSZzb3VyY2U9b3BkLXByb2ZpbGUtdmlwLWdvbGQtY2xpY2smbGVhZF9zb3VyY2U9RG9jcHJpbWUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdsZC1wLXJjXCI+Rm9yPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ2xkLWNkLWljb25cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dvbGQtc20ucG5nJ30vPiA8cCBjbGFzc05hbWU9XCJnbGQtcC1yY1wiPk1lbWJlcnM8L3A+IDxzcGFuIGNsYXNzTmFtZT1cImdsZC1yYXRlLWxmXCI+4oK5IHtob3NwaXRhbC52aXAudmlwX2dvbGRfcHJpY2UrIGhvc3BpdGFsLnZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50fTwvc3Bhbj48aW1nIHN0eWxlPXt7dHJhbnNmb3JtOiAncm90YXRlKC05MGRlZyknLHdpZHRoOiAnMTBweCcsIG1hcmdpbjonMHB4IDEwcHggMHB4IDBweCd9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Zyd9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWwuaW5zdXJhbmNlICYmIGhvc3BpdGFsLmluc3VyYW5jZS5pc19pbnN1cmFuY2VfY292ZXJlZCAmJiBob3NwaXRhbC5pbnN1cmFuY2UuaXNfdXNlcl9pbnN1cmVkICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChob3NwaXRhbC5kaXNjb3VudGVkX3ByaWNlKSA8PSBob3NwaXRhbC5pbnN1cmFuY2UuaW5zdXJhbmNlX3RocmVzaG9sZF9hbW91bnQgPyAnJyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhvc3BpdGFsLmVuYWJsZWRfZm9yX2NvZCAmJiAhaG9zcGl0YWwuZW5hYmxlZF9mb3JfcHJlcGFpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/aG9zcGl0YWwuY29kX2RlYWxfcHJpY2UgJiYgaG9zcGl0YWwuY29kX2RlYWxfcHJpY2UgIT09IGhvc3BpdGFsLm1ycFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPzxwIGNsYXNzTmFtZT1cImNzdG0tY3BuXCI+e3BhcnNlSW50KCgoaG9zcGl0YWwubXJwIC0gaG9zcGl0YWwuY29kX2RlYWxfcHJpY2UpIC8gaG9zcGl0YWwubXJwKSAqIDEwMCl9JSBPZmZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48YnIgLz4oaW5jbHVkZXMgQ291cG9uKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aG9zcGl0YWwuZW5hYmxlZF9mb3Jfb25saW5lX2Jvb2tpbmcgJiYgaG9zcGl0YWwuZGlzY291bnRlZF9wcmljZSA8IGhvc3BpdGFsLm1ycCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjc3RtLWNwblwiPntwYXJzZUludCgoKGhvc3BpdGFsLm1ycCAtIGhvc3BpdGFsLmRpc2NvdW50ZWRfcHJpY2UpIC8gaG9zcGl0YWwubXJwKSAqIDEwMCl9JSBPZmZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3BpdGFsLmFncmVlZF9wcmljZSAhPSBob3NwaXRhbC5kaXNjb3VudGVkX3ByaWNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxiciAvPihpbmNsdWRlcyBDb3Vwb24pPC9zcGFuPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3NwaXRhbC5pbnN1cmFuY2UgJiYgaG9zcGl0YWwuaW5zdXJhbmNlLmlzX2luc3VyYW5jZV9jb3ZlcmVkICYmIGhvc3BpdGFsLmluc3VyYW5jZS5pc191c2VyX2luc3VyZWQgJiYgcGFyc2VJbnQoaG9zcGl0YWwuZGlzY291bnRlZF9wcmljZSkgPD1ob3NwaXRhbC5pbnN1cmFuY2UuaW5zdXJhbmNlX3RocmVzaG9sZF9hbW91bnQ/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLXZhbC1ieC1vcGRcIj5Db3ZlcmVkIFVuZGVyIEluc3VyYW5jZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR0bC1jbnNsdC1mZWUgcGItbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU1RPUkFHRS5jaGVja0F1dGgoKSB8fCBob3NwaXRhbC5kaXNjb3VudGVkX3ByaWNlIDwgMTAwIHx8IChmYWxzZSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkQ2xpbmljID09IGhvc3BpdGFsLmhvc3BpdGFsX2lkICYmIHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbaWRdICYmIHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbaWRdW2hvc3BpdGFsLmhvc3BpdGFsX2lkXSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW2lkXVtob3NwaXRhbC5ob3NwaXRhbF9pZF0uY2F0ZWdvcmllcykgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZW5hYmxlZF9mb3Jfb25saW5lX2Jvb2tpbmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpZ251cC1vZmYtZG9jXCIgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0gPisgJiM4Mzc3OyAxMDAgT0ZGIDxiPm9uIFNpZ251cDwvYj4gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGRyZXNzLWJnLWNvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZGQtc3BhblwiPkFkZHJlc3M6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZnctNTAwXCIgc3R5bGU9e3sgZm9udFNpemU6IDE0IH19Pntob3NwaXRhbC5hZGRyZXNzfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZGQtc3BhblwiPlRpbWluZ3M6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoaG9zcGl0YWwudGltaW5ncykubWFwKCh0aW1pbmdLZXksIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHAga2V5PXtrZXl9Pnt0aW1pbmdLZXl9PHNwYW4+e1wiIFwiICsgaG9zcGl0YWwudGltaW5nc1t0aW1pbmdLZXldLmpvaW4oJywgJyl9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvc2VhcmNoLz9hcGk9MSZxdWVyeT0ke2hvc3BpdGFsLmxhdH0sJHtob3NwaXRhbC5sb25nfWB9IHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnLCBjdXJzb3I6ICdwb2ludGVyJyB9fSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogXCIzNXB4XCIsIGhlaWdodDogXCIzNXB4XCIsIGN1cnNvcjogJ3BvaW50ZXInIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL21hcC1pY29uLnBuZ1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRDbGluaWMgIT0gaG9zcGl0YWwuaG9zcGl0YWxfaWQgJiYgKHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbaWRdICYmIHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbaWRdW2hvc3BpdGFsLmhvc3BpdGFsX2lkXSkgJiYgKHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbaWRdW2hvc3BpdGFsLmhvc3BpdGFsX2lkXS5zZWxlY3RlZFByb2NlZHVyZXMgPiAwIHx8IHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbaWRdW2hvc3BpdGFsLmhvc3BpdGFsX2lkXS51bnNlbGVjdGVkUHJvY2VkdXJlcyA+IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxwPlRyZWF0bWVudHMgQXZhaWxhYmxlIHtgKCR7dGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVtpZF1baG9zcGl0YWwuaG9zcGl0YWxfaWRdLnVuc2VsZWN0ZWRQcm9jZWR1cmVzICsgdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVtpZF1baG9zcGl0YWwuaG9zcGl0YWxfaWRdLnNlbGVjdGVkUHJvY2VkdXJlc30pYH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSAmJiB0aGlzLnByb3BzLmlzX3Byb2NlZHVyZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW2lkXSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW2lkXVtob3NwaXRhbC5ob3NwaXRhbF9pZF0gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVtpZF1baG9zcGl0YWwuaG9zcGl0YWxfaWRdLnNlbGVjdGVkUHJvY2VkdXJlcyA+PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPVwic2VsZWN0LWJuci1kc25cIj5TZWxlY3RlZCB0cmVhdG1lbnQgbm90IGF2YWlsYWJsZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRDbGluaWMgPT0gaG9zcGl0YWwuaG9zcGl0YWxfaWQgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVtpZF0gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVtpZF1baG9zcGl0YWwuaG9zcGl0YWxfaWRdICYmIHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbaWRdW2hvc3BpdGFsLmhvc3BpdGFsX2lkXS5jYXRlZ29yaWVzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvY2VkdXJlLWNoZWNrYm94ZXMgcmVtb3ZlLWJnLWNvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdGwtY25zbHQtZmVlIHBiLWxpc3Qgb2ZyLW1ybmdidG1cIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU1RPUkFHRS5jaGVja0F1dGgoKSB8fCBob3NwaXRhbC5kaXNjb3VudGVkX3ByaWNlIDwgMTAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8c3BhbiBjbGFzc05hbWU9XCJzaWdudXAtb2ZmLWRvY1wiIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19ID4rICYjODM3NzsgMTAwIE9GRiA8Yj5vbiBTaWdudXA8L2I+IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdGwtY25zbHQtZmVlIHBiLWxpc3QgY25zbHQtZmVlLXN0eWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3NwaXRhbC5lbmFibGVkX2Zvcl9vbmxpbmVfYm9va2luZyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlc3QtcHJpY2UgdHh0LW9ybmFnZVwiPuKCuSB7aG9zcGl0YWwuZGlzY291bnRlZF9wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChob3NwaXRhbC5kaXNjb3VudGVkX3ByaWNlKSA9PSBwYXJzZUludChob3NwaXRhbC5tcnApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LW1ycFwiPuKCuSB7aG9zcGl0YWwubXJwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGhvc3BpdGFsLm1ycCAmJiBob3NwaXRhbC5tcnAgIT0gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LXByaWNlIHR4dC1vcm5hZ2VcIj7igrkge2hvc3BpdGFsLm1ycH08L3NwYW4+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXN0LW5hbWUtaXRlbVwiPkNvbnN1bHRhdGlvbiBGZWU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGZvbnRTaXplOiAnMTRweCcgfX0gY2xhc3NOYW1lPVwicHJvY2VkdXJlLW91dC1oZWFkaW5nLWZvbnRcIj5UcmVhdG1lbnQocykgc2VsZWN0ZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3Bhbj57dGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVtpZF1baG9zcGl0YWwuaG9zcGl0YWxfaWRdLmNhdGVnb3JpZXNfbmFtZS5qb2luKCd8Jyl9PC9zcGFuPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zdXJhbmNlLWNoZWNrYm94ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByb2NlZHVyZS1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW2lkXVtob3NwaXRhbC5ob3NwaXRhbF9pZF0uY2F0ZWdvcmllcykubWFwKChwcm9jZWR1cmUpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvY2VkdXJlLmZpbHRlcih4ID0+IHguaXNfc2VsZWN0ZWQpLm1hcCgoY2F0ZWdvcnksIGkpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJwcm9jZWR1cmUtY2hlY2sgY2stYnhcIiBodG1sRm9yPXtgJHtjYXRlZ29yeS5wcm9jZWR1cmVfaWR9X2hvcyR7Y2F0ZWdvcnkuaG9zcGl0YWxfaWR9YH0+e2NhdGVnb3J5LnByb2NlZHVyZV9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dHJ1ZX0gaWQ9e2Ake2NhdGVnb3J5LnByb2NlZHVyZV9pZH1faG9zJHtjYXRlZ29yeS5ob3NwaXRhbF9pZH1gfSBuYW1lPVwiZnJ1aXQtMVwiIHZhbHVlPVwiXCIgaG9zcGl0YWw9e2hvc3BpdGFsLmhvc3BpdGFsX2lkfSBvbkNoYW5nZT17dGhpcy5wcm9jZWR1cmVQb3BVcC5iaW5kKHRoaXMsIGNhdGVnb3J5Lmhvc3BpdGFsX2lkKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dHJ1ZX0gY2xhc3NOYW1lPVwiaW5zLWNoay1ieFwiIGlkPXtgJHtjYXRlZ29yeS5wcm9jZWR1cmVfaWR9X2hvcyR7Y2F0ZWdvcnkuaG9zcGl0YWxfaWR9YH0gbmFtZT1cImZydWl0LTFcIiB2YWx1ZT1cIlwiIGhvc3BpdGFsPXtob3NwaXRhbC5ob3NwaXRhbF9pZH0gb25DaGFuZ2U9e3RoaXMucHJvY2VkdXJlUG9wVXAuYmluZCh0aGlzLCBjYXRlZ29yeS5ob3NwaXRhbF9pZCl9IC8+PGxhYmVsIGh0bWxGb3I9e2Ake2NhdGVnb3J5LnByb2NlZHVyZV9pZH1faG9zJHtjYXRlZ29yeS5ob3NwaXRhbF9pZH1gfT57Y2F0ZWdvcnkucHJvY2VkdXJlX25hbWV9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3NwaXRhbC5lbmFibGVkX2Zvcl9vbmxpbmVfYm9va2luZyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwci1wcmljZXNcIj7igrkge2NhdGVnb3J5LmRpc2NvdW50ZWRfcHJpY2V9PHNwYW4gY2xhc3NOYW1lPVwicHItY3V0LXByaWNlXCI+4oK5IHtjYXRlZ29yeS5tcnB9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByLXByaWNlc1wiPuKCuSB7Y2F0ZWdvcnkubXJwfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWRDbGluaWMgPT0gaG9zcGl0YWwuaG9zcGl0YWxfaWQgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVtpZF1baG9zcGl0YWwuaG9zcGl0YWxfaWRdLnNlbGVjdGVkUHJvY2VkdXJlcyArIHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbaWRdW2hvc3BpdGFsLmhvc3BpdGFsX2lkXS51bnNlbGVjdGVkUHJvY2VkdXJlcyA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLnZpZU1vcmVQcm9jZWR1cmVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxQcm9jZWR1cmVQb3B1cCB0b2dnbGU9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgJ3ZpZU1vcmVQcm9jZWR1cmVzJyl9IGhvc3BpdGFsX2lkPXt0aGlzLnN0YXRlLnNlbGVjdGVkSWR9IGRvY3Rvcl9pZD17aWR9ICB7Li4udGhpcy5wcm9wc30gZGF0YT17dGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVtpZF1bdGhpcy5zdGF0ZS5zZWxlY3RlZElkXS5jYXRlZ29yaWVzfSBob3NwaXRhbEVuYWJsZT17aG9zcGl0YWwuZW5hYmxlZF9mb3Jfb25saW5lX2Jvb2tpbmd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbaWRdW2hvc3BpdGFsLmhvc3BpdGFsX2lkXS5zZWxlY3RlZFByb2NlZHVyZXMgKyB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW2lkXVtob3NwaXRhbC5ob3NwaXRhbF9pZF0udW5zZWxlY3RlZFByb2NlZHVyZXMgIT0gdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVtpZF1baG9zcGl0YWwuaG9zcGl0YWxfaWRdLnNlbGVjdGVkUHJvY2VkdXJlcyA/IDxidXR0b24gY2xhc3NOYW1lPVwicHItcGx1cy1hZGQtYnRuXCIgb25DbGljaz17dGhpcy5wcm9jZWR1cmVQb3BVcC5iaW5kKHRoaXMsIGhvc3BpdGFsLmhvc3BpdGFsX2lkKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyB7dGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVtpZF1baG9zcGl0YWwuaG9zcGl0YWxfaWRdLnVuc2VsZWN0ZWRQcm9jZWR1cmVzfSBtb3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENsaW5pY1NlbGVjdG9yIiwiaW1wb3J0IENsaW5pY1NlbGVjdG9yIGZyb20gJy4vQ2xpbmljU2VsZWN0b3IuanMnXG5cbmV4cG9ydCBkZWZhdWx0IENsaW5pY1NlbGVjdG9yIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcFVwVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdGVkUHJvY2VkdXJlSWRzOiBbXSxcbiAgICAgICAgICAgIHByb2NlZHVyZTogW11cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgc2VsZWN0ZWRQcm9jZWR1cmVJZHMgPSBbXVxuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucHJvcHMuZGF0YSkubWFwKChwcm9jZWR1cmUpID0+IHtcblxuICAgICAgICAgICAgc2VsZWN0ZWRQcm9jZWR1cmVJZHMgPSBzZWxlY3RlZFByb2NlZHVyZUlkcy5jb25jYXQocHJvY2VkdXJlLmZpbHRlcih4ID0+IHguaXNfc2VsZWN0ZWQpLm1hcCh4ID0+IHgucHJvY2VkdXJlX2lkKSlcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkUHJvY2VkdXJlSWRzOiBzZWxlY3RlZFByb2NlZHVyZUlkcywgcHJvY2VkdXJlOiBbXS5jb25jYXQoc2VsZWN0ZWRQcm9jZWR1cmVJZHMpIH0pXG4gICAgfVxuXG4gICAgdG9nZ2xlRGF0YShwcm9jZWR1cmUpIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkUHJvY2VkdXJlcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRQcm9jZWR1cmVJZHNcbiAgICAgICAgaWYgKHNlbGVjdGVkUHJvY2VkdXJlcy5sZW5ndGggPiAxIHx8IChzZWxlY3RlZFByb2NlZHVyZXMubGVuZ3RoID09IDEgJiYgc2VsZWN0ZWRQcm9jZWR1cmVzLmluZGV4T2YocHJvY2VkdXJlLnByb2NlZHVyZV9pZCkgPT0gLTEpKSB7XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3RlZFByb2NlZHVyZXMuaW5kZXhPZihwcm9jZWR1cmUucHJvY2VkdXJlX2lkKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkUHJvY2VkdXJlcy5zcGxpY2Uoc2VsZWN0ZWRQcm9jZWR1cmVzLmluZGV4T2YocHJvY2VkdXJlLnByb2NlZHVyZV9pZCksIDEpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkUHJvY2VkdXJlcy5wdXNoKHByb2NlZHVyZS5wcm9jZWR1cmVfaWQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRQcm9jZWR1cmVJZHM6IHNlbGVjdGVkUHJvY2VkdXJlcyB9KVxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2VsZWN0ZWRQcm9jZWR1cmVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBzZWxlY3RlZFByb2NlZHVyZXMucHVzaChwcm9jZWR1cmUucHJvY2VkdXJlX2lkKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkUHJvY2VkdXJlSWRzOiBzZWxlY3RlZFByb2NlZHVyZXMgfSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogdHJ1ZSB9KVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBTZWxlY3QgYXQgbGVhc3Qgb25lIFByb2NlZHVyZVwiIH0pXG4gICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlRmluYWwoZG9jdG9yX2lkLCBob3NwaXRhbF9pZCkge1xuICAgICAgICBsZXQgZmV0Y2hSZXN1bHRzID0gZmFsc2VcbiAgICAgICAgbGV0IHNlbGVjdGVkUHJvY2VkdXJlcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRQcm9jZWR1cmVJZHNcbiAgICAgICAgbGV0IHByb2NlZHVyZSA9IHRoaXMuc3RhdGUucHJvY2VkdXJlXG4gICAgICAgIGlmIChzZWxlY3RlZFByb2NlZHVyZXMubGVuZ3RoID09PSBwcm9jZWR1cmUubGVuZ3RoICYmIHNlbGVjdGVkUHJvY2VkdXJlcy5zb3J0KCkuZXZlcnkoZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkgeyByZXR1cm4gdmFsdWUgPT09IHByb2NlZHVyZS5zb3J0KClbaW5kZXhdIH0pKSB7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZldGNoUmVzdWx0cyA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmV0Y2hSZXN1bHRzKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZVByb2ZpbGVQcm9jZWR1cmVzKHNlbGVjdGVkUHJvY2VkdXJlcywgZG9jdG9yX2lkLCBob3NwaXRhbF9pZClcblxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMudG9nZ2xlKClcbiAgICB9XG5cbiAgICB0b2dnbGVQcm9jZWR1cmUocHJvY2VkdXJlX3RvX3RvZ2dsZSwgZG9jdG9yX2lkLCBob3NwaXRhbF9pZCkge1xuXG4gICAgICAgIGxldCBzZWxlY3RlZFByb2NlZHVyZUlkcyA9IFtdXG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVtkb2N0b3JfaWRdW2hvc3BpdGFsX2lkXS5jYXRlZ29yaWVzKS5tYXAoKHByb2NlZHVyZSkgPT4ge1xuXG4gICAgICAgICAgICBzZWxlY3RlZFByb2NlZHVyZUlkcyA9IHNlbGVjdGVkUHJvY2VkdXJlSWRzLmNvbmNhdChwcm9jZWR1cmUuZmlsdGVyKHggPT4geC5pc19zZWxlY3RlZCkubWFwKHggPT4geC5wcm9jZWR1cmVfaWQpKVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vc2VsZWN0ZWRQcm9jZWR1cmVJZHMgPSBzZWxlY3RlZFByb2NlZHVyZUlkcy5jb25jYXQodGhpcy5wcm9wcy5wcm9maWxlQ29tbW9uUHJvY2VkdXJlcylcblxuICAgICAgICBsZXQgZm91bmQgPSBmYWxzZVxuXG4gICAgICAgIGlmIChzZWxlY3RlZFByb2NlZHVyZUlkcy5sZW5ndGggPiAxIHx8IHNlbGVjdGVkUHJvY2VkdXJlSWRzLmxlbmd0aCA8IDEgfHwgKHNlbGVjdGVkUHJvY2VkdXJlSWRzLmxlbmd0aCA9PSAxICYmIHNlbGVjdGVkUHJvY2VkdXJlSWRzLmluZGV4T2YocHJvY2VkdXJlX3RvX3RvZ2dsZS5wcm9jZWR1cmVfaWQpID09IC0xKSkge1xuICAgICAgICAgICAgZm91bmQgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlUHJvZmlsZVByb2NlZHVyZXMocHJvY2VkdXJlX3RvX3RvZ2dsZSwgZG9jdG9yX2lkLCBob3NwaXRhbF9pZClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1zZzogdHJ1ZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgcHJvY2VkdXJlX2lkcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRQcm9jZWR1cmVJZHNcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWwtb3ZlcmxheVwiIG9uQ2xpY2s9e3RoaXMucHJvcHMudG9nZ2xlfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBjYW5jZWwtYXBwb2ludG1lbnQtZGl2IGNhbmNlbC1wb3B1cFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcC10b3AtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWN0IFRyZWF0bWVudChzKVxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9jbG9zZS1ibGFjay5zdmdcIn0gb25DbGljaz17dGhpcy5wcm9wcy50b2dnbGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9uc2NyZWVuLXNjcm9sbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wcm9wcy5kYXRhKS5tYXAoKGNhdGVnb3J5LCBpKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicG9wLXVuZGVybGluZVwiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1oZWFkZXIgYWN0aW9uLXNjcmVlbi1oZWFkZXIgcG9wLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgY2FuY2VsLWFwcG9pbnRtZW50LWhlYWRcIj57Y2F0ZWdvcnlbMF0uY2F0ZWdvcnlfbmFtZX08L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlcm1zLWNvbmRpdGlvbi1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByb2NlZHVyZS1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkubWFwKChwcm9jZWR1cmUsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJwcm9jZWR1cmUtY2hlY2sgY2stYnhcIiBodG1sRm9yPXtgJHtwcm9jZWR1cmUucHJvY2VkdXJlX2lkfV9gfT57cHJvY2VkdXJlLnByb2NlZHVyZV9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtwcm9jZWR1cmVfaWRzLmluZGV4T2YocHJvY2VkdXJlLnByb2NlZHVyZV9pZCkgIT0gLTEgPyB0cnVlIDogZmFsc2V9IGlkPXtgJHtwcm9jZWR1cmUucHJvY2VkdXJlX2lkfV9gfSBuYW1lPVwiZnJ1aXQtMlwiIHZhbHVlPVwiXCIgb25DaGFuZ2U9e3RoaXMudG9nZ2xlRGF0YS5iaW5kKHRoaXMsIHByb2NlZHVyZSl9Lyp7dGhpcy50b2dnbGVQcm9jZWR1cmUuYmluZCh0aGlzLCBwcm9jZWR1cmUsIHRoaXMucHJvcHMuZG9jdG9yX2lkLCB0aGlzLnByb3BzLmhvc3BpdGFsX2lkKX0qLyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17cHJvY2VkdXJlX2lkcy5pbmRleE9mKHByb2NlZHVyZS5wcm9jZWR1cmVfaWQpICE9IC0xID8gdHJ1ZSA6IGZhbHNlfSBjbGFzc05hbWU9XCJpbnMtY2hrLWJ4XCIgaWQ9e2Ake3Byb2NlZHVyZS5wcm9jZWR1cmVfaWR9X2B9IG5hbWU9XCJmcnVpdC0yXCIgdmFsdWU9XCJcIiBvbkNoYW5nZT17dGhpcy50b2dnbGVEYXRhLmJpbmQodGhpcywgcHJvY2VkdXJlKX17dGhpcy50b2dnbGVQcm9jZWR1cmUuYmluZCh0aGlzLCBwcm9jZWR1cmUsIHRoaXMucHJvcHMuZG9jdG9yX2lkLCB0aGlzLnByb3BzLmhvc3BpdGFsX2lkKX0gLz48bGFiZWwgaHRtbEZvcj17YCR7cHJvY2VkdXJlLnByb2NlZHVyZV9pZH1fYH0+e3Byb2NlZHVyZS5wcm9jZWR1cmVfbmFtZX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaG9zcGl0YWxFbmFibGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwci1wcmljZXNcIj7igrkge3Byb2NlZHVyZS5kZWFsX3ByaWNlfTxzcGFuIGNsYXNzTmFtZT1cInByLWN1dC1wcmljZVwiPuKCuSB7cHJvY2VkdXJlLm1ycH08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByLXByaWNlc1wiPuKCuSB7cHJvY2VkdXJlLm1ycH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2NlZHVyZXMtYnRuLXBvcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmdy01MDBcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUZpbmFsLmJpbmQodGhpcywgdGhpcy5wcm9wcy5kb2N0b3JfaWQsIHRoaXMucHJvcHMuaG9zcGl0YWxfaWQpfT5Eb25lPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5cbmNsYXNzIENvbnRhY3RQb3VwVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0geyB2YWxpZGF0ZU5vOiBmYWxzZSwgcGhvbmVOdW1iZXI6ICcnIH1cblx0fVxuXG5cdGlucHV0SGFuZGxlcihlKSB7XG5cdFx0aWYgKGUudGFyZ2V0Lm5hbWUgPT0gJ3Bob25lTnVtYmVyJykge1xuXHRcdFx0ZS50YXJnZXQudmFsdWUubGVuZ3RoIDw9IDEwXG5cdFx0XHRcdD8gZS50YXJnZXQudmFsdWUubGVuZ3RoID09IDEwXG5cdFx0XHRcdFx0PyB0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsIHZhbGlkYXRlTm86IHRydWVcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdDogdGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0OiB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGVObzogdHJ1ZSB9KVxuXHRcdH1cblxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMubW9iaWxlTm8pIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBwaG9uZU51bWJlcjogdGhpcy5wcm9wcy5tb2JpbGVObywgdmFsaWRhdGVObzogdHJ1ZSB9KVxuXHRcdH1cblx0fVxuXHRjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuXHRcdC8vICAgIFx0aWYobmV4dFByb3BzKVxuXHR9XG5cblx0aGFuZGxlQ29udGludWVQcmVzcyhlKSB7XG5cdFx0aWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG5cdFx0XHR0aGlzLnN1Ym1pdCgpXG5cdFx0fVxuXHR9XG5cblx0c3VibWl0KCkge1xuXHRcdGlmICh0aGlzLnN0YXRlLnZhbGlkYXRlTm8pIHtcblx0XHRcdHRoaXMucHJvcHMuZ2V0RG9jdG9yKHRoaXMuc3RhdGUucGhvbmVOdW1iZXIpXG5cdFx0fSBlbHNlIHtcblx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIG51bWJlciAoMTAgZGlnaXRzKVwiIH0pXG5cdFx0fVxuXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLW92ZXJsYXlcIiBvbkNsaWNrPXt0aGlzLnByb3BzLnRvZ2dsZX0+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IGNhbmNlbC1hcHBvaW50bWVudC1kaXYgY2FuY2VsLXBvcHVwXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9jbG9zZS5wbmdcIn0gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIHpJbmRleDogJzknIH19IGNsYXNzTmFtZT1cImNsb3NlLW1vZGFsXCIgb25DbGljaz17dGhpcy5wcm9wcy50b2dnbGV9IC8+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIHRleHQtY2VudGVyIGFjdGlvbi1zY3JlZW4taGVhZGVyXCIgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIHBhZGRpbmdUb3A6ICcyOHB4JyB9fSA+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy01MDAgY2FuY2VsLWFwcG9pbnRtZW50LWhlYWRcIj5QbGVhc2UgZW50ZXIgeW91ciBtb2JpbGUgbnVtYmVyIHRvIHZpZXcgY29udGFjdCBkZXRhaWxzLiBZb3Ugd2lsbCBvbmx5IGJlIGFibGUgdG8gY2FsbCB0aGlzIG51bWJlciBmcm9tIHRoZSBlbnRlcmVkIG1vYmlsZSBudW1iZXIuPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNsdC1udy1pbnB1dCBwb2xpY3lOdW1iZUlucHV0XCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJudW1MYWJlbFwiIGh0bWxGb3I9XCJtYWxlXCI+KzkxPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cInNsdC10ZXh0LWlucHV0XCIgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiMTAgZGlnaXQgbW9iaWxlIG51bWJlclwiIHZhbHVlPXt0aGlzLnN0YXRlLnBob25lTnVtYmVyfSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gbmFtZT1cInBob25lTnVtYmVyXCIgb25LZXlQcmVzcz17dGhpcy5oYW5kbGVDb250aW51ZVByZXNzLmJpbmQodGhpcyl9IC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwibW9iaWxlTnVtYmVyLWZpbGwtYnRuXCIgb25DbGljaz17dGhpcy5zdWJtaXQuYmluZCh0aGlzKX0+U3VibWl0PC9idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZnctNTAwIHAtMyBpbXB0bnQtY2xzXCIgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBjb2xvcjogJyM4YThhOGEnfX0gPkJ5IHByb2NlZWRpbmcsIHlvdSBoZXJlYnkgYWdyZWUgdG8gdGhlIDxhIGhyZWY9XCIvdGVybXNcIiB0YXJnZXQ9XCJfYmxhbmtcIiBzdHlsZT17eyBjb2xvcjogYHZhcigtLXRleHQtLXByaW1hcnktLWNvbG9yKWAgfX0gPkVuZCBVc2VyIEFncmVlbWVudDwvYT4gYW5kIDxhIGhyZWY9XCIvcHJpdmFjeVwiIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7IGNvbG9yOiBgdmFyKC0tdGV4dC0tcHJpbWFyeS0tY29sb3IpYCB9fSA+UHJpdmFjeSBQb2xpY3kuPC9hPjwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFBvdXBWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9jb21tb25zL0xvYWRlcidcbmltcG9ydCBSYXRpbmdQcm9maWxlQ2FyZCBmcm9tICcuLi8uLi9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9SYXRpbmdQcm9maWxlQ2FyZC5qcydcbmltcG9ydCBDb21wbGltZW50TGlzdFZpZXcgZnJvbSAnLi4vLi4vY29tbW9ucy9yYXRpbmdzUHJvZmlsZVZpZXcvQ29tcGxpbWVudExpc3RWaWV3LmpzJ1xuaW1wb3J0IERvY3RvclByb2ZpbGVDYXJkIGZyb20gJy4uL2NvbW1vbnMvZG9jdG9yUHJvZmlsZUNhcmQnXG5pbXBvcnQgQWJvdXREb2N0b3IgZnJvbSAnLi4vZG9jdG9yUHJvZmlsZS9hYm91dERvY3Rvci9pbmRleC5qcydcbmltcG9ydCBQcm9mZXNzaW9uYWxHcmFwaCBmcm9tICcuLi9kb2N0b3JQcm9maWxlL3Byb2Zlc3Npb25hbEdyYXBoL2luZGV4LmpzJ1xuaW1wb3J0IENsaW5pY1NlbGVjdG9yIGZyb20gJy4uL2NvbW1vbnMvY2xpbmljU2VsZWN0b3IvaW5kZXguanMnXG5cbmltcG9ydCBMZWZ0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvTGVmdEJhcidcbmltcG9ydCBSaWdodEJhciBmcm9tICcuLi8uLi9jb21tb25zL1JpZ2h0QmFyJ1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBIZWxtZXRUYWdzIGZyb20gJy4uLy4uL2NvbW1vbnMvSGVsbWV0VGFncydcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vLi4vY29uZmlnJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21tb25zL0hvbWUvZm9vdGVyJ1xuaW1wb3J0IENvbnRhY3RQb3VwVmlldyBmcm9tICcuLi9kb2N0b3JQcm9maWxlL0NvbnRhY3RQb3B1cC5qcydcblxuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBJbml0aWFsc1BpY3R1cmUgZnJvbSAnLi4vLi4vY29tbW9ucy9pbml0aWFsc1BpY3R1cmUnO1xuaW1wb3J0IFJldmlld0xpc3QgZnJvbSAnLi4vLi4vY29tbW9ucy9yYXRpbmdzUHJvZmlsZVZpZXcvUmV2aWV3TGlzdC5qcydcbmltcG9ydCBSYXRpbmdHcmFwaCBmcm9tICcuLi8uLi9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9SYXRpbmdHcmFwaC5qcydcbmltcG9ydCBSYXRpbmdSZXZpZXdWaWV3IGZyb20gJy4uLy4uL2NvbW1vbnMvcmF0aW5nc1Byb2ZpbGVWaWV3L3JhdGluZ1Jldmlld1ZpZXcuanMnXG5pbXBvcnQgUmF0aW5nU3RhcnMgZnJvbSAnLi4vLi4vY29tbW9ucy9yYXRpbmdzUHJvZmlsZVZpZXcvUmF0aW5nU3RhcnMnO1xuaW1wb3J0IEhvc3BpdGFsUG9wVXAgZnJvbSAnLi4vLi4vY29tbW9ucy9yYXRpbmdzUHJvZmlsZVZpZXcvSG9zcGl0YWxQb3BVcC5qcydcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmltcG9ydCBJcGRMZWFkRm9ybSBmcm9tICcuLi8uLi8uLi9jb250YWluZXJzL2lwZC9pcGRMZWFkRm9ybS5qcydcbmltcG9ydCBJcGRTZWNvbmRQb3B1cCBmcm9tICcuLi8uLi8uLi9jb250YWluZXJzL2lwZC9JcGREb2N0b3JDaXR5UG9wdXAuanMnXG5pbXBvcnQgTm9uQm9va2FibGVEb2N0b3IgZnJvbSAnLi9ub25Cb29rYWJsZURvY3Rvci5qcydcbmltcG9ydCBWSVBQb3B1cCBmcm9tICcuL3ZpcFByb2ZpbGVQb3B1cC5qcydcbmltcG9ydCBOb25JcGRQb3B1cFZpZXcgZnJvbSAnLi4vLi4vY29tbW9ucy9ub25JcGRQb3B1cC5qcydcblxuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuY2xhc3MgRG9jdG9yUHJvZmlsZVZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICBsZXQgZm9vdGVyRGF0YSA9IG51bGxcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaW5pdGlhbFNlcnZlckRhdGEpIHtcbiAgICAgICAgICAgIGZvb3RlckRhdGEgPSB0aGlzLnByb3BzLmluaXRpYWxTZXJ2ZXJEYXRhLmZvb3RlckRhdGFcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZvb3RlckRhdGEsXG4gICAgICAgICAgICBzZW9GcmllbmRseTogdGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoJy1kcHAnKSxcbiAgICAgICAgICAgIHNlbGVjdGVkQ2xpbmljOiB0aGlzLnByb3BzLmhvc3BpdGFsX2lkIHx8IFwiXCIsXG4gICAgICAgICAgICBpc19saXZlOiBmYWxzZSxcbiAgICAgICAgICAgIHJhbms6IDAsXG4gICAgICAgICAgICBjb25zdWx0YXRpb25fZmVlOiAwLFxuICAgICAgICAgICAgbnVtYmVyU2hvd246IFwiXCIsXG4gICAgICAgICAgICBzZWFyY2hTaG93bjogZmFsc2UsXG4gICAgICAgICAgICBzZWFyY2hEYXRhSGlkZGVuOiB0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnaGlkZV9zZWFyY2hfZGF0YScpLFxuICAgICAgICAgICAgb3BlbkNvbnRhY3RQb3B1cDogZmFsc2UsXG4gICAgICAgICAgICBjbGluaWNQaG9uZU5vOiB7fSxcbiAgICAgICAgICAgIHNob3dfY29udGFjdDogJycsXG4gICAgICAgICAgICBpc09yZ2FuaWM6IHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdob3NwaXRhbF9pZCcpLFxuICAgICAgICAgICAgZGlzcGxheUhvc3BpdGFsUmF0aW5nQmxvY2s6IDAsXG4gICAgICAgICAgICBzaG93SXBkTGVhZEZvcm06IHRydWUsXG4gICAgICAgICAgICBzaG93U2Vjb25kUG9wdXA6IGZhbHNlLFxuICAgICAgICAgICAgZmlyc3RMZWFkSWQ6ICcnLFxuICAgICAgICAgICAgY2xvc2VOb25Cb29rYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBzaG93VmlwUG9wdXA6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd05vbklwZFBvcHVwOiBwYXJzZWQuc2hvd19wb3B1cCxcbiAgICAgICAgICAgIHRvX2JlX2ZvcmNlOjEsXG4gICAgICAgICAgICBpc19vcmdhbmljX2xhbmRpbmc6ZmFsc2UsXG4gICAgICAgICAgICBpc19sZWFkX2VuYWJsZWQ6dHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNlb0ZyaWVuZGx5KSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldEZvb3RlckRhdGEodGhpcy5wcm9wcy5tYXRjaC51cmwuc3BsaXQoJy8nKVsxXSkudGhlbigoZm9vdGVyRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmb290ZXJEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb290ZXJEYXRhOiBmb290ZXJEYXRhIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFwcF9kb3dubG9hZF9saXN0ICYmICF0aGlzLnByb3BzLmFwcF9kb3dubG9hZF9saXN0Lmxlbmd0aCkge1xuXG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldERvd25sb2FkQXBwQmFubmVyTGlzdCgocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwICYmIHJlc3AubGVuZ3RoICYmIHJlc3BbMF0uZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dEb3dubG9hZEFwcFdpZGdldChyZXNwWzBdLmRhdGEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0Rvd25sb2FkQXBwV2lkZ2V0KHRoaXMucHJvcHMuYXBwX2Rvd25sb2FkX2xpc3QpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoU2hvd246IHRydWUgfSlcbiAgICAgICAgbGV0IHRpbWVfdG9fc2hvdyA9IDIwMDBcbiAgICAgICAgbGV0IGRvY3Rvcl9pZCA9IHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaW5pdGlhbFNlcnZlckRhdGEgJiYgdGhpcy5wcm9wcy5pbml0aWFsU2VydmVyRGF0YS5kb2N0b3JfaWQpIHtcbiAgICAgICAgICAgIGRvY3Rvcl9pZCA9IHRoaXMucHJvcHMuaW5pdGlhbFNlcnZlckRhdGEuZG9jdG9yX2lkXG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0pIHtcbiAgICAgICAgICAgIHRpbWVfdG9fc2hvdyA9IDEwMDBcbiAgICAgICAgfVxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtzaG93VmlwUG9wdXA6IHRydWV9KVxuICAgICAgICAvLyB9LCB0aW1lX3RvX3Nob3cpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzX29yZ2FuaWNfbGFuZGluZzp0cnVlfSlcbiAgICB9XG5cbiAgICBzaG93RG93bmxvYWRBcHBXaWRnZXQoZGF0YUxpc3QpIHtcbiAgICAgICAgbGV0IGxhbmRpbmdfcGFnZSA9IGZhbHNlXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdy5PTl9MQU5ESU5HX1BBR0UpIHtcbiAgICAgICAgICAgIGxhbmRpbmdfcGFnZSA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkb3dubG9hZEFwcEJ1dHRvbkRhdGEgPSB7fVxuXG4gICAgICAgIGlmIChsYW5kaW5nX3BhZ2UgJiYgZGF0YUxpc3QgJiYgZGF0YUxpc3QubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIGRhdGFMaXN0Lm1hcCgoYmFubmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGJhbm5lci5pc2VuYWJsZWQgJiYgKHRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKGJhbm5lci5lbmRzX3dpdGgpIHx8IHRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKGJhbm5lci5zdGFydHNfd2l0aCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvd25sb2FkQXBwQnV0dG9uRGF0YSA9IGJhbm5lclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChPYmplY3QudmFsdWVzKGRvd25sb2FkQXBwQnV0dG9uRGF0YSkubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIGxldCBndG1UcmFjayA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0Rvd25sb2FkQXBwQnV0dG9uVmlzaWJsZScsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2Rvd25sb2FkLWFwcC1idXR0b24tdmlzaWJsZScsICdzdGFydHNfd2l0aCc6IGRvd25sb2FkQXBwQnV0dG9uRGF0YS5zdGFydHNfd2l0aCA/IGRvd25sb2FkQXBwQnV0dG9uRGF0YS5zdGFydHNfd2l0aCA6ICcnLCAnZW5kc193aXRoJzogZG93bmxvYWRBcHBCdXR0b25EYXRhLmVuZHNfd2l0aCA/IGRvd25sb2FkQXBwQnV0dG9uRGF0YS5lbmRzX3dpdGggOiAnJywgJ2RldmljZSc6IHRoaXMucHJvcHMuZGV2aWNlX2luZm9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1UcmFjayB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TWV0YVRhZ3NEYXRhKHNlb0RhdGEpIHtcbiAgICAgICAgbGV0IHRpdGxlID0gXCJcIlxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBcIlwiXG4gICAgICAgIGxldCBzY2hlbWEgPSB7fVxuICAgICAgICBpZiAoc2VvRGF0YSkge1xuICAgICAgICAgICAgdGl0bGUgPSBzZW9EYXRhLnRpdGxlIHx8IFwiXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gc2VvRGF0YS5kZXNjcmlwdGlvbiB8fCBcIlwiXG4gICAgICAgICAgICBzY2hlbWEgPSBzZW9EYXRhLnNjaGVtYVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgc2NoZW1hIH1cbiAgICB9XG5cbiAgICBzZWxlY3RDbGluaWMoY2xpbmljX2lkLCBpc19saXZlLCByYW5rLCBjb25zdWx0YXRpb25fZmVlLCBzaG93X2NvbnRhY3QpIHtcbiAgICAgICAgbGV0IGNsaW5pY1Bob25lTm8gPSB0aGlzLnN0YXRlLmNsaW5pY1Bob25lTm9cbiAgICAgICAgaWYgKCFjbGluaWNQaG9uZU5vW2NsaW5pY19pZF0pIHtcbiAgICAgICAgICAgIGNsaW5pY1Bob25lTm9bY2xpbmljX2lkXSA9IFwiXCJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRDbGluaWM6IGNsaW5pY19pZCwgaXNfbGl2ZSwgcmFuaywgbnVtYmVyU2hvd246IFwiXCIsIGNvbnN1bHRhdGlvbl9mZWU6IGNvbnN1bHRhdGlvbl9mZWUsIGNsaW5pY1Bob25lTm86IGNsaW5pY1Bob25lTm8sIHNob3dfY29udGFjdDogc2hvd19jb250YWN0IH0pXG4gICAgfVxuXG4gICAgbmF2aWdhdGVUb0NsaW5pYyhkb2N0b3JfaWQsIGNsaW5pY0lkLCB0b3BCb29rTm93KSB7XG4gICAgICAgIGxldCByYW5rID0gdGhpcy5zdGF0ZS5yYW5rXG4gICAgICAgIGlmICh0b3BCb29rTm93KSB7XG4gICAgICAgICAgICBsZXQgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ09wZFRvcEJvb2tOb3dDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnb3BkLXRvcC1ib29rLW5vdy1jbGlja2VkJywgJ3NlbGVjdGVkSWQnOiBjbGluaWNJZCB8fCAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc19saXZlKSB7XG5cbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnT3BkQm9va05vd0NsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdvcGQtYm9vay1ub3ctY2xpY2tlZCcsICdzZWxlY3RlZElkJzogY2xpbmljSWQgfHwgJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdPcGRCb29rTm93UmFuaycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ29wZC1ib29rLW5vdy1yYW5rJywgJ3JhbmsnOiByYW5rICsgMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2F2ZVByb2ZpbGVQcm9jZWR1cmVzKGRvY3Rvcl9pZCwgY2xpbmljSWQpXG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNlb0ZyaWVuZGx5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfS9ib29raW5nP2RvY3Rvcl9pZD0ke2RvY3Rvcl9pZH0maG9zcGl0YWxfaWQ9JHtjbGluaWNJZH1gKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL29wZC9kb2N0b3IvJHtkb2N0b3JfaWR9LyR7Y2xpbmljSWR9L2Jvb2tkZXRhaWxzYClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldERvY3Rvck5vKG1vYmlsZU5vKSB7XG4gICAgICAgIGxldCBkb2N0b3JfaWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmluaXRpYWxTZXJ2ZXJEYXRhICYmIHRoaXMucHJvcHMuaW5pdGlhbFNlcnZlckRhdGEuZG9jdG9yX2lkKSB7XG4gICAgICAgICAgICBkb2N0b3JfaWQgPSB0aGlzLnByb3BzLmluaXRpYWxTZXJ2ZXJEYXRhLmRvY3Rvcl9pZFxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1N1Ym1pdFBob25lTm8nLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdzdWJtaXQtcGhvbmUtbm8nLCAnZG9jdG9yX2lkJzogZG9jdG9yX2lkLCBcImhvc3BpdGFsX2lkXCI6IHRoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWMsICdtb2JpbGVObyc6IG1vYmlsZU5vXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgbGV0IHBvc3REYXRhID0ge1xuICAgICAgICAgICAgXCJtb2JpbGVcIjogbW9iaWxlTm8sXG4gICAgICAgICAgICBcImRvY3RvclwiOiBkb2N0b3JfaWQsXG4gICAgICAgICAgICBcImhvc3BpdGFsXCI6IHRoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWNcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLmdldERvY3Rvck5vKHBvc3REYXRhLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWVyciAmJiBkYXRhKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgY2xpbmljUGhvbmVObyA9IHRoaXMuc3RhdGUuY2xpbmljUGhvbmVOb1xuICAgICAgICAgICAgICAgIGNsaW5pY1Bob25lTm9bdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY10gPSBkYXRhLm51bWJlclxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG51bWJlclNob3duOiBkYXRhLm51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgb3BlbkNvbnRhY3RQb3B1cDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNsaW5pY1Bob25lTm86IGNsaW5pY1Bob25lTm9cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNob3dOdW1iZXIoaWQsIGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnU2hvd05vQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3Nob3ctbm8tY2xpY2tlZCcsICdkb2N0b3JfaWQnOiBpZCwgXCJob3NwaXRhbF9pZFwiOiB0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmNsaW5pY1Bob25lTm9bdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY10pIHtcbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAvKnRoaXMucHJvcHMuZ2V0RG9jdG9yTnVtYmVyKGlkLCB0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnIgJiYgZGF0YS5udW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJTaG93bjogZGF0YS5udW1iZXJcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSovXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbkNvbnRhY3RQb3B1cDogdHJ1ZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlKHdoaWNoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbd2hpY2hdOiAhdGhpcy5zdGF0ZVt3aGljaF0gfSlcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvRG9jdG9yKGRvY3RvciwgZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChkb2N0b3IudXJsKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgLyR7ZG9jdG9yLnVybH1gKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvb3BkL2RvY3Rvci8ke2RvY3Rvci5pZH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdyZWNvbW1lbmRlZERvY3RvckNsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAncmVjb21tZW5kZWQtZG9jdG9yLWNsaWNrJywgJ0RvY3RvcklEJzogZG9jdG9yLmRvY3Rvcl9pZFxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgfVxuXG4gICAgdmlld0FsbERvY0NsaWNrKG5lYXJieURvY3RvcnMpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ3ZpZXdBbGxEb2N0b3JzQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICd2aWV3LWFsbC1kb2N0b3JzLWNsaWNrJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgd2luZG93Lm9wZW4obmVhcmJ5RG9jdG9ycy5kb2N0b3JzX3VybCwgJ19zZWxmJyk7XG5cbiAgICB9XG5cbiAgICBkaXNwbGF5X2hvc3BpdGFsX3JhdGluZ19ibG9jayA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlIb3NwaXRhbFJhdGluZ0Jsb2NrOiAxIH0pXG4gICAgfVxuXG4gICAgaG9zcGl0YWxQb3BVcFN0YXRlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheUhvc3BpdGFsUmF0aW5nQmxvY2s6IDAgfSlcbiAgICB9XG5cbiAgICBkb3dubG9hZEJ1dHRvbihkYXRhKSB7XG4gICAgICAgIGxldCBndG1UcmFjayA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnRG93bmxvYWRBcHBCdXR0b25DbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnZG93bmxvYWQtYXBwLWJ1dHRvbi1jbGlja2VkJywgJ3N0YXJ0c193aXRoJzogZGF0YS5zdGFydHNfd2l0aCA/IGRhdGEuc3RhcnRzX3dpdGggOiAnJywgJ2VuZHNfd2l0aCc6IGRhdGEuZW5kc193aXRoID8gZGF0YS5lbmRzX3dpdGggOiAnJywgJ2RldmljZSc6IHRoaXMucHJvcHMuZGV2aWNlX2luZm9cbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtVHJhY2sgfSlcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93Lm9wZW4oZGF0YS5VUkwsICdfc2VsZicpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdWJtaXRMZWFkRm9ybUdlbmVyYXRpb24oaXBkRm9ybVBhcmFtcykge1xuICAgICAgICBpZiAoaXBkRm9ybVBhcmFtcykge1xuICAgICAgICAgICAgbGV0IGd0bURhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb2N0b3JQcm9maWxlSXBkRm9ybUNsb3NlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2RvY3Rvci1wcm9maWxlLWlwZC1mb3JtLWNsb3NlZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGlwZF9kYXRhID0ge1xuICAgICAgICAgICAgc2hvd0NoYXQ6IHRydWUsXG4gICAgICAgICAgICBpcGRGb3JtUGFyYW1zOiBpcGRGb3JtUGFyYW1zXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0lwZExlYWRGb3JtOiBmYWxzZSwgc2hvd1NlY29uZFBvcHVwOiB0cnVlIH0sICgpID0+IHtcbiAgICAgICAgICAgIC8vIHRoaXMucHJvcHMuaXBkQ2hhdFZpZXcoe3Nob3dJcGRDaGF0OnRydWUsIGlwZEZvcm06IGlwZEZvcm1QYXJhbXMsIHNob3dNaW5pbWl6ZTp0cnVlfSkgICBcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzYXZlTGVhZElkRm9yVXBkYXRpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmlkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZmlyc3RMZWFkSWQ6IHJlc3BvbnNlLmlkLCBzaG93U2Vjb25kUG9wdXA6IHRydWUgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlY29uZElwZEZvcm1TdWJtaXR0ZWQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93U2Vjb25kUG9wdXA6IGZhbHNlIH0pXG4gICAgfVxuXG4gICAgY2xvc2VOb25Cb29rYWJsZURvY1BvcHVwKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTm9uQm9va2FibGVEb2N0b3JDcm9zc0NsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdOb24tQm9va2FibGUtRG9jdG9yLWNyb3NzLWNsaWNrZWQnXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNsb3NlTm9uQm9va2FibGU6IHRydWUgfSlcbiAgICB9XG5cbiAgICB0b2dnbGVWaXAoKXtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0RvY1Byb2ZpbGVDcm9zc0NsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdEb2N0b3ItcHJvZmlsZS1jcm9zcy1jbGlja2VkJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dWaXBQb3B1cDogZmFsc2V9KVxuICAgIH1cblxuICAgIG5hdmlnYXRlVG9WaXAoKXtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0RvY1Byb2ZpbGVWaXBOYXZpZ2F0aW9uJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnRG9jdG9yLXByb2ZpbGUtdmlwLW5hdmlnYXRpb24nLCAnZG9jdG9ySWQnOiB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy92aXAtY2x1Yi1kZXRhaWxzP3NvdXJjZT1kb2N0b3ItcHJvZmlsZS1wYWdlJmxlYWRfc291cmNlPWRvY3RvcnBhZ2UnKVxuXG4gICAgfVxuXG4gICAgZ29sZENsaWNrZWQoaWQpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ05vbkJvb2thYmxlVmlwR29sZENsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdub24tYm9va2FibGUtdmlwLWdvbGQtY2xpY2tlZCcsICdzZWxlY3RlZElkJzogaWRcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ZpcC1nb2xkLWRldGFpbHM/aXNfZ29sZD10cnVlJnNvdXJjZT1kb2Nnb2xkbGlzdGluZyZsZWFkX3NvdXJjZT1Eb2NwcmltZScpXG4gICAgfVxuXG4gICAgbm9uSXBkTGVhZHMocGhvbmVfbnVtYmVyKXtcbiAgICAgICAgbGV0IGxhbmRpbmdfcGFnZSA9IGZhbHNlXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdy5PTl9MQU5ESU5HX1BBR0UpIHtcbiAgICAgICAgICAgIGxhbmRpbmdfcGFnZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IGRvY3Rvcl9pZCA9IHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaW5pdGlhbFNlcnZlckRhdGEgJiYgdGhpcy5wcm9wcy5pbml0aWFsU2VydmVyRGF0YS5kb2N0b3JfaWQpIHtcbiAgICAgICAgICAgIGRvY3Rvcl9pZCA9IHRoaXMucHJvcHMuaW5pdGlhbFNlcnZlckRhdGEuZG9jdG9yX2lkXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNyaXRlcmlhU3RyID0gdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0uZGlzcGxheV9uYW1lXG4gICAgICAgIGxldCBob3NwaXRhbF9pZFxuICAgICAgICBsZXQgZGlzcGxheV90b3RhbF9tcnAgPSAwXG4gICAgICAgIGxldCBkaXNwbGF5X2RvY3ByaW1lX2Rpc2NvdW50ID0gMFxuICAgICAgICBsZXQgc2VsZWN0ZWRfaG9zcGl0YWwgPSB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5ob3NwaXRhbHMuZmlsdGVyKHggPT4geC5ob3NwaXRhbF9pZCA9PSB0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljKVxuICAgICAgICBpZihzZWxlY3RlZF9ob3NwaXRhbC5sZW5ndGgpe1xuICAgICAgICAgICAgaG9zcGl0YWxfaWQgPSBzZWxlY3RlZF9ob3NwaXRhbFswXS5ob3NwaXRhbF9pZFxuICAgICAgICAgICAgZGlzcGxheV90b3RhbF9tcnAgPSBwYXJzZUludChzZWxlY3RlZF9ob3NwaXRhbFswXS5tcnApXG4gICAgICAgICAgICBkaXNwbGF5X2RvY3ByaW1lX2Rpc2NvdW50ID0gZGlzcGxheV90b3RhbF9tcnAgLSAocGFyc2VJbnQoc2VsZWN0ZWRfaG9zcGl0YWxbMF0uZGVhbF9wcmljZSkpXG4gICAgICAgICAgICBpZighc2VsZWN0ZWRfaG9zcGl0YWxbMF0uaW5zdXJhbmNlLmlzX3VzZXJfaW5zdXJlZCAmJiAhc2VsZWN0ZWRfaG9zcGl0YWxbMF0udmlwLmlzX3ZpcF9tZW1iZXIgJiYgIXNlbGVjdGVkX2hvc3BpdGFsWzBdLnZpcC5pc19nb2xkX21lbWJlciAmJiBzZWxlY3RlZF9ob3NwaXRhbFswXS52aXAuaXNfZW5hYmxlX2Zvcl92aXApe1xuICAgICAgICAgICAgICAgIGRpc3BsYXlfZG9jcHJpbWVfZGlzY291bnQgPSBkaXNwbGF5X3RvdGFsX21ycCAtIChzZWxlY3RlZF9ob3NwaXRhbFswXS52aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudCArIHNlbGVjdGVkX2hvc3BpdGFsWzBdLnZpcC52aXBfZ29sZF9wcmljZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL2NoZWNrIGlmIGFueSB1dG0gdGFnIGV4aXN0IGluIHVybFxuICAgICAgICBsZXQgaXNVdG1UYWdzRXhpc3QgPSBmYWxzZVxuICAgICAgICBpZiAocGFyc2VkLnV0bV9zb3VyY2UgfHwgcGFyc2VkLnV0bV9tZWRpdW0gfHwgcGFyc2VkLnV0bV90ZXJtIHx8IHBhcnNlZC51dG1fY2FtcGFpZ24pIHtcbiAgICAgICAgICAgIGlzVXRtVGFnc0V4aXN0ID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGxldCBkYXRhID0oe3Bob25lX251bWJlcjpwaG9uZV9udW1iZXIsbGVhZF9zb3VyY2U6YCR7IWlzVXRtVGFnc0V4aXN0ICYmIGxhbmRpbmdfcGFnZT8nZG9jb3JnYW5pYyc6J2RvY2Fkcyd9YCxzb3VyY2U6cGFyc2VkLGxlYWRfdHlwZTonRE9DQURTJyxleGl0cG9pbnRfdXJsOmBodHRwOi8vZG9jcHJpbWUuY29tJHt0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lfS9ib29raW5nP2RvY3Rvcl9pZD0ke2RvY3Rvcl9pZH0maG9zcGl0YWxfaWQ9JHtob3NwaXRhbF9pZH1gLGRvY3Rvcl9pZDpkb2N0b3JfaWQsaG9zcGl0YWxfaWQ6aG9zcGl0YWxfaWQsZG9jdG9yX25hbWU6bnVsbCxob3NwaXRhbF9uYW1lOm51bGwsaXNfb3JnYW5pYzpsYW5kaW5nX3BhZ2UsYW1vdW50X2Rpc2NvdW50OiBkaXNwbGF5X2RvY3ByaW1lX2Rpc2NvdW50fSlcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MgJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MubGVuZ3RoKXtcbiAgICAgICAgICAgIGRhdGEudXRtX3RhZ3MgPSB0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncy5maWx0ZXIoeD0+eC50eXBlID09IFwiY29tbW9uX3h0cmFfdGFnc1wiKVswXS51dG1fdGFnc1xuICAgICAgICB9XG4gICAgICAgIGxldCB2aXNpdG9yX2luZm8gPSBHVE0uZ2V0VmlzaXRvckluZm8oKVxuICAgICAgICAgICAgaWYodmlzaXRvcl9pbmZvICYmIHZpc2l0b3JfaW5mby52aXNpdF9pZCl7XG4gICAgICAgICAgICAgICAgZGF0YS52aXNpdF9pZCA9IHZpc2l0b3JfaW5mby52aXNpdF9pZFxuICAgICAgICAgICAgICAgIGRhdGEudmlzaXRvcl9pZCA9IHZpc2l0b3JfaW5mby52aXNpdG9yX2lkXG4gICAgICAgICAgICB9XG4gICAgICAgIGxldCBndG1fZGF0YSA9IHsnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0RvY0Fkc0RwcFN1Ym1pdENsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdldmVudCc6ICdkb2MtYWRzLWhwcC1TdWJtaXQtY2xpY2snLGlzX29yZ2FuaWM6bGFuZGluZ19wYWdlfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtX2RhdGEgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5zYXZlTGVhZFBobk51bWJlcihwaG9uZV9udW1iZXIpXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuaXNfbGVhZF9lbmFibGVkICYmICFTVE9SQUdFLmlzQWdlbnQoKSl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc19sZWFkX2VuYWJsZWQ6ZmFsc2V9KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5Ob25JcGRCb29raW5nTGVhZChkYXRhKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNfbGVhZF9lbmFibGVkOnRydWV9KVxuICAgICAgICAgICAgfSwgNTAwMClcbiAgICAgICAgfVxuICAgICAgIHRoaXMuc2V0U3RhdGUoe3RvX2JlX2ZvcmNlOjB9KVxuICAgIH1cblxuICAgIGNsb3NlSXBkTGVhZFBvcHVwKGZyb20pe1xuICAgICAgICBpZihmcm9tKXtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0RvY0Fkc0RwcENyb3NzQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2V2ZW50JzogJ2RvYy1hZHMtaHBwLWNyb3NzLWNsaWNrJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt0b19iZV9mb3JjZTowfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGRvY3Rvcl9pZCA9IHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JcbiAgICAgICAgbGV0IGVuYWJsZWRfZm9yX29ubGluZV9ib29raW5nID0gZmFsc2VcbiAgICAgICAgbGV0IHNob3dfZHBwX29yZ2FuaWNfcG9wdXAgPSBmYWxzZVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pbml0aWFsU2VydmVyRGF0YSAmJiB0aGlzLnByb3BzLmluaXRpYWxTZXJ2ZXJEYXRhLmRvY3Rvcl9pZCkge1xuICAgICAgICAgICAgZG9jdG9yX2lkID0gdGhpcy5wcm9wcy5pbml0aWFsU2VydmVyRGF0YS5kb2N0b3JfaWRcbiAgICAgICAgfVxuICAgICAgICBsZXQgZmluYWxfcHJpY2UgPSBwYXJzZUludCh0aGlzLnN0YXRlLmNvbnN1bHRhdGlvbl9mZWUpXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW2RvY3Rvcl9pZF0gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVtkb2N0b3JfaWRdW3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWNdICYmIHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbZG9jdG9yX2lkXVt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXS5jYXRlZ29yaWVzKSB7XG5cbiAgICAgICAgICAgIGZpbmFsX3ByaWNlICs9IHBhcnNlSW50KHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbZG9jdG9yX2lkXVt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXS5wcmljZS5kZWFsX3ByaWNlKSB8fCAwXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2VhcmNoX2RhdGEgPSBudWxsXG4gICAgICAgIGxldCBzZW9fdXJsID0gXCJcIlxuICAgICAgICBpZiAodGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0gJiYgdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0uc2VhcmNoX2RhdGEpIHtcbiAgICAgICAgICAgIHNlYXJjaF9kYXRhID0gdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0uc2VhcmNoX2RhdGFcbiAgICAgICAgfVxuICAgICAgICBsZXQgZG9jX29yZ2FuaWNfcHJpY2UgPTBcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdKSB7XG4gICAgICAgICAgICBlbmFibGVkX2Zvcl9vbmxpbmVfYm9va2luZyA9IHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLmVuYWJsZWRfZm9yX29ubGluZV9ib29raW5nXG4gICAgICAgICAgICBkb2Nfb3JnYW5pY19wcmljZSA9IHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLmxlYWRfY29tcGFyZV9hbW91bnRcbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLmhvc3BpdGFscyAmJiB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5ob3NwaXRhbHMubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5ob3NwaXRhbHMubWFwKChob3NwaXRhbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZighaG9zcGl0YWwuaW5zdXJhbmNlLmlzX3VzZXJfaW5zdXJlZCAmJiAhaG9zcGl0YWwudmlwLmlzX3ZpcF9tZW1iZXIgJiYgIWhvc3BpdGFsLnZpcC5pc19nb2xkX21lbWJlciAmJiBob3NwaXRhbC52aXAuaXNfZW5hYmxlX2Zvcl92aXAgJiYgKGhvc3BpdGFsLmRpc2NvdW50ZWRfcHJpY2UgLShob3NwaXRhbC52aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudCArIGhvc3BpdGFsLnZpcC52aXBfZ29sZF9wcmljZSkgPj0gZG9jX29yZ2FuaWNfcHJpY2UpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dfZHBwX29yZ2FuaWNfcG9wdXAgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VvX3VybCA9IHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLnVybCB8fCBcIlwiXG4gICAgICAgICAgICBpZiAoc2VvX3VybCkge1xuICAgICAgICAgICAgICAgIHNlb191cmwgPSBcIi9cIiArIHNlb191cmxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgbmVhcmJ5RG9jdG9ycyA9IHt9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXSAmJiB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5kb2N0b3JzICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLmRvY3RvcnMpLmxlbmd0aCkge1xuICAgICAgICAgICAgbmVhcmJ5RG9jdG9ycyA9IHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLmRvY3RvcnM7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgPSBmYWxzZVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pYyAmJiB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXSAmJiB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5ob3NwaXRhbHMgJiYgdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0uaG9zcGl0YWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0uaG9zcGl0YWxzLm1hcCgoaG9zcGl0YWwpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaG9zcGl0YWwuaG9zcGl0YWxfaWQgPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pYykge1xuICAgICAgICAgICAgICAgICAgICBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSA9IGhvc3BpdGFsLmluc3VyYW5jZS5pc19pbnN1cmFuY2VfY292ZXJlZCAmJiBob3NwaXRhbC5pbnN1cmFuY2UuaXNfdXNlcl9pbnN1cmVkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICAvL0NoZWNrIGlmIHJldmlld3MgZXhpc3QgZm9yIGRvY3RvciwgaWYgbm90IHRoZW4gcGljayB0aGUgZ29vZ2xlIHJldmlld3MgZm9yIHRoYXQgZG9jdG9yL2hvc3BpdGFsXG4gICAgICAgIGxldCBnb29nbGVfcmF0aW5nID0ge31cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdICYmICF0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5kaXNwbGF5X3JhdGluZ193aWRnZXQpIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLmdvb2dsZV9yYXRpbmcgJiYgdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0uZ29vZ2xlX3JhdGluZ1t0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXSAmJiB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5nb29nbGVfcmF0aW5nW3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWNdLmdvb2dsZV9yYXRpbmcgJiYgdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0uZ29vZ2xlX3JhdGluZ1t0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXS5nb29nbGVfcmF0aW5nLmxlbmd0aCAmJiB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5nb29nbGVfcmF0aW5nW3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWNdLmdvb2dsZV9yYXRpbmdfZ3JhcGggJiYgdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0uZ29vZ2xlX3JhdGluZ1t0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXS5nb29nbGVfcmF0aW5nX2dyYXBoLmF2Z19yYXRpbmcgJiYgdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0uZ29vZ2xlX3JhdGluZ1t0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXS5nb29nbGVfcmF0aW5nX2dyYXBoLnJhdGluZ19jb3VudCkge1xuXG4gICAgICAgICAgICAgICAgZ29vZ2xlX3JhdGluZy5yYXRpbmcgPSB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5nb29nbGVfcmF0aW5nW3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWNdLmdvb2dsZV9yYXRpbmdcbiAgICAgICAgICAgICAgICBnb29nbGVfcmF0aW5nLnJhdGluZ19ncmFwaCA9IHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLmdvb2dsZV9yYXRpbmdbdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY10uZ29vZ2xlX3JhdGluZ19ncmFwaFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGF2Z1JhdGluZyA9ICcnXG4gICAgICAgIGxldCByYXRpbmdDb3VudCA9ICcnXG4gICAgICAgIGlmICh0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXSAmJiB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5yYXRpbmdfZ3JhcGggJiYgdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0ucmF0aW5nX2dyYXBoLmF2Z19yYXRpbmcgJiYgdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0ucmF0aW5nX2dyYXBoLnJhdGluZ19jb3VudCkge1xuICAgICAgICAgICAgYXZnUmF0aW5nID0gdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0ucmF0aW5nX2dyYXBoLmF2Z19yYXRpbmc7XG4gICAgICAgICAgICByYXRpbmdDb3VudCA9IHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLnJhdGluZ19ncmFwaC5yYXRpbmdfY291bnQ7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2hvd19nb29nbGVfcmF0aW5nID0gT2JqZWN0LnZhbHVlcyhnb29nbGVfcmF0aW5nKS5sZW5ndGggPiAwXG5cbiAgICAgICAgLy9HZXQgU2VsZWN0ZWQgQ2xpbmljL0hvc3BpdGFsIE5hbWVcbiAgICAgICAgbGV0IHNlbGVjdGVkQ2xpbmljTmFtZSA9ICcnXG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdICYmIHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLmhvc3BpdGFscyAmJiB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5ob3NwaXRhbHMubGVuZ3RoICYmIHRoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWMpIHtcblxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkQ2xpbmljSW5mbyA9IHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLmhvc3BpdGFscy5maWx0ZXIoeCA9PiB4Lmhvc3BpdGFsX2lkID09IHRoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWMpXG5cbiAgICAgICAgICAgIHNlbGVjdGVkQ2xpbmljTmFtZSA9IHNlbGVjdGVkQ2xpbmljSW5mby5sZW5ndGggPyBzZWxlY3RlZENsaW5pY0luZm9bMF0uaG9zcGl0YWxfbmFtZSA6ICcnXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGFuZGluZ19wYWdlID0gZmFsc2VcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93Lk9OX0xBTkRJTkdfUEFHRSkge1xuICAgICAgICAgICAgbGFuZGluZ19wYWdlID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRvd25sb2FkQXBwQnV0dG9uRGF0YSA9IHt9XG5cbiAgICAgICAgaWYgKGxhbmRpbmdfcGFnZSAmJiB0aGlzLnByb3BzLmFwcF9kb3dubG9hZF9saXN0ICYmIHRoaXMucHJvcHMuYXBwX2Rvd25sb2FkX2xpc3QubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwX2Rvd25sb2FkX2xpc3QubWFwKChiYW5uZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYmFubmVyLmlzZW5hYmxlZCAmJiAodGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoYmFubmVyLmVuZHNfd2l0aCkgfHwgdGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoYmFubmVyLnN0YXJ0c193aXRoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRBcHBCdXR0b25EYXRhID0gYmFubmVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICAvL2NoZWNrIGlmIGFueSB1dG0gdGFnIGV4aXN0IGluIHVybFxuICAgICAgICBsZXQgaXNVdG1UYWdzRXhpc3QgPSBmYWxzZVxuICAgICAgICBpZiAocGFyc2VkLnV0bV9zb3VyY2UgfHwgcGFyc2VkLnV0bV9tZWRpdW0gfHwgcGFyc2VkLnV0bV90ZXJtIHx8IHBhcnNlZC51dG1fY2FtcGFpZ24pIHtcbiAgICAgICAgICAgIGlzVXRtVGFnc0V4aXN0ID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGxldCBzaG93Rm9yY2VkUG9wdXAgPSAhaXNVdG1UYWdzRXhpc3QgJiYgbGFuZGluZ19wYWdlICYmIHRoaXMuc3RhdGUuc2VvRnJpZW5kbHkgJiYgZG9jdG9yX2lkICYmIHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdICYmIHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLmlzX2NvbmdvdCAmJiB0aGlzLnN0YXRlLnNob3dJcGRMZWFkRm9ybSAmJiB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5wb3RlbnRpYWxfaXBkICYmICF0aGlzLnN0YXRlLmlzX2xpdmVcbiAgICAgICAgc2hvd0ZvcmNlZFBvcHVwID0gZmFsc2VcbiAgICAgICAgbGV0IGlzU2VvVmFsaWQ9IHRydWVcbiAgICAgICAgaWYoQ09ORklHLlNFT19GUklFTkRMWV9IT1NQSVRBTF9JRFMgJiYgdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pYyAmJiAgQ09ORklHLlNFT19GUklFTkRMWV9IT1NQSVRBTF9JRFMuaW5kZXhPZihwYXJzZUludCh0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljKSk+IC0xKXtcbiAgICAgICAgICAgIGlzU2VvVmFsaWQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGxldCBzaG93VmlwUG9wdXAgPSB0aGlzLnN0YXRlLnNob3dWaXBQb3B1cFxuICAgICAgICBpZihuZWFyYnlEb2N0b3JzICYmIE9iamVjdC5rZXlzKG5lYXJieURvY3RvcnMpLmxlbmd0aCl7XG4gICAgICAgICAgICAgc2hvd1ZpcFBvcHVwID0gc2hvd1ZpcFBvcHVwICYmIHRoaXMuc3RhdGUuY2xvc2VOb25Cb29rYWJsZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgc2hvd1NlYXJjaD17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXSAmJiBwYXJzZWQuc2hvd1BvcHVwICYmIHRoaXMuc3RhdGUuc2hvd0lwZExlYWRGb3JtICYmIHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93Lk9OX0xBTkRJTkdfUEFHRSkgfHwgc2hvd0ZvcmNlZFBvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJcGRMZWFkRm9ybSBzdWJtaXRMZWFkRm9ybUdlbmVyYXRpb249e3RoaXMuc3VibWl0TGVhZEZvcm1HZW5lcmF0aW9uLmJpbmQodGhpcyl9IHsuLi50aGlzLnByb3BzfSBob3NwaXRhbF9uYW1lPXtzZWxlY3RlZENsaW5pY05hbWV9IGhvc3BpdGFsX2lkPXt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljfSBkb2N0b3JfbmFtZT17dGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0ubmFtZSA/IHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLm5hbWUgOiAnJ30gZm9ybVNvdXJjZT0nRG9jdG9yQm9va2luZ1BhZ2UnIHNhdmVMZWFkSWRGb3JVcGRhdGlvbj17dGhpcy5zYXZlTGVhZElkRm9yVXBkYXRpb24uYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXSAmJiB0aGlzLnN0YXRlLnNob3dTZWNvbmRQb3B1cCAmJiBwYXJzZWQuZ2V0X2ZlZWRiYWNrICYmIHBhcnNlZC5nZXRfZmVlZGJhY2sgPT0gJzEnID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJcGRTZWNvbmRQb3B1cCB7Li4udGhpcy5wcm9wc30gZmlyc3RMZWFkSWQ9e3RoaXMuc3RhdGUuZmlyc3RMZWFkSWR9IGFsbF9kb2N0b3JzPXtbXX0gYWxsX2NpdGllcz17dGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0gJiYgdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0uYWxsX2NpdGllcyA/IHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLmFsbF9jaXRpZXMgOiBbXX0gZG9jdG9yUHJvZmlsZVBhZ2U9e3RydWV9IHNlY29uZElwZEZvcm1TdWJtaXR0ZWQ9e3RoaXMuc2Vjb25kSXBkRm9ybVN1Ym1pdHRlZC5iaW5kKHRoaXMpfSBob3NwaXRhbF9uYW1lPXtzZWxlY3RlZENsaW5pY05hbWV9IGhvc3BpdGFsX2lkPXt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljfSBkb2N0b3JfbmFtZT17dGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0ubmFtZSA/IHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLm5hbWUgOiAnJ30gZm9ybVNvdXJjZT0nRG9jdG9yQm9va2luZ1BhZ2UnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmVhcmJ5RG9jdG9ycyAmJiBPYmplY3Qua2V5cyhuZWFyYnlEb2N0b3JzKS5sZW5ndGggJiYgIXRoaXMuc3RhdGUuY2xvc2VOb25Cb29rYWJsZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8Tm9uQm9va2FibGVEb2N0b3Igey4uLnRoaXMucHJvcHN9IGNsb3NlTm9uQm9va2FibGVEb2NQb3B1cD17dGhpcy5jbG9zZU5vbkJvb2thYmxlRG9jUG9wdXAuYmluZCh0aGlzKX0gbmVhcmJ5RG9jdG9ycz17bmVhcmJ5RG9jdG9yc30gbmF2aWdhdGVUb0RvY3Rvcj17dGhpcy5uYXZpZ2F0ZVRvRG9jdG9yLmJpbmQodGhpcyl9IGRldGFpbHM9e3RoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8qKHRoaXMuc3RhdGUuc2hvd05vbklwZFBvcHVwID09IDEgfHwgdGhpcy5zdGF0ZS5zaG93Tm9uSXBkUG9wdXAgPT0gMikgJiYgdGhpcy5zdGF0ZS50b19iZV9mb3JjZSA9PSAxP1xuICAgICAgICAgICAgICAgICAgICA8Tm9uSXBkUG9wdXBWaWV3IHsuLi50aGlzLnByb3BzfSBub25JcGRMZWFkcz17dGhpcy5ub25JcGRMZWFkcy5iaW5kKHRoaXMpfSBjbG9zZUlwZExlYWRQb3B1cCA9IHt0aGlzLmNsb3NlSXBkTGVhZFBvcHVwLmJpbmQodGhpcyl9IGlzX2ZvcmNlPXt0aGlzLnN0YXRlLnNob3dOb25JcGRQb3B1cH0gaXNfZHBwPXt0cnVlfSBkb2N0b3JfaWQ9e2RvY3Rvcl9pZH0gaG9zcGl0YWxfaWQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWN9Lz5cbiAgICAgICAgICAgICAgICAgICAgOicnKi9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvKnNob3dfZHBwX29yZ2FuaWNfcG9wdXAgJiYgdGhpcy5zdGF0ZS5zZW9GcmllbmRseSAmJiBlbmFibGVkX2Zvcl9vbmxpbmVfYm9va2luZyAmJiBsYW5kaW5nX3BhZ2UgJiYgdGhpcy5zdGF0ZS5pc19vcmdhbmljX2xhbmRpbmcgJiYgdGhpcy5zdGF0ZS50b19iZV9mb3JjZSA9PSAxICYmICFpc1V0bVRhZ3NFeGlzdD9cbiAgICAgICAgICAgICAgICAgICAgIDxOb25JcGRQb3B1cFZpZXcgey4uLnRoaXMucHJvcHN9IG5vbklwZExlYWRzPXt0aGlzLm5vbklwZExlYWRzLmJpbmQodGhpcyl9IGNsb3NlSXBkTGVhZFBvcHVwID0ge3RoaXMuY2xvc2VJcGRMZWFkUG9wdXAuYmluZCh0aGlzKX0gaXNfZm9yY2U9e3RoaXMuc3RhdGUuc2hvd05vbklwZFBvcHVwfSBpc19kcHA9e3RydWV9IGRvY3Rvcl9pZD17ZG9jdG9yX2lkfSBpc19vcmdhbmljPXtmYWxzZX0gaG9zcGl0YWxfaWQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWN9Lz5cbiAgICAgICAgICAgICAgICAgICAgOicnKi9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIHBhcmVudC1zZWN0aW9uIGJvb2stYXBwb2ludG1lbnQtc2VjdGlvbiBicmVhZGNydW1iLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdICYmIHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLmJyZWFkY3J1bWIgJiYgdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0uYnJlYWRjcnVtYi5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29sLTEyIG1ybmctdG9wLTEyIGQtbm9uZSBkLW1kLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1yYi0xMCBicmVhZGNydW1iLWxpc3QgYnJlYWRjcnVtYi1saXN0LXVsXCIgc3R5bGU9e3sgJ3dvcmRCcmVhayc6ICdicmVha1dvcmQnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXSAmJiB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5icmVhZGNydW1iICYmIHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLmJyZWFkY3J1bWIubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5icmVhZGNydW1iLm1hcCgoZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1saXN0LWl0ZW1cIiBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID09IHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLmJyZWFkY3J1bWIubGVuZ3RoIC0gMSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntkYXRhLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8YSBocmVmPXtkYXRhLnVybH0gdGl0bGU9e2RhdGEubGlua190aXRsZSB8fCBkYXRhLnRpdGxlfSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goKGtleSA9PSAwIHx8IGtleSA9PSB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5icmVhZGNydW1iLmxlbmd0aCAtIDEpID8gZGF0YS51cmwgOiBgLyR7ZGF0YS51cmx9YClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID09IDAgfHwga2V5ID09IHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLmJyZWFkY3J1bWIubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCBicmVhZGNydW1iLXRpdGxlIGJyZWFkY3J1bWItY29sb3JlZC10aXRsZVwiPntkYXRhLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8aDIgY2xhc3NOYW1lPVwiZnctNTAwIGJyZWFkY3J1bWItdGl0bGUgYnJlYWRjcnVtYi1jb2xvcmVkLXRpdGxlIGQtaW5saW5lLWJsY2tcIj57ZGF0YS50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ICE9IHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLmJyZWFkY3J1bWIubGVuZ3RoIC0gMSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItYXJyb3dcIj4mZ3Q7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExlZnRCYXIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTcgY2VudGVyLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0gP1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkci1wcm9maWxlLXNjcmVlblwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcGFyc2VkLnNob3dQb3B1cCAmJiBkb3dubG9hZEFwcEJ1dHRvbkRhdGEgJiYgT2JqZWN0LnZhbHVlcyhkb3dubG9hZEFwcEJ1dHRvbkRhdGEpLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkb3dubG9hZEJ0blwiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgb25DbGljaz17dGhpcy5kb3dubG9hZEJ1dHRvbi5iaW5kKHRoaXMsIGRvd25sb2FkQXBwQnV0dG9uRGF0YSl9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkd25sQXBwQnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnByb3BzLmRldmljZV9pbmZvID8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICh0aGlzLnByb3BzLmRldmljZV9pbmZvLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2lwaG9uZScpIHx8IHRoaXMucHJvcHMuZGV2aWNlX2luZm8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnaXBhZCcpKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcxM3B4JywgbWFyZ2luUmlnaHQ6ICc1cHgnLCBtYXJnaW5Ub3A6ICctMXB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9hcHBsMS5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMTNweCcsIG1hcmdpblJpZ2h0OiAnNXB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9hbmRyMS5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb3dubG9hZCBBcHBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlbG1ldFRhZ3MgdGFnc0RhdGE9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuZ2V0TWV0YVRhZ3NEYXRhKHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLnNlbykudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmdldE1ldGFUYWdzRGF0YSh0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5zZW8pLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5vbmljYWxVcmw6IGAke0NPTkZJRy5BUElfQkFTRV9VUkx9JHtzZW9fdXJsIHx8IHRoaXMucHJvcHMubWF0Y2gudXJsfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYTogdGhpcy5nZXRNZXRhVGFnc0RhdGEodGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0uc2VvKS5zY2hlbWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBub0luZGV4PXshdGhpcy5zdGF0ZS5zZW9GcmllbmRseSB8fCAhaXNTZW9WYWxpZH0gLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc19saXZlICYmIGxhbmRpbmdfcGFnZSAmJiB0aGlzLnN0YXRlLnNlb0ZyaWVuZGx5ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZG9jLXRvcC1ib29rLWJ0blwiIG9uQ2xpY2s9e3RoaXMubmF2aWdhdGVUb0NsaW5pYy5iaW5kKHRoaXMsIGRvY3Rvcl9pZCwgdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pYywgdHJ1ZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2sgTm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBIb3NwaXRhbCBTZWxlY3Rpb24gQmxvY2sgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGlzcGxheUhvc3BpdGFsUmF0aW5nQmxvY2sgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SG9zcGl0YWxQb3BVcCB7Li4udGhpcy5wcm9wc30gZG9jdG9yX2RldGFpbHM9e3RoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdfSBwb3BVcFN0YXRlPXt0aGlzLmhvc3BpdGFsUG9wVXBTdGF0ZS5iaW5kKHRoaXMpfSAvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLnVucmF0ZWRfYXBwb2ludG1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPFJhdGluZ1Byb2ZpbGVDYXJkIHsuLi50aGlzLnByb3BzfSBkZXRhaWxzPXt0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS51bnJhdGVkX2FwcG9pbnRtZW50fSAvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJ0LTEwIGN0LXByb2ZpbGUgc2tpbi13aGl0ZSBib3JkZXItYm90dG9tLXJhZGlvdXMgZ29sZC1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5pc19nb2xkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdvbGQtY2FyZC1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9nb2xkLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RG9jdG9yUHJvZmlsZUNhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHM9e3RoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0RG9jdG9yTnVtYmVyPXt0aGlzLnByb3BzLmdldERvY3Rvck51bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY29tbWVuZERvY3M9e25lYXJieURvY3RvcnMucmVzdWx0ICYmIG5lYXJieURvY3RvcnMucmVzdWx0Lmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdBbGxEb2NDbGljaz17dGhpcy52aWV3QWxsRG9jQ2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lYXJieURvY3RvcnM9e25lYXJieURvY3RvcnMgPyBuZWFyYnlEb2N0b3JzIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1Nlb0ZyaWVuZGx5PXt0aGlzLnN0YXRlLnNlb0ZyaWVuZGx5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPcmdhbmljPXt0aGlzLnN0YXRlLmlzT3JnYW5pY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWFyYnlEb2N0b3JzICYmIE9iamVjdC5rZXlzKG5lYXJieURvY3RvcnMpLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZS1jb250ZW50IHBkLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtcGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lYXJieURvY3RvcnMucmVzdWx0ICYmIG5lYXJieURvY3RvcnMucmVzdWx0Lmxlbmd0aCAmJiBuZWFyYnlEb2N0b3JzLnNwZWNpYWxpemF0aW9ucyAmJiBuZWFyYnlEb2N0b3JzLnNwZWNpYWxpemF0aW9ucy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLXRpdGxlIG1iLXJtdiBwLXJlbGF0aXZlIGRvY3NsaWRlSGVhZEFsaWduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Cb29rIGV4cGVyaWVuY2VkIHtuZWFyYnlEb2N0b3JzLnNwZWNpYWxpemF0aW9uc1swXS5uYW1lfXMgbmVhciB5b3U8c3BhbiBjbGFzc05hbWU9XCJkb2NTbGlkZVN1YkhlYWRpbmdcIj5HZXQgZXhjbHVzaXZlIERvY3ByaW1lIGRpc2NvdW50PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lYXJieURvY3RvcnMuY291bnQgPj0gMSAmJiBuZWFyYnlEb2N0b3JzLmRvY3RvcnNfdXJsID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jU2xpZGV2aWV3QWxsXCIgb25DbGljaz17KCkgPT4gdGhpcy52aWV3QWxsRG9jQ2xpY2sobmVhcmJ5RG9jdG9ycyl9PlZpZXcgQWxsIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvYXJyb3dSaWdodC5zdmdcIn0gLz48L3NwYW4+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1jb250ZW50IHBkLTAgYm9yZGVyLWJvdHRvbS1wYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jU2Nyb2xsU2xpZGVyQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lYXJieURvY3RvcnMucmVzdWx0ICYmIG5lYXJieURvY3RvcnMucmVzdWx0Lmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVhcmJ5RG9jdG9ycy5yZXN1bHQubWFwKChkb2N0b3IsIGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImRvY1NsaWRlQ2FyZFwiIGtleT17aWR9IHN0eWxlPXt7IGN1cnNvcjogJ2F1dG8nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2NTbGlkZUhlYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogeyAgIC8vIFJBVElORyBDT0RFIEJFTE9XLCBET05UIERFTEVURVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IucmF0aW5nX2dyYXBoLmF2Z19yYXRpbmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGVEb2NSYXRpbmdcIj57ZG9jdG9yLnJhdGluZ19ncmFwaC5hdmdfcmF0aW5nfSA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMTRweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc2xpZGVkb2NyYXRpbmcuc3ZnXCJ9IC8+PC9zcGFuPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5pdGlhbHNQaWN0dXJlIG5hbWU9e2RvY3Rvci5uYW1lfSBoYXNfaW1hZ2U9eyEhZG9jdG9yLnRodW1ibmFpbH0gY2xhc3NOYW1lPVwiaW5pdGlhbHNQaWN0dXJlLWRzIHNsaWRlRG9jTWFpbkltZ1wiIHN0eWxlPXt7IHdpZHRoOiA2MCwgaGVpZ2h0OiA2MCwgZm9udFNpemU6ICcycmVtJyB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmx0ci11c3ItaW1hZ2UgaW1nLXJvdW5kIHNsaWRlRG9jTWFpbkltZ1wiIHNyYz17ZG9jdG9yLnRodW1ibmFpbH0gYWx0PXtkb2N0b3IuZGlzcGxheV9uYW1lfSB0aXRsZT17ZG9jdG9yLmRpc3BsYXlfbmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0luaXRpYWxzUGljdHVyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZURvY0NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvci51cmwgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC8ke2RvY3Rvci51cmx9YH0gb25DbGljaz17KGUpID0+IHRoaXMubmF2aWdhdGVUb0RvY3Rvcihkb2N0b3IsIGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzbGlkZURvY05hbWVcIj57ZG9jdG9yLmRpc3BsYXlfbmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgc3R5bGU9e3sgY3Vyc29yOiAnYXV0bycgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2xpZGVEb2NOYW1lXCI+e2RvY3Rvci5kaXNwbGF5X25hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzbGlkZURvY0V4cFwiPntkb2N0b3IuZXhwZXJpZW5jZV95ZWFyc30gWWVhcnMgb2YgRXhwZXJpZW5jZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvci5xdWFsaWZpY2F0aW9ucyAmJiBkb2N0b3IucXVhbGlmaWNhdGlvbnMubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNsaWRlRG9jZGVnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IucXVhbGlmaWNhdGlvbnMubWFwKChxdWFsaWZpY2F0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGtleT17aW5kZXh9PntxdWFsaWZpY2F0aW9uLnF1YWxpZmljYXRpb259PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvci5ob3NwaXRhbHMgJiYgZG9jdG9yLmhvc3BpdGFscy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2xpZGVEb2NFeHBcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDUgfX0gPntkb2N0b3IuaG9zcGl0YWxzWzBdLmhvc3BpdGFsX25hbWV9PC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRvY3Rvci5ob3NwaXRhbHNbMF0uaXNfZ29sZF9tZW1iZXIgfHwgZG9jdG9yLmhvc3BpdGFsc1swXS5pc192aXBfbWVtYmVyICkgJiYgZG9jdG9yLmhvc3BpdGFsc1swXS5jb3Zlcl91bmRlcl92aXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZURvY1ByaWNlIG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IuaG9zcGl0YWxzWzBdLmlzX2dvbGRfbWVtYmVyP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZU5hbWVQcmNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibm9uLWRvYy12aXAtaWNvIGltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZ29sZC1zbS5wbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGVOYW1lUHJjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInZpcC1tYWluLWljbyBpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcGxvZy5wbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlTmFtZVByY1wiPuKCuSB7ZG9jdG9yLmhvc3BpdGFsc1swXS52aXBfY29udmVuaWVuY2VfYW1vdW50ICsgZG9jdG9yLmhvc3BpdGFsc1swXS52aXBfZ29sZF9wcmljZX08L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwic2xpZGVDdXRQcmNcIj7igrkge2RvY3Rvci5tcnB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRvY3Rvci5kaXNjb3VudGVkX3ByaWNlICYmIGRvY3Rvci5tcnAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZURvY1ByaWNlIG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZU5hbWVQcmNcIj7igrkge2RvY3Rvci5kaXNjb3VudGVkX3ByaWNlfTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJzbGlkZUN1dFByY1wiPuKCuSB7ZG9jdG9yLm1ycH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvci5ob3NwaXRhbHNbMF0uZW5hYmxlZF9mb3Jfb25saW5lX2Jvb2tpbmcgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmICFkb2N0b3IuaG9zcGl0YWxzWzBdLmlzX2dvbGRfbWVtYmVyIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAhZG9jdG9yLmhvc3BpdGFsc1swXS5pc192aXBfbWVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIGRvY3Rvci5kaXNjb3VudGVkX3ByaWNlPihkb2N0b3IuaG9zcGl0YWxzWzBdLnZpcF9jb252ZW5pZW5jZV9hbW91bnQgKyBkb2N0b3IuaG9zcGl0YWxzWzBdLnZpcF9nb2xkX3ByaWNlKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgZG9jdG9yLmhvc3BpdGFsc1swXS5ob3NwX2lzX2dvbGQ/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnLXByYy1jdCBob21lLXNjcmVlbmdvbGRwcmljZSBtYi0yXCIgb25DbGljaz17dGhpcy5nb2xkQ2xpY2tlZC5iaW5kKHRoaXMsZG9jdG9yLmlkKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdsZC1jZC1pY29uXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9nb2xkLXNtLnBuZyd9Lz4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJnbGQtcC1yY1wiPlByaWNlPC9wPiA8c3BhbiBjbGFzc05hbWU9XCJnbGQtcmF0ZS1sZlwiPuKCuSB7ZG9jdG9yLmhvc3BpdGFsc1swXS52aXBfY29udmVuaWVuY2VfYW1vdW50ICsgZG9jdG9yLmhvc3BpdGFsc1swXS52aXBfZ29sZF9wcmljZX08L3NwYW4+PGltZyBzdHlsZT17e3RyYW5zZm9ybTogJ3JvdGF0ZSgtOTBkZWcpJywgd2lkdGg6ICcxMHB4JywgbWFyZ2luOicwcHggMTBweCAwcHggMHB4J319IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnJ30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRCb29rQnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17KGUpID0+IHRoaXMubmF2aWdhdGVUb0RvY3Rvcihkb2N0b3IsIGUpfT5Cb29rIE5vdzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVhcmJ5RG9jdG9ycy5jb3VudCA+IDEgJiYgbmVhcmJ5RG9jdG9ycy5zcGVjaWFsaXphdGlvbnMgJiYgbmVhcmJ5RG9jdG9ycy5zcGVjaWFsaXphdGlvbnMubGVuZ3RoICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZm9ybWF0dGVkX2FkZHJlc3MgIT0gJycgJiYgbmVhcmJ5RG9jdG9ycy5kb2N0b3JzX3VybCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2NTbGlkZUNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2NTY3JvbGxTZWFyY2hBbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvdmFsbC5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VmlldyBhbGwge25lYXJieURvY3RvcnMuY291bnR9IHtuZWFyYnlEb2N0b3JzLnNwZWNpYWxpemF0aW9uc1swXS5uYW1lfTxiciAvPiBpbiB7dGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzfSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdlLWNvbnRlbnQgcGQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLmFib3V0X3dlYiA/IDxBYm91dERvY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzPXt0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2UtY29udGVudCBwZC0wXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0uaG9zcGl0YWxzICYmIHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLmhvc3BpdGFscy5sZW5ndGgpID8gPENsaW5pY1NlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHM9e3RoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc30gZG9jdG9ySWQ9e2RvY3Rvcl9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0Q2xpbmljPXt0aGlzLnNlbGVjdENsaW5pYy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZENsaW5pYz17dGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2Zlc3Npb25hbEdyYXBoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlscz17dGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogdGhpcyBvbmUgaXMgcmF0aW5nICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1NUT1JBR0UuY2hlY2tBdXRoKCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtY29udGVudCByYXRlY2FyZEJyZHJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0ZVVyRG9jXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UmF0ZSB5b3VyIERvY3RvciBoZXJlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5kaXNwbGF5X2hvc3BpdGFsX3JhdGluZ19ibG9ja30+UmF0ZSBOb3c8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogdGhpcyBvbmUgaXMgcmF0aW5nICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2Z1JhdGluZyA+PSA0IHx8IHJhdGluZ0NvdW50ID49IDUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmF0aW5nUmV2aWV3VmlldyBpZD17ZG9jdG9yX2lkfSBjb250ZW50X3R5cGU9ezJ9IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHNob3dfZ29vZ2xlX3JhdGluZyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1wYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJwYW5lbC10aXRsZSBtYi1ybXZcIj5QYXRpZW50IEZlZWRiYWNrIDxhIGNsYXNzTmFtZT1cInJhdGVWaWV3QWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1jb250ZW50IHBkLTAgYm9yZGVyLWJvdHRvbS1wYW5lbCBkLWZsZXggYWxpZ24taXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb29nbGVSZXZpZXdjYXJkXCIgc3R5bGU9e3sgZmxleDogMSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcG93ZXJlZF9ieV9nb29nbGVfb25fd2hpdGUucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDbGluaWNOYW1lID8gPHA+UmF0aW5ncyBmb3I8c3Bhbj57c2VsZWN0ZWRDbGluaWNOYW1lfTwvc3Bhbj48L3A+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVlZC1iYWNrLWNvbnRhaW5lclwiIHN0eWxlPXt7IGZsZXg6IDEsIG1hcmdpbkJvdHRvbTogMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ29vZ2xlX3JhdGluZy5yYXRpbmdfZ3JhcGggJiYgZ29vZ2xlX3JhdGluZy5yYXRpbmdfZ3JhcGguYXZnX3JhdGluZyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhdGluZ1N0YXJzIGF2ZXJhZ2VfcmF0aW5nPXtnb29nbGVfcmF0aW5nLnJhdGluZ19ncmFwaC5hdmdfcmF0aW5nfSB3aWR0aD1cIjEycHhcIiBoZWlnaHQ9XCIxMnB4XCIganVzdGlmeUNlbnRlcj17dHJ1ZX0gLz4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVlZGJhY2stcmF0aW5nLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZlZWRiYWNrLXJhdGVcIj57Z29vZ2xlX3JhdGluZy5yYXRpbmdfZ3JhcGguYXZnX3JhdGluZ308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmZWVkYmFjay1yYXRlLXN0YXR1c1wiPntnb29nbGVfcmF0aW5nLnJhdGluZ19ncmFwaC5yYXRpbmdfY291bnR9IHJhdGluZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dWaXBQb3B1cCAmJiA8VklQUG9wdXAgdG9nZ2xlPXsoKT0+dGhpcy50b2dnbGVWaXAoKX0gbmF2aWdhdGVUb1ZpcD17KCk9PnRoaXMubmF2aWdhdGVUb1ZpcCgpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc19saXZlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHBwLWJ0bi1kaXYgZml4ZWQgaG9yaXpvbnRhbCBib3R0b20gc3RpY2t5LWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLnNlYXJjaERhdGFIaWRkZW4gJiYgc2VhcmNoX2RhdGEgJiYgc2VhcmNoX2RhdGEucmVzdWx0X2NvdW50ICYmIHNlYXJjaF9kYXRhLnRpdGxlICYmIHNlYXJjaF9kYXRhLnVybCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcHAtYnRuLXZpZXdcIiBocmVmPXsnLycgKyBzZWFyY2hfZGF0YS51cmx9IG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3NlYXJjaF9kYXRhLnVybH1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ3ZpZXdNb3JlRG9jdG9yc0NsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAndmlldy1tb3JlLWRvY3RvcnMtY2xpY2snXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9yaWdodC1vcmFuZ2Uuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2BWaWV3ICR7c2VhcmNoX2RhdGEucmVzdWx0X2NvdW50fSAke3NlYXJjaF9kYXRhLnRpdGxlfWB9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRwcC1idG4tYm9vayBkcHAtYnRuLWJvb2stY3VzdG9tXCIgb25DbGljaz17dGhpcy5uYXZpZ2F0ZVRvQ2xpbmljLmJpbmQodGhpcywgZG9jdG9yX2lkLCB0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8cD57YEJvb2sgTm93ICjigrkgJHtmaW5hbF9wcmljZX0pYH08L3A+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19PkJvb2sgTm93PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgfHwgdHJ1ZT8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxwIGNsYXNzTmFtZT1cImNwLWF1dG9cIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICc4cHgnIH19PipDb3Vwb24gYXV0byBhcHBsaWVkIG9uIGNoZWNrb3V0PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcHAtYnRuLWRpdiBmaXhlZCBob3Jpem9udGFsIGJvdHRvbSBzdGlja3ktYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGUuc2VhcmNoRGF0YUhpZGRlbiAmJiBzZWFyY2hfZGF0YSAmJiBzZWFyY2hfZGF0YS5yZXN1bHRfY291bnQgJiYgc2VhcmNoX2RhdGEudGl0bGUgJiYgc2VhcmNoX2RhdGEudXJsID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRwcC1idG4tdmlld1wiIGhyZWY9eycvJyArIHNlYXJjaF9kYXRhLnVybH0gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgLyR7c2VhcmNoX2RhdGEudXJsfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAndmlld01vcmVEb2N0b3JzQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICd2aWV3LW1vcmUtZG9jdG9ycy1jbGljaydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3JpZ2h0LW9yYW5nZS5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57YFZpZXcgJHtzZWFyY2hfZGF0YS5yZXN1bHRfY291bnR9ICR7c2VhcmNoX2RhdGEudGl0bGV9YH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jbGluaWNQaG9uZU5vW3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWNdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwiZHBwLWJ0bi1kaXYgZml4ZWQgaG9yaXpvbnRhbCBib3R0b20gc3RpY2t5LWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2B0ZWw6JHt0aGlzLnN0YXRlLmNsaW5pY1Bob25lTm9bdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY119YH0gY2xhc3NOYW1lPVwiZHBwLWJ0bi1ib29rIGQtbGctbm9uZSBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGltZyBzdHlsZT17eyB3aWR0aDogJzIwcHgnLCBtYXJnaW5SaWdodDogJzRweCcsIHBvc2l0aW9uOiAncmVsYXRpdmUnLCBsZWZ0OiAnLTNweCcsIGJvdHRvbTogJy0ycHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NhbGwtaWNvLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2xpbmljUGhvbmVOb1t0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHBwLWJ0bi1ib29rIGQtbGctZmxleCBkLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUuY2xpbmljUGhvbmVOb1t0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5zaG93X2NvbnRhY3QgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHBwLWJ0bi1ib29rXCIgb25DbGljaz17dGhpcy5zaG93TnVtYmVyLmJpbmQodGhpcywgZG9jdG9yX2lkKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlZpZXcgQ29udGFjdDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiZHBwLWJ0bi1ib29rXCIgb25DbGljaz17dGhpcy5zaG93TnVtYmVyLmJpbmQodGhpcywgZG9jdG9yX2lkKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubnVtYmVyU2hvd24/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6ICcyMHB4JywgbWFyZ2luUmlnaHQ6ICc0cHgnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbGVmdDogJy0zcHgnLCBib3R0b206ICctMnB4J319IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NhbGwtaWNvLnN2Z1wifSAvPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfXt0aGlzLnN0YXRlLm51bWJlclNob3duIHx8IFwiVmlldyBDb250YWN0XCJ9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5vcGVuQ29udGFjdFBvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWN0UG91cFZpZXcgdG9nZ2xlPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsICdvcGVuQ29udGFjdFBvcHVwJyl9IG1vYmlsZU5vPXt0aGlzLnByb3BzLnByaW1hcnlNb2JpbGV9IGdldERvY3Rvcj17dGhpcy5nZXREb2N0b3JOby5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj4gOiA8TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmlnaHRCYXIgZXh0cmFDbGFzcz1cIiBjaGF0LWZsb2F0LWJ0bi0yXCIgdHlwZT1cIm9wZFwiIG5vQ2hhdEJ1dHRvbj17IXRoaXMuc3RhdGUuc2VhcmNoRGF0YUhpZGRlbn0gc2hvd0Rlc2t0b3BJcGQ9e3RydWV9IG1zZ1RlbXBsYXRlPVwiZ29sZF9nZW5lcmFsX3RlbXBsYXRlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPEZvb3RlciBmb290ZXJEYXRhPXt0aGlzLnN0YXRlLmZvb3RlckRhdGF9IC8+XG4gICAgICAgICAgICA8L2RpdiA+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEb2N0b3JQcm9maWxlVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5sZXQgZG9jdG9yRGF0YSA9IGZhbHNlXG5jbGFzcyBBYm91dERvY3RvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIC8vIGxlc3NBYm91dDogXCJcIixcbiAgICAgICAgICAgIC8vIHJlcXVpcmVkUmVhZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgcmVhZE1vcmU6IGRvY3RvckRhdGFcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWFkTW9yZTogdHJ1ZX0pXG4gICAgICAgIC8vIHRoaXMucmVuZGVyQWJvdXQodGhpcy5wcm9wcylcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgIC8vIHRoaXMucmVuZGVyQWJvdXQocHJvcHMpXG4gICAgfVxuXG4gICAgLy8gcmVuZGVyQWJvdXQocHJvcHMpIHtcbiAgICAvLyAgICAgbGV0IHsgYWJvdXQgfSA9IHByb3BzLmRldGFpbHNcbiAgICAvLyAgICAgaWYgKGFib3V0KSB7XG4gICAgLy8gICAgICAgICBpZiAoYWJvdXQubGVuZ3RoID4gMTAwKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgICAgICAgICAgICAgIHJlYWRNb3JlOiB0cnVlLFxuICAgIC8vICAgICAgICAgICAgICAgICByZXF1aXJlZFJlYWRNb3JlOiB0cnVlXG4gICAgLy8gICAgICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICAgICAgICAgIGxlc3NBYm91dDogYWJvdXQuc2xpY2UoMCwgMTAwKSArIFwiLi4uXCJcbiAgICAvLyAgICAgICAgIH0pXG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgbGV0IHsgYWJvdXQsIG5hbWUgfSA9IHRoaXMucHJvcHMuZGV0YWlsc1xuICAgICAgICBsZXQgYnV0dG9uID0gXCJcIlxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnJlcXVpcmVkUmVhZE1vcmUpIHtcbiAgICAgICAgICAgIC8vIGJ1dHRvbiA9IDxhIGNsYXNzTmFtZT1cImZ3LTcwMCB0ZXh0LXByaW1hcnlcIiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlYWRNb3JlOiBmYWxzZSwgbGVzc0Fib3V0OiBhYm91dCB9KVxuICAgICAgICAgICAgLy8gfX0+IFJFQUQgTU9SRSAmIzk2NjA7PC9hPlxuXG4gICAgICAgICAgICAvLyBpZiAoIXRoaXMuc3RhdGUucmVhZE1vcmUpIHtcbiAgICAgICAgICAgIC8vICAgICBidXR0b24gPSA8YSBjbGFzc05hbWU9XCJmdy03MDAgdGV4dC1wcmltYXJ5XCIgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVhZE1vcmU6IHRydWUsIGxlc3NBYm91dDogYWJvdXQuc2xpY2UoMCwgMTAwKSArIFwiLi4uXCIgfSlcbiAgICAgICAgICAgIC8vICAgICB9fT4gU0hPVyBMRVNTICYjOTY1MDs8L2E+XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFib3V0VHh0XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRldGFpbHMuYWJvdXRfd2ViKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5kZXRhaWxzLmFib3V0X3dlYi5sZW5ndGggPiAxNTApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5yZWFkTW9yZSkge1xuICAgICAgICAgICAgICAgICAgICBhYm91dFR4dCA9IHRoaXMucHJvcHMuZGV0YWlscy5hYm91dF93ZWIuc2xpY2UoMCwgMTUwKSArIFwiLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uID0gPGEgY2xhc3NOYW1lPVwiZnctNzAwIHRleHQtcHJpbWFyeVwiIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWFkTW9yZTogIXRoaXMuc3RhdGUucmVhZE1vcmUgfSlcbiAgICAgICAgICAgICAgICAgICAgfX0+IFJlYWQgTW9yZSA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTEsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyB9fT4mIzk2NjA7PC9zcGFuPjwvYT5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhYm91dFR4dCA9IHRoaXMucHJvcHMuZGV0YWlscy5hYm91dF93ZWJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uID0gPGEgY2xhc3NOYW1lPVwiZnctNzAwIHRleHQtcHJpbWFyeVwiIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWFkTW9yZTogIXRoaXMuc3RhdGUucmVhZE1vcmUgfSlcbiAgICAgICAgICAgICAgICAgICAgfX0+IFNob3cgTGVzcyA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTEsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyB9fT4mIzk2NTA7PC9zcGFuPjwvYT5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFib3V0VHh0ID0gdGhpcy5wcm9wcy5kZXRhaWxzLmFib3V0X3dlYlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1wYW5lbFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYW5lbC10aXRsZSBtYi1ybXZcIj5BYm91dCBEci4ge25hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdy0xMDAwMCB0ZXh0LW1kIGFidC1kb2MtaW5saW5ldGV4dFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYWJvdXRUeHQgfX0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7YnV0dG9ufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0RG9jdG9yXG4iLCJpbXBvcnQgQWJvdXREb2N0b3IgZnJvbSAnLi9BYm91dERvY3Rvci5qcydcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXREb2N0b3IiLCJpbXBvcnQgRG9jdG9yUHJvZmlsZVZpZXcgZnJvbSAnLi9Eb2N0b3JQcm9maWxlVmlldy5qcydcblxuZXhwb3J0IGRlZmF1bHQgRG9jdG9yUHJvZmlsZVZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEluaXRpYWxzUGljdHVyZSBmcm9tICcuLi8uLi9jb21tb25zL2luaXRpYWxzUGljdHVyZSc7XG5pbXBvcnQgUmF0aW5nU3RhcnMgZnJvbSAnLi4vLi4vY29tbW9ucy9yYXRpbmdzUHJvZmlsZVZpZXcvUmF0aW5nU3RhcnMnO1xuaW1wb3J0IERvY3RvclJlc3VsdENhcmQgZnJvbSAnLi4vY29tbW9ucy9kb2N0b3JSZXN1bHRDYXJkJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuY2xhc3MgTm9uQm9va2FibGVEb2N0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cblx0XHR9XG5cdH1cblx0Vmlld0FsbCgpe1xuXHRcdGxldCBzcGVjaWFsaXR5PXt9XG5cdFx0aWYodGhpcy5wcm9wcy5kZXRhaWxzLmRvY3RvcnMgJiYgdGhpcy5wcm9wcy5kZXRhaWxzLmRvY3RvcnMuc3BlY2lhbGl6YXRpb25zKXtcblx0XHRcdFxuXHRcdFx0c3BlY2lhbGl0eS5pZCA9IHRoaXMucHJvcHMuZGV0YWlscy5kb2N0b3JzLnNwZWNpYWxpemF0aW9uc1swXS5pZFxuXHRcdFx0c3BlY2lhbGl0eS5uYW1lID0gdGhpcy5wcm9wcy5kZXRhaWxzLmRvY3RvcnMuc3BlY2lhbGl6YXRpb25zWzBdLm5hbWVcblx0XHRcdHNwZWNpYWxpdHkudHlwZSA9ICdzcGVjaWFsaXR5J1xuXHRcdFx0bGV0IGRhdGEgPSB7XG5cdFx0XHQnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ05vbkJvb2thYmxlRG9jdG9yVmlld0FsbENsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdOb24tQm9va2FibGUtRG9jdG9yLVZpZXdBbGwtY2xpY2tlZCcsICdzZWxlY3RlZCc6IHNwZWNpYWxpdHkubmFtZSB8fCAnJywgJ3NlbGVjdGVkSWQnOiBzcGVjaWFsaXR5LmlkIHx8ICcnXG5cdFx0XHR9XG5cdFx0XHRHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXHRcdFx0dGhpcy5wcm9wcy50b2dnbGVPUERDcml0ZXJpYSgnc3BlY2lhbGl0eScsIHNwZWNpYWxpdHksIHRydWUpXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9vcGQvc2VhcmNocmVzdWx0cycpXG5cdFx0XHR9LCAxMDApXG5cdFx0fVxuXG5cdH1cblx0cmVuZGVyKCkge1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLXBvcHVwLW92ZXJsYXkgIGNhbmNlbC1vdmVybGF5LXppbmRleFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1wb3B1cCBub24tYm9vay1wb3BcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBwLXJlbGF0aXZlXCI+XG5cdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJub24tYm9vay1jbHMtYnRuXCIgc3JjPSB7QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ljb25zL2Nsb3NlLnBuZ1wifSBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlTm9uQm9va2FibGVEb2NQb3B1cC5iaW5kKHRoaXMpfS8+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vbi1ib2staGRuZy1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibm9uLWJvay1oZWFkaW5nXCI+e3RoaXMucHJvcHMuZGV0YWlscy5kaXNwbGF5X25hbWV9IGlzIG5vdCBib29rYWJsZTwvcD5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibm9uLWJvay1zdWJoZG5nXCI+U2VlIGJvb2thYmxlIGRvY3RvcnMgd2l0aCBncmVhdCBkaXNjb3VudHMgYmVsb3c8L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm9uLWJvay1jYXJkcy1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMubmVhcmJ5RG9jdG9ycy5yZXN1bHQgJiYgdGhpcy5wcm9wcy5uZWFyYnlEb2N0b3JzLnJlc3VsdC5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm5lYXJieURvY3RvcnMucmVzdWx0Lm1hcCgoZG9jdG9yLCBpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdGlmKGlkIDw9MSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0cmV0dXJuIDxEb2N0b3JSZXN1bHRDYXJkIHsuLi50aGlzLnByb3BzfSBkZXRhaWxzPXtkb2N0b3J9IGtleT17aWR9IHJhbms9e2lkfSBpc05vbkJvb2thYmxlUG9wdXA9e3RydWV9Lz5cblx0XHRcdFx0XHRcdFx0XHRcdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcblx0XHRcdFx0XHRcdFx0OicnfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5kZXRhaWxzLmRvY3RvcnMgJiYgdGhpcy5wcm9wcy5kZXRhaWxzLmRvY3RvcnMuc3BlY2lhbGl6YXRpb25zP1xuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ2aXctYWxsLW5vbi1ib2tcIiBvbkNsaWNrPXt0aGlzLlZpZXdBbGwuYmluZCh0aGlzKX0+VmlldyBBbGwgVG9wIHt0aGlzLnByb3BzLmRldGFpbHMuZG9jdG9ycy5zcGVjaWFsaXphdGlvbnNbMF0ubmFtZX0gTmVhciBZb3U8L3A+XG5cdFx0XHRcdFx0XHQ6Jyd9XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9uQm9va2FibGVEb2N0b3IiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY2xhc3MgRXhwYW5zaW9uUGFuZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG9wZW46IHRydWVcblx0XHR9XG5cdH1cblxuXHR0b2dnbGVPcGVuKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBvcGVuOiAhdGhpcy5zdGF0ZS5vcGVuIH0pXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRsZXQgeyBoZWFkaW5nLCBjb250ZW50TGlzdCwgaW1hZ2UgfSA9IHRoaXMucHJvcHNcblxuXHRcdGxldCBsaXN0SWQgPSBoZWFkaW5nLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGxpIGNsYXNzTmFtZT1cImV4cGFuc2lvbi1wYW5lbC1saXN0LWl0ZW1cIiBpZD17bGlzdElkfT5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCIgb25DbGljaz17dGhpcy50b2dnbGVPcGVuLmJpbmQodGhpcyl9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMCB9fSA+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz17aW1hZ2V9IHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246ICctMnB4JywgbWFyZ2luUmlnaHQ6IDgsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCB3aWR0aDogJzIycHgnIH19IC8+XG5cdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtbWQgbXJiLTBcIiBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fT57aGVhZGluZ308L2gzPlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLm9wZW4gPyA8aW1nIGNsYXNzTmFtZT1cInRpdGxlYXJyb3ctdXBcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz4gOiA8aW1nIGNsYXNzTmFtZT1cInRpdGxlYXJyb3dcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlLm9wZW4gPyA8ZGl2IGNsYXNzTmFtZT1cIm1vcmUtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5xdWxpZmljYXRpb24gPyBjb250ZW50TGlzdC5tYXAoKGNvbnQsIGkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZXhwYW5zaW9uLWxhYmVsLWRpdlwiIGtleT17aX0gc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCB9fSA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNzAwIHRleHQtbWQgdGV4dC1saWdodFwiIHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyB9fT57Y29udC5xdWFsaWZpY2F0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb250LnNwZWNpYWxpemF0aW9uID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmdy03MDAgdGV4dC1tZCB0ZXh0LWxpZ2h0XCIgc3R5bGU9e3sgdmVydGljYWxBbGlnbjogJ21pZGRsZScgfX0+Jm5ic3A7Jm5ic3A7fCZuYnNwOyZuYnNwOzwvc3Bhbj4gOiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2NvbnQuc3BlY2lhbGl6YXRpb259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnQuY29sbGVnZSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZnctNzAwIHRleHQtbWQgdGV4dC1saWdodFwiIHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnIH19PiZuYnNwOyZuYnNwO3wmbmJzcDsmbmJzcDs8L3NwYW4+IDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udC5wYXNzaW5nX3llYXIgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPntgJHtjb250LmNvbGxlZ2V9IC0gJHtjb250LnBhc3NpbmdfeWVhcn1gfTwvc3Bhbj4gOiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHR9KSA6IGNvbnRlbnRMaXN0Lm1hcCgoY29udCwgaSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZXhwYW5zaW9uLWxhYmVsLWRpdlwiIGtleT17aX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb250LmhlYWRpbmcgPyA8bGFiZWwgY2xhc3NOYW1lPVwiZnctNzAwIHRleHQtc20gdGV4dC1wcmltYXJ5XCI+e2NvbnQuaGVhZGluZ31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsvKiA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2kgPCBjb250ZW50TGlzdC5sZW5ndGggLSAxID8gXCJ8XCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gKi99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD4gOiBcIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy03MDAgdGV4dC1tZCB0ZXh0LWxpZ2h0XCIgc3R5bGU9e3sgbGluZUhlaWdodDogJzIwcHgnIH19ID57Y29udC5jb250ZW50fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsvKiA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpIDwgY29udGVudExpc3QubGVuZ3RoIC0gMSA/IFwifFwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiAqL31cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9kaXY+IDogXCJcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2xpPlxuXHRcdCk7XG5cdH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBFeHBhbnNpb25QYW5lbFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBFeHBhbnNpb25QYW5lbCBmcm9tICcuL0V4cGFuc2lvblBhbmVsJztcblxuY2xhc3MgUHJvZmVzc2lvbmFsR3JhcGggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCB7IG5hbWUsIHByb2ZpbGVfaW1nLCBxdWFsaWZpY2F0aW9ucywgcGhvbmVfbnVtYmVyLCBlbWFpbCwgcHJhY3RpY2luZ19zaW5jZSwgZ2VuZGVyLCBsYW5ndWFnZXMsIGxpY2Vuc2UsIG1vYmlsZXMsIGF3YXJkcywgYXNzb2NpYXRpb25zLCBtZWRpY2FsX3NlcnZpY2VzLCBleHBlcmllbmNlcyB9ID0gdGhpcy5wcm9wcy5kZXRhaWxzXG5cbiAgICAgICAgcXVhbGlmaWNhdGlvbnMgPSBxdWFsaWZpY2F0aW9ucyB8fCBbXVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1wYW5lbFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYW5lbC10aXRsZVwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMCB9fSA+UHJvZmVzc2lvbmFsIEdyYXBoIG9mIERyLiB7bmFtZX08L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtY29udGVudCBleHBhbnNpb24tY29udGVudCBwZC0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0IGRyb3AtZG93bi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbGlmaWNhdGlvbnMgPyA8RXhwYW5zaW9uUGFuZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZz17XCJRdWFsaWZpY2F0aW9uXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRMaXN0PXtxdWFsaWZpY2F0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVsaWZpY2F0aW9uPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17XCIvYXNzZXRzL2ltZy9jdXN0b21lci1pY29ucy9FZHVjYXRpb24tMDEuc3ZnXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZXMgJiYgbGFuZ3VhZ2VzLmxlbmd0aCA/IDxFeHBhbnNpb25QYW5lbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPXtcIkxhbmd1YWdlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtcIi9hc3NldHMvaW1nL2N1c3RvbWVyLWljb25zL0xhbmd1YWdlLTAxLnN2Z1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50TGlzdD17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc6IFwiXCIsIGNvbnRlbnQ6IGxhbmd1YWdlcy5yZWR1Y2UoKGZpbmFsLCBjdXJyLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsICs9IGAke2N1cnIubGFuZ3VhZ2V9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCBsYW5ndWFnZXMubGVuZ3RoIC0gMSkgZmluYWwgKz0gXCIgfCBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YXJkcyAmJiBhd2FyZHMubGVuZ3RoID8gPEV4cGFuc2lvblBhbmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9e1wiQXdhcmRzXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtcIi9hc3NldHMvaW1nL2N1c3RvbWVyLWljb25zL0F3YXJkLTAxLnN2Z1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50TGlzdD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FyZHMubWFwKChhd2FyZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YXJkLnllYXIgPSBhd2FyZC55ZWFyIHx8IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXdhcmQueWVhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBoZWFkaW5nOiBcIlwiLCBjb250ZW50OiBgJHthd2FyZC5uYW1lfSwgJHthd2FyZC55ZWFyfWAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGhlYWRpbmc6IFwiXCIsIGNvbnRlbnQ6IGAke2F3YXJkLm5hbWV9YCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzb2NpYXRpb25zICYmIGFzc29jaWF0aW9ucy5sZW5ndGggPyA8RXhwYW5zaW9uUGFuZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZz17XCJBc3NvY2lhdGUgTWVtYmVyc2hpcFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17XCIvYXNzZXRzL2ltZy9jdXN0b21lci1pY29ucy9Bc3NvY2lhdGVNZW1iZXJzaGlwLnN2Z1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50TGlzdD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NvY2lhdGlvbnMubWFwKChhc3NvY2lhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGhlYWRpbmc6IFwiXCIsIGNvbnRlbnQ6IGAke2Fzc29jaWF0aW9uLm5hbWV9YCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlcmllbmNlcyAmJiBleHBlcmllbmNlcy5sZW5ndGggPyA8RXhwYW5zaW9uUGFuZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZz17XCJFeHBlcmllbmNlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtcIi9hc3NldHMvaW1nL2N1c3RvbWVyLWljb25zL0V4cGVyaWVuY2VkLTAxLnN2Z1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50TGlzdD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlcmllbmNlcy5tYXAoKGV4cGVyaWVuY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBoZWFkaW5nOiBcIlwiLCBjb250ZW50OiBgJHtleHBlcmllbmNlLmhvc3BpdGFsfSwgJHtleHBlcmllbmNlLnN0YXJ0X3llYXJ9IC0gJHtleHBlcmllbmNlLmVuZF95ZWFyfWAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWNhbF9zZXJ2aWNlcyAmJiBtZWRpY2FsX3NlcnZpY2VzLmxlbmd0aCA/IDxFeHBhbnNpb25QYW5lbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPXtcIlN1YnNjcmliZWQgU2VydmljZXNcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e1wiL2Fzc2V0cy9pbWcvY3VzdG9tZXItaWNvbnMvU3Vic2NyaWJlZFNlcnZpY2VzLTAxLnN2Z1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50TGlzdD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpY2FsX3NlcnZpY2VzLm1hcCgoc2VydmljZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGhlYWRpbmc6IFwiXCIsIGNvbnRlbnQ6IGAke3NlcnZpY2UubmFtZX1gIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBQcm9mZXNzaW9uYWxHcmFwaFxuIiwiaW1wb3J0IFByb2Zlc3Npb25hbEdyYXBoIGZyb20gJy4vUHJvZmVzc2lvbmFsR3JhcGguanMnXG5cbmV4cG9ydCBkZWZhdWx0IFByb2Zlc3Npb25hbEdyYXBoIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuZXhwb3J0IGRlZmF1bHQgKHtwcm9wcyx0b2dnbGUsIG5hdmlnYXRlVG9WaXB9KSA9PiB7XG5cdHJldHVybihcblx0XHQ8ZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbC1vdmVybGF5IHZpcC1jbmNsLW92ZXJsYXlcIiBvbkNsaWNrPXsoKT0+dG9nZ2xlKCl9PjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBjYW5jZWwtYXBwb2ludG1lbnQtZGl2IGNhbmNlbC1wb3B1cCB2aXAtcG9wLW1ibFwiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaWNvbnMvY2xvc2UucG5nXCJ9IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCB6SW5kZXg6ICc5JyB9fSBjbGFzc05hbWU9XCJjbG9zZS1tb2RhbFwiIG9uQ2xpY2s9eygpPT50b2dnbGUoKX0vPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWhlYWRlciB0ZXh0LWNlbnRlciBhY3Rpb24tc2NyZWVuLWhlYWRlclwiIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBwYWRkaW5nVG9wOiAnJyB9fSA+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ2cC1wb3AtZ3JuXCI+U2F2ZSA3MCUgb24gQXBwb2ludG1lbnRzPC9wPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidnAtcG9wLXN1Yi10eHRcIj4gQmVjb21lIERvY3ByaW1lIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvdmlwbG9nLnBuZ1wifS8+IG1lbWJlciB0b2RheSA8L3A+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cInZwLXBvcC1jaC1idG5cIiBvbkNsaWNrPXsoKT0+bmF2aWdhdGVUb1ZpcCgpfT5Lbm93IG1vcmU8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBnZXREb2N0b3JOdW1iZXIsIGdldERvY3RvckJ5VXJsLCBnZXREb2N0b3JCeUlkLCBzZWxlY3RPcGRUaW1lU0xvdCwgZ2V0UmF0aW5nQ29tcGxpbWVudHMsIGNyZWF0ZUFwcG9pbnRtZW50UmF0aW5nLCB1cGRhdGVBcHBvaW50bWVudFJhdGluZywgY2xvc2VBcHBvaW50bWVudFJhdGluZywgY2xvc2VBcHBvaW50bWVudFBvcFVwLCBnZXRGb290ZXJEYXRhLCBtZXJnZU9QRFN0YXRlLCB0b2dnbGVQcm9maWxlUHJvY2VkdXJlcywgc2F2ZVByb2ZpbGVQcm9jZWR1cmVzLCBnZXREb2N0b3JObywgdG9nZ2xlT1BEQ3JpdGVyaWEsIGdldEFsbFJhdGluZ3MsIGdldERvd25sb2FkQXBwQmFubmVyTGlzdCwgaXBkQ2hhdFZpZXcsIGNsZWFyVmlwU2VsZWN0ZWRQbGFuLCBOb25JcGRCb29raW5nTGVhZCwgc2F2ZUxlYWRQaG5OdW1iZXJ9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5cbmltcG9ydCBEb2N0b3JQcm9maWxlVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL29wZC9kb2N0b3JQcm9maWxlL2luZGV4LmpzJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuXG5jbGFzcyBEb2N0b3JQcm9maWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgbGV0IGRfaWQgPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCB8fCB0aGlzLmdldF9kb2N0b3JfaWRfYnlfdXJsKHRoaXMucHJvcHMubWF0Y2gudXJsKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWREb2N0b3I6IGRfaWQsXG4gICAgICAgICAgICBpc19wcm9jZWR1cmU6IGZhbHNlLFxuICAgICAgICAgICAgaG9zcGl0YWxfaWQ6ICcnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRfZG9jdG9yX2lkX2J5X3VybCh1cmwpIHtcbiAgICAgICAgZm9yIChsZXQgZF9pZCBpbiB0aGlzLnByb3BzLkRPQ1RPUlMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLkRPQ1RPUlNbZF9pZF0udXJsICYmIHVybC5pbmNsdWRlcyh0aGlzLnByb3BzLkRPQ1RPUlNbZF9pZF0udXJsKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkX2lkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZERhdGEoc3RvcmUsIG1hdGNoLCBxdWVyeURhdGEgPSB7fSkge1xuICAgICAgICBpZiAobWF0Y2gucGFyYW1zLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZ2V0RG9jdG9yQnlJZChtYXRjaC5wYXJhbXMuaWQsIHF1ZXJ5RGF0YS5ob3NwaXRhbF9pZCB8fCAnJywgcXVlcnlEYXRhLnByb2NlZHVyZV9pZHMgfHwgW10sIHF1ZXJ5RGF0YS5jYXRlZ29yeV9pZHMgfHwgW10pKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHVybCA9IG1hdGNoLnVybFxuICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICAgIHVybCA9IHVybC5zcGxpdChcIi9cIilbMV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goZ2V0RG9jdG9yQnlVcmwodXJsLCBxdWVyeURhdGEuaG9zcGl0YWxfaWQgfHwgJycsIHF1ZXJ5RGF0YS5wcm9jZWR1cmVfaWRzIHx8IFtdLCBxdWVyeURhdGEuY2F0ZWdvcnlfaWRzIHx8IFtdLCAoZG9jdG9yX2lkLCB1cmwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3Rvcl9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoLnVybC5pbmNsdWRlcygnLWRwcCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Rm9vdGVyRGF0YShtYXRjaC51cmwuc3BsaXQoXCIvXCIpWzFdKSgpLnRoZW4oKGZvb3RlckRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9vdGVyRGF0YSA9IGZvb3RlckRhdGEgfHwgbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHsgZG9jdG9yX2lkLCBmb290ZXJEYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7IGRvY3Rvcl9pZCB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyBkb2N0b3JfaWQgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICByb3V0ZXI6ICgpID0+IG51bGxcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBob3NwaXRhbF9pZCA9ICcnXG4gICAgICAgIGxldCBpc19wcm9jZWR1cmUgPSBmYWxzZVxuICAgICAgICBsZXQgY2F0ZWdvcnlfaWRzID0gW11cbiAgICAgICAgbGV0IHByb2NlZHVyZV9pZHMgPSBbXVxuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICAgIGhvc3BpdGFsX2lkID0gcGFyc2VkLmhvc3BpdGFsX2lkIHx8ICcnXG4gICAgICAgICAgICBpc19wcm9jZWR1cmUgPSBwYXJzZWQuaXNfcHJvY2VkdXJlIHx8IGZhbHNlXG4gICAgICAgICAgICBjYXRlZ29yeV9pZHMgPSBwYXJzZWQuY2F0ZWdvcnlfaWRzIHx8IFtdXG4gICAgICAgICAgICBwcm9jZWR1cmVfaWRzID0gcGFyc2VkLnByb2NlZHVyZV9pZHMgfHwgW11cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCkge1xuICAgICAgICAgICAgLy9pZiAoIXRoaXMuc3RhdGUuc2VsZWN0ZWREb2N0b3IgfHwgIXRoaXMucHJvcHMuRE9DVE9SU1t0aGlzLnN0YXRlLnNlbGVjdGVkRG9jdG9yXSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0RG9jdG9yQnlJZCh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCwgaG9zcGl0YWxfaWQsIHByb2NlZHVyZV9pZHMsIGNhdGVnb3J5X2lkcylcbiAgICAgICAgICAgIC8vfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhvc3BpdGFsX2lkOiBob3NwaXRhbF9pZCwgaXNfcHJvY2VkdXJlOiBpc19wcm9jZWR1cmUgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB1cmwgPSB0aGlzLnByb3BzLm1hdGNoLnVybFxuICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICAgIHVybCA9IHVybC5zcGxpdChcIi9cIilbMV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vaWYgKCF0aGlzLnN0YXRlLnNlbGVjdGVkRG9jdG9yIHx8ICF0aGlzLnByb3BzLkRPQ1RPUlNbdGhpcy5zdGF0ZS5zZWxlY3RlZERvY3Rvcl0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldERvY3RvckJ5VXJsKHVybCwgaG9zcGl0YWxfaWQsIHByb2NlZHVyZV9pZHMsIGNhdGVnb3J5X2lkcywgKGRvY3Rvcl9pZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdG9yX2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWREb2N0b3I6IGRvY3Rvcl9pZCB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhvc3BpdGFsX2lkOiBob3NwaXRhbF9pZCwgaXNfcHJvY2VkdXJlOiBpc19wcm9jZWR1cmUgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vYWx3YXlzIGNsZWFyIHNlbGVjdGVkIHRpbWUgYXQgZG9jdG9yIHByb2ZpbGVcbiAgICAgICAgbGV0IHNsb3QgPSB7IHRpbWU6IHt9IH1cbiAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RPcGRUaW1lU0xvdChzbG90LCBmYWxzZSlcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wcy5mZXRjaE5ld1Jlc3VsdHMgJiYgKHByb3BzLmZldGNoTmV3UmVzdWx0cyAhPSB0aGlzLnByb3BzLmZldGNoTmV3UmVzdWx0cykpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxEb2N0b3JQcm9maWxlVmlldyB7Li4udGhpcy5wcm9wc30gc2VsZWN0ZWREb2N0b3I9e3RoaXMuc3RhdGUuc2VsZWN0ZWREb2N0b3J9IHsuLi50aGlzLnN0YXRlfSAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwYXNzZWRQcm9wcykgPT4ge1xuICAgIC8qKlxuICAgICAqIGluaXRpYWxTZXJ2ZXJEYXRhIGlzIHNlcnZlciByZW5kZXJlZCBhc3luYyBkYXRhIHJlcXVpcmVkIGJ1aWxkIGh0bWwgb24gc2VydmVyLiBcbiAgICAgKi9cbiAgICBsZXQgaW5pdGlhbFNlcnZlckRhdGEgPSBudWxsXG4gICAgbGV0IHsgc3RhdGljQ29udGV4dCB9ID0gcGFzc2VkUHJvcHNcbiAgICBpZiAoc3RhdGljQ29udGV4dCAmJiBzdGF0aWNDb250ZXh0LmRhdGEpIHtcbiAgICAgICAgaW5pdGlhbFNlcnZlckRhdGEgPSBzdGF0aWNDb250ZXh0LmRhdGFcbiAgICB9XG5cbiAgICBsZXQgRE9DVE9SUyA9IHN0YXRlLkRPQ1RPUl9QUk9GSUxFU1xuICAgIGxldCB7IHJhdGVkX2FwcG9pbm1lbnRzLCBwcm9maWxlcywgc2VsZWN0ZWRQcm9maWxlLCBwcmltYXJ5TW9iaWxlLCBhcHBfZG93bmxvYWRfbGlzdCwgZGV2aWNlX2luZm8sIGlwZF9jaGF0IH0gPSBzdGF0ZS5VU0VSXG5cbiAgICBjb25zdCB7XG4gICAgICAgIHNlbGVjdGVkQ3JpdGVyaWFzLFxuICAgICAgICBzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICBmZXRjaE5ld1Jlc3VsdHMsXG4gICAgICAgIGNvbW1vblByb2NlZHVyZXJzLFxuICAgICAgICBmaWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXNcbiAgICB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX09QRFxuXG4gICAgY29uc3Qge1xuICAgICAgICBzZWxlY3RlZERvY3RvclByb2NlZHVyZSxcbiAgICAgICAgcHJvZmlsZUNvbW1vblByb2NlZHVyZXNcbiAgICB9ID0gc3RhdGUuRE9DVE9SX1NFQVJDSFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgRE9DVE9SUywgaW5pdGlhbFNlcnZlckRhdGEsIHJhdGVkX2FwcG9pbm1lbnRzLCBwcm9maWxlcywgc2VsZWN0ZWRQcm9maWxlLCBzZWxlY3RlZENyaXRlcmlhcywgc2VsZWN0ZWRMb2NhdGlvbiwgZmV0Y2hOZXdSZXN1bHRzLCBjb21tb25Qcm9jZWR1cmVycywgc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmUsIHByb2ZpbGVDb21tb25Qcm9jZWR1cmVzLCBwcmltYXJ5TW9iaWxlLCBmaWx0ZXJDcml0ZXJpYSwgYXBwX2Rvd25sb2FkX2xpc3QsIGRldmljZV9pbmZvLCBpcGRfY2hhdCwgY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXNcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldERvY3RvckJ5VXJsOiAoZG9jdHJfdXJsLCBob3NwaXRhbElkLCBwcm9jZWR1cmVfaWRzLCBjYXRlZ29yeV9pZHMsIGNiKSA9PiBkaXNwYXRjaChnZXREb2N0b3JCeVVybChkb2N0cl91cmwsIGhvc3BpdGFsSWQsIHByb2NlZHVyZV9pZHMsIGNhdGVnb3J5X2lkcywgY2IpKSxcbiAgICAgICAgZ2V0RG9jdG9yQnlJZDogKGRvY3RvcklkLCBob3NwaXRhbElkLCBwcm9jZWR1cmVfaWRzLCBjYXRlZ29yeV9pZHMpID0+IGRpc3BhdGNoKGdldERvY3RvckJ5SWQoZG9jdG9ySWQsIGhvc3BpdGFsSWQsIHByb2NlZHVyZV9pZHMsIGNhdGVnb3J5X2lkcykpLFxuICAgICAgICBzZWxlY3RPcGRUaW1lU0xvdDogKHNsb3QsIHJlc2NoZWR1bGUsIGFwcG9pbnRtZW50SWQpID0+IGRpc3BhdGNoKHNlbGVjdE9wZFRpbWVTTG90KHNsb3QsIHJlc2NoZWR1bGUsIGFwcG9pbnRtZW50SWQpKSxcbiAgICAgICAgZ2V0UmF0aW5nQ29tcGxpbWVudHM6IChjYWxsYmFjaykgPT4gZGlzcGF0Y2goZ2V0UmF0aW5nQ29tcGxpbWVudHMoY2FsbGJhY2spKSxcbiAgICAgICAgY3JlYXRlQXBwb2ludG1lbnRSYXRpbmc6IChhcHBvaW50bWVudERhdGEsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChjcmVhdGVBcHBvaW50bWVudFJhdGluZyhhcHBvaW50bWVudERhdGEsIGNhbGxiYWNrKSksXG4gICAgICAgIHVwZGF0ZUFwcG9pbnRtZW50UmF0aW5nOiAocmF0aW5nRGF0YSwgY2FsbGJhY2spID0+IGRpc3BhdGNoKHVwZGF0ZUFwcG9pbnRtZW50UmF0aW5nKHJhdGluZ0RhdGEsIGNhbGxiYWNrKSksXG4gICAgICAgIGdldERvY3Rvck51bWJlcjogKGRvY3RvcklkLCBob3NwaXRhbF9pZCwgY2FsbGJhY2spID0+IGRpc3BhdGNoKGdldERvY3Rvck51bWJlcihkb2N0b3JJZCwgaG9zcGl0YWxfaWQsIGNhbGxiYWNrKSksXG4gICAgICAgIGNsb3NlQXBwb2ludG1lbnRSYXRpbmc6IChkb2N0b3JJZCwgY2FsbGJhY2spID0+IGRpc3BhdGNoKGNsb3NlQXBwb2ludG1lbnRSYXRpbmcoZG9jdG9ySWQsIGNhbGxiYWNrKSksXG4gICAgICAgIGNsb3NlQXBwb2ludG1lbnRQb3BVcDogKGlkLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2goY2xvc2VBcHBvaW50bWVudFBvcFVwKGlkLCBjYWxsYmFjaykpLFxuICAgICAgICBnZXRGb290ZXJEYXRhOiAodXJsKSA9PiBkaXNwYXRjaChnZXRGb290ZXJEYXRhKHVybCkpLFxuICAgICAgICBtZXJnZU9QRFN0YXRlOiAoc3RhdGUsIGZldGNoTmV3UmVzdWx0cykgPT4gZGlzcGF0Y2gobWVyZ2VPUERTdGF0ZShzdGF0ZSwgZmV0Y2hOZXdSZXN1bHRzKSksXG4gICAgICAgIHRvZ2dsZVByb2ZpbGVQcm9jZWR1cmVzOiAocHJvY2VkdXJlX3RvX3RvZ2dsZSwgZG9jdG9yX2lkLCBob3NwaXRhbF9pZCkgPT4gZGlzcGF0Y2godG9nZ2xlUHJvZmlsZVByb2NlZHVyZXMocHJvY2VkdXJlX3RvX3RvZ2dsZSwgZG9jdG9yX2lkLCBob3NwaXRhbF9pZCkpLFxuICAgICAgICBzYXZlUHJvZmlsZVByb2NlZHVyZXM6IChkb2N0b3JfaWQsIGNsaW5pY19pZCkgPT4gZGlzcGF0Y2goc2F2ZVByb2ZpbGVQcm9jZWR1cmVzKGRvY3Rvcl9pZCwgY2xpbmljX2lkKSksXG4gICAgICAgIGdldERvY3Rvck5vOiAoZG9jdG9yRGF0YSwgY2IpID0+IGRpc3BhdGNoKGdldERvY3Rvck5vKGRvY3RvckRhdGEsIGNiKSksXG4gICAgICAgIHRvZ2dsZU9QRENyaXRlcmlhOiAodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkKSA9PiBkaXNwYXRjaCh0b2dnbGVPUERDcml0ZXJpYSh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQpKSxcbiAgICAgICAgZ2V0QWxsUmF0aW5nczogKGNvbnRlbnRfdHlwZSwgb2JqZWN0X2lkLCBwYWdlLCBjYikgPT4gZGlzcGF0Y2goZ2V0QWxsUmF0aW5ncyhjb250ZW50X3R5cGUsIG9iamVjdF9pZCwgcGFnZSwgY2IpKSxcbiAgICAgICAgZ2V0RG93bmxvYWRBcHBCYW5uZXJMaXN0OiAoY2IpID0+IGRpc3BhdGNoKGdldERvd25sb2FkQXBwQmFubmVyTGlzdChjYikpLFxuICAgICAgICBpcGRDaGF0VmlldzogKGRhdGEpID0+IGRpc3BhdGNoKGlwZENoYXRWaWV3KGRhdGEpKSxcbiAgICAgICAgY2xlYXJWaXBTZWxlY3RlZFBsYW46KCkgPT5kaXNwYXRjaChjbGVhclZpcFNlbGVjdGVkUGxhbigpKSxcbiAgICAgICAgTm9uSXBkQm9va2luZ0xlYWQ6KGRhdGEsY2IpID0+ZGlzcGF0Y2goTm9uSXBkQm9va2luZ0xlYWQoZGF0YSwgY2IpKSxcbiAgICAgICAgc2F2ZUxlYWRQaG5OdW1iZXI6KG51bWJlcikgPT4gZGlzcGF0Y2goc2F2ZUxlYWRQaG5OdW1iZXIobnVtYmVyKSlcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRG9jdG9yUHJvZmlsZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9