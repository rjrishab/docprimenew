(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./dev/js/components/commons/Home/FixedMobileFooter.js":
/*!*************************************************************!*\
  !*** ./dev/js/components/commons/Home/FixedMobileFooter.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../../actions/index.js */ "./dev/js/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FixedMobileFooter = function (_React$Component) {
    _inherits(FixedMobileFooter, _React$Component);

    function FixedMobileFooter(props) {
        _classCallCheck(this, FixedMobileFooter);

        var _this = _possibleConstructorReturn(this, (FixedMobileFooter.__proto__ || Object.getPrototypeOf(FixedMobileFooter)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(FixedMobileFooter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (this.props.app_download_list && !this.props.app_download_list.length) {

                this.props.getDownloadAppBannerList(function (resp) {
                    if (resp && resp.length && resp[0].data) {
                        _this2.showDownloadAppWidget(resp[0].data);
                    }
                });
            } else {
                this.showDownloadAppWidget(this.props.app_download_list);
            }
        }
    }, {
        key: 'showDownloadAppWidget',
        value: function showDownloadAppWidget(dataList) {
            var _this3 = this;

            var landing_page = false;
            if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window.ON_LANDING_PAGE) {
                landing_page = true;
            }

            var downloadAppButtonData = {};

            if (landing_page && dataList && dataList.length) {

                dataList.map(function (banner) {
                    if (banner.isenabled && (_this3.props.match.url.includes(banner.ends_with) || _this3.props.match.url.includes(banner.starts_with))) {
                        downloadAppButtonData = banner;
                    }
                });
            }

            if (Object.values(downloadAppButtonData).length) {

                var gtmTrack = {
                    'Category': 'ConsumerApp', 'Action': 'DownloadAppButtonVisible', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'download-app-button-visible', 'starts_with': downloadAppButtonData.starts_with ? downloadAppButtonData.starts_with : '', 'ends_with': downloadAppButtonData.ends_with ? downloadAppButtonData.ends_with : '', 'device': this.props.device_info
                };
                _gtm2.default.sendEvent({ data: gtmTrack });
            }
        }
    }, {
        key: 'navigateTo',
        value: function navigateTo(where, type, e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            if (type) {
                this.props.selectSearchType(type);
            }
            this.props.history.push(where);
        }
    }, {
        key: 'downloadButton',
        value: function downloadButton(data) {
            var gtmTrack = {
                'Category': 'ConsumerApp', 'Action': 'DownloadAppButtonClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'download-app-button-clicked', 'starts_with': data.starts_with ? data.starts_with : '', 'ends_with': data.ends_with ? data.ends_with : '', 'device': this.props.device_info
            };
            _gtm2.default.sendEvent({ data: gtmTrack });
            if (window) {
                window.open(data.URL, '_self');
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            // check if this was the landing page
            var landing_page = false;
            if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window.ON_LANDING_PAGE) {
                landing_page = true;
            }

            var downloadAppButtonData = {};

            if (landing_page && this.props.app_download_list && this.props.app_download_list.length) {

                this.props.app_download_list.map(function (banner) {
                    if (banner.isenabled && (_this4.props.match.url.includes(banner.ends_with) || _this4.props.match.url.includes(banner.starts_with))) {
                        downloadAppButtonData = banner;
                    }
                });
            }
            var hide_footer = this.props.ipd_chat && this.props.ipd_chat.showIpdChat ? this.props.ipd_chat.showIpdChat : false;
            return _react2.default.createElement(
                'div',
                { className: 'mobileViewStaticChat d-none d-md-none ' + (hide_footer ? 'd-none' : this.props.hideFooter ? 'smth-ftr-scrl' : '') },
                _react2.default.createElement(
                    'div',
                    { className: 'nw-chat-card' },
                    _react2.default.createElement(
                        'div',
                        { className: 'chat-div-containers', style: this.props.selectedSearchType === 'opd' || this.props.selectedSearchType === 'procedures' ? { borderTop: '2px solid #1f62d3' } : {}, onClick: function onClick() {
                                var data = {
                                    'Category': 'ConsumerApp', 'Action': 'MobileFooterBookDoctorsClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'mobile-footer-book-doctors-clicked'
                                };
                                _gtm2.default.sendEvent({ data: data });
                                _this4.navigateTo('/search?from=home', 'opd');
                            } },
                        _react2.default.createElement(
                            'div',
                            { className: 'nw-img-with-content' },
                            _react2.default.createElement('img', { width: '22px', src: "/assets" + "/img/general2.svg" })
                        ),
                        _react2.default.createElement(
                            'span',
                            null,
                            'Book Doctors'
                        )
                    ),
                    downloadAppButtonData && Object.values(downloadAppButtonData).length ? _react2.default.createElement(
                        'a',
                        { className: 'downloadBtn', href: 'javascript:void(0);', onClick: this.downloadButton.bind(this, downloadAppButtonData) },
                        _react2.default.createElement(
                            'button',
                            { className: 'dwnlAppBtn' },
                            !this.props.device_info ? '' : this.props.device_info.toLowerCase().includes('iphone') || this.props.device_info.toLowerCase().includes('ipad') ? _react2.default.createElement('img', { style: { width: '13px', marginRight: '5px', marginTop: '-1px' }, src: "/assets" + "/img/appl1.svg" }) : _react2.default.createElement('img', { style: { width: '13px', marginRight: '5px' }, src: "/assets" + "/img/andr1.svg" }),
                            'Download App'
                        )
                    ) : '',
                    _react2.default.createElement(
                        'div',
                        { className: 'chat-div-containers', style: this.props.selectedSearchType === 'lab' ? { borderTop: '2px solid #1f62d3' } : {}, onClick: function onClick() {
                                var data = {
                                    'Category': 'ConsumerApp', 'Action': 'MobileFooterBookDoctorsClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'mobile-footer-book-doctors-clicked'
                                };
                                _gtm2.default.sendEvent({ data: data });
                                _this4.navigateTo('/search?from=home', 'lab');
                            } },
                        _react2.default.createElement(
                            'div',
                            { className: 'nw-img-with-content' },
                            _react2.default.createElement('img', { width: '22px', src: "/assets" + "/img/flask.svg" })
                        ),
                        _react2.default.createElement(
                            'span',
                            null,
                            'Book Lab Tests'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'chat-div-containers', style: { width: "36%", paddingTop: 0 }, onClick: function onClick() {
                                var data = {
                                    'Category': 'ConsumerApp', 'Action': 'MobileFooterGoldClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'mobile-footer-gold-clicked'
                                };
                                _gtm2.default.sendEvent({ data: data });
                                _this4.navigateTo('/vip-gold-details?is_gold=true&source=mobile-footer-gold-clicked&lead_source=Docprime');
                            } },
                        _react2.default.createElement(
                            'object',
                            { className: 'footsvground' },
                            _react2.default.createElement(
                                'svg',
                                { width: '122pt', height: '50pt', viewBox: '0 0 148 71', version: '1.1' },
                                _react2.default.createElement(
                                    'defs',
                                    null,
                                    _react2.default.createElement('image', { id: 'image12', width: '148', height: '71', href: 'data:image/png;base64,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' }),
                                    _react2.default.createElement(
                                        'linearGradient',
                                        { id: 'linear0', gradientUnits: 'userSpaceOnUse', x1: '0', y1: '0.70711', x2: '0.70711', y2: '0', gradientTransform: 'matrix(142.640625,0,0,66.261719,2.078125,0.640625)' },
                                        _react2.default.createElement('stop', { offset: '0', className: 'foot-strt' }),
                                        _react2.default.createElement('stop', { offset: '1', className: 'foot-end' })
                                    )
                                ),
                                _react2.default.createElement(
                                    'g',
                                    { id: 'surface1' },
                                    _react2.default.createElement('path', { className: 'fot', d: 'M 47.867188 0.640625 L 98.878906 0.640625 C 109.621094 0.640625 113.792969 6.117188 113.792969 16.882812 L 121.574219 53.257812 C 121.574219 58.0625 128.242188 63.078125 134.734375 63.363281 C 142.925781 63.71875 149.390625 66.640625 141.027344 66.253906 L 4.421875 66.902344 C -2.101562 66.902344 6.214844 64.160156 14.636719 62.597656 C 19.761719 61.644531 24.523438 57.488281 24.523438 53.257812 L 31.65625 16.234375 C 31.65625 5.46875 37.125 0.640625 47.867188 0.640625 Z M 47.867188 0.640625 ' })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'nw-mid-container-with-img' },
                            _react2.default.createElement(
                                'div',
                                { className: 'vip-foot-cont' },
                                _react2.default.createElement('img', { style: { width: 50 }, src: "/assets" + "/img/gold-lg.png" })
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'vip-foot-txt' },
                                'Exclusive ',
                                _react2.default.createElement('br', null),
                                'Discounts'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'chat-div-containers', style: this.props.searchPackagePage ? { borderTop: '2px solid #1f62d3' } : {}, onClick: function onClick() {
                                var data = {
                                    'Category': 'ConsumerApp', 'Action': 'MobileFooterBookPackageClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'mobile-footer-book-package-clicked'
                                };
                                _gtm2.default.sendEvent({ data: data });
                                _this4.navigateTo('/searchpackages');
                            } },
                        _react2.default.createElement(
                            'div',
                            { className: 'nw-img-with-content' },
                            _react2.default.createElement('img', { style: { width: '24px' }, src: "/assets" + "/img/lab2.svg" })
                        ),
                        _react2.default.createElement(
                            'span',
                            null,
                            'Health Packages'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'chat-div-containers', style: this.props.offersPage ? { borderTop: '2px solid #1f62d3' } : {}, onClick: function onClick() {
                                var data = {
                                    'Category': 'ConsumerApp', 'Action': 'MobileFooterOffersClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'mobile-footer-offers-clicked'
                                };
                                _gtm2.default.sendEvent({ data: data });
                                _this4.navigateTo('/offers');
                            } },
                        _react2.default.createElement(
                            'div',
                            { className: 'nw-img-with-content' },
                            _react2.default.createElement('img', { style: { width: 22 }, src: "/assets" + "/img/offers.svg" })
                        ),
                        _react2.default.createElement(
                            'span',
                            null,
                            'View Offers'
                        )
                    )
                ),
                _react2.default.createElement('div', { className: 'nw-cht-border-btn' })
            );
        }
    }]);

    return FixedMobileFooter;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    var _state$USER = state.USER,
        app_download_list = _state$USER.app_download_list,
        device_info = _state$USER.device_info,
        ipd_chat = _state$USER.ipd_chat;

    return {
        app_download_list: app_download_list,
        device_info: device_info,
        ipd_chat: ipd_chat
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {

    return {
        getDownloadAppBannerList: function getDownloadAppBannerList(cb) {
            return dispatch((0, _index.getDownloadAppBannerList)(cb));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FixedMobileFooter);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvRml4ZWRNb2JpbGVGb290ZXIuanMiXSwibmFtZXMiOlsiRml4ZWRNb2JpbGVGb290ZXIiLCJwcm9wcyIsInN0YXRlIiwiYXBwX2Rvd25sb2FkX2xpc3QiLCJsZW5ndGgiLCJnZXREb3dubG9hZEFwcEJhbm5lckxpc3QiLCJyZXNwIiwiZGF0YSIsInNob3dEb3dubG9hZEFwcFdpZGdldCIsImRhdGFMaXN0IiwibGFuZGluZ19wYWdlIiwid2luZG93IiwiT05fTEFORElOR19QQUdFIiwiZG93bmxvYWRBcHBCdXR0b25EYXRhIiwibWFwIiwiYmFubmVyIiwiaXNlbmFibGVkIiwibWF0Y2giLCJ1cmwiLCJpbmNsdWRlcyIsImVuZHNfd2l0aCIsInN0YXJ0c193aXRoIiwiT2JqZWN0IiwidmFsdWVzIiwiZ3RtVHJhY2siLCJHVE0iLCJnZXRVc2VySWQiLCJkZXZpY2VfaW5mbyIsInNlbmRFdmVudCIsIndoZXJlIiwidHlwZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInNlbGVjdFNlYXJjaFR5cGUiLCJoaXN0b3J5IiwicHVzaCIsIm9wZW4iLCJVUkwiLCJoaWRlX2Zvb3RlciIsImlwZF9jaGF0Iiwic2hvd0lwZENoYXQiLCJoaWRlRm9vdGVyIiwic2VsZWN0ZWRTZWFyY2hUeXBlIiwiYm9yZGVyVG9wIiwibmF2aWdhdGVUbyIsIkFTU0VUU19CQVNFX1VSTCIsImRvd25sb2FkQnV0dG9uIiwiYmluZCIsInRvTG93ZXJDYXNlIiwid2lkdGgiLCJtYXJnaW5SaWdodCIsIm1hcmdpblRvcCIsInBhZGRpbmdUb3AiLCJzZWFyY2hQYWNrYWdlUGFnZSIsIm9mZmVyc1BhZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsIlVTRVIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7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RUFENUYsRUFDZ0csVUFBVSxDQUQxRyxFQUM2RyxTQUFTO0FBRHRILGlDQUFYO0FBR0FELDhDQUFJRyxTQUFKLENBQWMsRUFBRXJCLE1BQU1BLElBQVIsRUFBZDtBQUNBLHVDQUFLc0MsVUFBTCxDQUFnQixTQUFoQjtBQUNILDZCQU5BO0FBT0c7QUFBQTtBQUFBLDhCQUFLLFdBQVUscUJBQWY7QUFDSSxtRUFBSyxPQUFPLEVBQUVLLE9BQU8sRUFBVCxFQUFaLEVBQTJCLEtBQUtKLFNBQWVBLEdBQUcsaUJBQWxEO0FBREoseUJBUEg7QUFVRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkg7QUFwSkwsaUJBREo7QUFrS0ksdURBQUssV0FBVSxtQkFBZjtBQWxLSixhQURKO0FBc0tIOzs7O0VBOVAyQlUsZ0JBQU1DLFM7O0FBaVF0QyxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUN4RCxLQUFELEVBQVc7QUFBQSxzQkFLM0JBLE1BQU15RCxJQUxxQjtBQUFBLFFBRTNCeEQsaUJBRjJCLGVBRTNCQSxpQkFGMkI7QUFBQSxRQUczQndCLFdBSDJCLGVBRzNCQSxXQUgyQjtBQUFBLFFBSTNCYSxRQUoyQixlQUkzQkEsUUFKMkI7O0FBTS9CLFdBQU87QUFDSHJDLDRDQURHO0FBRUh3QixnQ0FGRztBQUdIYTtBQUhHLEtBQVA7QUFLSCxDQVhEOztBQWFBLElBQU1vQixxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7O0FBRXJDLFdBQU87QUFDSHhELGtDQUEwQixrQ0FBQ3lELEVBQUQ7QUFBQSxtQkFBUUQsU0FBUyxxQ0FBeUJDLEVBQXpCLENBQVQsQ0FBUjtBQUFBO0FBRHZCLEtBQVA7QUFHSCxDQUxEOztrQkFPZSx5QkFBUUosZUFBUixFQUF5QkUsa0JBQXpCLEVBQTZDNUQsaUJBQTdDLEMiLCJmaWxlIjoiOC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGdldERvd25sb2FkQXBwQmFubmVyTGlzdCB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5cblxuY2xhc3MgRml4ZWRNb2JpbGVGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFwcF9kb3dubG9hZF9saXN0ICYmICF0aGlzLnByb3BzLmFwcF9kb3dubG9hZF9saXN0Lmxlbmd0aCkge1xuXG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldERvd25sb2FkQXBwQmFubmVyTGlzdCgocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwICYmIHJlc3AubGVuZ3RoICYmIHJlc3BbMF0uZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dEb3dubG9hZEFwcFdpZGdldChyZXNwWzBdLmRhdGEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0Rvd25sb2FkQXBwV2lkZ2V0KHRoaXMucHJvcHMuYXBwX2Rvd25sb2FkX2xpc3QpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNob3dEb3dubG9hZEFwcFdpZGdldChkYXRhTGlzdCkge1xuICAgICAgICBsZXQgbGFuZGluZ19wYWdlID0gZmFsc2VcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93Lk9OX0xBTkRJTkdfUEFHRSkge1xuICAgICAgICAgICAgbGFuZGluZ19wYWdlID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRvd25sb2FkQXBwQnV0dG9uRGF0YSA9IHt9XG5cbiAgICAgICAgaWYgKGxhbmRpbmdfcGFnZSAmJiBkYXRhTGlzdCAmJiBkYXRhTGlzdC5sZW5ndGgpIHtcblxuICAgICAgICAgICAgZGF0YUxpc3QubWFwKChiYW5uZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYmFubmVyLmlzZW5hYmxlZCAmJiAodGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoYmFubmVyLmVuZHNfd2l0aCkgfHwgdGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoYmFubmVyLnN0YXJ0c193aXRoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRBcHBCdXR0b25EYXRhID0gYmFubmVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMoZG93bmxvYWRBcHBCdXR0b25EYXRhKS5sZW5ndGgpIHtcblxuICAgICAgICAgICAgbGV0IGd0bVRyYWNrID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnRG93bmxvYWRBcHBCdXR0b25WaXNpYmxlJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnZG93bmxvYWQtYXBwLWJ1dHRvbi12aXNpYmxlJywgJ3N0YXJ0c193aXRoJzogZG93bmxvYWRBcHBCdXR0b25EYXRhLnN0YXJ0c193aXRoID8gZG93bmxvYWRBcHBCdXR0b25EYXRhLnN0YXJ0c193aXRoIDogJycsICdlbmRzX3dpdGgnOiBkb3dubG9hZEFwcEJ1dHRvbkRhdGEuZW5kc193aXRoID8gZG93bmxvYWRBcHBCdXR0b25EYXRhLmVuZHNfd2l0aCA6ICcnLCAnZGV2aWNlJzogdGhpcy5wcm9wcy5kZXZpY2VfaW5mb1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bVRyYWNrIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvKHdoZXJlLCB0eXBlLCBlKSB7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RTZWFyY2hUeXBlKHR5cGUpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2god2hlcmUpXG4gICAgfVxuXG4gICAgZG93bmxvYWRCdXR0b24oZGF0YSkge1xuICAgICAgICBsZXQgZ3RtVHJhY2sgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0Rvd25sb2FkQXBwQnV0dG9uQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2Rvd25sb2FkLWFwcC1idXR0b24tY2xpY2tlZCcsICdzdGFydHNfd2l0aCc6IGRhdGEuc3RhcnRzX3dpdGggPyBkYXRhLnN0YXJ0c193aXRoIDogJycsICdlbmRzX3dpdGgnOiBkYXRhLmVuZHNfd2l0aCA/IGRhdGEuZW5kc193aXRoIDogJycsICdkZXZpY2UnOiB0aGlzLnByb3BzLmRldmljZV9pbmZvXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bVRyYWNrIH0pXG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKGRhdGEuVVJMLCAnX3NlbGYnKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBjaGVjayBpZiB0aGlzIHdhcyB0aGUgbGFuZGluZyBwYWdlXG4gICAgICAgIGxldCBsYW5kaW5nX3BhZ2UgPSBmYWxzZVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cuT05fTEFORElOR19QQUdFKSB7XG4gICAgICAgICAgICBsYW5kaW5nX3BhZ2UgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZG93bmxvYWRBcHBCdXR0b25EYXRhID0ge31cblxuICAgICAgICBpZiAobGFuZGluZ19wYWdlICYmIHRoaXMucHJvcHMuYXBwX2Rvd25sb2FkX2xpc3QgJiYgdGhpcy5wcm9wcy5hcHBfZG93bmxvYWRfbGlzdC5sZW5ndGgpIHtcblxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hcHBfZG93bmxvYWRfbGlzdC5tYXAoKGJhbm5lcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChiYW5uZXIuaXNlbmFibGVkICYmICh0aGlzLnByb3BzLm1hdGNoLnVybC5pbmNsdWRlcyhiYW5uZXIuZW5kc193aXRoKSB8fCB0aGlzLnByb3BzLm1hdGNoLnVybC5pbmNsdWRlcyhiYW5uZXIuc3RhcnRzX3dpdGgpKSkge1xuICAgICAgICAgICAgICAgICAgICBkb3dubG9hZEFwcEJ1dHRvbkRhdGEgPSBiYW5uZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGxldCBoaWRlX2Zvb3RlciA9IHRoaXMucHJvcHMuaXBkX2NoYXQgJiYgdGhpcy5wcm9wcy5pcGRfY2hhdC5zaG93SXBkQ2hhdCA/IHRoaXMucHJvcHMuaXBkX2NoYXQuc2hvd0lwZENoYXQgOiBmYWxzZVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Btb2JpbGVWaWV3U3RhdGljQ2hhdCBkLW5vbmUgZC1tZC1ub25lICR7aGlkZV9mb290ZXIgPyAnZC1ub25lJyA6IHRoaXMucHJvcHMuaGlkZUZvb3RlciA/ICdzbXRoLWZ0ci1zY3JsJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnctY2hhdC1jYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1kaXYtY29udGFpbmVyc1wiIHN0eWxlPXt0aGlzLnByb3BzLnNlbGVjdGVkU2VhcmNoVHlwZSA9PT0gJ29wZCcgfHwgdGhpcy5wcm9wcy5zZWxlY3RlZFNlYXJjaFR5cGUgPT09ICdwcm9jZWR1cmVzJyA/IHsgYm9yZGVyVG9wOiAnMnB4IHNvbGlkICMxZjYyZDMnIH0gOiB7fX0gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdNb2JpbGVGb290ZXJCb29rRG9jdG9yc0NsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdtb2JpbGUtZm9vdGVyLWJvb2stZG9jdG9ycy1jbGlja2VkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbygnL3NlYXJjaD9mcm9tPWhvbWUnLCAnb3BkJylcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm53LWltZy13aXRoLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMjJweFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2dlbmVyYWwyLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Cb29rIERvY3RvcnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvd25sb2FkQXBwQnV0dG9uRGF0YSAmJiBPYmplY3QudmFsdWVzKGRvd25sb2FkQXBwQnV0dG9uRGF0YSkubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkb3dubG9hZEJ0blwiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgb25DbGljaz17dGhpcy5kb3dubG9hZEJ1dHRvbi5iaW5kKHRoaXMsIGRvd25sb2FkQXBwQnV0dG9uRGF0YSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImR3bmxBcHBCdG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5kZXZpY2VfaW5mbyA/ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKHRoaXMucHJvcHMuZGV2aWNlX2luZm8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnaXBob25lJykgfHwgdGhpcy5wcm9wcy5kZXZpY2VfaW5mby50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdpcGFkJykpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcxM3B4JywgbWFyZ2luUmlnaHQ6ICc1cHgnLCBtYXJnaW5Ub3A6ICctMXB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9hcHBsMS5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGltZyBzdHlsZT17eyB3aWR0aDogJzEzcHgnLCBtYXJnaW5SaWdodDogJzVweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvYW5kcjEuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvd25sb2FkIEFwcDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImNoYXQtZGl2LWNvbnRhaW5lcnNcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ01vYmlsZUZvb3RlckNoYXRDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbW9iaWxlLWZvb3Rlci1jaGF0LWNsaWNrZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKCcvbW9iaWxldmlld2NoYXQnKVxuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnctaW1nLXdpdGgtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcyMnB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy92aXAtZG9jLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5PbmxpbmUgQ29uc3VsdGF0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWRpdi1jb250YWluZXJzXCIgc3R5bGU9e3RoaXMucHJvcHMuc2VsZWN0ZWRTZWFyY2hUeXBlID09PSAnbGFiJyA/IHsgYm9yZGVyVG9wOiAnMnB4IHNvbGlkICMxZjYyZDMnIH0gOiB7fX0gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ01vYmlsZUZvb3RlckJvb2tEb2N0b3JzQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ21vYmlsZS1mb290ZXItYm9vay1kb2N0b3JzLWNsaWNrZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKCcvc2VhcmNoP2Zyb209aG9tZScsICdsYWInKVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudy1pbWctd2l0aC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIyMnB4XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvZmxhc2suc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Qm9vayBMYWIgVGVzdHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImNoYXQtZGl2LWNvbnRhaW5lcnNcIiBzdHlsZT17eyB3aWR0aDogXCIzNiVcIiwgcGFkZGluZ1RvcDogMCB9fSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ01vYmlsZUZvb3RlclZpcENsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdtb2JpbGUtZm9vdGVyLXZpcC1jbGlja2VkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbygnL3ZpcC1jbHViLWRldGFpbHM/c291cmNlPW1vYmlsZS1mb290ZXItdmlwLWNsaWNrZWQmbGVhZF9zb3VyY2U9RG9jcHJpbWUnKVxuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZm9vdGJnUm91bmRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jaGF0Rm9vdF9uZXdQX3ZpcC5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnctbWlkLWNvbnRhaW5lci13aXRoLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLWZvb3QtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogNDAgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvdmlwbG9nLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZpcC1mb290LXR4dFwiPlNhdmUgVXB0byA3MCU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWRpdi1jb250YWluZXJzXCIgc3R5bGU9e3sgd2lkdGg6IFwiMzYlXCIsIHBhZGRpbmdUb3A6IDAgfX0gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdNb2JpbGVGb290ZXJHb2xkQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ21vYmlsZS1mb290ZXItZ29sZC1jbGlja2VkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbygnL3ZpcC1nb2xkLWRldGFpbHM/aXNfZ29sZD10cnVlJnNvdXJjZT1tb2JpbGUtZm9vdGVyLWdvbGQtY2xpY2tlZCZsZWFkX3NvdXJjZT1Eb2NwcmltZScpXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgY2xhc3NOYW1lPVwiZm9vdGJnUm91bmRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jaGF0Rm9vdF9uZXdQX3ZpcC5zdmdcIn0gLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8b2JqZWN0IGNsYXNzTmFtZT1cImZvb3Rzdmdyb3VuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxMjJwdFwiIGhlaWdodD1cIjUwcHRcIiB2aWV3Qm94PVwiMCAwIDE0OCA3MVwiIHZlcnNpb249XCIxLjFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1hZ2UgaWQ9XCJpbWFnZTEyXCIgd2lkdGg9XCIxNDhcIiBoZWlnaHQ9XCI3MVwiIGhyZWY9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUpRQUFBQkhDQVlBQUFEaGxtNVZBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFHckVsRVFWUjRuTzJkeTRzY1ZSU0h2M09ydXFxU2FNZzR4SWhLSGhNd1BpYUpKR01ROFFXaW9QZ0FGeTUwWEFtNjhiSDFYOUI5UU1TRjRFYk1Ra1dRaUVzM29xSUx3WVdnUVZSUVJFMU1sT3JZWGNkRlZVMVgxMHlibWN6VXZkWFY5NE5MejZPN3p1MmUzL3p1dWFmdXJSTGFoUlROQUVIUnFsOXZDOE53YnhBRXUxUjFwekZtcDd1dU5zSWd5N0t6V1piOWFZejU0K0xGaXo4RHcxckxpa2N0V3FzUTF4Mm9VQXFwRkZBSWJFK1M1Q0hnYmxVOUppSTNBejJIZmJTS3FwNFZrYzlWOWFOK3YzOEsrQU1ZTUJKV1JzdEUxUlpCMVYxcExvN2psNEJuUldTWDA1NjFoNzlWOVkxK3YvOEtjSlp4eDJxTnFOb2dxS3FZd2ppTzd4T1IxNEJyM1hhcnRad1pEQWJMZzhIZ0szSzNhcFZUdVJiVW1KaVNKRmtHVHBJUGQ1NEpGRVBobzJtYWZzRm9DR3hGVHVWU1VHVUNIZ0M5S0lvZU5NYThqUmZUZXZrSnVETk4wMThaRjVWVEFvZXhTekdGU1pMc0VaSDNnU3NkOW1mYTJBbk1EUWFEMDdURW5TQWZibHhRbmRHRndNdkFia2Q5bVdhV295aGFJUDhjWGFjdmdEdEJ3Y2locmdLZWR0aVBhU1lRa1djWTFldWNpOHExUXdWeEhEOE9iSGZVajZsSFJCNWpKQ2pub25JaHFHbzEzQUFQT09oRGw5Z1hSZEYxdEVCTTROYWhoTnl5bHh6MW9Vc2NZU1NvbVhNb0tCd3FqdVBkK0dSODB4aGpEalBEZ2lyZnRBeUh3M2tIOGJ2SWZsb2dKbkE4eXd1QzRDcUg4VHVEcWw1QjVSOFZoOEp5NmxDcU91Y2dmdWNRa1N1WmNZY1NRRVRrR2tmeHUwWXBLSml4SEdyTWxrWGtzT1g0WGVVZzNxRVFWVjEwRkw5cnpQVjZ2UVZtUEljS1JlUW1CL0U3aVRIbU9DMG9iam9iOHNJd3ZBSFlaamwrWnhHUlk4eXdRNWtnQ0k0NmlOMWxqakZlM0hRaUtwZEp1VS9JdDVaRklNSHhzR2RUVUZVeEdSRTVZakgyTEJESGNieklyRHFVcXQ1c09YYm5VZFZxWXQ1NVFhMjRVNi9YTytDM1IyMDl4cGhxSGdVT1JPWEVvWUlnOE1OZE01UXpQV2Q1bEJPSFVsVXZxR1pZaU9ONG5oa1k4dndwRnp1SXF0YkxCMVp4NGxENGtrRmppTWh4SE03MGJEb1VnRVJSdEFlNDJsTGNtYU9vbUZjM0xGZ1ZsVzJITW9DdmtEZUwwOUtCOVJ6S0dPTVQ4bWFaNi9WNkIraXdRNDF0bS9JenZPWXh4aXpSY1llQzBTa1h2d2FxZVp6TjlHdzZsSkJmNEdHdmhaZ3pUU1V4dHo3YnM1bERtU2lLanRLQ1phb3p3Q0lRNDZCaWJ0V2hmRUp1alNSSmtsdm9vRU5WVDFMNmhOd2lXWlk1S1IvWWNpaURQK1ZpbFdLTmVWVk1Wa1JsYzhqYlRyN2R4Mk9IZXNYY0NqYUdQQUdrV0Uzb3I1OXBqNE5Ka3N6UnNTR3ZXdFQwK1pOZEpNc3k2L1VvYTBPZXo1L3NVOHVqcGw1UVk1c1NWTlVMeWo3bFRNK2FTOWtZOGd6UUU1RWJHNDdsV1UxOWpYbmpXSEdvTUF3UGtlOFo4OWhsdnRmcjdjZmliTStLUS9sZHd1NElncUJlajJvVUt3N2xOM1c2dy9aZXZhWUVOWmFRNDllUU84UDJ5Z05ic3p5L1M5Z2RoNEdJS2MraHFydUVENUt2Zy9LNHdlcktnOFlkeXU4U2RvL05QS3B4aC9JWHhYQ1BpTnlLcFdzZU5DR29la0srMEVBTXo4WTR4S2dXMVdpcHFDbEJsUjNmSmlMM05CRERzekVPMTI0d05EVU9WWFdtTUlxaVpjQmYzTjQ5a1RIbVJmTGxRNDNlVzI4cmJ4RmJDcW04aC9CK1k4eWI1SXZsUGU0NWFvejViRGdjL2tDRHQ1VGRLa0dOaVNsSmt0MGk4aDV3L1JZZDM3TjVqSWpjTHlJZloxbjJlL0V6Wll1ZGFqTkRYam04QlVVTHlaMXBRVlUvQVB3MXlOdkhmQkFFSDhaeGZBZlFLMXAxQ055MHVEYmlVR05ieWhrNTBvcVk0amgreWhqemxvanMyMnpIUEkyeFRVU2VDTU13R0F3R1h6QnlxV3BKWWEydjE4WC9QYmwrMEhwYnVhdDVraVNQQUM4QUp6WVMzT09jYjRCWDB6UjlGeGdBV2RISy9LcWVhK21FeHhYcWdwb2tucFd0VU9TblV3NFpZMDRVSllGN2dUMmJlbHNlMTN3UHZBT2NUdFAwUzBhaXFndHJVaXVmczZhOUdjWWRhRmNVUmJjYlkyNERsbFIxeVYvQnQ3dW82am5nRFBDRGlQd0MvSzZxdndIZkFkLzIrLzBmR1hleXF2aTBLcUFWRVVWUmRJTXg1bUhnUWVCMi9QWW5UNEdJbkZQVlQ0RlBWUFZVdjk4L1EwVlU1U3hOZHV6WU1UOGNEcDhEbmlRdjFYczhsMEtCMTlNMGZaNUNWS1dnVEpJa0o0RzdnRjFBV25uUldubldtZ2RYMWZPWDB5c1JPWGM1cjFQVnYrby9XbWU4OCt0OWJpM2VlV0M0MGRjQkY4Zy84STNHdTBDZUxHOElFZm5uRXE5Yk05RXU0djNMR3JrUjR6bFRKaUtaaVB5ZHB1blh3Rm1LWVZESWg3TjZHU0JndkR5d1ZwSU9rOFYxdVRSU3ZXMG94alQxZFQzSG5TU2krdSt5U2h2V0hqV0VWUmw3eGtnbzFlK3I0cG5vVXV0OVI1dGdGZ1hob3ErVHZxOG00cVd3VmdnclQ5TEtMNVhWSnhBdjVVYlQ5QWRxNm5oZGpsVWZKdXZDV2lrYjFHZDVteG5TYkg1b0xtTzJJZllrYlA1anI2cEYvUWNvTVpjZUdmNzFrZ0FBQUFCSlJVNUVya0pnZ2c9PVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJsaW5lYXIwXCIgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgeDE9XCIwXCIgeTE9XCIwLjcwNzExXCIgeDI9XCIwLjcwNzExXCIgeTI9XCIwXCIgZ3JhZGllbnRUcmFuc2Zvcm09XCJtYXRyaXgoMTQyLjY0MDYyNSwwLDAsNjYuMjYxNzE5LDIuMDc4MTI1LDAuNjQwNjI1KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBjbGFzc05hbWU9XCJmb290LXN0cnRcIiAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgY2xhc3NOYW1lPVwiZm9vdC1lbmRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cInN1cmZhY2UxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJmb3RcIiBkPVwiTSA0Ny44NjcxODggMC42NDA2MjUgTCA5OC44Nzg5MDYgMC42NDA2MjUgQyAxMDkuNjIxMDk0IDAuNjQwNjI1IDExMy43OTI5NjkgNi4xMTcxODggMTEzLjc5Mjk2OSAxNi44ODI4MTIgTCAxMjEuNTc0MjE5IDUzLjI1NzgxMiBDIDEyMS41NzQyMTkgNTguMDYyNSAxMjguMjQyMTg4IDYzLjA3ODEyNSAxMzQuNzM0Mzc1IDYzLjM2MzI4MSBDIDE0Mi45MjU3ODEgNjMuNzE4NzUgMTQ5LjM5MDYyNSA2Ni42NDA2MjUgMTQxLjAyNzM0NCA2Ni4yNTM5MDYgTCA0LjQyMTg3NSA2Ni45MDIzNDQgQyAtMi4xMDE1NjIgNjYuOTAyMzQ0IDYuMjE0ODQ0IDY0LjE2MDE1NiAxNC42MzY3MTkgNjIuNTk3NjU2IEMgMTkuNzYxNzE5IDYxLjY0NDUzMSAyNC41MjM0MzggNTcuNDg4MjgxIDI0LjUyMzQzOCA1My4yNTc4MTIgTCAzMS42NTYyNSAxNi4yMzQzNzUgQyAzMS42NTYyNSA1LjQ2ODc1IDM3LjEyNSAwLjY0MDYyNSA0Ny44NjcxODggMC42NDA2MjUgWiBNIDQ3Ljg2NzE4OCAwLjY0MDYyNSBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vYmplY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm53LW1pZC1jb250YWluZXItd2l0aC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1mb290LWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3R5bGU9e3sgd2lkdGg6IDI4IH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NoYXRidF9uZXcuc3ZnXCJ9IC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzdHlsZT17eyB3aWR0aDogMjggfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2hhdGJ0X25ldy5zdmdcIn0gLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6IDUwIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2dvbGQtbGcucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAxMSB9fT5GcmVlIE9ubGluZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogMTEgfX0+RG9jdG9yIENvbnN1bHQ8L3A+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZpcC1mb290LXR4dFwiPkV4Y2x1c2l2ZSA8YnIgLz5EaXNjb3VudHM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtZGl2LWNvbnRhaW5lcnNcIiBzdHlsZT17dGhpcy5wcm9wcy5zZWFyY2hQYWNrYWdlUGFnZSA/IHsgYm9yZGVyVG9wOiAnMnB4IHNvbGlkICMxZjYyZDMnIH0gOiB7fX0gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdNb2JpbGVGb290ZXJCb29rUGFja2FnZUNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdtb2JpbGUtZm9vdGVyLWJvb2stcGFja2FnZS1jbGlja2VkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbygnL3NlYXJjaHBhY2thZ2VzJylcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm53LWltZy13aXRoLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMjRweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbGFiMi5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+SGVhbHRoIFBhY2thZ2VzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLyp0aGlzLnByb3BzLmNvbW1vbl9zZXR0aW5ncyAmJiB0aGlzLnByb3BzLmNvbW1vbl9zZXR0aW5ncy5pbnN1cmFuY2VfYXZhaWxhYmlsaXR5P1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1kaXYtY29udGFpbmVyc1wiIHN0eWxlPXt0aGlzLnByb3BzLnNlbGVjdGVkU2VhcmNoVHlwZSA9PT0gJ2xhYicgPyB7IGJvcmRlclRvcDogJzJweCBzb2xpZCAjMWY2MmQzJyB9IDoge319IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdNb2JpbGVGb290ZXJCb29rVGVzdENsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdtb2JpbGUtZm9vdGVyLWluc3VyYW5jZS1jbGlja2VkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbygnL2luc3VyYW5jZS9pbnN1cmFuY2UtcGxhbnM/c291cmNlPW1vYmlsZS1mb290ZXItaW5zdXJhbmNlLWNsaWNrZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm53LWltZy13aXRoLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcyMHB4JyB9fSBjbGFzc05hbWU9XCJvcGRVcGljb1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL29wZE5ld0ljby5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk9QRCBJbnN1cmFuY2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA6PGRpdiBjbGFzc05hbWU9XCJjaGF0LWRpdi1jb250YWluZXJzXCIgc3R5bGU9e3RoaXMucHJvcHMuc2VsZWN0ZWRTZWFyY2hUeXBlID09PSAnbGFiJyA/IHsgYm9yZGVyVG9wOiAnMnB4IHNvbGlkICMxZjYyZDMnIH0gOiB7fX0gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ01vYmlsZUZvb3RlckJvb2tEb2N0b3JzQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ21vYmlsZS1mb290ZXItYm9vay1kb2N0b3JzLWNsaWNrZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKCcvc2VhcmNoP2Zyb209aG9tZScsICdsYWInKVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudy1pbWctd2l0aC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIyMnB4XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvZmxhc2suc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Qm9vayBMYWIgVGVzdHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHs8ZGl2IGNsYXNzTmFtZT1cImNoYXQtZGl2LWNvbnRhaW5lcnNcIiBzdHlsZT17dGhpcy5wcm9wcy5vZmZlcnNQYWdlID8geyBib3JkZXJUb3A6ICcycHggc29saWQgIzFmNjJkMycgfSA6IHt9fSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ01vYmlsZUZvb3Rlck9mZmVyc0NsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdtb2JpbGUtZm9vdGVyLW9mZmVycy1jbGlja2VkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbygnL29mZmVycycpXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudy1pbWctd2l0aC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogMjIgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvb2ZmZXJzLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5WaWV3IE9mZmVyczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnctY2h0LWJvcmRlci1idG5cIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2ID5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBhcHBfZG93bmxvYWRfbGlzdCxcbiAgICAgICAgZGV2aWNlX2luZm8sXG4gICAgICAgIGlwZF9jaGF0XG4gICAgfSA9IHN0YXRlLlVTRVJcbiAgICByZXR1cm4ge1xuICAgICAgICBhcHBfZG93bmxvYWRfbGlzdCxcbiAgICAgICAgZGV2aWNlX2luZm8sXG4gICAgICAgIGlwZF9jaGF0XG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldERvd25sb2FkQXBwQmFubmVyTGlzdDogKGNiKSA9PiBkaXNwYXRjaChnZXREb3dubG9hZEFwcEJhbm5lckxpc3QoY2IpKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRml4ZWRNb2JpbGVGb290ZXIpIl0sInNvdXJjZVJvb3QiOiIifQ==