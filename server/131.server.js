exports.ids = [131];
exports.modules = {

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

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

const queryString = __webpack_require__(/*! query-string */ "query-string");

class SeoBooking extends _react2.default.Component {
    constructor(props) {
        super(props);

        const parsed = queryString.parse(this.props.location.search);

        let doctor_id = this.props.match.params.id || parsed.doctor_id || this.get_doctor_id_by_url(this.props.match.url);
        let hospital_id = this.props.match.params.clinicId || parsed.hospital_id || "";

        this.state = {
            selectedDoctor: doctor_id,
            selectedClinic: hospital_id,
            action_page: parsed.action_page,
            seoFriendly: this.props.match.url.includes('-dpp')
        };
    }

    get_doctor_id_by_url(url) {
        for (let d_id in this.props.DOCTORS) {
            if (this.props.DOCTORS[d_id].url && url.includes(this.props.DOCTORS[d_id].url)) {
                return d_id;
            }
        }
        return null;
    }

    static loadData(store, match, queryData) {
        let doctor_id_from_url = match.params.id || queryData.doctor_id;
        let hospital_id_from_url = match.params.clinicId || queryData.hospital_id || "";

        if (doctor_id_from_url) {
            return store.dispatch((0, _index.getDoctorById)(doctor_id_from_url, hospital_id_from_url, queryData.procedure_ids || [], queryData.category_ids || []));
        } else {
            let url = match.url;
            if (url) {
                url = url.split("/")[1];
            }
            return new Promise((resolve, reject) => {
                store.dispatch((0, _index.getDoctorByUrl)(url, hospital_id_from_url, queryData.procedure_ids || [], queryData.category_ids || [], (doctor_id, url) => {
                    if (doctor_id) {
                        resolve({ doctor_id });
                    } else {
                        reject({
                            url: url
                        });
                    }
                }));
            });
        }
    }

    componentWillReceiveProps(props) {
        const parsed = queryString.parse(props.location.search);

        if (this.state.action_page != parsed.action_page) {
            this.setState({ action_page: parsed.action_page });
        }
    }

    componentDidMount() {
        if (!this.state.selectedDoctor && this.state.seoFriendly) {
            let url = this.props.match.url;
            if (url) {
                url = url.split("/")[1];
            }
            this.props.getDoctorByUrl(url, this.state.selectedClinic, [], [], doctor_id => {
                if (doctor_id) {
                    this.setState({ selectedDoctor: doctor_id });
                }
            });
        }
    }

    getMetaTagsData(seoData) {
        let title = "";
        let description = "";
        let schema = {};
        if (seoData) {
            title = seoData.title || "";
            description = seoData.description || "";
            schema = seoData.schema;
        }
        return { title, description, schema };
    }

    render() {

        let seo_url = "";

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
                    canonicalUrl: `${_config2.default.API_BASE_URL}${seo_url || this.props.match.url}`,
                    schema: this.getMetaTagsData(this.props.DOCTORS[this.state.selectedDoctor].seo).schema
                }, noIndex:  false && false }) : "",
            this.state.action_page == 'timings' ? _react2.default.createElement(_AppointmentSlot2.default, _extends({}, this.props, { selectedDoctor: this.state.selectedDoctor, selectedClinic: this.state.selectedClinic })) : _react2.default.createElement(_PatientDetails2.default, _extends({}, this.props, { selectedDoctor: this.state.selectedDoctor, selectedClinic: this.state.selectedClinic }))
        );
    }
}

SeoBooking.contextTypes = {
    router: () => null
};
const mapStateToProps = (state, passedProps) => {
    /**
     * initialServerData is server rendered async data required build html on server. 
     */
    let initialServerData = null;
    let { staticContext } = passedProps;
    if (staticContext && staticContext.data) {
        initialServerData = staticContext.data;
    }

    let DOCTORS = state.DOCTOR_PROFILES;

    return {
        DOCTORS, initialServerData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getDoctorById: (doctorId, clinicId, procedure_ids, category_ids) => dispatch((0, _index.getDoctorById)(doctorId, clinicId, procedure_ids, category_ids)),
        getDoctorByUrl: (doctr_url, hospitalId, procedure_ids, category_ids, cb) => dispatch((0, _index.getDoctorByUrl)(doctr_url, hospitalId, procedure_ids, category_ids, cb))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SeoBooking);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9vcGQvU2VvQm9va2luZy5qcyJdLCJuYW1lcyI6WyJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJTZW9Cb29raW5nIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicGFyc2VkIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsImRvY3Rvcl9pZCIsIm1hdGNoIiwicGFyYW1zIiwiaWQiLCJnZXRfZG9jdG9yX2lkX2J5X3VybCIsInVybCIsImhvc3BpdGFsX2lkIiwiY2xpbmljSWQiLCJzdGF0ZSIsInNlbGVjdGVkRG9jdG9yIiwic2VsZWN0ZWRDbGluaWMiLCJhY3Rpb25fcGFnZSIsInNlb0ZyaWVuZGx5IiwiaW5jbHVkZXMiLCJkX2lkIiwiRE9DVE9SUyIsImxvYWREYXRhIiwic3RvcmUiLCJxdWVyeURhdGEiLCJkb2N0b3JfaWRfZnJvbV91cmwiLCJob3NwaXRhbF9pZF9mcm9tX3VybCIsImRpc3BhdGNoIiwicHJvY2VkdXJlX2lkcyIsImNhdGVnb3J5X2lkcyIsInNwbGl0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwic2V0U3RhdGUiLCJjb21wb25lbnREaWRNb3VudCIsImdldERvY3RvckJ5VXJsIiwiZ2V0TWV0YVRhZ3NEYXRhIiwic2VvRGF0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzY2hlbWEiLCJyZW5kZXIiLCJzZW9fdXJsIiwic2VvIiwiY2Fub25pY2FsVXJsIiwiQ09ORklHIiwiQVBJX0JBU0VfVVJMIiwiY29udGV4dFR5cGVzIiwicm91dGVyIiwibWFwU3RhdGVUb1Byb3BzIiwicGFzc2VkUHJvcHMiLCJpbml0aWFsU2VydmVyRGF0YSIsInN0YXRpY0NvbnRleHQiLCJkYXRhIiwiRE9DVE9SX1BST0ZJTEVTIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZ2V0RG9jdG9yQnlJZCIsImRvY3Rv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QUFTLDJCQUFlaUMsU0FBZixFQUEwQkMsVUFBMUIsRUFBc0NqQyxhQUF0QyxFQUFxREMsWUFBckQsRUFBbUVpQyxFQUFuRSxDQUFUO0FBRnpFLEtBQVA7QUFJSCxDQUxEOztrQkFRZSx5QkFBUVgsZUFBUixFQUF5Qk0sa0JBQXpCLEVBQTZDNUQsVUFBN0MsQyIsImZpbGUiOiIxMzEuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uL2NvbmZpZydcblxuaW1wb3J0IHsgZ2V0RG9jdG9yQnlJZCwgZ2V0RG9jdG9yQnlVcmwgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuaW1wb3J0IEFwcG9pbnRtZW50U2xvdCBmcm9tICcuLi8uLi9jb250YWluZXJzL29wZC9BcHBvaW50bWVudFNsb3QnXG5pbXBvcnQgUGF0aWVudERldGFpbHMgZnJvbSAnLi4vLi4vY29udGFpbmVycy9vcGQvUGF0aWVudERldGFpbHMnXG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvSGVsbWV0VGFncydcblxuY2xhc3MgU2VvQm9va2luZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cbiAgICAgICAgbGV0IGRvY3Rvcl9pZCA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkIHx8IHBhcnNlZC5kb2N0b3JfaWQgfHwgdGhpcy5nZXRfZG9jdG9yX2lkX2J5X3VybCh0aGlzLnByb3BzLm1hdGNoLnVybClcbiAgICAgICAgbGV0IGhvc3BpdGFsX2lkID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuY2xpbmljSWQgfHwgcGFyc2VkLmhvc3BpdGFsX2lkIHx8IFwiXCJcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWREb2N0b3I6IGRvY3Rvcl9pZCxcbiAgICAgICAgICAgIHNlbGVjdGVkQ2xpbmljOiBob3NwaXRhbF9pZCxcbiAgICAgICAgICAgIGFjdGlvbl9wYWdlOiBwYXJzZWQuYWN0aW9uX3BhZ2UsXG4gICAgICAgICAgICBzZW9GcmllbmRseTogdGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoJy1kcHAnKVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBnZXRfZG9jdG9yX2lkX2J5X3VybCh1cmwpIHtcbiAgICAgICAgZm9yIChsZXQgZF9pZCBpbiB0aGlzLnByb3BzLkRPQ1RPUlMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLkRPQ1RPUlNbZF9pZF0udXJsICYmIHVybC5pbmNsdWRlcyh0aGlzLnByb3BzLkRPQ1RPUlNbZF9pZF0udXJsKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkX2lkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZERhdGEoc3RvcmUsIG1hdGNoLCBxdWVyeURhdGEpIHtcbiAgICAgICAgbGV0IGRvY3Rvcl9pZF9mcm9tX3VybCA9IG1hdGNoLnBhcmFtcy5pZCB8fCBxdWVyeURhdGEuZG9jdG9yX2lkXG4gICAgICAgIGxldCBob3NwaXRhbF9pZF9mcm9tX3VybCA9IG1hdGNoLnBhcmFtcy5jbGluaWNJZCB8fCBxdWVyeURhdGEuaG9zcGl0YWxfaWQgfHwgXCJcIlxuXG4gICAgICAgIGlmIChkb2N0b3JfaWRfZnJvbV91cmwpIHtcbiAgICAgICAgICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChnZXREb2N0b3JCeUlkKGRvY3Rvcl9pZF9mcm9tX3VybCwgaG9zcGl0YWxfaWRfZnJvbV91cmwsIHF1ZXJ5RGF0YS5wcm9jZWR1cmVfaWRzIHx8IFtdLCBxdWVyeURhdGEuY2F0ZWdvcnlfaWRzIHx8IFtdKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB1cmwgPSBtYXRjaC51cmxcbiAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSB1cmwuc3BsaXQoXCIvXCIpWzFdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGdldERvY3RvckJ5VXJsKHVybCwgaG9zcGl0YWxfaWRfZnJvbV91cmwsIHF1ZXJ5RGF0YS5wcm9jZWR1cmVfaWRzIHx8IFtdLCBxdWVyeURhdGEuY2F0ZWdvcnlfaWRzIHx8IFtdLCAoZG9jdG9yX2lkLCB1cmwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3Rvcl9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7IGRvY3Rvcl9pZCB9KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZShwcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aW9uX3BhZ2UgIT0gcGFyc2VkLmFjdGlvbl9wYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aW9uX3BhZ2U6IHBhcnNlZC5hY3Rpb25fcGFnZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5zZWxlY3RlZERvY3RvciAmJiB0aGlzLnN0YXRlLnNlb0ZyaWVuZGx5KSB7XG4gICAgICAgICAgICBsZXQgdXJsID0gdGhpcy5wcm9wcy5tYXRjaC51cmxcbiAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSB1cmwuc3BsaXQoXCIvXCIpWzFdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldERvY3RvckJ5VXJsKHVybCwgdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pYywgW10sIFtdLCAoZG9jdG9yX2lkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3Rvcl9pZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWREb2N0b3I6IGRvY3Rvcl9pZCB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICByb3V0ZXI6ICgpID0+IG51bGxcbiAgICB9XG5cbiAgICBnZXRNZXRhVGFnc0RhdGEoc2VvRGF0YSkge1xuICAgICAgICBsZXQgdGl0bGUgPSBcIlwiXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IFwiXCJcbiAgICAgICAgbGV0IHNjaGVtYSA9IHt9XG4gICAgICAgIGlmIChzZW9EYXRhKSB7XG4gICAgICAgICAgICB0aXRsZSA9IHNlb0RhdGEudGl0bGUgfHwgXCJcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBzZW9EYXRhLmRlc2NyaXB0aW9uIHx8IFwiXCJcbiAgICAgICAgICAgIHNjaGVtYSA9IHNlb0RhdGEuc2NoZW1hXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBzY2hlbWEgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgc2VvX3VybCA9IFwiXCJcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5ET0NUT1JTW3RoaXMuc3RhdGUuc2VsZWN0ZWREb2N0b3JdKSB7XG4gICAgICAgICAgICBzZW9fdXJsID0gdGhpcy5wcm9wcy5ET0NUT1JTW3RoaXMuc3RhdGUuc2VsZWN0ZWREb2N0b3JdLnVybCB8fCBcIlwiXG4gICAgICAgICAgICBpZiAoc2VvX3VybCkge1xuICAgICAgICAgICAgICAgIHNlb191cmwgPSBcIi9cIiArIHNlb191cmxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLkRPQ1RPUlMgJiYgdGhpcy5wcm9wcy5ET0NUT1JTW3RoaXMuc3RhdGUuc2VsZWN0ZWREb2N0b3JdID8gPEhlbG1ldFRhZ3MgdGFnc0RhdGE9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmdldE1ldGFUYWdzRGF0YSh0aGlzLnByb3BzLkRPQ1RPUlNbdGhpcy5zdGF0ZS5zZWxlY3RlZERvY3Rvcl0uc2VvKS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmdldE1ldGFUYWdzRGF0YSh0aGlzLnByb3BzLkRPQ1RPUlNbdGhpcy5zdGF0ZS5zZWxlY3RlZERvY3Rvcl0uc2VvKS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbm9uaWNhbFVybDogYCR7Q09ORklHLkFQSV9CQVNFX1VSTH0ke3Nlb191cmwgfHwgdGhpcy5wcm9wcy5tYXRjaC51cmx9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYTogdGhpcy5nZXRNZXRhVGFnc0RhdGEodGhpcy5wcm9wcy5ET0NUT1JTW3RoaXMuc3RhdGUuc2VsZWN0ZWREb2N0b3JdLnNlbykuc2NoZW1hXG4gICAgICAgICAgICAgICAgICAgIH19IG5vSW5kZXg9e2ZhbHNlICYmICF0aGlzLnN0YXRlLnNlb0ZyaWVuZGx5fSAvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY3Rpb25fcGFnZSA9PSAndGltaW5ncycgPyA8QXBwb2ludG1lbnRTbG90IHsuLi50aGlzLnByb3BzfSBzZWxlY3RlZERvY3Rvcj17dGhpcy5zdGF0ZS5zZWxlY3RlZERvY3Rvcn0gc2VsZWN0ZWRDbGluaWM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWN9IC8+IDogPFBhdGllbnREZXRhaWxzIHsuLi50aGlzLnByb3BzfSBzZWxlY3RlZERvY3Rvcj17dGhpcy5zdGF0ZS5zZWxlY3RlZERvY3Rvcn0gc2VsZWN0ZWRDbGluaWM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWN9IC8+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwYXNzZWRQcm9wcykgPT4ge1xuICAgIC8qKlxuICAgICAqIGluaXRpYWxTZXJ2ZXJEYXRhIGlzIHNlcnZlciByZW5kZXJlZCBhc3luYyBkYXRhIHJlcXVpcmVkIGJ1aWxkIGh0bWwgb24gc2VydmVyLiBcbiAgICAgKi9cbiAgICBsZXQgaW5pdGlhbFNlcnZlckRhdGEgPSBudWxsXG4gICAgbGV0IHsgc3RhdGljQ29udGV4dCB9ID0gcGFzc2VkUHJvcHNcbiAgICBpZiAoc3RhdGljQ29udGV4dCAmJiBzdGF0aWNDb250ZXh0LmRhdGEpIHtcbiAgICAgICAgaW5pdGlhbFNlcnZlckRhdGEgPSBzdGF0aWNDb250ZXh0LmRhdGFcbiAgICB9XG5cbiAgICBsZXQgRE9DVE9SUyA9IHN0YXRlLkRPQ1RPUl9QUk9GSUxFU1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgRE9DVE9SUywgaW5pdGlhbFNlcnZlckRhdGFcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldERvY3RvckJ5SWQ6IChkb2N0b3JJZCwgY2xpbmljSWQsIHByb2NlZHVyZV9pZHMsIGNhdGVnb3J5X2lkcykgPT4gZGlzcGF0Y2goZ2V0RG9jdG9yQnlJZChkb2N0b3JJZCwgY2xpbmljSWQsIHByb2NlZHVyZV9pZHMsIGNhdGVnb3J5X2lkcykpLFxuICAgICAgICBnZXREb2N0b3JCeVVybDogKGRvY3RyX3VybCwgaG9zcGl0YWxJZCwgcHJvY2VkdXJlX2lkcywgY2F0ZWdvcnlfaWRzLCBjYikgPT4gZGlzcGF0Y2goZ2V0RG9jdG9yQnlVcmwoZG9jdHJfdXJsLCBob3NwaXRhbElkLCBwcm9jZWR1cmVfaWRzLCBjYXRlZ29yeV9pZHMsIGNiKSlcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2VvQm9va2luZyk7XG4iXSwic291cmNlUm9vdCI6IiJ9