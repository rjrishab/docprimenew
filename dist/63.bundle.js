(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var doctorData = false;

var HospitalAboutUsView = function (_React$Component) {
     _inherits(HospitalAboutUsView, _React$Component);

     function HospitalAboutUsView(props) {
          _classCallCheck(this, HospitalAboutUsView);

          var _this = _possibleConstructorReturn(this, (HospitalAboutUsView.__proto__ || Object.getPrototypeOf(HospitalAboutUsView)).call(this, props));

          _this.state = {
               readMore: doctorData
          };
          return _this;
     }

     _createClass(HospitalAboutUsView, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
               this.setState({ readMore: true });
               // this.renderAbout(this.props)
          }
     }, {
          key: 'render',
          value: function render() {
               var _this2 = this;

               var hospital_data = this.props.hospital_data;

               var aboutText = '';
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
                         { className: 'fw-700 text-primary show-less-ipd', style: { cursor: 'pointer' }, onClick: function onClick() {
                                   _this2.setState({ readMore: !_this2.state.readMore });
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
     }]);

     return HospitalAboutUsView;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _reactImageLightbox = __webpack_require__(/*! react-image-lightbox */ "./node_modules/react-image-lightbox/dist/index.es.js");

var _reactImageLightbox2 = _interopRequireDefault(_reactImageLightbox);

var _RatingStars = __webpack_require__(/*! ../commons/ratingsProfileView/RatingStars */ "./dev/js/components/commons/ratingsProfileView/RatingStars.js");

var _RatingStars2 = _interopRequireDefault(_RatingStars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Lightbox from '../../helpers/lightbox';


var HospitalInfoView = function (_React$Component) {
  _inherits(HospitalInfoView, _React$Component);

  function HospitalInfoView(props) {
    _classCallCheck(this, HospitalInfoView);

    var _this = _possibleConstructorReturn(this, (HospitalInfoView.__proto__ || Object.getPrototypeOf(HospitalInfoView)).call(this, props));

    _this.state = {
      photoIndex: 0,
      isOpen: false
    };
    return _this;
  }

  _createClass(HospitalInfoView, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var hospital_data = this.props.hospital_data;
      var _state = this.state,
          photoIndex = _state.photoIndex,
          isOpen = _state.isOpen;


      var name = '';
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
        hospital_data.images && hospital_data.images.length ? _react2.default.createElement('div', { className: 'banner', style: { backgroundImage: 'url(' + hospital_data.images[0].original + ')' } }) : '',
        _react2.default.createElement(
          'div',
          { className: 'hospital-details' },
          hospital_data.logo ? _react2.default.createElement(
            'div',
            { className: 'hosNme' },
            _react2.default.createElement(
              'div',
              { className: 'hs-nme hsptName hsptWidget ' + (this.props.showPopup ? 'popupTopChange' : '') },
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
              { href: 'https://www.google.com/maps/search/?api=1&query=' + hospital_data.lat + ',' + hospital_data.long, style: { float: 'right', cursor: 'pointer' }, target: '_blank' },
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
              hospital_data.bed_count + ' beds'
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
                hospital_data.images.slice(0, 4).map(function (image, i) {
                  return _react2.default.createElement(
                    'span',
                    { key: i },
                    _react2.default.createElement(
                      'a',
                      { href: image.original, onClick: function onClick(e) {
                          e.preventDefault();
                          e.stopPropagation();
                        } },
                      _react2.default.createElement('img', { className: 'bg-img-box img-fluid', alt: hospital_data.name + ': Photo' + (i + 1), src: image.original, onClick: function onClick() {
                          return _this2.setState({ isOpen: true, photoIndex: i });
                        } })
                    )
                  );
                }),
                isOpen && _react2.default.createElement(_reactImageLightbox2.default, {
                  mainSrc: hospital_data.images[photoIndex].original,
                  nextSrc: hospital_data.images[(photoIndex + 1) % hospital_data.images.length].original,
                  prevSrc: hospital_data.images[(photoIndex + hospital_data.images.length - 1) % hospital_data.images.length].original,
                  onCloseRequest: function onCloseRequest() {
                    return _this2.setState({ isOpen: false });
                  },
                  onMovePrevRequest: function onMovePrevRequest() {
                    return _this2.setState({
                      photoIndex: (photoIndex + hospital_data.images.length - 1) % hospital_data.images.length
                    });
                  },
                  onMoveNextRequest: function onMoveNextRequest() {
                    return _this2.setState({
                      photoIndex: (photoIndex + 1) % hospital_data.images.length
                    });
                  }
                }),
                hospital_data.images.length > 4 ? _react2.default.createElement(
                  'span',
                  { className: 'btn-more-img', onClick: function onClick() {
                      return _this2.setState({ isOpen: true, photoIndex: 4 });
                    } },
                  '+' + (hospital_data.images.length - 4),
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
                  { style: { borderRadius: '25px' }, href: 'tel:' + hospital_data.contact_number, className: 'dpp-btn-book d-lg-none d-flex' },
                  _react2.default.createElement('img', { src: "/assets" + "/images/call-round.png", alt: '', className: 'img-fluid img-map', style: { width: '20px' }, onClick: function onClick() {
                      var gtmData = {
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
  }]);

  return HospitalInfoView;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HospitalLocationView = function (_React$Component) {
  _inherits(HospitalLocationView, _React$Component);

  function HospitalLocationView() {
    _classCallCheck(this, HospitalLocationView);

    return _possibleConstructorReturn(this, (HospitalLocationView.__proto__ || Object.getPrototypeOf(HospitalLocationView)).apply(this, arguments));
  }

  _createClass(HospitalLocationView, [{
    key: "render",
    value: function render() {
      var hospital_data = this.props.hospital_data;

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
            hospital_data.other_network_hospitals.map(function (location, i) {
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
  }]);

  return HospitalLocationView;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HospitalServicesView = function (_React$Component) {
	_inherits(HospitalServicesView, _React$Component);

	function HospitalServicesView() {
		_classCallCheck(this, HospitalServicesView);

		return _possibleConstructorReturn(this, (HospitalServicesView.__proto__ || Object.getPrototypeOf(HospitalServicesView)).apply(this, arguments));
	}

	_createClass(HospitalServicesView, [{
		key: "render",
		value: function render() {
			var hospital_data = this.props.hospital_data;

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
						hospital_data.services.map(function (service, i) {
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
	}]);

	return HospitalServicesView;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HospitalTreatmentView = function (_React$Component) {
  _inherits(HospitalTreatmentView, _React$Component);

  function HospitalTreatmentView(props) {
    _classCallCheck(this, HospitalTreatmentView);

    var _this = _possibleConstructorReturn(this, (HospitalTreatmentView.__proto__ || Object.getPrototypeOf(HospitalTreatmentView)).call(this, props));

    _this.state = {
      treatment: [],
      fromServer: true
    };
    return _this;
  }

  _createClass(HospitalTreatmentView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ fromServer: false });
    }
  }, {
    key: 'toggleTreatment',
    value: function toggleTreatment(id) {
      var treatment = this.state.treatment;
      var found = false;
      treatment = this.state.treatment.filter(function (ipd) {
        if (ipd == id) {
          found = true;
          return false;
        }
        return true;
      });

      if (!found) {
        var gtmData = {
          'Category': 'ConsumerApp', 'Action': 'IpdTreatmentCategoryClickedDetailPage', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-treatment-category-clicked-detail-page', 'selectedId': id || ''
        };
        _gtm2.default.sendEvent({ data: gtmData });

        treatment.push(id);
      }
      this.setState({ treatment: treatment });
    }
  }, {
    key: 'goToIpdSearch',
    value: function goToIpdSearch(ipd, e) {
      e.preventDefault();
      var gtmData = {
        'Category': 'ConsumerApp', 'Action': 'IpdTreatmentSelectedDetailPage', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-treatment-selected-detail-page', 'selectedId': ipd.id || ''
      };
      _gtm2.default.sendEvent({ data: gtmData });

      var selectedCriteria = {};
      selectedCriteria.type = 'ipd';
      selectedCriteria.id = ipd.id;
      selectedCriteria.name = '';
      this.props.toggleIPDCriteria(selectedCriteria, true);
      if (ipd.url) {
        this.props.history.push('/' + ipd.url + '?showPopup=true');
      } else {
        this.props.history.push('/ipdInfo?ipd_id=' + ipd.id);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var hospital_data = this.props.hospital_data;

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
            hospital_data.ipd_procedure_categories.map(function (treatment, i) {
              return _react2.default.createElement(
                'li',
                { key: i },
                _react2.default.createElement(
                  'h3',
                  { className: 'accordian-head', onClick: _this2.toggleTreatment.bind(_this2, treatment.id) },
                  treatment.name + ' (' + treatment.ipd_procedures.length + ')',
                  _this2.state.treatment.indexOf(treatment.id) > -1 ? _react2.default.createElement('img', { className: '', src: "/assets" + "/images/up-arrow.png" }) : _react2.default.createElement('img', { className: '', src: "/assets" + "/images/down-arrow.png" })
                ),
                _this2.state.treatment.indexOf(treatment.id) > -1 || _this2.state.fromServer ? _react2.default.createElement(
                  'p',
                  { className: 'accordian-dtl' },
                  treatment.ipd_procedures.map(function (ipd, k) {
                    return _react2.default.createElement(
                      'h4',
                      { key: ipd.id },
                      _react2.default.createElement(
                        'a',
                        { href: ipd.url ? '/' + ipd.url : '/ipdInfo?ipd_id=' + ipd.id, onClick: _this2.goToIpdSearch.bind(_this2, ipd), className: 'treat-anch' },
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
  }]);

  return HospitalTreatmentView;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IpdHospitalCarousel = function (_React$Component) {
    _inherits(IpdHospitalCarousel, _React$Component);

    function IpdHospitalCarousel() {
        _classCallCheck(this, IpdHospitalCarousel);

        return _possibleConstructorReturn(this, (IpdHospitalCarousel.__proto__ || Object.getPrototypeOf(IpdHospitalCarousel)).apply(this, arguments));
    }

    _createClass(IpdHospitalCarousel, [{
        key: 'viewMoreHospital',
        value: function viewMoreHospital() {
            var filterCriteria = {
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
            this.props.history.push('/ipd/searchHospitals');
        }
    }, {
        key: 'navigateTo',
        value: function navigateTo(data, e) {
            e.preventDefault();
            e.stopPropagation();
            var gtmData = {
                'Category': 'ConsumerApp', 'Action': 'OtherLocationHospitalClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'other-location-hospital-clicked', 'selected': '', 'selectedId': data.id || ''
            };
            _gtm2.default.sendEvent({ data: gtmData });

            var redirectUrl = '';

            if (data.url) {
                redirectUrl = '/' + data.url + '?showPopup=true';
            } else {
                redirectUrl = '/ipd/hospital/' + data.id + '?showPopup=true';
            }

            this.props.history.push(redirectUrl);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var hospital_data = this.props.hospital_data;


            return _react2.default.createElement(
                'div',
                { className: 'ipd-carousel-container' },
                _react2.default.createElement(
                    'h3',
                    { className: 'othr-cntr' },
                    'Other Locations of ' + hospital_data.name_city,
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
                        hospital_data.other_network_hospitals.slice(0, 10).map(function (hospital, key) {
                            return _react2.default.createElement(
                                'div',
                                { key: key, className: 'ipd-carousel-card', onClick: _this2.navigateTo.bind(_this2, hospital) },
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
    }]);

    return IpdHospitalCarousel;
}(_react2.default.Component);

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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

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

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _nonIpdPopup = __webpack_require__(/*! ../commons/nonIpdPopup.js */ "./dev/js/components/commons/nonIpdPopup.js");

var _nonIpdPopup2 = _interopRequireDefault(_nonIpdPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import RatingView from './RatingView.js'

// import HospitalGallery from './HospitalGallery.js'


var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

//View all rating for hospital ,content_type = 3

var HospitalDetailView = function (_React$Component) {
	_inherits(HospitalDetailView, _React$Component);

	function HospitalDetailView(props) {
		_classCallCheck(this, HospitalDetailView);

		var _this = _possibleConstructorReturn(this, (HospitalDetailView.__proto__ || Object.getPrototypeOf(HospitalDetailView)).call(this, props));

		var parsed = queryString.parse(_this.props.location.search);
		_this.state = {
			seoFriendly: _this.props.match.url.includes('-hpp'),
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
		return _this;
	}

	_createClass(HospitalDetailView, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			if (window) {
				window.scrollTo(0, 0);
			}

			var hospital_id = this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.id ? this.props.ipd_hospital_detail.id : this.props.match.params.hospitalId || '';
			var gtmData = {
				'Category': 'ConsumerApp', 'Action': 'IpdHospitalDetailPageLanded', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-hospital-detail-page-landed', selectedId: hospital_id
			};
			_gtm2.default.sendEvent({ data: gtmData });

			var section = document.querySelectorAll(".ipd-tb-tabs");
			var sections = {};
			var i = 0;

			var headerHeight = 35;
			if (document.getElementsByClassName('ipd-tabs-container') && document.getElementsByClassName('ipd-tabs-container').length) {
				headerHeight = document.getElementsByClassName('ipd-tabs-container')[0].offsetHeight;
			}
			headerHeight = -headerHeight;
			Object.keys(this.refs).forEach(function (prp, i) {

				sections[prp] = _this2.refs[prp].offsetTop + headerHeight;
			});

			var self = this;
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

			var parsed = queryString.parse(this.props.location.search);

			if (parsed.type && this.refs[parsed.type]) {
				this.toggleTabs(parsed.type);
			}

			if (window.location.href.includes('type#')) {
				var type = window.location.href.split('#');
				if (type.length == 2 && this.refs[type[1]]) {
					this.toggleTabs(type[1]);
				}
			}

			setTimeout(function () {
				_this2.setState({ showForcedPopup: true });
			}, 1000);
		}
	}, {
		key: 'getCostEstimateClicked',
		value: function getCostEstimateClicked() {
			var parsed = queryString.parse(this.props.location.search);
			var ipd_id = this.props.commonSelectedCriterias.length ? this.props.commonSelectedCriterias[0].id : null;
			var hospital_id = this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.id ? this.props.ipd_hospital_detail.id : '';
			var gtmData = {
				'Category': 'ConsumerApp', 'Action': 'IpdGetCostEstimateClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-get-cost-estimate-clicked', selectedId: ipd_id || '', hospitalId: hospital_id
			};
			_gtm2.default.sendEvent({ data: gtmData });

			if (parsed.fromProcedure) {} else {
				ipd_id = null;
				var selectedCriteria = [];
				this.props.toggleIPDCriteria(selectedCriteria, true);
			}

			this.props.history.push('/ipd/' + (ipd_id ? ipd_id : 'price') + '/getPriceEstimate?hospital_id=' + hospital_id);
		}
	}, {
		key: 'viewDoctorsClicked',
		value: function viewDoctorsClicked() {
			var specializationId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
			var e = arguments[1];

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
			var self = this;
			var hospital_id = this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.id ? this.props.ipd_hospital_detail.id : '';
			var doctor_name = '';
			var hospital_name = '';
			var state = {};

			if (specializationId) {
				this.props.cloneCommonSelectedCriterias({ id: specializationId, type: 'speciality' });
			}

			state = {
				filterCriteria: _extends({}, self.props.filterCriteria, {
					hospital_id: hospital_id, doctor_name: doctor_name, hospital_name: hospital_name
				}),
				nextFilterCriteria: _extends({}, self.props.filterCriteria, {
					hospital_id: hospital_id, doctor_name: doctor_name, hospital_name: hospital_name
				})
			};

			this.props.mergeOPDState(state);
			this.props.history.push('/opd/searchresults');
		}
	}, {
		key: 'toggleTabs',
		value: function toggleTabs(type) {
			if (document.getElementById(type)) {
				var gtmData = {
					'Category': 'ConsumerApp', 'Action': 'HospitalPageIpdTabClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'hospital-page-ipd-tab-clicked', type: type
				};
				_gtm2.default.sendEvent({ data: gtmData });

				var headerHeight = this.refs[type].offsetTop;
				var tabheight = 35;
				if (document.getElementsByClassName('ipd-tabs-container') && document.getElementsByClassName('ipd-tabs-container').length) {
					tabheight = document.getElementsByClassName('ipd-tabs-container')[0].offsetHeight;
				}
				headerHeight = headerHeight - tabheight;
				this.setState({ toggleTabType: type });
				window.scrollTo(0, headerHeight);
			}
		}
	}, {
		key: 'getSpecializationName',
		value: function getSpecializationName() {

			if (this.props.ipd_hospital_detail.specialization_doctors && this.props.ipd_hospital_detail.specialization_doctors.specializations && this.props.ipd_hospital_detail.specialization_doctors.specializations.length) {

				var name = this.props.ipd_hospital_detail.specialization_doctors.specializations.map(function (x) {
					return x.name;
				}).join(',') || '';
				name = name + ' ';
				return 'View all ' + this.props.ipd_hospital_detail.specialization_doctors.count + ' ' + name + ' ';
			}

			return 'View all ' + this.props.ipd_hospital_detail.specialization_doctors.count + ' Doctors';
		}
	}, {
		key: 'submitLeadFormGeneration',
		value: function submitLeadFormGeneration(ipdFormParams) {
			if (close) {
				var gtmData = {
					'Category': 'ConsumerApp', 'Action': 'IpdHospitalDetailPageFormClosed', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-hospital-detail-page-form-closed'
				};
				_gtm2.default.sendEvent({ data: gtmData });
			}
			/*let ipd_data = {
   	showChat: true,
   	ipdFormParams: ipdFormParams,
   	hospital:this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.id?this.props.ipd_hospital_detail.id:''
   }*/

			this.setState({ showLeadForm: false, ipdFormParams: ipdFormParams }, function () {
				/*this.props.checkIpdChatAgentStatus((response)=> {
    	if(response && response.users && response.users.length) {
    			// this.props.ipdChatView({showIpdChat:true, ipdForm: ipdFormParams, showMinimize: true})
    	}
    })*/
				// this.props.showChatView(ipd_data)	
			});
		}
	}, {
		key: 'applyQuickFilters',
		value: function applyQuickFilters(category) {
			var gtmData = {
				'Category': 'ConsumerApp', 'Action': 'IpdHospitalSpecializationSearch', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-hospital-specialization-search', 'specializationId': category.id
			};
			_gtm2.default.sendEvent({ data: gtmData });
			var self = this;

			var hospital_id = this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.id ? this.props.ipd_hospital_detail.id : '';
			var doctor_name = '';
			var hospital_name = '';
			var state = {};
			var specialization_category = [{ id: category.id, type: 'group_ids' }];

			this.props.cloneCommonSelectedCriterias(specialization_category);
			state = {
				filterCriteria: _extends({}, self.props.filterCriteria, {
					hospital_id: hospital_id, doctor_name: doctor_name, hospital_name: hospital_name
				}),
				nextFilterCriteria: _extends({}, self.props.filterCriteria, {
					hospital_id: hospital_id, doctor_name: doctor_name, hospital_name: hospital_name
				})
			};

			this.props.mergeOPDState(state);
			this.props.history.push('/opd/searchresults');
		}
	}, {
		key: 'getInputFocus',
		value: function getInputFocus() {
			var headerHeight = document.getElementById('common_search') ? document.getElementById('common_search').offsetTop : 0;
			headerHeight = headerHeight - 89;
			window.scrollTo(0, headerHeight);
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
		value: function secondIpdFormSubmitted() {
			this.setState({ showSecondPopup: false });
		}
	}, {
		key: 'postReply',
		value: function postReply(e) {
			var _this3 = this;

			e.preventDefault();
			if (!this.state.comment) {
				setTimeout(function () {
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please write valid comment" });
				}, 500);
				return;
			}
			var postData = {
				type: 'hospital',
				id: this.props.ipd_hospital_detail.id,
				comment: this.state.comment,
				name: Object.values(this.props.profiles).length && this.props.profiles[this.props.defaultProfile] ? this.props.profiles[this.props.defaultProfile].name : '',
				email: Object.values(this.props.profiles).length && this.props.profiles[this.props.defaultProfile] ? this.props.profiles[this.props.defaultProfile].email : '',
				parent: this.state.replyOpenFor
			};
			this.props.postHospitalComments(postData, function (error, data) {
				if (data) {
					_this3.setState({ comment: '', replyOpenFor: '' });
					_this3.loadComments();
					setTimeout(function () {
						_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Comment Posted Sucessfully, Awaiting moderation" });
					}, 500);
				} else {
					setTimeout(function () {
						_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Could not post your comment, Try again!" });
					}, 500);
				}
			});
			return;
		}
	}, {
		key: 'loadComments',
		value: function loadComments() {
			this.props.getHospitalComments(this.props.ipd_hospital_detail.id);
		}
	}, {
		key: 'commentReplyClicked',
		value: function commentReplyClicked(id) {
			this.setState({ replyOpenFor: id });
		}
	}, {
		key: 'handleInputComment',
		value: function handleInputComment(e) {
			this.setState({ comment: e.target.value });
		}
	}, {
		key: 'nonIpdLeads',
		value: function nonIpdLeads(phone_number) {
			var _this4 = this;

			var parsed = queryString.parse(this.props.location.search);
			var criteriaStr = this.props.ipd_hospital_detail.name;
			var data = { phone_number: phone_number, lead_source: 'docads', source: parsed, lead_type: 'DOCADS', hospital_name: criteriaStr, exitpoint_url: 'http://docprime.com' + this.props.location.pathname, doctor_id: null, hospital_id: null, doctor_name: null };
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
			var gtm_data = { 'Category': 'ConsumerApp', 'Action': 'DocAdsHppSubmitClick', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'doc-ads-hpp-Submit-click' };
			_gtm2.default.sendEvent({ data: gtm_data });
			if (this.state.is_lead_enabled) {
				this.setState({ is_lead_enabled: false });
				this.props.NonIpdBookingLead(data);
				setTimeout(function () {
					_this4.setState({ is_lead_enabled: true });
				}, 5000);
			}
			this.setState({ to_be_force: 0 });
		}
	}, {
		key: 'closeIpdLeadPopup',
		value: function closeIpdLeadPopup(from) {
			if (from) {
				var data = {
					'Category': 'ConsumerApp', 'Action': 'DocAdsHppCrossClick', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'doc-ads-hpp-cross-click'
				};
				_gtm2.default.sendEvent({ data: data });
				this.setState({ to_be_force: 0 });
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this5 = this,
			    _extends2;

			var parsed = queryString.parse(this.props.location.search);

			var showPopup = parsed.showPopup && this.state.showLeadForm && (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window.ON_LANDING_PAGE && this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.bed_count;

			showPopup = parsed.showPopup && this.state.showLeadForm && !this.props.is_ipd_form_submitted && !this.state.showNonIpdPopup;

			var landing_page = false;
			if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window.ON_LANDING_PAGE) {
				landing_page = true;
			}

			var showForcedPopup = this.state.showLeadForm && landing_page && this.state.seoFriendly && this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.is_ipd_hospital && this.state.showForcedPopup && !this.state.showNonIpdPopup;

			var isUserLogin = Object.values(this.props.profiles).length || _storage2.default.checkAuth();
			var commentsExists = this.props.hospitalComments && this.props.hospitalComments.length ? this.props.hospitalComments.length : null;

			var specialization_data = [];
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
							{ href: '' + (this.props.location && this.props.location.pathname ? this.props.location.pathname + '?type#doctors' : ''), className: 'ipd-tb-tabs ' + (this.state.toggleTabType == 'doctors' ? ' ipd-tb-active' : ''), onClick: function onClick(e) {
									e.preventDefault();
									_this5.toggleTabs('doctors');
								} },
							'Doctors'
						),
						this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.bed_count && false ? _react2.default.createElement(
							'a',
							{ href: '' + (this.props.location && this.props.location.pathname ? this.props.location.pathname + '?type#bookNow' : ''), className: 'ipd-tb-tabs ' + (this.state.toggleTabType == 'bookNow' ? ' ipd-tb-active' : ''), onClick: function onClick(e) {
									e.preventDefault();
									_this5.toggleTabs('bookNow');
								} },
							'Book Now'
						) : '',
						this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.rating_graph && this.props.ipd_hospital_detail.rating_graph.star_count && this.props.ipd_hospital_detail.display_rating_widget ? _react2.default.createElement(
							'a',
							{ href: '' + (this.props.location && this.props.location.pathname ? this.props.location.pathname + '?type#feedback' : ''), className: 'ipd-tb-tabs ' + (this.state.toggleTabType == 'feedback' ? ' ipd-tb-active' : ''), onClick: function onClick(e) {
									e.preventDefault();
									_this5.toggleTabs('feedback');
								} },
							'Feedback'
						) : '',
						this.props.ipd_hospital_detail && this.props.ipd_hospital_detail.offers && this.props.ipd_hospital_detail.offers.length ? _react2.default.createElement(
							'a',
							{ href: '' + (this.props.location && this.props.location.pathname ? this.props.location.pathname + '?type#offers' : ''), className: 'ipd-tb-tabs ' + (this.state.toggleTabType == 'offers' ? ' ipd-tb-active' : ''), onClick: function onClick(e) {
									e.preventDefault();
									_this5.toggleTabs('offers');
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
							this.props.ipd_hospital_detail.all_specialization_groups.map(function (category, j) {
								return _react2.default.createElement(
									'button',
									{ key: j, className: 'srt-act', id: category.id, onClick: _this5.applyQuickFilters.bind(_this5, category) },
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
										(this.props.ipd_hospital_detail.seo_title ? this.props.ipd_hospital_detail.seo_title : this.props.ipd_hospital_detail.name_city ? this.props.ipd_hospital_detail.name_city : '') + ' Doctors List'
									)
								),
								this.props.ipd_hospital_detail.specialization_doctors && this.props.ipd_hospital_detail.specialization_doctors.result.length ? this.props.ipd_hospital_detail.specialization_doctors.result.map(function (doctorCard, i) {
									return _react2.default.createElement(_doctorResultCard2.default, _extends({ details: doctorCard, key: i, rank: i, seoFriendly: _this5.props.ipd_hospital_detail.specialization_doctors.seo }, _this5.props, { isHospitalPage: true }));
								}) : this.props.ipd_hospital_detail.doctors.result.map(function (doctorCard, i) {
									return _react2.default.createElement(_doctorResultCard2.default, _extends({ details: doctorCard, key: i, rank: i, seoFriendly: _this5.props.ipd_hospital_detail.doctors.seo }, _this5.props, { isHospitalPage: true }));
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
									'View all ' + this.props.ipd_hospital_detail.doctors.count + ' Doctors'
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
								'User Comments (' + this.props.hospitalComments.length + ')'
							),
							this.props.hospitalComments.map(function (comment, key) {
								return _react2.default.createElement(_Reply2.default, _extends({ key: comment.id, commentReplyClicked: _this5.commentReplyClicked.bind(_this5), isUserLogin: isUserLogin }, _this5.props, _this5.state, {
									loadComments: _this5.loadComments.bind(_this5), postComment: _this5.props.postHospitalComments,

									postReply: _this5.postReply.bind(_this5), handleInputComment: _this5.handleInputComment.bind(_this5), commentData: comment, commentsExists: commentsExists, hospitalPage: true, hospital_id: _this5.props.ipd_hospital_detail.id,
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
									_react2.default.createElement(_ArticleCommentBox2.default, _extends({}, this.props, this.state, (_extends2 = { parentCommentId: this.state.replyOpenFor, hospitalPage: true }, _defineProperty(_extends2, 'parentCommentId', ''), _defineProperty(_extends2, 'hospital_id', this.props.ipd_hospital_detail.id), _defineProperty(_extends2, 'loadComments', this.loadComments.bind(this)), _defineProperty(_extends2, 'postComment', this.props.postHospitalComments), _extends2)))
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
	}]);

	return HospitalDetailView;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IpdOffers = function (_React$Component) {
	_inherits(IpdOffers, _React$Component);

	function IpdOffers(props) {
		_classCallCheck(this, IpdOffers);

		var _this = _possibleConstructorReturn(this, (IpdOffers.__proto__ || Object.getPrototypeOf(IpdOffers)).call(this, props));

		_this.state = {
			showTnc: false
		};
		return _this;
	}

	_createClass(IpdOffers, [{
		key: "toggleTnC",
		value: function toggleTnC(id) {

			if (this.state.showTnc && document.getElementById(id)) {
				var height = document.getElementById(id).offsetHeight || 0;
				window.scrollTo(0, height);
			}
			this.setState({ showTnc: !this.state.showTnc });
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

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
						this.props.offers.map(function (offer, i) {
							return _react2.default.createElement(
								"div",
								{ className: "ipd-ofr-main", id: i + "_offer", key: i },
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
									offer.show_tnc && _this2.state.showTnc ? _react2.default.createElement(
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
										_this2.state.showTnc ? _react2.default.createElement(
											"p",
											{ className: "show-hide-offr cursor-pntr", onClick: _this2.toggleTnC.bind(_this2, i + "_offer") },
											"Hide Details ",
											_react2.default.createElement("img", { className: "offshowIcon ofhideIcon ", style: { width: '7px', marginLeft: '5px' }, src: "/assets" + '/img/right-sc.svg' })
										) : _react2.default.createElement(
											"p",
											{ className: "show-hide-offr cursor-pntr", onClick: _this2.toggleTnC.bind(_this2, i + "_offer") },
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
	}]);

	return IpdOffers;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BreadcrumbView = function (_React$Component) {
    _inherits(BreadcrumbView, _React$Component);

    function BreadcrumbView() {
        _classCallCheck(this, BreadcrumbView);

        return _possibleConstructorReturn(this, (BreadcrumbView.__proto__ || Object.getPrototypeOf(BreadcrumbView)).apply(this, arguments));
    }

    _createClass(BreadcrumbView, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                "section",
                null,
                this.props.breadcrumb && this.props.breadcrumb.length ? _react2.default.createElement(
                    "section",
                    { className: "" },
                    _react2.default.createElement(
                        "ul",
                        { className: "mrb-10 breadcrumb-list breadcrumb-list-ul", style: { 'wordBreak': 'breakWord', marginTop: '0px', marginBottom: '10px' } },
                        this.props.breadcrumb.map(function (data, key) {
                            return _react2.default.createElement(
                                "li",
                                { className: "breadcrumb-list-item", key: key },
                                key == _this2.props.breadcrumb.length - 1 ? _react2.default.createElement(
                                    "span",
                                    null,
                                    data.title
                                ) : _react2.default.createElement(
                                    "a",
                                    { href: data.url, title: data.link_title || data.title, onClick: function onClick(e) {
                                            e.preventDefault();
                                            _this2.props.history.push(key == 0 || key == _this2.props.breadcrumb.length - 1 ? data.url : "/" + data.url);
                                        } },
                                    key == 0 || key == _this2.props.breadcrumb.length - 1 ? _react2.default.createElement(
                                        "span",
                                        { className: "fw-500 breadcrumb-title breadcrumb-colored-title" },
                                        data.title
                                    ) : _react2.default.createElement(
                                        "span",
                                        { className: "fw-500 breadcrumb-title breadcrumb-colored-title d-inline-blck" },
                                        data.title
                                    )
                                ),
                                key != _this2.props.breadcrumb.length - 1 ? _react2.default.createElement(
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
    }]);

    return BreadcrumbView;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IpdQnA = function (_React$Component) {
  _inherits(IpdQnA, _React$Component);

  function IpdQnA(props) {
    _classCallCheck(this, IpdQnA);

    var _this = _possibleConstructorReturn(this, (IpdQnA.__proto__ || Object.getPrototypeOf(IpdQnA)).call(this, props));

    _this.state = {
      treatment: [],
      getAns: true
    };
    return _this;
  }

  _createClass(IpdQnA, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ getAns: false });
    }
  }, {
    key: 'toggleTreatment',
    value: function toggleTreatment(id) {
      var treatment = this.state.treatment;
      var found = false;
      treatment = this.state.treatment.filter(function (ipd) {
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
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var hospital_data = this.props.hospital_data;


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
            hospital_data.question_answers.map(function (treatment, i) {
              return _react2.default.createElement(
                'li',
                { key: i },
                _react2.default.createElement(
                  'h3',
                  { className: 'accordian-head fw-500', onClick: _this2.toggleTreatment.bind(_this2, treatment.id) },
                  '' + treatment.name,
                  _this2.state.treatment.indexOf(treatment.id) > -1 ? _react2.default.createElement('img', { className: '', src: "/assets" + "/images/up-arrow.png" }) : _react2.default.createElement('img', { className: '', src: "/assets" + "/images/down-arrow.png" })
                ),
                _this2.state.treatment.indexOf(treatment.id) > -1 || _this2.state.getAns ? _react2.default.createElement('p', { className: 'accordian-dtl', style: { textAlign: 'justify', fontSize: '14px' }, dangerouslySetInnerHTML: { __html: treatment.answer } }) : ''
              );
            })
          )
        )
      );
    }
  }]);

  return IpdQnA;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var HospitalDetail = function (_React$Component) {
	_inherits(HospitalDetail, _React$Component);

	function HospitalDetail(props) {
		_classCallCheck(this, HospitalDetail);

		var _this = _possibleConstructorReturn(this, (HospitalDetail.__proto__ || Object.getPrototypeOf(HospitalDetail)).call(this, props));

		var h_id = _this.props.match.params.hospitalId || _this.get_hospital_id_by_url(_this.props.match.url);
		_this.state = {
			specialization_id: null,
			hospital_id: h_id,
			is_seo: _this.props.match.url.includes('-hpp'),
			showIpdChat: false
		};
		return _this;
	}

	_createClass(HospitalDetail, [{
		key: 'get_hospital_id_by_url',
		value: function get_hospital_id_by_url(url) {
			for (var d_id in this.props.ipd_hospital_detail_info) {
				if (this.props.ipd_hospital_detail_info[d_id].canonical_url && url && url.includes(this.props.ipd_hospital_detail_info[d_id].canonical_url)) {
					return d_id;
				}
			}
			return null;
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var searchUrl = null;
			if (this.props.match.url.includes('-hpp')) {
				searchUrl = this.props.match.url.toLowerCase();
			}

			var parsed = queryString.parse(this.props.location.search);
			var specialization_id = '';
			if (parsed.specialization_id) {
				specialization_id = parsed.specialization_id;
				this.setState({ specialization_id: parsed.specialization_id });
			}
			var hospitalId = searchUrl ? '' : this.props.match.params.hospitalId;
			//if(!this.state.hospital_id || !this.props.ipd_hospital_detail_info || !this.props.ipd_hospital_detail_info[this.state.hospital_id]) {
			this.props.getHospitaDetails(hospitalId, this.props.selectedLocation, searchUrl, specialization_id, function (resp) {
				if (resp && resp.status && resp.status == 301) {
					_this2.props.history.push('/' + resp.url);
				} else if (resp && resp.id) {
					_this2.props.getHospitalComments(resp.id);
					_this2.setState({ hospital_id: resp.id });
				}
			});
			//}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var _this3 = this;

			if (this.props.locationFetched != nextProps.locationFetched) {
				var searchUrl = null;
				if (this.props.match.url.includes('-hpp')) {
					searchUrl = this.props.match.url.toLowerCase();
				}

				var parsed = queryString.parse(this.props.location.search);
				var specialization_id = '';
				if (parsed.specialization_id) {
					specialization_id = parsed.specialization_id;
					this.setState({ specialization_id: parsed.specialization_id });
				}

				// if(!this.state.hospital_id || !nextProps.ipd_hospital_detail_info || !nextProps.ipd_hospital_detail_info[this.state.hospital_id]) {

				this.props.getHospitaDetails(this.props.match.params.hospitalId, nextProps.selectedLocation, searchUrl, specialization_id, function (resp) {
					if (resp && resp.status && resp.status == 301) {
						_this3.props.history.push('/' + resp.url);
					} else if (resp && resp.id) {
						_this3.props.getHospitalComments(resp.id);
						_this3.setState({ hospital_id: resp.id });
					}
				});
				//}
			}
		}
	}, {
		key: 'getMetaTagsData',
		value: function getMetaTagsData(seoData) {
			var title = "Hospital Profile Page";
			var description = "";
			var schema = {};
			if (seoData) {
				title = seoData && seoData.seo && seoData.seo.title ? seoData.seo.title : seoData.name_city ? seoData.name_city + ' | Book Appointment, Check Doctors List, Reviews, Contact Number' : '';
				description = seoData && seoData.seo && seoData.seo.description ? seoData.seo.description : seoData.name_city ? seoData.name_city + ' : Get free booking on first appointment.Check ' + (seoData.name ? seoData.name : '') + ' Doctors List, Reviews, Contact Number, Address, Procedures and more.' : '';
			}
			return { title: title, description: description, schema: schema };
		}
	}, {
		key: 'showChatView',
		value: function showChatView() {
			var showIpd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


			this.setState({ showIpdChat: true });
		}
	}, {
		key: 'getSchema',
		value: function getSchema(ipd_hospital_detail) {
			var hospital_schema = "";
			var breadcrumb_schema = "";
			var itemList_schema = "";
			if (ipd_hospital_detail && ipd_hospital_detail.seo && ipd_hospital_detail.seo.all_schema) {
				ipd_hospital_detail.seo.all_schema.map(function (schema) {
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
			return { hospital_schema: hospital_schema, breadcrumb_schema: breadcrumb_schema, itemList_schema: itemList_schema };
		}
	}, {
		key: 'render',
		value: function render() {

			var ipd_hospital_detail = this.state.hospital_id && this.props.ipd_hospital_detail_info && this.props.ipd_hospital_detail_info[this.state.hospital_id] ? this.props.ipd_hospital_detail_info[this.state.hospital_id] : {};

			var _getSchema = this.getSchema(ipd_hospital_detail),
			    hospital_schema = _getSchema.hospital_schema,
			    breadcrumb_schema = _getSchema.breadcrumb_schema,
			    itemList_schema = _getSchema.itemList_schema;

			var isSeoValid = true;
			if (_config2.default.SEO_FRIENDLY_HOSPITAL_IDS && this.state.hospital_id && _config2.default.SEO_FRIENDLY_HOSPITAL_IDS.indexOf(parseInt(this.state.hospital_id)) > -1) {
				isSeoValid = false;
			}
			return _react2.default.createElement(
				'div',
				{ className: 'profile-body-wrap' },
				_react2.default.createElement(_DesktopProfileHeader2.default, { showSearch: true, pageType: 'HospitalDetailPage', new_fixed_header: 1 }),
				_react2.default.createElement(_HelmetTags2.default, { tagsData: {
						canonicalUrl: '' + _config2.default.API_BASE_URL + this.props.match.url,
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
	}], [{
		key: 'loadData',
		value: function loadData(store, match, query) {
			var searchUrl = null;
			if (match.url.includes('-hpp')) {
				searchUrl = match.url.toLowerCase();
			}
			return new Promise(function (resolve, reject) {
				try {

					return store.dispatch((0, _index.getHospitaDetails)(match.params.hospitalId, null, searchUrl, query.specialization_id || '', function (resp) {
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
	}]);

	return HospitalDetail;
}(_react2.default.Component);

HospitalDetail.contextTypes = {
	router: function router() {
		return null;
	}
};


var mapStateToProps = function mapStateToProps(state) {
	var _state$USER = state.USER,
	    ipd_chat = _state$USER.ipd_chat,
	    is_ipd_form_submitted = _state$USER.is_ipd_form_submitted,
	    profiles = _state$USER.profiles,
	    defaultProfile = _state$USER.defaultProfile;
	var _state$SEARCH_CRITERI = state.SEARCH_CRITERIA_OPD,
	    selectedLocation = _state$SEARCH_CRITERI.selectedLocation,
	    locationType = _state$SEARCH_CRITERI.locationType,
	    filterCriteria = _state$SEARCH_CRITERI.filterCriteria;
	var _state$SEARCH_CRITERI2 = state.SEARCH_CRITERIA_IPD,
	    ipd_hospital_detail_info = _state$SEARCH_CRITERI2.ipd_hospital_detail_info,
	    HOSPITAL_DETAIL_LOADED = _state$SEARCH_CRITERI2.HOSPITAL_DETAIL_LOADED,
	    commonSelectedCriterias = _state$SEARCH_CRITERI2.commonSelectedCriterias,
	    locationFetched = _state$SEARCH_CRITERI2.locationFetched,
	    selectedCriterias = _state$SEARCH_CRITERI2.selectedCriterias,
	    hospitalComments = _state$SEARCH_CRITERI2.hospitalComments;


	return {
		selectedLocation: selectedLocation,
		locationType: locationType,
		ipd_hospital_detail_info: ipd_hospital_detail_info,
		HOSPITAL_DETAIL_LOADED: HOSPITAL_DETAIL_LOADED,
		commonSelectedCriterias: commonSelectedCriterias,
		locationFetched: locationFetched,
		selectedCriterias: selectedCriterias,
		filterCriteria: filterCriteria,
		ipd_chat: ipd_chat,
		is_ipd_form_submitted: is_ipd_form_submitted,
		hospitalComments: hospitalComments,
		profiles: profiles,
		defaultProfile: defaultProfile
	};
};

var mapDisptachToProps = function mapDisptachToProps(dispatch) {

	return {
		getHospitaDetails: function getHospitaDetails(hospitalId, selectedLocation, searchByUrl, specialization_id, cb) {
			return dispatch((0, _index.getHospitaDetails)(hospitalId, selectedLocation, searchByUrl, specialization_id, cb));
		},
		saveProfileProcedures: function saveProfileProcedures(doctor_id, clinic_id, procedure_ids, forceAdd) {
			return dispatch((0, _index.saveProfileProcedures)(doctor_id, clinic_id, procedure_ids, forceAdd));
		},
		selectOpdTimeSLot: function selectOpdTimeSLot(slot, reschedule, appointmentId) {
			return dispatch((0, _index.selectOpdTimeSLot)(slot, reschedule, appointmentId));
		},
		cloneCommonSelectedCriterias: function cloneCommonSelectedCriterias(selectedCriterias) {
			return dispatch((0, _index.cloneCommonSelectedCriterias)(selectedCriterias));
		},
		toggleIPDCriteria: function toggleIPDCriteria(criteria, forceAdd) {
			return dispatch((0, _index.toggleIPDCriteria)(criteria, forceAdd));
		},
		mergeOPDState: function mergeOPDState(state) {
			return dispatch((0, _index.mergeOPDState)(state));
		},
		ipdChatView: function ipdChatView(data) {
			return dispatch((0, _index.ipdChatView)(data));
		},
		checkIpdChatAgentStatus: function checkIpdChatAgentStatus(cb) {
			return dispatch((0, _index.checkIpdChatAgentStatus)(cb));
		},
		getHospitalComments: function getHospitalComments(hospitalId) {
			return dispatch((0, _index.getHospitalComments)(hospitalId));
		},
		postHospitalComments: function postHospitalComments(postData, cb) {
			return dispatch((0, _index.postHospitalComments)(postData, cb));
		},
		mergeIpdCriteria: function mergeIpdCriteria(filterCriteria) {
			return dispatch((0, _index.mergeIpdCriteria)(filterCriteria));
		},
		clearVipSelectedPlan: function clearVipSelectedPlan() {
			return dispatch((0, _index.clearVipSelectedPlan)());
		},
		NonIpdBookingLead: function NonIpdBookingLead(data, cb) {
			return dispatch((0, _index.NonIpdBookingLead)(data, cb));
		}
	};
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDisptachToProps)(HospitalDetail);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pcGQvSG9zcGl0YWxBYm91dFVzLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2lwZC9Ib3NwaXRhbEluZm8uanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvaXBkL0hvc3BpdGFsTG9jYXRpb25zLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2lwZC9Ib3NwaXRhbFNlcnZpY2VzLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2lwZC9Ib3NwaXRhbFRyZWF0bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pcGQvSXBkSG9zcGl0YWxEZXRhaWxDYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pcGQvSXBkSG9zcGl0YWxEZXRhaWxWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2lwZC9JcGRPZmZlcnNQYWdlLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2lwZC9icmVhZENydW1iLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2lwZC9pcGRRdWVzdGlvbkFuc3dlci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9pcGQvSXBkSG9zcGl0YWxEZXRhaWwuanMiXSwibmFtZXMiOlsiZG9jdG9yRGF0YSIsIkhvc3BpdGFsQWJvdXRVc1ZpZXciLCJwcm9wcyIsInN0YXRlIiwicmVhZE1vcmUiLCJzZXRTdGF0ZSIsImhvc3BpdGFsX2RhdGEiLCJhYm91dFRleHQiLCJuZXdfYWJvdXQiLCJsZW5ndGgiLCJzbGljZSIsInBhZGRpbmdCb3R0b20iLCJuYW1lIiwiX19odG1sIiwiY3Vyc29yIiwiZm9udFNpemUiLCJkaXNwbGF5IiwidmVydGljYWxBbGlnbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwiSG9zcGl0YWxJbmZvVmlldyIsInBob3RvSW5kZXgiLCJpc09wZW4iLCJzZW9fdGl0bGUiLCJzZW8iLCJoMV90aXRsZSIsIm5hbWVfY2l0eSIsImltYWdlcyIsImJhY2tncm91bmRJbWFnZSIsIm9yaWdpbmFsIiwibG9nbyIsInNob3dQb3B1cCIsInBhZGRpbmdUb3AiLCJhZGRyZXNzIiwibGF0IiwibG9uZyIsImZsb2F0Iiwid2lkdGgiLCJoZWlnaHQiLCJBU1NFVFNfQkFTRV9VUkwiLCJiZWRfY291bnQiLCJtdWx0aV9zcGVjaWFsaXR5IiwibWFyZ2luVG9wIiwibWFwIiwiaW1hZ2UiLCJpIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwib3BkX3RpbWluZ3MiLCJvcGVuX3RvZGF5IiwiY29udGFjdF9udW1iZXIiLCJib3JkZXJSYWRpdXMiLCJndG1EYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VuZEV2ZW50IiwiZGF0YSIsIkhvc3BpdGFsTG9jYXRpb25WaWV3Iiwib3RoZXJfbmV0d29ya19ob3NwaXRhbHMiLCJsb2NhdGlvbiIsIkhvc3BpdGFsU2VydmljZXNWaWV3Iiwic2VydmljZXMiLCJzZXJ2aWNlIiwiaWNvbiIsIkhvc3BpdGFsVHJlYXRtZW50VmlldyIsInRyZWF0bWVudCIsImZyb21TZXJ2ZXIiLCJpZCIsImZvdW5kIiwiZmlsdGVyIiwiaXBkIiwicHVzaCIsInNlbGVjdGVkQ3JpdGVyaWEiLCJ0eXBlIiwidG9nZ2xlSVBEQ3JpdGVyaWEiLCJ1cmwiLCJoaXN0b3J5IiwiaXBkX3Byb2NlZHVyZV9jYXRlZ29yaWVzIiwidG9nZ2xlVHJlYXRtZW50IiwiYmluZCIsImlwZF9wcm9jZWR1cmVzIiwiaW5kZXhPZiIsImsiLCJnb1RvSXBkU2VhcmNoIiwiSXBkSG9zcGl0YWxDYXJvdXNlbCIsImZpbHRlckNyaXRlcmlhIiwiZGlzdGFuY2UiLCJwcm92aWRlcl9pZHMiLCJuZXR3b3JrX2lkIiwibWVyZ2VJcGRDcml0ZXJpYSIsIm5leHRGaWx0ZXJDcml0ZXJpYSIsImNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzIiwibmV4dFNlbGVjdGVkQ3JpdGVyaWFzIiwicmVkaXJlY3RVcmwiLCJ2aWV3TW9yZUhvc3BpdGFsIiwiaG9zcGl0YWwiLCJrZXkiLCJuYXZpZ2F0ZVRvIiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiSG9zcGl0YWxEZXRhaWxWaWV3IiwicGFyc2VkIiwicGFyc2UiLCJzZWFyY2giLCJzZW9GcmllbmRseSIsIm1hdGNoIiwiaW5jbHVkZXMiLCJ0b2dnbGVUYWJUeXBlIiwic2hvd0xlYWRGb3JtIiwiaXBkRm9ybVBhcmFtcyIsInNob3dGb3JjZWRQb3B1cCIsInNob3dTZWNvbmRQb3B1cCIsImZpcnN0TGVhZElkIiwicmVwbHlPcGVuRm9yIiwiY29tbWVudCIsInNob3dOb25JcGRQb3B1cCIsInNob3dfcG9wdXAiLCJ0b19iZV9mb3JjZSIsImlzX2xlYWRfZW5hYmxlZCIsIndpbmRvdyIsInNjcm9sbFRvIiwiaG9zcGl0YWxfaWQiLCJpcGRfaG9zcGl0YWxfZGV0YWlsIiwicGFyYW1zIiwiaG9zcGl0YWxJZCIsInNlbGVjdGVkSWQiLCJzZWN0aW9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2VjdGlvbnMiLCJoZWFkZXJIZWlnaHQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib2Zmc2V0SGVpZ2h0IiwiT2JqZWN0Iiwia2V5cyIsInJlZnMiLCJmb3JFYWNoIiwicHJwIiwib2Zmc2V0VG9wIiwic2VsZiIsIm9uc2Nyb2xsIiwic2Nyb2xsUG9zaXRpb24iLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJib2R5IiwidG9nZ2xlVGFicyIsImhyZWYiLCJzcGxpdCIsInNldFRpbWVvdXQiLCJpcGRfaWQiLCJmcm9tUHJvY2VkdXJlIiwic3BlY2lhbGl6YXRpb25JZCIsImRvY3Rvcl9uYW1lIiwiaG9zcGl0YWxfbmFtZSIsImNsb25lQ29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMiLCJtZXJnZU9QRFN0YXRlIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0YWJoZWlnaHQiLCJzcGVjaWFsaXphdGlvbl9kb2N0b3JzIiwic3BlY2lhbGl6YXRpb25zIiwieCIsImpvaW4iLCJjb3VudCIsImNsb3NlIiwiY2F0ZWdvcnkiLCJzcGVjaWFsaXphdGlvbl9jYXRlZ29yeSIsInJlc3BvbnNlIiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwidGV4dCIsInBvc3REYXRhIiwidmFsdWVzIiwicHJvZmlsZXMiLCJkZWZhdWx0UHJvZmlsZSIsImVtYWlsIiwicGFyZW50IiwicG9zdEhvc3BpdGFsQ29tbWVudHMiLCJlcnJvciIsImxvYWRDb21tZW50cyIsImdldEhvc3BpdGFsQ29tbWVudHMiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBob25lX251bWJlciIsImNyaXRlcmlhU3RyIiwibGVhZF9zb3VyY2UiLCJzb3VyY2UiLCJsZWFkX3R5cGUiLCJleGl0cG9pbnRfdXJsIiwicGF0aG5hbWUiLCJkb2N0b3JfaWQiLCJjb21tb25fdXRtX3RhZ3MiLCJ1dG1fdGFncyIsInZpc2l0b3JfaW5mbyIsImdldFZpc2l0b3JJbmZvIiwidmlzaXRfaWQiLCJ2aXNpdG9yX2lkIiwiZ3RtX2RhdGEiLCJOb25JcGRCb29raW5nTGVhZCIsImZyb20iLCJPTl9MQU5ESU5HX1BBR0UiLCJpc19pcGRfZm9ybV9zdWJtaXR0ZWQiLCJsYW5kaW5nX3BhZ2UiLCJpc19pcGRfaG9zcGl0YWwiLCJpc1VzZXJMb2dpbiIsIlNUT1JBR0UiLCJjaGVja0F1dGgiLCJjb21tZW50c0V4aXN0cyIsImhvc3BpdGFsQ29tbWVudHMiLCJzcGVjaWFsaXphdGlvbl9kYXRhIiwic3VibWl0TGVhZEZvcm1HZW5lcmF0aW9uIiwic2F2ZUxlYWRJZEZvclVwZGF0aW9uIiwiZ2V0X2ZlZWRiYWNrIiwiYWxsX2RvY3RvcnMiLCJhbGxfY2l0aWVzIiwic2Vjb25kSXBkRm9ybVN1Ym1pdHRlZCIsInJhdGluZ19ncmFwaCIsInN0YXJfY291bnQiLCJkaXNwbGF5X3JhdGluZ193aWRnZXQiLCJvZmZlcnMiLCJnZXRJbnB1dEZvY3VzIiwiYWxsX3NwZWNpYWxpemF0aW9uX2dyb3VwcyIsImoiLCJhcHBseVF1aWNrRmlsdGVycyIsImRvY3RvcnMiLCJyZXN1bHQiLCJkb2N0b3JDYXJkIiwidmlld0RvY3RvcnNDbGlja2VkIiwic3BlY2lhbGl6YXRpb25faWQiLCJnZXRTcGVjaWFsaXphdGlvbk5hbWUiLCJyYXRpbmciLCJxdWVzdGlvbl9hbnN3ZXJzIiwiY29tbWVudFJlcGx5Q2xpY2tlZCIsInBvc3RSZXBseSIsImhhbmRsZUlucHV0Q29tbWVudCIsImlwZF9jaGF0IiwiZ2V0Q29zdEVzdGltYXRlQ2xpY2tlZCIsIklwZE9mZmVycyIsInNob3dUbmMiLCJvZmZlciIsInRpdGxlIiwiY291cG9uIiwiZGVzY3JpcHRpb24iLCJzaG93X3RuYyIsInRuYyIsInRvZ2dsZVRuQyIsIm1hcmdpbkxlZnQiLCJCcmVhZGNydW1iVmlldyIsImJyZWFkY3J1bWIiLCJtYXJnaW5Cb3R0b20iLCJsaW5rX3RpdGxlIiwiSXBkUW5BIiwiZ2V0QW5zIiwidGV4dEFsaWduIiwiYW5zd2VyIiwiSG9zcGl0YWxEZXRhaWwiLCJoX2lkIiwiZ2V0X2hvc3BpdGFsX2lkX2J5X3VybCIsImlzX3NlbyIsInNob3dJcGRDaGF0IiwiZF9pZCIsImlwZF9ob3NwaXRhbF9kZXRhaWxfaW5mbyIsImNhbm9uaWNhbF91cmwiLCJzZWFyY2hVcmwiLCJ0b0xvd2VyQ2FzZSIsImdldEhvc3BpdGFEZXRhaWxzIiwic2VsZWN0ZWRMb2NhdGlvbiIsInJlc3AiLCJzdGF0dXMiLCJuZXh0UHJvcHMiLCJsb2NhdGlvbkZldGNoZWQiLCJzZW9EYXRhIiwic2NoZW1hIiwic2hvd0lwZCIsImhvc3BpdGFsX3NjaGVtYSIsImJyZWFkY3J1bWJfc2NoZW1hIiwiaXRlbUxpc3Rfc2NoZW1hIiwiYWxsX3NjaGVtYSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRTY2hlbWEiLCJpc1Nlb1ZhbGlkIiwiQ09ORklHIiwiU0VPX0ZSSUVORExZX0hPU1BJVEFMX0lEUyIsInBhcnNlSW50IiwiY2Fub25pY2FsVXJsIiwiQVBJX0JBU0VfVVJMIiwiZ2V0TWV0YVRhZ3NEYXRhIiwic2hvd0NoYXRWaWV3Iiwic3RvcmUiLCJxdWVyeSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZGlzcGF0Y2giLCJjb250ZXh0VHlwZXMiLCJyb3V0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJVU0VSIiwiU0VBUkNIX0NSSVRFUklBX09QRCIsImxvY2F0aW9uVHlwZSIsIlNFQVJDSF9DUklURVJJQV9JUEQiLCJIT1NQSVRBTF9ERVRBSUxfTE9BREVEIiwic2VsZWN0ZWRDcml0ZXJpYXMiLCJtYXBEaXNwdGFjaFRvUHJvcHMiLCJzZWFyY2hCeVVybCIsImNiIiwic2F2ZVByb2ZpbGVQcm9jZWR1cmVzIiwiY2xpbmljX2lkIiwicHJvY2VkdXJlX2lkcyIsImZvcmNlQWRkIiwic2VsZWN0T3BkVGltZVNMb3QiLCJzbG90IiwicmVzY2hlZHVsZSIsImFwcG9pbnRtZW50SWQiLCJjcml0ZXJpYSIsImlwZENoYXRWaWV3IiwiY2hlY2tJcGRDaGF0QWdlbnRTdGF0dXMiLCJjbGVhclZpcFNlbGVjdGVkUGxhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLGFBQWEsS0FBakI7O0lBQ01DLG1COzs7QUFDRCxrQ0FBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLGdKQUNQQSxLQURPOztBQUViLGdCQUFLQyxLQUFMLEdBQWE7QUFDUkMseUJBQVVKO0FBREYsV0FBYjtBQUZhO0FBS2pCOzs7OzhDQUVtQjtBQUNqQixvQkFBS0ssUUFBTCxDQUFjLEVBQUNELFVBQVUsSUFBWCxFQUFkO0FBQ0E7QUFDSDs7O21DQUVJO0FBQUE7O0FBQUEsbUJBQ0RFLGFBREMsR0FDaUIsS0FBS0osS0FEdEIsQ0FDREksYUFEQzs7QUFFQyxtQkFBSUMsWUFBWSxFQUFoQjtBQUNBLG1CQUFHRCxjQUFjRSxTQUFkLElBQTJCRixjQUFjRSxTQUFkLENBQXdCQyxNQUF4QixHQUErQixHQUE3RCxFQUFrRTtBQUM3RCx3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akJEO2tCQWtCZSx5QkFBUVQsZUFBUixFQUF5Qk8sa0JBQXpCLEVBQTZDakQsY0FBN0MsQyIsImZpbGUiOiI2My5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmxldCBkb2N0b3JEYXRhID0gZmFsc2VcbmNsYXNzIEhvc3BpdGFsQWJvdXRVc1ZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgIHJlYWRNb3JlOiBkb2N0b3JEYXRhXG4gICAgICAgICAgfVxuICAgICB9XG5cbiAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlYWRNb3JlOiB0cnVlfSlcbiAgICAgICAgLy8gdGhpcy5yZW5kZXJBYm91dCh0aGlzLnByb3BzKVxuICAgIH1cblxuXHRyZW5kZXIoKXtcblx0XHRsZXQgeyBob3NwaXRhbF9kYXRhIH0gPSB0aGlzLnByb3BzXG4gICAgICAgICAgbGV0IGFib3V0VGV4dCA9ICcnXG4gICAgICAgICAgaWYoaG9zcGl0YWxfZGF0YS5uZXdfYWJvdXQgJiYgaG9zcGl0YWxfZGF0YS5uZXdfYWJvdXQubGVuZ3RoPjQwMCkge1xuICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucmVhZE1vcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgYWJvdXRUZXh0ID0gaG9zcGl0YWxfZGF0YS5uZXdfYWJvdXQuc2xpY2UoMCwgNDAwKSArIFwiLi4uXCJcbiAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWJvdXRUZXh0ID0gaG9zcGl0YWxfZGF0YS5uZXdfYWJvdXRcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICBhYm91dFRleHQgPSBob3NwaXRhbF9kYXRhLm5ld19hYm91dFxuICAgICAgICAgIH1cblxuXHRcdHJldHVybihcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaHMtY2FyZFwiIHN0eWxlPXt7cGFkZGluZ0JvdHRvbTonMTBweCd9fT5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkXCI+PGgyIGNsYXNzTmFtZT1cImRzcGx5LWlwZC1oZG5nXCI+QWJvdXQge2hvc3BpdGFsX2RhdGEubmFtZX08L2gyPjwvZGl2PiBcblxuICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS5yZWFkTW9yZT9cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgY2xlYXJmaXggY3VzdG9tLWxpLXN0eWxlXCIgc3R5bGU9e3t9fSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGFib3V0VGV4dCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDo8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBjbGVhcmZpeCBjdXN0b20tbGktc3R5bGVcIiBzdHlsZT17e319IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYWJvdXRUZXh0IH19PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIDxhICBjbGFzc05hbWU9XCJmdy03MDAgdGV4dC1wcmltYXJ5IHNob3ctbGVzcy1pcGRcIiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVhZE1vcmU6ICF0aGlzLnN0YXRlLnJlYWRNb3JlIH0pXG4gICAgICAgICAgICAgICAgICAgIH19Pnt0aGlzLnN0YXRlLnJlYWRNb3JlPydTaG93IE1vcmUnOidTaG93IExlc3MnfTxzcGFuIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5yZWFkTW9yZT8nc2hvdy1pcGQtbW9yZS1yb3RhdGUnOicnfSBzdHlsZT17eyBmb250U2l6ZTogMTEsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyB9fT4mIzk2NTA7PC9zcGFuPjwvYT5cblxuICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvc3BpdGFsQWJvdXRVc1ZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgTGlnaHRib3ggZnJvbSAnLi4vLi4vaGVscGVycy9saWdodGJveCc7XG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IExpZ2h0Ym94IGZyb20gJ3JlYWN0LWltYWdlLWxpZ2h0Ym94JztcbmltcG9ydCBSYXRpbmdTdGFycyBmcm9tICcuLi9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9SYXRpbmdTdGFycyc7XG5cbmNsYXNzIEhvc3BpdGFsSW5mb1ZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBob3RvSW5kZXg6IDAsXG4gICAgICBpc09wZW46IGZhbHNlLFxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBob3NwaXRhbF9kYXRhIH0gPSB0aGlzLnByb3BzXG4gICAgbGV0IHsgcGhvdG9JbmRleCwgaXNPcGVuIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBsZXQgbmFtZSA9ICcnXG4gICAgaWYoaG9zcGl0YWxfZGF0YSkge1xuXG4gICAgICBpZihob3NwaXRhbF9kYXRhLnNlb190aXRsZSl7XG4gICAgICAgIG5hbWUgPSBob3NwaXRhbF9kYXRhLnNlb190aXRsZVxuICAgICAgfWVsc2UgaWYoaG9zcGl0YWxfZGF0YS5zZW8gJiYgaG9zcGl0YWxfZGF0YS5zZW8uaDFfdGl0bGUpIHtcbiAgICAgICAgbmFtZSA9IGhvc3BpdGFsX2RhdGEuc2VvLmgxX3RpdGxlXG4gICAgICB9ZWxzZSB7XG4gICAgICAgIG5hbWUgPSBob3NwaXRhbF9kYXRhLm5hbWVfY2l0eVxuICAgICAgfVxuXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhzLWNhcmRcIj5cbiAgICAgICAge1xuICAgICAgICAgIGhvc3BpdGFsX2RhdGEuaW1hZ2VzICYmIGhvc3BpdGFsX2RhdGEuaW1hZ2VzLmxlbmd0aCA/XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lclwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2hvc3BpdGFsX2RhdGEuaW1hZ2VzWzBdLm9yaWdpbmFsfSlgIH19PlxuICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cInRvdGFsLWltZ1wiPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCtcIi9pbWFnZXMvY2FtZXJhLnBuZ1wifSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJcIiAvPiA1NDwvYT48L2Rpdj4qL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOiAnJ1xuICAgICAgICB9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3NwaXRhbC1kZXRhaWxzXCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgaG9zcGl0YWxfZGF0YS5sb2dvID9cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3NObWVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGhzLW5tZSBoc3B0TmFtZSBoc3B0V2lkZ2V0ICR7dGhpcy5wcm9wcy5zaG93UG9wdXAgPyAncG9wdXBUb3BDaGFuZ2UnIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aG9zcGl0YWxfZGF0YS5sb2dvfSBhbHQ9e25hbWV9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgey8qIElmIGFueW9uZSBpcyB1bi1jb21tZW50aW5nIHRoZSBjb2RlIGJlbG93LCBwbGVhc2UgYWxzbyByZW1vdmUgdGhlIGlubGluZSAnc3R5bGUnKHBhZGRpbmdUb3A6MCkgdGFnIGZyb20gaDEgcHJlc2VudCBqdXN0IGJlbG93IHRoZSBjb2RlIChjbGFzcyBvZiBoMSAtIHNlY3Rpb24taGVhZGluZyBwYi0xMCkgKi99XG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiaXBkLXN0LXJhdGluZ1wiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBob3NwaXRhbF9kYXRhLnJhdGluZ19ncmFwaCAmJiBob3NwaXRhbF9kYXRhLnJhdGluZ19ncmFwaC5hdmdfcmF0aW5nID9cbiAgICAgICAgICAgICAgICA8UmF0aW5nU3RhcnMgYXZlcmFnZV9yYXRpbmc9e2hvc3BpdGFsX2RhdGEucmF0aW5nX2dyYXBoLmF2Z19yYXRpbmd9IHJhdGluZ19jb3VudD17Jyd9IHdpZHRoPVwiMTJweFwiIGhlaWdodD1cIjEycHhcIiAvPiA6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRpbmcgcGItMTBcIiBzdHlsZT17eyBwYWRkaW5nVG9wOiAwIH19ID57bmFtZX08L2gxPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGhvc3BpdGFsX2RhdGEuYWRkcmVzcyA/XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3BkLXRpbWluZyBvcGQtbWFwaWNvXCI+XG4gICAgICAgICAgICAgICAgPGgyPjxzcGFuIGNsYXNzTmFtZT1cImlwZC1hZHJzLXRiXCI+QWRkcmVzczogPC9zcGFuPntob3NwaXRhbF9kYXRhLmFkZHJlc3N9IDwvaDI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9zZWFyY2gvP2FwaT0xJnF1ZXJ5PSR7aG9zcGl0YWxfZGF0YS5sYXR9LCR7aG9zcGl0YWxfZGF0YS5sb25nfWB9IHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnLCBjdXJzb3I6ICdwb2ludGVyJyB9fSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcyNXB4JywgaGVpZ2h0OiAnMjVweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9tYXAtaWNvbi5wbmcnfSAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDogJydcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoc3B0bC1pbmZvXCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGhvc3BpdGFsX2RhdGEuYmVkX2NvdW50ID9cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvcy1jZXJ0aWZpZWRcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1hZ2VzL2JlZC5wbmdcIn0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWJlZFwiIC8+e2Ake2hvc3BpdGFsX2RhdGEuYmVkX2NvdW50fSBiZWRzYH08L2Rpdj5cbiAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGhvc3BpdGFsX2RhdGEubXVsdGlfc3BlY2lhbGl0eSA/XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3MtY2VydGlmaWVkXCI+PGltZyBzdHlsZT17eyBtYXJnaW5Ub3A6ICc0cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1hZ2VzL211bHRpLXNwZWNpYWxpdHkucG5nXCJ9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1zcGx0eVwiIC8+TXVsdGkgU3BlY2lhbGl0eTwvZGl2PlxuICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiB7XG4gICAgICAgICAgICBob3NwaXRhbF9kYXRhICYmIGhvc3BpdGFsX2RhdGEuaWQ9PTMyNDAgJiYgdGhpcy5wcm9wcy5pc1Nlbz9cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnLWZlZS1jb250XCI+XG4gICAgICAgICAgICAgIDxwPkRvY3ByaW1lIG9mZmVyIC0gTm8gUmVnaXN0cmF0aW9uIEZlZTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOicnXG4gICAgICAgICAgfSAqL31cbiAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaHNwdGwtY29udGFjdCB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaG9zcGl0YWxfZGF0YS5pbWFnZXMgJiYgaG9zcGl0YWxfZGF0YS5pbWFnZXMubGVuZ3RoID9cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhzcHRsLXRpdGxlIGhzLXRsZSBoc3B0bC1waG90b1wiPkdhbGxlcnk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaHNwdGwtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBob3NwaXRhbF9kYXRhLmltYWdlcy5zbGljZSgwLCA0KS5tYXAoKGltYWdlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtpfT48YSBocmVmPXtpbWFnZS5vcmlnaW5hbH0gb25DbGljaz17KGUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTt9IH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYmctaW1nLWJveCBpbWctZmx1aWRcIiBhbHQ9e2Ake2hvc3BpdGFsX2RhdGEubmFtZX06IFBob3RvJHtpKzF9YH0gc3JjPXtpbWFnZS5vcmlnaW5hbH0gIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBpc09wZW46IHRydWUsIHBob3RvSW5kZXg6IGkgfSl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtpc09wZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxMaWdodGJveFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpblNyYz17aG9zcGl0YWxfZGF0YS5pbWFnZXNbcGhvdG9JbmRleF0ub3JpZ2luYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0U3JjPXtob3NwaXRhbF9kYXRhLmltYWdlc1socGhvdG9JbmRleCArIDEpICUgaG9zcGl0YWxfZGF0YS5pbWFnZXMubGVuZ3RoXS5vcmlnaW5hbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZTcmM9e2hvc3BpdGFsX2RhdGEuaW1hZ2VzWyhwaG90b0luZGV4ICsgaG9zcGl0YWxfZGF0YS5pbWFnZXMubGVuZ3RoIC0gMSkgJSBob3NwaXRhbF9kYXRhLmltYWdlcy5sZW5ndGhdLm9yaWdpbmFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZVJlcXVlc3Q9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBpc09wZW46IGZhbHNlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlUHJldlJlcXVlc3Q9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBob3RvSW5kZXg6IChwaG90b0luZGV4ICsgaG9zcGl0YWxfZGF0YS5pbWFnZXMubGVuZ3RoIC0gMSkgJSBob3NwaXRhbF9kYXRhLmltYWdlcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdmVOZXh0UmVxdWVzdD17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG9JbmRleDogKHBob3RvSW5kZXggKyAxKSAlIGhvc3BpdGFsX2RhdGEuaW1hZ2VzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWxfZGF0YS5pbWFnZXMubGVuZ3RoID4gNCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG4tbW9yZS1pbWdcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgaXNPcGVuOiB0cnVlLCBwaG90b0luZGV4OiA0IH0pfT57YCske2hvc3BpdGFsX2RhdGEuaW1hZ2VzLmxlbmd0aCAtIDR9YH08YnIgLz4gbW9yZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBob3NwaXRhbF9kYXRhLm9wZF90aW1pbmdzID9cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGktYWRkcmVzc1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoc3B0bC10aXRsZSBocy10bGVcIj5PUEQgVGltaW5nczo8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaHNwdGwtdGl0bGUgaHNwdGwtYWRkXCI+e2hvc3BpdGFsX2RhdGEub3BkX3RpbWluZ3N9XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGhvc3BpdGFsX2RhdGEub3Blbl90b2RheSA/XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3BkLXN0YXR1c1wiPiBPcGVuIFRvZGF5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImhzcHRsLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3NlYXJjaC8/YXBpPTEmcXVlcnk9JHtob3NwaXRhbF9kYXRhLmxhdH0sJHtob3NwaXRhbF9kYXRhLmxvbmd9YH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWFnZXMvd2hpdGUtbWFwLnBuZ1wifSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nLW1hcFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaG9zcGl0YWxfZGF0YS5jb250YWN0X251bWJlciA/XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoc3B0bC10aXRsZSBoc3B0bC1jbnRjIGhzLXRsZVwiPkNvbnRhY3Q6PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhzcHRsLXRpdGxlIGhzcHRsLWFkZFwiPiB7aG9zcGl0YWxfZGF0YS5jb250YWN0X251bWJlcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaHNwdGwtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiAnMjVweCcgfX0gaHJlZj17YHRlbDoke2hvc3BpdGFsX2RhdGEuY29udGFjdF9udW1iZXJ9YH0gY2xhc3NOYW1lPVwiZHBwLWJ0bi1ib29rIGQtbGctbm9uZSBkLWZsZXhcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1hZ2VzL2NhbGwtcm91bmQucG5nXCJ9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWctbWFwXCIgc3R5bGU9e3sgd2lkdGg6ICcyMHB4JyB9fSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGV0IGd0bURhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0lwZEhvc3BpdGFsQ29udGFjdENsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdpcGQtaG9zcGl0YWwtY29udGFjdC1jbGlja2VkJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvc3BpdGFsSW5mb1ZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIEhvc3BpdGFsTG9jYXRpb25WaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKXtcbiAgICBsZXQgeyBob3NwaXRhbF9kYXRhIH0gPSB0aGlzLnByb3BzIFxuXHRcdHJldHVybihcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaHMtY2FyZFwiPlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRcIj5Ib3NwaXRhbCBpbiBvdGhlciBsb2NhdGlvbnM8L2Rpdj4gICBcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGNsZWFyZml4XCI+XG4gICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJocy1hY2NvcmRpYW5cIj4gXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBob3NwaXRhbF9kYXRhLm90aGVyX25ldHdvcmtfaG9zcGl0YWxzLm1hcCgobG9jYXRpb24sIGkpPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaWFuLWhlYWRcIj57bG9jYXRpb24ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGltZyBjbGFzc05hbWU9XCJpbWctbWFwXCIgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL2NwL2Fzc2V0cy9pbWcvY3VzdG9tZXItaWNvbnMvbWFwLWljb24ucG5nXCIgLz4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY2NvcmRpYW4tZHRsXCI+e2xvY2F0aW9uLmFkZHJlc3N9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgPC91bD5cbnsvKiAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzc05hbWU9XCJidG4tdmlldy1ob3NwaXRhbCBidG4tbW9yZVwiPis1IG1vcmU8L2E+Ki99XG4gICAgICAgICA8L2Rpdj4gICBcbiAgICAgIDwvZGl2PlxuXHRcdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvc3BpdGFsTG9jYXRpb25WaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBIb3NwaXRhbFNlcnZpY2VzVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCAge1xuXG5cdHJlbmRlcigpe1xuXHRcdGxldCB7IGhvc3BpdGFsX2RhdGEgfSA9IHRoaXMucHJvcHNcblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhzLWNhcmRcIj5cblx0ICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZFwiPjxoMiBjbGFzc05hbWU9XCJkc3BseS1pcGQtaGRuZ1wiPkZhY2lsaXRpZXMgaW4ge2hvc3BpdGFsX2RhdGEubmFtZX08L2gyPjwvZGl2PiAgIFxuXHQgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGNsZWFyZml4XCI+XG5cdCAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaHMtc2VydmljZXNcIj5cblx0ICAgICAgICAgICAgIFx0e1xuXHQgICAgICAgICAgICAgXHRcdGhvc3BpdGFsX2RhdGEuc2VydmljZXMubWFwKChzZXJ2aWNlLCBpKSA9PiB7XG5cdCAgICAgICAgICAgICBcdFx0XHRyZXR1cm4gPGxpIGtleT17aX0+PGgzPjxpbWcgc3JjPXtzZXJ2aWNlLmljb259IGFsdD1cIlwiIC8+IHtzZXJ2aWNlLm5hbWV9IDwvaDM+PC9saT4gIFxuXHQgICAgICAgICAgICAgICBcdFx0XG5cdCAgICAgICAgICAgICBcdFx0fSlcblx0ICAgICAgICAgICAgIFx0fVxuXHQgICAgICAgICAgICAgPC91bD5cblx0ICAgICAgICAgICAgIHsvKjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3NOYW1lPVwiYnRuLXZpZXctaG9zcGl0YWwgYnRuLW1vcmVcIj4rMTIgbW9yZTwvYT4qL31cblx0ICAgICAgICAgICA8L2Rpdj4gICBcblx0ICAgICAgICAgPC9kaXY+XG5cdFx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9zcGl0YWxTZXJ2aWNlc1ZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuXG5jbGFzcyBIb3NwaXRhbFRyZWF0bWVudFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdHJlYXRtZW50OiBbXSxcbiAgICAgIGZyb21TZXJ2ZXI6IHRydWVcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMuc2V0U3RhdGUoe2Zyb21TZXJ2ZXI6IGZhbHNlfSlcbiAgfVxuXG4gIHRvZ2dsZVRyZWF0bWVudChpZCl7XG4gICAgbGV0IHRyZWF0bWVudCA9IHRoaXMuc3RhdGUudHJlYXRtZW50XG4gICAgbGV0IGZvdW5kID0gZmFsc2VcbiAgICB0cmVhdG1lbnQgPSB0aGlzLnN0YXRlLnRyZWF0bWVudC5maWx0ZXIoKGlwZCkgPT4ge1xuICAgICAgaWYoaXBkID09IGlkKXtcbiAgICAgICAgZm91bmQgPSB0cnVlXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9KVxuICAgIFxuICAgIGlmKCFmb3VuZCl7XG4gICAgICBsZXQgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0lwZFRyZWF0bWVudENhdGVnb3J5Q2xpY2tlZERldGFpbFBhZ2UnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdpcGQtdHJlYXRtZW50LWNhdGVnb3J5LWNsaWNrZWQtZGV0YWlsLXBhZ2UnLCAnc2VsZWN0ZWRJZCc6IGlkIHx8ICcnXG4gICAgICB9XG4gICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuXG4gICAgICB0cmVhdG1lbnQucHVzaChpZClcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7dHJlYXRtZW50OiB0cmVhdG1lbnR9KVxuICB9XG5cbiAgZ29Ub0lwZFNlYXJjaChpcGQsIGUpe1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBsZXQgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0lwZFRyZWF0bWVudFNlbGVjdGVkRGV0YWlsUGFnZScsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2lwZC10cmVhdG1lbnQtc2VsZWN0ZWQtZGV0YWlsLXBhZ2UnLCAnc2VsZWN0ZWRJZCc6IGlwZC5pZCB8fCAnJ1xuICAgICAgfVxuICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcblxuICAgICAgbGV0IHNlbGVjdGVkQ3JpdGVyaWEgPSB7fVxuICAgICAgc2VsZWN0ZWRDcml0ZXJpYS50eXBlID0gJ2lwZCdcbiAgICAgIHNlbGVjdGVkQ3JpdGVyaWEuaWQgPSBpcGQuaWRcbiAgICAgIHNlbGVjdGVkQ3JpdGVyaWEubmFtZSA9ICcnXG4gICAgICB0aGlzLnByb3BzLnRvZ2dsZUlQRENyaXRlcmlhKHNlbGVjdGVkQ3JpdGVyaWEsIHRydWUpXG4gICAgICBpZihpcGQudXJsKXtcbiAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgLyR7aXBkLnVybH0/c2hvd1BvcHVwPXRydWVgKVxuICAgICAgfWVsc2Uge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2lwZEluZm8/aXBkX2lkPSR7aXBkLmlkfWApICBcbiAgICAgIH1cbiAgICAgIFxuICB9XG5cblx0cmVuZGVyKCl7XG4gICAgbGV0IHsgaG9zcGl0YWxfZGF0YSB9ID0gdGhpcy5wcm9wc1xuXHRcdHJldHVybihcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaHMtY2FyZFwiPlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkXCI+PGgyIGNsYXNzTmFtZT1cImRzcGx5LWlwZC1oZG5nXCI+UHJvY2VkdXJlcyBpbiB7aG9zcGl0YWxfZGF0YS5uYW1lfTwvaDI+PC9kaXY+ICAgXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgY2xlYXJmaXhcIj5cbiAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJocy1hY2NvcmRpYW5cIj4gXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGhvc3BpdGFsX2RhdGEuaXBkX3Byb2NlZHVyZV9jYXRlZ29yaWVzLm1hcCgodHJlYXRtZW50LCBpKT0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJhY2NvcmRpYW4taGVhZFwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlVHJlYXRtZW50LmJpbmQodGhpcywgdHJlYXRtZW50LmlkKX0+e2Ake3RyZWF0bWVudC5uYW1lfSAoJHt0cmVhdG1lbnQuaXBkX3Byb2NlZHVyZXMubGVuZ3RofSlgfVxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudHJlYXRtZW50LmluZGV4T2YodHJlYXRtZW50LmlkKT4tMT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwrXCIvaW1hZ2VzL3VwLWFycm93LnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOjxpbWcgY2xhc3NOYW1lPVwiXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwrXCIvaW1hZ2VzL2Rvd24tYXJyb3cucG5nXCJ9IC8+IFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRyZWF0bWVudC5pbmRleE9mKHRyZWF0bWVudC5pZCk+LTEgfHwgdGhpcy5zdGF0ZS5mcm9tU2VydmVyP1xuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjY29yZGlhbi1kdGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50LmlwZF9wcm9jZWR1cmVzLm1hcCgoaXBkLCBrKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGg0IGtleT17aXBkLmlkfT48YSAgaHJlZj17aXBkLnVybD9gLyR7aXBkLnVybH1gOmAvaXBkSW5mbz9pcGRfaWQ9JHtpcGQuaWR9YH0gb25DbGljaz17dGhpcy5nb1RvSXBkU2VhcmNoLmJpbmQodGhpcywgaXBkKX0gY2xhc3NOYW1lPVwidHJlYXQtYW5jaFwiPntpcGQubmFtZX08L2E+PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgIDonJyAgIFxuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgIDwvdWw+XG4gICAgICAgPC9kaXY+ICAgXG4gICAgIDwvZGl2PlxuXHRcdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvc3BpdGFsVHJlYXRtZW50VmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vaGVscGVycy9ndG0uanMnXG5cbmNsYXNzIElwZEhvc3BpdGFsQ2Fyb3VzZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgdmlld01vcmVIb3NwaXRhbCgpIHtcbiAgICAgICAgbGV0IGZpbHRlckNyaXRlcmlhID0ge1xuICAgICAgICAgICAgZGlzdGFuY2U6IFswLCAyMF0sXG4gICAgICAgICAgICBwcm92aWRlcl9pZHM6IFtdLFxuICAgICAgICAgICAgbmV0d29ya19pZDp0aGlzLnByb3BzLmhvc3BpdGFsX2RhdGEubmV0d29ya19pZCB8fCAnJ1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMubWVyZ2VJcGRDcml0ZXJpYSh7XG4gICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYTogZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgICAgICBuZXh0RmlsdGVyQ3JpdGVyaWE6IGZpbHRlckNyaXRlcmlhLFxuICAgICAgICAgICAgY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXM6IHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgICAgICBuZXh0U2VsZWN0ZWRDcml0ZXJpYXM6IHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXNcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9pcGQvc2VhcmNoSG9zcGl0YWxzYClcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvKGRhdGEsIGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgbGV0IGd0bURhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ090aGVyTG9jYXRpb25Ib3NwaXRhbENsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdvdGhlci1sb2NhdGlvbi1ob3NwaXRhbC1jbGlja2VkJywgJ3NlbGVjdGVkJzogJycsICdzZWxlY3RlZElkJzogZGF0YS5pZCB8fCAnJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG5cbiAgICAgICAgbGV0IHJlZGlyZWN0VXJsID0gJydcblxuICAgICAgICBpZihkYXRhLnVybCkge1xuICAgICAgICAgICAgcmVkaXJlY3RVcmwgPSBgLyR7ZGF0YS51cmx9P3Nob3dQb3B1cD10cnVlYFxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICByZWRpcmVjdFVybCA9IGAvaXBkL2hvc3BpdGFsLyR7ZGF0YS5pZH0/c2hvd1BvcHVwPXRydWVgXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChyZWRpcmVjdFVybClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7IGhvc3BpdGFsX2RhdGEgfSA9IHRoaXMucHJvcHNcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpcGQtY2Fyb3VzZWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm90aHItY250clwiPntgT3RoZXIgTG9jYXRpb25zIG9mICR7aG9zcGl0YWxfZGF0YS5uYW1lX2NpdHl9YH1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lID1cImN1cnNvci1wbnRyXCIgb25DbGljaz17dGhpcy52aWV3TW9yZUhvc3BpdGFsLmJpbmQodGhpcyl9PlZpZXcgYWxsPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlwZC1jYXJvdXNlbC1zbGlkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWlubGluZS1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWxfZGF0YS5vdGhlcl9uZXR3b3JrX2hvc3BpdGFscy5zbGljZSgwLDEwKS5tYXAoKGhvc3BpdGFsLCBrZXkpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17a2V5fSBjbGFzc05hbWU9XCJpcGQtY2Fyb3VzZWwtY2FyZFwiIG9uQ2xpY2s9e3RoaXMubmF2aWdhdGVUby5iaW5kKHRoaXMsIGhvc3BpdGFsKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXBkLWNyc2wtaW1nLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXBkLWNyc2wtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2hvc3BpdGFsLmljb258fCcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aG9zcGl0YWwubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlwZC1jZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aG9zcGl0YWwuYWRkcmVzc308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElwZEhvc3BpdGFsQ2Fyb3VzZWw7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21tb25zL0xvYWRlcidcbmltcG9ydCBIb3NwaXRhbEluZm8gZnJvbSAnLi9Ib3NwaXRhbEluZm8uanMnXG5pbXBvcnQgSG9zcGl0YWxTZXJ2aWNlcyBmcm9tICcuL0hvc3BpdGFsU2VydmljZXMuanMnXG5pbXBvcnQgSG9zcGl0YWxUcmVhdG1lbnQgZnJvbSAnLi9Ib3NwaXRhbFRyZWF0bWVudC5qcydcbmltcG9ydCBEb2N0b3JSZXN1bHRDYXJkIGZyb20gJy4uL29wZC9jb21tb25zL2RvY3RvclJlc3VsdENhcmQnXG4vL2ltcG9ydCBSYXRpbmdWaWV3IGZyb20gJy4vUmF0aW5nVmlldy5qcydcbmltcG9ydCBSYXRpbmdHcmFwaCBmcm9tICcuLi9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9SYXRpbmdHcmFwaC5qcydcbmltcG9ydCBSZXZpZXdMaXN0IGZyb20gJy4uL2NvbW1vbnMvcmF0aW5nc1Byb2ZpbGVWaWV3L1Jldmlld0xpc3QuanMnXG5pbXBvcnQgSG9zcGl0YWxMb2NhdGlvbnMgZnJvbSAnLi9Ib3NwaXRhbExvY2F0aW9ucy5qcydcbi8vIGltcG9ydCBIb3NwaXRhbEdhbGxlcnkgZnJvbSAnLi9Ib3NwaXRhbEdhbGxlcnkuanMnXG5pbXBvcnQgSG9zcGl0YWxBYm91dFVzIGZyb20gJy4vSG9zcGl0YWxBYm91dFVzLmpzJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBJcGRGb3JtVmlldyBmcm9tICcuLi8uLi9jb250YWluZXJzL2lwZC9JcGRGb3JtLmpzJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKVxuaW1wb3J0IElwZExlYWRGb3JtIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvaXBkL2lwZExlYWRGb3JtLmpzJ1xuaW1wb3J0IENoYXRJcGRQYW5lbCBmcm9tICcuLi9jb21tb25zL0NoYXRQYW5lbC9DaGF0SXBkUGFuZWwuanMnXG5pbXBvcnQgSXBkT2ZmZXJzUGFnZSBmcm9tICcuL0lwZE9mZmVyc1BhZ2UuanMnXG5pbXBvcnQgQ29tbW9uU2VhcmNoIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvY29tbW9ucy9Db21tb25TZWFyY2guanMnXG5pbXBvcnQgSXBkQ2Fyb3VzZWwgZnJvbSAnLi9JcGRIb3NwaXRhbERldGFpbENhcm91c2VsLmpzJ1xuaW1wb3J0IElwZFF1ZXN0aW9uQW5zd2VyIGZyb20gJy4vaXBkUXVlc3Rpb25BbnN3ZXIuanMnXG5pbXBvcnQgSXBkU2Vjb25kUG9wdXAgZnJvbSAnLi4vLi4vY29udGFpbmVycy9pcGQvSXBkRG9jdG9yQ2l0eVBvcHVwLmpzJ1xuaW1wb3J0IENvbW1lbnRCb3ggZnJvbSAnLi4vY29tbW9ucy9hcnRpY2xlL0FydGljbGVDb21tZW50Qm94LmpzJ1xuaW1wb3J0IFJlcGx5IGZyb20gJy4uL2NvbW1vbnMvYXJ0aWNsZS9SZXBseS5qcydcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSc7XG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBOb25JcGRQb3B1cFZpZXcgZnJvbSAnLi4vY29tbW9ucy9ub25JcGRQb3B1cC5qcydcblxuLy9WaWV3IGFsbCByYXRpbmcgZm9yIGhvc3BpdGFsICxjb250ZW50X3R5cGUgPSAzXG5cbmNsYXNzIEhvc3BpdGFsRGV0YWlsVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHRjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2VvRnJpZW5kbHk6IHRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKCctaHBwJyksXG5cdFx0XHR0b2dnbGVUYWJUeXBlOiAnZG9jdG9ycycsXG5cdFx0XHRzaG93TGVhZEZvcm06IHRydWUsXG5cdFx0XHRpcGRGb3JtUGFyYW1zOiB7fSxcblx0XHRcdHNob3dGb3JjZWRQb3B1cDogZmFsc2UsXG5cdFx0XHRzaG93U2Vjb25kUG9wdXA6IGZhbHNlLFxuXHRcdFx0Zmlyc3RMZWFkSWQ6JycsXG5cdFx0XHRyZXBseU9wZW5Gb3I6ICcnLFxuXHRcdFx0Y29tbWVudDonJyxcblx0XHRcdHNob3dOb25JcGRQb3B1cDogcGFyc2VkLnNob3dfcG9wdXAsXG4gICAgICAgICAgICB0b19iZV9mb3JjZToxLFxuICAgICAgICAgICAgaXNfbGVhZF9lbmFibGVkOnRydWVcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblxuXHRcdGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG5cdFx0bGV0IGhvc3BpdGFsX2lkID0gdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsICYmIHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5pZCA/IHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5pZCA6IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmhvc3BpdGFsSWQgfHwgJydcblx0XHRsZXQgZ3RtRGF0YSA9IHtcblx0XHRcdCdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSXBkSG9zcGl0YWxEZXRhaWxQYWdlTGFuZGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaXBkLWhvc3BpdGFsLWRldGFpbC1wYWdlLWxhbmRlZCcsIHNlbGVjdGVkSWQ6IGhvc3BpdGFsX2lkXG5cdFx0fVxuXHRcdEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG5cblx0XHR2YXIgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXBkLXRiLXRhYnNcIik7XG5cdFx0dmFyIHNlY3Rpb25zID0ge307XG5cdFx0dmFyIGkgPSAwXG5cblx0XHRsZXQgaGVhZGVySGVpZ2h0ID0gMzVcblx0XHRpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpcGQtdGFicy1jb250YWluZXInKSAmJiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpcGQtdGFicy1jb250YWluZXInKS5sZW5ndGgpIHtcblx0XHRcdGhlYWRlckhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lwZC10YWJzLWNvbnRhaW5lcicpWzBdLm9mZnNldEhlaWdodFxuXHRcdH1cblx0XHRoZWFkZXJIZWlnaHQgPSAtKGhlYWRlckhlaWdodClcblx0XHRPYmplY3Qua2V5cyh0aGlzLnJlZnMpLmZvckVhY2goKHBycCwgaSkgPT4ge1xuXG5cdFx0XHRzZWN0aW9uc1twcnBdID0gdGhpcy5yZWZzW3BycF0ub2Zmc2V0VG9wICsgaGVhZGVySGVpZ2h0XG5cblx0XHR9KVxuXG5cdFx0bGV0IHNlbGYgPSB0aGlzXG5cdFx0aWYgKHdpbmRvdyAmJiBkb2N1bWVudCkge1xuXHRcdFx0d2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgc2Nyb2xsUG9zaXRpb24gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG5cdFx0XHRcdGZvciAoaSBpbiBzZWN0aW9ucykge1xuXHRcdFx0XHRcdGlmIChzZWxmLnJlZnNbaV0pIHtcblxuXHRcdFx0XHRcdFx0aWYgKGkuaW5jbHVkZXMoJ3ZpZXdfbW9yZScpKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChzY3JvbGxQb3NpdGlvbiA+IChzZWxmLnJlZnNbJ3ZpZXdfbW9yZSddLm9mZnNldFRvcCArIGhlYWRlckhlaWdodCkpIHtcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnNldFN0YXRlKHsgdG9nZ2xlVGFiVHlwZTogJycgfSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHRpZiAoKHNlbGYucmVmc1tpXS5vZmZzZXRUb3AgKyBoZWFkZXJIZWlnaHQpIDw9IHNjcm9sbFBvc2l0aW9uKSB7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7IHRvZ2dsZVRhYlR5cGU6IGkgfSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG5cdFx0aWYgKHBhcnNlZC50eXBlICYmIHRoaXMucmVmc1twYXJzZWQudHlwZV0pIHtcblx0XHRcdHRoaXMudG9nZ2xlVGFicyhwYXJzZWQudHlwZSlcblx0XHR9XG5cblx0XHRpZih3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcygndHlwZSMnKSkge1xuXHRcdFx0bGV0IHR5cGUgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnIycpXG5cdFx0XHRpZih0eXBlLmxlbmd0aD09MiAmJiB0aGlzLnJlZnNbdHlwZVsxXV0pIHtcblx0XHRcdFx0dGhpcy50b2dnbGVUYWJzKHR5cGVbMV0pXHRcdFxuXHRcdFx0fVxuXHRcdH1cbiBcblx0XHRzZXRUaW1lb3V0KCgpPT57XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtzaG93Rm9yY2VkUG9wdXA6IHRydWUgfSlcblx0XHR9LDEwMDApXG5cblx0fVxuXG5cdGdldENvc3RFc3RpbWF0ZUNsaWNrZWQoKSB7XG5cdFx0Y29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cdFx0bGV0IGlwZF9pZCA9IHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMubGVuZ3RoID8gdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhc1swXS5pZCA6IG51bGxcblx0XHRsZXQgaG9zcGl0YWxfaWQgPSB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmlkID8gdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmlkIDogJydcblx0XHRsZXQgZ3RtRGF0YSA9IHtcblx0XHRcdCdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSXBkR2V0Q29zdEVzdGltYXRlQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2lwZC1nZXQtY29zdC1lc3RpbWF0ZS1jbGlja2VkJywgc2VsZWN0ZWRJZDogaXBkX2lkIHx8ICcnLCBob3NwaXRhbElkOiBob3NwaXRhbF9pZFxuXHRcdH1cblx0XHRHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuXG5cdFx0aWYocGFyc2VkLmZyb21Qcm9jZWR1cmUpe1xuXG5cdFx0fWVsc2V7XG5cdFx0XHRpcGRfaWQgPSBudWxsXG5cdFx0XHRsZXQgc2VsZWN0ZWRDcml0ZXJpYSA9IFtdXG5cdFx0XHR0aGlzLnByb3BzLnRvZ2dsZUlQRENyaXRlcmlhKHNlbGVjdGVkQ3JpdGVyaWEsIHRydWUpXG5cdFx0fVxuXG5cdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9pcGQvJHtpcGRfaWQgPyBpcGRfaWQgOiAncHJpY2UnfS9nZXRQcmljZUVzdGltYXRlP2hvc3BpdGFsX2lkPSR7aG9zcGl0YWxfaWR9YClcblxuXHR9XG5cblx0dmlld0RvY3RvcnNDbGlja2VkKHNwZWNpYWxpemF0aW9uSWQgPSBudWxsLCBlKSB7XG5cdFx0LyppZih0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzICYmIHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMubGVuZ3RoKXtcblxuXG5cdFx0XHRsZXQgZ3RtRGF0YSA9IHtcblx0ICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdJcGRWaWV3QWxsRG9jdG9yQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2lwZC12aWV3LWFsbC1kb2N0b3ItY2xpY2tlZCcsIHNlbGVjdGVkSWQ6IHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXNbMF0uaWQgfHwgJydcblx0ICAgICAgICB9XG5cdCAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcblxuXHRcdFx0bGV0IGNyaXRlcmlhID0ge31cblx0XHRcdGNyaXRlcmlhLmlkID0gdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhc1swXS5pZFxuXHRcdFx0Y3JpdGVyaWEubmFtZSA9IHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXNbMF0ubmFtZVxuXHRcdFx0Y3JpdGVyaWEudHlwZSA9ICdpcGQnIFxuXHRcdFx0dGhpcy5wcm9wcy5jbG9uZUNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzKGNyaXRlcmlhKVxuXHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9vcGQvc2VhcmNocmVzdWx0c2ApXHRcblx0XHR9Ki9cblx0XHRsZXQgc2VsZiA9IHRoaXNcblx0XHRsZXQgaG9zcGl0YWxfaWQgPSB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmlkID8gdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmlkIDogJydcblx0XHRsZXQgZG9jdG9yX25hbWUgPSAnJ1xuXHRcdGxldCBob3NwaXRhbF9uYW1lID0gJydcblx0XHRsZXQgc3RhdGUgPSB7fVxuXG5cdFx0aWYgKHNwZWNpYWxpemF0aW9uSWQpIHtcblx0XHRcdHRoaXMucHJvcHMuY2xvbmVDb21tb25TZWxlY3RlZENyaXRlcmlhcyh7IGlkOiBzcGVjaWFsaXphdGlvbklkLCB0eXBlOiAnc3BlY2lhbGl0eScgfSlcblx0XHR9XG5cblx0XHRzdGF0ZSA9IHtcblx0XHRcdGZpbHRlckNyaXRlcmlhOiB7XG5cdFx0XHRcdC4uLnNlbGYucHJvcHMuZmlsdGVyQ3JpdGVyaWEsXG5cdFx0XHRcdGhvc3BpdGFsX2lkLCBkb2N0b3JfbmFtZSwgaG9zcGl0YWxfbmFtZVxuXHRcdFx0fSxcblx0XHRcdG5leHRGaWx0ZXJDcml0ZXJpYToge1xuXHRcdFx0XHQuLi5zZWxmLnByb3BzLmZpbHRlckNyaXRlcmlhLFxuXHRcdFx0XHRob3NwaXRhbF9pZCwgZG9jdG9yX25hbWUsIGhvc3BpdGFsX25hbWVcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLnByb3BzLm1lcmdlT1BEU3RhdGUoc3RhdGUpXG5cdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9vcGQvc2VhcmNocmVzdWx0c2ApXG5cdH1cblxuXG5cdHRvZ2dsZVRhYnModHlwZSkge1xuXHRcdGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0eXBlKSkge1xuXHRcdFx0bGV0IGd0bURhdGEgPSB7XG5cdFx0XHRcdCdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSG9zcGl0YWxQYWdlSXBkVGFiQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2hvc3BpdGFsLXBhZ2UtaXBkLXRhYi1jbGlja2VkJywgdHlwZTogdHlwZVxuXHRcdFx0fVxuXHRcdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcblxuXHRcdFx0bGV0IGhlYWRlckhlaWdodCA9IHRoaXMucmVmc1t0eXBlXS5vZmZzZXRUb3Bcblx0XHRcdGxldCB0YWJoZWlnaHQgPSAzNTtcblx0XHRcdGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lwZC10YWJzLWNvbnRhaW5lcicpICYmIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lwZC10YWJzLWNvbnRhaW5lcicpLmxlbmd0aCkge1xuXHRcdFx0XHR0YWJoZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpcGQtdGFicy1jb250YWluZXInKVswXS5vZmZzZXRIZWlnaHRcblx0XHRcdH1cblx0XHRcdGhlYWRlckhlaWdodCA9IGhlYWRlckhlaWdodCAtIHRhYmhlaWdodFxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHRvZ2dsZVRhYlR5cGU6IHR5cGUgfSlcblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCBoZWFkZXJIZWlnaHQpXG5cblx0XHR9XG5cdH1cblxuXHRnZXRTcGVjaWFsaXphdGlvbk5hbWUoKSB7XG5cblx0XHRpZiAodGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLnNwZWNpYWxpemF0aW9uX2RvY3RvcnMgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLnNwZWNpYWxpemF0aW9uX2RvY3RvcnMuc3BlY2lhbGl6YXRpb25zICYmIHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5zcGVjaWFsaXphdGlvbl9kb2N0b3JzLnNwZWNpYWxpemF0aW9ucy5sZW5ndGgpIHtcblxuXHRcdFx0bGV0IG5hbWUgPSB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuc3BlY2lhbGl6YXRpb25fZG9jdG9ycy5zcGVjaWFsaXphdGlvbnMubWFwKHggPT4geC5uYW1lKS5qb2luKCcsJykgfHwgJydcblx0XHRcdG5hbWUgPSBuYW1lICsgJyAnXG5cdFx0XHRyZXR1cm4gYFZpZXcgYWxsICR7dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLnNwZWNpYWxpemF0aW9uX2RvY3RvcnMuY291bnR9ICR7bmFtZX0gYFxuXHRcdH1cblxuXHRcdHJldHVybiBgVmlldyBhbGwgJHt0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuc3BlY2lhbGl6YXRpb25fZG9jdG9ycy5jb3VudH0gRG9jdG9yc2Bcblx0fVxuXG5cdHN1Ym1pdExlYWRGb3JtR2VuZXJhdGlvbihpcGRGb3JtUGFyYW1zKSB7XG5cdFx0aWYgKGNsb3NlKSB7XG5cdFx0XHRsZXQgZ3RtRGF0YSA9IHtcblx0XHRcdFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdJcGRIb3NwaXRhbERldGFpbFBhZ2VGb3JtQ2xvc2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaXBkLWhvc3BpdGFsLWRldGFpbC1wYWdlLWZvcm0tY2xvc2VkJ1xuXHRcdFx0fVxuXHRcdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcblx0XHR9XG5cdFx0LypsZXQgaXBkX2RhdGEgPSB7XG5cdFx0XHRzaG93Q2hhdDogdHJ1ZSxcblx0XHRcdGlwZEZvcm1QYXJhbXM6IGlwZEZvcm1QYXJhbXMsXG5cdFx0XHRob3NwaXRhbDp0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmlkP3RoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5pZDonJ1xuXHRcdH0qL1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dMZWFkRm9ybTogZmFsc2UsIGlwZEZvcm1QYXJhbXM6IGlwZEZvcm1QYXJhbXMgfSwgKCkgPT4ge1xuXHRcdFx0Lyp0aGlzLnByb3BzLmNoZWNrSXBkQ2hhdEFnZW50U3RhdHVzKChyZXNwb25zZSk9PiB7XG5cdFx0XHRcdGlmKHJlc3BvbnNlICYmIHJlc3BvbnNlLnVzZXJzICYmIHJlc3BvbnNlLnVzZXJzLmxlbmd0aCkge1xuXG5cdFx0XHRcdFx0Ly8gdGhpcy5wcm9wcy5pcGRDaGF0Vmlldyh7c2hvd0lwZENoYXQ6dHJ1ZSwgaXBkRm9ybTogaXBkRm9ybVBhcmFtcywgc2hvd01pbmltaXplOiB0cnVlfSlcblx0XHRcdFx0fVxuXHRcdFx0fSkqL1xuXHRcdFx0Ly8gdGhpcy5wcm9wcy5zaG93Q2hhdFZpZXcoaXBkX2RhdGEpXHRcblx0XHR9KVxuXHR9XG5cblx0YXBwbHlRdWlja0ZpbHRlcnMoY2F0ZWdvcnkpIHtcblx0XHRsZXQgZ3RtRGF0YSA9IHtcblx0XHRcdCdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSXBkSG9zcGl0YWxTcGVjaWFsaXphdGlvblNlYXJjaCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2lwZC1ob3NwaXRhbC1zcGVjaWFsaXphdGlvbi1zZWFyY2gnLCAnc3BlY2lhbGl6YXRpb25JZCc6IGNhdGVnb3J5LmlkXG5cdFx0fVxuXHRcdEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG5cdFx0bGV0IHNlbGYgPSB0aGlzXG5cblx0XHRsZXQgaG9zcGl0YWxfaWQgPSB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmlkID8gdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmlkIDogJydcblx0XHRsZXQgZG9jdG9yX25hbWUgPSAnJ1xuXHRcdGxldCBob3NwaXRhbF9uYW1lID0gJydcblx0XHRsZXQgc3RhdGUgPSB7fVxuXHRcdGxldCBzcGVjaWFsaXphdGlvbl9jYXRlZ29yeSA9IFt7aWQ6IGNhdGVnb3J5LmlkLCB0eXBlOidncm91cF9pZHMnfV1cblx0XHRcblx0XHR0aGlzLnByb3BzLmNsb25lQ29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMoc3BlY2lhbGl6YXRpb25fY2F0ZWdvcnkpXG5cdFx0c3RhdGUgPSB7XG5cdFx0XHRmaWx0ZXJDcml0ZXJpYToge1xuXHRcdFx0XHQuLi5zZWxmLnByb3BzLmZpbHRlckNyaXRlcmlhLFxuXHRcdFx0XHRob3NwaXRhbF9pZCwgZG9jdG9yX25hbWUsIGhvc3BpdGFsX25hbWVcblx0XHRcdH0sXG5cdFx0XHRuZXh0RmlsdGVyQ3JpdGVyaWE6IHtcblx0XHRcdFx0Li4uc2VsZi5wcm9wcy5maWx0ZXJDcml0ZXJpYSxcblx0XHRcdFx0aG9zcGl0YWxfaWQsIGRvY3Rvcl9uYW1lLCBob3NwaXRhbF9uYW1lXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5wcm9wcy5tZXJnZU9QRFN0YXRlKHN0YXRlKVxuXHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvb3BkL3NlYXJjaHJlc3VsdHNgKVxuXHR9XG5cblx0Z2V0SW5wdXRGb2N1cygpIHtcblx0XHRsZXQgaGVhZGVySGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1vbl9zZWFyY2gnKSA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tb25fc2VhcmNoJykub2Zmc2V0VG9wIDogMFxuXHRcdGhlYWRlckhlaWdodCA9IGhlYWRlckhlaWdodCAtIDg5XG5cdFx0d2luZG93LnNjcm9sbFRvKDAsIGhlYWRlckhlaWdodClcblx0fVxuXG5cdHNhdmVMZWFkSWRGb3JVcGRhdGlvbihyZXNwb25zZSkge1xuXHRcdGlmIChyZXNwb25zZS5pZCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGZpcnN0TGVhZElkOiByZXNwb25zZS5pZCwgc2hvd1NlY29uZFBvcHVwOiB0cnVlIH0pXG5cdFx0fVxuXHR9XG5cblx0c2Vjb25kSXBkRm9ybVN1Ym1pdHRlZCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd1NlY29uZFBvcHVwOiBmYWxzZSB9KVxuXHR9XG5cblx0cG9zdFJlcGx5KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5jb21tZW50KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIHdyaXRlIHZhbGlkIGNvbW1lbnRcIiB9KVxuICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBvc3REYXRhID0ge1xuICAgICAgICBcdHR5cGU6ICdob3NwaXRhbCcsXG4gICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmlkLFxuICAgICAgICAgICAgY29tbWVudDogdGhpcy5zdGF0ZS5jb21tZW50LFxuICAgICAgICAgICAgbmFtZTogT2JqZWN0LnZhbHVlcyh0aGlzLnByb3BzLnByb2ZpbGVzKS5sZW5ndGggJiYgdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXSA/IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0ubmFtZSA6ICcnLFxuICAgICAgICAgICAgZW1haWw6IE9iamVjdC52YWx1ZXModGhpcy5wcm9wcy5wcm9maWxlcykubGVuZ3RoICYmIHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0gPyB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGVdLmVtYWlsIDogJycsXG4gICAgICAgICAgICBwYXJlbnQ6IHRoaXMuc3RhdGUucmVwbHlPcGVuRm9yXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5wb3N0SG9zcGl0YWxDb21tZW50cyhwb3N0RGF0YSwgKGVycm9yLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21tZW50OiAnJywgcmVwbHlPcGVuRm9yOiAnJyB9KVxuICAgICAgICAgICAgICAgIHRoaXMubG9hZENvbW1lbnRzKClcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIkNvbW1lbnQgUG9zdGVkIFN1Y2Vzc2Z1bGx5LCBBd2FpdGluZyBtb2RlcmF0aW9uXCIgfSlcbiAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiQ291bGQgbm90IHBvc3QgeW91ciBjb21tZW50LCBUcnkgYWdhaW4hXCIgfSlcbiAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuXHRsb2FkQ29tbWVudHMoKXtcblx0XHR0aGlzLnByb3BzLmdldEhvc3BpdGFsQ29tbWVudHModGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmlkKVxuXHR9XG5cblx0Y29tbWVudFJlcGx5Q2xpY2tlZChpZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVwbHlPcGVuRm9yOiBpZCB9KVxuICAgIH1cblxuICAgIGhhbmRsZUlucHV0Q29tbWVudChlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21tZW50OiBlLnRhcmdldC52YWx1ZSB9KVxuICAgIH1cblxuICAgIG5vbklwZExlYWRzKHBob25lX251bWJlcil7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgY3JpdGVyaWFTdHIgPSB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwubmFtZVxuICAgICAgICBsZXQgZGF0YSA9KHtwaG9uZV9udW1iZXI6cGhvbmVfbnVtYmVyLGxlYWRfc291cmNlOidkb2NhZHMnLHNvdXJjZTpwYXJzZWQsbGVhZF90eXBlOidET0NBRFMnLGhvc3BpdGFsX25hbWU6Y3JpdGVyaWFTdHIsZXhpdHBvaW50X3VybDonaHR0cDovL2RvY3ByaW1lLmNvbScgKyB0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lLGRvY3Rvcl9pZDpudWxsLGhvc3BpdGFsX2lkOm51bGwsZG9jdG9yX25hbWU6bnVsbH0pXG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzICYmIHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmxlbmd0aCl7XG4gICAgICAgICAgICBkYXRhLnV0bV90YWdzID0gdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MuZmlsdGVyKHg9PngudHlwZSA9PSBcImNvbW1vbl94dHJhX3RhZ3NcIilbMF0udXRtX3RhZ3NcbiAgICAgICAgfVxuICAgICAgICBsZXQgdmlzaXRvcl9pbmZvID0gR1RNLmdldFZpc2l0b3JJbmZvKClcbiAgICAgICAgICAgIGlmKHZpc2l0b3JfaW5mbyAmJiB2aXNpdG9yX2luZm8udmlzaXRfaWQpe1xuICAgICAgICAgICAgICAgIGRhdGEudmlzaXRfaWQgPSB2aXNpdG9yX2luZm8udmlzaXRfaWRcbiAgICAgICAgICAgICAgICBkYXRhLnZpc2l0b3JfaWQgPSB2aXNpdG9yX2luZm8udmlzaXRvcl9pZFxuICAgICAgICAgICAgfVxuICAgICAgICBsZXQgZ3RtX2RhdGEgPSB7J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb2NBZHNIcHBTdWJtaXRDbGljaycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnZXZlbnQnOiAnZG9jLWFkcy1ocHAtU3VibWl0LWNsaWNrJ31cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bV9kYXRhIH0pXG4gICAgICAgaWYodGhpcy5zdGF0ZS5pc19sZWFkX2VuYWJsZWQpe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNfbGVhZF9lbmFibGVkOmZhbHNlfSlcbiAgICAgICAgICAgIHRoaXMucHJvcHMuTm9uSXBkQm9va2luZ0xlYWQoZGF0YSlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzX2xlYWRfZW5hYmxlZDp0cnVlfSlcbiAgICAgICAgICAgIH0sIDUwMDApXG4gICAgICAgIH1cbiAgICAgICB0aGlzLnNldFN0YXRlKHt0b19iZV9mb3JjZTowfSlcbiAgICB9XG5cbiAgICBjbG9zZUlwZExlYWRQb3B1cChmcm9tKXtcbiAgICAgICAgaWYoZnJvbSl7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb2NBZHNIcHBDcm9zc0NsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdldmVudCc6ICdkb2MtYWRzLWhwcC1jcm9zcy1jbGljaydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dG9fYmVfZm9yY2U6MH0pXG4gICAgICAgIH1cbiAgICB9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cblx0XHRsZXQgc2hvd1BvcHVwID0gcGFyc2VkLnNob3dQb3B1cCAmJiB0aGlzLnN0YXRlLnNob3dMZWFkRm9ybSAmJiB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdy5PTl9MQU5ESU5HX1BBR0UgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsICYmIHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5iZWRfY291bnRcblxuXHRcdHNob3dQb3B1cCA9IHBhcnNlZC5zaG93UG9wdXAgJiYgdGhpcy5zdGF0ZS5zaG93TGVhZEZvcm0gJiYgIXRoaXMucHJvcHMuaXNfaXBkX2Zvcm1fc3VibWl0dGVkICYmICF0aGlzLnN0YXRlLnNob3dOb25JcGRQb3B1cCBcblxuXHRcdGxldCBsYW5kaW5nX3BhZ2UgPSBmYWxzZVxuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdy5PTl9MQU5ESU5HX1BBR0UpIHtcblx0XHRcdGxhbmRpbmdfcGFnZSA9IHRydWVcblx0XHR9XG5cblx0XHRsZXQgc2hvd0ZvcmNlZFBvcHVwPSB0aGlzLnN0YXRlLnNob3dMZWFkRm9ybSAmJiBsYW5kaW5nX3BhZ2UgJiYgdGhpcy5zdGF0ZS5zZW9GcmllbmRseSAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmlzX2lwZF9ob3NwaXRhbCAmJiB0aGlzLnN0YXRlLnNob3dGb3JjZWRQb3B1cCAmJiAhdGhpcy5zdGF0ZS5zaG93Tm9uSXBkUG9wdXBcblxuXG5cdFx0bGV0IGlzVXNlckxvZ2luID0gT2JqZWN0LnZhbHVlcyh0aGlzLnByb3BzLnByb2ZpbGVzKS5sZW5ndGggfHwgU1RPUkFHRS5jaGVja0F1dGgoKVxuICAgICAgICBsZXQgY29tbWVudHNFeGlzdHMgPSB0aGlzLnByb3BzLmhvc3BpdGFsQ29tbWVudHMgJiYgdGhpcy5wcm9wcy5ob3NwaXRhbENvbW1lbnRzLmxlbmd0aCA/IHRoaXMucHJvcHMuaG9zcGl0YWxDb21tZW50cy5sZW5ndGggOiBudWxsXG5cbiAgICAgICAgbGV0IHNwZWNpYWxpemF0aW9uX2RhdGEgPSBbXVxuICAgICAgICBpZih0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLnNwZWNpYWxpemF0aW9uX2RvY3RvcnMgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLnNwZWNpYWxpemF0aW9uX2RvY3RvcnMuc3BlY2lhbGl6YXRpb25zKXtcblxuICAgICAgICBcdHNwZWNpYWxpemF0aW9uX2RhdGEgPSB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuc3BlY2lhbGl6YXRpb25fZG9jdG9ycy5zcGVjaWFsaXphdGlvbnNcbiAgICAgICAgfVxuICAgICAgICBzaG93UG9wdXAgPSBmYWxzZTtcbiAgICAgICAgc2hvd0ZvcmNlZFBvcHVwID0gZmFsc2U7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsICYmIHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5pZCA/XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlwZC1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHQoc2hvd1BvcHVwIHx8IHNob3dGb3JjZWRQb3B1cCkgP1xuXHRcdFx0XHRcdFx0XHRcdFx0PElwZExlYWRGb3JtIHN1Ym1pdExlYWRGb3JtR2VuZXJhdGlvbj17dGhpcy5zdWJtaXRMZWFkRm9ybUdlbmVyYXRpb24uYmluZCh0aGlzKX0gey4uLnRoaXMucHJvcHN9IGhvc3BpdGFsX25hbWU9e3RoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5uYW1lID8gdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLm5hbWUgOiBudWxsfSBob3NwaXRhbF9pZD17dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmlkfSBmb3JtU291cmNlPSdpcGRIb3NwaXRhbFBvcHVwJyBzYXZlTGVhZElkRm9yVXBkYXRpb249e3RoaXMuc2F2ZUxlYWRJZEZvclVwZGF0aW9uLmJpbmQodGhpcyl9IG5vVG9hc3RNZXNzYWdlPXt0cnVlfSBzcGVjaWFsaXphdGlvbl9kYXRhPXtzcGVjaWFsaXphdGlvbl9kYXRhfS8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuc2hvd1NlY29uZFBvcHVwICYmIHRoaXMuc3RhdGUuZmlyc3RMZWFkSWQgJiYgcGFyc2VkLmdldF9mZWVkYmFjayAmJiBwYXJzZWQuZ2V0X2ZlZWRiYWNrID09ICcxJyA/XG5cdFx0XHRcdFx0XHRcdFx0XHQ8SXBkU2Vjb25kUG9wdXAgey4uLnRoaXMucHJvcHN9IGZpcnN0TGVhZElkPXt0aGlzLnN0YXRlLmZpcnN0TGVhZElkfSBhbGxfZG9jdG9ycz17dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmFsbF9kb2N0b3JzfSBhbGxfY2l0aWVzPXt0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuYWxsX2NpdGllc30gaG9zcGl0YWxQcm9maWxlUGFnZT17dHJ1ZX0gc2Vjb25kSXBkRm9ybVN1Ym1pdHRlZD17dGhpcy5zZWNvbmRJcGRGb3JtU3VibWl0dGVkLmJpbmQodGhpcyl9IGhvc3BpdGFsX25hbWU9e3RoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5uYW1lID8gdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLm5hbWUgOiBudWxsfSBob3NwaXRhbF9pZD17dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmlkfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAvKih0aGlzLnN0YXRlLnNob3dOb25JcGRQb3B1cCA9PSAxIHx8IHRoaXMuc3RhdGUuc2hvd05vbklwZFBvcHVwID09IDIpICYmIHRoaXMuc3RhdGUudG9fYmVfZm9yY2UgPT0gMSAmJiAhU1RPUkFHRS5pc0FnZW50KCk/XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxOb25JcGRQb3B1cFZpZXcgey4uLnRoaXMucHJvcHN9IG5vbklwZExlYWRzPXt0aGlzLm5vbklwZExlYWRzLmJpbmQodGhpcyl9IGNsb3NlSXBkTGVhZFBvcHVwID0ge3RoaXMuY2xvc2VJcGRMZWFkUG9wdXAuYmluZCh0aGlzKX0gaXNfZm9yY2U9e3RoaXMuc3RhdGUuc2hvd05vbklwZFBvcHVwfSBpc19ocHA9e3RydWV9IGhvc3BpdGFsX2RhdGE9e3RoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbH0vPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA6JycqL1xuXHRcdFx0ICAgICAgICAgICAgICAgIH1cblxuXHRcdFx0XHRcdFx0XHQ8SG9zcGl0YWxJbmZvIGhvc3BpdGFsX2RhdGE9e3RoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbH0gc2hvd1BvcHVwPXtzaG93UG9wdXB9IGlzU2VvPXt0aGlzLnN0YXRlLnNlb0ZyaWVuZGx5fSAvPlxuXG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsICYmIHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5vdGhlcl9uZXR3b3JrX2hvc3BpdGFscyAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwub3RoZXJfbmV0d29ya19ob3NwaXRhbHMubGVuZ3RoP1xuXHRcdFx0XHRcdFx0XHRcdDxJcGRDYXJvdXNlbCB7Li4udGhpcy5wcm9wc30gaG9zcGl0YWxfZGF0YSA9e3RoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbH0vPlxuXHRcdFx0XHRcdFx0XHRcdDonJ1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpcGQtdGFicy1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtgJHt0aGlzLnByb3BzLmxvY2F0aW9uICYmIHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWU/YCR7dGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZX0/dHlwZSNkb2N0b3JzYDonJ31gfSBjbGFzc05hbWU9e2BpcGQtdGItdGFicyAke3RoaXMuc3RhdGUudG9nZ2xlVGFiVHlwZSA9PSAnZG9jdG9ycycgPyAnIGlwZC10Yi1hY3RpdmUnIDogJyd9YH0gb25DbGljaz17KGUpPT57XG5cdFx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMudG9nZ2xlVGFicygnZG9jdG9ycycpXG5cdFx0XHRcdFx0XHRcdFx0fX0+RG9jdG9yczwvYT5cblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmJlZF9jb3VudCAmJiBmYWxzZSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2Ake3RoaXMucHJvcHMubG9jYXRpb24gJiYgdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZT9gJHt0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lfT90eXBlI2Jvb2tOb3dgOicnfWB9IGNsYXNzTmFtZT17YGlwZC10Yi10YWJzICR7dGhpcy5zdGF0ZS50b2dnbGVUYWJUeXBlID09ICdib29rTm93JyA/ICcgaXBkLXRiLWFjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXsoZSk9Pntcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnRvZ2dsZVRhYnMoJ2Jvb2tOb3cnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5Cb29rIE5vdzwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLnJhdGluZ19ncmFwaCAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwucmF0aW5nX2dyYXBoLnN0YXJfY291bnQgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmRpc3BsYXlfcmF0aW5nX3dpZGdldD9cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj17YCR7dGhpcy5wcm9wcy5sb2NhdGlvbiAmJiB0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lP2Ake3RoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWV9P3R5cGUjZmVlZGJhY2tgOicnfWB9IGNsYXNzTmFtZT17YGlwZC10Yi10YWJzICR7dGhpcy5zdGF0ZS50b2dnbGVUYWJUeXBlID09ICdmZWVkYmFjaycgPyAnIGlwZC10Yi1hY3RpdmUnIDogJyd9YH0gb25DbGljaz17KGUpPT57XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy50b2dnbGVUYWJzKCdmZWVkYmFjaycpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PkZlZWRiYWNrPC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6JydcdFxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLm9mZmVycyAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwub2ZmZXJzLmxlbmd0aD9cblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2Ake3RoaXMucHJvcHMubG9jYXRpb24gJiYgdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZT9gJHt0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lfT90eXBlI29mZmVyc2A6Jyd9YH0gY2xhc3NOYW1lPXtgaXBkLXRiLXRhYnMgJHt0aGlzLnN0YXRlLnRvZ2dsZVRhYlR5cGUgPT0gJ29mZmVycycgPyAnIGlwZC10Yi1hY3RpdmUnIDogJyd9YH0gb25DbGljaz17KGUpPT57XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnRvZ2dsZVRhYnMoJ29mZmVycycpXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5PZmZlcnM8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ6JydcdFxuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbCAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuaXNfaXBkX2hvc3BpdGFsID9cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgaWQ9XCJjb21tb25fc2VhcmNoXCIgY2xhc3NOYW1lPVwiaXBkLXNsLXNyY2hcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PENvbW1vblNlYXJjaCB7Li4udGhpcy5wcm9wc30gaG9zcGl0YWxfaWRfc2VhcmNoPXt0aGlzLnByb3BzLmhvc3BpdGFsX2lkfSBjb21tb25TZWFyY2g9e3RydWV9IGdldElucHV0Rm9jdXM9e3RoaXMuZ2V0SW5wdXRGb2N1cy5iaW5kKHRoaXMpfSBob3NwaXRhbF9sYXQ9e3RoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5sYXR9IGhvc3BpdGFsX2xvbmc9e3RoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5sb25nfSBob3NwaXRhbF9zZWFyY2hfbmFtZT17dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLm5hbWUgfHwgJyd9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmFsbF9zcGVjaWFsaXphdGlvbl9ncm91cHMgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmFsbF9zcGVjaWFsaXphdGlvbl9ncm91cHMubGVuZ3RoID9cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic29ydC1zdWItZmlsdGVyLWNvbnRhaW5lciBtYi0zXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwPjxzcGFuIGNsYXNzTmFtZT1cImZ3LTcwMFwiPlBvcHVsYXIgU3BlY2lhbGl6YXRpb25zPC9zcGFuPjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzcnQtc2ItYnRuLWNvbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuYWxsX3NwZWNpYWxpemF0aW9uX2dyb3Vwcy5tYXAoKGNhdGVnb3J5LCBqKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8YnV0dG9uIGtleT17an0gY2xhc3NOYW1lPSdzcnQtYWN0JyBpZD17Y2F0ZWdvcnkuaWR9IG9uQ2xpY2s9e3RoaXMuYXBwbHlRdWlja0ZpbHRlcnMuYmluZCh0aGlzLCBjYXRlZ29yeSl9PiB7Y2F0ZWdvcnkubmFtZX08L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PiA6ICcnXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0PGRpdiBpZD1cImRvY3RvcnNcIiByZWY9XCJkb2N0b3JzXCI+XG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsICYmICgodGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmRvY3RvcnMgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmRvY3RvcnMucmVzdWx0Lmxlbmd0aCkgfHwgKHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5zcGVjaWFsaXphdGlvbl9kb2N0b3JzICYmIHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5zcGVjaWFsaXphdGlvbl9kb2N0b3JzLnJlc3VsdC5sZW5ndGgpKSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkXCI+PGgyIGNsYXNzTmFtZT1cImRzcGx5LWlwZC1oZG5nXCI+e2Ake3RoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5zZW9fdGl0bGU/dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLnNlb190aXRsZTp0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwubmFtZV9jaXR5ID8gdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLm5hbWVfY2l0eSA6ICcnfSBEb2N0b3JzIExpc3RgfTwvaDI+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5zcGVjaWFsaXphdGlvbl9kb2N0b3JzICYmIHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5zcGVjaWFsaXphdGlvbl9kb2N0b3JzLnJlc3VsdC5sZW5ndGggP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5zcGVjaWFsaXphdGlvbl9kb2N0b3JzLnJlc3VsdC5tYXAoKGRvY3RvckNhcmQsIGkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8RG9jdG9yUmVzdWx0Q2FyZCBkZXRhaWxzPXtkb2N0b3JDYXJkfSBrZXk9e2l9IHJhbms9e2l9IHNlb0ZyaWVuZGx5PXt0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuc3BlY2lhbGl6YXRpb25fZG9jdG9ycy5zZW99IHsuLi50aGlzLnByb3BzfSBpc0hvc3BpdGFsUGFnZT17dHJ1ZX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmRvY3RvcnMucmVzdWx0Lm1hcCgoZG9jdG9yQ2FyZCwgaSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxEb2N0b3JSZXN1bHRDYXJkIGRldGFpbHM9e2RvY3RvckNhcmR9IGtleT17aX0gcmFuaz17aX0gc2VvRnJpZW5kbHk9e3RoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5kb2N0b3JzLnNlb30gey4uLnRoaXMucHJvcHN9IGlzSG9zcGl0YWxQYWdlPXt0cnVlfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhbGduLWFuY2hyXCI+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLnNwZWNpYWxpemF0aW9uX2RvY3RvcnMgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLnNwZWNpYWxpemF0aW9uX2RvY3RvcnMucmVzdWx0Lmxlbmd0aCA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBvbkNsaWNrPXt0aGlzLnZpZXdEb2N0b3JzQ2xpY2tlZC5iaW5kKHRoaXMsIHRoaXMucHJvcHMuc3BlY2lhbGl6YXRpb25faWQgfHwgJycpfT57dGhpcy5nZXRTcGVjaWFsaXphdGlvbk5hbWUoKX08L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmRvY3RvcnMgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmRvY3RvcnMucmVzdWx0Lmxlbmd0aCA8IHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5kb2N0b3JzLmNvdW50ID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIG9uQ2xpY2s9e3RoaXMudmlld0RvY3RvcnNDbGlja2VkLmJpbmQodGhpcywgZmFsc2UpfT57dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLnNwZWNpYWxpemF0aW9uX2RvY3RvcnMgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLnNwZWNpYWxpemF0aW9uX2RvY3RvcnMucmVzdWx0Lmxlbmd0aCA/ICcgLycgOiAnJ317YFZpZXcgYWxsICR7dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmRvY3RvcnMuY291bnR9IERvY3RvcnNgfTwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsICYmIHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5iZWRfY291bnQgJiYgZmFsc2UgP1xuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBpZD1cImJvb2tOb3dcIiByZWY9XCJib29rTm93XCIgY2xhc3NOYW1lPVwibmF2X3RvcF9iYXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PElwZEZvcm1WaWV3IHsuLi50aGlzLnByb3BzfSB0YWJWaWV3PXt0cnVlfSBmb3JtU291cmNlPSdJcGRIb3NwaXRhbERldGFpbFBhZ2UnIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdDxkaXYgaWQ9XCJmZWVkYmFja1wiIHJlZj1cImZlZWRiYWNrXCIgY2xhc3NOYW1lPVwibXQtMVwiPlxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbCAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwucmF0aW5nX2dyYXBoICYmIHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5yYXRpbmdfZ3JhcGguc3Rhcl9jb3VudCAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuZGlzcGxheV9yYXRpbmdfd2lkZ2V0ID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJocy1jYXJkXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRcIj48aDIgY2xhc3NOYW1lPVwiZHNwbHktaXBkLWhkbmdcIj5SZXZpZXdzIGZvciB7dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLm5hbWUgPyB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwubmFtZSA6ICcnfTwvaDI+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFJhdGluZ0dyYXBoIGRldGFpbHM9e3RoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbH0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLnJhdGluZyAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwucmF0aW5nLmxlbmd0aCAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuZGlzcGxheV9yYXRpbmdfd2lkZ2V0ID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFJldmlld0xpc3QgZGV0YWlscz17dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLm9mZmVycyAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwub2ZmZXJzLmxlbmd0aCA/XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGlkPVwib2ZmZXJzXCIgcmVmPVwib2ZmZXJzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxJcGRPZmZlcnNQYWdlIHsuLi50aGlzLnByb3BzfSBvZmZlcnM9e3RoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5vZmZlcnN9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdDxkaXYgcmVmPVwidmlld19tb3JlXCI+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsICYmIHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5pcGRfcHJvY2VkdXJlX2NhdGVnb3JpZXMgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmlwZF9wcm9jZWR1cmVfY2F0ZWdvcmllcy5sZW5ndGggP1xuXHRcdFx0XHRcdFx0XHRcdFx0PEhvc3BpdGFsVHJlYXRtZW50IGhvc3BpdGFsX2RhdGE9e3RoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbH0gey4uLnRoaXMucHJvcHN9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsICYmIHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5zZXJ2aWNlcyAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwuc2VydmljZXMubGVuZ3RoID9cblx0XHRcdFx0XHRcdFx0XHRcdDxIb3NwaXRhbFNlcnZpY2VzIGhvc3BpdGFsX2RhdGE9e3RoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbH0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHsvKlxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbCAmJiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwub3RoZXJfbmV0d29ya19ob3NwaXRhbHMgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLm90aGVyX25ldHdvcmtfaG9zcGl0YWxzLmxlbmd0aCA/XG5cdFx0XHRcdFx0XHRcdFx0XHQ8SG9zcGl0YWxMb2NhdGlvbnMgaG9zcGl0YWxfZGF0YT17dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsfSAvPlxuXG5cdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHRcdCovfVxuXG5cdFx0XHRcdFx0XHRcdHsvKiB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsICYmIHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5pbWFnZXMgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmltYWdlcy5sZW5ndGggP1xuXHRcdFx0XHRcdFx0XHRcdFx0PEhvc3BpdGFsR2FsbGVyeSBob3NwaXRhbF9kYXRhPXt0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWx9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHRcdH0gKi99XG5cblxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsICYmICh0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwubmV3X2Fib3V0KSA/XG5cdFx0XHRcdFx0XHRcdFx0XHQ8SG9zcGl0YWxBYm91dFVzIGhvc3BpdGFsX2RhdGE9e3RoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbH0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLnF1ZXN0aW9uX2Fuc3dlcnMgJiYgdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLnF1ZXN0aW9uX2Fuc3dlcnMubGVuZ3RoID9cblx0XHRcdFx0XHRcdFx0XHRcdDxJcGRRdWVzdGlvbkFuc3dlciBob3NwaXRhbF9kYXRhPXt0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWx9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpcGQtd2RnLXBkbmdcIj5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ob3NwaXRhbENvbW1lbnRzICYmIHRoaXMucHJvcHMuaG9zcGl0YWxDb21tZW50cy5sZW5ndGg/XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY29tbWVudHMtbWFpbi1oZWFkaW5nXCI+e2BVc2VyIENvbW1lbnRzICgke3RoaXMucHJvcHMuaG9zcGl0YWxDb21tZW50cy5sZW5ndGh9KWB9PC9oND5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhvc3BpdGFsQ29tbWVudHMubWFwKChjb21tZW50LCBrZXkpID0+IHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxSZXBseSBrZXk9e2NvbW1lbnQuaWR9IGNvbW1lbnRSZXBseUNsaWNrZWQ9e3RoaXMuY29tbWVudFJlcGx5Q2xpY2tlZC5iaW5kKHRoaXMpfSBpc1VzZXJMb2dpbj17aXNVc2VyTG9naW59IHsuLi50aGlzLnByb3BzfSB7Li4udGhpcy5zdGF0ZX0gXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0bG9hZENvbW1lbnRzPXt0aGlzLmxvYWRDb21tZW50cy5iaW5kKHRoaXMpfSBwb3N0Q29tbWVudD17dGhpcy5wcm9wcy5wb3N0SG9zcGl0YWxDb21tZW50c31cblxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdFJlcGx5PXt0aGlzLnBvc3RSZXBseS5iaW5kKHRoaXMpfSBoYW5kbGVJbnB1dENvbW1lbnQ9e3RoaXMuaGFuZGxlSW5wdXRDb21tZW50LmJpbmQodGhpcyl9IGNvbW1lbnREYXRhPXtjb21tZW50fSBjb21tZW50c0V4aXN0cz17Y29tbWVudHNFeGlzdHN9IGhvc3BpdGFsUGFnZT17dHJ1ZX0gaG9zcGl0YWxfaWQ9e3RoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5pZH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RBcnRpY2xlPXt0cnVlfS8+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTUgbXJuZy10b3AtMTIgcC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudEJveCB7Li4udGhpcy5wcm9wc30gey4uLnRoaXMuc3RhdGV9ICBwYXJlbnRDb21tZW50SWQ9e3RoaXMuc3RhdGUucmVwbHlPcGVuRm9yfSBob3NwaXRhbFBhZ2U9e3RydWV9IHBhcmVudENvbW1lbnRJZD0nJyBob3NwaXRhbF9pZD17dGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsLmlkfSBsb2FkQ29tbWVudHM9e3RoaXMubG9hZENvbW1lbnRzLmJpbmQodGhpcyl9IHBvc3RDb21tZW50PXt0aGlzLnByb3BzLnBvc3RIb3NwaXRhbENvbW1lbnRzfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXHRcdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaXBkX2NoYXQgfHwgc2hvd1BvcHVwIHx8ICh0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWwgJiYgIXRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbC5pc19pcGRfaG9zcGl0YWwpID8gJydcblx0XHRcdFx0XHRcdFx0XHRcdDogcGFyc2VkLmZyb21Qcm9jZWR1cmUgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJ0bi1zZWFyY2gtZGl2IGJ0bi1hcHBseS1kaXYgYnRuLXNibXRcIj48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIG9uQ2xpY2s9e3RoaXMuZ2V0Q29zdEVzdGltYXRlQ2xpY2tlZC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJidG4tc2VhcmNoXCI+R2V0IENvc3QgRXN0aW1hdGU8L2E+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDogPGRpdiBjbGFzc05hbWU9XCJidG4tc2VhcmNoLWRpdiBidG4tYXBwbHktZGl2IGJ0bi1zYm10XCI+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBvbkNsaWNrPXt0aGlzLmdldENvc3RFc3RpbWF0ZUNsaWNrZWQuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwiYnRuLXNlYXJjaFwiPk5lZWQgSGVscD88L2E+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdH1cblxuXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDogPExvYWRlciAvPlxuXHRcdFx0XHR9XG5cblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvc3BpdGFsRGV0YWlsVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgSXBkT2ZmZXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaG93VG5jOiBmYWxzZVxuXHRcdH1cblx0fVxuXG5cdHRvZ2dsZVRuQyhpZCkge1xuXG5cdFx0aWYgKHRoaXMuc3RhdGUuc2hvd1RuYyAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpIHtcblx0XHRcdGxldCBoZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkub2Zmc2V0SGVpZ2h0IHx8IDBcblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCBoZWlnaHQpXG5cdFx0fVxuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93VG5jOiAhdGhpcy5zdGF0ZS5zaG93VG5jIH0pXG5cblx0fVxuXG5cdHJlbmRlcigpIHtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhzLWNhcmRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpcGQtb2ZyLWNvbnRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwiaHMtb2ZyLWhlYWRpbmdcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvaXBkLW9mci5zdmcnfSAvPk9mZmVycyBBdmFpbGFibGU8L2g0PlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLm9mZmVycy5tYXAoKG9mZmVyLCBpKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiaXBkLW9mci1tYWluXCIgaWQ9e2Ake2l9X29mZmVyYH0ga2V5PXtpfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaHMtb2ZmZXJDYXJkXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaHMtb2ZyLWNyZEhlYWRpbmdcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhzLW9mci1jb250bm5cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9pcGQtY3BuLnN2Zyd9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9mZmVyLmhvc3BpdGFsID8gPHNwYW4gY2xhc3NOYW1lPVwib2Zmci1ncm4tY2RcIj57b2ZmZXIuaG9zcGl0YWx9PC9zcGFuPiA6ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e29mZmVyLnRpdGxlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2lwZC1zaGFyZS5zdmcnfSAvPiovfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJocy1vZnItY2FyZC1jb250ZW50XCI+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvZmZlci5jb3Vwb24gP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNwbi1ycXJkXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+VXNlciBQcm9tbyBjb2RlIDogIDxzcGFuPntvZmZlci5jb3Vwb259PC9zcGFuPjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+e29mZmVyLmRlc2NyaXB0aW9ufTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQhb2ZmZXIuY291cG9uID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibm8tY3BuLXJxcmRcIj5ObyBDb3Vwb24gUmVxdWlyZWQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvZmZlci5zaG93X3RuYyAmJiB0aGlzLnN0YXRlLnNob3dUbmMgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvZmZlci1oaWRlLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbGktc3R5bGVcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG9mZmVyLnRuYyB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvZmZlci5zaG93X3RuYyA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhzLW9mZmVyLWZvb3RlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0Y19jb250XCI+VCZDIEFwcGx5PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5zaG93VG5jID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInNob3ctaGlkZS1vZmZyIGN1cnNvci1wbnRyXCIgb25DbGljaz17dGhpcy50b2dnbGVUbkMuYmluZCh0aGlzLCBgJHtpfV9vZmZlcmApfSA+SGlkZSBEZXRhaWxzIDxpbWcgY2xhc3NOYW1lPVwib2Zmc2hvd0ljb24gb2ZoaWRlSWNvbiBcIiBzdHlsZT17eyB3aWR0aDogJzdweCcsIG1hcmdpbkxlZnQ6ICc1cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvcmlnaHQtc2Muc3ZnJ30gLz48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IDxwIGNsYXNzTmFtZT1cInNob3ctaGlkZS1vZmZyIGN1cnNvci1wbnRyXCIgb25DbGljaz17dGhpcy50b2dnbGVUbkMuYmluZCh0aGlzLCBgJHtpfV9vZmZlcmApfSA+U2hvdyBEZXRhaWxzIDxpbWcgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3sgd2lkdGg6ICc3cHgnLCBtYXJnaW5MZWZ0OiAnNXB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3JpZ2h0LXNjLnN2Zyd9IC8+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR7Lyo8cCBjbGFzc05hbWU9XCJvZnItdnctbW9yZVwiPlZpZXcgNiBtb3JlIG9mZmVyczwvcD4qL31cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSXBkT2ZmZXJzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBCcmVhZGNydW1iVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0cmVuZGVyKCl7XG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXHR0aGlzLnByb3BzLmJyZWFkY3J1bWIgJiYgdGhpcy5wcm9wcy5icmVhZGNydW1iLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1yYi0xMCBicmVhZGNydW1iLWxpc3QgYnJlYWRjcnVtYi1saXN0LXVsXCIgc3R5bGU9e3sgJ3dvcmRCcmVhayc6ICdicmVha1dvcmQnLCBtYXJnaW5Ub3A6JzBweCcsIG1hcmdpbkJvdHRvbTonMTBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJyZWFkY3J1bWIubWFwKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1saXN0LWl0ZW1cIiBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPT0gdGhpcy5wcm9wcy5icmVhZGNydW1iLmxlbmd0aCAtIDEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2RhdGEudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8YSBocmVmPXtkYXRhLnVybH0gdGl0bGU9e2RhdGEubGlua190aXRsZSB8fCBkYXRhLnRpdGxlfSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgoa2V5ID09IDAgfHwga2V5ID09IHRoaXMucHJvcHMuYnJlYWRjcnVtYi5sZW5ndGggLSAxKSA/IGRhdGEudXJsIDogYC8ke2RhdGEudXJsfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9PSAwIHx8IGtleSA9PSB0aGlzLnByb3BzLmJyZWFkY3J1bWIubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDAgYnJlYWRjcnVtYi10aXRsZSBicmVhZGNydW1iLWNvbG9yZWQtdGl0bGVcIj57ZGF0YS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCBicmVhZGNydW1iLXRpdGxlIGJyZWFkY3J1bWItY29sb3JlZC10aXRsZSBkLWlubGluZS1ibGNrXCI+e2RhdGEudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgIT0gdGhpcy5wcm9wcy5icmVhZGNydW1iLmxlbmd0aCAtIDEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1hcnJvd1wiPiZndDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG5cdFx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnJlYWRjcnVtYlZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuXG5jbGFzcyBJcGRRbkEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdHJlYXRtZW50OiBbXSxcbiAgICAgIGdldEFuczogdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Z2V0QW5zOiBmYWxzZX0pXG4gIH1cblxuICB0b2dnbGVUcmVhdG1lbnQoaWQpe1xuICAgIGxldCB0cmVhdG1lbnQgPSB0aGlzLnN0YXRlLnRyZWF0bWVudFxuICAgIGxldCBmb3VuZCA9IGZhbHNlXG4gICAgdHJlYXRtZW50ID0gdGhpcy5zdGF0ZS50cmVhdG1lbnQuZmlsdGVyKChpcGQpID0+IHtcbiAgICAgIGlmKGlwZCA9PSBpZCl7XG4gICAgICAgIGZvdW5kID0gdHJ1ZVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSlcbiAgICBcbiAgICBpZighZm91bmQpe1xuICAgICAgdHJlYXRtZW50LnB1c2goaWQpXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe3RyZWF0bWVudDogdHJlYXRtZW50fSlcbiAgfVxuXG5cdHJlbmRlcigpe1xuXG4gICAgbGV0IHsgaG9zcGl0YWxfZGF0YSB9ID0gdGhpcy5wcm9wc1xuXHRcdFxuICAgIHJldHVybihcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaHMtY2FyZFwiPlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkXCI+PGgyIGNsYXNzTmFtZT1cImRzcGx5LWlwZC1oZG5nXCI+RnJlcXVlbnRseSBBc2tlZCBRdWVzdGlvbnMgaW4ge2hvc3BpdGFsX2RhdGEubmFtZX08L2gyPjwvZGl2PiAgIFxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGNsZWFyZml4XCI+XG4gICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaHMtYWNjb3JkaWFuXCI+IFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBob3NwaXRhbF9kYXRhLnF1ZXN0aW9uX2Fuc3dlcnMubWFwKCh0cmVhdG1lbnQsIGkpPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImFjY29yZGlhbi1oZWFkIGZ3LTUwMFwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlVHJlYXRtZW50LmJpbmQodGhpcywgdHJlYXRtZW50LmlkKX0+e2Ake3RyZWF0bWVudC5uYW1lfWB9XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50cmVhdG1lbnQuaW5kZXhPZih0cmVhdG1lbnQuaWQpPi0xP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCtcIi9pbWFnZXMvdXAtYXJyb3cucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6PGltZyBjbGFzc05hbWU9XCJcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCtcIi9pbWFnZXMvZG93bi1hcnJvdy5wbmdcIn0gLz4gXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudHJlYXRtZW50LmluZGV4T2YodHJlYXRtZW50LmlkKT4tMSB8fCB0aGlzLnN0YXRlLmdldEFucz9cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY2NvcmRpYW4tZHRsXCIgIHN0eWxlPXt7dGV4dEFsaWduOidqdXN0aWZ5JywgZm9udFNpemU6JzE0cHgnfX0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0cmVhdG1lbnQuYW5zd2VyfX0+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgOicnICAgXG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgPC91bD5cbiAgICAgICA8L2Rpdj4gICBcbiAgICAgPC9kaXY+XG5cdFx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSXBkUW5BIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgZ2V0SG9zcGl0YURldGFpbHMgLCBzZWxlY3RPcGRUaW1lU0xvdCwgc2F2ZVByb2ZpbGVQcm9jZWR1cmVzLCBjbG9uZUNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLCB0b2dnbGVJUERDcml0ZXJpYSwgbWVyZ2VPUERTdGF0ZSwgaXBkQ2hhdFZpZXcsIGNoZWNrSXBkQ2hhdEFnZW50U3RhdHVzLCBnZXRIb3NwaXRhbENvbW1lbnRzLCBwb3N0SG9zcGl0YWxDb21tZW50cywgbWVyZ2VJcGRDcml0ZXJpYSwgY2xlYXJWaXBTZWxlY3RlZFBsYW4sIE5vbklwZEJvb2tpbmdMZWFkIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcblxuaW1wb3J0IElwZEhvc3BpdGFsRGV0YWlsVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2lwZC9JcGRIb3NwaXRhbERldGFpbFZpZXcuanMnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXInXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvTGVmdEJhcidcbmltcG9ydCBSaWdodEJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvUmlnaHRCYXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9Ib21lL2Zvb3RlcidcbmltcG9ydCBIZWxtZXRUYWdzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9IZWxtZXRUYWdzJ1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi9jb25maWcnXG5pbXBvcnQgQnJlYWRDcnVtYlZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pcGQvYnJlYWRDcnVtYi5qcydcbmltcG9ydCBEaXNjbGFpbWVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9Ib21lL3N0YXRpY0Rpc2NsYWltZXIuanMnXG5cblxuXG5jbGFzcyBIb3NwaXRhbERldGFpbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHRsZXQgaF9pZCA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmhvc3BpdGFsSWQgfHwgdGhpcy5nZXRfaG9zcGl0YWxfaWRfYnlfdXJsKHRoaXMucHJvcHMubWF0Y2gudXJsKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzcGVjaWFsaXphdGlvbl9pZDogbnVsbCxcblx0XHRcdGhvc3BpdGFsX2lkOiBoX2lkLFxuXHRcdFx0aXNfc2VvOiB0aGlzLnByb3BzLm1hdGNoLnVybC5pbmNsdWRlcygnLWhwcCcpLFxuXHRcdFx0c2hvd0lwZENoYXQ6IGZhbHNlXG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGxvYWREYXRhKHN0b3JlLCBtYXRjaCwgcXVlcnkpe1xuXHRcdGxldCBzZWFyY2hVcmwgPSBudWxsXG4gICAgICAgIGlmIChtYXRjaC51cmwuaW5jbHVkZXMoJy1ocHAnKSApIHtcbiAgICAgICAgICAgIHNlYXJjaFVybCA9IG1hdGNoLnVybC50b0xvd2VyQ2FzZSgpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIFx0dHJ5e1xuICAgICAgICBcdFx0XG4gICAgICAgIFx0XHRyZXR1cm4gc3RvcmUuZGlzcGF0Y2goZ2V0SG9zcGl0YURldGFpbHMobWF0Y2gucGFyYW1zLmhvc3BpdGFsSWQsIG51bGwsIHNlYXJjaFVybCwgcXVlcnkuc3BlY2lhbGl6YXRpb25faWQgfHwgJycsIChyZXNwKT0+e1xuICAgICAgICBcdFx0XHRpZihyZXNwICYmIHJlc3AuaWQpe1xuICAgICAgICBcdFx0XHRcdHN0b3JlLmRpc3BhdGNoKGdldEhvc3BpdGFsQ29tbWVudHMocmVzcC5pZCkpXG4gICAgICAgIFx0XHRcdH1cbiAgICAgICAgXHRcdFx0aWYocmVzcCAmJiByZXNwLnN0YXR1cyAmJiByZXNwLnN0YXR1cz09MzAxKXtcbiAgICAgICAgXHRcdFx0XHRyZXNvbHZlKHsgc3RhdHVzOiAzMDEgfSlcbiAgICAgICAgXHRcdFx0fWVsc2V7XG4gICAgICAgIFx0XHRcdFx0cmVzb2x2ZSh7fSlcbiAgICAgICAgXHRcdFx0fVxuICAgICAgICBcdFx0fSkgKVxuICAgICAgICBcdH1jYXRjaChlKXtcbiAgICAgICAgXHRcdHJlamVjdCgpXG4gICAgICAgIFx0fVxuICAgICAgICB9KVxuXHR9XG5cblx0c3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcm91dGVyOiAoKSA9PiBudWxsXG4gICAgfVxuXG4gICAgZ2V0X2hvc3BpdGFsX2lkX2J5X3VybCh1cmwpIHtcbiAgICAgICAgZm9yIChsZXQgZF9pZCBpbiB0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWxfaW5mbykge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbF9pbmZvW2RfaWRdLmNhbm9uaWNhbF91cmwgJiYgdXJsICYmIHVybC5pbmNsdWRlcyh0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWxfaW5mb1tkX2lkXS5jYW5vbmljYWxfdXJsKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkX2lkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHRcblx0XHRsZXQgc2VhcmNoVXJsID0gbnVsbFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoJy1ocHAnKSApIHtcbiAgICAgICAgICAgIHNlYXJjaFVybCA9IHRoaXMucHJvcHMubWF0Y2gudXJsLnRvTG93ZXJDYXNlKClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgc3BlY2lhbGl6YXRpb25faWQgPSAnJ1xuICAgICAgICBpZihwYXJzZWQuc3BlY2lhbGl6YXRpb25faWQpe1xuICAgICAgICBcdHNwZWNpYWxpemF0aW9uX2lkID0gcGFyc2VkLnNwZWNpYWxpemF0aW9uX2lkXG4gICAgICAgIFx0dGhpcy5zZXRTdGF0ZSh7c3BlY2lhbGl6YXRpb25faWQ6IHBhcnNlZC5zcGVjaWFsaXphdGlvbl9pZH0pXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGhvc3BpdGFsSWQgPSBzZWFyY2hVcmw/Jyc6dGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaG9zcGl0YWxJZFxuICAgICAgICAvL2lmKCF0aGlzLnN0YXRlLmhvc3BpdGFsX2lkIHx8ICF0aGlzLnByb3BzLmlwZF9ob3NwaXRhbF9kZXRhaWxfaW5mbyB8fCAhdGhpcy5wcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsX2luZm9bdGhpcy5zdGF0ZS5ob3NwaXRhbF9pZF0pIHtcbiAgICAgICAgXHR0aGlzLnByb3BzLmdldEhvc3BpdGFEZXRhaWxzKGhvc3BpdGFsSWQsIHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiwgc2VhcmNoVXJsLCBzcGVjaWFsaXphdGlvbl9pZCwgKHJlc3ApID0+IHtcbiAgICAgICAgXHRcdGlmKHJlc3AgJiYgcmVzcC5zdGF0dXMgJiYgcmVzcC5zdGF0dXM9PTMwMSl7XG4gICAgICAgIFx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHtyZXNwLnVybH1gKVxuICAgICAgICBcdFx0fWVsc2UgaWYocmVzcCAmJiByZXNwLmlkKSB7XG4gICAgICAgIFx0XHRcdHRoaXMucHJvcHMuZ2V0SG9zcGl0YWxDb21tZW50cyhyZXNwLmlkKVxuICAgICAgICBcdFx0XHR0aGlzLnNldFN0YXRlKHtob3NwaXRhbF9pZDogcmVzcC5pZH0pXG4gICAgICAgIFx0XHR9XG4gICAgICAgIFx0fSlcdFxuICAgICAgICAvL31cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG5cdFx0aWYodGhpcy5wcm9wcy5sb2NhdGlvbkZldGNoZWQgIT0gbmV4dFByb3BzLmxvY2F0aW9uRmV0Y2hlZCl7XG5cdFx0XHRsZXQgc2VhcmNoVXJsID0gbnVsbFxuXHQgICAgICAgIGlmICh0aGlzLnByb3BzLm1hdGNoLnVybC5pbmNsdWRlcygnLWhwcCcpICkge1xuXHQgICAgICAgICAgICBzZWFyY2hVcmwgPSB0aGlzLnByb3BzLm1hdGNoLnVybC50b0xvd2VyQ2FzZSgpXG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cdCAgICAgICAgbGV0IHNwZWNpYWxpemF0aW9uX2lkID0gJydcblx0ICAgICAgICBpZihwYXJzZWQuc3BlY2lhbGl6YXRpb25faWQpe1xuXHQgICAgICAgIFx0c3BlY2lhbGl6YXRpb25faWQgPSBwYXJzZWQuc3BlY2lhbGl6YXRpb25faWRcblx0ICAgICAgICBcdHRoaXMuc2V0U3RhdGUoe3NwZWNpYWxpemF0aW9uX2lkOiBwYXJzZWQuc3BlY2lhbGl6YXRpb25faWR9KVxuXHQgICAgICAgIH1cblxuXHQgICAgICAgLy8gaWYoIXRoaXMuc3RhdGUuaG9zcGl0YWxfaWQgfHwgIW5leHRQcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsX2luZm8gfHwgIW5leHRQcm9wcy5pcGRfaG9zcGl0YWxfZGV0YWlsX2luZm9bdGhpcy5zdGF0ZS5ob3NwaXRhbF9pZF0pIHtcblx0ICAgICAgIFx0XHRcblx0ICAgICAgICBcdHRoaXMucHJvcHMuZ2V0SG9zcGl0YURldGFpbHModGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaG9zcGl0YWxJZCwgbmV4dFByb3BzLnNlbGVjdGVkTG9jYXRpb24sIHNlYXJjaFVybCwgc3BlY2lhbGl6YXRpb25faWQsIChyZXNwKSA9PiB7XG5cdCAgICAgICAgXHRcdGlmKHJlc3AgJiYgcmVzcC5zdGF0dXMgJiYgcmVzcC5zdGF0dXM9PTMwMSl7XG5cdCAgICAgICAgXHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3Jlc3AudXJsfWApXG5cdCAgICAgICAgXHRcdH1lbHNlIGlmKHJlc3AgJiYgcmVzcC5pZCkge1xuXHQgICAgICAgIFx0XHRcdHRoaXMucHJvcHMuZ2V0SG9zcGl0YWxDb21tZW50cyhyZXNwLmlkKVx0XHRcblx0ICAgICAgICBcdFx0XHR0aGlzLnNldFN0YXRlKHtob3NwaXRhbF9pZDogcmVzcC5pZH0pXG5cdCAgICAgICAgXHRcdH1cblx0ICAgICAgICBcdH0pXG5cdCAgICAgICAgLy99XG5cdFx0fVxuXHR9XG5cblx0Z2V0TWV0YVRhZ3NEYXRhKHNlb0RhdGEpIHtcblx0XHRsZXQgdGl0bGUgPSBcIkhvc3BpdGFsIFByb2ZpbGUgUGFnZVwiXG5cdFx0bGV0IGRlc2NyaXB0aW9uID0gXCJcIlxuXHRcdGxldCBzY2hlbWEgPSB7fVxuXHRcdGlmIChzZW9EYXRhKSB7XG5cdFx0XHR0aXRsZSA9IHNlb0RhdGEgJiYgc2VvRGF0YS5zZW8gJiYgc2VvRGF0YS5zZW8udGl0bGU/c2VvRGF0YS5zZW8udGl0bGUgOnNlb0RhdGEubmFtZV9jaXR5P2Ake3Nlb0RhdGEubmFtZV9jaXR5fSB8IEJvb2sgQXBwb2ludG1lbnQsIENoZWNrIERvY3RvcnMgTGlzdCwgUmV2aWV3cywgQ29udGFjdCBOdW1iZXJgOicnXG5cdFx0XHRkZXNjcmlwdGlvbiA9IHNlb0RhdGEgJiYgc2VvRGF0YS5zZW8gJiYgc2VvRGF0YS5zZW8uZGVzY3JpcHRpb24/c2VvRGF0YS5zZW8uZGVzY3JpcHRpb24gOnNlb0RhdGEubmFtZV9jaXR5P2Ake3Nlb0RhdGEubmFtZV9jaXR5fSA6IEdldCBmcmVlIGJvb2tpbmcgb24gZmlyc3QgYXBwb2ludG1lbnQuQ2hlY2sgJHtzZW9EYXRhLm5hbWU/c2VvRGF0YS5uYW1lOicnfSBEb2N0b3JzIExpc3QsIFJldmlld3MsIENvbnRhY3QgTnVtYmVyLCBBZGRyZXNzLCBQcm9jZWR1cmVzIGFuZCBtb3JlLmA6Jydcblx0XHR9XG5cdFx0cmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBzY2hlbWEgfVxuXHR9XG5cblx0c2hvd0NoYXRWaWV3KHNob3dJcGQ9ZmFsc2Upe1xuXHRcdFxuXHRcdHRoaXMuc2V0U3RhdGUoe3Nob3dJcGRDaGF0OiB0cnVlfSlcblx0fVxuXG5cdGdldFNjaGVtYShpcGRfaG9zcGl0YWxfZGV0YWlsKXtcblx0XHRsZXQgaG9zcGl0YWxfc2NoZW1hID0gXCJcIiBcbiAgICAgICAgbGV0IGJyZWFkY3J1bWJfc2NoZW1hPVwiXCJcbiAgICAgICAgbGV0IGl0ZW1MaXN0X3NjaGVtYT1cIlwiXG4gICAgICAgIGlmKGlwZF9ob3NwaXRhbF9kZXRhaWwgJiYgaXBkX2hvc3BpdGFsX2RldGFpbC5zZW8gJiYgaXBkX2hvc3BpdGFsX2RldGFpbC5zZW8uYWxsX3NjaGVtYSApe1xuICAgICAgICBcdGlwZF9ob3NwaXRhbF9kZXRhaWwuc2VvLmFsbF9zY2hlbWEubWFwKChzY2hlbWEpPT57XG4gICAgICAgIFx0XHR0cnl7XG4gICAgICAgIFx0XHRcdGlmKHNjaGVtYVsnQHR5cGUnXT09XCJIb3NwaXRhbFwiKXtcblx0ICAgICAgICBcdFx0XHRob3NwaXRhbF9zY2hlbWEgPSBKU09OLnN0cmluZ2lmeShzY2hlbWEpXG5cdCAgICAgICAgXHRcdH1cblx0ICAgICAgICBcdFx0aWYoc2NoZW1hWydAdHlwZSddPT1cIkJyZWFkY3J1bWJMaXN0XCIpe1xuXHQgICAgICAgIFx0XHRcdGJyZWFkY3J1bWJfc2NoZW1hID0gSlNPTi5zdHJpbmdpZnkoc2NoZW1hKVxuXHQgICAgICAgIFx0XHR9XG5cdCAgICAgICAgXHRcdGlmKHNjaGVtYVsnQHR5cGUnXT09XCJJdGVtTGlzdFwiKXtcblx0ICAgICAgICBcdFx0XHRpdGVtTGlzdF9zY2hlbWEgPSBKU09OLnN0cmluZ2lmeShzY2hlbWEpXG5cdCAgICAgICAgXHRcdH1cbiAgICAgICAgXHRcdH1jYXRjaChlKXtcbiAgICAgICAgXHRcdFx0aWYoc2NoZW1hWydAdHlwZSddPT1cIkhvc3BpdGFsXCIpe1xuXHQgICAgICAgIFx0XHRcdGhvc3BpdGFsX3NjaGVtYSA9ICcnXG5cdCAgICAgICAgXHRcdH1cblx0ICAgICAgICBcdFx0aWYoc2NoZW1hWydAdHlwZSddPT1cIkJyZWFkY3J1bWJMaXN0XCIpe1xuXHQgICAgICAgIFx0XHRcdGJyZWFkY3J1bWJfc2NoZW1hID0gJydcblx0ICAgICAgICBcdFx0fVxuXHQgICAgICAgIFx0XHRpZihzY2hlbWFbJ0B0eXBlJ109PVwiSXRlbUxpc3RcIil7XG5cdCAgICAgICAgXHRcdFx0aXRlbUxpc3Rfc2NoZW1hID0gJydcblx0ICAgICAgICBcdFx0fVxuICAgICAgICBcdFx0fVxuICAgICAgICBcdH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgaG9zcGl0YWxfc2NoZW1hLCBicmVhZGNydW1iX3NjaGVtYSwgaXRlbUxpc3Rfc2NoZW1hIH1cblx0fVxuXG5cdHJlbmRlcigpe1xuXG5cdFx0bGV0IGlwZF9ob3NwaXRhbF9kZXRhaWwgPSB0aGlzLnN0YXRlLmhvc3BpdGFsX2lkICYmIHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbF9pbmZvICYmIHRoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbF9pbmZvW3RoaXMuc3RhdGUuaG9zcGl0YWxfaWRdP3RoaXMucHJvcHMuaXBkX2hvc3BpdGFsX2RldGFpbF9pbmZvW3RoaXMuc3RhdGUuaG9zcGl0YWxfaWRdOnt9XG5cbiAgICAgICAgbGV0IHtob3NwaXRhbF9zY2hlbWEsIGJyZWFkY3J1bWJfc2NoZW1hLCBpdGVtTGlzdF9zY2hlbWF9ID0gdGhpcy5nZXRTY2hlbWEoaXBkX2hvc3BpdGFsX2RldGFpbClcblxuXHRcdGxldCBpc1Nlb1ZhbGlkPSB0cnVlXG4gICAgICAgIGlmKENPTkZJRy5TRU9fRlJJRU5ETFlfSE9TUElUQUxfSURTICYmIHRoaXMuc3RhdGUuaG9zcGl0YWxfaWQgJiYgIENPTkZJRy5TRU9fRlJJRU5ETFlfSE9TUElUQUxfSURTLmluZGV4T2YocGFyc2VJbnQodGhpcy5zdGF0ZS5ob3NwaXRhbF9pZCkpPiAtMSl7XG4gICAgICAgICAgICBpc1Nlb1ZhbGlkID0gZmFsc2VcbiAgICAgICAgfVxuXHRcdHJldHVybihcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuXHRcdFx0XHRcdDxQcm9maWxlSGVhZGVyIHNob3dTZWFyY2g9e3RydWV9IHBhZ2VUeXBlPSdIb3NwaXRhbERldGFpbFBhZ2UnIG5ld19maXhlZF9oZWFkZXI9ezF9Lz5cblx0XHRcdFx0XHQ8SGVsbWV0VGFncyB0YWdzRGF0YT17e1xuXHRcdFx0XHRcdFx0Y2Fub25pY2FsVXJsOiBgJHtDT05GSUcuQVBJX0JBU0VfVVJMfSR7dGhpcy5wcm9wcy5tYXRjaC51cmx9YCxcblx0XHRcdFx0XHRcdHRpdGxlOiB0aGlzLmdldE1ldGFUYWdzRGF0YShpcGRfaG9zcGl0YWxfZGV0YWlsID8gaXBkX2hvc3BpdGFsX2RldGFpbCA6IG51bGwpLnRpdGxlLFxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb246IHRoaXMuZ2V0TWV0YVRhZ3NEYXRhKGlwZF9ob3NwaXRhbF9kZXRhaWwgPyBpcGRfaG9zcGl0YWxfZGV0YWlsIDogbnVsbCkuZGVzY3JpcHRpb25cblx0XHRcdFx0XHR9fSBub0luZGV4PXshdGhpcy5zdGF0ZS5pc19zZW8gfHwgIWlzU2VvVmFsaWR9IC8+XG5cdFx0XHRcdFx0e1xuICAgICAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWxfc2NoZW1hID8gPHNjcmlwdCB0eXBlPVwiYXBwbGljYXRpb24vbGQranNvblwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX19odG1sOiBob3NwaXRhbF9zY2hlbWFcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFkY3J1bWJfc2NoZW1hID8gPHNjcmlwdCB0eXBlPVwiYXBwbGljYXRpb24vbGQranNvblwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX19odG1sOiBicmVhZGNydW1iX3NjaGVtYVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUxpc3Rfc2NoZW1hID8gPHNjcmlwdCB0eXBlPVwiYXBwbGljYXRpb24vbGQranNvblwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX19odG1sOiBpdGVtTGlzdF9zY2hlbWFcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIHBhcmVudC1zZWN0aW9uIGJvb2stYXBwb2ludG1lbnQtc2VjdGlvbiBicmVhZGNydW1iLW1yZ24gIGhvc3BpdGFsLXZpZXctc2VjdGlvblwiPlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRpcGRfaG9zcGl0YWxfZGV0YWlsICYmIGlwZF9ob3NwaXRhbF9kZXRhaWwuYnJlYWRjcnVtYiAmJlx0XG5cdFx0XHRcdFx0XHRcdFx0PEJyZWFkQ3J1bWJWaWV3IGJyZWFkY3J1bWI9e2lwZF9ob3NwaXRhbF9kZXRhaWwuYnJlYWRjcnVtYn0gey4uLnRoaXMucHJvcHN9IC8+XG5cdFx0XHRcdFx0XHR9XG5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG5cdFx0XHRcdFx0XHRcdDxMZWZ0QmFyIC8+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03IGNlbnRlci1jb2x1bW5cIj5cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGlwZF9ob3NwaXRhbF9kZXRhaWwgJiYgaXBkX2hvc3BpdGFsX2RldGFpbC5pZD9cblx0XHRcdFx0XHRcdFx0XHQ8SXBkSG9zcGl0YWxEZXRhaWxWaWV3IHsuLi50aGlzLnByb3BzfSB7Li4udGhpcy5zdGF0ZX0gaXBkX2hvc3BpdGFsX2RldGFpbD17aXBkX2hvc3BpdGFsX2RldGFpbH0gc2hvd0NoYXRWaWV3PXt0aGlzLnNob3dDaGF0Vmlldy5iaW5kKHRoaXMpfS8+XG5cdFx0XHRcdFx0XHRcdFx0OjxMb2FkZXIgLz5cdFx0XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PFJpZ2h0QmFyIGV4dHJhQ2xhc3M9XCIgY2hhdC1mbG9hdC1idG4tMlwiIHNob3dIYWxmU2NyZWVuQ2hhdD17ZmFsc2UgJiYgdGhpcy5wcm9wcy5pcGRfY2hhdCAmJiB0aGlzLnByb3BzLmlwZF9jaGF0LnNob3dJcGRDaGF0P3RydWU6ZmFsc2V9IHNob3dEZXNrdG9wSXBkPXt0cnVlfSBpcGRGb3JtUGFyYW1zPXt0aGlzLnN0YXRlLnNob3dJcGRDaGF0ID90cnVlOmZhbHNlfSBtc2dUZW1wbGF0ZT1cImdvbGRfZ2VuZXJhbF90ZW1wbGF0ZVwiLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0XHQ8RGlzY2xhaW1lciAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHQpXG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG5cdFxuXHRjb25zdCB7XG5cdFx0aXBkX2NoYXQsXG5cdFx0aXNfaXBkX2Zvcm1fc3VibWl0dGVkLFxuXHRcdHByb2ZpbGVzLFxuXHRcdGRlZmF1bHRQcm9maWxlXG5cdH0gPSBzdGF0ZS5VU0VSXG5cblx0Y29uc3Qge1xuICAgICAgICBzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICBsb2NhdGlvblR5cGUsXG4gICAgICAgIGZpbHRlckNyaXRlcmlhXG4gICAgfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9PUERcblxuXHRjb25zdCB7XG5cdFx0aXBkX2hvc3BpdGFsX2RldGFpbF9pbmZvLFxuXHRcdEhPU1BJVEFMX0RFVEFJTF9MT0FERUQsXG5cdFx0Y29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMsXG5cdFx0bG9jYXRpb25GZXRjaGVkLFxuXHRcdHNlbGVjdGVkQ3JpdGVyaWFzLFxuXHRcdGhvc3BpdGFsQ29tbWVudHNcblx0fSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9JUERcblxuXHRyZXR1cm4ge1xuXHRcdHNlbGVjdGVkTG9jYXRpb24sXG4gICAgICAgIGxvY2F0aW9uVHlwZSxcbiAgICAgICAgaXBkX2hvc3BpdGFsX2RldGFpbF9pbmZvLFxuICAgICAgICBIT1NQSVRBTF9ERVRBSUxfTE9BREVELFxuICAgICAgICBjb21tb25TZWxlY3RlZENyaXRlcmlhcyxcbiAgICAgICAgbG9jYXRpb25GZXRjaGVkLFxuICAgICAgICBzZWxlY3RlZENyaXRlcmlhcyxcbiAgICAgICAgZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgIGlwZF9jaGF0LFxuICAgICAgICBpc19pcGRfZm9ybV9zdWJtaXR0ZWQsXG4gICAgICAgIGhvc3BpdGFsQ29tbWVudHMsXG4gICAgICAgIHByb2ZpbGVzLFxuICAgICAgICBkZWZhdWx0UHJvZmlsZVxuXHR9XG59XG5cbmNvbnN0IG1hcERpc3B0YWNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuXG5cdHJldHVybntcblx0XHRnZXRIb3NwaXRhRGV0YWlsczooaG9zcGl0YWxJZCwgc2VsZWN0ZWRMb2NhdGlvbiwgc2VhcmNoQnlVcmwsIHNwZWNpYWxpemF0aW9uX2lkLCBjYikgPT4gZGlzcGF0Y2goZ2V0SG9zcGl0YURldGFpbHMoaG9zcGl0YWxJZCwgc2VsZWN0ZWRMb2NhdGlvbiwgc2VhcmNoQnlVcmwsIHNwZWNpYWxpemF0aW9uX2lkLCBjYikpLFxuXHRcdHNhdmVQcm9maWxlUHJvY2VkdXJlczogKGRvY3Rvcl9pZCwgY2xpbmljX2lkLCBwcm9jZWR1cmVfaWRzLCBmb3JjZUFkZCkgPT4gZGlzcGF0Y2goc2F2ZVByb2ZpbGVQcm9jZWR1cmVzKGRvY3Rvcl9pZCwgY2xpbmljX2lkLCBwcm9jZWR1cmVfaWRzLCBmb3JjZUFkZCkpLFxuXHRcdHNlbGVjdE9wZFRpbWVTTG90OiAoc2xvdCwgcmVzY2hlZHVsZSwgYXBwb2ludG1lbnRJZCkgPT4gZGlzcGF0Y2goc2VsZWN0T3BkVGltZVNMb3Qoc2xvdCwgcmVzY2hlZHVsZSwgYXBwb2ludG1lbnRJZCkpLFxuXHRcdGNsb25lQ29tbW9uU2VsZWN0ZWRDcml0ZXJpYXM6IChzZWxlY3RlZENyaXRlcmlhcykgPT4gZGlzcGF0Y2goY2xvbmVDb21tb25TZWxlY3RlZENyaXRlcmlhcyhzZWxlY3RlZENyaXRlcmlhcykpLFxuXHRcdHRvZ2dsZUlQRENyaXRlcmlhOiAoY3JpdGVyaWEsIGZvcmNlQWRkKSA9PiBkaXNwYXRjaCh0b2dnbGVJUERDcml0ZXJpYShjcml0ZXJpYSwgZm9yY2VBZGQpKSxcblx0XHRtZXJnZU9QRFN0YXRlOiAoc3RhdGUpID0+IGRpc3BhdGNoKG1lcmdlT1BEU3RhdGUoc3RhdGUpKSxcblx0XHRpcGRDaGF0VmlldzogKGRhdGEpID0+IGRpc3BhdGNoKGlwZENoYXRWaWV3KGRhdGEpKSxcblx0XHRjaGVja0lwZENoYXRBZ2VudFN0YXR1czogKGNiKSA9PiBkaXNwYXRjaChjaGVja0lwZENoYXRBZ2VudFN0YXR1cyhjYikpLFxuXHRcdGdldEhvc3BpdGFsQ29tbWVudHM6IChob3NwaXRhbElkKSA9PiBkaXNwYXRjaChnZXRIb3NwaXRhbENvbW1lbnRzKGhvc3BpdGFsSWQpKSxcblx0XHRwb3N0SG9zcGl0YWxDb21tZW50czogKHBvc3REYXRhLCBjYik9PiBkaXNwYXRjaChwb3N0SG9zcGl0YWxDb21tZW50cyhwb3N0RGF0YSwgY2IpKSxcblx0XHRtZXJnZUlwZENyaXRlcmlhOiAoZmlsdGVyQ3JpdGVyaWEpPT4gZGlzcGF0Y2gobWVyZ2VJcGRDcml0ZXJpYShmaWx0ZXJDcml0ZXJpYSkpLFxuXHRcdGNsZWFyVmlwU2VsZWN0ZWRQbGFuOigpID0+IGRpc3BhdGNoKGNsZWFyVmlwU2VsZWN0ZWRQbGFuKCkpLFxuXHRcdE5vbklwZEJvb2tpbmdMZWFkOihkYXRhLGNiKSA9PmRpc3BhdGNoKE5vbklwZEJvb2tpbmdMZWFkKGRhdGEsIGNiKSksXG5cdH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwdGFjaFRvUHJvcHMpKEhvc3BpdGFsRGV0YWlsKSJdLCJzb3VyY2VSb290IjoiIn0=