(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[145],{

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

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

        var lab_id = _this.props.match.params.id || parsed.lab_id || _this.get_lab_id_by_url(_this.props.match.url);

        _this.state = {
            selectedLab: lab_id,
            action_page: parsed.action_page,
            seoFriendly: _this.props.match.url.includes('-lpp')
        };

        return _this;
    }

    _createClass(SeoBooking, [{
        key: 'get_lab_id_by_url',
        value: function get_lab_id_by_url(url) {
            for (var l_id in this.props.LABS) {
                if (this.props.LABS[l_id].lab && url.includes(this.props.LABS[l_id].lab.url)) {
                    return l_id;
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

            if (!this.state.selectedLab && this.state.seoFriendly) {
                var url = this.props.match.url;
                if (url) {
                    url = url.split("/")[1];
                }
                this.props.getLabByUrl(url, [], function (labId) {
                    if (labId) {
                        _this2.setState({ selectedLab: labId });
                        // let testIds = this.props.lab_test_data[labId] || []
                        // let tests = testIds.map(x => x.id)
                        // this.props.getLabById(labId, tests)
                    }
                });
            }
        }
    }, {
        key: 'getMetaTagsData',
        value: function getMetaTagsData(seoData) {
            var title = "";
            var description = "";
            if (seoData) {
                title = seoData.title || "";
                description = seoData.description || "";
            }
            return { title: title, description: description };
        }
    }, {
        key: 'render',
        value: function render() {

            var to_render = _react2.default.createElement(_BookingSummary2.default, _extends({}, this.props, { selectedLab: this.state.selectedLab }));
            if (this.state.action_page == 'timings') {
                to_render = _react2.default.createElement(_AppointmentSlot2.default, _extends({}, this.props, { selectedLab: this.state.selectedLab }));
            }
            if (this.state.action_page == 'tests') {
                to_render = _react2.default.createElement(_TestSelector2.default, _extends({}, this.props, { selectedLab: this.state.selectedLab }));
            }

            var seo_url = "";
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
                        canonicalUrl: '' + _config2.default.API_BASE_URL + (seo_url || this.props.match.url)
                    }, noIndex:  false && false }) : "",
                to_render
            );
        }
    }], [{
        key: 'loadData',
        value: function loadData(store, match, queryData) {
            var lab_id_from_url = match.params.id || queryData.lab_id;

            if (lab_id_from_url) {
                return store.dispatch((0, _index.getLabById)(lab_id_from_url));
            } else {
                var url = match.url;
                if (url) {
                    url = url.split("/")[1];
                }
                return new Promise(function (resolve, reject) {
                    store.dispatch((0, _index.getLabByUrl)(url, [], function (labId, url) {
                        if (labId) {
                            resolve({ labId: labId });
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

    var LABS = state.LABS;

    return {
        LABS: LABS, initialServerData: initialServerData
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        getLabById: function getLabById(labId, testIds) {
            return dispatch((0, _index.getLabById)(labId, testIds));
        },
        getLabByUrl: function getLabByUrl(url, testIds, cb) {
            return dispatch((0, _index.getLabByUrl)(url, testIds, cb));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SeoBooking);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9kaWFnbm9zaXMvU2VvQm9va2luZy5qcyJdLCJuYW1lcyI6WyJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJTZW9Cb29raW5nIiwicHJvcHMiLCJwYXJzZWQiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwibGFiX2lkIiwibWF0Y2giLCJwYXJhbXMiLCJpZCIsImdldF9sYWJfaWRfYnlfdXJsIiwidXJsIiwic3RhdGUiLCJzZWxlY3RlZExhYiIsImFjdGlvbl9wYWdlIiwic2VvRnJpZW5kbHkiLCJpbmNsdWRlcyIsImxfaWQiLCJMQUJTIiwibGFiIiwic2V0U3RhdGUiLCJzcGxpdCIsImdldExhYkJ5VXJsIiwibGFiSWQiLCJzZW9EYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRvX3JlbmRlciIsInNlb191cmwiLCJnZXRNZXRhVGFnc0RhdGEiLCJzZW8iLCJjYW5vbmljYWxVcmwiLCJDT05GSUciLCJBUElfQkFTRV9VUkwiLCJzdG9yZSIsInF1ZXJ5RGF0YSIsImxhYl9pZF9mcm9tX3VybCIsImRpc3BhdGNoIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsInBhc3NlZFByb3BzIiwiaW5pdGlhbFNlcnZlckRhdGEiLCJzdGF0aWNDb250ZXh0IiwiZGF0YSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImdldExhYkJ5SWQiLCJ0ZXN0SWRzIiwiY2IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUVBOztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7QUFOQSxJQUFNQSxjQUFjQyxtQkFBT0EsQ0FBQywwREFBUixDQUFwQjs7SUFRTUMsVTs7O0FBQ0Ysd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFB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QkFERyxFQUNHNkI7QUFESCxLQUFQO0FBR0gsQ0FmRDs7QUFpQkEsSUFBTUcscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ2IsUUFBRCxFQUFjO0FBQ3JDLFdBQU87QUFDSGMsb0JBQVksb0JBQUM1QixLQUFELEVBQVE2QixPQUFSO0FBQUEsbUJBQW9CZixTQUFTLHVCQUFXZCxLQUFYLEVBQWtCNkIsT0FBbEIsQ0FBVCxDQUFwQjtBQUFBLFNBRFQ7QUFFSDlCLHFCQUFhLHFCQUFDWCxHQUFELEVBQU15QyxPQUFOLEVBQWVDLEVBQWY7QUFBQSxtQkFBc0JoQixTQUFTLHdCQUFZMUIsR0FBWixFQUFpQnlDLE9BQWpCLEVBQTBCQyxFQUExQixDQUFULENBQXRCO0FBQUE7QUFGVixLQUFQO0FBSUgsQ0FMRDs7a0JBUWUseUJBQVFSLGVBQVIsRUFBeUJLLGtCQUF6QixFQUE2Q2xELFVBQTdDLEMiLCJmaWxlIjoiMTQ1LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi9jb25maWcnXG5cbmltcG9ydCB7IGdldExhYkJ5SWQsIGdldExhYkJ5VXJsIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbmltcG9ydCBEWF9Cb29raW5nU3VtbWFyeSBmcm9tICcuL0Jvb2tpbmdTdW1tYXJ5LmpzJ1xuaW1wb3J0IEFwcG9pbnRtZW50U2xvdCBmcm9tICcuL0FwcG9pbnRtZW50U2xvdC5qcydcbmltcG9ydCBUZXN0U2VsZWN0b3IgZnJvbSAnLi9UZXN0U2VsZWN0b3IuanMnXG5cbmltcG9ydCBIZWxtZXRUYWdzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9IZWxtZXRUYWdzJ1xuXG5jbGFzcyBTZW9Cb29raW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcblxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblxuICAgICAgICBsZXQgbGFiX2lkID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQgfHwgcGFyc2VkLmxhYl9pZCB8fCB0aGlzLmdldF9sYWJfaWRfYnlfdXJsKHRoaXMucHJvcHMubWF0Y2gudXJsKVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZWxlY3RlZExhYjogbGFiX2lkLFxuICAgICAgICAgICAgYWN0aW9uX3BhZ2U6IHBhcnNlZC5hY3Rpb25fcGFnZSxcbiAgICAgICAgICAgIHNlb0ZyaWVuZGx5OiB0aGlzLnByb3BzLm1hdGNoLnVybC5pbmNsdWRlcygnLWxwcCcpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGdldF9sYWJfaWRfYnlfdXJsKHVybCkge1xuICAgICAgICBmb3IgKGxldCBsX2lkIGluIHRoaXMucHJvcHMuTEFCUykge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuTEFCU1tsX2lkXS5sYWIgJiYgdXJsLmluY2x1ZGVzKHRoaXMucHJvcHMuTEFCU1tsX2lkXS5sYWIudXJsKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsX2lkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZERhdGEoc3RvcmUsIG1hdGNoLCBxdWVyeURhdGEpIHtcbiAgICAgICAgbGV0IGxhYl9pZF9mcm9tX3VybCA9IG1hdGNoLnBhcmFtcy5pZCB8fCBxdWVyeURhdGEubGFiX2lkXG5cbiAgICAgICAgaWYgKGxhYl9pZF9mcm9tX3VybCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGdldExhYkJ5SWQobGFiX2lkX2Zyb21fdXJsKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB1cmwgPSBtYXRjaC51cmxcbiAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSB1cmwuc3BsaXQoXCIvXCIpWzFdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGdldExhYkJ5VXJsKHVybCwgW10sIChsYWJJZCwgdXJsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYWJJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7IGxhYklkIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHByb3BzLmxvY2F0aW9uLnNlYXJjaClcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY3Rpb25fcGFnZSAhPSBwYXJzZWQuYWN0aW9uX3BhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3Rpb25fcGFnZTogcGFyc2VkLmFjdGlvbl9wYWdlIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnNlbGVjdGVkTGFiICYmIHRoaXMuc3RhdGUuc2VvRnJpZW5kbHkpIHtcbiAgICAgICAgICAgIGxldCB1cmwgPSB0aGlzLnByb3BzLm1hdGNoLnVybFxuICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICAgIHVybCA9IHVybC5zcGxpdChcIi9cIilbMV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0TGFiQnlVcmwodXJsLCBbXSwgKGxhYklkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGxhYklkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZExhYjogbGFiSWQgfSlcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHRlc3RJZHMgPSB0aGlzLnByb3BzLmxhYl90ZXN0X2RhdGFbbGFiSWRdIHx8IFtdXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCB0ZXN0cyA9IHRlc3RJZHMubWFwKHggPT4geC5pZClcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5nZXRMYWJCeUlkKGxhYklkLCB0ZXN0cylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcm91dGVyOiAoKSA9PiBudWxsXG4gICAgfVxuXG4gICAgZ2V0TWV0YVRhZ3NEYXRhKHNlb0RhdGEpIHtcbiAgICAgICAgbGV0IHRpdGxlID0gXCJcIlxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBcIlwiXG4gICAgICAgIGlmIChzZW9EYXRhKSB7XG4gICAgICAgICAgICB0aXRsZSA9IHNlb0RhdGEudGl0bGUgfHwgXCJcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBzZW9EYXRhLmRlc2NyaXB0aW9uIHx8IFwiXCJcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24gfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgdG9fcmVuZGVyID0gPERYX0Jvb2tpbmdTdW1tYXJ5IHsuLi50aGlzLnByb3BzfSBzZWxlY3RlZExhYj17dGhpcy5zdGF0ZS5zZWxlY3RlZExhYn0gLz5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aW9uX3BhZ2UgPT0gJ3RpbWluZ3MnKSB7XG4gICAgICAgICAgICB0b19yZW5kZXIgPSA8QXBwb2ludG1lbnRTbG90IHsuLi50aGlzLnByb3BzfSBzZWxlY3RlZExhYj17dGhpcy5zdGF0ZS5zZWxlY3RlZExhYn0gLz5cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY3Rpb25fcGFnZSA9PSAndGVzdHMnKSB7XG4gICAgICAgICAgICB0b19yZW5kZXIgPSA8VGVzdFNlbGVjdG9yIHsuLi50aGlzLnByb3BzfSBzZWxlY3RlZExhYj17dGhpcy5zdGF0ZS5zZWxlY3RlZExhYn0gLz5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgbGV0IHNlb191cmwgPSBcIlwiXG4gICAgICAgIGlmICh0aGlzLnByb3BzLkxBQlNbdGhpcy5zdGF0ZS5zZWxlY3RlZExhYl0pIHtcbiAgICAgICAgICAgIHNlb191cmwgPSB0aGlzLnByb3BzLkxBQlNbdGhpcy5zdGF0ZS5zZWxlY3RlZExhYl0ubGFiLnVybFxuICAgICAgICAgICAgaWYgKHNlb191cmwpIHtcbiAgICAgICAgICAgICAgICBzZW9fdXJsID0gXCIvXCIgKyBzZW9fdXJsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5MQUJTICYmIHRoaXMucHJvcHMuTEFCU1t0aGlzLnN0YXRlLnNlbGVjdGVkTGFiXSA/IDxIZWxtZXRUYWdzIHRhZ3NEYXRhPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5nZXRNZXRhVGFnc0RhdGEodGhpcy5wcm9wcy5MQUJTW3RoaXMuc3RhdGUuc2VsZWN0ZWRMYWJdLmxhYi5zZW8pLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZ2V0TWV0YVRhZ3NEYXRhKHRoaXMucHJvcHMuTEFCU1t0aGlzLnN0YXRlLnNlbGVjdGVkTGFiXS5sYWIuc2VvKS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbm9uaWNhbFVybDogYCR7Q09ORklHLkFQSV9CQVNFX1VSTH0ke3Nlb191cmwgfHwgdGhpcy5wcm9wcy5tYXRjaC51cmx9YFxuICAgICAgICAgICAgICAgICAgICB9fSBub0luZGV4PXtmYWxzZSAmJiAhdGhpcy5zdGF0ZS5zZW9GcmllbmRseX0gLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICB7dG9fcmVuZGVyfVxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwYXNzZWRQcm9wcykgPT4ge1xuICAgIC8qKlxuICAgICAqIGluaXRpYWxTZXJ2ZXJEYXRhIGlzIHNlcnZlciByZW5kZXJlZCBhc3luYyBkYXRhIHJlcXVpcmVkIGJ1aWxkIGh0bWwgb24gc2VydmVyLiBcbiAgICAgKi9cbiAgICBsZXQgaW5pdGlhbFNlcnZlckRhdGEgPSBudWxsXG4gICAgbGV0IHsgc3RhdGljQ29udGV4dCB9ID0gcGFzc2VkUHJvcHNcbiAgICBpZiAoc3RhdGljQ29udGV4dCAmJiBzdGF0aWNDb250ZXh0LmRhdGEpIHtcbiAgICAgICAgaW5pdGlhbFNlcnZlckRhdGEgPSBzdGF0aWNDb250ZXh0LmRhdGFcbiAgICB9XG5cbiAgICBsZXQgTEFCUyA9IHN0YXRlLkxBQlNcblxuICAgIHJldHVybiB7XG4gICAgICAgIExBQlMsIGluaXRpYWxTZXJ2ZXJEYXRhXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRMYWJCeUlkOiAobGFiSWQsIHRlc3RJZHMpID0+IGRpc3BhdGNoKGdldExhYkJ5SWQobGFiSWQsIHRlc3RJZHMpKSxcbiAgICAgICAgZ2V0TGFiQnlVcmw6ICh1cmwsIHRlc3RJZHMsIGNiKSA9PiBkaXNwYXRjaChnZXRMYWJCeVVybCh1cmwsIHRlc3RJZHMsIGNiKSksXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNlb0Jvb2tpbmcpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==