(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _RatingStars = __webpack_require__(/*! ./RatingStars */ "./dev/js/components/commons/ratingsProfileView/RatingStars.js");

var _RatingStars2 = _interopRequireDefault(_RatingStars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RatingGraph = function (_React$Component) {
    _inherits(RatingGraph, _React$Component);

    function RatingGraph(props) {
        _classCallCheck(this, RatingGraph);

        return _possibleConstructorReturn(this, (RatingGraph.__proto__ || Object.getPrototypeOf(RatingGraph)).call(this, props));
    }

    _createClass(RatingGraph, [{
        key: "getRatingPercent",
        value: function getRatingPercent(key) {
            return { 'width': key['percent'] + '%' };
        }
    }, {
        key: "render",
        value: function render() {
            if (typeof this.props.details.rating_graph != "undefined" && this.props.details.rating_graph != null && this.props.details.rating_graph) {
                var fivestar_progress = this.props.details.rating_graph.star_count[5];
                var fourstar_progress = this.props.details.rating_graph.star_count[4];
                var threestar_progress = this.props.details.rating_graph.star_count[3];
                var twostar_progress = this.props.details.rating_graph.star_count[2];
                var onestar_progress = this.props.details.rating_graph.star_count[1];

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
    }]);

    return RatingGraph;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReviewList = function (_React$Component) {
  _inherits(ReviewList, _React$Component);

  function ReviewList(props) {
    _classCallCheck(this, ReviewList);

    return _possibleConstructorReturn(this, (ReviewList.__proto__ || Object.getPrototypeOf(ReviewList)).call(this, props));
  }

  _createClass(ReviewList, [{
    key: "render",
    value: function render() {
      if (typeof this.props.details.rating != "undefined" && this.props.details.rating != null && this.props.details.rating) {

        return _react2.default.createElement(
          "div",
          null,
          this.props.details.rating.map(function (rating) {
            return _react2.default.createElement(
              "div",
              { className: "usr-feed-comment", key: rating.id + "+'_'+" + rating.user_name },
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
            );
          })
        );
      } else {
        return "";
      }
    }
  }]);

  return ReviewList;
}(_react2.default.Component);

exports.default = ReviewList;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9SYXRpbmdHcmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9SZXZpZXdMaXN0LmpzIl0sIm5hbWVzIjpbIlJhdGluZ0dyYXBoIiwicHJvcHMiLCJrZXkiLCJkZXRhaWxzIiwicmF0aW5nX2dyYXBoIiwiZml2ZXN0YXJfcHJvZ3Jlc3MiLCJzdGFyX2NvdW50IiwiZm91cnN0YXJfcHJvZ3Jlc3MiLCJ0aHJlZXN0YXJfcHJvZ3Jlc3MiLCJ0d29zdGFyX3Byb2dyZXNzIiwib25lc3Rhcl9wcm9ncmVzcyIsImF2Z19yYXRpbmciLCJyYXRpbmdfY291bnQiLCJyZXZpZXdfY291bnQiLCJBU1NFVFNfQkFTRV9VUkwiLCJnZXRSYXRpbmdQZXJjZW50IiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZXZpZXdMaXN0IiwicmF0aW5nIiwibWFwIiwiaWQiLCJ1c2VyX25hbWUiLCJyYXRpbmdzIiwiY29tcGxpbWVudCIsImRvY3Rvcl9uYW1lIiwicmV2aWV3IiwiaXNfdmVyaWZpZWQiLCJkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsVzs7O0FBQ0YseUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx5SEFDVEEsS0FEUztBQUVsQjs7Ozt5Q0FFZ0JDLEcsRUFBSztBQUNsQixtQkFBTyxFQUFFLFNBQVNBLElBQUksU0FBSixJQUFpQixHQUE1QixFQUFQO0FBQ0g7OztpQ0FFUTtBQUNMLGdCQUFJLE9BQVEsS0FBS0QsS0FBTCxDQUFXRSxPQUFYLENBQW1CQyxZQUEzQixJQUE0QyxXQUE1QyxJQUEyRCxLQUFLSCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJDLFlBQW5CLElBQW1DLElBQTlGLElBQXNHLEtBQUtILEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkMsWUFBN0gsRUFBMkk7QUFDdkksb0JBQUlDLG9CQUFvQixLQUFLSixLQUFMLENBQVdFLE9BQVgsQ0FBbUJDLFlBQW5CLENBQWdDRSxVQUFoQyxDQUEyQyxDQUEzQyxDQUF4QjtBQUNBLG9CQUFJQyxvQkFBb0IsS0FBS04sS0FBTCxDQUFXRSxPQUFYLENBQW1CQyxZQUFuQixDQUFnQ0UsVUFBaEMsQ0FBMkMsQ0FBM0MsQ0FBeEI7QUFDQSxvQkFBSUUscUJBQXFCLEtBQUtQLEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkMsWUFBbkIsQ0FBZ0NFLFVBQWhDLENBQTJDLENBQTNDLENBQXpCO0FBQ0Esb0JBQUlHLG1CQUFtQixLQUFLUixLQUFMLENBQVdFLE9BQVgsQ0FBbUJDLFlBQW5CLENBQWdDRSxVQUFoQyxDQUEyQyxDQUEzQyxDQUF2QjtBQUNBLG9CQUFJSSxtQkFBbUIsS0FBS1QsS0FBTCxDQUFXRSxPQUFYLENBQW1CQyxZQUFuQixDQUFnQ0UsVUFBaEMsQ0FBMkMsQ0FBM0MsQ0FBdkI7O0FBRUEsdUJBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUscUJBQWY7QUFDSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxnQkFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLE9BQWY7QUFFUSxpQ0FBS0wsS0FBTCxDQUFXRSxPQUFYLENBQW1CQyxZQUFuQixJQUFtQyxLQUFLSCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJDLFlBQW5CLENBQWdDTyxVQUFuRSxHQUNJLDhCQUFDLHFCQUFELElBQWEsZ0JBQWdCLEtBQUtWLEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkMsWUFBbkIsQ0FBZ0NPLFVBQTdELEVBQXlFLE9BQU0sTUFBL0UsRUFBc0YsUUFBTyxNQUE3RixFQUFvRyxlQUFlLElBQW5ILEdBREosR0FDa0ksRUFIMUk7QUFLSTtBQUFBO0FBQUEsa0NBQUssV0FBVSxzQkFBZjtBQUNJO0FBQUE7QUFBQSxzQ0FBRyxXQUFVLGVBQWI7QUFBOEIseUNBQUtWLEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkMsWUFBbkIsQ0FBZ0NPO0FBQTlELGlDQURKO0FBRUk7QUFBQTtBQUFBLHNDQUFHLFdBQVUsc0JBQWI7QUFDSyx5Q0FBS1YsS0FBTCxDQUFXRSxPQUFYLENBQW1CQyxZQUFuQixDQUFnQ1EsWUFEckM7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFPLDZDQUFLWCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJDLFlBQW5CLENBQWdDUyxZQUF2QztBQUFBO0FBQUE7QUFGQTtBQUZKO0FBTEoseUJBREo7QUFjSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxrQkFBZjtBQUNJO0FBQUE7QUFBQSxrQ0FBSyxXQUFVLHVCQUFmO0FBQ0k7QUFBQTtBQUFBLHNDQUFNLFdBQVUscUJBQWhCO0FBQUE7QUFBdUMsMkVBQUssS0FBS0MsU0FBZUEsR0FBRyxtQ0FBNUI7QUFBdkMsaUNBREo7QUFFSTtBQUFBO0FBQUEsc0NBQUssV0FBVSxpQkFBZjtBQUNJO0FBQUE7QUFBQSwwQ0FBSyxXQUFVLGNBQWYsRUFBOEIsTUFBSyxhQUFuQyxFQUFpRCxpQkFBYyxJQUEvRCxFQUFvRSxpQkFBYyxHQUFsRixFQUFzRixpQkFBYyxJQUFwRyxFQUF5RyxPQUFPLEtBQUtDLGdCQUFMLENBQXNCVixpQkFBdEIsQ0FBaEg7QUFDSSxnRkFBTSxXQUFVLFNBQWhCO0FBREo7QUFESixpQ0FGSjtBQU9JO0FBQUE7QUFBQSxzQ0FBTSxXQUFVLHFCQUFoQjtBQUF1Q0Esc0RBQWtCLE9BQWxCO0FBQXZDO0FBUEosNkJBREo7QUFVSTtBQUFBO0FBQUEsa0NBQUssV0FBVSx1QkFBZjtBQUNJO0FBQUE7QUFBQSxzQ0FBTSxXQUFVLHFCQUFoQjtBQUFBO0FBQXVDLDJFQUFLLEtBQUtTLFNBQWVBLEdBQUcsbUNBQTVCO0FBQXZDLGlDQURKO0FBRUk7QUFBQTtBQUFBLHNDQUFLLFdBQVUsaUJBQWY7QUFDSTtBQUFBO0FBQUEsMENBQUssV0FBVSxjQUFmLEVBQThCLE1BQUssYUFBbkMsRUFBaUQsaUJBQWMsSUFBL0QsRUFBb0UsaUJBQWMsR0FBbEYsRUFBc0YsaUJBQWMsS0FBcEcsRUFBMEcsT0FBTyxLQUFLQyxnQkFBTCxDQUFzQlIsaUJBQXRCLENBQWpIO0FBQ0ksZ0ZBQU0sV0FBVSxTQUFoQjtBQURKO0FBREosaUNBRko7QUFPSTtBQUFBO0FBQUEsc0NBQU0sV0FBVSxxQkFBaEI7QUFBdUNBLHNEQUFrQixPQUFsQjtBQUF2QztBQVBKLDZCQVZKO0FBbUJJO0FBQUE7QUFBQSxrQ0FBSyxXQUFVLHVCQUFmO0FBQ0k7QUFBQTtBQUFBLHNDQUFNLFdBQVUscUJBQWhCO0FBQUE7QUFBdUMsMkVBQUssS0FBS08sU0FBZUEsR0FBRyxtQ0FBNUI7QUFBdkMsaUNBREo7QUFFSTtBQUFBO0FBQUEsc0NBQUssV0FBVSxpQkFBZjtBQUNJO0FBQUE7QUFBQSwwQ0FBSyxXQUFVLGNBQWYsRUFBOEIsTUFBSyxhQUFuQyxFQUFpRCxpQkFBYyxJQUEvRCxFQUFvRSxpQkFBYyxHQUFsRixFQUFzRixpQkFBYyxLQUFwRyxFQUEwRyxPQUFPLEtBQUtDLGdCQUFMLENBQXNCUCxrQkFBdEIsQ0FBakg7QUFDSSxnRkFBTSxXQUFVLFNBQWhCO0FBREo7QUFESixpQ0FGSjtBQU9JO0FBQUE7QUFBQSxzQ0FBTSxXQUFVLHFCQUFoQjtBQUF1Q0EsdURBQW1CLE9BQW5CO0FBQXZDO0FBUEosNkJBbkJKO0FBNEJJO0FBQUE7QUFBQSxrQ0FBSyxXQUFVLHVCQUFmO0FBQ0k7QUFBQTtBQUFBLHNDQUFNLFdBQVUscUJBQWhCO0FBQUE7QUFBdUMsMkVBQUssS0FBS00sU0FBZUEsR0FBRyxtQ0FBNUI7QUFBdkMsaUNBREo7QUFFSTtBQUFBO0FBQUEsc0NBQUssV0FBVSxpQkFBZjtBQUNJO0FBQUE7QUFBQSwwQ0FBSyxXQUFVLGNBQWYsRUFBOEIsTUFBSyxhQUFuQyxFQUFpRCxpQkFBYyxJQUEvRCxFQUFvRSxpQkFBYyxHQUFsRixFQUFzRixpQkFBYyxLQUFwRyxFQUEwRyxPQUFPLEtBQUtDLGdCQUFMLENBQXNCTixnQkFBdEIsQ0FBakg7QUFDSSxnRkFBTSxXQUFVLFNBQWhCO0FBREo7QUFESixpQ0FGSjtBQU9JO0FBQUE7QUFBQSxzQ0FBTSxXQUFVLHFCQUFoQjtBQUF1Q0EscURBQWlCLE9BQWpCO0FBQXZDO0FBUEosNkJBNUJKO0FBcUNJO0FBQUE7QUFBQSxrQ0FBSyxXQUFVLHVCQUFmO0FBQ0k7QUFBQTtBQUFBLHNDQUFNLFdBQVUscUJBQWhCO0FBQUE7QUFBdUMsMkVBQUssS0FBS0ssU0FBZUEsR0FBRyxtQ0FBNUI7QUFBdkMsaUNBREo7QUFFSTtBQUFBO0FBQUEsc0NBQUssV0FBVSxpQkFBZjtBQUNJO0FBQUE7QUFBQSwwQ0FBSyxXQUFVLGNBQWYsRUFBOEIsTUFBSyxhQUFuQyxFQUFpRCxpQkFBYyxJQUEvRCxFQUFvRSxpQkFBYyxHQUFsRixFQUFzRixpQkFBYyxLQUFwRyxFQUEwRyxPQUFPLEtBQUtDLGdCQUFMLENBQXNCTCxnQkFBdEIsQ0FBakg7QUFDSSxnRkFBTSxXQUFVLFNBQWhCO0FBREo7QUFESixpQ0FGSjtBQU9JO0FBQUE7QUFBQSxzQ0FBTSxXQUFVLHFCQUFoQjtBQUF1Q0EscURBQWlCLE9BQWpCO0FBQXZDO0FBUEo7QUFyQ0o7QUFkSjtBQURKLGlCQURKO0FBbUVILGFBMUVELE1BMkVLO0FBQ0QsdUJBQVEsMENBQVI7QUFDSDtBQUNKOzs7O0VBeEZxQk0sZ0JBQU1DLFM7O2tCQTJGakJqQixXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlGZjs7Ozs7Ozs7Ozs7O0lBRU1rQixVOzs7QUFDSixzQkFBWWpCLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxtSEFDWEEsS0FEVztBQUVsQjs7Ozs2QkFFUTtBQUNQLFVBQUksT0FBUSxLQUFLQSxLQUFMLENBQVdFLE9BQVgsQ0FBbUJnQixNQUEzQixJQUFzQyxXQUF0QyxJQUFxRCxLQUFLbEIsS0FBTCxDQUFXRSxPQUFYLENBQW1CZ0IsTUFBbkIsSUFBNkIsSUFBbEYsSUFBMEYsS0FBS2xCLEtBQUwsQ0FBV0UsT0FBWCxDQUFtQmdCLE1BQWpILEVBQXlIOztBQUV2SCxlQUNFO0FBQUE7QUFBQTtBQUVHLGVBQUtsQixLQUFMLENBQVdFLE9BQVgsQ0FBbUJnQixNQUFuQixDQUEwQkMsR0FBMUIsQ0FBOEI7QUFBQSxtQkFDN0I7QUFBQTtBQUFBLGdCQUFLLFdBQVUsa0JBQWYsRUFBa0MsS0FBUUQsT0FBT0UsRUFBZixhQUF5QkYsT0FBT0csU0FBbEU7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSx3QkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFPSCx5QkFBT0ksT0FBZDtBQUFBO0FBQXVCLHlEQUFLLFdBQVUsV0FBZixFQUEyQixLQUFLVCxTQUFlQSxHQUFHLGlDQUFsRDtBQUF2QixpQkFERjtBQUVFO0FBQUE7QUFBQSxvQkFBRyxXQUFVLGtCQUFiO0FBQWlDSyx5QkFBT0s7QUFBeEM7QUFGRixlQURGO0FBS0dMLHFCQUFPTSxXQUFQLEdBQW1CO0FBQUE7QUFBQSxrQkFBRyxXQUFVLDBCQUFiO0FBQUE7QUFBNkNOLHVCQUFPTTtBQUFwRCxlQUFuQixHQUF3RixFQUwzRjtBQU1FO0FBQUE7QUFBQSxrQkFBRyxXQUFVLG1CQUFiO0FBQWtDTix1QkFBT087QUFBekMsZUFORjtBQU9FO0FBQUE7QUFBQSxrQkFBRyxXQUFVLHFCQUFiO0FBQUE7QUFBc0NQLHVCQUFPUSxXQUFQLEdBQXFCLHVDQUFLLFdBQVUsV0FBZixFQUEyQixLQUFLYixTQUFlQSxHQUFHLHdCQUFsRCxHQUFyQixHQUFxRyxFQUEzSTtBQUFBO0FBQWdKSyx1QkFBT0csU0FBUCxHQUFtQkgsT0FBT0csU0FBUCxHQUFtQixJQUF0QyxHQUE2QyxFQUE3TDtBQUFBO0FBQW9NSCx1QkFBT1M7QUFBM007QUFQRixhQUQ2QjtBQUFBLFdBQTlCO0FBRkgsU0FERjtBQWlCRCxPQW5CRCxNQW9CSztBQUNILGVBQVEsRUFBUjtBQUNEO0FBQ0Y7Ozs7RUE3QnNCWixnQkFBTUMsUzs7a0JBZ0NoQkMsVSIsImZpbGUiOiIyNS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmF0aW5nU3RhcnMgZnJvbSBcIi4vUmF0aW5nU3RhcnNcIjtcblxuY2xhc3MgUmF0aW5nR3JhcGggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBnZXRSYXRpbmdQZXJjZW50KGtleSkge1xuICAgICAgICByZXR1cm4geyAnd2lkdGgnOiBrZXlbJ3BlcmNlbnQnXSArICclJyB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodHlwZW9mICh0aGlzLnByb3BzLmRldGFpbHMucmF0aW5nX2dyYXBoKSAhPSBcInVuZGVmaW5lZFwiICYmIHRoaXMucHJvcHMuZGV0YWlscy5yYXRpbmdfZ3JhcGggIT0gbnVsbCAmJiB0aGlzLnByb3BzLmRldGFpbHMucmF0aW5nX2dyYXBoKSB7XG4gICAgICAgICAgICBsZXQgZml2ZXN0YXJfcHJvZ3Jlc3MgPSB0aGlzLnByb3BzLmRldGFpbHMucmF0aW5nX2dyYXBoLnN0YXJfY291bnRbNV1cbiAgICAgICAgICAgIGxldCBmb3Vyc3Rhcl9wcm9ncmVzcyA9IHRoaXMucHJvcHMuZGV0YWlscy5yYXRpbmdfZ3JhcGguc3Rhcl9jb3VudFs0XVxuICAgICAgICAgICAgbGV0IHRocmVlc3Rhcl9wcm9ncmVzcyA9IHRoaXMucHJvcHMuZGV0YWlscy5yYXRpbmdfZ3JhcGguc3Rhcl9jb3VudFszXVxuICAgICAgICAgICAgbGV0IHR3b3N0YXJfcHJvZ3Jlc3MgPSB0aGlzLnByb3BzLmRldGFpbHMucmF0aW5nX2dyYXBoLnN0YXJfY291bnRbMl1cbiAgICAgICAgICAgIGxldCBvbmVzdGFyX3Byb2dyZXNzID0gdGhpcy5wcm9wcy5kZXRhaWxzLnJhdGluZ19ncmFwaC5zdGFyX2NvdW50WzFdXG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWVkLWJhY2stY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGZseC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGV0YWlscy5yYXRpbmdfZ3JhcGggJiYgdGhpcy5wcm9wcy5kZXRhaWxzLnJhdGluZ19ncmFwaC5hdmdfcmF0aW5nID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYXRpbmdTdGFycyBhdmVyYWdlX3JhdGluZz17dGhpcy5wcm9wcy5kZXRhaWxzLnJhdGluZ19ncmFwaC5hdmdfcmF0aW5nfSB3aWR0aD1cIjEycHhcIiBoZWlnaHQ9XCIxMnB4XCIganVzdGlmeUNlbnRlcj17dHJ1ZX0gLz4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlZWRiYWNrLXJhdGluZy10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZlZWRiYWNrLXJhdGVcIj57dGhpcy5wcm9wcy5kZXRhaWxzLnJhdGluZ19ncmFwaC5hdmdfcmF0aW5nfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmVlZGJhY2stcmF0ZS1zdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRldGFpbHMucmF0aW5nX2dyYXBoLnJhdGluZ19jb3VudH0gcmF0aW5ncyBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMuZGV0YWlscy5yYXRpbmdfZ3JhcGgucmV2aWV3X2NvdW50fSByZXZpZXdzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTcgYm9yZGVyLWxmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVlZC1zdGF0dXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZlZWQtcHJvZ3Jlc3MtcG9pbnRcIj41PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9zdGFyLWRhcmsuc3ZnXCJ9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1wcm9ncmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXJcIiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBhcmlhLXZhbHVlbm93PVwiMzBcIiBhcmlhLXZhbHVlbWluPVwiMFwiIGFyaWEtdmFsdWVtYXg9XCIzMFwiIHN0eWxlPXt0aGlzLmdldFJhdGluZ1BlcmNlbnQoZml2ZXN0YXJfcHJvZ3Jlc3MpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmZWVkLXByb2dyZXNzLWNvdW50XCI+e2ZpdmVzdGFyX3Byb2dyZXNzWydjb3VudCddfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlZWQtc3RhdHVzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmZWVkLXByb2dyZXNzLXBvaW50XCI+NDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvc3Rhci1kYXJrLnN2Z1wifSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctcHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgYXJpYS12YWx1ZW5vdz1cIjcwXCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBhcmlhLXZhbHVlbWF4PVwiMTAwXCIgc3R5bGU9e3RoaXMuZ2V0UmF0aW5nUGVyY2VudChmb3Vyc3Rhcl9wcm9ncmVzcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZlZWQtcHJvZ3Jlc3MtY291bnRcIj57Zm91cnN0YXJfcHJvZ3Jlc3NbJ2NvdW50J119PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVlZC1zdGF0dXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZlZWQtcHJvZ3Jlc3MtcG9pbnRcIj4zPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9zdGFyLWRhcmsuc3ZnXCJ9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1wcm9ncmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXJcIiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBhcmlhLXZhbHVlbm93PVwiNzBcIiBhcmlhLXZhbHVlbWluPVwiMFwiIGFyaWEtdmFsdWVtYXg9XCIxMDBcIiBzdHlsZT17dGhpcy5nZXRSYXRpbmdQZXJjZW50KHRocmVlc3Rhcl9wcm9ncmVzcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZlZWQtcHJvZ3Jlc3MtY291bnRcIj57dGhyZWVzdGFyX3Byb2dyZXNzWydjb3VudCddfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlZWQtc3RhdHVzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmZWVkLXByb2dyZXNzLXBvaW50XCI+MjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvc3Rhci1kYXJrLnN2Z1wifSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctcHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgYXJpYS12YWx1ZW5vdz1cIjcwXCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBhcmlhLXZhbHVlbWF4PVwiMTAwXCIgc3R5bGU9e3RoaXMuZ2V0UmF0aW5nUGVyY2VudCh0d29zdGFyX3Byb2dyZXNzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmVlZC1wcm9ncmVzcy1jb3VudFwiPnt0d29zdGFyX3Byb2dyZXNzWydjb3VudCddfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlZWQtc3RhdHVzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmZWVkLXByb2dyZXNzLXBvaW50XCI+MTxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvc3Rhci1kYXJrLnN2Z1wifSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctcHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgYXJpYS12YWx1ZW5vdz1cIjcwXCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBhcmlhLXZhbHVlbWF4PVwiMTAwXCIgc3R5bGU9e3RoaXMuZ2V0UmF0aW5nUGVyY2VudChvbmVzdGFyX3Byb2dyZXNzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmVlZC1wcm9ncmVzcy1jb3VudFwiPntvbmVzdGFyX3Byb2dyZXNzWydjb3VudCddfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoPGRpdj48L2Rpdj4pXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhdGluZ0dyYXBoO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBSZXZpZXdMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHR5cGVvZiAodGhpcy5wcm9wcy5kZXRhaWxzLnJhdGluZykgIT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLnByb3BzLmRldGFpbHMucmF0aW5nICE9IG51bGwgJiYgdGhpcy5wcm9wcy5kZXRhaWxzLnJhdGluZykge1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAge3RoaXMucHJvcHMuZGV0YWlscy5yYXRpbmcubWFwKHJhdGluZyA9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c3ItZmVlZC1jb21tZW50XCIga2V5PXtgJHtyYXRpbmcuaWR9KydfJyske3JhdGluZy51c2VyX25hbWV9YH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudC1zdGF0dXMtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPntyYXRpbmcucmF0aW5nc30gPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9zYXRyLXd0LnN2Z1wifSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmZWVkLXN0cy1oZWFkaW5nXCI+e3JhdGluZy5jb21wbGltZW50fTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHtyYXRpbmcuZG9jdG9yX25hbWU/PHAgY2xhc3NOYW1lPVwidXNyLWNvbW1lbnRzLXBlcmEgZnctNTAwXCI+RHIuIHtyYXRpbmcuZG9jdG9yX25hbWV9PC9wPjonJ31cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidXNyLWNvbW1lbnRzLXBlcmFcIj57cmF0aW5nLnJldmlld308L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbW1lbnQtcGFyYS1zdGF0dXNcIj4geyByYXRpbmcuaXNfdmVyaWZpZWQgPyA8aW1nIGNsYXNzTmFtZT1cInJ0LXZyLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3JhdGluZy12ZXJpZnkuc3ZnXCJ9Lz4gOiBcIlwifSB7cmF0aW5nLnVzZXJfbmFtZSA/IHJhdGluZy51c2VyX25hbWUgKyBcIiB8XCIgOiBcIlwiIH0gIHtyYXRpbmcuZGF0ZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gKFwiXCIpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==