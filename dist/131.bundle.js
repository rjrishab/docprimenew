(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[131],{

/***/ "./dev/js/containers/commons/ComparePackages.js":
/*!******************************************************!*\
  !*** ./dev/js/containers/commons/ComparePackages.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _LeftBar = __webpack_require__(/*! ../../components/commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../components/commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../components/commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _footer = __webpack_require__(/*! ../../components/commons/Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Compare = function (_React$Component) {
    _inherits(Compare, _React$Component);

    function Compare() {
        _classCallCheck(this, Compare);

        return _possibleConstructorReturn(this, (Compare.__proto__ || Object.getPrototypeOf(Compare)).apply(this, arguments));
    }

    _createClass(Compare, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'profile-body-wrap', style: { paddingBottom: 54 } },
                _react2.default.createElement(
                    'div',
                    { className: 'careHeaderBar' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'care-logo-container' },
                            _react2.default.createElement('img', { className: 'careBackIco', src: "/assets" + "/img/careleft-arrow.svg" }),
                            _react2.default.createElement('img', { className: 'careLogiImg', src: "/assets" + "/img/logo-care-white.png" })
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'careSubHeader' },
                    _react2.default.createElement('img', { className: 'careSubImg', src: "/assets" + "/img/shape.png" }),
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'careTextContSc' },
                            _react2.default.createElement('img', { className: 'caresubTxt', src: "/assets" + "/img/careText.png" }),
                            _react2.default.createElement('img', { className: 'caresubsmile', src: "/assets" + "/img/dpsmile.png" })
                        )
                    )
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'container container-top-margin', style: { marginTop: '120px' } },
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
                                    { className: 'careMainContainer mrb-15' },
                                    _react2.default.createElement(
                                        'h5',
                                        { className: 'carePlanHeading' },
                                        'Choose a plan that\u2019s right for your loved ones.'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row no-gutters' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-4' },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'carePlans' },
                                                'Silver'
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'careComparePanel' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'carePlanPrice' },
                                                    '\u20B9 499/Yr.'
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'carePlanPriceCut' },
                                                    '999/Yr.'
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'btn-bgwhite' },
                                                    _react2.default.createElement(
                                                        'button',
                                                        null,
                                                        'Buy Now'
                                                    )
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-4' },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'carePlans' },
                                                'Gold'
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'careComparePanel' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'carePlanPrice care-leftrightborder' },
                                                    '\u20B9 499/Yr.'
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'carePlanPriceCut' },
                                                    '999/Yr.'
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'btn-bgwhite' },
                                                    _react2.default.createElement(
                                                        'button',
                                                        null,
                                                        'Buy Now'
                                                    )
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-4' },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'carePlans' },
                                                'Premium'
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'careComparePanel' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'carePlanPrice' },
                                                    '\u20B9 499/Yr.'
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'carePlanPriceCut' },
                                                    '999/Yr.'
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'btn-bgwhite' },
                                                    _react2.default.createElement(
                                                        'button',
                                                        null,
                                                        'Buy Now'
                                                    )
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'careCheckContainers' },
                                        _react2.default.createElement(
                                            'h4',
                                            { className: 'carechkHeading' },
                                            'Free Unlimited Online Consultation '
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'carechksubHeading' },
                                            'Anytime, Anywhere!'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'checkCrdcont' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'checkCrdimgcont no-gutters row' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'col-4' },
                                                    ' ',
                                                    _react2.default.createElement('img', { className: 'checkcrdImg', src: "/assets" + "/img/checkedgreen.svg" })
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'col-4 care-leftrightborder' },
                                                    ' ',
                                                    _react2.default.createElement('img', { className: 'checkcrdImg', src: "/assets" + "/img/checkedgreen.svg" })
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'col-4' },
                                                    ' ',
                                                    _react2.default.createElement('img', { className: 'crosscheckcrdImg', src: "/assets" + "/img/wrongcopy.svg" })
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'careCheckContainers' },
                                        _react2.default.createElement(
                                            'h4',
                                            { className: 'carechkHeading' },
                                            'Free Unlimited Online Consultation '
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'carechksubHeading' },
                                            'Anytime, Anywhere!'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'checkCrdcont' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'checkCrdimgcont no-gutters row' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'col-4' },
                                                    ' ',
                                                    _react2.default.createElement('img', { className: 'checkcrdImg', src: "/assets" + "/img/checkedgreen.svg" })
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'col-4 care-leftrightborder' },
                                                    ' ',
                                                    _react2.default.createElement('img', { className: 'checkcrdImg', src: "/assets" + "/img/checkedgreen.svg" })
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'col-4' },
                                                    ' ',
                                                    _react2.default.createElement('img', { className: 'crosscheckcrdImg', src: "/assets" + "/img/wrongcopy.svg" })
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'careCheckContainers' },
                                        _react2.default.createElement(
                                            'h4',
                                            { className: 'carechkHeading' },
                                            'Free Unlimited Online Consultation '
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'carechksubHeading' },
                                            'Anytime, Anywhere!'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'checkCrdcont' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'checkCrdimgcont no-gutters row', style: { borderBottom: 'none' } },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'col-4' },
                                                    ' ',
                                                    _react2.default.createElement('img', { className: 'crosscheckcrdImg', src: "/assets" + "/img/wrongcopy.svg" })
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'col-4' },
                                                    ' ',
                                                    _react2.default.createElement(
                                                        'span',
                                                        { className: 'careTestYear' },
                                                        ' 1 Test/Yr.'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'col-4' },
                                                    ' ',
                                                    _react2.default.createElement(
                                                        'span',
                                                        { className: 'careTestYear' },
                                                        ' 2 Test/Yr.'
                                                    )
                                                )
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'widget mr-60' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'widget-content' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'careMemberContainer' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'careMembrLogo' },
                                                _react2.default.createElement('img', { src: "/assets" + "/img/logoornage.png" })
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'careMembrtxt' },
                                                _react2.default.createElement(
                                                    'h5',
                                                    null,
                                                    'Docprime Care '
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'membership'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'row' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-6' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'carePara' },
                                                    _react2.default.createElement('img', { src: "/assets" + "/img/memsecur.png" }),
                                                    'Valid for :'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-6 text-right' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'careSUbpara' },
                                                    '1 year'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-6' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'carePara' },
                                                    _react2.default.createElement('img', { src: "/assets" + "/img/memuser.png" }),
                                                    'Member Name :'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-6 text-right' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'careSUbpara' },
                                                    'Tarun Sehgal'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-6' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'carePara' },
                                                    _react2.default.createElement('img', { src: "/assets" + "/img/memcall.png" }),
                                                    'Mobile no: '
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-6 text-right' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'careSUbpara' },
                                                    '9990641820'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'careListingWithSideline' },
                                            _react2.default.createElement(
                                                'ul',
                                                { className: 'UlcareListingWithSide' },
                                                _react2.default.createElement(
                                                    'li',
                                                    { className: 'careListiLi' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'careListin' },
                                                        'Free Unlimited Online Consultation '
                                                    ),
                                                    _react2.default.createElement(
                                                        'span',
                                                        null,
                                                        'Anytime, Anywhere!'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    { className: 'careListiLi' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'careListin' },
                                                        'Free Unlimited Online Consultation '
                                                    ),
                                                    _react2.default.createElement(
                                                        'span',
                                                        null,
                                                        'Anytime, Anywhere!'
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'careFinalscreenContainer' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'careDocwithBg' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'careDocwithBglogo' },
                                        _react2.default.createElement('img', { className: 'careLogiImg', src: "/assets" + "/img/logo-care-white.png" })
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'careDecparacong' },
                                        'Congratulations!'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'careDecparasub' },
                                        'Your Docprime care membership is active'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'careDecparadate' },
                                        '10 Oct 2018 - 11 Oct 2018'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'careThankyouContainer' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'careThankyouContainerCard' },
                                    _react2.default.createElement(
                                        'ul',
                                        { className: 'UlcareListingWithSide mt-rmv' },
                                        _react2.default.createElement(
                                            'li',
                                            { className: 'careListiLi' },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'careListin' },
                                                'Free Unlimited Online Consultation '
                                            ),
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                'Anytime, Anywhere!'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            { className: 'careListiLi' },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'careListin' },
                                                'Free Unlimited Online Consultation '
                                            ),
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                'Anytime, Anywhere!'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            { className: 'careListiLi' },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'careListin' },
                                                'Free Unlimited Online Consultation '
                                            ),
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                'Anytime, Anywhere!'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'careThankpara' },
                                        'Thanks for choosing ',
                                        _react2.default.createElement(
                                            'a',
                                            null,
                                            'docprime.com'
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(_RightBar2.default, { className: 'col-md-5 mb-3', msgTemplate: 'gold_general_template' })
                    )
                ),
                _react2.default.createElement(_footer2.default, null)
            );
        }
    }]);

    return Compare;
}(_react2.default.Component);

exports.default = Compare;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9jb21tb25zL0NvbXBhcmVQYWNrYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGF0aC1icm93c2VyaWZ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQ29tcGFyZSIsInBhZGRpbmdCb3R0b20iLCJBU1NFVFNfQkFTRV9VUkwiLCJtYXJnaW5Ub3AiLCJib3JkZXJCb3R0b20iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR01BLE87Ozs7Ozs7Ozs7O2lDQUVPOztBQUVMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLG1CQUFmLEVBQW1DLE9BQU8sRUFBRUMsZUFBZSxFQUFqQixFQUExQztBQUVJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGVBQWY7QUFDSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxXQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFLLFdBQVUscUJBQWY7QUFDSSxtRUFBSyxXQUFVLGFBQWYsRUFBNkIsS0FBS0MsU0FBZUEsR0FBRyx5QkFBcEQsR0FESjtBQUVJLG1FQUFLLFdBQVUsYUFBZixFQUE2QixLQUFLQSxTQUFlQSxHQUFHLDBCQUFwRDtBQUZKO0FBREo7QUFESixpQkFGSjtBQVVJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGVBQWY7QUFDSSwyREFBSyxXQUFVLFlBQWYsRUFBNEIsS0FBS0EsU0FBZUEsR0FBRyxnQkFBbkQsR0FESjtBQUVJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFdBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxnQkFBZjtBQUNJLG1FQUFLLFdBQVUsWUFBZixFQUE0QixLQUFLQSxTQUFlQSxHQUFHLG1CQUFuRCxHQURKO0FBRUks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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUNGO0FBQ1Y7QUFDRjtBQUNNO0FBQ0Y7QUFDSjtBQUNGO0FBQ0k7QUFDRjtBQUNjO0FBQ0Y7QUFDVjtBQUNGO0FBQ2M7QUFDRjtBQUNKO0FBQ0Y7QUFDSSIsImZpbGUiOiIxMzEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL1JpZ2h0QmFyJ1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvSG9tZS9mb290ZXInXG5cblxuY2xhc3MgQ29tcGFyZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiA1NCB9fT5cbiAgICAgICAgICAgICAgICB7LyogPFByb2ZpbGVIZWFkZXIgLz4gKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJlSGVhZGVyQmFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmUtbG9nby1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmVCYWNrSWNvXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2FyZWxlZnQtYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJlTG9naUltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2xvZ28tY2FyZS13aGl0ZS5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmVTdWJIZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJlU3ViSW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc2hhcGUucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmVUZXh0Q29udFNjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJlc3ViVHh0XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2FyZVRleHQucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJlc3Vic21pbGVcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9kcHNtaWxlLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXItdG9wLW1hcmdpblwiIHN0eWxlPXt7IG1hcmdpblRvcDogJzEyMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGVmdEJhciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTcgY2VudGVyLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZU1haW5Db250YWluZXIgbXJiLTE1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZVBsYW5IZWFkaW5nXCI+Q2hvb3NlIGEgcGxhbiB0aGF04oCZcyByaWdodCBmb3IgeW91ciBsb3ZlZCBvbmVzLjwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJlUGxhbnNcIj5TaWx2ZXI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZUNvbXBhcmVQYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZVBsYW5QcmljZVwiPuKCuSA0OTkvWXIuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZVBsYW5QcmljZUN1dFwiPjk5OS9Zci48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1iZ3doaXRlXCI+PGJ1dHRvbj5CdXkgTm93PC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZVBsYW5zXCI+R29sZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJlQ29tcGFyZVBhbmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJlUGxhblByaWNlIGNhcmUtbGVmdHJpZ2h0Ym9yZGVyXCI+4oK5IDQ5OS9Zci48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJlUGxhblByaWNlQ3V0XCI+OTk5L1lyLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWJnd2hpdGVcIj48YnV0dG9uPkJ1eSBOb3c8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJlUGxhbnNcIj5QcmVtaXVtPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmVDb21wYXJlUGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmVQbGFuUHJpY2VcIj7igrkgNDk5L1lyLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmVQbGFuUHJpY2VDdXRcIj45OTkvWXIuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tYmd3aGl0ZVwiPjxidXR0b24+QnV5IE5vdzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJlQ2hlY2tDb250YWluZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmVjaGtIZWFkaW5nXCI+RnJlZSBVbmxpbWl0ZWQgT25saW5lIENvbnN1bHRhdGlvbiA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmVjaGtzdWJIZWFkaW5nXCI+QW55dGltZSwgQW55d2hlcmUhPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tDcmRjb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tDcmRpbWdjb250IG5vLWd1dHRlcnMgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+IDxpbWcgY2xhc3NOYW1lPVwiY2hlY2tjcmRJbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jaGVja2VkZ3JlZW4uc3ZnXCJ9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00IGNhcmUtbGVmdHJpZ2h0Ym9yZGVyXCI+IDxpbWcgY2xhc3NOYW1lPVwiY2hlY2tjcmRJbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jaGVja2VkZ3JlZW4uc3ZnXCJ9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+IDxpbWcgY2xhc3NOYW1lPVwiY3Jvc3NjaGVja2NyZEltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3dyb25nY29weS5zdmdcIn0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZUNoZWNrQ29udGFpbmVyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJlY2hrSGVhZGluZ1wiPkZyZWUgVW5saW1pdGVkIE9ubGluZSBDb25zdWx0YXRpb24gPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJlY2hrc3ViSGVhZGluZ1wiPkFueXRpbWUsIEFueXdoZXJlITwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrQ3JkY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrQ3JkaW1nY29udCBuby1ndXR0ZXJzIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPiA8aW1nIGNsYXNzTmFtZT1cImNoZWNrY3JkSW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2hlY2tlZGdyZWVuLnN2Z1wifSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNCBjYXJlLWxlZnRyaWdodGJvcmRlclwiPiA8aW1nIGNsYXNzTmFtZT1cImNoZWNrY3JkSW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2hlY2tlZGdyZWVuLnN2Z1wifSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPiA8aW1nIGNsYXNzTmFtZT1cImNyb3NzY2hlY2tjcmRJbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy93cm9uZ2NvcHkuc3ZnXCJ9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmVDaGVja0NvbnRhaW5lcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZWNoa0hlYWRpbmdcIj5GcmVlIFVubGltaXRlZCBPbmxpbmUgQ29uc3VsdGF0aW9uIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZWNoa3N1YkhlYWRpbmdcIj5Bbnl0aW1lLCBBbnl3aGVyZSE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja0NyZGNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja0NyZGltZ2NvbnQgbm8tZ3V0dGVycyByb3dcIiBzdHlsZT17eyBib3JkZXJCb3R0b206ICdub25lJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj4gPGltZyBjbGFzc05hbWU9XCJjcm9zc2NoZWNrY3JkSW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvd3Jvbmdjb3B5LnN2Z1wifSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPiA8c3BhbiBjbGFzc05hbWU9XCJjYXJlVGVzdFllYXJcIj4gMSBUZXN0L1lyLjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj4gPHNwYW4gY2xhc3NOYW1lPVwiY2FyZVRlc3RZZWFyXCI+IDIgVGVzdC9Zci48L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtci02MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZU1lbWJlckNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmVNZW1ickxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbG9nb29ybmFnZS5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZU1lbWJydHh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+RG9jcHJpbWUgQ2FyZSA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+bWVtYmVyc2hpcDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZVBhcmFcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL21lbXNlY3VyLnBuZ1wifSAvPlZhbGlkIGZvciA6PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJlU1VicGFyYVwiPjEgeWVhcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmVQYXJhXCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9tZW11c2VyLnBuZ1wifSAvPk1lbWJlciBOYW1lIDo8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmVTVWJwYXJhXCI+VGFydW4gU2VoZ2FsPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZVBhcmFcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL21lbWNhbGwucG5nXCJ9IC8+TW9iaWxlIG5vOiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmVTVWJwYXJhXCI+OTk5MDY0MTgyMDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJlTGlzdGluZ1dpdGhTaWRlbGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiVWxjYXJlTGlzdGluZ1dpdGhTaWRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2FyZUxpc3RpTGlcIj48cCBjbGFzc05hbWU9XCJjYXJlTGlzdGluXCI+RnJlZSBVbmxpbWl0ZWQgT25saW5lIENvbnN1bHRhdGlvbiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QW55dGltZSwgQW55d2hlcmUhPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjYXJlTGlzdGlMaVwiPjxwIGNsYXNzTmFtZT1cImNhcmVMaXN0aW5cIj5GcmVlIFVubGltaXRlZCBPbmxpbmUgQ29uc3VsdGF0aW9uIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Bbnl0aW1lLCBBbnl3aGVyZSE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZUZpbmFsc2NyZWVuQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZURvY3dpdGhCZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJlRG9jd2l0aEJnbG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZUxvZ2lJbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9sb2dvLWNhcmUtd2hpdGUucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmVEZWNwYXJhY29uZ1wiPkNvbmdyYXR1bGF0aW9ucyE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJlRGVjcGFyYXN1YlwiPllvdXIgRG9jcHJpbWUgY2FyZSBtZW1iZXJzaGlwIGlzIGFjdGl2ZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmVEZWNwYXJhZGF0ZVwiPjEwIE9jdCAyMDE4IC0gMTEgT2N0IDIwMTg8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZVRoYW5reW91Q29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZVRoYW5reW91Q29udGFpbmVyQ2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIlVsY2FyZUxpc3RpbmdXaXRoU2lkZSBtdC1ybXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2FyZUxpc3RpTGlcIj48cCBjbGFzc05hbWU9XCJjYXJlTGlzdGluXCI+RnJlZSBVbmxpbWl0ZWQgT25saW5lIENvbnN1bHRhdGlvbiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFueXRpbWUsIEFueXdoZXJlITwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjYXJlTGlzdGlMaVwiPjxwIGNsYXNzTmFtZT1cImNhcmVMaXN0aW5cIj5GcmVlIFVubGltaXRlZCBPbmxpbmUgQ29uc3VsdGF0aW9uIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QW55dGltZSwgQW55d2hlcmUhPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNhcmVMaXN0aUxpXCI+PHAgY2xhc3NOYW1lPVwiY2FyZUxpc3RpblwiPkZyZWUgVW5saW1pdGVkIE9ubGluZSBDb25zdWx0YXRpb24gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Bbnl0aW1lLCBBbnl3aGVyZSE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJlVGhhbmtwYXJhXCI+VGhhbmtzIGZvciBjaG9vc2luZyA8YT5kb2NwcmltZS5jb208L2E+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0QmFyIGNsYXNzTmFtZT1cImNvbC1tZC01IG1iLTNcIiBtc2dUZW1wbGF0ZT1cImdvbGRfZ2VuZXJhbF90ZW1wbGF0ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wYXJlIiwiLy8gLmRpcm5hbWUsIC5iYXNlbmFtZSwgYW5kIC5leHRuYW1lIG1ldGhvZHMgYXJlIGV4dHJhY3RlZCBmcm9tIE5vZGUuanMgdjguMTEuMSxcbi8vIGJhY2twb3J0ZWQgYW5kIHRyYW5zcGxpdGVkIHdpdGggQmFiZWwsIHdpdGggYmFja3dhcmRzLWNvbXBhdCBmaXhlc1xuXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXG4vLyBtdXN0IGJlIG5vIHNsYXNoZXMsIGVtcHR5IGVsZW1lbnRzLCBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxuLy8gKHNvIGFsc28gbm8gbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlcyAtIGl0IGRvZXMgbm90IGRpc3Rpbmd1aXNoXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxhc3QgPSBwYXJ0c1tpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG4vLyBwYXRoLnJlc29sdmUoW2Zyb20gLi4uXSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlc29sdmUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XG4gICAgdmFyIHBhdGggPSAoaSA+PSAwKSA/IGFyZ3VtZW50c1tpXSA6IHByb2Nlc3MuY3dkKCk7XG5cbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcbiAgICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH0gZWxzZSBpZiAoIXBhdGgpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJlc29sdmVkUGF0aCA9IHBhdGggKyAnLycgKyByZXNvbHZlZFBhdGg7XG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGguY2hhckF0KDApID09PSAnLyc7XG4gIH1cblxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCwgYnV0XG4gIC8vIGhhbmRsZSByZWxhdGl2ZSBwYXRocyB0byBiZSBzYWZlIChtaWdodCBoYXBwZW4gd2hlbiBwcm9jZXNzLmN3ZCgpIGZhaWxzKVxuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICByZXNvbHZlZFBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICByZXR1cm4gKChyZXNvbHZlZEFic29sdXRlID8gJy8nIDogJycpICsgcmVzb2x2ZWRQYXRoKSB8fCAnLic7XG59O1xuXG4vLyBwYXRoLm5vcm1hbGl6ZShwYXRoKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHZhciBpc0Fic29sdXRlID0gZXhwb3J0cy5pc0Fic29sdXRlKHBhdGgpLFxuICAgICAgdHJhaWxpbmdTbGFzaCA9IHN1YnN0cihwYXRoLCAtMSkgPT09ICcvJztcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihwYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICBpZiAoIXBhdGggJiYgIWlzQWJzb2x1dGUpIHtcbiAgICBwYXRoID0gJy4nO1xuICB9XG4gIGlmIChwYXRoICYmIHRyYWlsaW5nU2xhc2gpIHtcbiAgICBwYXRoICs9ICcvJztcbiAgfVxuXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5qb2luID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwYXRocyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIHJldHVybiBleHBvcnRzLm5vcm1hbGl6ZShmaWx0ZXIocGF0aHMsIGZ1bmN0aW9uKHAsIGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiBwICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9XG4gICAgcmV0dXJuIHA7XG4gIH0pLmpvaW4oJy8nKSk7XG59O1xuXG5cbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcbiAgZnJvbSA9IGV4cG9ydHMucmVzb2x2ZShmcm9tKS5zdWJzdHIoMSk7XG4gIHRvID0gZXhwb3J0cy5yZXNvbHZlKHRvKS5zdWJzdHIoMSk7XG5cbiAgZnVuY3Rpb24gdHJpbShhcnIpIHtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIGZvciAoOyBzdGFydCA8IGFyci5sZW5ndGg7IHN0YXJ0KyspIHtcbiAgICAgIGlmIChhcnJbc3RhcnRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIGVuZCA9IGFyci5sZW5ndGggLSAxO1xuICAgIGZvciAoOyBlbmQgPj0gMDsgZW5kLS0pIHtcbiAgICAgIGlmIChhcnJbZW5kXSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIFtdO1xuICAgIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSk7XG4gIH1cblxuICB2YXIgZnJvbVBhcnRzID0gdHJpbShmcm9tLnNwbGl0KCcvJykpO1xuICB2YXIgdG9QYXJ0cyA9IHRyaW0odG8uc3BsaXQoJy8nKSk7XG5cbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGZyb21QYXJ0cy5sZW5ndGgsIHRvUGFydHMubGVuZ3RoKTtcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChmcm9tUGFydHNbaV0gIT09IHRvUGFydHNbaV0pIHtcbiAgICAgIHNhbWVQYXJ0c0xlbmd0aCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB2YXIgb3V0cHV0UGFydHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XG4gIH1cblxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xuXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCcvJyk7XG59O1xuXG5leHBvcnRzLnNlcCA9ICcvJztcbmV4cG9ydHMuZGVsaW1pdGVyID0gJzonO1xuXG5leHBvcnRzLmRpcm5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICBpZiAocGF0aC5sZW5ndGggPT09IDApIHJldHVybiAnLic7XG4gIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KDApO1xuICB2YXIgaGFzUm9vdCA9IGNvZGUgPT09IDQ3IC8qLyovO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDE7IC0taSkge1xuICAgIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgZW5kID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuIGhhc1Jvb3QgPyAnLycgOiAnLic7XG4gIGlmIChoYXNSb290ICYmIGVuZCA9PT0gMSkge1xuICAgIC8vIHJldHVybiAnLy8nO1xuICAgIC8vIEJhY2t3YXJkcy1jb21wYXQgZml4OlxuICAgIHJldHVybiAnLyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2UoMCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGJhc2VuYW1lKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcblxuICB2YXIgc3RhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICB2YXIgaTtcblxuICBmb3IgKGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgaWYgKHBhdGguY2hhckNvZGVBdChpKSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBwYXRoIGNvbXBvbmVudFxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuICcnO1xuICByZXR1cm4gcGF0aC5zbGljZShzdGFydCwgZW5kKTtcbn1cblxuLy8gVXNlcyBhIG1peGVkIGFwcHJvYWNoIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSwgYXMgZXh0IGJlaGF2aW9yIGNoYW5nZWRcbi8vIGluIG5ldyBOb2RlLmpzIHZlcnNpb25zLCBzbyBvbmx5IGJhc2VuYW1lKCkgYWJvdmUgaXMgYmFja3BvcnRlZCBoZXJlXG5leHBvcnRzLmJhc2VuYW1lID0gZnVuY3Rpb24gKHBhdGgsIGV4dCkge1xuICB2YXIgZiA9IGJhc2VuYW1lKHBhdGgpO1xuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xuICB9XG4gIHJldHVybiBmO1xufTtcblxuZXhwb3J0cy5leHRuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgdmFyIHN0YXJ0RG90ID0gLTE7XG4gIHZhciBzdGFydFBhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICAvLyBUcmFjayB0aGUgc3RhdGUgb2YgY2hhcmFjdGVycyAoaWYgYW55KSB3ZSBzZWUgYmVmb3JlIG91ciBmaXJzdCBkb3QgYW5kXG4gIC8vIGFmdGVyIGFueSBwYXRoIHNlcGFyYXRvciB3ZSBmaW5kXG4gIHZhciBwcmVEb3RTdGF0ZSA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0UGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBleHRlbnNpb25cbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICAgIGlmIChjb2RlID09PSA0NiAvKi4qLykge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBkb3QsIG1hcmsgaXQgYXMgdGhlIHN0YXJ0IG9mIG91ciBleHRlbnNpb25cbiAgICAgICAgaWYgKHN0YXJ0RG90ID09PSAtMSlcbiAgICAgICAgICBzdGFydERvdCA9IGk7XG4gICAgICAgIGVsc2UgaWYgKHByZURvdFN0YXRlICE9PSAxKVxuICAgICAgICAgIHByZURvdFN0YXRlID0gMTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0RG90ICE9PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBhbmQgbm9uLXBhdGggc2VwYXJhdG9yIGJlZm9yZSBvdXIgZG90LCBzbyB3ZSBzaG91bGRcbiAgICAgIC8vIGhhdmUgYSBnb29kIGNoYW5jZSBhdCBoYXZpbmcgYSBub24tZW1wdHkgZXh0ZW5zaW9uXG4gICAgICBwcmVEb3RTdGF0ZSA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGFydERvdCA9PT0gLTEgfHwgZW5kID09PSAtMSB8fFxuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBjaGFyYWN0ZXIgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBkb3RcbiAgICAgIHByZURvdFN0YXRlID09PSAwIHx8XG4gICAgICAvLyBUaGUgKHJpZ2h0LW1vc3QpIHRyaW1tZWQgcGF0aCBjb21wb25lbnQgaXMgZXhhY3RseSAnLi4nXG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMSAmJiBzdGFydERvdCA9PT0gZW5kIC0gMSAmJiBzdGFydERvdCA9PT0gc3RhcnRQYXJ0ICsgMSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZShzdGFydERvdCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGZpbHRlciAoeHMsIGYpIHtcbiAgICBpZiAoeHMuZmlsdGVyKSByZXR1cm4geHMuZmlsdGVyKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmKHhzW2ldLCBpLCB4cykpIHJlcy5wdXNoKHhzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gU3RyaW5nLnByb3RvdHlwZS5zdWJzdHIgLSBuZWdhdGl2ZSBpbmRleCBkb24ndCB3b3JrIGluIElFOFxudmFyIHN1YnN0ciA9ICdhYicuc3Vic3RyKC0xKSA9PT0gJ2InXG4gICAgPyBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7IHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pIH1cbiAgICA6IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSBzdHIubGVuZ3RoICsgc3RhcnQ7XG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pO1xuICAgIH1cbjtcbiIsImltcG9ydCBfTWVtb3J5Um91dGVyIGZyb20gXCIuL01lbW9yeVJvdXRlclwiO1xuZXhwb3J0IHsgX01lbW9yeVJvdXRlciBhcyBNZW1vcnlSb3V0ZXIgfTtcbmltcG9ydCBfUHJvbXB0IGZyb20gXCIuL1Byb21wdFwiO1xuZXhwb3J0IHsgX1Byb21wdCBhcyBQcm9tcHQgfTtcbmltcG9ydCBfUmVkaXJlY3QgZnJvbSBcIi4vUmVkaXJlY3RcIjtcbmV4cG9ydCB7IF9SZWRpcmVjdCBhcyBSZWRpcmVjdCB9O1xuaW1wb3J0IF9Sb3V0ZSBmcm9tIFwiLi9Sb3V0ZVwiO1xuZXhwb3J0IHsgX1JvdXRlIGFzIFJvdXRlIH07XG5pbXBvcnQgX1JvdXRlciBmcm9tIFwiLi9Sb3V0ZXJcIjtcbmV4cG9ydCB7IF9Sb3V0ZXIgYXMgUm91dGVyIH07XG5pbXBvcnQgX1N0YXRpY1JvdXRlciBmcm9tIFwiLi9TdGF0aWNSb3V0ZXJcIjtcbmV4cG9ydCB7IF9TdGF0aWNSb3V0ZXIgYXMgU3RhdGljUm91dGVyIH07XG5pbXBvcnQgX1N3aXRjaCBmcm9tIFwiLi9Td2l0Y2hcIjtcbmV4cG9ydCB7IF9Td2l0Y2ggYXMgU3dpdGNoIH07XG5pbXBvcnQgX2dlbmVyYXRlUGF0aCBmcm9tIFwiLi9nZW5lcmF0ZVBhdGhcIjtcbmV4cG9ydCB7IF9nZW5lcmF0ZVBhdGggYXMgZ2VuZXJhdGVQYXRoIH07XG5pbXBvcnQgX21hdGNoUGF0aCBmcm9tIFwiLi9tYXRjaFBhdGhcIjtcbmV4cG9ydCB7IF9tYXRjaFBhdGggYXMgbWF0Y2hQYXRoIH07XG5pbXBvcnQgX3dpdGhSb3V0ZXIgZnJvbSBcIi4vd2l0aFJvdXRlclwiO1xuZXhwb3J0IHsgX3dpdGhSb3V0ZXIgYXMgd2l0aFJvdXRlciB9OyJdLCJzb3VyY2VSb290IjoiIn0=