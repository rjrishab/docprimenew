(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[102],{

/***/ "./dev/js/components/commons/offers/OffersView.js":
/*!********************************************************!*\
  !*** ./dev/js/components/commons/offers/OffersView.js ***!
  \********************************************************/
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

var _DesktopProfileHeader = __webpack_require__(/*! ../DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _RightBar = __webpack_require__(/*! ../RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _footer = __webpack_require__(/*! ../Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _FixedMobileFooter = __webpack_require__(/*! ../Home/FixedMobileFooter */ "./dev/js/components/commons/Home/FixedMobileFooter.js");

var _FixedMobileFooter2 = _interopRequireDefault(_FixedMobileFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OffersView = function (_React$Component) {
    _inherits(OffersView, _React$Component);

    function OffersView() {
        _classCallCheck(this, OffersView);

        return _possibleConstructorReturn(this, (OffersView.__proto__ || Object.getPrototypeOf(OffersView)).apply(this, arguments));
    }

    _createClass(OffersView, [{
        key: 'navigateTo',
        value: function navigateTo(offer) {
            var _this2 = this;

            if (offer.url_details && offer.url_details.test_ids) {
                var test = {};

                var filters = { 'priceRange': [offer.url_details.min_fees, offer.url_details.max_fees], 'distanceRange': [offer.url_details.min_distance, offer.url_details.max_distance], 'sort_on': offer.url_details.sort_on || '', 'lab_name': offer.url_details.lab_name || '', 'network_id': offer.url_details.network_id || '' };

                test.type = 'test';
                test.id = [];

                var testIdArray = offer.url_details.test_ids.split(',');
                for (var id in testIdArray) {
                    test.id.push(parseInt(testIdArray[id]));
                }

                this.props.toggleDiagnosisCriteria('test', test, true, filters);
                setTimeout(function () {
                    _this2.props.history.push('/lab/searchresults');
                }, 100);

                var data = {
                    'Category': 'ConsumerApp', 'Action': offer.event_name, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': offer.event_name, 'clickedOn': offer.slider_location
                };
                _gtm2.default.sendEvent({ data: data });
            } else if (offer.url_details && offer.url_details.specializations && offer.url_details.specializations != '') {
                var speciality = {};

                var _filters = { 'priceRange': [offer.url_details.min_fees, offer.url_details.max_fees], 'distanceRange': [offer.url_details.min_distance, offer.url_details.max_distance], 'sort_on': offer.url_details.sort_on || '', 'is_female': offer.url_details.is_female || false, 'is_available': offer.url_details.is_available || false, 'doctor_name': offer.url_details.doctor_name || '', 'hospital_name': offer.url_details.hospital_name || '', 'hospital_id': offer.url_details.hospital_id || '' };

                speciality.type = 'speciality';
                speciality.id = [];

                var specialityIdArray = offer.url_details.specializations.split(',');
                for (var _id in specialityIdArray) {
                    speciality.id.push(parseInt(specialityIdArray[_id]));
                }

                this.props.toggleOPDCriteria('speciality', speciality, true, _filters);
                setTimeout(function () {
                    _this2.props.history.push('/opd/searchresults');
                }, 100);

                var _data = {
                    'Category': 'ConsumerApp', 'Action': offer.event_name, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': offer.event_name, 'clickedOn': offer.slider_location
                };
                _gtm2.default.sendEvent({ data: _data });
            } else if (offer.url_details && offer.url_details.procedure_ids && offer.url_details.procedure_ids != '') {
                var _speciality = {};

                var _filters2 = { 'priceRange': [offer.url_details.min_fees, offer.url_details.max_fees], 'distanceRange': [offer.url_details.min_distance, offer.url_details.max_distance], 'sort_on': offer.url_details.sort_on || '', 'is_female': offer.url_details.is_female || false, 'is_available': offer.url_details.is_available || false, 'doctor_name': offer.url_details.doctor_name || '', 'hospital_name': offer.url_details.hospital_name || '', 'hospital_id': offer.url_details.hospital_id || '' };

                _speciality.type = 'procedures';
                _speciality.id = [];

                var _specialityIdArray = offer.url_details.procedure_ids.split(',');
                for (var _id2 in _specialityIdArray) {
                    _speciality.id.push(parseInt(_specialityIdArray[_id2]));
                }

                this.props.toggleOPDCriteria('procedures', _speciality, true, _filters2);
                setTimeout(function () {
                    _this2.props.history.push('/opd/searchresults');
                }, 100);

                var _data2 = {
                    'Category': 'ConsumerApp', 'Action': offer.event_name, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': offer.event_name, 'clickedOn': offer.slider_location
                };
                _gtm2.default.sendEvent({ data: _data2 });
            } else if (offer.url_details && offer.url_details.procedure_category_ids && offer.url_details.procedure_category_ids != '') {
                var _speciality2 = {};

                var _filters3 = { 'priceRange': [offer.url_details.min_fees, offer.url_details.max_fees], 'distanceRange': [offer.url_details.min_distance, offer.url_details.max_distance], 'sort_on': offer.url_details.sort_on || '', 'is_female': offer.url_details.is_female || false, 'is_available': offer.url_details.is_available || false, 'doctor_name': offer.url_details.doctor_name || '', 'hospital_name': offer.url_details.hospital_name || '', 'hospital_id': offer.url_details.hospital_id || '' };

                _speciality2.type = 'procedures_category';
                _speciality2.id = [];

                var _specialityIdArray2 = offer.url_details.procedure_category_ids.split(',');
                for (var _id3 in _specialityIdArray2) {
                    _speciality2.id.push(parseInt(_specialityIdArray2[_id3]));
                }

                this.props.toggleOPDCriteria('procedures_category', _speciality2, true, _filters3);
                setTimeout(function () {
                    _this2.props.history.push('/opd/searchresults');
                }, 100);

                var _data3 = {
                    'Category': 'ConsumerApp', 'Action': offer.event_name, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': offer.event_name, 'clickedOn': offer.slider_location
                };
                _gtm2.default.sendEvent({ data: _data3 });
            } else if (offer.url_details && offer.url_details.conditions && offer.url_details.conditions != '') {
                var _speciality3 = {};

                var _filters4 = { 'priceRange': [offer.url_details.min_fees, offer.url_details.max_fees], 'distanceRange': [offer.url_details.min_distance, offer.url_details.max_distance], 'sort_on': offer.url_details.sort_on || '', 'is_female': offer.url_details.is_female || false, 'is_available': offer.url_details.is_available || false, 'doctor_name': offer.url_details.doctor_name || '', 'hospital_name': offer.url_details.hospital_name || '', 'hospital_id': offer.url_details.hospital_id || '' };

                _speciality3.type = 'condition';
                _speciality3.id = [];

                var _specialityIdArray3 = offer.url_details.conditions.split(',');
                for (var _id4 in _specialityIdArray3) {
                    _speciality3.id.push(parseInt(_specialityIdArray3[_id4]));
                }

                this.props.toggleOPDCriteria('condition', _speciality3, true, _filters4);
                setTimeout(function () {
                    _this2.props.history.push('/opd/searchresults');
                }, 100);

                var _data4 = {
                    'Category': 'ConsumerApp', 'Action': offer.event_name, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': offer.event_name, 'clickedOn': offer.slider_location
                };
                _gtm2.default.sendEvent({ data: _data4 });
            } else if (offer.url) {
                if (offer.url.startsWith('http')) {
                    window.open(offer.url, '_blank');
                } else {
                    this.props.history.push(offer.url);
                }

                var _data5 = {
                    'Category': 'ConsumerApp', 'Action': offer.event_name, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': offer.event_name, 'clickedOn': offer.slider_location
                };
                _gtm2.default.sendEvent({ data: _data5 });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.scrollTo(0, 0);

            var selectedLocation = '';
            var lat = 28.644800;
            var long = 77.216721;
            if (this.props.selectedLocation) {
                selectedLocation = this.props.selectedLocation;
                lat = selectedLocation.geometry.location.lat;
                long = selectedLocation.geometry.location.lng;
                if (typeof lat === 'function') lat = lat();
                if (typeof long === 'function') long = long();
            }

            this.props.getOfferList(lat, long);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { className: 'profile-body-wrap', style: { background: '#fff' } },
                _react2.default.createElement(_DesktopProfileHeader2.default, { showSearch: true }),
                _react2.default.createElement(
                    'section',
                    { className: 'container parent-section book-appointment-section' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row main-row parent-section-row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12 col-md-7 center-column' },
                            _react2.default.createElement(
                                'div',
                                { className: 'container' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-12' },
                                        this.props.offerList && this.props.offerList.filter(function (x) {
                                            return x.slider_location === 'offers_page';
                                        }).length ? _react2.default.createElement(
                                            'p',
                                            { className: 'fw-700 offer-heading mrt-20' },
                                            'Offers'
                                        ) : _react2.default.createElement(
                                            'p',
                                            { className: 'fw-700 offer-heading mrt-20' },
                                            'No offers available'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-12' },
                                        this.props.offerList && this.props.offerList.filter(function (x) {
                                            return x.slider_location === 'offers_page';
                                        }).length ? this.props.offerList.filter(function (x) {
                                            return x.slider_location === 'offers_page';
                                        }).map(function (offer, i) {
                                            return _react2.default.createElement(
                                                'div',
                                                { className: 'offer-div', key: i, onClick: function onClick() {
                                                        return _this3.navigateTo(offer);
                                                    } },
                                                _react2.default.createElement('img', { src: offer.image })
                                            );
                                        }) : ''
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(_RightBar2.default, { noChatButton: true, msgTemplate: 'gold_general_template' })
                    )
                ),
                _react2.default.createElement(_footer2.default, null),
                _react2.default.createElement(_FixedMobileFooter2.default, _extends({ offersPage: true }, this.props))
            );
        }
    }]);

    return OffersView;
}(_react2.default.Component);

exports.default = OffersView;

/***/ }),

/***/ "./dev/js/components/commons/offers/index.js":
/*!***************************************************!*\
  !*** ./dev/js/components/commons/offers/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _OffersView = __webpack_require__(/*! ./OffersView */ "./dev/js/components/commons/offers/OffersView.js");

var _OffersView2 = _interopRequireDefault(_OffersView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _OffersView2.default;

/***/ }),

/***/ "./dev/js/containers/commons/Offers.js":
/*!*********************************************!*\
  !*** ./dev/js/containers/commons/Offers.js ***!
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

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _offers = __webpack_require__(/*! ../../components/commons/offers */ "./dev/js/components/commons/offers/index.js");

var _offers2 = _interopRequireDefault(_offers);

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Offers = function (_React$Component) {
    _inherits(Offers, _React$Component);

    function Offers(props) {
        _classCallCheck(this, Offers);

        return _possibleConstructorReturn(this, (Offers.__proto__ || Object.getPrototypeOf(Offers)).call(this, props));
    }

    _createClass(Offers, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_offers2.default, this.props);
        }
    }]);

    return Offers;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    var offerList = state.USER.offerList;
    var selectedLocation = state.SEARCH_CRITERIA_LABS.selectedLocation;


    return {
        offerList: offerList,
        selectedLocation: selectedLocation
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        toggleOPDCriteria: function toggleOPDCriteria(type, criteria, forceAdd, filters) {
            return dispatch((0, _index.toggleOPDCriteria)(type, criteria, forceAdd, filters));
        },
        toggleDiagnosisCriteria: function toggleDiagnosisCriteria(type, criteria, forceAdd, filters) {
            return dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd, filters));
        },
        selectSearchType: function selectSearchType(type) {
            return dispatch((0, _index.selectSearchType)(type));
        },
        getOfferList: function getOfferList(lat, long) {
            return dispatch((0, _index.getOfferList)(lat, long));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Offers);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL29mZmVycy9PZmZlcnNWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvb2ZmZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2NvbW1vbnMvT2ZmZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wYXRoLWJyb3dzZXJpZnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9lcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJPZmZlcnNWaWV3Iiwib2ZmZXIiLCJ1cmxfZGV0YWlscyIsInRlc3RfaWRzIiwidGVzdCIsImZpbHRlcnMiLCJtaW5fZmVlcyIsIm1heF9mZWVzIiwibWluX2Rpc3RhbmNlIiwibWF4X2Rpc3RhbmNlIiwic29ydF9vbiIsImxhYl9uYW1lIiwibmV0d29ya19pZCIsInR5cGUiLCJpZCIsInRlc3RJZEFycmF5Iiwic3BsaXQiLCJwdXNoIiwicGFyc2VJbnQiLCJwcm9wcyIsInRvZ2dsZURpYWdub3Npc0NyaXRlcmlhIiwic2V0VGltZW91dCIsImhpc3RvcnkiLCJkYXRhIiwiZXZlbnRfbmFtZSIsIkdUTSIsImdldFVzZXJJZCIsInNsaWRlcl9sb2NhdGlvbiIsInNlbmRFdmVudCIsInNwZWNpYWxpemF0aW9ucyIsInNwZWNpYWxpdHkiLCJpc19mZW1hbGUiLCJpc19hdmFpbGFibGUiLCJkb2N0b3JfbmFtZSIsImhvc3BpdGFsX25hbWUiLCJob3NwaXRhbF9pZCIsInNwZWNpYWxpdHlJZEFycmF5IiwidG9nZ2xlT1BEQ3JpdGVyaWEiLCJwcm9jZWR1cmVfaWRzIiwicHJvY2VkdXJlX2NhdGVnb3J5X2lkcyIsImNvbmRpdGlvbnMiLCJ1cmwiLCJzdGFydHNXaXRoIiwid2luZG93Iiwib3BlbiIsInNjcm9sbFRvIiwic2VsZWN0ZWRMb2NhdGlvbiIsImxhdCIsImxvbmciLCJnZW9tZXRyeSIsImxvY2F0aW9uIiwibG5nIiwiZ2V0T2ZmZXJMaXN0IiwiYmFja2dyb3VuZCIsIm9mZmVyTGlzdCIsImZpbHRlciIsIngiLCJsZW5ndGgiLCJtYXAiLCJpIiwibmF2aWdhdGVUbyIsImltYWdlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJPZmZlcnMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIlVTRVIiLCJTRUFSQ0hfQ1JJVEVSSUFfTEFCUyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY3JpdGVyaWEiLCJmb3JjZUFkZCIsInNlbGVjdFNlYXJjaFR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsVTs7Ozs7Ozs7Ozs7bUNBRVNDLEssRUFBTztBQUFBOztBQUNkLGdCQUFJQSxNQUFNQyxXQUFOLElBQXFCRCxNQUFNQyxXQUFOLENBQWtCQyxRQUEzQyxFQUFxRDtBQUNqRCxvQkFBSUMsT0FBTyxFQUFYOztBQUVBLG9CQUFJQyxVQUFVLEVBQUUsY0FBYyxDQUFDSixNQUFNQyxXQUFOLENBQWtCSSxRQUFuQixFQUE2QkwsTUFBTUMsV0FBTixDQUFrQkssUUFBL0MsQ0FBaEIsRUFBMEUsaUJBQWlCLENBQUNOLE1BQU1DLFdBQU4sQ0FBa0JNLFlBQW5CLEVBQWlDUCxNQUFNQyxXQUFOLENBQWtCTyxZQUFuRCxDQUEzRixFQUE2SixXQUFXUixNQUFNQyxXQUFOLENBQWtCUSxPQUFsQixJQUE2QixFQUFyTSxFQUF5TSxZQUFZVCxNQUFNQyxXQUFOLENBQWtCUyxRQUFsQixJQUE4QixFQUFuUCxFQUF1UCxjQUFjVixNQUFNQyxXQUFOLENBQWtCVSxVQUFsQixJQUFnQyxFQUFyUyxFQUFkOztBQUVBUixxQkFBS1MsSUFBTCxHQUFZLE1BQVo7QUFDQVQscUJBQUtVLEVBQUwsR0FBVSxFQUFWOztBQUVBLG9CQUFJQyxjQUFjZCxN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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uL0Rlc2t0b3BQcm9maWxlSGVhZGVyJztcbmltcG9ydCBSaWdodEJhciBmcm9tICcuLi9SaWdodEJhcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0hvbWUvZm9vdGVyJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bSc7XG5pbXBvcnQgRml4ZWRNb2JpbGVGb290ZXIgZnJvbSAnLi4vSG9tZS9GaXhlZE1vYmlsZUZvb3Rlcic7XG5cbmNsYXNzIE9mZmVyc1ZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgbmF2aWdhdGVUbyhvZmZlcikge1xuICAgICAgICBpZiAob2ZmZXIudXJsX2RldGFpbHMgJiYgb2ZmZXIudXJsX2RldGFpbHMudGVzdF9pZHMpIHtcbiAgICAgICAgICAgIGxldCB0ZXN0ID0ge31cblxuICAgICAgICAgICAgbGV0IGZpbHRlcnMgPSB7ICdwcmljZVJhbmdlJzogW29mZmVyLnVybF9kZXRhaWxzLm1pbl9mZWVzLCBvZmZlci51cmxfZGV0YWlscy5tYXhfZmVlc10sICdkaXN0YW5jZVJhbmdlJzogW29mZmVyLnVybF9kZXRhaWxzLm1pbl9kaXN0YW5jZSwgb2ZmZXIudXJsX2RldGFpbHMubWF4X2Rpc3RhbmNlXSwgJ3NvcnRfb24nOiBvZmZlci51cmxfZGV0YWlscy5zb3J0X29uIHx8ICcnLCAnbGFiX25hbWUnOiBvZmZlci51cmxfZGV0YWlscy5sYWJfbmFtZSB8fCAnJywgJ25ldHdvcmtfaWQnOiBvZmZlci51cmxfZGV0YWlscy5uZXR3b3JrX2lkIHx8ICcnIH1cblxuICAgICAgICAgICAgdGVzdC50eXBlID0gJ3Rlc3QnXG4gICAgICAgICAgICB0ZXN0LmlkID0gW11cblxuICAgICAgICAgICAgbGV0IHRlc3RJZEFycmF5ID0gb2ZmZXIudXJsX2RldGFpbHMudGVzdF9pZHMuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGlkIGluIHRlc3RJZEFycmF5KSB7XG4gICAgICAgICAgICAgICAgdGVzdC5pZC5wdXNoKHBhcnNlSW50KHRlc3RJZEFycmF5W2lkXSkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEoJ3Rlc3QnLCB0ZXN0LCB0cnVlLCBmaWx0ZXJzKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9sYWIvc2VhcmNocmVzdWx0cycpXG4gICAgICAgICAgICB9LCAxMDApXG5cbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiBvZmZlci5ldmVudF9uYW1lLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6IG9mZmVyLmV2ZW50X25hbWUsICdjbGlja2VkT24nOiBvZmZlci5zbGlkZXJfbG9jYXRpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmIChvZmZlci51cmxfZGV0YWlscyAmJiBvZmZlci51cmxfZGV0YWlscy5zcGVjaWFsaXphdGlvbnMgJiYgb2ZmZXIudXJsX2RldGFpbHMuc3BlY2lhbGl6YXRpb25zICE9ICcnKSB7XG4gICAgICAgICAgICBsZXQgc3BlY2lhbGl0eSA9IHt9XG5cbiAgICAgICAgICAgIGxldCBmaWx0ZXJzID0geyAncHJpY2VSYW5nZSc6IFtvZmZlci51cmxfZGV0YWlscy5taW5fZmVlcywgb2ZmZXIudXJsX2RldGFpbHMubWF4X2ZlZXNdLCAnZGlzdGFuY2VSYW5nZSc6IFtvZmZlci51cmxfZGV0YWlscy5taW5fZGlzdGFuY2UsIG9mZmVyLnVybF9kZXRhaWxzLm1heF9kaXN0YW5jZV0sICdzb3J0X29uJzogb2ZmZXIudXJsX2RldGFpbHMuc29ydF9vbiB8fCAnJywgJ2lzX2ZlbWFsZSc6IG9mZmVyLnVybF9kZXRhaWxzLmlzX2ZlbWFsZSB8fCBmYWxzZSwgJ2lzX2F2YWlsYWJsZSc6IG9mZmVyLnVybF9kZXRhaWxzLmlzX2F2YWlsYWJsZSB8fCBmYWxzZSwgJ2RvY3Rvcl9uYW1lJzogb2ZmZXIudXJsX2RldGFpbHMuZG9jdG9yX25hbWUgfHwgJycsICdob3NwaXRhbF9uYW1lJzogb2ZmZXIudXJsX2RldGFpbHMuaG9zcGl0YWxfbmFtZSB8fCAnJywgJ2hvc3BpdGFsX2lkJzogb2ZmZXIudXJsX2RldGFpbHMuaG9zcGl0YWxfaWQgfHwgJycgfVxuXG4gICAgICAgICAgICBzcGVjaWFsaXR5LnR5cGUgPSAnc3BlY2lhbGl0eSdcbiAgICAgICAgICAgIHNwZWNpYWxpdHkuaWQgPSBbXVxuXG4gICAgICAgICAgICBsZXQgc3BlY2lhbGl0eUlkQXJyYXkgPSBvZmZlci51cmxfZGV0YWlscy5zcGVjaWFsaXphdGlvbnMuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGlkIGluIHNwZWNpYWxpdHlJZEFycmF5KSB7XG4gICAgICAgICAgICAgICAgc3BlY2lhbGl0eS5pZC5wdXNoKHBhcnNlSW50KHNwZWNpYWxpdHlJZEFycmF5W2lkXSkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlT1BEQ3JpdGVyaWEoJ3NwZWNpYWxpdHknLCBzcGVjaWFsaXR5LCB0cnVlLCBmaWx0ZXJzKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9vcGQvc2VhcmNocmVzdWx0cycpXG4gICAgICAgICAgICB9LCAxMDApXG5cbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiBvZmZlci5ldmVudF9uYW1lLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6IG9mZmVyLmV2ZW50X25hbWUsICdjbGlja2VkT24nOiBvZmZlci5zbGlkZXJfbG9jYXRpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmIChvZmZlci51cmxfZGV0YWlscyAmJiBvZmZlci51cmxfZGV0YWlscy5wcm9jZWR1cmVfaWRzICYmIG9mZmVyLnVybF9kZXRhaWxzLnByb2NlZHVyZV9pZHMgIT0gJycpIHtcbiAgICAgICAgICAgIGxldCBzcGVjaWFsaXR5ID0ge31cblxuICAgICAgICAgICAgbGV0IGZpbHRlcnMgPSB7ICdwcmljZVJhbmdlJzogW29mZmVyLnVybF9kZXRhaWxzLm1pbl9mZWVzLCBvZmZlci51cmxfZGV0YWlscy5tYXhfZmVlc10sICdkaXN0YW5jZVJhbmdlJzogW29mZmVyLnVybF9kZXRhaWxzLm1pbl9kaXN0YW5jZSwgb2ZmZXIudXJsX2RldGFpbHMubWF4X2Rpc3RhbmNlXSwgJ3NvcnRfb24nOiBvZmZlci51cmxfZGV0YWlscy5zb3J0X29uIHx8ICcnLCAnaXNfZmVtYWxlJzogb2ZmZXIudXJsX2RldGFpbHMuaXNfZmVtYWxlIHx8IGZhbHNlLCAnaXNfYXZhaWxhYmxlJzogb2ZmZXIudXJsX2RldGFpbHMuaXNfYXZhaWxhYmxlIHx8IGZhbHNlLCAnZG9jdG9yX25hbWUnOiBvZmZlci51cmxfZGV0YWlscy5kb2N0b3JfbmFtZSB8fCAnJywgJ2hvc3BpdGFsX25hbWUnOiBvZmZlci51cmxfZGV0YWlscy5ob3NwaXRhbF9uYW1lIHx8ICcnLCAnaG9zcGl0YWxfaWQnOiBvZmZlci51cmxfZGV0YWlscy5ob3NwaXRhbF9pZCB8fCAnJyB9XG5cbiAgICAgICAgICAgIHNwZWNpYWxpdHkudHlwZSA9ICdwcm9jZWR1cmVzJ1xuICAgICAgICAgICAgc3BlY2lhbGl0eS5pZCA9IFtdXG5cbiAgICAgICAgICAgIGxldCBzcGVjaWFsaXR5SWRBcnJheSA9IG9mZmVyLnVybF9kZXRhaWxzLnByb2NlZHVyZV9pZHMuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGlkIGluIHNwZWNpYWxpdHlJZEFycmF5KSB7XG4gICAgICAgICAgICAgICAgc3BlY2lhbGl0eS5pZC5wdXNoKHBhcnNlSW50KHNwZWNpYWxpdHlJZEFycmF5W2lkXSkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlT1BEQ3JpdGVyaWEoJ3Byb2NlZHVyZXMnLCBzcGVjaWFsaXR5LCB0cnVlLCBmaWx0ZXJzKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9vcGQvc2VhcmNocmVzdWx0cycpXG4gICAgICAgICAgICB9LCAxMDApXG5cbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiBvZmZlci5ldmVudF9uYW1lLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6IG9mZmVyLmV2ZW50X25hbWUsICdjbGlja2VkT24nOiBvZmZlci5zbGlkZXJfbG9jYXRpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmIChvZmZlci51cmxfZGV0YWlscyAmJiBvZmZlci51cmxfZGV0YWlscy5wcm9jZWR1cmVfY2F0ZWdvcnlfaWRzICYmIG9mZmVyLnVybF9kZXRhaWxzLnByb2NlZHVyZV9jYXRlZ29yeV9pZHMgIT0gJycpIHtcbiAgICAgICAgICAgIGxldCBzcGVjaWFsaXR5ID0ge31cblxuICAgICAgICAgICAgbGV0IGZpbHRlcnMgPSB7ICdwcmljZVJhbmdlJzogW29mZmVyLnVybF9kZXRhaWxzLm1pbl9mZWVzLCBvZmZlci51cmxfZGV0YWlscy5tYXhfZmVlc10sICdkaXN0YW5jZVJhbmdlJzogW29mZmVyLnVybF9kZXRhaWxzLm1pbl9kaXN0YW5jZSwgb2ZmZXIudXJsX2RldGFpbHMubWF4X2Rpc3RhbmNlXSwgJ3NvcnRfb24nOiBvZmZlci51cmxfZGV0YWlscy5zb3J0X29uIHx8ICcnLCAnaXNfZmVtYWxlJzogb2ZmZXIudXJsX2RldGFpbHMuaXNfZmVtYWxlIHx8IGZhbHNlLCAnaXNfYXZhaWxhYmxlJzogb2ZmZXIudXJsX2RldGFpbHMuaXNfYXZhaWxhYmxlIHx8IGZhbHNlLCAnZG9jdG9yX25hbWUnOiBvZmZlci51cmxfZGV0YWlscy5kb2N0b3JfbmFtZSB8fCAnJywgJ2hvc3BpdGFsX25hbWUnOiBvZmZlci51cmxfZGV0YWlscy5ob3NwaXRhbF9uYW1lIHx8ICcnLCAnaG9zcGl0YWxfaWQnOiBvZmZlci51cmxfZGV0YWlscy5ob3NwaXRhbF9pZCB8fCAnJyB9XG5cbiAgICAgICAgICAgIHNwZWNpYWxpdHkudHlwZSA9ICdwcm9jZWR1cmVzX2NhdGVnb3J5J1xuICAgICAgICAgICAgc3BlY2lhbGl0eS5pZCA9IFtdXG5cbiAgICAgICAgICAgIGxldCBzcGVjaWFsaXR5SWRBcnJheSA9IG9mZmVyLnVybF9kZXRhaWxzLnByb2NlZHVyZV9jYXRlZ29yeV9pZHMuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGlkIGluIHNwZWNpYWxpdHlJZEFycmF5KSB7XG4gICAgICAgICAgICAgICAgc3BlY2lhbGl0eS5pZC5wdXNoKHBhcnNlSW50KHNwZWNpYWxpdHlJZEFycmF5W2lkXSkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlT1BEQ3JpdGVyaWEoJ3Byb2NlZHVyZXNfY2F0ZWdvcnknLCBzcGVjaWFsaXR5LCB0cnVlLCBmaWx0ZXJzKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9vcGQvc2VhcmNocmVzdWx0cycpXG4gICAgICAgICAgICB9LCAxMDApXG5cbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiBvZmZlci5ldmVudF9uYW1lLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6IG9mZmVyLmV2ZW50X25hbWUsICdjbGlja2VkT24nOiBvZmZlci5zbGlkZXJfbG9jYXRpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmIChvZmZlci51cmxfZGV0YWlscyAmJiBvZmZlci51cmxfZGV0YWlscy5jb25kaXRpb25zICYmIG9mZmVyLnVybF9kZXRhaWxzLmNvbmRpdGlvbnMgIT0gJycpIHtcbiAgICAgICAgICAgIGxldCBzcGVjaWFsaXR5ID0ge31cblxuICAgICAgICAgICAgbGV0IGZpbHRlcnMgPSB7ICdwcmljZVJhbmdlJzogW29mZmVyLnVybF9kZXRhaWxzLm1pbl9mZWVzLCBvZmZlci51cmxfZGV0YWlscy5tYXhfZmVlc10sICdkaXN0YW5jZVJhbmdlJzogW29mZmVyLnVybF9kZXRhaWxzLm1pbl9kaXN0YW5jZSwgb2ZmZXIudXJsX2RldGFpbHMubWF4X2Rpc3RhbmNlXSwgJ3NvcnRfb24nOiBvZmZlci51cmxfZGV0YWlscy5zb3J0X29uIHx8ICcnLCAnaXNfZmVtYWxlJzogb2ZmZXIudXJsX2RldGFpbHMuaXNfZmVtYWxlIHx8IGZhbHNlLCAnaXNfYXZhaWxhYmxlJzogb2ZmZXIudXJsX2RldGFpbHMuaXNfYXZhaWxhYmxlIHx8IGZhbHNlLCAnZG9jdG9yX25hbWUnOiBvZmZlci51cmxfZGV0YWlscy5kb2N0b3JfbmFtZSB8fCAnJywgJ2hvc3BpdGFsX25hbWUnOiBvZmZlci51cmxfZGV0YWlscy5ob3NwaXRhbF9uYW1lIHx8ICcnLCAnaG9zcGl0YWxfaWQnOiBvZmZlci51cmxfZGV0YWlscy5ob3NwaXRhbF9pZCB8fCAnJyB9XG5cbiAgICAgICAgICAgIHNwZWNpYWxpdHkudHlwZSA9ICdjb25kaXRpb24nXG4gICAgICAgICAgICBzcGVjaWFsaXR5LmlkID0gW11cblxuICAgICAgICAgICAgbGV0IHNwZWNpYWxpdHlJZEFycmF5ID0gb2ZmZXIudXJsX2RldGFpbHMuY29uZGl0aW9ucy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgZm9yIChsZXQgaWQgaW4gc3BlY2lhbGl0eUlkQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBzcGVjaWFsaXR5LmlkLnB1c2gocGFyc2VJbnQoc3BlY2lhbGl0eUlkQXJyYXlbaWRdKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVPUERDcml0ZXJpYSgnY29uZGl0aW9uJywgc3BlY2lhbGl0eSwgdHJ1ZSwgZmlsdGVycylcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvb3BkL3NlYXJjaHJlc3VsdHMnKVxuICAgICAgICAgICAgfSwgMTAwKVxuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogb2ZmZXIuZXZlbnRfbmFtZSwgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiBvZmZlci5ldmVudF9uYW1lLCAnY2xpY2tlZE9uJzogb2ZmZXIuc2xpZGVyX2xvY2F0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZiAob2ZmZXIudXJsKSB7XG4gICAgICAgICAgICBpZiAob2ZmZXIudXJsLnN0YXJ0c1dpdGgoJ2h0dHAnKSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKG9mZmVyLnVybCwgJ19ibGFuaycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChvZmZlci51cmwpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiBvZmZlci5ldmVudF9uYW1lLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6IG9mZmVyLmV2ZW50X25hbWUsICdjbGlja2VkT24nOiBvZmZlci5zbGlkZXJfbG9jYXRpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuXG4gICAgICAgIGxldCBzZWxlY3RlZExvY2F0aW9uID0gJydcbiAgICAgICAgbGV0IGxhdCA9IDI4LjY0NDgwMFxuICAgICAgICBsZXQgbG9uZyA9IDc3LjIxNjcyMVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICBzZWxlY3RlZExvY2F0aW9uID0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uO1xuICAgICAgICAgICAgbGF0ID0gc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sYXRcbiAgICAgICAgICAgIGxvbmcgPSBzZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBsYXQgPT09ICdmdW5jdGlvbicpIGxhdCA9IGxhdCgpXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxvbmcgPT09ICdmdW5jdGlvbicpIGxvbmcgPSBsb25nKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0T2ZmZXJMaXN0KGxhdCwgbG9uZyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogJyNmZmYnIH19PlxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIHNob3dTZWFyY2g9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIHBhcmVudC1zZWN0aW9uIGJvb2stYXBwb2ludG1lbnQtc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub2ZmZXJMaXN0ICYmIHRoaXMucHJvcHMub2ZmZXJMaXN0LmZpbHRlcih4ID0+IHguc2xpZGVyX2xvY2F0aW9uID09PSAnb2ZmZXJzX3BhZ2UnKS5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNzAwIG9mZmVyLWhlYWRpbmcgbXJ0LTIwXCI+T2ZmZXJzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNzAwIG9mZmVyLWhlYWRpbmcgbXJ0LTIwXCI+Tm8gb2ZmZXJzIGF2YWlsYWJsZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub2ZmZXJMaXN0ICYmIHRoaXMucHJvcHMub2ZmZXJMaXN0LmZpbHRlcih4ID0+IHguc2xpZGVyX2xvY2F0aW9uID09PSAnb2ZmZXJzX3BhZ2UnKS5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vZmZlckxpc3QuZmlsdGVyKHggPT4geC5zbGlkZXJfbG9jYXRpb24gPT09ICdvZmZlcnNfcGFnZScpLm1hcCgob2ZmZXIsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJvZmZlci1kaXZcIiBrZXk9e2l9IG9uQ2xpY2s9eygpID0+IHRoaXMubmF2aWdhdGVUbyhvZmZlcil9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e29mZmVyLmltYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0QmFyIG5vQ2hhdEJ1dHRvbj17dHJ1ZX0gbXNnVGVtcGxhdGU9XCJnb2xkX2dlbmVyYWxfdGVtcGxhdGVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICAgICAgPEZpeGVkTW9iaWxlRm9vdGVyIG9mZmVyc1BhZ2U9e3RydWV9IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9mZmVyc1ZpZXciLCJpbXBvcnQgT2ZmZXJzVmlldyBmcm9tICcuL09mZmVyc1ZpZXcnXG5cbmV4cG9ydCBkZWZhdWx0IE9mZmVyc1ZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBPZmZlcnNWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9vZmZlcnMnO1xuaW1wb3J0IHsgdG9nZ2xlT1BEQ3JpdGVyaWEsIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhLCBnZXRPZmZlckxpc3QsIHNlbGVjdFNlYXJjaFR5cGUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuXG5jbGFzcyBPZmZlcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxPZmZlcnNWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBvZmZlckxpc3RcbiAgICB9ID0gc3RhdGUuVVNFUlxuXG4gICAgY29uc3Qge1xuICAgICAgICBzZWxlY3RlZExvY2F0aW9uXG4gICAgfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9MQUJTXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvZmZlckxpc3QsXG4gICAgICAgIHNlbGVjdGVkTG9jYXRpb25cbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRvZ2dsZU9QRENyaXRlcmlhOiAodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkLCBmaWx0ZXJzKSA9PiBkaXNwYXRjaCh0b2dnbGVPUERDcml0ZXJpYSh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQsIGZpbHRlcnMpKSxcbiAgICAgICAgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWE6ICh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQsIGZpbHRlcnMpID0+IGRpc3BhdGNoKHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCwgZmlsdGVycykpLFxuICAgICAgICBzZWxlY3RTZWFyY2hUeXBlOiAodHlwZSkgPT4gZGlzcGF0Y2goc2VsZWN0U2VhcmNoVHlwZSh0eXBlKSksXG4gICAgICAgIGdldE9mZmVyTGlzdDogKGxhdCwgbG9uZykgPT4gZGlzcGF0Y2goZ2V0T2ZmZXJMaXN0KGxhdCwgbG9uZykpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShPZmZlcnMpOyIsIi8vIC5kaXJuYW1lLCAuYmFzZW5hbWUsIGFuZCAuZXh0bmFtZSBtZXRob2RzIGFyZSBleHRyYWN0ZWQgZnJvbSBOb2RlLmpzIHY4LjExLjEsXG4vLyBiYWNrcG9ydGVkIGFuZCB0cmFuc3BsaXRlZCB3aXRoIEJhYmVsLCB3aXRoIGJhY2t3YXJkcy1jb21wYXQgZml4ZXNcblxuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIHJlc29sdmVzIC4gYW5kIC4uIGVsZW1lbnRzIGluIGEgcGF0aCBhcnJheSB3aXRoIGRpcmVjdG9yeSBuYW1lcyB0aGVyZVxuLy8gbXVzdCBiZSBubyBzbGFzaGVzLCBlbXB0eSBlbGVtZW50cywgb3IgZGV2aWNlIG5hbWVzIChjOlxcKSBpbiB0aGUgYXJyYXlcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkocGFydHMsIGFsbG93QWJvdmVSb290KSB7XG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsYXN0ID0gcGFydHNbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKGFsbG93QWJvdmVSb290KSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBwYXJ0cy51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xufTtcblxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKSxcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBzdWJzdHIocGF0aCwgLTEpID09PSAnLyc7XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XG4gICAgcGF0aCA9ICcuJztcbiAgfVxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XG4gICAgcGF0aCArPSAnLyc7XG4gIH1cblxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuam9pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gZXhwb3J0cy5ub3JtYWxpemUoZmlsdGVyKHBhdGhzLCBmdW5jdGlvbihwLCBpbmRleCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9KS5qb2luKCcvJykpO1xufTtcblxuXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gIGZyb20gPSBleHBvcnRzLnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICB0byA9IGV4cG9ydHMucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuXG4gIGZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICBpZiAoYXJyW3N0YXJ0XSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XG4gICAgICBpZiAoYXJyW2VuZF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG5cbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgdmFyIHRvUGFydHMgPSB0cmltKHRvLnNwbGl0KCcvJykpO1xuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICB9XG5cbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcblxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufTtcblxuZXhwb3J0cy5zZXAgPSAnLyc7XG5leHBvcnRzLmRlbGltaXRlciA9ICc6JztcblxuZXhwb3J0cy5kaXJuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gJy4nO1xuICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdCgwKTtcbiAgdmFyIGhhc1Jvb3QgPSBjb2RlID09PSA0NyAvKi8qLztcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAxOyAtLWkpIHtcbiAgICBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIGVuZCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvclxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiBoYXNSb290ID8gJy8nIDogJy4nO1xuICBpZiAoaGFzUm9vdCAmJiBlbmQgPT09IDEpIHtcbiAgICAvLyByZXR1cm4gJy8vJztcbiAgICAvLyBCYWNrd2FyZHMtY29tcGF0IGZpeDpcbiAgICByZXR1cm4gJy8nO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKDAsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBiYXNlbmFtZShwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG5cbiAgdmFyIHN0YXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgdmFyIGk7XG5cbiAgZm9yIChpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIGlmIChwYXRoLmNoYXJDb2RlQXQoaSkgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gcGF0aCBjb21wb25lbnRcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiAnJztcbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnQsIGVuZCk7XG59XG5cbi8vIFVzZXMgYSBtaXhlZCBhcHByb2FjaCBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHksIGFzIGV4dCBiZWhhdmlvciBjaGFuZ2VkXG4vLyBpbiBuZXcgTm9kZS5qcyB2ZXJzaW9ucywgc28gb25seSBiYXNlbmFtZSgpIGFib3ZlIGlzIGJhY2twb3J0ZWQgaGVyZVxuZXhwb3J0cy5iYXNlbmFtZSA9IGZ1bmN0aW9uIChwYXRoLCBleHQpIHtcbiAgdmFyIGYgPSBiYXNlbmFtZShwYXRoKTtcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gZjtcbn07XG5cbmV4cG9ydHMuZXh0bmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIHZhciBzdGFydERvdCA9IC0xO1xuICB2YXIgc3RhcnRQYXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgLy8gVHJhY2sgdGhlIHN0YXRlIG9mIGNoYXJhY3RlcnMgKGlmIGFueSkgd2Ugc2VlIGJlZm9yZSBvdXIgZmlyc3QgZG90IGFuZFxuICAvLyBhZnRlciBhbnkgcGF0aCBzZXBhcmF0b3Igd2UgZmluZFxuICB2YXIgcHJlRG90U3RhdGUgPSAwO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydFBhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gZXh0ZW5zaW9uXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gNDYgLyouKi8pIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgZG90LCBtYXJrIGl0IGFzIHRoZSBzdGFydCBvZiBvdXIgZXh0ZW5zaW9uXG4gICAgICAgIGlmIChzdGFydERvdCA9PT0gLTEpXG4gICAgICAgICAgc3RhcnREb3QgPSBpO1xuICAgICAgICBlbHNlIGlmIChwcmVEb3RTdGF0ZSAhPT0gMSlcbiAgICAgICAgICBwcmVEb3RTdGF0ZSA9IDE7XG4gICAgfSBlbHNlIGlmIChzdGFydERvdCAhPT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgYW5kIG5vbi1wYXRoIHNlcGFyYXRvciBiZWZvcmUgb3VyIGRvdCwgc28gd2Ugc2hvdWxkXG4gICAgICAvLyBoYXZlIGEgZ29vZCBjaGFuY2UgYXQgaGF2aW5nIGEgbm9uLWVtcHR5IGV4dGVuc2lvblxuICAgICAgcHJlRG90U3RhdGUgPSAtMTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhcnREb3QgPT09IC0xIHx8IGVuZCA9PT0gLTEgfHxcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgY2hhcmFjdGVyIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgZG90XG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMCB8fFxuICAgICAgLy8gVGhlIChyaWdodC1tb3N0KSB0cmltbWVkIHBhdGggY29tcG9uZW50IGlzIGV4YWN0bHkgJy4uJ1xuICAgICAgcHJlRG90U3RhdGUgPT09IDEgJiYgc3RhcnREb3QgPT09IGVuZCAtIDEgJiYgc3RhcnREb3QgPT09IHN0YXJ0UGFydCArIDEpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnREb3QsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBmaWx0ZXIgKHhzLCBmKSB7XG4gICAgaWYgKHhzLmZpbHRlcikgcmV0dXJuIHhzLmZpbHRlcihmKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZih4c1tpXSwgaSwgeHMpKSByZXMucHVzaCh4c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFN0cmluZy5wcm90b3R5cGUuc3Vic3RyIC0gbmVnYXRpdmUgaW5kZXggZG9uJ3Qgd29yayBpbiBJRThcbnZhciBzdWJzdHIgPSAnYWInLnN1YnN0cigtMSkgPT09ICdiJ1xuICAgID8gZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikgeyByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKSB9XG4gICAgOiBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gc3RyLmxlbmd0aCArIHN0YXJ0O1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKTtcbiAgICB9XG47XG4iLCJpbXBvcnQgX01lbW9yeVJvdXRlciBmcm9tIFwiLi9NZW1vcnlSb3V0ZXJcIjtcbmV4cG9ydCB7IF9NZW1vcnlSb3V0ZXIgYXMgTWVtb3J5Um91dGVyIH07XG5pbXBvcnQgX1Byb21wdCBmcm9tIFwiLi9Qcm9tcHRcIjtcbmV4cG9ydCB7IF9Qcm9tcHQgYXMgUHJvbXB0IH07XG5pbXBvcnQgX1JlZGlyZWN0IGZyb20gXCIuL1JlZGlyZWN0XCI7XG5leHBvcnQgeyBfUmVkaXJlY3QgYXMgUmVkaXJlY3QgfTtcbmltcG9ydCBfUm91dGUgZnJvbSBcIi4vUm91dGVcIjtcbmV4cG9ydCB7IF9Sb3V0ZSBhcyBSb3V0ZSB9O1xuaW1wb3J0IF9Sb3V0ZXIgZnJvbSBcIi4vUm91dGVyXCI7XG5leHBvcnQgeyBfUm91dGVyIGFzIFJvdXRlciB9O1xuaW1wb3J0IF9TdGF0aWNSb3V0ZXIgZnJvbSBcIi4vU3RhdGljUm91dGVyXCI7XG5leHBvcnQgeyBfU3RhdGljUm91dGVyIGFzIFN0YXRpY1JvdXRlciB9O1xuaW1wb3J0IF9Td2l0Y2ggZnJvbSBcIi4vU3dpdGNoXCI7XG5leHBvcnQgeyBfU3dpdGNoIGFzIFN3aXRjaCB9O1xuaW1wb3J0IF9nZW5lcmF0ZVBhdGggZnJvbSBcIi4vZ2VuZXJhdGVQYXRoXCI7XG5leHBvcnQgeyBfZ2VuZXJhdGVQYXRoIGFzIGdlbmVyYXRlUGF0aCB9O1xuaW1wb3J0IF9tYXRjaFBhdGggZnJvbSBcIi4vbWF0Y2hQYXRoXCI7XG5leHBvcnQgeyBfbWF0Y2hQYXRoIGFzIG1hdGNoUGF0aCB9O1xuaW1wb3J0IF93aXRoUm91dGVyIGZyb20gXCIuL3dpdGhSb3V0ZXJcIjtcbmV4cG9ydCB7IF93aXRoUm91dGVyIGFzIHdpdGhSb3V0ZXIgfTsiXSwic291cmNlUm9vdCI6IiJ9