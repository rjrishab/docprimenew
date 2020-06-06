(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[86],{

/***/ "./dev/js/components/commons/SpecializationMapRoutes/SpecialitiesCitiesView.js":
/*!*************************************************************************************!*\
  !*** ./dev/js/components/commons/SpecializationMapRoutes/SpecialitiesCitiesView.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _HelmetTags = __webpack_require__(/*! ../HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _config = __webpack_require__(/*! ../../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var SpecialitiesCitiesMap = function (_React$Component) {
	_inherits(SpecialitiesCitiesMap, _React$Component);

	function SpecialitiesCitiesMap(props) {
		_classCallCheck(this, SpecialitiesCitiesMap);

		var _this = _possibleConstructorReturn(this, (SpecialitiesCitiesMap.__proto__ || Object.getPrototypeOf(SpecialitiesCitiesMap)).call(this, props));

		var page = 1;
		var parsed = queryString.parse(_this.props.location.search);
		if (parsed) {
			page = parsed.page || 1;
		}

		var title = _this.props.match.url.toLowerCase();
		title = title.substring(1, title.length);

		_this.state = {
			page: parseInt(page),
			title: title
		};
		return _this;
	}

	_createClass(SpecialitiesCitiesMap, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (window) {
				window.scrollTo(0, 0);
			}
			if (this.props.location.search == '?page=1') {
				var newHref = window.location.href.replace('?page=1', '');
				window.location.href = newHref;
			}
			var speciality = this.props.match.params.speciality;
			this.props.getSpecialitiesMap(speciality, this.state.page);
		}
	}, {
		key: 'goToSpeciality',
		value: function goToSpeciality(url, e) {
			this.props.history.push('/' + url);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var totalPages = this.props.specialitiesMapCities ? parseInt(this.props.specialitiesMapCities.pages) : 0;
			var pageCount = [];
			var prev = '',
			    next = '';
			if (totalPages) {
				if (this.state.page == 1 && this.state.page < totalPages) {
					next = this.state.page + 1;
					pageCount.push(_react2.default.createElement(
						'span',
						{ key: 1, className: 'anch-page-cnt active' },
						this.state.page
					));
					for (var i = 2; i <= totalPages; i++) {
						pageCount.push(_react2.default.createElement(
							'a',
							{ key: i, className: 'anch-page-cnt', href: '/' + this.state.title + '?page=' + i },
							i
						));
					}
				} else if (this.state.page != 1 && this.state.page + 1 <= totalPages) {
					next = this.state.page + 1;
					prev = this.state.page - 1;
					pageCount.push(_react2.default.createElement(
						'a',
						{ key: 1, className: 'anch-page-cnt', href: '/' + this.state.title + '?page=' + (this.state.page - 1) },
						this.state.page - 1
					));

					pageCount.push(_react2.default.createElement(
						'span',
						{ key: this.state.page, className: 'anch-page-cnt' },
						this.state.page
					));

					for (var i = this.state.page + 1; i <= totalPages; i++) {
						pageCount.push(_react2.default.createElement(
							'a',
							{ key: i, className: 'anch-page-cnt', href: '/' + this.state.title + '?page=' + i },
							i
						));
					}
				} else if (this.state.page == totalPages && totalPages > 1) {
					prev = this.state.page - 1;
					pageCount.push(_react2.default.createElement(
						'a',
						{ key: 1, className: 'anch-page-cnt', href: '/' + this.state.title + '?page=' + (this.state.page - 1) },
						this.state.page - 1
					));

					pageCount.push(_react2.default.createElement(
						'span',
						{ key: this.state.page, className: 'anch-page-cnt' },
						this.state.page
					));
				}
			}

			return _react2.default.createElement(
				'div',
				{ className: 'row sitemap-row' },
				this.props.specialitiesMapCities.paginated_specialists && this.props.specialitiesMapCities.paginated_specialists.length ? _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_HelmetTags2.default, { tagsData: {

							canonicalUrl: '' + _config2.default.API_BASE_URL + this.props.location.pathname + this.props.location.search,

							prev: '' + (prev ? '' + _config2.default.API_BASE_URL + this.props.location.pathname + (prev != 1 ? '?page=' + prev : '') : ''),

							next: '' + (next ? '' + _config2.default.API_BASE_URL + this.props.location.pathname + '?page=' + next : '')
						} }),
					this.props.specialitiesMapCities.paginated_specialists.map(function (city, i) {
						return _react2.default.createElement(
							'div',
							{ style: { marginBottom: '15px' }, className: 'col-12 col-md-12', key: i },
							_react2.default.createElement(
								'p',
								{ className: 'fw-500 sitemap-title' },
								city.city_title
							),
							_react2.default.createElement(
								'div',
								{ className: 'row' },
								city.speciality_url_title.map(function (speciality, i) {
									return _react2.default.createElement(
										'div',
										{ key: i, className: 'col-md-6 tests-brdr-btm', onClick: _this2.goToSpeciality.bind(_this2, speciality.url) },
										_react2.default.createElement(
											'div',
											{ className: 'anchor-data-style' },
											_react2.default.createElement(
												'a',
												{ href: '/' + speciality.url, onClick: function onClick(e) {
														e.preventDefault();
													} },
												'' + speciality.title
											),
											_react2.default.createElement(
												'span',
												{ className: 'sitemap-right-arrow' },
												_react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/arrow-forward-right.svg" })
											)
										)
									);
								})
							)
						);
					})
				) : '',
				_react2.default.createElement(
					'div',
					{ className: 'pagination-style' },
					pageCount
				)
			);
		}
	}]);

	return SpecialitiesCitiesMap;
}(_react2.default.Component);

exports.default = SpecialitiesCitiesMap;

/***/ }),

/***/ "./dev/js/components/commons/SpecializationMapRoutes/SpecialitiesView.js":
/*!*******************************************************************************!*\
  !*** ./dev/js/components/commons/SpecializationMapRoutes/SpecialitiesView.js ***!
  \*******************************************************************************/
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

var SpecialitiesMap = function (_React$Component) {
	_inherits(SpecialitiesMap, _React$Component);

	function SpecialitiesMap(props) {
		_classCallCheck(this, SpecialitiesMap);

		var _this = _possibleConstructorReturn(this, (SpecialitiesMap.__proto__ || Object.getPrototypeOf(SpecialitiesMap)).call(this, props));

		_this.state = { showMore: false };
		return _this;
	}

	_createClass(SpecialitiesMap, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.props.getSpecialitiesMap();
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
					"All Specialities"
				),
				_react2.default.createElement(
					"div",
					{ className: "row sitemap-row" },
					this.props.specialitiesMap.specialization_inventory && this.props.specialitiesMap.specialization_inventory.length ? this.props.specialitiesMap.specialization_inventory.map(function (city, i) {
						var style = {};
						if (!_this2.state.showMore && i >= 20) {
							style = { display: 'none' };
						}
						return _react2.default.createElement(
							"div",
							{ style: style, key: i, className: "col-12 col-md-6 col-lg-4 tests-brdr-btm", onClick: function onClick() {
									return _this2.props.history.push("/speciality-inventory/" + city.specialization_id);
								} },
							_react2.default.createElement(
								"div",
								{ className: "anchor-data-style" },
								_react2.default.createElement(
									"a",
									{ href: "/speciality-inventory/" + city.specialization_id, onClick: function onClick(e) {
											return e.preventDefault();
										} },
									city.specialization
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
					!this.state.showMore && this.props.specialitiesMap.specialization_inventory && this.props.specialitiesMap.specialization_inventory.length >= 20 ? _react2.default.createElement(
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

	return SpecialitiesMap;
}(_react2.default.Component);

exports.default = SpecialitiesMap;

/***/ }),

/***/ "./dev/js/components/commons/SpecializationMapRoutes/SpecializationMapRoutes.js":
/*!**************************************************************************************!*\
  !*** ./dev/js/components/commons/SpecializationMapRoutes/SpecializationMapRoutes.js ***!
  \**************************************************************************************/
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

var _SpecialitiesView = __webpack_require__(/*! ./SpecialitiesView */ "./dev/js/components/commons/SpecializationMapRoutes/SpecialitiesView.js");

var _SpecialitiesView2 = _interopRequireDefault(_SpecialitiesView);

var _SpecialitiesCitiesView = __webpack_require__(/*! ./SpecialitiesCitiesView */ "./dev/js/components/commons/SpecializationMapRoutes/SpecialitiesCitiesView.js");

var _SpecialitiesCitiesView2 = _interopRequireDefault(_SpecialitiesCitiesView);

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
                    { className: 'container dp-container-div' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row main-row parent-section-row' },
                        _react2.default.createElement(_LeftBar2.default, null),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12' },
                            this.props.match.params.speciality ? _react2.default.createElement(_SpecialitiesCitiesView2.default, this.props) : _react2.default.createElement(_SpecialitiesView2.default, this.props)
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

/***/ "./dev/js/components/commons/SpecializationMapRoutes/index.js":
/*!********************************************************************!*\
  !*** ./dev/js/components/commons/SpecializationMapRoutes/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SpecializationMapRoutes = __webpack_require__(/*! ./SpecializationMapRoutes */ "./dev/js/components/commons/SpecializationMapRoutes/SpecializationMapRoutes.js");

var _SpecializationMapRoutes2 = _interopRequireDefault(_SpecializationMapRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SpecializationMapRoutes2.default;

/***/ }),

/***/ "./dev/js/containers/commons/SpecializationSiteMap.js":
/*!************************************************************!*\
  !*** ./dev/js/containers/commons/SpecializationSiteMap.js ***!
  \************************************************************/
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

var _SpecializationMapRoutes = __webpack_require__(/*! ../../components/commons/SpecializationMapRoutes */ "./dev/js/components/commons/SpecializationMapRoutes/index.js");

var _SpecializationMapRoutes2 = _interopRequireDefault(_SpecializationMapRoutes);

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpecializationMap = function (_React$Component) {
	_inherits(SpecializationMap, _React$Component);

	function SpecializationMap() {
		_classCallCheck(this, SpecializationMap);

		return _possibleConstructorReturn(this, (SpecializationMap.__proto__ || Object.getPrototypeOf(SpecializationMap)).apply(this, arguments));
	}

	_createClass(SpecializationMap, [{
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

			return _react2.default.createElement(_SpecializationMapRoutes2.default, this.props);
		}
	}], [{
		key: 'loadData',
		value: function loadData(store, match, query) {
			if (match.params.speciality) {
				return store.dispatch((0, _index.getSpecialitiesMap)(match.params.speciality, query.page));
			} else {
				return store.dispatch((0, _index.getSpecialitiesMap)());
			}
		}
	}]);

	return SpecializationMap;
}(_react2.default.Component);

SpecializationMap.contextTypes = {
	router: function router() {
		return null;
	}
};


var mapStateToProps = function mapStateToProps(state) {
	var _state$SITE_MAP = state.SITE_MAP,
	    specialitiesMap = _state$SITE_MAP.specialitiesMap,
	    specialitiesMapCities = _state$SITE_MAP.specialitiesMapCities;


	return {
		specialitiesMap: specialitiesMap,
		specialitiesMapCities: specialitiesMapCities
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {

	return {
		getSpecialitiesMap: function getSpecialitiesMap(speciality, page, cb) {
			return dispatch((0, _index.getSpecialitiesMap)(speciality, page, cb));
		},
		setFetchResults: function setFetchResults(status) {
			return dispatch((0, _index.setFetchResults)(status));
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SpecializationMap);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL1NwZWNpYWxpemF0aW9uTWFwUm91dGVzL1NwZWNpYWxpdGllc0NpdGllc1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9TcGVjaWFsaXphdGlvbk1hcFJvdXRlcy9TcGVjaWFsaXRpZXNWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvU3BlY2lhbGl6YXRpb25NYXBSb3V0ZXMvU3BlY2lhbGl6YXRpb25NYXBSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9TcGVjaWFsaXphdGlvbk1hcFJvdXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9jb21tb25zL1NwZWNpYWxpemF0aW9uU2l0ZU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGF0aC1icm93c2VyaWZ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvZXMvaW5kZXguanMiXSwibmFtZXMiOlsicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiU3BlY2lhbGl0aWVzQ2l0aWVzTWFwIiwicHJvcHMiLCJwYWdlIiwicGFyc2VkIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsInRpdGxlIiwibWF0Y2giLCJ1cmwiLCJ0b0xvd2VyQ2FzZSIsInN1YnN0cmluZyIsImxlbmd0aCIsInN0YXRlIiwicGFyc2VJbnQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsIm5ld0hyZWYiLCJocmVmIiwicmVwbGFjZSIsInNwZWNpYWxpdHkiLCJwYXJhbXMiLCJnZXRTcGVjaWFsaXRpZXNNYXAiLCJlIiwiaGlzdG9yeSIsInB1c2giLCJ0b3RhbFBhZ2VzIiwic3BlY2lhbGl0aWVzTWFwQ2l0aWVzIiwicGFnZXMiLCJwYWdlQ291bnQiLCJwcmV2IiwibmV4dCIsImkiLCJwYWdpbmF0ZWRfc3BlY2lhbGlzdHMiLCJjYW5vbmljYWxVcmwiLCJDT05GSUciLCJBUElfQkFTRV9VUkwiLCJwYXRobmFtZSIsIm1hcCIsImNpdHkiLCJtYXJnaW5Cb3R0b20iLCJjaXR5X3RpdGxlIiwic3BlY2lhbGl0eV91cmxfdGl0bGUiLCJnb1RvU3BlY2lhbGl0eSIsImJpbmQiLCJwcmV2ZW50RGVmYXVsdCIsIkFTU0VUU19CQVNFX1VSTCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiU3BlY2lhbGl0aWVzTWFwIiwic2hvd01vcmUiLCJzcGVjaWFsaXRpZXNNYXAiLCJzcGVjaWFsaXphdGlvbl9pbnZlbnRvcnkiLCJzdHlsZSIsImRpc3BsYXkiLCJzcGVjaWFsaXphdGlvbl9pZCIsInNwZWNpYWxpemF0aW9uIiwic2V0U3RhdGUiLCJDaXRpZXNSb3V0ZXMiLCJTcGVjaWFsaXphdGlvbk1hcFJvdXRlcyIsIlNwZWNpYWxpemF0aW9uTWFwIiwic2V0VGltZW91dCIsInNldEZldGNoUmVzdWx0cyIsInN0b3JlIiwicXVlcnkiLCJkaXNwYXRjaCIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsIlNJVEVfTUFQIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY2IiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRkEsSUFBTUEsY0FBY0MsbUJBQU9BLENBQUMsMERBQVIsQ0FBcEI7O0lBS01DLHFCOzs7QUFFTCxnQ0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDRJQUNaQSxLQURZOztBQUdsQixNQUFJQyxPQUFPLENBQVg7QUFDQSxNQUFNQyxTQUFTTCxZQUFZTSxLQUFaLENBQWtCLE1BQUtILEtBQUwsQ0FBV0ksUUFBWCxDQUFvQkMsTUFBdEMsQ0FBZjtBQUNBLE1BQUlILE1BQUosRUFBWTtBQUNYRCxVQUFPQyxPQUFPRCxJQUFQLElBQWUsQ0FBdEI7QUFDQTs7QUFFRCxN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Q2M7QUFDRjtBQUNKO0FBQ0Y7QUFDSSIsImZpbGUiOiI4Ni5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuaW1wb3J0IEhlbG1ldFRhZ3MgZnJvbSAnLi4vSGVsbWV0VGFncydcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vLi4vY29uZmlnJ1xuXG5cbmNsYXNzIFNwZWNpYWxpdGllc0NpdGllc01hcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdGxldCBwYWdlID0gMTtcblx0XHRjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblx0XHRpZiAocGFyc2VkKSB7XG5cdFx0XHRwYWdlID0gcGFyc2VkLnBhZ2UgfHwgMVxuXHRcdH1cblxuXHRcdHZhciB0aXRsZSA9IHRoaXMucHJvcHMubWF0Y2gudXJsLnRvTG93ZXJDYXNlKCk7XG5cdFx0dGl0bGUgPSB0aXRsZS5zdWJzdHJpbmcoMSwgdGl0bGUubGVuZ3RoKVxuXG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0cGFnZTogcGFyc2VJbnQocGFnZSksXG5cdFx0XHR0aXRsZTogdGl0bGVcblx0XHR9XG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0aWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoID09ICc/cGFnZT0xJykge1xuXHRcdFx0dmFyIG5ld0hyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKCc/cGFnZT0xJywgJycpO1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBuZXdIcmVmO1xuXHRcdH1cblx0XHRsZXQgc3BlY2lhbGl0eSA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLnNwZWNpYWxpdHlcblx0XHR0aGlzLnByb3BzLmdldFNwZWNpYWxpdGllc01hcChzcGVjaWFsaXR5LCB0aGlzLnN0YXRlLnBhZ2UpXG5cdH1cblxuXHRnb1RvU3BlY2lhbGl0eSh1cmwsIGUpIHtcblx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgLyR7dXJsfWApXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRsZXQgdG90YWxQYWdlcyA9IHRoaXMucHJvcHMuc3BlY2lhbGl0aWVzTWFwQ2l0aWVzID8gcGFyc2VJbnQodGhpcy5wcm9wcy5zcGVjaWFsaXRpZXNNYXBDaXRpZXMucGFnZXMpIDogMFxuXHRcdGxldCBwYWdlQ291bnQgPSBbXVxuXHRcdGxldCBwcmV2ID0gJycsIG5leHQgPSAnJ1xuXHRcdGlmICh0b3RhbFBhZ2VzKSB7XG5cdFx0XHRpZiAodGhpcy5zdGF0ZS5wYWdlID09IDEgJiYgdGhpcy5zdGF0ZS5wYWdlIDwgdG90YWxQYWdlcykge1xuXHRcdFx0XHRuZXh0ID0gdGhpcy5zdGF0ZS5wYWdlICsgMVxuXHRcdFx0XHRwYWdlQ291bnQucHVzaCg8c3BhbiBrZXk9ezF9IGNsYXNzTmFtZT1cImFuY2gtcGFnZS1jbnQgYWN0aXZlXCI+e3RoaXMuc3RhdGUucGFnZX08L3NwYW4+XG5cdFx0XHRcdClcblx0XHRcdFx0Zm9yKHZhciBpID0yOyBpPD10b3RhbFBhZ2VzOyBpKyspe1xuXHRcdFx0XHRcdHBhZ2VDb3VudC5wdXNoKDxhIGtleT17aX0gY2xhc3NOYW1lPVwiYW5jaC1wYWdlLWNudFwiIGhyZWY9e2AvJHt0aGlzLnN0YXRlLnRpdGxlfT9wYWdlPSR7aX1gfSA+e2l9PC9hPilcblx0XHRcdFx0fVxuXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuc3RhdGUucGFnZSAhPSAxICYmIHRoaXMuc3RhdGUucGFnZSArIDEgPD0gdG90YWxQYWdlcykge1xuXHRcdFx0XHRuZXh0ID0gdGhpcy5zdGF0ZS5wYWdlICsgMVxuXHRcdFx0XHRwcmV2ID0gdGhpcy5zdGF0ZS5wYWdlIC0gMVxuXHRcdFx0XHRwYWdlQ291bnQucHVzaChcblx0XHRcdFx0XHRcdDxhIGtleT17MX0gY2xhc3NOYW1lPVwiYW5jaC1wYWdlLWNudFwiIGhyZWY9e2AvJHt0aGlzLnN0YXRlLnRpdGxlfT9wYWdlPSR7dGhpcy5zdGF0ZS5wYWdlIC0gMX1gfSA+e3RoaXMuc3RhdGUucGFnZSAtIDF9PC9hPilcblxuXHRcdFx0XHRwYWdlQ291bnQucHVzaCg8c3BhbiBrZXk9e3RoaXMuc3RhdGUucGFnZX0gY2xhc3NOYW1lPVwiYW5jaC1wYWdlLWNudFwiID57dGhpcy5zdGF0ZS5wYWdlfTwvc3Bhbj4pXG5cblx0XHRcdFx0Zm9yKHZhciBpID0gdGhpcy5zdGF0ZS5wYWdlICsgMTsgaTw9dG90YWxQYWdlczsgaSsrKXtcblx0XHRcdFx0XHRwYWdlQ291bnQucHVzaCg8YSBrZXk9e2l9IGNsYXNzTmFtZT1cImFuY2gtcGFnZS1jbnRcIiBocmVmPXtgLyR7dGhpcy5zdGF0ZS50aXRsZX0/cGFnZT0ke2l9YH0gPntpfTwvYT4pXG5cdFx0XHRcdH1cblxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnN0YXRlLnBhZ2UgPT0gdG90YWxQYWdlcyAmJiB0b3RhbFBhZ2VzID4gMSkge1xuXHRcdFx0XHRwcmV2ID0gdGhpcy5zdGF0ZS5wYWdlIC0gMVxuXHRcdFx0XHRwYWdlQ291bnQucHVzaChcblx0XHRcdFx0XHRcdDxhIGtleT17MX0gY2xhc3NOYW1lPVwiYW5jaC1wYWdlLWNudFwiIGhyZWY9e2AvJHt0aGlzLnN0YXRlLnRpdGxlfT9wYWdlPSR7dGhpcy5zdGF0ZS5wYWdlIC0gMX1gfSA+e3RoaXMuc3RhdGUucGFnZSAtIDF9PC9hPilcblxuXHRcdFx0XHRwYWdlQ291bnQucHVzaCg8c3BhbiBrZXk9e3RoaXMuc3RhdGUucGFnZX0gY2xhc3NOYW1lPVwiYW5jaC1wYWdlLWNudFwiID57dGhpcy5zdGF0ZS5wYWdlfTwvc3Bhbj4pXG5cdFx0XHRcdFx0XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBzaXRlbWFwLXJvd1wiPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5zcGVjaWFsaXRpZXNNYXBDaXRpZXMucGFnaW5hdGVkX3NwZWNpYWxpc3RzICYmIHRoaXMucHJvcHMuc3BlY2lhbGl0aWVzTWFwQ2l0aWVzLnBhZ2luYXRlZF9zcGVjaWFsaXN0cy5sZW5ndGggP1xuXG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxIZWxtZXRUYWdzIHRhZ3NEYXRhPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdGNhbm9uaWNhbFVybDogYCR7Q09ORklHLkFQSV9CQVNFX1VSTH0ke3RoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWV9JHt0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaH1gLFxuXG5cdFx0XHRcdFx0XHRcdFx0XHRwcmV2OiBgJHtwcmV2P2Ake0NPTkZJRy5BUElfQkFTRV9VUkx9JHt0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lfSR7cHJldiAhPSAxP2A/cGFnZT0ke3ByZXZ9YDonJ31gOicnfWAsXG5cblx0XHRcdFx0XHRcdFx0XHRcdG5leHQ6IGAke25leHQ/YCR7Q09ORklHLkFQSV9CQVNFX1VSTH0ke3RoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWV9P3BhZ2U9JHtuZXh0fWA6Jyd9YFxuXHRcdFx0XHRcdFx0XHRcdH19IC8+XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5zcGVjaWFsaXRpZXNNYXBDaXRpZXMucGFnaW5hdGVkX3NwZWNpYWxpc3RzLm1hcCgoY2l0eSwgaSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnMTVweCd9fSBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTEyXCIga2V5PXtpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwIHNpdGVtYXAtdGl0bGVcIj57Y2l0eS5jaXR5X3RpdGxlfTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNpdHkuc3BlY2lhbGl0eV91cmxfdGl0bGUubWFwKChzcGVjaWFsaXR5LCBpKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImNvbC1tZC02IHRlc3RzLWJyZHItYnRtXCIgb25DbGljaz17dGhpcy5nb1RvU3BlY2lhbGl0eS5iaW5kKHRoaXMsIHNwZWNpYWxpdHkudXJsKX0gPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhbmNob3ItZGF0YS1zdHlsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtgLyR7c3BlY2lhbGl0eS51cmx9YH0gb25DbGljaz17KGUpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpIH19ID57YCR7c3BlY2lhbGl0eS50aXRsZX1gfTwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwic2l0ZW1hcC1yaWdodC1hcnJvd1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvYXJyb3ctZm9yd2FyZC1yaWdodC5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0fVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb24tc3R5bGVcIj5cblx0XHRcdFx0e3BhZ2VDb3VudH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlY2lhbGl0aWVzQ2l0aWVzTWFwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5cbmNsYXNzIFNwZWNpYWxpdGllc01hcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0geyBzaG93TW9yZTogZmFsc2UgfVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5wcm9wcy5nZXRTcGVjaWFsaXRpZXNNYXAoKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZnctNTAwIHNpdGVtYXAtdGl0bGVcIj5BbGwgU3BlY2lhbGl0aWVzPC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IHNpdGVtYXAtcm93XCI+XG5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLnNwZWNpYWxpdGllc01hcC5zcGVjaWFsaXphdGlvbl9pbnZlbnRvcnkgJiYgdGhpcy5wcm9wcy5zcGVjaWFsaXRpZXNNYXAuc3BlY2lhbGl6YXRpb25faW52ZW50b3J5Lmxlbmd0aCA/XG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuc3BlY2lhbGl0aWVzTWFwLnNwZWNpYWxpemF0aW9uX2ludmVudG9yeS5tYXAoKGNpdHksIGkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRsZXQgc3R5bGUgPSB7fVxuXHRcdFx0XHRcdFx0XHRcdGlmICghdGhpcy5zdGF0ZS5zaG93TW9yZSAmJiBpID49IDIwKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZSA9IHsgZGlzcGxheTogJ25vbmUnIH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxkaXYgc3R5bGU9e3N0eWxlfSBrZXk9e2l9IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNCB0ZXN0cy1icmRyLWJ0bVwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvc3BlY2lhbGl0eS1pbnZlbnRvcnkvJHtjaXR5LnNwZWNpYWxpemF0aW9uX2lkfWApfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYW5jaG9yLWRhdGEtc3R5bGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj17YC9zcGVjaWFsaXR5LWludmVudG9yeS8ke2NpdHkuc3BlY2lhbGl6YXRpb25faWR9YH0gb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0gPntjaXR5LnNwZWNpYWxpemF0aW9ufTwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwic2l0ZW1hcC1yaWdodC1hcnJvd1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvYXJyb3ctZm9yd2FyZC1yaWdodC5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdDogPHA+Tm8gRGF0YSBGb3VuZDwvcD5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0IXRoaXMuc3RhdGUuc2hvd01vcmUgJiYgdGhpcy5wcm9wcy5zcGVjaWFsaXRpZXNNYXAuc3BlY2lhbGl6YXRpb25faW52ZW50b3J5ICYmIHRoaXMucHJvcHMuc3BlY2lhbGl0aWVzTWFwLnNwZWNpYWxpemF0aW9uX2ludmVudG9yeS5sZW5ndGggPj0gMjAgP1xuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LWNlbnRlciBtcnQtMjBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cInNpdGVtYXAtc2hvdy1tb3JlXCIgb25DbGljaz17KCkgPT4geyB0aGlzLnNldFN0YXRlKHsgc2hvd01vcmU6IHRydWUgfSkgfX0+U2hvdyBNb3JlPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWNpYWxpdGllc01hcCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vTGVmdEJhcidcbmltcG9ydCBTcGVjaWFsaXRpZXNWaWV3IGZyb20gJy4vU3BlY2lhbGl0aWVzVmlldydcbmltcG9ydCBTcGVjaWFsaXRpZXNDaXRpZXNWaWV3IGZyb20gJy4vU3BlY2lhbGl0aWVzQ2l0aWVzVmlldydcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vSG9tZS9mb290ZXInXG5cblxuY2xhc3MgQ2l0aWVzUm91dGVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwIHNpdGVtYXAtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGRwLWNvbnRhaW5lci1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGVmdEJhciAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuc3BlY2lhbGl0eT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlY2lhbGl0aWVzQ2l0aWVzVmlldyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PFNwZWNpYWxpdGllc1ZpZXcgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgXHQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENpdGllc1JvdXRlcyAgIiwiaW1wb3J0IFNwZWNpYWxpemF0aW9uTWFwUm91dGVzIGZyb20gJy4vU3BlY2lhbGl6YXRpb25NYXBSb3V0ZXMnXG5cbmV4cG9ydCBkZWZhdWx0IFNwZWNpYWxpemF0aW9uTWFwUm91dGVzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFNwZWNpYWxpemF0aW9uTWFwUm91dGVzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9TcGVjaWFsaXphdGlvbk1hcFJvdXRlcydcbmltcG9ydCB7IHNldEZldGNoUmVzdWx0cywgZ2V0U3BlY2lhbGl0aWVzTWFwIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcblxuY2xhc3MgU3BlY2lhbGl6YXRpb25NYXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdHN0YXRpYyBsb2FkRGF0YShzdG9yZSwgbWF0Y2gsIHF1ZXJ5KSB7XG5cdFx0aWYgKG1hdGNoLnBhcmFtcy5zcGVjaWFsaXR5KSB7XG5cdFx0XHRyZXR1cm4gc3RvcmUuZGlzcGF0Y2goZ2V0U3BlY2lhbGl0aWVzTWFwKG1hdGNoLnBhcmFtcy5zcGVjaWFsaXR5LCBxdWVyeS5wYWdlKSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHN0b3JlLmRpc3BhdGNoKGdldFNwZWNpYWxpdGllc01hcCgpKVxuXHRcdH1cblxuXHR9XG5cblx0c3RhdGljIGNvbnRleHRUeXBlcyA9IHtcblx0XHRyb3V0ZXI6ICgpID0+IG51bGxcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5wcm9wcy5zZXRGZXRjaFJlc3VsdHModHJ1ZSlcblx0XHR9LCAxMDAwKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxTcGVjaWFsaXphdGlvbk1hcFJvdXRlcyB7Li4udGhpcy5wcm9wc30gLz5cblx0XHQpXG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG5cdGNvbnN0IHtcblx0XHRzcGVjaWFsaXRpZXNNYXAsXG5cdFx0c3BlY2lhbGl0aWVzTWFwQ2l0aWVzXG5cdH0gPSBzdGF0ZS5TSVRFX01BUFxuXG5cdHJldHVybiB7XG5cdFx0c3BlY2lhbGl0aWVzTWFwLFxuXHRcdHNwZWNpYWxpdGllc01hcENpdGllc1xuXHR9XG59XG5cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG5cblx0cmV0dXJuIHtcblx0XHRnZXRTcGVjaWFsaXRpZXNNYXA6IChzcGVjaWFsaXR5LCBwYWdlLCBjYikgPT4gZGlzcGF0Y2goZ2V0U3BlY2lhbGl0aWVzTWFwKHNwZWNpYWxpdHksIHBhZ2UsIGNiKSksXG5cdFx0c2V0RmV0Y2hSZXN1bHRzOiAoc3RhdHVzKSA9PiBkaXNwYXRjaChzZXRGZXRjaFJlc3VsdHMoc3RhdHVzKSlcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNwZWNpYWxpemF0aW9uTWFwKSIsIi8vIC5kaXJuYW1lLCAuYmFzZW5hbWUsIGFuZCAuZXh0bmFtZSBtZXRob2RzIGFyZSBleHRyYWN0ZWQgZnJvbSBOb2RlLmpzIHY4LjExLjEsXG4vLyBiYWNrcG9ydGVkIGFuZCB0cmFuc3BsaXRlZCB3aXRoIEJhYmVsLCB3aXRoIGJhY2t3YXJkcy1jb21wYXQgZml4ZXNcblxuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIHJlc29sdmVzIC4gYW5kIC4uIGVsZW1lbnRzIGluIGEgcGF0aCBhcnJheSB3aXRoIGRpcmVjdG9yeSBuYW1lcyB0aGVyZVxuLy8gbXVzdCBiZSBubyBzbGFzaGVzLCBlbXB0eSBlbGVtZW50cywgb3IgZGV2aWNlIG5hbWVzIChjOlxcKSBpbiB0aGUgYXJyYXlcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkocGFydHMsIGFsbG93QWJvdmVSb290KSB7XG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsYXN0ID0gcGFydHNbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKGFsbG93QWJvdmVSb290KSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBwYXJ0cy51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xufTtcblxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKSxcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBzdWJzdHIocGF0aCwgLTEpID09PSAnLyc7XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XG4gICAgcGF0aCA9ICcuJztcbiAgfVxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XG4gICAgcGF0aCArPSAnLyc7XG4gIH1cblxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuam9pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gZXhwb3J0cy5ub3JtYWxpemUoZmlsdGVyKHBhdGhzLCBmdW5jdGlvbihwLCBpbmRleCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9KS5qb2luKCcvJykpO1xufTtcblxuXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gIGZyb20gPSBleHBvcnRzLnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICB0byA9IGV4cG9ydHMucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuXG4gIGZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICBpZiAoYXJyW3N0YXJ0XSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XG4gICAgICBpZiAoYXJyW2VuZF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG5cbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgdmFyIHRvUGFydHMgPSB0cmltKHRvLnNwbGl0KCcvJykpO1xuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICB9XG5cbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcblxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufTtcblxuZXhwb3J0cy5zZXAgPSAnLyc7XG5leHBvcnRzLmRlbGltaXRlciA9ICc6JztcblxuZXhwb3J0cy5kaXJuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gJy4nO1xuICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdCgwKTtcbiAgdmFyIGhhc1Jvb3QgPSBjb2RlID09PSA0NyAvKi8qLztcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAxOyAtLWkpIHtcbiAgICBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIGVuZCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvclxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiBoYXNSb290ID8gJy8nIDogJy4nO1xuICBpZiAoaGFzUm9vdCAmJiBlbmQgPT09IDEpIHtcbiAgICAvLyByZXR1cm4gJy8vJztcbiAgICAvLyBCYWNrd2FyZHMtY29tcGF0IGZpeDpcbiAgICByZXR1cm4gJy8nO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKDAsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBiYXNlbmFtZShwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG5cbiAgdmFyIHN0YXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgdmFyIGk7XG5cbiAgZm9yIChpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIGlmIChwYXRoLmNoYXJDb2RlQXQoaSkgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gcGF0aCBjb21wb25lbnRcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiAnJztcbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnQsIGVuZCk7XG59XG5cbi8vIFVzZXMgYSBtaXhlZCBhcHByb2FjaCBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHksIGFzIGV4dCBiZWhhdmlvciBjaGFuZ2VkXG4vLyBpbiBuZXcgTm9kZS5qcyB2ZXJzaW9ucywgc28gb25seSBiYXNlbmFtZSgpIGFib3ZlIGlzIGJhY2twb3J0ZWQgaGVyZVxuZXhwb3J0cy5iYXNlbmFtZSA9IGZ1bmN0aW9uIChwYXRoLCBleHQpIHtcbiAgdmFyIGYgPSBiYXNlbmFtZShwYXRoKTtcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gZjtcbn07XG5cbmV4cG9ydHMuZXh0bmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIHZhciBzdGFydERvdCA9IC0xO1xuICB2YXIgc3RhcnRQYXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgLy8gVHJhY2sgdGhlIHN0YXRlIG9mIGNoYXJhY3RlcnMgKGlmIGFueSkgd2Ugc2VlIGJlZm9yZSBvdXIgZmlyc3QgZG90IGFuZFxuICAvLyBhZnRlciBhbnkgcGF0aCBzZXBhcmF0b3Igd2UgZmluZFxuICB2YXIgcHJlRG90U3RhdGUgPSAwO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydFBhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gZXh0ZW5zaW9uXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gNDYgLyouKi8pIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgZG90LCBtYXJrIGl0IGFzIHRoZSBzdGFydCBvZiBvdXIgZXh0ZW5zaW9uXG4gICAgICAgIGlmIChzdGFydERvdCA9PT0gLTEpXG4gICAgICAgICAgc3RhcnREb3QgPSBpO1xuICAgICAgICBlbHNlIGlmIChwcmVEb3RTdGF0ZSAhPT0gMSlcbiAgICAgICAgICBwcmVEb3RTdGF0ZSA9IDE7XG4gICAgfSBlbHNlIGlmIChzdGFydERvdCAhPT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgYW5kIG5vbi1wYXRoIHNlcGFyYXRvciBiZWZvcmUgb3VyIGRvdCwgc28gd2Ugc2hvdWxkXG4gICAgICAvLyBoYXZlIGEgZ29vZCBjaGFuY2UgYXQgaGF2aW5nIGEgbm9uLWVtcHR5IGV4dGVuc2lvblxuICAgICAgcHJlRG90U3RhdGUgPSAtMTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhcnREb3QgPT09IC0xIHx8IGVuZCA9PT0gLTEgfHxcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgY2hhcmFjdGVyIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgZG90XG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMCB8fFxuICAgICAgLy8gVGhlIChyaWdodC1tb3N0KSB0cmltbWVkIHBhdGggY29tcG9uZW50IGlzIGV4YWN0bHkgJy4uJ1xuICAgICAgcHJlRG90U3RhdGUgPT09IDEgJiYgc3RhcnREb3QgPT09IGVuZCAtIDEgJiYgc3RhcnREb3QgPT09IHN0YXJ0UGFydCArIDEpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnREb3QsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBmaWx0ZXIgKHhzLCBmKSB7XG4gICAgaWYgKHhzLmZpbHRlcikgcmV0dXJuIHhzLmZpbHRlcihmKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZih4c1tpXSwgaSwgeHMpKSByZXMucHVzaCh4c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFN0cmluZy5wcm90b3R5cGUuc3Vic3RyIC0gbmVnYXRpdmUgaW5kZXggZG9uJ3Qgd29yayBpbiBJRThcbnZhciBzdWJzdHIgPSAnYWInLnN1YnN0cigtMSkgPT09ICdiJ1xuICAgID8gZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikgeyByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKSB9XG4gICAgOiBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gc3RyLmxlbmd0aCArIHN0YXJ0O1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKTtcbiAgICB9XG47XG4iLCJpbXBvcnQgX01lbW9yeVJvdXRlciBmcm9tIFwiLi9NZW1vcnlSb3V0ZXJcIjtcbmV4cG9ydCB7IF9NZW1vcnlSb3V0ZXIgYXMgTWVtb3J5Um91dGVyIH07XG5pbXBvcnQgX1Byb21wdCBmcm9tIFwiLi9Qcm9tcHRcIjtcbmV4cG9ydCB7IF9Qcm9tcHQgYXMgUHJvbXB0IH07XG5pbXBvcnQgX1JlZGlyZWN0IGZyb20gXCIuL1JlZGlyZWN0XCI7XG5leHBvcnQgeyBfUmVkaXJlY3QgYXMgUmVkaXJlY3QgfTtcbmltcG9ydCBfUm91dGUgZnJvbSBcIi4vUm91dGVcIjtcbmV4cG9ydCB7IF9Sb3V0ZSBhcyBSb3V0ZSB9O1xuaW1wb3J0IF9Sb3V0ZXIgZnJvbSBcIi4vUm91dGVyXCI7XG5leHBvcnQgeyBfUm91dGVyIGFzIFJvdXRlciB9O1xuaW1wb3J0IF9TdGF0aWNSb3V0ZXIgZnJvbSBcIi4vU3RhdGljUm91dGVyXCI7XG5leHBvcnQgeyBfU3RhdGljUm91dGVyIGFzIFN0YXRpY1JvdXRlciB9O1xuaW1wb3J0IF9Td2l0Y2ggZnJvbSBcIi4vU3dpdGNoXCI7XG5leHBvcnQgeyBfU3dpdGNoIGFzIFN3aXRjaCB9O1xuaW1wb3J0IF9nZW5lcmF0ZVBhdGggZnJvbSBcIi4vZ2VuZXJhdGVQYXRoXCI7XG5leHBvcnQgeyBfZ2VuZXJhdGVQYXRoIGFzIGdlbmVyYXRlUGF0aCB9O1xuaW1wb3J0IF9tYXRjaFBhdGggZnJvbSBcIi4vbWF0Y2hQYXRoXCI7XG5leHBvcnQgeyBfbWF0Y2hQYXRoIGFzIG1hdGNoUGF0aCB9O1xuaW1wb3J0IF93aXRoUm91dGVyIGZyb20gXCIuL3dpdGhSb3V0ZXJcIjtcbmV4cG9ydCB7IF93aXRoUm91dGVyIGFzIHdpdGhSb3V0ZXIgfTsiXSwic291cmNlUm9vdCI6IiJ9