(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[146],{

/***/ "./dev/js/containers/opd/SeoBooking.js":
/*!*********************************************!*\
  !*** ./dev/js/containers/opd/SeoBooking.js ***!
  \*********************************************/
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

var _config = __webpack_require__(/*! ../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _AppointmentSlot = __webpack_require__(/*! ../../containers/opd/AppointmentSlot */ "./dev/js/containers/opd/AppointmentSlot.js");

var _AppointmentSlot2 = _interopRequireDefault(_AppointmentSlot);

var _PatientDetails = __webpack_require__(/*! ../../containers/opd/PatientDetails */ "./dev/js/containers/opd/PatientDetails.js");

var _PatientDetails2 = _interopRequireDefault(_PatientDetails);

var _HelmetTags = __webpack_require__(/*! ../../components/commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var SeoBooking = function (_React$Component) {
    _inherits(SeoBooking, _React$Component);

    function SeoBooking(props) {
        _classCallCheck(this, SeoBooking);

        var _this = _possibleConstructorReturn(this, (SeoBooking.__proto__ || Object.getPrototypeOf(SeoBooking)).call(this, props));

        var parsed = queryString.parse(_this.props.location.search);

        var doctor_id = _this.props.match.params.id || parsed.doctor_id || _this.get_doctor_id_by_url(_this.props.match.url);
        var hospital_id = _this.props.match.params.clinicId || parsed.hospital_id || "";

        _this.state = {
            selectedDoctor: doctor_id,
            selectedClinic: hospital_id,
            action_page: parsed.action_page,
            seoFriendly: _this.props.match.url.includes('-dpp')
        };

        return _this;
    }

    _createClass(SeoBooking, [{
        key: 'get_doctor_id_by_url',
        value: function get_doctor_id_by_url(url) {
            for (var d_id in this.props.DOCTORS) {
                if (this.props.DOCTORS[d_id].url && url.includes(this.props.DOCTORS[d_id].url)) {
                    return d_id;
                }
            }
            return null;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            var parsed = queryString.parse(props.location.search);

            if (this.state.action_page != parsed.action_page) {
                this.setState({ action_page: parsed.action_page });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (!this.state.selectedDoctor && this.state.seoFriendly) {
                var url = this.props.match.url;
                if (url) {
                    url = url.split("/")[1];
                }
                this.props.getDoctorByUrl(url, this.state.selectedClinic, [], [], function (doctor_id) {
                    if (doctor_id) {
                        _this2.setState({ selectedDoctor: doctor_id });
                    }
                });
            }
        }
    }, {
        key: 'getMetaTagsData',
        value: function getMetaTagsData(seoData) {
            var title = "";
            var description = "";
            var schema = {};
            if (seoData) {
                title = seoData.title || "";
                description = seoData.description || "";
                schema = seoData.schema;
            }
            return { title: title, description: description, schema: schema };
        }
    }, {
        key: 'render',
        value: function render() {

            var seo_url = "";

            if (this.props.DOCTORS[this.state.selectedDoctor]) {
                seo_url = this.props.DOCTORS[this.state.selectedDoctor].url || "";
                if (seo_url) {
                    seo_url = "/" + seo_url;
                }
            }

            return _react2.default.createElement(
                'div',
                null,
                this.props.DOCTORS && this.props.DOCTORS[this.state.selectedDoctor] ? _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                        title: this.getMetaTagsData(this.props.DOCTORS[this.state.selectedDoctor].seo).title,
                        description: this.getMetaTagsData(this.props.DOCTORS[this.state.selectedDoctor].seo).description,
                        canonicalUrl: '' + _config2.default.API_BASE_URL + (seo_url || this.props.match.url),
                        schema: this.getMetaTagsData(this.props.DOCTORS[this.state.selectedDoctor].seo).schema
                    }, noIndex:  false && false }) : "",
                this.state.action_page == 'timings' ? _react2.default.createElement(_AppointmentSlot2.default, _extends({}, this.props, { selectedDoctor: this.state.selectedDoctor, selectedClinic: this.state.selectedClinic })) : _react2.default.createElement(_PatientDetails2.default, _extends({}, this.props, { selectedDoctor: this.state.selectedDoctor, selectedClinic: this.state.selectedClinic }))
            );
        }
    }], [{
        key: 'loadData',
        value: function loadData(store, match, queryData) {
            var doctor_id_from_url = match.params.id || queryData.doctor_id;
            var hospital_id_from_url = match.params.clinicId || queryData.hospital_id || "";

            if (doctor_id_from_url) {
                return store.dispatch((0, _index.getDoctorById)(doctor_id_from_url, hospital_id_from_url, queryData.procedure_ids || [], queryData.category_ids || []));
            } else {
                var url = match.url;
                if (url) {
                    url = url.split("/")[1];
                }
                return new Promise(function (resolve, reject) {
                    store.dispatch((0, _index.getDoctorByUrl)(url, hospital_id_from_url, queryData.procedure_ids || [], queryData.category_ids || [], function (doctor_id, url) {
                        if (doctor_id) {
                            resolve({ doctor_id: doctor_id });
                        } else {
                            reject({
                                url: url
                            });
                        }
                    }));
                });
            }
        }
    }]);

    return SeoBooking;
}(_react2.default.Component);

SeoBooking.contextTypes = {
    router: function router() {
        return null;
    }
};


var mapStateToProps = function mapStateToProps(state, passedProps) {
    /**
     * initialServerData is server rendered async data required build html on server. 
     */
    var initialServerData = null;
    var staticContext = passedProps.staticContext;

    if (staticContext && staticContext.data) {
        initialServerData = staticContext.data;
    }

    var DOCTORS = state.DOCTOR_PROFILES;

    return {
        DOCTORS: DOCTORS, initialServerData: initialServerData
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        getDoctorById: function getDoctorById(doctorId, clinicId, procedure_ids, category_ids) {
            return dispatch((0, _index.getDoctorById)(doctorId, clinicId, procedure_ids, category_ids));
        },
        getDoctorByUrl: function getDoctorByUrl(doctr_url, hospitalId, procedure_ids, category_ids, cb) {
            return dispatch((0, _index.getDoctorByUrl)(doctr_url, hospitalId, procedure_ids, category_ids, cb));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SeoBooking);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9vcGQvU2VvQm9va2luZy5qcyJdLCJuYW1lcyI6WyJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJTZW9Cb29raW5nIiwicHJvcHMiLCJwYXJzZWQiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwiZG9jdG9yX2lkIiwibWF0Y2giLCJwYXJhbXMiLCJpZCIsImdldF9kb2N0b3JfaWRfYnlfdXJsIiwidXJsIiwiaG9zcGl0YWxfaWQiLCJjbGluaWNJZCIsInN0YXRlIiwic2VsZWN0ZWREb2N0b3IiLCJzZWxlY3RlZENsaW5pYyIsImFjdGlvbl9wYWdlIiwic2VvRnJpZW5kbHkiLCJpbmNsdWRlcyIsImRfaWQiLCJET0NUT1JTIiwic2V0U3RhdGUiLCJzcGxpdCIsImdldERvY3RvckJ5VXJsIiwic2VvRGF0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzY2hlbWEiLCJzZW9fdXJsIiwiZ2V0TWV0YVRhZ3NEYXRhIiwic2VvIiwiY2Fub25pY2FsVXJsIiwiQ09ORklHIiwiQVBJX0JBU0VfVVJMIiwic3RvcmUiLCJxdWVyeURhdGEiLCJkb2N0b3JfaWRfZnJvbV91cmwiLCJob3NwaXRhbF9pZF9mcm9tX3VybCIsImRpc3BhdGNoIiwicHJvY2VkdXJlX2lkcyIsImNhdGVnb3J5X2lkcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb250ZXh0VHlwZXMiLCJyb3V0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJwYXNzZWRQcm9wcyIsImluaXRpYWxTZXJ2ZXJEYXRhIiwic3RhdGljQ29udGV4dCIsImRhdGEiLCJET0NUT1JfUFJPRklMRVMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJnZXREb2N0b3JCeUlkIiwiZG9jdG9ySWQiLCJkb2N0cl91cmwiLCJob3NwaXRhbElkIiwiY2IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7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c0NuQixhQUF0QyxFQUFxREMsWUFBckQsRUFBbUVtQixFQUFuRSxDQUFULENBQTVEO0FBQUE7QUFGYixLQUFQO0FBSUgsQ0FMRDs7a0JBUWUseUJBQVFYLGVBQVIsRUFBeUJNLGtCQUF6QixFQUE2Q3ZELFVBQTdDLEMiLCJmaWxlIjoiMTQ2LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi9jb25maWcnXG5cbmltcG9ydCB7IGdldERvY3RvckJ5SWQsIGdldERvY3RvckJ5VXJsIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbmltcG9ydCBBcHBvaW50bWVudFNsb3QgZnJvbSAnLi4vLi4vY29udGFpbmVycy9vcGQvQXBwb2ludG1lbnRTbG90J1xuaW1wb3J0IFBhdGllbnREZXRhaWxzIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvb3BkL1BhdGllbnREZXRhaWxzJ1xuaW1wb3J0IEhlbG1ldFRhZ3MgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0hlbG1ldFRhZ3MnXG5cbmNsYXNzIFNlb0Jvb2tpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG4gICAgICAgIGxldCBkb2N0b3JfaWQgPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCB8fCBwYXJzZWQuZG9jdG9yX2lkIHx8IHRoaXMuZ2V0X2RvY3Rvcl9pZF9ieV91cmwodGhpcy5wcm9wcy5tYXRjaC51cmwpXG4gICAgICAgIGxldCBob3NwaXRhbF9pZCA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmNsaW5pY0lkIHx8IHBhcnNlZC5ob3NwaXRhbF9pZCB8fCBcIlwiXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdGVkRG9jdG9yOiBkb2N0b3JfaWQsXG4gICAgICAgICAgICBzZWxlY3RlZENsaW5pYzogaG9zcGl0YWxfaWQsXG4gICAgICAgICAgICBhY3Rpb25fcGFnZTogcGFyc2VkLmFjdGlvbl9wYWdlLFxuICAgICAgICAgICAgc2VvRnJpZW5kbHk6IHRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKCctZHBwJylcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZ2V0X2RvY3Rvcl9pZF9ieV91cmwodXJsKSB7XG4gICAgICAgIGZvciAobGV0IGRfaWQgaW4gdGhpcy5wcm9wcy5ET0NUT1JTKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5ET0NUT1JTW2RfaWRdLnVybCAmJiB1cmwuaW5jbHVkZXModGhpcy5wcm9wcy5ET0NUT1JTW2RfaWRdLnVybCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZF9pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWREYXRhKHN0b3JlLCBtYXRjaCwgcXVlcnlEYXRhKSB7XG4gICAgICAgIGxldCBkb2N0b3JfaWRfZnJvbV91cmwgPSBtYXRjaC5wYXJhbXMuaWQgfHwgcXVlcnlEYXRhLmRvY3Rvcl9pZFxuICAgICAgICBsZXQgaG9zcGl0YWxfaWRfZnJvbV91cmwgPSBtYXRjaC5wYXJhbXMuY2xpbmljSWQgfHwgcXVlcnlEYXRhLmhvc3BpdGFsX2lkIHx8IFwiXCJcblxuICAgICAgICBpZiAoZG9jdG9yX2lkX2Zyb21fdXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZ2V0RG9jdG9yQnlJZChkb2N0b3JfaWRfZnJvbV91cmwsIGhvc3BpdGFsX2lkX2Zyb21fdXJsLCBxdWVyeURhdGEucHJvY2VkdXJlX2lkcyB8fCBbXSwgcXVlcnlEYXRhLmNhdGVnb3J5X2lkcyB8fCBbXSkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgdXJsID0gbWF0Y2gudXJsXG4gICAgICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gdXJsLnNwbGl0KFwiL1wiKVsxXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChnZXREb2N0b3JCeVVybCh1cmwsIGhvc3BpdGFsX2lkX2Zyb21fdXJsLCBxdWVyeURhdGEucHJvY2VkdXJlX2lkcyB8fCBbXSwgcXVlcnlEYXRhLmNhdGVnb3J5X2lkcyB8fCBbXSwgKGRvY3Rvcl9pZCwgdXJsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N0b3JfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyBkb2N0b3JfaWQgfSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UocHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGlvbl9wYWdlICE9IHBhcnNlZC5hY3Rpb25fcGFnZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGlvbl9wYWdlOiBwYXJzZWQuYWN0aW9uX3BhZ2UgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuc2VsZWN0ZWREb2N0b3IgJiYgdGhpcy5zdGF0ZS5zZW9GcmllbmRseSkge1xuICAgICAgICAgICAgbGV0IHVybCA9IHRoaXMucHJvcHMubWF0Y2gudXJsXG4gICAgICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gdXJsLnNwbGl0KFwiL1wiKVsxXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXREb2N0b3JCeVVybCh1cmwsIHRoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWMsIFtdLCBbXSwgKGRvY3Rvcl9pZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkb2N0b3JfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkRG9jdG9yOiBkb2N0b3JfaWQgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcm91dGVyOiAoKSA9PiBudWxsXG4gICAgfVxuXG4gICAgZ2V0TWV0YVRhZ3NEYXRhKHNlb0RhdGEpIHtcbiAgICAgICAgbGV0IHRpdGxlID0gXCJcIlxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBcIlwiXG4gICAgICAgIGxldCBzY2hlbWEgPSB7fVxuICAgICAgICBpZiAoc2VvRGF0YSkge1xuICAgICAgICAgICAgdGl0bGUgPSBzZW9EYXRhLnRpdGxlIHx8IFwiXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gc2VvRGF0YS5kZXNjcmlwdGlvbiB8fCBcIlwiXG4gICAgICAgICAgICBzY2hlbWEgPSBzZW9EYXRhLnNjaGVtYVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgc2NoZW1hIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgbGV0IHNlb191cmwgPSBcIlwiXG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuRE9DVE9SU1t0aGlzLnN0YXRlLnNlbGVjdGVkRG9jdG9yXSkge1xuICAgICAgICAgICAgc2VvX3VybCA9IHRoaXMucHJvcHMuRE9DVE9SU1t0aGlzLnN0YXRlLnNlbGVjdGVkRG9jdG9yXS51cmwgfHwgXCJcIlxuICAgICAgICAgICAgaWYgKHNlb191cmwpIHtcbiAgICAgICAgICAgICAgICBzZW9fdXJsID0gXCIvXCIgKyBzZW9fdXJsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ET0NUT1JTICYmIHRoaXMucHJvcHMuRE9DVE9SU1t0aGlzLnN0YXRlLnNlbGVjdGVkRG9jdG9yXSA/IDxIZWxtZXRUYWdzIHRhZ3NEYXRhPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5nZXRNZXRhVGFnc0RhdGEodGhpcy5wcm9wcy5ET0NUT1JTW3RoaXMuc3RhdGUuc2VsZWN0ZWREb2N0b3JdLnNlbykudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5nZXRNZXRhVGFnc0RhdGEodGhpcy5wcm9wcy5ET0NUT1JTW3RoaXMuc3RhdGUuc2VsZWN0ZWREb2N0b3JdLnNlbykuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5vbmljYWxVcmw6IGAke0NPTkZJRy5BUElfQkFTRV9VUkx9JHtzZW9fdXJsIHx8IHRoaXMucHJvcHMubWF0Y2gudXJsfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWE6IHRoaXMuZ2V0TWV0YVRhZ3NEYXRhKHRoaXMucHJvcHMuRE9DVE9SU1t0aGlzLnN0YXRlLnNlbGVjdGVkRG9jdG9yXS5zZW8pLnNjaGVtYVxuICAgICAgICAgICAgICAgICAgICB9fSBub0luZGV4PXtmYWxzZSAmJiAhdGhpcy5zdGF0ZS5zZW9GcmllbmRseX0gLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aW9uX3BhZ2UgPT0gJ3RpbWluZ3MnID8gPEFwcG9pbnRtZW50U2xvdCB7Li4udGhpcy5wcm9wc30gc2VsZWN0ZWREb2N0b3I9e3RoaXMuc3RhdGUuc2VsZWN0ZWREb2N0b3J9IHNlbGVjdGVkQ2xpbmljPXt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljfSAvPiA6IDxQYXRpZW50RGV0YWlscyB7Li4udGhpcy5wcm9wc30gc2VsZWN0ZWREb2N0b3I9e3RoaXMuc3RhdGUuc2VsZWN0ZWREb2N0b3J9IHNlbGVjdGVkQ2xpbmljPXt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljfSAvPlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcGFzc2VkUHJvcHMpID0+IHtcbiAgICAvKipcbiAgICAgKiBpbml0aWFsU2VydmVyRGF0YSBpcyBzZXJ2ZXIgcmVuZGVyZWQgYXN5bmMgZGF0YSByZXF1aXJlZCBidWlsZCBodG1sIG9uIHNlcnZlci4gXG4gICAgICovXG4gICAgbGV0IGluaXRpYWxTZXJ2ZXJEYXRhID0gbnVsbFxuICAgIGxldCB7IHN0YXRpY0NvbnRleHQgfSA9IHBhc3NlZFByb3BzXG4gICAgaWYgKHN0YXRpY0NvbnRleHQgJiYgc3RhdGljQ29udGV4dC5kYXRhKSB7XG4gICAgICAgIGluaXRpYWxTZXJ2ZXJEYXRhID0gc3RhdGljQ29udGV4dC5kYXRhXG4gICAgfVxuXG4gICAgbGV0IERPQ1RPUlMgPSBzdGF0ZS5ET0NUT1JfUFJPRklMRVNcblxuICAgIHJldHVybiB7XG4gICAgICAgIERPQ1RPUlMsIGluaXRpYWxTZXJ2ZXJEYXRhXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXREb2N0b3JCeUlkOiAoZG9jdG9ySWQsIGNsaW5pY0lkLCBwcm9jZWR1cmVfaWRzLCBjYXRlZ29yeV9pZHMpID0+IGRpc3BhdGNoKGdldERvY3RvckJ5SWQoZG9jdG9ySWQsIGNsaW5pY0lkLCBwcm9jZWR1cmVfaWRzLCBjYXRlZ29yeV9pZHMpKSxcbiAgICAgICAgZ2V0RG9jdG9yQnlVcmw6IChkb2N0cl91cmwsIGhvc3BpdGFsSWQsIHByb2NlZHVyZV9pZHMsIGNhdGVnb3J5X2lkcywgY2IpID0+IGRpc3BhdGNoKGdldERvY3RvckJ5VXJsKGRvY3RyX3VybCwgaG9zcGl0YWxJZCwgcHJvY2VkdXJlX2lkcywgY2F0ZWdvcnlfaWRzLCBjYikpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNlb0Jvb2tpbmcpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==