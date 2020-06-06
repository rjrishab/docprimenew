exports.ids = [35];
exports.modules = {

/***/ "./dev/js/components/commons/Loader/Loader.js":
/*!****************************************************!*\
  !*** ./dev/js/components/commons/Loader/Loader.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Loader extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return _react2.default.createElement(
            "div",
            { className: this.props.classType || "loaderCircular" },
            _react2.default.createElement("div", { className: "dp-loader" }),
            this.props.iFramePopup ? _react2.default.createElement(
                "p",
                { className: "fw-500 mrt-10" },
                "Redirecting you to Pharmeasy website..."
            ) : ''
        );
    }
}

exports.default = Loader;

/***/ }),

/***/ "./dev/js/components/commons/Loader/index.js":
/*!***************************************************!*\
  !*** ./dev/js/components/commons/Loader/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Loader = __webpack_require__(/*! ./Loader */ "./dev/js/components/commons/Loader/Loader.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Loader2.default;

/***/ }),

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CommonlySearched extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTestType: {}
        };
    }

    toggle(row) {
        if (document.getElementById('search_results_view') && document.getElementById('search_bar')) {
            document.getElementById('search_results_view').scrollIntoView();
        }
        if (this.props.type == 'condition') {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'CommonConditionSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'common-condition-selected', 'selected': row.name || '', 'selectedId': row.id || ''
            };
            _gtm2.default.sendEvent({ data: data });
        } else if (this.props.type == 'speciality') {

            let data = {
                'Category': 'ConsumerApp', 'Action': 'CommonSpecializationsSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'common-specializations-selected', 'selected': row.name || '', 'selectedId': row.id || '', 'searched': '', 'searchString': ''
            };
            _gtm2.default.sendEvent({ data: data });
        } else if (this.props.type == 'test' || this.props.type == 'package') {

            if (this.props.type == 'package') {
                let data = {
                    'Category': 'ConsumerApp', 'Action': 'PackageSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'package-selected', 'selected': row.name || '', 'selectedId': row.id || '', 'searched': '', 'searchString': ''
                };
                _gtm2.default.sendEvent({ data: data });
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
                let data = {
                    'Category': 'ConsumerApp', 'Action': 'CommonProcedureCategoriesSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'common-procedure-category-selected', 'selected': row.name || '', 'selectedId': row.id || ''
                };
                _gtm2.default.sendEvent({ data: data });
            } else if (this.props.type == 'procedures') {
                let data = {
                    'Category': 'ConsumerApp', 'Action': 'CommonProceduresSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'common-procedures-selected', 'selected': row.name || '', 'selectedId': row.id || '', 'searched': '', 'searchString': ''
                };
                _gtm2.default.sendEvent({ data: data });
            } else if (this.props.type == 'ipd') {
                let data = {
                    'Category': 'ConsumerApp', 'Action': 'CommonIPDSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'common-ipd-selected', 'selected': row.name || '', 'selectedId': row.id || '', 'searched': '', 'searchString': ''
                };
                _gtm2.default.sendEvent({ data: data });
            }
        this.props.toggle(this.props.type || row.type, row);
    }
    testInfo(test_id, url, e) {
        let lat = 28.644800;
        let long = 77.216721;
        if (this.props.dataState && this.props.dataState.selectedLocation) {
            lat = this.props.dataState.selectedLocation.geometry.location.lat;
            long = this.props.dataState.selectedLocation.geometry.location.lng;

            if (typeof lat === 'function') lat = lat();
            if (typeof long === 'function') long = long();
        }
        let selected_test_ids = [];
        this.props.data.map((row, i) => {
            selected_test_ids.push(row.id);
        });
        e.stopPropagation();
        if (url && url != '') {
            this.props.history.push('/' + url + '?test_ids=' + test_id + '&selected_test_ids=' + selected_test_ids + '&lat=' + lat + '&long=' + long + '&from=search');
        } else {
            this.props.history.push('/search/testinfo?test_ids=' + test_id + '&selected_test_ids=' + selected_test_ids + '&lat=' + lat + '&long=' + long + '&from=search');
        }

        let data = {
            'Category': 'ConsumerApp', 'Action': 'testInfoClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'test-info-click', 'pageSource': 'common-search-result-page'
        };
        _gtm2.default.sendEvent({ data: data });
    }

    render() {

        let test_info = '';
        let rows = this.props.data.map((row, i) => {
            if (this.props.selectedPills) {
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
                            { style: { marginLeft: '5px', marginTop: '1px', display: 'inline-block' }, onClick: this.testInfo.bind(this, row.id, row.url) },
                            _react2.default.createElement('img', { src: "/assets" + '/img/icons/Info.svg' })
                        ) : ''
                    ),
                    _react2.default.createElement('img', { style: { width: '15px' }, onClick: () => this.props.toggle(this.props.type || row.type, row), src: "/assets" + "/img/sl-close.svg" })
                );
            } else {
                let selected = false;
                this.props.selected.map(curr => {
                    if (curr.id == row.id) {
                        selected = true;
                    }
                });
                return _react2.default.createElement(
                    'li',
                    { key: i, onClick: this.toggle.bind(this, row) },
                    _react2.default.createElement(
                        'p',
                        { className: selected ? "click-active" : "" },
                        row.name,
                        ' ',
                        row.show_details ? _react2.default.createElement(
                            'span',
                            { style: { marginLeft: '5px', marginTop: '1px', display: 'inline-block' }, onClick: this.testInfo.bind(this, row.id, row.url) },
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
                        { style: { float: 'right', color: `var(--text--primary--color)`, cursor: 'pointer' }, onClick: () => this.props.history.push('/searchpackages') },
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
}

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9jb21tb25seVNlYXJjaGVkL0NvbW1vbmx5U2VhcmNoZWQuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9jb21tb25seVNlYXJjaGVkL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxvYWRlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsImNsYXNzVHlwZSIsImlGcmFtZVBvcHVwIiwiQ29tbW9ubHlTZWFyY2hlZCIsInN0YXRlIiwiY3VycmVudFRlc3RUeXBlIiwidG9nZ2xlIiwicm93IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwidHlwZSIsImRhdGEiLCJHVE0iLCJnZXRVc2VySWQiLCJuYW1lIiwiaWQiLCJzZW5kRXZlbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJ0ZXN0SW5mbyIsInRlc3RfaWQiLCJ1cmwiLCJlIiwibGF0IiwibG9uZyIsImRhdGFTdGF0ZSIsInNlbGVjdGVkTG9jYXRpb24iLCJnZW9tZXRyeSIsImxvY2F0aW9uIiwibG5nIiwic2VsZWN0ZWRfdGVzdF9pZHMiLCJtYXAiLCJpIiwicHVzaCIsInN0b3BQcm9wYWdhdGlvbiIsImhpc3RvcnkiLCJ0ZXN0X2luZm8iLCJyb3dzIiwic2VsZWN0ZWRQaWxscyIsInNob3dfZGV0YWlscyIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwiYmluZCIsIkFTU0VUU19CQVNFX1VSTCIsIndpZHRoIiwic2VsZWN0ZWQiLCJjdXJyIiwiaGVhZGluZyIsImlzUGFja2FnZSIsImZsb2F0IiwiY29sb3Ii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UmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBMb2FkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NUeXBlIHx8IFwibG9hZGVyQ2lyY3VsYXJcIn0gPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHAtbG9hZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlGcmFtZVBvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMTBcIj5SZWRpcmVjdGluZyB5b3UgdG8gUGhhcm1lYXN5IHdlYnNpdGUuLi48L3A+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIiwiaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuY2xhc3MgQ29tbW9ubHlTZWFyY2hlZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjdXJyZW50VGVzdFR5cGU6IHt9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGUocm93KSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoX3Jlc3VsdHNfdmlldycpICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hfYmFyJykpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hfcmVzdWx0c192aWV3Jykuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT0gJ2NvbmRpdGlvbicpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQ29tbW9uQ29uZGl0aW9uU2VsZWN0ZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjb21tb24tY29uZGl0aW9uLXNlbGVjdGVkJywgJ3NlbGVjdGVkJzogcm93Lm5hbWUgfHwgJycsICdzZWxlY3RlZElkJzogcm93LmlkIHx8ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy50eXBlID09ICdzcGVjaWFsaXR5Jykge1xuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0NvbW1vblNwZWNpYWxpemF0aW9uc1NlbGVjdGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY29tbW9uLXNwZWNpYWxpemF0aW9ucy1zZWxlY3RlZCcsICdzZWxlY3RlZCc6IHJvdy5uYW1lIHx8ICcnLCAnc2VsZWN0ZWRJZCc6IHJvdy5pZCB8fCAnJywgJ3NlYXJjaGVkJzogJycsICdzZWFyY2hTdHJpbmcnOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMudHlwZSA9PSAndGVzdCcgfHwgdGhpcy5wcm9wcy50eXBlID09ICdwYWNrYWdlJykge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy50eXBlID09ICdwYWNrYWdlJykge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1BhY2thZ2VTZWxlY3RlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3BhY2thZ2Utc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnOiByb3cubmFtZSB8fCAnJywgJ3NlbGVjdGVkSWQnOiByb3cuaWQgfHwgJycsICdzZWFyY2hlZCc6ICcnLCAnc2VhcmNoU3RyaW5nJzogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLypsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1Rlc3RTZWxlY3RlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3Rlc3Qtc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnOiByb3cubmFtZSB8fCAnJywgJ3NlbGVjdGVkSWQnOiByb3cuaWQgfHwgJycsICdzZWFyY2hlZCc6ICcnLCAnc2VhcmNoU3RyaW5nJzogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pKi9cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcm93ID0gT2JqZWN0LmFzc2lnbih7fSwgcm93KVxuICAgICAgICAgICAgcm93LnR5cGUgPSAndGVzdCdcbiAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlKCh0aGlzLnByb3BzLnR5cGUgfHwgcm93LnR5cGUpLCByb3cpXG4gICAgICAgICAgICByZXR1cm5cblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZWxzZSBpZiAodGhpcy5wcm9wcy50eXBlID09ICdwYWNrYWdlJykge1xuXG4gICAgICAgIC8vICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgLy8gICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1BhY2thZ2VTZWxlY3RlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3BhY2thZ2Utc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnOiByb3cubmFtZSB8fCAnJywgJ3NlbGVjdGVkSWQnOiByb3cuaWQgfHwgJycsICdzZWFyY2hlZCc6ICcnLCAnc2VhcmNoU3RyaW5nJzogJydcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgLy8gICAgIHJvdyA9IE9iamVjdC5hc3NpZ24oe30sIHJvdylcbiAgICAgICAgLy8gICAgIHJvdy50eXBlID0gJ3BhY2thZ2UnXG4gICAgICAgIC8vICAgICB0aGlzLnByb3BzLnRvZ2dsZSgodGhpcy5wcm9wcy50eXBlIHx8IHJvdy50eXBlKSwgcm93KVxuICAgICAgICAvLyAgICAgcmV0dXJuXG4gICAgICAgIC8vIH1cblxuICAgICAgICBlbHNlIGlmICh0aGlzLnByb3BzLnR5cGUgPT0gJ3Byb2NlZHVyZXNfY2F0ZWdvcnknKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0NvbW1vblByb2NlZHVyZUNhdGVnb3JpZXNTZWxlY3RlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NvbW1vbi1wcm9jZWR1cmUtY2F0ZWdvcnktc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnOiByb3cubmFtZSB8fCAnJywgJ3NlbGVjdGVkSWQnOiByb3cuaWQgfHwgJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnR5cGUgPT0gJ3Byb2NlZHVyZXMnKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0NvbW1vblByb2NlZHVyZXNTZWxlY3RlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NvbW1vbi1wcm9jZWR1cmVzLXNlbGVjdGVkJywgJ3NlbGVjdGVkJzogcm93Lm5hbWUgfHwgJycsICdzZWxlY3RlZElkJzogcm93LmlkIHx8ICcnLCAnc2VhcmNoZWQnOiAnJywgJ3NlYXJjaFN0cmluZyc6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgIH1lbHNlIGlmICh0aGlzLnByb3BzLnR5cGUgPT0gJ2lwZCcpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQ29tbW9uSVBEU2VsZWN0ZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjb21tb24taXBkLXNlbGVjdGVkJywgJ3NlbGVjdGVkJzogcm93Lm5hbWUgfHwgJycsICdzZWxlY3RlZElkJzogcm93LmlkIHx8ICcnLCAnc2VhcmNoZWQnOiAnJywgJ3NlYXJjaFN0cmluZyc6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KSAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMudG9nZ2xlKCh0aGlzLnByb3BzLnR5cGUgfHwgcm93LnR5cGUpLCByb3cpXG4gICAgfVxuICAgIHRlc3RJbmZvKHRlc3RfaWQsIHVybCwgZSkge1xuICAgICAgICBsZXQgbGF0ID0gMjguNjQ0ODAwXG4gICAgICAgIGxldCBsb25nID0gNzcuMjE2NzIxXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRhdGFTdGF0ZSAmJiB0aGlzLnByb3BzLmRhdGFTdGF0ZS5zZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICBsYXQgPSB0aGlzLnByb3BzLmRhdGFTdGF0ZS5zZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxhdFxuICAgICAgICAgICAgbG9uZyA9IHRoaXMucHJvcHMuZGF0YVN0YXRlLnNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubG5nXG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGF0ID09PSAnZnVuY3Rpb24nKSBsYXQgPSBsYXQoKVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsb25nID09PSAnZnVuY3Rpb24nKSBsb25nID0gbG9uZygpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNlbGVjdGVkX3Rlc3RfaWRzID0gW11cbiAgICAgICAgdGhpcy5wcm9wcy5kYXRhLm1hcCgocm93LCBpKSA9PiB7XG4gICAgICAgICAgICBzZWxlY3RlZF90ZXN0X2lkcy5wdXNoKHJvdy5pZClcbiAgICAgICAgfSlcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBpZiAodXJsICYmIHVybCAhPSAnJykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nICsgdXJsICsgJz90ZXN0X2lkcz0nICsgdGVzdF9pZCArICcmc2VsZWN0ZWRfdGVzdF9pZHM9JyArIHNlbGVjdGVkX3Rlc3RfaWRzICsgJyZsYXQ9JyArIGxhdCArICcmbG9uZz0nICsgbG9uZyArICcmZnJvbT1zZWFyY2gnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9zZWFyY2gvdGVzdGluZm8/dGVzdF9pZHM9JyArIHRlc3RfaWQgKyAnJnNlbGVjdGVkX3Rlc3RfaWRzPScgKyBzZWxlY3RlZF90ZXN0X2lkcyArICcmbGF0PScgKyBsYXQgKyAnJmxvbmc9JyArIGxvbmcgKyAnJmZyb209c2VhcmNoJylcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICd0ZXN0SW5mb0NsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAndGVzdC1pbmZvLWNsaWNrJywgJ3BhZ2VTb3VyY2UnOiAnY29tbW9uLXNlYXJjaC1yZXN1bHQtcGFnZSdcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgdGVzdF9pbmZvID0gJydcbiAgICAgICAgbGV0IHJvd3MgPSB0aGlzLnByb3BzLmRhdGEubWFwKChyb3csIGkpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkUGlsbHMpIHtcbiAgICAgICAgICAgICAgICB7LyppZiAodGhpcy5wcm9wcy5zZWxlY3RlZFNlYXJjaFR5cGUgPT0gJ2xhYicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHJvdykubGVuZ3RoID4gMCAmJiByb3cuc2hvd19kZXRhaWxzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXN0X2luZm8gPSA8c3BhbiBjbGFzc05hbWU9XCJzcmNoLWhlYWRpbmdcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JywgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAnI2U1ODk1MCcgfX0gb25DbGljaz17dGhpcy50ZXN0SW5mby5iaW5kKHRoaXMpfT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9Ki99XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICA8cD57cm93Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICB7cm93LnNob3dfZGV0YWlscyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzVweCcsIG1hcmdpblRvcDogJzFweCcsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19IG9uQ2xpY2s9e3RoaXMudGVzdEluZm8uYmluZCh0aGlzLCByb3cuaWQsIHJvdy51cmwpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2ljb25zL0luZm8uc3ZnJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcxNXB4JyB9fSBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnRvZ2dsZSgodGhpcy5wcm9wcy50eXBlIHx8IHJvdy50eXBlKSwgcm93KX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc2wtY2xvc2Uuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkLm1hcCgoY3VycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3Vyci5pZCA9PSByb3cuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aX0gb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCByb3cpfT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzZWxlY3RlZCA/IFwiY2xpY2stYWN0aXZlXCIgOiBcIlwifT57cm93Lm5hbWV9IHtyb3cuc2hvd19kZXRhaWxzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnNXB4JywgbWFyZ2luVG9wOiAnMXB4JywgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0gb25DbGljaz17dGhpcy50ZXN0SW5mby5iaW5kKHRoaXMsIHJvdy5pZCwgcm93LnVybCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvaWNvbnMvSW5mby5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9IDwvcD5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPyBcIlwiIDogPGltZyBzdHlsZT17eyB3aWR0aDogJzE1cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3NoYXBlLXNyY2guc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbWItMTBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1vbi1zZWFyY2gtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNyY2gtaGVhZGluZ1wiPnt0aGlzLnByb3BzLmhlYWRpbmd9IFxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaXNQYWNrYWdlP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmbG9hdDoncmlnaHQnLGNvbG9yOmB2YXIoLS10ZXh0LS1wcmltYXJ5LS1jb2xvcilgLGN1cnNvcjoncG9pbnRlcid9fSBvbkNsaWNrPXsoKT0+IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvc2VhcmNocGFja2FnZXMnKX0+VmlldyBhbGw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbW9uLWxpc3RpbmctY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3dzfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQ29tbW9ubHlTZWFyY2hlZFxuIiwiaW1wb3J0IENvbW1vbmx5U2VhcmNoZWQgZnJvbSAnLi9Db21tb25seVNlYXJjaGVkLmpzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IENvbW1vbmx5U2VhcmNoZWQiXSwic291cmNlUm9vdCI6IiJ9