(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loader = function (_React$Component) {
    _inherits(Loader, _React$Component);

    function Loader(props) {
        _classCallCheck(this, Loader);

        return _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).call(this, props));
    }

    _createClass(Loader, [{
        key: "render",
        value: function render() {

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
    }]);

    return Loader;
}(_react2.default.Component);

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

/***/ "./dev/js/components/diagnosis/searchPackages/packageCompare/packageCompareView.js":
/*!*****************************************************************************************!*\
  !*** ./dev/js/components/diagnosis/searchPackages/packageCompare/packageCompareView.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _LeftBar = __webpack_require__(/*! ../../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _footer = __webpack_require__(/*! ../../../commons/Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _gtm = __webpack_require__(/*! ../../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _HelmetTags = __webpack_require__(/*! ../../../commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _config = __webpack_require__(/*! ../../../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _staticDisclaimer = __webpack_require__(/*! ../../../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _storage = __webpack_require__(/*! ../../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var PackageCompareView = function (_React$Component) {
  _inherits(PackageCompareView, _React$Component);

  function PackageCompareView() {
    _classCallCheck(this, PackageCompareView);

    var _this = _possibleConstructorReturn(this, (PackageCompareView.__proto__ || Object.getPrototypeOf(PackageCompareView)).call(this));

    _this.sendPageUrl = function () {
      var data = {
        callback: window.location.pathname.substring(1) + window.location.search.replace(/&/g, '*'),
        template: 'gold_general_template'
      };
      _this.props.sendAgentWhatsupPageURL(data).then(function (resp) {
        setTimeout(function () {
          _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Sent Successfully" });
        }, 500);
      }).catch(function (e) {
        setTimeout(function () {
          _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Try again!" });
        }, 500);
      });
    };

    _this.state = {
      checked: false,
      tabsValue: [],
      viewAll: true,
      isDiffChecked: false,
      isDiffTest: '',
      readMore: 'search-details-data-less'
    };
    return _this;
  }

  _createClass(PackageCompareView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var pkgCls = document.getElementsByClassName('pkgCls');
      if (pkgCls && pkgCls.length) {
        for (var i = 0; i < pkgCls.length; i++) {
          pkgCls[i].addEventListener('scroll', function (e) {
            var leftScrolledVal = e.target.scrollLeft;
            for (var j = 0; j < pkgCls.length; j++) {
              pkgCls[j].scrollLeft = leftScrolledVal;
            }
          });
        }
      }
      if (window) {
        window.scrollTo(0, 0);
      }
      var ids = [];
      if (this.props.data.packages) {
        this.props.data.packages.map(function (packages, i) {
          ids.push('hide_av_' + packages.id + '_' + packages.lab.id);
          // ids.push('hide_strt_'+ packages.id+'_'+packages.lab.id)
          // ids.push('hide_coupon_'+ packages.id)
        });
      }
      if (ids.length > 0) {
        window.onscroll = function () {
          if (document.getElementsByClassName('sticky-multiple-pkgs') && document.getElementsByClassName('sticky-multiple-pkgs')[0]) {
            var scrollHeight = document.getElementsByClassName('sticky-multiple-pkgs')[0].offsetTop;
            ids.map(function (id, i) {
              if (scrollHeight > 0 && window.screen.width < 768) {
                // document.getElementById('showDiff').classList.add("easehideadd")
                document.getElementById(id).classList.add("easehideadd");
              } else {
                // document.getElementById('showDiff').classList.remove("easehideadd")
                document.getElementById(id).classList.remove("easehideadd");
              }
            });
          }
        };
      }
    }
  }, {
    key: 'showLabs',
    value: function showLabs(id) {
      var _this2 = this;

      this.props.setPackageId(id, true);

      setTimeout(function () {
        _this2.props.history.push('/searchpackages?isComparable=true');
      }, 100);
    }
  }, {
    key: 'bookNow',
    value: function bookNow(id, url, test_id, test_name, e) {
      // redirect to package booking summary
      this.props.clearExtraTests();
      var testIds = test_id;
      var new_test = {};
      new_test.extra_test = true;
      new_test.lab_id = id;
      new_test.type = 'test';
      new_test.name = test_name;
      new_test.id = test_id;
      this.props.toggleDiagnosisCriteria('test', new_test, true);
      var data = {
        'Category': 'ConsumerApp', 'Action': 'CompareBookNowClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'compare-booknow-click', 'LabId': id, 'testId': test_id
      };
      _gtm2.default.sendEvent({ data: data });

      if (e.ctrlKey || e.metaKey) {} else {
        e.preventDefault();

        if (url) {
          this.props.history.push('/' + url);
        } else {
          this.props.history.push('/lab/' + id + '/book');
        }
      }
    }
  }, {
    key: 'ButtonHandler',
    value: function ButtonHandler(field, event) {
      var tabs = [].concat(this.state.tabsValue);
      var self = this;
      var found = false;
      tabs = tabs.filter(function (x) {
        if (x == field) {
          found = true;
          return false;
        }
        return true;
      });
      if (!found) {
        tabs.push(field);
      }

      self.setState({ tabsValue: tabs });
    }
  }, {
    key: 'toggleComparePackages',
    value: function toggleComparePackages(packageId, labId, pckImg, pckName) {
      var packages = {};
      packages.id = packageId;
      packages.lab_id = labId;
      packages.img = pckImg;
      packages.name = pckName;
      var newUrl = queryString.parse(this.props.location.search);
      var package_ids = [];
      if (newUrl.package_ids) {
        package_ids = newUrl.package_ids.split(',');
      }
      var ids = '';
      var data = [];
      if (package_ids.length > 0) {
        Object.entries(package_ids).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              pkg = _ref2[1];

          ids = pkg.split('-');
          if (parseInt(ids[0]) == parseInt(packageId) && parseInt(ids[1]) == parseInt(labId)) {} else {
            data.push(ids[0] + '-' + ids[1]);
          }
        });
      }
      this.props.togglecompareCriteria(packages);
      this.props.history.push('/package/compare?package_ids=' + data);
      window.location.reload();
    }
  }, {
    key: 'viewAll',
    value: function viewAll() {
      var ids = [];
      if (this.state.viewAll) {
        this.props.data.category_info.map(function (catIds, i) {
          ids.push(catIds.id);
        });
      }
      this.setState({ tabsValue: ids, viewAll: !this.state.viewAll });
    }
  }, {
    key: 'toggleShowDiff',
    value: function toggleShowDiff() {
      var _this3 = this;

      // show differnce b/w packages
      var data = {
        'Category': 'ConsumerApp', 'Action': 'ShoWDifferenceClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'show-difference-click'
      };
      _gtm2.default.sendEvent({ data: data });
      var testIds = [];
      var catIds = [];
      var test_info = [];
      var category_info_data = [];
      var info_first = '';
      var cat_first = [];
      var catId = '';
      var testId = '';
      var finalIds = [];

      this.props.data.category_info.map(function (cat_info, i) {
        test_info = [];
        info_first = '';
        var count = 0;
        cat_info.test_ids.map(function (test_id, k) {
          test_info = [];
          _this3.props.data.packages.map(function (pkg_test, n) {
            test_info = test_info.concat(pkg_test.tests_included.filter(function (x) {
              return x.test_id == test_id;
            }));
          });
        });
        test_info.map(function (info, k) {
          if (k == 0) {
            testId = info.test_id;
            info_first = info.available;
          }

          if (k !== 0 && info_first === info.available) {
            count++;
          }
          if (count == test_info.length - 1) {
            testIds.push(testId);
          }
        });
      });

      this.props.data.category_info.map(function (cat_info, i) {
        category_info_data = [];
        var count = 0;
        cat_info.test_ids.map(function (test_id, k) {
          _this3.props.data.packages.map(function (pkg_test, n) {
            category_info_data = category_info_data.concat(pkg_test.tests_included.filter(function (x) {
              return x.test_id == test_id;
            }));
            category_info_data[n].package_id = pkg_test.id;
            category_info_data[n].cat_id = cat_info.id;
          });
        });
        category_info_data.map(function (info, k) {
          if (k == 0) {
            catId = info.cat_id;

            info_first = info.available;
          }

          if (k !== 0 && info_first === info.available) {
            count++;
          }
          if (count == category_info_data.length - 1) {
            catIds.push(catId);
          }
        });
      });

      finalIds = [].concat(catIds, testIds);
      if (this.state.isDiffChecked) {
        this.setState({ isDiffTest: [], isDiffChecked: !this.state.isDiffChecked });
      } else {
        this.setState({ isDiffTest: finalIds, isDiffChecked: !this.state.isDiffChecked });
      }
    }
  }, {
    key: 'addMore',
    value: function addMore() {
      this.props.selectSearchType('lab');
      this.props.history.push('/search?from=header');
    }
  }, {
    key: 'toggleScroll',
    value: function toggleScroll() {
      if (window) {
        window.scrollTo(0, 0);
      }
      this.setState({ readMore: 'search-details-data-less' });
    }
  }, {
    key: 'viewAllCat',
    value: function viewAllCat() {
      var parsed = queryString.parse(this.props.location.search);
      if (parsed.category_ids) {
        this.props.history.push('/searchpackages?package_category_ids=' + parsed.category_ids);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var self = this;
      var availableTest = [];
      var testData = [];
      var cat_info_data = [];
      if (this.props.showCompare && this.props.data != null) {
        return _react2.default.createElement(
          'div',
          { className: 'profile-body-wrap', style: { paddingBottom: 54 } },
          _react2.default.createElement(_HelmetTags2.default, { tagsData: {
              canonicalUrl: '' + _config2.default.API_BASE_URL + this.props.location.pathname,
              title: '' + (this.props.data.title || '')
              // description: `${this.props.data.description || ''}`
            }, noIndex: false }),
          _react2.default.createElement(_DesktopProfileHeader2.default, { showPackageStrip: true }),
          _react2.default.createElement(
            'section',
            { className: 'pkgComapre container pkgMrgnAdjst' },
            _react2.default.createElement(
              'div',
              { className: 'row main-row parent-section-row' },
              _react2.default.createElement(_LeftBar2.default, null),
              _storage2.default.isAgent() ? _react2.default.createElement(
                'button',
                { onClick: this.sendPageUrl, className: 'whtsappPages' },
                _react2.default.createElement('img', { src: "/assets" + '/img/wa-logo.svg' }),
                'Send on Whatsapp'
              ) : '',
              _react2.default.createElement(
                'div',
                { className: 'container-fluid pad-all-0' },
                this.props.data.title ? _react2.default.createElement(
                  'div',
                  { className: 'pkgSliderHeading mrt-20' },
                  _react2.default.createElement(
                    'h5',
                    { style: { fontSize: '16px', paddingLeft: '10px' } },
                    this.props.data.title
                  )
                ) : '',
                this.props.data.search_content ? _react2.default.createElement(
                  'div',
                  { className: 'search-result-card-collpase', style: { borderRadius: '0px' } },
                  _react2.default.createElement('div', { className: this.state.readMore, dangerouslySetInnerHTML: { __html: this.props.data.search_content } }),
                  this.state.readMore && this.state.readMore != '' ? _react2.default.createElement(
                    'span',
                    { className: 'rd-more', onClick: function onClick() {
                        return _this4.setState({ readMore: '' });
                      } },
                    'Read More'
                  ) : '',
                  this.state.readMore == '' ? _react2.default.createElement(
                    'span',
                    { className: 'rd-more', onClick: this.toggleScroll.bind(this) },
                    'Read Less'
                  ) : ''
                ) : '',
                _react2.default.createElement(
                  'div',
                  { className: 'sticky-multiple-pkgs' },
                  _react2.default.createElement(
                    'div',
                    { className: 'multi-pkg-cmpre ease-hide', id: 'showDiff' },
                    this.props.data.packages && this.props.data.packages.length > 1 ? _react2.default.createElement(
                      'div',
                      { className: 'tgle-btn' },
                      _react2.default.createElement(
                        'label',
                        { className: 'switch' },
                        _react2.default.createElement(
                          'span',
                          { className: 'tgle-btn-txt' },
                          ' Show Difference'
                        ),
                        _react2.default.createElement('input', { type: 'checkbox', checked: this.state.isDiffChecked, onClick: this.toggleShowDiff.bind(this) }),
                        _react2.default.createElement('span', { className: 'slider round' })
                      )
                    ) : '',
                    this.props.data.packages && this.props.data.packages.length != 1 && this.props.data.packages.length < 5 && !this.props.is_category ? _react2.default.createElement(
                      'div',
                      { className: '', style: { cursor: 'pointer' } },
                      _react2.default.createElement(
                        'a',
                        { onClick: this.addMore.bind(this), className: 'add-more-packages' },
                        ' + Add More '
                      )
                    ) : '',
                    this.props.is_category ? _react2.default.createElement(
                      'span',
                      { className: 'view-more', onClick: this.viewAllCat.bind(this), style: { color: '#f78631', cursor: 'pointer' } },
                      ' View All'
                    ) : ''
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: "multiple-pkgs" + (this.props.data.packages.length <= 2 ? ' pkbclsTwo' : this.props.data.packages.length <= 3 ? ' pkbclsThree' : this.props.data.packages.length <= 4 ? ' pkbclsFour' : '') },
                    _react2.default.createElement(
                      'ul',
                      { className: 'pkgCls pkbcls' },
                      this.props.data.packages ? this.props.data.packages.map(function (packages, i) {
                        return _react2.default.createElement(
                          'li',
                          { key: i, id: 'pkg_' + packages.id },
                          _this4.props.is_category ? '' : _react2.default.createElement('img', { src: "/assets" + "/images/packageCompare/red-cut.png", alt: '', className: 'end-div', onClick: _this4.toggleComparePackages.bind(_this4, packages.id, packages.lab.id, packages.lab.thumbnail, packages.lab.name) }),
                          _react2.default.createElement(
                            'div',
                            { className: 'pkg-hd' },
                            packages.name,
                            ' ',
                            packages.total_parameters_count > 0 ? '(' + packages.total_parameters_count + ' tests)' : '',
                            ' '
                          ),
                          _react2.default.createElement(
                            'div',
                            { className: 'pkg-hd-by fw-500 ease-hide', id: "hide_av_" + packages.id + '_' + packages.lab.id },
                            packages.lab.name
                          ),
                          _react2.default.createElement(
                            'a',
                            { onClick: _this4.bookNow.bind(_this4, packages.lab.id, '', packages.id, packages.lab.name) },
                            _react2.default.createElement(
                              'button',
                              { className: 'pkg-btn-nw' },
                              _react2.default.createElement(
                                'p',
                                { className: 'fw-500', id: "hide_strt_" + packages.id },
                                '\u20B9 ',
                                parseInt(packages.discounted_price),
                                parseInt(packages.discounted_price) !== parseInt(packages.mrp) ? _react2.default.createElement(
                                  'span',
                                  { className: 'pkg-cut-price', style: { color: '#ffffff' } },
                                  '\u20B9 ',
                                  parseInt(packages.mrp)
                                ) : ''
                              )
                            )
                          )
                        );
                      }) : '',
                      this.props.data.packages && this.props.data.packages.length == 1 && !this.props.is_category ? _react2.default.createElement(
                        'li',
                        { onClick: this.addMore.bind(this), style: { cursor: 'pointer', paddingTop: 30, paddingBottom: 30 } },
                        _react2.default.createElement(
                          'div',
                          { className: 'addnewpkg' },
                          _react2.default.createElement(
                            'span',
                            { className: 'add-plus' },
                            '+'
                          )
                        ),
                        _react2.default.createElement(
                          'p',
                          { className: 'addnewpkg-txt' },
                          'Add one more ',
                          _react2.default.createElement('br', null),
                          'to compare'
                        )
                      ) : ''
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'pkg-cmpre-list' },
                  _react2.default.createElement(
                    'div',
                    { className: 'hide-div' },
                    _react2.default.createElement(
                      'a',
                      { className: 'hide-all', onClick: this.viewAll.bind(this) },
                      this.state.viewAll ? 'Hide All' : 'View All',
                      ' ',
                      _react2.default.createElement('img', { className: !this.state.viewAll ? 'acrd-arw-rotate' : 'acrd-show', src: "/assets" + "/images/down-arrow-o.png", alt: '' })
                    )
                  ),
                  this.props.data.category_info ? this.props.data.category_info.map(function (cat_info, i) {
                    return _react2.default.createElement(
                      'div',
                      { className: "pkg-card-container mb-3" + (_this4.state.isDiffChecked && _this4.state.isDiffTest.indexOf(cat_info.id) != -1 ? ' d-none' : ''), key: i, id: 'cat_' + cat_info.id },
                      _react2.default.createElement(
                        'div',
                        { className: 'pkg-crd-header light-orng-header', onClick: _this4.ButtonHandler.bind(_this4, cat_info.id) },
                        _react2.default.createElement(
                          'span',
                          null,
                          cat_info.name
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: _this4.state.tabsValue.indexOf(cat_info.id) > -1 ? ' acrd-show span-img' : 'acrd-arw-rotate span-img' },
                          _react2.default.createElement('img', { src: "/assets" + "/images/up-arrow.png", alt: '' })
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: _this4.state.tabsValue.indexOf(cat_info.id) > -1 ? 'd-none' : '' },
                        _react2.default.createElement(
                          'div',
                          { className: "top-head-info multiple-pkgs parent-info category-done" + (_this4.props.data.packages.length <= 2 ? ' pkbclsTwo' : _this4.props.data.packages.length <= 3 ? ' pkbclsThree' : _this4.props.data.packages.length <= 4 ? ' pkbclsFour' : '') },
                          _react2.default.createElement(
                            'ul',
                            { className: 'pkgCls' },
                            _this4.props.data.packages.map(function (cat_count, j) {
                              cat_info_data = cat_count.category_parameter_count.filter(function (x) {
                                return x.id == cat_info.id;
                              });
                              return cat_info_data[0].count > 0 ? _react2.default.createElement(
                                'li',
                                { id: cat_info_data[0].id, key: j },
                                cat_info_data[0].count,
                                ' ',
                                cat_info_data[0].count == 1 ? 'test' : 'tests',
                                ' '
                              ) : _react2.default.createElement(
                                'li',
                                { id: cat_info_data[0].id, key: j },
                                'Nil'
                              );
                            })
                          )
                        ),
                        cat_info.test_ids.map(function (test_id, k) {
                          testData = self.props.data.test_info.filter(function (x) {
                            return x.id == test_id;
                          });
                          return _react2.default.createElement(
                            'div',
                            { key: k, id: testData[0].id, className: _this4.state.isDiffChecked && _this4.state.isDiffTest.indexOf(testData[0].id) != -1 ? ' d-none' : '' },
                            testData[0].parameters.length > 0 ? _react2.default.createElement(
                              'div',
                              { className: 'pkg-crd-header light-orng-header grey-head test-done', onClick: _this4.ButtonHandler.bind(_this4, testData[0].id) },
                              _react2.default.createElement(
                                'span',
                                null,
                                testData[0].name
                              ),
                              _react2.default.createElement(
                                'span',
                                { className: _this4.state.tabsValue.indexOf(testData[0].id) > -1 ? 'acrd-arw-rotate span-img' : 'acrd-show span-img' },
                                _react2.default.createElement('img', { src: "/assets" + "/images/up-arrow.png", alt: '' })
                              )
                            ) : _react2.default.createElement(
                              'div',
                              { className: 'pkg-crd-header light-orng-header grey-head test-done' },
                              _react2.default.createElement(
                                'span',
                                null,
                                testData[0].name
                              )
                            ),
                            _react2.default.createElement(
                              'div',
                              { className: "top-head-info multiple-pkgs multiple-pkgs-details" + (_this4.props.data.packages.length <= 2 ? ' pkbclsTwo' : _this4.props.data.packages.length <= 3 ? ' pkbclsThree' : _this4.props.data.packages.length <= 4 ? ' pkbclsFour' : '') },
                              _react2.default.createElement(
                                'ul',
                                { className: 'pkgCls testParam new' },
                                self.props.data.packages.map(function (pkg_test, n) {
                                  availableTest = pkg_test.tests_included.filter(function (x) {
                                    return x.test_id == test_id;
                                  });
                                  return availableTest[0].available ? _react2.default.createElement(
                                    'li',
                                    { key: n },
                                    _react2.default.createElement(
                                      'span',
                                      null,
                                      _react2.default.createElement('img', { src: "/assets" + "/images/packageCompare/check-01.svg", style: { width: '14px' } })
                                    )
                                  ) : _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                      'span',
                                      null,
                                      _react2.default.createElement('img', { src: "/assets" + "/images/packageCompare/cross-01.svg", style: { width: '14px' } })
                                    )
                                  );
                                })
                              )
                            ),
                            _react2.default.createElement(
                              'div',
                              { key: k + 1, className: _this4.state.tabsValue.indexOf(testData[0].id) > -1 ? '' : 'd-none' },
                              _react2.default.createElement(
                                'div',
                                { className: "top-head-info multiple-pkgs multiple-pkgs-details" + (_this4.props.data.packages.length <= 2 ? ' pkbclsTwo' : _this4.props.data.packages.length <= 3 ? ' pkbclsThree' : _this4.props.data.packages.length <= 4 ? ' pkbclsFour' : '') },
                                _react2.default.createElement(
                                  'ul',
                                  { className: 'pkgCls testParam' },
                                  self.props.data.packages.map(function (pkg_test, n) {
                                    availableTest = pkg_test.tests_included.filter(function (x) {
                                      return x.test_id == test_id;
                                    });
                                    return availableTest[0].available ? _react2.default.createElement(
                                      'li',
                                      { key: n },
                                      testData[0].parameters.length > 0 ? testData[0].parameters.map(function (test_param, o) {
                                        return _react2.default.createElement(
                                          'span',
                                          { key: o },
                                          test_param
                                        );
                                      }) : ''
                                    ) : _react2.default.createElement(
                                      'li',
                                      null,
                                      testData[0].parameters.length > 0 ? testData[0].parameters.map(function (test_param, o) {
                                        return _react2.default.createElement(
                                          'span',
                                          { key: o },
                                          _react2.default.createElement('img', { className: 'x-img', src: "/assets" + "/images/packageCompare/cross-01.svg", style: { width: '14px' } })
                                        );
                                      }) : ''
                                    );
                                  })
                                )
                              )
                            )
                          );
                        })
                      )
                    );
                  }) : ''
                )
              )
            ),
            this.props.data.bottom_content && this.props.data.bottom_content.length ? _react2.default.createElement(
              'div',
              { className: 'col-12 mrt-20' },
              _react2.default.createElement('div', { className: 'search-result-card-collpase', dangerouslySetInnerHTML: { __html: this.props.data.bottom_content } })
            ) : ''
          ),
          _react2.default.createElement(_staticDisclaimer2.default, null)
        );
      }
    }
  }]);

  return PackageCompareView;
}(_react2.default.Component);

exports.default = PackageCompareView;

/***/ }),

/***/ "./dev/js/containers/diagnosis/PackageCompare.js":
/*!*******************************************************!*\
  !*** ./dev/js/containers/diagnosis/PackageCompare.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _LeftBar = __webpack_require__(/*! ../../components/commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../components/commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../components/commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _footer = __webpack_require__(/*! ../../components/commons/Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _Loader = __webpack_require__(/*! ../../components/commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

__webpack_require__(/*! ../../helpers/urltoState */ "./dev/js/helpers/urltoState.js");

var _packageCompareView = __webpack_require__(/*! ../../components/diagnosis/searchPackages/packageCompare/packageCompareView.js */ "./dev/js/components/diagnosis/searchPackages/packageCompare/packageCompareView.js");

var _packageCompareView2 = _interopRequireDefault(_packageCompareView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var packageCompare = function (_React$Component) {
  _inherits(packageCompare, _React$Component);

  function packageCompare(props) {
    _classCallCheck(this, packageCompare);

    var _this = _possibleConstructorReturn(this, (packageCompare.__proto__ || Object.getPrototypeOf(packageCompare)).call(this, props));

    _this.state = {
      showCompare: false,
      data: null,
      is_category: false
    };
    return _this;
  }

  _createClass(packageCompare, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (window) {
        window.scrollTo(0, 0);
      }
      var parsed = queryString.parse(this.props.location.search);
      var resetCompareData = [];
      var data = [];
      var package_ids = void 0;
      var package_url = '';
      var category_ids = null;
      if (parsed.package_ids) {
        package_ids = parsed.package_ids.split(',');
      }
      if (this.props.location.pathname.includes("-hpcp")) {
        package_url = this.props.location.pathname.split('/');
        package_url = package_url[1];
      }
      if (parsed.category_ids) {
        category_ids = parsed.category_ids;
        this.setState({ is_category: true });
      }
      var ids = '';
      if (package_ids || package_url || category_ids) {
        if (package_ids && package_ids.length > 0 && package_ids != "") {
          Object.entries(package_ids).map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                key = _ref2[0],
                pkg = _ref2[1];

            ids = pkg.split('-');
            data.push({ package_id: ids[0], lab_id: ids[1] });
          });
        }
        this.props.getCompareList(data, this.props.selectedLocation, package_url, category_ids, function (resp) {
          // comparision results for selected packages
          if (resp) {
            var test = {};
            resp.packages.map(function (pkg, i) {
              test = {};
              test.id = pkg.id;
              test.lab_id = pkg.lab.id;
              test.name = pkg.name;
              test.img = pkg.lab.thumbnail;
              resetCompareData.push(test);
            });
            if (!category_ids) {
              _this2.props.togglecompareCriteria(resetCompareData, true);
            }
            _this2.setState({ 'showCompare': true, 'data': resp });
          }
        });
      } else {
        this.props.history.push('/searchpackages');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.showCompare) {
        return _react2.default.createElement(_packageCompareView2.default, _extends({}, this.props, { data: this.state.data, showCompare: this.state.showCompare, is_category: this.state.is_category }));
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'profile-body-wrap', style: { paddingBottom: 54 } },
          _react2.default.createElement(_DesktopProfileHeader2.default, { showPackageStrip: true }),
          _react2.default.createElement(
            'section',
            { className: 'pkgComapre container' },
            _react2.default.createElement(_Loader2.default, null)
          )
        );
      }
    }
  }]);

  return packageCompare;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, passedProps) {
  var _state$SEARCH_CRITERI = state.SEARCH_CRITERIA_LABS,
      compare_packages = _state$SEARCH_CRITERI.compare_packages,
      selectedLocation = _state$SEARCH_CRITERI.selectedLocation;


  return {
    compare_packages: compare_packages,
    selectedLocation: selectedLocation
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getCompareList: function getCompareList(selectedIds, selectedLocation, searchByUrl, cat_id, cb) {
      return dispatch((0, _index.getCompareList)(selectedIds, selectedLocation, searchByUrl, cat_id, cb));
    },
    togglecompareCriteria: function togglecompareCriteria(criteria, reset) {
      return dispatch((0, _index.togglecompareCriteria)(criteria, reset));
    },
    setPackageId: function setPackageId(package_id, isHomePage) {
      return dispatch((0, _index.setPackageId)(package_id, isHomePage));
    },
    selectSearchType: function selectSearchType(type) {
      return dispatch((0, _index.selectSearchType)(type));
    },
    toggleDiagnosisCriteria: function toggleDiagnosisCriteria(type, criteria, forceAdd, filter) {
      return dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd, filter));
    },
    clearExtraTests: function clearExtraTests() {
      return dispatch((0, _index.clearExtraTests)());
    },
    sendAgentWhatsupPageURL: function sendAgentWhatsupPageURL(extraParams, cb) {
      return dispatch((0, _index.sendAgentWhatsupPageURL)(extraParams, cb));
    }

  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(packageCompare);

/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/react-router/es/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-router/es/index.js ***!
  \***********************************************/
/*! exports provided: MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, withRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MemoryRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MemoryRouter */ "./node_modules/react-router/es/MemoryRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return _MemoryRouter__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Prompt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Prompt */ "./node_modules/react-router/es/Prompt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return _Prompt__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Redirect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Redirect */ "./node_modules/react-router/es/Redirect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return _Redirect__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Route */ "./node_modules/react-router/es/Route.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return _Route__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Router */ "./node_modules/react-router/es/Router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _Router__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _StaticRouter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StaticRouter */ "./node_modules/react-router/es/StaticRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return _StaticRouter__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Switch */ "./node_modules/react-router/es/Switch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _Switch__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _generatePath__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./generatePath */ "./node_modules/react-router/es/generatePath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return _generatePath__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _matchPath__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./matchPath */ "./node_modules/react-router/es/matchPath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return _matchPath__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _withRouter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withRouter */ "./node_modules/react-router/es/withRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return _withRouter__WEBPACK_IMPORTED_MODULE_9__["default"]; });






















/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL3NlYXJjaFBhY2thZ2VzL3BhY2thZ2VDb21wYXJlL3BhY2thZ2VDb21wYXJlVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9kaWFnbm9zaXMvUGFja2FnZUNvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbImlzVmlwIiwiY29sb3IiLCJmb250U2l6ZSIsInBhZGRpbmdCb3R0b20iLCJMb2FkZXIiLCJwcm9wcyIsImNsYXNzVHlwZSIsImlGcmFtZVBvcHVwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJQYWNrYWdlQ29tcGFyZVZpZXciLCJzZW5kUGFnZVVybCIsImRhdGEiLCJjYWxsYmFjayIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzdWJzdHJpbmciLCJzZWFyY2giLCJyZXBsYWNlIiwidGVtcGxhdGUiLCJzZW5kQWdlbnRXaGF0c3VwUGFnZVVSTCIsInRoZW4iLCJyZXNwIiwic2V0VGltZW91dCIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJjYXRjaCIsImUiLCJzdGF0ZSIsImNoZWNrZWQiLCJ0YWJzVmFsdWUiLCJ2aWV3QWxsIiwiaXNEaWZmQ2hlY2tlZCIsImlzRGlmZlRlc3QiLCJyZWFkTW9yZSIsInBrZ0NscyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImxlbmd0aCIsImkiLCJhZGRFdmVudExpc3RlbmVyIiwibGVmdFNjcm9sbGVkVmFsIiwidGFyZ2V0Iiwic2Nyb2xsTGVmdCIsImoiLCJzY3JvbGxUbyIsImlkcyIsInBhY2thZ2VzIiwibWFwIiwicHVzaCIsImlkIiwibGFiIiwib25zY3JvbGwiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRUb3AiLCJzY3JlZW4iLCJ3aWR0aCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic2V0UGFja2FnZUlkIiwiaGlzdG9yeSIsInVybCIsInRlc3RfaWQiLCJ0ZXN0X25hbWUiLCJjbGVhckV4dHJhVGVzdHMiLCJ0ZXN0SWRzIiwibmV3X3Rlc3QiLCJleHRyYV90ZXN0IiwibGFiX2lkIiwidHlwZSIsIm5hbWUiLCJ0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSIsIkdUTSIsImdldFVzZXJJZCIsInNlbmRFdmVudCIsImN0cmxLZXkiLCJtZXRhS2V5IiwicHJldmVudERlZmF1bHQiLCJmaWVsZCIsImV2ZW50IiwidGFicyIsImNvbmNhdCIsInNlbGYiLCJmb3VuZCIsImZpbHRlciIsIngiLCJzZXRTdGF0ZSIsInBhY2thZ2VJZCIsImxhYklkIiwicGNrSW1nIiwicGNrTmFtZSIsImltZyIsIm5ld1VybCIsInBhcnNlIiwicGFja2FnZV9pZHMiLCJzcGxpdCIsIk9iamVjdCIsImVudHJpZXMiLCJrZXkiLCJwa2ciLCJwYXJzZUludCIsInRvZ2dsZWNvbXBhcmVDcml0ZXJpYSIsInJlbG9hZCIsImNhdGVnb3J5X2luZm8iLCJjYXRJZHMiLCJ0ZXN0X2luZm8iLCJjYXRlZ29yeV9pbmZvX2RhdGEiLCJpbmZvX2ZpcnN0IiwiY2F0X2ZpcnN0IiwiY2F0SWQiLCJ0ZXN0SWQiLCJmaW5hbElkcyIsImNhdF9pbmZvIiwiY291bnQiLCJ0ZXN0X2lkcyIsImsiLCJwa2dfdGVzdCIsIm4iLCJ0ZXN0c19pbmNsdWRlZCIsImluZm8iLCJhdmFpbGFibGUiLCJwYWNrYWdlX2lkIiwiY2F0X2lkIiwic2VsZWN0U2VhcmNoVHlwZSIsInBhcnNlZCIsImNhdGVnb3J5X2lkcyIsImF2YWlsYWJsZVRlc3QiLCJ0ZXN0RGF0YSIsImNhdF9pbmZvX2RhdGEiLCJzaG93Q29tcGFyZSIsImNhbm9uaWNhbFVybCIsIkNPTkZJRyIsIkFQSV9CQVNFX1VSTCIsInRpdGxlIiwiU1RPUkFHRSIsImlzQWdlbnQiLCJBU1NFVFNfQkFTRV9VUkwiLCJwYWRkaW5nTGVmdCIsInNlYXJjaF9jb250ZW50IiwiYm9yZGVyUmFkaXVzIiwiX19odG1sIiwidG9nZ2xlU2Nyb2xsIiwiYmluZCIsInRvZ2dsZVNob3dEaWZmIiwiaXNfY2F0ZWdvcnkiLCJjdXJzb3IiLCJhZGRNb3JlIiwidmlld0FsbENhdCIsInRvZ2dsZUNvbXBhcmVQYWNrYWdlcyIsInRodW1ibmFpbCIsInRvdGFsX3BhcmFtZXRlcnNfY291bnQiLCJib29rTm93IiwiZGlzY291bnRlZF9wcmljZSIsIm1ycCIsInBhZGRpbmdUb3AiLCJpbmRleE9mIiwiQnV0dG9uSGFuZGxlciIsImNhdF9jb3VudCIsImNhdGVnb3J5X3BhcmFtZXRlcl9jb3VudCIsInBhcmFtZXRlcnMiLCJ0ZXN0X3BhcmFtIiwibyIsImJvdHRvbV9jb250ZW50IiwicGFja2FnZUNvbXBhcmUiLCJyZXNldENvbXBhcmVEYXRhIiwicGFja2FnZV91cmwiLCJpbmNsdWRlcyIsImdldENvbXBhcmVMaXN0Iiwic2VsZWN0ZWRMb2NhdGlvbiIsInRlc3QiLCJtYXBTdGF0ZVRvUHJvcHMiLCJwYXNzZWRQcm9wcyIsIlNFQVJDSF9DUklURVJJQV9MQUJTIiwiY29tcGFyZV9wYWNrYWdlcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwic2VsZWN0ZWRJZHMiLCJzZWFyY2hCeVVybCIsImNiIiwiY3JpdGVyaWEiLCJyZXNldCIsImlzSG9tZVBhZ2UiLCJmb3JjZUFkZCIsImV4dHJhUGFyYW1zIl0sIm1h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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixRQUFRO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3U0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkM7QUFDRjtBQUNWO0FBQ0Y7QUFDTTtBQUNGO0FBQ0o7QUFDRjtBQUNJO0FBQ0Y7QUFDYztBQUNGO0FBQ1Y7QUFDRjtBQUNjO0FBQ0Y7QUFDSjtBQUNGO0FBQ0kiLCJmaWxlIjoiODAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuZXhwb3J0IGRlZmF1bHQgKHsgaXNWaXAgfSkgPT4ge1xuXHRyZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtgZHNjbG1lci1mdHIgJHtpc1ZpcD8nbWFyZ2luLWJvdHRvbS01NSc6Jyd9YH0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0yMFwiIHN0eWxlPXt7IGNvbG9yOiAnIzhhOGE4YScsIGZvbnRTaXplOiAxMCB9fSA+VGhlIFdlYnNpdGUgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgaW4gY2FzZSBvZiBhIG1lZGljYWwgZW1lcmdlbmN5IGFuZC8gb3IgY3JpdGljYWwgY2FyZSBhbmQgdGhlIHVzZXIgc2hvdWxkIGRpcmVjdGx5IGNvbnRhY3QgaGlzLyBoZXIgbWVkaWNhbCBzZXJ2aWNlIHByb3ZpZGVyIGZvciBQaHlzaWNhbCBFeGFtaW5hdGlvbi4gRG9jcHJpbWUgaXMgc29sZWx5IGEgdGVjaG5vbG9neSBwYXJ0bmVyLjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBmb290ZXItbmV3LWNvcHlyZ2h0XCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogNSB9fSA+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRvY3ByaW1lLmNvbSBDb3B5cmlnaHQgJmNvcHk7IDIwMjAuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5BbGwgcmlnaHRzIHJlc2VydmVkLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+RE9DUFJJTUUgVEVDSE5PTE9HSUVTIFBSSVZBVEUgTElNSVRFRDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+Q0lOIDogVTc0OTk5SFIyMDE2UFRDMDY0MzEyPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+KVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIExvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc1R5cGUgfHwgXCJsb2FkZXJDaXJjdWxhclwifSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1sb2FkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaUZyYW1lUG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0xMFwiPlJlZGlyZWN0aW5nIHlvdSB0byBQaGFybWVhc3kgd2Vic2l0ZS4uLjwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyXG4iLCJpbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi8uLi8uLi9jb21tb25zL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vLi4vLi4vY29tbW9ucy9SaWdodEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvSG9tZS9mb290ZXInXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IEhlbG1ldFRhZ3MgZnJvbSAnLi4vLi4vLi4vY29tbW9ucy9IZWxtZXRUYWdzJ1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi8uLi8uLi9jb25maWcnXG5pbXBvcnQgRGlzY2xhaW1lciBmcm9tICcuLi8uLi8uLi9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcydcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuXG5cbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbiAgY2xhc3MgUGFja2FnZUNvbXBhcmVWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgIFxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgIGNoZWNrZWQ6ZmFsc2UsXG4gICAgICAgICAgdGFic1ZhbHVlOltdLFxuICAgICAgICAgIHZpZXdBbGw6dHJ1ZSxcbiAgICAgICAgICBpc0RpZmZDaGVja2VkOmZhbHNlLFxuICAgICAgICAgIGlzRGlmZlRlc3Q6JycsXG4gICAgICAgICAgcmVhZE1vcmU6ICdzZWFyY2gtZGV0YWlscy1kYXRhLWxlc3MnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgbGV0IHBrZ0NscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BrZ0NscycpO1xuICAgICAgICAgaWYocGtnQ2xzICYmIHBrZ0Nscy5sZW5ndGgpe1xuICAgICAgICAgIGZvcih2YXIgaT0wO2k8cGtnQ2xzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgcGtnQ2xzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChlKT0+e1xuICAgICAgICAgICAgICBsZXQgbGVmdFNjcm9sbGVkVmFsID0gZS50YXJnZXQuc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgICAgICBmb3IodmFyIGo9MDtqPHBrZ0Nscy5sZW5ndGg7aisrKXtcbiAgICAgICAgICAgICAgICAgIHBrZ0Nsc1tqXS5zY3JvbGxMZWZ0ID0gbGVmdFNjcm9sbGVkVmFsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIH1cbiAgICAgIGxldCBpZHMgPSBbXVxuICAgICAgaWYodGhpcy5wcm9wcy5kYXRhLnBhY2thZ2VzKXtcbiAgICAgICAgdGhpcy5wcm9wcy5kYXRhLnBhY2thZ2VzLm1hcCgocGFja2FnZXMsIGkpID0+IHtcbiAgICAgICAgICAgIGlkcy5wdXNoKCdoaWRlX2F2XycrIHBhY2thZ2VzLmlkKydfJytwYWNrYWdlcy5sYWIuaWQpXG4gICAgICAgICAgICAvLyBpZHMucHVzaCgnaGlkZV9zdHJ0XycrIHBhY2thZ2VzLmlkKydfJytwYWNrYWdlcy5sYWIuaWQpXG4gICAgICAgICAgICAvLyBpZHMucHVzaCgnaGlkZV9jb3Vwb25fJysgcGFja2FnZXMuaWQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBpZiAoaWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0aWNreS1tdWx0aXBsZS1wa2dzJykgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RpY2t5LW11bHRpcGxlLXBrZ3MnKVswXSl7XG4gICAgICAgICAgICAgIGxldCBzY3JvbGxIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGlja3ktbXVsdGlwbGUtcGtncycpWzBdLm9mZnNldFRvcFxuICAgICAgICAgICAgICBpZHMubWFwKChpZCxpKT0+e1xuICAgICAgICAgICAgICAgIGlmIChzY3JvbGxIZWlnaHQgPjAgJiYgd2luZG93LnNjcmVlbi53aWR0aCA8IDc2OCkge1xuICAgICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dEaWZmJykuY2xhc3NMaXN0LmFkZChcImVhc2VoaWRlYWRkXCIpXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuY2xhc3NMaXN0LmFkZChcImVhc2VoaWRlYWRkXCIpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93RGlmZicpLmNsYXNzTGlzdC5yZW1vdmUoXCJlYXNlaGlkZWFkZFwiKVxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmNsYXNzTGlzdC5yZW1vdmUoXCJlYXNlaGlkZWFkZFwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSkgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2hvd0xhYnMoaWQpe1xuICAgICAgdGhpcy5wcm9wcy5zZXRQYWNrYWdlSWQoaWQsIHRydWUpXG4gICAgICBcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3NlYXJjaHBhY2thZ2VzP2lzQ29tcGFyYWJsZT10cnVlJylcbiAgICAgIH0sIDEwMClcbiAgICB9XG5cbiAgICBib29rTm93KGlkLCB1cmwsIHRlc3RfaWQsIHRlc3RfbmFtZSwgZSl7IC8vIHJlZGlyZWN0IHRvIHBhY2thZ2UgYm9va2luZyBzdW1tYXJ5XG4gICAgICB0aGlzLnByb3BzLmNsZWFyRXh0cmFUZXN0cygpXG4gICAgICAgIGxldCB0ZXN0SWRzID0gdGVzdF9pZFxuICAgICAgICBsZXQgbmV3X3Rlc3QgPSB7fVxuICAgICAgICBuZXdfdGVzdC5leHRyYV90ZXN0ID0gdHJ1ZVxuICAgICAgICBuZXdfdGVzdC5sYWJfaWQgPSBpZFxuICAgICAgICBuZXdfdGVzdC50eXBlID0gJ3Rlc3QnXG4gICAgICAgIG5ld190ZXN0Lm5hbWUgPSB0ZXN0X25hbWVcbiAgICAgICAgbmV3X3Rlc3QuaWQgPSB0ZXN0X2lkXG4gICAgICAgIHRoaXMucHJvcHMudG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEoJ3Rlc3QnLCBuZXdfdGVzdCwgdHJ1ZSlcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0NvbXBhcmVCb29rTm93Q2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjb21wYXJlLWJvb2tub3ctY2xpY2snLCAnTGFiSWQnOiBpZCAsICd0ZXN0SWQnOnRlc3RfaWRcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgIGlmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSB7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHt1cmx9YClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9sYWIvJHtpZH0vYm9va2ApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBCdXR0b25IYW5kbGVyKGZpZWxkLCBldmVudCkge1xuICAgICAgbGV0IHRhYnMgPSBbXS5jb25jYXQodGhpcy5zdGF0ZS50YWJzVmFsdWUpXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBmb3VuZCA9IGZhbHNlXG4gICAgICB0YWJzID0gdGFicy5maWx0ZXIoKHgpID0+IHtcbiAgICAgICAgICBpZiAoeCA9PSBmaWVsZCkge1xuICAgICAgICAgICAgICBmb3VuZCA9IHRydWVcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9KVxuICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgIHRhYnMucHVzaChmaWVsZClcbiAgICAgIH1cblxuICAgICAgc2VsZi5zZXRTdGF0ZSh7IHRhYnNWYWx1ZTogdGFicyB9KVxuICAgIH1cblxuICAgIHRvZ2dsZUNvbXBhcmVQYWNrYWdlcyhwYWNrYWdlSWQsbGFiSWQscGNrSW1nLHBja05hbWUpe1xuICAgICAgbGV0IHBhY2thZ2VzPXt9XG4gICAgICBwYWNrYWdlcy5pZD1wYWNrYWdlSWRcbiAgICAgIHBhY2thZ2VzLmxhYl9pZD1sYWJJZFxuICAgICAgcGFja2FnZXMuaW1nPXBja0ltZ1xuICAgICAgcGFja2FnZXMubmFtZT1wY2tOYW1lXG4gICAgICBsZXQgbmV3VXJsID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICBsZXQgcGFja2FnZV9pZHMgPSBbXVxuICAgICAgaWYobmV3VXJsLnBhY2thZ2VfaWRzKXtcbiAgICAgICAgICBwYWNrYWdlX2lkcyA9IG5ld1VybC5wYWNrYWdlX2lkcy5zcGxpdCgnLCcpXG4gICAgICB9XG4gICAgICBsZXQgaWRzID0gJydcbiAgICAgIGxldCBkYXRhID0gW11cbiAgICAgIGlmKHBhY2thZ2VfaWRzLmxlbmd0aCA+IDApe1xuICAgICAgICBPYmplY3QuZW50cmllcyhwYWNrYWdlX2lkcykubWFwKGZ1bmN0aW9uIChba2V5LCBwa2ddKSB7XG4gICAgICAgICAgaWRzID0gcGtnLnNwbGl0KCctJylcbiAgICAgICAgICBpZihwYXJzZUludChpZHNbMF0pID09IHBhcnNlSW50KHBhY2thZ2VJZCkgJiYgcGFyc2VJbnQoaWRzWzFdKSA9PSBwYXJzZUludChsYWJJZCkpe1xuICAgICAgICAgICAgXG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBkYXRhLnB1c2goaWRzWzBdKyctJytpZHNbMV0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy50b2dnbGVjb21wYXJlQ3JpdGVyaWEocGFja2FnZXMpXG4gICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3BhY2thZ2UvY29tcGFyZT9wYWNrYWdlX2lkcz0nK2RhdGEpXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9XG5cbiAgICB2aWV3QWxsKCl7XG4gICAgICBsZXQgaWRzID1bXVxuICAgICAgICBpZih0aGlzLnN0YXRlLnZpZXdBbGwpe1xuICAgICAgICB0aGlzLnByb3BzLmRhdGEuY2F0ZWdvcnlfaW5mby5tYXAoKGNhdElkcyxpKSA9PntcbiAgICAgICAgICAgIGlkcy5wdXNoKGNhdElkcy5pZClcbiAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHt0YWJzVmFsdWUgOiBpZHMsIHZpZXdBbGw6IXRoaXMuc3RhdGUudmlld0FsbH0pXG4gICAgfVxuXG4gICAgdG9nZ2xlU2hvd0RpZmYoKXsgLy8gc2hvdyBkaWZmZXJuY2UgYi93IHBhY2thZ2VzXG4gICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnU2hvV0RpZmZlcmVuY2VDbGljaycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3Nob3ctZGlmZmVyZW5jZS1jbGljaydcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgbGV0IHRlc3RJZHM9W11cbiAgICAgIGxldCBjYXRJZHMgPSBbXVxuICAgICAgbGV0IHRlc3RfaW5mbz1bXVxuICAgICAgbGV0IGNhdGVnb3J5X2luZm9fZGF0YSA9IFtdXG4gICAgICBsZXQgaW5mb19maXJzdD0nJ1xuICAgICAgbGV0IGNhdF9maXJzdCA9IFtdXG4gICAgICBsZXQgY2F0SWQgPSAnJ1xuICAgICAgbGV0IHRlc3RJZCA9ICcnXG4gICAgICBsZXQgZmluYWxJZHMgPSBbXVxuXG4gICAgICB0aGlzLnByb3BzLmRhdGEuY2F0ZWdvcnlfaW5mby5tYXAoKGNhdF9pbmZvLCBpKSA9PiB7XG4gICAgICAgIHRlc3RfaW5mbyA9IFtdXG4gICAgICAgIGluZm9fZmlyc3QgPSAnJ1xuICAgICAgICBsZXQgY291bnQgPSAwXG4gICAgICAgIGNhdF9pbmZvLnRlc3RfaWRzLm1hcCgodGVzdF9pZCwgaykgPT4ge1xuICAgICAgICAgIHRlc3RfaW5mbyA9IFtdXG4gICAgICAgICAgICB0aGlzLnByb3BzLmRhdGEucGFja2FnZXMubWFwKChwa2dfdGVzdCwgbikgPT4ge1xuICAgICAgICAgICAgICB0ZXN0X2luZm89dGVzdF9pbmZvLmNvbmNhdChwa2dfdGVzdC50ZXN0c19pbmNsdWRlZC5maWx0ZXIoeD0+IHgudGVzdF9pZCA9PSB0ZXN0X2lkKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHRlc3RfaW5mby5tYXAoKGluZm8saykgPT57XG4gICAgICAgICAgaWYoaz09MCl7XG4gICAgICAgICAgICB0ZXN0SWQgPSBpbmZvLnRlc3RfaWRcbiAgICAgICAgICAgIGluZm9fZmlyc3QgPSBpbmZvLmF2YWlsYWJsZSAgXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGlmKGsgIT09MCAmJiBpbmZvX2ZpcnN0ID09PSBpbmZvLmF2YWlsYWJsZSl7XG4gICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgfSBcbiAgICAgICAgICBpZihjb3VudCA9PSAodGVzdF9pbmZvLmxlbmd0aCAtIDEpKXtcbiAgICAgICAgICAgIHRlc3RJZHMucHVzaCh0ZXN0SWQpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5wcm9wcy5kYXRhLmNhdGVnb3J5X2luZm8ubWFwKChjYXRfaW5mbywgaSkgPT4ge1xuICAgICAgICBjYXRlZ29yeV9pbmZvX2RhdGEgPSBbXVxuICAgICAgICBsZXQgY291bnQgID0gMFxuICAgICAgICBjYXRfaW5mby50ZXN0X2lkcy5tYXAoKHRlc3RfaWQsIGspID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZGF0YS5wYWNrYWdlcy5tYXAoKHBrZ190ZXN0LCBuKSA9PiB7XG4gICAgICAgICAgICAgIGNhdGVnb3J5X2luZm9fZGF0YSA9IGNhdGVnb3J5X2luZm9fZGF0YS5jb25jYXQocGtnX3Rlc3QudGVzdHNfaW5jbHVkZWQuZmlsdGVyKHg9PiB4LnRlc3RfaWQgPT0gdGVzdF9pZCkpXG4gICAgICAgICAgICAgIGNhdGVnb3J5X2luZm9fZGF0YVtuXS5wYWNrYWdlX2lkID0gcGtnX3Rlc3QuaWRcbiAgICAgICAgICAgICAgY2F0ZWdvcnlfaW5mb19kYXRhW25dLmNhdF9pZCA9IGNhdF9pbmZvLmlkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBjYXRlZ29yeV9pbmZvX2RhdGEubWFwKChpbmZvLGspID0+e1xuICAgICAgICAgIGlmKGs9PTApe1xuICAgICAgICAgICAgY2F0SWQgPSBpbmZvLmNhdF9pZFxuXG4gICAgICAgICAgICBpbmZvX2ZpcnN0ID0gaW5mby5hdmFpbGFibGUgIFxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBpZihrICE9PTAgJiYgaW5mb19maXJzdCA9PT0gaW5mby5hdmFpbGFibGUpe1xuICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihjb3VudCA9PSAoY2F0ZWdvcnlfaW5mb19kYXRhLmxlbmd0aCAtIDEpKXtcbiAgICAgICAgICAgIGNhdElkcy5wdXNoKGNhdElkKVxuICAgICAgICAgIH0gICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgICBmaW5hbElkcyA9IFsuLi5jYXRJZHMsIC4uLnRlc3RJZHNdXG4gICAgICBpZih0aGlzLnN0YXRlLmlzRGlmZkNoZWNrZWQpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0RpZmZUZXN0OltdLGlzRGlmZkNoZWNrZWQ6IXRoaXMuc3RhdGUuaXNEaWZmQ2hlY2tlZH0pXG4gICAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNEaWZmVGVzdDpmaW5hbElkcyxpc0RpZmZDaGVja2VkOiF0aGlzLnN0YXRlLmlzRGlmZkNoZWNrZWR9KVxuICAgICAgfVxuICAgICAgXG4gICAgfVxuXG4gICAgYWRkTW9yZSgpe1xuICAgICAgdGhpcy5wcm9wcy5zZWxlY3RTZWFyY2hUeXBlKCdsYWInKVxuICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9zZWFyY2g/ZnJvbT1oZWFkZXInKVxuICAgIH1cblxuICAgIHRvZ2dsZVNjcm9sbCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlYWRNb3JlOiAnc2VhcmNoLWRldGFpbHMtZGF0YS1sZXNzJyB9KVxuICAgIH1cblxuICAgIHZpZXdBbGxDYXQoKXtcbiAgICAgIGxldCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgIGlmKHBhcnNlZC5jYXRlZ29yeV9pZHMpe1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3NlYXJjaHBhY2thZ2VzP3BhY2thZ2VfY2F0ZWdvcnlfaWRzPScrIHBhcnNlZC5jYXRlZ29yeV9pZHMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgc2VuZFBhZ2VVcmwgPSAoKSA9PiB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgY2FsbGJhY2s6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdWJzdHJpbmcoMSkgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoLyYvZywnKicpLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdnb2xkX2dlbmVyYWxfdGVtcGxhdGUnXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5zZW5kQWdlbnRXaGF0c3VwUGFnZVVSTChkYXRhKS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiU2VudCBTdWNjZXNzZnVsbHlcIiB9KVxuICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlRyeSBhZ2FpbiFcIiB9KVxuICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGxldCBzZWxmPXRoaXNcbiAgICAgIGxldCBhdmFpbGFibGVUZXN0PSBbXVxuICAgICAgbGV0IHRlc3REYXRhPSBbXVxuICAgICAgbGV0IGNhdF9pbmZvX2RhdGE9W11cbiAgICBpZih0aGlzLnByb3BzLnNob3dDb21wYXJlICYmIHRoaXMucHJvcHMuZGF0YSAhPSBudWxsKXtcbiAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogNTQgfX0+XG4gICAgICAgICAgICAgIDxIZWxtZXRUYWdzIHRhZ3NEYXRhPXt7XG4gICAgICAgICAgICAgICAgICAgIGNhbm9uaWNhbFVybDogYCR7Q09ORklHLkFQSV9CQVNFX1VSTH0ke3RoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWV9YCxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGAke3RoaXMucHJvcHMuZGF0YS50aXRsZSB8fCAnJ31gLFxuICAgICAgICAgICAgICAgICAgICAvLyBkZXNjcmlwdGlvbjogYCR7dGhpcy5wcm9wcy5kYXRhLmRlc2NyaXB0aW9uIHx8ICcnfWBcbiAgICAgICAgICAgICAgICB9fSBub0luZGV4PXtmYWxzZX0gLz4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIHNob3dQYWNrYWdlU3RyaXA9e3RydWV9Lz5cbiAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicGtnQ29tYXByZSBjb250YWluZXIgcGtnTXJnbkFkanN0XCIgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxMZWZ0QmFyIC8+XG4gICAgICAgICAgICAgICAgICAgIHsvKmNvbXBhcmUgc2NyZWVuKi99XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBTVE9SQUdFLmlzQWdlbnQoKT9cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2VuZFBhZ2VVcmx9IGNsYXNzTmFtZT1cIndodHNhcHBQYWdlc1wiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy93YS1sb2dvLnN2Zyd9IC8+U2VuZCBvbiBXaGF0c2FwcDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHBhZC1hbGwtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRhdGEudGl0bGU/XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ1NsaWRlckhlYWRpbmcgbXJ0LTIwXCI+PGg1IHN0eWxlPXt7Zm9udFNpemU6JzE2cHgnLCBwYWRkaW5nTGVmdDonMTBweCd9fSA+e3RoaXMucHJvcHMuZGF0YS50aXRsZX08L2g1PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDonJ31cbiAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kYXRhLnNlYXJjaF9jb250ZW50P1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0LWNhcmQtY29sbHBhc2VcIiBzdHlsZT17e2JvcmRlclJhZGl1czogJzBweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5yZWFkTW9yZX0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aGlzLnByb3BzLmRhdGEuc2VhcmNoX2NvbnRlbnQgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucmVhZE1vcmUgJiYgdGhpcy5zdGF0ZS5yZWFkTW9yZSAhPSAnJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJkLW1vcmVcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgcmVhZE1vcmU6ICcnIH0pfT5SZWFkIE1vcmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yZWFkTW9yZSA9PSAnJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJkLW1vcmVcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVNjcm9sbC5iaW5kKHRoaXMpfT5SZWFkIExlc3M8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1tdWx0aXBsZS1wa2dzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm11bHRpLXBrZy1jbXByZSBlYXNlLWhpZGVcIiBpZD1cInNob3dEaWZmXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRhdGEucGFja2FnZXMgJiYgdGhpcy5wcm9wcy5kYXRhLnBhY2thZ2VzLmxlbmd0aCA+IDE/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0Z2xlLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInN3aXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0Z2xlLWJ0bi10eHRcIj4gU2hvdyBEaWZmZXJlbmNlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5pc0RpZmZDaGVja2VkfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZVNob3dEaWZmLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlciByb3VuZFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDonJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGF0YS5wYWNrYWdlcyAmJiB0aGlzLnByb3BzLmRhdGEucGFja2FnZXMubGVuZ3RoICE9IDEgJiYgdGhpcy5wcm9wcy5kYXRhLnBhY2thZ2VzLmxlbmd0aCA8NSAmJiAhdGhpcy5wcm9wcy5pc19jYXRlZ29yeT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmFkZE1vcmUuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwiYWRkLW1vcmUtcGFja2FnZXNcIj4gKyBBZGQgTW9yZSA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6Jyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlzX2NhdGVnb3J5P1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmlldy1tb3JlXCIgb25DbGljaz17dGhpcy52aWV3QWxsQ2F0LmJpbmQodGhpcyl9IHN0eWxlPXt7Y29sb3I6ICcjZjc4NjMxJyxjdXJzb3I6ICdwb2ludGVyJ319PiBWaWV3IEFsbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJtdWx0aXBsZS1wa2dzXCIrICh0aGlzLnByb3BzLmRhdGEucGFja2FnZXMubGVuZ3RoIDw9IDI/JyBwa2JjbHNUd28nOnRoaXMucHJvcHMuZGF0YS5wYWNrYWdlcy5sZW5ndGggPD0gMz8nIHBrYmNsc1RocmVlJzp0aGlzLnByb3BzLmRhdGEucGFja2FnZXMubGVuZ3RoIDw9IDQ/JyBwa2JjbHNGb3VyJzonJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGtnQ2xzIHBrYmNsc1wiPiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRhdGEucGFja2FnZXM/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRhdGEucGFja2FnZXMubWFwKChwYWNrYWdlcywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aX0gaWQ9eydwa2dfJytwYWNrYWdlcy5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaXNfY2F0ZWdvcnk/Jyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWFnZXMvcGFja2FnZUNvbXBhcmUvcmVkLWN1dC5wbmdcIn0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiZW5kLWRpdlwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ29tcGFyZVBhY2thZ2VzLmJpbmQodGhpcyxwYWNrYWdlcy5pZCxwYWNrYWdlcy5sYWIuaWQscGFja2FnZXMubGFiLnRodW1ibmFpbCxwYWNrYWdlcy5sYWIubmFtZSl9Lz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctaGRcIj57cGFja2FnZXMubmFtZX0ge3BhY2thZ2VzLnRvdGFsX3BhcmFtZXRlcnNfY291bnQ+MD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgKCR7cGFja2FnZXMudG90YWxfcGFyYW1ldGVyc19jb3VudH0gdGVzdHMpYDonJ30gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwicGtnLWhkLWJ5XCIgaWQ9e1wiaGlkZV9hdl9cIiArIHBhY2thZ2VzLmlkfT5BdmFpbGFibGUgaW4ge3BhY2thZ2VzLnRvdGFsX2xhYnNfYXZhaWxhYmxlfSBMYWJzPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnLWhkLWJ5IGZ3LTUwMCBlYXNlLWhpZGVcIiBpZD17XCJoaWRlX2F2X1wiICsgcGFja2FnZXMuaWQrJ18nK3BhY2thZ2VzLmxhYi5pZH0+e3BhY2thZ2VzLmxhYi5uYW1lfTwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aDMgY2xhc3NOYW1lPVwibGFiLWZsdHItZGMtbmFtZSBmdy01MDAgcGtnLWluY2x1ZGVcIj57cGFja2FnZXMudG90YWxfcGFyYW1ldGVyc19jb3VudH0gVGVzdHMgSW5jbHVkZWQ8L2gzPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicGtnLWNhcmQtcHJpY2VcIj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPHAgY2xhc3NOYW1lPVwicGtnLWRpc2NvdW50Q3BuXCIgaWQ9e1wiaGlkZV9jb3Vwb25fXCIrIHBhY2thZ2VzLmlkfT5JbmNsdWRlcyBjb3Vwb248L3A+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuYm9va05vdy5iaW5kKHRoaXMscGFja2FnZXMubGFiLmlkLCcnLHBhY2thZ2VzLmlkLHBhY2thZ2VzLmxhYi5uYW1lKX0+PGJ1dHRvbiBjbGFzc05hbWU9XCJwa2ctYnRuLW53XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIiBpZD17XCJoaWRlX3N0cnRfXCIgKyBwYWNrYWdlcy5pZH0+4oK5IHtwYXJzZUludChwYWNrYWdlcy5kaXNjb3VudGVkX3ByaWNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQocGFja2FnZXMuZGlzY291bnRlZF9wcmljZSkgIT09IHBhcnNlSW50KHBhY2thZ2VzLm1ycCk/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGtnLWN1dC1wcmljZVwiIHN0eWxlPXt7Y29sb3I6JyNmZmZmZmYnfX0+4oK5IHtwYXJzZUludChwYWNrYWdlcy5tcnApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxpbWcgc3R5bGU9e3t3aWR0aDogJzE2cHgnLCdtYXJnaW5MZWZ0JzogJzVweCd9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcGxvZy5wbmcnfS8+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kYXRhLnBhY2thZ2VzICYmIHRoaXMucHJvcHMuZGF0YS5wYWNrYWdlcy5sZW5ndGggPT0gMSAmJiAhdGhpcy5wcm9wcy5pc19jYXRlZ29yeT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMuYWRkTW9yZS5iaW5kKHRoaXMpfSBzdHlsZT17e2N1cnNvcjoncG9pbnRlcicscGFkZGluZ1RvcDozMCwgcGFkZGluZ0JvdHRvbTozMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZG5ld3BrZ1wiPjxzcGFuIGNsYXNzTmFtZT1cImFkZC1wbHVzXCI+Kzwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWRkbmV3cGtnLXR4dFwiPkFkZCBvbmUgbW9yZSA8YnIgLz50byBjb21wYXJlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1jbXByZS1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGUtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhpZGUtYWxsXCIgb25DbGljaz17dGhpcy52aWV3QWxsLmJpbmQodGhpcyl9Pnt0aGlzLnN0YXRlLnZpZXdBbGw/J0hpZGUgQWxsJzonVmlldyBBbGwnfSA8aW1nIGNsYXNzTmFtZT17IXRoaXMuc3RhdGUudmlld0FsbD8nYWNyZC1hcnctcm90YXRlJyA6ICdhY3JkLXNob3cnfSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltYWdlcy9kb3duLWFycm93LW8ucG5nXCJ9IGFsdD1cIlwiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGF0YS5jYXRlZ29yeV9pbmZvP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kYXRhLmNhdGVnb3J5X2luZm8ubWFwKChjYXRfaW5mbywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicGtnLWNhcmQtY29udGFpbmVyIG1iLTNcIiArICh0aGlzLnN0YXRlLmlzRGlmZkNoZWNrZWQgJiYgdGhpcy5zdGF0ZS5pc0RpZmZUZXN0LmluZGV4T2YoY2F0X2luZm8uaWQpICE9IC0xID8nIGQtbm9uZSc6JycpfSBrZXk9e2l9IGlkPXsnY2F0XycrY2F0X2luZm8uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1jcmQtaGVhZGVyIGxpZ2h0LW9ybmctaGVhZGVyXCIgb25DbGljaz17dGhpcy5CdXR0b25IYW5kbGVyLmJpbmQodGhpcyxjYXRfaW5mby5pZCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjYXRfaW5mby5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3RoaXMuc3RhdGUudGFic1ZhbHVlLmluZGV4T2YoY2F0X2luZm8uaWQpID4gLTEgPyAnIGFjcmQtc2hvdyBzcGFuLWltZycgOiAnYWNyZC1hcnctcm90YXRlIHNwYW4taW1nJ30+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltYWdlcy91cC1hcnJvdy5wbmdcIn0gYWx0PVwiXCIgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS50YWJzVmFsdWUuaW5kZXhPZihjYXRfaW5mby5pZCkgPiAtMSA/ICdkLW5vbmUnIDogJyd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInRvcC1oZWFkLWluZm8gbXVsdGlwbGUtcGtncyBwYXJlbnQtaW5mbyBjYXRlZ29yeS1kb25lXCIgKyAodGhpcy5wcm9wcy5kYXRhLnBhY2thZ2VzLmxlbmd0aCA8PSAyPycgcGtiY2xzVHdvJzp0aGlzLnByb3BzLmRhdGEucGFja2FnZXMubGVuZ3RoIDw9IDM/JyBwa2JjbHNUaHJlZSc6dGhpcy5wcm9wcy5kYXRhLnBhY2thZ2VzLmxlbmd0aCA8PSA0PycgcGtiY2xzRm91cic6JycpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwa2dDbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGF0YS5wYWNrYWdlcy5tYXAoKGNhdF9jb3VudCwgaikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0X2luZm9fZGF0YSA9IGNhdF9jb3VudC5jYXRlZ29yeV9wYXJhbWV0ZXJfY291bnQuZmlsdGVyKHg9PiB4LmlkPT1jYXRfaW5mby5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhdF9pbmZvX2RhdGFbMF0uY291bnQgPiAwP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9e2NhdF9pbmZvX2RhdGFbMF0uaWR9IGtleT17an0+e2NhdF9pbmZvX2RhdGFbMF0uY291bnR9IHtjYXRfaW5mb19kYXRhWzBdLmNvdW50ID09IDE/J3Rlc3QnOid0ZXN0cyd9IDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8bGkgaWQ9e2NhdF9pbmZvX2RhdGFbMF0uaWR9IGtleT17an0+TmlsPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdF9pbmZvLnRlc3RfaWRzLm1hcCgodGVzdF9pZCwgaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3REYXRhPSBzZWxmLnByb3BzLmRhdGEudGVzdF9pbmZvLmZpbHRlcih4PT4geC5pZCA9PSB0ZXN0X2lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2t9IGlkPSB7dGVzdERhdGFbMF0uaWR9IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5pc0RpZmZDaGVja2VkICYmIHRoaXMuc3RhdGUuaXNEaWZmVGVzdC5pbmRleE9mKHRlc3REYXRhWzBdLmlkKSAhPSAtMT8nIGQtbm9uZSc6Jyd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXN0RGF0YVswXS5wYXJhbWV0ZXJzLmxlbmd0aCA+IDA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnLWNyZC1oZWFkZXIgbGlnaHQtb3JuZy1oZWFkZXIgZ3JleS1oZWFkIHRlc3QtZG9uZVwiIG9uQ2xpY2s9e3RoaXMuQnV0dG9uSGFuZGxlci5iaW5kKHRoaXMsdGVzdERhdGFbMF0uaWQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGVzdERhdGFbMF0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnRhYnNWYWx1ZS5pbmRleE9mKHRlc3REYXRhWzBdLmlkKSA+IC0xID8gJ2FjcmQtYXJ3LXJvdGF0ZSBzcGFuLWltZycgOiAnYWNyZC1zaG93IHNwYW4taW1nJ30+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltYWdlcy91cC1hcnJvdy5wbmdcIn0gYWx0PVwiXCIgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnLWNyZC1oZWFkZXIgbGlnaHQtb3JuZy1oZWFkZXIgZ3JleS1oZWFkIHRlc3QtZG9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0ZXN0RGF0YVswXS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInRvcC1oZWFkLWluZm8gbXVsdGlwbGUtcGtncyBtdWx0aXBsZS1wa2dzLWRldGFpbHNcIiArICh0aGlzLnByb3BzLmRhdGEucGFja2FnZXMubGVuZ3RoIDw9IDI/JyBwa2JjbHNUd28nOnRoaXMucHJvcHMuZGF0YS5wYWNrYWdlcy5sZW5ndGggPD0gMz8nIHBrYmNsc1RocmVlJzp0aGlzLnByb3BzLmRhdGEucGFja2FnZXMubGVuZ3RoIDw9IDQ/JyBwa2JjbHNGb3VyJzonJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwa2dDbHMgdGVzdFBhcmFtIG5ld1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3BzLmRhdGEucGFja2FnZXMubWFwKChwa2dfdGVzdCwgbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVUZXN0PXBrZ190ZXN0LnRlc3RzX2luY2x1ZGVkLmZpbHRlcih4PT4geC50ZXN0X2lkID09IHRlc3RfaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdmFpbGFibGVUZXN0WzBdLmF2YWlsYWJsZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtufT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWFnZXMvcGFja2FnZUNvbXBhcmUvY2hlY2stMDEuc3ZnXCJ9IHN0eWxlPXt7d2lkdGg6JzE0cHgnfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1hZ2VzL3BhY2thZ2VDb21wYXJlL2Nyb3NzLTAxLnN2Z1wifSBzdHlsZT17e3dpZHRoOicxNHB4J319Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrKzF9IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS50YWJzVmFsdWUuaW5kZXhPZih0ZXN0RGF0YVswXS5pZCkgPiAtMSA/ICcnIDogJ2Qtbm9uZSd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ0b3AtaGVhZC1pbmZvIG11bHRpcGxlLXBrZ3MgbXVsdGlwbGUtcGtncy1kZXRhaWxzXCIgKyAodGhpcy5wcm9wcy5kYXRhLnBhY2thZ2VzLmxlbmd0aCA8PSAyPycgcGtiY2xzVHdvJzp0aGlzLnByb3BzLmRhdGEucGFja2FnZXMubGVuZ3RoIDw9IDM/JyBwa2JjbHNUaHJlZSc6dGhpcy5wcm9wcy5kYXRhLnBhY2thZ2VzLmxlbmd0aCA8PSA0PycgcGtiY2xzRm91cic6JycpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGtnQ2xzIHRlc3RQYXJhbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3BzLmRhdGEucGFja2FnZXMubWFwKChwa2dfdGVzdCwgbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVUZXN0PXBrZ190ZXN0LnRlc3RzX2luY2x1ZGVkLmZpbHRlcih4PT4geC50ZXN0X2lkID09IHRlc3RfaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdmFpbGFibGVUZXN0WzBdLmF2YWlsYWJsZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3REYXRhWzBdLnBhcmFtZXRlcnMubGVuZ3RoID4gMD90ZXN0RGF0YVswXS5wYXJhbWV0ZXJzLm1hcCgodGVzdF9wYXJhbSxvKSA9PnsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtvfT57dGVzdF9wYXJhbX08L3NwYW4+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3REYXRhWzBdLnBhcmFtZXRlcnMubGVuZ3RoID4gMD90ZXN0RGF0YVswXS5wYXJhbWV0ZXJzLm1hcCgodGVzdF9wYXJhbSxvKSA9PnsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtvfT48aW1nIGNsYXNzTmFtZT1cIngtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWFnZXMvcGFja2FnZUNvbXBhcmUvY3Jvc3MtMDEuc3ZnXCJ9IHN0eWxlPXt7d2lkdGg6JzE0cHgnfX0vPjwvc3Bhbj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRhdGEucGFja2FnZXM/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnLWNhcmQtY29udGFpbmVyIG1iLTMgYXZhaWxhYmxlLWRvbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widG9wLWhlYWQtaW5mbyBtdWx0aXBsZS1wa2dzIHBhcmVudC1pbmZvIGNhdGVnb3J5LWRvbmVcIiArICh0aGlzLnByb3BzLmRhdGEucGFja2FnZXMubGVuZ3RoIDw9IDI/JyBwa2JjbHNUd28nOnRoaXMucHJvcHMuZGF0YS5wYWNrYWdlcy5sZW5ndGggPD0gMz8nIHBrYmNsc1RocmVlJzp0aGlzLnByb3BzLmRhdGEucGFja2FnZXMubGVuZ3RoIDw9IDQ/JyBwa2JjbHNGb3VyJzonJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwa2dDbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kYXRhLnBhY2thZ2VzLm1hcCgocGFja2csIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFja2cudG90YWxfbGFic19hdmFpbGFibGUgPjAgPzxsaSBvbkNsaWNrPXt0aGlzLnNob3dMYWJzLmJpbmQodGhpcyxwYWNrZy5pZCl9IHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PkF2YWlsYWJsZSBpbiA8c3BhbiBzdHlsZT17e2NvbG9yOicjZjc4NjMxJ319PntwYWNrZy50b3RhbF9sYWJzX2F2YWlsYWJsZX08L3NwYW4+IG1vcmUgbGFiczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxsaT5OaWw8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ31cbiAgICAgICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGF0YS5ib3R0b21fY29udGVudCAmJiB0aGlzLnByb3BzLmRhdGEuYm90dG9tX2NvbnRlbnQubGVuZ3RoP1xuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIG1ydC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHQtY2FyZC1jb2xscGFzZVwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGhpcy5wcm9wcy5kYXRhLmJvdHRvbV9jb250ZW50IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgPERpc2NsYWltZXIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgICAgfVxuICAgIH1cbn1cbiAgZXhwb3J0IGRlZmF1bHQgUGFja2FnZUNvbXBhcmVWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL1JpZ2h0QmFyJ1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvSG9tZS9mb290ZXInXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXInXG5cbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbmltcG9ydCB7IGdldENvbXBhcmVMaXN0LCB0b2dnbGVjb21wYXJlQ3JpdGVyaWEsIHNldFBhY2thZ2VJZCwgc2VsZWN0U2VhcmNoVHlwZSwgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEsIGNsZWFyRXh0cmFUZXN0cywgc2VuZEFnZW50V2hhdHN1cFBhZ2VVUkwgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IHsgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3VybHRvU3RhdGUnXG5pbXBvcnQgUGFja2FnZUNvbXBhcmVWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGlhZ25vc2lzL3NlYXJjaFBhY2thZ2VzL3BhY2thZ2VDb21wYXJlL3BhY2thZ2VDb21wYXJlVmlldy5qcydcblxuICBjbGFzcyBwYWNrYWdlQ29tcGFyZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgIHNob3dDb21wYXJlOmZhbHNlLFxuICAgICAgICAgIGRhdGE6bnVsbCxcbiAgICAgICAgICBpc19jYXRlZ29yeTpmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCByZXNldENvbXBhcmVEYXRhPVtdXG4gICAgICAgIGxldCBkYXRhID0gW11cbiAgICAgICAgbGV0IHBhY2thZ2VfaWRzXG4gICAgICAgIGxldCBwYWNrYWdlX3VybCA9ICcnXG4gICAgICAgIGxldCBjYXRlZ29yeV9pZHMgPSAgbnVsbFxuICAgICAgICBpZihwYXJzZWQucGFja2FnZV9pZHMpe1xuICAgICAgICAgIHBhY2thZ2VfaWRzID0gcGFyc2VkLnBhY2thZ2VfaWRzLnNwbGl0KCcsJykgIFxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCItaHBjcFwiKSl7XG4gICAgICAgICAgcGFja2FnZV91cmwgPSB0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJylcbiAgICAgICAgICBwYWNrYWdlX3VybCA9IHBhY2thZ2VfdXJsWzFdXG4gICAgICAgIH1cbiAgICAgICAgaWYocGFyc2VkLmNhdGVnb3J5X2lkcyl7XG4gICAgICAgICAgY2F0ZWdvcnlfaWRzID0gcGFyc2VkLmNhdGVnb3J5X2lkc1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzX2NhdGVnb3J5OnRydWV9KVxuICAgICAgICB9XG4gICAgICAgIGxldCBpZHMgPSAnJ1xuICAgICAgICBpZihwYWNrYWdlX2lkcyB8fCBwYWNrYWdlX3VybCB8fCBjYXRlZ29yeV9pZHMpe1xuICAgICAgICAgIGlmKHBhY2thZ2VfaWRzICYmIHBhY2thZ2VfaWRzLmxlbmd0aCA+IDAgJiYgcGFja2FnZV9pZHMgIT1cIlwiKXtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHBhY2thZ2VfaWRzKS5tYXAoZnVuY3Rpb24gKFtrZXksIHBrZ10pIHtcbiAgICAgICAgICAgICAgaWRzID0gcGtnLnNwbGl0KCctJylcbiAgICAgICAgICAgICAgZGF0YS5wdXNoKHtwYWNrYWdlX2lkOmlkc1swXSwgbGFiX2lkOiBpZHNbMV19KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5wcm9wcy5nZXRDb21wYXJlTGlzdChkYXRhLHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbixwYWNrYWdlX3VybCxjYXRlZ29yeV9pZHMsKHJlc3ApPT57IC8vIGNvbXBhcmlzaW9uIHJlc3VsdHMgZm9yIHNlbGVjdGVkIHBhY2thZ2VzXG4gICAgICAgICAgICBpZihyZXNwKXtcbiAgICAgICAgICAgICAgbGV0IHRlc3QgPSB7fVxuICAgICAgICAgICAgICAgIHJlc3AucGFja2FnZXMubWFwKChwa2csaSkgPT57XG4gICAgICAgICAgICAgICAgICB0ZXN0ID0ge31cbiAgICAgICAgICAgICAgICAgIHRlc3QuaWQ9cGtnLmlkXG4gICAgICAgICAgICAgICAgICB0ZXN0LmxhYl9pZD1wa2cubGFiLmlkXG4gICAgICAgICAgICAgICAgICB0ZXN0Lm5hbWU9cGtnLm5hbWVcbiAgICAgICAgICAgICAgICAgIHRlc3QuaW1nID0gcGtnLmxhYi50aHVtYm5haWxcbiAgICAgICAgICAgICAgICAgIHJlc2V0Q29tcGFyZURhdGEucHVzaCh0ZXN0KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGlmKCFjYXRlZ29yeV9pZHMpe1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlY29tcGFyZUNyaXRlcmlhKHJlc2V0Q29tcGFyZURhdGEsdHJ1ZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsnc2hvd0NvbXBhcmUnOnRydWUsJ2RhdGEnOnJlc3B9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvc2VhcmNocGFja2FnZXMnKVxuICAgICAgICB9XG4gICAgICB9ICBcbiAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zaG93Q29tcGFyZSl7XG4gICAgICAgIHJldHVybiAoIDxQYWNrYWdlQ29tcGFyZVZpZXcgey4uLnRoaXMucHJvcHN9IGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0gc2hvd0NvbXBhcmU9e3RoaXMuc3RhdGUuc2hvd0NvbXBhcmV9IGlzX2NhdGVnb3J5PXt0aGlzLnN0YXRlLmlzX2NhdGVnb3J5fS8+ICBcbiAgICAgICAgICApXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHJldHVybiggPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDU0IH19PlxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIHNob3dQYWNrYWdlU3RyaXA9e3RydWV9Lz5cbiAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBrZ0NvbWFwcmUgY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHBhc3NlZFByb3BzKSA9PiB7XG5cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgY29tcGFyZV9wYWNrYWdlcyxcbiAgICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb25cblxuICAgICAgICB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX0xBQlNcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29tcGFyZV9wYWNrYWdlcyxcbiAgICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb25cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXRDb21wYXJlTGlzdDooc2VsZWN0ZWRJZHMsc2VsZWN0ZWRMb2NhdGlvbixzZWFyY2hCeVVybCxjYXRfaWQsY2IpID0+IGRpc3BhdGNoKGdldENvbXBhcmVMaXN0KHNlbGVjdGVkSWRzLHNlbGVjdGVkTG9jYXRpb24sc2VhcmNoQnlVcmwsY2F0X2lkLGNiKSksXG4gICAgICAgICAgICB0b2dnbGVjb21wYXJlQ3JpdGVyaWE6IChjcml0ZXJpYSxyZXNldCkgPT4gZGlzcGF0Y2godG9nZ2xlY29tcGFyZUNyaXRlcmlhKGNyaXRlcmlhLHJlc2V0KSksXG4gICAgICAgICAgICBzZXRQYWNrYWdlSWQ6IChwYWNrYWdlX2lkLCBpc0hvbWVQYWdlKSA9PiBkaXNwYXRjaChzZXRQYWNrYWdlSWQocGFja2FnZV9pZCwgaXNIb21lUGFnZSkpLFxuICAgICAgICAgICAgc2VsZWN0U2VhcmNoVHlwZTogKHR5cGUpID0+IGRpc3BhdGNoKHNlbGVjdFNlYXJjaFR5cGUodHlwZSkpLFxuICAgICAgICAgICAgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWE6ICh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQsIGZpbHRlcikgPT4gZGlzcGF0Y2godG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkLCBmaWx0ZXIpKSxcbiAgICAgICAgICAgIGNsZWFyRXh0cmFUZXN0czogKCkgPT4gZGlzcGF0Y2goY2xlYXJFeHRyYVRlc3RzKCkpLFxuICAgICAgICAgICAgc2VuZEFnZW50V2hhdHN1cFBhZ2VVUkw6IChleHRyYVBhcmFtcywgY2IpID0+IGRpc3BhdGNoKHNlbmRBZ2VudFdoYXRzdXBQYWdlVVJMKGV4dHJhUGFyYW1zLCBjYikpXG5cbiAgICAgICAgfVxuICAgIH1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKHBhY2thZ2VDb21wYXJlKTsiLCIvLyAuZGlybmFtZSwgLmJhc2VuYW1lLCBhbmQgLmV4dG5hbWUgbWV0aG9kcyBhcmUgZXh0cmFjdGVkIGZyb20gTm9kZS5qcyB2OC4xMS4xLFxuLy8gYmFja3BvcnRlZCBhbmQgdHJhbnNwbGl0ZWQgd2l0aCBCYWJlbCwgd2l0aCBiYWNrd2FyZHMtY29tcGF0IGZpeGVzXG5cbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyByZXNvbHZlcyAuIGFuZCAuLiBlbGVtZW50cyBpbiBhIHBhdGggYXJyYXkgd2l0aCBkaXJlY3RvcnkgbmFtZXMgdGhlcmVcbi8vIG11c3QgYmUgbm8gc2xhc2hlcywgZW1wdHkgZWxlbWVudHMsIG9yIGRldmljZSBuYW1lcyAoYzpcXCkgaW4gdGhlIGFycmF5XG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcbi8vIHJlbGF0aXZlIGFuZCBhYnNvbHV0ZSBwYXRocylcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5KHBhcnRzLCBhbGxvd0Fib3ZlUm9vdCkge1xuICAvLyBpZiB0aGUgcGF0aCB0cmllcyB0byBnbyBhYm92ZSB0aGUgcm9vdCwgYHVwYCBlbmRzIHVwID4gMFxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gcGFydHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgbGFzdCA9IHBhcnRzW2ldO1xuICAgIGlmIChsYXN0ID09PSAnLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICB9IGVsc2UgaWYgKGxhc3QgPT09ICcuLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICAvLyBpZiB0aGUgcGF0aCBpcyBhbGxvd2VkIHRvIGdvIGFib3ZlIHRoZSByb290LCByZXN0b3JlIGxlYWRpbmcgLi5zXG4gIGlmIChhbGxvd0Fib3ZlUm9vdCkge1xuICAgIGZvciAoOyB1cC0tOyB1cCkge1xuICAgICAgcGFydHMudW5zaGlmdCgnLi4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydHM7XG59XG5cbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcblxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xuICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmVzb2x2ZWRQYXRoID0gcGF0aCArICcvJyArIHJlc29sdmVkUGF0aDtcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbiAgfVxuXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcbiAgLy8gaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKCkgZmFpbHMpXG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHJlc29sdmVkUGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIHJldHVybiAoKHJlc29sdmVkQWJzb2x1dGUgPyAnLycgOiAnJykgKyByZXNvbHZlZFBhdGgpIHx8ICcuJztcbn07XG5cbi8vIHBhdGgubm9ybWFsaXplKHBhdGgpXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdmFyIGlzQWJzb2x1dGUgPSBleHBvcnRzLmlzQWJzb2x1dGUocGF0aCksXG4gICAgICB0cmFpbGluZ1NsYXNoID0gc3Vic3RyKHBhdGgsIC0xKSA9PT0gJy8nO1xuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIGlmICghcGF0aCAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHBhdGggPSAnLic7XG4gIH1cbiAgaWYgKHBhdGggJiYgdHJhaWxpbmdTbGFzaCkge1xuICAgIHBhdGggKz0gJy8nO1xuICB9XG5cbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmpvaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBhdGhzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgcmV0dXJuIGV4cG9ydHMubm9ybWFsaXplKGZpbHRlcihwYXRocywgZnVuY3Rpb24ocCwgaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHAgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgICByZXR1cm4gcDtcbiAgfSkuam9pbignLycpKTtcbn07XG5cblxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xuICBmcm9tID0gZXhwb3J0cy5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcbiAgdG8gPSBleHBvcnRzLnJlc29sdmUodG8pLnN1YnN0cigxKTtcblxuICBmdW5jdGlvbiB0cmltKGFycikge1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgZm9yICg7IHN0YXJ0IDwgYXJyLmxlbmd0aDsgc3RhcnQrKykge1xuICAgICAgaWYgKGFycltzdGFydF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgZW5kID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xuICAgICAgaWYgKGFycltlbmRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxKTtcbiAgfVxuXG4gIHZhciBmcm9tUGFydHMgPSB0cmltKGZyb20uc3BsaXQoJy8nKSk7XG4gIHZhciB0b1BhcnRzID0gdHJpbSh0by5zcGxpdCgnLycpKTtcblxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xuICB2YXIgc2FtZVBhcnRzTGVuZ3RoID0gbGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xuICBmb3IgKHZhciBpID0gc2FtZVBhcnRzTGVuZ3RoOyBpIDwgZnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcbiAgfVxuXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XG5cbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJy8nKTtcbn07XG5cbmV4cG9ydHMuc2VwID0gJy8nO1xuZXhwb3J0cy5kZWxpbWl0ZXIgPSAnOic7XG5cbmV4cG9ydHMuZGlybmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcuJztcbiAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoMCk7XG4gIHZhciBoYXNSb290ID0gY29kZSA9PT0gNDcgLyovKi87XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMTsgLS1pKSB7XG4gICAgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBlbmQgPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3JcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gaGFzUm9vdCA/ICcvJyA6ICcuJztcbiAgaWYgKGhhc1Jvb3QgJiYgZW5kID09PSAxKSB7XG4gICAgLy8gcmV0dXJuICcvLyc7XG4gICAgLy8gQmFja3dhcmRzLWNvbXBhdCBmaXg6XG4gICAgcmV0dXJuICcvJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZSgwLCBlbmQpO1xufTtcblxuZnVuY3Rpb24gYmFzZW5hbWUocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuXG4gIHZhciBzdGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIHZhciBpO1xuXG4gIGZvciAoaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICBpZiAocGF0aC5jaGFyQ29kZUF0KGkpID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIHBhdGggY29tcG9uZW50XG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gJyc7XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0LCBlbmQpO1xufVxuXG4vLyBVc2VzIGEgbWl4ZWQgYXBwcm9hY2ggZm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5LCBhcyBleHQgYmVoYXZpb3IgY2hhbmdlZFxuLy8gaW4gbmV3IE5vZGUuanMgdmVyc2lvbnMsIHNvIG9ubHkgYmFzZW5hbWUoKSBhYm92ZSBpcyBiYWNrcG9ydGVkIGhlcmVcbmV4cG9ydHMuYmFzZW5hbWUgPSBmdW5jdGlvbiAocGF0aCwgZXh0KSB7XG4gIHZhciBmID0gYmFzZW5hbWUocGF0aCk7XG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIGY7XG59O1xuXG5leHBvcnRzLmV4dG5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICB2YXIgc3RhcnREb3QgPSAtMTtcbiAgdmFyIHN0YXJ0UGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIC8vIFRyYWNrIHRoZSBzdGF0ZSBvZiBjaGFyYWN0ZXJzIChpZiBhbnkpIHdlIHNlZSBiZWZvcmUgb3VyIGZpcnN0IGRvdCBhbmRcbiAgLy8gYWZ0ZXIgYW55IHBhdGggc2VwYXJhdG9yIHdlIGZpbmRcbiAgdmFyIHByZURvdFN0YXRlID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnRQYXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIGV4dGVuc2lvblxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDQ2IC8qLiovKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IGRvdCwgbWFyayBpdCBhcyB0aGUgc3RhcnQgb2Ygb3VyIGV4dGVuc2lvblxuICAgICAgICBpZiAoc3RhcnREb3QgPT09IC0xKVxuICAgICAgICAgIHN0YXJ0RG90ID0gaTtcbiAgICAgICAgZWxzZSBpZiAocHJlRG90U3RhdGUgIT09IDEpXG4gICAgICAgICAgcHJlRG90U3RhdGUgPSAxO1xuICAgIH0gZWxzZSBpZiAoc3RhcnREb3QgIT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGFuZCBub24tcGF0aCBzZXBhcmF0b3IgYmVmb3JlIG91ciBkb3QsIHNvIHdlIHNob3VsZFxuICAgICAgLy8gaGF2ZSBhIGdvb2QgY2hhbmNlIGF0IGhhdmluZyBhIG5vbi1lbXB0eSBleHRlbnNpb25cbiAgICAgIHByZURvdFN0YXRlID0gLTE7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXJ0RG90ID09PSAtMSB8fCBlbmQgPT09IC0xIHx8XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGNoYXJhY3RlciBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGRvdFxuICAgICAgcHJlRG90U3RhdGUgPT09IDAgfHxcbiAgICAgIC8vIFRoZSAocmlnaHQtbW9zdCkgdHJpbW1lZCBwYXRoIGNvbXBvbmVudCBpcyBleGFjdGx5ICcuLidcbiAgICAgIHByZURvdFN0YXRlID09PSAxICYmIHN0YXJ0RG90ID09PSBlbmQgLSAxICYmIHN0YXJ0RG90ID09PSBzdGFydFBhcnQgKyAxKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0RG90LCBlbmQpO1xufTtcblxuZnVuY3Rpb24gZmlsdGVyICh4cywgZikge1xuICAgIGlmICh4cy5maWx0ZXIpIHJldHVybiB4cy5maWx0ZXIoZik7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGYoeHNbaV0sIGksIHhzKSkgcmVzLnB1c2goeHNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyBTdHJpbmcucHJvdG90eXBlLnN1YnN0ciAtIG5lZ2F0aXZlIGluZGV4IGRvbid0IHdvcmsgaW4gSUU4XG52YXIgc3Vic3RyID0gJ2FiJy5zdWJzdHIoLTEpID09PSAnYidcbiAgICA/IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHsgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbikgfVxuICAgIDogZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikge1xuICAgICAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IHN0ci5sZW5ndGggKyBzdGFydDtcbiAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbik7XG4gICAgfVxuO1xuIiwiaW1wb3J0IF9NZW1vcnlSb3V0ZXIgZnJvbSBcIi4vTWVtb3J5Um91dGVyXCI7XG5leHBvcnQgeyBfTWVtb3J5Um91dGVyIGFzIE1lbW9yeVJvdXRlciB9O1xuaW1wb3J0IF9Qcm9tcHQgZnJvbSBcIi4vUHJvbXB0XCI7XG5leHBvcnQgeyBfUHJvbXB0IGFzIFByb21wdCB9O1xuaW1wb3J0IF9SZWRpcmVjdCBmcm9tIFwiLi9SZWRpcmVjdFwiO1xuZXhwb3J0IHsgX1JlZGlyZWN0IGFzIFJlZGlyZWN0IH07XG5pbXBvcnQgX1JvdXRlIGZyb20gXCIuL1JvdXRlXCI7XG5leHBvcnQgeyBfUm91dGUgYXMgUm91dGUgfTtcbmltcG9ydCBfUm91dGVyIGZyb20gXCIuL1JvdXRlclwiO1xuZXhwb3J0IHsgX1JvdXRlciBhcyBSb3V0ZXIgfTtcbmltcG9ydCBfU3RhdGljUm91dGVyIGZyb20gXCIuL1N0YXRpY1JvdXRlclwiO1xuZXhwb3J0IHsgX1N0YXRpY1JvdXRlciBhcyBTdGF0aWNSb3V0ZXIgfTtcbmltcG9ydCBfU3dpdGNoIGZyb20gXCIuL1N3aXRjaFwiO1xuZXhwb3J0IHsgX1N3aXRjaCBhcyBTd2l0Y2ggfTtcbmltcG9ydCBfZ2VuZXJhdGVQYXRoIGZyb20gXCIuL2dlbmVyYXRlUGF0aFwiO1xuZXhwb3J0IHsgX2dlbmVyYXRlUGF0aCBhcyBnZW5lcmF0ZVBhdGggfTtcbmltcG9ydCBfbWF0Y2hQYXRoIGZyb20gXCIuL21hdGNoUGF0aFwiO1xuZXhwb3J0IHsgX21hdGNoUGF0aCBhcyBtYXRjaFBhdGggfTtcbmltcG9ydCBfd2l0aFJvdXRlciBmcm9tIFwiLi93aXRoUm91dGVyXCI7XG5leHBvcnQgeyBfd2l0aFJvdXRlciBhcyB3aXRoUm91dGVyIH07Il0sInNvdXJjZVJvb3QiOiIifQ==