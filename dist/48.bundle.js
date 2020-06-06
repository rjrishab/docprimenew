(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./dev/js/components/commons/ratingsProfileView/ComplimentListView.js":
/*!****************************************************************************!*\
  !*** ./dev/js/components/commons/ratingsProfileView/ComplimentListView.js ***!
  \****************************************************************************/
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

var ComplimentListView = function (_React$Component) {
    _inherits(ComplimentListView, _React$Component);

    function ComplimentListView(props) {
        _classCallCheck(this, ComplimentListView);

        return _possibleConstructorReturn(this, (ComplimentListView.__proto__ || Object.getPrototypeOf(ComplimentListView)).call(this, props));
    }

    _createClass(ComplimentListView, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "" },
                _react2.default.createElement(
                    "div",
                    { className: "user-satisfaction-images" },
                    _react2.default.createElement("img", { className: "img-fluid", src: this.props.details.icon }),
                    _react2.default.createElement(
                        "p",
                        null,
                        this.props.details.message
                    ),
                    _react2.default.createElement(
                        "span",
                        null,
                        this.props.details.count
                    )
                )
            );
        }
    }]);

    return ComplimentListView;
}(_react2.default.Component);

exports.default = ComplimentListView;

/***/ }),

/***/ "./dev/js/components/commons/ratingsProfileView/RatingProfileCard.js":
/*!***************************************************************************!*\
  !*** ./dev/js/components/commons/ratingsProfileView/RatingProfileCard.js ***!
  \***************************************************************************/
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

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _ReviewPopUp = __webpack_require__(/*! ./ReviewPopUp */ "./dev/js/components/commons/ratingsProfileView/ReviewPopUp.js");

var _ReviewPopUp2 = _interopRequireDefault(_ReviewPopUp);

var _ThankYouPopUp = __webpack_require__(/*! ./ThankYouPopUp */ "./dev/js/components/commons/ratingsProfileView/ThankYouPopUp.js");

var _ThankYouPopUp2 = _interopRequireDefault(_ThankYouPopUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RatingProfileCard = function (_React$Component) {
    _inherits(RatingProfileCard, _React$Component);

    function RatingProfileCard(props) {
        _classCallCheck(this, RatingProfileCard);

        var _this = _possibleConstructorReturn(this, (RatingProfileCard.__proto__ || Object.getPrototypeOf(RatingProfileCard)).call(this, props));

        _this.getAppointmentType = function () {
            var type = _this.props.details.type && _this.props.details.type == "lab" ? 1 : 2;
            return type;
        };

        _this.thanYouButton = function () {
            _this.setState({ rating_done: false });
        };

        _this.submitRating = function (post_data, flag) {
            _this.setState({ data: null });
            if (!flag) {
                _this.props.updateAppointmentRating(post_data, function (err, data) {
                    if (!err && data) {
                        _this.setState({ appointmentData: _this.state.data, data: null, rating_done: true });
                    }
                });
            }
        };

        _this.state = {
            data: null,
            selectedRating: 0,
            rating_id: null,
            compliments: [],
            rating_done: false,
            appointmentData: null
        };
        return _this;
    }

    _createClass(RatingProfileCard, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.setState({ data: this.props.details });
            if (_storage2.default.checkAuth()) {
                this.props.getRatingCompliments(function (err, compliments) {
                    if (!err && compliments) {
                        _this2.setState({ compliments: compliments });
                    }
                });
            }
        }
    }, {
        key: 'selectRating',
        value: function selectRating(x) {
            var _this3 = this;

            this.setState({ selectedRating: x });
            var type = this.getAppointmentType();
            var post_data = { 'rating': x, 'appointment_id': this.props.details.id, 'appointment_type': type };
            this.props.createAppointmentRating(post_data, function (err, data) {
                if (!err && data) {
                    _this3.setState({ rating_id: data.id });
                }
            });
        }
    }, {
        key: 'declineRating',
        value: function declineRating(type, id) {
            var post_data = { 'appointment_id': id, 'appointment_type': type };
            this.props.closeAppointmentRating(post_data, function (err, data) {
                if (!err && data) {
                    console.log('Popup Closed');
                }
            });

            this.setState({ data: null });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            if (this.state.rating_done && (this.state.data == null || this.state.data && this.state.data.length == 0)) {
                return _react2.default.createElement(_ThankYouPopUp2.default, _extends({}, this.props, { submit: this.thanYouButton, selectedRating: this.state.selectedRating, appointmentData: this.state.appointmentData }));
            }
            var app_id = this.props.details.id;
            var submitted_flag = !!this.props.rated_appoinments[app_id];
            if (!submitted_flag && this.state.data) {
                var qualification_object = this.props.details.doctor ? this.props.details.doctor.qualifications : null;
                var pipe = '';
                var data_obj = {
                    'name': this.props.details.doctor ? this.props.details.doctor.name : this.props.details.lab_name,
                    'qualification': qualification_object && qualification_object.length ? qualification_object[0].qualification : '',
                    'specialization': qualification_object && qualification_object.length ? qualification_object[0].specialization : '',
                    'type': this.getAppointmentType(),
                    'thumbnail': this.props.details.doctor ? this.props.details.doctor_thumbnail : this.props.details.lab_thumbnail,
                    'pipe': pipe
                };
                if (data_obj.type !== 1) {
                    data_obj.pipe = ' | ';
                }
                var entity = data_obj.type == 1 ? 'lab' : 'doctor';
                if (!this.state.rating_id) {
                    return _react2.default.createElement(
                        'div',
                        { className: 'rating-upside-container mt-0' },
                        _react2.default.createElement(
                            'div',
                            { className: 'sub-upside-star' },
                            _react2.default.createElement(
                                'p',
                                null,
                                'Rate your recent visit with the ',
                                entity
                            ),
                            [1, 2, 3, 4, 5].map(function (x, i) {
                                return _react2.default.createElement('img', { key: i, onClick: _this4.selectRating.bind(_this4, x), className: 'img-fluid', src: "/assets/img/customer-icons/" + (_this4.state.selectedRating > 0 && _this4.state.selectedRating >= x ? "" : "un") + "selected-star.svg" });
                            })
                        )
                    );
                } else {
                    return _react2.default.createElement(_ReviewPopUp2.default, _extends({}, this.props, { details: this.state.data, submit: this.submitRating, obj: data_obj, rating_id: this.state.rating_id, selected_rating: this.state.selectedRating, compliments: this.state.compliments }));
                }
            } else {
                return "";
            }
        }
    }]);

    return RatingProfileCard;
}(_react2.default.Component);

exports.default = RatingProfileCard;

/***/ }),

/***/ "./dev/js/components/commons/ratingsProfileView/ratingReviewView.js":
/*!**************************************************************************!*\
  !*** ./dev/js/components/commons/ratingsProfileView/ratingReviewView.js ***!
  \**************************************************************************/
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

var _reactInfiniteScroller = __webpack_require__(/*! react-infinite-scroller */ "./node_modules/react-infinite-scroller/index.js");

var _reactInfiniteScroller2 = _interopRequireDefault(_reactInfiniteScroller);

var _DesktopProfileHeader = __webpack_require__(/*! ../DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _ComplimentListView = __webpack_require__(/*! ../ratingsProfileView/ComplimentListView.js */ "./dev/js/components/commons/ratingsProfileView/ComplimentListView.js");

var _ComplimentListView2 = _interopRequireDefault(_ComplimentListView);

var _ReviewList = __webpack_require__(/*! ../ratingsProfileView/ReviewList.js */ "./dev/js/components/commons/ratingsProfileView/ReviewList.js");

var _ReviewList2 = _interopRequireDefault(_ReviewList);

var _RatingGraph = __webpack_require__(/*! ../ratingsProfileView/RatingGraph.js */ "./dev/js/components/commons/ratingsProfileView/RatingGraph.js");

var _RatingGraph2 = _interopRequireDefault(_RatingGraph);

var _LeftBar = __webpack_require__(/*! ../LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _footer = __webpack_require__(/*! ../Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RatingReviewView = function (_React$Component) {
    _inherits(RatingReviewView, _React$Component);

    function RatingReviewView(props) {
        _classCallCheck(this, RatingReviewView);

        var _this = _possibleConstructorReturn(this, (RatingReviewView.__proto__ || Object.getPrototypeOf(RatingReviewView)).call(this, props));

        _this.state = {
            data: null,
            hasMore: false,
            footerData: null,
            page: 2
        };
        return _this;
    }

    _createClass(RatingReviewView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (window) {
                window.scrollTo(0, 0);
            }
            this.props.getAllRatings(this.props.content_type, this.props.id, 1, function (err, data, hasMore) {
                if (!err && data) {
                    _this2.setState({ data: data, hasMore: hasMore });
                }
            });
            setTimeout(function () {
                _this2.setState({ hasMore: true });
            }, 0);
        }
    }, {
        key: 'loadMore',
        value: function loadMore() {
            var _this3 = this;

            this.setState({ hasMore: false, loading: true }, function () {
                _this3.props.getAllRatings(_this3.props.content_type, _this3.props.id, _this3.state.page, function (err, data, hasMore) {
                    var newData = _extends({}, _this3.state.data);
                    newData.rating = newData.rating.concat(data.rating);
                    _this3.setState({ loading: false, page: _this3.state.page + 1, hasMore: hasMore, data: newData });
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.state.data ? _react2.default.createElement(
                    'div',
                    { className: 'widget-panel' },
                    _react2.default.createElement(
                        'h4',
                        { className: 'panel-title mb-rmv' },
                        'Patient Feedback ',
                        _react2.default.createElement('a', { className: 'rateViewAll' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'panel-content pd-0 border-bottom-panel' },
                        _react2.default.createElement(_RatingGraph2.default, { details: this.state.data }),
                        _react2.default.createElement(
                            'div',
                            { className: 'user-satisfaction-section' },
                            _react2.default.createElement(
                                'div',
                                { className: 'row no-gutters' },
                                this.state.data.rating_graph && this.state.data.rating_graph.top_compliments ? this.state.data.rating_graph.top_compliments.map(function (compliment) {
                                    return _react2.default.createElement(_ComplimentListView2.default, { key: compliment.id, details: compliment });
                                }) : _react2.default.createElement('div', null)
                            )
                        ),
                        _react2.default.createElement(
                            _reactInfiniteScroller2.default,
                            {
                                pageStart: 1,
                                loadMore: this.loadMore.bind(this),
                                hasMore: this.state.hasMore,
                                useWindow: true,
                                initialLoad: false
                            },
                            _react2.default.createElement(_ReviewList2.default, { details: this.state.data })
                        )
                    )
                ) : ''
            );
        }
    }]);

    return RatingReviewView;
}(_react2.default.Component);

exports.default = RatingReviewView;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9Db21wbGltZW50TGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9yYXRpbmdzUHJvZmlsZVZpZXcvUmF0aW5nUHJvZmlsZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9yYXRpbmdzUHJvZmlsZVZpZXcvcmF0aW5nUmV2aWV3Vmlldy5qcyJdLCJuYW1lcyI6WyJDb21wbGltZW50TGlzdFZpZXciLCJwcm9wcyIsImRldGFpbHMiLCJpY29uIiwibWVzc2FnZSIsImNvdW50IiwiUmVhY3QiLCJDb21wb25lbnQiLCJSYXRpbmdQcm9maWxlQ2FyZCIsImdldEFwcG9pbnRtZW50VHlwZSIsInR5cGUiLCJ0aGFuWW91QnV0dG9uIiwic2V0U3RhdGUiLCJyYXRpbmdfZG9uZSIsInN1Ym1pdFJhdGluZyIsInBvc3RfZGF0YSIsImZsYWciLCJkYXRhIiwidXBkYXRlQXBwb2ludG1lbnRSYXRpbmciLCJlcnIiLCJhcHBvaW50bWVudERhdGEiLCJzdGF0ZSIsInNlbGVjdGVkUmF0aW5nIiwicmF0aW5nX2lkIiwiY29tcGxpbWVudHMiLCJTVE9SQUdFIiwiY2hlY2tBdXRoIiwiZ2V0UmF0aW5nQ29tcGxpbWVudHMiLCJ4IiwiaWQiLCJjcmVhdGVBcHBvaW50bWVudFJhdGluZyIsImNsb3NlQXBwb2ludG1lbnRSYXRpbmciLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiYXBwX2lkIiwic3VibWl0dGVkX2ZsYWciLCJyYXRlZF9hcHBvaW5tZW50cyIsInF1YWxpZmljYXRpb25fb2JqZWN0IiwiZG9jdG9yIiwicXVhbGlmaWNhdGlvbnMiLCJwaXBlIiwiZGF0YV9vYmoiLCJuYW1lIiwibGFiX25hbWUiLCJxdWFsaWZpY2F0aW9uIiwic3BlY2lhbGl6YXRpb24iLCJkb2N0b3JfdGh1bWJuYWlsIiwibGFiX3RodW1ibmFpbCIsImVudGl0eSIsIm1hcCIsImkiLCJzZWxlY3RSYXRpbmciLCJiaW5kIiwiUmF0aW5nUmV2aWV3VmlldyIsImhhc01vcmUiLCJmb290ZXJEYXRhIiwicGFnZSIsIndpbmRvdyIsInNjcm9sbFRvIiwiZ2V0QWxsUmF0aW5ncyIsImNvbnRlbnRfdHlwZSIsInNldFRpbWVvdXQiLCJsb2FkaW5nIiwibmV3RGF0YSIsInJhdGluZyIsImNvbmNhdCIsInJhdGluZ19ncmFwaCIsInRvcF9jb21wbGltZW50cyIsImNvbXBsaW1lbnQiLCJsb2FkTW9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxrQjs7O0FBQ0YsZ0NBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx1SUFDVEEsS0FEUztBQUVsQjs7OztpQ0FFUTtBQUNMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLEVBQWY7QUFDSTtBQUFBO0FBQUEsc0JBQUssV0FBVSwwQkFBZjtBQUNJLDJEQUFLLFdBQVUsV0FBZixFQUEyQixLQUFLLEtBQUtBLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkMsSUFBbkQsR0FESjtBQUVJO0FBQUE7QUFBQTtBQUFJLDZCQUFLRixLQUFMLENBQVdDLE9BQVgsQ0FBbUJFO0FBQXZCLHFCQUZKO0FBR0k7QUFBQTtBQUFBO0FBQU8sNkJBQUtILEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkc7QUFBMUI7QUFISjtBQURKLGFBREo7QUFTSDs7OztFQWY0QkMsZ0JBQU1DLFM7O2tCQWtCeEJQLGtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJmOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFHTVEsaUI7OztBQUNGLCtCQUFZUCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMElBQ1RBLEtBRFM7O0FBQUEsY0E2Q25CUSxrQkE3Q21CLEdBNkNFLFlBQU07QUFDdkIsZ0JBQUlDLE9BQU8sTUFBS1QsS0FBTCxDQUFXQyxPQUFYLENBQW1CUSxJ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QUFVLDJCQUFmO0FBQ0k7QUFBQTtBQUFBLGtDQUFLLFdBQVUsZ0JBQWY7QUFDSyxxQ0FBS0ksS0FBTCxDQUFXSixJQUFYLENBQWdCa0QsWUFBaEIsSUFBZ0MsS0FBSzlDLEtBQUwsQ0FBV0osSUFBWCxDQUFnQmtELFlBQWhCLENBQTZCQyxlQUE3RCxHQUNHLEtBQUsvQyxLQUFMLENBQVdKLElBQVgsQ0FBZ0JrRCxZQUFoQixDQUE2QkMsZUFBN0IsQ0FBNkNsQixHQUE3QyxDQUFpRDtBQUFBLDJDQUM3Qyw4QkFBQyw0QkFBRCxJQUFvQixLQUFLbUIsV0FBV3hDLEVBQXBDLEVBQXdDLFNBQVN3QyxVQUFqRCxHQUQ2QztBQUFBLGlDQUFqRCxDQURILEdBR087QUFKWjtBQURKLHlCQUZKO0FBV0k7QUFBQywyREFBRDtBQUFBO0FBQ0ksMkNBQVcsQ0FEZjtBQUVJLDBDQUFVLEtBQUtDLFFBQUwsQ0FBY2pCLElBQWQsQ0FBbUIsSUFBbkIsQ0FGZDtBQUdJLHlDQUFTLEtBQUtoQyxLQUFMLENBQVdrQyxPQUh4QjtBQUlJLDJDQUFXLElBSmY7QUFLSSw2Q0FBYTtBQUxqQjtBQU9JLDBEQUFDLG9CQUFELElBQVksU0FBUyxLQUFLbEMsS0FBTCxDQUFXSixJQUFoQztBQVBKO0FBWEo7QUFGSixpQkFEQSxHQXlCQztBQTNCTCxhQURKO0FBZ0NIOzs7O0VBdkUwQlgsZ0JBQU1DLFM7O2tCQTRFdEIrQyxnQiIsImZpbGUiOiI0OC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIENvbXBsaW1lbnRMaXN0VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXNhdGlzZmFjdGlvbi1pbWFnZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e3RoaXMucHJvcHMuZGV0YWlscy5pY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5wcm9wcy5kZXRhaWxzLm1lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5kZXRhaWxzLmNvdW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcGxpbWVudExpc3RWaWV3O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuaW1wb3J0IFJldmlld1BvcFVwIGZyb20gJy4vUmV2aWV3UG9wVXAnXG5pbXBvcnQgVGhhbmtZb3VQb3BVcCBmcm9tICcuL1RoYW5rWW91UG9wVXAnXG5cblxuY2xhc3MgUmF0aW5nUHJvZmlsZUNhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgICAgICBzZWxlY3RlZFJhdGluZzogMCxcbiAgICAgICAgICAgIHJhdGluZ19pZDogbnVsbCxcbiAgICAgICAgICAgIGNvbXBsaW1lbnRzOiBbXSxcbiAgICAgICAgICAgIHJhdGluZ19kb25lOiBmYWxzZSxcbiAgICAgICAgICAgIGFwcG9pbnRtZW50RGF0YTpudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IHRoaXMucHJvcHMuZGV0YWlscyB9KVxuICAgICAgICBpZiAoU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRSYXRpbmdDb21wbGltZW50cygoZXJyLCBjb21wbGltZW50cykgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXJyICYmIGNvbXBsaW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21wbGltZW50cyB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RSYXRpbmcoeCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRSYXRpbmc6IHggfSlcbiAgICAgICAgbGV0IHR5cGUgPSB0aGlzLmdldEFwcG9pbnRtZW50VHlwZSgpO1xuICAgICAgICBsZXQgcG9zdF9kYXRhID0geyAncmF0aW5nJzogeCwgJ2FwcG9pbnRtZW50X2lkJzogdGhpcy5wcm9wcy5kZXRhaWxzLmlkLCAnYXBwb2ludG1lbnRfdHlwZSc6IHR5cGUgfTtcbiAgICAgICAgdGhpcy5wcm9wcy5jcmVhdGVBcHBvaW50bWVudFJhdGluZyhwb3N0X2RhdGEsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmICghZXJyICYmIGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmF0aW5nX2lkOiBkYXRhLmlkIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZGVjbGluZVJhdGluZyh0eXBlLCBpZCkge1xuICAgICAgICBsZXQgcG9zdF9kYXRhID0geyAnYXBwb2ludG1lbnRfaWQnOiBpZCwgJ2FwcG9pbnRtZW50X3R5cGUnOiB0eXBlIH07XG4gICAgICAgIHRoaXMucHJvcHMuY2xvc2VBcHBvaW50bWVudFJhdGluZyhwb3N0X2RhdGEsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmICghZXJyICYmIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUG9wdXAgQ2xvc2VkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IG51bGwgfSlcbiAgICB9XG5cbiAgICBnZXRBcHBvaW50bWVudFR5cGUgPSAoKSA9PiB7XG4gICAgICAgIGxldCB0eXBlID0gdGhpcy5wcm9wcy5kZXRhaWxzLnR5cGUgJiYgdGhpcy5wcm9wcy5kZXRhaWxzLnR5cGUgPT0gXCJsYWJcIiA/IDEgOiAyO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG5cblxuICAgIHRoYW5Zb3VCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByYXRpbmdfZG9uZTogZmFsc2UgfSlcbiAgICB9XG5cbiAgICBzdWJtaXRSYXRpbmcgPSAocG9zdF9kYXRhLCBmbGFnKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBudWxsIH0pXG4gICAgICAgIGlmICghZmxhZykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVBcHBvaW50bWVudFJhdGluZyhwb3N0X2RhdGEsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWVyciAmJiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhcHBvaW50bWVudERhdGE6dGhpcy5zdGF0ZS5kYXRhLCBkYXRhOiBudWxsLCByYXRpbmdfZG9uZTogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnJhdGluZ19kb25lICYmICgodGhpcy5zdGF0ZS5kYXRhID09IG51bGwpIHx8ICh0aGlzLnN0YXRlLmRhdGEgJiYgdGhpcy5zdGF0ZS5kYXRhLmxlbmd0aCA9PSAwKSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoPFRoYW5rWW91UG9wVXAgey4uLnRoaXMucHJvcHN9IHN1Ym1pdD17dGhpcy50aGFuWW91QnV0dG9ufSBzZWxlY3RlZFJhdGluZz17dGhpcy5zdGF0ZS5zZWxlY3RlZFJhdGluZ30gYXBwb2ludG1lbnREYXRhPXt0aGlzLnN0YXRlLmFwcG9pbnRtZW50RGF0YX0vPik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFwcF9pZCA9IHRoaXMucHJvcHMuZGV0YWlscy5pZFxuICAgICAgICBsZXQgc3VibWl0dGVkX2ZsYWcgPSAhIXRoaXMucHJvcHMucmF0ZWRfYXBwb2lubWVudHNbYXBwX2lkXTtcbiAgICAgICAgaWYgKCFzdWJtaXR0ZWRfZmxhZyAmJiB0aGlzLnN0YXRlLmRhdGEpIHtcbiAgICAgICAgICAgIGxldCBxdWFsaWZpY2F0aW9uX29iamVjdCA9IHRoaXMucHJvcHMuZGV0YWlscy5kb2N0b3IgPyB0aGlzLnByb3BzLmRldGFpbHMuZG9jdG9yLnF1YWxpZmljYXRpb25zIDogbnVsbDtcbiAgICAgICAgICAgIGxldCBwaXBlID0gJydcbiAgICAgICAgICAgIGxldCBkYXRhX29iaiA9IHtcbiAgICAgICAgICAgICAgICAnbmFtZSc6ICh0aGlzLnByb3BzLmRldGFpbHMuZG9jdG9yKSA/IHRoaXMucHJvcHMuZGV0YWlscy5kb2N0b3IubmFtZSA6IHRoaXMucHJvcHMuZGV0YWlscy5sYWJfbmFtZSxcbiAgICAgICAgICAgICAgICAncXVhbGlmaWNhdGlvbic6IHF1YWxpZmljYXRpb25fb2JqZWN0ICYmIHF1YWxpZmljYXRpb25fb2JqZWN0Lmxlbmd0aCA/IHF1YWxpZmljYXRpb25fb2JqZWN0WzBdLnF1YWxpZmljYXRpb24gOiAnJyxcbiAgICAgICAgICAgICAgICAnc3BlY2lhbGl6YXRpb24nOiBxdWFsaWZpY2F0aW9uX29iamVjdCAmJiBxdWFsaWZpY2F0aW9uX29iamVjdC5sZW5ndGggPyBxdWFsaWZpY2F0aW9uX29iamVjdFswXS5zcGVjaWFsaXphdGlvbiA6ICcnLFxuICAgICAgICAgICAgICAgICd0eXBlJzogdGhpcy5nZXRBcHBvaW50bWVudFR5cGUoKSxcbiAgICAgICAgICAgICAgICAndGh1bWJuYWlsJzogdGhpcy5wcm9wcy5kZXRhaWxzLmRvY3RvciA/IHRoaXMucHJvcHMuZGV0YWlscy5kb2N0b3JfdGh1bWJuYWlsIDogdGhpcy5wcm9wcy5kZXRhaWxzLmxhYl90aHVtYm5haWwsXG4gICAgICAgICAgICAgICAgJ3BpcGUnOiBwaXBlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YV9vYmoudHlwZSAhPT0gMSkge1xuICAgICAgICAgICAgICAgIGRhdGFfb2JqLnBpcGUgPSAnIHwgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBlbnRpdHkgPSAoZGF0YV9vYmoudHlwZSA9PSAxKSA/ICdsYWInIDogJ2RvY3Rvcic7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUucmF0aW5nX2lkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctdXBzaWRlLWNvbnRhaW5lciBtdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi11cHNpZGUtc3RhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJhdGUgeW91ciByZWNlbnQgdmlzaXQgd2l0aCB0aGUge2VudGl0eX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbMSwgMiwgMywgNCwgNV0ubWFwKCh4LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGltZyBrZXk9e2l9IG9uQ2xpY2s9e3RoaXMuc2VsZWN0UmF0aW5nLmJpbmQodGhpcywgeCl9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17XCIvYXNzZXRzL2ltZy9jdXN0b21lci1pY29ucy9cIiArICh0aGlzLnN0YXRlLnNlbGVjdGVkUmF0aW5nID4gMCAmJiB0aGlzLnN0YXRlLnNlbGVjdGVkUmF0aW5nID49IHggPyBcIlwiIDogXCJ1blwiKSArIFwic2VsZWN0ZWQtc3Rhci5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoPFJldmlld1BvcFVwIHsuLi50aGlzLnByb3BzfSBkZXRhaWxzPXt0aGlzLnN0YXRlLmRhdGF9IHN1Ym1pdD17dGhpcy5zdWJtaXRSYXRpbmd9IG9iaj17ZGF0YV9vYmp9IHJhdGluZ19pZD17dGhpcy5zdGF0ZS5yYXRpbmdfaWR9IHNlbGVjdGVkX3JhdGluZz17dGhpcy5zdGF0ZS5zZWxlY3RlZFJhdGluZ30gY29tcGxpbWVudHM9e3RoaXMuc3RhdGUuY29tcGxpbWVudHN9IC8+KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChcIlwiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmF0aW5nUHJvZmlsZUNhcmQ7XG5cblxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSAncmVhY3QtaW5maW5pdGUtc2Nyb2xsZXInO1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgQ29tcGxpbWVudExpc3RWaWV3IGZyb20gJy4uL3JhdGluZ3NQcm9maWxlVmlldy9Db21wbGltZW50TGlzdFZpZXcuanMnXG5pbXBvcnQgUmV2aWV3TGlzdCBmcm9tICcuLi9yYXRpbmdzUHJvZmlsZVZpZXcvUmV2aWV3TGlzdC5qcydcbmltcG9ydCBSYXRpbmdHcmFwaCBmcm9tICcuLi9yYXRpbmdzUHJvZmlsZVZpZXcvUmF0aW5nR3JhcGguanMnXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi9MZWZ0QmFyJ1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uL1JpZ2h0QmFyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9Ib21lL2Zvb3RlcidcblxuY2xhc3MgUmF0aW5nUmV2aWV3VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgICAgaGFzTW9yZTogZmFsc2UsXG4gICAgICAgICAgICBmb290ZXJEYXRhOiBudWxsLFxuICAgICAgICAgICAgcGFnZTogMlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuZ2V0QWxsUmF0aW5ncyh0aGlzLnByb3BzLmNvbnRlbnRfdHlwZSwgdGhpcy5wcm9wcy5pZCwgMSwgKGVyciwgZGF0YSwgaGFzTW9yZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlcnIgJiYgZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhLCBoYXNNb3JlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc01vcmU6IHRydWUgfSlcbiAgICAgICAgfSwgMClcbiAgICB9XG5cbiAgICBsb2FkTW9yZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc01vcmU6IGZhbHNlLCBsb2FkaW5nOiB0cnVlIH0sICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0QWxsUmF0aW5ncyh0aGlzLnByb3BzLmNvbnRlbnRfdHlwZSwgdGhpcy5wcm9wcy5pZCwgdGhpcy5zdGF0ZS5wYWdlLCAoZXJyLCBkYXRhLCBoYXNNb3JlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0RhdGEgPSB7IC4uLnRoaXMuc3RhdGUuZGF0YSB9XG4gICAgICAgICAgICAgICAgbmV3RGF0YS5yYXRpbmcgPSBuZXdEYXRhLnJhdGluZy5jb25jYXQoZGF0YS5yYXRpbmcpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBwYWdlOiB0aGlzLnN0YXRlLnBhZ2UgKyAxLCBoYXNNb3JlLCBkYXRhOiBuZXdEYXRhIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhP1xuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJwYW5lbC10aXRsZSBtYi1ybXZcIj5QYXRpZW50IEZlZWRiYWNrIDxhIGNsYXNzTmFtZT1cInJhdGVWaWV3QWxsXCI+PC9hPjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtY29udGVudCBwZC0wIGJvcmRlci1ib3R0b20tcGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYXRpbmdHcmFwaCBkZXRhaWxzPXt0aGlzLnN0YXRlLmRhdGF9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItc2F0aXNmYWN0aW9uLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEucmF0aW5nX2dyYXBoICYmIHRoaXMuc3RhdGUuZGF0YS5yYXRpbmdfZ3JhcGgudG9wX2NvbXBsaW1lbnRzP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhLnJhdGluZ19ncmFwaC50b3BfY29tcGxpbWVudHMubWFwKGNvbXBsaW1lbnQgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tcGxpbWVudExpc3RWaWV3IGtleT17Y29tcGxpbWVudC5pZH0gZGV0YWlscz17Y29tcGxpbWVudH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiA8ZGl2PjwvZGl2Pn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5maW5pdGVTY3JvbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU3RhcnQ9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZE1vcmU9e3RoaXMubG9hZE1vcmUuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNNb3JlPXt0aGlzLnN0YXRlLmhhc01vcmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlV2luZG93PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxMb2FkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV2aWV3TGlzdCBkZXRhaWxzPXt0aGlzLnN0YXRlLmRhdGF9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0luZmluaXRlU2Nyb2xsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA6JycgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApXG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUmF0aW5nUmV2aWV3VmlldztcbiJdLCJzb3VyY2VSb290IjoiIn0=