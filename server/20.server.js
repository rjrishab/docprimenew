exports.ids = [20];
exports.modules = {

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _initialsPicture = __webpack_require__(/*! ../../../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class SelectedClinic extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMoreClinic: false
        };
    }

    getQualificationStr(qualificationSpecialization) {
        return qualificationSpecialization.reduce((str, curr, i) => {
            str += `${curr.name}`;
            if (i < qualificationSpecialization.length - 1) str += `, `;
            return str;
        }, "");
    }

    profileClick(id, url, hospital_id) {
        if (this.props.history) {
            if (url) {
                this.props.history.push(`/${url}?hospital_id=${hospital_id}&hide_search_data=true`);
            } else {
                this.props.history.push(`/opd/doctor/${id}?hospital_id=${hospital_id}&hide_search_data=true`);
            }
        }
    }

    toggleMoreClinic(val) {
        this.setState({ showMoreClinic: val });
    }

    render() {
        let { name, hospitals, thumbnail, display_name, url, id } = this.props.selectedDoctor;
        let hospitalName = "";
        let hospital_id = '';
        let show_clinic = 0;
        let address;
        if (hospitals && hospitals.length) {
            hospitals.map((hospital, i) => {
                if ((hospital.hospital_id || hospital.id) == this.props.selectedClinic) {
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
        let selected_user_covered_under_insurance = false;
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
                    { onClick: () => this.profileClick(id, url, hospital_id), style: { cursor: 'pointer' } },
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
                            { className: 'nwDocViewPrf', onClick: () => this.profileClick(id, url, hospital_id) },
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
                        { className: `nw-clinicMore mt-0 ${!this.state.showMoreClinic ? '' : 'arrow-rev'}`, onClick: this.toggleMoreClinic.bind(this, !this.state.showMoreClinic) },
                        '+ ',
                        hospitals.length - 1,
                        ' more Clinics ',
                        _react2.default.createElement('img', { src: "/assets" + '/img/right-sc.svg' })
                    ) : ''
                )
            ),
            hospitals && hospitals.length > 1 && !(parsed && parsed.cod_to_prepaid == 'true') ? _react2.default.createElement(
                'div',
                { className: `clinicRadioContainer ${this.state.showMoreClinic ? '' : 'd-none'}` },
                hospitals.map((hospital, i) => {
                    return hospital.enabled_for_online_booking ? _react2.default.createElement(
                        'div',
                        { className: 'dtl-radio', key: i },
                        _react2.default.createElement(
                            'label',
                            { className: 'container-radio m-0', onClick: () => {
                                    this.props.selectClinic(hospital.hospital_id);
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
                                { className: `clck-loc ${hospital.insurance && hospital.insurance.is_insurance_covered && hospital.insurance.is_user_insured && parseInt(hospital.discounted_price) <= hospital.insurance.insurance_threshold_amount && selected_user_covered_under_insurance ? 'p-0' : ''}` },
                                hospital.address,
                                hospital.insurance && hospital.insurance.is_insurance_covered && hospital.insurance.is_user_insured && parseInt(hospital.discounted_price) <= hospital.insurance.insurance_threshold_amount && selected_user_covered_under_insurance ? _react2.default.createElement(
                                    'span',
                                    null,
                                    'Covered under insurance'
                                ) : ''
                            ),
                            this.props.selectedClinic == hospital.hospital_id ? _react2.default.createElement('input', { type: 'radio', checked: true, name: 'radio' }) : _react2.default.createElement('input', { type: 'radio', name: 'radio' }),
                            _react2.default.createElement('span', { className: 'doc-checkmark' })
                        )
                    ) : '';
                })
            ) : '',
            parsed && parsed.cod_to_prepaid == 'true' && hospitals.filter(hospital => hospital.id == this.props.selectedClinic).map(hospital => {

                return _react2.default.createElement(
                    'p',
                    { className: 'clnc-name' },
                    hospital.hospital_name
                );
            })
        );
    }
}

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvY29tbW9ucy9zZWxlY3RlZENsaW5pYy9TZWxlY3RlZENsaW5pYy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvY29tbW9ucy9zZWxlY3RlZENsaW5pYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJTZWxlY3RlZENsaW5pYyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwic2hvd01vcmVDbGluaWMiLCJnZXRRdWFsaWZpY2F0aW9uU3RyIiwicXVhbGlmaWNhdGlvblNwZWNpYWxpemF0aW9uIiwicmVkdWNlIiwic3RyIiwiY3VyciIsImkiLCJuYW1lIiwibGVuZ3RoIiwicHJvZmlsZUNsaWNrIiwiaWQiLCJ1cmwiLCJob3NwaXRhbF9pZCIsImhpc3RvcnkiLCJwdXNoIiwidG9nZ2xlTW9yZUNsaW5pYyIsInZhbCIsInNldFN0YXRlIiwicmVuZGVyIiwiaG9zcGl0YWxzIiwidGh1bWJuYWlsIiwiZGlzcGxheV9uYW1lIiwic2VsZWN0ZWREb2N0b3IiLCJob3NwaXRhbE5hbWUiLCJzaG93X2NsaW5pYyIsImFkZHJlc3MiLCJtYXAiLCJob3NwaXRhbCIsInNlbGVjdGVkQ2xpbmljIiwiaG9zcGl0YWxfbmFtZSIsImVuYWJsZWRfZm9yX29ubGluZV9ib29raW5nIiwic2VsZWN0ZWRfdXNlcl9jb3ZlcmVkX3VuZGVyX2luc3VyYW5jZSIsInByb2ZpbGVzIiwiT2JqZWN0Iiwia2V5cyIsInNlbGVjdGVkUHJvZmlsZSIsImlzX2luc3VyZWQiLCJwYXJzZWQiLCJsb2NhdGlvbiIsInNlYXJjaCIsInBhcnNlIiwiY29kX3RvX3ByZXBhaWQiLCJjdXJzb3IiLCJ3aWR0aCIsImhlaWdodCIsImJpbmQiLCJBU1NFVFNfQkFTRV9VUkwiLCJzZWxlY3RDbGluaWMiLCJpbnN1cmFuY2UiLCJpc19pbnN1cmFuY2VfY292ZXJlZCIsImlzX3VzZXJfaW5zdXJlZCIsInBhcnNlSW50IiwiZGlzY291bnRlZF9wcmljZSIsImluc3VyYW5jZV90aHJlc2hvbGRfYW1vdW50IiwiZW5hYmxlZF9mb3JfY29kIiwiZW5hYmxlZF9mb3JfcHJlcGFpZCIsImNvZF9kZWFsX3ByaWNlIiwibXJwIiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUNBLE1BQU1BLGNBQWNDLG1CQUFPQSxDQUFDLGtDQUFSLENBQXBCOztBQUVBLE1BQU1DLGNBQU4sU0FBNkJDLGdCQUFNQyxTQUFuQyxDQUE2QztBQUN6Q0MsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0EsYUFBS0MsS0FBTCxHQUFhO0FBQ1RDLDRCQUFlO0FBRE4sU0FBYjtBQUdIOztBQUVEQyx3QkFBb0JDLDJCQUFwQixFQUFpRDtBQUM3QyxlQUFPQSw0QkFBNEJDLE1BQTVCLENBQW1DLENBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFZQyxDQUFaLEtBQWtCO0FBQ3hERixtQkFBUSxHQUFFQyxLQUFLRSxJQUFLLEVBQXBCO0FBQ0EsZ0JBQUlELElBQUlKLDRCQUE0Qk0sTUFBNUIsR0FBcUMsQ0FBN0MsRUFBZ0RKLE9BQVEsSUFBUjtBQUNoRCxtQkFBT0EsR0FBUDtBQUNILFNBSk0sRUFJSixFQUpJLENBQVA7QUFLSDs7QUFFREssaUJBQWFDLEVBQWIsRUFBaUJDLEdBQWpCLEVBQXNCQyxXQUF0QixFQUFtQztBQUMvQixZQUFJLEtBQUtkLEtBQUwsQ0FBV2UsT0FBZixFQUF3QjtBQUNwQixnQkFBSUYsR0FBSixFQUFTO0FBQ0wscUJBQUtiLEtBQUwsQ0FBV2UsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBeUIsSUFBR0gsR0FBSSxnQkFBZUMsV0FBWSx3QkFBM0Q7QUFFSCxhQUhELE1BR087QUFDSCxxQkFBS2QsS0FBTCxDQUFXZSxPQUFYLENBQW1CQyxJQUFuQixDQUF5QixlQUFjSixFQUFHLGdCQUFlRSxXQUFZ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VXVDLE1BQVYsQ0FBaUIvQixZQUFVQSxTQUFTakIsRUFBVCxJQUFlLEtBQUtaLEtBQUwsQ0FBVzhCLGNBQXJELEVBQXFFRixHQUFyRSxDQUEwRUMsUUFBRCxJQUFZOztBQUVqRix1QkFBTztBQUFBO0FBQUEsc0JBQUcsV0FBVSxXQUFiO0FBQTBCQSw2QkFBU0U7QUFBbkMsaUJBQVA7QUFDSCxhQUhEO0FBOUVSLFNBREo7QUFzRkg7QUFySndDOztrQkF5SjlCbkMsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0pmOzs7Ozs7a0JBRWVBLHdCIiwiZmlsZSI6IjIwLnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5pdGlhbHNQaWN0dXJlIGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvaW5pdGlhbHNQaWN0dXJlJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuY2xhc3MgU2VsZWN0ZWRDbGluaWMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2hvd01vcmVDbGluaWM6ZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFF1YWxpZmljYXRpb25TdHIocXVhbGlmaWNhdGlvblNwZWNpYWxpemF0aW9uKSB7XG4gICAgICAgIHJldHVybiBxdWFsaWZpY2F0aW9uU3BlY2lhbGl6YXRpb24ucmVkdWNlKChzdHIsIGN1cnIsIGkpID0+IHtcbiAgICAgICAgICAgIHN0ciArPSBgJHtjdXJyLm5hbWV9YFxuICAgICAgICAgICAgaWYgKGkgPCBxdWFsaWZpY2F0aW9uU3BlY2lhbGl6YXRpb24ubGVuZ3RoIC0gMSkgc3RyICs9IGAsIGA7XG4gICAgICAgICAgICByZXR1cm4gc3RyXG4gICAgICAgIH0sIFwiXCIpXG4gICAgfVxuXG4gICAgcHJvZmlsZUNsaWNrKGlkLCB1cmwsIGhvc3BpdGFsX2lkKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmhpc3RvcnkpIHtcbiAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgLyR7dXJsfT9ob3NwaXRhbF9pZD0ke2hvc3BpdGFsX2lkfSZoaWRlX3NlYXJjaF9kYXRhPXRydWVgKVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvb3BkL2RvY3Rvci8ke2lkfT9ob3NwaXRhbF9pZD0ke2hvc3BpdGFsX2lkfSZoaWRlX3NlYXJjaF9kYXRhPXRydWVgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlTW9yZUNsaW5pYyh2YWwpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93TW9yZUNsaW5pYzp2YWx9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgbmFtZSwgaG9zcGl0YWxzLCB0aHVtYm5haWwsIGRpc3BsYXlfbmFtZSwgdXJsLCBpZCB9ID0gdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclxuICAgICAgICBsZXQgaG9zcGl0YWxOYW1lID0gXCJcIlxuICAgICAgICBsZXQgaG9zcGl0YWxfaWQgPSAnJ1xuICAgICAgICBsZXQgc2hvd19jbGluaWMgPTBcbiAgICAgICAgbGV0IGFkZHJlc3NcbiAgICAgICAgaWYgKGhvc3BpdGFscyAmJiBob3NwaXRhbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBob3NwaXRhbHMubWFwKChob3NwaXRhbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICgoaG9zcGl0YWwuaG9zcGl0YWxfaWQgfHwgaG9zcGl0YWwuaWQpID09IHRoaXMucHJvcHMuc2VsZWN0ZWRDbGluaWMpIHtcbiAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWxOYW1lID0gaG9zcGl0YWwuaG9zcGl0YWxfbmFtZSB8fCBob3NwaXRhbC5uYW1lXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgPSBob3NwaXRhbC5hZGRyZXNzXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3BpdGFsX2lkID0gaG9zcGl0YWwuaG9zcGl0YWxfaWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoaG9zcGl0YWwuZW5hYmxlZF9mb3Jfb25saW5lX2Jvb2tpbmcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd19jbGluaWMrK1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2VsZWN0ZWRfdXNlcl9jb3ZlcmVkX3VuZGVyX2luc3VyYW5jZSA9IGZhbHNlXG4gICAgICAgIGlmKHRoaXMucHJvcHMucHJvZmlsZXMgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5wcm9maWxlcykubGVuZ3RoID4wICYmIHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdKXtcbiAgICAgICAgICAgIHNlbGVjdGVkX3VzZXJfY292ZXJlZF91bmRlcl9pbnN1cmFuY2UgPSB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlXS5pc19pbnN1cmVkXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhcnNlZCA9IG51bGxcbiAgICAgICAgaWYodGhpcy5wcm9wcy5sb2NhdGlvbiAmJiB0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaCkge1xuICAgICAgICAgICAgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpICAgIFxuICAgICAgICB9XG4gICAgICAgIGlmKHBhcnNlZCAmJiBwYXJzZWQuY29kX3RvX3ByZXBhaWQ9PSd0cnVlJyl7XG4gICAgICAgICAgICBzaG93X2NsaW5pYyA9IDBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTE1IG1ybmctdG9wLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIGRyLXF1Y2lrLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb2ZpbGVDbGljayhpZCwgdXJsLCBob3NwaXRhbF9pZCl9IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEluaXRpYWxzUGljdHVyZSBuYW1lPXtuYW1lfSBoYXNfaW1hZ2U9eyEhdGh1bWJuYWlsfSBjbGFzc05hbWU9XCJpbml0aWFsc1BpY3R1cmUtZHAgZG9jQ2FyZEludFBpY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0aHVtYm5haWx9IHN0eWxlPXt7IHdpZHRoOiAnNjBweCcsIGhlaWdodDogJzYwcHgnIH19IGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWctcm91bmRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Jbml0aWFsc1BpY3R1cmU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyLXByb2ZpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkci1uYW1lXCI+e2Rpc3BsYXlfbmFtZX08c3BhbiBjbGFzc05hbWU9XCJud0RvY1ZpZXdQcmZcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb2ZpbGVDbGljayhpZCwgdXJsLCBob3NwaXRhbF9pZCl9PihWaWV3IFByb2ZpbGUpPC9zcGFuPjwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8c3BhbiBjbGFzc05hbWU9XCJjbGluaWMtbmFtZSB0ZXh0LXNtXCI+e2hvc3BpdGFsTmFtZX08L3NwYW4+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjbGluaWMtbmFtZSB0ZXh0LXhzXCI+IHthZGRyZXNzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge2hvc3BpdGFscyAmJiBob3NwaXRhbHMubGVuZ3RoID4gMSAmJiBzaG93X2NsaW5pYyA+MD8gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgbnctY2xpbmljTW9yZSBtdC0wICR7IXRoaXMuc3RhdGUuc2hvd01vcmVDbGluaWM/Jyc6J2Fycm93LXJldid9YH0gb25DbGljaz17dGhpcy50b2dnbGVNb3JlQ2xpbmljLmJpbmQodGhpcywhdGhpcy5zdGF0ZS5zaG93TW9yZUNsaW5pYyl9Pisge2hvc3BpdGFscy5sZW5ndGgtMX0gbW9yZSBDbGluaWNzIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9yaWdodC1zYy5zdmcnfSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgOicnfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGhvc3BpdGFscyAmJiBob3NwaXRhbHMubGVuZ3RoID4gMSAmJiAhKHBhcnNlZCAmJiBwYXJzZWQuY29kX3RvX3ByZXBhaWQ9PSd0cnVlJyk/XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2xpbmljUmFkaW9Db250YWluZXIgJHt0aGlzLnN0YXRlLnNob3dNb3JlQ2xpbmljPycnOidkLW5vbmUnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2hvc3BpdGFscy5tYXAoKGhvc3BpdGFsLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaG9zcGl0YWwuZW5hYmxlZF9mb3Jfb25saW5lX2Jvb2tpbmc/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdGwtcmFkaW9cIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJhZGlvIG0tMFwiIG9uQ2xpY2s9eygpID0+IHsgdGhpcy5wcm9wcy5zZWxlY3RDbGluaWMoaG9zcGl0YWwuaG9zcGl0YWxfaWQpIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGluaWMtbmFtZXMtbndcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjbG5jLW5hbWVcIj57aG9zcGl0YWwuaG9zcGl0YWxfbmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2xuYy1wcmljaW5nLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWwuaW5zdXJhbmNlICYmIGhvc3BpdGFsLmluc3VyYW5jZS5pc19pbnN1cmFuY2VfY292ZXJlZCAmJiBob3NwaXRhbC5pbnN1cmFuY2UuaXNfdXNlcl9pbnN1cmVkICYmIHBhcnNlSW50KGhvc3BpdGFsLmRpc2NvdW50ZWRfcHJpY2UpIDw9aG9zcGl0YWwuaW5zdXJhbmNlLmluc3VyYW5jZV90aHJlc2hvbGRfYW1vdW50ICYmIHNlbGVjdGVkX3VzZXJfY292ZXJlZF91bmRlcl9pbnN1cmFuY2U/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjbGluYy1yZC1wcmljZVwiPuKCuSB7MH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aG9zcGl0YWwuZW5hYmxlZF9mb3JfY29kICYmICFob3NwaXRhbC5lbmFibGVkX2Zvcl9wcmVwYWlkP2hvc3BpdGFsLmNvZF9kZWFsX3ByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPzxzcGFuIGNsYXNzTmFtZT1cImNsaW5jLXJkLXByaWNlXCI+4oK5IHtob3NwaXRhbC5jb2RfZGVhbF9wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoaG9zcGl0YWwuY29kX2RlYWxfcHJpY2UpID09IHBhcnNlSW50KGhvc3BpdGFsLm1ycClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8c3BhbiBjbGFzc05hbWU9XCJjbGluYy1yZC1wcmljZS1jdXRcIj7igrkge2hvc3BpdGFsLm1ycH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxzcGFuIGNsYXNzTmFtZT1cImNsaW5jLXJkLXByaWNlXCI+4oK5IHtob3NwaXRhbC5tcnB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhvc3BpdGFsLmVuYWJsZWRfZm9yX29ubGluZV9ib29raW5nID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNsaW5jLXJkLXByaWNlXCI+4oK5IHtob3NwaXRhbC5kaXNjb3VudGVkX3ByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChob3NwaXRhbC5kaXNjb3VudGVkX3ByaWNlKSA9PSBwYXJzZUludChob3NwaXRhbC5tcnApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNsaW5jLXJkLXByaWNlLWN1dFwiPuKCuSB7aG9zcGl0YWwubXJwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjbG5jLWluY2x1ZGVjcG5cIj4oaW5jbHVkZXMgQ291cG9uKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGhvc3BpdGFsLm1ycCAmJiBob3NwaXRhbC5tcnAgIT0gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjbGluYy1yZC1wcmljZVwiPuKCuSB7aG9zcGl0YWwubXJwfTwvc3Bhbj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2BjbGNrLWxvYyAke2hvc3BpdGFsLmluc3VyYW5jZSAmJiBob3NwaXRhbC5pbnN1cmFuY2UuaXNfaW5zdXJhbmNlX2NvdmVyZWQgJiYgaG9zcGl0YWwuaW5zdXJhbmNlLmlzX3VzZXJfaW5zdXJlZCAmJiBwYXJzZUludChob3NwaXRhbC5kaXNjb3VudGVkX3ByaWNlKSA8PWhvc3BpdGFsLmluc3VyYW5jZS5pbnN1cmFuY2VfdGhyZXNob2xkX2Ftb3VudCAmJiBzZWxlY3RlZF91c2VyX2NvdmVyZWRfdW5kZXJfaW5zdXJhbmNlPydwLTAnOicnfWB9ID57aG9zcGl0YWwuYWRkcmVzc30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3NwaXRhbC5pbnN1cmFuY2UgJiYgaG9zcGl0YWwuaW5zdXJhbmNlLmlzX2luc3VyYW5jZV9jb3ZlcmVkICYmIGhvc3BpdGFsLmluc3VyYW5jZS5pc191c2VyX2luc3VyZWQgJiYgcGFyc2VJbnQoaG9zcGl0YWwuZGlzY291bnRlZF9wcmljZSkgPD1ob3NwaXRhbC5pbnN1cmFuY2UuaW5zdXJhbmNlX3RocmVzaG9sZF9hbW91bnQgJiYgc2VsZWN0ZWRfdXNlcl9jb3ZlcmVkX3VuZGVyX2luc3VyYW5jZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q292ZXJlZCB1bmRlciBpbnN1cmFuY2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkQ2xpbmljID09IGhvc3BpdGFsLmhvc3BpdGFsX2lkID8gPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNoZWNrZWQgbmFtZT1cInJhZGlvXCIgLz4gOiA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInJhZGlvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX0gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZCAmJiBwYXJzZWQuY29kX3RvX3ByZXBhaWQ9PSd0cnVlJyAmJiBcblxuICAgICAgICAgICAgICAgICAgICBob3NwaXRhbHMuZmlsdGVyKGhvc3BpdGFsPT5ob3NwaXRhbC5pZCA9PSB0aGlzLnByb3BzLnNlbGVjdGVkQ2xpbmljKS5tYXAoKGhvc3BpdGFsKT0+e1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwiY2xuYy1uYW1lXCI+e2hvc3BpdGFsLmhvc3BpdGFsX25hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RlZENsaW5pY1xuIiwiaW1wb3J0IFNlbGVjdGVkQ2xpbmljIGZyb20gJy4vU2VsZWN0ZWRDbGluaWMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGVkQ2xpbmljIl0sInNvdXJjZVJvb3QiOiIifQ==