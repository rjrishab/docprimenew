(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ "./dev/js/components/ipd/DoctorCarouselList.js":
/*!*****************************************************!*\
  !*** ./dev/js/components/ipd/DoctorCarouselList.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _initialsPicture = __webpack_require__(/*! ../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DoctorCarouselList = function (_React$Component) {
    _inherits(DoctorCarouselList, _React$Component);

    function DoctorCarouselList() {
        _classCallCheck(this, DoctorCarouselList);

        return _possibleConstructorReturn(this, (DoctorCarouselList.__proto__ || Object.getPrototypeOf(DoctorCarouselList)).apply(this, arguments));
    }

    _createClass(DoctorCarouselList, [{
        key: 'navigateToDoctor',
        value: function navigateToDoctor(doctor, e) {
            e.preventDefault();
            if (doctor.url) {
                this.props.history.push(doctor.url);
            } else {
                this.props.history.push('/opd/doctor/' + doctor.id + '?hide_search_data=true');
            }

            var data = {
                'Category': 'ConsumerApp', 'Action': 'recommendedDoctorClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'recommended-doctor-click', 'DoctorID': doctor.doctor_id
            };
            _gtm2.default.sendEvent({ data: data });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var doctorCardData = this.props.doctorCardData;

            return _react2.default.createElement(
                'div',
                { className: 'widge-content ct-profile pd-0' },
                _react2.default.createElement(
                    'div',
                    { className: 'widget-panel' },
                    _react2.default.createElement(
                        'div',
                        { className: 'panel-content pd-0 border-bottom-panel' },
                        _react2.default.createElement(
                            'div',
                            { className: 'docScrollSliderContainer', style: { background: 'transparent' } },
                            doctorCardData && doctorCardData.length ? doctorCardData.map(function (doctor, id) {
                                return _react2.default.createElement(
                                    'a',
                                    { href: '/' + (doctor.url ? doctor.url : 'opd/doctor/' + doctor.id + '?hide_search_data=true'), className: 'docSlideCard', key: id, onClick: function onClick(e) {
                                            return _this2.navigateToDoctor(doctor, e);
                                        } },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'docSlideHead' },
                                        _react2.default.createElement(
                                            _initialsPicture2.default,
                                            { name: doctor.name, has_image: !!doctor.thumbnail, className: 'initialsPicture-ds slideDocMainImg', style: { width: 60, height: 60, fontSize: '2rem' } },
                                            _react2.default.createElement('img', { className: 'fltr-usr-image img-round slideDocMainImg', src: doctor.thumbnail, alt: doctor.display_name, title: doctor.display_name })
                                        ),
                                        doctorCardData.average_rating ? _react2.default.createElement(
                                            'span',
                                            { className: 'rating-s-tar' },
                                            doctorCardData.average_rating,
                                            ' ',
                                            _react2.default.createElement('img', { src: "/assets" + "/images/star.png", className: 'star-img' })
                                        ) : ''
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'slideDocContent' },
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'slideDocName' },
                                            doctor.display_name
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
                                            doctor.qualifications.map(function (qualification, index) {
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
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'slideDocPrice' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'slideNamePrc' },
                                                '\u20B9 ',
                                                doctor.deal_price
                                            ),
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'slideCutPrc' },
                                                '\u20B9 ',
                                                doctor.mrp
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'slidBookBtn' },
                                            _react2.default.createElement(
                                                'button',
                                                null,
                                                'Book Now'
                                            )
                                        )
                                    )
                                );
                            }) : ''
                        )
                    )
                )
            );
        }
    }]);

    return DoctorCarouselList;
}(_react2.default.Component);

exports.default = DoctorCarouselList;

/***/ }),

/***/ "./dev/js/components/ipd/ExpansionPanelIpd.js":
/*!****************************************************!*\
  !*** ./dev/js/components/ipd/ExpansionPanelIpd.js ***!
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

var _DoctorCarouselList = __webpack_require__(/*! ./DoctorCarouselList.js */ "./dev/js/components/ipd/DoctorCarouselList.js");

var _DoctorCarouselList2 = _interopRequireDefault(_DoctorCarouselList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExpansionPanelIPD = function (_React$Component) {
    _inherits(ExpansionPanelIPD, _React$Component);

    function ExpansionPanelIPD(props) {
        _classCallCheck(this, ExpansionPanelIPD);

        var _this = _possibleConstructorReturn(this, (ExpansionPanelIPD.__proto__ || Object.getPrototypeOf(ExpansionPanelIPD)).call(this, props));

        _this.state = {
            open: _this.props.id == 0 ? true : false
        };
        return _this;
    }

    _createClass(ExpansionPanelIPD, [{
        key: 'toggleOpen',
        value: function toggleOpen() {
            this.setState({ open: !this.state.open });
        }
    }, {
        key: 'render',
        value: function render() {
            var data = this.props.data;


            return _react2.default.createElement(
                'li',
                { className: 'expansion-panel-list-item', style: { listStyle: 'none', cursor: 'pointer' } },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'title', onClick: this.toggleOpen.bind(this), style: { marginBottom: 0, fontSize: 15, fontWeight: 500, paddingRight: 30, position: 'relative' } },
                        data.name,
                        this.state.open ? _react2.default.createElement('img', { className: 'titlearrow-up', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" }) : _react2.default.createElement('img', { className: 'titlearrow', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                    ),
                    this.state.open ? _react2.default.createElement(
                        'div',
                        { className: 'more-content mr-content' },
                        data.value ? _react2.default.createElement('span', { className: 'pkg-content ulListing-stl', dangerouslySetInnerHTML: { __html: data.value } }) : '',
                        data.show_doctors && data.doctors && data.doctors.result ? _react2.default.createElement(_DoctorCarouselList2.default, _extends({ doctorCardData: data.doctors.result }, this.props)) : ''
                    ) : ""
                )
            );
        }
    }]);

    return ExpansionPanelIPD;
}(_react2.default.Component);

exports.default = ExpansionPanelIPD;

/***/ }),

/***/ "./dev/js/components/ipd/HospitalList.js":
/*!***********************************************!*\
  !*** ./dev/js/components/ipd/HospitalList.js ***!
  \***********************************************/
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

var _HospitalCard = __webpack_require__(/*! ./HospitalCard.js */ "./dev/js/components/ipd/HospitalCard.js");

var _HospitalCard2 = _interopRequireDefault(_HospitalCard);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HospitalListView = function (_React$Component) {
	_inherits(HospitalListView, _React$Component);

	function HospitalListView(props) {
		_classCallCheck(this, HospitalListView);

		var _this = _possibleConstructorReturn(this, (HospitalListView.__proto__ || Object.getPrototypeOf(HospitalListView)).call(this, props));

		_this.state = {
			toggleFilterPopup: false,
			health_insurance_provider: []
		};
		return _this;
	}

	_createClass(HospitalListView, [{
		key: 'toggleProviderFilter',
		value: function toggleProviderFilter() {
			var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];


			this.setState({ toggleFilterPopup: !this.state.toggleFilterPopup, health_insurance_provider: data });
		}
	}, {
		key: 'getCostEstimateClicked',
		value: function getCostEstimateClicked(hospitalId) {
			if (this.props.commonSelectedCriterias.length) {
				var ipd_id = this.props.commonSelectedCriterias[0].id;

				var gtmData = {
					'Category': 'ConsumerApp', 'Action': 'IpdGetCostEstimateClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-get-cost-estimate-clicked', 'selectedId': ipd_id || '', 'hospitalId': hospitalId
				};
				_gtm2.default.sendEvent({ data: gtmData });
				this.props.history.push('/ipd/' + ipd_id + '/getPriceEstimate?hospital_id=' + hospitalId);
			}
		}
	}, {
		key: 'getHospitalDetailPage',
		value: function getHospitalDetailPage(hospitalId) {
			var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

			var gtmData = {
				'Category': 'ConsumerApp', 'Action': 'HospitalDetailClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'hospital-detail-clicked', 'selectedId': hospitalId || ''
			};
			_gtm2.default.sendEvent({ data: gtmData });

			if (url) {
				this.props.history.push('/' + url + '?fromProcedure=true');
			} else {
				this.props.history.push('/ipd/hospital/' + hospitalId + '?fromProcedure=true');
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    hospitalList = _props.hospitalList,
			    ipd_info = _props.ipd_info;

			return _react2.default.createElement(
				'div',
				null,
				ipd_info && ipd_info.about && ipd_info.about.name ? _react2.default.createElement(
					'h2',
					{ className: 'section-heading hd-mrgn-top' },
					'Best ' + ipd_info.about.name + ' Hospitals ' + (ipd_info.seo ? 'in ' + this.props.ipd_info.seo.location : '')
				) : '',
				_react2.default.createElement(
					'ul',
					null,
					hospitalList && hospitalList.result ? hospitalList.result.map(function (hospital, i) {
						return _react2.default.createElement(_HospitalCard2.default, _extends({ key: i, data: hospital, getCostEstimateClicked: _this2.getCostEstimateClicked.bind(_this2), getHospitalDetailPage: _this2.getHospitalDetailPage.bind(_this2), toggleProviderFilter: _this2.toggleProviderFilter.bind(_this2) }, _this2.props));
					}) : ''
				),
				this.state.toggleFilterPopup ? _react2.default.createElement(
					'div',
					{ className: 'ipd-section' },
					_react2.default.createElement('div', { className: 'custom-overlay', onClick: this.toggleProviderFilter.bind(this) }),
					_react2.default.createElement(
						'div',
						{ className: 'custom-popup hlth-ins-pop ins-pop' },
						_react2.default.createElement(
							'div',
							{ className: 'cross-btn' },
							_react2.default.createElement('img', { src: 'https://cdn.docprime.com/cp/assets/img/icons/close.png', alt: '', onClick: this.toggleProviderFilter.bind(this) })
						),
						this.state.health_insurance_provider.length ? _react2.default.createElement(
							'div',
							{ className: 'pop-head text-center' },
							'Health Insurance Providers'
						) : '',
						this.state.health_insurance_provider.length ? _react2.default.createElement(
							'div',
							{ className: 'ins-listing' },
							_react2.default.createElement(
								'div',
								{ className: 'pop-head' },
								'Health Insurance Providers'
							),
							_react2.default.createElement(
								'ul',
								{ className: 'range-slider-ul' },
								this.state.health_insurance_provider.map(function (provider, i) {

									return _react2.default.createElement(
										'li',
										{ key: i },
										provider
									);
								})
							)
						) : ''
					)
				) : ''
			);
		}
	}]);

	return HospitalListView;
}(_react2.default.Component);

exports.default = HospitalListView;

/***/ }),

/***/ "./dev/js/components/ipd/IpdAboutUs.js":
/*!*********************************************!*\
  !*** ./dev/js/components/ipd/IpdAboutUs.js ***!
  \*********************************************/
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

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _ExpansionPanelIpd = __webpack_require__(/*! ./ExpansionPanelIpd.js */ "./dev/js/components/ipd/ExpansionPanelIpd.js");

var _ExpansionPanelIpd2 = _interopRequireDefault(_ExpansionPanelIpd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IPDAboutUsView = function (_React$Component) {
	_inherits(IPDAboutUsView, _React$Component);

	function IPDAboutUsView(props) {
		_classCallCheck(this, IPDAboutUsView);

		var _this = _possibleConstructorReturn(this, (IPDAboutUsView.__proto__ || Object.getPrototypeOf(IPDAboutUsView)).call(this, props));

		_this.state = {
			toggleReadMore: false
		};
		return _this;
	}

	_createClass(IPDAboutUsView, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var ipd_info = this.props.ipd_info;


			return _react2.default.createElement(
				'div',
				{ className: 'tab-pane fade show active', id: 'nav-overview' },
				ipd_info && ipd_info.about && ipd_info.about.all_details && ipd_info.about.all_details.length ? _react2.default.createElement(
					'h4',
					{ className: 'section-heading' },
					'About ' + (ipd_info.about ? ipd_info.about.name : 'Treatment'),
					' '
				) : '',
				ipd_info && ipd_info.about && ipd_info.about.all_details && ipd_info.about.all_details.length ? _react2.default.createElement(
					'ul',
					{ className: 'widget' },
					ipd_info.about.all_details.map(function (ipdInfo, key) {

						return _react2.default.createElement(_ExpansionPanelIpd2.default, _extends({ data: ipdInfo, key: key }, _this2.props, { id: key }));
					})
				) : ''
			);
		}
	}]);

	return IPDAboutUsView;
}(_react2.default.Component);

exports.default = IPDAboutUsView;

/***/ }),

/***/ "./dev/js/components/ipd/IpdInfo.js":
/*!******************************************!*\
  !*** ./dev/js/components/ipd/IpdInfo.js ***!
  \******************************************/
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

var _aboutIPD = __webpack_require__(/*! ./aboutIPD.js */ "./dev/js/components/ipd/aboutIPD.js");

var _aboutIPD2 = _interopRequireDefault(_aboutIPD);

var _IpdAboutUs = __webpack_require__(/*! ./IpdAboutUs.js */ "./dev/js/components/ipd/IpdAboutUs.js");

var _IpdAboutUs2 = _interopRequireDefault(_IpdAboutUs);

var _HospitalList = __webpack_require__(/*! ./HospitalList.js */ "./dev/js/components/ipd/HospitalList.js");

var _HospitalList2 = _interopRequireDefault(_HospitalList);

var _doctorResultCard = __webpack_require__(/*! ../opd/commons/doctorResultCard */ "./dev/js/components/opd/commons/doctorResultCard/index.js");

var _doctorResultCard2 = _interopRequireDefault(_doctorResultCard);

var _Loader = __webpack_require__(/*! ../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _HelmetTags = __webpack_require__(/*! ../commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _config = __webpack_require__(/*! ../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _breadCrumb = __webpack_require__(/*! ./breadCrumb.js */ "./dev/js/components/ipd/breadCrumb.js");

var _breadCrumb2 = _interopRequireDefault(_breadCrumb);

var _IpdForm = __webpack_require__(/*! ../../containers/ipd/IpdForm.js */ "./dev/js/containers/ipd/IpdForm.js");

var _IpdForm2 = _interopRequireDefault(_IpdForm);

var _ipdLeadForm = __webpack_require__(/*! ../../containers/ipd/ipdLeadForm.js */ "./dev/js/containers/ipd/ipdLeadForm.js");

var _ipdLeadForm2 = _interopRequireDefault(_ipdLeadForm);

var _IpdOffersPage = __webpack_require__(/*! ./IpdOffersPage.js */ "./dev/js/components/ipd/IpdOffersPage.js");

var _IpdOffersPage2 = _interopRequireDefault(_IpdOffersPage);

var _bannerCarousel = __webpack_require__(/*! ../commons/Home/bannerCarousel */ "./dev/js/components/commons/Home/bannerCarousel.js");

var _bannerCarousel2 = _interopRequireDefault(_bannerCarousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var IpdView = function (_React$Component) {
	_inherits(IpdView, _React$Component);

	function IpdView(props) {
		_classCallCheck(this, IpdView);

		var _this = _possibleConstructorReturn(this, (IpdView.__proto__ || Object.getPrototypeOf(IpdView)).call(this, props));

		_this.state = {
			toggleTabType: 'aboutTab',
			toggleReadMore: false,
			seoFriendly: _this.props.match.url.includes('-ipdp'),
			showLeadForm: true
		};
		return _this;
	}

	_createClass(IpdView, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			if (window) {
				window.scrollTo(0, 0);
			}

			var section = document.querySelectorAll(".nav_top_bar");
			var sections = {};
			var i = 0;

			var headerHeight = 0;

			Object.keys(this.refs).forEach(function (prp, i) {

				if (document.getElementsByClassName('stickyBar') && document.getElementsByClassName('stickyBar')[0]) {
					headerHeight = document.getElementsByClassName('stickyBar')[0].offsetTop - 100;
				}
				sections[prp] = _this2.refs[prp].offsetTop + headerHeight;
			});
			//if there is any tab name in landing url then we scroll to that tab position
			var self = this;
			if (window && document) {
				window.onscroll = function () {
					var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
					for (i in sections) {
						if (self.refs[i]) {

							if (i.includes('readMoreView')) {
								if (scrollPosition > self.refs['readMoreView'].offsetTop + headerHeight) {
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
		}
	}, {
		key: 'toggleTabs',
		value: function toggleTabs(type) {
			//tabs in ipd info page
			if (document.getElementById(type)) {
				var gtmData = {
					'Category': 'ConsumerApp', 'Action': 'IpdTabClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-tab-clicked', selectedId: this.props.ipd_id || '', type: type
				};
				_gtm2.default.sendEvent({ data: gtmData });

				var elmnt = document.getElementById(type);

				var headerHeight = 0;
				if (document.getElementsByClassName('stickyBar') && document.getElementsByClassName('stickyBar')[0]) {
					headerHeight = this.refs[type].offsetTop - 45;
				}
				this.setState({ toggleTabType: type });
				window.scrollTo(0, headerHeight);
			}
		}
	}, {
		key: 'viewHospitalsClicked',
		value: function viewHospitalsClicked() {
			var gtmData = {
				'Category': 'ConsumerApp', 'Action': 'IpdViewAllHospitalClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-view-all-hospital-clicked', selectedId: this.props.ipd_id || ''
			};
			_gtm2.default.sendEvent({ data: gtmData });
			this.props.mergeIpdCriteria({
				commonSelectedCriterias: this.props.commonSelectedCriterias,
				nextSelectedCriterias: this.props.commonSelectedCriterias
			});

			if (this.props.ipd_info && this.props.ipd_info.hospitals && this.props.ipd_info.hospitals.canonical_url) {

				this.props.history.push('/' + this.props.ipd_info.hospitals.canonical_url);
			} else {

				this.props.history.push('/ipd/searchHospitals');
			}
		}
	}, {
		key: 'viewDoctorsClicked',
		value: function viewDoctorsClicked() {
			if (this.props.commonSelectedCriterias && this.props.commonSelectedCriterias.length) {

				var gtmData = {
					'Category': 'ConsumerApp', 'Action': 'IpdViewAllDoctorClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-view-all-doctor-clicked', selectedId: this.props.commonSelectedCriterias[0].id || ''
				};
				_gtm2.default.sendEvent({ data: gtmData });

				var criteria = {};
				criteria.id = this.props.commonSelectedCriterias[0].id;
				criteria.name = this.props.commonSelectedCriterias[0].name;
				criteria.type = 'ipd';
				this.props.cloneCommonSelectedCriterias(criteria);

				if (this.props.ipd_info && this.props.ipd_info.doctors && this.props.ipd_info.doctors.canonical_url) {

					this.props.history.push('/' + this.props.ipd_info.doctors.canonical_url);
				} else {

					this.props.history.push('/opd/searchresults');
				}
			}
		}
	}, {
		key: 'getCostEstimateClicked',
		value: function getCostEstimateClicked() {
			var gtmData = {
				'Category': 'ConsumerApp', 'Action': 'IpdGetCostEstimateClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-get-cost-estimate-clicked', selectedId: this.props.ipd_id || ''
			};
			_gtm2.default.sendEvent({ data: gtmData });
			this.props.history.push('/ipd/' + this.props.ipd_id + '/getPriceEstimate');
		}
	}, {
		key: 'readMoreClicked',
		value: function readMoreClicked() {
			this.setState({ toggleReadMore: true });
			if (this.refs['readMoreView']) {
				var headerHeight = this.refs['readMoreView'].offsetTop - 45;
				window.scrollTo(0, headerHeight);
			}
		}
	}, {
		key: 'getMetaTagsData',
		value: function getMetaTagsData(seoData) {
			var title = "IPD Procedure Page";
			if (this.state.seoFriendly) {
				title = "";
			}
			var description = "";
			if (seoData) {
				title = seoData.title || "";
				description = seoData.description || "";
			}
			return { title: title, description: description };
		}
	}, {
		key: 'submitLeadFormGeneration',
		value: function submitLeadFormGeneration(ipdFormParams) {
			var _this3 = this;

			if (ipdFormParams) {
				var gtmData = {
					'Category': 'ConsumerApp', 'Action': 'IpdProcedurePageFormClosed', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-procedure-page-form-closed'
				};
				_gtm2.default.sendEvent({ data: gtmData });
			}
			var ipd_data = {
				showChat: true,
				ipdFormParams: ipdFormParams
			};

			this.setState({ showLeadForm: false, ipdFormParams: ipdFormParams }, function () {

				_this3.props.checkIpdChatAgentStatus(function (response) {
					if (response && response.users && response.users.length) {

						// this.props.ipdChatView({showIpdChat:true, ipdForm: ipdFormParams, showMinimize: true})
					}
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			var parsed = queryString.parse(this.props.location.search);

			var showPopup =  false && false;

			return _react2.default.createElement(
				'div',
				{ className: 'ipd-section ipdSection cardMainPaddingRmv' },
				showPopup ? _react2.default.createElement(_ipdLeadForm2.default, _extends({ submitLeadFormGeneration: this.submitLeadFormGeneration.bind(this) }, this.props, { hospital_name: null, hospital_id: null, formSource: 'ipdProcedurePopup', procedure_id: this.props.ipd_info && this.props.ipd_info.about ? this.props.ipd_info.about.id : '', procedure_name: this.props.ipd_info && this.props.ipd_info.about ? this.props.ipd_info.about.name : '' })) : '',
				_react2.default.createElement(_HelmetTags2.default, { tagsData: {
						canonicalUrl: '' + _config2.default.API_BASE_URL + this.props.match.url,
						title: this.getMetaTagsData(this.props.ipd_info.seo).title,
						description: this.getMetaTagsData(this.props.ipd_info.seo).description
					}, noIndex: !this.state.seoFriendly }),
				this.props.offerList && this.props.offerList.filter(function (x) {
					return x.slider_location === 'ipd_procedure_page';
				}).length ? _react2.default.createElement(_bannerCarousel2.default, _extends({}, this.props, { a: 'ipd_procedure_page', sliderLocation: 'ipd_procedure_page', ipd: true })) : '',
				this.props.ipd_info && this.props.ipd_info.breadcrumb ? _react2.default.createElement(_breadCrumb2.default, _extends({ breadcrumb: this.props.ipd_info.breadcrumb }, this.props)) : '',
				_react2.default.createElement(
					'h1',
					{ className: 'section-heading top-sc-head pt-0' },
					' ',
					_react2.default.createElement(
						'span',
						{ className: 'about-head' },
						' ',
						'' + (this.props.ipd_info && Object.keys(this.props.ipd_info).length ? this.props.ipd_info.about.name + ' Cost ' + (this.props.ipd_info && this.props.ipd_info.seo && this.props.ipd_info.seo.location ? 'in ' + this.props.ipd_info.seo.location : '') + '  ' : ''),
						' '
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'full-widget mrg-b0 stickyBar' },
					_react2.default.createElement(
						'nav',
						{ className: 'tab-head' },
						_react2.default.createElement(
							'div',
							{ className: '' },
							_react2.default.createElement(
								'div',
								{ className: 'nav nav-tabs nav-top-head ', id: 'nav-tab', role: 'tablist' },
								_react2.default.createElement(
									'a',
									{ className: 'nav-item nav-link ' + (this.state.toggleTabType == 'aboutTab' ? 'active' : ''), 'data-toggle': 'tab', href: 'javascript:void(0);', role: 'tab', onClick: this.toggleTabs.bind(this, 'aboutTab') },
									'Overview'
								),
								this.props.ipd_info && this.props.ipd_info.hospitals && this.props.ipd_info.hospitals.result && this.props.ipd_info.hospitals.result.length ? _react2.default.createElement(
									'a',
									{ className: 'nav-item nav-link ' + (this.state.toggleTabType == 'hospitalTab' ? 'active' : ''), 'data-toggle': 'tab', href: 'javascript:void(0);', role: 'tab', onClick: this.toggleTabs.bind(this, 'hospitalTab') },
									'Hospitals'
								) : '',
								this.props.ipd_info && this.props.ipd_info.doctors && this.props.ipd_info.doctors.result && this.props.ipd_info.doctors.result.length ? _react2.default.createElement(
									'a',
									{ className: 'nav-item nav-link ' + (this.state.toggleTabType == 'doctorTab' ? 'active' : ''), 'data-toggle': 'tab', href: 'javascript:void(0);', role: 'tab', onClick: this.toggleTabs.bind(this, 'doctorTab') },
									'Doctors'
								) : '',
								this.props.ipd_info && this.props.ipd_info.about && this.props.ipd_info.about.offers && this.props.ipd_info.about.offers.length ? _react2.default.createElement(
									'a',
									{ className: 'nav-item nav-link ' + (this.state.toggleTabType == 'offersTab' ? 'active' : ''), 'data-toggle': 'tab', href: 'javascript:void(0);', role: 'tab', onClick: this.toggleTabs.bind(this, 'offersTab') },
									'Offers'
								) : ''
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'tab-content' },
					_react2.default.createElement(
						'div',
						{ id: 'aboutTab', ref: 'aboutTab', className: 'nav_top_bar' },
						_react2.default.createElement(_aboutIPD2.default, _extends({}, this.props, { id: 'aboutTab', readMoreClicked: this.readMoreClicked.bind(this) }))
					),
					_react2.default.createElement(
						'div',
						_defineProperty({ id: 'hospitalTab', ref: 'hospitalTab', className: 'tab-pane fade' }, 'className', 'nav_top_bar'),
						this.props.ipd_info && this.props.ipd_info.hospitals && this.props.ipd_info.hospitals.result && this.props.ipd_info.hospitals.result.length ? _react2.default.createElement(_HospitalList2.default, _extends({}, this.props, { hospitalList: this.props.ipd_info && this.props.ipd_info.hospitals ? this.props.ipd_info.hospitals : [] })) : '',
						this.props.ipd_info && this.props.ipd_info.hospitals && this.props.ipd_info.hospitals.result && this.props.ipd_info.hospitals.result.length < this.props.ipd_info.hospitals.count ? _react2.default.createElement(
							'a',
							{ href: 'javascript:void(0);', className: 'btn-view-hospital', onClick: this.viewHospitalsClicked.bind(this) },
							'View all ' + this.props.ipd_info.hospitals.count + ' Hospitals'
						) : ''
					),
					_react2.default.createElement(
						'div',
						{ id: 'doctorTab', ref: 'doctorTab', className: 'tab-pane fade nav_top_bar' },
						this.props.ipd_info && this.props.ipd_info.doctors && this.props.ipd_info.doctors.result && this.props.ipd_info.doctors.result.length && this.props.ipd_info.about && this.props.ipd_info.about.name ? _react2.default.createElement(
							'h2',
							{ className: 'section-heading hd-mrgn-top' },
							'Best ' + this.props.ipd_info.about.name + ' Doctors ' + (this.props.ipd_info.seo && this.props.ipd_info.seo.location ? 'in ' + this.props.ipd_info.seo.location : '') + ' '
						) : '',
						this.props.ipd_info && this.props.ipd_info.doctors ? this.props.ipd_info.doctors.result.map(function (doctorCard, i) {
							return _react2.default.createElement(_doctorResultCard2.default, _extends({ details: doctorCard, key: i, rank: i, seoFriendly: _this4.props.ipd_info.doctors.seo }, _this4.props));
						}) : '',
						this.props.ipd_info && this.props.ipd_info.doctors && this.props.ipd_info.doctors.result && this.props.ipd_info.doctors.result.length < this.props.ipd_info.doctors.count ? _react2.default.createElement(
							'a',
							{ href: 'javascript:void(0);', className: 'btn-view-hospital', onClick: this.viewDoctorsClicked.bind(this) },
							'View all ' + this.props.ipd_info.doctors.count + ' Doctors'
						) : ''
					),
					this.props.ipd_info && this.props.ipd_info.about && this.props.ipd_info.about.offers && this.props.ipd_info.about.offers.length ? _react2.default.createElement(
						'div',
						{ id: 'offersTab', ref: 'offersTab' },
						_react2.default.createElement(_IpdOffersPage2.default, { offers: this.props.ipd_info.about.offers })
					) : '',
					_react2.default.createElement(
						'div',
						{ ref: 'readMoreView', className: 'tab-pane fade nav_top_bar' },
						_react2.default.createElement(_IpdAboutUs2.default, this.props)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'btn-search-div btn-apply-div btn-sbmt' },
					_react2.default.createElement(
						'a',
						{ href: 'javascript:void(0);', style: { margin: 0 }, onClick: this.getCostEstimateClicked.bind(this), className: 'btn-search' },
						'Get Cost Estimate'
					)
				)
			);
		}
	}]);

	return IpdView;
}(_react2.default.Component);

exports.default = IpdView;

/***/ }),

/***/ "./dev/js/components/ipd/IpdInfoView.js":
/*!**********************************************!*\
  !*** ./dev/js/components/ipd/IpdInfoView.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _LeftBar = __webpack_require__(/*! ../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _Loader = __webpack_require__(/*! ../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _footer = __webpack_require__(/*! ../commons/Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _IpdInfo = __webpack_require__(/*! ./IpdInfo.js */ "./dev/js/components/ipd/IpdInfo.js");

var _IpdInfo2 = _interopRequireDefault(_IpdInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfoView = function (_React$Component) {
	_inherits(InfoView, _React$Component);

	function InfoView() {
		_classCallCheck(this, InfoView);

		return _possibleConstructorReturn(this, (InfoView.__proto__ || Object.getPrototypeOf(InfoView)).apply(this, arguments));
	}

	_createClass(InfoView, [{
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'div',
				{ className: 'profile-body-wrap' },
				_react2.default.createElement(_DesktopProfileHeader2.default, { showSearch: true, new_fixed_header: 1 }),
				_react2.default.createElement(
					'section',
					{ className: 'container parent-section book-appointment-section breadcrumb-mrgn hospital-view-section' },
					_react2.default.createElement(
						'div',
						{ className: 'row main-row parent-section-row' },
						_react2.default.createElement(_LeftBar2.default, null),
						_react2.default.createElement(
							'div',
							{ className: 'col-12 col-md-7 col-lg-7 center-column' },
							this.props.IPD_INFO_LOADED || this.props.ipd_info && this.props.ipd_info.about && this.props.ipd_info.about.id == this.props.ipd_id ? _react2.default.createElement(_IpdInfo2.default, this.props) : _react2.default.createElement(_Loader2.default, null)
						),
						_react2.default.createElement(_RightBar2.default, { extraClass: ' chat-float-btn-2', showDesktopIpd: true, msgTemplate: 'gold_general_template' })
					)
				),
				_react2.default.createElement(_footer2.default, null)
			);
		}
	}]);

	return InfoView;
}(_react2.default.Component);

exports.default = InfoView;

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

/***/ "./dev/js/components/ipd/aboutIPD.js":
/*!*******************************************!*\
  !*** ./dev/js/components/ipd/aboutIPD.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _HospitalList = __webpack_require__(/*! ./HospitalList.js */ "./dev/js/components/ipd/HospitalList.js");

var _HospitalList2 = _interopRequireDefault(_HospitalList);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IPDAboutUs = function (_React$Component) {
	_inherits(IPDAboutUs, _React$Component);

	function IPDAboutUs(props) {
		_classCallCheck(this, IPDAboutUs);

		var _this = _possibleConstructorReturn(this, (IPDAboutUs.__proto__ || Object.getPrototypeOf(IPDAboutUs)).call(this, props));

		_this.state = {
			toggleReadMore: false
		};
		return _this;
	}

	_createClass(IPDAboutUs, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var ipd_info = this.props.ipd_info;


			var aboutText = null;
			if (ipd_info && ipd_info.about && ipd_info.about.show_about) {

				aboutText = ipd_info.about.about;
			}

			return _react2.default.createElement(
				'div',
				{ className: 'tab-pane fade show active', id: 'nav-overview' },
				_react2.default.createElement(
					'ul',
					null,
					ipd_info.about && ipd_info.about.features ? ipd_info.about.features.map(function (ipd, i) {
						return _react2.default.createElement(
							'li',
							{ key: i, className: 'widget pat-info' },
							_react2.default.createElement('img', { src: ipd.icon, alt: '', className: 'img-list' }),
							_react2.default.createElement(
								'div',
								null,
								ipd.name + ':',
								'  ',
								_react2.default.createElement(
									'span',
									null,
									ipd.value
								)
							)
						);
					}) : ''
				),
				aboutText ? _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h4',
						{ className: 'section-heading' },
						'About ' + (ipd_info.about ? ipd_info.about.name : ''),
						' '
					),
					_react2.default.createElement('div', { className: 'widget custom-li-style pb-30', style: { textAlign: 'justify' }, dangerouslySetInnerHTML: { __html: aboutText } })
				) : '',
				aboutText ? this.state.toggleReadMore ? _react2.default.createElement(
					'a',
					{ href: 'javascript:void(0);', className: 'read-more-btn', onClick: function onClick() {
							var gtmData = {
								'Category': 'ConsumerApp', 'Action': 'IpdInfoReadLessClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-info-read-less-clicked', selectedId: _this2.props.ipd_id || ''
							};
							_gtm2.default.sendEvent({ data: gtmData });
							_this2.setState({ toggleReadMore: !_this2.state.toggleReadMore });
						} },
					'Read Less'
				) : _react2.default.createElement(
					'a',
					{ href: 'javascript:void(0);', className: 'read-more-btn', onClick: function onClick() {
							var gtmData = {
								'Category': 'ConsumerApp', 'Action': 'IpdInfoReadMoreClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-info-read-more-clicked', selectedId: _this2.props.ipd_id || ''
							};
							_gtm2.default.sendEvent({ data: gtmData });
							_this2.props.readMoreClicked();
							//this.props.history.push(`/ipd/${this.props.ipd_id}/detail`)
						} },
					'Read More'
				) : ''
			);
		}
	}]);

	return IPDAboutUs;
}(_react2.default.Component);

exports.default = IPDAboutUs;

/***/ }),

/***/ "./dev/js/containers/ipd/IpdInfo.js":
/*!******************************************!*\
  !*** ./dev/js/containers/ipd/IpdInfo.js ***!
  \******************************************/
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

var _IpdInfoView = __webpack_require__(/*! ../../components/ipd/IpdInfoView.js */ "./dev/js/components/ipd/IpdInfoView.js");

var _IpdInfoView2 = _interopRequireDefault(_IpdInfoView);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var IpdInfoContainer = function (_React$Component) {
	_inherits(IpdInfoContainer, _React$Component);

	function IpdInfoContainer(props) {
		_classCallCheck(this, IpdInfoContainer);

		var _this = _possibleConstructorReturn(this, (IpdInfoContainer.__proto__ || Object.getPrototypeOf(IpdInfoContainer)).call(this, props));

		_this.state = {
			ipd_id: '',
			seoUrl: false
		};
		return _this;
	}

	_createClass(IpdInfoContainer, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var parsed = queryString.parse(this.props.location.search);
			var ipd_id = '';
			var search_by_url = null;
			if (parsed.ipd_id) {
				this.setState({ ipd_id: parsed.ipd_id });
				ipd_id = parsed.ipd_id;
				this.props.getIpdInfo(parsed.ipd_id, this.props.selectedLocation);

				var gtmData = {
					'Category': 'ConsumerApp', 'Action': 'IPDInfoPageLanded', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-info-page-landed', selectedId: parsed.ipd_id || ''
				};
				_gtm2.default.sendEvent({ data: gtmData });
			} else {
				var title = this.props.match.url;
				this.setState({ seoUrl: true });
				search_by_url = title.substring(1, title.length).toLowerCase();
				this.props.getIpdInfo('', this.props.selectedLocation, search_by_url, function (resp) {
					if (resp) {
						if (resp.about && resp.about.id) {
							_this2.setState({ ipd_id: resp.about.id });

							var _gtmData = {
								'Category': 'ConsumerApp', 'Action': 'IPDInfoPageLanded', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-info-page-landed', selectedId: resp.about.id || ''
							};
							_gtm2.default.sendEvent({ data: _gtmData });
						}
					}
				});
			}
			/*else if(this.props.commonSelectedCriterias.length){
   	this.setState({ipd_id: this.props.commonSelectedCriterias[0].id})
   	ipd_id = this.props.commonSelectedCriterias[0].id
   	this.props.getIpdInfo(this.props.commonSelectedCriterias[0].id, this.props.selectedLocation)	
   }*/
			if (window) {
				window.scrollTo(0, 0);
			}

			var selectedLocation = '';
			var lat = 28.644800;
			var long = 77.216721;
			if (this.props.selectedLocation) {
				selectedLocation = this.props.selectedLocation;
				lat = selectedLocation.geometry.location.lat;
				long = selectedLocation.geometry.location.lng;
				if (typeof lat === 'function') lat = lat();
				if (typeof long === 'function') long = long();
			}

			this.props.getOfferList(lat, long);

			if (!search_by_url) {
				var new_url = this.buildUrl(this.props);
				this.props.history.replace(new_url);
			}
		}
	}, {
		key: 'buildUrl',
		value: function buildUrl(props) {
			//build url for ipd procedure info
			var lat = 28.644800;
			var long = 77.216721;
			var place_id = "";
			var locality = 'Delhi';
			var sub_locality = '';

			var parsed = queryString.parse(this.props.location.search);

			if (props.selectedLocation) {
				place_id = props.selectedLocation.place_id || "";
				lat = props.selectedLocation.geometry.location.lat;
				long = props.selectedLocation.geometry.location.lng;
				if (typeof lat === 'function') lat = lat();
				if (typeof long === 'function') long = long();

				lat = parseFloat(parseFloat(lat).toFixed(6));
				long = parseFloat(parseFloat(long).toFixed(6));

				locality = props.selectedLocation.locality || '';
				sub_locality = props.selectedLocation.sub_locality || '';
			}

			var new_url = window.location.pathname + '?ipd_id=' + parsed.ipd_id + '&place_id=' + place_id + '&lat=' + lat + '&long=' + long + '&locality=' + locality + '&sub_locality=' + sub_locality + '&showPopup=true';

			if (parsed.utm_source) {
				new_url += '&utm_source=' + (parsed.utm_source || '');
			}

			if (parsed.utm_medium) {
				new_url += '&utm_medium=' + (parsed.utm_medium || '');
			}

			if (parsed.utm_campaign) {
				new_url += '&utm_campaign=' + (parsed.utm_campaign || '');
			}

			if (this.props.is_ipd_form_submitted) {} else if (parsed && parsed.get_feedback == '1') {
				new_url += '&get_feedback=1';
			}

			if (parsed && parsed.type) {
				new_url += '&type=' + parsed.type;
			}

			return new_url;
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var _this3 = this;

			if (this.props.locationFetched != nextProps.locationFetched) {

				var parsed = queryString.parse(nextProps.location.search);
				var search_by_url = null;

				if (parsed.ipd_id) {
					this.setState({ ipd_id: parsed.ipd_id });
					this.props.getIpdInfo(parsed.ipd_id, nextProps.selectedLocation);
				} else {

					var title = this.props.match.url;
					this.setState({ seoUrl: true });
					search_by_url = title.substring(1, title.length).toLowerCase();
					this.props.getIpdInfo('', nextProps.selectedLocation, search_by_url, function (resp) {

						if (resp) {
							if (resp.about && resp.about.id) {
								_this3.setState({ ipd_id: resp.about.id });
							}
						}
					});
				} /*else if(nextProps.commonSelectedCriterias.length){
      this.setState({ipd_id: nextProps.commonSelectedCriterias[0].id})
      this.props.getIpdInfo(nextProps.commonSelectedCriterias[0].id, nextProps.selectedLocation)	
      }*/
				if (window) {
					window.scrollTo(0, 0);
				}
			}
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(_IpdInfoView2.default, _extends({}, this.props, this.state));
		}
	}], [{
		key: 'loadData',
		value: function loadData(store, match, query) {

			var search_by_url = null;
			if (query.ipd_id) {} else {

				var title = match.url;
				search_by_url = title.substring(1, title.length).toLowerCase();
			}

			var ipd_id = query && query.ipd_id ? query.ipd_id : '';

			var selectedLocation = null;
			if (query.lat && query.long) {
				selectedLocation = { geometry: { location: { lat: query.lat, lng: query.long } }, place_id: query.place_id || '', formatted_address: "Delhi", sub_locality: query.sub_locality || '', locality: query.locality || '' };
			}

			return store.dispatch((0, _index.getIpdInfo)(ipd_id, selectedLocation, search_by_url));
		}
	}]);

	return IpdInfoContainer;
}(_react2.default.Component);

IpdInfoContainer.contextTypes = {
	router: function router() {
		return null;
	}
};


var mapStateToProps = function mapStateToProps(state) {
	var selectedLocation = state.SEARCH_CRITERIA_OPD.selectedLocation;
	var _state$SEARCH_CRITERI = state.SEARCH_CRITERIA_IPD,
	    selectedCriterias = _state$SEARCH_CRITERI.selectedCriterias,
	    ipd_info = _state$SEARCH_CRITERI.ipd_info,
	    IPD_INFO_LOADED = _state$SEARCH_CRITERI.IPD_INFO_LOADED,
	    commonSelectedCriterias = _state$SEARCH_CRITERI.commonSelectedCriterias,
	    locationFetched = _state$SEARCH_CRITERI.locationFetched;
	var _state$USER = state.USER,
	    ipd_chat = _state$USER.ipd_chat,
	    offerList = _state$USER.offerList,
	    is_ipd_form_submitted = _state$USER.is_ipd_form_submitted;


	return {
		selectedLocation: selectedLocation, selectedCriterias: selectedCriterias, ipd_info: ipd_info, IPD_INFO_LOADED: IPD_INFO_LOADED, commonSelectedCriterias: commonSelectedCriterias, locationFetched: locationFetched, ipd_chat: ipd_chat, offerList: offerList,
		is_ipd_form_submitted: is_ipd_form_submitted
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		getIpdInfo: function getIpdInfo(ipd_id, selectedLocation, search_by_url, cb) {
			return dispatch((0, _index.getIpdInfo)(ipd_id, selectedLocation, search_by_url, cb));
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
		mergeIpdCriteria: function mergeIpdCriteria(filterCriteria) {
			return dispatch((0, _index.mergeIpdCriteria)(filterCriteria));
		},
		ipdChatView: function ipdChatView(data) {
			return dispatch((0, _index.ipdChatView)(data));
		},
		checkIpdChatAgentStatus: function checkIpdChatAgentStatus(cb) {
			return dispatch((0, _index.checkIpdChatAgentStatus)(cb));
		},
		getOfferList: function getOfferList(lat, long) {
			return dispatch((0, _index.getOfferList)(lat, long));
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(IpdInfoContainer);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pcGQvRG9jdG9yQ2Fyb3VzZWxMaXN0LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2lwZC9FeHBhbnNpb25QYW5lbElwZC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pcGQvSG9zcGl0YWxMaXN0LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2lwZC9JcGRBYm91dFVzLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2lwZC9JcGRJbmZvLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2lwZC9JcGRJbmZvVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pcGQvSXBkT2ZmZXJzUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pcGQvYWJvdXRJUEQuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvaXBkL0lwZEluZm8uanMiXSwibmFtZXMiOlsiRG9jdG9yQ2Fyb3VzZWxMaXN0IiwiZG9jdG9yIiwiZSIsInByZXZlbnREZWZhdWx0IiwidXJsIiwicHJvcHMiLCJoaXN0b3J5IiwicHVzaCIsImlkIiwiZGF0YSIsIkdUTSIsImdldFVzZXJJZCIsImRvY3Rvcl9pZCIsInNlbmRFdmVudCIsImRvY3RvckNhcmREYXRhIiwiYmFja2dyb3VuZCIsImxlbmd0aCIsIm1hcCIsIm5hdmlnYXRlVG9Eb2N0b3IiLCJuYW1lIiwidGh1bWJuYWlsIiwid2lkdGgiLCJoZWlnaHQiLCJmb250U2l6ZSIsImRpc3BsYXlfbmFtZSIsImF2ZXJhZ2VfcmF0aW5nIiwiQVNTRVRTX0JBU0VfVVJMIiwiZXhwZXJpZW5jZV95ZWFycyIsInF1YWxpZmljYXRpb25zIiwicXVhbGlmaWNhdGlvbiIsImluZGV4IiwiaG9zcGl0YWxzIiwibWFyZ2luVG9wIiwiaG9zcGl0YWxfbmFtZSIsImRlYWxfcHJpY2UiLCJtcnAiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkV4cGFuc2lvblBhbmVsSVBEIiwic3RhdGUiLCJvcGVuIiwic2V0U3RhdGUiLCJsaXN0U3R5bGUiLCJjdXJzb3IiLCJ0b2dnbGVPcGVuIiwiYmluZCIsIm1hcmdpbkJvdHRvbSIsImZvbnRXZWlnaHQiLCJwYWRkaW5nUmlnaHQiLCJwb3NpdGlvbiIsInZhbHVlIiwiX19odG1sIiwic2hvd19kb2N0b3JzIiwiZG9jdG9ycyIsInJlc3VsdCIsIkhvc3BpdGFsTGlzdFZpZXciLCJ0b2dnbGVGaWx0ZXJQb3B1cCIsImhlYWx0aF9pbnN1cmFuY2VfcHJvdmlkZXIiLCJob3NwaXRhbElkIiwiY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMiLCJpcGRfaWQiLCJndG1EYXRhIiwiaG9zcGl0YWxMaXN0IiwiaXBkX2luZm8iLCJhYm91dCIsInNlbyIsImxvY2F0aW9uIiwiaG9zcGl0YWwiLCJpIiwiZ2V0Q29zdEVzdGltYXRlQ2xpY2tlZCIsImdldEhvc3BpdGFsRGV0YWlsUGFnZSIsInRvZ2dsZVByb3ZpZGVyRmlsdGVyIiwicHJvdmlkZXIiLCJJUERBYm91dFVzVmlldyIsInRvZ2dsZVJlYWRNb3JlIiwiYWxsX2RldGFpbHMiLCJpcGRJbmZvIiwia2V5IiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiSXBkVmlldyIsInRvZ2dsZVRhYlR5cGUiLCJzZW9GcmllbmRseSIsIm1hdGNoIiwiaW5jbHVkZXMiLCJzaG93TGVhZEZvcm0iLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInNlY3Rpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZWN0aW9ucyIsImhlYWRlckhlaWdodCIsIk9iamVjdCIsImtleXMiLCJyZWZzIiwiZm9yRWFjaCIsInBycCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJvZmZzZXRUb3AiLCJzZWxmIiwib25zY3JvbGwiLCJzY3JvbGxQb3NpdGlvbiIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImJvZHkiLCJ0eXBlIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZWxlY3RlZElkIiwiZWxtbnQiLCJtZXJnZUlwZENyaXRlcmlhIiwibmV4dFNlbGVjdGVkQ3JpdGVyaWFzIiwiY2Fub25pY2FsX3VybCIsImNyaXRlcmlhIiwiY2xvbmVDb21tb25TZWxlY3RlZENyaXRlcmlhcyIsInNlb0RhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaXBkRm9ybVBhcmFtcyIsImlwZF9kYXRhIiwic2hvd0NoYXQiLCJjaGVja0lwZENoYXRBZ2VudFN0YXR1cyIsInJlc3BvbnNlIiwidXNlcnMiLCJwYXJzZWQiLCJwYXJzZSIsInNlYXJjaCIsInNob3dQb3B1cCIsInN1Ym1pdExlYWRGb3JtR2VuZXJhdGlvbiIsImNhbm9uaWNhbFVybCIsIkNPTkZJRyIsIkFQSV9CQVNFX1VSTCIsImdldE1ldGFUYWdzRGF0YSIsIm9mZmVyTGlzdCIsImZpbHRlciIsIngiLCJzbGlkZXJfbG9jYXRpb24iLCJicmVhZGNydW1iIiwidG9nZ2xlVGFicyIsIm9mZmVycyIsInJlYWRNb3JlQ2xpY2tlZCIsImNvdW50Iiwidmlld0hvc3BpdGFsc0NsaWNrZWQiLCJkb2N0b3JDYXJkIiwidmlld0RvY3RvcnNDbGlja2VkIiwibWFyZ2luIiwiSW5mb1ZpZXciLCJJUERfSU5GT19MT0FERUQiLCJJcGRPZmZlcnMiLCJzaG93VG5jIiwib2Zmc2V0SGVpZ2h0Iiwib2ZmZXIiLCJjb3Vwb24iLCJzaG93X3RuYyIsInRuYyIsInRvZ2dsZVRuQyIsIm1hcmdpbkxlZnQiLCJJUERBYm91dFVzIiwiYWJvdXRUZXh0Iiwic2hvd19hYm91dCIsImZlYXR1cmVzIiwiaXBkIiwiaWNvbiIsInRleHRBbGlnbiIsIklwZEluZm9Db250YWluZXIiLCJzZW9VcmwiLCJzZWFyY2hfYnlfdXJsIiwiZ2V0SXBkSW5mbyIsInNlbGVjdGVkTG9jYXRpb24iLCJzdWJzdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInJlc3AiLCJsYXQiLCJsb25nIiwiZ2VvbWV0cnkiLCJsbmciLCJnZXRPZmZlckxpc3QiLCJuZXdfdXJsIiwiYnVpbGRVcmwiLCJyZXBsYWNlIiwicGxhY2VfaWQiLCJsb2NhbGl0eSIsInN1Yl9sb2NhbGl0eSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwicGF0aG5hbWUiLCJ1dG1fc291cmNlIiwidXRtX21lZGl1bSIsInV0bV9jYW1wYWlnbiIsImlzX2lwZF9mb3JtX3N1Ym1pdHRlZCIsImdldF9mZWVkYmFjayIsIm5leHRQcm9wcyIsImxvY2F0aW9uRmV0Y2hlZCIsInN0b3JlIiwicXVlcnkiLCJmb3JtYXR0ZWRfYWRkcmVzcyIsImRpc3BhdGNoIiwiY29udGV4dFR5cGVzIiwicm91dGVyIiwibWFwU3RhdGVUb1Byb3BzIiwiU0VBUkNIX0NSSVRFUklBX09QRCIsIlNFQVJDSF9DUklURVJJQV9JUEQiLCJzZWxlY3RlZENyaXRlcmlhcyIsIlVTRVIiLCJpcGRfY2hhdCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNiIiwic2F2ZVByb2ZpbGVQcm9jZWR1cmVzIiwiY2xpbmljX2lkIiwicHJvY2VkdXJlX2lkcyIsImZvcmNlQWRkIiwic2VsZWN0T3BkVGltZVNMb3QiLCJzbG90IiwicmVzY2hlZHVsZSIsImFwcG9pbnRtZW50SWQiLCJmaWx0ZXJDcml0ZXJpYSIsImlwZENoYXRWaWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxrQjs7Ozs7Ozs7Ozs7eUNBRWVDLE0sRUFBUUMsQyxFQUFHO0FBQ3hCQSxjQUFFQyxjQUFGO0FBQ0EsZ0JBQUdGLE9BQU9HLEdBQVYsRUFBYztBQUNWLHFCQUFLQyxLQUFMLENBQVdDLE9BQVgsQ0FBbUJDLElBQW5CLENBQXdCTixPQUFPRyxHQUEvQjtBQUNILGFBRkQsTUFFSztBQUNELHFCQUFLQyxLQUFMLENBQVdDLE9BQVgsQ0FBbUJDLElBQW5CLGtCQUF1Q04sT0FBT08sRUFBOUM7QUFDSDs7QUFHRCxnQkFBSUMsT0FBTztBQUNQLDRCQUFZLGFBREwsRUFDb0Is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QVMsa0NBQXNCeEwsU0FBdEIsRUFBaUNvTSxTQUFqQyxFQUE0Q0MsYUFBNUMsRUFBMkRDLFFBQTNELENBQVQsQ0FBbkQ7QUFBQSxHQUZqQjtBQUdOQyxxQkFBbUIsMkJBQUNDLElBQUQsRUFBT0MsVUFBUCxFQUFtQkMsYUFBbkI7QUFBQSxVQUFxQ2xCLFNBQVMsOEJBQWtCZ0IsSUFBbEIsRUFBd0JDLFVBQXhCLEVBQW9DQyxhQUFwQyxDQUFULENBQXJDO0FBQUEsR0FIYjtBQUlOcEcsZ0NBQThCLHNDQUFDd0YsaUJBQUQ7QUFBQSxVQUF1Qk4sU0FBUyx5Q0FBNkJNLGlCQUE3QixDQUFULENBQXZCO0FBQUEsR0FKeEI7QUFLTjVGLG9CQUFrQiwwQkFBQ3lHLGNBQUQ7QUFBQSxVQUFtQm5CLFNBQVMsNkJBQWlCbUIsY0FBakIsQ0FBVCxDQUFuQjtBQUFBLEdBTFo7QUFNTkMsZUFBYSxxQkFBQy9NLElBQUQ7QUFBQSxVQUFVMkwsU0FBUyx3QkFBWTNMLElBQVosQ0FBVCxDQUFWO0FBQUEsR0FOUDtBQU9OZ0gsMkJBQXlCLGlDQUFDcUYsRUFBRDtBQUFBLFVBQVFWLFNBQVMsb0NBQXdCVSxFQUF4QixDQUFULENBQVI7QUFBQSxHQVBuQjtBQVFOOUIsZ0JBQWMsc0JBQUNKLEdBQUQsRUFBS0MsSUFBTDtBQUFBLFVBQWN1QixTQUFTLHlCQUFheEIsR0FBYixFQUFpQkMsSUFBakIsQ0FBVCxDQUFkO0FBQUE7QUFSUixFQUFQO0FBVUEsQ0FYRDs7a0JBYWUseUJBQVEwQixlQUFSLEVBQXlCTSxrQkFBekIsRUFBNkN6QyxnQkFBN0MsQyIsImZpbGUiOiI2OS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSW5pdGlhbHNQaWN0dXJlIGZyb20gJy4uL2NvbW1vbnMvaW5pdGlhbHNQaWN0dXJlJztcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vaGVscGVycy9ndG0uanMnXG5cbmNsYXNzIERvY3RvckNhcm91c2VsTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBuYXZpZ2F0ZVRvRG9jdG9yKGRvY3RvciwgZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgaWYoZG9jdG9yLnVybCl7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChkb2N0b3IudXJsKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL29wZC9kb2N0b3IvJHtkb2N0b3IuaWR9P2hpZGVfc2VhcmNoX2RhdGE9dHJ1ZWApXG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ3JlY29tbWVuZGVkRG9jdG9yQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdyZWNvbW1lbmRlZC1kb2N0b3ItY2xpY2snLCAnRG9jdG9ySUQnOiBkb2N0b3IuZG9jdG9yX2lkXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICB9XG5cblx0cmVuZGVyKCl7XG4gICAgICAgIGxldCB7IGRvY3RvckNhcmREYXRhIH0gPSB0aGlzLnByb3BzXG5cdFx0cmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZS1jb250ZW50IGN0LXByb2ZpbGUgcGQtMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtY29udGVudCBwZC0wIGJvcmRlci1ib3R0b20tcGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jU2Nyb2xsU2xpZGVyQ29udGFpbmVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3JDYXJkRGF0YSAmJiBkb2N0b3JDYXJkRGF0YS5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yQ2FyZERhdGEubWFwKChkb2N0b3IsIGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxhIGhyZWY9e2AvJHtkb2N0b3IudXJsP2RvY3Rvci51cmw6YG9wZC9kb2N0b3IvJHtkb2N0b3IuaWR9P2hpZGVfc2VhcmNoX2RhdGE9dHJ1ZWB9YH0gY2xhc3NOYW1lPVwiZG9jU2xpZGVDYXJkXCIga2V5PXtpZH0gb25DbGljaz17KGUpID0+IHRoaXMubmF2aWdhdGVUb0RvY3Rvcihkb2N0b3IsIGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2NTbGlkZUhlYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbml0aWFsc1BpY3R1cmUgbmFtZT17ZG9jdG9yLm5hbWV9IGhhc19pbWFnZT17ISFkb2N0b3IudGh1bWJuYWlsfSBjbGFzc05hbWU9XCJpbml0aWFsc1BpY3R1cmUtZHMgc2xpZGVEb2NNYWluSW1nXCIgc3R5bGU9e3sgd2lkdGg6IDYwLCBoZWlnaHQ6IDYwLCBmb250U2l6ZTogJzJyZW0nIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZsdHItdXNyLWltYWdlIGltZy1yb3VuZCBzbGlkZURvY01haW5JbWdcIiBzcmM9e2RvY3Rvci50aHVtYm5haWx9IGFsdD17ZG9jdG9yLmRpc3BsYXlfbmFtZX0gdGl0bGU9e2RvY3Rvci5kaXNwbGF5X25hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0luaXRpYWxzUGljdHVyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3JDYXJkRGF0YS5hdmVyYWdlX3JhdGluZz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyYXRpbmctcy10YXJcIj57ZG9jdG9yQ2FyZERhdGEuYXZlcmFnZV9yYXRpbmd9IDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWFnZXMvc3Rhci5wbmdcIn0gY2xhc3NOYW1lPVwic3Rhci1pbWdcIiAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JycgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVEb2NDb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzbGlkZURvY05hbWVcIj57ZG9jdG9yLmRpc3BsYXlfbmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzbGlkZURvY0V4cFwiPntkb2N0b3IuZXhwZXJpZW5jZV95ZWFyc30gWWVhcnMgb2YgRXhwZXJpZW5jZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IucXVhbGlmaWNhdGlvbnMgJiYgZG9jdG9yLnF1YWxpZmljYXRpb25zLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNsaWRlRG9jZGVnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yLnF1YWxpZmljYXRpb25zLm1hcCgocXVhbGlmaWNhdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGtleT17aW5kZXh9PntxdWFsaWZpY2F0aW9uLnF1YWxpZmljYXRpb259PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvci5ob3NwaXRhbHMgJiYgZG9jdG9yLmhvc3BpdGFscy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzbGlkZURvY0V4cFwiIHN0eWxlPXt7IG1hcmdpblRvcDogNSB9fSA+e2RvY3Rvci5ob3NwaXRhbHNbMF0uaG9zcGl0YWxfbmFtZX08L3A+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVEb2NQcmljZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlTmFtZVByY1wiPuKCuSB7ZG9jdG9yLmRlYWxfcHJpY2V9PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInNsaWRlQ3V0UHJjXCI+4oK5IHtkb2N0b3IubXJwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkQm9va0J0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+Qm9vayBOb3c8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvY3RvckNhcm91c2VsTGlzdCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBEb2N0b3JDYXJvdXNlbExpc3QgZnJvbSAnLi9Eb2N0b3JDYXJvdXNlbExpc3QuanMnXG5cbmNsYXNzIEV4cGFuc2lvblBhbmVsSVBEIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlbjogdGhpcy5wcm9wcy5pZD09MD90cnVlOmZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVPcGVuKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogIXRoaXMuc3RhdGUub3BlbiB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgeyBkYXRhIH0gPSB0aGlzLnByb3BzXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImV4cGFuc2lvbi1wYW5lbC1saXN0LWl0ZW1cIiBzdHlsZT17eyBsaXN0U3R5bGU6ICdub25lJywgY3Vyc29yOiAncG9pbnRlcicgfX0gPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZScgb25DbGljaz17dGhpcy50b2dnbGVPcGVuLmJpbmQodGhpcyl9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMCwgZm9udFNpemU6IDE1LCBmb250V2VpZ2h0OiA1MDAsIHBhZGRpbmdSaWdodDogMzAsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5vcGVuID8gPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93LXVwXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+IDogPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm9wZW4gPyBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9yZS1jb250ZW50IG1yLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudmFsdWUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGtnLWNvbnRlbnQgdWxMaXN0aW5nLXN0bFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGF0YS52YWx1ZSB9fT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5zaG93X2RvY3RvcnMgJiYgZGF0YS5kb2N0b3JzICYmIGRhdGEuZG9jdG9ycy5yZXN1bHQ/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEb2N0b3JDYXJvdXNlbExpc3QgZG9jdG9yQ2FyZERhdGEgPSB7ZGF0YS5kb2N0b3JzLnJlc3VsdH0gey4uLnRoaXMucHJvcHN9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBFeHBhbnNpb25QYW5lbElQRFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhvc3BpdGFsQ2FyZCBmcm9tICcuL0hvc3BpdGFsQ2FyZC5qcydcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vaGVscGVycy9ndG0uanMnXG5cbmNsYXNzIEhvc3BpdGFsTGlzdFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgIHRvZ2dsZUZpbHRlclBvcHVwOiBmYWxzZSxcbiAgICAgICAgIGhlYWx0aF9pbnN1cmFuY2VfcHJvdmlkZXI6IFtdXG4gICAgICB9XG4gICBcdH1cblxuICAgXHR0b2dnbGVQcm92aWRlckZpbHRlcihkYXRhPVtdKXtcblxuICAgXHRcdHRoaXMuc2V0U3RhdGUoe3RvZ2dsZUZpbHRlclBvcHVwOiAhdGhpcy5zdGF0ZS50b2dnbGVGaWx0ZXJQb3B1cCwgaGVhbHRoX2luc3VyYW5jZV9wcm92aWRlcjogZGF0YX0pXG4gICBcdH1cblxuXHRnZXRDb3N0RXN0aW1hdGVDbGlja2VkKGhvc3BpdGFsSWQpe1xuXHRcdGlmKHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMubGVuZ3RoKXtcblx0XHRcdGxldCBpcGRfaWQgPSB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzWzBdLmlkXG5cblx0XHRcdGxldCBndG1EYXRhID0ge1xuXHRcdCAgICBcdCdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSXBkR2V0Q29zdEVzdGltYXRlQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2lwZC1nZXQtY29zdC1lc3RpbWF0ZS1jbGlja2VkJywgJ3NlbGVjdGVkSWQnOiBpcGRfaWQgfHwgJycsICdob3NwaXRhbElkJzogaG9zcGl0YWxJZFxuXHRcdFx0fVxuXHRcdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcdFx0XHRcblx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvaXBkLyR7aXBkX2lkfS9nZXRQcmljZUVzdGltYXRlP2hvc3BpdGFsX2lkPSR7aG9zcGl0YWxJZH1gKVx0XHRcblx0XHR9XG4gICAgICBcbiAgIFx0fVxuXG4gICBcdGdldEhvc3BpdGFsRGV0YWlsUGFnZShob3NwaXRhbElkLCB1cmw9bnVsbCl7XG4gICBcdFx0bGV0IGd0bURhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0hvc3BpdGFsRGV0YWlsQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2hvc3BpdGFsLWRldGFpbC1jbGlja2VkJywgJ3NlbGVjdGVkSWQnOiBob3NwaXRhbElkIHx8ICcnXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcbiAgICAgICAgXG4gICAgICAgIGlmKHVybCl7XG4gICAgICAgIFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3VybH0/ZnJvbVByb2NlZHVyZT10cnVlYClcbiAgICAgICAgfWVsc2V7XG4gICAgICAgIFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9pcGQvaG9zcGl0YWwvJHtob3NwaXRhbElkfT9mcm9tUHJvY2VkdXJlPXRydWVgKVxuICAgICAgICB9XG4gICBcdFx0XHRcbiAgIFx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdGxldCB7IGhvc3BpdGFsTGlzdCwgaXBkX2luZm8gfSA9IHRoaXMucHJvcHNcblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aXBkX2luZm8gJiYgaXBkX2luZm8uYWJvdXQgJiYgaXBkX2luZm8uYWJvdXQubmFtZT9cblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkaW5nIGhkLW1yZ24tdG9wXCI+e2BCZXN0ICR7aXBkX2luZm8uYWJvdXQubmFtZX0gSG9zcGl0YWxzICR7aXBkX2luZm8uc2VvP2BpbiAke3RoaXMucHJvcHMuaXBkX2luZm8uc2VvLmxvY2F0aW9ufWA6Jyd9YH08L2gyPlxuXHRcdFx0XHRcdDonJ1x0XG5cdFx0XHRcdH1cblx0XHRcdFx0PHVsPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aG9zcGl0YWxMaXN0ICYmIGhvc3BpdGFsTGlzdC5yZXN1bHQ/XG5cdFx0XHRcdFx0aG9zcGl0YWxMaXN0LnJlc3VsdC5tYXAoKGhvc3BpdGFsLCBpKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPEhvc3BpdGFsQ2FyZCBrZXk9e2l9IGRhdGE9e2hvc3BpdGFsfSBnZXRDb3N0RXN0aW1hdGVDbGlja2VkPXt0aGlzLmdldENvc3RFc3RpbWF0ZUNsaWNrZWQuYmluZCh0aGlzKX0gZ2V0SG9zcGl0YWxEZXRhaWxQYWdlPXt0aGlzLmdldEhvc3BpdGFsRGV0YWlsUGFnZS5iaW5kKHRoaXMpfSB0b2dnbGVQcm92aWRlckZpbHRlcj17dGhpcy50b2dnbGVQcm92aWRlckZpbHRlci5iaW5kKHRoaXMpfSB7Li4udGhpcy5wcm9wc30vPlxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0OicnXG5cdFx0XHRcdH1cblx0XHRcdFx0PC91bD5cblxuXHRcdFx0XHR7XG5cdFx0ICAgICAgICBcdHRoaXMuc3RhdGUudG9nZ2xlRmlsdGVyUG9wdXA/XG5cdFx0ICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiaXBkLXNlY3Rpb25cIj5cblx0XHRcdCAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1vdmVybGF5XCIgb25DbGljaz17dGhpcy50b2dnbGVQcm92aWRlckZpbHRlci5iaW5kKHRoaXMpfT48L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1wb3B1cCBobHRoLWlucy1wb3AgaW5zLXBvcFwiPlxuXHQgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Jvc3MtYnRuXCI+PGltZyBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vY3AvYXNzZXRzL2ltZy9pY29ucy9jbG9zZS5wbmdcIiBhbHQ9XCJcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVByb3ZpZGVyRmlsdGVyLmJpbmQodGhpcyl9Lz48L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICAgICB7XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICBcdHRoaXMuc3RhdGUuaGVhbHRoX2luc3VyYW5jZV9wcm92aWRlci5sZW5ndGg/XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwicG9wLWhlYWQgdGV4dC1jZW50ZXJcIj5IZWFsdGggSW5zdXJhbmNlIFByb3ZpZGVyczwvZGl2PlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgXHQ6Jydcblx0XHQgICAgICAgICAgICAgICAgICAgICAgIFx0XHRcblx0ICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICAgICAgICAge1xuXHQgICAgICAgICAgICAgICAgICAgICAgIFx0dGhpcy5zdGF0ZS5oZWFsdGhfaW5zdXJhbmNlX3Byb3ZpZGVyLmxlbmd0aD9cblx0ICAgICAgICAgICAgICAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWxpc3RpbmdcIj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcC1oZWFkXCI+SGVhbHRoIEluc3VyYW5jZSBQcm92aWRlcnM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicmFuZ2Utc2xpZGVyLXVsXCI+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgXHRcdFx0e1xuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIFx0dGhpcy5zdGF0ZS5oZWFsdGhfaW5zdXJhbmNlX3Byb3ZpZGVyLm1hcCgocHJvdmlkZXIsIGkpID0+IHtcblxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHRcdHJldHVybiA8bGkga2V5PXtpfT57cHJvdmlkZXJ9XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgXHRcdFx0fSlcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgXHR9ICAgICAgICAgIFxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblx0XHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdCAgICAgICAgICAgICAgICAgICAgOicnXG5cdCAgICAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgOicnXG5cdFx0ICAgICAgICB9XG5cdFx0XHQ8L2Rpdj5cdFxuICAgICAgICAgICBcblx0XHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb3NwaXRhbExpc3RWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBFeHBhbnNpb25QYW5lbElwZCBmcm9tICcuL0V4cGFuc2lvblBhbmVsSXBkLmpzJ1xuXG5cbmNsYXNzIElQREFib3V0VXNWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHRvZ2dsZVJlYWRNb3JlOiBmYWxzZVxuXHRcdH1cblx0fVxuXHRyZW5kZXIoKXtcblx0XHRsZXQgeyBpcGRfaW5mbyB9ID0gdGhpcy5wcm9wc1xuXHRcdFxuXHRcdHJldHVybihcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmVcIiBpZD1cIm5hdi1vdmVydmlld1wiPlxuICAgICAgICAgICAgIFx0e1xuICAgICAgICAgICAgIFx0XHRpcGRfaW5mbyAmJiBpcGRfaW5mby5hYm91dCAmJiBpcGRfaW5mby5hYm91dC5hbGxfZGV0YWlscyAmJiBpcGRfaW5mby5hYm91dC5hbGxfZGV0YWlscy5sZW5ndGg/XG4gICAgICAgICAgICAgXHRcdDxoNCBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRpbmdcIj57YEFib3V0ICR7aXBkX2luZm8uYWJvdXQ/aXBkX2luZm8uYWJvdXQubmFtZTonVHJlYXRtZW50J31gfSA8L2g0PlxuXHRcdFx0XHRcdDonJ1x0XHRcbiAgICAgICAgICAgICBcdH1cbiAgICAgICAgICAgICBcdFxuICAgICAgICAgICAgICAgIHtcblx0XHRcdFx0XHRpcGRfaW5mbyAmJiBpcGRfaW5mby5hYm91dCAmJiBpcGRfaW5mby5hYm91dC5hbGxfZGV0YWlscyAmJiBpcGRfaW5mby5hYm91dC5hbGxfZGV0YWlscy5sZW5ndGg/XG5cdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cIndpZGdldFwiPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGlwZF9pbmZvLmFib3V0LmFsbF9kZXRhaWxzLm1hcCgoaXBkSW5mbywga2V5KT0+IHtcblxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gPEV4cGFuc2lvblBhbmVsSXBkIGRhdGE9e2lwZEluZm99IGtleT17a2V5fSB7Li4udGhpcy5wcm9wc30gaWQ9e2tleX0vPlxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ6JydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBJUERBYm91dFVzVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJcGRBYm91dFVzIGZyb20gJy4vYWJvdXRJUEQuanMnXG5pbXBvcnQgSXBkSW5mb1ZpZXdNb3JlIGZyb20gJy4vSXBkQWJvdXRVcy5qcydcbmltcG9ydCBIb3NwaXRhbExpc3QgZnJvbSAnLi9Ib3NwaXRhbExpc3QuanMnXG5pbXBvcnQgRG9jdG9yUmVzdWx0Q2FyZCBmcm9tICcuLi9vcGQvY29tbW9ucy9kb2N0b3JSZXN1bHRDYXJkJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21tb25zL0xvYWRlcidcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi9jb21tb25zL0hlbG1ldFRhZ3MnXG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uL2NvbmZpZydcbmltcG9ydCBCcmVhZENydW1iVmlldyBmcm9tICcuL2JyZWFkQ3J1bWIuanMnXG5pbXBvcnQgSXBkRm9ybVZpZXcgZnJvbSAnLi4vLi4vY29udGFpbmVycy9pcGQvSXBkRm9ybS5qcydcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJylcbmltcG9ydCBJcGRMZWFkRm9ybSBmcm9tICcuLi8uLi9jb250YWluZXJzL2lwZC9pcGRMZWFkRm9ybS5qcydcbmltcG9ydCBJcGRPZmZlcnNQYWdlIGZyb20gJy4vSXBkT2ZmZXJzUGFnZS5qcydcbmltcG9ydCBCYW5uZXJDYXJvdXNlbCBmcm9tICcuLi9jb21tb25zL0hvbWUvYmFubmVyQ2Fyb3VzZWwnO1xuXG5jbGFzcyBJcGRWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHRvZ2dsZVRhYlR5cGU6ICdhYm91dFRhYicsXG5cdFx0XHR0b2dnbGVSZWFkTW9yZTogZmFsc2UsXG5cdFx0XHRzZW9GcmllbmRseTogdGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoJy1pcGRwJyksXG5cdFx0XHRzaG93TGVhZEZvcm06dHJ1ZVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0aWYod2luZG93KXtcblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLDApXG5cdFx0fVxuXG5cdFx0dmFyIHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdl90b3BfYmFyXCIpO1xuXHRcdHZhciBzZWN0aW9ucyA9IHt9O1xuXHRcdHZhciBpID0gMFxuXG5cdFx0bGV0IGhlYWRlckhlaWdodCA9IDBcdCAgICAgICAgXG5cblx0XHRPYmplY3Qua2V5cyh0aGlzLnJlZnMpLmZvckVhY2goKHBycCwgaSkgPT4ge1xuXHRcdFx0XG5cdFx0XHRpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGlja3lCYXInKSAmJiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGlja3lCYXInKVswXSl7XG5cdFx0XHRcdGhlYWRlckhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0aWNreUJhcicpWzBdLm9mZnNldFRvcCAtIDEwMFxuXHRcdFx0fVxuXHRcdFx0c2VjdGlvbnNbcHJwXSA9IHRoaXMucmVmc1twcnBdLm9mZnNldFRvcCArIGhlYWRlckhlaWdodFx0XHRcdFx0XHRcdFxuXG5cdFx0fSlcblx0XHQvL2lmIHRoZXJlIGlzIGFueSB0YWIgbmFtZSBpbiBsYW5kaW5nIHVybCB0aGVuIHdlIHNjcm9sbCB0byB0aGF0IHRhYiBwb3NpdGlvblxuXHRcdGxldCBzZWxmID0gdGhpc1xuXHRcdGlmKHdpbmRvdyAmJiBkb2N1bWVudCl7XG5cdFx0XHR3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcblx0XHQgICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuXHRcdCAgICBmb3IgKGkgaW4gc2VjdGlvbnMpIHtcblx0XHQgICAgXHRpZihzZWxmLnJlZnNbaV0pe1xuXG5cdFx0ICAgIFx0XHRpZihpLmluY2x1ZGVzKCdyZWFkTW9yZVZpZXcnKSl7XG5cdFx0ICAgIFx0XHRcdGlmKHNjcm9sbFBvc2l0aW9uID4gKHNlbGYucmVmc1sncmVhZE1vcmVWaWV3J10ub2Zmc2V0VG9wICsgIGhlYWRlckhlaWdodCApKXtcblx0XHRcdFx0XHQgICAgXHRzZWxmLnNldFN0YXRlKHt0b2dnbGVUYWJUeXBlOiAnJ30pXG5cdFx0XHRcdFx0ICAgIH1cblx0XHQgICAgXHRcdH1lbHNle1xuXG5cdFx0ICAgIFx0XHRcdGlmICgoc2VsZi5yZWZzW2ldLm9mZnNldFRvcCArICBoZWFkZXJIZWlnaHQgKTw9IHNjcm9sbFBvc2l0aW9uKSB7XG5cdFx0XHRcdFx0ICAgICAgXHRzZWxmLnNldFN0YXRlKHt0b2dnbGVUYWJUeXBlOiBpfSlcblx0XHRcdFx0XHQgICAgfVx0XG5cdFx0ICAgIFx0XHR9XG5cdFx0ICAgIFx0XHRcblx0XHQgICAgXHR9XG5cdFx0ICAgIH1cblx0XHQgIH1cdFxuXHRcdH1cblx0fVxuXG5cdHRvZ2dsZVRhYnModHlwZSl7XG5cdFx0Ly90YWJzIGluIGlwZCBpbmZvIHBhZ2Vcblx0XHRpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0eXBlKSl7XG5cdFx0XHRsZXQgZ3RtRGF0YSA9IHtcblx0ICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdJcGRUYWJDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaXBkLXRhYi1jbGlja2VkJywgc2VsZWN0ZWRJZDogdGhpcy5wcm9wcy5pcGRfaWQgfHwgJycsIHR5cGU6IHR5cGVcblx0ICAgICAgICB9XG5cdCAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcblxuXHRcdFx0dmFyIGVsbW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodHlwZSlcblx0XHRcdFxuXHRcdFx0bGV0IGhlYWRlckhlaWdodCA9IDBcblx0XHRcdGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0aWNreUJhcicpICYmIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0aWNreUJhcicpWzBdKXtcblx0XHRcdFx0aGVhZGVySGVpZ2h0ID0gdGhpcy5yZWZzW3R5cGVdLm9mZnNldFRvcCAtNDVcblx0XHRcdH1cblx0XHRcdHRoaXMuc2V0U3RhdGUoe3RvZ2dsZVRhYlR5cGU6IHR5cGV9KVxuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsaGVhZGVySGVpZ2h0KVxuXG5cdFx0fVxuXHR9XG5cblx0dmlld0hvc3BpdGFsc0NsaWNrZWQoKXtcblx0XHRsZXQgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSXBkVmlld0FsbEhvc3BpdGFsQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2lwZC12aWV3LWFsbC1ob3NwaXRhbC1jbGlja2VkJywgc2VsZWN0ZWRJZDogdGhpcy5wcm9wcy5pcGRfaWQgfHwgJydcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuXHRcdHRoaXMucHJvcHMubWVyZ2VJcGRDcml0ZXJpYSh7XG5cdFx0XHRjb21tb25TZWxlY3RlZENyaXRlcmlhczogdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcyxcblx0XHRcdG5leHRTZWxlY3RlZENyaXRlcmlhczogdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhc1xuXHRcdH0pXG5cblx0XHRpZih0aGlzLnByb3BzLmlwZF9pbmZvICYmIHRoaXMucHJvcHMuaXBkX2luZm8uaG9zcGl0YWxzICYmIHRoaXMucHJvcHMuaXBkX2luZm8uaG9zcGl0YWxzLmNhbm9uaWNhbF91cmwpe1xuXG5cdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgLyR7dGhpcy5wcm9wcy5pcGRfaW5mby5ob3NwaXRhbHMuY2Fub25pY2FsX3VybH1gKVxuXHRcdH1lbHNle1xuXG5cdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2lwZC9zZWFyY2hIb3NwaXRhbHNgKVxuXHRcdH1cblx0XHRcblx0fVxuXG5cdHZpZXdEb2N0b3JzQ2xpY2tlZCgpe1xuXHRcdGlmKHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMgJiYgdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcy5sZW5ndGgpe1xuXG5cblx0XHRcdGxldCBndG1EYXRhID0ge1xuXHQgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0lwZFZpZXdBbGxEb2N0b3JDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaXBkLXZpZXctYWxsLWRvY3Rvci1jbGlja2VkJywgc2VsZWN0ZWRJZDogdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhc1swXS5pZCB8fCAnJ1xuXHQgICAgICAgIH1cblx0ICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuXG5cdFx0XHRsZXQgY3JpdGVyaWEgPSB7fVxuXHRcdFx0Y3JpdGVyaWEuaWQgPSB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzWzBdLmlkXG5cdFx0XHRjcml0ZXJpYS5uYW1lID0gdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhc1swXS5uYW1lXG5cdFx0XHRjcml0ZXJpYS50eXBlID0gJ2lwZCcgXG5cdFx0XHR0aGlzLnByb3BzLmNsb25lQ29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMoY3JpdGVyaWEpXG5cblx0XHRcdGlmKHRoaXMucHJvcHMuaXBkX2luZm8gJiYgdGhpcy5wcm9wcy5pcGRfaW5mby5kb2N0b3JzICYmIHRoaXMucHJvcHMuaXBkX2luZm8uZG9jdG9ycy5jYW5vbmljYWxfdXJsKXtcblxuXHRcdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgLyR7dGhpcy5wcm9wcy5pcGRfaW5mby5kb2N0b3JzLmNhbm9uaWNhbF91cmx9YClcblx0XHRcdH1lbHNle1xuXG5cdFx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvb3BkL3NlYXJjaHJlc3VsdHNgKVxuXHRcdFx0fVxuXHRcdFx0XHRcblx0XHR9XG5cdFx0XG5cdH1cblxuXHRnZXRDb3N0RXN0aW1hdGVDbGlja2VkKCl7XG5cdFx0bGV0IGd0bURhdGEgPSB7XG5cdCAgICBcdCdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSXBkR2V0Q29zdEVzdGltYXRlQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2lwZC1nZXQtY29zdC1lc3RpbWF0ZS1jbGlja2VkJywgc2VsZWN0ZWRJZDogdGhpcy5wcm9wcy5pcGRfaWQgfHwgJydcblx0XHR9XG5cdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcblx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2lwZC8ke3RoaXMucHJvcHMuaXBkX2lkfS9nZXRQcmljZUVzdGltYXRlYClcblx0fVxuXG5cdHJlYWRNb3JlQ2xpY2tlZCgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe3RvZ2dsZVJlYWRNb3JlOiB0cnVlfSlcblx0XHRpZih0aGlzLnJlZnNbJ3JlYWRNb3JlVmlldyddKXtcblx0XHRcdGxldCBoZWFkZXJIZWlnaHQgPSB0aGlzLnJlZnNbJ3JlYWRNb3JlVmlldyddLm9mZnNldFRvcCAtNDVcblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLGhlYWRlckhlaWdodClcdFxuXHRcdH1cblx0fVxuXG5cdGdldE1ldGFUYWdzRGF0YShzZW9EYXRhKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IFwiSVBEIFByb2NlZHVyZSBQYWdlXCJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VvRnJpZW5kbHkpIHtcbiAgICAgICAgICAgIHRpdGxlID0gXCJcIlxuICAgICAgICB9XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IFwiXCJcbiAgICAgICAgaWYgKHNlb0RhdGEpIHtcbiAgICAgICAgICAgIHRpdGxlID0gc2VvRGF0YS50aXRsZSB8fCBcIlwiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA9IHNlb0RhdGEuZGVzY3JpcHRpb24gfHwgXCJcIlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiB9XG4gICAgfVxuXG4gICAgc3VibWl0TGVhZEZvcm1HZW5lcmF0aW9uKGlwZEZvcm1QYXJhbXMpIHtcblx0XHRpZiAoaXBkRm9ybVBhcmFtcykge1xuXHRcdFx0bGV0IGd0bURhdGEgPSB7XG5cdFx0XHRcdCdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSXBkUHJvY2VkdXJlUGFnZUZvcm1DbG9zZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdpcGQtcHJvY2VkdXJlLXBhZ2UtZm9ybS1jbG9zZWQnXG5cdFx0XHR9XG5cdFx0XHRHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuXHRcdH1cblx0XHRsZXQgaXBkX2RhdGEgPSB7XG5cdFx0XHRzaG93Q2hhdDogdHJ1ZSxcblx0XHRcdGlwZEZvcm1QYXJhbXM6IGlwZEZvcm1QYXJhbXNcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dMZWFkRm9ybTogZmFsc2UsIGlwZEZvcm1QYXJhbXM6IGlwZEZvcm1QYXJhbXMgfSwgKCk9PntcblxuXHRcdFx0dGhpcy5wcm9wcy5jaGVja0lwZENoYXRBZ2VudFN0YXR1cygocmVzcG9uc2UpPT57XG5cdFx0XHRcdGlmKHJlc3BvbnNlICYmIHJlc3BvbnNlLnVzZXJzICYmIHJlc3BvbnNlLnVzZXJzLmxlbmd0aCkge1xuXG5cdFx0XHRcdFx0Ly8gdGhpcy5wcm9wcy5pcGRDaGF0Vmlldyh7c2hvd0lwZENoYXQ6dHJ1ZSwgaXBkRm9ybTogaXBkRm9ybVBhcmFtcywgc2hvd01pbmltaXplOiB0cnVlfSlcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cblx0XHRjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblxuXHRcdGxldCBzaG93UG9wdXAgPSBmYWxzZSAmJiB0aGlzLnN0YXRlLnNob3dMZWFkRm9ybSAmJiB0aGlzLnByb3BzLmlwZF9pbmZvICYmIHRoaXMucHJvcHMuaXBkX2luZm8uYWJvdXRcblxuXHRcdHJldHVybiggICAgICAgICAgICAgICAgICBcdFx0XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cImlwZC1zZWN0aW9uIGlwZFNlY3Rpb24gY2FyZE1haW5QYWRkaW5nUm12XCI+XG4gICAgICAgICAgIFx0ICBcdHtcblx0XHRcdFx0XHRzaG93UG9wdXAgP1xuXHRcdFx0XHRcdFx0PElwZExlYWRGb3JtIHN1Ym1pdExlYWRGb3JtR2VuZXJhdGlvbj17dGhpcy5zdWJtaXRMZWFkRm9ybUdlbmVyYXRpb24uYmluZCh0aGlzKX0gey4uLnRoaXMucHJvcHN9IGhvc3BpdGFsX25hbWU9e251bGx9IGhvc3BpdGFsX2lkPXtudWxsfSBmb3JtU291cmNlPSdpcGRQcm9jZWR1cmVQb3B1cCcgcHJvY2VkdXJlX2lkPXt0aGlzLnByb3BzLmlwZF9pbmZvICYmIHRoaXMucHJvcHMuaXBkX2luZm8uYWJvdXQ/dGhpcy5wcm9wcy5pcGRfaW5mby5hYm91dC5pZDonJ30gcHJvY2VkdXJlX25hbWU9e3RoaXMucHJvcHMuaXBkX2luZm8gJiYgdGhpcy5wcm9wcy5pcGRfaW5mby5hYm91dD90aGlzLnByb3BzLmlwZF9pbmZvLmFib3V0Lm5hbWU6Jyd9Lz5cblx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0fVxuICAgICAgICAgICBcdCAgPEhlbG1ldFRhZ3MgdGFnc0RhdGE9e3tcbiAgICAgICAgICAgICAgICAgICAgY2Fub25pY2FsVXJsOiBgJHtDT05GSUcuQVBJX0JBU0VfVVJMfSR7dGhpcy5wcm9wcy5tYXRjaC51cmx9YCxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuZ2V0TWV0YVRhZ3NEYXRhKHRoaXMucHJvcHMuaXBkX2luZm8uc2VvKS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZ2V0TWV0YVRhZ3NEYXRhKHRoaXMucHJvcHMuaXBkX2luZm8uc2VvKS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIH19IG5vSW5kZXg9eyF0aGlzLnN0YXRlLnNlb0ZyaWVuZGx5fSAvPlxuXG4gICAgICAgICAgICAgICAgey8qPHVsIGNsYXNzTmFtZT1cIm1yYi0xMCBtcnQtMjAgYnJlYWRjcnVtYi1saXN0XCIgc3R5bGU9e3sgd29yZEJyZWFrOiAnYnJlYWstd29yZCcgfX0+XG5cdCAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1saXN0LWl0ZW1cIj5cblx0ICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiIG9uQ2xpY2s9eyhlKSA9PiB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpXG5cdCAgICAgICAgICAgICAgICAgICAgfX0+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCBicmVhZGNydW1iLXRpdGxlIGJyZWFkY3J1bWItY29sb3JlZC10aXRsZVwiPkhvbWU8L3NwYW4+XG5cdCAgICAgICAgICAgICAgICAgICAgPC9hPlxuXHQgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItYXJyb3dcIj4mZ3Q7PC9zcGFuPlxuXHQgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWxpc3QtaXRlbVwiPlxuXHQgICAgICAgICAgICAgICAgXHQ8YSBocmVmPVwiL1wiIG9uQ2xpY2s9eyhlKSA9PiB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3Byb2NlZHVyZXMnKVxuXHQgICAgICAgICAgICAgICAgICAgIH19PlxuXHQgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCBicmVhZGNydW1iLXRpdGxlICBicmVhZGNydW1iLWNvbG9yZWQtdGl0bGVcIj5BbGwgUHJvY2VkdXJlczwvc3Bhbj5cblx0ICAgICAgICAgICAgICAgICAgICA8L2E+XG5cdCAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1hcnJvd1wiPiZndDs8L3NwYW4+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItbGlzdC1pdGVtXCI+XG5cdCAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwIGJyZWFkY3J1bWItdGl0bGVcIj57dGhpcy5wcm9wcy5pcGRfaW5mbz9gJHt0aGlzLnByb3BzLmlwZF9pbmZvLmFib3V0Lm5hbWV9YDonJ308L3NwYW4+XG5cdCAgICAgICAgICAgICAgICA8L2xpPlxuXHQgICAgICAgICAgICA8L3VsPiovfVxuXG5cdCAgICAgICAgICAgIHtcblx0ICAgICAgICAgICAgXHR0aGlzLnByb3BzLm9mZmVyTGlzdCAmJiB0aGlzLnByb3BzLm9mZmVyTGlzdC5maWx0ZXIoeCA9PiB4LnNsaWRlcl9sb2NhdGlvbiA9PT0gJ2lwZF9wcm9jZWR1cmVfcGFnZScpLmxlbmd0aD9cblx0ICAgICAgICAgICAgXHQ8QmFubmVyQ2Fyb3VzZWwgey4uLnRoaXMucHJvcHN9IGE9XCJpcGRfcHJvY2VkdXJlX3BhZ2VcIiBzbGlkZXJMb2NhdGlvbj1cImlwZF9wcm9jZWR1cmVfcGFnZVwiIGlwZD17dHJ1ZX0vPlxuXHQgICAgICAgICAgICBcdDonJ1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAge1xuXHQgICAgICAgICAgICBcdHRoaXMucHJvcHMuaXBkX2luZm8gJiYgdGhpcy5wcm9wcy5pcGRfaW5mby5icmVhZGNydW1iP1xuXHQgICAgICAgICAgICBcdDxCcmVhZENydW1iVmlldyBicmVhZGNydW1iPXt0aGlzLnByb3BzLmlwZF9pbmZvLmJyZWFkY3J1bWJ9IHsuLi50aGlzLnByb3BzfS8+XG5cdCAgICAgICAgICAgIFx0OicnXG5cdCAgICAgICAgICAgIH1cblx0XHRcdFx0XG4gICAgICAgICAgIFx0ICA8aDEgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkaW5nIHRvcC1zYy1oZWFkIHB0LTBcIj4gPHNwYW4gY2xhc3NOYW1lPVwiYWJvdXQtaGVhZFwiPiB7YCR7dGhpcy5wcm9wcy5pcGRfaW5mbyAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmlwZF9pbmZvKS5sZW5ndGg/YCR7dGhpcy5wcm9wcy5pcGRfaW5mby5hYm91dC5uYW1lfSBDb3N0ICR7dGhpcy5wcm9wcy5pcGRfaW5mbyAmJiB0aGlzLnByb3BzLmlwZF9pbmZvLnNlbyAmJiB0aGlzLnByb3BzLmlwZF9pbmZvLnNlby5sb2NhdGlvbj9gaW4gJHt0aGlzLnByb3BzLmlwZF9pbmZvLnNlby5sb2NhdGlvbn1gOicnfSAgYDonJ31gfSA8L3NwYW4+XG5cdFx0XHRcdFx0PC9oMT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdWxsLXdpZGdldCBtcmctYjAgc3RpY2t5QmFyXCI+XG4gICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwidGFiLWhlYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnMgbmF2LXRvcC1oZWFkIFwiIGlkPVwibmF2LXRhYlwiIHJvbGU9XCJ0YWJsaXN0XCI+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YG5hdi1pdGVtIG5hdi1saW5rICR7dGhpcy5zdGF0ZS50b2dnbGVUYWJUeXBlPT0nYWJvdXRUYWInPydhY3RpdmUnOicnfWB9IGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiByb2xlPVwidGFiXCIgb25DbGljaz17dGhpcy50b2dnbGVUYWJzLmJpbmQodGhpcywnYWJvdXRUYWInKX0+T3ZlcnZpZXdcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8YSBjbGFzc05hbWU9e2BuYXYtaXRlbSBuYXYtbGluayAke3RoaXMuc3RhdGUudG9nZ2xlVGFiVHlwZT09J2Jvb2tOb3cnPydhY3RpdmUnOicnfWB9IGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiByb2xlPVwidGFiXCIgb25DbGljaz17dGhpcy50b2dnbGVUYWJzLmJpbmQodGhpcywnYm9va05vdycpfT5Cb29rIE5vd1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+Ki99XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHR0aGlzLnByb3BzLmlwZF9pbmZvICYmIHRoaXMucHJvcHMuaXBkX2luZm8uaG9zcGl0YWxzICYmIHRoaXMucHJvcHMuaXBkX2luZm8uaG9zcGl0YWxzLnJlc3VsdCAmJiB0aGlzLnByb3BzLmlwZF9pbmZvLmhvc3BpdGFscy5yZXN1bHQubGVuZ3RoP1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdDxhIGNsYXNzTmFtZT17YG5hdi1pdGVtIG5hdi1saW5rICR7dGhpcy5zdGF0ZS50b2dnbGVUYWJUeXBlPT0naG9zcGl0YWxUYWInPydhY3RpdmUnOicnfWB9IGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiByb2xlPVwidGFiXCIgb25DbGljaz17dGhpcy50b2dnbGVUYWJzLmJpbmQodGhpcywnaG9zcGl0YWxUYWInKX0+SG9zcGl0YWxzXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0PC9hPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdDonJ1x0XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHR0aGlzLnByb3BzLmlwZF9pbmZvICYmIHRoaXMucHJvcHMuaXBkX2luZm8uZG9jdG9ycyAmJiB0aGlzLnByb3BzLmlwZF9pbmZvLmRvY3RvcnMucmVzdWx0ICAmJiB0aGlzLnByb3BzLmlwZF9pbmZvLmRvY3RvcnMucmVzdWx0Lmxlbmd0aD9cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHQ8YSBjbGFzc05hbWU9e2BuYXYtaXRlbSBuYXYtbGluayAke3RoaXMuc3RhdGUudG9nZ2xlVGFiVHlwZT09J2RvY3RvclRhYic/J2FjdGl2ZSc6Jyd9YH0gZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIHJvbGU9XCJ0YWJcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVRhYnMuYmluZCh0aGlzLCdkb2N0b3JUYWInKX0+RG9jdG9yc1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdDwvYT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHQ6JydcdFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0dGhpcy5wcm9wcy5pcGRfaW5mbyAmJiB0aGlzLnByb3BzLmlwZF9pbmZvLmFib3V0ICYmIHRoaXMucHJvcHMuaXBkX2luZm8uYWJvdXQub2ZmZXJzICYmIHRoaXMucHJvcHMuaXBkX2luZm8uYWJvdXQub2ZmZXJzLmxlbmd0aD9cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHQ8YSBjbGFzc05hbWU9e2BuYXYtaXRlbSBuYXYtbGluayAke3RoaXMuc3RhdGUudG9nZ2xlVGFiVHlwZT09J29mZmVyc1RhYic/J2FjdGl2ZSc6Jyd9YH0gZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIHJvbGU9XCJ0YWJcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVRhYnMuYmluZCh0aGlzLCdvZmZlcnNUYWInKX0+T2ZmZXJzXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0PC9hPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdDonJ1x0XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIiA+XG4gICAgICAgICAgICAgICBcdFx0PGRpdiBpZD1cImFib3V0VGFiXCIgcmVmPVwiYWJvdXRUYWJcIiBjbGFzc05hbWU9XCJuYXZfdG9wX2JhclwiPlxuICAgICAgICAgICAgICAgXHRcdFx0PElwZEFib3V0VXMgey4uLnRoaXMucHJvcHN9IGlkPVwiYWJvdXRUYWJcIiByZWFkTW9yZUNsaWNrZWQ9e3RoaXMucmVhZE1vcmVDbGlja2VkLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgICAgIFx0XHQ8L2Rpdj4gXG5cbnsvKiAgICAgICAgICAgICAgIFx0XHQ8ZGl2IGlkPVwiYm9va05vd1wiIHJlZj1cImJvb2tOb3dcIiBjbGFzc05hbWU9XCJuYXZfdG9wX2JhclwiPlxuICAgICAgICAgICAgICAgXHRcdFx0PElwZEZvcm1WaWV3IHsuLi50aGlzLnByb3BzfSB0YWJWaWV3PXt0cnVlfSBmb3JtU291cmNlPSdJcGRJbmZvUGFnZScvPlxuICAgICAgICAgICAgICAgXHRcdDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICBcdFxuXHRcdCAgICAgICAgICAgIDxkaXYgaWQ9XCJob3NwaXRhbFRhYlwiIHJlZj1cImhvc3BpdGFsVGFiXCIgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZVwiIGNsYXNzTmFtZT1cIm5hdl90b3BfYmFyXCI+XG5cdFx0ICAgICAgICAgICAgXHR7XG5cdFx0ICAgICAgICAgICAgXHRcdHRoaXMucHJvcHMuaXBkX2luZm8gJiYgdGhpcy5wcm9wcy5pcGRfaW5mby5ob3NwaXRhbHMgJiYgdGhpcy5wcm9wcy5pcGRfaW5mby5ob3NwaXRhbHMucmVzdWx0ICYmIHRoaXMucHJvcHMuaXBkX2luZm8uaG9zcGl0YWxzLnJlc3VsdC5sZW5ndGg/XG5cdFx0ICAgICAgICAgICAgXHRcdDxIb3NwaXRhbExpc3Qgey4uLnRoaXMucHJvcHN9IGhvc3BpdGFsTGlzdCA9IHt0aGlzLnByb3BzLmlwZF9pbmZvICYmIHRoaXMucHJvcHMuaXBkX2luZm8uaG9zcGl0YWxzP3RoaXMucHJvcHMuaXBkX2luZm8uaG9zcGl0YWxzOltdfS8+XG5cdFx0ICAgICAgICAgICAgXHRcdDonJ1x0XG5cdFx0ICAgICAgICAgICAgXHR9XG5cdFx0ICAgICAgICAgICAgXHRcblx0XHQgICAgICAgICAgICBcdHtcblx0XHQgICAgICAgICAgICBcdFx0dGhpcy5wcm9wcy5pcGRfaW5mbyAmJiB0aGlzLnByb3BzLmlwZF9pbmZvLmhvc3BpdGFscyAmJiB0aGlzLnByb3BzLmlwZF9pbmZvLmhvc3BpdGFscy5yZXN1bHQgJiYgdGhpcy5wcm9wcy5pcGRfaW5mby5ob3NwaXRhbHMucmVzdWx0Lmxlbmd0aDx0aGlzLnByb3BzLmlwZF9pbmZvLmhvc3BpdGFscy5jb3VudD9cblx0XHRcdFx0ICAgXHRcdFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzTmFtZT1cImJ0bi12aWV3LWhvc3BpdGFsXCIgb25DbGljaz17dGhpcy52aWV3SG9zcGl0YWxzQ2xpY2tlZC5iaW5kKHRoaXMpfT57YFZpZXcgYWxsICR7dGhpcy5wcm9wcy5pcGRfaW5mby5ob3NwaXRhbHMuY291bnR9IEhvc3BpdGFsc2B9PC9hPlxuXHRcdFx0XHQgICBcdFx0XHRcdDonJ1xuXHRcdCAgICAgICAgICAgIFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiBpZD1cImRvY3RvclRhYlwiIHJlZj1cImRvY3RvclRhYlwiIGNsYXNzTmFtZT1cInRhYi1wYW5lIGZhZGUgbmF2X3RvcF9iYXJcIj5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5pcGRfaW5mbyAmJiB0aGlzLnByb3BzLmlwZF9pbmZvLmRvY3RvcnMgJiYgdGhpcy5wcm9wcy5pcGRfaW5mby5kb2N0b3JzLnJlc3VsdCAgJiYgdGhpcy5wcm9wcy5pcGRfaW5mby5kb2N0b3JzLnJlc3VsdC5sZW5ndGggJiYgdGhpcy5wcm9wcy5pcGRfaW5mby5hYm91dCAmJiB0aGlzLnByb3BzLmlwZF9pbmZvLmFib3V0Lm5hbWU/XG5cdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRpbmcgaGQtbXJnbi10b3BcIj57YEJlc3QgJHt0aGlzLnByb3BzLmlwZF9pbmZvLmFib3V0Lm5hbWV9IERvY3RvcnMgJHt0aGlzLnByb3BzLmlwZF9pbmZvLnNlbyAmJiB0aGlzLnByb3BzLmlwZF9pbmZvLnNlby5sb2NhdGlvbj9gaW4gJHt0aGlzLnByb3BzLmlwZF9pbmZvLnNlby5sb2NhdGlvbn1gOicnfSBgfTwvaDI+XG5cdFx0XHRcdFx0XHRcdDonJ1x0XG5cdFx0XHRcdFx0XHR9XG5cdCAgICAgICAgICAgICAgICAgICAge1xuXHQgICAgICAgICAgICAgICAgICAgIFx0dGhpcy5wcm9wcy5pcGRfaW5mbyAmJiB0aGlzLnByb3BzLmlwZF9pbmZvLmRvY3RvcnM/XG5cdFx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlwZF9pbmZvLmRvY3RvcnMucmVzdWx0Lm1hcCgoZG9jdG9yQ2FyZCwgaSkgPT4ge1xuXHRcdCAgICAgICAgICAgICAgICAgICAgXHRyZXR1cm4gPERvY3RvclJlc3VsdENhcmQgZGV0YWlscz17ZG9jdG9yQ2FyZH0ga2V5PXtpfSByYW5rPXtpfSBzZW9GcmllbmRseT17dGhpcy5wcm9wcy5pcGRfaW5mby5kb2N0b3JzLnNlb30gey4uLnRoaXMucHJvcHN9Lz5cblx0XHQgICAgICAgICAgICAgICAgICAgIH0pXHRcblx0XHQgICAgICAgICAgICAgICAgICAgIDonJ1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICB7XG5cdCAgICAgICAgICAgICAgICAgICAgXHR0aGlzLnByb3BzLmlwZF9pbmZvICYmIHRoaXMucHJvcHMuaXBkX2luZm8uZG9jdG9ycyAmJiB0aGlzLnByb3BzLmlwZF9pbmZvLmRvY3RvcnMucmVzdWx0ICYmIHRoaXMucHJvcHMuaXBkX2luZm8uZG9jdG9ycy5yZXN1bHQubGVuZ3RoPHRoaXMucHJvcHMuaXBkX2luZm8uZG9jdG9ycy5jb3VudD9cblx0ICAgICAgICAgICAgICAgICAgICBcdDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3NOYW1lPVwiYnRuLXZpZXctaG9zcGl0YWxcIiBvbkNsaWNrPXt0aGlzLnZpZXdEb2N0b3JzQ2xpY2tlZC5iaW5kKHRoaXMpfT57YFZpZXcgYWxsICR7dGhpcy5wcm9wcy5pcGRfaW5mby5kb2N0b3JzLmNvdW50fSBEb2N0b3JzYH08L2E+XG5cdCAgICAgICAgICAgICAgICAgICAgXHQ6JydcdFxuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cdCAgICAgICAgICAgICAgICB7XG5cdCAgICAgICAgICAgICAgICBcdHRoaXMucHJvcHMuaXBkX2luZm8gJiYgdGhpcy5wcm9wcy5pcGRfaW5mby5hYm91dCAmJiB0aGlzLnByb3BzLmlwZF9pbmZvLmFib3V0Lm9mZmVycyAmJiB0aGlzLnByb3BzLmlwZF9pbmZvLmFib3V0Lm9mZmVycy5sZW5ndGg/XG5cdCAgICAgICAgICAgICAgICBcdDxkaXYgaWQ9XCJvZmZlcnNUYWJcIiByZWY9XCJvZmZlcnNUYWJcIj5cblx0XHQgICAgICAgICAgICAgICAgXHQ8SXBkT2ZmZXJzUGFnZSBvZmZlcnM9e3RoaXMucHJvcHMuaXBkX2luZm8uYWJvdXQub2ZmZXJzfSAvPlxuXHRcdCAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHQgICAgICAgICAgICAgICAgOicnXG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIDxkaXYgcmVmPVwicmVhZE1vcmVWaWV3XCIgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZSBuYXZfdG9wX2JhclwiPlxuXHQgICAgICAgICAgICAgICAgXHQ8SXBkSW5mb1ZpZXdNb3JlIHsuLi50aGlzLnByb3BzfS8+XG5cdCAgICAgICAgICAgICAgIFx0PC9kaXY+XG5cdCAgICAgICAgICAgIDwvZGl2PlxuXHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1zZWFyY2gtZGl2IGJ0bi1hcHBseS1kaXYgYnRuLXNibXRcIj5cbiAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgc3R5bGU9e3ttYXJnaW46MH19IG9uQ2xpY2s9e3RoaXMuZ2V0Q29zdEVzdGltYXRlQ2xpY2tlZC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJidG4tc2VhcmNoXCI+R2V0IENvc3QgRXN0aW1hdGU8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblx0XHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBJcGRWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vY29tbW9ucy9MZWZ0QmFyJ1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uL2NvbW1vbnMvUmlnaHRCYXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21tb25zL0xvYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tbW9ucy9Ib21lL2Zvb3RlcidcbmltcG9ydCBJcGRWaWV3IGZyb20gJy4vSXBkSW5mby5qcydcblxuY2xhc3MgSW5mb1ZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdFxuXHRyZW5kZXIoKXtcblxuXHRcdHJldHVybihcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciBzaG93U2VhcmNoPXt0cnVlfSBuZXdfZml4ZWRfaGVhZGVyPXsxfS8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIHBhcmVudC1zZWN0aW9uIGJvb2stYXBwb2ludG1lbnQtc2VjdGlvbiBicmVhZGNydW1iLW1yZ24gaG9zcGl0YWwtdmlldy1zZWN0aW9uXCI+XG5cblx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuXHQgICAgICAgICAgICAgICAgICAgIDxMZWZ0QmFyIC8+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTcgY2VudGVyLWNvbHVtblwiPlxuXHQgICAgICAgICAgICAgICAgICAgIFx0e1xuXHQgICAgICAgICAgICAgICAgICAgIFx0XHR0aGlzLnByb3BzLklQRF9JTkZPX0xPQURFRCB8fCAodGhpcy5wcm9wcy5pcGRfaW5mbyAmJiB0aGlzLnByb3BzLmlwZF9pbmZvLmFib3V0ICYmIHRoaXMucHJvcHMuaXBkX2luZm8uYWJvdXQuaWQgPT0gdGhpcy5wcm9wcy5pcGRfaWQpP1xuXHQgICAgICAgICAgICAgICAgICAgIFx0XHQ8SXBkVmlldyB7Li4udGhpcy5wcm9wc30vPlxuXHQgICAgICAgICAgICAgICAgICAgIFx0XHQ6PExvYWRlci8+XG5cdCAgICAgICAgICAgICAgICAgICAgXHR9XG5cdFx0XHQgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdCAgICAgICAgICAgIDxSaWdodEJhciBleHRyYUNsYXNzPVwiIGNoYXQtZmxvYXQtYnRuLTJcIiBzaG93RGVza3RvcElwZD17dHJ1ZX0gbXNnVGVtcGxhdGU9XCJnb2xkX2dlbmVyYWxfdGVtcGxhdGVcIi8+XG5cdFx0XHQgICAgICAgIDwvZGl2PlxuXHRcdFx0ICAgIDwvc2VjdGlvbj5cblx0XHRcdCAgICA8Rm9vdGVyIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmZvVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgSXBkT2ZmZXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaG93VG5jOiBmYWxzZVxuXHRcdH1cblx0fVxuXG5cdHRvZ2dsZVRuQyhpZCkge1xuXG5cdFx0aWYgKHRoaXMuc3RhdGUuc2hvd1RuYyAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpIHtcblx0XHRcdGxldCBoZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkub2Zmc2V0SGVpZ2h0IHx8IDBcblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCBoZWlnaHQpXG5cdFx0fVxuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93VG5jOiAhdGhpcy5zdGF0ZS5zaG93VG5jIH0pXG5cblx0fVxuXG5cdHJlbmRlcigpIHtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhzLWNhcmRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpcGQtb2ZyLWNvbnRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwiaHMtb2ZyLWhlYWRpbmdcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvaXBkLW9mci5zdmcnfSAvPk9mZmVycyBBdmFpbGFibGU8L2g0PlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLm9mZmVycy5tYXAoKG9mZmVyLCBpKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiaXBkLW9mci1tYWluXCIgaWQ9e2Ake2l9X29mZmVyYH0ga2V5PXtpfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaHMtb2ZmZXJDYXJkXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaHMtb2ZyLWNyZEhlYWRpbmdcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhzLW9mci1jb250bm5cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9pcGQtY3BuLnN2Zyd9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9mZmVyLmhvc3BpdGFsID8gPHNwYW4gY2xhc3NOYW1lPVwib2Zmci1ncm4tY2RcIj57b2ZmZXIuaG9zcGl0YWx9PC9zcGFuPiA6ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e29mZmVyLnRpdGxlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2lwZC1zaGFyZS5zdmcnfSAvPiovfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJocy1vZnItY2FyZC1jb250ZW50XCI+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvZmZlci5jb3Vwb24gP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNwbi1ycXJkXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+VXNlciBQcm9tbyBjb2RlIDogIDxzcGFuPntvZmZlci5jb3Vwb259PC9zcGFuPjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+e29mZmVyLmRlc2NyaXB0aW9ufTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQhb2ZmZXIuY291cG9uID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibm8tY3BuLXJxcmRcIj5ObyBDb3Vwb24gUmVxdWlyZWQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvZmZlci5zaG93X3RuYyAmJiB0aGlzLnN0YXRlLnNob3dUbmMgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvZmZlci1oaWRlLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbGktc3R5bGVcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG9mZmVyLnRuYyB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvZmZlci5zaG93X3RuYyA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhzLW9mZmVyLWZvb3RlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0Y19jb250XCI+VCZDIEFwcGx5PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5zaG93VG5jID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInNob3ctaGlkZS1vZmZyIGN1cnNvci1wbnRyXCIgb25DbGljaz17dGhpcy50b2dnbGVUbkMuYmluZCh0aGlzLCBgJHtpfV9vZmZlcmApfSA+SGlkZSBEZXRhaWxzIDxpbWcgY2xhc3NOYW1lPVwib2Zmc2hvd0ljb24gb2ZoaWRlSWNvbiBcIiBzdHlsZT17eyB3aWR0aDogJzdweCcsIG1hcmdpbkxlZnQ6ICc1cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvcmlnaHQtc2Muc3ZnJ30gLz48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IDxwIGNsYXNzTmFtZT1cInNob3ctaGlkZS1vZmZyIGN1cnNvci1wbnRyXCIgb25DbGljaz17dGhpcy50b2dnbGVUbkMuYmluZCh0aGlzLCBgJHtpfV9vZmZlcmApfSA+U2hvdyBEZXRhaWxzIDxpbWcgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3sgd2lkdGg6ICc3cHgnLCBtYXJnaW5MZWZ0OiAnNXB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3JpZ2h0LXNjLnN2Zyd9IC8+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR7Lyo8cCBjbGFzc05hbWU9XCJvZnItdnctbW9yZVwiPlZpZXcgNiBtb3JlIG9mZmVyczwvcD4qL31cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSXBkT2ZmZXJzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhvc3BpdGFsTGlzdCBmcm9tICcuL0hvc3BpdGFsTGlzdC5qcydcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vaGVscGVycy9ndG0uanMnXG5cblxuY2xhc3MgSVBEQWJvdXRVcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR0b2dnbGVSZWFkTW9yZTogZmFsc2Vcblx0XHR9XG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0bGV0IHsgaXBkX2luZm8gfSA9IHRoaXMucHJvcHNcblxuXHRcdGxldCBhYm91dFRleHQgPW51bGxcblx0XHRpZihpcGRfaW5mbyAgJiYgaXBkX2luZm8uYWJvdXQmJiBpcGRfaW5mby5hYm91dC5zaG93X2Fib3V0KXtcblx0XHRcdFxuXHRcdFx0YWJvdXRUZXh0ID0gaXBkX2luZm8uYWJvdXQuYWJvdXRcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuKFxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZVwiIGlkPVwibmF2LW92ZXJ2aWV3XCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgezx1bD5cbiAgICAgICAgICAgICAgICBcdHtcbiAgICAgICAgICAgICAgICBcdFx0aXBkX2luZm8uYWJvdXQgJiYgaXBkX2luZm8uYWJvdXQuZmVhdHVyZXM/XG4gICAgICAgICAgICAgICAgXHRcdGlwZF9pbmZvLmFib3V0LmZlYXR1cmVzLm1hcCgoaXBkLCBpKSA9PntcbiAgICAgICAgICAgICAgICBcdFx0XHRyZXR1cm4gPGxpIGtleT17aX0gY2xhc3NOYW1lPVwid2lkZ2V0IHBhdC1pbmZvXCI+XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXBkLmljb259IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1saXN0XCIgLz5cblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2Ake2lwZC5uYW1lfTpgfSAgPHNwYW4+e2lwZC52YWx1ZX08L3NwYW4+PC9kaXY+XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIFx0XHR9KVxuICAgICAgICAgICAgICAgIFx0XHQ6JydcbiAgICAgICAgICAgICAgICBcdH1cbiAgICAgICAgICAgICAgICA8L3VsPn1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXHRhYm91dFRleHQ/XG4gICAgICAgICAgICAgICAgXHQ8ZGl2PlxuICAgICAgICAgICAgICAgIFx0XHQ8aDQgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkaW5nXCI+e2BBYm91dCAke2lwZF9pbmZvLmFib3V0P2lwZF9pbmZvLmFib3V0Lm5hbWU6Jyd9YH0gPC9oND5cblx0XHQgICAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IGN1c3RvbS1saS1zdHlsZSBwYi0zMFwiIHN0eWxlPXt7dGV4dEFsaWduOidqdXN0aWZ5J319IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYWJvdXRUZXh0fX0+XG5cdFx0XHQgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcdDwvZGl2PlxuICAgICAgICAgICAgICAgIFx0OicnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFx0e1x0YWJvdXRUZXh0P1xuXHQgICAgICAgICAgICAgICAgXHRcdHRoaXMuc3RhdGUudG9nZ2xlUmVhZE1vcmU/XG5cdCAgICAgICAgICAgICAgICBcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtYnRuXCIgb25DbGljaz17KCk9Pntcblx0ICAgICAgICAgICAgICAgIFx0XHRcdGxldCBndG1EYXRhID0ge1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdJcGRJbmZvUmVhZExlc3NDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaXBkLWluZm8tcmVhZC1sZXNzLWNsaWNrZWQnLCBzZWxlY3RlZElkOiB0aGlzLnByb3BzLmlwZF9pZCB8fCAnJ1xuXHRcdFx0XHRcdFx0ICAgICAgICB9XG5cdFx0XHRcdFx0XHQgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG5cdCAgICAgICAgICAgICAgICBcdFx0XHR0aGlzLnNldFN0YXRlKHt0b2dnbGVSZWFkTW9yZTogIXRoaXMuc3RhdGUudG9nZ2xlUmVhZE1vcmV9KVxuXHQgICAgICAgICAgICAgICAgXHRcdH19ID5SZWFkIExlc3M8L2E+XG5cdFx0XHQgICAgICAgICAgICAgICAgOjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3NOYW1lPVwicmVhZC1tb3JlLWJ0blwiIG9uQ2xpY2s9eygpPT57XG5cdFx0XHQgICAgICAgICAgICAgICAgXHRsZXQgZ3RtRGF0YSA9IHtcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSXBkSW5mb1JlYWRNb3JlQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2lwZC1pbmZvLXJlYWQtbW9yZS1jbGlja2VkJywgc2VsZWN0ZWRJZDogdGhpcy5wcm9wcy5pcGRfaWQgfHwgJydcblx0XHRcdFx0XHRcdCAgICAgICAgfVxuXHRcdFx0XHRcdFx0ICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuXHRcdFx0XHRcdFx0ICAgICAgICB0aGlzLnByb3BzLnJlYWRNb3JlQ2xpY2tlZCgpXG5cdFx0XHQgICAgICAgICAgICAgICAgXHQvL3RoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvaXBkLyR7dGhpcy5wcm9wcy5pcGRfaWR9L2RldGFpbGApXG5cdFx0XHQgICAgICAgICAgICAgICAgfX0gPlJlYWQgTW9yZTwvYT5cbiAgICAgICAgICAgICAgICBcdFx0OicnXG4gICAgICAgICAgICAgICAgXHR9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBJUERBYm91dFVzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGdldElwZEluZm8sIHNlbGVjdE9wZFRpbWVTTG90LCBzYXZlUHJvZmlsZVByb2NlZHVyZXMsIGNsb25lQ29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMsIG1lcmdlSXBkQ3JpdGVyaWEsIGlwZENoYXRWaWV3LCBjaGVja0lwZENoYXRBZ2VudFN0YXR1cywgZ2V0T2ZmZXJMaXN0IH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBJcGRJbmZvVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2lwZC9JcGRJbmZvVmlldy5qcydcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJylcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vaGVscGVycy9ndG0uanMnXG5cblxuY2xhc3MgSXBkSW5mb0NvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGlwZF9pZDogJycsXG5cdFx0XHRzZW9Vcmw6IGZhbHNlXG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGxvYWREYXRhKHN0b3JlLCBtYXRjaCwgcXVlcnkpIHtcblxuXHRcdGxldCBzZWFyY2hfYnlfdXJsID0gbnVsbFxuXHRcdGlmKHF1ZXJ5LmlwZF9pZCkge1xuXHRcdFx0XG5cdFx0fWVsc2V7XG5cblx0XHRcdGxldCB0aXRsZSA9IG1hdGNoLnVybFxuXHRcdFx0c2VhcmNoX2J5X3VybCA9IHRpdGxlLnN1YnN0cmluZygxLCB0aXRsZS5sZW5ndGgpLnRvTG93ZXJDYXNlKClcblx0XHR9XG5cbiAgICAgICAgbGV0IGlwZF9pZCA9IHF1ZXJ5ICYmIHF1ZXJ5LmlwZF9pZD9xdWVyeS5pcGRfaWQ6JydcblxuICAgICAgICBsZXQgc2VsZWN0ZWRMb2NhdGlvbiA9IG51bGxcbiAgICAgICAgaWYgKHF1ZXJ5LmxhdCAmJiBxdWVyeS5sb25nKSB7XG4gICAgICAgICAgICBzZWxlY3RlZExvY2F0aW9uID0geyBnZW9tZXRyeTogeyBsb2NhdGlvbjogeyBsYXQ6IHF1ZXJ5LmxhdCwgbG5nOiBxdWVyeS5sb25nIH0gfSwgcGxhY2VfaWQ6IHF1ZXJ5LnBsYWNlX2lkfHwnJywgZm9ybWF0dGVkX2FkZHJlc3M6IFwiRGVsaGlcIiwgc3ViX2xvY2FsaXR5OiBxdWVyeS5zdWJfbG9jYWxpdHkgfHwnJywgbG9jYWxpdHk6IHF1ZXJ5LmxvY2FsaXR5IHx8ICcnfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGdldElwZEluZm8oaXBkX2lkLCBzZWxlY3RlZExvY2F0aW9uLCBzZWFyY2hfYnlfdXJsKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICByb3V0ZXI6ICgpID0+IG51bGxcbiAgICB9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHRjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblx0XHRsZXQgaXBkX2lkID0gJydcblx0XHRsZXQgc2VhcmNoX2J5X3VybCA9IG51bGxcblx0XHRpZihwYXJzZWQuaXBkX2lkKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe2lwZF9pZDogcGFyc2VkLmlwZF9pZH0pXG5cdFx0XHRpcGRfaWQgPSBwYXJzZWQuaXBkX2lkXG5cdFx0XHR0aGlzLnByb3BzLmdldElwZEluZm8ocGFyc2VkLmlwZF9pZCwgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKVxuXG5cblx0XHRcdGxldCBndG1EYXRhID0ge1xuXHQgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0lQREluZm9QYWdlTGFuZGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaXBkLWluZm8tcGFnZS1sYW5kZWQnLCBzZWxlY3RlZElkOiBwYXJzZWQuaXBkX2lkIHx8ICcnXG5cdCAgICAgICAgfVxuXHQgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG5cblx0XHR9ZWxzZXtcblx0XHRcdGxldCB0aXRsZSA9IHRoaXMucHJvcHMubWF0Y2gudXJsXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtzZW9Vcmw6IHRydWV9KVxuXHRcdFx0c2VhcmNoX2J5X3VybCA9IHRpdGxlLnN1YnN0cmluZygxLCB0aXRsZS5sZW5ndGgpLnRvTG93ZXJDYXNlKClcblx0XHRcdHRoaXMucHJvcHMuZ2V0SXBkSW5mbygnJywgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLCBzZWFyY2hfYnlfdXJsLCAocmVzcCkgPT4ge1xuXHRcdFx0XHRpZihyZXNwKXtcblx0XHRcdFx0XHRpZihyZXNwLmFib3V0ICYmIHJlc3AuYWJvdXQuaWQpe1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGlwZF9pZDogcmVzcC5hYm91dC5pZCB9KVxuXG5cdFx0XHRcdFx0XHRsZXQgZ3RtRGF0YSA9IHtcblx0XHRcdFx0ICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdJUERJbmZvUGFnZUxhbmRlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2lwZC1pbmZvLXBhZ2UtbGFuZGVkJywgc2VsZWN0ZWRJZDogcmVzcC5hYm91dC5pZCB8fCAnJ1xuXHRcdFx0XHQgICAgICAgIH1cblx0XHRcdFx0ICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHR9XG5cdFx0LyplbHNlIGlmKHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMubGVuZ3RoKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe2lwZF9pZDogdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhc1swXS5pZH0pXG5cdFx0XHRpcGRfaWQgPSB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzWzBdLmlkXG5cdFx0XHR0aGlzLnByb3BzLmdldElwZEluZm8odGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhc1swXS5pZCwgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKVx0XG5cdFx0fSovXG5cdFx0aWYod2luZG93KXtcblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLDApXG5cdFx0fVxuXG5cdFx0bGV0IHNlbGVjdGVkTG9jYXRpb24gPSAnJ1xuICAgICAgICBsZXQgbGF0ID0gMjguNjQ0ODAwXG4gICAgICAgIGxldCBsb25nID0gNzcuMjE2NzIxXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb24gPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb247XG4gICAgICAgICAgICBsYXQgPSBzZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxhdFxuICAgICAgICAgICAgbG9uZyA9IHNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubG5nXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxhdCA9PT0gJ2Z1bmN0aW9uJykgbGF0ID0gbGF0KClcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbG9uZyA9PT0gJ2Z1bmN0aW9uJykgbG9uZyA9IGxvbmcoKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9wcy5nZXRPZmZlckxpc3QobGF0LCBsb25nKVxuXG5cdFx0aWYoIXNlYXJjaF9ieV91cmwpe1xuXHRcdFx0bGV0IG5ld191cmwgPSB0aGlzLmJ1aWxkVXJsKHRoaXMucHJvcHMpXG5cdCAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UobmV3X3VybClcblx0XHR9XG5cdFx0XG5cdH1cblxuXHRidWlsZFVybChwcm9wcyl7XG5cdFx0Ly9idWlsZCB1cmwgZm9yIGlwZCBwcm9jZWR1cmUgaW5mb1xuXHRcdGxldCBsYXQgPSAyOC42NDQ4MDBcbiAgICAgICAgbGV0IGxvbmcgPSA3Ny4yMTY3MjFcbiAgICAgICAgbGV0IHBsYWNlX2lkID0gXCJcIlxuICAgICAgICBsZXQgbG9jYWxpdHkgPSAnRGVsaGknXG4gICAgICAgIGxldCBzdWJfbG9jYWxpdHkgPSAnJ1xuXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG4gICAgICAgIGlmIChwcm9wcy5zZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICBwbGFjZV9pZCA9IHByb3BzLnNlbGVjdGVkTG9jYXRpb24ucGxhY2VfaWQgfHwgXCJcIlxuICAgICAgICAgICAgbGF0ID0gcHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sYXRcbiAgICAgICAgICAgIGxvbmcgPSBwcm9wcy5zZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBsYXQgPT09ICdmdW5jdGlvbicpIGxhdCA9IGxhdCgpXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxvbmcgPT09ICdmdW5jdGlvbicpIGxvbmcgPSBsb25nKClcblxuICAgICAgICAgICAgbGF0ID0gcGFyc2VGbG9hdChwYXJzZUZsb2F0KGxhdCkudG9GaXhlZCg2KSlcbiAgICAgICAgICAgIGxvbmcgPSBwYXJzZUZsb2F0KHBhcnNlRmxvYXQobG9uZykudG9GaXhlZCg2KSlcblxuICAgICAgICAgICAgbG9jYWxpdHkgPSBwcm9wcy5zZWxlY3RlZExvY2F0aW9uLmxvY2FsaXR5IHx8ICcnXG4gICAgICAgICAgICBzdWJfbG9jYWxpdHkgPSBwcm9wcy5zZWxlY3RlZExvY2F0aW9uLnN1Yl9sb2NhbGl0eSB8fCAnJ1xuICAgICAgICB9XG5cblx0XHRsZXQgbmV3X3VybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0/aXBkX2lkPSR7cGFyc2VkLmlwZF9pZH0mcGxhY2VfaWQ9JHtwbGFjZV9pZH0mbGF0PSR7bGF0fSZsb25nPSR7bG9uZ30mbG9jYWxpdHk9JHtsb2NhbGl0eX0mc3ViX2xvY2FsaXR5PSR7c3ViX2xvY2FsaXR5fSZzaG93UG9wdXA9dHJ1ZWBcblxuXHRcdGlmKHBhcnNlZC51dG1fc291cmNlKSB7XG5cdFx0XHRuZXdfdXJsKz0gYCZ1dG1fc291cmNlPSR7cGFyc2VkLnV0bV9zb3VyY2V8fCcnfWBcblx0XHR9XG5cblx0XHRpZihwYXJzZWQudXRtX21lZGl1bSkge1xuXHRcdFx0bmV3X3VybCs9IGAmdXRtX21lZGl1bT0ke3BhcnNlZC51dG1fbWVkaXVtfHwnJ31gXG5cdFx0fVxuXG5cdFx0aWYocGFyc2VkLnV0bV9jYW1wYWlnbikge1xuXHRcdFx0bmV3X3VybCs9IGAmdXRtX2NhbXBhaWduPSR7cGFyc2VkLnV0bV9jYW1wYWlnbnx8Jyd9YFxuXHRcdH0gXG5cdFx0XG5cdFx0aWYodGhpcy5wcm9wcy5pc19pcGRfZm9ybV9zdWJtaXR0ZWQpIHtcblx0XHRcdFxuXHRcdH1lbHNlIGlmKHBhcnNlZCAmJiBwYXJzZWQuZ2V0X2ZlZWRiYWNrPT0nMScpe1xuXHRcdFx0bmV3X3VybCs9JyZnZXRfZmVlZGJhY2s9MSdcblx0XHR9XG5cblx0XHRpZihwYXJzZWQgJiYgcGFyc2VkLnR5cGUpIHtcblx0XHRcdG5ld191cmwrPSBgJnR5cGU9JHtwYXJzZWQudHlwZX1gXG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ld191cmxcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG5cdFx0aWYodGhpcy5wcm9wcy5sb2NhdGlvbkZldGNoZWQgIT0gbmV4dFByb3BzLmxvY2F0aW9uRmV0Y2hlZCl7XG5cblx0XHRcdGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKG5leHRQcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cdFx0XHRsZXQgc2VhcmNoX2J5X3VybCA9IG51bGxcblxuXHRcdFx0aWYocGFyc2VkLmlwZF9pZCl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2lwZF9pZDogcGFyc2VkLmlwZF9pZH0pXG5cdFx0XHRcdHRoaXMucHJvcHMuZ2V0SXBkSW5mbyhwYXJzZWQuaXBkX2lkLCBuZXh0UHJvcHMuc2VsZWN0ZWRMb2NhdGlvbilcblx0XHRcdH1lbHNle1xuXG5cdFx0XHRcdGxldCB0aXRsZSA9IHRoaXMucHJvcHMubWF0Y2gudXJsXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe3Nlb1VybDogdHJ1ZX0pXG5cdFx0XHRcdHNlYXJjaF9ieV91cmwgPSB0aXRsZS5zdWJzdHJpbmcoMSwgdGl0bGUubGVuZ3RoKS50b0xvd2VyQ2FzZSgpXG5cdFx0XHRcdHRoaXMucHJvcHMuZ2V0SXBkSW5mbygnJywgbmV4dFByb3BzLnNlbGVjdGVkTG9jYXRpb24sIHNlYXJjaF9ieV91cmwsIChyZXNwKT0+IHtcblxuXHRcdFx0XHRcdGlmKHJlc3Ape1xuXHRcdFx0XHRcdFx0aWYocmVzcC5hYm91dCAmJiByZXNwLmFib3V0LmlkKXtcblx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGlwZF9pZDogcmVzcC5hYm91dC5pZCB9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9KVxuXHRcdFx0fS8qZWxzZSBpZihuZXh0UHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMubGVuZ3RoKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7aXBkX2lkOiBuZXh0UHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXNbMF0uaWR9KVxuXHRcdFx0XHR0aGlzLnByb3BzLmdldElwZEluZm8obmV4dFByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzWzBdLmlkLCBuZXh0UHJvcHMuc2VsZWN0ZWRMb2NhdGlvbilcdFxuXHRcdFx0fSovXG5cdFx0XHRpZih3aW5kb3cpe1xuXHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwwKVxuXHRcdFx0fVxuXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8SXBkSW5mb1ZpZXcgey4uLnRoaXMucHJvcHN9IHsuLi50aGlzLnN0YXRlfS8+XG5cdFx0XHQpXG5cdH1cbn0gXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuXG5cdGNvbnN0IHtcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvblxuICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfT1BEXG5cblx0Y29uc3Qge1xuXHRcdHNlbGVjdGVkQ3JpdGVyaWFzLFxuXHRcdGlwZF9pbmZvLFxuXHRcdElQRF9JTkZPX0xPQURFRCxcblx0XHRjb21tb25TZWxlY3RlZENyaXRlcmlhcyxcblx0XHRsb2NhdGlvbkZldGNoZWRcblx0fSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9JUERcblxuXHRjb25zdCB7XG5cdFx0aXBkX2NoYXQsXG5cdFx0b2ZmZXJMaXN0LFxuXHRcdGlzX2lwZF9mb3JtX3N1Ym1pdHRlZFxuXHR9ID0gc3RhdGUuVVNFUlxuXG4gICAgcmV0dXJue1xuICAgIFx0c2VsZWN0ZWRMb2NhdGlvbiwgc2VsZWN0ZWRDcml0ZXJpYXMsIGlwZF9pbmZvLCBJUERfSU5GT19MT0FERUQsIGNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLCBsb2NhdGlvbkZldGNoZWQsIGlwZF9jaGF0LCBvZmZlckxpc3QsXG4gICAgXHRpc19pcGRfZm9ybV9zdWJtaXR0ZWRcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGdldElwZEluZm86IChpcGRfaWQsIHNlbGVjdGVkTG9jYXRpb24sIHNlYXJjaF9ieV91cmwsIGNiKSA9PiBkaXNwYXRjaChnZXRJcGRJbmZvKGlwZF9pZCwgc2VsZWN0ZWRMb2NhdGlvbiwgc2VhcmNoX2J5X3VybCwgY2IpKSxcblx0XHRzYXZlUHJvZmlsZVByb2NlZHVyZXM6IChkb2N0b3JfaWQsIGNsaW5pY19pZCwgcHJvY2VkdXJlX2lkcywgZm9yY2VBZGQpID0+IGRpc3BhdGNoKHNhdmVQcm9maWxlUHJvY2VkdXJlcyhkb2N0b3JfaWQsIGNsaW5pY19pZCwgcHJvY2VkdXJlX2lkcywgZm9yY2VBZGQpKSxcblx0XHRzZWxlY3RPcGRUaW1lU0xvdDogKHNsb3QsIHJlc2NoZWR1bGUsIGFwcG9pbnRtZW50SWQpID0+IGRpc3BhdGNoKHNlbGVjdE9wZFRpbWVTTG90KHNsb3QsIHJlc2NoZWR1bGUsIGFwcG9pbnRtZW50SWQpKSxcblx0XHRjbG9uZUNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzOiAoc2VsZWN0ZWRDcml0ZXJpYXMpID0+IGRpc3BhdGNoKGNsb25lQ29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMoc2VsZWN0ZWRDcml0ZXJpYXMpKSxcblx0XHRtZXJnZUlwZENyaXRlcmlhOiAoZmlsdGVyQ3JpdGVyaWEpPT4gZGlzcGF0Y2gobWVyZ2VJcGRDcml0ZXJpYShmaWx0ZXJDcml0ZXJpYSkpLFxuXHRcdGlwZENoYXRWaWV3OiAoZGF0YSkgPT4gZGlzcGF0Y2goaXBkQ2hhdFZpZXcoZGF0YSkpLFxuXHRcdGNoZWNrSXBkQ2hhdEFnZW50U3RhdHVzOiAoY2IpID0+IGRpc3BhdGNoKGNoZWNrSXBkQ2hhdEFnZW50U3RhdHVzKGNiKSksXG5cdFx0Z2V0T2ZmZXJMaXN0OiAobGF0LGxvbmcpID0+IGRpc3BhdGNoKGdldE9mZmVyTGlzdChsYXQsbG9uZykpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSXBkSW5mb0NvbnRhaW5lcikiXSwic291cmNlUm9vdCI6IiJ9