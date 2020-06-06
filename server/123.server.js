exports.ids = [123];
exports.modules = {

/***/ "./dev/js/components/insurance/insuranceSuccess.js":
/*!*********************************************************!*\
  !*** ./dev/js/components/insurance/insuranceSuccess.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _DesktopProfileHeader = __webpack_require__(/*! ../../components/commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _ChatPanel = __webpack_require__(/*! ../../components/commons/ChatPanel */ "./dev/js/components/commons/ChatPanel/index.js");

var _ChatPanel2 = _interopRequireDefault(_ChatPanel);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class InsuranceFaq extends _react2.default.Component {
	constructor(props) {
		super(props);
		this.state = {
			// selectedProfile:'',
			// selected_plan_price:'',
			// is_edit:false,
			// gst: 'inclusive of 18% GST',
			no_disease: false,
			disease_selected: {}
		};
	}
	componentDidMount() {
		var url_string = window.location.href;
		var url = new URL(url_string);
		var member_list_id = url.searchParams.get("id");
		if (member_list_id !== null) {
			this.props.getInsuranceMemberList(member_list_id); // get insured member details and list of dieases(faq's)
		}
	}
	handleChange(member_id, disease_id, event) {
		let disease_selected = this.state.disease_selected;
		if (disease_selected[member_id]) {
			if (disease_selected[member_id].indexOf(disease_id) > -1) {
				disease_selected[member_id] = disease_selected[member_id].filter(x => x != disease_id);
			} else {
				disease_selected[member_id].push(disease_id);
			}
		} else {
			disease_selected[member_id] = [];
			disease_selected[member_id].push(disease_id);
		}

		this.setState({ disease_selected: disease_selected });
	}
	toggleDiease() {
		if (this.state.no_disease) {
			this.setState({ no_disease: false });
		} else {
			this.setState({ no_disease: true });
		}
	}
	submitPlan() {
		var member_list = [];
		var member_list_new = [];
		let member = {};
		let member_new = {};
		let abc = Object.entries(this.props.insured_member_list.members).map(function ([key, value]) {
			let mem = {};
			mem.id = value.id;
			mem.disease = [];
			this.props.insured_member_list.disease.map(val => {
				mem.disease.push({ id: val.id, response: false });
			});
			member_list.push(mem);
		}, this);
		if (!this.state.no_disease && Object.keys(this.state.disease_selected).length == 0) {
			_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please provide input wherever applicable or select 'None for all' if none of the above is applicable." });
		} else {
			if (Object.keys(this.state.disease_selected).length > 0 && !this.state.no_disease) {
				{
					Object.entries(this.state.disease_selected).map(function ([disease_key, value]) {
						member_new = {};
						member_new.disease = [];
						{
							Object.entries(member_list).map(function ([k, val]) {
								if (val.id == disease_key) {
									member_new.id = disease_key;
									Object.entries(val.disease).map(function ([keys, diseases]) {
										let disea = diseases.id;
										if (value.indexOf(disea) != -1) {
											member_new.disease.push({ id: disea, response: true });
										} else {
											member_new.disease.push({ id: disea, response: false });
										}
									});
								}
							});
						}
						member_list_new.push(member_new);
					}, this);
				}
				this.props.updateMemberList({ "members": member_list_new }, resp => {
					// update members selected list
					this.props.history.push('/insurance/certificate?show_congo=true');
				});
			} else if (this.state.no_disease) {
				this.props.updateMemberList({ "members": member_list }, resp => {
					// update members selected list
					this.props.history.push('/insurance/certificate?show_congo=true');
				});
			}
		}
	}
	render() {
		let self = this;
		let is_women_only = [];
		if (Object.keys(this.props.insured_member_list).length > 0) {
			is_women_only = this.props.insured_member_list.members.filter(x => x.gender == 'f' && (x.relation == 'self' || x.relation == 'spouse'));

			return _react2.default.createElement(
				'div',
				{ className: 'profile-body-wrap' },
				_react2.default.createElement(_DesktopProfileHeader2.default, { showPackageStrip: true }),
				_react2.default.createElement(
					'section',
					{ className: 'container parent-section book-appointment-section text-center container-top-margin' },
					_react2.default.createElement(
						'section',
						{ className: 'section-margin-bottom congrats-space' },
						_react2.default.createElement(
							'div',
							{ className: 'widget cong-margin-btm' },
							_react2.default.createElement(
								'div',
								{ className: 'congratulation-section pb-0' },
								_react2.default.createElement(
									'div',
									{ className: 'cong-img' },
									_react2.default.createElement('img', { className: 'ins-input-img', src: "/assets" + "/img/cong.png" })
								),
								_react2.default.createElement(
									'div',
									{ className: 'cong-content' },
									_react2.default.createElement(
										'p',
										{ className: 'cong-orng-para' },
										'Congratulations!'
									),
									_react2.default.createElement(
										'p',
										{ className: 'cong-blk-text' },
										'Group Out-patient Insurance policy has been issued. '
									)
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'ins-card-head pt-0', style: { justifyContent: 'center' } },
								_react2.default.createElement(
									'div',
									{ className: 'ins-name-head certificate-width' },
									_react2.default.createElement(
										'p',
										null,
										'Covered by:'
									),
									_react2.default.createElement('img', { className: 'border-remove', width: '100', src: this.props.insured_member_list.insurer_logo })
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'widget', style: { marginBottom: '70px' } },
							_react2.default.createElement(
								'div',
								{ className: 'fnl-radio' },
								_react2.default.createElement(
									'div',
									{ className: 'ins-radio-table-container' },
									_react2.default.createElement(
										'p',
										{ className: 'ins-rd-fist' },
										'All set to go! Just answer some important questions regarding the insured member(s) and you can download the COI'
									),
									_react2.default.createElement(
										'p',
										{ className: 'ins-rd-second' },
										'Ever diagnose with the following medical disease?'
									),
									_react2.default.createElement(
										'p',
										{ className: 'ins-rd-third' },
										'All pre-existing conditions are covered under the policy and disclosure will not affect the policy terms.'
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'ins-radio-main-table' },
									_react2.default.createElement(
										'table',
										{ className: 'table' },
										_react2.default.createElement(
											'thead',
											null,
											_react2.default.createElement(
												'tr',
												{ align: 'center' },
												_react2.default.createElement(
													'th',
													{ className: 'insurance-checkboxes text-left' },
													_react2.default.createElement('input', { type: 'checkbox', className: 'ins-chk-bx', checked: this.state.no_disease, id: 'test21', name: 'fruit-1', value: '' }),
													_react2.default.createElement(
														'label',
														{ onClick: this.toggleDiease.bind(this), htmlFor: 'test21', style: { 'margin': 0, 'paddingLeft': 0 } },
														'None for all'
													)
												),
												Object.entries(this.props.insured_member_list.members).map(function ([key, value]) {
													return _react2.default.createElement(
														'th',
														{ className: 'text-center', key: key, style: { 'textTransform': 'capitalize' } },
														_react2.default.createElement(
															'p',
															{ 'data-id': value.id },
															value.relation
														)
													);
												}, this)
											)
										),
										_react2.default.createElement(
											'tbody',
											null,
											Object.entries(this.props.insured_member_list.disease).map(function ([key, disease_val]) {
												return !disease_val.is_female_related ? _react2.default.createElement(
													'tr',
													{ key: key },
													_react2.default.createElement(
														'td',
														null,
														_react2.default.createElement(
															'p',
															null,
															disease_val.disease
														)
													),
													Object.entries(this.props.insured_member_list.members).map(function ([key, member_value]) {
														return _react2.default.createElement(
															'td',
															{ key: key },
															_react2.default.createElement(
																'label',
																{ className: 'container-radio' },
																_react2.default.createElement(
																	'div',
																	{ className: 'insurance-checkboxes text-center' },
																	this.state.no_disease ? _react2.default.createElement(
																		_react2.default.Fragment,
																		null,
																		_react2.default.createElement('input', { type: 'checkbox', className: 'ins-chk-bx', id: key, 'data-param': 'disease_selected', name: `disease_${member_value.id}_${disease_val.id}`, value: '', checked: this.state.disease_selected[member_value.id] && this.state.disease_selected[member_value.id].indexOf(disease_val.id) > -1 ? true : false }),
																		_react2.default.createElement('label', { htmlFor: 'test21' })
																	) : _react2.default.createElement(
																		_react2.default.Fragment,
																		null,
																		_react2.default.createElement('input', { type: 'checkbox', className: 'ins-chk-bx', id: key, 'data-param': 'disease_selected', name: `disease_${member_value.id}_${disease_val.id}`, value: '', checked: this.state.disease_selected[member_value.id] && this.state.disease_selected[member_value.id].indexOf(disease_val.id) > -1 ? true : false }),
																		_react2.default.createElement('label', { onClick: this.handleChange.bind(this, member_value.id, disease_val.id), htmlFor: 'test21' })
																	)
																)
															)
														);
													}, this)
												) : '';
											}, this),
											is_women_only && is_women_only.length > 0 ? Object.entries(this.props.insured_member_list.disease).map(function ([key, disease_val]) {
												return disease_val.is_female_related ? _react2.default.createElement(
													'tr',
													{ key: key },
													_react2.default.createElement(
														'td',
														{ style: { borderTop: '2px solid #d8d4d4', paddingTop: '10px' } },
														_react2.default.createElement(
															'p',
															null,
															disease_val.disease
														)
													),
													Object.entries(this.props.insured_member_list.members).map(function ([key, member_value]) {
														return _react2.default.createElement(
															'td',
															{ key: key, style: { borderTop: '2px solid #d8d4d4', paddingTop: '10px' } },
															_react2.default.createElement(
																'label',
																{ className: 'container-radio' },
																_react2.default.createElement(
																	'div',
																	{ className: 'insurance-checkboxes text-center', style: { visibility: member_value.gender == 'f' && (member_value.relation == 'self' || member_value.relation == 'spouse') ? '' : 'hidden' } },
																	_react2.default.createElement('input', { type: 'checkbox', className: 'ins-chk-bx', checked: this.state.disease, id: key, 'data-param': 'disease_selected', name: `disease_${member_value.id}_${disease_val.id}`, value: '', disabled: this.state.no_disease ? true : '',
																		checked: this.state.disease_selected[member_value.id] && this.state.disease_selected[member_value.id].indexOf(disease_val.id) > -1 ? true : false }),
																	_react2.default.createElement('label', {
																		onClick: this.handleChange.bind(this, member_value.id, disease_val.id), htmlFor: 'test21' })
																)
															)
														);
													}, this)
												) : '';
											}, this) : ''
										)
									)
								)
							)
						)
					),
					_react2.default.createElement(
						'button',
						{ className: 'congrats-btn v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round btn-lg text-lg sticky-btn', onClick: this.submitPlan.bind(this) },
						_react2.default.createElement(
							'p',
							{ style: { fontWeight: '500', fontSize: '15px' } },
							'Submit & Download Certficate of Insurance'
						)
					)
				)
			);
		} else {
			return _react2.default.createElement('div', null);
		}
	}
}

exports.default = InsuranceFaq;

/***/ }),

/***/ "./dev/js/containers/insurance/InsuranceSuccess.js":
/*!*********************************************************!*\
  !*** ./dev/js/containers/insurance/InsuranceSuccess.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _insuranceSuccess = __webpack_require__(/*! ../../components/insurance/insuranceSuccess.js */ "./dev/js/components/insurance/insuranceSuccess.js");

var _insuranceSuccess2 = _interopRequireDefault(_insuranceSuccess);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


class InsuranceSuccess extends _react2.default.Component {

    componentDidMount() {
        const parsed = queryString.parse(window.location.search);
        let data = {
            'Category': 'ConsumerApp', 'Action': 'OpdInsuranceBooked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': parsed.id ? parsed.id : 0, 'event': 'opd-insurance-booked'
        };
        _gtm2.default.sendEvent({ data: data });

        if (_storage2.default.checkAuth()) {
            this.props.getUserProfile(); // to get loggedIn user profile
        }
    }

    render() {
        return _react2.default.createElement(_insuranceSuccess2.default, this.props);
    }
}

const mapStateToProps = state => {
    const USER = state.USER;
    let { insurnaceData, LOAD_INSURANCE, selected_plan, self_data_values, insured_member_list } = state.INSURANCE;
    return {
        insurnaceData, LOAD_INSURANCE, selected_plan, USER, self_data_values, insured_member_list
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getInsuranceMemberList: member_list_id => dispatch((0, _index.getInsuranceMemberList)(member_list_id)),
        updateMemberList: (member_list, callback) => dispatch((0, _index.updateMemberList)(member_list, callback)),
        getUserProfile: () => dispatch((0, _index.getUserProfile)())
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(InsuranceSuccess);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pbnN1cmFuY2UvaW5zdXJhbmNlU3VjY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9pbnN1cmFuY2UvSW5zdXJhbmNlU3VjY2Vzcy5qcyJdLCJuYW1lcyI6WyJJbnN1cmFuY2VGYXEiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsIm5vX2Rpc2Vhc2UiLCJkaXNlYXNlX3NlbGVjdGVkIiwiY29tcG9uZW50RGlkTW91bnQiLCJ1cmxfc3RyaW5nIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidXJsIiwiVVJMIiwibWVtYmVyX2xpc3RfaWQiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJnZXRJbnN1cmFuY2VNZW1iZXJMaXN0IiwiaGFuZGxlQ2hhbmdlIiwibWVtYmVyX2lkIiwiZGlzZWFzZV9pZCIsImV2ZW50IiwiaW5kZXhPZiIsImZpbHRlciIsIngiLCJwdXNoIiwic2V0U3RhdGUiLCJ0b2dnbGVEaWVhc2UiLCJzdWJtaXRQbGFuIiwibWVtYmVyX2xpc3QiLCJtZW1iZXJfbGlzdF9uZXciLCJtZW1iZXIiLCJtZW1iZXJfbmV3IiwiYWJjIiwiT2JqZWN0IiwiZW50cmllcyIsImluc3VyZWRfbWVtYmVyX2xpc3QiLCJtZW1iZXJzIiwibWFwIiwia2V5IiwidmFsdWUiLCJtZW0iLCJpZCIsImRpc2Vhc2UiLCJ2YWwiLCJyZXNwb25zZSIsImtleXMiLCJsZW5ndGgiLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJ0ZXh0IiwiZGlzZWFzZV9rZXkiLCJrIiwiZGlzZWFzZXMiLCJkaXNlYSIsInVwZGF0ZU1lbWJlckxpc3QiLCJyZXNwIiwiaGlzdG9yeSIsInJlbmRlciIsInNlbGYiLCJpc193b21lbl9vbmx5IiwiZ2VuZGVyIiwicmVsYXRpb24iLCJBU1NFVFNfQkFTRV9VUkwiLCJqdXN0aWZ5Q29udGVudCIsImluc3VyZXJfbG9nbyIsIm1hcmdpbkJvdHRvbSIsImJpbmQiLCJkaXNlYXNlX3ZhbCIsImlzX2ZlbWFsZV9yZWxhdGVkIiwibWVtYmVyX3ZhbHVlIiwiYm9yZGVyVG9wIiwicGFkZGluZ1RvcCIsInZpc2liaWxpdHkiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJJbnN1cmFuY2VTdWNjZXNzIiwicGFyc2VkIiwicGFyc2UiLCJzZWFyY2giLCJkYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VuZEV2ZW50IiwiU1RPUkFHRSIsImNoZWNrQXV0aCIsImdldFVzZXJQcm9maWxlIiwibWFwU3RhdGVUb1Byb3BzIiwiVVNFUiIsImluc3VybmFjZURhdGEiLCJMT0FEX0lOU1VSQU5DRSIsInNlbGVjdGVkX3BsYW4iLCJzZWxmX2RhdGFfdmFsdWVzIiwiSU5TVVJBTkNFIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR0EsTUFBTUEsWUFBTixTQUEyQkMsZ0JBQU1DLFNBQWpDLENBQTJDO0FBQzFDQyxhQUFZQyxLQUFaLEVBQW1CO0FBQ2xCLFFBQU1BLEtBQU47QUFDQSxPQUFLQyxLQUFMLEdBQWE7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxlQUFZLEtBTEE7QUFNWkMscUJBQWtCO0FBTk4sR0FBYjtBQVVBO0FBQ0RDLHFCQUFvQjtBQUNuQixNQUFJQyxhQUFhQyxPQUFPQyxRQUFQLENBQWdCQyxJQUFqQztBQUNBLE1BQUlDLE1BQU0sSUFBSUMsR0FBSixDQUFRTCxVQUFSLENBQVY7QUFDQSxNQUFJTSxpQkFBaUJGLElBQUlHLFlBQUosQ0FBaUJDLEdBQWpCLENBQXFCLElBQXJCLENBQXJCO0FBQ0EsTUFBSUYsbUJBQW1CLElBQXZCLEVBQTZCO0FBQzVCLFFBQUtYLEtBQUwsQ0FBV2Msc0JBQVgsQ0FBa0NILGNBQWxDLEVBRDRCLENBQ3NC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dmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IENoYXRQYW5lbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvQ2hhdFBhbmVsJ1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5cblxuY2xhc3MgSW5zdXJhbmNlRmFxIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0Ly8gc2VsZWN0ZWRQcm9maWxlOicnLFxuXHRcdFx0Ly8gc2VsZWN0ZWRfcGxhbl9wcmljZTonJyxcblx0XHRcdC8vIGlzX2VkaXQ6ZmFsc2UsXG5cdFx0XHQvLyBnc3Q6ICdpbmNsdXNpdmUgb2YgMTglIEdTVCcsXG5cdFx0XHRub19kaXNlYXNlOiBmYWxzZSxcblx0XHRcdGRpc2Vhc2Vfc2VsZWN0ZWQ6IHtcblxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR2YXIgdXJsX3N0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuXHRcdHZhciB1cmwgPSBuZXcgVVJMKHVybF9zdHJpbmcpO1xuXHRcdHZhciBtZW1iZXJfbGlzdF9pZCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiaWRcIik7XG5cdFx0aWYgKG1lbWJlcl9saXN0X2lkICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnByb3BzLmdldEluc3VyYW5jZU1lbWJlckxpc3QobWVtYmVyX2xpc3RfaWQpIC8vIGdldCBpbnN1cmVkIG1lbWJlciBkZXRhaWxzIGFuZCBsaXN0IG9mIGRpZWFzZXMoZmFxJ3MpXG5cdFx0fVxuXHR9XG5cdGhhbmRsZUNoYW5nZShtZW1iZXJfaWQsIGRpc2Vhc2VfaWQsIGV2ZW50KSB7XG5cdFx0bGV0IGRpc2Vhc2Vfc2VsZWN0ZWQgPSB0aGlzLnN0YXRlLmRpc2Vhc2Vfc2VsZWN0ZWRcblx0XHRpZiAoZGlzZWFzZV9zZWxlY3RlZFttZW1iZXJfaWRdKSB7XG5cdFx0XHRpZiAoZGlzZWFzZV9zZWxlY3RlZFttZW1iZXJfaWRdLmluZGV4T2YoZGlzZWFzZV9pZCkgPiAtMSkge1xuXHRcdFx0XHRkaXNlYXNlX3NlbGVjdGVkW21lbWJlcl9pZF0gPSBkaXNlYXNlX3NlbGVjdGVkW21lbWJlcl9pZF0uZmlsdGVyKHggPT4geCAhPSBkaXNlYXNlX2lkKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGlzZWFzZV9zZWxlY3RlZFttZW1iZXJfaWRdLnB1c2goZGlzZWFzZV9pZClcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGlzZWFzZV9zZWxlY3RlZFttZW1iZXJfaWRdID0gW11cblx0XHRcdGRpc2Vhc2Vfc2VsZWN0ZWRbbWVtYmVyX2lkXS5wdXNoKGRpc2Vhc2VfaWQpXG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGRpc2Vhc2Vfc2VsZWN0ZWQ6IGRpc2Vhc2Vfc2VsZWN0ZWQgfSlcblx0fVxuXHR0b2dnbGVEaWVhc2UoKSB7XG5cdFx0aWYgKHRoaXMuc3RhdGUubm9fZGlzZWFzZSkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IG5vX2Rpc2Vhc2U6IGZhbHNlIH0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBub19kaXNlYXNlOiB0cnVlIH0pXG5cdFx0fVxuXHR9XG5cdHN1Ym1pdFBsYW4oKSB7XG5cdFx0dmFyIG1lbWJlcl9saXN0ID0gW11cblx0XHR2YXIgbWVtYmVyX2xpc3RfbmV3ID0gW11cblx0XHRsZXQgbWVtYmVyID0ge31cblx0XHRsZXQgbWVtYmVyX25ldyA9IHt9XG5cdFx0bGV0IGFiYyA9IE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuaW5zdXJlZF9tZW1iZXJfbGlzdC5tZW1iZXJzKS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlXSkge1xuXHRcdFx0bGV0IG1lbSA9IHt9XG5cdFx0XHRtZW0uaWQgPSB2YWx1ZS5pZFxuXHRcdFx0bWVtLmRpc2Vhc2UgPSBbXVxuXHRcdFx0dGhpcy5wcm9wcy5pbnN1cmVkX21lbWJlcl9saXN0LmRpc2Vhc2UubWFwKCh2YWwpID0+IHtcblx0XHRcdFx0bWVtLmRpc2Vhc2UucHVzaCh7IGlkOiB2YWwuaWQsIHJlc3BvbnNlOiBmYWxzZSB9KVxuXG5cdFx0XHR9KVxuXHRcdFx0bWVtYmVyX2xpc3QucHVzaChtZW0pXG5cdFx0fSwgdGhpcylcblx0XHRpZiAoIXRoaXMuc3RhdGUubm9fZGlzZWFzZSAmJiBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmRpc2Vhc2Vfc2VsZWN0ZWQpLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIHByb3ZpZGUgaW5wdXQgd2hlcmV2ZXIgYXBwbGljYWJsZSBvciBzZWxlY3QgJ05vbmUgZm9yIGFsbCcgaWYgbm9uZSBvZiB0aGUgYWJvdmUgaXMgYXBwbGljYWJsZS5cIiB9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuZGlzZWFzZV9zZWxlY3RlZCkubGVuZ3RoID4gMCAmJiAhdGhpcy5zdGF0ZS5ub19kaXNlYXNlKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRPYmplY3QuZW50cmllcyh0aGlzLnN0YXRlLmRpc2Vhc2Vfc2VsZWN0ZWQpLm1hcChmdW5jdGlvbiAoW2Rpc2Vhc2Vfa2V5LCB2YWx1ZV0pIHtcblx0XHRcdFx0XHRcdG1lbWJlcl9uZXcgPSB7fVxuXHRcdFx0XHRcdFx0bWVtYmVyX25ldy5kaXNlYXNlID0gW11cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0T2JqZWN0LmVudHJpZXMobWVtYmVyX2xpc3QpLm1hcChmdW5jdGlvbiAoW2ssIHZhbF0pIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAodmFsLmlkID09IGRpc2Vhc2Vfa2V5KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRtZW1iZXJfbmV3LmlkID0gZGlzZWFzZV9rZXlcblx0XHRcdFx0XHRcdFx0XHRcdE9iamVjdC5lbnRyaWVzKHZhbC5kaXNlYXNlKS5tYXAoZnVuY3Rpb24gKFtrZXlzLCBkaXNlYXNlc10pIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGV0IGRpc2VhID0gZGlzZWFzZXMuaWRcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHZhbHVlLmluZGV4T2YoZGlzZWEpICE9IC0xKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVtYmVyX25ldy5kaXNlYXNlLnB1c2goeyBpZDogZGlzZWEsIHJlc3BvbnNlOiB0cnVlIH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVtYmVyX25ldy5kaXNlYXNlLnB1c2goeyBpZDogZGlzZWEsIHJlc3BvbnNlOiBmYWxzZSB9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG1lbWJlcl9saXN0X25ldy5wdXNoKG1lbWJlcl9uZXcpXG5cdFx0XHRcdFx0fSwgdGhpcylcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnByb3BzLnVwZGF0ZU1lbWJlckxpc3QoeyBcIm1lbWJlcnNcIjogbWVtYmVyX2xpc3RfbmV3IH0sIChyZXNwKSA9PiB7IC8vIHVwZGF0ZSBtZW1iZXJzIHNlbGVjdGVkIGxpc3Rcblx0XHRcdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2luc3VyYW5jZS9jZXJ0aWZpY2F0ZT9zaG93X2NvbmdvPXRydWUnKVxuXHRcdFx0XHR9KVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnN0YXRlLm5vX2Rpc2Vhc2UpIHtcblx0XHRcdFx0dGhpcy5wcm9wcy51cGRhdGVNZW1iZXJMaXN0KHsgXCJtZW1iZXJzXCI6IG1lbWJlcl9saXN0IH0sIChyZXNwKSA9PiB7IC8vIHVwZGF0ZSBtZW1iZXJzIHNlbGVjdGVkIGxpc3Rcblx0XHRcdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2luc3VyYW5jZS9jZXJ0aWZpY2F0ZT9zaG93X2NvbmdvPXRydWUnKVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHNlbGYgPSB0aGlzXG5cdFx0bGV0IGlzX3dvbWVuX29ubHkgPSBbXVxuXHRcdGlmIChPYmplY3Qua2V5cyh0aGlzLnByb3BzLmluc3VyZWRfbWVtYmVyX2xpc3QpLmxlbmd0aCA+IDApIHtcblx0XHRcdGlzX3dvbWVuX29ubHkgPSB0aGlzLnByb3BzLmluc3VyZWRfbWVtYmVyX2xpc3QubWVtYmVycy5maWx0ZXIoeCA9PiB4LmdlbmRlciA9PSAnZicgJiYgKHgucmVsYXRpb24gPT0gJ3NlbGYnIHx8IHgucmVsYXRpb24gPT0gJ3Nwb3VzZScpKVxuXG5cdFx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuXHRcdFx0XHQ8UHJvZmlsZUhlYWRlciBzaG93UGFja2FnZVN0cmlwPXt0cnVlfSAvPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgcGFyZW50LXNlY3Rpb24gYm9vay1hcHBvaW50bWVudC1zZWN0aW9uIHRleHQtY2VudGVyIGNvbnRhaW5lci10b3AtbWFyZ2luXCI+XG5cdFx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbi1tYXJnaW4tYm90dG9tIGNvbmdyYXRzLXNwYWNlXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBjb25nLW1hcmdpbi1idG1cIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb25ncmF0dWxhdGlvbi1zZWN0aW9uIHBiLTBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbmctaW1nXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImlucy1pbnB1dC1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jb25nLnBuZ1wifSAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29uZy1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjb25nLW9ybmctcGFyYVwiPkNvbmdyYXR1bGF0aW9ucyE8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjb25nLWJsay10ZXh0XCI+R3JvdXAgT3V0LXBhdGllbnQgSW5zdXJhbmNlIHBvbGljeSBoYXMgYmVlbiBpc3N1ZWQuIDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWNhcmQtaGVhZCBwdC0wXCIgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLW5hbWUtaGVhZCBjZXJ0aWZpY2F0ZS13aWR0aFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdENvdmVyZWQgYnk6XG5cdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiYm9yZGVyLXJlbW92ZVwiIHdpZHRoPVwiMTAwXCIgc3JjPXt0aGlzLnByb3BzLmluc3VyZWRfbWVtYmVyX2xpc3QuaW5zdXJlcl9sb2dvfSAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICc3MHB4JyB9fT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbmwtcmFkaW9cIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1yYWRpby10YWJsZS1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImlucy1yZC1maXN0XCI+QWxsIHNldCB0byBnbyEgSnVzdCBhbnN3ZXIgc29tZSBpbXBvcnRhbnQgcXVlc3Rpb25zIHJlZ2FyZGluZyB0aGUgaW5zdXJlZCBtZW1iZXIocykgYW5kIHlvdSBjYW4gZG93bmxvYWQgdGhlIENPSTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImlucy1yZC1zZWNvbmRcIj5FdmVyIGRpYWdub3NlIHdpdGggdGhlIGZvbGxvd2luZyBtZWRpY2FsIGRpc2Vhc2U/PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaW5zLXJkLXRoaXJkXCI+QWxsIHByZS1leGlzdGluZyBjb25kaXRpb25zIGFyZSBjb3ZlcmVkIHVuZGVyIHRoZSBwb2xpY3kgYW5kIGRpc2Nsb3N1cmUgd2lsbCBub3QgYWZmZWN0IHRoZSBwb2xpY3kgdGVybXMuPC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLXJhZGlvLW1haW4tdGFibGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRyIGFsaWduPVwiY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwiaW5zdXJhbmNlLWNoZWNrYm94ZXMgdGV4dC1sZWZ0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJpbnMtY2hrLWJ4XCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5ub19kaXNlYXNlfSBpZD1cInRlc3QyMVwiIG5hbWU9XCJmcnVpdC0xXCIgdmFsdWU9XCJcIiAvPjxsYWJlbCBvbkNsaWNrPXt0aGlzLnRvZ2dsZURpZWFzZS5iaW5kKHRoaXMpfSBodG1sRm9yPVwidGVzdDIxXCIgc3R5bGU9e3sgJ21hcmdpbic6IDAsICdwYWRkaW5nTGVmdCc6IDAgfX0+Tm9uZSBmb3IgYWxsPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7T2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5pbnN1cmVkX21lbWJlcl9saXN0Lm1lbWJlcnMpLm1hcChmdW5jdGlvbiAoW2tleSwgdmFsdWVdKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8dGggY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBrZXk9e2tleX0gc3R5bGU9e3sgJ3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZScgfX0+PHAgZGF0YS1pZD17dmFsdWUuaWR9Pnt2YWx1ZS5yZWxhdGlvbn08L3A+PC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sIHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGhlYWQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7T2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5pbnN1cmVkX21lbWJlcl9saXN0LmRpc2Vhc2UpLm1hcChmdW5jdGlvbiAoW2tleSwgZGlzZWFzZV92YWxdKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gIWRpc2Vhc2VfdmFsLmlzX2ZlbWFsZV9yZWxhdGVkID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRyIGtleT17a2V5fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+PHA+e2Rpc2Vhc2VfdmFsLmRpc2Vhc2V9PC9wPjwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e09iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuaW5zdXJlZF9tZW1iZXJfbGlzdC5tZW1iZXJzKS5tYXAoZnVuY3Rpb24gKFtrZXksIG1lbWJlcl92YWx1ZV0pIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8dGQga2V5PXtrZXl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJhZGlvXCI+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImluc3VyYW5jZS1jaGVja2JveGVzIHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUubm9fZGlzZWFzZSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImlucy1jaGstYnhcIiBpZD17a2V5fSBkYXRhLXBhcmFtPSdkaXNlYXNlX3NlbGVjdGVkJyBuYW1lPXtgZGlzZWFzZV8ke21lbWJlcl92YWx1ZS5pZH1fJHtkaXNlYXNlX3ZhbC5pZH1gfSB2YWx1ZT1cIlwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZGlzZWFzZV9zZWxlY3RlZFttZW1iZXJfdmFsdWUuaWRdICYmIHRoaXMuc3RhdGUuZGlzZWFzZV9zZWxlY3RlZFttZW1iZXJfdmFsdWUuaWRdLmluZGV4T2YoZGlzZWFzZV92YWwuaWQpID4gLTEgPyB0cnVlIDogZmFsc2V9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInRlc3QyMVwiPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImlucy1jaGstYnhcIiBpZD17a2V5fSBkYXRhLXBhcmFtPSdkaXNlYXNlX3NlbGVjdGVkJyBuYW1lPXtgZGlzZWFzZV8ke21lbWJlcl92YWx1ZS5pZH1fJHtkaXNlYXNlX3ZhbC5pZH1gfSB2YWx1ZT1cIlwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZGlzZWFzZV9zZWxlY3RlZFttZW1iZXJfdmFsdWUuaWRdICYmIHRoaXMuc3RhdGUuZGlzZWFzZV9zZWxlY3RlZFttZW1iZXJfdmFsdWUuaWRdLmluZGV4T2YoZGlzZWFzZV92YWwuaWQpID4gLTEgPyB0cnVlIDogZmFsc2V9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCBtZW1iZXJfdmFsdWUuaWQsIGRpc2Vhc2VfdmFsLmlkKX0gaHRtbEZvcj1cInRlc3QyMVwiPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sIHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSwgdGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNfd29tZW5fb25seSAmJiBpc193b21lbl9vbmx5Lmxlbmd0aCA+IDAgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLmluc3VyZWRfbWVtYmVyX2xpc3QuZGlzZWFzZSkubWFwKGZ1bmN0aW9uIChba2V5LCBkaXNlYXNlX3ZhbF0pIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZGlzZWFzZV92YWwuaXNfZmVtYWxlX3JlbGF0ZWQgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRyIGtleT17a2V5fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkIHN0eWxlPXt7Ym9yZGVyVG9wOicycHggc29saWQgI2Q4ZDRkNCcsIHBhZGRpbmdUb3A6ICcxMHB4J319PjxwPntkaXNlYXNlX3ZhbC5kaXNlYXNlfTwvcD48L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7T2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5pbnN1cmVkX21lbWJlcl9saXN0Lm1lbWJlcnMpLm1hcChmdW5jdGlvbiAoW2tleSwgbWVtYmVyX3ZhbHVlXSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8dGQga2V5PXtrZXl9IHN0eWxlPXt7Ym9yZGVyVG9wOicycHggc29saWQgI2Q4ZDRkNCcsIHBhZGRpbmdUb3A6ICcxMHB4J319PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImluc3VyYW5jZS1jaGVja2JveGVzIHRleHQtY2VudGVyXCIgc3R5bGU9e3sgdmlzaWJpbGl0eTogbWVtYmVyX3ZhbHVlLmdlbmRlciA9PSAnZicgJiYgKG1lbWJlcl92YWx1ZS5yZWxhdGlvbiA9PSAnc2VsZicgfHwgbWVtYmVyX3ZhbHVlLnJlbGF0aW9uID09ICdzcG91c2UnKSA/ICcnIDogJ2hpZGRlbicgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImlucy1jaGstYnhcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmRpc2Vhc2V9IGlkPXtrZXl9IGRhdGEtcGFyYW09J2Rpc2Vhc2Vfc2VsZWN0ZWQnIG5hbWU9e2BkaXNlYXNlXyR7bWVtYmVyX3ZhbHVlLmlkfV8ke2Rpc2Vhc2VfdmFsLmlkfWB9IHZhbHVlPVwiXCIgZGlzYWJsZWQ9e3RoaXMuc3RhdGUubm9fZGlzZWFzZSA/IHRydWUgOiAnJ31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3RoaXMuc3RhdGUuZGlzZWFzZV9zZWxlY3RlZFttZW1iZXJfdmFsdWUuaWRdICYmIHRoaXMuc3RhdGUuZGlzZWFzZV9zZWxlY3RlZFttZW1iZXJfdmFsdWUuaWRdLmluZGV4T2YoZGlzZWFzZV92YWwuaWQpID4gLTEgPyB0cnVlIDogZmFsc2V9IC8+PGxhYmVsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgbWVtYmVyX3ZhbHVlLmlkLCBkaXNlYXNlX3ZhbC5pZCl9IGh0bWxGb3I9XCJ0ZXN0MjFcIj48L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LCB0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sIHRoaXMpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJyd9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvdGFibGU+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR7Lypcblx0XHRcdFx0XHRpc193b21lbl9vbmx5ICYmIGlzX3dvbWVuX29ubHkubGVuZ3RoID4gMD9cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldFwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOic3MHB4J319PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm5sLXJhZGlvXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1yYWRpby1tYWluLXRhYmxlXCI+XG5cdFx0XHRcdFx0XHRcdDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XHRcdFx0XHRcdHtPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLmluc3VyZWRfbWVtYmVyX2xpc3QuZGlzZWFzZSkubWFwKGZ1bmN0aW9uKFtrZXksIGRpc2Vhc2VfdmFsXSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZGlzZWFzZV92YWwuaXNfZmVtYWxlX3JlbGF0ZWQ/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ciBrZXk9e2tleX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPjxwPntkaXNlYXNlX3ZhbC5kaXNlYXNlfTwvcD48L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLmluc3VyZWRfbWVtYmVyX2xpc3QubWVtYmVycykubWFwKGZ1bmN0aW9uKFtrZXksIG1lbWJlcl92YWx1ZV0pIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPHRkIGtleT17a2V5fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJhZGlvXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImluc3VyYW5jZS1jaGVja2JveGVzIHRleHQtY2VudGVyXCIgc3R5bGU9e3t2aXNpYmlsaXR5Om1lbWJlcl92YWx1ZS5nZW5kZXIgPT0gJ2YnICYmIChtZW1iZXJfdmFsdWUucmVsYXRpb24gPT0gJ3NlbGYnIHx8IG1lbWJlcl92YWx1ZS5yZWxhdGlvbiA9PSAnc3BvdXNlJyk/Jyc6J2hpZGRlbid9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImlucy1jaGstYnhcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmRpc2Vhc2V9IGlkPXtrZXl9IGRhdGEtcGFyYW09J2Rpc2Vhc2Vfc2VsZWN0ZWQnIG5hbWU9e2BkaXNlYXNlXyR7bWVtYmVyX3ZhbHVlLmlkfV8ke2Rpc2Vhc2VfdmFsLmlkfWB9IHZhbHVlPVwiXCIgZGlzYWJsZWQ9e3RoaXMuc3RhdGUubm9fZGlzZWFzZT90cnVlOicnfSBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17dGhpcy5zdGF0ZS5kaXNlYXNlX3NlbGVjdGVkW21lbWJlcl92YWx1ZS5pZF0gJiYgdGhpcy5zdGF0ZS5kaXNlYXNlX3NlbGVjdGVkW21lbWJlcl92YWx1ZS5pZF0uaW5kZXhPZihkaXNlYXNlX3ZhbC5pZCk+LTE/dHJ1ZTpmYWxzZX0vPjxsYWJlbCBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLG1lbWJlcl92YWx1ZS5pZCxkaXNlYXNlX3ZhbC5pZCl9IGh0bWxGb3I9XCJ0ZXN0MjFcIj48L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSx0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0OicnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sdGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0XHRcdFx0PC90YWJsZT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0OicnKi99XG5cdFx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiY29uZ3JhdHMtYnRuIHYtYnRuIHAtMyB2LWJ0bi1wcmltYXJ5IGJ0bi1sZyBmaXhlZCBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCBidG4tbGcgdGV4dC1sZyBzdGlja3ktYnRuXCIgb25DbGljaz17dGhpcy5zdWJtaXRQbGFuLmJpbmQodGhpcyl9PjxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICc1MDAnLCBmb250U2l6ZTogJzE1cHgnIH19PlN1Ym1pdCAmIERvd25sb2FkIENlcnRmaWNhdGUgb2YgSW5zdXJhbmNlPC9wPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQ8L2Rpdj5cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIDxkaXY+PC9kaXY+XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3VyYW5jZUZhcSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7IGdldEluc3VyYW5jZU1lbWJlckxpc3QsdXBkYXRlTWVtYmVyTGlzdCwgZ2V0VXNlclByb2ZpbGV9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgSW5zdXJhbmNlU3VjY2Vzc0NvbXAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbnN1cmFuY2UvaW5zdXJhbmNlU3VjY2Vzcy5qcydcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vaGVscGVycy9ndG0uanMnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuXG5cbmNsYXNzIEluc3VyYW5jZVN1Y2Nlc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2Uod2luZG93LmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ09wZEluc3VyYW5jZUJvb2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogcGFyc2VkLmlkP3BhcnNlZC5pZDowLCAnZXZlbnQnOiAnb3BkLWluc3VyYW5jZS1ib29rZWQnXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICBpZiAoU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRVc2VyUHJvZmlsZSgpIC8vIHRvIGdldCBsb2dnZWRJbiB1c2VyIHByb2ZpbGVcbiAgICAgICAgfVxuICAgIH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8SW5zdXJhbmNlU3VjY2Vzc0NvbXAgey4uLnRoaXMucHJvcHN9Lz5cblx0XHRcdClcblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICBjb25zdCBVU0VSID0gc3RhdGUuVVNFUlxuICAgIGxldCB7IGluc3VybmFjZURhdGEsIExPQURfSU5TVVJBTkNFLCBzZWxlY3RlZF9wbGFuLHNlbGZfZGF0YV92YWx1ZXMsaW5zdXJlZF9tZW1iZXJfbGlzdH0gPSBzdGF0ZS5JTlNVUkFOQ0VcbiAgICByZXR1cm4ge1xuICAgICAgICBpbnN1cm5hY2VEYXRhLExPQURfSU5TVVJBTkNFLHNlbGVjdGVkX3BsYW4sVVNFUixzZWxmX2RhdGFfdmFsdWVzLGluc3VyZWRfbWVtYmVyX2xpc3RcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldEluc3VyYW5jZU1lbWJlckxpc3QgOihtZW1iZXJfbGlzdF9pZCkgPT4gZGlzcGF0Y2goZ2V0SW5zdXJhbmNlTWVtYmVyTGlzdChtZW1iZXJfbGlzdF9pZCkpLFxuICAgICAgICB1cGRhdGVNZW1iZXJMaXN0IDoobWVtYmVyX2xpc3QsY2FsbGJhY2spID0+IGRpc3BhdGNoKHVwZGF0ZU1lbWJlckxpc3QobWVtYmVyX2xpc3QsY2FsbGJhY2spKSxcbiAgICAgICAgZ2V0VXNlclByb2ZpbGU6ICgpID0+IGRpc3BhdGNoKGdldFVzZXJQcm9maWxlKCkpLFxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzICwgbWFwRGlzcGF0Y2hUb1Byb3BzKShJbnN1cmFuY2VTdWNjZXNzKSJdLCJzb3VyY2VSb290IjoiIn0=