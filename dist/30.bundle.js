(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

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

/***/ "./dev/js/components/commons/PrescriptionUpload/prescriptionUpload.js":
/*!****************************************************************************!*\
  !*** ./dev/js/components/commons/PrescriptionUpload/prescriptionUpload.js ***!
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

var _commonFixedPopup = __webpack_require__(/*! ../commonFixedPopup/commonFixedPopup.js */ "./dev/js/components/commons/commonFixedPopup/commonFixedPopup.js");

var _commonFixedPopup2 = _interopRequireDefault(_commonFixedPopup);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _loginPopup = __webpack_require__(/*! ../../../containers/commons/loginPopup.js */ "./dev/js/containers/commons/loginPopup.js");

var _loginPopup2 = _interopRequireDefault(_loginPopup);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Compress = __webpack_require__(/*! compress.js */ "./node_modules/compress.js/index.js");
var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

/*To Reuse the component make sure to pass these methods from parent component
1) This is pure component so please dont't do this (...this.props) , only props you need in the component use only those.
2) historyObj= {this.props.history}, locationObj = {this.props.location}
3) method name ==> afterUserLogin()
*/

var PrescriptionView = function (_React$PureComponent) {
    _inherits(PrescriptionView, _React$PureComponent);

    function PrescriptionView(props) {
        _classCallCheck(this, PrescriptionView);

        var _this = _possibleConstructorReturn(this, (PrescriptionView.__proto__ || Object.getPrototypeOf(PrescriptionView)).call(this, props));

        _this.upload = function (event) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;


            if (type) {
                _this.setState({ showLoginView: _storage2.default.checkAuth() ? false : true, open_popup_overlay: true });
            } else {
                if (event && event.target && event.target.files && event.target.files.length && event.target.files[0].name) {
                    var file = event.target.files[0];
                    var fileName = file.name;
                    if (/(.png|.jpeg|.jpg|.pdf)/.test(fileName)) {
                        var fileSize = file.size / (1024 * 1024);

                        if (Math.round(fileSize) <= 5) {

                            if (fileName.includes('.pdf')) {
                                var file_pdf = "/assets" + "/img/pdf-loading.png";
                                _this.setState({ selected_file: file_pdf, selected_file_name: fileName, uploadFileData: { dataUrl: null, file: file } });
                                //this.finishCrop(null, file)
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
                                    _this.getBase64(file, function (dataUrl) {
                                        _this.setState({ selected_file: dataUrl, selected_file_name: fileName, uploadFileData: { dataUrl: dataUrl, file: null } });
                                        //this.finishCrop(dataUrl, null)
                                    });
                                }).catch(function (e) {
                                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Error uploading image." });
                                });
                            }
                            _this.setState({ show_error: false });
                        } else {
                            _this.setState({ show_error: 'Please upload file less than 5MB' });
                        }
                    } else {
                        _this.setState({ show_error: 'Invalid Format', selected_file_name: null, selected_file: null });
                    }
                    _this.setState({ open_popup_overlay: true });
                }
            }
        };

        _this.cancelOverlay = function (val) {
            _this.setState({ open_popup_overlay: false, selected_file: null, selected_file_name: null, showSuccess: false });
        };

        _this.submit = function () {
            if (_this.state.selected_file) {
                _this.finishCrop();
            } else {
                _this.setState({ uploadFileData: {} });
                setTimeout(function () {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please upload valid file" });
                }, 500);
            }
        };

        _this.afterUserLogin = function () {
            _this.setState({ showLoginView: false });
            if (_this.props.afterUserLogin) {
                _this.props.afterUserLogin();
            }
        };

        _this.doneClicked = function () {
            _this.setState({ selected_file: null, open_popup_overlay: false, selected_file_name: null, showSuccess: false });
        };

        _this.state = {
            show_error: false,
            open_popup_overlay: false,
            selected_file: '',
            showLoginView: false,
            isLoading: false,
            selected_file_name: null,
            uploadFileData: {}
        };
        return _this;
    }

    _createClass(PrescriptionView, [{
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
        value: function finishCrop() {
            var _this2 = this;

            var dataUrl = this.state.uploadFileData.dataUrl;
            var file = this.state.uploadFileData.file;
            var file_blob_data = void 0;
            if (dataUrl) {
                file_blob_data = this.dataURItoBlob(dataUrl);
            }
            // if(file) {
            //     file = this.dataURItoBlob(file)
            // }
            var mem_data = {};
            var existingData = void 0;
            var img_tag = "file";
            this.setState({
                isLoading: true
            }, function () {
                var form_data = new FormData();
                if (file) {
                    form_data.append(img_tag, file, "imageFilename.pdf");
                } else {
                    form_data.append(img_tag, file_blob_data, "imageFilename.jpeg");
                }
                _this2.props.uploadCommonPrescription(form_data, function (dataResp, err) {
                    if (dataResp) {
                        var user_no = _this2.props.primaryMobile ? _this2.props.primaryMobile : _this2.props.user_loggedIn_number;
                        if (user_no) {
                            user_no = Number(user_no);
                        }
                        var parsed = queryString.parse(_this2.props.locationObj.search);
                        var data = {
                            phone_number: user_no, lead_source: 'Prescriptions', source: parsed, lead_type: 'PRESCRIPTIONS', doctor_name: '', exitpoint_url: dataResp.file_url, doctor_id: null, hospital_id: null, hospital_name: null
                        };
                        var gtm_data = { 'Category': 'ConsumerApp', 'Action': 'PrescriptionSubmitted', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'prescription-submitted' };
                        _gtm2.default.sendEvent({ data: gtm_data });
                        _this2.props.NonIpdBookingLead(data);

                        setTimeout(function () {
                            _this2.setState({ showSuccess: true, open_popup_overlay: false, uploadFileData: {} });
                            _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Prescription Uploaded Successfully" });
                        }, 500);
                    } else {
                        setTimeout(function () {
                            _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Prescription upload failure,please try after some time" });
                        }, 500);
                        _this2.setState({ selected_file: null, selected_file_name: null });
                    }
                    _this2.setState({ isLoading: false });
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
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.props.is_home_page ? _react2.default.createElement(
                    'div',
                    { className: ' ' + (this.props.labWidget ? 'slider-card-column upload-lab-widget' : 'widget mb-3 align-item-center justify-content-between upload-prescription-widget mbl-view-presc-section') },
                    _react2.default.createElement(
                        'div',
                        { className: 'd-flex align-item-center' },
                        _react2.default.createElement('img', { width: '47', src: "/assets" + "/img/lab-test-pres.png" }),
                        _react2.default.createElement(
                            'h6',
                            { className: 'fw-500 ml-2' },
                            'Book Test from Prescription!'
                        )
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'm-0 cstm-book-btn fw-500', onClick: function onClick(e) {
                                return _this3.upload(e, 1);
                            } },
                        'Upload'
                    )
                ) : '',
                this.props.search_lab && !this.state.open_popup_overlay ? _react2.default.createElement(
                    'div',
                    { className: 'widget mb-3 d-flex align-item-center justify-content-between upload-prescription-widget' },
                    _react2.default.createElement(
                        'div',
                        { className: 'd-flex align-item-center' },
                        _react2.default.createElement('img', { width: '47', src: "/assets" + "/img/lab-test-pres.png" }),
                        _react2.default.createElement(
                            'h6',
                            { className: 'fw-500 ml-2' },
                            'Book Test ',
                            _react2.default.createElement('br', null),
                            ' from Prescription!'
                        )
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'm-0 cstm-book-btn fw-500', onClick: function onClick(e) {
                                return _this3.upload(e, 1);
                            } },
                        'Upload'
                    )
                ) : '',
                this.state.showSuccess ? _react2.default.createElement(
                    'div',
                    { className: 'rcvd-section' },
                    _react2.default.createElement(
                        'div',
                        { className: 'received-prescription-section p-5 d-flex justify-content-center align-items-center flex-column d-none' },
                        _react2.default.createElement('img', { width: '57', src: "/assets" + "/img/success-checked.svg" }),
                        _react2.default.createElement(
                            'p',
                            null,
                            'We have received your prescription. Our medical representative will call you for assistance'
                        ),
                        _react2.default.createElement(
                            'button',
                            { className: 'cstm-book-btn fw-700', style: { width: 120 }, onClick: this.doneClicked },
                            'Done'
                        )
                    )
                ) : '',
                this.state.open_popup_overlay ? _react2.default.createElement(
                    _commonFixedPopup2.default,
                    { cancelOverlay: function cancelOverlay(a) {
                            return _this3.cancelOverlay(a);
                        } },
                    this.state.showLoginView ? _react2.default.createElement(_loginPopup2.default, { afterUserLogin: this.afterUserLogin, locationObj: this.props.locationObj, historyObj: this.props.historyObj, closePopup: this.cancelOverlay }) : _react2.default.createElement(
                        _react2.default.Fragment,
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'upload-prescription' },
                            !this.state.showSuccess ? _react2.default.createElement(
                                _react2.default.Fragment,
                                null,
                                _react2.default.createElement(
                                    'div',
                                    { className: 'widget-header text-center mv-header p-3' },
                                    _react2.default.createElement(
                                        'h4',
                                        { className: 'fw-700 text-md' },
                                        'Upload Prescription'
                                    ),
                                    _react2.default.createElement(
                                        'a',
                                        { className: 'cross-presc-modal', onClick: function onClick() {
                                                return _this3.setState({ abc: true });
                                            } /*this.props.hideLoginPopup.bind(this)*/ },
                                        _react2.default.createElement(
                                            'span',
                                            { onClick: function onClick() {
                                                    return _this3.cancelOverlay(1);
                                                } },
                                            '\xD7'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'upload-prescription-column d-flex align-item-center justify-content-center flex-column ' + (this.state.show_error ? 'error-border-color' : ''), style: { position: 'relative' } },
                                    this.state.isLoading ? _react2.default.createElement(
                                        'div',
                                        { className: 'ins-prf-img-grd d-block upload-presc-loading-pdf d-flex align-item-center justify-content-center' },
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
                                    _react2.default.createElement('img', { className: this.state.selected_file ? 'prescription-uploaded-img' : 'prescription-uploaded', width: !this.state.selected_file ? '70px' : '', src: this.state.selected_file ? this.state.selected_file : "/assets" + "/img/presc-icon.png" }),
                                    this.state.selected_file_name ? _react2.default.createElement(
                                        'h6',
                                        { className: 'fw-500 text-center', style: { fontSize: 11 } },
                                        this.state.selected_file_name
                                    ) : '',
                                    this.state.show_error ? _react2.default.createElement(
                                        _react2.default.Fragment,
                                        null,
                                        _react2.default.createElement('img', { className: 'prescription-uploaded-img', src: this.state.selected_file }),
                                        _react2.default.createElement(
                                            'h6',
                                            { className: 'error-msg-text text-center' },
                                            this.state.show_error
                                        ),
                                        _react2.default.createElement(
                                            'button',
                                            { className: 'cstm-book-btn fw-700 d-flex align-item-center mt-3 mb-3' },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/up-arrow.svg", height: '17' }),
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                _react2.default.createElement(
                                                    'label',
                                                    { className: 'text-white', htmlFor: 'presc-upload', style: { fontSize: 13 } },
                                                    'Re-Upload'
                                                )
                                            ),
                                            _react2.default.createElement('input', { id: 'presc-upload', type: 'file', accept: 'image/*;capture=camera', onChange: function onChange(e) {
                                                    return _this3.upload(e);
                                                } })
                                        )
                                    ) : _react2.default.createElement(
                                        'button',
                                        { className: 'cstm-book-btn fw-700 d-flex align-item-center mt-3 mb-3', onClick: function onClick(e) {
                                                return e.stopPropagation();
                                            } },
                                        _react2.default.createElement('img', { src: "/assets" + "/img/up-arrow.svg", height: '17' }),
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            _react2.default.createElement(
                                                'label',
                                                { className: 'text-white', htmlFor: 'presc-upload', style: { fontSize: 13 } },
                                                this.state.selected_file ? 'Re-Upload' : 'Upload'
                                            )
                                        ),
                                        _react2.default.createElement('input', { id: 'presc-upload', type: 'file', accept: 'image/*;capture=camera', onChange: function onChange(e) {
                                                return _this3.upload(e);
                                            } })
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'p-3 pb-0' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'health-advisor-col d-flex p-2 align-items-start' },
                                        _react2.default.createElement('img', { width: '17', className: 'info-detail-icon', src: "/assets" + "/img/info-icon.svg" }),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'ml-2' },
                                            'Our health advisor will assist you in booking your tests'
                                        )
                                    ),
                                    _react2.default.createElement('hr', { style: { marginTop: 11 } })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'guidelines-col p-3 pt-0' },
                                    _react2.default.createElement(
                                        'h5',
                                        { className: 'fw-500 text-black', style: { marginBottom: 5 } },
                                        'Prescription Guidelines'
                                    ),
                                    _react2.default.createElement(
                                        'ul',
                                        null,
                                        _react2.default.createElement(
                                            'li',
                                            { className: 'fw-500' },
                                            'Avoid blurred image'
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            { className: 'fw-500' },
                                            'Supported files type: jpeg , jpg , png , pdf'
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            { className: 'fw-500' },
                                            'Maximum allowed file size: 5MB'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'button',
                                    { className: 'presc-submit-btn cstm-book-btn fw-700', style: { borderRadius: 0 }, onClick: this.submit },
                                    'Submit'
                                )
                            ) : ''
                        )
                    )
                ) : ''
            );
        }
    }]);

    return PrescriptionView;
}(_react2.default.PureComponent);

exports.default = PrescriptionView;

/***/ }),

/***/ "./dev/js/components/commons/commonFixedPopup/commonFixedPopup.js":
/*!************************************************************************!*\
  !*** ./dev/js/components/commons/commonFixedPopup/commonFixedPopup.js ***!
  \************************************************************************/
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

var CommonPopup = function (_React$PureComponent) {
	_inherits(CommonPopup, _React$PureComponent);

	function CommonPopup() {
		_classCallCheck(this, CommonPopup);

		return _possibleConstructorReturn(this, (CommonPopup.__proto__ || Object.getPrototypeOf(CommonPopup)).apply(this, arguments));
	}

	_createClass(CommonPopup, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				_react2.default.Fragment,
				null,
				_react2.default.createElement("div", { className: "cancel-overlay cancel-overlay-zindex", onClick: function onClick() {
						return _this2.props.cancelOverlay(1);
					} }),
				_react2.default.createElement(
					"div",
					{ className: "widget cancel-appointment-div cancel-popup" },
					this.props.children
				)
			);
		}
	}]);

	return CommonPopup;
}(_react2.default.PureComponent);

exports.default = CommonPopup;

/***/ }),

/***/ "./dev/js/components/commons/commonFixedPopup/loginPopup.js":
/*!******************************************************************!*\
  !*** ./dev/js/components/commons/commonFixedPopup/loginPopup.js ***!
  \******************************************************************/
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

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _commonFixedPopup = __webpack_require__(/*! ./commonFixedPopup.js */ "./dev/js/components/commons/commonFixedPopup/commonFixedPopup.js");

var _commonFixedPopup2 = _interopRequireDefault(_commonFixedPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

/*To Reuse the component make sure to pass these methods from parent component
1) ===> afterUserLogin(this method is called after user logged in successfully)
2) This is pure component so please dont't do this (...this.props) , only props you need in the component use only those.
3) historyObj= {this.props.history}, locationObj = {this.props.location}
4) ===>closePopup (method to close popup)
*/
var LoginPopup = function (_React$Component) {
    _inherits(LoginPopup, _React$Component);

    function LoginPopup(props) {
        _classCallCheck(this, LoginPopup);

        var _this = _possibleConstructorReturn(this, (LoginPopup.__proto__ || Object.getPrototypeOf(LoginPopup)).call(this, props));

        _this._mounted = false;

        _this.state = {
            phoneNumber: '',
            validationError: '',
            showOTP: false,
            otp: "",
            otpTimeout: false,
            error_message: '',
            smsBtnType: null,
            enableOtpRequest: false
        };
        return _this;
    }

    _createClass(LoginPopup, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this._mounted = true;
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this._mounted = false;
        }
    }, {
        key: 'inputHandler',
        value: function inputHandler(e) {
            if (this.state.showOTP && e.target.name == 'phoneNumber') {
                var _setState;

                this.setState((_setState = {}, _defineProperty(_setState, e.target.name, e.target.value), _defineProperty(_setState, 'validationError', ""), _defineProperty(_setState, 'showOTP', false), _defineProperty(_setState, 'otp', ""), _defineProperty(_setState, 'error_message', ''), _setState));
            } else {
                this.setState(_defineProperty({}, e.target.name, e.target.value));
            }
        }
    }, {
        key: 'submitOTPRequest',
        value: function submitOTPRequest(number) {
            var resendFlag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var viaSms = arguments[2];

            var _this2 = this;

            var viaWhatsapp = arguments[3];
            var fromPopup = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;


            var lead_data = queryString.parse(this.props.locationObj.search);
            if (number.match(/^[56789]{1}[0-9]{9}$/)) {

                this.setState({ validationError: "" });

                this.props.sendOTP(number, viaSms, viaWhatsapp, 'insurance-login', function (error) {
                    if (error) {
                        _this2.setState({ validationError: "Could not generate OTP." });
                    } else {

                        var data = {
                            'Category': 'ConsumerApp', 'Action': 'LoginPopupContinue', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'login-popup-continue-click', 'mode': viaSms ? 'viaSms' : viaWhatsapp ? 'viaWhatsapp' : '', 'mobileNo': _this2.state.phoneNumber
                        };
                        _gtm2.default.sendEvent({ data: data });
                        if (viaWhatsapp) {
                            _this2.setState({ enableOtpRequest: true });
                        } else {
                            _this2.setState({ enableOtpRequest: false });
                        }
                        _this2.setState({ showOTP: true, otpTimeout: true, smsBtnType: viaSms ? true : false });
                        setTimeout(function () {
                            if (_this2._mounted) {
                                _this2.setState({ otpTimeout: false });
                            }
                        }, 20000);
                        setTimeout(function () {
                            if (_this2._mounted) {
                                _this2.setState({ enableOtpRequest: false });
                            }
                        }, 60000);

                        if (fromPopup && document.getElementsByClassName('ins-form-slider')) {
                            if (fromPopup == 'one') {
                                document.getElementsByClassName('ins-form-slider')[0].scroll({ left: 999, behavior: 'smooth' });
                            } else {
                                document.getElementsByClassName('ins-form-slider')[0].scroll({ left: -999, behavior: 'smooth' });
                            }
                        }
                    }
                });
            } else {
                this.setState({ validationError: "Please provide a valid number (10 digits)" });
            }
        }
    }, {
        key: 'verifyOTP',
        value: function verifyOTP() {
            var _this3 = this;

            var parsed = queryString.parse(this.props.locationObj.search);
            var self = this;
            if (!this.state.otp) {
                this.setState({ validationError: "Please enter OTP", error_message: '' });
                return;
            }
            if (this.state.otp.length < 6 || this.state.otp.length > 6) {
                this.setState({ validationError: "Please enter valid OTP", error_message: '' });
                return;
            }

            var lead_data = parsed;
            if (this.state.phoneNumber.match(/^[56789]{1}[0-9]{9}$/)) {
                this.setState({ validationError: "" });
                var extraParams = {};
                this.props.submitOTP(this.state.phoneNumber, this.state.otp, extraParams, function (exists) {
                    if (exists.code == 'invalid') {
                        _this3.setState({ error_message: exists.message, validationError: '' });
                    } else {
                        _this3.props.getUserProfile().then(function (resp) {
                            _this3.props.afterUserLogin();
                            setTimeout(function () {
                                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Login Successfully" });
                            }, 500);
                        });
                    }
                });
            } else {
                this.setState({ validationError: "Please provide a valid number (10 digits)" });
            }
        }
    }, {
        key: '_handleKeyPress',
        value: function _handleKeyPress(e) {
            if (e.key === 'Enter') {
                this.verifyOTP();
            }
        }
    }, {
        key: '_handleContinuePress',
        value: function _handleContinuePress(e) {
            if (e.key === 'Enter') {
                if (!this.state.showOTP) {
                    this.submitOTPRequest(this.state.phoneNumber, '', true, false, 'one');
                }
            }
        }
    }, {
        key: 'editNumber',
        value: function editNumber() {
            var _this4 = this;

            var number = this.state.phoneNumber;

            document.getElementsByClassName('ins-form-slider')[0].scroll({ left: -999, behavior: 'smooth' });

            setTimeout(function () {
                _this4.setState({ validationError: "", showOTP: false, otp: "", phoneNumber: '' }, function () {
                    _this4.setState({ phoneNumber: number });
                    document.getElementById("number").focus();
                });
            }, 200);
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'ins-form-slider mobile-verification-screen' },
                    _react2.default.createElement(
                        'div',
                        { className: 'one' },
                        _react2.default.createElement(
                            'div',
                            { className: 'widget-header text-center mv-header', style: { position: 'relative' } },
                            _react2.default.createElement(
                                'h4',
                                { className: 'fw-500 text-md sign-up-mbl-text' },
                                'Enter your mobile number to proceed'
                            ),
                            _react2.default.createElement(
                                'a',
                                { onClick: this.props.closePopup, style: { position: 'absolute', right: 4, top: 4 } },
                                _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/rt-close.svg", style: { width: 14 } })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'widget-content text-center pt-0 pb-0' },
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group mobile-field sup-input-pdng' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'adon-group enter-mobile-number' },
                                    _react2.default.createElement('input', { type: 'number', id: 'number', className: 'fc-input text-center', placeholder: 'Enter your mobile number', value: this.state.phoneNumber, onChange: this.inputHandler.bind(this), name: 'phoneNumber', onKeyPress: this._handleContinuePress.bind(this), disabled: this.state.showOTP ? true : false })
                                )
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'errorMessage m-0 mb-2' },
                                this.state.error_message
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'errorMessage m-0 mb-2' },
                                this.state.validationError
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'text-center' },
                                _react2.default.createElement(
                                    'button',
                                    { onClick: this.submitOTPRequest.bind(this, this.state.phoneNumber, false, true, false, 'one'), className: 'v-btn v-btn-primary btn-sm lg-sms-btn btn-grdnt' },
                                    'Let\u2019s get you in'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'two' },
                        _react2.default.createElement(
                            'div',
                            { className: 'widget-header text-center mv-header' },
                            _react2.default.createElement(
                                'h4',
                                { className: 'fw-500 text-md sign-up-mbl-text' },
                                'Enter the OTP we\u2019ve sent to your mobile number'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'widget-content text-center pt-0 pb-0' },
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group mobile-field sup-input-pdng' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'adon-group enter-mobile-number' },
                                    _react2.default.createElement('input', { type: 'number', id: 'number', className: 'fc-input text-center', placeholder: '10 digit mobile number', value: this.state.phoneNumber, onChange: this.inputHandler.bind(this), name: 'phoneNumber', onKeyPress: this._handleContinuePress.bind(this), disabled: this.state.showOTP ? true : false }),
                                    _react2.default.createElement(
                                        'a',
                                        { className: 'ins-num-edit', onClick: this.editNumber.bind(this) },
                                        'Edit'
                                    )
                                ),
                                this.state.showOTP ? _react2.default.createElement(
                                    'div',
                                    { className: 'adon-group enter-mobile-number' },
                                    _react2.default.createElement('br', null),
                                    _react2.default.createElement('br', null),
                                    _react2.default.createElement('input', { type: 'number', className: 'fc-input text-center', placeholder: 'Enter OTP', value: this.state.otp, onChange: this.inputHandler.bind(this), name: 'otp', onKeyPress: this._handleKeyPress.bind(this) }),
                                    this.state.otpTimeout ? "" : _react2.default.createElement(
                                        'div',
                                        { className: 'd-flex align-items-start justify-content-between' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'resendOtp', style: { fontSize: '12px' }, onClick: this.submitOTPRequest.bind(this, this.state.phoneNumber, true, this.state.smsBtnType ? false : true, !this.state.smsBtnType ? false : true, 'one') },
                                            this.state.smsBtnType ? 'Prefer we WhatsApp it to you?' : 'Send via SMS'
                                        ),
                                        this.state.enableOtpRequest ? '' : _react2.default.createElement(
                                            'a',
                                            { className: 'resendOtp ins-otp-resend', onClick: this.submitOTPRequest.bind(this, this.state.phoneNumber, true, this.state.smsBtnType ? true : false, !this.state.smsBtnType ? true : false, 'one') },
                                            'Resend'
                                        )
                                    )
                                ) : ""
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'errorMessage m-0 mb-2' },
                                this.state.error_message
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'errorMessage m-0 mb-2' },
                                this.state.validationError
                            ),
                            this.state.showOTP ? _react2.default.createElement(
                                'div',
                                { className: 'text-center' },
                                _react2.default.createElement(
                                    'button',
                                    { onClick: this.verifyOTP.bind(this), disabled: this.props.submit_otp, className: 'btn-grdnt v-btn v-btn-primary btn-sm' },
                                    'Access Now'
                                )
                            ) : _react2.default.createElement(
                                'div',
                                { className: 'text-center' },
                                _react2.default.createElement(
                                    'button',
                                    { onClick: this.submitOTPRequest.bind(this, this.state.phoneNumber, false, true, false), disabled: this.props.otp_request_sent, className: 'v-btn v-btn-primary btn-sm lg-sms-btn btn-grdnt' },
                                    'Let\u2019s get you in'
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'p',
                    { className: 'text-center fw-500 p-3', style: { fontSize: 12 } },
                    'By proceeding, you hereby agree to the ',
                    _react2.default.createElement(
                        'a',
                        { href: '/terms', target: '_blank', style: { color: 'var(--text--primary--color)' } },
                        'End User Agreement'
                    ),
                    ' and ',
                    _react2.default.createElement(
                        'a',
                        { href: '/privacy', target: '_blank', style: { color: 'var(--text--primary--color)' } },
                        'Privacy Policy.'
                    )
                )
            );
        }
    }]);

    return LoginPopup;
}(_react2.default.Component);

exports.default = LoginPopup;

/***/ }),

/***/ "./dev/js/containers/commons/PrescriptionUpload.js":
/*!*********************************************************!*\
  !*** ./dev/js/containers/commons/PrescriptionUpload.js ***!
  \*********************************************************/
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

var _prescriptionUpload = __webpack_require__(/*! ../../components/commons/PrescriptionUpload/prescriptionUpload.js */ "./dev/js/components/commons/PrescriptionUpload/prescriptionUpload.js");

var _prescriptionUpload2 = _interopRequireDefault(_prescriptionUpload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PrescriptionUpload = function (_React$Component) {
	_inherits(PrescriptionUpload, _React$Component);

	function PrescriptionUpload() {
		_classCallCheck(this, PrescriptionUpload);

		return _possibleConstructorReturn(this, (PrescriptionUpload.__proto__ || Object.getPrototypeOf(PrescriptionUpload)).apply(this, arguments));
	}

	_createClass(PrescriptionUpload, [{
		key: 'render',
		value: function render() {

			return _react2.default.createElement(_prescriptionUpload2.default, this.props);
		}
	}]);

	return PrescriptionUpload;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, passedProps) {
	var _state$USER = state.USER,
	    primaryMobile = _state$USER.primaryMobile,
	    user_loggedIn_number = _state$USER.user_loggedIn_number;


	return {
		primaryMobile: primaryMobile,
		user_loggedIn_number: user_loggedIn_number
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		uploadCommonPrescription: function uploadCommonPrescription(dataParams, callback) {
			return dispatch((0, _index.uploadCommonPrescription)(dataParams, callback));
		},
		NonIpdBookingLead: function NonIpdBookingLead(data, cb) {
			return dispatch((0, _index.NonIpdBookingLead)(data, cb));
		}

	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PrescriptionUpload);

/***/ }),

/***/ "./dev/js/containers/commons/loginPopup.js":
/*!*************************************************!*\
  !*** ./dev/js/containers/commons/loginPopup.js ***!
  \*************************************************/
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

var _loginPopup = __webpack_require__(/*! ../../components/commons/commonFixedPopup/loginPopup.js */ "./dev/js/components/commons/commonFixedPopup/loginPopup.js");

var _loginPopup2 = _interopRequireDefault(_loginPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PrescriptionUpload = function (_React$Component) {
	_inherits(PrescriptionUpload, _React$Component);

	function PrescriptionUpload() {
		_classCallCheck(this, PrescriptionUpload);

		return _possibleConstructorReturn(this, (PrescriptionUpload.__proto__ || Object.getPrototypeOf(PrescriptionUpload)).apply(this, arguments));
	}

	_createClass(PrescriptionUpload, [{
		key: 'render',
		value: function render() {

			return _react2.default.createElement(_loginPopup2.default, this.props);
		}
	}]);

	return PrescriptionUpload;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, passedProps) {
	return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		sendOTP: function sendOTP(number, viaSms, viaWhatsapp, message_type, cb) {
			return dispatch((0, _index.sendOTP)(number, viaSms, viaWhatsapp, message_type, cb));
		},
		submitOTP: function submitOTP(number, otp, extraParams, cb) {
			return dispatch((0, _index.submitOTP)(number, otp, extraParams, cb));
		},
		getUserProfile: function getUserProfile() {
			return dispatch((0, _index.getUserProfile)());
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PrescriptionUpload);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9QcmVzY3JpcHRpb25VcGxvYWQvcHJlc2NyaXB0aW9uVXBsb2FkLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvY29tbW9uRml4ZWRQb3B1cC9jb21tb25GaXhlZFBvcHVwLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvY29tbW9uRml4ZWRQb3B1cC9sb2dpblBvcHVwLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2NvbW1vbnMvUHJlc2NyaXB0aW9uVXBsb2FkLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2NvbW1vbnMvbG9naW5Qb3B1cC5qcyJdLCJuYW1lcyI6WyJMb2FkZXIiLCJwcm9wcyIsImNsYXNzVHlwZSIsImlGcmFtZVBvcHVwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJDb21wcmVzcyIsInJlcXVpcmUiLCJxdWVyeVN0cmluZyIsIlByZXNjcmlwdGlvblZpZXciLCJ1cGxvYWQiLCJldmVudCIsInR5cGUiLCJzZXRTdGF0ZSIsInNob3dMb2dpblZpZXciLCJTVE9SQUdFIiwiY2hlY2tBdXRoIiwib3Blbl9wb3B1cF9vdmVybGF5IiwidGFyZ2V0IiwiZmlsZXMiLCJsZW5ndGgiLCJuYW1lIiwiZmlsZSIsImZpbGVOYW1lIiwidGVzdCIsImZpbGVTaXplIiwic2l6ZSIsIk1hdGgiLCJyb3VuZCIsImluY2x1ZGVzIiwiZmlsZV9wZGYiLCJBU1NFVFNfQkFTRV9VUkwiLCJzZWxlY3RlZF9maWxlIiwic2VsZWN0ZWRfZmlsZV9uYW1lIiwidXBsb2FkRmlsZURhdGEiLCJkYXRhVXJsIiwiY29tcHJlc3MiLCJxdWFsaXR5IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJ0aGVuIiwicmVzdWx0cyIsImltZzEiLCJiYXNlNjRzdHIiLCJkYXRhIiwiaW1nRXh0IiwiZXh0IiwiY29udmVydEJhc2U2NFRvRmlsZSIsImdldEJhc2U2NCIsImNhdGNoIiwiZSIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJzaG93X2Vycm9yIiwiY2FuY2VsT3ZlcmxheSIsInZhbCIsInNob3dTdWNjZXNzIiwic3VibWl0Iiwic3RhdGUiLCJmaW5pc2hDcm9wIiwic2V0VGltZW91dCIsImFmdGVyVXNlckxvZ2luIiwiZG9uZUNsaWNrZWQiLCJpc0xvYWRpbmciLCJjYiIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkIiwicmVzdWx0Iiwib25lcnJvciIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImZpbGVfYmxvYl9kYXRhIiwiZGF0YVVSSXRvQmxvYiIsIm1lbV9kYXRhIiwiZXhpc3RpbmdEYXRhIiwiaW1nX3RhZyIsImZvcm1fZGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidXBsb2FkQ29tbW9uUHJlc2NyaXB0aW9uIiwiZGF0YVJlc3AiLCJlcnIiLCJ1c2VyX25vIiwicHJpbWFyeU1vYmlsZSIsInVzZXJfbG9nZ2VkSW5fbnVtYmVyIiwiTnVtYmVyIiwicGFyc2VkIiwicGFyc2UiLCJsb2NhdGlvbk9iaiIsInNlYXJjaCIsInBob25lX251bWJlciIsImxlYWRfc291cmNlIiwic291cmNlIiwibGVhZF90eXBlIiwiZG9jdG9yX25hbWUiLCJleGl0cG9pbnRfdXJsIiwiZmlsZV91cmwiLCJkb2N0b3JfaWQiLCJob3NwaXRhbF9pZCIsImhvc3BpdGFsX25hbWUiLCJndG1fZGF0YSIsIkdUTSIsImdldFVzZXJJZCIsInNlbmRFdmVudCIsIk5vbklwZEJvb2tpbmdMZWFkIiwiZGF0YVVSSSIsImJpbmFyeSIsImF0b2IiLCJzcGxpdCIsImFycmF5IiwiaSIsInB1c2giLCJjaGFyQ29kZUF0IiwiQmxvYiIsIlVpbnQ4QXJyYXkiLCJpc19ob21lX3BhZ2UiLCJsYWJXaWRnZXQiLCJzZWFyY2hfbGFiIiwid2lkdGgiLCJhIiwiaGlzdG9yeU9iaiIsImFiYyIsInBvc2l0aW9uIiwiZm9udFNpemUiLCJzdG9wUHJvcGFnYXRpb24iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJib3JkZXJSYWRpdXMiLCJQdXJlQ29tcG9uZW50IiwiQ29tbW9uUG9wdXAiLCJjaGlsZHJlbiIsIkxvZ2luUG9wdXAiLCJfbW91bnRlZCIsInBob25lTnVtYmVyIiwidmFsaWRhdGlvbkVycm9yIiwic2hvd09UUCIsIm90cCIsIm90cFRpbWVvdXQiLCJlcnJvcl9tZXNzYWdlIiwic21zQnRuVHlwZSIsImVuYWJsZU90cFJlcXVlc3QiLCJ2YWx1ZSIsIm51bWJlciIsInJlc2VuZEZsYWciLCJ2aWFTbXMiLCJ2aWFXaGF0c2FwcCIsImZyb21Qb3B1cCIsImxlYWRfZGF0YSIsIm1hdGNoIiwic2VuZE9UUCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNjcm9sbCIsImxlZnQiLCJiZWhhdmlvciIsInNlbGYiLCJleHRyYVBhcmFtcyIsInN1Ym1pdE9UUCIsImV4aXN0cyIsImNvZGUiLCJtZXNzYWdlIiwiZ2V0VXNlclByb2ZpbGUiLCJyZXNwIiwia2V5IiwidmVyaWZ5T1RQIiwic3VibWl0T1RQUmVxdWVzdCIsImdldEVsZW1lbnRCeUlkIiwiZm9jdXMiLCJjbG9zZVBvcHVwIiwicmlnaHQiLCJ0b3AiLCJpbnB1dEhhbmRsZXIiLCJiaW5kIiwiX2hhbmRsZUNvbnRpbnVlUHJlc3MiLCJlZGl0TnVtYmVyIiwiX2hhbmRsZUtleVByZXNzIiwic3VibWl0X290cCIsIm90cF9yZXF1ZXN0X3NlbnQiLCJjb2xvciIsIlByZXNjcmlwdGlvblVwbG9hZCIsIm1hcFN0YXRlVG9Qcm9wcyIsInBhc3NlZFByb3BzIiwiVVNFUiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNo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QUFsQixFQUF1Qm9CLFdBQXZCLEVBQXFDL0YsRUFBckMsQ0FBVCxDQUFsQztBQUFBLEdBRlg7QUFHQW9HLGtCQUFnQjtBQUFBLFVBQU11QixTQUFTLDRCQUFULENBQU47QUFBQTtBQUhoQixFQUFQO0FBS0EsQ0FORDs7a0JBUWUseUJBQVFKLGVBQVIsRUFBeUJHLGtCQUF6QixFQUE2Q0osa0JBQTdDLEMiLCJmaWxlIjoiMzAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgTG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzVHlwZSB8fCBcImxvYWRlckNpcmN1bGFyXCJ9ID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRwLWxvYWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pRnJhbWVQb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTEwXCI+UmVkaXJlY3RpbmcgeW91IHRvIFBoYXJtZWFzeSB3ZWJzaXRlLi4uPC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXJcbiIsImltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInXG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDb21tb25Qb3B1cCBmcm9tICcuLi9jb21tb25GaXhlZFBvcHVwL2NvbW1vbkZpeGVkUG9wdXAuanMnXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBMb2dpblBvcHVwIGZyb20gJy4uLy4uLy4uL2NvbnRhaW5lcnMvY29tbW9ucy9sb2dpblBvcHVwLmpzJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuY29uc3QgQ29tcHJlc3MgPSByZXF1aXJlKCdjb21wcmVzcy5qcycpXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bSdcblxuXG4vKlRvIFJldXNlIHRoZSBjb21wb25lbnQgbWFrZSBzdXJlIHRvIHBhc3MgdGhlc2UgbWV0aG9kcyBmcm9tIHBhcmVudCBjb21wb25lbnRcbjEpIFRoaXMgaXMgcHVyZSBjb21wb25lbnQgc28gcGxlYXNlIGRvbnQndCBkbyB0aGlzICguLi50aGlzLnByb3BzKSAsIG9ubHkgcHJvcHMgeW91IG5lZWQgaW4gdGhlIGNvbXBvbmVudCB1c2Ugb25seSB0aG9zZS5cbjIpIGhpc3RvcnlPYmo9IHt0aGlzLnByb3BzLmhpc3Rvcnl9LCBsb2NhdGlvbk9iaiA9IHt0aGlzLnByb3BzLmxvY2F0aW9ufVxuMykgbWV0aG9kIG5hbWUgPT0+IGFmdGVyVXNlckxvZ2luKClcbiovXG5cbmNsYXNzIFByZXNjcmlwdGlvblZpZXcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaG93X2Vycm9yOiBmYWxzZSxcblx0XHRcdG9wZW5fcG9wdXBfb3ZlcmxheTogZmFsc2UsXG5cdFx0XHRzZWxlY3RlZF9maWxlOiAnJyxcbiAgICAgICAgICAgIHNob3dMb2dpblZpZXc6IGZhbHNlLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHNlbGVjdGVkX2ZpbGVfbmFtZTogbnVsbCxcbiAgICAgICAgICAgIHVwbG9hZEZpbGVEYXRhOnt9XG5cdFx0fVxuXHR9XG5cblx0dXBsb2FkID0gKGV2ZW50LCB0eXBlPTApPT57XG5cbiAgICAgICAgaWYodHlwZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0xvZ2luVmlldzogU1RPUkFHRS5jaGVja0F1dGgoKT9mYWxzZTp0cnVlLCBvcGVuX3BvcHVwX292ZXJsYXk6IHRydWV9KVxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBpZihldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LmZpbGVzICYmIGV2ZW50LnRhcmdldC5maWxlcy5sZW5ndGggJiYgZXZlbnQudGFyZ2V0LmZpbGVzWzBdLm5hbWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXVxuICAgICAgICAgICAgICAgIGxldCBmaWxlTmFtZSA9IGZpbGUubmFtZVxuICAgICAgICAgICAgICAgIGlmKC8oLnBuZ3wuanBlZ3wuanBnfC5wZGYpLy50ZXN0KGZpbGVOYW1lKSApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGVTaXplID0gKGZpbGUuc2l6ZSkvKDEwMjQqMTAyNCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoTWF0aC5yb3VuZChmaWxlU2l6ZSk8PTUpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihmaWxlTmFtZS5pbmNsdWRlcygnLnBkZicpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZV9wZGYgPSBBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcGRmLWxvYWRpbmcucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZF9maWxlOiBmaWxlX3BkZiwgc2VsZWN0ZWRfZmlsZV9uYW1lOiBmaWxlTmFtZSwgdXBsb2FkRmlsZURhdGE6IHtkYXRhVXJsOiBudWxsLCBmaWxlOiBmaWxlfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5maW5pc2hDcm9wKG51bGwsIGZpbGUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXByZXNzID0gbmV3IENvbXByZXNzKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcmVzcy5jb21wcmVzcyhbZmlsZV0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbGl0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZzEgPSByZXN1bHRzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NHN0ciA9IGltZzEuZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdFeHQgPSBpbWcxLmV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gQ29tcHJlc3MuY29udmVydEJhc2U2NFRvRmlsZShiYXNlNjRzdHIsIGltZ0V4dClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRCYXNlNjQoZmlsZSwgKGRhdGFVcmwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkX2ZpbGU6IGRhdGFVcmwsIHNlbGVjdGVkX2ZpbGVfbmFtZTogZmlsZU5hbWUsIHVwbG9hZEZpbGVEYXRhOiB7ZGF0YVVybDogZGF0YVVybCwgZmlsZTogbnVsbH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5maW5pc2hDcm9wKGRhdGFVcmwsIG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIkVycm9yIHVwbG9hZGluZyBpbWFnZS5cIiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93X2Vycm9yOiBmYWxzZX0pO1xuXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd19lcnJvcjogJ1BsZWFzZSB1cGxvYWQgZmlsZSBsZXNzIHRoYW4gNU1CJ30pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd19lcnJvcjogJ0ludmFsaWQgRm9ybWF0JyxzZWxlY3RlZF9maWxlX25hbWU6IG51bGwsc2VsZWN0ZWRfZmlsZTpudWxsIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3Blbl9wb3B1cF9vdmVybGF5OiB0cnVlIH0pXG4gICAgICAgICAgICB9ICAgIFxuICAgICAgICB9XG5cdFx0XG5cdH1cblxuICAgIGdldEJhc2U2NChmaWxlLCBjYikge1xuICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxuICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2IocmVhZGVyLnJlc3VsdClcbiAgICAgICAgfVxuICAgICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnJvcilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmlzaENyb3AoKSB7XG4gICAgICAgIGxldCBkYXRhVXJsID0gdGhpcy5zdGF0ZS51cGxvYWRGaWxlRGF0YS5kYXRhVXJsO1xuICAgICAgICBsZXQgZmlsZSA9IHRoaXMuc3RhdGUudXBsb2FkRmlsZURhdGEuZmlsZTtcbiAgICAgICAgbGV0IGZpbGVfYmxvYl9kYXRhXG4gICAgICAgIGlmIChkYXRhVXJsKSB7XG4gICAgICAgICAgICBmaWxlX2Jsb2JfZGF0YSA9IHRoaXMuZGF0YVVSSXRvQmxvYihkYXRhVXJsKVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmKGZpbGUpIHtcbiAgICAgICAgLy8gICAgIGZpbGUgPSB0aGlzLmRhdGFVUkl0b0Jsb2IoZmlsZSlcbiAgICAgICAgLy8gfVxuICAgICAgICBsZXQgbWVtX2RhdGEgPSB7fVxuICAgICAgICBsZXQgZXhpc3RpbmdEYXRhXG4gICAgICAgIGxldCBpbWdfdGFnID0gXCJmaWxlXCJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc0xvYWRpbmc6IHRydWVcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGZvcm1fZGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgICAgICAgIGZvcm1fZGF0YS5hcHBlbmQoaW1nX3RhZywgZmlsZSwgXCJpbWFnZUZpbGVuYW1lLnBkZlwiKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3JtX2RhdGEuYXBwZW5kKGltZ190YWcsIGZpbGVfYmxvYl9kYXRhLCBcImltYWdlRmlsZW5hbWUuanBlZ1wiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy51cGxvYWRDb21tb25QcmVzY3JpcHRpb24oZm9ybV9kYXRhLCAoZGF0YVJlc3AsIGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhUmVzcCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdXNlcl9ubyA9IHRoaXMucHJvcHMucHJpbWFyeU1vYmlsZT90aGlzLnByb3BzLnByaW1hcnlNb2JpbGU6dGhpcy5wcm9wcy51c2VyX2xvZ2dlZEluX251bWJlclxuICAgICAgICAgICAgICAgICAgICBpZih1c2VyX25vKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfbm8gPSBOdW1iZXIodXNlcl9ubylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uT2JqLnNlYXJjaClcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwaG9uZV9udW1iZXI6dXNlcl9ubyxsZWFkX3NvdXJjZTonUHJlc2NyaXB0aW9ucycsc291cmNlOnBhcnNlZCxsZWFkX3R5cGU6J1BSRVNDUklQVElPTlMnLGRvY3Rvcl9uYW1lOicnLGV4aXRwb2ludF91cmw6ZGF0YVJlc3AuZmlsZV91cmwgLGRvY3Rvcl9pZDpudWxsLGhvc3BpdGFsX2lkOm51bGwsaG9zcGl0YWxfbmFtZTpudWxsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IGd0bV9kYXRhID0geydDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnUHJlc2NyaXB0aW9uU3VibWl0dGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdldmVudCc6ICdwcmVzY3JpcHRpb24tc3VibWl0dGVkJ31cbiAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bV9kYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuTm9uSXBkQm9va2luZ0xlYWQoZGF0YSkgIFxuXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1N1Y2Nlc3M6IHRydWUsb3Blbl9wb3B1cF9vdmVybGF5OiBmYWxzZSwgdXBsb2FkRmlsZURhdGE6IHt9IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUHJlc2NyaXB0aW9uIFVwbG9hZGVkIFN1Y2Nlc3NmdWxseVwiIH0pXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMClcblxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQcmVzY3JpcHRpb24gdXBsb2FkIGZhaWx1cmUscGxlYXNlIHRyeSBhZnRlciBzb21lIHRpbWVcIiB9KVxuICAgICAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZF9maWxlOiBudWxsICwgc2VsZWN0ZWRfZmlsZV9uYW1lOiBudWxsfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZGF0YVVSSXRvQmxvYihkYXRhVVJJKSB7XG4gICAgICAgIHZhciBiaW5hcnkgPSBhdG9iKGRhdGFVUkkuc3BsaXQoJywnKVsxXSk7XG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJpbmFyeS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJyYXkucHVzaChiaW5hcnkuY2hhckNvZGVBdChpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBCbG9iKFtuZXcgVWludDhBcnJheShhcnJheSldLCB7IHR5cGU6ICdpbWFnZS9qcGVnJyB9KTtcbiAgICB9XG5cbiAgICBjYW5jZWxPdmVybGF5ID0gKHZhbCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuX3BvcHVwX292ZXJsYXk6IGZhbHNlLCBzZWxlY3RlZF9maWxlOiBudWxsLCBzZWxlY3RlZF9maWxlX25hbWU6IG51bGwsIHNob3dTdWNjZXNzOiBmYWxzZX0pO1xuICAgIH1cblxuICAgIHN1Ym1pdCA9ICgpPT57XG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc2VsZWN0ZWRfZmlsZSl7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaENyb3AoKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1cGxvYWRGaWxlRGF0YToge30gfSlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgdXBsb2FkIHZhbGlkIGZpbGVcIiB9KVxuICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWZ0ZXJVc2VyTG9naW4gPSAoKT0+e1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93TG9naW5WaWV3OiBmYWxzZX0pO1xuICAgICAgICBpZih0aGlzLnByb3BzLmFmdGVyVXNlckxvZ2luKXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWZ0ZXJVc2VyTG9naW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvbmVDbGlja2VkID0gKCk9PntcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkX2ZpbGU6IG51bGwsIG9wZW5fcG9wdXBfb3ZlcmxheTogZmFsc2UsIHNlbGVjdGVkX2ZpbGVfbmFtZTogbnVsbCwgc2hvd1N1Y2Nlc3M6IGZhbHNlIH0pXG4gICAgfVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuaXNfaG9tZV9wYWdlID9cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2AgJHt0aGlzLnByb3BzLmxhYldpZGdldD8nc2xpZGVyLWNhcmQtY29sdW1uIHVwbG9hZC1sYWItd2lkZ2V0Jzond2lkZ2V0IG1iLTMgYWxpZ24taXRlbS1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gdXBsb2FkLXByZXNjcmlwdGlvbi13aWRnZXQgbWJsLXZpZXctcHJlc2Mtc2VjdGlvbid9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCI0N1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2xhYi10ZXN0LXByZXMucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImZ3LTUwMCBtbC0yXCI+Qm9vayBUZXN0IGZyb20gUHJlc2NyaXB0aW9uITwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtLTAgY3N0bS1ib29rLWJ0biBmdy01MDBcIiBvbkNsaWNrID0geyhlKT0+dGhpcy51cGxvYWQoZSwgMSl9PlVwbG9hZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgOicnXG5cdFx0XHRcdH1cblxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5zZWFyY2hfbGFiICYmICF0aGlzLnN0YXRlLm9wZW5fcG9wdXBfb3ZlcmxheT9cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtYi0zIGQtZmxleCBhbGlnbi1pdGVtLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB1cGxvYWQtcHJlc2NyaXB0aW9uLXdpZGdldFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiNDdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9sYWItdGVzdC1wcmVzLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJmdy01MDAgbWwtMlwiPkJvb2sgVGVzdCA8YnIvPiBmcm9tIFByZXNjcmlwdGlvbiE8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm0tMCBjc3RtLWJvb2stYnRuIGZ3LTUwMFwiIG9uQ2xpY2sgPSB7KGUpPT50aGlzLnVwbG9hZChlLCAxKX0+VXBsb2FkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA6Jydcblx0XHRcdFx0fVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93U3VjY2Vzcz9cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyY3ZkLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjZWl2ZWQtcHJlc2NyaXB0aW9uLXNlY3Rpb24gcC01IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBmbGV4LWNvbHVtbiBkLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiNTdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zdWNjZXNzLWNoZWNrZWQuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2UgaGF2ZSByZWNlaXZlZCB5b3VyIHByZXNjcmlwdGlvbi4gT3VyIG1lZGljYWwgcmVwcmVzZW50YXRpdmUgd2lsbCBjYWxsIHlvdSBmb3IgYXNzaXN0YW5jZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNzdG0tYm9vay1idG4gZnctNzAwXCIgc3R5bGU9e3t3aWR0aDoxMjB9fSBvbkNsaWNrPXt0aGlzLmRvbmVDbGlja2VkfT5Eb25lPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgIH0gICAgXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLm9wZW5fcG9wdXBfb3ZlcmxheT9cbiAgICAgICAgICAgICAgICAgICAgPENvbW1vblBvcHVwIGNhbmNlbE92ZXJsYXk9eyhhKT0+dGhpcy5jYW5jZWxPdmVybGF5KGEpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dMb2dpblZpZXc/PExvZ2luUG9wdXAgYWZ0ZXJVc2VyTG9naW49e3RoaXMuYWZ0ZXJVc2VyTG9naW59IGxvY2F0aW9uT2JqPXt0aGlzLnByb3BzLmxvY2F0aW9uT2JqfSBoaXN0b3J5T2JqPSB7dGhpcy5wcm9wcy5oaXN0b3J5T2JqfSBjbG9zZVBvcHVwPXt0aGlzLmNhbmNlbE92ZXJsYXl9Lz5cbiAgICAgICAgXHRcdFx0XHRcdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBsb2FkLXByZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLnNob3dTdWNjZXNzP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIHRleHQtY2VudGVyIG12LWhlYWRlciBwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmdy03MDAgdGV4dC1tZFwiPlVwbG9hZCBQcmVzY3JpcHRpb248L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY3Jvc3MtcHJlc2MtbW9kYWxcIiAgb25DbGljaz17KCk9PnRoaXMuc2V0U3RhdGUoe2FiYzogdHJ1ZX0pIC8qdGhpcy5wcm9wcy5oaWRlTG9naW5Qb3B1cC5iaW5kKHRoaXMpKi99PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpPT50aGlzLmNhbmNlbE92ZXJsYXkoMSl9PiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHVwbG9hZC1wcmVzY3JpcHRpb24tY29sdW1uIGQtZmxleCBhbGlnbi1pdGVtLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGZsZXgtY29sdW1uICR7dGhpcy5zdGF0ZS5zaG93X2Vycm9yPydlcnJvci1ib3JkZXItY29sb3InOicnfWB9IHN0eWxlPXt7cG9zaXRpb246J3JlbGF0aXZlJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNMb2FkaW5nP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1wcmYtaW1nLWdyZCBkLWJsb2NrIHVwbG9hZC1wcmVzYy1sb2FkaW5nLXBkZiBkLWZsZXggYWxpZ24taXRlbS1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItZm9yLWNoYXQtZGl2IG10LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGVyLWZvci1jaGF0IG1iLTAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zZWxlY3RlZF9maWxlID8gJ3ByZXNjcmlwdGlvbi11cGxvYWRlZC1pbWcnIDogJ3ByZXNjcmlwdGlvbi11cGxvYWRlZCd9IHdpZHRoPXshdGhpcy5zdGF0ZS5zZWxlY3RlZF9maWxlID8gJzcwcHgnOicnfSBzcmM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRfZmlsZT90aGlzLnN0YXRlLnNlbGVjdGVkX2ZpbGU6QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3ByZXNjLWljb24ucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZF9maWxlX25hbWU/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LWNlbnRlclwiIHN0eWxlPXt7Zm9udFNpemU6MTF9fT57dGhpcy5zdGF0ZS5zZWxlY3RlZF9maWxlX25hbWV9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dfZXJyb3I/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByZXNjcmlwdGlvbi11cGxvYWRlZC1pbWdcIiBzcmM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRfZmlsZX0gLz4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJlcnJvci1tc2ctdGV4dCB0ZXh0LWNlbnRlclwiPnt0aGlzLnN0YXRlLnNob3dfZXJyb3J9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjc3RtLWJvb2stYnRuIGZ3LTcwMCBkLWZsZXggYWxpZ24taXRlbS1jZW50ZXIgbXQtMyBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3VwLWFycm93LnN2Z1wifSBoZWlnaHQ9XCIxN1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiIGh0bWxGb3I9XCJwcmVzYy11cGxvYWRcIiBzdHlsZT17eyBmb250U2l6ZTogMTN9fT5SZS1VcGxvYWQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicHJlc2MtdXBsb2FkXCIgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCJpbWFnZS8qO2NhcHR1cmU9Y2FtZXJhXCIgb25DaGFuZ2UgPSB7KGUpPT50aGlzLnVwbG9hZChlKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8YnV0dG9uIGNsYXNzTmFtZT1cImNzdG0tYm9vay1idG4gZnctNzAwIGQtZmxleCBhbGlnbi1pdGVtLWNlbnRlciBtdC0zIG1iLTNcIiBvbkNsaWNrPXsoZSk9PmUuc3RvcFByb3BhZ2F0aW9uKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3VwLWFycm93LnN2Z1wifSBoZWlnaHQ9XCIxN1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIiBodG1sRm9yPVwicHJlc2MtdXBsb2FkXCIgc3R5bGU9e3sgZm9udFNpemU6IDEzfX0+e3RoaXMuc3RhdGUuc2VsZWN0ZWRfZmlsZT8nUmUtVXBsb2FkJzonVXBsb2FkJ308L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInByZXNjLXVwbG9hZFwiIHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKjtjYXB0dXJlPWNhbWVyYVwiIG9uQ2hhbmdlID0geyhlKT0+dGhpcy51cGxvYWQoZSl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgcGItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFsdGgtYWR2aXNvci1jb2wgZC1mbGV4IHAtMiBhbGlnbi1pdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIxN1wiIGNsYXNzTmFtZT1cImluZm8tZGV0YWlsLWljb25cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pbmZvLWljb24uc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMlwiPk91ciBoZWFsdGggYWR2aXNvciB3aWxsIGFzc2lzdCB5b3UgaW4gYm9va2luZyB5b3VyIHRlc3RzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgc3R5bGU9e3ttYXJnaW5Ub3A6IDExfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJndWlkZWxpbmVzLWNvbCBwLTMgcHQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LWJsYWNrXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDV9fT5QcmVzY3JpcHRpb24gR3VpZGVsaW5lczwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZ3LTUwMFwiPkF2b2lkIGJsdXJyZWQgaW1hZ2U8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmdy01MDBcIj5TdXBwb3J0ZWQgZmlsZXMgdHlwZToganBlZyAsIGpwZyAsIHBuZyAsIHBkZjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZ3LTUwMFwiPk1heGltdW0gYWxsb3dlZCBmaWxlIHNpemU6IDVNQjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcmVzYy1zdWJtaXQtYnRuIGNzdG0tYm9vay1idG4gZnctNzAwXCIgc3R5bGU9e3tib3JkZXJSYWRpdXM6MH19IG9uQ2xpY2s9e3RoaXMuc3VibWl0fT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PjogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvQ29tbW9uUG9wdXA+XG4gICAgICAgICAgICAgICAgICAgIDonJ1xuXHRcdFx0XHR9XG5cblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByZXNjcmlwdGlvblZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cblxuY2xhc3MgQ29tbW9uUG9wdXAgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKXtcblxuXHRcdHJldHVybihcblx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYW5jZWwtb3ZlcmxheSBjYW5jZWwtb3ZlcmxheS16aW5kZXhcIiBvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy5jYW5jZWxPdmVybGF5KDEpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBjYW5jZWwtYXBwb2ludG1lbnQtZGl2IGNhbmNlbC1wb3B1cFwiPlxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIGFjdGlvbi1zY3JlZW4taGVhZGVyIHBvcC1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgY2FuY2VsLWFwcG9pbnRtZW50LWhlYWRcIj48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlcm1zLWNvbmRpdGlvbi1kaXYgb25zY3JlZW4tc2Nyb2xsXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAge1xuXHQgICAgICAgICAgICBcdFx0dGhpcy5wcm9wcy5jaGlsZHJlblxuXHQgICAgICAgICAgICBcdH1cbiAgICAgICAgICAgIFx0PC9kaXY+XG5cdCAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21tb25Qb3B1cCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgQ29tbW9uTG9naW5Qb3B1cCBmcm9tICcuL2NvbW1vbkZpeGVkUG9wdXAuanMnXG5cblxuLypUbyBSZXVzZSB0aGUgY29tcG9uZW50IG1ha2Ugc3VyZSB0byBwYXNzIHRoZXNlIG1ldGhvZHMgZnJvbSBwYXJlbnQgY29tcG9uZW50XG4xKSA9PT0+IGFmdGVyVXNlckxvZ2luKHRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciB1c2VyIGxvZ2dlZCBpbiBzdWNjZXNzZnVsbHkpXG4yKSBUaGlzIGlzIHB1cmUgY29tcG9uZW50IHNvIHBsZWFzZSBkb250J3QgZG8gdGhpcyAoLi4udGhpcy5wcm9wcykgLCBvbmx5IHByb3BzIHlvdSBuZWVkIGluIHRoZSBjb21wb25lbnQgdXNlIG9ubHkgdGhvc2UuXG4zKSBoaXN0b3J5T2JqPSB7dGhpcy5wcm9wcy5oaXN0b3J5fSwgbG9jYXRpb25PYmogPSB7dGhpcy5wcm9wcy5sb2NhdGlvbn1cbjQpID09PT5jbG9zZVBvcHVwIChtZXRob2QgdG8gY2xvc2UgcG9wdXApXG4qL1xuY2xhc3MgTG9naW5Qb3B1cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgX21vdW50ZWQgPSBmYWxzZVxuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcGhvbmVOdW1iZXI6ICcnLFxuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yOiAnJyxcbiAgICAgICAgICAgIHNob3dPVFA6IGZhbHNlLFxuICAgICAgICAgICAgb3RwOiBcIlwiLFxuICAgICAgICAgICAgb3RwVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICBlcnJvcl9tZXNzYWdlOiAnJyxcbiAgICAgICAgICAgIHNtc0J0blR5cGU6IG51bGwsXG4gICAgICAgICAgICBlbmFibGVPdHBSZXF1ZXN0OiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5fbW91bnRlZCA9IHRydWVcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICB0aGlzLl9tb3VudGVkID0gZmFsc2UgIFxuICAgIH1cbiAgICBpbnB1dEhhbmRsZXIoZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93T1RQICYmIGUudGFyZ2V0Lm5hbWUgPT0gJ3Bob25lTnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsIHZhbGlkYXRpb25FcnJvcjogXCJcIiwgc2hvd09UUDogZmFsc2UsIG90cDogXCJcIiwgZXJyb3JfbWVzc2FnZTogJycgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdWJtaXRPVFBSZXF1ZXN0KG51bWJlciwgcmVzZW5kRmxhZyA9IGZhbHNlLCB2aWFTbXMsIHZpYVdoYXRzYXBwLCBmcm9tUG9wdXAgPSBudWxsKSB7XG5cbiAgICAgICAgbGV0IGxlYWRfZGF0YSA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb25PYmouc2VhcmNoKVxuICAgICAgICBpZiAobnVtYmVyLm1hdGNoKC9eWzU2Nzg5XXsxfVswLTldezl9JC8pKSB7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiXCIgfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kT1RQKG51bWJlciwgdmlhU21zLCB2aWFXaGF0c2FwcCwgJ2luc3VyYW5jZS1sb2dpbicsIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25FcnJvcjogXCJDb3VsZCBub3QgZ2VuZXJhdGUgT1RQLlwiIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMb2dpblBvcHVwQ29udGludWUnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2V2ZW50JzogJ2xvZ2luLXBvcHVwLWNvbnRpbnVlLWNsaWNrJywgJ21vZGUnOiB2aWFTbXMgPyAndmlhU21zJyA6IHZpYVdoYXRzYXBwID8gJ3ZpYVdoYXRzYXBwJyA6ICcnLCAnbW9iaWxlTm8nOiB0aGlzLnN0YXRlLnBob25lTnVtYmVyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZpYVdoYXRzYXBwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZW5hYmxlT3RwUmVxdWVzdDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVuYWJsZU90cFJlcXVlc3Q6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dPVFA6IHRydWUsIG90cFRpbWVvdXQ6IHRydWUsIHNtc0J0blR5cGU6IHZpYVNtcyA/IHRydWUgOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX21vdW50ZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvdHBUaW1lb3V0OiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCAyMDAwMClcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl9tb3VudGVkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZW5hYmxlT3RwUmVxdWVzdDogZmFsc2UgfSkgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgNjAwMDApXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZyb21Qb3B1cCAmJiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbnMtZm9ybS1zbGlkZXInKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZyb21Qb3B1cCA9PSAnb25lJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lucy1mb3JtLXNsaWRlcicpWzBdLnNjcm9sbCh7IGxlZnQ6IDk5OSwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lucy1mb3JtLXNsaWRlcicpWzBdLnNjcm9sbCh7IGxlZnQ6IC05OTksIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBudW1iZXIgKDEwIGRpZ2l0cylcIiB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmVyaWZ5T1RQKCkge1xuICAgICAgICBsZXQgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbk9iai5zZWFyY2gpXG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUub3RwKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlBsZWFzZSBlbnRlciBPVFBcIiwgZXJyb3JfbWVzc2FnZTogJycgfSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm90cC5sZW5ndGggPCA2IHx8IHRoaXMuc3RhdGUub3RwLmxlbmd0aCA+IDYpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiUGxlYXNlIGVudGVyIHZhbGlkIE9UUFwiLCBlcnJvcl9tZXNzYWdlOiAnJyB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGVhZF9kYXRhID0gcGFyc2VkXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnBob25lTnVtYmVyLm1hdGNoKC9eWzU2Nzg5XXsxfVswLTldezl9JC8pKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlwiIH0pXG4gICAgICAgICAgICBsZXQgZXh0cmFQYXJhbXMgPSB7fVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zdWJtaXRPVFAodGhpcy5zdGF0ZS5waG9uZU51bWJlciwgdGhpcy5zdGF0ZS5vdHAsIGV4dHJhUGFyYW1zLCAoZXhpc3RzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0cy5jb2RlID09ICdpbnZhbGlkJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JfbWVzc2FnZTogZXhpc3RzLm1lc3NhZ2UsIHZhbGlkYXRpb25FcnJvcjogJycgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldFVzZXJQcm9maWxlKCkudGhlbigocmVzcCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWZ0ZXJVc2VyTG9naW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJMb2dpbiBTdWNjZXNzZnVsbHlcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25FcnJvcjogXCJQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIG51bWJlciAoMTAgZGlnaXRzKVwiIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaGFuZGxlS2V5UHJlc3MoZSkge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIHRoaXMudmVyaWZ5T1RQKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9oYW5kbGVDb250aW51ZVByZXNzKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuc2hvd09UUCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0T1RQUmVxdWVzdCh0aGlzLnN0YXRlLnBob25lTnVtYmVyLCAnJywgdHJ1ZSwgZmFsc2UsICdvbmUnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZWRpdE51bWJlcigpIHtcbiAgICAgICAgbGV0IG51bWJlciA9IHRoaXMuc3RhdGUucGhvbmVOdW1iZXJcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbnMtZm9ybS1zbGlkZXInKVswXS5zY3JvbGwoeyBsZWZ0OiAtOTk5LCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiXCIsIHNob3dPVFA6IGZhbHNlLCBvdHA6IFwiXCIsIHBob25lTnVtYmVyOiAnJyB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBob25lTnVtYmVyOiBudW1iZXIgfSlcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm51bWJlclwiKS5mb2N1cygpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCAyMDApXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLXNsaWRlciBtb2JpbGUtdmVyaWZpY2F0aW9uLXNjcmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWhlYWRlciB0ZXh0LWNlbnRlciBtdi1oZWFkZXJcIiBzdHlsZT17e3Bvc2l0aW9uOidyZWxhdGl2ZSd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1tZCBzaWduLXVwLW1ibC10ZXh0XCI+RW50ZXIgeW91ciBtb2JpbGUgbnVtYmVyIHRvIHByb2NlZWQ8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5wcm9wcy5jbG9zZVBvcHVwfSBzdHlsZT17e3Bvc2l0aW9uOidhYnNvbHV0ZScsIHJpZ2h0OjQsIHRvcDo0fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9ydC1jbG9zZS5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6IDE0IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHRleHQtY2VudGVyIHB0LTAgcGItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG1vYmlsZS1maWVsZCBzdXAtaW5wdXQtcGRuZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRvbi1ncm91cCBlbnRlci1tb2JpbGUtbnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmYy1pbnB1dCB0ZXh0LWNlbnRlclwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBtb2JpbGUgbnVtYmVyXCIgdmFsdWU9e3RoaXMuc3RhdGUucGhvbmVOdW1iZXJ9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSBuYW1lPVwicGhvbmVOdW1iZXJcIiBvbktleVByZXNzPXt0aGlzLl9oYW5kbGVDb250aW51ZVByZXNzLmJpbmQodGhpcyl9IGRpc2FibGVkPXt0aGlzLnN0YXRlLnNob3dPVFAgPyB0cnVlIDogZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZSBtLTAgbWItMlwiPnt0aGlzLnN0YXRlLmVycm9yX21lc3NhZ2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlIG0tMCBtYi0yXCI+e3RoaXMuc3RhdGUudmFsaWRhdGlvbkVycm9yfTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXRPVFBSZXF1ZXN0LmJpbmQodGhpcywgdGhpcy5zdGF0ZS5waG9uZU51bWJlciwgZmFsc2UsIHRydWUsIGZhbHNlLCAnb25lJyl9IGNsYXNzTmFtZT1cInYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLXNtIGxnLXNtcy1idG4gYnRuLWdyZG50XCI+TGV04oCZcyBnZXQgeW91IGluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIHRleHQtY2VudGVyIG12LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LW1kIHNpZ24tdXAtbWJsLXRleHRcIj5FbnRlciB0aGUgT1RQIHdl4oCZdmUgc2VudCB0byB5b3VyIG1vYmlsZSBudW1iZXI8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCB0ZXh0LWNlbnRlciBwdC0wIHBiLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtb2JpbGUtZmllbGQgc3VwLWlucHV0LXBkbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkb24tZ3JvdXAgZW50ZXItbW9iaWxlLW51bWJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZmMtaW5wdXQgdGV4dC1jZW50ZXJcIiBwbGFjZWhvbGRlcj1cIjEwIGRpZ2l0IG1vYmlsZSBudW1iZXJcIiB2YWx1ZT17dGhpcy5zdGF0ZS5waG9uZU51bWJlcn0gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IG5hbWU9XCJwaG9uZU51bWJlclwiIG9uS2V5UHJlc3M9e3RoaXMuX2hhbmRsZUNvbnRpbnVlUHJlc3MuYmluZCh0aGlzKX0gZGlzYWJsZWQ9e3RoaXMuc3RhdGUuc2hvd09UUCA/IHRydWUgOiBmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5zLW51bS1lZGl0XCIgb25DbGljaz17dGhpcy5lZGl0TnVtYmVyLmJpbmQodGhpcyl9PkVkaXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dPVFAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG9uLWdyb3VwIGVudGVyLW1vYmlsZS1udW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZjLWlucHV0IHRleHQtY2VudGVyXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBPVFBcIiB2YWx1ZT17dGhpcy5zdGF0ZS5vdHB9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSBuYW1lPVwib3RwXCIgb25LZXlQcmVzcz17dGhpcy5faGFuZGxlS2V5UHJlc3MuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUub3RwVGltZW91dCA/IFwiXCIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtc3RhcnQganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZXNlbmRPdHBcIiBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnIH19IG9uQ2xpY2s9e3RoaXMuc3VibWl0T1RQUmVxdWVzdC5iaW5kKHRoaXMsIHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsIHRydWUsIHRoaXMuc3RhdGUuc21zQnRuVHlwZSA/IGZhbHNlIDogdHJ1ZSwgIXRoaXMuc3RhdGUuc21zQnRuVHlwZSA/IGZhbHNlIDogdHJ1ZSwgJ29uZScpfT57dGhpcy5zdGF0ZS5zbXNCdG5UeXBlID8gJ1ByZWZlciB3ZSBXaGF0c0FwcCBpdCB0byB5b3U/JyA6ICdTZW5kIHZpYSBTTVMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lbmFibGVPdHBSZXF1ZXN0ID8gJycgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZXNlbmRPdHAgaW5zLW90cC1yZXNlbmRcIiBvbkNsaWNrPXt0aGlzLnN1Ym1pdE9UUFJlcXVlc3QuYmluZCh0aGlzLCB0aGlzLnN0YXRlLnBob25lTnVtYmVyLCB0cnVlLCB0aGlzLnN0YXRlLnNtc0J0blR5cGUgPyB0cnVlIDogZmFsc2UsICF0aGlzLnN0YXRlLnNtc0J0blR5cGUgPyB0cnVlIDogZmFsc2UsICdvbmUnKX0+UmVzZW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2UgbS0wIG1iLTJcIj57dGhpcy5zdGF0ZS5lcnJvcl9tZXNzYWdlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZSBtLTAgbWItMlwiPnt0aGlzLnN0YXRlLnZhbGlkYXRpb25FcnJvcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93T1RQID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnZlcmlmeU9UUC5iaW5kKHRoaXMpfSBkaXNhYmxlZD17dGhpcy5wcm9wcy5zdWJtaXRfb3RwfSBjbGFzc05hbWU9XCJidG4tZ3JkbnQgdi1idG4gdi1idG4tcHJpbWFyeSBidG4tc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2Nlc3MgTm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0T1RQUmVxdWVzdC5iaW5kKHRoaXMsIHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsIGZhbHNlLCB0cnVlLCBmYWxzZSl9IGRpc2FibGVkPXt0aGlzLnByb3BzLm90cF9yZXF1ZXN0X3NlbnR9IGNsYXNzTmFtZT1cInYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLXNtIGxnLXNtcy1idG4gYnRuLWdyZG50XCI+TGV04oCZcyBnZXQgeW91IGluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmdy01MDAgcC0zXCIgc3R5bGU9e3sgZm9udFNpemU6IDEyIH19ID5CeSBwcm9jZWVkaW5nLCB5b3UgaGVyZWJ5IGFncmVlIHRvIHRoZSA8YSBocmVmPVwiL3Rlcm1zXCIgdGFyZ2V0PVwiX2JsYW5rXCIgc3R5bGU9e3sgY29sb3I6IGB2YXIoLS10ZXh0LS1wcmltYXJ5LS1jb2xvcilgIH19ID5FbmQgVXNlciBBZ3JlZW1lbnQ8L2E+IGFuZCA8YSBocmVmPVwiL3ByaXZhY3lcIiB0YXJnZXQ9XCJfYmxhbmtcIiBzdHlsZT17eyBjb2xvcjogYHZhcigtLXRleHQtLXByaW1hcnktLWNvbG9yKWAgfX0gPlByaXZhY3kgUG9saWN5LjwvYT48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IExvZ2luUG9wdXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyB1cGxvYWRDb21tb25QcmVzY3JpcHRpb24sIE5vbklwZEJvb2tpbmdMZWFkIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBQcmVzY3JpcHRpb25WaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9QcmVzY3JpcHRpb25VcGxvYWQvcHJlc2NyaXB0aW9uVXBsb2FkLmpzJ1xuXG5jbGFzcyBQcmVzY3JpcHRpb25VcGxvYWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdHJlbmRlcigpe1xuXG5cdFx0cmV0dXJuKFxuXHRcdFx0PFByZXNjcmlwdGlvblZpZXcgey4uLnRoaXMucHJvcHN9Lz5cblx0XHRcdClcblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHBhc3NlZFByb3BzKSA9PiB7XG5cdFxuXHRsZXQgeyBwcmltYXJ5TW9iaWxlLCB1c2VyX2xvZ2dlZEluX251bWJlciB9ID0gc3RhdGUuVVNFUlxuXHRcblx0cmV0dXJuIHtcblx0XHRwcmltYXJ5TW9iaWxlLFxuXHRcdHVzZXJfbG9nZ2VkSW5fbnVtYmVyXG5cdH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKT0+e1xuXHRyZXR1cm4ge1xuXHRcdHVwbG9hZENvbW1vblByZXNjcmlwdGlvbiA6IChkYXRhUGFyYW1zLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2godXBsb2FkQ29tbW9uUHJlc2NyaXB0aW9uKGRhdGFQYXJhbXMsIGNhbGxiYWNrKSksXG5cdFx0Tm9uSXBkQm9va2luZ0xlYWQ6KGRhdGEsY2IpID0+ZGlzcGF0Y2goTm9uSXBkQm9va2luZ0xlYWQoZGF0YSwgY2IpKSxcblxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFByZXNjcmlwdGlvblVwbG9hZCkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBzZW5kT1RQLCBzdWJtaXRPVFAsIGdldFVzZXJQcm9maWxlIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBMb2dpblBvcHVwVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvY29tbW9uRml4ZWRQb3B1cC9sb2dpblBvcHVwLmpzJ1xuXG5jbGFzcyBQcmVzY3JpcHRpb25VcGxvYWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdHJlbmRlcigpe1xuXG5cdFx0cmV0dXJuKFxuXHRcdFx0PExvZ2luUG9wdXBWaWV3IHsuLi50aGlzLnByb3BzfS8+XG5cdFx0XHQpXG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwYXNzZWRQcm9wcykgPT4ge1xuXHRyZXR1cm4ge1xuXG5cdH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKT0+e1xuXHRyZXR1cm4ge1xuXHRcdHNlbmRPVFA6IChudW1iZXIsdmlhU21zLHZpYVdoYXRzYXBwLG1lc3NhZ2VfdHlwZSwgY2IpID0+IGRpc3BhdGNoKHNlbmRPVFAobnVtYmVyLHZpYVNtcyx2aWFXaGF0c2FwcCxtZXNzYWdlX3R5cGUsIGNiKSksXG4gICAgICAgIHN1Ym1pdE9UUDogKG51bWJlciwgb3RwLCBleHRyYVBhcmFtcywgY2IpID0+IGRpc3BhdGNoKHN1Ym1pdE9UUChudW1iZXIsIG90cCwgZXh0cmFQYXJhbXMsICBjYikpLFxuICAgICAgICBnZXRVc2VyUHJvZmlsZTogKCkgPT4gZGlzcGF0Y2goZ2V0VXNlclByb2ZpbGUoKSlcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShQcmVzY3JpcHRpb25VcGxvYWQpIl0sInNvdXJjZVJvb3QiOiIifQ==