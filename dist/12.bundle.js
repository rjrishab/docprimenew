(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

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

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var isVip = _ref.isVip;

    return _react2.default.createElement(
        'div',
        { className: 'dsclmer-ftr ' + (isVip ? 'margin-bottom-55' : '') },
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var NewDateSelector = function (_React$Component) {
  _inherits(NewDateSelector, _React$Component);

  function NewDateSelector(props) {
    _classCallCheck(this, NewDateSelector);

    var _this = _possibleConstructorReturn(this, (NewDateSelector.__proto__ || Object.getPrototypeOf(NewDateSelector)).call(this, props));

    _this.state = {
      newDob: '',
      calcualatedAge: null,
      toCalculateAge: true,
      isValidDob: true,
      isFocused: false,
      months: null,
      inValidText: ''
    };
    return _this;
  }

  _createClass(NewDateSelector, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.initialDobToState(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.initialDobToState(nextProps);
    }
  }, {
    key: 'initialDobToState',
    value: function initialDobToState(nextProps) {
      var d = new Date();
      var currentYear = d.getFullYear();
      var currentExactDay = currentYear + '-' + (d.getMonth().toString().length == 1 ? '0' + (d.getMonth() == 0 ? 1 : d.getMonth() + 1) : d.getMonth()) + '-' + (d.getDate().toString().length == 1 ? '0' + d.getDate() : d.getDate());
      var isValidDob = void 0;
      var inValidText = '';
      var FormattedYear = void 0;
      var FormattedDay = void 0;
      var FormattedMnth = void 0;
      if (nextProps.old_dob && nextProps.old_dob != '') {
        var oldDob = nextProps.old_dob.split('-');
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
  }, {
    key: 'checkValue',
    value: function checkValue(str, max) {
      if (str.charAt(0) !== '0' || str == '00') {
        var num = parseInt(str);
        if (isNaN(num) || num <= 0 || num > max) num = 1;
        str = num > parseInt(max.toString().charAt(0)) && num.toString().length == 1 ? '0' + num : num.toString();
      };
      return str;
    }
  }, {
    key: 'isValidDate',
    value: function isValidDate(d, m, y, is_forced) {
      var initial_month = m; // to store initial month value 
      var m = parseInt(m, 10) - 1;
      var is_valid = m >= 0 && m < 12 && d > 0 && d <= this.daysInMonth(m, y);
      if (is_forced && is_valid) {
        this.props.getNewDate('dob', y + '-' + initial_month + '-' + d, is_valid);
      }
      return is_valid;
    }
  }, {
    key: 'daysInMonth',
    value: function daysInMonth(m, y) {
      switch (m) {
        case 1:
          return y % 4 == 0 && y % 100 || y % 400 == 0 ? 29 : 28;
        case 8:case 3:case 5:case 10:
          return 30;
        default:
          return 31;
      }
    }
  }, {
    key: 'calculateAge',
    value: function calculateAge(dateString) {
      // birthday is a date
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      var dateFrom = new Date(birthDate.getFullYear(), birthDate.getMonth());
      var dateTo = new Date(today.getFullYear(), today.getMonth());
      if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
        age--;
      }
      var mnth_val = this.monthDiff(dateFrom, dateTo);
      this.setState({ calcualatedAge: age, months: mnth_val });
    }
  }, {
    key: 'monthDiff',
    value: function monthDiff(dateFrom, dateTo) {
      return dateTo.getMonth() - dateFrom.getMonth() + 12 * (dateTo.getFullYear() - dateFrom.getFullYear());
    }
  }, {
    key: 'keyPressFunc',
    value: function keyPressFunc(e) {
      var _this2 = this;

      var isValidDob = true;
      var inValidText = '';
      if (e.which === 8) {
        var val = this.state.newDob;
        if (val && val.length == 0) {
          this.setState({ newDob: null }, function () {
            _this2.props.getNewDate('dob', null, false);
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
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      var new_date = new Date();
      var currentYear = new_date.getFullYear();
      var currentExactDay = currentYear + '-' + (new_date.getMonth().toString().length == 1 ? '0' + (new_date.getMonth() == 0 ? 1 : new_date.getMonth() + 1) : new_date.getMonth()) + '-' + (new_date.getDate().toString().length == 1 ? '0' + new_date.getDate() : new_date.getDate());
      var self = this;
      var isValidDob = true;
      var inValidText = '';
      var id = this.props.is_gold ? 'newDate_' + this.props.user_form_id : 'newDate';
      var val = e.target.value;
      var staticDay = ['1', '2', '3', '0'];
      var staticMnth = ['11', '12', '0', '1'];
      var checkValidMonthThirtyOne = ['00', '2', '02', '4', '04', '6', '06', '9', '09'];
      var checkValidMonthThirty = ['00', '2', '02'];

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
  }, {
    key: 'isBlured',
    value: function isBlured() {
      var new_date = new Date();
      var isValidDob = void 0;
      var inValidText = '';
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
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var borderStyle = void 0;
      if ((this.props.is_dob_error || this.state.inValidText) && this.props.is_summary) {
        borderStyle = { borderBottom: '1px solid red' };
      } else if (this.props.is_dob_error || this.state.inValidText) {
        borderStyle = { border: '1px solid red' };
      }

      return _react2.default.createElement(
        'div',
        { className: 'labelWrap ddmminput' },
        _react2.default.createElement('input', { type: 'tel', id: '' + (this.props.is_gold ? 'newDate_' + this.props.user_form_id : 'newDate'), ref: 'dob', value: this.state.newDob ? this.state.newDob : '', required: true, name: '' + (this.props.is_gold ? 'newDate_' + this.props.user_form_id : 'newDate'), onFocus: function onFocus() {
            _this3.setState({ isFocused: true });
          }, maxLength: '10', disabled: this.props.user_form_id && this.props.disableDob ? 'disabled' : '', style: borderStyle, placeholder: '' + (this.props.is_summary ? 'DD/MM/YYYY' : ''), onChange: this.handleChange.bind(this), onKeyDown: this.keyPressFunc.bind(this), onBlur: this.isBlured.bind(this) }),
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
          { className: 'sumry-lbl ' + (this.state.newDob || this.state.isFocused ? 'is-inp-focused' : ''), htmlFor: '' + (this.props.is_gold ? 'newDate_' + this.props.user_form_id : 'newDate') },
          'Date of Birth (DD/MM/YYYY)'
        ),
        this.state.inValidText ? _react2.default.createElement(
          'p',
          { className: 'fw-500', style: { color: 'red', fontSize: 9 } },
          this.state.inValidText
        ) : ''
      );
    }
  }]);

  return NewDateSelector;
}(_react2.default.Component);

exports.default = NewDateSelector;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL25ld0RhdGVTZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJpc1ZpcCIsImNvbG9yIiwiZm9udFNpemUiLCJwYWRkaW5nQm90dG9tIiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiTmV3RGF0ZVNlbGVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsIm5ld0RvYiIsImNhbGN1YWxhdGVkQWdlIiwidG9DYWxjdWxhdGVBZ2UiLCJpc1ZhbGlkRG9iIiwiaXNGb2N1c2VkIiwibW9udGhzIiwiaW5WYWxpZFRleHQiLCJpbml0aWFsRG9iVG9TdGF0ZSIsIm5leHRQcm9wcyIsImQiLCJEYXRlIiwiY3VycmVudFllYXIiLCJnZXRGdWxsWWVhciIsImN1cnJlbnRFeGFjdERheSIsImdldE1vbnRoIiwidG9TdHJpbmciLCJsZW5ndGgiLCJnZXREYXRlIiwiRm9ybWF0dGVkWWVhciIsIkZvcm1hdHRlZERheSIsIkZvcm1hdHRlZE1udGgiLCJvbGRfZG9iIiwib2xkRG9iIiwic3BsaXQiLCJpc0ZvcmNlVXBkYXRlRG9iIiwiY2hhckF0IiwiZ2V0TmV3RGF0ZSIsImlzVmFsaWREYXRlIiwiaXNfZ29sZCIsImNhbGN1bGF0ZUFnZSIsInVuU2V0Rm9yY2VVcGRhdGVEb2IiLCJzZXRTdGF0ZSIsInN0ciIsIm1heCIsIm51bSIsInBhcnNlSW50IiwiaXNOYU4iLCJtIiwieSIsImlzX2ZvcmNlZCIsImluaXRpYWxfbW9udGgiLCJpc192YWxpZCIsImRheXNJbk1vbnRoIiwiZGF0ZVN0cmluZyIsInRvZGF5IiwiYmlydGhEYXRlIiwiYWdlIiwiZGF0ZUZyb20iLCJkYXRlVG8iLCJtbnRoX3ZhbCIsIm1vbnRoRGlmZiIsImUiLCJ3aGljaCIsInZhbCIsInNsaWNlIiwibmV3X2RhdGUiLCJzZWxmIiwiaWQiLCJ1c2VyX2Zvcm1faWQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN0YXRpY0RheSIsInN0YXRpY01udGgiLCJjaGVja1ZhbGlkTW9udGhUaGlydHlPbmUiLCJjaGVja1ZhbGlkTW9udGhUaGlydHkiLCJpbmRleE9mIiwiaW5jbHVkZXMiLCJtYXAiLCJ2IiwicmVwbGFjZSIsIkZvcm1hdHRlZE1vbnRoIiwiZGF0ZU9mQmlydGgiLCJib3JkZXJTdHlsZSIsImlzX2RvYl9lcnJvciIsImlzX3N1bW1hcnkiLCJib3JkZXJCb3R0b20iLCJib3JkZXIiLCJkaXNhYmxlRG9iIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImtleVByZXNzRnVuYyIsImlzQmx1cmVkIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O2tCQUNlLGdCQUFlO0FBQUEsUUFBWkEsS0FBWSxRQUFaQSxLQUFZOztBQUM3QixXQUFRO0FBQUE7QUFBQSxVQUFLLDZCQUEwQkEsUUFBTSxrQkFBTixHQUF5QixFQUFuRCxDQUFMO0FBQ087QUFBQTtBQUFBLGNBQUcsV0FBVSxlQUFiLEVBQTZCLE9BQU8sRUFBRUMsT0FBTyxTQUFULEVBQW9CQyxVQUFVLEVBQTlCLEVBQXBDO0FBQUE7QUFBQSxTQURQO0FBRU87QUFBQTtBQUFBLGNBQUssV0FBVSw0QkFBZixFQUE0QyxPQUFPLEVBQUVDLGVBQWUsQ0FBakIsRUFBbkQ7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEo7QUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFGUCxLQUFSO0FBU0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYRDs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUMsY0FBY0MsbUJBQU9BLENBQUMsMERBQVIsQ0FBcEI7O0lBR01DLGU7OztBQUVGLDJCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0lBQ1RBLEtBRFM7O0FBR2YsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQU8sRUFESTtBQUVYQyxzQkFBZSxJQUZKO0FBR1hDLHNCQUFlLElBSEo7QUFJWEMsa0JBQVcsSUFKQTtBQUtYQyxpQkFBVSxLQUxDO0FBTVhDLGNBQU8sSUFOSTtBQU9YQyxtQkFBWTtBQVBELEtBQWI7QUFIZTtBQVlsQjs7Ozt3Q0FFa0I7QUFDZixXQUFLQyxpQkFBTCxDQUF1QixLQUFLVCxLQUE1QjtBQUNIOzs7OENBRXlCVSxTLEVBQVU7QUFDaEMsV0FBS0QsaUJBQUwsQ0FBdUJDLFNBQXZCO0FBQ0g7OztzQ0FFaUJBLFMsRUFBVTtBQUMxQixVQUFJQyxJQUFJLElBQUlDLElBQUosRUFBUjtBQUNBLFVBQUlDLGNBQWNGLEVBQUVHLFdBQUYsRUFBbEI7QUFDQSxVQUFJQyxrQkFBa0JGLGNBQVksR0FBWixJQUFpQkYsRUFBRUssUUFBRixHQUFhQyxRQUFiLEdBQXdCQyxNQUF4QixJQUFrQyxDQUFsQyxHQUFvQyxPQUFPUCxFQUFFSyxRQUFGLE1BQWdCLENBQWhCLEdBQWtCLENBQWxCLEdBQW9CTCxFQUFFSyxRQUFGLEtBQWUsQ0FBMUMsQ0FBcEMsR0FBaUZMLEVBQUVLLFFBQUYsRUFBbEcsSUFBZ0gsR0FBaEgsSUFBcUhMLEVBQUVRLE9BQUYsR0FBWUYsUUFBWixHQUF1QkMsTUFBdkIsSUFBaUMsQ0FBakMsR0FBbUMsTUFBSVAsRUFBRVEsT0FBRixFQUF2QyxHQUFtRFIsRUFBRVEsT0FBRixFQUF4SyxDQUF0QjtBQUNBLFVBQUlkLG1CQUFKO0FBQ0EsVUFBSUcsY0FBWSxFQUFoQjtBQUNBLFVBQUlZLHNCQUFKO0FBQ0EsVUFBSUMscUJBQUo7QUFDQSxVQUFJQyxzQkFBSjtBQUNBLFVBQUdaLFVBQVVhLE9BQVYsSUFBcUJiLFVBQVVhLE9BQVYsSUFBcUIsRUFBN0MsRUFBZ0Q7QUFDOUMsWUFBSUMsU0FBU2QsVUFBVWEsT0FBVixDQUFrQkUsS0FBbEIsQ0FBd0IsR0FBeEIsQ0FBYjtBQUNDLFlBQUcsS0FBS3hCLEtBQUwsQ0FBV0csY0FBWCxJQUE4Qk0sVUFBVWdCLGdCQUEzQyxFQUE0RDtBQUMzRCxjQUFHRixPQUFPTixNQUFQLElBQWdCLENBQW5CLEVBQXFCO0FBQ25CLGdCQUFHTSxPQUFPLENBQVAsRUFBVU4sTUFBVixJQUFtQixDQUF0QixFQUF3QjtBQUN0QkUsOEJBQWdCSSxPQUFPLENBQVAsQ0FBaEI7QUFDQUgsNkJBQWVHLE9BQU8sQ0FBUCxFQUFVTixNQUFWLElBQW9CLENBQXBCLElBQXlCTSxPQUFPLENBQVAsSUFBVyxFQUFwQyxHQUF1QyxNQUFJQSxPQUFPLENBQVAsRUFBVUcsTUFBVixDQUFpQixDQUFqQixDQUEzQyxHQUErREgsT0FBTyxDQUFQLENBQTlFO0FBQ0FGLDhCQUFnQkUsT0FBTyxDQUFQLEVBQVVOLE1BQVYsSUFBb0IsQ0FBcEIsSUFBeUJNLE9BQU8sQ0FBUCxJQUFXLEVBQXBDLEdBQXVDLE1BQUlBLE9BQU8sQ0FBUCxFQUFVRyxNQUFWLENBQWlCLENBQWpCLENBQTNDLEdBQStESCxPQUFPLENBQVAsQ0FBL0U7QUFDQSxrQkFBR0osaUJBQWtCUCxjQUFjLEdBQW5DLEVBQXdDO0FBQ3RDUiw2QkFBYSxLQUFiO0FBQ0FHLDhCQUFjLDhFQUFkO0FBQ0EscUJBQUtSLEtBQUwsQ0FBVzRCLFVBQVgsQ0FBc0IsS0FBdEIsRUFBNEJSLGdCQUFjLEdBQWQsR0FBa0JFLGFBQWxCLEdBQWdDLEdBQWhDLEdBQW9DRCxZQUFoRSxFQUE2RWhCLFVBQTdFO0FBQ0QsZUFKRCxNQUlNLElBQUdlLGdCQUFnQlAsV0FBaEIsSUFBK0JPLGdCQUFjLEdBQWQsR0FBa0JFLGFBQWxCLEdBQWdDLEdBQWhDLEdBQW9DRCxZQUFwQyxHQUFtRE4sZUFBckYsRUFBcUc7QUFDekdWLDZCQUFhLEtBQWI7QUFDQUcsOEJBQWEsRUFBYjtBQUNBLHFCQUFLUixLQUFMLENBQVc0QixVQUFYLENBQXNCLEtBQXRCLEVBQTRCUixnQkFBYyxHQUFkLEdBQWtCRSxhQUFsQixHQUFnQyxHQUFoQyxHQUFvQ0QsWUFBaEUsRUFBNkVoQixVQUE3RTtBQUNELGVBSkssTUFJRDtBQUNIRyw4QkFBYSxFQUFiO0FBQ0FILDZCQUFhLEtBQUt3QixXQUFMLENBQWlCUixZQUFqQixFQUE4QkMsYUFBOUIsRUFBNENGLGFBQTVDLEVBQTBELEtBQUtwQixLQUFMLENBQVc4QixPQUFYLEdBQW1CLElBQW5CLEdBQXdCLEtBQWxGLENBQWI7QUFDQSxxQkFBS0MsWUFBTCxDQUFrQlgsZ0JBQWMsR0FBZCxHQUFrQkUsYUFBbEIsR0FBZ0MsR0FBaEMsR0FBb0NELFlBQXREO0FBQ0Q7QUFDRCxrQkFBR0EsZ0JBQWdCQyxhQUFoQixJQUFpQ0YsYUFBcEMsRUFBa0Q7QUFDaEQsb0JBQUcsS0FBS3BCLEtBQUwsQ0FBVzhCLE9BQWQsRUFBc0I7QUFDcEIsdUJBQUs5QixLQUFMLENBQVdnQyxtQkFBWDtBQUNEO0FBQ0QscUJBQUtDLFFBQUwsQ0FBYyxFQUFDL0IsUUFBT21CLGVBQWMsR0FBZCxHQUFvQkMsYUFBcEIsR0FBbUMsR0FBbkMsR0FBeUNGLGFBQWpELEVBQStEZixZQUFXQSxVQUExRSxFQUFxRkQsZ0JBQWUsS0FBcEcsRUFBMkdJLGFBQVlBLFdBQXZILEVBQWQ7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQUNGOztBQUVELFVBQUdFLFVBQVVhLE9BQVYsSUFBcUIsRUFBeEIsRUFBMkI7QUFDdkIsYUFBS1UsUUFBTCxDQUFjLEVBQUMvQixRQUFPLElBQVIsRUFBYUcsWUFBVyxJQUF4QixFQUE4QkcsYUFBWSxFQUExQyxFQUE2Q0wsZ0JBQWUsSUFBNUQsRUFBaUVJLFFBQU8sSUFBeEUsRUFBZDtBQUNIO0FBQ0Y7OzsrQkFFVTJCLEcsRUFBS0MsRyxFQUFJO0FBQ2xCLFVBQUdELElBQUlQLE1BQUosQ0FBVyxDQUFYLE1BQWtCLEdBQWxCLElBQXlCTyxPQUFPLElBQW5DLEVBQXdDO0FBQ3RDLFlBQUlFLE1BQU1DLFNBQVNILEdBQVQsQ0FBVjtBQUNBLFlBQUdJLE1BQU1GLEdBQU4sS0FBY0EsT0FBTyxDQUFyQixJQUEwQkEsTUFBTUQsR0FBbkMsRUFBd0NDLE1BQU0sQ0FBTjtBQUN4Q0YsY0FBTUUsTUFBTUMsU0FBU0YsSUFBSWxCLFFBQUosR0FBZVUsTUFBZixDQUFzQixDQUF0QixDQUFULENBQU4sSUFBNENTLElBQUluQixRQUFKLEdBQWVDLE1BQWYsSUFBeUIsQ0FBckUsR0FBeUUsTUFBTWtCLEdBQS9FLEdBQXFGQSxJQUFJbkIsUUFBSixFQUEzRjtBQUNEO0FBQ0QsYUFBT2lCLEdBQVA7QUFDRDs7O2dDQUVZdkIsQyxFQUFHNEIsQyxFQUFHQyxDLEVBQUVDLFMsRUFBVztBQUM5QixVQUFJQyxnQkFBZ0JILENBQXBCLENBRDhCLENBQ1A7QUFDdkIsVUFBSUEsSUFBSUYsU0FBU0UsQ0FBVCxFQUFZLEVBQVosSUFBa0IsQ0FBMUI7QUFDQSxVQUFJSSxXQUFVSixLQUFLLENBQUwsSUFBVUEsSUFBSSxFQUFkLElBQW9CNUIsSUFBSSxDQUF4QixJQUE2QkEsS0FBSyxLQUFLaUMsV0FBTCxDQUFpQkwsQ0FBakIsRUFBb0JDLENBQXBCLENBQWhEO0FBQ0EsVUFBR0MsYUFBYUUsUUFBaEIsRUFBeUI7QUFDdkIsYUFBSzNDLEtBQUwsQ0FBVzRCLFVBQVgsQ0FBc0IsS0FBdEIsRUFBNEJZLElBQUUsR0FBRixHQUFNRSxhQUFOLEdBQW9CLEdBQXBCLEdBQXdCL0IsQ0FBcEQsRUFBc0RnQyxRQUF0RDtBQUNEO0FBQ0QsYUFBT0EsUUFBUDtBQUNEOzs7Z0NBRVlKLEMsRUFBR0MsQyxFQUFHO0FBQ2pCLGNBQVFELENBQVI7QUFDSSxhQUFLLENBQUw7QUFDSSxpQkFBUUMsSUFBSSxDQUFKLElBQVMsQ0FBVCxJQUFjQSxJQUFJLEdBQW5CLElBQTJCQSxJQUFJLEdBQUosSUFBVyxDQUF0QyxHQUEwQyxFQUExQyxHQUErQyxFQUF0RDtBQUNKLGFBQUssQ0FBTCxDQUFTLEtBQUssQ0FBTCxDQUFTLEtBQUssQ0FBTCxDQUFTLEtBQUssRUFBTDtBQUN2QixpQkFBTyxFQUFQO0FBQ0o7QUFDSSxpQkFBTyxFQUFQO0FBTlI7QUFRRDs7O2lDQUVZSyxVLEVBQVk7QUFBRTtBQUN2QixVQUFJQyxRQUFRLElBQUlsQyxJQUFKLEVBQVo7QUFDQSxVQUFJbUMsWUFBWSxJQUFJbkMsSUFBSixDQUFTaUMsVUFBVCxDQUFoQjtBQUNBLFVBQUlHLE1BQU1GLE1BQU1oQyxXQUFOLEtBQXNCaUMsVUFBVWpDLFdBQVYsRUFBaEM7QUFDQSxVQUFJeUIsSUFBSU8sTUFBTTlCLFFBQU4sS0FBbUIrQixVQUFVL0IsUUFBVixFQUEzQjtBQUNBLFVBQUlpQyxXQUFXLElBQUlyQyxJQUFKLENBQVNtQyxVQUFVakMsV0FBVixFQUFULEVBQW1DaUMsVUFBVS9CLFFBQVYsRUFBbkMsQ0FBZjtBQUNBLFVBQUlrQyxTQUFTLElBQUl0QyxJQUFKLENBQVNrQyxNQUFNaEMsV0FBTixFQUFULEVBQTZCZ0MsTUFBTTlCLFFBQU4sRUFBN0IsQ0FBYjtBQUNBLFVBQUl1QixJQUFJLENBQUosSUFBVUEsTUFBTSxDQUFOLElBQVdPLE1BQU0zQixPQUFOLEtBQWtCNEIsVUFBVTVCLE9BQVYsRUFBM0MsRUFBaUU7QUFDN0Q2QjtBQUNIO0FBQ0QsVUFBSUcsV0FBVyxLQUFLQyxTQUFMLENBQWVILFFBQWYsRUFBd0JDLE1BQXhCLENBQWY7QUFDQSxXQUFLakIsUUFBTCxDQUFjLEVBQUM5QixnQkFBZTZDLEdBQWhCLEVBQW9CekMsUUFBTzRDLFFBQTNCLEVBQWQ7QUFDSDs7OzhCQUVTRixRLEVBQVVDLE0sRUFBUTtBQUMzQixhQUFPQSxPQUFPbEMsUUFBUCxLQUFvQmlDLFNBQVNqQyxRQUFULEVBQXBCLEdBQ0osTUFBTWtDLE9BQU9wQyxXQUFQLEtBQXVCbUMsU0FBU25DLFdBQVQsRUFBN0IsQ0FESDtBQUVBOzs7aUNBRVl1QyxDLEVBQUc7QUFBQTs7QUFDZCxVQUFJaEQsYUFBYSxJQUFqQjtBQUNBLFVBQUlHLGNBQWMsRUFBbEI7QUFDQSxVQUFHNkMsRUFBRUMsS0FBRixLQUFZLENBQWYsRUFBa0I7QUFDaEIsWUFBSUMsTUFBTSxLQUFLdEQsS0FBTCxDQUFXQyxNQUFyQjtBQUNBLFlBQUdxRCxPQUFPQSxJQUFJckMsTUFBSixJQUFjLENBQXhCLEVBQTBCO0FBQ3RCLGVBQUtlLFFBQUwsQ0FBYyxFQUFDL0IsUUFBTyxJQUFSLEVBQWQsRUFBNEIsWUFBSTtBQUM5QixtQkFBS0YsS0FBTCxDQUFXNEIsVUFBWCxDQUFzQixLQUF0QixFQUE0QixJQUE1QixFQUFpQyxLQUFqQztBQUNELFdBRkQ7QUFHSDtBQUNELFlBQUcyQixJQUFJckMsTUFBUCxFQUFjO0FBQ1osY0FBR3FDLElBQUlyQyxNQUFKLElBQWMsQ0FBZCxJQUFtQnFDLElBQUlyQyxNQUFKLElBQWMsQ0FBakMsSUFBc0NxQyxJQUFJckMsTUFBSixJQUFjLENBQXBELElBQXlEcUMsSUFBSXJDLE1BQUosSUFBYyxDQUExRSxFQUE2RTtBQUN6RXFDLGtCQUFNQSxJQUFJQyxLQUFKLENBQVUsQ0FBVixFQUFhRCxJQUFJckMsTUFBSixHQUFXLENBQXhCLENBQU47QUFDQSxpQkFBS2UsUUFBTCxDQUFjLEVBQUMvQixRQUFPcUQsR0FBUixFQUFZbEQsWUFBV0EsVUFBdkIsRUFBa0NHLGFBQVlBLFdBQTlDLEVBQTBETCxnQkFBZSxJQUF6RSxFQUE4RUksUUFBTyxJQUFyRixFQUFkO0FBQ0gsV0FIRCxNQUdLO0FBQ0QsaUJBQUswQixRQUFMLENBQWMsRUFBQzVCLFlBQVdBLFVBQVosRUFBdUJHLGFBQVlBLFdBQW5DLEVBQStDTCxnQkFBZSxJQUE5RCxFQUFtRUksUUFBTyxJQUExRSxFQUFkO0FBQ0g7QUFDRjtBQUNGO0FBQ0Y7OztpQ0FFWThDLEMsRUFBRztBQUNkLFVBQUlJLFdBQVcsSUFBSTdDLElBQUosRUFBZjtBQUNBLFVBQUlDLGNBQWM0QyxTQUFTM0MsV0FBVCxFQUFsQjtBQUNBLFVBQUlDLGtCQUFrQkYsY0FBWSxHQUFaLElBQWlCNEMsU0FBU3pDLFFBQVQsR0FBb0JDLFFBQXBCLEdBQStCQyxNQUEvQixJQUF5QyxDQUF6QyxHQUEyQyxPQUFPdUMsU0FBU3pDLFFBQVQsTUFBdUIsQ0FBdkIsR0FBeUIsQ0FBekIsR0FBMkJ5QyxTQUFTekMsUUFBVCxLQUFxQixDQUF2RCxDQUEzQyxHQUFxR3lDLFNBQVN6QyxRQUFULEVBQXRILElBQTJJLEdBQTNJLElBQWdKeUMsU0FBU3RDLE9BQVQsR0FBbUJGLFFBQW5CLEdBQThCQyxNQUE5QixJQUF3QyxDQUF4QyxHQUEwQyxNQUFJdUMsU0FBU3RDLE9BQVQsRUFBOUMsR0FBaUVzQyxTQUFTdEMsT0FBVCxFQUFqTixDQUF0QjtBQUNBLFVBQUl1QyxPQUFPLElBQVg7QUFDQSxVQUFJckQsYUFBYSxJQUFqQjtBQUNBLFVBQUlHLGNBQVksRUFBaEI7QUFDQSxVQUFJbUQsS0FBSyxLQUFLM0QsS0FBTCxDQUFXOEIsT0FBWCxHQUFtQixhQUFXLEtBQUs5QixLQUFMLENBQVc0RCxZQUF6QyxHQUFzRCxTQUEvRDtBQUNBLFVBQUlMLE1BQU1GLEVBQUVRLE1BQUYsQ0FBU0MsS0FBbkI7QUFDQSxVQUFJQyxZQUFZLENBQUMsR0FBRCxFQUFLLEdBQUwsRUFBUyxHQUFULEVBQWEsR0FBYixDQUFoQjtBQUNBLFVBQUlDLGFBQWEsQ0FBQyxJQUFELEVBQU0sSUFBTixFQUFXLEdBQVgsRUFBZSxHQUFmLENBQWpCO0FBQ0EsVUFBSUMsMkJBQTJCLENBQUMsSUFBRCxFQUFNLEdBQU4sRUFBVSxJQUFWLEVBQWUsR0FBZixFQUFtQixJQUFuQixFQUF3QixHQUF4QixFQUE0QixJQUE1QixFQUFpQyxHQUFqQyxFQUFxQyxJQUFyQyxDQUEvQjtBQUNBLFVBQUlDLHdCQUF3QixDQUFDLElBQUQsRUFBTSxHQUFOLEVBQVUsSUFBVixDQUE1Qjs7QUFFRSxVQUFHWCxJQUFJckMsTUFBSixJQUFjLENBQWpCLEVBQW1CO0FBQ2pCLFlBQUdvQixNQUFNaUIsR0FBTixDQUFILEVBQWM7QUFDWkEsZ0JBQU0sSUFBTjtBQUNELFNBRkQsTUFFSztBQUNILGNBQUdRLFVBQVVJLE9BQVYsQ0FBa0JaLEdBQWxCLEtBQTBCLENBQUMsQ0FBOUIsRUFBZ0M7QUFDOUJBLGtCQUFNLE1BQUlBLEdBQUosR0FBVSxHQUFoQjtBQUNEO0FBQ0Y7QUFDRCxhQUFLdEIsUUFBTCxDQUFjLEVBQUMvQixRQUFPcUQsR0FBUixFQUFkO0FBQ0QsT0FURCxNQVNNLElBQUlBLElBQUlyQyxNQUFKLEtBQWUsQ0FBbkIsRUFBc0I7QUFDMUIsWUFBR3FDLE9BQU8sSUFBUCxJQUFlQSxPQUFNLEVBQXhCLEVBQTJCO0FBQ3pCQSxpQkFBTyxHQUFQO0FBQ0QsU0FGRCxNQUVNLElBQUdBLElBQUlhLFFBQUosQ0FBYSxHQUFiLENBQUgsRUFBcUI7QUFDekJiLGdCQUFNLE1BQUlBLEdBQVY7QUFDRCxTQUZLLE1BRUQ7QUFDSEEsZ0JBQU9BLElBQUk1QixNQUFKLENBQVcsQ0FBWCxDQUFQO0FBQ0Q7QUFDRCxhQUFLTSxRQUFMLENBQWMsRUFBQy9CLFFBQU9xRCxHQUFSLEVBQVlsRCxZQUFXQSxVQUF2QixFQUFrQ0csYUFBWUEsV0FBOUMsRUFBZDtBQUNELE9BVEssTUFTQSxJQUFHK0MsSUFBSXJDLE1BQUosS0FBZSxDQUFsQixFQUFvQjtBQUN4QnFDLGNBQU1BLElBQUk5QixLQUFKLENBQVUsR0FBVixFQUFlNEMsR0FBZixDQUFtQixVQUFTQyxDQUFULEVBQVc7QUFBQyxpQkFBT0EsRUFBRUMsT0FBRixDQUFVLEtBQVYsRUFBaUIsRUFBakIsQ0FBUDtBQUE0QixTQUEzRCxDQUFOO0FBQ0UsWUFBR2hCLElBQUksQ0FBSixLQUFTLEVBQVosRUFBZTtBQUNiQSxnQkFBTUEsSUFBSSxDQUFKLElBQVMsR0FBZjtBQUNELFNBRkQsTUFFSztBQUNILGNBQUdBLElBQUksQ0FBSixLQUFVLElBQVYsSUFBa0JVLHlCQUF5QkUsT0FBekIsQ0FBaUNaLElBQUksQ0FBSixDQUFqQyxLQUE0QyxDQUFDLENBQWxFLEVBQW9FO0FBQ2xFQSxrQkFBTUEsSUFBSSxDQUFKLElBQU8sR0FBYjtBQUNELFdBRkQsTUFFTSxJQUFHQSxJQUFJLENBQUosS0FBVSxJQUFWLElBQWtCQSxJQUFJLENBQUosS0FBVSxHQUEvQixFQUFtQztBQUN2Q0Esa0JBQU1BLElBQUksQ0FBSixJQUFPLEdBQWI7QUFDRCxXQUZLLE1BRUQ7QUFDSCxnQkFBR1MsV0FBV0csT0FBWCxDQUFtQlosSUFBSSxDQUFKLENBQW5CLEtBQThCLENBQUMsQ0FBbEMsRUFBb0M7QUFDbENBLG9CQUFNQSxJQUFJLENBQUosSUFBUyxHQUFULEdBQWUsR0FBZixHQUFtQkEsSUFBSSxDQUFKLENBQW5CLEdBQTRCLEdBQWxDO0FBQ0QsYUFGRCxNQUVLO0FBQ0hBLG9CQUFNQSxJQUFJLENBQUosSUFBUyxHQUFULEdBQWNBLElBQUksQ0FBSixDQUFwQjtBQUNEO0FBQ0Y7QUFDRjtBQUNELGFBQUt0QixRQUFMLENBQWMsRUFBQy9CLFFBQU9xRCxHQUFSLEVBQVlsRCxZQUFXQSxVQUF2QixFQUFrQ0csYUFBWUEsV0FBOUMsRUFBZDtBQUNILE9BbEJLLE1Ba0JBLElBQUkrQyxJQUFJckMsTUFBSixLQUFlLENBQW5CLEVBQXNCO0FBQ3pCcUMsY0FBTUEsSUFBSTlCLEtBQUosQ0FBVSxHQUFWLENBQU47QUFDQSxZQUFHYSxNQUFNaUIsSUFBSSxDQUFKLENBQU4sQ0FBSCxFQUFpQjtBQUNkQSxnQkFBTUEsSUFBSSxDQUFKLElBQU8sR0FBUCxHQUFZQSxJQUFJLENBQUosRUFBTzVCLE1BQVAsQ0FBYyxDQUFkLENBQWxCO0FBQ0YsU0FGRCxNQUVLO0FBQ0osY0FBRzRCLElBQUksQ0FBSixJQUFTLEVBQVosRUFBZTtBQUNiQSxrQkFBTUEsSUFBSSxDQUFKLElBQU8sR0FBUCxHQUFZQSxJQUFJLENBQUosRUFBTzVCLE1BQVAsQ0FBYyxDQUFkLENBQWxCO0FBQ0QsV0FGRCxNQUVLO0FBQ0gsZ0JBQUc0QixJQUFJLENBQUosS0FBVSxJQUFiLEVBQWtCO0FBQ2Qsa0JBQUdVLHlCQUF5QkUsT0FBekIsQ0FBaUNaLElBQUksQ0FBSixDQUFqQyxLQUE0QyxDQUFDLENBQTdDLElBQWtEQSxJQUFJLENBQUosS0FBUyxFQUE5RCxFQUFpRTtBQUMvREEsc0JBQU1BLElBQUksQ0FBSixJQUFPLEdBQVAsR0FBWUEsSUFBSSxDQUFKLEVBQU81QixNQUFQLENBQWMsQ0FBZCxDQUFsQjtBQUNELGVBRkQsTUFFSztBQUNINEIsc0JBQU1BLElBQUksQ0FBSixJQUFPLEdBQVAsR0FBWUEsSUFBSSxDQUFKLENBQVosR0FBb0IsR0FBMUI7QUFDRDtBQUNKLGFBTkQsTUFNTSxJQUFHQSxJQUFJLENBQUosS0FBVSxJQUFWLElBQWtCVyxzQkFBc0JDLE9BQXRCLENBQThCWixJQUFJLENBQUosQ0FBOUIsS0FBeUMsQ0FBQyxDQUEvRCxFQUFpRTtBQUNyRUEsb0JBQU1BLElBQUksQ0FBSixJQUFPLEdBQVAsR0FBWUEsSUFBSSxDQUFKLEVBQU81QixNQUFQLENBQWMsQ0FBZCxDQUFsQjtBQUNELGFBRkssTUFHRjtBQUNBNEIsb0JBQU1BLElBQUksQ0FBSixJQUFPLEdBQVAsR0FBWUEsSUFBSSxDQUFKLENBQVosR0FBb0IsR0FBMUI7QUFDSDtBQUNGO0FBQ0Y7QUFDRCxhQUFLdEIsUUFBTCxDQUFjLEVBQUMvQixRQUFPcUQsR0FBUixFQUFZbEQsWUFBV0EsVUFBdkIsRUFBa0NHLGFBQVlBLFdBQTlDLEVBQWQ7QUFDRCxPQXZCSyxNQXVCQSxJQUFHK0MsSUFBSXJDLE1BQUosR0FBYSxDQUFoQixFQUFrQjtBQUN0QnFDLGNBQU1BLElBQUk5QixLQUFKLENBQVUsR0FBVixFQUFlNEMsR0FBZixDQUFtQixVQUFTQyxDQUFULEVBQVc7QUFBQyxpQkFBT0EsRUFBRUMsT0FBRixDQUFVLEtBQVYsRUFBaUIsRUFBakIsQ0FBUDtBQUE0QixTQUEzRCxDQUFOO0FBQ0EsWUFBR2hCLElBQUlyQyxNQUFKLElBQWEsQ0FBaEIsRUFBa0I7QUFDWixjQUFJRyxlQUFla0MsSUFBSSxDQUFKLEVBQU9yQyxNQUFQLElBQWlCLENBQWpCLElBQXNCcUMsSUFBSSxDQUFKLElBQVEsRUFBOUIsR0FBaUMsTUFBSUEsSUFBSSxDQUFKLEVBQU81QixNQUFQLENBQWMsQ0FBZCxDQUFyQyxHQUFzRDRCLElBQUksQ0FBSixDQUF6RTtBQUNBLGNBQUlpQixpQkFBaUJqQixJQUFJLENBQUosRUFBT3JDLE1BQVAsSUFBaUIsQ0FBakIsSUFBc0JxQyxJQUFJLENBQUosSUFBUSxFQUE5QixHQUFpQyxNQUFJQSxJQUFJLENBQUosRUFBTzVCLE1BQVAsQ0FBYyxDQUFkLENBQXJDLEdBQXNENEIsSUFBSSxDQUFKLENBQTNFO0FBQ0EsY0FBSW5DLGdCQUFnQm1DLElBQUksQ0FBSixDQUFwQjtBQUNELGNBQUduQyxjQUFjRixNQUFkLElBQXdCLENBQTNCLEVBQTZCO0FBQzFCLGdCQUFHRSxpQkFBa0JQLGNBQWMsR0FBbkMsRUFBd0M7QUFDdENSLDJCQUFhLEtBQWI7QUFDQUcsNEJBQVksOEVBQVo7QUFDRCxhQUhELE1BR00sSUFBR1ksZ0JBQWdCUCxXQUFoQixJQUErQk8sZ0JBQWMsR0FBZCxHQUFrQm9ELGNBQWxCLEdBQWlDLEdBQWpDLEdBQXFDbkQsWUFBckMsR0FBb0ROLGVBQXRGLEVBQXNHO0FBQ3hHViwyQkFBYSxLQUFiO0FBQ0FHLDRCQUFhLEVBQWI7QUFDSCxhQUhLLE1BR0Q7QUFDREEsNEJBQWEsRUFBYjtBQUNBSCwyQkFBYSxLQUFLd0IsV0FBTCxDQUFpQlIsWUFBakIsRUFBOEJtRCxjQUE5QixFQUE2Q3BELGFBQTdDLEVBQTJELEtBQTNELENBQWI7QUFDQSxtQkFBS1csWUFBTCxDQUFrQlgsZ0JBQWMsR0FBZCxHQUFrQm9ELGNBQWxCLEdBQWlDLEdBQWpDLEdBQXFDbkQsWUFBdkQ7QUFDSDtBQUNELGlCQUFLckIsS0FBTCxDQUFXNEIsVUFBWCxDQUFzQixLQUF0QixFQUE0QlIsZ0JBQWMsR0FBZCxHQUFrQm9ELGNBQWxCLEdBQWlDLEdBQWpDLEdBQXFDbkQsWUFBakUsRUFBOEVoQixVQUE5RTtBQUNBLGlCQUFLNEIsUUFBTCxDQUFjLEVBQUMvQixRQUFPbUIsZUFBZSxHQUFmLEdBQW9CbUQsY0FBcEIsR0FBcUMsR0FBckMsR0FBMkNwRCxhQUFuRCxFQUFpRWYsWUFBV0EsVUFBNUUsRUFBdUZHLGFBQVlBLFdBQW5HLEVBQWQ7QUFDRixXQWRELE1BY0s7QUFDRitDLGtCQUFNbEMsZUFBZSxHQUFmLEdBQW9CbUQsY0FBcEIsR0FBcUMsR0FBckMsR0FBMkNwRCxhQUFqRDtBQUNBLGlCQUFLYSxRQUFMLENBQWMsRUFBQy9CLFFBQU9xRCxHQUFSLEVBQVlsRCxZQUFXQSxVQUF2QixFQUFrQ0csYUFBWUEsV0FBOUMsRUFBZDtBQUNEO0FBQ0o7QUFDSjtBQUNKOzs7K0JBRVM7QUFDUixVQUFJaUQsV0FBVyxJQUFJN0MsSUFBSixFQUFmO0FBQ0EsVUFBSVAsbUJBQUo7QUFDQSxVQUFJRyxjQUFjLEVBQWxCO0FBQ0EsVUFBSWlFLGNBQWMsS0FBS3hFLEtBQUwsQ0FBV0MsTUFBN0I7QUFDQSxVQUFJVyxjQUFjNEMsU0FBUzNDLFdBQVQsRUFBbEI7QUFDQSxVQUFJQyxrQkFBa0JGLGNBQVksR0FBWixJQUFpQjRDLFNBQVN6QyxRQUFULEdBQW9CQyxRQUFwQixHQUErQkMsTUFBL0IsSUFBeUMsQ0FBekMsR0FBMkMsT0FBT3VDLFNBQVN6QyxRQUFULE1BQXVCLENBQXZCLEdBQXlCLENBQXpCLEdBQTJCeUMsU0FBU3pDLFFBQVQsS0FBcUIsQ0FBdkQsQ0FBM0MsR0FBcUd5QyxTQUFTekMsUUFBVCxFQUF0SCxJQUEySSxHQUEzSSxJQUFnSnlDLFNBQVN0QyxPQUFULEdBQW1CRixRQUFuQixHQUE4QkMsTUFBOUIsSUFBd0MsQ0FBeEMsR0FBMEMsTUFBSXVDLFNBQVN0QyxPQUFULEVBQTlDLEdBQWlFc0MsU0FBU3RDLE9BQVQsRUFBak4sQ0FBdEI7QUFDQSxVQUFHc0QsV0FBSCxFQUFlO0FBQ2JBLHNCQUFjQSxZQUFZaEQsS0FBWixDQUFrQixHQUFsQixDQUFkO0FBQ0UsWUFBR2dELFlBQVl2RCxNQUFaLElBQXFCLENBQXhCLEVBQTBCO0FBQ3RCdUQsc0JBQVksQ0FBWixJQUFpQkEsWUFBWSxDQUFaLEVBQWV2RCxNQUFmLEtBQTBCLENBQTFCLElBQStCdUQsWUFBWSxDQUFaLEVBQWV2RCxNQUFmLElBQXdCLENBQXZELEdBQTZEdUQsWUFBWSxDQUFaLEtBQWlCLElBQWpCLEdBQXVCLE9BQU1BLFlBQVksQ0FBWixDQUE3QixHQUE4QyxPQUFPQSxZQUFZLENBQVosQ0FBbEgsR0FBc0lBLFlBQVksQ0FBWixDQUF2SjtBQUNBQSxzQkFBWSxDQUFaLElBQWlCQSxZQUFZLENBQVosRUFBZXZELE1BQWYsSUFBeUIsQ0FBekIsR0FBNEIsTUFBSXVELFlBQVksQ0FBWixDQUFoQyxHQUErQ0EsWUFBWSxDQUFaLENBQWhFO0FBQ0MsY0FBR0EsWUFBWSxDQUFaLEVBQWV2RCxNQUFmLElBQXlCLENBQTVCLEVBQThCO0FBQzNCLGdCQUFHdUQsWUFBWSxDQUFaLEtBQW1CNUQsY0FBYyxHQUFwQyxFQUF5QztBQUN2Q1IsMkJBQWEsS0FBYjtBQUNBRyw0QkFBWSw4RUFBWjtBQUNELGFBSEQsTUFHTSxJQUFHaUUsWUFBWSxDQUFaLElBQWlCNUQsV0FBakIsSUFBZ0M0RCxZQUFZLENBQVosSUFBZSxHQUFmLEdBQW1CQSxZQUFZLENBQVosQ0FBbkIsR0FBa0MsR0FBbEMsR0FBc0NBLFlBQVksQ0FBWixDQUF0QyxHQUF1RDFELGVBQTFGLEVBQTBHO0FBQzVHViwyQkFBYSxLQUFiO0FBQ0FHLDRCQUFhLEVBQWI7QUFDSCxhQUhLLE1BR0Q7QUFDREEsNEJBQWEsRUFBYjtBQUNBSCwyQkFBYSxLQUFLd0IsV0FBTCxDQUFpQjRDLFlBQVksQ0FBWixDQUFqQixFQUFnQ0EsWUFBWSxDQUFaLENBQWhDLEVBQStDQSxZQUFZLENBQVosQ0FBL0MsRUFBOEQsS0FBOUQsQ0FBYjtBQUNBLG1CQUFLMUMsWUFBTCxDQUFrQjBDLFlBQVksQ0FBWixJQUFlLEdBQWYsR0FBbUJBLFlBQVksQ0FBWixDQUFuQixHQUFrQyxHQUFsQyxHQUFzQ0EsWUFBWSxDQUFaLENBQXhEO0FBQ0g7QUFDRCxpQkFBS3pFLEtBQUwsQ0FBVzRCLFVBQVgsQ0FBc0IsS0FBdEIsRUFBNEI2QyxZQUFZLENBQVosSUFBZSxHQUFmLEdBQW1CQSxZQUFZLENBQVosQ0FBbkIsR0FBa0MsR0FBbEMsR0FBc0NBLFlBQVksQ0FBWixDQUFsRSxFQUFpRnBFLFVBQWpGO0FBQ0EsaUJBQUs0QixRQUFMLENBQWMsRUFBQy9CLFFBQU91RSxZQUFZLENBQVosSUFBaUIsR0FBakIsR0FBc0JBLFlBQVksQ0FBWixDQUF0QixHQUF1QyxHQUF2QyxHQUE2Q0EsWUFBWSxDQUFaLENBQXJELEVBQW9FcEUsWUFBV0EsVUFBL0UsRUFBMEZHLGFBQVlBLFdBQXRHLEVBQWQ7QUFDRixXQWRELE1BY0s7QUFDRmlFLDBCQUFjQSxZQUFZLENBQVosSUFBaUIsR0FBakIsR0FBc0JBLFlBQVksQ0FBWixDQUF0QixHQUF1QyxHQUF2QyxHQUE2Q0EsWUFBWSxDQUFaLENBQTNEO0FBQ0EsaUJBQUt4QyxRQUFMLENBQWMsRUFBQy9CLFFBQU91RSxXQUFSLEVBQW9CcEUsWUFBV0EsVUFBL0IsRUFBMENHLGFBQVlBLFdBQXRELEVBQWQ7QUFDRDtBQUNKO0FBQ047QUFDRjs7OzZCQUVRO0FBQUE7O0FBQ1AsVUFBSWtFLG9CQUFKO0FBQ0EsVUFBRyxDQUFDLEtBQUsxRSxLQUFMLENBQVcyRSxZQUFYLElBQTJCLEtBQUsxRSxLQUFMLENBQVdPLFdBQXZDLEtBQXVELEtBQUtSLEtBQUwsQ0FBVzRFLFVBQXJFLEVBQWdGO0FBQzlFRixzQkFBYyxFQUFDRyxjQUFhLGVBQWQsRUFBZDtBQUNELE9BRkQsTUFFTSxJQUFHLEtBQUs3RSxLQUFMLENBQVcyRSxZQUFYLElBQTJCLEtBQUsxRSxLQUFMLENBQVdPLFdBQXpDLEVBQXFEO0FBQ3pEa0Usc0JBQWMsRUFBQ0ksUUFBTyxlQUFSLEVBQWQ7QUFDRDs7QUFFQyxhQUNHO0FBQUE7QUFBQSxVQUFLLFdBQVUscUJBQWY7QUFDSyxpREFBTyxNQUFLLEtBQVosRUFBa0IsVUFBTyxLQUFLOUUsS0FBTCxDQUFXOEIsT0FBWCxHQUFtQixhQUFXLEtBQUs5QixLQUFMLENBQVc0RCxZQUF6QyxHQUFzRCxTQUE3RCxDQUFsQixFQUE0RixLQUFJLEtBQWhHLEVBQXNHLE9BQU8sS0FBSzNELEtBQUwsQ0FBV0MsTUFBWCxHQUFrQixLQUFLRCxLQUFMLENBQVdDLE1BQTdCLEdBQW9DLEVBQWpKLEVBQXFKLGNBQXJKLEVBQThKLFlBQVMsS0FBS0YsS0FBTCxDQUFXOEIsT0FBWCxHQUFtQixhQUFXLEtBQUs5QixLQUFMLENBQVc0RCxZQUF6QyxHQUFzRCxTQUEvRCxDQUE5SixFQUEwTyxTQUFTLG1CQUFJO0FBQUMsbUJBQUszQixRQUFMLENBQWMsRUFBQzNCLFdBQVUsSUFBWCxFQUFkO0FBQWdDLFdBQXhSLEVBQTBSLFdBQVUsSUFBcFMsRUFBeVMsVUFBVSxLQUFLTixLQUFMLENBQVc0RCxZQUFYLElBQTJCLEtBQUs1RCxLQUFMLENBQVcrRSxVQUF0QyxHQUFpRCxVQUFqRCxHQUE0RCxFQUEvVyxFQUFtWCxPQUFPTCxXQUExWCxFQUF1WSxtQkFBZ0IsS0FBSzFFLEtBQUwsQ0FBVzRFLFVBQVgsR0FBc0IsWUFBdEIsR0FBbUMsRUFBbkQsQ0FBdlksRUFBZ2MsVUFBVSxLQUFLSSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUExYyxFQUF3ZSxXQUFXLEtBQUtDLFlBQUwsQ0FBa0JELElBQWxCLENBQXVCLElBQXZCLENBQW5mLEVBQWloQixRQUFRLEtBQUtFLFFBQUwsQ0FBY0YsSUFBZCxDQUFtQixJQUFuQixDQUF6aEIsR0FETDtBQUdPLGFBQUtoRixLQUFMLENBQVdFLGNBQVgsR0FBMkIsQ0FBM0IsSUFBZ0MsS0FBS0YsS0FBTCxDQUFXSSxVQUEzQyxHQUNBO0FBQUE7QUFBQSxZQUFNLFdBQVUsWUFBaEI7QUFBOEIsZUFBS0osS0FBTCxDQUFXRSxjQUF6QztBQUFBO0FBQTBELGVBQUtGLEtBQUwsQ0FBV0UsY0FBWCxJQUE0QixDQUE1QixHQUE4QixNQUE5QixHQUFxQztBQUEvRixTQURBLEdBRUMsS0FBS0YsS0FBTCxDQUFXRSxjQUFYLElBQTRCLENBQTVCLElBQWlDLEtBQUtGLEtBQUwsQ0FBV0ksVUFBNUMsR0FDRDtBQUFBO0FBQUEsWUFBTSxXQUFVLFlBQWhCO0FBQThCLGVBQUtKLEtBQUwsQ0FBV00sTUFBekM7QUFBQTtBQUFrRCxlQUFLTixLQUFMLENBQVdNLE1BQVgsSUFBb0IsQ0FBcEIsR0FBc0IsT0FBdEIsR0FBOEI7QUFBaEYsU0FEQyxHQUVDLEtBQUtOLEtBQUwsQ0FBV0MsTUFBWCxJQUFxQixDQUFDLEtBQUtELEtBQUwsQ0FBV0ksVUFBakMsR0FDRixLQUFLSixLQUFMLENBQVdPLFdBQVgsR0FBdUIsRUFBdkIsR0FDQztBQUFBO0FBQUEsWUFBTSxXQUFVLHNCQUFoQjtBQUFBO0FBQUEsU0FGQyxHQUdELEVBVlI7QUFZSztBQUFBO0FBQUEsWUFBTywyQkFBeUIsS0FBS1AsS0FBTCxDQUFXQyxNQUFYLElBQXFCLEtBQUtELEtBQUwsQ0FBV0ssU0FBaEMsR0FBMEMsZ0JBQTFDLEdBQTJELEVBQXBGLENBQVAsRUFBaUcsZUFBWSxLQUFLTixLQUFMLENBQVc4QixPQUFYLEdBQW1CLGFBQVcsS0FBSzlCLEtBQUwsQ0FBVzRELFlBQXpDLEdBQXNELFNBQWxFLENBQWpHO0FBQUE7QUFBQSxTQVpMO0FBYUssYUFBSzNELEtBQUwsQ0FBV08sV0FBWCxHQUF3QjtBQUFBO0FBQUEsWUFBRyxXQUFVLFFBQWIsRUFBc0IsT0FBTyxFQUFDZCxPQUFNLEtBQVAsRUFBYUMsVUFBUyxDQUF0QixFQUE3QjtBQUF3RCxlQUFLTSxLQUFMLENBQVdPO0FBQW5FLFNBQXhCLEdBQTRHO0FBYmpILE9BREg7QUFpQkg7Ozs7RUE1U3lCNEUsZ0JBQU1DLFM7O2tCQWdUckJ0RixlIiwiZmlsZSI6IjEyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmV4cG9ydCBkZWZhdWx0ICh7IGlzVmlwIH0pID0+IHtcblx0cmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17YGRzY2xtZXItZnRyICR7aXNWaXA/J21hcmdpbi1ib3R0b20tNTUnOicnfWB9PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMjBcIiBzdHlsZT17eyBjb2xvcjogJyM4YThhOGEnLCBmb250U2l6ZTogMTAgfX0gPlRoZSBXZWJzaXRlIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGluIGNhc2Ugb2YgYSBtZWRpY2FsIGVtZXJnZW5jeSBhbmQvIG9yIGNyaXRpY2FsIGNhcmUgYW5kIHRoZSB1c2VyIHNob3VsZCBkaXJlY3RseSBjb250YWN0IGhpcy8gaGVyIG1lZGljYWwgc2VydmljZSBwcm92aWRlciBmb3IgUGh5c2ljYWwgRXhhbWluYXRpb24uIERvY3ByaW1lIGlzIHNvbGVseSBhIHRlY2hub2xvZ3kgcGFydG5lci48L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZm9vdGVyLW5ldy1jb3B5cmdodFwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDUgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8cD5Eb2NwcmltZS5jb20gQ29weXJpZ2h0ICZjb3B5OyAyMDIwLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+QWxsIHJpZ2h0cyByZXNlcnZlZC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRPQ1BSSU1FIFRFQ0hOT0xPR0lFUyBQUklWQVRFIExJTUlURUQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkNJTiA6IFU3NDk5OUhSMjAxNlBUQzA2NDMxMjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2Pilcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuXG5jbGFzcyBOZXdEYXRlU2VsZWN0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICBuZXdEb2I6JycsXG4gICAgICAgICAgY2FsY3VhbGF0ZWRBZ2U6bnVsbCxcbiAgICAgICAgICB0b0NhbGN1bGF0ZUFnZTp0cnVlLFxuICAgICAgICAgIGlzVmFsaWREb2I6dHJ1ZSxcbiAgICAgICAgICBpc0ZvY3VzZWQ6ZmFsc2UsXG4gICAgICAgICAgbW9udGhzOm51bGwsXG4gICAgICAgICAgaW5WYWxpZFRleHQ6JydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuaW5pdGlhbERvYlRvU3RhdGUodGhpcy5wcm9wcylcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIHRoaXMuaW5pdGlhbERvYlRvU3RhdGUobmV4dFByb3BzKSAgICAgICAgXG4gICAgfVxuXG4gICAgaW5pdGlhbERvYlRvU3RhdGUobmV4dFByb3BzKXtcbiAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcbiAgICAgIHZhciBjdXJyZW50WWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcbiAgICAgIHZhciBjdXJyZW50RXhhY3REYXkgPSBjdXJyZW50WWVhcisnLScrKGQuZ2V0TW9udGgoKS50b1N0cmluZygpLmxlbmd0aCA9PSAxPycwJyArIChkLmdldE1vbnRoKCkgPT0gMD8xOmQuZ2V0TW9udGgoKSArIDEpOmQuZ2V0TW9udGgoKSkrJy0nKyhkLmdldERhdGUoKS50b1N0cmluZygpLmxlbmd0aCA9PSAxPycwJytkLmdldERhdGUoKTpkLmdldERhdGUoKSlcbiAgICAgIGxldCBpc1ZhbGlkRG9iXG4gICAgICBsZXQgaW5WYWxpZFRleHQ9JydcbiAgICAgIGxldCBGb3JtYXR0ZWRZZWFyXG4gICAgICBsZXQgRm9ybWF0dGVkRGF5IFxuICAgICAgbGV0IEZvcm1hdHRlZE1udGhcbiAgICAgIGlmKG5leHRQcm9wcy5vbGRfZG9iICYmIG5leHRQcm9wcy5vbGRfZG9iICE9ICcnKXtcbiAgICAgICAgbGV0IG9sZERvYiA9IG5leHRQcm9wcy5vbGRfZG9iLnNwbGl0KCctJylcbiAgICAgICAgIGlmKHRoaXMuc3RhdGUudG9DYWxjdWxhdGVBZ2UgfHwgIG5leHRQcm9wcy5pc0ZvcmNlVXBkYXRlRG9iKXtcbiAgICAgICAgICBpZihvbGREb2IubGVuZ3RoID09Myl7XG4gICAgICAgICAgICBpZihvbGREb2JbMF0ubGVuZ3RoID09NCl7XG4gICAgICAgICAgICAgIEZvcm1hdHRlZFllYXIgPSBvbGREb2JbMF1cbiAgICAgICAgICAgICAgRm9ybWF0dGVkRGF5ID0gb2xkRG9iWzJdLmxlbmd0aCA9PSAyICYmIG9sZERvYlsyXSA+MzE/JzAnK29sZERvYlsyXS5jaGFyQXQoMCk6b2xkRG9iWzJdXG4gICAgICAgICAgICAgIEZvcm1hdHRlZE1udGggPSBvbGREb2JbMV0ubGVuZ3RoID09IDIgJiYgb2xkRG9iWzFdID4xMj8nMCcrb2xkRG9iWzFdLmNoYXJBdCgwKTpvbGREb2JbMV1cbiAgICAgICAgICAgICAgaWYoRm9ybWF0dGVkWWVhciA8PSAoY3VycmVudFllYXIgLSAxMDApKXtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkRG9iID0gZmFsc2VcbiAgICAgICAgICAgICAgICBpblZhbGlkVGV4dCA9IFwiKlBhdGllbnQncyBhZ2UgaXMgbm90IGFwcGxpY2FibGUuIFdlIHNlcnZlIHBhdGllbnRzIGxlc3MgdGhhbiAxMDAgeWVhcnMgb2xkLlwiXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXROZXdEYXRlKCdkb2InLEZvcm1hdHRlZFllYXIrJy0nK0Zvcm1hdHRlZE1udGgrJy0nK0Zvcm1hdHRlZERheSxpc1ZhbGlkRG9iKSBcbiAgICAgICAgICAgICAgfWVsc2UgaWYoRm9ybWF0dGVkWWVhciA+IGN1cnJlbnRZZWFyIHx8IEZvcm1hdHRlZFllYXIrJy0nK0Zvcm1hdHRlZE1udGgrJy0nK0Zvcm1hdHRlZERheSA+IGN1cnJlbnRFeGFjdERheSl7XG4gICAgICAgICAgICAgICAgaXNWYWxpZERvYiA9IGZhbHNlXG4gICAgICAgICAgICAgICAgaW5WYWxpZFRleHQgPScnXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXROZXdEYXRlKCdkb2InLEZvcm1hdHRlZFllYXIrJy0nK0Zvcm1hdHRlZE1udGgrJy0nK0Zvcm1hdHRlZERheSxpc1ZhbGlkRG9iKSBcbiAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgaW5WYWxpZFRleHQgPScnXG4gICAgICAgICAgICAgICAgaXNWYWxpZERvYiA9IHRoaXMuaXNWYWxpZERhdGUoRm9ybWF0dGVkRGF5LEZvcm1hdHRlZE1udGgsRm9ybWF0dGVkWWVhcix0aGlzLnByb3BzLmlzX2dvbGQ/dHJ1ZTpmYWxzZSlcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUFnZShGb3JtYXR0ZWRZZWFyKyctJytGb3JtYXR0ZWRNbnRoKyctJytGb3JtYXR0ZWREYXkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYoRm9ybWF0dGVkRGF5ICYmIEZvcm1hdHRlZE1udGggJiYgRm9ybWF0dGVkWWVhcil7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5pc19nb2xkKXtcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudW5TZXRGb3JjZVVwZGF0ZURvYigpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe25ld0RvYjpGb3JtYXR0ZWREYXkrICcvJyArIEZvcm1hdHRlZE1udGgrICcvJyArIEZvcm1hdHRlZFllYXIsaXNWYWxpZERvYjppc1ZhbGlkRG9iLHRvQ2FsY3VsYXRlQWdlOmZhbHNlLCBpblZhbGlkVGV4dDppblZhbGlkVGV4dH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYobmV4dFByb3BzLm9sZF9kb2IgPT0gJycpe1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe25ld0RvYjpudWxsLGlzVmFsaWREb2I6dHJ1ZSwgaW5WYWxpZFRleHQ6JycsY2FsY3VhbGF0ZWRBZ2U6bnVsbCxtb250aHM6bnVsbH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tWYWx1ZShzdHIsIG1heCl7XG4gICAgICBpZihzdHIuY2hhckF0KDApICE9PSAnMCcgfHwgc3RyID09ICcwMCcpe1xuICAgICAgICB2YXIgbnVtID0gcGFyc2VJbnQoc3RyKTtcbiAgICAgICAgaWYoaXNOYU4obnVtKSB8fCBudW0gPD0gMCB8fCBudW0gPiBtYXgpIG51bSA9IDE7XG4gICAgICAgIHN0ciA9IG51bSA+IHBhcnNlSW50KG1heC50b1N0cmluZygpLmNoYXJBdCgwKSkgJiYgbnVtLnRvU3RyaW5nKCkubGVuZ3RoID09IDEgPyAnMCcgKyBudW0gOiBudW0udG9TdHJpbmcoKTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIGlzVmFsaWREYXRlIChkLCBtLCB5LGlzX2ZvcmNlZCkge1xuICAgICAgbGV0IGluaXRpYWxfbW9udGggPSBtOyAvLyB0byBzdG9yZSBpbml0aWFsIG1vbnRoIHZhbHVlIFxuICAgICAgdmFyIG0gPSBwYXJzZUludChtLCAxMCkgLSAxO1xuICAgICAgbGV0IGlzX3ZhbGlkPSBtID49IDAgJiYgbSA8IDEyICYmIGQgPiAwICYmIGQgPD0gdGhpcy5kYXlzSW5Nb250aChtLCB5KVxuICAgICAgaWYoaXNfZm9yY2VkICYmIGlzX3ZhbGlkKXtcbiAgICAgICAgdGhpcy5wcm9wcy5nZXROZXdEYXRlKCdkb2InLHkrJy0nK2luaXRpYWxfbW9udGgrJy0nK2QsaXNfdmFsaWQpIFxuICAgICAgfVxuICAgICAgcmV0dXJuIGlzX3ZhbGlkO1xuICAgIH1cblxuICAgIGRheXNJbk1vbnRoIChtLCB5KSB7XG4gICAgICBzd2l0Y2ggKG0pIHtcbiAgICAgICAgICBjYXNlIDEgOlxuICAgICAgICAgICAgICByZXR1cm4gKHkgJSA0ID09IDAgJiYgeSAlIDEwMCkgfHwgeSAlIDQwMCA9PSAwID8gMjkgOiAyODtcbiAgICAgICAgICBjYXNlIDggOiBjYXNlIDMgOiBjYXNlIDUgOiBjYXNlIDEwIDpcbiAgICAgICAgICAgICAgcmV0dXJuIDMwO1xuICAgICAgICAgIGRlZmF1bHQgOlxuICAgICAgICAgICAgICByZXR1cm4gMzFcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYWxjdWxhdGVBZ2UoZGF0ZVN0cmluZykgeyAvLyBiaXJ0aGRheSBpcyBhIGRhdGVcbiAgICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIGJpcnRoRGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuICAgICAgICB2YXIgYWdlID0gdG9kYXkuZ2V0RnVsbFllYXIoKSAtIGJpcnRoRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB2YXIgbSA9IHRvZGF5LmdldE1vbnRoKCkgLSBiaXJ0aERhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgbGV0IGRhdGVGcm9tID0gbmV3IERhdGUoYmlydGhEYXRlLmdldEZ1bGxZZWFyKCkgLCBiaXJ0aERhdGUuZ2V0TW9udGgoKSlcbiAgICAgICAgbGV0IGRhdGVUbyA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksdG9kYXkuZ2V0TW9udGgoKSlcbiAgICAgICAgaWYgKG0gPCAwIHx8IChtID09PSAwICYmIHRvZGF5LmdldERhdGUoKSA8IGJpcnRoRGF0ZS5nZXREYXRlKCkpKSB7XG4gICAgICAgICAgICBhZ2UtLTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbW50aF92YWwgPSB0aGlzLm1vbnRoRGlmZihkYXRlRnJvbSxkYXRlVG8pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NhbGN1YWxhdGVkQWdlOmFnZSxtb250aHM6bW50aF92YWx9KVxuICAgIH1cblxuICAgIG1vbnRoRGlmZihkYXRlRnJvbSwgZGF0ZVRvKSB7XG4gICAgIHJldHVybiBkYXRlVG8uZ2V0TW9udGgoKSAtIGRhdGVGcm9tLmdldE1vbnRoKCkgKyBcbiAgICAgICAoMTIgKiAoZGF0ZVRvLmdldEZ1bGxZZWFyKCkgLSBkYXRlRnJvbS5nZXRGdWxsWWVhcigpKSlcbiAgICB9XG5cbiAgICBrZXlQcmVzc0Z1bmMoZSkge1xuICAgICAgbGV0IGlzVmFsaWREb2IgPSB0cnVlXG4gICAgICBsZXQgaW5WYWxpZFRleHQgPSAnJ1xuICAgICAgaWYoZS53aGljaCA9PT0gOCkge1xuICAgICAgICB2YXIgdmFsID0gdGhpcy5zdGF0ZS5uZXdEb2I7XG4gICAgICAgIGlmKHZhbCAmJiB2YWwubGVuZ3RoID09IDApe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bmV3RG9iOm51bGx9LCgpPT57XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0TmV3RGF0ZSgnZG9iJyxudWxsLGZhbHNlKSBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgaWYodmFsLmxlbmd0aCl7XG4gICAgICAgICAgaWYodmFsLmxlbmd0aCA9PSAzIHx8IHZhbC5sZW5ndGggPT0gNiB8fCB2YWwubGVuZ3RoID09IDQgfHwgdmFsLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgIHZhbCA9IHZhbC5zbGljZSgwLCB2YWwubGVuZ3RoLTEpO1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtuZXdEb2I6dmFsLGlzVmFsaWREb2I6aXNWYWxpZERvYixpblZhbGlkVGV4dDppblZhbGlkVGV4dCxjYWxjdWFsYXRlZEFnZTpudWxsLG1vbnRoczpudWxsfSlcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNWYWxpZERvYjppc1ZhbGlkRG9iLGluVmFsaWRUZXh0OmluVmFsaWRUZXh0LGNhbGN1YWxhdGVkQWdlOm51bGwsbW9udGhzOm51bGx9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICB2YXIgbmV3X2RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgdmFyIGN1cnJlbnRZZWFyID0gbmV3X2RhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgIHZhciBjdXJyZW50RXhhY3REYXkgPSBjdXJyZW50WWVhcisnLScrKG5ld19kYXRlLmdldE1vbnRoKCkudG9TdHJpbmcoKS5sZW5ndGggPT0gMT8nMCcgKyAobmV3X2RhdGUuZ2V0TW9udGgoKSA9PSAwPzE6bmV3X2RhdGUuZ2V0TW9udGgoKSsgMSk6bmV3X2RhdGUuZ2V0TW9udGgoKSkrJy0nKyhuZXdfZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5sZW5ndGggPT0gMT8nMCcrbmV3X2RhdGUuZ2V0RGF0ZSgpOm5ld19kYXRlLmdldERhdGUoKSlcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IGlzVmFsaWREb2IgPSB0cnVlXG4gICAgICBsZXQgaW5WYWxpZFRleHQ9JydcbiAgICAgIGxldCBpZCA9IHRoaXMucHJvcHMuaXNfZ29sZD8nbmV3RGF0ZV8nK3RoaXMucHJvcHMudXNlcl9mb3JtX2lkOiduZXdEYXRlJztcbiAgICAgIHZhciB2YWwgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGxldCBzdGF0aWNEYXkgPSBbJzEnLCcyJywnMycsJzAnXVxuICAgICAgbGV0IHN0YXRpY01udGggPSBbJzExJywnMTInLCcwJywnMSddXG4gICAgICBsZXQgY2hlY2tWYWxpZE1vbnRoVGhpcnR5T25lID0gWycwMCcsJzInLCcwMicsJzQnLCcwNCcsJzYnLCcwNicsJzknLCcwOSddXG4gICAgICBsZXQgY2hlY2tWYWxpZE1vbnRoVGhpcnR5ID0gWycwMCcsJzInLCcwMiddXG5cbiAgICAgICAgaWYodmFsLmxlbmd0aCA9PSAxKXtcbiAgICAgICAgICBpZihpc05hTih2YWwpKXtcbiAgICAgICAgICAgIHZhbCA9IG51bGxcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGlmKHN0YXRpY0RheS5pbmRleE9mKHZhbCkgPT0gLTEpe1xuICAgICAgICAgICAgICB2YWwgPSAnMCcrdmFsICsgJy8nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe25ld0RvYjp2YWx9KVxuICAgICAgICB9ZWxzZSBpZiAodmFsLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgIGlmKHZhbCAhPSBcIjAwXCIgJiYgdmFsIDw9MzEpe1xuICAgICAgICAgICAgdmFsICs9ICcvJ1xuICAgICAgICAgIH1lbHNlIGlmKHZhbC5pbmNsdWRlcygnLycpKXtcbiAgICAgICAgICAgIHZhbCA9ICcwJyt2YWxcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHZhbCAgPSB2YWwuY2hhckF0KDApXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe25ld0RvYjp2YWwsaXNWYWxpZERvYjppc1ZhbGlkRG9iLGluVmFsaWRUZXh0OmluVmFsaWRUZXh0fSlcbiAgICAgICAgfWVsc2UgaWYodmFsLmxlbmd0aCA9PT0gNCl7XG4gICAgICAgICAgdmFsID0gdmFsLnNwbGl0KCcvJykubWFwKGZ1bmN0aW9uKHYpe3JldHVybiB2LnJlcGxhY2UoL1xcRC9nLCAnJyl9KVxuICAgICAgICAgICAgaWYodmFsWzFdID09XCJcIil7XG4gICAgICAgICAgICAgIHZhbCA9IHZhbFswXSArICcvJ1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIGlmKHZhbFswXSA9PSAnMzEnICYmIGNoZWNrVmFsaWRNb250aFRoaXJ0eU9uZS5pbmRleE9mKHZhbFsxXSkgIT0gLTEpe1xuICAgICAgICAgICAgICAgIHZhbCA9IHZhbFswXSsnLydcbiAgICAgICAgICAgICAgfWVsc2UgaWYodmFsWzBdID09ICczMCcgJiYgdmFsWzFdID09ICcyJyl7XG4gICAgICAgICAgICAgICAgdmFsID0gdmFsWzBdKycvJ1xuICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBpZihzdGF0aWNNbnRoLmluZGV4T2YodmFsWzFdKSA9PSAtMSl7XG4gICAgICAgICAgICAgICAgICB2YWwgPSB2YWxbMF0gKyAnLycgKyAnMCcrdmFsWzFdICsgJy8nXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICB2YWwgPSB2YWxbMF0gKyAnLycgK3ZhbFsxXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bmV3RG9iOnZhbCxpc1ZhbGlkRG9iOmlzVmFsaWREb2IsaW5WYWxpZFRleHQ6aW5WYWxpZFRleHR9KVxuICAgICAgICB9ZWxzZSBpZiAodmFsLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICB2YWwgPSB2YWwuc3BsaXQoJy8nKVxuICAgICAgICAgICBpZihpc05hTih2YWxbMV0pKXtcbiAgICAgICAgICAgICAgdmFsID0gdmFsWzBdKycvJysgdmFsWzFdLmNoYXJBdCgwKVxuICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGlmKHZhbFsxXSA+IDEyKXtcbiAgICAgICAgICAgICAgdmFsID0gdmFsWzBdKycvJysgdmFsWzFdLmNoYXJBdCgwKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIGlmKHZhbFswXSA9PSAnMzEnKXtcbiAgICAgICAgICAgICAgICAgIGlmKGNoZWNrVmFsaWRNb250aFRoaXJ0eU9uZS5pbmRleE9mKHZhbFsxXSkgIT0gLTEgfHwgdmFsWzFdID09MTEpe1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSB2YWxbMF0rJy8nKyB2YWxbMV0uY2hhckF0KDApXG4gICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gdmFsWzBdKycvJysgdmFsWzFdICsnLycgIFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9ZWxzZSBpZih2YWxbMF0gPT0gJzMwJyAmJiBjaGVja1ZhbGlkTW9udGhUaGlydHkuaW5kZXhPZih2YWxbMV0pICE9IC0xKXtcbiAgICAgICAgICAgICAgICB2YWwgPSB2YWxbMF0rJy8nKyB2YWxbMV0uY2hhckF0KDApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgIHZhbCA9IHZhbFswXSsnLycrIHZhbFsxXSArJy8nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bmV3RG9iOnZhbCxpc1ZhbGlkRG9iOmlzVmFsaWREb2IsaW5WYWxpZFRleHQ6aW5WYWxpZFRleHR9KVxuICAgICAgICB9ZWxzZSBpZih2YWwubGVuZ3RoID4gNSl7XG4gICAgICAgICAgdmFsID0gdmFsLnNwbGl0KCcvJykubWFwKGZ1bmN0aW9uKHYpe3JldHVybiB2LnJlcGxhY2UoL1xcRC9nLCAnJyl9KVxuICAgICAgICAgIGlmKHZhbC5sZW5ndGggPT0zKXtcbiAgICAgICAgICAgICAgICB2YXIgRm9ybWF0dGVkRGF5ID0gdmFsWzBdLmxlbmd0aCA9PSAyICYmIHZhbFswXSA+MzE/JzAnK3ZhbFswXS5jaGFyQXQoMCk6dmFsWzBdXG4gICAgICAgICAgICAgICAgdmFyIEZvcm1hdHRlZE1vbnRoID0gdmFsWzFdLmxlbmd0aCA9PSAyICYmIHZhbFsxXSA+MTI/JzAnK3ZhbFsxXS5jaGFyQXQoMCk6dmFsWzFdXG4gICAgICAgICAgICAgICAgdmFyIEZvcm1hdHRlZFllYXIgPSB2YWxbMl1cbiAgICAgICAgICAgICAgIGlmKEZvcm1hdHRlZFllYXIubGVuZ3RoID09IDQpe1xuICAgICAgICAgICAgICAgICAgaWYoRm9ybWF0dGVkWWVhciA8PSAoY3VycmVudFllYXIgLSAxMDApKXtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZERvYiA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIGluVmFsaWRUZXh0PVwiKlBhdGllbnQncyBhZ2UgaXMgbm90IGFwcGxpY2FibGUuIFdlIHNlcnZlIHBhdGllbnRzIGxlc3MgdGhhbiAxMDAgeWVhcnMgb2xkLlwiXG4gICAgICAgICAgICAgICAgICB9ZWxzZSBpZihGb3JtYXR0ZWRZZWFyID4gY3VycmVudFllYXIgfHwgRm9ybWF0dGVkWWVhcisnLScrRm9ybWF0dGVkTW9udGgrJy0nK0Zvcm1hdHRlZERheSA+IGN1cnJlbnRFeGFjdERheSl7XG4gICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZERvYiA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgaW5WYWxpZFRleHQgPScnXG4gICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICBpblZhbGlkVGV4dD0gJydcbiAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkRG9iID0gdGhpcy5pc1ZhbGlkRGF0ZShGb3JtYXR0ZWREYXksRm9ybWF0dGVkTW9udGgsRm9ybWF0dGVkWWVhcixmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUFnZShGb3JtYXR0ZWRZZWFyKyctJytGb3JtYXR0ZWRNb250aCsnLScrRm9ybWF0dGVkRGF5KSAgXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldE5ld0RhdGUoJ2RvYicsRm9ybWF0dGVkWWVhcisnLScrRm9ybWF0dGVkTW9udGgrJy0nK0Zvcm1hdHRlZERheSxpc1ZhbGlkRG9iKSBcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe25ld0RvYjpGb3JtYXR0ZWREYXkgKyAnLycgK0Zvcm1hdHRlZE1vbnRoICsgJy8nICsgRm9ybWF0dGVkWWVhcixpc1ZhbGlkRG9iOmlzVmFsaWREb2IsaW5WYWxpZFRleHQ6aW5WYWxpZFRleHR9KVxuICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICB2YWwgPSBGb3JtYXR0ZWREYXkgKyAnLycgK0Zvcm1hdHRlZE1vbnRoICsgJy8nICsgRm9ybWF0dGVkWWVhclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bmV3RG9iOnZhbCxpc1ZhbGlkRG9iOmlzVmFsaWREb2IsaW5WYWxpZFRleHQ6aW5WYWxpZFRleHR9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzQmx1cmVkKCl7XG4gICAgICB2YXIgbmV3X2RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgbGV0IGlzVmFsaWREb2JcbiAgICAgIGxldCBpblZhbGlkVGV4dCA9ICcnXG4gICAgICB2YXIgZGF0ZU9mQmlydGggPSB0aGlzLnN0YXRlLm5ld0RvYlxuICAgICAgdmFyIGN1cnJlbnRZZWFyID0gbmV3X2RhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgIHZhciBjdXJyZW50RXhhY3REYXkgPSBjdXJyZW50WWVhcisnLScrKG5ld19kYXRlLmdldE1vbnRoKCkudG9TdHJpbmcoKS5sZW5ndGggPT0gMT8nMCcgKyAobmV3X2RhdGUuZ2V0TW9udGgoKSA9PSAwPzE6bmV3X2RhdGUuZ2V0TW9udGgoKSsgMSk6bmV3X2RhdGUuZ2V0TW9udGgoKSkrJy0nKyhuZXdfZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5sZW5ndGggPT0gMT8nMCcrbmV3X2RhdGUuZ2V0RGF0ZSgpOm5ld19kYXRlLmdldERhdGUoKSlcbiAgICAgIGlmKGRhdGVPZkJpcnRoKXtcbiAgICAgICAgZGF0ZU9mQmlydGggPSBkYXRlT2ZCaXJ0aC5zcGxpdCgnLycpXG4gICAgICAgICAgaWYoZGF0ZU9mQmlydGgubGVuZ3RoID09Myl7XG4gICAgICAgICAgICAgIGRhdGVPZkJpcnRoWzJdID0gZGF0ZU9mQmlydGhbMl0ubGVuZ3RoICE9PSA0ICYmIGRhdGVPZkJpcnRoWzJdLmxlbmd0aCA9PTIgID8gKGRhdGVPZkJpcnRoWzJdID49JzIwJz8oJzE5JysgZGF0ZU9mQmlydGhbMl0pOignMjAnICsgZGF0ZU9mQmlydGhbMl0pKSAgOiBkYXRlT2ZCaXJ0aFsyXVxuICAgICAgICAgICAgICBkYXRlT2ZCaXJ0aFsxXSA9IGRhdGVPZkJpcnRoWzFdLmxlbmd0aCAhPSAyPyAnMCcrZGF0ZU9mQmlydGhbMV06ZGF0ZU9mQmlydGhbMV1cbiAgICAgICAgICAgICAgIGlmKGRhdGVPZkJpcnRoWzJdLmxlbmd0aCA9PSA0KXtcbiAgICAgICAgICAgICAgICAgIGlmKGRhdGVPZkJpcnRoWzJdIDw9IChjdXJyZW50WWVhciAtIDEwMCkpe1xuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkRG9iID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgaW5WYWxpZFRleHQ9XCIqUGF0aWVudCdzIGFnZSBpcyBub3QgYXBwbGljYWJsZS4gV2Ugc2VydmUgcGF0aWVudHMgbGVzcyB0aGFuIDEwMCB5ZWFycyBvbGQuXCJcbiAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKGRhdGVPZkJpcnRoWzJdID4gY3VycmVudFllYXIgfHwgZGF0ZU9mQmlydGhbMl0rJy0nK2RhdGVPZkJpcnRoWzFdKyctJytkYXRlT2ZCaXJ0aFswXSA+IGN1cnJlbnRFeGFjdERheSl7XG4gICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZERvYiA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgaW5WYWxpZFRleHQgPScnXG4gICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICBpblZhbGlkVGV4dD0gJydcbiAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkRG9iID0gdGhpcy5pc1ZhbGlkRGF0ZShkYXRlT2ZCaXJ0aFswXSxkYXRlT2ZCaXJ0aFsxXSxkYXRlT2ZCaXJ0aFsyXSxmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUFnZShkYXRlT2ZCaXJ0aFsyXSsnLScrZGF0ZU9mQmlydGhbMV0rJy0nK2RhdGVPZkJpcnRoWzBdKSAgXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldE5ld0RhdGUoJ2RvYicsZGF0ZU9mQmlydGhbMl0rJy0nK2RhdGVPZkJpcnRoWzFdKyctJytkYXRlT2ZCaXJ0aFswXSxpc1ZhbGlkRG9iKSBcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe25ld0RvYjpkYXRlT2ZCaXJ0aFswXSArICcvJyArZGF0ZU9mQmlydGhbMV0gKyAnLycgKyBkYXRlT2ZCaXJ0aFsyXSxpc1ZhbGlkRG9iOmlzVmFsaWREb2IsaW5WYWxpZFRleHQ6aW5WYWxpZFRleHR9KVxuICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICBkYXRlT2ZCaXJ0aCA9IGRhdGVPZkJpcnRoWzBdICsgJy8nICtkYXRlT2ZCaXJ0aFsxXSArICcvJyArIGRhdGVPZkJpcnRoWzJdXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtuZXdEb2I6ZGF0ZU9mQmlydGgsaXNWYWxpZERvYjppc1ZhbGlkRG9iLGluVmFsaWRUZXh0OmluVmFsaWRUZXh0fSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgbGV0IGJvcmRlclN0eWxlXG4gICAgICBpZigodGhpcy5wcm9wcy5pc19kb2JfZXJyb3IgfHwgdGhpcy5zdGF0ZS5pblZhbGlkVGV4dCkgJiYgdGhpcy5wcm9wcy5pc19zdW1tYXJ5KXtcbiAgICAgICAgYm9yZGVyU3R5bGUgPSB7Ym9yZGVyQm90dG9tOicxcHggc29saWQgcmVkJ31cbiAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMuaXNfZG9iX2Vycm9yIHx8IHRoaXMuc3RhdGUuaW5WYWxpZFRleHQpe1xuICAgICAgICBib3JkZXJTdHlsZSA9IHtib3JkZXI6JzFweCBzb2xpZCByZWQnfVxuICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxXcmFwIGRkbW1pbnB1dFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgaWQ9e2Ake3RoaXMucHJvcHMuaXNfZ29sZD8nbmV3RGF0ZV8nK3RoaXMucHJvcHMudXNlcl9mb3JtX2lkOiduZXdEYXRlJ31gfSByZWY9J2RvYicgdmFsdWU9e3RoaXMuc3RhdGUubmV3RG9iP3RoaXMuc3RhdGUubmV3RG9iOicnfSByZXF1aXJlZCBuYW1lPXtgJHt0aGlzLnByb3BzLmlzX2dvbGQ/J25ld0RhdGVfJyt0aGlzLnByb3BzLnVzZXJfZm9ybV9pZDonbmV3RGF0ZSd9YH0gb25Gb2N1cz17KCk9Pnt0aGlzLnNldFN0YXRlKHtpc0ZvY3VzZWQ6dHJ1ZX0pfX0gbWF4TGVuZ3RoPVwiMTBcIiBkaXNhYmxlZD17dGhpcy5wcm9wcy51c2VyX2Zvcm1faWQgJiYgdGhpcy5wcm9wcy5kaXNhYmxlRG9iPydkaXNhYmxlZCc6Jyd9IHN0eWxlPXtib3JkZXJTdHlsZX0gcGxhY2Vob2xkZXI9e2Ake3RoaXMucHJvcHMuaXNfc3VtbWFyeT8nREQvTU0vWVlZWSc6Jyd9YH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9IG9uS2V5RG93bj17dGhpcy5rZXlQcmVzc0Z1bmMuYmluZCh0aGlzKX0gb25CbHVyPXt0aGlzLmlzQmx1cmVkLmJpbmQodGhpcyl9Lz4gXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jYWxjdWFsYXRlZEFnZSA+MCAmJiB0aGlzLnN0YXRlLmlzVmFsaWREb2I/XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC15ZWFyXCI+e3RoaXMuc3RhdGUuY2FsY3VhbGF0ZWRBZ2V9IHt0aGlzLnN0YXRlLmNhbGN1YWxhdGVkQWdlID09MT8neWVhcic6J3llYXJzJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICA6dGhpcy5zdGF0ZS5jYWxjdWFsYXRlZEFnZSA9PTAgJiYgdGhpcy5zdGF0ZS5pc1ZhbGlkRG9iP1xuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQteWVhclwiPnt0aGlzLnN0YXRlLm1vbnRoc30ge3RoaXMuc3RhdGUubW9udGhzID09MT8nbW9udGgnOidtb250aHMnfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5uZXdEb2IgJiYgIXRoaXMuc3RhdGUuaXNWYWxpZERvYj9cbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaW5WYWxpZFRleHQ/JydcbiAgICAgICAgICAgICAgICAgIDo8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC15ZWFyIGRvYi1lcnJvclwiPkludmFsaWQgRE9CPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9IHtgc3VtcnktbGJsICR7dGhpcy5zdGF0ZS5uZXdEb2IgfHwgdGhpcy5zdGF0ZS5pc0ZvY3VzZWQ/J2lzLWlucC1mb2N1c2VkJzonJ31gfSBodG1sRm9yPXtgJHt0aGlzLnByb3BzLmlzX2dvbGQ/J25ld0RhdGVfJyt0aGlzLnByb3BzLnVzZXJfZm9ybV9pZDonbmV3RGF0ZSd9YH0+RGF0ZSBvZiBCaXJ0aCAoREQvTU0vWVlZWSk8L2xhYmVsPlxuICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaW5WYWxpZFRleHQ/IDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiIHN0eWxlPXt7Y29sb3I6J3JlZCcsZm9udFNpemU6OX19Pnt0aGlzLnN0YXRlLmluVmFsaWRUZXh0fTwvcD46Jyd9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBOZXdEYXRlU2VsZWN0b3JcbiJdLCJzb3VyY2VSb290IjoiIn0=