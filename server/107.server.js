exports.ids = [107];
exports.modules = {

/***/ "./dev/js/components/diagnosis/searchCriteria/SearchCriteriaView.js":
/*!**************************************************************************!*\
  !*** ./dev/js/components/diagnosis/searchCriteria/SearchCriteriaView.js ***!
  \**************************************************************************/
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

var _index = __webpack_require__(/*! ../../commons/commonlySearched/index.js */ "./dev/js/components/commons/commonlySearched/index.js");

var _index2 = _interopRequireDefault(_index);

var _criteriaSearch = __webpack_require__(/*! ../../commons/criteriaSearch */ "./dev/js/components/commons/criteriaSearch/index.js");

var _criteriaSearch2 = _interopRequireDefault(_criteriaSearch);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SearchCriteriaView extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            focusInput: 0
        };
    }

    componentDidMount() {
        if (window) {
            window.scrollTo(0, 0);
        }
    }

    componentWillReceiveProps(props) {
        if (props.locationType && props.locationType != "geo") {
            this.setState({ focusInput: 0 });
        }
    }

    searchProceed(lab_name = "") {
        // handle doctor name, hospital name
        this.props.mergeLABState({
            filterCriteria: _extends({}, this.props.filterCriteria, {
                lab_name
            })
        }, true);
        this.props.history.push('/lab/searchresults');
    }

    showLabs() {
        if (this.props.locationType == "geo") {
            this.setState({ focusInput: 1 });
            if (window) {
                window.scrollTo(0, 0);
            }
            return null;
        }
        this.searchProceed("");
    }

    render() {

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('div', { id: 'map', style: { display: 'none' } }),
            _react2.default.createElement(
                _criteriaSearch2.default,
                _extends({}, this.props, { checkForLoad: this.props.LOADED_SEARCH_CRITERIA_LAB, title: 'Search for tests or lab', paddingTopClass: true, searchProceed: this.searchProceed.bind(this) }),
                _react2.default.createElement(
                    'section',
                    { className: 'opd-search-section mbl-pdng-zero' },
                    this.state.focusInput ? _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'p',
                            { className: 'location-error-msg' },
                            'Please Select Location'
                        )
                    ) : '',
                    this.props.selectedCriterias && this.props.selectedCriterias.length > 0 ? _react2.default.createElement(_index2.default, {
                        heading: `View Selected (${this.props.selectedCriterias.length})`,
                        data: this.props.selectedCriterias,
                        selected: [],
                        selectedPills: true,
                        toggle: this.props.toggleDiagnosisCriteria.bind(this)
                    }) : "",
                    _react2.default.createElement(_index2.default, {
                        heading: 'Common Test',
                        type: 'test',
                        data: this.props.common_tests,
                        selected: this.props.selectedCriterias.filter(x => x.type == 'test'),
                        toggle: this.props.toggleDiagnosisCriteria.bind(this)
                    }),
                    _react2.default.createElement(
                        'button',
                        { onClick: this.showLabs.bind(this), className: 'v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round text-lg static-btn' },
                        'Show Labs'
                    )
                )
            )
        );
    }
}

exports.default = SearchCriteriaView;

/***/ }),

/***/ "./dev/js/components/diagnosis/searchCriteria/index.js":
/*!*************************************************************!*\
  !*** ./dev/js/components/diagnosis/searchCriteria/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SearchCriteriaView = __webpack_require__(/*! ./SearchCriteriaView.js */ "./dev/js/components/diagnosis/searchCriteria/SearchCriteriaView.js");

var _SearchCriteriaView2 = _interopRequireDefault(_SearchCriteriaView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SearchCriteriaView2.default;

/***/ }),

/***/ "./dev/js/containers/diagnosis/SearchCriteria.js":
/*!*******************************************************!*\
  !*** ./dev/js/containers/diagnosis/SearchCriteria.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _index2 = __webpack_require__(/*! ../../components/diagnosis/searchCriteria/index.js */ "./dev/js/components/diagnosis/searchCriteria/index.js");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SearchCriteria extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    // static loadData(store) {
    //     return store.dispatch(loadLabCommonCriterias())
    // }

    componentDidMount() {
        this.props.loadLabCommonCriterias();
        this.props.resetFilters();
        this.props.clearExtraTests();
    }

    render() {
        return _react2.default.createElement(_index3.default, this.props);
    }
}

SearchCriteria.contextTypes = {
    router: () => null
};
const mapStateToProps = state => {

    const {
        LOADED_SEARCH_CRITERIA_LAB,
        common_tests,
        common_conditions,
        preferred_labs,
        selectedCriterias,
        selectedLocation,
        filterCriteria,
        locationType
    } = state.SEARCH_CRITERIA_LABS;

    return {
        LOADED_SEARCH_CRITERIA_LAB,
        common_tests,
        common_conditions,
        preferred_labs,
        selectedCriterias,
        selectedLocation,
        filterCriteria,
        locationType
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadLabCommonCriterias: () => dispatch((0, _index.loadLabCommonCriterias)()),
        toggleDiagnosisCriteria: (type, criteria) => dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria)),
        getDiagnosisCriteriaResults: (searchString, callback) => dispatch((0, _index.getDiagnosisCriteriaResults)(searchString, callback)),
        resetFilters: () => dispatch((0, _index.resetFilters)()),
        clearExtraTests: () => dispatch((0, _index.clearExtraTests)()),
        clearAllTests: () => dispatch((0, _index.clearAllTests)()),
        mergeLABState: (state, fetchNewResults) => dispatch((0, _index.mergeLABState)(state, fetchNewResults))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SearchCriteria);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvc2VhcmNoQ3JpdGVyaWEvU2VhcmNoQ3JpdGVyaWFWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9zZWFyY2hDcml0ZXJpYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9kaWFnbm9zaXMvU2VhcmNoQ3JpdGVyaWEuanMiXSwibmFtZXMiOlsiU2VhcmNoQ3JpdGVyaWFWaWV3IiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJmb2N1c0lucHV0IiwiY29tcG9uZW50RGlkTW91bnQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJsb2NhdGlvblR5cGUiLCJzZXRTdGF0ZSIsInNlYXJjaFByb2NlZWQiLCJsYWJfbmFtZSIsIm1lcmdlTEFCU3RhdGUiLCJmaWx0ZXJDcml0ZXJpYSIsImhpc3RvcnkiLCJwdXNoIiwic2hvd0xhYnMiLCJyZW5kZXIiLCJkaXNwbGF5IiwiTE9BREVEX1NFQVJDSF9DUklURVJJQV9MQUIiLCJiaW5kIiwic2VsZWN0ZWRDcml0ZXJpYXMiLCJsZW5ndGgiLCJ0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSIsImNvbW1vbl90ZXN0cyIsImZpbHRlciIsIngiLCJ0eXBlIiwiU2VhcmNoQ3JpdGVyaWEiLCJsb2FkTGFiQ29tbW9uQ3JpdGVyaWFzIiwicmVzZXRGaWx0ZXJzIiwiY2xlYXJFeHRyYVRlc3RzIiwiY29udGV4dFR5cGVzIiwicm91dGVyIiwibWFwU3RhdGVUb1Byb3BzIiwiY29tbW9uX2NvbmRpdGlvbnMiLCJwcmVmZXJyZWRfbGFicyIsInNlbGVjdGVkTG9jYXRpb24iLCJTRUFSQ0hfQ1JJVEVSSUFfTEFCUyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY3JpdGVyaWEiLCJnZXREaWFnbm9zaXNDcml0ZXJpYVJlc3VsdHMiLCJzZWFyY2hTdHJpbmciLCJjYWxsYmFjayIsImNsZWFyQWxsVGVzdHMiLCJmZXRjaE5ld1Jlc3VsdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsTUFBTUEsa0JBQU4sU0FBaUNDLGdCQUFNQyxTQUF2QyxDQUFpRDtBQUM3Q0MsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0EsYUFBS0MsS0FBTCxHQUFhO0FBQ1RDLHdCQUFZO0FBREgsU0FBYjtBQUdIOztBQUVEQyx3QkFBb0I7QUFDaEIsWUFBSUMsTUFBSixFQUFZO0FBQ1JBLG1CQUFPQyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0g7QUFDSjs7QUFFREMsOEJBQTBCTixLQUExQixFQUFpQztBQUM3QixZQUFJQSxNQUFNTyxZQUFOLElBQXNCUCxNQUFNTyxZQUFOLElBQXNCLEtBQWhELEVBQXVEO0FBQ25ELGlCQUFLQyxRQUFMLENBQWMsRUFBRU4sWUFBWSxDQUFkLEVBQWQ7QUFDSDtBQUNKOztBQUVETyxrQkFBY0MsV0FBVyxFQUF6QixFQUE2QjtBQUN6QjtBQUNBLGFBQUtWLEtBQUwsQ0FBV1csYUFBWCxDQUF5QjtBQUNyQkMseUNBQ08sS0FBS1osS0FBTCxDQUFXWSxjQURsQjtBQUVJRjtBQUZKO0FBRHFCLFNBQXpCLEVBS0csSUFMSDtBQU1BLGFBQUtWLEtBQUwsQ0FBV2EsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0Isb0JBQXhCO0FBQ0g7O0FBRURDLGVBQVc7QUFDUCxZQUFJLEtBQUtmLEtBQUwsQ0FBV08sWUFBWCxJQUEyQixLQUEvQixFQUFzQztBQUNsQyxpQkFBS0MsUUFBTCxDQUFjLEVBQUVOLFlBQVksQ0FBZCxFQUFkO0FBQ0EsZ0JBQUlFLE1BQUosRUFBWTtBQUNSQSx1QkFBT0MsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNIO0FBQ0QsbUJBQU8sSUFB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QU1IZ0Isd0JBTkc7QUFPSHhCLHNCQVBHO0FBUUhMO0FBUkcsS0FBUDtBQVVILENBdkJEOztBQXlCQSxNQUFNK0IscUJBQXNCQyxRQUFELElBQWM7QUFDckMsV0FBTztBQUNIWCxnQ0FBd0IsTUFBTVcsU0FBUyxvQ0FBVCxDQUQzQjtBQUVIakIsaUNBQXlCLENBQUNJLElBQUQsRUFBT2MsUUFBUCxLQUFvQkQsU0FBUyxvQ0FBd0JiLElBQXhCLEVBQThCYyxRQUE5QixDQUFULENBRjFDO0FBR0hDLHFDQUE2QixDQUFDQyxZQUFELEVBQWVDLFFBQWYsS0FBNEJKLFNBQVMsd0NBQTRCRyxZQUE1QixFQUEwQ0MsUUFBMUMsQ0FBVCxDQUh0RDtBQUlIZCxzQkFBYyxNQUFNVSxTQUFTLDBCQUFULENBSmpCO0FBS0hULHlCQUFpQixNQUFNUyxTQUFTLDZCQUFULENBTHBCO0FBTUhLLHVCQUFlLE1BQU1MLFNBQVMsMkJBQVQsQ0FObEI7QUFPSDVCLHVCQUFlLENBQUNWLEtBQUQsRUFBUTRDLGVBQVIsS0FBNEJOLFNBQVMsMEJBQWN0QyxLQUFkLEVBQXFCNEMsZUFBckIsQ0FBVDtBQVB4QyxLQUFQO0FBU0gsQ0FWRDs7a0JBYWUseUJBQVFaLGVBQVIsRUFBeUJLLGtCQUF6QixFQUE2Q1gsY0FBN0MsQyIsImZpbGUiOiIxMDcuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBDb21tb25seVNlYXJjaGVkIGZyb20gJy4uLy4uL2NvbW1vbnMvY29tbW9ubHlTZWFyY2hlZC9pbmRleC5qcydcbmltcG9ydCBDcml0ZXJpYVNlYXJjaCBmcm9tICcuLi8uLi9jb21tb25zL2NyaXRlcmlhU2VhcmNoJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuY2xhc3MgU2VhcmNoQ3JpdGVyaWFWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZvY3VzSW5wdXQ6IDBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLmxvY2F0aW9uVHlwZSAmJiBwcm9wcy5sb2NhdGlvblR5cGUgIT0gXCJnZW9cIikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzSW5wdXQ6IDAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlYXJjaFByb2NlZWQobGFiX25hbWUgPSBcIlwiKSB7XG4gICAgICAgIC8vIGhhbmRsZSBkb2N0b3IgbmFtZSwgaG9zcGl0YWwgbmFtZVxuICAgICAgICB0aGlzLnByb3BzLm1lcmdlTEFCU3RhdGUoe1xuICAgICAgICAgICAgZmlsdGVyQ3JpdGVyaWE6IHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLmZpbHRlckNyaXRlcmlhLFxuICAgICAgICAgICAgICAgIGxhYl9uYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbGFiL3NlYXJjaHJlc3VsdHMnKVxuICAgIH1cblxuICAgIHNob3dMYWJzKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvblR5cGUgPT0gXCJnZW9cIikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzSW5wdXQ6IDEgfSlcbiAgICAgICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWFyY2hQcm9jZWVkKFwiXCIpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtYXBcIiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPENyaXRlcmlhU2VhcmNoIHsuLi50aGlzLnByb3BzfSBjaGVja0ZvckxvYWQ9e3RoaXMucHJvcHMuTE9BREVEX1NFQVJDSF9DUklURVJJQV9MQUJ9IHRpdGxlPVwiU2VhcmNoIGZvciB0ZXN0cyBvciBsYWJcIiBwYWRkaW5nVG9wQ2xhc3M9e3RydWV9IHNlYXJjaFByb2NlZWQ9e3RoaXMuc2VhcmNoUHJvY2VlZC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwib3BkLXNlYXJjaC1zZWN0aW9uIG1ibC1wZG5nLXplcm9cIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZm9jdXNJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsb2NhdGlvbi1lcnJvci1tc2dcIj5QbGVhc2UgU2VsZWN0IExvY2F0aW9uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuc2VsZWN0ZWRDcml0ZXJpYXMgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhcy5sZW5ndGggPiAwKSA/IDxDb21tb25seVNlYXJjaGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9e2BWaWV3IFNlbGVjdGVkICgke3RoaXMucHJvcHMuc2VsZWN0ZWRDcml0ZXJpYXMubGVuZ3RofSlgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXt0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17W119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUGlsbHM9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZT17dGhpcy5wcm9wcy50b2dnbGVEaWFnbm9zaXNDcml0ZXJpYS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29tbW9ubHlTZWFyY2hlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9XCJDb21tb24gVGVzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRlc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMucHJvcHMuY29tbW9uX3Rlc3RzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAndGVzdCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZT17dGhpcy5wcm9wcy50b2dnbGVEaWFnbm9zaXNDcml0ZXJpYS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNob3dMYWJzLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cInYtYnRuIHAtMyB2LWJ0bi1wcmltYXJ5IGJ0bi1sZyBmaXhlZCBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCB0ZXh0LWxnIHN0YXRpYy1idG5cIj5TaG93IExhYnM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvQ3JpdGVyaWFTZWFyY2g+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQ3JpdGVyaWFWaWV3XG4iLCJpbXBvcnQgU2VhcmNoQ3JpdGVyaWFWaWV3IGZyb20gJy4vU2VhcmNoQ3JpdGVyaWFWaWV3LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hDcml0ZXJpYVZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgbWVyZ2VMQUJTdGF0ZSwgY2xlYXJBbGxUZXN0cywgcmVzZXRGaWx0ZXJzLCBsb2FkTGFiQ29tbW9uQ3JpdGVyaWFzLCB0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSwgZ2V0RGlhZ25vc2lzQ3JpdGVyaWFSZXN1bHRzLCBjbGVhckV4dHJhVGVzdHMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IFNlYXJjaENyaXRlcmlhVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2RpYWdub3Npcy9zZWFyY2hDcml0ZXJpYS9pbmRleC5qcydcblxuY2xhc3MgU2VhcmNoQ3JpdGVyaWEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIC8vIHN0YXRpYyBsb2FkRGF0YShzdG9yZSkge1xuICAgIC8vICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2gobG9hZExhYkNvbW1vbkNyaXRlcmlhcygpKVxuICAgIC8vIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLmxvYWRMYWJDb21tb25Dcml0ZXJpYXMoKVxuICAgICAgICB0aGlzLnByb3BzLnJlc2V0RmlsdGVycygpXG4gICAgICAgIHRoaXMucHJvcHMuY2xlYXJFeHRyYVRlc3RzKClcbiAgICB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICByb3V0ZXI6ICgpID0+IG51bGxcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U2VhcmNoQ3JpdGVyaWFWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICApXG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcblxuICAgIGNvbnN0IHtcbiAgICAgICAgTE9BREVEX1NFQVJDSF9DUklURVJJQV9MQUIsXG4gICAgICAgIGNvbW1vbl90ZXN0cyxcbiAgICAgICAgY29tbW9uX2NvbmRpdGlvbnMsXG4gICAgICAgIHByZWZlcnJlZF9sYWJzLFxuICAgICAgICBzZWxlY3RlZENyaXRlcmlhcyxcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgIGxvY2F0aW9uVHlwZVxuICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfTEFCU1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgTE9BREVEX1NFQVJDSF9DUklURVJJQV9MQUIsXG4gICAgICAgIGNvbW1vbl90ZXN0cyxcbiAgICAgICAgY29tbW9uX2NvbmRpdGlvbnMsXG4gICAgICAgIHByZWZlcnJlZF9sYWJzLFxuICAgICAgICBzZWxlY3RlZENyaXRlcmlhcyxcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgIGxvY2F0aW9uVHlwZVxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZExhYkNvbW1vbkNyaXRlcmlhczogKCkgPT4gZGlzcGF0Y2gobG9hZExhYkNvbW1vbkNyaXRlcmlhcygpKSxcbiAgICAgICAgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWE6ICh0eXBlLCBjcml0ZXJpYSkgPT4gZGlzcGF0Y2godG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEodHlwZSwgY3JpdGVyaWEpKSxcbiAgICAgICAgZ2V0RGlhZ25vc2lzQ3JpdGVyaWFSZXN1bHRzOiAoc2VhcmNoU3RyaW5nLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2goZ2V0RGlhZ25vc2lzQ3JpdGVyaWFSZXN1bHRzKHNlYXJjaFN0cmluZywgY2FsbGJhY2spKSxcbiAgICAgICAgcmVzZXRGaWx0ZXJzOiAoKSA9PiBkaXNwYXRjaChyZXNldEZpbHRlcnMoKSksXG4gICAgICAgIGNsZWFyRXh0cmFUZXN0czogKCkgPT4gZGlzcGF0Y2goY2xlYXJFeHRyYVRlc3RzKCkpLFxuICAgICAgICBjbGVhckFsbFRlc3RzOiAoKSA9PiBkaXNwYXRjaChjbGVhckFsbFRlc3RzKCkpLFxuICAgICAgICBtZXJnZUxBQlN0YXRlOiAoc3RhdGUsIGZldGNoTmV3UmVzdWx0cykgPT4gZGlzcGF0Y2gobWVyZ2VMQUJTdGF0ZShzdGF0ZSwgZmV0Y2hOZXdSZXN1bHRzKSlcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2VhcmNoQ3JpdGVyaWEpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==