exports.ids = [40];
exports.modules = {

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _PrescriptionUpload = __webpack_require__(/*! ../../../containers/commons/PrescriptionUpload.js */ "./dev/js/containers/commons/PrescriptionUpload.js");

var _PrescriptionUpload2 = _interopRequireDefault(_PrescriptionUpload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HomePageWidgets extends _react2.default.PureComponent {

    constructor(props) {
        super(props);

        this.navigateTo = (where, e) => {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }

            if (this.props.type) {
                this.props.selectSearchType(this.props.type);
            }
            this.props.historyObj.push(where);
        };

        this.goldClicked = () => {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'HomePackageGoldClicked', 'CustomerID': GTM.getUserId() || '', 'leadid': 0, 'event': 'vip-homepage-package-gold-clicked'
            };
            GTM.sendEvent({ data: data });
            this.props.historyObj.push('/vip-gold-details?is_gold=true&source=homepagepackagegoldlisting&lead_source=Docprime');
        };

        this.state = {};
    }

    scroll(type) {
        let dataType = this.props.dataType;
        var elmnt = document.getElementById(dataType);

        if (elmnt) {
            let outerDivWidth = elmnt.offsetWidth;
            let cardCount = elmnt.children && elmnt.children.length ? elmnt.children.length : 9;
            let childDivWidth = elmnt.scrollWidth ? elmnt.scrollWidth : 3000;
            let cardWidth = Math.ceil(childDivWidth / cardCount);

            let leftScroll = elmnt.scrollLeft;

            if (type == 'right') {
                elmnt.scroll({ left: leftScroll + outerDivWidth, behavior: 'smooth' });
                if (childDivWidth <= leftScroll + 2 * outerDivWidth) {
                    document.getElementById(`${dataType}_leftArrow_hsptl`).classList.add("d-none");
                }
                document.getElementById(`${dataType}_RightArrow_hsptl`).classList.remove("d-none");
            } else {
                elmnt.scroll({ left: leftScroll - outerDivWidth, behavior: 'smooth' });
                if (leftScroll - outerDivWidth <= 0) {
                    document.getElementById(`${dataType}_RightArrow_hsptl`).classList.add("d-none");
                }
                document.getElementById(`${dataType}_leftArrow_hsptl`).classList.remove("d-none");
            }
        }
    }

    render() {

        let { dataType, heading, rightText, discount, topHospitals, topPackages, type, navTo, count } = this.props;
        let dataList = this.props.list;

        if (dataList && dataList.length && count) {
            dataList = dataList.slice(0, count);
        }

        let opd_lab = type == 'lab' || type == 'opd';

        return _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(
                'section',
                { className: 'card-block-row' },
                _react2.default.createElement(
                    'div',
                    { className: `top-card-row ${rightText ? 'd-flex align-item-center justify-content-between' : ''}` },
                    _react2.default.createElement(
                        'h6',
                        null,
                        heading
                    ),
                    rightText ? _react2.default.createElement(
                        'a',
                        { className: 'd-flex align-item-center', href: '/', onClick: e => {
                                e.preventDefault();
                                this.props.rightButtonClicked({ type, where: navTo });
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
                            { style: { fontSize: '13px', marginRight: 10 }, className: 'right-text-col', onClick: () => this.props.goldNetwork() },
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
                        `Upto ${discount} OFF`
                    )
                ) : '',
                dataList && dataList.length ? _react2.default.createElement(
                    'div',
                    { className: `card-slider-container ${type == 'opd' || type == 'lab' ? 'mbl-wdgt' : ''} `, id: dataType },
                    type == 'lab' && !this.props.is_user_insurance_active ? _react2.default.createElement(_PrescriptionUpload2.default, { historyObj: this.props.historyObj, is_home_page: true, locationObj: this.props.locationObj, profiles: this.props.profiles, afterUserLogin: this.props.afterUserLogin, labWidget: true }) : '',
                    dataList.map((listItem, i) => {

                        return _react2.default.createElement(
                            'div',
                            { className: `slider-card-column`, key: `${i}_dataType`, onClick: () => this.props.searchFunc(_extends({}, listItem, { topHospitals, topPackages }), this) },
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
                                    `(${listItem.no_of_tests} tests)`
                                ) : ''
                            ),
                            this.props.fromGold && listItem.vip_percentage ? _react2.default.createElement(
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
                                        _react2.default.createElement('img', { height: '18', src: `${listItem.vip.is_gold_member ? "https://cdn.docprime.com/cp/assets/img/gold-lg.png" : "https://cdn.docprime.com/cp/assets/img/vip-lg.png"}`, alt: 'gold' }),
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
                                        { className: 'pkg-prc-ct home-screengoldprice', style: { fontSize: 13 }, onClick: this.goldClicked },
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
                        { className: 'col-4 home-card-col search-icon-col', key: `search${this.props.searchType}` },
                        _react2.default.createElement(
                            'div',
                            { className: 'grid-img-cnt search-icon-col' },
                            _react2.default.createElement(
                                'a',
                                { href: '#', onClick: e => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        this.navigateTo(navTo);
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
                    { className: 'pkg-btnlft d-none', id: `${dataType}_RightArrow_hsptl`, onClick: this.scroll.bind(this, 'left') },
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
                    { className: 'pkg-btnrgt', id: `${dataType}_leftArrow_hsptl`, onClick: this.scroll.bind(this, 'right') },
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
}

exports.default = HomePageWidgets;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWVOZXdWaWV3L0hvbWVQYWdlV2lkZ2V0LmpzIl0sIm5hbWVzIjpbIkhvbWVQYWdlV2lkZ2V0cyIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJuYXZpZ2F0ZVRvIiwid2hlcmUiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0eXBlIiwic2VsZWN0U2VhcmNoVHlwZSIsImhpc3RvcnlPYmoiLCJwdXNoIiwiZ29sZENsaWNrZWQiLCJkYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VuZEV2ZW50Iiwic3RhdGUiLCJzY3JvbGwiLCJkYXRhVHlwZSIsImVsbW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm91dGVyRGl2V2lkdGgiLCJvZmZzZXRXaWR0aCIsImNhcmRDb3VudCIsImNoaWxkcmVuIiwibGVuZ3RoIiwiY2hpbGREaXZXaWR0aCIsInNjcm9sbFdpZHRoIiwiY2FyZFdpZHRoIiwiTWF0aCIsImNlaWwiLCJsZWZ0U2Nyb2xsIiwic2Nyb2xsTGVmdCIsImxlZnQiLCJiZWhhdmlvciIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInJlbmRlciIsImhlYWRpbmciLCJyaWdodFRleHQiLCJkaXNjb3VudCIsInRvcEhvc3BpdGFscyIsInRvcFBhY2thZ2VzIiwibmF2VG8iLCJjb3VudCIsImRhdGFMaXN0IiwibGlzdCIsInNsaWNlIiwib3BkX2xhYiIsInJpZ2h0QnV0dG9uQ2xpY2tlZCIsIm1hcmdpblJpZ2h0IiwiZnJvbUdvbGQiLCJwb3NpdGlvbiIsInJpZ2h0IiwidG9wIiwiZm9udFNpemUiLCJnb2xkTmV0d29yayIsImlzX3VzZXJfaW5zdXJhbmNlX2FjdGl2ZSIsImxvY2F0aW9uT2JqIiwicHJvZmlsZXMiLCJhZnRlclVzZXJMb2dpbiIsIm1hcCIsImxpc3RJdGVtIiwiaSIsInNlYXJjaEZ1bmMiLCJzdmdfaWNvbiIsImljb24iLCJsb2dvIiwibmFtZSIsIm5vX29mX3Rlc3RzIiwidmlwX3BlcmNlbnRhZ2UiLCJwYXJzZUludCIsInZpcCIsImlzX2dvbGRfbWVtYmVyIiwiaXNfdmlwX21lbWJlciIsImNvdmVyZWRfdW5kZXJfdmlwIiwidmlwX2Ftb3VudCIsInZpcF9jb252ZW5pZW5jZV9hbW91bnQiLCJtcnAiLCJkaXNjb3VudGVkX3ByaWNlIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwidmlwX2dvbGRfcHJpY2UiLCJpc19nb2xkIiwiaXNfZW5hYmxlX2Zvcl92aXAiLCJ3aWR0aCIsIkFTU0VUU19CQVNFX1VSTCIsImNvbG9yIiwic2VhcmNoVHlwZSIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFHQSxNQUFNQSxlQUFOLFNBQThCQyxnQkFBTUMsYUFBcEMsQ0FBa0Q7O0FBRWpEQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNaLGNBQU1BLEtBQU47O0FBRFksYUFtQ2hCQyxVQW5DZ0IsR0FtQ0gsQ0FBQ0MsS0FBRCxFQUFRQyxDQUFSLEtBQWE7QUFDdEIsZ0JBQUlBLENBQUosRUFBTztBQUNIQSxrQkFBRUMsY0FBRjtBQUNBRCxrQkFBRUUsZUFBRjtBQUNIOztBQUVELGdCQUFJLEtBQUtMLEtBQUwsQ0FBV00sSUFBZixFQUFxQjtBQUNqQixxQkFBS04sS0FBTCxDQUFXTyxnQkFBWCxDQUE0QixLQUFLUCxLQUFMLENBQVdNLElBQXZDO0FBQ0g7QUFDRCxpQkFBS04sS0FBTCxDQUFXUSxVQUFYLENBQXNCQyxJQUF0QixDQUEyQlAsS0FBM0I7QUFDSCxTQTdDZTs7QUFBQSxhQStDaEJRLFdBL0NnQixHQStDSCxNQUFJO0FBQ2IsZ0JBQUlDLE9BQU87QUFDUCw0QkFBWSxhQURMLEVBQ29CLFVBQVUsd0JBRDlCLEVBQ3dELGNBQWNDLElBQUlDLFNBQUosTUFBbUIsRUFEekYsRUFDNkYsVUFBVSxDQUR2RyxFQUMwRyxTQUFTO0FBRG5ILGFBQVg7QUFHQUQsZ0JBQUlFLFNBQUosQ0FBYyxFQUFFSCxNQUFNQSxJQUFSLEVBQWQ7QUFDQSxpQkFBS1gsS0FBTCxDQUFXUSxVQUFYLENBQXNCQyxJQUF0QixDQUEyQix1RkFBM0I7QUFDSCxTQXJEZTs7QUFFWixhQUFLTSxLQUFMLEdBQWEsRUFBYjtBQUdIOztBQUVEQyxXQUFPVixJQUFQLEVBQWE7QUFDVCxZQUFJVyxXQUFXLEtBQUtqQixLQUFMLENBQVdpQixRQUExQjtBQUNBLFlBQUlDLFFBQVFDLFNBQVNDLGNBQVQsQ0FBd0JILFFBQXhCLENBQVo7O0FBRUEsWUFBR0MsS0FBSCxFQUFVO0FBQ04sZ0JBQUlHLGdCQUFnQkgsTUFBTUksV0FBMUI7QUFDQSxnQkFBSUMsWUFBWUwsTUFBTU0sUUFBTixJQUFrQk4sTUFBTU0sUUFBTixDQUFlQyxNQUFqQyxHQUF3Q1AsTUFBTU0sUUFBTixDQUFlQyxNQUF2RCxHQUE4RCxDQUE5RTtBQUNBLGdCQUFJQyxnQkFBZ0JSLE1BQU1TLFdBQU4sR0FBa0JULE1BQU1TLFdBQXhCLEdBQW9DLElBQXhEO0FBQ0EsZ0JBQUlDLFlBQVlDLEtBQUtDLElBQUwsQ0FBVUosZ0JBQWdCSCxTQUExQixDQUFoQjs7QUFFQSxnQkFBSVEsYUFBYWIsTUFBTWMsVUFBdkI7O0FBRUEsZ0JBQUkxQixRQUFRLE9BQVosRUFBcUI7QUFDakJZLHNCQUFNRixNQUFOLENBQWEsRUFBRWlCLE1BQU1GLGFBQWFWLGFBQXJCLEVBQW9DYSxVQUFVLFFBQTlDLEVBQWI7QUFDQSxvQkFBSVIsaUJBQWtCSyxhQUFjLElBQUVWLGFBQXRDLEVBQXlEO0FBQ3JERiw2QkFBU0MsY0FBVCxDQUF5QixHQUFFSCxRQUFTLGtCQUFwQyxFQUF1RGtCLFNBQXZELENBQWlFQyxHQUFqRSxDQUFxRSxRQUFyRTtBQUNIO0FBQ0RqQix5QkFBU0MsY0FBVCxDQUF5QixHQUFFSCxRQUFTLG1CQUFwQyxFQUF3RGtCLFNBQXhELENBQWtFRSxNQUFsRSxDQUF5RSxRQUF6RTtBQUNILGFBTkQsTUFNTztBQUNIbkIsc0JBQU1GLE1BQU4sQ0FBYSxFQUFFaUIsTUFBTUYsYUFBYVYsYUFBckIsRUFBb0NhLFVBQVUsUUFBOUMsRUFBYjtBQUNBLG9CQUFJSCxhQUFhVixhQUFiLElBQThCLENBQWxDLEVBQXFDO0FBQ2pDRiw2QkFBU0MsY0FBVCxDQUF5QixHQUFFSCxRQUFTLG1CQUFwQyxFQUF3RGtCLFNBQXhELENBQWtFQyxHQUFsRSxDQUFzRSxRQUF0RTtBQUNIO0FBQ0RqQix5QkFBU0MsY0FBVCxDQUF5QixHQUFFSCxRQUFTLGtCQUFwQyxFQUF1RGtCLFNBQXZELENBQWlFRSxNQUFqRSxDQUF3RSxRQUF4RTtBQUNIO0FBQ0o7QUFDSjs7QUFzQkpDLGFBQVE7O0FBRVAsWUFBSSxFQUFFckIsUUFBRixFQUFZc0IsT0FBWixFQUFxQkMsU0FBckIsRUFBZ0NDLFFBQWhDLEVBQTBDQyxZQUExQyxFQUF3REMsV0FBeEQsRUFBcUVyQyxJQUFyRSxFQUEyRXNDLEtBQTNFLEVBQWtGQyxLQUFsRixLQUE0RixLQUFLN0MsS0FBckc7QUFDTSxZQUFJOEMsV0FBVyxLQUFLOUMsS0FBTCxDQUFXK0MsSUFBMUI7O0FBRUEsWUFBR0QsWUFBWUEsU0FBU3JCLE1BQXJCLElBQStCb0IsS0FBbEMsRUFBeUM7QUFDckNDLHVCQUFXQSxTQUFTRSxLQUFULENBQWUsQ0FBZixFQUFrQkgsS0FBbEIsQ0FBWDtBQUNIOztBQUVELFlBQUlJLFVBQVczQyxRQUFNLEtBQU4sSUFBZUEsUUFBTSxLQUFwQzs7QUFFTixlQUNDO0FBQUMsMkJBQUQsQ0FBTyxRQUFQO0FBQUE7QUFDQztBQUFBO0FBQUEsa0JBQVMsV0FBVSxnQkFBbkI7QUFDZ0I7QUFBQTtBQUFBLHNCQUFLLFdBQVksZ0JBQWVrQyxZQUFVLGtEQUFWLEdBQTZELEVBQUcsRUFBaEc7QUFDSTtBQUFBO0FBQUE7QUFBS0Q7QUFBTCxxQkFESjtBQUdLQyxnQ0FDQTtBQUFBO0FBQUEsMEJBQUcsV0FBVSwwQkFBYixFQUF3QyxNQUFLLEdBQTdDLEVBQWlELFNBQVVyQyxDQUFELElBQUs7QUFDOURBLGtDQUFFQyxjQUFGO0FBQ0EscUNBQUtKLEtBQUwsQ0FBV2tELGtCQUFYLENBQThCLEVBQUM1QyxJQUFELEVBQU9KLE9BQU0wQyxLQUFiLEVBQTlCO0FBQ0EsNkJBSEQ7QUFJSTtBQUFBO0FBQUEsOEJBQU0sT0FBTyxFQUFFTyxhQUFhLEVBQWYsRUFBYixFQUFpQyxXQUFXRixVQUFRLGdCQUFSLEdBQXlCLEVBQXJFO0FBQ1FULHFDQURSO0FBRU87QUFBQTtBQUFBLGtDQUFLLE9BQU0sNEJBQVgsRUFBd0MsT0FBTSxRQUE5QyxFQUF1RCxRQUFPLFFBQTlELEVBQXVFLFNBQVEsbUJBQS9FLEVBQW1HLFdBQVUsTUFBN0c7QUFDSTtBQUFBO0FBQUEsc0NBQUcsV0FBVSwyQkFBYjtBQUNJO0FBQUE7QUFBQSwwQ0FBRyxXQUFVLHlCQUFiO0FBQ0ksZ0ZBQU0sV0FBVSxnQkFBaEI7QUFDSSwrQ0FBRSw4SkFETjtBQUVJLHVEQUFVLHNCQUZkO0FBREo7QUFESjtBQURKO0FBRlA7QUFKSixxQkFEQSxHQW1CQyxFQXRCTjtBQXlCUSx5QkFBS3hDLEtBQUwsQ0FBV29ELFFBQVgsR0FDQTtBQUFBO0FBQUEsMEJBQUcsT0FBTyxFQUFDQyxVQUFTLFVBQVYsRUFBc0JDLE9BQU0sQ0FBNUIsRUFBK0JDLEtBQUksQ0FBbkMsRUFBVjtBQUNJO0FBQUE7QUFBQSw4QkFBTSxPQUFPLEVBQUVDLFVBQVUsTUFBWixFQUFtQkwsYUFBWSxFQUEvQixFQUFiLEVBQWtELFdBQVUsZ0JBQTVELEVBQTZFLFNBQVMsTUFBTSxLQUFLbkQsS0FBTCxDQUFXeUQsV0FBWCxFQUE1RjtBQUFBO0FBQUE7QUFESixxQkFEQSxHQUlDO0FBN0JULGlCQURoQjtBQWtDaUJoQiwyQkFDQTtBQUFBO0FBQUEsc0JBQUssV0FBVSx1QkFBZjtBQUNPO0FBQUE7QUFBQTtBQUFNLGdDQUFPQSxRQUFTO0FBQXRCO0FBRFAsaUJBREEsR0FJSSxFQXRDckI7QUEwQ29CSyw0QkFBWUEsU0FBU3JCLE1BQXJCLEdBQ0E7QUFBQTtBQUFBLHNCQUFLLFdBQVkseUJBQXlCbkIsUUFBTSxLQUFOLElBQWVBLFFBQU0sS0FBdEIsR0FBNkIsVUFBN0IsR0FBd0MsRUFBRyxHQUFwRixFQUF3RixJQUFJVyxRQUE1RjtBQUVJWCw0QkFBTSxLQUFOLElBQWUsQ0FBQyxLQUFLTixLQUFMLENBQVcwRCx3QkFBM0IsR0FDQSw4QkFBQyw0QkFBRCxJQUFvQixZQUFZLEtBQUsxRCxLQUFMLENBQVdRLFVBQTNDLEVBQXVELGNBQWMsSUFBckUsRUFBMkUsYUFBZSxLQUFLUixLQUFMLENBQVcyRCxXQUFyRyxFQUFrSCxVQUFVLEtBQUszRCxLQUFMLENBQVc0RCxRQUF2SSxFQUFpSixnQkFBZ0IsS0FBSzVELEtBQUwsQ0FBVzZELGNBQTVLLEVBQTRMLFdBQVcsSUFBdk0sR0FEQSxHQUVDLEVBSkw7QUFPSWYsNkJBQVNnQixHQUFULENBQWEsQ0FBQ0MsUUFBRCxFQUFXQyxDQUFYLEtBQWlCOztBQUU5QiwrQkFBTztBQUFBO0FBQUEsOEJBQUssV0FBWSxvQkFBakIsRUFBc0MsS0FBTSxHQUFFQSxDQUFFLFdBQWhELEVBQTRELFNBQVMsTUFBSSxLQUFLaEUsS0FBTCxDQUFXaUUsVUFBWCxjQUEwQkYsUUFBMUIsSUFBb0NyQixZQUFwQyxFQUFrREMsV0FBbEQsS0FBZ0UsSUFBaEUsQ0FBekU7QUFDSztBQUFBO0FBQUEsa0NBQUssV0FBVSwrREFBZjtBQUNJLHVFQUFLLFdBQVUsV0FBZixFQUEyQixLQUFLb0IsU0FBU0csUUFBVCxHQUFrQkgsU0FBU0csUUFBM0IsR0FBb0NILFNBQVNJLElBQVQsR0FBY0osU0FBU0ksSUFBdkIsR0FBNEJKLFNBQVNLLElBQXpHLEVBQStHLEtBQUksVUFBbkg7QUFESiw2QkFETDtBQUtLO0FBQUE7QUFBQSxrQ0FBSSxXQUFVLFdBQWQ7QUFDS0wseUNBQVNNLElBRGQ7QUFHUU4seUNBQVNPLFdBQVQsR0FBdUIsQ0FBdkIsR0FBeUI7QUFBQTtBQUFBLHNDQUFNLFdBQVUsTUFBaEI7QUFBMEIsd0NBQUdQLFNBQVNPLFdBQVk7QUFBbEQsaUNBQXpCLEdBQTRGO0FBSHBHLDZCQUxMO0FBYVMsaUNBQUt0RSxLQUFMLENBQVdvRCxRQUFYLElBQXVCVyxTQUFTUSxjQUFoQyxHQUNJO0FBQUE7QUFBQSxrQ0FBSSxXQUFVLFNBQWQ7QUFBeUJDLHlDQUFTVCxTQUFTUSxjQUFsQixDQUF6QjtBQUFBO0FBQUEsNkJBREosR0FFQyxFQWZWO0FBa0JTakUsb0NBQVEsU0FBUixHQUNBO0FBQUMsK0NBQUQsQ0FBTyxRQUFQO0FBQUE7O0FBRUE7QUFDSXlELHlDQUFTVSxHQUFULEtBQWtCVixTQUFTVSxHQUFULENBQWFDLGNBQWIsSUFBK0JYLFNBQVNVLEdBQVQsQ0FBYUUsYUFBOUQsS0FBaUZaLFNBQVNVLEdBQVQsQ0FBYUcsaUJBQTlGLEdBQ0E7QUFBQyxtREFBRCxDQUFPLFFBQVA7QUFBQTtBQUVTYiw2Q0FBU1UsR0FBVCxDQUFhSSxVQUFiLEdBQTBCZCxTQUFTVSxHQUFULENBQWFLLHNCQUF4QyxJQUFrRWYsU0FBU2dCLEdBQTNFLEdBQ0E7QUFBQTtBQUFBLDBDQUFJLFdBQVUsd0JBQWQ7QUFBQTtBQUFnRGhCLGlEQUFTZ0I7QUFBekQscUNBREEsR0FDbUUsRUFIM0U7QUFNSTtBQUFBO0FBQUEsMENBQUksV0FBVSw2QkFBZDtBQUNJLCtFQUFLLFFBQU8sSUFBWixFQUFpQixLQUFNLEdBQUVoQixTQUFTVSxHQUFULENBQWFDLGNBQWIsR0FBNEIsb0RBQTVCLEdBQWlGLG1EQUFvRCxFQUE5SixFQUFrSyxLQUFJLE1BQXRLLEdBREo7QUFFSTtBQUFBO0FBQUEsOENBQU0sV0FBVSxNQUFoQjtBQUFBO0FBQXNDWCxxREFBU1UsR0FBVCxDQUFhSSxVQUFiLEdBQTBCZCxTQUFTVSxHQUFULENBQWFLO0FBQTdFO0FBRko7QUFOSixpQ0FEQSxHQVlDO0FBQUMsbURBQUQsQ0FBTyxRQUFQO0FBQUE7QUFFT2YsNkNBQVNpQixnQkFBVCxJQUE2QmpCLFNBQVNnQixHQUF0QyxHQUNDO0FBQUE7QUFBQSwwQ0FBSSxXQUFVLHdCQUFkLEVBQXVDLE9BQU8sRUFBQ0UsV0FBVyxFQUFaLEVBQWdCQyxjQUFjLEVBQTlCLEVBQTlDO0FBQUE7QUFBMEZuQixpREFBU2dCO0FBQW5HLHFDQURELEdBRUM7QUFBQTtBQUFBLDBDQUFLLFdBQVUsWUFBZixFQUE0QixPQUFPLEVBQUNFLFdBQVcsRUFBWixFQUFnQkMsY0FBYyxFQUE5QixFQUFuQztBQUNHO0FBQUE7QUFBQSw4Q0FBRyxXQUFVLHdCQUFiLEVBQXNDLE9BQU8sRUFBQzFCLFVBQVUsRUFBWCxFQUE3QztBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQVNPLHlEQUFTaUIsZ0JBQWxCO0FBQ0k7QUFBQTtBQUFBLHNEQUFNLFdBQVUsaUJBQWhCO0FBQUE7QUFBcUNqQiw2REFBU2dCO0FBQTlDO0FBREosNkNBREo7QUFLUVAscURBQVUsQ0FBQ1QsU0FBU2dCLEdBQVQsR0FBZWhCLFNBQVNpQixnQkFBekIsSUFBNkNqQixTQUFTZ0IsR0FBdkQsR0FBOEQsR0FBdkUsS0FBNkUsQ0FBN0UsSUFBbUZoQixTQUFTaUIsZ0JBQVQsSUFBNkJqQixTQUFTZ0IsR0FBekgsR0FDQTtBQUFBO0FBQUEsa0RBQU0sV0FBVSxnQkFBaEI7QUFBa0NQLHlEQUFVLENBQUNULFNBQVNnQixHQUFULEdBQWVoQixTQUFTaUIsZ0JBQXpCLElBQTZDakIsU0FBU2dCLEdBQXZELEdBQThELEdBQXZFLENBQWxDO0FBQUE7QUFBQSw2Q0FEQSxHQUMySDtBQU5uSTtBQURILHFDQUpSO0FBaUJXaEIsNkNBQVNVLEdBQVQsSUFBZ0IsQ0FBQ1YsU0FBU1UsR0FBVCxDQUFhQyxjQUE5QixJQUFnRCxDQUFDWCxTQUFTVSxHQUFULENBQWFFLGFBQTlELElBQStFWixTQUFTaUIsZ0JBQVQsR0FBMkJqQixTQUFTVSxHQUFULENBQWFLLHNCQUFiLEdBQXNDZixTQUFTVSxHQUFULENBQWFVLGNBQTdKLElBQWdMcEIsU0FBU1UsR0FBVCxDQUFhVyxPQUE3TCxJQUF3TXJCLFNBQVNVLEdBQVQsQ0FBYVksaUJBQXJOLEdBQ0E7QUFBQTtBQUFBLDBDQUFLLFdBQVUsaUNBQWYsRUFBaUQsT0FBTyxFQUFFN0IsVUFBVSxFQUFaLEVBQXhELEVBQXlFLFNBQVMsS0FBSzlDLFdBQXZGO0FBQ0ksK0VBQUssT0FBTyxFQUFDNEUsT0FBTyxNQUFSLEVBQWUsZUFBZSxLQUE5QixFQUFaLEVBQWtELEtBQUtDLFNBQWVBLEdBQUcsa0JBQXpFLEdBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlDQUZKO0FBR0k7QUFBQTtBQUFBLDhDQUFHLE9BQU8sRUFBQ0MsT0FBTSxPQUFQLEVBQVY7QUFBQTtBQUE4QnpCLHFEQUFTVSxHQUFULENBQWFVLGNBQWIsR0FBNkJwQixTQUFTVSxHQUFULENBQWFLO0FBQXhFO0FBSEoscUNBREEsR0FNQztBQXZCWjtBQWZMLDZCQURBLEdBNENDO0FBOURWLHlCQUFQO0FBbUVDLHFCQXJFRCxDQVBKO0FBZ0ZJLHlCQUFLOUUsS0FBTCxDQUFXeUYsVUFBWCxHQUNJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLHFDQUFmLEVBQXFELEtBQU0sU0FBUSxLQUFLekYsS0FBTCxDQUFXeUYsVUFBVyxFQUF6RjtBQUNJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLDhCQUFmO0FBQ0k7QUFBQTtBQUFBLGtDQUFHLE1BQUssR0FBUixFQUFZLFNBQVV0RixDQUFELElBQUs7QUFDdEJBLDBDQUFFQyxjQUFGO0FBQ0FELDBDQUFFRSxlQUFGO0FBQ0EsNkNBQUtKLFVBQUwsQ0FBZ0IyQyxLQUFoQjtBQUF1QixxQ0FIM0I7QUFLSSx1RUFBSyxXQUFVLFdBQWYsRUFBMkIsS0FBSzJDLFNBQWVBLEdBQUcsa0JBQWxELEdBTEo7QUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFtQix5Q0FBS3ZGLEtBQUwsQ0FBV3lGO0FBQTlCO0FBTko7QUFESjtBQURKLHFCQURKLEdBWWE7QUE1RmpCLGlCQURBLEdBZ0dDLEVBMUlyQjtBQStJZ0I7QUFBQTtBQUFBLHNCQUFHLFdBQVUsbUJBQWIsRUFBaUMsSUFBSyxHQUFFeEUsUUFBUyxtQkFBakQsRUFBcUUsU0FBUyxLQUFLRCxNQUFMLENBQVkwRSxJQUFaLENBQWlCLElBQWpCLEVBQXVCLE1BQXZCLENBQTlFO0FBRUk7QUFBQTtBQUFBLDBCQUFLLE9BQU0sNEJBQVgsRUFBd0MsT0FBTSxPQUE5QyxFQUFzRCxRQUFPLE9BQTdELEVBQXFFLFNBQVEsaUJBQTdFO0FBQ0k7QUFBQTtBQUFBLDhCQUFHLFdBQVUsK0JBQWI7QUFDSTtBQUFBO0FBQUEsa0NBQUcsV0FBVSxzQkFBYjtBQUNJLHdFQUFNLFdBQVUsZ0JBQWhCO0FBQ0ksdUNBQUUsNE5BRE47QUFFSSwrQ0FBVSx1QkFGZDtBQURKO0FBREo7QUFESjtBQUZKLGlCQS9JaEI7QUEySmdCO0FBQUE7QUFBQSxzQkFBRyxXQUFVLFlBQWIsRUFBMEIsSUFBSyxHQUFFekUsUUFBUyxrQkFBMUMsRUFBNkQsU0FBUyxLQUFLRCxNQUFMLENBQVkwRSxJQUFaLENBQWlCLElBQWpCLEVBQXVCLE9BQXZCLENBQXRFO0FBQ0k7QUFBQTtBQUFBLDBCQUFLLE9BQU0sNEJBQVgsRUFBd0MsT0FBTSxPQUE5QyxFQUFzRCxRQUFPLE9BQTdELEVBQXFFLFNBQVEsaUJBQTdFO0FBQ0k7QUFBQTtBQUFBLDhCQUFHLFdBQVUsK0JBQWI7QUFDSTtBQUFBO0FBQUEsa0NBQUcsV0FBVSxzQkFBYjtBQUNJLHdFQUFNLFdBQVUsZ0JBQWhCO0FBQ0ksdUNBQUUsNE5BRE47QUFFSSwrQ0FBVSx1QkFGZDtBQURKO0FBREo7QUFESjtBQURKO0FBM0poQjtBQURELFNBREQ7QUEyS0E7QUEvT2dEOztrQkFrUG5DOUYsZSIsImZpbGUiOiI0MC5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJlc2NyaXB0aW9uVXBsb2FkIGZyb20gJy4uLy4uLy4uL2NvbnRhaW5lcnMvY29tbW9ucy9QcmVzY3JpcHRpb25VcGxvYWQuanMnXG5cblxuY2xhc3MgSG9tZVBhZ2VXaWRnZXRzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY3JvbGwodHlwZSkge1xuICAgICAgICBsZXQgZGF0YVR5cGUgPSB0aGlzLnByb3BzLmRhdGFUeXBlXG4gICAgICAgIHZhciBlbG1udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGFUeXBlKVxuXG4gICAgICAgIGlmKGVsbW50KSB7XG4gICAgICAgICAgICBsZXQgb3V0ZXJEaXZXaWR0aCA9IGVsbW50Lm9mZnNldFdpZHRoXG4gICAgICAgICAgICBsZXQgY2FyZENvdW50ID0gZWxtbnQuY2hpbGRyZW4gJiYgZWxtbnQuY2hpbGRyZW4ubGVuZ3RoP2VsbW50LmNoaWxkcmVuLmxlbmd0aDo5O1xuICAgICAgICAgICAgbGV0IGNoaWxkRGl2V2lkdGggPSBlbG1udC5zY3JvbGxXaWR0aD9lbG1udC5zY3JvbGxXaWR0aDozMDAwO1xuICAgICAgICAgICAgbGV0IGNhcmRXaWR0aCA9IE1hdGguY2VpbChjaGlsZERpdldpZHRoIC8gY2FyZENvdW50KVxuXG4gICAgICAgICAgICBsZXQgbGVmdFNjcm9sbCA9IGVsbW50LnNjcm9sbExlZnRcblxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgICAgIGVsbW50LnNjcm9sbCh7IGxlZnQ6IGxlZnRTY3JvbGwgKyBvdXRlckRpdldpZHRoLCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGREaXZXaWR0aCA8PSAobGVmdFNjcm9sbCArICAyKm91dGVyRGl2V2lkdGggKSApICB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2RhdGFUeXBlfV9sZWZ0QXJyb3dfaHNwdGxgKS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2RhdGFUeXBlfV9SaWdodEFycm93X2hzcHRsYCkuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbG1udC5zY3JvbGwoeyBsZWZ0OiBsZWZ0U2Nyb2xsIC0gb3V0ZXJEaXZXaWR0aCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG4gICAgICAgICAgICAgICAgaWYgKGxlZnRTY3JvbGwgLSBvdXRlckRpdldpZHRoIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZGF0YVR5cGV9X1JpZ2h0QXJyb3dfaHNwdGxgKS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2RhdGFUeXBlfV9sZWZ0QXJyb3dfaHNwdGxgKS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvID0gKHdoZXJlLCBlKSA9PntcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHlwZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RTZWFyY2hUeXBlKHRoaXMucHJvcHMudHlwZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnlPYmoucHVzaCh3aGVyZSlcbiAgICB9XG5cbiAgICBnb2xkQ2xpY2tlZCA9KCk9PntcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0hvbWVQYWNrYWdlR29sZENsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICd2aXAtaG9tZXBhZ2UtcGFja2FnZS1nb2xkLWNsaWNrZWQnXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5T2JqLnB1c2goJy92aXAtZ29sZC1kZXRhaWxzP2lzX2dvbGQ9dHJ1ZSZzb3VyY2U9aG9tZXBhZ2VwYWNrYWdlZ29sZGxpc3RpbmcmbGVhZF9zb3VyY2U9RG9jcHJpbWUnKVxuICAgIH1cblxuXHRyZW5kZXIoKXtcblxuXHRcdGxldCB7IGRhdGFUeXBlLCBoZWFkaW5nLCByaWdodFRleHQsIGRpc2NvdW50LCB0b3BIb3NwaXRhbHMsIHRvcFBhY2thZ2VzLCB0eXBlLCBuYXZUbywgY291bnQgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgbGV0IGRhdGFMaXN0ID0gdGhpcy5wcm9wcy5saXN0O1xuXG4gICAgICAgIGlmKGRhdGFMaXN0ICYmIGRhdGFMaXN0Lmxlbmd0aCAmJiBjb3VudCkge1xuICAgICAgICAgICAgZGF0YUxpc3QgPSBkYXRhTGlzdC5zbGljZSgwLCBjb3VudCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgb3BkX2xhYiA9ICh0eXBlPT0nbGFiJyB8fCB0eXBlPT0nb3BkJylcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhcmQtYmxvY2stcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9wLWNhcmQtcm93ICR7cmlnaHRUZXh0PydkLWZsZXggYWxpZ24taXRlbS1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4nOicnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2PntoZWFkaW5nfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcdHJpZ2h0VGV4dD9cbiAgICAgICAgICAgICAgICAgICAgICAgIFx0PGEgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyXCIgaHJlZj1cIi9cIiBvbkNsaWNrPXsoZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcdFx0dGhpcy5wcm9wcy5yaWdodEJ1dHRvbkNsaWNrZWQoe3R5cGUsIHdoZXJlOm5hdlRvfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcdH19PlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDEwfX0gY2xhc3NOYW1lPXtvcGRfbGFiPydyaWdodC10ZXh0LWNvbCc6Jyd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JpZ2h0VGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTkuNDExXCIgaGVpZ2h0PVwiMTIuOTQxXCIgdmlld0JveD1cIjAgMCAxOS40MTEgMTIuOTQxXCIgY2xhc3NOYW1lPVwibWwtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMC4yODIgLTg3LjUyMSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMjgyIDg3LjUyMSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImxpbmstYXJyb3ctY2xyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE5LjI5Myw5MS41MTdsLTYuMDY2LTYuMDY2YS40LjQsMCwwLDAtLjU3Mi41NzJMMTguMDMsOTEuNEguNGEuNC40LDAsMCwwLDAsLjgwOUgxOC4wM2wtNS4zNzYsNS4zNzZhLjQuNCwwLDEsMCwuNTcyLjU3Mmw2LjA2Ni02LjA2NkEuNC40LDAsMCwwLDE5LjI5Myw5MS41MTdaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAtODUuMzMzKVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgY2xhc3NOYW1lPVwibWwtMlwiIGhlaWdodD1cIjEyXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcmlnaHQtYXJyb3cuc3ZnXCJ9IGFsdD1cImFycm93XCIvPiAqL31cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmZyb21Hb2xkP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7cG9zaXRpb246J2Fic29sdXRlJywgcmlnaHQ6MCwgdG9wOjB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxM3B4JyxtYXJnaW5SaWdodDoxMCB9fSBjbGFzc05hbWU9XCJyaWdodC10ZXh0LWNvbFwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuZ29sZE5ldHdvcmsoKX0+VmlldyBEb2NwcmltZSBHb2xkIE5ldHdvcms8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcdGRpc2NvdW50P1xuICAgICAgICAgICAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiZGlzY291bnQtYmFkZ2UgZC1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PntgVXB0byAke2Rpc2NvdW50fSBPRkZgfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHsvKiBjYXJkIHNsaWRlciAqL31cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUxpc3QgJiYgZGF0YUxpc3QubGVuZ3RoP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BjYXJkLXNsaWRlci1jb250YWluZXIgJHsodHlwZT09J29wZCcgfHwgdHlwZT09J2xhYicpPydtYmwtd2RndCc6Jyd9IGB9IGlkPXtkYXRhVHlwZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT09J2xhYicgJiYgIXRoaXMucHJvcHMuaXNfdXNlcl9pbnN1cmFuY2VfYWN0aXZlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmVzY3JpcHRpb25VcGxvYWQgaGlzdG9yeU9iaj17dGhpcy5wcm9wcy5oaXN0b3J5T2JqfSBpc19ob21lX3BhZ2U9e3RydWV9IGxvY2F0aW9uT2JqID0ge3RoaXMucHJvcHMubG9jYXRpb25PYmp9IHByb2ZpbGVzPXt0aGlzLnByb3BzLnByb2ZpbGVzfSBhZnRlclVzZXJMb2dpbj17dGhpcy5wcm9wcy5hZnRlclVzZXJMb2dpbn0gbGFiV2lkZ2V0PXt0cnVlfS8+ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhTGlzdC5tYXAoKGxpc3RJdGVtLCBpKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2BzbGlkZXItY2FyZC1jb2x1bW5gfSBrZXk9e2Ake2l9X2RhdGFUeXBlYH0gb25DbGljaz17KCk9PnRoaXMucHJvcHMuc2VhcmNoRnVuYyh7Li4ubGlzdEl0ZW0sIHRvcEhvc3BpdGFscywgdG9wUGFja2FnZXMgfSx0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1pbWctY29sIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW0tY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtsaXN0SXRlbS5zdmdfaWNvbj9saXN0SXRlbS5zdmdfaWNvbjpsaXN0SXRlbS5pY29uP2xpc3RJdGVtLmljb246bGlzdEl0ZW0ubG9nb30gYWx0PVwiUGFydG5lcnNcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0SXRlbS5uYW1lfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0ubm9fb2ZfdGVzdHMgPiAwPzxzcGFuIGNsYXNzTmFtZT1cIm1sLTJcIiA+e2AoJHtsaXN0SXRlbS5ub19vZl90ZXN0c30gdGVzdHMpYH08L3NwYW4+OicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZnJvbUdvbGQgJiYgbGlzdEl0ZW0udmlwX3BlcmNlbnRhZ2U/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwib2ZmLXR4dFwiPntwYXJzZUludChsaXN0SXRlbS52aXBfcGVyY2VudGFnZSl9JSBPRkY8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID09IFwicGFja2FnZVwiP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9mb3IgbG9naW4sIGdvbGQgZW5hYmxlZCBtZW1iZXIgb3IgdmlwIGVuYWJsZWQgbWVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbS52aXAgJiYgKCBsaXN0SXRlbS52aXAuaXNfZ29sZF9tZW1iZXIgfHwgbGlzdEl0ZW0udmlwLmlzX3ZpcF9tZW1iZXIgKSAmJiBsaXN0SXRlbS52aXAuY292ZXJlZF91bmRlcl92aXA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobGlzdEl0ZW0udmlwLnZpcF9hbW91bnQgKyBsaXN0SXRlbS52aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudCkhPSBsaXN0SXRlbS5tcnA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXN0LXByaWNlIGZ3LTUwMCBtdC0zXCI+JiM4Mzc3OyB7bGlzdEl0ZW0ubXJwfTwvaDY+OicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJnb2xkLXRlc3QtcHJpY2UgZnctNTAwIG10LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBoZWlnaHQ9XCIxOFwiIHNyYz17YCR7bGlzdEl0ZW0udmlwLmlzX2dvbGRfbWVtYmVyP1wiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL2NwL2Fzc2V0cy9pbWcvZ29sZC1sZy5wbmdcIjpcImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9jcC9hc3NldHMvaW1nL3ZpcC1sZy5wbmdcIn1gIH0gYWx0PVwiZ29sZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiPlByaWNlICYjODM3Nzsge2xpc3RJdGVtLnZpcC52aXBfYW1vdW50ICsgbGlzdEl0ZW0udmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtLmRpc2NvdW50ZWRfcHJpY2UgPT0gbGlzdEl0ZW0ubXJwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID88aDYgY2xhc3NOYW1lPVwidGVzdC1wcmljZSBmdy01MDAgbXQtM1wiIHN0eWxlPXt7bWFyZ2luVG9wOiAxMCwgbWFyZ2luQm90dG9tOiAxMH19PiYjODM3Nzsge2xpc3RJdGVtLm1ycH08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PGRpdiBjbGFzc05hbWU9XCJwa2ctcHJjLWN0XCIgc3R5bGU9e3ttYXJnaW5Ub3A6IDEwLCBtYXJnaW5Cb3R0b206IDEwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kXCIgc3R5bGU9e3tmb250U2l6ZTogMTJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7igrkge2xpc3RJdGVtLmRpc2NvdW50ZWRfcHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBrZy1vZnItY3V0LXByY1wiPuKCuSB7bGlzdEl0ZW0ubXJwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoKChsaXN0SXRlbS5tcnAgLSBsaXN0SXRlbS5kaXNjb3VudGVkX3ByaWNlKSAvIGxpc3RJdGVtLm1ycCkgKiAxMDApIT0wICYmIChsaXN0SXRlbS5kaXNjb3VudGVkX3ByaWNlICE9IGxpc3RJdGVtLm1ycCk/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBrZy1obHRoLW9mZmVyXCI+e3BhcnNlSW50KCgobGlzdEl0ZW0ubXJwIC0gbGlzdEl0ZW0uZGlzY291bnRlZF9wcmljZSkgLyBsaXN0SXRlbS5tcnApICogMTAwKX0lIE9GRjwvc3Bhbj46JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbS52aXAgJiYgIWxpc3RJdGVtLnZpcC5pc19nb2xkX21lbWJlciAmJiAhbGlzdEl0ZW0udmlwLmlzX3ZpcF9tZW1iZXIgJiYgbGlzdEl0ZW0uZGlzY291bnRlZF9wcmljZT4obGlzdEl0ZW0udmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnQgKyBsaXN0SXRlbS52aXAudmlwX2dvbGRfcHJpY2UpICYmIGxpc3RJdGVtLnZpcC5pc19nb2xkICYmIGxpc3RJdGVtLnZpcC5pc19lbmFibGVfZm9yX3ZpcD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnLXByYy1jdCBob21lLXNjcmVlbmdvbGRwcmljZVwiIHN0eWxlPXt7IGZvbnRTaXplOiAxM319IG9uQ2xpY2s9e3RoaXMuZ29sZENsaWNrZWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3t3aWR0aDogJzMycHgnLCdtYXJnaW5SaWdodCc6ICc1cHgnfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9nb2xkLXNtLnBuZyd9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QcmljZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOidibGFjayd9fT7igrkge2xpc3RJdGVtLnZpcC52aXBfZ29sZF9wcmljZSsgbGlzdEl0ZW0udmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlYXJjaFR5cGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00IGhvbWUtY2FyZC1jb2wgc2VhcmNoLWljb24tY29sXCIga2V5PXtgc2VhcmNoJHt0aGlzLnByb3BzLnNlYXJjaFR5cGV9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaW1nLWNudCBzZWFyY2gtaWNvbi1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbyhuYXZUbyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltYWdlcy92YWxsLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TZWFyY2ggbW9yZSB7dGhpcy5wcm9wcy5zZWFyY2hUeXBlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgOicnICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBzbGlkZXIgYnV0dG9ucyAqL31cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGtnLWJ0bmxmdCBkLW5vbmVcIiBpZD17YCR7ZGF0YVR5cGV9X1JpZ2h0QXJyb3dfaHNwdGxgfSBvbkNsaWNrPXt0aGlzLnNjcm9sbC5iaW5kKHRoaXMsICdsZWZ0Jyl9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIGhlaWdodD1cIjEyXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY29sb3ItY2hldi5zdmdcIn0gYWx0PVwiY2hldi1sZWZ0XCIvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiNS4wMDRcIiBoZWlnaHQ9XCI4LjQ3MlwiIHZpZXdCb3g9XCIwIDAgNS4wMDQgOC40NzJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTA1LjcwMikgcm90YXRlKDkwKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAxMDAuNjk4KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwibGluay1hcnJvdy1jbHJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNOC4zMzYsMTAxLjExNmwtLjI3OC0uMjc5YS40NjUuNDY1LDAsMCwwLS42NTYsMEw0LjIzOCwxMDRsLTMuMTY5LTMuMTY5YS40NjUuNDY1LDAsMCwwLS42NTUsMGwtLjI3OC4yNzhhLjQ2NC40NjQsMCwwLDAsMCwuNjU1bDMuNzczLDMuNzg3YS40NzQuNDc0LDAsMCwwLC4zMjkuMTQ5aDBhLjQ3NC40NzQsMCwwLDAsLjMyOC0uMTQ5bDMuNzctMy43NzdhLjQ3LjQ3LDAsMCwwLDAtLjY2WlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgLTEwMC42OTgpXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBrZy1idG5yZ3RcIiBpZD17YCR7ZGF0YVR5cGV9X2xlZnRBcnJvd19oc3B0bGB9IG9uQ2xpY2s9e3RoaXMuc2Nyb2xsLmJpbmQodGhpcywgJ3JpZ2h0Jyl9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiNS4wMDRcIiBoZWlnaHQ9XCI4LjQ3MlwiIHZpZXdCb3g9XCIwIDAgNS4wMDQgOC40NzJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTA1LjcwMikgcm90YXRlKDkwKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAxMDAuNjk4KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwibGluay1hcnJvdy1jbHJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNOC4zMzYsMTAxLjExNmwtLjI3OC0uMjc5YS40NjUuNDY1LDAsMCwwLS42NTYsMEw0LjIzOCwxMDRsLTMuMTY5LTMuMTY5YS40NjUuNDY1LDAsMCwwLS42NTUsMGwtLjI3OC4yNzhhLjQ2NC40NjQsMCwwLDAsMCwuNjU1bDMuNzczLDMuNzg3YS40NzQuNDc0LDAsMCwwLC4zMjkuMTQ5aDBhLjQ3NC40NzQsMCwwLDAsLjMyOC0uMTQ5bDMuNzctMy43NzdhLjQ3LjQ3LDAsMCwwLDAtLjY2WlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgLTEwMC42OTgpXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVdpZGdldHMiXSwic291cmNlUm9vdCI6IiJ9