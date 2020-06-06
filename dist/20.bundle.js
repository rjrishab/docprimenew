(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./dev/js/components/commons/Loader/Loader.js":
/*!****************************************************!*\
  !*** ./dev/js/components/commons/Loader/Loader.js ***!
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

var Loader = function (_React$Component) {
    _inherits(Loader, _React$Component);

    function Loader(props) {
        _classCallCheck(this, Loader);

        return _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).call(this, props));
    }

    _createClass(Loader, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                { className: this.props.classType || "loaderCircular" },
                _react2.default.createElement("div", { className: "dp-loader" }),
                this.props.iFramePopup ? _react2.default.createElement(
                    "p",
                    { className: "fw-500 mrt-10" },
                    "Redirecting you to Pharmeasy website..."
                ) : ''
            );
        }
    }]);

    return Loader;
}(_react2.default.Component);

exports.default = Loader;

/***/ }),

/***/ "./dev/js/components/commons/Loader/index.js":
/*!***************************************************!*\
  !*** ./dev/js/components/commons/Loader/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Loader = __webpack_require__(/*! ./Loader */ "./dev/js/components/commons/Loader/Loader.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Loader2.default;

/***/ }),

/***/ "./dev/js/components/insurance/insuranceCommonSection.js":
/*!***************************************************************!*\
  !*** ./dev/js/components/insurance/insuranceCommonSection.js ***!
  \***************************************************************/
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsuranceCommon = function (_React$Component) {
	_inherits(InsuranceCommon, _React$Component);

	function InsuranceCommon(props) {
		_classCallCheck(this, InsuranceCommon);

		var _this = _possibleConstructorReturn(this, (InsuranceCommon.__proto__ || Object.getPrototypeOf(InsuranceCommon)).call(this, props));

		_this.state = {
			selectedProfile: '',
			selected_plan_price: '',
			toggle: 'one'

		};
		return _this;
	}

	_createClass(InsuranceCommon, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var self = this;
			this.setState(_extends({ selectedProfile: this.props.USER.defaultProfile, selected_plan_price: this.props.selected_plan.amount }, self.props.self_data_values[this.props.USER.defaultProfile]));
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'widget mrb-10' },
					_react2.default.createElement(
						'div',
						{ className: 'ins-card-head' },
						_react2.default.createElement(
							'div',
							{ className: 'ins-name-head-div d-flex align-items-start' },
							_react2.default.createElement('img', { width: '120', src: this.props.insurnaceData['insurance'][0].logo }),
							_react2.default.createElement(
								'p',
								{ className: 'fw-500 mrt-10' },
								'Group Out-patient Insurance'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'ins-pdf-dwnload-div d-flex align-items-center' },
							_react2.default.createElement(
								'a',
								{ href: this.props.insurnaceData['insurance'][0].insurer_document, download: true, target: '_blank' },
								_react2.default.createElement('img', { src: "/assets" + "/img/pdf-dwn.png" })
							),
							_react2.default.createElement(
								'span',
								{ className: 'fw-500' },
								'Policy Details'
							)
						)
					),
					!this.props.isSelectPlan ? _react2.default.createElement(
						'div',
						{ className: 'mt-0', style: { padding: '0 4px 10px' } },
						_react2.default.createElement(
							'div',
							{ className: 'd-flex align-items-start' },
							_react2.default.createElement(
								'div',
								{ className: 'd-flex ins-form-info align-items-center text-center' },
								_react2.default.createElement(
									'p',
									{ className: 'fw-500 mrb-10' },
									'Coverage (1 Year)'
								),
								_react2.default.createElement(
									'p',
									{ className: 'fw-500' },
									this.props.selected_plan.name
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'd-flex ins-form-info align-items-center text-center' },
								_react2.default.createElement(
									'p',
									{ className: 'fw-500 mrb-10' },
									'Annual Premium'
								),
								_react2.default.createElement(
									'p',
									{ className: 'fw-500' },
									'\u20B9 ',
									this.props.selected_plan.amount
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'mrt-10', style: { cursor: 'pointer', paddingLeft: 5 }, onClick: function onClick() {
									_this2.props.is_edit ? _this2.props.history.push('/insurance/insurance-plan-view') : _this2.props.history.push('/insurance/insurance-user-details');
								} },
							_react2.default.createElement(
								'p',
								{ className: 'fw-500 text-primary' },
								this.props.is_edit ? 'Select another plan' : 'Edit'
							)
						)
					) : ''
					// <table className="table table-bordered insurance-tbl insurance-checkboxes">
					// 	<thead>
					// 		<tr>
					// 			<th className="tbl-first-head"><p>Coverage (1 Year)</p></th>
					// 			<th className="tbl-second-head"><p>Annual Premium</p></th>
					// 		</tr>
					// 	</thead>
					// 	<tbody>
					// 		<tr>
					// 			<td><p className="ins-dtls-members-edit">{this.props.is_edit?'Change Insured Plan':'Insured Member Details'}   
					// 			<span style={{ 'cursor': 'pointer' }} onClick={()=>{this.props.is_edit?this.props.history.push('/insurance/insurance-plans'):this.props.history.push('/insurance/insurance-user-details')}}>EDIT
					// 			</span></p></td>
					// 			<td></td>
					// 		</tr>
					// 		<tr>
					// 			<td>
					// 				<label className="ck-bx" htmlform="test11" style={{'fontWeight': '400', 'fontSsize': '14'}}>{this.props.selected_plan.name}
					// 				<input type="checkbox" defaultChecked className="ins-chk-bx" value="" id="test11" name="fruit-1" />
					// 				<span className="checkmark"></span></label>
					// 			</td>

					// 			<td><span>₹ {this.props.selected_plan.amount}</span></td>
					// 		</tr>
					// 	</tbody>
					// </table>

				),
				_react2.default.createElement(
					'div',
					{ className: 'ins-status-container' },
					_react2.default.createElement(
						'div',
						{ className: 'navigation_menu', id: '' },
						_react2.default.createElement(
							'ul',
							{ className: 'navigation_tabs', id: '' },
							_react2.default.createElement(
								'li',
								{ className: 'tab_inactive' },
								_react2.default.createElement(
									'a',
									{ href: '#' },
									'Choose Your Plan'
								)
							),
							_react2.default.createElement(
								'li',
								{ className: this.props.isSelectPlan ? '' : 'tab_inactive' },
								_react2.default.createElement(
									'a',
									{ href: '#' },
									'Fill Member Details'
								)
							),
							_react2.default.createElement(
								'li',
								{ className: 'tab_disabled' },
								_react2.default.createElement(
									'a',
									{ href: '#' },
									'Payment'
								)
							)
						)
					)
				)
			);
		}
	}]);

	return InsuranceCommon;
}(_react2.default.Component);

exports.default = InsuranceCommon;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvaW5zdXJhbmNlL2luc3VyYW5jZUNvbW1vblNlY3Rpb24uanMiXSwibmFtZXMiOlsiTG9hZGVyIiwicHJvcHMiLCJjbGFzc1R5cGUiLCJpRnJhbWVQb3B1cCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiSW5zdXJhbmNlQ29tbW9uIiwic3RhdGUiLCJzZWxlY3RlZFByb2ZpbGUiLCJzZWxlY3RlZF9wbGFuX3ByaWNlIiwidG9nZ2xlIiwic2VsZiIsInNldFN0YXRlIiwiVVNFUiIsImRlZmF1bHRQcm9maWxlIiwic2VsZWN0ZWRfcGxhbiIsImFtb3VudCIsInNlbGZfZGF0YV92YWx1ZXMiLCJpbnN1cm5hY2VEYXRhIiwibG9nbyIsImluc3VyZXJfZG9jdW1lbnQiLCJBU1NFVFNfQkFTRV9VUkwiLCJpc1NlbGVjdFBsYW4iLCJwYWRkaW5nIiwibmFtZSIsImN1cnNvciIsInBhZGRpbmdMZWZ0IiwiaXNfZWRpdCIsImhpc3RvcnkiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU1BLE07OztBQUNGLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsK0dBQ1RBLEtBRFM7QUFFbEI7Ozs7aUNBRVE7O0FBRUwsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVcsS0FBS0EsS0FBTCxDQUFXQyxTQUFYLElBQXdCLGdCQUF4QztBQUNJLHVEQUFLLFdBQVUsV0FBZixHQURKO0FBR1EscUJBQUtELEtBQUwsQ0FBV0UsV0FBWCxHQUNJO0FBQUE7QUFBQSxzQkFBRyxXQUFVLGVBQWI7QUFBQTtBQUFBLGlCQURKLEdBQytFO0FBSnZGLGFBREo7QUFTSDs7OztFQWhC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QUREO0FBWEQsTUFERCxHQWVVO0FBQ1Q7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUE3REYsS0FERDtBQW1IQztBQUFBO0FBQUEsT0FBSyxXQUFVLHNCQUFmO0FBQ0M7QUFBQTtBQUFBLFFBQUssV0FBVSxpQkFBZixFQUFpQyxJQUFHLEVBQXBDO0FBQ0M7QUFBQTtBQUFBLFNBQUksV0FBVSxpQkFBZCxFQUFnQyxJQUFHLEVBQW5DO0FBQ0M7QUFBQTtBQUFBLFVBQUksV0FBVSxjQUFkO0FBQ0M7QUFBQTtBQUFBLFdBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQURELFFBREQ7QUFJQztBQUFBO0FBQUEsVUFBSSxXQUFXLEtBQUsxQixLQUFMLENBQVdxQixZQUFYLEdBQXdCLEVBQXhCLEdBQTJCLGNBQTFDO0FBQ0M7QUFBQTtBQUFBLFdBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQURELFFBSkQ7QUFPQztBQUFBO0FBQUEsVUFBSSxXQUFVLGNBQWQ7QUFDQztBQUFBO0FBQUEsV0FBRyxNQUFLLEdBQVI7QUFBQTtBQUFBO0FBREQ7QUFQRDtBQUREO0FBREQ7QUFuSEQsSUFEQTtBQW9JQzs7OztFQW5KMEJsQixnQkFBTUMsUzs7a0JBcUpyQkMsZSIsImZpbGUiOiIyMC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBMb2FkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NUeXBlIHx8IFwibG9hZGVyQ2lyY3VsYXJcIn0gPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHAtbG9hZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlGcmFtZVBvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMTBcIj5SZWRpcmVjdGluZyB5b3UgdG8gUGhhcm1lYXN5IHdlYnNpdGUuLi48L3A+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIiwiaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBJbnN1cmFuY2VDb21tb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBcdHNlbGVjdGVkUHJvZmlsZTonJyxcbiAgICAgICAgXHRzZWxlY3RlZF9wbGFuX3ByaWNlOicnLFxuICAgICAgICBcdHRvZ2dsZTogJ29uZSdcblxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgXHRsZXQgc2VsZiA9IHRoaXNcbiAgICBcdHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkUHJvZmlsZTp0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGUsIHNlbGVjdGVkX3BsYW5fcHJpY2U6dGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLmFtb3VudCwgLi4uc2VsZi5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzW3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV19KVxuICAgIH1cblx0cmVuZGVyKCl7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTEwXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtY2FyZC1oZWFkXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1uYW1lLWhlYWQtZGl2IGQtZmxleCBhbGlnbi1pdGVtcy1zdGFydFwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHdpZHRoPVwiMTIwXCIgc3JjPXt0aGlzLnByb3BzLmluc3VybmFjZURhdGFbJ2luc3VyYW5jZSddWzBdLmxvZ299IC8+XG5cdFx0XHRcdFx0XHRcdHsvKjxwPlxuXHRcdFx0XHRcdFx0XHRcdE9QRCBJbnN1cmFuY2UgYnkgPHNwYW4+e3RoaXMucHJvcHMuaW5zdXJuYWNlRGF0YVsnaW5zdXJhbmNlJ11bMF0ubmFtZX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvcD4qL31cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0xMFwiPlxuXHRcdFx0XHRcdFx0XHRcdEdyb3VwIE91dC1wYXRpZW50IEluc3VyYW5jZVxuXHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLXBkZi1kd25sb2FkLWRpdiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9e3RoaXMucHJvcHMuaW5zdXJuYWNlRGF0YVsnaW5zdXJhbmNlJ11bMF0uaW5zdXJlcl9kb2N1bWVudH0gZG93bmxvYWQgdGFyZ2V0PVwiX2JsYW5rXCIgPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BkZi1kd24ucG5nXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0UG9saWN5IERldGFpbHNcblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0IXRoaXMucHJvcHMuaXNTZWxlY3RQbGFuP1xuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm10LTBcIiBzdHlsZT17e3BhZGRpbmc6JzAgNHB4IDEwcHgnfX0gPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLXN0YXJ0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBpbnMtZm9ybS1pbmZvIGFsaWduLWl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJiLTEwXCI+Q292ZXJhZ2UgKDEgWWVhcik8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPnt0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4ubmFtZX08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGlucy1mb3JtLWluZm8gYWxpZ24taXRlbXMtY2VudGVyIHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcmItMTBcIj5Bbm51YWwgUHJlbWl1bTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+4oK5IHt0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4uYW1vdW50fTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibXJ0LTEwXCIgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInLCBwYWRkaW5nTGVmdDo1fX0gb25DbGljaz17KCk9Pnt0aGlzLnByb3BzLmlzX2VkaXQ/dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvaW5zdXJhbmNlLXBsYW4tdmlldycpOnRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaW5zdXJhbmNlL2luc3VyYW5jZS11c2VyLWRldGFpbHMnKX19PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtcHJpbWFyeVwiPnt0aGlzLnByb3BzLmlzX2VkaXQ/J1NlbGVjdCBhbm90aGVyIHBsYW4nOidFZGl0J308L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PiA6ICcnXG5cdFx0XHRcdFx0XHRcdC8vIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCBpbnN1cmFuY2UtdGJsIGluc3VyYW5jZS1jaGVja2JveGVzXCI+XG5cdFx0XHRcdFx0XHQvLyBcdDx0aGVhZD5cblx0XHRcdFx0XHRcdC8vIFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHQvLyBcdFx0XHQ8dGggY2xhc3NOYW1lPVwidGJsLWZpcnN0LWhlYWRcIj48cD5Db3ZlcmFnZSAoMSBZZWFyKTwvcD48L3RoPlxuXHRcdFx0XHRcdFx0Ly8gXHRcdFx0PHRoIGNsYXNzTmFtZT1cInRibC1zZWNvbmQtaGVhZFwiPjxwPkFubnVhbCBQcmVtaXVtPC9wPjwvdGg+XG5cdFx0XHRcdFx0XHQvLyBcdFx0PC90cj5cblx0XHRcdFx0XHRcdC8vIFx0PC90aGVhZD5cblx0XHRcdFx0XHRcdC8vIFx0PHRib2R5PlxuXHRcdFx0XHRcdFx0Ly8gXHRcdDx0cj5cblx0XHRcdFx0XHRcdC8vIFx0XHRcdDx0ZD48cCBjbGFzc05hbWU9XCJpbnMtZHRscy1tZW1iZXJzLWVkaXRcIj57dGhpcy5wcm9wcy5pc19lZGl0PydDaGFuZ2UgSW5zdXJlZCBQbGFuJzonSW5zdXJlZCBNZW1iZXIgRGV0YWlscyd9ICAgXG5cdFx0XHRcdFx0XHQvLyBcdFx0XHQ8c3BhbiBzdHlsZT17eyAnY3Vyc29yJzogJ3BvaW50ZXInIH19IG9uQ2xpY2s9eygpPT57dGhpcy5wcm9wcy5pc19lZGl0P3RoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaW5zdXJhbmNlL2luc3VyYW5jZS1wbGFucycpOnRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaW5zdXJhbmNlL2luc3VyYW5jZS11c2VyLWRldGFpbHMnKX19PkVESVRcblx0XHRcdFx0XHRcdC8vIFx0XHRcdDwvc3Bhbj48L3A+PC90ZD5cblx0XHRcdFx0XHRcdC8vIFx0XHRcdDx0ZD48L3RkPlxuXHRcdFx0XHRcdFx0Ly8gXHRcdDwvdHI+XG5cdFx0XHRcdFx0XHQvLyBcdFx0PHRyPlxuXHRcdFx0XHRcdFx0Ly8gXHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0Ly8gXHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnhcIiBodG1sZm9ybT1cInRlc3QxMVwiIHN0eWxlPXt7J2ZvbnRXZWlnaHQnOiAnNDAwJywgJ2ZvbnRTc2l6ZSc6ICcxNCd9fT57dGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLm5hbWV9XG5cdFx0XHRcdFx0XHQvLyBcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBkZWZhdWx0Q2hlY2tlZCBjbGFzc05hbWU9XCJpbnMtY2hrLWJ4XCIgdmFsdWU9XCJcIiBpZD1cInRlc3QxMVwiIG5hbWU9XCJmcnVpdC0xXCIgLz5cblx0XHRcdFx0XHRcdC8vIFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCI+PC9zcGFuPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQvLyBcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQvLyBcdFx0XHQ8dGQ+PHNwYW4+4oK5IHt0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4uYW1vdW50fTwvc3Bhbj48L3RkPlxuXHRcdFx0XHRcdFx0Ly8gXHRcdDwvdHI+XG5cdFx0XHRcdFx0XHQvLyBcdDwvdGJvZHk+XG5cdFx0XHRcdFx0XHQvLyA8L3RhYmxlPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR7Lypcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaXNTZWxlY3RQbGFuP1xuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtc3dpY2gtdGFicy1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtdGFic1wiPlxuXHRcdFx0XHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBvbkNsaWNrPXsoKT0+IHRoaXMuc2V0U3RhdGUoe3RvZ2dsZTonb25lJ30pfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnRvZ2dsZSA9PSBcIm9uZVwiPydhY3RpdmUnOidpbnMtdGFiLWluYWN0aXZlJ30gPlNhbGllbnQgRmVhdHVyZXM8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIG9uQ2xpY2s9eygpPT4gdGhpcy5zZXRTdGF0ZSh7dG9nZ2xlOid0d28nfSl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e3RoaXMuc3RhdGUudG9nZ2xlID09IFwidHdvXCI/J2FjdGl2ZSAnOidpbnMtdGFiLWluYWN0aXZlJ30gPldoYXQncyBub3QgQ292ZXJlZD88L3A+PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtdGFicy1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e3BhZGRpbmdCb3R0b206MTB9fT5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLnRvZ2dsZSA9PSBcIm9uZVwiP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRPYmplY3QudmFsdWVzKHRoaXMucHJvcHMuaW5zdXJuYWNlRGF0YVsnaW5zdXJhbmNlJ11bMF0ucGxhbnMpLmZpbHRlcih4PT54LmlkPT10aGlzLnByb3BzLmlzX2NoZWNrZWQpLm1hcCgoc2VsZWN0ZWRfcGxhbixpKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuICg8dWwga2V5PXtpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7c2VsZWN0ZWRfcGxhbi5jb250ZW50WydzYWxpZW50X2ZlYXR1cmVzJ10ubWFwKChyZXN1bHQsIGkpID0+IHsgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8bGkga2V5PXtpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+e3Jlc3VsdH08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+fSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC91bD4pXHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6T2JqZWN0LnZhbHVlcyh0aGlzLnByb3BzLmluc3VybmFjZURhdGFbJ2luc3VyYW5jZSddWzBdLnBsYW5zKS5maWx0ZXIoeD0+eC5pZD09dGhpcy5wcm9wcy5pc19jaGVja2VkKS5tYXAoKHNlbGVjdGVkX3BsYW4saSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoPHVsIGtleT17aX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3NlbGVjdGVkX3BsYW4uY29udGVudFsnd2hhdHNfbm90X2NvdmVyZWQnXS5tYXAoKHJlc3VsdCwgaSkgPT4geyBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPGxpIGtleT17aX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+e3Jlc3VsdH08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT59KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdWw+KVx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSkgXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgfVxuXHRcdFx0XHRcdFx0XHQgICAgICAgIHt0aGlzLnN0YXRlLnRvZ2dsZSA9PSAnb25lJz9cblx0XHRcdFx0XHRcdFx0ICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsYWxpZ25JdGVtczonY2VudGVyJyxqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2Vlbid9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgc3R5bGU9e3twYWRkaW5nTGVmdDogJzEycHgnLGZvbnRXZWlnaHQ6ICc1MDAnLGZvbnRTaXplOiAnMTJweCcsY29sb3I6JyNmNzg2MzEnLHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxjdXJzb3I6ICdwb2ludGVyJ319IGhyZWY9e3RoaXMucHJvcHMuaW5zdXJuYWNlRGF0YVsnaW5zdXJhbmNlJ11bMF0uaW5zdXJlcl9kb2N1bWVudH0gZG93bmxvYWQgdGFyZ2V0PVwiX2JsYW5rXCIgaWQ9XCJ0ZXJtc19jb25kaXRpb25cIj5UJkMgYXBwbHk8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OiAnMTJweCcsZm9udFdlaWdodDogJzUwMCcsZm9udFNpemU6ICcxMnB4Jyxjb2xvcjonI2Y3ODYzMScsdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLGN1cnNvcjogJ3BvaW50ZXInfX0gaHJlZj0nL2luc3VyYW5jZS9uZXR3b3JrJyBvbkNsaWNrPXsoZSk9Pntcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvbmV0d29yaycpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PlZpZXcgTmV0d29yazwvYT5cblx0XHRcdFx0XHRcdFx0ICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHRcdFx0ICAgICAgICA6Jydcblx0XHRcdFx0XHRcdFx0ICAgICAgICB9XHRcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ6Jydcblx0XHRcdFx0XHQqL31cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLXN0YXR1cy1jb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25fbWVudVwiIGlkPVwiXCI+XG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibmF2aWdhdGlvbl90YWJzXCIgaWQ9XCJcIj5cblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cInRhYl9pbmFjdGl2ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+Q2hvb3NlIFlvdXIgUGxhbjwvYT5cblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5pc1NlbGVjdFBsYW4/Jyc6J3RhYl9pbmFjdGl2ZSd9PlxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+RmlsbCBNZW1iZXIgRGV0YWlsczwvYT5cblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cInRhYl9kaXNhYmxlZFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+UGF5bWVudDwvYT5cblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+KVx0XG5cdFx0XHR9XG59XG5leHBvcnQgZGVmYXVsdCBJbnN1cmFuY2VDb21tb24iXSwic291cmNlUm9vdCI6IiJ9