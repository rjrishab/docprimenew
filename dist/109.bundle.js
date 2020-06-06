(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[109],{

/***/ "./dev/js/components/commons/IpdList/IpdListView.js":
/*!**********************************************************!*\
  !*** ./dev/js/components/commons/IpdList/IpdListView.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _DesktopProfileHeader = __webpack_require__(/*! ../DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _HelmetTags = __webpack_require__(/*! ../HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _config = __webpack_require__(/*! ../../../config/config */ "./dev/js/config/config.js");

var _config2 = _interopRequireDefault(_config);

var _footer = __webpack_require__(/*! ../Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestsListView = function (_React$Component) {
    _inherits(TestsListView, _React$Component);

    function TestsListView(props) {
        _classCallCheck(this, TestsListView);

        var _this = _possibleConstructorReturn(this, (TestsListView.__proto__ || Object.getPrototypeOf(TestsListView)).call(this, props));

        _this.state = {
            selectedChar: 0
        };
        return _this;
    }

    _createClass(TestsListView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.updateData(this.state.selectedChar);
        }
    }, {
        key: 'getCharacter',
        value: function getCharacter(index) {
            return String.fromCharCode(97 + index);
        }
    }, {
        key: 'updateData',
        value: function updateData(index) {
            var character = this.getCharacter(index);
            this.props.getIPDAlphabetically(character, this.props.selectedLocation);
        }
    }, {
        key: 'alphabetClick',
        value: function alphabetClick(index) {
            this.setState({ selectedChar: index });
            this.updateData(index);
        }
    }, {
        key: 'getAlphabets',
        value: function getAlphabets() {
            var alphabets = [];
            for (var i = 0; i <= 25; i++) {
                alphabets.push(String.fromCharCode(65 + i));
            }
            return alphabets;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var alphabets = this.getAlphabets();
            var selectedAlphabet = this.getCharacter(this.state.selectedChar);
            var data = this.props;
            return _react2.default.createElement(
                'div',
                { className: 'profile-body-wrap' },
                _react2.default.createElement(_DesktopProfileHeader2.default, this.props),
                _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                        title: 'Procedures Index | Details, Preparation, Procedure and Normal Range',
                        description: 'Procedures Index: Find detailed information about test preparation, procedure, normal ranges, duration and more.',
                        canonicalUrl: '' + _config2.default.API_BASE_URL + this.props.match.url
                    } }),
                _react2.default.createElement(
                    'section',
                    { className: 'container dp-container-div' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row main-row parent-section-row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12' },
                            _react2.default.createElement(
                                'ul',
                                { className: 'mrb-10 mrt-20 breadcrumb-list', style: { wordBreak: 'break-word' } },
                                _react2.default.createElement(
                                    'li',
                                    { className: 'breadcrumb-list-item' },
                                    _react2.default.createElement(
                                        'a',
                                        { href: '/', onClick: function onClick(e) {
                                                e.preventDefault();
                                                _this2.props.history.push('/');
                                            } },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'fw-500 breadcrumb-title breadcrumb-colored-title' },
                                            'Home'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'breadcrumb-arrow' },
                                        '>'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'breadcrumb-list-item' },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'fw-500 breadcrumb-title' },
                                        'Procedures'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'h1',
                                    { className: 'fw-500 sitemap-title' },
                                    'Procedure Index'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'd-flex align-items-center mrb-10 mrt-20 test-index-div' },
                                alphabets && alphabets.length ? alphabets.map(function (character, i) {
                                    return _react2.default.createElement(
                                        'div',
                                        { key: i, className: i == _this2.state.selectedChar ? 'charSelected' : '', onClick: function onClick() {
                                                return _this2.alphabetClick(i);
                                            } },
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            character
                                        )
                                    );
                                }) : ''
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'row sitemap-row' },
                                this.props.alphabeticalIpdTests && this.props.alphabeticalIpdTests.ipd_procedures && this.props.alphabeticalIpdTests.ipd_procedures.length && selectedAlphabet == this.props.selectedIpdListAlphabet ? this.props.alphabeticalIpdTests.ipd_procedures.map(function (test, index) {
                                    return _react2.default.createElement(
                                        'div',
                                        { key: index, className: 'col-12 col-md-6 col-lg-4 tests-brdr-btm' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'anchor-data-style', onClick: function onClick() {
                                                    return _this2.props.history.push('/' + (test.url ? test.url : 'ipdInfo?ipd_id=' + test.id));
                                                } },
                                            test.url ? _react2.default.createElement(
                                                'div',
                                                null,
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: '/' + test.url, onClick: function onClick(e) {
                                                            e.preventDefault();
                                                        } },
                                                    test.name
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'sitemap-right-arrow' },
                                                    _react2.default.createElement('img', { src: '/assets/img/customer-icons/arrow-forward-right.svg' })
                                                )
                                            ) : _react2.default.createElement(
                                                'span',
                                                { style: { cursor: 'pointer' } },
                                                test.name
                                            )
                                        )
                                    );
                                }) : !!!this.props.ipdIndexLoading ? _react2.default.createElement(
                                    'div',
                                    { className: 'col-12 fw-500 text-center mrt-20', style: { fontSize: 18 } },
                                    'No record Found !!'
                                ) : ''
                            )
                        )
                    )
                ),
                _react2.default.createElement(_footer2.default, null)
            );
        }
    }]);

    return TestsListView;
}(_react2.default.Component);

exports.default = TestsListView;

/***/ }),

/***/ "./dev/js/containers/commons/ipdLists.js":
/*!***********************************************!*\
  !*** ./dev/js/containers/commons/ipdLists.js ***!
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

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _IpdListView = __webpack_require__(/*! ../../components/commons/IpdList/IpdListView */ "./dev/js/components/commons/IpdList/IpdListView.js");

var _IpdListView2 = _interopRequireDefault(_IpdListView);

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestsList = function (_React$Component) {
    _inherits(TestsList, _React$Component);

    function TestsList() {
        _classCallCheck(this, TestsList);

        return _possibleConstructorReturn(this, (TestsList.__proto__ || Object.getPrototypeOf(TestsList)).apply(this, arguments));
    }

    _createClass(TestsList, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_IpdListView2.default, this.props);
        }
    }], [{
        key: 'loadData',
        value: function loadData(store, match) {
            return store.dispatch((0, _index.getIPDAlphabetically)('a'));
        }
    }]);

    return TestsList;
}(_react2.default.Component);

TestsList.contextTypes = {
    router: function router() {
        return null;
    }
};


var mapStateToProps = function mapStateToProps(state) {
    var _state$SITE_MAP = state.SITE_MAP,
        alphabeticalIpdTests = _state$SITE_MAP.alphabeticalIpdTests,
        selectedIpdListAlphabet = _state$SITE_MAP.selectedIpdListAlphabet,
        ipdIndexLoading = _state$SITE_MAP.ipdIndexLoading;
    var selectedLocation = state.SEARCH_CRITERIA_OPD.selectedLocation;


    return {
        alphabeticalIpdTests: alphabeticalIpdTests,
        selectedIpdListAlphabet: selectedIpdListAlphabet,
        ipdIndexLoading: ipdIndexLoading,
        selectedLocation: selectedLocation
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        getIPDAlphabetically: function getIPDAlphabetically(character, selectedLocation) {
            return dispatch((0, _index.getIPDAlphabetically)(character, selectedLocation));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TestsList);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0lwZExpc3QvSXBkTGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy9pcGRMaXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGF0aC1icm93c2VyaWZ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvZXMvaW5kZXguanMiXSwibmFtZXMiOlsiVGVzdHNMaXN0VmlldyIsInByb3BzIiwic3RhdGUiLCJzZWxlY3RlZENoYXIiLCJ1cGRhdGVEYXRhIiwiaW5kZXgiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJjaGFyYWN0ZXIiLCJnZXRDaGFyYWN0ZXIiLCJnZXRJUERBbHBoYWJldGljYWxseSIsInNlbGVjdGVkTG9jYXRpb24iLCJzZXRTdGF0ZSIsImFscGhhYmV0cyIsImkiLCJwdXNoIiwiZ2V0QWxwaGFiZXRzIiwic2VsZWN0ZWRBbHBoYWJldCIsImRhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY2Fub25pY2FsVXJsIiwiQ09ORklHIiwiQVBJX0JBU0VfVVJMIiwibWF0Y2giLCJ1cmwiLCJ3b3JkQnJlYWsiLCJlIiwicHJldmVudERlZmF1bHQiLCJoaXN0b3J5IiwibGVuZ3RoIiwibWFwIiwiYWxwaGFiZXRDbGljayIsImFscGhhYmV0aWNhbElwZFRlc3RzIiwiaXBkX3Byb2NlZHVyZXMiLCJzZWxlY3RlZElwZExpc3RBbHBoYWJldCIsInRlc3QiLCJpZCIsIm5hbWUiLCJjdXJzb3IiLCJpcGRJbmRleExvYWRpbmciLCJmb250U2l6ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiVGVzdHNMaXN0Iiwic3RvcmUiLCJkaXNwYXRjaCIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsIlNJVEVfTUFQIiwiU0VBUkNIX0NSSVRFUklBX09QRCIsIm1hcERpc3Bh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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3U0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkM7QUFDRjtBQUNWO0FBQ0Y7QUFDTTtBQUNGO0FBQ0o7QUFDRjtBQUNJO0FBQ0Y7QUFDYztBQUNGO0FBQ1Y7QUFDRjtBQUNjO0FBQ0Y7QUFDSjtBQUNGO0FBQ0kiLCJmaWxlIjoiMTA5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uL0Rlc2t0b3BQcm9maWxlSGVhZGVyJztcbmltcG9ydCBIZWxtZXRUYWdzIGZyb20gJy4uL0hlbG1ldFRhZ3MnO1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi8uLi9jb25maWcvY29uZmlnJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vSG9tZS9mb290ZXInO1xuXG5jbGFzcyBUZXN0c0xpc3RWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWRDaGFyOiAwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVEYXRhKHRoaXMuc3RhdGUuc2VsZWN0ZWRDaGFyKVxuICAgIH1cblxuICAgIGdldENoYXJhY3RlcihpbmRleCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSg5NyArIGluZGV4KVxuICAgIH1cblxuICAgIHVwZGF0ZURhdGEoaW5kZXgpIHtcbiAgICAgICAgbGV0IGNoYXJhY3RlciA9IHRoaXMuZ2V0Q2hhcmFjdGVyKGluZGV4KVxuICAgICAgICB0aGlzLnByb3BzLmdldElQREFscGhhYmV0aWNhbGx5KGNoYXJhY3RlciwgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKVxuICAgIH1cblxuICAgIGFscGhhYmV0Q2xpY2soaW5kZXgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkQ2hhcjogaW5kZXggfSlcbiAgICAgICAgdGhpcy51cGRhdGVEYXRhKGluZGV4KVxuICAgIH1cblxuICAgIGdldEFscGhhYmV0cygpIHtcbiAgICAgICAgbGV0IGFscGhhYmV0cyA9IFtdXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDI1OyBpKyspIHtcbiAgICAgICAgICAgIGFscGhhYmV0cy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBpKSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWxwaGFiZXRzXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgYWxwaGFiZXRzID0gdGhpcy5nZXRBbHBoYWJldHMoKVxuICAgICAgICBsZXQgc2VsZWN0ZWRBbHBoYWJldCA9IHRoaXMuZ2V0Q2hhcmFjdGVyKHRoaXMuc3RhdGUuc2VsZWN0ZWRDaGFyKVxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMucHJvcHNcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8SGVsbWV0VGFncyB0YWdzRGF0YT17e1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1Byb2NlZHVyZXMgSW5kZXggfCBEZXRhaWxzLCBQcmVwYXJhdGlvbiwgUHJvY2VkdXJlIGFuZCBOb3JtYWwgUmFuZ2UnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb2NlZHVyZXMgSW5kZXg6IEZpbmQgZGV0YWlsZWQgaW5mb3JtYXRpb24gYWJvdXQgdGVzdCBwcmVwYXJhdGlvbiwgcHJvY2VkdXJlLCBub3JtYWwgcmFuZ2VzLCBkdXJhdGlvbiBhbmQgbW9yZS4nLFxuICAgICAgICAgICAgICAgICAgICBjYW5vbmljYWxVcmw6IGAke0NPTkZJRy5BUElfQkFTRV9VUkx9JHt0aGlzLnByb3BzLm1hdGNoLnVybH1gXG4gICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgZHAtY29udGFpbmVyLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1yYi0xMCBtcnQtMjAgYnJlYWRjcnVtYi1saXN0XCIgc3R5bGU9e3sgd29yZEJyZWFrOiAnYnJlYWstd29yZCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCBicmVhZGNydW1iLXRpdGxlIGJyZWFkY3J1bWItY29sb3JlZC10aXRsZVwiPkhvbWU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmVhZGNydW1iLWFycm93XCI+Jmd0Ozwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDAgYnJlYWRjcnVtYi10aXRsZVwiPlByb2NlZHVyZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZnctNTAwIHNpdGVtYXAtdGl0bGVcIj5Qcm9jZWR1cmUgSW5kZXg8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtcmItMTAgbXJ0LTIwIHRlc3QtaW5kZXgtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFscGhhYmV0cyAmJiBhbHBoYWJldHMubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHBoYWJldHMubWFwKChjaGFyYWN0ZXIsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e2kgPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZENoYXIgPyAnY2hhclNlbGVjdGVkJyA6ICcnfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmFscGhhYmV0Q2xpY2soaSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NoYXJhY3Rlcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHNpdGVtYXAtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWxwaGFiZXRpY2FsSXBkVGVzdHMgJiYgdGhpcy5wcm9wcy5hbHBoYWJldGljYWxJcGRUZXN0cy5pcGRfcHJvY2VkdXJlcyAmJiB0aGlzLnByb3BzLmFscGhhYmV0aWNhbElwZFRlc3RzLmlwZF9wcm9jZWR1cmVzLmxlbmd0aCAmJiAoc2VsZWN0ZWRBbHBoYWJldCA9PSB0aGlzLnByb3BzLnNlbGVjdGVkSXBkTGlzdEFscGhhYmV0KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hbHBoYWJldGljYWxJcGRUZXN0cy5pcGRfcHJvY2VkdXJlcy5tYXAoKHRlc3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNCB0ZXN0cy1icmRyLWJ0bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmNob3ItZGF0YS1zdHlsZVwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHt0ZXN0LnVybD90ZXN0LnVybDpgaXBkSW5mbz9pcGRfaWQ9JHt0ZXN0LmlkfWB9YCkgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3QudXJsID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC8ke3Rlc3QudXJsfWB9IG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Pnt0ZXN0Lm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpdGVtYXAtcmlnaHQtYXJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltZy9jdXN0b21lci1pY29ucy9hcnJvdy1mb3J3YXJkLXJpZ2h0LnN2Z1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSA+e3Rlc3QubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAhISF0aGlzLnByb3BzLmlwZEluZGV4TG9hZGluZyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGZ3LTUwMCB0ZXh0LWNlbnRlciBtcnQtMjBcIiBzdHlsZT17eyBmb250U2l6ZTogMTggfX0gPk5vIHJlY29yZCBGb3VuZCAhITwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RzTGlzdFZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgSXBkTGlzdFZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0lwZExpc3QvSXBkTGlzdFZpZXcnO1xuaW1wb3J0IHsgZ2V0SVBEQWxwaGFiZXRpY2FsbHkgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuXG5jbGFzcyBUZXN0c0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgc3RhdGljIGxvYWREYXRhKHN0b3JlLCBtYXRjaCkge1xuICAgICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZ2V0SVBEQWxwaGFiZXRpY2FsbHkoJ2EnKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICByb3V0ZXI6ICgpID0+IG51bGxcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxJcGRMaXN0VmlldyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBhbHBoYWJldGljYWxJcGRUZXN0cyxcbiAgICAgICAgc2VsZWN0ZWRJcGRMaXN0QWxwaGFiZXQsXG4gICAgICAgIGlwZEluZGV4TG9hZGluZ1xuICAgIH0gPSBzdGF0ZS5TSVRFX01BUFxuXG4gICAgY29uc3Qge1xuICAgICAgICBzZWxlY3RlZExvY2F0aW9uXG4gICAgfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9PUERcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFscGhhYmV0aWNhbElwZFRlc3RzLFxuICAgICAgICBzZWxlY3RlZElwZExpc3RBbHBoYWJldCxcbiAgICAgICAgaXBkSW5kZXhMb2FkaW5nLFxuICAgICAgICBzZWxlY3RlZExvY2F0aW9uXG4gICAgfVxufVxuXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldElQREFscGhhYmV0aWNhbGx5OiAoY2hhcmFjdGVyLCBzZWxlY3RlZExvY2F0aW9uKSA9PiBkaXNwYXRjaChnZXRJUERBbHBoYWJldGljYWxseShjaGFyYWN0ZXIsIHNlbGVjdGVkTG9jYXRpb24pKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGVzdHNMaXN0KSIsIi8vIC5kaXJuYW1lLCAuYmFzZW5hbWUsIGFuZCAuZXh0bmFtZSBtZXRob2RzIGFyZSBleHRyYWN0ZWQgZnJvbSBOb2RlLmpzIHY4LjExLjEsXG4vLyBiYWNrcG9ydGVkIGFuZCB0cmFuc3BsaXRlZCB3aXRoIEJhYmVsLCB3aXRoIGJhY2t3YXJkcy1jb21wYXQgZml4ZXNcblxuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIHJlc29sdmVzIC4gYW5kIC4uIGVsZW1lbnRzIGluIGEgcGF0aCBhcnJheSB3aXRoIGRpcmVjdG9yeSBuYW1lcyB0aGVyZVxuLy8gbXVzdCBiZSBubyBzbGFzaGVzLCBlbXB0eSBlbGVtZW50cywgb3IgZGV2aWNlIG5hbWVzIChjOlxcKSBpbiB0aGUgYXJyYXlcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkocGFydHMsIGFsbG93QWJvdmVSb290KSB7XG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsYXN0ID0gcGFydHNbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKGFsbG93QWJvdmVSb290KSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBwYXJ0cy51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xufTtcblxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKSxcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBzdWJzdHIocGF0aCwgLTEpID09PSAnLyc7XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XG4gICAgcGF0aCA9ICcuJztcbiAgfVxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XG4gICAgcGF0aCArPSAnLyc7XG4gIH1cblxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuam9pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gZXhwb3J0cy5ub3JtYWxpemUoZmlsdGVyKHBhdGhzLCBmdW5jdGlvbihwLCBpbmRleCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9KS5qb2luKCcvJykpO1xufTtcblxuXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gIGZyb20gPSBleHBvcnRzLnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICB0byA9IGV4cG9ydHMucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuXG4gIGZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICBpZiAoYXJyW3N0YXJ0XSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XG4gICAgICBpZiAoYXJyW2VuZF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG5cbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgdmFyIHRvUGFydHMgPSB0cmltKHRvLnNwbGl0KCcvJykpO1xuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICB9XG5cbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcblxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufTtcblxuZXhwb3J0cy5zZXAgPSAnLyc7XG5leHBvcnRzLmRlbGltaXRlciA9ICc6JztcblxuZXhwb3J0cy5kaXJuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gJy4nO1xuICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdCgwKTtcbiAgdmFyIGhhc1Jvb3QgPSBjb2RlID09PSA0NyAvKi8qLztcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAxOyAtLWkpIHtcbiAgICBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIGVuZCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvclxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiBoYXNSb290ID8gJy8nIDogJy4nO1xuICBpZiAoaGFzUm9vdCAmJiBlbmQgPT09IDEpIHtcbiAgICAvLyByZXR1cm4gJy8vJztcbiAgICAvLyBCYWNrd2FyZHMtY29tcGF0IGZpeDpcbiAgICByZXR1cm4gJy8nO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKDAsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBiYXNlbmFtZShwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG5cbiAgdmFyIHN0YXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgdmFyIGk7XG5cbiAgZm9yIChpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIGlmIChwYXRoLmNoYXJDb2RlQXQoaSkgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gcGF0aCBjb21wb25lbnRcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiAnJztcbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnQsIGVuZCk7XG59XG5cbi8vIFVzZXMgYSBtaXhlZCBhcHByb2FjaCBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHksIGFzIGV4dCBiZWhhdmlvciBjaGFuZ2VkXG4vLyBpbiBuZXcgTm9kZS5qcyB2ZXJzaW9ucywgc28gb25seSBiYXNlbmFtZSgpIGFib3ZlIGlzIGJhY2twb3J0ZWQgaGVyZVxuZXhwb3J0cy5iYXNlbmFtZSA9IGZ1bmN0aW9uIChwYXRoLCBleHQpIHtcbiAgdmFyIGYgPSBiYXNlbmFtZShwYXRoKTtcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gZjtcbn07XG5cbmV4cG9ydHMuZXh0bmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIHZhciBzdGFydERvdCA9IC0xO1xuICB2YXIgc3RhcnRQYXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgLy8gVHJhY2sgdGhlIHN0YXRlIG9mIGNoYXJhY3RlcnMgKGlmIGFueSkgd2Ugc2VlIGJlZm9yZSBvdXIgZmlyc3QgZG90IGFuZFxuICAvLyBhZnRlciBhbnkgcGF0aCBzZXBhcmF0b3Igd2UgZmluZFxuICB2YXIgcHJlRG90U3RhdGUgPSAwO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydFBhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gZXh0ZW5zaW9uXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gNDYgLyouKi8pIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgZG90LCBtYXJrIGl0IGFzIHRoZSBzdGFydCBvZiBvdXIgZXh0ZW5zaW9uXG4gICAgICAgIGlmIChzdGFydERvdCA9PT0gLTEpXG4gICAgICAgICAgc3RhcnREb3QgPSBpO1xuICAgICAgICBlbHNlIGlmIChwcmVEb3RTdGF0ZSAhPT0gMSlcbiAgICAgICAgICBwcmVEb3RTdGF0ZSA9IDE7XG4gICAgfSBlbHNlIGlmIChzdGFydERvdCAhPT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgYW5kIG5vbi1wYXRoIHNlcGFyYXRvciBiZWZvcmUgb3VyIGRvdCwgc28gd2Ugc2hvdWxkXG4gICAgICAvLyBoYXZlIGEgZ29vZCBjaGFuY2UgYXQgaGF2aW5nIGEgbm9uLWVtcHR5IGV4dGVuc2lvblxuICAgICAgcHJlRG90U3RhdGUgPSAtMTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhcnREb3QgPT09IC0xIHx8IGVuZCA9PT0gLTEgfHxcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgY2hhcmFjdGVyIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgZG90XG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMCB8fFxuICAgICAgLy8gVGhlIChyaWdodC1tb3N0KSB0cmltbWVkIHBhdGggY29tcG9uZW50IGlzIGV4YWN0bHkgJy4uJ1xuICAgICAgcHJlRG90U3RhdGUgPT09IDEgJiYgc3RhcnREb3QgPT09IGVuZCAtIDEgJiYgc3RhcnREb3QgPT09IHN0YXJ0UGFydCArIDEpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnREb3QsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBmaWx0ZXIgKHhzLCBmKSB7XG4gICAgaWYgKHhzLmZpbHRlcikgcmV0dXJuIHhzLmZpbHRlcihmKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZih4c1tpXSwgaSwgeHMpKSByZXMucHVzaCh4c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFN0cmluZy5wcm90b3R5cGUuc3Vic3RyIC0gbmVnYXRpdmUgaW5kZXggZG9uJ3Qgd29yayBpbiBJRThcbnZhciBzdWJzdHIgPSAnYWInLnN1YnN0cigtMSkgPT09ICdiJ1xuICAgID8gZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikgeyByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKSB9XG4gICAgOiBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gc3RyLmxlbmd0aCArIHN0YXJ0O1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKTtcbiAgICB9XG47XG4iLCJpbXBvcnQgX01lbW9yeVJvdXRlciBmcm9tIFwiLi9NZW1vcnlSb3V0ZXJcIjtcbmV4cG9ydCB7IF9NZW1vcnlSb3V0ZXIgYXMgTWVtb3J5Um91dGVyIH07XG5pbXBvcnQgX1Byb21wdCBmcm9tIFwiLi9Qcm9tcHRcIjtcbmV4cG9ydCB7IF9Qcm9tcHQgYXMgUHJvbXB0IH07XG5pbXBvcnQgX1JlZGlyZWN0IGZyb20gXCIuL1JlZGlyZWN0XCI7XG5leHBvcnQgeyBfUmVkaXJlY3QgYXMgUmVkaXJlY3QgfTtcbmltcG9ydCBfUm91dGUgZnJvbSBcIi4vUm91dGVcIjtcbmV4cG9ydCB7IF9Sb3V0ZSBhcyBSb3V0ZSB9O1xuaW1wb3J0IF9Sb3V0ZXIgZnJvbSBcIi4vUm91dGVyXCI7XG5leHBvcnQgeyBfUm91dGVyIGFzIFJvdXRlciB9O1xuaW1wb3J0IF9TdGF0aWNSb3V0ZXIgZnJvbSBcIi4vU3RhdGljUm91dGVyXCI7XG5leHBvcnQgeyBfU3RhdGljUm91dGVyIGFzIFN0YXRpY1JvdXRlciB9O1xuaW1wb3J0IF9Td2l0Y2ggZnJvbSBcIi4vU3dpdGNoXCI7XG5leHBvcnQgeyBfU3dpdGNoIGFzIFN3aXRjaCB9O1xuaW1wb3J0IF9nZW5lcmF0ZVBhdGggZnJvbSBcIi4vZ2VuZXJhdGVQYXRoXCI7XG5leHBvcnQgeyBfZ2VuZXJhdGVQYXRoIGFzIGdlbmVyYXRlUGF0aCB9O1xuaW1wb3J0IF9tYXRjaFBhdGggZnJvbSBcIi4vbWF0Y2hQYXRoXCI7XG5leHBvcnQgeyBfbWF0Y2hQYXRoIGFzIG1hdGNoUGF0aCB9O1xuaW1wb3J0IF93aXRoUm91dGVyIGZyb20gXCIuL3dpdGhSb3V0ZXJcIjtcbmV4cG9ydCB7IF93aXRoUm91dGVyIGFzIHdpdGhSb3V0ZXIgfTsiXSwic291cmNlUm9vdCI6IiJ9