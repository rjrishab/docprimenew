exports.ids = [109];
exports.modules = {

/***/ "./dev/js/components/commons/Home/staticDisclaimer.js":
/*!************************************************************!*\
  !*** ./dev/js/components/commons/Home/staticDisclaimer.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ({ isVip }) => {
    return _react2.default.createElement(
        'div',
        { className: `dsclmer-ftr ${isVip ? 'margin-bottom-55' : ''}` },
        _react2.default.createElement(
            'p',
            { className: 'fw-500 mrt-20', style: { color: '#8a8a8a', fontSize: 10 } },
            'The Website is not intended to be used in case of a medical emergency and/ or critical care and the user should directly contact his/ her medical service provider for Physical Examination. Docprime is solely a technology partner.'
        ),
        _react2.default.createElement(
            'div',
            { className: 'col-12 footer-new-copyrght', style: { paddingBottom: 5 } },
            _react2.default.createElement(
                'p',
                null,
                'Docprime.com Copyright \xA9 2020.'
            ),
            _react2.default.createElement(
                'p',
                null,
                'All rights reserved.'
            ),
            _react2.default.createElement(
                'p',
                null,
                'DOCPRIME TECHNOLOGIES PRIVATE LIMITED'
            ),
            _react2.default.createElement(
                'p',
                null,
                'CIN : U74999HR2016PTC064312'
            )
        )
    );
};

/***/ }),

/***/ "./dev/js/containers/commons/MyRatings.js":
/*!************************************************!*\
  !*** ./dev/js/containers/commons/MyRatings.js ***!
  \************************************************/
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

var _userReviews = __webpack_require__(/*! ../../components/commons/userProfile/userReviews */ "./dev/js/components/commons/userProfile/userReviews/index.js");

var _userReviews2 = _interopRequireDefault(_userReviews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MyRatings extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return _react2.default.createElement(_userReviews2.default, this.props);
    }
}

MyRatings.contextTypes = {
    router: () => null
};
const mapStateToProps = (state, passedProps) => {
    /**
     * initialServerData is server rendered async data required build html on server. 
     */
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        getUserReviews: cb => dispatch((0, _index.getUserReviews)(cb)),
        getRatingCompliments: callback => dispatch((0, _index.getRatingCompliments)(callback)),
        updateAppointmentRating: (ratingData, callback) => dispatch((0, _index.updateAppointmentRating)(ratingData, callback)),
        OTTLogin: (ott, user_id) => dispatch((0, _index.OTTLogin)(ott, user_id))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MyRatings);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9jb21tb25zL015UmF0aW5ncy5qcyJdLCJuYW1lcyI6WyJpc1ZpcCIsImNvbG9yIiwiZm9udFNpemUiLCJwYWRkaW5nQm90dG9tIiwiTXlSYXRpbmdzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwiY29udGV4dFR5cGVzIiwicm91dGVyIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJwYXNzZWRQcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiZ2V0VXNlclJldmlld3MiLCJjYiIsImdldFJhdGluZ0NvbXBsaW1lbnRzIiwiY2FsbGJhY2siLCJ1cGRhdGVBcHBvaW50bWVudFJhdGluZyIsInJhdGluZ0RhdGEiLCJPVFRMb2dpbiIsIm90dCIsInVzZXJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztrQkFDZSxDQUFDLEVBQUVBLEtBQUYsRUFBRCxLQUFlO0FBQzdCLFdBQVE7QUFBQTtBQUFBLFVBQUssV0FBWSxlQUFjQSxRQUFNLGtCQUFOLEdBQXlCLEVBQUcsRUFBM0Q7QUFDTztBQUFBO0FBQUEsY0FBRyxXQUFVLGVBQWIsRUFBNkIsT0FBTyxFQUFFQyxPQUFPLFNBQVQsRUFBb0JDLFVBQVUsRUFBOUIsRUFBcEM7QUFBQTtBQUFBLFNBRFA7QUFFTztBQUFBO0FBQUEsY0FBSyxXQUFVLDRCQUFmLEVBQTRDLE9BQU8sRUFBRUMsZUFBZSxDQUFqQixFQUFuRDtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUZQLEtBQVI7QUFTQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYRDs7OztBQUNBOztBQUVBOztBQUVBOzs7Ozs7QUFHQSxNQUFNQyxTQUFOLFNBQXdCQyxnQkFBTUMsU0FBOUIsQ0FBd0M7QUFDcENDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNIOztBQU1EQyxhQUFTO0FBQ0wsZUFDSSw4QkFBQyxxQkFBRCxFQUFnQixLQUFLRCxLQUFyQixDQURKO0FBR0g7QUFibUM7O0FBQWxDSixTLENBS0tNLFksR0FBZTtBQUNsQkMsWUFBUSxNQUFNO0FBREksQztBQVcxQixNQUFNQyxrQkFBa0IsQ0FBQ0MsS0FBRCxFQUFRQyxXQUFSLEtBQXdCO0FBQzVDOzs7QUFHQSxXQUFPLEVBQVA7QUFHSCxDQVBEOztBQVNBLE1BQU1DLHFCQUFzQkMsUUFBRCxJQUFjO0FBQ3JDLFdBQU87QUFDSEMsd0JBQWlCQyxFQUFELElBQVFGLFNBQVMsMkJBQWVFLEVBQWYsQ0FBVCxDQURyQjtBQUVIQyw4QkFBdUJDLFFBQUQsSUFBY0osU0FBUyxpQ0FBcUJJLFFBQXJCLENBQVQsQ0FGakM7QUFHSEMsaUNBQXlCLENBQUNDLFVBQUQsRUFBYUYsUUFBYixLQUEwQkosU0FBUyxvQ0FBd0JNLFVBQXhCLEVBQW9DRixRQUFwQyxDQUFULENBSGhEO0FBSUhHLGtCQUFVLENBQUNDLEdBQUQsRUFBS0MsT0FBTCxLQUFpQlQsU0FBUyxxQkFBU1EsR0FBVCxFQUFhQyxPQUFiLENBQVQ7QUFKeEIsS0FBUDtBQU1ILENBUEQ7O2tCQVVlLHlCQUFRYixlQUFSLEVBQXlCRyxrQkFBekIsRUFBNkNYLFNBQTdDLEMiLCJmaWxlIjoiMTA5LnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmV4cG9ydCBkZWZhdWx0ICh7IGlzVmlwIH0pID0+IHtcblx0cmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17YGRzY2xtZXItZnRyICR7aXNWaXA/J21hcmdpbi1ib3R0b20tNTUnOicnfWB9PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMjBcIiBzdHlsZT17eyBjb2xvcjogJyM4YThhOGEnLCBmb250U2l6ZTogMTAgfX0gPlRoZSBXZWJzaXRlIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGluIGNhc2Ugb2YgYSBtZWRpY2FsIGVtZXJnZW5jeSBhbmQvIG9yIGNyaXRpY2FsIGNhcmUgYW5kIHRoZSB1c2VyIHNob3VsZCBkaXJlY3RseSBjb250YWN0IGhpcy8gaGVyIG1lZGljYWwgc2VydmljZSBwcm92aWRlciBmb3IgUGh5c2ljYWwgRXhhbWluYXRpb24uIERvY3ByaW1lIGlzIHNvbGVseSBhIHRlY2hub2xvZ3kgcGFydG5lci48L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZm9vdGVyLW5ldy1jb3B5cmdodFwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDUgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8cD5Eb2NwcmltZS5jb20gQ29weXJpZ2h0ICZjb3B5OyAyMDIwLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+QWxsIHJpZ2h0cyByZXNlcnZlZC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRPQ1BSSU1FIFRFQ0hOT0xPR0lFUyBQUklWQVRFIExJTUlURUQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkNJTiA6IFU3NDk5OUhSMjAxNlBUQzA2NDMxMjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2Pilcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgZ2V0VXNlclJldmlld3MsIGdldFJhdGluZ0NvbXBsaW1lbnRzLCB1cGRhdGVBcHBvaW50bWVudFJhdGluZywgT1RUTG9naW4gfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuXG5pbXBvcnQgVXNlclJldmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvdXNlclByb2ZpbGUvdXNlclJldmlld3MnXG5cblxuY2xhc3MgTXlSYXRpbmdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICByb3V0ZXI6ICgpID0+IG51bGxcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VXNlclJldmlldyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcGFzc2VkUHJvcHMpID0+IHtcbiAgICAvKipcbiAgICAgKiBpbml0aWFsU2VydmVyRGF0YSBpcyBzZXJ2ZXIgcmVuZGVyZWQgYXN5bmMgZGF0YSByZXF1aXJlZCBidWlsZCBodG1sIG9uIHNlcnZlci4gXG4gICAgICovXG4gICAgcmV0dXJuIHtcblxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0VXNlclJldmlld3M6IChjYikgPT4gZGlzcGF0Y2goZ2V0VXNlclJldmlld3MoY2IpKSxcbiAgICAgICAgZ2V0UmF0aW5nQ29tcGxpbWVudHM6IChjYWxsYmFjaykgPT4gZGlzcGF0Y2goZ2V0UmF0aW5nQ29tcGxpbWVudHMoY2FsbGJhY2spKSxcbiAgICAgICAgdXBkYXRlQXBwb2ludG1lbnRSYXRpbmc6IChyYXRpbmdEYXRhLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2godXBkYXRlQXBwb2ludG1lbnRSYXRpbmcocmF0aW5nRGF0YSwgY2FsbGJhY2spKSxcbiAgICAgICAgT1RUTG9naW46IChvdHQsdXNlcl9pZCkgPT4gZGlzcGF0Y2goT1RUTG9naW4ob3R0LHVzZXJfaWQpKSxcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTXlSYXRpbmdzKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=