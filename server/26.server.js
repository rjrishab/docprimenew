exports.ids = [26];
exports.modules = {

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MONTHS = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const WEEK_DAYS = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
// const moment = require('moment');

class VisitTimeNew extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    selectTime(time, selectedTimeSlotDate) {

        let eventData = {
            'Category': 'ConsumerApp', 'Action': 'EarlyTimeSlotClicked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'early-time-slot-clicked'
        };
        _gtm2.default.sendEvent({ data: eventData });

        let self = this;
        let timeSpan = Object.assign({}, time);
        timeSpan.title = time.title;
        let data = {
            date: selectedTimeSlotDate,
            month: MONTHS[new Date(selectedTimeSlotDate).getMonth()],
            slot: '',
            time: timeSpan,
            summaryPage: true
        };
        this.props.selectTimeSlot(data);
    }

    isTimeSlotAvailable(timeSlot, currentDate) {

        let today = new Date();
        let tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);

        let dateAfterOneHour = new Date(currentDate).setHours(today.getHours() + 1);

        if (timeSlot.on_call && today.toDateString() == new Date(currentDate).toDateString()) {
            return false;
        }

        if (new Date(dateAfterOneHour).toDateString() == today.toDateString() && new Date(dateAfterOneHour).getHours() + new Date(dateAfterOneHour).getMinutes() / 60 > timeSlot.value) {
            return false;
        }
        if (this.props.doctor_leaves && this.props.doctor_leaves.length) {

            let blocked = false;
            this.props.doctor_leaves.map(leave => {
                let start_date = new Date(leave.start_date);
                start_date = start_date.setHours(0, 0, 0, 0);
                let end_date = new Date(leave.end_date);
                end_date = end_date.setHours(0, 0, 0, 0);
                let curr_date = new Date(currentDate);
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

    viewAllClicked() {

        this.props.navigateTo('time');
    }

    render() {
        let upcomingDate = null;
        if (this.props.upcoming_slots && Object.keys(this.props.upcoming_slots) && Object.keys(this.props.upcoming_slots).length) {
            upcomingDate = Object.keys(this.props.upcoming_slots)[0];
            upcomingDate = new Date(upcomingDate);
        }

        let { date, time } = this.props.selectedSlot;

        if (date) {
            date = new Date(date).toDateString();
        }
        return _react2.default.createElement(
            'div',
            { className: `widget mrb-15 ${this.props.timeError ? 'rnd-error-nm' : ''}` },
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
                                    Object.values(this.props.upcoming_slots)[0].map((time, i) => {
                                        return _react2.default.createElement(
                                            'li',
                                            { key: i, className: 'nw-time-slot-li', onClick: this.selectTime.bind(this, time, upcomingDate) },
                                            _react2.default.createElement(
                                                'p',
                                                { className: `time-slot-timmings ${this.props.selectedSlot && this.props.selectedSlot.time ? `${this.props.selectedSlot.time.value == time.value ? " time-active" : ''}` : ''}`
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
                                    { href: '', className: 'text-primary fw-700 text-sm', onClick: e => {
                                            e.preventDefault();
                                            this.viewAllClicked();
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
                        date ? `${WEEK_DAYS[new Date(date).getDay()]}, ${new Date(date).getDate()} ${MONTHS[new Date(date).getMonth()]}` : '',
                        ' ',
                        time.text ? "|" : "",
                        ' ',
                        time.text,
                        ' ',
                        time.text ? time.value >= 12 ? 'PM' : 'AM' : ''
                    ),
                    !this.props.hideChangeTime ? _react2.default.createElement(
                        'a',
                        { href: '', onClick: e => {
                                e.preventDefault();
                                e.stopPropagation();
                                this.props.navigateTo('time');
                            }, className: 'text-primary fw-700 text-sm' },
                        time.text ? "Change" : "Select",
                        ' Time'
                    ) : ""
                )
            )
        );
    }
}

exports.default = VisitTimeNew;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvcGF0aWVudERldGFpbHMvVmlzaXRUaW1lTmV3LmpzIl0sIm5hbWVzIjpbIk1PTlRIUyIsIldFRUtfREFZUyIsIlZpc2l0VGltZU5ldyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInNlbGVjdFRpbWUiLCJ0aW1lIiwic2VsZWN0ZWRUaW1lU2xvdERhdGUiLCJldmVudERhdGEiLCJHVE0iLCJnZXRVc2VySWQiLCJzZW5kRXZlbnQiLCJkYXRhIiwic2VsZiIsInRpbWVTcGFuIiwiT2JqZWN0IiwiYXNzaWduIiwidGl0bGUiLCJkYXRlIiwibW9udGgiLCJEYXRlIiwiZ2V0TW9udGgiLCJzbG90Iiwic3VtbWFyeVBhZ2UiLCJzZWxlY3RUaW1lU2xvdCIsImlzVGltZVNsb3RBdmFpbGFibGUiLCJ0aW1lU2xvdCIsImN1cnJlbnREYXRlIiwidG9kYXkiLCJ0b21vcnJvdyIsInNldERhdGUiLCJnZXREYXRlIiwiZGF0ZUFmdGVyT25lSG91ciIsInNldEhvdXJzIiwiZ2V0SG91cnMiLCJvbl9jYWxsIiwidG9EYXRlU3RyaW5nIiwiZ2V0TWludXRlcyIsInZhbHVlIiwiZG9jdG9yX2xlYXZlcyIsImxlbmd0aCIsImJsb2NrZWQiLCJtYXAiLCJsZWF2ZSIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsImN1cnJfZGF0ZSIsImxlYXZlX3N0YXJ0X3RpbWUiLCJsZWF2ZV9lbmRfdGltZSIsInRvZGF5X21pbiIsInRvZGF5X21heCIsInRvbW9ycm93X21pbiIsInZpZXdBbGxDbGlja2VkIiwibmF2aWdhdGVUbyIsInJlbmRlciIsInVwY29taW5nRGF0ZSIsInVwY29taW5nX3Nsb3RzIiwia2V5cyIsInNlbGVjdGVkU2xvdCIsInRpbWVFcnJvciIsIkFTU0VUU19CQVNFX1VSTCIsInZhbHVlcyIsImdldERheSIsImkiLCJiaW5kIiwidGV4dCIsImUiLCJwcmV2ZW50RGVmYXVsdCIs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QS9CZCxpQkFESixHQW1DTTtBQUFBO0FBQUEsc0JBQUssV0FBVSw0QkFBZjtBQUNFO0FBQUE7QUFBQSwwQkFBSSxXQUFVLGlCQUFkO0FBQWlDMUMsK0JBQVEsR0FBRW5CLFVBQVUsSUFBSXFCLElBQUosQ0FBU0YsSUFBVCxFQUFlNEMsTUFBZixFQUFWLENBQW1DLEtBQUksSUFBSTFDLElBQUosQ0FBU0YsSUFBVCxFQUFlYSxPQUFmLEVBQXlCLElBQUdqQyxPQUFPLElBQUlzQixJQUFKLENBQVNGLElBQVQsRUFBZUcsUUFBZixFQUFQLENBQWtDLEVBQS9HLEdBQW1ILEVBQXBKO0FBQUE7QUFBeUpmLDZCQUFLMkQsSUFBTCxHQUFZLEdBQVosR0FBa0IsRUFBM0s7QUFBQTtBQUFnTDNELDZCQUFLMkQsSUFBckw7QUFBQTtBQUE0TDNELDZCQUFLMkQsSUFBTCxHQUFhM0QsS0FBS2dDLEtBQUwsSUFBYyxFQUFkLEdBQW1CLElBQW5CLEdBQTBCLElBQXZDLEdBQStDO0FBQTNPLHFCQURGO0FBR00scUJBQUMsS0FBS2xDLEtBQUwsQ0FBV2dFLGNBQVosR0FBNkI7QUFBQTtBQUFBLDBCQUFHLE1BQUssRUFBUixFQUFXLFNBQVVGLENBQUQsSUFBTztBQUNwREEsa0NBQUVDLGNBQUY7QUFDQUQsa0NBQUVHLGVBQUY7QUFDQSxxQ0FBS2pFLEtBQUwsQ0FBV2lELFVBQVgsQ0FBc0IsTUFBdEI7QUFDSCw2QkFKNEIsRUFJMUIsV0FBVSw2QkFKZ0I7QUFJZS9DLDZCQUFLMkQsSUFBTCxHQUFZLFFBQVosR0FBdUIsUUFKdEM7QUFBQTtBQUFBLHFCQUE3QixHQUl3RjtBQVA5RjtBQXpDZDtBQURKLFNBREo7QUE0REg7QUEvSnNDOztrQkFtSzVCakUsWSIsImZpbGUiOiIyNi5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bSc7XG5jb25zdCBNT05USFMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVnJywgJ1NlcHQnLCAnT2N0JywgJ05vdicsICdEZWMnXVxuY29uc3QgV0VFS19EQVlTID0gWydTdW4nLCAnTW9uJywgJ1R1ZXMnLCAnV2VkJywgJ1RodXInLCAnRnJpJywgJ1NhdCddXG4vLyBjb25zdCBtb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKTtcblxuY2xhc3MgVmlzaXRUaW1lTmV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICBzZWxlY3RUaW1lKHRpbWUsIHNlbGVjdGVkVGltZVNsb3REYXRlKSB7XG5cbiAgICAgICAgbGV0IGV2ZW50RGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnRWFybHlUaW1lU2xvdENsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdlYXJseS10aW1lLXNsb3QtY2xpY2tlZCdcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZXZlbnREYXRhIH0pXG5cbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGxldCB0aW1lU3BhbiA9IE9iamVjdC5hc3NpZ24oe30sIHRpbWUpXG4gICAgICAgIHRpbWVTcGFuLnRpdGxlID0gdGltZS50aXRsZVxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIGRhdGU6IHNlbGVjdGVkVGltZVNsb3REYXRlLFxuICAgICAgICAgICAgbW9udGg6IE1PTlRIU1tuZXcgRGF0ZShzZWxlY3RlZFRpbWVTbG90RGF0ZSkuZ2V0TW9udGgoKV0sXG4gICAgICAgICAgICBzbG90OiAnJyxcbiAgICAgICAgICAgIHRpbWU6IHRpbWVTcGFuLFxuICAgICAgICAgICAgc3VtbWFyeVBhZ2U6IHRydWVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdFRpbWVTbG90KGRhdGEpXG4gICAgfVxuXG4gICAgaXNUaW1lU2xvdEF2YWlsYWJsZSh0aW1lU2xvdCwgY3VycmVudERhdGUpIHtcblxuICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpXG4gICAgICAgIGxldCB0b21vcnJvdyA9IG5ldyBEYXRlKClcbiAgICAgICAgdG9tb3Jyb3cuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyAxKVxuXG4gICAgICAgIGxldCBkYXRlQWZ0ZXJPbmVIb3VyID0gbmV3IERhdGUoY3VycmVudERhdGUpLnNldEhvdXJzKHRvZGF5LmdldEhvdXJzKCkgKyAxKVxuXG4gICAgICAgIGlmICh0aW1lU2xvdC5vbl9jYWxsICYmIHRvZGF5LnRvRGF0ZVN0cmluZygpID09IG5ldyBEYXRlKGN1cnJlbnREYXRlKS50b0RhdGVTdHJpbmcoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3IERhdGUoZGF0ZUFmdGVyT25lSG91cikudG9EYXRlU3RyaW5nKCkgPT0gdG9kYXkudG9EYXRlU3RyaW5nKCkgJiYgKG5ldyBEYXRlKGRhdGVBZnRlck9uZUhvdXIpLmdldEhvdXJzKCkgKyBuZXcgRGF0ZShkYXRlQWZ0ZXJPbmVIb3VyKS5nZXRNaW51dGVzKCkgLyA2MCkgPiB0aW1lU2xvdC52YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZG9jdG9yX2xlYXZlcyAmJiB0aGlzLnByb3BzLmRvY3Rvcl9sZWF2ZXMubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIGxldCBibG9ja2VkID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZG9jdG9yX2xlYXZlcy5tYXAoKGxlYXZlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0X2RhdGUgPSBuZXcgRGF0ZShsZWF2ZS5zdGFydF9kYXRlKVxuICAgICAgICAgICAgICAgIHN0YXJ0X2RhdGUgPSBzdGFydF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApXG4gICAgICAgICAgICAgICAgbGV0IGVuZF9kYXRlID0gbmV3IERhdGUobGVhdmUuZW5kX2RhdGUpXG4gICAgICAgICAgICAgICAgZW5kX2RhdGUgPSBlbmRfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKVxuICAgICAgICAgICAgICAgIGxldCBjdXJyX2RhdGUgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSlcbiAgICAgICAgICAgICAgICBjdXJyX2RhdGUgPSBjdXJyX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMClcbiAgICAgICAgICAgICAgICBpZiAoY3Vycl9kYXRlID49IHN0YXJ0X2RhdGUgJiYgY3Vycl9kYXRlIDw9IGVuZF9kYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aW1lU2xvdC52YWx1ZSA+PSBsZWF2ZS5sZWF2ZV9zdGFydF90aW1lICYmIHRpbWVTbG90LnZhbHVlIDw9IGxlYXZlLmxlYXZlX2VuZF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja2VkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaWYgKGJsb2NrZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0b2RheS50b0RhdGVTdHJpbmcoKSA9PSBuZXcgRGF0ZShjdXJyZW50RGF0ZSkudG9EYXRlU3RyaW5nKCkgJiYgdGhpcy5wcm9wcy50b2RheV9taW4pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnRvZGF5X21heCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aW1lU2xvdC52YWx1ZSA+IHRoaXMucHJvcHMudG9kYXlfbWluICYmIHRpbWVTbG90LnZhbHVlIDwgdGhpcy5wcm9wcy50b2RheV9tYXhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aW1lU2xvdC52YWx1ZSA+IHRoaXMucHJvcHMudG9kYXlfbWluXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9tb3Jyb3cudG9EYXRlU3RyaW5nKCkgPT0gbmV3IERhdGUoY3VycmVudERhdGUpLnRvRGF0ZVN0cmluZygpICYmIHRoaXMucHJvcHMudG9tb3Jyb3dfbWluKSB7XG4gICAgICAgICAgICByZXR1cm4gdGltZVNsb3QudmFsdWUgPiB0aGlzLnByb3BzLnRvbW9ycm93X21pblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYmFzZSBjYXNlIGlmIG5vdGhpbmcgd29ya3MgOilcbiAgICAgICAgaWYgKHRvZGF5LnRvRGF0ZVN0cmluZygpID09IG5ldyBEYXRlKGN1cnJlbnREYXRlKS50b0RhdGVTdHJpbmcoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRpbWVTbG90LnZhbHVlID4gKHRvZGF5LmdldEhvdXJzKCkgKyAxKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWVcblxuICAgIH1cblxuICAgIHZpZXdBbGxDbGlja2VkKCkge1xuXG4gICAgICAgIHRoaXMucHJvcHMubmF2aWdhdGVUbygndGltZScpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgdXBjb21pbmdEYXRlID0gbnVsbFxuICAgICAgICBpZiAodGhpcy5wcm9wcy51cGNvbWluZ19zbG90cyAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnVwY29taW5nX3Nsb3RzKSAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnVwY29taW5nX3Nsb3RzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHVwY29taW5nRGF0ZSA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMudXBjb21pbmdfc2xvdHMpWzBdXG4gICAgICAgICAgICB1cGNvbWluZ0RhdGUgPSBuZXcgRGF0ZSh1cGNvbWluZ0RhdGUpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgeyBkYXRlLCB0aW1lIH0gPSB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdFxuXG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSkudG9EYXRlU3RyaW5nKClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3aWRnZXQgbXJiLTE1ICR7dGhpcy5wcm9wcy50aW1lRXJyb3IgPyAncm5kLWVycm9yLW5tJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgcG9zLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiLXZpc2l0LXRpbWUgZC1mbGV4IGpjLXNwYWNlYiBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgbWItMFwiPjxzcGFuPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvd2F0Y2gtZGF0ZS5zdmdcIn0gY2xhc3NOYW1lPVwidmlzaXQtdGltZS1pY29uXCIgLz48L3NwYW4+VmlzaXQgVGltZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhcG50LWRvYy1kdGxcIj5UaGUgYXBwb2ludG1lbnQgaXMgc3ViamVjdCB0byBjb25maXJtYXRpb24gZnJvbSB0aGUgRG9jdG9yLiA8L3A+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICgodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3Quc3VtbWFyeVBhZ2UpIHx8ICFkYXRlKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J253LXRpbWVzbG90LWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXBjb21pbmdfc2xvdHMgJiYgT2JqZWN0LnZhbHVlcyh0aGlzLnByb3BzLnVwY29taW5nX3Nsb3RzKSAmJiBPYmplY3QudmFsdWVzKHRoaXMucHJvcHMudXBjb21pbmdfc2xvdHMpLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXZsLXRpbWUtc2xvdFwiPk5leHQgYXZhaWxhYmxlIG9uIDxzcGFuIGNsYXNzTmFtZT1cIlwiPntXRUVLX0RBWVNbdXBjb21pbmdEYXRlLmdldERheSgpXX0sIHt1cGNvbWluZ0RhdGUuZ2V0RGF0ZSgpfSB7TU9OVEhTW3VwY29taW5nRGF0ZS5nZXRNb250aCgpXX06PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtdGltZS1saXN0aW5nLWNvbnRhaW5lciBhbGlnbi1mbGV4LXNwLWJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWUtc2xvdC1tYWluLWxpc3RpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaW5saW5lLWxpc3QgbnctdGltZS1zdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucHJvcHMudXBjb21pbmdfc2xvdHMpWzBdLm1hcCgodGltZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJudy10aW1lLXNsb3QtbGlcIiBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RUaW1lLmJpbmQodGhpcywgdGltZSwgdXBjb21pbmdEYXRlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YHRpbWUtc2xvdC10aW1taW5ncyAke3RoaXMucHJvcHMuc2VsZWN0ZWRTbG90ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LnRpbWUgPyBgJHt0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC50aW1lLnZhbHVlID09IHRpbWUudmFsdWUgPyBcIiB0aW1lLWFjdGl2ZVwiIDogJyd9YCA6ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57dGltZS50ZXh0fSB7dGltZS50ZXh0ID8gKHRpbWUudmFsdWUgPj0gMTIgPyAnUE0nIDogJ0FNJykgOiAnJ308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCh0aGlzLnByb3BzLnNlbGVjdGVkU2xvdCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5zdW1tYXJ5UGFnZSkgfHwgIWRhdGUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctYWxsLXNsb3QtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmdy03MDAgdGV4dC1zbVwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3QWxsQ2xpY2tlZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT48aW1nIGNsYXNzTmFtZT1cInNsLWNhbC1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jYWwuc3ZnXCJ9Lz4gVmlldyBhbGw8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGRpdj5ObyB0aW1lIHNsb3RzIEF2YWlsYWJsZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cInRpbWVBZnRlclNlbGVjdCB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJkYXRlLXRpbWUgdGl0bGVcIj57ZGF0ZSA/IGAke1dFRUtfREFZU1tuZXcgRGF0ZShkYXRlKS5nZXREYXkoKV19LCAke25ldyBEYXRlKGRhdGUpLmdldERhdGUoKX0gJHtNT05USFNbbmV3IERhdGUoZGF0ZSkuZ2V0TW9udGgoKV19YCA6ICcnfSB7dGltZS50ZXh0ID8gXCJ8XCIgOiBcIlwifSB7dGltZS50ZXh0fSB7dGltZS50ZXh0ID8gKHRpbWUudmFsdWUgPj0gMTIgPyAnUE0nIDogJ0FNJykgOiAnJ308L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5oaWRlQ2hhbmdlVGltZSA/IDxhIGhyZWY9XCJcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm5hdmlnYXRlVG8oJ3RpbWUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZ3LTcwMCB0ZXh0LXNtXCI+e3RpbWUudGV4dCA/IFwiQ2hhbmdlXCIgOiBcIlNlbGVjdFwifSBUaW1lPC9hPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvKiAgdGhpcy5wcm9wcy50aW1lRXJyb3IgPyA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDAgdGltZS1lcnJvciBudy1lcnJvclwiPlJlcXVpcmVkPC9zcGFuPiA6ICcnKi9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVmlzaXRUaW1lTmV3XG4iXSwic291cmNlUm9vdCI6IiJ9