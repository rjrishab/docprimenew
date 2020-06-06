(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./dev/js/components/commons/HomeNewView/HomePageWidget.js":
/*!*****************************************************************!*\
  !*** ./dev/js/components/commons/HomeNewView/HomePageWidget.js ***!
  \*****************************************************************/
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

var _PrescriptionUpload = __webpack_require__(/*! ../../../containers/commons/PrescriptionUpload.js */ "./dev/js/containers/commons/PrescriptionUpload.js");

var _PrescriptionUpload2 = _interopRequireDefault(_PrescriptionUpload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePageWidgets = function (_React$PureComponent) {
    _inherits(HomePageWidgets, _React$PureComponent);

    function HomePageWidgets(props) {
        _classCallCheck(this, HomePageWidgets);

        var _this = _possibleConstructorReturn(this, (HomePageWidgets.__proto__ || Object.getPrototypeOf(HomePageWidgets)).call(this, props));

        _this.navigateTo = function (where, e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }

            if (_this.props.type) {
                _this.props.selectSearchType(_this.props.type);
            }
            _this.props.historyObj.push(where);
        };

        _this.goldClicked = function () {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'HomePackageGoldClicked', 'CustomerID': GTM.getUserId() || '', 'leadid': 0, 'event': 'vip-homepage-package-gold-clicked'
            };
            GTM.sendEvent({ data: data });
            _this.props.historyObj.push('/vip-gold-details?is_gold=true&source=homepagepackagegoldlisting&lead_source=Docprime');
        };

        _this.state = {};
        return _this;
    }

    _createClass(HomePageWidgets, [{
        key: 'scroll',
        value: function scroll(type) {
            var dataType = this.props.dataType;
            var elmnt = document.getElementById(dataType);

            if (elmnt) {
                var outerDivWidth = elmnt.offsetWidth;
                var cardCount = elmnt.children && elmnt.children.length ? elmnt.children.length : 9;
                var childDivWidth = elmnt.scrollWidth ? elmnt.scrollWidth : 3000;
                var cardWidth = Math.ceil(childDivWidth / cardCount);

                var leftScroll = elmnt.scrollLeft;

                if (type == 'right') {
                    elmnt.scroll({ left: leftScroll + outerDivWidth, behavior: 'smooth' });
                    if (childDivWidth <= leftScroll + 2 * outerDivWidth) {
                        document.getElementById(dataType + '_leftArrow_hsptl').classList.add("d-none");
                    }
                    document.getElementById(dataType + '_RightArrow_hsptl').classList.remove("d-none");
                } else {
                    elmnt.scroll({ left: leftScroll - outerDivWidth, behavior: 'smooth' });
                    if (leftScroll - outerDivWidth <= 0) {
                        document.getElementById(dataType + '_RightArrow_hsptl').classList.add("d-none");
                    }
                    document.getElementById(dataType + '_leftArrow_hsptl').classList.remove("d-none");
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                dataType = _props.dataType,
                heading = _props.heading,
                rightText = _props.rightText,
                discount = _props.discount,
                topHospitals = _props.topHospitals,
                topPackages = _props.topPackages,
                type = _props.type,
                navTo = _props.navTo,
                count = _props.count;

            var dataList = this.props.list;

            if (dataList && dataList.length && count) {
                dataList = dataList.slice(0, count);
            }

            var opd_lab = type == 'lab' || type == 'opd';

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    'section',
                    { className: 'card-block-row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'top-card-row ' + (rightText ? 'd-flex align-item-center justify-content-between' : '') },
                        _react2.default.createElement(
                            'h6',
                            null,
                            heading
                        ),
                        rightText ? _react2.default.createElement(
                            'a',
                            { className: 'd-flex align-item-center', href: '/', onClick: function onClick(e) {
                                    e.preventDefault();
                                    _this2.props.rightButtonClicked({ type: type, where: navTo });
                                } },
                            _react2.default.createElement(
                                'span',
                                { style: { marginRight: 10 }, className: opd_lab ? 'right-text-col' : '' },
                                rightText,
                                _react2.default.createElement(
                                    'svg',
                                    { xmlns: 'http://www.w3.org/2000/svg', width: '19.411', height: '12.941', viewBox: '0 0 19.411 12.941', className: 'ml-2' },
                                    _react2.default.createElement(
                                        'g',
                                        { transform: 'translate(-0.282 -87.521)' },
                                        _react2.default.createElement(
                                            'g',
                                            { transform: 'translate(0.282 87.521)' },
                                            _react2.default.createElement('path', { className: 'link-arrow-clr',
                                                d: 'M19.293,91.517l-6.066-6.066a.4.4,0,0,0-.572.572L18.03,91.4H.4a.4.4,0,0,0,0,.809H18.03l-5.376,5.376a.4.4,0,1,0,.572.572l6.066-6.066A.4.4,0,0,0,19.293,91.517Z',
                                                transform: 'translate(0 -85.333)' })
                                        )
                                    )
                                )
                            )
                        ) : '',
                        this.props.fromGold ? _react2.default.createElement(
                            'a',
                            { style: { position: 'absolute', right: 0, top: 0 } },
                            _react2.default.createElement(
                                'span',
                                { style: { fontSize: '13px', marginRight: 10 }, className: 'right-text-col', onClick: function onClick() {
                                        return _this2.props.goldNetwork();
                                    } },
                                'View Docprime Gold Network'
                            )
                        ) : ''
                    ),
                    discount ? _react2.default.createElement(
                        'div',
                        { className: 'discount-badge d-none' },
                        _react2.default.createElement(
                            'h6',
                            null,
                            'Upto ' + discount + ' OFF'
                        )
                    ) : '',
                    dataList && dataList.length ? _react2.default.createElement(
                        'div',
                        { className: 'card-slider-container ' + (type == 'opd' || type == 'lab' ? 'mbl-wdgt' : '') + ' ', id: dataType },
                        type == 'lab' && !this.props.is_user_insurance_active ? _react2.default.createElement(_PrescriptionUpload2.default, { historyObj: this.props.historyObj, is_home_page: true, locationObj: this.props.locationObj, profiles: this.props.profiles, afterUserLogin: this.props.afterUserLogin, labWidget: true }) : '',
                        dataList.map(function (listItem, i) {

                            return _react2.default.createElement(
                                'div',
                                { className: 'slider-card-column', key: i + '_dataType', onClick: function onClick() {
                                        return _this2.props.searchFunc(_extends({}, listItem, { topHospitals: topHospitals, topPackages: topPackages }), _this2);
                                    } },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'slide-img-col d-flex justify-content-center align-item-center' },
                                    _react2.default.createElement('img', { className: 'img-fluid', src: listItem.svg_icon ? listItem.svg_icon : listItem.icon ? listItem.icon : listItem.logo, alt: 'Partners' })
                                ),
                                _react2.default.createElement(
                                    'h5',
                                    { className: 'card-name' },
                                    listItem.name,
                                    listItem.no_of_tests > 0 ? _react2.default.createElement(
                                        'span',
                                        { className: 'ml-2' },
                                        '(' + listItem.no_of_tests + ' tests)'
                                    ) : ''
                                ),
                                _this2.props.fromGold && listItem.vip_percentage ? _react2.default.createElement(
                                    'h5',
                                    { className: 'off-txt' },
                                    parseInt(listItem.vip_percentage),
                                    '% OFF'
                                ) : '',
                                type == "package" ? _react2.default.createElement(
                                    _react2.default.Fragment,
                                    null,

                                    //for login, gold enabled member or vip enabled member
                                    listItem.vip && (listItem.vip.is_gold_member || listItem.vip.is_vip_member) && listItem.vip.covered_under_vip ? _react2.default.createElement(
                                        _react2.default.Fragment,
                                        null,
                                        listItem.vip.vip_amount + listItem.vip.vip_convenience_amount != listItem.mrp ? _react2.default.createElement(
                                            'h6',
                                            { className: 'test-price fw-500 mt-3' },
                                            '\u20B9 ',
                                            listItem.mrp
                                        ) : '',
                                        _react2.default.createElement(
                                            'h6',
                                            { className: 'gold-test-price fw-500 mt-3' },
                                            _react2.default.createElement('img', { height: '18', src: '' + (listItem.vip.is_gold_member ? "https://cdn.docprime.com/cp/assets/img/gold-lg.png" : "https://cdn.docprime.com/cp/assets/img/vip-lg.png"), alt: 'gold' }),
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'ml-2' },
                                                'Price \u20B9 ',
                                                listItem.vip.vip_amount + listItem.vip.vip_convenience_amount
                                            )
                                        )
                                    ) : _react2.default.createElement(
                                        _react2.default.Fragment,
                                        null,
                                        listItem.discounted_price == listItem.mrp ? _react2.default.createElement(
                                            'h6',
                                            { className: 'test-price fw-500 mt-3', style: { marginTop: 10, marginBottom: 10 } },
                                            '\u20B9 ',
                                            listItem.mrp
                                        ) : _react2.default.createElement(
                                            'div',
                                            { className: 'pkg-prc-ct', style: { marginTop: 10, marginBottom: 10 } },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'justify-content-around', style: { fontSize: 12 } },
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    '\u20B9 ',
                                                    listItem.discounted_price,
                                                    _react2.default.createElement(
                                                        'span',
                                                        { className: 'pkg-ofr-cut-prc' },
                                                        '\u20B9 ',
                                                        listItem.mrp
                                                    )
                                                ),
                                                parseInt((listItem.mrp - listItem.discounted_price) / listItem.mrp * 100) != 0 && listItem.discounted_price != listItem.mrp ? _react2.default.createElement(
                                                    'span',
                                                    { className: 'pkg-hlth-offer' },
                                                    parseInt((listItem.mrp - listItem.discounted_price) / listItem.mrp * 100),
                                                    '% OFF'
                                                ) : ''
                                            )
                                        ),
                                        listItem.vip && !listItem.vip.is_gold_member && !listItem.vip.is_vip_member && listItem.discounted_price > listItem.vip.vip_convenience_amount + listItem.vip.vip_gold_price && listItem.vip.is_gold && listItem.vip.is_enable_for_vip ? _react2.default.createElement(
                                            'div',
                                            { className: 'pkg-prc-ct home-screengoldprice', style: { fontSize: 13 }, onClick: _this2.goldClicked },
                                            _react2.default.createElement('img', { style: { width: '32px', 'marginRight': '5px' }, src: "/assets" + '/img/gold-sm.png' }),
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                'Price'
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                { style: { color: 'black' } },
                                                '\u20B9 ',
                                                listItem.vip.vip_gold_price + listItem.vip.vip_convenience_amount
                                            )
                                        ) : ''
                                    )
                                ) : ''
                            );
                        }),
                        this.props.searchType ? _react2.default.createElement(
                            'div',
                            { className: 'col-4 home-card-col search-icon-col', key: 'search' + this.props.searchType },
                            _react2.default.createElement(
                                'div',
                                { className: 'grid-img-cnt search-icon-col' },
                                _react2.default.createElement(
                                    'a',
                                    { href: '#', onClick: function onClick(e) {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            _this2.navigateTo(navTo);
                                        } },
                                    _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + "/images/vall.png" }),
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        'Search more ',
                                        this.props.searchType
                                    )
                                )
                            )
                        ) : ''
                    ) : '',
                    _react2.default.createElement(
                        'a',
                        { className: 'pkg-btnlft d-none', id: dataType + '_RightArrow_hsptl', onClick: this.scroll.bind(this, 'left') },
                        _react2.default.createElement(
                            'svg',
                            { xmlns: 'http://www.w3.org/2000/svg', width: '5.004', height: '8.472', viewBox: '0 0 5.004 8.472' },
                            _react2.default.createElement(
                                'g',
                                { transform: 'translate(105.702) rotate(90)' },
                                _react2.default.createElement(
                                    'g',
                                    { transform: 'translate(0 100.698)' },
                                    _react2.default.createElement('path', { className: 'link-arrow-clr',
                                        d: 'M8.336,101.116l-.278-.279a.465.465,0,0,0-.656,0L4.238,104l-3.169-3.169a.465.465,0,0,0-.655,0l-.278.278a.464.464,0,0,0,0,.655l3.773,3.787a.474.474,0,0,0,.329.149h0a.474.474,0,0,0,.328-.149l3.77-3.777a.47.47,0,0,0,0-.66Z',
                                        transform: 'translate(0 -100.698)' })
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'a',
                        { className: 'pkg-btnrgt', id: dataType + '_leftArrow_hsptl', onClick: this.scroll.bind(this, 'right') },
                        _react2.default.createElement(
                            'svg',
                            { xmlns: 'http://www.w3.org/2000/svg', width: '5.004', height: '8.472', viewBox: '0 0 5.004 8.472' },
                            _react2.default.createElement(
                                'g',
                                { transform: 'translate(105.702) rotate(90)' },
                                _react2.default.createElement(
                                    'g',
                                    { transform: 'translate(0 100.698)' },
                                    _react2.default.createElement('path', { className: 'link-arrow-clr',
                                        d: 'M8.336,101.116l-.278-.279a.465.465,0,0,0-.656,0L4.238,104l-3.169-3.169a.465.465,0,0,0-.655,0l-.278.278a.464.464,0,0,0,0,.655l3.773,3.787a.474.474,0,0,0,.329.149h0a.474.474,0,0,0,.328-.149l3.77-3.777a.47.47,0,0,0,0-.66Z',
                                        transform: 'translate(0 -100.698)' })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return HomePageWidgets;
}(_react2.default.PureComponent);

exports.default = HomePageWidgets;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWVOZXdWaWV3L0hvbWVQYWdlV2lkZ2V0LmpzIl0sIm5hbWVzIjpbIkhvbWVQYWdlV2lkZ2V0cyIsInByb3BzIiwibmF2aWdhdGVUbyIsIndoZXJlIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidHlwZSIsInNlbGVjdFNlYXJjaFR5cGUiLCJoaXN0b3J5T2JqIiwicHVzaCIsImdvbGRDbGlja2VkIiwiZGF0YSIsIkdUTSIsImdldFVzZXJJZCIsInNlbmRFdmVudCIsInN0YXRlIiwiZGF0YVR5cGUiLCJlbG1udCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvdXRlckRpdldpZHRoIiwib2Zmc2V0V2lkdGgiLCJjYXJkQ291bnQiLCJjaGlsZHJlbiIsImxlbmd0aCIsImNoaWxkRGl2V2lkdGgiLCJzY3JvbGxXaWR0aCIsImNhcmRXaWR0aCIsIk1hdGgiLCJjZWlsIiwibGVmdFNjcm9sbCIsInNjcm9sbExlZnQiLCJzY3JvbGwiLCJsZWZ0IiwiYmVoYXZpb3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJoZWFkaW5nIiwicmlnaHRUZXh0IiwiZGlzY291bnQiLCJ0b3BIb3NwaXRhbHMiLCJ0b3BQYWNrYWdlcyIsIm5hdlRvIiwiY291bnQiLCJkYXRhTGlzdCIsImxpc3QiLCJzbGljZSIsIm9wZF9sYWIiLCJyaWdodEJ1dHRvbkNsaWNrZWQiLCJtYXJnaW5SaWdodCIsImZyb21Hb2xkIiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsImZvbnRTaXplIiwiZ29sZE5ldHdvcmsiLCJpc191c2VyX2luc3VyYW5jZV9hY3RpdmUiLCJsb2NhdGlvbk9iaiIsInByb2ZpbGVzIiwiYWZ0ZXJVc2VyTG9naW4iLCJtYXAiLCJsaXN0SXRlbSIsImkiLCJzZWFyY2hGdW5jIiwic3ZnX2ljb24iLCJpY29uIiwibG9nbyIsIm5hbWUiLCJub19vZl90ZXN0cyIsInZpcF9wZXJjZW50YWdlIiwicGFyc2VJbnQiLCJ2aXAiLCJpc19nb2xkX21lbWJlciIsImlzX3ZpcF9tZW1iZXIiLCJjb3ZlcmVkX3VuZGVyX3ZpcCIsInZpcF9hbW91bnQiLCJ2aXBfY29udmVuaWVuY2VfYW1vdW50IiwibXJwIiwiZGlzY291bnRlZF9wcmljZSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInZpcF9nb2xkX3ByaWNlIiwiaXNfZ29sZCIsImlzX2VuYWJsZV9mb3JfdmlwIiwid2lkdGgiLCJBU1NFVFNfQkFTRV9VUkwiLCJjb2xvciIsInNlYXJjaFR5cGUiLCJiaW5kIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUdNQSxlOzs7QUFFTCw2QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHNJQUNOQSxLQURNOztBQUFBLGNBbUNoQkMsVUFuQ2dCLEdBbUNILFVBQUNDLEtBQUQsRUFBUUMsQ0FBUixFQUFhO0FBQ3RCLGdCQUFJQSxDQUFKLEVBQU87QUFDSEEsa0JBQUVDLGNBQUY7QUFDQUQsa0JBQUVFLGVBQUY7QUFDSDs7QUFFRCxnQkFBSSxNQUFLTCxLQUFMLENBQVdNLElBQWYsRUFBcUI7QUFDakIsc0JBQUtOLEtBQUwsQ0FBV08sZ0JBQVgsQ0FBNEIsTUFBS1AsS0FBTCxDQUFXTSxJQUF2QztBQUNIO0FBQ0Qsa0JBQUtOLEtBQUwsQ0FBV1EsVUFBWCxDQUFzQkMsSUFBdEIsQ0FBMkJQLEtBQTNCO0FBQ0gsU0E3Q2U7O0FBQUEsY0ErQ2hCUSxXQS9DZ0IsR0ErQ0gsWUFBSTtBQUNiLGdCQUFJQyxPQUFPO0FBQ1AsNEJBQVksYUFETCxFQUNvQixVQUFVLHdCQUQ5QixFQUN3RCxjQUFjQyxJQUFJQyxTQUFKLE1BQW1CLEVBRHpGLEVBQzZGLFVBQVUsQ0FEdkcsRUFDMEcsU0FBUztBQURuSCxhQUFYO0FBR0FELGdCQUFJRSxTQUFKLENBQWMsRUFBRUgsTUFBTUEsSUFBUixF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eEUsUUFBUCxzQkFBakMsRUFBcUUsU0FBUyxLQUFLZ0IsTUFBTCxDQUFZeUQsSUFBWixDQUFpQixJQUFqQixFQUF1QixNQUF2QixDQUE5RTtBQUVJO0FBQUE7QUFBQSw4QkFBSyxPQUFNLDRCQUFYLEVBQXdDLE9BQU0sT0FBOUMsRUFBc0QsUUFBTyxPQUE3RCxFQUFxRSxTQUFRLGlCQUE3RTtBQUNJO0FBQUE7QUFBQSxrQ0FBRyxXQUFVLCtCQUFiO0FBQ0k7QUFBQTtBQUFBLHNDQUFHLFdBQVUsc0JBQWI7QUFDSSw0RUFBTSxXQUFVLGdCQUFoQjtBQUNJLDJDQUFFLDROQUROO0FBRUksbURBQVUsdUJBRmQ7QUFESjtBQURKO0FBREo7QUFGSixxQkEvSWhCO0FBMkpnQjtBQUFBO0FBQUEsMEJBQUcsV0FBVSxZQUFiLEVBQTBCLElBQU96RSxRQUFQLHFCQUExQixFQUE2RCxTQUFTLEtBQUtnQixNQUFMLENBQVl5RCxJQUFaLENBQWlCLElBQWpCLEVBQXVCLE9BQXZCLENBQXRFO0FBQ0k7QUFBQTtBQUFBLDhCQUFLLE9BQU0sNEJBQVgsRUFBd0MsT0FBTSxPQUE5QyxFQUFzRCxRQUFPLE9BQTdELEVBQXFFLFNBQVEsaUJBQTdFO0FBQ0k7QUFBQTtBQUFBLGtDQUFHLFdBQVUsK0JBQWI7QUFDSTtBQUFBO0FBQUEsc0NBQUcsV0FBVSxzQkFBYjtBQUNJLDRFQUFNLFdBQVUsZ0JBQWhCO0FBQ0ksMkNBQUUsNE5BRE47QUFFSSxtREFBVSx1QkFGZDtBQURKO0FBREo7QUFESjtBQURKO0FBM0poQjtBQURELGFBREQ7QUEyS0E7Ozs7RUEvTzRCQyxnQkFBTUMsYTs7a0JBa1ByQjVGLGUiLCJmaWxlIjoiNTIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByZXNjcmlwdGlvblVwbG9hZCBmcm9tICcuLi8uLi8uLi9jb250YWluZXJzL2NvbW1vbnMvUHJlc2NyaXB0aW9uVXBsb2FkLmpzJ1xuXG5cbmNsYXNzIEhvbWVQYWdlV2lkZ2V0cyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2Nyb2xsKHR5cGUpIHtcbiAgICAgICAgbGV0IGRhdGFUeXBlID0gdGhpcy5wcm9wcy5kYXRhVHlwZVxuICAgICAgICB2YXIgZWxtbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhVHlwZSlcblxuICAgICAgICBpZihlbG1udCkge1xuICAgICAgICAgICAgbGV0IG91dGVyRGl2V2lkdGggPSBlbG1udC5vZmZzZXRXaWR0aFxuICAgICAgICAgICAgbGV0IGNhcmRDb3VudCA9IGVsbW50LmNoaWxkcmVuICYmIGVsbW50LmNoaWxkcmVuLmxlbmd0aD9lbG1udC5jaGlsZHJlbi5sZW5ndGg6OTtcbiAgICAgICAgICAgIGxldCBjaGlsZERpdldpZHRoID0gZWxtbnQuc2Nyb2xsV2lkdGg/ZWxtbnQuc2Nyb2xsV2lkdGg6MzAwMDtcbiAgICAgICAgICAgIGxldCBjYXJkV2lkdGggPSBNYXRoLmNlaWwoY2hpbGREaXZXaWR0aCAvIGNhcmRDb3VudClcblxuICAgICAgICAgICAgbGV0IGxlZnRTY3JvbGwgPSBlbG1udC5zY3JvbGxMZWZ0XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09ICdyaWdodCcpIHtcbiAgICAgICAgICAgICAgICBlbG1udC5zY3JvbGwoeyBsZWZ0OiBsZWZ0U2Nyb2xsICsgb3V0ZXJEaXZXaWR0aCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkRGl2V2lkdGggPD0gKGxlZnRTY3JvbGwgKyAgMipvdXRlckRpdldpZHRoICkgKSAge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtkYXRhVHlwZX1fbGVmdEFycm93X2hzcHRsYCkuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtkYXRhVHlwZX1fUmlnaHRBcnJvd19oc3B0bGApLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxtbnQuc2Nyb2xsKHsgbGVmdDogbGVmdFNjcm9sbCAtIG91dGVyRGl2V2lkdGgsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICAgICAgICAgIGlmIChsZWZ0U2Nyb2xsIC0gb3V0ZXJEaXZXaWR0aCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2RhdGFUeXBlfV9SaWdodEFycm93X2hzcHRsYCkuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtkYXRhVHlwZX1fbGVmdEFycm93X2hzcHRsYCkuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmF2aWdhdGVUbyA9ICh3aGVyZSwgZSkgPT57XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0U2VhcmNoVHlwZSh0aGlzLnByb3BzLnR5cGUpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5T2JqLnB1c2god2hlcmUpXG4gICAgfVxuXG4gICAgZ29sZENsaWNrZWQgPSgpPT57XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdIb21lUGFja2FnZUdvbGRDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAndmlwLWhvbWVwYWdlLXBhY2thZ2UtZ29sZC1jbGlja2VkJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeU9iai5wdXNoKCcvdmlwLWdvbGQtZGV0YWlscz9pc19nb2xkPXRydWUmc291cmNlPWhvbWVwYWdlcGFja2FnZWdvbGRsaXN0aW5nJmxlYWRfc291cmNlPURvY3ByaW1lJylcbiAgICB9XG5cblx0cmVuZGVyKCl7XG5cblx0XHRsZXQgeyBkYXRhVHlwZSwgaGVhZGluZywgcmlnaHRUZXh0LCBkaXNjb3VudCwgdG9wSG9zcGl0YWxzLCB0b3BQYWNrYWdlcywgdHlwZSwgbmF2VG8sIGNvdW50IH0gPSB0aGlzLnByb3BzXG4gICAgICAgIGxldCBkYXRhTGlzdCA9IHRoaXMucHJvcHMubGlzdDtcblxuICAgICAgICBpZihkYXRhTGlzdCAmJiBkYXRhTGlzdC5sZW5ndGggJiYgY291bnQpIHtcbiAgICAgICAgICAgIGRhdGFMaXN0ID0gZGF0YUxpc3Quc2xpY2UoMCwgY291bnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG9wZF9sYWIgPSAodHlwZT09J2xhYicgfHwgdHlwZT09J29wZCcpXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXJkLWJsb2NrLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRvcC1jYXJkLXJvdyAke3JpZ2h0VGV4dD8nZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuJzonJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNj57aGVhZGluZ308L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXHRyaWdodFRleHQ/XG4gICAgICAgICAgICAgICAgICAgICAgICBcdDxhIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtLWNlbnRlclwiIGhyZWY9XCIvXCIgb25DbGljaz17KGUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXHRcdHRoaXMucHJvcHMucmlnaHRCdXR0b25DbGlja2VkKHt0eXBlLCB3aGVyZTpuYXZUb30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgXHR9fT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxMH19IGNsYXNzTmFtZT17b3BkX2xhYj8ncmlnaHQtdGV4dC1jb2wnOicnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyaWdodFRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE5LjQxMVwiIGhlaWdodD1cIjEyLjk0MVwiIHZpZXdCb3g9XCIwIDAgMTkuNDExIDEyLjk0MVwiIGNsYXNzTmFtZT1cIm1sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTAuMjgyIC04Ny41MjEpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjI4MiA4Ny41MjEpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJsaW5rLWFycm93LWNsclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xOS4yOTMsOTEuNTE3bC02LjA2Ni02LjA2NmEuNC40LDAsMCwwLS41NzIuNTcyTDE4LjAzLDkxLjRILjRhLjQuNCwwLDAsMCwwLC44MDlIMTguMDNsLTUuMzc2LDUuMzc2YS40LjQsMCwxLDAsLjU3Mi41NzJsNi4wNjYtNi4wNjZBLjQuNCwwLDAsMCwxOS4yOTMsOTEuNTE3WlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgLTg1LjMzMylcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIGNsYXNzTmFtZT1cIm1sLTJcIiBoZWlnaHQ9XCIxMlwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3JpZ2h0LWFycm93LnN2Z1wifSBhbHQ9XCJhcnJvd1wiLz4gKi99XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5mcm9tR29sZD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17e3Bvc2l0aW9uOidhYnNvbHV0ZScsIHJpZ2h0OjAsIHRvcDowfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTNweCcsbWFyZ2luUmlnaHQ6MTAgfX0gY2xhc3NOYW1lPVwicmlnaHQtdGV4dC1jb2xcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmdvbGROZXR3b3JrKCl9PlZpZXcgRG9jcHJpbWUgR29sZCBOZXR3b3JrPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXHRkaXNjb3VudD9cbiAgICAgICAgICAgICAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImRpc2NvdW50LWJhZGdlIGQtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj57YFVwdG8gJHtkaXNjb3VudH0gT0ZGYH08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7LyogY2FyZCBzbGlkZXIgKi99XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFMaXN0ICYmIGRhdGFMaXN0Lmxlbmd0aD9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2FyZC1zbGlkZXItY29udGFpbmVyICR7KHR5cGU9PSdvcGQnIHx8IHR5cGU9PSdsYWInKT8nbWJsLXdkZ3QnOicnfSBgfSBpZD17ZGF0YVR5cGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9PSdsYWInICYmICF0aGlzLnByb3BzLmlzX3VzZXJfaW5zdXJhbmNlX2FjdGl2ZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJlc2NyaXB0aW9uVXBsb2FkIGhpc3RvcnlPYmo9e3RoaXMucHJvcHMuaGlzdG9yeU9ian0gaXNfaG9tZV9wYWdlPXt0cnVlfSBsb2NhdGlvbk9iaiA9IHt0aGlzLnByb3BzLmxvY2F0aW9uT2JqfSBwcm9maWxlcz17dGhpcy5wcm9wcy5wcm9maWxlc30gYWZ0ZXJVc2VyTG9naW49e3RoaXMucHJvcHMuYWZ0ZXJVc2VyTG9naW59IGxhYldpZGdldD17dHJ1ZX0vPiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUxpc3QubWFwKChsaXN0SXRlbSwgaSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgc2xpZGVyLWNhcmQtY29sdW1uYH0ga2V5PXtgJHtpfV9kYXRhVHlwZWB9IG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLnNlYXJjaEZ1bmMoey4uLmxpc3RJdGVtLCB0b3BIb3NwaXRhbHMsIHRvcFBhY2thZ2VzIH0sdGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaW1nLWNvbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17bGlzdEl0ZW0uc3ZnX2ljb24/bGlzdEl0ZW0uc3ZnX2ljb246bGlzdEl0ZW0uaWNvbj9saXN0SXRlbS5pY29uOmxpc3RJdGVtLmxvZ299IGFsdD1cIlBhcnRuZXJzXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdEl0ZW0ubmFtZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtLm5vX29mX3Rlc3RzID4gMD88c3BhbiBjbGFzc05hbWU9XCJtbC0yXCIgPntgKCR7bGlzdEl0ZW0ubm9fb2ZfdGVzdHN9IHRlc3RzKWB9PC9zcGFuPjonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmZyb21Hb2xkICYmIGxpc3RJdGVtLnZpcF9wZXJjZW50YWdlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm9mZi10eHRcIj57cGFyc2VJbnQobGlzdEl0ZW0udmlwX3BlcmNlbnRhZ2UpfSUgT0ZGPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9PSBcInBhY2thZ2VcIj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZm9yIGxvZ2luLCBnb2xkIGVuYWJsZWQgbWVtYmVyIG9yIHZpcCBlbmFibGVkIG1lbWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0udmlwICYmICggbGlzdEl0ZW0udmlwLmlzX2dvbGRfbWVtYmVyIHx8IGxpc3RJdGVtLnZpcC5pc192aXBfbWVtYmVyICkgJiYgbGlzdEl0ZW0udmlwLmNvdmVyZWRfdW5kZXJfdmlwP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGxpc3RJdGVtLnZpcC52aXBfYW1vdW50ICsgbGlzdEl0ZW0udmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnQpIT0gbGlzdEl0ZW0ubXJwP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGVzdC1wcmljZSBmdy01MDAgbXQtM1wiPiYjODM3Nzsge2xpc3RJdGVtLm1ycH08L2g2PjonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZ29sZC10ZXN0LXByaWNlIGZ3LTUwMCBtdC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaGVpZ2h0PVwiMThcIiBzcmM9e2Ake2xpc3RJdGVtLnZpcC5pc19nb2xkX21lbWJlcj9cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9jcC9hc3NldHMvaW1nL2dvbGQtbGcucG5nXCI6XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vY3AvYXNzZXRzL2ltZy92aXAtbGcucG5nXCJ9YCB9IGFsdD1cImdvbGRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTJcIj5QcmljZSAmIzgzNzc7IHtsaXN0SXRlbS52aXAudmlwX2Ftb3VudCArIGxpc3RJdGVtLnZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbS5kaXNjb3VudGVkX3ByaWNlID09IGxpc3RJdGVtLm1ycFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/PGg2IGNsYXNzTmFtZT1cInRlc3QtcHJpY2UgZnctNTAwIG10LTNcIiBzdHlsZT17e21hcmdpblRvcDogMTAsIG1hcmdpbkJvdHRvbTogMTB9fT4mIzgzNzc7IHtsaXN0SXRlbS5tcnB9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxkaXYgY2xhc3NOYW1lPVwicGtnLXByYy1jdFwiIHN0eWxlPXt7bWFyZ2luVG9wOiAxMCwgbWFyZ2luQm90dG9tOiAxMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWFyb3VuZFwiIHN0eWxlPXt7Zm9udFNpemU6IDEyfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+4oK5IHtsaXN0SXRlbS5kaXNjb3VudGVkX3ByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwa2ctb2ZyLWN1dC1wcmNcIj7igrkge2xpc3RJdGVtLm1ycH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KCgobGlzdEl0ZW0ubXJwIC0gbGlzdEl0ZW0uZGlzY291bnRlZF9wcmljZSkgLyBsaXN0SXRlbS5tcnApICogMTAwKSE9MCAmJiAobGlzdEl0ZW0uZGlzY291bnRlZF9wcmljZSAhPSBsaXN0SXRlbS5tcnApP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwa2ctaGx0aC1vZmZlclwiPntwYXJzZUludCgoKGxpc3RJdGVtLm1ycCAtIGxpc3RJdGVtLmRpc2NvdW50ZWRfcHJpY2UpIC8gbGlzdEl0ZW0ubXJwKSAqIDEwMCl9JSBPRkY8L3NwYW4+OicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0udmlwICYmICFsaXN0SXRlbS52aXAuaXNfZ29sZF9tZW1iZXIgJiYgIWxpc3RJdGVtLnZpcC5pc192aXBfbWVtYmVyICYmIGxpc3RJdGVtLmRpc2NvdW50ZWRfcHJpY2U+KGxpc3RJdGVtLnZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50ICsgbGlzdEl0ZW0udmlwLnZpcF9nb2xkX3ByaWNlKSAmJiBsaXN0SXRlbS52aXAuaXNfZ29sZCAmJiBsaXN0SXRlbS52aXAuaXNfZW5hYmxlX2Zvcl92aXA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1wcmMtY3QgaG9tZS1zY3JlZW5nb2xkcHJpY2VcIiBzdHlsZT17eyBmb250U2l6ZTogMTN9fSBvbkNsaWNrPXt0aGlzLmdvbGRDbGlja2VkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6ICczMnB4JywnbWFyZ2luUmlnaHQnOiAnNXB4J319IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZ29sZC1zbS5wbmcnfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UHJpY2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjonYmxhY2snfX0+4oK5IHtsaXN0SXRlbS52aXAudmlwX2dvbGRfcHJpY2UrIGxpc3RJdGVtLnZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWFyY2hUeXBlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNCBob21lLWNhcmQtY29sIHNlYXJjaC1pY29uLWNvbFwiIGtleT17YHNlYXJjaCR7dGhpcy5wcm9wcy5zZWFyY2hUeXBlfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWltZy1jbnQgc2VhcmNoLWljb24tY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8obmF2VG8pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWFnZXMvdmFsbC5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2VhcmNoIG1vcmUge3RoaXMucHJvcHMuc2VhcmNoVHlwZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJyAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICB7Lyogc2xpZGVyIGJ1dHRvbnMgKi99XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBrZy1idG5sZnQgZC1ub25lXCIgaWQ9e2Ake2RhdGFUeXBlfV9SaWdodEFycm93X2hzcHRsYH0gb25DbGljaz17dGhpcy5zY3JvbGwuYmluZCh0aGlzLCAnbGVmdCcpfT4gXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBoZWlnaHQ9XCIxMlwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NvbG9yLWNoZXYuc3ZnXCJ9IGFsdD1cImNoZXYtbGVmdFwiLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjUuMDA0XCIgaGVpZ2h0PVwiOC40NzJcIiB2aWV3Qm94PVwiMCAwIDUuMDA0IDguNDcyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEwNS43MDIpIHJvdGF0ZSg5MClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMTAwLjY5OClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImxpbmstYXJyb3ctY2xyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTguMzM2LDEwMS4xMTZsLS4yNzgtLjI3OWEuNDY1LjQ2NSwwLDAsMC0uNjU2LDBMNC4yMzgsMTA0bC0zLjE2OS0zLjE2OWEuNDY1LjQ2NSwwLDAsMC0uNjU1LDBsLS4yNzguMjc4YS40NjQuNDY0LDAsMCwwLDAsLjY1NWwzLjc3MywzLjc4N2EuNDc0LjQ3NCwwLDAsMCwuMzI5LjE0OWgwYS40NzQuNDc0LDAsMCwwLC4zMjgtLjE0OWwzLjc3LTMuNzc3YS40Ny40NywwLDAsMCwwLS42NlpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIC0xMDAuNjk4KVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwa2ctYnRucmd0XCIgaWQ9e2Ake2RhdGFUeXBlfV9sZWZ0QXJyb3dfaHNwdGxgfSBvbkNsaWNrPXt0aGlzLnNjcm9sbC5iaW5kKHRoaXMsICdyaWdodCcpfT4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjUuMDA0XCIgaGVpZ2h0PVwiOC40NzJcIiB2aWV3Qm94PVwiMCAwIDUuMDA0IDguNDcyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEwNS43MDIpIHJvdGF0ZSg5MClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMTAwLjY5OClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImxpbmstYXJyb3ctY2xyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTguMzM2LDEwMS4xMTZsLS4yNzgtLjI3OWEuNDY1LjQ2NSwwLDAsMC0uNjU2LDBMNC4yMzgsMTA0bC0zLjE2OS0zLjE2OWEuNDY1LjQ2NSwwLDAsMC0uNjU1LDBsLS4yNzguMjc4YS40NjQuNDY0LDAsMCwwLDAsLjY1NWwzLjc3MywzLjc4N2EuNDc0LjQ3NCwwLDAsMCwuMzI5LjE0OWgwYS40NzQuNDc0LDAsMCwwLC4zMjgtLjE0OWwzLjc3LTMuNzc3YS40Ny40NywwLDAsMCwwLS42NlpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIC0xMDAuNjk4KVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VXaWRnZXRzIl0sInNvdXJjZVJvb3QiOiIifQ==