exports.ids = [41];
exports.modules = {

/***/ "./dev/js/components/commons/ratingsProfileView/RatingsPopUp.js":
/*!**********************************************************************!*\
  !*** ./dev/js/components/commons/ratingsProfileView/RatingsPopUp.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _ReviewPopUp = __webpack_require__(/*! ./ReviewPopUp */ "./dev/js/components/commons/ratingsProfileView/ReviewPopUp.js");

var _ReviewPopUp2 = _interopRequireDefault(_ReviewPopUp);

var _ThankYouPopUp = __webpack_require__(/*! ./ThankYouPopUp */ "./dev/js/components/commons/ratingsProfileView/ThankYouPopUp.js");

var _ThankYouPopUp2 = _interopRequireDefault(_ThankYouPopUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import StarView from './StarView.js'


class RatingsPopUp extends _react2.default.Component {
    constructor(props) {
        super(props);

        this.getAppointmentType = () => {
            let type = this.state.data.type && this.state.data.type == "lab" ? 1 : 2;
            return type;
        };

        this.thanYouButton = () => {
            this.setState({ rating_done: false });
            if (typeof this.props.unverified != 'undefined' && this.props.unverified) {
                this.props.popUpState();
            }
        };

        this.submitRating = (post_data, flag) => {
            if (flag) {
                this.setState({ data: null });
            } else {
                this.props.updateAppointmentRating(post_data, (err, data) => {
                    if (!err && data) {
                        this.setState({ appointmentData: this.state.data, data: null, rating_done: true });
                    }
                });
            }
        };

        this.state = {
            data: null,
            selectedRating: 0,
            rating_id: null,
            compliments: [],
            rating_done: false,
            appointmentData: null
        };
    }

    componentDidMount() {
        if (_storage2.default.checkAuth()) {
            if (typeof this.props.unverified == 'undefined' && !this.props.unverified) {
                this.props.getUnratedAppointment((err, data) => {
                    if (!err && data) {
                        this.setState({ data });
                    }
                });
            } else {
                let data_obbj = this.props.unverifiedData;
                this.setState({ data: data_obbj });
            }
            this.props.getRatingCompliments((err, compliments) => {
                if (!err && compliments) {
                    this.setState({ compliments });
                }
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.token != this.props.token) {
            if (_storage2.default.checkAuth()) {
                if (typeof this.props.unverified == 'undefined' && !this.props.unverified) {
                    this.props.getUnratedAppointment((err, data) => {
                        if (!err && data) {
                            this.setState({ data });
                        }
                    });
                } else {
                    let data_obbj = this.props.unverifiedData;
                    this.setState({ data: data_obbj });
                }
                this.props.getRatingCompliments((err, compliments) => {
                    if (!err && compliments) {
                        this.setState({ compliments });
                    }
                });
            }
        }
    }

    selectRating(x, size) {
        this.setState({ selectedRating: x });
        if (!size) {
            let type = this.getAppointmentType();
            if (typeof this.props.unverified == 'undefined' && !this.props.unverified) {
                var post_data = { 'rating': x, 'appointment_id': this.state.data.id, 'appointment_type': type };
            } else {
                var post_data = { 'rating': x, 'entity_id': this.state.data.id, 'appointment_type': type, 'related_entity_id': this.props.selectedHospital.hospital_id };
            }
            this.props.createAppointmentRating(post_data, (err, data) => {
                if (!err && data) {
                    this.setState({ rating_id: data.id });
                }
            });
        }
    }

    declineRating(type, id, size) {
        if (typeof this.props.unverified == 'undefined' && !this.props.unverified) {
            let post_data = { 'appointment_id': id, 'appointment_type': type };
            this.props.closeAppointmentRating(post_data, (err, data) => {
                if (!err && data) {
                    console.log('Popup Closed');
                }
            });
        } else {
            this.setState({ data: null });
            this.props.popUpState();
        }
        this.setState({ data: null });
    }

    render() {
        if (this.state.rating_done && (this.state.data == null || this.state.data && this.state.data.length == 0)) {
            return _react2.default.createElement(_ThankYouPopUp2.default, _extends({}, this.props, { submit: this.thanYouButton, selectedRating: this.state.selectedRating, appointmentData: this.state.appointmentData }));
        }
        if (typeof this.state.data != "undefined" && this.state.data != null && this.state.data.id) {
            let qualification_object = this.state.data.doctor ? this.state.data.doctor.qualifications : null;
            let pipe = '';
            let data_obj = {
                'name': this.state.data && this.state.data.doctor ? this.state.data.doctor.name : this.state.data && this.state.data.lab ? this.state.data.lab.name : '',
                'qualification': qualification_object && qualification_object.length ? qualification_object[0].qualification : '',
                'specialization': qualification_object && qualification_object.length ? qualification_object[0].specialization : '',
                'type': this.getAppointmentType(),
                'thumbnail': this.state.data.doctor ? this.state.data.doctor_thumbnail : this.state.data.lab_thumbnail,
                'pipe': pipe
            };
            if (data_obj.type !== 1) {
                data_obj.pipe = ' | ';
            }

            if (this.state.rating_id) {

                return _react2.default.createElement(_ReviewPopUp2.default, _extends({}, this.props, { details: this.state.data, submit: this.submitRating, obj: data_obj, rating_id: this.state.rating_id, selected_rating: this.state.selectedRating, compliments: this.state.compliments }));
            } else {
                return _react2.default.createElement(
                    'div',
                    { className: 'raiting-popup' },
                    _react2.default.createElement(
                        'div',
                        { className: 'home-rating-card' },
                        _react2.default.createElement(
                            'div',
                            { className: 'rate-card-header' },
                            'Rate your Experience',
                            _react2.default.createElement(
                                'span',
                                null,
                                _react2.default.createElement('img', { onClick: this.declineRating.bind(this, data_obj.type, this.state.data.id), src: "/assets" + "/img/customer-icons/rt-close.svg", className: 'img-fluid' })
                            )
                        ),
                        typeof this.props.selectedHospital != 'undefined' && this.props.selectedHospital.id ? _react2.default.createElement(
                            'div',
                            { className: 'rate-seceltion-cont' },
                            _react2.default.createElement(
                                'p',
                                { className: 'rt-par-select' },
                                this.props.selectedHospital.hospital_name
                            )
                        ) : "",
                        _react2.default.createElement(
                            'div',
                            { className: 'rate-card-doc-dtls' },
                            this.state.data.type && this.state.data.type == "lab" ? _react2.default.createElement('img', { src: data_obj.thumbnail, className: 'img-fluid img-round ', style: { width: 60, height: 40 } }) : _react2.default.createElement('img', { src: data_obj.thumbnail, className: 'img-fluid img-round ', style: { width: 40, height: 40 } }),
                            _react2.default.createElement(
                                'div',
                                { className: 'rate-doc-dtl' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'rt-doc-nm' },
                                    data_obj.name
                                ),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    data_obj.qualification,
                                    ' ',
                                    data_obj.pipe,
                                    ' ',
                                    data_obj.specialization
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'rate-star-icon' },
                            [1, 2, 3, 4, 5].map((x, i) => {
                                return _react2.default.createElement('img', { key: i, onClick: this.selectRating.bind(this, x, 0), className: 'img-fluid', src: "/assets/img/customer-icons/" + (this.state.selectedRating > 0 && this.state.selectedRating >= x ? "" : "un") + "selected-star.svg" });
                            })
                        )
                    )
                );
            }
        }
        return "";
    }
}

exports.default = RatingsPopUp;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9SYXRpbmdzUG9wVXAuanMiXSwibmFtZXMiOlsiUmF0aW5nc1BvcFVwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiZ2V0QXBwb2ludG1lbnRUeXBlIiwidHlwZSIsInN0YXRlIiwiZGF0YSIsInRoYW5Zb3VCdXR0b24iLCJzZXRTdGF0ZSIsInJhdGluZ19kb25lIiwidW52ZXJpZmllZCIsInBvcFVwU3RhdGUiLCJzdWJtaXRSYXRpbmciLCJwb3N0X2RhdGEiLCJmbGFnIiwidXBkYXRlQXBwb2ludG1lbnRSYXRpbmciLCJlcnIiLCJhcHBvaW50bWVudERhdGEiLCJzZWxlY3RlZFJhdGluZyIsInJhdGluZ19pZCIsImNvbXBsaW1lbnRzIiwiY29tcG9uZW50RGlkTW91bnQiLCJTVE9SQUdFIiwiY2hlY2tBdXRoIiwiZ2V0VW5yYXRlZEFwcG9pbnRtZW50IiwiZGF0YV9vYmJqIiwidW52ZXJpZmllZERhdGEiLCJnZXRSYXRpbmdDb21wbGltZW50cyIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJ0b2tlbiIsInNlbGVjdFJhdGluZyIsIngiLCJzaXplIiwiaWQiLCJzZWxlY3RlZEhvc3BpdGFsIiwiaG9zcGl0YWxfaWQiLCJjcmVhdGVBcHBvaW50bWVudFJhdGluZyIsImRlY2xpbmVSYXRpbmciLCJjbG9zZUFwcG9pbnRtZW50UmF0aW5nIiwiY29uc29sZSIsImxvZyIsInJlbmRlciIsImxlbmd0aCIsInF1YWxpZmljYXRpb25fb2JqZWN0IiwiZG9jdG9yIiwicXVhbGlmaWNhdGlvbnMiLCJwaXBlIiwiZGF0YV9vYmoiLCJuYW1lIiwibGFiIiwicXVhbGlmaWNhdGlvbiIsInNwZWNpYWxpemF0aW9uIiwiZG9jdG9yX3RodW1ibmFpbCIsImxhYl90aHVtYm5haWwiLCJiaW5kIiwiQVNTRVRTX0JB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USw2QkFBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQlMsR0FBaEIsQ0FBb0IsQ0FBQzdCLENBQUQsRUFBSThCLENBQUosS0FBVTtBQUMxQix1Q0FBTyx1Q0FBSyxLQUFLQSxDQUFWLEVBQWEsU0FBUyxLQUFLL0IsWUFBTCxDQUFrQndCLElBQWxCLENBQXVCLElBQXZCLEVBQTZCdkIsQ0FBN0IsRUFBZ0MsQ0FBaEMsQ0FBdEIsRUFBMEQsV0FBVSxXQUFwRSxFQUFnRixLQUFLLGlDQUFpQyxLQUFLM0IsS0FBTCxDQUFXYSxjQUFYLEdBQTRCLENBQTVCLElBQWlDLEtBQUtiLEtBQUwsQ0FBV2EsY0FBWCxJQUE2QmMsQ0FBOUQsR0FBa0UsRUFBbEUsR0FBdUUsSUFBeEcsSUFBZ0gsbUJBQXJNLEdBQVA7QUFDSCw2QkFGRDtBQUZSO0FBeEJKO0FBREosaUJBREo7QUFvQ0g7QUFDSjtBQUNELGVBQVEsRUFBUjtBQUNIO0FBbkxzQzs7a0JBc0w1QmxDLFkiLCJmaWxlIjoiNDEuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuaW1wb3J0IFJldmlld1BvcFVwIGZyb20gJy4vUmV2aWV3UG9wVXAnXG5pbXBvcnQgVGhhbmtZb3VQb3BVcCBmcm9tICcuL1RoYW5rWW91UG9wVXAnXG4vLyBpbXBvcnQgU3RhclZpZXcgZnJvbSAnLi9TdGFyVmlldy5qcydcblxuXG5jbGFzcyBSYXRpbmdzUG9wVXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgICAgICBzZWxlY3RlZFJhdGluZzogMCxcbiAgICAgICAgICAgIHJhdGluZ19pZDogbnVsbCxcbiAgICAgICAgICAgIGNvbXBsaW1lbnRzOiBbXSxcbiAgICAgICAgICAgIHJhdGluZ19kb25lOiBmYWxzZSxcbiAgICAgICAgICAgIGFwcG9pbnRtZW50RGF0YTogbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QXBwb2ludG1lbnRUeXBlID0gKCkgPT4ge1xuICAgICAgICBsZXQgdHlwZSA9IHRoaXMuc3RhdGUuZGF0YS50eXBlICYmIHRoaXMuc3RhdGUuZGF0YS50eXBlID09IFwibGFiXCIgPyAxIDogMjtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmIChTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnByb3BzLnVudmVyaWZpZWQpID09ICd1bmRlZmluZWQnICYmICF0aGlzLnByb3BzLnVudmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldFVucmF0ZWRBcHBvaW50bWVudCgoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXJyICYmIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGFfb2JiaiA9IHRoaXMucHJvcHMudW52ZXJpZmllZERhdGFcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YV9vYmJqIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldFJhdGluZ0NvbXBsaW1lbnRzKChlcnIsIGNvbXBsaW1lbnRzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnIgJiYgY29tcGxpbWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXBsaW1lbnRzIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMudG9rZW4gIT0gdGhpcy5wcm9wcy50b2tlbikge1xuICAgICAgICAgICAgaWYgKFNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnByb3BzLnVudmVyaWZpZWQpID09ICd1bmRlZmluZWQnICYmICF0aGlzLnByb3BzLnVudmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRVbnJhdGVkQXBwb2ludG1lbnQoKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlcnIgJiYgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YV9vYmJqID0gdGhpcy5wcm9wcy51bnZlcmlmaWVkRGF0YVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YV9vYmJqIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0UmF0aW5nQ29tcGxpbWVudHMoKGVyciwgY29tcGxpbWVudHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlcnIgJiYgY29tcGxpbWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21wbGltZW50cyB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdFJhdGluZyh4LCBzaXplKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFJhdGluZzogeCB9KVxuICAgICAgICBpZiAoIXNpemUpIHtcbiAgICAgICAgICAgIGxldCB0eXBlID0gdGhpcy5nZXRBcHBvaW50bWVudFR5cGUoKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucHJvcHMudW52ZXJpZmllZCkgPT0gJ3VuZGVmaW5lZCcgJiYgIXRoaXMucHJvcHMudW52ZXJpZmllZCkge1xuICAgICAgICAgICAgICAgIHZhciBwb3N0X2RhdGEgPSB7ICdyYXRpbmcnOiB4LCAnYXBwb2ludG1lbnRfaWQnOiB0aGlzLnN0YXRlLmRhdGEuaWQsICdhcHBvaW50bWVudF90eXBlJzogdHlwZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHBvc3RfZGF0YSA9IHsgJ3JhdGluZyc6IHgsICdlbnRpdHlfaWQnOiB0aGlzLnN0YXRlLmRhdGEuaWQsICdhcHBvaW50bWVudF90eXBlJzogdHlwZSwgJ3JlbGF0ZWRfZW50aXR5X2lkJzogdGhpcy5wcm9wcy5zZWxlY3RlZEhvc3BpdGFsLmhvc3BpdGFsX2lkIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNyZWF0ZUFwcG9pbnRtZW50UmF0aW5nKHBvc3RfZGF0YSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXJyICYmIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJhdGluZ19pZDogZGF0YS5pZCB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWNsaW5lUmF0aW5nKHR5cGUsIGlkLCBzaXplKSB7XG4gICAgICAgIGlmICh0eXBlb2YgKHRoaXMucHJvcHMudW52ZXJpZmllZCkgPT0gJ3VuZGVmaW5lZCcgJiYgIXRoaXMucHJvcHMudW52ZXJpZmllZCkge1xuICAgICAgICAgICAgbGV0IHBvc3RfZGF0YSA9IHsgJ2FwcG9pbnRtZW50X2lkJzogaWQsICdhcHBvaW50bWVudF90eXBlJzogdHlwZSB9O1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jbG9zZUFwcG9pbnRtZW50UmF0aW5nKHBvc3RfZGF0YSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXJyICYmIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BvcHVwIENsb3NlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBudWxsIH0pXG4gICAgICAgICAgICB0aGlzLnByb3BzLnBvcFVwU3RhdGUoKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBudWxsIH0pXG4gICAgfVxuXG4gICAgdGhhbllvdUJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJhdGluZ19kb25lOiBmYWxzZSB9KVxuICAgICAgICBpZiAodHlwZW9mICh0aGlzLnByb3BzLnVudmVyaWZpZWQpICE9ICd1bmRlZmluZWQnICYmIHRoaXMucHJvcHMudW52ZXJpZmllZCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5wb3BVcFN0YXRlKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1Ym1pdFJhdGluZyA9IChwb3N0X2RhdGEsIGZsYWcpID0+IHtcbiAgICAgICAgaWYgKGZsYWcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBudWxsIH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZUFwcG9pbnRtZW50UmF0aW5nKHBvc3RfZGF0YSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXJyICYmIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFwcG9pbnRtZW50RGF0YTogdGhpcy5zdGF0ZS5kYXRhLCBkYXRhOiBudWxsLCByYXRpbmdfZG9uZTogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnJhdGluZ19kb25lICYmICgodGhpcy5zdGF0ZS5kYXRhID09IG51bGwpIHx8ICh0aGlzLnN0YXRlLmRhdGEgJiYgdGhpcy5zdGF0ZS5kYXRhLmxlbmd0aCA9PSAwKSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoPFRoYW5rWW91UG9wVXAgey4uLnRoaXMucHJvcHN9IHN1Ym1pdD17dGhpcy50aGFuWW91QnV0dG9ufSBzZWxlY3RlZFJhdGluZz17dGhpcy5zdGF0ZS5zZWxlY3RlZFJhdGluZ30gYXBwb2ludG1lbnREYXRhPXt0aGlzLnN0YXRlLmFwcG9pbnRtZW50RGF0YX0gLz4pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5zdGF0ZS5kYXRhKSAhPSBcInVuZGVmaW5lZFwiICYmIHRoaXMuc3RhdGUuZGF0YSAhPSBudWxsICYmIHRoaXMuc3RhdGUuZGF0YS5pZCkge1xuICAgICAgICAgICAgbGV0IHF1YWxpZmljYXRpb25fb2JqZWN0ID0gdGhpcy5zdGF0ZS5kYXRhLmRvY3RvciA/IHRoaXMuc3RhdGUuZGF0YS5kb2N0b3IucXVhbGlmaWNhdGlvbnMgOiBudWxsO1xuICAgICAgICAgICAgbGV0IHBpcGUgPSAnJ1xuICAgICAgICAgICAgbGV0IGRhdGFfb2JqID0ge1xuICAgICAgICAgICAgICAgICduYW1lJzogdGhpcy5zdGF0ZS5kYXRhICYmIHRoaXMuc3RhdGUuZGF0YS5kb2N0b3IgPyB0aGlzLnN0YXRlLmRhdGEuZG9jdG9yLm5hbWUgOiB0aGlzLnN0YXRlLmRhdGEgJiYgdGhpcy5zdGF0ZS5kYXRhLmxhYiA/dGhpcy5zdGF0ZS5kYXRhLmxhYi5uYW1lOicnLFxuICAgICAgICAgICAgICAgICdxdWFsaWZpY2F0aW9uJzogcXVhbGlmaWNhdGlvbl9vYmplY3QgJiYgcXVhbGlmaWNhdGlvbl9vYmplY3QubGVuZ3RoID8gcXVhbGlmaWNhdGlvbl9vYmplY3RbMF0ucXVhbGlmaWNhdGlvbiA6ICcnLFxuICAgICAgICAgICAgICAgICdzcGVjaWFsaXphdGlvbic6IHF1YWxpZmljYXRpb25fb2JqZWN0ICYmIHF1YWxpZmljYXRpb25fb2JqZWN0Lmxlbmd0aCA/IHF1YWxpZmljYXRpb25fb2JqZWN0WzBdLnNwZWNpYWxpemF0aW9uIDogJycsXG4gICAgICAgICAgICAgICAgJ3R5cGUnOiB0aGlzLmdldEFwcG9pbnRtZW50VHlwZSgpLFxuICAgICAgICAgICAgICAgICd0aHVtYm5haWwnOiB0aGlzLnN0YXRlLmRhdGEuZG9jdG9yID8gdGhpcy5zdGF0ZS5kYXRhLmRvY3Rvcl90aHVtYm5haWwgOiB0aGlzLnN0YXRlLmRhdGEubGFiX3RodW1ibmFpbCxcbiAgICAgICAgICAgICAgICAncGlwZSc6IHBpcGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhX29iai50eXBlICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgZGF0YV9vYmoucGlwZSA9ICcgfCAnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5yYXRpbmdfaWQpIHtcblxuICAgICAgICAgICAgICAgIHJldHVybiAoPFJldmlld1BvcFVwIHsuLi50aGlzLnByb3BzfSBkZXRhaWxzPXt0aGlzLnN0YXRlLmRhdGF9IHN1Ym1pdD17dGhpcy5zdWJtaXRSYXRpbmd9IG9iaj17ZGF0YV9vYmp9IHJhdGluZ19pZD17dGhpcy5zdGF0ZS5yYXRpbmdfaWR9IHNlbGVjdGVkX3JhdGluZz17dGhpcy5zdGF0ZS5zZWxlY3RlZFJhdGluZ30gY29tcGxpbWVudHM9e3RoaXMuc3RhdGUuY29tcGxpbWVudHN9IC8+KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWl0aW5nLXBvcHVwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtcmF0aW5nLWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGUtY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmF0ZSB5b3VyIEV4cGVyaWVuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxpbWcgb25DbGljaz17dGhpcy5kZWNsaW5lUmF0aW5nLmJpbmQodGhpcywgZGF0YV9vYmoudHlwZSwgdGhpcy5zdGF0ZS5kYXRhLmlkKX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcnQtY2xvc2Uuc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mICh0aGlzLnByb3BzLnNlbGVjdGVkSG9zcGl0YWwpICE9ICd1bmRlZmluZWQnICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRIb3NwaXRhbC5pZCA/XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0ZS1zZWNlbHRpb24tY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJ0LXBhci1zZWxlY3RcIj57dGhpcy5wcm9wcy5zZWxlY3RlZEhvc3BpdGFsLmhvc3BpdGFsX25hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0ZS1jYXJkLWRvYy1kdGxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YS50eXBlICYmIHRoaXMuc3RhdGUuZGF0YS50eXBlID09IFwibGFiXCIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhX29iai50aHVtYm5haWx9IGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWctcm91bmQgXCIgc3R5bGU9e3sgd2lkdGg6IDYwLCBoZWlnaHQ6IDQwIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8aW1nIHNyYz17ZGF0YV9vYmoudGh1bWJuYWlsfSBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nLXJvdW5kIFwiIHN0eWxlPXt7IHdpZHRoOiA0MCwgaGVpZ2h0OiA0MCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0ZS1kb2MtZHRsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJydC1kb2Mtbm1cIj57ZGF0YV9vYmoubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZGF0YV9vYmoucXVhbGlmaWNhdGlvbn0ge2RhdGFfb2JqLnBpcGV9IHtkYXRhX29iai5zcGVjaWFsaXphdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0ZS1zdGFyLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWzEsIDIsIDMsIDQsIDVdLm1hcCgoeCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8aW1nIGtleT17aX0gb25DbGljaz17dGhpcy5zZWxlY3RSYXRpbmcuYmluZCh0aGlzLCB4LCAwKX0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtcIi9hc3NldHMvaW1nL2N1c3RvbWVyLWljb25zL1wiICsgKHRoaXMuc3RhdGUuc2VsZWN0ZWRSYXRpbmcgPiAwICYmIHRoaXMuc3RhdGUuc2VsZWN0ZWRSYXRpbmcgPj0geCA/IFwiXCIgOiBcInVuXCIpICsgXCJzZWxlY3RlZC1zdGFyLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcIlwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhdGluZ3NQb3BVcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=