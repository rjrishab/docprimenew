exports.ids = [72];
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

var _react = __webpack_require__(/*! react */ "react");

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

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _storage = __webpack_require__(/*! ../../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class PackageCompareView extends _react2.default.Component {

  constructor() {
    super();

    this.sendPageUrl = () => {
      let data = {
        callback: window.location.pathname.substring(1) + window.location.search.replace(/&/g, '*'),
        template: 'gold_general_template'
      };
      this.props.sendAgentWhatsupPageURL(data).then(resp => {
        setTimeout(() => {
          _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Sent Successfully" });
        }, 500);
      }).catch(e => {
        setTimeout(() => {
          _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Try again!" });
        }, 500);
      });
    };

    this.state = {
      checked: false,
      tabsValue: [],
      viewAll: true,
      isDiffChecked: false,
      isDiffTest: '',
      readMore: 'search-details-data-less'
    };
  }

  componentDidMount() {
    let pkgCls = document.getElementsByClassName('pkgCls');
    if (pkgCls && pkgCls.length) {
      for (var i = 0; i < pkgCls.length; i++) {
        pkgCls[i].addEventListener('scroll', e => {
          let leftScrolledVal = e.target.scrollLeft;
          for (var j = 0; j < pkgCls.length; j++) {
            pkgCls[j].scrollLeft = leftScrolledVal;
          }
        });
      }
    }
    if (window) {
      window.scrollTo(0, 0);
    }
    let ids = [];
    if (this.props.data.packages) {
      this.props.data.packages.map((packages, i) => {
        ids.push('hide_av_' + packages.id + '_' + packages.lab.id);
        // ids.push('hide_strt_'+ packages.id+'_'+packages.lab.id)
        // ids.push('hide_coupon_'+ packages.id)
      });
    }
    if (ids.length > 0) {
      window.onscroll = function () {
        if (document.getElementsByClassName('sticky-multiple-pkgs') && document.getElementsByClassName('sticky-multiple-pkgs')[0]) {
          let scrollHeight = document.getElementsByClassName('sticky-multiple-pkgs')[0].offsetTop;
          ids.map((id, i) => {
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

  showLabs(id) {
    this.props.setPackageId(id, true);

    setTimeout(() => {
      this.props.history.push('/searchpackages?isComparable=true');
    }, 100);
  }

  bookNow(id, url, test_id, test_name, e) {
    // redirect to package booking summary
    this.props.clearExtraTests();
    let testIds = test_id;
    let new_test = {};
    new_test.extra_test = true;
    new_test.lab_id = id;
    new_test.type = 'test';
    new_test.name = test_name;
    new_test.id = test_id;
    this.props.toggleDiagnosisCriteria('test', new_test, true);
    let data = {
      'Category': 'ConsumerApp', 'Action': 'CompareBookNowClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'compare-booknow-click', 'LabId': id, 'testId': test_id
    };
    _gtm2.default.sendEvent({ data: data });

    if (e.ctrlKey || e.metaKey) {} else {
      e.preventDefault();

      if (url) {
        this.props.history.push(`/${url}`);
      } else {
        this.props.history.push(`/lab/${id}/book`);
      }
    }
  }

  ButtonHandler(field, event) {
    let tabs = [].concat(this.state.tabsValue);
    let self = this;
    let found = false;
    tabs = tabs.filter(x => {
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

  toggleComparePackages(packageId, labId, pckImg, pckName) {
    let packages = {};
    packages.id = packageId;
    packages.lab_id = labId;
    packages.img = pckImg;
    packages.name = pckName;
    let newUrl = queryString.parse(this.props.location.search);
    let package_ids = [];
    if (newUrl.package_ids) {
      package_ids = newUrl.package_ids.split(',');
    }
    let ids = '';
    let data = [];
    if (package_ids.length > 0) {
      Object.entries(package_ids).map(function ([key, pkg]) {
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

  viewAll() {
    let ids = [];
    if (this.state.viewAll) {
      this.props.data.category_info.map((catIds, i) => {
        ids.push(catIds.id);
      });
    }
    this.setState({ tabsValue: ids, viewAll: !this.state.viewAll });
  }

  toggleShowDiff() {
    // show differnce b/w packages
    let data = {
      'Category': 'ConsumerApp', 'Action': 'ShoWDifferenceClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'show-difference-click'
    };
    _gtm2.default.sendEvent({ data: data });
    let testIds = [];
    let catIds = [];
    let test_info = [];
    let category_info_data = [];
    let info_first = '';
    let cat_first = [];
    let catId = '';
    let testId = '';
    let finalIds = [];

    this.props.data.category_info.map((cat_info, i) => {
      test_info = [];
      info_first = '';
      let count = 0;
      cat_info.test_ids.map((test_id, k) => {
        test_info = [];
        this.props.data.packages.map((pkg_test, n) => {
          test_info = test_info.concat(pkg_test.tests_included.filter(x => x.test_id == test_id));
        });
      });
      test_info.map((info, k) => {
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

    this.props.data.category_info.map((cat_info, i) => {
      category_info_data = [];
      let count = 0;
      cat_info.test_ids.map((test_id, k) => {
        this.props.data.packages.map((pkg_test, n) => {
          category_info_data = category_info_data.concat(pkg_test.tests_included.filter(x => x.test_id == test_id));
          category_info_data[n].package_id = pkg_test.id;
          category_info_data[n].cat_id = cat_info.id;
        });
      });
      category_info_data.map((info, k) => {
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

    finalIds = [...catIds, ...testIds];
    if (this.state.isDiffChecked) {
      this.setState({ isDiffTest: [], isDiffChecked: !this.state.isDiffChecked });
    } else {
      this.setState({ isDiffTest: finalIds, isDiffChecked: !this.state.isDiffChecked });
    }
  }

  addMore() {
    this.props.selectSearchType('lab');
    this.props.history.push('/search?from=header');
  }

  toggleScroll() {
    if (window) {
      window.scrollTo(0, 0);
    }
    this.setState({ readMore: 'search-details-data-less' });
  }

  viewAllCat() {
    let parsed = queryString.parse(this.props.location.search);
    if (parsed.category_ids) {
      this.props.history.push('/searchpackages?package_category_ids=' + parsed.category_ids);
    }
  }

  render() {
    let self = this;
    let availableTest = [];
    let testData = [];
    let cat_info_data = [];
    if (this.props.showCompare && this.props.data != null) {
      return _react2.default.createElement(
        'div',
        { className: 'profile-body-wrap', style: { paddingBottom: 54 } },
        _react2.default.createElement(_HelmetTags2.default, { tagsData: {
            canonicalUrl: `${_config2.default.API_BASE_URL}${this.props.location.pathname}`,
            title: `${this.props.data.title || ''}`
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
                  { className: 'rd-more', onClick: () => this.setState({ readMore: '' }) },
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
                    this.props.data.packages ? this.props.data.packages.map((packages, i) => {
                      return _react2.default.createElement(
                        'li',
                        { key: i, id: 'pkg_' + packages.id },
                        this.props.is_category ? '' : _react2.default.createElement('img', { src: "/assets" + "/images/packageCompare/red-cut.png", alt: '', className: 'end-div', onClick: this.toggleComparePackages.bind(this, packages.id, packages.lab.id, packages.lab.thumbnail, packages.lab.name) }),
                        _react2.default.createElement(
                          'div',
                          { className: 'pkg-hd' },
                          packages.name,
                          ' ',
                          packages.total_parameters_count > 0 ? `(${packages.total_parameters_count} tests)` : '',
                          ' '
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'pkg-hd-by fw-500 ease-hide', id: "hide_av_" + packages.id + '_' + packages.lab.id },
                          packages.lab.name
                        ),
                        _react2.default.createElement(
                          'a',
                          { onClick: this.bookNow.bind(this, packages.lab.id, '', packages.id, packages.lab.name) },
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
                this.props.data.category_info ? this.props.data.category_info.map((cat_info, i) => {
                  return _react2.default.createElement(
                    'div',
                    { className: "pkg-card-container mb-3" + (this.state.isDiffChecked && this.state.isDiffTest.indexOf(cat_info.id) != -1 ? ' d-none' : ''), key: i, id: 'cat_' + cat_info.id },
                    _react2.default.createElement(
                      'div',
                      { className: 'pkg-crd-header light-orng-header', onClick: this.ButtonHandler.bind(this, cat_info.id) },
                      _react2.default.createElement(
                        'span',
                        null,
                        cat_info.name
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: this.state.tabsValue.indexOf(cat_info.id) > -1 ? ' acrd-show span-img' : 'acrd-arw-rotate span-img' },
                        _react2.default.createElement('img', { src: "/assets" + "/images/up-arrow.png", alt: '' })
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: this.state.tabsValue.indexOf(cat_info.id) > -1 ? 'd-none' : '' },
                      _react2.default.createElement(
                        'div',
                        { className: "top-head-info multiple-pkgs parent-info category-done" + (this.props.data.packages.length <= 2 ? ' pkbclsTwo' : this.props.data.packages.length <= 3 ? ' pkbclsThree' : this.props.data.packages.length <= 4 ? ' pkbclsFour' : '') },
                        _react2.default.createElement(
                          'ul',
                          { className: 'pkgCls' },
                          this.props.data.packages.map((cat_count, j) => {
                            cat_info_data = cat_count.category_parameter_count.filter(x => x.id == cat_info.id);
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
                      cat_info.test_ids.map((test_id, k) => {
                        testData = self.props.data.test_info.filter(x => x.id == test_id);
                        return _react2.default.createElement(
                          'div',
                          { key: k, id: testData[0].id, className: this.state.isDiffChecked && this.state.isDiffTest.indexOf(testData[0].id) != -1 ? ' d-none' : '' },
                          testData[0].parameters.length > 0 ? _react2.default.createElement(
                            'div',
                            { className: 'pkg-crd-header light-orng-header grey-head test-done', onClick: this.ButtonHandler.bind(this, testData[0].id) },
                            _react2.default.createElement(
                              'span',
                              null,
                              testData[0].name
                            ),
                            _react2.default.createElement(
                              'span',
                              { className: this.state.tabsValue.indexOf(testData[0].id) > -1 ? 'acrd-arw-rotate span-img' : 'acrd-show span-img' },
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
                            { className: "top-head-info multiple-pkgs multiple-pkgs-details" + (this.props.data.packages.length <= 2 ? ' pkbclsTwo' : this.props.data.packages.length <= 3 ? ' pkbclsThree' : this.props.data.packages.length <= 4 ? ' pkbclsFour' : '') },
                            _react2.default.createElement(
                              'ul',
                              { className: 'pkgCls testParam new' },
                              self.props.data.packages.map((pkg_test, n) => {
                                availableTest = pkg_test.tests_included.filter(x => x.test_id == test_id);
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
                            { key: k + 1, className: this.state.tabsValue.indexOf(testData[0].id) > -1 ? '' : 'd-none' },
                            _react2.default.createElement(
                              'div',
                              { className: "top-head-info multiple-pkgs multiple-pkgs-details" + (this.props.data.packages.length <= 2 ? ' pkbclsTwo' : this.props.data.packages.length <= 3 ? ' pkbclsThree' : this.props.data.packages.length <= 4 ? ' pkbclsFour' : '') },
                              _react2.default.createElement(
                                'ul',
                                { className: 'pkgCls testParam' },
                                self.props.data.packages.map((pkg_test, n) => {
                                  availableTest = pkg_test.tests_included.filter(x => x.test_id == test_id);
                                  return availableTest[0].available ? _react2.default.createElement(
                                    'li',
                                    { key: n },
                                    testData[0].parameters.length > 0 ? testData[0].parameters.map((test_param, o) => {
                                      return _react2.default.createElement(
                                        'span',
                                        { key: o },
                                        test_param
                                      );
                                    }) : ''
                                  ) : _react2.default.createElement(
                                    'li',
                                    null,
                                    testData[0].parameters.length > 0 ? testData[0].parameters.map((test_param, o) => {
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
}
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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

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

const queryString = __webpack_require__(/*! query-string */ "query-string");

class packageCompare extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCompare: false,
      data: null,
      is_category: false
    };
  }
  componentDidMount() {
    if (window) {
      window.scrollTo(0, 0);
    }
    let parsed = queryString.parse(this.props.location.search);
    let resetCompareData = [];
    let data = [];
    let package_ids;
    let package_url = '';
    let category_ids = null;
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
    let ids = '';
    if (package_ids || package_url || category_ids) {
      if (package_ids && package_ids.length > 0 && package_ids != "") {
        Object.entries(package_ids).map(function ([key, pkg]) {
          ids = pkg.split('-');
          data.push({ package_id: ids[0], lab_id: ids[1] });
        });
      }
      this.props.getCompareList(data, this.props.selectedLocation, package_url, category_ids, resp => {
        // comparision results for selected packages
        if (resp) {
          let test = {};
          resp.packages.map((pkg, i) => {
            test = {};
            test.id = pkg.id;
            test.lab_id = pkg.lab.id;
            test.name = pkg.name;
            test.img = pkg.lab.thumbnail;
            resetCompareData.push(test);
          });
          if (!category_ids) {
            this.props.togglecompareCriteria(resetCompareData, true);
          }
          this.setState({ 'showCompare': true, 'data': resp });
        }
      });
    } else {
      this.props.history.push('/searchpackages');
    }
  }
  render() {
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
}
const mapStateToProps = (state, passedProps) => {

  const {
    compare_packages,
    selectedLocation

  } = state.SEARCH_CRITERIA_LABS;

  return {
    compare_packages,
    selectedLocation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCompareList: (selectedIds, selectedLocation, searchByUrl, cat_id, cb) => dispatch((0, _index.getCompareList)(selectedIds, selectedLocation, searchByUrl, cat_id, cb)),
    togglecompareCriteria: (criteria, reset) => dispatch((0, _index.togglecompareCriteria)(criteria, reset)),
    setPackageId: (package_id, isHomePage) => dispatch((0, _index.setPackageId)(package_id, isHomePage)),
    selectSearchType: type => dispatch((0, _index.selectSearchType)(type)),
    toggleDiagnosisCriteria: (type, criteria, forceAdd, filter) => dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd, filter)),
    clearExtraTests: () => dispatch((0, _index.clearExtraTests)()),
    sendAgentWhatsupPageURL: (extraParams, cb) => dispatch((0, _index.sendAgentWhatsupPageURL)(extraParams, cb))

  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(packageCompare);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL3NlYXJjaFBhY2thZ2VzL3BhY2thZ2VDb21wYXJlL3BhY2thZ2VDb21wYXJlVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9kaWFnbm9zaXMvUGFja2FnZUNvbXBhcmUuanMiXSwibmFtZXMiOlsiaXNWaXAiLCJjb2xvciIsImZvbnRTaXplIiwicGFkZGluZ0JvdHRvbSIsIkxvYWRlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsImNsYXNzVHlwZSIsImlGcmFtZVBvcHVwIiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiUGFja2FnZUNvbXBhcmVWaWV3Iiwic2VuZFBhZ2VVcmwiLCJkYXRhIiwiY2FsbGJhY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3Vic3RyaW5nIiwic2VhcmNoIiwicmVwbGFjZSIsInRlbXBsYXRlIiwic2VuZEFnZW50V2hhdHN1cFBhZ2VVUkwiLCJ0aGVuIiwicmVzcCIsInNldFRpbWVvdXQiLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJ0ZXh0IiwiY2F0Y2giLCJlIiwic3RhdGUiLCJjaGVja2VkIiwidGFic1ZhbHVlIiwidmlld0FsbCIsImlzRGlmZkNoZWNrZWQiLCJpc0RpZmZUZXN0IiwicmVhZE1vcmUiLCJjb21wb25lbnREaWRNb3VudCIsInBrZ0NscyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImxlbmd0aCIsImkiLCJhZGRFdmVudExpc3RlbmVyIiwibGVmdFNjcm9sbGVkVmFsIiwidGFyZ2V0Iiwic2Nyb2xsTGVmdCIsImoiLCJzY3JvbGxUbyIsImlkcyIsInBhY2thZ2VzIiwibWFwIiwicHVzaCIsImlkIiwibGFiIiwib25zY3JvbGwiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRUb3AiLCJzY3JlZW4iLCJ3aWR0aCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic2hvd0xhYnMiLCJzZXRQYWNrYWdlSWQiLCJoaXN0b3J5IiwiYm9va05vdyIsInVybCIsInRlc3RfaWQiLCJ0ZXN0X25hbWUiLCJjbGVhckV4dHJhVGVzdHMiLCJ0ZXN0SWRzIiwibmV3X3Rlc3QiLCJleHRyYV90ZXN0IiwibGFiX2lkIiwidHlwZSIsIm5hbWUiLCJ0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSIsIkdUTSIsImdldFVzZXJJZCIsInNlbmRFdmVudCIsImN0cmxLZXkiLCJtZXRhS2V5IiwicHJldmVudERlZmF1bHQiLCJCdXR0b25IYW5kbGVyIiwiZmllbGQiLCJldmVudCIsInRhYnMiLCJjb25jYXQiLCJzZWxmIiwiZm91bmQiLCJmaWx0ZXIiLCJ4Iiwic2V0U3RhdGUiLCJ0b2dnbGVDb21wYXJlUGFja2FnZXMiLCJwYWNrYWdlSWQiLCJsYWJJZCIsInBja0ltZyIsInBja05hbWUiLCJpbWciLCJuZXdVcmwiLCJwYXJzZSIsInBhY2thZ2VfaWRzIiwic3BsaXQiLCJPYmplY3QiLCJlbnRyaWVzIiwia2V5IiwicGtnIiwicGFyc2VJbnQiLCJ0b2dnbGVjb21wYXJlQ3JpdGVyaWEiLCJyZWxvYWQiLCJjYXRlZ29yeV9pbmZvIiwiY2F0SWRzIiwidG9nZ2xlU2hvd0RpZmYiLCJ0ZXN0X2luZm8iLCJjYXRlZ29yeV9pbmZvX2RhdGEiLCJpbmZvX2ZpcnN0IiwiY2F0X2ZpcnN0IiwiY2F0SWQiLCJ0ZXN0SWQiLCJmaW5hbElkcyIsImNhdF9pbmZvIiwiY291bnQiLCJ0ZXN0X2lkcyIsImsiLCJwa2dfdGVzdCIsIm4iLCJ0ZXN0c19pbmNsdWRlZCIsImluZm8iLCJhdmFpbGFibGUiLCJwYWNrYWdlX2lkIiwiY2F0X2lkIiwiYWRkTW9yZSIsInNlbGVjdFNlYXJjaFR5cGUiLCJ0b2dnbGVTY3JvbGwiLCJ2aWV3QWxsQ2F0IiwicGFyc2VkIiwiY2F0ZWdvcnlfaWRzIiwiYXZhaWxhYmxlVGVzdCIsInRlc3REYXRhIiwiY2F0X2luZm9fZGF0YSIsInNob3dDb21wYXJlIiwiY2Fub25pY2FsVXJsIiwiQ09ORklHIiwiQVBJX0JBU0VfVVJMIiwidGl0bGUiLCJTVE9SQUdFIiwiaXNBZ2VudCIsIkFTU0VUU19CQVNFX1VSTCIsInBhZGRpbmdMZWZ0Iiwic2VhcmNoX2NvbnRlbnQiLCJib3JkZXJSYWRpdXMiLCJfX2h0bWwiLCJiaW5kIiwiaXNfY2F0ZWdvcnkiLCJjdXJzb3IiLCJ0aHVtYm5haWwiLCJ0b3RhbF9wYXJhbWV0ZXJzX2NvdW50IiwiZGlzY291bnRlZF9wcmljZSIsIm1ycCIsInBhZGRpbmdUb3AiLCJpbmRleE9mIiwiY2F0X2NvdW50IiwiY2F0ZWdvcnlfcGFyYW1ldGVyX2NvdW50IiwicGFyYW1ldGVycyIsInRlc3RfcGFyYW0iLCJvIiwiYm90dG9tX2NvbnRlbnQiLCJwYWNrYWdlQ29tcGFyZSIsInJlc2V0Q29tcGFyZURhdGEiLCJwYWNrYWdlX3VybCIsImluY2x1ZGVzIiwiZ2V0Q29tcGFyZUxpc3QiLCJzZWxlY3RlZExvY2F0aW9uIiwidGVzdCIsIm1hcFN0YXRlVG9Qcm9wcyIsInBhc3NlZFByb3BzIiwiY29tcGFyZV9wYWNrYWdlcyIsIlNFQVJDSF9DUklURVJJQV9MQUJTIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJzZWxlY3RlZElkcyIsInNlYXJjaEJ5VXJsIiwiY2IiLCJjcml0ZXJpYSIsInJlc2V0IiwiaXNIb21lUGFnZSIsImZvcmNlQWRkIiwiZXh0cmFQYXJhbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztrQkFDZSxDQUFDLEVBQUVB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QUFLSEUsNkJBQXlCLENBQUNGLElBQUQsRUFBTzZHLFFBQVAsRUFBaUJHLFFBQWpCLEVBQTJCaEcsTUFBM0IsS0FBc0N5RixTQUFTLG9DQUF3QnpHLElBQXhCLEVBQThCNkcsUUFBOUIsRUFBd0NHLFFBQXhDLEVBQWtEaEcsTUFBbEQsQ0FBVCxDQUw1RDtBQU1IckIscUJBQWlCLE1BQU04RyxTQUFTLDZCQUFULENBTnBCO0FBT0hqSyw2QkFBeUIsQ0FBQ3lLLFdBQUQsRUFBY0wsRUFBZCxLQUFxQkgsU0FBUyxvQ0FBd0JRLFdBQXhCLEVBQXFDTCxFQUFyQyxDQUFUOztBQVAzQyxHQUFQO0FBVUgsQ0FYRDtrQkFZVyx5QkFBUVIsZUFBUixFQUF5Qkksa0JBQXpCLEVBQTZDWCxjQUE3QyxDIiwiZmlsZSI6IjcyLnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmV4cG9ydCBkZWZhdWx0ICh7IGlzVmlwIH0pID0+IHtcblx0cmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17YGRzY2xtZXItZnRyICR7aXNWaXA/J21hcmdpbi1ib3R0b20tNTUnOicnfWB9PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMjBcIiBzdHlsZT17eyBjb2xvcjogJyM4YThhOGEnLCBmb250U2l6ZTogMTAgfX0gPlRoZSBXZWJzaXRlIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGluIGNhc2Ugb2YgYSBtZWRpY2FsIGVtZXJnZW5jeSBhbmQvIG9yIGNyaXRpY2FsIGNhcmUgYW5kIHRoZSB1c2VyIHNob3VsZCBkaXJlY3RseSBjb250YWN0IGhpcy8gaGVyIG1lZGljYWwgc2VydmljZSBwcm92aWRlciBmb3IgUGh5c2ljYWwgRXhhbWluYXRpb24uIERvY3ByaW1lIGlzIHNvbGVseSBhIHRlY2hub2xvZ3kgcGFydG5lci48L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZm9vdGVyLW5ldy1jb3B5cmdodFwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDUgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8cD5Eb2NwcmltZS5jb20gQ29weXJpZ2h0ICZjb3B5OyAyMDIwLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+QWxsIHJpZ2h0cyByZXNlcnZlZC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRPQ1BSSU1FIFRFQ0hOT0xPR0lFUyBQUklWQVRFIExJTUlURUQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkNJTiA6IFU3NDk5OUhSMjAxNlBUQzA2NDMxMjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2Pilcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBMb2FkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NUeXBlIHx8IFwibG9hZGVyQ2lyY3VsYXJcIn0gPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHAtbG9hZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlGcmFtZVBvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMTBcIj5SZWRpcmVjdGluZyB5b3UgdG8gUGhhcm1lYXN5IHdlYnNpdGUuLi48L3A+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIiwiaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vLi4vLi4vY29tbW9ucy9MZWZ0QmFyJ1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvUmlnaHRCYXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi8uLi9jb21tb25zL0hvbWUvZm9vdGVyJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBIZWxtZXRUYWdzIGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvSGVsbWV0VGFncydcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vLi4vLi4vY29uZmlnJ1xuaW1wb3J0IERpc2NsYWltZXIgZnJvbSAnLi4vLi4vLi4vY29tbW9ucy9Ib21lL3N0YXRpY0Rpc2NsYWltZXIuanMnXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcblxuXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG4gIGNsYXNzIFBhY2thZ2VDb21wYXJlVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICBcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLnN0YXRlPXtcbiAgICAgICAgICBjaGVja2VkOmZhbHNlLFxuICAgICAgICAgIHRhYnNWYWx1ZTpbXSxcbiAgICAgICAgICB2aWV3QWxsOnRydWUsXG4gICAgICAgICAgaXNEaWZmQ2hlY2tlZDpmYWxzZSxcbiAgICAgICAgICBpc0RpZmZUZXN0OicnLFxuICAgICAgICAgIHJlYWRNb3JlOiAnc2VhcmNoLWRldGFpbHMtZGF0YS1sZXNzJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgIGxldCBwa2dDbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwa2dDbHMnKTtcbiAgICAgICAgIGlmKHBrZ0NscyAmJiBwa2dDbHMubGVuZ3RoKXtcbiAgICAgICAgICBmb3IodmFyIGk9MDtpPHBrZ0Nscy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIHBrZ0Nsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZSk9PntcbiAgICAgICAgICAgICAgbGV0IGxlZnRTY3JvbGxlZFZhbCA9IGUudGFyZ2V0LnNjcm9sbExlZnQ7XG4gICAgICAgICAgICAgICAgZm9yKHZhciBqPTA7ajxwa2dDbHMubGVuZ3RoO2orKyl7XG4gICAgICAgICAgICAgICAgICBwa2dDbHNbal0uc2Nyb2xsTGVmdCA9IGxlZnRTY3JvbGxlZFZhbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICB9XG4gICAgICBsZXQgaWRzID0gW11cbiAgICAgIGlmKHRoaXMucHJvcHMuZGF0YS5wYWNrYWdlcyl7XG4gICAgICAgIHRoaXMucHJvcHMuZGF0YS5wYWNrYWdlcy5tYXAoKHBhY2thZ2VzLCBpKSA9PiB7XG4gICAgICAgICAgICBpZHMucHVzaCgnaGlkZV9hdl8nKyBwYWNrYWdlcy5pZCsnXycrcGFja2FnZXMubGFiLmlkKVxuICAgICAgICAgICAgLy8gaWRzLnB1c2goJ2hpZGVfc3RydF8nKyBwYWNrYWdlcy5pZCsnXycrcGFja2FnZXMubGFiLmlkKVxuICAgICAgICAgICAgLy8gaWRzLnB1c2goJ2hpZGVfY291cG9uXycrIHBhY2thZ2VzLmlkKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgaWYgKGlkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGlja3ktbXVsdGlwbGUtcGtncycpICYmIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0aWNreS1tdWx0aXBsZS1wa2dzJylbMF0pe1xuICAgICAgICAgICAgICBsZXQgc2Nyb2xsSGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RpY2t5LW11bHRpcGxlLXBrZ3MnKVswXS5vZmZzZXRUb3BcbiAgICAgICAgICAgICAgaWRzLm1hcCgoaWQsaSk9PntcbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsSGVpZ2h0ID4wICYmIHdpbmRvdy5zY3JlZW4ud2lkdGggPCA3NjgpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93RGlmZicpLmNsYXNzTGlzdC5hZGQoXCJlYXNlaGlkZWFkZFwiKVxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmNsYXNzTGlzdC5hZGQoXCJlYXNlaGlkZWFkZFwiKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd0RpZmYnKS5jbGFzc0xpc3QucmVtb3ZlKFwiZWFzZWhpZGVhZGRcIilcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5jbGFzc0xpc3QucmVtb3ZlKFwiZWFzZWhpZGVhZGRcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cblxuICAgIHNob3dMYWJzKGlkKXtcbiAgICAgIHRoaXMucHJvcHMuc2V0UGFja2FnZUlkKGlkLCB0cnVlKVxuICAgICAgXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9zZWFyY2hwYWNrYWdlcz9pc0NvbXBhcmFibGU9dHJ1ZScpXG4gICAgICB9LCAxMDApXG4gICAgfVxuXG4gICAgYm9va05vdyhpZCwgdXJsLCB0ZXN0X2lkLCB0ZXN0X25hbWUsIGUpeyAvLyByZWRpcmVjdCB0byBwYWNrYWdlIGJvb2tpbmcgc3VtbWFyeVxuICAgICAgdGhpcy5wcm9wcy5jbGVhckV4dHJhVGVzdHMoKVxuICAgICAgICBsZXQgdGVzdElkcyA9IHRlc3RfaWRcbiAgICAgICAgbGV0IG5ld190ZXN0ID0ge31cbiAgICAgICAgbmV3X3Rlc3QuZXh0cmFfdGVzdCA9IHRydWVcbiAgICAgICAgbmV3X3Rlc3QubGFiX2lkID0gaWRcbiAgICAgICAgbmV3X3Rlc3QudHlwZSA9ICd0ZXN0J1xuICAgICAgICBuZXdfdGVzdC5uYW1lID0gdGVzdF9uYW1lXG4gICAgICAgIG5ld190ZXN0LmlkID0gdGVzdF9pZFxuICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKCd0ZXN0JywgbmV3X3Rlc3QsIHRydWUpXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdDb21wYXJlQm9va05vd0NsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY29tcGFyZS1ib29rbm93LWNsaWNrJywgJ0xhYklkJzogaWQgLCAndGVzdElkJzp0ZXN0X2lkXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICBpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkge1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgLyR7dXJsfWApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvbGFiLyR7aWR9L2Jvb2tgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQnV0dG9uSGFuZGxlcihmaWVsZCwgZXZlbnQpIHtcbiAgICAgIGxldCB0YWJzID0gW10uY29uY2F0KHRoaXMuc3RhdGUudGFic1ZhbHVlKVxuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgZm91bmQgPSBmYWxzZVxuICAgICAgdGFicyA9IHRhYnMuZmlsdGVyKCh4KSA9PiB7XG4gICAgICAgICAgaWYgKHggPT0gZmllbGQpIHtcbiAgICAgICAgICAgICAgZm91bmQgPSB0cnVlXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSlcbiAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICB0YWJzLnB1c2goZmllbGQpXG4gICAgICB9XG5cbiAgICAgIHNlbGYuc2V0U3RhdGUoeyB0YWJzVmFsdWU6IHRhYnMgfSlcbiAgICB9XG5cbiAgICB0b2dnbGVDb21wYXJlUGFja2FnZXMocGFja2FnZUlkLGxhYklkLHBja0ltZyxwY2tOYW1lKXtcbiAgICAgIGxldCBwYWNrYWdlcz17fVxuICAgICAgcGFja2FnZXMuaWQ9cGFja2FnZUlkXG4gICAgICBwYWNrYWdlcy5sYWJfaWQ9bGFiSWRcbiAgICAgIHBhY2thZ2VzLmltZz1wY2tJbWdcbiAgICAgIHBhY2thZ2VzLm5hbWU9cGNrTmFtZVxuICAgICAgbGV0IG5ld1VybCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgbGV0IHBhY2thZ2VfaWRzID0gW11cbiAgICAgIGlmKG5ld1VybC5wYWNrYWdlX2lkcyl7XG4gICAgICAgICAgcGFja2FnZV9pZHMgPSBuZXdVcmwucGFja2FnZV9pZHMuc3BsaXQoJywnKVxuICAgICAgfVxuICAgICAgbGV0IGlkcyA9ICcnXG4gICAgICBsZXQgZGF0YSA9IFtdXG4gICAgICBpZihwYWNrYWdlX2lkcy5sZW5ndGggPiAwKXtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMocGFja2FnZV9pZHMpLm1hcChmdW5jdGlvbiAoW2tleSwgcGtnXSkge1xuICAgICAgICAgIGlkcyA9IHBrZy5zcGxpdCgnLScpXG4gICAgICAgICAgaWYocGFyc2VJbnQoaWRzWzBdKSA9PSBwYXJzZUludChwYWNrYWdlSWQpICYmIHBhcnNlSW50KGlkc1sxXSkgPT0gcGFyc2VJbnQobGFiSWQpKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZGF0YS5wdXNoKGlkc1swXSsnLScraWRzWzFdKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcHMudG9nZ2xlY29tcGFyZUNyaXRlcmlhKHBhY2thZ2VzKVxuICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9wYWNrYWdlL2NvbXBhcmU/cGFja2FnZV9pZHM9JytkYXRhKVxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfVxuXG4gICAgdmlld0FsbCgpe1xuICAgICAgbGV0IGlkcyA9W11cbiAgICAgICAgaWYodGhpcy5zdGF0ZS52aWV3QWxsKXtcbiAgICAgICAgdGhpcy5wcm9wcy5kYXRhLmNhdGVnb3J5X2luZm8ubWFwKChjYXRJZHMsaSkgPT57XG4gICAgICAgICAgICBpZHMucHVzaChjYXRJZHMuaWQpXG4gICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dGFic1ZhbHVlIDogaWRzLCB2aWV3QWxsOiF0aGlzLnN0YXRlLnZpZXdBbGx9KVxuICAgIH1cblxuICAgIHRvZ2dsZVNob3dEaWZmKCl7IC8vIHNob3cgZGlmZmVybmNlIGIvdyBwYWNrYWdlc1xuICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1Nob1dEaWZmZXJlbmNlQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdzaG93LWRpZmZlcmVuY2UtY2xpY2snXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgIGxldCB0ZXN0SWRzPVtdXG4gICAgICBsZXQgY2F0SWRzID0gW11cbiAgICAgIGxldCB0ZXN0X2luZm89W11cbiAgICAgIGxldCBjYXRlZ29yeV9pbmZvX2RhdGEgPSBbXVxuICAgICAgbGV0IGluZm9fZmlyc3Q9JydcbiAgICAgIGxldCBjYXRfZmlyc3QgPSBbXVxuICAgICAgbGV0IGNhdElkID0gJydcbiAgICAgIGxldCB0ZXN0SWQgPSAnJ1xuICAgICAgbGV0IGZpbmFsSWRzID0gW11cblxuICAgICAgdGhpcy5wcm9wcy5kYXRhLmNhdGVnb3J5X2luZm8ubWFwKChjYXRfaW5mbywgaSkgPT4ge1xuICAgICAgICB0ZXN0X2luZm8gPSBbXVxuICAgICAgICBpbmZvX2ZpcnN0ID0gJydcbiAgICAgICAgbGV0IGNvdW50ID0gMFxuICAgICAgICBjYXRfaW5mby50ZXN0X2lkcy5tYXAoKHRlc3RfaWQsIGspID0+IHtcbiAgICAgICAgICB0ZXN0X2luZm8gPSBbXVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5kYXRhLnBhY2thZ2VzLm1hcCgocGtnX3Rlc3QsIG4pID0+IHtcbiAgICAgICAgICAgICAgdGVzdF9pbmZvPXRlc3RfaW5mby5jb25jYXQocGtnX3Rlc3QudGVzdHNfaW5jbHVkZWQuZmlsdGVyKHg9PiB4LnRlc3RfaWQgPT0gdGVzdF9pZCkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICB0ZXN0X2luZm8ubWFwKChpbmZvLGspID0+e1xuICAgICAgICAgIGlmKGs9PTApe1xuICAgICAgICAgICAgdGVzdElkID0gaW5mby50ZXN0X2lkXG4gICAgICAgICAgICBpbmZvX2ZpcnN0ID0gaW5mby5hdmFpbGFibGUgIFxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBpZihrICE9PTAgJiYgaW5mb19maXJzdCA9PT0gaW5mby5hdmFpbGFibGUpe1xuICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgIH0gXG4gICAgICAgICAgaWYoY291bnQgPT0gKHRlc3RfaW5mby5sZW5ndGggLSAxKSl7XG4gICAgICAgICAgICB0ZXN0SWRzLnB1c2godGVzdElkKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMucHJvcHMuZGF0YS5jYXRlZ29yeV9pbmZvLm1hcCgoY2F0X2luZm8sIGkpID0+IHtcbiAgICAgICAgY2F0ZWdvcnlfaW5mb19kYXRhID0gW11cbiAgICAgICAgbGV0IGNvdW50ICA9IDBcbiAgICAgICAgY2F0X2luZm8udGVzdF9pZHMubWFwKCh0ZXN0X2lkLCBrKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmRhdGEucGFja2FnZXMubWFwKChwa2dfdGVzdCwgbikgPT4ge1xuICAgICAgICAgICAgICBjYXRlZ29yeV9pbmZvX2RhdGEgPSBjYXRlZ29yeV9pbmZvX2RhdGEuY29uY2F0KHBrZ190ZXN0LnRlc3RzX2luY2x1ZGVkLmZpbHRlcih4PT4geC50ZXN0X2lkID09IHRlc3RfaWQpKVxuICAgICAgICAgICAgICBjYXRlZ29yeV9pbmZvX2RhdGFbbl0ucGFja2FnZV9pZCA9IHBrZ190ZXN0LmlkXG4gICAgICAgICAgICAgIGNhdGVnb3J5X2luZm9fZGF0YVtuXS5jYXRfaWQgPSBjYXRfaW5mby5pZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgY2F0ZWdvcnlfaW5mb19kYXRhLm1hcCgoaW5mbyxrKSA9PntcbiAgICAgICAgICBpZihrPT0wKXtcbiAgICAgICAgICAgIGNhdElkID0gaW5mby5jYXRfaWRcblxuICAgICAgICAgICAgaW5mb19maXJzdCA9IGluZm8uYXZhaWxhYmxlICBcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgaWYoayAhPT0wICYmIGluZm9fZmlyc3QgPT09IGluZm8uYXZhaWxhYmxlKXtcbiAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoY291bnQgPT0gKGNhdGVnb3J5X2luZm9fZGF0YS5sZW5ndGggLSAxKSl7XG4gICAgICAgICAgICBjYXRJZHMucHVzaChjYXRJZClcbiAgICAgICAgICB9ICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgZmluYWxJZHMgPSBbLi4uY2F0SWRzLCAuLi50ZXN0SWRzXVxuICAgICAgaWYodGhpcy5zdGF0ZS5pc0RpZmZDaGVja2VkKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNEaWZmVGVzdDpbXSxpc0RpZmZDaGVja2VkOiF0aGlzLnN0YXRlLmlzRGlmZkNoZWNrZWR9KVxuICAgICAgfWVsc2V7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzRGlmZlRlc3Q6ZmluYWxJZHMsaXNEaWZmQ2hlY2tlZDohdGhpcy5zdGF0ZS5pc0RpZmZDaGVja2VkfSlcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cblxuICAgIGFkZE1vcmUoKXtcbiAgICAgIHRoaXMucHJvcHMuc2VsZWN0U2VhcmNoVHlwZSgnbGFiJylcbiAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvc2VhcmNoP2Zyb209aGVhZGVyJylcbiAgICB9XG5cbiAgICB0b2dnbGVTY3JvbGwoKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWFkTW9yZTogJ3NlYXJjaC1kZXRhaWxzLWRhdGEtbGVzcycgfSlcbiAgICB9XG5cbiAgICB2aWV3QWxsQ2F0KCl7XG4gICAgICBsZXQgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICBpZihwYXJzZWQuY2F0ZWdvcnlfaWRzKXtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9zZWFyY2hwYWNrYWdlcz9wYWNrYWdlX2NhdGVnb3J5X2lkcz0nKyBwYXJzZWQuY2F0ZWdvcnlfaWRzKVxuICAgICAgfVxuICAgIH1cblxuICAgIHNlbmRQYWdlVXJsID0gKCkgPT4ge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIGNhbGxiYWNrOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3Vic3RyaW5nKDEpICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKC8mL2csJyonKSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnZ29sZF9nZW5lcmFsX3RlbXBsYXRlJ1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuc2VuZEFnZW50V2hhdHN1cFBhZ2VVUkwoZGF0YSkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlNlbnQgU3VjY2Vzc2Z1bGx5XCIgfSlcbiAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJUcnkgYWdhaW4hXCIgfSlcbiAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBsZXQgc2VsZj10aGlzXG4gICAgICBsZXQgYXZhaWxhYmxlVGVzdD0gW11cbiAgICAgIGxldCB0ZXN0RGF0YT0gW11cbiAgICAgIGxldCBjYXRfaW5mb19kYXRhPVtdXG4gICAgaWYodGhpcy5wcm9wcy5zaG93Q29tcGFyZSAmJiB0aGlzLnByb3BzLmRhdGEgIT0gbnVsbCl7XG4gICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDU0IH19PlxuICAgICAgICAgICAgICA8SGVsbWV0VGFncyB0YWdzRGF0YT17e1xuICAgICAgICAgICAgICAgICAgICBjYW5vbmljYWxVcmw6IGAke0NPTkZJRy5BUElfQkFTRV9VUkx9JHt0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lfWAsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBgJHt0aGlzLnByb3BzLmRhdGEudGl0bGUgfHwgJyd9YCxcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVzY3JpcHRpb246IGAke3RoaXMucHJvcHMuZGF0YS5kZXNjcmlwdGlvbiB8fCAnJ31gXG4gICAgICAgICAgICAgICAgfX0gbm9JbmRleD17ZmFsc2V9IC8+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciBzaG93UGFja2FnZVN0cmlwPXt0cnVlfS8+XG4gICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBrZ0NvbWFwcmUgY29udGFpbmVyIHBrZ01yZ25BZGpzdFwiID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8TGVmdEJhciAvPlxuICAgICAgICAgICAgICAgICAgICB7Lypjb21wYXJlIHNjcmVlbiovfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgU1RPUkFHRS5pc0FnZW50KCk/XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNlbmRQYWdlVXJsfSBjbGFzc05hbWU9XCJ3aHRzYXBwUGFnZXNcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvd2EtbG9nby5zdmcnfSAvPlNlbmQgb24gV2hhdHNhcHA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwYWQtYWxsLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kYXRhLnRpdGxlP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2dTbGlkZXJIZWFkaW5nIG1ydC0yMFwiPjxoNSBzdHlsZT17e2ZvbnRTaXplOicxNnB4JywgcGFkZGluZ0xlZnQ6JzEwcHgnfX0gPnt0aGlzLnByb3BzLmRhdGEudGl0bGV9PC9oNT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA6Jyd9XG4gICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGF0YS5zZWFyY2hfY29udGVudD9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdC1jYXJkLWNvbGxwYXNlXCIgc3R5bGU9e3tib3JkZXJSYWRpdXM6ICcwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUucmVhZE1vcmV9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGhpcy5wcm9wcy5kYXRhLnNlYXJjaF9jb250ZW50IH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJlYWRNb3JlICYmIHRoaXMuc3RhdGUucmVhZE1vcmUgIT0gJycgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZC1tb3JlXCIgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHJlYWRNb3JlOiAnJyB9KX0+UmVhZCBNb3JlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucmVhZE1vcmUgPT0gJycgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZC1tb3JlXCIgb25DbGljaz17dGhpcy50b2dnbGVTY3JvbGwuYmluZCh0aGlzKX0+UmVhZCBMZXNzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3ktbXVsdGlwbGUtcGtnc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdWx0aS1wa2ctY21wcmUgZWFzZS1oaWRlXCIgaWQ9XCJzaG93RGlmZlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kYXRhLnBhY2thZ2VzICYmIHRoaXMucHJvcHMuZGF0YS5wYWNrYWdlcy5sZW5ndGggPiAxP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGdsZS1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGdsZS1idG4tdHh0XCI+IFNob3cgRGlmZmVyZW5jZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUuaXNEaWZmQ2hlY2tlZH0gb25DbGljaz17dGhpcy50b2dnbGVTaG93RGlmZi5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZXIgcm91bmRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6Jyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRhdGEucGFja2FnZXMgJiYgdGhpcy5wcm9wcy5kYXRhLnBhY2thZ2VzLmxlbmd0aCAhPSAxICYmIHRoaXMucHJvcHMuZGF0YS5wYWNrYWdlcy5sZW5ndGggPDUgJiYgIXRoaXMucHJvcHMuaXNfY2F0ZWdvcnk/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5hZGRNb3JlLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImFkZC1tb3JlLXBhY2thZ2VzXCI+ICsgQWRkIE1vcmUgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOicnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pc19jYXRlZ29yeT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZpZXctbW9yZVwiIG9uQ2xpY2s9e3RoaXMudmlld0FsbENhdC5iaW5kKHRoaXMpfSBzdHlsZT17e2NvbG9yOiAnI2Y3ODYzMScsY3Vyc29yOiAncG9pbnRlcid9fT4gVmlldyBBbGw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JycgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wibXVsdGlwbGUtcGtnc1wiKyAodGhpcy5wcm9wcy5kYXRhLnBhY2thZ2VzLmxlbmd0aCA8PSAyPycgcGtiY2xzVHdvJzp0aGlzLnByb3BzLmRhdGEucGFja2FnZXMubGVuZ3RoIDw9IDM/JyBwa2JjbHNUaHJlZSc6dGhpcy5wcm9wcy5kYXRhLnBhY2thZ2VzLmxlbmd0aCA8PSA0PycgcGtiY2xzRm91cic6JycpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBrZ0NscyBwa2JjbHNcIj4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kYXRhLnBhY2thZ2VzP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kYXRhLnBhY2thZ2VzLm1hcCgocGFja2FnZXMsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2l9IGlkPXsncGtnXycrcGFja2FnZXMuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmlzX2NhdGVnb3J5PycnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1hZ2VzL3BhY2thZ2VDb21wYXJlL3JlZC1jdXQucG5nXCJ9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImVuZC1kaXZcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNvbXBhcmVQYWNrYWdlcy5iaW5kKHRoaXMscGFja2FnZXMuaWQscGFja2FnZXMubGFiLmlkLHBhY2thZ2VzLmxhYi50aHVtYm5haWwscGFja2FnZXMubGFiLm5hbWUpfS8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnLWhkXCI+e3BhY2thZ2VzLm5hbWV9IHtwYWNrYWdlcy50b3RhbF9wYXJhbWV0ZXJzX2NvdW50PjA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCgke3BhY2thZ2VzLnRvdGFsX3BhcmFtZXRlcnNfY291bnR9IHRlc3RzKWA6Jyd9IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cInBrZy1oZC1ieVwiIGlkPXtcImhpZGVfYXZfXCIgKyBwYWNrYWdlcy5pZH0+QXZhaWxhYmxlIGluIHtwYWNrYWdlcy50b3RhbF9sYWJzX2F2YWlsYWJsZX0gTGFiczwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1oZC1ieSBmdy01MDAgZWFzZS1oaWRlXCIgaWQ9e1wiaGlkZV9hdl9cIiArIHBhY2thZ2VzLmlkKydfJytwYWNrYWdlcy5sYWIuaWR9PntwYWNrYWdlcy5sYWIubmFtZX08L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGgzIGNsYXNzTmFtZT1cImxhYi1mbHRyLWRjLW5hbWUgZnctNTAwIHBrZy1pbmNsdWRlXCI+e3BhY2thZ2VzLnRvdGFsX3BhcmFtZXRlcnNfY291bnR9IFRlc3RzIEluY2x1ZGVkPC9oMz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInBrZy1jYXJkLXByaWNlXCI+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxwIGNsYXNzTmFtZT1cInBrZy1kaXNjb3VudENwblwiIGlkPXtcImhpZGVfY291cG9uX1wiKyBwYWNrYWdlcy5pZH0+SW5jbHVkZXMgY291cG9uPC9wPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmJvb2tOb3cuYmluZCh0aGlzLHBhY2thZ2VzLmxhYi5pZCwnJyxwYWNrYWdlcy5pZCxwYWNrYWdlcy5sYWIubmFtZSl9PjxidXR0b24gY2xhc3NOYW1lPVwicGtnLWJ0bi1ud1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCIgaWQ9e1wiaGlkZV9zdHJ0X1wiICsgcGFja2FnZXMuaWR9PuKCuSB7cGFyc2VJbnQocGFja2FnZXMuZGlzY291bnRlZF9wcmljZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KHBhY2thZ2VzLmRpc2NvdW50ZWRfcHJpY2UpICE9PSBwYXJzZUludChwYWNrYWdlcy5tcnApP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBrZy1jdXQtcHJpY2VcIiBzdHlsZT17e2NvbG9yOicjZmZmZmZmJ319PuKCuSB7cGFyc2VJbnQocGFja2FnZXMubXJwKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8aW1nIHN0eWxlPXt7d2lkdGg6ICcxNnB4JywnbWFyZ2luTGVmdCc6ICc1cHgnfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXBsb2cucG5nJ30vPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGF0YS5wYWNrYWdlcyAmJiB0aGlzLnByb3BzLmRhdGEucGFja2FnZXMubGVuZ3RoID09IDEgJiYgIXRoaXMucHJvcHMuaXNfY2F0ZWdvcnk/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLmFkZE1vcmUuYmluZCh0aGlzKX0gc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInLHBhZGRpbmdUb3A6MzAsIHBhZGRpbmdCb3R0b206MzB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGRuZXdwa2dcIj48c3BhbiBjbGFzc05hbWU9XCJhZGQtcGx1c1wiPis8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFkZG5ld3BrZy10eHRcIj5BZGQgb25lIG1vcmUgPGJyIC8+dG8gY29tcGFyZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctY21wcmUtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRlLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoaWRlLWFsbFwiIG9uQ2xpY2s9e3RoaXMudmlld0FsbC5iaW5kKHRoaXMpfT57dGhpcy5zdGF0ZS52aWV3QWxsPydIaWRlIEFsbCc6J1ZpZXcgQWxsJ30gPGltZyBjbGFzc05hbWU9eyF0aGlzLnN0YXRlLnZpZXdBbGw/J2FjcmQtYXJ3LXJvdGF0ZScgOiAnYWNyZC1zaG93J30gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWFnZXMvZG93bi1hcnJvdy1vLnBuZ1wifSBhbHQ9XCJcIiAvPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRhdGEuY2F0ZWdvcnlfaW5mbz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGF0YS5jYXRlZ29yeV9pbmZvLm1hcCgoY2F0X2luZm8sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInBrZy1jYXJkLWNvbnRhaW5lciBtYi0zXCIgKyAodGhpcy5zdGF0ZS5pc0RpZmZDaGVja2VkICYmIHRoaXMuc3RhdGUuaXNEaWZmVGVzdC5pbmRleE9mKGNhdF9pbmZvLmlkKSAhPSAtMSA/JyBkLW5vbmUnOicnKX0ga2V5PXtpfSBpZD17J2NhdF8nK2NhdF9pbmZvLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctY3JkLWhlYWRlciBsaWdodC1vcm5nLWhlYWRlclwiIG9uQ2xpY2s9e3RoaXMuQnV0dG9uSGFuZGxlci5iaW5kKHRoaXMsY2F0X2luZm8uaWQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2F0X2luZm8ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnRhYnNWYWx1ZS5pbmRleE9mKGNhdF9pbmZvLmlkKSA+IC0xID8gJyBhY3JkLXNob3cgc3Bhbi1pbWcnIDogJ2FjcmQtYXJ3LXJvdGF0ZSBzcGFuLWltZyd9PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWFnZXMvdXAtYXJyb3cucG5nXCJ9IGFsdD1cIlwiIC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUudGFic1ZhbHVlLmluZGV4T2YoY2F0X2luZm8uaWQpID4gLTEgPyAnZC1ub25lJyA6ICcnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ0b3AtaGVhZC1pbmZvIG11bHRpcGxlLXBrZ3MgcGFyZW50LWluZm8gY2F0ZWdvcnktZG9uZVwiICsgKHRoaXMucHJvcHMuZGF0YS5wYWNrYWdlcy5sZW5ndGggPD0gMj8nIHBrYmNsc1R3byc6dGhpcy5wcm9wcy5kYXRhLnBhY2thZ2VzLmxlbmd0aCA8PSAzPycgcGtiY2xzVGhyZWUnOnRoaXMucHJvcHMuZGF0YS5wYWNrYWdlcy5sZW5ndGggPD0gND8nIHBrYmNsc0ZvdXInOicnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGtnQ2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRhdGEucGFja2FnZXMubWFwKChjYXRfY291bnQsIGopID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdF9pbmZvX2RhdGEgPSBjYXRfY291bnQuY2F0ZWdvcnlfcGFyYW1ldGVyX2NvdW50LmZpbHRlcih4PT4geC5pZD09Y2F0X2luZm8uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYXRfaW5mb19kYXRhWzBdLmNvdW50ID4gMD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPXtjYXRfaW5mb19kYXRhWzBdLmlkfSBrZXk9e2p9PntjYXRfaW5mb19kYXRhWzBdLmNvdW50fSB7Y2F0X2luZm9fZGF0YVswXS5jb3VudCA9PSAxPyd0ZXN0JzondGVzdHMnfSA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PGxpIGlkPXtjYXRfaW5mb19kYXRhWzBdLmlkfSBrZXk9e2p9Pk5pbDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRfaW5mby50ZXN0X2lkcy5tYXAoKHRlc3RfaWQsIGspID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXN0RGF0YT0gc2VsZi5wcm9wcy5kYXRhLnRlc3RfaW5mby5maWx0ZXIoeD0+IHguaWQgPT0gdGVzdF9pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtrfSBpZD0ge3Rlc3REYXRhWzBdLmlkfSBjbGFzc05hbWU9e3RoaXMuc3RhdGUuaXNEaWZmQ2hlY2tlZCAmJiB0aGlzLnN0YXRlLmlzRGlmZlRlc3QuaW5kZXhPZih0ZXN0RGF0YVswXS5pZCkgIT0gLTE/JyBkLW5vbmUnOicnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdERhdGFbMF0ucGFyYW1ldGVycy5sZW5ndGggPiAwP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1jcmQtaGVhZGVyIGxpZ2h0LW9ybmctaGVhZGVyIGdyZXktaGVhZCB0ZXN0LWRvbmVcIiBvbkNsaWNrPXt0aGlzLkJ1dHRvbkhhbmRsZXIuYmluZCh0aGlzLHRlc3REYXRhWzBdLmlkKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Rlc3REYXRhWzBdLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS50YWJzVmFsdWUuaW5kZXhPZih0ZXN0RGF0YVswXS5pZCkgPiAtMSA/ICdhY3JkLWFydy1yb3RhdGUgc3Bhbi1pbWcnIDogJ2FjcmQtc2hvdyBzcGFuLWltZyd9PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWFnZXMvdXAtYXJyb3cucG5nXCJ9IGFsdD1cIlwiIC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1jcmQtaGVhZGVyIGxpZ2h0LW9ybmctaGVhZGVyIGdyZXktaGVhZCB0ZXN0LWRvbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGVzdERhdGFbMF0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ0b3AtaGVhZC1pbmZvIG11bHRpcGxlLXBrZ3MgbXVsdGlwbGUtcGtncy1kZXRhaWxzXCIgKyAodGhpcy5wcm9wcy5kYXRhLnBhY2thZ2VzLmxlbmd0aCA8PSAyPycgcGtiY2xzVHdvJzp0aGlzLnByb3BzLmRhdGEucGFja2FnZXMubGVuZ3RoIDw9IDM/JyBwa2JjbHNUaHJlZSc6dGhpcy5wcm9wcy5kYXRhLnBhY2thZ2VzLmxlbmd0aCA8PSA0PycgcGtiY2xzRm91cic6JycpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGtnQ2xzIHRlc3RQYXJhbSBuZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9wcy5kYXRhLnBhY2thZ2VzLm1hcCgocGtnX3Rlc3QsIG4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlVGVzdD1wa2dfdGVzdC50ZXN0c19pbmNsdWRlZC5maWx0ZXIoeD0+IHgudGVzdF9pZCA9PSB0ZXN0X2lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXZhaWxhYmxlVGVzdFswXS5hdmFpbGFibGU/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17bn0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1hZ2VzL3BhY2thZ2VDb21wYXJlL2NoZWNrLTAxLnN2Z1wifSBzdHlsZT17e3dpZHRoOicxNHB4J319Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltYWdlcy9wYWNrYWdlQ29tcGFyZS9jcm9zcy0wMS5zdmdcIn0gc3R5bGU9e3t3aWR0aDonMTRweCd9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aysxfSBjbGFzc05hbWU9e3RoaXMuc3RhdGUudGFic1ZhbHVlLmluZGV4T2YodGVzdERhdGFbMF0uaWQpID4gLTEgPyAnJyA6ICdkLW5vbmUnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widG9wLWhlYWQtaW5mbyBtdWx0aXBsZS1wa2dzIG11bHRpcGxlLXBrZ3MtZGV0YWlsc1wiICsgKHRoaXMucHJvcHMuZGF0YS5wYWNrYWdlcy5sZW5ndGggPD0gMj8nIHBrYmNsc1R3byc6dGhpcy5wcm9wcy5kYXRhLnBhY2thZ2VzLmxlbmd0aCA8PSAzPycgcGtiY2xzVGhyZWUnOnRoaXMucHJvcHMuZGF0YS5wYWNrYWdlcy5sZW5ndGggPD0gND8nIHBrYmNsc0ZvdXInOicnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBrZ0NscyB0ZXN0UGFyYW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9wcy5kYXRhLnBhY2thZ2VzLm1hcCgocGtnX3Rlc3QsIG4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlVGVzdD1wa2dfdGVzdC50ZXN0c19pbmNsdWRlZC5maWx0ZXIoeD0+IHgudGVzdF9pZCA9PSB0ZXN0X2lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXZhaWxhYmxlVGVzdFswXS5hdmFpbGFibGU/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17bn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXN0RGF0YVswXS5wYXJhbWV0ZXJzLmxlbmd0aCA+IDA/dGVzdERhdGFbMF0ucGFyYW1ldGVycy5tYXAoKHRlc3RfcGFyYW0sbykgPT57IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGtleT17b30+e3Rlc3RfcGFyYW19PC9zcGFuPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXN0RGF0YVswXS5wYXJhbWV0ZXJzLmxlbmd0aCA+IDA/dGVzdERhdGFbMF0ucGFyYW1ldGVycy5tYXAoKHRlc3RfcGFyYW0sbykgPT57IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGtleT17b30+PGltZyBjbGFzc05hbWU9XCJ4LWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1hZ2VzL3BhY2thZ2VDb21wYXJlL2Nyb3NzLTAxLnN2Z1wifSBzdHlsZT17e3dpZHRoOicxNHB4J319Lz48L3NwYW4+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6Jyd9XG4gICAgICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kYXRhLnBhY2thZ2VzP1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1jYXJkLWNvbnRhaW5lciBtYi0zIGF2YWlsYWJsZS1kb25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInRvcC1oZWFkLWluZm8gbXVsdGlwbGUtcGtncyBwYXJlbnQtaW5mbyBjYXRlZ29yeS1kb25lXCIgKyAodGhpcy5wcm9wcy5kYXRhLnBhY2thZ2VzLmxlbmd0aCA8PSAyPycgcGtiY2xzVHdvJzp0aGlzLnByb3BzLmRhdGEucGFja2FnZXMubGVuZ3RoIDw9IDM/JyBwa2JjbHNUaHJlZSc6dGhpcy5wcm9wcy5kYXRhLnBhY2thZ2VzLmxlbmd0aCA8PSA0PycgcGtiY2xzRm91cic6JycpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGtnQ2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGF0YS5wYWNrYWdlcy5tYXAoKHBhY2tnLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhY2tnLnRvdGFsX2xhYnNfYXZhaWxhYmxlID4wID88bGkgb25DbGljaz17dGhpcy5zaG93TGFicy5iaW5kKHRoaXMscGFja2cuaWQpfSBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT5BdmFpbGFibGUgaW4gPHNwYW4gc3R5bGU9e3tjb2xvcjonI2Y3ODYzMSd9fT57cGFja2cudG90YWxfbGFic19hdmFpbGFibGV9PC9zcGFuPiBtb3JlIGxhYnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8bGk+TmlsPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA6Jyd9XG4gICAgICAgICAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRhdGEuYm90dG9tX2NvbnRlbnQgJiYgdGhpcy5wcm9wcy5kYXRhLmJvdHRvbV9jb250ZW50Lmxlbmd0aD9cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBtcnQtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0LWNhcmQtY29sbHBhc2VcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRoaXMucHJvcHMuZGF0YS5ib3R0b21fY29udGVudCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgIDxEaXNjbGFpbWVyLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICAgIH1cbiAgICB9XG59XG4gIGV4cG9ydCBkZWZhdWx0IFBhY2thZ2VDb21wYXJlVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBMZWZ0QmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9MZWZ0QmFyJ1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9SaWdodEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0hvbWUvZm9vdGVyJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvTG9hZGVyJ1xuXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG5pbXBvcnQgeyBnZXRDb21wYXJlTGlzdCwgdG9nZ2xlY29tcGFyZUNyaXRlcmlhLCBzZXRQYWNrYWdlSWQsIHNlbGVjdFNlYXJjaFR5cGUsIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhLCBjbGVhckV4dHJhVGVzdHMsIHNlbmRBZ2VudFdoYXRzdXBQYWdlVVJMIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCB7IH0gZnJvbSAnLi4vLi4vaGVscGVycy91cmx0b1N0YXRlJ1xuaW1wb3J0IFBhY2thZ2VDb21wYXJlVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2RpYWdub3Npcy9zZWFyY2hQYWNrYWdlcy9wYWNrYWdlQ29tcGFyZS9wYWNrYWdlQ29tcGFyZVZpZXcuanMnXG5cbiAgY2xhc3MgcGFja2FnZUNvbXBhcmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlPXtcbiAgICAgICAgICBzaG93Q29tcGFyZTpmYWxzZSxcbiAgICAgICAgICBkYXRhOm51bGwsXG4gICAgICAgICAgaXNfY2F0ZWdvcnk6ZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgcmVzZXRDb21wYXJlRGF0YT1bXVxuICAgICAgICBsZXQgZGF0YSA9IFtdXG4gICAgICAgIGxldCBwYWNrYWdlX2lkc1xuICAgICAgICBsZXQgcGFja2FnZV91cmwgPSAnJ1xuICAgICAgICBsZXQgY2F0ZWdvcnlfaWRzID0gIG51bGxcbiAgICAgICAgaWYocGFyc2VkLnBhY2thZ2VfaWRzKXtcbiAgICAgICAgICBwYWNrYWdlX2lkcyA9IHBhcnNlZC5wYWNrYWdlX2lkcy5zcGxpdCgnLCcpICBcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiLWhwY3BcIikpe1xuICAgICAgICAgIHBhY2thZ2VfdXJsID0gdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpXG4gICAgICAgICAgcGFja2FnZV91cmwgPSBwYWNrYWdlX3VybFsxXVxuICAgICAgICB9XG4gICAgICAgIGlmKHBhcnNlZC5jYXRlZ29yeV9pZHMpe1xuICAgICAgICAgIGNhdGVnb3J5X2lkcyA9IHBhcnNlZC5jYXRlZ29yeV9pZHNcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc19jYXRlZ29yeTp0cnVlfSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgaWRzID0gJydcbiAgICAgICAgaWYocGFja2FnZV9pZHMgfHwgcGFja2FnZV91cmwgfHwgY2F0ZWdvcnlfaWRzKXtcbiAgICAgICAgICBpZihwYWNrYWdlX2lkcyAmJiBwYWNrYWdlX2lkcy5sZW5ndGggPiAwICYmIHBhY2thZ2VfaWRzICE9XCJcIil7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhwYWNrYWdlX2lkcykubWFwKGZ1bmN0aW9uIChba2V5LCBwa2ddKSB7XG4gICAgICAgICAgICAgIGlkcyA9IHBrZy5zcGxpdCgnLScpXG4gICAgICAgICAgICAgIGRhdGEucHVzaCh7cGFja2FnZV9pZDppZHNbMF0sIGxhYl9pZDogaWRzWzFdfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucHJvcHMuZ2V0Q29tcGFyZUxpc3QoZGF0YSx0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24scGFja2FnZV91cmwsY2F0ZWdvcnlfaWRzLChyZXNwKT0+eyAvLyBjb21wYXJpc2lvbiByZXN1bHRzIGZvciBzZWxlY3RlZCBwYWNrYWdlc1xuICAgICAgICAgICAgaWYocmVzcCl7XG4gICAgICAgICAgICAgIGxldCB0ZXN0ID0ge31cbiAgICAgICAgICAgICAgICByZXNwLnBhY2thZ2VzLm1hcCgocGtnLGkpID0+e1xuICAgICAgICAgICAgICAgICAgdGVzdCA9IHt9XG4gICAgICAgICAgICAgICAgICB0ZXN0LmlkPXBrZy5pZFxuICAgICAgICAgICAgICAgICAgdGVzdC5sYWJfaWQ9cGtnLmxhYi5pZFxuICAgICAgICAgICAgICAgICAgdGVzdC5uYW1lPXBrZy5uYW1lXG4gICAgICAgICAgICAgICAgICB0ZXN0LmltZyA9IHBrZy5sYWIudGh1bWJuYWlsXG4gICAgICAgICAgICAgICAgICByZXNldENvbXBhcmVEYXRhLnB1c2godGVzdClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBpZighY2F0ZWdvcnlfaWRzKXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZWNvbXBhcmVDcml0ZXJpYShyZXNldENvbXBhcmVEYXRhLHRydWUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7J3Nob3dDb21wYXJlJzp0cnVlLCdkYXRhJzpyZXNwfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3NlYXJjaHBhY2thZ2VzJylcbiAgICAgICAgfVxuICAgICAgfSAgXG4gICAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc2hvd0NvbXBhcmUpe1xuICAgICAgICByZXR1cm4gKCA8UGFja2FnZUNvbXBhcmVWaWV3IHsuLi50aGlzLnByb3BzfSBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IHNob3dDb21wYXJlPXt0aGlzLnN0YXRlLnNob3dDb21wYXJlfSBpc19jYXRlZ29yeT17dGhpcy5zdGF0ZS5pc19jYXRlZ29yeX0vPiAgXG4gICAgICAgICAgKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICByZXR1cm4oIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiA1NCB9fT5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciBzaG93UGFja2FnZVN0cmlwPXt0cnVlfS8+XG4gICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwa2dDb21hcHJlIGNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8TG9hZGVyIC8+ICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwYXNzZWRQcm9wcykgPT4ge1xuXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGNvbXBhcmVfcGFja2FnZXMsXG4gICAgICAgICAgICBzZWxlY3RlZExvY2F0aW9uXG5cbiAgICAgICAgfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9MQUJTXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbXBhcmVfcGFja2FnZXMsXG4gICAgICAgICAgICBzZWxlY3RlZExvY2F0aW9uXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0Q29tcGFyZUxpc3Q6KHNlbGVjdGVkSWRzLHNlbGVjdGVkTG9jYXRpb24sc2VhcmNoQnlVcmwsY2F0X2lkLGNiKSA9PiBkaXNwYXRjaChnZXRDb21wYXJlTGlzdChzZWxlY3RlZElkcyxzZWxlY3RlZExvY2F0aW9uLHNlYXJjaEJ5VXJsLGNhdF9pZCxjYikpLFxuICAgICAgICAgICAgdG9nZ2xlY29tcGFyZUNyaXRlcmlhOiAoY3JpdGVyaWEscmVzZXQpID0+IGRpc3BhdGNoKHRvZ2dsZWNvbXBhcmVDcml0ZXJpYShjcml0ZXJpYSxyZXNldCkpLFxuICAgICAgICAgICAgc2V0UGFja2FnZUlkOiAocGFja2FnZV9pZCwgaXNIb21lUGFnZSkgPT4gZGlzcGF0Y2goc2V0UGFja2FnZUlkKHBhY2thZ2VfaWQsIGlzSG9tZVBhZ2UpKSxcbiAgICAgICAgICAgIHNlbGVjdFNlYXJjaFR5cGU6ICh0eXBlKSA9PiBkaXNwYXRjaChzZWxlY3RTZWFyY2hUeXBlKHR5cGUpKSxcbiAgICAgICAgICAgIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhOiAodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkLCBmaWx0ZXIpID0+IGRpc3BhdGNoKHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCwgZmlsdGVyKSksXG4gICAgICAgICAgICBjbGVhckV4dHJhVGVzdHM6ICgpID0+IGRpc3BhdGNoKGNsZWFyRXh0cmFUZXN0cygpKSxcbiAgICAgICAgICAgIHNlbmRBZ2VudFdoYXRzdXBQYWdlVVJMOiAoZXh0cmFQYXJhbXMsIGNiKSA9PiBkaXNwYXRjaChzZW5kQWdlbnRXaGF0c3VwUGFnZVVSTChleHRyYVBhcmFtcywgY2IpKVxuXG4gICAgICAgIH1cbiAgICB9XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShwYWNrYWdlQ29tcGFyZSk7Il0sInNvdXJjZVJvb3QiOiIifQ==