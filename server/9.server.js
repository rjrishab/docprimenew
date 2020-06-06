exports.ids = [9];
exports.modules = {

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _initialsPicture = __webpack_require__(/*! ../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class NonIpdPopupView extends _react2.default.Component {

	constructor(props) {
		super(props);
		this.state = {
			phone_number: null
		};
	}

	componentDidMount() {}

	onChangeHandler(event) {
		this.setState({ phone_number: event.target.value });
	}

	submitLead() {
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
					let callBackUrl = this.props.history.location.pathname + '/booking' + this.props.history.location.search + '&doctor_id=' + this.props.doctor_id + '&hospital_id=' + this.props.hospital_id;
					this.props.history.push('/vip-gold-details?is_gold=true&source=desktop-submenu-gold-clicked&lead_source=Docprime&fromOrganic=true&callBackUrl=' + callBackUrl);
				}
			}
		} else {
			_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter phone number" });
		}
	}

	getCriteriaString(selectedCriterias) {
		if (selectedCriterias && selectedCriterias.length) {
			return selectedCriterias.reduce((final, curr, i) => {
				if (i != 0) {
					final += ', ';
				}
				final += `${curr.name}`;
				return final;
			}, "");
		}
	}

	getDocCriteriaString(selectedCriterias) {
		if (selectedCriterias && selectedCriterias.length) {
			let is_group_ids_exist = selectedCriterias.filter(x => x.type == 'group_ids');
			let selectedDataView = is_group_ids_exist.length ? is_group_ids_exist : selectedCriterias;

			return selectedDataView.reduce((final, curr, i) => {
				if (i != 0) {
					final += ', ';
				}
				final += `${curr.name}`;
				return final;
			}, "");
		}
	}

	render() {
		let criteriaStr = 'Health Packages';
		var thumbnail = null;
		let is_license_verified = false;

		let common_msg = _react2.default.createElement(
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
						_react2.default.createElement('img', { src: thumbnail, className: 'img-fluid img-round', alt: `${criteriaStr}`, title: criteriaStr })
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
			let { hospital_data } = this.props;
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
							`${this.props.is_organic ? 'Book Appointment at Discounted Price' : 'Book Appointment'}`
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
				)
			)
		);
	}
}

exports.default = NonIpdPopupView;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL25vbklwZFBvcHVwLmpzIl0sIm5hbWVzIjpbIk5vbklwZFBvcHVwVmlldyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwicGhvbmVfbnVtYmVyIiwiY29tcG9uZW50RGlkTW91bnQiLCJvbkNoYW5nZUhhbmRsZXIiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJzdWJtaXRMZWFkIiwibGVuZ3RoIiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwidGV4dCIsIm5vbklwZExlYWRzIiwiaXNfb3JnYW5pYyIsImNhbGxCYWNrVXJsIiwiaGlzdG9yeSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzZWFyY2giLCJkb2N0b3JfaWQiLCJob3NwaXRhbF9pZCIsInB1c2giLCJnZXRDcml0ZXJpYVN0cmluZyIsInNlbGVjdGVkQ3JpdGVyaWFzIiwicmVkdWNlIiwiZmluYWwiLCJjdXJyIiwiaSIsIm5hbWUiLCJnZXREb2NDcml0ZXJpYVN0cmluZyIsImlzX2dyb3VwX2lkc19leGlzdCIsImZpbHRlciIsIngiLCJ0eXBlIiwic2VsZWN0ZWREYXRhVmlldyIsInJlbmRlciIsImNyaXRlcmlhU3RyIiwidGh1bWJuYWlsIiwiaXNfbGljZW5zZV92ZXJpZmllZCIsImNvbW1vbl9tc2ciLCJmb250V2VpZ2h0IiwidGV4dEFsaWduIiwiaXNfbGFiIiwiY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzIiwiaXNfb3BkIiwiY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMiLCJpc19kcHAiLCJpc19ib29raW5nIiwiRE9DVE9SUyIsIk9iamVjdCIsImtleXMiLCJkaXNwbGF5X25hbWUiLCJpc19ocHAiLCJob3NwaXRhbF9kYXRhIiwiaXNfcGFja2FnZSIsInBhY2thZ2VzTGlzdCIsInJlc3VsdCIsImlzX2ZvcmNlIiwiY2xvc2VJcGRMZWFkUG9wdXAiLCJiaW5k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QUE7QUFBa087QUFBQTtBQUFBLFVBQUcsTUFBSyxVQUFSLEVBQW1CLFFBQU8sUUFBMUIsRUFBbUMsT0FBTyxFQUFFQSxPQUFRLDZCQUFWLEVBQTFDO0FBQUE7QUFBQTtBQUFsTztBQUZEO0FBREQ7QUFsRkQ7QUFGRCxHQUZEO0FBK0ZBO0FBL080Qzs7a0JBa1AvQnZFLGUiLCJmaWxlIjoiOS5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBJbml0aWFsc1BpY3R1cmUgZnJvbSAnLi4vY29tbW9ucy9pbml0aWFsc1BpY3R1cmUnXG5cblxuY2xhc3MgTm9uSXBkUG9wdXBWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRwaG9uZV9udW1iZXI6IG51bGxcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblxuXG5cdH1cblxuXHRvbkNoYW5nZUhhbmRsZXIoZXZlbnQpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgcGhvbmVfbnVtYmVyOiBldmVudC50YXJnZXQudmFsdWUgfSlcblx0fVxuXG5cdHN1Ym1pdExlYWQoKSB7XG5cdFx0aWYgKHRoaXMuc3RhdGUucGhvbmVfbnVtYmVyKSB7XG5cdFx0XHRpZiAodGhpcy5zdGF0ZS5waG9uZV9udW1iZXIubGVuZ3RoIDwgMTApIHtcblx0XHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBFbnRlciBWYWxpZCBwaG9uZSBudW1iZXJcIiB9KVxuXHRcdFx0XHRyZXR1cm5cblx0XHRcdH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5waG9uZV9udW1iZXIubGVuZ3RoID4gMTApIHtcblx0XHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBFbnRlciBWYWxpZCBwaG9uZSBudW1iZXJcIiB9KVxuXHRcdFx0XHRyZXR1cm5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucHJvcHMubm9uSXBkTGVhZHModGhpcy5zdGF0ZS5waG9uZV9udW1iZXIpXG5cdFx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJZb3VyIHJlcXVlc3QgaGFzIGJlZW4gc3VibWl0ZWRcIiB9KVxuXHRcdFx0XHRpZih0aGlzLnByb3BzLmlzX29yZ2FuaWMpe1xuXHRcdFx0XHRcdGxldCBjYWxsQmFja1VybCA9IHRoaXMucHJvcHMuaGlzdG9yeS5sb2NhdGlvbi5wYXRobmFtZSArICcvYm9va2luZycrdGhpcy5wcm9wcy5oaXN0b3J5LmxvY2F0aW9uLnNlYXJjaCArJyZkb2N0b3JfaWQ9Jyt0aGlzLnByb3BzLmRvY3Rvcl9pZCsnJmhvc3BpdGFsX2lkPScrdGhpcy5wcm9wcy5ob3NwaXRhbF9pZFxuXHRcdFx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdmlwLWdvbGQtZGV0YWlscz9pc19nb2xkPXRydWUmc291cmNlPWRlc2t0b3Atc3VibWVudS1nb2xkLWNsaWNrZWQmbGVhZF9zb3VyY2U9RG9jcHJpbWUmZnJvbU9yZ2FuaWM9dHJ1ZSZjYWxsQmFja1VybD0nK2NhbGxCYWNrVXJsKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgRW50ZXIgcGhvbmUgbnVtYmVyXCIgfSlcblx0XHR9XG5cdH1cblxuXHRnZXRDcml0ZXJpYVN0cmluZyhzZWxlY3RlZENyaXRlcmlhcykge1xuXHRcdGlmIChzZWxlY3RlZENyaXRlcmlhcyAmJiBzZWxlY3RlZENyaXRlcmlhcy5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBzZWxlY3RlZENyaXRlcmlhcy5yZWR1Y2UoKGZpbmFsLCBjdXJyLCBpKSA9PiB7XG5cdFx0XHRcdGlmIChpICE9IDApIHtcblx0XHRcdFx0XHRmaW5hbCArPSAnLCAnXG5cdFx0XHRcdH1cblx0XHRcdFx0ZmluYWwgKz0gYCR7Y3Vyci5uYW1lfWBcblx0XHRcdFx0cmV0dXJuIGZpbmFsXG5cdFx0XHR9LCBcIlwiKVxuXHRcdH1cblx0fVxuXG5cdGdldERvY0NyaXRlcmlhU3RyaW5nKHNlbGVjdGVkQ3JpdGVyaWFzKSB7XG5cdFx0aWYgKHNlbGVjdGVkQ3JpdGVyaWFzICYmIHNlbGVjdGVkQ3JpdGVyaWFzLmxlbmd0aCkge1xuXHRcdFx0bGV0IGlzX2dyb3VwX2lkc19leGlzdCA9IHNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnZ3JvdXBfaWRzJylcblx0XHRcdGxldCBzZWxlY3RlZERhdGFWaWV3ID0gaXNfZ3JvdXBfaWRzX2V4aXN0Lmxlbmd0aCA/IGlzX2dyb3VwX2lkc19leGlzdCA6IHNlbGVjdGVkQ3JpdGVyaWFzXG5cblx0XHRcdHJldHVybiBzZWxlY3RlZERhdGFWaWV3LnJlZHVjZSgoZmluYWwsIGN1cnIsIGkpID0+IHtcblx0XHRcdFx0aWYgKGkgIT0gMCkge1xuXHRcdFx0XHRcdGZpbmFsICs9ICcsICdcblx0XHRcdFx0fVxuXHRcdFx0XHRmaW5hbCArPSBgJHtjdXJyLm5hbWV9YFxuXHRcdFx0XHRyZXR1cm4gZmluYWxcblx0XHRcdH0sIFwiXCIpXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGxldCBjcml0ZXJpYVN0ciA9ICdIZWFsdGggUGFja2FnZXMnXG5cdFx0dmFyIHRodW1ibmFpbCA9IG51bGw7XG5cdFx0bGV0IGlzX2xpY2Vuc2VfdmVyaWZpZWQgPSBmYWxzZTtcblxuXHRcdGxldCBjb21tb25fbXNnID0gPHAgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnICx0ZXh0QWxpZ246J2NlbnRlcid9fSBjbGFzc05hbWU9XCJjYW5jZWwtYXBwb2ludG1lbnQtaGVhZFwiPkJvb2tcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtY2FwaXRhbGl6ZVwiPiB7Y3JpdGVyaWFTdHJ9PC9zcGFuPiA8YnIgLz5cblx0XHRcdGF0IHRoZSBMb3dlc3QgUHJpY2VzIVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdGlmICh0aGlzLnByb3BzLmlzX2xhYikge1xuXHRcdFx0aWYgKHRoaXMucHJvcHMuY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzICYmIHRoaXMucHJvcHMuY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Y3JpdGVyaWFTdHIgPSB0aGlzLmdldENyaXRlcmlhU3RyaW5nKHRoaXMucHJvcHMuY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzKVxuXHRcdFx0fVxuXHRcdFx0Y29tbW9uX21zZyA9IDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyx0ZXh0QWxpZ246J2NlbnRlcicgfX0gY2xhc3NOYW1lPVwiY2FuY2VsLWFwcG9pbnRtZW50LWhlYWRcIj5Cb29rXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1jYXBpdGFsaXplXCI+IHtjcml0ZXJpYVN0cn08L3NwYW4+IDxiciAvPlxuXHRcdFx0XHRhdCB0aGUgTG93ZXN0IFByaWNlcyFcblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHQvLyBlbHNlIGlmKHRoaXMucHJvcHMuc2VsZWN0ZWRDcml0ZXJpYXMgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhcy5sZW5ndGg+MCl7XG5cdFx0XHQvLyBcdGNyaXRlcmlhU3RyID0gdGhpcy5nZXRDcml0ZXJpYVN0cmluZyh0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzKVxuXHRcdFx0Ly8gfVxuXHRcdH0gZWxzZSBpZiAodGhpcy5wcm9wcy5pc19vcGQpIHtcblx0XHRcdGlmICh0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzICYmIHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRjcml0ZXJpYVN0ciA9IHRoaXMuZ2V0RG9jQ3JpdGVyaWFTdHJpbmcodGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcylcblx0XHRcdH1cblx0XHRcdGNvbW1vbl9tc2cgPSA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcsdGV4dEFsaWduOidjZW50ZXInIH19IGNsYXNzTmFtZT1cImNhbmNlbC1hcHBvaW50bWVudC1oZWFkXCI+Qm9vayBBcHBvaW50bWVudCB3aXRoIDxiciAvPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1jYXBpdGFsaXplXCI+IHtjcml0ZXJpYVN0cn08L3NwYW4+XG5cdFx0XHQ8L3A+XG5cdFx0fSBlbHNlIGlmICh0aGlzLnByb3BzLmlzX2RwcCB8fCB0aGlzLnByb3BzLmlzX2Jvb2tpbmcgfHwgdGhpcy5wcm9wcy5pc19vcmdhbmljKSB7XG5cdFx0XHRpZiAodGhpcy5wcm9wcyAmJiB0aGlzLnByb3BzLkRPQ1RPUlMgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5ET0NUT1JTKS5sZW5ndGggJiYgdGhpcy5wcm9wcy5kb2N0b3JfaWQpIHtcblx0XHRcdFx0Y3JpdGVyaWFTdHIgPSB0aGlzLnByb3BzLkRPQ1RPUlNbdGhpcy5wcm9wcy5kb2N0b3JfaWRdLmRpc3BsYXlfbmFtZVxuXHRcdFx0XHR0aHVtYm5haWwgPSB0aGlzLnByb3BzLkRPQ1RPUlNbdGhpcy5wcm9wcy5kb2N0b3JfaWRdLnRodW1ibmFpbFxuXHRcdFx0XHRpc19saWNlbnNlX3ZlcmlmaWVkID0gdGhpcy5wcm9wcy5ET0NUT1JTW3RoaXMucHJvcHMuZG9jdG9yX2lkXS5pc19saWNlbnNlX3ZlcmlmaWVkXG5cdFx0XHR9XG5cdFx0XHRjb21tb25fbXNnID0gPGRpdiBjbGFzc05hbWU9XCJkb2NJbWctUG9wdXBcIj5cblx0XHRcdFx0ey8qXHQ8ZGl2IGNsYXNzTmFtZT1cImZsdHItY3JkLWltZyB0ZXh0LWNlbnRlciBkb2MtaW1nLXBvcHVwU2VjdGlvblwiPlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz17dGh1bWJuYWlsfSBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZsdHItcnRuZ1wiPlZlcmlmaWVkPC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj4qL31cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRodW1ibmFpbCA/XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvYy1pbWctcG9wdXBTZWN0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdDxJbml0aWFsc1BpY3R1cmUgbmFtZT17Y3JpdGVyaWFTdHJ9IGhhc19pbWFnZT17ISF0aHVtYm5haWx9IGNsYXNzTmFtZT1cImluaXRpYWxzUGljdHVyZS1kcCBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17dGh1bWJuYWlsfSBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nLXJvdW5kXCIgYWx0PXtgJHtjcml0ZXJpYVN0cn1gfSB0aXRsZT17Y3JpdGVyaWFTdHJ9IC8+XG5cdFx0XHRcdFx0XHRcdDwvSW5pdGlhbHNQaWN0dXJlPlxuXHRcdFx0XHRcdFx0XHR7aXNfbGljZW5zZV92ZXJpZmllZCA/IDxzcGFuIGNsYXNzTmFtZT1cImZsdHItcnRuZ1wiPlZlcmlmaWVkPC9zcGFuPiA6ICcnfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ6ICcnfVx0XHRcdFx0XHRcdFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5pc19vcmdhbmljPzxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fSBjbGFzc05hbWU9XCJjYW5jZWwtYXBwb2ludG1lbnQtaGVhZFwiPlxuXHRcdFx0XHRcdFx0Qm9vayBBcHBvaW50bWVudCB3aXRoXG5cdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdHtjcml0ZXJpYVN0cn1cblx0XHRcdFx0XHRcdHsvKiA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1jYXBpdGFsaXplXCI+IEluZGlh4oCZcyBCZXN0IEhlYWx0aGNhcmUgTWVtYmVyc2hpcDwvc3Bhbj4gKi99XG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDo8cCBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0gY2xhc3NOYW1lPVwiY2FuY2VsLWFwcG9pbnRtZW50LWhlYWRcIj5Cb29rIEFwcG9pbnRtZW50IHdpdGggPGJyIC8+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1jYXBpdGFsaXplXCI+IHtjcml0ZXJpYVN0cn08L3NwYW4+XG5cdFx0XHRcdFx0PC9wPlxuXG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdH0gZWxzZSBpZiAodGhpcy5wcm9wcy5pc19ocHApIHtcblx0XHRcdGxldCB7IGhvc3BpdGFsX2RhdGEgfSA9IHRoaXMucHJvcHNcblx0XHRcdGlmIChob3NwaXRhbF9kYXRhKSB7XG5cdFx0XHRcdGNyaXRlcmlhU3RyID0gaG9zcGl0YWxfZGF0YS5uYW1lXG5cdFx0XHR9XG5cdFx0XHRjb21tb25fbXNnID0gPHAgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnLHRleHRBbGlnbjonY2VudGVyJyB9fSBjbGFzc05hbWU9XCJjYW5jZWwtYXBwb2ludG1lbnQtaGVhZFwiPkJvb2sgQXBwb2ludG1lbnQgYXQgPGJyIC8+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LWNhcGl0YWxpemVcIj4ge2NyaXRlcmlhU3RyfTwvc3Bhbj5cblx0XHRcdDwvcD5cblx0XHR9ZWxzZSBpZih0aGlzLnByb3BzLmlzX3BhY2thZ2Upe1xuXHRcdFx0aWYodGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QgJiYgdGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QucmVzdWx0ICYmIHRoaXMucHJvcHMucGFja2FnZXNMaXN0LnJlc3VsdC5sZW5ndGggPT0gMSl7XG5cdFx0XHRcdGNyaXRlcmlhU3RyID0gdGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QucmVzdWx0WzBdLm5hbWVcblx0ICAgICAgICB9XG5cdCAgICAgICAgY29tbW9uX21zZyA9IDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyAsdGV4dEFsaWduOidjZW50ZXInfX0gY2xhc3NOYW1lPVwiY2FuY2VsLWFwcG9pbnRtZW50LWhlYWRcIj5Cb29rXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LWNhcGl0YWxpemVcIj4ge2NyaXRlcmlhU3RyfTwvc3Bhbj4gPGJyIC8+IGF0IHRoZSBMb3dlc3QgUHJpY2VzIVxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdH1cblx0XHRyZXR1cm4gKFxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmctaGVscC1tb2RhbFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbC1vdmVybGF5XCI+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IGNhbmNlbC1hcHBvaW50bWVudC1kaXYgY2FuY2VsLXBvcHVwXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIHRleHQtY2VudGVyIGFjdGlvbi1zY3JlZW4taGVhZGVyXCI+XG5cdFx0XHRcdFx0XHR7Y29tbW9uX21zZ31cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5pc19mb3JjZSA9PSAxICAvKnx8IHRoaXMucHJvcHMuaXNfb3JnYW5pYyovP1xuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5wcm9wcy5jbG9zZUlwZExlYWRQb3B1cC5iaW5kKHRoaXMsIHRydWUpfSBjbGFzc05hbWU9XCJjbG9zZS10aW1lcy1pY29uXCI+JnRpbWVzOzwvYT5cblx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5pc19vcmdhbmljP1xuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnb2xkLXdkZ3QtdGV4dC1zdHJpcFwiPlxuXHRcdFx0XHRcdFx0XHQ8cD5TYXZlIDYwMDArL3lyIGJ5IGF2YWlsaW5nIGV4Y2x1c2l2ZSBiZW5lZml0cyB3aXRoIERvY3ByaW1lIEdvbGQgPC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ6Jydcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTIgcGQtMTBcIj5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5pc19vcGQgfHwgdGhpcy5wcm9wcy5pc19kcHAgfHwgdGhpcy5wcm9wcy5pc19ocHAgfHwgdGhpcy5wcm9wcy5pc19ib29raW5nP1xuXHRcdFx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBkLWZsZXggYWxpZ24taXRlbS1jZW50ZXIgbWItMlwiIHN0eWxlPXt7IGZvbnRTaXplOiAxNCB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJpcGQtcG9wLXRpY2tcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1hZ2VzL3RpY2sucG5nJ30gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+U2F2ZSB1cCB0byA1MCUgb24gRmVlczwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBkLWZsZXggYWxpZ24taXRlbS1jZW50ZXIgbWItMlwiIHN0eWxlPXt7IGZvbnRTaXplOiAxNCB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJpcGQtcG9wLXRpY2tcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1hZ2VzL3RpY2sucG5nJ30gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+SW5zdGFudCBDb25maXJtYXRpb24gZm9yIEZyZWU8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy01MDAgZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyIG1iLTJcIiBzdHlsZT17eyBmb250U2l6ZTogMTQgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiaXBkLXBvcC10aWNrXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltYWdlcy90aWNrLnBuZyd9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPlZpZXcgRG9jdG9yIEF2YWlsYWJpbGl0eTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdHsvKiA8cCBjbGFzc05hbWU9XCJmdy01MDAgZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyIG1iLTJcIiBzdHlsZT17eyBmb250U2l6ZTogMTQgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiaXBkLXBvcC10aWNrXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltYWdlcy90aWNrLnBuZyd9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPkZyZWUgQ2FuY2VsbGF0aW9uPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPiAqL31cblx0XHRcdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdDp0aGlzLnByb3BzLmlzX29yZ2FuaWM/XG5cdFx0XHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwIGQtZmxleCBhbGlnbi1pdGVtLWNlbnRlciBtYi0yXCIgc3R5bGU9e3sgZm9udFNpemU6IDE0IH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImlwZC1wb3AtdGlja1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWFnZXMvdGljay5wbmcnfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5TcGVjaWFsIFByaWNlcyBvbiBEb2N0b3IgYW5kIExhYiBUZXN0czwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBkLWZsZXggYWxpZ24taXRlbS1jZW50ZXIgbWItMlwiIHN0eWxlPXt7IGZvbnRTaXplOiAxNCB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJpcGQtcG9wLXRpY2tcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1hZ2VzL3RpY2sucG5nJ30gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+MjMlIE9GRiBvbiBNZWRpY2luZXM8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy01MDAgZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyIG1iLTJcIiBzdHlsZT17eyBmb250U2l6ZTogMTQgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiaXBkLXBvcC10aWNrXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltYWdlcy90aWNrLnBuZyd9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPkNvdmVycyBGdWxsIEZhbWlseSBvZiA2IE1lbWJlcnM8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHQ6IDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBkLWZsZXggYWxpZ24taXRlbS1jZW50ZXIgbWItMlwiIHN0eWxlPXt7IGZvbnRTaXplOiAxNCB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJpcGQtcG9wLXRpY2tcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1hZ2VzL3RpY2sucG5nJ30gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+RnJlZSAgTGFiIFJlcG9ydCBSZXZpZXcgZnJvbSBEb2N0b3JzPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwIGQtZmxleCBhbGlnbi1pdGVtLWNlbnRlciBtYi0yXCIgc3R5bGU9e3sgZm9udFNpemU6IDE0IH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImlwZC1wb3AtdGlja1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWFnZXMvdGljay5wbmcnfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5Mb3dlc3QgUHJpY2UgR3VhcmFudGVlPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwIGQtZmxleCBhbGlnbi1pdGVtLWNlbnRlciBtYi0yXCIgc3R5bGU9e3sgZm9udFNpemU6IDE0IH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImlwZC1wb3AtdGlja1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWFnZXMvdGljay5wbmcnfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5GcmVlIEhvbWUgU2FtcGxlIENvbGxlY3Rpb248L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTIgcGQtMTAgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbS1jZW50ZXIgZmxleC1jb2x1bW5cIiBzdHlsZT17eyBtYXJnaW46IFwiMHB4IDBweCA2cHhcIiB9fT5cblx0XHRcdFx0XHRcdDxmb3JtIGNsYXNzTmFtZT1cImNvbC1zbS0xMiBwZC0wXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGFiZWxXcmFwIG1iLTBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwiZnMtMTJcIiB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJQbGVhc2UgZW50ZXIgeW91ciBtb2JpbGUgbnVtYmVyIHRvIGNvbnRpbnVlXCIgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyl9IC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwIGNvbC1zbS0xMiBwLTAgbXItdC01XCIgc3R5bGU9e3sgZm9udFNpemU6IDExLCBmb250U3R5bGU6ICdpdGFsaWMnIH19PipZb3VyIGJvb2tpbmcgZGV0YWlscyB3aWxsIGJlIHNlbnQgdG8gdGhpcyBudW1iZXI8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQtYnRuIHRleHQtY2VudGVyIG0tMCBwZC0xMCBwdC0wXCI+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LXdoaXRlIHBvcC1zdWJUZXh0XCIgb25DbGljaz17dGhpcy5zdWJtaXRMZWFkLmJpbmQodGhpcyl9PjxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPntgJHt0aGlzLnByb3BzLmlzX29yZ2FuaWM/J0Jvb2sgQXBwb2ludG1lbnQgYXQgRGlzY291bnRlZCBQcmljZSc6J0Jvb2sgQXBwb2ludG1lbnQnfWB9PC9wPlxuXHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5pc19vcmdhbmljPycnOjxzcGFuID5ObyBTZXJ2aWNlIEZlZTwvc3Bhbj59XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcFVwLXdodHNhcHBFbmFibGVcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2h0c2FwcEVuYWJsZS1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwid3RzYXBwLWNoay10eHRcIj48aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvdGljay5zdmcnfS8+IEVuYWJsZSBXaGF0c2FwcCBmb3Igc2VhbWxlc3MgY29tbXVuaWNhdGlvbjwvcD5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZnctNTAwXCIgc3R5bGU9e3sgZm9udFNpemU6IDksIGNvbG9yOiAnIzhhOGE4YScgfX0gPkJ5IHByb2NlZWRpbmcsIHlvdSBoZXJlYnkgYWdyZWUgdG8gdGhlIDxhIGhyZWY9XCIvdGVybXNcIiB0YXJnZXQ9XCJfYmxhbmtcIiBzdHlsZT17eyBjb2xvcjogYHZhcigtLXRleHQtLXByaW1hcnktLWNvbG9yKWAgfX0gPkVuZCBVc2VyIEFncmVlbWVudDwvYT4gYW5kIDxhIGhyZWY9XCIvcHJpdmFjeVwiIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7IGNvbG9yOiBgdmFyKC0tdGV4dC0tcHJpbWFyeS0tY29sb3IpYCB9fSA+UHJpdmFjeSBQb2xpY3kuPC9hPjwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb25JcGRQb3B1cFZpZXciXSwic291cmNlUm9vdCI6IiJ9