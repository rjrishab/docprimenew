(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./dev/js/components/opd/commons/selectedClinic/SelectedClinic.js":
/*!************************************************************************!*\
  !*** ./dev/js/components/opd/commons/selectedClinic/SelectedClinic.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _initialsPicture = __webpack_require__(/*! ../../../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var SelectedClinic = function (_React$Component) {
    _inherits(SelectedClinic, _React$Component);

    function SelectedClinic(props) {
        _classCallCheck(this, SelectedClinic);

        var _this = _possibleConstructorReturn(this, (SelectedClinic.__proto__ || Object.getPrototypeOf(SelectedClinic)).call(this, props));

        _this.state = {
            showMoreClinic: false
        };
        return _this;
    }

    _createClass(SelectedClinic, [{
        key: 'getQualificationStr',
        value: function getQualificationStr(qualificationSpecialization) {
            return qualificationSpecialization.reduce(function (str, curr, i) {
                str += '' + curr.name;
                if (i < qualificationSpecialization.length - 1) str += ', ';
                return str;
            }, "");
        }
    }, {
        key: 'profileClick',
        value: function profileClick(id, url, hospital_id) {
            if (this.props.history) {
                if (url) {
                    this.props.history.push('/' + url + '?hospital_id=' + hospital_id + '&hide_search_data=true');
                } else {
                    this.props.history.push('/opd/doctor/' + id + '?hospital_id=' + hospital_id + '&hide_search_data=true');
                }
            }
        }
    }, {
        key: 'toggleMoreClinic',
        value: function toggleMoreClinic(val) {
            this.setState({ showMoreClinic: val });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props$selectedDoctor = this.props.selectedDoctor,
                name = _props$selectedDoctor.name,
                hospitals = _props$selectedDoctor.hospitals,
                thumbnail = _props$selectedDoctor.thumbnail,
                display_name = _props$selectedDoctor.display_name,
                url = _props$selectedDoctor.url,
                id = _props$selectedDoctor.id;

            var hospitalName = "";
            var hospital_id = '';
            var show_clinic = 0;
            var address = void 0;
            if (hospitals && hospitals.length) {
                hospitals.map(function (hospital, i) {
                    if ((hospital.hospital_id || hospital.id) == _this2.props.selectedClinic) {
                        hospitalName = hospital.hospital_name || hospital.name;
                        address = hospital.address;
                        if (i == 0) {
                            hospital_id = hospital.hospital_id;
                        }
                    } else {
                        if (hospital.enabled_for_online_booking) {
                            show_clinic++;
                        }
                    }
                });
            }
            var selected_user_covered_under_insurance = false;
            if (this.props.profiles && Object.keys(this.props.profiles).length > 0 && this.props.profiles[this.props.selectedProfile]) {
                selected_user_covered_under_insurance = this.props.profiles[this.props.selectedProfile].is_insured;
            }
            var parsed = null;
            if (this.props.location && this.props.location.search) {
                parsed = queryString.parse(this.props.location.search);
            }
            if (parsed && parsed.cod_to_prepaid == 'true') {
                show_clinic = 0;
            }
            return _react2.default.createElement(
                'div',
                { className: 'widget mrb-15 mrng-top-12' },
                _react2.default.createElement(
                    'div',
                    { className: 'widget-header dr-qucik-info' },
                    _react2.default.createElement(
                        'div',
                        { onClick: function onClick() {
                                return _this2.profileClick(id, url, hospital_id);
                            }, style: { cursor: 'pointer' } },
                        _react2.default.createElement(
                            _initialsPicture2.default,
                            { name: name, has_image: !!thumbnail, className: 'initialsPicture-dp docCardIntPic' },
                            _react2.default.createElement('img', { src: thumbnail, style: { width: '60px', height: '60px' }, className: 'img-fluid img-round' })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'dr-profile' },
                        _react2.default.createElement(
                            'h1',
                            { className: 'dr-name' },
                            display_name,
                            _react2.default.createElement(
                                'span',
                                { className: 'nwDocViewPrf', onClick: function onClick() {
                                        return _this2.profileClick(id, url, hospital_id);
                                    } },
                                '(View Profile)'
                            )
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'clinic-name text-xs' },
                            ' ',
                            address
                        ),
                        hospitals && hospitals.length > 1 && show_clinic > 0 ? _react2.default.createElement(
                            'span',
                            { className: 'nw-clinicMore mt-0 ' + (!this.state.showMoreClinic ? '' : 'arrow-rev'), onClick: this.toggleMoreClinic.bind(this, !this.state.showMoreClinic) },
                            '+ ',
                            hospitals.length - 1,
                            ' more Clinics ',
                            _react2.default.createElement('img', { src: "/assets" + '/img/right-sc.svg' })
                        ) : ''
                    )
                ),
                hospitals && hospitals.length > 1 && !(parsed && parsed.cod_to_prepaid == 'true') ? _react2.default.createElement(
                    'div',
                    { className: 'clinicRadioContainer ' + (this.state.showMoreClinic ? '' : 'd-none') },
                    hospitals.map(function (hospital, i) {
                        return hospital.enabled_for_online_booking ? _react2.default.createElement(
                            'div',
                            { className: 'dtl-radio', key: i },
                            _react2.default.createElement(
                                'label',
                                { className: 'container-radio m-0', onClick: function onClick() {
                                        _this2.props.selectClinic(hospital.hospital_id);
                                    } },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'clinic-names-nw' },
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'clnc-name' },
                                        hospital.hospital_name
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'clnc-pricing-cont' },
                                        hospital.insurance && hospital.insurance.is_insurance_covered && hospital.insurance.is_user_insured && parseInt(hospital.discounted_price) <= hospital.insurance.insurance_threshold_amount && selected_user_covered_under_insurance ? _react2.default.createElement(
                                            'span',
                                            { className: 'clinc-rd-price' },
                                            '\u20B9 ',
                                            0
                                        ) : hospital.enabled_for_cod && !hospital.enabled_for_prepaid ? hospital.cod_deal_price ? _react2.default.createElement(
                                            'span',
                                            { className: 'clinc-rd-price' },
                                            '\u20B9 ',
                                            hospital.cod_deal_price,
                                            parseInt(hospital.cod_deal_price) == parseInt(hospital.mrp) ? '' : _react2.default.createElement(
                                                'span',
                                                { className: 'clinc-rd-price-cut' },
                                                '\u20B9 ',
                                                hospital.mrp
                                            )
                                        ) : _react2.default.createElement(
                                            'span',
                                            { className: 'clinc-rd-price' },
                                            '\u20B9 ',
                                            hospital.mrp
                                        ) : hospital.enabled_for_online_booking ? _react2.default.createElement(
                                            'span',
                                            { className: 'clinc-rd-price' },
                                            '\u20B9 ',
                                            hospital.discounted_price,
                                            parseInt(hospital.discounted_price) == parseInt(hospital.mrp) ? '' : _react2.default.createElement(
                                                _react2.default.Fragment,
                                                null,
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'clinc-rd-price-cut' },
                                                    '\u20B9 ',
                                                    hospital.mrp
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'clnc-includecpn' },
                                                    '(includes Coupon)'
                                                )
                                            )
                                        ) : hospital.mrp && hospital.mrp != 0 ? _react2.default.createElement(
                                            'span',
                                            { className: 'clinc-rd-price' },
                                            '\u20B9 ',
                                            hospital.mrp
                                        ) : ''
                                    )
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'clck-loc ' + (hospital.insurance && hospital.insurance.is_insurance_covered && hospital.insurance.is_user_insured && parseInt(hospital.discounted_price) <= hospital.insurance.insurance_threshold_amount && selected_user_covered_under_insurance ? 'p-0' : '') },
                                    hospital.address,
                                    hospital.insurance && hospital.insurance.is_insurance_covered && hospital.insurance.is_user_insured && parseInt(hospital.discounted_price) <= hospital.insurance.insurance_threshold_amount && selected_user_covered_under_insurance ? _react2.default.createElement(
                                        'span',
                                        null,
                                        'Covered under insurance'
                                    ) : ''
                                ),
                                _this2.props.selectedClinic == hospital.hospital_id ? _react2.default.createElement('input', { type: 'radio', checked: true, name: 'radio' }) : _react2.default.createElement('input', { type: 'radio', name: 'radio' }),
                                _react2.default.createElement('span', { className: 'doc-checkmark' })
                            )
                        ) : '';
                    })
                ) : '',
                parsed && parsed.cod_to_prepaid == 'true' && hospitals.filter(function (hospital) {
                    return hospital.id == _this2.props.selectedClinic;
                }).map(function (hospital) {

                    return _react2.default.createElement(
                        'p',
                        { className: 'clnc-name' },
                        hospital.hospital_name
                    );
                })
            );
        }
    }]);

    return SelectedClinic;
}(_react2.default.Component);

exports.default = SelectedClinic;

/***/ }),

/***/ "./dev/js/components/opd/commons/selectedClinic/index.js":
/*!***************************************************************!*\
  !*** ./dev/js/components/opd/commons/selectedClinic/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SelectedClinic = __webpack_require__(/*! ./SelectedClinic.js */ "./dev/js/components/opd/commons/selectedClinic/SelectedClinic.js");

var _SelectedClinic2 = _interopRequireDefault(_SelectedClinic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SelectedClinic2.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvY29tbW9ucy9zZWxlY3RlZENsaW5pYy9TZWxlY3RlZENsaW5pYy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvY29tbW9ucy9zZWxlY3RlZENsaW5pYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJTZWxlY3RlZENsaW5pYyIsInByb3BzIiwic3RhdGUiLCJzaG93TW9yZUNsaW5pYyIsInF1YWxpZmljYXRpb25TcGVjaWFsaXphdGlvbiIsInJlZHVjZSIsInN0ciIsImN1cnIiLCJpIiwibmFtZSIsImxlbmd0aCIsImlkIiwidXJsIiwiaG9zcGl0YWxfaWQiLCJoaXN0b3J5IiwicHVzaCIsInZhbCIsInNldFN0YXRlIiwic2VsZWN0ZWREb2N0b3IiLCJob3NwaXRhbHMiLCJ0aHVtYm5haWwiLCJkaXNwbGF5X25hbWUiLCJob3NwaXRhbE5hbWUiLCJzaG93X2NsaW5pYyIsImFkZHJlc3MiLCJtYXAiLCJob3NwaXRhbCIsInNlbGVjdGVkQ2xpbmljIiwiaG9zcGl0YWxfbmFtZSIsImVuYWJsZWRfZm9yX29ubGluZV9ib29raW5nIiwic2VsZWN0ZWRfdXNlcl9jb3ZlcmVkX3VuZGVyX2luc3VyYW5jZSIsInByb2ZpbGVzIiwiT2JqZWN0Iiwia2V5cyIsInNlbGVjdGVkUHJvZmlsZSIsImlzX2luc3VyZWQiLCJwYXJzZWQiLCJsb2NhdGlvbiIsInNlYXJjaCIsInBhcnNlIiwiY29kX3RvX3ByZXBhaWQiLCJwcm9maWxlQ2xpY2siLCJjdXJzb3IiLCJ3aWR0aCIsImhlaWdodCIsInRvZ2dsZU1vcmVDbGluaWMiLCJiaW5kIiwiQVNTRVRTX0JBU0VfVVJMIiwic2VsZWN0Q2xpbmljIiwiaW5zdXJhbmNlIiwiaXNfaW5zdXJhbmNlX2NvdmVyZWQiLCJpc191c2VyX2luc3VyZWQiLCJwYXJzZUludCIsImRpc2NvdW50ZWRfcHJpY2UiLCJpbnN1cmFuY2VfdGhyZXNob2xkX2Ftb3VudCIsImVuYWJsZWRfZm9yX2NvZCIsImVuYWJsZWRfZm9yX3ByZXBhaWQiLCJjb2RfZGVhbF9wcmljZSIsIm1ycCIsImZpbHRlciIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQSxJQUFNQSxjQUFjQyxtQkFBT0EsQ0FBQywwREFBUixDQUFwQjs7SUFFTUMsYzs7O0FBQ0YsNEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSUFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsNEJBQWU7QUFETixTQUFiO0FBRmU7QUFLbEI7Ozs7NENBRW1CQywyQixFQUE2QjtBQUM3QyxtQkFBT0EsNEJBQTRCQyxNQUE1QixDQUFtQyxVQUFDQyxHQUFELEVBQU1DLElBQU4sRUFBWUMsQ0FBWixFQUFrQjtBQUN4REYsNEJBQVVDLEtBQUtFLElBQWY7QUFDQSxvQkFBSUQsSUFBSUosNEJBQTRCTSxNQUE1QixHQUFxQyxDQUE3QyxFQUFnREo7QUFDaEQsdUJBQU9BLEdBQVA7QUFDSCxhQUpNLEVBSUosRUFKSSxDQUFQO0FBS0g7OztxQ0FFWUssRSxFQUFJQyxHLEVBQUtDLFcsRUFBYTtBQUMvQixnQkFBSSxLQUFLWixLQUFMLENBQVdhLE9BQWYsRUFBd0I7QUFDcEIsb0JBQUlGLEdBQUosRUFBUztBQUNMLHlCQUFLWCxLQUFMLENBQVdhLE9BQVgsQ0FBbUJDLElBQW5CLE9BQTRCSCxHQUE1QixxQkFBK0NDLFdBQS9DO0FBRUgsaUJBSEQsTUFHTztBQUNILHlCQUFLWixLQUFMLENBQVdhLE9BQVgsQ0FBbUJDLElBQW5CLGtCQUF1Q0osRUFBdkMscUJBQXlERSxXQUF6RDtBQUNIO0FBQ0o7QUFDSjs7O3lDQUVnQkcsRyxFQUFJO0FBQ2pCLGlCQUFLQyxRQUFMLENBQWMsRUFBQ2QsZ0JBQWVhLEdBQWhCLEVBQWQ7QUFDSDs7O2lDQUVRO0FBQUE7O0FBQUEsd0NBQ3VELEtBQUtmLEtBQUwsQ0FBV2lCLGNBRGxFO0FBQUEsZ0JBQ0NULElBREQseUJBQ0NBLElBREQ7QUFBQSxnQkFDT1UsU0FEUCx5QkFDT0EsU0FEUDtBQUFBLGdCQUNrQkMsU0FEbEIseUJBQ2tCQSxTQURsQjtBQUFBLGdCQUM2QkMsWUFEN0IseUJBQzZCQSxZQUQ3QjtBQUFBLGdCQUMyQ1QsR0FEM0MseUJBQzJDQSxHQUQzQztBQUFBLGdCQUNnREQsRUFEaEQseUJBQ2dEQSxFQURoRDs7QUFFTCxnQkFBSVcsZUFBZSxFQUFuQjtBQUNBLGdCQUFJVCxjQUFjLEVBQWxCO0FBQ0EsZ0JBQUlVLGNBQWEsQ0FBakI7QUFDQSxnQkFBSUMsZ0JBQUo7QUFDQSxnQkFBSUwsYUFBYUEsVUFBVVQsTUFBM0IsRUFBbUM7QUFDL0JTLDBCQUFVTSxHQUFWLENBQWMsVUFBQ0MsUUFBRCxFQUFXbEIsQ0FBWCxFQUFpQjtBQUMzQix3QkFBSSxDQUFDa0IsU0FBU2IsV0FBVCxJQUF3QmEsU0FBU2YsRUFBbEMsS0FBeUMsT0FBS1YsS0FBTCxDQUFXMEIsY0FBeEQsRUFBd0U7QUFDcEVMLHVDQUFlSSxTQUFTRSxhQUFULElBQTBCRixTQUFTakIsSUFBbEQ7QUFDQWUsa0NBQVVFLFNBQVNGLE9BQW5CO0FBQ0EsNEJBQUloQixLQUFLLENBQVQsRUFBWTtBQUNSSywwQ0FBY2EsU0FBU2IsV0FBdkI7QUFDSDtBQUNKLHFCQU5ELE1BTU07QUFDRiw0QkFBR2EsU0FBU0csMEJBQVosRUFBdUM7QUFDbkNOO0FBQ0g7QUFDSjtBQUNKLGlCQVpEO0FBYUg7QUFDRCxnQkFBSU8sd0NBQXdDLEtBQTVDO0FBQ0EsZ0JBQUcsS0FBSzdCLEtBQUwsQ0FBVzhCLFFBQVgsSUFBdUJDLE9BQU9DLElBQVAsQ0FBWSxLQUFLaEMsS0FBTCxDQUFXOEIsUUFBdkIsRUFBaUNyQixNQUFqQyxHQUF5QyxDQUFoRSxJQUFxRSxLQUFLVCxLQUFMLENBQVc4QixRQUFYLENBQW9CLEtBQUs5QixLQUFMLENBQVdpQyxlQUEvQixDQUF4RSxFQUF3SDtBQUNwSEosd0RBQXdDLEtBQUs3QixLQUFMLENBQVc4QixRQUFYLENBQW9CLEtBQUs5QixLQUFMLENBQVdpQyxlQUEvQixFQUFnREMsVUFBeEY7QUFDSDtBQUNELGdCQUFJQyxTQUFTLElBQWI7QUFDQSxnQkFBRyxLQUFLbkMsS0FBTCxDQUFXb0MsUUFBWCxJQUF1QixLQUFLcEMsS0FBTCxDQUFXb0MsUUFBWCxDQUFvQkMsTUFBOUMsRUFBc0Q7QUFDbERGLHlCQUFTdEMsWUFBWXlDLEtBQVosQ0FBa0IsS0FBS3RDLEtBQUwsQ0FBV29DLFFBQVgsQ0FBb0JDLE1BQXRDLENBQVQ7QUFDSDtBQUNELGdCQUFHRixVQUFVQSxPQUFPSSxjQUFQLElBQXVCLE1BQXBDLEVBQTJDO0FBQ3ZDakIsOEJBQWMsQ0FBZDtBQUNIO0FBQ0QsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsMkJBQWY7QUFDSTtBQUFBO0FBQUEsc0JBQUssV0FBVSw2QkFBZjtBQUNJO0FBQUE7QUFBQSwwQkFBSyxTQUFTO0FBQUEsdUNBQU0sT0FBS2tCLFlBQUwsQ0FBa0I5QixFQUFsQixFQUFzQkMsR0FBdEIsRUFBMkJDLFdBQTNCLENBQU47QUFBQSw2QkFBZCxFQUE2RCxPQUFPLEVBQUU2QixRQUFRLFNBQVYsRUFBcEU7QUFDSTtBQUFDLHFEQUFEO0FBQUEsOEJBQWlCLE1BQU1qQyxJQUF2QixFQUE2QixXQUFXLENBQUMsQ0FBQ1csU0FBMUMsRUFBcUQsV0FBVSxrQ0FBL0Q7QUFDSSxtRUFBSyxLQUFLQSxTQUFWLEVBQXFCLE9BQU8sRUFBRXVCLE9BQU8sTUFBVCxFQUFpQkMsUUFBUSxNQUF6QixFQUE1QixFQUErRCxXQUFVLHFCQUF6RTtBQURKO0FBREoscUJBREo7QUFNSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFJLFdBQVUsU0FBZDtBQUF5QnZCLHdDQUF6QjtBQUFzQztBQUFBO0FBQUEsa0NBQU0sV0FBVSxjQUFoQixFQUErQixTQUFTO0FBQUEsK0NBQU0sT0FBS29CLFlBQUwsQ0FBa0I5QixFQUFsQixFQUFzQkMsR0FBdEIsRUFBMkJDLFdBQTNCLENBQU47QUFBQSxxQ0FBeEM7QUFBQTtBQUFBO0FBQXRDLHlCQURKO0FBR0k7QUFBQTtBQUFBLDhCQUFNLFdBQVUscUJBQWhCO0FBQUE7QUFBd0NXO0FBQXhDLHlCQUhKO0FBSUNMLHFDQUFhQSxVQUFVVCxNQUFWLEdBQW1CLENBQWhDLElBQXFDYSxjQUFhLENBQWxELEdBQ0c7QUFBQTtBQUFBLDhCQUFNLG9DQUFpQyxDQUFDLEtBQUtyQixLQUFMLENBQVdDLGNBQVosR0FBMkIsRUFBM0IsR0FBOEIsV0FBL0QsQ0FBTixFQUFvRixTQUFTLEtBQUswQyxnQkFBTCxDQUFzQkMsSUFBdEIsQ0FBMkIsSUFBM0IsRUFBZ0MsQ0FBQyxLQUFLNUMsS0FBTCxDQUFXQyxjQUE1QyxDQUE3RjtBQUFBO0FBQTZKZ0Isc0NBQVVULE1BQVYsR0FBaUIsQ0FBOUs7QUFBQTtBQUE4TCxtRUFBSyxLQUFLcUMsU0FBZUEsR0FBRyxtQkFBNUI7QUFBOUwseUJBREgsR0FFQTtBQU5EO0FBTkosaUJBREo7QUFpQlE1Qiw2QkFBYUEsVUFBVVQsTUFBVixHQUFtQixDQUFoQyxJQUFxQyxFQUFFMEIsVUFBVUEsT0FBT0ksY0FBUCxJQUF1QixNQUFuQyxDQUFyQyxHQUNBO0FBQUE7QUFBQSxzQkFBSyxzQ0FBbUMsS0FBS3RDLEtBQUwsQ0FBV0MsY0FBWCxHQUEwQixFQUExQixHQUE2QixRQUFoRSxDQUFMO0FBQ0tnQiw4QkFBVU0sR0FBVixDQUFjLFVBQUNDLFFBQUQsRUFBV2xCLENBQVgsRUFBaUI7QUFDaEMsK0JBQU9rQixTQUFTRywwQkFBVCxHQUNIO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFdBQWYsRUFBMkIsS0FBS3JCLENBQWhDO0FBQ0k7QUFBQTtBQUFBLGtDQUFPLFdBQVUscUJBQWpCLEVBQXVDLFNBQVMsbUJBQU07QUFBRSwrQ0FBS1AsS0FBTCxDQUFXK0MsWUFBWCxDQUF3QnRCLFNBQVNiLFdBQWpDO0FBQStDLHFDQUF2RztBQUNJO0FBQUE7QUFBQSxzQ0FBSyxXQUFVLGlCQUFmO0FBQ0k7QUFBQTtBQUFBLDBDQUFHLFdBQVUsV0FBYjtBQUEwQmEsaURBQVNFO0FBQW5DLHFDQURKO0FBRUk7QUFBQTtBQUFBLDBDQUFHLFdBQVUsbUJBQWI7QUFFUUYsaURBQVN1QixTQUFULElBQXNCdkIsU0FBU3VCLFNBQVQsQ0FBbUJDLG9CQUF6QyxJQUFpRXhCLFNBQVN1QixTQUFULENBQW1CRSxlQUFwRixJQUF1R0MsU0FBUzFCLFNBQVMyQixnQkFBbEIsS0FBc0MzQixTQUFTdUIsU0FBVCxDQUFtQkssMEJBQWhLLElBQThMeEIscUNBQTlMLEdBQ0E7QUFBQTtBQUFBLDhDQUFNLFdBQVUsZ0JBQWhCO0FBQUE7QUFBb0M7QUFBcEMseUNBREEsR0FFQ0osU0FBUzZCLGVBQVQsSUFBNEIsQ0FBQzdCLFNBQVM4QixtQkFBdEMsR0FBMEQ5QixTQUFTK0IsY0FBVCxHQUN0RDtBQUFBO0FBQUEsOENBQU0sV0FBVSxnQkFBaEI7QUFBQTtBQUFvQy9CLHFEQUFTK0IsY0FBN0M7QUFFT0wscURBQVMxQixTQUFTK0IsY0FBbEIsS0FBcUNMLFNBQVMxQixTQUFTZ0MsR0FBbEIsQ0FBckMsR0FDTSxFQUROLEdBRU07QUFBQTtBQUFBLGtEQUFNLFdBQVUsb0JBQWhCO0FBQUE7QUFBd0NoQyx5REFBU2dDO0FBQWpEO0FBSmIseUNBRHNELEdBU3REO0FBQUE7QUFBQSw4Q0FBTSxXQUFVLGdCQUFoQjtBQUFBO0FBQW9DaEMscURBQVNnQztBQUE3Qyx5Q0FUSixHQVVBaEMsU0FBU0csMEJBQVQsR0FDRDtBQUFBO0FBQUEsOENBQU0sV0FBVSxnQkFBaEI7QUFBQTtBQUFvQ0gscURBQVMyQixnQkFBN0M7QUFFWUQscURBQVMxQixTQUFTMkIsZ0JBQWxCLEtBQXVDRCxTQUFTMUIsU0FBU2dDLEdBQWxCLENBQXZDLEdBQ00sRUFETixHQUdJO0FBQUMsK0RBQUQsQ0FBTyxRQUFQO0FBQUE7QUFDQTtBQUFBO0FBQUEsc0RBQU0sV0FBVSxvQkFBaEI7QUFBQTtBQUF3Q2hDLDZEQUFTZ0M7QUFBakQsaURBREE7QUFHQTtBQUFBO0FBQUEsc0RBQU0sV0FBVSxpQkFBaEI7QUFBQTtBQUFBO0FBSEE7QUFMaEIseUNBREMsR0FhQ2hDLFNBQVNnQyxHQUFULElBQWdCaEMsU0FBU2dDLEdBQVQsSUFBZ0IsQ0FBaEMsR0FDRjtBQUFBO0FBQUEsOENBQU0sV0FBVSxnQkFBaEI7QUFBQTtBQUFvQ2hDLHFEQUFTZ0M7QUFBN0MseUNBREUsR0FDeUQ7QUE1Qm5FO0FBRkosaUNBREo7QUFtQ0k7QUFBQTtBQUFBLHNDQUFHLDBCQUF1QmhDLFNBQVN1QixTQUFULElBQXNCdkIsU0FBU3VCLFNBQVQsQ0FBbUJDLG9CQUF6QyxJQUFpRXhCLFNBQVN1QixTQUFULENBQW1CRSxlQUFwRixJQUF1R0MsU0FBUzFCLFNBQVMyQixnQkFBbEIsS0FBc0MzQixTQUFTdUIsU0FBVCxDQUFtQkssMEJBQWhLLElBQThMeEIscUNBQTlMLEdBQW9PLEtBQXBPLEdBQTBPLEVBQWpRLENBQUg7QUFBNFFKLDZDQUFTRixPQUFyUjtBQUVLRSw2Q0FBU3VCLFNBQVQsSUFBc0J2QixTQUFTdUIsU0FBVCxDQUFtQkMsb0JBQXpDLElBQWlFeEIsU0FBU3VCLFNBQVQsQ0FBbUJFLGVBQXBGLElBQXVHQyxTQUFTMUIsU0FBUzJCLGdCQUFsQixLQUFzQzNCLFNBQVN1QixTQUFULENBQW1CSywwQkFBaEssSUFBOEx4QixxQ0FBOUwsR0FDRztBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQURILEdBRUk7QUFKVCxpQ0FuQ0o7QUEyQ1EsdUNBQUs3QixLQUFMLENBQVcwQixjQUFYLElBQTZCRCxTQUFTYixXQUF0QyxHQUFvRCx5Q0FBTyxNQUFLLE9BQVosRUFBb0IsYUFBcEIsRUFBNEIsTUFBSyxPQUFqQyxHQUFwRCxHQUFrRyx5Q0FBTyxNQUFLLE9BQVosRUFBb0IsTUFBSyxPQUF6QixHQTNDMUc7QUE2Q0ksd0VBQU0sV0FBVSxlQUFoQjtBQTdDSjtBQURKLHlCQURHLEdBa0RGLEVBbERMO0FBbURDLHFCQXBEQTtBQURMLGlCQURBLEdBd0RDLEVBekVUO0FBNEVRdUIsMEJBQVVBLE9BQU9JLGNBQVAsSUFBdUIsTUFBakMsSUFFQXJCLFVBQVV3QyxNQUFWLENBQWlCO0FBQUEsMkJBQVVqQyxTQUFTZixFQUFULElBQWUsT0FBS1YsS0FBTCxDQUFXMEIsY0FBcEM7QUFBQSxpQkFBakIsRUFBcUVGLEdBQXJFLENBQXlFLFVBQUNDLFFBQUQsRUFBWTs7QUFFakYsMkJBQU87QUFBQTtBQUFBLDBCQUFHLFdBQVUsV0FBYjtBQUEwQkEsaUNBQVNFO0FBQW5DLHFCQUFQO0FBQ0gsaUJBSEQ7QUE5RVIsYUFESjtBQXNGSDs7OztFQXJKd0JnQyxnQkFBTUMsUzs7a0JBeUpwQjdELGM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdKZjs7Ozs7O2tCQUVlQSx3QiIsImZpbGUiOiIyNi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEluaXRpYWxzUGljdHVyZSBmcm9tICcuLi8uLi8uLi9jb21tb25zL2luaXRpYWxzUGljdHVyZSdcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbmNsYXNzIFNlbGVjdGVkQ2xpbmljIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNob3dNb3JlQ2xpbmljOmZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRRdWFsaWZpY2F0aW9uU3RyKHF1YWxpZmljYXRpb25TcGVjaWFsaXphdGlvbikge1xuICAgICAgICByZXR1cm4gcXVhbGlmaWNhdGlvblNwZWNpYWxpemF0aW9uLnJlZHVjZSgoc3RyLCBjdXJyLCBpKSA9PiB7XG4gICAgICAgICAgICBzdHIgKz0gYCR7Y3Vyci5uYW1lfWBcbiAgICAgICAgICAgIGlmIChpIDwgcXVhbGlmaWNhdGlvblNwZWNpYWxpemF0aW9uLmxlbmd0aCAtIDEpIHN0ciArPSBgLCBgO1xuICAgICAgICAgICAgcmV0dXJuIHN0clxuICAgICAgICB9LCBcIlwiKVxuICAgIH1cblxuICAgIHByb2ZpbGVDbGljayhpZCwgdXJsLCBob3NwaXRhbF9pZCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5oaXN0b3J5KSB7XG4gICAgICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3VybH0/aG9zcGl0YWxfaWQ9JHtob3NwaXRhbF9pZH0maGlkZV9zZWFyY2hfZGF0YT10cnVlYClcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL29wZC9kb2N0b3IvJHtpZH0/aG9zcGl0YWxfaWQ9JHtob3NwaXRhbF9pZH0maGlkZV9zZWFyY2hfZGF0YT10cnVlYClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZU1vcmVDbGluaWModmFsKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd01vcmVDbGluaWM6dmFsfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7IG5hbWUsIGhvc3BpdGFscywgdGh1bWJuYWlsLCBkaXNwbGF5X25hbWUsIHVybCwgaWQgfSA9IHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JcbiAgICAgICAgbGV0IGhvc3BpdGFsTmFtZSA9IFwiXCJcbiAgICAgICAgbGV0IGhvc3BpdGFsX2lkID0gJydcbiAgICAgICAgbGV0IHNob3dfY2xpbmljID0wXG4gICAgICAgIGxldCBhZGRyZXNzXG4gICAgICAgIGlmIChob3NwaXRhbHMgJiYgaG9zcGl0YWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgaG9zcGl0YWxzLm1hcCgoaG9zcGl0YWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoKGhvc3BpdGFsLmhvc3BpdGFsX2lkIHx8IGhvc3BpdGFsLmlkKSA9PSB0aGlzLnByb3BzLnNlbGVjdGVkQ2xpbmljKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvc3BpdGFsTmFtZSA9IGhvc3BpdGFsLmhvc3BpdGFsX25hbWUgfHwgaG9zcGl0YWwubmFtZVxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzID0gaG9zcGl0YWwuYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3NwaXRhbF9pZCA9IGhvc3BpdGFsLmhvc3BpdGFsX2lkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGhvc3BpdGFsLmVuYWJsZWRfZm9yX29ubGluZV9ib29raW5nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dfY2xpbmljKytcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNlbGVjdGVkX3VzZXJfY292ZXJlZF91bmRlcl9pbnN1cmFuY2UgPSBmYWxzZVxuICAgICAgICBpZih0aGlzLnByb3BzLnByb2ZpbGVzICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMucHJvZmlsZXMpLmxlbmd0aCA+MCAmJiB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlXSl7XG4gICAgICAgICAgICBzZWxlY3RlZF91c2VyX2NvdmVyZWRfdW5kZXJfaW5zdXJhbmNlID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV0uaXNfaW5zdXJlZFxuICAgICAgICB9XG4gICAgICAgIHZhciBwYXJzZWQgPSBudWxsXG4gICAgICAgIGlmKHRoaXMucHJvcHMubG9jYXRpb24gJiYgdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpIHtcbiAgICAgICAgICAgIHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKSAgICBcbiAgICAgICAgfVxuICAgICAgICBpZihwYXJzZWQgJiYgcGFyc2VkLmNvZF90b19wcmVwYWlkPT0ndHJ1ZScpe1xuICAgICAgICAgICAgc2hvd19jbGluaWMgPSAwXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNSBtcm5nLXRvcC0xMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWhlYWRlciBkci1xdWNpay1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdGhpcy5wcm9maWxlQ2xpY2soaWQsIHVybCwgaG9zcGl0YWxfaWQpfSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbml0aWFsc1BpY3R1cmUgbmFtZT17bmFtZX0gaGFzX2ltYWdlPXshIXRodW1ibmFpbH0gY2xhc3NOYW1lPVwiaW5pdGlhbHNQaWN0dXJlLWRwIGRvY0NhcmRJbnRQaWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGh1bWJuYWlsfSBzdHlsZT17eyB3aWR0aDogJzYwcHgnLCBoZWlnaHQ6ICc2MHB4JyB9fSBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nLXJvdW5kXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5pdGlhbHNQaWN0dXJlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkci1wcm9maWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZHItbmFtZVwiPntkaXNwbGF5X25hbWV9PHNwYW4gY2xhc3NOYW1lPVwibndEb2NWaWV3UHJmXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9maWxlQ2xpY2soaWQsIHVybCwgaG9zcGl0YWxfaWQpfT4oVmlldyBQcm9maWxlKTwvc3Bhbj48L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPHNwYW4gY2xhc3NOYW1lPVwiY2xpbmljLW5hbWUgdGV4dC1zbVwiPntob3NwaXRhbE5hbWV9PC9zcGFuPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2xpbmljLW5hbWUgdGV4dC14c1wiPiB7YWRkcmVzc308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtob3NwaXRhbHMgJiYgaG9zcGl0YWxzLmxlbmd0aCA+IDEgJiYgc2hvd19jbGluaWMgPjA/ICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YG53LWNsaW5pY01vcmUgbXQtMCAkeyF0aGlzLnN0YXRlLnNob3dNb3JlQ2xpbmljPycnOidhcnJvdy1yZXYnfWB9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW9yZUNsaW5pYy5iaW5kKHRoaXMsIXRoaXMuc3RhdGUuc2hvd01vcmVDbGluaWMpfT4rIHtob3NwaXRhbHMubGVuZ3RoLTF9IG1vcmUgQ2xpbmljcyA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvcmlnaHQtc2Muc3ZnJ30gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDonJ31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBob3NwaXRhbHMgJiYgaG9zcGl0YWxzLmxlbmd0aCA+IDEgJiYgIShwYXJzZWQgJiYgcGFyc2VkLmNvZF90b19wcmVwYWlkPT0ndHJ1ZScpP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNsaW5pY1JhZGlvQ29udGFpbmVyICR7dGhpcy5zdGF0ZS5zaG93TW9yZUNsaW5pYz8nJzonZC1ub25lJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtob3NwaXRhbHMubWFwKChob3NwaXRhbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhvc3BpdGFsLmVuYWJsZWRfZm9yX29ubGluZV9ib29raW5nP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpbyBtLTBcIiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMucHJvcHMuc2VsZWN0Q2xpbmljKGhvc3BpdGFsLmhvc3BpdGFsX2lkKSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpbmljLW5hbWVzLW53XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2xuYy1uYW1lXCI+e2hvc3BpdGFsLmhvc3BpdGFsX25hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNsbmMtcHJpY2luZy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3BpdGFsLmluc3VyYW5jZSAmJiBob3NwaXRhbC5pbnN1cmFuY2UuaXNfaW5zdXJhbmNlX2NvdmVyZWQgJiYgaG9zcGl0YWwuaW5zdXJhbmNlLmlzX3VzZXJfaW5zdXJlZCAmJiBwYXJzZUludChob3NwaXRhbC5kaXNjb3VudGVkX3ByaWNlKSA8PWhvc3BpdGFsLmluc3VyYW5jZS5pbnN1cmFuY2VfdGhyZXNob2xkX2Ftb3VudCAmJiBzZWxlY3RlZF91c2VyX2NvdmVyZWRfdW5kZXJfaW5zdXJhbmNlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2xpbmMtcmQtcHJpY2VcIj7igrkgezB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhvc3BpdGFsLmVuYWJsZWRfZm9yX2NvZCAmJiAhaG9zcGl0YWwuZW5hYmxlZF9mb3JfcHJlcGFpZD9ob3NwaXRhbC5jb2RfZGVhbF9wcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID88c3BhbiBjbGFzc05hbWU9XCJjbGluYy1yZC1wcmljZVwiPuKCuSB7aG9zcGl0YWwuY29kX2RlYWxfcHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGhvc3BpdGFsLmNvZF9kZWFsX3ByaWNlKSA9PSBwYXJzZUludChob3NwaXRhbC5tcnApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHNwYW4gY2xhc3NOYW1lPVwiY2xpbmMtcmQtcHJpY2UtY3V0XCI+4oK5IHtob3NwaXRhbC5tcnB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8c3BhbiBjbGFzc05hbWU9XCJjbGluYy1yZC1wcmljZVwiPuKCuSB7aG9zcGl0YWwubXJwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpob3NwaXRhbC5lbmFibGVkX2Zvcl9vbmxpbmVfYm9va2luZyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjbGluYy1yZC1wcmljZVwiPuKCuSB7aG9zcGl0YWwuZGlzY291bnRlZF9wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoaG9zcGl0YWwuZGlzY291bnRlZF9wcmljZSkgPT0gcGFyc2VJbnQoaG9zcGl0YWwubXJwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjbGluYy1yZC1wcmljZS1jdXRcIj7igrkge2hvc3BpdGFsLm1ycH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2xuYy1pbmNsdWRlY3BuXCI+KGluY2x1ZGVzIENvdXBvbik8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBob3NwaXRhbC5tcnAgJiYgaG9zcGl0YWwubXJwICE9IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2xpbmMtcmQtcHJpY2VcIj7igrkge2hvc3BpdGFsLm1ycH08L3NwYW4+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgY2xjay1sb2MgJHtob3NwaXRhbC5pbnN1cmFuY2UgJiYgaG9zcGl0YWwuaW5zdXJhbmNlLmlzX2luc3VyYW5jZV9jb3ZlcmVkICYmIGhvc3BpdGFsLmluc3VyYW5jZS5pc191c2VyX2luc3VyZWQgJiYgcGFyc2VJbnQoaG9zcGl0YWwuZGlzY291bnRlZF9wcmljZSkgPD1ob3NwaXRhbC5pbnN1cmFuY2UuaW5zdXJhbmNlX3RocmVzaG9sZF9hbW91bnQgJiYgc2VsZWN0ZWRfdXNlcl9jb3ZlcmVkX3VuZGVyX2luc3VyYW5jZT8ncC0wJzonJ31gfSA+e2hvc3BpdGFsLmFkZHJlc3N9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWwuaW5zdXJhbmNlICYmIGhvc3BpdGFsLmluc3VyYW5jZS5pc19pbnN1cmFuY2VfY292ZXJlZCAmJiBob3NwaXRhbC5pbnN1cmFuY2UuaXNfdXNlcl9pbnN1cmVkICYmIHBhcnNlSW50KGhvc3BpdGFsLmRpc2NvdW50ZWRfcHJpY2UpIDw9aG9zcGl0YWwuaW5zdXJhbmNlLmluc3VyYW5jZV90aHJlc2hvbGRfYW1vdW50ICYmIHNlbGVjdGVkX3VzZXJfY292ZXJlZF91bmRlcl9pbnN1cmFuY2U/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkNvdmVyZWQgdW5kZXIgaW5zdXJhbmNlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZENsaW5pYyA9PSBob3NwaXRhbC5ob3NwaXRhbF9pZCA/IDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjaGVja2VkIG5hbWU9XCJyYWRpb1wiIC8+IDogPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJyYWRpb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSl9ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQgJiYgcGFyc2VkLmNvZF90b19wcmVwYWlkPT0ndHJ1ZScgJiYgXG5cbiAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWxzLmZpbHRlcihob3NwaXRhbD0+aG9zcGl0YWwuaWQgPT0gdGhpcy5wcm9wcy5zZWxlY3RlZENsaW5pYykubWFwKChob3NwaXRhbCk9PntcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cImNsbmMtbmFtZVwiPntob3NwaXRhbC5ob3NwaXRhbF9uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0ZWRDbGluaWNcbiIsImltcG9ydCBTZWxlY3RlZENsaW5pYyBmcm9tICcuL1NlbGVjdGVkQ2xpbmljLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RlZENsaW5pYyJdLCJzb3VyY2VSb290IjoiIn0=