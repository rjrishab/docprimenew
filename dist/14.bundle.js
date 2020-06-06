(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

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

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// let is_labopd_enable_for_vip = is_vip_enabled
//         let is_labopd_enable_for_gold = is_gold
//         let is_vip_member = false
//         let is_gold_member = false
//         let covered_under_vip = false

exports.default = function (props) {
	var is_labopd_enable_for_vip = props.is_labopd_enable_for_vip,
	    is_labopd_enable_for_gold = props.is_labopd_enable_for_gold,
	    is_vip_member = props.is_vip_member,
	    is_gold_member = props.is_gold_member,
	    covered_under_vip = props.covered_under_vip,
	    vip_data = props.vip_data,
	    discounted_price = props.discounted_price,
	    mrp = props.mrp,
	    enabled_for_hospital_booking = props.enabled_for_hospital_booking,
	    is_doc = props.is_doc,
	    is_package = props.is_package,
	    deal_price = props.deal_price;

	var vip = vip_data;
	var show_deal_price = vip.is_labopd_enable_for_gold ? vip.vip_gold_price + vip.vip_convenience_amount : discounted_price;
	var gold_price = vip.vip_convenience_amount + vip.vip_gold_price;
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
			{ className: 'd-flex align-items-center justify-content-end', style: { cursor: 'pointer', marginTop: 5, marginBottom: 5, position: 'relative', zIndex: 1 }, onClick: function onClick(e) {
					props.clearVipSelectedPlan();
					props.history.push('/vip-club-details?source=lablisting&lead_source=Docprime');
					var data = {
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
			{ className: 'd-flex align-items-center justify-content-end', style: { cursor: 'pointer', marginTop: 5, marginBottom: 5, position: 'relative', zIndex: 1 }, onClick: function onClick() {
					props.clearVipSelectedPlan();
					props.history.push('/vip-club-details?source=doctorlisting&lead_source=Docprime');
					var data = {
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

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// let is_labopd_enable_for_vip = is_vip_enabled
//         let is_labopd_enable_for_gold = is_gold
//         let is_vip_member = false
//         let is_gold_member = false
//         let covered_under_vip = false

exports.default = function (props) {
	var is_labopd_enable_for_vip = props.is_labopd_enable_for_vip,
	    is_labopd_enable_for_gold = props.is_labopd_enable_for_gold,
	    is_vip_member = props.is_vip_member,
	    is_gold_member = props.is_gold_member,
	    covered_under_vip = props.covered_under_vip,
	    vip_data = props.vip_data,
	    discounted_price = props.discounted_price,
	    mrp = props.mrp,
	    enabled_for_hospital_booking = props.enabled_for_hospital_booking,
	    is_doc = props.is_doc,
	    is_package = props.is_package,
	    deal_price = props.deal_price;

	var vip = vip_data;
	var show_deal_price = vip.is_labopd_enable_for_gold ? vip.vip_gold_price + vip.vip_convenience_amount : discounted_price;
	var gold_price = vip.vip_convenience_amount + vip.vip_gold_price;
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
				{ className: 'd-flex align-items-center justify-content-end', onClick: function onClick() {
						return props.goldClicked();
					} },
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
				{ className: 'd-flex align-items-center justify-content-end ', onClick: function onClick() {
						return props.goldClicked();
					} },
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
				{ className: 'd-flex align-items-center justify-content-end ', onClick: function onClick() {
						return props.goldClicked();
					} },
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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9jb21tb25WaXBHb2xkQmFkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9jb21tb25WaXBHb2xkTm9uTG9naW5CYWRnZS5qcyJdLCJuYW1lcyI6WyJMb2FkZXIiLCJwcm9wcyIsImNsYXNzVHlwZSIsImlGcmFtZVBvcHVwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJpc19sYWJvcGRfZW5hYmxlX2Zvcl92aXAiLCJpc19sYWJvcGRfZW5hYmxlX2Zvcl9nb2xkIiwiaXNfdmlwX21lbWJlciIsImlzX2dvbGRfbWVtYmVyIiwiY292ZXJlZF91bmRlcl92aXAiLCJ2aXBfZGF0YSIsImRpc2NvdW50ZWRfcHJpY2UiLCJtcnAiLCJlbmFibGVkX2Zvcl9ob3NwaXRhbF9ib29raW5nIiwiaXNfZG9jIiwiaXNfcGFja2FnZSIsImRlYWxfcHJpY2UiLCJ2aXAiLCJzaG93X2RlYWxfcHJpY2UiLCJ2aXBfZ29sZF9wcmljZSIsInZpcF9jb252ZW5pZW5jZV9hbW91bnQiLCJnb2xkX3ByaWNlIiwiQVNTRVRTX0JBU0VfVVJMIiwidmlwX2Ftb3VudCIsInBhcnNlSW50IiwiY3Vyc29yIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJlIiwiY2xlYXJWaXBTZWxlY3RlZFBsYW4iLCJoaXN0b3J5IiwicHVzaCIsImRhdGEiLCJHVE0iLCJnZXRVc2VySWQiLCJzZW5kRXZlbnQiLCJ3aWR0aCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInRyYW5zZm9ybSIsImdvbGRDbGlja2VkIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7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TSxXQUFVLGFBQWhCO0FBQUE7QUFBaUNFLGNBQVNQLElBQUlFLGNBQWIsSUFBK0JLLFNBQVNQLElBQUlHLHNCQUFiLENBQS9CLElBQXVFO0FBQXhHLEtBSm5DO0FBSW9KLDJDQUFLLE9BQU8sRUFBRXFCLFdBQVcsZ0JBQWIsRUFBK0JILE9BQU8sTUFBdEMsRUFBOENLLFFBQVEsa0JBQXRELEVBQVosRUFBd0YsS0FBS3JCLFNBQWVBLEdBQUcsd0NBQS9HO0FBSnBKLElBREQ7QUFRQztBQUFBO0FBQUEsTUFBRyxXQUFVLGdCQUFiO0FBQUE7QUFBb0NFLGFBQVUsQ0FBQ1osTUFBTUssSUFBSUUsY0FBVixHQUEyQkYsSUFBSUcsc0JBQWhDLElBQTBEUixHQUEzRCxHQUFrRSxHQUEzRSxDQUFwQztBQUFBO0FBQUE7QUFSRDtBQWxDRixFQUREO0FBaURBLEMiLCJmaWxlIjoiMTQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgTG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzVHlwZSB8fCBcImxvYWRlckNpcmN1bGFyXCJ9ID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRwLWxvYWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pRnJhbWVQb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTEwXCI+UmVkaXJlY3RpbmcgeW91IHRvIFBoYXJtZWFzeSB3ZWJzaXRlLi4uPC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXJcbiIsImltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInXG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuLy8gbGV0IGlzX2xhYm9wZF9lbmFibGVfZm9yX3ZpcCA9IGlzX3ZpcF9lbmFibGVkXG4vLyAgICAgICAgIGxldCBpc19sYWJvcGRfZW5hYmxlX2Zvcl9nb2xkID0gaXNfZ29sZFxuLy8gICAgICAgICBsZXQgaXNfdmlwX21lbWJlciA9IGZhbHNlXG4vLyAgICAgICAgIGxldCBpc19nb2xkX21lbWJlciA9IGZhbHNlXG4vLyAgICAgICAgIGxldCBjb3ZlcmVkX3VuZGVyX3ZpcCA9IGZhbHNlXG4gICAgICAgIFxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKT0+IHtcblx0bGV0IHsgaXNfbGFib3BkX2VuYWJsZV9mb3JfdmlwLCBpc19sYWJvcGRfZW5hYmxlX2Zvcl9nb2xkLCBpc192aXBfbWVtYmVyLCBpc19nb2xkX21lbWJlciwgY292ZXJlZF91bmRlcl92aXAsIHZpcF9kYXRhLCBkaXNjb3VudGVkX3ByaWNlLCBtcnAsIGVuYWJsZWRfZm9yX2hvc3BpdGFsX2Jvb2tpbmcsIGlzX2RvYywgaXNfcGFja2FnZSwgZGVhbF9wcmljZSB9ID0gcHJvcHM7XG5cdGxldCB2aXAgPSB2aXBfZGF0YTtcblx0bGV0IHNob3dfZGVhbF9wcmljZSA9IHZpcC5pc19sYWJvcGRfZW5hYmxlX2Zvcl9nb2xkP3ZpcC52aXBfZ29sZF9wcmljZSt2aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudDpkaXNjb3VudGVkX3ByaWNlIFxuXHRsZXQgZ29sZF9wcmljZSA9IHZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50ICsgdmlwLnZpcF9nb2xkX3ByaWNlXG5cdC8vbGV0IGhpZGVfZ29sZF93aWRnZXQgPSBnb2xkX3ByaWNlID4gZGVhbF9wcmljZVxuXHRcblx0cmV0dXJuIChcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHR7Ly9mb3IgVmlwIEdvbGQgUHVyY2hhc2UgVXNlclxuXHRcdFx0XHRpc19nb2xkX21lbWJlciAmJiBjb3ZlcmVkX3VuZGVyX3ZpcCAmJiBcblx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodCBtYi0yXCI+XG5cdCAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ2aXAtbWFpbi1pY28gaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9nb2xkLXNtLnBuZyd9IC8+XG5cdCAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0fVxuXG5cdFx0XHR7Ly9mb3IgVmlwIFB1cmNoYXNlIFVzZXJcblx0XHRcdFx0aXNfdmlwX21lbWJlciAmJiBjb3ZlcmVkX3VuZGVyX3ZpcCAmJiAhaXNfZ29sZF9tZW1iZXIgJiYgXG5cdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHQgbWItMlwiPlxuXHQgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidmlwLW1haW4taWNvIGltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwbG9nLnBuZyd9IC8+XG5cdCAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0fVxuXHRcdFx0ey8vZm9yIGdvbGQgb3IgdmlwIGVuYWJsZWQgdXNlclxuXHRcdFx0XHQoaXNfZ29sZF9tZW1iZXIgfHwgaXNfdmlwX21lbWJlciApICYmIGNvdmVyZWRfdW5kZXJfdmlwICYmIDxwIGNsYXNzTmFtZT1cImNzdC1kb2MtcHJpY2VcIj7igrkge3ZpcC52aXBfYW1vdW50K3ZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50fSA8c3BhbiBjbGFzc05hbWU9XCJjc3RtLWRvYy1jdXQtcHJpY2VcIj7igrkge3BhcnNlSW50KG1ycCl9IDwvc3Bhbj48L3A+XG5cdFx0XHR9XG5cdFx0XHR7Ly9mb3Igbm9uIGdvbGQgLG5vbiB2aXAgYnV0IGZvciBsYWIgaGF2aW5nIGdvbGQgb3IgdmlwXG5cdFx0XHRcdCEoKGlzX2dvbGRfbWVtYmVyIHx8IGlzX3ZpcF9tZW1iZXIgKSAmJiBjb3ZlcmVkX3VuZGVyX3ZpcCkgJiYgIWlzX3ZpcF9tZW1iZXIgJiYgaXNfbGFib3BkX2VuYWJsZV9mb3JfZ29sZCAmJiBpc19sYWJvcGRfZW5hYmxlX2Zvcl92aXAgJiYgXG5cdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRzaG93X2RlYWxfcHJpY2UhPW1ycCAmJiBnb2xkX3ByaWNlPG1ycD9cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNzdC1kb2MtcHJpY2VcIj7igrkge3BhcnNlSW50KHNob3dfZGVhbF9wcmljZSl9IDxzcGFuIGNsYXNzTmFtZT1cImNzdG0tZG9jLWN1dC1wcmljZVwiPuKCuSB7cGFyc2VJbnQobXJwKX0gPC9zcGFuPjwvcD5cblx0XHRcdFx0XHRcdDogKG1ycD49Z29sZF9wcmljZSk/XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjc3QtZG9jLXByaWNlXCI+4oK5IHtwYXJzZUludChtcnApfTwvcD46Jydcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHR9XG5cdFx0XHR7XG5cdFx0XHRcdC8vZm9yIE5vbiBnb2xkICYgbm9uIHZpcCB1c2VyLCBub24gZ29sZCB2aXAgYnV0IGZvciB2aXAgZW5hYmxlZCBsYWJcblx0XHRcdFx0IWlzX3BhY2thZ2UgJiYgIWlzX2RvYyAmJiAhaXNfZ29sZF9tZW1iZXIgJiYgIWlzX3ZpcF9tZW1iZXIgJiYgIWlzX2xhYm9wZF9lbmFibGVfZm9yX2dvbGQgJiYgaXNfbGFib3BkX2VuYWJsZV9mb3JfdmlwICYmIFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWVuZFwiIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBtYXJnaW5Ub3A6IDUsIG1hcmdpbkJvdHRvbTogNSwgcG9zaXRpb246ICdyZWxhdGl2ZScsIHpJbmRleDogMSB9fSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2xlYXJWaXBTZWxlY3RlZFBsYW4oKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaGlzdG9yeS5wdXNoKCcvdmlwLWNsdWItZGV0YWlscz9zb3VyY2U9bGFibGlzdGluZyZsZWFkX3NvdXJjZT1Eb2NwcmltZScpXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0xhYkNhcmRWSVBDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbGFiLWNhcmQtdmlwLWNsaWNrZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBncm4tdHh0LXZpcFwiPlNhdmUgMjUlIHdpdGg8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwbG9nLnBuZyd9IHN0eWxlPXt7IHdpZHRoOiAxOCwgbWFyZ2luTGVmdDogNCwgbWFyZ2luUmlnaHQ6IDIgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmcnfSBzdHlsZT17eyB0cmFuc2Zvcm06ICdyb3RhdGUoLTkwZGVnKScgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHR9XG5cdFx0XHR7XG5cdFx0XHRcdC8vIGZvciBOb24gZ29sZCAmIG5vbiB2aXAgdXNlciwgbm9uIGdvbGQgdmlwIGJ1dCBmb3IgdmlwIGVuYWJsZWQgZG9jdG9yXG4gICAgICAgICAgICAgICAgIWlzX3BhY2thZ2UgJiYgIGlzX2RvYyAmJiBlbmFibGVkX2Zvcl9ob3NwaXRhbF9ib29raW5nICYmICFpc19nb2xkX21lbWJlciAmJiAhaXNfdmlwX21lbWJlciAmJiAhaXNfbGFib3BkX2VuYWJsZV9mb3JfZ29sZCAmJiBpc19sYWJvcGRfZW5hYmxlX2Zvcl92aXAgP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWVuZFwiIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBtYXJnaW5Ub3A6IDUsIG1hcmdpbkJvdHRvbTogNSwgcG9zaXRpb246ICdyZWxhdGl2ZScsIHpJbmRleDogMSB9fSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5jbGVhclZpcFNlbGVjdGVkUGxhbigpXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5oaXN0b3J5LnB1c2goJy92aXAtY2x1Yi1kZXRhaWxzP3NvdXJjZT1kb2N0b3JsaXN0aW5nJmxlYWRfc291cmNlPURvY3ByaW1lJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnRG9jdG9yQ2FyZFZJUENsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdkb2N0b3ItY2FyZC12aXAtY2xpY2tlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGdybi10eHQtdmlwXCI+U2F2ZSA3MCUgd2l0aDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXBsb2cucG5nJ30gc3R5bGU9e3sgd2lkdGg6IDE4LCBtYXJnaW5MZWZ0OiA0LCBtYXJnaW5SaWdodDogMiB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Zyd9IHN0eWxlPXt7IHRyYW5zZm9ybTogJ3JvdGF0ZSgtOTBkZWcpJyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgfVxuXG5cdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHQpXHRcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi9oZWxwZXJzL2d0bS5qcydcbi8vIGxldCBpc19sYWJvcGRfZW5hYmxlX2Zvcl92aXAgPSBpc192aXBfZW5hYmxlZFxuLy8gICAgICAgICBsZXQgaXNfbGFib3BkX2VuYWJsZV9mb3JfZ29sZCA9IGlzX2dvbGRcbi8vICAgICAgICAgbGV0IGlzX3ZpcF9tZW1iZXIgPSBmYWxzZVxuLy8gICAgICAgICBsZXQgaXNfZ29sZF9tZW1iZXIgPSBmYWxzZVxuLy8gICAgICAgICBsZXQgY292ZXJlZF91bmRlcl92aXAgPSBmYWxzZVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcblx0bGV0IHsgaXNfbGFib3BkX2VuYWJsZV9mb3JfdmlwLCBpc19sYWJvcGRfZW5hYmxlX2Zvcl9nb2xkLCBpc192aXBfbWVtYmVyLCBpc19nb2xkX21lbWJlciwgY292ZXJlZF91bmRlcl92aXAsIHZpcF9kYXRhLCBkaXNjb3VudGVkX3ByaWNlLCBtcnAsIGVuYWJsZWRfZm9yX2hvc3BpdGFsX2Jvb2tpbmcsIGlzX2RvYywgaXNfcGFja2FnZSwgZGVhbF9wcmljZSB9ID0gcHJvcHM7XG5cdGxldCB2aXAgPSB2aXBfZGF0YTtcblx0bGV0IHNob3dfZGVhbF9wcmljZSA9IHZpcC5pc19sYWJvcGRfZW5hYmxlX2Zvcl9nb2xkID8gdmlwLnZpcF9nb2xkX3ByaWNlICsgdmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnQgOiBkaXNjb3VudGVkX3ByaWNlXG5cdGxldCBnb2xkX3ByaWNlID0gdmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnQgKyB2aXAudmlwX2dvbGRfcHJpY2Vcblx0Ly9sZXQgaGlkZV9nb2xkX3dpZGdldCA9IGdvbGRfcHJpY2UgPiBkZWFsX3ByaWNlXG5cdHJldHVybiAoXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxuXG5cblx0XHRcdHtcblx0XHRcdFx0Ly9mb3Igbm9uIGdvbGQgJiBub24gdmlwICwgZm9yIGhvc3BpdGFsIGhhdmluZyBnb2xkXG5cdFx0XHRcdCFpc19wYWNrYWdlICYmICFpc19kb2MgJiYgIWlzX2dvbGRfbWVtYmVyICYmICFpc192aXBfbWVtYmVyICYmIGRpc2NvdW50ZWRfcHJpY2UgPiAodmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnQgKyB2aXAudmlwX2dvbGRfcHJpY2UpICYmIGlzX2xhYm9wZF9lbmFibGVfZm9yX2dvbGQgJiYgaXNfbGFib3BkX2VuYWJsZV9mb3JfdmlwICYmXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ29sZENhcmQgZ29sZC1wcmljZS1jYXJkLWFkZG9uXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1lbmRcIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5nb2xkQ2xpY2tlZCgpfT5cblx0XHRcdFx0XHRcdHsvKiA8cCBjbGFzc05hbWU9XCJnbGQtcC1yY1wiPkZvcjwvcD4gKi99XG5cdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImdsZC1jZC1pY29uXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9nb2xkLXNtLnBuZyd9IC8+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJnbGQtcC1yY1wiPlByaWNlPC9wPiA8c3BhbiBjbGFzc05hbWU9XCJnbGQtcmF0ZS1sZlwiPuKCuSB7dmlwLnZpcF9nb2xkX3ByaWNlICsgdmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnQgfHwgMH08L3NwYW4+PGltZyBzdHlsZT17eyB0cmFuc2Zvcm06ICdyb3RhdGUoLTkwZGVnKScsIHdpZHRoOiAnMTBweCcsIG1hcmdpbjogJzBweCAxMHB4IDBweCAwcHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnJ30gLz5cblxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImdsb2Qtc2F2ZS1wZXJjXCI+U2F2ZSB7cGFyc2VJbnQoKChtcnAgLSB2aXAudmlwX2dvbGRfcHJpY2UgLSB2aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudCkgLyBtcnApICogMTAwKX0lPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdH1cblxuXHRcdFx0e1xuXHRcdFx0XHQvL2ZvciBub24gZ29sZCAmIG5vbiB2aXAgLCBmb3IgaG9zcGl0YWwgaGF2aW5nIGdvbGQgZG9jdG9yXG5cdFx0XHRcdCFpc19wYWNrYWdlICYmIGlzX2RvYyAmJiBlbmFibGVkX2Zvcl9ob3NwaXRhbF9ib29raW5nICYmICFpc19nb2xkX21lbWJlciAmJiAhaXNfdmlwX21lbWJlciAmJiBkaXNjb3VudGVkX3ByaWNlID4gKHZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50ICsgdmlwLnZpcF9nb2xkX3ByaWNlKSAmJiBpc19sYWJvcGRfZW5hYmxlX2Zvcl9nb2xkICYmIGlzX2xhYm9wZF9lbmFibGVfZm9yX3ZpcCAmJlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdvbGRDYXJkIGdvbGQtcHJpY2UtY2FyZC1hZGRvblwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtZW5kIFwiIG9uQ2xpY2s9eygpID0+IHByb3BzLmdvbGRDbGlja2VkKCl9PlxuXHRcdFx0XHRcdFx0ey8qIDxwIGNsYXNzTmFtZT1cImdsZC1wLXJjXCI+Rm9yPC9wPiAqL31cblx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiZ2xkLWNkLWljb25cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dvbGQtc20ucG5nJ30gLz5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImdsZC1wLXJjXCI+UHJpY2U8L3A+IDxzcGFuIGNsYXNzTmFtZT1cImdsZC1yYXRlLWxmXCI+4oK5IHt2aXAudmlwX2dvbGRfcHJpY2UgKyB2aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudCB8fCAwfTwvc3Bhbj48aW1nIHN0eWxlPXt7IHRyYW5zZm9ybTogJ3JvdGF0ZSgtOTBkZWcpJywgd2lkdGg6ICcxMHB4JywgbWFyZ2luOiAnMHB4IDEwcHggMHB4IDBweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmcnfSAvPlxuXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8cCBjbGFzc05hbWU9XCJnbG9kLXNhdmUtcGVyY1wiPlNhdmUge3BhcnNlSW50KCgobXJwIC0gdmlwLnZpcF9nb2xkX3ByaWNlIC0gdmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnQpIC8gbXJwKSAqIDEwMCl9JTwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHR9XG5cblx0XHRcdHtcblx0XHRcdFx0Ly9mb3Igbm9uIGdvbGQgJiBub24gdmlwICwgZm9yIGhvc3BpdGFsIGhhdmluZyBnb2xkIHBhY2thZ2Vcblx0XHRcdFx0aXNfcGFja2FnZSAmJiAhaXNfZ29sZF9tZW1iZXIgJiYgIWlzX3ZpcF9tZW1iZXIgJiYgZGlzY291bnRlZF9wcmljZSA+ICh2aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudCArIHZpcC52aXBfZ29sZF9wcmljZSkgJiYgaXNfbGFib3BkX2VuYWJsZV9mb3JfZ29sZCAmJiBpc19sYWJvcGRfZW5hYmxlX2Zvcl92aXAgJiZcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnb2xkQ2FyZCBnb2xkLXByaWNlLWNhcmQtYWRkb25cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWVuZCBcIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5nb2xkQ2xpY2tlZCgpfT5cblxuXHRcdFx0XHRcdFx0ey8qIDxwIGNsYXNzTmFtZT1cImdsZC1wLXJjXCI+Rm9yPC9wPiAqL31cblx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiZ2xkLWNkLWljb25cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dvbGQtc20ucG5nJ30gLz5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImdsZC1wLXJjXCI+UHJpY2U8L3A+IDxzcGFuIGNsYXNzTmFtZT1cImdsZC1yYXRlLWxmXCI+4oK5IHtwYXJzZUludCh2aXAudmlwX2dvbGRfcHJpY2UpICsgcGFyc2VJbnQodmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnQpIHx8IDB9PC9zcGFuPjxpbWcgc3R5bGU9e3sgdHJhbnNmb3JtOiAncm90YXRlKC05MGRlZyknLCB3aWR0aDogJzEwcHgnLCBtYXJnaW46ICcwcHggMTBweCAwcHggMHB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Zyd9IC8+XG5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJnbG9kLXNhdmUtcGVyY1wiPlNhdmUge3BhcnNlSW50KCgobXJwIC0gdmlwLnZpcF9nb2xkX3ByaWNlIC0gdmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnQpIC8gbXJwKSAqIDEwMCl9JTwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHR9XG5cblx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHQpXG59Il0sInNvdXJjZVJvb3QiOiIifQ==