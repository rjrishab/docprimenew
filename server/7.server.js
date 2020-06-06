exports.ids = [7];
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

/***/ "./dev/js/components/commons/newDateSelector.js":
/*!******************************************************!*\
  !*** ./dev/js/components/commons/newDateSelector.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class NewDateSelector extends _react2.default.Component {

  constructor(props) {
    super(props);

    this.state = {
      newDob: '',
      calcualatedAge: null,
      toCalculateAge: true,
      isValidDob: true,
      isFocused: false,
      months: null,
      inValidText: ''
    };
  }

  componentDidMount() {
    this.initialDobToState(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.initialDobToState(nextProps);
  }

  initialDobToState(nextProps) {
    var d = new Date();
    var currentYear = d.getFullYear();
    var currentExactDay = currentYear + '-' + (d.getMonth().toString().length == 1 ? '0' + (d.getMonth() == 0 ? 1 : d.getMonth() + 1) : d.getMonth()) + '-' + (d.getDate().toString().length == 1 ? '0' + d.getDate() : d.getDate());
    let isValidDob;
    let inValidText = '';
    let FormattedYear;
    let FormattedDay;
    let FormattedMnth;
    if (nextProps.old_dob && nextProps.old_dob != '') {
      let oldDob = nextProps.old_dob.split('-');
      if (this.state.toCalculateAge || nextProps.isForceUpdateDob) {
        if (oldDob.length == 3) {
          if (oldDob[0].length == 4) {
            FormattedYear = oldDob[0];
            FormattedDay = oldDob[2].length == 2 && oldDob[2] > 31 ? '0' + oldDob[2].charAt(0) : oldDob[2];
            FormattedMnth = oldDob[1].length == 2 && oldDob[1] > 12 ? '0' + oldDob[1].charAt(0) : oldDob[1];
            if (FormattedYear <= currentYear - 100) {
              isValidDob = false;
              inValidText = "*Patient's age is not applicable. We serve patients less than 100 years old.";
              this.props.getNewDate('dob', FormattedYear + '-' + FormattedMnth + '-' + FormattedDay, isValidDob);
            } else if (FormattedYear > currentYear || FormattedYear + '-' + FormattedMnth + '-' + FormattedDay > currentExactDay) {
              isValidDob = false;
              inValidText = '';
              this.props.getNewDate('dob', FormattedYear + '-' + FormattedMnth + '-' + FormattedDay, isValidDob);
            } else {
              inValidText = '';
              isValidDob = this.isValidDate(FormattedDay, FormattedMnth, FormattedYear, this.props.is_gold ? true : false);
              this.calculateAge(FormattedYear + '-' + FormattedMnth + '-' + FormattedDay);
            }
            if (FormattedDay && FormattedMnth && FormattedYear) {
              if (this.props.is_gold) {
                this.props.unSetForceUpdateDob();
              }
              this.setState({ newDob: FormattedDay + '/' + FormattedMnth + '/' + FormattedYear, isValidDob: isValidDob, toCalculateAge: false, inValidText: inValidText });
            }
          }
        }
      }
    }

    if (nextProps.old_dob == '') {
      this.setState({ newDob: null, isValidDob: true, inValidText: '', calcualatedAge: null, months: null });
    }
  }

  checkValue(str, max) {
    if (str.charAt(0) !== '0' || str == '00') {
      var num = parseInt(str);
      if (isNaN(num) || num <= 0 || num > max) num = 1;
      str = num > parseInt(max.toString().charAt(0)) && num.toString().length == 1 ? '0' + num : num.toString();
    };
    return str;
  }

  isValidDate(d, m, y, is_forced) {
    let initial_month = m; // to store initial month value 
    var m = parseInt(m, 10) - 1;
    let is_valid = m >= 0 && m < 12 && d > 0 && d <= this.daysInMonth(m, y);
    if (is_forced && is_valid) {
      this.props.getNewDate('dob', y + '-' + initial_month + '-' + d, is_valid);
    }
    return is_valid;
  }

  daysInMonth(m, y) {
    switch (m) {
      case 1:
        return y % 4 == 0 && y % 100 || y % 400 == 0 ? 29 : 28;
      case 8:case 3:case 5:case 10:
        return 30;
      default:
        return 31;
    }
  }

  calculateAge(dateString) {
    // birthday is a date
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    let dateFrom = new Date(birthDate.getFullYear(), birthDate.getMonth());
    let dateTo = new Date(today.getFullYear(), today.getMonth());
    if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
      age--;
    }
    let mnth_val = this.monthDiff(dateFrom, dateTo);
    this.setState({ calcualatedAge: age, months: mnth_val });
  }

  monthDiff(dateFrom, dateTo) {
    return dateTo.getMonth() - dateFrom.getMonth() + 12 * (dateTo.getFullYear() - dateFrom.getFullYear());
  }

  keyPressFunc(e) {
    let isValidDob = true;
    let inValidText = '';
    if (e.which === 8) {
      var val = this.state.newDob;
      if (val && val.length == 0) {
        this.setState({ newDob: null }, () => {
          this.props.getNewDate('dob', null, false);
        });
      }
      if (val.length) {
        if (val.length == 3 || val.length == 6 || val.length == 4 || val.length == 1) {
          val = val.slice(0, val.length - 1);
          this.setState({ newDob: val, isValidDob: isValidDob, inValidText: inValidText, calcualatedAge: null, months: null });
        } else {
          this.setState({ isValidDob: isValidDob, inValidText: inValidText, calcualatedAge: null, months: null });
        }
      }
    }
  }

  handleChange(e) {
    var new_date = new Date();
    var currentYear = new_date.getFullYear();
    var currentExactDay = currentYear + '-' + (new_date.getMonth().toString().length == 1 ? '0' + (new_date.getMonth() == 0 ? 1 : new_date.getMonth() + 1) : new_date.getMonth()) + '-' + (new_date.getDate().toString().length == 1 ? '0' + new_date.getDate() : new_date.getDate());
    let self = this;
    let isValidDob = true;
    let inValidText = '';
    let id = this.props.is_gold ? 'newDate_' + this.props.user_form_id : 'newDate';
    var val = e.target.value;
    let staticDay = ['1', '2', '3', '0'];
    let staticMnth = ['11', '12', '0', '1'];
    let checkValidMonthThirtyOne = ['00', '2', '02', '4', '04', '6', '06', '9', '09'];
    let checkValidMonthThirty = ['00', '2', '02'];

    if (val.length == 1) {
      if (isNaN(val)) {
        val = null;
      } else {
        if (staticDay.indexOf(val) == -1) {
          val = '0' + val + '/';
        }
      }
      this.setState({ newDob: val });
    } else if (val.length === 2) {
      if (val != "00" && val <= 31) {
        val += '/';
      } else if (val.includes('/')) {
        val = '0' + val;
      } else {
        val = val.charAt(0);
      }
      this.setState({ newDob: val, isValidDob: isValidDob, inValidText: inValidText });
    } else if (val.length === 4) {
      val = val.split('/').map(function (v) {
        return v.replace(/\D/g, '');
      });
      if (val[1] == "") {
        val = val[0] + '/';
      } else {
        if (val[0] == '31' && checkValidMonthThirtyOne.indexOf(val[1]) != -1) {
          val = val[0] + '/';
        } else if (val[0] == '30' && val[1] == '2') {
          val = val[0] + '/';
        } else {
          if (staticMnth.indexOf(val[1]) == -1) {
            val = val[0] + '/' + '0' + val[1] + '/';
          } else {
            val = val[0] + '/' + val[1];
          }
        }
      }
      this.setState({ newDob: val, isValidDob: isValidDob, inValidText: inValidText });
    } else if (val.length === 5) {
      val = val.split('/');
      if (isNaN(val[1])) {
        val = val[0] + '/' + val[1].charAt(0);
      } else {
        if (val[1] > 12) {
          val = val[0] + '/' + val[1].charAt(0);
        } else {
          if (val[0] == '31') {
            if (checkValidMonthThirtyOne.indexOf(val[1]) != -1 || val[1] == 11) {
              val = val[0] + '/' + val[1].charAt(0);
            } else {
              val = val[0] + '/' + val[1] + '/';
            }
          } else if (val[0] == '30' && checkValidMonthThirty.indexOf(val[1]) != -1) {
            val = val[0] + '/' + val[1].charAt(0);
          } else {
            val = val[0] + '/' + val[1] + '/';
          }
        }
      }
      this.setState({ newDob: val, isValidDob: isValidDob, inValidText: inValidText });
    } else if (val.length > 5) {
      val = val.split('/').map(function (v) {
        return v.replace(/\D/g, '');
      });
      if (val.length == 3) {
        var FormattedDay = val[0].length == 2 && val[0] > 31 ? '0' + val[0].charAt(0) : val[0];
        var FormattedMonth = val[1].length == 2 && val[1] > 12 ? '0' + val[1].charAt(0) : val[1];
        var FormattedYear = val[2];
        if (FormattedYear.length == 4) {
          if (FormattedYear <= currentYear - 100) {
            isValidDob = false;
            inValidText = "*Patient's age is not applicable. We serve patients less than 100 years old.";
          } else if (FormattedYear > currentYear || FormattedYear + '-' + FormattedMonth + '-' + FormattedDay > currentExactDay) {
            isValidDob = false;
            inValidText = '';
          } else {
            inValidText = '';
            isValidDob = this.isValidDate(FormattedDay, FormattedMonth, FormattedYear, false);
            this.calculateAge(FormattedYear + '-' + FormattedMonth + '-' + FormattedDay);
          }
          this.props.getNewDate('dob', FormattedYear + '-' + FormattedMonth + '-' + FormattedDay, isValidDob);
          this.setState({ newDob: FormattedDay + '/' + FormattedMonth + '/' + FormattedYear, isValidDob: isValidDob, inValidText: inValidText });
        } else {
          val = FormattedDay + '/' + FormattedMonth + '/' + FormattedYear;
          this.setState({ newDob: val, isValidDob: isValidDob, inValidText: inValidText });
        }
      }
    }
  }

  isBlured() {
    var new_date = new Date();
    let isValidDob;
    let inValidText = '';
    var dateOfBirth = this.state.newDob;
    var currentYear = new_date.getFullYear();
    var currentExactDay = currentYear + '-' + (new_date.getMonth().toString().length == 1 ? '0' + (new_date.getMonth() == 0 ? 1 : new_date.getMonth() + 1) : new_date.getMonth()) + '-' + (new_date.getDate().toString().length == 1 ? '0' + new_date.getDate() : new_date.getDate());
    if (dateOfBirth) {
      dateOfBirth = dateOfBirth.split('/');
      if (dateOfBirth.length == 3) {
        dateOfBirth[2] = dateOfBirth[2].length !== 4 && dateOfBirth[2].length == 2 ? dateOfBirth[2] >= '20' ? '19' + dateOfBirth[2] : '20' + dateOfBirth[2] : dateOfBirth[2];
        dateOfBirth[1] = dateOfBirth[1].length != 2 ? '0' + dateOfBirth[1] : dateOfBirth[1];
        if (dateOfBirth[2].length == 4) {
          if (dateOfBirth[2] <= currentYear - 100) {
            isValidDob = false;
            inValidText = "*Patient's age is not applicable. We serve patients less than 100 years old.";
          } else if (dateOfBirth[2] > currentYear || dateOfBirth[2] + '-' + dateOfBirth[1] + '-' + dateOfBirth[0] > currentExactDay) {
            isValidDob = false;
            inValidText = '';
          } else {
            inValidText = '';
            isValidDob = this.isValidDate(dateOfBirth[0], dateOfBirth[1], dateOfBirth[2], false);
            this.calculateAge(dateOfBirth[2] + '-' + dateOfBirth[1] + '-' + dateOfBirth[0]);
          }
          this.props.getNewDate('dob', dateOfBirth[2] + '-' + dateOfBirth[1] + '-' + dateOfBirth[0], isValidDob);
          this.setState({ newDob: dateOfBirth[0] + '/' + dateOfBirth[1] + '/' + dateOfBirth[2], isValidDob: isValidDob, inValidText: inValidText });
        } else {
          dateOfBirth = dateOfBirth[0] + '/' + dateOfBirth[1] + '/' + dateOfBirth[2];
          this.setState({ newDob: dateOfBirth, isValidDob: isValidDob, inValidText: inValidText });
        }
      }
    }
  }

  render() {
    let borderStyle;
    if ((this.props.is_dob_error || this.state.inValidText) && this.props.is_summary) {
      borderStyle = { borderBottom: '1px solid red' };
    } else if (this.props.is_dob_error || this.state.inValidText) {
      borderStyle = { border: '1px solid red' };
    }

    return _react2.default.createElement(
      'div',
      { className: 'labelWrap ddmminput' },
      _react2.default.createElement('input', { type: 'tel', id: `${this.props.is_gold ? 'newDate_' + this.props.user_form_id : 'newDate'}`, ref: 'dob', value: this.state.newDob ? this.state.newDob : '', required: true, name: `${this.props.is_gold ? 'newDate_' + this.props.user_form_id : 'newDate'}`, onFocus: () => {
          this.setState({ isFocused: true });
        }, maxLength: '10', disabled: this.props.user_form_id && this.props.disableDob ? 'disabled' : '', style: borderStyle, placeholder: `${this.props.is_summary ? 'DD/MM/YYYY' : ''}`, onChange: this.handleChange.bind(this), onKeyDown: this.keyPressFunc.bind(this), onBlur: this.isBlured.bind(this) }),
      this.state.calcualatedAge > 0 && this.state.isValidDob ? _react2.default.createElement(
        'span',
        { className: 'input-year' },
        this.state.calcualatedAge,
        ' ',
        this.state.calcualatedAge == 1 ? 'year' : 'years'
      ) : this.state.calcualatedAge == 0 && this.state.isValidDob ? _react2.default.createElement(
        'span',
        { className: 'input-year' },
        this.state.months,
        ' ',
        this.state.months == 1 ? 'month' : 'months'
      ) : this.state.newDob && !this.state.isValidDob ? this.state.inValidText ? '' : _react2.default.createElement(
        'span',
        { className: 'input-year dob-error' },
        'Invalid DOB'
      ) : '',
      _react2.default.createElement(
        'label',
        { className: `sumry-lbl ${this.state.newDob || this.state.isFocused ? 'is-inp-focused' : ''}`, htmlFor: `${this.props.is_gold ? 'newDate_' + this.props.user_form_id : 'newDate'}` },
        'Date of Birth (DD/MM/YYYY)'
      ),
      this.state.inValidText ? _react2.default.createElement(
        'p',
        { className: 'fw-500', style: { color: 'red', fontSize: 9 } },
        this.state.inValidText
      ) : ''
    );
  }
}

exports.default = NewDateSelector;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL25ld0RhdGVTZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJpc1ZpcCIsImNvbG9yIiwiZm9udFNpemUiLCJwYWRkaW5nQm90dG9tIiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiTmV3RGF0ZVNlbGVjdG9yIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJuZXdEb2IiLCJjYWxjdWFsYXRlZEFnZSIsInRvQ2FsY3VsYXRlQWdlIiwiaXNWYWxpZERvYiIsImlzRm9jdXNlZCIsIm1vbnRocyIsImluVmFsaWRUZXh0IiwiY29tcG9uZW50RGlkTW91bnQiLCJpbml0aWFsRG9iVG9TdGF0ZSIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJkIiwiRGF0ZSIsImN1cnJlbnRZZWFyIiwiZ2V0RnVsbFllYXIiLCJjdXJyZW50RXhhY3REYXkiLCJnZXRNb250aCIsInRvU3RyaW5nIiwibGVuZ3RoIiwiZ2V0RGF0ZSIsIkZvcm1hdHRlZFllYXIiLCJGb3JtYXR0ZWREYXkiLCJGb3JtYXR0ZWRNbnRoIiwib2xkX2RvYiIsIm9sZERvYiIsInNwbGl0IiwiaXNGb3JjZVVwZGF0ZURvYiIsImNoYXJBdCIsImdldE5ld0RhdGUiLCJpc1ZhbGlkRGF0ZSIsImlzX2dvbGQiLCJjYWxjdWxhdGVBZ2UiLCJ1blNldEZvcmNlVXBkYXRlRG9iIiwic2V0U3RhdGUiLCJjaGVja1ZhbHVlIiwic3RyIiwibWF4IiwibnVtIiwicGFyc2VJbnQiLCJpc05hTiIsIm0iLCJ5IiwiaXNfZm9yY2VkIiwiaW5pdGlhbF9tb250aCIsImlzX3ZhbGlkIiwiZGF5c0luTW9udGgiLCJkYXRlU3RyaW5nIiwidG9kYXkiLCJiaXJ0aERhdGUiLCJhZ2UiLCJkYXRlRnJvbSIsImRhdGVUbyIsIm1udGhfdmFsIiwibW9udGhEaWZmIiwia2V5UHJlc3NGdW5jIiwiZSIsIndoaWNoIiwidmFsIiwic2xpY2UiLCJoYW5kbGVDaGFuZ2UiLCJuZXdfZGF0ZSIsInNlbGYiLCJpZCIsInVzZXJfZm9ybV9pZCIsInRhcmdldCIsInZhbHVlIiwic3RhdGljRGF5Iiwic3RhdGljTW50aCIsImNoZWNrVmFsaWRNb250aFRoaXJ0eU9uZSIsImNoZWNrVmFsaWRNb250aFRoaXJ0eSIsImluZGV4T2YiLCJpbmNsdWRlcyIsIm1hcCIsInYiLCJyZXBsYWNlIiwiRm9ybWF0dGVkTW9udGgiLCJpc0JsdXJlZCIsImRhdGVPZkJpcnRoIiwicmVuZGVyIiwiYm9yZGVyU3R5bGUiLCJpc19kb2JfZXJyb3IiLCJpc19zdW1tYXJ5IiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyIiwiZGlzYWJsZURvYiIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztrQkFDZSxDQUFDLEVBQUVBLEtBQUYsRUFBRCxLQUFlO0FBQzdCLFdBQVE7QUFBQTtBQUFBLFVBQUssV0FBWSxlQUFjQSxRQUFNLGtCQUFOLEdBQXlCLEVBQUcsRUFBM0Q7QUFDTztBQUFBO0FBQUEsY0FBRyxXQUFVLGVBQWIsRUFBNkIsT0FBTyxFQUFFQyxPQUFPLFNBQVQsRUFBb0JDLFVBQVUsRUFBOUIsRUFBcEM7QUFBQTtBQUFBLFNBRFA7QUFFTztBQUFBO0FBQUEsY0FBSyxXQUFVLDRCQUFmLEVBQTRDLE9BQU8sRUFBRUMsZUFBZSxDQUFqQixFQUFuRDtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUZQLEtBQVI7QUFTQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYRDs7Ozs7O0FBQ0EsTUFBTUMsY0FBY0MsbUJBQU9BLENBQUMs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LFdBQVUsWUFBaEI7QUFBOEIsYUFBS0osS0FBTCxDQUFXTSxNQUF6QztBQUFBO0FBQWtELGFBQUtOLEtBQUwsQ0FBV00sTUFBWCxJQUFvQixDQUFwQixHQUFzQixPQUF0QixHQUE4QjtBQUFoRixPQURDLEdBRUMsS0FBS04sS0FBTCxDQUFXQyxNQUFYLElBQXFCLENBQUMsS0FBS0QsS0FBTCxDQUFXSSxVQUFqQyxHQUNGLEtBQUtKLEtBQUwsQ0FBV08sV0FBWCxHQUF1QixFQUF2QixHQUNDO0FBQUE7QUFBQSxVQUFNLFdBQVUsc0JBQWhCO0FBQUE7QUFBQSxPQUZDLEdBR0QsRUFWUjtBQVlLO0FBQUE7QUFBQSxVQUFPLFdBQWEsYUFBWSxLQUFLUCxLQUFMLENBQVdDLE1BQVgsSUFBcUIsS0FBS0QsS0FBTCxDQUFXSyxTQUFoQyxHQUEwQyxnQkFBMUMsR0FBMkQsRUFBRyxFQUE5RixFQUFpRyxTQUFVLEdBQUUsS0FBS04sS0FBTCxDQUFXZ0MsT0FBWCxHQUFtQixhQUFXLEtBQUtoQyxLQUFMLENBQVdpRSxZQUF6QyxHQUFzRCxTQUFVLEVBQTdLO0FBQUE7QUFBQSxPQVpMO0FBYUssV0FBS2hFLEtBQUwsQ0FBV08sV0FBWCxHQUF3QjtBQUFBO0FBQUEsVUFBRyxXQUFVLFFBQWIsRUFBc0IsT0FBTyxFQUFDakIsT0FBTSxLQUFQLEVBQWFDLFVBQVMsQ0FBdEIsRUFBN0I7QUFBd0QsYUFBS1MsS0FBTCxDQUFXTztBQUFuRSxPQUF4QixHQUE0RztBQWJqSCxLQURIO0FBaUJIO0FBNVN5Qzs7a0JBZ1QvQlosZSIsImZpbGUiOiI3LnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmV4cG9ydCBkZWZhdWx0ICh7IGlzVmlwIH0pID0+IHtcblx0cmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17YGRzY2xtZXItZnRyICR7aXNWaXA/J21hcmdpbi1ib3R0b20tNTUnOicnfWB9PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMjBcIiBzdHlsZT17eyBjb2xvcjogJyM4YThhOGEnLCBmb250U2l6ZTogMTAgfX0gPlRoZSBXZWJzaXRlIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGluIGNhc2Ugb2YgYSBtZWRpY2FsIGVtZXJnZW5jeSBhbmQvIG9yIGNyaXRpY2FsIGNhcmUgYW5kIHRoZSB1c2VyIHNob3VsZCBkaXJlY3RseSBjb250YWN0IGhpcy8gaGVyIG1lZGljYWwgc2VydmljZSBwcm92aWRlciBmb3IgUGh5c2ljYWwgRXhhbWluYXRpb24uIERvY3ByaW1lIGlzIHNvbGVseSBhIHRlY2hub2xvZ3kgcGFydG5lci48L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZm9vdGVyLW5ldy1jb3B5cmdodFwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDUgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8cD5Eb2NwcmltZS5jb20gQ29weXJpZ2h0ICZjb3B5OyAyMDIwLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+QWxsIHJpZ2h0cyByZXNlcnZlZC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRPQ1BSSU1FIFRFQ0hOT0xPR0lFUyBQUklWQVRFIExJTUlURUQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkNJTiA6IFU3NDk5OUhSMjAxNlBUQzA2NDMxMjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2Pilcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuXG5jbGFzcyBOZXdEYXRlU2VsZWN0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICBuZXdEb2I6JycsXG4gICAgICAgICAgY2FsY3VhbGF0ZWRBZ2U6bnVsbCxcbiAgICAgICAgICB0b0NhbGN1bGF0ZUFnZTp0cnVlLFxuICAgICAgICAgIGlzVmFsaWREb2I6dHJ1ZSxcbiAgICAgICAgICBpc0ZvY3VzZWQ6ZmFsc2UsXG4gICAgICAgICAgbW9udGhzOm51bGwsXG4gICAgICAgICAgaW5WYWxpZFRleHQ6JydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuaW5pdGlhbERvYlRvU3RhdGUodGhpcy5wcm9wcylcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIHRoaXMuaW5pdGlhbERvYlRvU3RhdGUobmV4dFByb3BzKSAgICAgICAgXG4gICAgfVxuXG4gICAgaW5pdGlhbERvYlRvU3RhdGUobmV4dFByb3BzKXtcbiAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcbiAgICAgIHZhciBjdXJyZW50WWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcbiAgICAgIHZhciBjdXJyZW50RXhhY3REYXkgPSBjdXJyZW50WWVhcisnLScrKGQuZ2V0TW9udGgoKS50b1N0cmluZygpLmxlbmd0aCA9PSAxPycwJyArIChkLmdldE1vbnRoKCkgPT0gMD8xOmQuZ2V0TW9udGgoKSArIDEpOmQuZ2V0TW9udGgoKSkrJy0nKyhkLmdldERhdGUoKS50b1N0cmluZygpLmxlbmd0aCA9PSAxPycwJytkLmdldERhdGUoKTpkLmdldERhdGUoKSlcbiAgICAgIGxldCBpc1ZhbGlkRG9iXG4gICAgICBsZXQgaW5WYWxpZFRleHQ9JydcbiAgICAgIGxldCBGb3JtYXR0ZWRZZWFyXG4gICAgICBsZXQgRm9ybWF0dGVkRGF5IFxuICAgICAgbGV0IEZvcm1hdHRlZE1udGhcbiAgICAgIGlmKG5leHRQcm9wcy5vbGRfZG9iICYmIG5leHRQcm9wcy5vbGRfZG9iICE9ICcnKXtcbiAgICAgICAgbGV0IG9sZERvYiA9IG5leHRQcm9wcy5vbGRfZG9iLnNwbGl0KCctJylcbiAgICAgICAgIGlmKHRoaXMuc3RhdGUudG9DYWxjdWxhdGVBZ2UgfHwgIG5leHRQcm9wcy5pc0ZvcmNlVXBkYXRlRG9iKXtcbiAgICAgICAgICBpZihvbGREb2IubGVuZ3RoID09Myl7XG4gICAgICAgICAgICBpZihvbGREb2JbMF0ubGVuZ3RoID09NCl7XG4gICAgICAgICAgICAgIEZvcm1hdHRlZFllYXIgPSBvbGREb2JbMF1cbiAgICAgICAgICAgICAgRm9ybWF0dGVkRGF5ID0gb2xkRG9iWzJdLmxlbmd0aCA9PSAyICYmIG9sZERvYlsyXSA+MzE/JzAnK29sZERvYlsyXS5jaGFyQXQoMCk6b2xkRG9iWzJdXG4gICAgICAgICAgICAgIEZvcm1hdHRlZE1udGggPSBvbGREb2JbMV0ubGVuZ3RoID09IDIgJiYgb2xkRG9iWzFdID4xMj8nMCcrb2xkRG9iWzFdLmNoYXJBdCgwKTpvbGREb2JbMV1cbiAgICAgICAgICAgICAgaWYoRm9ybWF0dGVkWWVhciA8PSAoY3VycmVudFllYXIgLSAxMDApKXtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkRG9iID0gZmFsc2VcbiAgICAgICAgICAgICAgICBpblZhbGlkVGV4dCA9IFwiKlBhdGllbnQncyBhZ2UgaXMgbm90IGFwcGxpY2FibGUuIFdlIHNlcnZlIHBhdGllbnRzIGxlc3MgdGhhbiAxMDAgeWVhcnMgb2xkLlwiXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXROZXdEYXRlKCdkb2InLEZvcm1hdHRlZFllYXIrJy0nK0Zvcm1hdHRlZE1udGgrJy0nK0Zvcm1hdHRlZERheSxpc1ZhbGlkRG9iKSBcbiAgICAgICAgICAgICAgfWVsc2UgaWYoRm9ybWF0dGVkWWVhciA+IGN1cnJlbnRZZWFyIHx8IEZvcm1hdHRlZFllYXIrJy0nK0Zvcm1hdHRlZE1udGgrJy0nK0Zvcm1hdHRlZERheSA+IGN1cnJlbnRFeGFjdERheSl7XG4gICAgICAgICAgICAgICAgaXNWYWxpZERvYiA9IGZhbHNlXG4gICAgICAgICAgICAgICAgaW5WYWxpZFRleHQgPScnXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXROZXdEYXRlKCdkb2InLEZvcm1hdHRlZFllYXIrJy0nK0Zvcm1hdHRlZE1udGgrJy0nK0Zvcm1hdHRlZERheSxpc1ZhbGlkRG9iKSBcbiAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgaW5WYWxpZFRleHQgPScnXG4gICAgICAgICAgICAgICAgaXNWYWxpZERvYiA9IHRoaXMuaXNWYWxpZERhdGUoRm9ybWF0dGVkRGF5LEZvcm1hdHRlZE1udGgsRm9ybWF0dGVkWWVhcix0aGlzLnByb3BzLmlzX2dvbGQ/dHJ1ZTpmYWxzZSlcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUFnZShGb3JtYXR0ZWRZZWFyKyctJytGb3JtYXR0ZWRNbnRoKyctJytGb3JtYXR0ZWREYXkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYoRm9ybWF0dGVkRGF5ICYmIEZvcm1hdHRlZE1udGggJiYgRm9ybWF0dGVkWWVhcil7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5pc19nb2xkKXtcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudW5TZXRGb3JjZVVwZGF0ZURvYigpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe25ld0RvYjpGb3JtYXR0ZWREYXkrICcvJyArIEZvcm1hdHRlZE1udGgrICcvJyArIEZvcm1hdHRlZFllYXIsaXNWYWxpZERvYjppc1ZhbGlkRG9iLHRvQ2FsY3VsYXRlQWdlOmZhbHNlLCBpblZhbGlkVGV4dDppblZhbGlkVGV4dH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYobmV4dFByb3BzLm9sZF9kb2IgPT0gJycpe1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe25ld0RvYjpudWxsLGlzVmFsaWREb2I6dHJ1ZSwgaW5WYWxpZFRleHQ6JycsY2FsY3VhbGF0ZWRBZ2U6bnVsbCxtb250aHM6bnVsbH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tWYWx1ZShzdHIsIG1heCl7XG4gICAgICBpZihzdHIuY2hhckF0KDApICE9PSAnMCcgfHwgc3RyID09ICcwMCcpe1xuICAgICAgICB2YXIgbnVtID0gcGFyc2VJbnQoc3RyKTtcbiAgICAgICAgaWYoaXNOYU4obnVtKSB8fCBudW0gPD0gMCB8fCBudW0gPiBtYXgpIG51bSA9IDE7XG4gICAgICAgIHN0ciA9IG51bSA+IHBhcnNlSW50KG1heC50b1N0cmluZygpLmNoYXJBdCgwKSkgJiYgbnVtLnRvU3RyaW5nKCkubGVuZ3RoID09IDEgPyAnMCcgKyBudW0gOiBudW0udG9TdHJpbmcoKTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIGlzVmFsaWREYXRlIChkLCBtLCB5LGlzX2ZvcmNlZCkge1xuICAgICAgbGV0IGluaXRpYWxfbW9udGggPSBtOyAvLyB0byBzdG9yZSBpbml0aWFsIG1vbnRoIHZhbHVlIFxuICAgICAgdmFyIG0gPSBwYXJzZUludChtLCAxMCkgLSAxO1xuICAgICAgbGV0IGlzX3ZhbGlkPSBtID49IDAgJiYgbSA8IDEyICYmIGQgPiAwICYmIGQgPD0gdGhpcy5kYXlzSW5Nb250aChtLCB5KVxuICAgICAgaWYoaXNfZm9yY2VkICYmIGlzX3ZhbGlkKXtcbiAgICAgICAgdGhpcy5wcm9wcy5nZXROZXdEYXRlKCdkb2InLHkrJy0nK2luaXRpYWxfbW9udGgrJy0nK2QsaXNfdmFsaWQpIFxuICAgICAgfVxuICAgICAgcmV0dXJuIGlzX3ZhbGlkO1xuICAgIH1cblxuICAgIGRheXNJbk1vbnRoIChtLCB5KSB7XG4gICAgICBzd2l0Y2ggKG0pIHtcbiAgICAgICAgICBjYXNlIDEgOlxuICAgICAgICAgICAgICByZXR1cm4gKHkgJSA0ID09IDAgJiYgeSAlIDEwMCkgfHwgeSAlIDQwMCA9PSAwID8gMjkgOiAyODtcbiAgICAgICAgICBjYXNlIDggOiBjYXNlIDMgOiBjYXNlIDUgOiBjYXNlIDEwIDpcbiAgICAgICAgICAgICAgcmV0dXJuIDMwO1xuICAgICAgICAgIGRlZmF1bHQgOlxuICAgICAgICAgICAgICByZXR1cm4gMzFcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYWxjdWxhdGVBZ2UoZGF0ZVN0cmluZykgeyAvLyBiaXJ0aGRheSBpcyBhIGRhdGVcbiAgICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIGJpcnRoRGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuICAgICAgICB2YXIgYWdlID0gdG9kYXkuZ2V0RnVsbFllYXIoKSAtIGJpcnRoRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB2YXIgbSA9IHRvZGF5LmdldE1vbnRoKCkgLSBiaXJ0aERhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgbGV0IGRhdGVGcm9tID0gbmV3IERhdGUoYmlydGhEYXRlLmdldEZ1bGxZZWFyKCkgLCBiaXJ0aERhdGUuZ2V0TW9udGgoKSlcbiAgICAgICAgbGV0IGRhdGVUbyA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksdG9kYXkuZ2V0TW9udGgoKSlcbiAgICAgICAgaWYgKG0gPCAwIHx8IChtID09PSAwICYmIHRvZGF5LmdldERhdGUoKSA8IGJpcnRoRGF0ZS5nZXREYXRlKCkpKSB7XG4gICAgICAgICAgICBhZ2UtLTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbW50aF92YWwgPSB0aGlzLm1vbnRoRGlmZihkYXRlRnJvbSxkYXRlVG8pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NhbGN1YWxhdGVkQWdlOmFnZSxtb250aHM6bW50aF92YWx9KVxuICAgIH1cblxuICAgIG1vbnRoRGlmZihkYXRlRnJvbSwgZGF0ZVRvKSB7XG4gICAgIHJldHVybiBkYXRlVG8uZ2V0TW9udGgoKSAtIGRhdGVGcm9tLmdldE1vbnRoKCkgKyBcbiAgICAgICAoMTIgKiAoZGF0ZVRvLmdldEZ1bGxZZWFyKCkgLSBkYXRlRnJvbS5nZXRGdWxsWWVhcigpKSlcbiAgICB9XG5cbiAgICBrZXlQcmVzc0Z1bmMoZSkge1xuICAgICAgbGV0IGlzVmFsaWREb2IgPSB0cnVlXG4gICAgICBsZXQgaW5WYWxpZFRleHQgPSAnJ1xuICAgICAgaWYoZS53aGljaCA9PT0gOCkge1xuICAgICAgICB2YXIgdmFsID0gdGhpcy5zdGF0ZS5uZXdEb2I7XG4gICAgICAgIGlmKHZhbCAmJiB2YWwubGVuZ3RoID09IDApe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bmV3RG9iOm51bGx9LCgpPT57XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0TmV3RGF0ZSgnZG9iJyxudWxsLGZhbHNlKSBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgaWYodmFsLmxlbmd0aCl7XG4gICAgICAgICAgaWYodmFsLmxlbmd0aCA9PSAzIHx8IHZhbC5sZW5ndGggPT0gNiB8fCB2YWwubGVuZ3RoID09IDQgfHwgdmFsLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgIHZhbCA9IHZhbC5zbGljZSgwLCB2YWwubGVuZ3RoLTEpO1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtuZXdEb2I6dmFsLGlzVmFsaWREb2I6aXNWYWxpZERvYixpblZhbGlkVGV4dDppblZhbGlkVGV4dCxjYWxjdWFsYXRlZEFnZTpudWxsLG1vbnRoczpudWxsfSlcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNWYWxpZERvYjppc1ZhbGlkRG9iLGluVmFsaWRUZXh0OmluVmFsaWRUZXh0LGNhbGN1YWxhdGVkQWdlOm51bGwsbW9udGhzOm51bGx9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICB2YXIgbmV3X2RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgdmFyIGN1cnJlbnRZZWFyID0gbmV3X2RhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgIHZhciBjdXJyZW50RXhhY3REYXkgPSBjdXJyZW50WWVhcisnLScrKG5ld19kYXRlLmdldE1vbnRoKCkudG9TdHJpbmcoKS5sZW5ndGggPT0gMT8nMCcgKyAobmV3X2RhdGUuZ2V0TW9udGgoKSA9PSAwPzE6bmV3X2RhdGUuZ2V0TW9udGgoKSsgMSk6bmV3X2RhdGUuZ2V0TW9udGgoKSkrJy0nKyhuZXdfZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5sZW5ndGggPT0gMT8nMCcrbmV3X2RhdGUuZ2V0RGF0ZSgpOm5ld19kYXRlLmdldERhdGUoKSlcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IGlzVmFsaWREb2IgPSB0cnVlXG4gICAgICBsZXQgaW5WYWxpZFRleHQ9JydcbiAgICAgIGxldCBpZCA9IHRoaXMucHJvcHMuaXNfZ29sZD8nbmV3RGF0ZV8nK3RoaXMucHJvcHMudXNlcl9mb3JtX2lkOiduZXdEYXRlJztcbiAgICAgIHZhciB2YWwgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGxldCBzdGF0aWNEYXkgPSBbJzEnLCcyJywnMycsJzAnXVxuICAgICAgbGV0IHN0YXRpY01udGggPSBbJzExJywnMTInLCcwJywnMSddXG4gICAgICBsZXQgY2hlY2tWYWxpZE1vbnRoVGhpcnR5T25lID0gWycwMCcsJzInLCcwMicsJzQnLCcwNCcsJzYnLCcwNicsJzknLCcwOSddXG4gICAgICBsZXQgY2hlY2tWYWxpZE1vbnRoVGhpcnR5ID0gWycwMCcsJzInLCcwMiddXG5cbiAgICAgICAgaWYodmFsLmxlbmd0aCA9PSAxKXtcbiAgICAgICAgICBpZihpc05hTih2YWwpKXtcbiAgICAgICAgICAgIHZhbCA9IG51bGxcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGlmKHN0YXRpY0RheS5pbmRleE9mKHZhbCkgPT0gLTEpe1xuICAgICAgICAgICAgICB2YWwgPSAnMCcrdmFsICsgJy8nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe25ld0RvYjp2YWx9KVxuICAgICAgICB9ZWxzZSBpZiAodmFsLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgIGlmKHZhbCAhPSBcIjAwXCIgJiYgdmFsIDw9MzEpe1xuICAgICAgICAgICAgdmFsICs9ICcvJ1xuICAgICAgICAgIH1lbHNlIGlmKHZhbC5pbmNsdWRlcygnLycpKXtcbiAgICAgICAgICAgIHZhbCA9ICcwJyt2YWxcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHZhbCAgPSB2YWwuY2hhckF0KDApXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe25ld0RvYjp2YWwsaXNWYWxpZERvYjppc1ZhbGlkRG9iLGluVmFsaWRUZXh0OmluVmFsaWRUZXh0fSlcbiAgICAgICAgfWVsc2UgaWYodmFsLmxlbmd0aCA9PT0gNCl7XG4gICAgICAgICAgdmFsID0gdmFsLnNwbGl0KCcvJykubWFwKGZ1bmN0aW9uKHYpe3JldHVybiB2LnJlcGxhY2UoL1xcRC9nLCAnJyl9KVxuICAgICAgICAgICAgaWYodmFsWzFdID09XCJcIil7XG4gICAgICAgICAgICAgIHZhbCA9IHZhbFswXSArICcvJ1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIGlmKHZhbFswXSA9PSAnMzEnICYmIGNoZWNrVmFsaWRNb250aFRoaXJ0eU9uZS5pbmRleE9mKHZhbFsxXSkgIT0gLTEpe1xuICAgICAgICAgICAgICAgIHZhbCA9IHZhbFswXSsnLydcbiAgICAgICAgICAgICAgfWVsc2UgaWYodmFsWzBdID09ICczMCcgJiYgdmFsWzFdID09ICcyJyl7XG4gICAgICAgICAgICAgICAgdmFsID0gdmFsWzBdKycvJ1xuICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBpZihzdGF0aWNNbnRoLmluZGV4T2YodmFsWzFdKSA9PSAtMSl7XG4gICAgICAgICAgICAgICAgICB2YWwgPSB2YWxbMF0gKyAnLycgKyAnMCcrdmFsWzFdICsgJy8nXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICB2YWwgPSB2YWxbMF0gKyAnLycgK3ZhbFsxXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bmV3RG9iOnZhbCxpc1ZhbGlkRG9iOmlzVmFsaWREb2IsaW5WYWxpZFRleHQ6aW5WYWxpZFRleHR9KVxuICAgICAgICB9ZWxzZSBpZiAodmFsLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICB2YWwgPSB2YWwuc3BsaXQoJy8nKVxuICAgICAgICAgICBpZihpc05hTih2YWxbMV0pKXtcbiAgICAgICAgICAgICAgdmFsID0gdmFsWzBdKycvJysgdmFsWzFdLmNoYXJBdCgwKVxuICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGlmKHZhbFsxXSA+IDEyKXtcbiAgICAgICAgICAgICAgdmFsID0gdmFsWzBdKycvJysgdmFsWzFdLmNoYXJBdCgwKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIGlmKHZhbFswXSA9PSAnMzEnKXtcbiAgICAgICAgICAgICAgICAgIGlmKGNoZWNrVmFsaWRNb250aFRoaXJ0eU9uZS5pbmRleE9mKHZhbFsxXSkgIT0gLTEgfHwgdmFsWzFdID09MTEpe1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSB2YWxbMF0rJy8nKyB2YWxbMV0uY2hhckF0KDApXG4gICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gdmFsWzBdKycvJysgdmFsWzFdICsnLycgIFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9ZWxzZSBpZih2YWxbMF0gPT0gJzMwJyAmJiBjaGVja1ZhbGlkTW9udGhUaGlydHkuaW5kZXhPZih2YWxbMV0pICE9IC0xKXtcbiAgICAgICAgICAgICAgICB2YWwgPSB2YWxbMF0rJy8nKyB2YWxbMV0uY2hhckF0KDApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgIHZhbCA9IHZhbFswXSsnLycrIHZhbFsxXSArJy8nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bmV3RG9iOnZhbCxpc1ZhbGlkRG9iOmlzVmFsaWREb2IsaW5WYWxpZFRleHQ6aW5WYWxpZFRleHR9KVxuICAgICAgICB9ZWxzZSBpZih2YWwubGVuZ3RoID4gNSl7XG4gICAgICAgICAgdmFsID0gdmFsLnNwbGl0KCcvJykubWFwKGZ1bmN0aW9uKHYpe3JldHVybiB2LnJlcGxhY2UoL1xcRC9nLCAnJyl9KVxuICAgICAgICAgIGlmKHZhbC5sZW5ndGggPT0zKXtcbiAgICAgICAgICAgICAgICB2YXIgRm9ybWF0dGVkRGF5ID0gdmFsWzBdLmxlbmd0aCA9PSAyICYmIHZhbFswXSA+MzE/JzAnK3ZhbFswXS5jaGFyQXQoMCk6dmFsWzBdXG4gICAgICAgICAgICAgICAgdmFyIEZvcm1hdHRlZE1vbnRoID0gdmFsWzFdLmxlbmd0aCA9PSAyICYmIHZhbFsxXSA+MTI/JzAnK3ZhbFsxXS5jaGFyQXQoMCk6dmFsWzFdXG4gICAgICAgICAgICAgICAgdmFyIEZvcm1hdHRlZFllYXIgPSB2YWxbMl1cbiAgICAgICAgICAgICAgIGlmKEZvcm1hdHRlZFllYXIubGVuZ3RoID09IDQpe1xuICAgICAgICAgICAgICAgICAgaWYoRm9ybWF0dGVkWWVhciA8PSAoY3VycmVudFllYXIgLSAxMDApKXtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZERvYiA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIGluVmFsaWRUZXh0PVwiKlBhdGllbnQncyBhZ2UgaXMgbm90IGFwcGxpY2FibGUuIFdlIHNlcnZlIHBhdGllbnRzIGxlc3MgdGhhbiAxMDAgeWVhcnMgb2xkLlwiXG4gICAgICAgICAgICAgICAgICB9ZWxzZSBpZihGb3JtYXR0ZWRZZWFyID4gY3VycmVudFllYXIgfHwgRm9ybWF0dGVkWWVhcisnLScrRm9ybWF0dGVkTW9udGgrJy0nK0Zvcm1hdHRlZERheSA+IGN1cnJlbnRFeGFjdERheSl7XG4gICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZERvYiA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgaW5WYWxpZFRleHQgPScnXG4gICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICBpblZhbGlkVGV4dD0gJydcbiAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkRG9iID0gdGhpcy5pc1ZhbGlkRGF0ZShGb3JtYXR0ZWREYXksRm9ybWF0dGVkTW9udGgsRm9ybWF0dGVkWWVhcixmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUFnZShGb3JtYXR0ZWRZZWFyKyctJytGb3JtYXR0ZWRNb250aCsnLScrRm9ybWF0dGVkRGF5KSAgXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldE5ld0RhdGUoJ2RvYicsRm9ybWF0dGVkWWVhcisnLScrRm9ybWF0dGVkTW9udGgrJy0nK0Zvcm1hdHRlZERheSxpc1ZhbGlkRG9iKSBcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe25ld0RvYjpGb3JtYXR0ZWREYXkgKyAnLycgK0Zvcm1hdHRlZE1vbnRoICsgJy8nICsgRm9ybWF0dGVkWWVhcixpc1ZhbGlkRG9iOmlzVmFsaWREb2IsaW5WYWxpZFRleHQ6aW5WYWxpZFRleHR9KVxuICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICB2YWwgPSBGb3JtYXR0ZWREYXkgKyAnLycgK0Zvcm1hdHRlZE1vbnRoICsgJy8nICsgRm9ybWF0dGVkWWVhclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bmV3RG9iOnZhbCxpc1ZhbGlkRG9iOmlzVmFsaWREb2IsaW5WYWxpZFRleHQ6aW5WYWxpZFRleHR9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzQmx1cmVkKCl7XG4gICAgICB2YXIgbmV3X2RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgbGV0IGlzVmFsaWREb2JcbiAgICAgIGxldCBpblZhbGlkVGV4dCA9ICcnXG4gICAgICB2YXIgZGF0ZU9mQmlydGggPSB0aGlzLnN0YXRlLm5ld0RvYlxuICAgICAgdmFyIGN1cnJlbnRZZWFyID0gbmV3X2RhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgIHZhciBjdXJyZW50RXhhY3REYXkgPSBjdXJyZW50WWVhcisnLScrKG5ld19kYXRlLmdldE1vbnRoKCkudG9TdHJpbmcoKS5sZW5ndGggPT0gMT8nMCcgKyAobmV3X2RhdGUuZ2V0TW9udGgoKSA9PSAwPzE6bmV3X2RhdGUuZ2V0TW9udGgoKSsgMSk6bmV3X2RhdGUuZ2V0TW9udGgoKSkrJy0nKyhuZXdfZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5sZW5ndGggPT0gMT8nMCcrbmV3X2RhdGUuZ2V0RGF0ZSgpOm5ld19kYXRlLmdldERhdGUoKSlcbiAgICAgIGlmKGRhdGVPZkJpcnRoKXtcbiAgICAgICAgZGF0ZU9mQmlydGggPSBkYXRlT2ZCaXJ0aC5zcGxpdCgnLycpXG4gICAgICAgICAgaWYoZGF0ZU9mQmlydGgubGVuZ3RoID09Myl7XG4gICAgICAgICAgICAgIGRhdGVPZkJpcnRoWzJdID0gZGF0ZU9mQmlydGhbMl0ubGVuZ3RoICE9PSA0ICYmIGRhdGVPZkJpcnRoWzJdLmxlbmd0aCA9PTIgID8gKGRhdGVPZkJpcnRoWzJdID49JzIwJz8oJzE5JysgZGF0ZU9mQmlydGhbMl0pOignMjAnICsgZGF0ZU9mQmlydGhbMl0pKSAgOiBkYXRlT2ZCaXJ0aFsyXVxuICAgICAgICAgICAgICBkYXRlT2ZCaXJ0aFsxXSA9IGRhdGVPZkJpcnRoWzFdLmxlbmd0aCAhPSAyPyAnMCcrZGF0ZU9mQmlydGhbMV06ZGF0ZU9mQmlydGhbMV1cbiAgICAgICAgICAgICAgIGlmKGRhdGVPZkJpcnRoWzJdLmxlbmd0aCA9PSA0KXtcbiAgICAgICAgICAgICAgICAgIGlmKGRhdGVPZkJpcnRoWzJdIDw9IChjdXJyZW50WWVhciAtIDEwMCkpe1xuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkRG9iID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgaW5WYWxpZFRleHQ9XCIqUGF0aWVudCdzIGFnZSBpcyBub3QgYXBwbGljYWJsZS4gV2Ugc2VydmUgcGF0aWVudHMgbGVzcyB0aGFuIDEwMCB5ZWFycyBvbGQuXCJcbiAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKGRhdGVPZkJpcnRoWzJdID4gY3VycmVudFllYXIgfHwgZGF0ZU9mQmlydGhbMl0rJy0nK2RhdGVPZkJpcnRoWzFdKyctJytkYXRlT2ZCaXJ0aFswXSA+IGN1cnJlbnRFeGFjdERheSl7XG4gICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZERvYiA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgaW5WYWxpZFRleHQgPScnXG4gICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICBpblZhbGlkVGV4dD0gJydcbiAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkRG9iID0gdGhpcy5pc1ZhbGlkRGF0ZShkYXRlT2ZCaXJ0aFswXSxkYXRlT2ZCaXJ0aFsxXSxkYXRlT2ZCaXJ0aFsyXSxmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUFnZShkYXRlT2ZCaXJ0aFsyXSsnLScrZGF0ZU9mQmlydGhbMV0rJy0nK2RhdGVPZkJpcnRoWzBdKSAgXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldE5ld0RhdGUoJ2RvYicsZGF0ZU9mQmlydGhbMl0rJy0nK2RhdGVPZkJpcnRoWzFdKyctJytkYXRlT2ZCaXJ0aFswXSxpc1ZhbGlkRG9iKSBcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe25ld0RvYjpkYXRlT2ZCaXJ0aFswXSArICcvJyArZGF0ZU9mQmlydGhbMV0gKyAnLycgKyBkYXRlT2ZCaXJ0aFsyXSxpc1ZhbGlkRG9iOmlzVmFsaWREb2IsaW5WYWxpZFRleHQ6aW5WYWxpZFRleHR9KVxuICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICBkYXRlT2ZCaXJ0aCA9IGRhdGVPZkJpcnRoWzBdICsgJy8nICtkYXRlT2ZCaXJ0aFsxXSArICcvJyArIGRhdGVPZkJpcnRoWzJdXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtuZXdEb2I6ZGF0ZU9mQmlydGgsaXNWYWxpZERvYjppc1ZhbGlkRG9iLGluVmFsaWRUZXh0OmluVmFsaWRUZXh0fSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgbGV0IGJvcmRlclN0eWxlXG4gICAgICBpZigodGhpcy5wcm9wcy5pc19kb2JfZXJyb3IgfHwgdGhpcy5zdGF0ZS5pblZhbGlkVGV4dCkgJiYgdGhpcy5wcm9wcy5pc19zdW1tYXJ5KXtcbiAgICAgICAgYm9yZGVyU3R5bGUgPSB7Ym9yZGVyQm90dG9tOicxcHggc29saWQgcmVkJ31cbiAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMuaXNfZG9iX2Vycm9yIHx8IHRoaXMuc3RhdGUuaW5WYWxpZFRleHQpe1xuICAgICAgICBib3JkZXJTdHlsZSA9IHtib3JkZXI6JzFweCBzb2xpZCByZWQnfVxuICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxXcmFwIGRkbW1pbnB1dFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgaWQ9e2Ake3RoaXMucHJvcHMuaXNfZ29sZD8nbmV3RGF0ZV8nK3RoaXMucHJvcHMudXNlcl9mb3JtX2lkOiduZXdEYXRlJ31gfSByZWY9J2RvYicgdmFsdWU9e3RoaXMuc3RhdGUubmV3RG9iP3RoaXMuc3RhdGUubmV3RG9iOicnfSByZXF1aXJlZCBuYW1lPXtgJHt0aGlzLnByb3BzLmlzX2dvbGQ/J25ld0RhdGVfJyt0aGlzLnByb3BzLnVzZXJfZm9ybV9pZDonbmV3RGF0ZSd9YH0gb25Gb2N1cz17KCk9Pnt0aGlzLnNldFN0YXRlKHtpc0ZvY3VzZWQ6dHJ1ZX0pfX0gbWF4TGVuZ3RoPVwiMTBcIiBkaXNhYmxlZD17dGhpcy5wcm9wcy51c2VyX2Zvcm1faWQgJiYgdGhpcy5wcm9wcy5kaXNhYmxlRG9iPydkaXNhYmxlZCc6Jyd9IHN0eWxlPXtib3JkZXJTdHlsZX0gcGxhY2Vob2xkZXI9e2Ake3RoaXMucHJvcHMuaXNfc3VtbWFyeT8nREQvTU0vWVlZWSc6Jyd9YH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9IG9uS2V5RG93bj17dGhpcy5rZXlQcmVzc0Z1bmMuYmluZCh0aGlzKX0gb25CbHVyPXt0aGlzLmlzQmx1cmVkLmJpbmQodGhpcyl9Lz4gXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jYWxjdWFsYXRlZEFnZSA+MCAmJiB0aGlzLnN0YXRlLmlzVmFsaWREb2I/XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC15ZWFyXCI+e3RoaXMuc3RhdGUuY2FsY3VhbGF0ZWRBZ2V9IHt0aGlzLnN0YXRlLmNhbGN1YWxhdGVkQWdlID09MT8neWVhcic6J3llYXJzJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICA6dGhpcy5zdGF0ZS5jYWxjdWFsYXRlZEFnZSA9PTAgJiYgdGhpcy5zdGF0ZS5pc1ZhbGlkRG9iP1xuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQteWVhclwiPnt0aGlzLnN0YXRlLm1vbnRoc30ge3RoaXMuc3RhdGUubW9udGhzID09MT8nbW9udGgnOidtb250aHMnfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5uZXdEb2IgJiYgIXRoaXMuc3RhdGUuaXNWYWxpZERvYj9cbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaW5WYWxpZFRleHQ/JydcbiAgICAgICAgICAgICAgICAgIDo8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC15ZWFyIGRvYi1lcnJvclwiPkludmFsaWQgRE9CPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9IHtgc3VtcnktbGJsICR7dGhpcy5zdGF0ZS5uZXdEb2IgfHwgdGhpcy5zdGF0ZS5pc0ZvY3VzZWQ/J2lzLWlucC1mb2N1c2VkJzonJ31gfSBodG1sRm9yPXtgJHt0aGlzLnByb3BzLmlzX2dvbGQ/J25ld0RhdGVfJyt0aGlzLnByb3BzLnVzZXJfZm9ybV9pZDonbmV3RGF0ZSd9YH0+RGF0ZSBvZiBCaXJ0aCAoREQvTU0vWVlZWSk8L2xhYmVsPlxuICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaW5WYWxpZFRleHQ/IDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiIHN0eWxlPXt7Y29sb3I6J3JlZCcsZm9udFNpemU6OX19Pnt0aGlzLnN0YXRlLmluVmFsaWRUZXh0fTwvcD46Jyd9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBOZXdEYXRlU2VsZWN0b3JcbiJdLCJzb3VyY2VSb290IjoiIn0=