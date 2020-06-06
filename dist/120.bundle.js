(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[120],{

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

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _DesktopProfileHeader = __webpack_require__(/*! ../../components/commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _ChatPanel = __webpack_require__(/*! ../../components/commons/ChatPanel */ "./dev/js/components/commons/ChatPanel/index.js");

var _ChatPanel2 = _interopRequireDefault(_ChatPanel);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsuranceFaq = function (_React$Component) {
	_inherits(InsuranceFaq, _React$Component);

	function InsuranceFaq(props) {
		_classCallCheck(this, InsuranceFaq);

		var _this = _possibleConstructorReturn(this, (InsuranceFaq.__proto__ || Object.getPrototypeOf(InsuranceFaq)).call(this, props));

		_this.state = {
			// selectedProfile:'',
			// selected_plan_price:'',
			// is_edit:false,
			// gst: 'inclusive of 18% GST',
			no_disease: false,
			disease_selected: {}
		};
		return _this;
	}

	_createClass(InsuranceFaq, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var url_string = window.location.href;
			var url = new URL(url_string);
			var member_list_id = url.searchParams.get("id");
			if (member_list_id !== null) {
				this.props.getInsuranceMemberList(member_list_id); // get insured member details and list of dieases(faq's)
			}
		}
	}, {
		key: 'handleChange',
		value: function handleChange(member_id, disease_id, event) {
			var disease_selected = this.state.disease_selected;
			if (disease_selected[member_id]) {
				if (disease_selected[member_id].indexOf(disease_id) > -1) {
					disease_selected[member_id] = disease_selected[member_id].filter(function (x) {
						return x != disease_id;
					});
				} else {
					disease_selected[member_id].push(disease_id);
				}
			} else {
				disease_selected[member_id] = [];
				disease_selected[member_id].push(disease_id);
			}

			this.setState({ disease_selected: disease_selected });
		}
	}, {
		key: 'toggleDiease',
		value: function toggleDiease() {
			if (this.state.no_disease) {
				this.setState({ no_disease: false });
			} else {
				this.setState({ no_disease: true });
			}
		}
	}, {
		key: 'submitPlan',
		value: function submitPlan() {
			var _this2 = this;

			var member_list = [];
			var member_list_new = [];
			var member = {};
			var member_new = {};
			var abc = Object.entries(this.props.insured_member_list.members).map(function (_ref) {
				var _ref2 = _slicedToArray(_ref, 2),
				    key = _ref2[0],
				    value = _ref2[1];

				var mem = {};
				mem.id = value.id;
				mem.disease = [];
				this.props.insured_member_list.disease.map(function (val) {
					mem.disease.push({ id: val.id, response: false });
				});
				member_list.push(mem);
			}, this);
			if (!this.state.no_disease && Object.keys(this.state.disease_selected).length == 0) {
				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please provide input wherever applicable or select 'None for all' if none of the above is applicable." });
			} else {
				if (Object.keys(this.state.disease_selected).length > 0 && !this.state.no_disease) {
					{
						Object.entries(this.state.disease_selected).map(function (_ref3) {
							var _ref4 = _slicedToArray(_ref3, 2),
							    disease_key = _ref4[0],
							    value = _ref4[1];

							member_new = {};
							member_new.disease = [];
							{
								Object.entries(member_list).map(function (_ref5) {
									var _ref6 = _slicedToArray(_ref5, 2),
									    k = _ref6[0],
									    val = _ref6[1];

									if (val.id == disease_key) {
										member_new.id = disease_key;
										Object.entries(val.disease).map(function (_ref7) {
											var _ref8 = _slicedToArray(_ref7, 2),
											    keys = _ref8[0],
											    diseases = _ref8[1];

											var disea = diseases.id;
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
					this.props.updateMemberList({ "members": member_list_new }, function (resp) {
						// update members selected list
						_this2.props.history.push('/insurance/certificate?show_congo=true');
					});
				} else if (this.state.no_disease) {
					this.props.updateMemberList({ "members": member_list }, function (resp) {
						// update members selected list
						_this2.props.history.push('/insurance/certificate?show_congo=true');
					});
				}
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var self = this;
			var is_women_only = [];
			if (Object.keys(this.props.insured_member_list).length > 0) {
				is_women_only = this.props.insured_member_list.members.filter(function (x) {
					return x.gender == 'f' && (x.relation == 'self' || x.relation == 'spouse');
				});

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
													Object.entries(this.props.insured_member_list.members).map(function (_ref9) {
														var _ref10 = _slicedToArray(_ref9, 2),
														    key = _ref10[0],
														    value = _ref10[1];

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
												Object.entries(this.props.insured_member_list.disease).map(function (_ref11) {
													var _ref12 = _slicedToArray(_ref11, 2),
													    key = _ref12[0],
													    disease_val = _ref12[1];

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
														Object.entries(this.props.insured_member_list.members).map(function (_ref13) {
															var _ref14 = _slicedToArray(_ref13, 2),
															    key = _ref14[0],
															    member_value = _ref14[1];

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
																			_react2.default.createElement('input', { type: 'checkbox', className: 'ins-chk-bx', id: key, 'data-param': 'disease_selected', name: 'disease_' + member_value.id + '_' + disease_val.id, value: '', checked: this.state.disease_selected[member_value.id] && this.state.disease_selected[member_value.id].indexOf(disease_val.id) > -1 ? true : false }),
																			_react2.default.createElement('label', { htmlFor: 'test21' })
																		) : _react2.default.createElement(
																			_react2.default.Fragment,
																			null,
																			_react2.default.createElement('input', { type: 'checkbox', className: 'ins-chk-bx', id: key, 'data-param': 'disease_selected', name: 'disease_' + member_value.id + '_' + disease_val.id, value: '', checked: this.state.disease_selected[member_value.id] && this.state.disease_selected[member_value.id].indexOf(disease_val.id) > -1 ? true : false }),
																			_react2.default.createElement('label', { onClick: this.handleChange.bind(this, member_value.id, disease_val.id), htmlFor: 'test21' })
																		)
																	)
																)
															);
														}, this)
													) : '';
												}, this),
												is_women_only && is_women_only.length > 0 ? Object.entries(this.props.insured_member_list.disease).map(function (_ref15) {
													var _ref16 = _slicedToArray(_ref15, 2),
													    key = _ref16[0],
													    disease_val = _ref16[1];

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
														Object.entries(this.props.insured_member_list.members).map(function (_ref17) {
															var _ref18 = _slicedToArray(_ref17, 2),
															    key = _ref18[0],
															    member_value = _ref18[1];

															return _react2.default.createElement(
																'td',
																{ key: key, style: { borderTop: '2px solid #d8d4d4', paddingTop: '10px' } },
																_react2.default.createElement(
																	'label',
																	{ className: 'container-radio' },
																	_react2.default.createElement(
																		'div',
																		{ className: 'insurance-checkboxes text-center', style: { visibility: member_value.gender == 'f' && (member_value.relation == 'self' || member_value.relation == 'spouse') ? '' : 'hidden' } },
																		_react2.default.createElement('input', _defineProperty({ type: 'checkbox', className: 'ins-chk-bx', checked: this.state.disease, id: key, 'data-param': 'disease_selected', name: 'disease_' + member_value.id + '_' + disease_val.id, value: '', disabled: this.state.no_disease ? true : ''
																		}, 'checked', this.state.disease_selected[member_value.id] && this.state.disease_selected[member_value.id].indexOf(disease_val.id) > -1 ? true : false)),
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
	}]);

	return InsuranceFaq;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _insuranceSuccess = __webpack_require__(/*! ../../components/insurance/insuranceSuccess.js */ "./dev/js/components/insurance/insuranceSuccess.js");

var _insuranceSuccess2 = _interopRequireDefault(_insuranceSuccess);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var InsuranceSuccess = function (_React$Component) {
    _inherits(InsuranceSuccess, _React$Component);

    function InsuranceSuccess() {
        _classCallCheck(this, InsuranceSuccess);

        return _possibleConstructorReturn(this, (InsuranceSuccess.__proto__ || Object.getPrototypeOf(InsuranceSuccess)).apply(this, arguments));
    }

    _createClass(InsuranceSuccess, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var parsed = queryString.parse(window.location.search);
            var data = {
                'Category': 'ConsumerApp', 'Action': 'OpdInsuranceBooked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': parsed.id ? parsed.id : 0, 'event': 'opd-insurance-booked'
            };
            _gtm2.default.sendEvent({ data: data });

            if (_storage2.default.checkAuth()) {
                this.props.getUserProfile(); // to get loggedIn user profile
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_insuranceSuccess2.default, this.props);
        }
    }]);

    return InsuranceSuccess;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    var USER = state.USER;
    var _state$INSURANCE = state.INSURANCE,
        insurnaceData = _state$INSURANCE.insurnaceData,
        LOAD_INSURANCE = _state$INSURANCE.LOAD_INSURANCE,
        selected_plan = _state$INSURANCE.selected_plan,
        self_data_values = _state$INSURANCE.self_data_values,
        insured_member_list = _state$INSURANCE.insured_member_list;

    return {
        insurnaceData: insurnaceData, LOAD_INSURANCE: LOAD_INSURANCE, selected_plan: selected_plan, USER: USER, self_data_values: self_data_values, insured_member_list: insured_member_list
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        getInsuranceMemberList: function getInsuranceMemberList(member_list_id) {
            return dispatch((0, _index.getInsuranceMemberList)(member_list_id));
        },
        updateMemberList: function updateMemberList(member_list, callback) {
            return dispatch((0, _index.updateMemberList)(member_list, callback));
        },
        getUserProfile: function getUserProfile() {
            return dispatch((0, _index.getUserProfile)());
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(InsuranceSuccess);

/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/react-router/es/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-router/es/index.js ***!
  \***********************************************/
/*! exports provided: MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, withRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MemoryRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MemoryRouter */ "./node_modules/react-router/es/MemoryRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return _MemoryRouter__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Prompt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Prompt */ "./node_modules/react-router/es/Prompt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return _Prompt__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Redirect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Redirect */ "./node_modules/react-router/es/Redirect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return _Redirect__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Route */ "./node_modules/react-router/es/Route.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return _Route__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Router */ "./node_modules/react-router/es/Router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _Router__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _StaticRouter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StaticRouter */ "./node_modules/react-router/es/StaticRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return _StaticRouter__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Switch */ "./node_modules/react-router/es/Switch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _Switch__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _generatePath__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./generatePath */ "./node_modules/react-router/es/generatePath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return _generatePath__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _matchPath__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./matchPath */ "./node_modules/react-router/es/matchPath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return _matchPath__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _withRouter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withRouter */ "./node_modules/react-router/es/withRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return _withRouter__WEBPACK_IMPORTED_MODULE_9__["default"]; });






















/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pbnN1cmFuY2UvaW5zdXJhbmNlU3VjY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9pbnN1cmFuY2UvSW5zdXJhbmNlU3VjY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGF0aC1icm93c2VyaWZ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5zdXJhbmNlRmFxIiwicHJvcHMiLCJzdGF0ZSIsIm5vX2Rpc2Vhc2UiLCJkaXNlYXNlX3NlbGVjdGVkIiwidXJsX3N0cmluZyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInVybCIsIlVSTCIsIm1lbWJlcl9saXN0X2lkIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwiZ2V0SW5zdXJhbmNlTWVtYmVyTGlzdCIsIm1lbWJlcl9pZCIsImRpc2Vhc2VfaWQiLCJldmVudCIsImluZGV4T2YiLCJmaWx0ZXIiLCJ4IiwicHVzaCIsInNldFN0YXRlIiwibWVtYmVyX2xpc3QiLCJtZW1iZXJfbGlzdF9uZXciLCJtZW1iZXIiLCJtZW1iZXJfbmV3IiwiYWJjIiwiT2JqZWN0IiwiZW50cmllcyIsImluc3VyZWRfbWVtYmVyX2xpc3QiLCJtZW1iZXJzIiwibWFwIiwia2V5IiwidmFsdWUiLCJtZW0iLCJpZCIsImRpc2Vhc2UiLCJ2YWwiLCJyZXNwb25zZSIsImtleXMiLCJsZW5ndGgiLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJ0ZXh0IiwiZGlzZWFzZV9rZXkiLCJrIiwiZGlzZWFzZXMiLCJkaXNlYSIsInVwZGF0ZU1lbWJlckxpc3QiLCJyZXNwIiwiaGlzdG9yeSIsInNlbGYiLCJpc193b21lbl9vbmx5IiwiZ2VuZGVyIiwicmVsYXRpb24iLCJBU1NFVFNfQkFTRV9VUkwiLCJqdXN0aWZ5Q29udGVudCIsImluc3VyZXJfbG9nbyIsIm1hcmdpbkJvdHRvbSIsInRvZ2dsZURpZWFzZSIsImJpbmQiLCJkaXNlYXNlX3ZhbCIsImlzX2ZlbWFsZV9yZWxhdGVkIiwibWVtYmVyX3ZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiYm9yZGVyVG9wIiwicGFkZGluZ1RvcCIsInZpc2liaWxpdHkiLCJzdWJtaXRQbGFuIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwiUmVhY3QiLCJDb21wb25lbnQiLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJJbnN1cmFuY2VTdWNjZXNzIiwicGFyc2VkIiwicGFyc2UiLCJzZWFyY2giLCJkYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VuZEV2ZW50IiwiU1RPUkFHRSIsImNoZWNrQXV0aCIsImdldFVzZXJQcm9maWxlIiwibWFwU3RhdGVUb1Byb3BzIiwiVVNFUiIsIklOU1VSQU5DRSIsImluc3VybmFjZURhdGEiLCJMT0FEX0lOU1VSQU5DRSIsInNlbGVjdGVkX3BsYW4iLCJzZWxmX2RhdGFfdmFsdWVzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFHTUEsWTs7O0FBQ0wsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDWkEsS0FEWTs7QUFFbEIsUUFBS0MsS0FBTCxHQUFhO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsZUFBWSxLQUxBO0FBTVpDLHFCQUFrQjtBQU5OLEdBQWI7QUFGa0I7QUFZbEI7Ozs7c0NBQ21CO0FBQ25CLE9BQUlDLGFBQWFDLE9BQU9DLFFBQVAsQ0FBZ0JDLElBQWpDO0FBQ0EsT0FBSUMsTUFBTSxJQUFJQyxHQUFKLENBQVFMLFVBQVIsQ0FBVjtBQUNBLE9BQUlNLGlCQUFpQkYsSUFBSUcsWUFBSixDQUFpQkMsR0FBakIsQ0FBcUIsSUFBckIsQ0FBckI7QUFDQSxPQUFJRixtQkFBbUIsSUFBdkIsRUFBNkI7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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3U0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkM7QUFDRjtBQUNWO0FBQ0Y7QUFDTTtBQUNGO0FBQ0o7QUFDRjtBQUNJO0FBQ0Y7QUFDYztBQUNGO0FBQ1Y7QUFDRjtBQUNjO0FBQ0Y7QUFDSjtBQUNGO0FBQ0kiLCJmaWxlIjoiMTIwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBDaGF0UGFuZWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0NoYXRQYW5lbCdcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuXG5cbmNsYXNzIEluc3VyYW5jZUZhcSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdC8vIHNlbGVjdGVkUHJvZmlsZTonJyxcblx0XHRcdC8vIHNlbGVjdGVkX3BsYW5fcHJpY2U6JycsXG5cdFx0XHQvLyBpc19lZGl0OmZhbHNlLFxuXHRcdFx0Ly8gZ3N0OiAnaW5jbHVzaXZlIG9mIDE4JSBHU1QnLFxuXHRcdFx0bm9fZGlzZWFzZTogZmFsc2UsXG5cdFx0XHRkaXNlYXNlX3NlbGVjdGVkOiB7XG5cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dmFyIHVybF9zdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcblx0XHR2YXIgdXJsID0gbmV3IFVSTCh1cmxfc3RyaW5nKTtcblx0XHR2YXIgbWVtYmVyX2xpc3RfaWQgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImlkXCIpO1xuXHRcdGlmIChtZW1iZXJfbGlzdF9pZCAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5wcm9wcy5nZXRJbnN1cmFuY2VNZW1iZXJMaXN0KG1lbWJlcl9saXN0X2lkKSAvLyBnZXQgaW5zdXJlZCBtZW1iZXIgZGV0YWlscyBhbmQgbGlzdCBvZiBkaWVhc2VzKGZhcSdzKVxuXHRcdH1cblx0fVxuXHRoYW5kbGVDaGFuZ2UobWVtYmVyX2lkLCBkaXNlYXNlX2lkLCBldmVudCkge1xuXHRcdGxldCBkaXNlYXNlX3NlbGVjdGVkID0gdGhpcy5zdGF0ZS5kaXNlYXNlX3NlbGVjdGVkXG5cdFx0aWYgKGRpc2Vhc2Vfc2VsZWN0ZWRbbWVtYmVyX2lkXSkge1xuXHRcdFx0aWYgKGRpc2Vhc2Vfc2VsZWN0ZWRbbWVtYmVyX2lkXS5pbmRleE9mKGRpc2Vhc2VfaWQpID4gLTEpIHtcblx0XHRcdFx0ZGlzZWFzZV9zZWxlY3RlZFttZW1iZXJfaWRdID0gZGlzZWFzZV9zZWxlY3RlZFttZW1iZXJfaWRdLmZpbHRlcih4ID0+IHggIT0gZGlzZWFzZV9pZClcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRpc2Vhc2Vfc2VsZWN0ZWRbbWVtYmVyX2lkXS5wdXNoKGRpc2Vhc2VfaWQpXG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRpc2Vhc2Vfc2VsZWN0ZWRbbWVtYmVyX2lkXSA9IFtdXG5cdFx0XHRkaXNlYXNlX3NlbGVjdGVkW21lbWJlcl9pZF0ucHVzaChkaXNlYXNlX2lkKVxuXHRcdH1cblxuXHRcdHRoaXMuc2V0U3RhdGUoeyBkaXNlYXNlX3NlbGVjdGVkOiBkaXNlYXNlX3NlbGVjdGVkIH0pXG5cdH1cblx0dG9nZ2xlRGllYXNlKCkge1xuXHRcdGlmICh0aGlzLnN0YXRlLm5vX2Rpc2Vhc2UpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBub19kaXNlYXNlOiBmYWxzZSB9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgbm9fZGlzZWFzZTogdHJ1ZSB9KVxuXHRcdH1cblx0fVxuXHRzdWJtaXRQbGFuKCkge1xuXHRcdHZhciBtZW1iZXJfbGlzdCA9IFtdXG5cdFx0dmFyIG1lbWJlcl9saXN0X25ldyA9IFtdXG5cdFx0bGV0IG1lbWJlciA9IHt9XG5cdFx0bGV0IG1lbWJlcl9uZXcgPSB7fVxuXHRcdGxldCBhYmMgPSBPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLmluc3VyZWRfbWVtYmVyX2xpc3QubWVtYmVycykubWFwKGZ1bmN0aW9uIChba2V5LCB2YWx1ZV0pIHtcblx0XHRcdGxldCBtZW0gPSB7fVxuXHRcdFx0bWVtLmlkID0gdmFsdWUuaWRcblx0XHRcdG1lbS5kaXNlYXNlID0gW11cblx0XHRcdHRoaXMucHJvcHMuaW5zdXJlZF9tZW1iZXJfbGlzdC5kaXNlYXNlLm1hcCgodmFsKSA9PiB7XG5cdFx0XHRcdG1lbS5kaXNlYXNlLnB1c2goeyBpZDogdmFsLmlkLCByZXNwb25zZTogZmFsc2UgfSlcblxuXHRcdFx0fSlcblx0XHRcdG1lbWJlcl9saXN0LnB1c2gobWVtKVxuXHRcdH0sIHRoaXMpXG5cdFx0aWYgKCF0aGlzLnN0YXRlLm5vX2Rpc2Vhc2UgJiYgT2JqZWN0LmtleXModGhpcy5zdGF0ZS5kaXNlYXNlX3NlbGVjdGVkKS5sZW5ndGggPT0gMCkge1xuXHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBwcm92aWRlIGlucHV0IHdoZXJldmVyIGFwcGxpY2FibGUgb3Igc2VsZWN0ICdOb25lIGZvciBhbGwnIGlmIG5vbmUgb2YgdGhlIGFib3ZlIGlzIGFwcGxpY2FibGUuXCIgfSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmRpc2Vhc2Vfc2VsZWN0ZWQpLmxlbmd0aCA+IDAgJiYgIXRoaXMuc3RhdGUubm9fZGlzZWFzZSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0T2JqZWN0LmVudHJpZXModGhpcy5zdGF0ZS5kaXNlYXNlX3NlbGVjdGVkKS5tYXAoZnVuY3Rpb24gKFtkaXNlYXNlX2tleSwgdmFsdWVdKSB7XG5cdFx0XHRcdFx0XHRtZW1iZXJfbmV3ID0ge31cblx0XHRcdFx0XHRcdG1lbWJlcl9uZXcuZGlzZWFzZSA9IFtdXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdE9iamVjdC5lbnRyaWVzKG1lbWJlcl9saXN0KS5tYXAoZnVuY3Rpb24gKFtrLCB2YWxdKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHZhbC5pZCA9PSBkaXNlYXNlX2tleSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0bWVtYmVyX25ldy5pZCA9IGRpc2Vhc2Vfa2V5XG5cdFx0XHRcdFx0XHRcdFx0XHRPYmplY3QuZW50cmllcyh2YWwuZGlzZWFzZSkubWFwKGZ1bmN0aW9uIChba2V5cywgZGlzZWFzZXNdKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxldCBkaXNlYSA9IGRpc2Vhc2VzLmlkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICh2YWx1ZS5pbmRleE9mKGRpc2VhKSAhPSAtMSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lbWJlcl9uZXcuZGlzZWFzZS5wdXNoKHsgaWQ6IGRpc2VhLCByZXNwb25zZTogdHJ1ZSB9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lbWJlcl9uZXcuZGlzZWFzZS5wdXNoKHsgaWQ6IGRpc2VhLCByZXNwb25zZTogZmFsc2UgfSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRtZW1iZXJfbGlzdF9uZXcucHVzaChtZW1iZXJfbmV3KVxuXHRcdFx0XHRcdH0sIHRoaXMpXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5wcm9wcy51cGRhdGVNZW1iZXJMaXN0KHsgXCJtZW1iZXJzXCI6IG1lbWJlcl9saXN0X25ldyB9LCAocmVzcCkgPT4geyAvLyB1cGRhdGUgbWVtYmVycyBzZWxlY3RlZCBsaXN0XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvY2VydGlmaWNhdGU/c2hvd19jb25nbz10cnVlJylcblx0XHRcdFx0fSlcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5ub19kaXNlYXNlKSB7XG5cdFx0XHRcdHRoaXMucHJvcHMudXBkYXRlTWVtYmVyTGlzdCh7IFwibWVtYmVyc1wiOiBtZW1iZXJfbGlzdCB9LCAocmVzcCkgPT4geyAvLyB1cGRhdGUgbWVtYmVycyBzZWxlY3RlZCBsaXN0XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvY2VydGlmaWNhdGU/c2hvd19jb25nbz10cnVlJylcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGxldCBzZWxmID0gdGhpc1xuXHRcdGxldCBpc193b21lbl9vbmx5ID0gW11cblx0XHRpZiAoT2JqZWN0LmtleXModGhpcy5wcm9wcy5pbnN1cmVkX21lbWJlcl9saXN0KS5sZW5ndGggPiAwKSB7XG5cdFx0XHRpc193b21lbl9vbmx5ID0gdGhpcy5wcm9wcy5pbnN1cmVkX21lbWJlcl9saXN0Lm1lbWJlcnMuZmlsdGVyKHggPT4geC5nZW5kZXIgPT0gJ2YnICYmICh4LnJlbGF0aW9uID09ICdzZWxmJyB8fCB4LnJlbGF0aW9uID09ICdzcG91c2UnKSlcblxuXHRcdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cblx0XHRcdFx0PFByb2ZpbGVIZWFkZXIgc2hvd1BhY2thZ2VTdHJpcD17dHJ1ZX0gLz5cblx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIHBhcmVudC1zZWN0aW9uIGJvb2stYXBwb2ludG1lbnQtc2VjdGlvbiB0ZXh0LWNlbnRlciBjb250YWluZXItdG9wLW1hcmdpblwiPlxuXHRcdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24tbWFyZ2luLWJvdHRvbSBjb25ncmF0cy1zcGFjZVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgY29uZy1tYXJnaW4tYnRtXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29uZ3JhdHVsYXRpb24tc2VjdGlvbiBwYi0wXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb25nLWltZ1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJpbnMtaW5wdXQtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY29uZy5wbmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbmctY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY29uZy1vcm5nLXBhcmFcIj5Db25ncmF0dWxhdGlvbnMhPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY29uZy1ibGstdGV4dFwiPkdyb3VwIE91dC1wYXRpZW50IEluc3VyYW5jZSBwb2xpY3kgaGFzIGJlZW4gaXNzdWVkLiA8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1jYXJkLWhlYWQgcHQtMFwiIHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1uYW1lLWhlYWQgY2VydGlmaWNhdGUtd2lkdGhcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRDb3ZlcmVkIGJ5OlxuXHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImJvcmRlci1yZW1vdmVcIiB3aWR0aD1cIjEwMFwiIHNyYz17dGhpcy5wcm9wcy5pbnN1cmVkX21lbWJlcl9saXN0Lmluc3VyZXJfbG9nb30gLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnNzBweCcgfX0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm5sLXJhZGlvXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtcmFkaW8tdGFibGUtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJpbnMtcmQtZmlzdFwiPkFsbCBzZXQgdG8gZ28hIEp1c3QgYW5zd2VyIHNvbWUgaW1wb3J0YW50IHF1ZXN0aW9ucyByZWdhcmRpbmcgdGhlIGluc3VyZWQgbWVtYmVyKHMpIGFuZCB5b3UgY2FuIGRvd25sb2FkIHRoZSBDT0k8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJpbnMtcmQtc2Vjb25kXCI+RXZlciBkaWFnbm9zZSB3aXRoIHRoZSBmb2xsb3dpbmcgbWVkaWNhbCBkaXNlYXNlPzwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImlucy1yZC10aGlyZFwiPkFsbCBwcmUtZXhpc3RpbmcgY29uZGl0aW9ucyBhcmUgY292ZXJlZCB1bmRlciB0aGUgcG9saWN5IGFuZCBkaXNjbG9zdXJlIHdpbGwgbm90IGFmZmVjdCB0aGUgcG9saWN5IHRlcm1zLjwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1yYWRpby1tYWluLXRhYmxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoZWFkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ciBhbGlnbj1cImNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cImluc3VyYW5jZS1jaGVja2JveGVzIHRleHQtbGVmdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiaW5zLWNoay1ieFwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUubm9fZGlzZWFzZX0gaWQ9XCJ0ZXN0MjFcIiBuYW1lPVwiZnJ1aXQtMVwiIHZhbHVlPVwiXCIgLz48bGFiZWwgb25DbGljaz17dGhpcy50b2dnbGVEaWVhc2UuYmluZCh0aGlzKX0gaHRtbEZvcj1cInRlc3QyMVwiIHN0eWxlPXt7ICdtYXJnaW4nOiAwLCAncGFkZGluZ0xlZnQnOiAwIH19Pk5vbmUgZm9yIGFsbDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e09iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuaW5zdXJlZF9tZW1iZXJfbGlzdC5tZW1iZXJzKS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlXSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPHRoIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIga2V5PXtrZXl9IHN0eWxlPXt7ICd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnIH19PjxwIGRhdGEtaWQ9e3ZhbHVlLmlkfT57dmFsdWUucmVsYXRpb259PC9wPjwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LCB0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RoZWFkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e09iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuaW5zdXJlZF9tZW1iZXJfbGlzdC5kaXNlYXNlKS5tYXAoZnVuY3Rpb24gKFtrZXksIGRpc2Vhc2VfdmFsXSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuICFkaXNlYXNlX3ZhbC5pc19mZW1hbGVfcmVsYXRlZCA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ciBrZXk9e2tleX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPjxwPntkaXNlYXNlX3ZhbC5kaXNlYXNlfTwvcD48L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLmluc3VyZWRfbWVtYmVyX2xpc3QubWVtYmVycykubWFwKGZ1bmN0aW9uIChba2V5LCBtZW1iZXJfdmFsdWVdKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPHRkIGtleT17a2V5fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpb1wiPlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnN1cmFuY2UtY2hlY2tib3hlcyB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLm5vX2Rpc2Vhc2UgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJpbnMtY2hrLWJ4XCIgaWQ9e2tleX0gZGF0YS1wYXJhbT0nZGlzZWFzZV9zZWxlY3RlZCcgbmFtZT17YGRpc2Vhc2VfJHttZW1iZXJfdmFsdWUuaWR9XyR7ZGlzZWFzZV92YWwuaWR9YH0gdmFsdWU9XCJcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmRpc2Vhc2Vfc2VsZWN0ZWRbbWVtYmVyX3ZhbHVlLmlkXSAmJiB0aGlzLnN0YXRlLmRpc2Vhc2Vfc2VsZWN0ZWRbbWVtYmVyX3ZhbHVlLmlkXS5pbmRleE9mKGRpc2Vhc2VfdmFsLmlkKSA+IC0xID8gdHJ1ZSA6IGZhbHNlfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ0ZXN0MjFcIj48L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJpbnMtY2hrLWJ4XCIgaWQ9e2tleX0gZGF0YS1wYXJhbT0nZGlzZWFzZV9zZWxlY3RlZCcgbmFtZT17YGRpc2Vhc2VfJHttZW1iZXJfdmFsdWUuaWR9XyR7ZGlzZWFzZV92YWwuaWR9YH0gdmFsdWU9XCJcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmRpc2Vhc2Vfc2VsZWN0ZWRbbWVtYmVyX3ZhbHVlLmlkXSAmJiB0aGlzLnN0YXRlLmRpc2Vhc2Vfc2VsZWN0ZWRbbWVtYmVyX3ZhbHVlLmlkXS5pbmRleE9mKGRpc2Vhc2VfdmFsLmlkKSA+IC0xID8gdHJ1ZSA6IGZhbHNlfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgbWVtYmVyX3ZhbHVlLmlkLCBkaXNlYXNlX3ZhbC5pZCl9IGh0bWxGb3I9XCJ0ZXN0MjFcIj48L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LCB0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sIHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzX3dvbWVuX29ubHkgJiYgaXNfd29tZW5fb25seS5sZW5ndGggPiAwID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0T2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5pbnN1cmVkX21lbWJlcl9saXN0LmRpc2Vhc2UpLm1hcChmdW5jdGlvbiAoW2tleSwgZGlzZWFzZV92YWxdKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGRpc2Vhc2VfdmFsLmlzX2ZlbWFsZV9yZWxhdGVkID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ciBrZXk9e2tleX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBzdHlsZT17e2JvcmRlclRvcDonMnB4IHNvbGlkICNkOGQ0ZDQnLCBwYWRkaW5nVG9wOiAnMTBweCd9fT48cD57ZGlzZWFzZV92YWwuZGlzZWFzZX08L3A+PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e09iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuaW5zdXJlZF9tZW1iZXJfbGlzdC5tZW1iZXJzKS5tYXAoZnVuY3Rpb24gKFtrZXksIG1lbWJlcl92YWx1ZV0pIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPHRkIGtleT17a2V5fSBzdHlsZT17e2JvcmRlclRvcDonMnB4IHNvbGlkICNkOGQ0ZDQnLCBwYWRkaW5nVG9wOiAnMTBweCd9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnN1cmFuY2UtY2hlY2tib3hlcyB0ZXh0LWNlbnRlclwiIHN0eWxlPXt7IHZpc2liaWxpdHk6IG1lbWJlcl92YWx1ZS5nZW5kZXIgPT0gJ2YnICYmIChtZW1iZXJfdmFsdWUucmVsYXRpb24gPT0gJ3NlbGYnIHx8IG1lbWJlcl92YWx1ZS5yZWxhdGlvbiA9PSAnc3BvdXNlJykgPyAnJyA6ICdoaWRkZW4nIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJpbnMtY2hrLWJ4XCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5kaXNlYXNlfSBpZD17a2V5fSBkYXRhLXBhcmFtPSdkaXNlYXNlX3NlbGVjdGVkJyBuYW1lPXtgZGlzZWFzZV8ke21lbWJlcl92YWx1ZS5pZH1fJHtkaXNlYXNlX3ZhbC5pZH1gfSB2YWx1ZT1cIlwiIGRpc2FibGVkPXt0aGlzLnN0YXRlLm5vX2Rpc2Vhc2UgPyB0cnVlIDogJyd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXt0aGlzLnN0YXRlLmRpc2Vhc2Vfc2VsZWN0ZWRbbWVtYmVyX3ZhbHVlLmlkXSAmJiB0aGlzLnN0YXRlLmRpc2Vhc2Vfc2VsZWN0ZWRbbWVtYmVyX3ZhbHVlLmlkXS5pbmRleE9mKGRpc2Vhc2VfdmFsLmlkKSA+IC0xID8gdHJ1ZSA6IGZhbHNlfSAvPjxsYWJlbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMsIG1lbWJlcl92YWx1ZS5pZCwgZGlzZWFzZV92YWwuaWQpfSBodG1sRm9yPVwidGVzdDIxXCI+PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSwgdGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LCB0aGlzKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICcnfVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0ey8qXG5cdFx0XHRcdFx0aXNfd29tZW5fb25seSAmJiBpc193b21lbl9vbmx5Lmxlbmd0aCA+IDA/XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIiBzdHlsZT17e21hcmdpbkJvdHRvbTonNzBweCd9fT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZubC1yYWRpb1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtcmFkaW8tbWFpbi10YWJsZVwiPlxuXHRcdFx0XHRcdFx0XHQ8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHRcdFx0XHR7T2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5pbnN1cmVkX21lbWJlcl9saXN0LmRpc2Vhc2UpLm1hcChmdW5jdGlvbihba2V5LCBkaXNlYXNlX3ZhbF0pIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGRpc2Vhc2VfdmFsLmlzX2ZlbWFsZV9yZWxhdGVkP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dHIga2V5PXtrZXl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD48cD57ZGlzZWFzZV92YWwuZGlzZWFzZX08L3A+PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7T2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5pbnN1cmVkX21lbWJlcl9saXN0Lm1lbWJlcnMpLm1hcChmdW5jdGlvbihba2V5LCBtZW1iZXJfdmFsdWVdKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDx0ZCBrZXk9e2tleX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnN1cmFuY2UtY2hlY2tib3hlcyB0ZXh0LWNlbnRlclwiIHN0eWxlPXt7dmlzaWJpbGl0eTptZW1iZXJfdmFsdWUuZ2VuZGVyID09ICdmJyAmJiAobWVtYmVyX3ZhbHVlLnJlbGF0aW9uID09ICdzZWxmJyB8fCBtZW1iZXJfdmFsdWUucmVsYXRpb24gPT0gJ3Nwb3VzZScpPycnOidoaWRkZW4nfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJpbnMtY2hrLWJ4XCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5kaXNlYXNlfSBpZD17a2V5fSBkYXRhLXBhcmFtPSdkaXNlYXNlX3NlbGVjdGVkJyBuYW1lPXtgZGlzZWFzZV8ke21lbWJlcl92YWx1ZS5pZH1fJHtkaXNlYXNlX3ZhbC5pZH1gfSB2YWx1ZT1cIlwiIGRpc2FibGVkPXt0aGlzLnN0YXRlLm5vX2Rpc2Vhc2U/dHJ1ZTonJ30gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3RoaXMuc3RhdGUuZGlzZWFzZV9zZWxlY3RlZFttZW1iZXJfdmFsdWUuaWRdICYmIHRoaXMuc3RhdGUuZGlzZWFzZV9zZWxlY3RlZFttZW1iZXJfdmFsdWUuaWRdLmluZGV4T2YoZGlzZWFzZV92YWwuaWQpPi0xP3RydWU6ZmFsc2V9Lz48bGFiZWwgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyxtZW1iZXJfdmFsdWUuaWQsZGlzZWFzZV92YWwuaWQpfSBodG1sRm9yPVwidGVzdDIxXCI+PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sdGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDonJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHRcdFx0XHRcdDwvdGFibGU+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDonJyovfVxuXHRcdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImNvbmdyYXRzLWJ0biB2LWJ0biBwLTMgdi1idG4tcHJpbWFyeSBidG4tbGcgZml4ZWQgaG9yaXpvbnRhbCBib3R0b20gbm8tcm91bmQgYnRuLWxnIHRleHQtbGcgc3RpY2t5LWJ0blwiIG9uQ2xpY2s9e3RoaXMuc3VibWl0UGxhbi5iaW5kKHRoaXMpfT48cCBzdHlsZT17eyBmb250V2VpZ2h0OiAnNTAwJywgZm9udFNpemU6ICcxNXB4JyB9fT5TdWJtaXQgJiBEb3dubG9hZCBDZXJ0ZmljYXRlIG9mIEluc3VyYW5jZTwvcD5cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiA8ZGl2PjwvZGl2PlxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN1cmFuY2VGYXEiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgeyBnZXRJbnN1cmFuY2VNZW1iZXJMaXN0LHVwZGF0ZU1lbWJlckxpc3QsIGdldFVzZXJQcm9maWxlfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IEluc3VyYW5jZVN1Y2Nlc3NDb21wIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5zdXJhbmNlL2luc3VyYW5jZVN1Y2Nlc3MuanMnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcblxuXG5jbGFzcyBJbnN1cmFuY2VTdWNjZXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdPcGRJbnN1cmFuY2VCb29rZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IHBhcnNlZC5pZD9wYXJzZWQuaWQ6MCwgJ2V2ZW50JzogJ29wZC1pbnN1cmFuY2UtYm9va2VkJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgaWYgKFNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0VXNlclByb2ZpbGUoKSAvLyB0byBnZXQgbG9nZ2VkSW4gdXNlciBwcm9maWxlXG4gICAgICAgIH1cbiAgICB9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PEluc3VyYW5jZVN1Y2Nlc3NDb21wIHsuLi50aGlzLnByb3BzfS8+XG5cdFx0XHQpXG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3QgVVNFUiA9IHN0YXRlLlVTRVJcbiAgICBsZXQgeyBpbnN1cm5hY2VEYXRhLCBMT0FEX0lOU1VSQU5DRSwgc2VsZWN0ZWRfcGxhbixzZWxmX2RhdGFfdmFsdWVzLGluc3VyZWRfbWVtYmVyX2xpc3R9ID0gc3RhdGUuSU5TVVJBTkNFXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5zdXJuYWNlRGF0YSxMT0FEX0lOU1VSQU5DRSxzZWxlY3RlZF9wbGFuLFVTRVIsc2VsZl9kYXRhX3ZhbHVlcyxpbnN1cmVkX21lbWJlcl9saXN0XG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRJbnN1cmFuY2VNZW1iZXJMaXN0IDoobWVtYmVyX2xpc3RfaWQpID0+IGRpc3BhdGNoKGdldEluc3VyYW5jZU1lbWJlckxpc3QobWVtYmVyX2xpc3RfaWQpKSxcbiAgICAgICAgdXBkYXRlTWVtYmVyTGlzdCA6KG1lbWJlcl9saXN0LGNhbGxiYWNrKSA9PiBkaXNwYXRjaCh1cGRhdGVNZW1iZXJMaXN0KG1lbWJlcl9saXN0LGNhbGxiYWNrKSksXG4gICAgICAgIGdldFVzZXJQcm9maWxlOiAoKSA9PiBkaXNwYXRjaChnZXRVc2VyUHJvZmlsZSgpKSxcbiAgICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyAsIG1hcERpc3BhdGNoVG9Qcm9wcykoSW5zdXJhbmNlU3VjY2VzcykiLCIvLyAuZGlybmFtZSwgLmJhc2VuYW1lLCBhbmQgLmV4dG5hbWUgbWV0aG9kcyBhcmUgZXh0cmFjdGVkIGZyb20gTm9kZS5qcyB2OC4xMS4xLFxuLy8gYmFja3BvcnRlZCBhbmQgdHJhbnNwbGl0ZWQgd2l0aCBCYWJlbCwgd2l0aCBiYWNrd2FyZHMtY29tcGF0IGZpeGVzXG5cbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyByZXNvbHZlcyAuIGFuZCAuLiBlbGVtZW50cyBpbiBhIHBhdGggYXJyYXkgd2l0aCBkaXJlY3RvcnkgbmFtZXMgdGhlcmVcbi8vIG11c3QgYmUgbm8gc2xhc2hlcywgZW1wdHkgZWxlbWVudHMsIG9yIGRldmljZSBuYW1lcyAoYzpcXCkgaW4gdGhlIGFycmF5XG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcbi8vIHJlbGF0aXZlIGFuZCBhYnNvbHV0ZSBwYXRocylcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5KHBhcnRzLCBhbGxvd0Fib3ZlUm9vdCkge1xuICAvLyBpZiB0aGUgcGF0aCB0cmllcyB0byBnbyBhYm92ZSB0aGUgcm9vdCwgYHVwYCBlbmRzIHVwID4gMFxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gcGFydHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgbGFzdCA9IHBhcnRzW2ldO1xuICAgIGlmIChsYXN0ID09PSAnLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICB9IGVsc2UgaWYgKGxhc3QgPT09ICcuLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICAvLyBpZiB0aGUgcGF0aCBpcyBhbGxvd2VkIHRvIGdvIGFib3ZlIHRoZSByb290LCByZXN0b3JlIGxlYWRpbmcgLi5zXG4gIGlmIChhbGxvd0Fib3ZlUm9vdCkge1xuICAgIGZvciAoOyB1cC0tOyB1cCkge1xuICAgICAgcGFydHMudW5zaGlmdCgnLi4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydHM7XG59XG5cbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcblxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xuICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmVzb2x2ZWRQYXRoID0gcGF0aCArICcvJyArIHJlc29sdmVkUGF0aDtcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbiAgfVxuXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcbiAgLy8gaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKCkgZmFpbHMpXG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHJlc29sdmVkUGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIHJldHVybiAoKHJlc29sdmVkQWJzb2x1dGUgPyAnLycgOiAnJykgKyByZXNvbHZlZFBhdGgpIHx8ICcuJztcbn07XG5cbi8vIHBhdGgubm9ybWFsaXplKHBhdGgpXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdmFyIGlzQWJzb2x1dGUgPSBleHBvcnRzLmlzQWJzb2x1dGUocGF0aCksXG4gICAgICB0cmFpbGluZ1NsYXNoID0gc3Vic3RyKHBhdGgsIC0xKSA9PT0gJy8nO1xuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIGlmICghcGF0aCAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHBhdGggPSAnLic7XG4gIH1cbiAgaWYgKHBhdGggJiYgdHJhaWxpbmdTbGFzaCkge1xuICAgIHBhdGggKz0gJy8nO1xuICB9XG5cbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmpvaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBhdGhzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgcmV0dXJuIGV4cG9ydHMubm9ybWFsaXplKGZpbHRlcihwYXRocywgZnVuY3Rpb24ocCwgaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHAgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgICByZXR1cm4gcDtcbiAgfSkuam9pbignLycpKTtcbn07XG5cblxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xuICBmcm9tID0gZXhwb3J0cy5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcbiAgdG8gPSBleHBvcnRzLnJlc29sdmUodG8pLnN1YnN0cigxKTtcblxuICBmdW5jdGlvbiB0cmltKGFycikge1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgZm9yICg7IHN0YXJ0IDwgYXJyLmxlbmd0aDsgc3RhcnQrKykge1xuICAgICAgaWYgKGFycltzdGFydF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgZW5kID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xuICAgICAgaWYgKGFycltlbmRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxKTtcbiAgfVxuXG4gIHZhciBmcm9tUGFydHMgPSB0cmltKGZyb20uc3BsaXQoJy8nKSk7XG4gIHZhciB0b1BhcnRzID0gdHJpbSh0by5zcGxpdCgnLycpKTtcblxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xuICB2YXIgc2FtZVBhcnRzTGVuZ3RoID0gbGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xuICBmb3IgKHZhciBpID0gc2FtZVBhcnRzTGVuZ3RoOyBpIDwgZnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcbiAgfVxuXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XG5cbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJy8nKTtcbn07XG5cbmV4cG9ydHMuc2VwID0gJy8nO1xuZXhwb3J0cy5kZWxpbWl0ZXIgPSAnOic7XG5cbmV4cG9ydHMuZGlybmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcuJztcbiAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoMCk7XG4gIHZhciBoYXNSb290ID0gY29kZSA9PT0gNDcgLyovKi87XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMTsgLS1pKSB7XG4gICAgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBlbmQgPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3JcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gaGFzUm9vdCA/ICcvJyA6ICcuJztcbiAgaWYgKGhhc1Jvb3QgJiYgZW5kID09PSAxKSB7XG4gICAgLy8gcmV0dXJuICcvLyc7XG4gICAgLy8gQmFja3dhcmRzLWNvbXBhdCBmaXg6XG4gICAgcmV0dXJuICcvJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZSgwLCBlbmQpO1xufTtcblxuZnVuY3Rpb24gYmFzZW5hbWUocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuXG4gIHZhciBzdGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIHZhciBpO1xuXG4gIGZvciAoaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICBpZiAocGF0aC5jaGFyQ29kZUF0KGkpID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIHBhdGggY29tcG9uZW50XG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gJyc7XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0LCBlbmQpO1xufVxuXG4vLyBVc2VzIGEgbWl4ZWQgYXBwcm9hY2ggZm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5LCBhcyBleHQgYmVoYXZpb3IgY2hhbmdlZFxuLy8gaW4gbmV3IE5vZGUuanMgdmVyc2lvbnMsIHNvIG9ubHkgYmFzZW5hbWUoKSBhYm92ZSBpcyBiYWNrcG9ydGVkIGhlcmVcbmV4cG9ydHMuYmFzZW5hbWUgPSBmdW5jdGlvbiAocGF0aCwgZXh0KSB7XG4gIHZhciBmID0gYmFzZW5hbWUocGF0aCk7XG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIGY7XG59O1xuXG5leHBvcnRzLmV4dG5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICB2YXIgc3RhcnREb3QgPSAtMTtcbiAgdmFyIHN0YXJ0UGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIC8vIFRyYWNrIHRoZSBzdGF0ZSBvZiBjaGFyYWN0ZXJzIChpZiBhbnkpIHdlIHNlZSBiZWZvcmUgb3VyIGZpcnN0IGRvdCBhbmRcbiAgLy8gYWZ0ZXIgYW55IHBhdGggc2VwYXJhdG9yIHdlIGZpbmRcbiAgdmFyIHByZURvdFN0YXRlID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnRQYXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIGV4dGVuc2lvblxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDQ2IC8qLiovKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IGRvdCwgbWFyayBpdCBhcyB0aGUgc3RhcnQgb2Ygb3VyIGV4dGVuc2lvblxuICAgICAgICBpZiAoc3RhcnREb3QgPT09IC0xKVxuICAgICAgICAgIHN0YXJ0RG90ID0gaTtcbiAgICAgICAgZWxzZSBpZiAocHJlRG90U3RhdGUgIT09IDEpXG4gICAgICAgICAgcHJlRG90U3RhdGUgPSAxO1xuICAgIH0gZWxzZSBpZiAoc3RhcnREb3QgIT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGFuZCBub24tcGF0aCBzZXBhcmF0b3IgYmVmb3JlIG91ciBkb3QsIHNvIHdlIHNob3VsZFxuICAgICAgLy8gaGF2ZSBhIGdvb2QgY2hhbmNlIGF0IGhhdmluZyBhIG5vbi1lbXB0eSBleHRlbnNpb25cbiAgICAgIHByZURvdFN0YXRlID0gLTE7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXJ0RG90ID09PSAtMSB8fCBlbmQgPT09IC0xIHx8XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGNoYXJhY3RlciBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGRvdFxuICAgICAgcHJlRG90U3RhdGUgPT09IDAgfHxcbiAgICAgIC8vIFRoZSAocmlnaHQtbW9zdCkgdHJpbW1lZCBwYXRoIGNvbXBvbmVudCBpcyBleGFjdGx5ICcuLidcbiAgICAgIHByZURvdFN0YXRlID09PSAxICYmIHN0YXJ0RG90ID09PSBlbmQgLSAxICYmIHN0YXJ0RG90ID09PSBzdGFydFBhcnQgKyAxKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0RG90LCBlbmQpO1xufTtcblxuZnVuY3Rpb24gZmlsdGVyICh4cywgZikge1xuICAgIGlmICh4cy5maWx0ZXIpIHJldHVybiB4cy5maWx0ZXIoZik7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGYoeHNbaV0sIGksIHhzKSkgcmVzLnB1c2goeHNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyBTdHJpbmcucHJvdG90eXBlLnN1YnN0ciAtIG5lZ2F0aXZlIGluZGV4IGRvbid0IHdvcmsgaW4gSUU4XG52YXIgc3Vic3RyID0gJ2FiJy5zdWJzdHIoLTEpID09PSAnYidcbiAgICA/IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHsgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbikgfVxuICAgIDogZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikge1xuICAgICAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IHN0ci5sZW5ndGggKyBzdGFydDtcbiAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbik7XG4gICAgfVxuO1xuIiwiaW1wb3J0IF9NZW1vcnlSb3V0ZXIgZnJvbSBcIi4vTWVtb3J5Um91dGVyXCI7XG5leHBvcnQgeyBfTWVtb3J5Um91dGVyIGFzIE1lbW9yeVJvdXRlciB9O1xuaW1wb3J0IF9Qcm9tcHQgZnJvbSBcIi4vUHJvbXB0XCI7XG5leHBvcnQgeyBfUHJvbXB0IGFzIFByb21wdCB9O1xuaW1wb3J0IF9SZWRpcmVjdCBmcm9tIFwiLi9SZWRpcmVjdFwiO1xuZXhwb3J0IHsgX1JlZGlyZWN0IGFzIFJlZGlyZWN0IH07XG5pbXBvcnQgX1JvdXRlIGZyb20gXCIuL1JvdXRlXCI7XG5leHBvcnQgeyBfUm91dGUgYXMgUm91dGUgfTtcbmltcG9ydCBfUm91dGVyIGZyb20gXCIuL1JvdXRlclwiO1xuZXhwb3J0IHsgX1JvdXRlciBhcyBSb3V0ZXIgfTtcbmltcG9ydCBfU3RhdGljUm91dGVyIGZyb20gXCIuL1N0YXRpY1JvdXRlclwiO1xuZXhwb3J0IHsgX1N0YXRpY1JvdXRlciBhcyBTdGF0aWNSb3V0ZXIgfTtcbmltcG9ydCBfU3dpdGNoIGZyb20gXCIuL1N3aXRjaFwiO1xuZXhwb3J0IHsgX1N3aXRjaCBhcyBTd2l0Y2ggfTtcbmltcG9ydCBfZ2VuZXJhdGVQYXRoIGZyb20gXCIuL2dlbmVyYXRlUGF0aFwiO1xuZXhwb3J0IHsgX2dlbmVyYXRlUGF0aCBhcyBnZW5lcmF0ZVBhdGggfTtcbmltcG9ydCBfbWF0Y2hQYXRoIGZyb20gXCIuL21hdGNoUGF0aFwiO1xuZXhwb3J0IHsgX21hdGNoUGF0aCBhcyBtYXRjaFBhdGggfTtcbmltcG9ydCBfd2l0aFJvdXRlciBmcm9tIFwiLi93aXRoUm91dGVyXCI7XG5leHBvcnQgeyBfd2l0aFJvdXRlciBhcyB3aXRoUm91dGVyIH07Il0sInNvdXJjZVJvb3QiOiIifQ==