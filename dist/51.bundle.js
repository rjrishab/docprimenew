(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "./dev/js/components/ipd/HospitalCard.js":
/*!***********************************************!*\
  !*** ./dev/js/components/ipd/HospitalCard.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _initialsPicture = __webpack_require__(/*! ../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import HospitalCard from './HospitalCard.js'

var HospitalCard = function (_React$Component) {
   _inherits(HospitalCard, _React$Component);

   function HospitalCard() {
      _classCallCheck(this, HospitalCard);

      return _possibleConstructorReturn(this, (HospitalCard.__proto__ || Object.getPrototypeOf(HospitalCard)).apply(this, arguments));
   }

   _createClass(HospitalCard, [{
      key: 'toggleProviderPopup',
      value: function toggleProviderPopup(data) {
         this.props.toggleProviderFilter(data);
      }
   }, {
      key: 'render',
      value: function render() {
         var _this2 = this;

         var data = this.props.data;

         var distance = data && data.distance ? (Math.round(data.distance) / 1000).toFixed(1) : null;
         return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
               'li',
               { className: 'cstm-docCard mb-3' },
               _react2.default.createElement(
                  'div',
                  { className: 'cstm-docCard-content' },
                  _react2.default.createElement(
                     'div',
                     { className: 'row no-gutters', style: { paddingBottom: 10 } },
                     _react2.default.createElement(
                        'div',
                        { className: 'col-7' },
                        _react2.default.createElement(
                           'a',
                           { href: '' + (data.url ? data.url : '/ipd/hospital/' + data.id), onClick: function onClick(e) {
                                 e.preventDefault();
                                 _this2.props.getHospitalDetailPage(data.id, data.url || null);
                              } },
                           _react2.default.createElement(
                              'h2',
                              { className: 'nw-hsp-crd-heading' },
                              data.name
                           )
                        ),
                        data.certifications && data.certifications.length ? _react2.default.createElement(
                           'div',
                           { className: 'nw-hsp-crd-subheading' },
                           _react2.default.createElement('img', { src: "/assets" + '/img/customer-icons/Award-01.svg' }),
                           ' ',
                           _react2.default.createElement(
                              'p',
                              null,
                              data.certifications.length ? data.certifications.join(' | ') : ''
                           )
                        ) : '',
                        _react2.default.createElement(
                           'div',
                           { className: 'nw-hsp-crd-logohs' },
                           _react2.default.createElement(
                              _initialsPicture2.default,
                              { name: data.name, has_image: !!data.logo, className: 'initialsPicture-ds fltr-initialPicture-ds' },
                              _react2.default.createElement('img', { style: { width: '100px' }, src: data.logo, className: 'img-fluid ', alt: data.name, title: data.name })
                           )
                        )
                     ),
                     _react2.default.createElement(
                        'div',
                        { className: 'col-5' },
                        _react2.default.createElement(
                           'div',
                           { className: 'nw-hsptl-rgt-content' },
                           _react2.default.createElement(
                              'div',
                              { className: 'nw-hsp-crd-beds' },
                              data.multi_speciality ? _react2.default.createElement(
                                 'p',
                                 null,
                                 _react2.default.createElement('img', { src: "/assets" + "/images/multi-speciality.png", alt: '', className: 'img-splty' }),
                                 ' Multi Speciality'
                              ) : '',
                              data.bed_count ? _react2.default.createElement(
                                 'p',
                                 null,
                                 _react2.default.createElement('img', { src: "/assets" + "/images/bed.png", alt: '', className: 'img-bed' }),
                                 data.bed_count + ' beds'
                              ) : ''
                           ),
                           _react2.default.createElement(
                              'div',
                              { className: 'nw-hsp-crd-crd-btn' },
                               false ? undefined : '',
                              data.is_ipd_hospital && false ? _react2.default.createElement(
                                 'a',
                                 { href: 'javascript:void(0);', onClick: function onClick() {
                                       return _this2.props.getCostEstimateClicked(data.id);
                                    } },
                                 _react2.default.createElement(
                                    'button',
                                    { className: 'cstm-book-btn' },
                                    'Get Cost Estimate'
                                 )
                              ) : _react2.default.createElement(
                                 'a',
                                 { href: 'javascript:void(0);', onClick: function onClick(e) {
                                       e.preventDefault();
                                       _this2.props.getHospitalDetailPage(data.id, data.url || null);
                                    } },
                                 _react2.default.createElement(
                                    'button',
                                    { className: 'cstm-book-btn' },
                                    'View details'
                                 )
                              )
                           )
                        )
                     )
                  )
               ),
               data.locality_url ? _react2.default.createElement(
                  'div',
                  { className: 'cstmCardFooter' },
                  _react2.default.createElement(
                     'div',
                     { className: 'cstmfooterContent' },
                     _react2.default.createElement(
                        'a',
                        { href: '' + data.locality_url, onClick: function onClick(e) {
                              e.preventDefault();
                              _this2.props.history.push('/' + data.locality_url);
                           } },
                        _react2.default.createElement(
                           'h3',
                           { className: 'mb-rmv' },
                           _react2.default.createElement('img', { style: { width: '10px', marginLeft: '3px' }, src: "/assets" + '/img/new-loc-ico.svg' }),
                           data.short_address || ''
                        )
                     )
                  ),
                  distance ? _react2.default.createElement(
                     'div',
                     { className: 'cstmDocLoc' },
                     _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement('img', { src: "/assets" + '/img/cstmdist.svg' }),
                        distance + ' Km'
                     )
                  ) : ''
               ) : _react2.default.createElement(
                  'div',
                  { className: 'cstmCardFooter' },
                  _react2.default.createElement(
                     'div',
                     { className: 'cstmfooterContent' },
                     _react2.default.createElement(
                        'h3',
                        { className: 'mb-rmv' },
                        _react2.default.createElement('img', { style: { width: '10px', marginLeft: '3px' }, src: "/assets" + '/img/new-loc-ico.svg' }),
                        data.short_address || ''
                     )
                  ),
                  distance ? _react2.default.createElement(
                     'div',
                     { className: 'cstmDocLoc' },
                     _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement('img', { src: "/assets" + '/img/cstmdist.svg' }),
                        distance + ' Km'
                     )
                  ) : ''
               )
            )
         );
      }
   }]);

   return HospitalCard;
}(_react2.default.Component);

exports.default = HospitalCard;

/***/ }),

/***/ "./dev/js/components/ipd/breadCrumb.js":
/*!*********************************************!*\
  !*** ./dev/js/components/ipd/breadCrumb.js ***!
  \*********************************************/
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

var BreadcrumbView = function (_React$Component) {
    _inherits(BreadcrumbView, _React$Component);

    function BreadcrumbView() {
        _classCallCheck(this, BreadcrumbView);

        return _possibleConstructorReturn(this, (BreadcrumbView.__proto__ || Object.getPrototypeOf(BreadcrumbView)).apply(this, arguments));
    }

    _createClass(BreadcrumbView, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                "section",
                null,
                this.props.breadcrumb && this.props.breadcrumb.length ? _react2.default.createElement(
                    "section",
                    { className: "" },
                    _react2.default.createElement(
                        "ul",
                        { className: "mrb-10 breadcrumb-list breadcrumb-list-ul", style: { 'wordBreak': 'breakWord', marginTop: '0px', marginBottom: '10px' } },
                        this.props.breadcrumb.map(function (data, key) {
                            return _react2.default.createElement(
                                "li",
                                { className: "breadcrumb-list-item", key: key },
                                key == _this2.props.breadcrumb.length - 1 ? _react2.default.createElement(
                                    "span",
                                    null,
                                    data.title
                                ) : _react2.default.createElement(
                                    "a",
                                    { href: data.url, title: data.link_title || data.title, onClick: function onClick(e) {
                                            e.preventDefault();
                                            _this2.props.history.push(key == 0 || key == _this2.props.breadcrumb.length - 1 ? data.url : "/" + data.url);
                                        } },
                                    key == 0 || key == _this2.props.breadcrumb.length - 1 ? _react2.default.createElement(
                                        "span",
                                        { className: "fw-500 breadcrumb-title breadcrumb-colored-title" },
                                        data.title
                                    ) : _react2.default.createElement(
                                        "span",
                                        { className: "fw-500 breadcrumb-title breadcrumb-colored-title d-inline-blck" },
                                        data.title
                                    )
                                ),
                                key != _this2.props.breadcrumb.length - 1 ? _react2.default.createElement(
                                    "span",
                                    { className: "breadcrumb-arrow" },
                                    ">"
                                ) : ''
                            );
                        })
                    )
                ) : ''
            );
        }
    }]);

    return BreadcrumbView;
}(_react2.default.Component);

exports.default = BreadcrumbView;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pcGQvSG9zcGl0YWxDYXJkLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2lwZC9icmVhZENydW1iLmpzIl0sIm5hbWVzIjpbIkhvc3BpdGFsQ2FyZCIsImRhdGEiLCJwcm9wcyIsInRvZ2dsZVByb3ZpZGVyRmlsdGVyIiwiZGlzdGFuY2UiLCJNYXRoIiwicm91bmQiLCJ0b0ZpeGVkIiwicGFkZGluZ0JvdHRvbSIsInVybCIsImlkIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZ2V0SG9zcGl0YWxEZXRhaWxQYWdlIiwibmFtZSIsImNlcnRpZmljYXRpb25zIiwibGVuZ3RoIiwiQVNTRVRTX0JBU0VfVVJMIiwiam9pbiIsImxvZ28iLCJ3aWR0aCIsIm11bHRpX3NwZWNpYWxpdHkiLCJiZWRfY291bnQiLCJpc19pcGRfaG9zcGl0YWwiLCJnZXRDb3N0RXN0aW1hdGVDbGlja2VkIiwibG9jYWxpdHlfdXJsIiwiaGlzdG9yeSIsInB1c2giLCJtYXJnaW5MZWZ0Iiwic2hvcnRfYWRkcmVzcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQnJlYWRjcnVtYlZpZXciLCJicmVhZGNydW1iIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwibWFwIiwia2V5IiwidGl0bGUiLCJsaW5rX3RpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTs7SUFFTUEsWTs7Ozs7Ozs7Ozs7MENBRWlCQyxJLEVBQU07QUFDdkIsY0FBS0MsS0FBTCxDQUFXQyxvQkFBWCxDQUFnQ0YsSUFBaEM7QUFDRjs7OytCQUVRO0FBQUE7O0FBQUEsYUFDQUEsSUFEQSxHQUNTLEtBQUtDLEtBRGQsQ0FDQUQsSUFEQTs7QUFFTixhQUFJRyxXQUFXSCxRQUFRQSxLQUFLRyxRQUFiLEdBQXdCLENBQUNDLEtBQUtDLEtBQUwsQ0FBV0wsS0FBS0csUUFBaEIsSUFBNEIsSUFB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d0IsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBeUJVLE9BQU8sQ0FBUCxJQUFZQSxPQUFPLE9BQUtuQyxLQUFMLENBQVcrQixVQUFYLENBQXNCakIsTUFBdEIsR0FBK0IsQ0FBbkQsR0FBd0RmLEtBQUtRLEdBQTdELFNBQXVFUixLQUFLUSxHQUFwRztBQUNILHlDQUhDO0FBS000QiwyQ0FBTyxDQUFQLElBQVlBLE9BQU8sT0FBS25DLEtBQUwsQ0FBVytCLFVBQVgsQ0FBc0JqQixNQUF0QixHQUErQixDQUFsRCxHQUNNO0FBQUE7QUFBQSwwQ0FBTSxXQUFVLGtEQUFoQjtBQUFvRWYsNkNBQUtxQztBQUF6RSxxQ0FETixHQUVNO0FBQUE7QUFBQSwwQ0FBTSxXQUFVLGdFQUFoQjtBQUFrRnJDLDZDQUFLcUM7QUFBdkY7QUFQWixpQ0FKUDtBQWdCQ0QsdUNBQU8sT0FBS25DLEtBQUwsQ0FBVytCLFVBQVgsQ0FBc0JqQixNQUF0QixHQUErQixDQUF0QyxHQUNJO0FBQUE7QUFBQSxzQ0FBTSxXQUFVLGtCQUFoQjtBQUFBO0FBQUEsaUNBREosR0FFTTtBQWxCUCw2QkFBUDtBQXFCSCx5QkF0QkQ7QUFGUjtBQURKLGlCQURILEdBOEJLO0FBaENuQixhQUREO0FBcUNBOzs7O0VBekMyQmMsZ0JBQU1DLFM7O2tCQTRDcEJDLGMiLCJmaWxlIjoiNTEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEluaXRpYWxzUGljdHVyZSBmcm9tICcuLi9jb21tb25zL2luaXRpYWxzUGljdHVyZSdcbi8vaW1wb3J0IEhvc3BpdGFsQ2FyZCBmcm9tICcuL0hvc3BpdGFsQ2FyZC5qcydcblxuY2xhc3MgSG9zcGl0YWxDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgdG9nZ2xlUHJvdmlkZXJQb3B1cChkYXRhKSB7XG4gICAgICB0aGlzLnByb3BzLnRvZ2dsZVByb3ZpZGVyRmlsdGVyKGRhdGEpXG4gICB9XG5cbiAgIHJlbmRlcigpIHtcbiAgICAgIGxldCB7IGRhdGEgfSA9IHRoaXMucHJvcHNcbiAgICAgIGxldCBkaXN0YW5jZSA9IGRhdGEgJiYgZGF0YS5kaXN0YW5jZSA/IChNYXRoLnJvdW5kKGRhdGEuZGlzdGFuY2UpIC8gMTAwMCkudG9GaXhlZCgxKSA6IG51bGxcbiAgICAgIHJldHVybiAoXG4gICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNzdG0tZG9jQ2FyZCBtYi0zXCI+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNzdG0tZG9jQ2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCIgc3R5bGU9e3twYWRkaW5nQm90dG9tOjEwfX0+XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC03XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgJHtkYXRhLnVybCA/IGRhdGEudXJsIDogYC9pcGQvaG9zcGl0YWwvJHtkYXRhLmlkfWB9YH0gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRIb3NwaXRhbERldGFpbFBhZ2UoZGF0YS5pZCwgZGF0YS51cmwgfHwgbnVsbClcbiAgICAgICAgICAgICAgICAgICAgIH19PjxoMiBjbGFzc05hbWU9XCJudy1oc3AtY3JkLWhlYWRpbmdcIj57ZGF0YS5uYW1lfTwvaDI+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5jZXJ0aWZpY2F0aW9ucyAmJiBkYXRhLmNlcnRpZmljYXRpb25zLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm53LWhzcC1jcmQtc3ViaGVhZGluZ1wiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9Bd2FyZC0wMS5zdmcnfSAvPiA8cD57ZGF0YS5jZXJ0aWZpY2F0aW9ucy5sZW5ndGggPyBkYXRhLmNlcnRpZmljYXRpb25zLmpvaW4oJyB8ICcpIDogJyd9PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm53LWhzcC1jcmQtbG9nb2hzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5pdGlhbHNQaWN0dXJlIG5hbWU9e2RhdGEubmFtZX0gaGFzX2ltYWdlPXshIWRhdGEubG9nb30gY2xhc3NOYW1lPVwiaW5pdGlhbHNQaWN0dXJlLWRzIGZsdHItaW5pdGlhbFBpY3R1cmUtZHNcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6JzEwMHB4J319IHNyYz17ZGF0YS5sb2dvfSBjbGFzc05hbWU9XCJpbWctZmx1aWQgXCIgYWx0PXtkYXRhLm5hbWV9IHRpdGxlPXtkYXRhLm5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L0luaXRpYWxzUGljdHVyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjc3RtLWRvYy1ydG5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL3JhdGluZy1zdGFyLWZpbGxlZC5zdmcnfSBjbGFzc05hbWU9XCJpbWctY3N0bS1kb2NyYXRpbmdcIiBzdHlsZT17eyB3aWR0aDogJzEycHgnLCBtYXJnaW5SaWdodDogMiwgaGVpZ2h0OiAnMTJweCcgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvcmF0aW5nLXN0YXItZmlsbGVkLnN2Zyd9IGNsYXNzTmFtZT1cImltZy1jc3RtLWRvY3JhdGluZ1wiIHN0eWxlPXt7IHdpZHRoOiAnMTJweCcsIG1hcmdpblJpZ2h0OiAyLCBoZWlnaHQ6ICcxMnB4JyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9yYXRpbmctc3Rhci1maWxsZWQuc3ZnJ30gY2xhc3NOYW1lPVwiaW1nLWNzdG0tZG9jcmF0aW5nXCIgc3R5bGU9e3sgd2lkdGg6ICcxMnB4JywgbWFyZ2luUmlnaHQ6IDIsIGhlaWdodDogJzEycHgnIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL3JhdGluZy1zdGFyLWZpbGxlZC5zdmcnfSBjbGFzc05hbWU9XCJpbWctY3N0bS1kb2NyYXRpbmdcIiBzdHlsZT17eyB3aWR0aDogJzEycHgnLCBtYXJnaW5SaWdodDogMiwgaGVpZ2h0OiAnMTJweCcgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvcmF0aW5nLXN0YXItZmlsbGVkLnN2Zyd9IGNsYXNzTmFtZT1cImltZy1jc3RtLWRvY3JhdGluZ1wiIHN0eWxlPXt7IHdpZHRoOiAnMTJweCcsIG1hcmdpblJpZ2h0OiAyLCBoZWlnaHQ6ICcxMnB4JyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+KDUpPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnctaHNwdGwtcmd0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnctaHNwLWNyZC1iZWRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLm11bHRpX3NwZWNpYWxpdHk/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1hZ2VzL211bHRpLXNwZWNpYWxpdHkucG5nXCJ9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1zcGx0eVwiIC8+IE11bHRpIFNwZWNpYWxpdHk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JycgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5iZWRfY291bnQ/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1hZ2VzL2JlZC5wbmdcIn0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWJlZFwiIC8+e2Ake2RhdGEuYmVkX2NvdW50fSBiZWRzYH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm53LWhzcC1jcmQtY3JkLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UgJiYgZGF0YS5jb3VudF9vZl9pbnN1cmFuY2VfcHJvdmlkZXI/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJudy1oc3AtY3JkLWdyZWVuXCIgLypzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fSBvbkNsaWNrPXt0aGlzLnRvZ2dsZVByb3ZpZGVyUG9wdXAuYmluZCh0aGlzLCBkYXRhLmluc3VyYW5jZV9wcm92aWRlcil9Ki8+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2Noay1ncmVlbi5zdmcnfSAvPntgJHtkYXRhLmNvdW50X29mX2luc3VyYW5jZV9wcm92aWRlcn0gSW5zdXJhbmNlIFByb3ZpZGVyc2B9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmlzX2lwZF9ob3NwaXRhbCAmJiBmYWxzZT88YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuZ2V0Q29zdEVzdGltYXRlQ2xpY2tlZChkYXRhLmlkKX0+PGJ1dHRvbiBjbGFzc05hbWU9XCJjc3RtLWJvb2stYnRuXCI+R2V0IENvc3QgRXN0aW1hdGU8L2J1dHRvbj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldEhvc3BpdGFsRGV0YWlsUGFnZShkYXRhLmlkLCBkYXRhLnVybCB8fCBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+PGJ1dHRvbiBjbGFzc05hbWU9XCJjc3RtLWJvb2stYnRuXCI+VmlldyBkZXRhaWxzPC9idXR0b24+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGRhdGEubG9jYWxpdHlfdXJsID9cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3N0bUNhcmRGb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3N0bWZvb3RlckNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2Ake2RhdGEubG9jYWxpdHlfdXJsfWB9IG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHtkYXRhLmxvY2FsaXR5X3VybH1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+PGgzIGNsYXNzTmFtZT1cIm1iLXJtdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOicxMHB4JyxtYXJnaW5MZWZ0OiczcHgnfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9uZXctbG9jLWljby5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5zaG9ydF9hZGRyZXNzIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2U/XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNzdG1Eb2NMb2NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2NzdG1kaXN0LnN2Zyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7ZGlzdGFuY2V9IEttYH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJyAgIFxuICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDo8ZGl2IGNsYXNzTmFtZT1cImNzdG1DYXJkRm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNzdG1mb290ZXJDb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItcm12XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6JzEwcHgnLG1hcmdpbkxlZnQ6JzNweCd9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL25ldy1sb2MtaWNvLnN2Zyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnNob3J0X2FkZHJlc3MgfHwgJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3N0bURvY0xvY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3N0bWRpc3Quc3ZnJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtkaXN0YW5jZX0gS21gfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gICBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb3NwaXRhbENhcmQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIEJyZWFkY3J1bWJWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKXtcblxuXHRcdHJldHVybihcblx0XHRcdDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcdHRoaXMucHJvcHMuYnJlYWRjcnVtYiAmJiB0aGlzLnByb3BzLmJyZWFkY3J1bWIubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXJiLTEwIGJyZWFkY3J1bWItbGlzdCBicmVhZGNydW1iLWxpc3QtdWxcIiBzdHlsZT17eyAnd29yZEJyZWFrJzogJ2JyZWFrV29yZCcsIG1hcmdpblRvcDonMHB4JywgbWFyZ2luQm90dG9tOicxMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYnJlYWRjcnVtYi5tYXAoKGRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWxpc3QtaXRlbVwiIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9PSB0aGlzLnByb3BzLmJyZWFkY3J1bWIubGVuZ3RoIC0gMSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZGF0YS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxhIGhyZWY9e2RhdGEudXJsfSB0aXRsZT17ZGF0YS5saW5rX3RpdGxlIHx8IGRhdGEudGl0bGV9IG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKChrZXkgPT0gMCB8fCBrZXkgPT0gdGhpcy5wcm9wcy5icmVhZGNydW1iLmxlbmd0aCAtIDEpID8gZGF0YS51cmwgOiBgLyR7ZGF0YS51cmx9YClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID09IDAgfHwga2V5ID09IHRoaXMucHJvcHMuYnJlYWRjcnVtYi5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCBicmVhZGNydW1iLXRpdGxlIGJyZWFkY3J1bWItY29sb3JlZC10aXRsZVwiPntkYXRhLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwIGJyZWFkY3J1bWItdGl0bGUgYnJlYWRjcnVtYi1jb2xvcmVkLXRpdGxlIGQtaW5saW5lLWJsY2tcIj57ZGF0YS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSAhPSB0aGlzLnByb3BzLmJyZWFkY3J1bWIubGVuZ3RoIC0gMSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmVhZGNydW1iLWFycm93XCI+Jmd0Ozwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cblx0XHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBCcmVhZGNydW1iVmlldyJdLCJzb3VyY2VSb290IjoiIn0=