exports.ids = [8];
exports.modules = {

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Loader extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    render() {

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
}

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

/***/ "./dev/js/components/commons/commonVipGoldBadge.js":
/*!*********************************************************!*\
  !*** ./dev/js/components/commons/commonVipGoldBadge.js ***!
  \*********************************************************/
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

// let is_labopd_enable_for_vip = is_vip_enabled
//         let is_labopd_enable_for_gold = is_gold
//         let is_vip_member = false
//         let is_gold_member = false
//         let covered_under_vip = false

exports.default = props => {
	let { is_labopd_enable_for_vip, is_labopd_enable_for_gold, is_vip_member, is_gold_member, covered_under_vip, vip_data, discounted_price, mrp, enabled_for_hospital_booking, is_doc, is_package, deal_price } = props;
	let vip = vip_data;
	let show_deal_price = vip.is_labopd_enable_for_gold ? vip.vip_gold_price + vip.vip_convenience_amount : discounted_price;
	let gold_price = vip.vip_convenience_amount + vip.vip_gold_price;
	//let hide_gold_widget = gold_price > deal_price

	return _react2.default.createElement(
		_react2.default.Fragment,
		null,
		//for Vip Gold Purchase User
		is_gold_member && covered_under_vip && _react2.default.createElement(
			_react2.default.Fragment,
			null,
			_react2.default.createElement(
				'div',
				{ className: 'text-right mb-2' },
				_react2.default.createElement('img', { className: 'vip-main-ico img-fluid', src: "/assets" + '/img/gold-sm.png' })
			)
		),
		//for Vip Purchase User
		is_vip_member && covered_under_vip && !is_gold_member && _react2.default.createElement(
			_react2.default.Fragment,
			null,
			_react2.default.createElement(
				'div',
				{ className: 'text-right mb-2' },
				_react2.default.createElement('img', { className: 'vip-main-ico img-fluid', src: "/assets" + '/img/viplog.png' })
			)
		),
		//for gold or vip enabled user
		(is_gold_member || is_vip_member) && covered_under_vip && _react2.default.createElement(
			'p',
			{ className: 'cst-doc-price' },
			'\u20B9 ',
			vip.vip_amount + vip.vip_convenience_amount,
			' ',
			_react2.default.createElement(
				'span',
				{ className: 'cstm-doc-cut-price' },
				'\u20B9 ',
				parseInt(mrp),
				' '
			)
		),
		//for non gold ,non vip but for lab having gold or vip
		!((is_gold_member || is_vip_member) && covered_under_vip) && !is_vip_member && is_labopd_enable_for_gold && is_labopd_enable_for_vip && _react2.default.createElement(
			_react2.default.Fragment,
			null,
			show_deal_price != mrp && gold_price < mrp ? _react2.default.createElement(
				'p',
				{ className: 'cst-doc-price' },
				'\u20B9 ',
				parseInt(show_deal_price),
				' ',
				_react2.default.createElement(
					'span',
					{ className: 'cstm-doc-cut-price' },
					'\u20B9 ',
					parseInt(mrp),
					' '
				)
			) : mrp >= gold_price ? _react2.default.createElement(
				'p',
				{ className: 'cst-doc-price' },
				'\u20B9 ',
				parseInt(mrp)
			) : ''
		),

		//for Non gold & non vip user, non gold vip but for vip enabled lab
		!is_package && !is_doc && !is_gold_member && !is_vip_member && !is_labopd_enable_for_gold && is_labopd_enable_for_vip && _react2.default.createElement(
			'div',
			{ className: 'd-flex align-items-center justify-content-end', style: { cursor: 'pointer', marginTop: 5, marginBottom: 5, position: 'relative', zIndex: 1 }, onClick: e => {
					props.clearVipSelectedPlan();
					props.history.push('/vip-club-details?source=lablisting&lead_source=Docprime');
					let data = {
						'Category': 'ConsumerApp', 'Action': 'LabCardVIPClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-card-vip-clicked'
					};
					_gtm2.default.sendEvent({ data: data });
				} },
			_react2.default.createElement(
				'p',
				{ className: 'fw-500 grn-txt-vip' },
				'Save 25% with'
			),
			_react2.default.createElement('img', { src: "/assets" + '/img/viplog.png', style: { width: 18, marginLeft: 4, marginRight: 2 } }),
			_react2.default.createElement('img', { src: "/assets" + '/img/customer-icons/dropdown-arrow.svg', style: { transform: 'rotate(-90deg)' } })
		),

		// for Non gold & non vip user, non gold vip but for vip enabled doctor
		!is_package && is_doc && enabled_for_hospital_booking && !is_gold_member && !is_vip_member && !is_labopd_enable_for_gold && is_labopd_enable_for_vip ? _react2.default.createElement(
			'div',
			{ className: 'd-flex align-items-center justify-content-end', style: { cursor: 'pointer', marginTop: 5, marginBottom: 5, position: 'relative', zIndex: 1 }, onClick: () => {
					props.clearVipSelectedPlan();
					props.history.push('/vip-club-details?source=doctorlisting&lead_source=Docprime');
					let data = {
						'Category': 'ConsumerApp', 'Action': 'DoctorCardVIPClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-card-vip-clicked'
					};
					_gtm2.default.sendEvent({ data: data });
				} },
			_react2.default.createElement(
				'p',
				{ className: 'fw-500 grn-txt-vip' },
				'Save 70% with'
			),
			_react2.default.createElement('img', { src: "/assets" + '/img/viplog.png', style: { width: 18, marginLeft: 4, marginRight: 2 } }),
			_react2.default.createElement('img', { src: "/assets" + '/img/customer-icons/dropdown-arrow.svg', style: { transform: 'rotate(-90deg)' } })
		) : ''
	);
};

/***/ }),

/***/ "./dev/js/components/commons/commonVipGoldNonLoginBadge.js":
/*!*****************************************************************!*\
  !*** ./dev/js/components/commons/commonVipGoldNonLoginBadge.js ***!
  \*****************************************************************/
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

// let is_labopd_enable_for_vip = is_vip_enabled
//         let is_labopd_enable_for_gold = is_gold
//         let is_vip_member = false
//         let is_gold_member = false
//         let covered_under_vip = false

exports.default = props => {
	let { is_labopd_enable_for_vip, is_labopd_enable_for_gold, is_vip_member, is_gold_member, covered_under_vip, vip_data, discounted_price, mrp, enabled_for_hospital_booking, is_doc, is_package, deal_price } = props;
	let vip = vip_data;
	let show_deal_price = vip.is_labopd_enable_for_gold ? vip.vip_gold_price + vip.vip_convenience_amount : discounted_price;
	let gold_price = vip.vip_convenience_amount + vip.vip_gold_price;
	//let hide_gold_widget = gold_price > deal_price
	return _react2.default.createElement(
		_react2.default.Fragment,
		null,

		//for non gold & non vip , for hospital having gold
		!is_package && !is_doc && !is_gold_member && !is_vip_member && discounted_price > vip.vip_convenience_amount + vip.vip_gold_price && is_labopd_enable_for_gold && is_labopd_enable_for_vip && _react2.default.createElement(
			'div',
			{ className: 'goldCard gold-price-card-addon' },
			_react2.default.createElement(
				'div',
				{ className: 'd-flex align-items-center justify-content-end', onClick: () => props.goldClicked() },
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
					vip.vip_gold_price + vip.vip_convenience_amount || 0
				),
				_react2.default.createElement('img', { style: { transform: 'rotate(-90deg)', width: '10px', margin: '0px 10px 0px 0px' }, src: "/assets" + '/img/customer-icons/dropdown-arrow.svg' })
			),
			_react2.default.createElement(
				'p',
				{ className: 'glod-save-perc' },
				'Save ',
				parseInt((mrp - vip.vip_gold_price - vip.vip_convenience_amount) / mrp * 100),
				'%'
			)
		),

		//for non gold & non vip , for hospital having gold doctor
		!is_package && is_doc && enabled_for_hospital_booking && !is_gold_member && !is_vip_member && discounted_price > vip.vip_convenience_amount + vip.vip_gold_price && is_labopd_enable_for_gold && is_labopd_enable_for_vip && _react2.default.createElement(
			'div',
			{ className: 'goldCard gold-price-card-addon' },
			_react2.default.createElement(
				'div',
				{ className: 'd-flex align-items-center justify-content-end ', onClick: () => props.goldClicked() },
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
					vip.vip_gold_price + vip.vip_convenience_amount || 0
				),
				_react2.default.createElement('img', { style: { transform: 'rotate(-90deg)', width: '10px', margin: '0px 10px 0px 0px' }, src: "/assets" + '/img/customer-icons/dropdown-arrow.svg' })
			),
			_react2.default.createElement(
				'p',
				{ className: 'glod-save-perc' },
				'Save ',
				parseInt((mrp - vip.vip_gold_price - vip.vip_convenience_amount) / mrp * 100),
				'%'
			)
		),

		//for non gold & non vip , for hospital having gold package
		is_package && !is_gold_member && !is_vip_member && discounted_price > vip.vip_convenience_amount + vip.vip_gold_price && is_labopd_enable_for_gold && is_labopd_enable_for_vip && _react2.default.createElement(
			'div',
			{ className: 'goldCard gold-price-card-addon' },
			_react2.default.createElement(
				'div',
				{ className: 'd-flex align-items-center justify-content-end ', onClick: () => props.goldClicked() },
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
					parseInt(vip.vip_gold_price) + parseInt(vip.vip_convenience_amount) || 0
				),
				_react2.default.createElement('img', { style: { transform: 'rotate(-90deg)', width: '10px', margin: '0px 10px 0px 0px' }, src: "/assets" + '/img/customer-icons/dropdown-arrow.svg' })
			),
			_react2.default.createElement(
				'p',
				{ className: 'glod-save-perc' },
				'Save ',
				parseInt((mrp - vip.vip_gold_price - vip.vip_convenience_amount) / mrp * 100),
				'%'
			)
		)
	);
};

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9jb21tb25WaXBHb2xkQmFkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9jb21tb25WaXBHb2xkTm9uTG9naW5CYWRnZS5qcyJdLCJuYW1lcyI6WyJMb2FkZXIiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJyZW5kZXIiLCJjbGFzc1R5cGUiLCJpRnJhbWVQb3B1cCIsImlzX2xhYm9wZF9lbmFibGVfZm9yX3ZpcCIsImlzX2xhYm9wZF9lbmFibGVfZm9yX2dvbGQiLCJpc192aXBfbWVtYmVyIiwiaXNfZ29sZF9tZW1iZXIiLCJjb3ZlcmVkX3VuZGVyX3ZpcCIsInZpcF9kYXRhIiwiZGlzY291bnRlZF9wcmljZSIsIm1ycCIsImVuYWJsZWRfZm9yX2hvc3BpdGFsX2Jvb2tpbmciLCJpc19kb2MiLCJpc19wYWNrYWdlIiwiZGVhbF9wcmljZSIsInZpcCIsInNob3dfZGVhbF9wcmljZSIsInZpcF9nb2xkX3ByaWNlIiwidmlwX2NvbnZlbmllbmNlX2Ftb3VudCIsImdvbGRfcHJpY2UiLCJBU1NFVFNfQkFTRV9VUkwiLCJ2aXBfYW1vdW50IiwicGFyc2VJbnQiLCJjdXJzb3IiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJwb3NpdGlvbiIsInpJbmRleCIsImUiLCJjbGVhclZpcFNlbGVjdGVkUGxhbiIsImhpc3RvcnkiLCJwdXNoIiwiZGF0YSIsIkdUTSIsImdldFVzZXJJZCIsInNlbmRFdmVudCIsIndpZHRoIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwidHJhbnNmb3JtIiwiZ29sZENsaWNrZWQiLCJt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LEVBQWdFLFNBQVMsTUFBTUosTUFBTXlDLFdBQU4sRUFBL0U7QUFHQywyQ0FBSyxXQUFVLGFBQWYsRUFBNkIsS0FBS3BCLFNBQWVBLEdBQUcsa0JBQXBELEdBSEQ7QUFJQztBQUFBO0FBQUEsT0FBRyxXQUFVLFVBQWI7QUFBQTtBQUFBLEtBSkQ7QUFBQTtBQUltQztBQUFBO0FBQUEsT0FBTSxXQUFVLGFBQWhCO0FBQUE7QUFBaUNFLGNBQVNQLElBQUlFLGNBQWIsSUFBK0JLLFNBQVNQLElBQUlHLHNCQUFiLENBQS9CLElBQXVFO0FBQXhHLEtBSm5DO0FBSW9KLDJDQUFLLE9BQU8sRUFBRXFCLFdBQVcsZ0JBQWIsRUFBK0JILE9BQU8sTUFBdEMsRUFBOENLLFFBQVEsa0JBQXRELEVBQVosRUFBd0YsS0FBS3JCLFNBQWVBLEdBQUcsd0NBQS9HO0FBSnBKLElBREQ7QUFRQztBQUFBO0FBQUEsTUFBRyxXQUFVLGdCQUFiO0FBQUE7QUFBb0NFLGFBQVUsQ0FBQ1osTUFBTUssSUFBSUUsY0FBVixHQUEyQkYsSUFBSUcsc0JBQWhDLElBQTBEUixHQUEzRCxHQUFrRSxHQUEzRSxDQUFwQztBQUFBO0FBQUE7QUFSRDtBQWxDRixFQUREO0FBaURBLEMiLCJmaWxlIjoiOC5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBMb2FkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NUeXBlIHx8IFwibG9hZGVyQ2lyY3VsYXJcIn0gPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHAtbG9hZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlGcmFtZVBvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMTBcIj5SZWRpcmVjdGluZyB5b3UgdG8gUGhhcm1lYXN5IHdlYnNpdGUuLi48L3A+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIiwiaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vaGVscGVycy9ndG0uanMnXG4vLyBsZXQgaXNfbGFib3BkX2VuYWJsZV9mb3JfdmlwID0gaXNfdmlwX2VuYWJsZWRcbi8vICAgICAgICAgbGV0IGlzX2xhYm9wZF9lbmFibGVfZm9yX2dvbGQgPSBpc19nb2xkXG4vLyAgICAgICAgIGxldCBpc192aXBfbWVtYmVyID0gZmFsc2Vcbi8vICAgICAgICAgbGV0IGlzX2dvbGRfbWVtYmVyID0gZmFsc2Vcbi8vICAgICAgICAgbGV0IGNvdmVyZWRfdW5kZXJfdmlwID0gZmFsc2VcbiAgICAgICAgXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpPT4ge1xuXHRsZXQgeyBpc19sYWJvcGRfZW5hYmxlX2Zvcl92aXAsIGlzX2xhYm9wZF9lbmFibGVfZm9yX2dvbGQsIGlzX3ZpcF9tZW1iZXIsIGlzX2dvbGRfbWVtYmVyLCBjb3ZlcmVkX3VuZGVyX3ZpcCwgdmlwX2RhdGEsIGRpc2NvdW50ZWRfcHJpY2UsIG1ycCwgZW5hYmxlZF9mb3JfaG9zcGl0YWxfYm9va2luZywgaXNfZG9jLCBpc19wYWNrYWdlLCBkZWFsX3ByaWNlIH0gPSBwcm9wcztcblx0bGV0IHZpcCA9IHZpcF9kYXRhO1xuXHRsZXQgc2hvd19kZWFsX3ByaWNlID0gdmlwLmlzX2xhYm9wZF9lbmFibGVfZm9yX2dvbGQ/dmlwLnZpcF9nb2xkX3ByaWNlK3ZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50OmRpc2NvdW50ZWRfcHJpY2UgXG5cdGxldCBnb2xkX3ByaWNlID0gdmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnQgKyB2aXAudmlwX2dvbGRfcHJpY2Vcblx0Ly9sZXQgaGlkZV9nb2xkX3dpZGdldCA9IGdvbGRfcHJpY2UgPiBkZWFsX3ByaWNlXG5cdFxuXHRyZXR1cm4gKFxuXHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdHsvL2ZvciBWaXAgR29sZCBQdXJjaGFzZSBVc2VyXG5cdFx0XHRcdGlzX2dvbGRfbWVtYmVyICYmIGNvdmVyZWRfdW5kZXJfdmlwICYmIFxuXHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0IG1iLTJcIj5cblx0ICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInZpcC1tYWluLWljbyBpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dvbGQtc20ucG5nJ30gLz5cblx0ICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHR9XG5cblx0XHRcdHsvL2ZvciBWaXAgUHVyY2hhc2UgVXNlclxuXHRcdFx0XHRpc192aXBfbWVtYmVyICYmIGNvdmVyZWRfdW5kZXJfdmlwICYmICFpc19nb2xkX21lbWJlciAmJiBcblx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodCBtYi0yXCI+XG5cdCAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ2aXAtbWFpbi1pY28gaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXBsb2cucG5nJ30gLz5cblx0ICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHR9XG5cdFx0XHR7Ly9mb3IgZ29sZCBvciB2aXAgZW5hYmxlZCB1c2VyXG5cdFx0XHRcdChpc19nb2xkX21lbWJlciB8fCBpc192aXBfbWVtYmVyICkgJiYgY292ZXJlZF91bmRlcl92aXAgJiYgPHAgY2xhc3NOYW1lPVwiY3N0LWRvYy1wcmljZVwiPuKCuSB7dmlwLnZpcF9hbW91bnQrdmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnR9IDxzcGFuIGNsYXNzTmFtZT1cImNzdG0tZG9jLWN1dC1wcmljZVwiPuKCuSB7cGFyc2VJbnQobXJwKX0gPC9zcGFuPjwvcD5cblx0XHRcdH1cblx0XHRcdHsvL2ZvciBub24gZ29sZCAsbm9uIHZpcCBidXQgZm9yIGxhYiBoYXZpbmcgZ29sZCBvciB2aXBcblx0XHRcdFx0ISgoaXNfZ29sZF9tZW1iZXIgfHwgaXNfdmlwX21lbWJlciApICYmIGNvdmVyZWRfdW5kZXJfdmlwKSAmJiAhaXNfdmlwX21lbWJlciAmJiBpc19sYWJvcGRfZW5hYmxlX2Zvcl9nb2xkICYmIGlzX2xhYm9wZF9lbmFibGVfZm9yX3ZpcCAmJiBcblx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHNob3dfZGVhbF9wcmljZSE9bXJwICYmIGdvbGRfcHJpY2U8bXJwP1xuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY3N0LWRvYy1wcmljZVwiPuKCuSB7cGFyc2VJbnQoc2hvd19kZWFsX3ByaWNlKX0gPHNwYW4gY2xhc3NOYW1lPVwiY3N0bS1kb2MtY3V0LXByaWNlXCI+4oK5IHtwYXJzZUludChtcnApfSA8L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0OiAobXJwPj1nb2xkX3ByaWNlKT9cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNzdC1kb2MtcHJpY2VcIj7igrkge3BhcnNlSW50KG1ycCl9PC9wPjonJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdH1cblx0XHRcdHtcblx0XHRcdFx0Ly9mb3IgTm9uIGdvbGQgJiBub24gdmlwIHVzZXIsIG5vbiBnb2xkIHZpcCBidXQgZm9yIHZpcCBlbmFibGVkIGxhYlxuXHRcdFx0XHQhaXNfcGFja2FnZSAmJiAhaXNfZG9jICYmICFpc19nb2xkX21lbWJlciAmJiAhaXNfdmlwX21lbWJlciAmJiAhaXNfbGFib3BkX2VuYWJsZV9mb3JfZ29sZCAmJiBpc19sYWJvcGRfZW5hYmxlX2Zvcl92aXAgJiYgXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtZW5kXCIgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIG1hcmdpblRvcDogNSwgbWFyZ2luQm90dG9tOiA1LCBwb3NpdGlvbjogJ3JlbGF0aXZlJywgekluZGV4OiAxIH19IG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5jbGVhclZpcFNlbGVjdGVkUGxhbigpXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5oaXN0b3J5LnB1c2goJy92aXAtY2x1Yi1kZXRhaWxzP3NvdXJjZT1sYWJsaXN0aW5nJmxlYWRfc291cmNlPURvY3ByaW1lJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTGFiQ2FyZFZJUENsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdsYWItY2FyZC12aXAtY2xpY2tlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGdybi10eHQtdmlwXCI+U2F2ZSAyNSUgd2l0aDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXBsb2cucG5nJ30gc3R5bGU9e3sgd2lkdGg6IDE4LCBtYXJnaW5MZWZ0OiA0LCBtYXJnaW5SaWdodDogMiB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Zyd9IHN0eWxlPXt7IHRyYW5zZm9ybTogJ3JvdGF0ZSgtOTBkZWcpJyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdH1cblx0XHRcdHtcblx0XHRcdFx0Ly8gZm9yIE5vbiBnb2xkICYgbm9uIHZpcCB1c2VyLCBub24gZ29sZCB2aXAgYnV0IGZvciB2aXAgZW5hYmxlZCBkb2N0b3JcbiAgICAgICAgICAgICAgICAhaXNfcGFja2FnZSAmJiAgaXNfZG9jICYmIGVuYWJsZWRfZm9yX2hvc3BpdGFsX2Jvb2tpbmcgJiYgIWlzX2dvbGRfbWVtYmVyICYmICFpc192aXBfbWVtYmVyICYmICFpc19sYWJvcGRfZW5hYmxlX2Zvcl9nb2xkICYmIGlzX2xhYm9wZF9lbmFibGVfZm9yX3ZpcCA/XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtZW5kXCIgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIG1hcmdpblRvcDogNSwgbWFyZ2luQm90dG9tOiA1LCBwb3NpdGlvbjogJ3JlbGF0aXZlJywgekluZGV4OiAxIH19IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmNsZWFyVmlwU2VsZWN0ZWRQbGFuKClcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmhpc3RvcnkucHVzaCgnL3ZpcC1jbHViLWRldGFpbHM/c291cmNlPWRvY3Rvcmxpc3RpbmcmbGVhZF9zb3VyY2U9RG9jcHJpbWUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb2N0b3JDYXJkVklQQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2RvY3Rvci1jYXJkLXZpcC1jbGlja2VkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgZ3JuLXR4dC12aXBcIj5TYXZlIDcwJSB3aXRoPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcGxvZy5wbmcnfSBzdHlsZT17eyB3aWR0aDogMTgsIG1hcmdpbkxlZnQ6IDQsIG1hcmdpblJpZ2h0OiAyIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnJ30gc3R5bGU9e3sgdHJhbnNmb3JtOiAncm90YXRlKC05MGRlZyknIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICB9XG5cblx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdClcdFxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuLy8gbGV0IGlzX2xhYm9wZF9lbmFibGVfZm9yX3ZpcCA9IGlzX3ZpcF9lbmFibGVkXG4vLyAgICAgICAgIGxldCBpc19sYWJvcGRfZW5hYmxlX2Zvcl9nb2xkID0gaXNfZ29sZFxuLy8gICAgICAgICBsZXQgaXNfdmlwX21lbWJlciA9IGZhbHNlXG4vLyAgICAgICAgIGxldCBpc19nb2xkX21lbWJlciA9IGZhbHNlXG4vLyAgICAgICAgIGxldCBjb3ZlcmVkX3VuZGVyX3ZpcCA9IGZhbHNlXG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xuXHRsZXQgeyBpc19sYWJvcGRfZW5hYmxlX2Zvcl92aXAsIGlzX2xhYm9wZF9lbmFibGVfZm9yX2dvbGQsIGlzX3ZpcF9tZW1iZXIsIGlzX2dvbGRfbWVtYmVyLCBjb3ZlcmVkX3VuZGVyX3ZpcCwgdmlwX2RhdGEsIGRpc2NvdW50ZWRfcHJpY2UsIG1ycCwgZW5hYmxlZF9mb3JfaG9zcGl0YWxfYm9va2luZywgaXNfZG9jLCBpc19wYWNrYWdlLCBkZWFsX3ByaWNlIH0gPSBwcm9wcztcblx0bGV0IHZpcCA9IHZpcF9kYXRhO1xuXHRsZXQgc2hvd19kZWFsX3ByaWNlID0gdmlwLmlzX2xhYm9wZF9lbmFibGVfZm9yX2dvbGQgPyB2aXAudmlwX2dvbGRfcHJpY2UgKyB2aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudCA6IGRpc2NvdW50ZWRfcHJpY2Vcblx0bGV0IGdvbGRfcHJpY2UgPSB2aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudCArIHZpcC52aXBfZ29sZF9wcmljZVxuXHQvL2xldCBoaWRlX2dvbGRfd2lkZ2V0ID0gZ29sZF9wcmljZSA+IGRlYWxfcHJpY2Vcblx0cmV0dXJuIChcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cblxuXHRcdFx0e1xuXHRcdFx0XHQvL2ZvciBub24gZ29sZCAmIG5vbiB2aXAgLCBmb3IgaG9zcGl0YWwgaGF2aW5nIGdvbGRcblx0XHRcdFx0IWlzX3BhY2thZ2UgJiYgIWlzX2RvYyAmJiAhaXNfZ29sZF9tZW1iZXIgJiYgIWlzX3ZpcF9tZW1iZXIgJiYgZGlzY291bnRlZF9wcmljZSA+ICh2aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudCArIHZpcC52aXBfZ29sZF9wcmljZSkgJiYgaXNfbGFib3BkX2VuYWJsZV9mb3JfZ29sZCAmJiBpc19sYWJvcGRfZW5hYmxlX2Zvcl92aXAgJiZcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnb2xkQ2FyZCBnb2xkLXByaWNlLWNhcmQtYWRkb25cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWVuZFwiIG9uQ2xpY2s9eygpID0+IHByb3BzLmdvbGRDbGlja2VkKCl9PlxuXHRcdFx0XHRcdFx0ey8qIDxwIGNsYXNzTmFtZT1cImdsZC1wLXJjXCI+Rm9yPC9wPiAqL31cblx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiZ2xkLWNkLWljb25cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dvbGQtc20ucG5nJ30gLz5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImdsZC1wLXJjXCI+UHJpY2U8L3A+IDxzcGFuIGNsYXNzTmFtZT1cImdsZC1yYXRlLWxmXCI+4oK5IHt2aXAudmlwX2dvbGRfcHJpY2UgKyB2aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudCB8fCAwfTwvc3Bhbj48aW1nIHN0eWxlPXt7IHRyYW5zZm9ybTogJ3JvdGF0ZSgtOTBkZWcpJywgd2lkdGg6ICcxMHB4JywgbWFyZ2luOiAnMHB4IDEwcHggMHB4IDBweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmcnfSAvPlxuXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZ2xvZC1zYXZlLXBlcmNcIj5TYXZlIHtwYXJzZUludCgoKG1ycCAtIHZpcC52aXBfZ29sZF9wcmljZSAtIHZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50KSAvIG1ycCkgKiAxMDApfSU8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0fVxuXG5cdFx0XHR7XG5cdFx0XHRcdC8vZm9yIG5vbiBnb2xkICYgbm9uIHZpcCAsIGZvciBob3NwaXRhbCBoYXZpbmcgZ29sZCBkb2N0b3Jcblx0XHRcdFx0IWlzX3BhY2thZ2UgJiYgaXNfZG9jICYmIGVuYWJsZWRfZm9yX2hvc3BpdGFsX2Jvb2tpbmcgJiYgIWlzX2dvbGRfbWVtYmVyICYmICFpc192aXBfbWVtYmVyICYmIGRpc2NvdW50ZWRfcHJpY2UgPiAodmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnQgKyB2aXAudmlwX2dvbGRfcHJpY2UpICYmIGlzX2xhYm9wZF9lbmFibGVfZm9yX2dvbGQgJiYgaXNfbGFib3BkX2VuYWJsZV9mb3JfdmlwICYmXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ29sZENhcmQgZ29sZC1wcmljZS1jYXJkLWFkZG9uXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1lbmQgXCIgb25DbGljaz17KCkgPT4gcHJvcHMuZ29sZENsaWNrZWQoKX0+XG5cdFx0XHRcdFx0XHR7LyogPHAgY2xhc3NOYW1lPVwiZ2xkLXAtcmNcIj5Gb3I8L3A+ICovfVxuXHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJnbGQtY2QtaWNvblwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZ29sZC1zbS5wbmcnfSAvPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZ2xkLXAtcmNcIj5QcmljZTwvcD4gPHNwYW4gY2xhc3NOYW1lPVwiZ2xkLXJhdGUtbGZcIj7igrkge3ZpcC52aXBfZ29sZF9wcmljZSArIHZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50IHx8IDB9PC9zcGFuPjxpbWcgc3R5bGU9e3sgdHJhbnNmb3JtOiAncm90YXRlKC05MGRlZyknLCB3aWR0aDogJzEwcHgnLCBtYXJnaW46ICcwcHggMTBweCAwcHggMHB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Zyd9IC8+XG5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDxwIGNsYXNzTmFtZT1cImdsb2Qtc2F2ZS1wZXJjXCI+U2F2ZSB7cGFyc2VJbnQoKChtcnAgLSB2aXAudmlwX2dvbGRfcHJpY2UgLSB2aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudCkgLyBtcnApICogMTAwKX0lPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdH1cblxuXHRcdFx0e1xuXHRcdFx0XHQvL2ZvciBub24gZ29sZCAmIG5vbiB2aXAgLCBmb3IgaG9zcGl0YWwgaGF2aW5nIGdvbGQgcGFja2FnZVxuXHRcdFx0XHRpc19wYWNrYWdlICYmICFpc19nb2xkX21lbWJlciAmJiAhaXNfdmlwX21lbWJlciAmJiBkaXNjb3VudGVkX3ByaWNlID4gKHZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50ICsgdmlwLnZpcF9nb2xkX3ByaWNlKSAmJiBpc19sYWJvcGRfZW5hYmxlX2Zvcl9nb2xkICYmIGlzX2xhYm9wZF9lbmFibGVfZm9yX3ZpcCAmJlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdvbGRDYXJkIGdvbGQtcHJpY2UtY2FyZC1hZGRvblwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtZW5kIFwiIG9uQ2xpY2s9eygpID0+IHByb3BzLmdvbGRDbGlja2VkKCl9PlxuXG5cdFx0XHRcdFx0XHR7LyogPHAgY2xhc3NOYW1lPVwiZ2xkLXAtcmNcIj5Gb3I8L3A+ICovfVxuXHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJnbGQtY2QtaWNvblwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZ29sZC1zbS5wbmcnfSAvPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZ2xkLXAtcmNcIj5QcmljZTwvcD4gPHNwYW4gY2xhc3NOYW1lPVwiZ2xkLXJhdGUtbGZcIj7igrkge3BhcnNlSW50KHZpcC52aXBfZ29sZF9wcmljZSkgKyBwYXJzZUludCh2aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudCkgfHwgMH08L3NwYW4+PGltZyBzdHlsZT17eyB0cmFuc2Zvcm06ICdyb3RhdGUoLTkwZGVnKScsIHdpZHRoOiAnMTBweCcsIG1hcmdpbjogJzBweCAxMHB4IDBweCAwcHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnJ30gLz5cblxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImdsb2Qtc2F2ZS1wZXJjXCI+U2F2ZSB7cGFyc2VJbnQoKChtcnAgLSB2aXAudmlwX2dvbGRfcHJpY2UgLSB2aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudCkgLyBtcnApICogMTAwKX0lPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdH1cblxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdClcbn0iXSwic291cmNlUm9vdCI6IiJ9