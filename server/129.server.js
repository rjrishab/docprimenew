exports.ids = [129];
exports.modules = {

/***/ "./dev/js/containers/diagnosis/SeoBooking.js":
/*!***************************************************!*\
  !*** ./dev/js/containers/diagnosis/SeoBooking.js ***!
  \***************************************************/
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

var _BookingSummary = __webpack_require__(/*! ./BookingSummary.js */ "./dev/js/containers/diagnosis/BookingSummary.js");

var _BookingSummary2 = _interopRequireDefault(_BookingSummary);

var _AppointmentSlot = __webpack_require__(/*! ./AppointmentSlot.js */ "./dev/js/containers/diagnosis/AppointmentSlot.js");

var _AppointmentSlot2 = _interopRequireDefault(_AppointmentSlot);

var _TestSelector = __webpack_require__(/*! ./TestSelector.js */ "./dev/js/containers/diagnosis/TestSelector.js");

var _TestSelector2 = _interopRequireDefault(_TestSelector);

var _HelmetTags = __webpack_require__(/*! ../../components/commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class SeoBooking extends _react2.default.Component {
    constructor(props) {
        super(props);

        const parsed = queryString.parse(this.props.location.search);

        let lab_id = this.props.match.params.id || parsed.lab_id || this.get_lab_id_by_url(this.props.match.url);

        this.state = {
            selectedLab: lab_id,
            action_page: parsed.action_page,
            seoFriendly: this.props.match.url.includes('-lpp')
        };
    }

    get_lab_id_by_url(url) {
        for (let l_id in this.props.LABS) {
            if (this.props.LABS[l_id].lab && url.includes(this.props.LABS[l_id].lab.url)) {
                return l_id;
            }
        }
        return null;
    }

    static loadData(store, match, queryData) {
        let lab_id_from_url = match.params.id || queryData.lab_id;

        if (lab_id_from_url) {
            return store.dispatch((0, _index.getLabById)(lab_id_from_url));
        } else {
            let url = match.url;
            if (url) {
                url = url.split("/")[1];
            }
            return new Promise((resolve, reject) => {
                store.dispatch((0, _index.getLabByUrl)(url, [], (labId, url) => {
                    if (labId) {
                        resolve({ labId });
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
        if (!this.state.selectedLab && this.state.seoFriendly) {
            let url = this.props.match.url;
            if (url) {
                url = url.split("/")[1];
            }
            this.props.getLabByUrl(url, [], labId => {
                if (labId) {
                    this.setState({ selectedLab: labId });
                    // let testIds = this.props.lab_test_data[labId] || []
                    // let tests = testIds.map(x => x.id)
                    // this.props.getLabById(labId, tests)
                }
            });
        }
    }

    getMetaTagsData(seoData) {
        let title = "";
        let description = "";
        if (seoData) {
            title = seoData.title || "";
            description = seoData.description || "";
        }
        return { title, description };
    }

    render() {

        let to_render = _react2.default.createElement(_BookingSummary2.default, _extends({}, this.props, { selectedLab: this.state.selectedLab }));
        if (this.state.action_page == 'timings') {
            to_render = _react2.default.createElement(_AppointmentSlot2.default, _extends({}, this.props, { selectedLab: this.state.selectedLab }));
        }
        if (this.state.action_page == 'tests') {
            to_render = _react2.default.createElement(_TestSelector2.default, _extends({}, this.props, { selectedLab: this.state.selectedLab }));
        }

        let seo_url = "";
        if (this.props.LABS[this.state.selectedLab]) {
            seo_url = this.props.LABS[this.state.selectedLab].lab.url;
            if (seo_url) {
                seo_url = "/" + seo_url;
            }
        }

        return _react2.default.createElement(
            'div',
            null,
            this.props.LABS && this.props.LABS[this.state.selectedLab] ? _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                    title: this.getMetaTagsData(this.props.LABS[this.state.selectedLab].lab.seo).title,
                    description: this.getMetaTagsData(this.props.LABS[this.state.selectedLab].lab.seo).description,
                    canonicalUrl: `${_config2.default.API_BASE_URL}${seo_url || this.props.match.url}`
                }, noIndex:  false && false }) : "",
            to_render
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

    let LABS = state.LABS;

    return {
        LABS, initialServerData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getLabById: (labId, testIds) => dispatch((0, _index.getLabById)(labId, testIds)),
        getLabByUrl: (url, testIds, cb) => dispatch((0, _index.getLabByUrl)(url, testIds, cb))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SeoBooking);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9kaWFnbm9zaXMvU2VvQm9va2luZy5qcyJdLCJuYW1lcyI6WyJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJTZW9Cb29raW5nIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicGFyc2VkIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsImxhYl9pZCIsIm1hdGNoIiwicGFyYW1zIiwiaWQiLCJnZXRfbGFiX2lkX2J5X3VybCIsInVybCIsInN0YXRlIiwic2VsZWN0ZWRMYWIiLCJhY3Rpb25fcGFnZSIsInNlb0ZyaWVuZGx5IiwiaW5jbHVkZXMiLCJsX2lkIiwiTEFCUyIsImxhYiIsImxvYWREYXRhIiwic3RvcmUiLCJxdWVyeURhdGEiLCJsYWJfaWRfZnJvbV91cmwiLCJkaXNwYXRjaCIsInNwbGl0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJsYWJJZCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJzZXRTdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwiZ2V0TGFiQnlVcmwiLCJnZXRNZXRhVGFnc0RhdGEiLCJzZW9EYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInJlbmRlciIsInRvX3JlbmRlciIsInNlb191cmwiLCJzZW8iLCJjYW5vbmljYWxVcmwiLCJDT05GSUciLCJBUElfQkFTRV9VUkwiLCJjb250ZXh0VHlwZXMiLCJyb3V0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJwYXNzZWRQcm9wcyIsImluaXRpYWxTZXJ2ZXJEYXRhIiwic3RhdGljQ29udGV4dCIsImRhdGEiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJnZXRMYWJCeUlkIiwidGVzdElkcyIsImNiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUVBOztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUFOQSxNQUFN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eUM7QUFDckNGLDRCQUFvQkMsY0FBY0MsSUFBbEM7QUFDSDs7QUFFRCxRQUFJakMsT0FBT04sTUFBTU0sSUFBakI7O0FBRUEsV0FBTztBQUNIQSxZQURHLEVBQ0crQjtBQURILEtBQVA7QUFHSCxDQWZEOztBQWlCQSxNQUFNRyxxQkFBc0I1QixRQUFELElBQWM7QUFDckMsV0FBTztBQUNINkIsb0JBQVksQ0FBQ3hCLEtBQUQsRUFBUXlCLE9BQVIsS0FBb0I5QixTQUFTLHVCQUFXSyxLQUFYLEVBQWtCeUIsT0FBbEIsQ0FBVCxDQUQ3QjtBQUVIckIscUJBQWEsQ0FBQ3RCLEdBQUQsRUFBTTJDLE9BQU4sRUFBZUMsRUFBZixLQUFzQi9CLFNBQVMsd0JBQVliLEdBQVosRUFBaUIyQyxPQUFqQixFQUEwQkMsRUFBMUIsQ0FBVDtBQUZoQyxLQUFQO0FBSUgsQ0FMRDs7a0JBUWUseUJBQVFSLGVBQVIsRUFBeUJLLGtCQUF6QixFQUE2Q3ZELFVBQTdDLEMiLCJmaWxlIjoiMTI5LnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi9jb25maWcnXG5cbmltcG9ydCB7IGdldExhYkJ5SWQsIGdldExhYkJ5VXJsIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbmltcG9ydCBEWF9Cb29raW5nU3VtbWFyeSBmcm9tICcuL0Jvb2tpbmdTdW1tYXJ5LmpzJ1xuaW1wb3J0IEFwcG9pbnRtZW50U2xvdCBmcm9tICcuL0FwcG9pbnRtZW50U2xvdC5qcydcbmltcG9ydCBUZXN0U2VsZWN0b3IgZnJvbSAnLi9UZXN0U2VsZWN0b3IuanMnXG5cbmltcG9ydCBIZWxtZXRUYWdzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9IZWxtZXRUYWdzJ1xuXG5jbGFzcyBTZW9Cb29raW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcblxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblxuICAgICAgICBsZXQgbGFiX2lkID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQgfHwgcGFyc2VkLmxhYl9pZCB8fCB0aGlzLmdldF9sYWJfaWRfYnlfdXJsKHRoaXMucHJvcHMubWF0Y2gudXJsKVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZWxlY3RlZExhYjogbGFiX2lkLFxuICAgICAgICAgICAgYWN0aW9uX3BhZ2U6IHBhcnNlZC5hY3Rpb25fcGFnZSxcbiAgICAgICAgICAgIHNlb0ZyaWVuZGx5OiB0aGlzLnByb3BzLm1hdGNoLnVybC5pbmNsdWRlcygnLWxwcCcpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGdldF9sYWJfaWRfYnlfdXJsKHVybCkge1xuICAgICAgICBmb3IgKGxldCBsX2lkIGluIHRoaXMucHJvcHMuTEFCUykge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuTEFCU1tsX2lkXS5sYWIgJiYgdXJsLmluY2x1ZGVzKHRoaXMucHJvcHMuTEFCU1tsX2lkXS5sYWIudXJsKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsX2lkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZERhdGEoc3RvcmUsIG1hdGNoLCBxdWVyeURhdGEpIHtcbiAgICAgICAgbGV0IGxhYl9pZF9mcm9tX3VybCA9IG1hdGNoLnBhcmFtcy5pZCB8fCBxdWVyeURhdGEubGFiX2lkXG5cbiAgICAgICAgaWYgKGxhYl9pZF9mcm9tX3VybCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGdldExhYkJ5SWQobGFiX2lkX2Zyb21fdXJsKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB1cmwgPSBtYXRjaC51cmxcbiAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSB1cmwuc3BsaXQoXCIvXCIpWzFdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGdldExhYkJ5VXJsKHVybCwgW10sIChsYWJJZCwgdXJsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYWJJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7IGxhYklkIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHByb3BzLmxvY2F0aW9uLnNlYXJjaClcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY3Rpb25fcGFnZSAhPSBwYXJzZWQuYWN0aW9uX3BhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3Rpb25fcGFnZTogcGFyc2VkLmFjdGlvbl9wYWdlIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnNlbGVjdGVkTGFiICYmIHRoaXMuc3RhdGUuc2VvRnJpZW5kbHkpIHtcbiAgICAgICAgICAgIGxldCB1cmwgPSB0aGlzLnByb3BzLm1hdGNoLnVybFxuICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICAgIHVybCA9IHVybC5zcGxpdChcIi9cIilbMV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0TGFiQnlVcmwodXJsLCBbXSwgKGxhYklkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGxhYklkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZExhYjogbGFiSWQgfSlcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHRlc3RJZHMgPSB0aGlzLnByb3BzLmxhYl90ZXN0X2RhdGFbbGFiSWRdIHx8IFtdXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCB0ZXN0cyA9IHRlc3RJZHMubWFwKHggPT4geC5pZClcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5nZXRMYWJCeUlkKGxhYklkLCB0ZXN0cylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcm91dGVyOiAoKSA9PiBudWxsXG4gICAgfVxuXG4gICAgZ2V0TWV0YVRhZ3NEYXRhKHNlb0RhdGEpIHtcbiAgICAgICAgbGV0IHRpdGxlID0gXCJcIlxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBcIlwiXG4gICAgICAgIGlmIChzZW9EYXRhKSB7XG4gICAgICAgICAgICB0aXRsZSA9IHNlb0RhdGEudGl0bGUgfHwgXCJcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBzZW9EYXRhLmRlc2NyaXB0aW9uIHx8IFwiXCJcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24gfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgdG9fcmVuZGVyID0gPERYX0Jvb2tpbmdTdW1tYXJ5IHsuLi50aGlzLnByb3BzfSBzZWxlY3RlZExhYj17dGhpcy5zdGF0ZS5zZWxlY3RlZExhYn0gLz5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aW9uX3BhZ2UgPT0gJ3RpbWluZ3MnKSB7XG4gICAgICAgICAgICB0b19yZW5kZXIgPSA8QXBwb2ludG1lbnRTbG90IHsuLi50aGlzLnByb3BzfSBzZWxlY3RlZExhYj17dGhpcy5zdGF0ZS5zZWxlY3RlZExhYn0gLz5cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY3Rpb25fcGFnZSA9PSAndGVzdHMnKSB7XG4gICAgICAgICAgICB0b19yZW5kZXIgPSA8VGVzdFNlbGVjdG9yIHsuLi50aGlzLnByb3BzfSBzZWxlY3RlZExhYj17dGhpcy5zdGF0ZS5zZWxlY3RlZExhYn0gLz5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgbGV0IHNlb191cmwgPSBcIlwiXG4gICAgICAgIGlmICh0aGlzLnByb3BzLkxBQlNbdGhpcy5zdGF0ZS5zZWxlY3RlZExhYl0pIHtcbiAgICAgICAgICAgIHNlb191cmwgPSB0aGlzLnByb3BzLkxBQlNbdGhpcy5zdGF0ZS5zZWxlY3RlZExhYl0ubGFiLnVybFxuICAgICAgICAgICAgaWYgKHNlb191cmwpIHtcbiAgICAgICAgICAgICAgICBzZW9fdXJsID0gXCIvXCIgKyBzZW9fdXJsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5MQUJTICYmIHRoaXMucHJvcHMuTEFCU1t0aGlzLnN0YXRlLnNlbGVjdGVkTGFiXSA/IDxIZWxtZXRUYWdzIHRhZ3NEYXRhPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5nZXRNZXRhVGFnc0RhdGEodGhpcy5wcm9wcy5MQUJTW3RoaXMuc3RhdGUuc2VsZWN0ZWRMYWJdLmxhYi5zZW8pLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZ2V0TWV0YVRhZ3NEYXRhKHRoaXMucHJvcHMuTEFCU1t0aGlzLnN0YXRlLnNlbGVjdGVkTGFiXS5sYWIuc2VvKS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbm9uaWNhbFVybDogYCR7Q09ORklHLkFQSV9CQVNFX1VSTH0ke3Nlb191cmwgfHwgdGhpcy5wcm9wcy5tYXRjaC51cmx9YFxuICAgICAgICAgICAgICAgICAgICB9fSBub0luZGV4PXtmYWxzZSAmJiAhdGhpcy5zdGF0ZS5zZW9GcmllbmRseX0gLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICB7dG9fcmVuZGVyfVxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwYXNzZWRQcm9wcykgPT4ge1xuICAgIC8qKlxuICAgICAqIGluaXRpYWxTZXJ2ZXJEYXRhIGlzIHNlcnZlciByZW5kZXJlZCBhc3luYyBkYXRhIHJlcXVpcmVkIGJ1aWxkIGh0bWwgb24gc2VydmVyLiBcbiAgICAgKi9cbiAgICBsZXQgaW5pdGlhbFNlcnZlckRhdGEgPSBudWxsXG4gICAgbGV0IHsgc3RhdGljQ29udGV4dCB9ID0gcGFzc2VkUHJvcHNcbiAgICBpZiAoc3RhdGljQ29udGV4dCAmJiBzdGF0aWNDb250ZXh0LmRhdGEpIHtcbiAgICAgICAgaW5pdGlhbFNlcnZlckRhdGEgPSBzdGF0aWNDb250ZXh0LmRhdGFcbiAgICB9XG5cbiAgICBsZXQgTEFCUyA9IHN0YXRlLkxBQlNcblxuICAgIHJldHVybiB7XG4gICAgICAgIExBQlMsIGluaXRpYWxTZXJ2ZXJEYXRhXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRMYWJCeUlkOiAobGFiSWQsIHRlc3RJZHMpID0+IGRpc3BhdGNoKGdldExhYkJ5SWQobGFiSWQsIHRlc3RJZHMpKSxcbiAgICAgICAgZ2V0TGFiQnlVcmw6ICh1cmwsIHRlc3RJZHMsIGNiKSA9PiBkaXNwYXRjaChnZXRMYWJCeVVybCh1cmwsIHRlc3RJZHMsIGNiKSksXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNlb0Jvb2tpbmcpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==