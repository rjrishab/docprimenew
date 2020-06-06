(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./dev/js/components/commons/commonlySearched/CommonlySearched.js":
/*!************************************************************************!*\
  !*** ./dev/js/components/commons/commonlySearched/CommonlySearched.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonlySearched = function (_React$Component) {
    _inherits(CommonlySearched, _React$Component);

    function CommonlySearched(props) {
        _classCallCheck(this, CommonlySearched);

        var _this = _possibleConstructorReturn(this, (CommonlySearched.__proto__ || Object.getPrototypeOf(CommonlySearched)).call(this, props));

        _this.state = {
            currentTestType: {}
        };
        return _this;
    }

    _createClass(CommonlySearched, [{
        key: 'toggle',
        value: function toggle(row) {
            if (document.getElementById('search_results_view') && document.getElementById('search_bar')) {
                document.getElementById('search_results_view').scrollIntoView();
            }
            if (this.props.type == 'condition') {
                var data = {
                    'Category': 'ConsumerApp', 'Action': 'CommonConditionSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'common-condition-selected', 'selected': row.name || '', 'selectedId': row.id || ''
                };
                _gtm2.default.sendEvent({ data: data });
            } else if (this.props.type == 'speciality') {

                var _data = {
                    'Category': 'ConsumerApp', 'Action': 'CommonSpecializationsSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'common-specializations-selected', 'selected': row.name || '', 'selectedId': row.id || '', 'searched': '', 'searchString': ''
                };
                _gtm2.default.sendEvent({ data: _data });
            } else if (this.props.type == 'test' || this.props.type == 'package') {

                if (this.props.type == 'package') {
                    var _data2 = {
                        'Category': 'ConsumerApp', 'Action': 'PackageSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'package-selected', 'selected': row.name || '', 'selectedId': row.id || '', 'searched': '', 'searchString': ''
                    };
                    _gtm2.default.sendEvent({ data: _data2 });
                } else {
                    /*let data = {
                    'Category': 'ConsumerApp', 'Action': 'TestSelected', 'CustomerID': GTM.getUserId() || '', 'leadid': 0, 'event': 'test-selected', 'selected': row.name || '', 'selectedId': row.id || '', 'searched': '', 'searchString': ''
                    }
                    GTM.sendEvent({ data: data })*/
                }

                row = Object.assign({}, row);
                row.type = 'test';
                this.props.toggle(this.props.type || row.type, row);
                return;
            }

            // else if (this.props.type == 'package') {

            //     let data = {
            //         'Category': 'ConsumerApp', 'Action': 'PackageSelected', 'CustomerID': GTM.getUserId() || '', 'leadid': 0, 'event': 'package-selected', 'selected': row.name || '', 'selectedId': row.id || '', 'searched': '', 'searchString': ''
            //     }
            //     GTM.sendEvent({ data: data })

            //     row = Object.assign({}, row)
            //     row.type = 'package'
            //     this.props.toggle((this.props.type || row.type), row)
            //     return
            // }

            else if (this.props.type == 'procedures_category') {
                    var _data3 = {
                        'Category': 'ConsumerApp', 'Action': 'CommonProcedureCategoriesSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'common-procedure-category-selected', 'selected': row.name || '', 'selectedId': row.id || ''
                    };
                    _gtm2.default.sendEvent({ data: _data3 });
                } else if (this.props.type == 'procedures') {
                    var _data4 = {
                        'Category': 'ConsumerApp', 'Action': 'CommonProceduresSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'common-procedures-selected', 'selected': row.name || '', 'selectedId': row.id || '', 'searched': '', 'searchString': ''
                    };
                    _gtm2.default.sendEvent({ data: _data4 });
                } else if (this.props.type == 'ipd') {
                    var _data5 = {
                        'Category': 'ConsumerApp', 'Action': 'CommonIPDSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'common-ipd-selected', 'selected': row.name || '', 'selectedId': row.id || '', 'searched': '', 'searchString': ''
                    };
                    _gtm2.default.sendEvent({ data: _data5 });
                }
            this.props.toggle(this.props.type || row.type, row);
        }
    }, {
        key: 'testInfo',
        value: function testInfo(test_id, url, e) {
            var lat = 28.644800;
            var long = 77.216721;
            if (this.props.dataState && this.props.dataState.selectedLocation) {
                lat = this.props.dataState.selectedLocation.geometry.location.lat;
                long = this.props.dataState.selectedLocation.geometry.location.lng;

                if (typeof lat === 'function') lat = lat();
                if (typeof long === 'function') long = long();
            }
            var selected_test_ids = [];
            this.props.data.map(function (row, i) {
                selected_test_ids.push(row.id);
            });
            e.stopPropagation();
            if (url && url != '') {
                this.props.history.push('/' + url + '?test_ids=' + test_id + '&selected_test_ids=' + selected_test_ids + '&lat=' + lat + '&long=' + long + '&from=search');
            } else {
                this.props.history.push('/search/testinfo?test_ids=' + test_id + '&selected_test_ids=' + selected_test_ids + '&lat=' + lat + '&long=' + long + '&from=search');
            }

            var data = {
                'Category': 'ConsumerApp', 'Action': 'testInfoClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'test-info-click', 'pageSource': 'common-search-result-page'
            };
            _gtm2.default.sendEvent({ data: data });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var test_info = '';
            var rows = this.props.data.map(function (row, i) {
                if (_this2.props.selectedPills) {
                    {/*if (this.props.selectedSearchType == 'lab') {
                           if (Object.keys(row).length > 0 && row.show_details) {
                               test_info = <span className="srch-heading" style={{ float: 'right', cursor: 'pointer', color: '#e58950' }} onClick={this.testInfo.bind(this)}></span>
                           }
                        }*/}
                    return _react2.default.createElement(
                        'li',
                        { key: i },
                        _react2.default.createElement(
                            'p',
                            null,
                            row.name,
                            row.show_details ? _react2.default.createElement(
                                'span',
                                { style: { marginLeft: '5px', marginTop: '1px', display: 'inline-block' }, onClick: _this2.testInfo.bind(_this2, row.id, row.url) },
                                _react2.default.createElement('img', { src: "/assets" + '/img/icons/Info.svg' })
                            ) : ''
                        ),
                        _react2.default.createElement('img', { style: { width: '15px' }, onClick: function onClick() {
                                return _this2.props.toggle(_this2.props.type || row.type, row);
                            }, src: "/assets" + "/img/sl-close.svg" })
                    );
                } else {
                    var selected = false;
                    _this2.props.selected.map(function (curr) {
                        if (curr.id == row.id) {
                            selected = true;
                        }
                    });
                    return _react2.default.createElement(
                        'li',
                        { key: i, onClick: _this2.toggle.bind(_this2, row) },
                        _react2.default.createElement(
                            'p',
                            { className: selected ? "click-active" : "" },
                            row.name,
                            ' ',
                            row.show_details ? _react2.default.createElement(
                                'span',
                                { style: { marginLeft: '5px', marginTop: '1px', display: 'inline-block' }, onClick: _this2.testInfo.bind(_this2, row.id, row.url) },
                                _react2.default.createElement('img', { src: "/assets" + '/img/icons/Info.svg' })
                            ) : '',
                            ' '
                        ),
                        selected ? "" : _react2.default.createElement('img', { style: { width: '15px' }, src: "/assets" + "/img/shape-srch.svg" })
                    );
                }
            });
            return _react2.default.createElement(
                'div',
                { className: 'widget mb-10' },
                _react2.default.createElement(
                    'div',
                    { className: 'common-search-container' },
                    _react2.default.createElement(
                        'p',
                        { className: 'srch-heading' },
                        this.props.heading,
                        this.props.isPackage ? _react2.default.createElement(
                            'span',
                            { style: { float: 'right', color: 'var(--text--primary--color)', cursor: 'pointer' }, onClick: function onClick() {
                                    return _this2.props.history.push('/searchpackages');
                                } },
                            'View all'
                        ) : ''
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'common-listing-cont' },
                        _react2.default.createElement(
                            'ul',
                            null,
                            rows
                        )
                    )
                )
            );
        }
    }]);

    return CommonlySearched;
}(_react2.default.Component);

exports.default = CommonlySearched;

/***/ }),

/***/ "./dev/js/components/commons/commonlySearched/index.js":
/*!*************************************************************!*\
  !*** ./dev/js/components/commons/commonlySearched/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CommonlySearched = __webpack_require__(/*! ./CommonlySearched.js */ "./dev/js/components/commons/commonlySearched/CommonlySearched.js");

var _CommonlySearched2 = _interopRequireDefault(_CommonlySearched);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _CommonlySearched2.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2NvbW1vbmx5U2VhcmNoZWQvQ29tbW9ubHlTZWFyY2hlZC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2NvbW1vbmx5U2VhcmNoZWQvaW5kZXguanMiXSwibmFtZXMiOlsiQ29tbW9ubHlTZWFyY2hlZCIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50VGVzdFR5cGUiLCJyb3ciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJ0eXBlIiwiZGF0YSIsIkdUTSIsImdldFVzZXJJZCIsIm5hbWUiLCJpZCIsInNlbmRFdmVudCIsIk9iamVjdCIsImFzc2lnbiIsInRvZ2dsZSIsInRlc3RfaWQiLCJ1cmwiLCJlIiwibGF0IiwibG9uZyIsImRhdGFTdGF0ZSIsInNlbGVjdGVkTG9jYXRpb24iLCJnZW9tZXRyeSIsImxvY2F0aW9uIiwibG5nIiwic2VsZWN0ZWRfdGVzdF9pZHMiLCJtYXAiLCJpIiwicHVzaCIsInN0b3BQcm9wYWdhdGlvbiIsImhpc3RvcnkiLCJ0ZXN0X2luZm8iLCJyb3dzIiwic2VsZWN0ZWRQaWxscyIsInNob3dfZGV0YWlscyIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwidGVzdEluZm8iLCJiaW5kIiwiQVNTRVRTX0JBU0VfVVJMIiwid2lkdGgiLCJzZWxlY3RlZCIsImN1cnIiLCJoZWFkaW5nIiwiaXNQYWNrYWdlIiwiZmxvYXQiLCJjb2xvciIsImN1cnNvciIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsZ0I7OztBQUNGLDhCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0lBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLDZCQUFpQjtBQURSLFNBQWI7QUFGZTtBQUtsQjs7OzsrQkFFTUMsRyxFQUFLO0FBQ1IsZ0JBQUlDLFNBQVNDLGNBQVQsQ0FBd0IscUJBQXhCLEtBQWtERCxTQUFTQyxjQUFULENBQXdCLFlBQXhCLENBQXRELEVBQTZGO0FBQ3pGRCx5QkFBU0MsY0FBVCxDQUF3QixxQkFBeEIsRUFBK0NDLGNBQS9DO0FBQ0g7QUFDRCxnQkFBSSxLQUFLTixLQUFMLENBQVdPLElBQVgsSUFBbUIsV0FBdkIsRUFBb0M7QUFDaEMsb0JBQUlDLE9BQU87QUFDUCxnQ0FBWSxhQURMLEVBQ29CLFVBQVUseUJBRDlCLEVBQ3lELGNBQWNDLGNBQUlDLFNBQUosTUFBbUIsRUFEMUYsRUFDOEYsVUFBVSxDQUR4RyxFQUMyRyxTQUFTLDJCQURwSCxFQUNpSixZQUFZUCxJQUFJUSxJQUFKLElBQVksRUFEekssRUFDNkssY0FBY1IsSUFBSVMsRUFBSixJQUFVO0FBRHJNLGlCQUFYO0FBR0FILDhCQUFJSSxTQUFKLENBQWMsRUFBRUwsTUFBTUEsSUFBUixFQUFkO0FBRUgsYUFORCxNQU1PLElBQUksS0FBS1IsS0FBTCxDQUFXTyxJQUFYLElBQW1CLFlBQXZCLEVBQXFDOztBQUV4QyxvQkFBSUMsUUFBTztBQUNQLGdDQUFZLGFBREwsRUFDb0IsVUFBVSwrQkFEOUIsRUFDK0QsY0FBY0MsY0FBSUMsU0FBSixNQUFtQixFQURoRyxFQUNvRyxVQUFVLENBRDlHLEVBQ2lILFNBQVMsaUNBRDFILEVBQzZKLFlBQVlQLElBQUlRLElBQUosSUFBWSxFQURyTCxFQUN5TCxjQUFjUixJQUFJUyxFQUFKLElBQVUsRUFEak4sRUFDcU4sWUFBWSxFQURqTyxFQUNxTyxnQkFBZ0I7QUFEclAsaUJBQVg7QUFHQUgsOEJBQUlJLFNBQUosQ0FBYyxFQUFFTCxNQUFNQSxLQUFSLEVBQWQ7QUFFSCxhQVBNLE1BT0EsSUFBSSxLQUFLUixLQUFMLENBQVdPLElBQVgsSUFBbUIsTUFBbkIsSUFBNkIsS0FBS1AsS0FBTCxDQUFXTyxJQUFYLElBQW1CLFNBQXBELEVBQStEOztBQUVsRSxvQkFBSSxLQUFLUCxLQUFMLENBQVdPLElBQVgsSUFBbUIsU0FBdkIsRUFBa0M7QUFDOUIsd0JBQUlDLFNBQU87QUFDUCxvQ0FBWSxhQURMLEVBQ29CLFVBQVUsaUJBRDlCLEVBQ2lELGNBQWNDLGNBQUlDLFNBQUosTUFBbUIsRUFEbEYsRUFDc0YsVUFBVSxDQURoRyxFQUNtRyxTQUFTLGtCQUQ1RyxFQUNnSSxZQUFZUCxJQUFJUSxJQUFKLElBQVksRUFEeEosRUFDNEosY0FBY1IsSUFBSVMsRUFBSixJQUFVLEVBRHBMLEVBQ3dMLFlBQVksRUFEcE0sRUFDd00sZ0JBQWdCO0FBRHhOLHFCQUFYO0FBR0FILGtDQUFJSSxTQUFKLENBQWMsRUFBRUwsTUFBTUEsTUFBUixFQUFkO0FBQ0gsaUJBTEQsTUFPSztBQUNEOzs7O0FBSUg7O0FBRURMLHNCQUFNVyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQlosR0FBbEIsQ0FBTjtBQUNBQSxvQkFBSUksSUFBSixHQUFXLE1BQVg7QUFDQSxxQkFBS1AsS0FBTCxDQUFXZ0IsTUFBWCxDQUFtQixLQUFLaEIsS0FBTCxDQUFXTyxJQUFYLElBQW1CSixJQUFJSSxJQUExQyxFQUFpREosR0FBakQ7QUFDQTtBQUVIOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBbENPLGlCQW9DRixJQUFJLEtBQUtILEtBQUwsQ0FBV08sSUFBWCxJQUFtQixxQkFBdkIsRUFBOEM7QUFDL0Msd0JBQUlDLFNBQU87QUFDUCxvQ0FBWSxhQURMLEVBQ29CLFVBQVUsbUNBRDlCLEVBQ21FLGNBQWNDLGNBQUlDLFNBQUosTUFBbUIsRUFEcEcsRUFDd0csVUFBVSxDQURsSCxFQUNxSCxTQUFTLG9DQUQ5SCxFQUNvSyxZQUFZUCxJQUFJUSxJQUFKLElBQVksRUFENUwsRUFDZ00sY0FBY1IsSUFBSVMsRUFBSixJQUFVO0FBRHhOLHFCQUFYO0FBR0FILGtDQUFJSSxTQUFKLENBQWMsRUFBRUwsTUFBTUEsTUFBUixFQUFkO0FBRUgsaUJBTkksTUFNRSxJQUFJLEtBQUtSLEtBQUwsQ0FBV08sSUFBWCxJQUFtQixZQUF2QixFQUFxQztBQUN4Qyx3QkFBSUMsU0FBTztBQUNQLG9DQUFZLGFBREwsRUFDb0IsVUFBVSwwQkFEOUIsRUFDMEQsY0FBY0MsY0FBSUMsU0FBSixNQUFtQixFQUQzRixFQUMrRixVQUFVLENBRHpHLEVBQzRHLFNBQVMsNEJBRHJILEVBQ21KLFlBQVlQLElBQUlRLElBQUosSUFBWSxFQUQzSyxFQUMrSyxjQUFjUixJQUFJUyxFQUFKLElBQVUsRUFEdk0sRUFDMk0sWUFBWSxFQUR2TixFQUMyTixnQkFBZ0I7QUFEM08scUJBQVg7QUFHQUgsa0NBQUlJLFNBQUosQ0FBYyxFQUFFTCxNQUFNQSxNQUFSLEVBQWQ7QUFFSCxpQkFOTSxNQU1ELElBQUksS0FBS1IsS0FBTCxDQUFXTyxJQUFYLElBQW1CLEtBQXZCLEVBQThCO0FBQ2hDLHdCQUFJQyxTQUFPO0FBQ1Asb0NBQVksYUFETCxFQUNvQixVQUFVLG1CQUQ5QixFQUNtRCxjQUFjQyxjQUFJQyxTQUFKLE1BQW1CLEVBRHBGLEVBQ3dGLFVBQVUsQ0FEbEcsRUFDcUcsU0FBUyxxQkFEOUcsRUFDcUksWUFBWVAsSUFBSVEsSUFBSixJQUFZLEVBRDdKLEVBQ2lLLGNBQWNSLElBQUlTLEVBQUosSUFBVSxFQUR6TCxFQUM2TCxZQUFZLEVBRHpNLEVBQzZNLGdCQUFnQjtBQUQ3TixxQkFBWDtBQUdBSCxrQ0FBSUksU0FBSixDQUFjLEVBQUVMLE1BQU1BLE1BQVIsRUFBZDtBQUNIO0FBQ0QsaUJBQUtSLEtBQUwsQ0FBV2dCLE1BQVgsQ0FBbUIsS0FBS2hCLEtBQUwsQ0FBV08sSUFBWCxJQUFtQkosSUFBSUksSUFBMUMsRUFBaURKLEdBQWpEO0FBQ0g7OztpQ0FDUWMsTyxFQUFTQyxHLEVBQUtDLEMsRUFBRztBQUN0QixnQkFBSUMsTUFBTSxTQUFWO0FBQ0EsZ0JBQUlDLE9BQU8sU0FBWDtBQUNBLGdCQUFJLEtBQUtyQixLQUFMLENBQVdzQixTQUFYLElBQXdCLEtBQUt0QixLQUFMLENBQVdzQixTQUFYLENBQXFCQyxnQkFBakQsRUFBbUU7QUFDL0RILHNCQUFNLEtBQUtwQixLQUFMLENBQVdzQixTQUFYLENBQXFCQyxnQkFBckIsQ0FBc0NDLFFBQXRDLENBQStDQyxRQUEvQyxDQUF3REwsR0FBOUQ7QUFDQUMsdUJBQU8sS0FBS3JCLEtBQUwsQ0FBV3NCLFNBQVgsQ0FBcUJDLGdCQUFyQixDQUFzQ0MsUUFBdEMsQ0FBK0NDLFFBQS9DLENBQXdEQyxHQUEvRDs7QUFFQSxvQkFBSSxPQUFPTixHQUFQLEtBQWUsVUFBbkIsRUFBK0JBLE1BQU1BLEtBQU47QUFDL0Isb0JBQUksT0FBT0MsSUFBUCxLQUFnQixVQUFwQixFQUFnQ0EsT0FBT0EsTUFBUDtBQUNuQztBQUNELGdCQUFJTSxvQkFBb0IsRUFBeEI7QUFDQSxpQkFBSzNCLEtBQUwsQ0FBV1EsSUFBWCxDQUFnQm9CLEdBQWhCLENBQW9CLFVBQUN6QixHQUFELEVBQU0wQixDQUFOLEVBQVk7QUFDNUJGLGtDQUFrQkcsSUFBbEIsQ0FBdUIzQixJQUFJUyxFQUEzQjtBQUNILGFBRkQ7QUFHQU8sY0FBRVksZUFBRjtBQUNBLGdCQUFJYixPQUFPQSxPQUFPLEVBQWxCLEVBQXNCO0FBQ2xCLHFCQUFLbEIsS0FBTCxDQUFXZ0MsT0FBWCxDQUFtQkYsSUFBbkIsQ0FBd0IsTUFBTVosR0FBTixHQUFZLFlBQVosR0FBMkJELE9BQTNCLEdBQXFDLHFCQUFyQyxHQUE2RFUsaUJBQTdELEdBQWlGLE9BQWpGLEdBQTJGUCxHQUEzRixHQUFpRyxRQUFqRyxHQUE0R0MsSUFBNUcsR0FBbUgsY0FBM0k7QUFDSCxhQUZELE1BRU87QUFDSCxxQkFBS3JCLEtBQUwsQ0FBV2dDLE9BQVgsQ0FBbUJGLElBQW5CLENBQXdCLCtCQUErQmIsT0FBL0IsR0FBeUMscUJBQXpDLEdBQWlFVSxpQkFBakUsR0FBcUYsT0FBckYsR0FBK0ZQLEdBQS9GLEdBQXFHLFFBQXJHLEdBQWdIQyxJQUFoSCxHQUF1SCxjQUEvSTtBQUNIOztBQUVELGdCQUFJYixPQUFPO0FBQ1AsNEJBQVksYUFETCxFQUNvQixVQUFVLGVBRDlCLEVBQytDLGNBQWNDLGNBQUlDLFNBQUosTUFBbUIsRUFEaEYsRUFDb0YsVUFBVSxDQUQ5RixFQUNpRyxTQUFTLGlCQUQxRyxFQUM2SCxjQUFjO0FBRDNJLGFBQVg7QUFHQUQsMEJBQUlJLFNBQUosQ0FBYyxFQUFFTCxNQUFNQSxJQUFSLEVBQWQ7QUFDSDs7O2lDQUVRO0FBQUE7O0FBRUwsZ0JBQUl5QixZQUFZLEVBQWhCO0FBQ0EsZ0JBQUlDLE9BQU8sS0FBS2xDLEtBQUwsQ0FBV1EsSUFBWCxDQUFnQm9CLEdBQWhCLENBQW9CLFVBQUN6QixHQUFELEVBQU0wQixDQUFOLEVBQVk7QUFDdkMsb0JBQUksT0FBSzdCLEtBQUwsQ0FBV21DLGFBQWYsRUFBOEI7QUFDMUIscUJBQUM7Ozs7MkJBSUc7QUFDSiwyQkFBTztBQUFBO0FBQUEsMEJBQUksS0FBS04sQ0FBVDtBQUNIO0FBQUE7QUFBQTtBQUFJMUIsZ0NBQUlRLElBQVI7QUFDS1IsZ0NBQUlpQyxZQUFKLEdBQ0c7QUFBQTtBQUFBLGtDQUFNLE9BQU8sRUFBRUMsWUFBWSxLQUFkLEVBQXFCQyxXQUFXLEtBQWhDLEVBQXVDQyxTQUFTLGNBQWhELEVBQWIsRUFBK0UsU0FBUyxPQUFLQyxRQUFMLENBQWNDLElBQWQsQ0FBbUIsTUFBbkIsRUFBeUJ0QyxJQUFJUyxFQUE3QixFQUFpQ1QsSUFBSWUsR0FBckMsQ0FBeEY7QUFDSSx1RUFBSyxLQUFLd0IsU0FBZUEsR0FBRyxxQkFBNUI7QUFESiw2QkFESCxHQUlLO0FBTFYseUJBREc7QUFTSCwrREFBSyxPQUFPLEVBQUVDLE9BQU8sTUFBVCxFQUFaLEVBQStCLFNBQVM7QUFBQSx1Q0FBTSxPQUFLM0MsS0FBTCxDQUFXZ0IsTUFBWCxDQUFtQixPQUFLaEIsS0FBTCxDQUFXTyxJQUFYLElBQW1CSixJQUFJSSxJQUExQyxFQUFpREosR0FBakQsQ0FBTjtBQUFBLDZCQUF4QyxFQUFxRyxLQUFLdUMsU0FBZUEsR0FBRyxtQkFBNUg7QUFURyxxQkFBUDtBQVdILGlCQWpCRCxNQWlCTztBQUNILHdCQUFJRSxXQUFXLEtBQWY7QUFDQSwyQkFBSzVDLEtBQUwsQ0FBVzRDLFFBQVgsQ0FBb0JoQixHQUFwQixDQUF3QixVQUFDaUIsSUFBRCxFQUFVO0FBQzlCLDRCQUFJQSxLQUFLakMsRUFBTCxJQUFXVCxJQUFJUyxFQUFuQixFQUF1QjtBQUNuQmdDLHVDQUFXLElBQVg7QUFDSDtBQUNKLHFCQUpEO0FBS0EsMkJBQU87QUFBQTtBQUFBLDBCQUFJLEtBQUtmLENBQVQsRUFBWSxTQUFTLE9BQUtiLE1BQUwsQ0FBWXlCLElBQVosQ0FBaUIsTUFBakIsRUFBdUJ0QyxHQUF2QixDQUFyQjtBQUNIO0FBQUE7QUFBQSw4QkFBRyxXQUFXeUMsV0FBVyxjQUFYLEdBQTRCLEVBQTFDO0FBQStDekMsZ0NBQUlRLElBQW5EO0FBQUE7QUFBMERSLGdDQUFJaUMsWUFBSixHQUNsRDtBQUFBO0FBQUEsa0NBQU0sT0FBTyxFQUFFQyxZQUFZLEtBQWQsRUFBcUJDLFdBQVcsS0FBaEMsRUFBdUNDLFNBQVMsY0FBaEQsRUFBYixFQUErRSxTQUFTLE9BQUtDLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQixNQUFuQixFQUF5QnRDLElBQUlTLEVBQTdCLEVBQWlDVCxJQUFJZSxHQUFyQyxDQUF4RjtBQUNJLHVFQUFLLEtBQUt3QixTQUFlQSxHQUFHLHFCQUE1QjtBQURKLDZCQURrRCxHQUloRCxFQUpWO0FBQUE7QUFBQSx5QkFERztBQVFDRSxtQ0FBVyxFQUFYLEdBQWdCLHVDQUFLLE9BQU8sRUFBRUQsT0FBTyxNQUFULEVBQVosRUFBK0IsS0FBS0QsU0FBZUEsR0FBRyxxQkFBdEQ7QUFSakIscUJBQVA7QUFXSDtBQUNKLGFBckNVLENBQVg7QUFzQ0EsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsY0FBZjtBQUNJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLHlCQUFmO0FBQ0k7QUFBQTtBQUFBLDBCQUFHLFdBQVUsY0FBYjtBQUE2Qiw2QkFBSzFDLEtBQUwsQ0FBVzhDLE9BQXhDO0FBQ0ssNkJBQUs5QyxLQUFMLENBQVcrQyxTQUFYLEdBQ0Q7QUFBQTtBQUFBLDhCQUFNLE9BQU8sRUFBQ0MsT0FBTSxPQUFQLEVBQWVDLG9DQUFmLEVBQW1EQyxRQUFPLFNBQTFELEVBQWIsRUFBbUYsU0FBUztBQUFBLDJDQUFLLE9BQUtsRCxLQUFMLENBQVdnQyxPQUFYLENBQW1CRixJQUFuQixDQUF3QixpQkFBeEIsQ0FBTDtBQUFBLGlDQUE1RjtBQUFBO0FBQUEseUJBREMsR0FFQTtBQUhMLHFCQURKO0FBUUk7QUFBQTtBQUFBLDBCQUFLLFdBQVUscUJBQWY7QUFDSTtBQUFBO0FBQUE7QUFDS0k7QUFETDtBQURKO0FBUko7QUFESixhQURKO0FBa0JIOzs7O0VBdkswQmlCLGdCQUFNQyxTOztrQkEyS3RCckQsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlLZjs7Ozs7O2tCQUdlQSwwQiIsImZpbGUiOiI1MC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuXG5jbGFzcyBDb21tb25seVNlYXJjaGVkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGN1cnJlbnRUZXN0VHlwZToge31cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZShyb3cpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hfcmVzdWx0c192aWV3JykgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaF9iYXInKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaF9yZXN1bHRzX3ZpZXcnKS5zY3JvbGxJbnRvVmlldygpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PSAnY29uZGl0aW9uJykge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdDb21tb25Db25kaXRpb25TZWxlY3RlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NvbW1vbi1jb25kaXRpb24tc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnOiByb3cubmFtZSB8fCAnJywgJ3NlbGVjdGVkSWQnOiByb3cuaWQgfHwgJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnR5cGUgPT0gJ3NwZWNpYWxpdHknKSB7XG5cbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQ29tbW9uU3BlY2lhbGl6YXRpb25zU2VsZWN0ZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjb21tb24tc3BlY2lhbGl6YXRpb25zLXNlbGVjdGVkJywgJ3NlbGVjdGVkJzogcm93Lm5hbWUgfHwgJycsICdzZWxlY3RlZElkJzogcm93LmlkIHx8ICcnLCAnc2VhcmNoZWQnOiAnJywgJ3NlYXJjaFN0cmluZyc6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy50eXBlID09ICd0ZXN0JyB8fCB0aGlzLnByb3BzLnR5cGUgPT0gJ3BhY2thZ2UnKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT0gJ3BhY2thZ2UnKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnUGFja2FnZVNlbGVjdGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAncGFja2FnZS1zZWxlY3RlZCcsICdzZWxlY3RlZCc6IHJvdy5uYW1lIHx8ICcnLCAnc2VsZWN0ZWRJZCc6IHJvdy5pZCB8fCAnJywgJ3NlYXJjaGVkJzogJycsICdzZWFyY2hTdHJpbmcnOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvKmxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnVGVzdFNlbGVjdGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAndGVzdC1zZWxlY3RlZCcsICdzZWxlY3RlZCc6IHJvdy5uYW1lIHx8ICcnLCAnc2VsZWN0ZWRJZCc6IHJvdy5pZCB8fCAnJywgJ3NlYXJjaGVkJzogJycsICdzZWFyY2hTdHJpbmcnOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSkqL1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByb3cgPSBPYmplY3QuYXNzaWduKHt9LCByb3cpXG4gICAgICAgICAgICByb3cudHlwZSA9ICd0ZXN0J1xuICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGUoKHRoaXMucHJvcHMudHlwZSB8fCByb3cudHlwZSksIHJvdylcbiAgICAgICAgICAgIHJldHVyblxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBlbHNlIGlmICh0aGlzLnByb3BzLnR5cGUgPT0gJ3BhY2thZ2UnKSB7XG5cbiAgICAgICAgLy8gICAgIGxldCBkYXRhID0ge1xuICAgICAgICAvLyAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnUGFja2FnZVNlbGVjdGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAncGFja2FnZS1zZWxlY3RlZCcsICdzZWxlY3RlZCc6IHJvdy5uYW1lIHx8ICcnLCAnc2VsZWN0ZWRJZCc6IHJvdy5pZCB8fCAnJywgJ3NlYXJjaGVkJzogJycsICdzZWFyY2hTdHJpbmcnOiAnJ1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICAvLyAgICAgcm93ID0gT2JqZWN0LmFzc2lnbih7fSwgcm93KVxuICAgICAgICAvLyAgICAgcm93LnR5cGUgPSAncGFja2FnZSdcbiAgICAgICAgLy8gICAgIHRoaXMucHJvcHMudG9nZ2xlKCh0aGlzLnByb3BzLnR5cGUgfHwgcm93LnR5cGUpLCByb3cpXG4gICAgICAgIC8vICAgICByZXR1cm5cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGVsc2UgaWYgKHRoaXMucHJvcHMudHlwZSA9PSAncHJvY2VkdXJlc19jYXRlZ29yeScpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQ29tbW9uUHJvY2VkdXJlQ2F0ZWdvcmllc1NlbGVjdGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY29tbW9uLXByb2NlZHVyZS1jYXRlZ29yeS1zZWxlY3RlZCcsICdzZWxlY3RlZCc6IHJvdy5uYW1lIHx8ICcnLCAnc2VsZWN0ZWRJZCc6IHJvdy5pZCB8fCAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMudHlwZSA9PSAncHJvY2VkdXJlcycpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQ29tbW9uUHJvY2VkdXJlc1NlbGVjdGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY29tbW9uLXByb2NlZHVyZXMtc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnOiByb3cubmFtZSB8fCAnJywgJ3NlbGVjdGVkSWQnOiByb3cuaWQgfHwgJycsICdzZWFyY2hlZCc6ICcnLCAnc2VhcmNoU3RyaW5nJzogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgfWVsc2UgaWYgKHRoaXMucHJvcHMudHlwZSA9PSAnaXBkJykge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdDb21tb25JUERTZWxlY3RlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NvbW1vbi1pcGQtc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnOiByb3cubmFtZSB8fCAnJywgJ3NlbGVjdGVkSWQnOiByb3cuaWQgfHwgJycsICdzZWFyY2hlZCc6ICcnLCAnc2VhcmNoU3RyaW5nJzogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy50b2dnbGUoKHRoaXMucHJvcHMudHlwZSB8fCByb3cudHlwZSksIHJvdylcbiAgICB9XG4gICAgdGVzdEluZm8odGVzdF9pZCwgdXJsLCBlKSB7XG4gICAgICAgIGxldCBsYXQgPSAyOC42NDQ4MDBcbiAgICAgICAgbGV0IGxvbmcgPSA3Ny4yMTY3MjFcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGF0YVN0YXRlICYmIHRoaXMucHJvcHMuZGF0YVN0YXRlLnNlbGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgIGxhdCA9IHRoaXMucHJvcHMuZGF0YVN0YXRlLnNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubGF0XG4gICAgICAgICAgICBsb25nID0gdGhpcy5wcm9wcy5kYXRhU3RhdGUuc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sbmdcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsYXQgPT09ICdmdW5jdGlvbicpIGxhdCA9IGxhdCgpXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxvbmcgPT09ICdmdW5jdGlvbicpIGxvbmcgPSBsb25nKClcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2VsZWN0ZWRfdGVzdF9pZHMgPSBbXVxuICAgICAgICB0aGlzLnByb3BzLmRhdGEubWFwKChyb3csIGkpID0+IHtcbiAgICAgICAgICAgIHNlbGVjdGVkX3Rlc3RfaWRzLnB1c2gocm93LmlkKVxuICAgICAgICB9KVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGlmICh1cmwgJiYgdXJsICE9ICcnKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycgKyB1cmwgKyAnP3Rlc3RfaWRzPScgKyB0ZXN0X2lkICsgJyZzZWxlY3RlZF90ZXN0X2lkcz0nICsgc2VsZWN0ZWRfdGVzdF9pZHMgKyAnJmxhdD0nICsgbGF0ICsgJyZsb25nPScgKyBsb25nICsgJyZmcm9tPXNlYXJjaCcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3NlYXJjaC90ZXN0aW5mbz90ZXN0X2lkcz0nICsgdGVzdF9pZCArICcmc2VsZWN0ZWRfdGVzdF9pZHM9JyArIHNlbGVjdGVkX3Rlc3RfaWRzICsgJyZsYXQ9JyArIGxhdCArICcmbG9uZz0nICsgbG9uZyArICcmZnJvbT1zZWFyY2gnKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ3Rlc3RJbmZvQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICd0ZXN0LWluZm8tY2xpY2snLCAncGFnZVNvdXJjZSc6ICdjb21tb24tc2VhcmNoLXJlc3VsdC1wYWdlJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCB0ZXN0X2luZm8gPSAnJ1xuICAgICAgICBsZXQgcm93cyA9IHRoaXMucHJvcHMuZGF0YS5tYXAoKHJvdywgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRQaWxscykge1xuICAgICAgICAgICAgICAgIHsvKmlmICh0aGlzLnByb3BzLnNlbGVjdGVkU2VhcmNoVHlwZSA9PSAnbGFiJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMocm93KS5sZW5ndGggPiAwICYmIHJvdy5zaG93X2RldGFpbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlc3RfaW5mbyA9IDxzcGFuIGNsYXNzTmFtZT1cInNyY2gtaGVhZGluZ1wiIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnLCBjdXJzb3I6ICdwb2ludGVyJywgY29sb3I6ICcjZTU4OTUwJyB9fSBvbkNsaWNrPXt0aGlzLnRlc3RJbmZvLmJpbmQodGhpcyl9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0qL31cbiAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgIDxwPntyb3cubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuc2hvd19kZXRhaWxzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnNXB4JywgbWFyZ2luVG9wOiAnMXB4JywgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0gb25DbGljaz17dGhpcy50ZXN0SW5mby5iaW5kKHRoaXMsIHJvdy5pZCwgcm93LnVybCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvaWNvbnMvSW5mby5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJzE1cHgnIH19IG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMudG9nZ2xlKCh0aGlzLnByb3BzLnR5cGUgfHwgcm93LnR5cGUpLCByb3cpfSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zbC1jbG9zZS5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWQubWFwKChjdXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyLmlkID09IHJvdy5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIHJvdyl9PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3NlbGVjdGVkID8gXCJjbGljay1hY3RpdmVcIiA6IFwiXCJ9Pntyb3cubmFtZX0ge3Jvdy5zaG93X2RldGFpbHMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICc1cHgnLCBtYXJnaW5Ub3A6ICcxcHgnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fSBvbkNsaWNrPXt0aGlzLnRlc3RJbmZvLmJpbmQodGhpcywgcm93LmlkLCByb3cudXJsKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9pY29ucy9JbmZvLnN2Zyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gPC9wPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA/IFwiXCIgOiA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMTVweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc2hhcGUtc3JjaC5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtYi0xMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbW9uLXNlYXJjaC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3JjaC1oZWFkaW5nXCI+e3RoaXMucHJvcHMuaGVhZGluZ30gXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pc1BhY2thZ2U/XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2Zsb2F0OidyaWdodCcsY29sb3I6YHZhcigtLXRleHQtLXByaW1hcnktLWNvbG9yKWAsY3Vyc29yOidwb2ludGVyJ319IG9uQ2xpY2s9eygpPT4gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9zZWFyY2hwYWNrYWdlcycpfT5WaWV3IGFsbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tb24tbGlzdGluZy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvd3N9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDb21tb25seVNlYXJjaGVkXG4iLCJpbXBvcnQgQ29tbW9ubHlTZWFyY2hlZCBmcm9tICcuL0NvbW1vbmx5U2VhcmNoZWQuanMnXG5cblxuZXhwb3J0IGRlZmF1bHQgQ29tbW9ubHlTZWFyY2hlZCJdLCJzb3VyY2VSb290IjoiIn0=