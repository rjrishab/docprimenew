(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

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

/***/ "./dev/js/components/diagnosis/bookingSummary/BookingConfirmationPopup.js":
/*!********************************************************************************!*\
  !*** ./dev/js/components/diagnosis/bookingSummary/BookingConfirmationPopup.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookingConfirmationPopup = function (_React$Component) {
	_inherits(BookingConfirmationPopup, _React$Component);

	function BookingConfirmationPopup(props) {
		_classCallCheck(this, BookingConfirmationPopup);

		var _this = _possibleConstructorReturn(this, (BookingConfirmationPopup.__proto__ || Object.getPrototypeOf(BookingConfirmationPopup)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(BookingConfirmationPopup, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'search-el-popup-overlay' },
				_react2.default.createElement(
					'div',
					{ className: 'search-el-popup vip-srch-pop-min' },
					_react2.default.createElement(
						'div',
						{ className: 'widget' },
						_react2.default.createElement(
							'div',
							{ className: 'widget-content padiing-srch-el' },
							_react2.default.createElement(
								_react2.default.Fragment,
								null,
								_react2.default.createElement(
									'p',
									{ className: 'srch-el-conent' },
									this.props.is_gold ? 'Confirm delete member?' : 'Do you wish to continue?'
								),
								_react2.default.createElement(
									'div',
									{ className: 'search-el-btn-container' },
									_react2.default.createElement(
										'button',
										{ onClick: this.props.priceConfirmationPopup.bind(this, true) },
										'Yes'
									),
									_react2.default.createElement(
										'button',
										{ onClick: this.props.priceConfirmationPopup.bind(this, false) },
										'No'
									)
								)
							)
						)
					)
				)
			);
		}
	}]);

	return BookingConfirmationPopup;
}(_react2.default.Component);

exports.default = BookingConfirmationPopup;

/***/ }),

/***/ "./dev/js/components/vipClub/insuranceProofs.js":
/*!******************************************************!*\
  !*** ./dev/js/components/vipClub/insuranceProofs.js ***!
  \******************************************************/
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

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _Loader = __webpack_require__(/*! ../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
var Compress = __webpack_require__(/*! compress.js */ "./node_modules/compress.js/index.js");

var InsuranceProofs = function (_React$Component) {
    _inherits(InsuranceProofs, _React$Component);

    function InsuranceProofs(props) {
        _classCallCheck(this, InsuranceProofs);

        var _this = _possibleConstructorReturn(this, (InsuranceProofs.__proto__ || Object.getPrototypeOf(InsuranceProofs)).call(this, props));

        _this.state = {
            dataUrl: null,
            zoomImageUrl: null,
            zoomImage: false,
            openPdf: false,
            openPdfUrl: null,
            isLoading: false
        };
        return _this;
    }

    _createClass(InsuranceProofs, [{
        key: 'pickFile',
        value: function pickFile(member_id, e) {
            var _this2 = this;

            // to select file
            if (e.target.files && e.target.files[0]) {
                var file = e.target.files[0];
                if (e.target.files[0] && e.target.files[0].name.includes('.pdf')) {
                    this.finishCrop(null, member_id, file);
                } else {
                    var compress = new Compress();
                    compress.compress([file], {
                        quality: 1,
                        maxWidth: 1000,
                        maxHeight: 1000
                    }).then(function (results) {
                        var img1 = results[0];
                        var base64str = img1.data;
                        var imgExt = img1.ext;
                        var file = Compress.convertBase64ToFile(base64str, imgExt);
                        _this2.getBase64(file, function (dataUrl) {
                            _this2.finishCrop(dataUrl, member_id, null);
                            _this2.setState({ dataUrl: dataUrl });
                        });
                    }).catch(function (e) {
                        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Error uploading image." });
                    });
                }
            }
        }
    }, {
        key: 'getBase64',
        value: function getBase64(file, cb) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                cb(reader.result);
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
        }
    }, {
        key: 'finishCrop',
        value: function finishCrop(dataUrl, member_id, file) {
            var _this3 = this;

            // cropping the image
            var file_blob_data = void 0;
            if (dataUrl) {
                file_blob_data = this.dataURItoBlob(dataUrl);
            }
            var mem_data = {};
            var existingData = void 0;
            var img_tag = "proof_file";
            this.setState({
                dataUrl: null, isLoading: true
            }, function () {
                var form_data = new FormData();
                if (file) {
                    form_data.append(img_tag, file, "imageFilename.pdf");
                } else {
                    form_data.append(img_tag, file_blob_data, "imageFilename.jpeg");
                }
                _this3.props.uploadVipProof(form_data, member_id, 'image', function (data, err) {
                    // store selected proof to database
                    if (data) {
                        var dataId = data.id;
                        mem_data.id = _this3.props.member_id;
                        mem_data.is_primary_user = _this3.props.is_primary_user;
                        mem_data.img_path_ids = [];
                        if (_this3.props.members_proofs.length > 0) {
                            Object.entries(_this3.props.members_proofs).map(function (_ref) {
                                var _ref2 = _slicedToArray(_ref, 2),
                                    key = _ref2[0],
                                    value = _ref2[1];

                                if (value.id == member_id) {
                                    mem_data.img_path_ids = value.img_path_ids;
                                    mem_data.img_path_ids.push({ id: dataId, image: data.data.proof_file, val: dataId });
                                } else {
                                    mem_data.img_path_ids = [];
                                    mem_data.img_path_ids.push({ id: dataId, image: data.data.proof_file, val: dataId });
                                }
                            });
                        } else {
                            mem_data.img_path_ids.push({ id: dataId, image: data.data.proof_file, val: dataId });
                        }
                        _this3.setState({ isLoading: false });
                        _this3.props.storeVipMemberProofs(mem_data); // to store member proof ids to the user store
                    }
                });
            });
        }
    }, {
        key: 'dataURItoBlob',
        value: function dataURItoBlob(dataURI) {
            var binary = atob(dataURI.split(',')[1]);
            var array = [];
            for (var i = 0; i < binary.length; i++) {
                array.push(binary.charCodeAt(i));
            }
            return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
        }
    }, {
        key: 'removeImage',
        value: function removeImage(img) {
            var _this4 = this;

            var Uploaded_image_data = [];
            Uploaded_image_data = this.props.members_proofs.filter(function (x) {
                return x.id == _this4.props.member_id;
            });
            Uploaded_image_data[0].img_path_ids.map(function (data, i) {
                data.member_id = _this4.props.member_id;
                if (data.image == img) {
                    _this4.props.removeVipMemberProof(data); // to remove cancelled uploaded image
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var Uploaded_image_data = [];
            var img_url = [];
            var pdf_url = [];
            if (this.props.members_proofs && this.props.members_proofs.length > 0) {
                Uploaded_image_data = this.props.members_proofs.filter(function (x) {
                    return x.id == _this5.props.member_id;
                });
                if (Uploaded_image_data.length > 0) {
                    Uploaded_image_data[0].img_path_ids.map(function (data, i) {
                        if (data.image.includes('pdf')) {
                            pdf_url.push(data.image);
                        } else {
                            img_url.push(data.image);
                        }
                    });
                }
            }
            var show_upload = true;
            if (img_url && img_url.length > 0 || pdf_url && pdf_url.length > 0) {
                show_upload = false;
            }
            return _react2.default.createElement(
                'div',
                { className: 'insurance-proofs-cont', style: { margin: '10px -10px 0px -10px' } },
                _react2.default.createElement(
                    'div',
                    { className: 'upload-addbtn-cont', id: 'member_' + this.props.member_id + '_upload' },
                    _react2.default.createElement(
                        'div',
                        { className: 'ins-upld-cont' },
                        _react2.default.createElement(
                            'div',
                            { className: 'ins-sb-frst-img' },
                            _react2.default.createElement('img', { src: "/assets" + "/img/ins-warning.svg" })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'ins-upload-text' },
                            _react2.default.createElement(
                                'p',
                                { className: 'ins-upload-para-text' },
                                'Upload any governement ID proof'
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'ins-upload-sub-text' },
                                'Aadhar card, Passport, Driving License, Voter ID Card'
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'ins-file-tyle' },
                                'File type: jpg, jpeg, png, pdf '
                            )
                        )
                    ),
                    show_upload ? _react2.default.createElement(
                        'span',
                        { className: 'ins-proof-upload-btn', onClick: function onClick() {
                                document.getElementById('imageFilePicker_' + _this5.props.member_id + '_front').click();
                                document.getElementById('imageFilePicker_' + _this5.props.member_id + '_front').value = "";
                            } },
                        _react2.default.createElement('img', { src: "/assets" + "/img/ins-up-ico.svg" }),
                        ' Upload',
                        _react2.default.createElement('input', { type: 'file', style: { display: 'none' }, id: 'imageFilePicker_' + this.props.member_id + '_front', onChange: this.pickFile.bind(this, this.props.member_id), accept: 'image/x-png,image/jpeg,image/jpg,.pdf' })
                    ) : ''
                ),
                this.state.isLoading && show_upload ? _react2.default.createElement(
                    'div',
                    { className: 'ins-prf-img-grd d-block' },
                    _react2.default.createElement(
                        'div',
                        { className: 'loader-for-chat-div mt-0' },
                        _react2.default.createElement(
                            'div',
                            { className: 'loader-for-chat mb-0' },
                            _react2.default.createElement('span', null),
                            _react2.default.createElement('span', null),
                            _react2.default.createElement('span', null),
                            _react2.default.createElement('span', null),
                            _react2.default.createElement('span', null),
                            _react2.default.createElement('span', null)
                        )
                    )
                ) : '',
                Uploaded_image_data && Uploaded_image_data.length > 0 && !show_upload ? _react2.default.createElement(
                    'div',
                    { className: 'upload-img-section' },
                    img_url && img_url.length > 0 ? img_url.map(function (data, i) {
                        return _react2.default.createElement(
                            'div',
                            { key: i, className: 'ins-prf-img-grd' },
                            _react2.default.createElement('img', { className: 'img-fluid ins-up-img-ic', src: data }),
                            _react2.default.createElement('img', { className: 'ins-prf-cls', onClick: _this5.removeImage.bind(_this5, data), src: 'https://cdn.docprime.com/cp/assets/img/icons/close.png' })
                        );
                    }) : '',
                    pdf_url && pdf_url.length > 0 ? pdf_url.map(function (data, i) {
                        return _react2.default.createElement(
                            'div',
                            { className: 'ins-prf-img-grd', key: i },
                            _react2.default.createElement('img', { className: 'img-fluid ins-up-img-ic', src: "/assets" + "/img/pdf.jpg" }),
                            _react2.default.createElement('img', { className: 'ins-prf-cls', onClick: _this5.removeImage.bind(_this5, data), src: 'https://cdn.docprime.com/cp/assets/img/icons/close.png' })
                        );
                    }) : '',
                    this.state.isLoading ? _react2.default.createElement(
                        'div',
                        { className: 'ins-prf-img-grd' },
                        _react2.default.createElement(
                            'div',
                            { className: 'loader-for-chat-div mt-0' },
                            _react2.default.createElement(
                                'div',
                                { className: 'loader-for-chat mb-0', style: { width: '50px' } },
                                _react2.default.createElement('span', null),
                                _react2.default.createElement('span', null),
                                _react2.default.createElement('span', null),
                                _react2.default.createElement('span', null)
                            )
                        )
                    ) : '',
                    (img_url && img_url.length || pdf_url && pdf_url.length) >= 5 ? '' : _react2.default.createElement(
                        'span',
                        { className: 'ins-prf-addMore', onClick: function onClick() {
                                document.getElementById('imageFilePicker_' + _this5.props.member_id + '_back').click();
                                document.getElementById('imageFilePicker_' + _this5.props.member_id + '_back').value = "";
                            } },
                        _react2.default.createElement('img', { className: 'ins-addico', src: "/assets" + "/img/ins-add-ico.svg" }),
                        'Add More',
                        _react2.default.createElement('input', { type: 'file', style: { display: 'none' }, id: 'imageFilePicker_' + this.props.member_id + '_back', onChange: this.pickFile.bind(this, this.props.member_id), accept: 'image/x-png,image/jpeg,image/jpg,.pdf' })
                    )
                ) : ''
            );
        }
    }]);

    return InsuranceProofs;
}(_react2.default.Component);

exports.default = InsuranceProofs;

/***/ }),

/***/ "./dev/js/components/vipClub/vipClubActivatedMemeberDetailsView.js":
/*!*************************************************************************!*\
  !*** ./dev/js/components/vipClub/vipClubActivatedMemeberDetailsView.js ***!
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

var _insuranceProofs = __webpack_require__(/*! ./insuranceProofs.js */ "./dev/js/components/vipClub/insuranceProofs.js");

var _insuranceProofs2 = _interopRequireDefault(_insuranceProofs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VipClubActivatedMemberDetails = function (_React$Component) {
	_inherits(VipClubActivatedMemberDetails, _React$Component);

	// already activated members view

	function VipClubActivatedMemberDetails(props) {
		_classCallCheck(this, VipClubActivatedMemberDetails);

		var _this = _possibleConstructorReturn(this, (VipClubActivatedMemberDetails.__proto__ || Object.getPrototypeOf(VipClubActivatedMemberDetails)).call(this, props));

		_this.state = {
			toggleTabType: false,
			tabsValue: []
		};
		return _this;
	}

	_createClass(VipClubActivatedMemberDetails, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'section',
				{ className: 'vip-user-details-container' },
				this.props.vip_club_db_data.data.user && Object.keys(this.props.vip_club_db_data.data.user).length > 0 && this.props.vip_club_db_data.data.user.plus_members && this.props.vip_club_db_data.data.user.plus_members.length > 0 ? this.props.vip_club_db_data.data.user.plus_members.map(function (val, key) {
					return _react2.default.createElement(
						'div',
						{ key: key, className: 'ins-user-details-lisitng', id: val.id },
						_react2.default.createElement(
							'p',
							{ className: 'sub-form-hed' },
							val.is_primary_user ? 'Proposer' : val.relation ? val.relation : ''
						),
						_react2.default.createElement(
							'ul',
							{ className: 'ins-usr-img-para pl-0' },
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'div',
									{ className: 'img-list-width' },
									_react2.default.createElement('img', { className: 'ins-input-img', src: "/assets" + "/img/user-01.svg" })
								),
								_react2.default.createElement(
									'p',
									{ style: { 'textTransform': 'capitalize' } },
									val.first_name,
									' ',
									val.last_name,
									' | ',
									val.title == 'mr.' ? 'Male' : val.gender == 'm' ? 'Male' : 'Female'
								)
							),
							val.dob ? _react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'div',
									{ className: 'img-list-width' },
									_react2.default.createElement('img', { className: 'ins-input-img', src: "/assets" + "/img/calendar-01.svg" })
								),
								_react2.default.createElement(
									'p',
									null,
									val.dob
								)
							) : '',
							val.email ? _react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'div',
									{ className: 'img-list-width' },
									_react2.default.createElement('img', { className: 'ins-input-img', src: "/assets" + "/img/mail-01.svg" })
								),
								_react2.default.createElement(
									'p',
									null,
									val.email
								)
							) : ''
						)
					);
				}) : ""
			);
		}
	}]);

	return VipClubActivatedMemberDetails;
}(_react2.default.Component);

exports.default = VipClubActivatedMemberDetails;

/***/ }),

/***/ "./dev/js/components/vipClub/vipClubFamilyMembers.js":
/*!***********************************************************!*\
  !*** ./dev/js/components/vipClub/vipClubFamilyMembers.js ***!
  \***********************************************************/
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

var _vipClubPopup = __webpack_require__(/*! ./vipClubPopup.js */ "./dev/js/components/vipClub/vipClubPopup.js");

var _vipClubPopup2 = _interopRequireDefault(_vipClubPopup);

var _newDateSelector = __webpack_require__(/*! ../commons/newDateSelector.js */ "./dev/js/components/commons/newDateSelector.js");

var _newDateSelector2 = _interopRequireDefault(_newDateSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VipProposerFamily = function (_React$Component) {
	_inherits(VipProposerFamily, _React$Component);

	function VipProposerFamily(props) {
		_classCallCheck(this, VipProposerFamily);

		var _this = _possibleConstructorReturn(this, (VipProposerFamily.__proto__ || Object.getPrototypeOf(VipProposerFamily)).call(this, props));

		_this.state = {
			name: '',
			last_name: '',
			dob: '',
			id: '',
			// relation: '',
			// title: '',
			showPopup: false,
			setDefault: false,
			profile_id: null,
			// relation_key:'',
			is_disable: false,
			member_form_id: _this.props.member_form_id,
			is_already_user: false,
			isUserSelectedProfile: _this.props.isUserSelectedProfile,
			isDobValidated: false,
			is_dob_error: false,
			gender: 'm',
			isForceUpdateDob: false
		};
		return _this;
	}

	_createClass(VipProposerFamily, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(props) {
			var _this2 = this;

			var self = this;
			var profile = {};
			if (props.is_from_payment) {
				if (props.vipClubMemberDetails[props.member_id]) {
					var _profile = Object.assign({}, this.props.vipClubMemberDetails[this.props.member_id]);
					var nextProfile = Object.assign({}, props.vipClubMemberDetails[props.member_id]);
					if (JSON.stringify(this.state) != JSON.stringify(nextProfile)) {
						this.setState(_extends({}, nextProfile));
					}
				} else if (props.member_id >= 0 && !this.state.setDefault) {
					this.setState({ id: props.member_id, setDefault: true }, function () {
						_this2.setState({ is_disable: false }, function () {
							self.handleSubmit();
						});
					});
				}
			}
		}
	}, {
		key: 'handleChange',
		value: function handleChange(field, event) {
			var _setState;

			this.setState((_setState = {}, _defineProperty(_setState, event.target.getAttribute('data-param'), event.target.value), _defineProperty(_setState, 'id', this.props.member_id), _setState));
		}
	}, {
		key: 'handleRelation',
		value: function handleRelation(id, event) {
			var _this3 = this;

			var relation_id = document.getElementById(id);
			this.setState({ id: this.props.member_id, 'relation': event.target.value, 'relation_key': relation_id.options[relation_id.selectedIndex].getAttribute('data-param') }, function () {
				_this3.handleSubmit();
			});
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit() {
			var self_data = this.state;
			if (self_data.name !== '') {
				if (self_data.name.length > 50) {
					self_data.name = self_data.name.slice(0, 50);
				}
			}
			this.props.userDetails('self_data', self_data); // to save user form details in store
		}
	}, {
		key: 'togglePopup',
		value: function togglePopup(newProfileid, member_id, newProfile) {
			var _this4 = this;

			if (newProfileid !== '') {
				if (newProfile && newProfile.dob) {
					this.setState({ dob: newProfile.dob, isDobValidated: true });
				}
				newProfile.isUserSelectedProfile = true;
				this.props.selectVipUserProfile(newProfileid, member_id, newProfile, this.props.param_id); // select profile from option
				this.setState({
					showPopup: !this.state.showPopup,
					profile_id: newProfileid,
					id: newProfileid,
					isForceUpdateDob: true
				}, function () {
					_this4.handleSubmit();
				});
			} else {
				this.setState({ showPopup: !this.state.showPopup, isForceUpdateDob: false });
			}
		}
	}, {
		key: 'handleNameCharacters',
		value: function handleNameCharacters(field, event) {
			if (field == 'name') {
				if (this.state.name.length == 50) {
					event.preventDefault();
				}
			}
		}
	}, {
		key: 'hideSelectProfilePopup',
		value: function hideSelectProfilePopup() {
			this.setState({ showPopup: false });
		}
	}, {
		key: 'submitNewDob',
		value: function submitNewDob(type, newDate, isValidDob, user_form_id) {
			var self = this;
			self.setState({
				dob: newDate, isDobValidated: isValidDob
			}, function () {
				self.handleSubmit();
			});
		}
	}, {
		key: 'unSetForceUpdateDob',
		value: function unSetForceUpdateDob() {
			this.setState({ isForceUpdateDob: false });
		}
	}, {
		key: 'render',
		value: function render() {
			var _this5 = this;

			console.log(this.props.validateErrors);
			var commonMsgSpan = _react2.default.createElement(
				'span',
				{ className: 'fill-error-span' },
				'*This is a mandatory field'
			);

			return _react2.default.createElement(
				'div',
				{ className: 'ins-sub-forms mrt-10', id: 'member_' + this.props.member_id },
				_react2.default.createElement(
					'div',
					{ className: 'widget goldUserAddon', style: { padding: '10px' } },
					_react2.default.createElement(
						'div',
						{ className: 'sub-form-input-data', style: { marginBottom: 10 } },
						_react2.default.createElement(
							'div',
							null,
							this.props.vip_club_db_data.data.user && Object.keys(this.props.vip_club_db_data.data.user).length > 0 && this.props.vip_club_db_data.data.user.plus_members && this.props.vip_club_db_data.data.user.plus_members.length > 0 ? _react2.default.createElement(
								'p',
								{ className: 'sub-form-hed' },
								'Member ' + (this.props.vip_club_db_data.data.user.plus_members.length + this.props.member_view_id + 1)
							) : ''
						),
						_react2.default.createElement(
							'div',
							null,
							this.props.is_tobe_remove_option ? _react2.default.createElement(
								'div',
								{ className: 'sub-form-hed-click', onClick: this.props.removeMemberForm.bind(this, this.props.member_id) },
								'Remove'
							) : ''
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'd-flex' },
						_react2.default.createElement(
							'p',
							{ className: 'label-names-buttons ' + (this.state.gender == 'm' ? 'btn-active' : ''), name: 'gender', checked: this.state.gender == 'm', onClick: function onClick() {
									return _this5.setState({ 'gender': 'm' }, function () {
										_this5.handleSubmit();
									});
								}, onBlur: this.handleChange.bind(this) },
							'Male'
						),
						_react2.default.createElement(
							'p',
							{ className: 'label-names-buttons ' + (this.state.gender == 'f' ? 'btn-active' : ''), name: 'gender', checked: this.state.gender == 'f', onClick: function onClick() {
									return _this5.setState({ 'gender': 'f' }, function () {
										_this5.handleSubmit();
									});
								}, onBlur: this.handleChange.bind(this) },
							'Female'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'row no-gutters' },
						_react2.default.createElement(
							'div',
							{ className: 'col-12' },
							_react2.default.createElement(
								'div',
								{ className: 'ins-form-group inp-margin-right ' },
								_react2.default.createElement('input', { type: 'text', style: { 'textTransform': 'capitalize' },
									id: 'name_' + this.props.member_id,
									className: 'form-control ins-form-control ' + (this.props.validateErrors.indexOf('name') > -1 ? 'fill-error' : ''), required: true,
									autoComplete: 'first_name',
									name: 'name', 'data-param': 'name',
									value: this.state.name,
									onChange: this.handleChange.bind(this, 'name'),
									onBlur: this.handleSubmit.bind(this),
									onKeyPress: this.handleNameCharacters.bind(this, 'name'),
									disabled: this.state.is_disable ? 'disabled' : ''
								}),
								_react2.default.createElement(
									'label',
									{ className: this.state.is_disable ? 'form-control-placeholder datePickerLabel' : 'form-control-placeholder',
										htmlFor: 'name_' + this.props.member_id },
									_react2.default.createElement('span', { className: 'labelDot' }),
									'Name'
								),
								_react2.default.createElement('img', { src: "/assets" + "/img/user-01.svg" })
							),
							this.props.validateErrors.indexOf('name') > -1 ? commonMsgSpan : ''
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-12' },
							_react2.default.createElement(
								'form',
								null,
								_react2.default.createElement(_newDateSelector2.default, _extends({}, this.props, { getNewDate: this.submitNewDob.bind(this), is_dob_error: this.props.is_dob_error, old_dob: this.state.dob, user_form_id: this.props.member_id, is_gold: true, unSetForceUpdateDob: this.unSetForceUpdateDob.bind(this), isForceUpdateDob: this.state.isForceUpdateDob })),
								this.props.validateErrors.indexOf('dob') > -1 ? commonMsgSpan : ''
							)
						)
					),
					this.props.show_selected_profiles.length > 0 && !this.state.is_disable ? _react2.default.createElement(
						'div',
						{ className: 'sub-form-hed-click', onClick: function onClick() {
								return _this5.setState({
									showPopup: true, isForceUpdateDob: false });
							} },
						'Select from profile',
						_react2.default.createElement('img', { src: "/assets" + "/img/rgt-arw.svg" })
					) : ''
				),
				this.state.showPopup ? _react2.default.createElement(_vipClubPopup2.default, _extends({}, this.props, {
					currentSelectedVipMembersId: this.props.currentSelectedVipMembersId,
					member_id: this.props.member_id,
					closePopup: this.togglePopup.bind(this),
					isSelectprofile: true,
					vipClubMemberDetails: this.props.vipClubMemberDetails[this.props.member_id],
					hideSelectProfilePopup: this.hideSelectProfilePopup.bind(this),
					is_see_more: false
				})) : ''
			);
		}
	}]);

	return VipProposerFamily;
}(_react2.default.Component);

exports.default = VipProposerFamily;

/***/ }),

/***/ "./dev/js/components/vipClub/vipClubMemberDetailsView.js":
/*!***************************************************************!*\
  !*** ./dev/js/components/vipClub/vipClubMemberDetailsView.js ***!
  \***************************************************************/
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

var _DesktopProfileHeader = __webpack_require__(/*! ../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _ChatPanel = __webpack_require__(/*! ../commons/ChatPanel */ "./dev/js/components/commons/ChatPanel/index.js");

var _ChatPanel2 = _interopRequireDefault(_ChatPanel);

var _vipClubSelf = __webpack_require__(/*! ./vipClubSelf.js */ "./dev/js/components/vipClub/vipClubSelf.js");

var _vipClubSelf2 = _interopRequireDefault(_vipClubSelf);

var _vipClubFamilyMembers = __webpack_require__(/*! ./vipClubFamilyMembers.js */ "./dev/js/components/vipClub/vipClubFamilyMembers.js");

var _vipClubFamilyMembers2 = _interopRequireDefault(_vipClubFamilyMembers);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _paymentForm = __webpack_require__(/*! ../commons/paymentForm */ "./dev/js/components/commons/paymentForm/index.js");

var _paymentForm2 = _interopRequireDefault(_paymentForm);

var _gtm = __webpack_require__(/*! ../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _staticDisclaimer = __webpack_require__(/*! ../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

var _vipClubActivatedMemeberDetailsView = __webpack_require__(/*! ./vipClubActivatedMemeberDetailsView.js */ "./dev/js/components/vipClub/vipClubActivatedMemeberDetailsView.js");

var _vipClubActivatedMemeberDetailsView2 = _interopRequireDefault(_vipClubActivatedMemeberDetailsView);

var _BookingConfirmationPopup = __webpack_require__(/*! ../diagnosis/bookingSummary/BookingConfirmationPopup.js */ "./dev/js/components/diagnosis/bookingSummary/BookingConfirmationPopup.js");

var _BookingConfirmationPopup2 = _interopRequireDefault(_BookingConfirmationPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var VipClubMemberDetailsView = function (_React$Component) {
	_inherits(VipClubMemberDetailsView, _React$Component);

	function VipClubMemberDetailsView(props) {
		_classCallCheck(this, VipClubMemberDetailsView);

		var _this = _possibleConstructorReturn(this, (VipClubMemberDetailsView.__proto__ || Object.getPrototypeOf(VipClubMemberDetailsView)).call(this, props));

		_this.state = {
			saveMembers: false,
			validateErrors: {},
			show_selected_profiles: [],
			paymentData: null,
			show_popup: false,
			proceed: false,
			popupMemData: {},
			coupon_code: null,
			coupon_id: null,
			is_payment_coupon_applied: false,
			coupon_discount: null,
			user_email: null,
			user_phone_number: null,
			is_dob_error: false,
			showConfirmationPopup: 'close',
			to_be_remove_id: ''
		};
		return _this;
	}

	_createClass(VipClubMemberDetailsView, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			if (window) {
				window.scrollTo(0, 0);
			}
			if (this.props.selected_vip_plan && Object.keys(this.props.selected_vip_plan).length > 0 && !this.props.is_from_payment && this.props.vipCoupons.length > 0) {
				// get coupon discount
				this.props.applyCouponDiscount({ productId: this.props.selected_vip_plan.is_gold ? 8 : 11, couponCode: this.props.vipCoupons[0].code, couponId: this.props.vipCoupons[0].coupon_id, plan_id: this.props.selected_vip_plan.id, deal_price: this.props.selected_vip_plan.deal_price,
					cb: function cb(resp) {
						if (resp) {
							_this2.setState({ coupon_discount: resp.discount });
						}
					}
				});
				this.setState({ is_payment_coupon_applied: true, coupon_code: this.props.vipCoupons[0].code, coupon_id: this.props.vipCoupons[0].coupon_id });
			}

			if (this.props.USER.profiles && Object.keys(this.props.USER.profiles).length && this.props.USER.profiles[this.props.USER.defaultProfile] && Object.keys(this.props.USER.profiles[this.props.USER.defaultProfile]).length > 0) {
				this.setState({ user_email: this.props.USER.profiles[this.props.USER.defaultProfile].email, user_phone_number: this.props.USER.profiles[this.props.USER.defaultProfile].phone_number });
			}
		}
	}, {
		key: 'addMembers',
		value: function addMembers(isFromDefaultUser) {
			var _this3 = this;

			// add new members 
			var member_dummy_data = {
				name: '',
				last_name: '',
				dob: '',
				id: '',
				// relation: null,
				// relation_key: null,
				// title: '',
				profile: null,
				profile_id: null,
				phone_number: '',
				email: null,
				isUserSelectedProfile: true,
				// day:null,
				// mnth:null,
				// year:null,
				// email:'',
				first_name: '',
				age: ''
			};
			var card = void 0;
			var membersId = [];
			if (isFromDefaultUser && !this.props.is_from_payment) {
				this.props.clearVipMemeberData(); // reset vip or gold store to initial state
				membersId.push({ '0': 0, type: 'self', member_form_id: 0, isUserSelectedProfile: true, to_be_remove: false });
				member_dummy_data.id = 0;
				member_dummy_data.is_tobe_dummy_user = true;
				this.props.saveCurrentSelectedVipMembers(membersId, function (resp) {
					// save current visible form member or selected user profile id
					_this3.props.userDetails('self_data', member_dummy_data); // to save user form details in store
				});
			} else {
				if (this.props.vip_club_db_data && this.props.vip_club_db_data.data && Object.keys(this.props.vip_club_db_data.data).length && this.props.vip_club_db_data.data.plan && this.props.vip_club_db_data.data.plan.length > 0) {
					// this.props.vip_club_db_data.data.plan[0].total_allowed_members	
					if (this.props.currentSelectedVipMembersId && this.props.currentSelectedVipMembersId.length > 0 && this.props.currentSelectedVipMembersId.length < this.props.vip_club_db_data.data.plan[0].total_allowed_members) {
						membersId = [].concat(this.props.currentSelectedVipMembersId);
						var currentFormIdsCount = this.props.currentSelectedVipMembersId.length;
						var total_allowed_members = this.props.vip_club_db_data.data.plan[0].total_allowed_members;
						if (currentFormIdsCount <= total_allowed_members) {
							var _membersId$push;

							membersId.push((_membersId$push = {}, _defineProperty(_membersId$push, currentFormIdsCount, currentFormIdsCount), _defineProperty(_membersId$push, 'type', 'adult'), _defineProperty(_membersId$push, 'member_form_id', currentFormIdsCount), _defineProperty(_membersId$push, 'isUserSelectedProfile', true), _defineProperty(_membersId$push, 'to_be_remove', true), _membersId$push));
							member_dummy_data.id = currentFormIdsCount;
							member_dummy_data.is_tobe_dummy_user = false;
						}
						this.props.saveCurrentSelectedVipMembers(membersId, function (resp) {
							// save current visible form member or selected user profile id
							_this3.props.userDetails('self_data', member_dummy_data); // to save user form details in store
						});
					}
				}
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(props) {
			var card = void 0;
			var self = this;
			var isDummyUser = void 0;
			var membersId = [];
			if (!this.state.saveMembers && Object.keys(props.selected_vip_plan).length > 0 && !props.currentSelectedVipMembersId.length && !props.is_from_payment) {
				var loginUser = void 0;
				var isDefaultUser = void 0;
				if (props.USER) {
					loginUser = props.USER.defaultProfile;
				}
				if (this.props.savedMemberData && this.props.savedMemberData.length > 0) {
					if (this.props.savedMemberData.length == 1 && this.props.savedMemberData[0] == null) {
						if (props.USER.profiles && Object.keys(props.USER.profiles).length && props.USER.profiles[props.USER.defaultProfile] && Object.keys(props.USER.profiles[props.USER.defaultProfile]).length > 0) {
							var _membersId$push2;

							membersId.push((_membersId$push2 = {}, _defineProperty(_membersId$push2, 0, props.USER.profiles[props.USER.defaultProfile].id), _defineProperty(_membersId$push2, 'type', 'self'), _defineProperty(_membersId$push2, 'member_form_id', 0), _defineProperty(_membersId$push2, 'isUserSelectedProfile', true), _defineProperty(_membersId$push2, 'fromWhere', 'show_api'), _membersId$push2));
						} else {
							var _membersId$push3;

							membersId.push((_membersId$push3 = {}, _defineProperty(_membersId$push3, 0, 0), _defineProperty(_membersId$push3, 'type', 'self'), _defineProperty(_membersId$push3, 'member_form_id', 0), _defineProperty(_membersId$push3, 'isUserSelectedProfile', true), _defineProperty(_membersId$push3, 'fromWhere', 'show_api'), _defineProperty(_membersId$push3, 'to_be_remove', false), _membersId$push3));
						}
					} else {
						Object.entries(props.savedMemberData).map(function (_ref) {
							var _membersId$push4;

							var _ref2 = _slicedToArray(_ref, 2),
							    key = _ref2[0],
							    value = _ref2[1];

							membersId.push((_membersId$push4 = {}, _defineProperty(_membersId$push4, key, value.id), _defineProperty(_membersId$push4, 'type', 'self'), _defineProperty(_membersId$push4, 'member_form_id', 0), _defineProperty(_membersId$push4, 'isUserSelectedProfile', true), _defineProperty(_membersId$push4, 'to_be_remove', false), _membersId$push4));
						});
					}
					props.saveCurrentSelectedVipMembers(membersId); // save current visible form member or selected user profile id
					this.setState({ saveMembers: true });
				} else {
					if (props.USER.profiles && Object.keys(props.USER.profiles).length && props.USER.profiles[props.USER.defaultProfile]) {
						isDefaultUser = props.USER.profiles[props.USER.defaultProfile].is_default_user;
						isDummyUser = props.USER.profiles[props.USER.defaultProfile].isDummyUser;
					}
					if (!isDummyUser) {
						membersId.push({ '0': loginUser, type: 'self', member_form_id: 0, isUserSelectedProfile: false, to_be_remove: false });
					} else {
						membersId.push({ '0': 0, type: 'self', member_form_id: 0, isUserSelectedProfile: false, to_be_remove: false });
					}
					props.saveCurrentSelectedVipMembers(membersId); // save current visible form member or selected user profile id
					this.setState({ saveMembers: true });
				}
			} else if (!this.state.saveMembers && Object.keys(props.selected_vip_plan).length > 0 && props.is_from_payment && Object.keys(props.vip_club_db_data).length > 0) {
				if (props.vip_club_db_data.data.user && Object.keys(props.vip_club_db_data.data.user).length > 0 && props.vip_club_db_data.data.user.plus_members && props.vip_club_db_data.data.user.plus_members.length > 0) {
					if (!Object.keys(props.vipClubMemberDetails).length) {
						var _membersId$push5;

						membersId.push((_membersId$push5 = {}, _defineProperty(_membersId$push5, 0, 0), _defineProperty(_membersId$push5, 'type', 'adult'), _defineProperty(_membersId$push5, 'member_form_id', 0), _defineProperty(_membersId$push5, 'isUserSelectedProfile', false), _defineProperty(_membersId$push5, 'to_be_remove', false), _membersId$push5));
						this.setState({ saveMembers: true });
					} else {
						props.currentSelectedVipMembersId.map(function (val, key) {
							if (Object.keys(props.vipClubMemberDetails).length > 0) {
								var _membersId$push6;

								membersId.push((_membersId$push6 = {}, _defineProperty(_membersId$push6, key, props.vipClubMemberDetails[val[key]].id), _defineProperty(_membersId$push6, 'type', 'adult'), _defineProperty(_membersId$push6, 'member_form_id', props.vipClubMemberDetails[val[key]].id), _defineProperty(_membersId$push6, 'isUserSelectedProfile', false), _defineProperty(_membersId$push6, 'to_be_remove', key == 0 ? false : true), _membersId$push6));
							}
						});
					}

					props.saveCurrentSelectedVipMembers(membersId); // save current visible form member or selected user profile id
					this.setState({ saveMembers: true });
				}
			}
			var profileLength = Object.keys(props.USER.profiles).length;
			var currentSelectedProfiles = [];
			var show_selected_profile = [];
			this.props.currentSelectedVipMembersId.map(function (val, key) {
				currentSelectedProfiles.push(val[key]);
			});
			var already_users_ids = [];
			if (this.props.vip_club_db_data && Object.keys(this.props.vip_club_db_data).length > 0 && this.props.vip_club_db_data.data.user && Object.keys(this.props.vip_club_db_data.data).length > 0 && Object.keys(this.props.vip_club_db_data.data.user).length > 0 && this.props.vip_club_db_data.data.user.plus_members && this.props.vip_club_db_data.data.user.plus_members.length > 0) {
				this.props.vip_club_db_data.data.user.plus_members.map(function (val, key) {
					already_users_ids.push(val.profile);
				});
			}
			if (profileLength > 0) {
				if (!props.USER.profiles[props.USER.defaultProfile].isDummyUser) {
					{
						Object.entries(props.USER.profiles).map(function (_ref3) {
							var _ref4 = _slicedToArray(_ref3, 2),
							    key = _ref4[0],
							    value = _ref4[1];

							if (currentSelectedProfiles.indexOf(parseInt(key)) == -1 && key !== props.USER.defaultProfile && already_users_ids.indexOf(parseInt(key)) == -1) {
								show_selected_profile.push(key);
							}
						});
					}
					self.setState({ show_selected_profiles: show_selected_profile });
				}
			}
		}
	}, {
		key: 'processPayment',
		value: function processPayment(data) {
			var _this4 = this;

			if (data && data.status) {
				this.setState({ paymentData: data.data }, function () {
					setTimeout(function () {
						if (document.getElementById('paymentForm') && Object.keys(_this4.state.paymentData).length > 0) {
							var form = document.getElementById('paymentForm');
							form.submit();
						}
					}, 500);
				});
			}
		}
	}, {
		key: 'proceedPlan',
		value: function proceedPlan(isSms) {
			var _this5 = this;

			var extraDataParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			//new
			var success_id = void 0;
			var data = {};
			var pushData = {};
			var isDummyUser = void 0;
			var self_profile = {};
			var is_disable = false;
			var member_ref = '';
			var validatingErrors = {};
			var param = void 0;
			var parsed = queryString.parse(this.props.location.search);
			if (this.props.selected_vip_plan && Object.keys(this.props.selected_vip_plan).length > 0 && this.props.vipClubMemberDetails && Object.keys(this.props.vipClubMemberDetails).length > 0) {
				data.plan_id = this.props.selected_vip_plan.id;
				data.members = [];
				data.utm_spo_tags = parsed;
				pushData.utm_spo_tags = parsed;
				pushData.plan = this.props.selected_vip_plan;
				pushData.dummy_data_type = 'PLAN_PURCHASE';
				pushData.members = [];
				pushData.coupon_data = this.props.vipCoupons;
				if (isSms) {
					pushData.is_agent = true;
				} else {
					pushData.is_agent = false;
				}
				var fields = [];
				this.props.currentSelectedVipMembersId.map(function (val, key) {
					if (Object.keys(_this5.props.vipClubMemberDetails).length > 0) {
						fields = [];
						param = _this5.props.vipClubMemberDetails[val[key]];
						if (param && Object.keys(param).length > 0) {
							//common validation starts

							if (param.name == "") {
								is_disable = true;
								fields.push('name');
							}

							if (param.dob == null || param.dob == "") {
								is_disable = true;
								fields.push('dob');
								_this5.setState({ is_dob_error: true });
							}

							if (param.dob != null && !param.isDobValidated) {
								is_disable = true;
								fields.push('dob');
								_this5.setState({ is_dob_error: true });
							}

							//common validation ends 

							if (!_this5.props.is_from_payment) {
								if (param.email == "" || !param.email) {
									is_disable = true;
									fields.push('email');
								}
								if (param.email != '' && param.relation == 'self') {
									var validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
									validEmail = validEmail.test(param.email);
									if (!validEmail) {
										is_disable = true;
										fields.push('email');
									}
								}
							}
						}
						validatingErrors[param.id] = fields;
					}
				});
				console.log(validatingErrors);
				Object.keys(validatingErrors).forEach(function (key) {
					if (validatingErrors[key].length > 0) {
						is_disable = true;
						member_ref = 'member_' + key;
					}
				});
				this.setState({ validateErrors: validatingErrors });
				if (is_disable && document.getElementById(member_ref)) {
					document.getElementById(member_ref).scrollIntoView();
				} else {
					var city = void 0;
					var city_code = void 0;
					var address = void 0;
					var pincode = void 0;
					var members = {};
					var primary_user = {};
					if (this.props.is_from_payment) {
						var is_member_updated = [];
						var image_ids = [];
						if (this.props.vip_club_db_data.data.user && Object.keys(this.props.vip_club_db_data.data.user).length > 0 && this.props.vip_club_db_data.data.user.plus_members && this.props.vip_club_db_data.data.user.plus_members.length > 0) {
							primary_user = this.props.vip_club_db_data.data.user.plus_members.filter(function (x) {
								return x.is_primary_user;
							})[0];
						}
						if (this.props.members_proofs && this.props.members_proofs.length > 0 && Object.keys(primary_user).length > 0) {
							//for self member_proofs
							param = primary_user;
							members = {};
							members.profile = param.profile;
							members.id = param.profile;
							members.is_primary_user = param.is_primary_user;
							// members.title = primary_user.title
							members.first_name = primary_user.first_name;
							members.last_name = '';
							members.email = primary_user.email;
							members.dob = primary_user.dob;
							is_member_updated = this.props.members_proofs.filter(function (x) {
								return x.id == param.profile;
							});
							if (is_member_updated && is_member_updated.length > 0) {
								if (is_member_updated[0].img_path_ids.length > 0) {
									image_ids = [];
									is_member_updated[0].img_path_ids.map(function (imgId, i) {
										image_ids.push({ 'proof_file': imgId.id });
									});
								}
								members.document_ids = image_ids;
							}
							data.members.push(members);
						}
						this.props.currentSelectedVipMembersId.map(function (val, key) {
							if (Object.keys(_this5.props.vipClubMemberDetails).length > 0) {
								param = _this5.props.vipClubMemberDetails[val[key]];
								members = {};
								// members.title = param.title
								// members.relation = param.relation_key
								members.first_name = param.name;
								members.last_name = '';
								members.email = null;
								members.dob = param.dob;
								members.gender = param.gender;
								members.profile = param.profile_id;
								members.is_primary_user = false;
								// data.members.push(members)
								if (_this5.props.members_proofs && _this5.props.members_proofs.length > 0) {
									is_member_updated = _this5.props.members_proofs.filter(function (x) {
										return x.id == param.id;
									});
									if (is_member_updated && is_member_updated.length > 0) {
										if (is_member_updated[0].img_path_ids.length > 0) {
											image_ids = [];
											is_member_updated[0].img_path_ids.map(function (imgId, i) {
												image_ids.push({ 'proof_file': imgId.id });
											});
										}
										members.document_ids = image_ids;
									}
									// members.id=param.id
								}
								// pushData.members.push(members)
								return data.members.push(members);
							}
						});
						console.log(data);
						var popupMemData = void 0;
						popupMemData = data.members;
						this.setState({ popupMemData: popupMemData });
						if (!this.state.proceed && this.props.currentSelectedVipMembersId && this.props.currentSelectedVipMembersId.length < this.props.selected_vip_plan.total_allowed_members) {
							this.setState({ show_popup: true });
							return;
						}
						console.log(data);
						this.props.addVipMembersData(data, function (resp) {
							// to add member details
							if (resp.success) {
								_this5.props.history.push('vip-club-activated-details');
							}
						});
					} else {
						this.props.currentSelectedVipMembersId.map(function (val, key) {
							if (Object.keys(_this5.props.vipClubMemberDetails).length > 0) {
								param = _this5.props.vipClubMemberDetails[val[key]];
								members = {};
								// members.title = param.title
								// members.relation = param.relation_key
								members.first_name = param.name;
								members.last_name = '';
								members.email = param.email;
								members.dob = param.dob;
								members.gender = param.gender;
								members.profile = param.profile_id;
								members.id = param.id;
								members.is_primary_user = true;
								data.members.push(members);
								data['coupon_code'] = _this5.state.coupon_code && _this5.state.is_payment_coupon_applied ? [_this5.state.coupon_code] : [];
								data['coupon_type'] = _this5.props.selected_vip_plan.is_gold ? 'gold' : 'vip';
								pushData['coupon_code'] = _this5.state.coupon_code && _this5.state.is_payment_coupon_applied ? [_this5.state.coupon_code] : [];
								pushData['coupon_type'] = _this5.props.selected_vip_plan.is_gold ? 'gold' : 'vip';
								pushData.members.push(param);
								console.log(data);

								if (_storage2.default.isAgent()) {
									_this5.pushUserData(pushData);
								}

								if (_storage2.default && _storage2.default.getAnyCookie('sbi_utm') && _this5.props.common_utm_tags && _this5.props.common_utm_tags.length && _this5.props.common_utm_tags.filter(function (x) {
									return x.type == 'sbi_utm';
								}).length) {

									var tags = _this5.props.common_utm_tags.filter(function (x) {
										return x.type == 'sbi_utm';
									})[0];
									if (tags.utm_tags) {

										data['utm_sbi_tags'] = tags.utm_tags;
									}
								} else if (document && document.location && document.location.host && document.location.host.includes('sbi')) {
									data['utm_sbi_tags'] = {
										utm_tags: {
											utm_source: 'sbi_utm',
											utm_term: '',
											utm_medium: '',
											utm_campaign: ''
										},
										time: new Date().getTime()
									};
								}

								if (isSms) {
									_this5.sendSMS(extraDataParams);
								} else {
									_this5.props.vipClubPay(data, function (resp) {
										// to request for payment

										if (resp && resp.error) {
											_nodeSnackbar2.default.show({ pos: 'bottom-center', text: resp.error });
											return;
										}
										if (resp.payment_required) {
											_this5.processPayment(resp);
										} else {
											if (resp && resp.data) {
												success_id = '/vip-club-activated-details?payment_success=true&id=' + resp.data.id;
												_this5.props.history.push(success_id);
											}
										}
									});
								}
							}
						});
					}
				}
			}
		}
	}, {
		key: 'pushUserData',
		value: function pushUserData(data) {
			// to save proposer/self data to the dummy table in case of agent or proposer self
			if (data && Object.keys(data).length && data.members && data.members.length && _storage2.default.isAgent()) {
				if (data.members.length == 1 && data.members[0] == null) {} else {
					this.props.pushMembersData(data);
				}
			}
		}
	}, {
		key: 'sendSMS',
		value: function sendSMS(extraDataParams) {
			var parsed = queryString.parse(this.props.location.search);
			var extraParams = {};
			if (extraDataParams && extraDataParams.sendOnWhatsup) {
				extraParams['message_medium'] = 'WHATSAPP';
			}
			this.props.sendAgentBookingURL(null, 'sms', 'vip_purchase', parsed, extraParams, function (err, res) {
				//send payment link in sms to user by agaent
				if (err) {
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "SMS SEND ERROR" });
				} else {
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "SMS SENT SUCCESSFULY" });
				}
			});
		}
	}, {
		key: 'proceedMembers',
		value: function proceedMembers(is_wait) {
			this.setState({ show_popup: false, proceed: is_wait ? true : false }, function () {
				if (document.getElementById('submit_buy')) {
					document.getElementById('submit_buy').click();
				}
			});
		}
	}, {
		key: 'proceedMembersNo',
		value: function proceedMembersNo(is_wait) {
			this.setState({ show_popup: false, proceed: false, popupMemData: {} });
		}
	}, {
		key: 'applyCoupons',
		value: function applyCoupons() {
			// apply coupons 
			var selected_plan_id = null;
			if (this.props.selected_vip_plan && Object.keys(this.props.selected_vip_plan).length > 0 && !this.props.is_from_payment) {
				// this.props.getCoupons({productId:this.state.is_gold?8:11,gold_plan_id:this.props.selected_vip_plan.id})
				selected_plan_id = this.props.selected_vip_plan.id;
				this.props.history.push('/coupon/vip/' + selected_plan_id + '/' + (this.props.selected_vip_plan.is_gold ? 8 : 11) + '?deal_price=' + this.props.selected_vip_plan.deal_price + '&cart_item=');
			}
		}
	}, {
		key: 'removeCoupon',
		value: function removeCoupon() {
			var _this6 = this;

			var parsed = queryString.parse(this.props.location.search);
			var gold_push_data = {};
			var param = void 0;
			gold_push_data.plan = this.props.selected_vip_plan;
			gold_push_data.dummy_data_type = 'PLAN_PURCHASE';
			gold_push_data.members = [];
			gold_push_data.coupon_data = [];
			gold_push_data.utm_spo_tags = parsed;
			gold_push_data.is_agent = false;
			gold_push_data.coupon_type = this.props.selected_vip_plan.is_gold ? 'gold' : 'vip';
			this.props.currentSelectedVipMembersId.map(function (val, key) {
				if (Object.keys(_this6.props.vipClubMemberDetails).length > 0) {
					param = _this6.props.vipClubMemberDetails[val[key]];
					gold_push_data.members.push(param);
				}
			});
			if (_storage2.default.isAgent()) {
				gold_push_data.is_agent = true;
				this.pushUserData(gold_push_data); // to save proposer/self data to the dummy table in case of agent or proposer self
			}
			this.props.removeVipCoupons(); // to reset coupons to intial state
		}
	}, {
		key: 'removeMemberForm',
		value: function removeMemberForm(id) {
			var new_data = [];
			// this.setState({showConfirmationPopup: 'open',to_be_remove_id:id})
			if (this.props.currentSelectedVipMembersId && this.props.currentSelectedVipMembersId.length) {
				new_data = this.props.currentSelectedVipMembersId.filter(function (x) {
					return x.member_form_id != id;
				});
				this.props.removeMembers(new_data);
				this.setState({ showConfirmationPopup: 'close', to_be_remove_id: '' });
			}
		}
	}, {
		key: 'priceConfirmationPopup',
		value: function priceConfirmationPopup(choice) {
			var _this7 = this;

			var new_data = [];
			if (!choice) {
				this.setState({ showConfirmationPopup: 'close' });
			} else {
				if (this.props.currentSelectedVipMembersId && this.props.currentSelectedVipMembersId.length) {
					new_data = this.props.currentSelectedVipMembersId.filter(function (x) {
						return x.member_form_id != _this7.state.to_be_remove_id;
					});
					this.props.removeMembers(new_data);
					this.setState({ showConfirmationPopup: 'close', to_be_remove_id: '' });
				}
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this8 = this;

			var child = void 0;
			var adult = void 0;
			var userProfile = void 0;
			var proposer_id = 0;
			// let selectedProfileId = parseInt(this.props.USER.defaultProfile) // to be deleted
			if (this.props.USER && this.props.USER.defaultProfile) {
				if (this.props.USER.defaultProfile == 999999) {
					proposer_id = 0;
				} else {
					proposer_id = this.props.USER.defaultProfile;
				}
			}
			var show_extra_fields = false;

			if (this.props.currentSelectedVipMembersId && this.props.currentSelectedVipMembersId.length > 0) {
				this.props.currentSelectedVipMembersId.filter(function (x) {
					return x.isUserSelectedProfile;
				}).map(function (data, i) {
					proposer_id = data[i];
					show_extra_fields = true;
				});
			}
			// let selectedProfileId = parseInt(this.props.USER.defaultProfile) // to be deleted
			var selectedMembersId = 0;

			if (this.props.is_from_payment && Object.keys(this.props.selected_vip_plan).length > 0) {

				userProfile = Object.assign({}, this.props.USER.profiles[this.props.USER.defaultProfile]);

				var n = this.props.selected_vip_plan.total_allowed_members - 1;
				if (n !== 0) {
					child = this.props.currentSelectedVipMembersId.filter(function (x) {
						return x.type === 'adult';
					}).map(function (data, i) {
						// selectedMembersId++
						return _react2.default.createElement(_vipClubFamilyMembers2.default, _extends({}, _this8.props, {
							key: i,
							member_id: data[i],
							id: 'member_' + i,
							param_id: i,
							member_view_id: i,
							validateErrors: _this8.state.validateErrors[data[i]] || [],
							show_selected_profiles: _this8.state.show_selected_profiles,
							member_form_id: i,
							isUserSelectedProfile: false,
							show_extra_fields: show_extra_fields,
							user_email: _this8.state.user_email,
							user_phone_number: _this8.state.user_phone_number,
							is_dob_error: _this8.state.is_dob_error,
							is_tobe_remove_option: data.to_be_remove,
							removeMemberForm: _this8.removeMemberForm.bind(_this8)
						}));
					});
				}
			}
			return _react2.default.createElement(
				'div',
				{ className: 'profile-body-wrap' },
				this.props.isSalesAgent && this.props.isAgent ? '' : _react2.default.createElement(_DesktopProfileHeader2.default, { showPackageStrip: true }),
				this.state.showConfirmationPopup == 'open' ? _react2.default.createElement(_BookingConfirmationPopup2.default, _extends({}, this.props, { priceConfirmationPopup: this.priceConfirmationPopup.bind(this), is_gold: true })) : '',
				_react2.default.createElement(
					'section',
					{ className: 'container container-top-margin cardMainPaddingRmv' },
					_react2.default.createElement(
						'div',
						{ className: 'row no-gutters dsktp-row-gutter' },
						_react2.default.createElement(
							'div',
							{ className: 'col-12 col-md-7 col-lg-7 ins-main-padding' },
							this.state.show_popup ? _react2.default.createElement(
								'div',
								{ className: 'search-el-popup-overlay ' },
								_react2.default.createElement(
									'div',
									{ className: 'search-el-popup' },
									_react2.default.createElement(
										'div',
										{ className: 'widget' },
										_react2.default.createElement(
											'div',
											{ className: 'widget-content padiing-srch-el pb-0' },
											_react2.default.createElement(
												'p',
												{ style: { fontSize: '14px' }, className: 'srch-el-conent' },
												' ',
												this.props.currentSelectedVipMembersId.length,
												' Members Added'
											),
											_react2.default.createElement(
												'div',
												{ className: 'vip-pop-table' },
												_react2.default.createElement(
													'div',
													{ className: 'vip-sn-tbl m-0' },
													this.state.popupMemData && Object.keys(this.state.popupMemData).length > 0 ? Object.entries(this.state.popupMemData).map(function (_ref5) {
														var _ref6 = _slicedToArray(_ref5, 2),
														    key = _ref6[0],
														    val = _ref6[1];

														return val.is_already_user ? '' : _react2.default.createElement(
															'table',
															{ key: key, className: 'vip-acrd-content text-center' },
															_react2.default.createElement(
																'tbody',
																null,
																_react2.default.createElement(
																	'tr',
																	null,
																	_react2.default.createElement(
																		'th',
																		null,
																		'Name'
																	),
																	_react2.default.createElement(
																		'th',
																		null,
																		'Gender'
																	),
																	_react2.default.createElement(
																		'th',
																		null,
																		'DOB'
																	)
																),
																_react2.default.createElement(
																	'tr',
																	null,
																	_react2.default.createElement(
																		'td',
																		{ style: { textTransform: 'capitalize' } },
																		val.first_name
																	),
																	val.title ? _react2.default.createElement(
																		'td',
																		{ style: { 'textTransform': 'capitalize' } },
																		val.title == 'mr.' ? 'm' : 'f'
																	) : val.gender ? _react2.default.createElement(
																		'td',
																		{ style: { 'textTransform': 'capitalize' } },
																		val.gender
																	) : '',
																	_react2.default.createElement(
																		'td',
																		null,
																		val.dob
																	)
																)
															)
														);
													}) : ''
												)
											),
											_react2.default.createElement(
												'div',
												{ className: 'search-el-btn-container' },
												_react2.default.createElement(
													'button',
													{ style: { fontSize: '14px' }, onClick: this.proceedMembersNo.bind(this, 0) },
													'Cancel'
												),
												_react2.default.createElement(
													'button',
													{ style: { fontSize: '14px' }, onClick: this.proceedMembers.bind(this, 1) },
													'Submit'
												)
											)
										)
									)
								)
							) : '',
							_react2.default.createElement(
								'section',
								{ className: 'profile-book-screen' },
								_react2.default.createElement(
									'div',
									null,
									_react2.default.createElement(
										'div',
										{ className: 'insurance-member-container', style: { padding: 0 } },
										_react2.default.createElement(
											'h4',
											{ className: 'mb-0', style: { padding: '2px 0px 6px' } },
											'Member Details'
										),
										_react2.default.createElement(
											'div',
											{ className: 'vip-wrng-mssg' },
											this.props.is_from_payment ? _react2.default.createElement(
												'span',
												null,
												'Member details can\u2019t be edited after submission'
											) : _react2.default.createElement(
												'span',
												null,
												'Gold Membership plan will be activated on the below profile mobile number and can add more members later'
											)
										),
										_react2.default.createElement(
											'div',
											{ className: 'widget goldUserAddon', style: { padding: '10px' } },
											_react2.default.createElement(
												'div',
												{ className: ' insurance-member-details ' + (this.props.is_from_payment ? '' : 'mrt-20') },
												!this.props.is_from_payment ? _react2.default.createElement(_vipClubSelf2.default, _extends({}, this.props, {
													id: 'member_' + proposer_id,
													member_id: proposer_id,
													validateErrors: this.state.validateErrors[proposer_id] || [],
													member_form_id: 0,
													show_selected_profiles: this.state.show_selected_profiles,
													isUserSelectedProfile: false,
													addMembers: this.addMembers.bind(this),
													show_extra_fields: show_extra_fields,
													user_email: this.state.user_email,
													user_phone_number: this.state.user_phone_number,
													is_dob_error: this.state.is_dob_error
												})) : _react2.default.createElement(_vipClubActivatedMemeberDetailsView2.default, this.props)
											)
										),
										!this.props.is_from_payment ? this.props.vipCoupons && this.props.vipCoupons.length > 0 ? _react2.default.createElement(
											'div',
											{ className: 'widget cpn-blur mrb-15 cursor-pointer' },
											_react2.default.createElement(
												'div',
												{ className: 'widget-content d-flex jc-spaceb mt-10' },
												_react2.default.createElement(
													'h4',
													{ className: 'title coupon-text d-flex align-item-center m-0', style: { color: 'green' } },
													_react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/coupon-applied.svg", className: 'visit-time-icon mr-10' }),
													_react2.default.createElement(
														'span',
														null,
														'Coupon Applied'
													)
												),
												_react2.default.createElement(
													'h4',
													{ className: 'title m-0 d-flex align-item-center', style: { color: 'green', marginRight: 13, fontSize: '12px', marginTop: '6px' } },
													_react2.default.createElement(
														'span',
														{ className: 'mr-10' },
														this.props.vipCoupons[0].code
													),
													_react2.default.createElement('img', { style: { width: 17 }, onClick: function onClick(e) {
															_this8.removeCoupon();
															_this8.setState({ is_payment_coupon_applied: false, coupon_discount: null });
														}, src: "/assets" + "/img/customer-icons/cross.svg" })
												)
											)
										) : _react2.default.createElement(
											'div',
											{ className: 'widget cpn-blur mrb-15 cursor-pointer', onClick: this.applyCoupons.bind(this) },
											_react2.default.createElement(
												'div',
												{ className: 'widget-content d-flex jc-spaceb mt-10' },
												_react2.default.createElement(
													'h4',
													{ className: 'title coupon-text d-flex align-item-center m-0' },
													_react2.default.createElement('img', { style: { width: '24px' }, src: "/assets" + "/img/ofr-cpn.svg", className: 'visit-time-icon mr-10' }),
													_react2.default.createElement(
														'span',
														null,
														'HAVE A COUPON?'
													)
												),
												_react2.default.createElement(
													'div',
													{ className: 'visit-time-icon coupon-icon-arrow' },
													_react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/right-arrow.svg" })
												)
											)
										) : '',
										child
									)
								),
								this.props.is_from_payment && this.props.currentSelectedVipMembersId && this.props.currentSelectedVipMembersId.length > 0 && this.props.vip_club_db_data && this.props.vip_club_db_data.data && Object.keys(this.props.vip_club_db_data.data).length && this.props.vip_club_db_data.data.plan && this.props.vip_club_db_data.data.plan.length > 0 && this.props.vip_club_db_data.data.user && Object.keys(this.props.vip_club_db_data.data.user).length && this.props.vip_club_db_data.data.user.plus_members && Object.keys(this.props.vip_club_db_data.data.user.plus_members).length && this.props.vip_club_db_data.data.user.plus_members.length + this.props.currentSelectedVipMembersId.length < this.props.vip_club_db_data.data.plan[0].total_allowed_members ? _react2.default.createElement(
									'button',
									{ className: 'add-mem-blk', onClick: this.addMembers.bind(this, false) },
									' ',
									_react2.default.createElement('img', { className: 'vip-add-img', src: "/assets" + '/img/vip-mem.svg' }),
									'Add Member'
								) : ''
							),
							!_storage2.default.isAgent() && this.props.selected_vip_plan && Object.keys(this.props.selected_vip_plan).length > 0 && !this.props.is_from_payment && !this.props.isAgent ? _react2.default.createElement(
								'button',
								{ className: 'v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round btn-lg text-lg sticky-btn', onClick: this.proceedPlan.bind(this, false) },
								'Continue to Pay \u20B9',
								this.props.selected_vip_plan.deal_price - this.state.coupon_discount,
								_react2.default.createElement('span', { className: 'foot-btn-sub-span' })
							) : !_storage2.default.isAgent() && this.props.selected_vip_plan && Object.keys(this.props.selected_vip_plan).length > 0 && !this.props.is_from_payment && this.props.isAgent === 'false' ? _react2.default.createElement(
								'button',
								{ className: 'v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round btn-lg text-lg sticky-btn', onClick: this.proceedPlan.bind(this, false) },
								'Continue to Pay \u20B9',
								this.props.selected_vip_plan.deal_price - this.state.coupon_discount,
								_react2.default.createElement('span', { className: 'foot-btn-sub-span' })
							) : '',
							!_storage2.default.isAgent() && this.props.selected_vip_plan && Object.keys(this.props.selected_vip_plan).length > 0 && _react2.default.createElement(
								'div',
								{ className: 'v-btn-primary d-flex align-flex-sp-bt fixed horizontal bottom no-round text-lg sticky-btn' },
								this.props.isAgent === 'true' && this.props.isSalesAgent ? _react2.default.createElement(
									_react2.default.Fragment,
									null,
									_react2.default.createElement(
										'div',
										{ className: 'fixed sticky-btn p-0 v-btn  btn-lg horizontal bottom no-round text-lg buttons-addcart-container ' },
										_react2.default.createElement(
											'button',
											{ className: 'add-shpng-cart-btn', 'data-disabled': 'true', onClick: this.proceedPlan.bind(this, true) },
											'Send SMS',
											_react2.default.createElement('span', { className: 'foot-btn-sub-span' })
										),
										_react2.default.createElement(
											'button',
											{ className: 'v-btn-primary book-btn-mrgn-adjust', onClick: this.proceedPlan.bind(this, false) },
											'Continue to Pay \u20B9',
											this.props.selected_vip_plan.deal_price - this.state.coupon_discount,
											_react2.default.createElement('span', { className: 'foot-btn-sub-span' })
										)
									)
								) : !this.props.isAgent && this.props.isAgent === 'false' ? _react2.default.createElement(
									'button',
									{ className: 'v-btn p-3 v-btn-primary', onClick: this.proceedPlan.bind(this, false) },
									'Continue to Pay \u20B9',
									this.props.selected_vip_plan.deal_price - this.state.coupon_discount,
									_react2.default.createElement('span', { className: 'foot-btn-sub-span' })
								) : ''
							),
							!_storage2.default.isAgent() && this.props.selected_vip_plan && Object.keys(this.props.selected_vip_plan).length > 0 && this.props.is_from_payment && !this.props.isSalesAgent && !this.props.isAgent ? _react2.default.createElement(
								'button',
								{ id: 'submit_buy', className: 'v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round btn-lg text-lg sticky-btn', onClick: this.proceedPlan.bind(this, false) },
								'Done',
								_react2.default.createElement('span', { className: 'foot-btn-sub-span' })
							) : '',
							_storage2.default.isAgent() && this.props.selected_vip_plan && Object.keys(this.props.selected_vip_plan).length > 0 && this.props.is_from_payment && !this.props.isSalesAgent && !this.props.isAgent ? _react2.default.createElement(
								'button',
								{ className: 'v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round btn-lg text-lg sticky-btn', onClick: this.proceedPlan.bind(this, true) },
								'Send SMS',
								_react2.default.createElement('span', { className: 'foot-btn-sub-span' })
							) : _storage2.default.isAgent() && this.props.selected_vip_plan && Object.keys(this.props.selected_vip_plan).length > 0 && !this.props.is_from_payment && !this.props.isSalesAgent && !this.props.isAgent ? _react2.default.createElement(
								_react2.default.Fragment,
								null,
								_react2.default.createElement(
									'div',
									{ className: 'fixed sticky-btn p-0 v-btn  btn-lg horizontal bottom no-round text-lg buttons-addcart-container' },
									_react2.default.createElement(
										'button',
										{ className: 'v-btn-primary book-btn-mrgn-adjust', onClick: this.proceedPlan.bind(this, true) },
										'Send SMS',
										_react2.default.createElement('span', { className: 'foot-btn-sub-span' })
									),
									_react2.default.createElement(
										'button',
										{ className: 'add-shpng-cart-btn', onClick: this.proceedPlan.bind(this, true, { sendOnWhatsup: true }) },
										_react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/wa-logo-sm.png' }),
										'Send on Whatsapp',
										_react2.default.createElement('span', { className: 'foot-btn-sub-span' })
									)
								),
								'\xB8'
							) : ''
						),
						_react2.default.createElement(_ChatPanel2.default, null)
					)
				),
				_react2.default.createElement(_staticDisclaimer2.default, { isVip: true }),
				this.state.paymentData ? _react2.default.createElement(_paymentForm2.default, { paymentData: this.state.paymentData, refs: 'opd' }) : ""
			);
		}
	}]);

	return VipClubMemberDetailsView;
}(_react2.default.Component);

exports.default = VipClubMemberDetailsView;

/***/ }),

/***/ "./dev/js/components/vipClub/vipClubSelf.js":
/*!**************************************************!*\
  !*** ./dev/js/components/vipClub/vipClubSelf.js ***!
  \**************************************************/
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

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _insuranceProofs = __webpack_require__(/*! ./insuranceProofs.js */ "./dev/js/components/vipClub/insuranceProofs.js");

var _insuranceProofs2 = _interopRequireDefault(_insuranceProofs);

var _vipClubPopup = __webpack_require__(/*! ./vipClubPopup.js */ "./dev/js/components/vipClub/vipClubPopup.js");

var _vipClubPopup2 = _interopRequireDefault(_vipClubPopup);

var _newDateSelector = __webpack_require__(/*! ../commons/newDateSelector.js */ "./dev/js/components/commons/newDateSelector.js");

var _newDateSelector2 = _interopRequireDefault(_newDateSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VipProposer = function (_React$Component) {
	_inherits(VipProposer, _React$Component);

	function VipProposer(props) {
		_classCallCheck(this, VipProposer);

		var _this = _possibleConstructorReturn(this, (VipProposer.__proto__ || Object.getPrototypeOf(VipProposer)).call(this, props));

		_this.state = {
			name: '',
			email: _this.props.user_email,
			gender: '',
			dob: '',
			id: _this.props.member_id,
			profile_flag: true,
			profile_id: null,
			profile: '',
			member_form_id: _this.props.member_form_id,
			userProfiles: {},
			showPopup: false,
			isUserSelectedProfile: _this.props.isUserSelectedProfile,
			phone_number: _this.props.user_phone_number,
			isDobValidated: false,
			is_tobe_dummy_user: false,
			isForceUpdateDob: false
		};
		return _this;
	}

	_createClass(VipProposer, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var profile = void 0;
			var isDummyUser = void 0;
			if (this.props.USER && this.props.USER.profiles && Object.keys(this.props.USER.profiles).length > 0 && this.props.vipClubMemberDetails[this.props.member_id] && !this.props.is_from_payment) {
				if (!isDummyUser) {
					profile = Object.assign({}, this.props.vipClubMemberDetails[this.props.member_id]);
				} else {
					profile = Object.assign({}, this.props.vipClubMemberDetails[this.props.member_id]);
				}
				if (Object.keys(profile).length > 0) {
					isDummyUser = this.props.USER.profiles[this.props.USER.defaultProfile].isDummyUser;
					if (profile.isDummyUser) {
						profile.id = 0;
						this.setState({ id: 0 }, function () {
							_this2.getUserDetails(profile); // fill user details in form
						});
					} else {
						this.setState({ id: profile.id }, function () {
							_this2.getUserDetails(profile); // fill user details in form
						});
					}
				}
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(props) {
			var _this3 = this;

			var self = this;
			if (props.USER && props.USER.profiles && Object.keys(props.USER.profiles).length > 0 && this.state.profile_flag && !props.is_from_payment) {
				var isDummyUser = props.USER.profiles[props.USER.defaultProfile].isDummyUser;
				if (Object.keys(props.vipClubMemberDetails).length > 0) {
					// retrieve already member details from user store
					var profile = void 0;
					if (!isDummyUser) {
						profile = Object.assign({}, props.vipClubMemberDetails[props.member_id]);
					} else {
						profile = Object.assign({}, props.vipClubMemberDetails[props.member_id]);
					}
					if (profile && Object.keys(profile).length) {
						this.setState({ id: profile.id, profile_flag: false }, function () {
							_this3.getUserDetails(profile); // fill user details in form	
						});
					}
				} else if (props.USER && props.USER.profiles && Object.keys(props.USER.profiles).length > 0 && props.USER.profiles[props.USER.defaultProfile]) {
					var _profile = void 0;
					var exitsting_user_profile = void 0;
					if (props.savedMemberData && props.savedMemberData.length > 0) {
						// retrieve already member details from user dummy table in case of agent
						if (props.USER && Object.keys(props.USER).length && props.USER.profiles && Object.keys(props.USER.profiles).length) {
							exitsting_user_profile = Object.assign({}, props.USER.profiles[props.member_id]);
						}

						if (props.savedMemberData.length == 1 && props.savedMemberData[0] == null) {
							_profile = _extends({}, this.state);
							_profile.id = this.props.member_id;
							if (_profile && Object.keys(_profile).length > 0) {
								this.setState({ profile_flag: false });
								this.handleSubmit();
							}
						} else {
							_profile = props.savedMemberData.filter(function (x) {
								return x.id == props.member_id;
							});
						}
						if (_profile && _profile.length > 0) {
							_profile = _profile[0];
							if (exitsting_user_profile && Object.keys(exitsting_user_profile).length) {
								_profile.name = exitsting_user_profile.name;
								_profile.dob = exitsting_user_profile.dob;
							}
							this.setState({ id: _profile.id, profile_flag: false }, function () {
								_this3.getUserDetails(_profile); // fill user details in form
							});
						}
					} else {
						// retrieve already member details from user profiles
						_profile = Object.assign({}, props.USER.profiles[props.USER.defaultProfile]);
						if (_profile && Object.keys(_profile).length) {
							if (_profile.isDummyUser) {
								_profile.id = 0;
								this.setState({ id: 0, profile_flag: false }, function () {
									_this3.getUserDetails(_profile); // fill user details in form	
								});
							} else {
								this.setState({ id: _profile.id, profile_flag: false }, function () {
									_this3.getUserDetails(_profile); // fill user details in form
								});
							}
						}
					}
				}
			}
		}
	}, {
		key: 'togglePopup',
		value: function togglePopup(newProfileid, member_id, newProfile) {
			var _this4 = this;

			//select from profile
			if (newProfileid !== '') {
				this.setState(_extends({}, newProfile, { profile_flag: true }));
				newProfile.isUserSelectedProfile = true;
				newProfile.is_tobe_dummy_user = false;
				this.props.selectVipUserProfile(newProfileid, member_id, newProfile, 0); // select profile from option
				this.setState({
					showPopup: !this.state.showPopup,
					profile_id: newProfileid,
					id: newProfileid,
					isForceUpdateDob: true
				}, function () {
					_this4.handleSubmit();
				});
			} else {
				this.setState({ showPopup: !this.state.showPopup, isForceUpdateDob: false });
			}
		}
	}, {
		key: 'hideSelectProfilePopup',
		value: function hideSelectProfilePopup() {
			this.setState({
				showPopup: false
			});
		}
	}, {
		key: 'getUserDetails',
		value: function getUserDetails(profile) {
			var _this5 = this;

			var empty_state = {};
			if (profile.is_tobe_dummy_user) {
				this.setState(_extends({}, empty_state, { name: '' }), function () {
					_this5.handleSubmit();
				});
			}
			if (Object.keys(profile).length > 0) {
				if (profile.id) {
					this.setState({ profile_id: profile.id ? profile.id : '' });
				}
				if (profile.profile) {
					this.setState({ profile_id: profile.profile ? profile.profile : '' });
				}
				if (profile.gender == 'm') {
					this.setState({ gender: profile.gender ? profile.gender : '', title: 'mr.' });
				} else if (profile.gender == 'f') {
					this.setState({ gender: profile.gender ? profile.gender : '', title: 'miss' });
				}

				if (profile.name == 'User' || profile.name == 'user') {
					this.setState({ name: '' });
				} else if (profile.name) {
					this.setState({ name: profile.name ? profile.name : '' });
				}
				if (this.props.is_from_payment) {
					if (profile.first_name) {
						this.setState({ name: profile.first_name ? profile.first_name : profile.name ? profile.name : '' });
					}
				}
				if (profile.is_tobe_dummy_user) {
					this.setState({ is_tobe_dummy_user: profile.is_tobe_dummy_user });
				}
				if (this.props.user_email) {
					this.setState({ email: this.props.user_email });
				}
				if (profile.email) {
					this.setState({ email: profile.email });
				}
				this.setState({
					dob: profile.dob ? profile.dob : ''
				}, function () {
					_this5.handleSubmit();
				});
			}
		}
	}, {
		key: 'handleChange',
		value: function handleChange(field, event) {
			this.setState(_defineProperty({}, event.target.getAttribute('data-param'), event.target.value));
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit() {
			var profile = Object.assign({}, this.props.USER.profiles[this.props.USER.defaultProfile]);
			if (!profile.isDummyUser && this.props.member_id > 0) {
				this.setState({ profile_id: this.props.member_id });
			} else {
				this.setState({ profile_id: null });
			}
			var self_data = this.state;
			this.props.userDetails('self_data', self_data);
		}
	}, {
		key: 'handleNameCharacters',
		value: function handleNameCharacters(field, event) {
			if (field == 'name') {
				if (this.state.name.length == 50) {
					event.preventDefault();
				}
			}
			// else if (field == 'last_name') {
			// 	if (this.state.last_name.length == 50) {
			// 		event.preventDefault();
			// 	}
			// }
		}
	}, {
		key: 'handleEmail',
		value: function handleEmail() {
			var formIsValid = true;
			if (this.state.email != '') {
				var validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				validEmail = validEmail.test(this.state.email);
				if (validEmail) {
					this.handleSubmit();
				} else {
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter valid Email" });
				}
			}
		}
	}, {
		key: 'submitNewDob',
		value: function submitNewDob(type, newDate, isValidDob) {
			var self = this;
			self.setState({
				dob: newDate, isDobValidated: isValidDob
			}, function () {
				self.handleSubmit();
			});
		}
	}, {
		key: 'unSetForceUpdateDob',
		value: function unSetForceUpdateDob() {
			this.setState({ isForceUpdateDob: false });
		}
	}, {
		key: 'render',
		value: function render() {
			var _this6 = this;

			console.log(this.props.member_id);
			var self = this;
			var commonMsgSpan = _react2.default.createElement(
				'span',
				{ className: 'fill-error-span' },
				'*This is a mandatory field'
			);
			var isDummyUser = void 0;
			if (this.props.USER.profiles && Object.keys(this.props.USER.profiles).length && this.props.USER.profiles[this.props.USER.defaultProfile]) {
				isDummyUser = this.props.USER.profiles[this.props.USER.defaultProfile].isDummyUser;
			}
			return _react2.default.createElement(
				_react2.default.Fragment,
				null,
				_react2.default.createElement(
					'div',
					{ className: 'row no-gutters', id: isDummyUser ? 'member_0' : 'member_' + this.props.member_id },
					this.props.validateErrors.indexOf('title') > -1 ? commonMsgSpan : '',
					_react2.default.createElement(
						'div',
						{ className: 'd-flex' },
						_react2.default.createElement(
							'p',
							{ className: 'label-names-buttons ' + (this.state.gender == 'm' ? 'btn-active' : ''), name: 'gender', checked: this.state.gender == 'm', onClick: function onClick() {
									return _this6.setState({ 'gender': 'm' }, function () {
										_this6.handleSubmit();
									});
								}, onBlur: this.handleChange.bind(this) },
							'Male'
						),
						_react2.default.createElement(
							'p',
							{ className: 'label-names-buttons ' + (this.state.gender == 'f' ? 'btn-active' : ''), name: 'gender', checked: this.state.gender == 'f', onClick: function onClick() {
									return _this6.setState({ 'gender': 'f' }, function () {
										_this6.handleSubmit();
									});
								}, onBlur: this.handleChange.bind(this) },
							'Female'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-12' },
						_react2.default.createElement(
							'div',
							{ className: 'ins-form-group inp-margin-right ' },
							_react2.default.createElement('input', {
								style: { 'textTransform': 'capitalize' },
								type: 'text',
								id: 'name_' + this.props.member_id,
								className: 'form-control ins-form-control ' + (this.props.validateErrors.indexOf('name') > -1 ? 'fill-error' : ''), required: true,
								autoComplete: 'first_name',
								name: 'name',
								value: this.state.name,
								'data-param': 'name',
								onChange: this.handleChange.bind(this, 'name'),
								onBlur: this.handleSubmit.bind(this)
								// disabled={this.props.is_from_payment || this.state.disableFName ? 'disabled' : ''} 
								, onKeyPress: this.handleNameCharacters.bind(this, 'name')
							}),
							_react2.default.createElement(
								'label',
								{ className: this.props.is_from_payment /*|| this.state.disableFName*/ ? 'form-control-placeholder datePickerLabel' : 'form-control-placeholder', htmlFor: 'name_' + this.props.member_id },
								_react2.default.createElement('span', { className: 'labelDot' }),
								'Name'
							),
							_react2.default.createElement('img', { src: "/assets" + "/img/user-01.svg" })
						),
						this.props.validateErrors.indexOf('name') > -1 ? commonMsgSpan : ''
					),
					!this.props.is_from_payment && !this.props.user_email ? _react2.default.createElement(
						'div',
						{ className: 'col-12' },
						_react2.default.createElement(
							'div',
							{ className: 'ins-form-group' },
							_react2.default.createElement('input', {
								type: 'text', id: 'emails_' + this.props.member_id,
								className: 'form-control ins-form-control ' + (this.props.validateErrors.indexOf('email') > -1 ? 'fill-error' : ''), required: true,
								autoComplete: 'email',
								name: 'email',
								value: this.props.user_email ? this.props.user_email : this.state.email,
								'data-param': 'email',
								onChange: this.handleChange.bind(this, 'email'),
								onBlur: this.handleEmail.bind(this)
								// disabled={this.props.is_from_payment || this.state.disableEmail ? 'disabled' : ''}  
							}),
							_react2.default.createElement(
								'label',
								{ className: this.props.is_from_payment /*|| this.state.disableEmail*/ ? 'form-control-placeholder datePickerLabel' : 'form-control-placeholder', htmlFor: 'emails_' + this.props.member_id },
								_react2.default.createElement('span', { className: 'labelDot' }),
								'Email'
							),
							_react2.default.createElement('img', { src: "/assets" + "/img/mail-01.svg" })
						),
						this.props.validateErrors.indexOf('email') > -1 ? commonMsgSpan : ''
					) : '',
					_react2.default.createElement(
						'div',
						{ className: 'col-12' },
						_react2.default.createElement(
							'form',
							null,
							_react2.default.createElement(_newDateSelector2.default, _extends({}, this.props, { getNewDate: this.submitNewDob.bind(this), is_dob_error: this.props.is_dob_error, old_dob: this.state.dob, is_gold: true, user_form_id: this.props.member_id, isForceUpdateDob: this.state.isForceUpdateDob, unSetForceUpdateDob: this.unSetForceUpdateDob.bind(this) })),
							this.props.validateErrors.indexOf('dob') > -1 ? commonMsgSpan : ''
						)
					),
					!isDummyUser ? _react2.default.createElement(
						'div',
						{ className: 'col-12' },
						_react2.default.createElement(
							'div',
							{ className: 'orSeparator' },
							_react2.default.createElement(
								'span',
								null,
								'or'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'sub-form-hed-click', style: { justifyContent: 'space-between' }, onClick: function onClick() {
									return _this6.setState({
										showPopup: true, profile_flag: true, isForceUpdateDob: false });
								} },
							'Select Profile/Add New Profile',
							_react2.default.createElement('img', { src: "/assets" + "/img/rgt-arw.svg" })
						)
					) : ''
				),
				this.state.showPopup ? _react2.default.createElement(_vipClubPopup2.default, _extends({}, this.props, {
					currentSelectedVipMembersId: this.props.currentSelectedVipMembersId,
					member_id: this.props.member_id,
					closePopup: this.togglePopup.bind(this),
					isSelectprofile: true,
					vipClubMemberDetails: this.props.vipClubMemberDetails[this.props.member_id],
					hideSelectProfilePopup: this.hideSelectProfilePopup.bind(this),
					is_child_only: this.props.is_child_only,
					is_see_more: false
				})) : ''
			);
		}
	}]);

	return VipProposer;
}(_react2.default.Component);

exports.default = VipProposer;

/***/ }),

/***/ "./dev/js/containers/vipClub/VipClubMemberDetails.js":
/*!***********************************************************!*\
  !*** ./dev/js/containers/vipClub/VipClubMemberDetails.js ***!
  \***********************************************************/
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

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _vipClubMemberDetailsView = __webpack_require__(/*! ../../components/vipClub/vipClubMemberDetailsView.js */ "./dev/js/components/vipClub/vipClubMemberDetailsView.js");

var _vipClubMemberDetailsView2 = _interopRequireDefault(_vipClubMemberDetailsView);

var _DesktopProfileHeader = __webpack_require__(/*! ../../components/commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _Loader = __webpack_require__(/*! ../../components/commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var VipClubMemberDetails = function (_React$Component) {
    _inherits(VipClubMemberDetails, _React$Component);

    function VipClubMemberDetails(props) {
        _classCallCheck(this, VipClubMemberDetails);

        var _this = _possibleConstructorReturn(this, (VipClubMemberDetails.__proto__ || Object.getPrototypeOf(VipClubMemberDetails)).call(this, props));

        var parsed = queryString.parse(_this.props.location.search);
        _this.state = {
            isSalesAgent: parsed.utm_source,
            isAgent: parsed.is_agent || false,
            // is_gold:parsed.is_gold || false,
            is_gold: _this.props.match.url.includes('vip-gold-details'),
            is_from_payment: parsed.is_from_payment ? parsed.is_from_payment : false,
            is_vip_gold: parsed.is_vip_gold ? parsed.is_vip_gold : false,
            is_navigate_to_form: false,
            is_user_alrdy_gold: false
        };
        return _this;
    }

    _createClass(VipClubMemberDetails, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var extraParams = {};
            var data = {};
            data.selectedLocation = this.props.selectedLocation;
            data.isSalesAgent = this.state.isSalesAgent;
            data.isAgent = this.state.isAgent;
            data.is_gold = this.state.is_gold;
            data.all = this.state.is_vip_gold;
            data.fromWhere = 'user_form';
            if (this.state.is_from_payment) {
                extraParams['user_type'] = 'gold';
                this.setState({ is_navigate_to_form: true });
                this.props.retrieveMembersData('PLAN_PURCHASE', extraParams);
            } else {
                this.props.getVipList(false, data, function (resp) {
                    // to get vip plan list
                    console.log(resp);
                    if (!resp.certificate) {
                        extraParams['user_type'] = 'gold';
                        _this2.setState({ is_navigate_to_form: true });
                        _this2.props.retrieveMembersData('PLAN_PURCHASE', extraParams); // to retrieve already pushed member data in case of agent or proposer it self
                    } else {
                        _this2.setState({ is_user_alrdy_gold: true });
                    }
                });
            }
            // if (this.props.selected_vip_plan && Object.keys(this.props.selected_vip_plan).length > 0){
            //     extraParams['user_type']= this.props.selected_vip_plan.is_gold?'gold':'vip'
            // }
            // extraParams['user_type']= this.props.selected_vip_plan.is_gold?'gold':'vip'
            // this.props.citiesData()
        }
    }, {
        key: 'render',
        value: function render() {
            var parsed = queryString.parse(this.props.location.search);
            if (this.props.showVipDetailsView && this.state.is_navigate_to_form) {
                return _react2.default.createElement(_vipClubMemberDetailsView2.default, _extends({}, this.props, { is_from_payment: this.state.is_from_payment, isSalesAgent: this.state.isSalesAgent, isAgent: this.state.isAgent, is_gold: this.state.is_gold }));
            } else if (_storage2.default.checkAuth() && this.state.is_user_alrdy_gold && !this.state.is_from_payment) {
                // if already gold or vip user redirect to dashboard
                this.props.history.replace('/vip-club-activated-details');
                return _react2.default.createElement('div', null);
            } else {
                if (this.state.isSalesAgent && this.state.isAgent) {
                    return _react2.default.createElement(
                        'div',
                        { className: 'profile-body-wrap' },
                        _react2.default.createElement(_Loader2.default, null)
                    );
                } else {
                    return _react2.default.createElement(
                        'div',
                        { className: 'profile-body-wrap' },
                        _react2.default.createElement(_DesktopProfileHeader2.default, { showPackageStrip: true }),
                        _react2.default.createElement(_Loader2.default, null)
                    );
                }
            }
        }
    }]);

    return VipClubMemberDetails;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    var USER = state.USER;
    var selectedLocation = state.SEARCH_CRITERIA_OPD.selectedLocation;
    var _state$USER = state.USER,
        user_cities = _state$USER.user_cities,
        common_utm_tags = _state$USER.common_utm_tags;
    var _state$VIPCLUB = state.VIPCLUB,
        vipClubList = _state$VIPCLUB.vipClubList,
        selected_vip_plan = _state$VIPCLUB.selected_vip_plan,
        vipClubMemberDetails = _state$VIPCLUB.vipClubMemberDetails,
        currentSelectedVipMembersId = _state$VIPCLUB.currentSelectedVipMembersId,
        vip_club_db_data = _state$VIPCLUB.vip_club_db_data,
        members_proofs = _state$VIPCLUB.members_proofs,
        showVipDetailsView = _state$VIPCLUB.showVipDetailsView,
        savedMemberData = _state$VIPCLUB.savedMemberData,
        vipCoupons = _state$VIPCLUB.vipCoupons;

    return {
        vipClubList: vipClubList, selected_vip_plan: selected_vip_plan, vipClubMemberDetails: vipClubMemberDetails, currentSelectedVipMembersId: currentSelectedVipMembersId, user_cities: user_cities, USER: USER, vip_club_db_data: vip_club_db_data, members_proofs: members_proofs, showVipDetailsView: showVipDetailsView, savedMemberData: savedMemberData, vipCoupons: vipCoupons, common_utm_tags: common_utm_tags, selectedLocation: selectedLocation
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        userDetails: function userDetails(self_data, criteria, forceadd) {
            return dispatch((0, _index.userDetails)(self_data, criteria, forceadd));
        },
        saveCurrentSelectedVipMembers: function saveCurrentSelectedVipMembers(membersId, callback) {
            return dispatch((0, _index.saveCurrentSelectedVipMembers)(membersId, callback));
        },
        citiesData: function citiesData() {
            return dispatch((0, _index.citiesData)());
        },
        selectVipUserProfile: function selectVipUserProfile(newProfileid, member_id, newProfile, param_id) {
            return dispatch((0, _index.selectVipUserProfile)(newProfileid, member_id, newProfile, param_id));
        },
        vipClubPay: function vipClubPay(criteria, callback) {
            return dispatch((0, _index.vipClubPay)(criteria, callback));
        },
        addVipMembersData: function addVipMembersData(criteria, callback) {
            return dispatch((0, _index.addVipMembersData)(criteria, callback));
        },
        uploadVipProof: function uploadVipProof(profileData, profileId, imgType, cb) {
            return dispatch((0, _index.uploadVipProof)(profileData, profileId, imgType, cb));
        },
        storeVipMemberProofs: function storeVipMemberProofs(imgUrl, cb) {
            return dispatch((0, _index.storeVipMemberProofs)(imgUrl, cb));
        },
        removeVipMemberProof: function removeVipMemberProof(criteria) {
            return dispatch((0, _index.removeVipMemberProof)(criteria));
        },
        pushMembersData: function pushMembersData(criteria) {
            return dispatch((0, _index.pushMembersData)(criteria));
        },
        retrieveMembersData: function retrieveMembersData(type, extraParams, callback) {
            return dispatch((0, _index.retrieveMembersData)(type, extraParams, callback));
        },
        selectVipClubPlan: function selectVipClubPlan(plan, criteria, callback) {
            return dispatch((0, _index.selectVipClubPlan)(plan, criteria, callback));
        },
        resetVipData: function resetVipData() {
            return dispatch((0, _index.resetVipData)());
        },
        vipPlusLead: function vipPlusLead(data) {
            return dispatch((0, _index.vipPlusLead)(data));
        },
        sendAgentBookingURL: function sendAgentBookingURL(orderId, type, purchase_type, query_data, extraParams, cb) {
            return dispatch((0, _index.sendAgentBookingURL)(orderId, type, purchase_type, query_data, extraParams, cb));
        },
        clearVipMemeberData: function clearVipMemeberData() {
            return dispatch((0, _index.clearVipMemeberData)());
        },
        getCoupons: function getCoupons(data) {
            return dispatch((0, _index.getCoupons)(data));
        },
        applyCouponDiscount: function applyCouponDiscount(data) {
            return dispatch((0, _index.applyCouponDiscount)(data));
        },
        removeVipCoupons: function removeVipCoupons() {
            return dispatch((0, _index.removeVipCoupons)());
        },
        getVipList: function getVipList(is_endorsement, data, callback) {
            return dispatch((0, _index.getVipList)(is_endorsement, data, callback));
        },
        removeMembers: function removeMembers(data) {
            return dispatch((0, _index.removeMembers)(data));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(VipClubMemberDetails);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL2Jvb2tpbmdTdW1tYXJ5L0Jvb2tpbmdDb25maXJtYXRpb25Qb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy92aXBDbHViL2luc3VyYW5jZVByb29mcy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy92aXBDbHViL3ZpcENsdWJBY3RpdmF0ZWRNZW1lYmVyRGV0YWlsc1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvdmlwQ2x1Yi92aXBDbHViRmFtaWx5TWVtYmVycy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy92aXBDbHViL3ZpcENsdWJNZW1iZXJEZXRhaWxzVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy92aXBDbHViL3ZpcENsdWJTZWxmLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL3ZpcENsdWIvVmlwQ2x1Yk1lbWJlckRldGFpbHMuanMiXSwibmFtZXMiOlsiTG9hZGVyIiwicHJvcHMiLCJjbGFzc1R5cGUiLCJpRnJhbWVQb3B1cCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQm9va2luZ0NvbmZpcm1hdGlvblBvcHVwIiwic3RhdGUiLCJpc19nb2xkIiwicHJpY2VDb25maXJtYXRpb25Qb3B1cCIsImJpbmQiLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJDb21wcmVzcyIsIkluc3VyYW5jZVByb29mcyIsImRhdGFVcmwiLCJ6b29tSW1hZ2VVcmwiLCJ6b29tSW1hZ2UiLCJvcGVuUGRmIiwib3BlblBkZlVybCIsImlzTG9hZGluZyIsIm1lbWJlcl9pZCIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsImZpbGUiLCJuYW1lIiwiaW5jbHVkZXMiLCJmaW5pc2hDcm9wIiwiY29tcHJlc3MiLCJxdWFsaXR5IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJ0aGVuIiwicmVzdWx0cyIsImltZzEiLCJiYXNlNjRzdHIiLCJkYXRhIiwiaW1nRXh0IiwiZXh0IiwiY29udmVydEJhc2U2NFRvRmlsZSIsImdldEJhc2U2NCIsInNldFN0YXRlIiwiY2F0Y2giLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJ0ZXh0IiwiY2IiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJmaWxlX2Jsb2JfZGF0YSIsImRhdGFVUkl0b0Jsb2IiLCJtZW1fZGF0YSIsImV4aXN0aW5nRGF0YSIsImltZ190YWciLCJmb3JtX2RhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInVwbG9hZFZpcFByb29mIiwiZXJyIiwiZGF0YUlkIiwiaWQiLCJpc19wcmltYXJ5X3VzZXIiLCJpbWdfcGF0aF9pZHMiLCJtZW1iZXJzX3Byb29mcyIsImxlbmd0aCIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJrZXkiLCJ2YWx1ZSIsInB1c2giLCJpbWFnZSIsInByb29mX2ZpbGUiLCJ2YWwiLCJzdG9yZVZpcE1lbWJlclByb29mcyIsImRhdGFVUkkiLCJiaW5hcnkiLCJhdG9iIiwic3BsaXQiLCJhcnJheSIsImkiLCJjaGFyQ29kZUF0IiwiQmxvYiIsIlVpbnQ4QXJyYXkiLCJ0eXBlIiwiaW1nIiwiVXBsb2FkZWRfaW1hZ2VfZGF0YSIsImZpbHRlciIsIngiLCJyZW1vdmVWaXBNZW1iZXJQcm9vZiIsImltZ191cmwiLCJwZGZfdXJsIiwic2hvd191cGxvYWQiLCJtYXJnaW4iLCJBU1NFVFNfQkFTRV9VUkwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xpY2siLCJkaXNwbGF5IiwicGlja0ZpbGUiLCJyZW1vdmVJbWFnZSIsIndpZHRoIiwiVmlwQ2x1YkFjdGl2YXRlZE1lbWJlckRldGFpbHMiLCJ0b2dnbGVUYWJUeXBlIiwidGFic1ZhbHVlIiwidmlwX2NsdWJfZGJfZGF0YSIsInVzZXIiLCJrZXlzIiwicGx1c19tZW1iZXJzIiwicmVsYXRpb24iLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwidGl0bGUiLCJnZW5kZXIiLCJkb2IiLCJlbWFpbCIsIlZpcFByb3Bvc2VyRmFtaWx5Iiwic2hvd1BvcHVwIiwic2V0RGVmYXVsdCIsInByb2ZpbGVfaWQiLCJpc19kaXNhYmxlIiwibWVtYmVyX2Zvcm1faWQiLCJpc19hbHJlYWR5X3VzZXIiLCJpc1VzZXJTZWxlY3RlZFByb2ZpbGUiLCJpc0RvYlZhbGlkYXRlZCIsImlzX2RvYl9lcnJvciIsImlzRm9yY2VVcGRhdGVEb2IiLCJzZWxmIiwicHJvZmlsZSIsImlzX2Zyb21fcGF5bWVudCIsInZpcENsdWJNZW1iZXJEZXRhaWxzIiwiYXNzaWduIiwibmV4dFByb2ZpbGUiLCJKU09OIiwic3RyaW5naWZ5IiwiaGFuZGxlU3VibWl0IiwiZmllbGQiLCJldmVudCIsImdldEF0dHJpYnV0ZSIsInJlbGF0aW9uX2lkIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJzZWxmX2RhdGEiLCJzbGljZSIsInVzZXJEZXRhaWxzIiwibmV3UHJvZmlsZWlkIiwibmV3UHJvZmlsZSIsInNlbGVjdFZpcFVzZXJQcm9maWxlIiwicGFyYW1faWQiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld0RhdGUiLCJpc1ZhbGlkRG9iIiwidXNlcl9mb3JtX2lkIiwidmFsaWRhdGVFcnJvcnMiLCJjb21tb25Nc2dTcGFuIiwicGFkZGluZyIsIm1hcmdpbkJvdHRvbSIsIm1lbWJlcl92aWV3X2lkIiwiaXNfdG9iZV9yZW1vdmVfb3B0aW9uIiwicmVtb3ZlTWVtYmVyRm9ybSIsImhhbmRsZUNoYW5nZSIsImluZGV4T2YiLCJoYW5kbGVOYW1lQ2hhcmFjdGVycyIsInN1Ym1pdE5ld0RvYiIsInVuU2V0Rm9yY2VVcGRhdGVEb2IiLCJzaG93X3NlbGVjdGVkX3Byb2ZpbGVzIiwiY3VycmVudFNlbGVjdGVkVmlwTWVtYmVyc0lkIiwidG9nZ2xlUG9wdXAiLCJoaWRlU2VsZWN0UHJvZmlsZVBvcHVwIiwiVmlwQ2x1Yk1lbWJlckRldGFpbHNWaWV3Iiwic2F2ZU1lbWJlcnMiLCJwYXltZW50RGF0YSIsInNob3dfcG9wdXAiLCJwcm9jZWVkIiwicG9wdXBNZW1EYXRhIiwiY291cG9uX2NvZGUiLCJjb3Vwb25faWQiLCJpc19wYXltZW50X2NvdXBvbl9hcHBsaWVkIiwiY291cG9uX2Rpc2NvdW50IiwidXNlcl9lbWFpbCIsInVzZXJfcGhvbmVfbnVtYmVyIiwic2hvd0NvbmZpcm1hdGlvblBvcHVwIiwidG9fYmVfcmVtb3ZlX2lkIiwid2luZG93Iiwic2Nyb2xsVG8iLCJzZWxlY3RlZF92aXBfcGxhbiIsInZpcENvdXBvbnMiLCJhcHBseUNvdXBvbkRpc2NvdW50IiwicHJvZHVjdElkIiwiY291cG9uQ29kZSIsImNvZGUiLCJjb3Vwb25JZCIsInBsYW5faWQiLCJkZWFsX3ByaWNlIiwicmVzcCIsImRpc2NvdW50IiwiVVNFUiIsInByb2ZpbGVzIiwiZGVmYXVsdFByb2ZpbGUiLCJwaG9uZV9udW1iZXIiLCJpc0Zyb21EZWZhdWx0VXNlciIsIm1lbWJlcl9kdW1teV9kYXRhIiwiYWdlIiwiY2FyZCIsIm1lbWJlcnNJZCIsImNsZWFyVmlwTWVtZWJlckRhdGEiLCJ0b19iZV9yZW1vdmUiLCJpc190b2JlX2R1bW15X3VzZXIiLCJzYXZlQ3VycmVudFNlbGVjdGVkVmlwTWVtYmVycyIsInBsYW4iLCJ0b3RhbF9hbGxvd2VkX21lbWJlcnMiLCJjb25jYXQiLCJjdXJyZW50Rm9ybUlkc0NvdW50IiwiaXNEdW1teVVzZXIiLCJsb2dpblVzZXIiLCJpc0RlZmF1bHRVc2VyIiwic2F2ZWRNZW1iZXJEYXRhIiwiaXNfZGVmYXVsdF91c2VyIiwicHJvZmlsZUxlbmd0aCIsImN1cnJlbnRTZWxlY3RlZFByb2ZpbGVzIiwic2hvd19zZWxlY3RlZF9wcm9maWxlIiwiYWxyZWFkeV91c2Vyc19pZHMiLCJwYXJzZUludCIsInN0YXR1cyIsInNldFRpbWVvdXQiLCJmb3JtIiwic3VibWl0IiwiaXNTbXMiLCJleHRyYURhdGFQYXJhbXMiLCJzdWNjZXNzX2lkIiwicHVzaERhdGEiLCJzZWxmX3Byb2ZpbGUiLCJtZW1iZXJfcmVmIiwidmFsaWRhdGluZ0Vycm9ycyIsInBhcmFtIiwicGFyc2VkIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsIm1lbWJlcnMiLCJ1dG1fc3BvX3RhZ3MiLCJkdW1teV9kYXRhX3R5cGUiLCJjb3Vwb25fZGF0YSIsImlzX2FnZW50IiwiZmllbGRzIiwidmFsaWRFbWFpbCIsInRlc3QiLCJmb3JFYWNoIiwic2Nyb2xsSW50b1ZpZXciLCJjaXR5IiwiY2l0eV9jb2RlIiwiYWRkcmVzcyIsInBpbmNvZGUiLCJwcmltYXJ5X3VzZXIiLCJpc19tZW1iZXJfdXBkYXRlZCIsImltYWdlX2lkcyIsImltZ0lkIiwiZG9jdW1lbnRfaWRzIiwiYWRkVmlwTWVtYmVyc0RhdGEiLCJzdWNjZXNzIiwiaGlzdG9yeSIsIlNUT1JBR0UiLCJpc0FnZW50IiwicHVzaFVzZXJEYXRhIiwiZ2V0QW55Q29va2llIiwiY29tbW9uX3V0bV90YWdzIiwidGFncyIsInV0bV90YWdzIiwiaG9zdCIsInV0bV9zb3VyY2UiLCJ1dG1fdGVybSIsInV0bV9tZWRpdW0iLCJ1dG1fY2FtcGFpZ24iLCJ0aW1lIiwiRGF0ZSIsImdldFRpbWUiLCJzZW5kU01TIiwidmlwQ2x1YlBheSIsInBheW1lbnRfcmVxdWlyZWQiLCJwcm9jZXNzUGF5bWVudCIsInB1c2hNZW1iZXJzRGF0YSIsImV4dHJhUGFyYW1zIiwic2VuZE9uV2hhdHN1cCIsInNlbmRBZ2VudEJvb2tpbmdVUkwiLCJyZXMiLCJpc193YWl0Iiwic2VsZWN0ZWRfcGxhbl9pZCIsImdvbGRfcHVzaF9kYXRhIiwiY291cG9uX3R5cGUiLCJyZW1vdmVWaXBDb3Vwb25zIiwibmV3X2RhdGEiLCJyZW1vdmVNZW1iZXJzIiwiY2hvaWNlIiwiY2hpbGQiLCJhZHVsdCIsInVzZXJQcm9maWxlIiwicHJvcG9zZXJfaWQiLCJzaG93X2V4dHJhX2ZpZWxkcyIsInNlbGVjdGVkTWVtYmVyc0lkIiwibiIsImlzU2FsZXNBZ2VudCIsImZvbnRTaXplIiwidGV4dFRyYW5zZm9ybSIsInByb2NlZWRNZW1iZXJzTm8iLCJwcm9jZWVkTWVtYmVycyIsImFkZE1lbWJlcnMiLCJjb2xvciIsIm1hcmdpblJpZ2h0IiwibWFyZ2luVG9wIiwicmVtb3ZlQ291cG9uIiwiYXBwbHlDb3Vwb25zIiwicHJvY2VlZFBsYW4iLCJWaXBQcm9wb3NlciIsInByb2ZpbGVfZmxhZyIsInVzZXJQcm9maWxlcyIsImdldFVzZXJEZXRhaWxzIiwiZXhpdHN0aW5nX3VzZXJfcHJvZmlsZSIsImVtcHR5X3N0YXRlIiwiZm9ybUlzVmFsaWQiLCJoYW5kbGVFbWFpbCIsImp1c3RpZnlDb250ZW50IiwiaXNfY2hpbGRfb25seSIsIlZpcENsdWJNZW1iZXJEZXRhaWxzIiwibWF0Y2giLCJ1cmwiLCJpc192aXBfZ29sZCIsImlzX25hdmlnYXRlX3RvX2Zvcm0iLCJpc191c2VyX2FscmR5X2dvbGQiLCJzZWxlY3RlZExvY2F0aW9uIiwiYWxsIiwiZnJvbVdoZXJlIiwicmV0cmlldmVNZW1iZXJzRGF0YSIsImdldFZpcExpc3QiLCJjZXJ0aWZpY2F0ZSIsInNob3dWaXBEZXRhaWxzVmlldyIsImNoZWNrQXV0aCIsInJlcGxhY2UiLCJtYXBTdGF0ZVRvUHJvcHMiLCJTRUFSQ0hfQ1JJVEVSSUFfT1BEIiwidXNlcl9jaXRpZXMiLCJWSVBDTFVCIiwidmlwQ2x1Ykxpc3QiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNyaXRlcmlhIiwiZm9yY2VhZGQiLCJjYWxsYmFjayIsImNpdGllc0RhdGEiLCJwcm9maWxlRGF0YSIsInByb2ZpbGVJZCIsImltZ1R5cGUiLCJpbWdVcmwiLCJzZWxlY3RWaXBDbHViUGxhbiIsInJlc2V0VmlwRGF0YSIsInZpcFBsdXNMZWFkIiwib3JkZXJJZCIsInB1cmNoYXNlX3R5cGUiLCJxdWVyeV9kYXRhIiwiZ2V0Q291cG9ucyIsImlzX2VuZG9yc2VtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU1BLE07OztBQUNGLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsK0dBQ1RBLEtBRFM7QUFFbEI7Ozs7aUNBRVE7O0FBRUwsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVcsS0FBS0EsS0FBTCxDQUFXQyxTQUFYLElBQXdCLGdCQUF4QztBQUNJLHVEQUFLLFdBQVUsV0FBZixHQURKO0FBR1EscUJBQUtELEtBQUwsQ0FBV0UsV0FBWCxHQUNJO0FBQUE7QUFBQSxzQkFBRyxXQUFVLGVBQWI7QUFBQTtBQUFBLGlCQURKLEdBQytFO0FBSnZGLGFBREo7QUFTSDs7OztFQWhCZ0JDLGdCQUFNQyxTOztrQkFtQlpMLE07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCZjs7Ozs7O2tCQUVlQSxnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTU0sd0I7OztBQUNMLG1DQUFZTCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0pBQ1pBLEtBRFk7O0FBRWxCLFFBQUtNLEtBQUwsR0FBYSxFQUFiO0FBRmtCO0FBS2xCOzs7OzJCQUVRO0FBQ1IsVUFDQztBQUFBO0FBQUEsTUFBSyxXQUFVLHlCQUFmO0FBQ0M7QUFBQTtBQUFBLE9BQUssV0FBVSxrQ0FBZjtBQUNDO0FBQUE7QUFBQSxRQUFLLFdBQVUsUUFBZjtBQUNDO0FBQUE7QUFBQSxTQUFLLFdBQVUsZ0NBQWY7QUFDQztBQUFDLHVCQUFELENBQU8sUUFBUDtBQUFBO0FBQ0M7QUFBQTtBQUFBLFdBQUcsV0FBVSxnQkFBYjtBQUErQixjQUFLTixLQUFMLENBQVdPLE9BQVgsR0FBbUIsd0JBQW5CLEdBQTRDO0FBQTNFLFNBREQ7QUFFQztBQUFBO0FBQUEsV0FBSyxXQUFVLHlCQUFmO0FB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Q2dSLGFBQWxDLEVBQWdEQyxVQUFoRCxFQUEyRDVFLFdBQTNELEVBQXlFbFAsRUFBekUsQ0FBVCxDQUE5RDtBQUFBLFNBZmxCO0FBZ0JIc0ssNkJBQW9CO0FBQUEsbUJBQUswSSxTQUFTLGlDQUFULENBQUw7QUFBQSxTQWhCakI7QUFpQkhlLG9CQUFZLG9CQUFDMVUsSUFBRDtBQUFBLG1CQUFVMlQsU0FBUyx1QkFBVzNULElBQVgsQ0FBVCxDQUFWO0FBQUEsU0FqQlQ7QUFrQkgrSiw2QkFBcUIsNkJBQUMvSixJQUFEO0FBQUEsbUJBQVMyVCxTQUFTLGdDQUFvQjNULElBQXBCLENBQVQsQ0FBVDtBQUFBLFNBbEJsQjtBQW1CSHFRLDBCQUFpQjtBQUFBLG1CQUFLc0QsU0FBUyw4QkFBVCxDQUFMO0FBQUEsU0FuQmQ7QUFvQkhYLG9CQUFZLG9CQUFDMkIsY0FBRCxFQUFnQjNVLElBQWhCLEVBQXFCOFQsUUFBckI7QUFBQSxtQkFBa0NILFNBQVMsdUJBQVdnQixjQUFYLEVBQTBCM1UsSUFBMUIsRUFBK0I4VCxRQUEvQixDQUFULENBQWxDO0FBQUEsU0FwQlQ7QUFxQkh2RCx1QkFBYyx1QkFBQ3ZRLElBQUQ7QUFBQSxtQkFBVTJULFNBQVMsMEJBQWMzVCxJQUFkLENBQVQsQ0FBVjtBQUFBO0FBckJYLEtBQVA7QUF1QkgsQ0F4QkQ7O2tCQTRCZSx5QkFBUXFULGVBQVIsRUFBMEJLLGtCQUExQixFQUE4Q3BCLG9CQUE5QyxDIiwiZmlsZSI6IjY3LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIExvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc1R5cGUgfHwgXCJsb2FkZXJDaXJjdWxhclwifSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1sb2FkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaUZyYW1lUG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0xMFwiPlJlZGlyZWN0aW5nIHlvdSB0byBQaGFybWVhc3kgd2Vic2l0ZS4uLjwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyXG4iLCJpbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuXG5jbGFzcyBCb29raW5nQ29uZmlybWF0aW9uUG9wdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLXBvcHVwLW92ZXJsYXlcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtcG9wdXAgdmlwLXNyY2gtcG9wLW1pblwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHBhZGlpbmctc3JjaC1lbFwiPlxuXHRcdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3JjaC1lbC1jb25lbnRcIj57dGhpcy5wcm9wcy5pc19nb2xkPydDb25maXJtIGRlbGV0ZSBtZW1iZXI/JzonRG8geW91IHdpc2ggdG8gY29udGludWU/J308L3A+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtYnRuLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnByaWNlQ29uZmlybWF0aW9uUG9wdXAuYmluZCh0aGlzLCB0cnVlKX0+WWVzPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMucHJpY2VDb25maXJtYXRpb25Qb3B1cC5iaW5kKHRoaXMsIGZhbHNlKX0+Tm88L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0LyoodGhpcy5wcm9wcy5pc192aXBfYXBwbGljYWJsZSB8fCB0aGlzLnByb3BzLmlzX2luc3VyYW5jZV9hcHBsaWNhYmxlKSB8fCB0aGlzLnByb3BzLmlzQ2FydCB8fCB0aGlzLnByb3BzLmlzTGFiP1xuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgcGFkaWluZy1zcmNoLWVsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaUZyYW1lUG9wdXAgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1ydC0yMCB0ZXh0LWNlbnRlciBmdy01MDBcIj5XZSBhcmUgcmVkaXJlY3RpbmcgeW91IHRvIFBoYXJtRWFzeSB3ZWJzaXRlIGluIDMgc2Vjb25kcy4uLjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzcmNoLWVsLWNvbmVudFwiPkRvIHlvdSB3aXNoIHRvIGNvbnRpbnVlPzwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLWJ0bi1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnByaWNlQ29uZmlybWF0aW9uUG9wdXAuYmluZCh0aGlzLCB0cnVlKX0+WWVzPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5wcmljZUNvbmZpcm1hdGlvblBvcHVwLmJpbmQodGhpcywgZmFsc2UpfT5ObzwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0OlxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInZpcC1iYW5uZXItY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidmlwLWJhbm5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHZwLWNscy1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1wb3AtY2xzLnN2Zyd9IG9uQ2xpY2s9e3RoaXMucHJvcHMuYmFubmVyQ29uZmlybWF0aW9uUG9wdXAuYmluZCh0aGlzLGZhbHNlKX0vPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHZwLWJuci1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1pbWctcG9wLnBuZyd9IC8+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3AtYm5yLXR4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidnAtYm5yLWtub3ctdHh0XCIgb25DbGljaz17KGUpID0+IHtcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgXHQnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0Jvb2tpbmdQYWdlVmlwQmFubmVyQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdib29raW5ncGFnZS12aXAtY2xpY2snXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgXHR9XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgXHRHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ZpcC1jbHViLWRldGFpbHM/c291cmNlPWJvb2tpbmdwYWdlJmxlYWRfc291cmNlPWJvb2tpbmdwYWdlJykgfX0+S25vdyBtb3JlIGFib3V0IERvY3ByaW1lIFZJUDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInZwLWJuci1zdWItdHh0XCIgb25DbGljaz17dGhpcy5wcm9wcy5iYW5uZXJDb25maXJtYXRpb25Qb3B1cC5iaW5kKHRoaXMsdHJ1ZSl9Pk5vdCBJbnRlcmVzdGVkPyBDb250aW51ZSBCb29raW5nIDxpbWcgc3R5bGU9e3t3aWR0aDonN3B4J319IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwLXJnaHQuc3ZnJ30gLz48L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+Ki9cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tpbmdDb25maXJtYXRpb25Qb3B1cCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5jb25zdCBDb21wcmVzcyA9IHJlcXVpcmUoJ2NvbXByZXNzLmpzJylcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21tb25zL0xvYWRlcidcbmNsYXNzIEluc3VyYW5jZVByb29mcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkYXRhVXJsOiBudWxsLFxuICAgICAgICAgICAgem9vbUltYWdlVXJsOiBudWxsLFxuICAgICAgICAgICAgem9vbUltYWdlOiBmYWxzZSxcbiAgICAgICAgICAgIG9wZW5QZGY6IGZhbHNlLFxuICAgICAgICAgICAgb3BlblBkZlVybDogbnVsbCxcbiAgICAgICAgICAgIGlzTG9hZGluZzpmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGlja0ZpbGUobWVtYmVyX2lkLCBlKSB7IC8vIHRvIHNlbGVjdCBmaWxlXG4gICAgICAgIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlc1swXSkge1xuICAgICAgICAgICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXVxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmZpbGVzWzBdICYmIGUudGFyZ2V0LmZpbGVzWzBdLm5hbWUuaW5jbHVkZXMoJy5wZGYnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoQ3JvcChudWxsLCBtZW1iZXJfaWQsIGZpbGUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXByZXNzID0gbmV3IENvbXByZXNzKClcbiAgICAgICAgICAgICAgICBjb21wcmVzcy5jb21wcmVzcyhbZmlsZV0sIHtcbiAgICAgICAgICAgICAgICAgICAgcXVhbGl0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDEwMDAsXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogMTAwMCxcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZzEgPSByZXN1bHRzWzBdXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NHN0ciA9IGltZzEuZGF0YVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdFeHQgPSBpbWcxLmV4dFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gQ29tcHJlc3MuY29udmVydEJhc2U2NFRvRmlsZShiYXNlNjRzdHIsIGltZ0V4dClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRCYXNlNjQoZmlsZSwgKGRhdGFVcmwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoQ3JvcChkYXRhVXJsLCBtZW1iZXJfaWQsIG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YVVybCB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJFcnJvciB1cGxvYWRpbmcgaW1hZ2UuXCIgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEJhc2U2NChmaWxlLCBjYikge1xuICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxuICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2IocmVhZGVyLnJlc3VsdClcbiAgICAgICAgfVxuICAgICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnJvcilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmlzaENyb3AoZGF0YVVybCwgbWVtYmVyX2lkLCBmaWxlKSB7IC8vIGNyb3BwaW5nIHRoZSBpbWFnZVxuICAgICAgICBsZXQgZmlsZV9ibG9iX2RhdGFcbiAgICAgICAgaWYgKGRhdGFVcmwpIHtcbiAgICAgICAgICAgIGZpbGVfYmxvYl9kYXRhID0gdGhpcy5kYXRhVVJJdG9CbG9iKGRhdGFVcmwpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1lbV9kYXRhID0ge31cbiAgICAgICAgbGV0IGV4aXN0aW5nRGF0YVxuICAgICAgICBsZXQgaW1nX3RhZyA9IFwicHJvb2ZfZmlsZVwiXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZGF0YVVybDogbnVsbCxpc0xvYWRpbmc6dHJ1ZVxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZm9ybV9kYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgZm9ybV9kYXRhLmFwcGVuZChpbWdfdGFnLCBmaWxlLCBcImltYWdlRmlsZW5hbWUucGRmXCIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvcm1fZGF0YS5hcHBlbmQoaW1nX3RhZywgZmlsZV9ibG9iX2RhdGEsIFwiaW1hZ2VGaWxlbmFtZS5qcGVnXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLnVwbG9hZFZpcFByb29mKGZvcm1fZGF0YSwgbWVtYmVyX2lkLCAnaW1hZ2UnLCAoZGF0YSwgZXJyKSA9PiB7IC8vIHN0b3JlIHNlbGVjdGVkIHByb29mIHRvIGRhdGFiYXNlXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFJZCA9IGRhdGEuaWRcbiAgICAgICAgICAgICAgICAgICAgbWVtX2RhdGEuaWQgPSB0aGlzLnByb3BzLm1lbWJlcl9pZDtcbiAgICAgICAgICAgICAgICAgICAgbWVtX2RhdGEuaXNfcHJpbWFyeV91c2VyID0gdGhpcy5wcm9wcy5pc19wcmltYXJ5X3VzZXI7XG4gICAgICAgICAgICAgICAgICAgIG1lbV9kYXRhLmltZ19wYXRoX2lkcz1bXVxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnByb3BzLm1lbWJlcnNfcHJvb2ZzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5tZW1iZXJzX3Byb29mcykubWFwKGZ1bmN0aW9uKFtrZXksIHZhbHVlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlLmlkID09IG1lbWJlcl9pZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbV9kYXRhLmltZ19wYXRoX2lkcyA9IHZhbHVlLmltZ19wYXRoX2lkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1fZGF0YS5pbWdfcGF0aF9pZHMucHVzaCh7aWQ6IGRhdGFJZCwgaW1hZ2U6ZGF0YS5kYXRhLnByb29mX2ZpbGUsIHZhbDpkYXRhSWR9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1fZGF0YS5pbWdfcGF0aF9pZHMgPSBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1fZGF0YS5pbWdfcGF0aF9pZHMucHVzaCh7aWQ6IGRhdGFJZCwgaW1hZ2U6ZGF0YS5kYXRhLnByb29mX2ZpbGUsdmFsOmRhdGFJZH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbV9kYXRhLmltZ19wYXRoX2lkcy5wdXNoKHtpZDogZGF0YUlkLCBpbWFnZTpkYXRhLmRhdGEucHJvb2ZfZmlsZSwgdmFsOmRhdGFJZH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNMb2FkaW5nOmZhbHNlfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdG9yZVZpcE1lbWJlclByb29mcyhtZW1fZGF0YSkgLy8gdG8gc3RvcmUgbWVtYmVyIHByb29mIGlkcyB0byB0aGUgdXNlciBzdG9yZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZGF0YVVSSXRvQmxvYihkYXRhVVJJKSB7XG4gICAgICAgIHZhciBiaW5hcnkgPSBhdG9iKGRhdGFVUkkuc3BsaXQoJywnKVsxXSk7XG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJpbmFyeS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJyYXkucHVzaChiaW5hcnkuY2hhckNvZGVBdChpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBCbG9iKFtuZXcgVWludDhBcnJheShhcnJheSldLCB7IHR5cGU6ICdpbWFnZS9qcGVnJyB9KTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlSW1hZ2UoaW1nKXtcbiAgICAgICAgbGV0IFVwbG9hZGVkX2ltYWdlX2RhdGEgPSBbXVxuICAgICAgICBVcGxvYWRlZF9pbWFnZV9kYXRhID0gdGhpcy5wcm9wcy5tZW1iZXJzX3Byb29mcy5maWx0ZXIoKHggPT4geC5pZCA9PSB0aGlzLnByb3BzLm1lbWJlcl9pZCkpXG4gICAgICAgIFVwbG9hZGVkX2ltYWdlX2RhdGFbMF0uaW1nX3BhdGhfaWRzLm1hcCgoZGF0YSxpKT0+e1xuICAgICAgICAgICAgICAgIGRhdGEubWVtYmVyX2lkPXRoaXMucHJvcHMubWVtYmVyX2lkXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5pbWFnZSA9PSBpbWcpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlbW92ZVZpcE1lbWJlclByb29mKGRhdGEpIC8vIHRvIHJlbW92ZSBjYW5jZWxsZWQgdXBsb2FkZWQgaW1hZ2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IFVwbG9hZGVkX2ltYWdlX2RhdGEgPSBbXVxuICAgICAgICBsZXQgaW1nX3VybCA9IFtdXG4gICAgICAgIGxldCBwZGZfdXJsID0gW11cbiAgICAgICAgaWYgKHRoaXMucHJvcHMubWVtYmVyc19wcm9vZnMgJiYgdGhpcy5wcm9wcy5tZW1iZXJzX3Byb29mcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBVcGxvYWRlZF9pbWFnZV9kYXRhID0gdGhpcy5wcm9wcy5tZW1iZXJzX3Byb29mcy5maWx0ZXIoKHggPT4geC5pZCA9PSB0aGlzLnByb3BzLm1lbWJlcl9pZCkpXG4gICAgICAgICAgICBpZihVcGxvYWRlZF9pbWFnZV9kYXRhLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIFVwbG9hZGVkX2ltYWdlX2RhdGFbMF0uaW1nX3BhdGhfaWRzLm1hcCgoZGF0YSwgaSkgPT57XG4gICAgICAgICAgICAgICAgICAgIGlmKGRhdGEuaW1hZ2UuaW5jbHVkZXMoJ3BkZicpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBkZl91cmwucHVzaChkYXRhLmltYWdlKVxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ191cmwucHVzaChkYXRhLmltYWdlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgc2hvd191cGxvYWQgPSB0cnVlXG4gICAgICAgIGlmKChpbWdfdXJsICYmIGltZ191cmwubGVuZ3RoID4gMCkgfHwgKHBkZl91cmwgJiYgcGRmX3VybC5sZW5ndGggPiAwKSl7XG4gICAgICAgICAgICBzaG93X3VwbG9hZCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiaW5zdXJhbmNlLXByb29mcy1jb250XCIgc3R5bGU9e3ttYXJnaW46ICcxMHB4IC0xMHB4IDBweCAtMTBweCd9fT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgIC8qICAgIHRoaXMucHJvcHMuZW5kb3JzZW1lbnRFcnJvci5pbmRleE9mKHRoaXMucHJvcHMubWVtYmVyX2lkKSAhPSAtMSAmJiBpbWdfdXJsLmxlbmd0aD09MD9cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnMtcHJmLWVycm9yLW1zZ1wiPipQbGVhc2UgdXBsb2FkIHRoZSByZXF1aXJlZCBkb2N1bWVudHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgOicnKi9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBsb2FkLWFkZGJ0bi1jb250XCIgaWQ9e2BtZW1iZXJfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1fdXBsb2FkYH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtdXBsZC1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLXNiLWZyc3QtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2lucy13YXJuaW5nLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtdXBsb2FkLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlucy11cGxvYWQtcGFyYS10ZXh0XCI+VXBsb2FkIGFueSBnb3Zlcm5lbWVudCBJRCBwcm9vZjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlucy11cGxvYWQtc3ViLXRleHRcIj5BYWRoYXIgY2FyZCwgUGFzc3BvcnQsIERyaXZpbmcgTGljZW5zZSwgVm90ZXIgSUQgQ2FyZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlucy1maWxlLXR5bGVcIj5GaWxlIHR5cGU6IGpwZywganBlZywgcG5nLCBwZGYgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dfdXBsb2FkP1xuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnMtcHJvb2YtdXBsb2FkLWJ0blwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWFnZUZpbGVQaWNrZXJfJyArIHRoaXMucHJvcHMubWVtYmVyX2lkICsgJ19mcm9udCcpLmNsaWNrKClcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWFnZUZpbGVQaWNrZXJfJyArIHRoaXMucHJvcHMubWVtYmVyX2lkICsgJ19mcm9udCcpLnZhbHVlID0gXCJcIlxuICAgICAgICAgICAgICAgICAgICB9fT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2lucy11cC1pY28uc3ZnXCJ9Lz4gVXBsb2FkXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0gaWQ9e2BpbWFnZUZpbGVQaWNrZXJfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1fZnJvbnRgfSBvbkNoYW5nZT17dGhpcy5waWNrRmlsZS5iaW5kKHRoaXMsIHRoaXMucHJvcHMubWVtYmVyX2lkKX0gYWNjZXB0PVwiaW1hZ2UveC1wbmcsaW1hZ2UvanBlZyxpbWFnZS9qcGcsLnBkZlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0xvYWRpbmcgJiYgc2hvd191cGxvYWQ/XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1wcmYtaW1nLWdyZCBkLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItZm9yLWNoYXQtZGl2IG10LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRlci1mb3ItY2hhdCBtYi0wJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFVwbG9hZGVkX2ltYWdlX2RhdGEgJiYgVXBsb2FkZWRfaW1hZ2VfZGF0YS5sZW5ndGggPiAwICYmICFzaG93X3VwbG9hZD9cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGxvYWQtaW1nLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdfdXJsICYmIGltZ191cmwubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ191cmwubWFwKChkYXRhLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImlucy1wcmYtaW1nLWdyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGlucy11cC1pbWctaWNcIiBzcmM9e2RhdGF9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbnMtcHJmLWNsc1wiIG9uQ2xpY2s9e3RoaXMucmVtb3ZlSW1hZ2UuYmluZCh0aGlzLCBkYXRhKX0gc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL2NwL2Fzc2V0cy9pbWcvaWNvbnMvY2xvc2UucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGRmX3VybCAmJiBwZGZfdXJsLmxlbmd0aD4wID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGRmX3VybC5tYXAoKGRhdGEsIGkpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiaW5zLXByZi1pbWctZ3JkXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGlucy11cC1pbWctaWNcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wZGYuanBnXCJ9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW5zLXByZi1jbHNcIiBvbkNsaWNrPXt0aGlzLnJlbW92ZUltYWdlLmJpbmQodGhpcywgZGF0YSl9IHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9jcC9hc3NldHMvaW1nL2ljb25zL2Nsb3NlLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNMb2FkaW5nP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLXByZi1pbWctZ3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyLWZvci1jaGF0LWRpdiBtdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGVyLWZvci1jaGF0IG1iLTAnIHN0eWxlPXt7d2lkdGg6JzUwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoaW1nX3VybCAmJiBpbWdfdXJsLmxlbmd0aCkgfHwgKHBkZl91cmwgJiYgcGRmX3VybC5sZW5ndGgpKSA+PSA1PycnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxzcGFuIGNsYXNzTmFtZT1cImlucy1wcmYtYWRkTW9yZVwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlRmlsZVBpY2tlcl8nICsgdGhpcy5wcm9wcy5tZW1iZXJfaWQgKyAnX2JhY2snKS5jbGljaygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWFnZUZpbGVQaWNrZXJfJyArIHRoaXMucHJvcHMubWVtYmVyX2lkICsgJ19iYWNrJykudmFsdWUgPSBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW5zLWFkZGljb1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2lucy1hZGQtaWNvLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgTW9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0gaWQ9e2BpbWFnZUZpbGVQaWNrZXJfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1fYmFja2B9IG9uQ2hhbmdlPXt0aGlzLnBpY2tGaWxlLmJpbmQodGhpcywgdGhpcy5wcm9wcy5tZW1iZXJfaWQpfSBhY2NlcHQ9XCJpbWFnZS94LXBuZyxpbWFnZS9qcGVnLGltYWdlL2pwZywucGRmXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cblxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEluc3VyYW5jZVByb29mcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5zdXJhbmNlUHJvb2ZzIGZyb20gJy4vaW5zdXJhbmNlUHJvb2ZzLmpzJ1xuXG5jbGFzcyBWaXBDbHViQWN0aXZhdGVkTWVtYmVyRGV0YWlscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7IC8vIGFscmVhZHkgYWN0aXZhdGVkIG1lbWJlcnMgdmlld1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHRvZ2dsZVRhYlR5cGU6IGZhbHNlLFxuXHRcdFx0dGFic1ZhbHVlOiBbXVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPVwidmlwLXVzZXItZGV0YWlscy1jb250YWluZXJcIj5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEudXNlciAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS51c2VyKS5sZW5ndGggPiAwICYmIHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIucGx1c19tZW1iZXJzICYmIHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIucGx1c19tZW1iZXJzLmxlbmd0aCA+IDA/XG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS51c2VyLnBsdXNfbWVtYmVycy5tYXAoKHZhbCxrZXkpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiA8ZGl2IGtleT17a2V5fWNsYXNzTmFtZT1cImlucy11c2VyLWRldGFpbHMtbGlzaXRuZ1wiIGlkPXt2YWwuaWR9PlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzdWItZm9ybS1oZWRcIj57dmFsLmlzX3ByaW1hcnlfdXNlcj8gJ1Byb3Bvc2VyJzp2YWwucmVsYXRpb24/dmFsLnJlbGF0aW9uOicnfTwvcD5cblx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImlucy11c3ItaW1nLXBhcmEgcGwtMFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1nLWxpc3Qtd2lkdGhcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJpbnMtaW5wdXQtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvdXNlci0wMS5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgc3R5bGU9e3sgJ3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZScgfX0+e3ZhbC5maXJzdF9uYW1lfSB7dmFsLmxhc3RfbmFtZX0gfCB7dmFsLnRpdGxlID09ICdtci4nPydNYWxlJzp2YWwuZ2VuZGVyID09ICdtJyA/ICdNYWxlJzonRmVtYWxlJ308L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHR7dmFsLmRvYj9cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWctbGlzdC13aWR0aFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiaW5zLWlucHV0LWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NhbGVuZGFyLTAxLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+e3ZhbC5kb2J9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ6Jyd9XG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFsLmVtYWlsP1xuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltZy1saXN0LXdpZHRoXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJpbnMtaW5wdXQtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbWFpbC0wMS5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwPnt2YWwuZW1haWx9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ6Jyd9XG5cdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdHsvKnZhbC5pc19wcmltYXJ5X3VzZXIgJiYgdmFsLmRvY3VtZW50X2lkcyA9PSBudWxsP1xuXHRcdFx0XHRcdFx0XHRcdDxJbnN1cmFuY2VQcm9vZnMgey4uLnRoaXMucHJvcHN9IG1lbWJlcl9pZCA9IHt2YWwucHJvZmlsZX0gaXNfcHJpbWFyeV91c2VyID0ge3RydWV9Lz5cblx0XHRcdFx0XHRcdFx0XHQ6ICcnKi9cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdDpcIlwifVxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpcENsdWJBY3RpdmF0ZWRNZW1iZXJEZXRhaWxzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFZpcExvZ2luUG9wdXAgZnJvbSAnLi92aXBDbHViUG9wdXAuanMnXG5pbXBvcnQgTmV3RGF0ZVNlbGVjdG9yIGZyb20gJy4uL2NvbW1vbnMvbmV3RGF0ZVNlbGVjdG9yLmpzJ1xuXG5jbGFzcyBWaXBQcm9wb3NlckZhbWlseSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG5hbWU6ICcnLFxuXHRcdFx0bGFzdF9uYW1lOiAnJyxcblx0XHRcdGRvYjogJycsXG5cdFx0XHRpZDogJycsXG5cdFx0XHQvLyByZWxhdGlvbjogJycsXG5cdFx0XHQvLyB0aXRsZTogJycsXG5cdFx0XHRzaG93UG9wdXA6IGZhbHNlLFxuXHRcdFx0c2V0RGVmYXVsdDogZmFsc2UsXG5cdFx0XHRwcm9maWxlX2lkOm51bGwsXG4gICAgXHQgICAgLy8gcmVsYXRpb25fa2V5OicnLFxuICAgIFx0ICAgIGlzX2Rpc2FibGU6ZmFsc2UsXG4gICAgXHQgICAgbWVtYmVyX2Zvcm1faWQ6dGhpcy5wcm9wcy5tZW1iZXJfZm9ybV9pZCxcbiAgICBcdCAgICBpc19hbHJlYWR5X3VzZXI6ZmFsc2UsXG4gICAgXHQgICAgaXNVc2VyU2VsZWN0ZWRQcm9maWxlOnRoaXMucHJvcHMuaXNVc2VyU2VsZWN0ZWRQcm9maWxlLFxuICAgIFx0ICAgIGlzRG9iVmFsaWRhdGVkOmZhbHNlLFxuICAgICAgICAgICAgaXNfZG9iX2Vycm9yOmZhbHNlLFxuICAgICAgICAgICAgZ2VuZGVyOidtJyxcbiAgICAgICAgICAgIGlzRm9yY2VVcGRhdGVEb2I6ZmFsc2Vcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG5cdFx0bGV0IHNlbGYgPSB0aGlzXG5cdFx0bGV0IHByb2ZpbGUgPXt9XG5cdFx0aWYocHJvcHMuaXNfZnJvbV9wYXltZW50KXtcblx0XHRcdGlmKHByb3BzLnZpcENsdWJNZW1iZXJEZXRhaWxzW3Byb3BzLm1lbWJlcl9pZF0pe1xuXHRcdFx0XHRsZXQgcHJvZmlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMudmlwQ2x1Yk1lbWJlckRldGFpbHNbdGhpcy5wcm9wcy5tZW1iZXJfaWRdKVxuXHRcdFx0XHRsZXQgbmV4dFByb2ZpbGUgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wcy52aXBDbHViTWVtYmVyRGV0YWlsc1twcm9wcy5tZW1iZXJfaWRdKVxuXHRcdFx0XHRpZiAoSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZSkgIT0gSlNPTi5zdHJpbmdpZnkobmV4dFByb2ZpbGUpKSB7XG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IC4uLm5leHRQcm9maWxlIH0pXG5cdFx0XHRcdH1cblx0XHRcdH1lbHNlIGlmKHByb3BzLm1lbWJlcl9pZCA+PTAgJiYgIXRoaXMuc3RhdGUuc2V0RGVmYXVsdCl7IFxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtpZDogcHJvcHMubWVtYmVyX2lkLCBzZXREZWZhdWx0OnRydWV9LCAoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7aXNfZGlzYWJsZTpmYWxzZX0sKCkgPT57XG5cdFx0XHRcdFx0XHRzZWxmLmhhbmRsZVN1Ym1pdCgpXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2UoZmllbGQsIGV2ZW50KSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRbZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJhbScpXTogZXZlbnQudGFyZ2V0LnZhbHVlICwgaWQ6dGhpcy5wcm9wcy5tZW1iZXJfaWRcblx0XHR9KTtcblx0fVxuXG5cdGhhbmRsZVJlbGF0aW9uKGlkLGV2ZW50KSB7XG5cdFx0dmFyIHJlbGF0aW9uX2lkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe2lkOnRoaXMucHJvcHMubWVtYmVyX2lkLCdyZWxhdGlvbic6ZXZlbnQudGFyZ2V0LnZhbHVlLCdyZWxhdGlvbl9rZXknOnJlbGF0aW9uX2lkLm9wdGlvbnNbcmVsYXRpb25faWQuc2VsZWN0ZWRJbmRleF0uZ2V0QXR0cmlidXRlKCdkYXRhLXBhcmFtJyl9LCgpPT57XG5cdFx0XHR0aGlzLmhhbmRsZVN1Ym1pdCgpXG5cdFx0fSlcblx0fVxuXG5cdGhhbmRsZVN1Ym1pdCgpIHtcblx0XHR2YXIgc2VsZl9kYXRhID0gdGhpcy5zdGF0ZVxuXHRcdGlmKHNlbGZfZGF0YS5uYW1lICE9PSAnJyl7XG5cdCAgICBcdGlmKHNlbGZfZGF0YS5uYW1lLmxlbmd0aCA+IDUwKXtcblx0XHRcdFx0c2VsZl9kYXRhLm5hbWUgPSBzZWxmX2RhdGEubmFtZS5zbGljZSgwLCA1MClcblx0XHRcdH1cdFxuXHQgICAgfVxuXHRcdHRoaXMucHJvcHMudXNlckRldGFpbHMoJ3NlbGZfZGF0YScsIHNlbGZfZGF0YSkgLy8gdG8gc2F2ZSB1c2VyIGZvcm0gZGV0YWlscyBpbiBzdG9yZVxuXHR9XG5cblx0dG9nZ2xlUG9wdXAobmV3UHJvZmlsZWlkLCBtZW1iZXJfaWQsIG5ld1Byb2ZpbGUpIHtcblx0XHRpZihuZXdQcm9maWxlaWQgIT09ICcnKXtcblx0XHRcdGlmKG5ld1Byb2ZpbGUgJiYgbmV3UHJvZmlsZS5kb2Ipe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtkb2I6bmV3UHJvZmlsZS5kb2IsaXNEb2JWYWxpZGF0ZWQ6dHJ1ZX0pXG5cdFx0XHR9XG5cdCAgICBcdG5ld1Byb2ZpbGUuaXNVc2VyU2VsZWN0ZWRQcm9maWxlID0gdHJ1ZVxuXHRcdFx0dGhpcy5wcm9wcy5zZWxlY3RWaXBVc2VyUHJvZmlsZShuZXdQcm9maWxlaWQsIG1lbWJlcl9pZCwgbmV3UHJvZmlsZSwgdGhpcy5wcm9wcy5wYXJhbV9pZCkgLy8gc2VsZWN0IHByb2ZpbGUgZnJvbSBvcHRpb25cblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRzaG93UG9wdXA6ICF0aGlzLnN0YXRlLnNob3dQb3B1cCxcblx0XHRcdFx0cHJvZmlsZV9pZDogbmV3UHJvZmlsZWlkLFxuXHRcdFx0XHRpZDpuZXdQcm9maWxlaWQsXG5cdFx0XHRcdGlzRm9yY2VVcGRhdGVEb2I6dHJ1ZVxuXHRcdFx0fSwoKSA9Pntcblx0XHRcdFx0dGhpcy5oYW5kbGVTdWJtaXQoKVxuXHRcdFx0fSlcblx0XHR9ZWxzZXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3Nob3dQb3B1cDogIXRoaXMuc3RhdGUuc2hvd1BvcHVwLGlzRm9yY2VVcGRhdGVEb2I6ZmFsc2V9KVxuXHRcdH1cblx0fVxuXG4gICAgaGFuZGxlTmFtZUNoYXJhY3RlcnMoZmllbGQsZXZlbnQpe1xuXHRcdGlmKGZpZWxkID09ICduYW1lJyl7XG5cdFx0XHRpZih0aGlzLnN0YXRlLm5hbWUubGVuZ3RoID09IDUwKXtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0ICAgICAgICB9XG4gICAgXHR9XG5cdH1cblxuXHRoaWRlU2VsZWN0UHJvZmlsZVBvcHVwKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6IGZhbHNlfSlcbiAgICB9XG5cbiAgXHRzdWJtaXROZXdEb2IodHlwZSxuZXdEYXRlLGlzVmFsaWREb2IsdXNlcl9mb3JtX2lkKSB7XG5cdFx0bGV0IHNlbGYgPSB0aGlzXG5cdFx0c2VsZi5zZXRTdGF0ZSh7XG5cdFx0XHRkb2I6IG5ld0RhdGUsIGlzRG9iVmFsaWRhdGVkOmlzVmFsaWREb2Jcblx0XHR9LCAoKSA9PiB7XG5cdFx0XHRzZWxmLmhhbmRsZVN1Ym1pdCgpXG5cdFx0fSlcblx0fVxuXG5cdHVuU2V0Rm9yY2VVcGRhdGVEb2IoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtpc0ZvcmNlVXBkYXRlRG9iOmZhbHNlfSlcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzKVxuXHRcdGxldCBjb21tb25Nc2dTcGFuID0gPHNwYW4gY2xhc3NOYW1lPVwiZmlsbC1lcnJvci1zcGFuXCI+KlRoaXMgaXMgYSBtYW5kYXRvcnkgZmllbGQ8L3NwYW4+XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtc3ViLWZvcm1zIG1ydC0xMFwiIGlkPXtgbWVtYmVyXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3dpZGdldCBnb2xkVXNlckFkZG9uJyBzdHlsZT17e3BhZGRpbmc6JzEwcHgnfX0gPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3ViLWZvcm0taW5wdXQtZGF0YVwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOjEwfX0gPlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEudXNlcikubGVuZ3RoID4gMCAmJiB0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS51c2VyLnBsdXNfbWVtYmVycyAmJiB0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS51c2VyLnBsdXNfbWVtYmVycy5sZW5ndGggPiAwPzxwIGNsYXNzTmFtZT1cInN1Yi1mb3JtLWhlZFwiPntgTWVtYmVyICR7dGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEudXNlci5wbHVzX21lbWJlcnMubGVuZ3RoICsgdGhpcy5wcm9wcy5tZW1iZXJfdmlld19pZCsxfWB9PC9wPjonJ1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmlzX3RvYmVfcmVtb3ZlX29wdGlvbj9cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN1Yi1mb3JtLWhlZC1jbGlja1wiIG9uQ2xpY2s9e3RoaXMucHJvcHMucmVtb3ZlTWVtYmVyRm9ybS5iaW5kKHRoaXMsdGhpcy5wcm9wcy5tZW1iZXJfaWQpfT5SZW1vdmVcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0OicnfVxuXHRcdFx0XHRcdFx0PC9kaXY+IFxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2BsYWJlbC1uYW1lcy1idXR0b25zICR7dGhpcy5zdGF0ZS5nZW5kZXIgPT0gJ20nPydidG4tYWN0aXZlJzonJ31gfSBuYW1lPVwiZ2VuZGVyXCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5nZW5kZXIgPT0gJ20nfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgJ2dlbmRlcic6ICdtJyB9LCgpPT57dGhpcy5oYW5kbGVTdWJtaXQoKSB9KX0gb25CbHVyPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfT5NYWxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgbGFiZWwtbmFtZXMtYnV0dG9ucyAke3RoaXMuc3RhdGUuZ2VuZGVyID09ICdmJz8nYnRuLWFjdGl2ZSc6Jyd9YH0gbmFtZT1cImdlbmRlclwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZ2VuZGVyID09ICdmJ30gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7ICdnZW5kZXInOiAnZicgfSwoKT0+e3RoaXMuaGFuZGxlU3VibWl0KCkgfSl9IG9uQmx1cj17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0+RmVtYWxlPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XHRcdFx0XHRcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXAgaW5wLW1hcmdpbi1yaWdodCBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBzdHlsZT17eyd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnfX0gXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD17YG5hbWVfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfSBcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sICR7dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCduYW1lJyk+IC0xID8nZmlsbC1lcnJvcic6Jyd9YH0gcmVxdWlyZWQgXG5cdFx0XHRcdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJmaXJzdF9uYW1lXCIgXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwibmFtZVwiIGRhdGEtcGFyYW09J25hbWUnIFxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCAnbmFtZScpfSBcblx0XHRcdFx0XHRcdFx0XHRcdG9uQmx1cj17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0gXG5cdFx0XHRcdFx0XHRcdFx0XHRvbktleVByZXNzPXt0aGlzLmhhbmRsZU5hbWVDaGFyYWN0ZXJzLmJpbmQodGhpcywnbmFtZScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e3RoaXMuc3RhdGUuaXNfZGlzYWJsZSA/ICdkaXNhYmxlZCcgOiAnJ31cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9e3RoaXMuc3RhdGUuaXNfZGlzYWJsZSA/ICdmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXIgZGF0ZVBpY2tlckxhYmVsJyA6ICdmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXInfVxuXHRcdFx0XHRcdFx0XHRcdGh0bWxGb3I9e2BuYW1lXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0+PHNwYW4gY2xhc3NOYW1lPVwibGFiZWxEb3RcIj48L3NwYW4+TmFtZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy91c2VyLTAxLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignbmFtZScpPiAtMT9cblx0XHRcdFx0XHRcdFx0XHRjb21tb25Nc2dTcGFuOicnXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj4gXG5cdFx0XHRcdFx0XHRcdDxmb3JtPlxuXHRcdFx0XHRcdFx0XHRcdDxOZXdEYXRlU2VsZWN0b3Igey4uLnRoaXMucHJvcHN9IGdldE5ld0RhdGU9e3RoaXMuc3VibWl0TmV3RG9iLmJpbmQodGhpcyl9IGlzX2RvYl9lcnJvcj17dGhpcy5wcm9wcy5pc19kb2JfZXJyb3J9ICBvbGRfZG9iPXt0aGlzLnN0YXRlLmRvYn0gdXNlcl9mb3JtX2lkID17dGhpcy5wcm9wcy5tZW1iZXJfaWR9IGlzX2dvbGQ9e3RydWV9IHVuU2V0Rm9yY2VVcGRhdGVEb2I9e3RoaXMudW5TZXRGb3JjZVVwZGF0ZURvYi5iaW5kKHRoaXMpfSBpc0ZvcmNlVXBkYXRlRG9iPXt0aGlzLnN0YXRlLmlzRm9yY2VVcGRhdGVEb2J9Lz5cblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ2RvYicpID4gLTEgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb21tb25Nc2dTcGFuIDogJydcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMuc2hvd19zZWxlY3RlZF9wcm9maWxlcy5sZW5ndGg+MCAmJiAhdGhpcy5zdGF0ZS5pc19kaXNhYmxlP1xuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzdWItZm9ybS1oZWQtY2xpY2tcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdHNob3dQb3B1cDogdHJ1ZSxpc0ZvcmNlVXBkYXRlRG9iOmZhbHNlfSl9PlxuXHRcdFx0XHRcdFx0U2VsZWN0IGZyb20gcHJvZmlsZVxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9yZ3QtYXJ3LnN2Z1wifSAvPlxuXHRcdFx0XHRcdDwvZGl2PjonJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5zaG93UG9wdXAgP1xuXHRcdFx0XHRcdDxWaXBMb2dpblBvcHVwIHsuLi50aGlzLnByb3BzfSBcblx0XHRcdFx0XHRcdGN1cnJlbnRTZWxlY3RlZFZpcE1lbWJlcnNJZD17dGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWR9IFxuXHRcdFx0XHRcdFx0bWVtYmVyX2lkPXt0aGlzLnByb3BzLm1lbWJlcl9pZH0gXG5cdFx0XHRcdFx0XHRjbG9zZVBvcHVwPXt0aGlzLnRvZ2dsZVBvcHVwLmJpbmQodGhpcyl9IFxuXHRcdFx0XHRcdFx0aXNTZWxlY3Rwcm9maWxlID0ge3RydWV9IFxuXHRcdFx0XHRcdFx0dmlwQ2x1Yk1lbWJlckRldGFpbHMgPXt0aGlzLnByb3BzLnZpcENsdWJNZW1iZXJEZXRhaWxzW3RoaXMucHJvcHMubWVtYmVyX2lkXX1cblx0XHRcdFx0XHRcdGhpZGVTZWxlY3RQcm9maWxlUG9wdXA9e3RoaXMuaGlkZVNlbGVjdFByb2ZpbGVQb3B1cC5iaW5kKHRoaXMpfSBcblx0XHRcdFx0XHRcdGlzX3NlZV9tb3JlPXtmYWxzZX1cblx0XHRcdFx0XHQvPiA6ICcnXG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpcFByb3Bvc2VyRmFtaWx5IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBDaGF0UGFuZWwgZnJvbSAnLi4vY29tbW9ucy9DaGF0UGFuZWwnXG5pbXBvcnQgVmlwUHJvcG9zZXIgZnJvbSAnLi92aXBDbHViU2VsZi5qcydcbmltcG9ydCBWaXBQcm9wb3NlckZhbWlseSBmcm9tICcuL3ZpcENsdWJGYW1pbHlNZW1iZXJzLmpzJ1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgUGF5bWVudEZvcm0gZnJvbSAnLi4vY29tbW9ucy9wYXltZW50Rm9ybSdcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vaGVscGVycy9ndG0nXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuaW1wb3J0IERpc2NsYWltZXIgZnJvbSAnLi4vY29tbW9ucy9Ib21lL3N0YXRpY0Rpc2NsYWltZXIuanMnXG5pbXBvcnQgVmlwQ2x1YkFjdGl2YXRlZE1lbWJlckRldGFpbHMgZnJvbSAnLi92aXBDbHViQWN0aXZhdGVkTWVtZWJlckRldGFpbHNWaWV3LmpzJ1xuaW1wb3J0IEJvb2tpbmdDb25maXJtYXRpb25Qb3B1cCBmcm9tICcuLi9kaWFnbm9zaXMvYm9va2luZ1N1bW1hcnkvQm9va2luZ0NvbmZpcm1hdGlvblBvcHVwLmpzJ1xuXG5jbGFzcyBWaXBDbHViTWVtYmVyRGV0YWlsc1ZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNhdmVNZW1iZXJzOmZhbHNlLFxuICAgICAgICAgICAgdmFsaWRhdGVFcnJvcnM6e30sXG4gICAgICAgICAgICBzaG93X3NlbGVjdGVkX3Byb2ZpbGVzOltdLFxuICAgICAgICAgICBcdHBheW1lbnREYXRhOiBudWxsLFxuICAgICAgICAgICBcdHNob3dfcG9wdXA6ZmFsc2UsXG4gICAgICAgICAgIFx0cHJvY2VlZDpmYWxzZSxcbiAgICAgICAgICAgXHRwb3B1cE1lbURhdGE6e30sXG4gICAgICAgICAgIFx0Y291cG9uX2NvZGU6bnVsbCxcbiAgICAgICAgICAgXHRjb3Vwb25faWQ6bnVsbCxcbiAgICAgICAgICAgXHRpc19wYXltZW50X2NvdXBvbl9hcHBsaWVkOmZhbHNlLFxuICAgICAgICAgICBcdGNvdXBvbl9kaXNjb3VudDpudWxsLFxuICAgICAgICAgICBcdHVzZXJfZW1haWw6bnVsbCxcbiAgICAgICAgICAgXHR1c2VyX3Bob25lX251bWJlcjpudWxsLFxuICAgICAgICAgICBcdGlzX2RvYl9lcnJvcjpmYWxzZSxcbiAgICAgICAgICAgXHRzaG93Q29uZmlybWF0aW9uUG9wdXA6ICdjbG9zZScsXG4gICAgICAgICAgIFx0dG9fYmVfcmVtb3ZlX2lkOicnXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBcdGlmKHdpbmRvdyl7XG4gICAgXHRcdHdpbmRvdy5zY3JvbGxUbygwLDApXG4gICAgXHR9XG4gICAgXHRpZiAodGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbiAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuKS5sZW5ndGggPiAwICYmICF0aGlzLnByb3BzLmlzX2Zyb21fcGF5bWVudCAmJiB0aGlzLnByb3BzLnZpcENvdXBvbnMubGVuZ3RoID4wKSB7IC8vIGdldCBjb3Vwb24gZGlzY291bnRcblx0ICAgIFx0XHR0aGlzLnByb3BzLmFwcGx5Q291cG9uRGlzY291bnQoeyBwcm9kdWN0SWQgOiB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmlzX2dvbGQ/ODoxMSxjb3Vwb25Db2RlOnRoaXMucHJvcHMudmlwQ291cG9uc1swXS5jb2RlLGNvdXBvbklkOnRoaXMucHJvcHMudmlwQ291cG9uc1swXS5jb3Vwb25faWQscGxhbl9pZDp0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmlkLGRlYWxfcHJpY2U6dGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5kZWFsX3ByaWNlLFxuXHQgICAgXHRcdGNiOiAocmVzcCkgPT4ge1xuXHQgICAgXHRcdFx0aWYocmVzcCl7XG5cdCAgICBcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2NvdXBvbl9kaXNjb3VudDpyZXNwLmRpc2NvdW50fSlcblx0ICAgIFx0XHRcdH1cblx0ICAgIFx0XHR9IFxuXHQgICAgXHR9KVxuXHQgICAgXHR0aGlzLnNldFN0YXRlKHtpc19wYXltZW50X2NvdXBvbl9hcHBsaWVkOnRydWUsY291cG9uX2NvZGU6dGhpcy5wcm9wcy52aXBDb3Vwb25zWzBdLmNvZGUsIGNvdXBvbl9pZDp0aGlzLnByb3BzLnZpcENvdXBvbnNbMF0uY291cG9uX2lkIH0pXG5cdCAgICB9XG5cblx0ICAgIGlmKHRoaXMucHJvcHMuVVNFUi5wcm9maWxlcyAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMpLmxlbmd0aCAmJiB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXSAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXSkubGVuZ3RoID4gMCl7XG5cdCAgICBcdHRoaXMuc2V0U3RhdGUoe3VzZXJfZW1haWw6dGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzW3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0uZW1haWwsdXNlcl9waG9uZV9udW1iZXI6dGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzW3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0ucGhvbmVfbnVtYmVyfSlcblx0ICAgIH1cbiAgICB9XG5cbiAgICBhZGRNZW1iZXJzKGlzRnJvbURlZmF1bHRVc2VyKXsgLy8gYWRkIG5ldyBtZW1iZXJzIFxuICAgIFx0bGV0IG1lbWJlcl9kdW1teV9kYXRhPXtcbiAgICBcdFx0bmFtZTogJycsXG5cdFx0XHRsYXN0X25hbWU6ICcnLFxuXHRcdFx0ZG9iOiAnJyxcblx0XHRcdGlkOiAnJyxcblx0XHRcdC8vIHJlbGF0aW9uOiBudWxsLFxuXHRcdFx0Ly8gcmVsYXRpb25fa2V5OiBudWxsLFxuXHRcdFx0Ly8gdGl0bGU6ICcnLFxuXHRcdFx0cHJvZmlsZTpudWxsLFxuXHRcdFx0cHJvZmlsZV9pZDpudWxsLFxuXHRcdFx0cGhvbmVfbnVtYmVyOicnLFxuXHRcdFx0ZW1haWw6bnVsbCxcblx0XHRcdGlzVXNlclNlbGVjdGVkUHJvZmlsZTp0cnVlLFxuXHRcdFx0Ly8gZGF5Om51bGwsXG5cdFx0XHQvLyBtbnRoOm51bGwsXG5cdFx0XHQvLyB5ZWFyOm51bGwsXG5cdFx0XHQvLyBlbWFpbDonJyxcblx0XHRcdGZpcnN0X25hbWU6JycsXG5cdFx0XHRhZ2U6JydcbiAgICBcdH1cbiAgICBcdGxldCBjYXJkXG4gICAgXHRsZXQgbWVtYmVyc0lkID0gW11cbiAgICBcdGlmKGlzRnJvbURlZmF1bHRVc2VyICYmICF0aGlzLnByb3BzLmlzX2Zyb21fcGF5bWVudCl7XG4gICAgXHRcdHRoaXMucHJvcHMuY2xlYXJWaXBNZW1lYmVyRGF0YSgpIC8vIHJlc2V0IHZpcCBvciBnb2xkIHN0b3JlIHRvIGluaXRpYWwgc3RhdGVcblx0XHRcdG1lbWJlcnNJZC5wdXNoKHsnMCc6MCwgdHlwZTonc2VsZicsbWVtYmVyX2Zvcm1faWQ6MCxpc1VzZXJTZWxlY3RlZFByb2ZpbGU6dHJ1ZSx0b19iZV9yZW1vdmU6ZmFsc2V9KVxuXHRcdFx0bWVtYmVyX2R1bW15X2RhdGEuaWQ9MFxuXHRcdFx0bWVtYmVyX2R1bW15X2RhdGEuaXNfdG9iZV9kdW1teV91c2VyID0gdHJ1ZVxuXHRcdFx0dGhpcy5wcm9wcy5zYXZlQ3VycmVudFNlbGVjdGVkVmlwTWVtYmVycyhtZW1iZXJzSWQsKHJlc3ApPT57IC8vIHNhdmUgY3VycmVudCB2aXNpYmxlIGZvcm0gbWVtYmVyIG9yIHNlbGVjdGVkIHVzZXIgcHJvZmlsZSBpZFxuICAgIFx0XHRcdHRoaXMucHJvcHMudXNlckRldGFpbHMoJ3NlbGZfZGF0YScsIG1lbWJlcl9kdW1teV9kYXRhKSAvLyB0byBzYXZlIHVzZXIgZm9ybSBkZXRhaWxzIGluIHN0b3JlXG4gICAgXHRcdH0pXG4gICAgXHR9ZWxzZXtcbiAgICBcdFx0aWYodGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhICYmIHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhKS5sZW5ndGggJiYgIHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnBsYW4gJiYgdGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEucGxhbi5sZW5ndGggPjApe1xuICAgIFx0XHRcdC8vIHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnBsYW5bMF0udG90YWxfYWxsb3dlZF9tZW1iZXJzXHRcbiAgICBcdFx0XHRcdGlmKHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkVmlwTWVtYmVyc0lkICYmIHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkVmlwTWVtYmVyc0lkLmxlbmd0aCA+IDAgJiYgdGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQubGVuZ3RoICA8IHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnBsYW5bMF0udG90YWxfYWxsb3dlZF9tZW1iZXJzKXtcblx0XHRcdCAgICBcdFx0bWVtYmVyc0lkID0gW10uY29uY2F0KHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkVmlwTWVtYmVyc0lkKVxuXHRcdFx0ICAgIFx0XHRsZXQgY3VycmVudEZvcm1JZHNDb3VudCA9IHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkVmlwTWVtYmVyc0lkLmxlbmd0aFxuXHRcdFx0ICAgIFx0XHRsZXQgdG90YWxfYWxsb3dlZF9tZW1iZXJzID0gdGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEucGxhblswXS50b3RhbF9hbGxvd2VkX21lbWJlcnNcblx0XHRcdCAgICBcdFx0aWYoY3VycmVudEZvcm1JZHNDb3VudCA8PSB0b3RhbF9hbGxvd2VkX21lbWJlcnMpe1xuXHRcdFx0XHRcdFx0XHRtZW1iZXJzSWQucHVzaCh7W2N1cnJlbnRGb3JtSWRzQ291bnRdOiBjdXJyZW50Rm9ybUlkc0NvdW50LCB0eXBlOidhZHVsdCcsbWVtYmVyX2Zvcm1faWQ6Y3VycmVudEZvcm1JZHNDb3VudCxpc1VzZXJTZWxlY3RlZFByb2ZpbGU6dHJ1ZSx0b19iZV9yZW1vdmU6dHJ1ZX0pXG5cdFx0XHRcdFx0XHRcdG1lbWJlcl9kdW1teV9kYXRhLmlkPWN1cnJlbnRGb3JtSWRzQ291bnRcblx0XHRcdFx0XHRcdFx0bWVtYmVyX2R1bW15X2RhdGEuaXNfdG9iZV9kdW1teV91c2VyID0gZmFsc2Vcblx0XHRcdCAgICBcdFx0fVxuXHRcdFx0ICAgIFx0XHR0aGlzLnByb3BzLnNhdmVDdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzKG1lbWJlcnNJZCwocmVzcCk9PnsgIC8vIHNhdmUgY3VycmVudCB2aXNpYmxlIGZvcm0gbWVtYmVyIG9yIHNlbGVjdGVkIHVzZXIgcHJvZmlsZSBpZFxuXHRcdFx0ICAgIFx0XHRcdHRoaXMucHJvcHMudXNlckRldGFpbHMoJ3NlbGZfZGF0YScsIG1lbWJlcl9kdW1teV9kYXRhKSAvLyB0byBzYXZlIHVzZXIgZm9ybSBkZXRhaWxzIGluIHN0b3JlXG5cdFx0XHQgICAgXHRcdH0pXG5cdFx0XHQgICAgXHR9XG4gICAgXHRcdH1cblx0ICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKXtcbiAgICBcdGxldCBjYXJkXG4gICAgXHRsZXQgc2VsZiA9IHRoaXNcbiAgICBcdGxldCBpc0R1bW15VXNlclxuICAgIFx0bGV0IG1lbWJlcnNJZCA9IFtdXG4gICAgXHRpZighdGhpcy5zdGF0ZS5zYXZlTWVtYmVycyAmJiBPYmplY3Qua2V5cyhwcm9wcy5zZWxlY3RlZF92aXBfcGxhbikubGVuZ3RoID4wICYmICFwcm9wcy5jdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQubGVuZ3RoICYmICFwcm9wcy5pc19mcm9tX3BheW1lbnQpe1xuICAgIFx0XHRsZXQgbG9naW5Vc2VyXG4gICAgXHRcdGxldCBpc0RlZmF1bHRVc2VyXG4gICAgXHRcdGlmKHByb3BzLlVTRVIpe1xuICAgIFx0XHRcdGxvZ2luVXNlciA9IHByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVcbiAgICBcdFx0fVxuICAgIFx0XHRpZih0aGlzLnByb3BzLnNhdmVkTWVtYmVyRGF0YSAmJiB0aGlzLnByb3BzLnNhdmVkTWVtYmVyRGF0YS5sZW5ndGggPjApe1xuICAgIFx0XHRcdGlmKHRoaXMucHJvcHMuc2F2ZWRNZW1iZXJEYXRhLmxlbmd0aCA9PTEgJiYgdGhpcy5wcm9wcy5zYXZlZE1lbWJlckRhdGFbMF0gPT0gbnVsbCl7XG4gICAgXHRcdFx0XHRpZihwcm9wcy5VU0VSLnByb2ZpbGVzICYmIE9iamVjdC5rZXlzKHByb3BzLlVTRVIucHJvZmlsZXMpLmxlbmd0aCAmJiBwcm9wcy5VU0VSLnByb2ZpbGVzW3Byb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdICYmIE9iamVjdC5rZXlzKHByb3BzLlVTRVIucHJvZmlsZXNbcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0pLmxlbmd0aCA+IDApe1xuXHQgICAgXHRcdFx0XHRcdG1lbWJlcnNJZC5wdXNoKHtbMF06IHByb3BzLlVTRVIucHJvZmlsZXNbcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0uaWQsIHR5cGU6J3NlbGYnLCBtZW1iZXJfZm9ybV9pZDowLGlzVXNlclNlbGVjdGVkUHJvZmlsZTp0cnVlLGZyb21XaGVyZTonc2hvd19hcGknfSlcblx0ICAgIFx0XHRcdH1lbHNle1xuXHQgICAgXHRcdFx0XHRtZW1iZXJzSWQucHVzaCh7WzBdOiAwLCB0eXBlOidzZWxmJywgbWVtYmVyX2Zvcm1faWQ6MCxpc1VzZXJTZWxlY3RlZFByb2ZpbGU6dHJ1ZSxmcm9tV2hlcmU6J3Nob3dfYXBpJyx0b19iZV9yZW1vdmU6ZmFsc2V9KVxuXHQgICAgXHRcdFx0fVxuICAgIFx0XHRcdH1lbHNle1xuICAgIFx0XHRcdFx0T2JqZWN0LmVudHJpZXMocHJvcHMuc2F2ZWRNZW1iZXJEYXRhKS5tYXAoZnVuY3Rpb24oW2tleSwgdmFsdWVdKSB7XG4gICAgXHRcdFx0XHRcdG1lbWJlcnNJZC5wdXNoKHtba2V5XTogdmFsdWUuaWQsIHR5cGU6J3NlbGYnLCBtZW1iZXJfZm9ybV9pZDowLGlzVXNlclNlbGVjdGVkUHJvZmlsZTp0cnVlLHRvX2JlX3JlbW92ZTpmYWxzZX0pXG4gICAgXHRcdFx0XHR9KVxuICAgIFx0XHRcdH1cbiAgICBcdFx0XHRwcm9wcy5zYXZlQ3VycmVudFNlbGVjdGVkVmlwTWVtYmVycyhtZW1iZXJzSWQpIC8vIHNhdmUgY3VycmVudCB2aXNpYmxlIGZvcm0gbWVtYmVyIG9yIHNlbGVjdGVkIHVzZXIgcHJvZmlsZSBpZFxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgc2F2ZU1lbWJlcnM6IHRydWV9KVxuICAgIFx0XHR9ZWxzZXtcblx0ICAgIFx0XHRpZihwcm9wcy5VU0VSLnByb2ZpbGVzICYmIE9iamVjdC5rZXlzKHByb3BzLlVTRVIucHJvZmlsZXMpLmxlbmd0aCAmJiBwcm9wcy5VU0VSLnByb2ZpbGVzW3Byb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdKXtcblx0ICAgIFx0XHRcdGlzRGVmYXVsdFVzZXIgPSBwcm9wcy5VU0VSLnByb2ZpbGVzW3Byb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdLmlzX2RlZmF1bHRfdXNlclxuXHQgICAgXHRcdFx0aXNEdW1teVVzZXIgPSBwcm9wcy5VU0VSLnByb2ZpbGVzW3Byb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdLmlzRHVtbXlVc2VyXG5cdCAgICBcdFx0fVxuXHQgICAgXHRcdGlmKCFpc0R1bW15VXNlcil7XG5cdFx0ICAgIFx0XHRtZW1iZXJzSWQucHVzaCh7JzAnOmxvZ2luVXNlciwgdHlwZTogJ3NlbGYnLG1lbWJlcl9mb3JtX2lkOjAsaXNVc2VyU2VsZWN0ZWRQcm9maWxlOmZhbHNlLHRvX2JlX3JlbW92ZTpmYWxzZX0pXG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdG1lbWJlcnNJZC5wdXNoKHsnMCc6MCwgdHlwZTonc2VsZicsbWVtYmVyX2Zvcm1faWQ6MCxpc1VzZXJTZWxlY3RlZFByb2ZpbGU6ZmFsc2UsdG9fYmVfcmVtb3ZlOmZhbHNlfSlcblx0XHRcdFx0fVxuXHRcdFx0XHRwcm9wcy5zYXZlQ3VycmVudFNlbGVjdGVkVmlwTWVtYmVycyhtZW1iZXJzSWQpIC8vIHNhdmUgY3VycmVudCB2aXNpYmxlIGZvcm0gbWVtYmVyIG9yIHNlbGVjdGVkIHVzZXIgcHJvZmlsZSBpZFxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgc2F2ZU1lbWJlcnM6IHRydWUgfSlcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLnNhdmVNZW1iZXJzICYmIE9iamVjdC5rZXlzKHByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuKS5sZW5ndGggPiAwICYmIHByb3BzLmlzX2Zyb21fcGF5bWVudCAmJiBPYmplY3Qua2V5cyhwcm9wcy52aXBfY2x1Yl9kYl9kYXRhKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRpZiAocHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIgJiYgT2JqZWN0LmtleXMocHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIpLmxlbmd0aCA+IDAgJiYgcHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIucGx1c19tZW1iZXJzICYmIHByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS51c2VyLnBsdXNfbWVtYmVycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGlmICghT2JqZWN0LmtleXMocHJvcHMudmlwQ2x1Yk1lbWJlckRldGFpbHMpLmxlbmd0aCkge1xuXHRcdFx0XHRcdG1lbWJlcnNJZC5wdXNoKHsgWzBdOiAwLCB0eXBlOiAnYWR1bHQnLCBtZW1iZXJfZm9ybV9pZDogMCwgaXNVc2VyU2VsZWN0ZWRQcm9maWxlOiBmYWxzZSwgdG9fYmVfcmVtb3ZlOmZhbHNlIH0pXG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHNhdmVNZW1iZXJzOiB0cnVlfSlcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwcm9wcy5jdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQubWFwKCh2YWwsIGtleSkgPT4ge1xuXHRcdFx0XHRcdGlmIChPYmplY3Qua2V5cyhwcm9wcy52aXBDbHViTWVtYmVyRGV0YWlscykubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0XHRtZW1iZXJzSWQucHVzaCh7IFtrZXldOiBwcm9wcy52aXBDbHViTWVtYmVyRGV0YWlsc1t2YWxba2V5XV0uaWQsIHR5cGU6ICdhZHVsdCcsIG1lbWJlcl9mb3JtX2lkOiBwcm9wcy52aXBDbHViTWVtYmVyRGV0YWlsc1t2YWxba2V5XV0uaWQsIGlzVXNlclNlbGVjdGVkUHJvZmlsZTogZmFsc2UsIHRvX2JlX3JlbW92ZTprZXkgPT0wP2ZhbHNlOnRydWUgfSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cHJvcHMuc2F2ZUN1cnJlbnRTZWxlY3RlZFZpcE1lbWJlcnMobWVtYmVyc0lkKSAvLyBzYXZlIGN1cnJlbnQgdmlzaWJsZSBmb3JtIG1lbWJlciBvciBzZWxlY3RlZCB1c2VyIHByb2ZpbGUgaWRcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHNhdmVNZW1iZXJzOiB0cnVlIH0pXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGxldCBwcm9maWxlTGVuZ3RoID0gT2JqZWN0LmtleXMocHJvcHMuVVNFUi5wcm9maWxlcykubGVuZ3RoO1xuXHRcdGxldCBjdXJyZW50U2VsZWN0ZWRQcm9maWxlcyA9IFtdXG5cdFx0bGV0IHNob3dfc2VsZWN0ZWRfcHJvZmlsZSA9IFtdXG5cdFx0dGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQubWFwKCh2YWwsIGtleSkgPT4ge1xuXHRcdFx0Y3VycmVudFNlbGVjdGVkUHJvZmlsZXMucHVzaCh2YWxba2V5XSlcblx0XHR9KVxuXHRcdGxldCBhbHJlYWR5X3VzZXJzX2lkcyA9IFtdXG5cdFx0aWYgKHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YSAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEpLmxlbmd0aCA+IDAgJiYgdGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEudXNlciAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YSkubGVuZ3RoID4gMCAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS51c2VyKS5sZW5ndGggPiAwICYmIHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIucGx1c19tZW1iZXJzICYmIHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIucGx1c19tZW1iZXJzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIucGx1c19tZW1iZXJzLm1hcCgodmFsLCBrZXkpID0+IHtcblx0XHRcdFx0YWxyZWFkeV91c2Vyc19pZHMucHVzaCh2YWwucHJvZmlsZSlcblx0XHRcdH0pXG5cdFx0fVxuXHRcdGlmIChwcm9maWxlTGVuZ3RoID4gMCkge1xuXHRcdFx0aWYgKCFwcm9wcy5VU0VSLnByb2ZpbGVzW3Byb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdLmlzRHVtbXlVc2VyKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRPYmplY3QuZW50cmllcyhwcm9wcy5VU0VSLnByb2ZpbGVzKS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlXSkge1xuXG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudFNlbGVjdGVkUHJvZmlsZXMuaW5kZXhPZihwYXJzZUludChrZXkpKSA9PSAtMSAmJiBrZXkgIT09IHByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGUgJiYgYWxyZWFkeV91c2Vyc19pZHMuaW5kZXhPZihwYXJzZUludChrZXkpKSA9PSAtMSkge1xuXHRcdFx0XHRcdFx0XHRzaG93X3NlbGVjdGVkX3Byb2ZpbGUucHVzaChrZXkpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0XHRzZWxmLnNldFN0YXRlKHsgc2hvd19zZWxlY3RlZF9wcm9maWxlczogc2hvd19zZWxlY3RlZF9wcm9maWxlIH0pXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJvY2Vzc1BheW1lbnQoZGF0YSkge1xuXHRcdGlmIChkYXRhICYmIGRhdGEuc3RhdHVzKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgcGF5bWVudERhdGE6IGRhdGEuZGF0YSB9LCAoKSA9PiB7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF5bWVudEZvcm0nKSAmJiBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnBheW1lbnREYXRhKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXltZW50Rm9ybScpXG5cdFx0XHRcdFx0XHRmb3JtLnN1Ym1pdCgpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCA1MDApXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cdHByb2NlZWRQbGFuKGlzU21zLCBleHRyYURhdGFQYXJhbXMgPSB7fSkgeyAvL25ld1xuXHRcdGxldCBzdWNjZXNzX2lkXG5cdFx0bGV0IGRhdGEgPSB7fVxuXHRcdGxldCBwdXNoRGF0YSA9IHt9XG5cdFx0bGV0IGlzRHVtbXlVc2VyXG5cdFx0bGV0IHNlbGZfcHJvZmlsZSA9IHt9XG5cdFx0bGV0IGlzX2Rpc2FibGUgPSBmYWxzZVxuXHRcdGxldCBtZW1iZXJfcmVmID0gJydcblx0XHRsZXQgdmFsaWRhdGluZ0Vycm9ycyA9IHt9XG5cdFx0bGV0IHBhcmFtXG5cdFx0bGV0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXHRcdGlmICh0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4pLmxlbmd0aCA+IDAgJiYgdGhpcy5wcm9wcy52aXBDbHViTWVtYmVyRGV0YWlscyAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnZpcENsdWJNZW1iZXJEZXRhaWxzKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRkYXRhLnBsYW5faWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmlkXG5cdFx0XHRkYXRhLm1lbWJlcnMgPSBbXVxuXHRcdFx0ZGF0YS51dG1fc3BvX3RhZ3MgPSBwYXJzZWRcblx0XHRcdHB1c2hEYXRhLnV0bV9zcG9fdGFncyA9IHBhcnNlZFxuXHRcdFx0cHVzaERhdGEucGxhbiA9IHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW5cblx0XHRcdHB1c2hEYXRhLmR1bW15X2RhdGFfdHlwZSA9ICdQTEFOX1BVUkNIQVNFJ1xuXHRcdFx0cHVzaERhdGEubWVtYmVycyA9IFtdXG5cdFx0XHRwdXNoRGF0YS5jb3Vwb25fZGF0YSA9IHRoaXMucHJvcHMudmlwQ291cG9uc1xuXHRcdFx0aWYgKGlzU21zKSB7XG5cdFx0XHRcdHB1c2hEYXRhLmlzX2FnZW50ID0gdHJ1ZVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cHVzaERhdGEuaXNfYWdlbnQgPSBmYWxzZVxuXHRcdFx0fVxuXHRcdFx0bGV0IGZpZWxkcyA9IFtdXG5cdFx0XHR0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZFZpcE1lbWJlcnNJZC5tYXAoKHZhbCwga2V5KSA9PiB7XG5cdFx0XHRcdGlmIChPYmplY3Qua2V5cyh0aGlzLnByb3BzLnZpcENsdWJNZW1iZXJEZXRhaWxzKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0ZmllbGRzID0gW11cblx0XHRcdFx0XHRwYXJhbSA9IHRoaXMucHJvcHMudmlwQ2x1Yk1lbWJlckRldGFpbHNbdmFsW2tleV1dXG5cdFx0XHRcdFx0aWYgKHBhcmFtICYmIE9iamVjdC5rZXlzKHBhcmFtKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHQvL2NvbW1vbiB2YWxpZGF0aW9uIHN0YXJ0c1xuXG5cdFx0XHRcdFx0XHRpZiAocGFyYW0ubmFtZSA9PSBcIlwiKSB7XG5cdFx0XHRcdFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG5cdFx0XHRcdFx0XHRcdGZpZWxkcy5wdXNoKCduYW1lJylcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKHBhcmFtLmRvYiA9PSBudWxsIHx8IHBhcmFtLmRvYiA9PSBcIlwiKSB7XG5cdFx0XHRcdFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG5cdFx0XHRcdFx0XHRcdGZpZWxkcy5wdXNoKCdkb2InKVxuXHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtpc19kb2JfZXJyb3I6dHJ1ZX0pXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmIChwYXJhbS5kb2IgIT0gbnVsbCAmJiAhcGFyYW0uaXNEb2JWYWxpZGF0ZWQpIHtcblx0XHRcdFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0XHRcdFx0ZmllbGRzLnB1c2goJ2RvYicpXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2lzX2RvYl9lcnJvcjp0cnVlfSlcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly9jb21tb24gdmFsaWRhdGlvbiBlbmRzIFxuXG5cdFx0XHRcdFx0XHRpZiAoIXRoaXMucHJvcHMuaXNfZnJvbV9wYXltZW50KSB7XG5cdFx0XHRcdFx0XHRcdGlmKHBhcmFtLmVtYWlsID09IFwiXCIgfHwgIXBhcmFtLmVtYWlsKXsgIFxuXHRcdFx0XHRcdFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG5cdFx0XHRcdFx0XHRcdFx0ZmllbGRzLnB1c2goJ2VtYWlsJylcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAocGFyYW0uZW1haWwgIT0gJycgJiYgcGFyYW0ucmVsYXRpb24gPT0gJ3NlbGYnKSB7XG5cdFx0XHRcdFx0XHRcdFx0bGV0IHZhbGlkRW1haWwgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcblx0XHRcdFx0XHRcdFx0XHR2YWxpZEVtYWlsID0gdmFsaWRFbWFpbC50ZXN0KHBhcmFtLmVtYWlsKVxuXHRcdFx0XHRcdFx0XHRcdGlmICghdmFsaWRFbWFpbCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0XHRcdFx0XHRcdGZpZWxkcy5wdXNoKCdlbWFpbCcpXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhbGlkYXRpbmdFcnJvcnNbcGFyYW0uaWRdID0gZmllbGRzXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHRjb25zb2xlLmxvZyh2YWxpZGF0aW5nRXJyb3JzKVxuXHRcdFx0T2JqZWN0LmtleXModmFsaWRhdGluZ0Vycm9ycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdGlmICh2YWxpZGF0aW5nRXJyb3JzW2tleV0ubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG5cdFx0XHRcdFx0bWVtYmVyX3JlZiA9IGBtZW1iZXJfJHtrZXl9YFxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0ZUVycm9yczogdmFsaWRhdGluZ0Vycm9ycyB9KVxuXHRcdFx0aWYgKGlzX2Rpc2FibGUgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWVtYmVyX3JlZikpIHtcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWVtYmVyX3JlZikuc2Nyb2xsSW50b1ZpZXcoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCBjaXR5XG5cdFx0XHRcdGxldCBjaXR5X2NvZGVcblx0XHRcdFx0bGV0IGFkZHJlc3Ncblx0XHRcdFx0bGV0IHBpbmNvZGVcblx0XHRcdFx0dmFyIG1lbWJlcnMgPSB7fVxuXHRcdFx0XHRsZXQgcHJpbWFyeV91c2VyID0ge31cblx0XHRcdFx0aWYgKHRoaXMucHJvcHMuaXNfZnJvbV9wYXltZW50KSB7XG5cdFx0XHRcdFx0bGV0IGlzX21lbWJlcl91cGRhdGVkID0gW11cblx0XHRcdFx0XHRsZXQgaW1hZ2VfaWRzID0gW11cblx0XHRcdFx0XHRpZiAodGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEudXNlciAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS51c2VyKS5sZW5ndGggPiAwICYmIHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIucGx1c19tZW1iZXJzICYmIHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIucGx1c19tZW1iZXJzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdHByaW1hcnlfdXNlciA9IHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIucGx1c19tZW1iZXJzLmZpbHRlcigoeCA9PiB4LmlzX3ByaW1hcnlfdXNlcikpWzBdXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0aGlzLnByb3BzLm1lbWJlcnNfcHJvb2ZzICYmIHRoaXMucHJvcHMubWVtYmVyc19wcm9vZnMubGVuZ3RoID4gMCAmJiBPYmplY3Qua2V5cyhwcmltYXJ5X3VzZXIpLmxlbmd0aCA+IDApIHsgLy9mb3Igc2VsZiBtZW1iZXJfcHJvb2ZzXG5cdFx0XHRcdFx0XHRwYXJhbSA9IHByaW1hcnlfdXNlclxuXHRcdFx0XHRcdFx0bWVtYmVycyA9IHt9XG5cdFx0XHRcdFx0XHRtZW1iZXJzLnByb2ZpbGUgPSBwYXJhbS5wcm9maWxlXG5cdFx0XHRcdFx0XHRtZW1iZXJzLmlkID0gcGFyYW0ucHJvZmlsZVxuXHRcdFx0XHRcdFx0bWVtYmVycy5pc19wcmltYXJ5X3VzZXIgPSBwYXJhbS5pc19wcmltYXJ5X3VzZXJcblx0XHRcdFx0XHRcdC8vIG1lbWJlcnMudGl0bGUgPSBwcmltYXJ5X3VzZXIudGl0bGVcblx0XHRcdFx0XHRcdG1lbWJlcnMuZmlyc3RfbmFtZSA9IHByaW1hcnlfdXNlci5maXJzdF9uYW1lXG5cdFx0XHRcdFx0XHRtZW1iZXJzLmxhc3RfbmFtZSA9ICcnXG5cdFx0XHRcdFx0XHRtZW1iZXJzLmVtYWlsID0gcHJpbWFyeV91c2VyLmVtYWlsXG5cdFx0XHRcdFx0XHRtZW1iZXJzLmRvYiA9IHByaW1hcnlfdXNlci5kb2Jcblx0XHRcdFx0XHRcdGlzX21lbWJlcl91cGRhdGVkID0gdGhpcy5wcm9wcy5tZW1iZXJzX3Byb29mcy5maWx0ZXIoKHggPT4geC5pZCA9PSBwYXJhbS5wcm9maWxlKSlcblx0XHRcdFx0XHRcdGlmIChpc19tZW1iZXJfdXBkYXRlZCAmJiBpc19tZW1iZXJfdXBkYXRlZC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChpc19tZW1iZXJfdXBkYXRlZFswXS5pbWdfcGF0aF9pZHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0XHRcdGltYWdlX2lkcyA9IFtdXG5cdFx0XHRcdFx0XHRcdFx0aXNfbWVtYmVyX3VwZGF0ZWRbMF0uaW1nX3BhdGhfaWRzLm1hcCgoaW1nSWQsIGkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGltYWdlX2lkcy5wdXNoKHsgJ3Byb29mX2ZpbGUnOiBpbWdJZC5pZCB9KVxuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0bWVtYmVycy5kb2N1bWVudF9pZHMgPSBpbWFnZV9pZHNcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGRhdGEubWVtYmVycy5wdXNoKG1lbWJlcnMpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkVmlwTWVtYmVyc0lkLm1hcCgodmFsLCBrZXkpID0+IHtcblx0XHRcdFx0XHRcdGlmIChPYmplY3Qua2V5cyh0aGlzLnByb3BzLnZpcENsdWJNZW1iZXJEZXRhaWxzKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdHBhcmFtID0gdGhpcy5wcm9wcy52aXBDbHViTWVtYmVyRGV0YWlsc1t2YWxba2V5XV1cblx0XHRcdFx0XHRcdFx0bWVtYmVycyA9IHt9XG5cdFx0XHRcdFx0XHRcdC8vIG1lbWJlcnMudGl0bGUgPSBwYXJhbS50aXRsZVxuXHRcdFx0XHRcdFx0XHQvLyBtZW1iZXJzLnJlbGF0aW9uID0gcGFyYW0ucmVsYXRpb25fa2V5XG5cdFx0XHRcdFx0XHRcdG1lbWJlcnMuZmlyc3RfbmFtZSA9IHBhcmFtLm5hbWVcblx0XHRcdFx0XHRcdFx0bWVtYmVycy5sYXN0X25hbWUgPSAnJ1xuXHRcdFx0XHRcdFx0XHRtZW1iZXJzLmVtYWlsID0gbnVsbFxuXHRcdFx0XHRcdFx0XHRtZW1iZXJzLmRvYiA9IHBhcmFtLmRvYlxuXHRcdFx0XHRcdFx0XHRtZW1iZXJzLmdlbmRlciA9IHBhcmFtLmdlbmRlclxuXHRcdFx0XHRcdFx0XHRtZW1iZXJzLnByb2ZpbGUgPSBwYXJhbS5wcm9maWxlX2lkXG5cdFx0XHRcdFx0XHRcdG1lbWJlcnMuaXNfcHJpbWFyeV91c2VyID0gZmFsc2Vcblx0XHRcdFx0XHRcdFx0Ly8gZGF0YS5tZW1iZXJzLnB1c2gobWVtYmVycylcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMucHJvcHMubWVtYmVyc19wcm9vZnMgJiYgdGhpcy5wcm9wcy5tZW1iZXJzX3Byb29mcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0aXNfbWVtYmVyX3VwZGF0ZWQgPSB0aGlzLnByb3BzLm1lbWJlcnNfcHJvb2ZzLmZpbHRlcigoeCA9PiB4LmlkID09IHBhcmFtLmlkKSlcblx0XHRcdFx0XHRcdFx0XHRpZiAoaXNfbWVtYmVyX3VwZGF0ZWQgJiYgaXNfbWVtYmVyX3VwZGF0ZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGlzX21lbWJlcl91cGRhdGVkWzBdLmltZ19wYXRoX2lkcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGltYWdlX2lkcyA9IFtdXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzX21lbWJlcl91cGRhdGVkWzBdLmltZ19wYXRoX2lkcy5tYXAoKGltZ0lkLCBpKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1hZ2VfaWRzLnB1c2goeyAncHJvb2ZfZmlsZSc6IGltZ0lkLmlkIH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRtZW1iZXJzLmRvY3VtZW50X2lkcyA9IGltYWdlX2lkc1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQvLyBtZW1iZXJzLmlkPXBhcmFtLmlkXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Ly8gcHVzaERhdGEubWVtYmVycy5wdXNoKG1lbWJlcnMpXG5cdFx0XHRcdFx0XHRcdHJldHVybiBkYXRhLm1lbWJlcnMucHVzaChtZW1iZXJzKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSlcblx0XHRcdFx0XHRsZXQgcG9wdXBNZW1EYXRhXG5cdFx0XHRcdFx0cG9wdXBNZW1EYXRhID0gZGF0YS5tZW1iZXJzXG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHBvcHVwTWVtRGF0YTogcG9wdXBNZW1EYXRhIH0pXG5cdFx0XHRcdFx0aWYgKCF0aGlzLnN0YXRlLnByb2NlZWQgJiYgdGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQgJiYgdGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQubGVuZ3RoIDwgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi50b3RhbF9hbGxvd2VkX21lbWJlcnMpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93X3BvcHVwOiB0cnVlIH0pXG5cdFx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSlcblx0XHRcdFx0XHR0aGlzLnByb3BzLmFkZFZpcE1lbWJlcnNEYXRhKGRhdGEsIChyZXNwKSA9PiB7IC8vIHRvIGFkZCBtZW1iZXIgZGV0YWlsc1xuXHRcdFx0XHRcdFx0aWYgKHJlc3Auc3VjY2Vzcykge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgndmlwLWNsdWItYWN0aXZhdGVkLWRldGFpbHMnKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQubWFwKCh2YWwsIGtleSkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKE9iamVjdC5rZXlzKHRoaXMucHJvcHMudmlwQ2x1Yk1lbWJlckRldGFpbHMpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdFx0cGFyYW0gPSB0aGlzLnByb3BzLnZpcENsdWJNZW1iZXJEZXRhaWxzW3ZhbFtrZXldXVxuXHRcdFx0XHRcdFx0XHRtZW1iZXJzID0ge31cblx0XHRcdFx0XHRcdFx0Ly8gbWVtYmVycy50aXRsZSA9IHBhcmFtLnRpdGxlXG5cdFx0XHRcdFx0XHRcdC8vIG1lbWJlcnMucmVsYXRpb24gPSBwYXJhbS5yZWxhdGlvbl9rZXlcblx0XHRcdFx0XHRcdFx0bWVtYmVycy5maXJzdF9uYW1lID0gcGFyYW0ubmFtZVxuXHRcdFx0XHRcdFx0XHRtZW1iZXJzLmxhc3RfbmFtZSA9ICcnXG5cdFx0XHRcdFx0XHRcdG1lbWJlcnMuZW1haWwgPSBwYXJhbS5lbWFpbFxuXHRcdFx0XHRcdFx0XHRtZW1iZXJzLmRvYiA9IHBhcmFtLmRvYlxuXHRcdFx0XHRcdFx0XHRtZW1iZXJzLmdlbmRlciA9IHBhcmFtLmdlbmRlclxuXHRcdFx0XHRcdFx0XHRtZW1iZXJzLnByb2ZpbGUgPSBwYXJhbS5wcm9maWxlX2lkXG5cdFx0XHRcdFx0XHRcdG1lbWJlcnMuaWQgPSBwYXJhbS5pZFxuXHRcdFx0XHRcdFx0XHRtZW1iZXJzLmlzX3ByaW1hcnlfdXNlciA9IHRydWVcblx0XHRcdFx0XHRcdFx0ZGF0YS5tZW1iZXJzLnB1c2gobWVtYmVycylcblx0XHRcdFx0XHRcdFx0ZGF0YVsnY291cG9uX2NvZGUnXSA9IHRoaXMuc3RhdGUuY291cG9uX2NvZGUgJiYgdGhpcy5zdGF0ZS5pc19wYXltZW50X2NvdXBvbl9hcHBsaWVkID8gW3RoaXMuc3RhdGUuY291cG9uX2NvZGVdIDogW11cblx0XHRcdFx0XHRcdFx0ZGF0YVsnY291cG9uX3R5cGUnXSA9IHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4uaXNfZ29sZCA/ICdnb2xkJyA6ICd2aXAnXG5cdFx0XHRcdFx0XHRcdHB1c2hEYXRhWydjb3Vwb25fY29kZSddID0gdGhpcy5zdGF0ZS5jb3Vwb25fY29kZSAmJiB0aGlzLnN0YXRlLmlzX3BheW1lbnRfY291cG9uX2FwcGxpZWQgPyBbdGhpcy5zdGF0ZS5jb3Vwb25fY29kZV0gOiBbXVxuXHRcdFx0XHRcdFx0XHRwdXNoRGF0YVsnY291cG9uX3R5cGUnXSA9IHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4uaXNfZ29sZCA/ICdnb2xkJyA6ICd2aXAnXG5cdFx0XHRcdFx0XHRcdHB1c2hEYXRhLm1lbWJlcnMucHVzaChwYXJhbSlcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSlcblxuXHRcdFx0XHRcdFx0XHRpZiAoU1RPUkFHRS5pc0FnZW50KCkpIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnB1c2hVc2VyRGF0YShwdXNoRGF0YSlcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGlmIChTVE9SQUdFICYmIFNUT1JBR0UuZ2V0QW55Q29va2llKCdzYmlfdXRtJykgJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MgJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MubGVuZ3RoICYmIHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnc2JpX3V0bScpLmxlbmd0aCkge1xuXG5cdFx0XHRcdFx0XHRcdFx0bGV0IHRhZ3MgPSB0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gJ3NiaV91dG0nKVswXVxuXHRcdFx0XHRcdFx0XHRcdGlmICh0YWdzLnV0bV90YWdzKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFbJ3V0bV9zYmlfdGFncyddID0gdGFncy51dG1fdGFnc1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5sb2NhdGlvbiAmJiBkb2N1bWVudC5sb2NhdGlvbi5ob3N0ICYmIGRvY3VtZW50LmxvY2F0aW9uLmhvc3QuaW5jbHVkZXMoJ3NiaScpKSB7XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YVsndXRtX3NiaV90YWdzJ10gPSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR1dG1fdGFnczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR1dG1fc291cmNlOiAnc2JpX3V0bScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHV0bV90ZXJtOiAnJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dXRtX21lZGl1bTogJycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHV0bV9jYW1wYWlnbjogJydcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR0aW1lOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXG5cdFx0XHRcdFx0XHRcdGlmIChpc1Ntcykge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2VuZFNNUyhleHRyYURhdGFQYXJhbXMpXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy52aXBDbHViUGF5KGRhdGEsIChyZXNwKSA9PiB7IC8vIHRvIHJlcXVlc3QgZm9yIHBheW1lbnRcblxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHJlc3AgJiYgcmVzcC5lcnJvcikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IHJlc3AuZXJyb3IgfSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAocmVzcC5wYXltZW50X3JlcXVpcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvY2Vzc1BheW1lbnQocmVzcClcblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmKHJlc3AgJiYgcmVzcC5kYXRhKXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzX2lkID0gJy92aXAtY2x1Yi1hY3RpdmF0ZWQtZGV0YWlscz9wYXltZW50X3N1Y2Nlc3M9dHJ1ZSZpZD0nICsgcmVzcC5kYXRhLmlkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goc3VjY2Vzc19pZClcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9XG5cdH1cblxuXHRwdXNoVXNlckRhdGEoZGF0YSkgeyAvLyB0byBzYXZlIHByb3Bvc2VyL3NlbGYgZGF0YSB0byB0aGUgZHVtbXkgdGFibGUgaW4gY2FzZSBvZiBhZ2VudCBvciBwcm9wb3NlciBzZWxmXG5cdFx0aWYoZGF0YSAmJiBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggJiYgZGF0YS5tZW1iZXJzICYmIGRhdGEubWVtYmVycy5sZW5ndGggJiYgU1RPUkFHRS5pc0FnZW50KCkpe1xuXHRcdFx0aWYoZGF0YS5tZW1iZXJzLmxlbmd0aCA9PTEgJiYgZGF0YS5tZW1iZXJzWzBdID09IG51bGwpe1xuXHRcdFx0XHRcblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLnByb3BzLnB1c2hNZW1iZXJzRGF0YShkYXRhKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHNlbmRTTVMoZXh0cmFEYXRhUGFyYW1zKSB7XG5cdFx0bGV0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXHRcdGxldCBleHRyYVBhcmFtcyA9IHt9XG5cdFx0aWYgKGV4dHJhRGF0YVBhcmFtcyAmJiBleHRyYURhdGFQYXJhbXMuc2VuZE9uV2hhdHN1cCkge1xuXHRcdFx0ZXh0cmFQYXJhbXNbJ21lc3NhZ2VfbWVkaXVtJ10gPSAnV0hBVFNBUFAnO1xuXHRcdH1cblx0XHR0aGlzLnByb3BzLnNlbmRBZ2VudEJvb2tpbmdVUkwobnVsbCwgJ3NtcycsICd2aXBfcHVyY2hhc2UnLCBwYXJzZWQsIGV4dHJhUGFyYW1zLCAoZXJyLCByZXMpID0+IHsgLy9zZW5kIHBheW1lbnQgbGluayBpbiBzbXMgdG8gdXNlciBieSBhZ2FlbnRcblx0XHRcdGlmIChlcnIpIHtcblx0XHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlNNUyBTRU5EIEVSUk9SXCIgfSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJTTVMgU0VOVCBTVUNDRVNTRlVMWVwiIH0pXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXG5cdHByb2NlZWRNZW1iZXJzKGlzX3dhaXQpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd19wb3B1cDogZmFsc2UsIHByb2NlZWQ6IGlzX3dhaXQgPyB0cnVlIDogZmFsc2UgfSwgKCkgPT4ge1xuXHRcdFx0aWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRfYnV5JykpIHtcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdF9idXknKS5jbGljaygpXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXG5cdHByb2NlZWRNZW1iZXJzTm8oaXNfd2FpdCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93X3BvcHVwOiBmYWxzZSwgcHJvY2VlZDogZmFsc2UsIHBvcHVwTWVtRGF0YToge30gfSlcblx0fVxuXG5cdGFwcGx5Q291cG9ucygpIHsgLy8gYXBwbHkgY291cG9ucyBcblx0XHRsZXQgc2VsZWN0ZWRfcGxhbl9pZCA9IG51bGxcblx0XHRpZiAodGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbiAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuKS5sZW5ndGggPiAwICYmICF0aGlzLnByb3BzLmlzX2Zyb21fcGF5bWVudCkge1xuXHRcdFx0Ly8gdGhpcy5wcm9wcy5nZXRDb3Vwb25zKHtwcm9kdWN0SWQ6dGhpcy5zdGF0ZS5pc19nb2xkPzg6MTEsZ29sZF9wbGFuX2lkOnRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4uaWR9KVxuXHRcdFx0c2VsZWN0ZWRfcGxhbl9pZCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4uaWRcblx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvY291cG9uL3ZpcC8ke3NlbGVjdGVkX3BsYW5faWR9LyR7dGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5pc19nb2xkID8gOCA6IDExfT9kZWFsX3ByaWNlPSR7dGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5kZWFsX3ByaWNlfSZjYXJ0X2l0ZW09YClcblx0XHR9XG5cdH1cblxuXHRyZW1vdmVDb3Vwb24oKSB7XG5cdFx0Y29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBnb2xkX3B1c2hfZGF0YT17fVxuICAgICAgICBsZXQgcGFyYW1cbiAgICAgICAgZ29sZF9wdXNoX2RhdGEucGxhbiA9IHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW5cbiAgICAgICAgZ29sZF9wdXNoX2RhdGEuZHVtbXlfZGF0YV90eXBlID0gJ1BMQU5fUFVSQ0hBU0UnXG4gICAgICAgIGdvbGRfcHVzaF9kYXRhLm1lbWJlcnMgPSBbXVxuICAgICAgICBnb2xkX3B1c2hfZGF0YS5jb3Vwb25fZGF0YSA9IFtdXG4gICAgICAgIGdvbGRfcHVzaF9kYXRhLnV0bV9zcG9fdGFncyA9IHBhcnNlZFxuICAgICAgICBnb2xkX3B1c2hfZGF0YS5pc19hZ2VudCA9IGZhbHNlXG4gICAgICAgIGdvbGRfcHVzaF9kYXRhLmNvdXBvbl90eXBlID0gdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5pc19nb2xkPydnb2xkJzondmlwJ1xuICAgICAgICB0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZFZpcE1lbWJlcnNJZC5tYXAoKHZhbCwga2V5KSA9PiB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnByb3BzLnZpcENsdWJNZW1iZXJEZXRhaWxzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwYXJhbSA9IHRoaXMucHJvcHMudmlwQ2x1Yk1lbWJlckRldGFpbHNbdmFsW2tleV1dXG4gICAgICAgICAgICBnb2xkX3B1c2hfZGF0YS5tZW1iZXJzLnB1c2gocGFyYW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGlmKFNUT1JBR0UuaXNBZ2VudCgpKXtcbiAgICAgICAgICAgIGdvbGRfcHVzaF9kYXRhLmlzX2FnZW50ID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5wdXNoVXNlckRhdGEoZ29sZF9wdXNoX2RhdGEpIC8vIHRvIHNhdmUgcHJvcG9zZXIvc2VsZiBkYXRhIHRvIHRoZSBkdW1teSB0YWJsZSBpbiBjYXNlIG9mIGFnZW50IG9yIHByb3Bvc2VyIHNlbGZcbiAgICAgICAgfVx0IFxuXHRcdHRoaXMucHJvcHMucmVtb3ZlVmlwQ291cG9ucygpIC8vIHRvIHJlc2V0IGNvdXBvbnMgdG8gaW50aWFsIHN0YXRlXG5cdH1cblxuXHRyZW1vdmVNZW1iZXJGb3JtKGlkKXtcblx0XHRsZXQgbmV3X2RhdGEgPSBbXVxuXHRcdC8vIHRoaXMuc2V0U3RhdGUoe3Nob3dDb25maXJtYXRpb25Qb3B1cDogJ29wZW4nLHRvX2JlX3JlbW92ZV9pZDppZH0pXG5cdFx0aWYodGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQgJiYgdGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQubGVuZ3RoKXtcblx0XHRcdG5ld19kYXRhID0gIHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkVmlwTWVtYmVyc0lkLmZpbHRlcih4ID0+IHgubWVtYmVyX2Zvcm1faWQgIT0gaWQpXG5cdFx0XHR0aGlzLnByb3BzLnJlbW92ZU1lbWJlcnMobmV3X2RhdGEpXG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd0NvbmZpcm1hdGlvblBvcHVwOiAnY2xvc2UnLHRvX2JlX3JlbW92ZV9pZDonJyB9KVxuXHRcdH1cblx0fVxuXG5cdHByaWNlQ29uZmlybWF0aW9uUG9wdXAoY2hvaWNlKSB7XG5cdFx0bGV0IG5ld19kYXRhID0gW11cbiAgICAgICAgaWYgKCFjaG9pY2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q29uZmlybWF0aW9uUG9wdXA6ICdjbG9zZScgfSlcbiAgICAgICAgfSBlbHNlIHtcblx0XHRcdGlmKHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkVmlwTWVtYmVyc0lkICYmIHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkVmlwTWVtYmVyc0lkLmxlbmd0aCl7XG5cdFx0XHRcdG5ld19kYXRhID0gIHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkVmlwTWVtYmVyc0lkLmZpbHRlcih4ID0+IHgubWVtYmVyX2Zvcm1faWQgIT0gdGhpcy5zdGF0ZS50b19iZV9yZW1vdmVfaWQpXG5cdFx0XHRcdHRoaXMucHJvcHMucmVtb3ZlTWVtYmVycyhuZXdfZGF0YSlcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dDb25maXJtYXRpb25Qb3B1cDogJ2Nsb3NlJyx0b19iZV9yZW1vdmVfaWQ6JycgfSlcblx0XHRcdH1cbiAgICAgICAgfVxuICAgIH1cblx0cmVuZGVyKCkge1xuXHRcdGxldCBjaGlsZFxuXHRcdGxldCBhZHVsdFxuXHRcdGxldCB1c2VyUHJvZmlsZVxuXHRcdGxldCBwcm9wb3Nlcl9pZCA9IDBcblx0XHQvLyBsZXQgc2VsZWN0ZWRQcm9maWxlSWQgPSBwYXJzZUludCh0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGUpIC8vIHRvIGJlIGRlbGV0ZWRcblx0XHRpZiAodGhpcy5wcm9wcy5VU0VSICYmIHRoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZSkge1xuXHRcdFx0aWYgKHRoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZSA9PSA5OTk5OTkpIHtcblx0XHRcdFx0cHJvcG9zZXJfaWQgPSAwXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwcm9wb3Nlcl9pZCA9IHRoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZVxuXHRcdFx0fVxuXHRcdH1cblx0XHRsZXQgc2hvd19leHRyYV9maWVsZHMgPSBmYWxzZVxuXG5cdFx0aWYgKHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkVmlwTWVtYmVyc0lkICYmIHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkVmlwTWVtYmVyc0lkLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkVmlwTWVtYmVyc0lkLmZpbHRlcih4ID0+IHguaXNVc2VyU2VsZWN0ZWRQcm9maWxlKS5tYXAoKGRhdGEsIGkpID0+IHtcblx0XHRcdFx0cHJvcG9zZXJfaWQgPSBkYXRhW2ldXG5cdFx0XHRcdHNob3dfZXh0cmFfZmllbGRzID0gdHJ1ZVxuXHRcdFx0fSlcblx0XHR9XG5cdFx0Ly8gbGV0IHNlbGVjdGVkUHJvZmlsZUlkID0gcGFyc2VJbnQodGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlKSAvLyB0byBiZSBkZWxldGVkXG5cdFx0bGV0IHNlbGVjdGVkTWVtYmVyc0lkID0gMFxuXG5cdFx0aWYgKHRoaXMucHJvcHMuaXNfZnJvbV9wYXltZW50ICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4pLmxlbmd0aCA+IDApIHtcblxuXHRcdFx0dXNlclByb2ZpbGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXSlcblxuXHRcdFx0dmFyIG4gPSAodGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi50b3RhbF9hbGxvd2VkX21lbWJlcnMgLSAxKVxuXHRcdFx0aWYgKG4gIT09IDApIHtcblx0XHRcdFx0Y2hpbGQgPSB0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZFZpcE1lbWJlcnNJZC5maWx0ZXIoeCA9PiB4LnR5cGUgPT09ICdhZHVsdCcpLm1hcCgoZGF0YSwgaSkgPT4ge1xuXHRcdFx0XHRcdC8vIHNlbGVjdGVkTWVtYmVyc0lkKytcblx0XHRcdFx0XHRcdHJldHVybiA8VmlwUHJvcG9zZXJGYW1pbHkgey4uLnRoaXMucHJvcHN9IFxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtpfSBcblx0XHRcdFx0XHRcdFx0XHRcdG1lbWJlcl9pZD17ZGF0YVtpXX0gXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD17YG1lbWJlcl8ke2l9YH0gXG5cdFx0XHRcdFx0XHRcdFx0XHRwYXJhbV9pZCA9IHtpfSBcblx0XHRcdFx0XHRcdFx0XHRcdG1lbWJlcl92aWV3X2lkPSB7aX0gXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWxpZGF0ZUVycm9ycz17dGhpcy5zdGF0ZS52YWxpZGF0ZUVycm9yc1tkYXRhW2ldXSB8fCBbXX0gXG5cdFx0XHRcdFx0XHRcdFx0XHRzaG93X3NlbGVjdGVkX3Byb2ZpbGVzPXt0aGlzLnN0YXRlLnNob3dfc2VsZWN0ZWRfcHJvZmlsZXN9IFxuXHRcdFx0XHRcdFx0XHRcdFx0bWVtYmVyX2Zvcm1faWQgPSB7aX1cblx0XHRcdFx0XHRcdFx0XHRcdGlzVXNlclNlbGVjdGVkUHJvZmlsZSA9IHtmYWxzZX1cblx0XHRcdFx0XHRcdFx0XHRcdHNob3dfZXh0cmFfZmllbGRzID0ge3Nob3dfZXh0cmFfZmllbGRzfVxuXHRcdFx0XHRcdFx0XHRcdFx0dXNlcl9lbWFpbCA9IHt0aGlzLnN0YXRlLnVzZXJfZW1haWx9XG5cdFx0XHRcdFx0XHRcdFx0XHR1c2VyX3Bob25lX251bWJlciA9IHt0aGlzLnN0YXRlLnVzZXJfcGhvbmVfbnVtYmVyfVxuXHRcdFx0XHRcdFx0XHRcdFx0aXNfZG9iX2Vycm9yPXt0aGlzLnN0YXRlLmlzX2RvYl9lcnJvcn1cblx0XHRcdFx0XHRcdFx0XHRcdGlzX3RvYmVfcmVtb3ZlX29wdGlvbiA9IHtkYXRhLnRvX2JlX3JlbW92ZX1cblx0XHRcdFx0XHRcdFx0XHRcdHJlbW92ZU1lbWJlckZvcm0gPSB7dGhpcy5yZW1vdmVNZW1iZXJGb3JtLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuaXNTYWxlc0FnZW50ICYmIHRoaXMucHJvcHMuaXNBZ2VudCA/ICcnXG5cdFx0XHRcdFx0XHQ6IDxQcm9maWxlSGVhZGVyIHNob3dQYWNrYWdlU3RyaXA9e3RydWV9IC8+XG5cdFx0XHRcdH1cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUuc2hvd0NvbmZpcm1hdGlvblBvcHVwID09ICdvcGVuJz9cblx0XHRcdFx0XHQ8Qm9va2luZ0NvbmZpcm1hdGlvblBvcHVwIHsuLi50aGlzLnByb3BzfSBwcmljZUNvbmZpcm1hdGlvblBvcHVwPXt0aGlzLnByaWNlQ29uZmlybWF0aW9uUG9wdXAuYmluZCh0aGlzKX0gaXNfZ29sZCA9IHt0cnVlfSAvPlxuXHRcdFx0XHRcdDonJ1xuXHRcdFx0XHR9XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXItdG9wLW1hcmdpbiBjYXJkTWFpblBhZGRpbmdSbXZcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzIGRza3RwLXJvdy1ndXR0ZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03IGlucy1tYWluLXBhZGRpbmdcIj5cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuc2hvd19wb3B1cCA/XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1wb3B1cC1vdmVybGF5IFwiID5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtcG9wdXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBwYWRpaW5nLXNyY2gtZWwgcGItMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBzdHlsZT17eyBmb250U2l6ZTogJzE0cHgnIH19IGNsYXNzTmFtZT1cInNyY2gtZWwtY29uZW50XCI+IHt0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZFZpcE1lbWJlcnNJZC5sZW5ndGh9IE1lbWJlcnMgQWRkZWQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidmlwLXBvcC10YWJsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidmlwLXNuLXRibCBtLTBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLnBvcHVwTWVtRGF0YSAmJiBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnBvcHVwTWVtRGF0YSkubGVuZ3RoID4gMCA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdE9iamVjdC5lbnRyaWVzKHRoaXMuc3RhdGUucG9wdXBNZW1EYXRhKS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbF0pIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsLmlzX2FscmVhZHlfdXNlciA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiA8dGFibGUga2V5PXtrZXl9IGNsYXNzTmFtZT1cInZpcC1hY3JkLWNvbnRlbnQgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Lyo8dGhlYWQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGggY29sU3Bhbj0nMyc+PHAgY2xhc3NOYW1lPVwidmlwLXBvcC10YmwtaGRcIj57dmFsLmZpcnN0X25hbWV9IHZhbC5sYXN0X25hbWU8L3A+PC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RoZWFkPiovfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoPk5hbWU8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGg+R2VuZGVyPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoPkRPQjwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQgc3R5bGU9e3t0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZSd9fT57dmFsLmZpcnN0X25hbWV9PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbC50aXRsZSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQgc3R5bGU9e3sgJ3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZScgfX0gPnt2YWwudGl0bGUgPT0gJ21yLicgPyAnbScgOiAnZid9PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogdmFsLmdlbmRlciA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBzdHlsZT17eyAndGV4dFRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJyB9fSA+e3ZhbC5nZW5kZXJ9PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57dmFsLmRvYn08L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJ31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtYnRuLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gc3R5bGU9e3sgZm9udFNpemU6ICcxNHB4JyB9fSBvbkNsaWNrPXt0aGlzLnByb2NlZWRNZW1iZXJzTm8uYmluZCh0aGlzLCAwKX0+Q2FuY2VsPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qIDxzcGFuIGNsYXNzTmFtZT1cInNyYy1lbC1idG4tYm9yZGVyXCI+PC9zcGFuPiAqL31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIHN0eWxlPXt7IGZvbnRTaXplOiAnMTRweCcgfX0gb25DbGljaz17dGhpcy5wcm9jZWVkTWVtYmVycy5iaW5kKHRoaXMsIDEpfT5TdWJtaXQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2ZpbGUtYm9vay1zY3JlZW5cIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnN1cmFuY2UtbWVtYmVyLWNvbnRhaW5lclwiIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJtYi0wXCIgc3R5bGU9e3sgcGFkZGluZzogJzJweCAwcHggNnB4JyB9fT5NZW1iZXIgRGV0YWlsczwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidmlwLXdybmctbXNzZ1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5pc19mcm9tX3BheW1lbnQgPzxzcGFuPk1lbWJlciBkZXRhaWxzIGNhbuKAmXQgYmUgZWRpdGVkIGFmdGVyIHN1Ym1pc3Npb248L3NwYW4+OiA8c3Bhbj5Hb2xkIE1lbWJlcnNoaXAgcGxhbiB3aWxsIGJlIGFjdGl2YXRlZCBvbiB0aGUgYmVsb3cgcHJvZmlsZSBtb2JpbGUgbnVtYmVyIGFuZCBjYW4gYWRkIG1vcmUgbWVtYmVycyBsYXRlcjwvc3Bhbj59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PiBcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgZ29sZFVzZXJBZGRvblwiIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JyB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCBpbnN1cmFuY2UtbWVtYmVyLWRldGFpbHMgJHt0aGlzLnByb3BzLmlzX2Zyb21fcGF5bWVudCA/ICcnIDogJ21ydC0yMCd9YH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IXRoaXMucHJvcHMuaXNfZnJvbV9wYXltZW50ID8gPFZpcFByb3Bvc2VyIHsuLi50aGlzLnByb3BzfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZD17YG1lbWJlcl8ke3Byb3Bvc2VyX2lkfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lbWJlcl9pZD17cHJvcG9zZXJfaWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbGlkYXRlRXJyb3JzPXt0aGlzLnN0YXRlLnZhbGlkYXRlRXJyb3JzW3Byb3Bvc2VyX2lkXSB8fCBbXX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVtYmVyX2Zvcm1faWQ9ezB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNob3dfc2VsZWN0ZWRfcHJvZmlsZXM9e3RoaXMuc3RhdGUuc2hvd19zZWxlY3RlZF9wcm9maWxlc31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNVc2VyU2VsZWN0ZWRQcm9maWxlPXtmYWxzZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWRkTWVtYmVycz17dGhpcy5hZGRNZW1iZXJzLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNob3dfZXh0cmFfZmllbGRzID0ge3Nob3dfZXh0cmFfZmllbGRzfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1c2VyX2VtYWlsID0ge3RoaXMuc3RhdGUudXNlcl9lbWFpbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXNlcl9waG9uZV9udW1iZXIgPSB7dGhpcy5zdGF0ZS51c2VyX3Bob25lX251bWJlcn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNfZG9iX2Vycm9yPXt0aGlzLnN0YXRlLmlzX2RvYl9lcnJvcn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogPFZpcENsdWJBY3RpdmF0ZWRNZW1iZXJEZXRhaWxzIHsuLi50aGlzLnByb3BzfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0eyF0aGlzLnByb3BzLmlzX2Zyb21fcGF5bWVudCA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy52aXBDb3Vwb25zICYmIHRoaXMucHJvcHMudmlwQ291cG9ucy5sZW5ndGggPiAwID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IGNwbi1ibHVyIG1yYi0xNSBjdXJzb3ItcG9pbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IGQtZmxleCBqYy1zcGFjZWIgbXQtMTBcIiA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cInRpdGxlIGNvdXBvbi10ZXh0IGQtZmxleCBhbGlnbi1pdGVtLWNlbnRlciBtLTBcIiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvY291cG9uLWFwcGxpZWQuc3ZnXCJ9IGNsYXNzTmFtZT1cInZpc2l0LXRpbWUtaWNvbiBtci0xMFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5Db3Vwb24gQXBwbGllZDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2g0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBtLTAgZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyXCIgc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIG1hcmdpblJpZ2h0OiAxMywgZm9udFNpemU6ICcxMnB4JywgbWFyZ2luVG9wOiAnNnB4JyB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm1yLTEwXCI+e3RoaXMucHJvcHMudmlwQ291cG9uc1swXS5jb2RlfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3R5bGU9e3sgd2lkdGg6IDE3IH19IG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucmVtb3ZlQ291cG9uKClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGlzX3BheW1lbnRfY291cG9uX2FwcGxpZWQ6IGZhbHNlLCBjb3Vwb25fZGlzY291bnQ6IG51bGwgfSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Nyb3NzLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBjcG4tYmx1ciBtcmItMTUgY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXt0aGlzLmFwcGx5Q291cG9ucy5iaW5kKHRoaXMpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBkLWZsZXggamMtc3BhY2ViIG10LTEwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cInRpdGxlIGNvdXBvbi10ZXh0IGQtZmxleCBhbGlnbi1pdGVtLWNlbnRlciBtLTBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcyNHB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9vZnItY3BuLnN2Z1wifSBjbGFzc05hbWU9XCJ2aXNpdC10aW1lLWljb24gbXItMTBcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+SEFWRSBBIENPVVBPTj88L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9oND5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInZpc2l0LXRpbWUtaWNvbiBjb3Vwb24taWNvbi1hcnJvd1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9yaWdodC1hcnJvdy5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICcnfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Y2hpbGR9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5pc19mcm9tX3BheW1lbnQgJiYgdGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQgJiYgdGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQubGVuZ3RoID4gMCAmJiB0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEgJiYgdGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEpLmxlbmd0aCAmJiB0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS5wbGFuICYmIHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnBsYW4ubGVuZ3RoID4gMCAmJiB0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS51c2VyICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIpLmxlbmd0aCAmJiB0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS51c2VyLnBsdXNfbWVtYmVycyAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS51c2VyLnBsdXNfbWVtYmVycykubGVuZ3RoICYmICgodGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEudXNlci5wbHVzX21lbWJlcnMubGVuZ3RoICsgdGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQubGVuZ3RoKSA8IHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnBsYW5bMF0udG90YWxfYWxsb3dlZF9tZW1iZXJzKT9cblxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJhZGQtbWVtLWJsa1wiIG9uQ2xpY2s9e3RoaXMuYWRkTWVtYmVycy5iaW5kKHRoaXMsIGZhbHNlKX0+IDxpbWcgY2xhc3NOYW1lPVwidmlwLWFkZC1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1tZW0uc3ZnJ30gLz5BZGQgTWVtYmVyPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdFx0XHRcdHsvKiR7dGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEudXNlci5wbHVzX21lbWJlcnMubGVuZ3RoICsgdGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQubGVuZ3RoID09IDIgPyAnM3JkJyA6IHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIucGx1c19tZW1iZXJzLmxlbmd0aCArIHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkVmlwTWVtYmVyc0lkLmxlbmd0aCA9PSAzID8gJzR0aCcgOiB0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS51c2VyLnBsdXNfbWVtYmVycy5sZW5ndGggKyB0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZFZpcE1lbWJlcnNJZC5sZW5ndGggPT0gNCA/ICdBbm90aGVyJyA6ICcnfSovfVxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0IVNUT1JBR0UuaXNBZ2VudCgpICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4gJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbikubGVuZ3RoID4gMCAmJiAhdGhpcy5wcm9wcy5pc19mcm9tX3BheW1lbnQgJiYgIXRoaXMucHJvcHMuaXNBZ2VudCA/XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cInYtYnRuIHAtMyB2LWJ0bi1wcmltYXJ5IGJ0bi1sZyBmaXhlZCBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCBidG4tbGcgdGV4dC1sZyBzdGlja3ktYnRuXCIgb25DbGljaz17dGhpcy5wcm9jZWVkUGxhbi5iaW5kKHRoaXMsIGZhbHNlKX0+Q29udGludWUgdG8gUGF5IOKCuXt0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmRlYWxfcHJpY2UgLSB0aGlzLnN0YXRlLmNvdXBvbl9kaXNjb3VudH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZm9vdC1idG4tc3ViLXNwYW5cIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDogIVNUT1JBR0UuaXNBZ2VudCgpICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4gJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbikubGVuZ3RoID4gMCAmJiAhdGhpcy5wcm9wcy5pc19mcm9tX3BheW1lbnQgJiYgdGhpcy5wcm9wcy5pc0FnZW50ID09PSAnZmFsc2UnID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJ2LWJ0biBwLTMgdi1idG4tcHJpbWFyeSBidG4tbGcgZml4ZWQgaG9yaXpvbnRhbCBib3R0b20gbm8tcm91bmQgYnRuLWxnIHRleHQtbGcgc3RpY2t5LWJ0blwiIG9uQ2xpY2s9e3RoaXMucHJvY2VlZFBsYW4uYmluZCh0aGlzLCBmYWxzZSl9PkNvbnRpbnVlIHRvIFBheSDigrl7dGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5kZWFsX3ByaWNlIC0gdGhpcy5zdGF0ZS5jb3Vwb25fZGlzY291bnR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZm9vdC1idG4tc3ViLXNwYW5cIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0IVNUT1JBR0UuaXNBZ2VudCgpICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4gJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbikubGVuZ3RoID4gMCAmJiA8ZGl2IGNsYXNzTmFtZT1cInYtYnRuLXByaW1hcnkgZC1mbGV4IGFsaWduLWZsZXgtc3AtYnQgZml4ZWQgaG9yaXpvbnRhbCBib3R0b20gbm8tcm91bmQgdGV4dC1sZyBzdGlja3ktYnRuXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaXNBZ2VudCA9PT0gJ3RydWUnICYmIHRoaXMucHJvcHMuaXNTYWxlc0FnZW50ID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHN0aWNreS1idG4gcC0wIHYtYnRuICBidG4tbGcgaG9yaXpvbnRhbCBib3R0b20gbm8tcm91bmQgdGV4dC1sZyBidXR0b25zLWFkZGNhcnQtY29udGFpbmVyIFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImFkZC1zaHBuZy1jYXJ0LWJ0blwiIGRhdGEtZGlzYWJsZWQ9XCJ0cnVlXCIgb25DbGljaz17dGhpcy5wcm9jZWVkUGxhbi5iaW5kKHRoaXMsIHRydWUpfT5TZW5kIFNNU1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZm9vdC1idG4tc3ViLXNwYW5cIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cInYtYnRuLXByaW1hcnkgYm9vay1idG4tbXJnbi1hZGp1c3RcIiBvbkNsaWNrPXt0aGlzLnByb2NlZWRQbGFuLmJpbmQodGhpcywgZmFsc2UpfT5Db250aW51ZSB0byBQYXkg4oK5e3RoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4uZGVhbF9wcmljZSAtIHRoaXMuc3RhdGUuY291cG9uX2Rpc2NvdW50fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZvb3QtYnRuLXN1Yi1zcGFuXCI+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAhdGhpcy5wcm9wcy5pc0FnZW50ICYmIHRoaXMucHJvcHMuaXNBZ2VudCA9PT0gJ2ZhbHNlJyA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cInYtYnRuIHAtMyB2LWJ0bi1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5wcm9jZWVkUGxhbi5iaW5kKHRoaXMsIGZhbHNlKX0+Q29udGludWUgdG8gUGF5IOKCuXt0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmRlYWxfcHJpY2UgLSB0aGlzLnN0YXRlLmNvdXBvbl9kaXNjb3VudH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZm9vdC1idG4tc3ViLXNwYW5cIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0IVNUT1JBR0UuaXNBZ2VudCgpICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4gJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbikubGVuZ3RoID4gMCAmJiB0aGlzLnByb3BzLmlzX2Zyb21fcGF5bWVudCAmJiAhdGhpcy5wcm9wcy5pc1NhbGVzQWdlbnQgJiYgIXRoaXMucHJvcHMuaXNBZ2VudCA/XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGlkPVwic3VibWl0X2J1eVwiIGNsYXNzTmFtZT1cInYtYnRuIHAtMyB2LWJ0bi1wcmltYXJ5IGJ0bi1sZyBmaXhlZCBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCBidG4tbGcgdGV4dC1sZyBzdGlja3ktYnRuXCIgb25DbGljaz17dGhpcy5wcm9jZWVkUGxhbi5iaW5kKHRoaXMsIGZhbHNlKX0+RG9uZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmb290LWJ0bi1zdWItc3BhblwiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFNUT1JBR0UuaXNBZ2VudCgpICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4gJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbikubGVuZ3RoID4gMCAmJiB0aGlzLnByb3BzLmlzX2Zyb21fcGF5bWVudCAmJiAhdGhpcy5wcm9wcy5pc1NhbGVzQWdlbnQgJiYgIXRoaXMucHJvcHMuaXNBZ2VudCA/XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cInYtYnRuIHAtMyB2LWJ0bi1wcmltYXJ5IGJ0bi1sZyBmaXhlZCBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCBidG4tbGcgdGV4dC1sZyBzdGlja3ktYnRuXCIgb25DbGljaz17dGhpcy5wcm9jZWVkUGxhbi5iaW5kKHRoaXMsIHRydWUpfT5TZW5kIFNNU1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmb290LWJ0bi1zdWItc3BhblwiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0OiBTVE9SQUdFLmlzQWdlbnQoKSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4pLmxlbmd0aCA+IDAgJiYgIXRoaXMucHJvcHMuaXNfZnJvbV9wYXltZW50ICYmICF0aGlzLnByb3BzLmlzU2FsZXNBZ2VudCAmJiAhdGhpcy5wcm9wcy5pc0FnZW50ID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgc3RpY2t5LWJ0biBwLTAgdi1idG4gIGJ0bi1sZyBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCB0ZXh0LWxnIGJ1dHRvbnMtYWRkY2FydC1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwidi1idG4tcHJpbWFyeSBib29rLWJ0bi1tcmduLWFkanVzdFwiIG9uQ2xpY2s9e3RoaXMucHJvY2VlZFBsYW4uYmluZCh0aGlzLCB0cnVlKX0+U2VuZCBTTVNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmb290LWJ0bi1zdWItc3BhblwiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJhZGQtc2hwbmctY2FydC1idG5cIiBvbkNsaWNrPXt0aGlzLnByb2NlZWRQbGFuLmJpbmQodGhpcywgdHJ1ZSwgeyBzZW5kT25XaGF0c3VwOiB0cnVlIH0pfT48aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvd2EtbG9nby1zbS5wbmcnfS8+U2VuZCBvbiBXaGF0c2FwcFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZvb3QtYnRuLXN1Yi1zcGFuXCI+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+wrhcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PENoYXRQYW5lbCAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDxEaXNjbGFpbWVyIGlzVmlwPXt0cnVlfSAvPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5wYXltZW50RGF0YSA/IDxQYXltZW50Rm9ybSBwYXltZW50RGF0YT17dGhpcy5zdGF0ZS5wYXltZW50RGF0YX0gcmVmcz0nb3BkJyAvPiA6IFwiXCJcblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBWaXBDbHViTWVtYmVyRGV0YWlsc1ZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBJbnN1cmFuY2VQcm9vZnMgZnJvbSAnLi9pbnN1cmFuY2VQcm9vZnMuanMnXG5pbXBvcnQgVmlwTG9naW5Qb3B1cCBmcm9tICcuL3ZpcENsdWJQb3B1cC5qcydcbmltcG9ydCBOZXdEYXRlU2VsZWN0b3IgZnJvbSAnLi4vY29tbW9ucy9uZXdEYXRlU2VsZWN0b3IuanMnXG5cbmNsYXNzIFZpcFByb3Bvc2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0bmFtZTogJycsXG5cdFx0XHRlbWFpbDogdGhpcy5wcm9wcy51c2VyX2VtYWlsLFxuXHRcdFx0Z2VuZGVyOiAnJyxcblx0XHRcdGRvYjogJycsXG5cdFx0XHRpZDogdGhpcy5wcm9wcy5tZW1iZXJfaWQsXG5cdFx0XHRwcm9maWxlX2ZsYWc6IHRydWUsXG5cdFx0XHRwcm9maWxlX2lkOiBudWxsLFxuXHRcdFx0cHJvZmlsZTonJyxcblx0XHRcdG1lbWJlcl9mb3JtX2lkOnRoaXMucHJvcHMubWVtYmVyX2Zvcm1faWQsXG5cdFx0XHR1c2VyUHJvZmlsZXM6e30sXG5cdFx0XHRzaG93UG9wdXA6ZmFsc2UsXG5cdFx0XHRpc1VzZXJTZWxlY3RlZFByb2ZpbGU6dGhpcy5wcm9wcy5pc1VzZXJTZWxlY3RlZFByb2ZpbGUsXG5cdFx0XHRwaG9uZV9udW1iZXI6dGhpcy5wcm9wcy51c2VyX3Bob25lX251bWJlcixcblx0XHRcdGlzRG9iVmFsaWRhdGVkOmZhbHNlLFxuICAgICAgICAgICAgaXNfdG9iZV9kdW1teV91c2VyOmZhbHNlLFxuICAgICAgICAgICAgaXNGb3JjZVVwZGF0ZURvYjpmYWxzZVxuXHRcdH1cblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRsZXQgcHJvZmlsZVxuXHRcdGxldCBpc0R1bW15VXNlclxuXHRcdGlmICh0aGlzLnByb3BzLlVTRVIgJiYgdGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuVVNFUi5wcm9maWxlcykubGVuZ3RoID4gMCAmJiB0aGlzLnByb3BzLnZpcENsdWJNZW1iZXJEZXRhaWxzW3RoaXMucHJvcHMubWVtYmVyX2lkXSAmJiAhdGhpcy5wcm9wcy5pc19mcm9tX3BheW1lbnQpIHtcblx0XHRcdGlmICghaXNEdW1teVVzZXIpIHtcblx0XHRcdFx0cHJvZmlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMudmlwQ2x1Yk1lbWJlckRldGFpbHNbdGhpcy5wcm9wcy5tZW1iZXJfaWRdKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cHJvZmlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMudmlwQ2x1Yk1lbWJlckRldGFpbHNbdGhpcy5wcm9wcy5tZW1iZXJfaWRdKVxuXHRcdFx0fVxuXHRcdFx0aWYoT2JqZWN0LmtleXMocHJvZmlsZSkubGVuZ3RoID4gMCl7XG5cdFx0XHRcdGlzRHVtbXlVc2VyID0gdGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzW3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0uaXNEdW1teVVzZXJcblx0XHRcdFx0aWYocHJvZmlsZS5pc0R1bW15VXNlcil7XG5cdFx0XHRcdFx0cHJvZmlsZS5pZCA9IDBcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtpZDowfSwoKT0+e1xuXHQgICAgXHRcdFx0XHR0aGlzLmdldFVzZXJEZXRhaWxzKHByb2ZpbGUpIC8vIGZpbGwgdXNlciBkZXRhaWxzIGluIGZvcm1cblx0ICAgIFx0XHRcdH0pXG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2lkOnByb2ZpbGUuaWR9LCgpPT57XG5cdCAgICBcdFx0XHRcdHRoaXMuZ2V0VXNlckRldGFpbHMocHJvZmlsZSkgLy8gZmlsbCB1c2VyIGRldGFpbHMgaW4gZm9ybVxuXHQgICAgXHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG5cdFx0bGV0IHNlbGYgPSB0aGlzXG5cdFx0aWYgKHByb3BzLlVTRVIgJiYgcHJvcHMuVVNFUi5wcm9maWxlcyAmJiBPYmplY3Qua2V5cyhwcm9wcy5VU0VSLnByb2ZpbGVzKS5sZW5ndGggPiAwICYmIHRoaXMuc3RhdGUucHJvZmlsZV9mbGFnICYmICFwcm9wcy5pc19mcm9tX3BheW1lbnQpIHtcblx0XHRcdGxldCBpc0R1bW15VXNlciA9IHByb3BzLlVTRVIucHJvZmlsZXNbcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0uaXNEdW1teVVzZXJcblx0XHRcdGlmIChPYmplY3Qua2V5cyhwcm9wcy52aXBDbHViTWVtYmVyRGV0YWlscykubGVuZ3RoID4gMCkgeyAvLyByZXRyaWV2ZSBhbHJlYWR5IG1lbWJlciBkZXRhaWxzIGZyb20gdXNlciBzdG9yZVxuXHRcdFx0XHRsZXQgcHJvZmlsZVxuXHRcdFx0XHRpZiAoIWlzRHVtbXlVc2VyKSB7XG5cdFx0XHRcdFx0cHJvZmlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLnZpcENsdWJNZW1iZXJEZXRhaWxzW3Byb3BzLm1lbWJlcl9pZF0pXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cHJvZmlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLnZpcENsdWJNZW1iZXJEZXRhaWxzW3Byb3BzLm1lbWJlcl9pZF0pXG5cdFx0XHRcdH1cdFx0XHRcdFxuXHRcdFx0XHRpZihwcm9maWxlICYmIE9iamVjdC5rZXlzKHByb2ZpbGUpLmxlbmd0aCl7XG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7aWQ6cHJvZmlsZS5pZCxwcm9maWxlX2ZsYWc6ZmFsc2V9LCgpPT57XG5cdFx0XHQgICAgXHRcdHRoaXMuZ2V0VXNlckRldGFpbHMocHJvZmlsZSkgLy8gZmlsbCB1c2VyIGRldGFpbHMgaW4gZm9ybVx0XG5cdFx0XHQgICAgXHR9KVxuXHRcdFx0ICAgIH1cblx0XHRcdH1lbHNlIGlmIChwcm9wcy5VU0VSICYmIHByb3BzLlVTRVIucHJvZmlsZXMgJiYgT2JqZWN0LmtleXMocHJvcHMuVVNFUi5wcm9maWxlcykubGVuZ3RoID4gMCAgJiYgcHJvcHMuVVNFUi5wcm9maWxlc1twcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXSkge1xuXHRcdFx0XHRsZXQgcHJvZmlsZVxuXHRcdFx0XHRsZXQgZXhpdHN0aW5nX3VzZXJfcHJvZmlsZVxuXHRcdFx0XHRpZihwcm9wcy5zYXZlZE1lbWJlckRhdGEgJiYgcHJvcHMuc2F2ZWRNZW1iZXJEYXRhLmxlbmd0aCA+IDApeyAvLyByZXRyaWV2ZSBhbHJlYWR5IG1lbWJlciBkZXRhaWxzIGZyb20gdXNlciBkdW1teSB0YWJsZSBpbiBjYXNlIG9mIGFnZW50XG5cdFx0XHRcdFx0aWYocHJvcHMuVVNFUiAmJiBPYmplY3Qua2V5cyhwcm9wcy5VU0VSKS5sZW5ndGggJiYgcHJvcHMuVVNFUi5wcm9maWxlcyAmJiBPYmplY3Qua2V5cyhwcm9wcy5VU0VSLnByb2ZpbGVzKS5sZW5ndGgpe1xuXHRcdFx0XHRcdFx0ZXhpdHN0aW5nX3VzZXJfcHJvZmlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLlVTRVIucHJvZmlsZXNbcHJvcHMubWVtYmVyX2lkXSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYocHJvcHMuc2F2ZWRNZW1iZXJEYXRhLmxlbmd0aCA9PSAxICYmIHByb3BzLnNhdmVkTWVtYmVyRGF0YVswXSA9PSBudWxsKXtcblx0XHRcdFx0XHRcdHByb2ZpbGUgPSB7Li4udGhpcy5zdGF0ZX1cblx0XHRcdFx0XHRcdHByb2ZpbGUuaWQgPSB0aGlzLnByb3BzLm1lbWJlcl9pZFxuXHRcdFx0XHRcdFx0aWYocHJvZmlsZSAmJiBPYmplY3Qua2V5cyhwcm9maWxlKS5sZW5ndGggPiAwKXtcblx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7cHJvZmlsZV9mbGFnOmZhbHNlfSlcblx0XHRcdCAgICBcdFx0XHR0aGlzLmhhbmRsZVN1Ym1pdCgpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRwcm9maWxlID0gcHJvcHMuc2F2ZWRNZW1iZXJEYXRhLmZpbHRlcigoeD0+eC5pZCA9PSBwcm9wcy5tZW1iZXJfaWQpKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihwcm9maWxlICYmIHByb2ZpbGUubGVuZ3RoID4gMCl7XG5cdFx0XHRcdFx0XHRwcm9maWxlID0gcHJvZmlsZVswXVxuXHRcdFx0XHRcdFx0aWYoZXhpdHN0aW5nX3VzZXJfcHJvZmlsZSAmJiBPYmplY3Qua2V5cyhleGl0c3RpbmdfdXNlcl9wcm9maWxlKS5sZW5ndGgpe1xuXHRcdFx0XHRcdFx0XHRwcm9maWxlLm5hbWUgPSBleGl0c3RpbmdfdXNlcl9wcm9maWxlLm5hbWVcblx0XHRcdFx0XHRcdFx0cHJvZmlsZS5kb2IgPSBleGl0c3RpbmdfdXNlcl9wcm9maWxlLmRvYlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7aWQ6cHJvZmlsZS5pZCxwcm9maWxlX2ZsYWc6ZmFsc2V9LCgpPT57XG5cdFx0XHQgICAgXHRcdFx0dGhpcy5nZXRVc2VyRGV0YWlscyhwcm9maWxlKVx0Ly8gZmlsbCB1c2VyIGRldGFpbHMgaW4gZm9ybVxuXHRcdFx0ICAgIFx0XHR9KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fWVsc2V7IC8vIHJldHJpZXZlIGFscmVhZHkgbWVtYmVyIGRldGFpbHMgZnJvbSB1c2VyIHByb2ZpbGVzXG5cdFx0XHRcdFx0cHJvZmlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLlVTRVIucHJvZmlsZXNbcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0pXG5cdFx0XHRcdFx0aWYgKHByb2ZpbGUgJiYgT2JqZWN0LmtleXMocHJvZmlsZSkubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRpZihwcm9maWxlLmlzRHVtbXlVc2VyKXtcblx0XHRcdFx0XHRcdFx0cHJvZmlsZS5pZCA9IDBcblx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7aWQ6MCxwcm9maWxlX2ZsYWc6ZmFsc2V9LCgpPT57XG5cdFx0XHQgICAgXHRcdFx0XHR0aGlzLmdldFVzZXJEZXRhaWxzKHByb2ZpbGUpLy8gZmlsbCB1c2VyIGRldGFpbHMgaW4gZm9ybVx0XG5cdFx0XHQgICAgXHRcdFx0fSlcblx0XHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtpZDpwcm9maWxlLmlkLHByb2ZpbGVfZmxhZzpmYWxzZX0sKCk9Pntcblx0XHRcdCAgICBcdFx0XHRcdHRoaXMuZ2V0VXNlckRldGFpbHMocHJvZmlsZSlcdC8vIGZpbGwgdXNlciBkZXRhaWxzIGluIGZvcm1cblx0XHRcdCAgICBcdFx0XHR9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHRvZ2dsZVBvcHVwKG5ld1Byb2ZpbGVpZCwgbWVtYmVyX2lkLCBuZXdQcm9maWxlKSB7IC8vc2VsZWN0IGZyb20gcHJvZmlsZVxuXHRcdGlmKG5ld1Byb2ZpbGVpZCAhPT0gJycpe1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7Li4ubmV3UHJvZmlsZSxwcm9maWxlX2ZsYWc6dHJ1ZX0pXG5cdFx0XHRuZXdQcm9maWxlLmlzVXNlclNlbGVjdGVkUHJvZmlsZT10cnVlXG5cdFx0XHRuZXdQcm9maWxlLmlzX3RvYmVfZHVtbXlfdXNlciA9IGZhbHNlXG5cdFx0XHR0aGlzLnByb3BzLnNlbGVjdFZpcFVzZXJQcm9maWxlKG5ld1Byb2ZpbGVpZCwgbWVtYmVyX2lkLCBuZXdQcm9maWxlLCAwKSAvLyBzZWxlY3QgcHJvZmlsZSBmcm9tIG9wdGlvblxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHNob3dQb3B1cDogIXRoaXMuc3RhdGUuc2hvd1BvcHVwLFxuXHRcdFx0XHRwcm9maWxlX2lkOiBuZXdQcm9maWxlaWQsXG5cdFx0XHRcdGlkOm5ld1Byb2ZpbGVpZCxcblx0XHRcdFx0aXNGb3JjZVVwZGF0ZURvYjp0cnVlXG5cdFx0XHR9LCgpID0+e1xuXHRcdFx0XHR0aGlzLmhhbmRsZVN1Ym1pdCgpO1xuXHRcdFx0fSlcblx0XHR9ZWxzZXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3Nob3dQb3B1cDogIXRoaXMuc3RhdGUuc2hvd1BvcHVwLGlzRm9yY2VVcGRhdGVEb2I6ZmFsc2V9KVxuXHRcdH1cblx0fVxuXG5cdGhpZGVTZWxlY3RQcm9maWxlUG9wdXAoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd1BvcHVwOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cblx0Z2V0VXNlckRldGFpbHMocHJvZmlsZSkge1xuXHRcdGxldCBlbXB0eV9zdGF0ZSA9e31cblx0XHRpZihwcm9maWxlLmlzX3RvYmVfZHVtbXlfdXNlcil7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsuLi5lbXB0eV9zdGF0ZSxuYW1lOicnfSwoKT0+e1xuXHRcdFx0XHR0aGlzLmhhbmRsZVN1Ym1pdCgpXG5cdFx0XHR9KVxuXHRcdH1cblx0XHRpZihPYmplY3Qua2V5cyhwcm9maWxlKS5sZW5ndGggPiAwKXtcblx0XHRcdGlmKHByb2ZpbGUuaWQpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtwcm9maWxlX2lkOnByb2ZpbGUuaWQ/cHJvZmlsZS5pZDonJ30pXG5cdFx0XHR9XG5cdFx0XHRpZihwcm9maWxlLnByb2ZpbGUpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtwcm9maWxlX2lkOnByb2ZpbGUucHJvZmlsZT9wcm9maWxlLnByb2ZpbGU6Jyd9KVxuXHRcdFx0fVxuXHRcdFx0aWYocHJvZmlsZS5nZW5kZXIgPT0gJ20nKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7Z2VuZGVyOnByb2ZpbGUuZ2VuZGVyP3Byb2ZpbGUuZ2VuZGVyOicnLHRpdGxlOiAnbXIuJ30pXG5cdFx0XHR9ZWxzZSBpZihwcm9maWxlLmdlbmRlciA9PSAnZicpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtnZW5kZXI6cHJvZmlsZS5nZW5kZXI/cHJvZmlsZS5nZW5kZXI6JycsdGl0bGU6ICdtaXNzJ30pXG5cdFx0XHR9XG5cblx0XHRcdGlmKHByb2ZpbGUubmFtZSA9PSAnVXNlcicgfHwgcHJvZmlsZS5uYW1lID09ICd1c2VyJyl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBuYW1lOicnfSlcblx0XHRcdH1lbHNlIGlmKHByb2ZpbGUubmFtZSl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBuYW1lOnByb2ZpbGUubmFtZT9wcm9maWxlLm5hbWU6Jyd9KVxuXHRcdFx0fVxuXHRcdFx0aWYodGhpcy5wcm9wcy5pc19mcm9tX3BheW1lbnQpe1xuXHRcdFx0XHRpZihwcm9maWxlLmZpcnN0X25hbWUpe1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe25hbWU6cHJvZmlsZS5maXJzdF9uYW1lP3Byb2ZpbGUuZmlyc3RfbmFtZTpwcm9maWxlLm5hbWU/cHJvZmlsZS5uYW1lOicnfSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYocHJvZmlsZS5pc190b2JlX2R1bW15X3VzZXIpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtpc190b2JlX2R1bW15X3VzZXI6cHJvZmlsZS5pc190b2JlX2R1bW15X3VzZXJ9KVxuXHRcdFx0fVxuXHRcdFx0aWYodGhpcy5wcm9wcy51c2VyX2VtYWlsKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZW1haWw6dGhpcy5wcm9wcy51c2VyX2VtYWlsfSlcblx0XHRcdH1cblx0XHRcdGlmKHByb2ZpbGUuZW1haWwpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtlbWFpbDpwcm9maWxlLmVtYWlsfSlcblx0XHRcdH1cblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRkb2I6IHByb2ZpbGUuZG9iID8gcHJvZmlsZS5kb2IgOicnXG5cdFx0XHR9LCgpPT57XG5cdFx0XHRcdHRoaXMuaGFuZGxlU3VibWl0KClcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlQ2hhbmdlKGZpZWxkLCBldmVudCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0W2V2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFyYW0nKV06IGV2ZW50LnRhcmdldC52YWx1ZVxuXHRcdH0pXG5cdH1cblxuXHRoYW5kbGVTdWJtaXQoKSB7XG5cdFx0bGV0IHByb2ZpbGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXSlcblx0XHRpZiAoIXByb2ZpbGUuaXNEdW1teVVzZXIgJiYgdGhpcy5wcm9wcy5tZW1iZXJfaWQgPiAwKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgcHJvZmlsZV9pZDogdGhpcy5wcm9wcy5tZW1iZXJfaWQgfSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHByb2ZpbGVfaWQ6IG51bGwgfSlcblx0XHR9XG5cdFx0dmFyIHNlbGZfZGF0YSA9IHRoaXMuc3RhdGVcblx0XHR0aGlzLnByb3BzLnVzZXJEZXRhaWxzKCdzZWxmX2RhdGEnLCBzZWxmX2RhdGEpXG5cdH1cblxuXHRoYW5kbGVOYW1lQ2hhcmFjdGVycyhmaWVsZCwgZXZlbnQpIHtcblx0XHRpZiAoZmllbGQgPT0gJ25hbWUnKSB7XG5cdFx0XHRpZiAodGhpcy5zdGF0ZS5uYW1lLmxlbmd0aCA9PSA1MCkge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fVxuXHRcdH0gXG5cdFx0Ly8gZWxzZSBpZiAoZmllbGQgPT0gJ2xhc3RfbmFtZScpIHtcblx0XHQvLyBcdGlmICh0aGlzLnN0YXRlLmxhc3RfbmFtZS5sZW5ndGggPT0gNTApIHtcblx0XHQvLyBcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHQvLyBcdH1cblx0XHQvLyB9XG5cdH1cblxuXHRoYW5kbGVFbWFpbCgpIHtcblx0XHRsZXQgZm9ybUlzVmFsaWQgPSB0cnVlO1xuXHRcdGlmICh0aGlzLnN0YXRlLmVtYWlsICE9ICcnKSB7XG5cdFx0XHRsZXQgdmFsaWRFbWFpbCA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuXHRcdFx0dmFsaWRFbWFpbCA9IHZhbGlkRW1haWwudGVzdCh0aGlzLnN0YXRlLmVtYWlsKTtcblx0XHRcdGlmICh2YWxpZEVtYWlsKSB7XG5cdFx0XHRcdHRoaXMuaGFuZGxlU3VibWl0KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIEVudGVyIHZhbGlkIEVtYWlsXCIgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0c3VibWl0TmV3RG9iKHR5cGUsbmV3RGF0ZSxpc1ZhbGlkRG9iKSB7XG5cdFx0bGV0IHNlbGYgPSB0aGlzXG5cdFx0c2VsZi5zZXRTdGF0ZSh7XG5cdFx0XHRkb2I6IG5ld0RhdGUsIGlzRG9iVmFsaWRhdGVkOmlzVmFsaWREb2Jcblx0XHR9LCAoKSA9PiB7XG5cdFx0XHRzZWxmLmhhbmRsZVN1Ym1pdCgpXG5cdFx0fSlcblx0fVxuXG5cdHVuU2V0Rm9yY2VVcGRhdGVEb2IoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtpc0ZvcmNlVXBkYXRlRG9iOmZhbHNlfSlcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnByb3BzLm1lbWJlcl9pZClcblx0XHRsZXQgc2VsZiA9IHRoaXNcblx0XHRsZXQgY29tbW9uTXNnU3BhbiA9IDxzcGFuIGNsYXNzTmFtZT1cImZpbGwtZXJyb3Itc3BhblwiPipUaGlzIGlzIGEgbWFuZGF0b3J5IGZpZWxkPC9zcGFuPlxuXHRcdGxldCBpc0R1bW15VXNlclxuXHRcdGlmICh0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzKS5sZW5ndGggJiYgdGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzW3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0pIHtcblx0XHRcdGlzRHVtbXlVc2VyID0gdGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzW3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0uaXNEdW1teVVzZXJcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiIGlkPXtpc0R1bW15VXNlciA/ICdtZW1iZXJfMCcgOiBgbWVtYmVyXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZigndGl0bGUnKSA+IC0xID9cblx0XHRcdFx0XHRcdFx0XHRjb21tb25Nc2dTcGFuIDogJydcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgbGFiZWwtbmFtZXMtYnV0dG9ucyAke3RoaXMuc3RhdGUuZ2VuZGVyID09ICdtJz8nYnRuLWFjdGl2ZSc6Jyd9YH0gbmFtZT1cImdlbmRlclwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZ2VuZGVyID09ICdtJ30gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7ICdnZW5kZXInOiAnbScgfSwoKT0+e3RoaXMuaGFuZGxlU3VibWl0KCkgfSl9IG9uQmx1cj17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0+TWFsZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YGxhYmVsLW5hbWVzLWJ1dHRvbnMgJHt0aGlzLnN0YXRlLmdlbmRlciA9PSAnZic/J2J0bi1hY3RpdmUnOicnfWB9IG5hbWU9XCJnZW5kZXJcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmdlbmRlciA9PSAnZid9IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyAnZ2VuZGVyJzogJ2YnIH0sKCk9Pnt0aGlzLmhhbmRsZVN1Ym1pdCgpIH0pfSBvbkJsdXI9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9PkZlbWFsZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXAgaW5wLW1hcmdpbi1yaWdodCBcIj5cblx0XHRcdFx0XHRcdFx0PGlucHV0IFxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7ICd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnIH19IFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXG5cdFx0XHRcdFx0XHRcdFx0aWQ9e2BuYW1lXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2wgJHt0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ25hbWUnKSA+IC0xID8gJ2ZpbGwtZXJyb3InIDogJyd9YH0gcmVxdWlyZWQgXG5cdFx0XHRcdFx0XHRcdFx0YXV0b0NvbXBsZXRlPVwiZmlyc3RfbmFtZVwiIFxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJuYW1lXCIgXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1wYXJhbT0nbmFtZScgXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgJ25hbWUnKX0gXG5cdFx0XHRcdFx0XHRcdFx0b25CbHVyPXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfSBcblx0XHRcdFx0XHRcdFx0XHQvLyBkaXNhYmxlZD17dGhpcy5wcm9wcy5pc19mcm9tX3BheW1lbnQgfHwgdGhpcy5zdGF0ZS5kaXNhYmxlRk5hbWUgPyAnZGlzYWJsZWQnIDogJyd9IFxuXHRcdFx0XHRcdFx0XHRcdG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlTmFtZUNoYXJhY3RlcnMuYmluZCh0aGlzLCAnbmFtZScpfSBcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5pc19mcm9tX3BheW1lbnQgLyp8fCB0aGlzLnN0YXRlLmRpc2FibGVGTmFtZSovID8gJ2Zvcm0tY29udHJvbC1wbGFjZWhvbGRlciBkYXRlUGlja2VyTGFiZWwnIDogJ2Zvcm0tY29udHJvbC1wbGFjZWhvbGRlcid9IGh0bWxGb3I9e2BuYW1lXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0+PHNwYW4gY2xhc3NOYW1lPVwibGFiZWxEb3RcIj48L3NwYW4+TmFtZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvdXNlci0wMS5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ25hbWUnKSA+IC0xID9cblx0XHRcdFx0XHRcdFx0XHRjb21tb25Nc2dTcGFuIDogJydcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7Lyo8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLWdyb3VwIGlucy1mb3JtLWdyb3VwIGlucC1tYXJnaW4tcmlnaHRcIj5cblx0XHRcdFx0XHRcdFx0PGlucHV0IFxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7ICd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnIH19IFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXG5cdFx0XHRcdFx0XHRcdFx0aWQ9e2BsYXN0X25hbWVfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfSBcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgaW5zLWZvcm0tY29udHJvbCAke3RoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignbGFzdF9uYW1lJykgPiAtMSA/ICdmaWxsLWVycm9yJyA6ICcnfWB9IHJlcXVpcmVkIFxuXHRcdFx0XHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cImxhc3RfbmFtZVwiIFxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJsYXN0X25hbWVcIiBcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5sYXN0X25hbWV9IFxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtcGFyYW09J2xhc3RfbmFtZScgXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgJ2xhc3RfbmFtZScpfSBcblx0XHRcdFx0XHRcdFx0XHRvbkJsdXI9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcywgZmFsc2UsZmFsc2UpfSBcblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17dGhpcy5wcm9wcy5pc19mcm9tX3BheW1lbnQgfHwgdGhpcy5zdGF0ZS5kaXNhYmxlTE5hbWUgPyAnZGlzYWJsZWQnIDogJyd9IFxuXHRcdFx0XHRcdFx0XHRcdG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlTmFtZUNoYXJhY3RlcnMuYmluZCh0aGlzLCAnbGFzdF9uYW1lJyl9IFxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmlzX2Zyb21fcGF5bWVudCB8fCB0aGlzLnN0YXRlLmRpc2FibGVMTmFtZSA/ICdmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXIgZGF0ZVBpY2tlckxhYmVsJyA6ICdmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXInfSBodG1sRm9yPXtgbGFzdF9uYW1lXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0+PHNwYW4gY2xhc3NOYW1lPVwibGFiZWxEb3RcIj48L3NwYW4+TGFzdCBOYW1lPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy91c2VyLTAxLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignbGFzdF9uYW1lJykgPiAtMSA/XG5cdFx0XHRcdFx0XHRcdFx0Y29tbW9uTXNnU3BhbiA6ICcnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+Ki99XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0IXRoaXMucHJvcHMuaXNfZnJvbV9wYXltZW50ICYmICF0aGlzLnByb3BzLnVzZXJfZW1haWw/XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIiBpZD17YGVtYWlsc18ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9IFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2wgJHt0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ2VtYWlsJykgPiAtMSA/ICdmaWxsLWVycm9yJyA6ICcnfWB9IHJlcXVpcmVkIFxuXHRcdFx0XHRcdFx0XHRcdFx0YXV0b0NvbXBsZXRlPVwiZW1haWxcIiBcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJlbWFpbFwiIFxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMucHJvcHMudXNlcl9lbWFpbD90aGlzLnByb3BzLnVzZXJfZW1haWw6dGhpcy5zdGF0ZS5lbWFpbH0gXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXBhcmFtPSdlbWFpbCcgXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCdlbWFpbCcpfSBcblx0XHRcdFx0XHRcdFx0XHRcdG9uQmx1cj17dGhpcy5oYW5kbGVFbWFpbC5iaW5kKHRoaXMpfSBcblx0XHRcdFx0XHRcdFx0XHRcdC8vIGRpc2FibGVkPXt0aGlzLnByb3BzLmlzX2Zyb21fcGF5bWVudCB8fCB0aGlzLnN0YXRlLmRpc2FibGVFbWFpbCA/ICdkaXNhYmxlZCcgOiAnJ30gIFxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5pc19mcm9tX3BheW1lbnQgLyp8fCB0aGlzLnN0YXRlLmRpc2FibGVFbWFpbCovID8gJ2Zvcm0tY29udHJvbC1wbGFjZWhvbGRlciBkYXRlUGlja2VyTGFiZWwnIDogJ2Zvcm0tY29udHJvbC1wbGFjZWhvbGRlcid9IGh0bWxGb3I9e2BlbWFpbHNfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfT48c3BhbiBjbGFzc05hbWU9XCJsYWJlbERvdFwiPjwvc3Bhbj5FbWFpbDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9tYWlsLTAxLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignZW1haWwnKSA+IC0xID9cblx0XHRcdFx0XHRcdFx0XHRcdGNvbW1vbk1zZ1NwYW4gOiAnJ1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDonJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQvKnRoaXMucHJvcHMuc2hvd19leHRyYV9maWVsZHMgJiYgIXRoaXMucHJvcHMuaXNfZnJvbV9wYXltZW50P1xuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIiBpZD17YHBob25lXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgaW5zLWZvcm0tY29udHJvbCAke3RoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZigncGhvbmVfbnVtYmVyJykgPiAtMSA/ICdmaWxsLWVycm9yJyA6ICcnfWB9IHJlcXVpcmVkIFxuXHRcdFx0XHRcdFx0XHRcdFx0YXV0b0NvbXBsZXRlPVwicGhvbmVfbnVtYmVyXCIgXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwicGhvbmVfbnVtYmVyXCIgXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5waG9uZV9udW1iZXJ9IFxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS1wYXJhbT0ncGhvbmVfbnVtYmVyJyBcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMsICdwaG9uZV9udW1iZXInKX0gXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkJsdXI9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcywgZmFsc2UsZmFsc2UpfVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e3RoaXMucHJvcHMuaXNfZnJvbV9wYXltZW50IHx8IHRoaXMuc3RhdGUuZGlzYWJsZVBob25lTm8gPyAnZGlzYWJsZWQnIDogJyd9ICBcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9e3RoaXMucHJvcHMuaXNfZnJvbV9wYXltZW50IHx8IHRoaXMuc3RhdGUuZGlzYWJsZVBob25lTm8gPyAnZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyIGRhdGVQaWNrZXJMYWJlbCcgOiAnZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyJ30gaHRtbEZvcj17YHBob25lXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0+PHNwYW4gY2xhc3NOYW1lPVwibGFiZWxEb3RcIj48L3NwYW4+UGhvbmUgTnVtZXI8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbWFpbC0wMS5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ3Bob25lX251bWJlcicpID4gLTEgP1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29tbW9uTXNnU3BhbiA6ICcnXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0OicnKi9cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHQ8Zm9ybT5cblx0XHRcdFx0XHQ8TmV3RGF0ZVNlbGVjdG9yIHsuLi50aGlzLnByb3BzfSBnZXROZXdEYXRlPXt0aGlzLnN1Ym1pdE5ld0RvYi5iaW5kKHRoaXMpfSBpc19kb2JfZXJyb3I9e3RoaXMucHJvcHMuaXNfZG9iX2Vycm9yfSAgb2xkX2RvYj17dGhpcy5zdGF0ZS5kb2J9IGlzX2dvbGQ9e3RydWV9IHVzZXJfZm9ybV9pZCA9e3RoaXMucHJvcHMubWVtYmVyX2lkfSBpc0ZvcmNlVXBkYXRlRG9iID17dGhpcy5zdGF0ZS5pc0ZvcmNlVXBkYXRlRG9ifSB1blNldEZvcmNlVXBkYXRlRG9iPXt0aGlzLnVuU2V0Rm9yY2VVcGRhdGVEb2IuYmluZCh0aGlzKX0gLz5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ2RvYicpID4gLTEgP1xuXHRcdFx0XHRcdFx0XHRjb21tb25Nc2dTcGFuIDogJydcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9mb3JtPiBcblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7Lyo8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2BpbnMtZm9ybS1ncm91cCAke3RoaXMucHJvcHMuaXNfZnJvbV9wYXltZW50IHx8IHRoaXMuc3RhdGUuZGlzYWJsZURvYiA/J2NsaWNrLWRpc2FibGUnOicnfWB9ID5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1wbGFjZWhvbGRlciBkYXRlUGlja2VyTGFiZWxcIiBodG1sRm9yPVwiaW5zLWRhdGVcIj5EYXRlIG9mIGJpcnRoPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jYWxlbmRhci0wMS5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkb2Itc2VsZWN0LWRpdiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkb2Itc2VsZWN0IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3QgaWQ9e2BkYXlkcm9wZG93bl8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9IHZhbHVlPXt0aGlzLnN0YXRlLmRheX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gaGlkZGVuPkREPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiZG9iLWRvd24taWNvblwiIHN0eWxlPXt7IHJpZ2h0OiAnNHB4JyB9fSBzcmM9XCIvYXNzZXRzL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZG9iLXNlbGVjdCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGlkPXtgbW9udGhkcm9wZG93bl8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9IHZhbHVlPXt0aGlzLnN0YXRlLm1udGh9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGhpZGRlbj5NTTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImRvYi1kb3duLWljb25cIiBzdHlsZT17eyByaWdodDogJzRweCcgfX0gc3JjPVwiL2Fzc2V0cy9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvYi1zZWxlY3QgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdCBpZD17YHllYXJkcm9wZG93bl8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9IHZhbHVlPXt0aGlzLnN0YXRlLnllYXJ9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGhpZGRlbj5ZWVlZPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiZG9iLWRvd24taWNvblwiIHN0eWxlPXt7IHJpZ2h0OiAnM3B4JyB9fSBzcmM9XCIvYXNzZXRzL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ2RvYicpID4gLTEgP1xuXHRcdFx0XHRcdFx0XHRcdGNvbW1vbk1zZ1NwYW4gOiAnJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PiovfVxuXHRcdFx0XHRcdHshaXNEdW1teVVzZXI/PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3JTZXBhcmF0b3JcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4+b3I8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3ViLWZvcm0taGVkLWNsaWNrXCIgc3R5bGU9e3tqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nfX0gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRcdHNob3dQb3B1cDogdHJ1ZSwgcHJvZmlsZV9mbGFnOnRydWUsaXNGb3JjZVVwZGF0ZURvYjpmYWxzZX0pfT5cblx0XHRcdFx0XHRcdFx0U2VsZWN0IFByb2ZpbGUvQWRkIE5ldyBQcm9maWxlXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcmd0LWFydy5zdmdcIn0gLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj46Jyd9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Ly8gdGhpcy5wcm9wcy5pc19mcm9tX3BheW1lbnQ/XG5cdFx0XHRcdFx0Ly8gXHQ8SW5zdXJhbmNlUHJvb2ZzIHsuLi50aGlzLnByb3BzfSAvPlxuXHRcdFx0XHRcdC8vIFx0OiAnJ1xuXHRcdFx0XHR9XG5cdFx0XHRcdHt0aGlzLnN0YXRlLnNob3dQb3B1cD9cblx0XHRcdFx0XHQ8VmlwTG9naW5Qb3B1cCAgey4uLnRoaXMucHJvcHN9IFxuXHRcdFx0XHRcdFx0Y3VycmVudFNlbGVjdGVkVmlwTWVtYmVyc0lkPXt0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZFZpcE1lbWJlcnNJZH0gXG5cdFx0XHRcdFx0XHRtZW1iZXJfaWQ9e3RoaXMucHJvcHMubWVtYmVyX2lkfSBcblx0XHRcdFx0XHRcdGNsb3NlUG9wdXA9e3RoaXMudG9nZ2xlUG9wdXAuYmluZCh0aGlzKX0gXG5cdFx0XHRcdFx0XHRpc1NlbGVjdHByb2ZpbGUgPSB7dHJ1ZX0gXG5cdFx0XHRcdFx0XHR2aXBDbHViTWVtYmVyRGV0YWlscyA9e3RoaXMucHJvcHMudmlwQ2x1Yk1lbWJlckRldGFpbHNbdGhpcy5wcm9wcy5tZW1iZXJfaWRdfVxuXHRcdFx0XHRcdFx0aGlkZVNlbGVjdFByb2ZpbGVQb3B1cD17dGhpcy5oaWRlU2VsZWN0UHJvZmlsZVBvcHVwLmJpbmQodGhpcyl9IFxuXHRcdFx0XHRcdFx0aXNfY2hpbGRfb25seSA9IHt0aGlzLnByb3BzLmlzX2NoaWxkX29ubHl9XG5cdFx0XHRcdFx0XHRpc19zZWVfbW9yZT17ZmFsc2V9XG5cdFx0XHRcdFx0Lz4gOiAnJ1xuXHRcdFx0XHR9XG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdClcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpcFByb3Bvc2VyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgdXNlckRldGFpbHMsIHNhdmVDdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzLCBjaXRpZXNEYXRhLCBzZWxlY3RWaXBVc2VyUHJvZmlsZSwgdmlwQ2x1YlBheSwgYWRkVmlwTWVtYmVyc0RhdGEsIHVwbG9hZFZpcFByb29mLCByZW1vdmVWaXBNZW1iZXJQcm9vZiwgc3RvcmVWaXBNZW1iZXJQcm9vZnMsIHB1c2hNZW1iZXJzRGF0YSwgcmV0cmlldmVNZW1iZXJzRGF0YSwgc2VsZWN0VmlwQ2x1YlBsYW4sIHJlc2V0VmlwRGF0YSwgdmlwUGx1c0xlYWQsIHNlbmRBZ2VudEJvb2tpbmdVUiwgY2xlYXJWaXBNZW1lYmVyRGF0YSwgZ2V0Q291cG9ucywgYXBwbHlDb3Vwb25EaXNjb3VudCwgcmVtb3ZlVmlwQ291cG9ucywgc2VuZEFnZW50Qm9va2luZ1VSTCwgZ2V0VmlwTGlzdCxyZW1vdmVNZW1iZXJzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBWaXBDbHViTWVtYmVyRGV0YWlsc1ZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy92aXBDbHViL3ZpcENsdWJNZW1iZXJEZXRhaWxzVmlldy5qcydcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0xvYWRlcidcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbmNsYXNzIFZpcENsdWJNZW1iZXJEZXRhaWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICBpc1NhbGVzQWdlbnQ6cGFyc2VkLnV0bV9zb3VyY2UsXG4gICAgICAgICAgICBpc0FnZW50OnBhcnNlZC5pc19hZ2VudCB8fCBmYWxzZSxcbiAgICAgICAgICAgIC8vIGlzX2dvbGQ6cGFyc2VkLmlzX2dvbGQgfHwgZmFsc2UsXG4gICAgICAgICAgICBpc19nb2xkOnRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKCd2aXAtZ29sZC1kZXRhaWxzJyksXG4gICAgICAgICAgICBpc19mcm9tX3BheW1lbnQ6cGFyc2VkLmlzX2Zyb21fcGF5bWVudD9wYXJzZWQuaXNfZnJvbV9wYXltZW50OmZhbHNlLFxuICAgICAgICAgICAgaXNfdmlwX2dvbGQ6cGFyc2VkLmlzX3ZpcF9nb2xkP3BhcnNlZC5pc192aXBfZ29sZDpmYWxzZSxcbiAgICAgICAgICAgIGlzX25hdmlnYXRlX3RvX2Zvcm06ZmFsc2UsXG4gICAgICAgICAgICBpc191c2VyX2FscmR5X2dvbGQ6ZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgZXh0cmFQYXJhbXMgPSB7fVxuICAgICAgICBsZXQgZGF0YT17fVxuICAgICAgICBkYXRhLnNlbGVjdGVkTG9jYXRpb24gPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb25cbiAgICAgICAgZGF0YS5pc1NhbGVzQWdlbnQgPSB0aGlzLnN0YXRlLmlzU2FsZXNBZ2VudFxuICAgICAgICBkYXRhLmlzQWdlbnQgPSB0aGlzLnN0YXRlLmlzQWdlbnRcbiAgICAgICAgZGF0YS5pc19nb2xkID0gdGhpcy5zdGF0ZS5pc19nb2xkXG4gICAgICAgIGRhdGEuYWxsID0gdGhpcy5zdGF0ZS5pc192aXBfZ29sZFxuICAgICAgICBkYXRhLmZyb21XaGVyZSA9ICd1c2VyX2Zvcm0nXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuaXNfZnJvbV9wYXltZW50KXtcbiAgICAgICAgICAgIGV4dHJhUGFyYW1zWyd1c2VyX3R5cGUnXT0gJ2dvbGQnXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc19uYXZpZ2F0ZV90b19mb3JtOnRydWV9KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXRyaWV2ZU1lbWJlcnNEYXRhKCdQTEFOX1BVUkNIQVNFJyxleHRyYVBhcmFtcylcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldFZpcExpc3QoZmFsc2UsZGF0YSwocmVzcCk9PnsgLy8gdG8gZ2V0IHZpcCBwbGFuIGxpc3RcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwKVxuICAgICAgICAgICAgICAgIGlmKCFyZXNwLmNlcnRpZmljYXRlKXtcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFQYXJhbXNbJ3VzZXJfdHlwZSddPSAnZ29sZCdcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNfbmF2aWdhdGVfdG9fZm9ybTp0cnVlfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXRyaWV2ZU1lbWJlcnNEYXRhKCdQTEFOX1BVUkNIQVNFJyxleHRyYVBhcmFtcykgLy8gdG8gcmV0cmlldmUgYWxyZWFkeSBwdXNoZWQgbWVtYmVyIGRhdGEgaW4gY2FzZSBvZiBhZ2VudCBvciBwcm9wb3NlciBpdCBzZWxmXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzX3VzZXJfYWxyZHlfZ29sZDp0cnVlfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSBcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbiAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuKS5sZW5ndGggPiAwKXtcbiAgICAgICAgLy8gICAgIGV4dHJhUGFyYW1zWyd1c2VyX3R5cGUnXT0gdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5pc19nb2xkPydnb2xkJzondmlwJ1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGV4dHJhUGFyYW1zWyd1c2VyX3R5cGUnXT0gdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5pc19nb2xkPydnb2xkJzondmlwJ1xuICAgICAgICAvLyB0aGlzLnByb3BzLmNpdGllc0RhdGEoKVxuXG4gICAgfVxuXG5cdHJlbmRlcigpe1xuICAgICAgICBsZXQgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGlmKHRoaXMucHJvcHMuc2hvd1ZpcERldGFpbHNWaWV3ICYmIHRoaXMuc3RhdGUuaXNfbmF2aWdhdGVfdG9fZm9ybSl7XG4gICAgICAgICAgICByZXR1cm4gPFZpcENsdWJNZW1iZXJEZXRhaWxzVmlldyB7Li4udGhpcy5wcm9wc30gaXNfZnJvbV9wYXltZW50PXt0aGlzLnN0YXRlLmlzX2Zyb21fcGF5bWVudH0gaXNTYWxlc0FnZW50PXt0aGlzLnN0YXRlLmlzU2FsZXNBZ2VudH0gaXNBZ2VudD17dGhpcy5zdGF0ZS5pc0FnZW50fSBpc19nb2xkPXt0aGlzLnN0YXRlLmlzX2dvbGR9IC8+XG4gICAgICAgIH1lbHNlIGlmKFNUT1JBR0UuY2hlY2tBdXRoKCkgJiYgdGhpcy5zdGF0ZS5pc191c2VyX2FscmR5X2dvbGQgJiYgIXRoaXMuc3RhdGUuaXNfZnJvbV9wYXltZW50KXsvLyBpZiBhbHJlYWR5IGdvbGQgb3IgdmlwIHVzZXIgcmVkaXJlY3QgdG8gZGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UoJy92aXAtY2x1Yi1hY3RpdmF0ZWQtZGV0YWlscycpXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXY+PC9kaXY+XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5pc1NhbGVzQWdlbnQgJiYgdGhpcy5zdGF0ZS5pc0FnZW50KXtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIHNob3dQYWNrYWdlU3RyaXA9e3RydWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIGNvbnN0IFVTRVIgPSBzdGF0ZS5VU0VSXG4gICAgY29uc3QgeyBzZWxlY3RlZExvY2F0aW9uIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfT1BEXG4gICAgbGV0IHsgdXNlcl9jaXRpZXMsIGNvbW1vbl91dG1fdGFncyB9ID0gc3RhdGUuVVNFUlxuXG4gICAgbGV0IHsgdmlwQ2x1Ykxpc3QsIHNlbGVjdGVkX3ZpcF9wbGFuLCB2aXBDbHViTWVtYmVyRGV0YWlscywgY3VycmVudFNlbGVjdGVkVmlwTWVtYmVyc0lkLCB2aXBfY2x1Yl9kYl9kYXRhLCBtZW1iZXJzX3Byb29mcywgc2hvd1ZpcERldGFpbHNWaWV3LHNhdmVkTWVtYmVyRGF0YSwgdmlwQ291cG9ucyB9ID0gc3RhdGUuVklQQ0xVQlxuICAgIHJldHVybiB7XG4gICAgICAgIHZpcENsdWJMaXN0LCBzZWxlY3RlZF92aXBfcGxhbiwgdmlwQ2x1Yk1lbWJlckRldGFpbHMsIGN1cnJlbnRTZWxlY3RlZFZpcE1lbWJlcnNJZCwgdXNlcl9jaXRpZXMsIFVTRVIsIHZpcF9jbHViX2RiX2RhdGEsIG1lbWJlcnNfcHJvb2ZzLCBzaG93VmlwRGV0YWlsc1ZpZXcsIHNhdmVkTWVtYmVyRGF0YSwgdmlwQ291cG9ucywgY29tbW9uX3V0bV90YWdzLCBzZWxlY3RlZExvY2F0aW9uXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VyRGV0YWlsczooc2VsZl9kYXRhLGNyaXRlcmlhLGZvcmNlYWRkKSA9PiBkaXNwYXRjaCh1c2VyRGV0YWlscyhzZWxmX2RhdGEsY3JpdGVyaWEsZm9yY2VhZGQpKSxcbiAgICAgICAgc2F2ZUN1cnJlbnRTZWxlY3RlZFZpcE1lbWJlcnM6IChtZW1iZXJzSWQsY2FsbGJhY2spID0+IGRpc3BhdGNoKHNhdmVDdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzKG1lbWJlcnNJZCxjYWxsYmFjaykpLFxuICAgICAgICBjaXRpZXNEYXRhOiAoKSA9PiBkaXNwYXRjaChjaXRpZXNEYXRhKCkpLFxuICAgICAgICBzZWxlY3RWaXBVc2VyUHJvZmlsZToobmV3UHJvZmlsZWlkLG1lbWJlcl9pZCxuZXdQcm9maWxlLHBhcmFtX2lkKSA9PiBkaXNwYXRjaChzZWxlY3RWaXBVc2VyUHJvZmlsZShuZXdQcm9maWxlaWQsbWVtYmVyX2lkLG5ld1Byb2ZpbGUscGFyYW1faWQpKSxcbiAgICAgICAgdmlwQ2x1YlBheSA6KGNyaXRlcmlhLGNhbGxiYWNrKSA9PiBkaXNwYXRjaCh2aXBDbHViUGF5KGNyaXRlcmlhLGNhbGxiYWNrKSksXG4gICAgICAgIGFkZFZpcE1lbWJlcnNEYXRhOihjcml0ZXJpYSxjYWxsYmFjaykgPT4gZGlzcGF0Y2goYWRkVmlwTWVtYmVyc0RhdGEoY3JpdGVyaWEsY2FsbGJhY2spKSxcbiAgICAgICAgdXBsb2FkVmlwUHJvb2Y6KHByb2ZpbGVEYXRhLCBwcm9maWxlSWQsaW1nVHlwZSwgY2IpID0+ZGlzcGF0Y2godXBsb2FkVmlwUHJvb2YocHJvZmlsZURhdGEsIHByb2ZpbGVJZCxpbWdUeXBlLCBjYikpLFxuICAgICAgICBzdG9yZVZpcE1lbWJlclByb29mczooaW1nVXJsLGNiKT0+ZGlzcGF0Y2goc3RvcmVWaXBNZW1iZXJQcm9vZnMoaW1nVXJsLGNiKSksXG4gICAgICAgIHJlbW92ZVZpcE1lbWJlclByb29mOihjcml0ZXJpYSk9PmRpc3BhdGNoKHJlbW92ZVZpcE1lbWJlclByb29mKGNyaXRlcmlhKSksXG4gICAgICAgIHB1c2hNZW1iZXJzRGF0YTooY3JpdGVyaWEpID0+ZGlzcGF0Y2gocHVzaE1lbWJlcnNEYXRhKGNyaXRlcmlhKSksXG4gICAgICAgIHJldHJpZXZlTWVtYmVyc0RhdGE6KHR5cGUsIGV4dHJhUGFyYW1zLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2gocmV0cmlldmVNZW1iZXJzRGF0YSh0eXBlLCBleHRyYVBhcmFtcywgY2FsbGJhY2spKSxcbiAgICAgICAgc2VsZWN0VmlwQ2x1YlBsYW46IChwbGFuLGNyaXRlcmlhLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2goc2VsZWN0VmlwQ2x1YlBsYW4ocGxhbixjcml0ZXJpYSwgY2FsbGJhY2spKSxcbiAgICAgICAgcmVzZXRWaXBEYXRhOigpID0+IGRpc3BhdGNoKHJlc2V0VmlwRGF0YSgpKSxcbiAgICAgICAgdmlwUGx1c0xlYWQ6IChkYXRhKSA9PiBkaXNwYXRjaCh2aXBQbHVzTGVhZChkYXRhKSksXG4gICAgICAgIHNlbmRBZ2VudEJvb2tpbmdVUkw6IChvcmRlcklkLCB0eXBlLCBwdXJjaGFzZV90eXBlLHF1ZXJ5X2RhdGEsIGV4dHJhUGFyYW1zLCBjYikgPT4gZGlzcGF0Y2goc2VuZEFnZW50Qm9va2luZ1VSTChvcmRlcklkLCB0eXBlLHB1cmNoYXNlX3R5cGUscXVlcnlfZGF0YSxleHRyYVBhcmFtcywgIGNiKSksXG4gICAgICAgIGNsZWFyVmlwTWVtZWJlckRhdGE6KCkgPT5kaXNwYXRjaChjbGVhclZpcE1lbWViZXJEYXRhKCkpLFxuICAgICAgICBnZXRDb3Vwb25zOiAoZGF0YSkgPT4gZGlzcGF0Y2goZ2V0Q291cG9ucyhkYXRhKSksXG4gICAgICAgIGFwcGx5Q291cG9uRGlzY291bnQ6IChkYXRhKSA9PmRpc3BhdGNoKGFwcGx5Q291cG9uRGlzY291bnQoZGF0YSkpLFxuICAgICAgICByZW1vdmVWaXBDb3Vwb25zOigpID0+ZGlzcGF0Y2gocmVtb3ZlVmlwQ291cG9ucygpKSxcbiAgICAgICAgZ2V0VmlwTGlzdDogKGlzX2VuZG9yc2VtZW50LGRhdGEsY2FsbGJhY2spID0+IGRpc3BhdGNoKGdldFZpcExpc3QoaXNfZW5kb3JzZW1lbnQsZGF0YSxjYWxsYmFjaykpLFxuICAgICAgICByZW1vdmVNZW1iZXJzOihkYXRhKSA9PiBkaXNwYXRjaChyZW1vdmVNZW1iZXJzKGRhdGEpKVxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzICwgbWFwRGlzcGF0Y2hUb1Byb3BzKShWaXBDbHViTWVtYmVyRGV0YWlscykiXSwic291cmNlUm9vdCI6IiJ9