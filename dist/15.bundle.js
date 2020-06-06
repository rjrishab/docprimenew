(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./dev/js/components/commons/nonIpdPopup.js":
/*!**************************************************!*\
  !*** ./dev/js/components/commons/nonIpdPopup.js ***!
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

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _initialsPicture = __webpack_require__(/*! ../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonIpdPopupView = function (_React$Component) {
	_inherits(NonIpdPopupView, _React$Component);

	function NonIpdPopupView(props) {
		_classCallCheck(this, NonIpdPopupView);

		var _this = _possibleConstructorReturn(this, (NonIpdPopupView.__proto__ || Object.getPrototypeOf(NonIpdPopupView)).call(this, props));

		_this.state = {
			phone_number: null
		};
		return _this;
	}

	_createClass(NonIpdPopupView, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'onChangeHandler',
		value: function onChangeHandler(event) {
			this.setState({ phone_number: event.target.value });
		}
	}, {
		key: 'submitLead',
		value: function submitLead() {
			if (this.state.phone_number) {
				if (this.state.phone_number.length < 10) {
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Valid phone number" });
					return;
				} else if (this.state.phone_number.length > 10) {
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Valid phone number" });
					return;
				} else {
					this.props.nonIpdLeads(this.state.phone_number);
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Your request has been submited" });
					if (this.props.is_organic) {
						var callBackUrl = this.props.history.location.pathname + '/booking' + this.props.history.location.search + '&doctor_id=' + this.props.doctor_id + '&hospital_id=' + this.props.hospital_id;
						this.props.history.push('/vip-gold-details?is_gold=true&source=desktop-submenu-gold-clicked&lead_source=Docprime&fromOrganic=true&callBackUrl=' + callBackUrl);
					}
				}
			} else {
				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter phone number" });
			}
		}
	}, {
		key: 'getCriteriaString',
		value: function getCriteriaString(selectedCriterias) {
			if (selectedCriterias && selectedCriterias.length) {
				return selectedCriterias.reduce(function (final, curr, i) {
					if (i != 0) {
						final += ', ';
					}
					final += '' + curr.name;
					return final;
				}, "");
			}
		}
	}, {
		key: 'getDocCriteriaString',
		value: function getDocCriteriaString(selectedCriterias) {
			if (selectedCriterias && selectedCriterias.length) {
				var is_group_ids_exist = selectedCriterias.filter(function (x) {
					return x.type == 'group_ids';
				});
				var selectedDataView = is_group_ids_exist.length ? is_group_ids_exist : selectedCriterias;

				return selectedDataView.reduce(function (final, curr, i) {
					if (i != 0) {
						final += ', ';
					}
					final += '' + curr.name;
					return final;
				}, "");
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var criteriaStr = 'Health Packages';
			var thumbnail = null;
			var is_license_verified = false;

			var common_msg = _react2.default.createElement(
				'p',
				{ style: { fontWeight: 'bold', textAlign: 'center' }, className: 'cancel-appointment-head' },
				'Book',
				_react2.default.createElement(
					'span',
					{ className: 'fw-500 text-capitalize' },
					' ',
					criteriaStr
				),
				' ',
				_react2.default.createElement('br', null),
				'at the Lowest Prices!'
			);
			if (this.props.is_lab) {
				if (this.props.currentSearchedCriterias && this.props.currentSearchedCriterias.length > 0) {
					criteriaStr = this.getCriteriaString(this.props.currentSearchedCriterias);
				}
				common_msg = _react2.default.createElement(
					'p',
					{ style: { fontWeight: 'bold', textAlign: 'center' }, className: 'cancel-appointment-head' },
					'Book',
					_react2.default.createElement(
						'span',
						{ className: 'fw-500 text-capitalize' },
						' ',
						criteriaStr
					),
					' ',
					_react2.default.createElement('br', null),
					'at the Lowest Prices!'
				);
				// else if(this.props.selectedCriterias && this.props.selectedCriterias.length>0){
				// 	criteriaStr = this.getCriteriaString(this.props.selectedCriterias)
				// }
			} else if (this.props.is_opd) {
				if (this.props.commonSelectedCriterias && this.props.commonSelectedCriterias.length > 0) {
					criteriaStr = this.getDocCriteriaString(this.props.commonSelectedCriterias);
				}
				common_msg = _react2.default.createElement(
					'p',
					{ style: { fontWeight: 'bold', textAlign: 'center' }, className: 'cancel-appointment-head' },
					'Book Appointment with ',
					_react2.default.createElement('br', null),
					_react2.default.createElement(
						'span',
						{ className: 'fw-500 text-capitalize' },
						' ',
						criteriaStr
					)
				);
			} else if (this.props.is_dpp || this.props.is_booking || this.props.is_organic) {
				if (this.props && this.props.DOCTORS && Object.keys(this.props.DOCTORS).length && this.props.doctor_id) {
					criteriaStr = this.props.DOCTORS[this.props.doctor_id].display_name;
					thumbnail = this.props.DOCTORS[this.props.doctor_id].thumbnail;
					is_license_verified = this.props.DOCTORS[this.props.doctor_id].is_license_verified;
				}
				common_msg = _react2.default.createElement(
					'div',
					{ className: 'docImg-Popup' },
					thumbnail ? _react2.default.createElement(
						'div',
						{ className: 'doc-img-popupSection' },
						_react2.default.createElement(
							_initialsPicture2.default,
							{ name: criteriaStr, has_image: !!thumbnail, className: 'initialsPicture-dp ' },
							_react2.default.createElement('img', { src: thumbnail, className: 'img-fluid img-round', alt: '' + criteriaStr, title: criteriaStr })
						),
						is_license_verified ? _react2.default.createElement(
							'span',
							{ className: 'fltr-rtng' },
							'Verified'
						) : ''
					) : '',
					this.props.is_organic ? _react2.default.createElement(
						'p',
						{ style: { fontWeight: 'bold' }, className: 'cancel-appointment-head' },
						'Book Appointment with',
						_react2.default.createElement('br', null),
						criteriaStr
					) : _react2.default.createElement(
						'p',
						{ style: { fontWeight: 'bold' }, className: 'cancel-appointment-head' },
						'Book Appointment with ',
						_react2.default.createElement('br', null),
						_react2.default.createElement(
							'span',
							{ className: 'fw-500 text-capitalize' },
							' ',
							criteriaStr
						)
					)
				);
			} else if (this.props.is_hpp) {
				var hospital_data = this.props.hospital_data;

				if (hospital_data) {
					criteriaStr = hospital_data.name;
				}
				common_msg = _react2.default.createElement(
					'p',
					{ style: { fontWeight: 'bold', textAlign: 'center' }, className: 'cancel-appointment-head' },
					'Book Appointment at ',
					_react2.default.createElement('br', null),
					_react2.default.createElement(
						'span',
						{ className: 'fw-500 text-capitalize' },
						' ',
						criteriaStr
					)
				);
			} else if (this.props.is_package) {
				if (this.props.packagesList && this.props.packagesList.result && this.props.packagesList.result.length == 1) {
					criteriaStr = this.props.packagesList.result[0].name;
				}
				common_msg = _react2.default.createElement(
					'p',
					{ style: { fontWeight: 'bold', textAlign: 'center' }, className: 'cancel-appointment-head' },
					'Book',
					_react2.default.createElement(
						'span',
						{ className: 'fw-500 text-capitalize' },
						' ',
						criteriaStr
					),
					' ',
					_react2.default.createElement('br', null),
					' at the Lowest Prices!'
				);
			}
			return _react2.default.createElement(
				'div',
				{ className: 'booking-help-modal' },
				_react2.default.createElement('div', { className: 'cancel-overlay' }),
				_react2.default.createElement(
					'div',
					{ className: 'widget cancel-appointment-div cancel-popup' },
					_react2.default.createElement(
						'div',
						{ className: 'widget-header text-center action-screen-header' },
						common_msg,
						this.props.is_force == 1 /*|| this.props.is_organic*/ ? _react2.default.createElement(
							'a',
							{ href: '#', onClick: this.props.closeIpdLeadPopup.bind(this, true), className: 'close-times-icon' },
							'\xD7'
						) : ''
					),
					this.props.is_organic ? _react2.default.createElement(
						'div',
						{ className: 'gold-wdgt-text-strip' },
						_react2.default.createElement(
							'p',
							null,
							'Save 6000+/yr by availing exclusive benefits with Docprime Gold '
						)
					) : '',
					_react2.default.createElement(
						'div',
						{ className: 'col-sm-12 pd-10' },
						this.props.is_opd || this.props.is_dpp || this.props.is_hpp || this.props.is_booking ? _react2.default.createElement(
							_react2.default.Fragment,
							null,
							_react2.default.createElement(
								'p',
								{ className: 'fw-500 d-flex align-item-center mb-2', style: { fontSize: 14 } },
								_react2.default.createElement('img', { className: 'ipd-pop-tick', src: "/assets" + '/images/tick.png' }),
								_react2.default.createElement(
									'span',
									null,
									'Save up to 50% on Fees'
								)
							),
							_react2.default.createElement(
								'p',
								{ className: 'fw-500 d-flex align-item-center mb-2', style: { fontSize: 14 } },
								_react2.default.createElement('img', { className: 'ipd-pop-tick', src: "/assets" + '/images/tick.png' }),
								_react2.default.createElement(
									'span',
									null,
									'Instant Confirmation for Free'
								)
							),
							_react2.default.createElement(
								'p',
								{ className: 'fw-500 d-flex align-item-center mb-2', style: { fontSize: 14 } },
								_react2.default.createElement('img', { className: 'ipd-pop-tick', src: "/assets" + '/images/tick.png' }),
								_react2.default.createElement(
									'span',
									null,
									'View Doctor Availability'
								)
							)
						) : this.props.is_organic ? _react2.default.createElement(
							_react2.default.Fragment,
							null,
							_react2.default.createElement(
								'p',
								{ className: 'fw-500 d-flex align-item-center mb-2', style: { fontSize: 14 } },
								_react2.default.createElement('img', { className: 'ipd-pop-tick', src: "/assets" + '/images/tick.png' }),
								_react2.default.createElement(
									'span',
									null,
									'Special Prices on Doctor and Lab Tests'
								)
							),
							_react2.default.createElement(
								'p',
								{ className: 'fw-500 d-flex align-item-center mb-2', style: { fontSize: 14 } },
								_react2.default.createElement('img', { className: 'ipd-pop-tick', src: "/assets" + '/images/tick.png' }),
								_react2.default.createElement(
									'span',
									null,
									'23% OFF on Medicines'
								)
							),
							_react2.default.createElement(
								'p',
								{ className: 'fw-500 d-flex align-item-center mb-2', style: { fontSize: 14 } },
								_react2.default.createElement('img', { className: 'ipd-pop-tick', src: "/assets" + '/images/tick.png' }),
								_react2.default.createElement(
									'span',
									null,
									'Covers Full Family of 6 Members'
								)
							)
						) : _react2.default.createElement(
							_react2.default.Fragment,
							null,
							_react2.default.createElement(
								'p',
								{ className: 'fw-500 d-flex align-item-center mb-2', style: { fontSize: 14 } },
								_react2.default.createElement('img', { className: 'ipd-pop-tick', src: "/assets" + '/images/tick.png' }),
								_react2.default.createElement(
									'span',
									null,
									'Free  Lab Report Review from Doctors'
								)
							),
							_react2.default.createElement(
								'p',
								{ className: 'fw-500 d-flex align-item-center mb-2', style: { fontSize: 14 } },
								_react2.default.createElement('img', { className: 'ipd-pop-tick', src: "/assets" + '/images/tick.png' }),
								_react2.default.createElement(
									'span',
									null,
									'Lowest Price Guarantee'
								)
							),
							_react2.default.createElement(
								'p',
								{ className: 'fw-500 d-flex align-item-center mb-2', style: { fontSize: 14 } },
								_react2.default.createElement('img', { className: 'ipd-pop-tick', src: "/assets" + '/images/tick.png' }),
								_react2.default.createElement(
									'span',
									null,
									'Free Home Sample Collection'
								)
							)
						)
					),
					_react2.default.createElement('div', { className: 'clearfix' }),
					_react2.default.createElement(
						'div',
						{ className: 'col-sm-12 pd-10 d-flex justify-content-center align-item-center flex-column', style: { margin: "0px 0px 6px" } },
						_react2.default.createElement(
							'form',
							{ className: 'col-sm-12 pd-0' },
							_react2.default.createElement(
								'div',
								{ className: 'labelWrap mb-0' },
								_react2.default.createElement('input', { className: 'fs-12', type: 'number', placeholder: 'Please enter your mobile number to continue', onChange: this.onChangeHandler.bind(this) })
							)
						),
						_react2.default.createElement(
							'p',
							{ className: 'fw-500 col-sm-12 p-0 mr-t-5', style: { fontSize: 11, fontStyle: 'italic' } },
							'*Your booking details will be sent to this number'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'payment-content-btn text-center m-0 pd-10 pt-0' },
						_react2.default.createElement(
							'button',
							{ className: 'fw-500 text-white pop-subText', onClick: this.submitLead.bind(this) },
							_react2.default.createElement(
								'p',
								{ className: 'fw-500' },
								'' + (this.props.is_organic ? 'Book Appointment at Discounted Price' : 'Book Appointment')
							),
							this.props.is_organic ? '' : _react2.default.createElement(
								'span',
								null,
								'No Service Fee'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'popUp-whtsappEnable' },
						_react2.default.createElement(
							'div',
							{ className: 'whtsappEnable-container' },
							_react2.default.createElement(
								'p',
								{ className: 'wtsapp-chk-txt' },
								_react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/customer-icons/tick.svg' }),
								' Enable Whatsapp for seamless communication'
							),
							_react2.default.createElement(
								'p',
								{ className: 'text-center fw-500', style: { fontSize: 9, color: '#8a8a8a' } },
								'By proceeding, you hereby agree to the ',
								_react2.default.createElement(
									'a',
									{ href: '/terms', target: '_blank', style: { color: 'var(--text--primary--color)' } },
									'End User Agreement'
								),
								' and ',
								_react2.default.createElement(
									'a',
									{ href: '/privacy', target: '_blank', style: { color: 'var(--text--primary--color)' } },
									'Privacy Policy.'
								)
							)
						)
					)
				)
			);
		}
	}]);

	return NonIpdPopupView;
}(_react2.default.Component);

exports.default = NonIpdPopupView;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL25vbklwZFBvcHVwLmpzIl0sIm5hbWVzIjpbIk5vbklwZFBvcHVwVmlldyIsInByb3BzIiwic3RhdGUiLCJwaG9uZV9udW1iZXIiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJ0ZXh0Iiwibm9uSXBkTGVhZHMiLCJpc19vcmdhbmljIiwiY2FsbEJhY2tVcmwiLCJoaXN0b3J5IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNlYXJjaCIsImRvY3Rvcl9pZCIsImhvc3BpdGFsX2lkIiwicHVzaCIsInNlbGVjdGVkQ3JpdGVyaWFzIiwicmVkdWNlIiwiZmluYWwiLCJjdXJyIiwiaSIsIm5hbWUiLCJpc19ncm91cF9pZHNfZXhpc3QiLCJmaWx0ZXIiLCJ4IiwidHlwZSIsInNlbGVjdGVkRGF0YVZpZXciLCJjcml0ZXJpYVN0ciIsInRodW1ibmFpbCIsImlzX2xpY2Vuc2VfdmVyaWZpZWQiLCJjb21tb25fbXNnIiwiZm9udFdlaWdodCIsInRleHRBbGlnbiIsImlzX2xhYiIsImN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcyIsImdldENyaXRlcmlhU3RyaW5nIiwiaXNfb3BkIiwiY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMiLCJnZXREb2NDcml0ZXJpYVN0cmluZyIsImlzX2RwcCIsImlzX2Jvb2tpbmciLCJET0NUT1JTIiwiT2JqZWN0Iiwia2V5cyIsImRpc3BsYXlfbmFtZSIsImlzX2hwcCIsImhvc3BpdGFsX2RhdGEiLCJpc19wYWNrYWdlIiwicGFja2FnZXNMaXN0IiwicmVzdWx0IiwiaXNfZm9yY2UiLCJjbG9zZUlwZExlYWRQb3B1cCIsImJpbmQiLCJmb250U2l6ZSIsIkFTU0VUU19CQVNFX1VSTCIsIm1hcmdpbiIsIm9uQ2hhbmdlSGFuZGxlciIsImZvbnRTdHlsZSIsInN1Ym1pdExlYWQiLCJjb2xvciIsIlJl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Ozs7RUEvTzRCQyxnQkFBTUMsUzs7a0JBa1ByQnBFLGUiLCJmaWxlIjoiMTUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgSW5pdGlhbHNQaWN0dXJlIGZyb20gJy4uL2NvbW1vbnMvaW5pdGlhbHNQaWN0dXJlJ1xuXG5cbmNsYXNzIE5vbklwZFBvcHVwVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0cGhvbmVfbnVtYmVyOiBudWxsXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cblxuXHR9XG5cblx0b25DaGFuZ2VIYW5kbGVyKGV2ZW50KSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHBob25lX251bWJlcjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXG5cdH1cblxuXHRzdWJtaXRMZWFkKCkge1xuXHRcdGlmICh0aGlzLnN0YXRlLnBob25lX251bWJlcikge1xuXHRcdFx0aWYgKHRoaXMuc3RhdGUucGhvbmVfbnVtYmVyLmxlbmd0aCA8IDEwKSB7XG5cdFx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgRW50ZXIgVmFsaWQgcGhvbmUgbnVtYmVyXCIgfSlcblx0XHRcdFx0cmV0dXJuXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuc3RhdGUucGhvbmVfbnVtYmVyLmxlbmd0aCA+IDEwKSB7XG5cdFx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgRW50ZXIgVmFsaWQgcGhvbmUgbnVtYmVyXCIgfSlcblx0XHRcdFx0cmV0dXJuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnByb3BzLm5vbklwZExlYWRzKHRoaXMuc3RhdGUucGhvbmVfbnVtYmVyKVxuXHRcdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiWW91ciByZXF1ZXN0IGhhcyBiZWVuIHN1Ym1pdGVkXCIgfSlcblx0XHRcdFx0aWYodGhpcy5wcm9wcy5pc19vcmdhbmljKXtcblx0XHRcdFx0XHRsZXQgY2FsbEJhY2tVcmwgPSB0aGlzLnByb3BzLmhpc3RvcnkubG9jYXRpb24ucGF0aG5hbWUgKyAnL2Jvb2tpbmcnK3RoaXMucHJvcHMuaGlzdG9yeS5sb2NhdGlvbi5zZWFyY2ggKycmZG9jdG9yX2lkPScrdGhpcy5wcm9wcy5kb2N0b3JfaWQrJyZob3NwaXRhbF9pZD0nK3RoaXMucHJvcHMuaG9zcGl0YWxfaWRcblx0XHRcdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ZpcC1nb2xkLWRldGFpbHM/aXNfZ29sZD10cnVlJnNvdXJjZT1kZXNrdG9wLXN1Ym1lbnUtZ29sZC1jbGlja2VkJmxlYWRfc291cmNlPURvY3ByaW1lJmZyb21PcmdhbmljPXRydWUmY2FsbEJhY2tVcmw9JytjYWxsQmFja1VybClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIEVudGVyIHBob25lIG51bWJlclwiIH0pXG5cdFx0fVxuXHR9XG5cblx0Z2V0Q3JpdGVyaWFTdHJpbmcoc2VsZWN0ZWRDcml0ZXJpYXMpIHtcblx0XHRpZiAoc2VsZWN0ZWRDcml0ZXJpYXMgJiYgc2VsZWN0ZWRDcml0ZXJpYXMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gc2VsZWN0ZWRDcml0ZXJpYXMucmVkdWNlKChmaW5hbCwgY3VyciwgaSkgPT4ge1xuXHRcdFx0XHRpZiAoaSAhPSAwKSB7XG5cdFx0XHRcdFx0ZmluYWwgKz0gJywgJ1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZpbmFsICs9IGAke2N1cnIubmFtZX1gXG5cdFx0XHRcdHJldHVybiBmaW5hbFxuXHRcdFx0fSwgXCJcIilcblx0XHR9XG5cdH1cblxuXHRnZXREb2NDcml0ZXJpYVN0cmluZyhzZWxlY3RlZENyaXRlcmlhcykge1xuXHRcdGlmIChzZWxlY3RlZENyaXRlcmlhcyAmJiBzZWxlY3RlZENyaXRlcmlhcy5sZW5ndGgpIHtcblx0XHRcdGxldCBpc19ncm91cF9pZHNfZXhpc3QgPSBzZWxlY3RlZENyaXRlcmlhcy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gJ2dyb3VwX2lkcycpXG5cdFx0XHRsZXQgc2VsZWN0ZWREYXRhVmlldyA9IGlzX2dyb3VwX2lkc19leGlzdC5sZW5ndGggPyBpc19ncm91cF9pZHNfZXhpc3QgOiBzZWxlY3RlZENyaXRlcmlhc1xuXG5cdFx0XHRyZXR1cm4gc2VsZWN0ZWREYXRhVmlldy5yZWR1Y2UoKGZpbmFsLCBjdXJyLCBpKSA9PiB7XG5cdFx0XHRcdGlmIChpICE9IDApIHtcblx0XHRcdFx0XHRmaW5hbCArPSAnLCAnXG5cdFx0XHRcdH1cblx0XHRcdFx0ZmluYWwgKz0gYCR7Y3Vyci5uYW1lfWBcblx0XHRcdFx0cmV0dXJuIGZpbmFsXG5cdFx0XHR9LCBcIlwiKVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRsZXQgY3JpdGVyaWFTdHIgPSAnSGVhbHRoIFBhY2thZ2VzJ1xuXHRcdHZhciB0aHVtYm5haWwgPSBudWxsO1xuXHRcdGxldCBpc19saWNlbnNlX3ZlcmlmaWVkID0gZmFsc2U7XG5cblx0XHRsZXQgY29tbW9uX21zZyA9IDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyAsdGV4dEFsaWduOidjZW50ZXInfX0gY2xhc3NOYW1lPVwiY2FuY2VsLWFwcG9pbnRtZW50LWhlYWRcIj5Cb29rXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LWNhcGl0YWxpemVcIj4ge2NyaXRlcmlhU3RyfTwvc3Bhbj4gPGJyIC8+XG5cdFx0XHRhdCB0aGUgTG93ZXN0IFByaWNlcyFcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRpZiAodGhpcy5wcm9wcy5pc19sYWIpIHtcblx0XHRcdGlmICh0aGlzLnByb3BzLmN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcyAmJiB0aGlzLnByb3BzLmN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGNyaXRlcmlhU3RyID0gdGhpcy5nZXRDcml0ZXJpYVN0cmluZyh0aGlzLnByb3BzLmN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcylcblx0XHRcdH1cblx0XHRcdGNvbW1vbl9tc2cgPSA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcsdGV4dEFsaWduOidjZW50ZXInIH19IGNsYXNzTmFtZT1cImNhbmNlbC1hcHBvaW50bWVudC1oZWFkXCI+Qm9va1xuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtY2FwaXRhbGl6ZVwiPiB7Y3JpdGVyaWFTdHJ9PC9zcGFuPiA8YnIgLz5cblx0XHRcdFx0YXQgdGhlIExvd2VzdCBQcmljZXMhXG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0Ly8gZWxzZSBpZih0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRDcml0ZXJpYXMubGVuZ3RoPjApe1xuXHRcdFx0Ly8gXHRjcml0ZXJpYVN0ciA9IHRoaXMuZ2V0Q3JpdGVyaWFTdHJpbmcodGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhcylcblx0XHRcdC8vIH1cblx0XHR9IGVsc2UgaWYgKHRoaXMucHJvcHMuaXNfb3BkKSB7XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcyAmJiB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Y3JpdGVyaWFTdHIgPSB0aGlzLmdldERvY0NyaXRlcmlhU3RyaW5nKHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMpXG5cdFx0XHR9XG5cdFx0XHRjb21tb25fbXNnID0gPHAgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnLHRleHRBbGlnbjonY2VudGVyJyB9fSBjbGFzc05hbWU9XCJjYW5jZWwtYXBwb2ludG1lbnQtaGVhZFwiPkJvb2sgQXBwb2ludG1lbnQgd2l0aCA8YnIgLz5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtY2FwaXRhbGl6ZVwiPiB7Y3JpdGVyaWFTdHJ9PC9zcGFuPlxuXHRcdFx0PC9wPlxuXHRcdH0gZWxzZSBpZiAodGhpcy5wcm9wcy5pc19kcHAgfHwgdGhpcy5wcm9wcy5pc19ib29raW5nIHx8IHRoaXMucHJvcHMuaXNfb3JnYW5pYykge1xuXHRcdFx0aWYgKHRoaXMucHJvcHMgJiYgdGhpcy5wcm9wcy5ET0NUT1JTICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuRE9DVE9SUykubGVuZ3RoICYmIHRoaXMucHJvcHMuZG9jdG9yX2lkKSB7XG5cdFx0XHRcdGNyaXRlcmlhU3RyID0gdGhpcy5wcm9wcy5ET0NUT1JTW3RoaXMucHJvcHMuZG9jdG9yX2lkXS5kaXNwbGF5X25hbWVcblx0XHRcdFx0dGh1bWJuYWlsID0gdGhpcy5wcm9wcy5ET0NUT1JTW3RoaXMucHJvcHMuZG9jdG9yX2lkXS50aHVtYm5haWxcblx0XHRcdFx0aXNfbGljZW5zZV92ZXJpZmllZCA9IHRoaXMucHJvcHMuRE9DVE9SU1t0aGlzLnByb3BzLmRvY3Rvcl9pZF0uaXNfbGljZW5zZV92ZXJpZmllZFxuXHRcdFx0fVxuXHRcdFx0Y29tbW9uX21zZyA9IDxkaXYgY2xhc3NOYW1lPVwiZG9jSW1nLVBvcHVwXCI+XG5cdFx0XHRcdHsvKlx0PGRpdiBjbGFzc05hbWU9XCJmbHRyLWNyZC1pbWcgdGV4dC1jZW50ZXIgZG9jLWltZy1wb3B1cFNlY3Rpb25cIj5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e3RodW1ibmFpbH0gYWx0PVwiXCIgLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmbHRyLXJ0bmdcIj5WZXJpZmllZDwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+Ki99XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aHVtYm5haWwgP1xuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkb2MtaW1nLXBvcHVwU2VjdGlvblwiPlxuXHRcdFx0XHRcdFx0XHQ8SW5pdGlhbHNQaWN0dXJlIG5hbWU9e2NyaXRlcmlhU3RyfSBoYXNfaW1hZ2U9eyEhdGh1bWJuYWlsfSBjbGFzc05hbWU9XCJpbml0aWFsc1BpY3R1cmUtZHAgXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e3RodW1ibmFpbH0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZy1yb3VuZFwiIGFsdD17YCR7Y3JpdGVyaWFTdHJ9YH0gdGl0bGU9e2NyaXRlcmlhU3RyfSAvPlxuXHRcdFx0XHRcdFx0XHQ8L0luaXRpYWxzUGljdHVyZT5cblx0XHRcdFx0XHRcdFx0e2lzX2xpY2Vuc2VfdmVyaWZpZWQgPyA8c3BhbiBjbGFzc05hbWU9XCJmbHRyLXJ0bmdcIj5WZXJpZmllZDwvc3Bhbj4gOiAnJ31cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0OiAnJ31cdFx0XHRcdFx0XHRcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuaXNfb3JnYW5pYz88cCBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0gY2xhc3NOYW1lPVwiY2FuY2VsLWFwcG9pbnRtZW50LWhlYWRcIj5cblx0XHRcdFx0XHRcdEJvb2sgQXBwb2ludG1lbnQgd2l0aFxuXHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHR7Y3JpdGVyaWFTdHJ9XG5cdFx0XHRcdFx0XHR7LyogPHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtY2FwaXRhbGl6ZVwiPiBJbmRpYeKAmXMgQmVzdCBIZWFsdGhjYXJlIE1lbWJlcnNoaXA8L3NwYW4+ICovfVxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ6PHAgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19IGNsYXNzTmFtZT1cImNhbmNlbC1hcHBvaW50bWVudC1oZWFkXCI+Qm9vayBBcHBvaW50bWVudCB3aXRoIDxiciAvPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtY2FwaXRhbGl6ZVwiPiB7Y3JpdGVyaWFTdHJ9PC9zcGFuPlxuXHRcdFx0XHRcdDwvcD5cblxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHR9IGVsc2UgaWYgKHRoaXMucHJvcHMuaXNfaHBwKSB7XG5cdFx0XHRsZXQgeyBob3NwaXRhbF9kYXRhIH0gPSB0aGlzLnByb3BzXG5cdFx0XHRpZiAoaG9zcGl0YWxfZGF0YSkge1xuXHRcdFx0XHRjcml0ZXJpYVN0ciA9IGhvc3BpdGFsX2RhdGEubmFtZVxuXHRcdFx0fVxuXHRcdFx0Y29tbW9uX21zZyA9IDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyx0ZXh0QWxpZ246J2NlbnRlcicgfX0gY2xhc3NOYW1lPVwiY2FuY2VsLWFwcG9pbnRtZW50LWhlYWRcIj5Cb29rIEFwcG9pbnRtZW50IGF0IDxiciAvPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1jYXBpdGFsaXplXCI+IHtjcml0ZXJpYVN0cn08L3NwYW4+XG5cdFx0XHQ8L3A+XG5cdFx0fWVsc2UgaWYodGhpcy5wcm9wcy5pc19wYWNrYWdlKXtcblx0XHRcdGlmKHRoaXMucHJvcHMucGFja2FnZXNMaXN0ICYmIHRoaXMucHJvcHMucGFja2FnZXNMaXN0LnJlc3VsdCAmJiB0aGlzLnByb3BzLnBhY2thZ2VzTGlzdC5yZXN1bHQubGVuZ3RoID09IDEpe1xuXHRcdFx0XHRjcml0ZXJpYVN0ciA9IHRoaXMucHJvcHMucGFja2FnZXNMaXN0LnJlc3VsdFswXS5uYW1lXG5cdCAgICAgICAgfVxuXHQgICAgICAgIGNvbW1vbl9tc2cgPSA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgLHRleHRBbGlnbjonY2VudGVyJ319IGNsYXNzTmFtZT1cImNhbmNlbC1hcHBvaW50bWVudC1oZWFkXCI+Qm9va1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1jYXBpdGFsaXplXCI+IHtjcml0ZXJpYVN0cn08L3NwYW4+IDxiciAvPiBhdCB0aGUgTG93ZXN0IFByaWNlcyFcblx0XHRcdFx0XHRcdDwvcD5cblx0XHR9XG5cdFx0cmV0dXJuIChcblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib29raW5nLWhlbHAtbW9kYWxcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYW5jZWwtb3ZlcmxheVwiPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBjYW5jZWwtYXBwb2ludG1lbnQtZGl2IGNhbmNlbC1wb3B1cFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWhlYWRlciB0ZXh0LWNlbnRlciBhY3Rpb24tc2NyZWVuLWhlYWRlclwiPlxuXHRcdFx0XHRcdFx0e2NvbW1vbl9tc2d9XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaXNfZm9yY2UgPT0gMSAgLyp8fCB0aGlzLnByb3BzLmlzX29yZ2FuaWMqLz9cblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xvc2VJcGRMZWFkUG9wdXAuYmluZCh0aGlzLCB0cnVlKX0gY2xhc3NOYW1lPVwiY2xvc2UtdGltZXMtaWNvblwiPiZ0aW1lczs8L2E+XG5cdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaXNfb3JnYW5pYz9cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ29sZC13ZGd0LXRleHQtc3RyaXBcIj5cblx0XHRcdFx0XHRcdFx0PHA+U2F2ZSA2MDAwKy95ciBieSBhdmFpbGluZyBleGNsdXNpdmUgYmVuZWZpdHMgd2l0aCBEb2NwcmltZSBHb2xkIDwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0OicnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIHBkLTEwXCI+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaXNfb3BkIHx8IHRoaXMucHJvcHMuaXNfZHBwIHx8IHRoaXMucHJvcHMuaXNfaHBwIHx8IHRoaXMucHJvcHMuaXNfYm9va2luZz9cblx0XHRcdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy01MDAgZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyIG1iLTJcIiBzdHlsZT17eyBmb250U2l6ZTogMTQgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiaXBkLXBvcC10aWNrXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltYWdlcy90aWNrLnBuZyd9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPlNhdmUgdXAgdG8gNTAlIG9uIEZlZXM8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy01MDAgZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyIG1iLTJcIiBzdHlsZT17eyBmb250U2l6ZTogMTQgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiaXBkLXBvcC10aWNrXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltYWdlcy90aWNrLnBuZyd9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPkluc3RhbnQgQ29uZmlybWF0aW9uIGZvciBGcmVlPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwIGQtZmxleCBhbGlnbi1pdGVtLWNlbnRlciBtYi0yXCIgc3R5bGU9e3sgZm9udFNpemU6IDE0IH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImlwZC1wb3AtdGlja1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWFnZXMvdGljay5wbmcnfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5WaWV3IERvY3RvciBBdmFpbGFiaWxpdHk8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHR7LyogPHAgY2xhc3NOYW1lPVwiZnctNTAwIGQtZmxleCBhbGlnbi1pdGVtLWNlbnRlciBtYi0yXCIgc3R5bGU9e3sgZm9udFNpemU6IDE0IH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImlwZC1wb3AtdGlja1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWFnZXMvdGljay5wbmcnfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5GcmVlIENhbmNlbGxhdGlvbjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvcD4gKi99XG5cdFx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHQ6dGhpcy5wcm9wcy5pc19vcmdhbmljP1xuXHRcdFx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBkLWZsZXggYWxpZ24taXRlbS1jZW50ZXIgbWItMlwiIHN0eWxlPXt7IGZvbnRTaXplOiAxNCB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJpcGQtcG9wLXRpY2tcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1hZ2VzL3RpY2sucG5nJ30gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+U3BlY2lhbCBQcmljZXMgb24gRG9jdG9yIGFuZCBMYWIgVGVzdHM8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy01MDAgZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyIG1iLTJcIiBzdHlsZT17eyBmb250U2l6ZTogMTQgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiaXBkLXBvcC10aWNrXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltYWdlcy90aWNrLnBuZyd9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPjIzJSBPRkYgb24gTWVkaWNpbmVzPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwIGQtZmxleCBhbGlnbi1pdGVtLWNlbnRlciBtYi0yXCIgc3R5bGU9e3sgZm9udFNpemU6IDE0IH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImlwZC1wb3AtdGlja1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWFnZXMvdGljay5wbmcnfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5Db3ZlcnMgRnVsbCBGYW1pbHkgb2YgNiBNZW1iZXJzPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0OiA8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy01MDAgZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyIG1iLTJcIiBzdHlsZT17eyBmb250U2l6ZTogMTQgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiaXBkLXBvcC10aWNrXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltYWdlcy90aWNrLnBuZyd9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPkZyZWUgIExhYiBSZXBvcnQgUmV2aWV3IGZyb20gRG9jdG9yczwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBkLWZsZXggYWxpZ24taXRlbS1jZW50ZXIgbWItMlwiIHN0eWxlPXt7IGZvbnRTaXplOiAxNCB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJpcGQtcG9wLXRpY2tcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1hZ2VzL3RpY2sucG5nJ30gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+TG93ZXN0IFByaWNlIEd1YXJhbnRlZTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBkLWZsZXggYWxpZ24taXRlbS1jZW50ZXIgbWItMlwiIHN0eWxlPXt7IGZvbnRTaXplOiAxNCB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJpcGQtcG9wLXRpY2tcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1hZ2VzL3RpY2sucG5nJ30gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+RnJlZSBIb21lIFNhbXBsZSBDb2xsZWN0aW9uPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPjwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIHBkLTEwIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW0tY2VudGVyIGZsZXgtY29sdW1uXCIgc3R5bGU9e3sgbWFyZ2luOiBcIjBweCAwcHggNnB4XCIgfX0+XG5cdFx0XHRcdFx0XHQ8Zm9ybSBjbGFzc05hbWU9XCJjb2wtc20tMTIgcGQtMFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxhYmVsV3JhcCBtYi0wXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cImZzLTEyXCIgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiUGxlYXNlIGVudGVyIHlvdXIgbW9iaWxlIG51bWJlciB0byBjb250aW51ZVwiIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpfSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBjb2wtc20tMTIgcC0wIG1yLXQtNVwiIHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgZm9udFN0eWxlOiAnaXRhbGljJyB9fT4qWW91ciBib29raW5nIGRldGFpbHMgd2lsbCBiZSBzZW50IHRvIHRoaXMgbnVtYmVyPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50LWJ0biB0ZXh0LWNlbnRlciBtLTAgcGQtMTAgcHQtMFwiPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC13aGl0ZSBwb3Atc3ViVGV4dFwiIG9uQ2xpY2s9e3RoaXMuc3VibWl0TGVhZC5iaW5kKHRoaXMpfT48cCBjbGFzc05hbWU9XCJmdy01MDBcIj57YCR7dGhpcy5wcm9wcy5pc19vcmdhbmljPydCb29rIEFwcG9pbnRtZW50IGF0IERpc2NvdW50ZWQgUHJpY2UnOidCb29rIEFwcG9pbnRtZW50J31gfTwvcD5cblx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuaXNfb3JnYW5pYz8nJzo8c3BhbiA+Tm8gU2VydmljZSBGZWU8L3NwYW4+fVxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3BVcC13aHRzYXBwRW5hYmxlXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndodHNhcHBFbmFibGUtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInd0c2FwcC1jaGstdHh0XCI+PGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL3RpY2suc3ZnJ30vPiBFbmFibGUgV2hhdHNhcHAgZm9yIHNlYW1sZXNzIGNvbW11bmljYXRpb248L3A+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZ3LTUwMFwiIHN0eWxlPXt7IGZvbnRTaXplOiA5LCBjb2xvcjogJyM4YThhOGEnIH19ID5CeSBwcm9jZWVkaW5nLCB5b3UgaGVyZWJ5IGFncmVlIHRvIHRoZSA8YSBocmVmPVwiL3Rlcm1zXCIgdGFyZ2V0PVwiX2JsYW5rXCIgc3R5bGU9e3sgY29sb3I6IGB2YXIoLS10ZXh0LS1wcmltYXJ5LS1jb2xvcilgIH19ID5FbmQgVXNlciBBZ3JlZW1lbnQ8L2E+IGFuZCA8YSBocmVmPVwiL3ByaXZhY3lcIiB0YXJnZXQ9XCJfYmxhbmtcIiBzdHlsZT17eyBjb2xvcjogYHZhcigtLXRleHQtLXByaW1hcnktLWNvbG9yKWAgfX0gPlByaXZhY3kgUG9saWN5LjwvYT48L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9uSXBkUG9wdXBWaWV3Il0sInNvdXJjZVJvb3QiOiIifQ==