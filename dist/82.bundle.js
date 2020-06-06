(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

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

/***/ "./dev/js/components/commons/ratingsProfileView/AllRatingsView.js":
/*!************************************************************************!*\
  !*** ./dev/js/components/commons/ratingsProfileView/AllRatingsView.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactInfiniteScroller = __webpack_require__(/*! react-infinite-scroller */ "./node_modules/react-infinite-scroller/index.js");

var _reactInfiniteScroller2 = _interopRequireDefault(_reactInfiniteScroller);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _ComplimentListView = __webpack_require__(/*! ../../commons/ratingsProfileView/ComplimentListView.js */ "./dev/js/components/commons/ratingsProfileView/ComplimentListView.js");

var _ComplimentListView2 = _interopRequireDefault(_ComplimentListView);

var _ReviewList = __webpack_require__(/*! ../../commons/ratingsProfileView/ReviewList.js */ "./dev/js/components/commons/ratingsProfileView/ReviewList.js");

var _ReviewList2 = _interopRequireDefault(_ReviewList);

var _RatingGraph = __webpack_require__(/*! ../../commons/ratingsProfileView/RatingGraph.js */ "./dev/js/components/commons/ratingsProfileView/RatingGraph.js");

var _RatingGraph2 = _interopRequireDefault(_RatingGraph);

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _footer = __webpack_require__(/*! ../../commons/Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _staticDisclaimer = __webpack_require__(/*! ../../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var AllRatingsView = function (_React$Component) {
    _inherits(AllRatingsView, _React$Component);

    function AllRatingsView(props) {
        _classCallCheck(this, AllRatingsView);

        var _this = _possibleConstructorReturn(this, (AllRatingsView.__proto__ || Object.getPrototypeOf(AllRatingsView)).call(this, props));

        _this.state = {
            data: null,
            hasMore: false,
            footerData: null,
            page: 2
        };
        return _this;
    }

    _createClass(AllRatingsView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (window) {
                window.scrollTo(0, 0);
            }
            var parsed = queryString.parse(this.props.location.search);
            var content_type = parsed.content_type;
            var object_id = parsed.id;
            this.props.getAllRatings(content_type, object_id, 1, function (err, data, hasMore) {
                if (!err && data) {
                    _this2.setState({ data: data, hasMore: hasMore });
                }
            });
            setTimeout(function () {
                _this2.setState({ hasMore: true });
            }, 0);
        }
    }, {
        key: 'loadMore',
        value: function loadMore() {
            var _this3 = this;

            var parsed = queryString.parse(this.props.location.search);
            var content_type = parsed.content_type;
            var object_id = parsed.id;
            this.setState({ hasMore: false, loading: true }, function () {
                _this3.props.getAllRatings(content_type, object_id, _this3.state.page, function (err, data, hasMore) {
                    var newData = _extends({}, _this3.state.data);
                    newData.rating = newData.rating.concat(data.rating);
                    _this3.setState({ loading: false, page: _this3.state.page + 1, hasMore: hasMore, data: newData });
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'profile-body-wrap' },
                _react2.default.createElement(_DesktopProfileHeader2.default, { showSearch: true }),
                _react2.default.createElement(
                    'section',
                    { className: 'container parent-section book-appointment-section breadcrumb-mrgn' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row main-row parent-section-row' },
                        _react2.default.createElement(_LeftBar2.default, null),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12 col-md-7 col-lg-7 center-column' },
                            _react2.default.createElement(
                                'div',
                                { className: 'container-fluid' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-12' },
                                        this.state.data ? _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement(_RatingGraph2.default, { details: this.state.data }),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'user-satisfaction-section' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'row no-gutters' },
                                                    this.state.data ? this.state.data.rating_graph.top_compliments.map(function (compliment) {
                                                        return _react2.default.createElement(_ComplimentListView2.default, { key: compliment.id, details: compliment });
                                                    }) : ""
                                                )
                                            ),
                                            _react2.default.createElement(
                                                _reactInfiniteScroller2.default,
                                                {
                                                    pageStart: 1,
                                                    loadMore: this.loadMore.bind(this),
                                                    hasMore: this.state.hasMore,
                                                    useWindow: true,
                                                    initialLoad: false
                                                },
                                                _react2.default.createElement(_ReviewList2.default, { details: this.state.data })
                                            )
                                        ) : ""
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(_RightBar2.default, { msgTemplate: 'gold_general_template' })
                    )
                ),
                _react2.default.createElement(_staticDisclaimer2.default, null),
                _react2.default.createElement(_footer2.default, { footerData: this.state.footerData })
            );
        }
    }]);

    return AllRatingsView;
}(_react2.default.Component);

exports.default = AllRatingsView;

/***/ }),

/***/ "./dev/js/components/commons/ratingsProfileView/ComplimentListView.js":
/*!****************************************************************************!*\
  !*** ./dev/js/components/commons/ratingsProfileView/ComplimentListView.js ***!
  \****************************************************************************/
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

var ComplimentListView = function (_React$Component) {
    _inherits(ComplimentListView, _React$Component);

    function ComplimentListView(props) {
        _classCallCheck(this, ComplimentListView);

        return _possibleConstructorReturn(this, (ComplimentListView.__proto__ || Object.getPrototypeOf(ComplimentListView)).call(this, props));
    }

    _createClass(ComplimentListView, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "" },
                _react2.default.createElement(
                    "div",
                    { className: "user-satisfaction-images" },
                    _react2.default.createElement("img", { className: "img-fluid", src: this.props.details.icon }),
                    _react2.default.createElement(
                        "p",
                        null,
                        this.props.details.message
                    ),
                    _react2.default.createElement(
                        "span",
                        null,
                        this.props.details.count
                    )
                )
            );
        }
    }]);

    return ComplimentListView;
}(_react2.default.Component);

exports.default = ComplimentListView;

/***/ }),

/***/ "./dev/js/components/commons/ratingsProfileView/RatingStars.js":
/*!*********************************************************************!*\
  !*** ./dev/js/components/commons/ratingsProfileView/RatingStars.js ***!
  \*********************************************************************/
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

var RatingStars = function (_React$Component) {
    _inherits(RatingStars, _React$Component);

    function RatingStars(props) {
        _classCallCheck(this, RatingStars);

        var _this = _possibleConstructorReturn(this, (RatingStars.__proto__ || Object.getPrototypeOf(RatingStars)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(RatingStars, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                average_rating = _props.average_rating,
                rating_count = _props.rating_count;


            var rating = '';
            if (average_rating) {
                rating = Math.ceil(average_rating * 2) / 2;
            }

            var ratingArray = [];
            for (var i = 0; i < Math.floor(rating); i++) {
                ratingArray.push(_react2.default.createElement('img', { key: i, src: "/assets" + '/img/customer-icons/rating-star-filled.svg', className: 'img-cstm-docrating', style: { width: this.props.width, marginRight: 2, height: this.props.height } }));
            }

            if (rating != Math.floor(rating)) {
                ratingArray.push(_react2.default.createElement('img', { key: 'half', src: "/assets" + '/img/customer-icons/halfstar_new.svg', className: 'img-cstm-docrating', style: { width: this.props.width, marginRight: 2, height: this.props.height } }));
            }

            var emptyStars = Math.floor(5 - rating);
            if (emptyStars) {
                for (var _i = 0; _i < emptyStars; _i++) {
                    ratingArray.push(_react2.default.createElement('img', { key: _i + 'empty', src: "/assets" + '/img/customer-icons/rating-star-empty.svg', className: 'img-cstm-docrating', style: { width: this.props.width, marginRight: 2, height: this.props.height } }));
                }
            }
            return _react2.default.createElement(
                'div',
                { className: 'cstm-doc-rtng', style: this.props.justifyCenter ? { justifyContent: 'center' } : {} },
                ratingArray,
                rating_count ? _react2.default.createElement(
                    'span',
                    null,
                    '(',
                    rating_count,
                    ')'
                ) : ''
            );
        }
    }]);

    return RatingStars;
}(_react2.default.Component);

exports.default = RatingStars;

/***/ }),

/***/ "./dev/js/containers/commons/RatingsView.js":
/*!**************************************************!*\
  !*** ./dev/js/containers/commons/RatingsView.js ***!
  \**************************************************/
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

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _AllRatingsView = __webpack_require__(/*! ../../components/commons/ratingsProfileView/AllRatingsView.js */ "./dev/js/components/commons/ratingsProfileView/AllRatingsView.js");

var _AllRatingsView2 = _interopRequireDefault(_AllRatingsView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RatingsView = function (_React$Component) {
    _inherits(RatingsView, _React$Component);

    function RatingsView(props) {
        _classCallCheck(this, RatingsView);

        return _possibleConstructorReturn(this, (RatingsView.__proto__ || Object.getPrototypeOf(RatingsView)).call(this, props));
    }

    _createClass(RatingsView, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_AllRatingsView2.default, this.props);
        }
    }]);

    return RatingsView;
}(_react2.default.Component);

RatingsView.contextTypes = {
    router: function router() {
        return null;
    }
};


var mapStateToProps = function mapStateToProps(state, passedProps) {
    /**
     * initialServerData is server rendered async data required build html on server. 
     */
    return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        getAllRatings: function getAllRatings(content_type, object_id, page, cb) {
            return dispatch((0, _index.getAllRatings)(content_type, object_id, page, cb));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(RatingsView);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9BbGxSYXRpbmdzVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9Db21wbGltZW50TGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9yYXRpbmdzUHJvZmlsZVZpZXcvUmF0aW5nU3RhcnMuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy9SYXRpbmdzVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGF0aC1icm93c2VyaWZ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaXNWaXAiLCJjb2xvciIsImZvbnRTaXplIiwicGFkZGluZ0JvdHRvbSIsInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIkFsbFJhdGluZ3NWaWV3IiwicHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJoYXNNb3JlIiwiZm9vdGVyRGF0YSIsInBhZ2UiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInBhcnNlZCIsInBhcnNlIiwibG9jYXRpb24iLCJzZWFyY2giLCJjb250ZW50X3R5cGUiLCJvYmplY3RfaWQiLCJpZCIsImdldEFsbFJhdGluZ3MiLCJlcnIiLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJsb2FkaW5nIiwibmV3RGF0YSIsInJhdGluZyIsImNvbmNhdCIsInJhdGluZ19ncmFwaCIsInRvcF9jb21wbGltZW50cyIsIm1hcCIsImNvbXBsaW1lbnQiLCJsb2FkTW9yZSIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkNvbXBsaW1lbnRMaXN0VmlldyIsImRldGFpbHMiLCJpY29uIiwibWVzc2FnZSIsImNvdW50IiwiUmF0aW5nU3RhcnMiLCJhdmVyYWdlX3JhdGluZyIsInJhdGluZ19jb3VudCIsIk1hdGgiLCJjZWlsIiwicmF0aW5nQXJyYXkiLCJpIiwiZmxvb3IiLCJwdXNoIiwiQVNTRVRTX0JBU0VfVVJMIiwid2lkdGgiLCJtYXJnaW5SaWdodCIsImhlaWdodCIsImVtcHR5U3RhcnMiLCJqdXN0aWZ5Q2VudGVyIiwianVzdGlmeUNvbnRlbnQiLCJSYXRpbmdzVmlldyIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsInBhc3NlZFByb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7a0JBQ2UsZ0JBQWU7QUFBQSxRQUFaQSxLQUFZLFFBQVpBLEtBQVk7O0FBQzdCLFdBQVE7QUFBQTtBQUFBLFVBQUssNkJBQTBCQSxRQUFNLGtCQUFOLEdBQXlCLEVBQW5ELENBQUw7QUFDTztBQUFBO0FBQUEsY0FBRyxXQUFVLGVBQWIsRUFBNkIsT0FBTyxFQUFFQyxPQUFPLFNBQVQsRUFBb0JDLFVBQVUsRUFBOUIsRUFBcEM7QUFBQTtBQUFBLFNBRFA7QUFFTztBQUFBO0FBQUEsY0FBSyxXQUFVLDRCQUFmLEVBQTRDLE9BQU8sRUFBRUMsZUFBZSxDQUFqQixFQUFuRDtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUZQLEtBQVI7QUFTQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEQ7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQVRB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QUErQixRQUFRO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3U0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkM7QUFDRjtBQUNWO0FBQ0Y7QUFDTTtBQUNGO0FBQ0o7QUFDRjtBQUNJO0FBQ0Y7QUFDYztBQUNGO0FBQ1Y7QUFDRjtBQUNjO0FBQ0Y7QUFDSjtBQUNGO0FBQ0kiLCJmaWxlIjoiODIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuZXhwb3J0IGRlZmF1bHQgKHsgaXNWaXAgfSkgPT4ge1xuXHRyZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtgZHNjbG1lci1mdHIgJHtpc1ZpcD8nbWFyZ2luLWJvdHRvbS01NSc6Jyd9YH0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0yMFwiIHN0eWxlPXt7IGNvbG9yOiAnIzhhOGE4YScsIGZvbnRTaXplOiAxMCB9fSA+VGhlIFdlYnNpdGUgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgaW4gY2FzZSBvZiBhIG1lZGljYWwgZW1lcmdlbmN5IGFuZC8gb3IgY3JpdGljYWwgY2FyZSBhbmQgdGhlIHVzZXIgc2hvdWxkIGRpcmVjdGx5IGNvbnRhY3QgaGlzLyBoZXIgbWVkaWNhbCBzZXJ2aWNlIHByb3ZpZGVyIGZvciBQaHlzaWNhbCBFeGFtaW5hdGlvbi4gRG9jcHJpbWUgaXMgc29sZWx5IGEgdGVjaG5vbG9neSBwYXJ0bmVyLjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBmb290ZXItbmV3LWNvcHlyZ2h0XCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogNSB9fSA+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRvY3ByaW1lLmNvbSBDb3B5cmlnaHQgJmNvcHk7IDIwMjAuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5BbGwgcmlnaHRzIHJlc2VydmVkLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+RE9DUFJJTUUgVEVDSE5PTE9HSUVTIFBSSVZBVEUgTElNSVRFRDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+Q0lOIDogVTc0OTk5SFIyMDE2UFRDMDY0MzEyPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+KVxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5pbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSAncmVhY3QtaW5maW5pdGUtc2Nyb2xsZXInO1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBDb21wbGltZW50TGlzdFZpZXcgZnJvbSAnLi4vLi4vY29tbW9ucy9yYXRpbmdzUHJvZmlsZVZpZXcvQ29tcGxpbWVudExpc3RWaWV3LmpzJ1xuaW1wb3J0IFJldmlld0xpc3QgZnJvbSAnLi4vLi4vY29tbW9ucy9yYXRpbmdzUHJvZmlsZVZpZXcvUmV2aWV3TGlzdC5qcydcbmltcG9ydCBSYXRpbmdHcmFwaCBmcm9tICcuLi8uLi9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9SYXRpbmdHcmFwaC5qcydcbmltcG9ydCBMZWZ0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvTGVmdEJhcidcbmltcG9ydCBSaWdodEJhciBmcm9tICcuLi8uLi9jb21tb25zL1JpZ2h0QmFyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21tb25zL0hvbWUvZm9vdGVyJ1xuaW1wb3J0IERpc2NsYWltZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9Ib21lL3N0YXRpY0Rpc2NsYWltZXIuanMnXG5cbmNsYXNzIEFsbFJhdGluZ3NWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgICAgaGFzTW9yZTogZmFsc2UsXG4gICAgICAgICAgICBmb290ZXJEYXRhOiBudWxsLFxuICAgICAgICAgICAgcGFnZTogMlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgY29udGVudF90eXBlID0gcGFyc2VkLmNvbnRlbnRfdHlwZVxuICAgICAgICBsZXQgb2JqZWN0X2lkID0gcGFyc2VkLmlkXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0QWxsUmF0aW5ncyhjb250ZW50X3R5cGUsIG9iamVjdF9pZCwgMSwgKGVyciwgZGF0YSwgaGFzTW9yZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlcnIgJiYgZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhLCBoYXNNb3JlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc01vcmU6IHRydWUgfSlcbiAgICAgICAgfSwgMClcbiAgICB9XG5cbiAgICBsb2FkTW9yZSgpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBjb250ZW50X3R5cGUgPSBwYXJzZWQuY29udGVudF90eXBlXG4gICAgICAgIGxldCBvYmplY3RfaWQgPSBwYXJzZWQuaWRcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc01vcmU6IGZhbHNlLCBsb2FkaW5nOiB0cnVlIH0sICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0QWxsUmF0aW5ncyhjb250ZW50X3R5cGUsIG9iamVjdF9pZCwgdGhpcy5zdGF0ZS5wYWdlLCAoZXJyLCBkYXRhLCBoYXNNb3JlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0RhdGEgPSB7IC4uLnRoaXMuc3RhdGUuZGF0YSB9XG4gICAgICAgICAgICAgICAgbmV3RGF0YS5yYXRpbmcgPSBuZXdEYXRhLnJhdGluZy5jb25jYXQoZGF0YS5yYXRpbmcpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBwYWdlOiB0aGlzLnN0YXRlLnBhZ2UgKyAxLCBoYXNNb3JlLCBkYXRhOiBuZXdEYXRhIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgc2hvd1NlYXJjaD17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgcGFyZW50LXNlY3Rpb24gYm9vay1hcHBvaW50bWVudC1zZWN0aW9uIGJyZWFkY3J1bWItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0QmFyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBjZW50ZXItY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmF0aW5nR3JhcGggZGV0YWlscz17dGhpcy5zdGF0ZS5kYXRhfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXNhdGlzZmFjdGlvbi1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhID8gdGhpcy5zdGF0ZS5kYXRhLnJhdGluZ19ncmFwaC50b3BfY29tcGxpbWVudHMubWFwKGNvbXBsaW1lbnQgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wbGltZW50TGlzdFZpZXcga2V5PXtjb21wbGltZW50LmlkfSBkZXRhaWxzPXtjb21wbGltZW50fSAvPikgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5maW5pdGVTY3JvbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU3RhcnQ9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZE1vcmU9e3RoaXMubG9hZE1vcmUuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNNb3JlPXt0aGlzLnN0YXRlLmhhc01vcmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlV2luZG93PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxMb2FkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV2aWV3TGlzdCBkZXRhaWxzPXt0aGlzLnN0YXRlLmRhdGF9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0luZmluaXRlU2Nyb2xsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWdodEJhciBtc2dUZW1wbGF0ZT1cImdvbGRfZ2VuZXJhbF90ZW1wbGF0ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxEaXNjbGFpbWVyIC8+XG4gICAgICAgICAgICAgICAgPEZvb3RlciBmb290ZXJEYXRhPXt0aGlzLnN0YXRlLmZvb3RlckRhdGF9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEFsbFJhdGluZ3NWaWV3O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBDb21wbGltZW50TGlzdFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1zYXRpc2ZhY3Rpb24taW1hZ2VzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXt0aGlzLnByb3BzLmRldGFpbHMuaWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMucHJvcHMuZGV0YWlscy5tZXNzYWdlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMuZGV0YWlscy5jb3VudH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBsaW1lbnRMaXN0VmlldztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFJhdGluZ1N0YXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgYXZlcmFnZV9yYXRpbmcsIHJhdGluZ19jb3VudCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICAgIGxldCByYXRpbmcgPSAnJ1xuICAgICAgICBpZiAoYXZlcmFnZV9yYXRpbmcpIHtcbiAgICAgICAgICAgIHJhdGluZyA9IChNYXRoLmNlaWwoYXZlcmFnZV9yYXRpbmcgKiAyKSkgLyAyO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJhdGluZ0FycmF5ID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLmZsb29yKHJhdGluZyk7IGkrKykge1xuICAgICAgICAgICAgcmF0aW5nQXJyYXkucHVzaCg8aW1nIGtleT17aX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9yYXRpbmctc3Rhci1maWxsZWQuc3ZnJ30gY2xhc3NOYW1lPVwiaW1nLWNzdG0tZG9jcmF0aW5nXCIgc3R5bGU9e3sgd2lkdGg6IHRoaXMucHJvcHMud2lkdGgsIG1hcmdpblJpZ2h0OiAyLCBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0IH19IC8+KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJhdGluZyAhPSBNYXRoLmZsb29yKHJhdGluZykpIHtcbiAgICAgICAgICAgIHJhdGluZ0FycmF5LnB1c2goPGltZyBrZXk9J2hhbGYnIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvaGFsZnN0YXJfbmV3LnN2Zyd9IGNsYXNzTmFtZT1cImltZy1jc3RtLWRvY3JhdGluZ1wiIHN0eWxlPXt7IHdpZHRoOiB0aGlzLnByb3BzLndpZHRoLCBtYXJnaW5SaWdodDogMiwgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCB9fSAvPilcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBlbXB0eVN0YXJzID0gTWF0aC5mbG9vcig1IC0gcmF0aW5nKTtcbiAgICAgICAgaWYgKGVtcHR5U3RhcnMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW1wdHlTdGFyczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmF0aW5nQXJyYXkucHVzaCg8aW1nIGtleT17aSArICdlbXB0eSd9IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvcmF0aW5nLXN0YXItZW1wdHkuc3ZnJ30gY2xhc3NOYW1lPVwiaW1nLWNzdG0tZG9jcmF0aW5nXCIgc3R5bGU9e3sgd2lkdGg6IHRoaXMucHJvcHMud2lkdGgsIG1hcmdpblJpZ2h0OiAyLCBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0IH19IC8+KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNzdG0tZG9jLXJ0bmdcIiBzdHlsZT17dGhpcy5wcm9wcy5qdXN0aWZ5Q2VudGVyID8geyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfSA6IHt9fT5cbiAgICAgICAgICAgICAgICB7cmF0aW5nQXJyYXl9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByYXRpbmdfY291bnQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+KHtyYXRpbmdfY291bnR9KTwvc3Bhbj4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYXRpbmdTdGFycyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBnZXRBbGxSYXRpbmdzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcblxuaW1wb3J0IEFsbFJhdGluZ3NWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9yYXRpbmdzUHJvZmlsZVZpZXcvQWxsUmF0aW5nc1ZpZXcuanMnXG5cblxuY2xhc3MgUmF0aW5nc1ZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogKCkgPT4gbnVsbFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBbGxSYXRpbmdzVmlldyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcGFzc2VkUHJvcHMpID0+IHtcbiAgICAvKipcbiAgICAgKiBpbml0aWFsU2VydmVyRGF0YSBpcyBzZXJ2ZXIgcmVuZGVyZWQgYXN5bmMgZGF0YSByZXF1aXJlZCBidWlsZCBodG1sIG9uIHNlcnZlci4gXG4gICAgICovXG4gICAgcmV0dXJuIHtcblxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0QWxsUmF0aW5nczogKGNvbnRlbnRfdHlwZSwgb2JqZWN0X2lkLCBwYWdlLCBjYikgPT4gZGlzcGF0Y2goZ2V0QWxsUmF0aW5ncyhjb250ZW50X3R5cGUsIG9iamVjdF9pZCwgcGFnZSwgY2IpKSxcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUmF0aW5nc1ZpZXcpO1xuIiwiLy8gLmRpcm5hbWUsIC5iYXNlbmFtZSwgYW5kIC5leHRuYW1lIG1ldGhvZHMgYXJlIGV4dHJhY3RlZCBmcm9tIE5vZGUuanMgdjguMTEuMSxcbi8vIGJhY2twb3J0ZWQgYW5kIHRyYW5zcGxpdGVkIHdpdGggQmFiZWwsIHdpdGggYmFja3dhcmRzLWNvbXBhdCBmaXhlc1xuXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXG4vLyBtdXN0IGJlIG5vIHNsYXNoZXMsIGVtcHR5IGVsZW1lbnRzLCBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxuLy8gKHNvIGFsc28gbm8gbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlcyAtIGl0IGRvZXMgbm90IGRpc3Rpbmd1aXNoXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxhc3QgPSBwYXJ0c1tpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG4vLyBwYXRoLnJlc29sdmUoW2Zyb20gLi4uXSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlc29sdmUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XG4gICAgdmFyIHBhdGggPSAoaSA+PSAwKSA/IGFyZ3VtZW50c1tpXSA6IHByb2Nlc3MuY3dkKCk7XG5cbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcbiAgICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH0gZWxzZSBpZiAoIXBhdGgpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJlc29sdmVkUGF0aCA9IHBhdGggKyAnLycgKyByZXNvbHZlZFBhdGg7XG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGguY2hhckF0KDApID09PSAnLyc7XG4gIH1cblxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCwgYnV0XG4gIC8vIGhhbmRsZSByZWxhdGl2ZSBwYXRocyB0byBiZSBzYWZlIChtaWdodCBoYXBwZW4gd2hlbiBwcm9jZXNzLmN3ZCgpIGZhaWxzKVxuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICByZXNvbHZlZFBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICByZXR1cm4gKChyZXNvbHZlZEFic29sdXRlID8gJy8nIDogJycpICsgcmVzb2x2ZWRQYXRoKSB8fCAnLic7XG59O1xuXG4vLyBwYXRoLm5vcm1hbGl6ZShwYXRoKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHZhciBpc0Fic29sdXRlID0gZXhwb3J0cy5pc0Fic29sdXRlKHBhdGgpLFxuICAgICAgdHJhaWxpbmdTbGFzaCA9IHN1YnN0cihwYXRoLCAtMSkgPT09ICcvJztcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihwYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICBpZiAoIXBhdGggJiYgIWlzQWJzb2x1dGUpIHtcbiAgICBwYXRoID0gJy4nO1xuICB9XG4gIGlmIChwYXRoICYmIHRyYWlsaW5nU2xhc2gpIHtcbiAgICBwYXRoICs9ICcvJztcbiAgfVxuXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5qb2luID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwYXRocyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIHJldHVybiBleHBvcnRzLm5vcm1hbGl6ZShmaWx0ZXIocGF0aHMsIGZ1bmN0aW9uKHAsIGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiBwICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9XG4gICAgcmV0dXJuIHA7XG4gIH0pLmpvaW4oJy8nKSk7XG59O1xuXG5cbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcbiAgZnJvbSA9IGV4cG9ydHMucmVzb2x2ZShmcm9tKS5zdWJzdHIoMSk7XG4gIHRvID0gZXhwb3J0cy5yZXNvbHZlKHRvKS5zdWJzdHIoMSk7XG5cbiAgZnVuY3Rpb24gdHJpbShhcnIpIHtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIGZvciAoOyBzdGFydCA8IGFyci5sZW5ndGg7IHN0YXJ0KyspIHtcbiAgICAgIGlmIChhcnJbc3RhcnRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIGVuZCA9IGFyci5sZW5ndGggLSAxO1xuICAgIGZvciAoOyBlbmQgPj0gMDsgZW5kLS0pIHtcbiAgICAgIGlmIChhcnJbZW5kXSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIFtdO1xuICAgIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSk7XG4gIH1cblxuICB2YXIgZnJvbVBhcnRzID0gdHJpbShmcm9tLnNwbGl0KCcvJykpO1xuICB2YXIgdG9QYXJ0cyA9IHRyaW0odG8uc3BsaXQoJy8nKSk7XG5cbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGZyb21QYXJ0cy5sZW5ndGgsIHRvUGFydHMubGVuZ3RoKTtcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChmcm9tUGFydHNbaV0gIT09IHRvUGFydHNbaV0pIHtcbiAgICAgIHNhbWVQYXJ0c0xlbmd0aCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB2YXIgb3V0cHV0UGFydHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XG4gIH1cblxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xuXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCcvJyk7XG59O1xuXG5leHBvcnRzLnNlcCA9ICcvJztcbmV4cG9ydHMuZGVsaW1pdGVyID0gJzonO1xuXG5leHBvcnRzLmRpcm5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICBpZiAocGF0aC5sZW5ndGggPT09IDApIHJldHVybiAnLic7XG4gIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KDApO1xuICB2YXIgaGFzUm9vdCA9IGNvZGUgPT09IDQ3IC8qLyovO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDE7IC0taSkge1xuICAgIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgZW5kID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuIGhhc1Jvb3QgPyAnLycgOiAnLic7XG4gIGlmIChoYXNSb290ICYmIGVuZCA9PT0gMSkge1xuICAgIC8vIHJldHVybiAnLy8nO1xuICAgIC8vIEJhY2t3YXJkcy1jb21wYXQgZml4OlxuICAgIHJldHVybiAnLyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2UoMCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGJhc2VuYW1lKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcblxuICB2YXIgc3RhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICB2YXIgaTtcblxuICBmb3IgKGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgaWYgKHBhdGguY2hhckNvZGVBdChpKSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBwYXRoIGNvbXBvbmVudFxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuICcnO1xuICByZXR1cm4gcGF0aC5zbGljZShzdGFydCwgZW5kKTtcbn1cblxuLy8gVXNlcyBhIG1peGVkIGFwcHJvYWNoIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSwgYXMgZXh0IGJlaGF2aW9yIGNoYW5nZWRcbi8vIGluIG5ldyBOb2RlLmpzIHZlcnNpb25zLCBzbyBvbmx5IGJhc2VuYW1lKCkgYWJvdmUgaXMgYmFja3BvcnRlZCBoZXJlXG5leHBvcnRzLmJhc2VuYW1lID0gZnVuY3Rpb24gKHBhdGgsIGV4dCkge1xuICB2YXIgZiA9IGJhc2VuYW1lKHBhdGgpO1xuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xuICB9XG4gIHJldHVybiBmO1xufTtcblxuZXhwb3J0cy5leHRuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgdmFyIHN0YXJ0RG90ID0gLTE7XG4gIHZhciBzdGFydFBhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICAvLyBUcmFjayB0aGUgc3RhdGUgb2YgY2hhcmFjdGVycyAoaWYgYW55KSB3ZSBzZWUgYmVmb3JlIG91ciBmaXJzdCBkb3QgYW5kXG4gIC8vIGFmdGVyIGFueSBwYXRoIHNlcGFyYXRvciB3ZSBmaW5kXG4gIHZhciBwcmVEb3RTdGF0ZSA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0UGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBleHRlbnNpb25cbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICAgIGlmIChjb2RlID09PSA0NiAvKi4qLykge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBkb3QsIG1hcmsgaXQgYXMgdGhlIHN0YXJ0IG9mIG91ciBleHRlbnNpb25cbiAgICAgICAgaWYgKHN0YXJ0RG90ID09PSAtMSlcbiAgICAgICAgICBzdGFydERvdCA9IGk7XG4gICAgICAgIGVsc2UgaWYgKHByZURvdFN0YXRlICE9PSAxKVxuICAgICAgICAgIHByZURvdFN0YXRlID0gMTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0RG90ICE9PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBhbmQgbm9uLXBhdGggc2VwYXJhdG9yIGJlZm9yZSBvdXIgZG90LCBzbyB3ZSBzaG91bGRcbiAgICAgIC8vIGhhdmUgYSBnb29kIGNoYW5jZSBhdCBoYXZpbmcgYSBub24tZW1wdHkgZXh0ZW5zaW9uXG4gICAgICBwcmVEb3RTdGF0ZSA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGFydERvdCA9PT0gLTEgfHwgZW5kID09PSAtMSB8fFxuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBjaGFyYWN0ZXIgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBkb3RcbiAgICAgIHByZURvdFN0YXRlID09PSAwIHx8XG4gICAgICAvLyBUaGUgKHJpZ2h0LW1vc3QpIHRyaW1tZWQgcGF0aCBjb21wb25lbnQgaXMgZXhhY3RseSAnLi4nXG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMSAmJiBzdGFydERvdCA9PT0gZW5kIC0gMSAmJiBzdGFydERvdCA9PT0gc3RhcnRQYXJ0ICsgMSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZShzdGFydERvdCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGZpbHRlciAoeHMsIGYpIHtcbiAgICBpZiAoeHMuZmlsdGVyKSByZXR1cm4geHMuZmlsdGVyKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmKHhzW2ldLCBpLCB4cykpIHJlcy5wdXNoKHhzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gU3RyaW5nLnByb3RvdHlwZS5zdWJzdHIgLSBuZWdhdGl2ZSBpbmRleCBkb24ndCB3b3JrIGluIElFOFxudmFyIHN1YnN0ciA9ICdhYicuc3Vic3RyKC0xKSA9PT0gJ2InXG4gICAgPyBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7IHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pIH1cbiAgICA6IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSBzdHIubGVuZ3RoICsgc3RhcnQ7XG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pO1xuICAgIH1cbjtcbiIsImltcG9ydCBfTWVtb3J5Um91dGVyIGZyb20gXCIuL01lbW9yeVJvdXRlclwiO1xuZXhwb3J0IHsgX01lbW9yeVJvdXRlciBhcyBNZW1vcnlSb3V0ZXIgfTtcbmltcG9ydCBfUHJvbXB0IGZyb20gXCIuL1Byb21wdFwiO1xuZXhwb3J0IHsgX1Byb21wdCBhcyBQcm9tcHQgfTtcbmltcG9ydCBfUmVkaXJlY3QgZnJvbSBcIi4vUmVkaXJlY3RcIjtcbmV4cG9ydCB7IF9SZWRpcmVjdCBhcyBSZWRpcmVjdCB9O1xuaW1wb3J0IF9Sb3V0ZSBmcm9tIFwiLi9Sb3V0ZVwiO1xuZXhwb3J0IHsgX1JvdXRlIGFzIFJvdXRlIH07XG5pbXBvcnQgX1JvdXRlciBmcm9tIFwiLi9Sb3V0ZXJcIjtcbmV4cG9ydCB7IF9Sb3V0ZXIgYXMgUm91dGVyIH07XG5pbXBvcnQgX1N0YXRpY1JvdXRlciBmcm9tIFwiLi9TdGF0aWNSb3V0ZXJcIjtcbmV4cG9ydCB7IF9TdGF0aWNSb3V0ZXIgYXMgU3RhdGljUm91dGVyIH07XG5pbXBvcnQgX1N3aXRjaCBmcm9tIFwiLi9Td2l0Y2hcIjtcbmV4cG9ydCB7IF9Td2l0Y2ggYXMgU3dpdGNoIH07XG5pbXBvcnQgX2dlbmVyYXRlUGF0aCBmcm9tIFwiLi9nZW5lcmF0ZVBhdGhcIjtcbmV4cG9ydCB7IF9nZW5lcmF0ZVBhdGggYXMgZ2VuZXJhdGVQYXRoIH07XG5pbXBvcnQgX21hdGNoUGF0aCBmcm9tIFwiLi9tYXRjaFBhdGhcIjtcbmV4cG9ydCB7IF9tYXRjaFBhdGggYXMgbWF0Y2hQYXRoIH07XG5pbXBvcnQgX3dpdGhSb3V0ZXIgZnJvbSBcIi4vd2l0aFJvdXRlclwiO1xuZXhwb3J0IHsgX3dpdGhSb3V0ZXIgYXMgd2l0aFJvdXRlciB9OyJdLCJzb3VyY2VSb290IjoiIn0=