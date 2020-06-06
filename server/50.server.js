exports.ids = [50];
exports.modules = {

/***/ "./dev/js/components/ipd/HospitalAboutUs.js":
/*!**************************************************!*\
  !*** ./dev/js/components/ipd/HospitalAboutUs.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
     value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let doctorData = false;
class HospitalAboutUsView extends _react2.default.Component {
     constructor(props) {
          super(props);
          this.state = {
               readMore: doctorData
          };
     }

     componentDidMount() {
          this.setState({ readMore: true });
          // this.renderAbout(this.props)
     }

     render() {
          let { hospital_data } = this.props;
          let aboutText = '';
          if (hospital_data.new_about && hospital_data.new_about.length > 400) {
               if (this.state.readMore) {
                    aboutText = hospital_data.new_about.slice(0, 400) + "...";
               } else {
                    aboutText = hospital_data.new_about;
               }
          } else {
               aboutText = hospital_data.new_about;
          }

          return _react2.default.createElement(
               'div',
               { className: 'hs-card', style: { paddingBottom: '10px' } },
               _react2.default.createElement(
                    'div',
                    { className: 'card-head' },
                    _react2.default.createElement(
                         'h2',
                         { className: 'dsply-ipd-hdng' },
                         'About ',
                         hospital_data.name
                    )
               ),
               !this.state.readMore ? _react2.default.createElement('div', { className: 'card-body clearfix custom-li-style', style: {}, dangerouslySetInnerHTML: { __html: aboutText } }) : _react2.default.createElement('div', { className: 'card-body clearfix custom-li-style', style: {}, dangerouslySetInnerHTML: { __html: aboutText } }),
               _react2.default.createElement(
                    'a',
                    { className: 'fw-700 text-primary show-less-ipd', style: { cursor: 'pointer' }, onClick: () => {
                              this.setState({ readMore: !this.state.readMore });
                         } },
                    this.state.readMore ? 'Show More' : 'Show Less',
                    _react2.default.createElement(
                         'span',
                         { className: this.state.readMore ? 'show-ipd-more-rotate' : '', style: { fontSize: 11, display: 'inline-block', verticalAlign: 'middle' } },
                         '\u25B2'
                    )
               )
          );
     }
}

exports.default = HospitalAboutUsView;

/***/ }),

/***/ "./dev/js/components/ipd/HospitalInfo.js":
/*!***********************************************!*\
  !*** ./dev/js/components/ipd/HospitalInfo.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _reactImageLightbox = __webpack_require__(/*! react-image-lightbox */ "react-image-lightbox");

var _reactImageLightbox2 = _interopRequireDefault(_reactImageLightbox);

var _RatingStars = __webpack_require__(/*! ../commons/ratingsProfileView/RatingStars */ "./dev/js/components/commons/ratingsProfileView/RatingStars.js");

var _RatingStars2 = _interopRequireDefault(_RatingStars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HospitalInfoView extends _react2.default.Component {

  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    let { hospital_data } = this.props;
    let { photoIndex, isOpen } = this.state;

    let name = '';
    if (hospital_data) {

      if (hospital_data.seo_title) {
        name = hospital_data.seo_title;
      } else if (hospital_data.seo && hospital_data.seo.h1_title) {
        name = hospital_data.seo.h1_title;
      } else {
        name = hospital_data.name_city;
      }
    }
    return _react2.default.createElement(
      'div',
      { className: 'hs-card' },
      hospital_data.images && hospital_data.images.length ? _react2.default.createElement('div', { className: 'banner', style: { backgroundImage: `url(${hospital_data.images[0].original})` } }) : '',
      _react2.default.createElement(
        'div',
        { className: 'hospital-details' },
        hospital_data.logo ? _react2.default.createElement(
          'div',
          { className: 'hosNme' },
          _react2.default.createElement(
            'div',
            { className: `hs-nme hsptName hsptWidget ${this.props.showPopup ? 'popupTopChange' : ''}` },
            _react2.default.createElement('img', { src: hospital_data.logo, alt: name, className: 'img-fluid' })
          )
        ) : '',
        _react2.default.createElement(
          'h1',
          { className: 'section-heading pb-10', style: { paddingTop: 0 } },
          name
        ),
        hospital_data.address ? _react2.default.createElement(
          'div',
          { className: 'opd-timing opd-mapico' },
          _react2.default.createElement(
            'h2',
            null,
            _react2.default.createElement(
              'span',
              { className: 'ipd-adrs-tb' },
              'Address: '
            ),
            hospital_data.address,
            ' '
          ),
          _react2.default.createElement(
            'a',
            { href: `https://www.google.com/maps/search/?api=1&query=${hospital_data.lat},${hospital_data.long}`, style: { float: 'right', cursor: 'pointer' }, target: '_blank' },
            _react2.default.createElement('img', { style: { width: '25px', height: '25px' }, src: "/assets" + '/img/customer-icons/map-icon.png' })
          )
        ) : '',
        _react2.default.createElement(
          'div',
          { className: 'hsptl-info' },
          hospital_data.bed_count ? _react2.default.createElement(
            'div',
            { className: 'hos-certified' },
            _react2.default.createElement('img', { src: "/assets" + "/images/bed.png", alt: '', className: 'img-bed' }),
            `${hospital_data.bed_count} beds`
          ) : '',
          hospital_data.multi_speciality ? _react2.default.createElement(
            'div',
            { className: 'hos-certified' },
            _react2.default.createElement('img', { style: { marginTop: '4px' }, src: "/assets" + "/images/multi-speciality.png", alt: '', className: 'img-splty' }),
            'Multi Speciality'
          ) : ''
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'ul',
          { className: 'hsptl-contact text-left' },
          hospital_data.images && hospital_data.images.length ? _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'div',
              { className: 'hsptl-title hs-tle hsptl-photo' },
              'Gallery'
            ),
            _react2.default.createElement(
              'div',
              { className: 'hsptl-img' },
              hospital_data.images.slice(0, 4).map((image, i) => {
                return _react2.default.createElement(
                  'span',
                  { key: i },
                  _react2.default.createElement(
                    'a',
                    { href: image.original, onClick: e => {
                        e.preventDefault();
                        e.stopPropagation();
                      } },
                    _react2.default.createElement('img', { className: 'bg-img-box img-fluid', alt: `${hospital_data.name}: Photo${i + 1}`, src: image.original, onClick: () => this.setState({ isOpen: true, photoIndex: i }) })
                  )
                );
              }),
              isOpen && _react2.default.createElement(_reactImageLightbox2.default, {
                mainSrc: hospital_data.images[photoIndex].original,
                nextSrc: hospital_data.images[(photoIndex + 1) % hospital_data.images.length].original,
                prevSrc: hospital_data.images[(photoIndex + hospital_data.images.length - 1) % hospital_data.images.length].original,
                onCloseRequest: () => this.setState({ isOpen: false }),
                onMovePrevRequest: () => this.setState({
                  photoIndex: (photoIndex + hospital_data.images.length - 1) % hospital_data.images.length
                }),
                onMoveNextRequest: () => this.setState({
                  photoIndex: (photoIndex + 1) % hospital_data.images.length
                })
              }),
              hospital_data.images.length > 4 ? _react2.default.createElement(
                'span',
                { className: 'btn-more-img', onClick: () => this.setState({ isOpen: true, photoIndex: 4 }) },
                `+${hospital_data.images.length - 4}`,
                _react2.default.createElement('br', null),
                ' more'
              ) : ''
            )
          ) : '',
          hospital_data.opd_timings ? _react2.default.createElement(
            'li',
            { className: 'li-address' },
            _react2.default.createElement(
              'div',
              { className: 'hsptl-title hs-tle' },
              'OPD Timings:'
            ),
            _react2.default.createElement(
              'div',
              { className: 'hsptl-title hsptl-add' },
              hospital_data.opd_timings,
              hospital_data.open_today ? _react2.default.createElement(
                'span',
                { className: 'opd-status' },
                ' Open Today'
              ) : ''
            )
          ) : '',
          hospital_data.contact_number ? _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'div',
              { className: 'hsptl-title hsptl-cntc hs-tle' },
              'Contact:'
            ),
            _react2.default.createElement(
              'div',
              { className: 'hsptl-title hsptl-add' },
              ' ',
              hospital_data.contact_number
            ),
            _react2.default.createElement(
              'div',
              { className: 'hsptl-title' },
              _react2.default.createElement(
                'a',
                { style: { borderRadius: '25px' }, href: `tel:${hospital_data.contact_number}`, className: 'dpp-btn-book d-lg-none d-flex' },
                _react2.default.createElement('img', { src: "/assets" + "/images/call-round.png", alt: '', className: 'img-fluid img-map', style: { width: '20px' }, onClick: () => {
                    let gtmData = {
                      'Category': 'ConsumerApp', 'Action': 'IpdHospitalContactClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-hospital-contact-clicked'
                    };
                    _gtm2.default.sendEvent({ data: gtmData });
                  } })
              )
            )
          ) : ''
        )
      )
    );
  }
}
// import Lightbox from '../../helpers/lightbox';
exports.default = HospitalInfoView;

/***/ }),

/***/ "./dev/js/components/ipd/HospitalLocations.js":
/*!****************************************************!*\
  !*** ./dev/js/components/ipd/HospitalLocations.js ***!
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

class HospitalLocationView extends _react2.default.Component {

  render() {
    let { hospital_data } = this.props;
    return _react2.default.createElement(
      "div",
      { className: "hs-card" },
      _react2.default.createElement(
        "div",
        { className: "card-head" },
        "Hospital in other locations"
      ),
      _react2.default.createElement(
        "div",
        { className: "card-body clearfix" },
        _react2.default.createElement(
          "ul",
          { className: "hs-accordian" },
          hospital_data.other_network_hospitals.map((location, i) => {
            return _react2.default.createElement(
              "li",
              { key: i },
              _react2.default.createElement(
                "div",
                { className: "accordian-head" },
                location.name
              ),
              _react2.default.createElement(
                "p",
                { className: "accordian-dtl" },
                location.address
              )
            );
          })
        )
      )
    );
  }
}

exports.default = HospitalLocationView;

/***/ }),

/***/ "./dev/js/components/ipd/HospitalServices.js":
/*!***************************************************!*\
  !*** ./dev/js/components/ipd/HospitalServices.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HospitalServicesView extends _react2.default.Component {

	render() {
		let { hospital_data } = this.props;
		return _react2.default.createElement(
			"div",
			{ className: "hs-card" },
			_react2.default.createElement(
				"div",
				{ className: "card-head" },
				_react2.default.createElement(
					"h2",
					{ className: "dsply-ipd-hdng" },
					"Facilities in ",
					hospital_data.name
				)
			),
			_react2.default.createElement(
				"div",
				{ className: "card-body clearfix" },
				_react2.default.createElement(
					"ul",
					{ className: "hs-services" },
					hospital_data.services.map((service, i) => {
						return _react2.default.createElement(
							"li",
							{ key: i },
							_react2.default.createElement(
								"h3",
								null,
								_react2.default.createElement("img", { src: service.icon, alt: "" }),
								" ",
								service.name,
								" "
							)
						);
					})
				)
			)
		);
	}
}

exports.default = HospitalServicesView;

/***/ }),

/***/ "./dev/js/components/ipd/HospitalTreatment.js":
/*!****************************************************!*\
  !*** ./dev/js/components/ipd/HospitalTreatment.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HospitalTreatmentView extends _react2.default.Component {

  constructor(props) {
    super(props);
    this.state = {
      treatment: [],
      fromServer: true
    };
  }

  componentDidMount() {
    this.setState({ fromServer: false });
  }

  toggleTreatment(id) {
    let treatment = this.state.treatment;
    let found = false;
    treatment = this.state.treatment.filter(ipd => {
      if (ipd == id) {
        found = true;
        return false;
      }
      return true;
    });

    if (!found) {
      let gtmData = {
        'Category': 'ConsumerApp', 'Action': 'IpdTreatmentCategoryClickedDetailPage', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-treatment-category-clicked-detail-page', 'selectedId': id || ''
      };
      _gtm2.default.sendEvent({ data: gtmData });

      treatment.push(id);
    }
    this.setState({ treatment: treatment });
  }

  goToIpdSearch(ipd, e) {
    e.preventDefault();
    let gtmData = {
      'Category': 'ConsumerApp', 'Action': 'IpdTreatmentSelectedDetailPage', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-treatment-selected-detail-page', 'selectedId': ipd.id || ''
    };
    _gtm2.default.sendEvent({ data: gtmData });

    let selectedCriteria = {};
    selectedCriteria.type = 'ipd';
    selectedCriteria.id = ipd.id;
    selectedCriteria.name = '';
    this.props.toggleIPDCriteria(selectedCriteria, true);
    if (ipd.url) {
      this.props.history.push(`/${ipd.url}?showPopup=true`);
    } else {
      this.props.history.push(`/ipdInfo?ipd_id=${ipd.id}`);
    }
  }

  render() {
    let { hospital_data } = this.props;
    return _react2.default.createElement(
      'div',
      { className: 'hs-card' },
      _react2.default.createElement(
        'div',
        { className: 'card-head' },
        _react2.default.createElement(
          'h2',
          { className: 'dsply-ipd-hdng' },
          'Procedures in ',
          hospital_data.name
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'card-body clearfix' },
        _react2.default.createElement(
          'ul',
          { className: 'hs-accordian' },
          hospital_data.ipd_procedure_categories.map((treatment, i) => {
            return _react2.default.createElement(
              'li',
              { key: i },
              _react2.default.createElement(
                'h3',
                { className: 'accordian-head', onClick: this.toggleTreatment.bind(this, treatment.id) },
                `${treatment.name} (${treatment.ipd_procedures.length})`,
                this.state.treatment.indexOf(treatment.id) > -1 ? _react2.default.createElement('img', { className: '', src: "/assets" + "/images/up-arrow.png" }) : _react2.default.createElement('img', { className: '', src: "/assets" + "/images/down-arrow.png" })
              ),
              this.state.treatment.indexOf(treatment.id) > -1 || this.state.fromServer ? _react2.default.createElement(
                'p',
                { className: 'accordian-dtl' },
                treatment.ipd_procedures.map((ipd, k) => {
                  return _react2.default.createElement(
                    'h4',
                    { key: ipd.id },
                    _react2.default.createElement(
                      'a',
                      { href: ipd.url ? `/${ipd.url}` : `/ipdInfo?ipd_id=${ipd.id}`, onClick: this.goToIpdSearch.bind(this, ipd), className: 'treat-anch' },
                      ipd.name
                    )
                  );
                })
              ) : ''
            );
          })
        )
      )
    );
  }
}

exports.default = HospitalTreatmentView;

/***/ }),

/***/ "./dev/js/components/ipd/IpdHospitalDetailCarousel.js":
/*!************************************************************!*\
  !*** ./dev/js/components/ipd/IpdHospitalDetailCarousel.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class IpdHospitalCarousel extends _react2.default.Component {

    viewMoreHospital() {
        let filterCriteria = {
            distance: [0, 20],
            provider_ids: [],
            network_id: this.props.hospital_data.network_id || ''
        };
        this.props.mergeIpdCriteria({
            filterCriteria: filterCriteria,
            nextFilterCriteria: filterCriteria,
            commonSelectedCriterias: this.props.commonSelectedCriterias,
            nextSelectedCriterias: this.props.commonSelectedCriterias
        });
        this.props.history.push(`/ipd/searchHospitals`);
    }

    navigateTo(data, e) {
        e.preventDefault();
        e.stopPropagation();
        let gtmData = {
            'Category': 'ConsumerApp', 'Action': 'OtherLocationHospitalClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'other-location-hospital-clicked', 'selected': '', 'selectedId': data.id || ''
        };
        _gtm2.default.sendEvent({ data: gtmData });

        let redirectUrl = '';

        if (data.url) {
            redirectUrl = `/${data.url}?showPopup=true`;
        } else {
            redirectUrl = `/ipd/hospital/${data.id}?showPopup=true`;
        }

        this.props.history.push(redirectUrl);
    }

    render() {
        let { hospital_data } = this.props;

        return _react2.default.createElement(
            'div',
            { className: 'ipd-carousel-container' },
            _react2.default.createElement(
                'h3',
                { className: 'othr-cntr' },
                `Other Locations of ${hospital_data.name_city}`,
                _react2.default.createElement(
                    'span',
                    { className: 'cursor-pntr', onClick: this.viewMoreHospital.bind(this) },
                    'View all'
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'ipd-carousel-slider' },
                _react2.default.createElement(
                    'div',
                    { className: 'd-inline-flex' },
                    hospital_data.other_network_hospitals.slice(0, 10).map((hospital, key) => {
                        return _react2.default.createElement(
                            'div',
                            { key: key, className: 'ipd-carousel-card', onClick: this.navigateTo.bind(this, hospital) },
                            _react2.default.createElement(
                                'div',
                                { className: 'ipd-crsl-img-cont' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'ipd-crsl-img' },
                                    _react2.default.createElement('img', { src: hospital.icon || '' })
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    hospital.name
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'ipd-cd-content' },
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    hospital.address
                                )
                            )
                        );
                    })
                )
            )
        );
    }
}

exports.default = IpdHospitalCarousel;

/***/ }),

/***/ "./dev/js/components/ipd/IpdHospitalDetailView.js":
/*!********************************************************!*\
  !*** ./dev/js/components/ipd/IpdHospitalDetailView.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
//import RatingView from './RatingView.js'

// import HospitalGallery from './HospitalGallery.js'


var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _Loader = __webpack_require__(/*! ../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _HospitalInfo = __webpack_require__(/*! ./HospitalInfo.js */ "./dev/js/components/ipd/HospitalInfo.js");

var _HospitalInfo2 = _interopRequireDefault(_HospitalInfo);

var _HospitalServices = __webpack_require__(/*! ./HospitalServices.js */ "./dev/js/components/ipd/HospitalServices.js");

var _HospitalServices2 = _interopRequireDefault(_HospitalServices);

var _HospitalTreatment = __webpack_require__(/*! ./HospitalTreatment.js */ "./dev/js/components/ipd/HospitalTreatment.js");

var _HospitalTreatment2 = _interopRequireDefault(_HospitalTreatment);

var _doctorResultCard = __webpack_require__(/*! ../opd/commons/doctorResultCard */ "./dev/js/components/opd/commons/doctorResultCard/index.js");

var _doctorResultCard2 = _interopRequireDefault(_doctorResultCard);

var _RatingGraph = __webpack_require__(/*! ../commons/ratingsProfileView/RatingGraph.js */ "./dev/js/components/commons/ratingsProfileView/RatingGraph.js");

var _RatingGraph2 = _interopRequireDefault(_RatingGraph);

var _ReviewList = __webpack_require__(/*! ../commons/ratingsProfileView/ReviewList.js */ "./dev/js/components/commons/ratingsProfileView/ReviewList.js");

var _ReviewList2 = _interopRequireDefault(_ReviewList);

var _HospitalLocations = __webpack_require__(/*! ./HospitalLocations.js */ "./dev/js/components/ipd/HospitalLocations.js");

var _HospitalLocations2 = _interopRequireDefault(_HospitalLocations);

var _HospitalAboutUs = __webpack_require__(/*! ./HospitalAboutUs.js */ "./dev/js/components/ipd/HospitalAboutUs.js");

var _HospitalAboutUs2 = _interopRequireDefault(_HospitalAboutUs);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _IpdForm = __webpack_require__(/*! ../../containers/ipd/IpdForm.js */ "./dev/js/containers/ipd/IpdForm.js");

var _IpdForm2 = _interopRequireDefault(_IpdForm);

var _ipdLeadForm = __webpack_require__(/*! ../../containers/ipd/ipdLeadForm.js */ "./dev/js/containers/ipd/ipdLeadForm.js");

var _ipdLeadForm2 = _interopRequireDefault(_ipdLeadForm);

var _ChatIpdPanel = __webpack_require__(/*! ../commons/ChatPanel/ChatIpdPanel.js */ "./dev/js/components/commons/ChatPanel/ChatIpdPanel.js");

var _ChatIpdPanel2 = _interopRequireDefault(_ChatIpdPanel);

var _IpdOffersPage = __webpack_require__(/*! ./IpdOffersPage.js */ "./dev/js/components/ipd/IpdOffersPage.js");

var _IpdOffersPage2 = _interopRequireDefault(_IpdOffersPage);

var _CommonSearch = __webpack_require__(/*! ../../containers/commons/CommonSearch.js */ "./dev/js/containers/commons/CommonSearch.js");

var _CommonSearch2 = _interopRequireDefault(_CommonSearch);

var _IpdHospitalDetailCarousel = __webpack_require__(/*! ./IpdHospitalDetailCarousel.js */ "./dev/js/components/ipd/IpdHospitalDetailCarousel.js");

var _IpdHospitalDetailCarousel2 = _interopRequireDefault(_IpdHospitalDetailCarousel);

var _ipdQuestionAnswer = __webpack_require__(/*! ./ipdQuestionAnswer.js */ "./dev/js/components/ipd/ipdQuestionAnswer.js");

var _ipdQuestionAnswer2 = _interopRequireDefault(_ipdQuestionAnswer);

var _IpdDoctorCityPopup = __webpack_require__(/*! ../../containers/ipd/IpdDoctorCityPopup.js */ "./dev/js/containers/ipd/IpdDoctorCityPopup.js");

var _IpdDoctorCityPopup2 = _interopRequireDefault(_IpdDoctorCityPopup);

var _ArticleCommentBox = __webpack_require__(/*! ../commons/article/ArticleCommentBox.js */ "./dev/js/components/commons/article/ArticleCommentBox.js");

var _ArticleCommentBox2 = _interopRequireDefault(_ArticleCommentBox);

var _Reply = __webpack_require__(/*! ../commons/article/Reply.js */ "./dev/js/components/commons/article/Reply.js");

var _Reply2 = _interopRequireDefault(_Reply);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _nonIpdPopup = __webpack_require__(/*! ../commons/nonIpdPopup.js */ "./dev/js/components/commons/nonIpdPopup.js");

var _nonIpdPopup2 = _interopRequireDefault(_nonIpdPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


//View all rating for hospital ,content_type = 3

class HospitalDetailView extends _react2.default.Component {

	constructor(props) {
		super(props);
		const parsed = queryString.parse(this.props.location.search);
		this.state = {
			seoFriendly: this.props.match.url.includes('-hpp'),
			toggleTabType: 'doctors',
			showLeadForm: true,
			ipdFormParams: {},
			showForcedPopup: false,
			showSecondPopup: false,
			firstLeadId: '',
			replyOpenFor: '',
			comment: '',
			showNonIpdPopup: parsed.show_popup,
			to_be_force: 1,
			is_lead_enabled: true
		};
	}

	componentDidMount() {

		if (window) {
			window.scrollTo(0, 0);
		}

		let hospital_id = this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.id ? this.props.ipd_hospital_detail.id : this.props.match.params.hospitalId || '';
		let gtmData = {
			'Category': 'ConsumerApp', 'Action': 'IpdHospitalDetailPageLanded', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-hospital-detail-page-landed', selectedId: hospital_id
		};
		_gtm2.default.sendEvent({ data: gtmData });

		var section = document.querySelectorAll(".ipd-tb-tabs");
		var sections = {};
		var i = 0;

		let headerHeight = 35;
		if (document.getElementsByClassName('ipd-tabs-container') && document.getElementsByClassName('ipd-tabs-container').length) {
			headerHeight = document.getElementsByClassName('ipd-tabs-container')[0].offsetHeight;
		}
		headerHeight = -headerHeight;
		Object.keys(this.refs).forEach((prp, i) => {

			sections[prp] = this.refs[prp].offsetTop + headerHeight;
		});

		let self = this;
		if (window && document) {
			window.onscroll = function () {
				var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
				for (i in sections) {
					if (self.refs[i]) {

						if (i.includes('view_more')) {
							if (scrollPosition > self.refs['view_more'].offsetTop + headerHeight) {
								self.setState({ toggleTabType: '' });
							}
						} else {

							if (self.refs[i].offsetTop + headerHeight <= scrollPosition) {
								self.setState({ toggleTabType: i });
							}
						}
					}
				}
			};
		}

		const parsed = queryString.parse(this.props.location.search);

		if (parsed.type && this.refs[parsed.type]) {
			this.toggleTabs(parsed.type);
		}

		if (window.location.href.includes('type#')) {
			let type = window.location.href.split('#');
			if (type.length == 2 && this.refs[type[1]]) {
				this.toggleTabs(type[1]);
			}
		}

		setTimeout(() => {
			this.setState({ showForcedPopup: true });
		}, 1000);
	}

	getCostEstimateClicked() {
		const parsed = queryString.parse(this.props.location.search);
		let ipd_id = this.props.commonSelectedCriterias.length ? this.props.commonSelectedCriterias[0].id : null;
		let hospital_id = this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.id ? this.props.ipd_hospital_detail.id : '';
		let gtmData = {
			'Category': 'ConsumerApp', 'Action': 'IpdGetCostEstimateClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-get-cost-estimate-clicked', selectedId: ipd_id || '', hospitalId: hospital_id
		};
		_gtm2.default.sendEvent({ data: gtmData });

		if (parsed.fromProcedure) {} else {
			ipd_id = null;
			let selectedCriteria = [];
			this.props.toggleIPDCriteria(selectedCriteria, true);
		}

		this.props.history.push(`/ipd/${ipd_id ? ipd_id : 'price'}/getPriceEstimate?hospital_id=${hospital_id}`);
	}

	viewDoctorsClicked(specializationId = null, e) {
		/*if(this.props.commonSelectedCriterias && this.props.commonSelectedCriterias.length){
  			let gtmData = {
             'Category': 'ConsumerApp', 'Action': 'IpdViewAllDoctorClicked', 'CustomerID': GTM.getUserId() || '', 'leadid': 0, 'event': 'ipd-view-all-doctor-clicked', selectedId: this.props.commonSelectedCriterias[0].id || ''
         }
         GTM.sendEvent({ data: gtmData })
  		let criteria = {}
  	criteria.id = this.props.commonSelectedCriterias[0].id
  	criteria.name = this.props.commonSelectedCriterias[0].name
  	criteria.type = 'ipd' 
  	this.props.cloneCommonSelectedCriterias(criteria)
  	this.props.history.push(`/opd/searchresults`)	
  }*/
		let self = this;
		let hospital_id = this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.id ? this.props.ipd_hospital_detail.id : '';
		let doctor_name = '';
		let hospital_name = '';
		let state = {};

		if (specializationId) {
			this.props.cloneCommonSelectedCriterias({ id: specializationId, type: 'speciality' });
		}

		state = {
			filterCriteria: _extends({}, self.props.filterCriteria, {
				hospital_id, doctor_name, hospital_name
			}),
			nextFilterCriteria: _extends({}, self.props.filterCriteria, {
				hospital_id, doctor_name, hospital_name
			})
		};

		this.props.mergeOPDState(state);
		this.props.history.push(`/opd/searchresults`);
	}

	toggleTabs(type) {
		if (document.getElementById(type)) {
			let gtmData = {
				'Category': 'ConsumerApp', 'Action': 'HospitalPageIpdTabClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'hospital-page-ipd-tab-clicked', type: type
			};
			_gtm2.default.sendEvent({ data: gtmData });

			let headerHeight = this.refs[type].offsetTop;
			let tabheight = 35;
			if (document.getElementsByClassName('ipd-tabs-container') && document.getElementsByClassName('ipd-tabs-container').length) {
				tabheight = document.getElementsByClassName('ipd-tabs-container')[0].offsetHeight;
			}
			headerHeight = headerHeight - tabheight;
			this.setState({ toggleTabType: type });
			window.scrollTo(0, headerHeight);
		}
	}

	getSpecializationName() {

		if (this.props.ipd_hospital_detail.specialization_doctors && this.props.ipd_hospital_detail.specialization_doctors.specializations && this.props.ipd_hospital_detail.specialization_doctors.specializations.length) {

			let name = this.props.ipd_hospital_detail.specialization_doctors.specializations.map(x => x.name).join(',') || '';
			name = name + ' ';
			return `View all ${this.props.ipd_hospital_detail.specialization_doctors.count} ${name} `;
		}

		return `View all ${this.props.ipd_hospital_detail.specialization_doctors.count} Doctors`;
	}

	submitLeadFormGeneration(ipdFormParams) {
		if (close) {
			let gtmData = {
				'Category': 'ConsumerApp', 'Action': 'IpdHospitalDetailPageFormClosed', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-hospital-detail-page-form-closed'
			};
			_gtm2.default.sendEvent({ data: gtmData });
		}
		/*let ipd_data = {
  	showChat: true,
  	ipdFormParams: ipdFormParams,
  	hospital:this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.id?this.props.ipd_hospital_detail.id:''
  }*/

		this.setState({ showLeadForm: false, ipdFormParams: ipdFormParams }, () => {
			/*this.props.checkIpdChatAgentStatus((response)=> {
   	if(response && response.users && response.users.length) {
   			// this.props.ipdChatView({showIpdChat:true, ipdForm: ipdFormParams, showMinimize: true})
   	}
   })*/
			// this.props.showChatView(ipd_data)	
		});
	}

	applyQuickFilters(category) {
		let gtmData = {
			'Category': 'ConsumerApp', 'Action': 'IpdHospitalSpecializationSearch', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-hospital-specialization-search', 'specializationId': category.id
		};
		_gtm2.default.sendEvent({ data: gtmData });
		let self = this;

		let hospital_id = this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.id ? this.props.ipd_hospital_detail.id : '';
		let doctor_name = '';
		let hospital_name = '';
		let state = {};
		let specialization_category = [{ id: category.id, type: 'group_ids' }];

		this.props.cloneCommonSelectedCriterias(specialization_category);
		state = {
			filterCriteria: _extends({}, self.props.filterCriteria, {
				hospital_id, doctor_name, hospital_name
			}),
			nextFilterCriteria: _extends({}, self.props.filterCriteria, {
				hospital_id, doctor_name, hospital_name
			})
		};

		this.props.mergeOPDState(state);
		this.props.history.push(`/opd/searchresults`);
	}

	getInputFocus() {
		let headerHeight = document.getElementById('common_search') ? document.getElementById('common_search').offsetTop : 0;
		headerHeight = headerHeight - 89;
		window.scrollTo(0, headerHeight);
	}

	saveLeadIdForUpdation(response) {
		if (response.id) {
			this.setState({ firstLeadId: response.id, showSecondPopup: true });
		}
	}

	secondIpdFormSubmitted() {
		this.setState({ showSecondPopup: false });
	}

	postReply(e) {
		e.preventDefault();
		if (!this.state.comment) {
			setTimeout(() => {
				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please write valid comment" });
			}, 500);
			return;
		}
		let postData = {
			type: 'hospital',
			id: this.props.ipd_hospital_detail.id,
			comment: this.state.comment,
			name: Object.values(this.props.profiles).length && this.props.profiles[this.props.defaultProfile] ? this.props.profiles[this.props.defaultProfile].name : '',
			email: Object.values(this.props.profiles).length && this.props.profiles[this.props.defaultProfile] ? this.props.profiles[this.props.defaultProfile].email : '',
			parent: this.state.replyOpenFor
		};
		this.props.postHospitalComments(postData, (error, data) => {
			if (data) {
				this.setState({ comment: '', replyOpenFor: '' });
				this.loadComments();
				setTimeout(() => {
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Comment Posted Sucessfully, Awaiting moderation" });
				}, 500);
			} else {
				setTimeout(() => {
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Could not post your comment, Try again!" });
				}, 500);
			}
		});
		return;
	}

	loadComments() {
		this.props.getHospitalComments(this.props.ipd_hospital_detail.id);
	}

	commentReplyClicked(id) {
		this.setState({ replyOpenFor: id });
	}

	handleInputComment(e) {
		this.setState({ comment: e.target.value });
	}

	nonIpdLeads(phone_number) {
		const parsed = queryString.parse(this.props.location.search);
		let criteriaStr = this.props.ipd_hospital_detail.name;
		let data = { phone_number: phone_number, lead_source: 'docads', source: parsed, lead_type: 'DOCADS', hospital_name: criteriaStr, exitpoint_url: 'http://docprime.com' + this.props.location.pathname, doctor_id: null, hospital_id: null, doctor_name: null };
		if (this.props.common_utm_tags && this.props.common_utm_tags.length) {
			data.utm_tags = this.props.common_utm_tags.filter(x => x.type == "common_xtra_tags")[0].utm_tags;
		}
		let visitor_info = _gtm2.default.getVisitorInfo();
		if (visitor_info && visitor_info.visit_id) {
			data.visit_id = visitor_info.visit_id;
			data.visitor_id = visitor_info.visitor_id;
		}
		let gtm_data = { 'Category': 'ConsumerApp', 'Action': 'DocAdsHppSubmitClick', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'doc-ads-hpp-Submit-click' };
		_gtm2.default.sendEvent({ data: gtm_data });
		if (this.state.is_lead_enabled) {
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
				'Category': 'ConsumerApp', 'Action': 'DocAdsHppCrossClick', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'doc-ads-hpp-cross-click'
			};
			_gtm2.default.sendEvent({ data: data });
			this.setState({ to_be_force: 0 });
		}
	}

	render() {

		const parsed = queryString.parse(this.props.location.search);

		let showPopup = parsed.showPopup && this.state.showLeadForm && typeof window == 'object' && window.ON_LANDING_PAGE && this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.bed_count;

		showPopup = parsed.showPopup && this.state.showLeadForm && !this.props.is_ipd_form_submitted && !this.state.showNonIpdPopup;

		let landing_page = false;
		if (typeof window == 'object' && window.ON_LANDING_PAGE) {
			landing_page = true;
		}

		let showForcedPopup = this.state.showLeadForm && landing_page && this.state.seoFriendly && this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.is_ipd_hospital && this.state.showForcedPopup && !this.state.showNonIpdPopup;

		let isUserLogin = Object.values(this.props.profiles).length || _storage2.default.checkAuth();
		let commentsExists = this.props.hospitalComments && this.props.hospitalComments.length ? this.props.hospitalComments.length : null;

		let specialization_data = [];
		if (this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.specialization_doctors && this.props.ipd_hospital_detail.specialization_doctors.specializations) {

			specialization_data = this.props.ipd_hospital_detail.specialization_doctors.specializations;
		}
		showPopup = false;
		showForcedPopup = false;

		return _react2.default.createElement(
			_react2.default.Fragment,
			null,
			this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.id ? _react2.default.createElement(
				'div',
				{ className: 'ipd-section' },
				showPopup || showForcedPopup ? _react2.default.createElement(_ipdLeadForm2.default, _extends({ submitLeadFormGeneration: this.submitLeadFormGeneration.bind(this) }, this.props, { hospital_name: this.props.ipd_hospital_detail.name ? this.props.ipd_hospital_detail.name : null, hospital_id: this.props.ipd_hospital_detail.id, formSource: 'ipdHospitalPopup', saveLeadIdForUpdation: this.saveLeadIdForUpdation.bind(this), noToastMessage: true, specialization_data: specialization_data })) : '',
				this.state.showSecondPopup && this.state.firstLeadId && parsed.get_feedback && parsed.get_feedback == '1' ? _react2.default.createElement(_IpdDoctorCityPopup2.default, _extends({}, this.props, { firstLeadId: this.state.firstLeadId, all_doctors: this.props.ipd_hospital_detail.all_doctors, all_cities: this.props.ipd_hospital_detail.all_cities, hospitalProfilePage: true, secondIpdFormSubmitted: this.secondIpdFormSubmitted.bind(this), hospital_name: this.props.ipd_hospital_detail.name ? this.props.ipd_hospital_detail.name : null, hospital_id: this.props.ipd_hospital_detail.id })) : '',
				_react2.default.createElement(_HospitalInfo2.default, { hospital_data: this.props.ipd_hospital_detail, showPopup: showPopup, isSeo: this.state.seoFriendly }),
				this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.other_network_hospitals && this.props.ipd_hospital_detail.other_network_hospitals.length ? _react2.default.createElement(_IpdHospitalDetailCarousel2.default, _extends({}, this.props, { hospital_data: this.props.ipd_hospital_detail })) : '',
				_react2.default.createElement(
					'div',
					{ className: 'ipd-tabs-container' },
					_react2.default.createElement(
						'a',
						{ href: `${this.props.location && this.props.location.pathname ? `${this.props.location.pathname}?type#doctors` : ''}`, className: `ipd-tb-tabs ${this.state.toggleTabType == 'doctors' ? ' ipd-tb-active' : ''}`, onClick: e => {
								e.preventDefault();
								this.toggleTabs('doctors');
							} },
						'Doctors'
					),
					this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.bed_count && false ? _react2.default.createElement(
						'a',
						{ href: `${this.props.location && this.props.location.pathname ? `${this.props.location.pathname}?type#bookNow` : ''}`, className: `ipd-tb-tabs ${this.state.toggleTabType == 'bookNow' ? ' ipd-tb-active' : ''}`, onClick: e => {
								e.preventDefault();
								this.toggleTabs('bookNow');
							} },
						'Book Now'
					) : '',
					this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.rating_graph && this.props.ipd_hospital_detail.rating_graph.star_count && this.props.ipd_hospital_detail.display_rating_widget ? _react2.default.createElement(
						'a',
						{ href: `${this.props.location && this.props.location.pathname ? `${this.props.location.pathname}?type#feedback` : ''}`, className: `ipd-tb-tabs ${this.state.toggleTabType == 'feedback' ? ' ipd-tb-active' : ''}`, onClick: e => {
								e.preventDefault();
								this.toggleTabs('feedback');
							} },
						'Feedback'
					) : '',
					this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.offers && this.props.ipd_hospital_detail.offers.length ? _react2.default.createElement(
						'a',
						{ href: `${this.props.location && this.props.location.pathname ? `${this.props.location.pathname}?type#offers` : ''}`, className: `ipd-tb-tabs ${this.state.toggleTabType == 'offers' ? ' ipd-tb-active' : ''}`, onClick: e => {
								e.preventDefault();
								this.toggleTabs('offers');
							} },
						'Offers'
					) : ''
				),
				this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.is_ipd_hospital ? _react2.default.createElement(
					'div',
					{ id: 'common_search', className: 'ipd-sl-srch' },
					_react2.default.createElement(_CommonSearch2.default, _extends({}, this.props, { hospital_id_search: this.props.hospital_id, commonSearch: true, getInputFocus: this.getInputFocus.bind(this), hospital_lat: this.props.ipd_hospital_detail.lat, hospital_long: this.props.ipd_hospital_detail.long, hospital_search_name: this.props.ipd_hospital_detail.name || '' }))
				) : '',
				this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.all_specialization_groups && this.props.ipd_hospital_detail.all_specialization_groups.length ? _react2.default.createElement(
					'div',
					{ className: 'sort-sub-filter-container mb-3' },
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement(
							'span',
							{ className: 'fw-700' },
							'Popular Specializations'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'srt-sb-btn-cont' },
						this.props.ipd_hospital_detail.all_specialization_groups.map((category, j) => {
							return _react2.default.createElement(
								'button',
								{ key: j, className: 'srt-act', id: category.id, onClick: this.applyQuickFilters.bind(this, category) },
								' ',
								category.name
							);
						})
					)
				) : '',
				_react2.default.createElement(
					'div',
					{ id: 'doctors', ref: 'doctors' },
					this.props.ipd_hospital_detail && (this.props.ipd_hospital_detail.doctors && this.props.ipd_hospital_detail.doctors.result.length || this.props.ipd_hospital_detail.specialization_doctors && this.props.ipd_hospital_detail.specialization_doctors.result.length) ? _react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								'div',
								{ className: 'card-head' },
								_react2.default.createElement(
									'h2',
									{ className: 'dsply-ipd-hdng' },
									`${this.props.ipd_hospital_detail.seo_title ? this.props.ipd_hospital_detail.seo_title : this.props.ipd_hospital_detail.name_city ? this.props.ipd_hospital_detail.name_city : ''} Doctors List`
								)
							),
							this.props.ipd_hospital_detail.specialization_doctors && this.props.ipd_hospital_detail.specialization_doctors.result.length ? this.props.ipd_hospital_detail.specialization_doctors.result.map((doctorCard, i) => {
								return _react2.default.createElement(_doctorResultCard2.default, _extends({ details: doctorCard, key: i, rank: i, seoFriendly: this.props.ipd_hospital_detail.specialization_doctors.seo }, this.props, { isHospitalPage: true }));
							}) : this.props.ipd_hospital_detail.doctors.result.map((doctorCard, i) => {
								return _react2.default.createElement(_doctorResultCard2.default, _extends({ details: doctorCard, key: i, rank: i, seoFriendly: this.props.ipd_hospital_detail.doctors.seo }, this.props, { isHospitalPage: true }));
							})
						),
						_react2.default.createElement(
							'div',
							{ className: 'algn-anchr' },
							this.props.ipd_hospital_detail.specialization_doctors && this.props.ipd_hospital_detail.specialization_doctors.result.length ? _react2.default.createElement(
								'a',
								{ href: 'javascript:void(0);', onClick: this.viewDoctorsClicked.bind(this, this.props.specialization_id || '') },
								this.getSpecializationName()
							) : '',
							this.props.ipd_hospital_detail.doctors && this.props.ipd_hospital_detail.doctors.result.length < this.props.ipd_hospital_detail.doctors.count ? _react2.default.createElement(
								'a',
								{ href: 'javascript:void(0);', onClick: this.viewDoctorsClicked.bind(this, false) },
								this.props.ipd_hospital_detail.specialization_doctors && this.props.ipd_hospital_detail.specialization_doctors.result.length ? ' /' : '',
								`View all ${this.props.ipd_hospital_detail.doctors.count} Doctors`
							) : ''
						)
					) : ''
				),
				this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.bed_count && false ? _react2.default.createElement(
					'div',
					{ id: 'bookNow', ref: 'bookNow', className: 'nav_top_bar' },
					_react2.default.createElement(_IpdForm2.default, _extends({}, this.props, { tabView: true, formSource: 'IpdHospitalDetailPage' }))
				) : '',
				_react2.default.createElement(
					'div',
					{ id: 'feedback', ref: 'feedback', className: 'mt-1' },
					this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.rating_graph && this.props.ipd_hospital_detail.rating_graph.star_count && this.props.ipd_hospital_detail.display_rating_widget ? _react2.default.createElement(
						'div',
						{ className: 'hs-card' },
						_react2.default.createElement(
							'div',
							{ className: 'card-head' },
							_react2.default.createElement(
								'h2',
								{ className: 'dsply-ipd-hdng' },
								'Reviews for ',
								this.props.ipd_hospital_detail.name ? this.props.ipd_hospital_detail.name : ''
							)
						),
						_react2.default.createElement(_RatingGraph2.default, { details: this.props.ipd_hospital_detail }),
						this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.rating && this.props.ipd_hospital_detail.rating.length && this.props.ipd_hospital_detail.display_rating_widget ? _react2.default.createElement(_ReviewList2.default, { details: this.props.ipd_hospital_detail }) : ''
					) : ''
				),
				this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.offers && this.props.ipd_hospital_detail.offers.length ? _react2.default.createElement(
					'div',
					{ id: 'offers', ref: 'offers' },
					_react2.default.createElement(_IpdOffersPage2.default, _extends({}, this.props, { offers: this.props.ipd_hospital_detail.offers }))
				) : '',
				_react2.default.createElement('div', { ref: 'view_more' }),
				this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.ipd_procedure_categories && this.props.ipd_hospital_detail.ipd_procedure_categories.length ? _react2.default.createElement(_HospitalTreatment2.default, _extends({ hospital_data: this.props.ipd_hospital_detail }, this.props)) : '',
				this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.services && this.props.ipd_hospital_detail.services.length ? _react2.default.createElement(_HospitalServices2.default, { hospital_data: this.props.ipd_hospital_detail }) : '',
				this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.new_about ? _react2.default.createElement(_HospitalAboutUs2.default, { hospital_data: this.props.ipd_hospital_detail }) : '',
				this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.question_answers && this.props.ipd_hospital_detail.question_answers.length ? _react2.default.createElement(_ipdQuestionAnswer2.default, { hospital_data: this.props.ipd_hospital_detail }) : '',
				_react2.default.createElement(
					'div',
					{ className: 'ipd-wdg-pdng' },
					this.props.hospitalComments && this.props.hospitalComments.length ? _react2.default.createElement(
						'div',
						{ className: '' },
						_react2.default.createElement(
							'h4',
							{ className: 'comments-main-heading' },
							`User Comments (${this.props.hospitalComments.length})`
						),
						this.props.hospitalComments.map((comment, key) => {
							return _react2.default.createElement(_Reply2.default, _extends({ key: comment.id, commentReplyClicked: this.commentReplyClicked.bind(this), isUserLogin: isUserLogin }, this.props, this.state, {
								loadComments: this.loadComments.bind(this), postComment: this.props.postHospitalComments,

								postReply: this.postReply.bind(this), handleInputComment: this.handleInputComment.bind(this), commentData: comment, commentsExists: commentsExists, hospitalPage: true, hospital_id: this.props.ipd_hospital_detail.id,
								notArticle: true }));
						})
					) : '',
					_react2.default.createElement(
						'div',
						{ className: '' },
						_react2.default.createElement(
							'div',
							{ className: 'widget mrb-15 mrng-top-12 p-0' },
							_react2.default.createElement(
								'div',
								{ className: 'widget-content' },
								_react2.default.createElement(_ArticleCommentBox2.default, _extends({}, this.props, this.state, { parentCommentId: this.state.replyOpenFor, hospitalPage: true, parentCommentId: '', hospital_id: this.props.ipd_hospital_detail.id, loadComments: this.loadComments.bind(this), postComment: this.props.postHospitalComments }))
							)
						)
					)
				),
				this.props.ipd_chat || showPopup || this.props.ipd_hospital_detail && !this.props.ipd_hospital_detail.is_ipd_hospital ? '' : parsed.fromProcedure ? _react2.default.createElement(
					'div',
					{ className: 'btn-search-div btn-apply-div btn-sbmt' },
					_react2.default.createElement(
						'a',
						{ href: 'javascript:void(0);', onClick: this.getCostEstimateClicked.bind(this), className: 'btn-search' },
						'Get Cost Estimate'
					)
				) : _react2.default.createElement(
					'div',
					{ className: 'btn-search-div btn-apply-div btn-sbmt' },
					_react2.default.createElement(
						'a',
						{ href: 'javascript:void(0);', onClick: this.getCostEstimateClicked.bind(this), className: 'btn-search' },
						'Need Help?'
					)
				)
			) : _react2.default.createElement(_Loader2.default, null)
		);
	}
}

exports.default = HospitalDetailView;

/***/ }),

/***/ "./dev/js/components/ipd/IpdOffersPage.js":
/*!************************************************!*\
  !*** ./dev/js/components/ipd/IpdOffersPage.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class IpdOffers extends _react2.default.Component {

	constructor(props) {
		super(props);
		this.state = {
			showTnc: false
		};
	}

	toggleTnC(id) {

		if (this.state.showTnc && document.getElementById(id)) {
			let height = document.getElementById(id).offsetHeight || 0;
			window.scrollTo(0, height);
		}
		this.setState({ showTnc: !this.state.showTnc });
	}

	render() {

		return _react2.default.createElement(
			"div",
			{ className: "hs-card" },
			_react2.default.createElement(
				"div",
				{ className: "ipd-ofr-cont" },
				_react2.default.createElement(
					"div",
					{ className: "widget-content" },
					_react2.default.createElement(
						"h4",
						{ className: "hs-ofr-heading" },
						_react2.default.createElement("img", { src: "/assets" + '/img/ipd-ofr.svg' }),
						"Offers Available"
					),
					this.props.offers.map((offer, i) => {
						return _react2.default.createElement(
							"div",
							{ className: "ipd-ofr-main", id: `${i}_offer`, key: i },
							_react2.default.createElement(
								"div",
								{ className: "hs-offerCard" },
								_react2.default.createElement(
									"div",
									{ className: "hs-ofr-crdHeading" },
									_react2.default.createElement(
										"div",
										{ className: "hs-ofr-contnn" },
										_react2.default.createElement("img", { src: "/assets" + '/img/ipd-cpn.svg' }),
										_react2.default.createElement(
											"p",
											null,
											offer.hospital ? _react2.default.createElement(
												"span",
												{ className: "offr-grn-cd" },
												offer.hospital
											) : '',
											offer.title
										)
									)
								),
								_react2.default.createElement(
									"div",
									{ className: "hs-ofr-card-content" },
									offer.coupon ? _react2.default.createElement(
										"div",
										{ className: "cpn-rqrd" },
										_react2.default.createElement(
											"p",
											null,
											"User Promo code :  ",
											_react2.default.createElement(
												"span",
												null,
												offer.coupon
											)
										)
									) : '',
									_react2.default.createElement(
										"p",
										null,
										offer.description
									),
									!offer.coupon ? _react2.default.createElement(
										"p",
										{ className: "no-cpn-rqrd" },
										"No Coupon Required"
									) : ''
								),
								offer.show_tnc && this.state.showTnc ? _react2.default.createElement(
									"div",
									{ className: "offer-hide-content" },
									_react2.default.createElement("div", { className: "custom-li-style", dangerouslySetInnerHTML: { __html: offer.tnc } })
								) : '',
								offer.show_tnc ? _react2.default.createElement(
									"div",
									{ className: "hs-offer-footer" },
									_react2.default.createElement(
										"p",
										{ className: "tc_cont" },
										"T&C Apply"
									),
									this.state.showTnc ? _react2.default.createElement(
										"p",
										{ className: "show-hide-offr cursor-pntr", onClick: this.toggleTnC.bind(this, `${i}_offer`) },
										"Hide Details ",
										_react2.default.createElement("img", { className: "offshowIcon ofhideIcon ", style: { width: '7px', marginLeft: '5px' }, src: "/assets" + '/img/right-sc.svg' })
									) : _react2.default.createElement(
										"p",
										{ className: "show-hide-offr cursor-pntr", onClick: this.toggleTnC.bind(this, `${i}_offer`) },
										"Show Details ",
										_react2.default.createElement("img", { className: "", style: { width: '7px', marginLeft: '5px' }, src: "/assets" + '/img/right-sc.svg' })
									)
								) : ''
							)
						);
					})
				)
			)
		);
	}
}

exports.default = IpdOffers;

/***/ }),

/***/ "./dev/js/components/ipd/breadCrumb.js":
/*!*********************************************!*\
  !*** ./dev/js/components/ipd/breadCrumb.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BreadcrumbView extends _react2.default.Component {

    render() {

        return _react2.default.createElement(
            "section",
            null,
            this.props.breadcrumb && this.props.breadcrumb.length ? _react2.default.createElement(
                "section",
                { className: "" },
                _react2.default.createElement(
                    "ul",
                    { className: "mrb-10 breadcrumb-list breadcrumb-list-ul", style: { 'wordBreak': 'breakWord', marginTop: '0px', marginBottom: '10px' } },
                    this.props.breadcrumb.map((data, key) => {
                        return _react2.default.createElement(
                            "li",
                            { className: "breadcrumb-list-item", key: key },
                            key == this.props.breadcrumb.length - 1 ? _react2.default.createElement(
                                "span",
                                null,
                                data.title
                            ) : _react2.default.createElement(
                                "a",
                                { href: data.url, title: data.link_title || data.title, onClick: e => {
                                        e.preventDefault();
                                        this.props.history.push(key == 0 || key == this.props.breadcrumb.length - 1 ? data.url : `/${data.url}`);
                                    } },
                                key == 0 || key == this.props.breadcrumb.length - 1 ? _react2.default.createElement(
                                    "span",
                                    { className: "fw-500 breadcrumb-title breadcrumb-colored-title" },
                                    data.title
                                ) : _react2.default.createElement(
                                    "span",
                                    { className: "fw-500 breadcrumb-title breadcrumb-colored-title d-inline-blck" },
                                    data.title
                                )
                            ),
                            key != this.props.breadcrumb.length - 1 ? _react2.default.createElement(
                                "span",
                                { className: "breadcrumb-arrow" },
                                ">"
                            ) : ''
                        );
                    })
                )
            ) : ''
        );
    }
}

exports.default = BreadcrumbView;

/***/ }),

/***/ "./dev/js/components/ipd/ipdQuestionAnswer.js":
/*!****************************************************!*\
  !*** ./dev/js/components/ipd/ipdQuestionAnswer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class IpdQnA extends _react2.default.Component {

  constructor(props) {
    super(props);
    this.state = {
      treatment: [],
      getAns: true
    };
  }

  componentDidMount() {
    this.setState({ getAns: false });
  }

  toggleTreatment(id) {
    let treatment = this.state.treatment;
    let found = false;
    treatment = this.state.treatment.filter(ipd => {
      if (ipd == id) {
        found = true;
        return false;
      }
      return true;
    });

    if (!found) {
      treatment.push(id);
    }
    this.setState({ treatment: treatment });
  }

  render() {

    let { hospital_data } = this.props;

    return _react2.default.createElement(
      'div',
      { className: 'hs-card' },
      _react2.default.createElement(
        'div',
        { className: 'card-head' },
        _react2.default.createElement(
          'h2',
          { className: 'dsply-ipd-hdng' },
          'Frequently Asked Questions in ',
          hospital_data.name
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'card-body clearfix' },
        _react2.default.createElement(
          'ul',
          { className: 'hs-accordian' },
          hospital_data.question_answers.map((treatment, i) => {
            return _react2.default.createElement(
              'li',
              { key: i },
              _react2.default.createElement(
                'h3',
                { className: 'accordian-head fw-500', onClick: this.toggleTreatment.bind(this, treatment.id) },
                `${treatment.name}`,
                this.state.treatment.indexOf(treatment.id) > -1 ? _react2.default.createElement('img', { className: '', src: "/assets" + "/images/up-arrow.png" }) : _react2.default.createElement('img', { className: '', src: "/assets" + "/images/down-arrow.png" })
              ),
              this.state.treatment.indexOf(treatment.id) > -1 || this.state.getAns ? _react2.default.createElement('p', { className: 'accordian-dtl', style: { textAlign: 'justify', fontSize: '14px' }, dangerouslySetInnerHTML: { __html: treatment.answer } }) : ''
            );
          })
        )
      )
    );
  }
}

exports.default = IpdQnA;

/***/ }),

/***/ "./dev/js/containers/ipd/IpdHospitalDetail.js":
/*!****************************************************!*\
  !*** ./dev/js/containers/ipd/IpdHospitalDetail.js ***!
  \****************************************************/
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

var _IpdHospitalDetailView = __webpack_require__(/*! ../../components/ipd/IpdHospitalDetailView.js */ "./dev/js/components/ipd/IpdHospitalDetailView.js");

var _IpdHospitalDetailView2 = _interopRequireDefault(_IpdHospitalDetailView);

var _Loader = __webpack_require__(/*! ../../components/commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _LeftBar = __webpack_require__(/*! ../../components/commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../components/commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../components/commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _footer = __webpack_require__(/*! ../../components/commons/Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _HelmetTags = __webpack_require__(/*! ../../components/commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _config = __webpack_require__(/*! ../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _breadCrumb = __webpack_require__(/*! ../../components/ipd/breadCrumb.js */ "./dev/js/components/ipd/breadCrumb.js");

var _breadCrumb2 = _interopRequireDefault(_breadCrumb);

var _staticDisclaimer = __webpack_require__(/*! ../../components/commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


class HospitalDetail extends _react2.default.Component {

	constructor(props) {
		super(props);
		let h_id = this.props.match.params.hospitalId || this.get_hospital_id_by_url(this.props.match.url);
		this.state = {
			specialization_id: null,
			hospital_id: h_id,
			is_seo: this.props.match.url.includes('-hpp'),
			showIpdChat: false
		};
	}

	static loadData(store, match, query) {
		let searchUrl = null;
		if (match.url.includes('-hpp')) {
			searchUrl = match.url.toLowerCase();
		}
		return new Promise((resolve, reject) => {
			try {

				return store.dispatch((0, _index.getHospitaDetails)(match.params.hospitalId, null, searchUrl, query.specialization_id || '', resp => {
					if (resp && resp.id) {
						store.dispatch((0, _index.getHospitalComments)(resp.id));
					}
					if (resp && resp.status && resp.status == 301) {
						resolve({ status: 301 });
					} else {
						resolve({});
					}
				}));
			} catch (e) {
				reject();
			}
		});
	}

	get_hospital_id_by_url(url) {
		for (let d_id in this.props.ipd_hospital_detail_info) {
			if (this.props.ipd_hospital_detail_info[d_id].canonical_url && url && url.includes(this.props.ipd_hospital_detail_info[d_id].canonical_url)) {
				return d_id;
			}
		}
		return null;
	}

	componentDidMount() {

		let searchUrl = null;
		if (this.props.match.url.includes('-hpp')) {
			searchUrl = this.props.match.url.toLowerCase();
		}

		const parsed = queryString.parse(this.props.location.search);
		let specialization_id = '';
		if (parsed.specialization_id) {
			specialization_id = parsed.specialization_id;
			this.setState({ specialization_id: parsed.specialization_id });
		}
		let hospitalId = searchUrl ? '' : this.props.match.params.hospitalId;
		//if(!this.state.hospital_id || !this.props.ipd_hospital_detail_info || !this.props.ipd_hospital_detail_info[this.state.hospital_id]) {
		this.props.getHospitaDetails(hospitalId, this.props.selectedLocation, searchUrl, specialization_id, resp => {
			if (resp && resp.status && resp.status == 301) {
				this.props.history.push(`/${resp.url}`);
			} else if (resp && resp.id) {
				this.props.getHospitalComments(resp.id);
				this.setState({ hospital_id: resp.id });
			}
		});
		//}
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.locationFetched != nextProps.locationFetched) {
			let searchUrl = null;
			if (this.props.match.url.includes('-hpp')) {
				searchUrl = this.props.match.url.toLowerCase();
			}

			const parsed = queryString.parse(this.props.location.search);
			let specialization_id = '';
			if (parsed.specialization_id) {
				specialization_id = parsed.specialization_id;
				this.setState({ specialization_id: parsed.specialization_id });
			}

			// if(!this.state.hospital_id || !nextProps.ipd_hospital_detail_info || !nextProps.ipd_hospital_detail_info[this.state.hospital_id]) {

			this.props.getHospitaDetails(this.props.match.params.hospitalId, nextProps.selectedLocation, searchUrl, specialization_id, resp => {
				if (resp && resp.status && resp.status == 301) {
					this.props.history.push(`/${resp.url}`);
				} else if (resp && resp.id) {
					this.props.getHospitalComments(resp.id);
					this.setState({ hospital_id: resp.id });
				}
			});
			//}
		}
	}

	getMetaTagsData(seoData) {
		let title = "Hospital Profile Page";
		let description = "";
		let schema = {};
		if (seoData) {
			title = seoData && seoData.seo && seoData.seo.title ? seoData.seo.title : seoData.name_city ? `${seoData.name_city} | Book Appointment, Check Doctors List, Reviews, Contact Number` : '';
			description = seoData && seoData.seo && seoData.seo.description ? seoData.seo.description : seoData.name_city ? `${seoData.name_city} : Get free booking on first appointment.Check ${seoData.name ? seoData.name : ''} Doctors List, Reviews, Contact Number, Address, Procedures and more.` : '';
		}
		return { title, description, schema };
	}

	showChatView(showIpd = false) {

		this.setState({ showIpdChat: true });
	}

	getSchema(ipd_hospital_detail) {
		let hospital_schema = "";
		let breadcrumb_schema = "";
		let itemList_schema = "";
		if (ipd_hospital_detail && ipd_hospital_detail.seo && ipd_hospital_detail.seo.all_schema) {
			ipd_hospital_detail.seo.all_schema.map(schema => {
				try {
					if (schema['@type'] == "Hospital") {
						hospital_schema = JSON.stringify(schema);
					}
					if (schema['@type'] == "BreadcrumbList") {
						breadcrumb_schema = JSON.stringify(schema);
					}
					if (schema['@type'] == "ItemList") {
						itemList_schema = JSON.stringify(schema);
					}
				} catch (e) {
					if (schema['@type'] == "Hospital") {
						hospital_schema = '';
					}
					if (schema['@type'] == "BreadcrumbList") {
						breadcrumb_schema = '';
					}
					if (schema['@type'] == "ItemList") {
						itemList_schema = '';
					}
				}
			});
		}
		return { hospital_schema, breadcrumb_schema, itemList_schema };
	}

	render() {

		let ipd_hospital_detail = this.state.hospital_id && this.props.ipd_hospital_detail_info && this.props.ipd_hospital_detail_info[this.state.hospital_id] ? this.props.ipd_hospital_detail_info[this.state.hospital_id] : {};

		let { hospital_schema, breadcrumb_schema, itemList_schema } = this.getSchema(ipd_hospital_detail);

		let isSeoValid = true;
		if (_config2.default.SEO_FRIENDLY_HOSPITAL_IDS && this.state.hospital_id && _config2.default.SEO_FRIENDLY_HOSPITAL_IDS.indexOf(parseInt(this.state.hospital_id)) > -1) {
			isSeoValid = false;
		}
		return _react2.default.createElement(
			'div',
			{ className: 'profile-body-wrap' },
			_react2.default.createElement(_DesktopProfileHeader2.default, { showSearch: true, pageType: 'HospitalDetailPage', new_fixed_header: 1 }),
			_react2.default.createElement(_HelmetTags2.default, { tagsData: {
					canonicalUrl: `${_config2.default.API_BASE_URL}${this.props.match.url}`,
					title: this.getMetaTagsData(ipd_hospital_detail ? ipd_hospital_detail : null).title,
					description: this.getMetaTagsData(ipd_hospital_detail ? ipd_hospital_detail : null).description
				}, noIndex: !this.state.is_seo || !isSeoValid }),
			hospital_schema ? _react2.default.createElement('script', { type: 'application/ld+json', dangerouslySetInnerHTML: {
					__html: hospital_schema
				} }) : "",
			breadcrumb_schema ? _react2.default.createElement('script', { type: 'application/ld+json', dangerouslySetInnerHTML: {
					__html: breadcrumb_schema
				} }) : "",
			itemList_schema ? _react2.default.createElement('script', { type: 'application/ld+json', dangerouslySetInnerHTML: {
					__html: itemList_schema
				} }) : "",
			_react2.default.createElement(
				'section',
				{ className: 'container parent-section book-appointment-section breadcrumb-mrgn  hospital-view-section' },
				ipd_hospital_detail && ipd_hospital_detail.breadcrumb && _react2.default.createElement(_breadCrumb2.default, _extends({ breadcrumb: ipd_hospital_detail.breadcrumb }, this.props)),
				_react2.default.createElement(
					'div',
					{ className: 'row main-row parent-section-row' },
					_react2.default.createElement(_LeftBar2.default, null),
					_react2.default.createElement(
						'div',
						{ className: 'col-12 col-md-7 col-lg-7 center-column' },
						ipd_hospital_detail && ipd_hospital_detail.id ? _react2.default.createElement(_IpdHospitalDetailView2.default, _extends({}, this.props, this.state, { ipd_hospital_detail: ipd_hospital_detail, showChatView: this.showChatView.bind(this) })) : _react2.default.createElement(_Loader2.default, null)
					),
					_react2.default.createElement(_RightBar2.default, { extraClass: ' chat-float-btn-2', showHalfScreenChat:  false ? undefined : false, showDesktopIpd: true, ipdFormParams: this.state.showIpdChat ? true : false, msgTemplate: 'gold_general_template' })
				)
			),
			_react2.default.createElement(_staticDisclaimer2.default, null)
		);
	}
}

HospitalDetail.contextTypes = {
	router: () => null
};
const mapStateToProps = state => {

	const {
		ipd_chat,
		is_ipd_form_submitted,
		profiles,
		defaultProfile
	} = state.USER;

	const {
		selectedLocation,
		locationType,
		filterCriteria
	} = state.SEARCH_CRITERIA_OPD;

	const {
		ipd_hospital_detail_info,
		HOSPITAL_DETAIL_LOADED,
		commonSelectedCriterias,
		locationFetched,
		selectedCriterias,
		hospitalComments
	} = state.SEARCH_CRITERIA_IPD;

	return {
		selectedLocation,
		locationType,
		ipd_hospital_detail_info,
		HOSPITAL_DETAIL_LOADED,
		commonSelectedCriterias,
		locationFetched,
		selectedCriterias,
		filterCriteria,
		ipd_chat,
		is_ipd_form_submitted,
		hospitalComments,
		profiles,
		defaultProfile
	};
};

const mapDisptachToProps = dispatch => {

	return {
		getHospitaDetails: (hospitalId, selectedLocation, searchByUrl, specialization_id, cb) => dispatch((0, _index.getHospitaDetails)(hospitalId, selectedLocation, searchByUrl, specialization_id, cb)),
		saveProfileProcedures: (doctor_id, clinic_id, procedure_ids, forceAdd) => dispatch((0, _index.saveProfileProcedures)(doctor_id, clinic_id, procedure_ids, forceAdd)),
		selectOpdTimeSLot: (slot, reschedule, appointmentId) => dispatch((0, _index.selectOpdTimeSLot)(slot, reschedule, appointmentId)),
		cloneCommonSelectedCriterias: selectedCriterias => dispatch((0, _index.cloneCommonSelectedCriterias)(selectedCriterias)),
		toggleIPDCriteria: (criteria, forceAdd) => dispatch((0, _index.toggleIPDCriteria)(criteria, forceAdd)),
		mergeOPDState: state => dispatch((0, _index.mergeOPDState)(state)),
		ipdChatView: data => dispatch((0, _index.ipdChatView)(data)),
		checkIpdChatAgentStatus: cb => dispatch((0, _index.checkIpdChatAgentStatus)(cb)),
		getHospitalComments: hospitalId => dispatch((0, _index.getHospitalComments)(hospitalId)),
		postHospitalComments: (postData, cb) => dispatch((0, _index.postHospitalComments)(postData, cb)),
		mergeIpdCriteria: filterCriteria => dispatch((0, _index.mergeIpdCriteria)(filterCriteria)),
		clearVipSelectedPlan: () => dispatch((0, _index.clearVipSelectedPlan)()),
		NonIpdBookingLead: (data, cb) => dispatch((0, _index.NonIpdBookingLead)(data, cb))
	};
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDisptachToProps)(HospitalDetail);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pcGQvSG9zcGl0YWxBYm91dFVzLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2lwZC9Ib3NwaXRhbEluZm8uanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvaXBkL0hvc3BpdGFsTG9jYXRpb25zLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2lwZC9Ib3NwaXRhbFNlcnZpY2VzLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2lwZC9Ib3NwaXRhbFRyZWF0bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pcGQvSXBkSG9zcGl0YWxEZXRhaWxDYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pcGQvSXBkSG9zcGl0YWxEZXRhaWxWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2lwZC9JcGRPZmZlcnNQYWdlLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2lwZC9icmVhZENydW1iLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2lwZC9pcGRRdWVzdGlvbkFuc3dlci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9pcGQvSXBkSG9zcGl0YWxEZXRhaWwuanMiXSwibmFtZXMiOlsiZG9jdG9yRGF0YSIsIkhvc3BpdGFsQWJvdXRVc1ZpZXciLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInJlYWRNb3JlIiwiY29tcG9uZW50RGlkTW91bnQiLCJzZXRTdGF0ZSIsInJlbmRlciIsImhvc3BpdGFsX2RhdGEiLCJhYm91dFRleHQiLCJuZXdfYWJvdXQiLCJsZW5ndGgiLCJzbGljZSIsInBhZGRpbmdCb3R0b20iLCJuYW1lIiwiX19odG1sIiwiY3Vyc29yIiwiZm9udFNpemUiLCJkaXNwbGF5IiwidmVydGljYWxBbGlnbiIsIkhvc3BpdGFsSW5mb1ZpZXciLCJwaG90b0luZGV4IiwiaXNPcGVuIiwic2VvX3RpdGxlIiwic2VvIiwiaDFfdGl0bGUiLCJuYW1lX2NpdHkiLCJpbWFnZXMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJvcmlnaW5hbCIsImxvZ28iLCJzaG93UG9wdXAiLCJwYWRkaW5nVG9wIiwiYWRkcmVzcyIsImxhdCIsImxvbmciLCJmbG9hdCIsIndpZHRoIiwiaGVpZ2h0IiwiQVNTRVRTX0JBU0VfVVJMIiwiYmVkX2NvdW50IiwibXVsdGlfc3BlY2lhbGl0eSIsIm1hcmdpblRvcCIsIm1hcCIsImltYWdlIiwiaSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm9wZF90aW1pbmdzIiwib3Blbl90b2RheSIsImNvbnRhY3RfbnVtYmVyIiwiYm9yZGVyUmFkaXVzIiwiZ3RtRGF0YSIsIkdUTSIsImdldFVzZXJJZCIsInNlbmRFdmVudCIsImRhdGEiLCJIb3NwaXRhbExvY2F0aW9uVmlldyIsIm90aGVyX25ldHdvcmtfaG9zcGl0YWxzIiwibG9jYXRpb24iLCJIb3NwaXRhbFNlcnZpY2VzVmlldyIsInNlcnZpY2VzIiwic2VydmljZSIsImljb24iLCJIb3NwaXRhbFRyZWF0bWVudFZpZXciLCJ0cmVhdG1lbnQiLCJmcm9tU2VydmVyIiwidG9nZ2xlVHJlYXRtZW50IiwiaWQiLCJmb3VuZCIsImZpbHRlciIsImlwZCIsInB1c2giLCJnb1RvSXBkU2VhcmNoIiwic2VsZWN0ZWRDcml0ZXJpYSIsInR5cGUiLCJ0b2dnbGVJUERDcml0ZXJpYSIsInVybCIsImhpc3RvcnkiLCJpcGRfcHJvY2VkdXJlX2NhdGVnb3JpZXMiLCJiaW5kIiwiaXBkX3Byb2NlZHVyZXMiLCJpbmRleE9mIiwiayIsIklwZEhvc3BpdGFsQ2Fyb3VzZWwiLCJ2aWV3TW9yZUhvc3BpdGFsIiwiZmlsdGVyQ3JpdGVyaWEiLCJkaXN0YW5jZSIsInByb3ZpZGVyX2lkcyIsIm5ldHdvcmtfaWQiLCJtZXJnZUlwZENyaXRlcmlhIiwibmV4dEZpbHRlckNyaXRlcmlhIiwiY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMiLCJuZXh0U2VsZWN0ZWRDcml0ZXJpYXMiLCJuYXZpZ2F0ZVRvIiwicmVkaXJlY3RVcmwiLCJob3NwaXRhbCIsImtleSIsInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIkhvc3BpdGFsRGV0YWlsVmlldyIsInBhcnNlZCIsInBhcnNlIiwic2VhcmNoIiwic2VvRnJpZW5kbHkiLCJtYXRjaCIsImluY2x1ZGVzIiwidG9nZ2xlVGFiVHlwZSIsInNob3dMZWFkRm9ybSIsImlwZEZvcm1QYXJhbXMiLCJzaG93Rm9yY2VkUG9wdXAiLCJzaG93U2Vjb25kUG9wdXAiLCJmaXJzdExlYWRJZCIsInJlcGx5T3BlbkZvciIsImNvbW1lbnQiLCJzaG93Tm9uSXBkUG9wdXAiLCJzaG93X3BvcHVwIiwidG9fYmVfZm9yY2UiLCJpc19sZWFkX2VuYWJsZWQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImhvc3BpdGFsX2lkIiwiaXBkX2hvc3BpdGFsX2RldGFpbCIsInBhcmFtcyIsImhvc3BpdGFsSWQiLCJzZWxlY3RlZElkIiwic2VjdGlvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInNlY3Rpb25zIiwiaGVhZGVySGVpZ2h0IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm9mZnNldEhlaWdodCIsIk9iamVjdCIsImtleXMiLCJyZWZzIiwiZm9yRWFjaCIsInBycCIsIm9mZnNldFRvcCIsInNlbGYiLCJvbnNjcm9sbCIsInNjcm9sbFBvc2l0aW9uIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwiYm9keSIsInRvZ2dsZVRhYnMiLCJocmVmIiwic3BsaXQiLCJzZXRUaW1lb3V0IiwiZ2V0Q29zdEVzdGltYXRlQ2xpY2tlZCIsImlwZF9pZCIsImZyb21Qcm9jZWR1cmUiLCJ2aWV3RG9jdG9yc0NsaWNrZWQiLCJzcGVjaWFsaXphdGlvbklkIiwiZG9jdG9yX25hbWUiLCJob3NwaXRhbF9uYW1lIiwiY2xvbmVDb21tb25TZWxlY3RlZENyaXRlcmlhcyIsIm1lcmdlT1BEU3RhdGUiLCJnZXRFbGVtZW50QnlJZCIsInRhYmhlaWdodCIsImdldFNwZWNpYWxpemF0aW9uTmFtZSIsInNwZWNpYWxpemF0aW9uX2RvY3RvcnMiLCJzcGVjaWFsaXphdGlvbnMiLCJ4Iiwiam9pbiIsImNvdW50Iiwic3VibWl0TGVhZEZvcm1HZW5lcmF0aW9uIiwiY2xvc2UiLCJhcHBseVF1aWNrRmlsdGVycyIsImNhdGVnb3J5Iiwic3BlY2lhbGl6YXRpb25fY2F0ZWdvcnkiLCJnZXRJbnB1dEZvY3VzIiwic2F2ZUxlYWRJZEZvclVwZGF0aW9uIiwicmVzcG9uc2UiLCJzZWNvbmRJcGRGb3JtU3VibWl0dGVkIiwicG9zdFJlcGx5IiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwidGV4dCIsInBvc3REYXRhIiwidmFsdWVzIiwicHJvZmlsZXMiLCJkZWZhdWx0UHJvZmlsZSIsImVtYWlsIiwicGFyZW50IiwicG9zdEhvc3BpdGFsQ29tbWVudHMiLCJlcnJvciIsImxvYWRDb21tZW50cyIsImdldEhvc3BpdGFsQ29tbWVudHMiLCJjb21tZW50UmVwbHlDbGlja2VkIiwiaGFuZGxlSW5wdXRDb21tZW50IiwidGFyZ2V0IiwidmFsdWUiLCJub25JcGRMZWFkcyIsInBob25lX251bWJlciIsImNyaXRlcmlhU3RyIiwibGVhZF9zb3VyY2UiLCJzb3VyY2UiLCJsZWFkX3R5cGUiLCJleGl0cG9pbnRfdXJsIiwicGF0aG5hbWUiLCJkb2N0b3JfaWQiLCJjb21tb25fdXRtX3RhZ3MiLCJ1dG1fdGFncyIsInZpc2l0b3JfaW5mbyIsImdldFZpc2l0b3JJbmZvIiwidmlzaXRfaWQiLCJ2aXNpdG9yX2lkIiwiZ3RtX2RhdGEiLCJOb25JcGRCb29raW5nTGVhZCIsImNsb3NlSXBkTGVhZFBvcHVwIiwiZnJvbSIsIk9OX0xBTkRJTkdfUEFHRSIsImlzX2lwZF9mb3JtX3N1Ym1pdHRlZCIsImxhbmRpbmdfcGFnZSIsImlzX2lwZF9ob3NwaXRhbCIsImlzVXNlckxvZ2luIiwiU1RPUkFHRSIsImNoZWNrQXV0aCIsImNvbW1lbnRzRXhpc3RzIiwiaG9zcGl0YWxDb21tZW50cyIsInNwZWNpYWxpemF0aW9uX2RhdGEiLCJnZXRfZmVlZGJhY2siLCJhbGxfZG9jdG9ycyIsImFsbF9jaXRpZXMiLCJyYXRpbmdfZ3JhcGgiLCJzdGFyX2NvdW50IiwiZGlzcGxheV9yYXRpbmdfd2lkZ2V0Iiwib2ZmZXJzIiwiYWxsX3NwZWNpYWxpemF0aW9uX2dyb3VwcyIsImoiLCJkb2N0b3JzIiwicmVzdWx0IiwiZG9jdG9yQ2FyZCIsInNwZWNpYWxpemF0aW9uX2lkIiwicmF0aW5nIiwicXVlc3Rpb25fYW5zd2VycyIsImlwZF9jaGF0IiwiSXBkT2ZmZXJzIiwic2hvd1RuYyIsInRvZ2dsZVRuQyIsIm9mZmVyIiwidGl0bGUiLCJjb3Vwb24iLCJkZXNjcmlwdGlvbiIsInNob3dfdG5jIiwidG5jIiwibWFyZ2luTGVmdCIsIkJyZWFkY3J1bWJWaWV3IiwiYnJlYWRjcnVtYiIsIm1hcmdpbkJvdHRvbSIsImxpbmtfdGl0bGUiLCJJcGRRbkEiLCJnZXRBbnMiLCJ0ZXh0QWxpZ24iLCJhbnN3ZXIiLCJIb3NwaXRhbERldGFpbCIsImhfaWQiLCJnZXRfaG9zcGl0YWxfaWRfYnlfdXJsIiwiaXNfc2VvIiwic2hvd0lwZENoYXQiLCJsb2FkRGF0YSIsInN0b3JlIiwicXVlcnkiLCJzZWFyY2hVcmwiLCJ0b0xvd2VyQ2FzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZGlzcGF0Y2giLCJyZXNwIiwic3RhdHVzIiwiZF9pZCIsImlwZF9ob3NwaXRhbF9kZXRhaWxfaW5mbyIsImNhbm9uaWNhbF91cmwiLCJnZXRIb3NwaXRhRGV0YWlscyIsInNlbGVjdGVkTG9jYXRpb24iLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwibG9jYXRpb25GZXRjaGVkIiwiZ2V0TWV0YVRhZ3NEYXRhIiwic2VvRGF0YSIsInNjaGVtYSIsInNob3dDaGF0VmlldyIsInNob3dJcGQiLCJnZXRTY2hlbWEiLCJob3NwaXRhbF9zY2hlbWEiLCJicmVhZGNydW1iX3NjaGVtYSIsIml0ZW1MaXN0X3NjaGVtYSIsImFsbF9zY2hlbWEiLCJKU09OIiwic3RyaW5naWZ5IiwiaXNTZW9WYWxpZCIsIkNPTkZJRyIsIlNFT19GUklFTkRMWV9IT1NQSVRBTF9JRFMiLCJwYXJzZUludCIsImNhbm9uaWNhbFVybCIsIkFQSV9CQVNFX1VSTCIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsIlVTRVIiLCJsb2NhdGlvblR5cGUiLCJTRUFSQ0hfQ1JJVEVSSUFfT1BEIiwiSE9TUElUQUxfREVUQUlMX0xPQURFRCIsInNlbGVjdGVkQ3JpdGVyaWFzIiwiU0VBUkNIX0NSSVRFUklBX0lQRCIsIm1hcERpc3B0YWNoVG9Qcm9wcyIsInNlYXJjaEJ5VXJsIiwiY2IiLCJzYXZlUHJvZmlsZVByb2NlZHVyZXMiLCJjbGluaWNfaWQiLCJwcm9jZWR1cmVfaWRzIiwiZm9yY2VBZGQiLCJzZWxlY3RPcGRUaW1lU0xvdCIsInNsb3QiLCJyZXNjaGVkdWxlIiwiYXBwb2ludG1lbnRJZCIsImNyaXRlcmlhIiwiaXBkQ2hhdFZpZXciLCJjaGVja0lwZENoYXRBZ2VudFN0YXR1cyIsImNsZWFyVmlwU2VsZWN0ZWRQbGFuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFJQSxhQUFhLEtBQWpCO0FBQ0EsTUFBTUMsbUJBQU4sU0FBa0NDLGdCQUFNQyxTQUF4QyxDQUFrRDtBQUM3Q0MsaUJBQVlDLEtBQVosRUFBa0I7QUFDYixnQkFBTUEsS0FBTjtBQUNBLGVBQUtDLEtBQUwsR0FBYTtBQUNSQyx5QkFBVVA7QUFERixXQUFiO0FBR0o7O0FBRURRLHlCQUFvQjtBQUNqQixlQUFLQyxRQUFMLENBQWMsRUFBQ0YsVUFBVSxJQUFYLEVBQWQ7QUFDQTtBQUNIOztBQUVKRyxjQUFRO0FBQ1AsY0FBSSxFQUFFQyxhQUFG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LHFCQUFtQixDQUFDbVAsUUFBRCxFQUFXTCxRQUFYLEtBQXdCNUMsU0FBUyw4QkFBa0JpRCxRQUFsQixFQUE0QkwsUUFBNUIsQ0FBVCxDQUx0QztBQU1MN0osaUJBQWdCM0osS0FBRCxJQUFXNFEsU0FBUywwQkFBYzVRLEtBQWQsQ0FBVCxDQU5yQjtBQU9MOFQsZUFBY3hRLElBQUQsSUFBVXNOLFNBQVMsd0JBQVl0TixJQUFaLENBQVQsQ0FQbEI7QUFRTHlRLDJCQUEwQlgsRUFBRCxJQUFReEMsU0FBUyxvQ0FBd0J3QyxFQUF4QixDQUFULENBUjVCO0FBU0x6SCx1QkFBc0JqRSxVQUFELElBQWdCa0osU0FBUyxnQ0FBb0JsSixVQUFwQixDQUFULENBVGhDO0FBVUw4RCx3QkFBc0IsQ0FBQ04sUUFBRCxFQUFXa0ksRUFBWCxLQUFpQnhDLFNBQVMsaUNBQXFCMUYsUUFBckIsRUFBK0JrSSxFQUEvQixDQUFULENBVmxDO0FBV0w1TixvQkFBbUJKLGNBQUQsSUFBbUJ3TCxTQUFTLDZCQUFpQnhMLGNBQWpCLENBQVQsQ0FYaEM7QUFZTDRPLHdCQUFxQixNQUFNcEQsU0FBUyxrQ0FBVCxDQVp0QjtBQWFMNUQscUJBQWtCLENBQUMxSixJQUFELEVBQU04UCxFQUFOLEtBQVl4QyxTQUFTLDhCQUFrQnROLElBQWxCLEVBQXdCOFAsRUFBeEIsQ0FBVDtBQWJ6QixFQUFOO0FBZUEsQ0FqQkQ7a0JBa0JlLHlCQUFRVCxlQUFSLEVBQXlCTyxrQkFBekIsRUFBNkNuRCxjQUE3QyxDIiwiZmlsZSI6IjUwLnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxubGV0IGRvY3RvckRhdGEgPSBmYWxzZVxuY2xhc3MgSG9zcGl0YWxBYm91dFVzVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgcmVhZE1vcmU6IGRvY3RvckRhdGFcbiAgICAgICAgICB9XG4gICAgIH1cblxuICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVhZE1vcmU6IHRydWV9KVxuICAgICAgICAvLyB0aGlzLnJlbmRlckFib3V0KHRoaXMucHJvcHMpXG4gICAgfVxuXG5cdHJlbmRlcigpe1xuXHRcdGxldCB7IGhvc3BpdGFsX2RhdGEgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgICBsZXQgYWJvdXRUZXh0ID0gJydcbiAgICAgICAgICBpZihob3NwaXRhbF9kYXRhLm5ld19hYm91dCAmJiBob3NwaXRhbF9kYXRhLm5ld19hYm91dC5sZW5ndGg+NDAwKSB7XG4gICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5yZWFkTW9yZSkge1xuICAgICAgICAgICAgICAgICAgICBhYm91dFRleHQgPSBob3NwaXRhbF9kYXRhLm5ld19hYm91dC5zbGljZSgwLCA0MDApICsgXCIuLi5cIlxuICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhYm91dFRleHQgPSBob3NwaXRhbF9kYXRhLm5ld19hYm91dFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgIGFib3V0VGV4dCA9IGhvc3BpdGFsX2RhdGEubmV3X2Fib3V0XG4gICAgICAgICAgfVxuXG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJocy1jYXJkXCIgc3R5bGU9e3twYWRkaW5nQm90dG9tOicxMHB4J319PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRcIj48aDIgY2xhc3NOYW1lPVwiZHNwbHktaXBkLWhkbmdcIj5BYm91dCB7aG9zcGl0YWxfZGF0YS5uYW1lfTwvaDI+PC9kaXY+IFxuXG4gICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLnJlYWRNb3JlP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBjbGVhcmZpeCBjdXN0b20tbGktc3R5bGVcIiBzdHlsZT17e319IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYWJvdXRUZXh0IH19PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgOjxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGNsZWFyZml4IGN1c3RvbS1saS1zdHlsZVwiIHN0eWxlPXt7fX0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBhYm91dFRleHQgfX0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgPGEgIGNsYXNzTmFtZT1cImZ3LTcwMCB0ZXh0LXByaW1hcnkgc2hvdy1sZXNzLWlwZFwiIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWFkTW9yZTogIXRoaXMuc3RhdGUucmVhZE1vcmUgfSlcbiAgICAgICAgICAgICAgICAgICAgfX0+e3RoaXMuc3RhdGUucmVhZE1vcmU/J1Nob3cgTW9yZSc6J1Nob3cgTGVzcyd9PHNwYW4gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnJlYWRNb3JlPydzaG93LWlwZC1tb3JlLXJvdGF0ZSc6Jyd9IHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnIH19PiYjOTY1MDs8L3NwYW4+PC9hPlxuXG4gICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9zcGl0YWxBYm91dFVzVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCBMaWdodGJveCBmcm9tICcuLi8uLi9oZWxwZXJzL2xpZ2h0Ym94JztcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgTGlnaHRib3ggZnJvbSAncmVhY3QtaW1hZ2UtbGlnaHRib3gnO1xuaW1wb3J0IFJhdGluZ1N0YXJzIGZyb20gJy4uL2NvbW1vbnMvcmF0aW5nc1Byb2ZpbGVWaWV3L1JhdGluZ1N0YXJzJztcblxuY2xhc3MgSG9zcGl0YWxJbmZvVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGhvdG9JbmRleDogMCxcbiAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGhvc3BpdGFsX2RhdGEgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgeyBwaG90b0luZGV4LCBpc09wZW4gfSA9IHRoaXMuc3RhdGVcblxuICAgIGxldCBuYW1lID0gJydcbiAgICBpZihob3NwaXRhbF9kYXRhKSB7XG5cbiAgICAgIGlmKGhvc3BpdGFsX2RhdGEuc2VvX3RpdGxlKXtcbiAgICAgICAgbmFtZSA9IGhvc3BpdGFsX2RhdGEuc2VvX3RpdGxlXG4gICAgICB9ZWxzZSBpZihob3NwaXRhbF9kYXRhLnNlbyAmJiBob3NwaXRhbF9kYXRhLnNlby5oMV90aXRsZSkge1xuICAgICAgICBuYW1lID0gaG9zcGl0YWxfZGF0YS5zZW8uaDFfdGl0bGVcbiAgICAgIH1lbHNlIHtcbiAgICAgICAgbmFtZSA9IGhvc3BpdGFsX2RhdGEubmFtZV9jaXR5XG4gICAgICB9XG5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaHMtY2FyZFwiPlxuICAgICAgICB7XG4gICAgICAgICAgaG9zcGl0YWxfZGF0YS5pbWFnZXMgJiYgaG9zcGl0YWxfZGF0YS5pbWFnZXMubGVuZ3RoID9cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aG9zcGl0YWxfZGF0YS5pbWFnZXNbMF0ub3JpZ2luYWx9KWAgfX0+XG4gICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwidG90YWwtaW1nXCI+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMK1wiL2ltYWdlcy9jYW1lcmEucG5nXCJ9IGFsdD1cIlwiIGNsYXNzTmFtZT1cIlwiIC8+IDU0PC9hPjwvZGl2PiovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6ICcnXG4gICAgICAgIH1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvc3BpdGFsLWRldGFpbHNcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBob3NwaXRhbF9kYXRhLmxvZ28gP1xuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvc05tZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaHMtbm1lIGhzcHROYW1lIGhzcHRXaWRnZXQgJHt0aGlzLnByb3BzLnNob3dQb3B1cCA/ICdwb3B1cFRvcENoYW5nZScgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtob3NwaXRhbF9kYXRhLmxvZ299IGFsdD17bmFtZX0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDogJydcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB7LyogSWYgYW55b25lIGlzIHVuLWNvbW1lbnRpbmcgdGhlIGNvZGUgYmVsb3csIHBsZWFzZSBhbHNvIHJlbW92ZSB0aGUgaW5saW5lICdzdHlsZScocGFkZGluZ1RvcDowKSB0YWcgZnJvbSBoMSBwcmVzZW50IGp1c3QgYmVsb3cgdGhlIGNvZGUgKGNsYXNzIG9mIGgxIC0gc2VjdGlvbi1oZWFkaW5nIHBiLTEwKSAqL31cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJpcGQtc3QtcmF0aW5nXCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGhvc3BpdGFsX2RhdGEucmF0aW5nX2dyYXBoICYmIGhvc3BpdGFsX2RhdGEucmF0aW5nX2dyYXBoLmF2Z19yYXRpbmcgP1xuICAgICAgICAgICAgICAgIDxSYXRpbmdTdGFycyBhdmVyYWdlX3JhdGluZz17aG9zcGl0YWxfZGF0YS5yYXRpbmdfZ3JhcGguYXZnX3JhdGluZ30gcmF0aW5nX2NvdW50PXsnJ30gd2lkdGg9XCIxMnB4XCIgaGVpZ2h0PVwiMTJweFwiIC8+IDogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGluZyBwYi0xMFwiIHN0eWxlPXt7IHBhZGRpbmdUb3A6IDAgfX0gPntuYW1lfTwvaDE+XG4gICAgICAgICAge1xuICAgICAgICAgICAgaG9zcGl0YWxfZGF0YS5hZGRyZXNzID9cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGQtdGltaW5nIG9wZC1tYXBpY29cIj5cbiAgICAgICAgICAgICAgICA8aDI+PHNwYW4gY2xhc3NOYW1lPVwiaXBkLWFkcnMtdGJcIj5BZGRyZXNzOiA8L3NwYW4+e2hvc3BpdGFsX2RhdGEuYWRkcmVzc30gPC9oMj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3NlYXJjaC8/YXBpPTEmcXVlcnk9JHtob3NwaXRhbF9kYXRhLmxhdH0sJHtob3NwaXRhbF9kYXRhLmxvbmd9YH0gc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcsIGN1cnNvcjogJ3BvaW50ZXInIH19IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJzI1cHgnLCBoZWlnaHQ6ICcyNXB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL21hcC1pY29uLnBuZyd9IC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhzcHRsLWluZm9cIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaG9zcGl0YWxfZGF0YS5iZWRfY291bnQgP1xuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9zLWNlcnRpZmllZFwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWFnZXMvYmVkLnBuZ1wifSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctYmVkXCIgLz57YCR7aG9zcGl0YWxfZGF0YS5iZWRfY291bnR9IGJlZHNgfTwvZGl2PlxuICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaG9zcGl0YWxfZGF0YS5tdWx0aV9zcGVjaWFsaXR5ID9cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvcy1jZXJ0aWZpZWRcIj48aW1nIHN0eWxlPXt7IG1hcmdpblRvcDogJzRweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWFnZXMvbXVsdGktc3BlY2lhbGl0eS5wbmdcIn0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLXNwbHR5XCIgLz5NdWx0aSBTcGVjaWFsaXR5PC9kaXY+XG4gICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIHtcbiAgICAgICAgICAgIGhvc3BpdGFsX2RhdGEgJiYgaG9zcGl0YWxfZGF0YS5pZD09MzI0MCAmJiB0aGlzLnByb3BzLmlzU2VvP1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWctZmVlLWNvbnRcIj5cbiAgICAgICAgICAgICAgPHA+RG9jcHJpbWUgb2ZmZXIgLSBObyBSZWdpc3RyYXRpb24gRmVlPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6JydcbiAgICAgICAgICB9ICovfVxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJoc3B0bC1jb250YWN0IHRleHQtbGVmdFwiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBob3NwaXRhbF9kYXRhLmltYWdlcyAmJiBob3NwaXRhbF9kYXRhLmltYWdlcy5sZW5ndGggP1xuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaHNwdGwtdGl0bGUgaHMtdGxlIGhzcHRsLXBob3RvXCI+R2FsbGVyeTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoc3B0bC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGhvc3BpdGFsX2RhdGEuaW1hZ2VzLnNsaWNlKDAsIDQpLm1hcCgoaW1hZ2UsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2l9PjxhIGhyZWY9e2ltYWdlLm9yaWdpbmFsfSBvbkNsaWNrPXsoZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO30gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJiZy1pbWctYm94IGltZy1mbHVpZFwiIGFsdD17YCR7aG9zcGl0YWxfZGF0YS5uYW1lfTogUGhvdG8ke2krMX1gfSBzcmM9e2ltYWdlLm9yaWdpbmFsfSAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbjogdHJ1ZSwgcGhvdG9JbmRleDogaSB9KX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge2lzT3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPExpZ2h0Ym94XG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluU3JjPXtob3NwaXRhbF9kYXRhLmltYWdlc1twaG90b0luZGV4XS5vcmlnaW5hbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRTcmM9e2hvc3BpdGFsX2RhdGEuaW1hZ2VzWyhwaG90b0luZGV4ICsgMSkgJSBob3NwaXRhbF9kYXRhLmltYWdlcy5sZW5ndGhdLm9yaWdpbmFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldlNyYz17aG9zcGl0YWxfZGF0YS5pbWFnZXNbKHBob3RvSW5kZXggKyBob3NwaXRhbF9kYXRhLmltYWdlcy5sZW5ndGggLSAxKSAlIGhvc3BpdGFsX2RhdGEuaW1hZ2VzLmxlbmd0aF0ub3JpZ2luYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlUmVxdWVzdD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbjogZmFsc2UgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdmVQcmV2UmVxdWVzdD17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG9JbmRleDogKHBob3RvSW5kZXggKyBob3NwaXRhbF9kYXRhLmltYWdlcy5sZW5ndGggLSAxKSAlIGhvc3BpdGFsX2RhdGEuaW1hZ2VzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW92ZU5leHRSZXF1ZXN0PXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG90b0luZGV4OiAocGhvdG9JbmRleCArIDEpICUgaG9zcGl0YWxfZGF0YS5pbWFnZXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBob3NwaXRhbF9kYXRhLmltYWdlcy5sZW5ndGggPiA0ID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ0bi1tb3JlLWltZ1wiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBpc09wZW46IHRydWUsIHBob3RvSW5kZXg6IDQgfSl9PntgKyR7aG9zcGl0YWxfZGF0YS5pbWFnZXMubGVuZ3RoIC0gNH1gfTxiciAvPiBtb3JlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGhvc3BpdGFsX2RhdGEub3BkX3RpbWluZ3MgP1xuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaS1hZGRyZXNzXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhzcHRsLXRpdGxlIGhzLXRsZVwiPk9QRCBUaW1pbmdzOjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoc3B0bC10aXRsZSBoc3B0bC1hZGRcIj57aG9zcGl0YWxfZGF0YS5vcGRfdGltaW5nc31cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWxfZGF0YS5vcGVuX3RvZGF5ID9cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvcGQtc3RhdHVzXCI+IE9wZW4gVG9kYXk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiaHNwdGwtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvc2VhcmNoLz9hcGk9MSZxdWVyeT0ke2hvc3BpdGFsX2RhdGEubGF0fSwke2hvc3BpdGFsX2RhdGEubG9uZ31gfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltYWdlcy93aGl0ZS1tYXAucG5nXCJ9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWctbWFwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL31cblxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBob3NwaXRhbF9kYXRhLmNvbnRhY3RfbnVtYmVyID9cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhzcHRsLXRpdGxlIGhzcHRsLWNudGMgaHMtdGxlXCI+Q29udGFjdDo8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaHNwdGwtdGl0bGUgaHNwdGwtYWRkXCI+IHtob3NwaXRhbF9kYXRhLmNvbnRhY3RfbnVtYmVyfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoc3B0bC10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyBib3JkZXJSYWRpdXM6ICcyNXB4JyB9fSBocmVmPXtgdGVsOiR7aG9zcGl0YWxfZGF0YS5jb250YWN0X251bWJlcn1gfSBjbGFzc05hbWU9XCJkcHAtYnRuLWJvb2sgZC1sZy1ub25lIGQtZmxleFwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWFnZXMvY2FsbC1yb3VuZC5wbmdcIn0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZy1tYXBcIiBzdHlsZT17eyB3aWR0aDogJzIwcHgnIH19IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSXBkSG9zcGl0YWxDb250YWN0Q2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2lwZC1ob3NwaXRhbC1jb250YWN0LWNsaWNrZWQnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9zcGl0YWxJbmZvVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgSG9zcGl0YWxMb2NhdGlvblZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdHJlbmRlcigpe1xuICAgIGxldCB7IGhvc3BpdGFsX2RhdGEgfSA9IHRoaXMucHJvcHMgXG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJocy1jYXJkXCI+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZFwiPkhvc3BpdGFsIGluIG90aGVyIGxvY2F0aW9uczwvZGl2PiAgIFxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgY2xlYXJmaXhcIj5cbiAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImhzLWFjY29yZGlhblwiPiBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhvc3BpdGFsX2RhdGEub3RoZXJfbmV0d29ya19ob3NwaXRhbHMubWFwKChsb2NhdGlvbiwgaSk9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpYW4taGVhZFwiPntsb2NhdGlvbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8aW1nIGNsYXNzTmFtZT1cImltZy1tYXBcIiBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vY3AvYXNzZXRzL2ltZy9jdXN0b21lci1pY29ucy9tYXAtaWNvbi5wbmdcIiAvPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjY29yZGlhbi1kdGxcIj57bG9jYXRpb24uYWRkcmVzc308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICA8L3VsPlxuey8qICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzTmFtZT1cImJ0bi12aWV3LWhvc3BpdGFsIGJ0bi1tb3JlXCI+KzUgbW9yZTwvYT4qL31cbiAgICAgICAgIDwvZGl2PiAgIFxuICAgICAgPC9kaXY+XG5cdFx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9zcGl0YWxMb2NhdGlvblZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIEhvc3BpdGFsU2VydmljZXNWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50ICB7XG5cblx0cmVuZGVyKCl7XG5cdFx0bGV0IHsgaG9zcGl0YWxfZGF0YSB9ID0gdGhpcy5wcm9wc1xuXHRcdHJldHVybihcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaHMtY2FyZFwiPlxuXHQgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkXCI+PGgyIGNsYXNzTmFtZT1cImRzcGx5LWlwZC1oZG5nXCI+RmFjaWxpdGllcyBpbiB7aG9zcGl0YWxfZGF0YS5uYW1lfTwvaDI+PC9kaXY+ICAgXG5cdCAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgY2xlYXJmaXhcIj5cblx0ICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJocy1zZXJ2aWNlc1wiPlxuXHQgICAgICAgICAgICAgXHR7XG5cdCAgICAgICAgICAgICBcdFx0aG9zcGl0YWxfZGF0YS5zZXJ2aWNlcy5tYXAoKHNlcnZpY2UsIGkpID0+IHtcblx0ICAgICAgICAgICAgIFx0XHRcdHJldHVybiA8bGkga2V5PXtpfT48aDM+PGltZyBzcmM9e3NlcnZpY2UuaWNvbn0gYWx0PVwiXCIgLz4ge3NlcnZpY2UubmFtZX0gPC9oMz48L2xpPiAgXG5cdCAgICAgICAgICAgICAgIFx0XHRcblx0ICAgICAgICAgICAgIFx0XHR9KVxuXHQgICAgICAgICAgICAgXHR9XG5cdCAgICAgICAgICAgICA8L3VsPlxuXHQgICAgICAgICAgICAgey8qPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzc05hbWU9XCJidG4tdmlldy1ob3NwaXRhbCBidG4tbW9yZVwiPisxMiBtb3JlPC9hPiovfVxuXHQgICAgICAgICAgIDwvZGl2PiAgIFxuXHQgICAgICAgICA8L2Rpdj5cblx0XHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb3NwaXRhbFNlcnZpY2VzVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vaGVscGVycy9ndG0uanMnXG5cbmNsYXNzIEhvc3BpdGFsVHJlYXRtZW50VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0cmVhdG1lbnQ6IFtdLFxuICAgICAgZnJvbVNlcnZlcjogdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZnJvbVNlcnZlcjogZmFsc2V9KVxuICB9XG5cbiAgdG9nZ2xlVHJlYXRtZW50KGlkKXtcbiAgICBsZXQgdHJlYXRtZW50ID0gdGhpcy5zdGF0ZS50cmVhdG1lbnRcbiAgICBsZXQgZm91bmQgPSBmYWxzZVxuICAgIHRyZWF0bWVudCA9IHRoaXMuc3RhdGUudHJlYXRtZW50LmZpbHRlcigoaXBkKSA9PiB7XG4gICAgICBpZihpcGQgPT0gaWQpe1xuICAgICAgICBmb3VuZCA9IHRydWVcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0pXG4gICAgXG4gICAgaWYoIWZvdW5kKXtcbiAgICAgIGxldCBndG1EYXRhID0ge1xuICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSXBkVHJlYXRtZW50Q2F0ZWdvcnlDbGlja2VkRGV0YWlsUGFnZScsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2lwZC10cmVhdG1lbnQtY2F0ZWdvcnktY2xpY2tlZC1kZXRhaWwtcGFnZScsICdzZWxlY3RlZElkJzogaWQgfHwgJydcbiAgICAgIH1cbiAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG5cbiAgICAgIHRyZWF0bWVudC5wdXNoKGlkKVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHt0cmVhdG1lbnQ6IHRyZWF0bWVudH0pXG4gIH1cblxuICBnb1RvSXBkU2VhcmNoKGlwZCwgZSl7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGxldCBndG1EYXRhID0ge1xuICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSXBkVHJlYXRtZW50U2VsZWN0ZWREZXRhaWxQYWdlJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaXBkLXRyZWF0bWVudC1zZWxlY3RlZC1kZXRhaWwtcGFnZScsICdzZWxlY3RlZElkJzogaXBkLmlkIHx8ICcnXG4gICAgICB9XG4gICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuXG4gICAgICBsZXQgc2VsZWN0ZWRDcml0ZXJpYSA9IHt9XG4gICAgICBzZWxlY3RlZENyaXRlcmlhLnR5cGUgPSAnaXBkJ1xuICAgICAgc2VsZWN0ZWRDcml0ZXJpYS5pZCA9IGlwZC5pZFxuICAgICAgc2VsZWN0ZWRDcml0ZXJpYS5uYW1lID0gJydcbiAgICAgIHRoaXMucHJvcHMudG9nZ2xlSVBEQ3JpdGVyaWEoc2VsZWN0ZWRDcml0ZXJpYSwgdHJ1ZSlcbiAgICAgIGlmKGlwZC51cmwpe1xuICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHtpcGQudXJsfT9zaG93UG9wdXA9dHJ1ZWApXG4gICAgICB9ZWxzZSB7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvaXBkSW5mbz9pcGRfaWQ9JHtpcGQuaWR9YCkgIFxuICAgICAgfVxuICAgICAgXG4gIH1cblxuXHRyZW5kZXIoKXtcbiAgICBsZXQgeyBob3NwaXRhbF9kYXRhIH0gPSB0aGlzLnByb3BzXG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJocy1jYXJkXCI+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRcIj48aDIgY2xhc3NOYW1lPVwiZHNwbHktaXBkLWhkbmdcIj5Qcm9jZWR1cmVzIGluIHtob3NwaXRhbF9kYXRhLm5hbWV9PC9oMj48L2Rpdj4gICBcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBjbGVhcmZpeFwiPlxuICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImhzLWFjY29yZGlhblwiPiBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaG9zcGl0YWxfZGF0YS5pcGRfcHJvY2VkdXJlX2NhdGVnb3JpZXMubWFwKCh0cmVhdG1lbnQsIGkpPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImFjY29yZGlhbi1oZWFkXCIgb25DbGljaz17dGhpcy50b2dnbGVUcmVhdG1lbnQuYmluZCh0aGlzLCB0cmVhdG1lbnQuaWQpfT57YCR7dHJlYXRtZW50Lm5hbWV9ICgke3RyZWF0bWVudC5pcGRfcHJvY2VkdXJlcy5sZW5ndGh9KWB9XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50cmVhdG1lbnQuaW5kZXhPZih0cmVhdG1lbnQuaWQpPi0xP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCtcIi9pbWFnZXMvdXAtYXJyb3cucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6PGltZyBjbGFzc05hbWU9XCJcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCtcIi9pbWFnZXMvZG93bi1hcnJvdy5wbmdcIn0gLz4gXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudHJlYXRtZW50LmluZGV4T2YodHJlYXRtZW50LmlkKT4tMSB8fCB0aGlzLnN0YXRlLmZyb21TZXJ2ZXI/XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNjb3JkaWFuLWR0bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnQuaXBkX3Byb2NlZHVyZXMubWFwKChpcGQsIGspPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8aDQga2V5PXtpcGQuaWR9PjxhICBocmVmPXtpcGQudXJsP2AvJHtpcGQudXJsfWA6YC9pcGRJbmZvP2lwZF9pZD0ke2lwZC5pZH1gfSBvbkNsaWNrPXt0aGlzLmdvVG9JcGRTZWFyY2guYmluZCh0aGlzLCBpcGQpfSBjbGFzc05hbWU9XCJ0cmVhdC1hbmNoXCI+e2lwZC5uYW1lfTwvYT48L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgOicnICAgXG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgPC91bD5cbiAgICAgICA8L2Rpdj4gICBcbiAgICAgPC9kaXY+XG5cdFx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9zcGl0YWxUcmVhdG1lbnRWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuY2xhc3MgSXBkSG9zcGl0YWxDYXJvdXNlbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICB2aWV3TW9yZUhvc3BpdGFsKCkge1xuICAgICAgICBsZXQgZmlsdGVyQ3JpdGVyaWEgPSB7XG4gICAgICAgICAgICBkaXN0YW5jZTogWzAsIDIwXSxcbiAgICAgICAgICAgIHByb3ZpZGVyX2lkczogW10sXG4gICAgICAgICAgICBuZXR3b3JrX2lkOnRoaXMucHJvcHMuaG9zcGl0YWxfZGF0YS5uZXR3b3JrX2lkIHx8ICcnXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5tZXJnZUlwZENyaXRlcmlhKHtcbiAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhOiBmaWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgICAgIG5leHRGaWx0ZXJDcml0ZXJpYTogZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgICAgICBjb21tb25TZWxlY3RlZENyaXRlcmlhczogdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcyxcbiAgICAgICAgICAgIG5leHRTZWxlY3RlZENyaXRlcmlhczogdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhc1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2lwZC9zZWFyY2hIb3NwaXRhbHNgKVxuICAgIH1cblxuICAgIG5hdmlnYXRlVG8oZGF0YSwgZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBsZXQgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnT3RoZXJMb2NhdGlvbkhvc3BpdGFsQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ290aGVyLWxvY2F0aW9uLWhvc3BpdGFsLWNsaWNrZWQnLCAnc2VsZWN0ZWQnOiAnJywgJ3NlbGVjdGVkSWQnOiBkYXRhLmlkIHx8ICcnXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcblxuICAgICAgICBsZXQgcmVkaXJlY3RVcmwgPSAnJ1xuXG4gICAgICAgIGlmKGRhdGEudXJsKSB7XG4gICAgICAgICAgICByZWRpcmVjdFVybCA9IGAvJHtkYXRhLnVybH0/c2hvd1BvcHVwPXRydWVgXG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHJlZGlyZWN0VXJsID0gYC9pcGQvaG9zcGl0YWwvJHtkYXRhLmlkfT9zaG93UG9wdXA9dHJ1ZWBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHJlZGlyZWN0VXJsKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgaG9zcGl0YWxfZGF0YSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlwZC1jYXJvdXNlbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwib3Roci1jbnRyXCI+e2BPdGhlciBMb2NhdGlvbnMgb2YgJHtob3NwaXRhbF9kYXRhLm5hbWVfY2l0eX1gfVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWUgPVwiY3Vyc29yLXBudHJcIiBvbkNsaWNrPXt0aGlzLnZpZXdNb3JlSG9zcGl0YWwuYmluZCh0aGlzKX0+VmlldyBhbGw8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXBkLWNhcm91c2VsLXNsaWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtaW5saW5lLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3NwaXRhbF9kYXRhLm90aGVyX25ldHdvcmtfaG9zcGl0YWxzLnNsaWNlKDAsMTApLm1hcCgoaG9zcGl0YWwsIGtleSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT1cImlwZC1jYXJvdXNlbC1jYXJkXCIgb25DbGljaz17dGhpcy5uYXZpZ2F0ZVRvLmJpbmQodGhpcywgaG9zcGl0YWwpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpcGQtY3JzbC1pbWctY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpcGQtY3JzbC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aG9zcGl0YWwuaWNvbnx8Jyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntob3NwaXRhbC5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXBkLWNkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntob3NwaXRhbC5hZGRyZXNzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSXBkSG9zcGl0YWxDYXJvdXNlbDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2NvbW1vbnMvTG9hZGVyJ1xuaW1wb3J0IEhvc3BpdGFsSW5mbyBmcm9tICcuL0hvc3BpdGFsSW5mby5qcydcbmltcG9ydCBIb3NwaXRhbFNlcnZpY2VzIGZyb20gJy4vSG9zcGl0YWxTZXJ2aWNlcy5qcydcbmltcG9ydCBIb3NwaXRhbFRyZWF0bWVudCBmcm9tICcuL0hvc3BpdGFsVHJlYXRtZW50LmpzJ1xuaW1wb3J0IERvY3RvclJlc3VsdENhcmQgZnJvbSAnLi4vb3BkL2NvbW1vbnMvZG9jdG9yUmVzdWx0Q2FyZCdcbi8vaW1wb3J0IFJhdGluZ1ZpZXcgZnJvbSAnLi9SYXRpbmdWaWV3LmpzJ1xuaW1wb3J0IFJhdGluZ0dyYXBoIGZyb20gJy4uL2NvbW1vbnMvcmF0aW5nc1Byb2ZpbGVWaWV3L1JhdGluZ0dyYXBoLmpzJ1xuaW1wb3J0IFJldmlld0xpc3QgZnJvbSAnLi4vY29tbW9ucy9yYXRpbmdzUHJvZmlsZVZpZXcvUmV2aWV3TGlzdC5qcydcbmltcG9ydCBIb3NwaXRhbExvY2F0aW9ucyBmcm9tICcuL0hvc3BpdGFsTG9jYXRpb25zLmpzJ1xuLy8gaW1wb3J0IEhvc3BpdGFsR2FsbGVyeSBmcm9tICcuL0hvc3BpdGFsR2FsbGVyeS5qcydcbmltcG9ydCBIb3NwaXRhbEFib3V0VXMgZnJvbSAnLi9Ib3NwaXRhbEFib3V0VXMuanMnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IElwZEZvcm1WaWV3IGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvaXBkL0lwZEZvcm0uanMnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpXG5pbXBvcnQgSXBkTGVhZEZvcm0gZnJvbSAnLi4vLi4vY29udGFpbmVycy9pcGQvaXBkTGVhZEZvcm0uanMnXG5pbXBvcnQgQ2hhdElwZFBhbmVsIGZyb20gJy4uL2NvbW1vbnMvQ2hhdFBhbmVsL0NoYXRJcGRQYW5lbC5qcydcbmltcG9ydCBJcGRPZmZlcnNQYWdlIGZyb20gJy4vSXBkT2ZmZXJzUGFnZS5qcydcbmltcG9ydCBDb21tb25TZWFyY2ggZnJvbSAnLi4vLi4vY29udGFpbmVycy9jb21tb25zL0NvbW1vblNlYXJjaC5qcydcbmltcG9ydCBJcGRDYXJvdXNlbCBmcm9tICcuL0lwZEhvc3BpdGFsRGV0YWlsQ2Fyb3VzZWwuanMnXG5pbXBvcnQgSXBkUXVlc3Rpb25BbnN3ZXIgZnJvbSAnLi9pcGRRdWVzdGlvbkFuc3dlci5qcydcbmltcG9ydCBJcGRTZWNvbmRQb3B1cCBmcm9tICcuLi8uLi9jb250YWluZXJzL2lwZC9JcGREb2N0b3JDaXR5UG9wdXAuanMnXG5pbXBvcnQgQ29tbWVudEJveCBmcm9tICcuLi9jb21tb25zL2FydGljbGUvQXJ0aWNsZUNvbW1lbnRCb3guanMnXG5pbXBvcnQgUmVwbHkgZnJvbSAnLi4vY29tbW9ucy9hcnRpY2xlL1JlcGx5LmpzJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vaGVscGVycy9zdG9yYWdlJztcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuaW1wb3J0IE5vbklwZFBvcHVwVmlldyBmcm9tICcuLi9jb21tb25zL25vbklwZFBvcHVwLmpzJ1xuXG4vL1ZpZXcgYWxsIHJhdGluZyBmb3IgaG9zcGl0YWwgLGNvbnRlbnRfdHlwZSA9IDNcblxuY2xhc3MgSG9zcGl0YWxEZXRhaWxWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzZW9GcmllbmRseTogdGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoJy1ocHAnKSxcblx0XHRcdHRvZ2dsZVRhYlR5cGU6ICdkb2N0b3JzJyxcblx0XHRcdHNob3dMZWFkRm9ybTogdHJ1ZSxcblx0XHRcdGlwZEZvcm1QYXJhbXM6IHt9LFxuXHRcdFx0c2hvd0ZvcmNlZFBvcHVwOiBmYWxzZSxcblx0XHRcdHNob3dTZWNvbmRQb3B1cDogZmFsc2UsXG5cdFx0XHRmaXJzdExlYWRJZDonJyxcblx0XHRcdHJlcGx5T3BlbkZvcjogJycsXG5cdFx0XHRjb21tZW50OicnLFxuXHRcdFx0c2hvd05vbklwZFBvcHVwOiBwYXJzZWQuc2hvd19wb3B1cCxcbiAgICAgICAgICAgIHRvX2JlX2ZvcmNlOjEsXG4gICAgICAgICAgICBpc19sZWFkX2VuYWJsZWQ6dHJ1ZVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXG5cdFx0aWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cbiAgICAgICAgICAgICAgICBcblx0XHRsZXQgaG9zcGl0YWxfaWQgPSB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmlkID8gdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmlkIDogdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaG9zcGl0YWxJZCB8fCAnJ1xuXHRcdGxldCBndG1EYXRhID0ge1xuXHRcdFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdJcGRIb3NwaXRhbERldGFpbFBhZ2VMYW5kZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdpcGQtaG9zcGl0YWwtZGV0YWlsLXBhZ2UtbGFuZGVkJywgc2VsZWN0ZWRJZDogaG9zcGl0YWxfaWRcblx0XHR9XG5cdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcblxuXHRcdHZhciBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pcGQtdGItdGFic1wiKTtcblx0XHR2YXIgc2VjdGlvbnMgPSB7fTtcblx0XHR2YXIgaSA9IDBcblxuXHRcdGxldCBoZWFkZXJIZWlnaHQgPSAzNVxuXHRcdGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lwZC10YWJzLWNvbnRhaW5lcicpICYmIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lwZC10YWJzLWNvbnRhaW5lcicpLmxlbmd0aCkge1xuXHRcdFx0aGVhZGVySGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaXBkLXRhYnMtY29udGFpbmVyJylbMF0ub2Zmc2V0SGVpZ2h0XG5cdFx0fVxuXHRcdGhlYWRlckhlaWdodCA9IC0oaGVhZGVySGVpZ2h0KVxuXHRcdE9iamVjdC5rZXlzKHRoaXMucmVmcykuZm9yRWFjaCgocHJwLCBpKSA9PiB7XG5cblx0XHRcdHNlY3Rpb25zW3BycF0gPSB0aGlzLnJlZnNbcHJwXS5vZmZzZXRUb3AgKyBoZWFkZXJIZWlnaHRcblxuXHRcdH0pXG5cblx0XHRsZXQgc2VsZiA9IHRoaXNcblx0XHRpZiAod2luZG93ICYmIGRvY3VtZW50KSB7XG5cdFx0XHR3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciBzY3JvbGxQb3NpdGlvbiA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3Bcblx0XHRcdFx0Zm9yIChpIGluIHNlY3Rpb25zKSB7XG5cdFx0XHRcdFx0aWYgKHNlbGYucmVmc1tpXSkge1xuXG5cdFx0XHRcdFx0XHRpZiAoaS5pbmNsdWRlcygndmlld19tb3JlJykpIHtcblx0XHRcdFx0XHRcdFx0aWYgKHNjcm9sbFBvc2l0aW9uID4gKHNlbGYucmVmc1sndmlld19tb3JlJ10ub2Zmc2V0VG9wICsgaGVhZGVySGVpZ2h0KSkge1xuXHRcdFx0XHRcdFx0XHRcdHNlbGYuc2V0U3RhdGUoeyB0b2dnbGVUYWJUeXBlOiAnJyB9KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdGlmICgoc2VsZi5yZWZzW2ldLm9mZnNldFRvcCArIGhlYWRlckhlaWdodCkgPD0gc2Nyb2xsUG9zaXRpb24pIHtcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnNldFN0YXRlKHsgdG9nZ2xlVGFiVHlwZTogaSB9KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cblx0XHRpZiAocGFyc2VkLnR5cGUgJiYgdGhpcy5yZWZzW3BhcnNlZC50eXBlXSkge1xuXHRcdFx0dGhpcy50b2dnbGVUYWJzKHBhcnNlZC50eXBlKVxuXHRcdH1cblxuXHRcdGlmKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCd0eXBlIycpKSB7XG5cdFx0XHRsZXQgdHlwZSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylcblx0XHRcdGlmKHR5cGUubGVuZ3RoPT0yICYmIHRoaXMucmVmc1t0eXBlWzFdXSkge1xuXHRcdFx0XHR0aGlzLnRvZ2dsZVRhYnModHlwZVsxXSlcdFx0XG5cdFx0XHR9XG5cdFx0fVxuIFxuXHRcdHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3Nob3dGb3JjZWRQb3B1cDogdHJ1ZSB9KVxuXHRcdH0sMTAwMClcblxuXHR9XG5cblx0Z2V0Q29zdEVzdGltYXRlQ2xpY2tlZCgpIHtcblx0XHRjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblx0XHRsZXQgaXBkX2lkID0gdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcy5sZW5ndGggPyB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzWzBdLmlkIDogbnVsbFxuXHRcdGxldCBob3NwaXRhbF9pZCA9IHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbCAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuaWQgPyB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuaWQgOiAnJ1xuXHRcdGxldCBndG1EYXRhID0ge1xuXHRcdFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdJcGRHZXRDb3N0RXN0aW1hdGVDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaXBkLWdldC1jb3N0LWVzdGltYXRlLWNsaWNrZWQnLCBzZWxlY3RlZElkOiBpcGRfaWQgfHwgJycsIGhvc3BpdGFsSWQ6IGhvc3BpdGFsX2lkXG5cdFx0fVxuXHRcdEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG5cblx0XHRpZihwYXJzZWQuZnJvbVByb2NlZHVyZSl7XG5cblx0XHR9ZWxzZXtcblx0XHRcdGlwZF9pZCA9IG51bGxcblx0XHRcdGxldCBzZWxlY3RlZENyaXRlcmlhID0gW11cblx0XHRcdHRoaXMucHJvcHMudG9nZ2xlSVBEQ3JpdGVyaWEoc2VsZWN0ZWRDcml0ZXJpYSwgdHJ1ZSlcblx0XHR9XG5cblx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2lwZC8ke2lwZF9pZCA/IGlwZF9pZCA6ICdwcmljZSd9L2dldFByaWNlRXN0aW1hdGU/aG9zcGl0YWxfaWQ9JHtob3NwaXRhbF9pZH1gKVxuXG5cdH1cblxuXHR2aWV3RG9jdG9yc0NsaWNrZWQoc3BlY2lhbGl6YXRpb25JZCA9IG51bGwsIGUpIHtcblx0XHQvKmlmKHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMgJiYgdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcy5sZW5ndGgpe1xuXG5cblx0XHRcdGxldCBndG1EYXRhID0ge1xuXHQgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0lwZFZpZXdBbGxEb2N0b3JDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaXBkLXZpZXctYWxsLWRvY3Rvci1jbGlja2VkJywgc2VsZWN0ZWRJZDogdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhc1swXS5pZCB8fCAnJ1xuXHQgICAgICAgIH1cblx0ICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuXG5cdFx0XHRsZXQgY3JpdGVyaWEgPSB7fVxuXHRcdFx0Y3JpdGVyaWEuaWQgPSB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzWzBdLmlkXG5cdFx0XHRjcml0ZXJpYS5uYW1lID0gdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhc1swXS5uYW1lXG5cdFx0XHRjcml0ZXJpYS50eXBlID0gJ2lwZCcgXG5cdFx0XHR0aGlzLnByb3BzLmNsb25lQ29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMoY3JpdGVyaWEpXG5cdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL29wZC9zZWFyY2hyZXN1bHRzYClcdFxuXHRcdH0qL1xuXHRcdGxldCBzZWxmID0gdGhpc1xuXHRcdGxldCBob3NwaXRhbF9pZCA9IHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbCAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuaWQgPyB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuaWQgOiAnJ1xuXHRcdGxldCBkb2N0b3JfbmFtZSA9ICcnXG5cdFx0bGV0IGhvc3BpdGFsX25hbWUgPSAnJ1xuXHRcdGxldCBzdGF0ZSA9IHt9XG5cblx0XHRpZiAoc3BlY2lhbGl6YXRpb25JZCkge1xuXHRcdFx0dGhpcy5wcm9wcy5jbG9uZUNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzKHsgaWQ6IHNwZWNpYWxpemF0aW9uSWQsIHR5cGU6ICdzcGVjaWFsaXR5JyB9KVxuXHRcdH1cblxuXHRcdHN0YXRlID0ge1xuXHRcdFx0ZmlsdGVyQ3JpdGVyaWE6IHtcblx0XHRcdFx0Li4uc2VsZi5wcm9wcy5maWx0ZXJDcml0ZXJpYSxcblx0XHRcdFx0aG9zcGl0YWxfaWQsIGRvY3Rvcl9uYW1lLCBob3NwaXRhbF9uYW1lXG5cdFx0XHR9LFxuXHRcdFx0bmV4dEZpbHRlckNyaXRlcmlhOiB7XG5cdFx0XHRcdC4uLnNlbGYucHJvcHMuZmlsdGVyQ3JpdGVyaWEsXG5cdFx0XHRcdGhvc3BpdGFsX2lkLCBkb2N0b3JfbmFtZSwgaG9zcGl0YWxfbmFtZVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMucHJvcHMubWVyZ2VPUERTdGF0ZShzdGF0ZSlcblx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL29wZC9zZWFyY2hyZXN1bHRzYClcblx0fVxuXG5cblx0dG9nZ2xlVGFicyh0eXBlKSB7XG5cdFx0aWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHR5cGUpKSB7XG5cdFx0XHRsZXQgZ3RtRGF0YSA9IHtcblx0XHRcdFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdIb3NwaXRhbFBhZ2VJcGRUYWJDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaG9zcGl0YWwtcGFnZS1pcGQtdGFiLWNsaWNrZWQnLCB0eXBlOiB0eXBlXG5cdFx0XHR9XG5cdFx0XHRHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuXG5cdFx0XHRsZXQgaGVhZGVySGVpZ2h0ID0gdGhpcy5yZWZzW3R5cGVdLm9mZnNldFRvcFxuXHRcdFx0bGV0IHRhYmhlaWdodCA9IDM1O1xuXHRcdFx0aWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaXBkLXRhYnMtY29udGFpbmVyJykgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaXBkLXRhYnMtY29udGFpbmVyJykubGVuZ3RoKSB7XG5cdFx0XHRcdHRhYmhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lwZC10YWJzLWNvbnRhaW5lcicpWzBdLm9mZnNldEhlaWdodFxuXHRcdFx0fVxuXHRcdFx0aGVhZGVySGVpZ2h0ID0gaGVhZGVySGVpZ2h0IC0gdGFiaGVpZ2h0XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgdG9nZ2xlVGFiVHlwZTogdHlwZSB9KVxuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIGhlYWRlckhlaWdodClcblxuXHRcdH1cblx0fVxuXG5cdGdldFNwZWNpYWxpemF0aW9uTmFtZSgpIHtcblxuXHRcdGlmICh0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuc3BlY2lhbGl6YXRpb25fZG9jdG9ycyAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuc3BlY2lhbGl6YXRpb25fZG9jdG9ycy5zcGVjaWFsaXphdGlvbnMgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLnNwZWNpYWxpemF0aW9uX2RvY3RvcnMuc3BlY2lhbGl6YXRpb25zLmxlbmd0aCkge1xuXG5cdFx0XHRsZXQgbmFtZSA9IHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5zcGVjaWFsaXphdGlvbl9kb2N0b3JzLnNwZWNpYWxpemF0aW9ucy5tYXAoeCA9PiB4Lm5hbWUpLmpvaW4oJywnKSB8fCAnJ1xuXHRcdFx0bmFtZSA9IG5hbWUgKyAnICdcblx0XHRcdHJldHVybiBgVmlldyBhbGwgJHt0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuc3BlY2lhbGl6YXRpb25fZG9jdG9ycy5jb3VudH0gJHtuYW1lfSBgXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGBWaWV3IGFsbCAke3RoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5zcGVjaWFsaXphdGlvbl9kb2N0b3JzLmNvdW50fSBEb2N0b3JzYFxuXHR9XG5cblx0c3VibWl0TGVhZEZvcm1HZW5lcmF0aW9uKGlwZEZvcm1QYXJhbXMpIHtcblx0XHRpZiAoY2xvc2UpIHtcblx0XHRcdGxldCBndG1EYXRhID0ge1xuXHRcdFx0XHQnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0lwZEhvc3BpdGFsRGV0YWlsUGFnZUZvcm1DbG9zZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdpcGQtaG9zcGl0YWwtZGV0YWlsLXBhZ2UtZm9ybS1jbG9zZWQnXG5cdFx0XHR9XG5cdFx0XHRHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuXHRcdH1cblx0XHQvKmxldCBpcGRfZGF0YSA9IHtcblx0XHRcdHNob3dDaGF0OiB0cnVlLFxuXHRcdFx0aXBkRm9ybVBhcmFtczogaXBkRm9ybVBhcmFtcyxcblx0XHRcdGhvc3BpdGFsOnRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbCAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuaWQ/dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmlkOicnXG5cdFx0fSovXG5cblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd0xlYWRGb3JtOiBmYWxzZSwgaXBkRm9ybVBhcmFtczogaXBkRm9ybVBhcmFtcyB9LCAoKSA9PiB7XG5cdFx0XHQvKnRoaXMucHJvcHMuY2hlY2tJcGRDaGF0QWdlbnRTdGF0dXMoKHJlc3BvbnNlKT0+IHtcblx0XHRcdFx0aWYocmVzcG9uc2UgJiYgcmVzcG9uc2UudXNlcnMgJiYgcmVzcG9uc2UudXNlcnMubGVuZ3RoKSB7XG5cblx0XHRcdFx0XHQvLyB0aGlzLnByb3BzLmlwZENoYXRWaWV3KHtzaG93SXBkQ2hhdDp0cnVlLCBpcGRGb3JtOiBpcGRGb3JtUGFyYW1zLCBzaG93TWluaW1pemU6IHRydWV9KVxuXHRcdFx0XHR9XG5cdFx0XHR9KSovXG5cdFx0XHQvLyB0aGlzLnByb3BzLnNob3dDaGF0VmlldyhpcGRfZGF0YSlcdFxuXHRcdH0pXG5cdH1cblxuXHRhcHBseVF1aWNrRmlsdGVycyhjYXRlZ29yeSkge1xuXHRcdGxldCBndG1EYXRhID0ge1xuXHRcdFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdJcGRIb3NwaXRhbFNwZWNpYWxpemF0aW9uU2VhcmNoJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaXBkLWhvc3BpdGFsLXNwZWNpYWxpemF0aW9uLXNlYXJjaCcsICdzcGVjaWFsaXphdGlvbklkJzogY2F0ZWdvcnkuaWRcblx0XHR9XG5cdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcblx0XHRsZXQgc2VsZiA9IHRoaXNcblxuXHRcdGxldCBob3NwaXRhbF9pZCA9IHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbCAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuaWQgPyB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuaWQgOiAnJ1xuXHRcdGxldCBkb2N0b3JfbmFtZSA9ICcnXG5cdFx0bGV0IGhvc3BpdGFsX25hbWUgPSAnJ1xuXHRcdGxldCBzdGF0ZSA9IHt9XG5cdFx0bGV0IHNwZWNpYWxpemF0aW9uX2NhdGVnb3J5ID0gW3tpZDogY2F0ZWdvcnkuaWQsIHR5cGU6J2dyb3VwX2lkcyd9XVxuXHRcdFxuXHRcdHRoaXMucHJvcHMuY2xvbmVDb21tb25TZWxlY3RlZENyaXRlcmlhcyhzcGVjaWFsaXphdGlvbl9jYXRlZ29yeSlcblx0XHRzdGF0ZSA9IHtcblx0XHRcdGZpbHRlckNyaXRlcmlhOiB7XG5cdFx0XHRcdC4uLnNlbGYucHJvcHMuZmlsdGVyQ3JpdGVyaWEsXG5cdFx0XHRcdGhvc3BpdGFsX2lkLCBkb2N0b3JfbmFtZSwgaG9zcGl0YWxfbmFtZVxuXHRcdFx0fSxcblx0XHRcdG5leHRGaWx0ZXJDcml0ZXJpYToge1xuXHRcdFx0XHQuLi5zZWxmLnByb3BzLmZpbHRlckNyaXRlcmlhLFxuXHRcdFx0XHRob3NwaXRhbF9pZCwgZG9jdG9yX25hbWUsIGhvc3BpdGFsX25hbWVcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLnByb3BzLm1lcmdlT1BEU3RhdGUoc3RhdGUpXG5cdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9vcGQvc2VhcmNocmVzdWx0c2ApXG5cdH1cblxuXHRnZXRJbnB1dEZvY3VzKCkge1xuXHRcdGxldCBoZWFkZXJIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbW9uX3NlYXJjaCcpID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1vbl9zZWFyY2gnKS5vZmZzZXRUb3AgOiAwXG5cdFx0aGVhZGVySGVpZ2h0ID0gaGVhZGVySGVpZ2h0IC0gODlcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgaGVhZGVySGVpZ2h0KVxuXHR9XG5cblx0c2F2ZUxlYWRJZEZvclVwZGF0aW9uKHJlc3BvbnNlKSB7XG5cdFx0aWYgKHJlc3BvbnNlLmlkKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgZmlyc3RMZWFkSWQ6IHJlc3BvbnNlLmlkLCBzaG93U2Vjb25kUG9wdXA6IHRydWUgfSlcblx0XHR9XG5cdH1cblxuXHRzZWNvbmRJcGRGb3JtU3VibWl0dGVkKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93U2Vjb25kUG9wdXA6IGZhbHNlIH0pXG5cdH1cblxuXHRwb3N0UmVwbHkoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmNvbW1lbnQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2Ugd3JpdGUgdmFsaWQgY29tbWVudFwiIH0pXG4gICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBsZXQgcG9zdERhdGEgPSB7XG4gICAgICAgIFx0dHlwZTogJ2hvc3BpdGFsJyxcbiAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuaWQsXG4gICAgICAgICAgICBjb21tZW50OiB0aGlzLnN0YXRlLmNvbW1lbnQsXG4gICAgICAgICAgICBuYW1lOiBPYmplY3QudmFsdWVzKHRoaXMucHJvcHMucHJvZmlsZXMpLmxlbmd0aCAmJiB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGVdID8gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXS5uYW1lIDogJycsXG4gICAgICAgICAgICBlbWFpbDogT2JqZWN0LnZhbHVlcyh0aGlzLnByb3BzLnByb2ZpbGVzKS5sZW5ndGggJiYgdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXSA/IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0uZW1haWwgOiAnJyxcbiAgICAgICAgICAgIHBhcmVudDogdGhpcy5zdGF0ZS5yZXBseU9wZW5Gb3JcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLnBvc3RIb3NwaXRhbENvbW1lbnRzKHBvc3REYXRhLCAoZXJyb3IsIGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbW1lbnQ6ICcnLCByZXBseU9wZW5Gb3I6ICcnIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQ29tbWVudHMoKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiQ29tbWVudCBQb3N0ZWQgU3VjZXNzZnVsbHksIEF3YWl0aW5nIG1vZGVyYXRpb25cIiB9KVxuICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJDb3VsZCBub3QgcG9zdCB5b3VyIGNvbW1lbnQsIFRyeSBhZ2FpbiFcIiB9KVxuICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG5cdGxvYWRDb21tZW50cygpe1xuXHRcdHRoaXMucHJvcHMuZ2V0SG9zcGl0YWxDb21tZW50cyh0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuaWQpXG5cdH1cblxuXHRjb21tZW50UmVwbHlDbGlja2VkKGlkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXBseU9wZW5Gb3I6IGlkIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlSW5wdXRDb21tZW50KGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbW1lbnQ6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgfVxuXG4gICAgbm9uSXBkTGVhZHMocGhvbmVfbnVtYmVyKXtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBjcml0ZXJpYVN0ciA9IHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5uYW1lXG4gICAgICAgIGxldCBkYXRhID0oe3Bob25lX251bWJlcjpwaG9uZV9udW1iZXIsbGVhZF9zb3VyY2U6J2RvY2Fkcycsc291cmNlOnBhcnNlZCxsZWFkX3R5cGU6J0RPQ0FEUycsaG9zcGl0YWxfbmFtZTpjcml0ZXJpYVN0cixleGl0cG9pbnRfdXJsOidodHRwOi8vZG9jcHJpbWUuY29tJyArIHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWUsZG9jdG9yX2lkOm51bGwsaG9zcGl0YWxfaWQ6bnVsbCxkb2N0b3JfbmFtZTpudWxsfSlcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MgJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MubGVuZ3RoKXtcbiAgICAgICAgICAgIGRhdGEudXRtX3RhZ3MgPSB0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncy5maWx0ZXIoeD0+eC50eXBlID09IFwiY29tbW9uX3h0cmFfdGFnc1wiKVswXS51dG1fdGFnc1xuICAgICAgICB9XG4gICAgICAgIGxldCB2aXNpdG9yX2luZm8gPSBHVE0uZ2V0VmlzaXRvckluZm8oKVxuICAgICAgICAgICAgaWYodmlzaXRvcl9pbmZvICYmIHZpc2l0b3JfaW5mby52aXNpdF9pZCl7XG4gICAgICAgICAgICAgICAgZGF0YS52aXNpdF9pZCA9IHZpc2l0b3JfaW5mby52aXNpdF9pZFxuICAgICAgICAgICAgICAgIGRhdGEudmlzaXRvcl9pZCA9IHZpc2l0b3JfaW5mby52aXNpdG9yX2lkXG4gICAgICAgICAgICB9XG4gICAgICAgIGxldCBndG1fZGF0YSA9IHsnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0RvY0Fkc0hwcFN1Ym1pdENsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdldmVudCc6ICdkb2MtYWRzLWhwcC1TdWJtaXQtY2xpY2snfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtX2RhdGEgfSlcbiAgICAgICBpZih0aGlzLnN0YXRlLmlzX2xlYWRfZW5hYmxlZCl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc19sZWFkX2VuYWJsZWQ6ZmFsc2V9KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5Ob25JcGRCb29raW5nTGVhZChkYXRhKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNfbGVhZF9lbmFibGVkOnRydWV9KVxuICAgICAgICAgICAgfSwgNTAwMClcbiAgICAgICAgfVxuICAgICAgIHRoaXMuc2V0U3RhdGUoe3RvX2JlX2ZvcmNlOjB9KVxuICAgIH1cblxuICAgIGNsb3NlSXBkTGVhZFBvcHVwKGZyb20pe1xuICAgICAgICBpZihmcm9tKXtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0RvY0Fkc0hwcENyb3NzQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2V2ZW50JzogJ2RvYy1hZHMtaHBwLWNyb3NzLWNsaWNrJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt0b19iZV9mb3JjZTowfSlcbiAgICAgICAgfVxuICAgIH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblxuXHRcdGxldCBzaG93UG9wdXAgPSBwYXJzZWQuc2hvd1BvcHVwICYmIHRoaXMuc3RhdGUuc2hvd0xlYWRGb3JtICYmIHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93Lk9OX0xBTkRJTkdfUEFHRSAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmJlZF9jb3VudFxuXG5cdFx0c2hvd1BvcHVwID0gcGFyc2VkLnNob3dQb3B1cCAmJiB0aGlzLnN0YXRlLnNob3dMZWFkRm9ybSAmJiAhdGhpcy5wcm9wcy5pc19pcGRfZm9ybV9zdWJtaXR0ZWQgJiYgIXRoaXMuc3RhdGUuc2hvd05vbklwZFBvcHVwIFxuXG5cdFx0bGV0IGxhbmRpbmdfcGFnZSA9IGZhbHNlXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93Lk9OX0xBTkRJTkdfUEFHRSkge1xuXHRcdFx0bGFuZGluZ19wYWdlID0gdHJ1ZVxuXHRcdH1cblxuXHRcdGxldCBzaG93Rm9yY2VkUG9wdXA9IHRoaXMuc3RhdGUuc2hvd0xlYWRGb3JtICYmIGxhbmRpbmdfcGFnZSAmJiB0aGlzLnN0YXRlLnNlb0ZyaWVuZGx5ICYmIHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbCAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuaXNfaXBkX2hvc3BpdGFsICYmIHRoaXMuc3RhdGUuc2hvd0ZvcmNlZFBvcHVwICYmICF0aGlzLnN0YXRlLnNob3dOb25JcGRQb3B1cFxuXG5cblx0XHRsZXQgaXNVc2VyTG9naW4gPSBPYmplY3QudmFsdWVzKHRoaXMucHJvcHMucHJvZmlsZXMpLmxlbmd0aCB8fCBTVE9SQUdFLmNoZWNrQXV0aCgpXG4gICAgICAgIGxldCBjb21tZW50c0V4aXN0cyA9IHRoaXMucHJvcHMuaG9zcGl0YWxDb21tZW50cyAmJiB0aGlzLnByb3BzLmhvc3BpdGFsQ29tbWVudHMubGVuZ3RoID8gdGhpcy5wcm9wcy5ob3NwaXRhbENvbW1lbnRzLmxlbmd0aCA6IG51bGxcblxuICAgICAgICBsZXQgc3BlY2lhbGl6YXRpb25fZGF0YSA9IFtdXG4gICAgICAgIGlmKHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbCAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuc3BlY2lhbGl6YXRpb25fZG9jdG9ycyAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuc3BlY2lhbGl6YXRpb25fZG9jdG9ycy5zcGVjaWFsaXphdGlvbnMpe1xuXG4gICAgICAgIFx0c3BlY2lhbGl6YXRpb25fZGF0YSA9IHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5zcGVjaWFsaXphdGlvbl9kb2N0b3JzLnNwZWNpYWxpemF0aW9uc1xuICAgICAgICB9XG4gICAgICAgIHNob3dQb3B1cCA9IGZhbHNlO1xuICAgICAgICBzaG93Rm9yY2VkUG9wdXAgPSBmYWxzZTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmlkID9cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXBkLXNlY3Rpb25cIj5cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdChzaG93UG9wdXAgfHwgc2hvd0ZvcmNlZFBvcHVwKSA/XG5cdFx0XHRcdFx0XHRcdFx0XHQ8SXBkTGVhZEZvcm0gc3VibWl0TGVhZEZvcm1HZW5lcmF0aW9uPXt0aGlzLnN1Ym1pdExlYWRGb3JtR2VuZXJhdGlvbi5iaW5kKHRoaXMpfSB7Li4udGhpcy5wcm9wc30gaG9zcGl0YWxfbmFtZT17dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLm5hbWUgPyB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwubmFtZSA6IG51bGx9IGhvc3BpdGFsX2lkPXt0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuaWR9IGZvcm1Tb3VyY2U9J2lwZEhvc3BpdGFsUG9wdXAnIHNhdmVMZWFkSWRGb3JVcGRhdGlvbj17dGhpcy5zYXZlTGVhZElkRm9yVXBkYXRpb24uYmluZCh0aGlzKX0gbm9Ub2FzdE1lc3NhZ2U9e3RydWV9IHNwZWNpYWxpemF0aW9uX2RhdGE9e3NwZWNpYWxpemF0aW9uX2RhdGF9Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5zaG93U2Vjb25kUG9wdXAgJiYgdGhpcy5zdGF0ZS5maXJzdExlYWRJZCAmJiBwYXJzZWQuZ2V0X2ZlZWRiYWNrICYmIHBhcnNlZC5nZXRfZmVlZGJhY2sgPT0gJzEnID9cblx0XHRcdFx0XHRcdFx0XHRcdDxJcGRTZWNvbmRQb3B1cCB7Li4udGhpcy5wcm9wc30gZmlyc3RMZWFkSWQ9e3RoaXMuc3RhdGUuZmlyc3RMZWFkSWR9IGFsbF9kb2N0b3JzPXt0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuYWxsX2RvY3RvcnN9IGFsbF9jaXRpZXM9e3RoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5hbGxfY2l0aWVzfSBob3NwaXRhbFByb2ZpbGVQYWdlPXt0cnVlfSBzZWNvbmRJcGRGb3JtU3VibWl0dGVkPXt0aGlzLnNlY29uZElwZEZvcm1TdWJtaXR0ZWQuYmluZCh0aGlzKX0gaG9zcGl0YWxfbmFtZT17dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLm5hbWUgPyB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwubmFtZSA6IG51bGx9IGhvc3BpdGFsX2lkPXt0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuaWR9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIC8qKHRoaXMuc3RhdGUuc2hvd05vbklwZFBvcHVwID09IDEgfHwgdGhpcy5zdGF0ZS5zaG93Tm9uSXBkUG9wdXAgPT0gMikgJiYgdGhpcy5zdGF0ZS50b19iZV9mb3JjZSA9PSAxICYmICFTVE9SQUdFLmlzQWdlbnQoKT9cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPE5vbklwZFBvcHVwVmlldyB7Li4udGhpcy5wcm9wc30gbm9uSXBkTGVhZHM9e3RoaXMubm9uSXBkTGVhZHMuYmluZCh0aGlzKX0gY2xvc2VJcGRMZWFkUG9wdXAgPSB7dGhpcy5jbG9zZUlwZExlYWRQb3B1cC5iaW5kKHRoaXMpfSBpc19mb3JjZT17dGhpcy5zdGF0ZS5zaG93Tm9uSXBkUG9wdXB9IGlzX2hwcD17dHJ1ZX0gaG9zcGl0YWxfZGF0YT17dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsfS8+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDonJyovXG5cdFx0XHQgICAgICAgICAgICAgICAgfVxuXG5cdFx0XHRcdFx0XHRcdDxIb3NwaXRhbEluZm8gaG9zcGl0YWxfZGF0YT17dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsfSBzaG93UG9wdXA9e3Nob3dQb3B1cH0gaXNTZW89e3RoaXMuc3RhdGUuc2VvRnJpZW5kbHl9IC8+XG5cblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLm90aGVyX25ldHdvcmtfaG9zcGl0YWxzICYmIHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5vdGhlcl9uZXR3b3JrX2hvc3BpdGFscy5sZW5ndGg/XG5cdFx0XHRcdFx0XHRcdFx0PElwZENhcm91c2VsIHsuLi50aGlzLnByb3BzfSBob3NwaXRhbF9kYXRhID17dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsfS8+XG5cdFx0XHRcdFx0XHRcdFx0OicnXG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlwZC10YWJzLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2Ake3RoaXMucHJvcHMubG9jYXRpb24gJiYgdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZT9gJHt0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lfT90eXBlI2RvY3RvcnNgOicnfWB9IGNsYXNzTmFtZT17YGlwZC10Yi10YWJzICR7dGhpcy5zdGF0ZS50b2dnbGVUYWJUeXBlID09ICdkb2N0b3JzJyA/ICcgaXBkLXRiLWFjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXsoZSk9Pntcblx0XHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy50b2dnbGVUYWJzKCdkb2N0b3JzJylcblx0XHRcdFx0XHRcdFx0XHR9fT5Eb2N0b3JzPC9hPlxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbCAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuYmVkX2NvdW50ICYmIGZhbHNlID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj17YCR7dGhpcy5wcm9wcy5sb2NhdGlvbiAmJiB0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lP2Ake3RoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWV9P3R5cGUjYm9va05vd2A6Jyd9YH0gY2xhc3NOYW1lPXtgaXBkLXRiLXRhYnMgJHt0aGlzLnN0YXRlLnRvZ2dsZVRhYlR5cGUgPT0gJ2Jvb2tOb3cnID8gJyBpcGQtdGItYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9eyhlKT0+e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMudG9nZ2xlVGFicygnYm9va05vdycpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PkJvb2sgTm93PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbCAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwucmF0aW5nX2dyYXBoICYmIHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5yYXRpbmdfZ3JhcGguc3Rhcl9jb3VudCAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuZGlzcGxheV9yYXRpbmdfd2lkZ2V0P1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtgJHt0aGlzLnByb3BzLmxvY2F0aW9uICYmIHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWU/YCR7dGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZX0/dHlwZSNmZWVkYmFja2A6Jyd9YH0gY2xhc3NOYW1lPXtgaXBkLXRiLXRhYnMgJHt0aGlzLnN0YXRlLnRvZ2dsZVRhYlR5cGUgPT0gJ2ZlZWRiYWNrJyA/ICcgaXBkLXRiLWFjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXsoZSk9Pntcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnRvZ2dsZVRhYnMoJ2ZlZWRiYWNrJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+RmVlZGJhY2s8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDonJ1x0XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbCAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwub2ZmZXJzICYmIHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5vZmZlcnMubGVuZ3RoP1xuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj17YCR7dGhpcy5wcm9wcy5sb2NhdGlvbiAmJiB0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lP2Ake3RoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWV9P3R5cGUjb2ZmZXJzYDonJ31gfSBjbGFzc05hbWU9e2BpcGQtdGItdGFicyAke3RoaXMuc3RhdGUudG9nZ2xlVGFiVHlwZSA9PSAnb2ZmZXJzJyA/ICcgaXBkLXRiLWFjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXsoZSk9Pntcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMudG9nZ2xlVGFicygnb2ZmZXJzJylcblx0XHRcdFx0XHRcdFx0XHRcdH19Pk9mZmVyczwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDonJ1x0XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsICYmIHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5pc19pcGRfaG9zcGl0YWwgP1xuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBpZD1cImNvbW1vbl9zZWFyY2hcIiBjbGFzc05hbWU9XCJpcGQtc2wtc3JjaFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Q29tbW9uU2VhcmNoIHsuLi50aGlzLnByb3BzfSBob3NwaXRhbF9pZF9zZWFyY2g9e3RoaXMucHJvcHMuaG9zcGl0YWxfaWR9IGNvbW1vblNlYXJjaD17dHJ1ZX0gZ2V0SW5wdXRGb2N1cz17dGhpcy5nZXRJbnB1dEZvY3VzLmJpbmQodGhpcyl9IGhvc3BpdGFsX2xhdD17dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmxhdH0gaG9zcGl0YWxfbG9uZz17dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmxvbmd9IGhvc3BpdGFsX3NlYXJjaF9uYW1lPXt0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwubmFtZSB8fCAnJ30gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbCAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuYWxsX3NwZWNpYWxpemF0aW9uX2dyb3VwcyAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuYWxsX3NwZWNpYWxpemF0aW9uX2dyb3Vwcy5sZW5ndGggP1xuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzb3J0LXN1Yi1maWx0ZXItY29udGFpbmVyIG1iLTNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+PHNwYW4gY2xhc3NOYW1lPVwiZnctNzAwXCI+UG9wdWxhciBTcGVjaWFsaXphdGlvbnM8L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNydC1zYi1idG4tY29udFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5hbGxfc3BlY2lhbGl6YXRpb25fZ3JvdXBzLm1hcCgoY2F0ZWdvcnksIGopID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxidXR0b24ga2V5PXtqfSBjbGFzc05hbWU9J3NydC1hY3QnIGlkPXtjYXRlZ29yeS5pZH0gb25DbGljaz17dGhpcy5hcHBseVF1aWNrRmlsdGVycy5iaW5kKHRoaXMsIGNhdGVnb3J5KX0+IHtjYXRlZ29yeS5uYW1lfTwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+IDogJydcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGlkPVwiZG9jdG9yc1wiIHJlZj1cImRvY3RvcnNcIj5cblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwgJiYgKCh0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuZG9jdG9ycyAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuZG9jdG9ycy5yZXN1bHQubGVuZ3RoKSB8fCAodGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLnNwZWNpYWxpemF0aW9uX2RvY3RvcnMgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLnNwZWNpYWxpemF0aW9uX2RvY3RvcnMucmVzdWx0Lmxlbmd0aCkpID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRcIj48aDIgY2xhc3NOYW1lPVwiZHNwbHktaXBkLWhkbmdcIj57YCR7dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLnNlb190aXRsZT90aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuc2VvX3RpdGxlOnRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5uYW1lX2NpdHkgPyB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwubmFtZV9jaXR5IDogJyd9IERvY3RvcnMgTGlzdGB9PC9oMj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLnNwZWNpYWxpemF0aW9uX2RvY3RvcnMgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLnNwZWNpYWxpemF0aW9uX2RvY3RvcnMucmVzdWx0Lmxlbmd0aCA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLnNwZWNpYWxpemF0aW9uX2RvY3RvcnMucmVzdWx0Lm1hcCgoZG9jdG9yQ2FyZCwgaSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxEb2N0b3JSZXN1bHRDYXJkIGRldGFpbHM9e2RvY3RvckNhcmR9IGtleT17aX0gcmFuaz17aX0gc2VvRnJpZW5kbHk9e3RoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5zcGVjaWFsaXphdGlvbl9kb2N0b3JzLnNlb30gey4uLnRoaXMucHJvcHN9IGlzSG9zcGl0YWxQYWdlPXt0cnVlfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuZG9jdG9ycy5yZXN1bHQubWFwKChkb2N0b3JDYXJkLCBpKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPERvY3RvclJlc3VsdENhcmQgZGV0YWlscz17ZG9jdG9yQ2FyZH0ga2V5PXtpfSByYW5rPXtpfSBzZW9GcmllbmRseT17dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmRvY3RvcnMuc2VvfSB7Li4udGhpcy5wcm9wc30gaXNIb3NwaXRhbFBhZ2U9e3RydWV9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFsZ24tYW5jaHJcIj5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuc3BlY2lhbGl6YXRpb25fZG9jdG9ycyAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuc3BlY2lhbGl6YXRpb25fZG9jdG9ycy5yZXN1bHQubGVuZ3RoID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIG9uQ2xpY2s9e3RoaXMudmlld0RvY3RvcnNDbGlja2VkLmJpbmQodGhpcywgdGhpcy5wcm9wcy5zcGVjaWFsaXphdGlvbl9pZCB8fCAnJyl9Pnt0aGlzLmdldFNwZWNpYWxpemF0aW9uTmFtZSgpfTwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuZG9jdG9ycyAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuZG9jdG9ycy5yZXN1bHQubGVuZ3RoIDwgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmRvY3RvcnMuY291bnQgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgb25DbGljaz17dGhpcy52aWV3RG9jdG9yc0NsaWNrZWQuYmluZCh0aGlzLCBmYWxzZSl9Pnt0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuc3BlY2lhbGl6YXRpb25fZG9jdG9ycyAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuc3BlY2lhbGl6YXRpb25fZG9jdG9ycy5yZXN1bHQubGVuZ3RoID8gJyAvJyA6ICcnfXtgVmlldyBhbGwgJHt0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuZG9jdG9ycy5jb3VudH0gRG9jdG9yc2B9PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmJlZF9jb3VudCAmJiBmYWxzZSA/XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGlkPVwiYm9va05vd1wiIHJlZj1cImJvb2tOb3dcIiBjbGFzc05hbWU9XCJuYXZfdG9wX2JhclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8SXBkRm9ybVZpZXcgey4uLnRoaXMucHJvcHN9IHRhYlZpZXc9e3RydWV9IGZvcm1Tb3VyY2U9J0lwZEhvc3BpdGFsRGV0YWlsUGFnZScgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0PGRpdiBpZD1cImZlZWRiYWNrXCIgcmVmPVwiZmVlZGJhY2tcIiBjbGFzc05hbWU9XCJtdC0xXCI+XG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsICYmIHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5yYXRpbmdfZ3JhcGggJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLnJhdGluZ19ncmFwaC5zdGFyX2NvdW50ICYmIHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5kaXNwbGF5X3JhdGluZ193aWRnZXQgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhzLWNhcmRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZFwiPjxoMiBjbGFzc05hbWU9XCJkc3BseS1pcGQtaGRuZ1wiPlJldmlld3MgZm9yIHt0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwubmFtZSA/IHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5uYW1lIDogJyd9PC9oMj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmF0aW5nR3JhcGggZGV0YWlscz17dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbCAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwucmF0aW5nICYmIHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5yYXRpbmcubGVuZ3RoICYmIHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5kaXNwbGF5X3JhdGluZ193aWRnZXQgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmV2aWV3TGlzdCBkZXRhaWxzPXt0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWx9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbCAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwub2ZmZXJzICYmIHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5vZmZlcnMubGVuZ3RoID9cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgaWQ9XCJvZmZlcnNcIiByZWY9XCJvZmZlcnNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PElwZE9mZmVyc1BhZ2Ugey4uLnRoaXMucHJvcHN9IG9mZmVycz17dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLm9mZmVyc30gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0PGRpdiByZWY9XCJ2aWV3X21vcmVcIj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmlwZF9wcm9jZWR1cmVfY2F0ZWdvcmllcyAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuaXBkX3Byb2NlZHVyZV9jYXRlZ29yaWVzLmxlbmd0aCA/XG5cdFx0XHRcdFx0XHRcdFx0XHQ8SG9zcGl0YWxUcmVhdG1lbnQgaG9zcGl0YWxfZGF0YT17dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsfSB7Li4udGhpcy5wcm9wc30gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLnNlcnZpY2VzICYmIHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5zZXJ2aWNlcy5sZW5ndGggP1xuXHRcdFx0XHRcdFx0XHRcdFx0PEhvc3BpdGFsU2VydmljZXMgaG9zcGl0YWxfZGF0YT17dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0ey8qXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsICYmIHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5vdGhlcl9uZXR3b3JrX2hvc3BpdGFscyAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwub3RoZXJfbmV0d29ya19ob3NwaXRhbHMubGVuZ3RoID9cblx0XHRcdFx0XHRcdFx0XHRcdDxIb3NwaXRhbExvY2F0aW9ucyBob3NwaXRhbF9kYXRhPXt0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWx9IC8+XG5cblx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0Ki99XG5cblx0XHRcdFx0XHRcdFx0ey8qIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmltYWdlcyAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuaW1hZ2VzLmxlbmd0aCA/XG5cdFx0XHRcdFx0XHRcdFx0XHQ8SG9zcGl0YWxHYWxsZXJ5IGhvc3BpdGFsX2RhdGE9e3RoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbH0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0fSAqL31cblxuXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwgJiYgKHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5uZXdfYWJvdXQpID9cblx0XHRcdFx0XHRcdFx0XHRcdDxIb3NwaXRhbEFib3V0VXMgaG9zcGl0YWxfZGF0YT17dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbCAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwucXVlc3Rpb25fYW5zd2VycyAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwucXVlc3Rpb25fYW5zd2Vycy5sZW5ndGggP1xuXHRcdFx0XHRcdFx0XHRcdFx0PElwZFF1ZXN0aW9uQW5zd2VyIGhvc3BpdGFsX2RhdGE9e3RoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbH0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlwZC13ZGctcGRuZ1wiPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhvc3BpdGFsQ29tbWVudHMgJiYgdGhpcy5wcm9wcy5ob3NwaXRhbENvbW1lbnRzLmxlbmd0aD9cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjb21tZW50cy1tYWluLWhlYWRpbmdcIj57YFVzZXIgQ29tbWVudHMgKCR7dGhpcy5wcm9wcy5ob3NwaXRhbENvbW1lbnRzLmxlbmd0aH0pYH08L2g0PlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaG9zcGl0YWxDb21tZW50cy5tYXAoKGNvbW1lbnQsIGtleSkgPT4ge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFJlcGx5IGtleT17Y29tbWVudC5pZH0gY29tbWVudFJlcGx5Q2xpY2tlZD17dGhpcy5jb21tZW50UmVwbHlDbGlja2VkLmJpbmQodGhpcyl9IGlzVXNlckxvZ2luPXtpc1VzZXJMb2dpbn0gey4uLnRoaXMucHJvcHN9IHsuLi50aGlzLnN0YXRlfSBcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRsb2FkQ29tbWVudHM9e3RoaXMubG9hZENvbW1lbnRzLmJpbmQodGhpcyl9IHBvc3RDb21tZW50PXt0aGlzLnByb3BzLnBvc3RIb3NwaXRhbENvbW1lbnRzfVxuXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0UmVwbHk9e3RoaXMucG9zdFJlcGx5LmJpbmQodGhpcyl9IGhhbmRsZUlucHV0Q29tbWVudD17dGhpcy5oYW5kbGVJbnB1dENvbW1lbnQuYmluZCh0aGlzKX0gY29tbWVudERhdGE9e2NvbW1lbnR9IGNvbW1lbnRzRXhpc3RzPXtjb21tZW50c0V4aXN0c30gaG9zcGl0YWxQYWdlPXt0cnVlfSBob3NwaXRhbF9pZD17dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmlkfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEFydGljbGU9e3RydWV9Lz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNSBtcm5nLXRvcC0xMiBwLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50Qm94IHsuLi50aGlzLnByb3BzfSB7Li4udGhpcy5zdGF0ZX0gIHBhcmVudENvbW1lbnRJZD17dGhpcy5zdGF0ZS5yZXBseU9wZW5Gb3J9IGhvc3BpdGFsUGFnZT17dHJ1ZX0gcGFyZW50Q29tbWVudElkPScnIGhvc3BpdGFsX2lkPXt0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuaWR9IGxvYWRDb21tZW50cz17dGhpcy5sb2FkQ29tbWVudHMuYmluZCh0aGlzKX0gcG9zdENvbW1lbnQ9e3RoaXMucHJvcHMucG9zdEhvc3BpdGFsQ29tbWVudHN9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cdFx0ICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5pcGRfY2hhdCB8fCBzaG93UG9wdXAgfHwgKHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbCAmJiAhdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmlzX2lwZF9ob3NwaXRhbCkgPyAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0OiBwYXJzZWQuZnJvbVByb2NlZHVyZSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYnRuLXNlYXJjaC1kaXYgYnRuLWFwcGx5LWRpdiBidG4tc2JtdFwiPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgb25DbGljaz17dGhpcy5nZXRDb3N0RXN0aW1hdGVDbGlja2VkLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImJ0bi1zZWFyY2hcIj5HZXQgQ29zdCBFc3RpbWF0ZTwvYT48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0OiA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1zZWFyY2gtZGl2IGJ0bi1hcHBseS1kaXYgYnRuLXNibXRcIj48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIG9uQ2xpY2s9e3RoaXMuZ2V0Q29zdEVzdGltYXRlQ2xpY2tlZC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJidG4tc2VhcmNoXCI+TmVlZCBIZWxwPzwvYT48L2Rpdj5cblx0XHRcdFx0XHRcdFx0fVxuXG5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0OiA8TG9hZGVyIC8+XG5cdFx0XHRcdH1cblxuXHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9zcGl0YWxEZXRhaWxWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBJcGRPZmZlcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNob3dUbmM6IGZhbHNlXG5cdFx0fVxuXHR9XG5cblx0dG9nZ2xlVG5DKGlkKSB7XG5cblx0XHRpZiAodGhpcy5zdGF0ZS5zaG93VG5jICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSkge1xuXHRcdFx0bGV0IGhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5vZmZzZXRIZWlnaHQgfHwgMFxuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIGhlaWdodClcblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dUbmM6ICF0aGlzLnN0YXRlLnNob3dUbmMgfSlcblxuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaHMtY2FyZFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlwZC1vZnItY29udFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJocy1vZnItaGVhZGluZ1wiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9pcGQtb2ZyLnN2Zyd9IC8+T2ZmZXJzIEF2YWlsYWJsZTwvaDQ+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMub2ZmZXJzLm1hcCgob2ZmZXIsIGkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJpcGQtb2ZyLW1haW5cIiBpZD17YCR7aX1fb2ZmZXJgfSBrZXk9e2l9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJocy1vZmZlckNhcmRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJocy1vZnItY3JkSGVhZGluZ1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaHMtb2ZyLWNvbnRublwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2lwZC1jcG4uc3ZnJ30gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b2ZmZXIuaG9zcGl0YWwgPyA8c3BhbiBjbGFzc05hbWU9XCJvZmZyLWdybi1jZFwiPntvZmZlci5ob3NwaXRhbH08L3NwYW4+IDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7b2ZmZXIudGl0bGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Lyo8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvaXBkLXNoYXJlLnN2Zyd9IC8+Ki99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhzLW9mci1jYXJkLWNvbnRlbnRcIj5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9mZmVyLmNvdXBvbiA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3BuLXJxcmRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD5Vc2VyIFByb21vIGNvZGUgOiAgPHNwYW4+e29mZmVyLmNvdXBvbn08L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD57b2ZmZXIuZGVzY3JpcHRpb259PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCFvZmZlci5jb3Vwb24gP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuby1jcG4tcnFyZFwiPk5vIENvdXBvbiBSZXF1aXJlZDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9mZmVyLnNob3dfdG5jICYmIHRoaXMuc3RhdGUuc2hvd1RuYyA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9mZmVyLWhpZGUtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1saS1zdHlsZVwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogb2ZmZXIudG5jIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9mZmVyLnNob3dfdG5jID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaHMtb2ZmZXItZm9vdGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRjX2NvbnRcIj5UJkMgQXBwbHk8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLnNob3dUbmMgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic2hvdy1oaWRlLW9mZnIgY3Vyc29yLXBudHJcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVRuQy5iaW5kKHRoaXMsIGAke2l9X29mZmVyYCl9ID5IaWRlIERldGFpbHMgPGltZyBjbGFzc05hbWU9XCJvZmZzaG93SWNvbiBvZmhpZGVJY29uIFwiIHN0eWxlPXt7IHdpZHRoOiAnN3B4JywgbWFyZ2luTGVmdDogJzVweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9yaWdodC1zYy5zdmcnfSAvPjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogPHAgY2xhc3NOYW1lPVwic2hvdy1oaWRlLW9mZnIgY3Vyc29yLXBudHJcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVRuQy5iaW5kKHRoaXMsIGAke2l9X29mZmVyYCl9ID5TaG93IERldGFpbHMgPGltZyBjbGFzc05hbWU9XCJcIiBzdHlsZT17eyB3aWR0aDogJzdweCcsIG1hcmdpbkxlZnQ6ICc1cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvcmlnaHQtc2Muc3ZnJ30gLz48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHsvKjxwIGNsYXNzTmFtZT1cIm9mci12dy1tb3JlXCI+VmlldyA2IG1vcmUgb2ZmZXJzPC9wPiovfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBJcGRPZmZlcnMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIEJyZWFkY3J1bWJWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKXtcblxuXHRcdHJldHVybihcblx0XHRcdDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcdHRoaXMucHJvcHMuYnJlYWRjcnVtYiAmJiB0aGlzLnByb3BzLmJyZWFkY3J1bWIubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXJiLTEwIGJyZWFkY3J1bWItbGlzdCBicmVhZGNydW1iLWxpc3QtdWxcIiBzdHlsZT17eyAnd29yZEJyZWFrJzogJ2JyZWFrV29yZCcsIG1hcmdpblRvcDonMHB4JywgbWFyZ2luQm90dG9tOicxMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYnJlYWRjcnVtYi5tYXAoKGRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWxpc3QtaXRlbVwiIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9PSB0aGlzLnByb3BzLmJyZWFkY3J1bWIubGVuZ3RoIC0gMSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZGF0YS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxhIGhyZWY9e2RhdGEudXJsfSB0aXRsZT17ZGF0YS5saW5rX3RpdGxlIHx8IGRhdGEudGl0bGV9IG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKChrZXkgPT0gMCB8fCBrZXkgPT0gdGhpcy5wcm9wcy5icmVhZGNydW1iLmxlbmd0aCAtIDEpID8gZGF0YS51cmwgOiBgLyR7ZGF0YS51cmx9YClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID09IDAgfHwga2V5ID09IHRoaXMucHJvcHMuYnJlYWRjcnVtYi5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCBicmVhZGNydW1iLXRpdGxlIGJyZWFkY3J1bWItY29sb3JlZC10aXRsZVwiPntkYXRhLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwIGJyZWFkY3J1bWItdGl0bGUgYnJlYWRjcnVtYi1jb2xvcmVkLXRpdGxlIGQtaW5saW5lLWJsY2tcIj57ZGF0YS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSAhPSB0aGlzLnByb3BzLmJyZWFkY3J1bWIubGVuZ3RoIC0gMSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmVhZGNydW1iLWFycm93XCI+Jmd0Ozwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cblx0XHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBCcmVhZGNydW1iVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vaGVscGVycy9ndG0uanMnXG5cbmNsYXNzIElwZFFuQSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0cmVhdG1lbnQ6IFtdLFxuICAgICAgZ2V0QW5zOiB0cnVlXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtnZXRBbnM6IGZhbHNlfSlcbiAgfVxuXG4gIHRvZ2dsZVRyZWF0bWVudChpZCl7XG4gICAgbGV0IHRyZWF0bWVudCA9IHRoaXMuc3RhdGUudHJlYXRtZW50XG4gICAgbGV0IGZvdW5kID0gZmFsc2VcbiAgICB0cmVhdG1lbnQgPSB0aGlzLnN0YXRlLnRyZWF0bWVudC5maWx0ZXIoKGlwZCkgPT4ge1xuICAgICAgaWYoaXBkID09IGlkKXtcbiAgICAgICAgZm91bmQgPSB0cnVlXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9KVxuICAgIFxuICAgIGlmKCFmb3VuZCl7XG4gICAgICB0cmVhdG1lbnQucHVzaChpZClcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7dHJlYXRtZW50OiB0cmVhdG1lbnR9KVxuICB9XG5cblx0cmVuZGVyKCl7XG5cbiAgICBsZXQgeyBob3NwaXRhbF9kYXRhIH0gPSB0aGlzLnByb3BzXG5cdFx0XG4gICAgcmV0dXJuKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJocy1jYXJkXCI+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRcIj48aDIgY2xhc3NOYW1lPVwiZHNwbHktaXBkLWhkbmdcIj5GcmVxdWVudGx5IEFza2VkIFF1ZXN0aW9ucyBpbiB7aG9zcGl0YWxfZGF0YS5uYW1lfTwvaDI+PC9kaXY+ICAgXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgY2xlYXJmaXhcIj5cbiAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJocy1hY2NvcmRpYW5cIj4gXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGhvc3BpdGFsX2RhdGEucXVlc3Rpb25fYW5zd2Vycy5tYXAoKHRyZWF0bWVudCwgaSk9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiYWNjb3JkaWFuLWhlYWQgZnctNTAwXCIgb25DbGljaz17dGhpcy50b2dnbGVUcmVhdG1lbnQuYmluZCh0aGlzLCB0cmVhdG1lbnQuaWQpfT57YCR7dHJlYXRtZW50Lm5hbWV9YH1cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRyZWF0bWVudC5pbmRleE9mKHRyZWF0bWVudC5pZCk+LTE/XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIlwiIHNyYz17QVNTRVRTX0JBU0VfVVJMK1wiL2ltYWdlcy91cC1hcnJvdy5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDo8aW1nIGNsYXNzTmFtZT1cIlwiIHNyYz17QVNTRVRTX0JBU0VfVVJMK1wiL2ltYWdlcy9kb3duLWFycm93LnBuZ1wifSAvPiBcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50cmVhdG1lbnQuaW5kZXhPZih0cmVhdG1lbnQuaWQpPi0xIHx8IHRoaXMuc3RhdGUuZ2V0QW5zP1xuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjY29yZGlhbi1kdGxcIiAgc3R5bGU9e3t0ZXh0QWxpZ246J2p1c3RpZnknLCBmb250U2l6ZTonMTRweCd9fSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRyZWF0bWVudC5hbnN3ZXJ9fT5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICA6JycgICBcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICA8L3VsPlxuICAgICAgIDwvZGl2PiAgIFxuICAgICA8L2Rpdj5cblx0XHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBJcGRRbkEiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBnZXRIb3NwaXRhRGV0YWlscyAsIHNlbGVjdE9wZFRpbWVTTG90LCBzYXZlUHJvZmlsZVByb2NlZHVyZXMsIGNsb25lQ29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMsIHRvZ2dsZUlQRENyaXRlcmlhLCBtZXJnZU9QRFN0YXRlLCBpcGRDaGF0VmlldywgY2hlY2tJcGRDaGF0QWdlbnRTdGF0dXMsIGdldEhvc3BpdGFsQ29tbWVudHMsIHBvc3RIb3NwaXRhbENvbW1lbnRzLCBtZXJnZUlwZENyaXRlcmlhLCBjbGVhclZpcFNlbGVjdGVkUGxhbiwgTm9uSXBkQm9va2luZ0xlYWQgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuXG5pbXBvcnQgSXBkSG9zcGl0YWxEZXRhaWxWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaXBkL0lwZEhvc3BpdGFsRGV0YWlsVmlldy5qcydcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJylcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0xvYWRlcidcbmltcG9ydCBMZWZ0QmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9MZWZ0QmFyJ1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9SaWdodEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0hvbWUvZm9vdGVyJ1xuaW1wb3J0IEhlbG1ldFRhZ3MgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0hlbG1ldFRhZ3MnXG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uL2NvbmZpZydcbmltcG9ydCBCcmVhZENydW1iVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2lwZC9icmVhZENydW1iLmpzJ1xuaW1wb3J0IERpc2NsYWltZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcydcblxuXG5cbmNsYXNzIEhvc3BpdGFsRGV0YWlsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdGxldCBoX2lkID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaG9zcGl0YWxJZCB8fCB0aGlzLmdldF9ob3NwaXRhbF9pZF9ieV91cmwodGhpcy5wcm9wcy5tYXRjaC51cmwpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNwZWNpYWxpemF0aW9uX2lkOiBudWxsLFxuXHRcdFx0aG9zcGl0YWxfaWQ6IGhfaWQsXG5cdFx0XHRpc19zZW86IHRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKCctaHBwJyksXG5cdFx0XHRzaG93SXBkQ2hhdDogZmFsc2Vcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgbG9hZERhdGEoc3RvcmUsIG1hdGNoLCBxdWVyeSl7XG5cdFx0bGV0IHNlYXJjaFVybCA9IG51bGxcbiAgICAgICAgaWYgKG1hdGNoLnVybC5pbmNsdWRlcygnLWhwcCcpICkge1xuICAgICAgICAgICAgc2VhcmNoVXJsID0gbWF0Y2gudXJsLnRvTG93ZXJDYXNlKClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgXHR0cnl7XG4gICAgICAgIFx0XHRcbiAgICAgICAgXHRcdHJldHVybiBzdG9yZS5kaXNwYXRjaChnZXRIb3NwaXRhRGV0YWlscyhtYXRjaC5wYXJhbXMuaG9zcGl0YWxJZCwgbnVsbCwgc2VhcmNoVXJsLCBxdWVyeS5zcGVjaWFsaXphdGlvbl9pZCB8fCAnJywgKHJlc3ApPT57XG4gICAgICAgIFx0XHRcdGlmKHJlc3AgJiYgcmVzcC5pZCl7XG4gICAgICAgIFx0XHRcdFx0c3RvcmUuZGlzcGF0Y2goZ2V0SG9zcGl0YWxDb21tZW50cyhyZXNwLmlkKSlcbiAgICAgICAgXHRcdFx0fVxuICAgICAgICBcdFx0XHRpZihyZXNwICYmIHJlc3Auc3RhdHVzICYmIHJlc3Auc3RhdHVzPT0zMDEpe1xuICAgICAgICBcdFx0XHRcdHJlc29sdmUoeyBzdGF0dXM6IDMwMSB9KVxuICAgICAgICBcdFx0XHR9ZWxzZXtcbiAgICAgICAgXHRcdFx0XHRyZXNvbHZlKHt9KVxuICAgICAgICBcdFx0XHR9XG4gICAgICAgIFx0XHR9KSApXG4gICAgICAgIFx0fWNhdGNoKGUpe1xuICAgICAgICBcdFx0cmVqZWN0KClcbiAgICAgICAgXHR9XG4gICAgICAgIH0pXG5cdH1cblxuXHRzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICByb3V0ZXI6ICgpID0+IG51bGxcbiAgICB9XG5cbiAgICBnZXRfaG9zcGl0YWxfaWRfYnlfdXJsKHVybCkge1xuICAgICAgICBmb3IgKGxldCBkX2lkIGluIHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbF9pbmZvKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsX2luZm9bZF9pZF0uY2Fub25pY2FsX3VybCAmJiB1cmwgJiYgdXJsLmluY2x1ZGVzKHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbF9pbmZvW2RfaWRdLmNhbm9uaWNhbF91cmwpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRfaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdFxuXHRcdGxldCBzZWFyY2hVcmwgPSBudWxsXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1hdGNoLnVybC5pbmNsdWRlcygnLWhwcCcpICkge1xuICAgICAgICAgICAgc2VhcmNoVXJsID0gdGhpcy5wcm9wcy5tYXRjaC51cmwudG9Mb3dlckNhc2UoKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBzcGVjaWFsaXphdGlvbl9pZCA9ICcnXG4gICAgICAgIGlmKHBhcnNlZC5zcGVjaWFsaXphdGlvbl9pZCl7XG4gICAgICAgIFx0c3BlY2lhbGl6YXRpb25faWQgPSBwYXJzZWQuc3BlY2lhbGl6YXRpb25faWRcbiAgICAgICAgXHR0aGlzLnNldFN0YXRlKHtzcGVjaWFsaXphdGlvbl9pZDogcGFyc2VkLnNwZWNpYWxpemF0aW9uX2lkfSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgaG9zcGl0YWxJZCA9IHNlYXJjaFVybD8nJzp0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5ob3NwaXRhbElkXG4gICAgICAgIC8vaWYoIXRoaXMuc3RhdGUuaG9zcGl0YWxfaWQgfHwgIXRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbF9pbmZvIHx8ICF0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWxfaW5mb1t0aGlzLnN0YXRlLmhvc3BpdGFsX2lkXSkge1xuICAgICAgICBcdHRoaXMucHJvcHMuZ2V0SG9zcGl0YURldGFpbHMoaG9zcGl0YWxJZCwgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLCBzZWFyY2hVcmwsIHNwZWNpYWxpemF0aW9uX2lkLCAocmVzcCkgPT4ge1xuICAgICAgICBcdFx0aWYocmVzcCAmJiByZXNwLnN0YXR1cyAmJiByZXNwLnN0YXR1cz09MzAxKXtcbiAgICAgICAgXHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3Jlc3AudXJsfWApXG4gICAgICAgIFx0XHR9ZWxzZSBpZihyZXNwICYmIHJlc3AuaWQpIHtcbiAgICAgICAgXHRcdFx0dGhpcy5wcm9wcy5nZXRIb3NwaXRhbENvbW1lbnRzKHJlc3AuaWQpXG4gICAgICAgIFx0XHRcdHRoaXMuc2V0U3RhdGUoe2hvc3BpdGFsX2lkOiByZXNwLmlkfSlcbiAgICAgICAgXHRcdH1cbiAgICAgICAgXHR9KVx0XG4gICAgICAgIC8vfVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcblx0XHRpZih0aGlzLnByb3BzLmxvY2F0aW9uRmV0Y2hlZCAhPSBuZXh0UHJvcHMubG9jYXRpb25GZXRjaGVkKXtcblx0XHRcdGxldCBzZWFyY2hVcmwgPSBudWxsXG5cdCAgICAgICAgaWYgKHRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKCctaHBwJykgKSB7XG5cdCAgICAgICAgICAgIHNlYXJjaFVybCA9IHRoaXMucHJvcHMubWF0Y2gudXJsLnRvTG93ZXJDYXNlKClcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblx0ICAgICAgICBsZXQgc3BlY2lhbGl6YXRpb25faWQgPSAnJ1xuXHQgICAgICAgIGlmKHBhcnNlZC5zcGVjaWFsaXphdGlvbl9pZCl7XG5cdCAgICAgICAgXHRzcGVjaWFsaXphdGlvbl9pZCA9IHBhcnNlZC5zcGVjaWFsaXphdGlvbl9pZFxuXHQgICAgICAgIFx0dGhpcy5zZXRTdGF0ZSh7c3BlY2lhbGl6YXRpb25faWQ6IHBhcnNlZC5zcGVjaWFsaXphdGlvbl9pZH0pXG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAvLyBpZighdGhpcy5zdGF0ZS5ob3NwaXRhbF9pZCB8fCAhbmV4dFByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWxfaW5mbyB8fCAhbmV4dFByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWxfaW5mb1t0aGlzLnN0YXRlLmhvc3BpdGFsX2lkXSkge1xuXHQgICAgICAgXHRcdFxuXHQgICAgICAgIFx0dGhpcy5wcm9wcy5nZXRIb3NwaXRhRGV0YWlscyh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5ob3NwaXRhbElkLCBuZXh0UHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiwgc2VhcmNoVXJsLCBzcGVjaWFsaXphdGlvbl9pZCwgKHJlc3ApID0+IHtcblx0ICAgICAgICBcdFx0aWYocmVzcCAmJiByZXNwLnN0YXR1cyAmJiByZXNwLnN0YXR1cz09MzAxKXtcblx0ICAgICAgICBcdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgLyR7cmVzcC51cmx9YClcblx0ICAgICAgICBcdFx0fWVsc2UgaWYocmVzcCAmJiByZXNwLmlkKSB7XG5cdCAgICAgICAgXHRcdFx0dGhpcy5wcm9wcy5nZXRIb3NwaXRhbENvbW1lbnRzKHJlc3AuaWQpXHRcdFxuXHQgICAgICAgIFx0XHRcdHRoaXMuc2V0U3RhdGUoe2hvc3BpdGFsX2lkOiByZXNwLmlkfSlcblx0ICAgICAgICBcdFx0fVxuXHQgICAgICAgIFx0fSlcblx0ICAgICAgICAvL31cblx0XHR9XG5cdH1cblxuXHRnZXRNZXRhVGFnc0RhdGEoc2VvRGF0YSkge1xuXHRcdGxldCB0aXRsZSA9IFwiSG9zcGl0YWwgUHJvZmlsZSBQYWdlXCJcblx0XHRsZXQgZGVzY3JpcHRpb24gPSBcIlwiXG5cdFx0bGV0IHNjaGVtYSA9IHt9XG5cdFx0aWYgKHNlb0RhdGEpIHtcblx0XHRcdHRpdGxlID0gc2VvRGF0YSAmJiBzZW9EYXRhLnNlbyAmJiBzZW9EYXRhLnNlby50aXRsZT9zZW9EYXRhLnNlby50aXRsZSA6c2VvRGF0YS5uYW1lX2NpdHk/YCR7c2VvRGF0YS5uYW1lX2NpdHl9IHwgQm9vayBBcHBvaW50bWVudCwgQ2hlY2sgRG9jdG9ycyBMaXN0LCBSZXZpZXdzLCBDb250YWN0IE51bWJlcmA6Jydcblx0XHRcdGRlc2NyaXB0aW9uID0gc2VvRGF0YSAmJiBzZW9EYXRhLnNlbyAmJiBzZW9EYXRhLnNlby5kZXNjcmlwdGlvbj9zZW9EYXRhLnNlby5kZXNjcmlwdGlvbiA6c2VvRGF0YS5uYW1lX2NpdHk/YCR7c2VvRGF0YS5uYW1lX2NpdHl9IDogR2V0IGZyZWUgYm9va2luZyBvbiBmaXJzdCBhcHBvaW50bWVudC5DaGVjayAke3Nlb0RhdGEubmFtZT9zZW9EYXRhLm5hbWU6Jyd9IERvY3RvcnMgTGlzdCwgUmV2aWV3cywgQ29udGFjdCBOdW1iZXIsIEFkZHJlc3MsIFByb2NlZHVyZXMgYW5kIG1vcmUuYDonJ1xuXHRcdH1cblx0XHRyZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIHNjaGVtYSB9XG5cdH1cblxuXHRzaG93Q2hhdFZpZXcoc2hvd0lwZD1mYWxzZSl7XG5cdFx0XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c2hvd0lwZENoYXQ6IHRydWV9KVxuXHR9XG5cblx0Z2V0U2NoZW1hKGlwZF9ob3NwaXRhbF9kZXRhaWwpe1xuXHRcdGxldCBob3NwaXRhbF9zY2hlbWEgPSBcIlwiIFxuICAgICAgICBsZXQgYnJlYWRjcnVtYl9zY2hlbWE9XCJcIlxuICAgICAgICBsZXQgaXRlbUxpc3Rfc2NoZW1hPVwiXCJcbiAgICAgICAgaWYoaXBkX2hvc3BpdGFsX2RldGFpbCAmJiBpcGRfaG9zcGl0YWxfZGV0YWlsLnNlbyAmJiBpcGRfaG9zcGl0YWxfZGV0YWlsLnNlby5hbGxfc2NoZW1hICl7XG4gICAgICAgIFx0aXBkX2hvc3BpdGFsX2RldGFpbC5zZW8uYWxsX3NjaGVtYS5tYXAoKHNjaGVtYSk9PntcbiAgICAgICAgXHRcdHRyeXtcbiAgICAgICAgXHRcdFx0aWYoc2NoZW1hWydAdHlwZSddPT1cIkhvc3BpdGFsXCIpe1xuXHQgICAgICAgIFx0XHRcdGhvc3BpdGFsX3NjaGVtYSA9IEpTT04uc3RyaW5naWZ5KHNjaGVtYSlcblx0ICAgICAgICBcdFx0fVxuXHQgICAgICAgIFx0XHRpZihzY2hlbWFbJ0B0eXBlJ109PVwiQnJlYWRjcnVtYkxpc3RcIil7XG5cdCAgICAgICAgXHRcdFx0YnJlYWRjcnVtYl9zY2hlbWEgPSBKU09OLnN0cmluZ2lmeShzY2hlbWEpXG5cdCAgICAgICAgXHRcdH1cblx0ICAgICAgICBcdFx0aWYoc2NoZW1hWydAdHlwZSddPT1cIkl0ZW1MaXN0XCIpe1xuXHQgICAgICAgIFx0XHRcdGl0ZW1MaXN0X3NjaGVtYSA9IEpTT04uc3RyaW5naWZ5KHNjaGVtYSlcblx0ICAgICAgICBcdFx0fVxuICAgICAgICBcdFx0fWNhdGNoKGUpe1xuICAgICAgICBcdFx0XHRpZihzY2hlbWFbJ0B0eXBlJ109PVwiSG9zcGl0YWxcIil7XG5cdCAgICAgICAgXHRcdFx0aG9zcGl0YWxfc2NoZW1hID0gJydcblx0ICAgICAgICBcdFx0fVxuXHQgICAgICAgIFx0XHRpZihzY2hlbWFbJ0B0eXBlJ109PVwiQnJlYWRjcnVtYkxpc3RcIil7XG5cdCAgICAgICAgXHRcdFx0YnJlYWRjcnVtYl9zY2hlbWEgPSAnJ1xuXHQgICAgICAgIFx0XHR9XG5cdCAgICAgICAgXHRcdGlmKHNjaGVtYVsnQHR5cGUnXT09XCJJdGVtTGlzdFwiKXtcblx0ICAgICAgICBcdFx0XHRpdGVtTGlzdF9zY2hlbWEgPSAnJ1xuXHQgICAgICAgIFx0XHR9XG4gICAgICAgIFx0XHR9XG4gICAgICAgIFx0fSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBob3NwaXRhbF9zY2hlbWEsIGJyZWFkY3J1bWJfc2NoZW1hLCBpdGVtTGlzdF9zY2hlbWEgfVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cblx0XHRsZXQgaXBkX2hvc3BpdGFsX2RldGFpbCA9IHRoaXMuc3RhdGUuaG9zcGl0YWxfaWQgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsX2luZm8gJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsX2luZm9bdGhpcy5zdGF0ZS5ob3NwaXRhbF9pZF0/dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsX2luZm9bdGhpcy5zdGF0ZS5ob3NwaXRhbF9pZF06e31cblxuICAgICAgICBsZXQge2hvc3BpdGFsX3NjaGVtYSwgYnJlYWRjcnVtYl9zY2hlbWEsIGl0ZW1MaXN0X3NjaGVtYX0gPSB0aGlzLmdldFNjaGVtYShpcGRfaG9zcGl0YWxfZGV0YWlsKVxuXG5cdFx0bGV0IGlzU2VvVmFsaWQ9IHRydWVcbiAgICAgICAgaWYoQ09ORklHLlNFT19GUklFTkRMWV9IT1NQSVRBTF9JRFMgJiYgdGhpcy5zdGF0ZS5ob3NwaXRhbF9pZCAmJiAgQ09ORklHLlNFT19GUklFTkRMWV9IT1NQSVRBTF9JRFMuaW5kZXhPZihwYXJzZUludCh0aGlzLnN0YXRlLmhvc3BpdGFsX2lkKSk+IC0xKXtcbiAgICAgICAgICAgIGlzU2VvVmFsaWQgPSBmYWxzZVxuICAgICAgICB9XG5cdFx0cmV0dXJuKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG5cdFx0XHRcdFx0PFByb2ZpbGVIZWFkZXIgc2hvd1NlYXJjaD17dHJ1ZX0gcGFnZVR5cGU9J0hvc3BpdGFsRGV0YWlsUGFnZScgbmV3X2ZpeGVkX2hlYWRlcj17MX0vPlxuXHRcdFx0XHRcdDxIZWxtZXRUYWdzIHRhZ3NEYXRhPXt7XG5cdFx0XHRcdFx0XHRjYW5vbmljYWxVcmw6IGAke0NPTkZJRy5BUElfQkFTRV9VUkx9JHt0aGlzLnByb3BzLm1hdGNoLnVybH1gLFxuXHRcdFx0XHRcdFx0dGl0bGU6IHRoaXMuZ2V0TWV0YVRhZ3NEYXRhKGlwZF9ob3NwaXRhbF9kZXRhaWwgPyBpcGRfaG9zcGl0YWxfZGV0YWlsIDogbnVsbCkudGl0bGUsXG5cdFx0XHRcdFx0XHRkZXNjcmlwdGlvbjogdGhpcy5nZXRNZXRhVGFnc0RhdGEoaXBkX2hvc3BpdGFsX2RldGFpbCA/IGlwZF9ob3NwaXRhbF9kZXRhaWwgOiBudWxsKS5kZXNjcmlwdGlvblxuXHRcdFx0XHRcdH19IG5vSW5kZXg9eyF0aGlzLnN0YXRlLmlzX3NlbyB8fCAhaXNTZW9WYWxpZH0gLz5cblx0XHRcdFx0XHR7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3NwaXRhbF9zY2hlbWEgPyA8c2NyaXB0IHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IGhvc3BpdGFsX3NjaGVtYVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWRjcnVtYl9zY2hlbWEgPyA8c2NyaXB0IHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IGJyZWFkY3J1bWJfc2NoZW1hXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSAvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtTGlzdF9zY2hlbWEgPyA8c2NyaXB0IHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IGl0ZW1MaXN0X3NjaGVtYVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgcGFyZW50LXNlY3Rpb24gYm9vay1hcHBvaW50bWVudC1zZWN0aW9uIGJyZWFkY3J1bWItbXJnbiAgaG9zcGl0YWwtdmlldy1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGlwZF9ob3NwaXRhbF9kZXRhaWwgJiYgaXBkX2hvc3BpdGFsX2RldGFpbC5icmVhZGNydW1iICYmXHRcblx0XHRcdFx0XHRcdFx0XHQ8QnJlYWRDcnVtYlZpZXcgYnJlYWRjcnVtYj17aXBkX2hvc3BpdGFsX2RldGFpbC5icmVhZGNydW1ifSB7Li4udGhpcy5wcm9wc30gLz5cblx0XHRcdFx0XHRcdH1cblxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cblx0XHRcdFx0XHRcdFx0PExlZnRCYXIgLz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTcgY2VudGVyLWNvbHVtblwiPlxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0aXBkX2hvc3BpdGFsX2RldGFpbCAmJiBpcGRfaG9zcGl0YWxfZGV0YWlsLmlkP1xuXHRcdFx0XHRcdFx0XHRcdDxJcGRIb3NwaXRhbERldGFpbFZpZXcgey4uLnRoaXMucHJvcHN9IHsuLi50aGlzLnN0YXRlfSBpcGRfaG9zcGl0YWxfZGV0YWlsPXtpcGRfaG9zcGl0YWxfZGV0YWlsfSBzaG93Q2hhdFZpZXc9e3RoaXMuc2hvd0NoYXRWaWV3LmJpbmQodGhpcyl9Lz5cblx0XHRcdFx0XHRcdFx0XHQ6PExvYWRlciAvPlx0XHRcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8UmlnaHRCYXIgZXh0cmFDbGFzcz1cIiBjaGF0LWZsb2F0LWJ0bi0yXCIgc2hvd0hhbGZTY3JlZW5DaGF0PXtmYWxzZSAmJiB0aGlzLnByb3BzLmlwZF9jaGF0ICYmIHRoaXMucHJvcHMuaXBkX2NoYXQuc2hvd0lwZENoYXQ/dHJ1ZTpmYWxzZX0gc2hvd0Rlc2t0b3BJcGQ9e3RydWV9IGlwZEZvcm1QYXJhbXM9e3RoaXMuc3RhdGUuc2hvd0lwZENoYXQgP3RydWU6ZmFsc2V9IG1zZ1RlbXBsYXRlPVwiZ29sZF9nZW5lcmFsX3RlbXBsYXRlXCIvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHRcdDxEaXNjbGFpbWVyIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcblx0XHRcdClcblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcblx0XG5cdGNvbnN0IHtcblx0XHRpcGRfY2hhdCxcblx0XHRpc19pcGRfZm9ybV9zdWJtaXR0ZWQsXG5cdFx0cHJvZmlsZXMsXG5cdFx0ZGVmYXVsdFByb2ZpbGVcblx0fSA9IHN0YXRlLlVTRVJcblxuXHRjb25zdCB7XG4gICAgICAgIHNlbGVjdGVkTG9jYXRpb24sXG4gICAgICAgIGxvY2F0aW9uVHlwZSxcbiAgICAgICAgZmlsdGVyQ3JpdGVyaWFcbiAgICB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX09QRFxuXG5cdGNvbnN0IHtcblx0XHRpcGRfaG9zcGl0YWxfZGV0YWlsX2luZm8sXG5cdFx0SE9TUElUQUxfREVUQUlMX0xPQURFRCxcblx0XHRjb21tb25TZWxlY3RlZENyaXRlcmlhcyxcblx0XHRsb2NhdGlvbkZldGNoZWQsXG5cdFx0c2VsZWN0ZWRDcml0ZXJpYXMsXG5cdFx0aG9zcGl0YWxDb21tZW50c1xuXHR9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX0lQRFxuXG5cdHJldHVybiB7XG5cdFx0c2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgbG9jYXRpb25UeXBlLFxuICAgICAgICBpcGRfaG9zcGl0YWxfZGV0YWlsX2luZm8sXG4gICAgICAgIEhPU1BJVEFMX0RFVEFJTF9MT0FERUQsXG4gICAgICAgIGNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLFxuICAgICAgICBsb2NhdGlvbkZldGNoZWQsXG4gICAgICAgIHNlbGVjdGVkQ3JpdGVyaWFzLFxuICAgICAgICBmaWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgaXBkX2NoYXQsXG4gICAgICAgIGlzX2lwZF9mb3JtX3N1Ym1pdHRlZCxcbiAgICAgICAgaG9zcGl0YWxDb21tZW50cyxcbiAgICAgICAgcHJvZmlsZXMsXG4gICAgICAgIGRlZmF1bHRQcm9maWxlXG5cdH1cbn1cblxuY29uc3QgbWFwRGlzcHRhY2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG5cblx0cmV0dXJue1xuXHRcdGdldEhvc3BpdGFEZXRhaWxzOihob3NwaXRhbElkLCBzZWxlY3RlZExvY2F0aW9uLCBzZWFyY2hCeVVybCwgc3BlY2lhbGl6YXRpb25faWQsIGNiKSA9PiBkaXNwYXRjaChnZXRIb3NwaXRhRGV0YWlscyhob3NwaXRhbElkLCBzZWxlY3RlZExvY2F0aW9uLCBzZWFyY2hCeVVybCwgc3BlY2lhbGl6YXRpb25faWQsIGNiKSksXG5cdFx0c2F2ZVByb2ZpbGVQcm9jZWR1cmVzOiAoZG9jdG9yX2lkLCBjbGluaWNfaWQsIHByb2NlZHVyZV9pZHMsIGZvcmNlQWRkKSA9PiBkaXNwYXRjaChzYXZlUHJvZmlsZVByb2NlZHVyZXMoZG9jdG9yX2lkLCBjbGluaWNfaWQsIHByb2NlZHVyZV9pZHMsIGZvcmNlQWRkKSksXG5cdFx0c2VsZWN0T3BkVGltZVNMb3Q6IChzbG90LCByZXNjaGVkdWxlLCBhcHBvaW50bWVudElkKSA9PiBkaXNwYXRjaChzZWxlY3RPcGRUaW1lU0xvdChzbG90LCByZXNjaGVkdWxlLCBhcHBvaW50bWVudElkKSksXG5cdFx0Y2xvbmVDb21tb25TZWxlY3RlZENyaXRlcmlhczogKHNlbGVjdGVkQ3JpdGVyaWFzKSA9PiBkaXNwYXRjaChjbG9uZUNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzKHNlbGVjdGVkQ3JpdGVyaWFzKSksXG5cdFx0dG9nZ2xlSVBEQ3JpdGVyaWE6IChjcml0ZXJpYSwgZm9yY2VBZGQpID0+IGRpc3BhdGNoKHRvZ2dsZUlQRENyaXRlcmlhKGNyaXRlcmlhLCBmb3JjZUFkZCkpLFxuXHRcdG1lcmdlT1BEU3RhdGU6IChzdGF0ZSkgPT4gZGlzcGF0Y2gobWVyZ2VPUERTdGF0ZShzdGF0ZSkpLFxuXHRcdGlwZENoYXRWaWV3OiAoZGF0YSkgPT4gZGlzcGF0Y2goaXBkQ2hhdFZpZXcoZGF0YSkpLFxuXHRcdGNoZWNrSXBkQ2hhdEFnZW50U3RhdHVzOiAoY2IpID0+IGRpc3BhdGNoKGNoZWNrSXBkQ2hhdEFnZW50U3RhdHVzKGNiKSksXG5cdFx0Z2V0SG9zcGl0YWxDb21tZW50czogKGhvc3BpdGFsSWQpID0+IGRpc3BhdGNoKGdldEhvc3BpdGFsQ29tbWVudHMoaG9zcGl0YWxJZCkpLFxuXHRcdHBvc3RIb3NwaXRhbENvbW1lbnRzOiAocG9zdERhdGEsIGNiKT0+IGRpc3BhdGNoKHBvc3RIb3NwaXRhbENvbW1lbnRzKHBvc3REYXRhLCBjYikpLFxuXHRcdG1lcmdlSXBkQ3JpdGVyaWE6IChmaWx0ZXJDcml0ZXJpYSk9PiBkaXNwYXRjaChtZXJnZUlwZENyaXRlcmlhKGZpbHRlckNyaXRlcmlhKSksXG5cdFx0Y2xlYXJWaXBTZWxlY3RlZFBsYW46KCkgPT4gZGlzcGF0Y2goY2xlYXJWaXBTZWxlY3RlZFBsYW4oKSksXG5cdFx0Tm9uSXBkQm9va2luZ0xlYWQ6KGRhdGEsY2IpID0+ZGlzcGF0Y2goTm9uSXBkQm9va2luZ0xlYWQoZGF0YSwgY2IpKSxcblx0fVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3B0YWNoVG9Qcm9wcykoSG9zcGl0YWxEZXRhaWwpIl0sInNvdXJjZVJvb3QiOiIifQ==