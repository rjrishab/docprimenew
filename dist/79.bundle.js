(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ "./dev/js/components/commons/CitiesMapRoutes/CitiesMapRoutes.js":
/*!**********************************************************************!*\
  !*** ./dev/js/components/commons/CitiesMapRoutes/CitiesMapRoutes.js ***!
  \**********************************************************************/
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

var _LeftBar = __webpack_require__(/*! ../LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _CitiesMapView = __webpack_require__(/*! ./CitiesMapView */ "./dev/js/components/commons/CitiesMapRoutes/CitiesMapView.js");

var _CitiesMapView2 = _interopRequireDefault(_CitiesMapView);

var _CitiesSpecialities = __webpack_require__(/*! ./CitiesSpecialities */ "./dev/js/components/commons/CitiesMapRoutes/CitiesSpecialities.js");

var _CitiesSpecialities2 = _interopRequireDefault(_CitiesSpecialities);

var _footer = __webpack_require__(/*! ../Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CitiesRoutes = function (_React$Component) {
    _inherits(CitiesRoutes, _React$Component);

    function CitiesRoutes(props) {
        _classCallCheck(this, CitiesRoutes);

        var _this = _possibleConstructorReturn(this, (CitiesRoutes.__proto__ || Object.getPrototypeOf(CitiesRoutes)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(CitiesRoutes, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (window) {
                window.scrollTo(0, 0);
            }
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'profile-body-wrap sitemap-body' },
                _react2.default.createElement(_DesktopProfileHeader2.default, null),
                _react2.default.createElement(
                    'section',
                    { className: 'container parent-section book-appointment-section' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row main-row parent-section-row' },
                        _react2.default.createElement(_LeftBar2.default, null),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12' },
                            this.props.match.params.city ? _react2.default.createElement(_CitiesSpecialities2.default, this.props) : _react2.default.createElement(_CitiesMapView2.default, this.props)
                        )
                    )
                ),
                _react2.default.createElement(_footer2.default, null)
            );
        }
    }]);

    return CitiesRoutes;
}(_react2.default.Component);

exports.default = CitiesRoutes;

/***/ }),

/***/ "./dev/js/components/commons/CitiesMapRoutes/CitiesMapView.js":
/*!********************************************************************!*\
  !*** ./dev/js/components/commons/CitiesMapRoutes/CitiesMapView.js ***!
  \********************************************************************/
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

var CitiesMap = function (_React$Component) {
	_inherits(CitiesMap, _React$Component);

	function CitiesMap(props) {
		_classCallCheck(this, CitiesMap);

		var _this = _possibleConstructorReturn(this, (CitiesMap.__proto__ || Object.getPrototypeOf(CitiesMap)).call(this, props));

		_this.state = { showMore: false };
		return _this;
	}

	_createClass(CitiesMap, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.props.getCitiesMap();
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"div",
					{ className: "fw-500 sitemap-title" },
					"All Cities"
				),
				_react2.default.createElement(
					"div",
					{ className: "row sitemap-row" },
					this.props.citiesMap && this.props.citiesMap.length ? this.props.citiesMap.map(function (city, i) {
						var style = {};
						if (!_this2.state.showMore && i >= 20) {
							style = { display: 'none' };
						}
						return _react2.default.createElement(
							"div",
							{ style: style, className: "col-12 col-md-6 col-lg-4 tests-brdr-btm", key: i, onClick: function onClick() {
									_this2.props.history.push("/city-inventory/" + city.toLowerCase());
								} },
							_react2.default.createElement(
								"div",
								{ className: "anchor-data-style" },
								_react2.default.createElement(
									"a",
									{ href: "/city-inventory/" + city.toLowerCase(), onClick: function onClick(e) {
											e.preventDefault();
										} },
									city
								),
								_react2.default.createElement(
									"span",
									{ className: "sitemap-right-arrow" },
									_react2.default.createElement("img", { src: "/assets" + "/img/customer-icons/arrow-forward-right.svg" })
								)
							)
						);
					}) : _react2.default.createElement(
						"p",
						null,
						"No Data Found"
					),
					!this.state.showMore && this.props.citiesMap && this.props.citiesMap.length >= 20 ? _react2.default.createElement(
						"div",
						{ className: "col-12 text-center mrt-20" },
						_react2.default.createElement(
							"button",
							{ className: "sitemap-show-more", onClick: function onClick() {
									_this2.setState({ showMore: true });
								} },
							"Show More"
						)
					) : ''
				)
			);
		}
	}]);

	return CitiesMap;
}(_react2.default.Component);

exports.default = CitiesMap;

/***/ }),

/***/ "./dev/js/components/commons/CitiesMapRoutes/CitiesSpecialities.js":
/*!*************************************************************************!*\
  !*** ./dev/js/components/commons/CitiesMapRoutes/CitiesSpecialities.js ***!
  \*************************************************************************/
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

var CitiesSpecialitiesView = function (_React$Component) {
	_inherits(CitiesSpecialitiesView, _React$Component);

	function CitiesSpecialitiesView(props) {
		_classCallCheck(this, CitiesSpecialitiesView);

		var _this = _possibleConstructorReturn(this, (CitiesSpecialitiesView.__proto__ || Object.getPrototypeOf(CitiesSpecialitiesView)).call(this, props));

		_this.state = { showMore: false };
		return _this;
	}

	_createClass(CitiesSpecialitiesView, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var city = this.props.match.params.city;
			this.props.getCitiesMap(city);
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"div",
					{ className: "fw-500 sitemap-title" },
					this.props.match.params.city
				),
				_react2.default.createElement(
					"div",
					{ className: "row sitemap-row" },
					this.props.citiesMapSpecialities.specialization_city_urls && this.props.citiesMapSpecialities.specialization_city_urls.length ? this.props.citiesMapSpecialities.specialization_city_urls.map(function (city, i) {
						var style = {};
						if (!_this2.state.showMore && i >= 20) {
							style = { display: 'none' };
						}
						return _react2.default.createElement(
							"div",
							{ style: style, className: "col-12 col-md-6 tests-brdr-btm", key: i, onClick: function onClick() {
									_this2.props.history.push("/" + city.url);
								} },
							_react2.default.createElement(
								"div",
								{ className: "anchor-data-style" },
								_react2.default.createElement(
									"a",
									{ href: "/" + city.url, onClick: function onClick(e) {
											e.preventDefault();
										} },
									"" + city.title
								),
								_react2.default.createElement(
									"span",
									{ className: "sitemap-count" },
									"(" + city.count + ")"
								)
							)
						);
					}) : _react2.default.createElement(
						"p",
						null,
						"No Data Found"
					),
					!this.state.showMore && this.props.citiesMapSpecialities.specialization_city_urls && this.props.citiesMapSpecialities.specialization_city_urls.length >= 20 ? _react2.default.createElement(
						"div",
						{ className: "col-12 text-center mrt-20" },
						_react2.default.createElement(
							"button",
							{ className: "sitemap-show-more", onClick: function onClick() {
									_this2.setState({ showMore: true });
								} },
							"Show More"
						)
					) : ''
				)
			);
		}
	}]);

	return CitiesSpecialitiesView;
}(_react2.default.Component);

exports.default = CitiesSpecialitiesView;

/***/ }),

/***/ "./dev/js/components/commons/CitiesMapRoutes/index.js":
/*!************************************************************!*\
  !*** ./dev/js/components/commons/CitiesMapRoutes/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CitiesMapRoutes = __webpack_require__(/*! ./CitiesMapRoutes */ "./dev/js/components/commons/CitiesMapRoutes/CitiesMapRoutes.js");

var _CitiesMapRoutes2 = _interopRequireDefault(_CitiesMapRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _CitiesMapRoutes2.default;

/***/ }),

/***/ "./dev/js/containers/commons/CitiesSiteMap.js":
/*!****************************************************!*\
  !*** ./dev/js/containers/commons/CitiesSiteMap.js ***!
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

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _CitiesMapRoutes = __webpack_require__(/*! ../../components/commons/CitiesMapRoutes */ "./dev/js/components/commons/CitiesMapRoutes/index.js");

var _CitiesMapRoutes2 = _interopRequireDefault(_CitiesMapRoutes);

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CitiesMap = function (_React$Component) {
	_inherits(CitiesMap, _React$Component);

	function CitiesMap() {
		_classCallCheck(this, CitiesMap);

		return _possibleConstructorReturn(this, (CitiesMap.__proto__ || Object.getPrototypeOf(CitiesMap)).apply(this, arguments));
	}

	_createClass(CitiesMap, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			setTimeout(function () {
				_this2.props.setFetchResults(true);
			}, 1000);
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(_CitiesMapRoutes2.default, this.props);
		}
	}], [{
		key: 'loadData',
		value: function loadData(store, match, query) {
			var city = match.params.city;
			if (city) {
				return store.dispatch((0, _index.getCitiesMap)(city));
			} else {
				return store.dispatch((0, _index.getCitiesMap)());
			}
		}
	}]);

	return CitiesMap;
}(_react2.default.Component);

CitiesMap.contextTypes = {
	router: function router() {
		return null;
	}
};


var mapStateToProps = function mapStateToProps(state) {
	var _state$SITE_MAP = state.SITE_MAP,
	    citiesMap = _state$SITE_MAP.citiesMap,
	    citiesMapSpecialities = _state$SITE_MAP.citiesMapSpecialities,
	    specialitiesMap = _state$SITE_MAP.specialitiesMap,
	    specialitiesMapCities = _state$SITE_MAP.specialitiesMapCities;


	return {
		citiesMap: citiesMap,
		citiesMapSpecialities: citiesMapSpecialities,
		specialitiesMap: specialitiesMap,
		specialitiesMapCities: specialitiesMapCities
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {

	return {
		getCitiesMap: function getCitiesMap(city) {
			return dispatch((0, _index.getCitiesMap)(city));
		},
		getSpecialitiesMap: function getSpecialitiesMap(speciality) {
			return dispatch((0, _index.getCitiesMap)(speciality));
		},
		setFetchResults: function setFetchResults(status) {
			return dispatch((0, _index.setFetchResults)(status));
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CitiesMap);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0NpdGllc01hcFJvdXRlcy9DaXRpZXNNYXBSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9DaXRpZXNNYXBSb3V0ZXMvQ2l0aWVzTWFwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0NpdGllc01hcFJvdXRlcy9DaXRpZXNTcGVjaWFsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9DaXRpZXNNYXBSb3V0ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy9DaXRpZXNTaXRlTWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wYXRoLWJyb3dzZXJpZnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9lcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDaXRpZXNSb3V0ZXMiLCJwcm9wcyIsInN0YXRlIiwid2luZG93Iiwic2Nyb2xsVG8iLCJtYXRjaCIsInBhcmFtcyIsImNpdHkiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkNpdGllc01hcCIsInNob3dNb3JlIiwiZ2V0Q2l0aWVzTWFwIiwiY2l0aWVzTWFwIiwibGVuZ3RoIiwibWFwIiwiaSIsInN0eWxlIiwiZGlzcGxheSIsImhpc3RvcnkiLCJwdXNoIiwidG9Mb3dlckNhc2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJBU1NFVFNfQkFTRV9VUkwiLCJzZXRTdGF0ZSIsIkNpdGllc1NwZWNpYWxpdGllc1ZpZXciLCJjaXRpZXNNYXBTcGVjaWFsaXRpZXMiLCJzcGVjaWFsaXphdGlvbl9jaXR5X3VybHMiLCJ1cmwiLCJ0aXRsZSIsImNvdW50IiwiQ2l0aWVzTWFwUm91dGVzIiwic2V0VGltZW91dCIsInNldEZldGNoUmVzdWx0cyIsInN0b3JlIiwicXVlcnkiLCJkaXNwYXRjaCIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsIlNJVEVfTUFQIiwic3BlY2lhbGl0aWVzTWFwIiwic3BlY2lhbGl0aWVzTWFwQ2l0aWVzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZ2V0U3BlY2lhbGl0aWVzTWFwIiwic3BlY2lhbGl0eSIsInN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsWTs7O0FBQ0YsMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSUFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUZlO0FBS2xCOzs7OzRDQUVtQjtBQUNoQixnQkFBSUMsTUFBSixFQUFZO0FBQ1JBLHVCQUFPQyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0g7QUFDSjs7O2lDQUVROztBQUVMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLGdDQUFmO0FBQ0ksOENBQUMsOEJBQUQsT0FESjtBQUVJO0FBQUE7QUFBQSxzQkFBUyxXQUFVLG1EQUFuQjtBQUNJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLGlDQUFmO0FBQ0ksc0RBQUMsaUJBQUQsT0FESjtBQUdJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFFBQWY7QUFHUSxpQ0FBS0gsS0FBTCxDQUFXSSxLQUFYLENBQWlCQyxNQUFqQixDQUF3QkMsSUFBeEIsR0FDQSw4QkFBQyw0QkFBRCxFQUF3QixLQUFLTixLQUE3QixDQURBLEdBRUMsOEJBQUMsdUJBQUQsRUFBbUIsS0FBS0EsS0FBeEI7QUFMVDtBQUhKO0FBREosaUJBRko7QUFpQkksOENBQUMsZ0JBQUQ7QUFqQkosYUFESjtBQXFCSDs7OztFQXJDc0JPLGdCQUFNQyxTOztrQkF5Q2xCVCxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEZjs7Ozs7Ozs7Ozs7O0lBR01V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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3U0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkM7QUFDRjtBQUNWO0FBQ0Y7QUFDTTtBQUNGO0FBQ0o7QUFDRjtBQUNJO0FBQ0Y7QUFDYztBQUNGO0FBQ1Y7QUFDRjtBQUNjO0FBQ0Y7QUFDSjtBQUNGO0FBQ0kiLCJmaWxlIjoiNzkuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi9MZWZ0QmFyJ1xuaW1wb3J0IENpdGllc01hcFZpZXcgZnJvbSAnLi9DaXRpZXNNYXBWaWV3J1xuaW1wb3J0IENpdGllc1NwZWNpYWxpdGllcyBmcm9tICcuL0NpdGllc1NwZWNpYWxpdGllcydcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vSG9tZS9mb290ZXInXG5cbmNsYXNzIENpdGllc1JvdXRlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcCBzaXRlbWFwLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciAvPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBwYXJlbnQtc2VjdGlvbiBib29rLWFwcG9pbnRtZW50LXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGVmdEJhciAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgXHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmNpdHk/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaXRpZXNTcGVjaWFsaXRpZXMgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8Q2l0aWVzTWFwVmlldyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgXHQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENpdGllc1JvdXRlcyAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5cbmNsYXNzIENpdGllc01hcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0geyBzaG93TW9yZTogZmFsc2UgfVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5wcm9wcy5nZXRDaXRpZXNNYXAoKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZnctNTAwIHNpdGVtYXAtdGl0bGVcIj5BbGwgQ2l0aWVzPC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IHNpdGVtYXAtcm93XCI+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5jaXRpZXNNYXAgJiYgdGhpcy5wcm9wcy5jaXRpZXNNYXAubGVuZ3RoID9cblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5jaXRpZXNNYXAubWFwKChjaXR5LCBpKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0bGV0IHN0eWxlID0ge31cblx0XHRcdFx0XHRcdFx0XHRpZiAoIXRoaXMuc3RhdGUuc2hvd01vcmUgJiYgaSA+PSAyMCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGUgPSB7IGRpc3BsYXk6ICdub25lJyB9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy00IHRlc3RzLWJyZHItYnRtXCIga2V5PXtpfSBvbkNsaWNrPXsoKSA9PiB7IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvY2l0eS1pbnZlbnRvcnkvJHtjaXR5LnRvTG93ZXJDYXNlKCl9YCkgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFuY2hvci1kYXRhLXN0eWxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2AvY2l0eS1pbnZlbnRvcnkvJHtjaXR5LnRvTG93ZXJDYXNlKCl9YH0gb25DbGljaz17KGUpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9fT57Y2l0eX08L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInNpdGVtYXAtcmlnaHQtYXJyb3dcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Fycm93LWZvcndhcmQtcmlnaHQuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQ6IDxwPk5vIERhdGEgRm91bmQ8L3A+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCF0aGlzLnN0YXRlLnNob3dNb3JlICYmIHRoaXMucHJvcHMuY2l0aWVzTWFwICYmIHRoaXMucHJvcHMuY2l0aWVzTWFwLmxlbmd0aCA+PSAyMCA/XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHRleHQtY2VudGVyIG1ydC0yMFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwic2l0ZW1hcC1zaG93LW1vcmVcIiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBzaG93TW9yZTogdHJ1ZSB9KSB9fT5TaG93IE1vcmU8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENpdGllc01hcCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgQ2l0aWVzU3BlY2lhbGl0aWVzVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0geyBzaG93TW9yZTogZmFsc2UgfVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0bGV0IGNpdHkgPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5jaXR5XG5cdFx0dGhpcy5wcm9wcy5nZXRDaXRpZXNNYXAoY2l0eSlcblx0fVxuXG5cdHJlbmRlcigpIHtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZ3LTUwMCBzaXRlbWFwLXRpdGxlXCI+e3RoaXMucHJvcHMubWF0Y2gucGFyYW1zLmNpdHl9PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IHNpdGVtYXAtcm93XCI+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5jaXRpZXNNYXBTcGVjaWFsaXRpZXMuc3BlY2lhbGl6YXRpb25fY2l0eV91cmxzICYmIHRoaXMucHJvcHMuY2l0aWVzTWFwU3BlY2lhbGl0aWVzLnNwZWNpYWxpemF0aW9uX2NpdHlfdXJscy5sZW5ndGggP1xuXHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmNpdGllc01hcFNwZWNpYWxpdGllcy5zcGVjaWFsaXphdGlvbl9jaXR5X3VybHMubWFwKChjaXR5LCBpKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0bGV0IHN0eWxlID0ge31cblx0XHRcdFx0XHRcdFx0XHRpZiAoIXRoaXMuc3RhdGUuc2hvd01vcmUgJiYgaSA+PSAyMCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGUgPSB7IGRpc3BsYXk6ICdub25lJyB9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IHRlc3RzLWJyZHItYnRtXCIga2V5PXtpfSBvbkNsaWNrPXsoKSA9PiB7IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHtjaXR5LnVybH1gKSB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYW5jaG9yLWRhdGEtc3R5bGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj17YC8ke2NpdHkudXJsfWB9IG9uQ2xpY2s9eyhlKSA9PiB7IGUucHJldmVudERlZmF1bHQoKSB9fT57YCR7Y2l0eS50aXRsZX1gfTwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwic2l0ZW1hcC1jb3VudFwiPntgKCR7Y2l0eS5jb3VudH0pYH08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0OiA8cD5ObyBEYXRhIEZvdW5kPC9wPlxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCF0aGlzLnN0YXRlLnNob3dNb3JlICYmIHRoaXMucHJvcHMuY2l0aWVzTWFwU3BlY2lhbGl0aWVzLnNwZWNpYWxpemF0aW9uX2NpdHlfdXJscyAmJiB0aGlzLnByb3BzLmNpdGllc01hcFNwZWNpYWxpdGllcy5zcGVjaWFsaXphdGlvbl9jaXR5X3VybHMubGVuZ3RoID49IDIwID9cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1jZW50ZXIgbXJ0LTIwXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJzaXRlbWFwLXNob3ctbW9yZVwiIG9uQ2xpY2s9eygpID0+IHsgdGhpcy5zZXRTdGF0ZSh7IHNob3dNb3JlOiB0cnVlIH0pIH19PlNob3cgTW9yZTwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2l0aWVzU3BlY2lhbGl0aWVzVmlldyIsImltcG9ydCBDaXRpZXNNYXBSb3V0ZXMgZnJvbSAnLi9DaXRpZXNNYXBSb3V0ZXMnXG5cbmV4cG9ydCBkZWZhdWx0IENpdGllc01hcFJvdXRlcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBDaXRpZXNNYXBSb3V0ZXMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0NpdGllc01hcFJvdXRlcydcbmltcG9ydCB7IHNldEZldGNoUmVzdWx0cywgZ2V0Q2l0aWVzTWFwLCBnZXRTcGVjaWFsaXRpZXNNYXAgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuXG5jbGFzcyBDaXRpZXNNYXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdHN0YXRpYyBsb2FkRGF0YShzdG9yZSwgbWF0Y2gsIHF1ZXJ5KSB7XG5cdFx0bGV0IGNpdHkgPSBtYXRjaC5wYXJhbXMuY2l0eVxuXHRcdGlmIChjaXR5KSB7XG5cdFx0XHRyZXR1cm4gc3RvcmUuZGlzcGF0Y2goZ2V0Q2l0aWVzTWFwKGNpdHkpKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gc3RvcmUuZGlzcGF0Y2goZ2V0Q2l0aWVzTWFwKCkpXG5cdFx0fVxuXG5cdH1cblxuXHRzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuXHRcdHJvdXRlcjogKCkgPT4gbnVsbFxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLnByb3BzLnNldEZldGNoUmVzdWx0cyh0cnVlKVxuXHRcdH0sIDEwMDApXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PENpdGllc01hcFJvdXRlcyB7Li4udGhpcy5wcm9wc30gLz5cblx0XHQpXG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG5cdGNvbnN0IHtcblx0XHRjaXRpZXNNYXAsXG5cdFx0Y2l0aWVzTWFwU3BlY2lhbGl0aWVzLFxuXHRcdHNwZWNpYWxpdGllc01hcCxcblx0XHRzcGVjaWFsaXRpZXNNYXBDaXRpZXNcblx0fSA9IHN0YXRlLlNJVEVfTUFQXG5cblx0cmV0dXJuIHtcblx0XHRjaXRpZXNNYXAsXG5cdFx0Y2l0aWVzTWFwU3BlY2lhbGl0aWVzLFxuXHRcdHNwZWNpYWxpdGllc01hcCxcblx0XHRzcGVjaWFsaXRpZXNNYXBDaXRpZXNcblx0fVxufVxuXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuXG5cdHJldHVybiB7XG5cdFx0Z2V0Q2l0aWVzTWFwOiAoY2l0eSkgPT4gZGlzcGF0Y2goZ2V0Q2l0aWVzTWFwKGNpdHkpKSxcblx0XHRnZXRTcGVjaWFsaXRpZXNNYXA6IChzcGVjaWFsaXR5KSA9PiBkaXNwYXRjaChnZXRDaXRpZXNNYXAoc3BlY2lhbGl0eSkpLFxuXHRcdHNldEZldGNoUmVzdWx0czogKHN0YXR1cykgPT4gZGlzcGF0Y2goc2V0RmV0Y2hSZXN1bHRzKHN0YXR1cykpXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDaXRpZXNNYXApIiwiLy8gLmRpcm5hbWUsIC5iYXNlbmFtZSwgYW5kIC5leHRuYW1lIG1ldGhvZHMgYXJlIGV4dHJhY3RlZCBmcm9tIE5vZGUuanMgdjguMTEuMSxcbi8vIGJhY2twb3J0ZWQgYW5kIHRyYW5zcGxpdGVkIHdpdGggQmFiZWwsIHdpdGggYmFja3dhcmRzLWNvbXBhdCBmaXhlc1xuXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXG4vLyBtdXN0IGJlIG5vIHNsYXNoZXMsIGVtcHR5IGVsZW1lbnRzLCBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxuLy8gKHNvIGFsc28gbm8gbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlcyAtIGl0IGRvZXMgbm90IGRpc3Rpbmd1aXNoXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxhc3QgPSBwYXJ0c1tpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG4vLyBwYXRoLnJlc29sdmUoW2Zyb20gLi4uXSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlc29sdmUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XG4gICAgdmFyIHBhdGggPSAoaSA+PSAwKSA/IGFyZ3VtZW50c1tpXSA6IHByb2Nlc3MuY3dkKCk7XG5cbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcbiAgICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH0gZWxzZSBpZiAoIXBhdGgpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJlc29sdmVkUGF0aCA9IHBhdGggKyAnLycgKyByZXNvbHZlZFBhdGg7XG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGguY2hhckF0KDApID09PSAnLyc7XG4gIH1cblxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCwgYnV0XG4gIC8vIGhhbmRsZSByZWxhdGl2ZSBwYXRocyB0byBiZSBzYWZlIChtaWdodCBoYXBwZW4gd2hlbiBwcm9jZXNzLmN3ZCgpIGZhaWxzKVxuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICByZXNvbHZlZFBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICByZXR1cm4gKChyZXNvbHZlZEFic29sdXRlID8gJy8nIDogJycpICsgcmVzb2x2ZWRQYXRoKSB8fCAnLic7XG59O1xuXG4vLyBwYXRoLm5vcm1hbGl6ZShwYXRoKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHZhciBpc0Fic29sdXRlID0gZXhwb3J0cy5pc0Fic29sdXRlKHBhdGgpLFxuICAgICAgdHJhaWxpbmdTbGFzaCA9IHN1YnN0cihwYXRoLCAtMSkgPT09ICcvJztcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihwYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICBpZiAoIXBhdGggJiYgIWlzQWJzb2x1dGUpIHtcbiAgICBwYXRoID0gJy4nO1xuICB9XG4gIGlmIChwYXRoICYmIHRyYWlsaW5nU2xhc2gpIHtcbiAgICBwYXRoICs9ICcvJztcbiAgfVxuXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5qb2luID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwYXRocyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIHJldHVybiBleHBvcnRzLm5vcm1hbGl6ZShmaWx0ZXIocGF0aHMsIGZ1bmN0aW9uKHAsIGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiBwICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9XG4gICAgcmV0dXJuIHA7XG4gIH0pLmpvaW4oJy8nKSk7XG59O1xuXG5cbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcbiAgZnJvbSA9IGV4cG9ydHMucmVzb2x2ZShmcm9tKS5zdWJzdHIoMSk7XG4gIHRvID0gZXhwb3J0cy5yZXNvbHZlKHRvKS5zdWJzdHIoMSk7XG5cbiAgZnVuY3Rpb24gdHJpbShhcnIpIHtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIGZvciAoOyBzdGFydCA8IGFyci5sZW5ndGg7IHN0YXJ0KyspIHtcbiAgICAgIGlmIChhcnJbc3RhcnRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIGVuZCA9IGFyci5sZW5ndGggLSAxO1xuICAgIGZvciAoOyBlbmQgPj0gMDsgZW5kLS0pIHtcbiAgICAgIGlmIChhcnJbZW5kXSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIFtdO1xuICAgIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSk7XG4gIH1cblxuICB2YXIgZnJvbVBhcnRzID0gdHJpbShmcm9tLnNwbGl0KCcvJykpO1xuICB2YXIgdG9QYXJ0cyA9IHRyaW0odG8uc3BsaXQoJy8nKSk7XG5cbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGZyb21QYXJ0cy5sZW5ndGgsIHRvUGFydHMubGVuZ3RoKTtcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChmcm9tUGFydHNbaV0gIT09IHRvUGFydHNbaV0pIHtcbiAgICAgIHNhbWVQYXJ0c0xlbmd0aCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB2YXIgb3V0cHV0UGFydHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XG4gIH1cblxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xuXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCcvJyk7XG59O1xuXG5leHBvcnRzLnNlcCA9ICcvJztcbmV4cG9ydHMuZGVsaW1pdGVyID0gJzonO1xuXG5leHBvcnRzLmRpcm5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICBpZiAocGF0aC5sZW5ndGggPT09IDApIHJldHVybiAnLic7XG4gIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KDApO1xuICB2YXIgaGFzUm9vdCA9IGNvZGUgPT09IDQ3IC8qLyovO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDE7IC0taSkge1xuICAgIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgZW5kID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuIGhhc1Jvb3QgPyAnLycgOiAnLic7XG4gIGlmIChoYXNSb290ICYmIGVuZCA9PT0gMSkge1xuICAgIC8vIHJldHVybiAnLy8nO1xuICAgIC8vIEJhY2t3YXJkcy1jb21wYXQgZml4OlxuICAgIHJldHVybiAnLyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2UoMCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGJhc2VuYW1lKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcblxuICB2YXIgc3RhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICB2YXIgaTtcblxuICBmb3IgKGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgaWYgKHBhdGguY2hhckNvZGVBdChpKSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBwYXRoIGNvbXBvbmVudFxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuICcnO1xuICByZXR1cm4gcGF0aC5zbGljZShzdGFydCwgZW5kKTtcbn1cblxuLy8gVXNlcyBhIG1peGVkIGFwcHJvYWNoIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSwgYXMgZXh0IGJlaGF2aW9yIGNoYW5nZWRcbi8vIGluIG5ldyBOb2RlLmpzIHZlcnNpb25zLCBzbyBvbmx5IGJhc2VuYW1lKCkgYWJvdmUgaXMgYmFja3BvcnRlZCBoZXJlXG5leHBvcnRzLmJhc2VuYW1lID0gZnVuY3Rpb24gKHBhdGgsIGV4dCkge1xuICB2YXIgZiA9IGJhc2VuYW1lKHBhdGgpO1xuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xuICB9XG4gIHJldHVybiBmO1xufTtcblxuZXhwb3J0cy5leHRuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgdmFyIHN0YXJ0RG90ID0gLTE7XG4gIHZhciBzdGFydFBhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICAvLyBUcmFjayB0aGUgc3RhdGUgb2YgY2hhcmFjdGVycyAoaWYgYW55KSB3ZSBzZWUgYmVmb3JlIG91ciBmaXJzdCBkb3QgYW5kXG4gIC8vIGFmdGVyIGFueSBwYXRoIHNlcGFyYXRvciB3ZSBmaW5kXG4gIHZhciBwcmVEb3RTdGF0ZSA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0UGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBleHRlbnNpb25cbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICAgIGlmIChjb2RlID09PSA0NiAvKi4qLykge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBkb3QsIG1hcmsgaXQgYXMgdGhlIHN0YXJ0IG9mIG91ciBleHRlbnNpb25cbiAgICAgICAgaWYgKHN0YXJ0RG90ID09PSAtMSlcbiAgICAgICAgICBzdGFydERvdCA9IGk7XG4gICAgICAgIGVsc2UgaWYgKHByZURvdFN0YXRlICE9PSAxKVxuICAgICAgICAgIHByZURvdFN0YXRlID0gMTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0RG90ICE9PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBhbmQgbm9uLXBhdGggc2VwYXJhdG9yIGJlZm9yZSBvdXIgZG90LCBzbyB3ZSBzaG91bGRcbiAgICAgIC8vIGhhdmUgYSBnb29kIGNoYW5jZSBhdCBoYXZpbmcgYSBub24tZW1wdHkgZXh0ZW5zaW9uXG4gICAgICBwcmVEb3RTdGF0ZSA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGFydERvdCA9PT0gLTEgfHwgZW5kID09PSAtMSB8fFxuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBjaGFyYWN0ZXIgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBkb3RcbiAgICAgIHByZURvdFN0YXRlID09PSAwIHx8XG4gICAgICAvLyBUaGUgKHJpZ2h0LW1vc3QpIHRyaW1tZWQgcGF0aCBjb21wb25lbnQgaXMgZXhhY3RseSAnLi4nXG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMSAmJiBzdGFydERvdCA9PT0gZW5kIC0gMSAmJiBzdGFydERvdCA9PT0gc3RhcnRQYXJ0ICsgMSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZShzdGFydERvdCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGZpbHRlciAoeHMsIGYpIHtcbiAgICBpZiAoeHMuZmlsdGVyKSByZXR1cm4geHMuZmlsdGVyKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmKHhzW2ldLCBpLCB4cykpIHJlcy5wdXNoKHhzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gU3RyaW5nLnByb3RvdHlwZS5zdWJzdHIgLSBuZWdhdGl2ZSBpbmRleCBkb24ndCB3b3JrIGluIElFOFxudmFyIHN1YnN0ciA9ICdhYicuc3Vic3RyKC0xKSA9PT0gJ2InXG4gICAgPyBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7IHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pIH1cbiAgICA6IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSBzdHIubGVuZ3RoICsgc3RhcnQ7XG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pO1xuICAgIH1cbjtcbiIsImltcG9ydCBfTWVtb3J5Um91dGVyIGZyb20gXCIuL01lbW9yeVJvdXRlclwiO1xuZXhwb3J0IHsgX01lbW9yeVJvdXRlciBhcyBNZW1vcnlSb3V0ZXIgfTtcbmltcG9ydCBfUHJvbXB0IGZyb20gXCIuL1Byb21wdFwiO1xuZXhwb3J0IHsgX1Byb21wdCBhcyBQcm9tcHQgfTtcbmltcG9ydCBfUmVkaXJlY3QgZnJvbSBcIi4vUmVkaXJlY3RcIjtcbmV4cG9ydCB7IF9SZWRpcmVjdCBhcyBSZWRpcmVjdCB9O1xuaW1wb3J0IF9Sb3V0ZSBmcm9tIFwiLi9Sb3V0ZVwiO1xuZXhwb3J0IHsgX1JvdXRlIGFzIFJvdXRlIH07XG5pbXBvcnQgX1JvdXRlciBmcm9tIFwiLi9Sb3V0ZXJcIjtcbmV4cG9ydCB7IF9Sb3V0ZXIgYXMgUm91dGVyIH07XG5pbXBvcnQgX1N0YXRpY1JvdXRlciBmcm9tIFwiLi9TdGF0aWNSb3V0ZXJcIjtcbmV4cG9ydCB7IF9TdGF0aWNSb3V0ZXIgYXMgU3RhdGljUm91dGVyIH07XG5pbXBvcnQgX1N3aXRjaCBmcm9tIFwiLi9Td2l0Y2hcIjtcbmV4cG9ydCB7IF9Td2l0Y2ggYXMgU3dpdGNoIH07XG5pbXBvcnQgX2dlbmVyYXRlUGF0aCBmcm9tIFwiLi9nZW5lcmF0ZVBhdGhcIjtcbmV4cG9ydCB7IF9nZW5lcmF0ZVBhdGggYXMgZ2VuZXJhdGVQYXRoIH07XG5pbXBvcnQgX21hdGNoUGF0aCBmcm9tIFwiLi9tYXRjaFBhdGhcIjtcbmV4cG9ydCB7IF9tYXRjaFBhdGggYXMgbWF0Y2hQYXRoIH07XG5pbXBvcnQgX3dpdGhSb3V0ZXIgZnJvbSBcIi4vd2l0aFJvdXRlclwiO1xuZXhwb3J0IHsgX3dpdGhSb3V0ZXIgYXMgd2l0aFJvdXRlciB9OyJdLCJzb3VyY2VSb290IjoiIn0=