(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./dev/js/components/opd/patientDetails/VisitTimeNew.js":
/*!**************************************************************!*\
  !*** ./dev/js/components/opd/patientDetails/VisitTimeNew.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MONTHS = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
var WEEK_DAYS = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
// const moment = require('moment');

var VisitTimeNew = function (_React$Component) {
    _inherits(VisitTimeNew, _React$Component);

    function VisitTimeNew(props) {
        _classCallCheck(this, VisitTimeNew);

        return _possibleConstructorReturn(this, (VisitTimeNew.__proto__ || Object.getPrototypeOf(VisitTimeNew)).call(this, props));
    }

    _createClass(VisitTimeNew, [{
        key: 'selectTime',
        value: function selectTime(time, selectedTimeSlotDate) {

            var eventData = {
                'Category': 'ConsumerApp', 'Action': 'EarlyTimeSlotClicked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'early-time-slot-clicked'
            };
            _gtm2.default.sendEvent({ data: eventData });

            var self = this;
            var timeSpan = Object.assign({}, time);
            timeSpan.title = time.title;
            var data = {
                date: selectedTimeSlotDate,
                month: MONTHS[new Date(selectedTimeSlotDate).getMonth()],
                slot: '',
                time: timeSpan,
                summaryPage: true
            };
            this.props.selectTimeSlot(data);
        }
    }, {
        key: 'isTimeSlotAvailable',
        value: function isTimeSlotAvailable(timeSlot, currentDate) {

            var today = new Date();
            var tomorrow = new Date();
            tomorrow.setDate(today.getDate() + 1);

            var dateAfterOneHour = new Date(currentDate).setHours(today.getHours() + 1);

            if (timeSlot.on_call && today.toDateString() == new Date(currentDate).toDateString()) {
                return false;
            }

            if (new Date(dateAfterOneHour).toDateString() == today.toDateString() && new Date(dateAfterOneHour).getHours() + new Date(dateAfterOneHour).getMinutes() / 60 > timeSlot.value) {
                return false;
            }
            if (this.props.doctor_leaves && this.props.doctor_leaves.length) {

                var blocked = false;
                this.props.doctor_leaves.map(function (leave) {
                    var start_date = new Date(leave.start_date);
                    start_date = start_date.setHours(0, 0, 0, 0);
                    var end_date = new Date(leave.end_date);
                    end_date = end_date.setHours(0, 0, 0, 0);
                    var curr_date = new Date(currentDate);
                    curr_date = curr_date.setHours(0, 0, 0, 0);
                    if (curr_date >= start_date && curr_date <= end_date) {
                        if (timeSlot.value >= leave.leave_start_time && timeSlot.value <= leave.leave_end_time) {
                            blocked = true;
                        }
                    }
                });

                if (blocked) {
                    return false;
                }
            }

            if (today.toDateString() == new Date(currentDate).toDateString() && this.props.today_min) {
                if (this.props.today_max) {
                    return timeSlot.value > this.props.today_min && timeSlot.value < this.props.today_max;
                }
                return timeSlot.value > this.props.today_min;
            }

            if (tomorrow.toDateString() == new Date(currentDate).toDateString() && this.props.tomorrow_min) {
                return timeSlot.value > this.props.tomorrow_min;
            }

            // base case if nothing works :)
            if (today.toDateString() == new Date(currentDate).toDateString()) {
                return timeSlot.value > today.getHours() + 1;
            }

            return true;
        }
    }, {
        key: 'viewAllClicked',
        value: function viewAllClicked() {

            this.props.navigateTo('time');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var upcomingDate = null;
            if (this.props.upcoming_slots && Object.keys(this.props.upcoming_slots) && Object.keys(this.props.upcoming_slots).length) {
                upcomingDate = Object.keys(this.props.upcoming_slots)[0];
                upcomingDate = new Date(upcomingDate);
            }

            var _props$selectedSlot = this.props.selectedSlot,
                date = _props$selectedSlot.date,
                time = _props$selectedSlot.time;


            if (date) {
                date = new Date(date).toDateString();
            }
            return _react2.default.createElement(
                'div',
                { className: 'widget mrb-15 ' + (this.props.timeError ? 'rnd-error-nm' : '') },
                _react2.default.createElement(
                    'div',
                    { className: 'widget-content pos-relative' },
                    _react2.default.createElement(
                        'div',
                        { className: 'lab-visit-time d-flex jc-spaceb mb-0' },
                        _react2.default.createElement(
                            'h4',
                            { className: 'title mb-0' },
                            _react2.default.createElement(
                                'span',
                                null,
                                _react2.default.createElement('img', { src: "/assets" + "/img/watch-date.svg", className: 'visit-time-icon' })
                            ),
                            'Visit Time'
                        )
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'apnt-doc-dtl' },
                        'The appointment is subject to confirmation from the Doctor. '
                    ),
                    this.props.selectedSlot && this.props.selectedSlot.summaryPage || !date ? _react2.default.createElement(
                        'div',
                        { className: 'nw-timeslot-container' },
                        this.props.upcoming_slots && Object.values(this.props.upcoming_slots) && Object.values(this.props.upcoming_slots).length ? _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'p',
                                { className: 'avl-time-slot' },
                                'Next available on ',
                                _react2.default.createElement(
                                    'span',
                                    { className: '' },
                                    WEEK_DAYS[upcomingDate.getDay()],
                                    ', ',
                                    upcomingDate.getDate(),
                                    ' ',
                                    MONTHS[upcomingDate.getMonth()],
                                    ':'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'select-time-listing-container align-flex-sp-bt' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'time-slot-main-listing' },
                                    _react2.default.createElement(
                                        'ul',
                                        { className: 'inline-list nw-time-st' },
                                        Object.values(this.props.upcoming_slots)[0].map(function (time, i) {
                                            return _react2.default.createElement(
                                                'li',
                                                { key: i, className: 'nw-time-slot-li', onClick: _this2.selectTime.bind(_this2, time, upcomingDate) },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'time-slot-timmings ' + (_this2.props.selectedSlot && _this2.props.selectedSlot.time ? '' + (_this2.props.selectedSlot.time.value == time.value ? " time-active" : '') : '')
                                                    },
                                                    time.text,
                                                    ' ',
                                                    time.text ? time.value >= 12 ? 'PM' : 'AM' : ''
                                                )
                                            );
                                        })
                                    )
                                ),
                                this.props.selectedSlot && this.props.selectedSlot.summaryPage || !date ? _react2.default.createElement(
                                    'div',
                                    { className: 'new-all-slot-cont' },
                                    _react2.default.createElement(
                                        'a',
                                        { href: '', className: 'text-primary fw-700 text-sm', onClick: function onClick(e) {
                                                e.preventDefault();
                                                _this2.viewAllClicked();
                                            } },
                                        _react2.default.createElement('img', { className: 'sl-cal-img', src: "/assets" + "/img/cal.svg" }),
                                        ' View all'
                                    )
                                ) : ''
                            )
                        ) : _react2.default.createElement(
                            'div',
                            null,
                            'No time slots Available'
                        )
                    ) : _react2.default.createElement(
                        'div',
                        { className: 'timeAfterSelect text-right' },
                        _react2.default.createElement(
                            'h4',
                            { className: 'date-time title' },
                            date ? WEEK_DAYS[new Date(date).getDay()] + ', ' + new Date(date).getDate() + ' ' + MONTHS[new Date(date).getMonth()] : '',
                            ' ',
                            time.text ? "|" : "",
                            ' ',
                            time.text,
                            ' ',
                            time.text ? time.value >= 12 ? 'PM' : 'AM' : ''
                        ),
                        !this.props.hideChangeTime ? _react2.default.createElement(
                            'a',
                            { href: '', onClick: function onClick(e) {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    _this2.props.navigateTo('time');
                                }, className: 'text-primary fw-700 text-sm' },
                            time.text ? "Change" : "Select",
                            ' Time'
                        ) : ""
                    )
                )
            );
        }
    }]);

    return VisitTimeNew;
}(_react2.default.Component);

exports.default = VisitTimeNew;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvcGF0aWVudERldGFpbHMvVmlzaXRUaW1lTmV3LmpzIl0sIm5hbWVzIjpbIk1PTlRIUyIsIldFRUtfREFZUyIsIlZpc2l0VGltZU5ldyIsInByb3BzIiwidGltZSIsInNlbGVjdGVkVGltZVNsb3REYXRlIiwiZXZlbnREYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VuZEV2ZW50IiwiZGF0YSIsInNlbGYiLCJ0aW1lU3BhbiIsIk9iamVjdCIsImFzc2lnbiIsInRpdGxlIiwiZGF0ZSIsIm1vbnRoIiwiRGF0ZSIsImdldE1vbnRoIiwic2xvdCIsInN1bW1hcnlQYWdlIiwic2VsZWN0VGltZVNsb3QiLCJ0aW1lU2xvdCIsImN1cnJlbnREYXRlIiwidG9kYXkiLCJ0b21vcnJvdyIsInNldERhdGUiLCJnZXREYXRlIiwiZGF0ZUFmdGVyT25lSG91ciIsInNldEhvdXJzIiwiZ2V0SG91cnMiLCJvbl9jYWxsIiwidG9EYXRlU3RyaW5nIiwiZ2V0TWludXRlcyIsInZhbHVlIiwiZG9jdG9yX2xlYXZlcyIsImxlbmd0aCIsImJsb2NrZWQiLCJtYXAiLCJsZWF2ZSIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsImN1cnJfZGF0ZSIsImxlYXZlX3N0YXJ0X3RpbWUiLCJsZWF2ZV9lbmRfdGltZSIsInRvZGF5X21pbiIsInRvZGF5X21heCIsInRvbW9ycm93X21pbiIsIm5hdmlnYXRlVG8iLCJ1cGNvbWluZ0RhdGUiLCJ1cGNvbWluZ19zbG90cyIsImtleXMiLCJzZWxlY3RlZFNsb3QiLCJ0aW1lRXJyb3IiLCJBU1NFVFNfQkFTRV9VUkwiLCJ2YWx1ZXMiLCJnZXREYXkiLCJpIiwic2VsZWN0VGltZSIsImJpbmQiLCJ0ZXh0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwidmlld0FsbENsaWNrZWQiLCJoaWRlQ2hhbmdlVGltZSIsInN0b3BQcm9wYWdhdGlvbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdz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LDhCQUFJLFdBQVUsaUJBQWQ7QUFBaUN2QyxtQ0FBVWYsVUFBVSxJQUFJaUIsSUFBSixDQUFTRixJQUFULEVBQWV5QyxNQUFmLEVBQVYsQ0FBVixVQUFpRCxJQUFJdkMsSUFBSixDQUFTRixJQUFULEVBQWVZLE9BQWYsRUFBakQsU0FBNkU1QixPQUFPLElBQUlrQixJQUFKLENBQVNGLElBQVQsRUFBZUcsUUFBZixFQUFQLENBQTdFLEdBQW1ILEVBQXBKO0FBQUE7QUFBeUpmLGlDQUFLeUQsSUFBTCxHQUFZLEdBQVosR0FBa0IsRUFBM0s7QUFBQTtBQUFnTHpELGlDQUFLeUQsSUFBckw7QUFBQTtBQUE0THpELGlDQUFLeUQsSUFBTCxHQUFhekQsS0FBSytCLEtBQUwsSUFBYyxFQUFkLEdBQW1CLElBQW5CLEdBQTBCLElBQXZDLEdBQStDO0FBQTNPLHlCQURGO0FBR00seUJBQUMsS0FBS2hDLEtBQUwsQ0FBVzhELGNBQVosR0FBNkI7QUFBQTtBQUFBLDhCQUFHLE1BQUssRUFBUixFQUFXLFNBQVMsaUJBQUNILENBQUQsRUFBTztBQUNwREEsc0NBQUVDLGNBQUY7QUFDQUQsc0NBQUVJLGVBQUY7QUFDQSwyQ0FBSy9ELEtBQUwsQ0FBVzhDLFVBQVgsQ0FBc0IsTUFBdEI7QUFDSCxpQ0FKNEIsRUFJMUIsV0FBVSw2QkFKZ0I7QUFJZTdDLGlDQUFLeUQsSUFBTCxHQUFZLFFBQVosR0FBdUIsUUFKdEM7QUFBQTtBQUFBLHlCQUE3QixHQUl3RjtBQVA5RjtBQXpDZDtBQURKLGFBREo7QUE0REg7Ozs7RUEvSnNCTSxnQkFBTUMsUzs7a0JBbUtsQmxFLFkiLCJmaWxlIjoiMzYuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0nO1xuY29uc3QgTU9OVEhTID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1ZycsICdTZXB0JywgJ09jdCcsICdOb3YnLCAnRGVjJ11cbmNvbnN0IFdFRUtfREFZUyA9IFsnU3VuJywgJ01vbicsICdUdWVzJywgJ1dlZCcsICdUaHVyJywgJ0ZyaScsICdTYXQnXVxuLy8gY29uc3QgbW9tZW50ID0gcmVxdWlyZSgnbW9tZW50Jyk7XG5cbmNsYXNzIFZpc2l0VGltZU5ldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgc2VsZWN0VGltZSh0aW1lLCBzZWxlY3RlZFRpbWVTbG90RGF0ZSkge1xuXG4gICAgICAgIGxldCBldmVudERhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0Vhcmx5VGltZVNsb3RDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnZWFybHktdGltZS1zbG90LWNsaWNrZWQnXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGV2ZW50RGF0YSB9KVxuXG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBsZXQgdGltZVNwYW4gPSBPYmplY3QuYXNzaWduKHt9LCB0aW1lKVxuICAgICAgICB0aW1lU3Bhbi50aXRsZSA9IHRpbWUudGl0bGVcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBkYXRlOiBzZWxlY3RlZFRpbWVTbG90RGF0ZSxcbiAgICAgICAgICAgIG1vbnRoOiBNT05USFNbbmV3IERhdGUoc2VsZWN0ZWRUaW1lU2xvdERhdGUpLmdldE1vbnRoKCldLFxuICAgICAgICAgICAgc2xvdDogJycsXG4gICAgICAgICAgICB0aW1lOiB0aW1lU3BhbixcbiAgICAgICAgICAgIHN1bW1hcnlQYWdlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RUaW1lU2xvdChkYXRhKVxuICAgIH1cblxuICAgIGlzVGltZVNsb3RBdmFpbGFibGUodGltZVNsb3QsIGN1cnJlbnREYXRlKSB7XG5cbiAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKVxuICAgICAgICBsZXQgdG9tb3Jyb3cgPSBuZXcgRGF0ZSgpXG4gICAgICAgIHRvbW9ycm93LnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICsgMSlcblxuICAgICAgICBsZXQgZGF0ZUFmdGVyT25lSG91ciA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKS5zZXRIb3Vycyh0b2RheS5nZXRIb3VycygpICsgMSlcblxuICAgICAgICBpZiAodGltZVNsb3Qub25fY2FsbCAmJiB0b2RheS50b0RhdGVTdHJpbmcoKSA9PSBuZXcgRGF0ZShjdXJyZW50RGF0ZSkudG9EYXRlU3RyaW5nKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ldyBEYXRlKGRhdGVBZnRlck9uZUhvdXIpLnRvRGF0ZVN0cmluZygpID09IHRvZGF5LnRvRGF0ZVN0cmluZygpICYmIChuZXcgRGF0ZShkYXRlQWZ0ZXJPbmVIb3VyKS5nZXRIb3VycygpICsgbmV3IERhdGUoZGF0ZUFmdGVyT25lSG91cikuZ2V0TWludXRlcygpIC8gNjApID4gdGltZVNsb3QudmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRvY3Rvcl9sZWF2ZXMgJiYgdGhpcy5wcm9wcy5kb2N0b3JfbGVhdmVzLmxlbmd0aCkge1xuXG4gICAgICAgICAgICBsZXQgYmxvY2tlZCA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLnByb3BzLmRvY3Rvcl9sZWF2ZXMubWFwKChsZWF2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzdGFydF9kYXRlID0gbmV3IERhdGUobGVhdmUuc3RhcnRfZGF0ZSlcbiAgICAgICAgICAgICAgICBzdGFydF9kYXRlID0gc3RhcnRfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKVxuICAgICAgICAgICAgICAgIGxldCBlbmRfZGF0ZSA9IG5ldyBEYXRlKGxlYXZlLmVuZF9kYXRlKVxuICAgICAgICAgICAgICAgIGVuZF9kYXRlID0gZW5kX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMClcbiAgICAgICAgICAgICAgICBsZXQgY3Vycl9kYXRlID0gbmV3IERhdGUoY3VycmVudERhdGUpXG4gICAgICAgICAgICAgICAgY3Vycl9kYXRlID0gY3Vycl9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJfZGF0ZSA+PSBzdGFydF9kYXRlICYmIGN1cnJfZGF0ZSA8PSBlbmRfZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGltZVNsb3QudmFsdWUgPj0gbGVhdmUubGVhdmVfc3RhcnRfdGltZSAmJiB0aW1lU2xvdC52YWx1ZSA8PSBsZWF2ZS5sZWF2ZV9lbmRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmIChibG9ja2VkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9kYXkudG9EYXRlU3RyaW5nKCkgPT0gbmV3IERhdGUoY3VycmVudERhdGUpLnRvRGF0ZVN0cmluZygpICYmIHRoaXMucHJvcHMudG9kYXlfbWluKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy50b2RheV9tYXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGltZVNsb3QudmFsdWUgPiB0aGlzLnByb3BzLnRvZGF5X21pbiAmJiB0aW1lU2xvdC52YWx1ZSA8IHRoaXMucHJvcHMudG9kYXlfbWF4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGltZVNsb3QudmFsdWUgPiB0aGlzLnByb3BzLnRvZGF5X21pblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvbW9ycm93LnRvRGF0ZVN0cmluZygpID09IG5ldyBEYXRlKGN1cnJlbnREYXRlKS50b0RhdGVTdHJpbmcoKSAmJiB0aGlzLnByb3BzLnRvbW9ycm93X21pbikge1xuICAgICAgICAgICAgcmV0dXJuIHRpbWVTbG90LnZhbHVlID4gdGhpcy5wcm9wcy50b21vcnJvd19taW5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGJhc2UgY2FzZSBpZiBub3RoaW5nIHdvcmtzIDopXG4gICAgICAgIGlmICh0b2RheS50b0RhdGVTdHJpbmcoKSA9PSBuZXcgRGF0ZShjdXJyZW50RGF0ZSkudG9EYXRlU3RyaW5nKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aW1lU2xvdC52YWx1ZSA+ICh0b2RheS5nZXRIb3VycygpICsgMSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlXG5cbiAgICB9XG5cbiAgICB2aWV3QWxsQ2xpY2tlZCgpIHtcblxuICAgICAgICB0aGlzLnByb3BzLm5hdmlnYXRlVG8oJ3RpbWUnKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHVwY29taW5nRGF0ZSA9IG51bGxcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudXBjb21pbmdfc2xvdHMgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy51cGNvbWluZ19zbG90cykgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy51cGNvbWluZ19zbG90cykubGVuZ3RoKSB7XG4gICAgICAgICAgICB1cGNvbWluZ0RhdGUgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnVwY29taW5nX3Nsb3RzKVswXVxuICAgICAgICAgICAgdXBjb21pbmdEYXRlID0gbmV3IERhdGUodXBjb21pbmdEYXRlKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHsgZGF0ZSwgdGltZSB9ID0gdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3RcblxuICAgICAgICBpZiAoZGF0ZSkge1xuICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpLnRvRGF0ZVN0cmluZygpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgd2lkZ2V0IG1yYi0xNSAke3RoaXMucHJvcHMudGltZUVycm9yID8gJ3JuZC1lcnJvci1ubScgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHBvcy1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYi12aXNpdC10aW1lIGQtZmxleCBqYy1zcGFjZWIgbWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIG1iLTBcIj48c3Bhbj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3dhdGNoLWRhdGUuc3ZnXCJ9IGNsYXNzTmFtZT1cInZpc2l0LXRpbWUtaWNvblwiIC8+PC9zcGFuPlZpc2l0IFRpbWU8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXBudC1kb2MtZHRsXCI+VGhlIGFwcG9pbnRtZW50IGlzIHN1YmplY3QgdG8gY29uZmlybWF0aW9uIGZyb20gdGhlIERvY3Rvci4gPC9wPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoKHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LnN1bW1hcnlQYWdlKSB8fCAhZGF0ZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdudy10aW1lc2xvdC1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVwY29taW5nX3Nsb3RzICYmIE9iamVjdC52YWx1ZXModGhpcy5wcm9wcy51cGNvbWluZ19zbG90cykgJiYgT2JqZWN0LnZhbHVlcyh0aGlzLnByb3BzLnVwY29taW5nX3Nsb3RzKS5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImF2bC10aW1lLXNsb3RcIj5OZXh0IGF2YWlsYWJsZSBvbiA8c3BhbiBjbGFzc05hbWU9XCJcIj57V0VFS19EQVlTW3VwY29taW5nRGF0ZS5nZXREYXkoKV19LCB7dXBjb21pbmdEYXRlLmdldERhdGUoKX0ge01PTlRIU1t1cGNvbWluZ0RhdGUuZ2V0TW9udGgoKV19Ojwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LXRpbWUtbGlzdGluZy1jb250YWluZXIgYWxpZ24tZmxleC1zcC1idFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lLXNsb3QtbWFpbi1saXN0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImlubGluZS1saXN0IG53LXRpbWUtc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnByb3BzLnVwY29taW5nX3Nsb3RzKVswXS5tYXAoKHRpbWUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aX0gY2xhc3NOYW1lPVwibnctdGltZS1zbG90LWxpXCIgb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0VGltZS5iaW5kKHRoaXMsIHRpbWUsIHVwY29taW5nRGF0ZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2B0aW1lLXNsb3QtdGltbWluZ3MgJHt0aGlzLnByb3BzLnNlbGVjdGVkU2xvdCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC50aW1lID8gYCR7dGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QudGltZS52YWx1ZSA9PSB0aW1lLnZhbHVlID8gXCIgdGltZS1hY3RpdmVcIiA6ICcnfWAgOiAnJ31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3RpbWUudGV4dH0ge3RpbWUudGV4dCA/ICh0aW1lLnZhbHVlID49IDEyID8gJ1BNJyA6ICdBTScpIDogJyd9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3Quc3VtbWFyeVBhZ2UpIHx8ICFkYXRlKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3LWFsbC1zbG90LWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZnctNzAwIHRleHQtc21cIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlld0FsbENsaWNrZWQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+PGltZyBjbGFzc05hbWU9XCJzbC1jYWwtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2FsLnN2Z1wifS8+IFZpZXcgYWxsPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXY+Tm8gdGltZSBzbG90cyBBdmFpbGFibGU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGRpdiBjbGFzc05hbWU9XCJ0aW1lQWZ0ZXJTZWxlY3QgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZGF0ZS10aW1lIHRpdGxlXCI+e2RhdGUgPyBgJHtXRUVLX0RBWVNbbmV3IERhdGUoZGF0ZSkuZ2V0RGF5KCldfSwgJHtuZXcgRGF0ZShkYXRlKS5nZXREYXRlKCl9ICR7TU9OVEhTW25ldyBEYXRlKGRhdGUpLmdldE1vbnRoKCldfWAgOiAnJ30ge3RpbWUudGV4dCA/IFwifFwiIDogXCJcIn0ge3RpbWUudGV4dH0ge3RpbWUudGV4dCA/ICh0aW1lLnZhbHVlID49IDEyID8gJ1BNJyA6ICdBTScpIDogJyd9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMucHJvcHMuaGlkZUNoYW5nZVRpbWUgPyA8YSBocmVmPVwiXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5uYXZpZ2F0ZVRvKCd0aW1lJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmdy03MDAgdGV4dC1zbVwiPnt0aW1lLnRleHQgPyBcIkNoYW5nZVwiIDogXCJTZWxlY3RcIn0gVGltZTwvYT4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLyogIHRoaXMucHJvcHMudGltZUVycm9yID8gPHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwIHRpbWUtZXJyb3IgbnctZXJyb3JcIj5SZXF1aXJlZDwvc3Bhbj4gOiAnJyovXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFZpc2l0VGltZU5ld1xuIl0sInNvdXJjZVJvb3QiOiIifQ==