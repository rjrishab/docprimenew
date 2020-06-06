exports.ids = [39];
exports.modules = {

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _initialsPicture = __webpack_require__(/*! ../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import HospitalCard from './HospitalCard.js'

class HospitalCard extends _react2.default.Component {

   toggleProviderPopup(data) {
      this.props.toggleProviderFilter(data);
   }

   render() {
      let { data } = this.props;
      let distance = data && data.distance ? (Math.round(data.distance) / 1000).toFixed(1) : null;
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
                        { href: `${data.url ? data.url : `/ipd/hospital/${data.id}`}`, onClick: e => {
                              e.preventDefault();
                              this.props.getHospitalDetailPage(data.id, data.url || null);
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
                              `${data.bed_count} beds`
                           ) : ''
                        ),
                        _react2.default.createElement(
                           'div',
                           { className: 'nw-hsp-crd-crd-btn' },
                            false ? undefined : '',
                           data.is_ipd_hospital && false ? _react2.default.createElement(
                              'a',
                              { href: 'javascript:void(0);', onClick: () => this.props.getCostEstimateClicked(data.id) },
                              _react2.default.createElement(
                                 'button',
                                 { className: 'cstm-book-btn' },
                                 'Get Cost Estimate'
                              )
                           ) : _react2.default.createElement(
                              'a',
                              { href: 'javascript:void(0);', onClick: e => {
                                    e.preventDefault();
                                    this.props.getHospitalDetailPage(data.id, data.url || null);
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
                     { href: `${data.locality_url}`, onClick: e => {
                           e.preventDefault();
                           this.props.history.push(`/${data.locality_url}`);
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
                     `${distance} Km`
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
                     `${distance} Km`
                  )
               ) : ''
            )
         )
      );
   }
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BreadcrumbView extends _react2.default.Component {

    render() {

        return _react2.default.createElement(
            "section",
            null,
            this.props.breadcrumb && this.props.breadcrumb.length ? _react2.default.createElement(
                "section",
                { className: "" },
                _react2.default.createElement(
                    "ul",
                    { className: "mrb-10 breadcrumb-list breadcrumb-list-ul", style: { 'wordBreak': 'breakWord', marginTop: '0px', marginBottom: '10px' } },
                    this.props.breadcrumb.map((data, key) => {
                        return _react2.default.createElement(
                            "li",
                            { className: "breadcrumb-list-item", key: key },
                            key == this.props.breadcrumb.length - 1 ? _react2.default.createElement(
                                "span",
                                null,
                                data.title
                            ) : _react2.default.createElement(
                                "a",
                                { href: data.url, title: data.link_title || data.title, onClick: e => {
                                        e.preventDefault();
                                        this.props.history.push(key == 0 || key == this.props.breadcrumb.length - 1 ? data.url : `/${data.url}`);
                                    } },
                                key == 0 || key == this.props.breadcrumb.length - 1 ? _react2.default.createElement(
                                    "span",
                                    { className: "fw-500 breadcrumb-title breadcrumb-colored-title" },
                                    data.title
                                ) : _react2.default.createElement(
                                    "span",
                                    { className: "fw-500 breadcrumb-title breadcrumb-colored-title d-inline-blck" },
                                    data.title
                                )
                            ),
                            key != this.props.breadcrumb.length - 1 ? _react2.default.createElement(
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
}

exports.default = BreadcrumbView;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pcGQvSG9zcGl0YWxDYXJkLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2lwZC9icmVhZENydW1iLmpzIl0sIm5hbWVzIjpbIkhvc3BpdGFsQ2FyZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwidG9nZ2xlUHJvdmlkZXJQb3B1cCIsImRhdGEiLCJwcm9wcyIsInRvZ2dsZVByb3ZpZGVyRmlsdGVyIiwicmVuZGVyIiwiZGlzdGFuY2UiLCJNYXRoIiwicm91bmQiLCJ0b0ZpeGVkIiwicGFkZGluZ0JvdHRvbSIsInVybCIsImlkIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZ2V0SG9zcGl0YWxEZXRhaWxQYWdlIiwibmFtZSIsImNlcnRpZmljYXRpb25zIiwibGVuZ3RoIiwiQVNTRVRTX0JBU0VfVVJMIiwiam9pbiIsImxvZ28iLCJ3aWR0aCIsIm11bHRpX3NwZWNpYWxpdHkiLCJiZWRfY291bnQiLCJpc19pcGRfaG9zcGl0YWwiLCJnZXRDb3N0RXN0aW1hdGVDbGlja2VkIiwibG9jYWxpdHlfdXJsIiwiaGlzdG9yeSIsInB1c2giLCJtYXJnaW5MZWZ0Iiwic2hvcnRfYWRkcmVzcyIsIkJyZWFkY3J1bWJWaWV3IiwiYnJlYWRjcnVtYiIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIm1hcCIsImtleSIsInRpdGxlIiwibGlua190aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFDQTs7QUFFQSxNQUFNQSxZQUFOLFNBQTJCQyxnQkFBTUMsU0FBakMsQ0FBMkM7O0FBRXhDQyx1QkFBb0JDLElBQXBCLEVBQTBCO0FBQ3ZCLFdBQUtDLEtBQUwsQ0FBV0Msb0JBQVgsQ0FBZ0NGLElBQWhDO0FBQ0Y7O0FBRURHLFlBQVM7QUFDTixVQUFJLEVBQUVILElBQUYsS0FBVyxLQUFLQyxLQUFwQjtBQUNBLFVBQUlHLFdBQVdKLFFBQVFBLEtBQUtJLFFB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RUFBeUQsU0FBVXpCLENBQUQsSUFBTztBQUN2RUEsMENBQUVDLGNBQUY7QUFDQSw2Q0FBS1gsS0FBTCxDQUFXeUIsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBeUJRLE9BQU8sQ0FBUCxJQUFZQSxPQUFPLEtBQUtsQyxLQUFMLENBQVc4QixVQUFYLENBQXNCZixNQUF0QixHQUErQixDQUFuRCxHQUF3RGhCLEtBQUtTLEdBQTdELEdBQW9FLElBQUdULEtBQUtTLEdBQUksRUFBeEc7QUFDSCxxQ0FIQztBQUtNMEIsdUNBQU8sQ0FBUCxJQUFZQSxPQUFPLEtBQUtsQyxLQUFMLENBQVc4QixVQUFYLENBQXNCZixNQUF0QixHQUErQixDQUFsRCxHQUNNO0FBQUE7QUFBQSxzQ0FBTSxXQUFVLGtEQUFoQjtBQUFvRWhCLHlDQUFLb0M7QUFBekUsaUNBRE4sR0FFTTtBQUFBO0FBQUEsc0NBQU0sV0FBVSxnRUFBaEI7QUFBa0ZwQyx5Q0FBS29DO0FBQXZGO0FBUFosNkJBSlA7QUFnQkNELG1DQUFPLEtBQUtsQyxLQUFMLENBQVc4QixVQUFYLENBQXNCZixNQUF0QixHQUErQixDQUF0QyxHQUNJO0FBQUE7QUFBQSxrQ0FBTSxXQUFVLGtCQUFoQjtBQUFBO0FBQUEsNkJBREosR0FFTTtBQWxCUCx5QkFBUDtBQXFCSCxxQkF0QkQ7QUFGUjtBQURKLGFBREgsR0E4Qks7QUFoQ25CLFNBREQ7QUFxQ0E7QUF6QzJDOztrQkE0QzlCYyxjIiwiZmlsZSI6IjM5LnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJbml0aWFsc1BpY3R1cmUgZnJvbSAnLi4vY29tbW9ucy9pbml0aWFsc1BpY3R1cmUnXG4vL2ltcG9ydCBIb3NwaXRhbENhcmQgZnJvbSAnLi9Ib3NwaXRhbENhcmQuanMnXG5cbmNsYXNzIEhvc3BpdGFsQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgIHRvZ2dsZVByb3ZpZGVyUG9wdXAoZGF0YSkge1xuICAgICAgdGhpcy5wcm9wcy50b2dnbGVQcm92aWRlckZpbHRlcihkYXRhKVxuICAgfVxuXG4gICByZW5kZXIoKSB7XG4gICAgICBsZXQgeyBkYXRhIH0gPSB0aGlzLnByb3BzXG4gICAgICBsZXQgZGlzdGFuY2UgPSBkYXRhICYmIGRhdGEuZGlzdGFuY2UgPyAoTWF0aC5yb3VuZChkYXRhLmRpc3RhbmNlKSAvIDEwMDApLnRvRml4ZWQoMSkgOiBudWxsXG4gICAgICByZXR1cm4gKFxuICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjc3RtLWRvY0NhcmQgbWItM1wiPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3RtLWRvY0NhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiIHN0eWxlPXt7cGFkZGluZ0JvdHRvbToxMH19PlxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtN1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YCR7ZGF0YS51cmwgPyBkYXRhLnVybCA6IGAvaXBkL2hvc3BpdGFsLyR7ZGF0YS5pZH1gfWB9IG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0SG9zcGl0YWxEZXRhaWxQYWdlKGRhdGEuaWQsIGRhdGEudXJsIHx8IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICB9fT48aDIgY2xhc3NOYW1lPVwibnctaHNwLWNyZC1oZWFkaW5nXCI+e2RhdGEubmFtZX08L2gyPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuY2VydGlmaWNhdGlvbnMgJiYgZGF0YS5jZXJ0aWZpY2F0aW9ucy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudy1oc3AtY3JkLXN1YmhlYWRpbmdcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvQXdhcmQtMDEuc3ZnJ30gLz4gPHA+e2RhdGEuY2VydGlmaWNhdGlvbnMubGVuZ3RoID8gZGF0YS5jZXJ0aWZpY2F0aW9ucy5qb2luKCcgfCAnKSA6ICcnfTwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudy1oc3AtY3JkLWxvZ29oc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluaXRpYWxzUGljdHVyZSBuYW1lPXtkYXRhLm5hbWV9IGhhc19pbWFnZT17ISFkYXRhLmxvZ299IGNsYXNzTmFtZT1cImluaXRpYWxzUGljdHVyZS1kcyBmbHRyLWluaXRpYWxQaWN0dXJlLWRzXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOicxMDBweCd9fSBzcmM9e2RhdGEubG9nb30gY2xhc3NOYW1lPVwiaW1nLWZsdWlkIFwiIGFsdD17ZGF0YS5uYW1lfSB0aXRsZT17ZGF0YS5uYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Jbml0aWFsc1BpY3R1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY3N0bS1kb2MtcnRuZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9yYXRpbmctc3Rhci1maWxsZWQuc3ZnJ30gY2xhc3NOYW1lPVwiaW1nLWNzdG0tZG9jcmF0aW5nXCIgc3R5bGU9e3sgd2lkdGg6ICcxMnB4JywgbWFyZ2luUmlnaHQ6IDIsIGhlaWdodDogJzEycHgnIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL3JhdGluZy1zdGFyLWZpbGxlZC5zdmcnfSBjbGFzc05hbWU9XCJpbWctY3N0bS1kb2NyYXRpbmdcIiBzdHlsZT17eyB3aWR0aDogJzEycHgnLCBtYXJnaW5SaWdodDogMiwgaGVpZ2h0OiAnMTJweCcgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvcmF0aW5nLXN0YXItZmlsbGVkLnN2Zyd9IGNsYXNzTmFtZT1cImltZy1jc3RtLWRvY3JhdGluZ1wiIHN0eWxlPXt7IHdpZHRoOiAnMTJweCcsIG1hcmdpblJpZ2h0OiAyLCBoZWlnaHQ6ICcxMnB4JyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9yYXRpbmctc3Rhci1maWxsZWQuc3ZnJ30gY2xhc3NOYW1lPVwiaW1nLWNzdG0tZG9jcmF0aW5nXCIgc3R5bGU9e3sgd2lkdGg6ICcxMnB4JywgbWFyZ2luUmlnaHQ6IDIsIGhlaWdodDogJzEycHgnIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL3JhdGluZy1zdGFyLWZpbGxlZC5zdmcnfSBjbGFzc05hbWU9XCJpbWctY3N0bS1kb2NyYXRpbmdcIiBzdHlsZT17eyB3aWR0aDogJzEycHgnLCBtYXJnaW5SaWdodDogMiwgaGVpZ2h0OiAnMTJweCcgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPig1KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm53LWhzcHRsLXJndC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm53LWhzcC1jcmQtYmVkc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5tdWx0aV9zcGVjaWFsaXR5P1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltYWdlcy9tdWx0aS1zcGVjaWFsaXR5LnBuZ1wifSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctc3BsdHlcIiAvPiBNdWx0aSBTcGVjaWFsaXR5PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYmVkX2NvdW50P1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltYWdlcy9iZWQucG5nXCJ9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1iZWRcIiAvPntgJHtkYXRhLmJlZF9jb3VudH0gYmVkc2B9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudy1oc3AtY3JkLWNyZC1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlICYmIGRhdGEuY291bnRfb2ZfaW5zdXJhbmNlX3Byb3ZpZGVyP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibnctaHNwLWNyZC1ncmVlblwiIC8qc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0gb25DbGljaz17dGhpcy50b2dnbGVQcm92aWRlclBvcHVwLmJpbmQodGhpcywgZGF0YS5pbnN1cmFuY2VfcHJvdmlkZXIpfSovPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jaGstZ3JlZW4uc3ZnJ30gLz57YCR7ZGF0YS5jb3VudF9vZl9pbnN1cmFuY2VfcHJvdmlkZXJ9IEluc3VyYW5jZSBQcm92aWRlcnNgfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5pc19pcGRfaG9zcGl0YWwgJiYgZmFsc2U/PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmdldENvc3RFc3RpbWF0ZUNsaWNrZWQoZGF0YS5pZCl9PjxidXR0b24gY2xhc3NOYW1lPVwiY3N0bS1ib29rLWJ0blwiPkdldCBDb3N0IEVzdGltYXRlPC9idXR0b24+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRIb3NwaXRhbERldGFpbFBhZ2UoZGF0YS5pZCwgZGF0YS51cmwgfHwgbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PjxidXR0b24gY2xhc3NOYW1lPVwiY3N0bS1ib29rLWJ0blwiPlZpZXcgZGV0YWlsczwvYnV0dG9uPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkYXRhLmxvY2FsaXR5X3VybCA/XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNzdG1DYXJkRm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNzdG1mb290ZXJDb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgJHtkYXRhLmxvY2FsaXR5X3VybH1gfSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgLyR7ZGF0YS5sb2NhbGl0eV91cmx9YClcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PjxoMyBjbGFzc05hbWU9XCJtYi1ybXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3t3aWR0aDonMTBweCcsbWFyZ2luTGVmdDonM3B4J319IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvbmV3LWxvYy1pY28uc3ZnJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuc2hvcnRfYWRkcmVzcyB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3RtRG9jTG9jXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jc3RtZGlzdC5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake2Rpc3RhbmNlfSBLbWB9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA6JycgICBcbiAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA6PGRpdiBjbGFzc05hbWU9XCJjc3RtQ2FyZEZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3RtZm9vdGVyQ29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLXJtdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOicxMHB4JyxtYXJnaW5MZWZ0OiczcHgnfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9uZXctbG9jLWljby5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5zaG9ydF9hZGRyZXNzIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2U/XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNzdG1Eb2NMb2NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2NzdG1kaXN0LnN2Zyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7ZGlzdGFuY2V9IEttYH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9zcGl0YWxDYXJkIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBCcmVhZGNydW1iVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0cmVuZGVyKCl7XG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXHR0aGlzLnByb3BzLmJyZWFkY3J1bWIgJiYgdGhpcy5wcm9wcy5icmVhZGNydW1iLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1yYi0xMCBicmVhZGNydW1iLWxpc3QgYnJlYWRjcnVtYi1saXN0LXVsXCIgc3R5bGU9e3sgJ3dvcmRCcmVhayc6ICdicmVha1dvcmQnLCBtYXJnaW5Ub3A6JzBweCcsIG1hcmdpbkJvdHRvbTonMTBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJyZWFkY3J1bWIubWFwKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1saXN0LWl0ZW1cIiBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPT0gdGhpcy5wcm9wcy5icmVhZGNydW1iLmxlbmd0aCAtIDEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2RhdGEudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8YSBocmVmPXtkYXRhLnVybH0gdGl0bGU9e2RhdGEubGlua190aXRsZSB8fCBkYXRhLnRpdGxlfSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgoa2V5ID09IDAgfHwga2V5ID09IHRoaXMucHJvcHMuYnJlYWRjcnVtYi5sZW5ndGggLSAxKSA/IGRhdGEudXJsIDogYC8ke2RhdGEudXJsfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9PSAwIHx8IGtleSA9PSB0aGlzLnByb3BzLmJyZWFkY3J1bWIubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDAgYnJlYWRjcnVtYi10aXRsZSBicmVhZGNydW1iLWNvbG9yZWQtdGl0bGVcIj57ZGF0YS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCBicmVhZGNydW1iLXRpdGxlIGJyZWFkY3J1bWItY29sb3JlZC10aXRsZSBkLWlubGluZS1ibGNrXCI+e2RhdGEudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgIT0gdGhpcy5wcm9wcy5icmVhZGNydW1iLmxlbmd0aCAtIDEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1hcnJvd1wiPiZndDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG5cdFx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnJlYWRjcnVtYlZpZXciXSwic291cmNlUm9vdCI6IiJ9