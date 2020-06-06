(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _initialsPicture = __webpack_require__(/*! ../../../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _gtm = __webpack_require__(/*! ../../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _RatingStars = __webpack_require__(/*! ../../../commons/ratingsProfileView/RatingStars */ "./dev/js/components/commons/ratingsProfileView/RatingStars.js");

var _RatingStars2 = _interopRequireDefault(_RatingStars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DoctorProfileCard = function (_React$Component) {
    _inherits(DoctorProfileCard, _React$Component);

    function DoctorProfileCard(props) {
        _classCallCheck(this, DoctorProfileCard);

        var _this = _possibleConstructorReturn(this, (DoctorProfileCard.__proto__ || Object.getPrototypeOf(DoctorProfileCard)).call(this, props));

        _this.state = {
            ssrFlag: false
        };
        return _this;
    }

    _createClass(DoctorProfileCard, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (window) {
                window.scrollTo(0, 0);
            }
            this.setState({ ssrFlag: true });
        }
    }, {
        key: 'getQualificationStr',
        value: function getQualificationStr(qualificationSpecialization) {
            return qualificationSpecialization.reduce(function (str, curr, i) {
                str += '' + curr.name;
                if (i < qualificationSpecialization.length - 1) str += ', ';
                return str;
            }, "");
        }
    }, {
        key: 'claimButtonClick',
        value: function claimButtonClick(e) {
            e.stopPropagation();

            var data = {
                'Category': 'ConsumerApp', 'Action': 'ClaimButtomClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'claim-buttom-clicked', 'selectedId': this.props.details.id
            };
            _gtm2.default.sendEvent({ data: data });

            this.props.history.push('/doctorsignup');
        }
    }, {
        key: 'moreExpClick',
        value: function moreExpClick() {
            var elementTop = document.getElementById('experience').getBoundingClientRect().top;
            var elementHeight = document.getElementById('experience').clientHeight;
            var scrollPosition = elementTop - elementHeight;
            window.scrollTo(0, scrollPosition);
        }
    }, {
        key: 'moreQualificationClick',
        value: function moreQualificationClick() {
            var elementTop = document.getElementById('qualification').getBoundingClientRect().top;
            var elementHeight = document.getElementById('qualification').clientHeight;
            var scrollPosition = elementTop - elementHeight;
            window.scrollTo(0, scrollPosition);
        }
    }, {
        key: 'searchProceedOPD',
        value: function searchProceedOPD() {
            var doc_name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var hospital_name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            var hospital_id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";


            var doctor_name = doc_name.toLowerCase();

            var data = {
                'Category': 'ConsumerApp', 'Action': 'DoctorButtomClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'different-doctor-searched', 'doctor_name': doctor_name
            };
            _gtm2.default.sendEvent({ data: data });

            // handle doctor name, hospital name

            var state = {
                filterCriteria: _extends({}, this.props.filterCriteria, {
                    doctor_name: doctor_name, hospital_name: hospital_name, hospital_id: hospital_id
                }),
                nextFilterCriteria: _extends({}, this.props.filterCriteria, {
                    doctor_name: doctor_name, hospital_name: hospital_name, hospital_id: hospital_id
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
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props$details = this.props.details,
                name = _props$details.name,
                experience_years = _props$details.experience_years,
                qualifications = _props$details.qualifications,
                thumbnail = _props$details.thumbnail,
                experiences = _props$details.experiences,
                general_specialization = _props$details.general_specialization,
                display_name = _props$details.display_name,
                is_license_verified = _props$details.is_license_verified,
                rating_graph = _props$details.rating_graph;

            var expStr = "";

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
                expStr += 'EXP - ' + experiences[0].hospital;
                // experiences.map((exp, i) => {
                //     expStr += exp.hospital
                //     if (i < experiences.length - 1) expStr += ', '
                // })
            }
            var doc_name = name.split(' ');

            return _react2.default.createElement(
                'div',
                { className: 'widget-header dr-qucik-info doc-gold-padding' },
                _react2.default.createElement(
                    'div',
                    { className: 'fltr-crd-img text-center' },
                    _react2.default.createElement(
                        _initialsPicture2.default,
                        { name: name, has_image: !!thumbnail, className: 'initialsPicture-dp' },
                        _react2.default.createElement('img', { src: thumbnail, className: 'img-fluid img-round', alt: display_name + ', ' + this.getQualificationStr(general_specialization || ''), title: display_name })
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
                    general_specialization && general_specialization.length ? general_specialization.map(function (speciality, index) {
                        if (speciality.url) {
                            return _react2.default.createElement(
                                'a',
                                { className: 'inline-speciality', key: index, href: speciality.url, onClick: function onClick(e) {
                                        e.preventDefault();
                                        _this2.props.history.push('/' + speciality.url);
                                    } },
                                _react2.default.createElement(
                                    'h2',
                                    { className: 'desg' },
                                    '' + (index == general_specialization.length - 1 ? '' + speciality.name : speciality.name + ',')
                                )
                            );
                        } else {
                            return _react2.default.createElement(
                                'h2',
                                { key: index, className: 'desg inline-speciality' },
                                '' + (index == general_specialization.length - 1 ? '' + speciality.name : speciality.name + ',')
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
                            { style: { cursor: 'pointer', color: 'var(--text--primary--color)' }, onClick: function onClick() {
                                    return _this2.moreExpClick();
                                } },
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
    }]);

    return DoctorProfileCard;
}(_react2.default.Component);

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvY29tbW9ucy9kb2N0b3JQcm9maWxlQ2FyZC9Eb2N0b3JQcm9maWxlQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvY29tbW9ucy9kb2N0b3JQcm9maWxlQ2FyZC9pbmRleC5qcyJdLCJuYW1lcyI6WyJEb2N0b3JQcm9maWxlQ2FyZCIsInByb3BzIiwic3RhdGUiLCJzc3JGbGFnIiwid2luZG93Iiwic2Nyb2xsVG8iLCJzZXRTdGF0ZSIsInF1YWxpZmljYXRpb25TcGVjaWFsaXphdGlvbiIsInJlZHVjZSIsInN0ciIsImN1cnIiLCJpIiwibmFtZSIsImxlbmd0aCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJkYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwiZGV0YWlscyIsImlkIiwic2VuZEV2ZW50IiwiaGlzdG9yeSIsInB1c2giLCJlbGVtZW50VG9wIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImVsZW1lbnRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxQb3NpdGlvbiIsImRvY19uYW1lIiwiaG9zcGl0YWxfbmFtZSIsImhvc3BpdGFsX2lkIiwiZG9jdG9yX25hbWUiLCJ0b0xvd2VyQ2FzZSIsImZpbHRlckNyaXRlcmlhIiwibmV4dEZpbHRlckNyaXRlcmlhIiwic2VsZWN0ZWRDcml0ZXJpYXMiLCJjb21tb25TZWxlY3RlZENyaXRlcmlhcyIsIm1lcmdlT1BEU3RhdGUiLCJwYXRobmFtZSIsInNlYXJjaF9iYWNrIiwiZXhwZXJpZW5jZV95ZWFycyIsInF1YWxpZmljYXRpb25zIiwidGh1bWJuYWlsIiwiZXhwZXJpZW5jZXMiLCJnZW5lcmFsX3NwZWNpYWxpemF0aW9uIiwiZGlzcGxheV9uYW1lIiwiaXNfbGljZW5zZV92ZXJpZmllZCIsInJhdGluZ19ncmFwaCIsImV4cFN0ciIsImhvc3BpdGFsIiwic3BsaXQiLCJnZXRRdWFsaWZpY2F0aW9uU3RyIiwiYXZnX3JhdGluZyIsInJhdGluZ19jb3VudCIsIm1hcCIsInNwZWNpYWxpdHkiLCJpbmRleCIsInVybCIsInByZXZlbnREZWZhdWx0IiwiY3Vyc29yIiwiY29sb3IiLCJtb3JlRXhwQ2xpY2siLCJyZWNvbW1lbmREb2NzIiwiY2xhaW1CdXR0b25DbGljayIsImJpbmQiLCJ2aWV3QWxsRG9jQ2xpY2siLCJuZWFyYnlEb2N0b3JzIiwiY291bnQiLCJkb2N0b3JzX3VybCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsaUI7OztBQUNGLCtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMElBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHFCQUFTO0FBREEsU0FBYjtBQUZlO0FBS2xCOzs7OzRDQUVtQjtBQUNoQixnQkFBSUMsTUFBSixFQUFZO0FBQ1JBLHVCQUFPQyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0g7QUFDRCxpQkFBS0MsUUFBTCxDQUFjLEVBQUVILFNBQVMsSUFBWCxFQUFkO0FBQ0g7Ozs0Q0FFbUJJLDJCLEVBQTZCO0FBQzdDLG1CQUFPQSw0QkFBNEJDLE1BQTVCLENBQW1DLFVBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFZQyxDQUFaLEVBQWtCO0FBQ3hERiw0QkFBVUMsS0FBS0UsSUFBZjtBQUNBLG9CQUFJRCxJQUFJSiw0QkFBNEJNLE1BQTVCLEdBQXFDLENBQTdDLEVBQWdESjtBQUNoRCx1QkFBT0EsR0FBUDtBQUNILGFBSk0sRUFJSixFQUpJLENBQVA7QUFLSDs7O3lDQUVnQkssQyxFQUFHO0FBQ2hCQSxjQUFFQyxlQUFGOztBQUVBLGdCQUFJQyxPQUFPO0FBQ1AsNEJBQVksYUFETCxFQUNvQixVQUFVLG9CQUQ5QixFQUNvRCxjQUFjQyxjQUFJQyxT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QTNOO0FBQXZIO0FBREoscUJBREosR0FHYTtBQTVDakI7QUFkSixhQURKO0FBZ0VIOzs7O0VBakwyQkMsZ0JBQU1DLFM7O2tCQXFMdkIxRSxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0xmOzs7Ozs7a0JBRWVBLDJCIiwiZmlsZSI6IjM1LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEluaXRpYWxzUGljdHVyZSBmcm9tICcuLi8uLi8uLi9jb21tb25zL2luaXRpYWxzUGljdHVyZSdcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgUmF0aW5nU3RhcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9ucy9yYXRpbmdzUHJvZmlsZVZpZXcvUmF0aW5nU3RhcnMnO1xuXG5jbGFzcyBEb2N0b3JQcm9maWxlQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzc3JGbGFnOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzc3JGbGFnOiB0cnVlIH0pXG4gICAgfVxuXG4gICAgZ2V0UXVhbGlmaWNhdGlvblN0cihxdWFsaWZpY2F0aW9uU3BlY2lhbGl6YXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHF1YWxpZmljYXRpb25TcGVjaWFsaXphdGlvbi5yZWR1Y2UoKHN0ciwgY3VyciwgaSkgPT4ge1xuICAgICAgICAgICAgc3RyICs9IGAke2N1cnIubmFtZX1gXG4gICAgICAgICAgICBpZiAoaSA8IHF1YWxpZmljYXRpb25TcGVjaWFsaXphdGlvbi5sZW5ndGggLSAxKSBzdHIgKz0gYCwgYDtcbiAgICAgICAgICAgIHJldHVybiBzdHJcbiAgICAgICAgfSwgXCJcIilcbiAgICB9XG5cbiAgICBjbGFpbUJ1dHRvbkNsaWNrKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQ2xhaW1CdXR0b21DbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2xhaW0tYnV0dG9tLWNsaWNrZWQnLCAnc2VsZWN0ZWRJZCc6IHRoaXMucHJvcHMuZGV0YWlscy5pZFxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9kb2N0b3JzaWdudXAnKTtcbiAgICB9XG5cbiAgICBtb3JlRXhwQ2xpY2soKSB7XG4gICAgICAgIGxldCBlbGVtZW50VG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cGVyaWVuY2UnKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgIGxldCBlbGVtZW50SGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cGVyaWVuY2UnKS5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGxldCBzY3JvbGxQb3NpdGlvbiA9IGVsZW1lbnRUb3AgLSBlbGVtZW50SGVpZ2h0O1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgc2Nyb2xsUG9zaXRpb24pO1xuICAgIH1cblxuICAgIG1vcmVRdWFsaWZpY2F0aW9uQ2xpY2soKSB7XG4gICAgICAgIGxldCBlbGVtZW50VG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1YWxpZmljYXRpb24nKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgIGxldCBlbGVtZW50SGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1YWxpZmljYXRpb24nKS5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGxldCBzY3JvbGxQb3NpdGlvbiA9IGVsZW1lbnRUb3AgLSBlbGVtZW50SGVpZ2h0O1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgc2Nyb2xsUG9zaXRpb24pO1xuICAgIH1cblxuICAgIHNlYXJjaFByb2NlZWRPUEQoZG9jX25hbWUgPSBcIlwiLCBob3NwaXRhbF9uYW1lID0gXCJcIiwgaG9zcGl0YWxfaWQgPSBcIlwiKSB7XG5cbiAgICAgICAgbGV0IGRvY3Rvcl9uYW1lID0gZG9jX25hbWUudG9Mb3dlckNhc2UoKVxuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb2N0b3JCdXR0b21DbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnZGlmZmVyZW50LWRvY3Rvci1zZWFyY2hlZCcsICdkb2N0b3JfbmFtZSc6IGRvY3Rvcl9uYW1lXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICAvLyBoYW5kbGUgZG9jdG9yIG5hbWUsIGhvc3BpdGFsIG5hbWVcblxuICAgICAgICBsZXQgc3RhdGUgPSB7XG4gICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYToge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgICAgICAgICAgZG9jdG9yX25hbWUsIGhvc3BpdGFsX25hbWUsIGhvc3BpdGFsX2lkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmV4dEZpbHRlckNyaXRlcmlhOiB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5maWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgICAgICAgICBkb2N0b3JfbmFtZSwgaG9zcGl0YWxfbmFtZSwgaG9zcGl0YWxfaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKGRvY3Rvcl9uYW1lIHx8IGhvc3BpdGFsX25hbWUgfHwgaG9zcGl0YWxfaWQpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkQ3JpdGVyaWFzID0gW11cbiAgICAgICAgICAgIHN0YXRlLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzID0gW11cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvcHMubWVyZ2VPUERTdGF0ZShzdGF0ZSwgdHJ1ZSlcblxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCh7XG4gICAgICAgICAgICBwYXRobmFtZTogJy9vcGQvc2VhcmNocmVzdWx0cycsXG4gICAgICAgICAgICBzdGF0ZTogeyBzZWFyY2hfYmFjazogdHJ1ZSB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyBuYW1lLCBleHBlcmllbmNlX3llYXJzLCBxdWFsaWZpY2F0aW9ucywgdGh1bWJuYWlsLCBleHBlcmllbmNlcywgZ2VuZXJhbF9zcGVjaWFsaXphdGlvbiwgZGlzcGxheV9uYW1lLCBpc19saWNlbnNlX3ZlcmlmaWVkLCByYXRpbmdfZ3JhcGggfSA9IHRoaXMucHJvcHMuZGV0YWlsc1xuICAgICAgICBsZXQgZXhwU3RyID0gXCJcIlxuXG4gICAgICAgIC8vIGxldCBxdWFsaWZpY2F0aW9uU3RyID0gJydcbiAgICAgICAgLy8gaWYgKGdlbmVyYWxfc3BlY2lhbGl6YXRpb24gJiYgZ2VuZXJhbF9zcGVjaWFsaXphdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgLy8gICAgIGlmIChnZW5lcmFsX3NwZWNpYWxpemF0aW9uLmxlbmd0aCA8PSAzKSB7XG4gICAgICAgIC8vICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnZW5lcmFsX3NwZWNpYWxpemF0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHF1YWxpZmljYXRpb25TdHIgKz0gZ2VuZXJhbF9zcGVjaWFsaXphdGlvbltpXS5uYW1lO1xuICAgICAgICAvLyAgICAgICAgICAgICBpZiAoaSA8IGdlbmVyYWxfc3BlY2lhbGl6YXRpb24ubGVuZ3RoIC0gMSkgcXVhbGlmaWNhdGlvblN0ciArPSBgLCBgO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHF1YWxpZmljYXRpb25TdHIgKz0gZ2VuZXJhbF9zcGVjaWFsaXphdGlvbltpXS5uYW1lO1xuICAgICAgICAvLyAgICAgICAgICAgICBpZiAoaSA8IGdlbmVyYWxfc3BlY2lhbGl6YXRpb24ubGVuZ3RoIC0gMSkgcXVhbGlmaWNhdGlvblN0ciArPSBgLCBgO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGlmIChleHBlcmllbmNlcyAmJiBleHBlcmllbmNlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGV4cFN0ciArPSBgRVhQIC0gJHtleHBlcmllbmNlc1swXS5ob3NwaXRhbH1gXG4gICAgICAgICAgICAvLyBleHBlcmllbmNlcy5tYXAoKGV4cCwgaSkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGV4cFN0ciArPSBleHAuaG9zcGl0YWxcbiAgICAgICAgICAgIC8vICAgICBpZiAoaSA8IGV4cGVyaWVuY2VzLmxlbmd0aCAtIDEpIGV4cFN0ciArPSAnLCAnXG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICB9XG4gICAgICAgIGxldCBkb2NfbmFtZSA9IG5hbWUuc3BsaXQoJyAnKVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1oZWFkZXIgZHItcXVjaWstaW5mbyBkb2MtZ29sZC1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbHRyLWNyZC1pbWcgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPEluaXRpYWxzUGljdHVyZSBuYW1lPXtuYW1lfSBoYXNfaW1hZ2U9eyEhdGh1bWJuYWlsfSBjbGFzc05hbWU9XCJpbml0aWFsc1BpY3R1cmUtZHBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0aHVtYm5haWx9IGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWctcm91bmRcIiBhbHQ9e2Ake2Rpc3BsYXlfbmFtZX0sICR7dGhpcy5nZXRRdWFsaWZpY2F0aW9uU3RyKGdlbmVyYWxfc3BlY2lhbGl6YXRpb24gfHwgJycpfWB9IHRpdGxlPXtkaXNwbGF5X25hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvSW5pdGlhbHNQaWN0dXJlPlxuICAgICAgICAgICAgICAgICAgICB7aXNfbGljZW5zZV92ZXJpZmllZCA/IDxzcGFuIGNsYXNzTmFtZT1cImZsdHItcnRuZ1wiPlZlcmlmaWVkPC9zcGFuPiA6ICcnfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICByYXRpbmdfZ3JhcGggJiYgcmF0aW5nX2dyYXBoLmF2Z19yYXRpbmcgJiYgcmF0aW5nX2dyYXBoLmF2Z19yYXRpbmcgPj0gNCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhdGluZ1N0YXJzIGF2ZXJhZ2VfcmF0aW5nPXtyYXRpbmdfZ3JhcGguYXZnX3JhdGluZ30gcmF0aW5nX2NvdW50PXtyYXRpbmdfZ3JhcGgucmF0aW5nX2NvdW50IHx8ICcnfSB3aWR0aD1cIjEwcHhcIiBoZWlnaHQ9XCIxMHB4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHJhdGluZ19ncmFwaCAmJiByYXRpbmdfZ3JhcGguYXZnX3JhdGluZyAmJiByYXRpbmdfZ3JhcGgucmF0aW5nX2NvdW50ID49IDUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmF0aW5nU3RhcnMgYXZlcmFnZV9yYXRpbmc9e3JhdGluZ19ncmFwaC5hdmdfcmF0aW5nfSByYXRpbmdfY291bnQ9e3JhdGluZ19ncmFwaC5yYXRpbmdfY291bnR9IHdpZHRoPVwiMTBweFwiIGhlaWdodD1cIjEwcHhcIiAvPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHItcHJvZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZHItbmFtZVwiPntkaXNwbGF5X25hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgey8qXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlzU2VvRnJpZW5kbHkgJiYgIXRoaXMucHJvcHMuaXNPcmdhbmljP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpZmYtc3VnZ2VzdGlvblwiPkxvb2tpbmcgZm9yIGEgZGlmZmVyZW50IDxzcGFuIG9uQ2xpY2s9e3RoaXMuc2VhcmNoUHJvY2VlZE9QRC5iaW5kKHRoaXMsIGRvY19uYW1lWzBdLCAnJywgJycpfT5Eci4ge2RvY19uYW1lWzBdfT88L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmFsX3NwZWNpYWxpemF0aW9uICYmIGdlbmVyYWxfc3BlY2lhbGl6YXRpb24ubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmFsX3NwZWNpYWxpemF0aW9uLm1hcCgoc3BlY2lhbGl0eSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwZWNpYWxpdHkudXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGEgY2xhc3NOYW1lPVwiaW5saW5lLXNwZWNpYWxpdHlcIiBrZXk9e2luZGV4fSBocmVmPXtzcGVjaWFsaXR5LnVybH0gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3NwZWNpYWxpdHkudXJsfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZGVzZ1wiPntgJHtpbmRleCA9PSBnZW5lcmFsX3NwZWNpYWxpemF0aW9uLmxlbmd0aCAtIDEgPyBgJHtzcGVjaWFsaXR5Lm5hbWV9YCA6IGAke3NwZWNpYWxpdHkubmFtZX0sYH1gfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGgyIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImRlc2cgaW5saW5lLXNwZWNpYWxpdHlcIj57YCR7aW5kZXggPT0gZ2VuZXJhbF9zcGVjaWFsaXphdGlvbi5sZW5ndGggLSAxID8gYCR7c3BlY2lhbGl0eS5uYW1lfWAgOiBgJHtzcGVjaWFsaXR5Lm5hbWV9LGB9YH08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHsvKiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmFsX3NwZWNpYWxpemF0aW9uICYmIGdlbmVyYWxfc3BlY2lhbGl6YXRpb24ubGVuZ3RoID4gMyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImRlc2dcIj57cXVhbGlmaWNhdGlvblN0cn0gJiA8c3BhbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgY29sb3I6ICcjZjc4NjMxJyB9fSBvbkNsaWNrPXsoKSA9PiB0aGlzLm1vcmVRdWFsaWZpY2F0aW9uQ2xpY2soKX0+e2dlbmVyYWxfc3BlY2lhbGl6YXRpb24ubGVuZ3RoIC0gM30gbW9yZTwvc3Bhbj48L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZGVzZ1wiPntxdWFsaWZpY2F0aW9uU3RyfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIH0gKi99XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVyaWVuY2VfeWVhcnMgPyA8aDIgY2xhc3NOYW1lPVwiYWRkLWRldGFpbHNcIj57ZXhwZXJpZW5jZV95ZWFyc30gWWVhcnMgb2YgRXhwZXJpZW5jZTwvaDI+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVyaWVuY2VzICYmIGV4cGVyaWVuY2VzLmxlbmd0aCA+IDEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJhZGQtZGV0YWlsc1wiPntleHBTdHJ9ICYgPHNwYW4gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiBgdmFyKC0tdGV4dC0tcHJpbWFyeS0tY29sb3IpYCB9fSBvbkNsaWNrPXsoKSA9PiB0aGlzLm1vcmVFeHBDbGljaygpfT57ZXhwZXJpZW5jZXMubGVuZ3RoIC0gMX0gbW9yZTwvc3Bhbj48L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZXhwZXJpZW5jZXMgPyA8aDIgY2xhc3NOYW1lPVwiYWRkLWRldGFpbHNcIj57ZXhwU3RyfTwvaDI+IDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlY29tbWVuZERvY3MgPyA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2xhaW1CdXR0b25DbGljay5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJmbHRyLWJrbmctYnRuIGNsYWltLWJ0biBtcnQtMTBcIj5DbGFpbSB0aGlzIHByb2ZpbGU8L2J1dHRvbj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWNvbW1lbmREb2NzICYmIHRoaXMuc3RhdGUuc3NyRmxhZyA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdEF2bGRvY0J0bkNvbnRhaW5lciBtcnQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJub3RBdmxEb2NcIj48c3BhbiBjbGFzc05hbWU9XCJmdy03MDBcIj5Ob3QgQm9va2FibGU8L3NwYW4+OiBTZWUgYm9va2FibGUgZG9jdG9ycyB3aXRoIGdyZWF0IGRpc2NvdW50cyBiZWxvdyA8YSBvbkNsaWNrPXt0aGlzLnByb3BzLnZpZXdBbGxEb2NDbGljay5iaW5kKHRoaXMsIHRoaXMucHJvcHMubmVhcmJ5RG9jdG9ycyl9IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmdy02MDAgZC1pbmxpbmUtYmxvY2tcIj4ge3RoaXMucHJvcHMubmVhcmJ5RG9jdG9ycy5jb3VudCA+PSAxICYmIHRoaXMucHJvcHMubmVhcmJ5RG9jdG9ycy5kb2N0b3JzX3VybCA/ICcoVmlldyBBbGwpJyA6ICcnfTwvYT48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgRG9jdG9yUHJvZmlsZUNhcmRcbiIsImltcG9ydCBEb2N0b3JQcm9maWxlQ2FyZCBmcm9tICcuL0RvY3RvclByb2ZpbGVDYXJkJ1xuXG5leHBvcnQgZGVmYXVsdCBEb2N0b3JQcm9maWxlQ2FyZCJdLCJzb3VyY2VSb290IjoiIn0=