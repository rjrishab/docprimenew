exports.ids = [25];
exports.modules = {

/***/ "./dev/js/components/opd/commons/doctorProfileCard/DoctorProfileCard.js":
/*!******************************************************************************!*\
  !*** ./dev/js/components/opd/commons/doctorProfileCard/DoctorProfileCard.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _initialsPicture = __webpack_require__(/*! ../../../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _gtm = __webpack_require__(/*! ../../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _RatingStars = __webpack_require__(/*! ../../../commons/ratingsProfileView/RatingStars */ "./dev/js/components/commons/ratingsProfileView/RatingStars.js");

var _RatingStars2 = _interopRequireDefault(_RatingStars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DoctorProfileCard extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            ssrFlag: false
        };
    }

    componentDidMount() {
        if (window) {
            window.scrollTo(0, 0);
        }
        this.setState({ ssrFlag: true });
    }

    getQualificationStr(qualificationSpecialization) {
        return qualificationSpecialization.reduce((str, curr, i) => {
            str += `${curr.name}`;
            if (i < qualificationSpecialization.length - 1) str += `, `;
            return str;
        }, "");
    }

    claimButtonClick(e) {
        e.stopPropagation();

        let data = {
            'Category': 'ConsumerApp', 'Action': 'ClaimButtomClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'claim-buttom-clicked', 'selectedId': this.props.details.id
        };
        _gtm2.default.sendEvent({ data: data });

        this.props.history.push('/doctorsignup');
    }

    moreExpClick() {
        let elementTop = document.getElementById('experience').getBoundingClientRect().top;
        let elementHeight = document.getElementById('experience').clientHeight;
        let scrollPosition = elementTop - elementHeight;
        window.scrollTo(0, scrollPosition);
    }

    moreQualificationClick() {
        let elementTop = document.getElementById('qualification').getBoundingClientRect().top;
        let elementHeight = document.getElementById('qualification').clientHeight;
        let scrollPosition = elementTop - elementHeight;
        window.scrollTo(0, scrollPosition);
    }

    searchProceedOPD(doc_name = "", hospital_name = "", hospital_id = "") {

        let doctor_name = doc_name.toLowerCase();

        let data = {
            'Category': 'ConsumerApp', 'Action': 'DoctorButtomClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'different-doctor-searched', 'doctor_name': doctor_name
        };
        _gtm2.default.sendEvent({ data: data });

        // handle doctor name, hospital name

        let state = {
            filterCriteria: _extends({}, this.props.filterCriteria, {
                doctor_name, hospital_name, hospital_id
            }),
            nextFilterCriteria: _extends({}, this.props.filterCriteria, {
                doctor_name, hospital_name, hospital_id
            })
        };

        if (doctor_name || hospital_name || hospital_id) {
            state.selectedCriterias = [];
            state.commonSelectedCriterias = [];
        }

        this.props.mergeOPDState(state, true);

        this.props.history.push({
            pathname: '/opd/searchresults',
            state: { search_back: true }
        });
    }

    render() {
        let { name, experience_years, qualifications, thumbnail, experiences, general_specialization, display_name, is_license_verified, rating_graph } = this.props.details;
        let expStr = "";

        // let qualificationStr = ''
        // if (general_specialization && general_specialization.length) {
        //     if (general_specialization.length <= 3) {
        //         for (let i = 0; i < general_specialization.length; i++) {
        //             qualificationStr += general_specialization[i].name;
        //             if (i < general_specialization.length - 1) qualificationStr += `, `;
        //         }
        //     }
        //     else {
        //         for (let i = 0; i < 3; i++) {
        //             qualificationStr += general_specialization[i].name;
        //             if (i < general_specialization.length - 1) qualificationStr += `, `;
        //         }
        //     }
        // }

        if (experiences && experiences.length) {
            expStr += `EXP - ${experiences[0].hospital}`;
            // experiences.map((exp, i) => {
            //     expStr += exp.hospital
            //     if (i < experiences.length - 1) expStr += ', '
            // })
        }
        let doc_name = name.split(' ');

        return _react2.default.createElement(
            'div',
            { className: 'widget-header dr-qucik-info doc-gold-padding' },
            _react2.default.createElement(
                'div',
                { className: 'fltr-crd-img text-center' },
                _react2.default.createElement(
                    _initialsPicture2.default,
                    { name: name, has_image: !!thumbnail, className: 'initialsPicture-dp' },
                    _react2.default.createElement('img', { src: thumbnail, className: 'img-fluid img-round', alt: `${display_name}, ${this.getQualificationStr(general_specialization || '')}`, title: display_name })
                ),
                is_license_verified ? _react2.default.createElement(
                    'span',
                    { className: 'fltr-rtng' },
                    'Verified'
                ) : '',
                rating_graph && rating_graph.avg_rating && rating_graph.avg_rating >= 4 ? _react2.default.createElement(_RatingStars2.default, { average_rating: rating_graph.avg_rating, rating_count: rating_graph.rating_count || '', width: '10px', height: '10px' }) : rating_graph && rating_graph.avg_rating && rating_graph.rating_count >= 5 ? _react2.default.createElement(_RatingStars2.default, { average_rating: rating_graph.avg_rating, rating_count: rating_graph.rating_count, width: '10px', height: '10px' }) : ''
            ),
            _react2.default.createElement(
                'div',
                { className: 'dr-profile' },
                _react2.default.createElement(
                    'h1',
                    { className: 'dr-name' },
                    display_name
                ),
                general_specialization && general_specialization.length ? general_specialization.map((speciality, index) => {
                    if (speciality.url) {
                        return _react2.default.createElement(
                            'a',
                            { className: 'inline-speciality', key: index, href: speciality.url, onClick: e => {
                                    e.preventDefault();
                                    this.props.history.push(`/${speciality.url}`);
                                } },
                            _react2.default.createElement(
                                'h2',
                                { className: 'desg' },
                                `${index == general_specialization.length - 1 ? `${speciality.name}` : `${speciality.name},`}`
                            )
                        );
                    } else {
                        return _react2.default.createElement(
                            'h2',
                            { key: index, className: 'desg inline-speciality' },
                            `${index == general_specialization.length - 1 ? `${speciality.name}` : `${speciality.name},`}`
                        );
                    }
                }) : '',
                experience_years ? _react2.default.createElement(
                    'h2',
                    { className: 'add-details' },
                    experience_years,
                    ' Years of Experience'
                ) : "",
                experiences && experiences.length > 1 ? _react2.default.createElement(
                    'h2',
                    { className: 'add-details' },
                    expStr,
                    ' & ',
                    _react2.default.createElement(
                        'span',
                        { style: { cursor: 'pointer', color: `var(--text--primary--color)` }, onClick: () => this.moreExpClick() },
                        experiences.length - 1,
                        ' more'
                    )
                ) : experiences ? _react2.default.createElement(
                    'h2',
                    { className: 'add-details' },
                    expStr
                ) : '',
                this.props.recommendDocs ? _react2.default.createElement(
                    'button',
                    { onClick: this.claimButtonClick.bind(this), className: 'fltr-bkng-btn claim-btn mrt-10' },
                    'Claim this profile'
                ) : '',
                this.props.recommendDocs && this.state.ssrFlag ? _react2.default.createElement(
                    'div',
                    { className: 'notAvldocBtnContainer mrt-10' },
                    _react2.default.createElement(
                        'p',
                        { className: 'notAvlDoc' },
                        _react2.default.createElement(
                            'span',
                            { className: 'fw-700' },
                            'Not Bookable'
                        ),
                        ': See bookable doctors with great discounts below ',
                        _react2.default.createElement(
                            'a',
                            { onClick: this.props.viewAllDocClick.bind(this, this.props.nearbyDoctors), className: 'text-primary fw-600 d-inline-block' },
                            ' ',
                            this.props.nearbyDoctors.count >= 1 && this.props.nearbyDoctors.doctors_url ? '(View All)' : ''
                        )
                    )
                ) : ''
            )
        );
    }
}

exports.default = DoctorProfileCard;

/***/ }),

/***/ "./dev/js/components/opd/commons/doctorProfileCard/index.js":
/*!******************************************************************!*\
  !*** ./dev/js/components/opd/commons/doctorProfileCard/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DoctorProfileCard = __webpack_require__(/*! ./DoctorProfileCard */ "./dev/js/components/opd/commons/doctorProfileCard/DoctorProfileCard.js");

var _DoctorProfileCard2 = _interopRequireDefault(_DoctorProfileCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DoctorProfileCard2.default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvY29tbW9ucy9kb2N0b3JQcm9maWxlQ2FyZC9Eb2N0b3JQcm9maWxlQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvY29tbW9ucy9kb2N0b3JQcm9maWxlQ2FyZC9pbmRleC5qcyJdLCJuYW1lcyI6WyJEb2N0b3JQcm9maWxlQ2FyZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwic3NyRmxhZyIsImNvbXBvbmVudERpZE1vdW50Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJzZXRTdGF0ZSIsImdldFF1YWxpZmljYXRpb25TdHIiLCJxdWFsaWZpY2F0aW9uU3BlY2lhbGl6YXRpb24iLCJyZWR1Y2UiLCJzdHIiLCJjdXJyIiwiaSIsIm5hbWUiLCJsZW5ndGgiLCJjbGFpbUJ1dHRvbkNsaWNrIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImRhdGEiLCJHVE0iLCJnZXRVc2VySWQiLCJkZXRhaWxzIiwiaWQiLCJzZW5kRXZlbnQiLCJoaXN0b3J5IiwicHVzaCIsIm1vcmVFeHBDbGljayIsImVsZW1lbnRUb3AiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiZWxlbWVudEhlaWdodCIsImNsaWVudEhlaWdodCIsInNjcm9sbFBvc2l0aW9uIiwibW9yZVF1YWxpZmljYXRpb25DbGljayIsInNlYXJjaFByb2NlZWRPUEQiLCJkb2NfbmFtZSIsImhvc3BpdGFsX25hbWUiLCJob3NwaXRhbF9pZCIsImRvY3Rvcl9uYW1lIiwidG9Mb3dlckNhc2UiLCJmaWx0ZXJDcml0ZXJpYSIsIm5leHRGaWx0ZXJDcml0ZXJpYSIsInNlbGVjdGVkQ3JpdGVyaWFzIiwiY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMiLCJtZXJnZU9QRFN0YXRlIiwicGF0aG5hbWUiLCJzZWFyY2hfYmFjayIsInJlbmRlciIsImV4cGVyaWVuY2VfeWVhcnMiLCJxdWFsaWZpY2F0aW9ucyIsInRodW1ibmFpbCIsImV4cGVyaWVuY2VzIiwiZ2VuZXJhbF9zcGVjaWFsaXphdGlvbiIsImRpc3BsYXlfbmFtZSIsImlzX2xpY2Vuc2VfdmVyaWZpZWQiLCJyYXRpbmdfZ3JhcGgiLCJleHBTdHIiLCJob3NwaXRhbCIsInNwbGl0IiwiYXZnX3JhdGluZyIsInJhdGluZ19jb3VudCIsIm1hcCIsInNwZWNpYWxpdHkiLCJpbmRleCIsInVybCIsInByZXZlbnREZWZhdWx0IiwiY3Vyc29yIiwiY29sb3IiLCJyZWNvbW1lbmREb2NzIiwiYmluZCIsInZpZXdBbGxEb2NDbGljayIsIm5lYXJieURvY3RvcnMiLCJjb3VudCIsImRvY3RvcnNfdXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLE1BQU1BLGlCQUFOLFNBQWdDQyxnQkFBTUMsU0FBdEMsQ0FBZ0Q7QUFDNUNDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNBLGFBQUtDLEtBQUwsR0FBYTtBQUNUQyxxQkFBUztBQURBLFNBQWI7QUFHSDs7QUFFREMsd0JBQW9CO0FBQ2hCLFlBQUlDLE1BQUosRUFBWTtBQUNSQSxtQkFBT0MsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNIO0FBQ0QsYUFBS0MsUUFBTCxDQUFjLEVBQUVKLFNBQVMsSUFBWCxFQUFkO0FBQ0g7O0FBRURLLHdCQUFvQkMsMkJBQXBCLEVBQWlEO0FBQzdDLGVBQU9BLDRCQUE0QkMsTUFBNUIsQ0FBbUMsQ0FBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQVlDLENBQVosS0FBa0I7QUFDeERGLG1CQUFRLEdBQUVDLEtBQUtFLElBQUssRUFBcEI7QUFDQSxnQkFBSUQsSUFBSUosNEJBQTRCTSxNQUE1QixHQUFxQyxDQUE3QyxFQUFnREosT0FBUSxJQUFSO0FBQ2hELG1CQUFPQSxHQUFQO0FBQ0gs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U0FESjtBQWdFSDtBQWpMMkM7O2tCQXFMakMvRSxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0xmOzs7Ozs7a0JBRWVBLDJCIiwiZmlsZSI6IjI1LnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEluaXRpYWxzUGljdHVyZSBmcm9tICcuLi8uLi8uLi9jb21tb25zL2luaXRpYWxzUGljdHVyZSdcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgUmF0aW5nU3RhcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9ucy9yYXRpbmdzUHJvZmlsZVZpZXcvUmF0aW5nU3RhcnMnO1xuXG5jbGFzcyBEb2N0b3JQcm9maWxlQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzc3JGbGFnOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzc3JGbGFnOiB0cnVlIH0pXG4gICAgfVxuXG4gICAgZ2V0UXVhbGlmaWNhdGlvblN0cihxdWFsaWZpY2F0aW9uU3BlY2lhbGl6YXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHF1YWxpZmljYXRpb25TcGVjaWFsaXphdGlvbi5yZWR1Y2UoKHN0ciwgY3VyciwgaSkgPT4ge1xuICAgICAgICAgICAgc3RyICs9IGAke2N1cnIubmFtZX1gXG4gICAgICAgICAgICBpZiAoaSA8IHF1YWxpZmljYXRpb25TcGVjaWFsaXphdGlvbi5sZW5ndGggLSAxKSBzdHIgKz0gYCwgYDtcbiAgICAgICAgICAgIHJldHVybiBzdHJcbiAgICAgICAgfSwgXCJcIilcbiAgICB9XG5cbiAgICBjbGFpbUJ1dHRvbkNsaWNrKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQ2xhaW1CdXR0b21DbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2xhaW0tYnV0dG9tLWNsaWNrZWQnLCAnc2VsZWN0ZWRJZCc6IHRoaXMucHJvcHMuZGV0YWlscy5pZFxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9kb2N0b3JzaWdudXAnKTtcbiAgICB9XG5cbiAgICBtb3JlRXhwQ2xpY2soKSB7XG4gICAgICAgIGxldCBlbGVtZW50VG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cGVyaWVuY2UnKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgIGxldCBlbGVtZW50SGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cGVyaWVuY2UnKS5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGxldCBzY3JvbGxQb3NpdGlvbiA9IGVsZW1lbnRUb3AgLSBlbGVtZW50SGVpZ2h0O1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgc2Nyb2xsUG9zaXRpb24pO1xuICAgIH1cblxuICAgIG1vcmVRdWFsaWZpY2F0aW9uQ2xpY2soKSB7XG4gICAgICAgIGxldCBlbGVtZW50VG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1YWxpZmljYXRpb24nKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgIGxldCBlbGVtZW50SGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1YWxpZmljYXRpb24nKS5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGxldCBzY3JvbGxQb3NpdGlvbiA9IGVsZW1lbnRUb3AgLSBlbGVtZW50SGVpZ2h0O1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgc2Nyb2xsUG9zaXRpb24pO1xuICAgIH1cblxuICAgIHNlYXJjaFByb2NlZWRPUEQoZG9jX25hbWUgPSBcIlwiLCBob3NwaXRhbF9uYW1lID0gXCJcIiwgaG9zcGl0YWxfaWQgPSBcIlwiKSB7XG5cbiAgICAgICAgbGV0IGRvY3Rvcl9uYW1lID0gZG9jX25hbWUudG9Mb3dlckNhc2UoKVxuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb2N0b3JCdXR0b21DbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnZGlmZmVyZW50LWRvY3Rvci1zZWFyY2hlZCcsICdkb2N0b3JfbmFtZSc6IGRvY3Rvcl9uYW1lXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICAvLyBoYW5kbGUgZG9jdG9yIG5hbWUsIGhvc3BpdGFsIG5hbWVcblxuICAgICAgICBsZXQgc3RhdGUgPSB7XG4gICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYToge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgICAgICAgICAgZG9jdG9yX25hbWUsIGhvc3BpdGFsX25hbWUsIGhvc3BpdGFsX2lkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmV4dEZpbHRlckNyaXRlcmlhOiB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5maWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgICAgICAgICBkb2N0b3JfbmFtZSwgaG9zcGl0YWxfbmFtZSwgaG9zcGl0YWxfaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKGRvY3Rvcl9uYW1lIHx8IGhvc3BpdGFsX25hbWUgfHwgaG9zcGl0YWxfaWQpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkQ3JpdGVyaWFzID0gW11cbiAgICAgICAgICAgIHN0YXRlLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzID0gW11cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvcHMubWVyZ2VPUERTdGF0ZShzdGF0ZSwgdHJ1ZSlcblxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCh7XG4gICAgICAgICAgICBwYXRobmFtZTogJy9vcGQvc2VhcmNocmVzdWx0cycsXG4gICAgICAgICAgICBzdGF0ZTogeyBzZWFyY2hfYmFjazogdHJ1ZSB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyBuYW1lLCBleHBlcmllbmNlX3llYXJzLCBxdWFsaWZpY2F0aW9ucywgdGh1bWJuYWlsLCBleHBlcmllbmNlcywgZ2VuZXJhbF9zcGVjaWFsaXphdGlvbiwgZGlzcGxheV9uYW1lLCBpc19saWNlbnNlX3ZlcmlmaWVkLCByYXRpbmdfZ3JhcGggfSA9IHRoaXMucHJvcHMuZGV0YWlsc1xuICAgICAgICBsZXQgZXhwU3RyID0gXCJcIlxuXG4gICAgICAgIC8vIGxldCBxdWFsaWZpY2F0aW9uU3RyID0gJydcbiAgICAgICAgLy8gaWYgKGdlbmVyYWxfc3BlY2lhbGl6YXRpb24gJiYgZ2VuZXJhbF9zcGVjaWFsaXphdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgLy8gICAgIGlmIChnZW5lcmFsX3NwZWNpYWxpemF0aW9uLmxlbmd0aCA8PSAzKSB7XG4gICAgICAgIC8vICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnZW5lcmFsX3NwZWNpYWxpemF0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHF1YWxpZmljYXRpb25TdHIgKz0gZ2VuZXJhbF9zcGVjaWFsaXphdGlvbltpXS5uYW1lO1xuICAgICAgICAvLyAgICAgICAgICAgICBpZiAoaSA8IGdlbmVyYWxfc3BlY2lhbGl6YXRpb24ubGVuZ3RoIC0gMSkgcXVhbGlmaWNhdGlvblN0ciArPSBgLCBgO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHF1YWxpZmljYXRpb25TdHIgKz0gZ2VuZXJhbF9zcGVjaWFsaXphdGlvbltpXS5uYW1lO1xuICAgICAgICAvLyAgICAgICAgICAgICBpZiAoaSA8IGdlbmVyYWxfc3BlY2lhbGl6YXRpb24ubGVuZ3RoIC0gMSkgcXVhbGlmaWNhdGlvblN0ciArPSBgLCBgO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGlmIChleHBlcmllbmNlcyAmJiBleHBlcmllbmNlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGV4cFN0ciArPSBgRVhQIC0gJHtleHBlcmllbmNlc1swXS5ob3NwaXRhbH1gXG4gICAgICAgICAgICAvLyBleHBlcmllbmNlcy5tYXAoKGV4cCwgaSkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGV4cFN0ciArPSBleHAuaG9zcGl0YWxcbiAgICAgICAgICAgIC8vICAgICBpZiAoaSA8IGV4cGVyaWVuY2VzLmxlbmd0aCAtIDEpIGV4cFN0ciArPSAnLCAnXG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICB9XG4gICAgICAgIGxldCBkb2NfbmFtZSA9IG5hbWUuc3BsaXQoJyAnKVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1oZWFkZXIgZHItcXVjaWstaW5mbyBkb2MtZ29sZC1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbHRyLWNyZC1pbWcgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPEluaXRpYWxzUGljdHVyZSBuYW1lPXtuYW1lfSBoYXNfaW1hZ2U9eyEhdGh1bWJuYWlsfSBjbGFzc05hbWU9XCJpbml0aWFsc1BpY3R1cmUtZHBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0aHVtYm5haWx9IGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWctcm91bmRcIiBhbHQ9e2Ake2Rpc3BsYXlfbmFtZX0sICR7dGhpcy5nZXRRdWFsaWZpY2F0aW9uU3RyKGdlbmVyYWxfc3BlY2lhbGl6YXRpb24gfHwgJycpfWB9IHRpdGxlPXtkaXNwbGF5X25hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvSW5pdGlhbHNQaWN0dXJlPlxuICAgICAgICAgICAgICAgICAgICB7aXNfbGljZW5zZV92ZXJpZmllZCA/IDxzcGFuIGNsYXNzTmFtZT1cImZsdHItcnRuZ1wiPlZlcmlmaWVkPC9zcGFuPiA6ICcnfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICByYXRpbmdfZ3JhcGggJiYgcmF0aW5nX2dyYXBoLmF2Z19yYXRpbmcgJiYgcmF0aW5nX2dyYXBoLmF2Z19yYXRpbmcgPj0gNCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhdGluZ1N0YXJzIGF2ZXJhZ2VfcmF0aW5nPXtyYXRpbmdfZ3JhcGguYXZnX3JhdGluZ30gcmF0aW5nX2NvdW50PXtyYXRpbmdfZ3JhcGgucmF0aW5nX2NvdW50IHx8ICcnfSB3aWR0aD1cIjEwcHhcIiBoZWlnaHQ9XCIxMHB4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHJhdGluZ19ncmFwaCAmJiByYXRpbmdfZ3JhcGguYXZnX3JhdGluZyAmJiByYXRpbmdfZ3JhcGgucmF0aW5nX2NvdW50ID49IDUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmF0aW5nU3RhcnMgYXZlcmFnZV9yYXRpbmc9e3JhdGluZ19ncmFwaC5hdmdfcmF0aW5nfSByYXRpbmdfY291bnQ9e3JhdGluZ19ncmFwaC5yYXRpbmdfY291bnR9IHdpZHRoPVwiMTBweFwiIGhlaWdodD1cIjEwcHhcIiAvPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHItcHJvZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZHItbmFtZVwiPntkaXNwbGF5X25hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgey8qXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlzU2VvRnJpZW5kbHkgJiYgIXRoaXMucHJvcHMuaXNPcmdhbmljP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpZmYtc3VnZ2VzdGlvblwiPkxvb2tpbmcgZm9yIGEgZGlmZmVyZW50IDxzcGFuIG9uQ2xpY2s9e3RoaXMuc2VhcmNoUHJvY2VlZE9QRC5iaW5kKHRoaXMsIGRvY19uYW1lWzBdLCAnJywgJycpfT5Eci4ge2RvY19uYW1lWzBdfT88L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmFsX3NwZWNpYWxpemF0aW9uICYmIGdlbmVyYWxfc3BlY2lhbGl6YXRpb24ubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmFsX3NwZWNpYWxpemF0aW9uLm1hcCgoc3BlY2lhbGl0eSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwZWNpYWxpdHkudXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGEgY2xhc3NOYW1lPVwiaW5saW5lLXNwZWNpYWxpdHlcIiBrZXk9e2luZGV4fSBocmVmPXtzcGVjaWFsaXR5LnVybH0gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3NwZWNpYWxpdHkudXJsfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZGVzZ1wiPntgJHtpbmRleCA9PSBnZW5lcmFsX3NwZWNpYWxpemF0aW9uLmxlbmd0aCAtIDEgPyBgJHtzcGVjaWFsaXR5Lm5hbWV9YCA6IGAke3NwZWNpYWxpdHkubmFtZX0sYH1gfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGgyIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImRlc2cgaW5saW5lLXNwZWNpYWxpdHlcIj57YCR7aW5kZXggPT0gZ2VuZXJhbF9zcGVjaWFsaXphdGlvbi5sZW5ndGggLSAxID8gYCR7c3BlY2lhbGl0eS5uYW1lfWAgOiBgJHtzcGVjaWFsaXR5Lm5hbWV9LGB9YH08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHsvKiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmFsX3NwZWNpYWxpemF0aW9uICYmIGdlbmVyYWxfc3BlY2lhbGl6YXRpb24ubGVuZ3RoID4gMyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImRlc2dcIj57cXVhbGlmaWNhdGlvblN0cn0gJiA8c3BhbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgY29sb3I6ICcjZjc4NjMxJyB9fSBvbkNsaWNrPXsoKSA9PiB0aGlzLm1vcmVRdWFsaWZpY2F0aW9uQ2xpY2soKX0+e2dlbmVyYWxfc3BlY2lhbGl6YXRpb24ubGVuZ3RoIC0gM30gbW9yZTwvc3Bhbj48L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZGVzZ1wiPntxdWFsaWZpY2F0aW9uU3RyfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIH0gKi99XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVyaWVuY2VfeWVhcnMgPyA8aDIgY2xhc3NOYW1lPVwiYWRkLWRldGFpbHNcIj57ZXhwZXJpZW5jZV95ZWFyc30gWWVhcnMgb2YgRXhwZXJpZW5jZTwvaDI+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVyaWVuY2VzICYmIGV4cGVyaWVuY2VzLmxlbmd0aCA+IDEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJhZGQtZGV0YWlsc1wiPntleHBTdHJ9ICYgPHNwYW4gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiBgdmFyKC0tdGV4dC0tcHJpbWFyeS0tY29sb3IpYCB9fSBvbkNsaWNrPXsoKSA9PiB0aGlzLm1vcmVFeHBDbGljaygpfT57ZXhwZXJpZW5jZXMubGVuZ3RoIC0gMX0gbW9yZTwvc3Bhbj48L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZXhwZXJpZW5jZXMgPyA8aDIgY2xhc3NOYW1lPVwiYWRkLWRldGFpbHNcIj57ZXhwU3RyfTwvaDI+IDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlY29tbWVuZERvY3MgPyA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2xhaW1CdXR0b25DbGljay5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJmbHRyLWJrbmctYnRuIGNsYWltLWJ0biBtcnQtMTBcIj5DbGFpbSB0aGlzIHByb2ZpbGU8L2J1dHRvbj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWNvbW1lbmREb2NzICYmIHRoaXMuc3RhdGUuc3NyRmxhZyA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdEF2bGRvY0J0bkNvbnRhaW5lciBtcnQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJub3RBdmxEb2NcIj48c3BhbiBjbGFzc05hbWU9XCJmdy03MDBcIj5Ob3QgQm9va2FibGU8L3NwYW4+OiBTZWUgYm9va2FibGUgZG9jdG9ycyB3aXRoIGdyZWF0IGRpc2NvdW50cyBiZWxvdyA8YSBvbkNsaWNrPXt0aGlzLnByb3BzLnZpZXdBbGxEb2NDbGljay5iaW5kKHRoaXMsIHRoaXMucHJvcHMubmVhcmJ5RG9jdG9ycyl9IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmdy02MDAgZC1pbmxpbmUtYmxvY2tcIj4ge3RoaXMucHJvcHMubmVhcmJ5RG9jdG9ycy5jb3VudCA+PSAxICYmIHRoaXMucHJvcHMubmVhcmJ5RG9jdG9ycy5kb2N0b3JzX3VybCA/ICcoVmlldyBBbGwpJyA6ICcnfTwvYT48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgRG9jdG9yUHJvZmlsZUNhcmRcbiIsImltcG9ydCBEb2N0b3JQcm9maWxlQ2FyZCBmcm9tICcuL0RvY3RvclByb2ZpbGVDYXJkJ1xuXG5leHBvcnQgZGVmYXVsdCBEb2N0b3JQcm9maWxlQ2FyZCJdLCJzb3VyY2VSb290IjoiIn0=