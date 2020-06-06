exports.ids = [19];
exports.modules = {

/***/ "./dev/js/components/commons/ratingsProfileView/RatingGraph.js":
/*!*********************************************************************!*\
  !*** ./dev/js/components/commons/ratingsProfileView/RatingGraph.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _RatingStars = __webpack_require__(/*! ./RatingStars */ "./dev/js/components/commons/ratingsProfileView/RatingStars.js");

var _RatingStars2 = _interopRequireDefault(_RatingStars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RatingGraph extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    getRatingPercent(key) {
        return { 'width': key['percent'] + '%' };
    }

    render() {
        if (typeof this.props.details.rating_graph != "undefined" && this.props.details.rating_graph != null && this.props.details.rating_graph) {
            let fivestar_progress = this.props.details.rating_graph.star_count[5];
            let fourstar_progress = this.props.details.rating_graph.star_count[4];
            let threestar_progress = this.props.details.rating_graph.star_count[3];
            let twostar_progress = this.props.details.rating_graph.star_count[2];
            let onestar_progress = this.props.details.rating_graph.star_count[1];

            return _react2.default.createElement(
                "div",
                { className: "feed-back-container" },
                _react2.default.createElement(
                    "div",
                    { className: "row flx-center" },
                    _react2.default.createElement(
                        "div",
                        { className: "col-4" },
                        this.props.details.rating_graph && this.props.details.rating_graph.avg_rating ? _react2.default.createElement(_RatingStars2.default, { average_rating: this.props.details.rating_graph.avg_rating, width: "12px", height: "12px", justifyCenter: true }) : '',
                        _react2.default.createElement(
                            "div",
                            { className: "feedback-rating-text" },
                            _react2.default.createElement(
                                "p",
                                { className: "feedback-rate" },
                                this.props.details.rating_graph.avg_rating
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "feedback-rate-status" },
                                this.props.details.rating_graph.rating_count,
                                " ratings and",
                                _react2.default.createElement(
                                    "span",
                                    null,
                                    this.props.details.rating_graph.review_count,
                                    " reviews"
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "col-7 border-lft" },
                        _react2.default.createElement(
                            "div",
                            { className: "feed-status-container" },
                            _react2.default.createElement(
                                "span",
                                { className: "feed-progress-point" },
                                "5",
                                _react2.default.createElement("img", { src: "/assets" + "/img/customer-icons/star-dark.svg" })
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "rating-progress" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "progress-bar", role: "progressbar", "aria-valuenow": "30", "aria-valuemin": "0", "aria-valuemax": "30", style: this.getRatingPercent(fivestar_progress) },
                                    _react2.default.createElement("span", { className: "sr-only" })
                                )
                            ),
                            _react2.default.createElement(
                                "span",
                                { className: "feed-progress-count" },
                                fivestar_progress['count']
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "feed-status-container" },
                            _react2.default.createElement(
                                "span",
                                { className: "feed-progress-point" },
                                "4",
                                _react2.default.createElement("img", { src: "/assets" + "/img/customer-icons/star-dark.svg" })
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "rating-progress" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "progress-bar", role: "progressbar", "aria-valuenow": "70", "aria-valuemin": "0", "aria-valuemax": "100", style: this.getRatingPercent(fourstar_progress) },
                                    _react2.default.createElement("span", { className: "sr-only" })
                                )
                            ),
                            _react2.default.createElement(
                                "span",
                                { className: "feed-progress-count" },
                                fourstar_progress['count']
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "feed-status-container" },
                            _react2.default.createElement(
                                "span",
                                { className: "feed-progress-point" },
                                "3",
                                _react2.default.createElement("img", { src: "/assets" + "/img/customer-icons/star-dark.svg" })
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "rating-progress" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "progress-bar", role: "progressbar", "aria-valuenow": "70", "aria-valuemin": "0", "aria-valuemax": "100", style: this.getRatingPercent(threestar_progress) },
                                    _react2.default.createElement("span", { className: "sr-only" })
                                )
                            ),
                            _react2.default.createElement(
                                "span",
                                { className: "feed-progress-count" },
                                threestar_progress['count']
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "feed-status-container" },
                            _react2.default.createElement(
                                "span",
                                { className: "feed-progress-point" },
                                "2",
                                _react2.default.createElement("img", { src: "/assets" + "/img/customer-icons/star-dark.svg" })
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "rating-progress" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "progress-bar", role: "progressbar", "aria-valuenow": "70", "aria-valuemin": "0", "aria-valuemax": "100", style: this.getRatingPercent(twostar_progress) },
                                    _react2.default.createElement("span", { className: "sr-only" })
                                )
                            ),
                            _react2.default.createElement(
                                "span",
                                { className: "feed-progress-count" },
                                twostar_progress['count']
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "feed-status-container" },
                            _react2.default.createElement(
                                "span",
                                { className: "feed-progress-point" },
                                "1",
                                _react2.default.createElement("img", { src: "/assets" + "/img/customer-icons/star-dark.svg" })
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "rating-progress" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "progress-bar", role: "progressbar", "aria-valuenow": "70", "aria-valuemin": "0", "aria-valuemax": "100", style: this.getRatingPercent(onestar_progress) },
                                    _react2.default.createElement("span", { className: "sr-only" })
                                )
                            ),
                            _react2.default.createElement(
                                "span",
                                { className: "feed-progress-count" },
                                onestar_progress['count']
                            )
                        )
                    )
                )
            );
        } else {
            return _react2.default.createElement("div", null);
        }
    }
}

exports.default = RatingGraph;

/***/ }),

/***/ "./dev/js/components/commons/ratingsProfileView/ReviewList.js":
/*!********************************************************************!*\
  !*** ./dev/js/components/commons/ratingsProfileView/ReviewList.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ReviewList extends _react2.default.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (typeof this.props.details.rating != "undefined" && this.props.details.rating != null && this.props.details.rating) {

      return _react2.default.createElement(
        "div",
        null,
        this.props.details.rating.map(rating => _react2.default.createElement(
          "div",
          { className: "usr-feed-comment", key: `${rating.id}+'_'+${rating.user_name}` },
          _react2.default.createElement(
            "div",
            { className: "comment-status-content" },
            _react2.default.createElement(
              "span",
              null,
              rating.ratings,
              " ",
              _react2.default.createElement("img", { className: "img-fluid", src: "/assets" + "/img/customer-icons/satr-wt.svg" })
            ),
            _react2.default.createElement(
              "p",
              { className: "feed-sts-heading" },
              rating.compliment
            )
          ),
          rating.doctor_name ? _react2.default.createElement(
            "p",
            { className: "usr-comments-pera fw-500" },
            "Dr. ",
            rating.doctor_name
          ) : '',
          _react2.default.createElement(
            "p",
            { className: "usr-comments-pera" },
            rating.review
          ),
          _react2.default.createElement(
            "p",
            { className: "comment-para-status" },
            " ",
            rating.is_verified ? _react2.default.createElement("img", { className: "rt-vr-img", src: "/assets" + "/img/rating-verify.svg" }) : "",
            " ",
            rating.user_name ? rating.user_name + " |" : "",
            "  ",
            rating.date
          )
        ))
      );
    } else {
      return "";
    }
  }
}

exports.default = ReviewList;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9SYXRpbmdHcmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9SZXZpZXdMaXN0LmpzIl0sIm5hbWVzIjpbIlJhdGluZ0dyYXBoIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiZ2V0UmF0aW5nUGVyY2VudCIsImtleSIsInJlbmRlciIsImRldGFpbHMiLCJyYXRpbmdfZ3JhcGgiLCJmaXZlc3Rhcl9wcm9ncmVzcyIsInN0YXJfY291bnQiLCJmb3Vyc3Rhcl9wcm9ncmVzcyIsInRocmVlc3Rhcl9wcm9ncmVzcyIsInR3b3N0YXJfcHJvZ3Jlc3MiLCJvbmVzdGFyX3Byb2dyZXNzIiwiYXZnX3JhdGluZyIsInJhdGluZ19jb3VudCIsInJldmlld19jb3VudCIsIkFTU0VUU19CQVNFX1VSTCIsIlJldmlld0xpc3QiLCJyYXRpbmciLCJtYXAiLCJpZCIsInVzZXJfbmFtZSIsInJhdGluZ3MiLCJjb21wbGltZW50IiwiZG9jdG9yX25hbWUiLCJyZXZpZXciLCJpc192ZXJpZmllZCIsImRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsTUFBTUEsV0FBTixTQUEwQkMsZ0JBQU1DLFNBQWhDLENBQTBDO0FBQ3RDQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDSDs7QUFFREMscUJBQWlCQyxHQUFqQixFQUFzQjtBQUNsQixlQUFPLEVBQUUsU0FBU0EsSUFBSSxTQUFKLElBQWlCLEdBQTVCLEVBQVA7QUFDSDs7QUFFREMsYUFBUztBQUNMLFlBQUksT0FBUSxLQUFLSCxLQUFMLENBQVdJLE9BQVgsQ0FBbUJDLFlBQTNCLElBQTRDLFdBQTVDLElBQTJELEtBQUtMLEtBQUwsQ0FBV0ksT0FB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QUFBO0FBRUcsYUFBS2pCLEtBQUwsQ0FBV0ksT0FBWCxDQUFtQmEsTUFBbkIsQ0FBMEJDLEdBQTFCLENBQThCRCxVQUM3QjtBQUFBO0FBQUEsWUFBSyxXQUFVLGtCQUFmLEVBQWtDLEtBQU0sR0FBRUEsT0FBT0UsRUFBRyxRQUFPRixPQUFPRyxTQUFVLEVBQTVFO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSx3QkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFPSCxxQkFBT0ksT0FBZDtBQUFBO0FBQXVCLHFEQUFLLFdBQVUsV0FBZixFQUEyQixLQUFLTixTQUFlQSxHQUFHLGlDQUFsRDtBQUF2QixhQURGO0FBRUU7QUFBQTtBQUFBLGdCQUFHLFdBQVUsa0JBQWI7QUFBaUNFLHFCQUFPSztBQUF4QztBQUZGLFdBREY7QUFLR0wsaUJBQU9NLFdBQVAsR0FBbUI7QUFBQTtBQUFBLGNBQUcsV0FBVSwwQkFBYjtBQUFBO0FBQTZDTixtQkFBT007QUFBcEQsV0FBbkIsR0FBd0YsRUFMM0Y7QUFNRTtBQUFBO0FBQUEsY0FBRyxXQUFVLG1CQUFiO0FBQWtDTixtQkFBT087QUFBekMsV0FORjtBQU9FO0FBQUE7QUFBQSxjQUFHLFdBQVUscUJBQWI7QUFBQTtBQUFzQ1AsbUJBQU9RLFdBQVAsR0FBcUIsdUNBQUssV0FBVSxXQUFmLEVBQTJCLEtBQUtWLFNBQWVBLEdBQUcsd0JBQWxELEdBQXJCLEdBQXFHLEVBQTNJO0FBQUE7QUFBZ0pFLG1CQUFPRyxTQUFQLEdBQW1CSCxPQUFPRyxTQUFQLEdBQW1CLElBQXRDLEdBQTZDLEVBQTdMO0FBQUE7QUFBb01ILG1CQUFPUztBQUEzTTtBQVBGLFNBREQ7QUFGSCxPQURGO0FBaUJELEtBbkJELE1Bb0JLO0FBQ0gsYUFBUSxFQUFSO0FBQ0Q7QUFDRjtBQTdCc0M7O2tCQWdDMUJWLFUiLCJmaWxlIjoiMTkuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJhdGluZ1N0YXJzIGZyb20gXCIuL1JhdGluZ1N0YXJzXCI7XG5cbmNsYXNzIFJhdGluZ0dyYXBoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgZ2V0UmF0aW5nUGVyY2VudChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHsgJ3dpZHRoJzoga2V5WydwZXJjZW50J10gKyAnJScgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wcm9wcy5kZXRhaWxzLnJhdGluZ19ncmFwaCkgIT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLnByb3BzLmRldGFpbHMucmF0aW5nX2dyYXBoICE9IG51bGwgJiYgdGhpcy5wcm9wcy5kZXRhaWxzLnJhdGluZ19ncmFwaCkge1xuICAgICAgICAgICAgbGV0IGZpdmVzdGFyX3Byb2dyZXNzID0gdGhpcy5wcm9wcy5kZXRhaWxzLnJhdGluZ19ncmFwaC5zdGFyX2NvdW50WzVdXG4gICAgICAgICAgICBsZXQgZm91cnN0YXJfcHJvZ3Jlc3MgPSB0aGlzLnByb3BzLmRldGFpbHMucmF0aW5nX2dyYXBoLnN0YXJfY291bnRbNF1cbiAgICAgICAgICAgIGxldCB0aHJlZXN0YXJfcHJvZ3Jlc3MgPSB0aGlzLnByb3BzLmRldGFpbHMucmF0aW5nX2dyYXBoLnN0YXJfY291bnRbM11cbiAgICAgICAgICAgIGxldCB0d29zdGFyX3Byb2dyZXNzID0gdGhpcy5wcm9wcy5kZXRhaWxzLnJhdGluZ19ncmFwaC5zdGFyX2NvdW50WzJdXG4gICAgICAgICAgICBsZXQgb25lc3Rhcl9wcm9ncmVzcyA9IHRoaXMucHJvcHMuZGV0YWlscy5yYXRpbmdfZ3JhcGguc3Rhcl9jb3VudFsxXVxuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVlZC1iYWNrLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBmbHgtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRldGFpbHMucmF0aW5nX2dyYXBoICYmIHRoaXMucHJvcHMuZGV0YWlscy5yYXRpbmdfZ3JhcGguYXZnX3JhdGluZyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmF0aW5nU3RhcnMgYXZlcmFnZV9yYXRpbmc9e3RoaXMucHJvcHMuZGV0YWlscy5yYXRpbmdfZ3JhcGguYXZnX3JhdGluZ30gd2lkdGg9XCIxMnB4XCIgaGVpZ2h0PVwiMTJweFwiIGp1c3RpZnlDZW50ZXI9e3RydWV9IC8+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWVkYmFjay1yYXRpbmctdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmZWVkYmFjay1yYXRlXCI+e3RoaXMucHJvcHMuZGV0YWlscy5yYXRpbmdfZ3JhcGguYXZnX3JhdGluZ308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZlZWRiYWNrLXJhdGUtc3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kZXRhaWxzLnJhdGluZ19ncmFwaC5yYXRpbmdfY291bnR9IHJhdGluZ3MgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLmRldGFpbHMucmF0aW5nX2dyYXBoLnJldmlld19jb3VudH0gcmV2aWV3czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC03IGJvcmRlci1sZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlZWQtc3RhdHVzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmZWVkLXByb2dyZXNzLXBvaW50XCI+NTxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvc3Rhci1kYXJrLnN2Z1wifSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctcHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgYXJpYS12YWx1ZW5vdz1cIjMwXCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBhcmlhLXZhbHVlbWF4PVwiMzBcIiBzdHlsZT17dGhpcy5nZXRSYXRpbmdQZXJjZW50KGZpdmVzdGFyX3Byb2dyZXNzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmVlZC1wcm9ncmVzcy1jb3VudFwiPntmaXZlc3Rhcl9wcm9ncmVzc1snY291bnQnXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWVkLXN0YXR1cy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmVlZC1wcm9ncmVzcy1wb2ludFwiPjQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3N0YXItZGFyay5zdmdcIn0gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLXByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWJhclwiIHJvbGU9XCJwcm9ncmVzc2JhclwiIGFyaWEtdmFsdWVub3c9XCI3MFwiIGFyaWEtdmFsdWVtaW49XCIwXCIgYXJpYS12YWx1ZW1heD1cIjEwMFwiIHN0eWxlPXt0aGlzLmdldFJhdGluZ1BlcmNlbnQoZm91cnN0YXJfcHJvZ3Jlc3MpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmZWVkLXByb2dyZXNzLWNvdW50XCI+e2ZvdXJzdGFyX3Byb2dyZXNzWydjb3VudCddfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlZWQtc3RhdHVzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmZWVkLXByb2dyZXNzLXBvaW50XCI+MzxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvc3Rhci1kYXJrLnN2Z1wifSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctcHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgYXJpYS12YWx1ZW5vdz1cIjcwXCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBhcmlhLXZhbHVlbWF4PVwiMTAwXCIgc3R5bGU9e3RoaXMuZ2V0UmF0aW5nUGVyY2VudCh0aHJlZXN0YXJfcHJvZ3Jlc3MpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmZWVkLXByb2dyZXNzLWNvdW50XCI+e3RocmVlc3Rhcl9wcm9ncmVzc1snY291bnQnXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWVkLXN0YXR1cy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmVlZC1wcm9ncmVzcy1wb2ludFwiPjI8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3N0YXItZGFyay5zdmdcIn0gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLXByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWJhclwiIHJvbGU9XCJwcm9ncmVzc2JhclwiIGFyaWEtdmFsdWVub3c9XCI3MFwiIGFyaWEtdmFsdWVtaW49XCIwXCIgYXJpYS12YWx1ZW1heD1cIjEwMFwiIHN0eWxlPXt0aGlzLmdldFJhdGluZ1BlcmNlbnQodHdvc3Rhcl9wcm9ncmVzcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZlZWQtcHJvZ3Jlc3MtY291bnRcIj57dHdvc3Rhcl9wcm9ncmVzc1snY291bnQnXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWVkLXN0YXR1cy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmVlZC1wcm9ncmVzcy1wb2ludFwiPjE8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3N0YXItZGFyay5zdmdcIn0gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLXByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWJhclwiIHJvbGU9XCJwcm9ncmVzc2JhclwiIGFyaWEtdmFsdWVub3c9XCI3MFwiIGFyaWEtdmFsdWVtaW49XCIwXCIgYXJpYS12YWx1ZW1heD1cIjEwMFwiIHN0eWxlPXt0aGlzLmdldFJhdGluZ1BlcmNlbnQob25lc3Rhcl9wcm9ncmVzcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZlZWQtcHJvZ3Jlc3MtY291bnRcIj57b25lc3Rhcl9wcm9ncmVzc1snY291bnQnXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKDxkaXY+PC9kaXY+KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYXRpbmdHcmFwaDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgUmV2aWV3TGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0eXBlb2YgKHRoaXMucHJvcHMuZGV0YWlscy5yYXRpbmcpICE9IFwidW5kZWZpbmVkXCIgJiYgdGhpcy5wcm9wcy5kZXRhaWxzLnJhdGluZyAhPSBudWxsICYmIHRoaXMucHJvcHMuZGV0YWlscy5yYXRpbmcpIHtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cblxuICAgICAgICAgIHt0aGlzLnByb3BzLmRldGFpbHMucmF0aW5nLm1hcChyYXRpbmcgPT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNyLWZlZWQtY29tbWVudFwiIGtleT17YCR7cmF0aW5nLmlkfSsnXycrJHtyYXRpbmcudXNlcl9uYW1lfWB9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnQtc3RhdHVzLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57cmF0aW5nLnJhdGluZ3N9IDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvc2F0ci13dC5zdmdcIn0gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmVlZC1zdHMtaGVhZGluZ1wiPntyYXRpbmcuY29tcGxpbWVudH08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7cmF0aW5nLmRvY3Rvcl9uYW1lPzxwIGNsYXNzTmFtZT1cInVzci1jb21tZW50cy1wZXJhIGZ3LTUwMFwiPkRyLiB7cmF0aW5nLmRvY3Rvcl9uYW1lfTwvcD46Jyd9XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInVzci1jb21tZW50cy1wZXJhXCI+e3JhdGluZy5yZXZpZXd9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb21tZW50LXBhcmEtc3RhdHVzXCI+IHsgcmF0aW5nLmlzX3ZlcmlmaWVkID8gPGltZyBjbGFzc05hbWU9XCJydC12ci1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9yYXRpbmctdmVyaWZ5LnN2Z1wifS8+IDogXCJcIn0ge3JhdGluZy51c2VyX25hbWUgPyByYXRpbmcudXNlcl9uYW1lICsgXCIgfFwiIDogXCJcIiB9ICB7cmF0aW5nLmRhdGV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIChcIlwiKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3TGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=